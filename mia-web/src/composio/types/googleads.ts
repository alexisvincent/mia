// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLEADS's GOOGLEADS_CREATE_CUSTOMER_LIST tool input.
 */
type GOOGLEADS_CREATE_CUSTOMER_LIST_INPUT = {
  /**
   * Description
   * @description Description of the customer list.
   */
  description?: string;
  /**
   * Name
   * @description Name of the customer list.
   */
  name?: string;
};

/**
 * Type of GOOGLEADS's GOOGLEADS_CREATE_CUSTOMER_LIST tool output.
 */
type GOOGLEADS_CREATE_CUSTOMER_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Resource Name
       * @description Resource name of the created customer list.
       */
      resource_name: string;
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
 * Type of GOOGLEADS's GOOGLEADS_GET_CAMPAIGN_BY_ID tool input.
 */
type GOOGLEADS_GET_CAMPAIGN_BY_ID_INPUT = {
  /**
   * Id
   * @description id of the campaign to search on GoogleAds.
   */
  id?: string;
};

/**
 * Type of GOOGLEADS's GOOGLEADS_GET_CAMPAIGN_BY_ID tool output.
 */
type GOOGLEADS_GET_CAMPAIGN_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Result of the campaign search.
       * @default {}
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
 * Type of GOOGLEADS's GOOGLEADS_GET_CAMPAIGN_BY_NAME tool input.
 */
type GOOGLEADS_GET_CAMPAIGN_BY_NAME_INPUT = {
  /**
   * Name
   * @description name of the campaign to search on GoogleAds.
   */
  name?: string;
};

/**
 * Type of GOOGLEADS's GOOGLEADS_GET_CAMPAIGN_BY_NAME tool output.
 */
type GOOGLEADS_GET_CAMPAIGN_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Result of the campaign search.
       * @default {}
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
 * Type of GOOGLEADS's GOOGLEADS_GET_CUSTOMER_LISTS tool input.
 */
type GOOGLEADS_GET_CUSTOMER_LISTS_INPUT = object;

/**
 * Type of GOOGLEADS's GOOGLEADS_GET_CUSTOMER_LISTS tool output.
 */
type GOOGLEADS_GET_CUSTOMER_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User Lists
       * @description List of user lists.
       * @default []
       */
      user_lists: {
          /**
           * Description
           * @description Description of the user list.
           */
          description?: string;
          /**
           * Id
           * @description ID of the user list.
           */
          id: string;
          /**
           * Name
           * @description Name of the user list.
           */
          name: string;
          /**
           * Resource Name
           * @description Resource name of the user list.
           */
          resourceName: string;
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
 * Type of GOOGLEADS's GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST tool input.
 */
type GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST_INPUT = {
  /**
   * Emails
   * @description Array of emails of the contacts to be added to the customer list.
   */
  emails?: string[];
  /**
   * Operation
   * @description Operation to be performed on the customer list. Either create or remove.
   * @default create
   * @enum {string}
   */
  operation: "create" | "remove";
  /**
   * Resource Name
   * @description Resource name of the customer list. For example: customers/1234567890/userLists/1234567890
   */
  resource_name?: string;
};

/**
 * Type of GOOGLEADS's GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST tool output.
 */
type GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the add contact operation.
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
 * Type map of all available tool input types for toolkit "GOOGLEADS".
 */
export type GOOGLEADS_TOOL_INPUTS = {
  CREATE_CUSTOMER_LIST: GOOGLEADS_CREATE_CUSTOMER_LIST_INPUT
  GET_CAMPAIGN_BY_ID: GOOGLEADS_GET_CAMPAIGN_BY_ID_INPUT
  GET_CAMPAIGN_BY_NAME: GOOGLEADS_GET_CAMPAIGN_BY_NAME_INPUT
  GET_CUSTOMER_LISTS: GOOGLEADS_GET_CUSTOMER_LISTS_INPUT
  GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST: GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLEADS".
 */
export type GOOGLEADS_TOOL_OUTPUTS = {
  CREATE_CUSTOMER_LIST: GOOGLEADS_CREATE_CUSTOMER_LIST_OUTPUT
  GET_CAMPAIGN_BY_ID: GOOGLEADS_GET_CAMPAIGN_BY_ID_OUTPUT
  GET_CAMPAIGN_BY_NAME: GOOGLEADS_GET_CAMPAIGN_BY_NAME_OUTPUT
  GET_CUSTOMER_LISTS: GOOGLEADS_GET_CUSTOMER_LISTS_OUTPUT
  GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST: GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLEADS toolkit.
 */
export const GOOGLEADS = {
  slug: "googleads",
  tools: {
    /**
     * Createcustomerlist tool will create a customer list in google ads.
     */
    CREATE_CUSTOMER_LIST: "GOOGLEADS_CREATE_CUSTOMER_LIST",
    /**
     * Getcampaignbyid tool will return details of a campaign in google ads.
     */
    GET_CAMPAIGN_BY_ID: "GOOGLEADS_GET_CAMPAIGN_BY_ID",
    /**
     * Getcampaignbyname tool will run a sql getcampaignbyname in google ads.
     */
    GET_CAMPAIGN_BY_NAME: "GOOGLEADS_GET_CAMPAIGN_BY_NAME",
    /**
     * Getcustomerlists tool will list all customer lists in google ads.
     */
    GET_CUSTOMER_LISTS: "GOOGLEADS_GET_CUSTOMER_LISTS",
    /**
     * Addorremovetocustomerlist tool will add a contact to a customer list in google ads. note: it takes 6 to 12 hours for changes to be reflected in the customer list.
     */
    GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST: "GOOGLEADS_GOOGLEADS_ADD_OR_REMOVE_TO_CUSTOMER_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLEADS".
 */
export type GOOGLEADS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLEADS".
 */
export type GOOGLEADS_TRIGGER_EVENTS = {}
