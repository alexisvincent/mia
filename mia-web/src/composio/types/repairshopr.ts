// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_APPOINTMENT tool input.
 */
type REPAIRSHOPR_DELETE_APPOINTMENT_INPUT = {
  /**
   * Id
   * @description The unique ID of the appointment to delete
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_APPOINTMENT tool output.
 */
type REPAIRSHOPR_DELETE_APPOINTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the result
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_CUSTOMER tool input.
 */
type REPAIRSHOPR_DELETE_CUSTOMER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the customer to delete
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_CUSTOMER tool output.
 */
type REPAIRSHOPR_DELETE_CUSTOMER_OUTPUT = {
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_ESTIMATE tool input.
 */
type REPAIRSHOPR_DELETE_ESTIMATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the estimate to delete
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_ESTIMATE tool output.
 */
type REPAIRSHOPR_DELETE_ESTIMATE_OUTPUT = {
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_INVOICE tool input.
 */
type REPAIRSHOPR_DELETE_INVOICE_INPUT = {
  /**
   * Id
   * @description ID of the invoice to delete
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_DELETE_INVOICE tool output.
 */
type REPAIRSHOPR_DELETE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the result
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_APPOINTMENT tool input.
 */
type REPAIRSHOPR_GET_APPOINTMENT_INPUT = {
  /**
   * Id
   * @description ID of the appointment to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_APPOINTMENT tool output.
 */
type REPAIRSHOPR_GET_APPOINTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when created (ISO 8601)
       */
      created_at: string;
      /**
       * Customer Id
       * @description ID of the associated customer
       */
      customer_id: number;
      /**
       * Description
       * @description Notes or description for the appointment
       * @default null
       */
      description: string | null;
      /**
       * End At
       * @description Scheduled end time (ISO 8601)
       */
      end_at: string;
      /**
       * Id
       * @description Appointment ID
       */
      id: number;
      /**
       * Lead Id
       * @description ID of the associated lead, if any
       * @default null
       */
      lead_id: number | null;
      /**
       * Start At
       * @description Scheduled start time (ISO 8601)
       */
      start_at: string;
      /**
       * Status
       * @description Current status of the appointment
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when updated (ISO 8601)
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the assigned user/technician
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_APPOINTMENTS tool input.
 */
type REPAIRSHOPR_GET_APPOINTMENTS_INPUT = {
  /**
   * Date From
   * @description Returns Appointments that start after the date. Format 'YYYY-MM-DD'.
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description Returns Appointments that start before the date. Format 'YYYY-MM-DD'.
   * @default null
   */
  date_to: string | null;
  /**
   * Mine
   * @description Return only current user's appointments.
   * @default null
   */
  mine: boolean | null;
  /**
   * Page
   * @description Returns provided page of results, each page contains 25 results.
   * @default null
   */
  page: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_APPOINTMENTS tool output.
 */
type REPAIRSHOPR_GET_APPOINTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Appointments */
      appointments: {
          /** Appointment */
          appointment: {
              /**
               * All Day
               * @default null
               */
              all_day: boolean | null;
              /**
               * Appointment Location Type
               * @default null
               */
              appointment_location_type: string | null;
              /** Created At */
              created_at: string;
              /** Customer */
              customer: {
                  /**
                   * Address
                   * @default null
                   */
                  address: string | null;
                  /**
                   * Address 2
                   * @default null
                   */
                  address_2: string | null;
                  /**
                   * Business And Full Name
                   * @default null
                   */
                  business_and_full_name: string | null;
                  /**
                   * Business Name
                   * @default null
                   */
                  business_name: string | null;
                  /**
                   * Business Then Name
                   * @default null
                   */
                  business_then_name: string | null;
                  /**
                   * City
                   * @default null
                   */
                  city: string | null;
                  /** Contacts */
                  contacts: unknown[];
                  /** Created At */
                  created_at: string;
                  /** Disabled */
                  disabled: boolean;
                  /**
                   * Email
                   * @default null
                   */
                  email: string | null;
                  /** Firstname */
                  firstname: string;
                  /** Fullname */
                  fullname: string;
                  /** Get Sms */
                  get_sms: boolean;
                  /**
                   * Id
                   * @description Customer ID.
                   */
                  id: number;
                  /**
                   * Invoice Cc Emails
                   * @default null
                   */
                  invoice_cc_emails: string | null;
                  /**
                   * Invoice Term Id
                   * @default null
                   */
                  invoice_term_id: number | null;
                  /** Lastname */
                  lastname: string;
                  /**
                   * Latitude
                   * @default null
                   */
                  latitude: number | null;
                  /**
                   * Location Id
                   * @default null
                   */
                  location_id: number | null;
                  /**
                   * Location Name
                   * @default null
                   */
                  location_name: string | null;
                  /**
                   * Longitude
                   * @default null
                   */
                  longitude: number | null;
                  /**
                   * Mobile
                   * @default null
                   */
                  mobile: string | null;
                  /** No Email */
                  no_email: boolean;
                  /**
                   * Notes
                   * @default null
                   */
                  notes: string | null;
                  /**
                   * Notification Email
                   * @default null
                   */
                  notification_email: string | null;
                  /** Online Profile Url */
                  online_profile_url: string;
                  /** Opt Out */
                  opt_out: boolean;
                  /**
                   * Pdf Url
                   * @default null
                   */
                  pdf_url: string | null;
                  /**
                   * Phone
                   * @default null
                   */
                  phone: string | null;
                  /** Properties */
                  properties: {
                      [key: string]: unknown;
                  };
                  /**
                   * Ref Customer Id
                   * @default null
                   */
                  ref_customer_id: number | null;
                  /**
                   * Referred By
                   * @default null
                   */
                  referred_by: string | null;
                  /**
                   * State
                   * @default null
                   */
                  state: string | null;
                  /**
                   * Tax Rate Id
                   * @default null
                   */
                  tax_rate_id: number | null;
                  /** Updated At */
                  updated_at: string;
                  /**
                   * Zip
                   * @default null
                   */
                  zip: string | null;
              };
              /** Customer Id */
              customer_id: number;
              /** Description */
              description: string;
              /** Do Not Email */
              do_not_email: string;
              /** Duration */
              duration: number;
              /** End At */
              end_at: string;
              /** Id */
              id: number;
              /** Location */
              location: string;
              /** Start At */
              start_at: string;
              /** Start At Label */
              start_at_label: string;
              /** Summary */
              summary: string;
              /**
               * Ticket
               * @default null
               */
              ticket: unknown;
              /**
               * Ticket Id
               * @default null
               */
              ticket_id: number | null;
              /** Updated At */
              updated_at: string;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ASSET tool input.
 */
type REPAIRSHOPR_GET_ASSET_INPUT = {
  /**
   * Id
   * @description The unique ID of the asset to retrieve. Single-Customer Users can only access their own assets.
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ASSET tool output.
 */
type REPAIRSHOPR_GET_ASSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description ID of the account that owns the asset.
       */
      account_id: number;
      /**
       * Asset Id
       * @description Asset's unique account-wide ID.
       */
      asset_id: number;
      /**
       * Created At
       * @description ISO8601 timestamp when the asset was created.
       */
      created_at: string;
      /**
       * Id
       * @description Asset record ID.
       */
      id: number;
      /**
       * Updated At
       * @description ISO8601 timestamp when the asset was last updated.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ASSETS tool input.
 */
type REPAIRSHOPR_GET_ASSETS_INPUT = {
  /**
   * Asset Type Id
   * @description Any assets attached to an Asset Type ID
   * @default null
   */
  asset_type_id: number | null;
  /**
   * Customer Id
   * @description Any assets attached to a Customer ID
   * @default null
   */
  customer_id: number | null;
  /**
   * Page
   * @description Returns provided page of results, each page contains 25 results
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query
   * @default null
   */
  query: string | null;
  /**
   * Snmp Enabled
   * @description Any assets with SNMP enabled
   * @default null
   */
  snmp_enabled: boolean | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ASSETS tool output.
 */
type REPAIRSHOPR_GET_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Assets */
      assets: {
          /** Address */
          address: {
              /** Account Id */
              account_id: number;
              /** Address1 */
              address1: string;
              /** Address2 */
              address2: string;
              /** Address Type Id */
              address_type_id: number;
              /** City */
              city: string;
              /** Created At */
              created_at: string;
              /** Customer Id */
              customer_id: number;
              /** Id */
              id: number;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Updated At */
              updated_at: string;
              /** Zip */
              zip: string;
          };
          /** Asset Serial */
          asset_serial: string;
          /** Asset Type */
          asset_type: string;
          /**
           * Contact Id
           * @default null
           */
          contact_id: number | null;
          /** Created At */
          created_at: string;
          /** Customer */
          customer: {
              /**
               * Address
               * @default null
               */
              address: string | null;
              /**
               * Address 2
               * @default null
               */
              address_2: string | null;
              /**
               * Business And Full Name
               * @default null
               */
              business_and_full_name: string | null;
              /**
               * Business Name
               * @default null
               */
              business_name: string | null;
              /**
               * Business Then Name
               * @default null
               */
              business_then_name: string | null;
              /**
               * City
               * @default null
               */
              city: string | null;
              /** Created At */
              created_at: string;
              /** Disabled */
              disabled: boolean;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Firstname */
              firstname: string;
              /** Fullname */
              fullname: string;
              /** Get Sms */
              get_sms: boolean;
              /**
               * Id
               * @description Customer ID.
               */
              id: number;
              /**
               * Invoice Cc Emails
               * @default null
               */
              invoice_cc_emails: string | null;
              /**
               * Invoice Term Id
               * @default null
               */
              invoice_term_id: number | null;
              /** Lastname */
              lastname: string;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Location Id
               * @default null
               */
              location_id: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
              /**
               * Mobile
               * @default null
               */
              mobile: string | null;
              /** No Email */
              no_email: boolean;
              /**
               * Notes
               * @default null
               */
              notes: string | null;
              /**
               * Notification Email
               * @default null
               */
              notification_email: string | null;
              /** Online Profile Url */
              online_profile_url: string;
              /** Opt Out */
              opt_out: boolean;
              /**
               * Pdf Url
               * @default null
               */
              pdf_url: string | null;
              /**
               * Phone
               * @default null
               */
              phone: string | null;
              /** Properties */
              properties: {
                  [key: string]: unknown;
              };
              /**
               * Ref Customer Id
               * @default null
               */
              ref_customer_id: number | null;
              /**
               * Referred By
               * @default null
               */
              referred_by: string | null;
              /**
               * State
               * @default null
               */
              state: string | null;
              /**
               * Tax Rate Id
               * @default null
               */
              tax_rate_id: number | null;
              /** Updated At */
              updated_at: string;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
          };
          /** Customer Id */
          customer_id: number;
          /**
           * External Rmm Link
           * @default null
           */
          external_rmm_link: string | null;
          /** Id */
          id: number;
          /** Name */
          name: string;
          /** Properties */
          properties: {
              [key: string]: unknown;
          };
          /** Rmm Links */
          rmm_links: unknown[];
          /** Rmm Store */
          rmm_store: {
              /** Account Id */
              account_id: number;
              /** Asset Id */
              asset_id: number;
              /** Created At */
              created_at: string;
              /** Emsisoft */
              emsisoft: {
                  [key: string]: unknown;
              };
              /** General */
              general: {
                  [key: string]: unknown;
              };
              /** Id */
              id: number;
              /**
               * Override Alert Agent Offline Mins
               * @default null
               */
              override_alert_agent_offline_mins: number | null;
              /**
               * Override Alert Agent Rearm After Mins
               * @default null
               */
              override_alert_agent_rearm_after_mins: number | null;
              /**
               * Override Autoresolve Offline Alert
               * @default null
               */
              override_autoresolve_offline_alert: number | null;
              /**
               * Override Low Hd Threshold
               * @default null
               */
              override_low_hd_threshold: number | null;
              /** Triggers */
              triggers: {
                  [key: string]: unknown;
              };
              /** Updated At */
              updated_at: string;
              /** Windows Updates */
              windows_updates: {
                  [key: string]: unknown;
              };
          };
          /** Updated At */
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CASE_ATTACHMENTS tool input.
 */
type REPAIRSHOPR_GET_CASE_ATTACHMENTS_INPUT = {
  /**
   * Case Id
   * @description ID of the service case to retrieve attachments for
   */
  case_id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CASE_ATTACHMENTS tool output.
 */
type REPAIRSHOPR_GET_CASE_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description List of attachments for the given service case
       */
      attachments: {
          /**
           * Created At
           * @description Timestamp when the attachment was added (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Attachment ID
           */
          id: number;
          /**
           * Name
           * @description Name of the attachment file
           */
          name: string;
          /**
           * Url
           * @description URL to access the attachment
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CONTACTS tool input.
 */
type REPAIRSHOPR_GET_CONTACTS_INPUT = {
  /**
   * Customer Id
   * @description Any contacts attached to a Customer ID.
   * @default null
   */
  customer_id: number | null;
  /**
   * Page
   * @description Page number of results (25 results per page).
   * @default null
   */
  page: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CONTACTS tool output.
 */
type REPAIRSHOPR_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of Contacts.
       */
      contacts: {
          /**
           * Account Id
           * @description Associated Account ID.
           */
          account_id: number;
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
           * @description City.
           * @default null
           */
          city: string | null;
          /**
           * Created At
           * @description Creation timestamp.
           */
          created_at: string;
          /**
           * Customer Id
           * @description Associated Customer ID.
           */
          customer_id: number;
          /**
           * Email
           * @description Email address.
           * @default null
           */
          email: string | null;
          /**
           * Extension
           * @description Phone extension if provided.
           * @default null
           */
          extension: string | null;
          /**
           * Id
           * @description Contact ID.
           */
          id: number;
          /**
           * Latitude
           * @description Latitude.
           * @default null
           */
          latitude: number | null;
          /**
           * Longitude
           * @description Longitude.
           * @default null
           */
          longitude: number | null;
          /**
           * Mobile
           * @description Mobile number.
           * @default null
           */
          mobile: string | null;
          /**
           * Name
           * @description Contact name.
           */
          name: string;
          /**
           * Notes
           * @description Notes.
           * @default null
           */
          notes: string | null;
          /**
           * Opt Out
           * @description Whether contact has opted out of marketing.
           */
          opt_out: boolean;
          /**
           * Phone
           * @description Phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Properties
           * @description Custom properties.
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * State
           * @description State.
           * @default null
           */
          state: string | null;
          /**
           * Updated At
           * @description Update timestamp.
           */
          updated_at: string;
          /**
           * Vendor Id
           * @description Associated Vendor ID if any.
           * @default null
           */
          vendor_id: number | null;
          /**
           * Zip
           * @description Postal code.
           * @default null
           */
          zip: string | null;
      }[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of entries per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CUSTOMER tool input.
 */
type REPAIRSHOPR_GET_CUSTOMER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the customer to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CUSTOMER tool output.
 */
type REPAIRSHOPR_GET_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Street address of the customer.
       * @default null
       */
      address: string | null;
      /**
       * Business Name
       * @description Business name associated with the customer, if applicable.
       * @default null
       */
      business_name: string | null;
      /**
       * City
       * @description City of the customer's address.
       * @default null
       */
      city: string | null;
      /**
       * Created At
       * @description Date and time when the customer record was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the customer.
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description First name of the customer.
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the customer.
       */
      id: number;
      /**
       * Lastname
       * @description Last name of the customer.
       */
      lastname: string;
      /**
       * Mobile
       * @description Mobile phone number of the customer.
       * @default null
       */
      mobile: string | null;
      /**
       * Phone
       * @description Primary phone number of the customer.
       * @default null
       */
      phone: string | null;
      /**
       * State
       * @description State of the customer's address.
       * @default null
       */
      state: string | null;
      /**
       * Updated At
       * @description Date and time when the customer record was last updated.
       */
      updated_at: string;
      /**
       * Zip
       * @description ZIP code of the customer's address.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CUSTOMERS tool input.
 */
type REPAIRSHOPR_GET_CUSTOMERS_INPUT = {
  /**
   * Business Name
   * @description Any customers with a business name like the parameter.
   * @default null
   */
  business_name: string | null;
  /**
   * Email
   * @description Filter customers by exact email address.
   * @default null
   */
  email: string | null;
  /**
   * Firstname
   * @description Any customers with a first name like the parameter.
   * @default null
   */
  firstname: string | null;
  /**
   * Id
   * @description Any customers with ID included in the list.
   * @default null
   */
  id: number[] | null;
  /**
   * Include Disabled
   * @description Whether or not the returned list of customers includes disabled customers.
   * @default null
   */
  include_disabled: boolean | null;
  /**
   * Lastname
   * @description Any customers with a last name like the parameter.
   * @default null
   */
  lastname: string | null;
  /**
   * Not Id
   * @description Any customers with ID not included in the list.
   * @default null
   */
  not_id: number[] | null;
  /**
   * Page
   * @description Returns provided page of results, each 'page' contains 25 results.
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query to filter customers by name or business.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description A customer field to order by. Examples 'firstname ASC', 'city DESC'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_CUSTOMERS tool output.
 */
type REPAIRSHOPR_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customers.
       */
      customers: {
          /**
           * Address
           * @description Address line 1 of the customer.
           * @default null
           */
          address: string | null;
          /**
           * Address 2
           * @description Address line 2 of the customer.
           * @default null
           */
          address_2: string | null;
          /**
           * Business And Full Name
           * @description Combined business and full name.
           * @default null
           */
          business_and_full_name: string | null;
          /**
           * Business Name
           * @description Business name, if any.
           * @default null
           */
          business_name: string | null;
          /**
           * Business Then Name
           * @description Business then full name display.
           * @default null
           */
          business_then_name: string | null;
          /**
           * City
           * @description City of the customer.
           * @default null
           */
          city: string | null;
          /**
           * Contacts
           * @description List of associated contacts.
           */
          contacts: unknown[];
          /**
           * Created At
           * @description Timestamp when the customer was created.
           */
          created_at: string;
          /**
           * Disabled
           * @description Whether the customer is disabled.
           */
          disabled: boolean;
          /**
           * Email
           * @description Email address of the customer.
           * @default null
           */
          email: string | null;
          /**
           * Firstname
           * @description First name of the customer.
           */
          firstname: string;
          /**
           * Fullname
           * @description Full name of the customer.
           */
          fullname: string;
          /**
           * Get Sms
           * @description Whether customer can receive SMS.
           */
          get_sms: boolean;
          /**
           * Id
           * @description Customer ID.
           */
          id: number;
          /**
           * Invoice Cc Emails
           * @description CC emails for invoices.
           * @default null
           */
          invoice_cc_emails: string | null;
          /**
           * Invoice Term Id
           * @description Default invoice term ID.
           * @default null
           */
          invoice_term_id: number | null;
          /**
           * Lastname
           * @description Last name of the customer.
           */
          lastname: string;
          /**
           * Latitude
           * @description Latitude coordinate of the customer's address.
           * @default null
           */
          latitude: number | null;
          /**
           * Location Id
           * @description ID of the customer's location.
           * @default null
           */
          location_id: number | null;
          /**
           * Location Name
           * @description Name of the customer's location.
           * @default null
           */
          location_name: string | null;
          /**
           * Longitude
           * @description Longitude coordinate of the customer's address.
           * @default null
           */
          longitude: number | null;
          /**
           * Mobile
           * @description Mobile phone number of the customer.
           * @default null
           */
          mobile: string | null;
          /**
           * No Email
           * @description Whether the customer receives no emails.
           */
          no_email: boolean;
          /**
           * Notes
           * @description Additional notes about the customer.
           * @default null
           */
          notes: string | null;
          /**
           * Notification Email
           * @description Email used for notifications.
           * @default null
           */
          notification_email: string | null;
          /**
           * Online Profile Url
           * @description URL to the customer's online profile.
           */
          online_profile_url: string;
          /**
           * Opt Out
           * @description Whether customer has opted out of communications.
           */
          opt_out: boolean;
          /**
           * Pdf Url
           * @description URL to customer PDF, if available.
           * @default null
           */
          pdf_url: string | null;
          /**
           * Phone
           * @description Phone number of the customer.
           * @default null
           */
          phone: string | null;
          /**
           * Properties
           * @description Arbitrary properties object.
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Ref Customer Id
           * @description Reference customer ID.
           * @default null
           */
          ref_customer_id: number | null;
          /**
           * Referred By
           * @description Source or referral of the customer.
           * @default null
           */
          referred_by: string | null;
          /**
           * State
           * @description State of the customer.
           * @default null
           */
          state: string | null;
          /**
           * Tax Rate Id
           * @description Default tax rate ID for the customer.
           * @default null
           */
          tax_rate_id: number | null;
          /**
           * Updated At
           * @description Timestamp when the customer was last updated.
           */
          updated_at: string;
          /**
           * Zip
           * @description ZIP code of the customer.
           * @default null
           */
          zip: string | null;
      }[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of entries per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK tool input.
 */
type REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK_INPUT = {
  /**
   * User Id
   * @description ID of the user to retrieve the last time clock entry for. Defaults to current user if omitted.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK tool output.
 */
type REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the time log entry.
       */
      account_id: number;
      /**
       * Created At
       * @description Timestamp when the time log entry was created (ISO 8601).
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the time log entry.
       */
      id: number;
      /**
       * In At
       * @description Timestamp when the user clocked in (ISO 8601).
       */
      in_at: string;
      /**
       * In Note
       * @description Note entered at clock in, if any.
       * @default null
       */
      in_note: string | null;
      /**
       * Lunch
       * @description Lunch duration in minutes, if recorded.
       * @default null
       */
      lunch: number | null;
      /**
       * Manually Updated
       * @description Whether this entry was manually updated.
       * @default null
       */
      manually_updated: boolean | null;
      /**
       * Out At
       * @description Timestamp when the user clocked out (ISO 8601), if clocked out.
       * @default null
       */
      out_at: string | null;
      /**
       * Out Note
       * @description Note entered at clock out, if any.
       * @default null
       */
      out_note: string | null;
      /**
       * Updated At
       * @description Timestamp when the time log entry was last updated (ISO 8601).
       */
      updated_at: string;
      /**
       * User Id
       * @description User ID associated with the time log entry.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ESTIMATE tool input.
 */
type REPAIRSHOPR_GET_ESTIMATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the estimate to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ESTIMATE tool output.
 */
type REPAIRSHOPR_GET_ESTIMATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the estimate was created (ISO 8601)
       */
      created_at: string;
      /**
       * Customer Id
       * @description ID of the customer associated with the estimate
       */
      customer_id: number;
      /**
       * Description
       * @description Notes or additional description for the estimate
       * @default null
       */
      description: string | null;
      /**
       * Discount
       * @description Discount amount applied to the estimate
       */
      discount: number;
      /**
       * Expiration Date
       * @description Expiration date of the estimate (YYYY-MM-DD)
       * @default null
       */
      expiration_date: string | null;
      /**
       * Id
       * @description Unique identifier of the estimate
       */
      id: number;
      /**
       * Line Items
       * @description List of line items included in the estimate
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
           * @description Unique identifier of the line item
           */
          id: number;
          /**
           * Product Id
           * @description ID of the product or service
           */
          product_id: number;
          /**
           * Quantity
           * @description Quantity of the item
           */
          quantity: number;
          /**
           * Total
           * @description Total price for the line item
           */
          total: number;
          /**
           * Unit Price
           * @description Price per unit of the item
           */
          unit_price: number;
      }[];
      /**
       * Number
       * @description Estimate number
       */
      number: string;
      /**
       * Status
       * @description Current status of the estimate (e.g., 'Open', 'Approved', 'Declined')
       */
      status: string;
      /**
       * Subtotal
       * @description Subtotal amount of the estimate
       */
      subtotal: number;
      /**
       * Tax
       * @description Tax amount applied to the estimate
       */
      tax: number;
      /**
       * Total
       * @description Total amount of the estimate
       */
      total: number;
      /**
       * Updated At
       * @description Timestamp when the estimate was last updated (ISO 8601)
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ESTIMATES tool input.
 */
type REPAIRSHOPR_GET_ESTIMATES_INPUT = {
  /**
   * Customer Id
   * @description Filter estimates by this customer ID
   * @default null
   */
  customer_id: number | null;
  /**
   * Page
   * @description Page number for paginated results
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_ESTIMATES tool output.
 */
type REPAIRSHOPR_GET_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Estimates
       * @description List of estimates returned by the API
       */
      estimates: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the estimate was created
           */
          created_at: string;
          /**
           * Customer Id
           * @description ID of the customer associated with the estimate
           */
          customer_id: number;
          /**
           * Id
           * @description Unique identifier of the estimate
           */
          id: number;
          /**
           * Status
           * @description Current status of the estimate (e.g., 'draft', 'sent')
           */
          status: string;
          /**
           * Total
           * @description Total amount of the estimate
           */
          total: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the estimate was last updated
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_INVOICE tool input.
 */
type REPAIRSHOPR_GET_INVOICE_INPUT = {
  /**
   * Id
   * @description ID or number of the invoice to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_INVOICE tool output.
 */
type REPAIRSHOPR_GET_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description Primary contact identifier for the invoice.
       */
      contact_id: number;
      /**
       * Created At
       * @description Creation timestamp of the invoice (ISO 8601).
       */
      created_at: string;
      /**
       * Customer
       * @description Customer snapshot for the invoice.
       */
      customer: {
          /**
           * Address
           * @description Street address of the customer.
           */
          address: string;
          /**
           * Address 2
           * @description Secondary address line of the customer.
           */
          address_2: string;
          /**
           * Business And Full Name
           * @description Combined business and full name of the customer.
           */
          business_and_full_name: string;
          /**
           * Business Name
           * @description Business name of the customer.
           */
          business_name: string;
          /**
           * Business Then Name
           * @description Business then full name of the customer.
           */
          business_then_name: string;
          /**
           * City
           * @description City of the customer address.
           */
          city: string;
          /**
           * Contacts
           * @description List of contact emails for the customer.
           */
          contacts: {
              /**
               * Email
               * @description Email address of the contact.
               */
              email: string;
          }[];
          /**
           * Created At
           * @description Record creation timestamp.
           */
          created_at: string;
          /**
           * Disabled
           * @description Customer account is disabled.
           */
          disabled: boolean;
          /**
           * Email
           * @description Email address of the customer.
           */
          email: string;
          /**
           * Firstname
           * @description First name of the customer.
           */
          firstname: string;
          /**
           * Fullname
           * @description Full name of the customer.
           */
          fullname: string;
          /**
           * Get Sms
           * @description Customer has SMS enabled.
           */
          get_sms: boolean;
          /**
           * Id
           * @description Unique identifier of the customer.
           */
          id: number;
          /**
           * Invoice Cc Emails
           * @description CC emails for invoices.
           */
          invoice_cc_emails: string;
          /**
           * Invoice Term Id
           * @description Payment term identifier for invoices.
           */
          invoice_term_id: number;
          /**
           * Lastname
           * @description Last name of the customer.
           */
          lastname: string;
          /**
           * Latitude
           * @description Latitude coordinate of the customer address.
           */
          latitude: string;
          /**
           * Location Id
           * @description Location identifier of the customer.
           */
          location_id: number;
          /**
           * Location Name
           * @description Name of the customer's location.
           */
          location_name: string;
          /**
           * Longitude
           * @description Longitude coordinate of the customer address.
           */
          longitude: string;
          /**
           * Mobile
           * @description Mobile number of the customer.
           */
          mobile: string;
          /**
           * No Email
           * @description Customer will not receive emails.
           */
          no_email: boolean;
          /**
           * Notes
           * @description Additional notes about the customer.
           */
          notes: string;
          /**
           * Notification Email
           * @description Notification email for the customer.
           */
          notification_email: string;
          /**
           * Online Profile Url
           * @description URL to the customer's online profile.
           */
          online_profile_url: string;
          /**
           * Opt Out
           * @description Customer has opted out of marketing.
           */
          opt_out: boolean;
          /**
           * Pdf Url
           * @description PDF URL of the customer profile.
           */
          pdf_url: string;
          /**
           * Phone
           * @description Phone number of the customer.
           */
          phone: string;
          /**
           * Properties
           * @description Additional properties as key-value pairs.
           */
          properties: {
              [key: string]: string;
          };
          /**
           * Ref Customer Id
           * @description Original customer ID if referred.
           */
          ref_customer_id: number;
          /**
           * Referred By
           * @description Referrer for the customer.
           */
          referred_by: string;
          /**
           * State
           * @description State of the customer address.
           */
          state: string;
          /**
           * Tax Rate Id
           * @description Tax rate identifier for the customer.
           */
          tax_rate_id: number;
          /**
           * Updated At
           * @description Record last updated timestamp.
           */
          updated_at: string;
          /**
           * Zip
           * @description ZIP code of the customer address.
           */
          zip: string;
      };
      /**
       * Customer Business Then Name
       * @description Customer business-then name snapshot.
       */
      customer_business_then_name: string;
      /**
       * Date
       * @description Issue date of the invoice (ISO 8601).
       */
      date: string;
      /**
       * Date Received
       * @description Date the invoice was received (ISO 8601).
       */
      date_received: string;
      /**
       * Due Date
       * @description Due date of the invoice (YYYY-MM-DD).
       */
      due_date: string;
      /**
       * Hardwarecost
       * @description Hardware cost amount.
       */
      hardwarecost: number;
      /**
       * Id
       * @description Unique identifier of the invoice.
       */
      id: number;
      /**
       * Is Paid
       * @description Whether the invoice is fully paid.
       */
      is_paid: boolean;
      /**
       * Line Items
       * @description List of line items on the invoice.
       */
      line_items: {
          /**
           * Item
           * @description Identifier or SKU of the line item.
           */
          item: string;
          /**
           * Name
           * @description Display name of the line item.
           */
          name: string;
      }[];
      /**
       * Location Id
       * @description Location identifier for the invoice.
       */
      location_id: number;
      /**
       * Note
       * @description Additional notes on the invoice.
       */
      note: string;
      /**
       * Number
       * @description Invoice number.
       */
      number: string;
      /**
       * Payments
       * @description List of payments applied to the invoice.
       */
      payments: {
          /**
           * Id
           * @description Identifier of the payment.
           */
          id: number;
      }[];
      /**
       * Pdf Url
       * @description PDF URL for the invoice.
       */
      pdf_url: string;
      /**
       * Po Number
       * @description Purchase order number.
       */
      po_number: string;
      /**
       * Subtotal
       * @description Subtotal amount as string.
       */
      subtotal: string;
      /**
       * Tax
       * @description Tax amount as string.
       */
      tax: string;
      /**
       * Tech Marked Paid
       * @description Whether a technician marked the invoice as paid.
       */
      tech_marked_paid: boolean;
      /**
       * Ticket Id
       * @description Associated ticket identifier.
       */
      ticket_id: number;
      /**
       * Total
       * @description Total amount as string.
       */
      total: string;
      /**
       * Updated At
       * @description Last update timestamp of the invoice (ISO 8601).
       */
      updated_at: string;
      /**
       * User Id
       * @description User identifier who created the invoice.
       */
      user_id: number;
      /**
       * Verified Paid
       * @description Whether payment is verified.
       */
      verified_paid: boolean;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_INVOICES tool input.
 */
type REPAIRSHOPR_GET_INVOICES_INPUT = {
  /**
   * Page
   * @description Returns provided page of results, each page contains 25 results
   * @default null
   */
  page: number | null;
  /**
   * Paid
   * @description Whether or not the returned list of invoices has been marked as paid
   * @default null
   */
  paid: boolean | null;
  /**
   * Since Updated At
   * @description Return invoices updated since this date. Format 'YYYY-MM-DDTHH:MM:SSZ' (ISO 8601)
   * @default null
   */
  since_updated_at: string | null;
  /**
   * Ticket Id
   * @description Filter invoices attached to this Ticket ID
   * @default null
   */
  ticket_id: number | null;
  /**
   * Unpaid
   * @description Whether or not the returned list of invoices has been marked as unpaid
   * @default null
   */
  unpaid: boolean | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_INVOICES tool output.
 */
type REPAIRSHOPR_GET_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoices
       * @description List of invoices
       */
      invoices: {
          /**
           * Contact Id
           * @description Primary contact ID for the invoice
           * @default null
           */
          contact_id: number | null;
          /**
           * Created At
           * @description Timestamp when the invoice was created (ISO 8601)
           */
          created_at: string;
          /**
           * Customer Business Then Name
           * @description Snapshot of customer's business and name at invoice creation
           */
          customer_business_then_name: string;
          /**
           * Customer Id
           * @description Associated customer ID
           */
          customer_id: number;
          /**
           * Date
           * @description Invoice date (ISO 8601)
           */
          date: string;
          /**
           * Due Date
           * @description Invoice due date (ISO 8601)
           */
          due_date: string;
          /**
           * Hardwarecost
           * @description Hardware cost amount if any
           * @default null
           */
          hardwarecost: number | null;
          /**
           * Id
           * @description Invoice ID
           */
          id: number;
          /**
           * Is Paid
           * @description Whether the invoice is fully paid
           */
          is_paid: boolean;
          /**
           * Location Id
           * @description Location ID associated with the invoice
           * @default null
           */
          location_id: number | null;
          /**
           * Note
           * @description Additional notes on the invoice
           * @default null
           */
          note: string | null;
          /**
           * Number
           * @description Invoice number
           */
          number: string;
          /**
           * Pdf Url
           * @description URL to the invoice PDF if generated
           * @default null
           */
          pdf_url: string | null;
          /**
           * Po Number
           * @description Purchase order number if provided
           * @default null
           */
          po_number: string | null;
          /**
           * Subtotal
           * @description Subtotal amount as string
           */
          subtotal: string;
          /**
           * Tax
           * @description Tax amount as string
           */
          tax: string;
          /**
           * Tech Marked Paid
           * @description Whether a technician marked the invoice as paid
           */
          tech_marked_paid: boolean;
          /**
           * Ticket Id
           * @description Associated ticket ID if any
           * @default null
           */
          ticket_id: number | null;
          /**
           * Total
           * @description Total amount as string
           */
          total: string;
          /**
           * Updated At
           * @description Timestamp when the invoice was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID who created the invoice
           * @default null
           */
          user_id: number | null;
          /**
           * Verified Paid
           * @description Whether payment is verified
           */
          verified_paid: boolean;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Page
           * @description Current page number returned
           */
          page: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_LEAD tool input.
 */
type REPAIRSHOPR_GET_LEAD_INPUT = {
  /**
   * Id
   * @description The unique identifier of the lead to retrieve.
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_LEAD tool output.
 */
type REPAIRSHOPR_GET_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Street address of the lead.
       * @default null
       */
      address: string | null;
      /**
       * Business Then Name
       * @description Business then name of the lead.
       * @default null
       */
      business_then_name: string | null;
      /**
       * City
       * @description City of the lead.
       * @default null
       */
      city: string | null;
      /**
       * Contact Id
       * @description Associated contact ID, if any.
       * @default null
       */
      contact_id: number | null;
      /**
       * Created At
       * @description ISO8601 timestamp when the lead was created.
       */
      created_at: string;
      /**
       * Customer Id
       * @description Associated customer ID, if any.
       * @default null
       */
      customer_id: number | null;
      /**
       * Email
       * @description Email address of the lead.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the lead.
       */
      first_name: string;
      /**
       * Has Attachments
       * @description Whether the lead has attachments.
       * @default null
       */
      has_attachments: boolean | null;
      /**
       * Id
       * @description Unique identifier of the lead.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the lead.
       */
      last_name: string;
      /**
       * Location Id
       * @description Location ID associated with the lead.
       * @default null
       */
      location_id: number | null;
      /**
       * Mailbox Id
       * @description Mailbox ID if any.
       * @default null
       */
      mailbox_id: number | null;
      /**
       * Mailbox Name
       * @description Name of the mailbox if any.
       * @default null
       */
      mailbox_name: string | null;
      /**
       * Message Read
       * @description Whether the lead message is read.
       * @default null
       */
      message_read: boolean | null;
      /**
       * Mobile
       * @description Mobile number of the lead.
       * @default null
       */
      mobile: string | null;
      /**
       * Phone
       * @description Phone number of the lead.
       * @default null
       */
      phone: string | null;
      /**
       * State
       * @description State of the lead.
       * @default null
       */
      state: string | null;
      /**
       * Status
       * @description Status of the lead.
       */
      status: string;
      /**
       * Ticket Description
       * @description Description of the associated ticket, if any.
       * @default null
       */
      ticket_description: string | null;
      /**
       * Ticket Id
       * @description Associated ticket ID, if any.
       * @default null
       */
      ticket_id: number | null;
      /**
       * Ticket Problem Type
       * @description Problem type of the associated ticket, if any.
       * @default null
       */
      ticket_problem_type: string | null;
      /**
       * Ticket Subject
       * @description Subject of the associated ticket, if any.
       * @default null
       */
      ticket_subject: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the lead was last updated.
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the user assigned to the lead.
       * @default null
       */
      user_id: number | null;
      /**
       * Zip
       * @description ZIP code of the lead.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_LEADS tool input.
 */
type REPAIRSHOPR_GET_LEADS_INPUT = {
  /**
   * Page
   * @description Returns provided page of results, each page contains 25 leads.
   * @default null
   */
  page: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_LEADS tool output.
 */
type REPAIRSHOPR_GET_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of leads.
       */
      leads: {
          /**
           * Business Name
           * @description Business name associated with the lead.
           * @default null
           */
          business_name: string | null;
          /**
           * Created At
           * @description Timestamp when the lead was created.
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the lead.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the lead.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Lead ID.
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the lead.
           * @default null
           */
          last_name: string | null;
          /**
           * Phone
           * @description Phone number of the lead.
           * @default null
           */
          phone: string | null;
          /**
           * Status
           * @description Current status of the lead.
           * @default null
           */
          status: string | null;
          /**
           * Updated At
           * @description Timestamp when the lead was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of entries per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PAYMENT tool input.
 */
type REPAIRSHOPR_GET_PAYMENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the payment to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PAYMENT tool output.
 */
type REPAIRSHOPR_GET_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount of the payment
       */
      amount: number;
      /**
       * Customer Id
       * @description ID of the customer associated with the payment
       */
      customer_id: number;
      /**
       * Date
       * @description Date when the payment was made (ISO 8601 format)
       */
      date: string;
      /**
       * Id
       * @description Unique identifier of the payment
       */
      id: number;
      /**
       * Invoice Id
       * @description ID of the invoice associated with the payment
       */
      invoice_id: number;
      /**
       * Notes
       * @description Additional notes related to the payment
       * @default null
       */
      notes: string | null;
      /**
       * Payment Method
       * @description Method used for the payment (e.g., Credit Card, Cash)
       */
      payment_method: string;
      /**
       * Reference Number
       * @description Reference number associated with the payment
       * @default null
       */
      reference_number: string | null;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PAYMENTS tool input.
 */
type REPAIRSHOPR_GET_PAYMENTS_INPUT = {
  /**
   * Page
   * @description Page number of results to return, each page contains 25 results.
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query to filter payments by invoice number, customer name, or reference number.
   * @default null
   */
  query: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PAYMENTS tool output.
 */
type REPAIRSHOPR_GET_PAYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Meta */
      meta: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /** Payments */
      payments: {
          /**
           * Applied At
           * @description Date when payment was applied (ISO 8601 format).
           */
          applied_at: string;
          /** Created At */
          created_at: string;
          /** Customer */
          customer: {
              /**
               * Address
               * @default null
               */
              address: string | null;
              /**
               * Address 2
               * @default null
               */
              address_2: string | null;
              /**
               * Business And Full Name
               * @default null
               */
              business_and_full_name: string | null;
              /**
               * Business Name
               * @default null
               */
              business_name: string | null;
              /**
               * Business Then Name
               * @default null
               */
              business_then_name: string | null;
              /**
               * City
               * @default null
               */
              city: string | null;
              /** Contacts */
              contacts: unknown[];
              /** Created At */
              created_at: string;
              /** Disabled */
              disabled: boolean;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Firstname */
              firstname: string;
              /** Fullname */
              fullname: string;
              /** Get Sms */
              get_sms: boolean;
              /**
               * Id
               * @description Customer ID.
               */
              id: number;
              /**
               * Invoice Cc Emails
               * @default null
               */
              invoice_cc_emails: string | null;
              /**
               * Invoice Term Id
               * @default null
               */
              invoice_term_id: number | null;
              /** Lastname */
              lastname: string;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Location Id
               * @default null
               */
              location_id: number | null;
              /**
               * Location Name
               * @default null
               */
              location_name: string | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
              /**
               * Mobile
               * @default null
               */
              mobile: string | null;
              /** No Email */
              no_email: boolean;
              /**
               * Notes
               * @default null
               */
              notes: string | null;
              /**
               * Notification Email
               * @default null
               */
              notification_email: string | null;
              /** Online Profile Url */
              online_profile_url: string;
              /** Opt Out */
              opt_out: boolean;
              /**
               * Pdf Url
               * @default null
               */
              pdf_url: string | null;
              /**
               * Phone
               * @default null
               */
              phone: string | null;
              /** Properties */
              properties: {
                  [key: string]: unknown;
              };
              /**
               * Ref Customer Id
               * @default null
               */
              ref_customer_id: number | null;
              /**
               * Referred By
               * @default null
               */
              referred_by: string | null;
              /**
               * State
               * @default null
               */
              state: string | null;
              /**
               * Tax Rate Id
               * @default null
               */
              tax_rate_id: number | null;
              /** Updated At */
              updated_at: string;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
          };
          /** Id */
          id: number;
          /** Invoice Ids */
          invoice_ids: (number | null)[];
          /**
           * Payment Amount
           * @description Amount applied in payment.
           */
          payment_amount: number;
          /**
           * Payment Method
           * @description Payment method name (e.g. 'Credit Card', 'Check').
           */
          payment_method: string;
          /**
           * Ref Num
           * @description Reference number for the payment (e.g., check number).
           * @default null
           */
          ref_num: string | null;
          /**
           * Signature Date
           * @default null
           */
          signature_date: string | null;
          /** Success */
          success: boolean;
          /**
           * Transaction Response
           * @default null
           */
          transaction_response: {
              [key: string]: unknown;
          } | null;
          /** Updated At */
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCT tool input.
 */
type REPAIRSHOPR_GET_PRODUCT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the product to retrieve.
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCT tool output.
 */
type REPAIRSHOPR_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category Id
       * @description Identifier of the category this product belongs to.
       */
      category_id: number;
      /**
       * Cost
       * @description Cost of the product.
       */
      cost: number;
      /**
       * Created At
       * @description ISO8601 timestamp when the product was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the product, if provided.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the product.
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
       * Quantity
       * @description Available quantity of the product.
       */
      quantity: number;
      /**
       * Updated At
       * @description ISO8601 timestamp when the product was last updated.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCTS tool input.
 */
type REPAIRSHOPR_GET_PRODUCTS_INPUT = {
  /**
   * Category Id
   * @description Filter products by category ID.
   * @default null
   */
  category_id: number | null;
  /**
   * Id
   * @description Include only products with IDs in this list.
   * @default null
   */
  id: number[] | null;
  /**
   * Id Not
   * @description Exclude products with IDs in this list.
   * @default null
   */
  id_not: number[] | null;
  /**
   * Name
   * @description Filter products whose name matches the given string.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to return, each page contains 25 results.
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query to filter products.
   * @default null
   */
  query: string | null;
  /**
   * Sku
   * @description Filter products by exact SKU.
   * @default null
   */
  sku: string | null;
  /**
   * Sort
   * @description A Product field to order by. Example 'name ASC'.
   * @default null
   */
  sort: string | null;
  /**
   * Upc Code
   * @description Filter products whose UPC code matches the given string.
   * @default null
   */
  upc_code: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCTS tool output.
 */
type REPAIRSHOPR_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Products
       * @description List of products.
       */
      products: {
          /**
           * Category Path
           * @description Full category path (if any).
           * @default null
           */
          category_path: string | null;
          /**
           * Condition
           * @description Condition of the product (if any).
           * @default null
           */
          condition: string | null;
          /**
           * Description
           * @description Short description of the product.
           */
          description: string;
          /**
           * Desired Stock Level
           * @description Desired stock level quantity.
           * @default null
           */
          desired_stock_level: number | null;
          /**
           * Disabled
           * @description Whether the product is disabled.
           */
          disabled: boolean;
          /**
           * Discount Percent
           * @description Discount percentage applied (if any).
           * @default null
           */
          discount_percent: number | null;
          /**
           * Id
           * @description Unique identifier of the product.
           */
          id: number;
          /**
           * Location Quantities
           * @description List of location-specific quantity objects.
           */
          location_quantities: {
              [key: string]: unknown;
          }[];
          /**
           * Long Description
           * @description Extended description (if any).
           * @default null
           */
          long_description: string | null;
          /**
           * Maintain Stock
           * @description Whether the product maintains stock levels.
           */
          maintain_stock: boolean;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Notes
           * @description Additional notes about the product.
           * @default null
           */
          notes: string | null;
          /**
           * Photos
           * @description List of photo objects for the product.
           */
          photos: {
              [key: string]: unknown;
          }[];
          /**
           * Physical Location
           * @description Physical storage location (if any).
           * @default null
           */
          physical_location: string | null;
          /**
           * Price Cost
           * @description Cost price of the product.
           */
          price_cost: number;
          /**
           * Price Retail
           * @description Retail price of the product.
           */
          price_retail: number;
          /**
           * Price Wholesale
           * @description Wholesale price of the product.
           */
          price_wholesale: number;
          /**
           * Product Category
           * @description Category object of the product (if any).
           * @default null
           */
          product_category: {
              [key: string]: unknown;
          } | null;
          /**
           * Qb Item Id
           * @description Associated QuickBooks item ID.
           */
          qb_item_id: number;
          /**
           * Quantity
           * @description Current quantity in stock.
           */
          quantity: number;
          /**
           * Reorder At
           * @description Reorder threshold quantity (if any).
           * @default null
           */
          reorder_at: number | null;
          /**
           * Serialized
           * @description Whether the product is serialized.
           */
          serialized: boolean;
          /**
           * Sort Order
           * @description Sort order index (if any).
           * @default null
           */
          sort_order: number | null;
          /**
           * Tax Rate Id
           * @description Default tax rate ID (if any).
           * @default null
           */
          tax_rate_id: number | null;
          /**
           * Taxable
           * @description Whether the product is taxable.
           */
          taxable: boolean;
          /**
           * Upc Code
           * @description UPC code of the product (if any).
           * @default null
           */
          upc_code: string | null;
          /**
           * Vendor Ids
           * @description List of vendor IDs associated with the product.
           */
          vendor_ids: number[];
          /**
           * Warranty
           * @description Warranty information (if any).
           * @default null
           */
          warranty: string | null;
          /**
           * Warranty Template Id
           * @description Warranty template ID (if any).
           * @default null
           */
          warranty_template_id: number | null;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY tool input.
 */
type REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description Filter products by the specified category ID.
   */
  category_id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY tool output.
 */
type REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Products
       * @description List of products returned by the API.
       */
      products: {
          /**
           * Category Id
           * @description ID of the category the product belongs to.
           */
          category_id: number;
          /**
           * Created At
           * @description Timestamp when the product was created.
           */
          created_at: string;
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
          id: number;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Price
           * @description Selling price of the product.
           */
          price: number;
          /**
           * Quantity
           * @description Available stock quantity of the product.
           * @default null
           */
          quantity: number | null;
          /**
           * Sku
           * @description Stock keeping unit identifier for the product.
           * @default null
           */
          sku: string | null;
          /**
           * Updated At
           * @description Timestamp when the product was last updated.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCTS_CATEGORIES tool input.
 */
type REPAIRSHOPR_GET_PRODUCTS_CATEGORIES_INPUT = object;

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCTS_CATEGORIES tool output.
 */
type REPAIRSHOPR_GET_PRODUCTS_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of product categories.
       */
      categories: {
          /**
           * Account Id
           * @description Account ID associated with the category.
           */
          account_id: number;
          /**
           * Ancestry
           * @description Ancestry of the category in hierarchical format, if any.
           * @default null
           */
          ancestry: string | null;
          /**
           * Description
           * @description Description of the category.
           */
          description: string;
          /**
           * Device Product Id
           * @description Associated device product ID if applicable.
           * @default null
           */
          device_product_id: number | null;
          /**
           * Id
           * @description Unique identifier of the category.
           */
          id: number;
          /**
           * Name
           * @description Name of the category.
           */
          name: string;
          /**
           * Names Depth Cache
           * @description Cached comma-separated path of category names.
           */
          names_depth_cache: string;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCT_SERIALS tool input.
 */
type REPAIRSHOPR_GET_PRODUCT_SERIALS_INPUT = {
  /**
   * Id
   * @description The unique identifier of the product to retrieve serials for.
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_PRODUCT_SERIALS tool output.
 */
type REPAIRSHOPR_GET_PRODUCT_SERIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Serials
       * @description List of serial records for the product.
       */
      serials: {
          /**
           * Available
           * @description Availability status of the serial.
           */
          available: boolean;
          /**
           * Created At
           * @description ISO8601 timestamp when the serial record was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique serial record ID.
           */
          id: number;
          /**
           * Product Id
           * @description The ID of the product.
           */
          product_id: number;
          /**
           * Serial
           * @description The serial number of the product.
           */
          serial: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the serial record was last updated.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_TICKET tool input.
 */
type REPAIRSHOPR_GET_TICKET_INPUT = {
  /**
   * Id
   * @description ID of the ticket to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_TICKET tool output.
 */
type REPAIRSHOPR_GET_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned To
       * @description ID of the technician or staff assigned to the ticket
       * @default null
       */
      assigned_to: number | null;
      /**
       * Attachments
       * @description List of files attached to the ticket
       */
      attachments: {
          /**
           * Filename
           * @description Name of the attached file
           */
          filename: string;
          /**
           * Id
           * @description Attachment ID
           */
          id: number;
          /**
           * Url
           * @description URL to access the attachment
           */
          url: string;
      }[];
      /**
       * Comments
       * @description List of comments on the ticket
       */
      comments: {
          /**
           * Author Id
           * @description ID of the user who made the comment
           */
          author_id: number;
          /**
           * Content
           * @description Text content of the comment
           */
          content: string;
          /**
           * Created At
           * @description Timestamp when the comment was added (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Comment ID
           */
          id: number;
      }[];
      /**
       * Created At
       * @description Timestamp when the ticket was created (ISO 8601)
       */
      created_at: string;
      /**
       * Customer Id
       * @description ID of the customer associated with the ticket
       */
      customer_id: number;
      /**
       * Description
       * @description Detailed description of the ticket issue
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date for resolving the ticket (ISO 8601)
       * @default null
       */
      due_date: string | null;
      /**
       * Id
       * @description Ticket ID
       */
      id: number;
      /**
       * Priority
       * @description Priority level of the ticket
       */
      priority: string;
      /**
       * Status
       * @description Current status of the ticket
       */
      status: string;
      /**
       * Subject
       * @description Subject or title of the ticket
       */
      subject: string;
      /**
       * Tags
       * @description Tags associated with the ticket
       */
      tags: string[];
      /**
       * Updated At
       * @description Timestamp when the ticket was last updated (ISO 8601)
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_USER tool input.
 */
type REPAIRSHOPR_GET_USER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the user to retrieve
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_USER tool output.
 */
type REPAIRSHOPR_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created (ISO 8601).
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description First name of the user.
       */
      first_name: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the user.
       */
      last_name: string;
      /**
       * Phone
       * @description Phone number of the user.
       * @default null
       */
      phone: string | null;
      /**
       * Role
       * @description Role assigned to the user.
       * @default null
       */
      role: string | null;
      /**
       * Updated At
       * @description Timestamp when the user was last updated (ISO 8601).
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_USERS tool input.
 */
type REPAIRSHOPR_GET_USERS_INPUT = object;

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_GET_USERS tool output.
 */
type REPAIRSHOPR_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users.
       */
      users: {
          /**
           * Id
           * @description User ID.
           */
          id: number;
          /**
           * Name
           * @description User name.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_APPOINTMENT tool input.
 */
type REPAIRSHOPR_POST_APPOINTMENT_INPUT = {
  /**
   * All Day
   * @description If true, marks the appointment as all day
   * @default null
   */
  all_day: boolean | null;
  /**
   * Appointment Duration
   * @description Duration string, e.g., '4h'
   * @default null
   */
  appointment_duration: string | null;
  /**
   * Appointment Type Id
   * @description ID of the appointment type
   * @default null
   */
  appointment_type_id: number | null;
  /**
   * Customer Id
   * @description ID of the customer for the appointment
   * @default null
   */
  customer_id: number | null;
  /**
   * Description
   * @description Detailed notes for the appointment
   * @default null
   */
  description: string | null;
  /**
   * Do Not Email
   * @description If true, suppresses email notification to the customer
   * @default null
   */
  do_not_email: boolean | null;
  /**
   * Email Customer
   * @description If true, sends email notification to the customer
   * @default null
   */
  email_customer: boolean | null;
  /**
   * End At
   * @description Scheduled end time in ISO 8601 format
   */
  end_at?: string;
  /**
   * Location
   * @description Location of the appointment
   * @default null
   */
  location: string | null;
  /**
   * Start At
   * @description Scheduled start time in ISO 8601 format
   */
  start_at?: string;
  /**
   * Summary
   * @description Brief summary or title of the appointment
   */
  summary?: string;
  /**
   * Ticket Id
   * @description ID of the related ticket
   * @default null
   */
  ticket_id: number | null;
  /**
   * User Id
   * @description Primary user ID assigned to this appointment
   * @default null
   */
  user_id: number | null;
  /**
   * User Ids
   * @description List of user IDs assigned to this appointment
   * @default null
   */
  user_ids: number[] | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_APPOINTMENT tool output.
 */
type REPAIRSHOPR_POST_APPOINTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Appointment
       * @description Created appointment
       */
      appointment: {
          /**
           * All Day
           * @description All day flag
           * @default null
           */
          all_day: boolean | null;
          /**
           * Appointment Location Type
           * @description Appointment location type
           * @default null
           */
          appointment_location_type: string | null;
          /**
           * Created At
           * @description Created at timestamp
           */
          created_at: string;
          /**
           * Customer
           * @description Nested customer object
           */
          customer: {
              /**
               * Address
               * @description Street address
               * @default null
               */
              address: string | null;
              /**
               * Address 2
               * @description Address line 2
               * @default null
               */
              address_2: string | null;
              /**
               * Business And Full Name
               * @description Business and full name
               * @default null
               */
              business_and_full_name: string | null;
              /**
               * Business Name
               * @description Business name
               * @default null
               */
              business_name: string | null;
              /**
               * City
               * @description City
               * @default null
               */
              city: string | null;
              /**
               * Contacts
               * @description List of contact objects
               */
              contacts: {
                  [key: string]: unknown;
              }[];
              /**
               * Created At
               * @description Creation timestamp
               */
              created_at: string;
              /**
               * Disabled
               * @description Disabled flag
               */
              disabled: boolean;
              /**
               * Email
               * @description Email address
               * @default null
               */
              email: string | null;
              /**
               * Firstname
               * @description Customer first name
               */
              firstname: string;
              /**
               * Fullname
               * @description Customer full name
               */
              fullname: string;
              /**
               * Get Sms
               * @description SMS opt-in flag
               */
              get_sms: boolean;
              /**
               * Id
               * @description Customer ID
               */
              id: number;
              /**
               * Invoice Cc Emails
               * @description Invoice CC emails
               * @default null
               */
              invoice_cc_emails: string | null;
              /**
               * Invoice Term Id
               * @description Invoice term ID
               * @default null
               */
              invoice_term_id: number | null;
              /**
               * Lastname
               * @description Customer last name
               */
              lastname: string;
              /**
               * Latitude
               * @description Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Location Id
               * @description Location ID
               * @default null
               */
              location_id: number | null;
              /**
               * Location Name
               * @description Location name
               * @default null
               */
              location_name: string | null;
              /**
               * Longitude
               * @description Longitude
               * @default null
               */
              longitude: number | null;
              /**
               * Mobile
               * @description Mobile number
               * @default null
               */
              mobile: string | null;
              /**
               * No Email
               * @description No email flag
               */
              no_email: boolean;
              /**
               * Notes
               * @description Notes
               * @default null
               */
              notes: string | null;
              /**
               * Notification Email
               * @description Notification email
               * @default null
               */
              notification_email: string | null;
              /**
               * Online Profile Url
               * @description Online profile URL
               */
              online_profile_url: string;
              /**
               * Opt Out
               * @description Email opt-out flag
               */
              opt_out: boolean;
              /**
               * Pdf Url
               * @description PDF URL
               * @default null
               */
              pdf_url: string | null;
              /**
               * Phone
               * @description Phone number
               * @default null
               */
              phone: string | null;
              /**
               * Properties
               * @description Custom properties
               */
              properties: {
                  [key: string]: unknown;
              };
              /**
               * Ref Customer Id
               * @description Ref customer ID
               * @default null
               */
              ref_customer_id: number | null;
              /**
               * Referred By
               * @description Referred by
               * @default null
               */
              referred_by: string | null;
              /**
               * State
               * @description State
               * @default null
               */
              state: string | null;
              /**
               * Tax Rate Id
               * @description Tax rate ID
               * @default null
               */
              tax_rate_id: number | null;
              /**
               * Updated At
               * @description Last update timestamp
               */
              updated_at: string;
              /**
               * Zip
               * @description ZIP code
               * @default null
               */
              zip: string | null;
          };
          /**
           * Customer Id
           * @description Customer ID
           */
          customer_id: number;
          /**
           * Description
           * @description Detailed notes
           * @default null
           */
          description: string | null;
          /**
           * Do Not Email
           * @description Suppress email flag
           */
          do_not_email: string;
          /**
           * Duration
           * @description Duration in hours
           */
          duration: number;
          /**
           * End At
           * @description End timestamp
           */
          end_at: string;
          /**
           * Id
           * @description Appointment ID
           */
          id: number;
          /**
           * Location
           * @description Location
           * @default null
           */
          location: string | null;
          /**
           * Start At
           * @description Start timestamp
           */
          start_at: string;
          /**
           * Start At Label
           * @description Formatted start label
           */
          start_at_label: string;
          /**
           * Summary
           * @description Summary or title
           */
          summary: string;
          /**
           * Ticket
           * @description Ticket object
           * @default null
           */
          ticket: unknown;
          /**
           * Ticket Id
           * @description Ticket ID
           * @default null
           */
          ticket_id: number | null;
          /**
           * Updated At
           * @description Updated at timestamp
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_ASSET tool input.
 */
type REPAIRSHOPR_POST_ASSET_INPUT = {
  /**
   * Asset Serial
   * @description Serial number of the asset.
   * @default null
   */
  asset_serial: string | null;
  /**
   * Asset Type Id
   * @description ID of an existing asset type. Required if asset_type_name is omitted.
   * @default null
   */
  asset_type_id: number | null;
  /**
   * Asset Type Name
   * @description Name of a new asset type to be created. Required if asset_type_id is omitted.
   * @default null
   */
  asset_type_name: string | null;
  /**
   * Customer Id
   * @description ID of the customer to attach the asset to.
   */
  customer_id?: number;
  /**
   * Name
   * @description Name of the asset, e.g., 'Office PC'
   */
  name?: string;
  /**
   * Properties
   * @description Custom key-value properties for the asset.
   * @default null
   */
  properties: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_ASSET tool output.
 */
type REPAIRSHOPR_POST_ASSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset
       * @description Created asset object
       */
      asset: {
          /**
           * Address
           * @description Asset address object
           */
          address: {
              /** Account Id */
              account_id: number;
              /** Address1 */
              address1: string;
              /** Address2 */
              address2: string;
              /** Address Type Id */
              address_type_id: number;
              /** City */
              city: string;
              /** Created At */
              created_at: string;
              /** Customer Id */
              customer_id: number;
              /** Id */
              id: number;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Updated At */
              updated_at: string;
              /** Zip */
              zip: string;
          };
          /**
           * Asset Serial
           * @description Asset serial number
           */
          asset_serial: string;
          /**
           * Asset Type
           * @description Asset type name
           */
          asset_type: string;
          /**
           * Contact Id
           * @description Contact ID
           * @default null
           */
          contact_id: number | null;
          /**
           * Created At
           * @description Created at timestamp
           */
          created_at: string;
          /**
           * Customer
           * @description Nested customer object
           */
          customer: {
              /**
               * Address
               * @description Street address
               * @default null
               */
              address: string | null;
              /**
               * Address 2
               * @description Address line 2
               * @default null
               */
              address_2: string | null;
              /**
               * Business And Full Name
               * @description Business and full name
               * @default null
               */
              business_and_full_name: string | null;
              /**
               * Business Name
               * @description Business name
               * @default null
               */
              business_name: string | null;
              /**
               * Business Then Name
               * @description Business then name
               * @default null
               */
              business_then_name: string | null;
              /**
               * City
               * @description City
               * @default null
               */
              city: string | null;
              /**
               * Created At
               * @description Creation timestamp
               */
              created_at: string;
              /**
               * Disabled
               * @description Disabled flag
               */
              disabled: boolean;
              /**
               * Email
               * @description Email address
               * @default null
               */
              email: string | null;
              /**
               * Firstname
               * @description Customer first name
               */
              firstname: string;
              /**
               * Fullname
               * @description Customer full name
               */
              fullname: string;
              /**
               * Get Sms
               * @description SMS opt-in flag
               */
              get_sms: boolean;
              /**
               * Id
               * @description Customer ID
               */
              id: number;
              /**
               * Invoice Cc Emails
               * @description Invoice CC emails
               * @default null
               */
              invoice_cc_emails: string | null;
              /**
               * Invoice Term Id
               * @description Invoice term ID
               * @default null
               */
              invoice_term_id: number | null;
              /**
               * Lastname
               * @description Customer last name
               */
              lastname: string;
              /**
               * Latitude
               * @description Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Location Id
               * @description Location ID
               * @default null
               */
              location_id: number | null;
              /**
               * Longitude
               * @description Longitude
               * @default null
               */
              longitude: number | null;
              /**
               * Mobile
               * @description Mobile number
               * @default null
               */
              mobile: string | null;
              /**
               * No Email
               * @description No email flag
               */
              no_email: boolean;
              /**
               * Notes
               * @description Notes
               * @default null
               */
              notes: string | null;
              /**
               * Notification Email
               * @description Notification email
               * @default null
               */
              notification_email: string | null;
              /**
               * Online Profile Url
               * @description Online profile URL
               */
              online_profile_url: string;
              /**
               * Opt Out
               * @description Email opt-out flag
               */
              opt_out: boolean;
              /**
               * Pdf Url
               * @description PDF URL
               * @default null
               */
              pdf_url: string | null;
              /**
               * Phone
               * @description Phone number
               * @default null
               */
              phone: string | null;
              /**
               * Properties
               * @description Custom properties
               */
              properties: {
                  [key: string]: unknown;
              };
              /**
               * Ref Customer Id
               * @description Ref customer ID
               * @default null
               */
              ref_customer_id: number | null;
              /**
               * Referred By
               * @description Referred by
               * @default null
               */
              referred_by: string | null;
              /**
               * State
               * @description State
               * @default null
               */
              state: string | null;
              /**
               * Tax Rate Id
               * @description Tax rate ID
               * @default null
               */
              tax_rate_id: number | null;
              /**
               * Updated At
               * @description Last update timestamp
               */
              updated_at: string;
              /**
               * Zip
               * @description ZIP code
               * @default null
               */
              zip: string | null;
          };
          /**
           * Customer Id
           * @description Customer ID
           */
          customer_id: number;
          /**
           * External Rmm Link
           * @description External RMM link
           * @default null
           */
          external_rmm_link: string | null;
          /**
           * Id
           * @description Asset ID
           */
          id: number;
          /**
           * Name
           * @description Asset name
           */
          name: string;
          /**
           * Properties
           * @description Custom properties
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Rmm Links
           * @description List of RMM links
           */
          rmm_links: unknown[];
          /**
           * Rmm Store
           * @description RMM store data
           */
          rmm_store: {
              /** Account Id */
              account_id: number;
              /** Asset Id */
              asset_id: number;
              /** Created At */
              created_at: string;
              /** Emsisoft */
              emsisoft: {
                  [key: string]: unknown;
              };
              /** General */
              general: {
                  [key: string]: unknown;
              };
              /** Id */
              id: number;
              /**
               * Override Alert Agent Offline Mins
               * @default null
               */
              override_alert_agent_offline_mins: number | null;
              /**
               * Override Alert Agent Rearm After Mins
               * @default null
               */
              override_alert_agent_rearm_after_mins: number | null;
              /**
               * Override Autoresolve Offline Alert
               * @default null
               */
              override_autoresolve_offline_alert: number | null;
              /**
               * Override Low Hd Threshold
               * @default null
               */
              override_low_hd_threshold: number | null;
              /** Triggers */
              triggers: {
                  [key: string]: unknown;
              };
              /** Updated At */
              updated_at: string;
              /** Windows Updates */
              windows_updates: {
                  [key: string]: unknown;
              };
          };
          /**
           * Updated At
           * @description Updated at timestamp
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_CUSTOMER tool input.
 */
type REPAIRSHOPR_POST_CUSTOMER_INPUT = {
  /**
   * Address
   * @description Street address of the customer.
   * @default null
   */
  address: string | null;
  /**
   * Address2
   * @description Second line of the street address.
   * @default null
   */
  address2: string | null;
  /**
   * Business Name
   * @description Business name associated with the customer.
   * @default null
   */
  business_name: string | null;
  /**
   * City
   * @description City of the customer's address.
   * @default null
   */
  city: string | null;
  /**
   * Email
   * @description Email address of the customer.
   * @default null
   */
  email: string | null;
  /**
   * Firstname
   * @description First name of the customer.
   * @default null
   */
  firstname: string | null;
  /**
   * Lastname
   * @description Last name of the customer.
   * @default null
   */
  lastname: string | null;
  /**
   * Mobile
   * @description Mobile phone number of the customer.
   * @default null
   */
  mobile: string | null;
  /**
   * Phone
   * @description Primary phone number of the customer.
   * @default null
   */
  phone: string | null;
  /**
   * State
   * @description State of the customer's address.
   * @default null
   */
  state: string | null;
  /**
   * Zip
   * @description ZIP or postal code of the customer's address.
   * @default null
   */
  zip: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_CUSTOMER tool output.
 */
type REPAIRSHOPR_POST_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Street address of the customer.
       * @default null
       */
      address: string | null;
      /**
       * Address2
       * @description Second line of the street address.
       * @default null
       */
      address2: string | null;
      /**
       * Business Name
       * @description Business name associated with the customer.
       * @default null
       */
      business_name: string | null;
      /**
       * City
       * @description City of the customer's address.
       * @default null
       */
      city: string | null;
      /**
       * Created At
       * @description Timestamp when the customer record was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the customer.
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description First name of the customer.
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Unique identifier of the customer.
       */
      id: number;
      /**
       * Lastname
       * @description Last name of the customer.
       * @default null
       */
      lastname: string | null;
      /**
       * Mobile
       * @description Mobile phone number of the customer.
       * @default null
       */
      mobile: string | null;
      /**
       * Phone
       * @description Primary phone number of the customer.
       * @default null
       */
      phone: string | null;
      /**
       * State
       * @description State of the customer's address.
       * @default null
       */
      state: string | null;
      /**
       * Updated At
       * @description Timestamp when the customer record was last updated.
       */
      updated_at: string;
      /**
       * Zip
       * @description ZIP or postal code of the customer's address.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_ESTIMATE tool input.
 */
type REPAIRSHOPR_POST_ESTIMATE_INPUT = {
  /**
   * Created At
   * @description Override creation timestamp (ISO 8601)
   * @default null
   */
  created_at: string | null;
  /**
   * Customer Id
   * @description Unique identifier of the customer for this estimate
   */
  customer_id?: number;
  /**
   * Date
   * @description Date of the estimate in ISO 8601 format
   */
  date?: string;
  /**
   * Line Items
   * @description List of line items to include on the estimate
   * @default null
   */
  line_items: {
      /**
       * Item
       * @description Internal identifier for the line item
       * @default null
       */
      item: string | null;
      /**
       * Name
       * @description Display name of the item
       * @default null
       */
      name: string | null;
      /**
       * Product Id
       * @description ID of the product or service
       * @default null
       */
      product_id: number | null;
      /**
       * Quantity
       * @description Quantity of the item
       * @default null
       */
      quantity: number | null;
  }[] | null;
  /**
   * Location Id
   * @description Location ID associated with this estimate
   * @default null
   */
  location_id: number | null;
  /**
   * Name
   * @description Title or name for the estimate
   * @default null
   */
  name: string | null;
  /**
   * Note
   * @description Additional notes included on the estimate
   * @default null
   */
  note: string | null;
  /**
   * Number
   * @description Custom estimate number (defaults to auto-generated)
   * @default null
   */
  number: string | null;
  /**
   * Status
   * @description Status of the estimate (e.g., 'draft', 'sent')
   * @default null
   */
  status: string | null;
  /**
   * Ticket Id
   * @description ID of the related ticket, if any
   * @default null
   */
  ticket_id: number | null;
  /**
   * Updated At
   * @description Override update timestamp (ISO 8601)
   * @default null
   */
  updated_at: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_ESTIMATE tool output.
 */
type REPAIRSHOPR_POST_ESTIMATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Estimate
       * @description Created estimate object
       */
      estimate: {
          /**
           * Created At
           * @description Timestamp when estimate was created (ISO 8601)
           */
          created_at: string;
          /**
           * Customer Business Then Name
           * @description Business name then customer name, if available
           * @default null
           */
          customer_business_then_name: string | null;
          /**
           * Customer Id
           * @description ID of the customer associated with the estimate
           */
          customer_id: number;
          /**
           * Date
           * @description Date of the estimate (ISO 8601)
           */
          date: string;
          /**
           * Employee
           * @description Name of employee who created the estimate
           * @default null
           */
          employee: string | null;
          /**
           * Id
           * @description Unique identifier of the estimate
           */
          id: number;
          /**
           * Invoice Id
           * @description ID of linked invoice, if converted
           * @default null
           */
          invoice_id: number | null;
          /**
           * Location Id
           * @description Location ID for this estimate
           * @default null
           */
          location_id: number | null;
          /**
           * Name
           * @description Title or name of the estimate
           * @default null
           */
          name: string | null;
          /**
           * Number
           * @description Estimate number
           */
          number: string;
          /**
           * Pdf Url
           * @description URL to the generated PDF, if available
           * @default null
           */
          pdf_url: string | null;
          /**
           * Status
           * @description Current status of the estimate
           */
          status: string;
          /**
           * Subtotal
           * @description Subtotal amount of the estimate
           */
          subtotal: number;
          /**
           * Tax
           * @description Tax amount applied to the estimate
           */
          tax: number;
          /**
           * Ticket Id
           * @description ID of related ticket, if any
           * @default null
           */
          ticket_id: number | null;
          /**
           * Total
           * @description Total amount of the estimate
           */
          total: number;
          /**
           * Updated At
           * @description Timestamp when estimate was last updated (ISO 8601)
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_INVOICE tool input.
 */
type REPAIRSHOPR_POST_INVOICE_INPUT = {
  /**
   * Contact Id
   * @description Contact ID to bill
   * @default null
   */
  contact_id: number | null;
  /**
   * Customer Id
   * @description ID of the customer to bill
   */
  customer_id?: number;
  /**
   * Date
   * @description Invoice date (ISO 8601)
   */
  date?: string;
  /**
   * Due Date
   * @description Due date of the invoice (YYYY-MM-DD)
   */
  due_date?: string;
  /**
   * Hardwarecost
   * @description Hardware cost amount
   * @default null
   */
  hardwarecost: number | null;
  /**
   * Line Items
   * @description List of line items to include in the invoice
   * @default null
   */
  line_items: {
      /**
       * Cost
       * @description Cost amount of the item
       * @default null
       */
      cost: number | null;
      /**
       * Discount Percent
       * @description Discount percentage applied
       * @default null
       */
      discount_percent: number | null;
      /**
       * Invoice Bundle Id
       * @description Bundle ID grouping related items
       * @default null
       */
      invoice_bundle_id: number | null;
      /**
       * Item
       * @description SKU or identifier for the line item
       * @default null
       */
      item: string | null;
      /**
       * Name
       * @description Display name of the line item
       * @default null
       */
      name: string | null;
      /**
       * Position
       * @description Position of the item in the invoice list
       * @default null
       */
      position: number | null;
      /**
       * Price
       * @description Price charged for the item
       * @default null
       */
      price: number | null;
      /**
       * Product Id
       * @description ID of an existing product to bill
       * @default null
       */
      product_id: number | null;
      /**
       * Quantity
       * @description Quantity of the item
       * @default null
       */
      quantity: number | null;
      /**
       * Tax Note
       * @description Tax note for the item
       * @default null
       */
      tax_note: string | null;
      /**
       * Tax Rate Id
       * @description Specific tax rate ID to apply
       * @default null
       */
      tax_rate_id: number | null;
      /**
       * Taxable
       * @description Whether the item is taxable
       * @default null
       */
      taxable: boolean | null;
      /**
       * Upc Code
       * @description UPC code of the item
       * @default null
       */
      upc_code: string | null;
      /**
       * User Id
       * @description ID of user creating the line item
       * @default null
       */
      user_id: number | null;
      /**
       * Wholesale
       * @description Wholesale cost of the item
       * @default null
       */
      wholesale: number | null;
  }[] | null;
  /**
   * Location Id
   * @description Location ID for the invoice
   * @default null
   */
  location_id: number | null;
  /**
   * Note
   * @description Additional notes for the invoice
   * @default null
   */
  note: string | null;
  /**
   * Number
   * @description Invoice number; auto-assigned if omitted
   * @default null
   */
  number: string | null;
  /**
   * Po Number
   * @description Purchase order number
   * @default null
   */
  po_number: string | null;
  /**
   * Ticket Id
   * @description Associated ticket ID
   * @default null
   */
  ticket_id: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_INVOICE tool output.
 */
type REPAIRSHOPR_POST_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice
       * @description Created invoice object
       */
      invoice: {
          /**
           * Contact Id
           * @description Primary contact ID for the invoice
           * @default null
           */
          contact_id: number | null;
          /**
           * Created At
           * @description Creation timestamp of the invoice (ISO 8601)
           */
          created_at: string;
          /**
           * Customer Business Then Name
           * @description Snapshot of customer's business and name at invoice creation
           */
          customer_business_then_name: string;
          /**
           * Customer Id
           * @description ID of the customer associated with the invoice
           */
          customer_id: number;
          /**
           * Date
           * @description Issue date of the invoice (ISO 8601)
           */
          date: string;
          /**
           * Due Date
           * @description Due date of the invoice (YYYY-MM-DD)
           */
          due_date: string;
          /**
           * Hardwarecost
           * @description Hardware cost amount if any
           * @default null
           */
          hardwarecost: number | null;
          /**
           * Id
           * @description Unique identifier of the invoice
           */
          id: number;
          /**
           * Is Paid
           * @description Whether the invoice is fully paid
           */
          is_paid: boolean;
          /**
           * Location Id
           * @description Location ID associated with the invoice
           * @default null
           */
          location_id: number | null;
          /**
           * Note
           * @description Additional notes on the invoice
           * @default null
           */
          note: string | null;
          /**
           * Number
           * @description Invoice number
           */
          number: string;
          /**
           * Pdf Url
           * @description URL to the invoice PDF if generated
           * @default null
           */
          pdf_url: string | null;
          /**
           * Po Number
           * @description Purchase order number if provided
           * @default null
           */
          po_number: string | null;
          /**
           * Subtotal
           * @description Subtotal amount as a string
           */
          subtotal: string;
          /**
           * Tax
           * @description Tax amount as a string
           */
          tax: string;
          /**
           * Tech Marked Paid
           * @description Whether a technician marked the invoice as paid
           */
          tech_marked_paid: boolean;
          /**
           * Ticket Id
           * @description Associated ticket ID if any
           * @default null
           */
          ticket_id: number | null;
          /**
           * Total
           * @description Total amount as a string
           */
          total: string;
          /**
           * Updated At
           * @description Last update timestamp of the invoice (ISO 8601)
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID who created the invoice
           */
          user_id: number;
          /**
           * Verified Paid
           * @description Whether payment is verified
           */
          verified_paid: boolean;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_LEAD tool input.
 */
type REPAIRSHOPR_POST_LEAD_INPUT = {
  /**
   * Address
   * @description Street address of the lead.
   * @default null
   */
  address: string | null;
  /**
   * Business Name
   * @description Business name of the lead.
   * @default null
   */
  business_name: string | null;
  /**
   * City
   * @description City of the lead.
   * @default null
   */
  city: string | null;
  /**
   * Converted
   * @description Whether the lead has been converted into a customer.
   * @default null
   */
  converted: boolean | null;
  /**
   * Email
   * @description Email address of the lead.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the lead.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the lead.
   * @default null
   */
  last_name: string | null;
  /**
   * Mobile
   * @description Mobile number of the lead.
   * @default null
   */
  mobile: string | null;
  /**
   * Phone
   * @description Phone number of the lead.
   * @default null
   */
  phone: string | null;
  /**
   * State
   * @description State of the lead.
   * @default null
   */
  state: string | null;
  /**
   * Zip
   * @description ZIP code of the lead.
   * @default null
   */
  zip: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_LEAD tool output.
 */
type REPAIRSHOPR_POST_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Street address of the lead.
       * @default null
       */
      address: string | null;
      /**
       * Business Name
       * @description Business name of the lead.
       * @default null
       */
      business_name: string | null;
      /**
       * City
       * @description City of the lead.
       * @default null
       */
      city: string | null;
      /**
       * Converted
       * @description Whether the lead has been converted.
       * @default null
       */
      converted: boolean | null;
      /**
       * Email
       * @description Email address of the lead.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the lead.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the lead.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the lead.
       * @default null
       */
      last_name: string | null;
      /**
       * Mobile
       * @description Mobile number of the lead.
       * @default null
       */
      mobile: string | null;
      /**
       * Phone
       * @description Phone number of the lead.
       * @default null
       */
      phone: string | null;
      /**
       * State
       * @description State of the lead.
       * @default null
       */
      state: string | null;
      /**
       * Zip
       * @description ZIP code of the lead.
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_PAYMENT tool input.
 */
type REPAIRSHOPR_POST_PAYMENT_INPUT = {
  /**
   * Address City
   * @description Billing city.
   * @default null
   */
  address_city: string | null;
  /**
   * Address Street
   * @description Billing street address.
   * @default null
   */
  address_street: string | null;
  /**
   * Address Zip
   * @description Billing ZIP/postal code.
   * @default null
   */
  address_zip: string | null;
  /**
   * Amount Cents
   * @description Payment amount in cents. Must be non-negative.
   */
  amount_cents?: number;
  /**
   * Apply Payments
   * @description Additional object describing specific invoice-application splits.
   * @default null
   */
  apply_payments: {
      [key: string]: unknown;
  } | null;
  /**
   * Credit Card Number
   * @description Credit card number.
   * @default null
   */
  credit_card_number: string | null;
  /**
   * Customer Id
   * @description ID of the customer associated with this payment.
   * @default null
   */
  customer_id: number | null;
  /**
   * Cvv
   * @description Credit card CVV code.
   * @default null
   */
  cvv: string | null;
  /**
   * Date Month
   * @description Credit card expiration month (MM).
   * @default null
   */
  date_month: string | null;
  /**
   * Date Year
   * @description Credit card expiration year (YYYY).
   * @default null
   */
  date_year: string | null;
  /**
   * Firstname
   * @description First name of the cardholder.
   * @default null
   */
  firstname: string | null;
  /**
   * Invoice Id
   * @description ID of the invoice to apply this payment to. Required if invoice_number is not provided.
   * @default null
   */
  invoice_id: number | null;
  /**
   * Invoice Number
   * @description Invoice number to apply this payment to. Required if invoice_id is not provided.
   * @default null
   */
  invoice_number: string | null;
  /**
   * Lastname
   * @description Last name of the cardholder.
   * @default null
   */
  lastname: string | null;
  /**
   * Payment Method
   * @description Payment method (e.g., 'credit_card', 'cash').
   * @default null
   */
  payment_method: string | null;
  /**
   * Ref Num
   * @description Reference number for the payment (e.g., check number).
   * @default null
   */
  ref_num: string | null;
  /**
   * Register Id
   * @description ID of the register processing the payment.
   * @default null
   */
  register_id: number | null;
  /**
   * Signature Data
   * @description Base64-encoded signature data.
   * @default null
   */
  signature_data: string | null;
  /**
   * Signature Date
   * @description ISO 8601 timestamp of the signature.
   * @default null
   */
  signature_date: string | null;
  /**
   * Signature Name
   * @description Name on the customer signature.
   * @default null
   */
  signature_name: string | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_PAYMENT tool output.
 */
type REPAIRSHOPR_POST_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payment
       * @description Payment object created by the API.
       */
      payment: {
          /**
           * Applied At
           * @description Date payment was applied (ISO 8601).
           */
          applied_at: string;
          /**
           * Created At
           * @description Payment creation timestamp (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the payment.
           */
          id: number;
          /**
           * Invoice Ids
           * @description List of invoice IDs this payment was applied to.
           */
          invoice_ids: number[];
          /**
           * Payment Amount
           * @description Amount paid in cents.
           */
          payment_amount: number;
          /**
           * Payment Method
           * @description Method used for payment.
           * @default null
           */
          payment_method: string | null;
          /**
           * Ref Num
           * @description Reference number, if any.
           * @default null
           */
          ref_num: string | null;
          /**
           * Success
           * @description Whether the payment processed successfully.
           */
          success: boolean;
          /**
           * Tickets
           * @description Any linked tickets.
           */
          tickets: unknown[];
          /**
           * Transaction Response
           * @description Raw response from the payment processor.
           * @default null
           */
          transaction_response: unknown;
          /**
           * Updated At
           * @description Timestamp of last update (ISO 8601).
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_PRODUCT tool input.
 */
type REPAIRSHOPR_POST_PRODUCT_INPUT = {
  /**
   * Active
   * @description Whether the product is active.
   * @default null
   */
  active: boolean | null;
  /**
   * Category Id
   * @description Identifier of the category this product belongs to.
   * @default null
   */
  category_id: number | null;
  /**
   * Cost
   * @description Cost price of the product, if provided, must be non-negative.
   * @default null
   */
  cost: number | null;
  /**
   * Description
   * @description Detailed description of the product.
   * @default null
   */
  description: string | null;
  /**
   * Manufacturer
   * @description Manufacturer name of the product.
   * @default null
   */
  manufacturer: string | null;
  /**
   * Model Number
   * @description Manufacturer model number.
   * @default null
   */
  model_number: string | null;
  /**
   * Name
   * @description Name of the product.
   */
  name?: string;
  /**
   * Photo
   * @description URL of the product photo.
   * @default null
   */
  photo: string | null;
  /**
   * Price
   * @description Selling price of the product, must be non-negative.
   */
  price?: number;
  /**
   * Quantity
   * @description Available stock quantity, must be non-negative.
   * @default null
   */
  quantity: number | null;
  /**
   * Serialized
   * @description Whether the product is serialized.
   * @default null
   */
  serialized: boolean | null;
  /**
   * Sku
   * @description Stock keeping unit identifier.
   * @default null
   */
  sku: string | null;
  /**
   * Taxable
   * @description Whether the product is taxable.
   * @default null
   */
  taxable: boolean | null;
  /**
   * Upc Code
   * @description Universal Product Code.
   * @default null
   */
  upc_code: string | null;
  /**
   * Vendor Ids
   * @description List of vendor identifiers associated with this product.
   * @default null
   */
  vendor_ids: number[] | null;
  /**
   * Weight
   * @description Weight of the product (in pounds), must be non-negative.
   * @default null
   */
  weight: number | null;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_PRODUCT tool output.
 */
type REPAIRSHOPR_POST_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the product is active.
       * @default null
       */
      active: boolean | null;
      /**
       * Category Id
       * @description Category identifier of the product.
       * @default null
       */
      category_id: number | null;
      /**
       * Cost
       * @description Cost price of the product.
       * @default null
       */
      cost: number | null;
      /**
       * Created At
       * @description Timestamp when the product was created (ISO 8601).
       */
      created_at: string;
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
      id: number;
      /**
       * Manufacturer
       * @description Manufacturer of the product.
       * @default null
       */
      manufacturer: string | null;
      /**
       * Model Number
       * @description Model number of the product.
       * @default null
       */
      model_number: string | null;
      /**
       * Name
       * @description Name of the product.
       */
      name: string;
      /**
       * Photo
       * @description URL of the product photo.
       * @default null
       */
      photo: string | null;
      /**
       * Price
       * @description Selling price of the product.
       */
      price: number;
      /**
       * Quantity
       * @description Available stock quantity.
       * @default null
       */
      quantity: number | null;
      /**
       * Serialized
       * @description Indicates if the product is serialized.
       * @default null
       */
      serialized: boolean | null;
      /**
       * Sku
       * @description Stock keeping unit identifier.
       * @default null
       */
      sku: string | null;
      /**
       * Taxable
       * @description Indicates if the product is taxable.
       * @default null
       */
      taxable: boolean | null;
      /**
       * Upc Code
       * @description Universal Product Code.
       * @default null
       */
      upc_code: string | null;
      /**
       * Updated At
       * @description Timestamp when the product was last updated (ISO 8601).
       */
      updated_at: string;
      /**
       * Vendor Ids
       * @description Vendor IDs associated with the product.
       * @default null
       */
      vendor_ids: number[] | null;
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
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_PRODUCT_PHOTO tool input.
 */
type REPAIRSHOPR_POST_PRODUCT_PHOTO_INPUT = {
  /**
   * Files
   * @description List of files (URL and filename) to attach to the product.
   */
  files?: {
      /**
       * Filename
       * @description Filename to assign to the uploaded image.
       */
      filename: string;
      /**
       * Url
       * @description Public URL of the image to attach.
       */
      url: string;
  }[];
  /**
   * Id
   * @description Unique identifier of the product.
   */
  id?: number;
};

/**
 * Type of REPAIRSHOPR's REPAIRSHOPR_POST_PRODUCT_PHOTO tool output.
 */
type REPAIRSHOPR_POST_PRODUCT_PHOTO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message from the server
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
 * Type map of all available tool input types for toolkit "REPAIRSHOPR".
 */
export type REPAIRSHOPR_TOOL_INPUTS = {
  DELETE_APPOINTMENT: REPAIRSHOPR_DELETE_APPOINTMENT_INPUT
  DELETE_CUSTOMER: REPAIRSHOPR_DELETE_CUSTOMER_INPUT
  DELETE_ESTIMATE: REPAIRSHOPR_DELETE_ESTIMATE_INPUT
  DELETE_INVOICE: REPAIRSHOPR_DELETE_INVOICE_INPUT
  GET_APPOINTMENT: REPAIRSHOPR_GET_APPOINTMENT_INPUT
  GET_APPOINTMENTS: REPAIRSHOPR_GET_APPOINTMENTS_INPUT
  GET_ASSET: REPAIRSHOPR_GET_ASSET_INPUT
  GET_ASSETS: REPAIRSHOPR_GET_ASSETS_INPUT
  GET_CASE_ATTACHMENTS: REPAIRSHOPR_GET_CASE_ATTACHMENTS_INPUT
  GET_CONTACTS: REPAIRSHOPR_GET_CONTACTS_INPUT
  GET_CUSTOMER: REPAIRSHOPR_GET_CUSTOMER_INPUT
  GET_CUSTOMERS: REPAIRSHOPR_GET_CUSTOMERS_INPUT
  GET_EMPLOYEE_TIME_CLOCK: REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK_INPUT
  GET_ESTIMATE: REPAIRSHOPR_GET_ESTIMATE_INPUT
  GET_ESTIMATES: REPAIRSHOPR_GET_ESTIMATES_INPUT
  GET_INVOICE: REPAIRSHOPR_GET_INVOICE_INPUT
  GET_INVOICES: REPAIRSHOPR_GET_INVOICES_INPUT
  GET_LEAD: REPAIRSHOPR_GET_LEAD_INPUT
  GET_LEADS: REPAIRSHOPR_GET_LEADS_INPUT
  GET_PAYMENT: REPAIRSHOPR_GET_PAYMENT_INPUT
  GET_PAYMENTS: REPAIRSHOPR_GET_PAYMENTS_INPUT
  GET_PRODUCT: REPAIRSHOPR_GET_PRODUCT_INPUT
  GET_PRODUCTS: REPAIRSHOPR_GET_PRODUCTS_INPUT
  GET_PRODUCTS_BY_CATEGORY: REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY_INPUT
  GET_PRODUCTS_CATEGORIES: REPAIRSHOPR_GET_PRODUCTS_CATEGORIES_INPUT
  GET_PRODUCT_SERIALS: REPAIRSHOPR_GET_PRODUCT_SERIALS_INPUT
  GET_TICKET: REPAIRSHOPR_GET_TICKET_INPUT
  GET_USER: REPAIRSHOPR_GET_USER_INPUT
  GET_USERS: REPAIRSHOPR_GET_USERS_INPUT
  POST_APPOINTMENT: REPAIRSHOPR_POST_APPOINTMENT_INPUT
  POST_ASSET: REPAIRSHOPR_POST_ASSET_INPUT
  POST_CUSTOMER: REPAIRSHOPR_POST_CUSTOMER_INPUT
  POST_ESTIMATE: REPAIRSHOPR_POST_ESTIMATE_INPUT
  POST_INVOICE: REPAIRSHOPR_POST_INVOICE_INPUT
  POST_LEAD: REPAIRSHOPR_POST_LEAD_INPUT
  POST_PAYMENT: REPAIRSHOPR_POST_PAYMENT_INPUT
  POST_PRODUCT: REPAIRSHOPR_POST_PRODUCT_INPUT
  POST_PRODUCT_PHOTO: REPAIRSHOPR_POST_PRODUCT_PHOTO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REPAIRSHOPR".
 */
export type REPAIRSHOPR_TOOL_OUTPUTS = {
  DELETE_APPOINTMENT: REPAIRSHOPR_DELETE_APPOINTMENT_OUTPUT
  DELETE_CUSTOMER: REPAIRSHOPR_DELETE_CUSTOMER_OUTPUT
  DELETE_ESTIMATE: REPAIRSHOPR_DELETE_ESTIMATE_OUTPUT
  DELETE_INVOICE: REPAIRSHOPR_DELETE_INVOICE_OUTPUT
  GET_APPOINTMENT: REPAIRSHOPR_GET_APPOINTMENT_OUTPUT
  GET_APPOINTMENTS: REPAIRSHOPR_GET_APPOINTMENTS_OUTPUT
  GET_ASSET: REPAIRSHOPR_GET_ASSET_OUTPUT
  GET_ASSETS: REPAIRSHOPR_GET_ASSETS_OUTPUT
  GET_CASE_ATTACHMENTS: REPAIRSHOPR_GET_CASE_ATTACHMENTS_OUTPUT
  GET_CONTACTS: REPAIRSHOPR_GET_CONTACTS_OUTPUT
  GET_CUSTOMER: REPAIRSHOPR_GET_CUSTOMER_OUTPUT
  GET_CUSTOMERS: REPAIRSHOPR_GET_CUSTOMERS_OUTPUT
  GET_EMPLOYEE_TIME_CLOCK: REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK_OUTPUT
  GET_ESTIMATE: REPAIRSHOPR_GET_ESTIMATE_OUTPUT
  GET_ESTIMATES: REPAIRSHOPR_GET_ESTIMATES_OUTPUT
  GET_INVOICE: REPAIRSHOPR_GET_INVOICE_OUTPUT
  GET_INVOICES: REPAIRSHOPR_GET_INVOICES_OUTPUT
  GET_LEAD: REPAIRSHOPR_GET_LEAD_OUTPUT
  GET_LEADS: REPAIRSHOPR_GET_LEADS_OUTPUT
  GET_PAYMENT: REPAIRSHOPR_GET_PAYMENT_OUTPUT
  GET_PAYMENTS: REPAIRSHOPR_GET_PAYMENTS_OUTPUT
  GET_PRODUCT: REPAIRSHOPR_GET_PRODUCT_OUTPUT
  GET_PRODUCTS: REPAIRSHOPR_GET_PRODUCTS_OUTPUT
  GET_PRODUCTS_BY_CATEGORY: REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY_OUTPUT
  GET_PRODUCTS_CATEGORIES: REPAIRSHOPR_GET_PRODUCTS_CATEGORIES_OUTPUT
  GET_PRODUCT_SERIALS: REPAIRSHOPR_GET_PRODUCT_SERIALS_OUTPUT
  GET_TICKET: REPAIRSHOPR_GET_TICKET_OUTPUT
  GET_USER: REPAIRSHOPR_GET_USER_OUTPUT
  GET_USERS: REPAIRSHOPR_GET_USERS_OUTPUT
  POST_APPOINTMENT: REPAIRSHOPR_POST_APPOINTMENT_OUTPUT
  POST_ASSET: REPAIRSHOPR_POST_ASSET_OUTPUT
  POST_CUSTOMER: REPAIRSHOPR_POST_CUSTOMER_OUTPUT
  POST_ESTIMATE: REPAIRSHOPR_POST_ESTIMATE_OUTPUT
  POST_INVOICE: REPAIRSHOPR_POST_INVOICE_OUTPUT
  POST_LEAD: REPAIRSHOPR_POST_LEAD_OUTPUT
  POST_PAYMENT: REPAIRSHOPR_POST_PAYMENT_OUTPUT
  POST_PRODUCT: REPAIRSHOPR_POST_PRODUCT_OUTPUT
  POST_PRODUCT_PHOTO: REPAIRSHOPR_POST_PRODUCT_PHOTO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REPAIRSHOPR toolkit.
 */
export const REPAIRSHOPR = {
  slug: "repairshopr",
  tools: {
    /**
     * Tool to delete a specific appointment by its id. use when an appointment is canceled and needs removal permanently.
     */
    DELETE_APPOINTMENT: "REPAIRSHOPR_DELETE_APPOINTMENT",
    /**
     * Tool to delete a specific customer by id. use after confirming the customer id when you need to remove a customer record permanently.
     */
    DELETE_CUSTOMER: "REPAIRSHOPR_DELETE_CUSTOMER",
    /**
     * Tool to delete a specific estimate by id. use when you need to remove an estimate record permanently.
     */
    DELETE_ESTIMATE: "REPAIRSHOPR_DELETE_ESTIMATE",
    /**
     * Tool to delete a specific invoice by id. use when you need to remove an invoice permanently after confirming it's no longer needed. ensure no dependent records require it before running.
     */
    DELETE_INVOICE: "REPAIRSHOPR_DELETE_INVOICE",
    /**
     * Tool to retrieve details of a specific appointment by its id. use when you need exact details of an appointment by id.
     */
    GET_APPOINTMENT: "REPAIRSHOPR_GET_APPOINTMENT",
    /**
     * Tool to retrieve a list of appointments. use when listing appointments by date range or for current user. returns up to 25 results per page.
     */
    GET_APPOINTMENTS: "REPAIRSHOPR_GET_APPOINTMENTS",
    /**
     * Tool to retrieve details of a specific asset by its id. use when you need to confirm asset details after obtaining its id. requires assets - view details permission.
     */
    GET_ASSET: "REPAIRSHOPR_GET_ASSET",
    /**
     * Tool to retrieve a paginated list of assets. use when you need to list or search assets by snmp status, customer, asset type, or query after authenticating. returns 25 items per page.
     */
    GET_ASSETS: "REPAIRSHOPR_GET_ASSETS",
    /**
     * Tool to retrieve attachments for a specific service case. use when you need to list all files attached to a case.
     */
    GET_CASE_ATTACHMENTS: "REPAIRSHOPR_GET_CASE_ATTACHMENTS",
    /**
     * Tool to retrieve a paginated list of contacts. use when you need to fetch contacts optionally filtered by customer. returns up to 25 contacts per page.
     */
    GET_CONTACTS: "REPAIRSHOPR_GET_CONTACTS",
    /**
     * Tool to retrieve details of a specific customer by id. use after confirming the customer exists. example: "get customer details for id 123".
     */
    GET_CUSTOMER: "REPAIRSHOPR_GET_CUSTOMER",
    /**
     * Tool to retrieve a list of customers. use when you need to search or filter customers with pagination. returns up to 25 results per page.
     */
    GET_CUSTOMERS: "REPAIRSHOPR_GET_CUSTOMERS",
    /**
     * Tool to retrieve the last time clock entry for a specific user. use when needing the most recent clock-in/out. example: "get the latest time clock entry for user 5".
     */
    GET_EMPLOYEE_TIME_CLOCK: "REPAIRSHOPR_GET_EMPLOYEE_TIME_CLOCK",
    /**
     * Tool to retrieve details of a specific estimate by id. use when you need exact details of an estimate by id.
     */
    GET_ESTIMATE: "REPAIRSHOPR_GET_ESTIMATE",
    /**
     * Tool to retrieve a list of estimates. use when you need to list or filter estimates by customer or paginate results after authentication.
     */
    GET_ESTIMATES: "REPAIRSHOPR_GET_ESTIMATES",
    /**
     * Tool to retrieve details of a specific invoice by id. use after confirming the invoice exists. example: "get invoice details for id 456".
     */
    GET_INVOICE: "REPAIRSHOPR_GET_INVOICE",
    /**
     * Tool to retrieve a paginated list of invoices. use when you need to list invoices, optionally filtered by payment status, ticket association, or update date. returns up to 25 invoices per page.
     */
    GET_INVOICES: "REPAIRSHOPR_GET_INVOICES",
    /**
     * Tool to retrieve details of a specific lead by its id. use when you need to inspect a single lead after obtaining its id. example: "get lead details for id 123".
     */
    GET_LEAD: "REPAIRSHOPR_GET_LEAD",
    /**
     * Tool to retrieve a paginated list of leads. use when you need to browse or filter potential customers. returns up to 25 leads per page.
     */
    GET_LEADS: "REPAIRSHOPR_GET_LEADS",
    /**
     * Tool to retrieve details of a specific payment by id. use after obtaining the payment id. example: "get payment details for id 123".
     */
    GET_PAYMENT: "REPAIRSHOPR_GET_PAYMENT",
    /**
     * Tool to retrieve a paginated list of payments. use when you need to view or search payment records, with optional filtering by query or pagination.
     */
    GET_PAYMENTS: "REPAIRSHOPR_GET_PAYMENTS",
    /**
     * Tool to retrieve details of a specific product by id. use after confirming the product id exists. example: "get product details for id 123".
     */
    GET_PRODUCT: "REPAIRSHOPR_GET_PRODUCT",
    /**
     * Tool to retrieve a list of products. use when you need to search or filter products by various criteria. returns up to 25 results per page.
     */
    GET_PRODUCTS: "REPAIRSHOPR_GET_PRODUCTS",
    /**
     * Tool to retrieve products filtered by category id. use when you need to list all products in a specific category.
     */
    GET_PRODUCTS_BY_CATEGORY: "REPAIRSHOPR_GET_PRODUCTS_BY_CATEGORY",
    /**
     * Tool to retrieve product categories. use when you need to fetch all categories for product organization and filtering.
     */
    GET_PRODUCTS_CATEGORIES: "REPAIRSHOPR_GET_PRODUCTS_CATEGORIES",
    /**
     * Tool to retrieve all serial numbers for a specific product. use when you need to list serials by product id after confirming the product exists.
     */
    GET_PRODUCT_SERIALS: "REPAIRSHOPR_GET_PRODUCT_SERIALS",
    /**
     * Tool to retrieve details of a specific ticket by its id. use when you need full ticket information after obtaining its id.
     */
    GET_TICKET: "REPAIRSHOPR_GET_TICKET",
    /**
     * Tool to retrieve details of a specific user by id. use after confirming the user exists. example: "get user details for id 42".
     */
    GET_USER: "REPAIRSHOPR_GET_USER",
    /**
     * Tool to retrieve a list of all users. use when you need to list all users in the system to map ids to names.
     */
    GET_USERS: "REPAIRSHOPR_GET_USERS",
    /**
     * Tool to create a new appointment. use after gathering summary and date range.
     */
    POST_APPOINTMENT: "REPAIRSHOPR_POST_APPOINTMENT",
    /**
     * Tool to create a new asset. use when you need to register a device under a customer with either an existing or new asset type.
     */
    POST_ASSET: "REPAIRSHOPR_POST_ASSET",
    /**
     * Tool to create a new customer. use when you need to add a customer record with contact details.
     */
    POST_CUSTOMER: "REPAIRSHOPR_POST_CUSTOMER",
    /**
     * Tool to create a new estimate. use when you have final customer details and line items ready to generate an estimate in repairshopr.
     */
    POST_ESTIMATE: "REPAIRSHOPR_POST_ESTIMATE",
    /**
     * Tool to create a new invoice. use when you need to bill a customer after gathering customer id, date, and optional line items.
     */
    POST_INVOICE: "REPAIRSHOPR_POST_INVOICE",
    /**
     * Tool to create a new lead. use when you need to add a potential customer to the system.
     */
    POST_LEAD: "REPAIRSHOPR_POST_LEAD",
    /**
     * Tool to create a new payment. use when you need to record a payment against an invoice in repairshopr.
     */
    POST_PAYMENT: "REPAIRSHOPR_POST_PAYMENT",
    /**
     * Tool to create a new product in inventory. use when you need to add an item with price and details to your repairshopr catalog.
     */
    POST_PRODUCT: "REPAIRSHOPR_POST_PRODUCT",
    /**
     * Tool to add photo(s) to a specific product. use when you need to attach one or more images to a product after confirming the product id.
     */
    POST_PRODUCT_PHOTO: "REPAIRSHOPR_POST_PRODUCT_PHOTO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REPAIRSHOPR".
 */
export type REPAIRSHOPR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REPAIRSHOPR".
 */
export type REPAIRSHOPR_TRIGGER_EVENTS = {}
