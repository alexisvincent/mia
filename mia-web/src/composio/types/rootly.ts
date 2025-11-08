// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ROOTLY's ROOTLY_DELETE_ACTION_ITEM tool input.
 */
type ROOTLY_DELETE_ACTION_ITEM_INPUT = {
  /**
   * Action Item Id
   * @description The unique identifier of the action item to delete.
   */
  action_item_id?: string;
};

/**
 * Type of ROOTLY's ROOTLY_DELETE_ACTION_ITEM tool output.
 */
type ROOTLY_DELETE_ACTION_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the action item was successfully deleted.
       * @default true
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
 * Type of ROOTLY's ROOTLY_GET_ACTION_ITEM tool input.
 */
type ROOTLY_GET_ACTION_ITEM_INPUT = {
  /**
   * Action Item Id
   * @description The ID of the action item to retrieve
   */
  action_item_id?: string;
};

/**
 * Type of ROOTLY's ROOTLY_GET_ACTION_ITEM tool output.
 */
type ROOTLY_GET_ACTION_ITEM_OUTPUT = {
  /**
   * Data
   * @description The action item data
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the action item
       */
      attributes: {
          /**
           * Assigned To Group Ids
           * @description IDs of groups assigned to this action item
           * @default null
           */
          assigned_to_group_ids: string[] | null;
          /**
           * Assigned To User Id
           * @description ID of user assigned to this action item
           * @default null
           */
          assigned_to_user_id: number | null;
          /**
           * Created At
           * @description Date of creation
           */
          created_at: string;
          /**
           * Description
           * @description The description of the action item
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description The due date of the action item
           * @default null
           */
          due_date: string | null;
          /**
           * Jira Issue Id
           * @description The Jira issue ID
           * @default null
           */
          jira_issue_id: string | null;
          /**
           * Jira Issue Url
           * @description The Jira issue URL
           * @default null
           */
          jira_issue_url: string | null;
          /**
           * Kind
           * @description The kind of the action item (task or follow_up)
           * @default null
           */
          kind: string | null;
          /**
           * Priority
           * @description The priority of the action item (high, medium, low)
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description The status of the action item (open, in_progress, cancelled, done)
           * @default null
           */
          status: string | null;
          /**
           * Summary
           * @description The summary of the action item
           */
          summary: string;
          /**
           * Updated At
           * @description Date of last update
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique ID of the action item
       */
      id: string;
      /**
       * Relationships
       * @description Related resources
       * @default null
       */
      relationships: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Type of the item (incident_action_items)
       */
      type: string;
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
 * Type of ROOTLY's ROOTLY_LIST_ACTION_ITEMS tool input.
 */
type ROOTLY_LIST_ACTION_ITEMS_INPUT = {
  /**
   * Kind
   * @description Filter by kind of action item
   * @default null
   */
  kind: string | null;
  /**
   * Page Number
   * @description Page number for pagination
   * @default null
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default null
   */
  page_size: number | null;
  /**
   * Priority
   * @description Filter by priority
   * @default null
   */
  priority: string | null;
  /**
   * Status
   * @description Filter by status
   * @default null
   */
  status: string | null;
};

/**
 * Type of ROOTLY's ROOTLY_LIST_ACTION_ITEMS tool output.
 */
type ROOTLY_LIST_ACTION_ITEMS_OUTPUT = {
  /**
   * Data
   * @description List of action items
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the action item
       */
      attributes: {
          /**
           * Assigned To Group Ids
           * @description IDs of groups assigned to this action item
           * @default null
           */
          assigned_to_group_ids: string[] | null;
          /**
           * Assigned To User Id
           * @description ID of user assigned to this action item
           * @default null
           */
          assigned_to_user_id: number | null;
          /**
           * Created At
           * @description Date of creation
           */
          created_at: string;
          /**
           * Description
           * @description The description of the action item
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description The due date of the action item
           * @default null
           */
          due_date: string | null;
          /**
           * Jira Issue Id
           * @description The Jira issue ID
           * @default null
           */
          jira_issue_id: string | null;
          /**
           * Jira Issue Url
           * @description The Jira issue URL
           * @default null
           */
          jira_issue_url: string | null;
          /**
           * Kind
           * @description The kind of the action item (task or follow_up)
           * @default null
           */
          kind: string | null;
          /**
           * Priority
           * @description The priority of the action item (high, medium, low)
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description The status of the action item (open, in_progress, cancelled, done)
           * @default null
           */
          status: string | null;
          /**
           * Summary
           * @description The summary of the action item
           */
          summary: string;
          /**
           * Updated At
           * @description Date of last update
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique ID of the action item
       */
      id: string;
      /**
       * Type
       * @description Type of the item (incident_action_items)
       */
      type: string;
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
 * Type map of all available tool input types for toolkit "ROOTLY".
 */
export type ROOTLY_TOOL_INPUTS = {
  DELETE_ACTION_ITEM: ROOTLY_DELETE_ACTION_ITEM_INPUT
  GET_ACTION_ITEM: ROOTLY_GET_ACTION_ITEM_INPUT
  LIST_ACTION_ITEMS: ROOTLY_LIST_ACTION_ITEMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ROOTLY".
 */
export type ROOTLY_TOOL_OUTPUTS = {
  DELETE_ACTION_ITEM: ROOTLY_DELETE_ACTION_ITEM_OUTPUT
  GET_ACTION_ITEM: ROOTLY_GET_ACTION_ITEM_OUTPUT
  LIST_ACTION_ITEMS: ROOTLY_LIST_ACTION_ITEMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ROOTLY toolkit.
 */
export const ROOTLY = {
  slug: "rootly",
  tools: {
    /**
     * This tool allows for the deletion of a specific action item in rootly. it complements the existing rootly list action items functionality by providing the ability to remove individual action items from the system.
     */
    DELETE_ACTION_ITEM: "ROOTLY_DELETE_ACTION_ITEM",
    /**
     * This tool retrieves a single action item by its id from rootly using a get request to https://api.rootly.com/v1/action items/{id}. it provides detailed information about an action item including summary, description, kind, assigned to, priority, status, due date, and more. it complements other action item management tools.
     */
    GET_ACTION_ITEM: "ROOTLY_GET_ACTION_ITEM",
    /**
     * This tool retrieves a list of all action items for an organization in rootly. action items are tasks or follow-up items that need to be completed during or after an incident, helping to track and manage incident-related tasks effectively.
     */
    LIST_ACTION_ITEMS: "ROOTLY_LIST_ACTION_ITEMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ROOTLY".
 */
export type ROOTLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ROOTLY".
 */
export type ROOTLY_TRIGGER_EVENTS = {}
