// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ETERMIN's ETERMIN_CREATE_CONTACT tool input.
 */
type ETERMIN_CREATE_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description Contact's email address in valid email format
   */
  email?: string;
  /**
   * Firstname
   * @description Contact's first name
   */
  firstname?: string;
  /**
   * Lastname
   * @description Contact's last name
   */
  lastname?: string;
};

/**
 * Type of ETERMIN's ETERMIN_CREATE_CONTACT tool output.
 */
type ETERMIN_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the contact was created
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Contact's email address
       */
      email: string;
      /**
       * Firstname
       * @description Contact's first name
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: number;
      /**
       * Lastname
       * @description Contact's last name
       */
      lastname: string;
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
 * Type of ETERMIN's ETERMIN_CREATE_RESOURCE tool input.
 */
type ETERMIN_CREATE_RESOURCE_INPUT = {
  /**
   * Data
   * @description Payload data for the resource creation, matching the resource's schema.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Resource
   * @description The eTermin resource type to create (e.g., 'contact', 'vouchers', 'resource').
   */
  resource?: string;
  /**
   * Use Form Encoding
   * @description Whether to send payload as application/x-www-form-urlencoded instead of JSON. Some eTermin endpoints (e.g., /contact) require form encoding.
   * @default false
   */
  use_form_encoding: boolean;
};

/**
 * Type of ETERMIN's ETERMIN_CREATE_RESOURCE tool output.
 */
type ETERMIN_CREATE_RESOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Full JSON response from eTermin API for the created resource.
       */
      result: {
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
 * Type of ETERMIN's ETERMIN_CREATE_USER tool input.
 */
type ETERMIN_CREATE_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the new user.
   */
  email?: string;
  /**
   * First Name
   * @description First name of the new user.
   */
  first_name?: string;
  /**
   * Last Name
   * @description Last name of the new user.
   */
  last_name?: string;
  /**
   * Locale
   * @description Optional locale code, e.g., 'en' or 'de'.
   * @default null
   */
  locale: string | null;
  /**
   * Password
   * @description Password for the new user, at least 6 characters.
   */
  password?: string;
  /**
   * Phone
   * @description Optional phone number of the new user.
   * @default null
   */
  phone: string | null;
  /**
   * Role
   * @description Role assigned to the new user.
   * @default client
   * @enum {string}
   */
  role: "client" | "employee" | "admin";
};

/**
 * Type of ETERMIN's ETERMIN_CREATE_USER tool output.
 */
type ETERMIN_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created user (UUID string).
       */
      id: string;
      /**
       * Message
       * @description Additional message or error detail from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the user creation was successful.
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
 * Type of ETERMIN's ETERMIN_CREATE_VOUCHER tool input.
 */
type ETERMIN_CREATE_VOUCHER_INPUT = {
  /**
   * Code
   * @description Unique code for the voucher.
   */
  code?: string;
  /**
   * Discount
   * @description Discount amount in voucher currency or percentage based on type.
   */
  discount?: number;
  /**
   * Type
   * @description Type of discount: 'percent' for percentage discount or 'absolute' for fixed amount.
   * @enum {string}
   */
  type?: "percent" | "absolute";
  /**
   * Valid From
   * @description Start date from which the voucher is valid (YYYY-MM-DD).
   */
  valid_from?: string;
  /**
   * Valid To
   * @description End date until which the voucher is valid (YYYY-MM-DD).
   */
  valid_to?: string;
};

/**
 * Type of ETERMIN's ETERMIN_CREATE_VOUCHER tool output.
 */
type ETERMIN_CREATE_VOUCHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Voucher code.
       */
      code: string;
      /**
       * Created At
       * @description Timestamp when the voucher was created.
       */
      created_at: string;
      /**
       * Discount
       * @description Discount amount or percentage.
       */
      discount: number;
      /**
       * Id
       * @description Unique identifier of the voucher.
       */
      id: number;
      /**
       * Type
       * @description Type of discount.
       * @enum {string}
       */
      type: "percent" | "absolute";
      /**
       * Valid From
       * @description Start date of voucher validity (YYYY-MM-DD).
       */
      valid_from: string;
      /**
       * Valid To
       * @description End date of voucher validity (YYYY-MM-DD).
       */
      valid_to: string;
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
 * Type of ETERMIN's ETERMIN_CREATE_WEBHOOK tool input.
 */
