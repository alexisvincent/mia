// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of JOBNIMBUS's JOBNIMBUS_ACCOUNT_CREATE_LOCATION tool input.
 */
type JOBNIMBUS_ACCOUNT_CREATE_LOCATION_INPUT = {
  /**
   * Address Line1
   * @description First line of the location's address
   * @default null
   */
  address_line1: string | null;
  /**
   * Address Line2
   * @description Second line of the location's address
   * @default null
   */
  address_line2: string | null;
  /**
   * City
   * @description City of the location
   * @default null
   */
  city: string | null;
  /**
   * Code
   * @description Short code or abbreviation for the location
   * @default null
   */
  code: string | null;
  /**
   * Country Name
   * @description Country of the location
   * @default null
   */
  country_name: string | null;
  /**
   * Is Active
   * @description Whether the location is active
   * @default true
   */
  is_active: boolean | null;
  /**
   * Name
   * @description Name of the location
   */
  name?: string;
  /**
   * Phone
   * @description Phone number for the location
   * @default null
   */
  phone: string | null;
  /**
   * State Text
   * @description State or province of the location
   * @default null
   */
  state_text: string | null;
  /**
   * Zip
   * @description Postal code for the location
   * @default null
   */
  zip: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_ACCOUNT_CREATE_LOCATION tool output.
 */
type JOBNIMBUS_ACCOUNT_CREATE_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Line1
       * @description First line of the location's address
       * @default null
       */
      address_line1: string | null;
      /**
       * Address Line2
       * @description Second line of the location's address
       * @default null
       */
      address_line2: string | null;
      /**
       * Calendar
       * @description Calendar settings for the location
       * @default null
       */
      calendar: {
          /**
           * CalendarBusinessHours
           * @description Business hours window for the location
           * @default null
           */
          business_hours: {
              /**
               * End
               * @description Business hours end as a Unix timestamp
               * @default null
               */
              end: number | null;
              /**
               * Start
               * @description Business hours start as a Unix timestamp
               * @default null
               */
              start: number | null;
          } | null;
          /**
           * Start Day
           * @description Week start day index (0=Sunday)
           * @default null
           */
          start_day: number | null;
          /**
           * Weekends
           * @description Whether the location observes weekends
           * @default null
           */
          weekends: boolean | null;
      } | null;
      /**
       * City
       * @description City of the location
       * @default null
       */
      city: string | null;
      /**
       * Code
       * @description Short code or abbreviation for the location
       * @default null
       */
      code: string | null;
      /**
       * Country Name
       * @description Country of the location
       * @default null
       */
      country_name: string | null;
      /**
       * Header Color
       * @description Hex color code for the location header
       * @default null
       */
      header_color: string | null;
      /**
       * Id
       * @description Unique identifier of the created location
       */
      id: number;
      /**
       * Is Active
       * @description Whether the location is active
       */
      is_active: boolean;
      /**
       * Logo Id
       * @description Identifier of the location's logo image
       * @default null
       */
      logo_id: string | null;
      /**
       * Name
       * @description Name of the location
       */
      name: string;
      /**
       * Phone
       * @description Phone number for the location
       * @default null
       */
      phone: string | null;
      /**
       * State Text
       * @description State or province of the location
       * @default null
       */
      state_text: string | null;
      /**
       * Zip
       * @description Postal code for the location
       * @default null
       */
      zip: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_ACTIVITY_GET tool input.
 */
type JOBNIMBUS_ACTIVITY_GET_INPUT = {
  /**
   * Jnid
   * @description The JobNimbus ID (jnid) of the activity to retrieve.
   */
  jnid?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_ACTIVITY_GET tool output.
 */
type JOBNIMBUS_ACTIVITY_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created By
       * @description ID of the user who created the activity.
       * @default null
       */
      created_by: string | null;
      /**
       * Created By Name
       * @description Name of the user who created the activity.
       * @default null
       */
      created_by_name: string | null;
      /**
       * Customer
       * @description Customer associated with the activity.
       * @default null
       */
      customer: string | null;
      /**
       * Date Created
       * @description Timestamp when the activity was created (ms since epoch).
       * @default null
       */
      date_created: number | null;
      /**
       * Date Updated
       * @description Timestamp when the activity was updated (ms since epoch).
       * @default null
       */
      date_updated: number | null;
      /**
       * Is Active
       * @description Whether the activity is active.
       * @default null
       */
      is_active: boolean | null;
      /**
       * Is Archived
       * @description Whether the activity is archived.
       * @default null
       */
      is_archived: boolean | null;
      /**
       * Is Editable
       * @description Whether the activity is editable.
       * @default null
       */
      is_editable: boolean | null;
      /**
       * Is Status Change
       * @description Indicates if the activity involves a status change.
       * @default null
       */
      is_status_change: boolean | null;
      /**
       * Jnid
       * @description JobNimbus ID of the activity.
       * @default null
       */
      jnid: string | null;
      /**
       * Location
       * @description Location details for an activity.
       * @default null
       */
      location: {
          /**
           * Id
           * @description Identifier of the location.
           */
          id: number;
      } | null;
      /**
       * Note
       * @description Note associated with the activity.
       * @default null
       */
      note: string | null;
      /**
       * Owners
       * @description List of owners of the activity.
       * @default null
       */
      owners: {
          /**
           * Id
           * @description User ID of the activity owner.
           */
          id: string;
      }[] | null;
      /**
       * PrimaryRecord
       * @description Primary entity related to the activity.
       * @default null
       */
      primary: {
          /**
           * Id
           * @description ID of the primary record.
           */
          id: string;
          /**
           * Name
           * @description Name of the primary record.
           */
          name: string;
          /**
           * Number
           * @description Number of the primary record.
           * @default null
           */
          number: string | null;
          /**
           * Type
           * @description Type of the primary record.
           */
          type: string;
      } | null;
      /**
       * Record Type Name
       * @description Name of the record type.
       * @default null
       */
      record_type_name: string | null;
      /**
       * Related
       * @description List of related records for the activity.
       * @default null
       */
      related: {
          /**
           * Id
           * @description ID of the related record.
           */
          id: string;
          /**
           * Name
           * @description Name of the related record.
           */
          name: string;
          /**
           * Number
           * @description Number of the related record.
           * @default null
           */
          number: string | null;
          /**
           * Type
           * @description Type of the related record.
           */
          type: string;
      }[] | null;
      /**
       * Type
       * @description Type of the activity.
       * @default null
       */
      type: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_CONTACT_GET tool input.
 */
type JOBNIMBUS_CONTACT_GET_INPUT = {
  /**
   * Jnid
   * @description The JobNimbus ID (jnid) of the contact to retrieve.
   */
  jnid?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_CONTACT_GET tool output.
 */
type JOBNIMBUS_CONTACT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Line1
       * @description Primary address line for the contact.
       * @default null
       */
      address_line1: string | null;
      /**
       * Address Line2
       * @description Secondary address line for the contact.
       * @default null
       */
      address_line2: string | null;
      /**
       * City
       * @description City of the contact's address.
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Company name of the contact.
       * @default null
       */
      company: string | null;
      /**
       * Country Name
       * @description Country of the contact's address.
       * @default null
       */
      country_name: string | null;
      /**
       * Created By
       * @description ID of the contact who created this record.
       * @default null
       */
      created_by: string | null;
      /**
       * Created By Name
       * @description Name of the creator of this record.
       * @default null
       */
      created_by_name: string | null;
      /**
       * Customer
       * @description ID of the associated customer.
       * @default null
       */
      customer: string | null;
      /**
       * Date Created
       * @description Unix timestamp when this record was created.
       * @default null
       */
      date_created: number | null;
      /**
       * Date Updated
       * @description Unix timestamp when this record was last updated.
       * @default null
       */
      date_updated: number | null;
      /**
       * Description
       * @description Description or notes for this contact.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description Display name for the contact.
       * @default null
       */
      display_name: string | null;
      /**
       * Email
       * @description Email address of the contact.
       * @default null
       */
      email: string | null;
      /**
       * Fax Number
       * @description Fax number of the contact.
       * @default null
       */
      fax_number: string | null;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Geo
       * @description Geolocation coordinates for the contact.
       * @default null
       */
      geo: {
          /**
           * Lat
           * @description Latitude coordinate for geolocation.
           */
          lat: number;
          /**
           * Lon
           * @description Longitude coordinate for geolocation.
           */
          lon: number;
      } | null;
      /**
       * Home Phone
       * @description Home phone number of the contact.
       * @default null
       */
      home_phone: string | null;
      /**
       * Jnid
       * @description The JobNimbus ID (jnid) of the contact.
       */
      jnid: string;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Location
       * @description Location details for this contact.
       * @default null
       */
      location: {
          /**
           * Id
           * @description ID of the location associated with the contact.
           */
          id: number;
          /**
           * Name
           * @description Name of the location.
           * @default null
           */
          name: string | null;
          /**
           * Parent Id
           * @description Parent location ID, if any.
           * @default null
           */
          parent_id: number | null;
      } | null;
      /**
       * Mobile Phone
       * @description Mobile phone number of the contact.
       * @default null
       */
      mobile_phone: string | null;
      /**
       * Owners
       * @description List of owners IDs for this contact.
       * @default null
       */
      owners: {
          /**
           * Id
           * @description ID of the owner of the contact.
           */
          id: string;
      }[] | null;
      /**
       * Recid
       * @description Auto-incrementing internal record ID.
       * @default null
       */
      recid: number | null;
      /**
       * Record Type
       * @description Numeric workflow type ID for this record.
       * @default null
       */
      record_type: number | null;
      /**
       * Record Type Name
       * @description Workflow type name for this record.
       * @default null
       */
      record_type_name: string | null;
      /**
       * Sales Rep
       * @description ID of the sales rep for this contact.
       * @default null
       */
      sales_rep: string | null;
      /**
       * Sales Rep Name
       * @description Name of the sales rep for this contact.
       * @default null
       */
      sales_rep_name: string | null;
      /**
       * Source
       * @description Numeric lead source ID for this record.
       * @default null
       */
      source: number | null;
      /**
       * Source Name
       * @description Lead source name for this record.
       * @default null
       */
      source_name: string | null;
      /**
       * State Text
       * @description State of the contact's address.
       * @default null
       */
      state_text: string | null;
      /**
       * Status
       * @description Numeric status ID for this record.
       * @default null
       */
      status: number | null;
      /**
       * Status Name
       * @description Status name for this record.
       * @default null
       */
      status_name: string | null;
      /**
       * Type
       * @description Type of record, e.g., 'contact'.
       * @default null
       */
      type: string | null;
      /**
       * Website
       * @description Website URL for the contact.
       * @default null
       */
      website: string | null;
      /**
       * Work Phone
       * @description Work phone number of the contact.
       * @default null
       */
      work_phone: string | null;
      /**
       * Zip
       * @description Postal code for the contact's address.
       * @default null
       */
      zip: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_CONTACT_LIST tool input.
 */
type JOBNIMBUS_CONTACT_LIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of contact fields to include. Defaults to all fields.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description URL-encoded JSON filter for advanced querying.
   * @default null
   */
  filter: string | null;
  /**
   * From
   * @description Zero-based offset for pagination. Defaults to 0.
   * @default 0
   */
  from: number | null;
  /**
   * Size
   * @description Maximum number of contacts to return (>=1). Defaults to 1000.
   * @default 1000
   */
  size: number | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' or 'desc'. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort results by. Defaults to 'date_created'.
   * @default date_created
   */
  sort_field: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_CONTACT_LIST tool output.
 */
type JOBNIMBUS_CONTACT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts retrieved.
       */
      contacts: {
          /**
           * Address Line1
           * @description Primary address line for the contact.
           * @default null
           */
          address_line1: string | null;
          /**
           * Address Line2
           * @description Secondary address line for the contact.
           * @default null
           */
          address_line2: string | null;
          /**
           * City
           * @description City of the contact's address.
           * @default null
           */
          city: string | null;
          /**
           * Company
           * @description Company name of the contact.
           * @default null
           */
          company: string | null;
          /**
           * Country Name
           * @description Country of the contact's address.
           * @default null
           */
          country_name: string | null;
          /**
           * Created By
           * @description ID of the contact who created this record.
           * @default null
           */
          created_by: string | null;
          /**
           * Created By Name
           * @description Name of the creator of this record.
           * @default null
           */
          created_by_name: string | null;
          /**
           * Customer
           * @description ID of the associated customer.
           * @default null
           */
          customer: string | null;
          /**
           * Date Created
           * @description Unix timestamp when this record was created.
           * @default null
           */
          date_created: number | null;
          /**
           * Date Updated
           * @description Unix timestamp when this record was last updated.
           * @default null
           */
          date_updated: number | null;
          /**
           * Description
           * @description Description or notes for this contact.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description Display name for the contact.
           * @default null
           */
          display_name: string | null;
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
          /**
           * Fax Number
           * @description Fax number of the contact.
           * @default null
           */
          fax_number: string | null;
          /**
           * First Name
           * @description First name of the contact.
           * @default null
           */
          first_name: string | null;
          /**
           * Geo
           * @description Geolocation coordinates for the contact.
           * @default null
           */
          geo: {
              /**
               * Lat
               * @description Latitude coordinate for geolocation.
               */
              lat: number;
              /**
               * Lon
               * @description Longitude coordinate for geolocation.
               */
              lon: number;
          } | null;
          /**
           * Home Phone
           * @description Home phone number of the contact.
           * @default null
           */
          home_phone: string | null;
          /**
           * Jnid
           * @description The JobNimbus ID (jnid) of the contact.
           */
          jnid: string;
          /**
           * Last Name
           * @description Last name of the contact.
           * @default null
           */
          last_name: string | null;
          /**
           * Location
           * @description Location details for this contact.
           * @default null
           */
          location: {
              /**
               * Id
               * @description ID of the location associated with the contact.
               */
              id: number;
              /**
               * Name
               * @description Name of the location.
               */
              name: string;
              /**
               * Parent Id
               * @description Parent location ID, if any.
               * @default null
               */
              parent_id: number | null;
          } | null;
          /**
           * Mobile Phone
           * @description Mobile phone number of the contact.
           * @default null
           */
          mobile_phone: string | null;
          /**
           * Owners
           * @description List of owners of this contact.
           * @default null
           */
          owners: {
              /**
               * Id
               * @description ID of the owner of the contact.
               */
              id: string;
          }[] | null;
          /**
           * Recid
           * @description Auto-incrementing internal record ID.
           * @default null
           */
          recid: number | null;
          /**
           * Record Type
           * @description Numeric workflow type ID for this record.
           * @default null
           */
          record_type: number | null;
          /**
           * Record Type Name
           * @description Workflow type name for this record.
           * @default null
           */
          record_type_name: string | null;
          /**
           * Sales Rep
           * @description ID of the sales rep for this contact.
           * @default null
           */
          sales_rep: string | null;
          /**
           * Sales Rep Name
           * @description Name of the sales rep for this contact.
           * @default null
           */
          sales_rep_name: string | null;
          /**
           * Source
           * @description Numeric lead source ID for this record.
           * @default null
           */
          source: number | null;
          /**
           * Source Name
           * @description Lead source name for this record.
           * @default null
           */
          source_name: string | null;
          /**
           * State Text
           * @description State of the contact's address.
           * @default null
           */
          state_text: string | null;
          /**
           * Status
           * @description Numeric status ID for this record.
           * @default null
           */
          status: number | null;
          /**
           * Status Name
           * @description Status name for this record.
           * @default null
           */
          status_name: string | null;
          /**
           * Type
           * @description Type of record, e.g., 'contact'.
           * @default null
           */
          type: string | null;
          /**
           * Website
           * @description Website URL for the contact.
           * @default null
           */
          website: string | null;
          /**
           * Work Phone
           * @description Work phone number of the contact.
           * @default null
           */
          work_phone: string | null;
          /**
           * Zip
           * @description Postal code for the contact's address.
           * @default null
           */
          zip: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_FILE_TYPE tool input.
 */
type JOBNIMBUS_CREATE_FILE_TYPE_INPUT = {
  /**
   * Is Active
   * @description Whether the new file type should be active immediately.
   * @default null
   */
  IsActive: boolean | null;
  /**
   * Type Name
   * @description Name of the new file attachment type.
   */
  TypeName?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_FILE_TYPE tool output.
 */
type JOBNIMBUS_CREATE_FILE_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Type Id
       * @description Unique identifier of the created file type.
       */
      FileTypeId: number;
      /**
       * Is Active
       * @description Whether the file type is active.
       */
      IsActive: boolean;
      /**
       * Type Name
       * @description Name of the created file type.
       */
      TypeName: string;
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
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_MATERIAL_ORDER tool input.
 */
type JOBNIMBUS_CREATE_MATERIAL_ORDER_INPUT = {
  /**
   * Assigned To Id
   * @description User ID to whom this order is assigned.
   * @default null
   */
  assignedToId: number | null;
  /**
   * Contact Id
   * @description Unique identifier of the contact to link this order.
   */
  contactId?: number;
  /**
   * Expected Date
   * @description Expected delivery date in ISO 8601 format (YYYY-MM-DD).
   * @default null
   */
  expectedDate: string | null;
  /**
   * Material Order Items
   * @description List of items to include in this material order.
   * @default null
   */
  materialOrderItems: {
      /**
       * Description
       * @description Optional description for this item.
       * @default null
       */
      description: string | null;
      /**
       * Item Id
       * @description Identifier of the item to be ordered.
       */
      itemId: number;
      /**
       * Quantity
       * @description Quantity of the item to order, must be at least 1.
       */
      quantity: number;
      /**
       * Unit Price
       * @description Unit price of the item in the account's currency.
       */
      unitPrice: number;
  }[] | null;
  /**
   * Notes
   * @description Optional notes or comments about the order.
   * @default null
   */
  notes: string | null;
  /**
   * Number
   * @description Optional material order number.
   * @default null
   */
  number: string | null;
  /**
   * Status
   * @description Status of the material order (e.g., 'Draft', 'Ordered').
   * @default null
   */
  status: string | null;
  /**
   * Vendor Id
   * @description Identifier of the vendor for this order.
   * @default null
   */
  vendorId: number | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_MATERIAL_ORDER tool output.
 */
type JOBNIMBUS_CREATE_MATERIAL_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned To Id
       * @description Assigned user ID.
       * @default null
       */
      assignedToId: number | null;
      /**
       * Contact Id
       * @description Linked contact ID.
       */
      contactId: number;
      /**
       * Expected Date
       * @description Expected delivery date.
       * @default null
       */
      expectedDate: string | null;
      /**
       * Id
       * @description Unique identifier of the created material order.
       */
      id: number;
      /**
       * Material Order Items
       * @description Items included in the created order.
       * @default null
       */
      materialOrderItems: {
          /**
           * Description
           * @description Item description.
           * @default null
           */
          description: string | null;
          /**
           * Item Id
           * @description Identifier of the ordered item.
           */
          itemId: number;
          /**
           * Quantity
           * @description Quantity ordered.
           */
          quantity: number;
          /**
           * Unit Price
           * @description Unit price of the item.
           */
          unitPrice: number;
      }[] | null;
      /**
       * Notes
       * @description Notes for the order.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Material order number.
       * @default null
       */
      number: string | null;
      /**
       * Status
       * @description Material order status.
       * @default null
       */
      status: string | null;
      /**
       * Vendor Id
       * @description Vendor ID.
       * @default null
       */
      vendorId: number | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_TASK tool input.
 */
type JOBNIMBUS_CREATE_TASK_INPUT = {
  /**
   * Date End
   * @description End date as a Unix timestamp (seconds since epoch). Use 0 or omit for open-ended tasks.
   * @default null
   */
  date_end: number | null;
  /**
   * Date Start
   * @description Start date as a Unix timestamp (seconds since epoch).
   */
  date_start?: number;
  /**
   * Record Type
   * @description Numeric identifier of the task type.
   * @default null
   */
  record_type: number | null;
  /**
   * Record Type Name
   * @description Name of the task type as defined in account settings.
   */
  record_type_name?: string;
  /**
   * Related
   * @description List of related records (contacts or jobs) to attach this task to.
   * @default null
   */
  related: {
      /**
       * Id
       * @description Identifier of the related contact or job.
       */
      id: string;
  }[] | null;
  /**
   * Title
   * @description Title of the task.
   */
  title?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_TASK tool output.
 */
type JOBNIMBUS_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date End
       * @description End timestamp of the task (seconds since epoch).
       */
      date_end: number;
      /**
       * Date Start
       * @description Start timestamp of the task (seconds since epoch).
       */
      date_start: number;
      /**
       * Id
       * @description Unique identifier of the created task.
       */
      id: string;
      /**
       * Record Type
       * @description Numeric identifier of the task type.
       * @default null
       */
      record_type: number | null;
      /**
       * Record Type Name
       * @description Name of the task type.
       */
      record_type_name: string;
      /**
       * Related
       * @description Related records attached to the task.
       * @default null
       */
      related: {
          /**
           * Id
           * @description Identifier of the related contact or job.
           */
          id: string;
      }[] | null;
      /**
       * Title
       * @description Title of the task.
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
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_WORKFLOW_STATUS tool input.
 */
type JOBNIMBUS_CREATE_WORKFLOW_STATUS_INPUT = {
  /**
   * Force Mobile Sync
   * @description Whether to force mobile sync on status change
   * @default false
   */
  force_mobile_sync: boolean;
  /**
   * Is Active
   * @description Whether the status is active
   * @default true
   */
  is_active: boolean;
  /**
   * Is Archived
   * @description Whether this status should be archived
   * @default false
   */
  is_archived: boolean;
  /**
   * Is Closed
   * @description Whether this status marks closure
   * @default false
   */
  is_closed: boolean;
  /**
   * Is Lead
   * @description Whether this status marks a lead
   * @default false
   */
  is_lead: boolean;
  /**
   * Name
   * @description Display name of the new status
   */
  name?: string;
  /**
   * Send To Quickbooks
   * @description Whether to sync this status to QuickBooks
   * @default false
   */
  send_to_quickbooks: boolean;
  /**
   * Workflowid
   * @description ID of the target workflow
   */
  workflowid?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_CREATE_WORKFLOW_STATUS tool output.
 */
type JOBNIMBUS_CREATE_WORKFLOW_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Force Mobile Sync
       * @description Whether mobile sync is forced on status change
       * @default false
       */
      force_mobile_sync: boolean | null;
      /**
       * Id
       * @description Unique ID of the created status
       */
      id: number;
      /**
       * Is Active
       * @description Whether the status is active
       */
      is_active: boolean;
      /**
       * Is Archived
       * @description Whether the status is archived
       */
      is_archived: boolean;
      /**
       * Is Closed
       * @description Whether this status marks closure
       * @default false
       */
      is_closed: boolean | null;
      /**
       * Is Lead
       * @description Whether this status marks a lead
       * @default false
       */
      is_lead: boolean | null;
      /**
       * Name
       * @description Name of the status
       */
      name: string;
      /**
       * Order
       * @description Order position of the status within the workflow
       * @default null
       */
      order: number | null;
      /**
       * Profile Ids
       * @description Access profile IDs allowed to use this status
       */
      profile_ids?: number[];
      /**
       * Send To Quickbooks
       * @description Whether this status is synced to QuickBooks
       */
      send_to_quickbooks: boolean;
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
 * Type of JOBNIMBUS's JOBNIMBUS_FILE_GET tool input.
 */
type JOBNIMBUS_FILE_GET_INPUT = {
  /**
   * Jnid
   * @description The JobNimbus ID (jnid) of the file to retrieve.
   */
  jnid?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_FILE_GET tool output.
 */
type JOBNIMBUS_FILE_GET_OUTPUT = {
  /**
   * Data
   * @description Raw file content as text or base64 string.
   */
  data?: string;
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
 * Type of JOBNIMBUS's JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS tool input.
 */
type JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS_INPUT = {
  /**
   * Actor
   * @description Optional JobNimbus user email to impersonate this request
   * @default null
   */
  actor: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS tool output.
 */
type JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sources
       * @description List of lead/source definitions
       */
      sources: {
          /**
           * Id
           * @description ID of a lead/source
           */
          id: number;
          /**
           * Name
           * @description Name of the lead/source
           */
          name: string;
      }[];
      /**
       * Types
       * @description List of record types
       */
      types: {
          /**
           * Id
           * @description ID of a record type
           */
          id: number;
          /**
           * Name
           * @description Name of the record type
           */
          name: string;
      }[];
      /**
       * Workflows
       * @description List of account workflows
       */
      workflows: {
          /**
           * Id
           * @description ID of a workflow
           */
          id: number;
          /**
           * Name
           * @description Name of the workflow
           */
          name: string;
          /**
           * Statuses
           * @description All statuses defined in this workflow
           */
          statuses: {
              /**
               * Id
               * @description ID of a status within a workflow
               */
              id: number;
              /**
               * Name
               * @description Name of the status
               */
              name: string;
          }[];
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
 * Type of JOBNIMBUS's JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE tool input.
 */
type JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE_INPUT = {
  /**
   * Address Line1
   * @description Address line 1
   * @default null
   */
  addressLine1: string | null;
  /**
   * Address Line2
   * @description Address line 2
   * @default null
   */
  addressLine2: string | null;
  /**
   * City
   * @description City of the contact
   * @default null
   */
  city: string | null;
  /**
   * Company
   * @description Company name associated with the contact
   * @default null
   */
  company: string | null;
  /**
   * Contact Type
   * @description Type/category of the contact
   * @default null
   */
  contactType: string | null;
  /**
   * Description
   * @description Internal notes or description
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description Display name of the contact
   * @default null
   */
  displayName: string | null;
  /**
   * Email
   * @description Email address of the contact
   * @default null
   */
  email: string | null;
  /**
   * External Id
   * @description External identifier
   * @default null
   */
  externalId: string | null;
  /**
   * Fax Number
   * @description Fax number
   * @default null
   */
  faxNumber: string | null;
  /**
   * First Name
   * @description First name of the contact
   * @default null
   */
  firstName: string | null;
  /**
   * Home Phone
   * @description Home phone number
   * @default null
   */
  homePhone: string | null;
  /**
   * Jnid
   * @description Unique JobNimbus identifier of the contact to update
   */
  jnid?: string;
  /**
   * Last Name
   * @description Last name of the contact
   * @default null
   */
  lastName: string | null;
  /**
   * Mobile Phone
   * @description Mobile phone number
   * @default null
   */
  mobilePhone: string | null;
  /**
   * Sales Rep Name
   * @description Name of the sales representative
   * @default null
   */
  salesRepName: string | null;
  /**
   * Source Name
   * @description Source from which the contact originated
   * @default null
   */
  sourceName: string | null;
  /**
   * State Text
   * @description State of the contact
   * @default null
   */
  stateText: string | null;
  /**
   * Status Name
   * @description Status of the contact
   * @default null
   */
  statusName: string | null;
  /**
   * Tags
   * @description Tags associated with the contact
   * @default null
   */
  tags: string[] | null;
  /**
   * Website
   * @description Website URL
   * @default null
   */
  website: string | null;
  /**
   * Work Phone
   * @description Work phone number
   * @default null
   */
  workPhone: string | null;
  /**
   * Zip
   * @description ZIP code of the contact
   * @default null
   */
  zip: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE tool output.
 */
type JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Address Line1 */
      addressLine1: string | null;
      /** Address Line2 */
      addressLine2: string | null;
      /** City */
      city: string | null;
      /** Company */
      company: string | null;
      /** Contact Type */
      contactType: string | null;
      /** Description */
      description: string | null;
      /** Display Name */
      displayName: string | null;
      /** Email */
      email: string | null;
      /** External Id */
      externalId: string | null;
      /** Fax Number */
      faxNumber: string | null;
      /** First Name */
      firstName: string | null;
      /** Home Phone */
      homePhone: string | null;
      /** Jnid */
      jnid: string;
      /** Last Name */
      lastName: string | null;
      /** Mobile Phone */
      mobilePhone: string | null;
      /** Sales Rep Name */
      salesRepName: string | null;
      /** Source Name */
      sourceName: string | null;
      /** State Text */
      stateText: string | null;
      /** Status Name */
      statusName: string | null;
      /** Tags */
      tags: string[] | null;
      /** Website */
      website: string | null;
      /** Work Phone */
      workPhone: string | null;
      /** Zip */
      zip: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_JOBNIMBUS_TASK_LIST tool input.
 */
type JOBNIMBUS_JOBNIMBUS_TASK_LIST_INPUT = {
  /**
   * Assigned To
   * @description Filter by assigned user ID.
   * @default null
   */
  assigned_to: number | null;
  /**
   * Due Date
   * @description Filter by due date in YYYY-MM-DD format.
   * @default null
   */
  due_date: string | null;
  /**
   * Page
   * @description Page number of results (1-indexed).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter tasks by status.
   * @default null
   */
  status: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_JOBNIMBUS_TASK_LIST tool output.
 */
type JOBNIMBUS_JOBNIMBUS_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks retrieved.
       */
      tasks: {
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
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_ACTIVITIES tool input.
 */
type JOBNIMBUS_LIST_ACTIVITIES_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of activity fields to include. Defaults to all fields.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description URL-encoded JSON filter for advanced querying.
   * @default null
   */
  filter: string | null;
  /**
   * Offset
   * @description Zero-based offset for pagination. Defaults to 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Size
   * @description Maximum number of activities to return (>=1). Defaults to 1000.
   * @default 1000
   */
  size: number | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' or 'desc'. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort results by. Defaults to 'date_created'.
   * @default date_created
   */
  sort_field: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_ACTIVITIES tool output.
 */
type JOBNIMBUS_LIST_ACTIVITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activity
       * @description List of activity records.
       */
      activity: {
          /**
           * Created By
           * @description ID of creator.
           */
          created_by: string;
          /**
           * Created By Name
           * @description Name of creator.
           */
          created_by_name: string;
          /**
           * Customer
           * @description Customer associated with the activity.
           */
          customer: string;
          /**
           * Date Created
           * @description Creation timestamp (ms since epoch).
           */
          date_created: number;
          /**
           * Date Updated
           * @description Last update timestamp.
           */
          date_updated: number;
          /**
           * Is Active
           * @description Indicates if active.
           */
          is_active: boolean;
          /**
           * Is Archived
           * @description Whether archived.
           */
          is_archived: boolean;
          /**
           * Is Editable
           * @description Whether editable.
           */
          is_editable: boolean;
          /**
           * Is Status Change
           * @description Whether it's a status change.
           */
          is_status_change: boolean;
          /**
           * Jnid
           * @description JobNimbus ID of the activity.
           */
          jnid: string;
          /**
           * Location
           * @description Location details.
           */
          location: {
              /**
               * Id
               * @description ID of the location.
               */
              id: number;
          };
          /**
           * Note
           * @description Note content.
           * @default null
           */
          note: string | null;
          /**
           * Owners
           * @description List of owners.
           */
          owners: {
              /**
               * Id
               * @description ID of the owner.
               */
              id: string;
          }[];
          /**
           * Primary
           * @description Primary entity details.
           */
          primary: {
              /**
               * Id
               * @description ID of the primary entity.
               */
              id: string;
              /**
               * Name
               * @description Name of the primary entity.
               * @default null
               */
              name: string | null;
              /**
               * Number
               * @description Reference number of the primary entity.
               * @default null
               */
              number: string | null;
              /**
               * Type
               * @description Type of the primary entity.
               */
              type: string;
          };
          /**
           * Record Type Name
           * @description Name of the record type.
           */
          record_type_name: string;
          /**
           * Related
           * @description List of related entities.
           */
          related: {
              /**
               * Id
               * @description ID of the related entity.
               */
              id: string;
              /**
               * Name
               * @description Name of the related entity.
               * @default null
               */
              name: string | null;
              /**
               * Number
               * @description Reference number of the related entity.
               * @default null
               */
              number: string | null;
              /**
               * Type
               * @description Type of the related entity.
               */
              type: string;
          }[];
          /**
           * Type
           * @description Type of the activity.
           */
          type: string;
      }[];
      /**
       * Count
       * @description Total number of activities.
       */
      count: number;
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
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_INVOICES tool input.
 */
type JOBNIMBUS_LIST_INVOICES_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of invoice fields to include. Defaults to all fields.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description URL-encoded JSON filter for advanced querying.
   * @default null
   */
  filter: string | null;
  /**
   * From
   * @description Zero-based offset for pagination. Defaults to 0.
   * @default 0
   */
  from: number | null;
  /**
   * Size
   * @description Maximum number of invoices to return (>=1). Defaults to 1000.
   * @default 1000
   */
  size: number | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' or 'desc'. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort results by. Defaults to 'date_created'.
   * @default date_created
   */
  sort_field: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_INVOICES tool output.
 */
type JOBNIMBUS_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Count */
      count: number;
      /** Results */
      results: {
          /**
           * Attachment Id
           * @default null
           */
          attachment_id: string | null;
          /**
           * Cost
           * @default null
           */
          cost: number | null;
          /**
           * Created By
           * @default null
           */
          created_by: string | null;
          /**
           * Created By Name
           * @default null
           */
          created_by_name: string | null;
          /**
           * Customer
           * @default null
           */
          customer: string | null;
          /**
           * Date Created
           * @default null
           */
          date_created: number | null;
          /**
           * Date Due
           * @default null
           */
          date_due: number | null;
          /**
           * Date Invoice
           * @default null
           */
          date_invoice: number | null;
          /**
           * Date Paid In Full
           * @default null
           */
          date_paid_in_full: number | null;
          /**
           * Date Status Change
           * @default null
           */
          date_status_change: number | null;
          /**
           * Date Updated
           * @default null
           */
          date_updated: number | null;
          /**
           * Due
           * @default null
           */
          due: number | null;
          /**
           * Duplicate From Id
           * @default null
           */
          duplicate_from_id: string | null;
          /**
           * Esigned
           * @default null
           */
          esigned: boolean | null;
          /**
           * External Id
           * @default null
           */
          external_id: string | null;
          /**
           * First Payment Date
           * @default null
           */
          first_payment_date: number | null;
          /**
           * Guid
           * @default null
           */
          guid: string | null;
          /** Is Active */
          is_active: boolean;
          /** Is Archived */
          is_archived: boolean;
          /** Items */
          items?: {
              /**
               * Add Markup
               * @default null
               */
              addMarkup: boolean | null;
              /**
               * Add Markup Is Excluded
               * @default null
               */
              addMarkupIsExcluded: boolean | null;
              /**
               * Amount
               * @default null
               */
              amount: number | null;
              /**
               * Category
               * @default null
               */
              category: string | null;
              /**
               * Color
               * @default null
               */
              color: string | null;
              /**
               * Cost
               * @default null
               */
              cost: number | null;
              /**
               * Description
               * @default null
               */
              description: string | null;
              /**
               * Item Type
               * @default null
               */
              item_type: string | null;
              /** Jnid */
              jnid: string;
              /**
               * InvoiceLabor
               * @default null
               */
              labor: {
                  /**
                   * Add Markup
                   * @default null
                   */
                  addMarkup: boolean | null;
                  /**
                   * Add Markup Is Excluded
                   * @default null
                   */
                  addMarkupIsExcluded: boolean | null;
                  /**
                   * Amount
                   * @default null
                   */
                  amount: number | null;
                  /**
                   * Cost
                   * @default null
                   */
                  cost: number | null;
                  /**
                   * Pre Surcharge Price
                   * @default null
                   */
                  preSurchargePrice: number | null;
                  /**
                   * Price
                   * @default null
                   */
                  price: number | null;
                  /**
                   * Quickbooks Id
                   * @default null
                   */
                  quickbooksId: string | null;
                  /**
                   * Tax Couch Id
                   * @default null
                   */
                  tax_couch_id: string | null;
                  /**
                   * Tax Name
                   * @default null
                   */
                  tax_name: string | null;
                  /**
                   * Tax Rate
                   * @default null
                   */
                  tax_rate: number | null;
              } | null;
              /**
               * Name
               * @default null
               */
              name: string | null;
              /** Photos */
              photos?: string[];
              /**
               * Pre Surcharge Price
               * @default null
               */
              preSurchargePrice: number | null;
              /**
               * Price
               * @default null
               */
              price: number | null;
              /**
               * Quantity
               * @default null
               */
              quantity: number | null;
              /**
               * Quickbooks Id
               * @default null
               */
              quickbooksId: string | null;
              /**
               * Show Group Total
               * @default null
               */
              showGroupTotal: boolean | null;
              /**
               * Sku
               * @default null
               */
              sku: string | null;
              /**
               * Tax Couch Id
               * @default null
               */
              tax_couch_id: string | null;
              /**
               * Tax Name
               * @default null
               */
              tax_name: string | null;
              /**
               * Tax Rate
               * @default null
               */
              tax_rate: number | null;
              /**
               * Uom
               * @default null
               */
              uom: string | null;
          }[];
          /** Jnid */
          jnid: string;
          /**
           * Margin
           * @default null
           */
          margin: number | null;
          /**
           * Number
           * @default null
           */
          number: string | null;
          /** Owners */
          owners?: {
              /** Id */
              id: string;
          }[];
          /** Payments */
          payments?: {
              /**
               * Amount
               * @default null
               */
              amount: number | null;
              /**
               * Created By
               * @default null
               */
              created_by: string | null;
              /**
               * Created By Name
               * @default null
               */
              created_by_name: string | null;
              /**
               * Date Payment
               * @default null
               */
              date_payment: number | null;
              /** Jnid */
              jnid: string;
          }[];
          /**
           * Recid
           * @default null
           */
          recid: number | null;
          /** Related */
          related?: {
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: string;
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Number
               * @default null
               */
              number: string | null;
              /**
               * Subject
               * @default null
               */
              subject: string | null;
              /**
               * Type
               * @default null
               */
              type: string | null;
          }[];
          /**
           * Sales Rep
           * @default null
           */
          sales_rep: string | null;
          /**
           * Sales Rep Name
           * @default null
           */
          sales_rep_name: string | null;
          /**
           * Subtotal
           * @default null
           */
          subtotal: number | null;
          /**
           * Tax
           * @default null
           */
          tax: number | null;
          /**
           * Template Id
           * @default null
           */
          template_id: string | null;
          /**
           * Terms
           * @default null
           */
          terms: string | null;
          /**
           * Total
           * @default null
           */
          total: number | null;
          /**
           * Total Paid
           * @default null
           */
          total_paid: number | null;
          /** Type */
          type: string;
          /**
           * Version
           * @default null
           */
          version: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_MATERIAL_ORDERS tool input.
 */
type JOBNIMBUS_LIST_MATERIAL_ORDERS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of material order fields to include. Defaults to all fields.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description URL-encoded JSON filter for advanced querying.
   * @default null
   */
  filter: string | null;
  /**
   * From
   * @description Zero-based offset for pagination. Defaults to 0.
   * @default 0
   */
  from: number | null;
  /**
   * Size
   * @description Maximum number of material orders to return (>=1). Defaults to 1000.
   * @default 1000
   */
  size: number | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' or 'desc'. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort results by. Defaults to 'date_created'.
   * @default date_created
   */
  sort_field: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_MATERIAL_ORDERS tool output.
 */
type JOBNIMBUS_LIST_MATERIAL_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Materialorders
       * @description List of material order records.
       */
      materialorders: {
          /**
           * Address
           * @description Shipping address details
           */
          address: {
              /**
               * Address Line1
               * @description First line of the shipping address
               */
              address_line1: string;
              /**
               * Address Line2
               * @description Second line of the shipping address
               * @default null
               */
              address_line2: string | null;
              /**
               * City
               * @description City of the shipping address
               */
              city: string;
              /**
               * Geo
               * @description Geolocation {'lat': float, 'lon': float} of the address
               * @default null
               */
              geo: {
                  [key: string]: number;
              } | null;
              /**
               * State Text
               * @description State of the shipping address
               */
              state_text: string;
              /**
               * Zip
               * @description Postal code of the shipping address
               */
              zip: string;
          };
          /**
           * Attachment Id
           * @description Attachment ID for order document
           * @default null
           */
          attachment_id: string | null;
          /**
           * Class Id
           * @description Custom class ID, if any
           * @default null
           */
          class_id: number | null;
          /**
           * Class Name
           * @description Custom class name, if any
           * @default null
           */
          class_name: string | null;
          /**
           * Created By
           * @description Creator contact ID
           * @default null
           */
          created_by: string | null;
          /**
           * Created By Name
           * @description Creator contact name
           * @default null
           */
          created_by_name: string | null;
          /**
           * Customer
           * @description Customer ID associated with order
           * @default null
           */
          customer: string | null;
          /**
           * Customer Note
           * @description Customer-facing notes
           * @default null
           */
          customer_note: string | null;
          /**
           * Date Created
           * @description Unix timestamp when created
           * @default null
           */
          date_created: number | null;
          /**
           * Date Materialorder
           * @description Unix timestamp of order date
           * @default null
           */
          date_materialorder: number | null;
          /**
           * Date Status Change
           * @description Unix timestamp of status change
           * @default null
           */
          date_status_change: number | null;
          /**
           * Date Updated
           * @description Unix timestamp when updated
           * @default null
           */
          date_updated: number | null;
          /**
           * Duplicate From Id
           * @description ID of duplicated order, if any
           * @default null
           */
          duplicate_from_id: string | null;
          /**
           * Esigned
           * @description Whether the order is electronically signed
           */
          esigned: boolean;
          /**
           * External Id
           * @description External system ID reference
           * @default null
           */
          external_id: string | null;
          /**
           * Guid
           * @description GUID of the material order
           * @default null
           */
          guid: string | null;
          /**
           * Internal Note
           * @description Internal notes
           * @default null
           */
          internal_note: string | null;
          /**
           * Is Active
           * @description Whether the order is active
           */
          is_active: boolean;
          /**
           * Is Archived
           * @description Whether the order is archived
           */
          is_archived: boolean;
          /**
           * Items
           * @description List of order line items
           */
          items: {
              /**
               * Category
               * @description Category code of the item
               * @default null
               */
              category: string | null;
              /**
               * Color
               * @description Color if applicable
               * @default null
               */
              color: string | null;
              /**
               * Cost
               * @description Unit cost of the item
               */
              cost: number;
              /**
               * Description
               * @description Description of the item
               * @default null
               */
              description: string | null;
              /**
               * Jnid
               * @description The JobNimbus ID of the line item
               */
              jnid: string;
              /**
               * Name
               * @description Name of the line item
               */
              name: string;
              /**
               * Photos
               * @description List of photo attachment IDs
               */
              photos?: string[];
              /**
               * Price
               * @description Unit price of the item
               */
              price: number;
              /**
               * Quantity
               * @description Quantity ordered
               */
              quantity: number;
              /**
               * Sku
               * @description SKU of the item
               * @default null
               */
              sku: string | null;
              /**
               * Uom
               * @description Unit of measure code
               * @default null
               */
              uom: string | null;
          }[];
          /**
           * Jnid
           * @description Unique identifier of the material order (jnid)
           */
          jnid: string;
          /**
           * Location
           * @description Location object with ID
           */
          location: {
              [key: string]: number;
          };
          /**
           * Merged
           * @description Merge reference ID if merged
           * @default null
           */
          merged: string | null;
          /**
           * Number
           * @description Order number
           * @default null
           */
          number: string | null;
          /**
           * Owners
           * @description List of owner contacts
           */
          owners: {
              [key: string]: unknown;
          }[];
          /**
           * Recid
           * @description Internal record ID
           */
          recid: number;
          /**
           * Related
           * @description Related jobs or contacts as JSON objects
           */
          related: {
              [key: string]: unknown;
          }[];
          /**
           * Rules
           * @description Triggered workflow rule IDs
           */
          rules?: string[];
          /**
           * Sales Rep
           * @description Sales rep contact ID
           * @default null
           */
          sales_rep: string | null;
          /**
           * Sales Rep Name
           * @description Sales rep contact name
           * @default null
           */
          sales_rep_name: string | null;
          /**
           * Sections
           * @description Order sections as JSON objects
           */
          sections?: {
              [key: string]: unknown;
          }[];
          /**
           * Status
           * @description Numeric status code
           */
          status: number;
          /**
           * Status Name
           * @description Status display name
           */
          status_name: string;
          /**
           * Supplier
           * @description Supplier details object
           * @default null
           */
          supplier: {
              /**
               * Branch
               * @description Supplier branch code
               * @default null
               */
              branch: string | null;
              /**
               * Customer Branch
               * @description Customer branch code at supplier
               * @default null
               */
              customer_branch: string | null;
              /**
               * Customer Job
               * @description Supplier job code
               * @default null
               */
              customer_job: string | null;
              /**
               * Customer Job Name
               * @description Supplier job name
               * @default null
               */
              customer_job_name: string | null;
              /**
               * Delivery Time
               * @description Estimated delivery time as ISO string or timestamp
               * @default null
               */
              delivery_time: string | null;
              /**
               * Logs
               * @description Supplier log entries as JSON objects
               */
              logs?: {
                  [key: string]: unknown;
              }[];
              /**
               * Po
               * @description Purchase order reference
               * @default null
               */
              po: string | null;
              /**
               * Status
               * @description Supplier status text
               * @default null
               */
              status: string | null;
              /**
               * Type
               * @description Supplier name or type
               * @default null
               */
              type: string | null;
          } | null;
          /**
           * Template Id
           * @description Template ID used for order
           * @default null
           */
          template_id: string | null;
          /**
           * Total Line Item Cost
           * @description Sum of item costs
           * @default null
           */
          total_line_item_cost: number | null;
          /**
           * Total Line Item Price
           * @description Sum of item prices
           * @default null
           */
          total_line_item_price: number | null;
          /**
           * Type
           * @description Record type, always 'materialorder'
           */
          type: string;
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
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_PAYMENTS tool input.
 */
type JOBNIMBUS_LIST_PAYMENTS_INPUT = {
  /**
   * Contact Id
   * @description Filter payments by associated contact ID.
   * @default null
   */
  contactId: number | null;
  /**
   * Date From
   * @description Start date (YYYY-MM-DD) filter.
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * @description End date (YYYY-MM-DD) filter.
   * @default null
   */
  dateTo: string | null;
  /**
   * Job Id
   * @description Filter payments by associated job ID.
   * @default null
   */
  jobId: number | null;
  /**
   * Page
   * @description Page number for pagination (>=1). Defaults to 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of payments per page (>=1). Defaults to 100.
   * @default 100
   */
  perPage: number | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_PAYMENTS tool output.
 */
type JOBNIMBUS_LIST_PAYMENTS_OUTPUT = {
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
       * Payments
       * @description List of payments.
       */
      payments: ({
          /**
           * Amount
           * @description Payment amount.
           */
          amount: number;
          /**
           * Contact Id
           * @description Associated contact ID.
           * @default null
           */
          contactId: number | null;
          /**
           * Date
           * @description Payment date in YYYY-MM-DD.
           */
          date: string;
          /**
           * Id
           * @description Unique payment ID.
           */
          id: number;
          /**
           * Job Id
           * @description Associated job ID.
           * @default null
           */
          jobId: number | null;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Per Page
       * @description Items per page.
       */
      perPage: number;
      /**
       * Total
       * @description Total number of payments.
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
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_PRODUCTS tool input.
 */
type JOBNIMBUS_LIST_PRODUCTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of product fields to include. Defaults to all fields.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description URL-encoded JSON filter for advanced querying.
   * @default null
   */
  filter: string | null;
  /**
   * From
   * @description Zero-based offset for pagination. Defaults to 0.
   * @default 0
   */
  from: number | null;
  /**
   * Size
   * @description Maximum number of products to return (>=1). Defaults to 1000.
   * @default 1000
   */
  size: number | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' or 'desc'. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort results by. Defaults to 'date_created'.
   * @default date_created
   */
  sort_field: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_PRODUCTS tool output.
 */
type JOBNIMBUS_LIST_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Products
       * @description List of products retrieved.
       */
      products: {
          /**
           * Date Created
           * @description Unix timestamp when the product was created.
           */
          date_created: number;
          /**
           * Date Updated
           * @description Unix timestamp when the product was last updated.
           */
          date_updated: number;
          /**
           * Description
           * @description Product description.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the product.
           */
          id: string;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Price
           * @description Product price.
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
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_WORKORDERS tool input.
 */
type JOBNIMBUS_LIST_WORKORDERS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of work order fields to include. Defaults to all fields.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description URL-encoded JSON filter for advanced querying.
   * @default null
   */
  filter: string | null;
  /**
   * From
   * @description Zero-based offset for pagination. Defaults to 0.
   * @default 0
   */
  from: number | null;
  /**
   * Size
   * @description Maximum number of work orders to return (>=1). Defaults to 1000.
   * @default 1000
   */
  size: number | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' or 'desc'. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort results by. Defaults to 'date_created'.
   * @default date_created
   */
  sort_field: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_LIST_WORKORDERS tool output.
 */
type JOBNIMBUS_LIST_WORKORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workorders
       * @description List of work order records.
       */
      workorders: {
          /**
           * Actual Time
           * @description Actual minutes logged.
           * @default null
           */
          actualTime: number | null;
          /**
           * Address Line1
           * @description Line 1 of the work order address.
           * @default null
           */
          addressLine1: string | null;
          /**
           * Address Line2
           * @description Line 2 of the work order address.
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the work order address.
           * @default null
           */
          city: string | null;
          /**
           * Date End
           * @description End timestamp (Unix epoch seconds).
           * @default null
           */
          dateEnd: number | null;
          /**
           * Date Start
           * @description Start timestamp (Unix epoch seconds).
           * @default null
           */
          dateStart: number | null;
          /**
           * Description
           * @description Description of the work order.
           * @default null
           */
          description: string | null;
          /**
           * Estimated Time
           * @description Estimated minutes to complete.
           * @default null
           */
          estimatedTime: number | null;
          /**
           * Jnid
           * @description Unique JobNimbus ID of the work order.
           */
          jnid: string;
          /**
           * Owners
           * @description List of owner IDs.
           * @default null
           */
          owners: string[] | null;
          /**
           * Record Type Name
           * @description Workflow type name.
           * @default null
           */
          recordTypeName: string | null;
          /**
           * Related
           * @description List of related record IDs.
           * @default null
           */
          related: string[] | null;
          /**
           * Source Name
           * @description Lead source name.
           * @default null
           */
          sourceName: string | null;
          /**
           * State Text
           * @description State of the work order address.
           * @default null
           */
          stateText: string | null;
          /**
           * Status Name
           * @description Workflow status name.
           * @default null
           */
          statusName: string | null;
          /**
           * Subcontractors
           * @description List of subcontractor IDs.
           * @default null
           */
          subcontractors: string[] | null;
          /**
           * Tags
           * @description Comma-separated list of tags.
           * @default null
           */
          tags: string | null;
          /**
           * Zip
           * @description Postal code of the work order address.
           * @default null
           */
          zip: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_PRODUCT_GET tool input.
 */
type JOBNIMBUS_PRODUCT_GET_INPUT = {
  /**
   * Jnid
   * @description The JobNimbus product ID (jnid) to retrieve.
   */
  jnid?: string;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_PRODUCT_GET tool output.
 */
type JOBNIMBUS_PRODUCT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost to acquire the product (non-negative).
       * @default null
       */
      cost: number | null;
      /**
       * Date Created
       * @description Unix timestamp when the product was created.
       * @default null
       */
      date_created: number | null;
      /**
       * Date Updated
       * @description Unix timestamp when the product was last updated.
       * @default null
       */
      date_updated: number | null;
      /**
       * Description
       * @description Detailed description of the product.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the product.
       */
      id: string;
      /**
       * Name
       * @description Name of the product.
       */
      name: string;
      /**
       * Price
       * @description Sale price of the product (non-negative).
       * @default null
       */
      price: number | null;
      /**
       * Taxable
       * @description Whether the product is taxable.
       * @default null
       */
      taxable: boolean | null;
      /**
       * Unit
       * @description Unit of measurement for the product (e.g., 'each', 'box').
       * @default null
       */
      unit: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_UPDATE_TASK tool input.
 */
type JOBNIMBUS_UPDATE_TASK_INPUT = {
  /**
   * Date End
   * @description End timestamp of the task (Unix epoch seconds)
   * @default null
   */
  date_end: number | null;
  /**
   * Date Start
   * @description Start timestamp of the task (Unix epoch seconds)
   * @default null
   */
  date_start: number | null;
  /**
   * Description
   * @description Description or notes for the task
   * @default null
   */
  description: string | null;
  /**
   * Is Completed
   * @description Whether the task is completed
   * @default null
   */
  is_completed: boolean | null;
  /**
   * Jnid
   * @description JobNimbus ID of the task to update
   */
  jnid?: string;
  /**
   * Priority
   * @description Priority of the task (0=none,1=high,2=medium,3=low)
   * @default null
   */
  priority: number | null;
  /**
   * Record Type
   * @description ID of the task type
   * @default null
   */
  record_type: number | null;
  /**
   * Record Type Name
   * @description Name of the task type
   * @default null
   */
  record_type_name: string | null;
  /**
   * Related
   * @description List of JobNimbus IDs of related records
   * @default null
   */
  related: string[] | null;
  /**
   * Title
   * @description Title of the task
   * @default null
   */
  title: string | null;
};

/**
 * Type of JOBNIMBUS's JOBNIMBUS_UPDATE_TASK tool output.
 */
type JOBNIMBUS_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date End
       * @description End timestamp of the task (Unix epoch seconds).
       * @default null
       */
      date_end: number | null;
      /**
       * Date Start
       * @description Start timestamp of the task (Unix epoch seconds).
       * @default null
       */
      date_start: number | null;
      /**
       * Description
       * @description Description or notes for the task.
       * @default null
       */
      description: string | null;
      /**
       * Is Completed
       * @description Whether the task is completed.
       * @default null
       */
      is_completed: boolean | null;
      /**
       * Jnid
       * @description JobNimbus ID of the task.
       */
      jnid: string;
      /**
       * Owners
       * @description List of owners for the task.
       * @default null
       */
      owners: {
          /**
           * Id
           * @description User ID of the task owner.
           */
          id: string;
      }[] | null;
      /**
       * Priority
       * @description Priority of the task (0=none,1=high,2=medium,3=low).
       * @default null
       */
      priority: number | null;
      /**
       * Record Type
       * @description ID of the task type.
       * @default null
       */
      record_type: number | null;
      /**
       * Record Type Name
       * @description Name of the task type.
       * @default null
       */
      record_type_name: string | null;
      /**
       * Related
       * @description List of related records for the task.
       * @default null
       */
      related: {
          /**
           * Jnid
           * @description JobNimbus ID of the related record.
           */
          jnid: string;
      }[] | null;
      /**
       * Title
       * @description Title of the task.
       * @default null
       */
      title: string | null;
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
 * Type of JOBNIMBUS's JOBNIMBUS_UTILITY_GET_UOMS tool input.
 */
type JOBNIMBUS_UTILITY_GET_UOMS_INPUT = object;

/**
 * Type of JOBNIMBUS's JOBNIMBUS_UTILITY_GET_UOMS tool output.
 */
type JOBNIMBUS_UTILITY_GET_UOMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Uoms
       * @description List of supported units of measure
       */
      uoms: ({
          /**
           * Abbreviation
           * @description Abbreviated symbol, e.g., 'ea', 'sqft'
           */
          abbreviation: string;
          /**
           * Category
           * @description Optional classification, e.g., 'area', 'length', 'count'
           * @default null
           */
          category: string | null;
          /**
           * Id
           * @description Unique identifier for the unit of measure
           */
          id: number;
          /**
           * Name
           * @description Full name of the unit of measure, e.g., 'Square Foot'
           */
          name: string;
      } | string)[];
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
 * Type map of all available tool input types for toolkit "JOBNIMBUS".
 */
export type JOBNIMBUS_TOOL_INPUTS = {
  ACCOUNT_CREATE_LOCATION: JOBNIMBUS_ACCOUNT_CREATE_LOCATION_INPUT
  ACTIVITY_GET: JOBNIMBUS_ACTIVITY_GET_INPUT
  CONTACT_GET: JOBNIMBUS_CONTACT_GET_INPUT
  CONTACT_LIST: JOBNIMBUS_CONTACT_LIST_INPUT
  CREATE_FILE_TYPE: JOBNIMBUS_CREATE_FILE_TYPE_INPUT
  CREATE_MATERIAL_ORDER: JOBNIMBUS_CREATE_MATERIAL_ORDER_INPUT
  CREATE_TASK: JOBNIMBUS_CREATE_TASK_INPUT
  CREATE_WORKFLOW_STATUS: JOBNIMBUS_CREATE_WORKFLOW_STATUS_INPUT
  FILE_GET: JOBNIMBUS_FILE_GET_INPUT
  JOBNIMBUS_ACCOUNT_GET_SETTINGS: JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS_INPUT
  JOBNIMBUS_CONTACT_UPDATE: JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE_INPUT
  JOBNIMBUS_TASK_LIST: JOBNIMBUS_JOBNIMBUS_TASK_LIST_INPUT
  LIST_ACTIVITIES: JOBNIMBUS_LIST_ACTIVITIES_INPUT
  LIST_INVOICES: JOBNIMBUS_LIST_INVOICES_INPUT
  LIST_MATERIAL_ORDERS: JOBNIMBUS_LIST_MATERIAL_ORDERS_INPUT
  LIST_PAYMENTS: JOBNIMBUS_LIST_PAYMENTS_INPUT
  LIST_PRODUCTS: JOBNIMBUS_LIST_PRODUCTS_INPUT
  LIST_WORKORDERS: JOBNIMBUS_LIST_WORKORDERS_INPUT
  PRODUCT_GET: JOBNIMBUS_PRODUCT_GET_INPUT
  UPDATE_TASK: JOBNIMBUS_UPDATE_TASK_INPUT
  UTILITY_GET_UOMS: JOBNIMBUS_UTILITY_GET_UOMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "JOBNIMBUS".
 */
export type JOBNIMBUS_TOOL_OUTPUTS = {
  ACCOUNT_CREATE_LOCATION: JOBNIMBUS_ACCOUNT_CREATE_LOCATION_OUTPUT
  ACTIVITY_GET: JOBNIMBUS_ACTIVITY_GET_OUTPUT
  CONTACT_GET: JOBNIMBUS_CONTACT_GET_OUTPUT
  CONTACT_LIST: JOBNIMBUS_CONTACT_LIST_OUTPUT
  CREATE_FILE_TYPE: JOBNIMBUS_CREATE_FILE_TYPE_OUTPUT
  CREATE_MATERIAL_ORDER: JOBNIMBUS_CREATE_MATERIAL_ORDER_OUTPUT
  CREATE_TASK: JOBNIMBUS_CREATE_TASK_OUTPUT
  CREATE_WORKFLOW_STATUS: JOBNIMBUS_CREATE_WORKFLOW_STATUS_OUTPUT
  FILE_GET: JOBNIMBUS_FILE_GET_OUTPUT
  JOBNIMBUS_ACCOUNT_GET_SETTINGS: JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS_OUTPUT
  JOBNIMBUS_CONTACT_UPDATE: JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE_OUTPUT
  JOBNIMBUS_TASK_LIST: JOBNIMBUS_JOBNIMBUS_TASK_LIST_OUTPUT
  LIST_ACTIVITIES: JOBNIMBUS_LIST_ACTIVITIES_OUTPUT
  LIST_INVOICES: JOBNIMBUS_LIST_INVOICES_OUTPUT
  LIST_MATERIAL_ORDERS: JOBNIMBUS_LIST_MATERIAL_ORDERS_OUTPUT
  LIST_PAYMENTS: JOBNIMBUS_LIST_PAYMENTS_OUTPUT
  LIST_PRODUCTS: JOBNIMBUS_LIST_PRODUCTS_OUTPUT
  LIST_WORKORDERS: JOBNIMBUS_LIST_WORKORDERS_OUTPUT
  PRODUCT_GET: JOBNIMBUS_PRODUCT_GET_OUTPUT
  UPDATE_TASK: JOBNIMBUS_UPDATE_TASK_OUTPUT
  UTILITY_GET_UOMS: JOBNIMBUS_UTILITY_GET_UOMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's JOBNIMBUS toolkit.
 */
export const JOBNIMBUS = {
  slug: "jobnimbus",
  tools: {
    /**
     * Tool to create a new location in jobnimbus. use after gathering address and contact details.
     */
    ACCOUNT_CREATE_LOCATION: "JOBNIMBUS_ACCOUNT_CREATE_LOCATION",
    /**
     * Tool to retrieve a specific activity by its id. use after confirming the activity's jnid is valid.
     */
    ACTIVITY_GET: "JOBNIMBUS_ACTIVITY_GET",
    /**
     * Tool to retrieve a contact by id. use after obtaining the contact’s jnid to fetch full details.
     */
    CONTACT_GET: "JOBNIMBUS_CONTACT_GET",
    /**
     * Tool to list all contacts. use when you need to fetch multiple contacts, e.g., for reporting or synchronization.
     */
    CONTACT_LIST: "JOBNIMBUS_CONTACT_LIST",
    /**
     * Tool to create a new file attachment type. use when you need to register a custom document category before uploading files.
     */
    CREATE_FILE_TYPE: "JOBNIMBUS_CREATE_FILE_TYPE",
    /**
     * Tool to create a new material order (v2). use when you need to place a materials order for a contact after gathering item details.
     */
    CREATE_MATERIAL_ORDER: "JOBNIMBUS_CREATE_MATERIAL_ORDER",
    /**
     * Tool to create a new task. use when scheduling or tracking tasks linked to contacts or jobs.
     */
    CREATE_TASK: "JOBNIMBUS_CREATE_TASK",
    /**
     * Tool to create a new status in an existing workflow. use after confirming the workflow id to add specialized status entries like 'lead' or 'inspection'.
     */
    CREATE_WORKFLOW_STATUS: "JOBNIMBUS_CREATE_WORKFLOW_STATUS",
    /**
     * Tool to retrieve a specific file attachment's raw content by id.
     */
    FILE_GET: "JOBNIMBUS_FILE_GET",
    /**
     * Tool to retrieve account-wide settings (workflows, types, sources). use after authenticating to load or refresh workflow and source mappings.
     */
    JOBNIMBUS_ACCOUNT_GET_SETTINGS: "JOBNIMBUS_JOBNIMBUS_ACCOUNT_GET_SETTINGS",
    /**
     * Tool to update an existing contact. use when you have a contact's jnid and need to modify its fields. call after fetching or creating a contact.
     */
    JOBNIMBUS_CONTACT_UPDATE: "JOBNIMBUS_JOBNIMBUS_CONTACT_UPDATE",
    /**
     * Tool to list all tasks. use when you need an overview of tasks for planning or review.
     */
    JOBNIMBUS_TASK_LIST: "JOBNIMBUS_JOBNIMBUS_TASK_LIST",
    /**
     * Tool to retrieve all activities. use after authentication to fetch a paginated list of activities.
     */
    LIST_ACTIVITIES: "JOBNIMBUS_LIST_ACTIVITIES",
    /**
     * Tool to list all invoices (v2). use when you need to fetch multiple invoice records.
     */
    LIST_INVOICES: "JOBNIMBUS_LIST_INVOICES",
    /**
     * Tool to list all material orders (v2). use after authentication to fetch multiple material order records.
     */
    LIST_MATERIAL_ORDERS: "JOBNIMBUS_LIST_MATERIAL_ORDERS",
    /**
     * Tool to retrieve payments list with optional filters. use after auth.
     */
    LIST_PAYMENTS: "JOBNIMBUS_LIST_PAYMENTS",
    /**
     * Tool to list all products. use after authentication to fetch full product catalog.
     */
    LIST_PRODUCTS: "JOBNIMBUS_LIST_PRODUCTS",
    /**
     * Tool to retrieve all work orders (v2). use after authentication when you need a paginated list of work orders.
     */
    LIST_WORKORDERS: "JOBNIMBUS_LIST_WORKORDERS",
    /**
     * Tool to retrieve a specific product by id (v2). use after confirming the product's jnid to fetch its details.
     */
    PRODUCT_GET: "JOBNIMBUS_PRODUCT_GET",
    /**
     * Tool to update an existing task. use after confirming the task’s jnid and desired changes.
     */
    UPDATE_TASK: "JOBNIMBUS_UPDATE_TASK",
    /**
     * Tool to retrieve list of supported units of measure. use after authenticating when you need to present or validate measurement units.
     */
    UTILITY_GET_UOMS: "JOBNIMBUS_UTILITY_GET_UOMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "JOBNIMBUS".
 */
export type JOBNIMBUS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "JOBNIMBUS".
 */
export type JOBNIMBUS_TRIGGER_EVENTS = {}
