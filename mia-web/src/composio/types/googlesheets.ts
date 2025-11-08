import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLESHEETS's GOOGLESHEETS_ADD_SHEET tool input.
 */
type GOOGLESHEETS_ADD_SHEET_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_ADD_SHEET tool output.
 */
type GOOGLESHEETS_ADD_SHEET_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_AGGREGATE_COLUMN_DATA tool input.
 */
type GOOGLESHEETS_AGGREGATE_COLUMN_DATA_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_AGGREGATE_COLUMN_DATA tool output.
 */
type GOOGLESHEETS_AGGREGATE_COLUMN_DATA_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_APPEND_DIMENSION tool input.
 */
type GOOGLESHEETS_APPEND_DIMENSION_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_APPEND_DIMENSION tool output.
 */
type GOOGLESHEETS_APPEND_DIMENSION_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_BATCH_GET tool input.
 */
type GOOGLESHEETS_BATCH_GET_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_BATCH_GET tool output.
 */
type GOOGLESHEETS_BATCH_GET_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_BATCH_UPDATE tool input.
 */
type GOOGLESHEETS_BATCH_UPDATE_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_BATCH_UPDATE tool output.
 */
type GOOGLESHEETS_BATCH_UPDATE_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER tool input.
 */
type GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER tool output.
 */
type GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CLEAR_BASIC_FILTER tool input.
 */
type GOOGLESHEETS_CLEAR_BASIC_FILTER_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CLEAR_BASIC_FILTER tool output.
 */
type GOOGLESHEETS_CLEAR_BASIC_FILTER_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CLEAR_VALUES tool input.
 */
type GOOGLESHEETS_CLEAR_VALUES_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CLEAR_VALUES tool output.
 */
type GOOGLESHEETS_CLEAR_VALUES_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_CHART tool input.
 */
type GOOGLESHEETS_CREATE_CHART_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_CHART tool output.
 */
type GOOGLESHEETS_CREATE_CHART_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_GOOGLE_SHEET1 tool input.
 */
type GOOGLESHEETS_CREATE_GOOGLE_SHEET1_INPUT = {
  /**
   * Title
   * @description The title for the new Google Sheet. This will be the name of the file in Google Drive.
   */
  title?: string;
};

/**
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_GOOGLE_SHEET1 tool output.
 */
type GOOGLESHEETS_CREATE_GOOGLE_SHEET1_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN tool input.
 */
type GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN tool output.
 */
type GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_SPREADSHEET_ROW tool input.
 */
type GOOGLESHEETS_CREATE_SPREADSHEET_ROW_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_CREATE_SPREADSHEET_ROW tool output.
 */
type GOOGLESHEETS_CREATE_SPREADSHEET_ROW_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_DELETE_DIMENSION tool input.
 */
type GOOGLESHEETS_DELETE_DIMENSION_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_DELETE_DIMENSION tool output.
 */
type GOOGLESHEETS_DELETE_DIMENSION_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_DELETE_SHEET tool input.
 */
type GOOGLESHEETS_DELETE_SHEET_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_DELETE_SHEET tool output.
 */
type GOOGLESHEETS_DELETE_SHEET_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_EXECUTE_SQL tool input.
 */
type GOOGLESHEETS_EXECUTE_SQL_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_EXECUTE_SQL tool output.
 */
type GOOGLESHEETS_EXECUTE_SQL_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE tool input.
 */
type GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE tool output.
 */
type GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_FORMAT_CELL tool input.
 */
type GOOGLESHEETS_FORMAT_CELL_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_FORMAT_CELL tool output.
 */
type GOOGLESHEETS_FORMAT_CELL_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_SHEET_NAMES tool input.
 */
