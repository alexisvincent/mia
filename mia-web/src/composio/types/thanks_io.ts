// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of THANKS_IO's THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST tool input.
 */
type THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST_INPUT = {
  /**
   * Address
   * @description Primary street address of the recipient
   */
  address?: string;
  /**
   * Address2
   * @description Additional address information (e.g., apartment or suite number)
   * @default null
   */
  address2: string | null;
  /**
   * City
   * @description City of the recipient's address
   */
  city?: string;
  /**
   * Country
   * @description Country code of the recipient's address (ISO 3166-1 alpha-2)
   */
  country?: string;
  /**
   * Email
   * Format: email
   * @description Recipient's email address
   * @default null
   */
  email: unknown;
  /**
   * Mailing List
   * @description ID of the mailing list to which the recipient will be added
   */
  mailing_list?: string;
  /**
   * Name
   * @description Full name of the recipient
   */
  name?: string;
  /**
   * Phone
   * @description Recipient's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Postal Code
   * @description Postal or ZIP code of the recipient's address
   */
  postal_code?: string;
  /**
   * Province
   * @description State or province of the recipient's address
   */
  province?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST tool output.
 */
type THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Primary street address of the recipient
       */
      address: string;
      /**
       * Address2
       * @description Additional address information
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City of the recipient's address
       */
      city: string;
      /**
       * Country
       * @description Country of the recipient's address
       */
      country: string;
      /**
       * Created At
       * @description Timestamp when the recipient was added (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * @description Recipient's email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the newly added recipient
       */
      id: string;
      /**
       * Mailing List
       * @description ID of the mailing list the recipient was added to
       */
      mailing_list: string;
      /**
       * Name
       * @description Full name of the recipient
       */
      name: string;
      /**
       * Phone
       * @description Recipient's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code of the recipient's address
       */
      postal_code: string;
      /**
       * Province
       * @description State or province of the recipient's address
       */
      province: string;
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
 * Type of THANKS_IO's THANKS_IO_CREATE_MAILING_LIST tool input.
 */
type THANKS_IO_CREATE_MAILING_LIST_INPUT = {
  /**
   * Description
   * @description Brief description of the mailing list
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the new mailing list
   */
  name?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_CREATE_MAILING_LIST tool output.
 */
type THANKS_IO_CREATE_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description API key associated with the mailing list
       */
      api_key: string;
      /**
       * Created At
       * @description Creation timestamp
       */
      created_at: string;
      /**
       * Description
       * @description Description of the mailing list
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the mailing list
       */
      id: number | null;
      /**
       * Qrcode Url
       * @description URL of the QR code for the mailing list
       * @default null
       */
      qrcode_url: string | null;
      /**
       * Type
       * @description Type of the mailing list
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the user who owns the mailing list
       */
      user_id: number;
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
 * Type of THANKS_IO's THANKS_IO_DELETE_MAILING_LIST tool input.
 */
type THANKS_IO_DELETE_MAILING_LIST_INPUT = {
  /**
   * List Id
   * @description The UUID of the mailing list to delete.
   */
  list_id?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_DELETE_MAILING_LIST tool output.
 */
type THANKS_IO_DELETE_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message describing the outcome of the operation.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Operation status, typically 'success'.
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
 * Type of THANKS_IO's THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST tool input.
 */
type THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST_INPUT = {
  /**
   * Recipient Id
   * @description Unique identifier of the recipient to remove
   */
  recipient_id?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST tool output.
 */
type THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Deletion status message
       */
      message: string;
      /**
       * Success
       * @description Indicates if the recipient was successfully deleted
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
 * Type of THANKS_IO's THANKS_IO_DELETE_SUB_ACCOUNT tool input.
 */
type THANKS_IO_DELETE_SUB_ACCOUNT_INPUT = {
  /**
   * Id
   * @description The unique ID of the sub-account to delete.
   */
  id?: number;
};

/**
 * Type of THANKS_IO's THANKS_IO_DELETE_SUB_ACCOUNT tool output.
 */
type THANKS_IO_DELETE_SUB_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message describing the outcome of the operation.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Operation status, typically 'success'.
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
 * Type of THANKS_IO's THANKS_IO_EXECUTE_STORED_SEND tool input.
 */
type THANKS_IO_EXECUTE_STORED_SEND_INPUT = {
  /**
   * Send Type
   * @description Type of stored send to execute
   * @enum {string}
   */
  send_type?: "postcard" | "letter" | "windowlessletter" | "notecard" | "giftcard";
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the stored send resource to execute
   */
  uuid?: unknown;
};

/**
 * Type of THANKS_IO's THANKS_IO_EXECUTE_STORED_SEND tool output.
 */
type THANKS_IO_EXECUTE_STORED_SEND_OUTPUT = {
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
 * Type of THANKS_IO's THANKS_IO_LIST_HANDWRITING_STYLES tool input.
 */
type THANKS_IO_LIST_HANDWRITING_STYLES_INPUT = object;

/**
 * Type of THANKS_IO's THANKS_IO_LIST_HANDWRITING_STYLES tool output.
 */
type THANKS_IO_LIST_HANDWRITING_STYLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Handwriting Styles
       * @description List of available handwriting styles
       */
      handwriting_styles: {
          /**
           * Id
           * @description Unique identifier for the handwriting style
           */
          id: number;
          /**
           * Name
           * @description Name of the handwriting style
           */
          name: string;
          /**
           * Preview Url
           * @description URL to a preview image of the handwriting style
           */
          preview_url: string;
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
 * Type of THANKS_IO's THANKS_IO_LIST_IMAGE_TEMPLATES tool input.
 */
type THANKS_IO_LIST_IMAGE_TEMPLATES_INPUT = object;

/**
 * Type of THANKS_IO's THANKS_IO_LIST_IMAGE_TEMPLATES tool output.
 */
type THANKS_IO_LIST_IMAGE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of available image templates
       */
      templates: {
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the template was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the template
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the image template
           */
          id: string;
          /**
           * Name
           * @description Name of the image template
           */
          name: string;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the template was last updated
           */
          updatedAt: string;
          /**
           * Url
           * @description URL of the template image
           */
          url: string;
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
 * Type of THANKS_IO's THANKS_IO_LIST_MAILING_LISTS tool input.
 */
type THANKS_IO_LIST_MAILING_LISTS_INPUT = object;

/**
 * Type of THANKS_IO's THANKS_IO_LIST_MAILING_LISTS tool output.
 */
type THANKS_IO_LIST_MAILING_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mailing Lists
       * @description All mailing lists associated with the account
       */
      mailing_lists: {
          [key: string]: unknown;
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
 * Type of THANKS_IO's THANKS_IO_LIST_MESSAGE_TEMPLATES tool input.
 */
type THANKS_IO_LIST_MESSAGE_TEMPLATES_INPUT = object;

/**
 * Type of THANKS_IO's THANKS_IO_LIST_MESSAGE_TEMPLATES tool output.
 */
type THANKS_IO_LIST_MESSAGE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Templates
       * @description List of available message templates
       */
      message_templates: {
          /**
           * Body
           * @description Body content of the message template
           */
          body: string;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the message template was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the message template
           */
          id: string;
          /**
           * Name
           * @description Name of the message template
           */
          name: string;
          /**
           * Subject
           * @description Subject line of the message template
           */
          subject: string;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the message template was last updated
           */
          updatedAt: string;
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
 * Type of THANKS_IO's THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH tool input.
 */
type THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH_INPUT = {
  /**
   * Address
   * @description Full address to use as the center of the radius search
   */
  address?: string;
  /**
   * Append Data
   * @description Append phone and email to each record for an additional fee
   * @default false
   */
  append_data: boolean;
  /**
   * Include Condos
   * @description Include condos in search results
   * @default true
   */
  include_condos: boolean;
  /**
   * Postal Code
   * @description Postal code for the search
   */
  postal_code?: string;
  /**
   * Preview
   * @description Return a preview of the number of neighbors found and cost
   * @default false
   */
  preview: boolean;
  /**
   * Record Count
   * @description Number of nearest neighbors to search for (1-10000)
   */
  record_count?: number;
  /**
   * Record Types
   * @description Type of records to search for
   * @default all
   * @enum {string}
   */
  record_types: "all" | "likelytomove" | "likelytorefi" | "absenteeowner" | "highnetworth" | "majorityhomeequity" | "homefreeclear" | "underwater" | "kidsinhousehold" | "newhomeowner" | "firsttimehomebuyer" | "renters" | "retiring" | "retired" | "pool" | "onlybusinesses" | "newbusiness";
  /**
   * Use Property Owner
   * @description Use property owner's address when searching for commercial record types
   * @default false
   */
  use_property_owner: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH tool output.
 */
type THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Estimated cost in preview
       * @default null
       */
      cost: number | null;
      /**
       * Failure
       * @description Whether the request failed
       */
      failure: boolean;
      /**
       * Mailing List Id
       * @description Unique identifier of the mailing list
       */
      mailing_list_id: number;
      /**
       * Neighbors
       * @description Number of neighbors found in preview
       * @default null
       */
      neighbors: number | null;
      /**
       * Status
       * @description Status of the request, e.g., 'success' or 'failure'
       */
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
 * Type of THANKS_IO's THANKS_IO_ORDERS_LIST tool input.
 */
type THANKS_IO_ORDERS_LIST_INPUT = {
  /**
   * Limit
   * @description Maximum number of orders to return (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Sub Account Id
   * @description Filter orders by this sub-account ID.
   * @default null
   */
  sub_account_id: number | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDERS_LIST tool output.
 */
type THANKS_IO_ORDERS_LIST_OUTPUT = {
  /**
   * Data
   * @description List of order summaries.
   */
  data?: {
      /**
       * Authorization Total
       * @description Authorization total in cents.
       */
      authorization_total: number;
      /** Created At */
      created_at: {
          /**
           * Date
           * @description Timestamp string in ISO format.
           */
          date: string;
          /**
           * Timezone
           * @description Timezone identifier.
           */
          timezone: string;
          /**
           * Timezone Type
           * @description Internal timezone type.
           */
          timezone_type: number;
      };
      /**
       * Front Image
       * @description URL of the front image.
       */
      front_image: string;
      /**
       * Grand Total
       * @description Grand total cost in cents.
       */
      grand_total: number;
      /**
       * High Quality Preview
       * @description URL to high-quality preview PDF, if available.
       * @default null
       */
      high_quality_preview: string | null;
      /**
       * Id
       * @description Unique ID of the order.
       */
      id: number;
      /**
       * Message
       * @description Message content sent in the order.
       */
      message: string;
      /**
       * Method
       * @description How the order was placed (API, UI, etc.).
       */
      method: string;
      /**
       * Size
       * @description Size of the item (e.g., '4x6').
       */
      size: string;
      /**
       * Status
       * @description Current status of the order.
       */
      status: string;
      /**
       * Style
       * @description Handwriting style ID used.
       */
      style: number;
      /**
       * Sub Account Id
       * @description ID of the sub-account used.
       * @default null
       */
      sub_account_id: number | null;
      /**
       * Total Estimated Recipients
       * @description Estimated number of recipients for the order.
       */
      total_estimated_recipients: number;
      /**
       * Total Recipients
       * @description Actual number of recipients processed.
       */
      total_recipients: number;
      /**
       * Type
       * @description Type of order (postcard, letter, etc.).
       */
      type: string;
      /** Updated At */
      updated_at: {
          /**
           * Date
           * @description Timestamp string in ISO format.
           */
          date: string;
          /**
           * Timezone
           * @description Timezone identifier.
           */
          timezone: string;
          /**
           * Timezone Type
           * @description Internal timezone type.
           */
          timezone_type: number;
      };
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination link URLs.
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results.
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results.
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if any.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if any.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Last Page
       * @description Last page number.
       */
      last_page: number;
      /**
       * Path
       * @description Base URL path for pagination.
       */
      path: string;
      /**
       * Per Page
       * @description Items per page.
       */
      per_page: number | null;
      /**
       * To
       * @description Ending item index on this page.
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDERS_SEARCH_BY_ADDRESS tool input.
 */
type THANKS_IO_ORDERS_SEARCH_BY_ADDRESS_INPUT = {
  /**
   * Address
   * @description Street address to search orders by.
   */
  address?: string;
  /**
   * Page
   * @description Page number for paginated results, default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, between 1 and 100, default is 50.
   * @default 50
   */
  per_page: number | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDERS_SEARCH_BY_ADDRESS tool output.
 */
type THANKS_IO_ORDERS_SEARCH_BY_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Matched Order Items
       * @description List of individual matched order items for the search.
       */
      matched_order_items: {
          /**
           * Address
           * @description Recipient address line 1.
           */
          address: string;
          /**
           * Address2
           * @description Recipient address line 2 (if any).
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description Recipient city.
           */
          city: string;
          /**
           * Country
           * @description Recipient country code (e.g., US).
           */
          country: string;
          /**
           * Created At
           * @description Timestamp when the order was created.
           */
          created_at: string;
          /**
           * Failure
           * @description Failure reason for this order item, if any.
           * @default null
           */
          failure: string | null;
          /**
           * Individual Price
           * @description Price of this individual order item in cents.
           */
          individual_price: number;
          /**
           * Name
           * @description Recipient full name of the matched order.
           */
          name: string;
          /**
           * Order Id
           * @description The ID of the matched order.
           */
          order_id: number;
          /**
           * Postal Code
           * @description Recipient postal code.
           */
          postal_code: string;
          /**
           * Province
           * @description Recipient state or province.
           */
          province: string;
          /**
           * Status
           * @description Current processing status of this order item.
           */
          status: string;
      }[];
      /**
       * Orders
       * @description List of full orders matching the search criteria.
       */
      orders: {
          /**
           * Errors
           * @description List of errors encountered during processing, if any.
           */
          errors: string[];
          /**
           * Id
           * @description ID of the order container.
           */
          id: number;
          /**
           * Order
           * @description Detailed order information.
           */
          order: {
              /**
               * Authorization Total
               * @description Authorization total amount in cents.
               */
              authorization_total: number;
              /**
               * Created At
               * @description Timestamp when the order was created.
               */
              created_at: string;
              /**
               * Front Image
               * @description URL of the front image used.
               */
              front_image: string;
              /**
               * Grand Total
               * @description Grand total amount charged in cents.
               */
              grand_total: number;
              /**
               * High Quality Preview
               * @description URL of the high-quality preview PDF, if any.
               * @default null
               */
              high_quality_preview: string | null;
              /**
               * Message
               * @description Message content of the order.
               */
              message: string;
              /**
               * Method
               * @description Submission method (e.g., API, Card Builder).
               */
              method: string;
              /**
               * Size
               * @description Size of the mail piece (e.g., 4x6).
               */
              size: string;
              /**
               * Status
               * @description Final status of the order (e.g., Fulfilled).
               */
              status: string;
              /**
               * Style
               * @description Handwriting style ID used.
               */
              style: number;
              /**
               * Sub Account Id
               * @description Sub account ID used for the order, if any.
               * @default null
               */
              sub_account_id: number | null;
              /**
               * Total Estimated Recipients
               * @description Estimated number of recipients for the order.
               */
              total_estimated_recipients: number;
              /**
               * Total Recipients
               * @description Actual total recipients processed.
               */
              total_recipients: number;
              /**
               * Type
               * @description Type of the order (e.g., postcard, letter).
               */
              type: string;
              /**
               * Updated At
               * @description Timestamp when the order was last updated.
               */
              updated_at: string;
          };
          /**
           * Returned
           * @description List of returned item identifiers, if any.
           */
          returned: string[];
          /**
           * Stats
           * @description Delivery and processing statistics for the order.
           */
          stats: {
              /**
               * Delivered
               * @description Number of items delivered.
               */
              delivered: number;
              /**
               * Failed
               * @description Number of items failed.
               */
              failed: number;
              /**
               * In Local Area
               * @description Number of items in local area.
               */
              in_local_area: number;
              /**
               * In Transit
               * @description Number of items in transit.
               */
              in_transit: number;
              /**
               * Printed
               * @description Number of items printed.
               */
              printed: number;
              /**
               * Processed For Delivery
               * @description Number processed for delivery.
               */
              processed_for_delivery: number;
              /**
               * Processing
               * @description Number of items currently processing.
               */
              processing: number;
              /**
               * Re Routed
               * @description Number of items re-routed.
               */
              re_routed: number;
              /**
               * Returned To Sender
               * @description Number of items returned to sender.
               */
              returned_to_sender: number;
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
 * Type of THANKS_IO's THANKS_IO_ORDERS_SEARCH_BY_NAME tool input.
 */
type THANKS_IO_ORDERS_SEARCH_BY_NAME_INPUT = {
  /**
   * Full Name
   * @description Full name of the recipient to search orders by.
   */
  full_name?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDERS_SEARCH_BY_NAME tool output.
 */
type THANKS_IO_ORDERS_SEARCH_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Matched Order Items
       * @description List of individual matched order items for the search.
       */
      matched_order_items: {
          /**
           * Address
           * @description Recipient address line 1.
           */
          address: string;
          /**
           * Address2
           * @description Recipient address line 2 (if any).
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description Recipient city.
           */
          city: string;
          /**
           * Country
           * @description Recipient country code (e.g., US).
           */
          country: string;
          /**
           * Created At
           * @description Timestamp when the order was created.
           */
          created_at: string;
          /**
           * Failure
           * @description Failure reason for this order item, if any.
           * @default null
           */
          failure: string | null;
          /**
           * Individual Price
           * @description Price of this individual order item in cents.
           */
          individual_price: number;
          /**
           * Name
           * @description Recipient full name of the matched order.
           */
          name: string;
          /**
           * Order Id
           * @description The ID of the matched order.
           */
          order_id: number;
          /**
           * Postal Code
           * @description Recipient postal code.
           */
          postal_code: string;
          /**
           * Province
           * @description Recipient state or province.
           */
          province: string;
          /**
           * Status
           * @description Current processing status of this order item.
           */
          status: string;
      }[];
      /**
       * Orders
       * @description List of full orders matching the search criteria.
       */
      orders: {
          /**
           * Errors
           * @description List of errors encountered during processing, if any.
           */
          errors: string[];
          /**
           * Id
           * @description ID of the order container.
           */
          id: number;
          /**
           * Order
           * @description Detailed order information.
           */
          order: {
              /**
               * Authorization Total
               * @description Authorization total amount in cents.
               */
              authorization_total: number;
              /**
               * Created At
               * @description Timestamp when the order was created.
               */
              created_at: string;
              /**
               * Front Image
               * @description URL of the front image used.
               */
              front_image: string;
              /**
               * Grand Total
               * @description Grand total amount charged in cents.
               */
              grand_total: number;
              /**
               * High Quality Preview
               * @description URL of the high-quality preview PDF, if any.
               * @default null
               */
              high_quality_preview: string | null;
              /**
               * Message
               * @description Message content of the order.
               */
              message: string;
              /**
               * Method
               * @description Submission method (e.g., API, Card Builder).
               */
              method: string;
              /**
               * Size
               * @description Size of the mail piece (e.g., 4x6).
               */
              size: string;
              /**
               * Status
               * @description Final status of the order (e.g., Fulfilled).
               */
              status: string;
              /**
               * Style
               * @description Handwriting style ID used.
               */
              style: number;
              /**
               * Sub Account Id
               * @description Sub account ID used for the order, if any.
               * @default null
               */
              sub_account_id: number | null;
              /**
               * Total Estimated Recipients
               * @description Estimated number of recipients for the order.
               */
              total_estimated_recipients: number;
              /**
               * Total Recipients
               * @description Actual total recipients processed.
               */
              total_recipients: number;
              /**
               * Type
               * @description Type of the order (e.g., postcard, letter).
               */
              type: string;
              /**
               * Updated At
               * @description Timestamp when the order was last updated.
               */
              updated_at: string;
          };
          /**
           * Returned
           * @description List of returned item identifiers, if any.
           */
          returned: string[];
          /**
           * Stats
           * @description Delivery and processing statistics for the order.
           */
          stats: {
              /** Delivered */
              delivered: number;
              /** Failed */
              failed: number;
              /** In Local Area */
              in_local_area: number;
              /** In Transit */
              in_transit: number;
              /** Printed */
              printed: number;
              /** Processed For Delivery */
              processed_for_delivery: number;
              /** Processing */
              processing: number;
              /** Re Routed */
              re_routed: number;
              /** Returned To Sender */
              returned_to_sender: number;
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
 * Type of THANKS_IO's THANKS_IO_ORDERS_STATS tool input.
 */
type THANKS_IO_ORDERS_STATS_INPUT = {
  /**
   * End Date
   * @description End date for statistics (YYYY-MM-DD)
   * @default null
   */
  end_date: string | null;
  /**
   * Start Date
   * @description Start date for statistics (YYYY-MM-DD)
   * @default null
   */
  start_date: string | null;
  /**
   * Status
   * @description Filter by order status (e.g., 'pending', 'completed')
   * @default null
   */
  status: string | null;
  /**
   * Type
   * @description Filter by order type (e.g., 'postcard', 'letter')
   * @default null
   */
  type: string | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDERS_STATS tool output.
 */
type THANKS_IO_ORDERS_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: number | string | {
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
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_LETTER tool input.
 */
type THANKS_IO_ORDER_PREVIEW_LETTER_INPUT = {
  /**
   * Additional Pages Url
   * Format: uri
   * @description URL to a PDF file containing additional pages to include in the letter. Up to 10 pages allowed, printed double-sided.
   * @default null
   */
  additional_pages_url: string | null;
  /**
   * Front Image Url
   * Format: uri
   * @description URL to the cover image for the front of the letter (JPEG/PNG).
   */
  front_image_url?: string;
  /**
   * Handwriting Style
   * @description ID of the handwriting style to use for the letter body.
   * @default null
   */
  handwriting_style: number | null;
  /**
   * Mailing Lists
   * @description IDs of mailing lists to preview. Required if recipients not provided.
   * @default null
   */
  mailing_lists: number[] | null;
  /**
   * Message
   * @description Handwritten message content to appear on the letter cover page.
   * @default null
   */
  message: string | null;
  /**
   * Preview
   * @description Must be true to generate and return PDF preview URLs instead of placing an order.
   */
  preview?: boolean;
  /**
   * Return Address
   * @description Street address line 1 for the return address.
   * @default null
   */
  return_address: string | null;
  /**
   * Return Address2
   * @description Street address line 2 for the return address.
   * @default null
   */
  return_address2: string | null;
  /**
   * Return City
   * @description City for the return address.
   * @default null
   */
  return_city: string | null;
  /**
   * Return Name
   * @description Name to print on the return address block.
   * @default null
   */
  return_name: string | null;
  /**
   * Return Postal Code
   * @description Postal or ZIP code for the return address.
   * @default null
   */
  return_postal_code: string | null;
  /**
   * Return State
   * @description State or province for the return address.
   * @default null
   */
  return_state: string | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_LETTER tool output.
 */
type THANKS_IO_ORDER_PREVIEW_LETTER_OUTPUT = {
  /**
   * Code
   * @description HTTP status code of the preview call.
   */
  code?: number;
  /** Data */
  data?: {
      /**
       * Previews
       * @description List of URLs pointing to generated PDF preview images.
       */
      previews: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Status message from the API.
   */
  message?: string;
  /**
   * Success
   * @description Whether the preview request succeeded.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_NOTECARD tool input.
 */
type THANKS_IO_ORDER_PREVIEW_NOTECARD_INPUT = {
  /**
   * Handwriting Style
   * @description ID of the handwriting style to use.
   */
  handwriting_style?: number;
  /**
   * Image Template
   * @description ID of a pre-saved notecard image template.
   */
  image_template?: number;
  /**
   * Message
   * @description Handwritten message content to place inside the notecard.
   */
  message?: string;
  /**
   * Preview
   * @description Must be true to return preview images instead of sending.
   * @constant
   */
  preview?: true;
  /**
   * Recipients
   * @description List of recipient objects for the notecard preview.
   */
  recipients?: {
      /**
       * Address
       * @description Street address
       */
      address: string;
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description Country code, e.g., 'US'
       */
      country: string;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal code
       */
      postal_code: string;
      /**
       * Province
       * @description State or province
       */
      province: string;
  }[];
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_NOTECARD tool output.
 */
type THANKS_IO_ORDER_PREVIEW_NOTECARD_OUTPUT = {
  /**
   * Code
   * @description HTTP status code returned by the API.
   */
  code?: number;
  /**
   * Data
   * @description Container for preview image URLs.
   */
  data?: {
      /**
       * Previews
       * @description Array of URLs for generated preview images (front/back).
       */
      previews: unknown[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Result message from the API.
   */
  message?: string;
  /**
   * Success
   * @description Indicates whether the preview request succeeded.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_POSTCARD tool input.
 */
type THANKS_IO_ORDER_PREVIEW_POSTCARD_INPUT = {
  /**
   * Front Image Url
   * Format: uri
   * @description URL to the image for the front of the postcard. Required if 'image_template' not provided.
   * @default null
   */
  front_image_url: unknown;
  /**
   * Handwriting Color
   * @description Handwriting ink color (e.g. 'blue', 'black', '#4287f5').
   * @default null
   */
  handwriting_color: string | null;
  /**
   * Handwriting Style
   * @description ID of the handwriting style to use.
   * @default null
   */
  handwriting_style: string | null;
  /**
   * Image Template
   * @description ID of a pre-saved front-image template. Required if 'front_image_url' not provided.
   * @default null
   */
  image_template: string | null;
  /**
   * Mailing Lists
   * @description List of mailing-list IDs to send to.
   * @default null
   */
  mailing_lists: string[] | null;
  /**
   * Message
   * @description Handwritten message content. Required if 'message_template' not provided.
   * @default null
   */
  message: string | null;
  /**
   * Message Template
   * @description ID of pre-saved message template. Required if 'message' not provided.
   * @default null
   */
  message_template: string | null;
  /**
   * Preview
   * @description Must be true to return preview images.
   * @constant
   */
  preview?: true;
  /**
   * Qrcode Url
   * Format: uri
   * @description URL to auto-generate QR code on the back of the postcard.
   * @default null
   */
  qrcode_url: unknown;
  /**
   * Recipients
   * @description Explicit recipient objects.
   * @default null
   */
  recipients: {
      /**
       * Address
       * @description Street address
       */
      address: string;
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description Country
       */
      country: string;
      /**
       * Custom1
       * @description Custom field 1
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Custom field 2
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Custom field 3
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Custom field 4
       * @default null
       */
      custom4: string | null;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal code
       */
      postal_code: string;
      /**
       * Province
       * @description State or province
       */
      province: string;
  }[] | null;
  /**
   * Size
   * @description Postcard size; defaults to '4x6'. Only valid for postcards.
   * @default 4x6
   * @enum {string|null}
   */
  size: "4x6" | "6x9" | "6x11" | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_POSTCARD tool output.
 */
type THANKS_IO_ORDER_PREVIEW_POSTCARD_OUTPUT = {
  /**
   * Code
   * @description HTTP status code returned.
   */
  code?: number;
  /**
   * Data
   * @description Preview data containing images.
   */
  data?: {
      /**
       * Previews
       * @description Array of URLs for generated preview images.
       */
      previews: unknown[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Result message.
   */
  message?: string;
  /**
   * Success
   * @description Indicates request success.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER tool input.
 */
type THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER_INPUT = {
  /**
   * Additional Pages Url
   * Format: uri
   * @description URL to a single-page PDF to print on back of cover image
   * @default null
   */
  additional_pages_url: unknown;
  /**
   * Front Image Url
   * Format: uri
   * @description URL to the cover image for the windowless letter
   */
  front_image_url?: unknown;
  /**
   * Handwriting Color
   * @description Ink color for handwriting (e.g., 'blue','black', or hex code)
   * @default null
   */
  handwriting_color: string | null;
  /**
   * Handwriting Style
   * @description ID of handwriting style to use
   * @default null
   */
  handwriting_style: string | null;
  /**
   * Message
   * @description Handwritten message content. Required if 'message_template' not set
   * @default null
   */
  message: string | null;
  /**
   * Message Template
   * @description ID of a stored message template. Required if 'message' not set
   * @default null
   */
  message_template: string | null;
  /**
   * Preview
   * @description Must be true to return a PDF preview of the letter send
   * @constant
   */
  preview?: true;
  /**
   * Recipients
   * @description List of recipients for the preview send
   */
  recipients?: {
      /**
       * Address
       * @description Street address
       */
      address: string;
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Country
       * @description Country code (ISO 3166-1 alpha-2)
       */
      country: string;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal or ZIP code
       */
      postal_code: string;
      /**
       * Province
       * @description State or province code
       */
      province: string;
  }[];
};

/**
 * Type of THANKS_IO's THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER tool output.
 */
type THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER_OUTPUT = {
  /**
   * Code
   * @description HTTP status code returned by the API
   */
  code?: number;
  /**
   * Data
   * @description Preview data containing PDF URLs
   */
  data?: {
      /**
       * Previews
       * @description Array of URLs for generated PDF preview
       */
      previews: unknown[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Result message from the API
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the preview request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_PROOF_POSTCARD tool input.
 */
type THANKS_IO_PROOF_POSTCARD_INPUT = {
  /**
   * Back Image Html Content
   * @description Raw HTML content to render back image
   * @default null
   */
  back_image_html_content: string | null;
  /**
   * Back Image Html Url
   * Format: uri
   * @description URL to HTML file for back image generation
   * @default null
   */
  back_image_html_url: unknown;
  /**
   * Back Image Url
   * Format: uri
   * @description URL to image for back of postcard
   * @default null
   */
  back_image_url: unknown;
  /**
   * Custom Background Image
   * Format: uri
   * @description URL to custom background image
   * @default null
   */
  custom_background_image: unknown;
  /**
   * Front Image Html Content
   * @description Raw HTML content to render front image
   * @default null
   */
  front_image_html_content: string | null;
  /**
   * Front Image Html Url
   * Format: uri
   * @description URL to HTML file for front image generation
   * @default null
   */
  front_image_html_url: unknown;
  /**
   * Front Image Url
   * Format: uri
   * @description URL to image for front of postcard
   * @default null
   */
  front_image_url: unknown;
  /**
   * Handwriting Color
   * @description Handwriting ink color (e.g., 'blue', 'black', '#4287f5')
   * @default null
   */
  handwriting_color: string | null;
  /**
   * Handwriting Style
   * @description ID of handwriting style to use
   * @default null
   */
  handwriting_style: number | null;
  /**
   * Message
   * @description Handwritten message content
   * @default null
   */
  message: string | null;
  /**
   * Nostamp
   * @description If true, omit the postal stamp from proof
   * @default false
   */
  nostamp: boolean | null;
  /**
   * Qrcode Url
   * Format: uri
   * @description URL for autogenerated QR code on back of postcard
   * @default null
   */
  qrcode_url: unknown;
  /**
   * Return Address
   * @description Return street address
   * @default null
   */
  return_address: string | null;
  /**
   * Return Address2
   * @description Return address line 2
   * @default null
   */
  return_address2: string | null;
  /**
   * Return City
   * @description Return city
   * @default null
   */
  return_city: string | null;
  /**
   * Return Name
   * @description Return address name
   * @default null
   */
  return_name: string | null;
  /**
   * Return Postal Code
   * @description Return postal code
   * @default null
   */
  return_postal_code: string | null;
  /**
   * Return State
   * @description Return state or province code (ISO)
   * @default null
   */
  return_state: string | null;
  /**
   * Size
   * @description Postcard size; defaults to '4x6'. Valid options: '4x6', '6x9'
   * @default 4x6
   * @enum {string|null}
   */
  size: "4x6" | "6x9" | null;
  /**
   * To Address
   * @description Recipient street address
   */
  to_address?: string;
  /**
   * To Address2
   * @description Recipient address line 2
   * @default null
   */
  to_address2: string | null;
  /**
   * To City
   * @description Recipient city
   */
  to_city?: string;
  /**
   * To Country
   * @description Recipient country code (ISO-3166-1 alpha-2)
   */
  to_country?: string;
  /**
   * To Name
   * @description Recipient's full name
   */
  to_name?: string;
  /**
   * To Postal Code
   * @description Recipient postal code
   */
  to_postal_code?: string;
  /**
   * To State
   * @description Recipient state or province code (ISO)
   */
  to_state?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_PROOF_POSTCARD tool output.
 */
type THANKS_IO_PROOF_POSTCARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Proof Url
       * Format: uri
       * @description URL to the PDF proof of the postcard
       */
      proof_url: unknown;
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
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_CREATE_MULTI tool input.
 */
type THANKS_IO_RECIPIENTS_CREATE_MULTI_INPUT = {
  /**
   * List Id
   * @description ID of the mailing list to which recipients will be added
   */
  list_id?: string;
  /**
   * Recipients
   * @description List of recipients to create at once in the mailing list
   */
  recipients?: {
      /**
       * Address
       * @description Primary street address of the recipient
       */
      address: string;
      /**
       * Address2
       * @description Additional address information (e.g., apartment or suite number)
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City of the recipient's address
       */
      city: string;
      /**
       * Country
       * @description Country code of the recipient's address (ISO 3166-1 alpha-2)
       */
      country: string;
      /**
       * Custom1
       * @description Custom field 1 for the recipient
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Custom field 2 for the recipient
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Custom field 3 for the recipient
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Custom field 4 for the recipient
       * @default null
       */
      custom4: string | null;
      /**
       * Email
       * Format: email
       * @description Recipient's email address
       * @default null
       */
      email: unknown;
      /**
       * Name
       * @description Full name of the recipient
       */
      name: string;
      /**
       * Phone
       * @description Recipient's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code of the recipient's address
       */
      postal_code: string;
      /**
       * Province
       * @description State or province of the recipient's address
       */
      province: string;
  }[];
};

/**
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_CREATE_MULTI tool output.
 */
type THANKS_IO_RECIPIENTS_CREATE_MULTI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Recipients
       * @description List of recipients created successfully
       */
      recipients: {
          /**
           * Address
           * @description Primary street address of the recipient
           */
          address: string;
          /**
           * Address2
           * @description Additional address information
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description City of the recipient's address
           */
          city: string;
          /**
           * Country
           * @description Country code of the recipient's address
           */
          country: string;
          /**
           * Created At
           * @description Timestamp when the recipient was created (ISO 8601)
           */
          created_at: string;
          /**
           * Custom1
           * @description Custom field 1 for the recipient
           * @default null
           */
          custom1: string | null;
          /**
           * Custom2
           * @description Custom field 2 for the recipient
           * @default null
           */
          custom2: string | null;
          /**
           * Custom3
           * @description Custom field 3 for the recipient
           * @default null
           */
          custom3: string | null;
          /**
           * Custom4
           * @description Custom field 4 for the recipient
           * @default null
           */
          custom4: string | null;
          /**
           * Email
           * @description Recipient's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the newly created recipient
           */
          id: string;
          /**
           * Mailing List
           * @description ID of the mailing list the recipient was added to
           */
          mailing_list: string;
          /**
           * Name
           * @description Full name of the recipient
           */
          name: string;
          /**
           * Phone
           * @description Recipient's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code of the recipient's address
           */
          postal_code: string;
          /**
           * Province
           * @description State or province of the recipient's address
           */
          province: string;
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
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS tool input.
 */
type THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS_INPUT = {
  /**
   * Address
   * @description Full street address of the recipient
   */
  address?: string;
  /**
   * Postal Code
   * @description Postal or ZIP code of the recipient's address
   */
  postal_code?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS tool output.
 */
type THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Deletion status message
       */
      message: string;
      /**
       * Success
       * @description Indicates if the recipient was successfully deleted
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
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_GET_DETAILS tool input.
 */
type THANKS_IO_RECIPIENTS_GET_DETAILS_INPUT = {
  /**
   * Recipient Id
   * @description Unique identifier of the recipient to retrieve
   */
  recipient_id?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_GET_DETAILS tool output.
 */
type THANKS_IO_RECIPIENTS_GET_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Primary street address of the recipient
       */
      address: string;
      /**
       * Address2
       * @description Additional address information (e.g., suite or apartment)
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City of the recipient's address
       */
      city: string;
      /**
       * Country
       * @description Country code of the recipient's address (ISO 3166-1 alpha-2)
       */
      country: string;
      /**
       * Created At
       * @description Timestamp when the recipient was created (ISO 8601)
       */
      created_at: string;
      /**
       * Custom1
       * @description Custom field 1
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Custom field 2
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Custom field 3
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Custom field 4
       * @default null
       */
      custom4: string | null;
      /**
       * Email
       * @description Email address of the recipient
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the recipient
       */
      id: string;
      /**
       * Name
       * @description Full name of the recipient
       */
      name: string;
      /**
       * Phone
       * @description Phone number of the recipient
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code of the recipient's address
       */
      postal_code: string;
      /**
       * Province
       * @description State or province of the recipient's address
       */
      province: string;
      /**
       * Updated At
       * @description Timestamp when the recipient was last updated (ISO 8601)
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
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL tool input.
 */
type THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL_INPUT = {
  /**
   * Email
   * @description Email address to search for.
   */
  email?: string;
  /**
   * Limit
   * @description Maximum number of recipients to return; defaults to server limit if unset.
   * @default null
   */
  limit: number | null;
  /**
   * Mailing List Ids
   * @description Array of mailing list IDs to search in.
   */
  mailing_list_ids?: number[];
};

/**
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL tool output.
 */
type THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL_OUTPUT = {
  /**
   * Current Page
   * @description Current page of results.
   */
  current_page?: number;
  /**
   * Data
   * @description List of matching recipients on this page.
   */
  data?: {
      /**
       * Address
       * @description Primary street address.
       * @default null
       */
      address: string | null;
      /**
       * Address2
       * @description Secondary address line, if any.
       * @default null
       */
      address2: string | null;
      /**
       * Can Deliver
       * @description Whether deliverable at this address.
       * @default null
       */
      can_deliver: boolean | null;
      /**
       * City
       * @description City of the recipient's address.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country code (ISO 3166-1 alpha-2).
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp when the recipient was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Custom1
       * @description Custom field 1.
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Custom field 2.
       * @default null
       */
      custom2: string | null;
      /**
       * Deliverability
       * @description Deliverability status.
       * @default null
       */
      deliverability: string | null;
      /**
       * Dob
       * @description Date of birth if available.
       * @default null
       */
      dob: string | null;
      /**
       * Id
       * @description Unique recipient ID.
       */
      id: number;
      /**
       * Mailing List Id
       * @description Mailing list ID the recipient belongs to.
       */
      mailing_list_id: number;
      /**
       * Name
       * @description Full name of the recipient.
       * @default null
       */
      name: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code.
       * @default null
       */
      postal_code: string | null;
      /**
       * Province
       * @description State or province code.
       * @default null
       */
      province: string | null;
      /**
       * Session Id
       * @description Session identifier, if available.
       * @default null
       */
      session_id: string | null;
      /**
       * Updated At
       * @description Timestamp when last updated.
       * @default null
       */
      updated_at: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * First Page Url
   * @description URL of the first page of results.
   */
  first_page_url?: string;
  /**
   * From
   * @description Index of first recipient on this page.
   */
  from?: number;
  /**
   * Last Page
   * @description Total number of pages available.
   */
  last_page?: number;
  /**
   * Last Page Url
   * @description URL of the last page of results.
   */
  last_page_url?: string;
  /**
   * Next Page Url
   * @description URL of the next page, if any.
   * @default null
   */
  next_page_url: string | null;
  /**
   * Path
   * @description Base API path for this endpoint.
   */
  path?: string;
  /**
   * Per Page
   * @description Results per page as returned by server.
   */
  per_page?: number;
  /**
   * Prev Page Url
   * @description URL of the previous page, if any.
   * @default null
   */
  prev_page_url: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * To
   * @description Index of last recipient on this page.
   */
  to?: number;
  /**
   * Total
   * @description Total matching recipients across all pages.
   */
  total?: number;
};

/**
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_UPDATE tool input.
 */
type THANKS_IO_RECIPIENTS_UPDATE_INPUT = {
  /**
   * Address
   * @description Primary street address of the recipient
   * @default null
   */
  address: string | null;
  /**
   * Address2
   * @description Additional address information (e.g., apartment or suite number)
   * @default null
   */
  address2: string | null;
  /**
   * City
   * @description City of the recipient's address
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country code of the recipient's address (ISO 3166-1 alpha-2)
   * @default null
   */
  country: string | null;
  /**
   * Custom1
   * @description Custom field 1 for the recipient
   * @default null
   */
  custom1: string | null;
  /**
   * Custom2
   * @description Custom field 2 for the recipient
   * @default null
   */
  custom2: string | null;
  /**
   * Custom3
   * @description Custom field 3 for the recipient
   * @default null
   */
  custom3: string | null;
  /**
   * Custom4
   * @description Custom field 4 for the recipient
   * @default null
   */
  custom4: string | null;
  /**
   * Email
   * Format: email
   * @description Email address of the recipient
   * @default null
   */
  email: unknown;
  /**
   * Name
   * @description Full name of the recipient
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description Phone number of the recipient
   * @default null
   */
  phone: string | null;
  /**
   * Postal Code
   * @description Postal or ZIP code of the recipient's address
   * @default null
   */
  postal_code: string | null;
  /**
   * Province
   * @description State or province of the recipient's address
   * @default null
   */
  province: string | null;
  /**
   * Recipient Id
   * @description Unique identifier of the recipient to update
   */
  recipient_id?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_RECIPIENTS_UPDATE tool output.
 */
type THANKS_IO_RECIPIENTS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Primary street address of the recipient
       * @default null
       */
      address: string | null;
      /**
       * Address2
       * @description Additional address information
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City of the recipient's address
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country code of the recipient's address
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp when the recipient was created
       * @default null
       */
      created_at: string | null;
      /**
       * Custom1
       * @description Custom field 1 for the recipient
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Custom field 2 for the recipient
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Custom field 3 for the recipient
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Custom field 4 for the recipient
       * @default null
       */
      custom4: string | null;
      /**
       * Email
       * @description Email address of the recipient
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the recipient
       */
      id: string;
      /**
       * Mailing List
       * @description ID of the mailing list the recipient belongs to
       * @default null
       */
      mailing_list: string | null;
      /**
       * Name
       * @description Full name of the recipient
       * @default null
       */
      name: string | null;
      /**
       * Phone
       * @description Phone number of the recipient
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code of the recipient's address
       * @default null
       */
      postal_code: string | null;
      /**
       * Province
       * @description State or province of the recipient's address
       * @default null
       */
      province: string | null;
      /**
       * Updated At
       * @description Timestamp when the recipient was last updated
       * @default null
       */
      updated_at: string | null;
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
 * Type of THANKS_IO's THANKS_IO_SEND_POSTCARD tool input.
 */
type THANKS_IO_SEND_POSTCARD_INPUT = {
  /**
   * Custom Background Image
   * Format: uri
   * @description URL to a custom background image (1875×1275 px)
   * @default null
   */
  custom_background_image: unknown;
  /**
   * Email Additional
   * Format: email
   * @description Email address to receive order alerts (e.g., QR scan notifications)
   * @default null
   */
  email_additional: unknown;
  /**
   * Front Image Url
   * Format: uri
   * @description URL to the image for the front of the postcard (required if 'image_template' is not provided)
   * @default null
   */
  front_image_url: unknown;
  /**
   * Handwriting Color
   * @description Handwriting ink color (e.g., 'blue', 'black', '#4287f5')
   * @default null
   */
  handwriting_color: string | null;
  /**
   * Handwriting Style
   * @description ID of the handwriting style to use
   * @default null
   */
  handwriting_style: string | null;
  /**
   * Image Template
   * @description ID of a pre-saved front-image template (required if 'front_image_url' is not provided)
   * @default null
   */
  image_template: string | null;
  /**
   * Mailing Lists
   * @description List of mailing-list IDs to send to
   * @default null
   */
  mailing_lists: string[] | null;
  /**
   * Message
   * @description Handwritten message content (required if 'message_template' is not provided)
   * @default null
   */
  message: string | null;
  /**
   * Message Template
   * @description ID of a pre-saved message template (required if 'message' is not provided)
   * @default null
   */
  message_template: string | null;
  /**
   * Qrcode Url
   * Format: uri
   * @description URL to auto-generate a QR code on the back of the postcard
   * @default null
   */
  qrcode_url: unknown;
  /**
   * RadiusSearch
   * @description Parameters for a radius-based address search.
   * @default null
   */
  radius_search: {
      /**
       * Address
       * @description Center address for radius search
       */
      address: string;
      /**
       * Append Data
       * @description Append phone and email to each record
       * @default false
       */
      append_data: boolean | null;
      /**
       * Include Condos
       * @description Include condos in the search
       * @default true
       */
      include_condos: boolean | null;
      /**
       * Preview
       * @description Return a preview of count and cost only
       * @default false
       */
      preview: boolean | null;
      /**
       * Record Count
       * @description Number of nearest neighbors (1-10000)
       */
      record_count: number;
      /**
       * Record Types
       * @description Type of records (defaults to 'all'). Options: 'all', 'likelytomove', 'movers', 'mortgage', 'owner'.
       * @default all
       * @enum {string}
       */
      record_types: "all" | "likelytomove" | "movers" | "mortgage" | "owner";
      /**
       * Use Property Owner
       * @description Use property owner's address for commercial records
       * @default false
       */
      use_property_owner: boolean | null;
  } | null;
  /**
   * Recipients
   * @description Explicit recipient objects
   * @default null
   */
  recipients: {
      /**
       * Address
       * @description Street address
       */
      address: string;
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description Country
       */
      country: string;
      /**
       * Custom1
       * @description Custom field 1
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Custom field 2
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Custom field 3
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Custom field 4
       * @default null
       */
      custom4: string | null;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal code
       */
      postal_code: string;
      /**
       * Province
       * @description State or province
       */
      province: string;
  }[] | null;
  /**
   * ReturnAddress
   * @description Optional return address fields for the postcard.
   * @default null
   */
  return_address: {
      /**
       * Return Address
       * @description Street address for the return address
       * @default null
       */
      return_address: string | null;
      /**
       * Return Address2
       * @description Additional street address information
       * @default null
       */
      return_address2: string | null;
      /**
       * Return City
       * @description City for the return address
       * @default null
       */
      return_city: string | null;
      /**
       * Return Name
       * @description Name for the return address
       * @default null
       */
      return_name: string | null;
      /**
       * Return Postal Code
       * @description Postal code for the return address
       * @default null
       */
      return_postal_code: string | null;
      /**
       * Return State
       * @description State for the return address
       * @default null
       */
      return_state: string | null;
  } | null;
  /**
   * Send Standard Mail
   * @description If true, sends as USPS Standard Mail postage class
   * @default null
   */
  send_standard_mail: boolean | null;
  /**
   * Size
   * @description Postcard size; defaults to '4x6'
   * @default 4x6
   * @enum {string|null}
   */
  size: "4x6" | "6x9" | "6x11" | null;
  /**
   * Sub Account
   * @description ID of the sub-account to bill this order
   * @default null
   */
  sub_account: string | null;
  /**
   * Use Custom Background
   * @description Whether to use a custom background image
   * @default null
   */
  use_custom_background: boolean | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_SEND_POSTCARD tool output.
 */
type THANKS_IO_SEND_POSTCARD_OUTPUT = {
  /**
   * PreviewData
   * @description Preview data returned when 'preview' True.
   * @default null
   */
  data: {
      /**
       * Address
       * @description Center address for preview
       */
      address: string;
      /**
       * Cost
       * @description Cost breakdown for the preview
       */
      cost: {
          /**
           * Grand Total
           * @description Total amount
           */
          grand_total: string;
          /**
           * International
           * @description International cost
           */
          international: string;
          /**
           * Plan
           * @description Cost plan
           */
          plan: string;
          /**
           * Sub Total
           * @description Subtotal amount
           */
          sub_total: string;
          /**
           * United States
           * @description United States cost
           */
          united_states: string;
      };
      /**
       * Neighbor Count
       * @description Number of neighbors found
       */
      neighbor_count: number;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Result message (e.g., 'Order being processed')
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Status of the request (e.g., '200')
   * @default null
   */
  status: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of THANKS_IO's THANKS_IO_STORED_SEND_NOTECARD tool input.
 */
type THANKS_IO_STORED_SEND_NOTECARD_INPUT = {
  /**
   * Custom Background Image
   * Format: uri
   * @description URL to custom background (1650×2475px required)
   * @default null
   */
  custom_background_image: unknown;
  /**
   * Email Additional
   * Format: email
   * @description Email to send order alerts (e.g., QR scan notifications)
   * @default null
   */
  email_additional: unknown;
  /**
   * Front Image Url
   * Format: uri
   * @description URL to the image for the front of the notecard
   */
  front_image_url?: unknown;
  /**
   * Handwriting Color
   * @description Handwriting color name or hex code
   * @default null
   */
  handwriting_color: (("blue" | "black" | "green" | "purple" | "red") | string) | null;
  /**
   * Handwriting Style
   * @description ID of the handwriting style to use
   * @default null
   */
  handwriting_style: string | null;
  /**
   * Message
   * @description Handwritten message content for the notecard
   */
  message?: string;
  /**
   * Qrcode Url
   * Format: uri
   * @description URL to generate a QR code inside the notecard
   * @default null
   */
  qrcode_url: unknown;
  /**
   * Recipients
   * @description List of recipient mailing details
   */
  recipients?: {
      /**
       * Address
       * @description Street address for mailing
       */
      address: string;
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Country
       * @description Country code (ISO 3166-1 alpha-2)
       */
      country: string;
      /**
       * Custom1
       * @description Optional custom field
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Optional custom field
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Optional custom field
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Optional custom field
       * @default null
       */
      custom4: string | null;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal or ZIP code
       */
      postal_code: string;
      /**
       * Province
       * @description State or province
       */
      province: string;
  }[];
  /**
   * Send Standard Mail
   * @description Set to true to send via standard mail postage
   * @default null
   */
  send_standard_mail: boolean | null;
  /**
   * Sub Account
   * @description ID of the sub-account to use for this order
   * @default null
   */
  sub_account: string | null;
  /**
   * Use Custom Background
   * @description Whether to use a custom background image
   * @default null
   */
  use_custom_background: boolean | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_STORED_SEND_NOTECARD tool output.
 */
type THANKS_IO_STORED_SEND_NOTECARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stored Send Url
       * @description URL to execute the stored notecard send
       */
      stored_send_url: string;
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
 * Type of THANKS_IO's THANKS_IO_STORED_SEND_POSTCARD tool input.
 */
type THANKS_IO_STORED_SEND_POSTCARD_INPUT = {
  /**
   * Custom Background Image
   * @description URL to custom background image
   * @default null
   */
  custom_background_image: string | null;
  /**
   * Front Image Url
   * @description URL to front image
   * @default null
   */
  front_image_url: string | null;
  /**
   * Handwriting Color
   * @description Handwriting ink color
   * @default null
   */
  handwriting_color: string | null;
  /**
   * Handwriting Style
   * @description ID of handwriting style to apply
   * @default null
   */
  handwriting_style: string | null;
  /**
   * Image Template
   * @description ID of front-image template
   * @default null
   */
  image_template: string | null;
  /**
   * Mailing Lists
   * @description List of mailing list IDs
   * @default null
   */
  mailing_lists: string[] | null;
  /**
   * Message
   * @description Handwritten message content
   * @default null
   */
  message: string | null;
  /**
   * Message Template
   * @description ID of message template
   * @default null
   */
  message_template: string | null;
  /**
   * Preview
   * @description If true, return preview images instead of scheduling send
   * @default false
   */
  preview: boolean | null;
  /**
   * Qrcode Url
   * @description URL to auto-generate a QR code on back
   * @default null
   */
  qrcode_url: string | null;
  /**
   * Recipients
   * @description List of recipients
   * @default null
   */
  recipients: {
      /**
       * Address
       * @description Street address
       */
      address: string;
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description Country code, e.g., 'US'
       */
      country: string;
      /**
       * Custom1
       * @description Optional custom field 1
       * @default null
       */
      custom1: string | null;
      /**
       * Custom2
       * @description Optional custom field 2
       * @default null
       */
      custom2: string | null;
      /**
       * Custom3
       * @description Optional custom field 3
       * @default null
       */
      custom3: string | null;
      /**
       * Custom4
       * @description Optional custom field 4
       * @default null
       */
      custom4: string | null;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal or ZIP code
       */
      postal_code: string;
      /**
       * Province
       * @description State or province
       */
      province: string;
  }[] | null;
  /**
   * Size
   * @description Postcard size
   * @default 4x6
   * @enum {string|null}
   */
  size: "4x6" | "6x9" | "6x11" | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_STORED_SEND_POSTCARD tool output.
 */
type THANKS_IO_STORED_SEND_POSTCARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stored Send Url
       * @description URL to execute the stored send later
       */
      stored_send_url: string;
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
 * Type of THANKS_IO's THANKS_IO_STORED_SEND_WINDOWLESS_LETTER tool input.
 */
type THANKS_IO_STORED_SEND_WINDOWLESS_LETTER_INPUT = {
  /**
   * Front Image Url
   * Format: uri
   * @description URL to the cover image for the windowless letter
   */
  front_image_url?: unknown;
  /**
   * Handwriting Style
   * @description ID of the handwriting style to use
   */
  handwriting_style?: number;
  /**
   * Message
   * @description Handwritten message content
   */
  message?: string;
  /**
   * Recipients
   * @description List of recipients to schedule the stored send for
   */
  recipients?: {
      /**
       * Address
       * @description Street address for delivery
       */
      address: string;
      /**
       * City
       * @description City for delivery
       */
      city: string;
      /**
       * Country
       * @description Country code (ISO 3166-1 alpha-2)
       */
      country: unknown;
      /**
       * Name
       * @description Recipient's full name
       */
      name: string;
      /**
       * Postal Code
       * @description Postal or ZIP code for delivery
       */
      postal_code: string;
      /**
       * Province
       * @description State or province for delivery
       */
      province: string;
  }[];
};

/**
 * Type of THANKS_IO's THANKS_IO_STORED_SEND_WINDOWLESS_LETTER tool output.
 */
type THANKS_IO_STORED_SEND_WINDOWLESS_LETTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stored Send Url
       * Format: uri
       * @description URL to execute this stored send at a later time
       */
      stored_send_url: unknown;
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
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_CREATE tool input.
 */
type THANKS_IO_SUB_ACCOUNTS_CREATE_INPUT = {
  /**
   * Return Address
   * @description Primary return street address
   */
  return_address?: string;
  /**
   * Return Address2
   * @description Secondary return street address (optional)
   * @default null
   */
  return_address2: string | null;
  /**
   * Return City
   * @description City for the return address
   */
  return_city?: string;
  /**
   * Return Name
   * @description Name for the return address
   */
  return_name?: string;
  /**
   * Return Postal Code
   * @description Postal code for the return address
   */
  return_postal_code?: string;
  /**
   * Return State
   * @description State for the return address (2-letter code)
   */
  return_state?: string;
  /**
   * Title
   * @description Name of the sub-account
   */
  title?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_CREATE tool output.
 */
type THANKS_IO_SUB_ACCOUNTS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the sub-account
       */
      id: number | null;
      /**
       * Return Address
       * @description Primary return street address
       */
      return_address: string;
      /**
       * Return Address2
       * @description Secondary return street address
       * @default null
       */
      return_address2: string | null;
      /**
       * Return City
       * @description City for the return address
       */
      return_city: string;
      /**
       * Return Name
       * @description Name for the return address
       */
      return_name: string;
      /**
       * Return Postal Code
       * @description Postal code for the return address
       */
      return_postal_code: string;
      /**
       * Return State
       * @description State for the return address
       */
      return_state: string;
      /**
       * Title
       * @description Name of the sub-account
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 last update timestamp
       * @default null
       */
      updated_at: string | null;
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
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_LIST tool input.
 */
type THANKS_IO_SUB_ACCOUNTS_LIST_INPUT = object;

/**
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_LIST tool output.
 */
type THANKS_IO_SUB_ACCOUNTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sub Accounts
       * @description All sub-accounts associated with the account
       */
      sub_accounts: {
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the sub-account was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the sub-account
           */
          id: string;
          /**
           * Name
           * @description Name of the sub-account
           */
          name: string;
          /**
           * Return Address
           * @description Return address line 1
           * @default null
           */
          returnAddress: string | null;
          /**
           * Return Address2
           * @description Return address line 2
           * @default null
           */
          returnAddress2: string | null;
          /**
           * Return City
           * @description Return city
           * @default null
           */
          returnCity: string | null;
          /**
           * Return Name
           * @description Return recipient name
           * @default null
           */
          returnName: string | null;
          /**
           * Return Postal Code
           * @description Return postal code
           * @default null
           */
          returnPostalCode: string | null;
          /**
           * Return Province
           * @description Return province/state
           * @default null
           */
          returnProvince: string | null;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the sub-account was last updated
           */
          updatedAt: string;
          /**
           * User Id
           * @description Owner user ID for this sub-account
           */
          userId: number;
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
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_SHOW tool input.
 */
type THANKS_IO_SUB_ACCOUNTS_SHOW_INPUT = {
  /**
   * Sub Account Id
   * @description Unique identifier of the sub-account to retrieve
   */
  sub_account_id?: string;
};

/**
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_SHOW tool output.
 */
type THANKS_IO_SUB_ACCOUNTS_SHOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the sub-account was created
       */
      created_at: string;
      /**
       * Default Envelope
       * @description Default envelope for this sub-account
       * @default null
       */
      default_envelope: string | null;
      /**
       * Id
       * @description Unique identifier for the sub-account
       */
      id: string | null;
      /**
       * Return Address
       * @description Default return address line 1
       * @default null
       */
      return_address: string | null;
      /**
       * Return Address2
       * @description Default return address line 2
       * @default null
       */
      return_address2: string | null;
      /**
       * Return City
       * @description Default return city
       * @default null
       */
      return_city: string | null;
      /**
       * Return Name
       * @description Default return recipient name
       * @default null
       */
      return_name: string | null;
      /**
       * Return Postal Code
       * @description Default return postal code
       * @default null
       */
      return_postal_code: string | null;
      /**
       * Return State
       * @description Default return province/state
       * @default null
       */
      return_state: string | null;
      /**
       * Title
       * @description Name of the sub-account
       */
      title: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the sub-account was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description Owner user ID for this sub-account
       */
      user_id: number;
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
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_UPDATE tool input.
 */
type THANKS_IO_SUB_ACCOUNTS_UPDATE_INPUT = {
  /**
   * Return Address
   * @description New primary return street address.
   * @default null
   */
  return_address: string | null;
  /**
   * Return Address2
   * @description New secondary return address (optional).
   * @default null
   */
  return_address2: string | null;
  /**
   * Return City
   * @description New city for the return address.
   * @default null
   */
  return_city: string | null;
  /**
   * Return Name
   * @description New return recipient name.
   * @default null
   */
  return_name: string | null;
  /**
   * Return Postal Code
   * @description New postal code for the return address.
   * @default null
   */
  return_postal_code: string | null;
  /**
   * Return State
   * @description New state/province for the return address (2-letter code).
   * @default null
   */
  return_state: string | null;
  /**
   * Sub Account Id
   * @description Unique identifier of the sub-account to update.
   */
  sub_account_id?: string;
  /**
   * Title
   * @description New name for the sub-account.
   * @default null
   */
  title: string | null;
};

/**
 * Type of THANKS_IO's THANKS_IO_SUB_ACCOUNTS_UPDATE tool output.
 */
type THANKS_IO_SUB_ACCOUNTS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the sub-account
       */
      id: number | null;
      /**
       * Return Address
       * @description Primary return street address
       * @default null
       */
      return_address: string | null;
      /**
       * Return Address2
       * @description Secondary return street address
       * @default null
       */
      return_address2: string | null;
      /**
       * Return City
       * @description Return city
       * @default null
       */
      return_city: string | null;
      /**
       * Return Name
       * @description Return recipient name
       * @default null
       */
      return_name: string | null;
      /**
       * Return Postal Code
       * @description Return postal code
       * @default null
       */
      return_postal_code: string | null;
      /**
       * Return State
       * @description Return state/province
       * @default null
       */
      return_state: string | null;
      /**
       * Title
       * @description Name of the sub-account
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 last update timestamp
       * @default null
       */
      updated_at: string | null;
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
 * Type map of all available tool input types for toolkit "THANKS_IO".
 */
export type THANKS_IO_TOOL_INPUTS = {
  ADD_RECIPIENT_TO_MAILING_LIST: THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST_INPUT
  CREATE_MAILING_LIST: THANKS_IO_CREATE_MAILING_LIST_INPUT
  DELETE_MAILING_LIST: THANKS_IO_DELETE_MAILING_LIST_INPUT
  DELETE_RECIPIENT_FROM_MAILING_LIST: THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST_INPUT
  DELETE_SUB_ACCOUNT: THANKS_IO_DELETE_SUB_ACCOUNT_INPUT
  EXECUTE_STORED_SEND: THANKS_IO_EXECUTE_STORED_SEND_INPUT
  LIST_HANDWRITING_STYLES: THANKS_IO_LIST_HANDWRITING_STYLES_INPUT
  LIST_IMAGE_TEMPLATES: THANKS_IO_LIST_IMAGE_TEMPLATES_INPUT
  LIST_MAILING_LISTS: THANKS_IO_LIST_MAILING_LISTS_INPUT
  LIST_MESSAGE_TEMPLATES: THANKS_IO_LIST_MESSAGE_TEMPLATES_INPUT
  MAILING_LISTS_BUY_RADIUS_SEARCH: THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH_INPUT
  ORDERS_LIST: THANKS_IO_ORDERS_LIST_INPUT
  ORDERS_SEARCH_BY_ADDRESS: THANKS_IO_ORDERS_SEARCH_BY_ADDRESS_INPUT
  ORDERS_SEARCH_BY_NAME: THANKS_IO_ORDERS_SEARCH_BY_NAME_INPUT
  ORDERS_STATS: THANKS_IO_ORDERS_STATS_INPUT
  ORDER_PREVIEW_LETTER: THANKS_IO_ORDER_PREVIEW_LETTER_INPUT
  ORDER_PREVIEW_NOTECARD: THANKS_IO_ORDER_PREVIEW_NOTECARD_INPUT
  ORDER_PREVIEW_POSTCARD: THANKS_IO_ORDER_PREVIEW_POSTCARD_INPUT
  ORDER_PREVIEW_WINDOWLESS_LETTER: THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER_INPUT
  PROOF_POSTCARD: THANKS_IO_PROOF_POSTCARD_INPUT
  RECIPIENTS_CREATE_MULTI: THANKS_IO_RECIPIENTS_CREATE_MULTI_INPUT
  RECIPIENTS_DELETE_BY_ADDRESS: THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS_INPUT
  RECIPIENTS_GET_DETAILS: THANKS_IO_RECIPIENTS_GET_DETAILS_INPUT
  RECIPIENTS_SEARCH_BY_EMAIL: THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL_INPUT
  RECIPIENTS_UPDATE: THANKS_IO_RECIPIENTS_UPDATE_INPUT
  SEND_POSTCARD: THANKS_IO_SEND_POSTCARD_INPUT
  STORED_SEND_NOTECARD: THANKS_IO_STORED_SEND_NOTECARD_INPUT
  STORED_SEND_POSTCARD: THANKS_IO_STORED_SEND_POSTCARD_INPUT
  STORED_SEND_WINDOWLESS_LETTER: THANKS_IO_STORED_SEND_WINDOWLESS_LETTER_INPUT
  SUB_ACCOUNTS_CREATE: THANKS_IO_SUB_ACCOUNTS_CREATE_INPUT
  SUB_ACCOUNTS_LIST: THANKS_IO_SUB_ACCOUNTS_LIST_INPUT
  SUB_ACCOUNTS_SHOW: THANKS_IO_SUB_ACCOUNTS_SHOW_INPUT
  SUB_ACCOUNTS_UPDATE: THANKS_IO_SUB_ACCOUNTS_UPDATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "THANKS_IO".
 */
export type THANKS_IO_TOOL_OUTPUTS = {
  ADD_RECIPIENT_TO_MAILING_LIST: THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST_OUTPUT
  CREATE_MAILING_LIST: THANKS_IO_CREATE_MAILING_LIST_OUTPUT
  DELETE_MAILING_LIST: THANKS_IO_DELETE_MAILING_LIST_OUTPUT
  DELETE_RECIPIENT_FROM_MAILING_LIST: THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST_OUTPUT
  DELETE_SUB_ACCOUNT: THANKS_IO_DELETE_SUB_ACCOUNT_OUTPUT
  EXECUTE_STORED_SEND: THANKS_IO_EXECUTE_STORED_SEND_OUTPUT
  LIST_HANDWRITING_STYLES: THANKS_IO_LIST_HANDWRITING_STYLES_OUTPUT
  LIST_IMAGE_TEMPLATES: THANKS_IO_LIST_IMAGE_TEMPLATES_OUTPUT
  LIST_MAILING_LISTS: THANKS_IO_LIST_MAILING_LISTS_OUTPUT
  LIST_MESSAGE_TEMPLATES: THANKS_IO_LIST_MESSAGE_TEMPLATES_OUTPUT
  MAILING_LISTS_BUY_RADIUS_SEARCH: THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH_OUTPUT
  ORDERS_LIST: THANKS_IO_ORDERS_LIST_OUTPUT
  ORDERS_SEARCH_BY_ADDRESS: THANKS_IO_ORDERS_SEARCH_BY_ADDRESS_OUTPUT
  ORDERS_SEARCH_BY_NAME: THANKS_IO_ORDERS_SEARCH_BY_NAME_OUTPUT
  ORDERS_STATS: THANKS_IO_ORDERS_STATS_OUTPUT
  ORDER_PREVIEW_LETTER: THANKS_IO_ORDER_PREVIEW_LETTER_OUTPUT
  ORDER_PREVIEW_NOTECARD: THANKS_IO_ORDER_PREVIEW_NOTECARD_OUTPUT
  ORDER_PREVIEW_POSTCARD: THANKS_IO_ORDER_PREVIEW_POSTCARD_OUTPUT
  ORDER_PREVIEW_WINDOWLESS_LETTER: THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER_OUTPUT
  PROOF_POSTCARD: THANKS_IO_PROOF_POSTCARD_OUTPUT
  RECIPIENTS_CREATE_MULTI: THANKS_IO_RECIPIENTS_CREATE_MULTI_OUTPUT
  RECIPIENTS_DELETE_BY_ADDRESS: THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS_OUTPUT
  RECIPIENTS_GET_DETAILS: THANKS_IO_RECIPIENTS_GET_DETAILS_OUTPUT
  RECIPIENTS_SEARCH_BY_EMAIL: THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL_OUTPUT
  RECIPIENTS_UPDATE: THANKS_IO_RECIPIENTS_UPDATE_OUTPUT
  SEND_POSTCARD: THANKS_IO_SEND_POSTCARD_OUTPUT
  STORED_SEND_NOTECARD: THANKS_IO_STORED_SEND_NOTECARD_OUTPUT
  STORED_SEND_POSTCARD: THANKS_IO_STORED_SEND_POSTCARD_OUTPUT
  STORED_SEND_WINDOWLESS_LETTER: THANKS_IO_STORED_SEND_WINDOWLESS_LETTER_OUTPUT
  SUB_ACCOUNTS_CREATE: THANKS_IO_SUB_ACCOUNTS_CREATE_OUTPUT
  SUB_ACCOUNTS_LIST: THANKS_IO_SUB_ACCOUNTS_LIST_OUTPUT
  SUB_ACCOUNTS_SHOW: THANKS_IO_SUB_ACCOUNTS_SHOW_OUTPUT
  SUB_ACCOUNTS_UPDATE: THANKS_IO_SUB_ACCOUNTS_UPDATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's THANKS_IO toolkit.
 */
export const THANKS_IO = {
  slug: "thanks_io",
  tools: {
    /**
     * Tool to add a new recipient to a mailing list. use after confirming recipient and list ids.
     */
    ADD_RECIPIENT_TO_MAILING_LIST: "THANKS_IO_ADD_RECIPIENT_TO_MAILING_LIST",
    /**
     * Tool to create a new mailing list. use when you need to group contacts under a fresh list before adding recipients.
     */
    CREATE_MAILING_LIST: "THANKS_IO_CREATE_MAILING_LIST",
    /**
     * Tool to delete a mailing list. use when you need to remove an entire mailing list by its id. confirm the list id before calling. example: "delete the mailing list with id 123e4567-e89b-12d3-a456-426614174000".
     */
    DELETE_MAILING_LIST: "THANKS_IO_DELETE_MAILING_LIST",
    /**
     * Tool to remove a recipient from a mailing list. use after confirming the recipient's id.
     */
    DELETE_RECIPIENT_FROM_MAILING_LIST: "THANKS_IO_DELETE_RECIPIENT_FROM_MAILING_LIST",
    /**
     * Tool to delete a specific sub-account by id. use when you need to remove an existing sub-account. confirm the id before calling.
     */
    DELETE_SUB_ACCOUNT: "THANKS_IO_DELETE_SUB_ACCOUNT",
    /**
     * Tool to execute a previously created stored send. use after creating a stored send to trigger delivery. the response body is empty; success is indicated by a 200 or 204 status.
     */
    EXECUTE_STORED_SEND: "THANKS_IO_EXECUTE_STORED_SEND",
    /**
     * Tool to retrieve available handwriting styles. use when selecting a style for handwritten personalization.
     */
    LIST_HANDWRITING_STYLES: "THANKS_IO_LIST_HANDWRITING_STYLES",
    /**
     * Tool to retrieve a list of available image templates. use when you need to browse or select a template for mailings.
     */
    LIST_IMAGE_TEMPLATES: "THANKS_IO_LIST_IMAGE_TEMPLATES",
    /**
     * Tool to list all mailing lists. use when you need to fetch existing lists before managing recipients.
     */
    LIST_MAILING_LISTS: "THANKS_IO_LIST_MAILING_LISTS",
    /**
     * Tool to list available message templates. use when selecting a template for a mailing.
     */
    LIST_MESSAGE_TEMPLATES: "THANKS_IO_LIST_MESSAGE_TEMPLATES",
    /**
     * Tool to buy or append a radius search mailing list based on address and radius. use when you need targeted mailing lists around a specified address.
     */
    MAILING_LISTS_BUY_RADIUS_SEARCH: "THANKS_IO_MAILING_LISTS_BUY_RADIUS_SEARCH",
    /**
     * Tool to list recent orders. use after placing orders to fetch the latest history, optionally filtering by sub-account or limiting the result count.
     */
    ORDERS_LIST: "THANKS_IO_ORDERS_LIST",
    /**
     * Tool to search orders by recipient street address. use when you need to find all orders sent to a specific street address.
     */
    ORDERS_SEARCH_BY_ADDRESS: "THANKS_IO_ORDERS_SEARCH_BY_ADDRESS",
    /**
     * Tool to search orders by recipient full name. use when you need to find all orders sent to a specific recipient.
     */
    ORDERS_SEARCH_BY_NAME: "THANKS_IO_ORDERS_SEARCH_BY_NAME",
    /**
     * Tool to retrieve order summary statistics for a date range. use when analyzing order volume and value filtered by type, status, or date range.
     */
    ORDERS_STATS: "THANKS_IO_ORDERS_STATS",
    /**
     * Tool to preview a letter send as pdf. use when you need to confirm letter content before placing the final order. returns pdf preview urls.
     */
    ORDER_PREVIEW_LETTER: "THANKS_IO_ORDER_PREVIEW_LETTER",
    /**
     * Tool to preview a notecard send. use when you need front and back images before placing an actual notecard order.
     */
    ORDER_PREVIEW_NOTECARD: "THANKS_IO_ORDER_PREVIEW_NOTECARD",
    /**
     * Tool to preview a postcard send. use when you need front and back images before placing an order.
     */
    ORDER_PREVIEW_POSTCARD: "THANKS_IO_ORDER_PREVIEW_POSTCARD",
    /**
     * Tool to preview a windowless letter send. use when you need a pdf preview of the cover-only letter before placing an order.
     */
    ORDER_PREVIEW_WINDOWLESS_LETTER: "THANKS_IO_ORDER_PREVIEW_WINDOWLESS_LETTER",
    /**
     * Tool to generate a pdf proof of a postcard's front and back. use when you need a preview pdf before sending the final postcard.
     */
    PROOF_POSTCARD: "THANKS_IO_PROOF_POSTCARD",
    /**
     * Tool to create multiple recipients at once in a mailing list. use when batching recipient additions for efficiency.
     */
    RECIPIENTS_CREATE_MULTI: "THANKS_IO_RECIPIENTS_CREATE_MULTI",
    /**
     * Tool to delete a recipient by address and postal code. use when you need to remove a recipient without their id.
     */
    RECIPIENTS_DELETE_BY_ADDRESS: "THANKS_IO_RECIPIENTS_DELETE_BY_ADDRESS",
    /**
     * Tool to get details for a specific recipient by id. use to verify a recipient’s full address and custom fields.
     */
    RECIPIENTS_GET_DETAILS: "THANKS_IO_RECIPIENTS_GET_DETAILS",
    /**
     * Tool to search recipients by email across mailing lists. use when you need to find all recipients matching an email in specific lists. example: "find recipients with email test@test.com in lists [1,2,3]."
     */
    RECIPIENTS_SEARCH_BY_EMAIL: "THANKS_IO_RECIPIENTS_SEARCH_BY_EMAIL",
    /**
     * Tool to update existing recipient details by recipient id. use when modifying recipient data after confirming the recipient exists.
     */
    RECIPIENTS_UPDATE: "THANKS_IO_RECIPIENTS_UPDATE",
    /**
     * Tool to send a customized postcard. use when you need to dispatch a physical postcard with a chosen image and handwritten message.
     */
    SEND_POSTCARD: "THANKS_IO_SEND_POSTCARD",
    /**
     * Tool to create a stored send for a notecard. use when you need to schedule mailing of a personalized notecard at a later time after preparing payload.
     */
    STORED_SEND_NOTECARD: "THANKS_IO_STORED_SEND_NOTECARD",
    /**
     * Tool to create a stored send for a postcard. use when you need to prepare and schedule postcard orders for later execution; returns a url to finalize and send.
     */
    STORED_SEND_POSTCARD: "THANKS_IO_STORED_SEND_POSTCARD",
    /**
     * Tool to create a stored send for a windowless letter. use when you need to prepare a letter order for later execution.
     */
    STORED_SEND_WINDOWLESS_LETTER: "THANKS_IO_STORED_SEND_WINDOWLESS_LETTER",
    /**
     * Tool to create a new sub-account. use when you need to manage separate profiles with distinct return addresses and settings.
     */
    SUB_ACCOUNTS_CREATE: "THANKS_IO_SUB_ACCOUNTS_CREATE",
    /**
     * Tool to list all available sub-accounts. use when you need to select a sub-account for operations requiring a sub-account context.
     */
    SUB_ACCOUNTS_LIST: "THANKS_IO_SUB_ACCOUNTS_LIST",
    /**
     * Tool to retrieve details for a specific sub-account by id. use when you need full configuration of a sub-account before performing sub-account scoped operations.
     */
    SUB_ACCOUNTS_SHOW: "THANKS_IO_SUB_ACCOUNTS_SHOW",
    /**
     * Tool to update details for a specific sub-account. use when modifying title or return address details of a sub-account. confirm sub-account id before calling.
     */
    SUB_ACCOUNTS_UPDATE: "THANKS_IO_SUB_ACCOUNTS_UPDATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "THANKS_IO".
 */
export type THANKS_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "THANKS_IO".
 */
export type THANKS_IO_TRIGGER_EVENTS = {}
