// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EXCEL's EXCEL_ADD_CHART tool input.
 */
type EXCEL_ADD_CHART_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Seriesby
   * @description How the series are by (e.g., 'Auto').
   */
  seriesby?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Sourcedata
   * @description The range of source data for the chart (e.g., 'A1:C4').
   */
  sourcedata?: string;
  /**
   * Type
   * @description The type of chart to add (e.g., 'ColumnClustered').
   */
  type?: string;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_ADD_CHART tool output.
 */
type EXCEL_ADD_CHART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Height
       * @description The chart height.
       */
      height: number;
      /**
       * Id
       * @description The chart ID.
       */
      id: string;
      /**
       * Left
       * @description The chart left position.
       */
      left: number;
      /**
       * Name
       * @description The chart name.
       */
      name: string;
      /**
       * Top
       * @description The chart top position.
       */
      top: number;
      /**
       * Width
       * @description The chart width.
       */
      width: number;
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
 * Type of EXCEL's EXCEL_ADD_SHAREPOINT_WORKSHEET tool input.
 */
type EXCEL_ADD_SHAREPOINT_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to add a worksheet to.
   */
  item_id?: string;
  /**
   * Name
   * @description The name of the new worksheet to add.
   */
  name?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Site Id
   * @description The ID of the SharePoint site containing the Excel file.
   */
  site_id?: string;
};

/**
 * Type of EXCEL's EXCEL_ADD_SHAREPOINT_WORKSHEET tool output.
 */
type EXCEL_ADD_SHAREPOINT_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The worksheet ID.
       */
      id: string;
      /**
       * Name
       * @description The worksheet name.
       */
      name: string;
      /**
       * Position
       * @description The position of the worksheet in the workbook.
       */
      position: number;
      /**
       * Visibility
       * @description The visibility of the worksheet.
       */
      visibility: string;
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
 * Type of EXCEL's EXCEL_ADD_TABLE tool input.
 */
