// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AIRTABLE's AIRTABLE_CREATE_BASE tool input.
 */
type AIRTABLE_CREATE_BASE_INPUT = {
  /**
   * Name
   * @description Name for the new Airtable base, visible in the UI.
   */
  name?: string;
  /**
   * Tables
   * @description Configurations for tables to be created in the new base; each table needs 'name' and 'fields'.
   */
  tables?: {
      /**
       * Description
       * @description Optional description of the table.
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description Field configurations defining table columns; each needs a name and a valid Airtable field type.
       */
      fields: {
          /**
           * Description
           * @description Optional description for the field
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description The name of the field
           */
          name: string;
          /**
           * Options
           * @description Optional configuration for the field
           * @default null
           */
          options: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description The type of the field
           * @enum {string}
           */
          type: "aiText" | "attachment" | "autoNumber" | "barcode" | "button" | "checkbox" | "singleCollaborator" | "count" | "createdBy" | "createdTime" | "currency" | "date" | "dateTime" | "duration" | "email" | "formula" | "lastModifiedBy" | "lastModifiedTime" | "multipleRecordLinks" | "multilineText" | "multipleLookupValues" | "multipleCollaborators" | "multipleSelects" | "number" | "percent" | "phoneNumber" | "rating" | "richText" | "rollup" | "singleLineText" | "singleSelect" | "externalSyncSource" | "url";
      }[];
      /**
       * Name
       * @description Name of the table, unique within the base.
       */
      name: string;
  }[];
  /**
   * Workspace Id
   * @description Unique ID of the Airtable workspace (e.g., 'wspXXXXXXXXXXXXXX') for base creation.
   */
  workspaceId?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_CREATE_BASE tool output.
 */
type AIRTABLE_CREATE_BASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response from Airtable, including new base 'id', 'name', and 'tables' details upon successful creation.
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
 * Type of AIRTABLE's AIRTABLE_CREATE_COMMENT tool input.
 */
type AIRTABLE_CREATE_COMMENT_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the Airtable base. This typically starts with 'app'.
   */
  baseId?: string;
  /**
   * Record Id
   * @description The unique identifier of the record on which the comment will be created. This typically starts with 'rec'.
   */
  recordId?: string;
  /**
   * Table Id Or Name
   * @description The unique identifier (typically starting with 'tbl') or the name of the table within the base.
   */
  tableIdOrName?: string;
  /**
   * Text
   * @description The content of the comment. To mention a user, use the format @[userId] (e.g., @[usrGISFlfA7l5F7kY6]).
   */
  text?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_CREATE_COMMENT tool output.
 */
type AIRTABLE_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response from the Airtable API, containing details of the created comment such as its ID, text, timestamps, and author.
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
 * Type of AIRTABLE's AIRTABLE_CREATE_FIELD tool input.
 */
type AIRTABLE_CREATE_FIELD_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the base where the field will be created.
   */
  baseId?: string;
  /**
   * Description
   * @description An optional description for the new field. This can provide context or instructions for the field's usage.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The name for the new field. Field names must be unique within a table.
   */
  name?: string;
  /**
   * Options
   * @description Optional type-specific configuration for the new field. The structure of this object depends on the 'type' chosen. For example, for a 'singleSelect' or 'multipleSelects' field, 'options' would include a 'choices' array. For a 'number' field, 'options' could include 'precision'. For a 'date' or 'dateTime' field, 'options' could include 'dateFormat' or 'timeFormat'. Consult the Airtable API documentation for specific options available for each field type.
   * @default null
   */
  options: {
      [key: string]: unknown;
  } | null;
  /**
   * Table Id
   * @description The unique identifier of the table within the base where the field will be created.
   */
  tableId?: string;
  /**
   * Type
   * @description The type for the new field. If not provided, it defaults to 'singleLineText'. Supported types include 'singleLineText', 'multilineText', 'richText', 'singleSelect', 'multipleSelects', 'checkbox', 'number', 'percent', 'currency', 'date', 'dateTime', 'duration', 'phoneNumber', 'email', 'url', 'attachment', 'formula', 'rollup', 'count', 'lookup', 'multipleLookupValues', 'autonumber', 'barcode', 'rating', 'button', 'createdBy', 'createdTime', 'lastModifiedBy', 'lastModifiedTime', and 'externalSyncSource'.
   * @default singleLineText
   */
  type: string | null;
};

