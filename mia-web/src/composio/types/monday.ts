// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MONDAY's MONDAY_ADD_USERS_TO_BOARD tool input.
 */
type MONDAY_ADD_USERS_TO_BOARD_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of an existing Monday.com board.
   */
  board_id?: number;
  /**
   * Kind
   * @description Role for the added users on the board. Possible values: 'owner' or 'subscriber'.
   * @default subscriber
   */
  kind: string;
  /**
   * User Ids
   * @description List of unique identifiers for existing Monday.com users.
   */
  user_ids?: number[];
};

/**
 * Type of MONDAY's MONDAY_ADD_USERS_TO_BOARD tool output.
 */
type MONDAY_ADD_USERS_TO_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The complete JSON response received from the Monday.com API. This includes details of the newly added users or error messages if the operation failed.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_ARCHIVE_BOARD tool input.
 */
type MONDAY_ARCHIVE_BOARD_INPUT = {
  /**
   * Board Id
   * @description Identifier of the board to be archived; it must exist and not already be archived.
   */
  board_id?: number;
};

/**
 * Type of MONDAY's MONDAY_ARCHIVE_BOARD tool output.
 */
type MONDAY_ARCHIVE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Full JSON response from the Monday.com API, e.g., `{'data': {'archive_board': {'id': 'BOARD_ID'}}}` on success, or an `errors` object on failure.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_ARCHIVE_ITEM tool input.
 */
type MONDAY_ARCHIVE_ITEM_INPUT = {
  /**
   * Item Id
   * @description Unique identifier of the Monday.com item to archive.
   */
  item_id?: number;
};

/**
 * Type of MONDAY's MONDAY_ARCHIVE_ITEM tool output.
 */
type MONDAY_ARCHIVE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON response from the Monday.com API, including the archived item's ID on success or error details on failure.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_CHANGE_SIMPLE_COLUMN_VALUE tool input.
 */
type MONDAY_CHANGE_SIMPLE_COLUMN_VALUE_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the board where the item and column are located.
   */
  board_id?: number;
  /**
   * Column Id
   * @description Identifier of the column to change; typically a Text, Status, or Dropdown column.
   */
  column_id?: string;
  /**
   * Create Labels If Missing
   * @description For Status/Dropdown columns: if true and `value` (as a label) doesn't exist, a new label with this value will be created.
   * @default false
   */
  create_labels_if_missing: boolean;
  /**
   * Item Id
   * @description The unique identifier of the item for which the column value will be updated.
   */
  item_id?: number;
  /**
   * Value
   * @description New string value. Format depends on column type (e.g., label name for Status/Dropdown, text for Text columns).
   */
  value?: string;
};

/**
 * Type of MONDAY's MONDAY_CHANGE_SIMPLE_COLUMN_VALUE tool output.
 */
type MONDAY_CHANGE_SIMPLE_COLUMN_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The raw JSON response from the Monday.com API. Typically, this includes the ID of the item whose column was updated, if the operation was successful. On failure, it may contain error details.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_CREATE_BOARD tool input.
 */
type MONDAY_CREATE_BOARD_INPUT = {
  /**
   * Board Kind
   * @description The kind of board to create, determining its visibility and access. Allowed values: 'public', 'private', 'share'.
   */
  board_kind?: string;
  /**
   * Board Name
   * @description The name for the new board.
   */
  board_name?: string;
  /**
   * Board Owner Ids
   * @description User IDs to be assigned as owners of the board.
   */
  board_owner_ids?: number[];
  /**
   * Board Subscriber Ids
   * @description User IDs to be subscribed to the board.
   */
  board_subscriber_ids?: number[];
  /**
   * Board Subscriber Teams Ids
   * @description Team IDs to be subscribed to the board.
   */
  board_subscriber_teams_ids?: number[];
  /**
   * Description
   * @description Description for the new board.
   */
  description?: string;
  /**
   * Folder Id
   * @description ID of the folder for the board. If `workspace_id` is absent, the board uses this folder's containing workspace. If `workspace_id` is present, this folder must be within the specified workspace.
   */
  folder_id?: number;
  /**
   * Template Id
   * @description ID of an accessible template to use for the new board.
   */
  template_id?: number;
  /**
   * Workspace Id
   * @description ID of the workspace for the board. If `folder_id` is not also given, this defaults to the user's main workspace. If `folder_id` is given, this workspace must contain that folder.
   */
  workspace_id?: number;
};

/**
 * Type of MONDAY's MONDAY_CREATE_BOARD tool output.
 */
type MONDAY_CREATE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the successfully created board.
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
 * Type of MONDAY's MONDAY_CREATE_COLUMN tool input.
 */
