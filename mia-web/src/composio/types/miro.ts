// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MIRO's MIRO_CREATE_BOARD tool input.
 */
type MIRO_CREATE_BOARD_INPUT = {
  /**
   * Description
   * @description Description of the board, length between 0 and 300 characters.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name for the board, length between 1 and 60 characters.
   */
  name?: string;
  /**
   * PolicyRequest
   * @description Defines permissions and sharing policies for the board.
   * @default null
   */
  policy: {
      /**
       * PermissionsPolicyRequest
       * @description Permissions policy settings for the board.
       * @default null
       */
      permissionsPolicy: {
          /**
           * Collaboration Tools Start Access
           * @description Access level for collaboration tools start (e.g., who can start new collaboration tools).
           * @default null
           */
          collaborationToolsStartAccess: string | null;
          /**
           * Copy Access
           * @description Who can copy the board.
           * @default null
           */
          copyAccess: string | null;
          /**
           * Sharing Access
           * @description Who can share the board.
           * @default null
           */
          sharingAccess: string | null;
      } | null;
      /**
       * SharingPolicyRequest
       * @description Sharing policy settings for the board.
       * @default null
       */
      sharingPolicy: {
          /**
           * Access
           * @description Board access level (e.g., public, team, organization).
           * @default null
           */
          access: string | null;
          /**
           * Invite To Account And Board Link Access
           * @description Access level for invite links to account and board.
           * @default null
           */
          inviteToAccountAndBoardLinkAccess: string | null;
          /**
           * Organization Access
           * @description Organization-wide access level for the board.
           * @default null
           */
          organizationAccess: string | null;
          /**
           * Team Access
           * @description Team-wide access level for the board.
           * @default null
           */
          teamAccess: string | null;
      } | null;
  } | null;
  /**
   * Project Id
   * @description Unique identifier (ID) of the project (space) to which the board belongs.
   * @default null
   */
  projectId: string | null;
  /**
   * Team Id
   * @description Unique identifier (ID) of the team where the board will be created.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of MIRO's MIRO_CREATE_BOARD tool output.
 */
type MIRO_CREATE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the board was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description User who created the board.
       */
      createdBy: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * Current User Membership
       * @description Current user's membership details for the board.
       */
      currentUserMembership: {
          /**
           * Id
           * @description Unique identifier (ID) of the board member.
           */
          id: string;
          /**
           * Name
           * @description Name of the board member.
           */
          name: string;
          /**
           * Role
           * @description Role of the board member (viewer, commenter, editor, coowner, owner).
           */
          role: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'board_member'.
           */
          type: string;
      };
      /**
       * Description
       * @description Description of the board.
       */
      description: string;
      /**
       * Id
       * @description Unique identifier (ID) of the board.
       */
      id: string;
      /**
       * Links
       * @description Related links for the board.
       */
      links: {
          /**
           * Related
           * @description Link to obtain information about board members.
           * @default null
           */
          related: string | null;
          /**
           * Self
           * @description Link to obtain information about the current board.
           */
          self: string;
      };
      /**
       * Modified At
       * Format: date-time
       * @description Timestamp when the board was last modified.
       */
      modifiedAt: string;
      /**
       * Modified By
       * @description User who last modified the board.
       */
      modifiedBy: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * Name
       * @description Name of the board.
       */
      name: string;
      /**
       * Owner
       * @description User who created the board.
       */
      owner: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * PictureResponse
       * @description Cover picture of the board.
       * @default null
       */
      picture: {
          /**
           * Id
           * @description Unique identifier (ID) of the cover picture for the board.
           */
          id: number;
          /**
           * Image Url
           * @description URL of the cover picture of the board.
           */
          imageURL: string;
      } | null;
      /**
       * Policy
       * @description Permissions and sharing policy of the board.
       */
      policy: {
          /**
           * PermissionsPolicyResponse
           * @description Permissions policy for the board.
           * @default null
           */
          permissionsPolicy: {
              /**
               * Collaboration Tools Start Access
               * @description Access level for collaboration tools start.
               * @default null
               */
              collaborationToolsStartAccess: string | null;
              /**
               * Copy Access
               * @description Who can copy the board.
               * @default null
               */
              copyAccess: string | null;
              /**
               * Sharing Access
               * @description Who can share the board.
               * @default null
               */
              sharingAccess: string | null;
          } | null;
          /**
           * SharingPolicyResponse
           * @description Sharing policy for the board.
           * @default null
           */
          sharingPolicy: {
              /**
               * Access
               * @description Board access level (public, team, or organization).
               * @default null
               */
              access: string | null;
              /**
               * Invite To Account And Board Link Access
               * @description Access level for invite links.
               * @default null
               */
              inviteToAccountAndBoardLinkAccess: string | null;
              /**
               * Organization Access
               * @description Organization-wide access level.
               * @default null
               */
              organizationAccess: string | null;
              /**
               * Team Access
               * @description Team-wide access level.
               * @default null
               */
              teamAccess: string | null;
          } | null;
          /**
           * View Link
           * @description URL to view the board.
           * @default null
           */
          viewLink: string | null;
      };
      /**
       * ProjectResponse
       * @description Project (space) associated with the board.
       * @default null
       */
      project: {
          /**
           * Id
           * @description Unique identifier (ID) of the project (space).
           */
          id: string;
      } | null;
      /**
       * Team
       * @description Team associated with the board.
       */
      team: {
          /**
           * Id
           * @description Unique identifier (ID) of the team.
           */
          id: string;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
      };
      /**
       * Type
       * @description Type of the object returned, e.g., 'board'.
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
 * Type of MIRO's MIRO_DELETE_APP_CARD_ITEM tool input.
 */
type MIRO_DELETE_APP_CARD_ITEM_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board containing the app card item.
   */
  board_id?: string;
  /**
   * Item Id
   * @description Unique identifier of the app card item to delete.
   */
  item_id?: string;
};

/**
 * Type of MIRO's MIRO_DELETE_APP_CARD_ITEM tool output.
 */
