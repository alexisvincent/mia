// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of USERLIST's USERLIST_DELETE_COMPANY tool input.
 */
type USERLIST_DELETE_COMPANY_INPUT = {
  /**
   * Identifier
   * @description Unique identifier of the company to delete (must not contain '/').
   */
  identifier?: string;
};

/**
 * Type of USERLIST's USERLIST_DELETE_COMPANY tool output.
 */
type USERLIST_DELETE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the company was successfully deleted (HTTP 204).
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
 * Type of USERLIST's USERLIST_PUSH_RELATIONSHIP tool input.
 */
type USERLIST_PUSH_RELATIONSHIP_INPUT = {
  /**
   * Company
   * @description Identifier of the company.
   */
  company?: string;
  /**
   * Data
   * @description Additional custom data for the relationship (key-value pairs).
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Relationship
   * @description Type of relationship: member, admin, or owner.
   * @default null
   * @enum {string|null}
   */
  relationship: "member" | "admin" | "owner" | null;
  /**
   * Timestamp
   * @description ISO-8601 timestamp for when the relationship was established.
   * @default null
   */
  timestamp: string | null;
  /**
   * User
   * @description Identifier of the user.
   */
  user?: string;
};

/**
 * Type of USERLIST's USERLIST_PUSH_RELATIONSHIP tool output.
 */
type USERLIST_PUSH_RELATIONSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of validation or API errors that occurred.
       */
      errors?: string[];
      /**
       * Success
       * @description Indicates if the relationship was created or updated successfully.
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
 * Type map of all available tool input types for toolkit "USERLIST".
 */
export type USERLIST_TOOL_INPUTS = {
  DELETE_COMPANY: USERLIST_DELETE_COMPANY_INPUT
  PUSH_RELATIONSHIP: USERLIST_PUSH_RELATIONSHIP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "USERLIST".
 */
export type USERLIST_TOOL_OUTPUTS = {
  DELETE_COMPANY: USERLIST_DELETE_COMPANY_OUTPUT
  PUSH_RELATIONSHIP: USERLIST_PUSH_RELATIONSHIP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's USERLIST toolkit.
 */
export const USERLIST = {
  slug: "userlist",
  tools: {
    /**
     * Tool to delete a company from userlist. use when you need to remove a company by its unique identifier after verifying it.
     */
    DELETE_COMPANY: "USERLIST_DELETE_COMPANY",
    /**
     * Tool to create or update a relationship between a user and a company in userlist. use after confirming valid user and company identifiers.
     */
    PUSH_RELATIONSHIP: "USERLIST_PUSH_RELATIONSHIP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "USERLIST".
 */
export type USERLIST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "USERLIST".
 */
export type USERLIST_TRIGGER_EVENTS = {}