type ETERMIN_CREATE_WEBHOOK_INPUT = {
  /**
   * Data
   * @description Payload containing webhook fields to create. Example: {'url': 'https://example.com/webhook', 'events': ['appointment.created'], 'active': True}
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Use Form Encoding
   * @description Whether to send payload as application/x-www-form-urlencoded instead of JSON. This is a heuristic in case certain endpoints require form encoding.
   * @default false
   */
  use_form_encoding: boolean;
};

/**
 * Type of ETERMIN's ETERMIN_CREATE_WEBHOOK tool output.
 */
type ETERMIN_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Full JSON response from eTermin API or a graceful message
       */
      result: {
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
 * Type of ETERMIN's ETERMIN_DELETE_APPOINTMENT tool input.
 */
type ETERMIN_DELETE_APPOINTMENT_INPUT = {
  /**
   * Appointment Id
   * @description Unique identifier of the appointment to delete
   */
  appointmentId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_APPOINTMENT tool output.
 */
type ETERMIN_DELETE_APPOINTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API, if any
       * @default null
       */
      message: string | null;
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
 * Type of ETERMIN's ETERMIN_DELETE_CALENDAR tool input.
 */
type ETERMIN_DELETE_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the calendar to delete.
   */
  calendarId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_CALENDAR tool output.
 */
type ETERMIN_DELETE_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API, if any
       * @default null
       */
      message: string | null;
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
 * Type of ETERMIN's ETERMIN_DELETE_CONTACT tool input.
 */
type ETERMIN_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to delete
   */
  contact_id?: number;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_CONTACT tool output.
 */
type ETERMIN_DELETE_CONTACT_OUTPUT = {
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
 * Type of ETERMIN's ETERMIN_DELETE_RESOURCE tool input.
 */
type ETERMIN_DELETE_RESOURCE_INPUT = {
  /**
   * Resource
   * @description The resource type path segment (e.g., 'contact', 'service', 'user', 'calendar', 'workingtimes', 'voucher').
   */
  resource?: string;
  /**
   * Resource Id
   * @description Identifier of the resource to delete. Use string to allow numeric and UUIDs.
   */
  resourceId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_RESOURCE tool output.
 */
type ETERMIN_DELETE_RESOURCE_OUTPUT = {
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
 * Type of ETERMIN's ETERMIN_DELETE_SERVICE tool input.
 */
type ETERMIN_DELETE_SERVICE_INPUT = {
  /**
   * Service Id
   * @description Unique identifier of the service to delete.
   */
  service_id?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_SERVICE tool output.
 */
type ETERMIN_DELETE_SERVICE_OUTPUT = {
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
 * Type of ETERMIN's ETERMIN_DELETE_USER tool input.
 */
type ETERMIN_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the user to delete
   */
  userId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_USER tool output.
 */
type ETERMIN_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API, if any
       * @default null
       */
      message: string | null;
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
 * Type of ETERMIN's ETERMIN_DELETE_VOUCHER tool input.
 */
type ETERMIN_DELETE_VOUCHER_INPUT = {
  /**
   * Voucher Id
   * @description Unique identifier of the voucher to delete
   */
  voucherId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_VOUCHER tool output.
 */
type ETERMIN_DELETE_VOUCHER_OUTPUT = {
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
 * Type of ETERMIN's ETERMIN_DELETE_WEBHOOK tool input.
 */
type ETERMIN_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhookId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_DELETE_WEBHOOK tool output.
 */
type ETERMIN_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational message about the deletion outcome
       * @default null
       */
      message: string | null;
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
 * Type of ETERMIN's ETERMIN_GET_APPOINTMENTS tool input.
 */
type ETERMIN_GET_APPOINTMENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of appointments to return (if supported)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination of appointments (if supported)
   * @default null
   */
  offset: number | null;
};

/**
 * Type of ETERMIN's ETERMIN_GET_APPOINTMENTS tool output.
 */
type ETERMIN_GET_APPOINTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description List of appointment records as returned by the eTermin API
       */
      result: {
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
 * Type of ETERMIN's ETERMIN_GET_CALENDARS tool input.
 */
type ETERMIN_GET_CALENDARS_INPUT = object;

/**
 * Type of ETERMIN's ETERMIN_GET_CALENDARS tool output.
 */
type ETERMIN_GET_CALENDARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendars
       * @description List of calendars returned by eTermin API
       */
      calendars: ({
          /**
           * Capacity
           * @description Maximum concurrent appointments allowed
           * @default null
           */
          capacity: number | null;
          /**
           * Company Id
           * @description Company identifier this calendar belongs to
           * @default null
           */
          companyId: number | null;
          /**
           * Created
           * @description Creation timestamp of the calendar
           * @default null
           */
          created: string | null;
          /**
           * Description
           * @description Calendar description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique calendar identifier
           */
          id: number;
          /**
           * Modified
           * @description Last modified timestamp of the calendar
           * @default null
           */
          modified: string | null;
          /**
           * Name
           * @description Calendar name
           */
          name: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of ETERMIN's ETERMIN_GET_CONTACTS tool input.
 */
type ETERMIN_GET_CONTACTS_INPUT = object;

/**
 * Type of ETERMIN's ETERMIN_GET_CONTACTS tool output.
 */
type ETERMIN_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Contact creation timestamp
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Contact's email address
       */
      email: string;
      /**
       * Firstname
       * @description Contact's first name
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: number;
      /**
       * Lastname
       * @description Contact's last name
       */
      lastname: string;
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
 * Type of ETERMIN's ETERMIN_GET_RESOURCES tool input.
 */
type ETERMIN_GET_RESOURCES_INPUT = {
  /**
   * Resource
   * @description The eTermin resource collection to list (e.g., 'contact', 'user', 'service', 'calendar'). Defaults to 'contact'.
   * @default contact
   */
  resource: string;
};

/**
 * Type of ETERMIN's ETERMIN_GET_RESOURCES tool output.
 */
type ETERMIN_GET_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Resources
       * @description List of resource objects returned by the eTermin API
       */
      resources: {
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
 * Type of ETERMIN's ETERMIN_GET_SERVICES tool input.
 */
type ETERMIN_GET_SERVICES_INPUT = object;

/**
 * Type of ETERMIN's ETERMIN_GET_SERVICES tool output.
 */
type ETERMIN_GET_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Services
       * @description List of service objects returned by eTermin
       */
      services: {
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
 * Type of ETERMIN's ETERMIN_GET_USERS tool input.
 */
type ETERMIN_GET_USERS_INPUT = object;

/**
 * Type of ETERMIN's ETERMIN_GET_USERS tool output.
 */
type ETERMIN_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of user objects returned by eTermin
       */
      users: {
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
 * Type of ETERMIN's ETERMIN_GET_WORKING_TIMES tool input.
 */
type ETERMIN_GET_WORKING_TIMES_INPUT = {
  /**
   * Calendarid
   * @description Identifier of the calendar to retrieve working times for
   */
  calendarid?: number;
};

/**
 * Type of ETERMIN's ETERMIN_GET_WORKING_TIMES tool output.
 */
type ETERMIN_GET_WORKING_TIMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workingtimes
       * @description List of working time entries for the specified calendar
       */
      workingtimes: {
          /**
           * Calendarid
           * @description Calendar identifier this entry belongs to
           */
          calendarid: number;
          /**
           * Endtime
           * @description End time of the working period (HH:MM:SS)
           */
          endtime: string;
          /**
           * Fromdate
           * @description Start date for this working time period (YYYY-MM-DD)
           */
          fromdate: string;
          /**
           * Id
           * @description Unique identifier of the working time entry
           */
          id: number;
          /**
           * Starttime
           * @description Start time of the working period (HH:MM:SS)
           */
          starttime: string;
          /**
           * Todate
           * @description End date for this working time period (YYYY-MM-DD)
           */
          todate: string;
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
 * Type of ETERMIN's ETERMIN_LIST_VOUCHERS tool input.
 */
type ETERMIN_LIST_VOUCHERS_INPUT = object;

/**
 * Type of ETERMIN's ETERMIN_LIST_VOUCHERS tool output.
 */
type ETERMIN_LIST_VOUCHERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Vouchers
       * @description List of voucher objects returned by eTermin
       */
      vouchers: {
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
 * Type of ETERMIN's ETERMIN_LIST_WEBHOOKS tool input.
 */
type ETERMIN_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of ETERMIN's ETERMIN_LIST_WEBHOOKS tool output.
 */
type ETERMIN_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook objects returned by eTermin
       */
      webhooks: {
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
 * Type of ETERMIN's ETERMIN_UPDATE_CALENDAR tool input.
 */
type ETERMIN_UPDATE_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the calendar to update.
   */
  calendarId?: string;
  /**
   * Data
   * @description Payload data for the calendar update operation, matching the calendar's schema.
   */
  data?: {
      [key: string]: unknown;
  };
};

/**
 * Type of ETERMIN's ETERMIN_UPDATE_CALENDAR tool output.
 */
type ETERMIN_UPDATE_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Full JSON response from eTermin API for the updated calendar.
       */
      result: {
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
 * Type of ETERMIN's ETERMIN_UPDATE_CONTACT tool input.
 */
type ETERMIN_UPDATE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to update
   */
  contact_id?: number;
  /**
   * Email
   * Format: email
   * @description Updated email address of the contact
   * @default null
   */
  email: string | null;
  /**
   * Firstname
   * @description Updated first name of the contact
   * @default null
   */
  firstname: string | null;
  /**
   * Lastname
   * @description Updated last name of the contact
   * @default null
   */
  lastname: string | null;
};

/**
 * Type of ETERMIN's ETERMIN_UPDATE_CONTACT tool output.
 */
type ETERMIN_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the contact was originally created
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Email address of the contact
       */
      email: string;
      /**
       * Firstname
       * @description First name of the contact
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: number;
      /**
       * Lastname
       * @description Last name of the contact
       */
      lastname: string;
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
 * Type of ETERMIN's ETERMIN_UPDATE_RESOURCE tool input.
 */
type ETERMIN_UPDATE_RESOURCE_INPUT = {
  /**
   * Content Type
   * @description How to encode the payload when calling the API. 'form' sends application/x-www-form-urlencoded, 'json' sends application/json.
   * @default json
   * @enum {string}
   */
  contentType: "json" | "form";
  /**
   * Data
   * @description Payload data containing fields to update for the resource. Accepts dict or list for endpoints requiring arrays (e.g., workingtimes).
   */
  data?: {
      [key: string]: unknown;
  } | null;
  /**
   * Resource
   * @description The resource type path segment (e.g., 'contact', 'service', 'user', 'calendar', 'workingtimes', 'voucher').
   */
  resource?: string;
  /**
   * Resource Id
   * @description Identifier of the resource to update. Use string to allow numeric and UUIDs.
   */
  resourceId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_UPDATE_RESOURCE tool output.
 */
type ETERMIN_UPDATE_RESOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Full JSON response from eTermin API for the updated resource.
       */
      result: {
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
 * Type of ETERMIN's ETERMIN_UPDATE_SERVICE tool input.
 */
type ETERMIN_UPDATE_SERVICE_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the calendar to associate with the service.
   * @default null
   */
  calendar_id: string | null;
  /**
   * Description
   * @description New description of the service.
   * @default null
   */
  description: string | null;
  /**
   * Duration
   * @description New duration of the service in minutes, must be at least 1.
   * @default null
   */
  duration: number | null;
  /**
   * Name
   * @description New name of the service.
   * @default null
   */
  name: string | null;
  /**
   * Price
   * @description New price of the service, must be non-negative.
   * @default null
   */
  price: number | null;
  /**
   * Service Id
   * @description Unique identifier of the service to update.
   */
  service_id?: string;
};

/**
 * Type of ETERMIN's ETERMIN_UPDATE_SERVICE tool output.
 */
type ETERMIN_UPDATE_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Service
       * @description Updated service object returned by eTermin
       */
      service: {
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
 * Type of ETERMIN's ETERMIN_UPDATE_VOUCHER tool input.
 */
type ETERMIN_UPDATE_VOUCHER_INPUT = {
  /**
   * Data
   * @description Payload data containing fields to update for the voucher
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Voucher Id
   * @description Identifier of the voucher to update. Accepts numeric ID or code/GUID.
   */
  voucherId?: number | null;
};

/**
 * Type of ETERMIN's ETERMIN_UPDATE_VOUCHER tool output.
 */
type ETERMIN_UPDATE_VOUCHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Full JSON response from eTermin API for the updated voucher.
       */
      result: {
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
 * Type of ETERMIN's ETERMIN_UPDATE_WEBHOOK tool input.
 */
type ETERMIN_UPDATE_WEBHOOK_INPUT = {
  /**
   * Data
   * @description Payload containing webhook fields to update
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to update
   */
  webhookId?: string;
};

/**
 * Type of ETERMIN's ETERMIN_UPDATE_WEBHOOK tool output.
 */
type ETERMIN_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Full JSON response from eTermin API for the updated webhook
       */
      result: {
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
 * Type map of all available tool input types for toolkit "ETERMIN".
 */
export type ETERMIN_TOOL_INPUTS = {
  CREATE_CONTACT: ETERMIN_CREATE_CONTACT_INPUT
  CREATE_RESOURCE: ETERMIN_CREATE_RESOURCE_INPUT
  CREATE_USER: ETERMIN_CREATE_USER_INPUT
  CREATE_VOUCHER: ETERMIN_CREATE_VOUCHER_INPUT
  CREATE_WEBHOOK: ETERMIN_CREATE_WEBHOOK_INPUT
  DELETE_APPOINTMENT: ETERMIN_DELETE_APPOINTMENT_INPUT
  DELETE_CALENDAR: ETERMIN_DELETE_CALENDAR_INPUT
  DELETE_CONTACT: ETERMIN_DELETE_CONTACT_INPUT
  DELETE_RESOURCE: ETERMIN_DELETE_RESOURCE_INPUT
  DELETE_SERVICE: ETERMIN_DELETE_SERVICE_INPUT
  DELETE_USER: ETERMIN_DELETE_USER_INPUT
  DELETE_VOUCHER: ETERMIN_DELETE_VOUCHER_INPUT
  DELETE_WEBHOOK: ETERMIN_DELETE_WEBHOOK_INPUT
  GET_APPOINTMENTS: ETERMIN_GET_APPOINTMENTS_INPUT
  GET_CALENDARS: ETERMIN_GET_CALENDARS_INPUT
  GET_CONTACTS: ETERMIN_GET_CONTACTS_INPUT
  GET_RESOURCES: ETERMIN_GET_RESOURCES_INPUT
  GET_SERVICES: ETERMIN_GET_SERVICES_INPUT
  GET_USERS: ETERMIN_GET_USERS_INPUT
  GET_WORKING_TIMES: ETERMIN_GET_WORKING_TIMES_INPUT
  LIST_VOUCHERS: ETERMIN_LIST_VOUCHERS_INPUT
  LIST_WEBHOOKS: ETERMIN_LIST_WEBHOOKS_INPUT
  UPDATE_CALENDAR: ETERMIN_UPDATE_CALENDAR_INPUT
  UPDATE_CONTACT: ETERMIN_UPDATE_CONTACT_INPUT
  UPDATE_RESOURCE: ETERMIN_UPDATE_RESOURCE_INPUT
  UPDATE_SERVICE: ETERMIN_UPDATE_SERVICE_INPUT
  UPDATE_VOUCHER: ETERMIN_UPDATE_VOUCHER_INPUT
  UPDATE_WEBHOOK: ETERMIN_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ETERMIN".
 */
export type ETERMIN_TOOL_OUTPUTS = {
  CREATE_CONTACT: ETERMIN_CREATE_CONTACT_OUTPUT
  CREATE_RESOURCE: ETERMIN_CREATE_RESOURCE_OUTPUT
  CREATE_USER: ETERMIN_CREATE_USER_OUTPUT
  CREATE_VOUCHER: ETERMIN_CREATE_VOUCHER_OUTPUT
  CREATE_WEBHOOK: ETERMIN_CREATE_WEBHOOK_OUTPUT
  DELETE_APPOINTMENT: ETERMIN_DELETE_APPOINTMENT_OUTPUT
  DELETE_CALENDAR: ETERMIN_DELETE_CALENDAR_OUTPUT
  DELETE_CONTACT: ETERMIN_DELETE_CONTACT_OUTPUT
  DELETE_RESOURCE: ETERMIN_DELETE_RESOURCE_OUTPUT
  DELETE_SERVICE: ETERMIN_DELETE_SERVICE_OUTPUT
  DELETE_USER: ETERMIN_DELETE_USER_OUTPUT
  DELETE_VOUCHER: ETERMIN_DELETE_VOUCHER_OUTPUT
  DELETE_WEBHOOK: ETERMIN_DELETE_WEBHOOK_OUTPUT
  GET_APPOINTMENTS: ETERMIN_GET_APPOINTMENTS_OUTPUT
  GET_CALENDARS: ETERMIN_GET_CALENDARS_OUTPUT
  GET_CONTACTS: ETERMIN_GET_CONTACTS_OUTPUT
  GET_RESOURCES: ETERMIN_GET_RESOURCES_OUTPUT
  GET_SERVICES: ETERMIN_GET_SERVICES_OUTPUT
  GET_USERS: ETERMIN_GET_USERS_OUTPUT
  GET_WORKING_TIMES: ETERMIN_GET_WORKING_TIMES_OUTPUT
  LIST_VOUCHERS: ETERMIN_LIST_VOUCHERS_OUTPUT
  LIST_WEBHOOKS: ETERMIN_LIST_WEBHOOKS_OUTPUT
  UPDATE_CALENDAR: ETERMIN_UPDATE_CALENDAR_OUTPUT
  UPDATE_CONTACT: ETERMIN_UPDATE_CONTACT_OUTPUT
  UPDATE_RESOURCE: ETERMIN_UPDATE_RESOURCE_OUTPUT
  UPDATE_SERVICE: ETERMIN_UPDATE_SERVICE_OUTPUT
  UPDATE_VOUCHER: ETERMIN_UPDATE_VOUCHER_OUTPUT
  UPDATE_WEBHOOK: ETERMIN_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ETERMIN toolkit.
 */
export const ETERMIN = {
  slug: "etermin",
  tools: {
    /**
     * Tool to create a new contact in eTermin. Use when you need to add a contact before scheduling appointments.
     */
    CREATE_CONTACT: "ETERMIN_CREATE_CONTACT",
    /**
     * Tool to create a new resource. Use when you need to create any eTermin resource (contact, vouchers, resource, appointment).
     */
    CREATE_RESOURCE: "ETERMIN_CREATE_RESOURCE",
    /**
     * Tool to create a new user. Use when you need to add users to eTermin after collecting their details.
     */
    CREATE_USER: "ETERMIN_CREATE_USER",
    /**
     * Tool to create a new voucher in eTermin. Use when you need to add a voucher after defining its details.
     */
    CREATE_VOUCHER: "ETERMIN_CREATE_VOUCHER",
    /**
     * Tool to create a new webhook in eTermin. Attempts multiple candidate endpoints since webhook creation is undocumented. Returns a helpful message if UI-only.
     */
    CREATE_WEBHOOK: "ETERMIN_CREATE_WEBHOOK",
    /**
     * Tool to delete an appointment. Use when you need to remove an existing appointment by its identifier. Confirm the appointment exists before invoking.
     */
    DELETE_APPOINTMENT: "ETERMIN_DELETE_APPOINTMENT",
    /**
     * Tool to delete a calendar. Use when removing an existing calendar by its identifier.
     */
    DELETE_CALENDAR: "ETERMIN_DELETE_CALENDAR",
    /**
     * Tool to delete a contact. Use when you need to remove a contact by its ID after confirming it exists.
     */
    DELETE_CONTACT: "ETERMIN_DELETE_CONTACT",
    /**
     * Tool to delete an existing resource. Uses multiple endpoint/method variants to account for eTermin API differences across resources.
     */
    DELETE_RESOURCE: "ETERMIN_DELETE_RESOURCE",
    /**
     * Tool to delete a service. Use when you need to remove a service by its ID after confirming deletion.
     */
    DELETE_SERVICE: "ETERMIN_DELETE_SERVICE",
    /**
     * Tool to delete a user. Use when you need to remove an existing user by its identifier. Confirm the user exists before invoking.
     */
    DELETE_USER: "ETERMIN_DELETE_USER",
    /**
     * Tool to delete an existing voucher. Use after confirming the voucher ID is correct.
     */
    DELETE_VOUCHER: "ETERMIN_DELETE_VOUCHER",
    /**
     * Tool to delete an existing webhook. Use when you need to remove a webhook subscription by its ID after confirming it exists.
     */
    DELETE_WEBHOOK: "ETERMIN_DELETE_WEBHOOK",
    /**
     * Tool to retrieve a list of appointments. Use when you need to list all scheduled appointments.
     */
    GET_APPOINTMENTS: "ETERMIN_GET_APPOINTMENTS",
    /**
     * Tool to retrieve calendars. Use when listing all calendars in your eTermin account.
     */
    GET_CALENDARS: "ETERMIN_GET_CALENDARS",
    /**
     * Tool to retrieve a list of contacts. Use when you need to list all contacts in your eTermin account.
     */
    GET_CONTACTS: "ETERMIN_GET_CONTACTS",
    /**
     * Tool to retrieve all resources. Use when you need to list your eTermin resources before scheduling or managing them.
     */
    GET_RESOURCES: "ETERMIN_GET_RESOURCES",
    /**
     * Tool to retrieve a list of services. Use when you need to list available services in your eTermin account.
     */
    GET_SERVICES: "ETERMIN_GET_SERVICES",
    /**
     * Tool to retrieve a list of users. Use when you need to list all users in your eTermin account.
     */
    GET_USERS: "ETERMIN_GET_USERS",
    /**
     * Tool to retrieve working times for a specific calendar. Use when confirming available time slots before booking appointments.
     */
    GET_WORKING_TIMES: "ETERMIN_GET_WORKING_TIMES",
    /**
     * Tool to list vouchers. Use when you need to retrieve all vouchers in your eTermin account.
     */
    LIST_VOUCHERS: "ETERMIN_LIST_VOUCHERS",
    /**
     * Tool to retrieve webhooks. Use when listing all webhooks in your eTermin account.
     */
    LIST_WEBHOOKS: "ETERMIN_LIST_WEBHOOKS",
    /**
     * Tool to update an existing calendar. Use when modifying calendar settings by its identifier.
     */
    UPDATE_CALENDAR: "ETERMIN_UPDATE_CALENDAR",
    /**
     * Tool to update an existing contact in eTermin. Use when you need to modify contact details by ID after confirming it exists.
     */
    UPDATE_CONTACT: "ETERMIN_UPDATE_CONTACT",
    /**
     * Tool to update an existing resource. Use after confirming resource existence.
     */
    UPDATE_RESOURCE: "ETERMIN_UPDATE_RESOURCE",
    /**
     * Tool to update an existing service. Use when you need to modify service details after confirming the service ID.
     */
    UPDATE_SERVICE: "ETERMIN_UPDATE_SERVICE",
    /**
     * Tool to update an existing voucher. Use when you need to modify voucher details after creation.
     */
    UPDATE_VOUCHER: "ETERMIN_UPDATE_VOUCHER",
    /**
     * Tool to update an existing webhook. Use when you need to modify webhook configuration after creation.
     */
    UPDATE_WEBHOOK: "ETERMIN_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ETERMIN".
 */
export type ETERMIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ETERMIN".
 */
export type ETERMIN_TRIGGER_EVENTS = {}
