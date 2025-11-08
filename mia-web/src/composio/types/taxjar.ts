// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TAXJAR's TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER tool input.
 */
type TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER_INPUT = {
  /**
   * Amount
   * @description Order amount (excluding shipping)
   */
  amount?: number;
  /**
   * Customer Id
   * @description Identifier for the customer, if known
   * @default null
   */
  customer_id: string | null;
  /**
   * Exemption Type
   * @description Type of exemption for the order (e.g., wholesale, government, non_profit, other)
   * @default null
   */
  exemption_type: string | null;
  /**
   * From City
   * @description Origin city
   * @default null
   */
  from_city: string | null;
  /**
   * From Country
   * @description Origin country code (ISO 3166-1 alpha-2)
   */
  from_country?: string;
  /**
   * From State
   * @description Origin state or province
   */
  from_state?: string;
  /**
   * From Street
   * @description Origin street address
   * @default null
   */
  from_street: string | null;
  /**
   * From Zip
   * @description Origin ZIP or postal code
   */
  from_zip?: string;
  /**
   * Line Items
   * @description List of line items in the order
   * @default null
   */
  line_items: {
      /**
       * Discount
       * @description Discount amount applied to this line item
       * @default null
       */
      discount: number | null;
      /**
       * Id
       * @description Line item identifier
       * @default null
       */
      id: string | null;
      /**
       * Product Tax Code
       * @description Product tax code (category) for this item
       * @default null
       */
      product_tax_code: string | null;
      /**
       * Quantity
       * @description Number of units for this line item
       */
      quantity: number;
      /**
       * Unit Price
       * @description Price per unit for this line item
       */
      unit_price: number;
  }[] | null;
  /**
   * Nexus Addresses
   * @description List of seller nexus addresses to consider for tax calculations
   * @default null
   */
  nexus_addresses: {
      /**
       * City
       * @description City for nexus address
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country code (ISO 3166-1 alpha-2)
       */
      country: string;
      /**
       * Id
       * @description Unique identifier for this nexus address
       */
      id: string;
      /**
       * State
       * @description State or province for nexus address
       */
      state: string;
      /**
       * Street
       * @description Street for nexus address
       * @default null
       */
      street: string | null;
      /**
       * Zip
       * @description ZIP or postal code for nexus address
       */
      zip: string;
  }[] | null;
  /**
   * Shipping
   * @description Shipping cost for the order
   */
  shipping?: number;
  /**
   * To City
   * @description Destination city
   * @default null
   */
  to_city: string | null;
  /**
   * To Country
   * @description Destination country code (ISO 3166-1 alpha-2)
   */
  to_country?: string;
  /**
   * To State
   * @description Destination state or province
   */
  to_state?: string;
  /**
   * To Street
   * @description Destination street address
   * @default null
   */
  to_street: string | null;
  /**
   * To Zip
   * @description Destination ZIP or postal code
   */
  to_zip?: string;
};

/**
 * Type of TAXJAR's TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER tool output.
 */
type TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tax
       * @description Calculated tax details for the order
       */
      tax: {
          /**
           * Amount To Collect
           * @description Total tax amount to collect
           */
          amount_to_collect: number;
          /**
           * Breakdown
           * @description Detailed tax breakdown for the order
           */
          breakdown: {
              /**
               * City Tax Collectable
               * @description City tax amount to collect
               */
              city_tax_collectable: number;
              /**
               * City Tax Rate
               * @description City tax rate applied to order
               */
              city_tax_rate: number;
              /**
               * City Taxable Amount
               * @description Total city taxable amount
               */
              city_taxable_amount: number;
              /**
               * Combined Tax Rate
               * @description Overall combined tax rate
               */
              combined_tax_rate: number;
              /**
               * County Tax Collectable
               * @description County tax amount to collect
               */
              county_tax_collectable: number;
              /**
               * County Tax Rate
               * @description County tax rate applied to order
               */
              county_tax_rate: number;
              /**
               * County Taxable Amount
               * @description Total county taxable amount
               */
              county_taxable_amount: number;
              /**
               * Line Items
               * @description Breakdown details per line item
               */
              line_items: {
                  /**
                   * City Tax Collectable
                   * @description City tax amount to collect
                   */
                  city_tax_collectable: number;
                  /**
                   * City Tax Rate
                   * @description City tax rate applied
                   */
                  city_tax_rate: number;
                  /**
                   * City Taxable Amount
                   * @description City taxable amount for this line item
                   */
                  city_taxable_amount: number;
                  /**
                   * Combined Tax Rate
                   * @description Combined tax rate applied
                   */
                  combined_tax_rate: number;
                  /**
                   * County Tax Collectable
                   * @description County tax amount to collect
                   */
                  county_tax_collectable: number;
                  /**
                   * County Tax Rate
                   * @description County tax rate applied
                   */
                  county_tax_rate: number;
                  /**
                   * County Taxable Amount
                   * @description County taxable amount for this line item
                   */
                  county_taxable_amount: number;
                  /**
                   * Id
                   * @description Line item identifier
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Special District Tax Collectable
                   * @description Special district tax amount to collect
                   */
                  special_district_tax_collectable: number;
                  /**
                   * Special District Tax Rate
                   * @description Special district tax rate applied
                   */
                  special_district_tax_rate: number;
                  /**
                   * Special District Taxable Amount
                   * @description Special district taxable amount for this line item
                   */
                  special_district_taxable_amount: number;
                  /**
                   * State Tax Collectable
                   * @description State tax amount to collect
                   */
                  state_tax_collectable: number;
                  /**
                   * State Tax Rate
                   * @description State tax rate applied
                   */
                  state_tax_rate: number;
                  /**
                   * State Taxable Amount
                   * @description State taxable amount for this line item
                   */
                  state_taxable_amount: number;
                  /**
                   * Tax Collectable
                   * @description Tax amount to collect for this line item
                   */
                  tax_collectable: number;
                  /**
                   * Taxable Amount
                   * @description Taxable amount for this line item
                   */
                  taxable_amount: number;
              }[];
              /**
               * Shipping
               * @description Breakdown details for shipping
               */
              shipping: {
                  /**
                   * City Tax Collectable
                   * @description City tax amount to collect on shipping
                   */
                  city_tax_collectable: number;
                  /**
                   * City Tax Rate
                   * @description City tax rate applied to shipping
                   */
                  city_tax_rate: number;
                  /**
                   * City Taxable Amount
                   * @description City taxable shipping amount
                   */
                  city_taxable_amount: number;
                  /**
                   * Combined Tax Rate
                   * @description Combined tax rate applied to shipping
                   */
                  combined_tax_rate: number;
                  /**
                   * County Tax Collectable
                   * @description County tax amount to collect on shipping
                   */
                  county_tax_collectable: number;
                  /**
                   * County Tax Rate
                   * @description County tax rate applied to shipping
                   */
                  county_tax_rate: number;
                  /**
                   * County Taxable Amount
                   * @description County taxable shipping amount
                   */
                  county_taxable_amount: number;
                  /**
                   * Special District Tax Collectable
                   * @description Special district tax amount to collect on shipping
                   */
                  special_district_tax_collectable: number;
                  /**
                   * Special District Tax Rate
                   * @description Special district tax rate applied to shipping
                   */
                  special_district_tax_rate: number;
                  /**
                   * Special District Taxable Amount
                   * @description Special district taxable shipping amount
                   */
                  special_district_taxable_amount: number;
                  /**
                   * State Tax Collectable
                   * @description State tax amount to collect on shipping
                   */
                  state_tax_collectable: number;
                  /**
                   * State Tax Rate
                   * @description State tax rate applied to shipping
                   */
                  state_tax_rate: number;
                  /**
                   * State Taxable Amount
                   * @description State taxable shipping amount
                   */
                  state_taxable_amount: number;
                  /**
                   * Tax Collectable
                   * @description Tax amount to collect on shipping
                   */
                  tax_collectable: number;
                  /**
                   * Taxable Amount
                   * @description Taxable shipping amount
                   */
                  taxable_amount: number;
              };
              /**
               * Special District Tax Collectable
               * @description Special district tax amount to collect
               */
              special_district_tax_collectable: number;
              /**
               * Special District Tax Rate
               * @description Special district tax rate applied to order
               */
              special_district_tax_rate: number;
              /**
               * Special District Taxable Amount
               * @description Total special district taxable amount
               */
              special_district_taxable_amount: number;
              /**
               * State Tax Collectable
               * @description State tax amount to collect
               */
              state_tax_collectable: number;
              /**
               * State Tax Rate
               * @description State tax rate applied to order
               */
              state_tax_rate: number;
              /**
               * State Taxable Amount
               * @description Total state taxable amount
               */
              state_taxable_amount: number;
              /**
               * Tax Collectable
               * @description Total tax amount to collect for the order
               */
              tax_collectable: number;
              /**
               * Taxable Amount
               * @description Total taxable amount for the order
               */
              taxable_amount: number;
          };
          /**
           * Exemption Type
           * @description Exemption type if applicable
           * @default null
           */
          exemption_type: string | null;
          /**
           * Freight Taxable
           * @description Whether shipping is taxable
           */
          freight_taxable: boolean;
          /**
           * Has Nexus
           * @description Whether the seller has nexus in the destination
           */
          has_nexus: boolean;
          /**
           * Jurisdictions
           * @description Applicable tax jurisdictions
           */
          jurisdictions: {
              /**
               * City
               * @description City level jurisdiction
               */
              city: string;
              /**
               * Country
               * @description Country level jurisdiction
               */
              country: string;
              /**
               * County
               * @description County level jurisdiction
               */
              county: string;
              /**
               * State
               * @description State level jurisdiction
               */
              state: string;
          };
          /**
           * Order Total Amount
           * @description Total order amount including shipping
           */
          order_total_amount: number;
          /**
           * Rate
           * @description Overall tax rate applied to order
           */
          rate: number;
          /**
           * Shipping
           * @description Shipping cost included in the order
           */
          shipping: number;
          /**
           * Tax Source
           * @description Tax sourcing (origin or destination)
           */
          tax_source: string;
          /**
           * Taxable Amount
           * @description Total taxable amount of the order
           */
          taxable_amount: number;
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
 * Type of TAXJAR's TAXJAR_CREATE_ORDER_TRANSACTION tool input.
 */
type TAXJAR_CREATE_ORDER_TRANSACTION_INPUT = {
  /**
   * Amount
   * @description Total amount of the order
   */
  amount?: number;
  /**
   * Exemption Type
   * @description Type of exemption if applicable
   * @default null
   * @enum {string|null}
   */
  exemption_type: "wholesale" | "government" | "other" | null;
  /**
   * Line Items
   * @description Line items in the order
   * @default null
   */
  line_items: {
      /**
       * Description
       * @description Description of the item
       * @default null
       */
      description: string | null;
      /**
       * Discount
       * @description Discount applied to the item
       * @default null
       */
      discount: number | null;
      /**
       * Id
       * @description Unique line item identifier
       * @default null
       */
      id: string | null;
      /**
       * Product Identifier
       * @description Product identifier
       * @default null
       */
      product_identifier: string | null;
      /**
       * Quantity
       * @description Quantity of the item purchased
       */
      quantity: number;
      /**
       * Sales Tax
       * @description Sales tax collected for the item
       * @default null
       */
      sales_tax: number | null;
      /**
       * Unit Price
       * @description Price per unit
       * @default null
       */
      unit_price: number | null;
  }[] | null;
  /**
   * Nexus Addresses
   * @description Nexus addresses associated with the transaction
   * @default null
   */
  nexus_addresses: {
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Two-letter ISO country code
       */
      country: string;
      /**
       * Id
       * @description Unique nexus address ID
       * @default null
       */
      id: string | null;
      /**
       * State
       * @description Two-letter state code
       */
      state: string;
      /**
       * Street
       * @description Street address
       * @default null
       */
      street: string | null;
      /**
       * Zip
       * @description Postal code
       */
      zip: string;
  }[] | null;
  /**
   * Sales Tax
   * @description Sales tax collected for the order
   * @default null
   */
  sales_tax: number | null;
  /**
   * Shipping
   * @description Total shipping amount for the order
   */
  shipping?: number;
  /**
   * To City
   * @description City of the order destination
   * @default null
   */
  to_city: string | null;
  /**
   * To Country
   * @description Two-letter ISO country code of the order destination
   */
  to_country?: string;
  /**
   * To Lat
   * @description Latitude of the destination address
   * @default null
   */
  to_lat: number | null;
  /**
   * To Lng
   * @description Longitude of the destination address
   * @default null
   */
  to_lng: number | null;
  /**
   * To State
   * @description Two-letter state code for the order destination
   */
  to_state?: string;
  /**
   * To Street
   * @description Street address of the order destination
   * @default null
   */
  to_street: string | null;
  /**
   * To Zip
   * @description Postal code of the order destination
   */
  to_zip?: string;
  /**
   * Transaction Date
   * @description Date/time when transaction occurred (ISO 8601 format)
   */
  transaction_date?: string;
  /**
   * Transaction Id
   * @description Unique identifier for the transaction
   */
  transaction_id?: string;
  /**
   * User Id
   * @description Identifier of the user associated with the transaction
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of TAXJAR's TAXJAR_CREATE_ORDER_TRANSACTION tool output.
 */
type TAXJAR_CREATE_ORDER_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Transaction */
      transaction: {
          /** Amount */
          amount: number;
          /**
           * Exemption Type
           * @enum {string|null}
           */
          exemption_type: "wholesale" | "government" | "other" | null;
          /** Line Items */
          line_items: {
              /**
               * Description
               * @description Description of the item
               * @default null
               */
              description: string | null;
              /**
               * Discount
               * @description Discount applied to the item
               * @default null
               */
              discount: number | null;
              /**
               * Id
               * @description Unique line item identifier
               * @default null
               */
              id: string | null;
              /**
               * Product Identifier
               * @description Product identifier
               * @default null
               */
              product_identifier: string | null;
              /**
               * Quantity
               * @description Quantity of the item purchased
               */
              quantity: number;
              /**
               * Sales Tax
               * @description Sales tax collected for the item
               * @default null
               */
              sales_tax: number | null;
              /**
               * Unit Price
               * @description Price per unit
               * @default null
               */
              unit_price: number | null;
          }[] | null;
          /** Nexus Addresses */
          nexus_addresses: {
              /**
               * City
               * @description City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Two-letter ISO country code
               */
              country: string;
              /**
               * Id
               * @description Unique nexus address ID
               * @default null
               */
              id: string | null;
              /**
               * State
               * @description Two-letter state code
               */
              state: string;
              /**
               * Street
               * @description Street address
               * @default null
               */
              street: string | null;
              /**
               * Zip
               * @description Postal code
               */
              zip: string;
          }[] | null;
          /** Sales Tax */
          sales_tax: number | null;
          /** Shipping */
          shipping: number;
          /** To City */
          to_city: string | null;
          /** To Country */
          to_country: string;
          /** To Lat */
          to_lat: number | null;
          /** To Lng */
          to_lng: number | null;
          /** To State */
          to_state: string;
          /** To Street */
          to_street: string | null;
          /** To Zip */
          to_zip: string;
          /** Transaction Date */
          transaction_date: string;
          /** Transaction Id */
          transaction_id: string;
          /** User Id */
          user_id: string | null;
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
 * Type of TAXJAR's TAXJAR_CREATE_REFUND_TRANSACTION tool input.
 */
type TAXJAR_CREATE_REFUND_TRANSACTION_INPUT = {
  /**
   * Amount
   * @description Total amount refunded (excluding shipping & tax)
   */
  amount?: number;
  /**
   * Line Items
   * @description Line items detail for the refunded transaction
   * @default null
   */
  line_items: {
      /**
       * Description
       * @description Description of the item
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique line item identifier
       * @default null
       */
      id: string | null;
      /**
       * Product Identifier
       * @description Product identifier
       * @default null
       */
      product_identifier: string | null;
      /**
       * Quantity
       * @description Quantity of the item refunded
       */
      quantity: number;
      /**
       * Sales Tax
       * @description Sales tax refunded for the item
       * @default null
       */
      sales_tax: number | null;
      /**
       * Unit Price
       * @description Unit price of the item
       */
      unit_price: number;
  }[] | null;
  /**
   * Provider
   * @description E-commerce provider for the transaction
   * @default null
   */
  provider: string | null;
  /**
   * Sales Tax
   * @description Total sales tax refunded
   * @default null
   */
  sales_tax: number | null;
  /**
   * Shipping
   * @description Total shipping refunded
   * @default null
   */
  shipping: number | null;
  /**
   * To City
   * @description City of refund destination
   * @default null
   */
  to_city: string | null;
  /**
   * To Country
   * @description Two-letter ISO country code of refund destination
   */
  to_country?: string;
  /**
   * To State
   * @description Two-letter state code for the refund destination
   */
  to_state?: string;
  /**
   * To Street
   * @description Street address of refund destination
   * @default null
   */
  to_street: string | null;
  /**
   * To Zip
   * @description Postal code of refund destination
   */
  to_zip?: string;
  /**
   * Transaction Date
   * @description Date/time when refund occurred (ISO 8601 format)
   */
  transaction_date?: string;
  /**
   * Transaction Id
   * @description Unique identifier for the refund transaction
   */
  transaction_id?: string;
  /**
   * Transaction Reference Id
   * @description Identifier of the original order being refunded
   */
  transaction_reference_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_CREATE_REFUND_TRANSACTION tool output.
 */
type TAXJAR_CREATE_REFUND_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Refund */
      refund: {
          /**
           * Amount
           * @description Total refunded amount
           */
          amount: number;
          /**
           * Line Items
           * @description Details for each refunded line item
           * @default null
           */
          line_items: {
              /**
               * Description
               * @description Description of the item
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Unique line item identifier
               * @default null
               */
              id: string | null;
              /**
               * Product Identifier
               * @description Product identifier
               * @default null
               */
              product_identifier: string | null;
              /**
               * Quantity
               * @description Quantity of the item refunded
               */
              quantity: number;
              /**
               * Sales Tax
               * @description Sales tax refunded for the item
               * @default null
               */
              sales_tax: number | null;
              /**
               * Unit Price
               * @description Unit price of the item
               * @default null
               */
              unit_price: number | null;
          }[] | null;
          /**
           * Provider
           * @description E-commerce provider
           * @default null
           */
          provider: string | null;
          /**
           * Sales Tax
           * @description Total refunded sales tax amount
           * @default null
           */
          sales_tax: number | null;
          /**
           * Shipping
           * @description Total refunded shipping amount
           * @default null
           */
          shipping: number | null;
          /**
           * To City
           * @description City of refund destination
           * @default null
           */
          to_city: string | null;
          /**
           * To Country
           * @description Country of refund destination
           */
          to_country: string;
          /**
           * To State
           * @description State/province of refund destination
           */
          to_state: string;
          /**
           * To Street
           * @description Street address of refund destination
           * @default null
           */
          to_street: string | null;
          /**
           * To Zip
           * @description ZIP/postal code of refund destination
           */
          to_zip: string;
          /**
           * Transaction Date
           * @description Date/time when refund occurred
           */
          transaction_date: string;
          /**
           * Transaction Id
           * @description ID of the refund transaction
           */
          transaction_id: string;
          /**
           * Transaction Reference Id
           * @description Reference ID to the original order
           */
          transaction_reference_id: string;
          /**
           * User Id
           * @description ID of the user associated with the transaction
           * @default null
           */
          user_id: string | null;
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
 * Type of TAXJAR's TAXJAR_DELETE_CUSTOMER tool input.
 */
type TAXJAR_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to delete.
   */
  customer_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_DELETE_CUSTOMER tool output.
 */
type TAXJAR_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message for successful deletion.
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
 * Type of TAXJAR's TAXJAR_DELETE_ORDER_TRANSACTION tool input.
 */
type TAXJAR_DELETE_ORDER_TRANSACTION_INPUT = {
  /**
   * Transaction Id
   * @description Unique identifier of the order transaction to delete.
   */
  transaction_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_DELETE_ORDER_TRANSACTION tool output.
 */
type TAXJAR_DELETE_ORDER_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message for successful deletion.
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
 * Type of TAXJAR's TAXJAR_DELETE_REFUND_TRANSACTION tool input.
 */
type TAXJAR_DELETE_REFUND_TRANSACTION_INPUT = {
  /**
   * Transaction Id
   * @description Unique identifier of the refund transaction to delete.
   */
  transaction_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_DELETE_REFUND_TRANSACTION tool output.
 */
type TAXJAR_DELETE_REFUND_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message for successful deletion.
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
 * Type of TAXJAR's TAXJAR_LIST_CUSTOMERS tool input.
 */
type TAXJAR_LIST_CUSTOMERS_INPUT = {
  /**
   * Page
   * @description Page number of results to retrieve (>=1). Default is 1, if not provided.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-100). Default is 30, if not provided.
   * @default 30
   */
  per_page: number | null;
};

/**
 * Type of TAXJAR's TAXJAR_LIST_CUSTOMERS tool output.
 */
type TAXJAR_LIST_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customer records.
       */
      customers: {
          /**
           * City
           * @description City of the customer.
           */
          city: string;
          /**
           * Country
           * @description Country of the customer.
           */
          country: string;
          /**
           * Created At
           * @description Timestamp of customer creation.
           */
          created_at: string;
          /**
           * Customer Id
           * @description Unique customer identifier.
           */
          customer_id: string;
          /**
           * Exempt Certificates
           * @description Exemption certificates for the customer.
           */
          exempt_certificates: string[];
          /**
           * Exempt Regions
           * @description Regions where the customer is tax-exempt.
           */
          exempt_regions: string[];
          /**
           * Exemption Type
           * @description Customer exemption type.
           */
          exemption_type: string;
          /**
           * Name
           * @description Name of the customer.
           */
          name: string;
          /**
           * State
           * @description State or region of the customer.
           */
          state: string;
          /**
           * Street
           * @description Street address of the customer.
           */
          street: string;
          /**
           * Updated At
           * @description Timestamp of last update.
           */
          updated_at: string;
          /**
           * Zip
           * @description Postal code of the customer.
           */
          zip: string;
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
 * Type of TAXJAR's TAXJAR_LIST_NEXUS_REGIONS tool input.
 */
type TAXJAR_LIST_NEXUS_REGIONS_INPUT = object;

/**
 * Type of TAXJAR's TAXJAR_LIST_NEXUS_REGIONS tool output.
 */
type TAXJAR_LIST_NEXUS_REGIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Regions
       * @description List of nexus regions where the account has nexus
       */
      regions: {
          /**
           * Country
           * @description Country name
           */
          country: string;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code
           */
          country_code: string;
          /**
           * Country Name
           * @description Deprecated; use `country` instead
           * @default null
           */
          country_name: string | null;
          /**
           * Region
           * @description Region (state/province) name
           */
          region: string;
          /**
           * Region Code
           * @description Region (state/province) code
           */
          region_code: string;
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
 * Type of TAXJAR's TAXJAR_LIST_ORDER_TRANSACTIONS tool input.
 */
type TAXJAR_LIST_ORDER_TRANSACTIONS_INPUT = {
  /**
   * From Transaction Date
   * @description Filter starting from this order date (YYYY-MM-DD)
   * @default null
   */
  from_transaction_date: string | null;
  /**
   * Page
   * @description Page number (>=1), default is 1
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Results per page (1-100), default is 20
   * @default 20
   */
  per_page: number | null;
  /**
   * Provider
   * @description Filter by provider, e.g., 'api', 'csv'
   * @default null
   */
  provider: string | null;
  /**
   * To Transaction Date
   * @description Filter up to this order date (YYYY-MM-DD)
   * @default null
   */
  to_transaction_date: string | null;
  /**
   * Transaction Id
   * @description Filter by specific transaction ID
   * @default null
   */
  transaction_id: string | null;
};

/**
 * Type of TAXJAR's TAXJAR_LIST_ORDER_TRANSACTIONS tool output.
 */
type TAXJAR_LIST_ORDER_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details for the current result set
       */
      meta: {
          /**
           * Current Page
           * @description Current results page number
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of results per page returned
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of order transactions
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          total_pages: number;
      };
      /**
       * Orders
       * @description List of order transactions
       */
      orders: {
          /**
           * Amount
           * @description Total amount for the order transaction
           */
          amount: number;
          /**
           * Exemption Amount
           * @description Amount exempt from sales tax, if any
           * @default null
           */
          exemption_amount: number | null;
          /**
           * Line Items
           * @description Breakdown of items in the order transaction
           */
          line_items: {
              /**
               * Description
               * @description Description of the product
               */
              description: string;
              /**
               * Product Identifier
               * @description Identifier for the product
               */
              product_identifier: string;
              /**
               * Quantity
               * @description Number of items in this line item
               */
              quantity: number;
              /**
               * Sales Tax
               * @description Sales tax collected for this line item
               */
              sales_tax: number;
              /**
               * Unit Price
               * @description Price per unit for this line item
               */
              unit_price: number;
          }[];
          /**
           * Sales Tax
           * @description Total sales tax collected for the transaction
           */
          sales_tax: number;
          /**
           * Shipping
           * @description Shipping amount for the order transaction
           */
          shipping: number;
          /**
           * To Country
           * @description Destination country code (ISO 3166-1 alpha-2)
           */
          to_country: string;
          /**
           * Transaction Date
           * @description Order date (YYYY-MM-DD)
           */
          transaction_date: string;
          /**
           * Transaction Id
           * @description Unique identifier for the order transaction
           */
          transaction_id: string;
          /**
           * Transaction Origin
           * @description Origin of transaction, e.g., 'api', 'csv'
           */
          transaction_origin: string;
          /**
           * User Id
           * @description Account identifier for the transaction owner
           */
          user_id: number;
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
 * Type of TAXJAR's TAXJAR_LIST_REFUND_TRANSACTIONS tool input.
 */
type TAXJAR_LIST_REFUND_TRANSACTIONS_INPUT = {
  /**
   * Page
   * @description Page number of results to retrieve
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of records per page
   * @default 20
   */
  per_page: number;
  /**
   * Provider
   * @description Filter by provider (e.g., 'api', 'csv')
   * @default null
   */
  provider: string | null;
  /**
   * Transaction Date
   * @description Filter by refund date (YYYY-MM-DD)
   * @default null
   */
  transaction_date: string | null;
  /**
   * Transaction Id
   * @description Filter by a specific refund transaction ID
   * @default null
   */
  transaction_id: string | null;
};

/**
 * Type of TAXJAR's TAXJAR_LIST_REFUND_TRANSACTIONS tool output.
 */
type TAXJAR_LIST_REFUND_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Current Page
           * @description Current page number returned
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of refund records
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
      };
      /**
       * Refunds
       * @description List of refund transactions
       */
      refunds: {
          /**
           * Amount
           * @description Total order amount refunded
           */
          amount: number;
          /**
           * From City
           * @description Origin city for the transaction
           */
          from_city: string;
          /**
           * From Country
           * @description Origin country code for the transaction
           */
          from_country: string;
          /**
           * From State
           * @description Origin state for the transaction
           */
          from_state: string;
          /**
           * From Street
           * @description Origin street address for the transaction
           * @default null
           */
          from_street: string | null;
          /**
           * From Zip
           * @description Origin postal code for the transaction
           */
          from_zip: string;
          /**
           * Line Items
           * @description Breakdown of refunded line items
           */
          line_items: {
              /**
               * Description
               * @description Description of the line item
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description ID of the refunded line item
               */
              id: string;
              /**
               * Product Identifier
               * @description SKU or product code for the line item
               * @default null
               */
              product_identifier: string | null;
              /**
               * Quantity
               * @description Quantity of the item refunded
               */
              quantity: number;
              /**
               * Sales Tax
               * @description Sales tax collected on this item
               */
              sales_tax: number;
              /**
               * Unit Price
               * @description Price per unit refunded
               */
              unit_price: number;
          }[];
          /**
           * Provider
           * @description Source used to create refund (e.g., 'api', 'csv')
           */
          provider: string;
          /**
           * Sales Tax
           * @description Total sales tax refunded
           */
          sales_tax: number;
          /**
           * Shipping
           * @description Shipping amount refunded
           */
          shipping: number;
          /**
           * To City
           * @description Destination city for the transaction
           */
          to_city: string;
          /**
           * To Country
           * @description Destination country code for the transaction
           */
          to_country: string;
          /**
           * To State
           * @description Destination state for the transaction
           */
          to_state: string;
          /**
           * To Street
           * @description Destination street address for the transaction
           * @default null
           */
          to_street: string | null;
          /**
           * To Zip
           * @description Destination postal code for the transaction
           */
          to_zip: string;
          /**
           * Transaction Date
           * @description Date of refund (YYYY-MM-DD)
           */
          transaction_date: string;
          /**
           * Transaction Id
           * @description Refund transaction ID
           */
          transaction_id: string;
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
 * Type of TAXJAR's TAXJAR_LIST_TAX_CATEGORIES tool input.
 */
type TAXJAR_LIST_TAX_CATEGORIES_INPUT = object;

/**
 * Type of TAXJAR's TAXJAR_LIST_TAX_CATEGORIES tool output.
 */
type TAXJAR_LIST_TAX_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of product tax categories and their codes
       */
      categories: {
          /**
           * Description
           * @description Detailed description of what the category covers
           */
          description: string;
          /**
           * Name
           * @description Tax category name, e.g., 'Clothing'
           */
          name: string;
          /**
           * Product Tax Code
           * @description Unique code for the tax category, e.g., '20010'
           */
          product_tax_code: string;
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
 * Type of TAXJAR's TAXJAR_SHOW_CUSTOMER tool input.
 */
type TAXJAR_SHOW_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier for the customer
   */
  customer_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_SHOW_CUSTOMER tool output.
 */
type TAXJAR_SHOW_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description The requested customer object
       */
      customer: {
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Two-letter country code (ISO 3166-1 alpha-2)
           */
          country: string;
          /**
           * Created At
           * @description Date/time created (ISO 8610)
           */
          created_at: string;
          /**
           * Email
           * @description Customer email address
           * @default null
           */
          email: string | null;
          /**
           * Exempt
           * @description Whether the customer is tax-exempt
           */
          exempt: boolean;
          /**
           * Exempt Certificate
           * @description Customer's exemption certificate number
           * @default null
           */
          exempt_certificate: string | null;
          /**
           * Exemption Type
           * @description Type of exemption
           * @default null
           */
          exemption_type: string | null;
          /**
           * Id
           * @description Customer ID
           */
          id: string;
          /**
           * Name
           * @description Customer's name
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description Customer phone number
           * @default null
           */
          phone: string | null;
          /**
           * State
           * @description State or region
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street address
           * @default null
           */
          street: string | null;
          /**
           * Updated At
           * @description Date/time last updated (ISO 8610)
           */
          updated_at: string;
          /**
           * Zip
           * @description ZIP or postal code
           * @default null
           */
          zip: string | null;
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
 * Type of TAXJAR's TAXJAR_SHOW_ORDER_TRANSACTION tool input.
 */
type TAXJAR_SHOW_ORDER_TRANSACTION_INPUT = {
  /**
   * Transaction Id
   * @description The unique identifier for the order transaction
   */
  transaction_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_SHOW_ORDER_TRANSACTION tool output.
 */
type TAXJAR_SHOW_ORDER_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Order
       * @description Order transaction details.
       */
      order: {
          /**
           * Amount
           * @description Total order amount
           */
          amount: number;
          /**
           * From City
           * @description Origin city
           */
          from_city: string;
          /**
           * From Country
           * @description Origin country code
           */
          from_country: string;
          /**
           * From State
           * @description Origin state or province
           */
          from_state: string;
          /**
           * From Zip
           * @description Origin postal code
           */
          from_zip: string;
          /**
           * Line Items
           * @description List of line items for this order transaction
           */
          line_items: {
              /**
               * Description
               * @description Product description for this line item
               * @default null
               */
              description: string | null;
              /**
               * Discount
               * @description Total discount applied to this line item
               */
              discount: number;
              /**
               * Id
               * @description Line item identifier, if provided
               * @default null
               */
              id: string | null;
              /**
               * Product Identifier
               * @description Seller-defined product identifier (SKU or product code)
               */
              product_identifier: string;
              /**
               * Quantity
               * @description Number of units for this line item
               */
              quantity: number;
              /**
               * Sales Tax
               * @description Sales tax collected for this line item
               */
              sales_tax: number;
              /**
               * Unit Price
               * @description Price per single unit
               */
              unit_price: number;
          }[];
          /**
           * Provider
           * @description API partner that processed the transaction, if any
           * @default null
           */
          provider: string | null;
          /**
           * Sales Tax
           * @description Total sales tax collected for the order
           */
          sales_tax: number;
          /**
           * Shipping
           * @description Total shipping amount
           */
          shipping: number;
          /**
           * To City
           * @description Destination city
           */
          to_city: string;
          /**
           * To Country
           * @description Destination country code
           */
          to_country: string;
          /**
           * To State
           * @description Destination state or province
           */
          to_state: string;
          /**
           * To Zip
           * @description Destination postal code
           */
          to_zip: string;
          /**
           * Transaction Date
           * @description Date the order transaction occurred in YYYY-MM-DD format
           */
          transaction_date: string;
          /**
           * Transaction Id
           * @description Unique identifier for the order transaction
           */
          transaction_id: string;
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
 * Type of TAXJAR's TAXJAR_SHOW_REFUND_TRANSACTION tool input.
 */
type TAXJAR_SHOW_REFUND_TRANSACTION_INPUT = {
  /**
   * Transaction Id
   * @description The unique ID of the refund transaction to retrieve
   */
  transaction_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_SHOW_REFUND_TRANSACTION tool output.
 */
type TAXJAR_SHOW_REFUND_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Refund
       * @description Refund transaction details
       */
      refund: {
          /**
           * Amount
           * @description Total amount refunded
           */
          amount: number;
          /**
           * Line Items
           * @description List of refunded line items
           */
          line_items: {
              /**
               * Description
               * @description Description of the line item
               */
              description: string;
              /**
               * Id
               * @description Line item ID
               */
              id: string;
              /**
               * Product Identifier
               * @description Product identifier, e.g. SKU
               */
              product_identifier: string;
              /**
               * Quantity
               * @description Quantity refunded
               */
              quantity: number;
              /**
               * Sales Tax
               * @description Sales tax amount for this line item
               */
              sales_tax: number;
              /**
               * Unit Price
               * @description Unit price of the item at time of refund
               */
              unit_price: number;
          }[];
          /**
           * Provider
           * @description Provider origin of the transaction
           */
          provider: string;
          /**
           * Sales Tax
           * @description Total sales tax refunded
           */
          sales_tax: number;
          /**
           * Shipping
           * @description Shipping amount refunded
           */
          shipping: number;
          /**
           * To City
           * @description City shipped to
           */
          to_city: string;
          /**
           * To Country
           * @description Country shipped to
           */
          to_country: string;
          /**
           * To State
           * @description State shipped to
           */
          to_state: string;
          /**
           * To Street
           * @description Street address shipped to
           */
          to_street: string;
          /**
           * To Zip
           * @description ZIP code shipped to
           */
          to_zip: string;
          /**
           * Transaction Date
           * @description Date of refund (YYYY-MM-DD)
           */
          transaction_date: string;
          /**
           * Transaction Id
           * @description Unique ID for this refund
           */
          transaction_id: string;
          /**
           * Transaction Reference Id
           * @description ID referencing original transaction
           */
          transaction_reference_id: string;
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
 * Type of TAXJAR's TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION tool input.
 */
type TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION_INPUT = {
  /**
   * City
   * @description City name
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Two-letter country code (ISO-2), default 'US'
   * @default null
   */
  country: string | null;
  /**
   * State
   * @description State abbreviation
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Street address
   * @default null
   */
  street: string | null;
  /**
   * Zip
   * @description ZIP code to retrieve rates for
   */
  zip?: string;
};

/**
 * Type of TAXJAR's TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION tool output.
 */
type TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate
       * @description Tax rates for the specified location
       */
      rate: {
          /**
           * City
           * @description City name
           */
          city: string;
          /**
           * City Rate
           * @description City tax rate
           */
          city_rate: string;
          /**
           * Combined District Rate
           * @description Combined special district tax rate
           */
          combined_district_rate: string;
          /**
           * Combined Rate
           * @description Total sales tax rate for the location
           */
          combined_rate: string;
          /**
           * Country
           * @description Two-letter country code (ISO-2)
           */
          country: string;
          /**
           * Country Rate
           * @description Country-wide tax rate
           */
          country_rate: string;
          /**
           * County
           * @description County name
           */
          county: string;
          /**
           * County Rate
           * @description County tax rate
           */
          county_rate: string;
          /**
           * Freight Taxable
           * @description Indicates if freight is taxable
           */
          freight_taxable: boolean;
          /**
           * Name
           * @description Formatted name for display (city or county)
           * @default null
           */
          name: string | null;
          /**
           * Parking Rate
           * @description Parking rate for VAT/GST (non-US)
           * @default null
           */
          parking_rate: string | null;
          /**
           * Reduced Rate
           * @description Reduced rate for VAT/GST (non-US)
           * @default null
           */
          reduced_rate: string | null;
          /**
           * Standard Rate
           * @description Standard rate for VAT/GST (non-US)
           * @default null
           */
          standard_rate: string | null;
          /**
           * State
           * @description State abbreviation
           */
          state: string;
          /**
           * State Rate
           * @description State tax rate
           */
          state_rate: string;
          /**
           * Super Reduced Rate
           * @description Super reduced rate for VAT/GST (non-US)
           * @default null
           */
          super_reduced_rate: string | null;
          /**
           * Zip
           * @description ZIP code queried
           */
          zip: string;
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
 * Type of TAXJAR's TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS tool input.
 */
type TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS_INPUT = object;

/**
 * Type of TAXJAR's TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS tool output.
 */
type TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Summary Rates
       * @description List of summary tax rates by region
       */
      summary_rates: {
          /**
           * Average Rate
           * @description Average sales tax rate as a string (e.g., '0.085')
           */
          average_rate: string;
          /**
           * Country
           * @description Country name (e.g., 'United States')
           */
          country: string;
          /**
           * Country Code
           * @description Country code (e.g., 'US')
           */
          country_code: string;
          /**
           * Minimum Rate
           * @description Minimum sales tax rate as a string (e.g., '0.065')
           */
          minimum_rate: string;
          /**
           * Region
           * @description Region name (e.g., 'California')
           */
          region: string;
          /**
           * Region Code
           * @description Region code (e.g., 'CA')
           */
          region_code: string;
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
 * Type of TAXJAR's TAXJAR_UPDATE_ORDER_TRANSACTION tool input.
 */
type TAXJAR_UPDATE_ORDER_TRANSACTION_INPUT = {
  /**
   * Amount
   * @description Total amount of the order
   * @default null
   */
  amount: number | null;
  /**
   * Line Items
   * @description Line items in the order
   * @default null
   */
  line_items: {
      /**
       * Description
       * @description Description of the item
       * @default null
       */
      description: string | null;
      /**
       * Discount
       * @description Discount applied to the item
       * @default null
       */
      discount: number | null;
      /**
       * Id
       * @description Unique line item identifier
       * @default null
       */
      id: string | null;
      /**
       * Product Identifier
       * @description Product identifier
       * @default null
       */
      product_identifier: string | null;
      /**
       * Quantity
       * @description Quantity of the item purchased
       * @default null
       */
      quantity: number | null;
      /**
       * Sales Tax
       * @description Sales tax collected for the item
       * @default null
       */
      sales_tax: number | null;
      /**
       * Unit Price
       * @description Price per unit
       * @default null
       */
      unit_price: number | null;
  }[] | null;
  /**
   * Provider
   * @description Transaction provider, e.g., 'api', 'csv'
   * @default null
   */
  provider: string | null;
  /**
   * Sales Tax
   * @description Sales tax collected for the order
   * @default null
   */
  sales_tax: number | null;
  /**
   * Shipping
   * @description Total shipping amount for the order
   * @default null
   */
  shipping: number | null;
  /**
   * To City
   * @description City of the order destination
   * @default null
   */
  to_city: string | null;
  /**
   * To Country
   * @description Two-letter ISO country code of the order destination
   * @default null
   */
  to_country: string | null;
  /**
   * To State
   * @description Two-letter state code for the order destination
   * @default null
   */
  to_state: string | null;
  /**
   * To Street
   * @description Street address of the order destination
   * @default null
   */
  to_street: string | null;
  /**
   * To Zip
   * @description Postal code of the order destination
   * @default null
   */
  to_zip: string | null;
  /**
   * Transaction Date
   * @description Date/time when transaction occurred (ISO 8601 format)
   * @default null
   */
  transaction_date: string | null;
  /**
   * Transaction Id
   * @description Unique identifier for the transaction to update
   */
  transaction_id?: string;
};

/**
 * Type of TAXJAR's TAXJAR_UPDATE_ORDER_TRANSACTION tool output.
 */
type TAXJAR_UPDATE_ORDER_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transaction
       * @description Updated order transaction returned from TaxJar.
       */
      transaction: {
          /**
           * Amount
           * @description Order amount
           */
          amount: number;
          /**
           * Line Items
           * @description Line items in the transaction
           * @default null
           */
          line_items: {
              /**
               * Description
               * @description Description of the item
               * @default null
               */
              description: string | null;
              /**
               * Discount
               * @description Discount applied to the item
               * @default null
               */
              discount: number | null;
              /**
               * Id
               * @description Unique line item identifier
               * @default null
               */
              id: string | null;
              /**
               * Product Identifier
               * @description Product identifier
               * @default null
               */
              product_identifier: string | null;
              /**
               * Quantity
               * @description Quantity of the item purchased
               * @default null
               */
              quantity: number | null;
              /**
               * Sales Tax
               * @description Sales tax collected for the item
               * @default null
               */
              sales_tax: number | null;
              /**
               * Unit Price
               * @description Price per unit
               * @default null
               */
              unit_price: number | null;
          }[] | null;
          /**
           * Provider
           * @description Originating provider
           */
          provider: string;
          /**
           * Sales Tax
           * @description Sales tax amount
           */
          sales_tax: number;
          /**
           * Shipping
           * @description Order shipping cost
           */
          shipping: number;
          /**
           * To City
           * @description Destination city
           * @default null
           */
          to_city: string | null;
          /**
           * To Country
           * @description Destination country code
           */
          to_country: string;
          /**
           * To State
           * @description Destination state code
           */
          to_state: string;
          /**
           * To Street
           * @description Destination street address
           * @default null
           */
          to_street: string | null;
          /**
           * To Zip
           * @description Destination postal code
           */
          to_zip: string;
          /**
           * Transaction Date
           * @description Date/time of the transaction (ISO8601)
           */
          transaction_date: string;
          /**
           * Transaction Id
           * @description Transaction identifier
           */
          transaction_id: string;
          /**
           * User Id
           * @description Associated user identifier
           * @default null
           */
          user_id: string | null;
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
 * Type of TAXJAR's TAXJAR_VALIDATE_VAT_NUMBER tool input.
 */
type TAXJAR_VALIDATE_VAT_NUMBER_INPUT = {
  /**
   * Vat Number
   * @description VAT number to validate; include country code prefix (e.g., 'DE123456789')
   */
  vat_number?: string;
};

/**
 * Type of TAXJAR's TAXJAR_VALIDATE_VAT_NUMBER tool output.
 */
type TAXJAR_VALIDATE_VAT_NUMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Validation
       * @description Validation details for the provided VAT number.
       */
      validation: {
          /**
           * Company Address
           * @description Company address from VIES if available.
           * @default null
           */
          company_address: string | null;
          /**
           * Company Name
           * @description Company name from VIES if available.
           * @default null
           */
          company_name: string | null;
          /**
           * ValidationErrorDetail
           * @description Details of an error encountered during VAT validation.
           * @default null
           */
          error: {
              /**
               * Code
               * @description Error code returned by the API, if available
               * @default null
               */
              code: string | null;
              /**
               * Message
               * @description Error message describing why validation failed
               * @default null
               */
              message: string | null;
          } | null;
          /**
           * Exists
           * @description Whether the VAT number exists in the VIES system.
           */
          exists: boolean;
          /**
           * Valid
           * @description Whether the VAT number is valid.
           */
          valid: boolean;
          /**
           * Vat Number
           * @description VAT number being validated.
           */
          vat_number: string;
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
 * Type map of all available tool input types for toolkit "TAXJAR".
 */
export type TAXJAR_TOOL_INPUTS = {
  CALCULATE_SALES_TAX_FOR_AN_ORDER: TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER_INPUT
  CREATE_ORDER_TRANSACTION: TAXJAR_CREATE_ORDER_TRANSACTION_INPUT
  CREATE_REFUND_TRANSACTION: TAXJAR_CREATE_REFUND_TRANSACTION_INPUT
  DELETE_CUSTOMER: TAXJAR_DELETE_CUSTOMER_INPUT
  DELETE_ORDER_TRANSACTION: TAXJAR_DELETE_ORDER_TRANSACTION_INPUT
  DELETE_REFUND_TRANSACTION: TAXJAR_DELETE_REFUND_TRANSACTION_INPUT
  LIST_CUSTOMERS: TAXJAR_LIST_CUSTOMERS_INPUT
  LIST_NEXUS_REGIONS: TAXJAR_LIST_NEXUS_REGIONS_INPUT
  LIST_ORDER_TRANSACTIONS: TAXJAR_LIST_ORDER_TRANSACTIONS_INPUT
  LIST_REFUND_TRANSACTIONS: TAXJAR_LIST_REFUND_TRANSACTIONS_INPUT
  LIST_TAX_CATEGORIES: TAXJAR_LIST_TAX_CATEGORIES_INPUT
  SHOW_CUSTOMER: TAXJAR_SHOW_CUSTOMER_INPUT
  SHOW_ORDER_TRANSACTION: TAXJAR_SHOW_ORDER_TRANSACTION_INPUT
  SHOW_REFUND_TRANSACTION: TAXJAR_SHOW_REFUND_TRANSACTION_INPUT
  SHOW_TAX_RATES_FOR_A_LOCATION: TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION_INPUT
  SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS: TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS_INPUT
  UPDATE_ORDER_TRANSACTION: TAXJAR_UPDATE_ORDER_TRANSACTION_INPUT
  VALIDATE_VAT_NUMBER: TAXJAR_VALIDATE_VAT_NUMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TAXJAR".
 */
export type TAXJAR_TOOL_OUTPUTS = {
  CALCULATE_SALES_TAX_FOR_AN_ORDER: TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER_OUTPUT
  CREATE_ORDER_TRANSACTION: TAXJAR_CREATE_ORDER_TRANSACTION_OUTPUT
  CREATE_REFUND_TRANSACTION: TAXJAR_CREATE_REFUND_TRANSACTION_OUTPUT
  DELETE_CUSTOMER: TAXJAR_DELETE_CUSTOMER_OUTPUT
  DELETE_ORDER_TRANSACTION: TAXJAR_DELETE_ORDER_TRANSACTION_OUTPUT
  DELETE_REFUND_TRANSACTION: TAXJAR_DELETE_REFUND_TRANSACTION_OUTPUT
  LIST_CUSTOMERS: TAXJAR_LIST_CUSTOMERS_OUTPUT
  LIST_NEXUS_REGIONS: TAXJAR_LIST_NEXUS_REGIONS_OUTPUT
  LIST_ORDER_TRANSACTIONS: TAXJAR_LIST_ORDER_TRANSACTIONS_OUTPUT
  LIST_REFUND_TRANSACTIONS: TAXJAR_LIST_REFUND_TRANSACTIONS_OUTPUT
  LIST_TAX_CATEGORIES: TAXJAR_LIST_TAX_CATEGORIES_OUTPUT
  SHOW_CUSTOMER: TAXJAR_SHOW_CUSTOMER_OUTPUT
  SHOW_ORDER_TRANSACTION: TAXJAR_SHOW_ORDER_TRANSACTION_OUTPUT
  SHOW_REFUND_TRANSACTION: TAXJAR_SHOW_REFUND_TRANSACTION_OUTPUT
  SHOW_TAX_RATES_FOR_A_LOCATION: TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION_OUTPUT
  SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS: TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS_OUTPUT
  UPDATE_ORDER_TRANSACTION: TAXJAR_UPDATE_ORDER_TRANSACTION_OUTPUT
  VALIDATE_VAT_NUMBER: TAXJAR_VALIDATE_VAT_NUMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TAXJAR toolkit.
 */
export const TAXJAR = {
  slug: "taxjar",
  tools: {
    /**
     * Tool to calculate sales tax for an order. use when you need an accurate tax calculation including nexus addresses, line items, shipping, and exemptions.
     */
    CALCULATE_SALES_TAX_FOR_AN_ORDER: "TAXJAR_CALCULATE_SALES_TAX_FOR_AN_ORDER",
    /**
     * Tool to create a new order transaction. use after preparing transaction details.
     */
    CREATE_ORDER_TRANSACTION: "TAXJAR_CREATE_ORDER_TRANSACTION",
    /**
     * Tool to create a new refund transaction. use after confirming refund details.
     */
    CREATE_REFUND_TRANSACTION: "TAXJAR_CREATE_REFUND_TRANSACTION",
    /**
     * Tool to delete an existing customer. use when you need to remove a previously created customer by its id. example: "delete customer cust 12345".
     */
    DELETE_CUSTOMER: "TAXJAR_DELETE_CUSTOMER",
    /**
     * Tool to delete an existing order transaction. use when you need to remove a previously created order transaction by its id. example: "delete transaction abc123".
     */
    DELETE_ORDER_TRANSACTION: "TAXJAR_DELETE_ORDER_TRANSACTION",
    /**
     * Tool to delete an existing refund transaction. use when you need to remove a previously created refund transaction by its id. example: "delete refund 243345".
     */
    DELETE_REFUND_TRANSACTION: "TAXJAR_DELETE_REFUND_TRANSACTION",
    /**
     * Tool to list existing customers. use when you need to retrieve customer records after they are created.
     */
    LIST_CUSTOMERS: "TAXJAR_LIST_CUSTOMERS",
    /**
     * Tool to list existing nexus regions for an account. use after authenticating your account to discover where you have nexus for sales tax purposes.
     */
    LIST_NEXUS_REGIONS: "TAXJAR_LIST_NEXUS_REGIONS",
    /**
     * Tool to list existing order transactions. use when you need to retrieve created orders for reporting or analysis.
     */
    LIST_ORDER_TRANSACTIONS: "TAXJAR_LIST_ORDER_TRANSACTIONS",
    /**
     * Tool to list refund transactions. use when you need to retrieve refunds created through the taxjar api.
     */
    LIST_REFUND_TRANSACTIONS: "TAXJAR_LIST_REFUND_TRANSACTIONS",
    /**
     * Tool to list all product tax categories and their codes. use when you need to discover available tax categories before assigning them to products.
     */
    LIST_TAX_CATEGORIES: "TAXJAR_LIST_TAX_CATEGORIES",
    /**
     * Tool to show an existing customer. use when you need to retrieve details of a specific customer via taxjar api.
     */
    SHOW_CUSTOMER: "TAXJAR_SHOW_CUSTOMER",
    /**
     * Tool to show an existing order transaction by id. use when you need to retrieve full details of a specific order transaction after creation or listing.
     */
    SHOW_ORDER_TRANSACTION: "TAXJAR_SHOW_ORDER_TRANSACTION",
    /**
     * Tool to show a refund transaction. use when you need to retrieve details of an existing refund transaction via taxjar api.
     */
    SHOW_REFUND_TRANSACTION: "TAXJAR_SHOW_REFUND_TRANSACTION",
    /**
     * Tool to show sales tax rates for a location. use when you need to retrieve sales tax rates for a specific zip code with optional address details (city, state, country, street).
     */
    SHOW_TAX_RATES_FOR_A_LOCATION: "TAXJAR_SHOW_TAX_RATES_FOR_A_LOCATION",
    /**
     * Tool to retrieve minimum and average sales tax rates by region. use when you need a backup of regional tax summary rates.
     */
    SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS: "TAXJAR_SUMMARIZE_TAX_RATES_FOR_ALL_REGIONS",
    /**
     * Tool to update an existing order transaction. use when adjusting order details such as amount, shipping, or line items after creation.
     */
    UPDATE_ORDER_TRANSACTION: "TAXJAR_UPDATE_ORDER_TRANSACTION",
    /**
     * Tool to validate a vat number for tax-exempt status. use when you need to confirm a vat number's validity and existence before applying tax exemptions.
     */
    VALIDATE_VAT_NUMBER: "TAXJAR_VALIDATE_VAT_NUMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TAXJAR".
 */
export type TAXJAR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TAXJAR".
 */
export type TAXJAR_TRIGGER_EVENTS = {}
