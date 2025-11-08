// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HYPERISE's HYPERISE_CREATE_CLIENT_ACCOUNT tool input.
 */
type HYPERISE_CREATE_CLIENT_ACCOUNT_INPUT = {
  /**
   * Business Id
   * @description ID of the agency or business under which to create the client account.
   */
  business_id?: string;
  /**
   * Email
   * Format: email
   * @description Email address of the client.
   */
  email?: string;
  /**
   * Extras
   * @description Additional fields to include in the client creation request.
   * @default null
   */
  extras: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the client account to be created.
   */
  name?: string;
};

/**
 * Type of HYPERISE's HYPERISE_CREATE_CLIENT_ACCOUNT tool output.
 */
type HYPERISE_CREATE_CLIENT_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Business Id
       * @description ID of the agency the client belongs to.
       */
      business_id: string;
      /**
       * Created At
       * @description Timestamp when the client account was created.
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Email of the created client account.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the created client account.
       */
      id: string;
      /**
       * Name
       * @description Name of the created client account.
       */
      name: string;
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
 * Type of HYPERISE's HYPERISE_LIST_IMAGE_TEMPLATES tool input.
 */
type HYPERISE_LIST_IMAGE_TEMPLATES_INPUT = object;

/**
 * Type of HYPERISE's HYPERISE_LIST_IMAGE_TEMPLATES tool output.
 */
