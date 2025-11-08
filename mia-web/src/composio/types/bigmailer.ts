// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BIGMAILER's BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN tool input.
 */
type BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN_INPUT = {
  /**
   * Brand Id
   * @description The ID of the brand under which to create the campaign
   */
  brand_id?: string;
  /**
   * Description
   * @description Campaign description
   * @default null
   */
  description: string | null;
  /**
   * From Email
   * @description Sender's email address
   */
  from_email?: string;
  /**
   * From Name
   * @description Sender's name
   */
  from_name?: string;
  /**
   * Html Content
   * @description HTML content of the email
   */
  html_content?: string;
  /**
   * Name
   * @description Name of the transactional campaign
   */
  name?: string;
  /**
   * ReplyTo
   * @description Reply-to configuration
   * @default null
   */
  reply_to: {
      /**
       * Email
       * @description Reply-to email address
       */
      email: string;
      /**
       * Name
       * @description Reply-to name
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * Subject
   * @description Email subject line
   */
  subject?: string;
  /**
   * Text Content
   * @description Plain text version of the email content
   * @default null
   */
  text_content: string | null;
};

/**
 * Type of BIGMAILER's BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN tool output.
 */
type BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the created campaign
       */
      id: string;
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
 * Type of BIGMAILER's BIGMAILER_GET_USER_INFO tool input.
 */
type BIGMAILER_GET_USER_INFO_INPUT = object;

/**
 * Type of BIGMAILER's BIGMAILER_GET_USER_INFO tool output.
 */
type BIGMAILER_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Name
       * @description The company name of the user
       */
      company_name: string;
      /**
       * Email
       * @description The email address of the user
       */
      email: string;
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
 * Type of BIGMAILER's BIGMAILER_LIST_ALL_BRANDS tool input.
 */
type BIGMAILER_LIST_ALL_BRANDS_INPUT = object;

/**
 * Type of BIGMAILER's BIGMAILER_LIST_ALL_BRANDS tool output.
 */
type BIGMAILER_LIST_ALL_BRANDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Brands
       * @description List of brands associated with the authenticated account
       */
      brands: {
          /**
           * Bounce Danger Percent
           * @description Bounce danger percentage threshold
           */
          bounce_danger_percent: number;
          /**
           * Created
           * @description The creation timestamp of the brand
           */
          created: number;
          /**
           * Filter Soft Bounces
           * @description Whether soft bounces are filtered
           */
          filter_soft_bounces: boolean;
          /**
           * From Email
           * @description The from email address used for sending emails
           */
          from_email: string;
          /**
           * From Name
           * @description The from name used for sending emails
           */
          from_name: string;
          /**
           * Id
           * @description The unique identifier of the brand
           */
          id: string;
          /**
           * Max Soft Bounces
           * @description Maximum number of soft bounces allowed
           */
          max_soft_bounces: number;
          /**
           * Name
           * @description The name of the brand
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
 * Type map of all available tool input types for toolkit "BIGMAILER".
 */
export type BIGMAILER_TOOL_INPUTS = {
  CREATE_TRANSACTIONAL_CAMPAIGN: BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN_INPUT
  GET_USER_INFO: BIGMAILER_GET_USER_INFO_INPUT
  LIST_ALL_BRANDS: BIGMAILER_LIST_ALL_BRANDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BIGMAILER".
 */
export type BIGMAILER_TOOL_OUTPUTS = {
  CREATE_TRANSACTIONAL_CAMPAIGN: BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN_OUTPUT
  GET_USER_INFO: BIGMAILER_GET_USER_INFO_OUTPUT
  LIST_ALL_BRANDS: BIGMAILER_LIST_ALL_BRANDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BIGMAILER toolkit.
 */
export const BIGMAILER = {
  slug: "bigmailer",
  tools: {
    /**
     * This tool creates a new transactional campaign within a specified brand in bigmailer. it allows users to programmatically create new transactional campaigns by using the provided parameters (brandid, name, subject, fromname, fromemail, htmlcontent, etc.). the api endpoint returns details such as campaignid, name, status, and created at when a campaign is successfully created.
     */
    CREATE_TRANSACTIONAL_CAMPAIGN: "BIGMAILER_CREATE_TRANSACTIONAL_CAMPAIGN",
    /**
     * This tool retrieves information about the authenticated user in bigmailer using the get /me endpoint. it requires only authentication and no additional parameters, making it ideal for verifying api connectivity and retrieving essential user details.
     */
    GET_USER_INFO: "BIGMAILER_GET_USER_INFO",
    /**
     * This tool retrieves a list of all brands associated with the authenticated bigmailer account. it allows users to view and manage their brands. the operation is executed via a simple get request to the /brands endpoint and requires proper authentication using the x-api-key header. the response is a json array containing information such as brand id, brand name, and other related details.
     */
    LIST_ALL_BRANDS: "BIGMAILER_LIST_ALL_BRANDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BIGMAILER".
 */
export type BIGMAILER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BIGMAILER".
 */
export type BIGMAILER_TRIGGER_EVENTS = {}