type MIRO_DELETE_APP_CARD_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful
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
 * Type of MIRO's MIRO_DELETE_DOCUMENT_ITEM tool input.
 */
type MIRO_DELETE_DOCUMENT_ITEM_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board containing the document item.
   */
  board_id?: string;
  /**
   * Item Id
   * @description Unique identifier of the document item to delete.
   */
  item_id?: string;
};

/**
 * Type of MIRO's MIRO_DELETE_DOCUMENT_ITEM tool output.
 */
type MIRO_DELETE_DOCUMENT_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful
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
 * Type of MIRO's MIRO_DELETE_ITEM tool input.
 */
type MIRO_DELETE_ITEM_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board containing the item.
   */
  board_id?: string;
  /**
   * Item Id
   * @description Unique identifier of the item to delete.
   */
  item_id?: string;
};

/**
 * Type of MIRO's MIRO_DELETE_ITEM tool output.
 */
type MIRO_DELETE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful.
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
 * Type of MIRO's MIRO_GET_APP_CARD_ITEM tool input.
 */
type MIRO_GET_APP_CARD_ITEM_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board containing the app card item
   */
  board_id?: string;
  /**
   * Item Id
   * @description Unique identifier of the app card item to retrieve
   */
  item_id?: string;
};

/**
 * Type of MIRO's MIRO_GET_APP_CARD_ITEM tool output.
 */