type HYPERISE_LIST_IMAGE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of active image templates
       */
      templates: {
          /**
           * Base Url
           * @description Base image service domain
           */
          base_url: string;
          /**
           * Created At
           * @description ISO8601 timestamp when created
           */
          created_at: string;
          /**
           * Height
           * @description Height in pixels
           */
          height: number;
          /**
           * Id
           * @description Template ID
           */
          id: number;
          /**
           * Image Hash
           * @description Unique hash for the image template
           */
          image_hash: string;
          /**
           * Image Url
           * @description Image path for the template
           */
          image_url: string;
          /**
           * Name
           * @description Template name
           */
          name: string;
          /**
           * Preview Image
           * @description URL to a preview image
           */
          preview_image: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when last updated
           */
          updated_at: string;
          /**
           * Width
           * @description Width in pixels
           */
          width: number;
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
 * Type of HYPERISE's HYPERISE_PERSONALIZED_SHORT_LINKS tool input.
 */
type HYPERISE_PERSONALIZED_SHORT_LINKS_INPUT = {
  /**
   * Desc
   * @description Page description used in Open Graph preview text
   */
  desc?: string;
  /**
   * Image Hash
   * @description Image Template Hash to use for Open Graph preview
   */
  image_hash?: string;
  /**
   * Query Params
   * @description Personalisation data as a key→value map. E.g. {'first_name':'John','last_name':'Doe','business_name':'Acme Co.'}
   */
  query_params?: {
      [key: string]: string;
  };
  /**
   * Title
   * @description Page title used in Open Graph preview text
   */
  title?: string;
  /**
   * Url
   * @description Destination URL the short link will redirect to
   */
  url?: string;
};

/**
 * Type of HYPERISE's HYPERISE_PERSONALIZED_SHORT_LINKS tool output.
 */
type HYPERISE_PERSONALIZED_SHORT_LINKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Data Source Id
       * @description Linked data source ID, if any
       * @default null
       */
      data_source_id: number | null;
      /**
       * Desc
       * @description Page description used in link metadata
       */
      desc: string;
      /**
       * Id
       * @description Internal identifier for this link
       */
      id: number;
      /**
       * Image Template Id
       * @description Internal image template ID
       */
      image_template_id: number;
      /**
       * Link
       * @description Fully qualified generated short link URL
       */
      link: string;
      /**
       * Link Hash
       * @description Unique hash component of the short link
       */
      link_hash: string;
      /**
       * Query Params
       * @description Echo of the personalization key/value pairs
       */
      query_params: {
          [key: string]: string;
      };
      /**
       * Scenario
       * @description Scenario identifier (internal use)
       */
      scenario: number;
      /**
       * Team Id
       * @description Team identifier
       */
      team_id: number;
      /**
       * Title
       * @description Page title used in link metadata
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * Url
       * @description Original destination URL provided
       */
      url: string;
      /**
       * User Id
       * @description ID of the user who created the link
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
 * Type of HYPERISE's HYPERISE_PROSPECT_BUSINESS_DATA tool input.
 */
type HYPERISE_PROSPECT_BUSINESS_DATA_INPUT = {
  /**
   * Business Address
   * @description Address of the business
   * @default null
   */
  business_address: string | null;
  /**
   * Business Name
   * @description Name of the business
   * @default null
   */
  business_name: string | null;
  /**
   * Business Phone
   * @description Phone number of the business
   * @default null
   */
  business_phone: string | null;
  /**
   * Category
   * @description Category of the business
   * @default null
   */
  category: string | null;
  /**
   * Custom Image 1
   * @description Custom image 1 URL or base64
   * @default null
   */
  custom_image_1: string | null;
  /**
   * Custom Image 2
   * @description Custom image 2 URL or base64
   * @default null
   */
  custom_image_2: string | null;
  /**
   * Custom Image 3
   * @description Custom image 3 URL or base64
   * @default null
   */
  custom_image_3: string | null;
  /**
   * Custom Text 1
   * @description Custom text field 1
   * @default null
   */
  custom_text_1: string | null;
  /**
   * Custom Text 2
   * @description Custom text field 2
   * @default null
   */
  custom_text_2: string | null;
  /**
   * Custom Text 3
   * @description Custom text field 3
   * @default null
   */
  custom_text_3: string | null;
  /**
   * Custom Text 4
   * @description Custom text field 4
   * @default null
   */
  custom_text_4: string | null;
  /**
   * Email
   * @description Contact email; must be valid; required for create/update
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of contact
   * @default null
   */
  first_name: string | null;
  /**
   * Gender
   * @description Gender of contact
   * @default null
   * @enum {string|null}
   */
  gender: "male" | "female" | null;
  /**
   * Id
   * @description Record ID; required for retrieve, update, delete
   * @default null
   */
  id: number | null;
  /**
   * Job Title
   * @description Job title of contact
   * @default null
   */
  job_title: string | null;
  /**
   * Last Name
   * @description Last name of contact
   * @default null
   */
  last_name: string | null;
  /**
   * Lat
   * @description Latitude coordinate
   * @default null
   */
  lat: string | null;
  /**
   * Logo
   * @description Logo URL or base64 image source
   * @default null
   */
  logo: string | null;
  /**
   * Long
   * @description Longitude coordinate
   * @default null
   */
  long: string | null;
  /**
   * Operation
   * @description CRUD operation to perform: list, retrieve, create, update, or delete
   * @enum {string}
   */
  operation?: "list" | "retrieve" | "create" | "update" | "delete";
  /**
   * Phone
   * @description Alternate contact phone number
   * @default null
   */
  phone: string | null;
  /**
   * Profile Image
   * @description Profile image URL or base64 source
   * @default null
   */
  profile_image: string | null;
  /**
   * Title
   * @description Job title of contact
   * @default null
   */
  title: string | null;
  /**
   * Website
   * @description Website URL; required for create/update
   * @default null
   */
  website: string | null;
};

/**
 * Type of HYPERISE's HYPERISE_PROSPECT_BUSINESS_DATA tool output.
 */
type HYPERISE_PROSPECT_BUSINESS_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * BusinessObject
       * @description A single business record
       * @default null
       */
      item: {
          /**
           * Business Address
           * @description Address of the business
           * @default null
           */
          business_address: string | null;
          /**
           * Business Name
           * @description Name of the business
           */
          business_name: string;
          /**
           * Business Phone
           * @description Phone number of the business
           * @default null
           */
          business_phone: string | null;
          /**
           * Category
           * @description Category of the business
           * @default null
           */
          category: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO format
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Image 1
           * @description Custom image field 1 (URL or base64)
           * @default null
           */
          custom_image_1: string | null;
          /**
           * Custom Image 2
           * @description Custom image field 2 (URL or base64)
           * @default null
           */
          custom_image_2: string | null;
          /**
           * Custom Image 3
           * @description Custom image field 3 (URL or base64)
           * @default null
           */
          custom_image_3: string | null;
          /**
           * Custom Text 1
           * @description Custom text field 1
           * @default null
           */
          custom_text_1: string | null;
          /**
           * Custom Text 2
           * @description Custom text field 2
           * @default null
           */
          custom_text_2: string | null;
          /**
           * Custom Text 3
           * @description Custom text field 3
           * @default null
           */
          custom_text_3: string | null;
          /**
           * Custom Text 4
           * @description Custom text field 4
           * @default null
           */
          custom_text_4: string | null;
          /**
           * Email
           * @description Contact email for the business
           */
          email: string;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          first_name: string | null;
          /**
           * Gender
           * @description Gender of the contact
           * @default null
           * @enum {string|null}
           */
          gender: "male" | "female" | null;
          /**
           * Id
           * @description Unique identifier of the business record
           */
          id: number;
          /**
           * Job Title
           * @description Job title of the contact
           * @default null
           */
          job_title: string | null;
          /**
           * Last Name
           * @description Contact last name
           * @default null
           */
          last_name: string | null;
          /**
           * Lat
           * @description Latitude coordinate of the business location
           * @default null
           */
          lat: string | null;
          /**
           * LogoImage
           * @description Logo image metadata
           * @default null
           */
          logo: {
              /**
               * File Name
               * @description File name of the image
               */
              file_name: string;
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: number;
              /**
               * Url
               * @description URL to access the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: number;
          } | null;
          /**
           * Long
           * @description Longitude coordinate of the business location
           * @default null
           */
          long: string | null;
          /**
           * Phone
           * @description Alternate phone number
           * @default null
           */
          phone: string | null;
          /**
           * LogoImage
           * @description Profile image metadata
           * @default null
           */
          profile_image: {
              /**
               * File Name
               * @description File name of the image
               */
              file_name: string;
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: number;
              /**
               * Url
               * @description URL to access the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: number;
          } | null;
          /**
           * Title
           * @description Contact title
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description Last update timestamp in ISO format
           * @default null
           */
          updated_at: string | null;
          /**
           * Website
           * @description Website URL of the business
           */
          website: string;
      } | null;
      /**
       * Items
       * @description List of business records
       * @default null
       */
      items: {
          /**
           * Business Address
           * @description Address of the business
           * @default null
           */
          business_address: string | null;
          /**
           * Business Name
           * @description Name of the business
           */
          business_name: string;
          /**
           * Business Phone
           * @description Phone number of the business
           * @default null
           */
          business_phone: string | null;
          /**
           * Category
           * @description Category of the business
           * @default null
           */
          category: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO format
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Image 1
           * @description Custom image field 1 (URL or base64)
           * @default null
           */
          custom_image_1: string | null;
          /**
           * Custom Image 2
           * @description Custom image field 2 (URL or base64)
           * @default null
           */
          custom_image_2: string | null;
          /**
           * Custom Image 3
           * @description Custom image field 3 (URL or base64)
           * @default null
           */
          custom_image_3: string | null;
          /**
           * Custom Text 1
           * @description Custom text field 1
           * @default null
           */
          custom_text_1: string | null;
          /**
           * Custom Text 2
           * @description Custom text field 2
           * @default null
           */
          custom_text_2: string | null;
          /**
           * Custom Text 3
           * @description Custom text field 3
           * @default null
           */
          custom_text_3: string | null;
          /**
           * Custom Text 4
           * @description Custom text field 4
           * @default null
           */
          custom_text_4: string | null;
          /**
           * Email
           * @description Contact email for the business
           */
          email: string;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          first_name: string | null;
          /**
           * Gender
           * @description Gender of the contact
           * @default null
           * @enum {string|null}
           */
          gender: "male" | "female" | null;
          /**
           * Id
           * @description Unique identifier of the business record
           */
          id: number;
          /**
           * Job Title
           * @description Job title of the contact
           * @default null
           */
          job_title: string | null;
          /**
           * Last Name
           * @description Contact last name
           * @default null
           */
          last_name: string | null;
          /**
           * Lat
           * @description Latitude coordinate of the business location
           * @default null
           */
          lat: string | null;
          /**
           * LogoImage
           * @description Logo image metadata
           * @default null
           */
          logo: {
              /**
               * File Name
               * @description File name of the image
               */
              file_name: string;
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: number;
              /**
               * Url
               * @description URL to access the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: number;
          } | null;
          /**
           * Long
           * @description Longitude coordinate of the business location
           * @default null
           */
          long: string | null;
          /**
           * Phone
           * @description Alternate phone number
           * @default null
           */
          phone: string | null;
          /**
           * LogoImage
           * @description Profile image metadata
           * @default null
           */
          profile_image: {
              /**
               * File Name
               * @description File name of the image
               */
              file_name: string;
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: number;
              /**
               * Url
               * @description URL to access the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: number;
          } | null;
          /**
           * Title
           * @description Contact title
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description Last update timestamp in ISO format
           * @default null
           */
          updated_at: string | null;
          /**
           * Website
           * @description Website URL of the business
           */
          website: string;
      }[] | null;
      /**
       * Message
       * @description Operation result message
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
 * Type of HYPERISE's HYPERISE_USER_AUTHENTICATION tool input.
 */
type HYPERISE_USER_AUTHENTICATION_INPUT = {
  /**
   * Api Token
   * @description Hyperise API token generated in account settings. Optional: falls back to metadata.query_params.api_token if omitted.
   * @default null
   */
  api_token: string | null;
};

/**
 * Type of HYPERISE's HYPERISE_USER_AUTHENTICATION tool output.
 */
type HYPERISE_USER_AUTHENTICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description URL of the Hyperise web application
       */
      app_url: string;
      /**
       * Created At
       * @description Account creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the authenticated user
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the authenticated user
       */
      id: number;
      /**
       * Image Service Domain
       * @description Domain for Hyperise image service
       */
      image_service_domain: string;
      /**
       * Name
       * @description Name of the authenticated user
       */
      name: string;
      /**
       * Photo Url
       * @description URL of the user's profile photo
       */
      photo_url: string;
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
 * Type map of all available tool input types for toolkit "HYPERISE".
 */
export type HYPERISE_TOOL_INPUTS = {
  CREATE_CLIENT_ACCOUNT: HYPERISE_CREATE_CLIENT_ACCOUNT_INPUT
  LIST_IMAGE_TEMPLATES: HYPERISE_LIST_IMAGE_TEMPLATES_INPUT
  PERSONALIZED_SHORT_LINKS: HYPERISE_PERSONALIZED_SHORT_LINKS_INPUT
  PROSPECT_BUSINESS_DATA: HYPERISE_PROSPECT_BUSINESS_DATA_INPUT
  USER_AUTHENTICATION: HYPERISE_USER_AUTHENTICATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HYPERISE".
 */
export type HYPERISE_TOOL_OUTPUTS = {
  CREATE_CLIENT_ACCOUNT: HYPERISE_CREATE_CLIENT_ACCOUNT_OUTPUT
  LIST_IMAGE_TEMPLATES: HYPERISE_LIST_IMAGE_TEMPLATES_OUTPUT
  PERSONALIZED_SHORT_LINKS: HYPERISE_PERSONALIZED_SHORT_LINKS_OUTPUT
  PROSPECT_BUSINESS_DATA: HYPERISE_PROSPECT_BUSINESS_DATA_OUTPUT
  USER_AUTHENTICATION: HYPERISE_USER_AUTHENTICATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HYPERISE toolkit.
 */
export const HYPERISE = {
  slug: "hyperise",
  tools: {
    /**
     * Tool to create a new Hyperise client account. Use when an agency plan user needs to provision client sub-accounts.
     */
    CREATE_CLIENT_ACCOUNT: "HYPERISE_CREATE_CLIENT_ACCOUNT",
    /**
     * Tool to list active image templates. Use when you need to retrieve all your current templates.
     */
    LIST_IMAGE_TEMPLATES: "HYPERISE_LIST_IMAGE_TEMPLATES",
    /**
     * Tool to generate a personalized short link. Use when you need a shareable URL with OGP metadata and per-recipient customizations. Provide image_hash and personalization data.
     */
    PERSONALIZED_SHORT_LINKS: "HYPERISE_PERSONALIZED_SHORT_LINKS",
    /**
     * Tool to perform CRUD operations on Hyperise business prospect records. Use when managing business data via the Hyperise API.
     */
    PROSPECT_BUSINESS_DATA: "HYPERISE_PROSPECT_BUSINESS_DATA",
    /**
     * Tool to authenticate an API token and retrieve user details. Use after obtaining a valid API token from Hyperise settings.
     */
    USER_AUTHENTICATION: "HYPERISE_USER_AUTHENTICATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HYPERISE".
 */
export type HYPERISE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HYPERISE".
 */
export type HYPERISE_TRIGGER_EVENTS = {}