/**
 * Type of AIRTABLE's AIRTABLE_CREATE_FIELD tool output.
 */
type AIRTABLE_CREATE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response from the Airtable API representing the newly created field, including its ID, type, name, description, and options.
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
 * Type of AIRTABLE's AIRTABLE_CREATE_MULTIPLE_RECORDS tool input.
 */
type AIRTABLE_CREATE_MULTIPLE_RECORDS_INPUT = {
  /**
   * Base Id
   * @description Identifier of the Airtable base.
   */
  baseId?: string;
  /**
   * Records
   * @description List of new records, typically up to 10 per request. Each record object must have a `fields` key, mapping case-sensitive field names to values that align with Airtable field data types.
   */
  records?: {
      [key: string]: unknown;
  }[];
  /**
   * Table Id Or Name
   * @description Identifier or name of the table for record creation.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_CREATE_MULTIPLE_RECORDS tool output.
 */
type AIRTABLE_CREATE_MULTIPLE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full JSON response from the Airtable API, typically including created records (with IDs and field data) or error details.
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
 * Type of AIRTABLE's AIRTABLE_CREATE_RECORD tool input.
 */
type AIRTABLE_CREATE_RECORD_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the Airtable base.
   */
  baseId?: string;
  /**
   * Fields
   * @description A dictionary of field names (or IDs) and their values for the new record. Ensure values conform to the target table's field types.
   */
  fields?: {
      [key: string]: unknown;
  };
  /**
   * Table Id Or Name
   * @description The unique identifier or name of the table.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_CREATE_RECORD tool output.
 */
type AIRTABLE_CREATE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response from the Airtable API, including the new record's ID, fields, and creation timestamp.
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
 * Type of AIRTABLE's AIRTABLE_CREATE_TABLE tool input.
 */
type AIRTABLE_CREATE_TABLE_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the base where the new table will be created.
   */
  baseId?: string;
  /**
   * Description
   * @description An optional textual description for the new table.
   * @default null
   */
  description: string | null;
  /**
   * Fields
   * @description A list of field configurations for the new table. Each configuration defines a column and must include a 'name' (string) and 'type' (string, e.g., 'singleLineText', 'number', 'date'). Some field types may also require an 'options' object for further configuration (e.g., 'choices' for 'singleSelect' or 'multipleSelects' types).
   */
  fields?: {
      /**
       * Description
       * @description Optional description for the field
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description The name of the field
       */
      name: string;
      /**
       * Options
       * @description Optional configuration for the field
       * @default null
       */
      options: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description The type of the field
       * @enum {string}
       */
      type: "aiText" | "attachment" | "autoNumber" | "barcode" | "button" | "checkbox" | "singleCollaborator" | "count" | "createdBy" | "createdTime" | "currency" | "date" | "dateTime" | "duration" | "email" | "formula" | "lastModifiedBy" | "lastModifiedTime" | "multipleRecordLinks" | "multilineText" | "multipleLookupValues" | "multipleCollaborators" | "multipleSelects" | "number" | "percent" | "phoneNumber" | "rating" | "richText" | "rollup" | "singleLineText" | "singleSelect" | "externalSyncSource" | "url";
  }[];
  /**
   * Name
   * @description The desired name for the new table.
   */
  name?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_CREATE_TABLE tool output.
 */
type AIRTABLE_CREATE_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full response from the Airtable API upon successful table creation, including the ID, name, fields, and description of the newly created table.
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
 * Type of AIRTABLE's AIRTABLE_DELETE_COMMENT tool input.
 */
type AIRTABLE_DELETE_COMMENT_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the Airtable base from which the comment will be deleted.
   */
  baseId?: string;
  /**
   * Record Id
   * @description The unique identifier of the record within the specified table from which the comment will be deleted.
   */
  recordId?: string;
  /**
   * Row Comment Id
   * @description The unique identifier of the comment to be deleted from the specified record.
   */
  rowCommentId?: string;
  /**
   * Table Id Or Name
   * @description The unique identifier (ID) or name of the table within the specified base that contains the record and comment.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_DELETE_COMMENT tool output.
 */
type AIRTABLE_DELETE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response body from the Airtable API, parsed into a dictionary. This field is populated if the API returns a JSON payload for the delete operation.
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
 * Type of AIRTABLE's AIRTABLE_DELETE_MULTIPLE_RECORDS tool input.
 */
type AIRTABLE_DELETE_MULTIPLE_RECORDS_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the Airtable base containing the records to be deleted.
   */
  baseId?: string;
  /**
   * Record Ids
   * @description A list of unique identifiers for the records to be deleted.
   */
  recordIds?: string[];
  /**
   * Table Id Or Name
   * @description The unique identifier (e.g., 'tbluIzIsxPIM2V3Y4') or the name (e.g., 'Marketing Leads') of the table within the base from which records will be deleted.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_DELETE_MULTIPLE_RECORDS tool output.
 */
type AIRTABLE_DELETE_MULTIPLE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the API response from Airtable. Typically, this includes a 'records' key with a list of objects, each indicating the deletion status and ID of a record (e.g., `{'deleted': True, 'id': 'recXXXXXXXXXXXXXX'}`).
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
 * Type of AIRTABLE's AIRTABLE_DELETE_RECORD tool input.
 */
type AIRTABLE_DELETE_RECORD_INPUT = {
  /**
   * Base Id
   * @description Unique identifier of the Airtable base, typically starting with 'app'.
   */
  baseId?: string;
  /**
   * Record Id
   * @description Unique identifier of the record to be deleted, typically starting with 'rec'.
   */
  recordId?: string;
  /**
   * Table Id Or Name
   * @description Unique identifier (typically starting with 'tbl') or name of the table within the specified base.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_DELETE_RECORD tool output.
 */
type AIRTABLE_DELETE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response data, typically including a 'deleted' flag set to true and the 'id' of the deleted record upon successful deletion.
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
 * Type of AIRTABLE's AIRTABLE_GET_BASE_SCHEMA tool input.
 */
type AIRTABLE_GET_BASE_SCHEMA_INPUT = {
  /**
   * Base Id
   * @description The unique identifier for the Airtable base. This ID typically starts with 'app' and is followed by a string of alphanumeric characters. It can be found in the URL when viewing the base.
   */
  baseId?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_GET_BASE_SCHEMA tool output.
 */
type AIRTABLE_GET_BASE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the schema of the specified Airtable base. This includes details about its tables, fields, field types, and any associated options or configurations.
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
 * Type of AIRTABLE's AIRTABLE_GET_RECORD tool input.
 */
type AIRTABLE_GET_RECORD_INPUT = {
  /**
   * Base Id
   * @description ID of the Airtable base.
   */
  baseId?: string;
  /**
   * Cell Format
   * @description Controls cell value formatting: 'json' for native types, 'string' for all values as strings.
   * @default json
   * @enum {string}
   */
  cellFormat: "json" | "string";
  /**
   * Record Id
   * @description ID of the record to retrieve.
   */
  recordId?: string;
  /**
   * Return Fields By Field Id
   * @description If true, field keys in the response are field IDs; otherwise, field names.
   * @default false
   */
  returnFieldsByFieldId: boolean;
  /**
   * Table Id Or Name
   * @description ID or name of the table.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_GET_RECORD tool output.
 */
type AIRTABLE_GET_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Retrieved Airtable record. Field keys within 'fields' depend on `returnFieldsByFieldId`.
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
 * Type of AIRTABLE's AIRTABLE_GET_USER_INFO tool input.
 */
type AIRTABLE_GET_USER_INFO_INPUT = object;

/**
 * Type of AIRTABLE's AIRTABLE_GET_USER_INFO tool output.
 */
type AIRTABLE_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Authenticated user's information (e.g., ID, permission scopes) from the Airtable `/meta/whoami` endpoint.
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
 * Type of AIRTABLE's AIRTABLE_LIST_BASES tool input.
 */
type AIRTABLE_LIST_BASES_INPUT = object;

/**
 * Type of AIRTABLE's AIRTABLE_LIST_BASES tool output.
 */
type AIRTABLE_LIST_BASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Airtable API, typically including a 'bases' array (each with 'id', 'name') and an 'offset' for pagination if the list is extensive.
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
 * Type of AIRTABLE's AIRTABLE_LIST_COMMENTS tool input.
 */
type AIRTABLE_LIST_COMMENTS_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the Airtable base from which to list comments.
   */
  baseId?: string;
  /**
   * Record Id
   * @description The unique identifier of the record for which comments are to be listed.
   */
  recordId?: string;
  /**
   * Table Id Or Name
   * @description The unique identifier or name of the table within the specified base containing the record.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_LIST_COMMENTS tool output.
 */
type AIRTABLE_LIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response from the Airtable API, containing a list of comment objects and pagination information, if applicable, for the specified record.
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
 * Type of AIRTABLE's AIRTABLE_LIST_RECORDS tool input.
 */
type AIRTABLE_LIST_RECORDS_INPUT = {
  /**
   * Base Id
   * @description The ID of the Airtable base.
   */
  baseId?: string;
  /**
   * Cell Format
   * @description Specifies how cell values are returned. 'json' returns rich structured JSON values, while 'string' returns simple string representations. Defaults to 'json'.
   * @default json
   * @enum {string}
   */
  cellFormat: "json" | "string";
  /**
   * Fields
   * @description An array of field names or IDs to include in the response. If empty, all fields are returned. Cannot be used with `returnFieldsByFieldId` when that is true.
   * @default []
   */
  fields: string[];
  /**
   * Filter By Formula
   * @description A formula used to filter records. The formula follows Airtable's formula syntax. Only records for which the formula evaluates to true will be returned.
   */
  filterByFormula?: string;
  /**
   * Max Records
   * @description The maximum total number of records to return. If not specified, all records matching the query will be returned, up to Airtable's limits.
   */
  maxRecords?: number;
  /**
   * Offset
   * @description The opaque offset for pagination, used to retrieve the next page of records. This value is provided in the previous response.
   */
  offset?: string;
  /**
   * Page Size
   * @description The number of records to return per page. Must be between 1 and 100, inclusive. Defaults to 100.
   * @default 100
   */
  pageSize: number;
  /**
   * Record Metadata
   * @description An array of strings specifying which record metadata to include. Currently, the only supported value is 'commentCount'.
   * @default []
   */
  recordMetadata: string[];
  /**
   * Return Fields By Field Id
   * @description If true, field names in the response will be field IDs instead of field names. This is useful if you need stable field identifiers, as field names can change.
   * @default false
   */
  returnFieldsByFieldId: boolean;
  /**
   * Sort
   * @description A list of sort objects to apply to the records. Records are sorted by the first sort object, then by the second, and so on. If not specified, records are returned in the order they appear in the table or view.
   * @default []
   */
  sort: {
      /**
       * Direction
       * @description The direction for sorting. Defaults to 'desc'.
       * @default desc
       * @enum {string}
       */
      direction: "asc" | "desc";
      /**
       * Field
       * @description The name or ID of the field to sort by.
       */
      field: string;
  }[];
  /**
   * Table Id Or Name
   * @description The ID or name of the table within the base.
   */
  tableIdOrName?: string;
  /**
   * Time Zone
   * @description The time zone to use for formatting date and time fields. Defaults to UTC. This affects how formulas like CREATED_TIME() are computed.
   * @default utc
   * @enum {string}
   */
  timeZone: "utc" | "client" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
  /**
   * User Locale
   * @description The user locale to use for formatting cell values. For example, 'en-US' or 'fr-FR'. This affects how values like dates and numbers are displayed. This field is required when `cellFormat` is set to 'string'.
   */
  userLocale?: string;
  /**
   * View
   * @description The name or ID of an existing view in the table. If specified, records will be returned according to the sort order and filters of this view.
   */
  view?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_LIST_RECORDS tool output.
 */
type AIRTABLE_LIST_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response from the Airtable API, containing the list of records and any pagination offset.
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
 * Type of AIRTABLE's AIRTABLE_UPDATE_MULTIPLE_RECORDS tool input.
 */
type AIRTABLE_UPDATE_MULTIPLE_RECORDS_INPUT = {
  /**
   * Base Id
   * @description The ID of the Airtable base containing the table.
   */
  baseId?: string;
  /**
   * Records
   * @description List of records to be updated. A maximum of 10 records can be updated per request.
   */
  records?: {
      /**
       * Fields
       * @description A dictionary where keys are field names (or field IDs) and values are the new content for those fields.
       */
      fields: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the record to be updated in Airtable.
       */
      id: string;
  }[];
  /**
   * Table Id Or Name
   * @description The ID or name of the table within the base where records will be updated.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_UPDATE_MULTIPLE_RECORDS tool output.
 */
type AIRTABLE_UPDATE_MULTIPLE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response from the Airtable API, detailing the results of the update operation for each record.
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
 * Type of AIRTABLE's AIRTABLE_UPDATE_RECORD tool input.
 */
type AIRTABLE_UPDATE_RECORD_INPUT = {
  /**
   * Base Id
   * @description The unique identifier of the Airtable base containing the record to be updated.
   */
  baseId?: string;
  /**
   * Fields
   * @description Specifies fields to update. Keys are field names or IDs; values are new content. Only included fields are modified; others remain unchanged.
   */
  fields?: {
      [key: string]: unknown;
  };
  /**
   * Record Id
   * @description The unique identifier (ID) of the record to be updated within the specified table.
   */
  recordId?: string;
  /**
   * Return Fields By Field Id
   * @description If `True`, API response keys record fields by field ID instead of name. Using field IDs is recommended for integrations resilient to field name changes.
   * @default false
   */
  returnFieldsByFieldId: boolean;
  /**
   * Table Id Or Name
   * @description The unique identifier (ID) or the name of the table within the base that contains the record to be updated.
   */
  tableIdOrName?: string;
};

/**
 * Type of AIRTABLE's AIRTABLE_UPDATE_RECORD tool output.
 */
type AIRTABLE_UPDATE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated record object from Airtable, including all its fields, conforming to Airtable's API response format.
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
 * Type map of all available tool input types for toolkit "AIRTABLE".
 */
export type AIRTABLE_TOOL_INPUTS = {
  CREATE_BASE: AIRTABLE_CREATE_BASE_INPUT
  CREATE_COMMENT: AIRTABLE_CREATE_COMMENT_INPUT
  CREATE_FIELD: AIRTABLE_CREATE_FIELD_INPUT
  CREATE_MULTIPLE_RECORDS: AIRTABLE_CREATE_MULTIPLE_RECORDS_INPUT
  CREATE_RECORD: AIRTABLE_CREATE_RECORD_INPUT
  CREATE_TABLE: AIRTABLE_CREATE_TABLE_INPUT
  DELETE_COMMENT: AIRTABLE_DELETE_COMMENT_INPUT
  DELETE_MULTIPLE_RECORDS: AIRTABLE_DELETE_MULTIPLE_RECORDS_INPUT
  DELETE_RECORD: AIRTABLE_DELETE_RECORD_INPUT
  GET_BASE_SCHEMA: AIRTABLE_GET_BASE_SCHEMA_INPUT
  GET_RECORD: AIRTABLE_GET_RECORD_INPUT
  GET_USER_INFO: AIRTABLE_GET_USER_INFO_INPUT
  LIST_BASES: AIRTABLE_LIST_BASES_INPUT
  LIST_COMMENTS: AIRTABLE_LIST_COMMENTS_INPUT
  LIST_RECORDS: AIRTABLE_LIST_RECORDS_INPUT
  UPDATE_MULTIPLE_RECORDS: AIRTABLE_UPDATE_MULTIPLE_RECORDS_INPUT
  UPDATE_RECORD: AIRTABLE_UPDATE_RECORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AIRTABLE".
 */
export type AIRTABLE_TOOL_OUTPUTS = {
  CREATE_BASE: AIRTABLE_CREATE_BASE_OUTPUT
  CREATE_COMMENT: AIRTABLE_CREATE_COMMENT_OUTPUT
  CREATE_FIELD: AIRTABLE_CREATE_FIELD_OUTPUT
  CREATE_MULTIPLE_RECORDS: AIRTABLE_CREATE_MULTIPLE_RECORDS_OUTPUT
  CREATE_RECORD: AIRTABLE_CREATE_RECORD_OUTPUT
  CREATE_TABLE: AIRTABLE_CREATE_TABLE_OUTPUT
  DELETE_COMMENT: AIRTABLE_DELETE_COMMENT_OUTPUT
  DELETE_MULTIPLE_RECORDS: AIRTABLE_DELETE_MULTIPLE_RECORDS_OUTPUT
  DELETE_RECORD: AIRTABLE_DELETE_RECORD_OUTPUT
  GET_BASE_SCHEMA: AIRTABLE_GET_BASE_SCHEMA_OUTPUT
  GET_RECORD: AIRTABLE_GET_RECORD_OUTPUT
  GET_USER_INFO: AIRTABLE_GET_USER_INFO_OUTPUT
  LIST_BASES: AIRTABLE_LIST_BASES_OUTPUT
  LIST_COMMENTS: AIRTABLE_LIST_COMMENTS_OUTPUT
  LIST_RECORDS: AIRTABLE_LIST_RECORDS_OUTPUT
  UPDATE_MULTIPLE_RECORDS: AIRTABLE_UPDATE_MULTIPLE_RECORDS_OUTPUT
  UPDATE_RECORD: AIRTABLE_UPDATE_RECORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AIRTABLE toolkit.
 */
export const AIRTABLE = {
  slug: "airtable",
  tools: {
    /**
     * Creates a new airtable base with specified tables and fields within a workspace; ensure field options are valid for their type.
     */
    CREATE_BASE: "AIRTABLE_CREATE_BASE",
    /**
     * Creates a new comment on a specific record within an airtable base and table.
     */
    CREATE_COMMENT: "AIRTABLE_CREATE_COMMENT",
    /**
     * Creates a new field within a specified table in an airtable base.
     */
    CREATE_FIELD: "AIRTABLE_CREATE_FIELD",
    /**
     * Creates multiple new records in a specified airtable table.
     */
    CREATE_MULTIPLE_RECORDS: "AIRTABLE_CREATE_MULTIPLE_RECORDS",
    /**
     * Creates a new record in a specified airtable table; field values must conform to the table's column types.
     */
    CREATE_RECORD: "AIRTABLE_CREATE_RECORD",
    /**
     * Creates a new table within a specified existing airtable base, allowing definition of its name, description, and field structure.
     */
    CREATE_TABLE: "AIRTABLE_CREATE_TABLE",
    /**
     * Deletes an existing comment from a specified record in an airtable table.
     */
    DELETE_COMMENT: "AIRTABLE_DELETE_COMMENT",
    /**
     * Deletes up to 10 specified records from a table within an airtable base.
     */
    DELETE_MULTIPLE_RECORDS: "AIRTABLE_DELETE_MULTIPLE_RECORDS",
    /**
     * Permanently deletes a specific record from an existing table within an existing airtable base.
     */
    DELETE_RECORD: "AIRTABLE_DELETE_RECORD",
    /**
     * Retrieves the detailed schema for a specified airtable base, including its tables, fields, field types, and configurations, using the `baseid`.
     */
    GET_BASE_SCHEMA: "AIRTABLE_GET_BASE_SCHEMA",
    /**
     * Retrieves a specific record from a table within an airtable base.
     */
    GET_RECORD: "AIRTABLE_GET_RECORD",
    /**
     * Retrieves information, such as id and permission scopes, for the currently authenticated airtable user from the `/meta/whoami` endpoint.
     */
    GET_USER_INFO: "AIRTABLE_GET_USER_INFO",
    /**
     * Retrieves all airtable bases accessible to the authenticated user, which may include an 'offset' for pagination.
     */
    LIST_BASES: "AIRTABLE_LIST_BASES",
    /**
     * Retrieves all comments for a specific record in an airtable table, requiring existing `baseid`, `tableidorname`, and `recordid`.
     */
    LIST_COMMENTS: "AIRTABLE_LIST_COMMENTS",
    /**
     * Retrieves records from an airtable table, with options for filtering, sorting, pagination, and specifying returned fields.
     */
    LIST_RECORDS: "AIRTABLE_LIST_RECORDS",
    /**
     * Updates multiple existing records in a specified airtable table; these updates are not performed atomically.
     */
    UPDATE_MULTIPLE_RECORDS: "AIRTABLE_UPDATE_MULTIPLE_RECORDS",
    /**
     * Modifies specified fields of an existing record in an airtable base and table; the base, table, and record must exist.
     */
    UPDATE_RECORD: "AIRTABLE_UPDATE_RECORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AIRTABLE".
 */
export type AIRTABLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AIRTABLE".
 */
export type AIRTABLE_TRIGGER_EVENTS = {}