type MIRO_GET_APP_CARD_ITEM_OUTPUT = {
  /**
   * Created At
   * @description ISO timestamp when the card was created
   */
  createdAt?: string;
  /**
   * Created By
   * @description User who created the card
   */
  createdBy?: {
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Type
       * @description Object type, always 'user'
       * @default user
       * @constant
       */
      type: "user";
  };
  /**
   * Data
   * @description App card data fields
   */
  data?: {
      /**
       * Description
       * @description Context description for the app card
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of custom preview fields
       * @default null
       */
      fields: {
          /**
           * Fill Color
           * @description Hex value for field background, e.g. '#FFFFFF'
           * @default null
           */
          fillColor: string | null;
          /**
           * Icon Shape
           * @description Shape of the icon on the preview field
           * @default round
           * @enum {string}
           */
          iconShape: "round" | "square";
          /**
           * Icon Url
           * Format: uri
           * @description HTTPS URL for the preview field icon
           * @default null
           */
          iconUrl: string | null;
          /**
           * Text Color
           * @description Hex value for the text color, e.g. '#000000'
           * @default null
           */
          textColor: string | null;
          /**
           * Tooltip
           * @description Tooltip text displayed on hover
           * @default null
           */
          tooltip: string | null;
          /**
           * Value
           * @description Data value of the custom field
           */
          value: string;
      }[] | null;
      /**
       * Status
       * @description Sync status of the app card with its source
       * @default disconnected
       * @enum {string}
       */
      status: "disconnected" | "connected" | "disabled";
      /**
       * Title
       * @description Short header identifying the app card
       * @default sample app card item
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
   * AppCardGeometry
   * @description Geometrical dimensions for an app card item.
   * @default null
   */
  geometry: {
      /**
       * Height
       * @description Height of the item in pixels
       * @default null
       */
      height: number | null;
      /**
       * Rotation
       * @description Rotation angle in degrees relative to the board
       * @default null
       */
      rotation: number | null;
      /**
       * Width
       * @description Width of the item in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Id
   * @description Unique identifier of the app card item
   */
  id?: string;
  /**
   * Links
   * @description Relevant resource links
   */
  links?: {
      /**
       * Self
       * Format: uri
       * @description URL to fetch this app card item
       */
      self: string;
  };
  /**
   * Modified At
   * @description ISO timestamp when the card was last modified
   */
  modifiedAt?: string;
  /**
   * Modified By
   * @description User who last modified the card
   */
  modifiedBy?: {
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Type
       * @description Object type, always 'user'
       * @default user
       * @constant
       */
      type: "user";
  };
  /**
   * AppCardParent
   * @description Parent frame reference for nesting an app card item.
   * @default null
   */
  parent: {
      /**
       * Id
       * @description ID of the parent frame
       */
      id: number;
  } | null;
  /**
   * Position
   * @description Position info for the app card
   */
  position?: {
      /**
       * X
       * @description X-axis coordinate on the board
       * @default 0
       */
      x: number | null;
      /**
       * Y
       * @description Y-axis coordinate on the board
       * @default 0
       */
      y: number | null;
  };
  /**
   * Style
   * @description Styling info for the app card
   */
  style?: {
      /**
       * Fill Color
       * @description Hex value of the border color
       * @default #2d9bf0
       */
      fillColor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIRO's MIRO_GET_BOARD tool input.
 */
type MIRO_GET_BOARD_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board to retrieve
   */
  board_id?: string;
};

/**
 * Type of MIRO's MIRO_GET_BOARD tool output.
 */
type MIRO_GET_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the board was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description User who created the board.
       */
      createdBy: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * Current User Membership
       * @description Current user's membership details for the board.
       */
      currentUserMembership: {
          /**
           * Id
           * @description Unique identifier (ID) of the board member.
           */
          id: string;
          /**
           * Name
           * @description Name of the board member.
           */
          name: string;
          /**
           * Role
           * @description Role of the board member (viewer, commenter, editor, coowner, owner).
           */
          role: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'board_member'.
           */
          type: string;
      };
      /**
       * Description
       * @description Description of the board.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier (ID) of the board.
       */
      id: string;
      /**
       * Links
       * @description Related links for the board.
       */
      links: {
          /**
           * Related
           * @description Link to obtain information about board members.
           * @default null
           */
          related: string | null;
          /**
           * Self
           * @description Link to obtain information about the current board.
           */
          self: string;
      };
      /**
       * Modified At
       * Format: date-time
       * @description Timestamp when the board was last modified.
       */
      modifiedAt: string;
      /**
       * Modified By
       * @description User who last modified the board.
       */
      modifiedBy: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * Name
       * @description Name of the board.
       */
      name: string;
      /**
       * Owner
       * @description User who owns the board.
       */
      owner: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * PictureResponse
       * @description Cover picture of the board.
       * @default null
       */
      picture: {
          /**
           * Id
           * @description Unique identifier (ID) of the cover picture for the board.
           */
          id: number;
          /**
           * Image Url
           * @description URL of the cover picture of the board.
           */
          imageURL: string;
      } | null;
      /**
       * Policy
       * @description Permissions and sharing policy of the board.
       */
      policy: {
          /**
           * PermissionsPolicyResponse
           * @description Permissions policy for the board.
           * @default null
           */
          permissionsPolicy: {
              /**
               * Collaboration Tools Start Access
               * @description Access level for collaboration tools start.
               * @default null
               */
              collaborationToolsStartAccess: string | null;
              /**
               * Copy Access
               * @description Who can copy the board.
               * @default null
               */
              copyAccess: string | null;
              /**
               * Sharing Access
               * @description Who can share the board.
               * @default null
               */
              sharingAccess: string | null;
          } | null;
          /**
           * SharingPolicyResponse
           * @description Sharing policy for the board.
           * @default null
           */
          sharingPolicy: {
              /**
               * Access
               * @description Board access level (public, team, or organization).
               * @default null
               */
              access: string | null;
              /**
               * Invite To Account And Board Link Access
               * @description Access level for invite links.
               * @default null
               */
              inviteToAccountAndBoardLinkAccess: string | null;
              /**
               * Organization Access
               * @description Organization-wide access level.
               * @default null
               */
              organizationAccess: string | null;
              /**
               * Team Access
               * @description Team-wide access level.
               * @default null
               */
              teamAccess: string | null;
          } | null;
          /**
           * View Link
           * @description URL to view the board.
           * @default null
           */
          viewLink: string | null;
      };
      /**
       * ProjectResponse
       * @description Project (space) associated with the board.
       * @default null
       */
      project: {
          /**
           * Id
           * @description Unique identifier (ID) of the project (space).
           */
          id: string;
      } | null;
      /**
       * Team
       * @description Team associated with the board.
       */
      team: {
          /**
           * Id
           * @description Unique identifier (ID) of the team.
           */
          id: string;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
      };
      /**
       * Type
       * @description Type of the object returned, e.g., 'board'.
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
 * Type of MIRO's MIRO_GET_BOARDS tool input.
 */
type MIRO_GET_BOARDS_INPUT = {
  /**
   * Limit
   * @description Number of boards to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Owner
   * @description Filter boards by owner user ID.
   * @default null
   */
  owner: string | null;
  /**
   * Project Id
   * @description Filter boards by project (space) ID.
   * @default null
   */
  project_id: string | null;
  /**
   * Query
   * @description Search query to filter boards by name.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description Sort order of the results.
   * @default null
   * @enum {string|null}
   */
  sort: "default" | "last_created" | "last_opened" | "last_modified" | "alphabetically" | null;
  /**
   * Team Id
   * @description Filter boards by team ID.
   * @default null
   */
  team_id: string | null;
};

/**
 * Type of MIRO's MIRO_GET_BOARDS tool output.
 */
type MIRO_GET_BOARDS_OUTPUT = {
  /**
   * Data
   * @description List of boards.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the board was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the board.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the board.
       */
      id: string;
      /**
       * Last Opened At
       * @description ISO 8601 timestamp when the board was last opened.
       * @default null
       */
      lastOpenedAt: string | null;
      /**
       * Modified At
       * @description ISO 8601 timestamp when the board was last modified.
       * @default null
       */
      modifiedAt: string | null;
      /**
       * Name
       * @description Name of the board.
       */
      name: string;
      /**
       * PolicyResponse
       * @description Permissions and sharing policy of the board.
       * @default null
       */
      policy: {
          /**
           * PermissionsPolicyResponse
           * @description Permissions policy settings of the board.
           * @default null
           */
          permissionsPolicy: {
              /**
               * Collaboration Tools Start Access
               * @description Access level for collaboration tools.
               * @default null
               */
              collaborationToolsStartAccess: string | null;
              /**
               * Copy Access
               * @description Access level for copying the board.
               * @default null
               */
              copyAccess: string | null;
              /**
               * Sharing Access
               * @description Access level for sharing the board.
               * @default null
               */
              sharingAccess: string | null;
          } | null;
          /**
           * SharingPolicyResponse
           * @description Sharing policy settings of the board.
           * @default null
           */
          sharingPolicy: {
              /**
               * Access
               * @description General access level of the board.
               * @default null
               */
              access: string | null;
              /**
               * Invite To Account And Board Link Access
               * @description Access level for invite links.
               * @default null
               */
              inviteToAccountAndBoardLinkAccess: string | null;
              /**
               * Organization Access
               * @description Organization-wide access level.
               * @default null
               */
              organizationAccess: string | null;
              /**
               * Team Access
               * @description Team-wide access level.
               * @default null
               */
              teamAccess: string | null;
          } | null;
      } | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the board was last updated.
       * @default null
       */
      updatedAt: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Number of boards returned per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset of the returned boards.
   */
  offset?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of boards accessible.
   */
  total?: number;
};

/**
 * Type of MIRO's MIRO_GET_BOARD_MEMBERS tool input.
 */
type MIRO_GET_BOARD_MEMBERS_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board.
   */
  board_id?: string;
  /**
   * Cursor
   * @description Cursor for pagination, used to retrieve subsequent pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Number of results per page (max 100).
   * @default null
   */
  limit: number | null;
};

/**
 * Type of MIRO's MIRO_GET_BOARD_MEMBERS tool output.
 */
type MIRO_GET_BOARD_MEMBERS_OUTPUT = {
  /**
   * Cursor
   * @description Cursor to retrieve the next page of results, if any.
   * @default null
   */
  cursor: string | null;
  /**
   * Data
   * @description List of board members.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the membership was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier of the board member entry.
       */
      id: string;
      /**
       * Links
       * @description Links related to the board member entry.
       * @default null
       */
      links: {
          [key: string]: string;
      } | null;
      /**
       * Name
       * @description Name of the user.
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role of the member on the board (e.g., viewer, editor).
       */
      role: string;
      /**
       * Type
       * @description Type of the entity, typically 'board_member'.
       * @default null
       */
      type: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Number of members returned per page.
   * @default null
   */
  limit: number | null;
  /**
   * Links
   * @description Links related to the members list.
   * @default null
   */
  links: {
      [key: string]: string;
  } | null;
  /**
   * Offset
   * @description Offset of the returned members.
   * @default null
   */
  offset: number | null;
  /**
   * Size
   * @description Number of members returned in this response.
   */
  size?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of members on the board.
   */
  total?: number;
  /**
   * Type
   * @description Type of the response (e.g., 'list').
   * @default null
   */
  type: string | null;
};

/**
 * Type of MIRO's MIRO_GET_CONNECTORS tool input.
 */
type MIRO_GET_CONNECTORS_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board to retrieve connectors from.
   */
  board_id?: string;
  /**
   * Cursor
   * @description Cursor for pagination to retrieve the next page of connectors.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of results to return per call (10 to 50). Defaults to 10.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of MIRO's MIRO_GET_CONNECTORS tool output.
 */
type MIRO_GET_CONNECTORS_OUTPUT = {
  /**
   * Cursor
   * @description Cursor value to retrieve the next page of results, if any.
   * @default null
   */
  cursor: string | null;
  /**
   * Data
   * @description List of connectors returned.
   */
  data?: {
      /**
       * Captions
       * @description List of text captions on the connector.
       */
      captions: {
          /**
           * Content
           * @description Text to display on the connector. Supports inline HTML tags.
           */
          content: string;
          /**
           * Position
           * @description Relative position of the text on the connector (percentage, e.g., '50%').
           * @default null
           */
          position: string | null;
          /**
           * Text Align Vertical
           * @description Vertical alignment of the connector text.
           * @default null
           * @enum {string|null}
           */
          textAlignVertical: "top" | "middle" | "bottom" | null;
      }[];
      /**
       * Created At
       * @description ISO 8601 timestamp when the connector was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description User who created the connector.
       */
      createdBy: {
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           * @default null
           */
          type: string | null;
      };
      /**
       * End Item
       * @description Ending point of the connector.
       */
      endItem: {
          /**
           * Id
           * @description Unique identifier of the connected item.
           */
          id: string;
      };
      /**
       * Id
       * @description Unique identifier of the connector.
       */
      id: string;
      /**
       * Is Supported
       * @description Indicates whether the connector is currently supported.
       */
      isSupported: boolean;
      /**
       * Links
       * @description Resource links for the connector.
       */
      links: {
          /**
           * Self
           * @description Link to retrieve this connector.
           */
          self: string;
      };
      /**
       * Modified At
       * @description ISO 8601 timestamp when the connector was last modified.
       */
      modifiedAt: string;
      /**
       * Modified By
       * @description User who last modified the connector.
       */
      modifiedBy: {
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           * @default null
           */
          type: string | null;
      };
      /**
       * Shape
       * @description Shape of the connector line.
       * @enum {string}
       */
      shape: "straight" | "elbowed" | "curved";
      /**
       * Start Item
       * @description Starting point of the connector.
       */
      startItem: {
          /**
           * Id
           * @description Unique identifier of the connected item.
           */
          id: string;
      };
      /**
       * Style
       * @description Styling information for the connector.
       */
      style: {
          /**
           * Caption Font Size
           * @description Font size of the connector caption text.
           * @default null
           */
          captionFontSize: number | null;
          /**
           * Color
           * @description Hex value for connector line color.
           * @default null
           */
          color: string | null;
          /**
           * Thickness
           * @description Thickness of the connector line.
           * @default null
           */
          thickness: number | null;
      };
      /**
       * Type
       * @description Type of the object returned, e.g., 'connector'.
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
   * Limit
   * @description Maximum number of results returned per call.
   */
  limit?: number;
  /**
   * Links
   * @description Pagination links for the collection.
   */
  links?: {
      /**
       * First
       * @description Link to retrieve the first page of results.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description Link to retrieve the last page of results.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description Link to retrieve the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Link to retrieve the previous page of results.
       * @default null
       */
      prev: string | null;
      /**
       * Self
       * @description Link to retrieve the current page of results.
       */
      self: string;
  };
  /**
   * Size
   * @description Number of results in this response page.
   */
  size?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of connectors in the collection.
   */
  total?: number;
};

/**
 * Type of MIRO's MIRO_GET_TAG tool input.
 */
type MIRO_GET_TAG_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the board where the tag resides.
   */
  board_id?: string;
  /**
   * Tag Id
   * @description Unique identifier of the tag to retrieve.
   */
  tag_id?: string;
};

/**
 * Type of MIRO's MIRO_GET_TAG tool output.
 */
type MIRO_GET_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fill Color
       * @description Color of the tag in hex or named format.
       */
      fillColor: string;
      /**
       * Id
       * @description Unique identifier of the tag.
       */
      id: string;
      /**
       * Links
       * @description Links associated with the tag.
       */
      links: {
          [key: string]: string;
      };
      /**
       * Title
       * @description Human-readable title of the tag.
       */
      title: string;
      /**
       * Type
       * @description Type of the tag.
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
 * Type of MIRO's MIRO_LIST_ORGANIZATIONS tool input.
 */
type MIRO_LIST_ORGANIZATIONS_INPUT = object;

/**
 * Type of MIRO's MIRO_LIST_ORGANIZATIONS tool output.
 */
type MIRO_LIST_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description List of organizations
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the organization was created (ISO 8601)
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier of the organization
       */
      id: string;
      /**
       * Modified At
       * @description Timestamp when the organization was last modified (ISO 8601)
       * @default null
       */
      modifiedAt: string | null;
      /**
       * Name
       * @description Name of the organization
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @description Pagination information for listing organizations.
   * @default null
   */
  paging: {
      /**
       * Next Cursor
       * @description Cursor to retrieve the next page of organizations
       * @default null
       */
      nextCursor: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIRO's MIRO_MIRO_CREATE_APP_CARD_ITEM tool input.
 */
type MIRO_MIRO_CREATE_APP_CARD_ITEM_INPUT = {
  /**
   * Board Id
   * @description ID of the board to add the app card to
   */
  board_id?: string;
  /**
   * Data
   * @description Payload data for the app card
   */
  data?: {
      /**
       * Description
       * @description Context description for the app card
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of custom preview fields
       * @default null
       */
      fields: {
          /**
           * Fill Color
           * @description Hex value for field background, e.g. '#FFFFFF'
           * @default null
           */
          fillColor: string | null;
          /**
           * Icon Shape
           * @description Shape of the icon on the preview field
           * @default round
           * @enum {string}
           */
          iconShape: "round" | "square";
          /**
           * Icon Url
           * Format: uri
           * @description HTTPS URL for the preview field icon
           * @default null
           */
          iconUrl: string | null;
          /**
           * Text Color
           * @description Hex value for the text color, e.g. '#000000'
           * @default null
           */
          textColor: string | null;
          /**
           * Tooltip
           * @description Tooltip text displayed on hover
           * @default null
           */
          tooltip: string | null;
          /**
           * Value
           * @description Data value of the custom field
           */
          value: string;
      }[] | null;
      /**
       * Status
       * @description Sync status of the app card with its source
       * @default disconnected
       * @enum {string}
       */
      status: "disconnected" | "connected" | "disabled";
      /**
       * Title
       * @description Short header identifying the app card
       * @default sample app card item
       */
      title: string | null;
  };
  /**
   * AppCardGeometry
   * @description Geometrical dimensions for an app card item.
   * @default null
   */
  geometry: {
      /**
       * Height
       * @description Height of the item in pixels
       * @default null
       */
      height: number | null;
      /**
       * Rotation
       * @description Rotation angle in degrees relative to the board
       * @default null
       */
      rotation: number | null;
      /**
       * Width
       * @description Width of the item in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * AppCardParent
   * @description Parent frame reference for nesting an app card item.
   * @default null
   */
  parent: {
      /**
       * Id
       * @description ID of the parent frame
       */
      id: number;
  } | null;
  /**
   * AppCardPosition
   * @description Board position for an app card item.
   * @default null
   */
  position: {
      /**
       * X
       * @description X-axis coordinate on the board
       * @default 0
       */
      x: number | null;
      /**
       * Y
       * @description Y-axis coordinate on the board
       * @default 0
       */
      y: number | null;
  } | null;
  /**
   * AppCardStyle
   * @description Styling options for an app card item.
   * @default null
   */
  style: {
      /**
       * Fill Color
       * @description Hex value of the border color
       * @default #2d9bf0
       */
      fillColor: string | null;
  } | null;
};

/**
 * Type of MIRO's MIRO_MIRO_CREATE_APP_CARD_ITEM tool output.
 */
type MIRO_MIRO_CREATE_APP_CARD_ITEM_OUTPUT = {
  /**
   * Created At
   * @description ISO timestamp when item was created
   */
  createdAt?: string;
  /**
   * Created By
   * @description User who created the item
   */
  createdBy?: {
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Type
       * @description Object type, always 'user'
       * @default user
       * @constant
       */
      type: "user";
  };
  /**
   * Data
   * @description Echoed app card data
   */
  data?: {
      /**
       * Description
       * @description Context description for the app card
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of custom preview fields
       * @default null
       */
      fields: {
          /**
           * Fill Color
           * @description Hex value for field background, e.g. '#FFFFFF'
           * @default null
           */
          fillColor: string | null;
          /**
           * Icon Shape
           * @description Shape of the icon on the preview field
           * @default round
           * @enum {string}
           */
          iconShape: "round" | "square";
          /**
           * Icon Url
           * Format: uri
           * @description HTTPS URL for the preview field icon
           * @default null
           */
          iconUrl: string | null;
          /**
           * Text Color
           * @description Hex value for the text color, e.g. '#000000'
           * @default null
           */
          textColor: string | null;
          /**
           * Tooltip
           * @description Tooltip text displayed on hover
           * @default null
           */
          tooltip: string | null;
          /**
           * Value
           * @description Data value of the custom field
           */
          value: string;
      }[] | null;
      /**
       * Status
       * @description Sync status of the app card with its source
       * @default disconnected
       * @enum {string}
       */
      status: "disconnected" | "connected" | "disabled";
      /**
       * Title
       * @description Short header identifying the app card
       * @default sample app card item
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
   * AppCardGeometry
   * @description Geometrical dimensions for an app card item.
   * @default null
   */
  geometry: {
      /**
       * Height
       * @description Height of the item in pixels
       * @default null
       */
      height: number | null;
      /**
       * Rotation
       * @description Rotation angle in degrees relative to the board
       * @default null
       */
      rotation: number | null;
      /**
       * Width
       * @description Width of the item in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Id
   * @description Unique identifier of the new app card item
   */
  id?: string;
  /**
   * Links
   * @description Relevant resource links
   */
  links?: {
      /**
       * Self
       * Format: uri
       * @description URL to fetch this app card item
       */
      self: string;
  };
  /**
   * Modified At
   * @description ISO timestamp when item was last modified
   */
  modifiedAt?: string;
  /**
   * Modified By
   * @description User who last modified the item
   */
  modifiedBy?: {
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Type
       * @description Object type, always 'user'
       * @default user
       * @constant
       */
      type: "user";
  };
  /**
   * AppCardParent
   * @description Parent frame reference for nesting an app card item.
   * @default null
   */
  parent: {
      /**
       * Id
       * @description ID of the parent frame
       */
      id: number;
  } | null;
  /**
   * Position
   * @description Echoed position info
   */
  position?: {
      /**
       * X
       * @description X-axis coordinate on the board
       * @default 0
       */
      x: number | null;
      /**
       * Y
       * @description Y-axis coordinate on the board
       * @default 0
       */
      y: number | null;
  };
  /**
   * Style
   * @description Echoed style info
   */
  style?: {
      /**
       * Fill Color
       * @description Hex value of the border color
       * @default #2d9bf0
       */
      fillColor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIRO's MIRO_UPDATE_APP_CARD_ITEM tool input.
 */
type MIRO_UPDATE_APP_CARD_ITEM_INPUT = {
  /**
   * Board Id
   * @description ID of the board containing the app card item
   */
  board_id?: string;
  /**
   * AppCardData
   * @description Core data for an app card item.
   * @default null
   */
  data: {
      /**
       * Description
       * @description Context description for the app card
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of custom preview fields
       * @default null
       */
      fields: {
          /**
           * Fill Color
           * @description Hex value for field background, e.g. '#FFFFFF'
           * @default null
           */
          fillColor: string | null;
          /**
           * Icon Shape
           * @description Shape of the icon on the preview field
           * @default round
           * @enum {string}
           */
          iconShape: "round" | "square";
          /**
           * Icon Url
           * Format: uri
           * @description HTTPS URL for the preview field icon
           * @default null
           */
          iconUrl: string | null;
          /**
           * Text Color
           * @description Hex value for the text color, e.g. '#000000'
           * @default null
           */
          textColor: string | null;
          /**
           * Tooltip
           * @description Tooltip text displayed on hover
           * @default null
           */
          tooltip: string | null;
          /**
           * Value
           * @description Data value of the custom field
           */
          value: string;
      }[] | null;
      /**
       * Status
       * @description Sync status of the app card with its source
       * @default disconnected
       * @enum {string}
       */
      status: "disconnected" | "connected" | "disabled";
      /**
       * Title
       * @description Short header identifying the app card
       * @default sample app card item
       */
      title: string | null;
  } | null;
  /**
   * AppCardGeometry
   * @description Geometrical dimensions for an app card item.
   * @default null
   */
  geometry: {
      /**
       * Height
       * @description Height of the item in pixels
       * @default null
       */
      height: number | null;
      /**
       * Rotation
       * @description Rotation angle in degrees relative to the board
       * @default null
       */
      rotation: number | null;
      /**
       * Width
       * @description Width of the item in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Item Id
   * @description ID of the app card item to update
   */
  item_id?: string;
  /**
   * AppCardParent
   * @description Parent frame reference for nesting an app card item.
   * @default null
   */
  parent: {
      /**
       * Id
       * @description ID of the parent frame
       */
      id: number;
  } | null;
  /**
   * AppCardPosition
   * @description Board position for an app card item.
   * @default null
   */
  position: {
      /**
       * X
       * @description X-axis coordinate on the board
       * @default 0
       */
      x: number | null;
      /**
       * Y
       * @description Y-axis coordinate on the board
       * @default 0
       */
      y: number | null;
  } | null;
  /**
   * AppCardStyle
   * @description Styling options for an app card item.
   * @default null
   */
  style: {
      /**
       * Fill Color
       * @description Hex value of the border color
       * @default #2d9bf0
       */
      fillColor: string | null;
  } | null;
};

/**
 * Type of MIRO's MIRO_UPDATE_APP_CARD_ITEM tool output.
 */
type MIRO_UPDATE_APP_CARD_ITEM_OUTPUT = {
  /**
   * Created At
   * @description ISO timestamp when the app card item was created
   */
  createdAt?: string;
  /**
   * Created By
   * @description User who created the app card item
   */
  createdBy?: {
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Type
       * @description Object type, always 'user'
       * @default user
       * @constant
       */
      type: "user";
  };
  /**
   * Data
   * @description App card data after update
   */
  data?: {
      /**
       * Description
       * @description Context description for the app card
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of custom preview fields
       * @default null
       */
      fields: {
          /**
           * Fill Color
           * @description Hex value for field background, e.g. '#FFFFFF'
           * @default null
           */
          fillColor: string | null;
          /**
           * Icon Shape
           * @description Shape of the icon on the preview field
           * @default round
           * @enum {string}
           */
          iconShape: "round" | "square";
          /**
           * Icon Url
           * Format: uri
           * @description HTTPS URL for the preview field icon
           * @default null
           */
          iconUrl: string | null;
          /**
           * Text Color
           * @description Hex value for the text color, e.g. '#000000'
           * @default null
           */
          textColor: string | null;
          /**
           * Tooltip
           * @description Tooltip text displayed on hover
           * @default null
           */
          tooltip: string | null;
          /**
           * Value
           * @description Data value of the custom field
           */
          value: string;
      }[] | null;
      /**
       * Status
       * @description Sync status of the app card with its source
       * @default disconnected
       * @enum {string}
       */
      status: "disconnected" | "connected" | "disabled";
      /**
       * Title
       * @description Short header identifying the app card
       * @default sample app card item
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
   * AppCardGeometry
   * @description Geometrical dimensions for an app card item.
   * @default null
   */
  geometry: {
      /**
       * Height
       * @description Height of the item in pixels
       * @default null
       */
      height: number | null;
      /**
       * Rotation
       * @description Rotation angle in degrees relative to the board
       * @default null
       */
      rotation: number | null;
      /**
       * Width
       * @description Width of the item in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Id
   * @description Unique identifier of the app card item
   */
  id?: string;
  /**
   * Links
   * @description Links related to the app card item
   */
  links?: {
      /**
       * Self
       * Format: uri
       * @description URL to fetch this app card item
       */
      self: string;
  };
  /**
   * Modified At
   * @description ISO timestamp when the app card item was last modified
   */
  modifiedAt?: string;
  /**
   * Modified By
   * @description User who last modified the app card item
   */
  modifiedBy?: {
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Type
       * @description Object type, always 'user'
       * @default user
       * @constant
       */
      type: "user";
  };
  /**
   * AppCardParent
   * @description Parent frame reference for nesting an app card item.
   * @default null
   */
  parent: {
      /**
       * Id
       * @description ID of the parent frame
       */
      id: number;
  } | null;
  /**
   * Position
   * @description Position info after update
   */
  position?: {
      /**
       * X
       * @description X-axis coordinate on the board
       * @default 0
       */
      x: number | null;
      /**
       * Y
       * @description Y-axis coordinate on the board
       * @default 0
       */
      y: number | null;
  };
  /**
   * Style
   * @description Styling info after update
   */
  style?: {
      /**
       * Fill Color
       * @description Hex value of the border color
       * @default #2d9bf0
       */
      fillColor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIRO's MIRO_UPDATE_BOARD tool input.
 */
type MIRO_UPDATE_BOARD_INPUT = {
  /**
   * Board Id
   * @description Unique identifier (ID) of the board to update
   */
  board_id?: string;
  /**
   * Description
   * @description New description for the board (up to 300 characters)
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description New name for the board (1-60 characters)
   * @default null
   */
  name: string | null;
  /**
   * PolicyRequest
   * @description Defines permissions and sharing policies for the board
   * @default null
   */
  policy: {
      /**
       * PermissionsPolicyRequest
       * @description Permissions policy settings for the board.
       * @default null
       */
      permissionsPolicy: {
          /**
           * Collaboration Tools Start Access
           * @description Access level for collaboration tools start (e.g., who can start new collaboration tools).
           * @default null
           */
          collaborationToolsStartAccess: string | null;
          /**
           * Copy Access
           * @description Who can copy the board.
           * @default null
           */
          copyAccess: string | null;
          /**
           * Sharing Access
           * @description Who can share the board.
           * @default null
           */
          sharingAccess: string | null;
      } | null;
      /**
       * SharingPolicyRequest
       * @description Sharing policy settings for the board.
       * @default null
       */
      sharingPolicy: {
          /**
           * Access
           * @description Board access level (e.g., public, team, organization).
           * @default null
           */
          access: string | null;
          /**
           * Invite To Account And Board Link Access
           * @description Access level for invite links to account and board.
           * @default null
           */
          inviteToAccountAndBoardLinkAccess: string | null;
          /**
           * Organization Access
           * @description Organization-wide access level for the board.
           * @default null
           */
          organizationAccess: string | null;
          /**
           * Team Access
           * @description Team-wide access level for the board.
           * @default null
           */
          teamAccess: string | null;
      } | null;
  } | null;
  /**
   * Project Id
   * @description ID of the project (space) to which the board should be added
   * @default null
   */
  projectId: string | null;
  /**
   * Team Id
   * @description ID of the team where the board should be placed
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of MIRO's MIRO_UPDATE_BOARD tool output.
 */
type MIRO_UPDATE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the board was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description User who created the board.
       */
      createdBy: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * Current User Membership
       * @description Current user's membership details for the board.
       */
      currentUserMembership: {
          /**
           * Id
           * @description Unique identifier (ID) of the board member.
           */
          id: string;
          /**
           * Name
           * @description Name of the board member.
           */
          name: string;
          /**
           * Role
           * @description Role of the board member (viewer, commenter, editor, coowner, owner).
           */
          role: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'board_member'.
           */
          type: string;
      };
      /**
       * Description
       * @description Description of the board.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier (ID) of the board.
       */
      id: string;
      /**
       * Links
       * @description Related links for the board.
       */
      links: {
          /**
           * Related
           * @description Link to obtain information about board members.
           * @default null
           */
          related: string | null;
          /**
           * Self
           * @description Link to obtain information about the current board.
           */
          self: string;
      };
      /**
       * Modified At
       * Format: date-time
       * @description Timestamp when the board was last modified.
       */
      modifiedAt: string;
      /**
       * Modified By
       * @description User who last modified the board.
       */
      modifiedBy: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * Name
       * @description Name of the board.
       */
      name: string;
      /**
       * Owner
       * @description User who owns the board.
       */
      owner: {
          /**
           * Id
           * @description Unique identifier (ID) of the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Type
           * @description Type of the object returned, e.g., 'user'.
           */
          type: string;
      };
      /**
       * PictureResponse
       * @description Cover picture of the board.
       * @default null
       */
      picture: {
          /**
           * Id
           * @description Unique identifier (ID) of the cover picture for the board.
           */
          id: number;
          /**
           * Image Url
           * @description URL of the cover picture of the board.
           */
          imageURL: string;
      } | null;
      /**
       * Policy
       * @description Permissions and sharing policy of the board.
       */
      policy: {
          /**
           * PermissionsPolicyResponse
           * @description Permissions policy for the board.
           * @default null
           */
          permissionsPolicy: {
              /**
               * Collaboration Tools Start Access
               * @description Access level for collaboration tools start.
               * @default null
               */
              collaborationToolsStartAccess: string | null;
              /**
               * Copy Access
               * @description Who can copy the board.
               * @default null
               */
              copyAccess: string | null;
              /**
               * Sharing Access
               * @description Who can share the board.
               * @default null
               */
              sharingAccess: string | null;
          } | null;
          /**
           * SharingPolicyResponse
           * @description Sharing policy for the board.
           * @default null
           */
          sharingPolicy: {
              /**
               * Access
               * @description Board access level (public, team, or organization).
               * @default null
               */
              access: string | null;
              /**
               * Invite To Account And Board Link Access
               * @description Access level for invite links.
               * @default null
               */
              inviteToAccountAndBoardLinkAccess: string | null;
              /**
               * Organization Access
               * @description Organization-wide access level.
               * @default null
               */
              organizationAccess: string | null;
              /**
               * Team Access
               * @description Team-wide access level.
               * @default null
               */
              teamAccess: string | null;
          } | null;
          /**
           * View Link
           * @description URL to view the board.
           * @default null
           */
          viewLink: string | null;
      };
      /**
       * ProjectResponse
       * @description Project (space) associated with the board.
       * @default null
       */
      project: {
          /**
           * Id
           * @description Unique identifier (ID) of the project (space).
           */
          id: string;
      } | null;
      /**
       * Team
       * @description Team associated with the board.
       */
      team: {
          /**
           * Id
           * @description Unique identifier (ID) of the team.
           */
          id: string;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
      };
      /**
       * Type
       * @description Type of the object returned, e.g., 'board'.
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
 * Type map of all available tool input types for toolkit "MIRO".
 */
export type MIRO_TOOL_INPUTS = {
  CREATE_BOARD: MIRO_CREATE_BOARD_INPUT
  DELETE_APP_CARD_ITEM: MIRO_DELETE_APP_CARD_ITEM_INPUT
  DELETE_DOCUMENT_ITEM: MIRO_DELETE_DOCUMENT_ITEM_INPUT
  DELETE_ITEM: MIRO_DELETE_ITEM_INPUT
  GET_APP_CARD_ITEM: MIRO_GET_APP_CARD_ITEM_INPUT
  GET_BOARD: MIRO_GET_BOARD_INPUT
  GET_BOARDS: MIRO_GET_BOARDS_INPUT
  GET_BOARD_MEMBERS: MIRO_GET_BOARD_MEMBERS_INPUT
  GET_CONNECTORS: MIRO_GET_CONNECTORS_INPUT
  GET_TAG: MIRO_GET_TAG_INPUT
  LIST_ORGANIZATIONS: MIRO_LIST_ORGANIZATIONS_INPUT
  MIRO_CREATE_APP_CARD_ITEM: MIRO_MIRO_CREATE_APP_CARD_ITEM_INPUT
  UPDATE_APP_CARD_ITEM: MIRO_UPDATE_APP_CARD_ITEM_INPUT
  UPDATE_BOARD: MIRO_UPDATE_BOARD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MIRO".
 */
export type MIRO_TOOL_OUTPUTS = {
  CREATE_BOARD: MIRO_CREATE_BOARD_OUTPUT
  DELETE_APP_CARD_ITEM: MIRO_DELETE_APP_CARD_ITEM_OUTPUT
  DELETE_DOCUMENT_ITEM: MIRO_DELETE_DOCUMENT_ITEM_OUTPUT
  DELETE_ITEM: MIRO_DELETE_ITEM_OUTPUT
  GET_APP_CARD_ITEM: MIRO_GET_APP_CARD_ITEM_OUTPUT
  GET_BOARD: MIRO_GET_BOARD_OUTPUT
  GET_BOARDS: MIRO_GET_BOARDS_OUTPUT
  GET_BOARD_MEMBERS: MIRO_GET_BOARD_MEMBERS_OUTPUT
  GET_CONNECTORS: MIRO_GET_CONNECTORS_OUTPUT
  GET_TAG: MIRO_GET_TAG_OUTPUT
  LIST_ORGANIZATIONS: MIRO_LIST_ORGANIZATIONS_OUTPUT
  MIRO_CREATE_APP_CARD_ITEM: MIRO_MIRO_CREATE_APP_CARD_ITEM_OUTPUT
  UPDATE_APP_CARD_ITEM: MIRO_UPDATE_APP_CARD_ITEM_OUTPUT
  UPDATE_BOARD: MIRO_UPDATE_BOARD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MIRO toolkit.
 */
export const MIRO = {
  slug: "miro",
  tools: {
    /**
     * Tool to create a new board. use when you need to set up a board with a specific name, description, and policies. example: "create a new board named project plan".
     */
    CREATE_BOARD: "MIRO_CREATE_BOARD",
    /**
     * Tool to delete an app card item from a board. use when you need to remove an app card item created by your app after it is no longer needed.
     */
    DELETE_APP_CARD_ITEM: "MIRO_DELETE_APP_CARD_ITEM",
    /**
     * Tool to delete a document item from a board. use when you need to remove a document item (e.g., pdf or image) that is no longer relevant. example: "delete the document item with id 'item456' from board 'board123'."
     */
    DELETE_DOCUMENT_ITEM: "MIRO_DELETE_DOCUMENT_ITEM",
    /**
     * Tool to delete a specific item from a board. use when you need to remove an item (e.g., shape, sticky note) after confirming its board and item ids.
     */
    DELETE_ITEM: "MIRO_DELETE_ITEM",
    /**
     * Tool to retrieve a specific app card item by its id. use when you need the details of an existing app card item.
     */
    GET_APP_CARD_ITEM: "MIRO_GET_APP_CARD_ITEM",
    /**
     * Tool to retrieve details of a specific board. use when you have a board id and need to fetch its metadata.
     */
    GET_BOARD: "MIRO_GET_BOARD",
    /**
     * Tool to retrieve accessible boards with optional filters. use when you need to list or search boards by team, project, owner, or keywords.
     */
    GET_BOARDS: "MIRO_GET_BOARDS",
    /**
     * Tool to retrieve a list of members for a board. use when you need to list all users with access to a board after confirming its id.
     */
    GET_BOARD_MEMBERS: "MIRO_GET_BOARD_MEMBERS",
    /**
     * Tool to retrieve a list of connectors on a board. use after confirming the board id and when you need to page through connector items.
     */
    GET_CONNECTORS: "MIRO_GET_CONNECTORS",
    /**
     * Tool to retrieve details of a specific tag on a board. use when you have a board id and tag id and need its metadata.
     */
    GET_TAG: "MIRO_GET_TAG",
    /**
     * Tool to retrieve list of organizations accessible to the user. use when you need to view all available organizations.
     */
    LIST_ORGANIZATIONS: "MIRO_LIST_ORGANIZATIONS",
    /**
     * Tool to add an app card item to a board. use when you need to push a rich preview card with custom fields into a miro board (e.g., after assembling card data).
     */
    MIRO_CREATE_APP_CARD_ITEM: "MIRO_MIRO_CREATE_APP_CARD_ITEM",
    /**
     * Tool to update an app card item on a board. use when you need to modify properties of an existing app card item. include only fields to change.
     */
    UPDATE_APP_CARD_ITEM: "MIRO_UPDATE_APP_CARD_ITEM",
    /**
     * Tool to update properties of a specific board. use when you have a board id and need to modify its name, description, or permissions policy. use after confirming the board exists.
     */
    UPDATE_BOARD: "MIRO_UPDATE_BOARD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MIRO".
 */
export type MIRO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MIRO".
 */
export type MIRO_TRIGGER_EVENTS = {}
