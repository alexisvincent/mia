// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_CREATE_USER tool input.
 */
type BRILLIANT_DIRECTORIES_CREATE_USER_INPUT = {
  /**
   * About Me
   * @description User description
   * @default null
   */
  about_me: string | null;
  /**
   * Active
   * @description Account status (0: inactive, 1: active)
   * @default null
   */
  active: number | null;
  /**
   * Address1
   * @description Primary address
   * @default null
   */
  address1: string | null;
  /**
   * Address2
   * @description Secondary address
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
   * Country Code
   * @description Country code (e.g., US)
   * @default null
   */
  country_code: string | null;
  /**
   * Email
   * @description The user's email address
   */
  email?: string;
  /**
   * First Name
   * @description User's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description User's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Password
   * @description The user's password (minimum 6 characters)
   */
  password?: string;
  /**
   * Phone Number
   * @description Contact phone number
   * @default null
   */
  phone_number: string | null;
  /**
   * Position
   * @description Job position
   * @default null
   */
  position: string | null;
  /**
   * State Code
   * @description State code (e.g., CA)
   * @default null
   */
  state_code: string | null;
  /**
   * Subscription Id
   * @description The ID of the membership plan to assign the user to
   */
  subscription_id?: number;
  /**
   * Verified
   * @description Verification status (0: unverified, 1: verified)
   * @default null
   */
  verified: number | null;
  /**
   * Website
   * @description User's website URL
   * @default null
   */
  website: string | null;
  /**
   * Zip Code
   * @description ZIP/Postal code
   * @default null
   */
  zip_code: string | null;
};

/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_CREATE_USER tool output.
 */
type BRILLIANT_DIRECTORIES_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message containing user data or error details
       */
      message: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the request (success or error)
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
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_DELETE_USER tool input.
 */
type BRILLIANT_DIRECTORIES_DELETE_USER_INPUT = {
  /**
   * Delete Images
   * @description Whether to delete the user's uploaded images (0 = No, 1 = Yes)
   * @default 0
   */
  delete_images: number | null;
  /**
   * User Id
   * @description The unique identifier of the user to be deleted
   */
  user_id?: string;
};

/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_DELETE_USER tool output.
 */
type BRILLIANT_DIRECTORIES_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message describing the result of the operation
       */
      message: string;
      /**
       * Status
       * @description Status of the deletion operation
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
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES tool input.
 */
type BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES_INPUT = object;

/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES tool output.
 */
type BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of data categories in the directory
       */
      categories: {
          /**
           * Description
           * @description The description of the data category
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier of the data category
           */
          id: number;
          /**
           * Name
           * @description The name of the data category
           */
          name: string;
          /**
           * Slug
           * @description The URL-friendly slug of the data category
           */
          slug: string;
          /**
           * Status
           * @description The status of the data category
           */
          status: string;
      }[];
      /**
       * Total Count
       * @description Total number of data categories
       */
      total_count: number;
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
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS tool input.
 */
type BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS_INPUT = object;

/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS tool output.
 */
type BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of lead fields with their metadata
       */
      fields: {
          /**
           * Field Label
           * @description Human-readable label for the field
           */
          field_label: string;
          /**
           * Field Name
           * @description The name/identifier of the field
           */
          field_name: string;
          /**
           * Field Type
           * @description The data type of the field (e.g., text, number, date)
           */
          field_type: string;
          /**
           * Required
           * @description Whether this field is required
           */
          required: boolean;
          /**
           * System Field
           * @description Whether this is a system field
           */
          system_field: boolean;
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
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS tool input.
 */
type BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS_INPUT = object;

/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS tool output.
 */
type BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of available fields in the users_reviews table
       */
      fields: {
          /**
           * Description
           * @description Description of what the field represents
           */
          description: string;
          /**
           * Name
           * @description Name of the review field
           */
          name: string;
          /**
           * Required
           * @description Whether this field is required when submitting reviews
           * @default false
           */
          required: boolean;
          /**
           * Type
           * @description Data type of the field
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
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_USER_FIELDS tool input.
 */
type BRILLIANT_DIRECTORIES_GET_USER_FIELDS_INPUT = {
  /**
   * Property
   * @description The property to search by (e.g., user_id, email)
   * @default user_id
   */
  property: string;
  /**
   * Property Value
   * @description The value of the property to search for
   */
  property_value?: string;
};

/**
 * Type of BRILLIANT_DIRECTORIES's BRILLIANT_DIRECTORIES_GET_USER_FIELDS tool output.
 */
type BRILLIANT_DIRECTORIES_GET_USER_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       * @default null
       */
      current_page: number | null;
      /**
       * Message
       * @description List of user fields and their data
       */
      message: {
          /**
           * Active
           * @description Account status
           * @default null
           */
          active: string | null;
          /**
           * Address1
           * @description Primary address
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Secondary address
           * @default null
           */
          address2: string | null;
          /**
           * Business Type
           * @description Type of business
           * @default null
           */
          business_type: string | null;
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
           * Cookie
           * @description Cookie information
           * @default null
           */
          cookie: string | null;
          /**
           * Country Code
           * @description Country code
           * @default null
           */
          country_code: string | null;
          /**
           * Country Ln
           * @description Full country name
           * @default null
           */
          country_ln: string | null;
          /**
           * Email
           * @description User's email address
           * @default null
           */
          email: string | null;
          /**
           * Filename
           * @description URL-friendly filename
           * @default null
           */
          filename: string | null;
          /**
           * Filename Hidden
           * @description Hidden filename
           * @default null
           */
          filename_hidden: string | null;
          /**
           * First Name
           * @description User's first name
           * @default null
           */
          first_name: string | null;
          /**
           * Last Login
           * @description Last login timestamp
           * @default null
           */
          last_login: string | null;
          /**
           * Last Name
           * @description User's last name
           * @default null
           */
          last_name: string | null;
          /**
           * Lat
           * @description Latitude coordinates
           * @default null
           */
          lat: string | null;
          /**
           * Listing Type
           * @description Type of listing (Company/Individual)
           * @default null
           */
          listing_type: string | null;
          /**
           * Lon
           * @description Longitude coordinates
           * @default null
           */
          lon: string | null;
          /**
           * Modtime
           * @description Last modification timestamp
           * @default null
           */
          modtime: string | null;
          /**
           * Parent Id
           * @description Parent user ID
           * @default null
           */
          parent_id: string | null;
          /**
           * Phone Number
           * @description Contact phone number
           * @default null
           */
          phone_number: string | null;
          /**
           * Profession Id
           * @description Category ID
           * @default null
           */
          profession_id: string | null;
          /**
           * Ref Code
           * @description Referral code
           * @default null
           */
          ref_code: string | null;
          /**
           * Signup Date
           * @description Account creation date
           * @default null
           */
          signup_date: string | null;
          /**
           * State Code
           * @description State abbreviation
           * @default null
           */
          state_code: string | null;
          /**
           * State Ln
           * @description Full state name
           * @default null
           */
          state_ln: string | null;
          /**
           * Subscription Id
           * @description Subscription plan ID
           * @default null
           */
          subscription_id: string | null;
          /**
           * User Id
           * @description Unique identifier for the user
           * @default null
           */
          user_id: string | null;
          /**
           * Zip Code
           * @description Postal/ZIP code
           * @default null
           */
          zip_code: string | null;
      }[];
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
      /**
       * Total
       * @description Total number of records
       * @default null
       */
      total: string | null;
      /**
       * Total Pages
       * @description Total number of pages
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
 * Type map of all available tool input types for toolkit "BRILLIANT_DIRECTORIES".
 */
export type BRILLIANT_DIRECTORIES_TOOL_INPUTS = {
  CREATE_USER: BRILLIANT_DIRECTORIES_CREATE_USER_INPUT
  DELETE_USER: BRILLIANT_DIRECTORIES_DELETE_USER_INPUT
  GET_DATA_CATEGORIES: BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES_INPUT
  GET_LEAD_FIELDS: BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS_INPUT
  GET_REVIEWS_FIELDS: BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS_INPUT
  GET_USER_FIELDS: BRILLIANT_DIRECTORIES_GET_USER_FIELDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BRILLIANT_DIRECTORIES".
 */
export type BRILLIANT_DIRECTORIES_TOOL_OUTPUTS = {
  CREATE_USER: BRILLIANT_DIRECTORIES_CREATE_USER_OUTPUT
  DELETE_USER: BRILLIANT_DIRECTORIES_DELETE_USER_OUTPUT
  GET_DATA_CATEGORIES: BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES_OUTPUT
  GET_LEAD_FIELDS: BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS_OUTPUT
  GET_REVIEWS_FIELDS: BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS_OUTPUT
  GET_USER_FIELDS: BRILLIANT_DIRECTORIES_GET_USER_FIELDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BRILLIANT_DIRECTORIES toolkit.
 */
export const BRILLIANT_DIRECTORIES = {
  slug: "brilliant_directories",
  tools: {
    /**
     * This tool creates a new user record in the brilliant directories website database. it supports creating new users with essential details such as email, password, subscriptionid and optional parameters including name, company, contact details, and address information.
     */
    CREATE_USER: "BRILLIANT_DIRECTORIES_CREATE_USER",
    /**
     * This tool deletes an existing user record from the brilliant directories website database. it allows for the complete removal of a user record and, optionally, the deletion of the member's uploaded images.
     */
    DELETE_USER: "BRILLIANT_DIRECTORIES_DELETE_USER",
    /**
     * This tool fetches all data categories in a brilliant directories website. data categories are distinct from top categories and represent the various types of data organization within the system.
     */
    GET_DATA_CATEGORIES: "BRILLIANT_DIRECTORIES_GET_DATA_CATEGORIES",
    /**
     * This tool retrieves all available fields in the leads table from a brilliant directories website. it returns a json object containing a list of fields and their associated metadata (field name, field type, field label, whether the field is required, and if it is a system field) that can be used to understand the structure and metadata of lead-related fields.
     */
    GET_LEAD_FIELDS: "BRILLIANT_DIRECTORIES_GET_LEAD_FIELDS",
    /**
     * This tool retrieves all the available fields in the users reviews table from a brilliant directories website. it is a standalone tool that requires only authentication and provides a comprehensive list of review information such as review text, rating, timestamp, user identification fields, and any custom configured fields in the reviews system.
     */
    GET_REVIEWS_FIELDS: "BRILLIANT_DIRECTORIES_GET_REVIEWS_FIELDS",
    /**
     * This tool fetches all available fields from the users data table in your brilliant directories website. it provides a detailed list of available fields for user operations including creation, updating, and retrieval.
     */
    GET_USER_FIELDS: "BRILLIANT_DIRECTORIES_GET_USER_FIELDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BRILLIANT_DIRECTORIES".
 */
export type BRILLIANT_DIRECTORIES_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BRILLIANT_DIRECTORIES".
 */
export type BRILLIANT_DIRECTORIES_TRIGGER_EVENTS = {}