type MONDAY_CREATE_COLUMN_INPUT = {
  /**
   * After Column Id
   * @description ID of an existing column after which the new column will be inserted.
   */
  after_column_id?: string;
  /**
   * Board Id
   * @description Unique identifier of the board for the new column.
   */
  board_id?: number;
  /**
   * Column Type
   * @description Type of the column.
   */
  column_type?: string;
  /**
   * Defaults
   * @description JSON string with default values or settings, often for 'status' or 'dropdown' types to define labels. Example: '''{"labels": ["To Do", "In Progress", "Done"]}'''
   */
  defaults?: string;
  /**
   * Description
   * @description Description for the new column.
   */
  description?: string;
  /**
   * Title
   * @description Title for the new column.
   */
  title?: string;
};

/**
 * Type of MONDAY's MONDAY_CREATE_COLUMN tool output.
 */
type MONDAY_CREATE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON response from the API, including the new column's ID and attributes if successful.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_CREATE_GROUP tool input.
 */
type MONDAY_CREATE_GROUP_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the Monday.com board where the new group will be created.
   */
  board_id?: number;
  /**
   * Group Name
   * @description The desired name for the new group to be created on the board.
   */
  group_name?: string;
};

/**
 * Type of MONDAY's MONDAY_CREATE_GROUP tool output.
 */
type MONDAY_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The complete, raw JSON response payload returned by the Monday.com API after attempting to create the group. This typically includes the `id` of the newly created group if the operation was successful, or error details if it failed.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_CREATE_ITEM tool input.
 */
type MONDAY_CREATE_ITEM_INPUT = {
  /**
   * Board Id
   * @description The board's unique identifier.
   */
  board_id?: number;
  /**
   * Column Values
   * @description JSON string representing column values. e.g. '{"date":"2023-12-01"}'
   */
  column_values?: string;
  /**
   * Group Id
   * @description Optional group ID where the item will be created.
   */
  group_id?: string;
  /**
   * Item Name
   * @description Name of the new item.
   */
  item_name?: string;
};

/**
 * Type of MONDAY's MONDAY_CREATE_ITEM tool output.
 */
type MONDAY_CREATE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON payload returned by Monday.com.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_DELETE_COLUMN tool input.
 */
type MONDAY_DELETE_COLUMN_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the board from which the column will be deleted.
   */
  board_id?: number;
  /**
   * Column Id
   * @description The unique identifier of the column to be deleted from the specified board.
   */
  column_id?: string;
};

/**
 * Type of MONDAY's MONDAY_DELETE_COLUMN tool output.
 */
type MONDAY_DELETE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The raw JSON response from the Monday.com API after attempting to delete the column. Typically includes the ID of the deleted column if successful.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_DELETE_GROUP tool input.
 */
type MONDAY_DELETE_GROUP_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board containing the group.
   */
  board_id?: number;
  /**
   * Group Id
   * @description Unique identifier of the group to delete.
   */
  group_id?: string;
};

/**
 * Type of MONDAY's MONDAY_DELETE_GROUP tool output.
 */
type MONDAY_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON response from the API. On success, includes 'delete_group' with the 'id' and 'deleted' status. Contains error details on failure.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_DELETE_ITEM tool input.
 */
type MONDAY_DELETE_ITEM_INPUT = {
  /**
   * Item Id
   * @description The unique identifier of the Monday.com item to be deleted.
   */
  item_id?: number;
};

/**
 * Type of MONDAY's MONDAY_DELETE_ITEM tool output.
 */
type MONDAY_DELETE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON response from the Monday.com API, including the deleted item's ID on success or error details on failure.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_DUPLICATE_ITEM tool input.
 */
type MONDAY_DUPLICATE_ITEM_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the board containing the item to be duplicated. This board must exist.
   */
  board_id?: number;
  /**
   * Item Id
   * @description The unique identifier of the item to be duplicated. This item must exist on the specified `board_id`.
   */
  item_id?: number;
  /**
   * With Updates
   * @description If true, item updates (e.g., comments, replies) are duplicated with the item; if false, the new item is created without any updates.
   * @default false
   */
  with_updates: boolean;
};

/**
 * Type of MONDAY's MONDAY_DUPLICATE_ITEM tool output.
 */
type MONDAY_DUPLICATE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The complete JSON response from the Monday.com API. On success, this typically includes a 'data' object with 'duplicate_item' containing the 'id' of the newly created item. On failure, it may contain an 'errors' object detailing the issues encountered.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_GET_GROUP_DETAILS tool input.
 */
