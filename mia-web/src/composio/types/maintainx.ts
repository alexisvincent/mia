// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAINTAINX's MAINTAINX_CREATE_WORK_ORDER tool input.
 */
type MAINTAINX_CREATE_WORK_ORDER_INPUT = {
  /**
   * Asset Id
   * @description ID of the asset associated with the work order
   * @default null
   */
  asset_id: number | null;
  /**
   * Categories
   * @description List of categories for the work order
   * @default null
   */
  categories: string[] | null;
  /**
   * Description
   * @description Detailed description of the work order
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Due date for the work order in ISO 8601 format (e.g., 2024-03-15T14:30:00Z)
   * @default null
   */
  due_date: string | null;
  /**
   * Location Id
   * @description ID of the location where the work is to be performed
   * @default null
   */
  location_id: number | null;
  /**
   * Priority
   * @description Priority level of the work order (NONE, LOW, MEDIUM, HIGH)
   * @default null
   * @enum {string|null}
   */
  priority: "NONE" | "LOW" | "MEDIUM" | "HIGH" | null;
  /**
   * Procedure Template Id
   * @description ID of the procedure template to use
   * @default null
   */
  procedure_template_id: number | null;
  /**
   * Start Date
   * @description Start date for the work order in ISO 8601 format (e.g., 2024-03-15T14:30:00Z)
   * @default null
   */
  start_date: string | null;
  /**
   * Team Ids
   * @description List of team IDs to assign to the work order
   * @default null
   */
  team_ids: number[] | null;
  /**
   * Title
   * @description The title of the work order
   */
  title?: string;
  /**
   * User Ids
   * @description List of user IDs to assign to the work order
   * @default null
   */
  user_ids: number[] | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_CREATE_WORK_ORDER tool output.
 */
type MAINTAINX_CREATE_WORK_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description The description of the work order
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description The due date of the work order
       * @default null
       */
      dueDate: string | null;
      /**
       * Id
       * @description The ID of the created work order
       */
      id: number;
      /**
       * Priority
       * @description The priority of the work order
       * @default null
       */
      priority: string | null;
      /**
       * Start Date
       * @description The start date of the work order
       * @default null
       */
      startDate: string | null;
      /**
       * Title
       * @description The title of the work order
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
 * Type of MAINTAINX's MAINTAINX_CREATE_WORK_ORDER_COMMENT tool input.
 */
type MAINTAINX_CREATE_WORK_ORDER_COMMENT_INPUT = {
  /**
   * Content
   * @description The text content of the comment
   */
  content?: string;
  /**
   * Work Order Id
   * @description The ID of the work order to add the comment to
   */
  work_order_id?: number;
};

/**
 * Type of MAINTAINX's MAINTAINX_CREATE_WORK_ORDER_COMMENT tool output.
 */
type MAINTAINX_CREATE_WORK_ORDER_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The content of the created comment
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description The timestamp when the comment was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description The ID of the created comment
       * @default null
       */
      id: number | null;
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
 * Type of MAINTAINX's MAINTAINX_CREATE_WORK_REQUEST_PORTAL tool input.
 */
type MAINTAINX_CREATE_WORK_REQUEST_PORTAL_INPUT = {
  /**
   * Asset Id
   * @description ID of the asset related to the portal
   * @default null
   */
  asset_id: number | null;
  /**
   * Contact Information
   * @description Contact of the person creating the portal (email or phone number)
   * @default null
   */
  contact_information: string | null;
  /**
   * Description Placeholder
   * @description Placeholder text for the description field
   * @default null
   */
  description_placeholder: string | null;
  /**
   * Email Only
   * @description Allow request creation with email only to contact the requester
   * @default null
   */
  email_only: boolean | null;
  /**
   * Location Id
   * @description ID of the location where the portal is located
   * @default null
   */
  location_id: number | null;
  /**
   * Send Email Notification
   * @description Send email notifications to the portal requesters with status updates on their requests
   * @default null
   */
  send_email_notification: boolean | null;
  /**
   * Title
   * @description Title of the portal
   */
  title?: string;
  /**
   * Welcome Text
   * @description Description text describing the portal
   * @default null
   */
  welcome_text: string | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_CREATE_WORK_REQUEST_PORTAL tool output.
 */
type MAINTAINX_CREATE_WORK_REQUEST_PORTAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created work request portal
       */
      id: number;
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
 * Type of MAINTAINX's MAINTAINX_FIND_ENTITY tool input.
 */
type MAINTAINX_FIND_ENTITY_INPUT = {
  /**
   * Entity Type
   * @description Type of entity to search for
   */
  entity_type?: string;
  /**
   * Limit
   * @description Max number of results to return (1-200)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Search Query
   * @description Text to filter entities by title/name
   */
  search_query?: string;
  /**
   * Sort By
   * @description Field to sort results by
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order (asc or desc)
   * @default null
   */
  sort_order: string | null;
  /**
   * Status
   * @description Filter by status (applicable for workorders)
   * @default null
   */
  status: string | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_FIND_ENTITY tool output.
 */
type MAINTAINX_FIND_ENTITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether there are more results available
       */
      has_more: boolean;
      /**
       * Results
       * @description List of found entities
       */
      results: {
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Entity ID
           */
          id: number;
          /**
           * Name
           * @description Entity name or title
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Entity status if applicable
           * @default null
           */
          status: string | null;
          /**
           * Type
           * @description Entity type
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of matching entities
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
 * Type of MAINTAINX's MAINTAINX_LIST_ASSETS tool input.
 */
type MAINTAINX_LIST_ASSETS_INPUT = {
  /**
   * Cursor
   * @description Last pagination reference
   * @default null
   */
  cursor: string | null;
  /**
   * Custom Field Name
   * @description Filter assets by custom field value
   * @default null
   */
  custom_field_name: string[] | null;
  /**
   * Expand
   * @description Fields to expand in the response
   * @default null
   */
  expand: string[] | null;
  /**
   * Limit
   * @description Max number of Assets returned (1-200)
   * @default 100
   */
  limit: number | null;
  /**
   * Location Id
   * @description Will only show assets that are related to the location
   * @default null
   */
  location_id: number | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_LIST_ASSETS tool output.
 */
type MAINTAINX_LIST_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assets
       * @description List of assets
       */
      assets: {
          [key: string]: unknown;
      }[];
      /**
       * Next Cursor
       * @description Cursor for pagination
       * @default null
       */
      nextCursor: string | null;
      /**
       * Next Page Url
       * @description URL for next page
       * @default null
       */
      nextPageUrl: string | null;
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
 * Type of MAINTAINX's MAINTAINX_LIST_CATEGORIES tool input.
 */
type MAINTAINX_LIST_CATEGORIES_INPUT = {
  /**
   * Cursor
   * @description Last pagination reference
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Max number of Categories returned (1-200). Default is 100.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_LIST_CATEGORIES tool output.
 */
type MAINTAINX_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of categories
       */
      categories: {
          /**
           * Description
           * @description Description field for additional information
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description ID of the category
           */
          id: number;
          /**
           * Label
           * @description Label used when displaying the category
           */
          label: string;
      }[];
      /**
       * Next Cursor
       * @description Cursor for the next page of results
       * @default null
       */
      nextCursor: string | null;
      /**
       * Next Page Url
       * @description URL for the next page of results
       * @default null
       */
      nextPageUrl: string | null;
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
 * Type of MAINTAINX's MAINTAINX_LIST_LOCATIONS tool input.
 */
type MAINTAINX_LIST_LOCATIONS_INPUT = {
  /**
   * Cursor
   * @description Last pagination reference
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Max number of Locations returned (1-200)
   * @default 100
   */
  limit: number | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_LIST_LOCATIONS tool output.
 */
type MAINTAINX_LIST_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of locations
       */
      locations: {
          [key: string]: unknown;
      }[];
      /**
       * Next Cursor
       * @description Cursor for pagination
       * @default null
       */
      nextCursor: string | null;
      /**
       * Next Page Url
       * @description URL for next page
       * @default null
       */
      nextPageUrl: string | null;
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
 * Type of MAINTAINX's MAINTAINX_LIST_TEAMS tool input.
 */
type MAINTAINX_LIST_TEAMS_INPUT = object;

/**
 * Type of MAINTAINX's MAINTAINX_LIST_TEAMS tool output.
 */
type MAINTAINX_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of teams in the organization
       */
      teams: {
          /**
           * Id
           * @description The unique identifier of the team
           */
          id: number;
          /**
           * Name
           * @description The name of the team
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
 * Type of MAINTAINX's MAINTAINX_LIST_WORK_ORDERS tool input.
 */
type MAINTAINX_LIST_WORK_ORDERS_INPUT = {
  /**
   * Assets
   * @description Filter by asset IDs
   * @default null
   */
  assets: number[] | null;
  /**
   * Assignees
   * @description Filter by assignee IDs
   * @default null
   */
  assignees: number[] | null;
  /**
   * Categories
   * @description Filter by categories
   * @default null
   */
  categories: string[] | null;
  /**
   * Cursor
   * @description Last pagination reference
   * @default null
   */
  cursor: string | null;
  /**
   * Expand
   * @description Expand specific fields in response
   * @default null
   */
  expand: string[] | null;
  /**
   * Limit
   * @description Max number of Work Orders returned (1-200)
   * @default null
   */
  limit: number | null;
  /**
   * Locations
   * @description Filter by location IDs
   * @default null
   */
  locations: number[] | null;
  /**
   * Not Assets
   * @description Exclude work orders with specified assets
   * @default null
   */
  notAssets: number[] | null;
  /**
   * Not Categories
   * @description Exclude work orders with specified categories
   * @default null
   */
  notCategories: string[] | null;
  /**
   * Not Locations
   * @description Exclude work orders with specified locations
   * @default null
   */
  notLocations: number[] | null;
  /**
   * Not Parts
   * @description Exclude work orders with specified parts
   * @default null
   */
  notParts: number[] | null;
  /**
   * Not Vendors
   * @description Exclude work orders with specified vendors
   * @default null
   */
  notVendors: number[] | null;
  /**
   * Parts
   * @description Filter by part IDs
   * @default null
   */
  parts: number[] | null;
  /**
   * Priorities
   * @description Filter by priorities
   * @default null
   */
  priorities: string[] | null;
  /**
   * Show Upcoming
   * @description Include work orders with future start date
   * @default null
   */
  show_upcoming: boolean | null;
  /**
   * Sort
   * @description Sort attribute
   * @default null
   */
  sort: string | null;
  /**
   * Statuses
   * @description Filter by statuses
   * @default null
   */
  statuses: string[] | null;
  /**
   * Teams
   * @description Filter by team IDs
   * @default null
   */
  teams: number[] | null;
  /**
   * Title
   * @description Filter work orders by title
   * @default null
   */
  title: string | null;
  /**
   * Vendors
   * @description Filter by vendor IDs
   * @default null
   */
  vendors: number[] | null;
};

/**
 * Type of MAINTAINX's MAINTAINX_LIST_WORK_ORDERS tool output.
 */
type MAINTAINX_LIST_WORK_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default null
       */
      nextCursor: string | null;
      /**
       * Next Page Url
       * @description URL for next page
       * @default null
       */
      nextPageUrl: string | null;
      /**
       * Work Orders
       * @description List of work orders
       */
      workOrders: {
          /**
           * Asset Id
           * @description Asset ID
           * @default null
           */
          assetId: number | null;
          /**
           * Assignee Ids
           * @description Assigned user IDs
           * @default null
           */
          assigneeIds: number[] | null;
          /**
           * Categories
           * @description Work order categories
           * @default null
           */
          categories: string[] | null;
          /**
           * Description
           * @description Work order description
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date of the work order
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description Work order ID
           */
          id: number;
          /**
           * Location Id
           * @description Location ID
           * @default null
           */
          locationId: number | null;
          /**
           * Priority
           * @description Work order priority
           * @default null
           */
          priority: string | null;
          /**
           * Sequential Id
           * @description Sequential ID of the work order
           * @default null
           */
          sequentialId: number | null;
          /**
           * Start Date
           * @description Start date of the work order
           * @default null
           */
          startDate: string | null;
          /**
           * Status
           * @description Work order status
           */
          status: string;
          /**
           * Team Ids
           * @description Team IDs
           * @default null
           */
          teamIds: number[] | null;
          /**
           * Title
           * @description Work order title
           */
          title: string;
          /**
           * Vendor Ids
           * @description Vendor IDs
           * @default null
           */
          vendorIds: number[] | null;
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
 * Type of MAINTAINX's MAINTAINX_UPDATE_WORK_ORDER tool input.
 */
type MAINTAINX_UPDATE_WORK_ORDER_INPUT = {
  /**
   * Description
   * @description New description for the work order
   * @default null
   */
  description: string | null;
  /**
   * Priority
   * @description New priority level for the work order (LOW, MEDIUM, HIGH)
   * @default null
   */
  priority: string | null;
  /**
   * Title
   * @description New title for the work order
   * @default null
   */
  title: string | null;
  /**
   * Workorder Id
   * @description The ID of the work order to update
   */
  workorder_id?: string;
};

/**
 * Type of MAINTAINX's MAINTAINX_UPDATE_WORK_ORDER tool output.
 */
type MAINTAINX_UPDATE_WORK_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Work Order
       * @description The updated work order details
       */
      workOrder: {
          /**
           * Description
           * @description The description of the work order
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The ID of the updated work order
           */
          id: number;
          /**
           * Priority
           * @description The priority level of the work order
           */
          priority: string;
          /**
           * Status
           * @description The status of the work order
           */
          status: string;
          /**
           * Title
           * @description The title of the work order
           */
          title: string;
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
 * Type of MAINTAINX's MAINTAINX_UPDATE_WORK_ORDER_STATUS tool input.
 */
type MAINTAINX_UPDATE_WORK_ORDER_STATUS_INPUT = {
  /**
   * Status
   * @description The new status for the work order
   * @enum {string}
   */
  status?: "OPEN" | "IN_PROGRESS" | "ON_HOLD" | "DONE";
  /**
   * Workorder Id
   * @description The ID of the work order to update
   */
  workorder_id?: string;
};

/**
 * Type of MAINTAINX's MAINTAINX_UPDATE_WORK_ORDER_STATUS tool output.
 */
type MAINTAINX_UPDATE_WORK_ORDER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the updated work order
       */
      id: number;
      /**
       * Status
       * @description The updated status of the work order
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
 * Type map of all available tool input types for toolkit "MAINTAINX".
 */
export type MAINTAINX_TOOL_INPUTS = {
  CREATE_WORK_ORDER: MAINTAINX_CREATE_WORK_ORDER_INPUT
  CREATE_WORK_ORDER_COMMENT: MAINTAINX_CREATE_WORK_ORDER_COMMENT_INPUT
  CREATE_WORK_REQUEST_PORTAL: MAINTAINX_CREATE_WORK_REQUEST_PORTAL_INPUT
  FIND_ENTITY: MAINTAINX_FIND_ENTITY_INPUT
  LIST_ASSETS: MAINTAINX_LIST_ASSETS_INPUT
  LIST_CATEGORIES: MAINTAINX_LIST_CATEGORIES_INPUT
  LIST_LOCATIONS: MAINTAINX_LIST_LOCATIONS_INPUT
  LIST_TEAMS: MAINTAINX_LIST_TEAMS_INPUT
  LIST_WORK_ORDERS: MAINTAINX_LIST_WORK_ORDERS_INPUT
  UPDATE_WORK_ORDER: MAINTAINX_UPDATE_WORK_ORDER_INPUT
  UPDATE_WORK_ORDER_STATUS: MAINTAINX_UPDATE_WORK_ORDER_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAINTAINX".
 */
export type MAINTAINX_TOOL_OUTPUTS = {
  CREATE_WORK_ORDER: MAINTAINX_CREATE_WORK_ORDER_OUTPUT
  CREATE_WORK_ORDER_COMMENT: MAINTAINX_CREATE_WORK_ORDER_COMMENT_OUTPUT
  CREATE_WORK_REQUEST_PORTAL: MAINTAINX_CREATE_WORK_REQUEST_PORTAL_OUTPUT
  FIND_ENTITY: MAINTAINX_FIND_ENTITY_OUTPUT
  LIST_ASSETS: MAINTAINX_LIST_ASSETS_OUTPUT
  LIST_CATEGORIES: MAINTAINX_LIST_CATEGORIES_OUTPUT
  LIST_LOCATIONS: MAINTAINX_LIST_LOCATIONS_OUTPUT
  LIST_TEAMS: MAINTAINX_LIST_TEAMS_OUTPUT
  LIST_WORK_ORDERS: MAINTAINX_LIST_WORK_ORDERS_OUTPUT
  UPDATE_WORK_ORDER: MAINTAINX_UPDATE_WORK_ORDER_OUTPUT
  UPDATE_WORK_ORDER_STATUS: MAINTAINX_UPDATE_WORK_ORDER_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAINTAINX toolkit.
 */
export const MAINTAINX = {
  slug: "maintainx",
  tools: {
    /**
     * This tool creates a new work order in maintainx. it uses the post /api/v1/workorders endpoint. the tool requires a 'title' for the work order and offers several optional parameters including description, priority, duedate, startdate, userids, teamids, proceduretemplateid, locationid, assetid, and categories.
     */
    CREATE_WORK_ORDER: "MAINTAINX_CREATE_WORK_ORDER",
    /**
     * This tool creates a new comment on an existing work order in maintainx. it allows users to add comments for documentation, updates, or communication purposes within a specific work order. it requires a workorderid and the text content of the comment to create a new comment on the work order, providing capabilities to update maintenance work order records.
     */
    CREATE_WORK_ORDER_COMMENT: "MAINTAINX_CREATE_WORK_ORDER_COMMENT",
    /**
     * Creates a new work request portal in maintainx. a work request portal allows users to submit work requests through a dedicated url. the portal can be customized with a title, welcome text, and description placeholder. it can be associated with a specific location and asset, and can be configured to require email contact information.
     */
    CREATE_WORK_REQUEST_PORTAL: "MAINTAINX_CREATE_WORK_REQUEST_PORTAL",
    /**
     * A tool to search and find specific entities within maintainx by specified fields. this tool allows users to search for different types of entities including work orders, users, and locations.
     */
    FIND_ENTITY: "MAINTAINX_FIND_ENTITY",
    /**
     * This tool allows users to retrieve a list of all assets in their organization.
     */
    LIST_ASSETS: "MAINTAINX_LIST_ASSETS",
    /**
     * This tool retrieves a list of all categories in your maintainx organization. categories are used to organize and classify work orders, assets, and other items in the system. it supports listing the categories with pagination and provides details such as category id, name, description, and timestamps for creation and update.
     */
    LIST_CATEGORIES: "MAINTAINX_LIST_CATEGORIES",
    /**
     * This tool retrieves a list of all available locations in the organization's maintainx account. the locations can be physical places where assets are located, work is performed, or maintenance is needed.
     */
    LIST_LOCATIONS: "MAINTAINX_LIST_LOCATIONS",
    /**
     * This tool retrieves a list of all teams in your maintainx organization.
     */
    LIST_TEAMS: "MAINTAINX_LIST_TEAMS",
    /**
     * Action to list work orders from maintainx.
     */
    LIST_WORK_ORDERS: "MAINTAINX_LIST_WORK_ORDERS",
    /**
     * This tool allows users to update an existing work order in maintainx by modifying specific attributes without affecting other unchanged fields. it requires the workorder id and at least one of the optional parameters (title, description, or priority) to perform the update.
     */
    UPDATE_WORK_ORDER: "MAINTAINX_UPDATE_WORK_ORDER",
    /**
     * This tool allows users to update the status of a specific work order in maintainx. it is focused specifically on status updates, making it more streamlined than the comprehensive 'update work order' action which allows updating multiple fields.
     */
    UPDATE_WORK_ORDER_STATUS: "MAINTAINX_UPDATE_WORK_ORDER_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAINTAINX".
 */
export type MAINTAINX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAINTAINX".
 */
export type MAINTAINX_TRIGGER_EVENTS = {}
