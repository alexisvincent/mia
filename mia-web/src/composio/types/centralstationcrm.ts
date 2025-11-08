// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CHECK_CONNECTION tool input.
 */
type CENTRALSTATIONCRM_CHECK_CONNECTION_INPUT = object;

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CHECK_CONNECTION tool output.
 */
type CENTRALSTATIONCRM_CHECK_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code; 200 means valid connection with regular API key, 204 means valid connection with Android app API key
       * @enum {integer}
       */
      status_code: 200 | 204;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_COUNT_PEOPLE tool input.
 */
type CENTRALSTATIONCRM_COUNT_PEOPLE_INPUT = object;

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_COUNT_PEOPLE tool output.
 */
type CENTRALSTATIONCRM_COUNT_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description The total number of people (contacts) in the account.
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_COMPANY tool input.
 */
type CENTRALSTATIONCRM_CREATE_COMPANY_INPUT = {
  /**
   * Background
   * @description Additional information about the company (e.g., history)
   * @default null
   */
  background: string | null;
  /**
   * Group Id
   * @description ID of the group to which the company belongs
   * @default null
   */
  group_id: number | null;
  /**
   * Name
   * @description Name of the company
   */
  name?: string;
  /**
   * User Id
   * @description ID of the user responsible for this company
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_COMPANY tool output.
 */
type CENTRALSTATIONCRM_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description ID of the account under which the company was created
       */
      account_id: number;
      /**
       * Background
       * @description Additional information about the company
       * @default null
       */
      background: string | null;
      /**
       * Created At
       * @description Timestamp when the company was created
       */
      created_at: string;
      /**
       * Created By User Id
       * @description ID of the user who created the company
       * @default null
       */
      created_by_user_id: number | null;
      /**
       * Group Id
       * @description ID of the group to which the company belongs
       * @default null
       */
      group_id: number | null;
      /**
       * Id
       * @description Unique identifier of the created company
       */
      id: number;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the company was last updated
       */
      updated_at: string;
      /**
       * Updated By User Id
       * @description ID of the user who last updated the company
       * @default null
       */
      updated_by_user_id: number | null;
      /**
       * User Id
       * @description ID of the user responsible for this company
       * @default null
       */
      user_id: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_DEAL tool input.
 */
type CENTRALSTATIONCRM_CREATE_DEAL_INPUT = {
  /**
   * Background
   * @description Additional details about the deal
   * @default null
   */
  background: string | null;
  /**
   * Company Id
   * @description Optional company ID to associate
   * @default null
   */
  company_id: number | null;
  /**
   * Currency
   * @description Currency code (ISO3), default EUR
   * @default null
   */
  currency: string | null;
  /**
   * Current State
   * @description Deal state: open_0, open_25, open_50, open_75, won, or lost
   * @default null
   * @enum {string|null}
   */
  current_state: "open_0" | "open_25" | "open_50" | "open_75" | "won" | "lost" | null;
  /**
   * Finished At
   * @description Optional date-time when deal was won or lost
   * @default null
   */
  finished_at: string | null;
  /**
   * Group Id
   * @description Optional group ID for the deal
   * @default null
   */
  group_id: number | null;
  /**
   * Name
   * @description Name of the deal (max 120 chars)
   */
  name?: string;
  /**
   * Person Ids Set
   * @description Comma-separated person IDs to assign (e.g., '42,4711')
   * @default null
   */
  person_ids_set: string | null;
  /**
   * Target Date
   * @description Expected win date in YYYY-MM-DD
   */
  target_date?: string;
  /**
   * User Id
   * @description Optional user ID responsible for this deal
   * @default null
   */
  user_id: number | null;
  /**
   * Value
   * @description Monetary value in decimal format (e.g., '1000.00')
   */
  value?: string;
  /**
   * Value Count
   * @description Optional quantity, relevant if value_type is not 'total'
   * @default null
   */
  value_count: string | null;
  /**
   * Value Sum
   * @description Optional sum of value in decimal format
   * @default null
   */
  value_sum: string | null;
  /**
   * Value Type
   * @description Billing type: total, monthly, hourly, or daily
   * @enum {string}
   */
  value_type?: "total" | "monthly" | "hourly" | "daily";
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_DEAL tool output.
 */
type CENTRALSTATIONCRM_CREATE_DEAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID under which deal was created
       */
      account_id: number;
      /**
       * Background
       * @description Additional details stored
       * @default null
       */
      background: string | null;
      /**
       * Company Id
       * @description Associated company ID
       * @default null
       */
      company_id: number | null;
      /**
       * Created At
       * @description Timestamp when deal was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code of the deal
       * @default null
       */
      currency: string | null;
      /**
       * Current State
       * @description Current state of the deal
       * @default null
       */
      current_state: string | null;
      /**
       * Finished At
       * @description Date-time when deal was closed
       * @default null
       */
      finished_at: string | null;
      /**
       * Group Id
       * @description Associated group ID
       * @default null
       */
      group_id: number | null;
      /**
       * Id
       * @description Unique identifier of the created deal
       */
      id: number;
      /**
       * Name
       * @description Name of the deal
       */
      name: string;
      /**
       * Target Date
       * @description Expected win date
       */
      target_date: string;
      /**
       * Updated At
       * @description Timestamp when deal was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description Responsible user ID
       * @default null
       */
      user_id: number | null;
      /**
       * Value
       * @description Monetary value of the deal
       */
      value: string;
      /**
       * Value Count
       * @description Quantity if value_type is not 'total'
       * @default null
       */
      value_count: string | null;
      /**
       * Value Sum
       * @description Sum of value in decimal format
       * @default null
       */
      value_sum: string | null;
      /**
       * Value Type
       * @description Billing type of the deal
       */
      value_type: string;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON tool input.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_INPUT = {
  /**
   * Background
   * @description Additional details about the person (e.g., hobbies, interests)
   * @default null
   */
  background: string | null;
  /**
   * First Name
   * @description The person's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Gender
   * @description The person's gender
   * @default null
   */
  gender: string | null;
  /**
   * Name
   * @description The person's last name (surname)
   */
  name?: string;
  /**
   * Title
   * @description The person's job title
   * @default null
   */
  title: string | null;
  /**
   * User Id
   * @description The ID of the user responsible for this person
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON tool output.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background
       * @description Additional details about the person
       * @default null
       */
      background: string | null;
      /**
       * First Name
       * @description The person's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description The person's gender
       * @default null
       */
      gender: string | null;
      /**
       * Id
       * @description Unique identifier of the created person
       */
      id: number;
      /**
       * Name
       * @description The person's last name (surname)
       */
      name: string;
      /**
       * Title
       * @description The person's job title
       * @default null
       */
      title: string | null;
      /**
       * User Id
       * @description The ID of the user responsible for this person
       * @default null
       */
      user_id: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS tool input.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS_INPUT = {
  /**
   * Atype
   * @description Address type. Must be one of work_hq, work, invoice, delivery, private or other.
   * @enum {string}
   */
  atype?: "work_hq" | "work" | "invoice" | "delivery" | "private" | "other";
  /**
   * City
   * @description The city name. Either the city or the country_code is mandatory.
   */
  city?: string;
  /**
   * Country Code
   * @description The country code (ISO 3166-1 alpha-2, e.g. DE, AT)
   * @default null
   */
  country_code: string | null;
  /**
   * Person Id
   * @description The unique identifier of the person to add the address to
   */
  person_id?: number;
  /**
   * Primary
   * @description Decides ordering of addresses when the person has multiple addresses
   * @default null
   */
  primary: boolean | null;
  /**
   * State Code
   * @description The state code (e.g. NW, BY)
   * @default null
   */
  state_code: string | null;
  /**
   * Street
   * @description The street including house number or other details (building, c/o)
   * @default null
   */
  street: string | null;
  /**
   * Zip
   * @description The postal code
   * @default null
   */
  zip: string | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS tool output.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addr
       * @description The newly created address object
       */
      addr: {
          /**
           * Api Input
           * @description States whether the address has been added via the API
           * @default null
           */
          api_input: boolean | null;
          /**
           * Attachable Id
           * @description The ID of the record the address belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description The record type the address belongs to (e.g. Person)
           */
          attachable_type: string;
          /**
           * Atype
           * @description Address type
           * @enum {string}
           */
          atype: "work_hq" | "work" | "invoice" | "delivery" | "private" | "other";
          /**
           * City
           * @description The city name
           */
          city: string;
          /**
           * Country Code
           * @description The country code (ISO 3166-1 alpha-2, e.g. DE)
           * @default null
           */
          country_code: string | null;
          /**
           * Created At
           * @description Timestamp when the address was created (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the created address
           */
          id: number;
          /**
           * Primary
           * @description Decides ordering of addresses when multiple
           * @default null
           */
          primary: boolean | null;
          /**
           * State Code
           * @description The state code (e.g. NW, BY)
           * @default null
           */
          state_code: string | null;
          /**
           * Street
           * @description The street including house number or other details
           * @default null
           */
          street: string | null;
          /**
           * Updated At
           * @description Timestamp when the address was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * Zip
           * @description The postal code
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_ASSI tool input.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_ASSI_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the assistant
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Name of the assistant
   */
  name?: string;
  /**
   * Person Id
   * @description ID of the person to add the assistant to
   */
  person_id?: number;
  /**
   * Primary
   * @description Whether the assistant is the primary contact
   * @default null
   */
  primary: boolean | null;
  /**
   * Tel
   * @description Phone number of the assistant
   * @default null
   */
  tel: string | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_ASSI tool output.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_ASSI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assi
       * @description The newly created assistant object
       */
      assi: {
          /**
           * Created At
           * @description Timestamp when the assistant was created
           */
          created_at: string;
          /**
           * Email
           * Format: email
           * @description Email address of the assistant
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ID of the created assistant
           */
          id: number;
          /**
           * Name
           * @description Name of the assistant
           */
          name: string;
          /**
           * Person Id
           * @description ID of the person the assistant belongs to
           */
          person_id: number;
          /**
           * Primary
           * @description Whether the assistant is the primary contact
           * @default null
           */
          primary: boolean | null;
          /**
           * Tel
           * @description Phone number of the assistant
           * @default null
           */
          tel: string | null;
          /**
           * Updated At
           * @description Timestamp when the assistant was last updated
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_AVATAR tool input.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_AVATAR_INPUT = {
  /**
   * Avatar
   * @description Avatar object with filename, content type, and Base64 data
   */
  avatar?: {
      /**
       * Content Type
       * @description The MIME type of the image
       */
      content_type: string;
      /**
       * Data
       * @description Base64-encoded content of the file
       */
      data: string;
      /**
       * Filename
       * @description The name of the image file
       */
      filename: string;
      /**
       * Orignal Filename
       * @description DEPRECATED: use filename
       * @default null
       */
      orignal_filename: string | null;
  };
  /**
   * Person Id
   * @description The ID of the person to attach the avatar to
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_AVATAR tool output.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_AVATAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description The newly created avatar object
       */
      avatar: {
          /**
           * Account Id
           * @description ID of the related account
           */
          account_id: number;
          /**
           * Attachable Id
           * @description The ID of the record the avatar belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description The record type the avatar belongs to (e.g. Person)
           */
          attachable_type: string;
          /**
           * Content Type
           * @description The MIME type of the image
           */
          content_type: string;
          /**
           * Created At
           * @description Timestamp when the avatar was created (ISO 8601)
           */
          created_at: string;
          /**
           * Data
           * @description Base64-encoded content of the file
           */
          data: string;
          /**
           * Filename
           * @description The name of the image file
           */
          filename: string;
          /**
           * Id
           * @description Unique identifier of the avatar
           */
          id: string;
          /**
           * Updated At
           * @description Timestamp when the avatar was updated (ISO 8601)
           */
          updated_at: string;
          /**
           * User Id
           * @description ID of the user who created the avatar
           */
          user_id: number;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL tool input.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL_INPUT = {
  /**
   * Atype
   * @description Phone type. Must be one of office, office_hq, mobile, fax, private, voip, skype or other.
   * @enum {string}
   */
  atype?: "office" | "office_hq" | "mobile" | "fax" | "private" | "voip" | "skype" | "other";
  /**
   * Name
   * @description The phone number or contact value.
   */
  name?: string;
  /**
   * Person Id
   * @description The unique identifier of the person to add the contact detail to
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL tool output.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tel
       * @description The newly created telephone contact detail object
       */
      tel: {
          /**
           * Attachable Id
           * @description The ID of the record the contact detail belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description The record type the contact detail belongs to (e.g. Person)
           * @enum {string}
           */
          attachable_type: "Person" | "Company";
          /**
           * Atype
           * @description Phone type
           * @enum {string}
           */
          atype: "office" | "office_hq" | "mobile" | "fax" | "private" | "voip" | "skype" | "other";
          /**
           * Created At
           * @description Timestamp when the contact detail was created (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the created contact detail
           */
          id: number;
          /**
           * Name
           * @description The phone number or contact value
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the contact detail was last updated (ISO 8601)
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT tool input.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT_INPUT = {
  /**
   * Atype
   * @description Type of the historic event. Must be one of birthday, anniversary, first_met, renewal or other.
   * @enum {string}
   */
  atype?: "birthday" | "anniversary" | "first_met" | "renewal" | "other";
  /**
   * Desc
   * @description For atype 'other', an additional description may be provided. Ignored otherwise.
   * @default null
   */
  desc: string | null;
  /**
   * Name
   * @description The date of the historic event in YYYY-MM-DD format.
   */
  name?: string;
  /**
   * Person Id
   * @description The unique identifier of the person to add the historic event to
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT tool output.
 */
type CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Historic Event
       * @description The newly created historic event object
       */
      historic_event: {
          /**
           * Api Input
           * @description States whether the historic event was added via the API.
           */
          api_input: boolean;
          /**
           * Attachable Id
           * @description ID of the person this event is attached to.
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description Record type the event belongs to, always 'Person'.
           * @constant
           */
          attachable_type: "Person";
          /**
           * Atype
           * @description Type of the historic event.
           * @enum {string}
           */
          atype: "birthday" | "anniversary" | "first_met" | "renewal" | "other";
          /**
           * Created At
           * @description Timestamp when the historic event was created (ISO 8601).
           */
          created_at: string;
          /**
           * Day
           * @description Day component of the historic event.
           */
          day: number;
          /**
           * Desc
           * @description Optional description for events of type 'other'.
           * @default null
           */
          desc: string | null;
          /**
           * Id
           * @description Unique identifier of the historic event.
           */
          id: number;
          /**
           * Month
           * @description Month component of the historic event.
           */
          month: number;
          /**
           * Name
           * @description Date of the historic event (YYYY-MM-DD).
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the historic event was last updated (ISO 8601).
           */
          updated_at: string;
          /**
           * Year
           * @description Year component of the historic event.
           */
          year: number;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_COMPANY tool input.
 */
type CENTRALSTATIONCRM_DELETE_COMPANY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the company to delete. Must be a positive integer.
   */
  id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_COMPANY tool output.
 */
type CENTRALSTATIONCRM_DELETE_COMPANY_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON tool input.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_INPUT = {
  /**
   * Id
   * @description Unique identifier of the person to delete. Must be a positive integer.
   */
  id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON tool output.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS tool input.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS_INPUT = {
  /**
   * Address Id
   * @description Unique identifier of the address to delete. Must be a positive integer.
   */
  address_id?: number;
  /**
   * Person Id
   * @description Unique identifier of the person to which the address belongs. Must be a positive integer.
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS tool output.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_ASSI tool input.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_ASSI_INPUT = {
  /**
   * Assi Id
   * @description Unique identifier of the assi entry to delete. Must be a positive integer.
   */
  assi_id?: number;
  /**
   * Person Id
   * @description Unique identifier of the person whose assi entry will be deleted. Must be a positive integer.
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_ASSI tool output.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_ASSI_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_AVATAR tool input.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_AVATAR_INPUT = {
  /**
   * Avatar Id
   * @description Unique identifier of the avatar to delete. Must be a string (e.g., UUID).
   */
  avatar_id?: string;
  /**
   * Person Id
   * @description Unique identifier of the person to which the avatar belongs. Must be a positive integer.
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_AVATAR tool output.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_AVATAR_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL tool input.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL_INPUT = {
  /**
   * Contact Detail Id
   * @description Unique identifier of the contact detail to delete. Must be a positive integer.
   */
  contact_detail_id?: number;
  /**
   * Person Id
   * @description Unique identifier of the person to which the contact detail belongs. Must be a positive integer.
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL tool output.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT tool input.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT_INPUT = {
  /**
   * Historic Event Id
   * @description Unique identifier of the historic event to delete. Must be a positive integer.
   */
  historic_event_id?: number;
  /**
   * Person Id
   * @description Unique identifier of the person to which the historic event belongs. Must be a positive integer.
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT tool output.
 */
type CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_API_USER_MAILDROP tool input.
 */
type CENTRALSTATIONCRM_GET_API_USER_MAILDROP_INPUT = object;

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_API_USER_MAILDROP tool output.
 */
type CENTRALSTATIONCRM_GET_API_USER_MAILDROP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Maildrop
       * @description Envelope containing the maildrop object.
       */
      maildrop: {
          /**
           * Account Id
           * @description Account ID associated with the maildrop.
           */
          account_id: number;
          /**
           * Created At
           * @description ISO 8601 timestamp when the maildrop was created.
           */
          created_at: string;
          /**
           * Email Address
           * @description Maildrop email address of the current API user.
           */
          email_address: string;
          /**
           * Entity Id
           * @description ID of the record the maildrop belongs to, if applicable.
           * @default null
           */
          entity_id: number | null;
          /**
           * Entity Type
           * @description Record type the maildrop belongs to: Deal, Project, or null for Person or Company.
           * @default null
           * @enum {string|null}
           */
          entity_type: "Deal" | "Project" | null;
          /**
           * Id
           * @description Unique identifier of the maildrop record.
           */
          id: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the maildrop was last updated.
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID of the current API user.
           */
          user_id: number;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_COMPANY tool input.
 */
type CENTRALSTATIONCRM_GET_COMPANY_INPUT = {
  /**
   * Company Id
   * @description Unique identifier of the company to retrieve
   */
  company_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_COMPANY tool output.
 */
type CENTRALSTATIONCRM_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Info
       * @description Additional metadata and related URLs for the company
       */
      _info: {
          /**
           * Activities Href
           * @description URL to the company's activities
           */
          activities_href: string;
          /**
           * Agreements Href
           * @description URL to the company's agreements
           */
          agreements_href: string;
          /**
           * Configurations Href
           * @description URL to the company's configurations
           */
          configurations_href: string;
          /**
           * Contacts Href
           * @description URL to the company's contacts
           */
          contacts_href: string;
          /**
           * Date Entered
           * @description ISO8601 timestamp when the company was entered
           */
          date_entered: string;
          /**
           * Documents Href
           * @description URL to the company's documents
           */
          documents_href: string;
          /**
           * Entered By
           * @description User who entered the company
           */
          entered_by: string;
          /**
           * Last Updated
           * @description ISO8601 timestamp when the company was last updated
           */
          last_updated: string;
          /**
           * Notes Href
           * @description URL to the company's notes
           */
          notes_href: string;
          /**
           * Opportunities Href
           * @description URL to the company's opportunities
           */
          opportunities_href: string;
          /**
           * Orders Href
           * @description URL to the company's orders
           */
          orders_href: string;
          /**
           * Projects Href
           * @description URL to the company's projects
           */
          projects_href: string;
          /**
           * Reports Href
           * @description URL to the company's reports
           */
          reports_href: string;
          /**
           * Sites Href
           * @description URL to the company's sites
           */
          sites_href: string;
          /**
           * Teams Href
           * @description URL to the company's teams
           */
          teams_href: string;
          /**
           * Tickets Href
           * @description URL to the company's tickets
           */
          tickets_href: string;
          /**
           * Updated By
           * @description User who last updated the company
           */
          updated_by: string;
      };
      /**
       * Account Number
       * @description Company's account number
       * @default null
       */
      account_number: string | null;
      /**
       * Address Line1
       * @description First line of the company's address
       * @default null
       */
      address_line1: string | null;
      /**
       * Annual Revenue
       * @description Company's annual revenue
       * @default null
       */
      annual_revenue: number | null;
      /**
       * BillToCompany
       * @description Company to which bills are sent.
       * @default null
       */
      bill_to_company: {
          /**
           * Id
           * @description ID of the bill-to company
           */
          id: number;
          /**
           * Identifier
           * @description Identifier of the bill-to company
           */
          identifier: string;
          /**
           * Name
           * @description Name of the bill-to company
           */
          name: string;
      } | null;
      /**
       * BillingTerms
       * @description Billing terms object for the company.
       * @default null
       */
      billing_terms: {
          /**
           * Id
           * @description Billing terms ID
           */
          id: number;
          /**
           * Name
           * @description Name of the billing terms
           */
          name: string;
      } | null;
      /**
       * City
       * @description City where the company is located
       * @default null
       */
      city: string | null;
      /**
       * Date Acquired
       * @description Date the company was acquired
       * @default null
       */
      date_acquired: string | null;
      /**
       * DefaultContact
       * @description Default contact person for the company.
       * @default null
       */
      default_contact: {
          /**
           * Id
           * @description ID of the default contact person
           */
          id: number;
          /**
           * Name
           * @description Name of the default contact person
           */
          name: string;
      } | null;
      /**
       * Deleted Flag
       * @description Indicates if the company is deleted
       * @default null
       */
      deleted_flag: boolean | null;
      /**
       * Fax Number
       * @description Company's fax number
       * @default null
       */
      fax_number: string | null;
      /**
       * Id
       * @description Unique identifier of the company
       */
      id: number;
      /**
       * InvoiceDeliveryMethod
       * @description Invoice delivery method object.
       * @default null
       */
      invoice_delivery_method: {
          /**
           * Id
           * @description Delivery method ID
           */
          id: number;
          /**
           * Name
           * @description Name of the delivery method
           */
          name: string;
      } | null;
      /**
       * Lead Flag
       * @description Indicates if the company is a lead
       * @default null
       */
      lead_flag: boolean | null;
      /**
       * Lead Source
       * @description Source from which the lead was acquired
       * @default null
       */
      lead_source: string | null;
      /**
       * Market Id
       * @description ID of the associated market
       * @default null
       */
      market_id: number | null;
      /**
       * Mobile Guid
       * @description Mobile GUID of the company
       * @default null
       */
      mobile_guid: string | null;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Number Of Employees
       * @description Number of employees in the company
       * @default null
       */
      number_of_employees: number | null;
      /**
       * Phone Number
       * @description Company's phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * State
       * @description State where the company is located
       * @default null
       */
      state: string | null;
      /**
       * Status
       * @description Status object of the company
       */
      status: {
          /**
           * Id
           * @description Status ID of the company
           */
          id: number;
          /**
           * Name
           * @description Name of the status
           */
          name: string;
      };
      /**
       * TaxCode
       * @description Tax code object associated with the company.
       * @default null
       */
      tax_code: {
          /**
           * Id
           * @description Tax code ID
           */
          id: number;
          /**
           * Name
           * @description Name of the tax code
           */
          name: string;
      } | null;
      /**
       * Territory Id
       * @description ID of the associated territory
       * @default null
       */
      territory_id: number | null;
      /**
       * TimeZone
       * @description Time zone object of the company.
       * @default null
       */
      time_zone: {
          /**
           * Id
           * @description Time zone ID
           */
          id: number;
          /**
           * Name
           * @description Name of the time zone
           */
          name: string;
      } | null;
      /**
       * Type
       * @description Type object of the company
       */
      type: {
          /**
           * Id
           * @description Type ID of the company
           */
          id: number;
          /**
           * Name
           * @description Name of the type
           */
          name: string;
      };
      /**
       * Unsubscribe Flag
       * @description Indicates if the company has unsubscribed
       * @default null
       */
      unsubscribe_flag: boolean | null;
      /**
       * Website
       * @description Company's website URL
       * @default null
       */
      website: string | null;
      /**
       * Zip
       * @description Postal code of the company's location
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_DEAL tool input.
 */
type CENTRALSTATIONCRM_GET_DEAL_INPUT = {
  /**
   * Deal Id
   * @description Unique identifier of the deal to retrieve
   */
  deal_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_DEAL tool output.
 */
type CENTRALSTATIONCRM_GET_DEAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the deal was created
       * @default null
       */
      created_at: string | null;
      /**
       * Current State
       * @description Current state of the deal, e.g., 'open', 'won', 'lost'
       * @default null
       */
      current_state: string | null;
      /**
       * Id
       * @description Unique identifier of the deal
       */
      id: number;
      /**
       * Name
       * @description Name of the deal
       */
      name: string;
      /**
       * Target Date
       * @description Target date for closing the deal (ISO8601 format)
       * @default null
       */
      target_date: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp of the last update to the deal
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description ID of the user responsible for the deal
       * @default null
       */
      user_id: number | null;
      /**
       * Value
       * @description Monetary value of the deal
       */
      value: number;
      /**
       * Value Type
       * @description Type of billing for the deal, e.g., 'total' or 'monthly'
       */
      value_type: string;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_DEALS tool input.
 */
type CENTRALSTATIONCRM_GET_DEALS_INPUT = {
  /**
   * Includes
   * @description List of related objects to include (e.g., ['companies','tags']).
   * @default null
   */
  includes: string[] | null;
  /**
   * Methods
   * @description List of additional methods to include (e.g., ['responsible_user_natural_name']).
   * @default null
   */
  methods: "responsible_user_natural_name"[] | null;
  /**
   * Page
   * @description Page number to retrieve (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Perpage
   * @description Number of deals per page (maximum 250).
   * @default null
   */
  perpage: number | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_DEALS tool output.
 */
type CENTRALSTATIONCRM_GET_DEALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deals
       * @description List of deals returned by the API.
       */
      deals: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the deal was created.
           */
          created_at: string;
          /**
           * Current State
           * @description Current state of the deal.
           */
          current_state: string;
          /**
           * Id
           * @description Unique identifier for the deal.
           */
          id: number;
          /**
           * Name
           * @description Name of the deal.
           */
          name: string;
          /**
           * Target Date
           * @description Target date for the deal to be won.
           */
          target_date: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the deal was last updated.
           */
          updated_at: string;
          /**
           * User Id
           * @description ID of the responsible user.
           */
          user_id: number;
          /**
           * Value
           * @description Value of the deal.
           */
          value: string;
          /**
           * Value Count
           * @description Numeric value count, relevant if value_type is not 'total'.
           * @default null
           */
          value_count: number | null;
          /**
           * Value Type
           * @description Type of billing (e.g., 'total', 'monthly').
           */
          value_type: string;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_INPUT = {
  /**
   * Includes
   * @description Comma-separated list of related objects to include; one or more of 'companies', 'tags'
   * @default null
   */
  includes: string[] | null;
  /**
   * Methods
   * @description Comma-separated list of methods to include in the response; e.g., 'responsible_user_natural_name'
   * @default null
   */
  methods: string[] | null;
  /**
   * Person Id
   * @description Unique identifier of the person to retrieve
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background
       * @description Background information about the person
       * @default null
       */
      background: string | null;
      /**
       * Companies
       * @description List of associated companies if included
       * @default null
       */
      companies: {
          /**
           * Id
           * @description Unique identifier of the company
           */
          id: number;
          /**
           * Name
           * @description Name of the company
           */
          name: string;
      }[] | null;
      /**
       * Created At
       * @description ISO8601 timestamp when the person was created
       */
      created_at: string;
      /**
       * First Name
       * @description First name of the person
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description Gender of the person
       * @default null
       */
      gender: string | null;
      /**
       * Id
       * @description Unique identifier of the person
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the person
       * @default null
       */
      last_name: string | null;
      /**
       * Tags
       * @description List of associated tags if included
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Honorific title of the person
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp of the last update
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the user responsible for this person
       * @default null
       */
      user_id: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSONS tool input.
 */
type CENTRALSTATIONCRM_GET_PERSONS_INPUT = {
  /**
   * Includes
   * @description List of related objects to include (e.g., ['companies','tags']).
   * @default null
   */
  includes: string[] | null;
  /**
   * Page
   * @description Page number to retrieve (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Perpage
   * @description Number of entries per page (maximum 250).
   * @default null
   */
  perpage: number | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSONS tool output.
 */
type CENTRALSTATIONCRM_GET_PERSONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Persons
       * @description List of persons returned by the API.
       */
      persons: {
          /**
           * Company Id
           * @description ID of the associated company.
           * @default null
           */
          company_id: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the person was created.
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the person.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the person.
           */
          first_name: string;
          /**
           * Id
           * @description Unique identifier for the person.
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the person.
           */
          last_name: string;
          /**
           * Phone
           * @description Phone number of the person.
           * @default null
           */
          phone: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the person was last updated.
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ADDRESS tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_ADDRESS_INPUT = {
  /**
   * Address Id
   * @description Unique identifier of the address to retrieve
   */
  address_id?: number;
  /**
   * Methods
   * @description Optional comma-separated list of methods to include additional information. Example: 'country_name'
   * @default null
   */
  methods: string | null;
  /**
   * Person Id
   * @description Unique identifier of the person whose address is to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ADDRESS tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addr
       * @description The address object
       */
      addr: {
          /**
           * Api Input
           * @description Indicates if the address was added via the API
           * @default null
           */
          api_input: boolean | null;
          /**
           * Attachable Id
           * @description The ID of the record the address belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description The record type the address belongs to (Person or Company)
           */
          attachable_type: string;
          /**
           * Atype
           * @description Address type. Must be one of work_hq, work, invoice, delivery, private, other
           */
          atype: string;
          /**
           * City
           * @description The city name. Either city or country_code is mandatory
           */
          city: string;
          /**
           * Country Code
           * @description The country code (ISO 3166-1 alpha-2, e.g., 'DE')
           * @default null
           */
          country_code: string | null;
          /**
           * Created At
           * @description Timestamp when the address was created (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the address
           */
          id: number;
          /**
           * Primary
           * @description Decides ordering when multiple addresses exist
           * @default null
           */
          primary: boolean | null;
          /**
           * State Code
           * @description The state code (e.g., 'NW')
           * @default null
           */
          state_code: string | null;
          /**
           * Street
           * @description The street including house number or other details
           * @default null
           */
          street: string | null;
          /**
           * Updated At
           * @description Timestamp when the address was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * Zip
           * @description The postal code
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ADDRESSES tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_ADDRESSES_INPUT = {
  /**
   * Includes
   * @description Comma-separated list of related objects to include in the response
   * @default null
   */
  includes: string | null;
  /**
   * Methods
   * @description Comma-separated list of methods to include additional information
   * @default null
   */
  methods: string | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Perpage
   * @description Number of entries per page (default is 50, max is 250)
   * @default null
   */
  perpage: number | null;
  /**
   * Person Id
   * @description Unique identifier of the person whose addresses are to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ADDRESSES tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_ADDRESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addresses
       * @description List of addresses associated with the person
       */
      addresses: {
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the address was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the address
           */
          id: number;
          /**
           * State
           * @description State of the address
           */
          state: string;
          /**
           * Street
           * @description Street address
           */
          street: string;
          /**
           * Type
           * @description Type of address (e.g., 'home', 'work')
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the address was last updated
           */
          updated_at: string;
          /**
           * Zip
           * @description ZIP code of the address
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ASSI tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_ASSI_INPUT = {
  /**
   * Assi Id
   * @description Unique identifier of the assi entry to retrieve
   */
  assi_id?: number;
  /**
   * Person Id
   * @description Unique identifier of the person whose assi is to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ASSI tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_ASSI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assi
       * @description The requested assi object
       */
      assi: {
          /**
           * Created At
           * @description ISO8601 timestamp when the assi entry was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the assi entry
           */
          description: string;
          /**
           * Id
           * @description Unique identifier of the assi entry
           */
          id: number;
          /**
           * Name
           * @description Name or title of the assi entry
           */
          name: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the assi entry was last updated
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ASSIS tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_ASSIS_INPUT = {
  /**
   * Order
   * @description Ordering of records: 'id-asc' or 'id-desc'
   * @default null
   * @enum {string|null}
   */
  order: "id-asc" | "id-desc" | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Perpage
   * @description Number of entries per page (max 250)
   * @default null
   */
  perpage: number | null;
  /**
   * Person Id
   * @description Unique identifier of the person whose assistants are to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_ASSIS tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_ASSIS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assis
       * @description List of assistant entries associated with the person
       */
      assis: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the assistant was created
           */
          created_at: string;
          /**
           * Email
           * @description Email of the assistant
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the assistant
           */
          id: number;
          /**
           * Name
           * @description Name of the assistant
           */
          name: string;
          /**
           * Person Id
           * @description ID of the person the assistant belongs to
           */
          person_id: number;
          /**
           * Primary
           * @description Indicates if the assistant is the primary contact
           */
          primary: boolean;
          /**
           * Tel
           * @description Telephone number of the assistant
           * @default null
           */
          tel: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the assistant was last updated
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_AVATAR tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_AVATAR_INPUT = {
  /**
   * Avatar Id
   * @description Unique identifier (UUID) of the avatar to retrieve
   */
  avatar_id?: string;
  /**
   * Person Id
   * @description Unique identifier of the person whose avatar is to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_AVATAR tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_AVATAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description The requested avatar object
       */
      avatar: {
          /**
           * Account Id
           * @description Identifier of the account that owns the avatar
           */
          account_id: number;
          /**
           * Attachable Id
           * @description ID of the record the avatar belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description The record type the avatar belongs to
           * @enum {string}
           */
          attachable_type: "Person" | "Company" | "User";
          /**
           * Content Type
           * @description MIME type of the avatar image
           */
          content_type: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the avatar was created
           */
          created_at: string;
          /**
           * Data
           * @description Base64-encoded content of the avatar image
           */
          data: string;
          /**
           * Filename
           * @description Name of the avatar file
           */
          filename: string;
          /**
           * Id
           * @description Unique identifier of the avatar
           */
          id: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the avatar was last updated
           */
          updated_at: string;
          /**
           * User Id
           * @description Identifier of the user who created or last updated the avatar
           */
          user_id: number;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_AVATARS tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_AVATARS_INPUT = {
  /**
   * Person Id
   * @description Unique identifier of the person whose avatars are to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_AVATARS tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_AVATARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatars
       * @description List of avatars associated with the person
       */
      avatars: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the avatar was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the avatar
           */
          id: number;
          /**
           * Is Primary
           * @description Indicates if this is the person's primary avatar
           */
          is_primary: boolean;
          /**
           * Type
           * @description Type/category of avatar (e.g., 'profile_photo')
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the avatar was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description Direct URL to the avatar image
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL_INPUT = {
  /**
   * Contact Detail Id
   * @description Unique identifier of the contact detail to retrieve
   */
  contact_detail_id?: number;
  /**
   * Methods
   * @description Optional comma-separated list of methods to include additional info, e.g., 'responsible_user_natural_name'
   * @default null
   */
  methods: string | null;
  /**
   * Person Id
   * @description Unique identifier of the person whose contact detail is to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tel
       * @description The contact detail object
       */
      tel: {
          /**
           * Attachable Id
           * @description The ID of the record the contact detail belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description The record type the contact detail belongs to (Person or Company)
           */
          attachable_type: string;
          /**
           * Atype
           * @description Contact detail type. One of office, office_hq, mobile, fax, private, voip, skype, other
           */
          atype: string;
          /**
           * Id
           * @description Unique identifier of the contact detail
           */
          id: number;
          /**
           * Name
           * @description The value of the contact detail (e.g., phone number)
           */
          name: string;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS_INPUT = {
  /**
   * Person Id
   * @description The unique identifier of the person whose custom fields are to be retrieved
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description List of custom fields associated with the person
       */
      custom_fields: {
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Custom Field Definition Id
           * @description Identifier of the custom field definition
           */
          custom_field_definition_id: number;
          /**
           * Id
           * @description Unique identifier of the custom field instance
           */
          id: number;
          /**
           * Name
           * @description Name of the custom field
           */
          name: string;
          /**
           * Updated At
           * @description Last-updated timestamp (ISO 8601)
           */
          updated_at: string;
          /**
           * Value
           * @description Value of the custom field (string, number, or boolean)
           */
          value: string | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT_INPUT = {
  /**
   * Event Id
   * @description Unique identifier of the historic event to retrieve.
   */
  event_id?: number;
  /**
   * Includes
   * @description Optional comma-separated list of related resources to include.
   * @default null
   */
  includes: string | null;
  /**
   * Methods
   * @description Optional comma-separated list of methods to include additional information.
   * @default null
   */
  methods: string | null;
  /**
   * Person Id
   * @description Unique identifier of the person.
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Historic Event
       * @description The historic event record.
       */
      historic_event: {
          /**
           * Api Input
           * @description True if created via API.
           */
          api_input: boolean;
          /**
           * Attachable Id
           * @description Person ID to which this event belongs.
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description Always 'Person'.
           * @constant
           */
          attachable_type: "Person";
          /**
           * Atype
           * @description Type of the historic event.
           * @enum {string}
           */
          atype: "birthday" | "anniversary" | "first_met" | "renewal" | "other";
          /**
           * Created At
           * Format: date-time
           * @description Creation timestamp.
           */
          created_at: string;
          /**
           * Day
           * @description Day of the event.
           */
          day: number;
          /**
           * Desc
           * @description Description for 'other' event types.
           * @default null
           */
          desc: string | null;
          /**
           * Id
           * @description Event ID.
           */
          id: number;
          /**
           * Month
           * @description Month of the event.
           */
          month: number;
          /**
           * Name
           * Format: date-time
           * @description Date of the historic event (YYYY-MM-DD).
           */
          name: string;
          /**
           * Updated At
           * Format: date-time
           * @description Last update timestamp.
           */
          updated_at: string;
          /**
           * Year
           * @description Year of the event.
           */
          year: number;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS tool input.
 */
type CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS_INPUT = {
  /**
   * Order
   * @description Ordering of records: id-asc or id-desc
   * @default null
   * @enum {string|null}
   */
  order: "id-asc" | "id-desc" | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Perpage
   * @description Number of entries per page (max 250)
   * @default null
   */
  perpage: number | null;
  /**
   * Person Id
   * @description Unique identifier of the person
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS tool output.
 */
type CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Historic Events
       * @description List of historic events associated with the person
       */
      historic_events: {
          /**
           * Api Input
           * @description True if the event was added via the API
           */
          api_input: boolean;
          /**
           * Attachable Id
           * @description ID of the person the event belongs to
           */
          attachable_id: number;
          /**
           * Attachable Type
           * @description Attachable type, always 'Person'
           * @constant
           */
          attachable_type: "Person";
          /**
           * Atype
           * @description Type of the historic event
           * @enum {string}
           */
          atype: "birthday" | "anniversary" | "first_met" | "renewal" | "other";
          /**
           * Created At
           * @description Timestamp when the event was created (ISO 8601)
           */
          created_at: string;
          /**
           * Day
           * @description Day of the historic event
           */
          day: number;
          /**
           * Desc
           * @description Additional description for 'other' event types
           * @default null
           */
          desc: string | null;
          /**
           * Id
           * @description Unique identifier of the historic event
           */
          id: number;
          /**
           * Month
           * @description Month of the historic event
           */
          month: number;
          /**
           * Name
           * @description Date of the historic event (YYYY-MM-DD)
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the event was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * Year
           * @description Year of the historic event
           */
          year: number;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_MERGE_PERSON tool input.
 */
type CENTRALSTATIONCRM_MERGE_PERSON_INPUT = {
  /**
   * Group Id
   * @description Optional. New group ID to assign the merged person
   * @default null
   */
  group_id: number | null;
  /**
   * Looser Ids
   * @description List of person IDs to merge into the target person
   */
  looser_ids?: number[];
  /**
   * No Log
   * @description Suppress creation of an activity log entry when merging
   * @default false
   */
  no_log: boolean | null;
  /**
   * Person Id
   * @description ID of the existing person into whom others will be merged
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_MERGE_PERSON tool output.
 */
type CENTRALSTATIONCRM_MERGE_PERSON_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_SEARCH tool input.
 */
type CENTRALSTATIONCRM_SEARCH_INPUT = {
  /**
   * Term
   * @description Search term to match records across Person, Company, Deal, and Project.
   */
  term?: string;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_SEARCH tool output.
 */
type CENTRALSTATIONCRM_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of matching records. Each record is a JSON object keyed by its type (e.g., person, company, deal, project).
       */
      results: {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_SEARCH_PEOPLE tool input.
 */
type CENTRALSTATIONCRM_SEARCH_PEOPLE_INPUT = {
  /**
   * Page
   * @description 1-indexed page number of results, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, must be >= 1.
   * @default null
   */
  per_page: number | null;
  /**
   * Query
   * @description Text to search for in name, email, phone, etc.
   * @default null
   */
  query: string | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_SEARCH_PEOPLE tool output.
 */
type CENTRALSTATIONCRM_SEARCH_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number of these results.
       * @default null
       */
      current_page: number | null;
      /**
       * People
       * @description List of people matching the search criteria.
       */
      people: {
          /**
           * Company
           * @description Associated company details, if available.
           * @default null
           */
          company: {
              /**
               * Id
               * @description Unique ID of the associated company.
               */
              id: number;
              /**
               * Name
               * @description Name of the associated company.
               */
              name: string;
          } | null;
          /**
           * Created At
           * @description ISO-8601 timestamp when the person was created.
           */
          created_at: string;
          /**
           * Email
           * @description Primary email address of the person.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ID of the person.
           */
          id: number;
          /**
           * Name
           * @description Full name of the person.
           */
          name: string;
          /**
           * Phone
           * @description Primary phone number of the person.
           * @default null
           */
          phone: string | null;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the person was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Total Count
       * @description Total number of matching people across all pages.
       * @default null
       */
      total_count: number | null;
      /**
       * Total Pages
       * @description Total number of pages available.
       * @default null
       */
      total_pages: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_STATS_PEOPLE tool input.
 */
type CENTRALSTATIONCRM_STATS_PEOPLE_INPUT = {
  /**
   * Filter
   * @description Filter criteria map in JSON-API deepObject style. E.g., {'user_id': {'equal': 42}}.
   * @default null
   */
  filter: {
      [key: string]: {
          [key: string]: string | number | (string | number)[];
      };
  } | null;
  /**
   * Tag Id
   * @description Filter statistics by this tag's ID.
   * @default null
   */
  tag_id: number | null;
  /**
   * Tag Name
   * @description Filter statistics by this tag's name.
   * @default null
   */
  tag_name: string | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_STATS_PEOPLE tool output.
 */
type CENTRALSTATIONCRM_STATS_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total Entries
       * @description Total number of people matching the criteria.
       */
      total_entries: number;
      /**
       * Total Size
       * @description Optional additional size metric.
       * @default null
       */
      total_size: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_COMPANY tool input.
 */
type CENTRALSTATIONCRM_UPDATE_COMPANY_INPUT = {
  /**
   * Background
   * @description Optional background or description of the company
   * @default null
   */
  background: string | null;
  /**
   * Company Id
   * @description The unique identifier of the company to update
   */
  company_id?: number;
  /**
   * Group Id
   * @description Optional ID of the group to assign the company to
   * @default null
   */
  group_id: number | null;
  /**
   * Name
   * @description The company's name
   */
  name?: string;
  /**
   * No Log
   * @description Set to true if you don't want to generate an activity in the stream
   * @default null
   */
  no_log: boolean | null;
  /**
   * User Id
   * @description Optional ID of the user responsible for the company
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_COMPANY tool output.
 */
type CENTRALSTATIONCRM_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background
       * @description Background or description of the company
       * @default null
       */
      background: string | null;
      /**
       * Group Id
       * @description ID of the group assigned to the company
       * @default null
       */
      group_id: number | null;
      /**
       * Id
       * @description Unique identifier of the company
       */
      id: number;
      /**
       * Name
       * @description The company's name
       */
      name: string;
      /**
       * User Id
       * @description ID of the user responsible for the company
       * @default null
       */
      user_id: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON tool input.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_INPUT = {
  /**
   * Background
   * @description Additional background or bio information
   * @default null
   */
  background: string | null;
  /**
   * First Name
   * @description The person's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Gender
   * @description The person's gender
   * @default null
   */
  gender: string | null;
  /**
   * Name
   * @description The person's last name (surname)
   * @default null
   */
  name: string | null;
  /**
   * Person Id
   * @description The unique identifier of the person to update
   */
  person_id?: number;
  /**
   * Title
   * @description The person's job title
   * @default null
   */
  title: string | null;
  /**
   * User Id
   * @description The ID of the user responsible for this person
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON tool output.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background
       * @description Additional background or bio information
       * @default null
       */
      background: string | null;
      /**
       * First Name
       * @description The person's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description The person's gender
       * @default null
       */
      gender: string | null;
      /**
       * Id
       * @description Unique identifier of the person
       */
      id: number;
      /**
       * Name
       * @description The person's last name (surname)
       */
      name: string;
      /**
       * Title
       * @description The person's job title
       * @default null
       */
      title: string | null;
      /**
       * User Id
       * @description The ID of the user responsible for this person
       * @default null
       */
      user_id: number | null;
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS tool input.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS_INPUT = {
  /**
   * Address Id
   * @description Unique identifier of the address to update
   */
  address_id?: number;
  /**
   * Atype
   * @description Type of address, one of work_hq, work, invoice, delivery, private or other
   * @default null
   * @enum {string|null}
   */
  atype: "work_hq" | "work" | "invoice" | "delivery" | "private" | "other" | null;
  /**
   * City
   * @description City name. Either city or country_code must be provided
   */
  city?: string;
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code
   * @default null
   */
  country_code: string | null;
  /**
   * Person Id
   * @description Unique identifier of the person
   */
  person_id?: number;
  /**
   * Primary
   * @description Whether this is the primary address
   * @default null
   */
  primary: boolean | null;
  /**
   * State Code
   * @description State or region code (e.g., NW)
   * @default null
   */
  state_code: string | null;
  /**
   * Street
   * @description The street including house number or additional info
   * @default null
   */
  street: string | null;
  /**
   * Zip
   * @description ZIP or postal code
   * @default null
   */
  zip: string | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS tool output.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_ASSI tool input.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_ASSI_INPUT = {
  /**
   * Assi Id
   * @description Unique identifier of the assistant to update
   */
  assi_id?: number;
  /**
   * Email
   * @description The email of the assistant.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description The name of the assistant.
   */
  name?: string;
  /**
   * Person Id
   * @description Unique identifier of the person
   */
  person_id?: number;
  /**
   * Primary
   * @description Indicates if the assistant is the primary contact.
   * @default null
   */
  primary: boolean | null;
  /**
   * Tel
   * @description The telephone number of the assistant.
   * @default null
   */
  tel: string | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_ASSI tool output.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_ASSI_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL tool input.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL_INPUT = {
  /**
   * Atype
   * @description Phone type. One of office, office_hq, mobile, fax, private, voip, skype, other.
   */
  atype?: string;
  /**
   * Contact Detail Id
   * @description Unique identifier of the contact detail to update
   */
  contact_detail_id?: number;
  /**
   * Location Id
   * @description ID of the associated location if applicable
   * @default null
   */
  location_id: number | null;
  /**
   * Name
   * @description The phone number or contact value.
   */
  name?: string;
  /**
   * Person Id
   * @description Unique identifier of the person
   */
  person_id?: number;
  /**
   * Primary
   * @description Whether this should be the primary contact detail of this type
   * @default null
   */
  primary: boolean | null;
  /**
   * Visible
   * @description Whether this contact detail is visible to other users
   * @default null
   */
  visible: boolean | null;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL tool output.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL_OUTPUT = {
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
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT tool input.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT_INPUT = {
  /**
   * Atype
   * @description Type of the historic event. Must be one of birthday, anniversary, first_met, renewal or other.
   * @enum {string}
   */
  atype?: "birthday" | "anniversary" | "first_met" | "renewal" | "other";
  /**
   * Desc
   * @description For atype 'other', an additional description may be provided. Ignored otherwise.
   * @default null
   */
  desc: string | null;
  /**
   * Event Id
   * @description Unique identifier of the historic event to update
   */
  event_id?: number;
  /**
   * Name
   * @description The date of the historic event in YYYY-MM-DD format.
   */
  name?: string;
  /**
   * Person Id
   * @description Unique identifier of the person
   */
  person_id?: number;
};

/**
 * Type of CENTRALSTATIONCRM's CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT tool output.
 */
type CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "CENTRALSTATIONCRM".
 */
export type CENTRALSTATIONCRM_TOOL_INPUTS = {
  CHECK_CONNECTION: CENTRALSTATIONCRM_CHECK_CONNECTION_INPUT
  COUNT_PEOPLE: CENTRALSTATIONCRM_COUNT_PEOPLE_INPUT
  CREATE_COMPANY: CENTRALSTATIONCRM_CREATE_COMPANY_INPUT
  CREATE_DEAL: CENTRALSTATIONCRM_CREATE_DEAL_INPUT
  CREATE_PERSON: CENTRALSTATIONCRM_CREATE_PERSON_INPUT
  CREATE_PERSON_ADDRESS: CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS_INPUT
  CREATE_PERSON_ASSI: CENTRALSTATIONCRM_CREATE_PERSON_ASSI_INPUT
  CREATE_PERSON_AVATAR: CENTRALSTATIONCRM_CREATE_PERSON_AVATAR_INPUT
  CREATE_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL_INPUT
  CREATE_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT_INPUT
  DELETE_COMPANY: CENTRALSTATIONCRM_DELETE_COMPANY_INPUT
  DELETE_PERSON: CENTRALSTATIONCRM_DELETE_PERSON_INPUT
  DELETE_PERSON_ADDRESS: CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS_INPUT
  DELETE_PERSON_ASSI: CENTRALSTATIONCRM_DELETE_PERSON_ASSI_INPUT
  DELETE_PERSON_AVATAR: CENTRALSTATIONCRM_DELETE_PERSON_AVATAR_INPUT
  DELETE_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL_INPUT
  DELETE_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT_INPUT
  GET_API_USER_MAILDROP: CENTRALSTATIONCRM_GET_API_USER_MAILDROP_INPUT
  GET_COMPANY: CENTRALSTATIONCRM_GET_COMPANY_INPUT
  GET_DEAL: CENTRALSTATIONCRM_GET_DEAL_INPUT
  GET_DEALS: CENTRALSTATIONCRM_GET_DEALS_INPUT
  GET_PERSON: CENTRALSTATIONCRM_GET_PERSON_INPUT
  GET_PERSONS: CENTRALSTATIONCRM_GET_PERSONS_INPUT
  GET_PERSON_ADDRESS: CENTRALSTATIONCRM_GET_PERSON_ADDRESS_INPUT
  GET_PERSON_ADDRESSES: CENTRALSTATIONCRM_GET_PERSON_ADDRESSES_INPUT
  GET_PERSON_ASSI: CENTRALSTATIONCRM_GET_PERSON_ASSI_INPUT
  GET_PERSON_ASSIS: CENTRALSTATIONCRM_GET_PERSON_ASSIS_INPUT
  GET_PERSON_AVATAR: CENTRALSTATIONCRM_GET_PERSON_AVATAR_INPUT
  GET_PERSON_AVATARS: CENTRALSTATIONCRM_GET_PERSON_AVATARS_INPUT
  GET_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL_INPUT
  GET_PERSON_CUSTOM_FIELDS: CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS_INPUT
  GET_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT_INPUT
  GET_PERSON_HISTORIC_EVENTS: CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS_INPUT
  MERGE_PERSON: CENTRALSTATIONCRM_MERGE_PERSON_INPUT
  SEARCH: CENTRALSTATIONCRM_SEARCH_INPUT
  SEARCH_PEOPLE: CENTRALSTATIONCRM_SEARCH_PEOPLE_INPUT
  STATS_PEOPLE: CENTRALSTATIONCRM_STATS_PEOPLE_INPUT
  UPDATE_COMPANY: CENTRALSTATIONCRM_UPDATE_COMPANY_INPUT
  UPDATE_PERSON: CENTRALSTATIONCRM_UPDATE_PERSON_INPUT
  UPDATE_PERSON_ADDRESS: CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS_INPUT
  UPDATE_PERSON_ASSI: CENTRALSTATIONCRM_UPDATE_PERSON_ASSI_INPUT
  UPDATE_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL_INPUT
  UPDATE_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CENTRALSTATIONCRM".
 */
export type CENTRALSTATIONCRM_TOOL_OUTPUTS = {
  CHECK_CONNECTION: CENTRALSTATIONCRM_CHECK_CONNECTION_OUTPUT
  COUNT_PEOPLE: CENTRALSTATIONCRM_COUNT_PEOPLE_OUTPUT
  CREATE_COMPANY: CENTRALSTATIONCRM_CREATE_COMPANY_OUTPUT
  CREATE_DEAL: CENTRALSTATIONCRM_CREATE_DEAL_OUTPUT
  CREATE_PERSON: CENTRALSTATIONCRM_CREATE_PERSON_OUTPUT
  CREATE_PERSON_ADDRESS: CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS_OUTPUT
  CREATE_PERSON_ASSI: CENTRALSTATIONCRM_CREATE_PERSON_ASSI_OUTPUT
  CREATE_PERSON_AVATAR: CENTRALSTATIONCRM_CREATE_PERSON_AVATAR_OUTPUT
  CREATE_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL_OUTPUT
  CREATE_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT_OUTPUT
  DELETE_COMPANY: CENTRALSTATIONCRM_DELETE_COMPANY_OUTPUT
  DELETE_PERSON: CENTRALSTATIONCRM_DELETE_PERSON_OUTPUT
  DELETE_PERSON_ADDRESS: CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS_OUTPUT
  DELETE_PERSON_ASSI: CENTRALSTATIONCRM_DELETE_PERSON_ASSI_OUTPUT
  DELETE_PERSON_AVATAR: CENTRALSTATIONCRM_DELETE_PERSON_AVATAR_OUTPUT
  DELETE_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL_OUTPUT
  DELETE_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT_OUTPUT
  GET_API_USER_MAILDROP: CENTRALSTATIONCRM_GET_API_USER_MAILDROP_OUTPUT
  GET_COMPANY: CENTRALSTATIONCRM_GET_COMPANY_OUTPUT
  GET_DEAL: CENTRALSTATIONCRM_GET_DEAL_OUTPUT
  GET_DEALS: CENTRALSTATIONCRM_GET_DEALS_OUTPUT
  GET_PERSON: CENTRALSTATIONCRM_GET_PERSON_OUTPUT
  GET_PERSONS: CENTRALSTATIONCRM_GET_PERSONS_OUTPUT
  GET_PERSON_ADDRESS: CENTRALSTATIONCRM_GET_PERSON_ADDRESS_OUTPUT
  GET_PERSON_ADDRESSES: CENTRALSTATIONCRM_GET_PERSON_ADDRESSES_OUTPUT
  GET_PERSON_ASSI: CENTRALSTATIONCRM_GET_PERSON_ASSI_OUTPUT
  GET_PERSON_ASSIS: CENTRALSTATIONCRM_GET_PERSON_ASSIS_OUTPUT
  GET_PERSON_AVATAR: CENTRALSTATIONCRM_GET_PERSON_AVATAR_OUTPUT
  GET_PERSON_AVATARS: CENTRALSTATIONCRM_GET_PERSON_AVATARS_OUTPUT
  GET_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL_OUTPUT
  GET_PERSON_CUSTOM_FIELDS: CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS_OUTPUT
  GET_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT_OUTPUT
  GET_PERSON_HISTORIC_EVENTS: CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS_OUTPUT
  MERGE_PERSON: CENTRALSTATIONCRM_MERGE_PERSON_OUTPUT
  SEARCH: CENTRALSTATIONCRM_SEARCH_OUTPUT
  SEARCH_PEOPLE: CENTRALSTATIONCRM_SEARCH_PEOPLE_OUTPUT
  STATS_PEOPLE: CENTRALSTATIONCRM_STATS_PEOPLE_OUTPUT
  UPDATE_COMPANY: CENTRALSTATIONCRM_UPDATE_COMPANY_OUTPUT
  UPDATE_PERSON: CENTRALSTATIONCRM_UPDATE_PERSON_OUTPUT
  UPDATE_PERSON_ADDRESS: CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS_OUTPUT
  UPDATE_PERSON_ASSI: CENTRALSTATIONCRM_UPDATE_PERSON_ASSI_OUTPUT
  UPDATE_PERSON_CONTACT_DETAIL: CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL_OUTPUT
  UPDATE_PERSON_HISTORIC_EVENT: CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CENTRALSTATIONCRM toolkit.
 */
export const CENTRALSTATIONCRM = {
  slug: "centralstationcrm",
  tools: {
    /**
     * Tool to verify the connection status of the centralstationcrm api key. use when validating credentials before making other api calls.
     */
    CHECK_CONNECTION: "CENTRALSTATIONCRM_CHECK_CONNECTION",
    /**
     * Tool to retrieve the total number of people in the account. use when you need the current total number of contacts in your centralstationcrm account. example: "how many contacts exist in my account?"
     */
    COUNT_PEOPLE: "CENTRALSTATIONCRM_COUNT_PEOPLE",
    /**
     * Tool to create a new company record. use when you need to add an organization to your crm before linking it to contacts or deals.
     */
    CREATE_COMPANY: "CENTRALSTATIONCRM_CREATE_COMPANY",
    /**
     * Tool to create a new deal record. use when needing to log a sales opportunity after grouping contacts or companies.
     */
    CREATE_DEAL: "CENTRALSTATIONCRM_CREATE_DEAL",
    /**
     * Tool to create a new person record. use when you need to add a person to your crm before linking them to other records.
     */
    CREATE_PERSON: "CENTRALSTATIONCRM_CREATE_PERSON",
    /**
     * Tool to create a new address for a specific person. use when you need to add or update postal details after confirming person id.
     */
    CREATE_PERSON_ADDRESS: "CENTRALSTATIONCRM_CREATE_PERSON_ADDRESS",
    /**
     * Tool to create a new assistant (assi) entry for a specific person. use after confirming the person id when you need to manage assistant contacts.
     */
    CREATE_PERSON_ASSI: "CENTRALSTATIONCRM_CREATE_PERSON_ASSI",
    /**
     * Tool to create a new avatar for a specific person. use when you need to attach a base64-encoded image file after confirming the person's id.
     */
    CREATE_PERSON_AVATAR: "CENTRALSTATIONCRM_CREATE_PERSON_AVATAR",
    /**
     * Tool to create a new contact detail for a specific person. use when adding a phone number after confirming the person's id.
     */
    CREATE_PERSON_CONTACT_DETAIL: "CENTRALSTATIONCRM_CREATE_PERSON_CONTACT_DETAIL",
    /**
     * Tool to create a new historic event for a specific person. use after confirming person id to record dates like birthdays, anniversaries, or other milestones.
     */
    CREATE_PERSON_HISTORIC_EVENT: "CENTRALSTATIONCRM_CREATE_PERSON_HISTORIC_EVENT",
    /**
     * Tool to delete a company record by id. use when you need to permanently remove an organization after verifying the correct id.
     */
    DELETE_COMPANY: "CENTRALSTATIONCRM_DELETE_COMPANY",
    /**
     * Tool to delete a person record by id. use when you need to permanently remove a contact after verifying the correct id.
     */
    DELETE_PERSON: "CENTRALSTATIONCRM_DELETE_PERSON",
    /**
     * Tool to delete a person's address by its id. use when you need to remove an outdated or incorrect address after confirming the person id and address id.
     */
    DELETE_PERSON_ADDRESS: "CENTRALSTATIONCRM_DELETE_PERSON_ADDRESS",
    /**
     * Tool to delete an assi entry of a person. use when you need to remove an assistant record after confirming person id and assi id.
     */
    DELETE_PERSON_ASSI: "CENTRALSTATIONCRM_DELETE_PERSON_ASSI",
    /**
     * Tool to delete a person's avatar by its id. use when you need to remove an outdated or incorrect avatar after confirming the person id and avatar id.
     */
    DELETE_PERSON_AVATAR: "CENTRALSTATIONCRM_DELETE_PERSON_AVATAR",
    /**
     * Tool to delete a contact detail of a person. use when you need to remove an outdated or incorrect contact detail after confirming the person id and contact detail id.
     */
    DELETE_PERSON_CONTACT_DETAIL: "CENTRALSTATIONCRM_DELETE_PERSON_CONTACT_DETAIL",
    /**
     * Tool to delete a historic event of a person by its id. use when you need to remove outdated or incorrect milestone entries after confirming the person id and historic event id.
     */
    DELETE_PERSON_HISTORIC_EVENT: "CENTRALSTATIONCRM_DELETE_PERSON_HISTORIC_EVENT",
    /**
     * Tool to retrieve the current api user's maildrop for people and companies. use after authenticating the api user.
     */
    GET_API_USER_MAILDROP: "CENTRALSTATIONCRM_GET_API_USER_MAILDROP",
    /**
     * Tool to retrieve details of a specific company by id. use after confirming the company id.
     */
    GET_COMPANY: "CENTRALSTATIONCRM_GET_COMPANY",
    /**
     * Tool to retrieve details of a specific deal by its id. use when you have a confirmed deal id.
     */
    GET_DEAL: "CENTRALSTATIONCRM_GET_DEAL",
    /**
     * Tool to retrieve a paginated list of all deals. use when you need to list deals with pagination and optional includes (e.g., companies, tags) or additional methods.
     */
    GET_DEALS: "CENTRALSTATIONCRM_GET_DEALS",
    /**
     * Tool to retrieve details of a specific person by id. use when you have a person id and need their full details.
     */
    GET_PERSON: "CENTRALSTATIONCRM_GET_PERSON",
    /**
     * Tool to retrieve a paginated list of all people. use when listing contacts with pagination and optional includes.
     */
    GET_PERSONS: "CENTRALSTATIONCRM_GET_PERSONS",
    /**
     * Tool to retrieve a specific address of a person by address id. use after confirming person and address ids. example: "fetch address for person #42, address #101."
     */
    GET_PERSON_ADDRESS: "CENTRALSTATIONCRM_GET_PERSON_ADDRESS",
    /**
     * Tool to retrieve all addresses for a specific person. use when you need to list a person’s addresses after confirming their id. example: "get addresses for person with id 42."
     */
    GET_PERSON_ADDRESSES: "CENTRALSTATIONCRM_GET_PERSON_ADDRESSES",
    /**
     * Tool to retrieve a specific assi entry of a person by id. use after confirming person id and assi id.
     */
    GET_PERSON_ASSI: "CENTRALSTATIONCRM_GET_PERSON_ASSI",
    /**
     * Tool to retrieve all assistant entries for a specific person. use after confirming the person id. example: "list assistants for person with id 42."
     */
    GET_PERSON_ASSIS: "CENTRALSTATIONCRM_GET_PERSON_ASSIS",
    /**
     * Tool to retrieve a specific avatar of a person by avatar id. use after you know both person id and avatar id to fetch the base64-encoded image.
     */
    GET_PERSON_AVATAR: "CENTRALSTATIONCRM_GET_PERSON_AVATAR",
    /**
     * Tool to retrieve all avatars for a specific person. use when you need to list a person’s avatars after confirming their id. example: "list avatars for person with id 42."
     */
    GET_PERSON_AVATARS: "CENTRALSTATIONCRM_GET_PERSON_AVATARS",
    /**
     * Tool to retrieve a specific contact detail by id for a person. use after confirming person and contact detail ids. example: "fetch contact detail #108 for person #42."
     */
    GET_PERSON_CONTACT_DETAIL: "CENTRALSTATIONCRM_GET_PERSON_CONTACT_DETAIL",
    /**
     * Tool to retrieve all custom fields for a specific person. use when you need to access a person's custom fields after confirming their id.
     */
    GET_PERSON_CUSTOM_FIELDS: "CENTRALSTATIONCRM_GET_PERSON_CUSTOM_FIELDS",
    /**
     * Tool to retrieve a specific historic event of a person by id. use after confirming both person and event ids. example: "fetch historic event 101 for person 42."
     */
    GET_PERSON_HISTORIC_EVENT: "CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENT",
    /**
     * Tool to retrieve all historic events for a specific person. use when you need to list a person's historical dates after confirming their id.
     */
    GET_PERSON_HISTORIC_EVENTS: "CENTRALSTATIONCRM_GET_PERSON_HISTORIC_EVENTS",
    /**
     * Tool to merge another person into an existing person by id. use after identifying duplicate records to consolidate them. example: merge person 42 with [43,44].
     */
    MERGE_PERSON: "CENTRALSTATIONCRM_MERGE_PERSON",
    /**
     * Search records
     */
    SEARCH: "CENTRALSTATIONCRM_SEARCH",
    /**
     * Tool to retrieve people matching search criteria. use when you need to find specific contacts by name, email, or phone after authenticating with your api key.
     */
    SEARCH_PEOPLE: "CENTRALSTATIONCRM_SEARCH_PEOPLE",
    /**
     * Tool to retrieve key statistics about people. use when you need a quick summary of total entries, e.g., after filtering by tag or custom criteria.
     */
    STATS_PEOPLE: "CENTRALSTATIONCRM_STATS_PEOPLE",
    /**
     * Tool to update an existing company by id. use after retrieving the company's details when you need to modify one or more fields.
     */
    UPDATE_COMPANY: "CENTRALSTATIONCRM_UPDATE_COMPANY",
    /**
     * Tool to update an existing person by id. use after retrieving the person's current details when you need to modify one or more fields.
     */
    UPDATE_PERSON: "CENTRALSTATIONCRM_UPDATE_PERSON",
    /**
     * Tool to update a specific address of a person. use after retrieving the person's addresses to modify one.
     */
    UPDATE_PERSON_ADDRESS: "CENTRALSTATIONCRM_UPDATE_PERSON_ADDRESS",
    /**
     * Tool to update an assi entry of a person. use when you need to modify a specific assistant record after retrieving the person’s assis list. example: "update assi 101 for person 42 changing email to foo@example.com".
     */
    UPDATE_PERSON_ASSI: "CENTRALSTATIONCRM_UPDATE_PERSON_ASSI",
    /**
     * Tool to update a specific contact detail of a person by id. use after retrieving the person's contact details to modify one.
     */
    UPDATE_PERSON_CONTACT_DETAIL: "CENTRALSTATIONCRM_UPDATE_PERSON_CONTACT_DETAIL",
    /**
     * Tool to update a historic event of a person by id. use after retrieving the event when you need to modify its details. example: "update historic event 101 for person 42 changing atype to anniversary."
     */
    UPDATE_PERSON_HISTORIC_EVENT: "CENTRALSTATIONCRM_UPDATE_PERSON_HISTORIC_EVENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CENTRALSTATIONCRM".
 */
export type CENTRALSTATIONCRM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CENTRALSTATIONCRM".
 */
export type CENTRALSTATIONCRM_TRIGGER_EVENTS = {}
