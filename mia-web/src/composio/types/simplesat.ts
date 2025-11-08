// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIMPLESAT's SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER tool input.
 */
type SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER_INPUT = {
  /**
   * Company
   * @description Company name of the customer
   * @default null
   */
  company: string | null;
  /**
   * Custom Attributes
   * @description Dictionary of custom attributes for the customer
   * @default null
   */
  custom_attributes: {
      [key: string]: string;
  } | null;
  /**
   * Email
   * Format: email
   * @description Email address of the customer (used as unique identifier)
   */
  email?: string;
  /**
   * First Name
   * @description First name of the customer
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the customer
   * @default null
   */
  last_name: string | null;
};

/**
 * Type of SIMPLESAT's SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER tool output.
 */
type SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name of the customer
       * @default null
       */
      company: string | null;
      /**
       * Custom Attributes
       * @description Custom attributes of the customer
       * @default null
       */
      custom_attributes: {
          [key: string]: string;
      } | null;
      /**
       * Email
       * @description Email address of the customer
       */
      email: string;
      /**
       * First Name
       * @description First name of the customer
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the customer
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the customer
       * @default null
       */
      last_name: string | null;
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
 * Type of SIMPLESAT's SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER tool input.
 */
type SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the team member
   */
  email?: string;
  /**
   * First Name
   * @description First name of the team member
   */
  first_name?: string;
  /**
   * Last Name
   * @description Last name of the team member
   */
  last_name?: string;
  /**
   * Phone
   * @description Phone number of the team member
   * @default null
   */
  phone: string | null;
  /**
   * Title
   * @description Job title of the team member
   * @default null
   */
  title: string | null;
};

/**
 * Type of SIMPLESAT's SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER tool output.
 */
type SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email address of the team member
       */
      email: string;
      /**
       * First Name
       * @description First name of the team member
       */
      first_name: string;
      /**
       * Id
       * @description Unique identifier of the team member
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the team member
       */
      last_name: string;
      /**
       * Phone
       * @description Phone number of the team member
       * @default null
       */
      phone: string | null;
      /**
       * Title
       * @description Job title of the team member
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
 * Type map of all available tool input types for toolkit "SIMPLESAT".
 */
export type SIMPLESAT_TOOL_INPUTS = {
  CREATE_OR_UPDATE_CUSTOMER: SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER_INPUT
  CREATE_OR_UPDATE_TEAM_MEMBER: SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIMPLESAT".
 */
export type SIMPLESAT_TOOL_OUTPUTS = {
  CREATE_OR_UPDATE_CUSTOMER: SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER_OUTPUT
  CREATE_OR_UPDATE_TEAM_MEMBER: SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIMPLESAT toolkit.
 */
export const SIMPLESAT = {
  slug: "simplesat",
  tools: {
    /**
     * This tool creates or updates a customer in simplesat. if a customer with the provided email address already exists, their information is updated; otherwise, a new customer is created.
     */
    CREATE_OR_UPDATE_CUSTOMER: "SIMPLESAT_CREATE_OR_UPDATE_CUSTOMER",
    /**
     * This tool creates a new team member or updates an existing one if a team member with the same email address is found. it is an independent action that requires only basic team member information (email, first name, last name, and optionally title and phone) and does not depend on any other resource ids.
     */
    CREATE_OR_UPDATE_TEAM_MEMBER: "SIMPLESAT_CREATE_OR_UPDATE_TEAM_MEMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIMPLESAT".
 */
export type SIMPLESAT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIMPLESAT".
 */
export type SIMPLESAT_TRIGGER_EVENTS = {}