type MONDAY_GET_GROUP_DETAILS_INPUT = {
  /**
   * Board Id
   * @description Identifier of the board containing the group.
   */
  board_id?: number;
  /**
   * Group Id
   * @description Identifier of the group within the board; can be a descriptive string (e.g., 'topics', 'group_title') or a system-generated ID.
   */
  group_id?: string;
};

/**
 * Type of MONDAY's MONDAY_GET_GROUP_DETAILS tool output.
 */
type MONDAY_GET_GROUP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Complete JSON response from the Monday.com API, including group details like 'id', 'title', 'color', 'archived', and 'deleted' status.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_LIST_BOARDS tool input.
 */
type MONDAY_LIST_BOARDS_INPUT = {
  /**
   * Limit
   * @description Maximum number of boards to retrieve per page.
   * @default 25
   */
  limit: number;
  /**
   * Page
   * @description Page number for pagination.
   * @default 1
   */
  page: number;
  /**
   * State
   * @description Filters boards by their state. Valid states: 'active', 'archived', 'deleted', or 'all'.
   * @default active
   */
  state: string;
};

/**
 * Type of MONDAY's MONDAY_LIST_BOARDS tool output.
 */
type MONDAY_LIST_BOARDS_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the Monday.com GraphQL API. Contains a 'data' key with a list of 'boards' (each including 'id', 'name', 'state', 'board_kind', 'description'), and possibly an 'errors' key.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of MONDAY's MONDAY_LIST_BOARD_ITEMS tool input.
 */
type MONDAY_LIST_BOARD_ITEMS_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the Monday.com board from which to retrieve items.
   */
  board_id?: number;
};

/**
 * Type of MONDAY's MONDAY_LIST_BOARD_ITEMS tool output.
 */
type MONDAY_LIST_BOARD_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The complete, unmodified JSON response from the Monday.com API, containing the list of items (including their ID, name, and state) from the specified board. The items are typically found under the path `data.boards[0].items_page.items`.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_LIST_COLUMNS tool input.
 */
type MONDAY_LIST_COLUMNS_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the board from which to retrieve the columns.
   */
  board_id?: number;
};

/**
 * Type of MONDAY's MONDAY_LIST_COLUMNS tool output.
 */
type MONDAY_LIST_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON response from the Monday.com API. Contains a list of columns for the board, with details per column: ID, title, type, description, archived status, settings (JSON string), and width. Column data is typically at `data.boards[0].columns`.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_LIST_ITEMS tool input.
 */
type MONDAY_LIST_ITEMS_INPUT = {
  /**
   * Item Ids
   * @description Subitem IDs to retrieve.
   */
  item_ids?: number[];
};

/**
 * Type of MONDAY's MONDAY_LIST_ITEMS tool output.
 */
type MONDAY_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw JSON payload for the subitems from Monday.com.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_LIST_USERS tool input.
 */
type MONDAY_LIST_USERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of users to return per page.
   * @default 25
   */
  limit: number;
  /**
   * Page
   * @description Page number for results; starts at 1.
   * @default 1
   */
  page: number;
};

/**
 * Type of MONDAY's MONDAY_LIST_USERS tool output.
 */
type MONDAY_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The complete, unmodified JSON response from the Monday.com API. This typically includes a 'data' field with the list of users and an 'errors' field if any problems occurred.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_MOVE_ITEM_TO_BOARD tool input.
 */
type MONDAY_MOVE_ITEM_TO_BOARD_INPUT = {
  /**
   * Board Id
   * @description The unique identifier of the target board to which the item will be moved.
   */
  board_id?: number;
  /**
   * Group Id
   * @description The unique identifier of the target group on the destination board where the item will be placed.
   */
  group_id?: string;
  /**
   * Item Id
   * @description The unique identifier of the item to be moved.
   */
  item_id?: number;
};

/**
 * Type of MONDAY's MONDAY_MOVE_ITEM_TO_BOARD tool output.
 */
type MONDAY_MOVE_ITEM_TO_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The raw JSON response from the Monday.com API. Typically contains the 'id' of the moved item under the 'data.move_item_to_board' path upon success, or error details if the operation failed.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_MOVE_ITEM_TO_GROUP tool input.
 */
type MONDAY_MOVE_ITEM_TO_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier of the target group where the item will be moved.
   */
  group_id?: string;
  /**
   * Item Id
   * @description The unique identifier of the item to be moved.
   */
  item_id?: number;
};

/**
 * Type of MONDAY's MONDAY_MOVE_ITEM_TO_GROUP tool output.
 */
