// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DETRACK's DETRACK_ADD_COLLECTION tool input.
 */
type DETRACK_ADD_COLLECTION_INPUT = {
  /**
   * Driver Name
   * @description Assigned driver's name
   * @default null
   */
  driver_name: string | null;
  /**
   * From Address
   * @description Full address of the collection location
   */
  from_address?: string;
  /**
   * From Email
   * Format: email
   * @default null
   */
  from_email: unknown;
  /**
   * From Name
   * @description Name of the collection location contact
   */
  from_name?: string;
  /**
   * From Postal Code
   * @description Postal code of the collection address
   * @default null
   */
  from_postal_code: string | null;
  /**
   * From Tel
   * @description Phone number of the collection contact
   * @default null
   */
  from_tel: string | null;
  /**
   * Items
   * @description List of items to collect
   * @default null
   */
  items: {
      /**
       * Description
       * @description Description of the item
       * @default null
       */
      description: string | null;
      /**
       * Quantity
       * @description Quantity of the item, must be at least 1
       * @default null
       */
      quantity: number | null;
      /**
       * Remarks
       * @description Remarks for the item
       * @default null
       */
      remarks: string | null;
      /**
       * Serial Number
       * @description Serial number of the item
       * @default null
       */
      serial_number: string | null;
      /**
       * Sku
       * @description SKU of the item
       * @default null
       */
      sku: string | null;
  }[] | null;
  /**
   * Job Date
   * Format: date
   * @description Date of the collection job in YYYY-MM-DD format
   */
  job_date?: unknown;
  /**
   * Remarks
   * @description Additional remarks for the collection job
   * @default null
   */
  remarks: string | null;
  /**
   * Scheduled Collection Time
   * @default null
   */
  scheduled_collection_time: unknown;
  /**
   * Tracking Number
   * @description Unique tracking number for the collection job
   */
  tracking_number?: string;
  /**
   * Vehicle Type
   * @description Vehicle type for the collection
   * @default null
   */
  vehicle_type: string | null;
};

/**
 * Type of DETRACK's DETRACK_ADD_COLLECTION tool output.
 */
type DETRACK_ADD_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the collection was created
       */
      created_at: string;
      /**
       * Driver Name
       * @description Driver name
       * @default null
       */
      driver_name: string | null;
      /**
       * From Address
       * @description Collection address
       */
      from_address: string;
      /**
       * From Email
       * @description Email of the contact
       * @default null
       */
      from_email: string | null;
      /**
       * From Name
       * @description Name of the collection contact
       */
      from_name: string;
      /**
       * From Postal Code
       * @description Postal code of the collection address
       * @default null
       */
      from_postal_code: string | null;
      /**
       * From Tel
       * @description Phone of the collection contact
       * @default null
       */
      from_tel: string | null;
      /**
       * Id
       * @description Collection job ID
       */
      id: number;
      /**
       * Items
       * @description Items included in the collection
       * @default null
       */
      items: {
          /**
           * Description
           * @description Description of the item
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Item ID
           */
          id: number;
          /**
           * Quantity
           * @description Quantity of the item
           * @default null
           */
          quantity: number | null;
          /**
           * Remarks
           * @description Remarks for the item
           * @default null
           */
          remarks: string | null;
          /**
           * Serial Number
           * @description Serial number of the item
           * @default null
           */
          serial_number: string | null;
          /**
           * Sku
           * @description SKU of the item
           * @default null
           */
          sku: string | null;
      }[] | null;
      /**
       * Job Date
       * Format: date
       * @description Date of the collection job in YYYY-MM-DD format
       */
      job_date: unknown;
      /**
       * Remarks
       * @description Remarks
       * @default null
       */
      remarks: string | null;
      /**
       * Scheduled Collection Time
       * @default null
       */
      scheduled_collection_time: unknown;
      /**
       * Tracking Number
       * @description Unique tracking number
       */
      tracking_number: string;
      /**
       * Updated At
       * @description Timestamp when the collection was last updated
       */
      updated_at: string;
      /**
       * Vehicle Type
       * @description Vehicle type for the collection
       * @default null
       */
      vehicle_type: string | null;
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
 * Type of DETRACK's DETRACK_DELETE_ALL_COLLECTIONS tool input.
 */
type DETRACK_DELETE_ALL_COLLECTIONS_INPUT = {
  /**
   * Date
   * @description The collection date in YYYY-MM-DD format, e.g., '2014-02-28'.
   */
  date?: string;
};

