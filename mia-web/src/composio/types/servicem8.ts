// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SERVICEM8's SERVICEM8_CREATE_JOBS tool input.
 */
type SERVICEM8_CREATE_JOBS_INPUT = {
  /**
   * Active
   * @description Active flag (1 = active, 0 = deleted). Defaults to 1.
   * @default 1
   */
  active: number;
  /**
   * Badges
   * @description List of badge UUIDs to apply (comma-separated).
   * @default null
   */
  badges: string[] | null;
  /**
   * Category Uuid
   * @description UUID of the job category.
   * @default null
   */
  category_uuid: string | null;
  /**
   * Company Uuid
   * @description UUID of the customer/company associated with this job.
   * @default null
   */
  company_uuid: string | null;
  /**
   * Created By Staff Uuid
   * @description UUID of the staff member creating this job.
   * @default null
   */
  created_by_staff_uuid: string | null;
  /**
   * Date
   * @description Date the job is scheduled or created (YYYY-MM-DD).
   * @default null
   */
  date: string | null;
  /**
   * Job Address
   * @description Physical address where the job is to be performed.
   */
  job_address?: string;
  /**
   * Job Description
   * @description Brief description of the work to be done.
   * @default null
   */
  job_description: string | null;
  /**
   * Purchase Order Number
   * @description Client purchase order reference number.
   * @default null
   */
  purchase_order_number: string | null;
  /**
   * Queue Uuid
   * @description UUID of the queue to assign this job to.
   * @default null
   */
  queue_uuid: string | null;
  /**
   * Status
   * @description Current status of the job. Controls dispatch board placement.
   * @enum {string}
   */
  status?: "Quote" | "Work Order" | "Unsuccessful" | "Completed";
};

/**
 * Type of SERVICEM8's SERVICEM8_CREATE_JOBS tool output.
 */