type MONDAY_MOVE_ITEM_TO_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The raw JSON payload returned by the Monday.com API, detailing the outcome of the move operation.
       */
      raw_response: {
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
 * Type of MONDAY's MONDAY_UPDATE_BOARD tool input.
 */
type MONDAY_UPDATE_BOARD_INPUT = {
  /**
   * Board Attribute
   * @description The specific attribute of the board to update. This should be an enum value as defined by Monday.com's API and should not be enclosed in quotes in the final GraphQL mutation. Common updatable attributes include 'description' and 'communication'.
   */
  board_attribute?: string;
  /**
   * Board Id
   * @description The unique identifier of the board to be updated.
   */
  board_id?: number;
  /**
   * New Value
   * @description The new value to assign to the specified board attribute.
   */
  new_value?: string;
};

/**
 * Type of MONDAY's MONDAY_UPDATE_BOARD tool output.
 */
type MONDAY_UPDATE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The raw JSON payload returned by Monday.com, including any data or errors.
       */
      raw_response: {
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
 * Type map of all available tool input types for toolkit "MONDAY".
 */
export type MONDAY_TOOL_INPUTS = {
  ADD_USERS_TO_BOARD: MONDAY_ADD_USERS_TO_BOARD_INPUT
  ARCHIVE_BOARD: MONDAY_ARCHIVE_BOARD_INPUT
  ARCHIVE_ITEM: MONDAY_ARCHIVE_ITEM_INPUT
  CHANGE_SIMPLE_COLUMN_VALUE: MONDAY_CHANGE_SIMPLE_COLUMN_VALUE_INPUT
  CREATE_BOARD: MONDAY_CREATE_BOARD_INPUT
  CREATE_COLUMN: MONDAY_CREATE_COLUMN_INPUT
  CREATE_GROUP: MONDAY_CREATE_GROUP_INPUT
  CREATE_ITEM: MONDAY_CREATE_ITEM_INPUT
  DELETE_COLUMN: MONDAY_DELETE_COLUMN_INPUT
  DELETE_GROUP: MONDAY_DELETE_GROUP_INPUT
  DELETE_ITEM: MONDAY_DELETE_ITEM_INPUT
  DUPLICATE_ITEM: MONDAY_DUPLICATE_ITEM_INPUT
  GET_GROUP_DETAILS: MONDAY_GET_GROUP_DETAILS_INPUT
  LIST_BOARDS: MONDAY_LIST_BOARDS_INPUT
  LIST_BOARD_ITEMS: MONDAY_LIST_BOARD_ITEMS_INPUT
  LIST_COLUMNS: MONDAY_LIST_COLUMNS_INPUT
  LIST_ITEMS: MONDAY_LIST_ITEMS_INPUT
  LIST_USERS: MONDAY_LIST_USERS_INPUT
  MOVE_ITEM_TO_BOARD: MONDAY_MOVE_ITEM_TO_BOARD_INPUT
  MOVE_ITEM_TO_GROUP: MONDAY_MOVE_ITEM_TO_GROUP_INPUT
  UPDATE_BOARD: MONDAY_UPDATE_BOARD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MONDAY".
 */
export type MONDAY_TOOL_OUTPUTS = {
  ADD_USERS_TO_BOARD: MONDAY_ADD_USERS_TO_BOARD_OUTPUT
  ARCHIVE_BOARD: MONDAY_ARCHIVE_BOARD_OUTPUT
  ARCHIVE_ITEM: MONDAY_ARCHIVE_ITEM_OUTPUT
  CHANGE_SIMPLE_COLUMN_VALUE: MONDAY_CHANGE_SIMPLE_COLUMN_VALUE_OUTPUT
  CREATE_BOARD: MONDAY_CREATE_BOARD_OUTPUT
  CREATE_COLUMN: MONDAY_CREATE_COLUMN_OUTPUT
  CREATE_GROUP: MONDAY_CREATE_GROUP_OUTPUT
  CREATE_ITEM: MONDAY_CREATE_ITEM_OUTPUT
  DELETE_COLUMN: MONDAY_DELETE_COLUMN_OUTPUT
  DELETE_GROUP: MONDAY_DELETE_GROUP_OUTPUT
  DELETE_ITEM: MONDAY_DELETE_ITEM_OUTPUT
  DUPLICATE_ITEM: MONDAY_DUPLICATE_ITEM_OUTPUT
  GET_GROUP_DETAILS: MONDAY_GET_GROUP_DETAILS_OUTPUT
  LIST_BOARDS: MONDAY_LIST_BOARDS_OUTPUT
  LIST_BOARD_ITEMS: MONDAY_LIST_BOARD_ITEMS_OUTPUT
  LIST_COLUMNS: MONDAY_LIST_COLUMNS_OUTPUT
  LIST_ITEMS: MONDAY_LIST_ITEMS_OUTPUT
  LIST_USERS: MONDAY_LIST_USERS_OUTPUT
  MOVE_ITEM_TO_BOARD: MONDAY_MOVE_ITEM_TO_BOARD_OUTPUT
  MOVE_ITEM_TO_GROUP: MONDAY_MOVE_ITEM_TO_GROUP_OUTPUT
  UPDATE_BOARD: MONDAY_UPDATE_BOARD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MONDAY toolkit.
 */
export const MONDAY = {
  slug: "monday",
  tools: {
    /**
     * Adds users to a monday.com board with a specified role.
     */
    ADD_USERS_TO_BOARD: "MONDAY_ADD_USERS_TO_BOARD",
    /**
     * Archives a specified, existing, and unarchived board in monday.com; archived boards can typically be restored later.
     */
    ARCHIVE_BOARD: "MONDAY_ARCHIVE_BOARD",
    /**
     * Archives an existing monday.com item, moving it from active board views to the archive where it can be potentially restored.
     */
    ARCHIVE_ITEM: "MONDAY_ARCHIVE_ITEM",
    /**
     * Changes a specific column's value for a monday.com item using a simple string, suitable for text, status, or dropdown columns; can create new labels if `create labels if missing` is true for status/dropdown columns.
     */
    CHANGE_SIMPLE_COLUMN_VALUE: "MONDAY_CHANGE_SIMPLE_COLUMN_VALUE",
    /**
     * Creates a monday.com board; `template id` if used must be accessible, and `folder id` must be in `workspace id` if both are provided.
     */
    CREATE_BOARD: "MONDAY_CREATE_BOARD",
    /**
     * Creates a new column with a specified type and title on a monday.com board.
     */
    CREATE_COLUMN: "MONDAY_CREATE_COLUMN",
    /**
     * Creates a new group with the given `group name` on an existing monday.com board, identified by its `board id`.
     */
    CREATE_GROUP: "MONDAY_CREATE_GROUP",
    /**
     * Creates a new item on a monday.com board, optionally assigning it to a group and setting column values.
     */
    CREATE_ITEM: "MONDAY_CREATE_ITEM",
    /**
     * Deletes a specified column from a monday.com board; this action is destructive and cannot be undone via the api.
     */
    DELETE_COLUMN: "MONDAY_DELETE_COLUMN",
    /**
     * Permanently deletes an existing group (and its items) from an existing board in monday.com.
     */
    DELETE_GROUP: "MONDAY_DELETE_GROUP",
    /**
     * Permanently deletes an existing monday.com item; this action is irreversible via the api.
     */
    DELETE_ITEM: "MONDAY_DELETE_ITEM",
    /**
     * Duplicates an item on a monday.com board, optionally including its updates.
     */
    DUPLICATE_ITEM: "MONDAY_DUPLICATE_ITEM",
    /**
     * Retrieves details (id, title, color, archived/deleted status) for a specific group on an accessible monday.com board.
     */
    GET_GROUP_DETAILS: "MONDAY_GET_GROUP_DETAILS",
    /**
     * Retrieves a list of boards from a monday.com account, supporting pagination and filtering by state.
     */
    LIST_BOARDS: "MONDAY_LIST_BOARDS",
    /**
     * Retrieves id, name, and state for all items on a specified monday.com board.
     */
    LIST_BOARD_ITEMS: "MONDAY_LIST_BOARD_ITEMS",
    /**
     * Lists all columns and their properties for a specified monday.com `board id`; the board must exist.
     */
    LIST_COLUMNS: "MONDAY_LIST_COLUMNS",
    /**
     * Retrieves specified subitems from monday.com using their ids, returning the raw json response.
     */
    LIST_ITEMS: "MONDAY_LIST_ITEMS",
    /**
     * Retrieves a list of users from monday.com; an empty user list in the response 'data' field does not signify action failure.
     */
    LIST_USERS: "MONDAY_LIST_USERS",
    /**
     * Moves a monday.com item to a specified board and group; requires the item, target board, and target group to exist.
     */
    MOVE_ITEM_TO_BOARD: "MONDAY_MOVE_ITEM_TO_BOARD",
    /**
     * Moves an item to a different group on the same monday.com board; the item and group must exist.
     */
    MOVE_ITEM_TO_GROUP: "MONDAY_MOVE_ITEM_TO_GROUP",
    /**
     * Updates a specified attribute of an existing board on monday.com.
     */
    UPDATE_BOARD: "MONDAY_UPDATE_BOARD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MONDAY".
 */
export type MONDAY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MONDAY".
 */
export type MONDAY_TRIGGER_EVENTS = {}