type GOOGLESHEETS_GET_SHEET_NAMES_INPUT = {
  /**
   * Spreadsheet Id
   * @description The unique identifier of the Google Spreadsheet. This ID is typically found in the spreadsheet's URL.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_SHEET_NAMES tool output.
 */
type GOOGLESHEETS_GET_SHEET_NAMES_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER tool input.
 */
type GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER tool output.
 */
type GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_SPREADSHEET_INFO tool input.
 */
type GOOGLESHEETS_GET_SPREADSHEET_INFO_INPUT = {
  /**
   * Spreadsheet Id
   * @description Unique identifier of the Google Spreadsheet, typically found in its URL.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_SPREADSHEET_INFO tool output.
 */
type GOOGLESHEETS_GET_SPREADSHEET_INFO_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_TABLE_SCHEMA tool input.
 */
type GOOGLESHEETS_GET_TABLE_SCHEMA_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_GET_TABLE_SCHEMA tool output.
 */
type GOOGLESHEETS_GET_TABLE_SCHEMA_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_INSERT_DIMENSION tool input.
 */
type GOOGLESHEETS_INSERT_DIMENSION_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_INSERT_DIMENSION tool output.
 */
type GOOGLESHEETS_INSERT_DIMENSION_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_LIST_TABLES tool input.
 */
type GOOGLESHEETS_LIST_TABLES_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_LIST_TABLES tool output.
 */
type GOOGLESHEETS_LIST_TABLES_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW tool input.
 */
type GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW tool output.
 */
type GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_QUERY_TABLE tool input.
 */
type GOOGLESHEETS_QUERY_TABLE_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_QUERY_TABLE tool output.
 */
type GOOGLESHEETS_QUERY_TABLE_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SEARCH_DEVELOPER_METADATA tool input.
 */
type GOOGLESHEETS_SEARCH_DEVELOPER_METADATA_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SEARCH_DEVELOPER_METADATA tool output.
 */
type GOOGLESHEETS_SEARCH_DEVELOPER_METADATA_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SEARCH_SPREADSHEETS tool input.
 */
type GOOGLESHEETS_SEARCH_SPREADSHEETS_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SEARCH_SPREADSHEETS tool output.
 */
type GOOGLESHEETS_SEARCH_SPREADSHEETS_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SET_BASIC_FILTER tool input.
 */
type GOOGLESHEETS_SET_BASIC_FILTER_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SET_BASIC_FILTER tool output.
 */
type GOOGLESHEETS_SET_BASIC_FILTER_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SHEET_FROM_JSON tool input.
 */
type GOOGLESHEETS_SHEET_FROM_JSON_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SHEET_FROM_JSON tool output.
 */
type GOOGLESHEETS_SHEET_FROM_JSON_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO tool input.
 */
type GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO tool output.
 */
type GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND tool input.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND tool output.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR tool input.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR tool output.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER tool input.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER tool output.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER tool input.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER tool output.
 */
type GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_UPDATE_SHEET_PROPERTIES tool input.
 */
type GOOGLESHEETS_UPDATE_SHEET_PROPERTIES_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_UPDATE_SHEET_PROPERTIES tool output.
 */
type GOOGLESHEETS_UPDATE_SHEET_PROPERTIES_OUTPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES tool input.
 */
type GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES_INPUT = {
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
 * Type of GOOGLESHEETS's GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES tool output.
 */
type GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "GOOGLESHEETS".
 */
export type GOOGLESHEETS_TOOL_INPUTS = {
  ADD_SHEET: GOOGLESHEETS_ADD_SHEET_INPUT
  AGGREGATE_COLUMN_DATA: GOOGLESHEETS_AGGREGATE_COLUMN_DATA_INPUT
  APPEND_DIMENSION: GOOGLESHEETS_APPEND_DIMENSION_INPUT
  BATCH_GET: GOOGLESHEETS_BATCH_GET_INPUT
  BATCH_UPDATE: GOOGLESHEETS_BATCH_UPDATE_INPUT
  BATCH_UPDATE_VALUES_BY_DATA_FILTER: GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER_INPUT
  CLEAR_BASIC_FILTER: GOOGLESHEETS_CLEAR_BASIC_FILTER_INPUT
  CLEAR_VALUES: GOOGLESHEETS_CLEAR_VALUES_INPUT
  CREATE_CHART: GOOGLESHEETS_CREATE_CHART_INPUT
  CREATE_GOOGLE_SHEET1: GOOGLESHEETS_CREATE_GOOGLE_SHEET1_INPUT
  CREATE_SPREADSHEET_COLUMN: GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN_INPUT
  CREATE_SPREADSHEET_ROW: GOOGLESHEETS_CREATE_SPREADSHEET_ROW_INPUT
  DELETE_DIMENSION: GOOGLESHEETS_DELETE_DIMENSION_INPUT
  DELETE_SHEET: GOOGLESHEETS_DELETE_SHEET_INPUT
  EXECUTE_SQL: GOOGLESHEETS_EXECUTE_SQL_INPUT
  FIND_WORKSHEET_BY_TITLE: GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE_INPUT
  FORMAT_CELL: GOOGLESHEETS_FORMAT_CELL_INPUT
  GET_SHEET_NAMES: GOOGLESHEETS_GET_SHEET_NAMES_INPUT
  GET_SPREADSHEET_BY_DATA_FILTER: GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER_INPUT
  GET_SPREADSHEET_INFO: GOOGLESHEETS_GET_SPREADSHEET_INFO_INPUT
  GET_TABLE_SCHEMA: GOOGLESHEETS_GET_TABLE_SCHEMA_INPUT
  INSERT_DIMENSION: GOOGLESHEETS_INSERT_DIMENSION_INPUT
  LIST_TABLES: GOOGLESHEETS_LIST_TABLES_INPUT
  LOOKUP_SPREADSHEET_ROW: GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW_INPUT
  QUERY_TABLE: GOOGLESHEETS_QUERY_TABLE_INPUT
  SEARCH_DEVELOPER_METADATA: GOOGLESHEETS_SEARCH_DEVELOPER_METADATA_INPUT
  SEARCH_SPREADSHEETS: GOOGLESHEETS_SEARCH_SPREADSHEETS_INPUT
  SET_BASIC_FILTER: GOOGLESHEETS_SET_BASIC_FILTER_INPUT
  SHEET_FROM_JSON: GOOGLESHEETS_SHEET_FROM_JSON_INPUT
  SPREADSHEETS_SHEETS_COPY_TO: GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO_INPUT
  SPREADSHEETS_VALUES_APPEND: GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND_INPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR: GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_INPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER: GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_INPUT
  SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER: GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_INPUT
  UPDATE_SHEET_PROPERTIES: GOOGLESHEETS_UPDATE_SHEET_PROPERTIES_INPUT
  UPDATE_SPREADSHEET_PROPERTIES: GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLESHEETS".
 */
export type GOOGLESHEETS_TOOL_OUTPUTS = {
  ADD_SHEET: GOOGLESHEETS_ADD_SHEET_OUTPUT
  AGGREGATE_COLUMN_DATA: GOOGLESHEETS_AGGREGATE_COLUMN_DATA_OUTPUT
  APPEND_DIMENSION: GOOGLESHEETS_APPEND_DIMENSION_OUTPUT
  BATCH_GET: GOOGLESHEETS_BATCH_GET_OUTPUT
  BATCH_UPDATE: GOOGLESHEETS_BATCH_UPDATE_OUTPUT
  BATCH_UPDATE_VALUES_BY_DATA_FILTER: GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER_OUTPUT
  CLEAR_BASIC_FILTER: GOOGLESHEETS_CLEAR_BASIC_FILTER_OUTPUT
  CLEAR_VALUES: GOOGLESHEETS_CLEAR_VALUES_OUTPUT
  CREATE_CHART: GOOGLESHEETS_CREATE_CHART_OUTPUT
  CREATE_GOOGLE_SHEET1: GOOGLESHEETS_CREATE_GOOGLE_SHEET1_OUTPUT
  CREATE_SPREADSHEET_COLUMN: GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN_OUTPUT
  CREATE_SPREADSHEET_ROW: GOOGLESHEETS_CREATE_SPREADSHEET_ROW_OUTPUT
  DELETE_DIMENSION: GOOGLESHEETS_DELETE_DIMENSION_OUTPUT
  DELETE_SHEET: GOOGLESHEETS_DELETE_SHEET_OUTPUT
  EXECUTE_SQL: GOOGLESHEETS_EXECUTE_SQL_OUTPUT
  FIND_WORKSHEET_BY_TITLE: GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE_OUTPUT
  FORMAT_CELL: GOOGLESHEETS_FORMAT_CELL_OUTPUT
  GET_SHEET_NAMES: GOOGLESHEETS_GET_SHEET_NAMES_OUTPUT
  GET_SPREADSHEET_BY_DATA_FILTER: GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER_OUTPUT
  GET_SPREADSHEET_INFO: GOOGLESHEETS_GET_SPREADSHEET_INFO_OUTPUT
  GET_TABLE_SCHEMA: GOOGLESHEETS_GET_TABLE_SCHEMA_OUTPUT
  INSERT_DIMENSION: GOOGLESHEETS_INSERT_DIMENSION_OUTPUT
  LIST_TABLES: GOOGLESHEETS_LIST_TABLES_OUTPUT
  LOOKUP_SPREADSHEET_ROW: GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW_OUTPUT
  QUERY_TABLE: GOOGLESHEETS_QUERY_TABLE_OUTPUT
  SEARCH_DEVELOPER_METADATA: GOOGLESHEETS_SEARCH_DEVELOPER_METADATA_OUTPUT
  SEARCH_SPREADSHEETS: GOOGLESHEETS_SEARCH_SPREADSHEETS_OUTPUT
  SET_BASIC_FILTER: GOOGLESHEETS_SET_BASIC_FILTER_OUTPUT
  SHEET_FROM_JSON: GOOGLESHEETS_SHEET_FROM_JSON_OUTPUT
  SPREADSHEETS_SHEETS_COPY_TO: GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO_OUTPUT
  SPREADSHEETS_VALUES_APPEND: GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND_OUTPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR: GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_OUTPUT
  SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER: GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER_OUTPUT
  SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER: GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER_OUTPUT
  UPDATE_SHEET_PROPERTIES: GOOGLESHEETS_UPDATE_SHEET_PROPERTIES_OUTPUT
  UPDATE_SPREADSHEET_PROPERTIES: GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GOOGLESHEETS's NEW_ROWS_TRIGGER trigger payload.
 */
type GOOGLESHEETS_NEW_ROWS_TRIGGER_PAYLOAD = {
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
 * Type of GOOGLESHEETS's NEW_SHEET_ADDED_TRIGGER trigger payload.
 */
type GOOGLESHEETS_NEW_SHEET_ADDED_TRIGGER_PAYLOAD = {
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
 * Map of Composio's GOOGLESHEETS toolkit.
 */
export const GOOGLESHEETS = {
  slug: "googlesheets",
  tools: {
    /**
     * Adds a new sheet (worksheet) to a spreadsheet. use this tool to create a new tab within an existing google sheet, optionally specifying its title, index, size, and other properties.
     */
    ADD_SHEET: "GOOGLESHEETS_ADD_SHEET",
    /**
     * Searches for rows where a specific column matches a value and performs mathematical operations on data from another column.
     */
    AGGREGATE_COLUMN_DATA: "GOOGLESHEETS_AGGREGATE_COLUMN_DATA",
    /**
     * Tool to append new rows or columns to a sheet, increasing its size. use when you need to add empty rows or columns to an existing sheet.
     */
    APPEND_DIMENSION: "GOOGLESHEETS_APPEND_DIMENSION",
    /**
     * Retrieves data from specified cell ranges in a google spreadsheet; ensure the spreadsheet has at least one worksheet and any explicitly referenced sheet names in ranges exist.
     */
    BATCH_GET: "GOOGLESHEETS_BATCH_GET",
    /**
     * Updates a specified range in a google sheet with given values, or appends them as new rows if `first cell location` is omitted; ensure the target sheet exists and the spreadsheet contains at least one worksheet.
     */
    BATCH_UPDATE: "GOOGLESHEETS_BATCH_UPDATE",
    /**
     * Tool to update values in ranges matching data filters. use when you need to update specific data in a google sheet based on criteria rather than fixed cell ranges.
     */
    BATCH_UPDATE_VALUES_BY_DATA_FILTER: "GOOGLESHEETS_BATCH_UPDATE_VALUES_BY_DATA_FILTER",
    /**
     * Tool to clear the basic filter from a sheet. use when you need to remove an existing basic filter from a specific sheet within a google spreadsheet.
     */
    CLEAR_BASIC_FILTER: "GOOGLESHEETS_CLEAR_BASIC_FILTER",
    /**
     * Clears cell content (preserving formatting and notes) from a specified a1 notation range in a google spreadsheet; the range must correspond to an existing sheet and cells.
     */
    CLEAR_VALUES: "GOOGLESHEETS_CLEAR_VALUES",
    /**
     * Create a chart in a google sheets spreadsheet using the specified data range and chart type.
     */
    CREATE_CHART: "GOOGLESHEETS_CREATE_CHART",
    /**
     * Creates a new google spreadsheet in google drive using the provided title.
     */
    CREATE_GOOGLE_SHEET1: "GOOGLESHEETS_CREATE_GOOGLE_SHEET1",
    /**
     * Creates a new column in a google spreadsheet, requiring a valid `spreadsheet id` and an existing `sheet id`; an out-of-bounds `insert index` may append/prepend the column.
     */
    CREATE_SPREADSHEET_COLUMN: "GOOGLESHEETS_CREATE_SPREADSHEET_COLUMN",
    /**
     * Inserts a new, empty row into a specified sheet of a google spreadsheet at a given index, optionally inheriting formatting from the row above.
     */
    CREATE_SPREADSHEET_ROW: "GOOGLESHEETS_CREATE_SPREADSHEET_ROW",
    /**
     * Tool to delete specified rows or columns from a sheet in a google spreadsheet. use when you need to remove a range of rows or columns.
     */
    DELETE_DIMENSION: "GOOGLESHEETS_DELETE_DIMENSION",
    /**
     * Tool to delete a sheet (worksheet) from a spreadsheet. use when you need to remove a specific sheet from a google sheet document.
     */
    DELETE_SHEET: "GOOGLESHEETS_DELETE_SHEET",
    /**
     * Execute sql queries against google sheets tables. supports select, insert, update, and delete operations with familiar sql syntax. tables are automatically detected and mapped from the spreadsheet structure.
     */
    EXECUTE_SQL: "GOOGLESHEETS_EXECUTE_SQL",
    /**
     * Finds a worksheet by its exact, case-sensitive title within a google spreadsheet; returns a boolean indicating if found and the complete metadata of the entire spreadsheet, regardless of whether the target worksheet is found.
     */
    FIND_WORKSHEET_BY_TITLE: "GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE",
    /**
     * Applies text and background cell formatting to a specified range in a google sheets worksheet.
     */
    FORMAT_CELL: "GOOGLESHEETS_FORMAT_CELL",
    /**
     * Lists all worksheet names from a specified google spreadsheet (which must exist), useful for discovering sheets before further operations.
     */
    GET_SHEET_NAMES: "GOOGLESHEETS_GET_SHEET_NAMES",
    /**
     * Returns the spreadsheet at the given id, filtered by the specified data filters. use this tool when you need to retrieve specific subsets of data from a google sheet based on criteria like a1 notation, developer metadata, or grid ranges.
     */
    GET_SPREADSHEET_BY_DATA_FILTER: "GOOGLESHEETS_GET_SPREADSHEET_BY_DATA_FILTER",
    /**
     * Retrieves comprehensive metadata for a google spreadsheet using its id, excluding cell data.
     */
    GET_SPREADSHEET_INFO: "GOOGLESHEETS_GET_SPREADSHEET_INFO",
    /**
     * This action is used to get the schema of a table in a google spreadsheet, call this action to get the schema of a table in a spreadsheet before you query the table. analyze table structure and infer column names, types, and constraints. uses statistical analysis of sample data to determine the most likely data type for each column. call this action after calling the list tables action to get the schema of a table in a spreadsheet.
     */
    GET_TABLE_SCHEMA: "GOOGLESHEETS_GET_TABLE_SCHEMA",
    /**
     * Tool to insert new rows or columns into a sheet at a specified location. use when you need to add empty rows or columns within an existing google sheet.
     */
    INSERT_DIMENSION: "GOOGLESHEETS_INSERT_DIMENSION",
    /**
     * This action is used to list all tables in a google spreadsheet, call this action to get the list of tables in a spreadsheet. discover all tables in a google spreadsheet by analyzing sheet structure and detecting data patterns. uses heuristic analysis to find header rows, data boundaries, and table structures.
     */
    LIST_TABLES: "GOOGLESHEETS_LIST_TABLES",
    /**
     * Finds the first row in a google spreadsheet where a cell's entire content exactly matches the query string, searching within a specified a1 notation range or the first sheet by default.
     */
    LOOKUP_SPREADSHEET_ROW: "GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW",
    /**
     * This action is used to query a table in a google spreadsheet, call this action to query a table in a spreadsheet. execute sql-like select queries against spreadsheet tables. supports where conditions, order by, limit clauses. call this action after calling the get table schema action to query a table in a spreadsheet.
     */
    QUERY_TABLE: "GOOGLESHEETS_QUERY_TABLE",
    /**
     * Tool to search for developer metadata in a spreadsheet. use when you need to find specific metadata entries based on filters.
     */
    SEARCH_DEVELOPER_METADATA: "GOOGLESHEETS_SEARCH_DEVELOPER_METADATA",
    /**
     * Search for google spreadsheets using various filters including name, content, date ranges, and more.
     */
    SEARCH_SPREADSHEETS: "GOOGLESHEETS_SEARCH_SPREADSHEETS",
    /**
     * Tool to set a basic filter on a sheet in a google spreadsheet. use when you need to filter or sort data within a specific range on a sheet.
     */
    SET_BASIC_FILTER: "GOOGLESHEETS_SET_BASIC_FILTER",
    /**
     * Creates a new google spreadsheet and populates its first worksheet from `sheet json`, which must be non-empty as its first item's keys establish the headers.
     */
    SHEET_FROM_JSON: "GOOGLESHEETS_SHEET_FROM_JSON",
    /**
     * Tool to copy a single sheet from a spreadsheet to another spreadsheet. use when you need to duplicate a sheet into a different spreadsheet.
     */
    SPREADSHEETS_SHEETS_COPY_TO: "GOOGLESHEETS_SPREADSHEETS_SHEETS_COPY_TO",
    /**
     * Tool to append values to a spreadsheet. use when you need to add new data to the end of an existing table in a google sheet.
     */
    SPREADSHEETS_VALUES_APPEND: "GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND",
    /**
     * Tool to clear one or more ranges of values from a spreadsheet. use when you need to remove data from specific cells or ranges while keeping formatting and other properties intact.
     */
    SPREADSHEETS_VALUES_BATCH_CLEAR: "GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR",
    /**
     * Clears one or more ranges of values from a spreadsheet using data filters. the caller must specify the spreadsheet id and one or more datafilters. ranges matching any of the specified data filters will be cleared. only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     */
    SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER: "GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_CLEAR_BY_DATA_FILTER",
    /**
     * Tool to return one or more ranges of values from a spreadsheet that match the specified data filters. use when you need to retrieve specific data sets based on filtering criteria rather than entire sheets or fixed ranges.
     */
    SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER: "GOOGLESHEETS_SPREADSHEETS_VALUES_BATCH_GET_BY_DATA_FILTER",
    /**
     * Tool to update properties of a sheet (worksheet) within a google spreadsheet, such as its title, index, visibility, tab color, or grid properties. use this when you need to modify the metadata or appearance of a specific sheet.
     */
    UPDATE_SHEET_PROPERTIES: "GOOGLESHEETS_UPDATE_SHEET_PROPERTIES",
    /**
     * Tool to update properties of a spreadsheet, such as its title, locale, or auto-recalculation settings. use when you need to modify the overall configuration of a google sheet.
     */
    UPDATE_SPREADSHEET_PROPERTIES: "GOOGLESHEETS_UPDATE_SPREADSHEET_PROPERTIES",
  },
  triggerTypes: {
    /**
     * Simple polling trigger that monitors Google Sheets for new rows.
     *     Detects when new rows are added and returns the complete row data.
     *     Perfect for triggering any workflow based on new sheet entries.
     */
    NEW_ROWS_TRIGGER: "GOOGLESHEETS_NEW_ROWS_TRIGGER",
    /**
     * Polling trigger that detects when a new sheet is added to a Google Spreadsheet.
     */
    NEW_SHEET_ADDED_TRIGGER: "GOOGLESHEETS_NEW_SHEET_ADDED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLESHEETS".
 */
export type GOOGLESHEETS_TRIGGER_PAYLOADS = {
  NEW_ROWS_TRIGGER: GOOGLESHEETS_NEW_ROWS_TRIGGER_PAYLOAD
  NEW_SHEET_ADDED_TRIGGER: GOOGLESHEETS_NEW_SHEET_ADDED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GOOGLESHEETS".
 */
export type GOOGLESHEETS_TRIGGER_EVENTS = {
  NEW_ROWS_TRIGGER: TriggerEvent<GOOGLESHEETS_NEW_ROWS_TRIGGER_PAYLOAD>
  NEW_SHEET_ADDED_TRIGGER: TriggerEvent<GOOGLESHEETS_NEW_SHEET_ADDED_TRIGGER_PAYLOAD>
}
