// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WEBFLOW's WEBFLOW_CREATE_COLLECTION_ITEM tool input.
 */
type WEBFLOW_CREATE_COLLECTION_ITEM_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier of the Webflow collection
   */
  collection_id?: string;
  /**
   * Field Data
   * @description The data for the item's fields. Must include 'name' and 'slug' fields.
   */
  field_data?: {
      [key: string]: unknown;
  };
  /**
   * Is Draft
   * @description Whether to create the item as a draft
   * @default false
   */
  is_draft: boolean | null;
};

/**
 * Type of WEBFLOW's WEBFLOW_CREATE_COLLECTION_ITEM tool output.
 */
type WEBFLOW_CREATE_COLLECTION_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description The created collection item
       */
      item: {
          /**
           * Created On
           * @description Creation date of the item
           */
          createdOn: string;
          /**
           * Field Data
           * @description The data for the item's fields
           */
          fieldData: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the collection item
           */
          id: string;
          /**
           * Is Draft
           * @description Whether the item is a draft
           */
          isDraft: boolean;
          /**
           * Last Updated
           * @description Last update date of the item
           */
          lastUpdated: string;
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
 * Type of WEBFLOW's WEBFLOW_DELETE_COLLECTION_ITEM tool input.
 */
type WEBFLOW_DELETE_COLLECTION_ITEM_INPUT = {
  /**
   * Cms Locale Id
   * @description The locale ID for multi-language content
   * @default null
   */
  cms_locale_id: string | null;
  /**
   * Collection Id
   * @description The unique identifier of the Webflow collection
   */
  collection_id?: string;
  /**
   * Item Id
   * @description The unique identifier of the item to delete
   */
  item_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_DELETE_COLLECTION_ITEM tool output.
 */
type WEBFLOW_DELETE_COLLECTION_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Result of the delete operation
       */
      result: {
          /**
           * Deleted
           * @description Indicates if the item was successfully deleted
           */
          deleted: boolean;
          /**
           * Message
           * @description Status message about the deletion
           */
          message: string;
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
 * Type of WEBFLOW's WEBFLOW_FULFILL_ORDER tool input.
 */
type WEBFLOW_FULFILL_ORDER_INPUT = {
  /**
   * Order Id
   * @description Unique identifier for the order to be fulfilled
   */
  order_id?: string;
  /**
   * Send Order Fulfilled Email
   * @description Whether to send the order fulfillment email to the customer
   * @default false
   */
  send_order_fulfilled_email: boolean;
  /**
   * Site Id
   * @description Unique identifier for the site where the order exists
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_FULFILL_ORDER tool output.
 */
type WEBFLOW_FULFILL_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fulfilled On
       * @description The ISO8601 timestamp when the order was fulfilled
       * @default null
       */
      fulfilledOn: string | null;
      /**
       * Order Id
       * @description The unique identifier of the fulfilled order
       * @default null
       */
      orderId: string | null;
      /**
       * Status
       * @description The current status of the order
       * @default null
       */
      status: string | null;
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
 * Type of WEBFLOW's WEBFLOW_GET_COLLECTION tool input.
 */
type WEBFLOW_GET_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier for the collection to retrieve
   */
  collection_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_GET_COLLECTION tool output.
 */
type WEBFLOW_GET_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description The date the collection was created
       */
      createdOn: string;
      /**
       * Display Name
       * @description Name given to the Collection
       */
      displayName: string;
      /**
       * Fields
       * @description The list of fields in the Collection
       */
      fields: {
          /**
           * Display Name
           * @description Display name of the field
           */
          displayName: string;
          /**
           * Help Text
           * @description Help text for the field
           * @default null
           */
          helpText: string | null;
          /**
           * Id
           * @description Unique identifier for the field
           */
          id: string;
          /**
           * Is Editable
           * @description Whether the field is editable
           */
          isEditable: boolean;
          /**
           * Is Required
           * @description Whether the field is required
           */
          isRequired: boolean;
          /**
           * Slug
           * @description Slug of the field
           */
          slug: string;
          /**
           * Type
           * @description Type of the field
           */
          type: string;
      }[];
      /**
       * Id
       * @description Unique identifier for the Collection
       */
      id: string;
      /**
       * Last Updated
       * @description The date the collection was last updated
       */
      lastUpdated: string;
      /**
       * Singular Name
       * @description The name of one Item in Collection
       */
      singularName: string;
      /**
       * Slug
       * @description Slug of Collection in Site URL structure
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
 * Type of WEBFLOW's WEBFLOW_GET_COLLECTION_ITEM tool input.
 */
type WEBFLOW_GET_COLLECTION_ITEM_INPUT = {
  /**
   * Cms Locale Id
   * @description Unique identifier for a CMS Locale. To query multiple locales, input a comma-separated string.
   * @default null
   */
  cms_locale_id: string | null;
  /**
   * Collection Id
   * @description Unique identifier for the collection
   */
  collection_id?: string;
  /**
   * Item Id
   * @description Unique identifier for the item within the collection
   */
  item_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_GET_COLLECTION_ITEM tool output.
 */
type WEBFLOW_GET_COLLECTION_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cms Locale Id
       * @description Identifier for the locale of the CMS item
       * @default null
       */
      cmsLocaleId: string | null;
      /**
       * Created On
       * @description The date the item was created
       */
      createdOn: string;
      /**
       * Field Data
       * @description Custom fields data for the item
       */
      fieldData: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier for the Item
       */
      id: string;
      /**
       * Is Archived
       * @description Boolean determining if the Item is set to archived
       */
      isArchived: boolean;
      /**
       * Is Draft
       * @description Boolean determining if the Item is set to draft
       */
      isDraft: boolean;
      /**
       * Last Published
       * @description The date the item was last published
       * @default null
       */
      lastPublished: string | null;
      /**
       * Last Updated
       * @description The date the item was last updated
       */
      lastUpdated: string;
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
 * Type of WEBFLOW's WEBFLOW_GET_ITEM_INVENTORY tool input.
 */
type WEBFLOW_GET_ITEM_INVENTORY_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier for the Collection containing the item
   */
  collection_id?: string;
  /**
   * Item Id
   * @description Unique identifier for the Item whose inventory you want to retrieve
   */
  item_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_GET_ITEM_INVENTORY tool output.
 */
type WEBFLOW_GET_ITEM_INVENTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the SKU item
       * @default null
       */
      id: string | null;
      /**
       * Inventory Type
       * @description Indicates whether the inventory is infinite or finite
       * @default null
       */
      inventoryType: string | null;
      /**
       * Quantity
       * @description Total quantity of items remaining in inventory (if inventoryType is finite)
       * @default null
       */
      quantity: number | null;
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
 * Type of WEBFLOW's WEBFLOW_GET_ORDER tool input.
 */
type WEBFLOW_GET_ORDER_INPUT = {
  /**
   * Order Id
   * @description The unique identifier of the order
   */
  order_id?: string;
  /**
   * Site Id
   * @description The unique identifier of the site
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_GET_ORDER tool output.
 */
type WEBFLOW_GET_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accepted On
       * Format: date-time
       * @description Timestamp when order was placed
       * @default null
       */
      accepted_on: string | null;
      /**
       * Address
       * @description Address model for shipping and billing addresses.
       * @default null
       */
      billing_address: {
          /**
           * Address1
           * @description First line of the address
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Second line of the address
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
           * Company
           * @description Company name
           * @default null
           */
          company: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Name
           * @description Name associated with the address
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description State or province
           * @default null
           */
          state: string | null;
      } | null;
      /**
       * Comment
       * @description API user editable comment
       * @default null
       */
      comment: string | null;
      /**
       * CustomerInfo
       * @description Customer information model.
       * @default null
       */
      customer_info: {
          /**
           * Email
           * @description Customer's email address
           * @default null
           */
          email: string | null;
          /**
           * Full Name
           * @description Customer's full name
           * @default null
           */
          full_name: string | null;
      } | null;
      /**
       * MoneyAmount
       * @description Model for monetary amounts.
       * @default null
       */
      customer_paid: {
          /**
           * Currency
           * @description The currency code
           * @default null
           */
          currency: string | null;
          /**
           * Value
           * @description The monetary value
           * @default null
           */
          value: number | null;
      } | null;
      /**
       * Fulfilled On
       * Format: date-time
       * @description Timestamp when order was fulfilled
       * @default null
       */
      fulfilled_on: string | null;
      /**
       * Has Downloads
       * @description Whether order contains downloadable items
       * @default null
       */
      has_downloads: boolean | null;
      /**
       * Is Shipping Required
       * @description Whether shipping is required
       * @default null
       */
      is_shipping_required: boolean | null;
      /**
       * MoneyAmount
       * @description Model for monetary amounts.
       * @default null
       */
      net_amount: {
          /**
           * Currency
           * @description The currency code
           * @default null
           */
          currency: string | null;
          /**
           * Value
           * @description The monetary value
           * @default null
           */
          value: number | null;
      } | null;
      /**
       * Order Comment
       * @description Customer's order comment
       * @default null
       */
      order_comment: string | null;
      /**
       * Order Id
       * @description The unique identifier of the order
       * @default null
       */
      order_id: string | null;
      /**
       * Payment Processor
       * @description Payment processor used
       * @default null
       */
      payment_processor: string | null;
      /**
       * Purchased Items
       * @description List of purchased items
       * @default null
       */
      purchased_items: {
          /**
           * Name
           * @description Product name
           * @default null
           */
          name: string | null;
          /**
           * Price
           * @description Price of the item
           * @default null
           */
          price: number | null;
          /**
           * Product Id
           * @description Unique identifier for the product
           * @default null
           */
          product_id: string | null;
          /**
           * Quantity
           * @description Quantity purchased
           * @default null
           */
          quantity: number | null;
          /**
           * Sku
           * @description Stock keeping unit
           * @default null
           */
          sku: string | null;
          /**
           * Variant Id
           * @description Variant identifier if applicable
           * @default null
           */
          variant_id: string | null;
      }[] | null;
      /**
       * Refunded On
       * Format: date-time
       * @description Timestamp when order was refunded
       * @default null
       */
      refunded_on: string | null;
      /**
       * Address
       * @description Address model for shipping and billing addresses.
       * @default null
       */
      shipping_address: {
          /**
           * Address1
           * @description First line of the address
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Second line of the address
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
           * Company
           * @description Company name
           * @default null
           */
          company: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Name
           * @description Name associated with the address
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description State or province
           * @default null
           */
          state: string | null;
      } | null;
      /**
       * Shipping Provider
       * @description Shipping provider used
       * @default null
       */
      shipping_provider: string | null;
      /**
       * Shipping Tracking
       * @description Shipping tracking number
       * @default null
       */
      shipping_tracking: string | null;
      /**
       * Shipping Tracking Url
       * @description URL for tracking shipment
       * @default null
       */
      shipping_tracking_url: string | null;
      /**
       * Status
       * @description Current status of the order
       * @default null
       */
      status: string | null;
      /**
       * Totals
       * @description Model for order totals.
       * @default null
       */
      totals: {
          /**
           * MoneyAmount
           * @description Model for monetary amounts.
           * @default null
           */
          shipping: {
              /**
               * Currency
               * @description The currency code
               * @default null
               */
              currency: string | null;
              /**
               * Value
               * @description The monetary value
               * @default null
               */
              value: number | null;
          } | null;
          /**
           * MoneyAmount
           * @description Model for monetary amounts.
           * @default null
           */
          subtotal: {
              /**
               * Currency
               * @description The currency code
               * @default null
               */
              currency: string | null;
              /**
               * Value
               * @description The monetary value
               * @default null
               */
              value: number | null;
          } | null;
          /**
           * MoneyAmount
           * @description Model for monetary amounts.
           * @default null
           */
          total: {
              /**
               * Currency
               * @description The currency code
               * @default null
               */
              currency: string | null;
              /**
               * Value
               * @description The monetary value
               * @default null
               */
              value: number | null;
          } | null;
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
 * Type of WEBFLOW's WEBFLOW_GET_SITE_INFO tool input.
 */
type WEBFLOW_GET_SITE_INFO_INPUT = {
  /**
   * Site Id
   * @description The unique identifier of the site to retrieve information for
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_GET_SITE_INFO tool output.
 */
type WEBFLOW_GET_SITE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description Site creation date
       */
      createdOn: string;
      /**
       * Custom Domains
       * @description List of custom domains
       * @default null
       */
      customDomains: {
          /**
           * Id
           * @description Unique identifier of the custom domain
           */
          id: string;
          /**
           * Url
           * @description URL of the custom domain
           */
          url: string;
      }[] | null;
      /**
       * Data Collection Enabled
       * @description Data collection status
       * @default null
       */
      dataCollectionEnabled: boolean | null;
      /**
       * Data Collection Type
       * @description Type of data collection
       * @default null
       */
      dataCollectionType: string | null;
      /**
       * Display Name
       * @description Site display name
       */
      displayName: string;
      /**
       * Id
       * @description Unique identifier of the site
       */
      id: string;
      /**
       * Last Published
       * @description Last publication date
       * @default null
       */
      lastPublished: string | null;
      /**
       * Last Updated
       * @description Last update date
       * @default null
       */
      lastUpdated: string | null;
      /**
       * LocaleSettings
       * @description Model for locale settings
       * @default null
       */
      locales: {
          /**
           * Primary
           * @description Primary locale information
           */
          primary: {
              /**
               * Cms Locale Id
               * @description CMS locale identifier
               */
              cmsLocaleId: string;
              /**
               * Display Name
               * @description Display name of the locale
               */
              displayName: string;
              /**
               * Enabled
               * @description Whether the locale is enabled
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the locale
               */
              id: string;
              /**
               * Redirect
               * @description Whether redirect is enabled for this locale
               */
              redirect: boolean;
              /**
               * Subdirectory
               * @description Subdirectory for the locale
               */
              subdirectory: string;
              /**
               * Tag
               * @description Language tag for the locale
               */
              tag: string;
          };
          /**
           * Secondary
           * @description List of secondary locales
           * @default null
           */
          secondary: {
              /**
               * Cms Locale Id
               * @description CMS locale identifier
               */
              cmsLocaleId: string;
              /**
               * Display Name
               * @description Display name of the locale
               */
              displayName: string;
              /**
               * Enabled
               * @description Whether the locale is enabled
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the locale
               */
              id: string;
              /**
               * Redirect
               * @description Whether redirect is enabled for this locale
               */
              redirect: boolean;
              /**
               * Subdirectory
               * @description Subdirectory for the locale
               */
              subdirectory: string;
              /**
               * Tag
               * @description Language tag for the locale
               */
              tag: string;
          }[] | null;
      } | null;
      /**
       * Parent Folder Id
       * @description Parent folder ID
       * @default null
       */
      parentFolderId: string | null;
      /**
       * Preview Url
       * @description Site preview image URL
       */
      previewUrl: string;
      /**
       * Short Name
       * @description Slugified name
       */
      shortName: string;
      /**
       * Time Zone
       * @description Site timezone
       * @default null
       */
      timeZone: string | null;
      /**
       * Workspace Id
       * @description Workspace identifier
       */
      workspaceId: string;
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
 * Type of WEBFLOW's WEBFLOW_LIST_COLLECTIONS tool input.
 */
type WEBFLOW_LIST_COLLECTIONS_INPUT = {
  /**
   * Site Id
   * @description The unique identifier of the Webflow site
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_LIST_COLLECTIONS tool output.
 */
type WEBFLOW_LIST_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of collections in the specified Webflow site
       */
      collections: {
          /**
           * Created On
           * @description Creation date of the collection
           */
          createdOn: string;
          /**
           * Display Name
           * @description Display name of the collection
           */
          displayName: string;
          /**
           * Id
           * @description Unique identifier of the collection
           */
          id: string;
          /**
           * Last Updated
           * @description Last update date of the collection
           */
          lastUpdated: string;
          /**
           * Singular Name
           * @description Singular name of the collection
           */
          singularName: string;
          /**
           * Slug
           * @description URL-friendly name of the collection
           */
          slug: string;
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
 * Type of WEBFLOW's WEBFLOW_LIST_COLLECTION_ITEMS tool input.
 */
type WEBFLOW_LIST_COLLECTION_ITEMS_INPUT = {
  /**
   * Cms Locale Id
   * @description Filter by CMS Locale ID
   * @default null
   */
  cms_locale_id: string | null;
  /**
   * Collection Id
   * @description Unique identifier for the collection
   */
  collection_id?: string;
  /**
   * Limit
   * @description Maximum number of records to return (max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by exact item name
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Slug
   * @description Filter by exact item slug
   * @default null
   */
  slug: string | null;
  /**
   * Sort By
   * @description Sort results by field
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order (asc or desc)
   * @default null
   */
  sort_order: string | null;
};

/**
 * Type of WEBFLOW's WEBFLOW_LIST_COLLECTION_ITEMS tool output.
 */
type WEBFLOW_LIST_COLLECTION_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of items in the collection
       */
      items: {
          /**
           * Cms Locale Id
           * @description CMS Locale ID of the item
           * @default null
           */
          cmsLocaleId: string | null;
          /**
           * Created On
           * @description Creation date of the item
           * @default null
           */
          createdOn: string | null;
          /**
           * Field Data
           * @description Custom fields data for the item
           */
          fieldData: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier for the item
           */
          id: string;
          /**
           * Is Archived
           * @description Whether the item is archived
           */
          isArchived: boolean;
          /**
           * Is Draft
           * @description Whether the item is a draft
           */
          isDraft: boolean;
          /**
           * Last Published
           * @description Last published date of the item
           * @default null
           */
          lastPublished: string | null;
          /**
           * Last Updated
           * @description Last updated date of the item
           * @default null
           */
          lastUpdated: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Maximum number of records returned
           */
          limit: number;
          /**
           * Offset
           * @description Current offset in pagination
           */
          offset: number;
          /**
           * Total
           * @description Total number of records available
           */
          total: number;
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
 * Type of WEBFLOW's WEBFLOW_LIST_FORM_SUBMISSIONS tool input.
 */
type WEBFLOW_LIST_FORM_SUBMISSIONS_INPUT = {
  /**
   * Element Id
   * @description Filter submissions by specific form element ID
   * @default null
   */
  element_id: string | null;
  /**
   * Limit
   * @description Maximum number of items to return (max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Site Id
   * @description The ID of the site to get form submissions from
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_LIST_FORM_SUBMISSIONS tool output.
 */
type WEBFLOW_LIST_FORM_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Form Submissions
       * @description List of form submissions
       */
      formSubmissions: {
          /**
           * Date Submitted
           * @description Timestamp when form was submitted
           */
          dateSubmitted: string;
          /**
           * Display Name
           * @description Display name of the form
           */
          displayName: string;
          /**
           * Form Response
           * @description Form field responses
           */
          formResponse: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier for the form submission
           */
          id: string;
          /**
           * Site Id
           * @description ID of the site where form exists
           */
          siteId: string;
          /**
           * Workspace Id
           * @description ID of the workspace
           */
          workspaceId: string;
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Offset
           * @description Current offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of items
           */
          total: number;
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
 * Type of WEBFLOW's WEBFLOW_LIST_ORDERS tool input.
 */
type WEBFLOW_LIST_ORDERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Site Id
   * @description The ID of the site to get orders from
   */
  site_id?: string;
  /**
   * Status
   * @description Filter orders by status
   * @default null
   */
  status: string | null;
};

/**
 * Type of WEBFLOW's WEBFLOW_LIST_ORDERS tool output.
 */
type WEBFLOW_LIST_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Orders
       * @description List of orders from the specified site
       */
      orders: {
          /**
           * Accepted On
           * @description The timestamp when the order was placed
           * @default null
           */
          acceptedOn: string | null;
          /**
           * Comment
           * @description A comment string for the order
           * @default null
           */
          comment: string | null;
          /**
           * Customer Paid
           * @description Details of the amount paid by the customer
           */
          customerPaid: {
              /**
               * String
               * @description Formatted amount (e.g., '211.55 USD')
               */
              string: string;
              /**
               * Unit
               * @description Currency unit (e.g., USD)
               */
              unit: string;
              /**
               * Value
               * @description Amount paid in cents
               */
              value: string;
          };
          /**
           * Fulfilled On
           * @description The timestamp when the order was fulfilled
           * @default null
           */
          fulfilledOn: string | null;
          /**
           * Net Amount
           * @description Net amount details
           */
          netAmount: {
              /**
               * String
               * @description Formatted amount (e.g., '211.55 USD')
               */
              string: string;
              /**
               * Unit
               * @description Currency unit (e.g., USD)
               */
              unit: string;
              /**
               * Value
               * @description Amount paid in cents
               */
              value: string;
          };
          /**
           * Order Comment
           * @description A comment left by the customer
           * @default null
           */
          orderComment: string | null;
          /**
           * Order Id
           * @description The order ID
           */
          orderId: string;
          /**
           * Refunded On
           * @description The timestamp when the order was refunded
           * @default null
           */
          refundedOn: string | null;
          /**
           * Status
           * @description The status of the order
           */
          status: string;
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Current limit
           */
          limit: number;
          /**
           * Offset
           * @description Current offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of orders
           */
          total: number;
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
 * Type of WEBFLOW's WEBFLOW_LIST_PAGES tool input.
 */
type WEBFLOW_LIST_PAGES_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return (max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Locale Id
   * @description Unique identifier for a specific locale
   * @default null
   */
  locale_id: string | null;
  /**
   * Offset
   * @description Offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Site Id
   * @description Unique identifier for the site
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_LIST_PAGES tool output.
 */
type WEBFLOW_LIST_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pages
       * @description List of pages in the site
       */
      pages: {
          /**
           * Archived
           * @description Whether the page is archived
           */
          archived: boolean;
          /**
           * Can Branch
           * @description Whether the page can be branched
           */
          canBranch: boolean;
          /**
           * Created On
           * @description Creation date of the page
           */
          createdOn: string;
          /**
           * Draft
           * @description Whether the page is a draft
           */
          draft: boolean;
          /**
           * Id
           * @description Unique identifier for the page
           */
          id: string;
          /**
           * Is Branch
           * @description Whether the page is a branch
           */
          isBranch: boolean;
          /**
           * Is Members Only
           * @description Whether the page is members-only
           */
          isMembersOnly: boolean;
          /**
           * Last Updated
           * @description Last update date of the page
           */
          lastUpdated: string;
          /**
           * Locale Id
           * @description ID of the locale for the page
           * @default null
           */
          localeId: string | null;
          /**
           * PageOpenGraph
           * @description Model for page Open Graph details.
           * @default null
           */
          openGraph: {
              /**
               * Description
               * @description Open Graph description
               * @default null
               */
              description: string | null;
              /**
               * Description Copied
               * @description Whether description is copied from SEO
               * @default null
               */
              descriptionCopied: boolean | null;
              /**
               * Title
               * @description Open Graph title
               * @default null
               */
              title: string | null;
              /**
               * Title Copied
               * @description Whether title is copied from SEO
               * @default null
               */
              titleCopied: boolean | null;
          } | null;
          /**
           * Published Path
           * @description Published path of the page
           * @default null
           */
          publishedPath: string | null;
          /**
           * PageSEO
           * @description Model for page SEO details.
           * @default null
           */
          seo: {
              /**
               * Description
               * @description SEO description for the page
               * @default null
               */
              description: string | null;
              /**
               * Title
               * @description SEO title for the page
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Site Id
           * @description ID of the site the page belongs to
           */
          siteId: string;
          /**
           * Slug
           * @description URL slug of the page
           */
          slug: string;
          /**
           * Title
           * @description Title of the page
           */
          title: string;
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Maximum number of records returned
           */
          limit: number;
          /**
           * Offset
           * @description Current offset in pagination
           */
          offset: number;
          /**
           * Total
           * @description Total number of records available
           */
          total: number;
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
 * Type of WEBFLOW's WEBFLOW_LIST_WEBFLOW_SITES tool input.
 */
type WEBFLOW_LIST_WEBFLOW_SITES_INPUT = object;

/**
 * Type of WEBFLOW's WEBFLOW_LIST_WEBFLOW_SITES tool output.
 */
type WEBFLOW_LIST_WEBFLOW_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sites
       * @description List of Webflow sites accessible to the authenticated user
       */
      sites: {
          /**
           * Display Name
           * @description Display name of the site
           */
          displayName: string;
          /**
           * Id
           * @description Unique identifier of the site
           */
          id: string;
          /**
           * Last Published
           * @description Last published date of the site
           * @default null
           */
          lastPublished: string | null;
          /**
           * Preview Url
           * @description Preview URL of the site
           */
          previewUrl: string;
          /**
           * Short Name
           * @description Short name of the site
           */
          shortName: string;
          /**
           * Status
           * @description Current status of the site
           * @default null
           */
          status: string | null;
          /**
           * Time Zone
           * @description Timezone of the site
           * @default null
           */
          timeZone: string | null;
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
 * Type of WEBFLOW's WEBFLOW_PUBLISH_SITE tool input.
 */
type WEBFLOW_PUBLISH_SITE_INPUT = {
  /**
   * Domains
   * @description Optional array of domain strings to publish to
   * @default null
   */
  domains: string[] | null;
  /**
   * Site Id
   * @description The unique identifier of the site to publish
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_PUBLISH_SITE tool output.
 */
type WEBFLOW_PUBLISH_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of domains that will be published
       */
      domains: string[];
      /**
       * Queued
       * @description Whether the publish request was queued successfully
       */
      queued: boolean;
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
 * Type of WEBFLOW's WEBFLOW_REFUND_ORDER tool input.
 */
type WEBFLOW_REFUND_ORDER_INPUT = {
  /**
   * Order Id
   * @description Unique identifier for the order to be refunded
   */
  order_id?: string;
  /**
   * RefundReason
   * @description Valid reasons for refunding an order.
   * @default null
   * @enum {string|null}
   */
  reason: "duplicate" | "fraudulent" | "requested" | null;
  /**
   * Site Id
   * @description Unique identifier for the site where the order exists
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_REFUND_ORDER tool output.
 */
type WEBFLOW_REFUND_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Order Id
       * @description The unique identifier of the refunded order
       * @default null
       */
      orderId: string | null;
      /**
       * Refunded On
       * @description The ISO8601 timestamp when the order was refunded
       * @default null
       */
      refundedOn: string | null;
      /**
       * Status
       * @description The current status of the order
       * @default null
       */
      status: string | null;
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
 * Type of WEBFLOW's WEBFLOW_UNFULFILL_ORDER tool input.
 */
type WEBFLOW_UNFULFILL_ORDER_INPUT = {
  /**
   * Order Id
   * @description The ID of the order to unfulfill
   */
  order_id?: string;
  /**
   * Site Id
   * @description The ID of the site containing the order
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_UNFULFILL_ORDER tool output.
 */
type WEBFLOW_UNFULFILL_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the order was successfully unfulfilled
       * @default true
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
 * Type of WEBFLOW's WEBFLOW_UPDATE_COLLECTION_ITEM tool input.
 */
type WEBFLOW_UPDATE_COLLECTION_ITEM_INPUT = {
  /**
   * Cms Locale Id
   * @description The locale identifier if the item is localized
   * @default null
   */
  cms_locale_id: string | null;
  /**
   * Collection Id
   * @description The unique identifier of the Webflow collection
   */
  collection_id?: string;
  /**
   * Fields
   * @description The fields to update and their new values
   */
  fields?: {
      [key: string]: unknown;
  };
  /**
   * Item Id
   * @description The unique identifier of the item to update
   */
  item_id?: string;
  /**
   * Live
   * @description Whether to publish the changes immediately
   * @default false
   */
  live: boolean | null;
};

/**
 * Type of WEBFLOW's WEBFLOW_UPDATE_COLLECTION_ITEM tool output.
 */
type WEBFLOW_UPDATE_COLLECTION_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description The updated collection item
       */
      item: {
          /**
           * Cms Locale Id
           * @description Locale identifier if the item is localized
           * @default null
           */
          cmsLocaleId: string | null;
          /**
           * Created On
           * @description Creation date of the item
           */
          createdOn: string;
          /**
           * Field Data
           * @description The updated fields and their values
           */
          fieldData: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the collection item
           */
          id: string;
          /**
           * Is Archived
           * @description Whether the item is archived
           */
          isArchived: boolean;
          /**
           * Is Draft
           * @description Whether the item is a draft
           */
          isDraft: boolean;
          /**
           * Last Published
           * @description Last publication date of the item
           * @default null
           */
          lastPublished: string | null;
          /**
           * Last Updated
           * @description Last update date of the item
           */
          lastUpdated: string;
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
 * Type of WEBFLOW's WEBFLOW_UPDATE_ITEM_INVENTORY tool input.
 */
type WEBFLOW_UPDATE_ITEM_INVENTORY_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier for a Collection
   */
  collection_id?: string;
  /**
   * Inventory Type
   * @description Type of inventory tracking. Must be either 'finite' or 'infinite'
   * @enum {string}
   */
  inventory_type?: "finite" | "infinite";
  /**
   * Item Id
   * @description Unique identifier for an Item
   */
  item_id?: string;
  /**
   * Quantity
   * @description Sets the inventory quantity to this absolute value
   * @default null
   */
  quantity: number | null;
  /**
   * Update Quantity
   * @description Adds this quantity to the current stored quantity (can be negative)
   * @default null
   */
  update_quantity: number | null;
};

/**
 * Type of WEBFLOW's WEBFLOW_UPDATE_ITEM_INVENTORY tool output.
 */
type WEBFLOW_UPDATE_ITEM_INVENTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for a SKU item
       */
      id: string;
      /**
       * Inventory Type
       * @description Type of inventory tracking (finite or infinite)
       */
      inventoryType: string;
      /**
       * Quantity
       * @description Total quantity of items remaining in inventory (if inventoryType is finite)
       */
      quantity: number;
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
 * Type of WEBFLOW's WEBFLOW_UPDATE_ORDER tool input.
 */
type WEBFLOW_UPDATE_ORDER_INPUT = {
  /**
   * Comment
   * @description Arbitrary data for your records.
   * @default null
   */
  comment: string | null;
  /**
   * Order Id
   * @description Unique identifier for an Order.
   */
  order_id?: string;
  /**
   * Shipping Provider
   * @description Company or method used to ship order.
   * @default null
   */
  shippingProvider: string | null;
  /**
   * Shipping Tracking
   * @description Tracking number for order shipment.
   * @default null
   */
  shippingTracking: string | null;
  /**
   * Shipping Tracking Url
   * @description URL to track order shipment. At least one of comment, shippingProvider, shippingTracking, or shippingTrackingURL must be provided.
   * @default null
   */
  shippingTrackingURL: string | null;
  /**
   * Site Id
   * @description Unique identifier for a Site.
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_UPDATE_ORDER tool output.
 */
type WEBFLOW_UPDATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accepted On
       * @default null
       */
      acceptedOn: string | null;
      /**
       * Comment
       * @default null
       */
      comment: string | null;
      /**
       * Dispute Last Status
       * @default null
       */
      disputeLastStatus: string | null;
      /**
       * Dispute Updated On
       * @default null
       */
      disputeUpdatedOn: string | null;
      /**
       * Disputed On
       * @default null
       */
      disputedOn: string | null;
      /**
       * Fulfilled On
       * @default null
       */
      fulfilledOn: string | null;
      /**
       * Order Comment
       * @default null
       */
      orderComment: string | null;
      /** Order Id */
      orderId: string;
      /**
       * Refunded On
       * @default null
       */
      refundedOn: string | null;
      /**
       * Shipping Provider
       * @default null
       */
      shippingProvider: string | null;
      /**
       * Shipping Tracking
       * @default null
       */
      shippingTracking: string | null;
      /**
       * Shipping Tracking Url
       * @default null
       */
      shippingTrackingURL: string | null;
      /** Status */
      status: string;
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
 * Type of WEBFLOW's WEBFLOW_UPLOAD_ASSET tool input.
 */
type WEBFLOW_UPLOAD_ASSET_INPUT = {
  /**
   * Asset Folder Id
   * @description ID of the folder where the asset should be placed
   * @default null
   */
  asset_folder_id: string | null;
  /**
   * Content Type
   * @description MIME type of the file being uploaded
   */
  content_type?: string;
  /**
   * File Content
   * @description Base64 encoded content of the file to be uploaded
   */
  file_content?: string;
  /**
   * File Name
   * @description Name of the file to be uploaded
   */
  file_name?: string;
  /**
   * Md5
   * @description MD5 hash of the file content for integrity verification
   */
  md5?: string;
  /**
   * Site Id
   * @description The unique identifier of the Webflow site
   */
  site_id?: string;
};

/**
 * Type of WEBFLOW's WEBFLOW_UPLOAD_ASSET tool output.
 */
type WEBFLOW_UPLOAD_ASSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset
       * @description Details of the uploaded asset
       */
      asset: {
          /**
           * Id
           * @description Unique identifier of the asset
           */
          id: string;
          /**
           * Name
           * @description Name of the uploaded file
           */
          name: string;
          /**
           * Size
           * @description Size of the file in bytes
           */
          size: number;
          /**
           * Type
           * @description MIME type of the file
           */
          type: string;
          /**
           * Url
           * @description Public URL of the uploaded asset
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "WEBFLOW".
 */
export type WEBFLOW_TOOL_INPUTS = {
  CREATE_COLLECTION_ITEM: WEBFLOW_CREATE_COLLECTION_ITEM_INPUT
  DELETE_COLLECTION_ITEM: WEBFLOW_DELETE_COLLECTION_ITEM_INPUT
  FULFILL_ORDER: WEBFLOW_FULFILL_ORDER_INPUT
  GET_COLLECTION: WEBFLOW_GET_COLLECTION_INPUT
  GET_COLLECTION_ITEM: WEBFLOW_GET_COLLECTION_ITEM_INPUT
  GET_ITEM_INVENTORY: WEBFLOW_GET_ITEM_INVENTORY_INPUT
  GET_ORDER: WEBFLOW_GET_ORDER_INPUT
  GET_SITE_INFO: WEBFLOW_GET_SITE_INFO_INPUT
  LIST_COLLECTIONS: WEBFLOW_LIST_COLLECTIONS_INPUT
  LIST_COLLECTION_ITEMS: WEBFLOW_LIST_COLLECTION_ITEMS_INPUT
  LIST_FORM_SUBMISSIONS: WEBFLOW_LIST_FORM_SUBMISSIONS_INPUT
  LIST_ORDERS: WEBFLOW_LIST_ORDERS_INPUT
  LIST_PAGES: WEBFLOW_LIST_PAGES_INPUT
  LIST_WEBFLOW_SITES: WEBFLOW_LIST_WEBFLOW_SITES_INPUT
  PUBLISH_SITE: WEBFLOW_PUBLISH_SITE_INPUT
  REFUND_ORDER: WEBFLOW_REFUND_ORDER_INPUT
  UNFULFILL_ORDER: WEBFLOW_UNFULFILL_ORDER_INPUT
  UPDATE_COLLECTION_ITEM: WEBFLOW_UPDATE_COLLECTION_ITEM_INPUT
  UPDATE_ITEM_INVENTORY: WEBFLOW_UPDATE_ITEM_INVENTORY_INPUT
  UPDATE_ORDER: WEBFLOW_UPDATE_ORDER_INPUT
  UPLOAD_ASSET: WEBFLOW_UPLOAD_ASSET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WEBFLOW".
 */
export type WEBFLOW_TOOL_OUTPUTS = {
  CREATE_COLLECTION_ITEM: WEBFLOW_CREATE_COLLECTION_ITEM_OUTPUT
  DELETE_COLLECTION_ITEM: WEBFLOW_DELETE_COLLECTION_ITEM_OUTPUT
  FULFILL_ORDER: WEBFLOW_FULFILL_ORDER_OUTPUT
  GET_COLLECTION: WEBFLOW_GET_COLLECTION_OUTPUT
  GET_COLLECTION_ITEM: WEBFLOW_GET_COLLECTION_ITEM_OUTPUT
  GET_ITEM_INVENTORY: WEBFLOW_GET_ITEM_INVENTORY_OUTPUT
  GET_ORDER: WEBFLOW_GET_ORDER_OUTPUT
  GET_SITE_INFO: WEBFLOW_GET_SITE_INFO_OUTPUT
  LIST_COLLECTIONS: WEBFLOW_LIST_COLLECTIONS_OUTPUT
  LIST_COLLECTION_ITEMS: WEBFLOW_LIST_COLLECTION_ITEMS_OUTPUT
  LIST_FORM_SUBMISSIONS: WEBFLOW_LIST_FORM_SUBMISSIONS_OUTPUT
  LIST_ORDERS: WEBFLOW_LIST_ORDERS_OUTPUT
  LIST_PAGES: WEBFLOW_LIST_PAGES_OUTPUT
  LIST_WEBFLOW_SITES: WEBFLOW_LIST_WEBFLOW_SITES_OUTPUT
  PUBLISH_SITE: WEBFLOW_PUBLISH_SITE_OUTPUT
  REFUND_ORDER: WEBFLOW_REFUND_ORDER_OUTPUT
  UNFULFILL_ORDER: WEBFLOW_UNFULFILL_ORDER_OUTPUT
  UPDATE_COLLECTION_ITEM: WEBFLOW_UPDATE_COLLECTION_ITEM_OUTPUT
  UPDATE_ITEM_INVENTORY: WEBFLOW_UPDATE_ITEM_INVENTORY_OUTPUT
  UPDATE_ORDER: WEBFLOW_UPDATE_ORDER_OUTPUT
  UPLOAD_ASSET: WEBFLOW_UPLOAD_ASSET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WEBFLOW toolkit.
 */
export const WEBFLOW = {
  slug: "webflow",
  tools: {
    /**
     * This tool creates a new item in a specified webflow collection. it requires the collection id and field data parameters (including required name and slug) and optionally accepts an is draft flag. authentication is assumed to be provided, and the collection id can be obtained by using the webflow list collections tool.
     */
    CREATE_COLLECTION_ITEM: "WEBFLOW_CREATE_COLLECTION_ITEM",
    /**
     * This tool allows you to delete a specific item from a collection in webflow. it permanently removes the item from the specified collection and complements existing collection management tools. the tool requires a collection id to identify the collection and an item id to identify the item, with an optional cms locale id parameter for handling multi-language content.
     */
    DELETE_COLLECTION_ITEM: "WEBFLOW_DELETE_COLLECTION_ITEM",
    /**
     * This tool allows you to mark an order as fulfilled in webflow's e-commerce system. it's essential for managing order fulfillment in webflow stores.
     */
    FULFILL_ORDER: "WEBFLOW_FULFILL_ORDER",
    /**
     * Retrieves a specific collection by its id from a webflow site. this endpoint returns detailed information about the collection, including its name, slug, and schema. it requires a valid collection id as a parameter and complements the webflow list collections tool for accessing specific collection details. this tool requires the 'cms:read' authentication scope.
     */
    GET_COLLECTION: "WEBFLOW_GET_COLLECTION",
    /**
     * This tool retrieves a specific item from a webflow collection. it allows users to fetch detailed information about a single collection item using its unique identifier. the tool is used to get an item's details such as its id, timestamps (lastpublished, lastupdated, createdon), archive/draft status, fielddata, and cmslocaleid. this tool requires appropriate 'cms:read' authentication scope.
     */
    GET_COLLECTION_ITEM: "WEBFLOW_GET_COLLECTION_ITEM",
    /**
     * This tool retrieves the current inventory levels for a specific item in a webflow collection. it provides information about the item's inventory quantity and type (finite or infinite) and complements the webflow update item inventory action by allowing users to check inventory levels before making any updates.
     */
    GET_ITEM_INVENTORY: "WEBFLOW_GET_ITEM_INVENTORY",
    /**
     * This tool retrieves detailed information about a specific order in webflow. it allows users to fetch comprehensive order details including customer information, items purchased, payment status, and shipping details. the response includes order status, customer details, billing and shipping information, items purchased, payment details, order total, timestamps, fulfillment status, and additional comments or tracking information.
     */
    GET_ORDER: "WEBFLOW_GET_ORDER",
    /**
     * This tool retrieves detailed information about a specific webflow site. it includes site id, workspaceid, creation and update dates, display names, and other settings like previewurl, timezone, customdomains, and locale settings. it requires a valid 'site id' and appropriate 'sites:read' authentication scope.
     */
    GET_SITE_INFO: "WEBFLOW_GET_SITE_INFO",
    /**
     * This tool retrieves a list of all collections for a given webflow site. it uses the site id (obtained from webflow list webflow sites) to return a list of collections, each with properties such as id, name, slug, singularname, lastupdated, and fields. this tool is fundamental for working with webflow's cms and requires appropriate 'cms:read' authentication scope.
     */
    LIST_COLLECTIONS: "WEBFLOW_LIST_COLLECTIONS",
    /**
     * This tool retrieves a list of items from a specified collection in webflow. it supports pagination and filtering, and is essential for fetching multiple items from a collection, such as blog posts, products, or any content stored in collections.
     */
    LIST_COLLECTION_ITEMS: "WEBFLOW_LIST_COLLECTION_ITEMS",
    /**
     * This tool retrieves a list of form submissions for a specific webflow site. it allows users to fetch form submission data with pagination support and optional filtering by form element id.
     */
    LIST_FORM_SUBMISSIONS: "WEBFLOW_LIST_FORM_SUBMISSIONS",
    /**
     * This tool retrieves a list of all orders for a specified webflow site using the get /sites/{site id}/orders endpoint. it accepts a required site id parameter and optional parameters such as status (to filter orders by their status), offset (for pagination), and limit (specifies the number of items per request). the response includes order details like order id, created on, customer info, status, total, items, shipping address, billing address, and payment info. this functionality supports ecommerce workflow management and requires the scope ecommerce:read.
     */
    LIST_ORDERS: "WEBFLOW_LIST_ORDERS",
    /**
     * This tool retrieves a list of all pages for a specified webflow site. it can access both static and cms-driven pages and provides information such as the page's unique identifier, name, url slug, creation and update timestamps, and publication status. it is useful for auditing site structure, building site maps, and monitoring page updates.
     */
    LIST_PAGES: "WEBFLOW_LIST_PAGES",
    /**
     * This tool retrieves a list of all webflow sites accessible to the authenticated user. it is a fundamental and independent action which only requires an authentication token and returns details for each site including site id, name, shortname, lastpublished, previewurl, timezone, and status.
     */
    LIST_WEBFLOW_SITES: "WEBFLOW_LIST_WEBFLOW_SITES",
    /**
     * This tool publishes a webflow site, making all staged changes live. it uses the post /sites/{site id}/publish api endpoint and requires a valid site id, with an optional domains array to specify custom domains. it is essential for deploying updates made to site content, design, or structure.
     */
    PUBLISH_SITE: "WEBFLOW_PUBLISH_SITE",
    /**
     * This tool allows you to refund a webflow e-commerce order. when executed, it reverses the stripe charge and sets the order's status to 'refunded'. it handles customer returns or order cancellations.
     */
    REFUND_ORDER: "WEBFLOW_REFUND_ORDER",
    /**
     * This tool allows you to mark a previously fulfilled order as unfulfilled in webflow. it is useful for reversing a fulfillment action when an order was mistakenly marked as fulfilled or if there are issues with shipment.
     */
    UNFULFILL_ORDER: "WEBFLOW_UNFULFILL_ORDER",
    /**
     * This tool allows updating an existing item in a webflow collection using the patch /collections/{collection id}/items/{item id} endpoint. it accepts required parameters such as collection id, item id, and fields, and optional 'live' flag and cms locale id. the update operation modifies any fields available in the collection's schema and returns the updated item along with metadata.
     */
    UPDATE_COLLECTION_ITEM: "WEBFLOW_UPDATE_COLLECTION_ITEM",
    /**
     * This tool allows you to update the inventory levels of a specific sku item in your webflow e-commerce site by either setting the inventory quantity directly or updating it incrementally. it updates the inventory status using the patch /collections/:collection id/items/:item id/inventory endpoint and requires the 'ecommerce:write' scope.
     */
    UPDATE_ITEM_INVENTORY: "WEBFLOW_UPDATE_ITEM_INVENTORY",
    /**
     * This tool allows updating specific fields of an existing order in webflow. it's particularly useful for managing order fulfillment details and adding internal notes.
     */
    UPDATE_ORDER: "WEBFLOW_UPDATE_ORDER",
    /**
     * This tool allows users to upload assets (files, images, etc.) to a webflow site. it involves a two-step process: first, generating a pre-signed amazon s3 upload url by calling the webflow api, and second, uploading the file to that s3 url. the tool requires parameters such as site id, file name, file content, md5, and optionally asset folder id to correctly upload and manage assets for the specified webflow site.
     */
    UPLOAD_ASSET: "WEBFLOW_UPLOAD_ASSET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WEBFLOW".
 */
export type WEBFLOW_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WEBFLOW".
 */
export type WEBFLOW_TRIGGER_EVENTS = {}