type EXCEL_ADD_TABLE_INPUT = {
  /**
   * Has Headers
   * @description Whether the table has headers.
   */
  hasHeaders?: boolean;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Name
   * @description The name of the new table.
   */
  name?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Show Totals
   * @description Whether the table shows totals.
   */
  showTotals?: boolean;
  /**
   * Style
   * @description The style of the table.
   */
  style?: string;
  /**
   * Table Id
   * @description The ID of the table to add to.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_ADD_TABLE tool output.
 */
type EXCEL_ADD_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The table ID.
       */
      id: string;
      /**
       * Name
       * @description The table name.
       */
      name: string;
      /**
       * Show Headers
       * @description Whether the table shows headers.
       */
      showHeaders: boolean;
      /**
       * Show Totals
       * @description Whether the table shows totals.
       */
      showTotals: boolean;
      /**
       * Style
       * @description The table style.
       */
      style: string;
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
 * Type of EXCEL's EXCEL_ADD_TABLE_COLUMN tool input.
 */
type EXCEL_ADD_TABLE_COLUMN_INPUT = {
  /**
   * Index
   * @description The index at which to insert the column.
   */
  index?: number;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to add a column to.
   */
  table_id?: string;
  /**
   * Values
   * @description The values for the new column.
   */
  values?: unknown[][];
};

/**
 * Type of EXCEL's EXCEL_ADD_TABLE_COLUMN tool output.
 */
type EXCEL_ADD_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The column ID.
       */
      id: string;
      /**
       * Index
       * @description The column index.
       */
      index: number;
      /**
       * Name
       * @description The column name.
       */
      name: string;
      /**
       * Values
       * @description The values in the column.
       */
      values: unknown[][];
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
 * Type of EXCEL's EXCEL_ADD_TABLE_ROW tool input.
 */
type EXCEL_ADD_TABLE_ROW_INPUT = {
  /**
   * Index
   * @description The index at which to insert the row. Null to append.
   * @default null
   */
  index: number | null;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to add a row to.
   */
  table_id?: string;
  /**
   * Values
   * @description The values for the new row.
   */
  values?: unknown[][];
};

/**
 * Type of EXCEL's EXCEL_ADD_TABLE_ROW tool output.
 */
type EXCEL_ADD_TABLE_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Index
       * @description The row index.
       */
      index: number;
      /**
       * Values
       * @description The values in the row.
       */
      values: unknown[][];
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
 * Type of EXCEL's EXCEL_ADD_WORKBOOK_PERMISSION tool input.
 */
type EXCEL_ADD_WORKBOOK_PERMISSION_INPUT = {
  /**
   * Expiration Date Time
   * Format: date-time
   * @description DateTime when the granted permission will expire (ISO 8601).
   * @default null
   */
  expirationDateTime: string | null;
  /**
   * Item Id
   * @description The ID of the drive item (Excel file) to share.
   */
  item_id?: string;
  /**
   * Message
   * @description Plain-text message included in the invitation (max 2000 characters).
   * @default null
   */
  message: string | null;
  /**
   * Password
   * @description Password for the invite (OneDrive Personal only).
   * @default null
   */
  password: string | null;
  /**
   * Recipients
   * @description Collection of recipients to grant access and send the invitation.
   */
  recipients?: {
      /**
       * Alias
       * @description A display alias for the recipient.
       * @default null
       */
      alias: string | null;
      /**
       * Email
       * @description Email address of the recipient.
       */
      email: string;
      /**
       * Object Id
       * @description Azure AD object ID of an existing user or group.
       * @default null
       */
      objectId: string | null;
  }[];
  /**
   * Require Sign In
   * @description If true, recipients must sign in to view the shared item.
   * @default null
   */
  requireSignIn: boolean | null;
  /**
   * Retain Inherited Permissions
   * @description If true, existing inherited permissions remain; if false, existing permissions are removed on first share.
   * @default true
   */
  retainInheritedPermissions: boolean | null;
  /**
   * Roles
   * @description Roles to grant: read or write.
   */
  roles?: string[];
  /**
   * Send Invitation
   * @description If true, sends an email invitation; otherwise grants permission silently.
   * @default true
   */
  sendInvitation: boolean | null;
};

/**
 * Type of EXCEL's EXCEL_ADD_WORKBOOK_PERMISSION tool output.
 */
type EXCEL_ADD_WORKBOOK_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description Collection of permission objects granted.
       */
      value: {
          /**
           * Expiration Date Time
           * @description Date and time when the permission expires.
           * @default null
           */
          expirationDateTime: string | null;
          /**
           * IdentitySet
           * @description The user or group to whom the permission is granted.
           * @default null
           */
          grantedTo: {
              /**
               * IdentityUser
               * @description The user identity.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description Display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description Unique ID of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique ID of the permission.
           */
          id: string;
          /**
           * SharingInvitation
           * @description Details of the sharing invitation.
           * @default null
           */
          invitation: {
              /**
               * Email
               * @description Email of the invited recipient.
               * @default null
               */
              email: string | null;
              /**
               * Invite Redirect Url
               * @description URL for the recipient to redeem the invitation.
               * @default null
               */
              inviteRedirectUrl: string | null;
              /**
               * IdentitySet
               * @description Identity of the user who sent the invitation.
               * @default null
               */
              invitedBy: {
                  /**
                   * IdentityUser
                   * @description The user identity.
                   * @default null
                   */
                  user: {
                      /**
                       * Display Name
                       * @description Display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description Unique ID of the identity.
                       * @default null
                       */
                      id: string | null;
                  } | null;
              } | null;
              /**
               * Sign In Required
               * @description Whether sign-in is required to redeem the invitation.
               * @default null
               */
              signInRequired: boolean | null;
          } | null;
          /**
           * SharingLink
           * @description Details of the sharing link.
           * @default null
           */
          link: {
              /**
               * Scope
               * @description Scope of the shared link (e.g., view, edit).
               * @default null
               */
              scope: string | null;
              /**
               * Web Url
               * @description URL of the shared link.
               * @default null
               */
              webUrl: string | null;
          } | null;
          /**
           * Roles
           * @description Roles granted by the permission.
           */
          roles: string[];
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
 * Type of EXCEL's EXCEL_ADD_WORKSHEET tool input.
 */
type EXCEL_ADD_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to add a worksheet to.
   */
  item_id?: string;
  /**
   * Name
   * @description The name of the new worksheet to add.
   */
  name?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
};

/**
 * Type of EXCEL's EXCEL_ADD_WORKSHEET tool output.
 */
type EXCEL_ADD_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The worksheet ID.
       */
      id: string;
      /**
       * Name
       * @description The worksheet name.
       */
      name: string;
      /**
       * Position
       * @description The position of the worksheet in the workbook.
       */
      position: number;
      /**
       * Visibility
       * @description The visibility of the worksheet.
       */
      visibility: string;
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
 * Type of EXCEL's EXCEL_APPLY_TABLE_FILTER tool input.
 */
type EXCEL_APPLY_TABLE_FILTER_INPUT = {
  /**
   * Column Id
   * @description The ID of the column to filter.
   */
  column_id?: string;
  /**
   * Criteria
   * @description The filter criteria as a dictionary.
   */
  criteria?: {
      [key: string]: unknown;
  };
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table.
   */
  table_id?: string;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_APPLY_TABLE_FILTER tool output.
 */
type EXCEL_APPLY_TABLE_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the filter was applied successfully.
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
 * Type of EXCEL's EXCEL_APPLY_TABLE_SORT tool input.
 */
type EXCEL_APPLY_TABLE_SORT_INPUT = {
  /**
   * Fields
   * @description List of sort fields (e.g., [{ 'key': 0, 'ascending': true }]).
   */
  fields?: {
      [key: string]: unknown;
  }[];
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to sort.
   */
  table_id?: string;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_APPLY_TABLE_SORT tool output.
 */
type EXCEL_APPLY_TABLE_SORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the sort was applied successfully.
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
 * Type of EXCEL's EXCEL_CLEAR_RANGE tool input.
 */
type EXCEL_CLEAR_RANGE_INPUT = {
  /**
   * Address
   * @description The A1-style address of the range to clear (e.g., 'A1:B2').
   */
  address?: string;
  /**
   * Apply To
   * @description Optional. The type of clear action. Possible values: All, Formats, Contents.
   * @default null
   * @enum {string|null}
   */
  applyTo: "All" | "Formats" | "Contents" | null;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional. The workbook session ID for persistent changes.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet Id
   * @description The name or ID of the worksheet (URL-encoded if necessary).
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_CLEAR_RANGE tool output.
 */
type EXCEL_CLEAR_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the range was cleared successfully.
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
 * Type of EXCEL's EXCEL_CLEAR_TABLE_FILTER tool input.
 */
type EXCEL_CLEAR_TABLE_FILTER_INPUT = {
  /**
   * Column Id
   * @description The ID of the column to clear filter from.
   */
  column_id?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table.
   */
  table_id?: string;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_CLEAR_TABLE_FILTER tool output.
 */
type EXCEL_CLEAR_TABLE_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the filter was cleared successfully.
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
 * Type of EXCEL's EXCEL_CLOSE_SESSION tool input.
 */
type EXCEL_CLOSE_SESSION_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to close the session for.
   */
  item_id?: string;
  /**
   * Session Id
   * @description The workbook session ID to close.
   */
  session_id?: string;
};

/**
 * Type of EXCEL's EXCEL_CLOSE_SESSION tool output.
 */
type EXCEL_CLOSE_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the session was closed successfully.
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
 * Type of EXCEL's EXCEL_CONVERT_TABLE_TO_RANGE tool input.
 */
type EXCEL_CONVERT_TABLE_TO_RANGE_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to convert to a range.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_CONVERT_TABLE_TO_RANGE tool output.
 */
type EXCEL_CONVERT_TABLE_TO_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the table was converted to a range successfully.
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
 * Type of EXCEL's EXCEL_CREATE_WORKBOOK tool input.
 */
type EXCEL_CREATE_WORKBOOK_INPUT = {
  /**
   * Content
   * Format: binary
   * @description Binary contents of the .xlsx file to upload.
   */
  content?: string;
  /**
   * Drive Id
   * @description ID of the drive (use 'me' for the user's default drive)
   * @default me
   */
  drive_id: string;
  /**
   * Path
   * @description Path including folder structure and file name, ending with .xlsx, e.g., 'Documents/newWorkbook.xlsx'
   */
  path?: string;
};

/**
 * Type of EXCEL's EXCEL_CREATE_WORKBOOK tool output.
 */
type EXCEL_CREATE_WORKBOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Date Time
       * @description Date and time when the file was created.
       */
      createdDateTime: string;
      /**
       * File
       * @description File facet containing mime type and hashes.
       */
      file: {
          /**
           * Hashes
           * @description Hashes of the file content.
           */
          hashes: {
              /**
               * Quick Xor Hash
               * @description Quick XOR hash of the file content.
               */
              quickXorHash: string;
          };
          /**
           * Mime Type
           * @description MIME type of the file.
           */
          mimeType: string;
      };
      /**
       * Id
       * @description Unique ID of the created file.
       */
      id: string;
      /**
       * Last Modified Date Time
       * @description Date and time when the file was last modified.
       */
      lastModifiedDateTime: string;
      /**
       * Name
       * @description Name of the created file.
       */
      name: string;
      /**
       * Size
       * @description Size of the created file in bytes.
       */
      size: number;
      /**
       * Web Url
       * @description Public URL to access the file via web.
       */
      webUrl: string;
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
 * Type of EXCEL's EXCEL_DELETE_TABLE_COLUMN tool input.
 */
type EXCEL_DELETE_TABLE_COLUMN_INPUT = {
  /**
   * Column Id
   * @description The ID of the column to delete.
   */
  column_id?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to delete a column from.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_DELETE_TABLE_COLUMN tool output.
 */
type EXCEL_DELETE_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the column was deleted successfully.
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
 * Type of EXCEL's EXCEL_DELETE_TABLE_ROW tool input.
 */
type EXCEL_DELETE_TABLE_ROW_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Row Index
   * @description The index of the row to delete.
   */
  row_index?: number;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to delete a row from.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_DELETE_TABLE_ROW tool output.
 */
type EXCEL_DELETE_TABLE_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the row was deleted successfully.
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
 * Type of EXCEL's EXCEL_DELETE_WORKSHEET tool input.
 */
type EXCEL_DELETE_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet to delete. If using ID, it must be URL-encoded.
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_DELETE_WORKSHEET tool output.
 */
type EXCEL_DELETE_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the worksheet was deleted successfully.
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
 * Type of EXCEL's EXCEL_GET_CHART_AXIS tool input.
 */
type EXCEL_GET_CHART_AXIS_INPUT = {
  /**
   * Axis Type
   * @description The type of axis to retrieve. Allowed values: 'valueAxis', 'seriesAxis', 'categoryAxis'.
   * @enum {string}
   */
  axis_type?: "valueAxis" | "seriesAxis" | "categoryAxis";
  /**
   * Chart Name
   * @description The name or ID of the chart (must be URL-encoded).
   */
  chart_name?: string;
  /**
   * Expand
   * @description OData $expand query option to expand related entities (format).
   * @default null
   */
  expand: string | null;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the workbook.
   */
  item_id?: string;
  /**
   * Select
   * @description OData $select query option to specify which properties to return.
   * @default null
   */
  select: string | null;
  /**
   * Session Id
   * @description Optional workbook session ID. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_CHART_AXIS tool output.
 */
type EXCEL_GET_CHART_AXIS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description Formatting of the axis (font, fill).
       * @default null
       */
      format: {
          [key: string]: unknown;
      } | null;
      /**
       * Major Tick Mark
       * @description Type of the major tick mark on the axis.
       */
      majorTickMark: string;
      /**
       * Major Unit
       * @description Interval between major tick marks on the axis.
       */
      majorUnit: {
          [key: string]: unknown;
      };
      /**
       * Maximum
       * @description The maximum value of the axis.
       */
      maximum: {
          [key: string]: unknown;
      };
      /**
       * Minimum
       * @description The minimum value of the axis.
       */
      minimum: {
          [key: string]: unknown;
      };
      /**
       * Minor Tick Mark
       * @description Type of the minor tick mark on the axis.
       */
      minorTickMark: string;
      /**
       * Minor Unit
       * @description Interval between minor tick marks on the axis.
       */
      minorUnit: {
          [key: string]: unknown;
      };
      /**
       * Tick Label Position
       * @description Position of the tick labels on the axis.
       */
      tickLabelPosition: string;
      /**
       * Visible
       * @description Indicates whether the axis is visible.
       */
      visible: boolean;
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
 * Type of EXCEL's EXCEL_GET_CHART_DATA_LABELS tool input.
 */
type EXCEL_GET_CHART_DATA_LABELS_INPUT = {
  /**
   * Chart Id
   * @description The ID or name of the chart (must be URL-encoded if using special characters).
   */
  chart_id?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the workbook.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional workbook session ID. If provided, will be sent in the headers to maintain session state.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet Id
   * @description The ID or name of the worksheet (must be URL-encoded if using special characters).
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_CHART_DATA_LABELS tool output.
 */
type EXCEL_GET_CHART_DATA_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description Formatting properties for data labels, including fill and font settings.
       */
      format: {
          /**
           * Fill
           * @description Fill formatting of the data label.
           */
          fill: {
              /**
               * Color
               * @description HTML color code representing the fill color.
               */
              color: string;
          };
          /**
           * Font
           * @description Font formatting of the data label.
           */
          font: {
              /**
               * Bold
               * @description True if the font is bold.
               * @default null
               */
              bold: boolean | null;
              /**
               * Color
               * @description HTML color code for the font.
               * @default null
               */
              color: string | null;
              /**
               * Italic
               * @description True if the font is italic.
               * @default null
               */
              italic: boolean | null;
              /**
               * Name
               * @description Font name.
               * @default null
               */
              name: string | null;
              /**
               * Size
               * @description Font size.
               * @default null
               */
              size: number | null;
              /**
               * Strikethrough
               * @description True if the font has a strikethrough.
               * @default null
               */
              strikethrough: boolean | null;
              /**
               * Underline
               * @description Underline style for the font.
               * @default null
               */
              underline: string | null;
          };
      };
      /**
       * Position
       * @description Specifies the position of data labels on the chart.
       */
      position: string;
      /**
       * Separator
       * @description Delimiter used between multiple label elements.
       */
      separator: string;
      /**
       * Show Bubble Size
       * @description True if bubble sizes are displayed on bubble chart data labels.
       */
      showBubbleSize: boolean;
      /**
       * Show Category Name
       * @description True if category names are displayed in the data labels.
       */
      showCategoryName: boolean;
      /**
       * Show Legend Key
       * @description True if legend keys are displayed in the data labels.
       */
      showLegendKey: boolean;
      /**
       * Show Percentage
       * @description True if percentage values are displayed in the data labels.
       */
      showPercentage: boolean;
      /**
       * Show Series Name
       * @description True if series names are displayed in the data labels.
       */
      showSeriesName: boolean;
      /**
       * Show Value
       * @description True if values are displayed in the data labels.
       */
      showValue: boolean;
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
 * Type of EXCEL's EXCEL_GET_CHART_LEGEND tool input.
 */
type EXCEL_GET_CHART_LEGEND_INPUT = {
  /**
   * Chart Name
   * @description The name or ID of the chart (URL-encoded if necessary).
   */
  chart_name?: string;
  /**
   * Expand
   * @description OData $expand query option to expand related entities, such as format.
   * @default null
   */
  expand: string | null;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the workbook.
   */
  item_id?: string;
  /**
   * Select
   * @description OData $select query option to specify which properties to return (comma-separated).
   * @default null
   */
  select: string | null;
  /**
   * Session Id
   * @description Optional workbook session ID. If provided, will be sent in the headers to maintain session state.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet Id
   * @description The ID or name of the worksheet (URL-encoded if necessary).
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_CHART_LEGEND tool output.
 */
type EXCEL_GET_CHART_LEGEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description Formatting properties for the chart legend, including font and fill.
       */
      format: {
          /**
           * Fill
           * @description Fill formatting of the chart legend.
           */
          fill: {
              /**
               * Color
               * @description HTML color code representing the fill color of the legend.
               */
              color: string;
          };
          /**
           * Font
           * @description Font formatting of the chart legend.
           */
          font: {
              /**
               * Bold
               * @description True if the legend text is bold.
               * @default null
               */
              bold: boolean | null;
              /**
               * Color
               * @description HTML color code for the legend text font.
               * @default null
               */
              color: string | null;
              /**
               * Italic
               * @description True if the legend text is italic.
               * @default null
               */
              italic: boolean | null;
              /**
               * Name
               * @description Font name of the legend text.
               * @default null
               */
              name: string | null;
              /**
               * Size
               * @description Font size of the legend text.
               * @default null
               */
              size: number | null;
              /**
               * Strikethrough
               * @description True if the legend text has a strikethrough.
               * @default null
               */
              strikethrough: boolean | null;
              /**
               * Underline
               * @description Underline style for the legend text font.
               * @default null
               */
              underline: string | null;
          };
      };
      /**
       * Overlay
       * @description True if the chart legend should overlap the chart.
       */
      overlay: boolean;
      /**
       * Position
       * @description Position of the chart legend (Top, Bottom, Left, Right, Corner, Custom).
       */
      position: string;
      /**
       * Visible
       * @description True if the chart legend is visible.
       */
      visible: boolean;
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
 * Type of EXCEL's EXCEL_GET_RANGE tool input.
 */
type EXCEL_GET_RANGE_INPUT = {
  /**
   * Address
   * @description The address of the range (e.g., 'A1:B2').
   */
  address?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet Id
   * @description The ID of the worksheet.
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_RANGE tool output.
 */
type EXCEL_GET_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Address */
      address: string;
      /** Address Local */
      addressLocal: string;
      /** Cell Count */
      cellCount: number;
      /** Column Count */
      columnCount: number;
      /** Column Hidden */
      columnHidden: boolean;
      /** Column Index */
      columnIndex: number;
      /** Formulas */
      formulas: unknown[][];
      /** Formulas Local */
      formulasLocal: unknown[][];
      /** Formulas R1 C1 */
      formulasR1C1: unknown[][];
      /** Hidden */
      hidden: boolean;
      /** Number Format */
      numberFormat: unknown[][];
      /** Row Count */
      rowCount: number;
      /** Row Hidden */
      rowHidden: boolean;
      /** Row Index */
      rowIndex: number;
      /** Text */
      text: unknown[][];
      /** Value Types */
      valueTypes: unknown[][];
      /** Values */
      values: unknown[][];
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
 * Type of EXCEL's EXCEL_GET_SESSION tool input.
 */
type EXCEL_GET_SESSION_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to create a session for.
   */
  item_id?: string;
  /**
   * Persist Changes
   * @description Whether changes should be persisted after the session. If false, a nonpersistent session is created.
   * @default true
   */
  persist_changes: boolean;
};

/**
 * Type of EXCEL's EXCEL_GET_SESSION tool output.
 */
type EXCEL_GET_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Persist Changes
       * @description Whether changes are persisted in this session.
       */
      persist_changes: boolean;
      /**
       * Session Id
       * @description The session ID returned by the API.
       */
      session_id: string;
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
 * Type of EXCEL's EXCEL_GET_SHAREPOINT_RANGE tool input.
 */
type EXCEL_GET_SHAREPOINT_RANGE_INPUT = {
  /**
   * Address
   * @description The address of the range (e.g., 'A1:B2').
   */
  address?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Site Id
   * @description The ID of the SharePoint site containing the Excel file.
   */
  site_id?: string;
  /**
   * Worksheet Id
   * @description The ID of the worksheet.
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_SHAREPOINT_RANGE tool output.
 */
type EXCEL_GET_SHAREPOINT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Address */
      address: string;
      /** Address Local */
      addressLocal: string;
      /** Cell Count */
      cellCount: number;
      /** Column Count */
      columnCount: number;
      /** Column Hidden */
      columnHidden: boolean;
      /** Column Index */
      columnIndex: number;
      /** Formulas */
      formulas: unknown[][];
      /** Formulas Local */
      formulasLocal: unknown[][];
      /** Formulas R1 C1 */
      formulasR1C1: unknown[][];
      /** Hidden */
      hidden: boolean;
      /** Number Format */
      numberFormat: unknown[][];
      /** Row Count */
      rowCount: number;
      /** Row Hidden */
      rowHidden: boolean;
      /** Row Index */
      rowIndex: number;
      /** Text */
      text: unknown[][];
      /** Value Types */
      valueTypes: unknown[][];
      /** Values */
      values: unknown[][];
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
 * Type of EXCEL's EXCEL_GET_SHAREPOINT_WORKSHEET tool input.
 */
type EXCEL_GET_SHAREPOINT_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to get the worksheet from.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Site Id
   * @description The ID of the SharePoint site containing the Excel file.
   */
  site_id?: string;
  /**
   * Worksheet
   * @description The name or ID of the worksheet to retrieve. If using ID, it must be URL-encoded.
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_SHAREPOINT_WORKSHEET tool output.
 */
type EXCEL_GET_SHAREPOINT_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The worksheet ID.
       */
      id: string;
      /**
       * Name
       * @description The worksheet name.
       */
      name: string;
      /**
       * Position
       * @description The position of the worksheet in the workbook.
       */
      position: number;
      /**
       * Visibility
       * @description The visibility of the worksheet.
       */
      visibility: string;
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
 * Type of EXCEL's EXCEL_GET_TABLE_COLUMN tool input.
 */
type EXCEL_GET_TABLE_COLUMN_INPUT = {
  /**
   * Column Id
   * @description The ID or name of the column to retrieve.
   */
  column_id?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID or name of the table containing the column.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_TABLE_COLUMN tool output.
 */
type EXCEL_GET_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The column ID.
       */
      id: string;
      /**
       * Index
       * @description The index of the column (zero-based).
       */
      index: number;
      /**
       * Name
       * @description The column name.
       */
      name: string;
      /**
       * Values
       * @description The values in the column.
       */
      values: (string | number | boolean | null)[][];
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
 * Type of EXCEL's EXCEL_GET_WORKBOOK tool input.
 */
type EXCEL_GET_WORKBOOK_INPUT = {
  /**
   * Drive Id
   * @description ID of the drive (use 'me' for the user's default drive).
   */
  drive_id?: string;
  /**
   * Expand
   * @description OData relationships to expand in the response.
   * @default null
   */
  expand: string[] | null;
  /**
   * Item Id
   * @description ID of the drive item (Excel file) to retrieve.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional workbook session ID. If provided, will be sent in headers.
   * @default null
   */
  session_id: string | null;
};

/**
 * Type of EXCEL's EXCEL_GET_WORKBOOK tool output.
 */
type EXCEL_GET_WORKBOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments in the workbook.
       */
      comments?: {
          /**
           * Id
           * @description The workbook comment ID.
           */
          id: string;
      }[];
      /**
       * Names
       * @description List of named items in the workbook.
       */
      names?: {
          /**
           * Id
           * @description The named item ID.
           */
          id: string;
          /**
           * Name
           * @description The named item name.
           */
          name: string;
      }[];
      /**
       * Operations
       * @description List of operations on the workbook.
       */
      operations?: {
          /**
           * Id
           * @description The workbook operation ID.
           */
          id: string;
      }[];
      /**
       * Tables
       * @description List of tables in the workbook.
       */
      tables?: {
          /**
           * Id
           * @description The table ID.
           */
          id: string;
      }[];
      /**
       * Worksheets
       * @description List of worksheets in the workbook.
       */
      worksheets?: {
          /**
           * Id
           * @description The worksheet ID.
           */
          id: string;
          /**
           * Name
           * @description The worksheet name.
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
 * Type of EXCEL's EXCEL_GET_WORKSHEET tool input.
 */
type EXCEL_GET_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to get the worksheet from.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet to retrieve. If using ID, it must be URL-encoded.
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_GET_WORKSHEET tool output.
 */
type EXCEL_GET_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The worksheet ID.
       */
      id: string;
      /**
       * Name
       * @description The worksheet name.
       */
      name: string;
      /**
       * Position
       * @description The position of the worksheet in the workbook.
       */
      position: number;
      /**
       * Visibility
       * @description The visibility of the worksheet.
       */
      visibility: string;
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
 * Type of EXCEL's EXCEL_INSERT_RANGE tool input.
 */
type EXCEL_INSERT_RANGE_INPUT = {
  /**
   * Address
   * @description The address of the range (e.g., 'A1:B2').
   */
  address?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional workbook session ID. If provided, changes persist in that session.
   * @default null
   */
  session_id: string | null;
  /**
   * Shift
   * @description Direction to shift cells to make space: 'Down' or 'Right'.
   * @enum {string}
   */
  shift?: "Down" | "Right";
  /**
   * Worksheet Id
   * @description The ID or name of the worksheet.
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_INSERT_RANGE tool output.
 */
type EXCEL_INSERT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The address of the inserted range.
       */
      address: string;
      /**
       * Address Local
       * @description The localized address of the range.
       */
      addressLocal: string;
      /**
       * Cell Count
       * @description Number of cells in the range.
       */
      cellCount: number;
      /**
       * Column Count
       * @description Number of columns in the range.
       */
      columnCount: number;
      /**
       * Column Hidden
       * @description Whether the column containing the range is hidden.
       */
      columnHidden: boolean;
      /**
       * Column Index
       * @description Index of the first column in the range.
       */
      columnIndex: number;
      /**
       * Formulas
       * @description Formulas in A1-style notation.
       */
      formulas: (string | number | boolean | null)[][];
      /**
       * Formulas Local
       * @description Formulas in the user's locale.
       */
      formulasLocal: (string | number | boolean | null)[][];
      /**
       * Formulas R1 C1
       * @description Formulas in R1C1-style notation.
       */
      formulasR1C1: (string | number | boolean | null)[][];
      /**
       * Hidden
       * @description Whether the range is hidden.
       */
      hidden: boolean;
      /**
       * Number Format
       * @description Number formats of the cells.
       */
      numberFormat: string[][];
      /**
       * Row Count
       * @description Number of rows in the range.
       */
      rowCount: number;
      /**
       * Row Hidden
       * @description Whether the row containing the range is hidden.
       */
      rowHidden: boolean;
      /**
       * Row Index
       * @description Index of the first row in the range.
       */
      rowIndex: number;
      /**
       * Text
       * @description Text values of the range.
       */
      text: string[][];
      /**
       * Value Types
       * @description Type of values in each cell.
       */
      valueTypes: string[][];
      /**
       * Values
       * @description Raw values of the range.
       */
      values: (string | number | boolean | null)[][];
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
 * Type of EXCEL's EXCEL_LIST_CHARTS tool input.
 */
type EXCEL_LIST_CHARTS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_CHARTS tool output.
 */
type EXCEL_LIST_CHARTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Charts
       * @description List of charts in the worksheet.
       */
      charts: {
          /**
           * Height
           * @description The chart height.
           */
          height: number;
          /**
           * Id
           * @description The chart ID.
           */
          id: string;
          /**
           * Left
           * @description The chart left position.
           */
          left: number;
          /**
           * Name
           * @description The chart name.
           */
          name: string;
          /**
           * Top
           * @description The chart top position.
           */
          top: number;
          /**
           * Width
           * @description The chart width.
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
 * Type of EXCEL's EXCEL_LIST_CHART_SERIES tool input.
 */
type EXCEL_LIST_CHART_SERIES_INPUT = {
  /**
   * Chart Name
   * @description The name or ID of the chart (must be URL-encoded).
   */
  chart_name?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_CHART_SERIES tool output.
 */
type EXCEL_LIST_CHART_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Series
       * @description List of data series in the chart.
       */
      series: {
          /**
           * Name
           * @description The name of the series.
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
 * Type of EXCEL's EXCEL_LIST_COMMENTS tool input.
 */
type EXCEL_LIST_COMMENTS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to list comments for.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
};

/**
 * Type of EXCEL's EXCEL_LIST_COMMENTS tool output.
 */
type EXCEL_LIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments in the workbook.
       */
      comments: {
          /**
           * Content
           * @description The comment content.
           */
          content: string;
          /**
           * Content Type
           * @description The format of the content, e.g., 'plain'.
           */
          contentType: string;
          /**
           * IdentitySet
           * @description Identity of who created the comment.
           * @default null
           */
          createdBy: {
              /**
               * Identity
               * @description The application identity.
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Identity
               * @description The device identity.
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Identity
               * @description The user identity.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Created Date Time
           * @description Timestamp when the comment was created.
           * @default null
           */
          createdDateTime: string | null;
          /**
           * Id
           * @description The comment ID.
           */
          id: string;
          /**
           * IdentitySet
           * @description Identity of who last modified the comment.
           * @default null
           */
          lastModifiedBy: {
              /**
               * Identity
               * @description The application identity.
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Identity
               * @description The device identity.
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Identity
               * @description The user identity.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Last Modified Date Time
           * @description Timestamp when the comment was last modified.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Replies
           * @description List of replies to the comment.
           * @default null
           */
          replies: {
              /**
               * Content
               * @description The content of the reply.
               */
              content: string;
              /**
               * Content Type
               * @description The format of the content, e.g., 'plain'.
               */
              contentType: string;
              /**
               * IdentitySet
               * @description Identity of who created the reply.
               * @default null
               */
              createdBy: {
                  /**
                   * Identity
                   * @description The application identity.
                   * @default null
                   */
                  application: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       * @default null
                       */
                      id: string | null;
                  } | null;
                  /**
                   * Identity
                   * @description The device identity.
                   * @default null
                   */
                  device: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       * @default null
                       */
                      id: string | null;
                  } | null;
                  /**
                   * Identity
                   * @description The user identity.
                   * @default null
                   */
                  user: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       * @default null
                       */
                      id: string | null;
                  } | null;
              } | null;
              /**
               * Created Date Time
               * @description Timestamp when the reply was created.
               * @default null
               */
              createdDateTime: string | null;
              /**
               * Id
               * @description The comment reply ID.
               */
              id: string;
          }[] | null;
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
 * Type of EXCEL's EXCEL_LIST_FILES tool input.
 */
type EXCEL_LIST_FILES_INPUT = {
  /**
   * Drive Id
   * @description ID of the drive (use 'me' for the user's default drive)
   * @default me
   */
  drive_id: string;
  /**
   * Path
   * @description Optional folder path under root to list. E.g., 'Documents'
   * @default null
   */
  path: string | null;
};

/**
 * Type of EXCEL's EXCEL_LIST_FILES tool output.
 */
type EXCEL_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description List of drive items.
       */
      value: {
          /**
           * Id
           * @description ID of the drive item.
           */
          id: string;
          /**
           * Name
           * @description Name of the drive item.
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
 * Type of EXCEL's EXCEL_LIST_NAMED_ITEMS tool input.
 */
type EXCEL_LIST_NAMED_ITEMS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the workbook.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
};

/**
 * Type of EXCEL's EXCEL_LIST_NAMED_ITEMS tool output.
 */
type EXCEL_LIST_NAMED_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Named Items
       * @description List of named items in the workbook.
       */
      named_items: {
          /**
           * Name
           * @description The name of the named item.
           */
          name: string;
          /**
           * Type
           * @description The type of the named item.
           */
          type: string;
          /**
           * Value
           * @description The value of the named item.
           */
          value: string;
          /**
           * Visible
           * @description Whether the named item is visible.
           */
          visible: boolean;
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
 * Type of EXCEL's EXCEL_LIST_SHAREPOINT_TABLES tool input.
 */
type EXCEL_LIST_SHAREPOINT_TABLES_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Site Id
   * @description The ID of the SharePoint site containing the Excel file.
   */
  site_id?: string;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_SHAREPOINT_TABLES tool output.
 */
type EXCEL_LIST_SHAREPOINT_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description List of tables in the worksheet.
       */
      tables: {
          /**
           * Id
           * @description The table ID.
           */
          id: string;
          /**
           * Name
           * @description The table name.
           */
          name: string;
          /**
           * Show Headers
           * @description Whether the table shows headers.
           */
          showHeaders: boolean;
          /**
           * Show Totals
           * @description Whether the table shows totals.
           */
          showTotals: boolean;
          /**
           * Style
           * @description The table style.
           */
          style: string;
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
 * Type of EXCEL's EXCEL_LIST_SHAREPOINT_WORKSHEETS tool input.
 */
type EXCEL_LIST_SHAREPOINT_WORKSHEETS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to list worksheets for.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Site Id
   * @description The ID of the SharePoint site containing the Excel file.
   */
  site_id?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_SHAREPOINT_WORKSHEETS tool output.
 */
type EXCEL_LIST_SHAREPOINT_WORKSHEETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Worksheets
       * @description List of worksheets in the workbook.
       */
      worksheets: {
          /**
           * Id
           * @description The worksheet ID.
           */
          id: string;
          /**
           * Name
           * @description The worksheet name.
           */
          name: string;
          /**
           * Position
           * @description The position of the worksheet in the workbook.
           */
          position: number;
          /**
           * Visibility
           * @description The visibility of the worksheet.
           */
          visibility: string;
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
 * Type of EXCEL's EXCEL_LIST_TABLES tool input.
 */
type EXCEL_LIST_TABLES_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_TABLES tool output.
 */
type EXCEL_LIST_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description List of tables in the worksheet.
       */
      tables: {
          /**
           * Id
           * @description The table ID.
           */
          id: string;
          /**
           * Name
           * @description The table name.
           */
          name: string;
          /**
           * Show Headers
           * @description Whether the table shows headers.
           */
          showHeaders: boolean;
          /**
           * Show Totals
           * @description Whether the table shows totals.
           */
          showTotals: boolean;
          /**
           * Style
           * @description The table style.
           */
          style: string;
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
 * Type of EXCEL's EXCEL_LIST_TABLE_COLUMNS tool input.
 */
type EXCEL_LIST_TABLE_COLUMNS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to list columns from.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_TABLE_COLUMNS tool output.
 */
type EXCEL_LIST_TABLE_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of columns in the table.
       */
      columns: {
          /**
           * Id
           * @description The column ID.
           */
          id: string;
          /**
           * Index
           * @description The column index.
           */
          index: number;
          /**
           * Name
           * @description The column name.
           */
          name: string;
          /**
           * Values
           * @description The values in the column.
           */
          values: unknown[][];
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
 * Type of EXCEL's EXCEL_LIST_TABLE_ROWS tool input.
 */
type EXCEL_LIST_TABLE_ROWS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Table Id
   * @description The ID of the table to list rows from.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_TABLE_ROWS tool output.
 */
type EXCEL_LIST_TABLE_ROWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rows
       * @description List of rows in the table.
       */
      rows: {
          /**
           * Index
           * @description The row index.
           */
          index: number;
          /**
           * Values
           * @description The values in the row.
           */
          values: unknown[][];
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
 * Type of EXCEL's EXCEL_LIST_WORKBOOK_PERMISSIONS tool input.
 */
type EXCEL_LIST_WORKBOOK_PERMISSIONS_INPUT = {
  /**
   * $Expand
   * @description Comma-separated list of related entities to expand.
   * @default null
   */
  $expand: string | null;
  /**
   * $Select
   * @description Comma-separated list of permission properties to include in the response.
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of permission objects to skip.
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of permission objects to return.
   * @default null
   */
  $top: number | null;
  /**
   * Drive Id
   * @description The ID of the drive containing the workbook file.
   */
  drive_id?: string;
  /**
   * Item Id
   * @description The ID of the DriveItem representing the workbook.
   */
  item_id?: string;
};

/**
 * Type of EXCEL's EXCEL_LIST_WORKBOOK_PERMISSIONS tool output.
 */
type EXCEL_LIST_WORKBOOK_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description List of permissions on the workbook.
       */
      value: {
          /**
           * Expiration Date Time
           * @description The UTC date and time when the link or invitation expires.
           * @default null
           */
          expirationDateTime: string | null;
          /**
           * IdentitySet
           * @description The user or group granted access.
           * @default null
           */
          grantedTo: {
              /**
               * Identity
               * @description The application associated with this identity set.
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The conversation associated with this identity set.
               * @default null
               */
              conversation: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The device associated with this identity set.
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The group associated with this identity set.
               * @default null
               */
              group: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The user associated with this identity set.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
          } | null;
          /**
           * IdentitySet
           * @description The newer version of the grantedTo property.
           * @default null
           */
          grantedToV2: {
              /**
               * Identity
               * @description The application associated with this identity set.
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The conversation associated with this identity set.
               * @default null
               */
              conversation: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The device associated with this identity set.
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The group associated with this identity set.
               * @default null
               */
              group: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
              /**
               * Identity
               * @description The user associated with this identity set.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   */
                  id: string;
              } | null;
          } | null;
          /**
           * Id
           * @description The unique identifier for the permission.
           */
          id: string;
          /**
           * DriveItemReference
           * @description If the permission is inherited, the reference of the parent item.
           * @default null
           */
          inheritedFrom: {
              /**
               * Drive Id
               * @description The drive ID containing the item.
               * @default null
               */
              driveId: string | null;
              /**
               * Drive Type
               * @description The type of the drive.
               * @default null
               */
              driveType: string | null;
              /**
               * Id
               * @description The unique identifier of the DriveItem.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description The name of the DriveItem.
               * @default null
               */
              name: string | null;
              /**
               * Path
               * @description The path of the item.
               * @default null
               */
              path: string | null;
          } | null;
          /**
           * SharingInvitation
           * @description Information about the invitation, if the permission represents an invitation.
           * @default null
           */
          invitation: {
              /**
               * Invitation Text
               * @description The message sent with the invitation.
               * @default null
               */
              invitationText: string | null;
              /**
               * IdentitySet
               * @description Details of who sent the invitation.
               * @default null
               */
              invitedBy: {
                  /**
                   * Identity
                   * @description The application associated with this identity set.
                   * @default null
                   */
                  application: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The conversation associated with this identity set.
                   * @default null
                   */
                  conversation: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The device associated with this identity set.
                   * @default null
                   */
                  device: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The group associated with this identity set.
                   * @default null
                   */
                  group: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The user associated with this identity set.
                   * @default null
                   */
                  user: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
              } | null;
              /**
               * IdentitySet
               * @description Details of the invited user.
               * @default null
               */
              invitedUser: {
                  /**
                   * Identity
                   * @description The application associated with this identity set.
                   * @default null
                   */
                  application: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The conversation associated with this identity set.
                   * @default null
                   */
                  conversation: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The device associated with this identity set.
                   * @default null
                   */
                  device: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The group associated with this identity set.
                   * @default null
                   */
                  group: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The user associated with this identity set.
                   * @default null
                   */
                  user: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
              } | null;
              /**
               * Invited User Display Name
               * @description The display name of the invited user.
               * @default null
               */
              invitedUserDisplayName: string | null;
              /**
               * Invited User Email
               * @description The email of the invited user.
               * @default null
               */
              invitedUserEmail: string | null;
              /**
               * Sign In Required
               * @description Whether sign-in is required for the invitation.
               * @default null
               */
              signInRequired: boolean | null;
          } | null;
          /**
           * SharingLink
           * @description Information about the sharing link, if applicable.
           * @default null
           */
          link: {
              /**
               * IdentitySet
               * @description The application that created the link.
               * @default null
               */
              application: {
                  /**
                   * Identity
                   * @description The application associated with this identity set.
                   * @default null
                   */
                  application: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The conversation associated with this identity set.
                   * @default null
                   */
                  conversation: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The device associated with this identity set.
                   * @default null
                   */
                  device: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The group associated with this identity set.
                   * @default null
                   */
                  group: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
                  /**
                   * Identity
                   * @description The user associated with this identity set.
                   * @default null
                   */
                  user: {
                      /**
                       * Display Name
                       * @description The display name of the identity.
                       * @default null
                       */
                      displayName: string | null;
                      /**
                       * Id
                       * @description The unique identifier of the identity.
                       */
                      id: string;
                  } | null;
              } | null;
              /**
               * Scope
               * @description The scope of the sharing link (anonymous, organization).
               * @default null
               */
              scope: string | null;
              /**
               * Type
               * @description The type of the sharing link (view, edit, embed).
               * @default null
               */
              type: string | null;
              /**
               * Web Url
               * @description URL of the sharing link.
               * @default null
               */
              webUrl: string | null;
          } | null;
          /**
           * Roles
           * @description The roles granted by the permission (e.g., read, write).
           */
          roles: string[];
          /**
           * Share Id
           * @description A unique token used to access a shared item via a sharing link.
           * @default null
           */
          shareId: string | null;
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
 * Type of EXCEL's EXCEL_LIST_WORKSHEETS tool input.
 */
type EXCEL_LIST_WORKSHEETS_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) to list worksheets for.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
};

/**
 * Type of EXCEL's EXCEL_LIST_WORKSHEETS tool output.
 */
type EXCEL_LIST_WORKSHEETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Worksheets
       * @description List of worksheets in the workbook.
       */
      worksheets: {
          /**
           * Id
           * @description The worksheet ID.
           */
          id: string;
          /**
           * Name
           * @description The worksheet name.
           */
          name: string;
          /**
           * Position
           * @description The position of the worksheet in the workbook.
           */
          position: number;
          /**
           * Visibility
           * @description The visibility of the worksheet.
           */
          visibility: string;
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
 * Type of EXCEL's EXCEL_MERGE_CELLS tool input.
 */
type EXCEL_MERGE_CELLS_INPUT = {
  /**
   * Across
   * @description Optional. Set true to merge cells in each row of the specified range as separate merged cells. The default value is false.
   * @default null
   */
  across: boolean | null;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Range
   * @description The A1-style address of the range to merge (e.g., 'A1:B2').
   */
  range?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet containing the range to merge.
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_MERGE_CELLS tool output.
 */
type EXCEL_MERGE_CELLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the cells were merged successfully.
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
 * Type of EXCEL's EXCEL_PROTECT_WORKSHEET tool input.
 */
type EXCEL_PROTECT_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * ProtectWorksheetOptions
   * @description Sheet protection options. If omitted, default protection is applied.
   * @default null
   */
  options: {
      /**
       * Allow Auto Filter
       * @description Allow use of the autofilter feature.
       * @default null
       */
      allowAutoFilter: boolean | null;
      /**
       * Allow Delete Columns
       * @description Allow deleting columns.
       * @default null
       */
      allowDeleteColumns: boolean | null;
      /**
       * Allow Delete Rows
       * @description Allow deleting rows.
       * @default null
       */
      allowDeleteRows: boolean | null;
      /**
       * Allow Format Cells
       * @description Allow formatting cells.
       * @default null
       */
      allowFormatCells: boolean | null;
      /**
       * Allow Format Columns
       * @description Allow formatting columns.
       * @default null
       */
      allowFormatColumns: boolean | null;
      /**
       * Allow Format Rows
       * @description Allow formatting rows.
       * @default null
       */
      allowFormatRows: boolean | null;
      /**
       * Allow Insert Columns
       * @description Allow inserting columns.
       * @default null
       */
      allowInsertColumns: boolean | null;
      /**
       * Allow Insert Hyperlinks
       * @description Allow inserting hyperlinks.
       * @default null
       */
      allowInsertHyperlinks: boolean | null;
      /**
       * Allow Insert Rows
       * @description Allow inserting rows.
       * @default null
       */
      allowInsertRows: boolean | null;
      /**
       * Allow Pivot Tables
       * @description Allow use of pivot tables.
       * @default null
       */
      allowPivotTables: boolean | null;
      /**
       * Allow Sort
       * @description Allow use of the sort feature.
       * @default null
       */
      allowSort: boolean | null;
  } | null;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet to protect. If using ID, it must be URL-encoded.
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_PROTECT_WORKSHEET tool output.
 */
type EXCEL_PROTECT_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the worksheet was protected successfully.
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
 * Type of EXCEL's EXCEL_SORT_RANGE tool input.
 */
type EXCEL_SORT_RANGE_INPUT = {
  /**
   * Fields
   * @description List of sort fields (e.g., [{ 'key': 0, 'ascending': true }]).
   */
  fields?: {
      [key: string]: unknown;
  }[];
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Range Type
   * @description The type of range to sort (e.g., 'usedRange').
   */
  range_type?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_SORT_RANGE tool output.
 */
type EXCEL_SORT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the range was sorted successfully.
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
 * Type of EXCEL's EXCEL_UPDATE_CHART tool input.
 */
type EXCEL_UPDATE_CHART_INPUT = {
  /**
   * Chart Id
   * @description The ID of the chart (must be URL-encoded).
   */
  chart_id?: string;
  /**
   * Height
   * @description The new height for the chart.
   * @default null
   */
  height: number | null;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Left
   * @description The new left position for the chart.
   * @default null
   */
  left: number | null;
  /**
   * Name
   * @description The new name for the chart.
   * @default null
   */
  name: string | null;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Top
   * @description The new top position for the chart.
   * @default null
   */
  top: number | null;
  /**
   * Width
   * @description The new width for the chart.
   * @default null
   */
  width: number | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_UPDATE_CHART tool output.
 */
type EXCEL_UPDATE_CHART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Height
       * @description The chart height.
       */
      height: number;
      /**
       * Id
       * @description The chart ID.
       */
      id: string;
      /**
       * Left
       * @description The chart left position.
       */
      left: number;
      /**
       * Name
       * @description The chart name.
       */
      name: string;
      /**
       * Top
       * @description The chart top position.
       */
      top: number;
      /**
       * Width
       * @description The chart width.
       */
      width: number;
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
 * Type of EXCEL's EXCEL_UPDATE_CHART_LEGEND tool input.
 */
type EXCEL_UPDATE_CHART_LEGEND_INPUT = {
  /**
   * Chart Id
   * @description The name or ID of the chart (must be URL-encoded).
   */
  chart_id?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the workbook.
   */
  item_id?: string;
  /**
   * Overlay
   * @description Set to true to make the legend overlap the chart body, or false otherwise.
   * @default null
   */
  overlay: boolean | null;
  /**
   * Position
   * @description The position of the legend on the chart. Possible values: Top, Bottom, Left, Right, Corner, Custom.
   * @default null
   * @enum {string|null}
   */
  position: "Top" | "Bottom" | "Left" | "Right" | "Corner" | "Custom" | null;
  /**
   * Session Id
   * @description Optional workbook session ID. If provided, will be sent in the 'workbook-session-id' header.
   * @default null
   */
  session_id: string | null;
  /**
   * Visible
   * @description Set to true to show the chart legend, or false to hide it.
   * @default null
   */
  visible: boolean | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet (must be URL-encoded if using ID).
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_UPDATE_CHART_LEGEND tool output.
 */
type EXCEL_UPDATE_CHART_LEGEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Overlay
       * @description True if the legend overlaps the chart body.
       */
      overlay: boolean;
      /**
       * Position
       * @description Position of the legend on the chart.
       */
      position: string;
      /**
       * Visible
       * @description True if the legend is visible.
       */
      visible: boolean;
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
 * Type of EXCEL's EXCEL_UPDATE_RANGE tool input.
 */
type EXCEL_UPDATE_RANGE_INPUT = {
  /**
   * Address
   * @description The address of the range (e.g., 'A1:B2').
   */
  address?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Values
   * @description The values to update in the range.
   */
  values?: unknown[][];
  /**
   * Worksheet Id
   * @description The ID of the worksheet.
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_UPDATE_RANGE tool output.
 */
type EXCEL_UPDATE_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Address */
      address: string;
      /** Address Local */
      addressLocal: string;
      /** Cell Count */
      cellCount: number;
      /** Column Count */
      columnCount: number;
      /** Column Hidden */
      columnHidden: boolean;
      /** Column Index */
      columnIndex: number;
      /** Formulas */
      formulas: unknown[][];
      /** Formulas Local */
      formulasLocal: unknown[][];
      /** Formulas R1 C1 */
      formulasR1C1: unknown[][];
      /** Hidden */
      hidden: boolean;
      /** Number Format */
      numberFormat: unknown[][];
      /** Row Count */
      rowCount: number;
      /** Row Hidden */
      rowHidden: boolean;
      /** Row Index */
      rowIndex: number;
      /** Text */
      text: unknown[][];
      /** Value Types */
      valueTypes: unknown[][];
      /** Values */
      values: unknown[][];
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
 * Type of EXCEL's EXCEL_UPDATE_SHAREPOINT_RANGE tool input.
 */
type EXCEL_UPDATE_SHAREPOINT_RANGE_INPUT = {
  /**
   * Address
   * @description The address of the range (e.g., 'A1:B2').
   */
  address?: string;
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Site Id
   * @description The ID of the SharePoint site containing the Excel file.
   */
  site_id?: string;
  /**
   * Values
   * @description The values to update in the range.
   */
  values?: unknown[][];
  /**
   * Worksheet Id
   * @description The ID of the worksheet.
   */
  worksheet_id?: string;
};

/**
 * Type of EXCEL's EXCEL_UPDATE_SHAREPOINT_RANGE tool output.
 */
type EXCEL_UPDATE_SHAREPOINT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Address */
      address: string;
      /** Address Local */
      addressLocal: string;
      /** Cell Count */
      cellCount: number;
      /** Column Count */
      columnCount: number;
      /** Column Hidden */
      columnHidden: boolean;
      /** Column Index */
      columnIndex: number;
      /** Formulas */
      formulas: unknown[][];
      /** Formulas Local */
      formulasLocal: unknown[][];
      /** Formulas R1 C1 */
      formulasR1C1: unknown[][];
      /** Hidden */
      hidden: boolean;
      /** Number Format */
      numberFormat: unknown[][];
      /** Row Count */
      rowCount: number;
      /** Row Hidden */
      rowHidden: boolean;
      /** Row Index */
      rowIndex: number;
      /** Text */
      text: unknown[][];
      /** Value Types */
      valueTypes: unknown[][];
      /** Values */
      values: unknown[][];
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
 * Type of EXCEL's EXCEL_UPDATE_TABLE tool input.
 */
type EXCEL_UPDATE_TABLE_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the table.
   */
  item_id?: string;
  /**
   * Name
   * @description The new name for the table.
   * @default null
   */
  name: string | null;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Show Headers
   * @description Whether the table shows headers.
   * @default null
   */
  showHeaders: boolean | null;
  /**
   * Show Totals
   * @description Whether the table shows totals.
   * @default null
   */
  showTotals: boolean | null;
  /**
   * Style
   * @description The style of the table.
   * @default null
   */
  style: string | null;
  /**
   * Table Id
   * @description The ID of the table to update.
   */
  table_id?: string;
};

/**
 * Type of EXCEL's EXCEL_UPDATE_TABLE tool output.
 */
type EXCEL_UPDATE_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The table ID.
       */
      id: string;
      /**
       * Name
       * @description The table name.
       */
      name: string;
      /**
       * Show Headers
       * @description Whether the table shows headers.
       */
      showHeaders: boolean;
      /**
       * Show Totals
       * @description Whether the table shows totals.
       */
      showTotals: boolean;
      /**
       * Style
       * @description The table style.
       */
      style: string;
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
 * Type of EXCEL's EXCEL_UPDATE_WORKSHEET tool input.
 */
type EXCEL_UPDATE_WORKSHEET_INPUT = {
  /**
   * Item Id
   * @description The ID of the Excel file (drive item) containing the worksheet.
   */
  item_id?: string;
  /**
   * Name
   * @description The new name for the worksheet.
   * @default null
   */
  name: string | null;
  /**
   * Position
   * @description The new position for the worksheet.
   * @default null
   */
  position: number | null;
  /**
   * Session Id
   * @description Optional session ID for the workbook. If provided, will be sent in the headers.
   * @default null
   */
  session_id: string | null;
  /**
   * Worksheet
   * @description The name or ID of the worksheet to update. If using ID, it must be URL-encoded.
   */
  worksheet?: string;
};

/**
 * Type of EXCEL's EXCEL_UPDATE_WORKSHEET tool output.
 */
type EXCEL_UPDATE_WORKSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The worksheet ID.
       */
      id: string;
      /**
       * Name
       * @description The worksheet name.
       */
      name: string;
      /**
       * Position
       * @description The position of the worksheet in the workbook.
       */
      position: number;
      /**
       * Visibility
       * @description The visibility of the worksheet.
       */
      visibility: string;
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
 * Type map of all available tool input types for toolkit "EXCEL".
 */
export type EXCEL_TOOL_INPUTS = {
  ADD_CHART: EXCEL_ADD_CHART_INPUT
  ADD_SHAREPOINT_WORKSHEET: EXCEL_ADD_SHAREPOINT_WORKSHEET_INPUT
  ADD_TABLE: EXCEL_ADD_TABLE_INPUT
  ADD_TABLE_COLUMN: EXCEL_ADD_TABLE_COLUMN_INPUT
  ADD_TABLE_ROW: EXCEL_ADD_TABLE_ROW_INPUT
  ADD_WORKBOOK_PERMISSION: EXCEL_ADD_WORKBOOK_PERMISSION_INPUT
  ADD_WORKSHEET: EXCEL_ADD_WORKSHEET_INPUT
  APPLY_TABLE_FILTER: EXCEL_APPLY_TABLE_FILTER_INPUT
  APPLY_TABLE_SORT: EXCEL_APPLY_TABLE_SORT_INPUT
  CLEAR_RANGE: EXCEL_CLEAR_RANGE_INPUT
  CLEAR_TABLE_FILTER: EXCEL_CLEAR_TABLE_FILTER_INPUT
  CLOSE_SESSION: EXCEL_CLOSE_SESSION_INPUT
  CONVERT_TABLE_TO_RANGE: EXCEL_CONVERT_TABLE_TO_RANGE_INPUT
  CREATE_WORKBOOK: EXCEL_CREATE_WORKBOOK_INPUT
  DELETE_TABLE_COLUMN: EXCEL_DELETE_TABLE_COLUMN_INPUT
  DELETE_TABLE_ROW: EXCEL_DELETE_TABLE_ROW_INPUT
  DELETE_WORKSHEET: EXCEL_DELETE_WORKSHEET_INPUT
  GET_CHART_AXIS: EXCEL_GET_CHART_AXIS_INPUT
  GET_CHART_DATA_LABELS: EXCEL_GET_CHART_DATA_LABELS_INPUT
  GET_CHART_LEGEND: EXCEL_GET_CHART_LEGEND_INPUT
  GET_RANGE: EXCEL_GET_RANGE_INPUT
  GET_SESSION: EXCEL_GET_SESSION_INPUT
  GET_SHAREPOINT_RANGE: EXCEL_GET_SHAREPOINT_RANGE_INPUT
  GET_SHAREPOINT_WORKSHEET: EXCEL_GET_SHAREPOINT_WORKSHEET_INPUT
  GET_TABLE_COLUMN: EXCEL_GET_TABLE_COLUMN_INPUT
  GET_WORKBOOK: EXCEL_GET_WORKBOOK_INPUT
  GET_WORKSHEET: EXCEL_GET_WORKSHEET_INPUT
  INSERT_RANGE: EXCEL_INSERT_RANGE_INPUT
  LIST_CHARTS: EXCEL_LIST_CHARTS_INPUT
  LIST_CHART_SERIES: EXCEL_LIST_CHART_SERIES_INPUT
  LIST_COMMENTS: EXCEL_LIST_COMMENTS_INPUT
  LIST_FILES: EXCEL_LIST_FILES_INPUT
  LIST_NAMED_ITEMS: EXCEL_LIST_NAMED_ITEMS_INPUT
  LIST_SHAREPOINT_TABLES: EXCEL_LIST_SHAREPOINT_TABLES_INPUT
  LIST_SHAREPOINT_WORKSHEETS: EXCEL_LIST_SHAREPOINT_WORKSHEETS_INPUT
  LIST_TABLES: EXCEL_LIST_TABLES_INPUT
  LIST_TABLE_COLUMNS: EXCEL_LIST_TABLE_COLUMNS_INPUT
  LIST_TABLE_ROWS: EXCEL_LIST_TABLE_ROWS_INPUT
  LIST_WORKBOOK_PERMISSIONS: EXCEL_LIST_WORKBOOK_PERMISSIONS_INPUT
  LIST_WORKSHEETS: EXCEL_LIST_WORKSHEETS_INPUT
  MERGE_CELLS: EXCEL_MERGE_CELLS_INPUT
  PROTECT_WORKSHEET: EXCEL_PROTECT_WORKSHEET_INPUT
  SORT_RANGE: EXCEL_SORT_RANGE_INPUT
  UPDATE_CHART: EXCEL_UPDATE_CHART_INPUT
  UPDATE_CHART_LEGEND: EXCEL_UPDATE_CHART_LEGEND_INPUT
  UPDATE_RANGE: EXCEL_UPDATE_RANGE_INPUT
  UPDATE_SHAREPOINT_RANGE: EXCEL_UPDATE_SHAREPOINT_RANGE_INPUT
  UPDATE_TABLE: EXCEL_UPDATE_TABLE_INPUT
  UPDATE_WORKSHEET: EXCEL_UPDATE_WORKSHEET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EXCEL".
 */
export type EXCEL_TOOL_OUTPUTS = {
  ADD_CHART: EXCEL_ADD_CHART_OUTPUT
  ADD_SHAREPOINT_WORKSHEET: EXCEL_ADD_SHAREPOINT_WORKSHEET_OUTPUT
  ADD_TABLE: EXCEL_ADD_TABLE_OUTPUT
  ADD_TABLE_COLUMN: EXCEL_ADD_TABLE_COLUMN_OUTPUT
  ADD_TABLE_ROW: EXCEL_ADD_TABLE_ROW_OUTPUT
  ADD_WORKBOOK_PERMISSION: EXCEL_ADD_WORKBOOK_PERMISSION_OUTPUT
  ADD_WORKSHEET: EXCEL_ADD_WORKSHEET_OUTPUT
  APPLY_TABLE_FILTER: EXCEL_APPLY_TABLE_FILTER_OUTPUT
  APPLY_TABLE_SORT: EXCEL_APPLY_TABLE_SORT_OUTPUT
  CLEAR_RANGE: EXCEL_CLEAR_RANGE_OUTPUT
  CLEAR_TABLE_FILTER: EXCEL_CLEAR_TABLE_FILTER_OUTPUT
  CLOSE_SESSION: EXCEL_CLOSE_SESSION_OUTPUT
  CONVERT_TABLE_TO_RANGE: EXCEL_CONVERT_TABLE_TO_RANGE_OUTPUT
  CREATE_WORKBOOK: EXCEL_CREATE_WORKBOOK_OUTPUT
  DELETE_TABLE_COLUMN: EXCEL_DELETE_TABLE_COLUMN_OUTPUT
  DELETE_TABLE_ROW: EXCEL_DELETE_TABLE_ROW_OUTPUT
  DELETE_WORKSHEET: EXCEL_DELETE_WORKSHEET_OUTPUT
  GET_CHART_AXIS: EXCEL_GET_CHART_AXIS_OUTPUT
  GET_CHART_DATA_LABELS: EXCEL_GET_CHART_DATA_LABELS_OUTPUT
  GET_CHART_LEGEND: EXCEL_GET_CHART_LEGEND_OUTPUT
  GET_RANGE: EXCEL_GET_RANGE_OUTPUT
  GET_SESSION: EXCEL_GET_SESSION_OUTPUT
  GET_SHAREPOINT_RANGE: EXCEL_GET_SHAREPOINT_RANGE_OUTPUT
  GET_SHAREPOINT_WORKSHEET: EXCEL_GET_SHAREPOINT_WORKSHEET_OUTPUT
  GET_TABLE_COLUMN: EXCEL_GET_TABLE_COLUMN_OUTPUT
  GET_WORKBOOK: EXCEL_GET_WORKBOOK_OUTPUT
  GET_WORKSHEET: EXCEL_GET_WORKSHEET_OUTPUT
  INSERT_RANGE: EXCEL_INSERT_RANGE_OUTPUT
  LIST_CHARTS: EXCEL_LIST_CHARTS_OUTPUT
  LIST_CHART_SERIES: EXCEL_LIST_CHART_SERIES_OUTPUT
  LIST_COMMENTS: EXCEL_LIST_COMMENTS_OUTPUT
  LIST_FILES: EXCEL_LIST_FILES_OUTPUT
  LIST_NAMED_ITEMS: EXCEL_LIST_NAMED_ITEMS_OUTPUT
  LIST_SHAREPOINT_TABLES: EXCEL_LIST_SHAREPOINT_TABLES_OUTPUT
  LIST_SHAREPOINT_WORKSHEETS: EXCEL_LIST_SHAREPOINT_WORKSHEETS_OUTPUT
  LIST_TABLES: EXCEL_LIST_TABLES_OUTPUT
  LIST_TABLE_COLUMNS: EXCEL_LIST_TABLE_COLUMNS_OUTPUT
  LIST_TABLE_ROWS: EXCEL_LIST_TABLE_ROWS_OUTPUT
  LIST_WORKBOOK_PERMISSIONS: EXCEL_LIST_WORKBOOK_PERMISSIONS_OUTPUT
  LIST_WORKSHEETS: EXCEL_LIST_WORKSHEETS_OUTPUT
  MERGE_CELLS: EXCEL_MERGE_CELLS_OUTPUT
  PROTECT_WORKSHEET: EXCEL_PROTECT_WORKSHEET_OUTPUT
  SORT_RANGE: EXCEL_SORT_RANGE_OUTPUT
  UPDATE_CHART: EXCEL_UPDATE_CHART_OUTPUT
  UPDATE_CHART_LEGEND: EXCEL_UPDATE_CHART_LEGEND_OUTPUT
  UPDATE_RANGE: EXCEL_UPDATE_RANGE_OUTPUT
  UPDATE_SHAREPOINT_RANGE: EXCEL_UPDATE_SHAREPOINT_RANGE_OUTPUT
  UPDATE_TABLE: EXCEL_UPDATE_TABLE_OUTPUT
  UPDATE_WORKSHEET: EXCEL_UPDATE_WORKSHEET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EXCEL toolkit.
 */
export const EXCEL = {
  slug: "excel",
  tools: {
    /**
     * Add a chart to a worksheet using microsoft graph api.
     */
    ADD_CHART: "EXCEL_ADD_CHART",
    /**
     * Add a new worksheet to a sharepoint excel workbook using microsoft graph sites api.
     */
    ADD_SHAREPOINT_WORKSHEET: "EXCEL_ADD_SHAREPOINT_WORKSHEET",
    /**
     * Create a table in a workbook using microsoft graph api.
     */
    ADD_TABLE: "EXCEL_ADD_TABLE",
    /**
     * Add a column to a table using microsoft graph api.
     */
    ADD_TABLE_COLUMN: "EXCEL_ADD_TABLE_COLUMN",
    /**
     * Add a row to a table using microsoft graph api.
     */
    ADD_TABLE_ROW: "EXCEL_ADD_TABLE_ROW",
    /**
     * Tool to grant access to a workbook via invite. use when you need to share a specific workbook file with designated recipients and roles.
     */
    ADD_WORKBOOK_PERMISSION: "EXCEL_ADD_WORKBOOK_PERMISSION",
    /**
     * Add a new worksheet to an excel workbook using microsoft graph api.
     */
    ADD_WORKSHEET: "EXCEL_ADD_WORKSHEET",
    /**
     * Apply a filter to a table column using microsoft graph api.
     */
    APPLY_TABLE_FILTER: "EXCEL_APPLY_TABLE_FILTER",
    /**
     * Apply a sort to a table using microsoft graph api.
     */
    APPLY_TABLE_SORT: "EXCEL_APPLY_TABLE_SORT",
    /**
     * Tool to clear values, formats, or contents in a specified worksheet range. use when you need to reset cells before adding new data.
     */
    CLEAR_RANGE: "EXCEL_CLEAR_RANGE",
    /**
     * Clear a filter from a table column using microsoft graph api.
     */
    CLEAR_TABLE_FILTER: "EXCEL_CLEAR_TABLE_FILTER",
    /**
     * Tool to close an existing excel workbook session. use when you need to explicitly end a persistent session to release workbook locks.
     */
    CLOSE_SESSION: "EXCEL_CLOSE_SESSION",
    /**
     * Convert a table to a range using microsoft graph api.
     */
    CONVERT_TABLE_TO_RANGE: "EXCEL_CONVERT_TABLE_TO_RANGE",
    /**
     * Tool to create a new workbook file at a specified drive path. use when uploading a new .xlsx file to onedrive.
     */
    CREATE_WORKBOOK: "EXCEL_CREATE_WORKBOOK",
    /**
     * Delete a column from a table using microsoft graph api.
     */
    DELETE_TABLE_COLUMN: "EXCEL_DELETE_TABLE_COLUMN",
    /**
     * Delete a row from a table using microsoft graph api.
     */
    DELETE_TABLE_ROW: "EXCEL_DELETE_TABLE_ROW",
    /**
     * Tool to delete a worksheet from the workbook. use when cleaning up unused or temporary sheets after verifying no dependencies exist. example: "delete 'sheet2' after review."
     */
    DELETE_WORKSHEET: "EXCEL_DELETE_WORKSHEET",
    /**
     * Tool to retrieve a specific axis from a chart. use when you need properties like min, max, interval, and formatting of the chart axis.
     */
    GET_CHART_AXIS: "EXCEL_GET_CHART_AXIS",
    /**
     * Tool to retrieve the data labels object of a chart. use when you need to inspect label settings like position, separator, and visibility flags after creating or updating a chart.
     */
    GET_CHART_DATA_LABELS: "EXCEL_GET_CHART_DATA_LABELS",
    /**
     * Tool to retrieve the legend object of a chart. use after creating or updating a chart when you need to inspect legend visibility and formatting.
     */
    GET_CHART_LEGEND: "EXCEL_GET_CHART_LEGEND",
    /**
     * Get a range from a worksheet using microsoft graph api.
     */
    GET_RANGE: "EXCEL_GET_RANGE",
    /**
     * Create a session for an excel workbook using microsoft graph api.
     */
    GET_SESSION: "EXCEL_GET_SESSION",
    /**
     * Get a range from a worksheet in sharepoint using microsoft graph sites api.
     */
    GET_SHAREPOINT_RANGE: "EXCEL_GET_SHAREPOINT_RANGE",
    /**
     * Get a worksheet by name or id from a sharepoint excel workbook using microsoft graph sites api.
     */
    GET_SHAREPOINT_WORKSHEET: "EXCEL_GET_SHAREPOINT_WORKSHEET",
    /**
     * Tool to retrieve a specific column from a workbook table. use when you need to fetch column properties and data by its id or name.
     */
    GET_TABLE_COLUMN: "EXCEL_GET_TABLE_COLUMN",
    /**
     * Tool to retrieve the properties and relationships of a workbook. use when you need to inspect comments, names, tables, or worksheets.
     */
    GET_WORKBOOK: "EXCEL_GET_WORKBOOK",
    /**
     * Get a worksheet by name or id from an excel workbook using microsoft graph api.
     */
    GET_WORKSHEET: "EXCEL_GET_WORKSHEET",
    /**
     * Tool to insert a new cell range into a worksheet, shifting existing cells down or right. use when you need to create space for new content without overwriting.
     */
    INSERT_RANGE: "EXCEL_INSERT_RANGE",
    /**
     * List charts in a worksheet using microsoft graph api.
     */
    LIST_CHARTS: "EXCEL_LIST_CHARTS",
    /**
     * Tool to list all data series in a chart. use when you need to enumerate chart series for further analysis.
     */
    LIST_CHART_SERIES: "EXCEL_LIST_CHART_SERIES",
    /**
     * Tool to list comments in an excel workbook. use when you need to retrieve all workbook comments via microsoft graph api.
     */
    LIST_COMMENTS: "EXCEL_LIST_COMMENTS",
    /**
     * List files and folders in a drive root or specified path.
     */
    LIST_FILES: "EXCEL_LIST_FILES",
    /**
     * List named items in a workbook using microsoft graph api.
     */
    LIST_NAMED_ITEMS: "EXCEL_LIST_NAMED_ITEMS",
    /**
     * List tables in a sharepoint worksheet using microsoft graph sites api.
     */
    LIST_SHAREPOINT_TABLES: "EXCEL_LIST_SHAREPOINT_TABLES",
    /**
     * List worksheets in an excel workbook stored in sharepoint using microsoft graph sites api.
     */
    LIST_SHAREPOINT_WORKSHEETS: "EXCEL_LIST_SHAREPOINT_WORKSHEETS",
    /**
     * List tables in a worksheet using microsoft graph api.
     */
    LIST_TABLES: "EXCEL_LIST_TABLES",
    /**
     * List columns in a table using microsoft graph api.
     */
    LIST_TABLE_COLUMNS: "EXCEL_LIST_TABLE_COLUMNS",
    /**
     * List rows in a table using microsoft graph api.
     */
    LIST_TABLE_ROWS: "EXCEL_LIST_TABLE_ROWS",
    /**
     * Tool to list permissions set on the workbook file. use when you need to see which users or links have access to a specific excel file by supplying its drive and item ids. example: "list permissions for workbook with drive id 'b!abc123' and item id '0123456789abcdef'."
     */
    LIST_WORKBOOK_PERMISSIONS: "EXCEL_LIST_WORKBOOK_PERMISSIONS",
    /**
     * List worksheets in an excel workbook using microsoft graph api.
     */
    LIST_WORKSHEETS: "EXCEL_LIST_WORKSHEETS",
    /**
     * Merge cells in a worksheet range using microsoft graph api.
     */
    MERGE_CELLS: "EXCEL_MERGE_CELLS",
    /**
     * Tool to protect a worksheet using optional protection options. use when you need to prevent editing certain parts of a sheet before sharing. example: "protect 'sheet1' to lock formatting and sorting."
     */
    PROTECT_WORKSHEET: "EXCEL_PROTECT_WORKSHEET",
    /**
     * Sort a range in a worksheet using microsoft graph api.
     */
    SORT_RANGE: "EXCEL_SORT_RANGE",
    /**
     * Update a chart in a worksheet using microsoft graph api.
     */
    UPDATE_CHART: "EXCEL_UPDATE_CHART",
    /**
     * Tool to update formatting or position of a chart legend. use when adjusting legend settings after confirming chart and worksheet exist.
     */
    UPDATE_CHART_LEGEND: "EXCEL_UPDATE_CHART_LEGEND",
    /**
     * Update a range in a worksheet using microsoft graph api.
     */
    UPDATE_RANGE: "EXCEL_UPDATE_RANGE",
    /**
     * Update a range in a sharepoint worksheet using microsoft graph sites api.
     */
    UPDATE_SHAREPOINT_RANGE: "EXCEL_UPDATE_SHAREPOINT_RANGE",
    /**
     * Update a table in a workbook using microsoft graph api.
     */
    UPDATE_TABLE: "EXCEL_UPDATE_TABLE",
    /**
     * Update worksheet properties (name, position) in an excel workbook using microsoft graph api.
     */
    UPDATE_WORKSHEET: "EXCEL_UPDATE_WORKSHEET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EXCEL".
 */
export type EXCEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EXCEL".
 */
export type EXCEL_TRIGGER_EVENTS = {}