type SERVICEM8_CREATE_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job
       * @description The newly created job record.
       */
      job: {
          /**
           * Active
           * @description Active flag (1 = active, 0 = deleted).
           */
          active: number;
          /**
           * Company Uuid
           * @description UUID of the associated company.
           * @default null
           */
          company_uuid: string | null;
          /**
           * Created By Staff Uuid
           * @description UUID of the staff member who created the job.
           * @default null
           */
          created_by_staff_uuid: string | null;
          /**
           * Date
           * @description Date the job was created or scheduled.
           * @default null
           */
          date: string | null;
          /**
           * Job Address
           * @description Address where the job is performed.
           * @default null
           */
          job_address: string | null;
          /**
           * Job Description
           * @description Description of the job.
           * @default null
           */
          job_description: string | null;
          /**
           * Status
           * @description Current status of the job.
           * @enum {string}
           */
          status: "Quote" | "Work Order" | "Unsuccessful" | "Completed";
          /**
           * Uuid
           * @description Unique identifier for this job record.
           */
          uuid: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Record Uuid
       * @description UUID of the newly created job record (from x-record-uuid header).
       */
      record_uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_CREATE_JOB_NOTE tool input.
 */
type SERVICEM8_CREATE_JOB_NOTE_INPUT = {
  /**
   * Action Completed By Staff Uuid
   * @description UUID of staff member who completed the required action.
   * @default null
   */
  action_completed_by_staff_uuid: string | null;
  /**
   * Action Required
   * @description Optional follow-up action required description.
   * @default null
   */
  action_required: string | null;
  /**
   * Active
   * @description Record active flag: 1 = active (default), 0 = deleted.
   * @default 1
   */
  active: number;
  /**
   * Create Date
   * @description Timestamp when record was last modified (ISO 8601). Server overrides if omitted.
   * @default null
   */
  create_date: string | null;
  /**
   * Note
   * @description Content of the note.
   */
  note?: string;
  /**
   * Related Object
   * @description Type of the related object. Use 'job' for job notes.
   */
  related_object?: string;
  /**
   * Related Object Uuid
   * @description UUID of the related job.
   */
  related_object_uuid?: string;
  /**
   * Uuid
   * @description Unique identifier for this note record. If omitted, a UUID will be generated.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_CREATE_JOB_NOTE tool output.
 */
type SERVICEM8_CREATE_JOB_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description API returned error code, if any.
       * @default null
       */
      errorCode: number | null;
      /**
       * Message
       * @description API returned message, if any.
       * @default null
       */
      message: string | null;
      /**
       * Record Uuid
       * @description UUID of the newly created note record (from x-record-uuid header).
       */
      record_uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_CREATE_JOB_PAYMENT tool input.
 */
type SERVICEM8_CREATE_JOB_PAYMENT_INPUT = {
  /**
   * Actioned By Uuid
   * @description UUID of the staff member who actioned the payment.
   */
  actioned_by_uuid?: string;
  /**
   * Active
   * @description 1 if the payment is active; 0 if archived.
   * @enum {integer}
   */
  active?: 0 | 1;
  /**
   * Amount
   * @description Amount of the payment.
   */
  amount?: string;
  /**
   * Attachment Uuid
   * @description UUID of any attachment related to the payment.
   * @default null
   */
  attachment_uuid: string | null;
  /**
   * Edit Date
   * @description Timestamp of last edit in 'YYYY-MM-DD HH:MM:SS' format.
   */
  edit_date?: string;
  /**
   * Is Deposit
   * @description 1 if this payment is a deposit; 0 otherwise.
   * @default null
   * @enum {integer|null}
   */
  is_deposit: 0 | 1 | null;
  /**
   * Job Uuid
   * @description UUID of the associated job.
   */
  job_uuid?: string;
  /**
   * Method
   * @description Payment method used.
   */
  method?: string;
  /**
   * Note
   * @description Additional notes regarding the payment.
   * @default null
   */
  note: string | null;
  /**
   * Timestamp
   * @description Timestamp of the payment in 'YYYY-MM-DD HH:MM:SS' format.
   */
  timestamp?: string;
  /**
   * Uuid
   * @description Optional unique identifier for the job payment.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_CREATE_JOB_PAYMENT tool output.
 */
type SERVICEM8_CREATE_JOB_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount of the payment.
       */
      amount: string;
      /**
       * Is Deposit
       * @description Flag indicating if this payment is a deposit (1) or not (0).
       * @default null
       */
      is_deposit: number | null;
      /**
       * Job Uuid
       * @description UUID of the associated job.
       */
      job_uuid: string;
      /**
       * Method
       * @description Payment method used.
       */
      method: string;
      /**
       * Note
       * @description Optional note for the payment.
       * @default null
       */
      note: string | null;
      /**
       * Timestamp
       * @description Timestamp when payment was recorded.
       */
      timestamp: string;
      /**
       * Uuid
       * @description Unique identifier for this job payment.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_DELETE_JOB_NOTE tool input.
 */
type SERVICEM8_DELETE_JOB_NOTE_INPUT = {
  /**
   * Uuid
   * @description UUID of the job note to delete. Example: '123e4567-e89b-12d3-a456-426614174000'
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_DELETE_JOB_NOTE tool output.
 */
type SERVICEM8_DELETE_JOB_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Record active flag: 1=active, 0=deleted.
       * @default null
       */
      active: number | null;
      /**
       * Created At
       * @description Timestamp when the note was created (YYYY-MM-DD HH:MM:SS)
       */
      created_at: string;
      /**
       * Edit Date
       * @description Timestamp when the note was last modified (YYYY-MM-DD HH:MM:SS)
       * @default null
       */
      edit_date: string | null;
      /**
       * Job Uuid
       * @description UUID of the associated job.
       */
      job_uuid: string;
      /**
       * Note
       * @description Content of the note.
       */
      note: string;
      /**
       * Staff Uuid
       * @description UUID of the staff member who created the note.
       */
      staff_uuid: string;
      /**
       * Uuid
       * @description Unique UUID of the note.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_DELETE_JOB_PAYMENT tool input.
 */
type SERVICEM8_DELETE_JOB_PAYMENT_INPUT = {
  /**
   * Uuid
   * @description The UUID of the job payment to delete (archive).
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_DELETE_JOB_PAYMENT tool output.
 */
type SERVICEM8_DELETE_JOB_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount of the payment.
       */
      amount: string;
      /**
       * Is Deposit
       * @description Flag indicating if this payment is a deposit (1) or not (0).
       */
      is_deposit: number;
      /**
       * Job Uuid
       * @description UUID of the associated job.
       */
      job_uuid: string;
      /**
       * Method
       * @description Payment method used.
       */
      method: string;
      /**
       * Note
       * @description Optional note for the payment.
       * @default null
       */
      note: string | null;
      /**
       * Timestamp
       * @description Timestamp when payment was recorded.
       */
      timestamp: string;
      /**
       * Uuid
       * @description Unique identifier for this job payment.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_ASSETS tool input.
 */
type SERVICEM8_LIST_ALL_ASSETS_INPUT = {
  /**
   * Filter
   * @description Filter expression to narrow down assets; use ServiceM8 filtering syntax, e.g., 'active eq 1'.
   * @default null
   */
  filter: string | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_ASSETS tool output.
 */
type SERVICEM8_LIST_ALL_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description 1 if the asset is active; 0 if archived.
       */
      active: number;
      /**
       * Altitude
       * @description Altitude of the asset's last known location in meters.
       * @default null
       */
      altitude: number | null;
      /**
       * Asset Code
       * @description The unique code printed on the asset's label (read-only).
       */
      asset_code: string;
      /**
       * Asset Type Uuid
       * @description UUID of the Asset Type defining this asset's schema (read-only).
       */
      asset_type_uuid: string;
      /**
       * Company Uuid
       * @description UUID of the client or company associated with this asset.
       */
      company_uuid: string;
      /**
       * Edit Date
       * @description Timestamp when the asset was last modified (YYYY-MM-DD HH:MM:SS).
       */
      edit_date: string;
      /**
       * Field Data
       * @description List of custom field values defined for this asset.
       */
      field_data: {
          /**
           * Field Name
           * @description Name of the custom field.
           */
          fieldName: string;
          /**
           * Field Type
           * @description Type of the field as defined in AssetTypeField.
           */
          fieldType: string;
          /**
           * Field Value
           * @description Value of the custom field (all values returned as strings, dates in Y-m-d format).
           */
          fieldValue: string;
          /**
           * Sort Order
           * @description Sorting order of this field within the asset.
           */
          sortOrder: number;
          /**
           * Uuid
           * @description UUID of the AssetTypeField this value corresponds to.
           */
          uuid: string;
      }[];
      /**
       * Geo Timestamp
       * @description Timestamp when location was last updated (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      geo_timestamp: string | null;
      /**
       * Lat
       * @description Latitude of the asset's last known location in degrees.
       * @default null
       */
      lat: number | null;
      /**
       * Lng
       * @description Longitude of the asset's last known location in degrees.
       * @default null
       */
      lng: number | null;
      /**
       * Name
       * @description User-facing name or description of the asset.
       */
      name: string;
      /**
       * Uuid
       * @description Unique identifier for this asset record.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_CLIENTS tool input.
 */
type SERVICEM8_LIST_ALL_CLIENTS_INPUT = {
  /**
   * Filter
   * @description Filter expression to narrow down clients; use ServiceM8 filtering syntax, e.g., 'active eq true'.
   * @default null
   */
  filter: string | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_CLIENTS tool output.
 */
type SERVICEM8_LIST_ALL_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the client is active.
       */
      active: boolean;
      /**
       * Address
       * @description Physical address of the client.
       * @default null
       */
      address: string | null;
      /**
       * Edit Date
       * @description ISO 8601 timestamp when the client was last modified.
       */
      edit_date: string;
      /**
       * Email
       * @description Primary email address of the client.
       * @default null
       */
      email: string | null;
      /**
       * Name
       * @description Full name or company name of the client.
       */
      name: string;
      /**
       * Notes
       * @description Free-form notes associated with the client.
       * @default null
       */
      notes: string | null;
      /**
       * Phone
       * @description Primary phone number of the client.
       * @default null
       */
      phone: string | null;
      /**
       * Postal Address
       * @description Postal address for the client.
       * @default null
       */
      postal_address: string | null;
      /**
       * Uuid
       * @description Unique identifier for the client record.
       */
      uuid: string;
      /**
       * Website
       * @description Client's website URL.
       * @default null
       */
      website: string | null;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES tool input.
 */
type SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES_INPUT = {
  /**
   * Filter
   * @description Filter expression to narrow document templates; use ServiceM8 filtering syntax, e.g., 'name eq "Invoice"'.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Maximum number of templates to return (must be ≥1).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of templates to skip before returning results (must be ≥0).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES tool output.
 */
type SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Human-readable name of the document template.
       */
      name: string;
      /**
       * Uuid
       * @description Unique identifier for the document template.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_FORMS tool input.
 */
type SERVICEM8_LIST_ALL_FORMS_INPUT = {
  /**
   * Filter
   * @description Filter expression to narrow down forms; use ServiceM8 filtering syntax, e.g., 'active eq true'.
   * @default null
   */
  filter: string | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_FORMS tool output.
 */
type SERVICEM8_LIST_ALL_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the form is active.
       */
      active: boolean;
      /**
       * Description
       * @description Description of the form.
       * @default null
       */
      description: string | null;
      /**
       * Edit Date
       * @description ISO 8601 timestamp when the form was last edited.
       */
      edit_date: string;
      /**
       * Name
       * @description Name of the form.
       */
      name: string;
      /**
       * Uuid
       * @description Unique identifier for the form.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_JOBS tool input.
 */
type SERVICEM8_LIST_ALL_JOBS_INPUT = {
  /**
   * Filter
   * @description Filter criteria to narrow down jobs. Use ServiceM8 filtering syntax, e.g. "status='Completed'".
   * @default null
   */
  filter: string | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_JOBS tool output.
 */
type SERVICEM8_LIST_ALL_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description Array of jobs returned by ServiceM8.
       */
      jobs: {
          /**
           * Active
           * @description Active flag (1 active, 0 deleted).
           * @default null
           */
          active: number | null;
          /**
           * Badges
           * @description Comma-separated list of badge UUIDs associated with this job.
           * @default null
           */
          badges: string | null;
          /**
           * Billing Address
           * @description Address for invoicing; defaults to job address if not specified.
           * @default null
           */
          billing_address: string | null;
          /**
           * Category Uuid
           * @description UUID of the job category.
           * @default null
           */
          category_uuid: string | null;
          /**
           * Company Uuid
           * @description UUID of the client associated with this job.
           */
          company_uuid: string;
          /**
           * Completion Actioned By Uuid
           * @description UUID of staff who marked the job as completed.
           * @default null
           */
          completion_actioned_by_uuid: string | null;
          /**
           * Completion Date
           * @description Timestamp when the job was marked complete.
           * @default null
           */
          completion_date: string | null;
          /**
           * Created By Staff Uuid
           * @description UUID of the staff member who created this job.
           * @default null
           */
          created_by_staff_uuid: string | null;
          /**
           * Date
           * @description Date the job was created or scheduled.
           */
          date: string;
          /**
           * Edit Date
           * @description Timestamp at which the record was last modified.
           * @default null
           */
          edit_date: string | null;
          /**
           * Generated Job Id
           * @description System-generated unique job identifier (read-only).
           * @default null
           */
          generated_job_id: string | null;
          /**
           * Geo City
           * @description City from geocoded address.
           * @default null
           */
          geo_city: string | null;
          /**
           * Geo Country
           * @description Country from geocoded address.
           * @default null
           */
          geo_country: string | null;
          /**
           * Geo Is Valid
           * @description Whether geocoding for the job address was successful.
           * @default null
           */
          geo_is_valid: string | null;
          /**
           * Geo Number
           * @description House number from geocoded address.
           * @default null
           */
          geo_number: string | null;
          /**
           * Geo Postcode
           * @description Postal code from geocoded address.
           * @default null
           */
          geo_postcode: string | null;
          /**
           * Geo State
           * @description State from geocoded address.
           * @default null
           */
          geo_state: string | null;
          /**
           * Geo Street
           * @description Street from geocoded address.
           * @default null
           */
          geo_street: string | null;
          /**
           * Invoice Sent
           * @description Boolean flag indicating whether an invoice has been sent.
           * @default null
           */
          invoice_sent: string | null;
          /**
           * Invoice Sent Stamp
           * @description Timestamp when the invoice was sent (YYYY-MM-DD HH:MM:SS).
           * @default null
           */
          invoice_sent_stamp: string | null;
          /**
           * Job Address
           * @description Physical address where the job is to be performed (max length 500).
           * @default null
           */
          job_address: string | null;
          /**
           * Job Description
           * @description Description of the job.
           * @default null
           */
          job_description: string | null;
          /**
           * Job Is Scheduled Until Stamp
           * @description Timestamp until which the job is scheduled.
           * @default null
           */
          job_is_scheduled_until_stamp: string | null;
          /**
           * Lat
           * @description Latitude coordinate of the job location.
           * @default null
           */
          lat: number | null;
          /**
           * Lng
           * @description Longitude coordinate of the job location.
           * @default null
           */
          lng: number | null;
          /**
           * Payment Actioned By Uuid
           * @description UUID of staff who actioned payment (not used).
           * @default null
           */
          payment_actioned_by_uuid: string | null;
          /**
           * Payment Amount
           * @description Payment amount (not used; refer to JobPayment endpoint).
           * @default null
           */
          payment_amount: string | null;
          /**
           * Payment Date
           * @description Payment date (not used; refer to JobPayment endpoint).
           * @default null
           */
          payment_date: string | null;
          /**
           * Payment Method
           * @description Payment method (not used; refer to JobPayment endpoint).
           * @default null
           */
          payment_method: string | null;
          /**
           * Payment Processed
           * @description Flag indicating payment processed status.
           * @default null
           */
          payment_processed: string | null;
          /**
           * Payment Processed Stamp
           * @description Timestamp when payment was processed.
           * @default null
           */
          payment_processed_stamp: string | null;
          /**
           * Payment Received
           * @description Flag indicating payment received status.
           * @default null
           */
          payment_received: string | null;
          /**
           * Payment Received Stamp
           * @description Timestamp when payment was received.
           * @default null
           */
          payment_received_stamp: string | null;
          /**
           * Purchase Order Number
           * @description Client purchase order reference number (max length 100).
           * @default null
           */
          purchase_order_number: string | null;
          /**
           * Queue Assigned Staff Uuid
           * @description UUID of staff responsible for the job in the queue.
           * @default null
           */
          queue_assigned_staff_uuid: string | null;
          /**
           * Queue Expiry Date
           * @description Timestamp when queue assignment expires (YYYY-MM-DD HH:MM:SS).
           * @default null
           */
          queue_expiry_date: string | null;
          /**
           * Queue Uuid
           * @description UUID of the queue this job is assigned to.
           * @default null
           */
          queue_uuid: string | null;
          /**
           * Quote Date
           * @description Timestamp when the job was quoted.
           * @default null
           */
          quote_date: string | null;
          /**
           * Quote Sent
           * @description Boolean flag (0 or 1) indicating if quote was sent.
           * @default null
           */
          quote_sent: number | null;
          /**
           * Quote Sent Stamp
           * @description Timestamp when the quote was sent (YYYY-MM-DD HH:MM:SS).
           * @default null
           */
          quote_sent_stamp: string | null;
          /**
           * Status
           * @description Current status of the job.
           * @enum {string}
           */
          status: "Quote" | "Work Order" | "Unsuccessful" | "Completed";
          /**
           * Total Invoice Amount
           * @description Total invoiced amount for the job.
           * @default null
           */
          total_invoice_amount: string | null;
          /**
           * Unsuccessful Date
           * @description Timestamp when job was marked unsuccessful.
           * @default null
           */
          unsuccessful_date: string | null;
          /**
           * Uuid
           * @description Unique identifier for this job record.
           */
          uuid: string;
          /**
           * Work Done Description
           * @description Work done description.
           * @default null
           */
          work_done_description: string | null;
          /**
           * Work Order Date
           * @description Timestamp when the job became a work order.
           * @default null
           */
          work_order_date: string | null;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_JOB_NOTES tool input.
 */
type SERVICEM8_LIST_ALL_JOB_NOTES_INPUT = {
  /**
   * Filter
   * @description ServiceM8 OData filter expression; only one filter per request.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Maximum number of notes to return (must be >=1).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of notes to skip (must be >=0).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_JOB_NOTES tool output.
 */
type SERVICEM8_LIST_ALL_JOB_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Active flag: 1=active, 0=deleted.
       * @default null
       */
      active: number | null;
      /**
       * Created At
       * @description Timestamp when the note was created (YYYY-MM-DD HH:MM:SS).
       */
      created_at: string;
      /**
       * Edit Date
       * @description Timestamp when the note was last modified (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      edit_date: string | null;
      /**
       * Job Uuid
       * @description UUID of the associated job.
       */
      job_uuid: string;
      /**
       * Note
       * @description Content of the note.
       */
      note: string;
      /**
       * Staff Uuid
       * @description UUID of the staff member who created the note.
       */
      staff_uuid: string;
      /**
       * Uuid
       * @description Unique identifier for the note.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_JOB_QUEUES tool input.
 */
type SERVICEM8_LIST_ALL_JOB_QUEUES_INPUT = object;

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_JOB_QUEUES tool output.
 */
type SERVICEM8_LIST_ALL_JOB_QUEUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description 1 if the queue is active; 0 if archived.
       */
      active: number;
      /**
       * Default Timeframe
       * @description Default timeframe for the queue in days.
       */
      default_timeframe: number;
      /**
       * Edit Date
       * @description Timestamp when the queue was last modified (YYYY-MM-DD HH:MM:SS).
       */
      edit_date: string;
      /**
       * Name
       * @description Name of the job queue.
       */
      name: string;
      /**
       * Requires Assignment
       * @description 1 if the queue requires assignment; 0 otherwise.
       */
      requires_assignment: number;
      /**
       * Subscribed Staff
       * @description Comma-separated list of staff UUIDs subscribed to this queue.
       * @default null
       */
      subscribed_staff: string | null;
      /**
       * Uuid
       * @description Unique identifier for the job queue.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_LOCATIONS tool input.
 */
type SERVICEM8_LIST_ALL_LOCATIONS_INPUT = object;

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_LOCATIONS tool output.
 */
type SERVICEM8_LIST_ALL_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description 1 if active, 0 if inactive.
       */
      active: number;
      /**
       * City
       * @description City of the location.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the location.
       * @default null
       */
      country: string | null;
      /**
       * Edit Date
       * @description Timestamp of the last edit in format YYYY-MM-DD HH:MM:SS
       */
      edit_date: string;
      /**
       * Lat
       * @description Latitude coordinate.
       */
      lat: number;
      /**
       * Line1
       * @description First line of the address.
       * @default null
       */
      line1: string | null;
      /**
       * Line2
       * @description Second line of the address.
       * @default null
       */
      line2: string | null;
      /**
       * Line3
       * @description Third line of the address.
       * @default null
       */
      line3: string | null;
      /**
       * Lng
       * @description Longitude coordinate.
       */
      lng: number;
      /**
       * Name
       * @description Name of the location.
       */
      name: string;
      /**
       * Phone 1
       * @description Primary phone number.
       * @default null
       */
      phone_1: string | null;
      /**
       * Post Code
       * @description Postal code of the location.
       * @default null
       */
      post_code: string | null;
      /**
       * State
       * @description State or region of the location.
       * @default null
       */
      state: string | null;
      /**
       * Uuid
       * @description Unique identifier of the location.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_MATERIALS tool input.
 */
type SERVICEM8_LIST_ALL_MATERIALS_INPUT = object;

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_MATERIALS tool output.
 */
type SERVICEM8_LIST_ALL_MATERIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the material is active
       */
      active: boolean;
      /**
       * Cost
       * @description Internal cost of the material in account currency
       */
      cost: number;
      /**
       * Created At
       * @description ISO 8601 timestamp when the material was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the material
       */
      description: string;
      /**
       * Name
       * @description Name of the material
       */
      name: string;
      /**
       * Price
       * @description Price of the material in account currency
       */
      price: number;
      /**
       * Tax Rate
       * @description Tax rate applied to the material (percentage)
       */
      tax_rate: number;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the material was last updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description Unique identifier of the material
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_TASKS tool input.
 */
type SERVICEM8_LIST_ALL_TASKS_INPUT = {
  /**
   * Filter
   * @description Filter expression to narrow task results; use OData syntax, e.g., "completed eq false".
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Maximum number of tasks to return (must be ≥1).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of tasks to skip (must be ≥0).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of SERVICEM8's SERVICEM8_LIST_ALL_TASKS tool output.
 */
type SERVICEM8_LIST_ALL_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed
       * @description Whether the task is completed.
       */
      completed: boolean;
      /**
       * Created
       * @description ISO 8601 timestamp when the task was created.
       * @default null
       */
      created: string | null;
      /**
       * Description
       * @description Detailed description of the task.
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description ISO 8601 date when the task is due.
       * @default null
       */
      due_date: string | null;
      /**
       * Job Uuid
       * @description UUID of the job associated with this task.
       * @default null
       */
      job_uuid: string | null;
      /**
       * Modified
       * @description ISO 8601 timestamp when the task was last modified.
       * @default null
       */
      modified: string | null;
      /**
       * Staff Uuid
       * @description UUID of the staff member assigned to the task.
       * @default null
       */
      staff_uuid: string | null;
      /**
       * Title
       * @description Title or subject of the task.
       */
      title: string;
      /**
       * Uuid
       * @description Unique identifier for this task.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_CLIENT tool input.
 */
type SERVICEM8_RETRIEVE_CLIENT_INPUT = {
  /**
   * Uuid
   * @description UUID of the company (client) to retrieve
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_CLIENT tool output.
 */
type SERVICEM8_RETRIEVE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description 1 if active, 0 if archived
       */
      active: number;
      /**
       * Address
       * @description Physical address of the company
       * @default null
       */
      address: string | null;
      /**
       * Edit Date
       * @description ISO-8601 timestamp of last modification
       */
      edit_date: string;
      /**
       * Email
       * @description Email address of the company
       * @default null
       */
      email: string | null;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Notes
       * @description Additional notes for the company
       * @default null
       */
      notes: string | null;
      /**
       * Phone
       * @description Phone number of the company
       * @default null
       */
      phone: string | null;
      /**
       * Postal Address
       * @description Postal address of the company
       * @default null
       */
      postal_address: string | null;
      /**
       * Uuid
       * @description Unique identifier of the company
       */
      uuid: string;
      /**
       * Website
       * @description Website URL of the company
       * @default null
       */
      website: string | null;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_FORM tool input.
 */
type SERVICEM8_RETRIEVE_FORM_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The unique identifier (UUID) of the form to retrieve.
   */
  uuid?: unknown;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_FORM tool output.
 */
type SERVICEM8_RETRIEVE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Active flag: 1=active, 0=deleted.
       * @default null
       */
      active: number | null;
      /**
       * Description
       * @description Description of the form.
       * @default null
       */
      description: string | null;
      /**
       * Edit Date
       * @description Timestamp when the form was last modified (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      edit_date: string | null;
      /**
       * Name
       * @description Name of the form.
       * @default null
       */
      name: string | null;
      /**
       * Uuid
       * @description Unique identifier of the form (UUID).
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB tool input.
 */
type SERVICEM8_RETRIEVE_JOB_INPUT = {
  /**
   * Uuid
   * @description The UUID of the job to retrieve
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB tool output.
 */
type SERVICEM8_RETRIEVE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Record active flag: 1=active, 0=deleted.
       */
      active: number;
      /**
       * Active Network Request Uuid
       * @description DEPRECATED active network request UUID.
       * @default null
       */
      active_network_request_uuid: string | null;
      /**
       * Badges
       * @description Comma-separated badge UUIDs.
       * @default null
       */
      badges: string | null;
      /**
       * Billing Address
       * @description Address where invoices should be sent. Defaults to job address.
       * @default null
       */
      billing_address: string | null;
      /**
       * Category Uuid
       * @description UUID reference to the job category.
       * @default null
       */
      category_uuid: string | null;
      /**
       * Company Uuid
       * @description UUID reference to the client/company associated with this job.
       */
      company_uuid: string;
      /**
       * Completion Actioned By Uuid
       * @description UUID of staff who marked completion.
       * @default null
       */
      completion_actioned_by_uuid: string | null;
      /**
       * Completion Date
       * @description Timestamp when job completed.
       * @default null
       */
      completion_date: string | null;
      /**
       * Created By Staff Uuid
       * @description UUID of the staff member who created the job.
       */
      created_by_staff_uuid: string;
      /**
       * Date
       * @description The date the job was created or scheduled.
       */
      date: string;
      /**
       * Edit Date
       * @description Timestamp of last modification.
       * @default null
       */
      edit_date: string | null;
      /**
       * Generated Job Id
       * @description System-generated job identifier (read-only).
       * @default null
       */
      generated_job_id: string | null;
      /**
       * Geo City
       * @description City extracted from the geocoded address.
       * @default null
       */
      geo_city: string | null;
      /**
       * Geo Country
       * @description Country component extracted from the geocoded address.
       * @default null
       */
      geo_country: string | null;
      /**
       * Geo Is Valid
       * @description Indicates if geocoding was successful.
       * @default null
       */
      geo_is_valid: boolean | null;
      /**
       * Geo Number
       * @description Street number extracted from the geocoded address.
       * @default null
       */
      geo_number: string | null;
      /**
       * Geo Postcode
       * @description Postcode extracted from the geocoded address.
       * @default null
       */
      geo_postcode: string | null;
      /**
       * Geo State
       * @description State extracted from the geocoded address.
       * @default null
       */
      geo_state: string | null;
      /**
       * Geo Street
       * @description Street name extracted from the geocoded address.
       * @default null
       */
      geo_street: string | null;
      /**
       * Invoice Sent
       * @description Flag indicating if invoice sent.
       * @default null
       */
      invoice_sent: boolean | null;
      /**
       * Invoice Sent Stamp
       * @description Timestamp when invoice was sent.
       * @default null
       */
      invoice_sent_stamp: string | null;
      /**
       * Job Address
       * @description Physical job address.
       * @default null
       */
      job_address: string | null;
      /**
       * Job Description
       * @description Description of the job.
       * @default null
       */
      job_description: string | null;
      /**
       * Job Is Scheduled Until Stamp
       * @description Timestamp until job is scheduled.
       * @default null
       */
      job_is_scheduled_until_stamp: string | null;
      /**
       * Lat
       * @description Latitude coordinate of the job location.
       * @default null
       */
      lat: number | null;
      /**
       * Lng
       * @description Longitude coordinate of the job location.
       * @default null
       */
      lng: number | null;
      /**
       * Payment Actioned By Uuid
       * @description (Not used) UUID of staff who actioned payment.
       * @default null
       */
      payment_actioned_by_uuid: string | null;
      /**
       * Payment Amount
       * @description (Not used) Payment amount.
       * @default null
       */
      payment_amount: string | null;
      /**
       * Payment Date
       * @description (Not used) Date of payment. See JobPayment endpoint.
       * @default null
       */
      payment_date: string | null;
      /**
       * Payment Method
       * @description (Not used) Payment method.
       * @default null
       */
      payment_method: string | null;
      /**
       * Payment Note
       * @description (Not used) Payment note.
       * @default null
       */
      payment_note: string | null;
      /**
       * Payment Processed
       * @description Flag if payment processed.
       * @default null
       */
      payment_processed: boolean | null;
      /**
       * Payment Processed Stamp
       * @description Timestamp when payment processed.
       * @default null
       */
      payment_processed_stamp: string | null;
      /**
       * Payment Received
       * @description Flag if payment received.
       * @default null
       */
      payment_received: boolean | null;
      /**
       * Payment Received Stamp
       * @description Timestamp when payment received.
       * @default null
       */
      payment_received_stamp: string | null;
      /**
       * Purchase Order Number
       * @description Client purchase order reference number.
       * @default null
       */
      purchase_order_number: string | null;
      /**
       * Queue Assigned Staff Uuid
       * @description UUID of staff assigned in the queue.
       * @default null
       */
      queue_assigned_staff_uuid: string | null;
      /**
       * Queue Expiry Date
       * @description Expiration timestamp for queue assignment.
       * @default null
       */
      queue_expiry_date: string | null;
      /**
       * Queue Uuid
       * @description UUID reference to the queue this job is assigned to.
       * @default null
       */
      queue_uuid: string | null;
      /**
       * Quote Date
       * @description Timestamp when job was quoted.
       * @default null
       */
      quote_date: string | null;
      /**
       * Quote Sent
       * @description Read-only flag if quote sent (0 or 1).
       * @default null
       */
      quote_sent: number | null;
      /**
       * Quote Sent Stamp
       * @description Timestamp when quote was sent.
       * @default null
       */
      quote_sent_stamp: string | null;
      /**
       * Ready To Invoice
       * @description DEPRECATED flag if ready to invoice.
       * @default null
       */
      ready_to_invoice: boolean | null;
      /**
       * Ready To Invoice Stamp
       * @description DEPRECATED timestamp when ready to invoice.
       * @default null
       */
      ready_to_invoice_stamp: string | null;
      /**
       * Related Knowledge Articles
       * @description DEPRECATED related knowledge articles.
       * @default null
       */
      related_knowledge_articles: string | null;
      /**
       * Status
       * @description Current status of the job. Valid values: [Quote, Work Order, Unsuccessful, Completed].
       */
      status: string;
      /**
       * Total Invoice Amount
       * @description Total invoice amount.
       * @default null
       */
      total_invoice_amount: string | null;
      /**
       * Unsuccessful Date
       * @description Timestamp when job marked unsuccessful.
       * @default null
       */
      unsuccessful_date: string | null;
      /**
       * Uuid
       * @description Unique identifier for this job.
       */
      uuid: string;
      /**
       * Work Done Description
       * @description Description of work done.
       * @default null
       */
      work_done_description: string | null;
      /**
       * Work Order Date
       * @description Timestamp when converted to work order.
       * @default null
       */
      work_order_date: string | null;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_ACTIVITY tool input.
 */
type SERVICEM8_RETRIEVE_JOB_ACTIVITY_INPUT = {
  /**
   * Uuid
   * @description UUID of the ServiceM8 job activity to retrieve
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_ACTIVITY tool output.
 */
type SERVICEM8_RETRIEVE_JOB_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Record active flag: 1=active, 0=deleted.
       */
      active: number;
      /**
       * Activity Was Automated
       * @description Flag if the activity was automated.
       * @default null
       */
      activity_was_automated: number | null;
      /**
       * Activity Was Recorded
       * @description Flag if the activity was recorded.
       * @default null
       */
      activity_was_recorded: number | null;
      /**
       * Activity Was Scheduled
       * @description Flag if the activity was scheduled.
       * @default null
       */
      activity_was_scheduled: number | null;
      /**
       * Allocated By Staff Uuid
       * @description UUID of staff who allocated the activity.
       * @default null
       */
      allocated_by_staff_uuid: string | null;
      /**
       * Allocated Timestamp
       * @description Timestamp when the activity was allocated.
       * @default null
       */
      allocated_timestamp: string | null;
      /**
       * Edit By Staff Uuid
       * @description UUID of staff who last edited the activity.
       * @default null
       */
      edit_by_staff_uuid: string | null;
      /**
       * Edit Date
       * @description Timestamp of last modification.
       * @default null
       */
      edit_date: string | null;
      /**
       * End Date
       * @description End time of the activity.
       * @default null
       */
      end_date: string | null;
      /**
       * Has Been Opened
       * @description Flag if the activity has been opened.
       * @default null
       */
      has_been_opened: number | null;
      /**
       * Has Been Opened Timestamp
       * @description Timestamp when the activity was opened.
       * @default null
       */
      has_been_opened_timestamp: string | null;
      /**
       * Job Uuid
       * @description UUID of the associated job.
       */
      job_uuid: string;
      /**
       * Material Uuid
       * @description UUID of associated material (if any).
       * @default null
       */
      material_uuid: string | null;
      /**
       * Staff Uuid
       * @description UUID of the staff member assigned to the activity.
       */
      staff_uuid: string;
      /**
       * Start Date
       * @description Start time of the activity.
       * @default null
       */
      start_date: string | null;
      /**
       * Travel Distance In Meters
       * @description Travel distance in meters.
       * @default null
       */
      travel_distance_in_meters: string | null;
      /**
       * Travel Time In Seconds
       * @description Travel time in seconds.
       * @default null
       */
      travel_time_in_seconds: string | null;
      /**
       * Uuid
       * @description Unique identifier for the job activity.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_NOTE tool input.
 */
type SERVICEM8_RETRIEVE_JOB_NOTE_INPUT = {
  /**
   * Uuid
   * @description UUID of the job note to retrieve.
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_NOTE tool output.
 */
type SERVICEM8_RETRIEVE_JOB_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description 1 if the note is active; 0 if archived.
       */
      active: number;
      /**
       * Created By Staff Uuid
       * @description UUID of the staff member who created the note.
       */
      created_by_staff_uuid: string;
      /**
       * Edit Date
       * @description Last edit date of the note (YYYY-MM-DD HH:MM:SS).
       */
      edit_date: string;
      /**
       * Job Uuid
       * @description UUID of the job this note is attached to.
       */
      job_uuid: string;
      /**
       * Note
       * @description Text content of the note.
       */
      note: string;
      /**
       * Timestamp
       * @description Timestamp when the note was created (YYYY-MM-DD HH:MM:SS).
       */
      timestamp: string;
      /**
       * Uuid
       * @description Unique identifier for this note.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_PAYMENT tool input.
 */
type SERVICEM8_RETRIEVE_JOB_PAYMENT_INPUT = {
  /**
   * Uuid
   * @description The UUID of the job payment to retrieve.
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_PAYMENT tool output.
 */
type SERVICEM8_RETRIEVE_JOB_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount of the payment.
       */
      amount: string;
      /**
       * Is Deposit
       * @description Flag indicating if this payment is a deposit (1) or not (0).
       */
      is_deposit: number;
      /**
       * Job Uuid
       * @description UUID of the associated job.
       */
      job_uuid: string;
      /**
       * Method
       * @description Payment method used.
       */
      method: string;
      /**
       * Note
       * @description Optional note for the payment.
       * @default null
       */
      note: string | null;
      /**
       * Timestamp
       * @description Timestamp when payment was recorded.
       */
      timestamp: string;
      /**
       * Uuid
       * @description Unique identifier for this job payment.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_QUEUE tool input.
 */
type SERVICEM8_RETRIEVE_JOB_QUEUE_INPUT = {
  /**
   * Uuid
   * @description UUID of the job queue to retrieve.
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_JOB_QUEUE tool output.
 */
type SERVICEM8_RETRIEVE_JOB_QUEUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description 1 if the queue is active; 0 if archived.
       */
      active: number;
      /**
       * Default Timeframe
       * @description Default timeframe for the queue in days.
       */
      default_timeframe: number;
      /**
       * Edit Date
       * @description Last edit date of the queue in YYYY-MM-DD HH:MM:SS format.
       */
      edit_date: string;
      /**
       * Name
       * @description Name of the job queue.
       */
      name: string;
      /**
       * Requires Assignment
       * @description 1 if the queue requires assignment; 0 otherwise.
       */
      requires_assignment: number;
      /**
       * Subscribed Staff
       * @description Comma-separated list of staff UUIDs subscribed to the queue.
       * @default null
       */
      subscribed_staff: string | null;
      /**
       * Uuid
       * @description Unique identifier of the job queue.
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_LOCATION tool input.
 */
type SERVICEM8_RETRIEVE_LOCATION_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the ServiceM8 location to retrieve.
   */
  uuid?: unknown;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_LOCATION tool output.
 */
type SERVICEM8_RETRIEVE_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Formatted address of the location.
       * @default null
       */
      address: string | null;
      /**
       * Created
       * @description ISO 8601 timestamp when the location was created.
       * @default null
       */
      created: string | null;
      /**
       * Deleted
       * @description Whether the location has been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Geocode Status
       * @description Geocoding status of the location address.
       * @default null
       */
      geocode_status: string | null;
      /**
       * Label
       * @description Name or label of the location.
       * @default null
       */
      label: string | null;
      /**
       * Latitude
       * @description Latitude of the location.
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude of the location.
       * @default null
       */
      longitude: number | null;
      /**
       * Modified
       * @description ISO 8601 timestamp when the location was last modified.
       * @default null
       */
      modified: string | null;
      /**
       * Uuid
       * @description Unique identifier of the location (UUID).
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_MATERIAL tool input.
 */
type SERVICEM8_RETRIEVE_MATERIAL_INPUT = {
  /**
   * Uuid
   * @description UUID of the material to retrieve
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_MATERIAL tool output.
 */
type SERVICEM8_RETRIEVE_MATERIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Record active flag: 1 if active, 0 if deleted
       */
      active: number;
      /**
       * Barcode
       * @description Barcode identifier for the material
       * @default null
       */
      barcode: string | null;
      /**
       * Cost
       * @description Purchase cost of the material
       */
      cost: string;
      /**
       * Edit Date
       * @description ISO-8601 timestamp of last modification
       */
      edit_date: string;
      /**
       * Item Description
       * @description Description of the material for forms or invoices
       * @default null
       */
      item_description: string | null;
      /**
       * Item Is Inventoried
       * @description Flag indicating if inventory tracking is enabled (1) or disabled (0)
       */
      item_is_inventoried: number;
      /**
       * Item Number
       * @description Unique identifier code for the material
       * @default null
       */
      item_number: string | null;
      /**
       * Name
       * @description Name of the material, product, or labour rate
       */
      name: string;
      /**
       * Price
       * @description Selling price of the material
       */
      price: string;
      /**
       * Price Includes Taxes
       * @description Flag indicating if price includes taxes (1) or excludes (0)
       */
      price_includes_taxes: number;
      /**
       * Quantity In Stock
       * @description Current inventory quantity available
       * @default null
       */
      quantity_in_stock: number | null;
      /**
       * Tax Rate Uuid
       * @description UUID of the default tax rate applied to this material
       * @default null
       */
      tax_rate_uuid: string | null;
      /**
       * Use Description For Invoicing
       * @description Alternate description used for invoicing
       * @default null
       */
      use_description_for_invoicing: string | null;
      /**
       * Uuid
       * @description Unique identifier of the material record
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_STAFF_MEMBER tool input.
 */
type SERVICEM8_RETRIEVE_STAFF_MEMBER_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The unique identifier (UUID) of the staff member to retrieve.
   */
  uuid?: unknown;
};

/**
 * Type of SERVICEM8's SERVICEM8_RETRIEVE_STAFF_MEMBER tool output.
 */
type SERVICEM8_RETRIEVE_STAFF_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Active flag: 1=active, 0=archived.
       */
      active: number;
      /**
       * Can Receive Push Notification
       * @description Whether the staff can receive push notifications.
       * @default null
       */
      can_receive_push_notification: string | null;
      /**
       * Color
       * @description Hex color code for visual identification.
       * @default null
       */
      color: string | null;
      /**
       * Custom Icon Url
       * @description DEPRECATED. Custom icon URL.
       * @default null
       */
      custom_icon_url: string | null;
      /**
       * Edit Date
       * @description Timestamp when the record was last modified (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      edit_date: string | null;
      /**
       * Email
       * @description Email address (also login name).
       */
      email: string;
      /**
       * First
       * @description First name of the staff member (≤30 chars).
       */
      first: string;
      /**
       * Geo Timestamp
       * @description Timestamp when geographic location was last updated (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      geo_timestamp: string | null;
      /**
       * Hide From Schedule
       * @description 1 to hide from schedule view, 0 to show.
       * @default null
       */
      hide_from_schedule: number | null;
      /**
       * Job Title
       * @description Job title or role.
       * @default null
       */
      job_title: string | null;
      /**
       * Last
       * @description Last name of the staff member (≤30 chars).
       */
      last: string;
      /**
       * Lat
       * @description Latitude of last known location.
       * @default null
       */
      lat: number | null;
      /**
       * Lng
       * @description Longitude of last known location.
       * @default null
       */
      lng: number | null;
      /**
       * Mobile
       * @description Mobile phone number of the staff member.
       * @default null
       */
      mobile: string | null;
      /**
       * Navigating Expiry Timestamp
       * @description When navigation is expected to complete or expire (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      navigating_expiry_timestamp: string | null;
      /**
       * Navigating Timestamp
       * @description Timestamp when navigation to a job started (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      navigating_timestamp: string | null;
      /**
       * Navigating To Job Uuid
       * Format: uuid
       * @description UUID of the job the staff member is navigating to.
       * @default null
       */
      navigating_to_job_uuid: unknown;
      /**
       * Security Role Uuid
       * Format: uuid
       * @description UUID of the primary security role.
       * @default null
       */
      security_role_uuid: unknown;
      /**
       * Status Message
       * @description Short message summarising current status.
       * @default null
       */
      status_message: string | null;
      /**
       * Status Message Timestamp
       * @description When status message was last updated (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      status_message_timestamp: string | null;
      /**
       * Uuid
       * Format: uuid
       * @description Unique identifier for this staff record.
       */
      uuid: unknown;
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
 * Type of SERVICEM8's SERVICEM8_SERVICE_M8_CREATE_JOB tool input.
 */
type SERVICEM8_SERVICE_M8_CREATE_JOB_INPUT = {
  /**
   * Active
   * @description Active flag (1=active, 0=deleted). Defaults to 1.
   * @default 1
   * @enum {integer|null}
   */
  active: 0 | 1 | null;
  /**
   * Badges
   * @description List of badge UUIDs to apply (visual indicators on dispatch board).
   * @default null
   */
  badges: string[] | null;
  /**
   * Category Uuid
   * @description UUID of the job category (e.g., Plumbing, Electrical).
   * @default null
   */
  category_uuid: string | null;
  /**
   * Company Uuid
   * @description UUID of the customer/company associated with this job.
   * @default null
   */
  company_uuid: string | null;
  /**
   * Created By Staff Uuid
   * @description UUID of the staff member creating this job.
   * @default null
   */
  created_by_staff_uuid: string | null;
  /**
   * Date
   * @description Date the job is scheduled or created (YYYY-MM-DD).
   * @default null
   */
  date: string | null;
  /**
   * Job Address
   * @description Physical address where the job is to be performed.
   */
  job_address?: string;
  /**
   * Job Description
   * @description Brief description of the work to be done.
   * @default null
   */
  job_description: string | null;
  /**
   * Purchase Order Number
   * @description Client purchase order reference number.
   * @default null
   */
  purchase_order_number: string | null;
  /**
   * Queue Uuid
   * @description UUID of the queue to assign this job to.
   * @default null
   */
  queue_uuid: string | null;
  /**
   * Status
   * @description Current status of the job (controls dispatch board placement).
   * @enum {string}
   */
  status?: "Quote" | "Work Order" | "Unsuccessful" | "Completed";
};

/**
 * Type of SERVICEM8's SERVICEM8_SERVICE_M8_CREATE_JOB tool output.
 */
type SERVICEM8_SERVICE_M8_CREATE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job
       * @description Full job record returned by the API.
       */
      job: {
          [key: string]: unknown;
      };
      /**
       * Record Uuid
       * @description UUID of the newly created job record (from x-record-uuid header).
       */
      record_uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_UPDATE_JOB_NOTE tool input.
 */
type SERVICEM8_UPDATE_JOB_NOTE_INPUT = {
  /**
   * Active
   * @description Active flag: 1=active, 0=archived
   * @default null
   */
  active: number | null;
  /**
   * Edit Date
   * @description Timestamp when the note was last edited in 'YYYY-MM-DD HH:MM:SS' format
   * @default null
   */
  edit_date: string | null;
  /**
   * Note
   * @description New content for the job note
   * @default null
   */
  note: string | null;
  /**
   * Uuid
   * @description UUID of the job note to update
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_UPDATE_JOB_NOTE tool output.
 */
type SERVICEM8_UPDATE_JOB_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Active flag of the note: 1=active, 0=archived
       */
      active: number;
      /**
       * Created By Staff Uuid
       * @description UUID of the staff member who created the note
       */
      created_by_staff_uuid: string;
      /**
       * Edit Date
       * @description Timestamp when the note was last edited (YYYY-MM-DD HH:MM:SS)
       */
      edit_date: string;
      /**
       * Job Uuid
       * @description UUID of the job this note is associated with
       */
      job_uuid: string;
      /**
       * Note
       * @description Content of the job note
       */
      note: string;
      /**
       * Timestamp
       * @description Timestamp when the note was created (YYYY-MM-DD HH:MM:SS)
       */
      timestamp: string;
      /**
       * Uuid
       * @description UUID of the updated job note
       */
      uuid: string;
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
 * Type of SERVICEM8's SERVICEM8_UPDATE_JOB_PAYMENT tool input.
 */
type SERVICEM8_UPDATE_JOB_PAYMENT_INPUT = {
  /**
   * Actioned By Uuid
   * @description UUID of the staff member who actioned the payment
   * @default null
   */
  actioned_by_uuid: string | null;
  /**
   * Active
   * @description Active flag: 1=active, 0=archived
   * @default null
   */
  active: number | null;
  /**
   * Amount
   * @description Amount of the payment
   */
  amount?: string;
  /**
   * Attachment Uuid
   * @description UUID of an attachment related to the payment
   * @default null
   */
  attachment_uuid: string | null;
  /**
   * Edit Date
   * @description Last edited timestamp in 'YYYY-MM-DD HH:MM:SS' format
   * @default null
   */
  edit_date: string | null;
  /**
   * Is Deposit
   * @description Deposit flag: 1=deposit, 0=not a deposit
   * @default null
   */
  is_deposit: number | null;
  /**
   * Job Uuid
   * @description UUID of the associated job
   */
  job_uuid?: string;
  /**
   * Method
   * @description Payment method used, e.g., 'cash' or 'credit_card'
   * @default null
   */
  method: string | null;
  /**
   * Note
   * @description Optional note for the payment
   * @default null
   */
  note: string | null;
  /**
   * Timestamp
   * @description Payment timestamp in 'YYYY-MM-DD HH:MM:SS' format
   * @default null
   */
  timestamp: string | null;
  /**
   * Uuid
   * @description UUID of the job payment to update
   */
  uuid?: string;
};

/**
 * Type of SERVICEM8's SERVICEM8_UPDATE_JOB_PAYMENT tool output.
 */
type SERVICEM8_UPDATE_JOB_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code returned by ServiceM8; '0' indicates success
       */
      errorCode: string;
      /**
       * Message
       * @description Response message, typically 'OK'
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
 * Type map of all available tool input types for toolkit "SERVICEM8".
 */
export type SERVICEM8_TOOL_INPUTS = {
  CREATE_JOBS: SERVICEM8_CREATE_JOBS_INPUT
  CREATE_JOB_NOTE: SERVICEM8_CREATE_JOB_NOTE_INPUT
  CREATE_JOB_PAYMENT: SERVICEM8_CREATE_JOB_PAYMENT_INPUT
  DELETE_JOB_NOTE: SERVICEM8_DELETE_JOB_NOTE_INPUT
  DELETE_JOB_PAYMENT: SERVICEM8_DELETE_JOB_PAYMENT_INPUT
  LIST_ALL_ASSETS: SERVICEM8_LIST_ALL_ASSETS_INPUT
  LIST_ALL_CLIENTS: SERVICEM8_LIST_ALL_CLIENTS_INPUT
  LIST_ALL_DOCUMENT_TEMPLATES: SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES_INPUT
  LIST_ALL_FORMS: SERVICEM8_LIST_ALL_FORMS_INPUT
  LIST_ALL_JOBS: SERVICEM8_LIST_ALL_JOBS_INPUT
  LIST_ALL_JOB_NOTES: SERVICEM8_LIST_ALL_JOB_NOTES_INPUT
  LIST_ALL_JOB_QUEUES: SERVICEM8_LIST_ALL_JOB_QUEUES_INPUT
  LIST_ALL_LOCATIONS: SERVICEM8_LIST_ALL_LOCATIONS_INPUT
  LIST_ALL_MATERIALS: SERVICEM8_LIST_ALL_MATERIALS_INPUT
  LIST_ALL_TASKS: SERVICEM8_LIST_ALL_TASKS_INPUT
  RETRIEVE_CLIENT: SERVICEM8_RETRIEVE_CLIENT_INPUT
  RETRIEVE_FORM: SERVICEM8_RETRIEVE_FORM_INPUT
  RETRIEVE_JOB: SERVICEM8_RETRIEVE_JOB_INPUT
  RETRIEVE_JOB_ACTIVITY: SERVICEM8_RETRIEVE_JOB_ACTIVITY_INPUT
  RETRIEVE_JOB_NOTE: SERVICEM8_RETRIEVE_JOB_NOTE_INPUT
  RETRIEVE_JOB_PAYMENT: SERVICEM8_RETRIEVE_JOB_PAYMENT_INPUT
  RETRIEVE_JOB_QUEUE: SERVICEM8_RETRIEVE_JOB_QUEUE_INPUT
  RETRIEVE_LOCATION: SERVICEM8_RETRIEVE_LOCATION_INPUT
  RETRIEVE_MATERIAL: SERVICEM8_RETRIEVE_MATERIAL_INPUT
  RETRIEVE_STAFF_MEMBER: SERVICEM8_RETRIEVE_STAFF_MEMBER_INPUT
  SERVICE_M8_CREATE_JOB: SERVICEM8_SERVICE_M8_CREATE_JOB_INPUT
  UPDATE_JOB_NOTE: SERVICEM8_UPDATE_JOB_NOTE_INPUT
  UPDATE_JOB_PAYMENT: SERVICEM8_UPDATE_JOB_PAYMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SERVICEM8".
 */
export type SERVICEM8_TOOL_OUTPUTS = {
  CREATE_JOBS: SERVICEM8_CREATE_JOBS_OUTPUT
  CREATE_JOB_NOTE: SERVICEM8_CREATE_JOB_NOTE_OUTPUT
  CREATE_JOB_PAYMENT: SERVICEM8_CREATE_JOB_PAYMENT_OUTPUT
  DELETE_JOB_NOTE: SERVICEM8_DELETE_JOB_NOTE_OUTPUT
  DELETE_JOB_PAYMENT: SERVICEM8_DELETE_JOB_PAYMENT_OUTPUT
  LIST_ALL_ASSETS: SERVICEM8_LIST_ALL_ASSETS_OUTPUT
  LIST_ALL_CLIENTS: SERVICEM8_LIST_ALL_CLIENTS_OUTPUT
  LIST_ALL_DOCUMENT_TEMPLATES: SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES_OUTPUT
  LIST_ALL_FORMS: SERVICEM8_LIST_ALL_FORMS_OUTPUT
  LIST_ALL_JOBS: SERVICEM8_LIST_ALL_JOBS_OUTPUT
  LIST_ALL_JOB_NOTES: SERVICEM8_LIST_ALL_JOB_NOTES_OUTPUT
  LIST_ALL_JOB_QUEUES: SERVICEM8_LIST_ALL_JOB_QUEUES_OUTPUT
  LIST_ALL_LOCATIONS: SERVICEM8_LIST_ALL_LOCATIONS_OUTPUT
  LIST_ALL_MATERIALS: SERVICEM8_LIST_ALL_MATERIALS_OUTPUT
  LIST_ALL_TASKS: SERVICEM8_LIST_ALL_TASKS_OUTPUT
  RETRIEVE_CLIENT: SERVICEM8_RETRIEVE_CLIENT_OUTPUT
  RETRIEVE_FORM: SERVICEM8_RETRIEVE_FORM_OUTPUT
  RETRIEVE_JOB: SERVICEM8_RETRIEVE_JOB_OUTPUT
  RETRIEVE_JOB_ACTIVITY: SERVICEM8_RETRIEVE_JOB_ACTIVITY_OUTPUT
  RETRIEVE_JOB_NOTE: SERVICEM8_RETRIEVE_JOB_NOTE_OUTPUT
  RETRIEVE_JOB_PAYMENT: SERVICEM8_RETRIEVE_JOB_PAYMENT_OUTPUT
  RETRIEVE_JOB_QUEUE: SERVICEM8_RETRIEVE_JOB_QUEUE_OUTPUT
  RETRIEVE_LOCATION: SERVICEM8_RETRIEVE_LOCATION_OUTPUT
  RETRIEVE_MATERIAL: SERVICEM8_RETRIEVE_MATERIAL_OUTPUT
  RETRIEVE_STAFF_MEMBER: SERVICEM8_RETRIEVE_STAFF_MEMBER_OUTPUT
  SERVICE_M8_CREATE_JOB: SERVICEM8_SERVICE_M8_CREATE_JOB_OUTPUT
  UPDATE_JOB_NOTE: SERVICEM8_UPDATE_JOB_NOTE_OUTPUT
  UPDATE_JOB_PAYMENT: SERVICEM8_UPDATE_JOB_PAYMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SERVICEM8 toolkit.
 */
export const SERVICEM8 = {
  slug: "servicem8",
  tools: {
    /**
     * Tool to create a new job in servicem8. use when you have gathered all job details and need to push a record. example: "create a quote job for 123 main st with po #1234."
     */
    CREATE_JOBS: "SERVICEM8_CREATE_JOBS",
    /**
     * Tool to create a new job note in servicem8. use when you need to attach additional information to a specific job after obtaining its uuid.
     */
    CREATE_JOB_NOTE: "SERVICEM8_CREATE_JOB_NOTE",
    /**
     * Tool to create a new job payment in servicem8. use when you have collected payment details and need to record payment against a job. example: "create a 100.00 cash payment for job 123e4567-e89b-12d3-a456-426614174000 at 2023-01-01 13:00:00."
     */
    CREATE_JOB_PAYMENT: "SERVICEM8_CREATE_JOB_PAYMENT",
    /**
     * Tool to delete a specific job note. use when you need to archive a note by its uuid.
     */
    DELETE_JOB_NOTE: "SERVICEM8_DELETE_JOB_NOTE",
    /**
     * Tool to delete (archive) a specific job payment by its uuid. use when you need to archive a payment record.
     */
    DELETE_JOB_PAYMENT: "SERVICEM8_DELETE_JOB_PAYMENT",
    /**
     * Tool to list all servicem8 assets. use when you need a comprehensive asset registry, including custom fields, for inventory or reporting.
     */
    LIST_ALL_ASSETS: "SERVICEM8_LIST_ALL_ASSETS",
    /**
     * Tool to list all servicem8 clients. use when you need a complete set of customer records for integrations or reporting.
     */
    LIST_ALL_CLIENTS: "SERVICEM8_LIST_ALL_CLIENTS",
    /**
     * Tool to list document templates. use when you need to retrieve available template uuids and names before generating job documents.
     */
    LIST_ALL_DOCUMENT_TEMPLATES: "SERVICEM8_LIST_ALL_DOCUMENT_TEMPLATES",
    /**
     * Tool to list all servicem8 forms. use when you need to fetch available form templates with optional filters.
     */
    LIST_ALL_FORMS: "SERVICEM8_LIST_ALL_FORMS",
    /**
     * Tool to list all jobs. use when you need to fetch all job records from your servicem8 account.
     */
    LIST_ALL_JOBS: "SERVICEM8_LIST_ALL_JOBS",
    /**
     * Tool to list all job notes in servicem8. use when you need to fetch notes, optionally filtered or paginated.
     */
    LIST_ALL_JOB_NOTES: "SERVICEM8_LIST_ALL_JOB_NOTES",
    /**
     * Tool to list all job queues in servicem8. use when you need to fetch configured queues before dispatching jobs.
     */
    LIST_ALL_JOB_QUEUES: "SERVICEM8_LIST_ALL_JOB_QUEUES",
    /**
     * Tool to list all servicem8 locations. use when you need to fetch every configured location for assignments or mapping.
     */
    LIST_ALL_LOCATIONS: "SERVICEM8_LIST_ALL_LOCATIONS",
    /**
     * Tool to list all materials. use when you need a full inventory dump after authenticating with read inventory scope.
     */
    LIST_ALL_MATERIALS: "SERVICEM8_LIST_ALL_MATERIALS",
    /**
     * Tool to list all tasks in a servicem8 account. use when you need to fetch task records, optionally filtered. requires 'read tasks' oauth scope.
     */
    LIST_ALL_TASKS: "SERVICEM8_LIST_ALL_TASKS",
    /**
     * Tool to retrieve details of a specific client by its uuid. use after confirming the client's uuid is valid.
     */
    RETRIEVE_CLIENT: "SERVICEM8_RETRIEVE_CLIENT",
    /**
     * Tool to retrieve details of a specific form by its uuid. use when you need up-to-date form metadata given a known form uuid.
     */
    RETRIEVE_FORM: "SERVICEM8_RETRIEVE_FORM",
    /**
     * Tool to retrieve details of a specific job by its uuid. use when you have the job uuid and need its full record.
     */
    RETRIEVE_JOB: "SERVICEM8_RETRIEVE_JOB",
    /**
     * Tool to retrieve details of a specific job activity by its uuid. use when you have the job activity uuid and need its full details.
     */
    RETRIEVE_JOB_ACTIVITY: "SERVICEM8_RETRIEVE_JOB_ACTIVITY",
    /**
     * Tool to retrieve details of a specific job note by its uuid. use when you have the note uuid (e.g., after listing notes) and need its full record before processing or display.
     */
    RETRIEVE_JOB_NOTE: "SERVICEM8_RETRIEVE_JOB_NOTE",
    /**
     * Tool to retrieve details of a specific job payment by its uuid. use when you have the payment uuid and need its full record and metadata.
     */
    RETRIEVE_JOB_PAYMENT: "SERVICEM8_RETRIEVE_JOB_PAYMENT",
    /**
     * Tool to retrieve details of a specific job queue by its uuid. use when you need full queue metadata before dispatching work.
     */
    RETRIEVE_JOB_QUEUE: "SERVICEM8_RETRIEVE_JOB_QUEUE",
    /**
     * Tool to retrieve details of a specific location by its uuid. use when you already have the location's uuid and need full location details.
     */
    RETRIEVE_LOCATION: "SERVICEM8_RETRIEVE_LOCATION",
    /**
     * Tool to retrieve details of a specific material by its uuid. use when you have a material uuid and need current inventory or pricing details.
     */
    RETRIEVE_MATERIAL: "SERVICEM8_RETRIEVE_MATERIAL",
    /**
     * Tool to retrieve details of a specific staff member by their uuid. use when you need up-to-date staff information given a known staff uuid.
     */
    RETRIEVE_STAFF_MEMBER: "SERVICEM8_RETRIEVE_STAFF_MEMBER",
    /**
     * Tool to create a new job in servicem8. use when you have all job details and need to push a record into servicem8. example: "create a quote job for 123 main st with po #1234."
     */
    SERVICE_M8_CREATE_JOB: "SERVICEM8_SERVICE_M8_CREATE_JOB",
    /**
     * Tool to update details of an existing job note. use when modifying a note after its creation.
     */
    UPDATE_JOB_NOTE: "SERVICEM8_UPDATE_JOB_NOTE",
    /**
     * Tool to update details of an existing job payment. use after confirming the payment uuid and desired changes.
     */
    UPDATE_JOB_PAYMENT: "SERVICEM8_UPDATE_JOB_PAYMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SERVICEM8".
 */
export type SERVICEM8_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SERVICEM8".
 */
export type SERVICEM8_TRIGGER_EVENTS = {}