/**
 * Type of DETRACK's DETRACK_DELETE_ALL_COLLECTIONS tool output.
 */
type DETRACK_DELETE_ALL_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Nested info object returned by Delete All Collections API.
       */
      info: {
          /**
           * Deleted
           * @description Number of collections successfully deleted.
           */
          deleted: number;
          /**
           * Failed
           * @description Number of collections that were not deleted due to errors.
           */
          failed: number;
          /**
           * Status
           * @description The status of the request: 'ok' if processed successfully or 'failed' if the API key or JSON body is missing.
           * @enum {string}
           */
          status: "ok" | "failed";
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
 * Type of DETRACK's DETRACK_DELETE_ALL_DELIVERIES tool input.
 */
type DETRACK_DELETE_ALL_DELIVERIES_INPUT = {
  /**
   * Date
   * @description The delivery date to delete all deliveries for. Format: YYYY-MM-DD.
   */
  date?: string;
};

/**
 * Type of DETRACK's DETRACK_DELETE_ALL_DELIVERIES tool output.
 */
type DETRACK_DELETE_ALL_DELIVERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Result information of the delete operation.
       */
      info: {
          /**
           * Deleted
           * @description The number of deliveries successfully deleted.
           */
          deleted: number;
          /**
           * Error
           * @description Error details if the request failed. Present only when status is 'failed'.
           * @default null
           */
          error: string | null;
          /**
           * Failed
           * @description The number of deliveries that failed to delete.
           */
          failed: number;
          /**
           * Status
           * @description The status of the request. 'ok' if processed successfully, 'failed' otherwise.
           * @enum {string}
           */
          status: "ok" | "failed";
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
 * Type of DETRACK's DETRACK_DELETE_DELIVERY tool input.
 */
type DETRACK_DELETE_DELIVERY_INPUT = {
  /**
   * Items
   * @description List of deliveries to delete; must contain between 1 and 100 items
   */
  items?: {
      /**
       * Date
       * @description Delivery date in YYYY-MM-DD format
       */
      date: string;
      /**
       * Do
       * @description Delivery Order (D.O.) number
       */
      do: string;
  }[];
};

/**
 * Type of DETRACK's DETRACK_DELETE_DELIVERY tool output.
 */
type DETRACK_DELETE_DELIVERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Request-level status info
       */
      info: {
          /**
           * Failed
           * @description Count of deliveries that failed to delete
           */
          failed: number;
          /**
           * Status
           * @description 'ok' if request processed successfully, 'failed' otherwise
           */
          status: string;
      };
      /**
       * Results
       * @description Per-delivery deletion results
       */
      results: {
          /**
           * Date
           * @description Delivery date (YYYY-MM-DD)
           */
          date: string;
          /**
           * Do
           * @description Delivery Order (D.O.) number
           */
          do: string;
          /**
           * Errors
           * @description List of errors if deletion failed for this item
           */
          errors?: {
              /**
               * Code
               * @description Error code for a failed deletion
               */
              code: number;
              /**
               * Message
               * @description Error message detail
               */
              message: string;
          }[];
          /**
           * Status
           * @description 'ok' if deleted successfully, 'failed' otherwise
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
 * Type of DETRACK's DETRACK_EDIT_DELIVERY tool input.
 */
type DETRACK_EDIT_DELIVERY_INPUT = {
  /**
   * Items
   * @description List of delivery records to update (1 to 100 items)
   */
  items?: {
      /**
       * Address
       * @description Delivery address; include country name for accurate geocoding
       * @default null
       */
      address: string | null;
      /**
       * Assign To
       * @description Vehicle name to assign the delivery; must match the name in the dashboard
       * @default null
       */
      assign_to: string | null;
      /**
       * Date
       * @description Delivery date in YYYY-MM-DD format
       */
      date: string;
      /**
       * Deliver To
       * @description Recipient's name; person or company
       * @default null
       */
      deliver_to: string | null;
      /**
       * Delivery Time
       * @description Delivery time window displayed in the job list and detail views
       * @default null
       */
      delivery_time: string | null;
      /**
       * Do
       * @description Delivery Order number (D.O.)
       */
      do: string;
      /**
       * Instructions
       * @description Special instructions for the driver
       * @default null
       */
      instructions: string | null;
      /**
       * Notify Email
       * @description Email address for sending customer-facing delivery updates
       * @default null
       */
      notify_email: string | null;
      /**
       * Notify Url
       * @description Webhook URL to post delivery updates
       * @default null
       */
      notify_url: string | null;
      /**
       * Phone
       * @description Recipient's phone number; allows drivers to call directly
       * @default null
       */
      phone: string | null;
      /**
       * Zone
       * @description Zone designation to help filter deliveries
       * @default null
       */
      zone: string | null;
  }[];
};

/**
 * Type of DETRACK's DETRACK_EDIT_DELIVERY tool output.
 */
type DETRACK_EDIT_DELIVERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Request-level status info
       */
      info: {
          /**
           * Failed
           * @description Number of deliveries that failed to update
           */
          failed: number;
          /**
           * Status
           * @description Overall request status: 'ok' or 'failed'
           */
          status: string;
      };
      /**
       * Results
       * @description Per-delivery update results
       */
      results: {
          /**
           * Date
           * @description Delivery date (YYYY-MM-DD)
           */
          date: string;
          /**
           * Do
           * @description Delivery Order number (D.O.)
           */
          do: string;
          /**
           * Errors
           * @description List of errors if update failed for this item
           * @default null
           */
          errors: {
              /**
               * Code
               * @description Error code for a failed delivery update
               */
              code: string;
              /**
               * Message
               * @description Error message detail
               */
              message: string;
          }[] | null;
          /**
           * Status
           * @description 'ok' if update succeeded, 'failed' otherwise
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
 * Type of DETRACK's DETRACK_LIST_JOBS tool input.
 */
type DETRACK_LIST_JOBS_INPUT = {
  /**
   * Country
   * @description Filter jobs by country code (ISO 3166-1 alpha-2).
   * @default null
   */
  country: string | null;
  /**
   * Date
   * @description Filter jobs by scheduled date in YYYY-MM-DD format.
   * @default null
   */
  date: string | null;
  /**
   * Do Number
   * @description Filter jobs by Delivery Order (DO) number.
   * @default null
   */
  do_number: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of jobs to return per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter jobs by job status (e.g., 'pending', 'delivered').
   * @default null
   */
  status: string | null;
  /**
   * Tracking Number
   * @description Filter jobs by tracking number.
   * @default null
   */
  tracking_number: string | null;
  /**
   * Type
   * @description Filter jobs by job type (e.g., 'delivery', 'collection').
   * @default null
   */
  type: string | null;
};

/**
 * Type of DETRACK's DETRACK_LIST_JOBS tool output.
 */
type DETRACK_LIST_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of jobs matching the filters.
       */
      jobs: {
          /**
           * Date
           * @description Date of the job in YYYY-MM-DD format.
           */
          date: string;
          /**
           * Destination Address
           * @description Address of the destination.
           * @default null
           */
          destination_address: string | null;
          /**
           * Destination Name
           * @description Name of the destination.
           * @default null
           */
          destination_name: string | null;
          /**
           * Do
           * @description Delivery Order (DO) number for the job.
           * @default null
           */
          do: string | null;
          /**
           * Driver Name
           * @description Name of the assigned driver.
           * @default null
           */
          driver_name: string | null;
          /**
           * Id
           * @description Unique job identifier.
           */
          id: string;
          /**
           * Job No
           * @description Job number.
           */
          job_no: string;
          /**
           * Job Order Number
           * @description Order number associated with the job, if any.
           * @default null
           */
          job_order_number: string | null;
          /**
           * Status
           * @description Current status of the job.
           */
          status: string;
          /**
           * Tracking Number
           * @description Tracking number for the job.
           * @default null
           */
          tracking_number: string | null;
          /**
           * Type
           * @description Job type (e.g., Delivery or Collection).
           */
          type: string;
          /**
           * Vehicle Name
           * @description Name of the assigned vehicle.
           * @default null
           */
          vehicle_name: string | null;
      }[];
      /**
       * Page
       * @description Current page number in the result set.
       */
      page: number;
      /**
       * Per Page
       * @description Number of jobs returned per page.
       */
      per_page: number;
      /**
       * Total Entries
       * @description Total number of jobs matching the filters.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
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
 * Type of DETRACK's DETRACK_SEARCH tool input.
 */
type DETRACK_SEARCH_INPUT = {
  /**
   * Limit
   * @description Number of jobs to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of jobs to skip (for pagination).
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sorting order: ASC (ascending) or DESC (descending).
   * @default null
   * @enum {string|null}
   */
  order: "ASC" | "DESC" | null;
  /**
   * Page
   * @description Page number for pagination (1-based). Defaults to 1.
   * @default 1
   */
  page: number;
  /**
   * Q
   * @description Query object containing search criteria. Supported keys include job_no, date, status, type, etc.
   */
  q?: {
      [key: string]: unknown;
  };
};

/**
 * Type of DETRACK's DETRACK_SEARCH tool output.
 */
type DETRACK_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of jobs matching the search criteria.
       */
      jobs: {
          /**
           * Date
           * @description Date of the job (YYYY-MM-DD).
           */
          date: string;
          /**
           * Driver Name
           * @description Assigned driver's name.
           * @default null
           */
          driver_name: string | null;
          /**
           * Id
           * @description Unique job identifier.
           */
          id: string;
          /**
           * Job No
           * @description Job number.
           */
          job_no: string;
          /**
           * Job Order Number
           * @description Order number associated with the job.
           * @default null
           */
          job_order_number: string | null;
          /**
           * Status
           * @description Current status of the job.
           */
          status: string;
          /**
           * Tracking Number
           * @description Tracking number for the job.
           * @default null
           */
          tracking_number: string | null;
          /**
           * Type
           * @description Job type, e.g., Delivery or Collection.
           */
          type: string;
          /**
           * Vehicle Name
           * @description Assigned vehicle name.
           * @default null
           */
          vehicle_name: string | null;
      }[];
      /**
       * Total
       * @description Total number of jobs matching the criteria.
       */
      total: number;
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
 * Type of DETRACK's DETRACK_VIEW_ALL_COLLECTIONS tool input.
 */
type DETRACK_VIEW_ALL_COLLECTIONS_INPUT = {
  /**
   * Date
   * Format: date
   * @description The collection date to view all collections for. Format: YYYY-MM-DD.
   */
  date?: unknown;
};

/**
 * Type of DETRACK's DETRACK_VIEW_ALL_COLLECTIONS tool output.
 */
type DETRACK_VIEW_ALL_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of collection jobs
       */
      collections: {
          /**
           * Created At
           * @description Timestamp when the collection was created
           */
          created_at: string;
          /**
           * Driver Name
           * @description Driver name
           * @default null
           */
          driver_name: string | null;
          /**
           * From Address
           * @description Collection address
           */
          from_address: string;
          /**
           * From Email
           * @description Email of the contact
           * @default null
           */
          from_email: string | null;
          /**
           * From Name
           * @description Name of the collection contact
           */
          from_name: string;
          /**
           * From Postal Code
           * @description Postal code of the collection address
           * @default null
           */
          from_postal_code: string | null;
          /**
           * From Tel
           * @description Phone of the collection contact
           * @default null
           */
          from_tel: string | null;
          /**
           * Id
           * @description Collection job ID
           */
          id: number;
          /**
           * Items
           * @description Items included in the collection
           * @default null
           */
          items: {
              /**
               * Description
               * @description Description of the item
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Item ID
               */
              id: number;
              /**
               * Quantity
               * @description Quantity of the item
               * @default null
               */
              quantity: number | null;
              /**
               * Remarks
               * @description Remarks for the item
               * @default null
               */
              remarks: string | null;
              /**
               * Serial Number
               * @description Serial number of the item
               * @default null
               */
              serial_number: string | null;
              /**
               * Sku
               * @description SKU of the item
               * @default null
               */
              sku: string | null;
          }[] | null;
          /**
           * Job Date
           * Format: date
           * @description Date of the collection job in YYYY-MM-DD format
           */
          job_date: unknown;
          /**
           * Remarks
           * @description Remarks
           * @default null
           */
          remarks: string | null;
          /**
           * Scheduled Collection Time
           * @default null
           */
          scheduled_collection_time: unknown;
          /**
           * Tracking Number
           * @description Unique tracking number
           */
          tracking_number: string;
          /**
           * Updated At
           * @description Timestamp when the collection was last updated
           */
          updated_at: string;
          /**
           * Vehicle Type
           * @description Vehicle type for the collection
           * @default null
           */
          vehicle_type: string | null;
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
 * Type of DETRACK's DETRACK_VIEW_ALL_DELIVERIES tool input.
 */
type DETRACK_VIEW_ALL_DELIVERIES_INPUT = {
  /**
   * Date
   * @description The delivery date to view all deliveries for. Format: YYYY-MM-DD.
   */
  date?: string;
};

/**
 * Type of DETRACK's DETRACK_VIEW_ALL_DELIVERIES tool output.
 */
type DETRACK_VIEW_ALL_DELIVERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deliveries
       * @description List of delivery jobs for the specified date.
       */
      deliveries: {
          /**
           * Address
           * @description Delivery address.
           */
          address: string;
          /**
           * Assign To
           * @description Vehicle assigned to the delivery.
           * @default null
           */
          assign_to: string | null;
          /**
           * Date
           * @description Delivery date in YYYY-MM-DD format.
           */
          date: string;
          /**
           * Deliver To
           * @description Name of the recipient.
           */
          deliver_to: string;
          /**
           * Delivery Time
           * @description Delivery time window.
           */
          delivery_time: string;
          /**
           * Do
           * @description Delivery Order number, unique for the date.
           */
          do: string;
          /**
           * Image
           * @description Indicates if POD contains an image (1 if yes, 0 if no).
           */
          image: number;
          /**
           * Instructions
           * @description Delivery instructions for the driver.
           * @default null
           */
          instructions: string | null;
          /**
           * Items
           * @description List of items in the delivery.
           */
          items: {
              /**
               * Desc
               * @description Item description.
               */
              desc: string;
              /**
               * Qty
               * @description Quantity to be delivered.
               */
              qty: number;
              /**
               * Reason
               * @description Reason for item rejection.
               * @default null
               */
              reason: string | null;
              /**
               * Reject
               * @description Quantity rejected by the recipient.
               * @default null
               */
              reject: number | null;
              /**
               * Sku
               * @description Stock Keeping Unit or item number.
               */
              sku: string;
          }[];
          /**
           * Note
           * @description Notes recorded by the driver.
           * @default null
           */
          note: string | null;
          /**
           * Notify Email
           * @description Email address for delivery updates.
           * @default null
           */
          notify_email: string | null;
          /**
           * Notify Url
           * @description URL to post delivery updates.
           * @default null
           */
          notify_url: string | null;
          /**
           * Phone
           * @description Recipient's phone number.
           */
          phone: string;
          /**
           * Pod Address
           * @description Address of the driver's location when submitting POD.
           * @default null
           */
          pod_address: string | null;
          /**
           * Pod Lat
           * @description Latitude of the driver's location when submitting POD.
           * @default null
           */
          pod_lat: number | null;
          /**
           * Pod Lng
           * @description Longitude of the driver's location when submitting POD.
           * @default null
           */
          pod_lng: number | null;
          /**
           * Reason
           * @description Reason for non-delivery, if applicable.
           * @default null
           */
          reason: string | null;
          /**
           * Received By
           * @description Name of the person who signed for the delivery.
           * @default null
           */
          received_by: string | null;
          /**
           * Status
           * @description Status of the delivery (e.g., Delivered, In Progress).
           */
          status: string;
          /**
           * Time
           * @description Time the POD was received, in ISO 8601 format.
           */
          time: string;
          /**
           * View Image Url
           * @description URL to view the POD image, if available.
           * @default null
           */
          view_image_url: string | null;
          /**
           * Zone
           * @description Zone of the delivery.
           * @default null
           */
          zone: string | null;
      }[];
      /**
       * Info
       * @description Result information of the view all deliveries operation.
       */
      info: {
          /**
           * Error
           * @description Error details if the request failed. Present only when status is 'failed'.
           * @default null
           */
          error: string | null;
          /**
           * Status
           * @description The status of the request. 'ok' if processed successfully, 'failed' otherwise.
           * @enum {string}
           */
          status: "ok" | "failed";
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
 * Type of DETRACK's DETRACK_VIEW_ALL_VEHICLES tool input.
 */
type DETRACK_VIEW_ALL_VEHICLES_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of vehicles to return per page.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DETRACK's DETRACK_VIEW_ALL_VEHICLES tool output.
 */
type DETRACK_VIEW_ALL_VEHICLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total Count
       * @description Total number of vehicles.
       */
      total_count: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Vehicles
       * @description List of vehicles.
       */
      vehicles: {
          /**
           * Capacity Volume
           * @description Capacity by volume.
           */
          capacity_volume: number;
          /**
           * Capacity Weight
           * @description Capacity by weight.
           */
          capacity_weight: number;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Vehicle ID.
           */
          id: number;
          /**
           * Notes
           * @description Notes about the vehicle.
           * @default null
           */
          notes: string | null;
          /**
           * Type
           * @description Type of vehicle.
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format.
           */
          updated_at: string;
          /**
           * Vehicle Number
           * @description Vehicle number (license plate).
           */
          vehicle_number: string;
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
 * Type map of all available tool input types for toolkit "DETRACK".
 */
export type DETRACK_TOOL_INPUTS = {
  ADD_COLLECTION: DETRACK_ADD_COLLECTION_INPUT
  DELETE_ALL_COLLECTIONS: DETRACK_DELETE_ALL_COLLECTIONS_INPUT
  DELETE_ALL_DELIVERIES: DETRACK_DELETE_ALL_DELIVERIES_INPUT
  DELETE_DELIVERY: DETRACK_DELETE_DELIVERY_INPUT
  EDIT_DELIVERY: DETRACK_EDIT_DELIVERY_INPUT
  LIST_JOBS: DETRACK_LIST_JOBS_INPUT
  SEARCH: DETRACK_SEARCH_INPUT
  VIEW_ALL_COLLECTIONS: DETRACK_VIEW_ALL_COLLECTIONS_INPUT
  VIEW_ALL_DELIVERIES: DETRACK_VIEW_ALL_DELIVERIES_INPUT
  VIEW_ALL_VEHICLES: DETRACK_VIEW_ALL_VEHICLES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DETRACK".
 */
export type DETRACK_TOOL_OUTPUTS = {
  ADD_COLLECTION: DETRACK_ADD_COLLECTION_OUTPUT
  DELETE_ALL_COLLECTIONS: DETRACK_DELETE_ALL_COLLECTIONS_OUTPUT
  DELETE_ALL_DELIVERIES: DETRACK_DELETE_ALL_DELIVERIES_OUTPUT
  DELETE_DELIVERY: DETRACK_DELETE_DELIVERY_OUTPUT
  EDIT_DELIVERY: DETRACK_EDIT_DELIVERY_OUTPUT
  LIST_JOBS: DETRACK_LIST_JOBS_OUTPUT
  SEARCH: DETRACK_SEARCH_OUTPUT
  VIEW_ALL_COLLECTIONS: DETRACK_VIEW_ALL_COLLECTIONS_OUTPUT
  VIEW_ALL_DELIVERIES: DETRACK_VIEW_ALL_DELIVERIES_OUTPUT
  VIEW_ALL_VEHICLES: DETRACK_VIEW_ALL_VEHICLES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DETRACK toolkit.
 */
export const DETRACK = {
  slug: "detrack",
  tools: {
    /**
     * Tool to add a new collection in detrack. use after gathering all necessary collection details.
     */
    ADD_COLLECTION: "DETRACK_ADD_COLLECTION",
    /**
     * Tool to delete all collections in the account. use when you need to purge every collection for a specific date after confirmation.
     */
    DELETE_ALL_COLLECTIONS: "DETRACK_DELETE_ALL_COLLECTIONS",
    /**
     * Tool to delete all deliveries for a specific date. use when you need to purge deliveries in bulk before scheduling new ones.
     */
    DELETE_ALL_DELIVERIES: "DETRACK_DELETE_ALL_DELIVERIES",
    /**
     * Tool to delete one or more deliveries by date and d.o. number. use after confirming delivery entries to avoid accidental data loss (max 100 items per call).
     */
    DELETE_DELIVERY: "DETRACK_DELETE_DELIVERY",
    /**
     * Tool to edit specific deliveries by date and d.o. number. use after confirming delivery identifiers to update their details (max 100 per call).
     */
    EDIT_DELIVERY: "DETRACK_EDIT_DELIVERY",
    /**
     * Tool to list all jobs with optional filters and pagination. use when you need to retrieve jobs by date, status, country, or other criteria.
     */
    LIST_JOBS: "DETRACK_LIST_JOBS",
    /**
     * Tool to search for deliveries, collections, or vehicles. use after defining search criteria to retrieve matching jobs.
     */
    SEARCH: "DETRACK_SEARCH",
    /**
     * Tool to view all collection jobs in detrack. use when you need to retrieve every collection job currently stored.
     */
    VIEW_ALL_COLLECTIONS: "DETRACK_VIEW_ALL_COLLECTIONS",
    /**
     * Tool to view all deliveries for a specific date. use when you need to retrieve all delivery jobs on a given date.
     */
    VIEW_ALL_DELIVERIES: "DETRACK_VIEW_ALL_DELIVERIES",
    /**
     * Tool to view all vehicles in the account. use when you need a complete list of your fleet with optional pagination.
     */
    VIEW_ALL_VEHICLES: "DETRACK_VIEW_ALL_VEHICLES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DETRACK".
 */
export type DETRACK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DETRACK".
 */
export type DETRACK_TRIGGER_EVENTS = {}
