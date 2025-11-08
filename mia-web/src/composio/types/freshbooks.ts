// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FRESHBOOKS's FRESHBOOKS_LIST_BUSINESSES tool input.
 */
type FRESHBOOKS_LIST_BUSINESSES_INPUT = object;

/**
 * Type of FRESHBOOKS's FRESHBOOKS_LIST_BUSINESSES tool output.
 */
type FRESHBOOKS_LIST_BUSINESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Businesses
       * @description List of business objects
       */
      businesses: {
          /**
           * Id
           * @description Unique identifier for the business
           */
          id: number;
          /**
           * Name
           * @description Name of the business
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
 * Type of FRESHBOOKS's FRESHBOOKS_LIST_PROJECTS tool input.
 */
type FRESHBOOKS_LIST_PROJECTS_INPUT = {
  /**
   * Active
   * @description If true, returns only active projects
   * @default null
   */
  active: boolean | null;
  /**
   * Business Id
   * @description The unique identifier of the business to list projects for
   */
  business_id?: number;
  /**
   * Complete
   * @description If true, returns only completed projects
   * @default null
   */
  complete: boolean | null;
  /**
   * Include Logged Duration
   * @description If true, includes logged duration (in seconds) for each project
   * @default null
   */
  include_logged_duration: boolean | null;
  /**
   * Skip Group
   * @description If true, omits the group field from each project
   * @default null
   */
  skip_group: boolean | null;
  /**
   * Sort By
   * @description Field by which to sort returned projects
   * @default null
   * @enum {string|null}
   */
  sort_by: "created_at" | "due_date" | "title" | null;
  /**
   * Updated Since
   * @description Only return projects updated at or after this UTC datetime (RFC3339)
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of FRESHBOOKS's FRESHBOOKS_LIST_PROJECTS tool output.
 */
type FRESHBOOKS_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of project objects
       */
      projects: {
          /**
           * Active
           * @description Indicates if the project is active
           */
          active: boolean;
          /**
           * Budget
           * @description Budget for the project
           * @default null
           */
          budget: number | null;
          /**
           * Client Id
           * @description Unique identifier of the client billed for the project
           */
          client_id: number;
          /**
           * Complete
           * @description Indicates if the project is completed
           */
          complete: boolean;
          /**
           * Created At
           * @description Creation datetime of the project (RFC3339)
           */
          created_at: string;
          /**
           * Description
           * @description Description of the project
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Projected completion date (YYYY-MM-DD)
           * @default null
           */
          due_date: string | null;
          /**
           * Fixed Price
           * @description Amount charged for flat-rate projects
           */
          fixed_price: string;
          /**
           * Group
           * @description Group details if available
           * @default null
           */
          group: {
              /**
               * Id
               * @description Unique ID of the group membership
               */
              id: number;
              /**
               * Members
               * @description List of group members
               */
              members: {
                  /**
                   * Active
                   * @description Whether the membership is active
                   */
                  active: boolean;
                  /**
                   * Company
                   * @description Name of the business of the identity
                   */
                  company: string;
                  /**
                   * Email
                   * @description Email address of the identity
                   */
                  email: string;
                  /**
                   * First Name
                   * @description First name of the identity
                   */
                  first_name: string;
                  /**
                   * Id
                   * @description Unique ID for the membership
                   */
                  id: number;
                  /**
                   * Identity Id
                   * @description Unique ID for the identity
                   */
                  identity_id: number;
                  /**
                   * Last Name
                   * @description Last name of the identity
                   */
                  last_name: string;
                  /**
                   * Role
                   * @description Role identity holds in group
                   */
                  role: string;
              }[];
              /**
               * Pending Invitations
               * @description Pending invitations to the group
               */
              pending_invitations: {
                  /**
                   * Email
                   * @description Email address of the pending invitee
                   */
                  email: string;
                  /**
                   * Role
                   * @description Role assigned to the pending invitee
                   */
                  role: string;
              }[];
          } | null;
          /**
           * Id
           * @description Unique identifier for the project
           */
          id: number;
          /**
           * Logged Duration
           * @description Time logged for the project in seconds
           * @default null
           */
          logged_duration: number | null;
          /**
           * Rate
           * @description Hourly rate for hourly rate projects
           */
          rate: string;
          /**
           * Services
           * @description List of services associated with the project
           */
          services: {
              /**
               * Business Id
               * @description Unique identifier for the business
               */
              business_id: number;
              /**
               * Id
               * @description Unique identifier for the service
               */
              id: number;
              /**
               * Name
               * @description Name of the service
               */
              name: string;
          }[];
          /**
           * Title
           * @description The project's title
           */
          title: string;
          /**
           * Updated At
           * @description Last update datetime of the project (RFC3339)
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
 * Type map of all available tool input types for toolkit "FRESHBOOKS".
 */
export type FRESHBOOKS_TOOL_INPUTS = {
  LIST_BUSINESSES: FRESHBOOKS_LIST_BUSINESSES_INPUT
  LIST_PROJECTS: FRESHBOOKS_LIST_PROJECTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FRESHBOOKS".
 */
export type FRESHBOOKS_TOOL_OUTPUTS = {
  LIST_BUSINESSES: FRESHBOOKS_LIST_BUSINESSES_OUTPUT
  LIST_PROJECTS: FRESHBOOKS_LIST_PROJECTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FRESHBOOKS toolkit.
 */
export const FRESHBOOKS = {
  slug: "freshbooks",
  tools: {
    /**
     * Tool to list all businesses associated with the authenticated user.
     */
    LIST_BUSINESSES: "FRESHBOOKS_LIST_BUSINESSES",
    /**
     * Tool to list all projects for a business. use after confirming the business id.
     */
    LIST_PROJECTS: "FRESHBOOKS_LIST_PROJECTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FRESHBOOKS".
 */
export type FRESHBOOKS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FRESHBOOKS".
 */
export type FRESHBOOKS_TRIGGER_EVENTS = {}
