import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_ENRICHMENT tool input.
 */
type GOOGLESUPER_ADD_ENRICHMENT_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album where the enrichment is to be added
   */
  albumId?: string;
  /**
   * Album Position
   * @description Position in the album where the enrichment is to be inserted. Valid options are: POSITION_TYPE_UNSPECIFIED, FIRST_IN_ALBUM, LAST_IN_ALBUM, AFTER_MEDIA_ITEM, AFTER_ENRICHMENT_ITEM
   */
  albumPosition?: {
      /**
       * Position
       * @description Type of position, for a media or enrichment item
       * @enum {string}
       */
      position: "POSITION_TYPE_UNSPECIFIED" | "FIRST_IN_ALBUM" | "LAST_IN_ALBUM" | "AFTER_MEDIA_ITEM" | "AFTER_ENRICHMENT_ITEM";
      /**
       * Relative Enrichment Item Id
       * @description The enrichment item to which the position is relative to. Only used when position type is AFTER_ENRICHMENT_ITEM
       */
      relativeEnrichmentItemId?: string;
      /**
       * Relative Media Item Id
       * @description The media item to which the position is relative to. Only used when position type is AFTER_MEDIA_ITEM
       */
      relativeMediaItemId?: string;
  };
  /**
   * New Enrichment Item
   * @description The enrichment to be added, can be a text, location, or map enrichment
   */
  newEnrichmentItem?: {
      /** Location Enrichment */
      locationEnrichment?: {
          /**
           * Location
           * @description Location for this enrichment item
           */
          location: {
              /**
               * Latlng
               * @description Position of the location on the map
               */
              latlng: {
                  /**
                   * Latitude
                   * @description Latitude in degrees
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees
                   */
                  longitude: number;
              };
              /**
               * Location Name
               * @description Name of the location to be displayed
               */
              locationName: string;
          };
      };
      /** Map Enrichment */
      mapEnrichment?: {
          /**
           * Destination
           * @description Destination location for this enrichment item
           */
          destination: {
              /**
               * Latlng
               * @description Position of the location on the map
               */
              latlng: {
                  /**
                   * Latitude
                   * @description Latitude in degrees
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees
                   */
                  longitude: number;
              };
              /**
               * Location Name
               * @description Name of the location to be displayed
               */
              locationName: string;
          };
          /**
           * Origin
           * @description Origin location for this enrichment item
           */
          origin: {
              /**
               * Latlng
               * @description Position of the location on the map
               */
              latlng: {
                  /**
                   * Latitude
                   * @description Latitude in degrees
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees
                   */
                  longitude: number;
              };
              /**
               * Location Name
               * @description Name of the location to be displayed
               */
              locationName: string;
          };
      };
      /** Text Enrichment */
      textEnrichment?: {
          /**
           * Text
           * @description Text for this enrichment item
           */
          text: string;
      };
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_ENRICHMENT tool output.
 */
type GOOGLESUPER_ADD_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Enrichment Item
       * @description The created enrichment item
       */
      enrichmentItem: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE tool input.
 */
type GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE_INPUT = {
  /**
   * Domain
   * @description Domain to grant permission to (e.g., 'example.com'). Required if 'type' is 'domain'.
   * @default null
   */
  domain: string | null;
  /**
   * Email Address
   * @description Email address of the user or group. Required if 'type' is 'user' or 'group'.
   * @default null
   */
  email_address: string | null;
  /**
   * File Id
   * @description Unique identifier of the file to update sharing settings for.
   */
  file_id?: string;
  /**
   * Role
   * @description Permission role to grant.
   */
  role?: string;
  /**
   * Type
   * @description Type of grantee for the permission.
   */
  type?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE tool output.
 */
type GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow File Discovery
       * @description Whether the permission allows the file to be discovered through search.
       * @default null
       */
      allowFileDiscovery: boolean | null;
      /**
       * Deleted
       * @description Whether the account associated with this permission has been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description The display name of the user or group to which this permission refers.
       * @default null
       */
      displayName: string | null;
      /**
       * Domain
       * @description The domain to which this permission refers.
       * @default null
       */
      domain: string | null;
      /**
       * Email Address
       * @description The email address of the user or group to which this permission refers.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Expiration Time
       * @description The time at which this permission will expire (RFC 3339 date-time).
       * @default null
       */
      expirationTime: string | null;
      /**
       * Id
       * @description The ID of the permission.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: 'drive#permission'.
       */
      kind: string;
      /**
       * Permission Details
       * @description Details of the permission.
       * @default null
       */
      permissionDetails: {
          /**
           * Inherited
           * @description Whether this permission is inherited.
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @description The ID of the item from which this permission is inherited.
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Permission Type
           * @description The type of the permission: 'user', 'group', 'domain', 'anyone'.
           * @default null
           */
          permissionType: string | null;
          /**
           * Role
           * @description The role granted by this permission.
           * @default null
           */
          role: string | null;
      }[] | null;
      /**
       * Photo Link
       * @description A link to the user's profile photo, if available.
       * @default null
       */
      photoLink: string | null;
      /**
       * Role
       * @description The role granted by this permission.
       */
      role: string;
      /**
       * Team Drive Permission Details
       * @description Details of whether the permissions on this Team Drive item are inherited or directly on this item.
       * @default null
       */
      teamDrivePermissionDetails: {
          /**
           * Inherited
           * @description Whether this permission is inherited.
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @description The ID of the item from which this permission is inherited.
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Role
           * @description The role granted by this permission.
           * @default null
           */
          role: string | null;
          /**
           * Team Drive Permission Type
           * @description The type of the permission: 'file', 'member'.
           * @default null
           */
          teamDrivePermissionType: string | null;
      }[] | null;
      /**
       * Type
       * @description The type of the grantee.
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
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_LABEL_TO_EMAIL tool input.
 */
type GOOGLESUPER_ADD_LABEL_TO_EMAIL_INPUT = {
  /**
   * Add Label Ids
   * @description Label IDs to add. For custom labels, obtain IDs via 'listLabels'. System labels (e.g., 'INBOX', 'SPAM') can also be used.
   * @default []
   */
  add_label_ids: string[];
  /**
   * Message Id
   * @description Immutable ID of the message to modify (e.g., from 'fetchEmails' or 'fetchMessagesByThreadId').
   */
  message_id?: string;
  /**
   * Remove Label Ids
   * @description Label IDs to remove. For custom labels, obtain IDs via 'listLabels'. System labels can also be used.
   * @default []
   */
  remove_label_ids: string[];
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_LABEL_TO_EMAIL tool output.
 */
type GOOGLESUPER_ADD_LABEL_TO_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full `Message` resource with updated labels.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST tool input.
 */
type GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST_INPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST tool output.
 */
type GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST_OUTPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_SHEET tool input.
 */
type GOOGLESUPER_ADD_SHEET_INPUT = {
  /**
   * Include Spreadsheet In Response
   * @description Whether the response should include the entire spreadsheet resource. Defaults to false.
   * @default false
   */
  includeSpreadsheetInResponse: boolean | null;
  /**
   * SheetProperties
   * @description The properties the new sheet should have. All properties are optional. If none are specified, a default sheet will be created.
   * @default null
   */
  properties: {
      /**
       * GridProperties
       * @description Additional properties of the sheet if it's a grid sheet.
       * @default null
       */
      gridProperties: {
          /**
           * Column Count
           * @description The number of columns in the sheet.
           * @default null
           */
          columnCount: number | null;
          /**
           * Column Group Control After
           * @description True if the column group control toggle is shown after the group, false if before.
           * @default null
           */
          columnGroupControlAfter: boolean | null;
          /**
           * Frozen Column Count
           * @description The number of columns that are frozen in the sheet.
           * @default null
           */
          frozenColumnCount: number | null;
          /**
           * Frozen Row Count
           * @description The number of rows that are frozen in the sheet.
           * @default null
           */
          frozenRowCount: number | null;
          /**
           * Hide Gridlines
           * @description True if the gridlines are hidden, false if they are shown.
           * @default null
           */
          hideGridlines: boolean | null;
          /**
           * Row Count
           * @description The number of rows in the sheet.
           * @default null
           */
          rowCount: number | null;
          /**
           * Row Group Control After
           * @description True if the row group control toggle is shown after the group, false if before.
           * @default null
           */
          rowGroupControlAfter: boolean | null;
      } | null;
      /**
       * Hidden
       * @description True if the sheet is hidden in the UI, false if it's visible.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Index
       * @description The zero-based index of the sheet in the spreadsheet. Example: 0 for the first sheet.
       * @default null
       */
      index: number | null;
      /**
       * Right To Left
       * @description True if the sheet is an RTL sheet, false if it's LTR.
       * @default null
       */
      rightToLeft: boolean | null;
      /**
       * Sheet Id
       * @description The ID of the sheet. If not set, an ID will be randomly generated. Must be non-negative if set.
       * @default null
       */
      sheetId: number | null;
      /**
       * SheetType
       * @description The type of sheet.
       * @default GRID
       * @enum {string|null}
       */
      sheetType: "GRID" | "OBJECT" | "DATA_SOURCE" | null;
      /**
       * ColorStyle
       * @description The color of the sheet tab.
       * @default null
       */
      tabColorStyle: {
          /**
           * Color
           * @description RGB color. If specified, themeColor must not be set.
           * @default null
           */
          rgbColor: {
              /**
               * Alpha
               * @description The fraction of this color that should be applied to the pixel. E.g. 0.5 for 50% transparent.
               * @default null
               */
              alpha: number | null;
              /**
               * Blue
               * @description The amount of blue in the color as a value in the interval [0, 1].
               * @default null
               */
              blue: number | null;
              /**
               * Green
               * @description The amount of green in the color as a value in the interval [0, 1].
               * @default null
               */
              green: number | null;
              /**
               * Red
               * @description The amount of red in the color as a value in the interval [0, 1].
               * @default null
               */
              red: number | null;
          } | null;
          /**
           * ThemeColorType
           * @description Theme color. If specified, rgbColor must not be set.
           * @default null
           * @enum {string|null}
           */
          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED" | "TEXT" | "BACKGROUND" | "ACCENT1" | "ACCENT2" | "ACCENT3" | "ACCENT4" | "ACCENT5" | "ACCENT6" | "LINK" | null;
      } | null;
      /**
       * Title
       * @description The name of the sheet. Example: "Q3 Report"
       * @default null
       */
      title: string | null;
  } | null;
  /**
   * Response Include Grid Data
   * @description True if grid data should be returned. This parameter is ignored if includeSpreadsheetInResponse is false. Defaults to false.
   * @default false
   */
  responseIncludeGridData: boolean | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to add the sheet to. This is the long string of characters in the URL of your Google Sheet.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_ADD_SHEET tool output.
 */
type GOOGLESUPER_ADD_SHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies to the batch update. For AddSheet, it contains the properties of the new sheet.
       */
      replies: {
          /** Add Sheet */
          addSheet: {
              /**
               * GridProperties
               * @default null
               */
              gridProperties: {
                  /**
                   * Column Count
                   * @description The number of columns in the sheet.
                   * @default null
                   */
                  columnCount: number | null;
                  /**
                   * Column Group Control After
                   * @description True if the column group control toggle is shown after the group, false if before.
                   * @default null
                   */
                  columnGroupControlAfter: boolean | null;
                  /**
                   * Frozen Column Count
                   * @description The number of columns that are frozen in the sheet.
                   * @default null
                   */
                  frozenColumnCount: number | null;
                  /**
                   * Frozen Row Count
                   * @description The number of rows that are frozen in the sheet.
                   * @default null
                   */
                  frozenRowCount: number | null;
                  /**
                   * Hide Gridlines
                   * @description True if the gridlines are hidden, false if they are shown.
                   * @default null
                   */
                  hideGridlines: boolean | null;
                  /**
                   * Row Count
                   * @description The number of rows in the sheet.
                   * @default null
                   */
                  rowCount: number | null;
                  /**
                   * Row Group Control After
                   * @description True if the row group control toggle is shown after the group, false if before.
                   * @default null
                   */
                  rowGroupControlAfter: boolean | null;
              } | null;
              /**
               * Hidden
               * @default null
               */
              hidden: boolean | null;
              /** Index */
              index: number;
              /**
               * Right To Left
               * @default null
               */
              rightToLeft: boolean | null;
              /** Sheet Id */
              sheetId: number;
              /**
               * Sheet Type
               * @enum {string}
               */
              sheetType: "GRID" | "OBJECT" | "DATA_SOURCE";
              /**
               * ColorStyle
               * @default null
               */
              tabColorStyle: {
                  /**
                   * Color
                   * @description RGB color. If specified, themeColor must not be set.
                   * @default null
                   */
                  rgbColor: {
                      /**
                       * Alpha
                       * @description The fraction of this color that should be applied to the pixel. E.g. 0.5 for 50% transparent.
                       * @default null
                       */
                      alpha: number | null;
                      /**
                       * Blue
                       * @description The amount of blue in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      blue: number | null;
                      /**
                       * Green
                       * @description The amount of green in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      green: number | null;
                      /**
                       * Red
                       * @description The amount of red in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      red: number | null;
                  } | null;
                  /**
                   * ThemeColorType
                   * @description Theme color. If specified, rgbColor must not be set.
                   * @default null
                   * @enum {string|null}
                   */
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED" | "TEXT" | "BACKGROUND" | "ACCENT1" | "ACCENT2" | "ACCENT3" | "ACCENT4" | "ACCENT5" | "ACCENT6" | "LINK" | null;
              } | null;
              /** Title */
              title: string;
          };
          /**
           * Updated Spreadsheet
           * @description The spreadsheet resource, if includeSpreadsheetInResponse was true.
           * @default null
           */
          updatedSpreadsheet: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet the sheet was added to.
       */
      spreadsheetId: string;
      /**
       * Updated Spreadsheet
       * @description The spreadsheet resource, if includeSpreadsheetInResponse was true.
       * @default null
       */
      updatedSpreadsheet: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_AGGREGATE_COLUMN_DATA tool input.
 */
type GOOGLESUPER_AGGREGATE_COLUMN_DATA_INPUT = {
  /**
   * Case Sensitive
   * @description Whether the search should be case-sensitive.
   * @default true
   */
  case_sensitive: boolean;
  /**
   * Has Header Row
   * @description Whether the first row contains column headers. If True, column names can be used for search_column and target_column.
   * @default true
   */
  has_header_row: boolean;
  /**
   * Operation
   * @description The mathematical operation to perform on the target column values.
   * @enum {string}
   */
  operation?: "sum" | "average" | "count" | "min" | "max" | "percentage";
  /**
   * Percentage Total
   * @description For percentage operation, the total value to calculate percentage against. If not provided, uses sum of all values in target column.
   * @default null
   */
  percentage_total: number | null;
  /**
   * Search Column
   * @description The column to search in. Can be a letter (e.g., 'A', 'B') or column name from header row (e.g., 'Region', 'Department').
   */
  search_column?: string;
  /**
   * Search Value
   * @description The exact value to search for in the search column. Case-sensitive by default.
   */
  search_value?: string;
  /**
   * Sheet Name
   * @description The name of the specific sheet within the spreadsheet.
   */
  sheet_name?: string;
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Sheets spreadsheet.
   */
  spreadsheet_id?: string;
  /**
   * Target Column
   * @description The column to aggregate data from. Can be a letter (e.g., 'C', 'D') or column name from header row (e.g., 'Sales', 'Revenue').
   */
  target_column?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_AGGREGATE_COLUMN_DATA tool output.
 */
type GOOGLESUPER_AGGREGATE_COLUMN_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Matching Rows Count
       * @description Number of rows that matched the search criteria.
       */
      matching_rows_count: number;
      /**
       * Operation
       * @description The operation that was performed.
       */
      operation: string;
      /**
       * Processed Values Count
       * @description Number of non-empty numeric values that were processed.
       */
      processed_values_count: number;
      /**
       * Result
       * @description The result of the aggregation operation.
       */
      result: number;
      /**
       * Search Details
       * @description Details about the search performed, including column names and values.
       */
      search_details: {
          [key: string]: unknown;
      };
      /**
       * Values Processed
       * @description The actual numeric values that were processed (useful for debugging).
       * @default []
       */
      values_processed: number[];
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
 * Type of GOOGLESUPER's GOOGLESUPER_APPEND_DIMENSION tool input.
 */
type GOOGLESUPER_APPEND_DIMENSION_INPUT = {
  /**
   * Dimension
   * @description Specifies whether to append rows or columns.
   * @enum {string}
   */
  dimension?: "ROWS" | "COLUMNS";
  /**
   * Length
   * @description The number of rows or columns to append.
   */
  length?: number;
  /**
   * Sheet Id
   * @description The ID of the sheet to append rows or columns to.
   */
  sheet_id?: number;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_APPEND_DIMENSION tool output.
 */
type GOOGLESUPER_APPEND_DIMENSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. Since this action performs a single appendDimension request, this list will typically contain one reply corresponding to that request.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       * @default null
       */
      spreadsheet_id: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS tool input.
 */
type GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS_INPUT = {
  /**
   * Album Id
   * @description Identifier of the Album that the media items are added to
   */
  albumId?: string;
  /**
   * Media Item Ids
   * @description Identifiers of the MediaItems to be added. Maximum 50 items.
   */
  mediaItemIds?: string[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS tool output.
 */
type GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @default Successfully added media items to album
       */
      message: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS tool input.
 */
type GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album where the media items are to be added.
   */
  albumId?: string;
  /**
   * Album Position
   * @description Position in the album to add the media items.
   */
  albumPosition?: {
      /**
       * Position
       * @default LAST_IN_ALBUM
       * @enum {string}
       */
      position: "POSITION_TYPE_UNSPECIFIED" | "FIRST_IN_ALBUM" | "LAST_IN_ALBUM" | "AFTER_MEDIA_ITEM" | "AFTER_ENRICHMENT_ITEM";
      /**
       * Relative Enrichment Item Id
       * @description The enrichment item to which the position is relative.
       */
      relativeEnrichmentItemId?: string;
      /**
       * Relative Media Item Id
       * @description The media item to which the position is relative.
       */
      relativeMediaItemId?: string;
  };
  /**
   * Files
   * @description List of media files to upload and create as media items.
   */
  files?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  }[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS tool output.
 */
type GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * New Media Item Results
       * @description List of results for the created media items.
       */
      newMediaItemResults: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_GET tool input.
 */
type GOOGLESUPER_BATCH_GET_INPUT = {
  /**
   * Ranges
   * @description A list of cell ranges in A1 notation (e.g., 'Sheet1!A1:B2', 'A1:C5') from which to retrieve data. If this list is omitted or empty, all data from the first sheet of the spreadsheet will be fetched. A range can specify a sheet name (e.g., 'Sheet2!A:A'); if no sheet name is provided in a range string (e.g., 'A1:B2'), it defaults to the first sheet.
   */
  ranges?: string[];
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet from which data will be retrieved.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_GET tool output.
 */
type GOOGLESUPER_BATCH_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet Data
       * @description A dictionary containing the retrieved data. It includes the `spreadsheetId`. The `valueRanges` key holds the cell data: this is a list of value range objects if specific `ranges` were requested, or a single value range object representing all data from the first sheet if `ranges` were omitted.
       */
      spreadsheet_data?: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_GET_MEDIA_ITEMS tool input.
 */
type GOOGLESUPER_BATCH_GET_MEDIA_ITEMS_INPUT = {
  /**
   * Media Item Ids
   * @description Identifiers of the media items to be requested. Must not contain duplicates.
   */
  mediaItemIds?: string[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_GET_MEDIA_ITEMS tool output.
 */
type GOOGLESUPER_BATCH_GET_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Item Results
       * @description List of media items retrieved. May include status for failed items.
       */
      mediaItemResults: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_UPDATE tool input.
 */
type GOOGLESUPER_BATCH_UPDATE_INPUT = {
  /**
   * First Cell Location
   * @description The starting cell for the update range, specified in A1 notation (e.g., 'A1', 'B2'). The update will extend from this cell to the right and down, based on the provided values. If omitted, values are appended to the sheet.
   */
  first_cell_location?: string;
  /**
   * Include Values In Response
   * @description If set to True, the response will include the updated values from the spreadsheet.
   * @default false
   */
  includeValuesInResponse: boolean;
  /**
   * Sheet Name
   * @description The name of the specific sheet within the spreadsheet to update.
   */
  sheet_name?: string;
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Sheets spreadsheet to be updated.
   */
  spreadsheet_id?: string;
  /**
   * Value Input Option
   * @description How input data is interpreted. 'USER_ENTERED': Values parsed as if typed by a user (e.g., strings may become numbers/dates, formulas are calculated); recommended for formulas. 'RAW': Values stored as-is without parsing (e.g., '123' stays string, '=SUM(A1:B1)' stays string).
   * @default USER_ENTERED
   * @enum {string}
   */
  valueInputOption: "RAW" | "USER_ENTERED";
  /**
   * Values
   * @description A 2D list of cell values. Each inner list represents a row. Values can be strings, numbers, or booleans. Ensure columns are properly aligned across rows.
   */
  values?: (string | number | boolean)[][];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_UPDATE tool output.
 */
type GOOGLESUPER_BATCH_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet
       * @description Contains details of the update operation, such as spreadsheet ID, updated range, and counts of updated rows, columns, and cells. This is included if `includeValuesInResponse` was true in the request and the update was successful.
       */
      spreadsheet?: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER tool input.
 */
type GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER_INPUT = {
  /**
   * Data
   * @description The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges.
   */
  data?: {
      /**
       * Data Filter
       * @description The data filter describing the criteria to select cells for update.
       */
      dataFilter: {
          /**
           * A1 Range
           * @description The A1 notation of the range to update.
           * @default null
           */
          a1Range: string | null;
          /**
           * DeveloperMetadataLookup
           * @description Matches the data against the developer metadata that's associated with the dimensions. The developer metadata should be created with the location type set to either ROW or COLUMN and the visibility set to DOCUMENT.
           * @default null
           */
          developerMetadataLookup: {
              /**
               * Location Matching Strategy
               * @description Determines how this lookup matches the location. If this field is specified as EXACT, then the lookup requires an exact match of the specified locationType, metadataKey, and metadataValue. If this field is specified as INTERSECTING, then the lookup considers all metadata that intersects the specified locationType, and then filters that metadata by the specified key and value. If this field is unspecified, it is treated as EXACT.
               * @default null
               * @enum {string|null}
               */
              locationMatchingStrategy: "EXACT" | "INTERSECTING" | null;
              /**
               * Location Type
               * @description The type of location this object is looking for. Valid values are ROW, COLUMN, and SHEET.
               * @default null
               * @enum {string|null}
               */
              locationType: "ROW" | "COLUMN" | "SHEET" | null;
              /**
               * Metadata Id
               * @description The ID of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified ID.
               * @default null
               */
              metadataId: number | null;
              /**
               * Metadata Key
               * @description The key of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified key.
               * @default null
               */
              metadataKey: string | null;
              /**
               * DeveloperMetadataLocation
               * @description The location of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata in the specified location.
               * @default null
               */
              metadataLocation: {
                  /**
                   * Dimension Range
                   * @description A range along a single dimension on a sheet. All indexes are 0-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
                   * @default null
                   */
                  dimensionRange: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Location Type
                   * @description The type of location this object represents. This field is read-only.
                   * @default null
                   */
                  locationType: string | null;
                  /**
                   * Sheet Id
                   * @description The ID of the sheet the location is on.
                   * @default null
                   */
                  sheetId: number | null;
                  /**
                   * Spreadsheet
                   * @description True if the metadata location is the spreadsheet itself.
                   * @default null
                   */
                  spreadsheet: boolean | null;
              } | null;
              /**
               * Metadata Value
               * @description The value of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified value.
               * @default null
               */
              metadataValue: string | null;
              /**
               * Visibility
               * @description The visibility of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified visibility.
               * @default null
               */
              visibility: string | null;
          } | null;
          /**
           * GridRange
           * @description Selects data within the range described by a GridRange. This field is optional. If specified, the dataFilter selects data within the specified grid range.
           * @default null
           */
          gridRange: {
              /**
               * End Column Index
               * @description The end column (exclusive) of the range, or not set if unbounded.
               * @default null
               */
              endColumnIndex: number | null;
              /**
               * End Row Index
               * @description The end row (exclusive) of the range, or not set if unbounded.
               * @default null
               */
              endRowIndex: number | null;
              /**
               * Sheet Id
               * @description The sheet this range is on.
               * @default null
               */
              sheetId: number | null;
              /**
               * Start Column Index
               * @description The start column (inclusive) of the range, or not set if unbounded.
               * @default null
               */
              startColumnIndex: number | null;
              /**
               * Start Row Index
               * @description The start row (inclusive) of the range, or not set if unbounded.
               * @default null
               */
              startRowIndex: number | null;
          } | null;
      };
      /**
       * Major Dimension
       * @description The major dimension of the values. The default value is ROWS.
       * @default ROWS
       * @enum {string|null}
       */
      majorDimension: "ROWS" | "COLUMNS" | "DIMENSION_UNSPECIFIED" | null;
      /**
       * Values
       * @description The data to be written. A two-dimensional array of values that will be written to the range. Values can be strings, numbers, or booleans. If the range is larger than the values array, the excess cells will not be changed. If the values array is larger than the range, the excess values will be ignored.
       */
      values: (string | number | boolean)[][];
  }[];
  /**
   * Include Values In Response
   * @description Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values.
   * @default false
   */
  includeValuesInResponse: boolean | null;
  /**
   * Response Date Time Render Option
   * @description Determines how dates, times, and durations in the response should be rendered. This is ignored if responseValueRenderOption is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
   * @default SERIAL_NUMBER
   * @enum {string|null}
   */
  responseDateTimeRenderOption: "SERIAL_NUMBER" | "FORMATTED_STRING" | null;
  /**
   * Response Value Render Option
   * @description Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
   * @default FORMATTED_VALUE
   * @enum {string|null}
   */
  responseValueRenderOption: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA" | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to update.
   */
  spreadsheetId?: string;
  /**
   * Value Input Option
   * @description How the input data should be interpreted.
   * @enum {string}
   */
  valueInputOption?: "RAW" | "USER_ENTERED";
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER tool output.
 */
type GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Responses
       * @description The response for each DataFilterValueRange updated.
       * @default null
       */
      responses: {
          /**
           * DataFilter
           * @description The DataFilter that selected the cells to update.
           * @default null
           */
          dataFilter: {
              /**
               * A1 Range
               * @description The A1 notation of the range to update.
               * @default null
               */
              a1Range: string | null;
              /**
               * DeveloperMetadataLookup
               * @description Matches the data against the developer metadata that's associated with the dimensions. The developer metadata should be created with the location type set to either ROW or COLUMN and the visibility set to DOCUMENT.
               * @default null
               */
              developerMetadataLookup: {
                  /**
                   * Location Matching Strategy
                   * @description Determines how this lookup matches the location. If this field is specified as EXACT, then the lookup requires an exact match of the specified locationType, metadataKey, and metadataValue. If this field is specified as INTERSECTING, then the lookup considers all metadata that intersects the specified locationType, and then filters that metadata by the specified key and value. If this field is unspecified, it is treated as EXACT.
                   * @default null
                   * @enum {string|null}
                   */
                  locationMatchingStrategy: "EXACT" | "INTERSECTING" | null;
                  /**
                   * Location Type
                   * @description The type of location this object is looking for. Valid values are ROW, COLUMN, and SHEET.
                   * @default null
                   * @enum {string|null}
                   */
                  locationType: "ROW" | "COLUMN" | "SHEET" | null;
                  /**
                   * Metadata Id
                   * @description The ID of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified ID.
                   * @default null
                   */
                  metadataId: number | null;
                  /**
                   * Metadata Key
                   * @description The key of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified key.
                   * @default null
                   */
                  metadataKey: string | null;
                  /**
                   * DeveloperMetadataLocation
                   * @description The location of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata in the specified location.
                   * @default null
                   */
                  metadataLocation: {
                      /**
                       * Dimension Range
                       * @description A range along a single dimension on a sheet. All indexes are 0-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
                       * @default null
                       */
                      dimensionRange: {
                          [key: string]: unknown;
                      } | null;
                      /**
                       * Location Type
                       * @description The type of location this object represents. This field is read-only.
                       * @default null
                       */
                      locationType: string | null;
                      /**
                       * Sheet Id
                       * @description The ID of the sheet the location is on.
                       * @default null
                       */
                      sheetId: number | null;
                      /**
                       * Spreadsheet
                       * @description True if the metadata location is the spreadsheet itself.
                       * @default null
                       */
                      spreadsheet: boolean | null;
                  } | null;
                  /**
                   * Metadata Value
                   * @description The value of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified value.
                   * @default null
                   */
                  metadataValue: string | null;
                  /**
                   * Visibility
                   * @description The visibility of the developer metadata to match. This field is optional. If specified, the lookup matches only the developer metadata with the specified visibility.
                   * @default null
                   */
                  visibility: string | null;
              } | null;
              /**
               * GridRange
               * @description Selects data within the range described by a GridRange. This field is optional. If specified, the dataFilter selects data within the specified grid range.
               * @default null
               */
              gridRange: {
                  /**
                   * End Column Index
                   * @description The end column (exclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  endColumnIndex: number | null;
                  /**
                   * End Row Index
                   * @description The end row (exclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  endRowIndex: number | null;
                  /**
                   * Sheet Id
                   * @description The sheet this range is on.
                   * @default null
                   */
                  sheetId: number | null;
                  /**
                   * Start Column Index
                   * @description The start column (inclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  startColumnIndex: number | null;
                  /**
                   * Start Row Index
                   * @description The start row (inclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  startRowIndex: number | null;
              } | null;
          } | null;
          /**
           * Updated Cells
           * @description The number of cells updated.
           * @default null
           */
          updatedCells: number | null;
          /**
           * Updated Columns
           * @description The number of columns updated.
           * @default null
           */
          updatedColumns: number | null;
          /**
           * Updated Data
           * @description The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if the request's includeValuesInResponse field was true.
           * @default null
           */
          updatedData: {
              [key: string]: unknown;
          } | null;
          /**
           * Updated Range
           * @description The range (in A1 notation) that updates were applied to.
           * @default null
           */
          updatedRange: string | null;
          /**
           * Updated Rows
           * @description The number of rows updated.
           * @default null
           */
          updatedRows: number | null;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet that data was updated in.
       * @default null
       */
      spreadsheetId: string | null;
      /**
       * Total Updated Cells
       * @description The total number of cells updated.
       * @default null
       */
      totalUpdatedCells: number | null;
      /**
       * Total Updated Columns
       * @description The total number of columns updated.
       * @default null
       */
      totalUpdatedColumns: number | null;
      /**
       * Total Updated Rows
       * @description The total number of rows updated.
       * @default null
       */
      totalUpdatedRows: number | null;
      /**
       * Total Updated Sheets
       * @description The total number of sheets updated.
       * @default null
       */
      totalUpdatedSheets: number | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDARS_DELETE tool input.
 */
type GOOGLESUPER_CALENDARS_DELETE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDARS_DELETE tool output.
 */
type GOOGLESUPER_CALENDARS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message indicating the successful deletion of the calendar.
       * @default Calendar deleted successfully.
       */
      message: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDARS_UPDATE tool input.
 */
type GOOGLESUPER_CALENDARS_UPDATE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Description
   * @description Description of the calendar. Optional.
   * @default null
   */
  description: string | null;
  /**
   * Location
   * @description Geographic location of the calendar as free-form text. Optional.
   * @default null
   */
  location: string | null;
  /**
   * Summary
   * @description Title of the calendar.
   */
  summary?: string;
  /**
   * Time Zone
   * @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
   * @default null
   */
  timeZone: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDARS_UPDATE tool output.
 */
type GOOGLESUPER_CALENDARS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference Properties
       * @description The conferenceProperties of the calendar. Optional.
       * @default null
       */
      conferenceProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Description of the calendar. Optional.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description Identifier of the calendar.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource. "calendar#calendar".
       * @default null
       */
      kind: string | null;
      /**
       * Location
       * @description Geographic location of the calendar as free-form text. Optional.
       * @default null
       */
      location: string | null;
      /**
       * Summary
       * @description Title of the calendar.
       * @default null
       */
      summary: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
       * @default null
       */
      timeZone: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDAR_LIST_INSERT tool input.
 */
type GOOGLESUPER_CALENDAR_LIST_INSERT_INPUT = {
  /**
   * Background Color
   * @description The background color of the calendar in the Web UI. (Hexadecimal color code)
   * @default null
   */
  background_color: string | null;
  /**
   * Color Id
   * @description The color of the calendar. This is an ID referring to an entry in the calendarCore color palette.
   * @default null
   */
  color_id: string | null;
  /**
   * Color Rgb Format
   * @description Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
   * @default null
   */
  color_rgb_format: boolean | null;
  /**
   * Default Reminders
   * @description The default reminders that the authenticated user has for this calendar.
   * @default null
   */
  default_reminders: {
      /**
       * Method
       * @description The method used by this reminder (e.g., 'email', 'popup').
       */
      method: string;
      /**
       * Minutes
       * @description Number of minutes before the start of the event when the reminder should trigger.
       */
      minutes: number;
  }[] | null;
  /**
   * Foreground Color
   * @description The foreground color of the calendar in the Web UI. (Hexadecimal color code)
   * @default null
   */
  foreground_color: string | null;
  /**
   * Hidden
   * @description Whether the calendar has been hidden from the list. Default is False.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Id
   * @description The identifier of the calendar to insert.
   */
  id?: string;
  /**
   * NotificationSetting
   * @description The notifications that the authenticated user is receiving for this calendar.
   * @default null
   */
  notification_settings: {
      /**
       * Notifications
       * @description The list of notifications.
       * @default null
       */
      notifications: {
          /**
           * Method
           * @description The method used by this notification (e.g., 'email').
           */
          method: string;
          /**
           * Type
           * @description The type of notification (e.g., 'eventCreation', 'eventChange').
           */
          type: string;
      }[] | null;
  } | null;
  /**
   * Selected
   * @description Whether the calendar is selected and visible in the calendar list. Default is True.
   * @default null
   */
  selected: boolean | null;
  /**
   * Summary Override
   * @description The summary that the authenticated user has set for this calendar.
   * @default null
   */
  summary_override: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDAR_LIST_INSERT tool output.
 */
type GOOGLESUPER_CALENDAR_LIST_INSERT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The effective access role that the authenticated user has on the calendar. Read-only. Possible values are: "freeBusyReader", "reader", "writer", "owner".
       * @default null
       */
      access_role: string | null;
      /**
       * Background Color
       * @description The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property.
       * @default null
       */
      background_color: string | null;
      /**
       * Color Id
       * @description The color of the calendar. This is an ID referring to an entry in the calendarCore color palette.
       * @default null
       */
      color_id: string | null;
      /**
       * Conference Properties
       * @description The conferenceProperties of the calendar.
       * @default null
       */
      conference_properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Reminders
       * @description The default reminders that the authenticated user has for this calendar.
       * @default null
       */
      default_reminders: {
          /**
           * Method
           * @description The method used by this reminder (e.g., 'email', 'popup').
           */
          method: string;
          /**
           * Minutes
           * @description Number of minutes before the start of the event when the reminder should trigger.
           */
          minutes: number;
      }[] | null;
      /**
       * Deleted
       * @description Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Description
       * @description Description of the calendar.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Foreground Color
       * @description The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property.
       * @default null
       */
      foreground_color: string | null;
      /**
       * Hidden
       * @description Whether the calendar has been hidden from the list. Optional. The default is False.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Identifier of the calendar list entry.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource ('calendar#calendarListEntry').
       * @default null
       */
      kind: string | null;
      /**
       * Location
       * @description GeographicSigned location of the calendar like "Paris, France" or "New York, NY".
       * @default null
       */
      location: string | null;
      /**
       * NotificationSetting
       * @description The notifications that the authenticated user is receiving for this calendar.
       * @default null
       */
      notification_settings: {
          /**
           * Notifications
           * @description The list of notifications.
           * @default null
           */
          notifications: {
              /**
               * Method
               * @description The method used by this notification (e.g., 'email').
               */
              method: string;
              /**
               * Type
               * @description The type of notification (e.g., 'eventCreation', 'eventChange').
               */
              type: string;
          }[] | null;
      } | null;
      /**
       * Primary
       * @description Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
       * @default null
       */
      primary: boolean | null;
      /**
       * Selected
       * @description Whether the calendar is selected and visible in the calendar list. Optional. The default is True.
       * @default null
       */
      selected: boolean | null;
      /**
       * Summary
       * @description Title of the calendar.
       * @default null
       */
      summary: string | null;
      /**
       * Summary Override
       * @description The summary that the authenticated user has set for this calendar (if any).
       * @default null
       */
      summary_override: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
       * @default null
       */
      time_zone: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDAR_LIST_UPDATE tool input.
 */
type GOOGLESUPER_CALENDAR_LIST_UPDATE_INPUT = {
  /**
   * Background Color
   * @description Hex color for calendar background.
   * @default null
   */
  backgroundColor: string | null;
  /**
   * Calendar Id
   * @description Calendar identifier. Use "primary" for the primary calendar.
   */
  calendar_id?: string;
  /**
   * Color Id
   * @description ID for calendar color from colors endpoint.
   * @default null
   */
  colorId: string | null;
  /**
   * Color Rgb Format
   * @description Whether to use RGB for foreground/background colors.
   * @default null
   */
  colorRgbFormat: boolean | null;
  /**
   * Default Reminders
   * @description List of default reminders.
   * @default null
   */
  defaultReminders: {
      /**
       * Method
       * @description Method for the reminder (e.g., email, popup).
       */
      method: string;
      /**
       * Minutes
       * @description Minutes before event for reminder.
       */
      minutes: number;
  }[] | null;
  /**
   * Foreground Color
   * @description Hex color for calendar foreground.
   * @default null
   */
  foregroundColor: string | null;
  /**
   * Hidden
   * @description Whether calendar is hidden.
   * @default null
   */
  hidden: boolean | null;
  /**
   * NotificationSettings
   * @description Notification settings for the calendar.
   * @default null
   */
  notificationSettings: {
      /**
       * Notifications
       * @description List of notifications.
       * @default null
       */
      notifications: {
          /**
           * Method
           * @description Method for the notification (e.g., email).
           */
          method: string;
          /**
           * Type
           * @description Type of notification (e.g., eventCreation).
           */
          type: string;
      }[] | null;
  } | null;
  /**
   * Selected
   * @description Whether calendar content shows in UI.
   * @default null
   */
  selected: boolean | null;
  /**
   * Summary Override
   * @description User-set summary for the calendar.
   * @default null
   */
  summaryOverride: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CALENDAR_LIST_UPDATE tool output.
 */
type GOOGLESUPER_CALENDAR_LIST_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The effective access role that the authenticated user has on the calendar.
       * @default null
       */
      accessRole: string | null;
      /**
       * Background Color
       * @description The main color of the calendar in the hexadecimal format "#0088aa".
       * @default null
       */
      backgroundColor: string | null;
      /**
       * Color Id
       * @description The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition.
       * @default null
       */
      colorId: string | null;
      /**
       * Conference Properties
       * @description The conferenceProperties of the calendar.
       * @default null
       */
      conferenceProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Reminders
       * @description The default reminders that the authenticated user has for this calendar.
       * @default null
       */
      defaultReminders: {
          /**
           * Method
           * @description Method for the reminder (e.g., email, popup).
           */
          method: string;
          /**
           * Minutes
           * @description Minutes before event for reminder.
           */
          minutes: number;
      }[] | null;
      /**
       * Deleted
       * @description Whether the calendar has been deleted from the user\'s list. Optional.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Description
       * @description Description of the calendar. Optional.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Foreground Color
       * @description The foreground color of the calendar in the hexadecimal format "#ffffff".
       * @default null
       */
      foregroundColor: string | null;
      /**
       * Hidden
       * @description Whether the calendar has been hidden from the list. Optional.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Identifier of the calendar.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#calendarListEntry").
       * @default null
       */
      kind: string | null;
      /**
       * Location
       * @description Geographic location of the calendar as free-text. Optional.
       * @default null
       */
      location: string | null;
      /**
       * NotificationSettings
       * @description The notifications that the authenticated user is receiving for this calendar.
       * @default null
       */
      notificationSettings: {
          /**
           * Notifications
           * @description List of notifications.
           * @default null
           */
          notifications: {
              /**
               * Method
               * @description Method for the notification (e.g., email).
               */
              method: string;
              /**
               * Type
               * @description Type of notification (e.g., eventCreation).
               */
              type: string;
          }[] | null;
      } | null;
      /**
       * Primary
       * @description Whether the calendar is the primary calendar of the authenticated user. Optional.
       * @default null
       */
      primary: boolean | null;
      /**
       * Selected
       * @description Whether the calendar content shows up in the calendar UI. Optional.
       * @default null
       */
      selected: boolean | null;
      /**
       * Summary
       * @description Title of the calendar.
       * @default null
       */
      summary: string | null;
      /**
       * Summary Override
       * @description The summary that the authenticated user has set for this calendar. Optional.
       * @default null
       */
      summaryOverride: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. Optional.
       * @default null
       */
      timeZone: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_BASIC_FILTER tool input.
 */
type GOOGLESUPER_CLEAR_BASIC_FILTER_INPUT = {
  /**
   * Sheet Id
   * @description The ID of the sheet on which the basic filter should be cleared.
   */
  sheet_id?: number;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_BASIC_FILTER tool output.
 */
type GOOGLESUPER_CLEAR_BASIC_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies for each request in the batch. For a successful ClearBasicFilterRequest, the corresponding reply will be empty.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       * @default null
       */
      spreadsheet_id: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_CALENDAR tool input.
 */
type GOOGLESUPER_CLEAR_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the `calendarList.list` method. If you want to access the primary calendar of the currently logged in user, use the "`primary`" keyword.
   */
  calendar_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_CALENDAR tool output.
 */
type GOOGLESUPER_CLEAR_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the calendar was cleared.
       * @default Calendar cleared successfully.
       */
      message: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_TASKS tool input.
 */
type GOOGLESUPER_CLEAR_TASKS_INPUT = {
  /**
   * Tasklist
   * @description The identifier of the task list from which to clear completed tasks. Use '@default' for the default task list.
   */
  tasklist?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_TASKS tool output.
 */
type GOOGLESUPER_CLEAR_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary indicating the outcome of the clear operation. On successful completion (HTTP 204), it returns `{'status': 'success'}`. In case of errors, it may contain a 'message' with details from the API response.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_VALUES tool input.
 */
type GOOGLESUPER_CLEAR_VALUES_INPUT = {
  /**
   * Range
   * @description The A1 notation of the range to clear values from (e.g., 'Sheet1!A1:B2', 'MySheet!C:C', or 'A1:D5'). If the sheet name is omitted (e.g., 'A1:B2'), the operation applies to the first visible sheet.
   */
  range?: string;
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet from which to clear values. This ID can be found in the URL of the spreadsheet.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CLEAR_VALUES tool output.
 */
type GOOGLESUPER_CLEAR_VALUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cleared Range
       * @description The A1 notation of the range that was actually cleared, which might differ from the requested range if it was adjusted to fit the sheet's dimensions.
       */
      clearedRange: string;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet that was updated.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_COPY_DOCUMENT tool input.
 */
type GOOGLESUPER_COPY_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description The ID of the Google Document to be copied.
   */
  document_id?: string;
  /**
   * Title
   * @description The title for the new copied document. If not provided, the title will be 'Copy of [original document's title]'.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_COPY_DOCUMENT tool output.
 */
type GOOGLESUPER_COPY_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the newly created copied document.
       */
      documentId: string;
      /**
       * Title
       * @description The title of the newly created copied document.
       */
      title: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_COPY_FILE tool input.
 */
type GOOGLESUPER_COPY_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier for the file on Google Drive that you want to copy. This ID can be retrieved from the file's shareable link or via other Google Drive API calls.
   */
  file_id?: string;
  /**
   * New Title
   * @description The title to assign to the new copy of the file. If not provided, the copied file will have the same title as the original, prefixed with 'Copy of '.
   * @default null
   */
  new_title: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_COPY_FILE tool output.
 */
type GOOGLESUPER_COPY_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs private to the requesting app.
       */
      appProperties?: {
          [key: string]: string;
      } | null;
      /**
       * Capabilities
       * @description Output only. Capabilities the current user has on this file.
       * @default null
       */
      capabilities: {
          /**
           * Can Accept Ownership
           * @default null
           */
          canAcceptOwnership: boolean | null;
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Add Folder From Another Drive
           * @default null
           */
          canAddFolderFromAnotherDrive: boolean | null;
          /**
           * Can Add My Drive Parent
           * @default null
           */
          canAddMyDriveParent: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission
           * @default null
           */
          canChangeCopyRequiresWriterPermission: boolean | null;
          /**
           * Can Change Security Update Enabled
           * @default null
           */
          canChangeSecurityUpdateEnabled: boolean | null;
          /**
           * Can Change Viewers Can Copy Content
           * @description Deprecated.
           * @default null
           */
          canChangeViewersCanCopyContent: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Disable Inherited Permissions
           * @default null
           */
          canDisableInheritedPermissions: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can Enable Inherited Permissions
           * @default null
           */
          canEnableInheritedPermissions: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Modify Content
           * @default null
           */
          canModifyContent: boolean | null;
          /**
           * Can Modify Content Restriction
           * @description Deprecated.
           * @default null
           */
          canModifyContentRestriction: boolean | null;
          /**
           * Can Modify Editor Content Restriction
           * @default null
           */
          canModifyEditorContentRestriction: boolean | null;
          /**
           * Can Modify Labels
           * @default null
           */
          canModifyLabels: boolean | null;
          /**
           * Can Modify Owner Content Restriction
           * @default null
           */
          canModifyOwnerContentRestriction: boolean | null;
          /**
           * Can Move Children Out Of Drive
           * @default null
           */
          canMoveChildrenOutOfDrive: boolean | null;
          /**
           * Can Move Children Out Of Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveChildrenOutOfTeamDrive: boolean | null;
          /**
           * Can Move Children Within Drive
           * @default null
           */
          canMoveChildrenWithinDrive: boolean | null;
          /**
           * Can Move Children Within Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveChildrenWithinTeamDrive: boolean | null;
          /**
           * Can Move Item Into Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveItemIntoTeamDrive: boolean | null;
          /**
           * Can Move Item Out Of Drive
           * @default null
           */
          canMoveItemOutOfDrive: boolean | null;
          /**
           * Can Move Item Out Of Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveItemOutOfTeamDrive: boolean | null;
          /**
           * Can Move Item Within Drive
           * @default null
           */
          canMoveItemWithinDrive: boolean | null;
          /**
           * Can Move Item Within Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveItemWithinTeamDrive: boolean | null;
          /**
           * Can Move Team Drive Item
           * @description Deprecated.
           * @default null
           */
          canMoveTeamDriveItem: boolean | null;
          /**
           * Can Read Drive
           * @default null
           */
          canReadDrive: boolean | null;
          /**
           * Can Read Labels
           * @default null
           */
          canReadLabels: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Read Team Drive
           * @description Deprecated: Use canReadDrive instead.
           * @default null
           */
          canReadTeamDrive: boolean | null;
          /**
           * Can Remove Children
           * @default null
           */
          canRemoveChildren: boolean | null;
          /**
           * Can Remove Content Restriction
           * @default null
           */
          canRemoveContentRestriction: boolean | null;
          /**
           * Can Remove My Drive Parent
           * @default null
           */
          canRemoveMyDriveParent: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash
           * @default null
           */
          canTrash: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
          /**
           * Can Untrash
           * @default null
           */
          canUntrash: boolean | null;
      } | null;
      /**
       * ContentHints
       * @description Additional information about the content of the file.
       * @default null
       */
      contentHints: {
          /**
           * Indexable Text
           * @description Text to be indexed for the file to improve fullText queries.
           * @default null
           */
          indexableText: string | null;
          /**
           * Thumbnail
           * @description A thumbnail for the file.
           * @default null
           */
          thumbnail: {
              /**
               * Image
               * @description The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
               * @default null
               */
              image: string | null;
              /**
               * Mime Type
               * @description The MIME type of the thumbnail.
               * @default null
               */
              mimeType: string | null;
          } | null;
      } | null;
      /**
       * Content Restrictions
       * @description Restrictions for accessing the content of the file.
       */
      contentRestrictions?: {
          /**
           * Owner Restricted
           * @default null
           */
          ownerRestricted: boolean | null;
          /**
           * Read Only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Reason
           * @default null
           */
          reason: string | null;
          /**
           * User
           * @description Output only.
           * @default null
           */
          restrictingUser: {
              /**
               * Display Name
               * @description A plain text displayable name for this user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Restriction Time
           * @description RFC 3339 date-time, Output only.
           * @default null
           */
          restrictionTime: string | null;
          /**
           * System Restricted
           * @description Output only.
           * @default null
           */
          systemRestricted: boolean | null;
          /**
           * Type
           * @description Output only.
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether the options to copy, print, or download should be disabled for readers and commenters.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description Output only. ID of the shared drive the file resides in.
       * @default null
       */
      driveId: string | null;
      /**
       * Explicitly Trashed
       * @description Output only. Whether the file has been explicitly trashed.
       * @default null
       */
      explicitlyTrashed: boolean | null;
      /**
       * File Extension
       * @description Output only. The final component of fullFileExtension.
       * @default null
       */
      fileExtension: string | null;
      /**
       * Folder Color Rgb
       * @description The color for a folder or a shortcut to a folder as an RGB hex string.
       * @default null
       */
      folderColorRgb: string | null;
      /**
       * Full File Extension
       * @description Output only. The full file extension extracted from the name field.
       * @default null
       */
      fullFileExtension: string | null;
      /**
       * Has Augmented Permissions
       * @description Output only. Whether there are permissions directly on this file.
       * @default null
       */
      hasAugmentedPermissions: boolean | null;
      /**
       * Has Thumbnail
       * @description Output only. Whether this file has a thumbnail.
       * @default null
       */
      hasThumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description Output only. The ID of the file's head revision.
       * @default null
       */
      headRevisionId: string | null;
      /**
       * Icon Link
       * @description Output only. A static, unauthenticated link to the file's icon.
       * @default null
       */
      iconLink: string | null;
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * ImageMediaMetadata
       * @description Output only. Additional metadata about image media.
       * @default null
       */
      imageMediaMetadata: {
          /**
           * Aperture
           * @default null
           */
          aperture: number | null;
          /**
           * Camera Make
           * @default null
           */
          cameraMake: string | null;
          /**
           * Camera Model
           * @default null
           */
          cameraModel: string | null;
          /**
           * Color Space
           * @default null
           */
          colorSpace: string | null;
          /**
           * Exposure Bias
           * @default null
           */
          exposureBias: number | null;
          /**
           * Exposure Mode
           * @default null
           */
          exposureMode: string | null;
          /**
           * Exposure Time
           * @default null
           */
          exposureTime: number | null;
          /**
           * Flash Used
           * @default null
           */
          flashUsed: boolean | null;
          /**
           * Focal Length
           * @default null
           */
          focalLength: number | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Iso Speed
           * @default null
           */
          isoSpeed: number | null;
          /**
           * Lens
           * @default null
           */
          lens: string | null;
          /**
           * ImageMediaMetadataLocation
           * @default null
           */
          location: {
              /**
               * Altitude
               * @default null
               */
              altitude: number | null;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
          } | null;
          /**
           * Max Aperture Value
           * @default null
           */
          maxApertureValue: number | null;
          /**
           * Metering Mode
           * @default null
           */
          meteringMode: string | null;
          /**
           * Rotation
           * @default null
           */
          rotation: number | null;
          /**
           * Sensor
           * @default null
           */
          sensor: string | null;
          /**
           * Subject Distance
           * @default null
           */
          subjectDistance: number | null;
          /**
           * Time
           * @description RFC 3339 date-time
           * @default null
           */
          time: string | null;
          /**
           * White Balance
           * @default null
           */
          whiteBalance: string | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Is App Authorized
       * @description Output only. Whether the file was created or opened by the requesting app.
       * @default null
       */
      isAppAuthorized: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default null
       */
      kind: string | null;
      /**
       * User
       * @description Output only. The last user to modify the file.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * LinkShareMetadata
       * @description Output only. LinkShare related details.
       * @default null
       */
      linkShareMetadata: {
          /**
           * Security Update Eligible
           * @description Output only.
           * @default null
           */
          securityUpdateEligible: boolean | null;
          /**
           * Security Update Enabled
           * @description Output only.
           * @default null
           */
          securityUpdateEnabled: boolean | null;
      } | null;
      /**
       * Md5 Checksum
       * @description Output only. The MD5 checksum for the content of the file.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified By Me
       * @description Output only. Whether the file has been modified by this user.
       * @default null
       */
      modifiedByMe: boolean | null;
      /**
       * Modified By Me Time
       * @description Output only. The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modifiedByMeTime: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Owned By Me
       * @description Output only. Whether the user owns the file.
       * @default null
       */
      ownedByMe: boolean | null;
      /**
       * Owners
       * @description Output only. The owner(s) of this file.
       */
      owners?: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders.
       */
      parents?: string[] | null;
      /**
       * Permission Ids
       * @description Output only. List of permission IDs for users with access.
       */
      permissionIds?: string[] | null;
      /**
       * Permissions
       * @description Output only. The full list of permissions. Structure of Permission resource is complex and represented as Dict[str, t.Any].
       */
      permissions?: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs visible to all apps.
       */
      properties?: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description Output only. The number of storage quota bytes used (int64 format).
       * @default null
       */
      quotaBytesUsed: string | null;
      /**
       * Resource Key
       * @description Output only. A key needed to access the item via a shared link.
       * @default null
       */
      resourceKey: string | null;
      /**
       * Sha1 Checksum
       * @description Output only. The SHA1 checksum for the file content.
       * @default null
       */
      sha1Checksum: string | null;
      /**
       * Sha256 Checksum
       * @description Output only. The SHA256 checksum for the file content.
       * @default null
       */
      sha256Checksum: string | null;
      /**
       * Shared
       * @description Output only. Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description Output only. The time at which the file was shared with the user (RFC 3339 date-time).
       * @default null
       */
      sharedWithMeTime: string | null;
      /**
       * User
       * @description Output only. The user who shared the file with the requesting user.
       * @default null
       */
      sharingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * ShortcutDetails
       * @description Shortcut file details.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @default null
           */
          targetId: string | null;
          /**
           * Target Mime Type
           * @description Output only.
           * @default null
           */
          targetMimeType: string | null;
          /**
           * Target Resource Key
           * @description Output only.
           * @default null
           */
          targetResourceKey: string | null;
      } | null;
      /**
       * Size
       * @description Output only. Size in bytes (int64 format).
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description Output only. The list of spaces which contain the file.
       */
      spaces?: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Team Drive Id
       * @description Deprecated: Output only. Use driveId instead.
       * @default null
       */
      teamDriveId: string | null;
      /**
       * Thumbnail Link
       * @description Output only. A short-lived link to the file's thumbnail.
       * @default null
       */
      thumbnailLink: string | null;
      /**
       * Thumbnail Version
       * @description Output only. The thumbnail version (int64 format).
       * @default null
       */
      thumbnailVersion: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Trashed Time
       * @description Output only. The time that the item was trashed (RFC 3339 date-time).
       * @default null
       */
      trashedTime: string | null;
      /**
       * User
       * @description Output only. If the file has been explicitly trashed, the user who trashed it.
       * @default null
       */
      trashingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Version
       * @description Output only. A monotonically increasing version number for the file (int64 format).
       * @default null
       */
      version: string | null;
      /**
       * VideoMediaMetadata
       * @description Output only. Additional metadata about video media.
       * @default null
       */
      videoMediaMetadata: {
          /**
           * Duration Millis
           * @description int64 format
           * @default null
           */
          durationMillis: string | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Viewed By Me
       * @description Output only. Whether the file has been viewed by this user.
       * @default null
       */
      viewedByMe: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewedByMeTime: string | null;
      /**
       * Viewers Can Copy Content
       * @description Deprecated: Use copyRequiresWriterPermission instead.
       * @default null
       */
      viewersCanCopyContent: boolean | null;
      /**
       * Web Content Link
       * @description Output only. A link for downloading the content of the file in a browser.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description Output only. A link for opening the file in a relevant Google editor or viewer.
       * @default null
       */
      webViewLink: string | null;
      /**
       * Writers Can Share
       * @description Whether users with writer permission can modify permissions.
       * @default null
       */
      writersCanShare: boolean | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_ALBUM tool input.
 */
type GOOGLESUPER_CREATE_ALBUM_INPUT = {
  /**
   * Cover Photo Base Url
   * @description URL to the cover photo
   */
  coverPhotoBaseUrl?: string;
  /**
   * Cover Photo Media Item Id
   * @description ID of the cover photo media item
   */
  coverPhotoMediaItemId?: string;
  /**
   * Id
   * @description Identifier for the album
   */
  id?: string;
  /**
   * Is Writeable
   * @description Whether media items can be created in this album
   */
  isWriteable?: boolean;
  /**
   * Media Items Count
   * @description Number of media items in the album
   */
  mediaItemsCount?: string;
  /**
   * Product Url
   * @description Google Photos URL for the album
   */
  productUrl?: string;
  /**
   * Title
   * @description Name of the album to be created in Google Photos. Maximum 500 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_ALBUM tool output.
 */
type GOOGLESUPER_CREATE_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Album
       * @description The created album data
       */
      album: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_CHART tool input.
 */
type GOOGLESUPER_CREATE_CHART_INPUT = {
  /**
   * Background Blue
   * @description Blue component of chart background color (0.0-1.0). If not specified, uses default.
   * @default null
   */
  background_blue: number | null;
  /**
   * Background Green
   * @description Green component of chart background color (0.0-1.0). If not specified, uses default.
   * @default null
   */
  background_green: number | null;
  /**
   * Background Red
   * @description Red component of chart background color (0.0-1.0). If not specified, uses default.
   * @default null
   */
  background_red: number | null;
  /**
   * Chart Type
   * @description The type of chart to create. Supported types: BAR, LINE, AREA, COLUMN, SCATTER, COMBO, STEPPED_AREA.
   */
  chart_type?: string;
  /**
   * Data Range
   * @description The range of data to use for the chart in A1 notation (e.g., 'A1:C10').
   */
  data_range?: string;
  /**
   * Legend Position
   * @description Position of the chart legend. Options: BOTTOM_LEGEND, TOP_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, NO_LEGEND.
   * @default BOTTOM_LEGEND
   */
  legend_position: string;
  /**
   * Sheet Id
   * @description The ID of the sheet within the spreadsheet where the chart will be created. Defaults to 0 (first sheet).
   * @default 0
   */
  sheet_id: number;
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Sheets spreadsheet where the chart will be created.
   */
  spreadsheet_id?: string;
  /**
   * Subtitle
   * @description Optional subtitle for the chart.
   * @default null
   */
  subtitle: string | null;
  /**
   * Title
   * @description Optional title for the chart.
   * @default null
   */
  title: string | null;
  /**
   * X Axis Title
   * @description Optional title for the X-axis.
   * @default null
   */
  x_axis_title: string | null;
  /**
   * Y Axis Title
   * @description Optional title for the Y-axis.
   * @default null
   */
  y_axis_title: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_CHART tool output.
 */
type GOOGLESUPER_CREATE_CHART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chart Id
       * @description The ID of the created chart.
       */
      chart_id: number;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet containing the chart.
       */
      spreadsheet_id: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_COMMENT tool input.
 */
type GOOGLESUPER_CREATE_COMMENT_INPUT = {
  /**
   * Anchor
   * @description A JSON string representing the region of the document to which the comment is anchored (e.g., {'type': 'line', 'line': 12}).
   * @default null
   */
  anchor: string | null;
  /**
   * Content
   * @description The plain text content of the comment.
   */
  content?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Quoted File Content Mime Type
   * @description The MIME type of the quoted content.
   * @default null
   */
  quoted_file_content_mime_type: string | null;
  /**
   * Quoted File Content Value
   * @description The quoted content itself.
   * @default null
   */
  quoted_file_content_value: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_COMMENT tool output.
 */
type GOOGLESUPER_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Anchor
       * @description The region of the document to which the comment is anchored, if any.
       * @default null
       */
      anchor: string | null;
      /**
       * Author
       * @description The user who created the comment.
       */
      author: {
          [key: string]: unknown;
      };
      /**
       * Content
       * @description The plain text content of the comment.
       */
      content: string;
      /**
       * Created Time
       * @description The time the comment was created.
       */
      createdTime: string;
      /**
       * Deleted
       * @description Whether the comment has been deleted.
       */
      deleted: boolean;
      /**
       * Id
       * @description The ID of the comment.
       */
      id: string;
      /**
       * Kind
       * @description Identifies the resource type, always 'drive#comment'.
       */
      kind: string;
      /**
       * Modified Time
       * @description The time the comment was last modified.
       */
      modifiedTime: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_CUSTOMER_LIST tool input.
 */
type GOOGLESUPER_CREATE_CUSTOMER_LIST_INPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_CUSTOMER_LIST tool output.
 */
type GOOGLESUPER_CREATE_CUSTOMER_LIST_OUTPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_DOCUMENT tool input.
 */
type GOOGLESUPER_CREATE_DOCUMENT_INPUT = {
  /**
   * Text
   * @description Initial text content to insert at the beginning of the new document.
   */
  text?: string;
  /**
   * Title
   * @description Title for the new document, used as its filename in Google Drive.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_DOCUMENT tool output.
 */
type GOOGLESUPER_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description Unique ID of the newly created document, required for subsequent operations.
       * @default null
       */
      document_id: string | null;
      /**
       * Response Data
       * @description Detailed API response metadata about the created document (e.g., title, revision ID), excluding the document's body content.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN tool input.
 */
type GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN_INPUT = {
  /**
   * Markdown Text
   * @description The initial content for the document, formatted as Markdown. Supports various Markdown elements including headings, lists (nested lists are not supported), tables, images (via publicly accessible URLs), blockquotes, code blocks, and text formatting (bold, italic, etc.). If an empty string is provided, the document will be created with only the title.
   */
  markdown_text?: string;
  /**
   * Title
   * @description The title for the new Google Docs document.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN tool output.
 */
type GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The unique identifier of the newly created Google Docs document.
       * @default null
       */
      document_id: string | null;
      /**
       * Request Data
       * @description Google Docs API request objects generated from `markdown_text` for `batchUpdate`; null or empty if `markdown_text` was not provided or empty.
       * @default null
       */
      request_data: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Response Data
       * @description JSON response from Google Docs API after initial document creation with title, before Markdown content is applied.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_DRIVE tool input.
 */
type GOOGLESUPER_CREATE_DRIVE_INPUT = {
  /**
   * BackgroundImageFile
   * @description An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
   * @default null
   */
  backgroundImageFile: {
      /**
       * Id
       * @description The ID of an image file in Google Drive to use for the background.
       */
      id: string;
      /**
       * Width
       * @description The width of the cropped image in the range: 0.0 <= width <= 1.0.
       */
      width: number;
      /**
       * X Coordinate
       * @description The X coordinate of the cropped image in the range: 0.0 <= xCoordinate <= 1.0.
       */
      xCoordinate: number;
      /**
       * Y Coordinate
       * @description The Y coordinate of the cropped image in the range: 0.0 <= yCoordinate <= 1.0.
       */
      yCoordinate: number;
  } | null;
  /**
   * Color Rgb
   * @description The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId.
   * @default null
   */
  colorRgb: string | null;
  /**
   * Hidden
   * @description Whether the shared drive is hidden from default view.
   * @default false
   */
  hidden: boolean | null;
  /**
   * Name
   * @description The name of this shared drive.
   */
  name?: string;
  /**
   * Request Id
   * @description An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
   */
  requestId?: string;
  /**
   * Theme Id
   * @description The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.
   * @default null
   */
  themeId: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_DRIVE tool output.
 */
type GOOGLESUPER_CREATE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background Image Link
       * @description A short-lived link to this shared drive's background image.
       * @default null
       */
      backgroundImageLink: string | null;
      /**
       * DriveCapabilities
       * @description Capabilities the current user has on this shared drive.
       * @default null
       */
      capabilities: {
          /**
           * Can Add Children
           * @description Whether users with writer permissions can add children to folders in this shared drive.
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission Restriction
           * @description Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive.
           * @default null
           */
          canChangeCopyRequiresWriterPermissionRestriction: boolean | null;
          /**
           * Can Change Domain Users Only Restriction
           * @description Whether the current user can change the domainUsersOnly restriction of this shared drive.
           * @default null
           */
          canChangeDomainUsersOnlyRestriction: boolean | null;
          /**
           * Can Change Drive Background
           * @description Whether the current user can change the background of this shared drive.
           * @default null
           */
          canChangeDriveBackground: boolean | null;
          /**
           * Can Change Drive Members Only Restriction
           * @description Whether the current user can change the driveMembersOnly restriction of this shared drive.
           * @default null
           */
          canChangeDriveMembersOnlyRestriction: boolean | null;
          /**
           * Can Change Sharing Folders Requires Organizer Permission Restriction
           * @description Whether the current user can change the sharingFoldersRequiresOrganizerPermission restriction of this shared drive.
           * @default null
           */
          canChangeSharingFoldersRequiresOrganizerPermissionRestriction: boolean | null;
          /**
           * Can Comment
           * @description Whether users with commenter permissions can comment on files in this shared drive.
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @description Whether users with reader or commenter permissions can copy files in this shared drive.
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete Children
           * @description Whether users with writer permissions can delete children from folders in this shared drive. This is deprecated and now identical to canDeleteDrive.
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Delete Drive
           * @description Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.
           * @default null
           */
          canDeleteDrive: boolean | null;
          /**
           * Can Download
           * @description Whether users with reader or commenter permissions can download files in this shared drive.
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @description Whether users with writer permissions can edit files in this shared drive.
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can List Children
           * @description Whether users with reader or commenter permissions can list the children of folders in this shared drive.
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Manage Members
           * @description Whether the current user can add members to this shared drive or remove them or change their role.
           * @default null
           */
          canManageMembers: boolean | null;
          /**
           * Can Read Revisions
           * @description Whether the current user can read the revisions resource of files in this shared drive.
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Rename
           * @description Whether users with writer permissions can rename files or folders in this shared drive.
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Rename Drive
           * @description Whether the current user can rename this shared drive.
           * @default null
           */
          canRenameDrive: boolean | null;
          /**
           * Can Share
           * @description Whether the current user can share files or folders in this shared drive.
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash Children
           * @description Whether users with writer permissions can trash children from folders in this shared drive. This is deprecated and now identical to canDeleteDrive.
           * @default null
           */
          canTrashChildren: boolean | null;
      } | null;
      /**
       * Color Rgb
       * @description The color of this shared drive as an RGB hex string.
       * @default null
       */
      colorRgb: string | null;
      /**
       * Created Time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
       */
      kind: string;
      /**
       * Name
       * @description The name of this shared drive.
       */
      name: string;
      /**
       * Org Unit Id
       * @description The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true.
       * @default null
       */
      orgUnitId: string | null;
      /**
       * DriveRestrictions
       * @description A set of restrictions that apply to this shared drive or items inside this shared drive.
       * @default null
       */
      restrictions: {
          /**
           * Admin Managed Restrictions
           * @description Whether administrative privileges on this shared drive are required to modify restrictions.
           * @default null
           */
          adminManagedRestrictions: boolean | null;
          /**
           * Copy Requires Writer Permission
           * @description Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When true, only permissions with write access will be able to copy, print, or download files.
           * @default null
           */
          copyRequiresWriterPermission: boolean | null;
          /**
           * Domain Users Only
           * @description Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of Drive.
           * @default null
           */
          domainUsersOnly: boolean | null;
          /**
           * Drive Members Only
           * @description Whether access to items inside this shared drive is restricted to its members.
           * @default null
           */
          driveMembersOnly: boolean | null;
          /**
           * Sharing Folders Requires Organizer Permission
           * @description Whether the ability to share folders in this shared drive is restricted to users with organizer_role for this shared drive.
           * @default null
           */
          sharingFoldersRequiresOrganizerPermission: boolean | null;
      } | null;
      /**
       * Theme Id
       * @description The ID of the theme from which the background image and color will be set.
       * @default null
       */
      themeId: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_EMAIL_DRAFT tool input.
 */
type GOOGLESUPER_CREATE_EMAIL_DRAFT_INPUT = {
  /**
   * FileUploadable
   * @description File to attach to the email.
   * @default null
   */
  attachment: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Bcc
   * @description 'Bcc' (blind carbon copy) recipient email addresses.
   * @default []
   */
  bcc: string[];
  /**
   * Body
   * @description Email body content (plain text or HTML); `is_html` must be True if HTML.
   */
  body?: string;
  /**
   * Cc
   * @description 'Cc' (carbon copy) recipient email addresses.
   * @default []
   */
  cc: string[];
  /**
   * Extra Recipients
   * @description Additional 'To' recipient email addresses.
   * @default []
   */
  extra_recipients: string[];
  /**
   * Is Html
   * @description Set to True if `body` is HTML, otherwise the action may fail.
   * @default false
   */
  is_html: boolean;
  /**
   * Recipient Email
   * @description Primary recipient's email address.
   */
  recipient_email?: string;
  /**
   * Subject
   * @description Email subject line.
   */
  subject?: string;
  /**
   * Thread Id
   * @description ID of an existing Gmail thread to reply to; omit for new thread.
   * @default null
   */
  thread_id: string | null;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_EMAIL_DRAFT tool output.
 */
type GOOGLESUPER_CREATE_EMAIL_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Gmail API response with created draft details, including ID.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_EVENT tool input.
 */
type GOOGLESUPER_CREATE_EVENT_INPUT = {
  /**
   * Attendees
   * @description List of attendee emails (strings).
   * @default null
   */
  attendees: string[] | null;
  /**
   * Calendar Id
   * @description Target calendar: 'primary' for the user's main calendar, or the calendar's email address.
   * @default primary
   */
  calendar_id: string;
  /**
   * Create Meeting Room
   * @description If true, a Google Meet link is created and added to the event. CRITICAL: As of 2024, this REQUIRES a paid Google Workspace account ($13+/month). Personal Gmail accounts will fail with 'Invalid conference type value' error. Solutions: 1) Upgrade to Workspace, 2) Use domain-wide delegation with Workspace user, 3) Use the new Google Meet REST API, or 4) Create events without conferences. See https://github.com/googleapis/google-api-nodejs-client/issues/3234
   * @default null
   */
  create_meeting_room: boolean | null;
  /**
   * Description
   * @description Description of the event. Can contain HTML. Optional.
   * @default null
   */
  description: string | null;
  /**
   * Event Type
   * @description Type of the event, immutable post-creation. Supported types: 'birthday' (all-day with annual recurrence), 'default' (regular event), 'focusTime' (focus-time event), 'outOfOffice' (out-of-office event), 'workingLocation' (working location event). Note: 'fromGmail' events cannot be created via API.
   * @default default
   * @enum {string}
   */
  eventType: "birthday" | "default" | "focusTime" | "outOfOffice" | "workingLocation";
  /**
   * Event Duration Hour
   * @description Number of hours (0-24). Increase by 1 here rather than passing 60 in `event_duration_minutes`
   * @default 0
   */
  event_duration_hour: number;
  /**
   * Event Duration Minutes
   * @description Duration in minutes (0-59 ONLY). NEVER use 60+ minutes - use event_duration_hour=1 instead. Maximum value is 59.
   * @default 30
   */
  event_duration_minutes: number;
  /**
   * Exclude Organizer
   * @description If True, the organizer will NOT be added as an attendee. Default is False (organizer is included).
   * @default false
   */
  exclude_organizer: boolean;
  /**
   * Guests Can Invite Others
   * @description Whether attendees other than the organizer can invite others to the event.
   * @default null
   */
  guestsCanInviteOthers: boolean | null;
  /**
   * Guests Can See Other Guests
   * @description Whether attendees other than the organizer can see who the event's attendees are.
   * @default null
   */
  guestsCanSeeOtherGuests: boolean | null;
  /**
   * Guests Can Modify
   * @description If True, guests can modify the event.
   * @default false
   */
  guests_can_modify: boolean;
  /**
   * Location
   * @description Geographic location of the event as free-form text.
   * @default null
   */
  location: string | null;
  /**
   * Recurrence
   * @description List of RRULE, EXRULE, RDATE, EXDATE lines for recurring events. Supported frequencies are DAILY, WEEKLY, MONTHLY, YEARLY.
   * @default null
   */
  recurrence: string[] | null;
  /**
   * Send Updates
   * @description Defaults to True. Whether to send updates to the attendees.
   * @default null
   */
  send_updates: boolean | null;
  /**
   * Start Datetime
   * @description Naive date/time (YYYY-MM-DDTHH:MM:SS) with NO offsets or Z. e.g. '2025-01-16T13:00:00'
   */
  start_datetime?: string;
  /**
   * Summary
   * @description Summary (title) of the event.
   * @default null
   */
  summary: string | null;
  /**
   * Timezone
   * @description IANA timezone name (e.g., 'America/New_York'). Required if datetime is naive. If datetime includes timezone info (Z or offset), this field is optional and defaults to UTC.
   * @default null
   */
  timezone: string | null;
  /**
   * Transparency
   * @description 'opaque' (busy) or 'transparent' (available).
   * @default opaque
   * @enum {string}
   */
  transparency: "opaque" | "transparent";
  /**
   * Visibility
   * @description Event visibility: 'default', 'public', 'private', or 'confidential'.
   * @default default
   * @enum {string}
   */
  visibility: "default" | "public" | "private" | "confidential";
  /**
   * Working Location Properties
   * @description Working location properties for workingLocation events. Must include 'type' field with value: 'homeOffice', 'officeLocation', or 'customLocation'.
   * @default null
   */
  workingLocationProperties: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_EVENT tool output.
 */
type GOOGLESUPER_CREATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full representation of the created event resource from Google Calendar API, including ID, summary, times, attendees, etc.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_EXPANDED_DATA_SET tool input.
 */
type GOOGLESUPER_CREATE_EXPANDED_DATA_SET_INPUT = {
  /**
   * Expanded Data Set
   * @description Definition of the ExpandedDataSet to create.
   */
  expandedDataSet?: {
      /**
       * Description
       * @description Optional. Description of the expanded data set.
       * @default null
       */
      description: string | null;
      /**
       * Dimension Names
       * @description Required. List of dimension names to include in the expanded data set.
       */
      dimensionNames: string[];
      /**
       * Display Name
       * @description Required. Human-readable display name for the expanded data set.
       */
      displayName: string;
      /**
       * Metric Names
       * @description Required. List of metric names to include in the expanded data set.
       */
      metricNames: string[];
  };
  /**
   * Parent
   * @description Parent property resource name. Format: properties/{propertyId}
   */
  parent?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_EXPANDED_DATA_SET tool output.
 */
type GOOGLESUPER_CREATE_EXPANDED_DATA_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expanded Data Set
       * @description The created ExpandedDataSet resource.
       */
      expandedDataSet: {
          /**
           * Create Time
           * @description Output only. Time when this ExpandedDataSet was created.
           * @default null
           */
          createTime: string | null;
          /**
           * Description
           * @description Optional. Description of the expanded data set.
           * @default null
           */
          description: string | null;
          /**
           * Dimension Names
           * @description Required. List of dimension names to include in the expanded data set.
           */
          dimensionNames: string[];
          /**
           * Display Name
           * @description Required. Human-readable display name for the expanded data set.
           */
          displayName: string;
          /**
           * Metric Names
           * @description Required. List of metric names to include in the expanded data set.
           */
          metricNames: string[];
          /**
           * Name
           * @description Output only. Resource name of the ExpandedDataSet.
           */
          name: string;
          /**
           * Update Time
           * @description Output only. Time when this ExpandedDataSet was last updated.
           * @default null
           */
          updateTime: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FILE tool input.
 */
type GOOGLESUPER_CREATE_FILE_INPUT = {
  /**
   * Description
   * @description A short description of the file.
   * @default null
   */
  description: string | null;
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Mime Type
   * @description The MIME type of the file.
   * @default null
   */
  mimeType: string | null;
  /**
   * Name
   * @description The name of the file.
   * @default null
   */
  name: string | null;
  /**
   * Parents
   * @description The IDs of parent folders.
   * @default null
   */
  parents: string[] | null;
  /**
   * Starred
   * @description Whether the user has starred the file.
   * @default null
   */
  starred: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FILE tool output.
 */
type GOOGLESUPER_CREATE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in.
       * @default null
       */
      driveId: string | null;
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Parents
       * @description The list of parent IDs for the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FILE_FROM_TEXT tool input.
 */
type GOOGLESUPER_CREATE_FILE_FROM_TEXT_INPUT = {
  /**
   * File Name
   * @description Desired name for the new file on Google Drive.
   */
  file_name?: string;
  /**
   * Mime Type
   * @description MIME type for the new file, determining how Google Drive interprets its content.
   * @default text/plain
   */
  mime_type: string;
  /**
   * Parent Id
   * @description ID of the parent folder in Google Drive; if omitted, the file is created in the root of 'My Drive'.
   * @default null
   */
  parent_id: string | null;
  /**
   * Text Content
   * @description Plain text content to be written into the new file.
   */
  text_content?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FILE_FROM_TEXT tool output.
 */
type GOOGLESUPER_CREATE_FILE_FROM_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Kind
       * @description Identifies the resource type. For example, for a file, this is 'drive#file'.
       */
      kind: string;
      /**
       * Mime Type
       * @description The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the file.
       */
      name: string;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web Content Link
       * Format: uri
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * Format: uri
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FOLDER tool input.
 */
type GOOGLESUPER_CREATE_FOLDER_INPUT = {
  /**
   * Folder Name
   * @description Name for the new folder.
   */
  folder_name?: string;
  /**
   * Parent Id
   * @description ID or name of the parent folder. If a name is provided, the action attempts to find it. If an ID is provided, it must be a valid Google Drive folder ID. If omitted, the folder is created in the Drive root.
   * @default null
   */
  parent_id: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FOLDER tool output.
 */
type GOOGLESUPER_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created folder.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the created folder, which will be 'application/vnd.google-apps.folder'.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the created folder.
       */
      name: string;
      /**
       * Parents
       * @description The ID(s) of the parent folder(s).
       * @default null
       */
      parents: string[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FOOTER tool input.
 */
type GOOGLESUPER_CREATE_FOOTER_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to create the footer in.
   */
  document_id?: string;
  /**
   * Location
   * @description The location of the SectionBreak immediately preceding the section whose SectionStyle this footer should belong to. If this is unset or refers to the first section break in the document, the footer applies to the document style.
   * @default null
   */
  section_break_location: {
      /**
       * Index
       * @description The zero-based index, in UTF-16 code units, relative to the beginning of the segment.
       * @default null
       */
      index: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Tab Id
       * @description The tab that the location is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tabId: string | null;
  } | null;
  /**
   * Type
   * @description The type of footer to create.
   * @enum {string}
   */
  type?: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT";
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FOOTER tool output.
 */
type GOOGLESUPER_CREATE_FOOTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document the footer was created in.
       */
      document_id: string;
      /**
       * Footer Id
       * @description The ID of the created footer.
       */
      footer_id: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FOOTNOTE tool input.
 */
type GOOGLESUPER_CREATE_FOOTNOTE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to create the footnote in.
   */
  documentId?: string;
  /**
   * EndOfSegmentLocation
   * @description Inserts the footnote reference at the end of the document body. The segmentId within this EndOfSegmentLocation object must be empty.
   * @default null
   */
  endOfSegmentLocation: {
      /**
       * Segment Id
       * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Tab Id
       * @description The tab that the location is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tabId: string | null;
  } | null;
  /**
   * Location
   * @description Inserts the footnote reference at a specific index in the document. The segmentId within this Location object must be empty as footnotes can only be inserted in the document body.
   * @default null
   */
  location: {
      /**
       * Index
       * @description The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
       * @default null
       */
      index: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Tab Id
       * @description The tab that the location is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tabId: string | null;
  } | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_FOOTNOTE tool output.
 */
type GOOGLESUPER_CREATE_FOOTNOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document where the footnote was created.
       */
      documentId: string;
      /**
       * Footnote Id
       * @description The ID of the newly created footnote.
       */
      footnoteId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_GOOGLE_SHEET1 tool input.
 */
type GOOGLESUPER_CREATE_GOOGLE_SHEET1_INPUT = {
  /**
   * Title
   * @description The title for the new Google Sheet. This will be the name of the file in Google Drive.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_GOOGLE_SHEET1 tool output.
 */
type GOOGLESUPER_CREATE_GOOGLE_SHEET1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details of the created spreadsheet, including its `spreadsheet_id` and information about its `sheets`.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_HEADER tool input.
 */
type GOOGLESUPER_CREATE_HEADER_INPUT = {
  /**
   * Create Header
   * @description The details of the header to create.
   */
  createHeader?: {
      /**
       * Location
       * @description The location of the SectionBreak which begins the section this header should belong to.
       * @default null
       */
      sectionBreakLocation: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units.
           * @default null
           */
          index: number | null;
          /**
           * Segment Id
           * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Tab Id
           * @description The tab that the location is in. When omitted, the request is applied to the first tab.
           * @default null
           */
          tabId: string | null;
      } | null;
      /**
       * Type
       * @description The type of header to create.
       * @enum {string}
       */
      type: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT";
  };
  /**
   * Document Id
   * @description The ID of the document to create the header in.
   */
  documentId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_HEADER tool output.
 */
type GOOGLESUPER_CREATE_HEADER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_LABEL tool input.
 */
type GOOGLESUPER_CREATE_LABEL_INPUT = {
  /**
   * Background Color
   * @description The background color of the label, in hex (e.g., "#FFFFFF").
   * @default null
   */
  background_color: string | null;
  /**
   * Label List Visibility
   * @description Controls how the label is displayed in the label list in the Gmail sidebar.
   * @default labelShow
   */
  label_list_visibility: string;
  /**
   * Label Name
   * @description The name for the new label. Must be unique within the account, non-blank, maximum length 225 characters, cannot contain ',' or '/', not only whitespace, and must not be a reserved system label (e.g., INBOX, DRAFTS, SENT).
   */
  label_name?: string;
  /**
   * Message List Visibility
   * @description Controls how messages with this label are displayed in the message list.
   * @default show
   */
  message_list_visibility: string;
  /**
   * Text Color
   * @description The text color of the label, in hex (e.g., "#000000").
   * @default null
   */
  text_color: string | null;
  /**
   * User Id
   * @description The email address of the user in whose account the label will be created.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_LABEL tool output.
 */
type GOOGLESUPER_CREATE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Gmail for the created label.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_MEET tool input.
 */
type GOOGLESUPER_CREATE_MEET_INPUT = {
  /**
   * Access Type
   * @description Access control level for the meeting space.
   * @enum {string}
   */
  access_type?: "OPEN" | "TRUSTED" | "RESTRICTED" | "ACCESS_TYPE_UNSPECIFIED";
  /**
   * Entry Point Access
   * @description Access control for meeting entry points.
   * @enum {string}
   */
  entry_point_access?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_MEET tool output.
 */
type GOOGLESUPER_CREATE_MEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response from the Google Meet API upon successful space creation.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_NAMED_RANGE tool input.
 */
type GOOGLESUPER_CREATE_NAMED_RANGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document where the named range will be created.
   */
  documentId?: string;
  /**
   * Name
   * @description The name for the new named range. Must be 1-256 characters.
   */
  name?: string;
  /**
   * Range End Index
   * @description The zero-based end index of the range.
   */
  rangeEndIndex?: number;
  /**
   * Range Segment Id
   * @description Optional. The ID of the header, footer, or footnote. Empty for document body.
   * @default null
   */
  rangeSegmentId: string | null;
  /**
   * Range Start Index
   * @description The zero-based start index of the range.
   */
  rangeStartIndex?: number;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_NAMED_RANGE tool output.
 */
type GOOGLESUPER_CREATE_NAMED_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Named Range Id
       * @description The ID of the created named range.
       */
      namedRangeId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_PARAGRAPH_BULLETS tool input.
 */
type GOOGLESUPER_CREATE_PARAGRAPH_BULLETS_INPUT = {
  /** Create Paragraph Bullets */
  createParagraphBullets?: {
      /**
       * Bullet Preset
       * @description The kinds of bullet glyphs to be used.
       * @enum {string}
       */
      bulletPreset: "BULLET_GLYPH_PRESET_UNSPECIFIED" | "BULLET_DISC_CIRCLE_SQUARE" | "BULLET_DIAMONDX_ARROW3D_SQUARE" | "BULLET_CHECKBOX" | "BULLET_ARROW_DIAMOND_DISC" | "BULLET_STAR_CIRCLE_SQUARE" | "BULLET_ARROW3D_CIRCLE_SQUARE" | "BULLET_LEFTTRIANGLE_DIAMOND_DISC" | "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE" | "BULLET_DIAMOND_CIRCLE_SQUARE" | "NUMBERED_DECIMAL_ALPHA_ROMAN" | "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS" | "NUMBERED_DECIMAL_NESTED" | "NUMBERED_UPPERALPHA_ALPHA_ROMAN" | "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL" | "NUMBERED_ZERODECIMAL_ALPHA_ROMAN";
      /**
       * Range
       * @description The range to apply the bullet preset to.
       */
      range: {
          /**
           * End Index
           * @description The zero-based end index of the range, exclusive.
           */
          endIndex: number;
          /**
           * Segment Id
           * @description The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Start Index
           * @description The zero-based start index of the range, inclusive.
           */
          startIndex: number;
      };
  };
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_PARAGRAPH_BULLETS tool output.
 */
type GOOGLESUPER_CREATE_PARAGRAPH_BULLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the bullets were added to.
       */
      documentId: string;
      /**
       * Replies
       * @description The replies to the request. For this action, it should contain one reply.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_REPLY tool input.
 */
type GOOGLESUPER_CREATE_REPLY_INPUT = {
  /**
   * Action
   * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen.
   * @default null
   */
  action: string | null;
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Content
   * @description The plain text content of the reply. HTML content is not supported.
   */
  content?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response.
   * @default null
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_REPLY tool output.
 */
type GOOGLESUPER_CREATE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen.
       * @default null
       */
      action: string | null;
      /**
       * Author
       * @description The user who created the reply.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description A short-lived display name for the user.
           * @default null
           */
          display_name: string | null;
          /**
           * Email Address
           * @description The email address of the user. This is only populated if the drive.readonly.metadata scope is used.
           * @default null
           */
          email_address: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permission_id: string | null;
          /**
           * Photo Link
           * @description A short-lived link to the user's profile photo, if available.
           * @default null
           */
          photo_link: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the reply.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time the reply was created (RFC 3339 date-time).
       * @default null
       */
      created_time: string | null;
      /**
       * Deleted
       * @description Whether the reply has been deleted. A deleted reply has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The HTML content of the reply.
       * @default null
       */
      html_content: string | null;
      /**
       * Id
       * @description The ID of the reply.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#reply'.
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * @description The last time the reply was modified (RFC 3339 date-time).
       * @default null
       */
      modified_time: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_SHORTCUT_TO_FILE tool input.
 */
type GOOGLESUPER_CREATE_SHORTCUT_TO_FILE_INPUT = {
  /**
   * Ignore Default Visibility
   * @description Whether to ignore the domain's default visibility settings for the created file.
   * @default null
   */
  ignoreDefaultVisibility: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the labelInfo part of the response.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Keep Revision Forever
   * @description Whether to set the 'keepForever' field in the new head revision.
   * @default null
   */
  keepRevisionForever: boolean | null;
  /**
   * Name
   * @description The name of the shortcut.
   */
  name?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Recommended to set to true if interacting with shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
  /**
   * Target Id
   * @description The ID of the file or folder that this shortcut points to.
   */
  target_id?: string;
  /**
   * Target Mime Type
   * @description The MIME type of the target file or folder. While optional, providing it can be helpful.
   * @default null
   */
  target_mime_type: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_SHORTCUT_TO_FILE tool output.
 */
type GOOGLESUPER_CREATE_SHORTCUT_TO_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drive Id
       * @description The ID of the drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      driveId: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       */
      kind: string;
      /**
       * Mime Type
       * @description The MIME type of the file.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the file.
       */
      name: string;
      /**
       * ShortcutDetails
       * @description Shortcut file details. Only populated for shortcut files.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @description The ID of the file or folder that this shortcut points to.
           */
          targetId: string;
          /**
           * Target Mime Type
           * @description The MIME type of the target.
           * @default null
           */
          targetMimeType: string | null;
      } | null;
      /**
       * Team Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      teamDriveId: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_SPREADSHEET_COLUMN tool input.
 */
type GOOGLESUPER_CREATE_SPREADSHEET_COLUMN_INPUT = {
  /**
   * Inherit From Before
   * @description If true, the new column inherits properties (e.g., formatting, width) from the column immediately to its left (the preceding column). If false (default), it inherits from the column immediately to its right (the succeeding column). This is ignored if there is no respective preceding or succeeding column.
   * @default false
   */
  inherit_from_before: boolean;
  /**
   * Insert Index
   * @description The 0-based index at which the new column will be inserted. For example, an index of 0 inserts the column before the current first column (A), and an index of 1 inserts it between the current columns A and B.
   * @default 0
   */
  insert_index: number;
  /**
   * Sheet Id
   * @description The numeric identifier of the specific sheet (tab) within the spreadsheet where the column will be added.
   */
  sheet_id?: number;
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet where the column will be created.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_SPREADSHEET_COLUMN tool output.
 */
type GOOGLESUPER_CREATE_SPREADSHEET_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet
       * @description A dictionary object representing the updated spreadsheet resource. This object contains details about the spreadsheet's properties and its sheets. Note: Grid data (cell values) is not included in this response.
       */
      spreadsheet?: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_SPREADSHEET_ROW tool input.
 */
type GOOGLESUPER_CREATE_SPREADSHEET_ROW_INPUT = {
  /**
   * Inherit From Before
   * @description If True, the newly inserted row will inherit formatting and properties from the row immediately preceding its insertion point. If False, it will have default formatting.
   * @default false
   */
  inherit_from_before: boolean;
  /**
   * Insert Index
   * @description The 0-based index at which the new row should be inserted. For example, an index of 0 inserts the row at the beginning of the sheet. If the index is greater than the current number of rows, the row is appended.
   * @default 0
   */
  insert_index: number;
  /**
   * Sheet Id
   * @description The numeric identifier of the sheet (tab) within the spreadsheet where the row will be inserted. This ID (gid) is found in the URL of the spreadsheet (e.g., '0' for the first sheet).
   */
  sheet_id?: number;
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet. This ID is found in the URL of the spreadsheet (e.g., '1qpyC0XzHc_-_d824s2VfopkHh7D0jW4aXCS1D_AlGA').
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_SPREADSHEET_ROW tool output.
 */
type GOOGLESUPER_CREATE_SPREADSHEET_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet
       * @description A dictionary representing the updated Google Spreadsheet resource, including details about the newly inserted row if 'includeSpreadsheetInResponse' was true in the underlying API call (which it is by default in this action).
       */
      spreadsheet?: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_TASK_LIST tool input.
 */
type GOOGLESUPER_CREATE_TASK_LIST_INPUT = {
  /**
   * Tasklist Title
   * @description Title for the new task list. The maximum allowed length is 1024 characters.
   */
  tasklist_title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_CREATE_TASK_LIST tool output.
 */
type GOOGLESUPER_CREATE_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       */
      etag?: string;
      /**
       * Id
       * @description Task list identifier.
       */
      id?: string;
      /**
       * Kind
       * @description Type of the resource. This is always 'tasks#taskList'.
       * @default tasks#taskList
       */
      kind: string;
      /**
       * Self Link
       * @description URL pointing to this task list. Used to retrieve, update, or delete this task list.
       */
      selfLink?: string;
      /**
       * Title
       * @description Title of the task list. Maximum length allowed: 1024 characters.
       */
      title?: string;
      /**
       * Updated
       * @description Last modification time of the task list (as a RFC 3339 timestamp).
       */
      updated?: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_COMMENT tool input.
 */
type GOOGLESUPER_DELETE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_COMMENT tool output.
 */
type GOOGLESUPER_DELETE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the operation.
       * @default Comment deleted successfully.
       */
      message: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_CONTENT_RANGE tool input.
 */
type GOOGLESUPER_DELETE_CONTENT_RANGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document from which to delete content. This ID can be found in the URL of the Google Doc.
   */
  document_id?: string;
  /**
   * Range
   * @description The range of content to delete. Deleting text across paragraph boundaries may merge paragraphs and affect styles. Certain deletions can invalidate document structure (e.g., part of a surrogate pair, last newline of critical elements, incomplete deletion of tables/equations).
   */
  range?: {
      /**
       * End Index
       * @description The zero-based end index of the range, in UTF-16 code units, relative to the beginning of the segment.
       * @default null
       */
      endIndex: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer, or footnote the range is in. An empty segment ID or omitting this field signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Start Index
       * @description The zero-based start index of the range, in UTF-16 code units, relative to the beginning of the segment.
       * @default null
       */
      startIndex: number | null;
      /**
       * Tab Id
       * @description The ID of the tab the range is in. When omitted, the request is applied to the first tab. In a document with a single tab, if provided, it must match the singular tab's ID; if omitted, it applies to the singular tab. In a multi-tab document, if provided, it applies to the specified tab; if omitted, it applies to the first tab.
       * @default null
       */
      tabId: string | null;
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_CONTENT_RANGE tool output.
 */
type GOOGLESUPER_DELETE_CONTENT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the content was deleted from.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. For DeleteContentRange, this is typically empty or contains information about the operation's success.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_DIMENSION tool input.
 */
type GOOGLESUPER_DELETE_DIMENSION_INPUT = {
  /**
   * Delete Dimension Request
   * @description The details for the delete dimension request object.
   */
  delete_dimension_request?: {
      /**
       * Range
       * @description The range of the dimension to delete.
       */
      range: {
          /**
           * Dimension
           * @description The dimension to delete.
           * @enum {string}
           */
          dimension: "ROWS" | "COLUMNS";
          /**
           * End Index
           * @description The zero-based end index of the range to delete, exclusive. The end index must be greater than the start index.
           */
          end_index: number;
          /**
           * Sheet Id
           * @description The ID of the sheet from which to delete the dimension.
           */
          sheet_id: number;
          /**
           * Start Index
           * @description The zero-based start index of the range to delete, inclusive. The start index must be less than the end index.
           */
          start_index: number;
      };
  };
  /**
   * Include Spreadsheet In Response
   * @description Determines if the update response should include the spreadsheet resource.
   * @default null
   */
  include_spreadsheet_in_response: boolean | null;
  /**
   * Response Include Grid Data
   * @description True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
   * @default null
   */
  response_include_grid_data: boolean | null;
  /**
   * Response Ranges
   * @description Limits the ranges of cells included in the response spreadsheet.
   * @default null
   */
  response_ranges: string[] | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_DIMENSION tool output.
 */
type GOOGLESUPER_DELETE_DIMENSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies to the batch update requests. For DeleteDimensionRequest, the reply is an empty object if successful.
       */
      replies: Record<string, never>[];
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet that was updated.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_DRAFT tool input.
 */
type GOOGLESUPER_DELETE_DRAFT_INPUT = {
  /**
   * Draft Id
   * @description Immutable ID of the draft to delete, typically obtained when the draft was created.
   */
  draft_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user; 'me' is recommended.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_DRAFT tool output.
 */
type GOOGLESUPER_DELETE_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates successful deletion; an exception is raised on error rather than returning false.
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_DRIVE tool input.
 */
type GOOGLESUPER_DELETE_DRIVE_INPUT = {
  /**
   * Allow Item Deletion
   * @description Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
   * @default null
   */
  allowItemDeletion: boolean | null;
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  driveId?: string;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_DRIVE tool output.
 */
type GOOGLESUPER_DELETE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_EVENT tool input.
 */
type GOOGLESUPER_DELETE_EVENT_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar (e.g., email address, specific ID, or 'primary' for the authenticated user's main calendar) from which the event will be deleted.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Id
   * @description Unique identifier of the event to delete, typically obtained upon event creation.
   */
  event_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_EVENT tool output.
 */
type GOOGLESUPER_DELETE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details the deletion outcome: `{'status': 'success'}` for a standard 204 No Content, or `{'message': <API_JSON_response>}` if the API returns a body on other success statuses.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_FOOTER tool input.
 */
type GOOGLESUPER_DELETE_FOOTER_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to delete the footer from.
   */
  document_id?: string;
  /**
   * Footer Id
   * @description The ID of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section.
   */
  footer_id?: string;
  /**
   * Tab Id
   * @description The tab that contains the footer to delete. When omitted, the request is applied to the first tab.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_FOOTER tool output.
 */
type GOOGLESUPER_DELETE_FOOTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document from which the footer was deleted.
       */
      document_id: string;
      /**
       * Reply
       * @description The response from the Google Docs API. Can be a dict or list of dicts.
       * @default null
       */
      reply: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_HEADER tool input.
 */
type GOOGLESUPER_DELETE_HEADER_INPUT = {
  /**
   * Document Id
   * @description The ID of the document from which to delete the header.
   */
  document_id?: string;
  /**
   * Header Id
   * @description The ID of the header to delete. If this header is defined on `DocumentStyle`, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a `SectionStyle`, the reference to this header is removed and the header of that type is now continued from the previous section.
   */
  header_id?: string;
  /**
   * Tab Id
   * @description The tab containing the header to delete. When omitted, the request is applied to the first tab.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_HEADER tool output.
 */
type GOOGLESUPER_DELETE_HEADER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document from which the header was deleted.
       */
      document_id: string;
      /**
       * Reply
       * @description Reply from Google Docs API after deleting the header.
       * @default null
       */
      reply: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_MESSAGE tool input.
 */
type GOOGLESUPER_DELETE_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description Identifier of the email message to delete.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address. The special value 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_MESSAGE tool output.
 */
type GOOGLESUPER_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the message was successfully deleted.
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_NAMED_RANGE tool input.
 */
type GOOGLESUPER_DELETE_NAMED_RANGE_INPUT = {
  /**
   * Delete Named Range
   * @description Specifies the named range to delete.
   */
  deleteNamedRange?: {
      /**
       * Name
       * @description The name of the range(s) to delete. All named ranges with the given name will be deleted.
       * @default null
       */
      name: string | null;
      /**
       * Named Range Id
       * @description The ID of the named range to delete.
       * @default null
       */
      namedRangeId: string | null;
      /**
       * TabsCriteria
       * @description Optional. The criteria used to specify which tab(s) the range deletion should occur in. When omitted, the range deletion is applied to all tabs.
       * @default null
       */
      tabsCriteria: {
          /**
           * Tab Ids
           * @description The list of tab IDs in which the request executes.
           */
          tabIds: string[];
      } | null;
  };
  /**
   * Document Id
   * @description The ID of the document.
   */
  document_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_NAMED_RANGE tool output.
 */
type GOOGLESUPER_DELETE_NAMED_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document to which the changes were applied.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies. For a successful DeleteNamedRange, this might be an empty object or have minimal info.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_PARAGRAPH_BULLETS tool input.
 */
type GOOGLESUPER_DELETE_PARAGRAPH_BULLETS_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Range
   * @description The range of the document from which to delete paragraph bullets. The range is applied to the document body by default. To specify a different segment (e.g. header, footer), include segment_id in the range object.
   */
  range?: {
      /**
       * End Index
       * @description The zero-based end index of the range, in UTF-16 code units, relative to the start of the segment.
       * @default null
       */
      endIndex: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer, or footnote the range is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Start Index
       * @description The zero-based start index of the range, in UTF-16 code units, relative to the start of the segment.
       * @default null
       */
      startIndex: number | null;
      /**
       * Tab Id
       * @description The ID of the tab the range is in. If omitted, it applies to the first tab or the singular tab in a single-tab document.
       * @default null
       */
      tabId: string | null;
  };
  /**
   * Tab Id
   * @description The ID of the tab the range is in. If omitted, it applies to the first tab or the singular tab in a single-tab document.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_PARAGRAPH_BULLETS tool output.
 */
type GOOGLESUPER_DELETE_PARAGRAPH_BULLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the bullets were deleted from.
       * @default null
       */
      document_id: string | null;
      /**
       * Replies
       * @description A list of replies from the Google Docs API, one for each request in the batch. For DeleteParagraphBullets, this will typically be an empty object if successful.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Write Control
       * @description Provides control over how write requests are executed.
       * @default null
       */
      write_control: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_PERMISSION tool input.
 */
type GOOGLESUPER_DELETE_PERMISSION_INPUT = {
  /**
   * File Id
   * @description The ID of the file or shared drive.
   */
  file_id?: string;
  /**
   * Permission Id
   * @description The ID of the permission.
   */
  permission_id?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_PERMISSION tool output.
 */
type GOOGLESUPER_DELETE_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the permission was deleted successfully.
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_REPLY tool input.
 */
type GOOGLESUPER_DELETE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Reply Id
   * @description The ID of the reply.
   */
  reply_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_REPLY tool output.
 */
type GOOGLESUPER_DELETE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_SHEET tool input.
 */
type GOOGLESUPER_DELETE_SHEET_INPUT = {
  /**
   * Sheet Id
   * @description The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted.
   */
  sheet_id?: number;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet from which to delete the sheet.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_SHEET tool output.
 */
type GOOGLESUPER_DELETE_SHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies for each request in the batch. For a DeleteSheetRequest, the reply will be an empty object {} upon success.
       */
      replies: {
          [key: string]: unknown;
      }[];
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TABLE tool input.
 */
type GOOGLESUPER_DELETE_TABLE_INPUT = {
  /**
   * Document Id
   * @description The ID of the Google Document from which the table will be deleted.
   */
  document_id?: string;
  /**
   * Segment Id
   * @description The ID of the segment (e.g., header, footer) containing the table. If omitted or empty, the table is assumed to be in the main document body.
   * @default null
   */
  segment_id: string | null;
  /**
   * Tab Id
   * @description The ID of the tab containing the table, if the document uses tabs. If omitted, the action applies to the first tab or the only tab.
   * @default null
   */
  tab_id: string | null;
  /**
   * Table End Index
   * @description The end index (UTF-16 code unit) of the table's range to be deleted.
   */
  table_end_index?: number;
  /**
   * Table Start Index
   * @description The start index (UTF-16 code unit) of the table's range to be deleted.
   */
  table_start_index?: number;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TABLE tool output.
 */
type GOOGLESUPER_DELETE_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document where the table was deleted.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies corresponding to each request in the batch update. For a successful deleteContentRange, the reply is typically empty.
       */
      replies: {
          [key: string]: unknown;
      }[];
      /**
       * Write Control
       * @description The write control that was applied to the request.
       * @default null
       */
      writeControl: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TABLE_COLUMN tool input.
 */
type GOOGLESUPER_DELETE_TABLE_COLUMN_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to delete the table column from.
   */
  document_id?: string;
  /**
   * Requests
   * @description A list of requests to be applied to the document.
   */
  requests?: {
      /** Delete Table Column */
      deleteTableColumn: {
          /**
           * Table Cell Location
           * @description The reference table cell location from which the column will be deleted.
           */
          tableCellLocation: {
              /**
               * Column Index
               * @description The zero-based column index. For example, the second column in the table has a column index of 1.
               */
              columnIndex: number;
              /**
               * Row Index
               * @description The zero-based row index. For example, the second row in the table has a row index of 1.
               */
              rowIndex: number;
              /**
               * Table Start Location
               * @description The location where the table starts in the document.
               */
              tableStartLocation: {
                  /**
                   * Index
                   * @description The zero-based index, in UTF-16 code units.
                   * @default null
                   */
                  index: number | null;
                  /**
                   * Segment Id
                   * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
                   * @default null
                   */
                  segmentId: string | null;
                  /**
                   * Tab Id
                   * @description The tab that the location is in. When omitted, the request is applied to the first tab.
                   * @default null
                   */
                  tabId: string | null;
              };
          };
      };
  }[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TABLE_COLUMN tool output.
 */
type GOOGLESUPER_DELETE_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document.
       * @default null
       */
      document_id: string | null;
      /**
       * Replies
       * @description The replies to the requests. This field is empty if the requests were successful.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TABLE_ROW tool input.
 */
type GOOGLESUPER_DELETE_TABLE_ROW_INPUT = {
  /**
   * Document Id
   * @description The ID of the document.
   */
  documentId?: string;
  /**
   * Table Cell Location
   * @description The reference table cell location from which the row will be deleted.
   */
  tableCellLocation?: {
      /**
       * Column Index
       * @description The zero-based column index. For example, the second column in the table has a column index of 1.
       */
      columnIndex: number;
      /**
       * Row Index
       * @description The zero-based row index. For example, the second row in the table has a row index of 1.
       */
      rowIndex: number;
      /**
       * Table Start Location
       * @description The location where the table starts in the document.
       */
      tableStartLocation: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
           * @default null
           */
          index: number | null;
          /**
           * Segment Id
           * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Tab Id
           * @description The tab that the location is in. When omitted, the request is applied to the first tab.
           * @default null
           */
          tabId: string | null;
      };
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TABLE_ROW tool output.
 */
type GOOGLESUPER_DELETE_TABLE_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Delete Table Row Reply
       * @description The specific reply content for the deleteTableRow operation.
       * @default null
       */
      deleteTableRowReply: {
          [key: string]: unknown;
      } | null;
      /**
       * Document Id
       * @description ID of the document the row was deleted from.
       */
      documentId: string;
      /**
       * Replies
       * @description Raw list of replies from the batchUpdate request.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TASK tool input.
 */
type GOOGLESUPER_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the Google Task to be deleted.
   */
  task_id?: string;
  /**
   * Tasklist Id
   * @description The unique identifier of the Google Task list from which the task will be deleted.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TASK tool output.
 */
type GOOGLESUPER_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary indicating the outcome of the delete operation. On successful deletion (HTTP 204 No Content), this will typically be `{'status': 'success'}`. If the API returns a body for other status codes, this field will contain the parsed JSON response.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TASK_LIST tool input.
 */
type GOOGLESUPER_DELETE_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description Unique identifier of the Google Task list to be deleted.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DELETE_TASK_LIST tool output.
 */
type GOOGLESUPER_DELETE_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Outcome of the deletion. Typically `{'status': 'success'}` for HTTP 204, or `{'message': ...}` with other API response details.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_DISTANCE_MATRIX_API tool input.
 */
type GOOGLESUPER_DISTANCE_MATRIX_API_INPUT = {
  /**
   * Arrival Time
   * @description Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either departure_time or arrival_time, but not both.
   * @default null
   */
  arrival_time: number | null;
  /**
   * Avoid
   * @description Indicates that the calculated route should avoid the specified features. Multiple values can be pipe-separated e.g. 'tolls|highways'.
   * @default null
   * @enum {string|null}
   */
  avoid: "tolls" | "highways" | "ferries" | "indoor" | null;
  /**
   * Departure Time
   * @description Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC, or as the string 'now'. Required for duration_in_traffic.
   * @default null
   */
  departure_time: number | null;
  /**
   * Destinations
   * @description One or more locations to use as the finishing point for calculating travel distance and time. Accepts the same formats as origins.
   */
  destinations?: string;
  /**
   * Key
   * @description Your application's API key. This key identifies your application for purposes of quota management.
   * @default null
   */
  key: string | null;
  /**
   * Language
   * @description The language in which to return results. See the list of supported languages: https://developers.google.com/maps/faq#languagesupport
   * @default null
   */
  language: string | null;
  /**
   * Mode
   * @description Specifies the mode of transport to use.
   * @default driving
   * @enum {string|null}
   */
  mode: "driving" | "walking" | "bicycling" | "transit" | null;
  /**
   * Origins
   * @description The starting point for calculating travel distance and time. You can supply one or more locations separated by the pipe character (|), in the form of a place ID (prefixed with place_id:), an address, latitude/longitude coordinates (e.g., '40.7128,-74.0060'), a plus code, or an encoded polyline (prefixed with enc: and a colon).
   */
  origins?: string;
  /**
   * Region
   * @description The region code, specified as a ccTLD ('top-level domain') two-character value. This helps influence results based on the region.
   * @default null
   */
  region: string | null;
  /**
   * Traffic Model
   * @description Specifies the assumptions to use when calculating time in traffic. This parameter is only used if the request includes a departure_time and mode is 'driving'.
   * @default null
   * @enum {string|null}
   */
  traffic_model: "best_guess" | "pessimistic" | "optimistic" | null;
  /**
   * Transit Mode
   * @description Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. Multiple values can be pipe-separated e.g. 'bus|train'.
   * @default null
   * @enum {string|null}
   */
  transit_mode: "bus" | "subway" | "train" | "tram" | "rail" | null;
  /**
   * Transit Routing Preference
   * @description Specifies preferences for transit routes. This parameter may only be specified for transit directions.
   * @default null
   * @enum {string|null}
   */
  transit_routing_preference: "less_walking" | "fewer_transfers" | null;
  /**
   * Units
   * @description Specifies the unit system to use when displaying results. The default is metric.
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DISTANCE_MATRIX_API tool output.
 */
type GOOGLESUPER_DISTANCE_MATRIX_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Destination Addresses
       * @description An array of addresses as returned by the API from your original request for destinations.
       */
      destination_addresses: string[];
      /**
       * Error Message
       * @description A string containing the human-readable text of any errors encountered while the request was being processed.
       * @default null
       */
      error_message: string | null;
      /**
       * Origin Addresses
       * @description An array of addresses as returned by the API from your original request for origins.
       */
      origin_addresses: string[];
      /**
       * Rows
       * @description An array of rows, each row containing one origin paired with each destination.
       */
      rows: {
          /**
           * Elements
           * @description An array of elements, which in turn each contain a status, duration, and distance element.
           */
          elements: {
              /**
               * TextValueObject
               * @description The total distance of this route, expressed in meters (value) and as text.
               * @default null
               */
              distance: {
                  /**
                   * Text
                   * @description String value.
                   */
                  text: string;
                  /**
                   * Value
                   * @description Numeric value.
                   */
                  value: number;
              } | null;
              /**
               * TextValueObject
               * @description The length of time it takes to travel this route, expressed in seconds (the value field) and as text.
               * @default null
               */
              duration: {
                  /**
                   * Text
                   * @description String value.
                   */
                  text: string;
                  /**
                   * Value
                   * @description Numeric value.
                   */
                  value: number;
              } | null;
              /**
               * TextValueObject
               * @description The length of time it takes to travel this route, based on current and historical traffic conditions.
               * @default null
               */
              duration_in_traffic: {
                  /**
                   * Text
                   * @description String value.
                   */
                  text: string;
                  /**
                   * Value
                   * @description Numeric value.
                   */
                  value: number;
              } | null;
              /**
               * Fare
               * @description If present, contains the total fare (that is, the total ticket costs) on this route.
               * @default null
               */
              fare: {
                  /**
                   * Currency
                   * @description An ISO 4217 currency code indicating the currency that the amount is expressed in.
                   */
                  currency: string;
                  /**
                   * Text
                   * @description The total fare amount, formatted in the requested language.
                   */
                  text: string;
                  /**
                   * Value
                   * @description The total fare amount, in the currency specified.
                   */
                  value: number;
              } | null;
              /**
               * Status
               * @description A status for the element. See DistanceMatrixElementStatus for more information.
               */
              status: string;
          }[];
      }[];
      /**
       * Status
       * @description Contains the status of the request (e.g., OK, INVALID_REQUEST).
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
 * Type of GOOGLESUPER's GOOGLESUPER_DOWNLOAD_FILE tool input.
 */
type GOOGLESUPER_DOWNLOAD_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier of the file to be downloaded from Google Drive. This ID can typically be found in the file's URL in Google Drive or obtained from API calls that list files.
   */
  file_id?: string;
  /**
   * MimeType
   * @description Target MIME type for exporting Google Workspace documents (e.g., Google Doc, Sheet, Slide). Supported export formats vary by file type; e.g., text/plain is only supported for Google Docs, not Sheets or Slides. This parameter is automatically ignored for non-Google Workspace files, which are downloaded in their native format. Only specify this when you want to export a Google Workspace document to a different format (e.g., export Google Doc to PDF).
   * @default null
   * @enum {string|null}
   */
  mime_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.oasis.opendocument.text" | "application/rtf" | "application/pdf" | "text/plain" | "application/zip" | "application/epub+zip" | "text/markdown" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/x-vnd.oasis.opendocument.spreadsheet" | "text/csv" | "text/tab-separated-values" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.oasis.opendocument.presentation" | "image/jpeg" | "image/png" | "image/svg+xml" | "application/vnd.google-apps.script+json" | "application/vnd.google-apps.vid" | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DOWNLOAD_FILE tool output.
 */
type GOOGLESUPER_DOWNLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Downloaded File Content
       * @description A reference to the downloaded file content. If the original file was a Google Workspace document and a mime_type was specified for export, this content will be in the exported format. Otherwise, it will be the original file content.
       */
      downloaded_file_content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
      };
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default drive#file
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_DUPLICATE_CALENDAR tool input.
 */
type GOOGLESUPER_DUPLICATE_CALENDAR_INPUT = {
  /**
   * Summary
   * @description Title for the new Google Calendar to be created. If an empty string is provided, the calendar will be created without a title.
   * @default
   */
  summary: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_DUPLICATE_CALENDAR tool output.
 */
type GOOGLESUPER_DUPLICATE_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendar Data
       * @description A dictionary representing the newly created Google Calendar resource, including its ID, summary, and other properties as returned by the Google Calendar API.
       */
      calendar_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_EDIT_FILE tool input.
 */
type GOOGLESUPER_EDIT_FILE_INPUT = {
  /**
   * Content
   * @description New textual content to overwrite the existing file; will be UTF-8 encoded for upload.
   */
  content?: string;
  /**
   * File Id
   * @description Identifier of the Google Drive file to update.
   */
  file_id?: string;
  /**
   * Mime Type
   * @description MIME type of the 'content' being uploaded; must accurately represent its format.
   * @default text/plain
   */
  mime_type: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EDIT_FILE tool output.
 */
type GOOGLESUPER_EDIT_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs which are visible to all apps.
       * @default null
       */
      appProperties: {
          [key: string]: string;
      } | null;
      /**
       * FileCapabilities
       * @description Capabilities the current user has on this file.
       * @default null
       */
      capabilities: {
          /**
           * Can Accept Ownership
           * @default null
           */
          canAcceptOwnership: boolean | null;
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Add Folder From Another Drive
           * @default null
           */
          canAddFolderFromAnotherDrive: boolean | null;
          /**
           * Can Add My Drive Parent
           * @default null
           */
          canAddMyDriveParent: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission
           * @default null
           */
          canChangeCopyRequiresWriterPermission: boolean | null;
          /**
           * Can Change Security Update Enabled
           * @default null
           */
          canChangeSecurityUpdateEnabled: boolean | null;
          /**
           * Can Change Viewers Can Copy Content
           * @default null
           */
          canChangeViewersCanCopyContent: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Disable Inherited Permissions
           * @default null
           */
          canDisableInheritedPermissions: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can Enable Inherited Permissions
           * @default null
           */
          canEnableInheritedPermissions: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Modify Content
           * @default null
           */
          canModifyContent: boolean | null;
          /**
           * Can Modify Content Restriction
           * @default null
           */
          canModifyContentRestriction: boolean | null;
          /**
           * Can Modify Editor Content Restriction
           * @default null
           */
          canModifyEditorContentRestriction: boolean | null;
          /**
           * Can Modify Labels
           * @default null
           */
          canModifyLabels: boolean | null;
          /**
           * Can Modify Owner Content Restriction
           * @default null
           */
          canModifyOwnerContentRestriction: boolean | null;
          /**
           * Can Move Children Out Of Drive
           * @default null
           */
          canMoveChildrenOutOfDrive: boolean | null;
          /**
           * Can Move Children Out Of Team Drive
           * @default null
           */
          canMoveChildrenOutOfTeamDrive: boolean | null;
          /**
           * Can Move Children Within Drive
           * @default null
           */
          canMoveChildrenWithinDrive: boolean | null;
          /**
           * Can Move Children Within Team Drive
           * @default null
           */
          canMoveChildrenWithinTeamDrive: boolean | null;
          /**
           * Can Move Item Into Team Drive
           * @default null
           */
          canMoveItemIntoTeamDrive: boolean | null;
          /**
           * Can Move Item Out Of Drive
           * @default null
           */
          canMoveItemOutOfDrive: boolean | null;
          /**
           * Can Move Item Out Of Team Drive
           * @default null
           */
          canMoveItemOutOfTeamDrive: boolean | null;
          /**
           * Can Move Item Within Drive
           * @default null
           */
          canMoveItemWithinDrive: boolean | null;
          /**
           * Can Move Item Within Team Drive
           * @default null
           */
          canMoveItemWithinTeamDrive: boolean | null;
          /**
           * Can Move Team Drive Item
           * @default null
           */
          canMoveTeamDriveItem: boolean | null;
          /**
           * Can Read Drive
           * @default null
           */
          canReadDrive: boolean | null;
          /**
           * Can Read Labels
           * @default null
           */
          canReadLabels: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Read Team Drive
           * @default null
           */
          canReadTeamDrive: boolean | null;
          /**
           * Can Remove Children
           * @default null
           */
          canRemoveChildren: boolean | null;
          /**
           * Can Remove Content Restriction
           * @default null
           */
          canRemoveContentRestriction: boolean | null;
          /**
           * Can Remove My Drive Parent
           * @default null
           */
          canRemoveMyDriveParent: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash
           * @default null
           */
          canTrash: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
          /**
           * Can Untrash
           * @default null
           */
          canUntrash: boolean | null;
      } | null;
      /**
       * ContentHints
       * @description Additional information about the content of the file.
       * @default null
       */
      contentHints: {
          /**
           * Indexable Text
           * @description Text to be indexed for the file to improve searchability.
           * @default null
           */
          indexableText: string | null;
          /**
           * ContentHintsThumbnail
           * @description A thumbnail for the file.
           * @default null
           */
          thumbnail: {
              /**
               * Image
               * @description A Base64 encoded image.
               * @default null
               */
              image: string | null;
              /**
               * Mime Type
               * @description The MIME type of the thumbnail.
               * @default null
               */
              mimeType: string | null;
          } | null;
      } | null;
      /**
       * Content Restrictions
       * @description Content restrictions for this file.
       * @default null
       */
      contentRestrictions: {
          /**
           * Owner Restricted
           * @default null
           */
          ownerRestricted: boolean | null;
          /**
           * Read Only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Reason
           * @default null
           */
          reason: string | null;
          /**
           * User
           * @default null
           */
          restrictingUser: {
              /**
               * Display Name
               * @description A plain text displayable name for this user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Restriction Time
           * @default null
           */
          restrictionTime: string | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether copying this file requires writer permission.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      driveId: string | null;
      /**
       * Explicitly Trashed
       * @description Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
       * @default null
       */
      explicitlyTrashed: boolean | null;
      /**
       * Export Links
       * @description Links for exporting Google Docs Editors files to specific formats.
       * @default null
       */
      exportLinks: {
          [key: string]: string;
      } | null;
      /**
       * File Extension
       * @description The file extension extracted from the name field.
       * @default null
       */
      fileExtension: string | null;
      /**
       * Folder Color Rgb
       * @description The color for a folder as an RGB hex string.
       * @default null
       */
      folderColorRgb: string | null;
      /**
       * Full File Extension
       * @description The full file extension extracted from the name field.
       * @default null
       */
      fullFileExtension: string | null;
      /**
       * Has Augmented Permissions
       * @description Whether there are permissions directly on this file. This field is only populated for items in shared drives.
       * @default null
       */
      hasAugmentedPermissions: boolean | null;
      /**
       * Has Thumbnail
       * @description Whether this file has a thumbnail.
       * @default null
       */
      hasThumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description The ID of the head revision of the file.
       * @default null
       */
      headRevisionId: string | null;
      /**
       * Icon Link
       * @description A static, publicly accessible link to the file's icon.
       * @default null
       */
      iconLink: string | null;
      /**
       * Id
       * @description Unique identifier of the edited file.
       */
      id: string;
      /**
       * ImageMediaMetadata
       * @description Metadata for image media.
       * @default null
       */
      imageMediaMetadata: {
          /**
           * Aperture
           * @default null
           */
          aperture: number | null;
          /**
           * Camera Make
           * @default null
           */
          cameraMake: string | null;
          /**
           * Camera Model
           * @default null
           */
          cameraModel: string | null;
          /**
           * Color Space
           * @default null
           */
          colorSpace: string | null;
          /**
           * Exposure Bias
           * @default null
           */
          exposureBias: number | null;
          /**
           * Exposure Mode
           * @default null
           */
          exposureMode: string | null;
          /**
           * Exposure Time
           * @default null
           */
          exposureTime: number | null;
          /**
           * Flash Used
           * @default null
           */
          flashUsed: boolean | null;
          /**
           * Focal Length
           * @default null
           */
          focalLength: number | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Iso Speed
           * @default null
           */
          isoSpeed: number | null;
          /**
           * ImageMediaMetadataLocation
           * @default null
           */
          location: {
              /**
               * Altitude
               * @default null
               */
              altitude: number | null;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
          } | null;
          /**
           * Max Aperture Value
           * @default null
           */
          maxApertureValue: number | null;
          /**
           * Metering Mode
           * @default null
           */
          meteringMode: string | null;
          /**
           * Rotation
           * @default null
           */
          rotation: number | null;
          /**
           * Sensor
           * @default null
           */
          sensor: string | null;
          /**
           * Subject Distance
           * @default null
           */
          subjectDistance: number | null;
          /**
           * Time
           * @default null
           */
          time: string | null;
          /**
           * White Balance
           * @default null
           */
          whiteBalance: string | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Is App Authorized
       * @description Whether the file was created or opened by the requesting app.
       * @default null
       */
      isAppAuthorized: boolean | null;
      /**
       * Kind
       * @description Resource kind, typically 'drive#file'.
       */
      kind: string;
      /**
       * LabelInfo
       * @description Information about custom labels applied to this file.
       * @default null
       */
      labelInfo: {
          /**
           * Labels
           * @default null
           */
          labels: {
              /**
               * Fields
               * @default null
               */
              fields: {
                  [key: string]: unknown;
              } | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
              /**
               * Kind
               * @default null
               */
              kind: string | null;
              /**
               * Revision Id
               * @default null
               */
              revisionId: string | null;
          }[] | null;
      } | null;
      /**
       * User
       * @description The last user to modify the file.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * LinkShareMetadata
       * @description Metadata about the shared link for this file.
       * @default null
       */
      linkShareMetadata: {
          /**
           * Security Update Eligible
           * @default null
           */
          securityUpdateEligible: boolean | null;
          /**
           * Security Update Enabled
           * @default null
           */
          securityUpdateEnabled: boolean | null;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum for the content of this file.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description MIME type of the edited file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified By Me
       * @description Whether the file has been modified by this user.
       * @default null
       */
      modifiedByMe: boolean | null;
      /**
       * Modified By Me Time
       * @description The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modifiedByMeTime: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Name
       * @description Name of the edited file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content if the file was uploaded from a file.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Owned By Me
       * @description Whether the user owns the file.
       * @default null
       */
      ownedByMe: boolean | null;
      /**
       * Owners
       * @description A list of users who own the file.
       * @default null
       */
      owners: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Permission Ids
       * @description A list of permission IDs for the file.
       * @default null
       */
      permissionIds: string[] | null;
      /**
       * Permissions
       * @description The permissions for the file. Only populated if explicitly requested.
       * @default null
       */
      permissions: {
          /**
           * Allow File Discovery
           * @default null
           */
          allowFileDiscovery: boolean | null;
          /**
           * Deleted
           * @default null
           */
          deleted: boolean | null;
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /**
           * Email Address
           * @default null
           */
          emailAddress: string | null;
          /**
           * Expiration Time
           * @default null
           */
          expirationTime: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Inherited
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Kind
           * @default null
           */
          kind: string | null;
          /**
           * Permission Details
           * @default null
           */
          permissionDetails: {
              /**
               * Inherited
               * @default null
               */
              inherited: boolean | null;
              /**
               * Inherited From
               * @default null
               */
              inheritedFrom: string | null;
              /**
               * Permission Type
               * @default null
               */
              permissionType: string | null;
              /**
               * Role
               * @default null
               */
              role: string | null;
          }[] | null;
          /**
           * Photo Link
           * @default null
           */
          photoLink: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * Team Drive Permission Details
           * @default null
           */
          teamDrivePermissionDetails: {
              /**
               * Inherited
               * @default null
               */
              inherited: boolean | null;
              /**
               * Inherited From
               * @default null
               */
              inheritedFrom: string | null;
              /**
               * Permission Type
               * @default null
               */
              permissionType: string | null;
              /**
               * Role
               * @default null
               */
              role: string | null;
          }[] | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description The number of quota bytes used by this file.
       * @default null
       */
      quotaBytesUsed: string | null;
      /**
       * Resource Key
       * @description A resource key for the file.
       * @default null
       */
      resourceKey: string | null;
      /**
       * Sha1 Checksum
       * @description The SHA1 checksum for the content of this file.
       * @default null
       */
      sha1Checksum: string | null;
      /**
       * Sha256 Checksum
       * @description The SHA256 checksum for the content of this file.
       * @default null
       */
      sha256Checksum: string | null;
      /**
       * Shared
       * @description Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description The time at which the file was shared with the user (RFC 3339 date-time).
       * @default null
       */
      sharedWithMeTime: string | null;
      /**
       * User
       * @description The user who shared the file with the requesting user, if applicable.
       * @default null
       */
      sharingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * ShortcutDetails
       * @description Shortcut file details. Only populated for shortcut files.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @description The ID of the file that this shortcut points to.
           * @default null
           */
          targetId: string | null;
          /**
           * Target Mime Type
           * @description The MIME type of the file that this shortcut points to.
           * @default null
           */
          targetMimeType: string | null;
          /**
           * Target Resource Key
           * @description The resource key of the target file.
           * @default null
           */
          targetResourceKey: string | null;
      } | null;
      /**
       * Size
       * @description The size of the file's content in bytes. This is only applicable to files with binary content.
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
       * @default null
       */
      spaces: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Thumbnail Link
       * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours.
       * @default null
       */
      thumbnailLink: string | null;
      /**
       * Thumbnail Version
       * @description The thumbnail version for use in thumbnail cache invalidation.
       * @default null
       */
      thumbnailVersion: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Trashed Time
       * @description The time that the item was trashed. Only populated for items in shared drives.
       * @default null
       */
      trashedTime: string | null;
      /**
       * User
       * @description The user who trashed the file. Only populated for items in shared drives.
       * @default null
       */
      trashingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: string | null;
      /**
       * VideoMediaMetadata
       * @description Metadata for video media.
       * @default null
       */
      videoMediaMetadata: {
          /**
           * Duration Millis
           * @default null
           */
          durationMillis: string | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Viewed By Me
       * @description Whether the file has been viewed by this user.
       * @default null
       */
      viewedByMe: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewedByMeTime: string | null;
      /**
       * Viewers Can Copy Content
       * @description Whether users with viewer permissions are permitted to copy the content of this file.
       * @default null
       */
      viewersCanCopyContent: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
      /**
       * Writers Can Share
       * @description Whether writers can share the document with other users.
       * @default null
       */
      writersCanShare: boolean | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_EMPTY_TRASH tool input.
 */
type GOOGLESUPER_EMPTY_TRASH_INPUT = {
  /**
   * Drive Id
   * @description If set, empties the trash of the provided shared drive. This parameter is ignored if the item is not in a shared drive.
   * @default null
   */
  driveId: string | null;
  /**
   * Enforce Single Parent
   * @description Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. This parameter is ignored if the item is not in a shared drive.
   * @default null
   */
  enforceSingleParent: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EMPTY_TRASH tool output.
 */
type GOOGLESUPER_EMPTY_TRASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the operation.
       * @default Trash emptied successfully.
       */
      message: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_INSTANCES tool input.
 */
type GOOGLESUPER_EVENTS_INSTANCES_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the `calendarList.list` method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Event Id
   * @description Recurring event identifier.
   */
  eventId?: string;
  /**
   * Max Attendees
   * @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @default null
   */
  maxAttendees: number | null;
  /**
   * Max Results
   * @description Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @default null
   */
  maxResults: number | null;
  /**
   * Original Start
   * @description The original start time of the instance in the result. Optional.
   * @default null
   */
  originalStart: string | null;
  /**
   * Page Token
   * @description Token specifying which result page to return. Optional.
   * @default null
   */
  pageToken: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if `singleEvents` is False. Optional. The default is False.
   * @default null
   */
  showDeleted: boolean | null;
  /**
   * Time Max
   * @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
   * @default null
   */
  timeMax: string | null;
  /**
   * Time Min
   * @description Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
   * @default null
   */
  timeMin: string | null;
  /**
   * Time Zone
   * @description Time zone used in the response. Optional. The default is the time zone of the calendar.
   * @default null
   */
  timeZone: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_INSTANCES tool output.
 */
type GOOGLESUPER_EVENTS_INSTANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The user's access role for this calendar. Read-only.
       * @default null
       */
      accessRole: string | null;
      /**
       * Default Reminders
       * @description The default reminders on the calendar for the authenticated user.
       * @default null
       */
      defaultReminders: {
          /**
           * Method
           * @description The method used by this reminder. Possible values are: 'email', 'popup'.
           * @default null
           */
          method: string | null;
          /**
           * Minutes
           * @description Number of minutes before the start of the event when the reminder should trigger.
           * @default null
           */
          minutes: number | null;
      }[] | null;
      /**
       * Description
       * @description Description of the calendar. Read-only.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the collection.
       * @default null
       */
      etag: string | null;
      /**
       * Items
       * @description List of event instances.
       * @default null
       */
      items: {
          /**
           * Attachments
           * @description File attachments for the event.
           * @default null
           */
          attachments: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Attendees
           * @default null
           */
          attendees: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Self
               * @description Whether this is the authenticated user.
               * @default null
               */
              self: boolean | null;
          }[] | null;
          /**
           * Attendees Omitted
           * @default null
           */
          attendeesOmitted: boolean | null;
          /**
           * Color Id
           * @description The color of the event.
           * @default null
           */
          colorId: string | null;
          /**
           * ConferenceData
           * @default null
           */
          conferenceData: {
              /**
               * Conference Id
               * @default null
               */
              conferenceId: string | null;
              /**
               * Conference Solution
               * @default null
               */
              conferenceSolution: {
                  [key: string]: unknown;
              } | null;
              /**
               * CreateRequest
               * @default null
               */
              createRequest: {
                  /**
                   * ConferenceSolutionKey
                   * @default null
                   */
                  conferenceSolutionKey: {
                      /**
                       * Type
                       * @default null
                       */
                      type: string | null;
                  } | null;
                  /**
                   * Request Id
                   * @default null
                   */
                  requestId: string | null;
                  /**
                   * Status
                   * @default null
                   */
                  status: string | null;
              } | null;
              /**
               * Entry Points
               * @default null
               */
              entryPoints: {
                  /**
                   * Entry Point Type
                   * @default null
                   */
                  entryPointType: string | null;
                  /**
                   * Label
                   * @default null
                   */
                  label: string | null;
                  /**
                   * Uri
                   * @default null
                   */
                  uri: string | null;
              }[] | null;
              /**
               * Notes
               * @default null
               */
              notes: string | null;
              /**
               * Signature
               * @default null
               */
              signature: string | null;
          } | null;
          /**
           * Created
           * @description Creation time of the event (as a RFC3339 timestamp). Read-only.
           * @default null
           */
          created: string | null;
          /**
           * EventPerson
           * @default null
           */
          creator: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Self
               * @description Whether this is the authenticated user.
               * @default null
               */
              self: boolean | null;
          } | null;
          /**
           * Description
           * @description Description of the event. Can contain HTML. Optional.
           * @default null
           */
          description: string | null;
          /**
           * EventDateTime
           * @default null
           */
          end: {
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Date Time
               * @default null
               */
              dateTime: string | null;
              /**
               * Time Zone
               * @default null
               */
              timeZone: string | null;
          } | null;
          /**
           * End Time Unspecified
           * @default null
           */
          endTimeUnspecified: boolean | null;
          /**
           * Etag
           * @description ETag of the resource.
           * @default null
           */
          etag: string | null;
          /**
           * Event Type
           * @default null
           */
          eventType: string | null;
          /**
           * Hangout Link
           * @default null
           */
          hangoutLink: string | null;
          /**
           * Html Link
           * @description An absolute link to this event in the Google Calendar Web UI. Read-only.
           * @default null
           */
          htmlLink: string | null;
          /**
           * I Cal Uid
           * @default null
           */
          iCalUID: string | null;
          /**
           * Id
           * @description Opaque identifier of the event.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Type of the resource ('calendar#event').
           * @default null
           */
          kind: string | null;
          /**
           * Location
           * @description Geographic location of the event as free-form text. Optional.
           * @default null
           */
          location: string | null;
          /**
           * EventPerson
           * @default null
           */
          organizer: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Self
               * @description Whether this is the authenticated user.
               * @default null
               */
              self: boolean | null;
          } | null;
          /**
           * EventDateTime
           * @default null
           */
          originalStartTime: {
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Date Time
               * @default null
               */
              dateTime: string | null;
              /**
               * Time Zone
               * @default null
               */
              timeZone: string | null;
          } | null;
          /**
           * Recurrence
           * @default null
           */
          recurrence: string[] | null;
          /**
           * Recurring Event Id
           * @default null
           */
          recurringEventId: string | null;
          /**
           * EventReminders
           * @default null
           */
          reminders: {
              /**
               * Overrides
               * @description If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if also omitted, indicates that no reminders are set for this event.
               * @default null
               */
              overrides: {
                  /**
                   * Method
                   * @description The method used by this reminder. Possible values are: 'email', 'popup'.
                   * @default null
                   */
                  method: string | null;
                  /**
                   * Minutes
                   * @description Number of minutes before the start of the event when the reminder should trigger.
                   * @default null
                   */
                  minutes: number | null;
              }[] | null;
              /**
               * Use Default
               * @description Whether the default reminders of the calendar apply to the event.
               * @default null
               */
              useDefault: boolean | null;
          } | null;
          /**
           * Sequence
           * @default null
           */
          sequence: number | null;
          /**
           * Source
           * @description Source from which the event was created.
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
          /**
           * EventDateTime
           * @default null
           */
          start: {
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Date Time
               * @default null
               */
              dateTime: string | null;
              /**
               * Time Zone
               * @default null
               */
              timeZone: string | null;
          } | null;
          /**
           * Status
           * @description Status of the event. Optional. Possible values are: 'confirmed', 'tentative', 'cancelled'.
           * @default null
           */
          status: string | null;
          /**
           * Summary
           * @description Title of the event.
           * @default null
           */
          summary: string | null;
          /**
           * Transparency
           * @default null
           */
          transparency: string | null;
          /**
           * Updated
           * @description Last modification time of the event (as a RFC3339 timestamp). Read-only.
           * @default null
           */
          updated: string | null;
          /**
           * Visibility
           * @default null
           */
          visibility: string | null;
      }[] | null;
      /**
       * Kind
       * @description Type of the collection ("calendar#events").
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
       * @default null
       */
      nextSyncToken: string | null;
      /**
       * Summary
       * @description Title of the calendar. Read-only.
       * @default null
       */
      summary: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. Read-only.
       * @default null
       */
      timeZone: string | null;
      /**
       * Updated
       * @description Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
       * @default null
       */
      updated: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_LIST tool input.
 */
type GOOGLESUPER_EVENTS_LIST_INPUT = {
  /**
   * Always Include Email
   * @description Deprecated and ignored.
   * @default null
   */
  alwaysIncludeEmail: boolean | null;
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Event Types
   * @description Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types. Acceptable values are: "birthday", "default", "focusTime", "fromGmail", "outOfOffice", "workingLocation".
   * @default null
   */
  eventTypes: string | null;
  /**
   * I Cal Uid
   * @description Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
   * @default null
   */
  iCalUID: string | null;
  /**
   * Max Attendees
   * @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @default null
   */
  maxAttendees: number | null;
  /**
   * Max Results
   * @description Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @default null
   */
  maxResults: number | null;
  /**
   * Order By
   * @description The order of the events returned in the result. Optional. The default is an unspecified, stable order. Acceptable values are: "startTime", "updated".
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Token
   * @description Token specifying which result page to return. Optional.
   * @default null
   */
  pageToken: string | null;
  /**
   * Private Extended Property
   * @description Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @default null
   */
  privateExtendedProperty: string | null;
  /**
   * Q
   * @description Free text search terms to find events that match these terms in various fields. Optional.
   * @default null
   */
  q: string | null;
  /**
   * Shared Extended Property
   * @description Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @default null
   */
  sharedExtendedProperty: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted events (with status equals "cancelled") in the result. Optional. The default is False.
   * @default null
   */
  showDeleted: boolean | null;
  /**
   * Show Hidden Invitations
   * @description Whether to include hidden invitations in the result. Optional. The default is False.
   * @default null
   */
  showHiddenInvitations: boolean | null;
  /**
   * Single Events
   * @description Whether to expand recurring events into instances and only return single one-off events and instances of recurring events. Optional. The default is False.
   * @default null
   */
  singleEvents: boolean | null;
  /**
   * Sync Token
   * @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. Optional. The default is to return all entries.
   * @default null
   */
  syncToken: string | null;
  /**
   * Time Max
   * @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
   * @default 2025-09-11T11:11:27.123949Z
   */
  timeMax: string | null;
  /**
   * Time Min
   * @description Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
   * @default 2025-09-04T11:11:27.123988Z
   */
  timeMin: string | null;
  /**
   * Time Zone
   * @description Time zone used in the response. Optional. The default is the user's primary time zone.
   * @default null
   */
  timeZone: string | null;
  /**
   * Updated Min
   * @description Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
   * @default null
   */
  updatedMin: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_LIST tool output.
 */
type GOOGLESUPER_EVENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The user's access role for this calendar. Read-only. Possible values are:
       *     - "freeBusyReader" - Provides read access to free/busy information.
       *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role and additionally allows any user with this role to modify and revoke access to the calendar.
       * @default null
       */
      accessRole: string | null;
      /**
       * Default Reminders
       * @description The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).
       * @default null
       */
      defaultReminders: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Description
       * @description Description of the calendar. Read-only.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Items
       * @description List of events on the calendar.
       * @default null
       */
      items: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#events").
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
       * @default null
       */
      nextSyncToken: string | null;
      /**
       * Summary
       * @description Title of the calendar. Read-only.
       * @default null
       */
      summary: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. Read-only.
       * @default null
       */
      timeZone: string | null;
      /**
       * Updated
       * @description Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
       * @default null
       */
      updated: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_MOVE tool input.
 */
type GOOGLESUPER_EVENTS_MOVE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier of the source calendar. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
  /**
   * Destination
   * @description Calendar identifier of the destination calendar. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  destination?: string;
  /**
   * Event Id
   * @description Event identifier. To retrieve event identifiers call the events.list method.
   */
  event_id?: string;
  /**
   * Send Updates
   * @description Guests who should receive notifications about the change of the event's organizer. Acceptable values are: "all": Notifications are sent to all guests. "externalOnly": Notifications are sent to non-Google Calendar guests only. "none": No notifications are sent. This is the default value if left unspecified.
   * @default null
   */
  send_updates: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_MOVE tool output.
 */
type GOOGLESUPER_EVENTS_MOVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_WATCH tool input.
 */
type GOOGLESUPER_EVENTS_WATCH_INPUT = {
  /**
   * Address
   * @description The address where notifications are delivered for this channel.
   */
  address?: string;
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Id
   * @description A UUID or similar unique string that identifies this channel.
   */
  id?: string;
  /**
   * EventsWatchRequestParams
   * @description Additional parameters controlling delivery channel behavior. Optional.
   * @default null
   */
  params: {
      /**
       * Ttl
       * @description Time To Live for the notification channel.
       * @default null
       */
      ttl: string | null;
  } | null;
  /**
   * Payload
   * @description A Boolean value to indicate whether payload is wanted. Optional.
   * @default null
   */
  payload: boolean | null;
  /**
   * Token
   * @description An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
   * @default null
   */
  token: string | null;
  /**
   * Type
   * @description The type of delivery mechanism used for this channel.
   * @default web_hook
   */
  type: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EVENTS_WATCH tool output.
 */
type GOOGLESUPER_EVENTS_WATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration
       * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
       * @default null
       */
      expiration: string | null;
      /**
       * Id
       * @description A UUID or similar unique string that identifies this channel.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies this as a notification channel. Value: "api#channel".
       * @default null
       */
      kind: string | null;
      /**
       * Resource Id
       * @description An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
       * @default null
       */
      resourceId: string | null;
      /**
       * Resource Uri
       * @description A version-specific identifier for the watched resource.
       * @default null
       */
      resourceUri: string | null;
      /**
       * Token
       * @description An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
       * @default null
       */
      token: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_EXECUTE_SQL tool input.
 */
type GOOGLESUPER_EXECUTE_SQL_INPUT = {
  /**
   * Delete Method
   * @description For DELETE operations: 'clear' preserves row structure, 'remove_rows' shifts data up
   * @default clear
   * @enum {string}
   */
  delete_method: "clear" | "remove_rows";
  /**
   * Dry Run
   * @description Preview changes without applying them (for write operations)
   * @default false
   */
  dry_run: boolean;
  /**
   * Spreadsheet Id
   * @description Google Sheets ID
   */
  spreadsheet_id?: string;
  /**
   * Sql
   * @description SQL query to execute. Supports SELECT, INSERT, UPDATE, DELETE operations.
   */
  sql?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_EXECUTE_SQL tool output.
 */
type GOOGLESUPER_EXECUTE_SQL_OUTPUT = {
  /**
   * Affected Rows
   * @description Number of rows affected by the operation
   */
  affected_rows?: number;
  /**
   * Data
   * @description Result data for SELECT queries
   * @default null
   */
  data: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable result message
   */
  message?: string;
  /**
   * Operation
   * @description SQL operation performed: SELECT, INSERT, UPDATE, or DELETE
   */
  operation?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Table Schema
   * @description Schema for SELECT query results
   * @default null
   */
  table_schema: {
      [key: string]: unknown;
  }[] | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FETCH_EMAILS tool input.
 */
type GOOGLESUPER_FETCH_EMAILS_INPUT = {
  /**
   * Ids Only
   * @description If true, only returns message IDs from the list API without fetching individual message details. Fastest option for getting just message IDs and thread IDs.
   * @default false
   */
  ids_only: boolean;
  /**
   * Include Payload
   * @description Set to true to include full message payload (headers, body, attachments); false for metadata only.
   * @default true
   */
  include_payload: boolean;
  /**
   * Include Spam Trash
   * @description Set to true to include messages from 'SPAM' and 'TRASH'.
   * @default false
   */
  include_spam_trash: boolean;
  /**
   * Label Ids
   * @description Filter by label IDs; only messages with all specified labels are returned. Common IDs: 'INBOX', 'SPAM', 'TRASH', 'UNREAD', 'STARRED', 'IMPORTANT', 'CATEGORY_PRIMARY' (alias 'CATEGORY_PERSONAL'), 'CATEGORY_SOCIAL', 'CATEGORY_PROMOTIONS', 'CATEGORY_UPDATES', 'CATEGORY_FORUMS'. Use 'listLabels' action for custom IDs.
   */
  label_ids?: string[];
  /**
   * Max Results
   * @description Maximum number of messages to retrieve per page.
   * @default 1
   */
  max_results: number;
  /**
   * Page Token
   * @description Token for retrieving a specific page, obtained from a previous response's `nextPageToken`. Omit for the first page.
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Gmail advanced search query (e.g., 'from:user subject:meeting'). Supports operators like 'from:', 'to:', 'subject:', 'label:', 'has:attachment', 'is:unread', 'after:YYYY/MM/DD', 'before:YYYY/MM/DD', AND/OR/NOT. Use quotes for exact phrases. Omit for no query filter.
   * @default null
   */
  query: string | null;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
  /**
   * Verbose
   * @description If false, uses optimized concurrent metadata fetching for faster performance (~75% improvement). If true, uses standard detailed message fetching. When false, only essential fields (subject, sender, recipient, time, labels) are guaranteed.
   * @default true
   */
  verbose: boolean;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FETCH_EMAILS tool output.
 */
type GOOGLESUPER_FETCH_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of retrieved email messages. Includes full content if `include_payload` was true, otherwise metadata.
       */
      messages: {
          /**
           * Attachment List
           * @description The list of attachments
           */
          attachmentList?: unknown[] | null;
          /**
           * Label Ids
           * @description The label IDs of the message
           */
          labelIds?: unknown[] | null;
          /**
           * Message Id
           * @description The message ID of the message
           */
          messageId?: string | null;
          /**
           * Message Text
           * @description The text of the message
           */
          messageText?: string | null;
          /**
           * Message Timestamp
           * @description The timestamp of the message
           */
          messageTimestamp?: string | null;
          /**
           * Payload
           * @description The payload of the message
           */
          payload?: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview
           * @description The preview of the message
           */
          preview?: {
              [key: string]: unknown;
          } | null;
          /**
           * Sender
           * @description The sender of the message
           */
          sender?: string | null;
          /**
           * Subject
           * @description The subject of the message
           */
          subject?: string | null;
          /**
           * Thread Id
           * @description The thread ID of the message
           */
          threadId?: string | null;
          /**
           * To
           * @description The recipient of the message
           */
          to?: string | null;
      }[];
      /**
       * Next Page Token
       * @description Token for the next page of results; use in subsequent `page_token` request. Empty if no more results.
       */
      nextPageToken: string;
      /**
       * Result Size Estimate
       * @description Estimated total messages matching the query (not just this page).
       */
      resultSizeEstimate: number;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID tool input.
 */
type GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID_INPUT = {
  /**
   * Format
   * @description Format for message content: 'minimal' (ID/labels), 'full' (complete data), 'raw' (base64url string), 'metadata' (ID/labels/headers).
   * @default full
   */
  format: string;
  /**
   * Message Id
   * @description Unique ID of the email message to retrieve, obtainable from actions like 'List Messages'.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID tool output.
 */
type GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment List
       * @description The list of attachments
       */
      attachmentList?: unknown[] | null;
      /**
       * Label Ids
       * @description The label IDs of the message
       */
      labelIds?: unknown[] | null;
      /**
       * Message Id
       * @description The message ID of the message
       */
      messageId?: string | null;
      /**
       * Message Text
       * @description The text of the message
       */
      messageText?: string | null;
      /**
       * Message Timestamp
       * @description The timestamp of the message
       */
      messageTimestamp?: string | null;
      /**
       * Payload
       * @description The payload of the message
       */
      payload?: {
          [key: string]: unknown;
      } | null;
      /**
       * Preview
       * @description The preview of the message
       */
      preview?: {
          [key: string]: unknown;
      } | null;
      /**
       * Sender
       * @description The sender of the message
       */
      sender?: string | null;
      /**
       * Subject
       * @description The subject of the message
       */
      subject?: string | null;
      /**
       * Thread Id
       * @description The thread ID of the message
       */
      threadId?: string | null;
      /**
       * To
       * @description The recipient of the message
       */
      to?: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID tool input.
 */
type GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID_INPUT = {
  /**
   * Page Token
   * @description Opaque page token for fetching a specific page of messages if results are paginated.
   * @default
   */
  page_token: string;
  /**
   * Thread Id
   * @description Unique ID of the thread, obtainable from actions like 'listThreads' or 'fetchEmails'.
   */
  thread_id?: string;
  /**
   * User Id
   * @description The email address of the user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID tool output.
 */
type GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description Retrieved messages from the thread.
       */
      messages: {
          /**
           * Attachment List
           * @description The list of attachments
           */
          attachmentList?: unknown[] | null;
          /**
           * Label Ids
           * @description The label IDs of the message
           */
          labelIds?: unknown[] | null;
          /**
           * Message Id
           * @description The message ID of the message
           */
          messageId?: string | null;
          /**
           * Message Text
           * @description The text of the message
           */
          messageText?: string | null;
          /**
           * Message Timestamp
           * @description The timestamp of the message
           */
          messageTimestamp?: string | null;
          /**
           * Payload
           * @description The payload of the message
           */
          payload?: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview
           * @description The preview of the message
           */
          preview?: {
              [key: string]: unknown;
          } | null;
          /**
           * Sender
           * @description The sender of the message
           */
          sender?: string | null;
          /**
           * Subject
           * @description The subject of the message
           */
          subject?: string | null;
          /**
           * Thread Id
           * @description The thread ID of the message
           */
          threadId?: string | null;
          /**
           * To
           * @description The recipient of the message
           */
          to?: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FILES_MODIFY_LABELS tool input.
 */
type GOOGLESUPER_FILES_MODIFY_LABELS_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Kind
   * @description This is always drive#modifyLabelsRequest.
   * @default drive#modifyLabelsRequest
   */
  kind: string | null;
  /**
   * Label Modifications
   * @description The list of modifications to apply to the labels on the file.
   */
  label_modifications?: {
      /**
       * Field Modifications
       * @description The list of modifications to this label's fields.
       * @default null
       */
      field_modifications: {
          /**
           * Field Id
           * @description The ID of the field to be modified.
           */
          field_id: string;
          /**
           * Kind
           * @description This is always drive#labelFieldModification.
           * @default drive#labelFieldModification
           */
          kind: string | null;
          /**
           * Set Date Values
           * @description Replaces the value of a `date` field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.
           * @default null
           */
          set_date_values: string[] | null;
          /**
           * Set Integer Values
           * @description Replaces the value of an `integer` field with these new values.
           * @default null
           */
          set_integer_values: string[] | null;
          /**
           * Set Selection Values
           * @description Replaces a `selection` field with these new values.
           * @default null
           */
          set_selection_values: string[] | null;
          /**
           * Set Text Values
           * @description Sets the value of a `text` field.
           * @default null
           */
          set_text_values: string[] | null;
          /**
           * Set User Values
           * @description Replaces a `user` field with these new values. The values must be valid email addresses.
           * @default null
           */
          set_user_values: string[] | null;
          /**
           * Unset Values
           * @description Unsets the values for this field.
           * @default null
           */
          unset_values: boolean | null;
      }[] | null;
      /**
       * Kind
       * @description This is always drive#labelModification.
       * @default drive#labelModification
       */
      kind: string | null;
      /**
       * Label Id
       * @description The ID of the label to modify.
       */
      label_id: string;
      /**
       * Remove Label
       * @description If true, the label will be removed from the file.
       * @default null
       */
      remove_label: boolean | null;
  }[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FILES_MODIFY_LABELS tool output.
 */
type GOOGLESUPER_FILES_MODIFY_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description This is always drive#modifyLabelsResponse.
       */
      kind: string;
      /**
       * Modified Labels
       * @description The list of labels which were added or updated by the request.
       */
      modified_labels: {
          /**
           * Fields
           * @description A map of field IDs to field values.
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description The ID of the label.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies the resource type, this is always drive#label
           * @default null
           */
          kind: string | null;
          /**
           * Revision Id
           * @description The revision ID of the label.
           * @default null
           */
          revision_id: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_EVENT tool input.
 */
type GOOGLESUPER_FIND_EVENT_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to query. Use 'primary' for the primary calendar of the authenticated user, an email address for a specific user's calendar, or a calendar ID for other calendars.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Types
   * @description Event types to include: 'default' (regular event), 'focusTime' (focused work time), 'outOfOffice' (out-of-office time).
   * @default [
   *       "birthday",
   *       "default",
   *       "focusTime",
   *       "outOfOffice",
   *       "workingLocation"
   *     ]
   */
  event_types: string[];
  /**
   * Max Results
   * @description Maximum number of events per page (1-2500).
   * @default 10
   */
  max_results: number;
  /**
   * Order By
   * @description Order of events: 'startTime' (ascending by start time) or 'updated' (ascending by last modification time).
   * @default null
   */
  order_by: string | null;
  /**
   * Page Token
   * @description Token from a previous response's `nextPageToken` to fetch the subsequent page of results.
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Free-text search terms to find events. This query is matched against various event fields including summary, description, location, attendees' details (displayName, email), and organizer's details.
   * @default null
   */
  query: string | null;
  /**
   * Show Deleted
   * @description Include deleted events (status 'cancelled') in the result.
   * @default null
   */
  show_deleted: boolean | null;
  /**
   * Single Events
   * @description Expand recurring events into individual instances. If false, returns master recurring events.
   * @default true
   */
  single_events: boolean;
  /**
   * Time Max
   * @description Upper bound (exclusive) for an event's start time to filter by. Only events starting before this time are included. Accepts multiple formats:
   *     1. RFC3339 timestamp (e.g., '2024-12-06T13:00:00Z')
   *     2. Comma-separated date/time parts (e.g., '2024,12,06,13,00,00')
   *     3. Simple datetime string (e.g., '2024-12-06 13:00:00')
   * @default null
   */
  timeMax: string | null;
  /**
   * Time Min
   * @description Lower bound (exclusive) for an event's end time to filter by. Only events ending after this time are included. Accepts multiple formats:
   *     1. RFC3339 timestamp (e.g., '2024-12-06T13:00:00Z')
   *     2. Comma-separated date/time parts (e.g., '2024,12,06,13,00,00')
   *     3. Simple datetime string (e.g., '2024-12-06 13:00:00')
   * @default null
   */
  timeMin: string | null;
  /**
   * Updated Min
   * @description Lower bound (exclusive) for an event's last modification time to filter by. Only events updated after this time are included. When specified, events deleted since this time are also included, regardless of the `show_deleted` parameter. Accepts multiple formats:
   *     1. RFC3339 timestamp (e.g., '2024-12-06T13:00:00Z')
   *     2. Comma-separated date/time parts (e.g., '2024,12,06,13,00,00')
   *     3. Simple datetime string (e.g., '2024-12-06 13:00:00')
   * @default null
   */
  updated_min: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_EVENT tool output.
 */
type GOOGLESUPER_FIND_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Data
       * @description A dictionary containing the search results. Keys include: 'event_data' (a list of the found event objects matching Google Calendar API's event resource schema), 'nextPageToken' (string token for fetching the next page of results, null if no more pages), 'nextSyncToken' (string token for future incremental synchronization, may not always be present), and 'note' (an optional string with contextual information about the search).
       */
      event_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_FILE tool input.
 */
type GOOGLESUPER_FIND_FILE_INPUT = {
  /**
   * Corpora
   * @description Corpora to query. 'user' for user's personal files, 'drive' for files in a specific shared drive (requires 'driveId'), 'domain' for files shared with the domain, 'allDrives' for all drives the user has access to.
   * @default null
   * @enum {string|null}
   */
  corpora: "user" | "drive" | "domain" | "allDrives" | null;
  /**
   * Drive Id
   * @description ID of the shared drive to search. Required if 'corpora' is 'drive'.
   * @default null
   */
  driveId: string | null;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. Use '*' for all fields or a comma-separated list, e.g., 'nextPageToken,files(id,name,mimeType)'.
   * @default *
   */
  fields: string | null;
  /**
   * Include Items From All Drives
   * @description Whether both My Drive and shared drive items should be included in results. If true, 'supportsAllDrives' should also be true.
   * @default false
   */
  includeItemsFromAllDrives: boolean | null;
  /**
   * Order By
   * @description A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example: 'modifiedTime desc,name'.
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Size
   * @description The maximum number of files to return per page.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page.
   * @default null
   */
  pageToken: string | null;
  /**
   * Q
   * @description A query for filtering the file results. See Google Drive API documentation for query syntax. Example: \"name contains 'report' and mimeType = 'application/pdf'\"
   * @default null
   */
  q: string | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
   * @default drive
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. If 'includeItemsFromAllDrives' is true, this must also be true.
   * @default true
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_FILE tool output.
 */
type GOOGLESUPER_FIND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      files?: {
          /**
           * App Properties
           * @description A collection of arbitrary key-value pairs which are visible to all apps.
           * @default null
           */
          appProperties: {
              [key: string]: string;
          } | null;
          /**
           * GoogleDriveFileCapabilities
           * @description Capabilities the current user has on this file.
           * @default null
           */
          capabilities: {
              /**
               * Can Add Children
               * @description Whether the user can add children to this folder.
               * @default null
               */
              canAddChildren: boolean | null;
              /**
               * Can Change Copy Requires Writer Permission
               * @description Whether the user can change the copyRequiresWriterPermission restriction.
               * @default null
               */
              canChangeCopyRequiresWriterPermission: boolean | null;
              /**
               * Can Change Viewers Can Copy Content
               * @description Whether the user can change the viewersCanCopyContent restriction for this file.
               * @default null
               */
              canChangeViewersCanCopyContent: boolean | null;
              /**
               * Can Comment
               * @description Whether the user can comment on this file.
               * @default null
               */
              canComment: boolean | null;
              /**
               * Can Copy
               * @description Whether the user can copy this file.
               * @default null
               */
              canCopy: boolean | null;
              /**
               * Can Delete
               * @description Whether the user can delete this file.
               * @default null
               */
              canDelete: boolean | null;
              /**
               * Can Download
               * @description Whether the user can download this file.
               * @default null
               */
              canDownload: boolean | null;
              /**
               * Can Edit
               * @description Whether the user can edit this file.
               * @default null
               */
              canEdit: boolean | null;
              /**
               * Can List Children
               * @description Whether the user can list the children of this folder.
               * @default null
               */
              canListChildren: boolean | null;
              /**
               * Can Modify Content
               * @description Whether the user can modify the content of this file.
               * @default null
               */
              canModifyContent: boolean | null;
              /**
               * Can Move Item Into Team Drive
               * @description Whether the user can move this item into a Team Drive. (Deprecated: Use canMoveItemOutOfDrive instead)
               * @default null
               */
              canMoveItemIntoTeamDrive: boolean | null;
              /**
               * Can Move Item Out Of Drive
               * @description Whether the user can move this item out of the current drive.
               * @default null
               */
              canMoveItemOutOfDrive: boolean | null;
              /**
               * Can Move Item Within Drive
               * @description Whether the user can move this item within the current drive.
               * @default null
               */
              canMoveItemWithinDrive: boolean | null;
              /**
               * Can Read Revisions
               * @description Whether the user can read the revisions of this file.
               * @default null
               */
              canReadRevisions: boolean | null;
              /**
               * Can Remove Children
               * @description Whether the user can remove children from this folder.
               * @default null
               */
              canRemoveChildren: boolean | null;
              /**
               * Can Rename
               * @description Whether the user can rename this file.
               * @default null
               */
              canRename: boolean | null;
              /**
               * Can Share
               * @description Whether the user can share this file.
               * @default null
               */
              canShare: boolean | null;
              /**
               * Can Trash
               * @description Whether the user can trash this file.
               * @default null
               */
              canTrash: boolean | null;
              /**
               * Can Untrash
               * @description Whether the user can untrash this file.
               * @default null
               */
              canUntrash: boolean | null;
          } | null;
          /**
           * GoogleDriveFileContentHints
           * @description Additional information about the content of the file. These fields are never populated in responses.
           * @default null
           */
          contentHints: {
              /**
               * Indexable Text
               * @description Text to be indexed for the file to improve searchability.
               * @default null
               */
              indexableText: string | null;
              /**
               * GoogleDriveFileContentHintsThumbnail
               * @description Thumbnail for the file.
               * @default null
               */
              thumbnail: {
                  /**
                   * Image
                   * @description A Base64 encoded image.
                   * @default null
                   */
                  image: string | null;
                  /**
                   * Mime Type
                   * @description The MIME type of the thumbnail.
                   * @default null
                   */
                  mimeType: string | null;
              } | null;
          } | null;
          /**
           * Content Restrictions
           * @description Content restrictions for this file.
           * @default null
           */
          contentRestrictions: {
              /**
               * Read Only
               * @description Whether the content of this file is read-only.
               * @default null
               */
              readOnly: boolean | null;
              /**
               * Reason
               * @description Reason for the restriction. Only set if readOnly is true.
               * @default null
               */
              reason: string | null;
          }[] | null;
          /**
           * Copy Requires Writer Permission
           * @description Whether copying this file requires writer permission.
           * @default null
           */
          copyRequiresWriterPermission: boolean | null;
          /**
           * Created Time
           * Format: date-time
           * @description The time at which the file was created.
           * @default null
           */
          createdTime: string | null;
          /**
           * Description
           * @description A short description of the file.
           * @default null
           */
          description: string | null;
          /**
           * Drive Id
           * @description The ID of the shared drive the file resides in.
           * @default null
           */
          driveId: string | null;
          /**
           * Export Links
           * @description Links for exporting Google Docs to specific formats.
           * @default null
           */
          exportLinks: {
              [key: string]: string;
          } | null;
          /**
           * File Extension
           * @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
           * @default null
           */
          fileExtension: string | null;
          /**
           * Full File Extension
           * @description The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\".
           * @default null
           */
          fullFileExtension: string | null;
          /**
           * Has Thumbnail
           * @description Whether this file has a thumbnail.
           * @default null
           */
          hasThumbnail: boolean | null;
          /**
           * Head Revision Id
           * @description The ID of the head revision of the file.
           * @default null
           */
          headRevisionId: string | null;
          /**
           * Icon Link
           * Format: uri
           * @description A static, unauthenticated link to the file's icon.
           * @default null
           */
          iconLink: string | null;
          /**
           * Id
           * @description The ID of the file.
           * @default null
           */
          id: string | null;
          /**
           * GoogleDriveFileImageMediaMetadata
           * @description Metadata about image media. This will only be present for image types, and its contents will depend on the image type.
           * @default null
           */
          imageMediaMetadata: {
              /**
               * Height
               * @description The height of the image in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Rotation
               * @description The rotation of the image in degrees.
               * @default null
               */
              rotation: number | null;
              /**
               * Width
               * @description The width of the image in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Is App Authorized
           * @description Whether the file was created or opened by the requesting app.
           * @default null
           */
          isAppAuthorized: boolean | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string \"drive#file\".
           * @default drive#file
           */
          kind: string | null;
          /**
           * GoogleDriveUser
           * @description The last user to modify the file.
           * @default null
           */
          lastModifyingUser: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is.
               * @default drive#user
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's permission ID.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * Format: uri
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * GoogleDriveLinkShareMetadata
           * @description Metadata about the shared link for this file.
           * @default null
           */
          linkShareMetadata: {
              /**
               * Security Update Eligible
               * @description Whether the file is eligible for a security update.
               * @default null
               */
              securityUpdateEligible: boolean | null;
              /**
               * Security Update Enabled
               * @description Whether the security update is enabled for this file.
               * @default null
               */
              securityUpdateEnabled: boolean | null;
          } | null;
          /**
           * Md5 Checksum
           * @description The MD5 checksum for the content of this file. This is only applicable to files with binary content in Google Drive.
           * @default null
           */
          md5Checksum: string | null;
          /**
           * Mime Type
           * @description The MIME type of the file.
           * @default null
           */
          mimeType: string | null;
          /**
           * Modified By Me
           * @description Whether the file has been modified by this user.
           * @default null
           */
          modifiedByMe: boolean | null;
          /**
           * Modified By Me Time
           * Format: date-time
           * @description The last time the file was modified by the user.
           * @default null
           */
          modifiedByMeTime: string | null;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the file was modified by anyone.
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Name
           * @description The name of the file.
           * @default null
           */
          name: string | null;
          /**
           * Original Filename
           * @description The original filename of the uploaded content if available, or else the original value of the name field. Once set, it doesn't change.
           * @default null
           */
          originalFilename: string | null;
          /**
           * Owned By Me
           * @description Whether the user owns the file.
           * @default null
           */
          ownedByMe: boolean | null;
          /**
           * Owners
           * @description The owners of the file. Currently, only certain legacy files may have more than one owner.
           * @default null
           */
          owners: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is.
               * @default drive#user
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's permission ID.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * Format: uri
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          }[] | null;
          /**
           * Parents
           * @description The IDs of the parent folders which contain the file.
           * @default null
           */
          parents: string[] | null;
          /**
           * Permission Ids
           * @description A list of permission IDs for users with access to this file.
           * @default null
           */
          permissionIds: string[] | null;
          /**
           * Permissions
           * @description The full list of permissions for the file.
           * @default null
           */
          permissions: {
              /**
               * Display Name
               * @description The display name of the user or group to which this permission refers.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user or group to which this permission refers.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Id
               * @description The ID of the permission.
               * @default null
               */
              id: string | null;
              /**
               * Role
               * @description The role granted by this permission.
               * @default null
               * @enum {string|null}
               */
              role: "owner" | "organizer" | "fileOrganizer" | "writer" | "commenter" | "reader" | null;
              /**
               * Type
               * @description The type of the grantee.
               * @default null
               * @enum {string|null}
               */
              type: "user" | "group" | "domain" | "anyone" | null;
          }[] | null;
          /**
           * Properties
           * @description A collection of arbitrary key-value pairs which are private to the requesting app.
           * @default null
           */
          properties: {
              [key: string]: string;
          } | null;
          /**
           * Quota Bytes Used
           * @description The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions.
           * @default null
           */
          quotaBytesUsed: string | null;
          /**
           * Resource Key
           * @description A resource key for the file. If omitted, the requestor must have access to the file.
           * @default null
           */
          resourceKey: string | null;
          /**
           * Shared
           * @description Whether the file has been shared.
           * @default null
           */
          shared: boolean | null;
          /**
           * Shared With Me Time
           * Format: date-time
           * @description The time at which the file was shared with the user.
           * @default null
           */
          sharedWithMeTime: string | null;
          /**
           * GoogleDriveUser
           * @description The user who shared the file with the requesting user, if applicable.
           * @default null
           */
          sharingUser: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is.
               * @default drive#user
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's permission ID.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * Format: uri
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * GoogleDriveShortcutDetails
           * @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
           * @default null
           */
          shortcutDetails: {
              /**
               * Target Id
               * @description The ID of the file that this shortcut points to.
               * @default null
               */
              targetId: string | null;
              /**
               * Target Mime Type
               * @description The MIME type of the file that this shortcut points to.
               * @default null
               */
              targetMimeType: string | null;
              /**
               * Target Resource Key
               * @description The resource key of the target file.
               * @default null
               */
              targetResourceKey: string | null;
          } | null;
          /**
           * Size
           * @description The size of the file's content in bytes. This is applicable to files with binary content in Google Drive and Google Docs files.
           * @default null
           */
          size: string | null;
          /**
           * Spaces
           * @description The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
           * @default null
           */
          spaces: string[] | null;
          /**
           * Starred
           * @description Whether the user has starred the file.
           * @default null
           */
          starred: boolean | null;
          /**
           * Team Drive Id
           * @description The ID of the Team Drive the file resides in. (Deprecated: Use driveId instead)
           * @default null
           */
          teamDriveId: string | null;
          /**
           * Thumbnail Link
           * Format: uri
           * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours.
           * @default null
           */
          thumbnailLink: string | null;
          /**
           * Thumbnail Version
           * @description The version of the file's thumbnail. Available only when specifically requested.
           * @default null
           */
          thumbnailVersion: number | null;
          /**
           * Trashed
           * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
           * @default null
           */
          trashed: boolean | null;
          /**
           * Version
           * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
           * @default null
           */
          version: number | null;
          /**
           * GoogleDriveFileVideoMediaMetadata
           * @description Metadata about video media. This will only be present for video types.
           * @default null
           */
          videoMediaMetadata: {
              /**
               * Duration Millis
               * @description The duration of the video in milliseconds (as a string).
               * @default null
               */
              durationMillis: string | null;
              /**
               * Height
               * @description The height of the video in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Width
               * @description The width of the video in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Viewed By Me
           * @description Whether the file has been viewed by this user.
           * @default null
           */
          viewedByMe: boolean | null;
          /**
           * Viewed By Me Time
           * Format: date-time
           * @description The last time the file was viewed by the user.
           * @default null
           */
          viewedByMeTime: string | null;
          /**
           * Viewers Can Copy Content
           * @description Whether users with viewer permissions can copy the content of this file.
           * @default null
           */
          viewersCanCopyContent: boolean | null;
          /**
           * Web Content Link
           * Format: uri
           * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
           * @default null
           */
          webContentLink: string | null;
          /**
           * Web View Link
           * Format: uri
           * @description A link for opening the file in a relevant Google editor or viewer in a browser.
           * @default null
           */
          webViewLink: string | null;
          /**
           * Writers Can Share
           * @description Whether writers can share the document with other users.
           * @default null
           */
          writersCanShare: boolean | null;
      }[];
      /**
       * Incomplete Search
       * @description Whether the search process was incomplete. If true, then some search results might be missing.
       * @default null
       */
      incompleteSearch: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string \"drive#fileList\".
       * @default drive#fileList
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of files. This will be absent if the end of the files list has been reached.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_FOLDER tool input.
 */
type GOOGLESUPER_FIND_FOLDER_INPUT = {
  /**
   * Full Text Contains
   * @description A string to search for within the full text content of files within folders (if applicable and supported by Drive for the folder type or its contents). This search is case-insensitive.
   * @default null
   */
  full_text_contains: string | null;
  /**
   * Full Text Not Contains
   * @description A string to exclude from the full text content of files within folders. This search is case-insensitive.
   * @default null
   */
  full_text_not_contains: string | null;
  /**
   * Modified After
   * @description Search for folders modified after a specific date and time. The timestamp must be in RFC 3339 format (e.g., '2023-01-15T10:00:00Z' or '2023-01-15T10:00:00.000Z').
   * @default null
   */
  modified_after: string | null;
  /**
   * Name Contains
   * @description A substring to search for within folder names. This search is case-insensitive.
   * @default null
   */
  name_contains: string | null;
  /**
   * Name Exact
   * @description The exact name of the folder to search for. This search is case-sensitive.
   * @default null
   */
  name_exact: string | null;
  /**
   * Name Not Contains
   * @description A substring to exclude from folder names. Folders with names containing this substring will not be returned. This search is case-insensitive.
   * @default null
   */
  name_not_contains: string | null;
  /**
   * Starred
   * @description Set to true to search for folders that are starred, or false for those that are not.
   * @default null
   */
  starred: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_FOLDER tool output.
 */
type GOOGLESUPER_FIND_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description A list of folders found.
       */
      files: {
          /**
           * Capabilities
           * @description Capabilities the current user has on this folder.
           * @default null
           */
          capabilities: {
              [key: string]: unknown;
          } | null;
          /**
           * Created Time
           * Format: date-time
           * @description The time at which the folder was created (RFC 3339 date-time).
           * @default null
           */
          createdTime: string | null;
          /**
           * Drive Id
           * @description The ID of the drive the file resides in. Only populated for items in shared drives.
           * @default null
           */
          driveId: string | null;
          /**
           * Icon Link
           * Format: uri
           * @description A static, unauthenticated link to the folder's icon.
           * @default null
           */
          iconLink: string | null;
          /**
           * Id
           * @description The ID of the folder.
           */
          id: string;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
           * @default drive#file
           */
          kind: string | null;
          /**
           * Mime Type
           * @description The MIME type of the item. For a folder, this is 'application/vnd.google-apps.folder'.
           */
          mimeType: string;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the folder was modified by anyone (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Name
           * @description The name of the folder.
           */
          name: string;
          /**
           * Parents
           * @description The IDs of the parent folders which contain the file.
           * @default null
           */
          parents: string[] | null;
          /**
           * Shared
           * @description Whether the file has been shared.
           * @default false
           */
          shared: boolean | null;
          /**
           * Team Drive Id
           * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
           * @default null
           */
          teamDriveId: string | null;
          /**
           * Trashed
           * @description Whether the file has been trashed.
           * @default false
           */
          trashed: boolean | null;
          /**
           * Web View Link
           * Format: uri
           * @description A link for opening the folder in a browser.
           * @default null
           */
          webViewLink: string | null;
      }[];
      /**
       * Incomplete Search
       * @description Whether the search process was incomplete.
       * @default null
       */
      incompleteSearch: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
       * @default drive#fileList
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of folders.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_FREE_SLOTS tool input.
 */
type GOOGLESUPER_FIND_FREE_SLOTS_INPUT = {
  /**
   * Calendar Expansion Max
   * @description Maximum calendars for which FreeBusy information is provided. Max allowed: 50.
   * @default 50
   */
  calendar_expansion_max: number;
  /**
   * Group Expansion Max
   * @description Maximum calendar identifiers to return for a single group; exceeding this causes an error. Max allowed: 100.
   * @default 100
   */
  group_expansion_max: number;
  /**
   * Items
   * @description List of calendar identifiers (primary ID 'primary', user/calendar email, or unique calendar ID) to query for free/busy information.
   * @default [
   *       "primary"
   *     ]
   */
  items: string[];
  /**
   * Time Max
   * @description End datetime for the query interval. Accepts ISO, comma-separated, or simple datetime formats.
   * @default null
   */
  time_max: string | null;
  /**
   * Time Min
   * @description Start datetime for the query interval. Accepts ISO, comma-separated, or simple datetime formats.
   * @default null
   */
  time_min: string | null;
  /**
   * Timezone
   * @description IANA timezone identifier (e.g., 'America/New_York', 'Europe/London') for interpreting `time_min` and `time_max` if they lack timezone info, and for expanding recurring events.
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_FREE_SLOTS tool output.
 */
type GOOGLESUPER_FIND_FREE_SLOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Free/busy schedule for requested calendars, with busy intervals enriched with event details and calculated free slots based on gaps between busy periods.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_WORKSHEET_BY_TITLE tool input.
 */
type GOOGLESUPER_FIND_WORKSHEET_BY_TITLE_INPUT = {
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet. This ID is part of the spreadsheet's URL.
   */
  spreadsheet_id?: string;
  /**
   * Title
   * @description The exact, case-sensitive title of the worksheet (tab name) to find.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FIND_WORKSHEET_BY_TITLE tool output.
 */
type GOOGLESUPER_FIND_WORKSHEET_BY_TITLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Found
       * @description True if a worksheet with the exact specified title was found within the spreadsheet; False otherwise.
       */
      found: boolean;
      /**
       * Sheet Data
       * @description A dictionary containing the complete metadata of the Google Spreadsheet, including properties, named ranges, and details for all its worksheets (tabs). This data is provided regardless of whether the target worksheet is found.
       */
      sheet_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_FORMAT_CELL tool input.
 */
type GOOGLESUPER_FORMAT_CELL_INPUT = {
  /**
   * Blue
   * @description Blue component of the background color (0.0-1.0).
   * @default 0.9
   */
  blue: number;
  /**
   * Bold
   * @description Apply bold formatting.
   * @default false
   */
  bold: boolean;
  /**
   * End Column Index
   * @description 0-based index of the column *after* the last column in the range (exclusive); must be greater than `start_column_index`.
   */
  end_column_index?: number;
  /**
   * End Row Index
   * @description 0-based index of the row *after* the last row in the range (exclusive); must be greater than `start_row_index`.
   */
  end_row_index?: number;
  /**
   * Font Size
   * @description Font size in points.
   * @default 10
   */
  fontSize: number;
  /**
   * Green
   * @description Green component of the background color (0.0-1.0).
   * @default 0.9
   */
  green: number;
  /**
   * Italic
   * @description Apply italic formatting.
   * @default false
   */
  italic: boolean;
  /**
   * Red
   * @description Red component of the background color (0.0-1.0).
   * @default 0.9
   */
  red: number;
  /**
   * Spreadsheet Id
   * @description Identifier of the Google Sheets spreadsheet.
   */
  spreadsheet_id?: string;
  /**
   * Start Column Index
   * @description 0-based index of the first column in the range.
   */
  start_column_index?: number;
  /**
   * Start Row Index
   * @description 0-based index of the first row in the range.
   */
  start_row_index?: number;
  /**
   * Strikethrough
   * @description Apply strikethrough formatting.
   * @default false
   */
  strikethrough: boolean;
  /**
   * Underline
   * @description Apply underline formatting.
   * @default false
   */
  underline: boolean;
  /**
   * Worksheet Id
   * @description ID (sheetId) of the worksheet. Use `GOOGLESHEETS_GET_SPREADSHEET_INFO` to find this ID.
   */
  worksheet_id?: number;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FORMAT_CELL tool output.
 */
type GOOGLESUPER_FORMAT_CELL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description List of responses from the batch update; for cell formatting, typically one empty reply confirming the operation.
       */
      replies?: unknown[];
      /**
       * Spreadsheet Id
       * @description Identifier of the spreadsheet where formatting was applied.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_FORWARD_MESSAGE tool input.
 */
type GOOGLESUPER_FORWARD_MESSAGE_INPUT = {
  /**
   * Additional Text
   * @description Optional additional text to include before the forwarded content.
   * @default null
   */
  additional_text: string | null;
  /**
   * Message Id
   * @description ID of the message to forward, obtainable from actions like 'List Messages'.
   */
  message_id?: string;
  /**
   * Recipient Email
   * @description Email address to forward the message to.
   */
  recipient_email?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FORWARD_MESSAGE tool output.
 */
type GOOGLESUPER_FORWARD_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Gmail API response with forwarded message details, including ID and threadId.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_FREE_BUSY_QUERY tool input.
 */
type GOOGLESUPER_FREE_BUSY_QUERY_INPUT = {
  /**
   * Calendar Expansion Max
   * @description Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
   * @default null
   */
  calendarExpansionMax: number | null;
  /**
   * Group Expansion Max
   * @description Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.
   * @default null
   */
  groupExpansionMax: number | null;
  /**
   * Items
   * @description List of calendars and/or groups to query.
   */
  items?: {
      /**
       * Id
       * @description The identifier of a calendar or a group.
       */
      id: string;
  }[];
  /**
   * Time Max
   * Format: date-time
   * @description The end of the interval for the query formatted as per RFC3339.
   */
  timeMax?: string;
  /**
   * Time Min
   * Format: date-time
   * @description The start of the interval for the query formatted as per RFC3339.
   */
  timeMin?: string;
  /**
   * Time Zone
   * @description Time zone used in the response. Optional. The default is UTC.
   * @default null
   */
  timeZone: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_FREE_BUSY_QUERY tool output.
 */
type GOOGLESUPER_FREE_BUSY_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendars
       * @description List of free/busy information for calendars.
       * @default null
       */
      calendars: {
          [key: string]: {
              /**
               * Busy
               * @description List of time ranges during which this calendar should be regarded as busy.
               * @default null
               */
              busy: {
                  /**
                   * End
                   * Format: date-time
                   * @description The (exclusive) end of the time period.
                   */
                  end: string;
                  /**
                   * Start
                   * Format: date-time
                   * @description The (inclusive) start of the time period.
                   */
                  start: string;
              }[] | null;
              /**
               * Errors
               * @description Optional error(s) (if computation for the calendar failed).
               * @default null
               */
              errors: {
                  /**
                   * Domain
                   * @description Domain, or broad category, of the error.
                   * @default null
                   */
                  domain: string | null;
                  /**
                   * Reason
                   * @description Specific reason for the error.
                   * @default null
                   */
                  reason: string | null;
              }[] | null;
          };
      } | null;
      /**
       * Groups
       * @description Expansion of groups.
       * @default null
       */
      groups: {
          [key: string]: {
              /**
               * Calendars
               * @description List of calendars' identifiers within a group.
               * @default null
               */
              calendars: string[] | null;
              /**
               * Errors
               * @description Optional error(s) (if computation for the group failed).
               * @default null
               */
              errors: {
                  /**
                   * Domain
                   * @description Domain, or broad category, of the error.
                   * @default null
                   */
                  domain: string | null;
                  /**
                   * Reason
                   * @description Specific reason for the error.
                   * @default null
                   */
                  reason: string | null;
              }[] | null;
          };
      } | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#freeBusy").
       */
      kind: string;
      /**
       * Time Max
       * Format: date-time
       * @description The end of the interval.
       */
      timeMax: string;
      /**
       * Time Min
       * Format: date-time
       * @description The start of the interval.
       */
      timeMin: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GENERATE_IDS tool input.
 */
type GOOGLESUPER_GENERATE_IDS_INPUT = {
  /**
   * Count
   * @description The number of IDs to return. Value must be between 1 and 1000, inclusive.
   * @default null
   */
  count: number | null;
  /**
   * Space
   * @description The space in which the IDs can be used. Supported values are 'drive' and 'appDataFolder'.
   * @default null
   */
  space: string | null;
  /**
   * Type
   * @description The type of items for which the IDs can be used. For example, 'files' or 'shortcuts'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GENERATE_IDS tool output.
 */
type GOOGLESUPER_GENERATE_IDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ids
       * @description The IDs generated by the server.
       */
      ids: string[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: "drive#idList".
       */
      kind: string;
      /**
       * Space
       * @description The space which is supported for these IDs.
       */
      space: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GEOCODING_API tool input.
 */
type GOOGLESUPER_GEOCODING_API_INPUT = {
  /**
   * Address
   * @description The street address or plus code that you want to geocode. Provide for geocoding (address to coordinates).
   * @default null
   */
  address: string | null;
  /**
   * Bounds
   * @description The bounding box of the viewport within which to bias geocode results more prominently (e.g., '34.172684,-118.604794|34.236144,-118.500938'). This parameter will only influence, not fully restrict, results.
   * @default null
   */
  bounds: string | null;
  /**
   * Components
   * @description A components filter with elements separated by a pipe (|). E.g., 'postal_code:94043|country:US'. Used for geocoding, can be restrictive or biasing.
   * @default null
   */
  components: string | null;
  /**
   * Extra Computations
   * @description Use this parameter to specify additional features in the response. Can select multiple values.
   * @default null
   */
  extra_computations: string[] | null;
  /**
   * Key
   * @description Your application's API key. This key identifies your application for purposes of quota management.
   */
  key?: string;
  /**
   * Language
   * @description The language in which to return results. If language is not supplied, the geocoder attempts to use the preferred language as specified in the Accept-Language header, or the native language of the domain from which the request is sent.
   * @default null
   */
  language: string | null;
  /**
   * Latlng
   * @description The latitude and longitude coordinates specifying the location for which you want the closest, human-readable address (e.g., '40.714224,-73.961452'). Provide for reverse geocoding.
   * @default null
   */
  latlng: string | null;
  /**
   * Location Type
   * @description A filter of one or more location types, separated by a pipe (|) (e.g., 'ROOFTOP|RANGE_INTERPOLATED'). Used for reverse geocoding and place ID geocoding.
   * @default null
   */
  location_type: string | null;
  /**
   * Place Id
   * @description The place ID of the place for which you wish to obtain the human-readable address. Provide for place ID geocoding.
   * @default null
   */
  place_id: string | null;
  /**
   * Region
   * @description The region code, specified as a ccTLD ('top-level domain') two-character value. This parameter will only influence, not fully restrict, results from the geocoder.
   * @default null
   */
  region: string | null;
  /**
   * Result Type
   * @description A filter of one or more address types, separated by a pipe (|) (e.g., 'street_address|locality'). Used for reverse geocoding and place ID geocoding.
   * @default null
   */
  result_type: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GEOCODING_API tool output.
 */
type GOOGLESUPER_GEOCODING_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Descriptors
       * @description Address descriptors, if requested via extra_computations. Structure may vary.
       * @default null
       */
      address_descriptors: {
          [key: string]: string;
      } | null;
      /**
       * Building Info
       * @description Building and entrance information, if requested via extra_computations. Structure may vary.
       * @default null
       */
      building_info: {
          [key: string]: string;
      } | null;
      /**
       * Error Message
       * @description More detailed information about the reasons behind a non-OK status code.
       * @default null
       */
      error_message: string | null;
      /**
       * Results
       * @description An array of geocoded address information.
       */
      results: {
          /**
           * Address Components
           * @description Array containing the separate components applicable to this address.
           * @default null
           */
          address_components: {
              /** Long Name */
              long_name: string;
              /** Short Name */
              short_name: string;
              /** Types */
              types: string[];
          }[] | null;
          /**
           * Formatted Address
           * @description String containing the human-readable address of this location.
           * @default null
           */
          formatted_address: string | null;
          /**
           * GeometryModel
           * @description Geometric data for the result.
           * @default null
           */
          geometry: {
              /**
               * ViewportModel
               * @default null
               */
              bounds: {
                  /** Northeast */
                  northeast: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
                  /** Southwest */
                  southwest: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
              } | null;
              /** Location */
              location: {
                  /** Lat */
                  lat: number;
                  /** Lng */
                  lng: number;
              };
              /** Location Type */
              location_type: string;
              /** Viewport */
              viewport: {
                  /** Northeast */
                  northeast: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
                  /** Southwest */
                  southwest: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
              };
          } | null;
          /**
           * Partial Match
           * @description Indicates that the geocoder did not return an exact match for the original request.
           * @default null
           */
          partial_match: boolean | null;
          /**
           * Place Id
           * @description A unique identifier for a place, which can be used with other Google APIs.
           * @default null
           */
          place_id: string | null;
          /**
           * PlusCodeModel
           * @description An encoded location reference, derived from latitude and longitude coordinates.
           * @default null
           */
          plus_code: {
              /**
               * Compound Code
               * @default null
               */
              compound_code: string | null;
              /** Global Code */
              global_code: string;
          } | null;
          /**
           * Types
           * @description Array indicating the type of the returned result.
           * @default null
           */
          types: string[] | null;
      }[];
      /**
       * Status
       * @description Contains metadata on the request. OK indicates success.
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ABOUT tool input.
 */
type GOOGLESUPER_GET_ABOUT_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response. Use `*` to include all fields.
   * @default *
   */
  fields: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ABOUT tool output.
 */
type GOOGLESUPER_GET_ABOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Installed
       * @description Whether the requesting app is installed.
       * @default null
       */
      appInstalled: boolean | null;
      /**
       * Can Create Drives
       * @description Whether the user can create shared drives.
       * @default null
       */
      canCreateDrives: boolean | null;
      /**
       * Can Create Team Drives
       * @description Deprecated: Use canCreateDrives instead.
       * @default null
       */
      canCreateTeamDrives: boolean | null;
      /**
       * Drive Themes
       * @description A list of themes that are supported for shared drives.
       * @default null
       */
      driveThemes: {
          /**
           * Background Image Link
           * @description A link to the background image of the theme.
           * @default null
           */
          backgroundImageLink: string | null;
          /**
           * Color Rgb
           * @description The color of the theme in RGB hexadecimal string format.
           * @default null
           */
          colorRgb: string | null;
          /**
           * Id
           * @description The ID of the theme.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * Export Formats
       * @description A map of Google Workspace document types and their supported export formats.
       * @default null
       */
      exportFormats: {
          [key: string]: string[];
      } | null;
      /**
       * Folder Color Palette
       * @description The palette of folder colors supported by Google Drive.
       * @default null
       */
      folderColorPalette: string[] | null;
      /**
       * Import Formats
       * @description A map of supported import formats and the corresponding Google Workspace document types.
       * @default null
       */
      importFormats: {
          [key: string]: string[];
      } | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: drive#about.
       * @default null
       */
      kind: string | null;
      /**
       * Max Import Sizes
       * @description A map of import formats and their maximum supported file size in bytes.
       * @default null
       */
      maxImportSizes: {
          [key: string]: string;
      } | null;
      /**
       * Max Upload Size
       * @description The maximum individual file size that the user can upload, in bytes.
       * @default null
       */
      maxUploadSize: string | null;
      /**
       * StorageQuota
       * @description The user's storage quota status.
       * @default null
       */
      storageQuota: {
          /**
           * Limit
           * @description The total storage limit in bytes.
           * @default null
           */
          limit: string | null;
          /**
           * Usage
           * @description The total usage in bytes.
           * @default null
           */
          usage: string | null;
          /**
           * Usage In Drive
           * @description The usage in Google Drive in bytes.
           * @default null
           */
          usageInDrive: string | null;
          /**
           * Usage In Drive Trash
           * @description The usage in Google Drive trash in bytes.
           * @default null
           */
          usageInDriveTrash: string | null;
      } | null;
      /**
       * Team Drive Themes
       * @description Deprecated: Use driveThemes instead.
       * @default null
       */
      teamDriveThemes: {
          /**
           * Background Image Link
           * @description A link to the background image of the theme.
           * @default null
           */
          backgroundImageLink: string | null;
          /**
           * Color Rgb
           * @description The color of the theme in RGB hexadecimal string format.
           * @default null
           */
          colorRgb: string | null;
          /**
           * Id
           * @description The ID of the theme.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * User
       * @description Information about the current user.
       * @default null
       */
      user: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: drive#user.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this is the current user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as viewable in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ACCOUNT tool input.
 */
type GOOGLESUPER_GET_ACCOUNT_INPUT = {
  /**
   * Name
   * @description Required. The resource name of the Account to retrieve. Format: accounts/{account_id}, e.g., 'accounts/100'.
   */
  name?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ACCOUNT tool output.
 */
type GOOGLESUPER_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Create Time
       * @description ISO 8601 timestamp when the account was created.
       */
      createTime: string;
      /**
       * Deleted
       * @description Whether this Account is soft-deleted. Deleted accounts are excluded from list results unless explicitly requested.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description Human-readable display name for this account.
       * @default null
       */
      displayName: string | null;
      /**
       * Name
       * @description Resource name of this account. Format: accounts/{account_id}.
       */
      name: string;
      /**
       * Region Code
       * @description Country/region code of the account (e.g., 'US').
       * @default null
       */
      regionCode: string | null;
      /**
       * Update Time
       * @description ISO 8601 timestamp when the account was last updated.
       */
      updateTime: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ALBUM tool input.
 */
type GOOGLESUPER_GET_ALBUM_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album to be requested.
   */
  albumId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ALBUM tool output.
 */
type GOOGLESUPER_GET_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Album
       * @description The requested album data
       */
      album: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ATTACHMENT tool input.
 */
type GOOGLESUPER_GET_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description ID of the attachment to retrieve.
   */
  attachment_id?: string;
  /**
   * File Name
   * @description Desired filename for the downloaded attachment.
   */
  file_name?: string;
  /**
   * Message Id
   * @description Immutable ID of the message containing the attachment.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address ('me' for authenticated user).
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ATTACHMENT tool output.
 */
type GOOGLESUPER_GET_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Retrieved attachment, prepared for download.
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CALENDAR tool input.
 */
type GOOGLESUPER_GET_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to retrieve. 'primary' (the default) represents the user's main calendar; other valid identifiers include the calendar's email address.
   * @default primary
   */
  calendar_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CALENDAR tool output.
 */
type GOOGLESUPER_GET_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendar Data
       * @description A dictionary representing the Google Calendar resource that was fetched. This object contains various details about the calendar, such as its ID, summary (title), description, time zone, and other metadata. For a detailed structure, refer to the 'Calendars' resource in the Google Calendar API documentation.
       */
      calendar_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CAMPAIGN_BY_ID tool input.
 */
type GOOGLESUPER_GET_CAMPAIGN_BY_ID_INPUT = {
  /**
   * Id
   * @description id of the campaign to search on GoogleAds.
   */
  id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CAMPAIGN_BY_ID tool output.
 */
type GOOGLESUPER_GET_CAMPAIGN_BY_ID_OUTPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CAMPAIGN_BY_NAME tool input.
 */
type GOOGLESUPER_GET_CAMPAIGN_BY_NAME_INPUT = {
  /**
   * Name
   * @description name of the campaign to search on GoogleAds.
   */
  name?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CAMPAIGN_BY_NAME tool output.
 */
type GOOGLESUPER_GET_CAMPAIGN_BY_NAME_OUTPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN tool input.
 */
type GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
   * @default null
   */
  driveId: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Defaults to false.
   * @default false
   */
  supportsAllDrives: boolean | null;
  /**
   * Supports Team Drives
   * @description Deprecated: Use supportsAllDrives instead.
   * @default null
   */
  supportsTeamDrives: boolean | null;
  /**
   * Team Drive Id
   * @description Deprecated: Use driveId instead.
   * @default null
   */
  teamDriveId: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN tool output.
 */
type GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
       */
      kind: string;
      /**
       * Start Page Token
       * @description The starting page token for listing future changes. This is deprecated and provided for backward compatibility only.
       */
      startPageToken: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET tool input.
 */
type GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET_INPUT = {
  /**
   * Spreadsheet Id
   * @description The ID of the Google Sheets spreadsheet from which to retrieve charts.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET tool output.
 */
type GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sheets
       * @description A list of sheets in the spreadsheet, containing their charts.
       * @default null
       */
      sheets: {
          /**
           * Charts
           * @description The charts embedded in this sheet.
           * @default null
           */
          charts: {
              /**
               * EmbeddedObjectBorder
               * @description The border of the chart.
               * @default null
               */
              border: {
                  /**
                   * ColorStyle
                   * @description The color of the border.
                   * @default null
                   */
                  colorStyle: {
                      /**
                       * Rgb Color
                       * @description RGB color.
                       * @default null
                       */
                      rgbColor: {
                          [key: string]: number;
                      } | null;
                      /**
                       * Theme Color
                       * @description Theme color.
                       * @default null
                       */
                      themeColor: string | null;
                  } | null;
              } | null;
              /**
               * Chart Id
               * @description The ID of the chart.
               * @default null
               */
              chartId: number | null;
              /**
               * EmbeddedObjectPosition
               * @description The position of the chart.
               * @default null
               */
              position: {
                  /**
                   * New Sheet
                   * @description If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.
                   * @default null
                   */
                  newSheet: boolean | null;
                  /**
                   * OverlayPosition
                   * @description The position at which the object is overlaid on top of a grid.
                   * @default null
                   */
                  overlayPosition: {
                      /**
                       * GridCoordinate
                       * @description The cell an object is anchored to.
                       * @default null
                       */
                      anchorCell: {
                          /**
                           * Column Index
                           * @description The column index of the coordinate.
                           * @default null
                           */
                          columnIndex: number | null;
                          /**
                           * Row Index
                           * @description The row index of the coordinate.
                           * @default null
                           */
                          rowIndex: number | null;
                          /**
                           * Sheet Id
                           * @description The sheet this coordinate is on.
                           * @default null
                           */
                          sheetId: number | null;
                      } | null;
                      /**
                       * Height Pixels
                       * @description The height of the object, in pixels.
                       * @default null
                       */
                      heightPixels: number | null;
                      /**
                       * Offset X Pixels
                       * @description The horizontal offset, in pixels, that the object is offset from the anchor cell.
                       * @default null
                       */
                      offsetXPixels: number | null;
                      /**
                       * Offset Y Pixels
                       * @description The vertical offset, in pixels, that the object is offset from the anchor cell.
                       * @default null
                       */
                      offsetYPixels: number | null;
                      /**
                       * Width Pixels
                       * @description The width of the object, in pixels.
                       * @default null
                       */
                      widthPixels: number | null;
                  } | null;
                  /**
                   * Sheet Id
                   * @description The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.
                   * @default null
                   */
                  sheetId: number | null;
              } | null;
              /**
               * ChartSpec
               * @description The specification of the chart.
               * @default null
               */
              spec: {
                  /**
                   * Alt Text
                   * @description The alternative text that describes the chart.
                   * @default null
                   */
                  altText: string | null;
                  /**
                   * ColorStyle
                   * @description The background color of the entire chart.
                   * @default null
                   */
                  backgroundColorStyle: {
                      /**
                       * Rgb Color
                       * @description RGB color.
                       * @default null
                       */
                      rgbColor: {
                          [key: string]: number;
                      } | null;
                      /**
                       * Theme Color
                       * @description Theme color.
                       * @default null
                       */
                      themeColor: string | null;
                  } | null;
                  /**
                   * BaseModel
                   * @description A basic chart specification.
                   * @default null
                   */
                  basicChart: Record<string, never> | null;
                  /**
                   * Font Name
                   * @description The name of the font to use by default for all chart text.
                   * @default null
                   */
                  fontName: string | null;
                  /**
                   * Maximized
                   * @description True to make a chart fill the entire space.
                   * @default null
                   */
                  maximized: boolean | null;
                  /**
                   * BaseModel
                   * @description A pie chart specification.
                   * @default null
                   */
                  pieChart: Record<string, never> | null;
                  /**
                   * Title
                   * @description The title of the chart.
                   * @default null
                   */
                  title: string | null;
                  /**
                   * TextFormat
                   * @description The title text format.
                   * @default null
                   */
                  titleTextFormat: {
                      /**
                       * Bold
                       * @description True if the text is bold.
                       * @default null
                       */
                      bold: boolean | null;
                      /**
                       * Font Family
                       * @description The font family.
                       * @default null
                       */
                      fontFamily: string | null;
                      /**
                       * Font Size
                       * @description The font size, in points.
                       * @default null
                       */
                      fontSize: number | null;
                      /**
                       * ColorStyle
                       * @description The foreground color of the text.
                       * @default null
                       */
                      foregroundColor: {
                          /**
                           * Rgb Color
                           * @description RGB color.
                           * @default null
                           */
                          rgbColor: {
                              [key: string]: number;
                          } | null;
                          /**
                           * Theme Color
                           * @description Theme color.
                           * @default null
                           */
                          themeColor: string | null;
                      } | null;
                      /**
                       * Italic
                       * @description True if the text is italic.
                       * @default null
                       */
                      italic: boolean | null;
                      /**
                       * Strikethrough
                       * @description True if the text has a strikethrough.
                       * @default null
                       */
                      strikethrough: boolean | null;
                      /**
                       * Underline
                       * @description True if the text is underlined.
                       * @default null
                       */
                      underline: boolean | null;
                  } | null;
                  /**
                   * TextPosition
                   * @description The title text position.
                   * @default null
                   */
                  titleTextPosition: {
                      /**
                       * Horizontal Alignment
                       * @description Horizontal alignment setting for the text.
                       * @default null
                       */
                      horizontalAlignment: string | null;
                  } | null;
              } | null;
          }[] | null;
          /**
           * SheetProperties
           * @description Properties of the sheet.
           * @default null
           */
          properties: {
              /**
               * Sheet Id
               * @description The ID of the sheet.
               * @default null
               */
              sheetId: number | null;
              /**
               * Title
               * @description The name of the sheet.
               * @default null
               */
              title: string | null;
          } | null;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       * @default null
       */
      spreadsheetId: string | null;
      /**
       * Spreadsheet Url
       * @description The URL of the spreadsheet.
       * @default null
       */
      spreadsheetUrl: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_COMMENT tool input.
 */
type GOOGLESUPER_GET_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  commentId?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Deleted
   * @description Whether to return deleted comments. Deleted comments will not include their original content.
   * @default null
   */
  includeDeleted: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_COMMENT tool output.
 */
type GOOGLESUPER_GET_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Anchor
       * @description A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
       * @default null
       */
      anchor: string | null;
      /**
       * User
       * @description The user who created the comment.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the comment.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time that the comment was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the comment has been deleted. A deleted comment has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The content of the comment with HTML formatting.
       * @default null
       */
      htmlContent: string | null;
      /**
       * Id
       * @description The ID of the comment.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#comment".
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Quoted File Content
       * @description The file content to which the comment is referring.
       * @default null
       */
      quotedFileContent: {
          [key: string]: string;
      } | null;
      /**
       * Replies
       * @description A list of replies to this comment. Populated if requesting with includeReplies=true.
       * @default null
       */
      replies: {
          /**
           * Action
           * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen
           * @default null
           */
          action: string | null;
          /**
           * User
           * @description The user who created the reply.
           * @default null
           */
          author: {
              /**
               * Display Name
               * @description A plain text displayable name for this user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Content
           * @description The plain text content of the reply.
           * @default null
           */
          content: string | null;
          /**
           * Created Time
           * @description The time the reply was created (RFC 3339 date-time).
           * @default null
           */
          createdTime: string | null;
          /**
           * Deleted
           * @description Whether the reply has been deleted. A deleted reply has no content.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Html Content
           * @description The content of the reply with HTML formatting.
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description The ID of the reply.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#reply".
           * @default null
           */
          kind: string | null;
          /**
           * Modified Time
           * @description The last time the reply was modified (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
      }[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET tool input.
 */
type GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET_INPUT = {
  /**
   * End Time
   * @description The end time of the meeting.
   * @default null
   */
  end_time: string | null;
  /**
   * Meeting Code
   * @description The meeting code of the Google Meet space.
   * @default null
   */
  meeting_code: string | null;
  /**
   * Space Name
   * @description The name of the Google Meet space.
   * @default null
   */
  space_name: string | null;
  /**
   * Start Time
   * @description The start time of the meeting.
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET tool output.
 */
type GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data returned by the Google Meet API.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CONTACTS tool input.
 */
type GOOGLESUPER_GET_CONTACTS_INPUT = {
  /**
   * Include Other Contacts
   * @description Include 'Other Contacts' (interacted with but not explicitly saved) in addition to regular contacts; if true, fetches from both endpoints and merges results.
   * @default true
   */
  include_other_contacts: boolean;
  /**
   * Page Token
   * @description Token to retrieve a specific page of results, obtained from 'nextPageToken' in a previous response.
   */
  page_token?: string;
  /**
   * Person Fields
   * @description Comma-separated person fields to retrieve for each contact (e.g., 'names,emailAddresses').
   * @default emailAddresses,names,birthdays,genders
   */
  person_fields: string;
  /**
   * Resource Name
   * @description Identifier for the person resource whose connections are listed; use 'people/me' for the authenticated user.
   * @default people/me
   */
  resource_name: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CONTACTS tool output.
 */
type GOOGLESUPER_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Google People API, typically containing a list of 'connections' (contacts) with requested 'personFields' and potentially a 'nextPageToken'.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CURRENT_DATE_TIME tool input.
 */
type GOOGLESUPER_GET_CURRENT_DATE_TIME_INPUT = {
  /**
   * Timezone
   * @description Timezone offset from UTC in hours (e.g., 6 for UTC+6, -9 for UTC-9, 5.5 for UTC+5:30). Default 0 is UTC.
   * @default 0
   */
  timezone: number;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CURRENT_DATE_TIME tool output.
 */
type GOOGLESUPER_GET_CURRENT_DATE_TIME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Datetime
       * @description Current date and time in ISO 8601 format (e.g., '2024-07-15T10:30:00+05:30').
       */
      current_datetime: string;
      /**
       * Yyyymmdd Datetime
       * @description Current date and time as 'YYYY,MM,DD,hh,mm,ss' (e.g., '2024,07,15,10,30,00').
       */
      yyyymmdd_datetime: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CUSTOMER_LISTS tool input.
 */
type GOOGLESUPER_GET_CUSTOMER_LISTS_INPUT = object;

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_CUSTOMER_LISTS tool output.
 */
type GOOGLESUPER_GET_CUSTOMER_LISTS_OUTPUT = {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_DIRECTION tool input.
 */
type GOOGLESUPER_GET_DIRECTION_INPUT = {
  /**
   * Avoid
   * @description Specifies features to avoid in the generated route. Multiple values can be combined using a pipe delimiter (e.g., 'tolls|highways'). Valid options include 'tolls', 'highways', and 'ferries'.
   * @default null
   */
  avoid: string | null;
  /**
   * Destination
   * @description The ending point for the directions. This can be a textual address (e.g., '456 Park Ave, New York, NY'), a place name (e.g., 'Universal Studios Hollywood'), or latitude/longitude coordinates (e.g., '40.7128,-74.0060').
   */
  destination?: string;
  /**
   * Language
   * @description The language code for returning results, e.g., 'en' for English, 'es' for Spanish. Defaults to 'en'.
   * @default en
   */
  language: string;
  /**
   * Mode
   * @description The mode of transportation for which to calculate directions. Supported values are 'driving' (default), 'walking', 'bicycling', and 'transit'.
   * @default driving
   */
  mode: string;
  /**
   * Origin
   * @description The starting point for the directions. This can be a textual address (e.g., '123 Main St, Los Angeles, CA'), a place name (e.g., 'Disneyland'), or latitude/longitude coordinates (e.g., '34.0522,-118.2437').
   */
  origin?: string;
  /**
   * Units
   * @description The unit system for displaying distances. Supported values are 'metric' (kilometers and meters) and 'imperial' (miles and feet). Defaults to 'imperial'.
   * @default imperial
   */
  units: string;
  /**
   * Waypoints
   * @description A comma-separated string of intermediate locations (addresses, place names, or coordinates) to visit between the origin and destination.
   * @default null
   */
  waypoints: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_DIRECTION tool output.
 */
type GOOGLESUPER_GET_DIRECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response data from the Google Maps Directions API, containing detailed route information including legs, steps, duration, distance, and geometry.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_DOCUMENT_BY_ID tool input.
 */
type GOOGLESUPER_GET_DOCUMENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique identifier for the Google Document to be retrieved. This action specifically fetches an existing document and will not create a new one if the ID is not found.
   */
  id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_DOCUMENT_BY_ID tool output.
 */
type GOOGLESUPER_GET_DOCUMENT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full Google Document resource, including its content, properties, and metadata.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_DRIVE tool input.
 */
type GOOGLESUPER_GET_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  drive_id?: string;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  use_domain_admin_access: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_DRIVE tool output.
 */
type GOOGLESUPER_GET_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of this shared drive. This is a read-only field.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#drive'.
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The name of this shared drive. This is a read-only field.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_FILE_METADATA tool input.
 */
type GOOGLESUPER_GET_FILE_METADATA_INPUT = {
  /**
   * Acknowledge Abuse
   * @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the alt parameter is set to media and the user is the owner of the file or an organizer of the shared drive in which the file resides.
   * @default null
   */
  acknowledgeAbuse: boolean | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the labelInfo part of the response.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. This parameter will default to false.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_FILE_METADATA tool output.
 */
type GOOGLESUPER_GET_FILE_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD tool input.
 */
type GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD_INPUT = {
  /**
   * Media Item Id
   * @description ID of the media item to download
   */
  mediaItemId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD tool output.
 */
type GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The downloaded media file
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_MEET tool input.
 */
type GOOGLESUPER_GET_MEET_INPUT = {
  /**
   * Space Name
   * @description The unique identifier for the Google Meet space.
   */
  space_name?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_MEET tool output.
 */
type GOOGLESUPER_GET_MEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data returned by the Google Meet API.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PARTICIPANT_SESSION tool input.
 */
type GOOGLESUPER_GET_PARTICIPANT_SESSION_INPUT = {
  /**
   * Name
   * @description Required. Resource name of the participant. Format: conferenceRecords/{conference_record}/participants/{participant}
   */
  name?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PARTICIPANT_SESSION tool output.
 */
type GOOGLESUPER_GET_PARTICIPANT_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AnonymousUser
       * @description Anonymous user.
       * @default null
       */
      anonymousUser: {
          /**
           * Display Name
           * @description User's display name that's visible in the Google Meet app.
           * @default null
           */
          displayName: string | null;
      } | null;
      /**
       * Duration
       * @description Total duration the participant was in the meeting.
       * @default null
       */
      duration: string | null;
      /**
       * Earliest Start Time
       * Format: date-time
       * @description Time when the participant first joined the meeting.
       * @default null
       */
      earliestStartTime: string | null;
      /**
       * Latest End Time
       * Format: date-time
       * @description Time when the participant left the meeting for the last time.
       * @default null
       */
      latestEndTime: string | null;
      /**
       * Participant Id
       * @description Output only. Participant's unique ID.
       * @default null
       */
      participantId: string | null;
      /**
       * PhoneUser
       * @description User who joins from their phone.
       * @default null
       */
      phoneUser: {
          /**
           * Display Name
           * @description User's display name that's visible in the Google Meet app.
           * @default null
           */
          displayName: string | null;
      } | null;
      /**
       * SignedinUser
       * @description Signed-in user.
       * @default null
       */
      signedInUser: {
          /**
           * Display Name
           * @description For people from Google Workspace organizations, this is the user's display name. For other types of users, this is the user's name that's visible in the Google Meet app.
           * @default null
           */
          displayName: string | null;
          /**
           * User Id
           * @description Unique ID for the user.
           * @default null
           */
          userId: string | null;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PEOPLE tool input.
 */
type GOOGLESUPER_GET_PEOPLE_INPUT = {
  /**
   * Other Contacts
   * @description If true, retrieves 'Other Contacts' (people interacted with but not explicitly saved), ignoring `resource_name` and enabling pagination/sync. If false, retrieves information for the single person specified by `resource_name`.
   * @default false
   */
  other_contacts: boolean;
  /**
   * Page Size
   * @description The number of 'Other Contacts' to return per page. Applicable only when `other_contacts` is true.
   * @default 10
   */
  page_size: number;
  /**
   * Page Token
   * @description An opaque token from a previous response to retrieve the next page of 'Other Contacts' results. Applicable only when `other_contacts` is true and paginating.
   * @default
   */
  page_token: string;
  /**
   * Person Fields
   * @description A comma-separated field mask to restrict which fields on the person (or persons) are returned. Consult the Google People API documentation for a comprehensive list of valid fields.
   * @default emailAddresses,names,birthdays,genders
   */
  person_fields: string;
  /**
   * Resource Name
   * @description Resource name identifying the person for whom to retrieve information (like the authenticated user or a specific contact). Used only when `other_contacts` is false.
   * @default people/me
   */
  resource_name: string;
  /**
   * Sync Token
   * @description A token from a previous 'Other Contacts' list call to retrieve only changes since the last sync; leave empty for an initial full sync. Applicable only when `other_contacts` is true.
   * @default
   */
  sync_token: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PEOPLE tool output.
 */
type GOOGLESUPER_GET_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Other Contacts
       * @description Contains the list of 'Other Contacts', potentially including tokens for pagination or future syncs. Populated when `other_contacts` is true.
       * @default {}
       */
      other_contacts: {
          [key: string]: unknown;
      };
      /**
       * People Data
       * @description Contains the person's data as requested, populated when `other_contacts` is false and a single person is fetched.
       * @default {}
       */
      people_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PERMISSION tool input.
 */
type GOOGLESUPER_GET_PERMISSION_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Permission Id
   * @description The ID of the permission.
   */
  permission_id?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supports_all_drives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  use_domain_admin_access: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PERMISSION tool output.
 */
type GOOGLESUPER_GET_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow File Discovery
       * @description Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
       * @default null
       */
      allowFileDiscovery: boolean | null;
      /**
       * Deleted
       * @description Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description A displayable name for users, groups or domains.
       * @default null
       */
      displayName: string | null;
      /**
       * Domain
       * @description The domain to which this permission refers.
       * @default null
       */
      domain: string | null;
      /**
       * Email Address
       * @description The email address of the user or group to which this permission refers.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Expiration Time
       * @description The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future
       * @default null
       */
      expirationTime: string | null;
      /**
       * Id
       * @description The ID of the permission. This is a unique identifier for the grantee, and is published in User resources as permissionId.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#permission".
       * @default null
       */
      kind: string | null;
      /**
       * Permission Details
       * @description Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only for Team Drive items.
       * @default null
       */
      permissionDetails: {
          /**
           * Inherited
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Permission Type
           * @default null
           */
          permissionType: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * With Link
           * @default null
           */
          withLink: boolean | null;
      }[] | null;
      /**
       * Photo Link
       * @description A link to the user's profile photo, if available.
       * @default null
       */
      photoLink: string | null;
      /**
       * Role
       * @description The role granted by this permission. While new values may be supported in the future, the following are currently possible: "owner", "organizer", "fileOrganizer", "writer", "commenter", "reader"
       * @default null
       */
      role: string | null;
      /**
       * Team Drive Permission Details
       * @description Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
       * @default null
       */
      teamDrivePermissionDetails: {
          /**
           * Inherited
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * Team Drive Permission Type
           * @default null
           */
          teamDrivePermissionType: string | null;
      }[] | null;
      /**
       * Type
       * @description The type of the grantee. Valid values are: "user", "group", "domain", "anyone"
       * @default null
       */
      type: string | null;
      /**
       * View
       * @description Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
       * @default null
       */
      view: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PROFILE tool input.
 */
type GOOGLESUPER_GET_PROFILE_INPUT = {
  /**
   * User Id
   * @description The email address of the Gmail user whose profile is to be retrieved, or the special value 'me' to indicate the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_PROFILE tool output.
 */
type GOOGLESUPER_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The user's Gmail profile information. Key fields typically include 'emailAddress' (primary email), 'messagesTotal' (total messages), 'threadsTotal' (total threads), and 'historyId' (mailbox history ID).
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID tool input.
 */
type GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_INPUT = {
  /**
   * Conference Record Id
   * @description Unique identifier for the conference record.
   */
  conferenceRecord_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID tool output.
 */
type GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete API response from Google Meet, detailing the recordings.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_REPLY tool input.
 */
type GOOGLESUPER_GET_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  commentId?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Deleted
   * @description Whether to return deleted replies. Deleted replies will not include their original content.
   * @default null
   */
  includeDeleted: boolean | null;
  /**
   * Reply Id
   * @description The ID of the reply.
   */
  replyId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_REPLY tool output.
 */
type GOOGLESUPER_GET_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen.
       * @default null
       */
      action: string | null;
      /**
       * Author
       * @description The user who created the reply.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies this resource as a user.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the reply.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * Format: date-time
       * @description The time the reply was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the reply has been deleted. A deleted reply has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The HTML content of the reply.
       * @default null
       */
      htmlContent: string | null;
      /**
       * Id
       * @description The ID of the reply.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies this resource as a reply.
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * Format: date-time
       * @description The last time the reply was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_REVISION tool input.
 */
type GOOGLESUPER_GET_REVISION_INPUT = {
  /**
   * Acknowledge Abuse
   * @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the alt parameter is set to media and the user is the owner of the file or an organizer of the shared drive in which the file resides.
   * @default null
   */
  acknowledge_abuse: boolean | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Revision Id
   * @description The ID of the revision.
   */
  revision_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_REVISION tool output.
 */
type GOOGLESUPER_GET_REVISION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Export Links
       * @description Links for exporting Docs Editors files to specific formats.
       * @default null
       */
      export_links: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The ID of the revision.
       * @default null
       */
      id: string | null;
      /**
       * Keep Forever
       * @description Whether to keep this revision forever, even if it is no longer the head revision. If not set or false, the revision will be automatically purged 30 days after newer revisions are created.
       * @default null
       */
      keep_forever: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
       * @default null
       */
      kind: string | null;
      /**
       * Last Modifying User
       * @description The user who last modified the revision.
       * @default null
       */
      last_modifying_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum of the revision. This is only populated for revisions of files with binary content in Drive.
       * @default null
       */
      md5_checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the revision.
       * @default null
       */
      mime_type: string | null;
      /**
       * Modified Time
       * @description The last time the revision was modified (RFC 3339 date-time).
       * @default null
       */
      modified_time: string | null;
      /**
       * Original Filename
       * @description The original filename of the revision. This is only populated for revisions of files with binary content in Drive.
       * @default null
       */
      original_filename: string | null;
      /**
       * Publish Link
       * @description A link to the published revision.
       * @default null
       */
      publish_link: string | null;
      /**
       * Published
       * @description Whether this revision is published. This is only populated for files with Google Docs Editors content types.
       * @default null
       */
      published: boolean | null;
      /**
       * Size
       * @description The size of the revision content in bytes. This is only populated for revisions of files with binary content in Drive.
       * @default null
       */
      size: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ROUTE tool input.
 */
type GOOGLESUPER_GET_ROUTE_INPUT = {
  /**
   * Compute Alternative Routes
   * @description Computes and returns alternative routes if true.
   * @default false
   */
  computeAlternativeRoutes: boolean;
  /**
   * Destination Address
   * @description Destination point address or place name for the route calculation.
   */
  destination_address?: string;
  /**
   * Field Mask
   * @description Comma-separated list of `Route` object fields to include in the response (e.g., 'routes.distanceMeters,routes.duration') for efficiency.
   * @default routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline
   */
  fieldMask: string;
  /**
   * Language Code
   * @description BCP-47 language code (e.g., 'en-US', 'es') for textual information like navigation instructions.
   * @default en-US
   */
  languageCode: string;
  /**
   * Origin Address
   * @description Starting point address or place name for the route calculation.
   */
  origin_address?: string;
  /**
   * Route Modifiers Avoid Ferries
   * @description Attempts to avoid ferries if true.
   * @default false
   */
  routeModifiers_avoidFerries: boolean;
  /**
   * Route Modifiers Avoid Highways
   * @description Attempts to avoid highways if true.
   * @default false
   */
  routeModifiers_avoidHighways: boolean;
  /**
   * Route Modifiers Avoid Tolls
   * @description Attempts to avoid toll roads if true.
   * @default false
   */
  routeModifiers_avoidTolls: boolean;
  /**
   * Routing Preference
   * @description Specifies routing preference: `TRAFFIC_UNAWARE` (fastest, ignores traffic), `TRAFFIC_AWARE` (considers traffic, optimized), `TRAFFIC_AWARE_OPTIMAL` (most accurate traffic-based routing), or `ROUTING_PREFERENCE_UNSPECIFIED` (behavior similar to `TRAFFIC_UNAWARE`).
   * @default TRAFFIC_AWARE
   * @enum {string}
   */
  routingPreference: "ROUTING_PREFERENCE_UNSPECIFIED" | "TRAFFIC_UNAWARE" | "TRAFFIC_AWARE" | "TRAFFIC_AWARE_OPTIMAL";
  /**
   * Travel Mode
   * @description Mode of transportation for the route.
   * @default DRIVE
   * @enum {string}
   */
  travelMode: "DRIVE" | "BICYCLE" | "WALK" | "TWO_WHEELER" | "TRANSIT";
  /**
   * Units
   * @description Unit system (e.g., 'METRIC' for kilometers, 'IMPERIAL' for miles) for displaying distances.
   * @default IMPERIAL
   * @enum {string}
   */
  units: "METRIC" | "IMPERIAL";
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_ROUTE tool output.
 */
type GOOGLESUPER_GET_ROUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Google Maps Routes API, structured based on `fieldMask`, typically including route legs, distance, duration, and polylines.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_SHEET_NAMES tool input.
 */
type GOOGLESUPER_GET_SHEET_NAMES_INPUT = {
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet. This ID is typically found in the spreadsheet's URL.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_SHEET_NAMES tool output.
 */
type GOOGLESUPER_GET_SHEET_NAMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sheet Names
       * @description A list of names of all worksheets within the specified spreadsheet. Returns an empty list if the spreadsheet contains no worksheets.
       */
      sheet_names?: string[];
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER tool input.
 */
type GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER_INPUT = {
  /**
   * Data Filters
   * @description The DataFilters used to select which ranges to retrieve.
   */
  dataFilters?: {
      /**
       * A1 Range
       * @description Selects data that matches the specified A1 range.
       * @default null
       */
      a1Range: string | null;
      /**
       * DeveloperMetadataLookup
       * @description Selects data associated with developer metadata.
       * @default null
       */
      developerMetadataLookup: {
          /**
           * DeveloperMetadataLookupLocationType
           * @description Location type of metadata.
           * @default null
           * @enum {string|null}
           */
          locationType: "ROW" | "COLUMN" | "SHEET" | "SPREADSHEET" | "OBJECT" | null;
          /**
           * Metadata Id
           * @description Filter by metadata ID.
           * @default null
           */
          metadataId: number | null;
          /**
           * Metadata Key
           * @description Filter by metadata key.
           * @default null
           */
          metadataKey: string | null;
          /**
           * Metadata Value
           * @description Filter by metadata value.
           * @default null
           */
          metadataValue: string | null;
          /**
           * DeveloperMetadataLookupVisibility
           * @description Metadata visibility.
           * @default null
           * @enum {string|null}
           */
          visibility: "DOCUMENT" | "PROJECT" | null;
      } | null;
      /**
       * GridRange
       * @description Selects data that matches the range described by the GridRange.
       * @default null
       */
      gridRange: {
          /**
           * End Column Index
           * @description The end column (0-based, exclusive) of the range.
           * @default null
           */
          endColumnIndex: number | null;
          /**
           * End Row Index
           * @description The end row (0-based, exclusive) of the range.
           * @default null
           */
          endRowIndex: number | null;
          /**
           * Sheet Id
           * @description The ID of the sheet this range is on.
           * @default null
           */
          sheetId: number | null;
          /**
           * Start Column Index
           * @description The start column (0-based, inclusive) of the range.
           * @default null
           */
          startColumnIndex: number | null;
          /**
           * Start Row Index
           * @description The start row (0-based, inclusive) of the range.
           * @default null
           */
          startRowIndex: number | null;
      } | null;
  }[];
  /**
   * Exclude Tables In Banded Ranges
   * @description True if tables should be excluded in the banded ranges. False if not set.
   * @default null
   */
  excludeTablesInBandedRanges: boolean | null;
  /**
   * Include Grid Data
   * @description True if grid data should be returned. Ignored if a field mask is set.
   * @default null
   */
  includeGridData: boolean | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to request.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER tool output.
 */
type GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Named Ranges
       * @description The named ranges defined in this spreadsheet.
       * @default null
       */
      namedRanges: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Properties
       * @description The properties of the spreadsheet.
       * @default null
       */
      properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Sheets
       * @description The sheets that are part of this spreadsheet.
       * @default null
       */
      sheets: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       */
      spreadsheetId: string;
      /**
       * Spreadsheet Url
       * @description The URL of the spreadsheet.
       * @default null
       */
      spreadsheetUrl: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_SPREADSHEET_INFO tool input.
 */
type GOOGLESUPER_GET_SPREADSHEET_INFO_INPUT = {
  /**
   * Spreadsheet Id
   * @description Unique identifier of the Google Spreadsheet, typically found in its URL.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_SPREADSHEET_INFO tool output.
 */
type GOOGLESUPER_GET_SPREADSHEET_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Spreadsheet resource from the Google Sheets API, including properties (ID, title, locale, time zone), sheet details (ID, title, index, type, grid properties), named ranges, and other metadata. For the exact structure, refer to the Google Sheets API v4 'Spreadsheet' resource documentation.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TABLE_SCHEMA tool input.
 */
type GOOGLESUPER_GET_TABLE_SCHEMA_INPUT = {
  /**
   * Sample Size
   * @description Number of rows to sample for type inference
   * @default 50
   */
  sample_size: number;
  /**
   * Sheet Name
   * @description Sheet/tab name if table_name is ambiguous across multiple sheets
   * @default null
   */
  sheet_name: string | null;
  /**
   * Spreadsheet Id
   * @description Google Sheets ID
   */
  spreadsheet_id?: string;
  /**
   * Table Name
   * @description Specific table name from LIST_TABLES response (e.g., 'Sales_Data', 'Employee_List'). Use 'auto' to analyze the largest/most prominent table.
   */
  table_name?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TABLE_SCHEMA tool output.
 */
type GOOGLESUPER_GET_TABLE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description Column schema information
       */
      columns: {
          /**
           * Formula Pattern
           * @description Formula pattern if column contains formulas
           * @default null
           */
          formula_pattern: string | null;
          /**
           * Name
           * @description Column name
           */
          name: string;
          /**
           * Nullable
           * @description Whether column can contain null/empty values
           */
          nullable: boolean;
          /**
           * Position
           * @description 1-based column position
           */
          position: number;
          /**
           * Type
           * @description Inferred data type (TEXT, INTEGER, FLOAT, BOOLEAN, DATE, FORMULA)
           */
          type: string;
      }[];
      /**
       * Has Header
       * @description Whether table has a header row
       */
      has_header: boolean;
      /**
       * Primary Key
       * @description Primary key column name (usually '_row')
       */
      primary_key: string;
      /**
       * Range
       * @description A1 notation range of the table
       */
      range: string;
      /**
       * Row Count
       * @description Number of data rows in table
       */
      row_count: number;
      /**
       * Sheet Name
       * @description Sheet name where table is located
       */
      sheet_name: string;
      /**
       * Spreadsheet Id
       * @description The spreadsheet ID
       */
      spreadsheet_id: string;
      /**
       * Table Name
       * @description Name of the analyzed table
       */
      table_name: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TASK tool input.
 */
type GOOGLESUPER_GET_TASK_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the Google Task to retrieve.
   */
  task_id?: string;
  /**
   * Tasklist Id
   * @description Unique identifier of the Google Tasks list containing the task.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TASK tool output.
 */
type GOOGLESUPER_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The retrieved Google Task, with details like 'id', 'title', 'notes', 'status', 'due' date, 'completed' date, and parent/subtask relations.
       */
      task: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TASK_LIST tool input.
 */
type GOOGLESUPER_GET_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description The unique identifier of the task list to retrieve, assigned by Google Tasks when the list is created.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TASK_LIST tool output.
 */
type GOOGLESUPER_GET_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task List
       * @description Detailed information about the retrieved task list, including its ID, title, last update timestamp, and a self-referencing link.
       */
      task_list?: {
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag?: string;
          /**
           * Id
           * @description Task list identifier.
           */
          id?: string;
          /**
           * Kind
           * @description Type of the resource. This is always 'tasks#taskList'.
           * @default tasks#taskList
           */
          kind: string;
          /**
           * Self Link
           * @description URL pointing to this task list. Used to retrieve, update, or delete this task list.
           */
          selfLink?: string;
          /**
           * Title
           * @description Title of the task list. Maximum length allowed: 1024 characters.
           */
          title?: string;
          /**
           * Updated
           * @description Last modification time of the task list (as a RFC 3339 timestamp).
           */
          updated?: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID tool input.
 */
type GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_INPUT = {
  /**
   * Conference Record Id
   * @description Unique identifier of the conference record.
   */
  conferenceRecord_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID tool output.
 */
type GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Meet containing the transcript data.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION tool input.
 */
type GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_INPUT = {
  /**
   * File Id
   * @description The ID of the file or folder to delete. This is a required field.
   */
  fileId?: string;
  /**
   * Supports All Drives
   * @description Whether the application supports both My Drives and shared drives. If false or unspecified, the file is attempted to be deleted from the user's My Drive. If true, the item will be deleted from shared drives as well if necessary.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION tool output.
 */
type GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of GOOGLESUPER's GOOGLESUPER_HIDE_DRIVE tool input.
 */
type GOOGLESUPER_HIDE_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  drive_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_HIDE_DRIVE tool output.
 */
type GOOGLESUPER_HIDE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive. This is a monotonically increasing ID that is unique across all shared drives created by a given organization.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
       * @default drive#drive
       */
      kind: string;
      /**
       * Name
       * @description The name of this shared drive.
       */
      name: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_DIMENSION tool input.
 */
type GOOGLESUPER_INSERT_DIMENSION_INPUT = {
  /**
   * Include Spreadsheet In Response
   * @description True if the updated spreadsheet should be included in the response.
   * @default null
   */
  include_spreadsheet_in_response: boolean | null;
  /**
   * Insert Dimension
   * @description The details for the insert dimension request.
   */
  insert_dimension?: {
      /**
       * Inherit From Before
       * @description If true, the new dimensions will inherit properties from the dimension before the startIndex. If false (default), they will inherit from the dimension at the startIndex. startIndex must be greater than 0 if inheritFromBefore is true.
       * @default null
       */
      inherit_from_before: boolean | null;
      /**
       * Range
       * @description Specifies the dimensions to insert.
       */
      range: {
          /**
           * Dimension
           * @description The dimension to insert. Valid values are "ROWS" or "COLUMNS".
           * @enum {string}
           */
          dimension: "ROWS" | "COLUMNS";
          /**
           * End Index
           * @description The end index (0-based, exclusive) of the dimension range to insert. The number of rows/columns to insert is `endIndex - startIndex`.
           */
          end_index: number;
          /**
           * Sheet Id
           * @description The ID of the sheet where the dimensions will be inserted.
           */
          sheet_id: number;
          /**
           * Start Index
           * @description The start index (0-based) of the dimension range to insert. The inserted dimensions will be placed before this index.
           */
          start_index: number;
      };
  };
  /**
   * Response Include Grid Data
   * @description True if grid data should be included in the response (if includeSpreadsheetInResponse is true).
   * @default null
   */
  response_include_grid_data: boolean | null;
  /**
   * Response Ranges
   * @description Limits the ranges of the spreadsheet to include in the response.
   * @default null
   */
  response_ranges: string[] | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to update.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_DIMENSION tool output.
 */
type GOOGLESUPER_INSERT_DIMENSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies to the batch update requests. For InsertDimension, the reply is usually empty on success.
       */
      replies: {
          [key: string]: unknown;
      }[];
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet that was updated.
       */
      spreadsheetId: string;
      /**
       * Spreadsheet
       * @description The updated spreadsheet resource, if requested via includeSpreadsheetInResponse.
       * @default null
       */
      updatedSpreadsheet: {
          /**
           * SpreadsheetProperties
           * @default null
           */
          properties: {
              /**
               * Title
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Sheets
           * @default null
           */
          sheets: {
              /**
               * SheetProperties
               * @default null
               */
              properties: {
                  /**
                   * Sheet Id
                   * @default null
                   */
                  sheet_id: number | null;
                  /**
                   * Title
                   * @default null
                   */
                  title: string | null;
              } | null;
          }[] | null;
          /**
           * Spreadsheet Id
           * @default null
           */
          spreadsheet_id: string | null;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_INLINE_IMAGE tool input.
 */
type GOOGLESUPER_INSERT_INLINE_IMAGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /**
   * Location
   * @description The location in the document to insert the image.
   */
  location?: {
      /**
       * Index
       * @description The zero-based index within the segment where the image will be inserted. If not provided, the image is inserted at the end of the segment.
       * @default null
       */
      index: number | null;
      /**
       * Segment Id
       * @description The ID of the segment where the image will be inserted. If not provided, the image is inserted in the document body.
       * @default null
       */
      segmentId: string | null;
  };
  /**
   * ObjectSize
   * @description The size of the image. If not specified, the image is rendered at its intrinsic size.
   * @default null
   */
  objectSize: {
      /**
       * Dimension
       * @description The height of the image.
       * @default null
       */
      height: {
          /**
           * Magnitude
           * @description The magnitude of the size.
           * @default null
           */
          magnitude: number | null;
          /**
           * UnitEnum
           * @description The units for magnitude. Supported units: EMU, PT, PX.
           * @default null
           * @enum {string|null}
           */
          unit: "EMU" | "PT" | "PX" | null;
      } | null;
      /**
       * Dimension
       * @description The width of the image.
       * @default null
       */
      width: {
          /**
           * Magnitude
           * @description The magnitude of the size.
           * @default null
           */
          magnitude: number | null;
          /**
           * UnitEnum
           * @description The units for magnitude. Supported units: EMU, PT, PX.
           * @default null
           * @enum {string|null}
           */
          unit: "EMU" | "PT" | "PX" | null;
      } | null;
  } | null;
  /**
   * Uri
   * @description The URI of the image. Images must be less than 50MB, not exceed 25 megapixels, and be in PNG, JPEG, or GIF format. The URI can be at most 2 kB.
   */
  uri?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_INLINE_IMAGE tool output.
 */
type GOOGLESUPER_INSERT_INLINE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      documentId: string;
      /**
       * Status
       * @description Indicates the status of the operation.
       * @default success
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_PAGE_BREAK tool input.
 */
type GOOGLESUPER_INSERT_PAGE_BREAK_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /**
   * Insert Page Break
   * @description The details for the insertPageBreak request.
   */
  insertPageBreak?: {
      /**
       * EndOfSegmentLocation
       * @description Specifies that the page break should be inserted at the end of a segment (document body). Use this or location.
       * @default null
       */
      endOfSegmentLocation: {
          /**
           * Segment Id
           * @description The ID of the segment where the page break is to be inserted. For page breaks, this must be null or an empty string, indicating the end of the main document body.
           * @default null
           */
          segmentId: string | null;
      } | null;
      /**
       * Location
       * @description Specifies the location to insert the page break using a zero-based index. Use this or end_of_segment_location.
       * @default null
       */
      location: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units. The page break is inserted before this index.
           */
          index: number;
          /**
           * Segment Id
           * @description The ID of the segment where the page break is to be inserted. For page breaks, this should typically be null or empty, indicating the main document body, as page breaks are not allowed in headers, footers, or footnotes.
           * @default null
           */
          segmentId: string | null;
      } | null;
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_PAGE_BREAK tool output.
 */
type GOOGLESUPER_INSERT_PAGE_BREAK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies, one for each request made. For a single insert page break, this will contain one reply.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TABLE_ACTION tool input.
 */
type GOOGLESUPER_INSERT_TABLE_ACTION_INPUT = {
  /**
   * Columns
   * @description The number of columns in the table.
   */
  columns?: number;
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /**
   * Index
   * @description The zero-based index where the table will be inserted. If provided, 'location' will be used. If omitted and 'insertAtEndOfSegment' is false or omitted, 'endOfSegmentLocation' will be used for the document body.
   * @default null
   */
  index: number | null;
  /**
   * Insert At End Of Segment
   * @description If true, inserts the table at the end of the segment (document body, header, or footer specified by segment_id). If false or omitted, and 'index' is not provided, it defaults to inserting at the end of the document body. If 'index' is provided, this field is ignored.
   * @default null
   */
  insertAtEndOfSegment: boolean | null;
  /**
   * Rows
   * @description The number of rows in the table.
   */
  rows?: number;
  /**
   * Segment Id
   * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
   * @default null
   */
  segmentId: string | null;
  /**
   * Tab Id
   * @description The tab that the location is in. When omitted, the request is applied to the first tab.
   * @default null
   */
  tabId: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TABLE_ACTION tool output.
 */
type GOOGLESUPER_INSERT_TABLE_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the table was inserted into.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TABLE_COLUMN tool input.
 */
type GOOGLESUPER_INSERT_TABLE_COLUMN_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Requests
   * @description A list of requests to be applied to the document. For this action, it will contain one InsertTableColumnRequest.
   */
  requests?: {
      /** Insert Table Column */
      insertTableColumn: {
          /**
           * Insert Right
           * @description Whether to insert new column to the right of the reference cell location. True: insert to the right. False: insert to the left.
           * @default false
           */
          insertRight: boolean | null;
          /**
           * Table Cell Location
           * @description The reference table cell location from which columns will be inserted.
           */
          tableCellLocation: {
              /**
               * Column Index
               * @description The zero-based column index of the reference cell.
               */
              columnIndex: number;
              /**
               * Row Index
               * @description The zero-based row index of the reference cell.
               */
              rowIndex: number;
              /**
               * Location
               * @description The location where the table starts in the document.
               * @default null
               */
              tableStartLocation: {
                  /**
                   * Index
                   * @description The zero-based index, in UTF-16 code units, relative to the beginning of the segment.
                   * @default null
                   */
                  index: number | null;
                  /**
                   * Segment Id
                   * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
                   * @default null
                   */
                  segmentId: string | null;
                  /**
                   * Tab Id
                   * @description The tab that the location is in. When omitted, the request is applied to the first tab.
                   * @default null
                   */
                  tabId: string | null;
              } | null;
          };
      };
  }[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TABLE_COLUMN tool output.
 */
type GOOGLESUPER_INSERT_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document to which the changes were applied (often present in the overall response).
       * @default null
       */
      documentId: string | null;
      /**
       * Replies
       * @description A list of replies to the batchUpdate request. Each reply corresponds to a request in the batch. For InsertTableColumn, individual replies are often empty.
       * @default null
       */
      replies: Record<string, never>[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TASK tool input.
 */
type GOOGLESUPER_INSERT_TASK_INPUT = {
  /**
   * Completed
   * @description Completion date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  completed?: string;
  /**
   * Deleted
   * @description Flag indicating whether the task has been deleted.
   * @default null
   */
  deleted: boolean | null;
  /**
   * Due
   * @description Due date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  due?: string;
  /**
   * Etag
   * @description ETag of the resource.
   */
  etag?: string;
  /**
   * Hidden
   * @description Flag indicating whether the task is hidden.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Id
   * @description Task identifier.
   */
  id?: string;
  /**
   * Notes
   * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
   */
  notes?: string;
  /**
   * Status
   * @description Status of the task. This is either 'needsAction' or 'completed'.
   * @enum {string}
   */
  status?: "needsAction" | "completed";
  /**
   * Task Parent
   * @description Identifier of an existing task to serve as parent; if provided, creates a subtask, otherwise a top-level task in the specified list.
   */
  task_parent?: string;
  /**
   * Task Previous
   * @description Identifier of an existing task after which the new task will be placed, at the same hierarchical level (as a sibling).
   */
  task_previous?: string;
  /**
   * Tasklist Id
   * @description Identifier for the Google Task list where the new task will be created.
   */
  tasklist_id?: string;
  /**
   * Title
   * @description Title of the task. Maximum length allowed: 1024 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TASK tool output.
 */
type GOOGLESUPER_INSERT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description A dictionary representing the complete Google Task resource that was newly created, including all its properties as returned by the API, if the operation was successful.
       */
      task: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TEXT_ACTION tool input.
 */
type GOOGLESUPER_INSERT_TEXT_ACTION_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to insert text into.
   */
  document_id?: string;
  /**
   * Insertion Index
   * @description The EOL character of the paragraph will be moved to the end of the inserted text. The index where the text will be inserted. The index is zero-based and refers to the UTF-16 code unit. For example, to insert text at the beginning of the document, use an index of 1 (to account for the first paragraph).
   */
  insertion_index?: number;
  /**
   * Text To Insert
   * @description The string of text to insert.
   */
  text_to_insert?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_INSERT_TEXT_ACTION tool output.
 */
type GOOGLESUPER_INSERT_TEXT_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      document_id: string;
      /**
       * Status
       * @description Status of the insert operation.
       * @default Successfully inserted text.
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_ACCOUNTS tool input.
 */
type GOOGLESUPER_LIST_ACCOUNTS_INPUT = {
  /**
   * Page Size
   * @description Optional. Maximum number of accounts to return. Must be ≥1.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Optional. Token for retrieving the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Show Deleted
   * @description Optional. Whether to include soft-deleted (trashed) Accounts.
   * @default null
   */
  showDeleted: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_ACCOUNTS tool output.
 */
type GOOGLESUPER_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of Account resources.
       */
      accounts: {
          /**
           * Create Time
           * @description ISO 8601 timestamp when the account was created.
           */
          createTime: string;
          /**
           * Deleted
           * @description Whether this Account is soft-deleted.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Display Name
           * @description Human-readable display name for this account.
           * @default null
           */
          displayName: string | null;
          /**
           * Name
           * @description Resource name of this account. Format: accounts/{account_id}.
           */
          name: string;
          /**
           * Region Code
           * @description Country/region code of the account (e.g., 'US').
           * @default null
           */
          regionCode: string | null;
          /**
           * Update Time
           * @description ISO 8601 timestamp when the account was last updated.
           */
          updateTime: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_ACL_RULES tool input.
 */
type GOOGLESUPER_LIST_ACL_RULES_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
  /**
   * Max Results
   * @description Maximum number of entries returned on one result page. Optional. The default is 100.
   * @default null
   */
  max_results: number | null;
  /**
   * Page Token
   * @description Token specifying which result page to return. Optional.
   * @default null
   */
  page_token: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted ACLs in the result. Optional. The default is False.
   * @default null
   */
  show_deleted: boolean | null;
  /**
   * Sync Token
   * @description Token obtained from the nextSyncToken field returned on the last page of a previous list operation. It makes the result of this list operation contain only entries that have changed since then. Optional. The default is to retrieve all entries.
   * @default null
   */
  sync_token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_ACL_RULES tool output.
 */
type GOOGLESUPER_LIST_ACL_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the collection.
       */
      etag: string;
      /**
       * Items
       * @description List of rules on the access control list.
       */
      items: {
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag: string;
          /**
           * Id
           * @description Identifier of the ACL rule.
           */
          id: string;
          /**
           * Kind
           * @description Type of the resource ("calendar#aclRule").
           */
          kind: string;
          /**
           * Role
           * @description The role assigned to the scope. Possible values are: "none", "freeBusyReader", "reader", "writer", "owner".
           */
          role: string;
          /**
           * Scope
           * @description The scope of the rule.
           */
          scope: {
              /**
               * Type
               * @description The type of the scope. Possible values are: "default", "user", "group", "domain".
               */
              type: string;
              /**
               * Value
               * @description The email address or domain name in the scope. Optional.
               * @default null
               */
              value: string | null;
          };
      }[];
      /**
       * Kind
       * @description Type of the collection ("calendar#acl").
       */
      kind: string;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result. Omitted if the backend doesn't support query token.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used to access the next page of this result. Omitted if the backend doesn't support query token.
       * @default null
       */
      nextSyncToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_ALBUMS tool input.
 */
type GOOGLESUPER_LIST_ALBUMS_INPUT = {
  /**
   * Exclude Non App Created Data
   * @description If true, excludes media items not created by this app
   */
  excludeNonAppCreatedData?: boolean;
  /**
   * Page Size
   * @description Maximum number of albums to return. Default 20, maximum 50.
   * @default 20
   */
  pageSize: number;
  /**
   * Page Token
   * @description Continuation token for getting the next page of results
   */
  pageToken?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_ALBUMS tool output.
 */
type GOOGLESUPER_LIST_ALBUMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Albums
       * @description List of albums shown in the Albums tab
       * @default []
       */
      albums: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to get the next set of albums
       */
      nextPageToken?: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_AUDIENCES tool input.
 */
type GOOGLESUPER_LIST_AUDIENCES_INPUT = {
  /**
   * Page Size
   * @description Optional. Maximum number of Audiences to return.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Optional. Token for retrieving the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Parent
   * @description Required. Resource name of the parent property. Format: properties/{property_id}
   */
  parent?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_AUDIENCES tool output.
 */
type GOOGLESUPER_LIST_AUDIENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audiences
       * @description List of Audience resources.
       */
      audiences: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_CALENDARS tool input.
 */
type GOOGLESUPER_LIST_CALENDARS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of calendars to return per page. Max 250.
   * @default 10
   */
  max_results: number;
  /**
   * Min Access Role
   * @description Minimum access role for calendars returned. Valid values: 'freeBusyReader', 'owner', 'reader', 'writer'.
   * @default null
   */
  min_access_role: string | null;
  /**
   * Page Token
   * @description Token for the page of results to return, from a previous response.
   * @default null
   */
  page_token: string | null;
  /**
   * Show Deleted
   * @description Include deleted calendars in the result.
   * @default false
   */
  show_deleted: boolean;
  /**
   * Show Hidden
   * @description Include calendars not typically shown in the UI.
   * @default false
   */
  show_hidden: boolean;
  /**
   * Sync Token
   * @description Sync token from a previous list request to get only changed entries; showDeleted, showHidden, and pageToken are ignored if provided.
   * @default null
   */
  sync_token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_CALENDARS tool output.
 */
type GOOGLESUPER_LIST_CALENDARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendars
       * @description List of calendar entries, each a dictionary with calendar details.
       */
      calendars: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_CHANGES tool input.
 */
type GOOGLESUPER_LIST_CHANGES_INPUT = {
  /**
   * Drive Id
   * @description The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
   * @default null
   */
  driveId: string | null;
  /**
   * Include Corpus Removals
   * @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
   * @default null
   */
  includeCorpusRemovals: boolean | null;
  /**
   * Include Items From All Drives
   * @description Whether both My Drive and shared drive items should be included in results.
   * @default null
   */
  includeItemsFromAllDrives: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Include Removed
   * @description Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
   * @default true
   */
  includeRemoved: boolean | null;
  /**
   * Page Size
   * @description The maximum number of changes to return per page.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
   */
  pageToken?: string;
  /**
   * Restrict To My Drive
   * @description Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
   * @default null
   */
  restrictToMyDrive: boolean | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
   * @default drive
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_CHANGES tool output.
 */
type GOOGLESUPER_LIST_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changes
       * @description The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      changes?: {
          /**
           * Drive
           * @description The updated state of the shared drive. Present if the type is drive and the shared drive has not been removed from this list of changes.
           * @default null
           */
          drive: {
              [key: string]: unknown;
          } | null;
          /**
           * Drive Id
           * @description The ID of the shared drive associated with this change.
           * @default null
           */
          driveId: string | null;
          /**
           * File
           * @description The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
           * @default null
           */
          file: {
              [key: string]: unknown;
          } | null;
          /**
           * File Id
           * @description The ID of the file which has changed.
           * @default null
           */
          fileId: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#change".
           * @default null
           */
          kind: string | null;
          /**
           * Removed
           * @description Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
           * @default null
           */
          removed: boolean | null;
          /**
           * Team Drive
           * @description Deprecated: Use drive instead.
           * @default null
           */
          teamDrive: {
              [key: string]: unknown;
          } | null;
          /**
           * Team Drive Id
           * @description Deprecated: Use driveId instead.
           * @default null
           */
          teamDriveId: string | null;
          /**
           * Time
           * @description The time of this change (RFC 3339 date-time).
           * @default null
           */
          time: string | null;
          /**
           * Type
           * @description The type of the change. Possible values are "file" and "drive".
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#changeList".
       */
      kind: string;
      /**
       * New Start Page Token
       * @description The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire.
       * @default null
       */
      newStartPageToken: string | null;
      /**
       * Next Page Token
       * @description The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_COMMENTS tool input.
 */
type GOOGLESUPER_LIST_COMMENTS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response. Use `*` to include all fields.
   * @default *
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Deleted
   * @description Whether to include deleted comments. Deleted comments will not include their original content.
   * @default false
   */
  includeDeleted: boolean | null;
  /**
   * Page Size
   * @description The maximum number of comments to return per page.
   * @default 20
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Start Modified Time
   * @description The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
   * @default null
   */
  startModifiedTime: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_COMMENTS tool output.
 */
type GOOGLESUPER_LIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      comments: {
          /**
           * Anchor
           * @description A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
           * @default null
           */
          anchor: string | null;
          /**
           * CommentAuthor
           * @description The author of the comment. The author's email address and permission ID will not be populated.
           * @default null
           */
          author: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Kind
               * @description Identifies this user as a Google Drive user.
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Content
           * @description The plain text content of the comment.
           * @default null
           */
          content: string | null;
          /**
           * Created Time
           * Format: date-time
           * @description The time at which the comment was created (RFC 3339 date-time).
           * @default null
           */
          createdTime: string | null;
          /**
           * Deleted
           * @description Whether the comment has been deleted. A deleted comment has no content.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Html Content
           * @description The content of the comment with HTML formatting.
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description The ID of the comment.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies this resource as a Drive comment.
           * @default null
           */
          kind: string | null;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Quoted File Content
           * @description The file content to which the comment is referring, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
           * @default null
           */
          quotedFileContent: {
              [key: string]: string;
          } | null;
          /**
           * Replies
           * @description A list of replies to this comment. Formatted as comment objects, but with a defined action field.
           * @default null
           */
          replies: {
              /**
               * Action
               * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen
               * @default null
               */
              action: string | null;
              /**
               * CommentAuthor
               * @description The author of the reply. The author's email address and permission ID will not be populated.
               * @default null
               */
              author: {
                  /**
                   * Display Name
                   * @description The display name of the user.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Kind
                   * @description Identifies this user as a Google Drive user.
                   * @default null
                   */
                  kind: string | null;
                  /**
                   * Me
                   * @description Whether this user is the requesting user.
                   * @default null
                   */
                  me: boolean | null;
                  /**
                   * Permission Id
                   * @description The user's ID as visible in Permission resources.
                   * @default null
                   */
                  permissionId: string | null;
                  /**
                   * Photo Link
                   * @description A link to the user's profile photo, if available.
                   * @default null
                   */
                  photoLink: string | null;
              } | null;
              /**
               * Content
               * @description The plain text content of the reply.
               * @default null
               */
              content: string | null;
              /**
               * Created Time
               * Format: date-time
               * @description The time the reply was created (RFC 3339 date-time).
               * @default null
               */
              createdTime: string | null;
              /**
               * Deleted
               * @description Whether the reply has been deleted. A deleted reply has no content.
               * @default null
               */
              deleted: boolean | null;
              /**
               * Html Content
               * @description The content of the reply with HTML formatting.
               * @default null
               */
              htmlContent: string | null;
              /**
               * Id
               * @description The ID of the reply.
               * @default null
               */
              id: string | null;
              /**
               * Kind
               * @description Identifies this resource as a Drive reply.
               * @default null
               */
              kind: string | null;
              /**
               * Modified Time
               * Format: date-time
               * @description The last time the reply was modified (RFC 3339 date-time).
               * @default null
               */
              modifiedTime: string | null;
          }[] | null;
          /**
           * Resolved
           * @description Whether the comment has been resolved by one of its replies.
           * @default null
           */
          resolved: boolean | null;
      }[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#commentList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of comments. This will be absent if the end of the comments list has been reached.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_CONFERENCE_RECORDS tool input.
 */
type GOOGLESUPER_LIST_CONFERENCE_RECORDS_INPUT = {
  /**
   * Filter
   * @description Optional. User specified filtering condition in EBNF format. Filterable fields: `space.meeting_code`, `space.name`, `start_time`, `end_time`. Examples: `space.name = "spaces/NAME"`, `space.meeting_code = "abc-mnop-xyz"`, `start_time>="2024-01-01T00:00:00.000Z" AND start_time<="2024-01-02T00:00:00.000Z"`, `end_time IS NULL`
   * @default null
   */
  filter: string | null;
  /**
   * Page Size
   * @description Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Page token returned from previous List Call.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_CONFERENCE_RECORDS tool output.
 */
type GOOGLESUPER_LIST_CONFERENCE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference Records
       * @description List of conferences in one page.
       * @default null
       */
      conference_records: {
          /**
           * End Time
           * @description Timestamp when the conference ended.
           * @default null
           */
          end_time: string | null;
          /**
           * Expire Time
           * @description Timestamp when the conference record is deleted. See [Google Meet retention policy](https://support.google.com/meet/answer/10697001) for more details.
           * @default null
           */
          expire_time: string | null;
          /**
           * Name
           * @description Resource name of the conference record. Format: `conferenceRecords/{conference_record}` where `{conference_record}` is a unique ID.
           * @default null
           */
          name: string | null;
          /**
           * Start Time
           * @description Timestamp when the conference started.
           * @default null
           */
          start_time: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to be circulated back for further List call if current List does NOT include all the Conferences. Unset if all conferences have been returned.
       * @default null
       */
      next_page_token: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_DRAFTS tool input.
 */
type GOOGLESUPER_LIST_DRAFTS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of drafts to return per page.
   * @default 1
   */
  max_results: number;
  /**
   * Page Token
   * @description Token from a previous response to retrieve a specific page of drafts.
   * @default
   */
  page_token: string;
  /**
   * User Id
   * @description User's mailbox ID; use 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
  /**
   * Verbose
   * @description If true, fetches full draft details including subject, sender, recipient, body, and timestamp. If false, returns only draft IDs (faster).
   * @default false
   */
  verbose: boolean;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_DRAFTS tool output.
 */
type GOOGLESUPER_LIST_DRAFTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drafts
       * @description List of draft resources. When verbose=false: contains only 'id' and 'message' with minimal data. When verbose=true: contains full draft details including subject, sender, body, etc.
       */
      drafts: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token for fetching the next page of drafts, if more are available.
       * @default null
       */
      next_page_token: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_FILES tool input.
 */
type GOOGLESUPER_LIST_FILES_INPUT = {
  /**
   * Corpora
   * @description Specifies the bodies of items (files/documents) to which the query applies. Supported values are 'user', 'domain', 'drive', and 'allDrives'. It's generally more efficient to use 'user' or 'drive' instead of 'allDrives'. Defaults to 'user'.
   * @default null
   */
  corpora: string | null;
  /**
   * Drive Id
   * @description The ID of the shared drive to search. This is used when `corpora` is set to 'drive'.
   * @default null
   */
  driveId: string | null;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. This can be used to retrieve only specific file metadata, improving performance. Example: 'nextPageToken, files(id, name, mimeType, modifiedTime)'
   * @default null
   */
  fields: string | null;
  /**
   * Folder Id
   * @description ID of a specific folder to list files from. This is a convenience parameter that automatically adds "'folder_id' in parents" to the query. Cannot be used together with a custom 'q' parameter.
   * @default null
   */
  folderId: string | null;
  /**
   * Include Items From All Drives
   * @description Whether to include items from both My Drive and shared drives. This is relevant when `corpora` is 'user' or 'domain'. Defaults to false.
   * @default null
   */
  includeItemsFromAllDrives: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of label IDs to include in the `labelInfo` part of the response for each file.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Currently, only 'published' is supported, which includes permissions for files with published content.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Order By
   * @description A comma-separated list of sort keys. Valid keys include 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', 'viewedByMeTime'. Each key sorts in ascending order by default, but can be reversed with the 'desc' modifier (e.g., 'modifiedTime desc').
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Size
   * @description The maximum number of files to return per page. The value must be between 1 and 1000, inclusive. Defaults to 100.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Q
   * @description A query string for filtering the file results. Supports operators like 'and', 'or', 'not', and can filter on fields like 'name', 'mimeType', 'modifiedTime', 'starred', 'trashed'. Example: "name contains 'important' and mimeType = 'application/vnd.google-apps.folder'".
   * @default null
   */
  q: string | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. 'drive' represents files in My Drive and shared drives, while 'appDataFolder' represents the application's private data folder.
   * @default null
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Defaults to false. If true, then `includeItemsFromAllDrives` can be used to extend the search to all drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_FILES tool output.
 */
type GOOGLESUPER_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description A list of file resources. Each file resource contains details like 'id', 'name', 'mimeType', 'createdTime', 'modifiedTime', etc.
       */
      files: {
          [key: string]: unknown;
      }[];
      /**
       * Incomplete Search
       * @description Whether the search process was incomplete. True if the entire result set could not be retrieved before the timeout.
       * @default null
       */
      incompleteSearch: boolean | null;
      /**
       * Kind
       * @description Identifies the resource as a file list, typically 'drive#fileList'.
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of results. This will be absent if the end of the results is reached.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_FILE_LABELS tool input.
 */
type GOOGLESUPER_LIST_FILE_LABELS_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Max Results
   * @description The maximum number of labels to return per page. Default is 100.
   * @default null
   */
  max_results: number | null;
  /**
   * Page Token
   * @description Token to retrieve a specific page of results.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_FILE_LABELS tool output.
 */
type GOOGLESUPER_LIST_FILE_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#labelList".
       */
      kind: string;
      /**
       * Labels
       * @description The list of labels.
       */
      labels?: {
          /**
           * Fields
           * @description A map of field IDs to field values.
           * @default null
           */
          fields: {
              [key: string]: {
                  /**
                   * Datestring
                   * @description The date values of the field.
                   * @default null
                   */
                  dateString: string[] | null;
                  /**
                   * Id
                   * @description The ID of the field.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Integer
                   * @description The integer values of the field.
                   * @default null
                   */
                  integer: string[] | null;
                  /**
                   * Kind
                   * @description This is always drive#labelField.
                   * @default null
                   */
                  kind: string | null;
                  /**
                   * Selection
                   * @description The selection values of the field.
                   * @default null
                   */
                  selection: string[] | null;
                  /**
                   * Text
                   * @description The text values of the field.
                   * @default null
                   */
                  text: string[] | null;
                  /**
                   * User
                   * @description The user values of the field.
                   * @default null
                   */
                  user: string[] | null;
                  /**
                   * Value Type
                   * @description The type of the value.
                   * @default null
                   */
                  value_type: string | null;
              };
          } | null;
          /**
           * Id
           * @description The ID of the label.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description This is always drive#label
           * @default null
           */
          kind: string | null;
          /**
           * Revision Id
           * @description The revision ID of the label.
           * @default null
           */
          revisionId: string | null;
      }[];
      /**
       * Next Page Token
       * @description The page token for the next page of labels. This field will be absent if the end of the list has been reached.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_LABELS tool input.
 */
type GOOGLESUPER_LIST_LABELS_INPUT = {
  /**
   * User Id
   * @description Identifies the Gmail account (owner's email or 'me' for authenticated user) for which labels will be listed.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_LABELS tool output.
 */
type GOOGLESUPER_LIST_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Labels
       * @description Retrieved label resources, each providing `id`, `name`, `type` ('system'/'user'), `messageListVisibility` (message list visibility), and `labelListVisibility` (label list visibility).
       */
      labels: unknown[];
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_MEDIA_ITEMS tool input.
 */
type GOOGLESUPER_LIST_MEDIA_ITEMS_INPUT = {
  /**
   * Page Size
   * @description Maximum number of items to return. Default 25, maximum 100.
   * @default 25
   */
  pageSize: number;
  /**
   * Page Token
   * @description Token for getting the next page of results
   */
  pageToken?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_MEDIA_ITEMS tool output.
 */
type GOOGLESUPER_LIST_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Items
       * @description List of media items from the user's library. Each item is a dictionary containing media item details.
       * @default []
       */
      mediaItems: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to get the next set of media items
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_PARTICIPANT_SESSIONS tool input.
 */
type GOOGLESUPER_LIST_PARTICIPANT_SESSIONS_INPUT = {
  /**
   * Filter
   * @description Optional. User-specified filtering condition in EBNF format. Filterable fields include `earliest_start_time` and `latest_end_time`.
   * @default null
   */
  filter: string | null;
  /**
   * Page Size
   * @description Optional. Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Optional. Page token returned from a previous list call, used to retrieve the next page of results.
   * @default null
   */
  page_token: string | null;
  /**
   * Parent
   * @description Required. The identifier of the conference record, in the format `conferenceRecords/{conferenceRecord}`.
   */
  parent?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_PARTICIPANT_SESSIONS tool output.
 */
type GOOGLESUPER_LIST_PARTICIPANT_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to be circulated back for further List call if current List doesn't include all the participants. Unset if all participants are returned.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Participants
       * @description List of participants in one page.
       * @default null
       */
      participants: {
          /**
           * Anonymous User
           * @description Output only. The anonymous user that is at the beginning of the session. This is only populated if the user is not signed-in.
           * @default null
           */
          anonymous_user: {
              [key: string]: string;
          } | null;
          /**
           * Earliest Start Time
           * @description Output only. Time when the participant first joined the meeting.
           * @default null
           */
          earliest_start_time: string | null;
          /**
           * Latest End Time
           * @description Output only. Time when the participant left the meeting for the last time. This can be null if the participant is still in the meeting.
           * @default null
           */
          latest_end_time: string | null;
          /**
           * Participant
           * @description Output only. The unique participant ID.
           * @default null
           */
          participant: string | null;
          /**
           * Phone User
           * @description Output only. The user that is dialing in by phone at the beginning of the session. This is only populated if the user is dialing in by phone, and if the user grants the oAuth scope `https://www.googleapis.com/auth/meetings.space.profile.readonly`.
           * @default null
           */
          phone_user: {
              [key: string]: string;
          } | null;
          /**
           * Signed In User
           * @description Output only. The user that is signed-in at the beginning of the session. This is only populated if the user is signed-in, and if the user grants the oAuth scope `https://www.googleapis.com/auth/meetings.space.profile.readonly`.
           * @default null
           */
          signed_in_user: {
              [key: string]: string;
          } | null;
      }[] | null;
      /**
       * Total Size
       * @description Total, exact number of `participants`. By default, this field isn't included in the response. Set the field mask in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters) to receive this field in the response.
       * @default null
       */
      total_size: number | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_PERMISSIONS tool input.
 */
type GOOGLESUPER_LIST_PERMISSIONS_INPUT = {
  /**
   * File Id
   * @description The ID of the file or shared drive.
   */
  fileId?: string;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Page Size
   * @description The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Default: false
   * @default null
   */
  supportsAllDrives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_PERMISSIONS tool output.
 */
type GOOGLESUPER_LIST_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#permissionList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of permissions. This will be absent if the end of the list has been reached.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Permissions
       * @description The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      permissions: {
          /**
           * Deleted
           * @default null
           */
          deleted: boolean | null;
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /**
           * Email Address
           * @default null
           */
          emailAddress: string | null;
          /** Id */
          id: string;
          /**
           * Kind
           * @default null
           */
          kind: string | null;
          /**
           * Permission Details
           * @default null
           */
          permissionDetails: unknown[] | null;
          /**
           * Photo Link
           * @default null
           */
          photoLink: string | null;
          /** Role */
          role: string;
          /**
           * Team Drive Permission Details
           * @default null
           */
          teamDrivePermissionDetails: unknown[] | null;
          /** Type */
          type: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_REPLIES_TO_COMMENT tool input.
 */
type GOOGLESUPER_LIST_REPLIES_TO_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. Use '*' for all fields or e.g. 'replies(id,content),nextPageToken'
   * @default *
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Include Deleted
   * @description Whether to include deleted replies. Deleted replies will not include their original content.
   * @default false
   */
  include_deleted: boolean | null;
  /**
   * Page Size
   * @description The maximum number of replies to return per page.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_REPLIES_TO_COMMENT tool output.
 */
type GOOGLESUPER_LIST_REPLIES_TO_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#replyList".
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description The page token for the next page of replies. This will be absent if the end of the replies list has been reached.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Replies
       * @description The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       * @default null
       */
      replies: {
          /**
           * Action
           * @description The action the reply performed to the parent comment (resolve/reopen).
           * @default null
           */
          action: string | null;
          /**
           * Author
           * @description The author of the reply (user object).
           * @default null
           */
          author: {
              [key: string]: unknown;
          } | null;
          /**
           * Content
           * @description The plain text content of the reply.
           * @default null
           */
          content: string | null;
          /**
           * Created Time
           * @description The time at which the reply was created (RFC 3339 timestamp).
           * @default null
           */
          createdTime: string | null;
          /**
           * Deleted
           * @description Whether the reply has been deleted.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Html Content
           * @description The content of the reply with HTML formatting.
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description The ID of the reply.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#reply".
           * @default null
           */
          kind: string | null;
          /**
           * Modified Time
           * @description The time at which the reply was last modified (RFC 3339 timestamp).
           * @default null
           */
          modifiedTime: string | null;
      }[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_REVISIONS tool input.
 */
type GOOGLESUPER_LIST_REVISIONS_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Page Size
   * @description The maximum number of revisions to return per page.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Defaults to false.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_REVISIONS tool output.
 */
type GOOGLESUPER_LIST_REVISIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revisionList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Revisions
       * @description The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      revisions: {
          /**
           * Export Links
           * @description Links for exporting Google Docs Editors content types to specific formats.
           * @default null
           */
          exportLinks: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description The ID of the revision.
           */
          id: string;
          /**
           * Keep Forever
           * @description Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer revisions are created.
           * @default null
           */
          keepForever: boolean | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
           * @default null
           */
          kind: string | null;
          /**
           * User
           * @description The last user to modify this revision.
           * @default null
           */
          lastModifyingUser: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The ETag of the permission.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Mime Type
           * @description The MIME type of the revision.
           * @default null
           */
          mimeType: string | null;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the revision was modified (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Publish Auto
           * @description Whether this revision is published outside the domain. This is only populated for files with Google Docs Editors content types.
           * @default null
           */
          publishAuto: boolean | null;
          /**
           * Published
           * @description Whether this revision is published. This is only populated for files with Google Docs Editors content types.
           * @default null
           */
          published: boolean | null;
          /**
           * Published Link
           * @description A link to the published revision. This is only populated for files with Google Docs Editors content types.
           * @default null
           */
          publishedLink: string | null;
          /**
           * Size
           * @description The size of the revision content in bytes. This is only populated for files with binary content in Google Drive.
           * @default null
           */
          size: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_SHARED_DRIVES tool input.
 */
type GOOGLESUPER_LIST_SHARED_DRIVES_INPUT = {
  /**
   * Page Size
   * @description Maximum number of shared drives to return per page.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Page token for shared drives.
   * @default null
   */
  pageToken: string | null;
  /**
   * Q
   * @description Query string for searching shared drives.
   * @default null
   */
  q: string | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator. If set to true, then all shared drives of the domain in which the requester is an administrator are returned.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_SHARED_DRIVES tool output.
 */
type GOOGLESUPER_LIST_SHARED_DRIVES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drives
       * @description The list of shared drives.
       */
      drives?: {
          /**
           * Id
           * @description The ID of this shared drive. This is a unique identifier.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
           * @default null
           */
          kind: string | null;
          /**
           * Name
           * @description The name of this shared drive.
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#driveList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of shared drives. This will be absent if the end of the list has been reached.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION tool input.
 */
type GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION_INPUT = {
  /**
   * Fields Mask
   * @description Field mask to specify which parts of the spreadsheet and chart resources to include. Example: '''sheets(properties(sheetId,title),charts(chartId,spec(title,altText)))'''
   * @default sheets(properties(sheetId,title),charts(chartId,spec(title,altText)))
   */
  fields_mask: string;
  /**
   * Spreadsheet Id
   * @description The ID of the Google Sheets spreadsheet.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION tool output.
 */
type GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Charts
       * @description A list of charts found in the spreadsheet.
       */
      charts?: {
          /**
           * Alt Text
           * @description The alternative text for the chart.
           * @default null
           */
          alt_text: string | null;
          /**
           * Chart Id
           * @description The ID of the chart.
           */
          chart_id: number;
          /**
           * Sheet Id
           * @description The ID of the sheet containing the chart.
           */
          sheet_id: number;
          /**
           * Sheet Title
           * @description The title of the sheet containing the chart.
           * @default null
           */
          sheet_title: string | null;
          /**
           * Title
           * @description The title of the chart.
           * @default null
           */
          title: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_TABLES tool input.
 */
type GOOGLESUPER_LIST_TABLES_INPUT = {
  /**
   * Min Columns
   * @description Minimum number of columns to consider a valid table
   * @default 1
   */
  min_columns: number;
  /**
   * Min Confidence
   * @description Minimum confidence score (0.0-1.0) to consider a valid table
   * @default 0.5
   */
  min_confidence: number;
  /**
   * Min Rows
   * @description Minimum number of data rows to consider a valid table
   * @default 2
   */
  min_rows: number;
  /**
   * Spreadsheet Id
   * @description Google Sheets ID from the URL (e.g., '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms')
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_TABLES tool output.
 */
type GOOGLESUPER_LIST_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet Name
       * @description Name of the spreadsheet
       */
      spreadsheet_name: string;
      /**
       * Tables
       * @description List of detected tables
       */
      tables: {
          /**
           * Columns
           * @description Number of columns in the table
           */
          columns: number;
          /**
           * Detected Type
           * @description Type of detected structure
           */
          detected_type: string;
          /**
           * Name
           * @description Generated table name
           */
          name: string;
          /**
           * Range
           * @description A1 notation range of the table (e.g., 'A14:H19')
           */
          range: string;
          /**
           * Rows
           * @description Number of data rows in the table
           */
          rows: number;
          /**
           * Sheet Name
           * @description Sheet/tab name where table is located
           */
          sheet_name: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_TASKS tool input.
 */
type GOOGLESUPER_LIST_TASKS_INPUT = {
  /**
   * Completed Max
   * @description Exclude tasks completed after this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  completedMax?: string;
  /**
   * Completed Min
   * @description Exclude tasks completed before this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   * @default null
   */
  completedMin: string | null;
  /**
   * Due Max
   * @description Exclude tasks due after this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  dueMax?: string;
  /**
   * Due Min
   * @description Exclude tasks due before this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  dueMin?: string;
  /**
   * Max Results
   * @description Maximum number of tasks to return. API default: 20, maximum: 100.
   */
  maxResults?: number;
  /**
   * Page Token
   * @description Token from a previous list operation for fetching a specific page; if omitted, retrieves the first page.
   */
  pageToken?: string;
  /**
   * Show Completed
   * @description Include completed tasks. Defaults to true. (See action docstring for interaction with `completedMin`/`Max`).
   */
  showCompleted?: boolean;
  /**
   * Show Deleted
   * @description Include deleted tasks. Defaults to false.
   */
  showDeleted?: boolean;
  /**
   * Show Hidden
   * @description Include hidden tasks. Defaults to false.
   */
  showHidden?: boolean;
  /**
   * Tasklist Id
   * @description Identifier of the task list. Use '@default' for the user's primary task list.
   */
  tasklist_id?: string;
  /**
   * Updated Min
   * @description Lower bound for task's last modification time (for syncing).
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  updatedMin?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_TASKS tool output.
 */
type GOOGLESUPER_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Pagination token to retrieve the next page of results; omitted if no more tasks.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Tasks
       * @description List of tasks retrieved matching the specified criteria.
       */
      tasks: {
          /**
           * Completed
           * @description Completion date of the task.
           *     Some examples of expected datetime format:
           *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
           *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
           *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
           *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
           *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
           */
          completed?: string;
          /**
           * Deleted
           * @description Flag indicating whether the task has been deleted.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Due
           * @description Due date of the task.
           *     Some examples of expected datetime format:
           *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
           *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
           *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
           *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
           *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
           */
          due?: string;
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag?: string;
          /**
           * Hidden
           * @description Flag indicating whether the task is hidden.
           * @default null
           */
          hidden: boolean | null;
          /**
           * Id
           * @description Task identifier.
           */
          id?: string;
          /**
           * Kind
           * @description Type of the resource. This is always 'tasks#task'.
           * @default tasks#task
           */
          kind: string;
          /**
           * Links
           * @description Collection of links.
           */
          links?: {
              /**
               * Description
               * @description The description of the link.
               */
              description: string;
              /**
               * Link
               * @description The URL of the link.
               */
              link: string;
              /**
               * Type
               * @description Type of the link, e.g. 'email'.
               */
              type: string;
          }[];
          /**
           * Notes
           * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
           */
          notes?: string;
          /**
           * Parent
           * @description Parent task identifier. This field is omitted if it is a top-level task.
           */
          parent?: string;
          /**
           * Position
           * @description String indicating the position of the task among its sibling tasks.
           */
          position?: string;
          /**
           * Self Link
           * @description URL pointing to this task. Used to retrieve, update, or delete this task.
           */
          selfLink?: string;
          /**
           * Status
           * @description Status of the task. This is either 'needsAction' or 'completed'.
           * @enum {string}
           */
          status: "needsAction" | "completed";
          /**
           * Title
           * @description Title of the task. Maximum length allowed: 1024 characters.
           */
          title: string;
          /**
           * Updated
           * @description Last modification time of the task (as a RFC 3339 timestamp).
           */
          updated?: string;
          /**
           * Web View Link
           * @description An absolute link to the task in the Google Tasks Web UI.
           */
          webViewLink?: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_TASK_LISTS tool input.
 */
type GOOGLESUPER_LIST_TASK_LISTS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of task lists to return per page.
   * @default 20
   */
  maxResults: number;
  /**
   * Page Token
   * @description Token for the page of results to return; omit for the first page, use `nextPageToken` from a previous response for subsequent pages.
   */
  pageToken?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_TASK_LISTS tool output.
 */
type GOOGLESUPER_LIST_TASK_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw API response containing a list of task list resources under the 'items' key, and potentially a 'nextPageToken' for more results.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_THREADS tool input.
 */
type GOOGLESUPER_LIST_THREADS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of threads to return.
   * @default 10
   */
  max_results: number;
  /**
   * Page Token
   * @description Token from a previous response to retrieve a specific page of results; omit for the first page.
   * @default
   */
  page_token: string;
  /**
   * Query
   * @description Filter for threads, using Gmail search query syntax (e.g., 'from:user@example.com is:unread').
   * @default
   */
  query: string;
  /**
   * User Id
   * @description The user's email address or 'me' to specify the authenticated Gmail account.
   * @default me
   */
  user_id: string;
  /**
   * Verbose
   * @description If false, returns threads with basic fields (id, snippet, historyId). If true, returns threads with complete message details including headers, body, attachments, and metadata for each message in the thread.
   * @default false
   */
  verbose: boolean;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LIST_THREADS tool output.
 */
type GOOGLESUPER_LIST_THREADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results; if present, use as `page_token` in a subsequent request to fetch more threads.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Threads
       * @description List of email thread resources, each usually containing 'id', 'snippet', and 'historyId'.
       */
      threads: unknown[];
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
 * Type of GOOGLESUPER's GOOGLESUPER_LOOKUP_SPREADSHEET_ROW tool input.
 */
type GOOGLESUPER_LOOKUP_SPREADSHEET_ROW_INPUT = {
  /**
   * Case Sensitive
   * @description If `True`, the query string search is case-sensitive.
   * @default false
   */
  case_sensitive: boolean;
  /**
   * Query
   * @description Exact text value to find; matches the entire content of a cell in a row.
   */
  query?: string;
  /**
   * Range
   * @description A1 notation of the range to search (e.g., 'Sheet1!A1:D5', 'MySheet!A:Z', or 'Sheet1'). Defaults to the non-empty part of the first sheet. For multiple sheets, include sheet name (e.g., 'SheetName!A1:Z100').
   * @default null
   */
  range: string | null;
  /**
   * Spreadsheet Id
   * @description Identifier of the Google Spreadsheet to search.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_LOOKUP_SPREADSHEET_ROW tool output.
 */
type GOOGLESUPER_LOOKUP_SPREADSHEET_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Row Data
       * @description Lookup outcome: a dictionary with 'found' (boolean for match identification) and 'row_data' (list of cell values from the first matched row, or empty if no match).
       */
      row_data?: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_MAPS_EMBED_API tool input.
 */
type GOOGLESUPER_MAPS_EMBED_API_INPUT = {
  /**
   * DirectionsModeParams
   * @description Parameters for 'directions' mode.
   * @default null
   */
  directions_params: {
      /**
       * Avoid
       * @description Specifies features to avoid in directions (e.g., 'tolls', 'highways', 'ferries'). Separate multiple values with the pipe character (|). E.g. 'tolls|highways'.
       * @default null
       */
      avoid: string | null;
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Destination
       * @description Defines the endpoint of the directions. Accepts URL-escaped place name, address, plus code, lat/lng coordinates, or Place ID (prefixed with 'place_id:').
       */
      destination: string;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Mode
       * @description Defines the method of travel.
       * @default null
       * @enum {string|null}
       */
      mode: "driving" | "walking" | "bicycling" | "transit" | "flying" | null;
      /**
       * Origin
       * @description Defines the starting point for directions. Accepts URL-escaped place name, address, plus code, lat/lng coordinates, or Place ID (prefixed with 'place_id:').
       */
      origin: string;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Units
       * @description Specifies measurement units for distances.
       * @default null
       * @enum {string|null}
       */
      units: "metric" | "imperial" | null;
      /**
       * Waypoints
       * @description Specifies one or more intermediary places to route directions. Separate multiple waypoints with the pipe character (|). E.g., 'Berlin,Germany|Paris,France'. Up to 20 waypoints.
       * @default null
       */
      waypoints: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * Mode
   * @description The mode of the embedded map.
   * @enum {string}
   */
  mode?: "place" | "view" | "directions" | "streetview" | "search";
  /**
   * PlaceModeParams
   * @description Parameters for 'place' mode.
   * @default null
   */
  place_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Q
       * @description Defines the map marker location. Accepts a URL-escaped place name, address, plus code, or Place ID (prefixed with 'place_id:').
       */
      q: string;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * SearchModeParams
   * @description Parameters for 'search' mode.
   * @default null
   */
  search_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Q
       * @description Defines the search term. Can include a geographic restriction (e.g., 'record+stores+in+Seattle').
       */
      q: string;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * StreetViewModeParams
   * @description Parameters for 'streetview' mode.
   * @default null
   */
  streetview_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Fov
       * @description Horizontal field of view in degrees (10-100). Smaller numbers mean higher zoom.
       * @default null
       */
      fov: number | null;
      /**
       * Heading
       * @description Compass heading of the camera in degrees clockwise from North (-180 to 360).
       * @default null
       */
      heading: number | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Location
       * @description Latitude and longitude as comma-separated values (e.g., '46.414382,10.013988'). Displays panorama closest to this location. Required if 'pano' is not provided.
       * @default null
       */
      location: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Pano
       * @description A specific panorama ID. Required if 'location' is not provided. 'location' can be a fallback.
       * @default null
       */
      pano: string | null;
      /**
       * Pitch
       * @description Angle, up or down, of the camera in degrees (-90 to 90). Positive is up.
       * @default null
       */
      pitch: number | null;
      /**
       * Radius
       * @description Radius in meters to search for a panorama, centered on lat/lng. Default 50.
       * @default null
       */
      radius: number | null;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Source
       * @description Limits Street View searches to selected sources. 'default' or 'outdoor'.
       * @default null
       * @enum {string|null}
       */
      source: "default" | "outdoor" | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * ViewModeParams
   * @description Parameters for 'view' mode.
   * @default null
   */
  view_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840'). This is REQUIRED for view mode.
       * @default null
       */
      center: string | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_MAPS_EMBED_API tool output.
 */
type GOOGLESUPER_MAPS_EMBED_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html Embed Code
       * @description A complete HTML iframe tag to embed the map.
       */
      html_embed_code: string;
      /**
       * Iframe Url
       * Format: uri
       * @description The URL to be used as the src attribute of an iframe to embed the map.
       */
      iframe_url: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_MODIFY_THREAD_LABELS tool input.
 */
type GOOGLESUPER_MODIFY_THREAD_LABELS_INPUT = {
  /**
   * Add Label Ids
   * @description List of label IDs to add to the thread; these labels must exist.
   * @default null
   */
  add_label_ids: string[] | null;
  /**
   * Remove Label Ids
   * @description List of label IDs to remove from the thread; these labels must exist.
   * @default null
   */
  remove_label_ids: string[] | null;
  /**
   * Thread Id
   * @description Immutable ID of the thread to modify.
   */
  thread_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_MODIFY_THREAD_LABELS tool output.
 */
type GOOGLESUPER_MODIFY_THREAD_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Dict
       * @description Full Thread resource from the Gmail API as a dictionary, representing the thread's state after modification.
       */
      response_dict: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the labels were successfully modified on the thread.
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
 * Type of GOOGLESUPER's GOOGLESUPER_MOVE_FILE tool input.
 */
type GOOGLESUPER_MOVE_FILE_INPUT = {
  /**
   * Add Parents
   * @description A comma-separated list of parent folder IDs to add the file to. Use this to specify the destination folder.
   * @default null
   */
  add_parents: string | null;
  /**
   * File Id
   * @description The ID of the file to move.
   */
  file_id?: string;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
   * @default null
   */
  include_labels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  include_permissions_for_view: string | null;
  /**
   * Keep Revision Forever
   * @description Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
   * @default null
   */
  keep_revision_forever: boolean | null;
  /**
   * Ocr Language
   * @description A language hint for OCR processing during image import (ISO 639-1 code).
   * @default null
   */
  ocr_language: string | null;
  /**
   * Remove Parents
   * @description A comma-separated list of parent folder IDs to remove the file from. Use this to specify the source folder.
   * @default null
   */
  remove_parents: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Set to true if moving files to or from a shared drive.
   * @default null
   */
  supports_all_drives: boolean | null;
  /**
   * Use Content As Indexable Text
   * @description Whether to use the uploaded content as indexable text.
   * @default null
   */
  use_content_as_indexable_text: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_MOVE_FILE tool output.
 */
type GOOGLESUPER_MOVE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       */
      kind: string;
      /**
       * Mime Type
       * @description The MIME type of the file.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the file.
       */
      name: string;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_MOVE_TASK tool input.
 */
type GOOGLESUPER_MOVE_TASK_INPUT = {
  /**
   * Destination Tasklist
   * @description Destination task list identifier. If set, the task is moved to this list; otherwise, it remains in its current list.
   * @default null
   */
  destinationTasklist: string | null;
  /**
   * Parent
   * @description New parent task identifier. If not provided, the task is moved to the top level.
   * @default null
   */
  parent: string | null;
  /**
   * Previous
   * @description New previous sibling task identifier. If not provided, the task is moved to the first position among its siblings.
   * @default null
   */
  previous: string | null;
  /**
   * Task
   * @description Task identifier.
   */
  task?: string;
  /**
   * Tasklist
   * @description Task list identifier.
   */
  tasklist?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_MOVE_TASK tool output.
 */
type GOOGLESUPER_MOVE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed
       * @description Completion date of the task.
       *     Some examples of expected datetime format:
       *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
       *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
       *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
       *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
       *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
       */
      completed?: string;
      /**
       * Deleted
       * @description Flag indicating whether the task has been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Due
       * @description Due date of the task.
       *     Some examples of expected datetime format:
       *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
       *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
       *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
       *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
       *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
       */
      due?: string;
      /**
       * Etag
       * @description ETag of the resource.
       */
      etag?: string;
      /**
       * Hidden
       * @description Flag indicating whether the task is hidden.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Task identifier.
       */
      id?: string;
      /**
       * Kind
       * @description Type of the resource. This is always 'tasks#task'.
       * @default tasks#task
       */
      kind: string;
      /**
       * Links
       * @description Collection of links.
       */
      links?: {
          /**
           * Description
           * @description The description of the link.
           */
          description: string;
          /**
           * Link
           * @description The URL of the link.
           */
          link: string;
          /**
           * Type
           * @description Type of the link, e.g. 'email'.
           */
          type: string;
      }[];
      /**
       * Notes
       * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
       */
      notes?: string;
      /**
       * Parent
       * @description Parent task identifier. This field is omitted if it is a top-level task.
       */
      parent?: string;
      /**
       * Position
       * @description String indicating the position of the task among its sibling tasks.
       */
      position?: string;
      /**
       * Self Link
       * @description URL pointing to this task. Used to retrieve, update, or delete this task.
       */
      selfLink?: string;
      /**
       * Status
       * @description Status of the task. This is either 'needsAction' or 'completed'.
       * @enum {string}
       */
      status: "needsAction" | "completed";
      /**
       * Title
       * @description Title of the task. Maximum length allowed: 1024 characters.
       */
      title: string;
      /**
       * Updated
       * @description Last modification time of the task (as a RFC 3339 timestamp).
       */
      updated?: string;
      /**
       * Web View Link
       * @description An absolute link to the task in the Google Tasks Web UI.
       */
      webViewLink?: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_MOVE_TO_TRASH tool input.
 */
type GOOGLESUPER_MOVE_TO_TRASH_INPUT = {
  /**
   * Message Id
   * @description Identifier of the email message to move to trash.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_MOVE_TO_TRASH tool output.
 */
type GOOGLESUPER_MOVE_TO_TRASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The Message resource that was moved to trash, including ID, thread ID, and 'TRASH' in label IDs.
       */
      email: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_NEARBY_SEARCH tool input.
 */
type GOOGLESUPER_NEARBY_SEARCH_INPUT = {
  /**
   * Excluded Types
   * @description Place types to exclude (e.g., 'cafe', 'store'); results matching any of these types are omitted. For supported types, see Google Maps Places API documentation.
   * @default null
   */
  excludedTypes: string[] | null;
  /**
   * Field Mask
   * @description Comma-separated list of place fields for the response (e.g., 'places.displayName,places.formattedAddress'); use '*' for all fields.
   * @default places.displayName
   */
  fieldMask: string;
  /**
   * Included Types
   * @description Place types to include (e.g., 'restaurant', 'park'); results will match at least one of these types. For supported types, see Google Maps Places API documentation.
   * @default null
   */
  includedTypes: string[] | null;
  /**
   * Latitude
   * @description Latitude coordinate of the search center in decimal degrees.
   */
  latitude?: number;
  /**
   * Longitude
   * @description Longitude coordinate of the search center in decimal degrees.
   */
  longitude?: number;
  /**
   * Max Result Count
   * @description Maximum number of search results to return (up to 20); the actual count may be lower.
   * @default 10
   */
  maxResultCount: number;
  /**
   * Radius
   * @description Radius of the circular search area in meters.
   */
  radius?: number;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_NEARBY_SEARCH tool output.
 */
type GOOGLESUPER_NEARBY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Places
       * @description List of found places matching search criteria; each place is a dictionary of requested fields.
       * @default null
       */
      places: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_PARSE_FILE tool input.
 */
type GOOGLESUPER_PARSE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique ID of the file stored in Google Drive that you want to export or download.
   */
  file_id?: string;
  /**
   * MimeType
   * @description Target MIME type for exporting Google Workspace documents (e.g., Docs, Sheets) to a different format (e.g., PDF, DOCX). Omit for direct download of non-Workspace files or if no conversion is needed for Workspace files.
   * @default null
   * @enum {string|null}
   */
  mime_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.oasis.opendocument.text" | "application/rtf" | "application/pdf" | "text/plain" | "application/zip" | "application/epub+zip" | "text/markdown" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/x-vnd.oasis.opendocument.spreadsheet" | "text/csv" | "text/tab-separated-values" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.oasis.opendocument.presentation" | "image/jpeg" | "image/png" | "image/svg+xml" | "application/vnd.google-apps.script+json" | "application/vnd.google-apps.vid" | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_PARSE_FILE tool output.
 */
type GOOGLESUPER_PARSE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The content of the exported or downloaded file, returned as a downloadable object.
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
      };
      /**
       * Warning
       * @default Warning. This action has been deprecated. Please use GOOGLEDRIVE_DOWNLOAD_FILE instead.
       */
      warning: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_CALENDAR tool input.
 */
type GOOGLESUPER_PATCH_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to update; use 'primary' for the main calendar or a specific ID.
   */
  calendar_id?: string;
  /**
   * Description
   * @description New description for the calendar.
   * @default null
   */
  description: string | null;
  /**
   * Location
   * @description New geographic location of the calendar (e.g., 'Paris, France').
   * @default null
   */
  location: string | null;
  /**
   * Summary
   * @description New title for the calendar; cannot be an empty string.
   */
  summary?: string;
  /**
   * Timezone
   * @description New IANA Time Zone Database name for the calendar (e.g., 'Europe/Zurich', 'America/New_York').
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_CALENDAR tool output.
 */
type GOOGLESUPER_PATCH_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the full calendar resource that was updated, conforming to the Google Calendar API's calendar resource structure.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_EVENT tool input.
 */
type GOOGLESUPER_PATCH_EVENT_INPUT = {
  /**
   * Attendees
   * @description List of email addresses for attendees. Replaces existing attendees. Provide an empty list to remove all.
   * @default null
   */
  attendees: string[] | null;
  /**
   * Calendar Id
   * @description Identifier of the calendar. Use 'primary' for the primary calendar of the logged-in user. To find other calendar IDs, use the `calendarList.list` method.
   */
  calendar_id?: string;
  /**
   * Conference Data Version
   * @description API client's conference data support version. Set to 1 to manage conference details (e.g., Google Meet links); 0 (default) ignores conference data.
   * @default null
   */
  conference_data_version: number | null;
  /**
   * Description
   * @description New description for the event; can include HTML.
   * @default null
   */
  description: string | null;
  /**
   * End Time
   * @description New end time (RFC3339 timestamp, e.g., '2024-07-01T11:00:00-07:00'). Uses `timezone` if provided, otherwise UTC. For all-day events, use YYYY-MM-DD format (exclusive end date).
   * @default null
   */
  end_time: string | null;
  /**
   * Event Id
   * @description Identifier of the event to update.
   */
  event_id?: string;
  /**
   * Location
   * @description New geographic location (physical address or virtual meeting link).
   * @default null
   */
  location: string | null;
  /**
   * Max Attendees
   * @description Maximum attendees in response; does not affect invited count. If more, response includes organizer only. Must be positive.
   * @default null
   */
  max_attendees: number | null;
  /**
   * Rsvp Response
   * @description RSVP response status for the authenticated user. Updates only the current user's response status without affecting other attendees. Possible values: 'needsAction', 'declined', 'tentative', 'accepted'.
   * @default null
   */
  rsvp_response: string | null;
  /**
   * Send Updates
   * @description Whether to send update notifications to attendees: 'all', 'externalOnly', or 'none'. Uses default user behavior if unspecified.
   * @default null
   */
  send_updates: string | null;
  /**
   * Start Time
   * @description New start time (RFC3339 timestamp, e.g., '2024-07-01T10:00:00-07:00'). Uses `timezone` if provided, otherwise UTC. For all-day events, use YYYY-MM-DD format.
   * @default null
   */
  start_time: string | null;
  /**
   * Summary
   * @description New title for the event.
   * @default null
   */
  summary: string | null;
  /**
   * Supports Attachments
   * @description Client application supports event attachments. Set to `True` if so.
   * @default null
   */
  supports_attachments: boolean | null;
  /**
   * Timezone
   * @description IANA Time Zone Database name for start/end times (e.g., 'America/Los_Angeles'). Used if `start_time` and `end_time` are provided and not all-day dates; defaults to UTC if unset.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_EVENT tool output.
 */
type GOOGLESUPER_PATCH_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attendees
       * @description List of attendees, with details like 'email', 'displayName', 'responseStatus'.
       * @default null
       */
      attendees: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Created
       * @description Event creation time (RFC3339 timestamp, e.g., '2024-07-01T09:00:00.000Z').
       */
      created: string;
      /**
       * Creator
       * @description User who created the event, including 'email' and 'displayName'.
       */
      creator: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the event; may contain HTML.
       * @default null
       */
      description: string | null;
      /**
       * End
       * @description Event end time: 'dateTime' (RFC3339 timestamp) or 'date' (YYYY-MM-DD for all-day, exclusive), and 'timeZone'.
       */
      end: {
          [key: string]: unknown;
      };
      /**
       * Html Link
       * @description URL to access the event in Google Calendar web interface.
       */
      htmlLink: string;
      /**
       * Id
       * @description Unique identifier of the event.
       */
      id: string;
      /**
       * Location
       * @description Geographic location of the event.
       * @default null
       */
      location: string | null;
      /**
       * Organizer
       * @description Event organizer, including 'email', 'displayName', and 'self' (boolean: is authenticated user the organizer).
       */
      organizer: {
          [key: string]: unknown;
      };
      /**
       * Start
       * @description Event start time: 'dateTime' (RFC3339 timestamp) or 'date' (YYYY-MM-DD for all-day), and 'timeZone'.
       */
      start: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Event status: 'confirmed', 'tentative', or 'cancelled'.
       */
      status: string;
      /**
       * Summary
       * @description Title of the event.
       * @default null
       */
      summary: string | null;
      /**
       * Updated
       * @description Event last modification time (RFC3339 timestamp, e.g., '2024-07-01T09:30:00.000Z').
       */
      updated: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_LABEL tool input.
 */
type GOOGLESUPER_PATCH_LABEL_INPUT = {
  /**
   * PatchLabelColor
   * @description The color to assign to the label. Color is only available for labels that have their `type` set to `user`.
   * @default null
   */
  color: {
      /**
       * Background Color
       * @description The background color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
       * @default null
       */
      backgroundColor: string | null;
      /**
       * Text Color
       * @description The text color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
       * @default null
       */
      textColor: string | null;
  } | null;
  /**
   * Id
   * @description The ID of the label to update.
   */
  id?: string;
  /**
   * Label List Visibility
   * @description The visibility of the label in the label list in the Gmail web interface.
   * @default null
   */
  labelListVisibility: string | null;
  /**
   * Message List Visibility
   * @description The visibility of messages with this label in the message list in the Gmail web interface.
   * @default null
   */
  messageListVisibility: string | null;
  /**
   * Name
   * @description The display name of the label.
   * @default null
   */
  name: string | null;
  /**
   * User Id
   * @description The user's email address. The special value `me` can be used to indicate the authenticated user.
   */
  userId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_LABEL tool output.
 */
type GOOGLESUPER_PATCH_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * PatchLabelColor
       * @description The color assigned to the label.
       * @default null
       */
      color: {
          /**
           * Background Color
           * @description The background color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
           * @default null
           */
          backgroundColor: string | null;
          /**
           * Text Color
           * @description The text color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
           * @default null
           */
          textColor: string | null;
      } | null;
      /**
       * Id
       * @description The immutable ID of the label.
       */
      id: string;
      /**
       * Label List Visibility
       * @description The visibility of the label in the label list in the Gmail web interface.
       * @default null
       */
      labelListVisibility: string | null;
      /**
       * Message List Visibility
       * @description The visibility of messages with this label in the message list in the Gmail web interface.
       * @default null
       */
      messageListVisibility: string | null;
      /**
       * Messages Total
       * @description The total number of messages with this label.
       * @default null
       */
      messagesTotal: number | null;
      /**
       * Messages Unread
       * @description The number of unread messages with this label.
       * @default null
       */
      messagesUnread: number | null;
      /**
       * Name
       * @description The display name of the label.
       * @default null
       */
      name: string | null;
      /**
       * Threads Total
       * @description The total number of threads with this label.
       * @default null
       */
      threadsTotal: number | null;
      /**
       * Threads Unread
       * @description The number of unread threads with this label.
       * @default null
       */
      threadsUnread: number | null;
      /**
       * Type
       * @description The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread.
       * @default null
       */
      type: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_TASK tool input.
 */
type GOOGLESUPER_PATCH_TASK_INPUT = {
  /**
   * Completed
   * @description Completion date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  completed?: string;
  /**
   * Deleted
   * @description Flag indicating whether the task has been deleted.
   * @default null
   */
  deleted: boolean | null;
  /**
   * Due
   * @description Due date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  due?: string;
  /**
   * Etag
   * @description ETag of the resource.
   */
  etag?: string;
  /**
   * Hidden
   * @description Flag indicating whether the task is hidden.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Id
   * @description Task identifier.
   */
  id?: string;
  /**
   * Notes
   * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
   */
  notes?: string;
  /**
   * Status
   * @description Status of the task. This is either 'needsAction' or 'completed'.
   * @enum {string}
   */
  status?: "needsAction" | "completed";
  /**
   * Task Id
   * @description Identifier of the Google Task to be updated within the specified task list.
   */
  task_id?: string;
  /**
   * Tasklist Id
   * @description Identifier of the Google Task list that contains the task to be updated.
   */
  tasklist_id?: string;
  /**
   * Title
   * @description Title of the task. Maximum length allowed: 1024 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_TASK tool output.
 */
type GOOGLESUPER_PATCH_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The complete Task resource after the update, reflecting all changes and current state.
       */
      task: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_TASK_LIST tool input.
 */
type GOOGLESUPER_PATCH_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description The unique identifier of the task list to be updated.
   */
  tasklist_id?: string;
  /**
   * Updated Title
   * @description The new title for the task list.
   */
  updated_title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_PATCH_TASK_LIST tool output.
 */
type GOOGLESUPER_PATCH_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the updated TaskList resource from the Google Tasks API, including its 'id', 'title', 'updated' timestamp, and 'selfLink'.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_QUERY_TABLE tool input.
 */
type GOOGLESUPER_QUERY_TABLE_INPUT = {
  /**
   * Include Formulas
   * @description Whether to return formula text instead of calculated values for formula columns
   * @default false
   */
  include_formulas: boolean;
  /**
   * Spreadsheet Id
   * @description Google Sheets ID
   */
  spreadsheet_id?: string;
  /**
   * Sql
   * @description SQL SELECT query. Supported: SELECT cols FROM table WHERE conditions ORDER BY col LIMIT n. Table names must be quoted if they contain spaces.
   */
  sql?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_QUERY_TABLE tool output.
 */
type GOOGLESUPER_QUERY_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rows
       * @description Query result rows as list of dictionaries
       */
      rows: {
          [key: string]: unknown;
      }[];
      /**
       * Table Schema
       * @description Schema of returned columns with names and types
       */
      table_schema: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_QUICK_ADD tool input.
 */
type GOOGLESUPER_QUICK_ADD_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the calendar for the event. Use 'primary' for the main calendar, or provide a specific calendar ID (e.g., email address).
   * @default primary
   */
  calendar_id: string;
  /**
   * Send Updates
   * @description Controls whether email notifications about the event creation are sent to attendees.
   * @default none
   * @enum {string}
   */
  send_updates: "all" | "externalOnly" | "none";
  /**
   * Text
   * @description Natural language input describing the event; Google Calendar parses this for event details like title, date, and time.
   * @default
   */
  text: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_QUICK_ADD tool output.
 */
type GOOGLESUPER_QUICK_ADD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event
       * @description The Google Calendar event resource created by the API, including details such as 'id', 'summary' (title), 'start' and 'end' times/dates.
       */
      event: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_REMOVE_ATTENDEE tool input.
 */
type GOOGLESUPER_REMOVE_ATTENDEE_INPUT = {
  /**
   * Attendee Email
   * @description Email address of the attendee to remove; if the email does not match an existing attendee, the event remains unchanged.
   */
  attendee_email?: string;
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to which the event belongs; 'primary' signifies the user's main calendar.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Id
   * @description Unique identifier of the event.
   */
  event_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_REMOVE_ATTENDEE tool output.
 */
type GOOGLESUPER_REMOVE_ATTENDEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event
       * @description The event resource, updated after the attendee removal operation.
       */
      event: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_REMOVE_LABEL tool input.
 */
type GOOGLESUPER_REMOVE_LABEL_INPUT = {
  /**
   * Label Id
   * @description ID of the user-created label to be permanently deleted; must exist and not be a system label.
   */
  label_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_REMOVE_LABEL tool output.
 */
type GOOGLESUPER_REMOVE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the label deletion was successful (e.g., API returned 204 status).
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
 * Type of GOOGLESUPER's GOOGLESUPER_REPLACE_ALL_TEXT tool input.
 */
type GOOGLESUPER_REPLACE_ALL_TEXT_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Find Text
   * @description The text to search for in the document.
   */
  find_text?: string;
  /**
   * Match Case
   * @description Indicates whether the search should be case sensitive.
   */
  match_case?: boolean;
  /**
   * Replace Text
   * @description The text that will replace the matched text.
   */
  replace_text?: string;
  /**
   * Search By Regex
   * @description Optional. If True, the find_text is treated as a regular expression. Defaults to False.
   * @default false
   */
  search_by_regex: boolean | null;
  /**
   * Tab Ids
   * @description Optional. A list of specific tab IDs to perform the replacement on. If not provided, replacement occurs on all tabs.
   * @default null
   */
  tab_ids: string[] | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_REPLACE_ALL_TEXT tool output.
 */
type GOOGLESUPER_REPLACE_ALL_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       * @default null
       */
      document_id: string | null;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. Each reply corresponds to one request in the batch.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_REPLACE_IMAGE tool input.
 */
type GOOGLESUPER_REPLACE_IMAGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document containing the image to replace.
   */
  document_id?: string;
  /**
   * Replace Image
   * @description The details of the image replacement request.
   */
  replace_image?: {
      /**
       * Image Object Id
       * @description The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.
       */
      image_object_id: string;
      /**
       * ImageReplaceMethod
       * @description The replacement method. Defaults to CENTER_CROP if not specified.
       * @default CENTER_CROP
       * @enum {string|null}
       */
      image_replace_method: "CENTER_CROP" | "IMAGE_REPLACE_METHOD_UNSPECIFIED" | null;
      /**
       * Tab Id
       * @description The tab that the image to be replaced is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tab_id: string | null;
      /**
       * Uri
       * @description The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field.
       */
      uri: string;
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_REPLACE_IMAGE tool output.
 */
type GOOGLESUPER_REPLACE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document in which the image was replaced.
       */
      document_id: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. For a successful image replacement, this will typically be an empty list or contain a response related to the replaceImage request itself.
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_REPLY_TO_THREAD tool input.
 */
type GOOGLESUPER_REPLY_TO_THREAD_INPUT = {
  /**
   * FileUploadable
   * @description File to attach to the reply. Just Provide file path here
   * @default null
   */
  attachment: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Bcc
   * @description BCC recipients' email addresses (hidden from other recipients).
   * @default []
   */
  bcc: string[];
  /**
   * Cc
   * @description CC recipients' email addresses.
   * @default []
   */
  cc: string[];
  /**
   * Extra Recipients
   * @description Additional 'To' recipients' email addresses.
   * @default []
   */
  extra_recipients: string[];
  /**
   * Is Html
   * @description Indicates if `message_body` is HTML; if True, body must be valid HTML, if False, body should not contain HTML tags.
   * @default false
   */
  is_html: boolean;
  /**
   * Message Body
   * @description Content of the reply message, either plain text or HTML.
   */
  message_body?: string;
  /**
   * Recipient Email
   * @description Primary recipient's email address.
   */
  recipient_email?: string;
  /**
   * Thread Id
   * @description Identifier of the Gmail thread for the reply.
   */
  thread_id?: string;
  /**
   * User Id
   * @description Identifier for the user sending the reply; 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_REPLY_TO_THREAD tool output.
 */
type GOOGLESUPER_REPLY_TO_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response data from the Gmail API after sending the reply, typically including the sent message's ID.
       */
      response_data?: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_DEVELOPER_METADATA tool input.
 */
type GOOGLESUPER_SEARCH_DEVELOPER_METADATA_INPUT = {
  /**
   * Data Filters
   * @description The data filters describing the criteria used to determine which DeveloperMetadata entries to return.
   */
  dataFilters?: {
      /**
       * A1 Range
       * @description Selects DeveloperMetadata associated with the given A1 range. Must represent a single row or single column only. Valid examples: 'A:A' (entire column A), 'Sheet1!B:B' (column B in Sheet1), '1:1' (entire row 1), 'Sheet1!5:5' (row 5 in Sheet1). Invalid examples: 'A1:D7' (multi-row/multi-column range), 'A1' (single cell).
       * @default null
       */
      a1Range: string | null;
      /**
       * Developer Metadata Lookup
       * @description Selects DeveloperMetadata by its ID.
       * @default null
       */
      developerMetadataLookup: {
          [key: string]: unknown;
      } | null;
      /**
       * Grid Range
       * @description Selects DeveloperMetadata associated with the given grid range. The developer metadata must be associated with a location that overlaps the range.
       * @default null
       */
      gridRange: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to retrieve metadata from.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_DEVELOPER_METADATA tool output.
 */
type GOOGLESUPER_SEARCH_DEVELOPER_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Matched Developer Metadata
       * @description The metadata matching the criteria of the search request.
       * @default null
       */
      matchedDeveloperMetadata: {
          /**
           * Data Filters
           * @description All filters matching the returned developer metadata.
           * @default null
           */
          dataFilters: {
              /**
               * A1 Range
               * @description Selects DeveloperMetadata associated with the given A1 range. Must represent a single row or single column only. Valid examples: 'A:A' (entire column A), 'Sheet1!B:B' (column B in Sheet1), '1:1' (entire row 1), 'Sheet1!5:5' (row 5 in Sheet1). Invalid examples: 'A1:D7' (multi-row/multi-column range), 'A1' (single cell).
               * @default null
               */
              a1Range: string | null;
              /**
               * Developer Metadata Lookup
               * @description Selects DeveloperMetadata by its ID.
               * @default null
               */
              developerMetadataLookup: {
                  [key: string]: unknown;
              } | null;
              /**
               * Grid Range
               * @description Selects DeveloperMetadata associated with the given grid range. The developer metadata must be associated with a location that overlaps the range.
               * @default null
               */
              gridRange: {
                  [key: string]: unknown;
              } | null;
          }[] | null;
          /**
           * DeveloperMetadata
           * @description The developer metadata matching the specified filters.
           * @default null
           */
          developerMetadata: {
              /**
               * Location
               * @description The location of the developer metadata.
               * @default null
               */
              location: {
                  [key: string]: unknown;
              } | null;
              /**
               * Metadata Id
               * @description The ID of the developer metadata.
               * @default null
               */
              metadataId: number | null;
              /**
               * Metadata Key
               * @description The key of the developer metadata.
               * @default null
               */
              metadataKey: string | null;
              /**
               * Metadata Value
               * @description The value of the developer metadata.
               * @default null
               */
              metadataValue: string | null;
              /**
               * Visibility
               * @description The visibility of the developer metadata.
               * @default null
               */
              visibility: string | null;
          } | null;
      }[] | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_DOCUMENTS tool input.
 */
type GOOGLESUPER_SEARCH_DOCUMENTS_INPUT = {
  /**
   * Created After
   * @description Return documents created after this date. Use RFC 3339 format like '2024-01-01T00:00:00Z'.
   * @default null
   */
  created_after: string | null;
  /**
   * Include Trashed
   * @description Whether to include documents in trash. Defaults to False.
   * @default false
   */
  include_trashed: boolean | null;
  /**
   * Max Results
   * @description Maximum number of documents to return (1-1000). Defaults to 10.
   * @default 10
   */
  max_results: number | null;
  /**
   * Modified After
   * @description Return documents modified after this date. Use RFC 3339 format like '2024-01-01T00:00:00Z'.
   * @default null
   */
  modified_after: string | null;
  /**
   * Order By
   * @description Order results by field. Common options: 'modifiedTime desc', 'modifiedTime asc', 'name', 'createdTime desc'
   * @default modifiedTime desc
   */
  order_by: string | null;
  /**
   * Query
   * @description Search query to filter documents. Can search by name (name contains 'report'), full text content (fullText contains 'important'), or use complex queries with operators like 'and', 'or', 'not'. Leave empty to get all documents.
   * @default null
   */
  query: string | null;
  /**
   * Shared With Me
   * @description Whether to return only documents shared with the current user. Defaults to False.
   * @default false
   */
  shared_with_me: boolean | null;
  /**
   * Starred Only
   * @description Whether to return only starred documents. Defaults to False.
   * @default false
   */
  starred_only: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_DOCUMENTS tool output.
 */
type GOOGLESUPER_SEARCH_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of Google Documents matching the search criteria. Each document contains id, name, modifiedTime, createdTime, webViewLink, and other metadata.
       */
      documents: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if more results are available.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Total Found
       * @description Total number of documents found matching the search criteria.
       */
      total_found: number;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_MEDIA_ITEMS tool input.
 */
type GOOGLESUPER_SEARCH_MEDIA_ITEMS_INPUT = {
  /**
   * Album Id
   * @description Album to search within
   */
  albumId?: string;
  /**
   * Filters
   * @description Search filters
   */
  filters?: {
      /**
       * Content Filter
       * @description Filter by content type
       */
      contentFilter?: {
          /**
           * Excluded Content Categories
           * @description Categories to exclude (ORed)
           */
          excludedContentCategories?: string[];
          /**
           * Included Content Categories
           * @description Categories to include (ORed)
           */
          includedContentCategories?: string[];
      };
      /**
       * Date Filter
       * @description Filter by creation date
       */
      dateFilter?: {
          /**
           * Dates
           * @description List of dates to match
           */
          dates?: {
              /**
               * Day
               * @description Day from 1-31, or 0 for no day
               */
              day?: number;
              /**
               * Month
               * @description Month from 1-12, or 0 for no month
               */
              month?: number;
              /**
               * Year
               * @description Year from 1-9999, or 0 for no year
               */
              year?: number;
          }[];
          /**
           * Ranges
           * @description List of date ranges to match
           */
          ranges?: {
              /**
               * End Date
               * @description End date of the range
               */
              endDate: {
                  /**
                   * Day
                   * @description Day from 1-31, or 0 for no day
                   */
                  day?: number;
                  /**
                   * Month
                   * @description Month from 1-12, or 0 for no month
                   */
                  month?: number;
                  /**
                   * Year
                   * @description Year from 1-9999, or 0 for no year
                   */
                  year?: number;
              };
              /**
               * Start Date
               * @description Start date of the range
               */
              startDate: {
                  /**
                   * Day
                   * @description Day from 1-31, or 0 for no day
                   */
                  day?: number;
                  /**
                   * Month
                   * @description Month from 1-12, or 0 for no month
                   */
                  month?: number;
                  /**
                   * Year
                   * @description Year from 1-9999, or 0 for no year
                   */
                  year?: number;
              };
          }[];
      };
      /**
       * Exclude Non App Created Data
       * @description Exclude items not created by this app
       */
      excludeNonAppCreatedData?: boolean;
      /**
       * Feature Filter
       * @description Filter by features
       */
      featureFilter?: {
          /**
           * Included Features
           * @description Features to filter on
           */
          includedFeatures: string[];
      };
      /**
       * Include Archived Media
       * @description Include archived media items
       */
      includeArchivedMedia?: boolean;
      /**
       * Media Type Filter
       * @description Filter by media type
       */
      mediaTypeFilter?: {
          /**
           * Media Types
           * @description Type of media items to return
           */
          mediaTypes: string[];
      };
  };
  /**
   * Order By
   * @description Sort order for results, e.g. 'MediaMetadata.creation_time desc'
   */
  orderBy?: string;
  /**
   * Page Size
   * @description Maximum number of items to return. Default 25, maximum 100.
   * @default 25
   */
  pageSize: number;
  /**
   * Page Token
   * @description Token for getting the next page
   */
  pageToken?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_MEDIA_ITEMS tool output.
 */
type GOOGLESUPER_SEARCH_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Items
       * @description List of matching media items
       * @default []
       */
      mediaItems: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token for next page of results
       * @default null
       */
      nextPageToken: string | null;
  } & {
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_PEOPLE tool input.
 */
type GOOGLESUPER_SEARCH_PEOPLE_INPUT = {
  /**
   * Other Contacts
   * @description Include 'Other Contacts' (interacted with but not explicitly saved) in search results; if false, searches only primary contacts.
   * @default true
   */
  other_contacts: boolean;
  /**
   * Page Size
   * @description Maximum results to return; values >30 are capped to 30 by the API.
   * @default 10
   */
  pageSize: number;
  /**
   * Person Fields
   * @description Comma-separated fields to return (e.g., 'names,emailAddresses'); see PersonFields enum. If 'other_contacts' is true, only 'emailAddresses', 'names', 'phoneNumbers' are allowed.
   * @default emailAddresses,names,phoneNumbers
   */
  person_fields: string;
  /**
   * Query
   * @description Matches contact names, nicknames, email addresses, phone numbers, and organization fields.
   */
  query?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_PEOPLE tool output.
 */
type GOOGLESUPER_SEARCH_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the People API; structure may vary if 'other_contacts' was searched.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_SPREADSHEETS tool input.
 */
type GOOGLESUPER_SEARCH_SPREADSHEETS_INPUT = {
  /**
   * Created After
   * @description Return spreadsheets created after this date. Use RFC 3339 format like '2024-01-01T00:00:00Z'.
   * @default null
   */
  created_after: string | null;
  /**
   * Include Trashed
   * @description Whether to include spreadsheets in trash. Defaults to False.
   * @default false
   */
  include_trashed: boolean | null;
  /**
   * Max Results
   * @description Maximum number of spreadsheets to return (1-1000). Defaults to 10.
   * @default 10
   */
  max_results: number | null;
  /**
   * Modified After
   * @description Return spreadsheets modified after this date. Use RFC 3339 format like '2024-01-01T00:00:00Z'.
   * @default null
   */
  modified_after: string | null;
  /**
   * Order By
   * @description Order results by field. Common options: 'modifiedTime desc', 'modifiedTime asc', 'name', 'createdTime desc'
   * @default modifiedTime desc
   */
  order_by: string | null;
  /**
   * Query
   * @description Search query to filter spreadsheets. Can search by name (name contains 'budget'), full text content (fullText contains 'sales'), or use complex queries with operators like 'and', 'or', 'not'. Leave empty to get all spreadsheets.
   * @default null
   */
  query: string | null;
  /**
   * Shared With Me
   * @description Whether to return only spreadsheets shared with the current user. Defaults to False.
   * @default false
   */
  shared_with_me: boolean | null;
  /**
   * Starred Only
   * @description Whether to return only starred spreadsheets. Defaults to False.
   * @default false
   */
  starred_only: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEARCH_SPREADSHEETS tool output.
 */
type GOOGLESUPER_SEARCH_SPREADSHEETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if more results are available.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Spreadsheets
       * @description List of Google Spreadsheets matching the search criteria. Each spreadsheet contains id, name, modifiedTime, createdTime, webViewLink, and other metadata.
       */
      spreadsheets: {
          [key: string]: unknown;
      }[];
      /**
       * Total Found
       * @description Total number of spreadsheets found matching the search criteria.
       */
      total_found: number;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEND_DRAFT tool input.
 */
type GOOGLESUPER_SEND_DRAFT_INPUT = {
  /**
   * Draft Id
   * @description The ID of the draft to send.
   */
  draft_id?: string;
  /**
   * User Id
   * @description The user's email address. The special value `me` can be used to indicate the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEND_DRAFT tool output.
 */
type GOOGLESUPER_SEND_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The immutable ID of the sent message.
       * @default null
       */
      id: string | null;
      /**
       * Label Ids
       * @description List of IDs of labels applied to this message.
       * @default null
       */
      labelIds: string[] | null;
      /**
       * Raw
       * @description The entire email message in RFC 2822 format.
       * @default null
       */
      raw: string | null;
      /**
       * Snippet
       * @description A short part of the message text.
       * @default null
       */
      snippet: string | null;
      /**
       * Thread Id
       * @description The ID of the thread the message belongs to.
       * @default null
       */
      threadId: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SEND_EMAIL tool input.
 */
type GOOGLESUPER_SEND_EMAIL_INPUT = {
  /**
   * FileUploadable
   * @description File to attach; ensure `s3key`, `mimetype`, and `name` are set if provided. Omit or set to null for no attachment.
   */
  attachment?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Bcc
   * @description Blind Carbon Copy (BCC) recipients' email addresses.
   * @default []
   */
  bcc: string[];
  /**
   * Body
   * @description Email content (plain text or HTML); if HTML, `is_html` must be `True`.
   */
  body?: string;
  /**
   * Cc
   * @description Carbon Copy (CC) recipients' email addresses.
   * @default []
   */
  cc: string[];
  /**
   * Extra Recipients
   * @description Additional 'To' recipients' email addresses (not Cc or Bcc).
   * @default []
   */
  extra_recipients: string[];
  /**
   * Is Html
   * @description Set to `True` if the email body contains HTML tags.
   * @default false
   */
  is_html: boolean;
  /**
   * Recipient Email
   * @description Primary recipient's email address.
   */
  recipient_email?: string;
  /**
   * Subject
   * @description Subject line of the email.
   * @default null
   */
  subject: string | null;
  /**
   * User Id
   * @description User's email address; the literal 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SEND_EMAIL tool output.
 */
type GOOGLESUPER_SEND_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Gmail API response, typically including the sent message ID and threadId.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_SETTINGS_LIST tool input.
 */
type GOOGLESUPER_SETTINGS_LIST_INPUT = {
  /**
   * Max Results
   * @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries.
   * @default null
   */
  maxResults: number | null;
  /**
   * Page Token
   * @description Token specifying which result page to return.
   * @default null
   */
  pageToken: string | null;
  /**
   * Sync Token
   * @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
   * @default null
   */
  syncToken: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SETTINGS_LIST tool output.
 */
type GOOGLESUPER_SETTINGS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description Etag of the collection.
       */
      etag: string;
      /**
       * Items
       * @description List of user settings.
       */
      items: {
          /**
           * Etag
           * @description Etag of the resource.
           */
          etag: string;
          /**
           * Id
           * @description The id of the user setting.
           */
          id: string;
          /**
           * Kind
           * @description Type of the resource ("calendar#setting").
           * @default calendar#setting
           */
          kind: string;
          /**
           * Value
           * @description The value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.
           */
          value: string;
      }[];
      /**
       * Kind
       * @description Type of the collection ("calendar#settings").
       * @default calendar#settings
       */
      kind: string;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
       * @default null
       */
      nextSyncToken: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SETTINGS_WATCH tool input.
 */
type GOOGLESUPER_SETTINGS_WATCH_INPUT = {
  /**
   * Address
   * @description The address where notifications are delivered for this channel.
   */
  address?: string;
  /**
   * Id
   * @description A UUID or similar unique string that identifies this channel.
   */
  id?: string;
  /**
   * SettingsWatchRequestParams
   * @description Additional parameters controlling delivery channel behavior.
   * @default null
   */
  params: {
      /**
       * Ttl
       * @description The time-to-live in seconds for the notification channel. Default is 604800 seconds.
       * @default null
       */
      ttl: string | null;
  } | null;
  /**
   * Token
   * @description An arbitrary string delivered to the target address with each notification delivered over this channel.
   * @default null
   */
  token: string | null;
  /**
   * Type
   * @description The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook").
   */
  type?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SETTINGS_WATCH tool output.
 */
type GOOGLESUPER_SETTINGS_WATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration
       * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds.
       * @default null
       */
      expiration: number | null;
      /**
       * Id
       * @description A UUID or similar unique string that identifies this channel.
       */
      id: string;
      /**
       * Kind
       * @description Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
       */
      kind: string;
      /**
       * Resource Id
       * @description An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
       */
      resourceId: string;
      /**
       * Resource Uri
       * @description A version-specific identifier for the watched resource.
       */
      resourceUri: string;
      /**
       * Token
       * @description An arbitrary string delivered to the target address with each notification delivered over this channel.
       * @default null
       */
      token: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SET_BASIC_FILTER tool input.
 */
type GOOGLESUPER_SET_BASIC_FILTER_INPUT = {
  /**
   * Filter
   * @description The filter to set.
   */
  filter?: {
      /**
       * Criteria
       * @description The criteria for showing/hiding values per column. The key is the column index.
       * @default null
       */
      criteria: {
          [key: string]: {
              /**
               * @description A condition that must be true for values to be shown.
               * @default null
               */
              condition: {
                  /**
                   * Type
                   * @description The type of condition.
                   */
                  type: string;
                  /**
                   * Values
                   * @description The values of the condition.
                   * @default null
                   */
                  values: {
                      /**
                       * Relative Date
                       * @description A relative date.
                       * @default null
                       */
                      relative_date: string | null;
                      /**
                       * User Entered Value
                       * @description A value the condition is based on.
                       * @default null
                       */
                      user_entered_value: string | null;
                  }[] | null;
              } | null;
              /**
               * Hiddenvalues
               * @description Values that should be hidden.
               * @default null
               */
              hiddenValues: string[] | null;
              /**
               * @description The background fill color to filter by.
               * @default null
               */
              visibleBackgroundColorStyle: {
                  /** @default null */
                  rgbColor: {
                      /**
                       * Alpha
                       * @description The fraction of this color that should be applied to the pixel.
                       * @default null
                       */
                      alpha: number | null;
                      /**
                       * Blue
                       * @description The amount of blue in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      blue: number | null;
                      /**
                       * Green
                       * @description The amount of green in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      green: number | null;
                      /**
                       * Red
                       * @description The amount of red in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      red: number | null;
                  } | null;
                  /**
                   * Themecolor
                   * @default null
                   */
                  themeColor: string | null;
              } | null;
              /**
               * @description The foreground color to filter by.
               * @default null
               */
              visibleForegroundColorStyle: {
                  /** @default null */
                  rgbColor: {
                      /**
                       * Alpha
                       * @description The fraction of this color that should be applied to the pixel.
                       * @default null
                       */
                      alpha: number | null;
                      /**
                       * Blue
                       * @description The amount of blue in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      blue: number | null;
                      /**
                       * Green
                       * @description The amount of green in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      green: number | null;
                      /**
                       * Red
                       * @description The amount of red in the color as a value in the interval [0, 1].
                       * @default null
                       */
                      red: number | null;
                  } | null;
                  /**
                   * Themecolor
                   * @default null
                   */
                  themeColor: string | null;
              } | null;
          };
      } | null;
      /**
       * Range
       * @description The range the filter covers.
       */
      range: {
          /**
           * End Column Index
           * @description The end column (exclusive) of the range, or not set if unbounded.
           * @default null
           */
          end_column_index: number | null;
          /**
           * End Row Index
           * @description The end row (exclusive) of the range, or not set if unbounded.
           * @default null
           */
          end_row_index: number | null;
          /**
           * Sheet Id
           * @description The sheet this range is on.
           */
          sheet_id: number;
          /**
           * Start Column Index
           * @description The start column (inclusive) of the range, or not set if unbounded.
           * @default null
           */
          start_column_index: number | null;
          /**
           * Start Row Index
           * @description The start row (inclusive) of the range, or not set if unbounded.
           * @default null
           */
          start_row_index: number | null;
      };
      /**
       * Sort Specs
       * @description The sort specifications for the filter.
       * @default null
       */
      sortSpecs: {
          /**
           * ColorStyle
           * @description The background fill color to sort by.
           * @default null
           */
          backgroundColorStyle: {
              /**
               * Color
               * @default null
               */
              rgbColor: {
                  /**
                   * Alpha
                   * @description The fraction of this color that should be applied to the pixel.
                   * @default null
                   */
                  alpha: number | null;
                  /**
                   * Blue
                   * @description The amount of blue in the color as a value in the interval [0, 1].
                   * @default null
                   */
                  blue: number | null;
                  /**
                   * Green
                   * @description The amount of green in the color as a value in the interval [0, 1].
                   * @default null
                   */
                  green: number | null;
                  /**
                   * Red
                   * @description The amount of red in the color as a value in the interval [0, 1].
                   * @default null
                   */
                  red: number | null;
              } | null;
              /**
               * Theme Color
               * @default null
               */
              themeColor: string | null;
          } | null;
          /**
           * DataSourceColumnReference
           * @description Reference to a data source column.
           * @default null
           */
          dataSourceColumnReference: {
              /**
               * Name
               * @description The display name of the column.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Dimension Index
           * @description The dimension the sort should be applied to.
           * @default null
           */
          dimensionIndex: number | null;
          /**
           * ColorStyle
           * @description The foreground color to sort by.
           * @default null
           */
          foregroundColorStyle: {
              /**
               * Color
               * @default null
               */
              rgbColor: {
                  /**
                   * Alpha
                   * @description The fraction of this color that should be applied to the pixel.
                   * @default null
                   */
                  alpha: number | null;
                  /**
                   * Blue
                   * @description The amount of blue in the color as a value in the interval [0, 1].
                   * @default null
                   */
                  blue: number | null;
                  /**
                   * Green
                   * @description The amount of green in the color as a value in the interval [0, 1].
                   * @default null
                   */
                  green: number | null;
                  /**
                   * Red
                   * @description The amount of red in the color as a value in the interval [0, 1].
                   * @default null
                   */
                  red: number | null;
              } | null;
              /**
               * Theme Color
               * @default null
               */
              themeColor: string | null;
          } | null;
          /**
           * SortOrderEnum
           * @description The order data should be sorted.
           * @default null
           * @enum {string|null}
           */
          sortOrder: "ASCENDING" | "DESCENDING" | "SORT_ORDER_UNSPECIFIED" | null;
      }[] | null;
  };
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SET_BASIC_FILTER tool output.
 */
type GOOGLESUPER_SET_BASIC_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SHEET_FROM_JSON tool input.
 */
type GOOGLESUPER_SHEET_FROM_JSON_INPUT = {
  /**
   * Sheet Json
   * @description A list of dictionaries representing the rows of the sheet. Each dictionary must have the same set of keys, which will form the header row. Values can be strings, numbers, booleans, or null (represented as empty cells).
   */
  sheet_json?: {
      [key: string]: unknown;
  }[];
  /**
   * Sheet Name
   * @description The name for the first worksheet within the newly created spreadsheet. This name will appear as a tab at the bottom of the sheet.
   */
  sheet_name?: string;
  /**
   * Title
   * @description The desired title for the new Google Spreadsheet.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SHEET_FROM_JSON tool output.
 */
type GOOGLESUPER_SHEET_FROM_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full response from the Google Sheets API after creating and populating the sheet. This typically includes details such as the spreadsheet ID, and information about the range of cells updated.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO tool input.
 */
type GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO_INPUT = {
  /**
   * Destination Spreadsheet Id
   * @description The ID of the spreadsheet to copy the sheet to.
   */
  destination_spreadsheet_id?: string;
  /**
   * Sheet Id
   * @description The ID of the sheet to copy.
   */
  sheet_id?: number;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet containing the sheet to copy.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO tool output.
 */
type GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data Source Sheet Properties
       * @description Properties of a data source sheet.
       * @default null
       */
      data_source_sheet_properties: {
          [key: string]: unknown;
      } | null;
      /**
       * GridProperties
       * @description Properties of a grid sheet.
       * @default null
       */
      grid_properties: {
          /**
           * Column Count
           * @description The number of columns in the sheet.
           * @default null
           */
          column_count: number | null;
          /**
           * Column Group Control After
           * @description True if the column grouping control toggle is shown after the group, false if before.
           * @default null
           */
          column_group_control_after: boolean | null;
          /**
           * Frozen Column Count
           * @description The number of frozen columns.
           * @default null
           */
          frozen_column_count: number | null;
          /**
           * Frozen Row Count
           * @description The number of frozen rows.
           * @default null
           */
          frozen_row_count: number | null;
          /**
           * Hide Gridlines
           * @description True if gridlines are hidden, false otherwise.
           * @default null
           */
          hide_gridlines: boolean | null;
          /**
           * Row Count
           * @description The number of rows in the sheet.
           * @default null
           */
          row_count: number | null;
          /**
           * Row Group Control After
           * @description True if the row grouping control toggle is shown after the group, false if before.
           * @default null
           */
          row_group_control_after: boolean | null;
      } | null;
      /**
       * Hidden
       * @description True if the sheet is hidden, false otherwise.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Index
       * @description The index of the sheet, zero-based.
       * @default null
       */
      index: number | null;
      /**
       * Right To Left
       * @description True if the sheet is an RTL sheet, false otherwise.
       * @default null
       */
      right_to_left: boolean | null;
      /**
       * Sheet Id
       * @description The ID of the sheet.
       * @default null
       */
      sheet_id: number | null;
      /**
       * SheetType
       * @description The type of sheet.
       * @default null
       * @enum {string|null}
       */
      sheet_type: "SHEET_TYPE_UNSPECIFIED" | "GRID" | "OBJECT" | null;
      /**
       * Tab Color
       * @description The color of the tab in the UI, as a RGB color. Deprecated: Use tabColorStyle.
       * @default null
       */
      tab_color: {
          [key: string]: unknown;
      } | null;
      /**
       * Tab Color Style
       * @description The color of the tab in the UI, as a ThemeColorType object or a RGB color.
       * @default null
       */
      tab_color_style: {
          [key: string]: unknown;
      } | null;
      /**
       * Title
       * @description The name of the sheet.
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
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_APPEND tool input.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_APPEND_INPUT = {
  /**
   * Include Values In Response
   * @description Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
   * @default null
   */
  includeValuesInResponse: boolean | null;
  /**
   * Insert Data Option
   * @description How the input data should be inserted.
   * @default null
   * @enum {string|null}
   */
  insertDataOption: "OVERWRITE" | "INSERT_ROWS" | null;
  /**
   * Major Dimension
   * @description The major dimension of the values. For output, if the spreadsheet data is: A1=1,B1=2,A2=3,B2=4, then requesting range=A1:B2,majorDimension=ROWS will return [[1,2],[3,4]], whereas requesting range=A1:B2,majorDimension=COLUMNS will return [[1,3],[2,4]].
   * @default null
   * @enum {string|null}
   */
  majorDimension: "ROWS" | "COLUMNS" | null;
  /**
   * Range
   * @description The A1 notation of a range to search for a logical table of data. Values are appended after the last row of the table.
   */
  range?: string;
  /**
   * Response Date Time Render Option
   * @description Determines how dates, times, and durations in the response should be rendered. This is ignored if responseValueRenderOption is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
   * @default null
   * @enum {string|null}
   */
  responseDateTimeRenderOption: "SERIAL_NUMBER" | "FORMATTED_STRING" | null;
  /**
   * Response Value Render Option
   * @description Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
   * @default null
   * @enum {string|null}
   */
  responseValueRenderOption: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA" | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to update.
   */
  spreadsheetId?: string;
  /**
   * Value Input Option
   * @description How the input data should be interpreted.
   * @enum {string}
   */
  valueInputOption?: "RAW" | "USER_ENTERED";
  /**
   * Values
   * @description The data to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell.
   */
  values?: (string | number | boolean)[][];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_APPEND tool output.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet Id
       * @description The spreadsheet the updates were applied to.
       * @default null
       */
      spreadsheetId: string | null;
      /**
       * Table Range
       * @description The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found.
       * @default null
       */
      tableRange: string | null;
      /**
       * UpdateValuesResponse
       * @description Information about the updates that were applied.
       * @default null
       */
      updates: {
          /**
           * Spreadsheet Id
           * @description The spreadsheet the updates were applied to.
           * @default null
           */
          spreadsheetId: string | null;
          /**
           * Updated Cells
           * @description The number of cells updated.
           * @default null
           */
          updatedCells: number | null;
          /**
           * Updated Columns
           * @description The number of columns updated.
           * @default null
           */
          updatedColumns: number | null;
          /**
           * ValueRange
           * @description The values of the cells that were updated. Only fill in if the request's includeValuesInResponse field was true.
           * @default null
           */
          updatedData: {
              /**
               * Major Dimension
               * @description The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
               * @default null
               * @enum {string|null}
               */
              majorDimension: "ROWS" | "COLUMNS" | null;
              /**
               * Range
               * @description The range the values cover, in A1 notation. For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended.
               * @default null
               */
              range: string | null;
              /**
               * Values
               * @description The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell.
               */
              values: (string | number | boolean)[][];
          } | null;
          /**
           * Updated Range
           * @description The range (in A1 notation) that updates were applied to.
           * @default null
           */
          updatedRange: string | null;
          /**
           * Updated Rows
           * @description The number of rows updated.
           * @default null
           */
          updatedRows: number | null;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR tool input.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_INPUT = {
  /**
   * Ranges
   * @description The ranges to clear, in A1 notation or R1C1 notation.
   */
  ranges?: string[];
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to update.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR tool output.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cleared Ranges
       * @description The ranges that were cleared, in A1 notation.
       * @default []
       */
      cleared_ranges: string[];
      /**
       * Spreadsheet Id
       * @description The spreadsheet the updates were applied to.
       * @default
       */
      spreadsheet_id: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER tool input.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_INPUT = {
  /**
   * Data Filters
   * @description The DataFilters used to determine which ranges to clear.
   */
  dataFilters?: {
      /**
       * A1 Range
       * @description Selects data that matches the specified A1 range.
       * @default null
       */
      a1Range: string | null;
      /**
       * DeveloperMetadataLookup
       * @description Selects data associated with the developer metadata matching the criteria described by this DeveloperMetadataLookup.
       * @default null
       */
      developerMetadataLookup: {
          /**
           * Location Matching Strategy
           * @description Determines how this lookup matches the location. Valid values: DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED, EXACT_LOCATION, INTERSECTING_LOCATION.
           * @default null
           */
          locationMatchingStrategy: string | null;
          /**
           * Location Type
           * @description Limits the selected developer metadata to those entries which are associated with locations of the specified type. Valid values: DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED, ROW, COLUMN, SHEET, SPREADSHEET, ALL_METADATA_LOCATION.
           * @default null
           */
          locationType: string | null;
          /**
           * Metadata Id
           * @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id.
           * @default null
           */
          metadataId: number | null;
          /**
           * Metadata Key
           * @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key.
           * @default null
           */
          metadataKey: string | null;
          /**
           * DeveloperMetadataLocation
           * @description Limits the selected developer metadata to those entries associated with the specified location.
           * @default null
           */
          metadataLocation: {
              /**
               * DimensionRange
               * @description The dimension range the metadata is associated with.
               * @default null
               */
              dimensionRange: {
                  /**
                   * Dimension
                   * @description The dimension of the span. Valid values are ROWS or COLUMNS.
                   * @default null
                   */
                  dimension: string | null;
                  /**
                   * End Index
                   * @description The end (exclusive) of the span, or not set if unbounded.
                   * @default null
                   */
                  endIndex: number | null;
                  /**
                   * Sheet Id
                   * @description The sheet this span is on.
                   * @default null
                   */
                  sheetId: number | null;
                  /**
                   * Start Index
                   * @description The start (inclusive) of the span, or not set if unbounded.
                   * @default null
                   */
                  startIndex: number | null;
              } | null;
              /**
               * Sheet Id
               * @description The ID of the sheet the metadata is associated with.
               * @default null
               */
              sheetId: number | null;
              /**
               * Spreadsheet
               * @description True if the metadata is associated with the entire spreadsheet.
               * @default null
               */
              spreadsheet: boolean | null;
              /**
               * GridRange
               * @description A grid range covering all spreadsheet, sheet, row, and column metadata that belong to the same unioned group.
               * @default null
               */
              unionedRange: {
                  /**
                   * End Column Index
                   * @description The end column (exclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  endColumnIndex: number | null;
                  /**
                   * End Row Index
                   * @description The end row (exclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  endRowIndex: number | null;
                  /**
                   * Sheet Id
                   * @description The sheet this range is on.
                   * @default null
                   */
                  sheetId: number | null;
                  /**
                   * Start Column Index
                   * @description The start column (inclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  startColumnIndex: number | null;
                  /**
                   * Start Row Index
                   * @description The start row (inclusive) of the range, or not set if unbounded.
                   * @default null
                   */
                  startRowIndex: number | null;
              } | null;
          } | null;
          /**
           * Metadata Value
           * @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value.
           * @default null
           */
          metadataValue: string | null;
          /**
           * Visibility
           * @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. Valid values: DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED, DOCUMENT, PROJECT.
           * @default null
           */
          visibility: string | null;
      } | null;
      /**
       * GridRange
       * @description Selects data that matches the range described by the GridRange.
       * @default null
       */
      gridRange: {
          /**
           * End Column Index
           * @description The end column (exclusive) of the range, or not set if unbounded.
           * @default null
           */
          endColumnIndex: number | null;
          /**
           * End Row Index
           * @description The end row (exclusive) of the range, or not set if unbounded.
           * @default null
           */
          endRowIndex: number | null;
          /**
           * Sheet Id
           * @description The sheet this range is on.
           * @default null
           */
          sheetId: number | null;
          /**
           * Start Column Index
           * @description The start column (inclusive) of the range, or not set if unbounded.
           * @default null
           */
          startColumnIndex: number | null;
          /**
           * Start Row Index
           * @description The start row (inclusive) of the range, or not set if unbounded.
           * @default null
           */
          startRowIndex: number | null;
      } | null;
  }[];
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to update.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER tool output.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cleared Ranges
       * @description The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
       */
      clearedRanges: string[];
      /**
       * Spreadsheet Id
       * @description The spreadsheet the updates were applied to.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER tool input.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_INPUT = {
  /**
   * Data Filters
   * @description The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response.
   */
  dataFilters?: {
      /**
       * A1 Range
       * @description Selects data that matches the specified A1 range.
       * @default null
       */
      a1Range: string | null;
      /**
       * GridRange
       * @description Selects data that matches the specified grid range.
       * @default null
       */
      gridRange: {
          /**
           * End Column Index
           * @description The end column (0-indexed) of the range, exclusive.
           * @default null
           */
          endColumnIndex: number | null;
          /**
           * End Row Index
           * @description The end row (0-indexed) of the range, exclusive.
           * @default null
           */
          endRowIndex: number | null;
          /**
           * Sheet Id
           * @description The sheet ID of the range.
           * @default null
           */
          sheetId: number | null;
          /**
           * Start Column Index
           * @description The start column (0-indexed) of the range, inclusive.
           * @default null
           */
          startColumnIndex: number | null;
          /**
           * Start Row Index
           * @description The start row (0-indexed) of the range, inclusive.
           * @default null
           */
          startRowIndex: number | null;
      } | null;
  }[];
  /**
   * DateTimeRenderOption
   * @description How dates, times, and durations should be represented in the output. This is ignored if valueRenderOption is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
   * @default null
   * @enum {string|null}
   */
  dateTimeRenderOption: "SERIAL_NUMBER" | "FORMATTED_STRING" | null;
  /**
   * MajorDimension
   * @description The major dimension that results should use. For example, if the spreadsheet data is: A1=1,B1=2,A2=3,B2=4, then a request that selects that range and sets majorDimension=ROWS returns [[1,2],[3,4]], whereas a request that sets majorDimension=COLUMNS returns [[1,3],[2,4]].
   * @default null
   * @enum {string|null}
   */
  majorDimension: "ROWS" | "COLUMNS" | null;
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to retrieve data from.
   */
  spreadsheetId?: string;
  /**
   * ValueRenderOption
   * @description How values should be represented in the output. The default render option is FORMATTED_VALUE.
   * @default null
   * @enum {string|null}
   */
  valueRenderOption: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA" | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER tool output.
 */
type GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet the data was retrieved from.
       */
      spreadsheetId: string;
      /**
       * Value Ranges
       * @description The requested values with the list of data filters that matched them.
       */
      valueRanges: {
          /**
           * Data Filters
           * @description The DataFilters from the request that matched the range of values.
           * @default null
           */
          dataFilters: {
              /**
               * A1 Range
               * @description Selects data that matches the specified A1 range.
               * @default null
               */
              a1Range: string | null;
              /**
               * GridRange
               * @description Selects data that matches the specified grid range.
               * @default null
               */
              gridRange: {
                  /**
                   * End Column Index
                   * @description The end column (0-indexed) of the range, exclusive.
                   * @default null
                   */
                  endColumnIndex: number | null;
                  /**
                   * End Row Index
                   * @description The end row (0-indexed) of the range, exclusive.
                   * @default null
                   */
                  endRowIndex: number | null;
                  /**
                   * Sheet Id
                   * @description The sheet ID of the range.
                   * @default null
                   */
                  sheetId: number | null;
                  /**
                   * Start Column Index
                   * @description The start column (0-indexed) of the range, inclusive.
                   * @default null
                   */
                  startColumnIndex: number | null;
                  /**
                   * Start Row Index
                   * @description The start row (0-indexed) of the range, inclusive.
                   * @default null
                   */
                  startRowIndex: number | null;
              } | null;
          }[] | null;
          /**
           * ValueRange
           * @description The values matched by the DataFilter.
           * @default null
           */
          valueRange: {
              /**
               * MajorDimension
               * @description The major dimension of the values.
               * @default null
               * @enum {string|null}
               */
              majorDimension: "ROWS" | "COLUMNS" | null;
              /**
               * Range
               * @description The range the values cover, in A1 notation.
               * @default null
               */
              range: string | null;
              /**
               * Values
               * @description The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension.
               * @default null
               */
              values: (string | number | boolean)[][] | null;
          } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_STOP_WATCH_CHANNEL tool input.
 */
type GOOGLESUPER_STOP_WATCH_CHANNEL_INPUT = {
  /**
   * Address
   * @description The address where notifications are delivered for this channel.
   * @default null
   */
  address: string | null;
  /**
   * Channel Type
   * @description The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".
   * @default null
   */
  channelType: string | null;
  /**
   * Expiration
   * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds.
   * @default null
   */
  expiration: string | null;
  /**
   * Id
   * @description The ID of the channel to stop.
   */
  id?: string;
  /**
   * Kind
   * @description Identifies this as a notification channel used to watch for changes to a resource.
   * @default api#channel
   */
  kind: string | null;
  /**
   * Params
   * @description Additional parameters controlling delivery channel behavior.
   * @default null
   */
  params: {
      [key: string]: string;
  } | null;
  /**
   * Payload
   * @description A Boolean value to indicate whether payload is wanted.
   * @default null
   */
  payload: boolean | null;
  /**
   * Resource Id
   * @description The ID of the resource being watched.
   */
  resourceId?: string;
  /**
   * Resource Uri
   * @description A version-specific identifier for the watched resource.
   * @default null
   */
  resourceUri: string | null;
  /**
   * Token
   * @description An arbitrary string delivered to the target address with each notification delivered over this channel.
   * @default null
   */
  token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_STOP_WATCH_CHANNEL tool output.
 */
type GOOGLESUPER_STOP_WATCH_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating the success of the operation.
       * @default Successfully stopped watching the channel.
       */
      message: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_SYNC_EVENTS tool input.
 */
type GOOGLESUPER_SYNC_EVENTS_INPUT = {
  /**
   * Calendar Id
   * @description Google Calendar identifier; 'primary' refers to the authenticated user's main calendar.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Types
   * @description Filters events by specified types (e.g., 'default', 'focusTime', 'outOfOffice', 'workingLocation'). All types returned if omitted.
   * @default null
   */
  event_types: string[] | null;
  /**
   * Max Results
   * @description Max events per page (max 2500); Google Calendar's default is used if unspecified.
   * @default null
   */
  max_results: number | null;
  /**
   * Page Token
   * @description Token for paginating results, from a previous response's `nextPageToken`.
   * @default null
   */
  pageToken: string | null;
  /**
   * Single Events
   * @description If True, expands recurring events into individual instances (excluding master event); otherwise, Google's default handling applies.
   * @default null
   */
  single_events: boolean | null;
  /**
   * Sync Token
   * @description Token for incremental sync, retrieving only changes since issued. A 410 GONE response indicates an expired token, requiring a full sync.
   * @default null
   */
  sync_token: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_SYNC_EVENTS tool output.
 */
type GOOGLESUPER_SYNC_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Data
       * @description Dictionary with synchronized data: 'event_data' (list of changed event resources), 'nextPageToken' (for pagination), and 'nextSyncToken' (for next incremental sync).
       */
      event_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_TEXT_SEARCH tool input.
 */
type GOOGLESUPER_TEXT_SEARCH_INPUT = {
  /**
   * Field Mask
   * @description Comma-separated list of place fields to return. Use `*` for all fields (not recommended for performance/cost). See Google Maps Places API documentation for field names.
   * @default places.displayName,places.formattedAddress,places.priceLevel
   */
  fieldMask: string;
  /**
   * Max Result Count
   * @description Maximum number of place results to return (must be 1-20). Note: Google prefers `pageSize`, but this action uses `maxResultCount`.
   * @default 10
   */
  maxResultCount: number;
  /**
   * Text Query
   * @description Text query for searching places. Matched against place name, address, and category.
   */
  textQuery?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_TEXT_SEARCH tool output.
 */
type GOOGLESUPER_TEXT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Places
       * @description List of places matching the query. Fields for each place are determined by the request's `fieldMask`.
       */
      places: {
          [key: string]: unknown;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UNHIDE_DRIVE tool input.
 */
type GOOGLESUPER_UNHIDE_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  driveId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UNHIDE_DRIVE tool output.
 */
type GOOGLESUPER_UNHIDE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background Image File
       * @description An image file to be used as the background for this shared drive.
       * @default null
       */
      backgroundImageFile: {
          [key: string]: unknown;
      } | null;
      /**
       * Background Image Link
       * @description A short-lived link to this shared drive's background image.
       * @default null
       */
      backgroundImageLink: string | null;
      /**
       * Capabilities
       * @description A set of capabilities the current user has on this shared drive.
       * @default null
       */
      capabilities: {
          [key: string]: unknown;
      } | null;
      /**
       * Color Rgb
       * @description The color of this shared drive as an RGB hex string.
       * @default null
       */
      colorRgb: string | null;
      /**
       * Created Time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive. This is a scalar that is locally unique within a domain.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#drive'.
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The name of this shared drive.
       * @default null
       */
      name: string | null;
      /**
       * Org Unit Id
       * @description The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is true.
       * @default null
       */
      orgUnitId: string | null;
      /**
       * Restrictions
       * @description A set of restrictions that apply to this shared drive or items inside this shared drive.
       * @default null
       */
      restrictions: {
          [key: string]: unknown;
      } | null;
      /**
       * Theme Id
       * @description The theme ID of this shared drive.
       * @default null
       */
      themeId: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UNMERGE_TABLE_CELLS tool input.
 */
type GOOGLESUPER_UNMERGE_TABLE_CELLS_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to unmerge table cells in.
   */
  document_id?: string;
  /**
   * Table Range
   * @description The table range specifying which cells of the table to unmerge.
   */
  tableRange?: {
      /**
       * Column Span
       * @description The column span of the table range.
       */
      columnSpan: number;
      /**
       * Row Span
       * @description The row span of the table range.
       */
      rowSpan: number;
      /**
       * Table Cell Location
       * @description The cell location where the table range starts.
       */
      tableCellLocation: {
          /**
           * Column Index
           * @description The zero-based column index. For example, the second column in the table has a column index of 1.
           */
          columnIndex: number;
          /**
           * Row Index
           * @description The zero-based row index. For example, the second row in the table has a row index of 1.
           */
          rowIndex: number;
          /**
           * Location
           * @description The location where the table starts in the document.
           * @default null
           */
          tableStartLocation: {
              /**
               * Index
               * @description The zero-based index, in UTF-16 code units.
               * @default null
               */
              index: number | null;
              /**
               * Segment Id
               * @description The ID of the header, footer or footnote the table is in. An empty segment ID signifies the document's body.
               * @default null
               */
              segmentId: string | null;
              /**
               * Tab Id
               * @description The tab that the location is in. When omitted, the request is applied to the first tab.
               * @default null
               */
              tabId: string | null;
          } | null;
      };
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UNMERGE_TABLE_CELLS tool output.
 */
type GOOGLESUPER_UNMERGE_TABLE_CELLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document where table cells were unmerged.
       */
      documentId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UNTRASH_FILE tool input.
 */
type GOOGLESUPER_UNTRASH_FILE_INPUT = {
  /**
   * File Id
   * @description The ID of the file to untrash.
   */
  file_id?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UNTRASH_FILE tool output.
 */
type GOOGLESUPER_UNTRASH_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_ACL_RULE tool input.
 */
type GOOGLESUPER_UPDATE_ACL_RULE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
  /**
   * Role
   * @description The role assigned to the scope. Possible values are:
   *     - "none" - Provides no access.
   *     - "freeBusyReader" - Provides read access to free/busy information.
   *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
   *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
   *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
   */
  role?: string;
  /**
   * Rule Id
   * @description ACL rule identifier.
   */
  rule_id?: string;
  /**
   * Send Notifications
   * @description Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
   * @default true
   */
  send_notifications: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_ACL_RULE tool output.
 */
type GOOGLESUPER_UPDATE_ACL_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description Identifier of the ACL rule.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#aclRule").
       * @default null
       */
      kind: string | null;
      /**
       * Role
       * @description The role assigned to the scope. Possible values are:
       *     - "none" - Provides no access.
       *     - "freeBusyReader" - Provides read access to free/busy information.
       *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
       * @default null
       */
      role: string | null;
      /**
       * Type
       * @description The type of the scope. Possible values are:
       *     - "default" - The public scope. This is the default value.
       *     - "user" - Limits the scope to a single user.
       *     - "group" - Limits the scope to a group.
       *     - "domain" - Limits the scope to a domain.  Note: This requires ownership of the domain.
       * @default null
       */
      type: string | null;
      /**
       * Value
       * @description The email address or domain name in the scope. If left blank, the scope is of type "default", meaning it is public. Optional.
       * @default null
       */
      value: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_ALBUM tool input.
 */
type GOOGLESUPER_UPDATE_ALBUM_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album to update
   */
  albumId?: string;
  /**
   * Cover Photo Media Item Id
   * @description ID of the media item to use as album cover photo
   * @default null
   */
  coverPhotoMediaItemId: string | null;
  /**
   * Title
   * @description New title for the album. Maximum 500 characters.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_ALBUM tool output.
 */
type GOOGLESUPER_UPDATE_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Album
       * @description The updated album data
       */
      album: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_COMMENT tool input.
 */
type GOOGLESUPER_UPDATE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to update.
   */
  comment_id?: string;
  /**
   * Content
   * @description The plain text content of the comment. This field is used to update the comment's text. If not provided, the existing content will be retained unless 'resolved' is being updated.
   * @default null
   */
  content: string | null;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. The API documentation states this is required. If not specified by the user, this action defaults to '*' to retrieve all fields, ensuring the API requirement is met. Example: 'id,content,resolved'.
   * @default null
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Resolved
   * @description Whether the comment has been resolved. This can be used to mark a comment as resolved or reopen it.
   * @default null
   */
  resolved: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_COMMENT tool output.
 */
type GOOGLESUPER_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CommentAuthor
       * @description The user who created the comment.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Kind
           * @description Identifies this as a user.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the comment.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time at which the comment was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the comment has been deleted. A deleted comment has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Id
       * @description The ID of the comment.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies this as a comment. Value: "drive#comment".
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Resolved
       * @description Whether the comment has been resolved. A resolved comment is hidden from view.
       * @default null
       */
      resolved: boolean | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN tool input.
 */
type GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN_INPUT = {
  /**
   * Document Id
   * @description Identifier of the Google Docs document to update, found in the document's URL.
   */
  document_id?: string;
  /**
   * New Markdown Text
   * @description Markdown content that will replace the document's entire existing content. Supports standard Markdown features.
   */
  new_markdown_text?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN tool output.
 */
type GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the raw response from the Google Docs API's `batchUpdate` endpoint. This can include details about the revisions made and the document's current state. Its structure is defined by the Google Docs API.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Document Id
   * @description The unique identifier of the Google Docs document that was successfully updated.
   * @default null
   */
  document_id: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_DOCUMENT_STYLE tool input.
 */
type GOOGLESUPER_UPDATE_DOCUMENT_STYLE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Document Style
   * @description The DocumentStyle object with the new style settings.
   */
  document_style?: {
      /**
       * Background
       * @description The background of the document. The background fill must be specified as a solid fill.
       * @default null
       */
      background: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Footer Id
       * @description The ID of the default footer. If unset, the document inherits the default footer from the parent document. This property is read-only.
       * @default null
       */
      defaultFooterId: string | null;
      /**
       * Default Header Id
       * @description The ID of the default header. If unset, the document inherits the default header from the parent document. This property is read-only.
       * @default null
       */
      defaultHeaderId: string | null;
      /**
       * Even Page Footer Id
       * @description The ID of the footer for even pages. If unset, the document inherits the even page footer from the parent document. This property is read-only.
       * @default null
       */
      evenPageFooterId: string | null;
      /**
       * Even Page Header Id
       * @description The ID of the header for even pages. If unset, the document inherits the even page header from the parent document. This property is read-only.
       * @default null
       */
      evenPageHeaderId: string | null;
      /**
       * Margin Bottom
       * @description The bottom margin of the page.
       * @default null
       */
      marginBottom: {
          [key: string]: unknown;
      } | null;
      /**
       * Margin Left
       * @description The left margin of the page.
       * @default null
       */
      marginLeft: {
          [key: string]: unknown;
      } | null;
      /**
       * Margin Right
       * @description The right margin of the page.
       * @default null
       */
      marginRight: {
          [key: string]: unknown;
      } | null;
      /**
       * Margin Top
       * @description The top margin of the page.
       * @default null
       */
      marginTop: {
          [key: string]: unknown;
      } | null;
      /**
       * Odd Page Footer Id
       * @description The ID of the footer for odd pages. If unset, the document inherits the odd page footer from the parent document. This property is read-only.
       * @default null
       */
      oddPageFooterId: string | null;
      /**
       * Odd Page Header Id
       * @description The ID of the header for odd pages. If unset, the document inherits the odd page header from the parent document. This property is read-only.
       * @default null
       */
      oddPageHeaderId: string | null;
      /**
       * Page Number Start
       * @description The page number from which to start counting the number of pages.
       * @default null
       */
      pageNumberStart: number | null;
      /**
       * Page Size
       * @description The size of a page in the document.
       * @default null
       */
      pageSize: {
          [key: string]: unknown;
      } | null;
      /**
       * Use Even Page Header Footer
       * @description Indicates whether to use the even page header / footer, used in conjunction with use_first_page_header_footer.
       * @default null
       */
      useEvenPageHeaderFooter: boolean | null;
      /**
       * Use First Page Header Footer
       * @description Indicates whether to use the first page header / footer.
       * @default null
       */
      useFirstPageHeaderFooter: boolean | null;
  };
  /**
   * Fields
   * @description A comma-separated list of fields to update. Use '*' to update all fields in document_style. For example: "pageSize,marginTop,marginBottom".
   */
  fields?: string;
  /**
   * Tab Id
   * @description The ID of the tab to update the style for. If not provided, the first tab is used.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_DOCUMENT_STYLE tool output.
 */
type GOOGLESUPER_UPDATE_DOCUMENT_STYLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      document_id: string;
      /**
       * Reply Count
       * @description Number of replies in the batchUpdate response, should be 1 for this action.
       */
      reply_count: number;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_DRIVE tool input.
 */
type GOOGLESUPER_UPDATE_DRIVE_INPUT = {
  /**
   * BackgroundImageFile
   * @description An image file and cropping parameters for the shared drive's background. Cannot be set if themeId is set.
   * @default null
   */
  backgroundImageFile: {
      /**
       * Id
       * @description The ID of an image file in Google Drive to use for the background image.
       */
      id: string;
      /**
       * Width
       * @description The width of the cropped image (0.0 to 1.0). The height is computed (aspect ratio 80:9).
       */
      width: number;
      /**
       * X Coordinate
       * @description The X coordinate of the upper left corner of the cropping area in the background image (0.0 to 1.0).
       */
      xCoordinate: number;
      /**
       * Y Coordinate
       * @description The Y coordinate of the upper left corner of the cropping area in the background image (0.0 to 1.0).
       */
      yCoordinate: number;
  } | null;
  /**
   * Color Rgb
   * @description The color of this shared drive as an RGB hex string (e.g., "#FF0000"). Cannot be set if themeId is set.
   * @default null
   */
  colorRgb: string | null;
  /**
   * Drive Id
   * @description The ID of the shared drive to update.
   */
  driveId?: string;
  /**
   * Hidden
   * @description Whether the shared drive is hidden from the default view.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Name
   * @description The new name for the shared drive.
   * @default null
   */
  name: string | null;
  /**
   * DriveRestrictions
   * @description A set of restrictions to apply to the shared drive.
   * @default null
   */
  restrictions: {
      /**
       * Admin Managed Restrictions
       * @description If true, requires administrative privileges to modify restrictions.
       * @default null
       */
      adminManagedRestrictions: boolean | null;
      /**
       * Copy Requires Writer Permission
       * @description If true, disables copy, print, or download options for readers and commenters.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Domain Users Only
       * @description If true, restricts access to users of the domain to which the shared drive belongs.
       * @default null
       */
      domainUsersOnly: boolean | null;
      /**
       * Drive Members Only
       * @description If true, restricts access to items inside the shared drive to its members.
       * @default null
       */
      driveMembersOnly: boolean | null;
      /**
       * Sharing Folders Requires Organizer Permission
       * @description If true, only users with the organizer role can share folders. If false, users with either the organizer or file organizer role can share folders.
       * @default null
       */
      sharingFoldersRequiresOrganizerPermission: boolean | null;
  } | null;
  /**
   * Theme Id
   * @description The ID of a theme to apply to the shared drive. Cannot be set if colorRgb or backgroundImageFile are set.
   * @default null
   */
  themeId: string | null;
  /**
   * Use Domain Admin Access
   * @description If set to true, the request is issued as a domain administrator.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_DRIVE tool output.
 */
type GOOGLESUPER_UPDATE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * BackgroundImageFileResponse
       * @description The background image file of this shared drive.
       * @default null
       */
      backgroundImageFile: {
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
          /**
           * X Coordinate
           * @default null
           */
          xCoordinate: number | null;
          /**
           * Y Coordinate
           * @default null
           */
          yCoordinate: number | null;
      } | null;
      /**
       * Background Image Link
       * @description A short-lived link to this shared drive's background image.
       * @default null
       */
      backgroundImageLink: string | null;
      /**
       * DriveCapabilities
       * @description Capabilities the current user has on this shared drive.
       * @default null
       */
      capabilities: {
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission Restriction
           * @default null
           */
          canChangeCopyRequiresWriterPermissionRestriction: boolean | null;
          /**
           * Can Change Domain Users Only Restriction
           * @default null
           */
          canChangeDomainUsersOnlyRestriction: boolean | null;
          /**
           * Can Change Drive Background
           * @default null
           */
          canChangeDriveBackground: boolean | null;
          /**
           * Can Change Drive Members Only Restriction
           * @default null
           */
          canChangeDriveMembersOnlyRestriction: boolean | null;
          /**
           * Can Change Sharing Folders Requires Organizer Permission Restriction
           * @default null
           */
          canChangeSharingFoldersRequiresOrganizerPermissionRestriction: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Delete Drive
           * @default null
           */
          canDeleteDrive: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Manage Members
           * @default null
           */
          canManageMembers: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Rename Drive
           * @default null
           */
          canRenameDrive: boolean | null;
          /**
           * Can Reset Drive Restrictions
           * @default null
           */
          canResetDriveRestrictions: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
      } | null;
      /**
       * Color Rgb
       * @description The color of this shared drive as an RGB hex string.
       * @default null
       */
      colorRgb: string | null;
      /**
       * Created Time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The name of this shared drive.
       * @default null
       */
      name: string | null;
      /**
       * Org Unit Id
       * @description The organizational unit of this shared drive.
       * @default null
       */
      orgUnitId: string | null;
      /**
       * DriveRestrictions
       * @description A set of restrictions that apply to this shared drive.
       * @default null
       */
      restrictions: {
          /**
           * Admin Managed Restrictions
           * @description If true, requires administrative privileges to modify restrictions.
           * @default null
           */
          adminManagedRestrictions: boolean | null;
          /**
           * Copy Requires Writer Permission
           * @description If true, disables copy, print, or download options for readers and commenters.
           * @default null
           */
          copyRequiresWriterPermission: boolean | null;
          /**
           * Domain Users Only
           * @description If true, restricts access to users of the domain to which the shared drive belongs.
           * @default null
           */
          domainUsersOnly: boolean | null;
          /**
           * Drive Members Only
           * @description If true, restricts access to items inside the shared drive to its members.
           * @default null
           */
          driveMembersOnly: boolean | null;
          /**
           * Sharing Folders Requires Organizer Permission
           * @description If true, only users with the organizer role can share folders. If false, users with either the organizer or file organizer role can share folders.
           * @default null
           */
          sharingFoldersRequiresOrganizerPermission: boolean | null;
      } | null;
      /**
       * Theme Id
       * @description The ID of the theme from which the background image and color will be set.
       * @default null
       */
      themeId: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_EVENT tool input.
 */
type GOOGLESUPER_UPDATE_EVENT_INPUT = {
  /**
   * Attendees
   * @description List of attendee emails (strings).
   * @default null
   */
  attendees: string[] | null;
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar where the event resides. The value 'primary' targets the user's primary calendar.
   * @default primary
   */
  calendar_id: string;
  /**
   * Create Meeting Room
   * @description If true, a Google Meet link is created and added to the event. CRITICAL: As of 2024, this REQUIRES a paid Google Workspace account ($13+/month). Personal Gmail accounts will fail with 'Invalid conference type value' error. Solutions: 1) Upgrade to Workspace, 2) Use domain-wide delegation with Workspace user, 3) Use the new Google Meet REST API, or 4) Create events without conferences. See https://github.com/googleapis/google-api-nodejs-client/issues/3234
   * @default null
   */
  create_meeting_room: boolean | null;
  /**
   * Description
   * @description Description of the event. Can contain HTML. Optional.
   * @default null
   */
  description: string | null;
  /**
   * Event Type
   * @description Type of the event, immutable post-creation. Supported types: 'birthday' (all-day with annual recurrence), 'default' (regular event), 'focusTime' (focus-time event), 'outOfOffice' (out-of-office event), 'workingLocation' (working location event). Note: 'fromGmail' events cannot be created via API.
   * @default default
   * @enum {string}
   */
  eventType: "birthday" | "default" | "focusTime" | "outOfOffice" | "workingLocation";
  /**
   * Event Duration Hour
   * @description Number of hours (0-24). Increase by 1 here rather than passing 60 in `event_duration_minutes`
   * @default 0
   */
  event_duration_hour: number;
  /**
   * Event Duration Minutes
   * @description Duration in minutes (0-59 ONLY). NEVER use 60+ minutes - use event_duration_hour=1 instead. Maximum value is 59.
   * @default 30
   */
  event_duration_minutes: number;
  /**
   * Event Id
   * @description The unique identifier of the event to be updated.
   */
  event_id?: string;
  /**
   * Guests Can Invite Others
   * @description Whether attendees other than the organizer can invite others to the event.
   * @default null
   */
  guestsCanInviteOthers: boolean | null;
  /**
   * Guests Can See Other Guests
   * @description Whether attendees other than the organizer can see who the event's attendees are.
   * @default null
   */
  guestsCanSeeOtherGuests: boolean | null;
  /**
   * Guests Can Modify
   * @description If True, guests can modify the event.
   * @default false
   */
  guests_can_modify: boolean;
  /**
   * Location
   * @description Geographic location of the event as free-form text.
   * @default null
   */
  location: string | null;
  /**
   * Recurrence
   * @description List of RRULE, EXRULE, RDATE, EXDATE lines for recurring events. Supported frequencies are DAILY, WEEKLY, MONTHLY, YEARLY.
   * @default null
   */
  recurrence: string[] | null;
  /**
   * Send Updates
   * @description Defaults to True. Whether to send updates to the attendees.
   * @default null
   */
  send_updates: boolean | null;
  /**
   * Start Datetime
   * @description Naive date/time (YYYY-MM-DDTHH:MM:SS) with NO offsets or Z. e.g. '2025-01-16T13:00:00'
   */
  start_datetime?: string;
  /**
   * Summary
   * @description Summary (title) of the event.
   * @default null
   */
  summary: string | null;
  /**
   * Timezone
   * @description IANA timezone name (e.g., 'America/New_York'). Required if datetime is naive. If datetime includes timezone info (Z or offset), this field is optional and defaults to UTC.
   * @default null
   */
  timezone: string | null;
  /**
   * Transparency
   * @description 'opaque' (busy) or 'transparent' (available).
   * @default opaque
   * @enum {string}
   */
  transparency: "opaque" | "transparent";
  /**
   * Visibility
   * @description Event visibility: 'default', 'public', 'private', or 'confidential'.
   * @default default
   * @enum {string}
   */
  visibility: "default" | "public" | "private" | "confidential";
  /**
   * Working Location Properties
   * @description Working location properties for workingLocation events. Must include 'type' field with value: 'homeOffice', 'officeLocation', or 'customLocation'.
   * @default null
   */
  workingLocationProperties: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_EVENT tool output.
 */
type GOOGLESUPER_UPDATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete representation of the updated event resource from the Google Calendar API.
       */
      response_data: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_EXISTING_DOCUMENT tool input.
 */
type GOOGLESUPER_UPDATE_EXISTING_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the Google Docs document to be updated.
   */
  document_id?: string;
  /**
   * Edit Docs
   * @description Requests conforming to the Google Docs API `batchUpdate` method, where each item specifies an operation. For full details and more request types, see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate.
   *     For example, to insert text at the beginning of the document:
   *     [
   *       {
   *         "insertText": {
   *           "text": "This is a new paragraph.\n",
   *           "location": {
   *             "index": 1
   *           }
   *         }
   *       }
   *     ]
   *
   *     To delete a paragraph by its index:
   *     [{
   *       "deleteContentRange": {
   *         "range": {
   *           "startIndex": 1,
   *           "endIndex": 20
   *         }
   *       }
   *     }]
   *
   *     To replace all text:
   *     [{
   *       "replaceAllText": {
   *         "containsText": {
   *           "text": "old text"
   *         },
   *         "replaceText": "new text"
   *       }
   *     }]
   */
  editDocs?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_EXISTING_DOCUMENT tool output.
 */
type GOOGLESUPER_UPDATE_EXISTING_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description The full response data from the Google Docs API `batchUpdate` request, containing details about the applied edits and the state of the document.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Document Id
   * @description The unique identifier of the Google Docs document that was updated.
   * @default null
   */
  document_id: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_FILE_PUT tool input.
 */
type GOOGLESUPER_UPDATE_FILE_PUT_INPUT = {
  /**
   * Add Parents
   * @description A comma-separated list of parent IDs to add.
   * @default null
   */
  add_parents: string | null;
  /**
   * Description
   * @description A short description of the file.
   * @default null
   */
  description: string | null;
  /**
   * File Id
   * @description The ID of the file to update.
   */
  file_id?: string;
  /**
   * Keep Revision Forever
   * @description Whether to set this revision of the file to be kept forever. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
   * @default null
   */
  keep_revision_forever: boolean | null;
  /**
   * Mime Type
   * @description The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
   * @default null
   */
  mime_type: string | null;
  /**
   * Name
   * @description The name of the file.
   * @default null
   */
  name: string | null;
  /**
   * Ocr Language
   * @description A language hint for OCR processing during image import (ISO 639-1 code).
   * @default null
   */
  ocr_language: string | null;
  /**
   * Remove Parents
   * @description A comma-separated list of parent IDs to remove.
   * @default null
   */
  remove_parents: string | null;
  /**
   * Starred
   * @description Whether the user has starred the file.
   * @default null
   */
  starred: boolean | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. This parameter will always be true by default if the application is configured to support shared drives.
   * @default null
   */
  supports_all_drives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Whether the requesting application is using domain-wide delegation to access content belonging to a user in a different domain. This is only applicable to files with binary content in Google Drive.
   * @default null
   */
  use_domain_admin_access: boolean | null;
  /**
   * Viewers Can Copy Content
   * @description Whether viewers are prevented from copying content of the file.
   * @default null
   */
  viewers_can_copy_content: boolean | null;
  /**
   * Writers Can Share
   * @description Whether writers can share the document with other users.
   * @default null
   */
  writers_can_share: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_FILE_PUT tool output.
 */
type GOOGLESUPER_UPDATE_FILE_PUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      app_properties: {
          [key: string]: string;
      } | null;
      /**
       * Capabilities
       * @description Capabilities the current user has on this file. Each capability corresponds to a fine-grained permission that a user may have.
       * @default null
       */
      capabilities: {
          [key: string]: unknown;
      } | null;
      /**
       * Content Hints
       * @description Additional information about the content of the file. These fields are never populated in responses.
       * @default null
       */
      content_hints: {
          [key: string]: unknown;
      } | null;
      /**
       * Content Restrictions
       * @description Content restrictions for this file.
       * @default null
       */
      content_restrictions: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether users with only writer permission can modify the file's permissions. This field is now deprecated: use writersCanShare instead.
       * @default null
       */
      copy_requires_writer_permission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      created_time: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in. This is an alias for teamDriveId.
       * @default null
       */
      drive_id: string | null;
      /**
       * Export Links
       * @description Links for exporting Google Docs to specific formats.
       * @default null
       */
      export_links: {
          [key: string]: string;
      } | null;
      /**
       * File Extension
       * @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
       * @default null
       */
      file_extension: string | null;
      /**
       * Full File Extension
       * @description The full file extension extracted from the name field. May contain multiple concatenated extensions, suchas "tar.gz". This is only available for files with binary content in Google Drive.
       * @default null
       */
      full_file_extension: string | null;
      /**
       * Has Thumbnail
       * @description Whether this file has a thumbnail.
       * @default null
       */
      has_thumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description The ID of the head revision of the file.
       * @default null
       */
      head_revision_id: string | null;
      /**
       * Icon Link
       * @description A static, unauthenticated link to the file's icon.
       * @default null
       */
      icon_link: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Image Media Metadata
       * @description Metadata about image media. This will only be present for image types, and its contents will depend on the image type.
       * @default null
       */
      image_media_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Is App Authorized
       * @description Whether the file was created or opened by the requesting app.
       * @default null
       */
      is_app_authorized: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       */
      kind: string;
      /**
       * Label Info
       * @description Label information for the file.
       * @default null
       */
      label_info: {
          [key: string]: unknown;
      } | null;
      /**
       * Last Modifying User
       * @description The last user to modify the file.
       * @default null
       */
      last_modifying_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Link Share Metadata
       * @description Metadata about the shared link. This will only be present for files with link-sharing enabled.
       * @default null
       */
      link_share_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      md5_checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mime_type: string | null;
      /**
       * Modified By Me Time
       * @description The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modified_by_me_time: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modified_time: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.
       * @default null
       */
      original_filename: string | null;
      /**
       * Owned By Me
       * @description Whether the user owns the file.
       * @default null
       */
      owned_by_me: boolean | null;
      /**
       * Owners
       * @description The owners of the file. Currently, only certain legacy files may have more than one owner.
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Permission Ids
       * @description A list of permission IDs for users with access to this file.
       * @default null
       */
      permission_ids: string[] | null;
      /**
       * Permissions
       * @description The full list of permissions for the file. This is only available if the requesting user has sufficient permission to see the full list of permissions.
       * @default null
       */
      permissions: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
       * @default null
       */
      quota_bytes_used: string | null;
      /**
       * Resource Key
       * @description A key needed to access the item via a shared link.
       * @default null
       */
      resource_key: string | null;
      /**
       * Shared
       * @description Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
       * @default null
       */
      shared_with_me_time: string | null;
      /**
       * Sharing User
       * @description The user who shared the file with the requesting user, if applicable.
       * @default null
       */
      sharing_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Shortcut Details
       * @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
       * @default null
       */
      shortcut_details: {
          [key: string]: unknown;
      } | null;
      /**
       * Size
       * @description The size of the file's content in bytes. This is applicable to files with binary content in Google Drive and Google Docs files.
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
       * @default null
       */
      spaces: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Team Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      team_drive_id: string | null;
      /**
       * Thumbnail Link
       * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.
       * @default null
       */
      thumbnail_link: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: number | null;
      /**
       * Video Media Metadata
       * @description Metadata about video media. This will only be present for video types.
       * @default null
       */
      video_media_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Viewed By Me
       * @description Whether the file has been viewed by this user.
       * @default null
       */
      viewed_by_me: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewed_by_me_time: string | null;
      /**
       * Viewers Can Copy Content
       * @description Whether viewers are prevented from copying content of the file made available for offline access.
       * @default null
       */
      viewers_can_copy_content: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
       * @default null
       */
      web_content_link: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      web_view_link: string | null;
      /**
       * Writers Can Share
       * @description Whether writers can share the document with other users. This field is now deprecated: users should use the capabilities field on a file. The capabilities field can tell you if a user can share a file.
       * @default null
       */
      writers_can_share: boolean | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_FILE_REVISION_METADATA tool input.
 */
type GOOGLESUPER_UPDATE_FILE_REVISION_METADATA_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Keep Forever
   * @description Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.
   * @default null
   */
  keep_forever: boolean | null;
  /**
   * Publish Auto
   * @description Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.
   * @default null
   */
  publishAuto: boolean | null;
  /**
   * Published
   * @description Whether this revision is published. This is only applicable to Docs Editors files.
   * @default null
   */
  published: boolean | null;
  /**
   * Published Outside Domain
   * @description Whether this revision is published outside the domain. This is only applicable to Docs Editors files.
   * @default null
   */
  publishedOutsideDomain: boolean | null;
  /**
   * Revision Id
   * @description The ID of the revision.
   */
  revision_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_FILE_REVISION_METADATA tool output.
 */
type GOOGLESUPER_UPDATE_FILE_REVISION_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Export Links
       * @description Links for exporting Docs Editors files to specific formats.
       * @default null
       */
      exportLinks: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description The ID of the revision.
       * @default null
       */
      id: string | null;
      /**
       * Keep Forever
       * @description Whether to keep this revision forever.
       * @default null
       */
      keepForever: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
       * @default null
       */
      kind: string | null;
      /**
       * User
       * @description The last user to modify this revision.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum of the revision's content.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the revision.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified Time
       * @description The last time the revision was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Original Filename
       * @description The original filename used to create this revision.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Publish Auto
       * @description Whether subsequent revisions will be automatically republished.
       * @default null
       */
      publishAuto: boolean | null;
      /**
       * Published
       * @description Whether this revision is published. This is only applicable to Docs Editors files.
       * @default null
       */
      published: boolean | null;
      /**
       * Published Link
       * @description A link to the published revision.
       * @default null
       */
      publishedLink: string | null;
      /**
       * Published Outside Domain
       * @description Whether this revision is published outside the domain.
       * @default null
       */
      publishedOutsideDomain: boolean | null;
      /**
       * Size
       * @description The size of the revision's content in bytes.
       * @default null
       */
      size: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_MEDIA_ITEM tool input.
 */
type GOOGLESUPER_UPDATE_MEDIA_ITEM_INPUT = {
  /**
   * Description
   * @description New description for the media item. Must be shorter than 1000 characters.
   * @default null
   */
  description: string | null;
  /**
   * Media Item Id
   * @description Identifier of the media item to update
   */
  mediaItemId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_MEDIA_ITEM tool output.
 */
type GOOGLESUPER_UPDATE_MEDIA_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Item
       * @description The updated media item data
       */
      mediaItem: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_PERMISSION tool input.
 */
type GOOGLESUPER_UPDATE_PERMISSION_INPUT = {
  /**
   * Enforce Expansive Access
   * @description Whether the request should enforce expansive access rules. This field is deprecated, it is recommended to use `permissionDetails` instead.
   * @default false
   */
  enforceExpansiveAccess: boolean | null;
  /**
   * File Id
   * @description The ID of the file or shared drive.
   */
  fileId?: string;
  /**
   * Permission
   * @description The permission resource to update. Only 'role' and 'expirationTime' can be updated.
   */
  permission?: {
      /**
       * Expiration Time
       * Format: date-time
       * @description The time at which this permission will expire (RFC 3339 date-time).
       * @default null
       */
      expirationTime: string | null;
      /**
       * Role
       * @description The role granted by this permission.
       * @default null
       */
      role: string | null;
  };
  /**
   * Permission Id
   * @description The ID of the permission.
   */
  permissionId?: string;
  /**
   * Remove Expiration
   * @description Whether to remove the expiration date.
   * @default false
   */
  removeExpiration: boolean | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default false
   */
  supportsAllDrives: boolean | null;
  /**
   * Transfer Ownership
   * @description Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect when set to true.
   * @default false
   */
  transferOwnership: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default false
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_PERMISSION tool output.
 */
type GOOGLESUPER_UPDATE_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the permission has been deleted. This is always false for permissions that haven't been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description The display name of the user or group to which this permission refers.
       * @default null
       */
      displayName: string | null;
      /**
       * Domain
       * @description The domain to which this permission refers.
       * @default null
       */
      domain: string | null;
      /**
       * Email Address
       * @description The email address of the user or group to which this permission refers.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Expiration Time
       * Format: date-time
       * @description The time at which this permission will expire (RFC 3339 date-time).
       * @default null
       */
      expirationTime: string | null;
      /**
       * Id
       * @description The ID of the permission.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.
       * @default drive#permission
       */
      kind: string;
      /**
       * Pending Owner
       * @description Whether the account is pending owner. Output only.
       * @default null
       */
      pendingOwner: boolean | null;
      /**
       * Permission Details
       * @description Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
       * @default null
       */
      permissionDetails: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Photo Link
       * @description A link to the user's profile photo, if available.
       * @default null
       */
      photoLink: string | null;
      /**
       * Role
       * @description The role granted by this permission.
       */
      role: string;
      /**
       * Type
       * @description The type of the grantee.
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_REPLY tool input.
 */
type GOOGLESUPER_UPDATE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Content
   * @description The new plain text content of the reply.
   */
  content?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response.
   */
  fields?: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Reply Id
   * @description The ID of the reply.
   */
  reply_id?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_REPLY tool output.
 */
type GOOGLESUPER_UPDATE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description The action the reply performed to the parent comment. Valid values are: `resolve`, `reopen`.
       * @default null
       */
      action: string | null;
      /**
       * Author
       * @description The user who created the reply.
       * @default null
       */
      author: {
          [key: string]: unknown;
      } | null;
      /**
       * Content
       * @description The plain text content of the reply.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time the reply was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the reply has been deleted. A deleted reply has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The HTML content of the reply.
       * @default null
       */
      htmlContent: string | null;
      /**
       * Id
       * @description The ID of the reply.
       * @default null
       */
      id: string | null;
      /**
       * Modified Time
       * @description The last time the reply was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_SHEET_PROPERTIES tool input.
 */
type GOOGLESUPER_UPDATE_SHEET_PROPERTIES_INPUT = {
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet containing the sheet to update.
   */
  spreadsheetId?: string;
  /**
   * Update Sheet Properties
   * @description The details of the sheet properties to update.
   */
  updateSheetProperties?: {
      /**
       * Fields
       * @description A comma-separated string specifying which properties to update. Uses FieldMask format. For example, to update the title and index, use "title,index". To update all mutable sheet properties, use "*".
       */
      fields: string;
      /**
       * Properties
       * @description The properties to update.
       */
      properties: {
          /**
           * GridProperties
           * @description Properties of a grid sheet.
           * @default null
           */
          gridProperties: {
              /**
               * Column Count
               * @description The number of columns in the sheet.
               * @default null
               */
              columnCount: number | null;
              /**
               * Frozen Column Count
               * @description The number of frozen columns.
               * @default null
               */
              frozenColumnCount: number | null;
              /**
               * Frozen Row Count
               * @description The number of frozen rows.
               * @default null
               */
              frozenRowCount: number | null;
              /**
               * Hide Gridlines
               * @description True if gridlines are hidden.
               * @default null
               */
              hideGridlines: boolean | null;
              /**
               * Right To Left
               * @description True if the sheet is an RTL sheet.
               * @default null
               */
              rightToLeft: boolean | null;
              /**
               * Row Count
               * @description The number of rows in the sheet.
               * @default null
               */
              rowCount: number | null;
          } | null;
          /**
           * Hidden
           * @description Whether the sheet should be hidden (true) or visible (false).
           * @default null
           */
          hidden: boolean | null;
          /**
           * Index
           * @description The new zero-based index of the sheet.
           * @default null
           */
          index: number | null;
          /**
           * Sheet Id
           * @description The ID of the sheet to update.
           */
          sheetId: number;
          /**
           * ColorStyle
           * @description The new tab color for the sheet.
           * @default null
           */
          tabColorStyle: {
              /**
               * Color
               * @description Represents a color using RGB values.
               * @default null
               */
              rgbColor: {
                  /**
                   * Alpha
                   * @description The alpha component of the color, between 0.0 and 1.0.
                   * @default null
                   */
                  alpha: number | null;
                  /**
                   * Blue
                   * @description The blue component of the color, between 0.0 and 1.0.
                   * @default null
                   */
                  blue: number | null;
                  /**
                   * Green
                   * @description The green component of the color, between 0.0 and 1.0.
                   * @default null
                   */
                  green: number | null;
                  /**
                   * Red
                   * @description The red component of the color, between 0.0 and 1.0.
                   * @default null
                   */
                  red: number | null;
              } | null;
              /**
               * Theme Color
               * @description Represents a theme color type.
               * @default null
               */
              themeColor: string | null;
          } | null;
          /**
           * Title
           * @description The new title of the sheet.
           * @default null
           */
          title: string | null;
      };
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_SHEET_PROPERTIES tool output.
 */
type GOOGLESUPER_UPDATE_SHEET_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies, one for each request in the batchUpdate.
       */
      replies: {
          [key: string]: {
              /**
               * SheetProperties
               * @description The full SheetProperties object after the update.
               */
              properties: {
                  /**
                   * @description Properties of a grid sheet.
                   * @default null
                   */
                  gridProperties: {
                      /**
                       * Columncount
                       * @description The number of columns in the sheet.
                       * @default null
                       */
                      columnCount: number | null;
                      /**
                       * Frozencolumncount
                       * @description The number of frozen columns.
                       * @default null
                       */
                      frozenColumnCount: number | null;
                      /**
                       * Frozenrowcount
                       * @description The number of frozen rows.
                       * @default null
                       */
                      frozenRowCount: number | null;
                      /**
                       * Hidegridlines
                       * @description True if gridlines are hidden.
                       * @default null
                       */
                      hideGridlines: boolean | null;
                      /**
                       * Righttoleft
                       * @description True if the sheet is an RTL sheet.
                       * @default null
                       */
                      rightToLeft: boolean | null;
                      /**
                       * Rowcount
                       * @description The number of rows in the sheet.
                       * @default null
                       */
                      rowCount: number | null;
                  } | null;
                  /**
                   * Hidden
                   * @description Whether the sheet should be hidden (true) or visible (false).
                   * @default null
                   */
                  hidden: boolean | null;
                  /**
                   * Index
                   * @description The new zero-based index of the sheet.
                   * @default null
                   */
                  index: number | null;
                  /**
                   * Sheetid
                   * @description The ID of the sheet to update.
                   */
                  sheetId: number;
                  /**
                   * @description The new tab color for the sheet.
                   * @default null
                   */
                  tabColorStyle: {
                      /**
                       * @description Represents a color using RGB values.
                       * @default null
                       */
                      rgbColor: {
                          /**
                           * Alpha
                           * @description The alpha component of the color, between 0.0 and 1.0.
                           * @default null
                           */
                          alpha: number | null;
                          /**
                           * Blue
                           * @description The blue component of the color, between 0.0 and 1.0.
                           * @default null
                           */
                          blue: number | null;
                          /**
                           * Green
                           * @description The green component of the color, between 0.0 and 1.0.
                           * @default null
                           */
                          green: number | null;
                          /**
                           * Red
                           * @description The red component of the color, between 0.0 and 1.0.
                           * @default null
                           */
                          red: number | null;
                      } | null;
                      /**
                       * Themecolor
                       * @description Represents a theme color type.
                       * @default null
                       */
                      themeColor: string | null;
                  } | null;
                  /**
                   * Title
                   * @description The new title of the sheet.
                   * @default null
                   */
                  title: string | null;
              };
          };
      }[];
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet that was updated.
       */
      spreadsheetId: string;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_SPACE tool input.
 */
type GOOGLESUPER_UPDATE_SPACE_INPUT = {
  /**
   * SpaceConfig
   * @description Configuration pertaining to the meeting space.
   * @default null
   */
  config: {
      /**
       * AccessType
       * @description Access type of the meeting space.
       * @default null
       * @enum {string|null}
       */
      accessType: "OPEN" | "TRUSTED" | "RESTRICTED" | null;
      /**
       * ArtifactConfig
       * @description Configuration pertaining to the auto-generated artifacts.
       * @default null
       */
      artifactConfig: {
          /**
           * RecordingConfig
           * @description Configuration for recording.
           * @default null
           */
          recordingConfig: {
              /**
               * AutoGenerationType
               * @description Defines whether a meeting space is automatically recorded.
               * @default null
               * @enum {string|null}
               */
              autoRecordingGeneration: "ON" | "OFF" | null;
          } | null;
          /**
           * SmartNotesConfig
           * @description Configuration for auto-smart-notes.
           * @default null
           */
          smartNotesConfig: {
              /**
               * AutoGenerationType
               * @description Defines whether to automatically generate a summary and recap of the meeting.
               * @default null
               * @enum {string|null}
               */
              autoSmartNotesGeneration: "ON" | "OFF" | null;
          } | null;
          /**
           * TranscriptionConfig
           * @description Configuration for auto-transcript.
           * @default null
           */
          transcriptionConfig: {
              /**
               * AutoGenerationType
               * @description Defines whether the content of a meeting is automatically transcribed.
               * @default null
               * @enum {string|null}
               */
              autoTranscriptionGeneration: "ON" | "OFF" | null;
          } | null;
      } | null;
      /**
       * AttendanceReportGenerationType
       * @description Whether attendance report is enabled for the meeting space.
       * @default null
       * @enum {string|null}
       */
      attendanceReportGenerationType: "GENERATE_REPORT" | "DO_NOT_GENERATE" | null;
      /**
       * EntryPointAccess
       * @description Defines the entry points that can be used to join meetings.
       * @default null
       * @enum {string|null}
       */
      entryPointAccess: "ALL" | "CREATOR_APP_ONLY" | null;
      /**
       * ModerationMode
       * @description The pre-configured moderation mode for the Meeting.
       * @default null
       * @enum {string|null}
       */
      moderation: "OFF" | "ON" | null;
      /**
       * ModerationRestrictions
       * @description When moderation.ON, these restrictions go into effect.
       * @default null
       */
      moderationRestrictions: {
          /**
           * RestrictionType
           * @description Defines who has permission to send chat messages.
           * @default null
           * @enum {string|null}
           */
          chatRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
          /**
           * DefaultJoinAsViewerType
           * @description Defines whether to restrict the default role assigned to users as viewer.
           * @default null
           * @enum {string|null}
           */
          defaultJoinAsViewerType: "ON" | "OFF" | null;
          /**
           * RestrictionType
           * @description Defines who has permission to share their screen.
           * @default null
           * @enum {string|null}
           */
          presentRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
          /**
           * RestrictionType
           * @description Defines who has permission to send reactions.
           * @default null
           * @enum {string|null}
           */
          reactionRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
      } | null;
  } | null;
  /**
   * Name
   * @description Immutable. Resource name of the space. Format: `spaces/{space}`.
   */
  name?: string;
  /**
   * Update Mask
   * @description Optional. Field mask used to specify the fields to be updated. Comma-separated list of fully qualified field names. Example: "config.accessType,config.moderationRestrictions.chatRestriction". Use "*" to update all fields.
   * @default null
   */
  updateMask: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_SPACE tool output.
 */
type GOOGLESUPER_UPDATE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ActiveConference
       * @description Active conference, if it exists.
       * @default null
       */
      activeConference: {
          /**
           * Conference Record
           * @description Reference to 'ConferenceRecord' resource.
           * @default null
           */
          conferenceRecord: string | null;
      } | null;
      /**
       * SpaceConfig
       * @description Configuration pertaining to the meeting space.
       * @default null
       */
      config: {
          /**
           * AccessType
           * @description Access type of the meeting space.
           * @default null
           * @enum {string|null}
           */
          accessType: "OPEN" | "TRUSTED" | "RESTRICTED" | null;
          /**
           * ArtifactConfig
           * @description Configuration pertaining to the auto-generated artifacts.
           * @default null
           */
          artifactConfig: {
              /**
               * RecordingConfig
               * @description Configuration for recording.
               * @default null
               */
              recordingConfig: {
                  /**
                   * AutoGenerationType
                   * @description Defines whether a meeting space is automatically recorded.
                   * @default null
                   * @enum {string|null}
                   */
                  autoRecordingGeneration: "ON" | "OFF" | null;
              } | null;
              /**
               * SmartNotesConfig
               * @description Configuration for auto-smart-notes.
               * @default null
               */
              smartNotesConfig: {
                  /**
                   * AutoGenerationType
                   * @description Defines whether to automatically generate a summary and recap of the meeting.
                   * @default null
                   * @enum {string|null}
                   */
                  autoSmartNotesGeneration: "ON" | "OFF" | null;
              } | null;
              /**
               * TranscriptionConfig
               * @description Configuration for auto-transcript.
               * @default null
               */
              transcriptionConfig: {
                  /**
                   * AutoGenerationType
                   * @description Defines whether the content of a meeting is automatically transcribed.
                   * @default null
                   * @enum {string|null}
                   */
                  autoTranscriptionGeneration: "ON" | "OFF" | null;
              } | null;
          } | null;
          /**
           * AttendanceReportGenerationType
           * @description Whether attendance report is enabled for the meeting space.
           * @default null
           * @enum {string|null}
           */
          attendanceReportGenerationType: "GENERATE_REPORT" | "DO_NOT_GENERATE" | null;
          /**
           * EntryPointAccess
           * @description Defines the entry points that can be used to join meetings.
           * @default null
           * @enum {string|null}
           */
          entryPointAccess: "ALL" | "CREATOR_APP_ONLY" | null;
          /**
           * ModerationMode
           * @description The pre-configured moderation mode for the Meeting.
           * @default null
           * @enum {string|null}
           */
          moderation: "OFF" | "ON" | null;
          /**
           * ModerationRestrictions
           * @description When moderation.ON, these restrictions go into effect.
           * @default null
           */
          moderationRestrictions: {
              /**
               * RestrictionType
               * @description Defines who has permission to send chat messages.
               * @default null
               * @enum {string|null}
               */
              chatRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
              /**
               * DefaultJoinAsViewerType
               * @description Defines whether to restrict the default role assigned to users as viewer.
               * @default null
               * @enum {string|null}
               */
              defaultJoinAsViewerType: "ON" | "OFF" | null;
              /**
               * RestrictionType
               * @description Defines who has permission to share their screen.
               * @default null
               * @enum {string|null}
               */
              presentRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
              /**
               * RestrictionType
               * @description Defines who has permission to send reactions.
               * @default null
               * @enum {string|null}
               */
              reactionRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
          } | null;
      } | null;
      /**
       * Meeting Code
       * @description Type friendly unique string used to join the meeting.
       * @default null
       */
      meetingCode: string | null;
      /**
       * Meeting Uri
       * @description URI used to join meetings.
       * @default null
       */
      meetingUri: string | null;
      /**
       * Name
       * @description Resource name of the space.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES tool input.
 */
type GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES_INPUT = {
  /**
   * Fields
   * @description The fields that should be updated. Use '*' for all fields in 'properties' or a comma-separated list (e.g., 'title,locale,iterativeCalculationSettings.maxIterations'). The root 'properties' is implied.
   */
  fields?: string;
  /**
   * Properties
   * @description The properties to update. At least one field within properties must be set.
   */
  properties?: {
      /**
       * AutoRecalcEnum
       * @description The recalculation interval for the spreadsheet.
       * @default null
       * @enum {string|null}
       */
      autoRecalc: "ON_CHANGE" | "MINUTE" | "HOUR" | null;
      /**
       * CellFormat
       * @description The default cell format for the entire spreadsheet.
       * @default null
       */
      defaultFormat: {
          /**
           * Background Color Style
           * @description The background color style of the cell. Represents a ColorStyle object.
           * @default null
           */
          backgroundColorStyle: {
              [key: string]: unknown;
          } | null;
          /**
           * Horizontal Alignment
           * @description The horizontal alignment of the cell content. E.g., 'LEFT', 'CENTER', 'RIGHT'.
           * @default null
           */
          horizontalAlignment: string | null;
          /**
           * Text Format
           * @description The text format of the cell. Represents a TextFormat object.
           * @default null
           */
          textFormat: {
              [key: string]: unknown;
          } | null;
          /**
           * Vertical Alignment
           * @description The vertical alignment of the cell content. E.g., 'TOP', 'MIDDLE', 'BOTTOM'.
           * @default null
           */
          verticalAlignment: string | null;
          /**
           * Wrap Strategy
           * @description The wrap strategy of the cell content. E.g., 'OVERFLOW_CELL', 'LEGACY_WRAP', 'CLIP', 'WRAP'.
           * @default null
           */
          wrapStrategy: string | null;
      } | null;
      /**
       * IterativeCalculationSettings
       * @description Settings for iterative calculation.
       * @default null
       */
      iterativeCalculationSettings: {
          /**
           * Convergence Threshold
           * @description The threshold for convergence in iterative calculation.
           * @default null
           */
          convergenceThreshold: number | null;
          /**
           * Max Iterations
           * @description The maximum number of iterations for iterative calculation.
           * @default null
           */
          maxIterations: number | null;
      } | null;
      /**
       * Locale
       * @description The locale of the spreadsheet in BCP 47 format.
       * @default null
       */
      locale: string | null;
      /**
       * SpreadsheetTheme
       * @description The theme of the spreadsheet.
       * @default null
       */
      spreadsheetTheme: {
          /**
           * Primary Font Family
           * @description The primary font family of the spreadsheet theme.
           * @default null
           */
          primaryFontFamily: string | null;
          /**
           * Theme Colors
           * @description The theme colors of the spreadsheet. This is a list of ThemeColorPair.
           * @default null
           */
          themeColors: {
              [key: string]: unknown;
          }[] | null;
      } | null;
      /**
       * Time Zone
       * @description The time zone of the spreadsheet in CLDR format (e.g., 'America/New_York').
       * @default null
       */
      timeZone: string | null;
      /**
       * Title
       * @description The title of the spreadsheet.
       * @default null
       */
      title: string | null;
  };
  /**
   * Spreadsheet Id
   * @description The ID of the spreadsheet to update.
   */
  spreadsheetId?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES tool output.
 */
type GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description A list of replies to the batch update requests. For this action, it will contain one reply corresponding to the updateSpreadsheetProperties request.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the updated spreadsheet.
       */
      spreadsheetId: string;
      /**
       * Updated Spreadsheet
       * @description The spreadsheet resource with the updated properties.
       * @default null
       */
      updatedSpreadsheet: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_TABLE_ROW_STYLE tool input.
 */
type GOOGLESUPER_UPDATE_TABLE_ROW_STYLE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /** Update Table Row Style */
  updateTableRowStyle?: {
      /**
       * Fields
       * @description The fields that should be updated. At least one field must be specified. The root tableRowStyle is implied and should not be specified. A single "*" can be used as short-hand for listing every field. For example to update the minimum row height, set fields to "minRowHeight".
       */
      fields: string;
      /**
       * Row Indices
       * @description The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.
       * @default null
       */
      rowIndices: number[] | null;
      /**
       * Table Row Style
       * @description The styles to be set on the rows.
       */
      tableRowStyle: {
          /**
           * Dimension
           * @description The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this value in order to show all the content in the row's cells.
           * @default null
           */
          minRowHeight: {
              /**
               * Magnitude
               * @description The magnitude.
               * @default null
               */
              magnitude: number | null;
              /**
               * Unit
               * @description The units for magnitude.
               * @default null
               * @enum {string|null}
               */
              unit: "PT" | "UNIT_UNSPECIFIED" | null;
          } | null;
          /**
           * Prevent Overflow
           * @description Whether the row cannot overflow across page or column boundaries.
           * @default null
           */
          preventOverflow: boolean | null;
          /**
           * Table Header
           * @description Whether the row is a table header.
           * @default null
           */
          tableHeader: boolean | null;
      };
      /**
       * Table Start Location
       * @description The location where the table starts in the document.
       */
      tableStartLocation: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units.
           * @default null
           */
          index: number | null;
          /**
           * Segment Id
           * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Tab Id
           * @description The tab that the location is in. When omitted, the request is applied to the first tab.
           * @default null
           */
          tabId: string | null;
      };
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_TABLE_ROW_STYLE tool output.
 */
type GOOGLESUPER_UPDATE_TABLE_ROW_STYLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document.
       * @default null
       */
      documentId: string | null;
      /**
       * Reply
       * @description A map of responses to the batchUpdate request, keyed by request ID.
       * @default null
       */
      reply: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_TASK tool input.
 */
type GOOGLESUPER_UPDATE_TASK_INPUT = {
  /**
   * Due
   * @description Due date of the task (RFC 3339 timestamp).
   * @default null
   */
  due: string | null;
  /**
   * Notes
   * @description Notes describing the task.
   * @default null
   */
  notes: string | null;
  /**
   * Status
   * @description Status of the task ("needsAction" or "completed").
   * @default null
   */
  status: string | null;
  /**
   * Task
   * @description Task identifier.
   */
  task?: string;
  /**
   * Tasklist
   * @description Task list identifier.
   */
  tasklist?: string;
  /**
   * Title
   * @description Title of the task.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_TASK tool output.
 */
type GOOGLESUPER_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed
       * @description Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
       * @default null
       */
      completed: string | null;
      /**
       * Deleted
       * @description Flag indicating whether the task has been deleted. The default is False.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Due
       * @description Due date of the task (as a RFC 3339 timestamp).
       * @default null
       */
      due: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Hidden
       * @description Flag indicating whether the task is hidden. The default is False.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Task identifier.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource. This is always "tasks#task".
       * @default tasks#task
       */
      kind: string | null;
      /**
       * Links
       * @description Collection of links. This collection is read-only.
       * @default null
       */
      links: {
          /**
           * Description
           * @description Description of the link.
           * @default null
           */
          description: string | null;
          /**
           * Link
           * @description The URL.
           * @default null
           */
          link: string | null;
          /**
           * Type
           * @description Type of the link.
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Notes
       * @description Notes describing the task. Maximum length allowed: 8192 characters.
       * @default null
       */
      notes: string | null;
      /**
       * Parent
       * @description Parent task identifier. This field is omitted if it is a top-level task.
       * @default null
       */
      parent: string | null;
      /**
       * Position
       * @description String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If the parent task is specified then the task is inserted at the top of the subtasks list (before the first subtask). If the task is a top-level task then the task is inserted at the top of the top-level tasks list (before the first top-level task).
       * @default null
       */
      position: string | null;
      /**
       * Self Link
       * @description URL pointing to this task. Used to retrieve, update, or delete this task.
       * @default null
       */
      selfLink: string | null;
      /**
       * Status
       * @description Status of the task. This is either "needsAction" or "completed".
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description Title of the task. Maximum length allowed: 1024 characters.
       * @default null
       */
      title: string | null;
      /**
       * Updated
       * @description Last modification time of the task (as a RFC 3339 timestamp).
       * @default null
       */
      updated: string | null;
      /**
       * Web View Link
       * @description An absolute link to the task in the Google Tasks Web UI.
       * @default null
       */
      webViewLink: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_TASK_LIST tool input.
 */
type GOOGLESUPER_UPDATE_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description Task list identifier.
   */
  tasklist_id?: string;
  /**
   * Title
   * @description Title of the task list. Maximum length allowed: 1024 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPDATE_TASK_LIST tool output.
 */
type GOOGLESUPER_UPDATE_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description Task list identifier.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource. This is always "tasks#taskList".
       * @default null
       */
      kind: string | null;
      /**
       * Self Link
       * @description URL pointing to this task list. Used to retrieve, update, or delete this task list.
       * @default null
       */
      selfLink: string | null;
      /**
       * Title
       * @description Title of the task list.
       * @default null
       */
      title: string | null;
      /**
       * Updated
       * @description Last modification time of the task list (as a RFC 3339 timestamp).
       * @default null
       */
      updated: string | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPLOAD_FILE tool input.
 */
type GOOGLESUPER_UPLOAD_FILE_INPUT = {
  /**
   * FileUploadable
   * @description File to upload to Google Drive (max 5MB), identified by its name or path.
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Folder To Upload To
   * @description Optional ID of the target Google Drive folder; can be obtained using 'Find Folder' or similar actions.
   * @default null
   */
  folder_to_upload_to: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPLOAD_FILE tool output.
 */
type GOOGLESUPER_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      appProperties: {
          [key: string]: string;
      } | null;
      /**
       * Capabilities
       * @description Capabilities the current user has on this file.
       * @default null
       */
      capabilities: {
          /**
           * Can Accept Ownership
           * @default null
           */
          canAcceptOwnership: boolean | null;
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Add Folder From Another Drive
           * @default null
           */
          canAddFolderFromAnotherDrive: boolean | null;
          /**
           * Can Add My Drive Parent
           * @default null
           */
          canAddMyDriveParent: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission
           * @default null
           */
          canChangeCopyRequiresWriterPermission: boolean | null;
          /**
           * Can Change Security Update Enabled
           * @default null
           */
          canChangeSecurityUpdateEnabled: boolean | null;
          /**
           * Can Change Viewers Can Copy Content
           * @default null
           */
          canChangeViewersCanCopyContent: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Disable Inherited Permissions
           * @default null
           */
          canDisableInheritedPermissions: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can Enable Inherited Permissions
           * @default null
           */
          canEnableInheritedPermissions: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Modify Content
           * @default null
           */
          canModifyContent: boolean | null;
          /**
           * Can Modify Content Restriction
           * @default null
           */
          canModifyContentRestriction: boolean | null;
          /**
           * Can Modify Editor Content Restriction
           * @default null
           */
          canModifyEditorContentRestriction: boolean | null;
          /**
           * Can Modify Labels
           * @default null
           */
          canModifyLabels: boolean | null;
          /**
           * Can Modify Owner Content Restriction
           * @default null
           */
          canModifyOwnerContentRestriction: boolean | null;
          /**
           * Can Move Children Out Of Drive
           * @default null
           */
          canMoveChildrenOutOfDrive: boolean | null;
          /**
           * Can Move Children Out Of Team Drive
           * @default null
           */
          canMoveChildrenOutOfTeamDrive: boolean | null;
          /**
           * Can Move Children Within Drive
           * @default null
           */
          canMoveChildrenWithinDrive: boolean | null;
          /**
           * Can Move Children Within Team Drive
           * @default null
           */
          canMoveChildrenWithinTeamDrive: boolean | null;
          /**
           * Can Move Item Into Team Drive
           * @default null
           */
          canMoveItemIntoTeamDrive: boolean | null;
          /**
           * Can Move Item Out Of Drive
           * @default null
           */
          canMoveItemOutOfDrive: boolean | null;
          /**
           * Can Move Item Out Of Team Drive
           * @default null
           */
          canMoveItemOutOfTeamDrive: boolean | null;
          /**
           * Can Move Item Within Drive
           * @default null
           */
          canMoveItemWithinDrive: boolean | null;
          /**
           * Can Move Item Within Team Drive
           * @default null
           */
          canMoveItemWithinTeamDrive: boolean | null;
          /**
           * Can Move Team Drive Item
           * @default null
           */
          canMoveTeamDriveItem: boolean | null;
          /**
           * Can Read Drive
           * @default null
           */
          canReadDrive: boolean | null;
          /**
           * Can Read Labels
           * @default null
           */
          canReadLabels: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Read Team Drive
           * @default null
           */
          canReadTeamDrive: boolean | null;
          /**
           * Can Remove Children
           * @default null
           */
          canRemoveChildren: boolean | null;
          /**
           * Can Remove Content Restriction
           * @default null
           */
          canRemoveContentRestriction: boolean | null;
          /**
           * Can Remove My Drive Parent
           * @default null
           */
          canRemoveMyDriveParent: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash
           * @default null
           */
          canTrash: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
          /**
           * Can Untrash
           * @default null
           */
          canUntrash: boolean | null;
      } | null;
      /**
       * ContentHints
       * @description Additional information about the content of the file. This is only available for files with binary content in Google Drive.
       * @default null
       */
      contentHints: {
          /**
           * Indexable Text
           * @description Text to be indexed for the file to improve searchability.
           * @default null
           */
          indexableText: string | null;
          /**
           * Thumbnail
           * @description A thumbnail for the file.
           * @default null
           */
          thumbnail: {
              /**
               * Image
               * @description The URL-safe Base64 encoded image data.
               * @default null
               */
              image: string | null;
              /**
               * Mime Type
               * @description The MIME type of the thumbnail.
               * @default null
               */
              mimeType: string | null;
          } | null;
      } | null;
      /**
       * Content Restrictions
       * @description Content restrictions for this file.
       * @default null
       */
      contentRestrictions: {
          /**
           * Read Only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Reason
           * @default null
           */
          reason: string | null;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether to require the user to be a writer on the item in order to copy content.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      driveId: string | null;
      /**
       * Explicitly Trashed
       * @description Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
       * @default null
       */
      explicitlyTrashed: boolean | null;
      /**
       * Export Links
       * @description Links for exporting Google Docs to specific formats.
       * @default null
       */
      exportLinks: {
          [key: string]: string;
      } | null;
      /**
       * File Extension
       * @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
       * @default null
       */
      fileExtension: string | null;
      /**
       * Folder Color Rgb
       * @description The color for a folder as an RGB hex string. E.g. #4f8df3
       * @default null
       */
      folderColorRgb: string | null;
      /**
       * Full File Extension
       * @description The full file extension extracted from the name field. May contain multiple concatenated extensions, such as 'tar.gz'.
       * @default null
       */
      fullFileExtension: string | null;
      /**
       * Has Augmented Permissions
       * @default null
       */
      hasAugmentedPermissions: boolean | null;
      /**
       * Has Thumbnail
       * @description Whether this file has a thumbnail.
       * @default null
       */
      hasThumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description The ID of the head revision of the file.
       * @default null
       */
      headRevisionId: string | null;
      /**
       * Icon Link
       * @description A static, unauthenticated link to the file's icon.
       * @default null
       */
      iconLink: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * ImageMediaMetadata
       * @description Additional metadata about image media, if available.
       * @default null
       */
      imageMediaMetadata: {
          /**
           * Aperture
           * @description The aperture used to create the image.
           * @default null
           */
          aperture: number | null;
          /**
           * Camera Make
           * @description The make of the camera used to create the image.
           * @default null
           */
          cameraMake: string | null;
          /**
           * Camera Model
           * @description The model of the camera used to create the image.
           * @default null
           */
          cameraModel: string | null;
          /**
           * Color Space
           * @description The color space of the image.
           * @default null
           */
          colorSpace: string | null;
          /**
           * Exposure Bias
           * @description The exposure bias of the image.
           * @default null
           */
          exposureBias: number | null;
          /**
           * Exposure Mode
           * @description The exposure mode used to create the image.
           * @default null
           */
          exposureMode: string | null;
          /**
           * Exposure Time
           * @description The exposure time used to create the image.
           * @default null
           */
          exposureTime: number | null;
          /**
           * Flash Used
           * @description Whether a flash was used to create the image.
           * @default null
           */
          flashUsed: boolean | null;
          /**
           * Focal Length
           * @description The focal length used to create the image.
           * @default null
           */
          focalLength: number | null;
          /**
           * Height
           * @description The height of the image in pixels.
           * @default null
           */
          height: number | null;
          /**
           * Iso Speed
           * @description The ISO speed used to create the image.
           * @default null
           */
          isoSpeed: number | null;
          /**
           * Lens
           * @description The lens used to create the image.
           * @default null
           */
          lens: string | null;
          /**
           * Location
           * @description Geographic location information for the image.
           * @default null
           */
          location: {
              /**
               * Altitude
               * @description The altitude of the location.
               * @default null
               */
              altitude: number | null;
              /**
               * Latitude
               * @description The latitude of the location.
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @description The longitude of the location.
               * @default null
               */
              longitude: number | null;
          } | null;
          /**
           * Max Aperture Value
           * @description The maximum aperture value of the image.
           * @default null
           */
          maxApertureValue: number | null;
          /**
           * Metering Mode
           * @description The metering mode used to create the image.
           * @default null
           */
          meteringMode: string | null;
          /**
           * Rotation
           * @description The rotation of the image in degrees.
           * @default null
           */
          rotation: number | null;
          /**
           * Sensor
           * @description The sensor used to create the image.
           * @default null
           */
          sensor: string | null;
          /**
           * Subject Distance
           * @description The subject distance of the image.
           * @default null
           */
          subjectDistance: number | null;
          /**
           * Time
           * @description The time the photo was taken (Exif DateTime).
           * @default null
           */
          time: string | null;
          /**
           * White Balance
           * @description The white balance mode used to create the image.
           * @default null
           */
          whiteBalance: string | null;
          /**
           * Width
           * @description The width of the image in pixels.
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Is App Authorized
       * @description Whether the file was created or opened by the requesting app.
       * @default null
       */
      isAppAuthorized: boolean | null;
      /**
       * Kind
       * @description Identifies the resource type. This is always 'drive#file'.
       */
      kind: string;
      /**
       * LabelInfo
       * @description Information about labels applied to the file.
       * @default null
       */
      labelInfo: {
          /**
           * Labels
           * @default null
           */
          labels: {
              /**
               * Fields
               * @default null
               */
              fields: {
                  [key: string]: {
                      /**
                       * Datestring
                       * @default null
                       */
                      dateString: string[] | null;
                      /**
                       * Id
                       * @default null
                       */
                      id: string | null;
                      /**
                       * Integer
                       * @default null
                       */
                      integer: string[] | null;
                      /**
                       * Kind
                       * @default null
                       */
                      kind: string | null;
                      /**
                       * Selection
                       * @default null
                       */
                      selection: string[] | null;
                      /**
                       * Text
                       * @default null
                       */
                      text: string[] | null;
                      /**
                       * User
                       * @default null
                       */
                      user: string[] | null;
                      /**
                       * Valuetype
                       * @default null
                       */
                      valueType: string | null;
                  };
              } | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
              /**
               * Kind
               * @default null
               */
              kind: string | null;
              /**
               * Revision Id
               * @default null
               */
              revisionId: string | null;
          }[] | null;
      } | null;
      /**
       * User
       * @description The last user to modify the file.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * LinkShareMetadata
       * @description Metadata about the shared link for this file.
       * @default null
       */
      linkShareMetadata: {
          /**
           * Security Update Eligible
           * @default null
           */
          securityUpdateEligible: boolean | null;
          /**
           * Security Update Enabled
           * @default null
           */
          securityUpdateEnabled: boolean | null;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified By Me
       * @description Whether the file has been modified by this user.
       * @default null
       */
      modifiedByMe: boolean | null;
      /**
       * Modified By Me Time
       * @description The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modifiedByMeTime: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content if available, or else the original value of the name field. Once set, it will only change if a new revision is uploaded.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Owned By Me
       * @description Whether the user owns the file.
       * @default null
       */
      ownedByMe: boolean | null;
      /**
       * Owners
       * @description The owners of the file. Currently, only certain legacy files may have more than one owner.
       * @default null
       */
      owners: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Permission Ids
       * @description A list of permission IDs for users with access to this file.
       * @default null
       */
      permissionIds: string[] | null;
      /**
       * Permissions
       * @description The permissions for the file. This field is only populated for items in shared drives.
       * @default null
       */
      permissions: {
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @default null
           */
          emailAddress: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @default drive#permission
           */
          kind: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs which are visible to all apps.
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description The number of bytes the file occupies in storage. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      quotaBytesUsed: string | null;
      /**
       * Resource Key
       * @description A key needed to access the item via a shared link.
       * @default null
       */
      resourceKey: string | null;
      /**
       * Sha1 Checksum
       * @description The SHA1 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      sha1Checksum: string | null;
      /**
       * Sha256 Checksum
       * @description The SHA256 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      sha256Checksum: string | null;
      /**
       * Shared
       * @description Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description The time at which the file was shared with the user (RFC 3339 date-time).
       * @default null
       */
      sharedWithMeTime: string | null;
      /**
       * User
       * @description The user who shared the file with the current user, if applicable.
       * @default null
       */
      sharingUser: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * ShortcutDetails
       * @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @description The ID of the file that this shortcut points to.
           * @default null
           */
          targetId: string | null;
          /**
           * Target Mime Type
           * @description The MIME type of the file that this shortcut points to.
           * @default null
           */
          targetMimeType: string | null;
          /**
           * Target Resource Key
           * @description The resource key of the target file.
           * @default null
           */
          targetResourceKey: string | null;
      } | null;
      /**
       * Size
       * @description The size of the file's content in bytes. This is applicable to files with binary content in Google Drive and Google Docs files.
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
       * @default null
       */
      spaces: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Team Drive Id
       * @description Deprecated: Use driveId instead.
       * @default null
       */
      teamDriveId: string | null;
      /**
       * Thumbnail Link
       * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.
       * @default null
       */
      thumbnailLink: string | null;
      /**
       * Thumbnail Version
       * @description The version of the file's thumbnail. Available when the media is hosted on Google Drive.
       * @default null
       */
      thumbnailVersion: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Trashed Time
       * @default null
       */
      trashedTime: string | null;
      /**
       * User
       * @default null
       */
      trashingUser: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: string | null;
      /**
       * VideoMediaMetadata
       * @description Additional metadata about video media, if available.
       * @default null
       */
      videoMediaMetadata: {
          /**
           * Duration Millis
           * @description The duration of the video in milliseconds.
           * @default null
           */
          durationMillis: string | null;
          /**
           * Height
           * @description The height of the video in pixels.
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @description The width of the video in pixels.
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Viewed By Me
       * @description Whether the file has been viewed by this user.
       * @default null
       */
      viewedByMe: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewedByMeTime: string | null;
      /**
       * Viewers Can Copy Content
       * @description Whether users with only reader or commenter permission can copy the content of the file. This does not apply to Google Docs, Sheets, and Slides.
       * @default null
       */
      viewersCanCopyContent: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
      /**
       * Writers Can Share
       * @description Whether writers can share the document with other users.
       * @default null
       */
      writersCanShare: boolean | null;
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
 * Type of GOOGLESUPER's GOOGLESUPER_UPLOAD_MEDIA tool input.
 */
type GOOGLESUPER_UPLOAD_MEDIA_INPUT = {
  /**
   * Description
   * @description Optional description for the media item
   * @default
   */
  description: string;
  /**
   * FileUploadable
   * @description The media file to upload to Google Photos
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_UPLOAD_MEDIA tool output.
 */
type GOOGLESUPER_UPLOAD_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Item
       * @description The created media item details returned by the Google Photos API
       */
      media_item: {
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
 * Type of GOOGLESUPER's GOOGLESUPER_WATCH_CHANGES tool input.
 */
type GOOGLESUPER_WATCH_CHANGES_INPUT = {
  /**
   * Address
   * Format: uri
   * @description The URL where notifications are to be delivered.
   */
  address?: string;
  /**
   * Drive Id
   * @description The shared drive from which changes will be returned. If specified, change IDs will be specific to the shared drive.
   * @default null
   */
  drive_id: string | null;
  /**
   * Expiration
   * @description Timestamp in milliseconds since the epoch for when the channel should expire. If not set, channel may not expire or have a default expiration.
   * @default null
   */
  expiration: number | null;
  /**
   * Id
   * @description A unique string that identifies this channel. UUIDs are recommended.
   */
  id?: string;
  /**
   * Include Corpus Removals
   * @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes.
   * @default null
   */
  include_corpus_removals: boolean | null;
  /**
   * Include Items From All Drives
   * @description Whether both My Drive and shared drive items should be included in results.
   * @default null
   */
  include_items_from_all_drives: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the labelInfo part of the response.
   * @default null
   */
  include_labels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  include_permissions_for_view: string | null;
  /**
   * Include Removed
   * @description Whether to include changes indicating that items have been removed from the list of changes (e.g., by deletion or loss of access).
   * @default true
   */
  include_removed: boolean | null;
  /**
   * Page Size
   * @description The maximum number of changes to return per page.
   * @default 100
   */
  page_size: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
   * @default null
   */
  page_token: string | null;
  /**
   * ChannelParams
   * @description Optional parameters for the notification channel.
   *     Example: {"ttl": "3600"} for a 1-hour time-to-live (actual support depends on Google API).
   * @default null
   */
  params: {
      /**
       * Additional Properties
       * @description Key-value pairs for additional parameters.
       * @default null
       */
      additional_properties: {
          [key: string]: string;
      } | null;
  } | null;
  /**
   * Restrict To My Drive
   * @description Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files like those in the Application Data folder or shared files not added to My Drive.
   * @default false
   */
  restrict_to_my_drive: boolean | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
   * @default drive
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Recommended to set to true if driveId is used or if interactions with shared drives are expected.
   * @default false
   */
  supports_all_drives: boolean | null;
  /**
   * Token
   * @description An arbitrary string that will be delivered with each notification. Can be used for verification.
   * @default null
   */
  token: string | null;
  /**
   * Type
   * @description The type of delivery mechanism for notifications (e.g., 'web_hook').
   */
  type?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLESUPER_WATCH_CHANGES tool output.
 */
type GOOGLESUPER_WATCH_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration
       * @description Timestamp in milliseconds since the epoch when the channel will expire.
       * @default null
       */
      expiration: number | null;
      /**
       * Id
       * @description The ID of the established channel.
       */
      id: string;
      /**
       * Kind
       * @description Identifies this as a notification channel.
       * @default null
       */
      kind: string | null;
      /**
       * Resource Id
       * @description An opaque ID for the resource being watched.
       * @default null
       */
      resource_id: string | null;
      /**
       * Resource Uri
       * @description A version-specific URI for the watched resource.
       * @default null
       */
      resource_uri: string | null;
      /**
       * Token
       * @description The token that will be sent with notifications, if one was provided in the request.
       * @default null
       */
      token: string | null;
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
 * Type map of all available tool input types for toolkit "GOOGLESUPER".
 */
export type GOOGLESUPER_TOOL_INPUTS = {
  ADD_ENRICHMENT: GOOGLESUPER_ADD_ENRICHMENT_INPUT
  ADD_FILE_SHARING_PREFERENCE: GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE_INPUT
  ADD_LABEL_TO_EMAIL: GOOGLESUPER_ADD_LABEL_TO_EMAIL_INPUT
  ADD_OR_REMOVE_TO_CUSTOMER_LIST: GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST_INPUT
  ADD_SHEET: GOOGLESUPER_ADD_SHEET_INPUT
  AGGREGATE_COLUMN_DATA: GOOGLESUPER_AGGREGATE_COLUMN_DATA_INPUT
  APPEND_DIMENSION: GOOGLESUPER_APPEND_DIMENSION_INPUT
  BATCH_ADD_MEDIA_ITEMS: GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS_INPUT
  BATCH_CREATE_MEDIA_ITEMS: GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS_INPUT
  BATCH_GET: GOOGLESUPER_BATCH_GET_INPUT
  BATCH_GET_MEDIA_ITEMS: GOOGLESUPER_BATCH_GET_MEDIA_ITEMS_INPUT
  BATCH_UPDATE: GOOGLESUPER_BATCH_UPDATE_INPUT
  BATCH_UPDATE_VALUES_BY_DATA_FILTER: GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER_INPUT
  CALENDARS_DELETE: GOOGLESUPER_CALENDARS_DELETE_INPUT
  CALENDARS_UPDATE: GOOGLESUPER_CALENDARS_UPDATE_INPUT
  CALENDAR_LIST_INSERT: GOOGLESUPER_CALENDAR_LIST_INSERT_INPUT
  CALENDAR_LIST_UPDATE: GOOGLESUPER_CALENDAR_LIST_UPDATE_INPUT
  CLEAR_BASIC_FILTER: GOOGLESUPER_CLEAR_BASIC_FILTER_INPUT
  CLEAR_CALENDAR: GOOGLESUPER_CLEAR_CALENDAR_INPUT
  CLEAR_TASKS: GOOGLESUPER_CLEAR_TASKS_INPUT
  CLEAR_VALUES: GOOGLESUPER_CLEAR_VALUES_INPUT
  COPY_DOCUMENT: GOOGLESUPER_COPY_DOCUMENT_INPUT
  COPY_FILE: GOOGLESUPER_COPY_FILE_INPUT
  CREATE_ALBUM: GOOGLESUPER_CREATE_ALBUM_INPUT
  CREATE_CHART: GOOGLESUPER_CREATE_CHART_INPUT
  CREATE_COMMENT: GOOGLESUPER_CREATE_COMMENT_INPUT
  CREATE_CUSTOMER_LIST: GOOGLESUPER_CREATE_CUSTOMER_LIST_INPUT
  CREATE_DOCUMENT: GOOGLESUPER_CREATE_DOCUMENT_INPUT
  CREATE_DOCUMENT_MARKDOWN: GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN_INPUT
  CREATE_DRIVE: GOOGLESUPER_CREATE_DRIVE_INPUT
  CREATE_EMAIL_DRAFT: GOOGLESUPER_CREATE_EMAIL_DRAFT_INPUT
  CREATE_EVENT: GOOGLESUPER_CREATE_EVENT_INPUT
  CREATE_EXPANDED_DATA_SET: GOOGLESUPER_CREATE_EXPANDED_DATA_SET_INPUT
  CREATE_FILE: GOOGLESUPER_CREATE_FILE_INPUT
  CREATE_FILE_FROM_TEXT: GOOGLESUPER_CREATE_FILE_FROM_TEXT_INPUT
  CREATE_FOLDER: GOOGLESUPER_CREATE_FOLDER_INPUT
  CREATE_FOOTER: GOOGLESUPER_CREATE_FOOTER_INPUT
  CREATE_FOOTNOTE: GOOGLESUPER_CREATE_FOOTNOTE_INPUT
  CREATE_GOOGLE_SHEET1: GOOGLESUPER_CREATE_GOOGLE_SHEET1_INPUT
  CREATE_HEADER: GOOGLESUPER_CREATE_HEADER_INPUT
  CREATE_LABEL: GOOGLESUPER_CREATE_LABEL_INPUT
  CREATE_MEET: GOOGLESUPER_CREATE_MEET_INPUT
  CREATE_NAMED_RANGE: GOOGLESUPER_CREATE_NAMED_RANGE_INPUT
  CREATE_PARAGRAPH_BULLETS: GOOGLESUPER_CREATE_PARAGRAPH_BULLETS_INPUT
  CREATE_REPLY: GOOGLESUPER_CREATE_REPLY_INPUT
  CREATE_SHORTCUT_TO_FILE: GOOGLESUPER_CREATE_SHORTCUT_TO_FILE_INPUT
  CREATE_SPREADSHEET_COLUMN: GOOGLESUPER_CREATE_SPREADSHEET_COLUMN_INPUT
  CREATE_SPREADSHEET_ROW: GOOGLESUPER_CREATE_SPREADSHEET_ROW_INPUT
  CREATE_TASK_LIST: GOOGLESUPER_CREATE_TASK_LIST_INPUT
  DELETE_COMMENT: GOOGLESUPER_DELETE_COMMENT_INPUT
  DELETE_CONTENT_RANGE: GOOGLESUPER_DELETE_CONTENT_RANGE_INPUT
  DELETE_DIMENSION: GOOGLESUPER_DELETE_DIMENSION_INPUT
  DELETE_DRAFT: GOOGLESUPER_DELETE_DRAFT_INPUT
  DELETE_DRIVE: GOOGLESUPER_DELETE_DRIVE_INPUT
  DELETE_EVENT: GOOGLESUPER_DELETE_EVENT_INPUT
  DELETE_FOOTER: GOOGLESUPER_DELETE_FOOTER_INPUT
  DELETE_HEADER: GOOGLESUPER_DELETE_HEADER_INPUT
  DELETE_MESSAGE: GOOGLESUPER_DELETE_MESSAGE_INPUT
  DELETE_NAMED_RANGE: GOOGLESUPER_DELETE_NAMED_RANGE_INPUT
  DELETE_PARAGRAPH_BULLETS: GOOGLESUPER_DELETE_PARAGRAPH_BULLETS_INPUT
  DELETE_PERMISSION: GOOGLESUPER_DELETE_PERMISSION_INPUT
  DELETE_REPLY: GOOGLESUPER_DELETE_REPLY_INPUT
  DELETE_SHEET: GOOGLESUPER_DELETE_SHEET_INPUT
  DELETE_TABLE: GOOGLESUPER_DELETE_TABLE_INPUT
  DELETE_TABLE_COLUMN: GOOGLESUPER_DELETE_TABLE_COLUMN_INPUT
  DELETE_TABLE_ROW: GOOGLESUPER_DELETE_TABLE_ROW_INPUT
  DELETE_TASK: GOOGLESUPER_DELETE_TASK_INPUT
  DELETE_TASK_LIST: GOOGLESUPER_DELETE_TASK_LIST_INPUT
  DISTANCE_MATRIX_API: GOOGLESUPER_DISTANCE_MATRIX_API_INPUT
  DOWNLOAD_FILE: GOOGLESUPER_DOWNLOAD_FILE_INPUT
  DUPLICATE_CALENDAR: GOOGLESUPER_DUPLICATE_CALENDAR_INPUT
  EDIT_FILE: GOOGLESUPER_EDIT_FILE_INPUT
  EMPTY_TRASH: GOOGLESUPER_EMPTY_TRASH_INPUT
  EVENTS_INSTANCES: GOOGLESUPER_EVENTS_INSTANCES_INPUT
  EVENTS_LIST: GOOGLESUPER_EVENTS_LIST_INPUT
  EVENTS_MOVE: GOOGLESUPER_EVENTS_MOVE_INPUT
  EVENTS_WATCH: GOOGLESUPER_EVENTS_WATCH_INPUT
  EXECUTE_SQL: GOOGLESUPER_EXECUTE_SQL_INPUT
  FETCH_EMAILS: GOOGLESUPER_FETCH_EMAILS_INPUT
  FETCH_MESSAGE_BY_MESSAGE_ID: GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID_INPUT
  FETCH_MESSAGE_BY_THREAD_ID: GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID_INPUT
  FILES_MODIFY_LABELS: GOOGLESUPER_FILES_MODIFY_LABELS_INPUT
  FIND_EVENT: GOOGLESUPER_FIND_EVENT_INPUT
  FIND_FILE: GOOGLESUPER_FIND_FILE_INPUT
  FIND_FOLDER: GOOGLESUPER_FIND_FOLDER_INPUT
  FIND_FREE_SLOTS: GOOGLESUPER_FIND_FREE_SLOTS_INPUT
  FIND_WORKSHEET_BY_TITLE: GOOGLESUPER_FIND_WORKSHEET_BY_TITLE_INPUT
  FORMAT_CELL: GOOGLESUPER_FORMAT_CELL_INPUT
  FORWARD_MESSAGE: GOOGLESUPER_FORWARD_MESSAGE_INPUT
  FREE_BUSY_QUERY: GOOGLESUPER_FREE_BUSY_QUERY_INPUT
  GENERATE_IDS: GOOGLESUPER_GENERATE_IDS_INPUT
  GEOCODING_API: GOOGLESUPER_GEOCODING_API_INPUT
  GET_ABOUT: GOOGLESUPER_GET_ABOUT_INPUT
  GET_ACCOUNT: GOOGLESUPER_GET_ACCOUNT_INPUT
  GET_ALBUM: GOOGLESUPER_GET_ALBUM_INPUT
  GET_ATTACHMENT: GOOGLESUPER_GET_ATTACHMENT_INPUT
  GET_CALENDAR: GOOGLESUPER_GET_CALENDAR_INPUT
  GET_CAMPAIGN_BY_ID: GOOGLESUPER_GET_CAMPAIGN_BY_ID_INPUT
  GET_CAMPAIGN_BY_NAME: GOOGLESUPER_GET_CAMPAIGN_BY_NAME_INPUT
  GET_CHANGES_START_PAGE_TOKEN: GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN_INPUT
  GET_CHARTS_FROM_SPREADSHEET: GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET_INPUT
  GET_COMMENT: GOOGLESUPER_GET_COMMENT_INPUT
  GET_CONFERENCE_RECORD_FOR_MEET: GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET_INPUT
  GET_CONTACTS: GOOGLESUPER_GET_CONTACTS_INPUT
  GET_CURRENT_DATE_TIME: GOOGLESUPER_GET_CURRENT_DATE_TIME_INPUT
  GET_CUSTOMER_LISTS: GOOGLESUPER_GET_CUSTOMER_LISTS_INPUT
  GET_DIRECTION: GOOGLESUPER_GET_DIRECTION_INPUT
  GET_DOCUMENT_BY_ID: GOOGLESUPER_GET_DOCUMENT_BY_ID_INPUT
  GET_DRIVE: GOOGLESUPER_GET_DRIVE_INPUT
  GET_FILE_METADATA: GOOGLESUPER_GET_FILE_METADATA_INPUT
  GET_MEDIA_ITEM_DOWNLOAD: GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD_INPUT
  GET_MEET: GOOGLESUPER_GET_MEET_INPUT
  GET_PARTICIPANT_SESSION: GOOGLESUPER_GET_PARTICIPANT_SESSION_INPUT
  GET_PEOPLE: GOOGLESUPER_GET_PEOPLE_INPUT
  GET_PERMISSION: GOOGLESUPER_GET_PERMISSION_INPUT
  GET_PROFILE: GOOGLESUPER_GET_PROFILE_INPUT
  GET_RECORDINGS_BY_CONFERENCE_RECORD_ID: GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_INPUT
  GET_REPLY: GOOGLESUPER_GET_REPLY_INPUT
  GET_REVISION: GOOGLESUPER_GET_REVISION_INPUT
  GET_ROUTE: GOOGLESUPER_GET_ROUTE_INPUT
  GET_SHEET_NAMES: GOOGLESUPER_GET_SHEET_NAMES_INPUT
  GET_SPREADSHEET_BY_DATA_FILTER: GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER_INPUT
  GET_SPREADSHEET_INFO: GOOGLESUPER_GET_SPREADSHEET_INFO_INPUT
  GET_TABLE_SCHEMA: GOOGLESUPER_GET_TABLE_SCHEMA_INPUT
  GET_TASK: GOOGLESUPER_GET_TASK_INPUT
  GET_TASK_LIST: GOOGLESUPER_GET_TASK_LIST_INPUT
  GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID: GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_INPUT
  GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION: GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_INPUT
  HIDE_DRIVE: GOOGLESUPER_HIDE_DRIVE_INPUT
  INSERT_DIMENSION: GOOGLESUPER_INSERT_DIMENSION_INPUT
  INSERT_INLINE_IMAGE: GOOGLESUPER_INSERT_INLINE_IMAGE_INPUT
  INSERT_PAGE_BREAK: GOOGLESUPER_INSERT_PAGE_BREAK_INPUT
  INSERT_TABLE_ACTION: GOOGLESUPER_INSERT_TABLE_ACTION_INPUT
  INSERT_TABLE_COLUMN: GOOGLESUPER_INSERT_TABLE_COLUMN_INPUT
  INSERT_TASK: GOOGLESUPER_INSERT_TASK_INPUT
  INSERT_TEXT_ACTION: GOOGLESUPER_INSERT_TEXT_ACTION_INPUT
  LIST_ACCOUNTS: GOOGLESUPER_LIST_ACCOUNTS_INPUT
  LIST_ACL_RULES: GOOGLESUPER_LIST_ACL_RULES_INPUT
  LIST_ALBUMS: GOOGLESUPER_LIST_ALBUMS_INPUT
  LIST_AUDIENCES: GOOGLESUPER_LIST_AUDIENCES_INPUT
  LIST_CALENDARS: GOOGLESUPER_LIST_CALENDARS_INPUT
  LIST_CHANGES: GOOGLESUPER_LIST_CHANGES_INPUT
  LIST_COMMENTS: GOOGLESUPER_LIST_COMMENTS_INPUT
  LIST_CONFERENCE_RECORDS: GOOGLESUPER_LIST_CONFERENCE_RECORDS_INPUT
  LIST_DRAFTS: GOOGLESUPER_LIST_DRAFTS_INPUT
  LIST_FILES: GOOGLESUPER_LIST_FILES_INPUT
  LIST_FILE_LABELS: GOOGLESUPER_LIST_FILE_LABELS_INPUT
  LIST_LABELS: GOOGLESUPER_LIST_LABELS_INPUT
  LIST_MEDIA_ITEMS: GOOGLESUPER_LIST_MEDIA_ITEMS_INPUT
  LIST_PARTICIPANT_SESSIONS: GOOGLESUPER_LIST_PARTICIPANT_SESSIONS_INPUT
  LIST_PERMISSIONS: GOOGLESUPER_LIST_PERMISSIONS_INPUT
  LIST_REPLIES_TO_COMMENT: GOOGLESUPER_LIST_REPLIES_TO_COMMENT_INPUT
  LIST_REVISIONS: GOOGLESUPER_LIST_REVISIONS_INPUT
  LIST_SHARED_DRIVES: GOOGLESUPER_LIST_SHARED_DRIVES_INPUT
  LIST_SPREADSHEET_CHARTS_ACTION: GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION_INPUT
  LIST_TABLES: GOOGLESUPER_LIST_TABLES_INPUT
  LIST_TASKS: GOOGLESUPER_LIST_TASKS_INPUT
  LIST_TASK_LISTS: GOOGLESUPER_LIST_TASK_LISTS_INPUT
  LIST_THREADS: GOOGLESUPER_LIST_THREADS_INPUT
  LOOKUP_SPREADSHEET_ROW: GOOGLESUPER_LOOKUP_SPREADSHEET_ROW_INPUT
  MAPS_EMBED_API: GOOGLESUPER_MAPS_EMBED_API_INPUT
  MODIFY_THREAD_LABELS: GOOGLESUPER_MODIFY_THREAD_LABELS_INPUT
  MOVE_FILE: GOOGLESUPER_MOVE_FILE_INPUT
  MOVE_TASK: GOOGLESUPER_MOVE_TASK_INPUT
  MOVE_TO_TRASH: GOOGLESUPER_MOVE_TO_TRASH_INPUT
  NEARBY_SEARCH: GOOGLESUPER_NEARBY_SEARCH_INPUT
  PARSE_FILE: GOOGLESUPER_PARSE_FILE_INPUT
  PATCH_CALENDAR: GOOGLESUPER_PATCH_CALENDAR_INPUT
  PATCH_EVENT: GOOGLESUPER_PATCH_EVENT_INPUT
  PATCH_LABEL: GOOGLESUPER_PATCH_LABEL_INPUT
  PATCH_TASK: GOOGLESUPER_PATCH_TASK_INPUT
  PATCH_TASK_LIST: GOOGLESUPER_PATCH_TASK_LIST_INPUT
  QUERY_TABLE: GOOGLESUPER_QUERY_TABLE_INPUT
  QUICK_ADD: GOOGLESUPER_QUICK_ADD_INPUT
  REMOVE_ATTENDEE: GOOGLESUPER_REMOVE_ATTENDEE_INPUT
  REMOVE_LABEL: GOOGLESUPER_REMOVE_LABEL_INPUT
  REPLACE_ALL_TEXT: GOOGLESUPER_REPLACE_ALL_TEXT_INPUT
  REPLACE_IMAGE: GOOGLESUPER_REPLACE_IMAGE_INPUT
  REPLY_TO_THREAD: GOOGLESUPER_REPLY_TO_THREAD_INPUT
  SEARCH_DEVELOPER_METADATA: GOOGLESUPER_SEARCH_DEVELOPER_METADATA_INPUT
  SEARCH_DOCUMENTS: GOOGLESUPER_SEARCH_DOCUMENTS_INPUT
  SEARCH_MEDIA_ITEMS: GOOGLESUPER_SEARCH_MEDIA_ITEMS_INPUT
  SEARCH_PEOPLE: GOOGLESUPER_SEARCH_PEOPLE_INPUT
  SEARCH_SPREADSHEETS: GOOGLESUPER_SEARCH_SPREADSHEETS_INPUT
  SEND_DRAFT: GOOGLESUPER_SEND_DRAFT_INPUT
  SEND_EMAIL: GOOGLESUPER_SEND_EMAIL_INPUT
  SETTINGS_LIST: GOOGLESUPER_SETTINGS_LIST_INPUT
  SETTINGS_WATCH: GOOGLESUPER_SETTINGS_WATCH_INPUT
  SET_BASIC_FILTER: GOOGLESUPER_SET_BASIC_FILTER_INPUT
  SHEET_FROM_JSON: GOOGLESUPER_SHEET_FROM_JSON_INPUT
  SPREADSHEETS_SHEETS_COPY_TO: GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO_INPUT
  SPREADSHEETS_VALUES_APPEND: GOOGLESUPER_SPREADSHEETS_VALUES_APPEND_INPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR: GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_INPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER: GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_INPUT
  SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER: GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_INPUT
  STOP_WATCH_CHANNEL: GOOGLESUPER_STOP_WATCH_CHANNEL_INPUT
  SYNC_EVENTS: GOOGLESUPER_SYNC_EVENTS_INPUT
  TEXT_SEARCH: GOOGLESUPER_TEXT_SEARCH_INPUT
  UNHIDE_DRIVE: GOOGLESUPER_UNHIDE_DRIVE_INPUT
  UNMERGE_TABLE_CELLS: GOOGLESUPER_UNMERGE_TABLE_CELLS_INPUT
  UNTRASH_FILE: GOOGLESUPER_UNTRASH_FILE_INPUT
  UPDATE_ACL_RULE: GOOGLESUPER_UPDATE_ACL_RULE_INPUT
  UPDATE_ALBUM: GOOGLESUPER_UPDATE_ALBUM_INPUT
  UPDATE_COMMENT: GOOGLESUPER_UPDATE_COMMENT_INPUT
  UPDATE_DOCUMENT_MARKDOWN: GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN_INPUT
  UPDATE_DOCUMENT_STYLE: GOOGLESUPER_UPDATE_DOCUMENT_STYLE_INPUT
  UPDATE_DRIVE: GOOGLESUPER_UPDATE_DRIVE_INPUT
  UPDATE_EVENT: GOOGLESUPER_UPDATE_EVENT_INPUT
  UPDATE_EXISTING_DOCUMENT: GOOGLESUPER_UPDATE_EXISTING_DOCUMENT_INPUT
  UPDATE_FILE_PUT: GOOGLESUPER_UPDATE_FILE_PUT_INPUT
  UPDATE_FILE_REVISION_METADATA: GOOGLESUPER_UPDATE_FILE_REVISION_METADATA_INPUT
  UPDATE_MEDIA_ITEM: GOOGLESUPER_UPDATE_MEDIA_ITEM_INPUT
  UPDATE_PERMISSION: GOOGLESUPER_UPDATE_PERMISSION_INPUT
  UPDATE_REPLY: GOOGLESUPER_UPDATE_REPLY_INPUT
  UPDATE_SHEET_PROPERTIES: GOOGLESUPER_UPDATE_SHEET_PROPERTIES_INPUT
  UPDATE_SPACE: GOOGLESUPER_UPDATE_SPACE_INPUT
  UPDATE_SPREADSHEET_PROPERTIES: GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES_INPUT
  UPDATE_TABLE_ROW_STYLE: GOOGLESUPER_UPDATE_TABLE_ROW_STYLE_INPUT
  UPDATE_TASK: GOOGLESUPER_UPDATE_TASK_INPUT
  UPDATE_TASK_LIST: GOOGLESUPER_UPDATE_TASK_LIST_INPUT
  UPLOAD_FILE: GOOGLESUPER_UPLOAD_FILE_INPUT
  UPLOAD_MEDIA: GOOGLESUPER_UPLOAD_MEDIA_INPUT
  WATCH_CHANGES: GOOGLESUPER_WATCH_CHANGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLESUPER".
 */
export type GOOGLESUPER_TOOL_OUTPUTS = {
  ADD_ENRICHMENT: GOOGLESUPER_ADD_ENRICHMENT_OUTPUT
  ADD_FILE_SHARING_PREFERENCE: GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE_OUTPUT
  ADD_LABEL_TO_EMAIL: GOOGLESUPER_ADD_LABEL_TO_EMAIL_OUTPUT
  ADD_OR_REMOVE_TO_CUSTOMER_LIST: GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST_OUTPUT
  ADD_SHEET: GOOGLESUPER_ADD_SHEET_OUTPUT
  AGGREGATE_COLUMN_DATA: GOOGLESUPER_AGGREGATE_COLUMN_DATA_OUTPUT
  APPEND_DIMENSION: GOOGLESUPER_APPEND_DIMENSION_OUTPUT
  BATCH_ADD_MEDIA_ITEMS: GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS_OUTPUT
  BATCH_CREATE_MEDIA_ITEMS: GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS_OUTPUT
  BATCH_GET: GOOGLESUPER_BATCH_GET_OUTPUT
  BATCH_GET_MEDIA_ITEMS: GOOGLESUPER_BATCH_GET_MEDIA_ITEMS_OUTPUT
  BATCH_UPDATE: GOOGLESUPER_BATCH_UPDATE_OUTPUT
  BATCH_UPDATE_VALUES_BY_DATA_FILTER: GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER_OUTPUT
  CALENDARS_DELETE: GOOGLESUPER_CALENDARS_DELETE_OUTPUT
  CALENDARS_UPDATE: GOOGLESUPER_CALENDARS_UPDATE_OUTPUT
  CALENDAR_LIST_INSERT: GOOGLESUPER_CALENDAR_LIST_INSERT_OUTPUT
  CALENDAR_LIST_UPDATE: GOOGLESUPER_CALENDAR_LIST_UPDATE_OUTPUT
  CLEAR_BASIC_FILTER: GOOGLESUPER_CLEAR_BASIC_FILTER_OUTPUT
  CLEAR_CALENDAR: GOOGLESUPER_CLEAR_CALENDAR_OUTPUT
  CLEAR_TASKS: GOOGLESUPER_CLEAR_TASKS_OUTPUT
  CLEAR_VALUES: GOOGLESUPER_CLEAR_VALUES_OUTPUT
  COPY_DOCUMENT: GOOGLESUPER_COPY_DOCUMENT_OUTPUT
  COPY_FILE: GOOGLESUPER_COPY_FILE_OUTPUT
  CREATE_ALBUM: GOOGLESUPER_CREATE_ALBUM_OUTPUT
  CREATE_CHART: GOOGLESUPER_CREATE_CHART_OUTPUT
  CREATE_COMMENT: GOOGLESUPER_CREATE_COMMENT_OUTPUT
  CREATE_CUSTOMER_LIST: GOOGLESUPER_CREATE_CUSTOMER_LIST_OUTPUT
  CREATE_DOCUMENT: GOOGLESUPER_CREATE_DOCUMENT_OUTPUT
  CREATE_DOCUMENT_MARKDOWN: GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN_OUTPUT
  CREATE_DRIVE: GOOGLESUPER_CREATE_DRIVE_OUTPUT
  CREATE_EMAIL_DRAFT: GOOGLESUPER_CREATE_EMAIL_DRAFT_OUTPUT
  CREATE_EVENT: GOOGLESUPER_CREATE_EVENT_OUTPUT
  CREATE_EXPANDED_DATA_SET: GOOGLESUPER_CREATE_EXPANDED_DATA_SET_OUTPUT
  CREATE_FILE: GOOGLESUPER_CREATE_FILE_OUTPUT
  CREATE_FILE_FROM_TEXT: GOOGLESUPER_CREATE_FILE_FROM_TEXT_OUTPUT
  CREATE_FOLDER: GOOGLESUPER_CREATE_FOLDER_OUTPUT
  CREATE_FOOTER: GOOGLESUPER_CREATE_FOOTER_OUTPUT
  CREATE_FOOTNOTE: GOOGLESUPER_CREATE_FOOTNOTE_OUTPUT
  CREATE_GOOGLE_SHEET1: GOOGLESUPER_CREATE_GOOGLE_SHEET1_OUTPUT
  CREATE_HEADER: GOOGLESUPER_CREATE_HEADER_OUTPUT
  CREATE_LABEL: GOOGLESUPER_CREATE_LABEL_OUTPUT
  CREATE_MEET: GOOGLESUPER_CREATE_MEET_OUTPUT
  CREATE_NAMED_RANGE: GOOGLESUPER_CREATE_NAMED_RANGE_OUTPUT
  CREATE_PARAGRAPH_BULLETS: GOOGLESUPER_CREATE_PARAGRAPH_BULLETS_OUTPUT
  CREATE_REPLY: GOOGLESUPER_CREATE_REPLY_OUTPUT
  CREATE_SHORTCUT_TO_FILE: GOOGLESUPER_CREATE_SHORTCUT_TO_FILE_OUTPUT
  CREATE_SPREADSHEET_COLUMN: GOOGLESUPER_CREATE_SPREADSHEET_COLUMN_OUTPUT
  CREATE_SPREADSHEET_ROW: GOOGLESUPER_CREATE_SPREADSHEET_ROW_OUTPUT
  CREATE_TASK_LIST: GOOGLESUPER_CREATE_TASK_LIST_OUTPUT
  DELETE_COMMENT: GOOGLESUPER_DELETE_COMMENT_OUTPUT
  DELETE_CONTENT_RANGE: GOOGLESUPER_DELETE_CONTENT_RANGE_OUTPUT
  DELETE_DIMENSION: GOOGLESUPER_DELETE_DIMENSION_OUTPUT
  DELETE_DRAFT: GOOGLESUPER_DELETE_DRAFT_OUTPUT
  DELETE_DRIVE: GOOGLESUPER_DELETE_DRIVE_OUTPUT
  DELETE_EVENT: GOOGLESUPER_DELETE_EVENT_OUTPUT
  DELETE_FOOTER: GOOGLESUPER_DELETE_FOOTER_OUTPUT
  DELETE_HEADER: GOOGLESUPER_DELETE_HEADER_OUTPUT
  DELETE_MESSAGE: GOOGLESUPER_DELETE_MESSAGE_OUTPUT
  DELETE_NAMED_RANGE: GOOGLESUPER_DELETE_NAMED_RANGE_OUTPUT
  DELETE_PARAGRAPH_BULLETS: GOOGLESUPER_DELETE_PARAGRAPH_BULLETS_OUTPUT
  DELETE_PERMISSION: GOOGLESUPER_DELETE_PERMISSION_OUTPUT
  DELETE_REPLY: GOOGLESUPER_DELETE_REPLY_OUTPUT
  DELETE_SHEET: GOOGLESUPER_DELETE_SHEET_OUTPUT
  DELETE_TABLE: GOOGLESUPER_DELETE_TABLE_OUTPUT
  DELETE_TABLE_COLUMN: GOOGLESUPER_DELETE_TABLE_COLUMN_OUTPUT
  DELETE_TABLE_ROW: GOOGLESUPER_DELETE_TABLE_ROW_OUTPUT
  DELETE_TASK: GOOGLESUPER_DELETE_TASK_OUTPUT
  DELETE_TASK_LIST: GOOGLESUPER_DELETE_TASK_LIST_OUTPUT
  DISTANCE_MATRIX_API: GOOGLESUPER_DISTANCE_MATRIX_API_OUTPUT
  DOWNLOAD_FILE: GOOGLESUPER_DOWNLOAD_FILE_OUTPUT
  DUPLICATE_CALENDAR: GOOGLESUPER_DUPLICATE_CALENDAR_OUTPUT
  EDIT_FILE: GOOGLESUPER_EDIT_FILE_OUTPUT
  EMPTY_TRASH: GOOGLESUPER_EMPTY_TRASH_OUTPUT
  EVENTS_INSTANCES: GOOGLESUPER_EVENTS_INSTANCES_OUTPUT
  EVENTS_LIST: GOOGLESUPER_EVENTS_LIST_OUTPUT
  EVENTS_MOVE: GOOGLESUPER_EVENTS_MOVE_OUTPUT
  EVENTS_WATCH: GOOGLESUPER_EVENTS_WATCH_OUTPUT
  EXECUTE_SQL: GOOGLESUPER_EXECUTE_SQL_OUTPUT
  FETCH_EMAILS: GOOGLESUPER_FETCH_EMAILS_OUTPUT
  FETCH_MESSAGE_BY_MESSAGE_ID: GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID_OUTPUT
  FETCH_MESSAGE_BY_THREAD_ID: GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID_OUTPUT
  FILES_MODIFY_LABELS: GOOGLESUPER_FILES_MODIFY_LABELS_OUTPUT
  FIND_EVENT: GOOGLESUPER_FIND_EVENT_OUTPUT
  FIND_FILE: GOOGLESUPER_FIND_FILE_OUTPUT
  FIND_FOLDER: GOOGLESUPER_FIND_FOLDER_OUTPUT
  FIND_FREE_SLOTS: GOOGLESUPER_FIND_FREE_SLOTS_OUTPUT
  FIND_WORKSHEET_BY_TITLE: GOOGLESUPER_FIND_WORKSHEET_BY_TITLE_OUTPUT
  FORMAT_CELL: GOOGLESUPER_FORMAT_CELL_OUTPUT
  FORWARD_MESSAGE: GOOGLESUPER_FORWARD_MESSAGE_OUTPUT
  FREE_BUSY_QUERY: GOOGLESUPER_FREE_BUSY_QUERY_OUTPUT
  GENERATE_IDS: GOOGLESUPER_GENERATE_IDS_OUTPUT
  GEOCODING_API: GOOGLESUPER_GEOCODING_API_OUTPUT
  GET_ABOUT: GOOGLESUPER_GET_ABOUT_OUTPUT
  GET_ACCOUNT: GOOGLESUPER_GET_ACCOUNT_OUTPUT
  GET_ALBUM: GOOGLESUPER_GET_ALBUM_OUTPUT
  GET_ATTACHMENT: GOOGLESUPER_GET_ATTACHMENT_OUTPUT
  GET_CALENDAR: GOOGLESUPER_GET_CALENDAR_OUTPUT
  GET_CAMPAIGN_BY_ID: GOOGLESUPER_GET_CAMPAIGN_BY_ID_OUTPUT
  GET_CAMPAIGN_BY_NAME: GOOGLESUPER_GET_CAMPAIGN_BY_NAME_OUTPUT
  GET_CHANGES_START_PAGE_TOKEN: GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN_OUTPUT
  GET_CHARTS_FROM_SPREADSHEET: GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET_OUTPUT
  GET_COMMENT: GOOGLESUPER_GET_COMMENT_OUTPUT
  GET_CONFERENCE_RECORD_FOR_MEET: GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET_OUTPUT
  GET_CONTACTS: GOOGLESUPER_GET_CONTACTS_OUTPUT
  GET_CURRENT_DATE_TIME: GOOGLESUPER_GET_CURRENT_DATE_TIME_OUTPUT
  GET_CUSTOMER_LISTS: GOOGLESUPER_GET_CUSTOMER_LISTS_OUTPUT
  GET_DIRECTION: GOOGLESUPER_GET_DIRECTION_OUTPUT
  GET_DOCUMENT_BY_ID: GOOGLESUPER_GET_DOCUMENT_BY_ID_OUTPUT
  GET_DRIVE: GOOGLESUPER_GET_DRIVE_OUTPUT
  GET_FILE_METADATA: GOOGLESUPER_GET_FILE_METADATA_OUTPUT
  GET_MEDIA_ITEM_DOWNLOAD: GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD_OUTPUT
  GET_MEET: GOOGLESUPER_GET_MEET_OUTPUT
  GET_PARTICIPANT_SESSION: GOOGLESUPER_GET_PARTICIPANT_SESSION_OUTPUT
  GET_PEOPLE: GOOGLESUPER_GET_PEOPLE_OUTPUT
  GET_PERMISSION: GOOGLESUPER_GET_PERMISSION_OUTPUT
  GET_PROFILE: GOOGLESUPER_GET_PROFILE_OUTPUT
  GET_RECORDINGS_BY_CONFERENCE_RECORD_ID: GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_OUTPUT
  GET_REPLY: GOOGLESUPER_GET_REPLY_OUTPUT
  GET_REVISION: GOOGLESUPER_GET_REVISION_OUTPUT
  GET_ROUTE: GOOGLESUPER_GET_ROUTE_OUTPUT
  GET_SHEET_NAMES: GOOGLESUPER_GET_SHEET_NAMES_OUTPUT
  GET_SPREADSHEET_BY_DATA_FILTER: GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER_OUTPUT
  GET_SPREADSHEET_INFO: GOOGLESUPER_GET_SPREADSHEET_INFO_OUTPUT
  GET_TABLE_SCHEMA: GOOGLESUPER_GET_TABLE_SCHEMA_OUTPUT
  GET_TASK: GOOGLESUPER_GET_TASK_OUTPUT
  GET_TASK_LIST: GOOGLESUPER_GET_TASK_LIST_OUTPUT
  GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID: GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_OUTPUT
  GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION: GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_OUTPUT
  HIDE_DRIVE: GOOGLESUPER_HIDE_DRIVE_OUTPUT
  INSERT_DIMENSION: GOOGLESUPER_INSERT_DIMENSION_OUTPUT
  INSERT_INLINE_IMAGE: GOOGLESUPER_INSERT_INLINE_IMAGE_OUTPUT
  INSERT_PAGE_BREAK: GOOGLESUPER_INSERT_PAGE_BREAK_OUTPUT
  INSERT_TABLE_ACTION: GOOGLESUPER_INSERT_TABLE_ACTION_OUTPUT
  INSERT_TABLE_COLUMN: GOOGLESUPER_INSERT_TABLE_COLUMN_OUTPUT
  INSERT_TASK: GOOGLESUPER_INSERT_TASK_OUTPUT
  INSERT_TEXT_ACTION: GOOGLESUPER_INSERT_TEXT_ACTION_OUTPUT
  LIST_ACCOUNTS: GOOGLESUPER_LIST_ACCOUNTS_OUTPUT
  LIST_ACL_RULES: GOOGLESUPER_LIST_ACL_RULES_OUTPUT
  LIST_ALBUMS: GOOGLESUPER_LIST_ALBUMS_OUTPUT
  LIST_AUDIENCES: GOOGLESUPER_LIST_AUDIENCES_OUTPUT
  LIST_CALENDARS: GOOGLESUPER_LIST_CALENDARS_OUTPUT
  LIST_CHANGES: GOOGLESUPER_LIST_CHANGES_OUTPUT
  LIST_COMMENTS: GOOGLESUPER_LIST_COMMENTS_OUTPUT
  LIST_CONFERENCE_RECORDS: GOOGLESUPER_LIST_CONFERENCE_RECORDS_OUTPUT
  LIST_DRAFTS: GOOGLESUPER_LIST_DRAFTS_OUTPUT
  LIST_FILES: GOOGLESUPER_LIST_FILES_OUTPUT
  LIST_FILE_LABELS: GOOGLESUPER_LIST_FILE_LABELS_OUTPUT
  LIST_LABELS: GOOGLESUPER_LIST_LABELS_OUTPUT
  LIST_MEDIA_ITEMS: GOOGLESUPER_LIST_MEDIA_ITEMS_OUTPUT
  LIST_PARTICIPANT_SESSIONS: GOOGLESUPER_LIST_PARTICIPANT_SESSIONS_OUTPUT
  LIST_PERMISSIONS: GOOGLESUPER_LIST_PERMISSIONS_OUTPUT
  LIST_REPLIES_TO_COMMENT: GOOGLESUPER_LIST_REPLIES_TO_COMMENT_OUTPUT
  LIST_REVISIONS: GOOGLESUPER_LIST_REVISIONS_OUTPUT
  LIST_SHARED_DRIVES: GOOGLESUPER_LIST_SHARED_DRIVES_OUTPUT
  LIST_SPREADSHEET_CHARTS_ACTION: GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION_OUTPUT
  LIST_TABLES: GOOGLESUPER_LIST_TABLES_OUTPUT
  LIST_TASKS: GOOGLESUPER_LIST_TASKS_OUTPUT
  LIST_TASK_LISTS: GOOGLESUPER_LIST_TASK_LISTS_OUTPUT
  LIST_THREADS: GOOGLESUPER_LIST_THREADS_OUTPUT
  LOOKUP_SPREADSHEET_ROW: GOOGLESUPER_LOOKUP_SPREADSHEET_ROW_OUTPUT
  MAPS_EMBED_API: GOOGLESUPER_MAPS_EMBED_API_OUTPUT
  MODIFY_THREAD_LABELS: GOOGLESUPER_MODIFY_THREAD_LABELS_OUTPUT
  MOVE_FILE: GOOGLESUPER_MOVE_FILE_OUTPUT
  MOVE_TASK: GOOGLESUPER_MOVE_TASK_OUTPUT
  MOVE_TO_TRASH: GOOGLESUPER_MOVE_TO_TRASH_OUTPUT
  NEARBY_SEARCH: GOOGLESUPER_NEARBY_SEARCH_OUTPUT
  PARSE_FILE: GOOGLESUPER_PARSE_FILE_OUTPUT
  PATCH_CALENDAR: GOOGLESUPER_PATCH_CALENDAR_OUTPUT
  PATCH_EVENT: GOOGLESUPER_PATCH_EVENT_OUTPUT
  PATCH_LABEL: GOOGLESUPER_PATCH_LABEL_OUTPUT
  PATCH_TASK: GOOGLESUPER_PATCH_TASK_OUTPUT
  PATCH_TASK_LIST: GOOGLESUPER_PATCH_TASK_LIST_OUTPUT
  QUERY_TABLE: GOOGLESUPER_QUERY_TABLE_OUTPUT
  QUICK_ADD: GOOGLESUPER_QUICK_ADD_OUTPUT
  REMOVE_ATTENDEE: GOOGLESUPER_REMOVE_ATTENDEE_OUTPUT
  REMOVE_LABEL: GOOGLESUPER_REMOVE_LABEL_OUTPUT
  REPLACE_ALL_TEXT: GOOGLESUPER_REPLACE_ALL_TEXT_OUTPUT
  REPLACE_IMAGE: GOOGLESUPER_REPLACE_IMAGE_OUTPUT
  REPLY_TO_THREAD: GOOGLESUPER_REPLY_TO_THREAD_OUTPUT
  SEARCH_DEVELOPER_METADATA: GOOGLESUPER_SEARCH_DEVELOPER_METADATA_OUTPUT
  SEARCH_DOCUMENTS: GOOGLESUPER_SEARCH_DOCUMENTS_OUTPUT
  SEARCH_MEDIA_ITEMS: GOOGLESUPER_SEARCH_MEDIA_ITEMS_OUTPUT
  SEARCH_PEOPLE: GOOGLESUPER_SEARCH_PEOPLE_OUTPUT
  SEARCH_SPREADSHEETS: GOOGLESUPER_SEARCH_SPREADSHEETS_OUTPUT
  SEND_DRAFT: GOOGLESUPER_SEND_DRAFT_OUTPUT
  SEND_EMAIL: GOOGLESUPER_SEND_EMAIL_OUTPUT
  SETTINGS_LIST: GOOGLESUPER_SETTINGS_LIST_OUTPUT
  SETTINGS_WATCH: GOOGLESUPER_SETTINGS_WATCH_OUTPUT
  SET_BASIC_FILTER: GOOGLESUPER_SET_BASIC_FILTER_OUTPUT
  SHEET_FROM_JSON: GOOGLESUPER_SHEET_FROM_JSON_OUTPUT
  SPREADSHEETS_SHEETS_COPY_TO: GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO_OUTPUT
  SPREADSHEETS_VALUES_APPEND: GOOGLESUPER_SPREADSHEETS_VALUES_APPEND_OUTPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR: GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_OUTPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER: GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_OUTPUT
  SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER: GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_OUTPUT
  STOP_WATCH_CHANNEL: GOOGLESUPER_STOP_WATCH_CHANNEL_OUTPUT
  SYNC_EVENTS: GOOGLESUPER_SYNC_EVENTS_OUTPUT
  TEXT_SEARCH: GOOGLESUPER_TEXT_SEARCH_OUTPUT
  UNHIDE_DRIVE: GOOGLESUPER_UNHIDE_DRIVE_OUTPUT
  UNMERGE_TABLE_CELLS: GOOGLESUPER_UNMERGE_TABLE_CELLS_OUTPUT
  UNTRASH_FILE: GOOGLESUPER_UNTRASH_FILE_OUTPUT
  UPDATE_ACL_RULE: GOOGLESUPER_UPDATE_ACL_RULE_OUTPUT
  UPDATE_ALBUM: GOOGLESUPER_UPDATE_ALBUM_OUTPUT
  UPDATE_COMMENT: GOOGLESUPER_UPDATE_COMMENT_OUTPUT
  UPDATE_DOCUMENT_MARKDOWN: GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN_OUTPUT
  UPDATE_DOCUMENT_STYLE: GOOGLESUPER_UPDATE_DOCUMENT_STYLE_OUTPUT
  UPDATE_DRIVE: GOOGLESUPER_UPDATE_DRIVE_OUTPUT
  UPDATE_EVENT: GOOGLESUPER_UPDATE_EVENT_OUTPUT
  UPDATE_EXISTING_DOCUMENT: GOOGLESUPER_UPDATE_EXISTING_DOCUMENT_OUTPUT
  UPDATE_FILE_PUT: GOOGLESUPER_UPDATE_FILE_PUT_OUTPUT
  UPDATE_FILE_REVISION_METADATA: GOOGLESUPER_UPDATE_FILE_REVISION_METADATA_OUTPUT
  UPDATE_MEDIA_ITEM: GOOGLESUPER_UPDATE_MEDIA_ITEM_OUTPUT
  UPDATE_PERMISSION: GOOGLESUPER_UPDATE_PERMISSION_OUTPUT
  UPDATE_REPLY: GOOGLESUPER_UPDATE_REPLY_OUTPUT
  UPDATE_SHEET_PROPERTIES: GOOGLESUPER_UPDATE_SHEET_PROPERTIES_OUTPUT
  UPDATE_SPACE: GOOGLESUPER_UPDATE_SPACE_OUTPUT
  UPDATE_SPREADSHEET_PROPERTIES: GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES_OUTPUT
  UPDATE_TABLE_ROW_STYLE: GOOGLESUPER_UPDATE_TABLE_ROW_STYLE_OUTPUT
  UPDATE_TASK: GOOGLESUPER_UPDATE_TASK_OUTPUT
  UPDATE_TASK_LIST: GOOGLESUPER_UPDATE_TASK_LIST_OUTPUT
  UPLOAD_FILE: GOOGLESUPER_UPLOAD_FILE_OUTPUT
  UPLOAD_MEDIA: GOOGLESUPER_UPLOAD_MEDIA_OUTPUT
  WATCH_CHANGES: GOOGLESUPER_WATCH_CHANGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GOOGLESUPER's DOCUMENT_DELETED_TRIGGER trigger payload.
 */
type GOOGLESUPER_DOCUMENT_DELETED_TRIGGER_PAYLOAD = {
  /**
   * Document
   * @description The deleted Google document
   */
  document?: {
      /**
       * Created Time
       * @description Creation time in ISO format
       */
      createdTime: string;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Last Modifying User
       * @description Information about the last user who modified the document
       * @default null
       */
      lastModifyingUser: {
          [key: string]: unknown;
      } | null;
      /**
       * Mime Type
       * @description MIME type of the document
       */
      mimeType: string;
      /**
       * Modified Time
       * @description Last modification time in ISO format
       */
      modifiedTime: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Owners
       * @description List of document owners
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Shared
       * @description Whether the document is shared
       * @default null
       */
      shared: boolean | null;
      /**
       * Size
       * @description Size of the document in bytes
       * @default null
       */
      size: string | null;
      /**
       * Starred
       * @description Whether the document is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the document is in trash
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web View Link
       * @description Link to view the document in browser
       */
      webViewLink: string;
  };
  /**
   * Event Type
   * @description Type of event that occurred
   * @default document_deleted
   */
  event_type: string;
};

/**
 * Type of GOOGLESUPER's DOCUMENT_UPDATED_TRIGGER trigger payload.
 */
type GOOGLESUPER_DOCUMENT_UPDATED_TRIGGER_PAYLOAD = {
  /**
   * Document
   * @description The updated Google document
   */
  document?: {
      /**
       * Created Time
       * @description Creation time in ISO format
       */
      createdTime: string;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Last Modifying User
       * @description Information about the last user who modified the document
       * @default null
       */
      lastModifyingUser: {
          [key: string]: unknown;
      } | null;
      /**
       * Mime Type
       * @description MIME type of the document
       */
      mimeType: string;
      /**
       * Modified Time
       * @description Last modification time in ISO format
       */
      modifiedTime: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Owners
       * @description List of document owners
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Shared
       * @description Whether the document is shared
       * @default null
       */
      shared: boolean | null;
      /**
       * Size
       * @description Size of the document in bytes
       * @default null
       */
      size: string | null;
      /**
       * Starred
       * @description Whether the document is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the document is in trash
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web View Link
       * @description Link to view the document in browser
       */
      webViewLink: string;
  };
  /**
   * Event Type
   * @description Type of event that occurred
   * @default document_updated
   */
  event_type: string;
};

/**
 * Type of GOOGLESUPER's GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER trigger payload.
 */
type GOOGLESUPER_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER_PAYLOAD = {
  /**
   * Channel Id
   * @description The unique identifier passed to identify this channel
   */
  channel_id?: string;
  /**
   * Resource Id
   * @description The unique identifier of the resource
   */
  resource_id?: string;
  /**
   * Resource State
   * @description The state of the resource
   */
  resource_state?: string;
  /**
   * Resource Url
   * @description The url for the resource
   */
  resource_url?: string;
};

/**
 * Type of GOOGLESUPER's GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER trigger payload.
 */
type GOOGLESUPER_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER_PAYLOAD = {
  /**
   * Attendees
   * @description List of attendees
   */
  attendees?: {
      [key: string]: unknown;
  }[];
  /**
   * Calendar Id
   * @description The calendar identifier
   */
  calendar_id?: string;
  /**
   * Conference Data
   * @description Conference data structure containing details about the meeting
   * @default null
   */
  conference_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Created At
   * @description When the event was created
   * @default null
   */
  created_at: string | null;
  /**
   * Creator Email
   * @description Email of the event creator
   * @default null
   */
  creator_email: string | null;
  /**
   * Creator Name
   * @description Name of the event creator
   * @default null
   */
  creator_name: string | null;
  /**
   * Description
   * @description Event description
   * @default null
   */
  description: string | null;
  /**
   * End Time
   * @description Event end time in ISO format
   * @default null
   */
  end_time: string | null;
  /**
   * Event Id
   * @description The unique identifier of the event
   */
  event_id?: string;
  /**
   * Event Type
   * @description Type of change: created, updated, or deleted
   */
  event_type?: string;
  /**
   * Hangout Link
   * @description Google Meet link for the conference, if available
   * @default null
   */
  hangout_link: string | null;
  /**
   * Html Link
   * @description Link to the event in Google Calendar
   * @default null
   */
  html_link: string | null;
  /**
   * Location
   * @description Event location
   * @default null
   */
  location: string | null;
  /**
   * Organizer Email
   * @description Email of the event organizer
   * @default null
   */
  organizer_email: string | null;
  /**
   * Organizer Name
   * @description Name of the event organizer
   * @default null
   */
  organizer_name: string | null;
  /**
   * Recurring Event Id
   * @description ID of recurring event if applicable
   * @default null
   */
  recurring_event_id: string | null;
  /**
   * Start Time
   * @description Event start time in ISO format
   * @default null
   */
  start_time: string | null;
  /**
   * Status
   * @description Event status (confirmed, tentative, cancelled)
   * @default null
   */
  status: string | null;
  /**
   * Summary
   * @description Event title/summary
   * @default null
   */
  summary: string | null;
  /**
   * Updated At
   * @description When the event was last updated
   * @default null
   */
  updated_at: string | null;
  /**
   * Visibility
   * @description Event visibility
   * @default null
   */
  visibility: string | null;
};

/**
 * Type of GOOGLESUPER's GOOGLE_DRIVE_CHANGES trigger payload.
 */
type GOOGLESUPER_GOOGLE_DRIVE_CHANGES_PAYLOAD = object;

/**
 * Type of GOOGLESUPER's NEW_MESSAGE trigger payload.
 */
type GOOGLESUPER_NEW_MESSAGE_PAYLOAD = {
  /**
   * Attachment List
   * @description The list of attachments in the message
   * @default null
   */
  attachment_list: unknown[] | null;
  /**
   * Message Id
   * @description The message ID of the message
   * @default null
   */
  message_id: string | null;
  /**
   * Message Text
   * @description The text of the message
   * @default null
   */
  message_text: string | null;
  /**
   * Message Timestamp
   * @description The timestamp of the message
   * @default null
   */
  message_timestamp: string | null;
  /**
   * Payload
   * @description The payload of the message
   * @default null
   */
  payload: {
      [key: string]: unknown;
  } | null;
  /**
   * Sender
   * @description The sender of the message
   * @default null
   */
  sender: string | null;
  /**
   * Subject
   * @description The subject of the message
   * @default null
   */
  subject: string | null;
  /**
   * Thread Id
   * @description The thread ID of the message
   * @default null
   */
  thread_id: string | null;
  /**
   * To
   * @description The recipient of the message
   * @default null
   */
  to: string | null;
};

/**
 * Type of GOOGLESUPER's NEW_ROWS_TRIGGER trigger payload.
 */
type GOOGLESUPER_NEW_ROWS_TRIGGER_PAYLOAD = {
  /**
   * Detected At
   * @description ISO timestamp when the row was detected
   */
  detected_at?: string;
  /**
   * Row Data
   * @description Complete row data as list of strings
   */
  row_data?: string[];
  /**
   * Row Number
   * @description The row number in the sheet (1-indexed)
   */
  row_number?: number;
  /**
   * Sheet Name
   * @description The sheet name
   */
  sheet_name?: string;
  /**
   * Spreadsheet Id
   * @description The spreadsheet ID
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's NEW_SHEET_ADDED_TRIGGER trigger payload.
 */
type GOOGLESUPER_NEW_SHEET_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Detected At
   * @description ISO timestamp when the new sheet was detected
   */
  detected_at?: string;
  /**
   * Sheet Name
   * @description The name of the new sheet added
   */
  sheet_name?: string;
  /**
   * Spreadsheet Id
   * @description The spreadsheet ID
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESUPER's PAGE_ADDED_TRIGGER trigger payload.
 */
type GOOGLESUPER_PAGE_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Document
   * @description The newly added Google document
   */
  document?: {
      /**
       * Created Time
       * @description Creation time in ISO format
       */
      createdTime: string;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Last Modifying User
       * @description Information about the last user who modified the document
       * @default null
       */
      lastModifyingUser: {
          [key: string]: unknown;
      } | null;
      /**
       * Mime Type
       * @description MIME type of the document
       */
      mimeType: string;
      /**
       * Modified Time
       * @description Last modification time in ISO format
       */
      modifiedTime: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Owners
       * @description List of document owners
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Shared
       * @description Whether the document is shared
       * @default null
       */
      shared: boolean | null;
      /**
       * Size
       * @description Size of the document in bytes
       * @default null
       */
      size: string | null;
      /**
       * Starred
       * @description Whether the document is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the document is in trash
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web View Link
       * @description Link to view the document in browser
       */
      webViewLink: string;
  };
  /**
   * Event Type
   * @description Type of event that occurred
   * @default document_added
   */
  event_type: string;
};

/**
 * Map of Composio's GOOGLESUPER toolkit.
 */
export const GOOGLESUPER = {
  slug: "googlesuper",
  tools: {
    /**
     * Adds an enrichment at a specified position in a defined album.
     */
    ADD_ENRICHMENT: "GOOGLESUPER_ADD_ENRICHMENT",
    /**
     * Modifies sharing permissions for an existing google drive file, granting a specified role to a user, group, domain, or 'anyone'.
     */
    ADD_FILE_SHARING_PREFERENCE: "GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE",
    /**
     * Adds and/or removes specified gmail labels for a message; ensure `message id` and all `label ids` are valid (use 'listlabels' for custom label ids).
     */
    ADD_LABEL_TO_EMAIL: "GOOGLESUPER_ADD_LABEL_TO_EMAIL",
    /**
     * Addorremovetocustomerlist tool will add a contact to a customer list in google ads. note: it takes 6 to 12 hours for changes to be reflected in the customer list.
     */
    ADD_OR_REMOVE_TO_CUSTOMER_LIST: "GOOGLESUPER_ADD_OR_REMOVE_TO_CUSTOMER_LIST",
    /**
     * Adds a new sheet (worksheet) to a spreadsheet. use this tool to create a new tab within an existing google sheet, optionally specifying its title, index, size, and other properties.
     */
    ADD_SHEET: "GOOGLESUPER_ADD_SHEET",
    /**
     * Searches for rows where a specific column matches a value and performs mathematical operations on data from another column.
     */
    AGGREGATE_COLUMN_DATA: "GOOGLESUPER_AGGREGATE_COLUMN_DATA",
    /**
     * Tool to append new rows or columns to a sheet, increasing its size. use when you need to add empty rows or columns to an existing sheet.
     */
    APPEND_DIMENSION: "GOOGLESUPER_APPEND_DIMENSION",
    /**
     * Adds one or more media items to an album in google photos.
     */
    BATCH_ADD_MEDIA_ITEMS: "GOOGLESUPER_BATCH_ADD_MEDIA_ITEMS",
    /**
     * Unified action to upload media files and create them as items in google photos.
     */
    BATCH_CREATE_MEDIA_ITEMS: "GOOGLESUPER_BATCH_CREATE_MEDIA_ITEMS",
    /**
     * Retrieves data from specified cell ranges in a google spreadsheet; ensure the spreadsheet has at least one worksheet and any explicitly referenced sheet names in ranges exist.
     */
    BATCH_GET: "GOOGLESUPER_BATCH_GET",
    /**
     * Returns the list of media items for the specified media item identifiers.
     */
    BATCH_GET_MEDIA_ITEMS: "GOOGLESUPER_BATCH_GET_MEDIA_ITEMS",
    /**
     * Updates a specified range in a google sheet with given values, or appends them as new rows if `first cell location` is omitted; ensure the target sheet exists and the spreadsheet contains at least one worksheet.
     */
    BATCH_UPDATE: "GOOGLESUPER_BATCH_UPDATE",
    /**
     * Tool to update values in ranges matching data filters. use when you need to update specific data in a google sheet based on criteria rather than fixed cell ranges.
     */
    BATCH_UPDATE_VALUES_BY_DATA_FILTER: "GOOGLESUPER_BATCH_UPDATE_VALUES_BY_DATA_FILTER",
    /**
     * Deletes a secondary calendar. use calendars.clear for clearing all events on primary calendars.
     */
    CALENDARS_DELETE: "GOOGLESUPER_CALENDARS_DELETE",
    /**
     * Updates metadata for a calendar.
     */
    CALENDARS_UPDATE: "GOOGLESUPER_CALENDARS_UPDATE",
    /**
     * Inserts an existing calendar into the user's calendar list.
     */
    CALENDAR_LIST_INSERT: "GOOGLESUPER_CALENDAR_LIST_INSERT",
    /**
     * Updates an existing entry on the user\'s calendar list.
     */
    CALENDAR_LIST_UPDATE: "GOOGLESUPER_CALENDAR_LIST_UPDATE",
    /**
     * Tool to clear the basic filter from a sheet. use when you need to remove an existing basic filter from a specific sheet within a google spreadsheet.
     */
    CLEAR_BASIC_FILTER: "GOOGLESUPER_CLEAR_BASIC_FILTER",
    /**
     * Clears a primary calendar. this operation deletes all events associated with the primary calendar of an account.
     */
    CLEAR_CALENDAR: "GOOGLESUPER_CLEAR_CALENDAR",
    /**
     * Permanently clears all completed tasks from a specified google tasks list; this action is destructive and idempotent.
     */
    CLEAR_TASKS: "GOOGLESUPER_CLEAR_TASKS",
    /**
     * Clears cell content (preserving formatting and notes) from a specified a1 notation range in a google spreadsheet; the range must correspond to an existing sheet and cells.
     */
    CLEAR_VALUES: "GOOGLESUPER_CLEAR_VALUES",
    /**
     * Tool to create a copy of an existing google document. use this to duplicate a document, for example, when using an existing document as a template. the copied document will have a default title (e.g., 'copy of [original title]') if no new title is provided, and will be placed in the user's root google drive folder.
     */
    COPY_DOCUMENT: "GOOGLESUPER_COPY_DOCUMENT",
    /**
     * Duplicates an existing file in google drive, identified by its `file id`.
     */
    COPY_FILE: "GOOGLESUPER_COPY_FILE",
    /**
     * Creates a new album in google photos.
     */
    CREATE_ALBUM: "GOOGLESUPER_CREATE_ALBUM",
    /**
     * Create a chart in a google sheets spreadsheet using the specified data range and chart type.
     */
    CREATE_CHART: "GOOGLESUPER_CREATE_CHART",
    /**
     * Tool to create a comment on a file. use when you need to add a new comment to a specific file in google drive.
     */
    CREATE_COMMENT: "GOOGLESUPER_CREATE_COMMENT",
    /**
     * Createcustomerlist tool will create a customer list in google ads.
     */
    CREATE_CUSTOMER_LIST: "GOOGLESUPER_CREATE_CUSTOMER_LIST",
    /**
     * Creates a new google docs document using the provided title as filename and inserts the initial text at the beginning if non-empty, returning the document's id and metadata (excluding body content).
     */
    CREATE_DOCUMENT: "GOOGLESUPER_CREATE_DOCUMENT",
    /**
     * Creates a new google docs document, optionally initializing it with a title and content provided as markdown text.
     */
    CREATE_DOCUMENT_MARKDOWN: "GOOGLESUPER_CREATE_DOCUMENT_MARKDOWN",
    /**
     * Tool to create a new shared drive. use when you need to programmatically create a new shared drive for collaboration or storage.
     */
    CREATE_DRIVE: "GOOGLESUPER_CREATE_DRIVE",
    /**
     * Creates a gmail email draft, supporting to/cc/bcc, subject, plain/html body (ensure `is html=true` for html), attachments, and threading.
     */
    CREATE_EMAIL_DRAFT: "GOOGLESUPER_CREATE_EMAIL_DRAFT",
    /**
     * Creates an event on a google calendar, needing rfc3339 utc start/end times (end after start) and write access to the calendar. by default, adds the organizer as an attendee unless exclude organizer is set to true.
     */
    CREATE_EVENT: "GOOGLESUPER_CREATE_EVENT",
    /**
     * Tool to create an expanded data set for a property. use when you need to combine specific dimensions and metrics into a custom dataset after property creation.
     */
    CREATE_EXPANDED_DATA_SET: "GOOGLESUPER_CREATE_EXPANDED_DATA_SET",
    /**
     * Creates a new file or folder with metadata. use to create empty files or folders, or files with content by providing it in the request body (though this action primarily focuses on metadata creation).
     */
    CREATE_FILE: "GOOGLESUPER_CREATE_FILE",
    /**
     * Creates a new file in google drive from provided text content (up to 10mb), supporting various formats including automatic conversion to google workspace types.
     */
    CREATE_FILE_FROM_TEXT: "GOOGLESUPER_CREATE_FILE_FROM_TEXT",
    /**
     * Creates a new folder in google drive, optionally within a parent folder specified by its id or name; if a parent name is provided but not found, the action will fail.
     */
    CREATE_FOLDER: "GOOGLESUPER_CREATE_FOLDER",
    /**
     * Tool to create a new footer in a google document. use when you need to add a footer, optionally specifying its type and the section it applies to.
     */
    CREATE_FOOTER: "GOOGLESUPER_CREATE_FOOTER",
    /**
     * Tool to create a new footnote in a google document. use this when you need to add a footnote at a specific location or at the end of the document body.
     */
    CREATE_FOOTNOTE: "GOOGLESUPER_CREATE_FOOTNOTE",
    /**
     * Creates a new google spreadsheet in google drive using the provided title.
     */
    CREATE_GOOGLE_SHEET1: "GOOGLESUPER_CREATE_GOOGLE_SHEET1",
    /**
     * Tool to create a new header in a google document. use this tool when you need to add a header to a document, optionally specifying the section it applies to.
     */
    CREATE_HEADER: "GOOGLESUPER_CREATE_HEADER",
    /**
     * Creates a new label with a unique name in the specified user's gmail account.
     */
    CREATE_LABEL: "GOOGLESUPER_CREATE_LABEL",
    /**
     * Creates a new google meet space, optionally configuring its access type and entry point access controls.
     */
    CREATE_MEET: "GOOGLESUPER_CREATE_MEET",
    /**
     * Tool to create a new named range in a google document. use this to assign a name to a specific part of the document for easier reference or programmatic manipulation.
     */
    CREATE_NAMED_RANGE: "GOOGLESUPER_CREATE_NAMED_RANGE",
    /**
     * Tool to add bullets to paragraphs within a specified range in a google document. use when you need to format a list or a set of paragraphs as bullet points.
     */
    CREATE_PARAGRAPH_BULLETS: "GOOGLESUPER_CREATE_PARAGRAPH_BULLETS",
    /**
     * Tool to create a reply to a comment in google drive. use when you need to respond to an existing comment on a file.
     */
    CREATE_REPLY: "GOOGLESUPER_CREATE_REPLY",
    /**
     * Tool to create a shortcut to a file or folder in google drive. use when you need to link to an existing drive item from another location without duplicating it.
     */
    CREATE_SHORTCUT_TO_FILE: "GOOGLESUPER_CREATE_SHORTCUT_TO_FILE",
    /**
     * Creates a new column in a google spreadsheet, requiring a valid `spreadsheet id` and an existing `sheet id`; an out-of-bounds `insert index` may append/prepend the column.
     */
    CREATE_SPREADSHEET_COLUMN: "GOOGLESUPER_CREATE_SPREADSHEET_COLUMN",
    /**
     * Inserts a new, empty row into a specified sheet of a google spreadsheet at a given index, optionally inheriting formatting from the row above.
     */
    CREATE_SPREADSHEET_ROW: "GOOGLESUPER_CREATE_SPREADSHEET_ROW",
    /**
     * Creates a new task list with the specified title.
     */
    CREATE_TASK_LIST: "GOOGLESUPER_CREATE_TASK_LIST",
    /**
     * Deletes a comment from a file. use when you need to remove a specific comment from a google drive file.
     */
    DELETE_COMMENT: "GOOGLESUPER_DELETE_COMMENT",
    /**
     * Tool to delete a range of content from a google document. use when you need to remove a specific portion of text or other structural elements within a document.
     */
    DELETE_CONTENT_RANGE: "GOOGLESUPER_DELETE_CONTENT_RANGE",
    /**
     * Tool to delete specified rows or columns from a sheet in a google spreadsheet. use when you need to remove a range of rows or columns.
     */
    DELETE_DIMENSION: "GOOGLESUPER_DELETE_DIMENSION",
    /**
     * Permanently deletes a specific gmail draft using its id; ensure the draft exists and the user has necessary permissions for the given `user id`.
     */
    DELETE_DRAFT: "GOOGLESUPER_DELETE_DRAFT",
    /**
     * Tool to permanently delete a shared drive. use when you need to remove a shared drive and its contents (if specified).
     */
    DELETE_DRIVE: "GOOGLESUPER_DELETE_DRIVE",
    /**
     * Deletes a specified event by `event id` from a google calendar (`calendar id`); this action is idempotent and raises a 404 error if the event is not found.
     */
    DELETE_EVENT: "GOOGLESUPER_DELETE_EVENT",
    /**
     * Tool to delete a footer from a google document. use when you need to remove a footer from a specific section or the default footer.
     */
    DELETE_FOOTER: "GOOGLESUPER_DELETE_FOOTER",
    /**
     * Deletes the header from the specified section or the default header if no section is specified. use this tool to remove a header from a google document.
     */
    DELETE_HEADER: "GOOGLESUPER_DELETE_HEADER",
    /**
     * Permanently deletes a specific email message by its id from a gmail mailbox; for `user id`, use 'me' for the authenticated user or an email address to which the authenticated user has delegated access.
     */
    DELETE_MESSAGE: "GOOGLESUPER_DELETE_MESSAGE",
    /**
     * Tool to delete a named range from a google document. use when you need to remove a previously defined named range by its id or name.
     */
    DELETE_NAMED_RANGE: "GOOGLESUPER_DELETE_NAMED_RANGE",
    /**
     * Tool to remove bullets from paragraphs within a specified range in a google document. use when you need to clear bullet formatting from a section of a document.
     */
    DELETE_PARAGRAPH_BULLETS: "GOOGLESUPER_DELETE_PARAGRAPH_BULLETS",
    /**
     * Deletes a permission from a file by permission id. use when you need to revoke access for a specific user or group from a file.
     */
    DELETE_PERMISSION: "GOOGLESUPER_DELETE_PERMISSION",
    /**
     * Tool to delete a specific reply by reply id. use when you need to remove a reply from a comment on a file.
     */
    DELETE_REPLY: "GOOGLESUPER_DELETE_REPLY",
    /**
     * Tool to delete a sheet (worksheet) from a spreadsheet. use when you need to remove a specific sheet from a google sheet document.
     */
    DELETE_SHEET: "GOOGLESUPER_DELETE_SHEET",
    /**
     * Tool to delete an entire table from a google document. use when you have the document id and the specific start and end index of the table element to be removed. the table's range can be found by inspecting the document's content structure.
     */
    DELETE_TABLE: "GOOGLESUPER_DELETE_TABLE",
    /**
     * Tool to delete a column from a table in a google document. use this tool when you need to remove a specific column from an existing table within a document.
     */
    DELETE_TABLE_COLUMN: "GOOGLESUPER_DELETE_TABLE_COLUMN",
    /**
     * Tool to delete a row from a table in a google document. use when you need to remove a specific row from an existing table.
     */
    DELETE_TABLE_ROW: "GOOGLESUPER_DELETE_TABLE_ROW",
    /**
     * Deletes a specified task from a given task list in google tasks.
     */
    DELETE_TASK: "GOOGLESUPER_DELETE_TASK",
    /**
     * Permanently deletes an existing google task list, identified by `tasklist id`, along with all its tasks; this operation is irreversible.
     */
    DELETE_TASK_LIST: "GOOGLESUPER_DELETE_TASK_LIST",
    /**
     * Calculates travel distance and time for a matrix of origins and destinations. supports different modes of transportation and options like departure/arrival times. use when needing to determine travel metrics between multiple points.
     */
    DISTANCE_MATRIX_API: "GOOGLESUPER_DISTANCE_MATRIX_API",
    /**
     * Downloads a file from google drive by its id. for google workspace documents (docs, sheets, slides), optionally exports to a specified `mime type`. for other file types, downloads in their native format regardless of mime type.
     */
    DOWNLOAD_FILE: "GOOGLESUPER_DOWNLOAD_FILE",
    /**
     * Creates a new, empty google calendar with the specified title (summary).
     */
    DUPLICATE_CALENDAR: "GOOGLESUPER_DUPLICATE_CALENDAR",
    /**
     * Updates an existing google drive file by overwriting its entire content with new text (max 10mb).
     */
    EDIT_FILE: "GOOGLESUPER_EDIT_FILE",
    /**
     * Tool to permanently delete all of the user's trashed files. use when you want to empty the trash in google drive.
     */
    EMPTY_TRASH: "GOOGLESUPER_EMPTY_TRASH",
    /**
     * Returns instances of the specified recurring event.
     */
    EVENTS_INSTANCES: "GOOGLESUPER_EVENTS_INSTANCES",
    /**
     * Returns events on the specified calendar.
     */
    EVENTS_LIST: "GOOGLESUPER_EVENTS_LIST",
    /**
     * Moves an event to another calendar, i.e., changes an event's organizer.
     */
    EVENTS_MOVE: "GOOGLESUPER_EVENTS_MOVE",
    /**
     * Watch for changes to events resources.
     */
    EVENTS_WATCH: "GOOGLESUPER_EVENTS_WATCH",
    /**
     * Execute sql queries against google sheets tables. supports select, insert, update, and delete operations with familiar sql syntax. tables are automatically detected and mapped from the spreadsheet structure.
     */
    EXECUTE_SQL: "GOOGLESUPER_EXECUTE_SQL",
    /**
     * Fetches a list of email messages from a gmail account, supporting filtering, pagination, and optional full content retrieval.
     */
    FETCH_EMAILS: "GOOGLESUPER_FETCH_EMAILS",
    /**
     * Fetches a specific email message by its id, provided the `message id` exists and is accessible to the authenticated `user id`.
     */
    FETCH_MESSAGE_BY_MESSAGE_ID: "GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID",
    /**
     * Retrieves messages from a gmail thread using its `thread id`, where the thread must be accessible by the specified `user id`.
     */
    FETCH_MESSAGE_BY_THREAD_ID: "GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID",
    /**
     * Modifies the set of labels applied to a file. returns a list of the labels that were added or modified. use when you need to programmatically change labels on a google drive file, such as adding, updating, or removing them.
     */
    FILES_MODIFY_LABELS: "GOOGLESUPER_FILES_MODIFY_LABELS",
    /**
     * Finds events in a specified google calendar using text query, time ranges (event start/end, last modification), and event types; ensure `timemin` is not chronologically after `timemax` if both are provided.
     */
    FIND_EVENT: "GOOGLESUPER_FIND_EVENT",
    /**
     * Tool to list or search for files and folders in google drive. use when you need to find specific files based on query criteria or list contents of a drive/folder.
     */
    FIND_FILE: "GOOGLESUPER_FIND_FILE",
    /**
     * Tool to find a folder in google drive by its name and optionally a parent folder. use when you need to locate a specific folder to perform further actions like creating files in it or listing its contents.
     */
    FIND_FOLDER: "GOOGLESUPER_FIND_FOLDER",
    /**
     * Finds both free and busy time slots in google calendars for specified calendars within a defined time range (defaults to the current day utc if `time min`/`time max` are omitted). returns busy intervals enriched with event details and calculates free slots by finding gaps between busy periods; `time min` must precede `time max` if both are provided.
     */
    FIND_FREE_SLOTS: "GOOGLESUPER_FIND_FREE_SLOTS",
    /**
     * Finds a worksheet by its exact, case-sensitive title within a google spreadsheet; returns a boolean indicating if found and the complete metadata of the entire spreadsheet, regardless of whether the target worksheet is found.
     */
    FIND_WORKSHEET_BY_TITLE: "GOOGLESUPER_FIND_WORKSHEET_BY_TITLE",
    /**
     * Applies text and background cell formatting to a specified range in a google sheets worksheet.
     */
    FORMAT_CELL: "GOOGLESUPER_FORMAT_CELL",
    /**
     * Forward an existing gmail message to specified recipients, preserving original body and attachments.
     */
    FORWARD_MESSAGE: "GOOGLESUPER_FORWARD_MESSAGE",
    /**
     * Returns free/busy information for a set of calendars.
     */
    FREE_BUSY_QUERY: "GOOGLESUPER_FREE_BUSY_QUERY",
    /**
     * Generates a set of file ids which can be provided in create or copy requests. use when you need to pre-allocate ids for new files or copies.
     */
    GENERATE_IDS: "GOOGLESUPER_GENERATE_IDS",
    /**
     * Deprecated: tool to convert addresses into geographic coordinates (latitude and longitude) and vice versa (reverse geocoding), or get an address for a place id. use for finding coordinates for an address, finding an address for coordinates, or looking up an address by its place id.
     */
    GEOCODING_API: "GOOGLESUPER_GEOCODING_API",
    /**
     * Tool to retrieve information about the user, the user's drive, and system capabilities. use when you need to check storage quotas, user details, or supported import/export formats.
     */
    GET_ABOUT: "GOOGLESUPER_GET_ABOUT",
    /**
     * Tool to retrieve a single account by its resource name. use when you need detailed account info after confirming the account resource name (e.g., accounts/100).
     */
    GET_ACCOUNT: "GOOGLESUPER_GET_ACCOUNT",
    /**
     * Returns the album based on the specified albumid.
     */
    GET_ALBUM: "GOOGLESUPER_GET_ALBUM",
    /**
     * Retrieves a specific attachment by id from a message in a user's gmail mailbox, requiring valid message and attachment ids.
     */
    GET_ATTACHMENT: "GOOGLESUPER_GET_ATTACHMENT",
    /**
     * Retrieves a specific google calendar, identified by `calendar id`, to which the authenticated user has access.
     */
    GET_CALENDAR: "GOOGLESUPER_GET_CALENDAR",
    /**
     * Getcampaignbyid tool will return details of a campaign in google ads.
     */
    GET_CAMPAIGN_BY_ID: "GOOGLESUPER_GET_CAMPAIGN_BY_ID",
    /**
     * Getcampaignbyname tool will run a sql getcampaignbyname in google ads.
     */
    GET_CAMPAIGN_BY_NAME: "GOOGLESUPER_GET_CAMPAIGN_BY_NAME",
    /**
     * Tool to get the starting pagetoken for listing future changes in google drive. use this when you need to track changes to files and folders.
     */
    GET_CHANGES_START_PAGE_TOKEN: "GOOGLESUPER_GET_CHANGES_START_PAGE_TOKEN",
    /**
     * Tool to retrieve a list of all charts from a specified google sheets spreadsheet. use when you need to get chart ids and their specifications for embedding or referencing elsewhere, such as in google docs.
     */
    GET_CHARTS_FROM_SPREADSHEET: "GOOGLESUPER_GET_CHARTS_FROM_SPREADSHEET",
    /**
     * Tool to get a comment by id. use when you need to retrieve a specific comment from a google drive file and have both the file id and comment id.
     */
    GET_COMMENT: "GOOGLESUPER_GET_COMMENT",
    /**
     * Get conference record
     */
    GET_CONFERENCE_RECORD_FOR_MEET: "GOOGLESUPER_GET_CONFERENCE_RECORD_FOR_MEET",
    /**
     * Fetches contacts (connections) for the authenticated google account, allowing selection of specific data fields and pagination.
     */
    GET_CONTACTS: "GOOGLESUPER_GET_CONTACTS",
    /**
     * Gets the current date and time, allowing for a specific timezone offset.
     */
    GET_CURRENT_DATE_TIME: "GOOGLESUPER_GET_CURRENT_DATE_TIME",
    /**
     * Getcustomerlists tool will list all customer lists in google ads.
     */
    GET_CUSTOMER_LISTS: "GOOGLESUPER_GET_CUSTOMER_LISTS",
    /**
     * Fetches detailed directions between an origin and a destination, supporting intermediate waypoints and various travel modes.
     */
    GET_DIRECTION: "GOOGLESUPER_GET_DIRECTION",
    /**
     * Retrieves an existing google document by its id; will error if the document is not found.
     */
    GET_DOCUMENT_BY_ID: "GOOGLESUPER_GET_DOCUMENT_BY_ID",
    /**
     * Tool to get a shared drive by id. use when you need to retrieve information about a specific shared drive.
     */
    GET_DRIVE: "GOOGLESUPER_GET_DRIVE",
    /**
     * Tool to get a file's metadata by id. use when you need to retrieve the metadata for a specific file in google drive.
     */
    GET_FILE_METADATA: "GOOGLESUPER_GET_FILE_METADATA",
    /**
     * Downloads a media item from google photos and returns it as a file.
     */
    GET_MEDIA_ITEM_DOWNLOAD: "GOOGLESUPER_GET_MEDIA_ITEM_DOWNLOAD",
    /**
     * Retrieve details of a google meet space using its unique identifier.
     */
    GET_MEET: "GOOGLESUPER_GET_MEET",
    /**
     * Tool to get a specific participant session from a conference record. use when you need to retrieve details about a particular participant in a past meeting.
     */
    GET_PARTICIPANT_SESSION: "GOOGLESUPER_GET_PARTICIPANT_SESSION",
    /**
     * Retrieves either a specific person's details (using `resource name`) or lists 'other contacts' (if `other contacts` is true), with `person fields` specifying the data to return.
     */
    GET_PEOPLE: "GOOGLESUPER_GET_PEOPLE",
    /**
     * Gets a permission by id. use this tool to retrieve a specific permission for a file or shared drive.
     */
    GET_PERMISSION: "GOOGLESUPER_GET_PERMISSION",
    /**
     * Retrieves key gmail profile information (email address, message/thread totals, history id) for a user.
     */
    GET_PROFILE: "GOOGLESUPER_GET_PROFILE",
    /**
     * Retrieves recordings from google meet for a given conference record id.
     */
    GET_RECORDINGS_BY_CONFERENCE_RECORD_ID: "GOOGLESUPER_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID",
    /**
     * Tool to get a specific reply to a comment on a file. use when you need to retrieve the details of a particular reply.
     */
    GET_REPLY: "GOOGLESUPER_GET_REPLY",
    /**
     * Tool to get a specific revision's metadata by revision id. use when you need to retrieve information about a particular version of a file.
     */
    GET_REVISION: "GOOGLESUPER_GET_REVISION",
    /**
     * Calculates one or more routes between two specified locations using various travel modes and preferences; addresses must be resolvable by google maps.
     */
    GET_ROUTE: "GOOGLESUPER_GET_ROUTE",
    /**
     * Lists all worksheet names from a specified google spreadsheet (which must exist), useful for discovering sheets before further operations.
     */
    GET_SHEET_NAMES: "GOOGLESUPER_GET_SHEET_NAMES",
    /**
     * Returns the spreadsheet at the given id, filtered by the specified data filters. use this tool when you need to retrieve specific subsets of data from a google sheet based on criteria like a1 notation, developer metadata, or grid ranges.
     */
    GET_SPREADSHEET_BY_DATA_FILTER: "GOOGLESUPER_GET_SPREADSHEET_BY_DATA_FILTER",
    /**
     * Retrieves comprehensive metadata for a google spreadsheet using its id, excluding cell data.
     */
    GET_SPREADSHEET_INFO: "GOOGLESUPER_GET_SPREADSHEET_INFO",
    /**
     * This action is used to get the schema of a table in a google spreadsheet, call this action to get the schema of a table in a spreadsheet before you query the table. analyze table structure and infer column names, types, and constraints. uses statistical analysis of sample data to determine the most likely data type for each column. call this action after calling the list tables action to get the schema of a table in a spreadsheet.
     */
    GET_TABLE_SCHEMA: "GOOGLESUPER_GET_TABLE_SCHEMA",
    /**
     * Use to retrieve a specific google task if its `task id` and parent `tasklist id` are known.
     */
    GET_TASK: "GOOGLESUPER_GET_TASK",
    /**
     * Retrieves a specific task list from the user's google tasks if the `tasklist id` exists for the authenticated user.
     */
    GET_TASK_LIST: "GOOGLESUPER_GET_TASK_LIST",
    /**
     * Retrieves all transcripts for a specific google meet conference using its conferencerecord id.
     */
    GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID: "GOOGLESUPER_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID",
    /**
     * Tool to delete a file or folder in google drive. use when you need to permanently remove a specific file or folder using its id. note: this action is irreversible.
     */
    GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION: "GOOGLESUPER_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION",
    /**
     * Tool to hide a shared drive from the default view. use when you want to remove a shared drive from the user's main google drive interface without deleting it.
     */
    HIDE_DRIVE: "GOOGLESUPER_HIDE_DRIVE",
    /**
     * Tool to insert new rows or columns into a sheet at a specified location. use when you need to add empty rows or columns within an existing google sheet.
     */
    INSERT_DIMENSION: "GOOGLESUPER_INSERT_DIMENSION",
    /**
     * Tool to insert an image from a given uri at a specified location in a google document as an inline image. use when you need to add an image to a document programmatically.
     */
    INSERT_INLINE_IMAGE: "GOOGLESUPER_INSERT_INLINE_IMAGE",
    /**
     * Tool to insert a page break into a google document. use when you need to start new content on a fresh page, such as at the end of a chapter or section.
     */
    INSERT_PAGE_BREAK: "GOOGLESUPER_INSERT_PAGE_BREAK",
    /**
     * Tool to insert a table into a google document. use when you need to add a new table at a specific location or at the end of a segment (like document body, header, or footer) in a document.
     */
    INSERT_TABLE_ACTION: "GOOGLESUPER_INSERT_TABLE_ACTION",
    /**
     * Tool to insert a new column into a table in a google document. use this tool when you need to add a column to an existing table at a specific location.
     */
    INSERT_TABLE_COLUMN: "GOOGLESUPER_INSERT_TABLE_COLUMN",
    /**
     * Creates a new task in a given `tasklist id`, optionally as a subtask of an existing `task parent` or positioned after an existing `task previous` sibling, where both `task parent` and `task previous` must belong to the same `tasklist id` if specified.
     */
    INSERT_TASK: "GOOGLESUPER_INSERT_TASK",
    /**
     * Tool to insert a string of text at a specified location within a google document. use when you need to add new text content to an existing document.
     */
    INSERT_TEXT_ACTION: "GOOGLESUPER_INSERT_TEXT_ACTION",
    /**
     * Tool to list all accounts accessible by the caller. use when you need to enumerate all google analytics accounts your credentials can access.
     */
    LIST_ACCOUNTS: "GOOGLESUPER_LIST_ACCOUNTS",
    /**
     * Retrieves the list of access control rules (acls) for a specified calendar, providing the necessary 'rule id' values required for updating specific acl rules.
     */
    LIST_ACL_RULES: "GOOGLESUPER_LIST_ACL_RULES",
    /**
     * Lists all albums shown to a user in the albums tab of google photos.
     */
    LIST_ALBUMS: "GOOGLESUPER_LIST_ALBUMS",
    /**
     * Tool to list all audiences on a property. use when you need to fetch all audiences for a ga4 property after confirming its existence.
     */
    LIST_AUDIENCES: "GOOGLESUPER_LIST_AUDIENCES",
    /**
     * Retrieves calendars from the user's google calendar list, with options for pagination and filtering.
     */
    LIST_CALENDARS: "GOOGLESUPER_LIST_CALENDARS",
    /**
     * Tool to list the changes for a user or shared drive. use when you need to track modifications to files and folders, such as creations, deletions, or permission changes. this action requires a `pagetoken` which can be initially obtained using the `get changes start page token` action or from a previous `list changes` response.
     */
    LIST_CHANGES: "GOOGLESUPER_LIST_CHANGES",
    /**
     * Tool to list all comments for a file in google drive. use when you need to retrieve comments associated with a specific file.
     */
    LIST_COMMENTS: "GOOGLESUPER_LIST_COMMENTS",
    /**
     * Tool to list conference records. use when you need to retrieve a list of past conferences, optionally filtering them by criteria like meeting code, space name, or time range.
     */
    LIST_CONFERENCE_RECORDS: "GOOGLESUPER_LIST_CONFERENCE_RECORDS",
    /**
     * Retrieves a paginated list of email drafts from a user's gmail account. use verbose=true to get full draft details including subject, body, sender, and timestamp.
     */
    LIST_DRAFTS: "GOOGLESUPER_LIST_DRAFTS",
    /**
     * Tool to list a user's files and folders in google drive. use this to search or browse for files and folders based on various criteria.
     */
    LIST_FILES: "GOOGLESUPER_LIST_FILES",
    /**
     * Tool to list the labels on a file. use when you need to retrieve all labels associated with a specific file in google drive.
     */
    LIST_FILE_LABELS: "GOOGLESUPER_LIST_FILE_LABELS",
    /**
     * Retrieves a list of all system and user-created labels for the specified gmail account.
     */
    LIST_LABELS: "GOOGLESUPER_LIST_LABELS",
    /**
     * Lists all media items from a user's google photos library.
     */
    LIST_MEDIA_ITEMS: "GOOGLESUPER_LIST_MEDIA_ITEMS",
    /**
     * Tool to list all participant sessions for a specific conference record in google meet. use this when you need to retrieve a list of participants who joined a particular meeting.
     */
    LIST_PARTICIPANT_SESSIONS: "GOOGLESUPER_LIST_PARTICIPANT_SESSIONS",
    /**
     * Tool to list a file's permissions. use when you need to retrieve all permissions associated with a specific file or shared drive.
     */
    LIST_PERMISSIONS: "GOOGLESUPER_LIST_PERMISSIONS",
    /**
     * Tool to list replies to a comment in google drive. use this when you need to retrieve all replies associated with a specific comment on a file.
     */
    LIST_REPLIES_TO_COMMENT: "GOOGLESUPER_LIST_REPLIES_TO_COMMENT",
    /**
     * Tool to list a file's revisions. use when you need to retrieve the revision history of a specific file in google drive.
     */
    LIST_REVISIONS: "GOOGLESUPER_LIST_REVISIONS",
    /**
     * Tool to list the user's shared drives. use when you need to get a list of all shared drives accessible to the authenticated user.
     */
    LIST_SHARED_DRIVES: "GOOGLESUPER_LIST_SHARED_DRIVES",
    /**
     * Tool to retrieve a list of charts with their ids and metadata from a google sheets spreadsheet. use to identify charts available for embedding into google docs.
     */
    LIST_SPREADSHEET_CHARTS_ACTION: "GOOGLESUPER_LIST_SPREADSHEET_CHARTS_ACTION",
    /**
     * This action is used to list all tables in a google spreadsheet, call this action to get the list of tables in a spreadsheet. discover all tables in a google spreadsheet by analyzing sheet structure and detecting data patterns. uses heuristic analysis to find header rows, data boundaries, and table structures.
     */
    LIST_TABLES: "GOOGLESUPER_LIST_TABLES",
    /**
     * Retrieves tasks from a google tasks list; all date/time strings must be rfc3339 utc, and `showcompleted` must be true if `completedmin` or `completedmax` are specified.
     */
    LIST_TASKS: "GOOGLESUPER_LIST_TASKS",
    /**
     * Fetches the authenticated user's task lists from google tasks; results may be paginated.
     */
    LIST_TASK_LISTS: "GOOGLESUPER_LIST_TASK_LISTS",
    /**
     * Retrieves a list of email threads from a gmail account, identified by `user id` (email address or 'me'), supporting filtering and pagination.
     */
    LIST_THREADS: "GOOGLESUPER_LIST_THREADS",
    /**
     * Finds the first row in a google spreadsheet where a cell's entire content exactly matches the query string, searching within a specified a1 notation range or the first sheet by default.
     */
    LOOKUP_SPREADSHEET_ROW: "GOOGLESUPER_LOOKUP_SPREADSHEET_ROW",
    /**
     * Tool to generate an embeddable google map url and html iframe code. use when you need to display a map (place, view, directions, street view, search) on a webpage without javascript.
     */
    MAPS_EMBED_API: "GOOGLESUPER_MAPS_EMBED_API",
    /**
     * Adds or removes specified existing label ids from a gmail thread, affecting all its messages; ensure the thread id is valid.
     */
    MODIFY_THREAD_LABELS: "GOOGLESUPER_MODIFY_THREAD_LABELS",
    /**
     * Tool to move a file from one folder to another in google drive. use when you need to reorganize files by changing their parent folder(s).
     */
    MOVE_FILE: "GOOGLESUPER_MOVE_FILE",
    /**
     * Moves the specified task to another position in the destination task list.
     */
    MOVE_TASK: "GOOGLESUPER_MOVE_TASK",
    /**
     * Moves an existing, non-deleted email message to the trash for the specified user.
     */
    MOVE_TO_TRASH: "GOOGLESUPER_MOVE_TO_TRASH",
    /**
     * Searches for places (e.g., restaurants, parks) within a specified circular area, with options to filter by place types and customize the returned fields and number of results.
     */
    NEARBY_SEARCH: "GOOGLESUPER_NEARBY_SEARCH",
    /**
     * Deprecated: exports google workspace files (max 10mb) to a specified format using `mime type`, or downloads other file types; use `googledrive download file` instead.
     */
    PARSE_FILE: "GOOGLESUPER_PARSE_FILE",
    /**
     * Partially updates (patches) an existing google calendar, modifying only the fields provided; `summary` is mandatory and cannot be an empty string, and an empty string for `description` or `location` clears them.
     */
    PATCH_CALENDAR: "GOOGLESUPER_PATCH_CALENDAR",
    /**
     * Updates specified fields of an existing event in a google calendar using patch semantics (array fields like `attendees` are fully replaced if provided); ensure the `calendar id` and `event id` are valid and the user has write access to the calendar.
     */
    PATCH_EVENT: "GOOGLESUPER_PATCH_EVENT",
    /**
     * Patches the specified label.
     */
    PATCH_LABEL: "GOOGLESUPER_PATCH_LABEL",
    /**
     * Partially updates an existing task (identified by `task id`) within a specific google task list (identified by `tasklist id`), modifying only the provided attributes from `taskinput` (e.g., `title`, `notes`, `due` date, `status`) and requiring both the task and list to exist.
     */
    PATCH_TASK: "GOOGLESUPER_PATCH_TASK",
    /**
     * Updates the title of an existing google tasks task list.
     */
    PATCH_TASK_LIST: "GOOGLESUPER_PATCH_TASK_LIST",
    /**
     * This action is used to query a table in a google spreadsheet, call this action to query a table in a spreadsheet. execute sql-like select queries against spreadsheet tables. supports where conditions, order by, limit clauses. call this action after calling the get table schema action to query a table in a spreadsheet.
     */
    QUERY_TABLE: "GOOGLESUPER_QUERY_TABLE",
    /**
     * Parses natural language text to quickly create a basic google calendar event with its title, date, and time, suitable for simple scheduling; does not support direct attendee addition or recurring events, and `calendar id` must be valid if not 'primary'.
     */
    QUICK_ADD: "GOOGLESUPER_QUICK_ADD",
    /**
     * Removes an attendee from a specified event in a google calendar; the calendar and event must exist.
     */
    REMOVE_ATTENDEE: "GOOGLESUPER_REMOVE_ATTENDEE",
    /**
     * Permanently deletes a specific, existing user-created gmail label by its id for a user; cannot delete system labels.
     */
    REMOVE_LABEL: "GOOGLESUPER_REMOVE_LABEL",
    /**
     * Tool to replace all occurrences of a specified text string with another text string throughout a google document. use when you need to perform a global find and replace operation within a document.
     */
    REPLACE_ALL_TEXT: "GOOGLESUPER_REPLACE_ALL_TEXT",
    /**
     * Tool to replace a specific image in a document with a new image from a uri. use when you need to update an existing image within a google doc.
     */
    REPLACE_IMAGE: "GOOGLESUPER_REPLACE_IMAGE",
    /**
     * Sends a reply within a specific gmail thread using the original thread's subject, requiring a valid `thread id` and correctly formatted email addresses. supports attachments via the `attachment` parameter with valid `s3key`, `mimetype`, and `name`.
     */
    REPLY_TO_THREAD: "GOOGLESUPER_REPLY_TO_THREAD",
    /**
     * Tool to search for developer metadata in a spreadsheet. use when you need to find specific metadata entries based on filters.
     */
    SEARCH_DEVELOPER_METADATA: "GOOGLESUPER_SEARCH_DEVELOPER_METADATA",
    /**
     * Search for google documents using various filters including name, content, date ranges, and more.
     */
    SEARCH_DOCUMENTS: "GOOGLESUPER_SEARCH_DOCUMENTS",
    /**
     * Searches for media items in a user's google photos library.
     */
    SEARCH_MEDIA_ITEMS: "GOOGLESUPER_SEARCH_MEDIA_ITEMS",
    /**
     * Searches contacts by matching the query against names, nicknames, emails, phone numbers, and organizations, optionally including 'other contacts'.
     */
    SEARCH_PEOPLE: "GOOGLESUPER_SEARCH_PEOPLE",
    /**
     * Search for google spreadsheets using various filters including name, content, date ranges, and more.
     */
    SEARCH_SPREADSHEETS: "GOOGLESUPER_SEARCH_SPREADSHEETS",
    /**
     * Sends the specified, existing draft to the recipients in the to, cc, and bcc headers.
     */
    SEND_DRAFT: "GOOGLESUPER_SEND_DRAFT",
    /**
     * Sends an email via gmail api using the authenticated user's google profile display name, requiring `is html=true` if the body contains html and valid `s3key`, `mimetype`, `name` for any attachment.
     */
    SEND_EMAIL: "GOOGLESUPER_SEND_EMAIL",
    /**
     * Returns all user settings for the authenticated user.
     */
    SETTINGS_LIST: "GOOGLESUPER_SETTINGS_LIST",
    /**
     * Watch for changes to settings resources.
     */
    SETTINGS_WATCH: "GOOGLESUPER_SETTINGS_WATCH",
    /**
     * Tool to set a basic filter on a sheet in a google spreadsheet. use when you need to filter or sort data within a specific range on a sheet.
     */
    SET_BASIC_FILTER: "GOOGLESUPER_SET_BASIC_FILTER",
    /**
     * Creates a new google spreadsheet and populates its first worksheet from `sheet json`, which must be non-empty as its first item's keys establish the headers.
     */
    SHEET_FROM_JSON: "GOOGLESUPER_SHEET_FROM_JSON",
    /**
     * Tool to copy a single sheet from a spreadsheet to another spreadsheet. use when you need to duplicate a sheet into a different spreadsheet.
     */
    SPREADSHEETS_SHEETS_COPY_TO: "GOOGLESUPER_SPREADSHEETS_SHEETS_COPY_TO",
    /**
     * Tool to append values to a spreadsheet. use when you need to add new data to the end of an existing table in a google sheet.
     */
    SPREADSHEETS_VALUES_APPEND: "GOOGLESUPER_SPREADSHEETS_VALUES_APPEND",
    /**
     * Tool to clear one or more ranges of values from a spreadsheet. use when you need to remove data from specific cells or ranges while keeping formatting and other properties intact.
     */
    SPREADSHEETS_VALUES_BATCH_CLEAR: "GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR",
    /**
     * Clears one or more ranges of values from a spreadsheet using data filters. the caller must specify the spreadsheet id and one or more datafilters. ranges matching any of the specified data filters will be cleared. only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     */
    SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER: "GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER",
    /**
     * Tool to return one or more ranges of values from a spreadsheet that match the specified data filters. use when you need to retrieve specific data sets based on filtering criteria rather than entire sheets or fixed ranges.
     */
    SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER: "GOOGLESUPER_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER",
    /**
     * Tool to stop watching resources through a specified channel. use this when you want to stop receiving notifications for a previously established watch.
     */
    STOP_WATCH_CHANNEL: "GOOGLESUPER_STOP_WATCH_CHANNEL",
    /**
     * Synchronizes google calendar events, performing a full sync if no `sync token` is provided or if a 410 gone error (due to an expired token) necessitates it, otherwise performs an incremental sync for events changed since the `sync token` was issued.
     */
    SYNC_EVENTS: "GOOGLESUPER_SYNC_EVENTS",
    /**
     * Searches for places on google maps using a textual query (e.g., "restaurants in london", "eiffel tower").
     */
    TEXT_SEARCH: "GOOGLESUPER_TEXT_SEARCH",
    /**
     * Tool to unhide a shared drive. use when you need to restore a shared drive to the default view.
     */
    UNHIDE_DRIVE: "GOOGLESUPER_UNHIDE_DRIVE",
    /**
     * Tool to unmerge previously merged cells in a table. use this when you need to revert merged cells in a google document table back to their individual cell states.
     */
    UNMERGE_TABLE_CELLS: "GOOGLESUPER_UNMERGE_TABLE_CELLS",
    /**
     * Tool to restore a file from the trash. use when you need to recover a deleted file. this action updates the file's metadata to set the 'trashed' property to false.
     */
    UNTRASH_FILE: "GOOGLESUPER_UNTRASH_FILE",
    /**
     * Updates an access control rule for the specified calendar.
     */
    UPDATE_ACL_RULE: "GOOGLESUPER_UPDATE_ACL_RULE",
    /**
     * Updates an album's title or cover photo in google photos.
     */
    UPDATE_ALBUM: "GOOGLESUPER_UPDATE_ALBUM",
    /**
     * Tool to update an existing comment on a google drive file. use when you need to change the content or status (e.g., resolve) of a comment.
     */
    UPDATE_COMMENT: "GOOGLESUPER_UPDATE_COMMENT",
    /**
     * Replaces the entire content of an existing google docs document with new markdown text; requires edit permissions for the document.
     */
    UPDATE_DOCUMENT_MARKDOWN: "GOOGLESUPER_UPDATE_DOCUMENT_MARKDOWN",
    /**
     * Tool to update the overall document style, such as page size, margins, and default text direction. use when you need to modify the global style settings of a google document.
     */
    UPDATE_DOCUMENT_STYLE: "GOOGLESUPER_UPDATE_DOCUMENT_STYLE",
    /**
     * Tool to update the metadata for a shared drive. use when you need to modify properties like the name, theme, background image, or restrictions of a shared drive.
     */
    UPDATE_DRIVE: "GOOGLESUPER_UPDATE_DRIVE",
    /**
     * Updates an existing event by `event id` in a google calendar; this is a full put replacement, so provide all desired fields as unspecified ones may be cleared or reset.
     */
    UPDATE_EVENT: "GOOGLESUPER_UPDATE_EVENT",
    /**
     * Applies programmatic edits, such as text insertion, deletion, or formatting, to a specified google doc using the `batchupdate` api method.
     */
    UPDATE_EXISTING_DOCUMENT: "GOOGLESUPER_UPDATE_EXISTING_DOCUMENT",
    /**
     * Updates file metadata. uses patch semantics (partial update) as per google drive api v3. use this tool to modify attributes of an existing file like its name, description, or parent folders. note: this action currently supports metadata updates only. file content updates require multipart/related upload and are not yet implemented.
     */
    UPDATE_FILE_PUT: "GOOGLESUPER_UPDATE_FILE_PUT",
    /**
     * Updates metadata of a file revision (e.g., keepforever, publish). use this tool to modify the metadata of a specific revision of a file in google drive.
     */
    UPDATE_FILE_REVISION_METADATA: "GOOGLESUPER_UPDATE_FILE_REVISION_METADATA",
    /**
     * Updates a media item's description in google photos.
     */
    UPDATE_MEDIA_ITEM: "GOOGLESUPER_UPDATE_MEDIA_ITEM",
    /**
     * Tool to update a permission with patch semantics. use when you need to modify an existing permission for a file or shared drive.
     */
    UPDATE_PERMISSION: "GOOGLESUPER_UPDATE_PERMISSION",
    /**
     * Tool to update a reply to a comment on a google drive file. use when you need to modify the content of an existing reply.
     */
    UPDATE_REPLY: "GOOGLESUPER_UPDATE_REPLY",
    /**
     * Tool to update properties of a sheet (worksheet) within a google spreadsheet, such as its title, index, visibility, tab color, or grid properties. use this when you need to modify the metadata or appearance of a specific sheet.
     */
    UPDATE_SHEET_PROPERTIES: "GOOGLESUPER_UPDATE_SHEET_PROPERTIES",
    /**
     * Updates a meeting space. use this tool to modify the settings of an existing google meet space. requires the space resource in the request body and the space name in the path.
     */
    UPDATE_SPACE: "GOOGLESUPER_UPDATE_SPACE",
    /**
     * Tool to update properties of a spreadsheet, such as its title, locale, or auto-recalculation settings. use when you need to modify the overall configuration of a google sheet.
     */
    UPDATE_SPREADSHEET_PROPERTIES: "GOOGLESUPER_UPDATE_SPREADSHEET_PROPERTIES",
    /**
     * Tool to update the style of a table row in a google document. use when you need to modify the appearance of specific rows within a table, such as setting minimum row height or marking rows as headers.
     */
    UPDATE_TABLE_ROW_STYLE: "GOOGLESUPER_UPDATE_TABLE_ROW_STYLE",
    /**
     * Updates the specified task.
     */
    UPDATE_TASK: "GOOGLESUPER_UPDATE_TASK",
    /**
     * Updates the authenticated user's specified task list.
     */
    UPDATE_TASK_LIST: "GOOGLESUPER_UPDATE_TASK_LIST",
    /**
     * Uploads a file (max 5mb) to google drive, moving it to a specified folder if a valid folder id is provided, otherwise uploads to root.
     */
    UPLOAD_FILE: "GOOGLESUPER_UPLOAD_FILE",
    /**
     * Upload a media file to google photos. supports images (up to 200mb) and videos (up to 20gb).
     */
    UPLOAD_MEDIA: "GOOGLESUPER_UPLOAD_MEDIA",
    /**
     * Tool to subscribe to changes for a user or shared drive in google drive. use when you need to monitor a google drive for modifications and receive notifications at a specified webhook url.
     */
    WATCH_CHANGES: "GOOGLESUPER_WATCH_CHANGES",
  },
  triggerTypes: {
    /**
     * Triggers when an existing Google Doc is deleted (moved to trash).
     *     This trigger monitors Google Docs and fires when documents are trashed.
     */
    DOCUMENT_DELETED_TRIGGER: "GOOGLESUPER_DOCUMENT_DELETED_TRIGGER",
    /**
     * Triggers when an existing Google Doc is updated or modified.
     *     This trigger monitors Google Docs and fires when documents are updated.
     */
    DOCUMENT_UPDATED_TRIGGER: "GOOGLESUPER_DOCUMENT_UPDATED_TRIGGER",
    /**
     * **SOON TO BE DEPRECATED** - Use Calendar Event Sync (polling trigger) instead.
     *     Real-time webhook trigger for calendar event changes. Returns event metadata only.
     *     For full event data, use Calendar Event Sync (polling trigger).
     */
    GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER: "GOOGLESUPER_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER",
    /**
     * Polling trigger that returns full event data including details, attendees, and metadata.
     *     For real-time notifications with basic info, use Calendar Event Changes (webhook).
     */
    GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER: "GOOGLESUPER_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER",
    /**
     * Triggers when changes are detected in a Google Drive.
     */
    GOOGLE_DRIVE_CHANGES: "GOOGLESUPER_GOOGLE_DRIVE_CHANGES",
    /**
     * Triggers when a new message is received in Gmail.
     */
    NEW_MESSAGE: "GOOGLESUPER_NEW_MESSAGE",
    /**
     * Simple polling trigger that monitors Google Sheets for new rows.
     *     Detects when new rows are added and returns the complete row data.
     *     Perfect for triggering any workflow based on new sheet entries.
     */
    NEW_ROWS_TRIGGER: "GOOGLESUPER_NEW_ROWS_TRIGGER",
    /**
     * Polling trigger that detects when a new sheet is added to a Google Spreadsheet.
     */
    NEW_SHEET_ADDED_TRIGGER: "GOOGLESUPER_NEW_SHEET_ADDED_TRIGGER",
    /**
     * Triggers when a new Google Doc is added/created.
     *     This trigger monitors Google Docs and fires when new documents are detected.
     */
    PAGE_ADDED_TRIGGER: "GOOGLESUPER_PAGE_ADDED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLESUPER".
 */
export type GOOGLESUPER_TRIGGER_PAYLOADS = {
  DOCUMENT_DELETED_TRIGGER: GOOGLESUPER_DOCUMENT_DELETED_TRIGGER_PAYLOAD
  DOCUMENT_UPDATED_TRIGGER: GOOGLESUPER_DOCUMENT_UPDATED_TRIGGER_PAYLOAD
  GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER: GOOGLESUPER_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER_PAYLOAD
  GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER: GOOGLESUPER_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER_PAYLOAD
  GOOGLE_DRIVE_CHANGES: GOOGLESUPER_GOOGLE_DRIVE_CHANGES_PAYLOAD
  NEW_MESSAGE: GOOGLESUPER_NEW_MESSAGE_PAYLOAD
  NEW_ROWS_TRIGGER: GOOGLESUPER_NEW_ROWS_TRIGGER_PAYLOAD
  NEW_SHEET_ADDED_TRIGGER: GOOGLESUPER_NEW_SHEET_ADDED_TRIGGER_PAYLOAD
  PAGE_ADDED_TRIGGER: GOOGLESUPER_PAGE_ADDED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GOOGLESUPER".
 */
export type GOOGLESUPER_TRIGGER_EVENTS = {
  DOCUMENT_DELETED_TRIGGER: TriggerEvent<GOOGLESUPER_DOCUMENT_DELETED_TRIGGER_PAYLOAD>
  DOCUMENT_UPDATED_TRIGGER: TriggerEvent<GOOGLESUPER_DOCUMENT_UPDATED_TRIGGER_PAYLOAD>
  GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER: TriggerEvent<GOOGLESUPER_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER_PAYLOAD>
  GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER: TriggerEvent<GOOGLESUPER_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER_PAYLOAD>
  GOOGLE_DRIVE_CHANGES: TriggerEvent<GOOGLESUPER_GOOGLE_DRIVE_CHANGES_PAYLOAD>
  NEW_MESSAGE: TriggerEvent<GOOGLESUPER_NEW_MESSAGE_PAYLOAD>
  NEW_ROWS_TRIGGER: TriggerEvent<GOOGLESUPER_NEW_ROWS_TRIGGER_PAYLOAD>
  NEW_SHEET_ADDED_TRIGGER: TriggerEvent<GOOGLESUPER_NEW_SHEET_ADDED_TRIGGER_PAYLOAD>
  PAGE_ADDED_TRIGGER: TriggerEvent<GOOGLESUPER_PAGE_ADDED_TRIGGER_PAYLOAD>
}
