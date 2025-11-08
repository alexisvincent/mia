// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SERVICENOW's SERVICENOW_ATTACH_FILE_TO_RECORD tool input.
 */
type SERVICENOW_ATTACH_FILE_TO_RECORD_INPUT = {
  /**
   * Creation Time
   * @description Creation date and time of the attachment. Use this parameter to capture attachment creation times when the Now Mobile app is offline and the attachment is uploaded to a record at a later time.
   */
  creation_time?: string;
  /**
   * Encryption Context
   * @description Sys_id of an encryption context record. Specify this parameter to allow only users with the specified encryption context to access the attachment. For additional information on encryption context records, see https://www.servicenow.com/docs/csh?topicname=column-level-encryption-landing&version=yokohama&pubname=yokohama-platform-security.
   */
  encryption_context?: string;
  /**
   * File Name
   * @description Name to give the attachment.
   */
  file_name?: string;
  /**
   * FileUploadable
   * @description The path of the file to upload.
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
   * Record Sys Id
   * @description Sys_id of the record in the table specified in table_name that you want to attach the file to.
   */
  record_sys_id?: string;
  /**
   * Table Name
   * @description Name of the table to attach the file to.
   */
  table_name?: string;
};

/**
 * Type of SERVICENOW's SERVICENOW_ATTACH_FILE_TO_RECORD tool output.
 */
type SERVICENOW_ATTACH_FILE_TO_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description The status of the attach operation
       */
      status: string;
      /**
       * Sys Id
       * @description Sys_id of the attached file
       */
      sys_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SERVICENOW's SERVICENOW_CREATE_A_RECORD tool input.
 */
type SERVICENOW_CREATE_A_RECORD_INPUT = {
  /**
   * Sysparm Display Value
   * @description Determines the type of data returned, either the actual values from the database or the display values of the fields. Display values are manipulated based on the actual value in the database and user or system settings and preferences.
   * @default false
   * @enum {string}
   */
  sysparm_display_value: "true" | "false" | "all";
  /**
   * Sysparm Exclude Reference Link
   * @description Flag that indicates whether to exclude Table API links for reference fields.
   * @default false
   */
  sysparm_exclude_reference_link: boolean;
  /**
   * Sysparm Fields
   * @description Comma-separated list of fields to return in the response. Invalid fields are ignored. Default behaviour is to return all fields.
   */
  sysparm_fields?: string;
  /**
   * Sysparm Input Display Value
   * @description Flag that indicates whether to set field values using the display value or the actual value.
   * @default false
   */
  sysparm_input_display_value: boolean;
  /**
   * Sysparm View
   * @description UI view for which to render the data. Determines the fields returned in the response.
   * @default both
   * @enum {string}
   */
  sysparm_view: "desktop" | "mobile" | "both";
  /**
   * Table Name
   * @description The name of the table where the record will be created.
   */
  table_name?: string;
};

/**
 * Type of SERVICENOW's SERVICENOW_CREATE_A_RECORD tool output.
 */
type SERVICENOW_CREATE_A_RECORD_OUTPUT = {
  /**
   * Data
   * @description The data returned by the API
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
 * Type of SERVICENOW's SERVICENOW_DELETE_A_RECORD tool input.
 */
type SERVICENOW_DELETE_A_RECORD_INPUT = {
  /**
   * Sys Id
   * @description Sys_id of the record to delete.
   */
  sys_id?: string;
  /**
   * Sysparm Query No Domain
   * @description Flag that indicates whether to restrict the record search to only the domains for which the logged in user is configured.
   * @default false
   */
  sysparm_query_no_domain: boolean;
  /**
   * Table Name
   * @description Name of the table from which to delete the specified record, such as 'incident' or 'asset'.
   */
  table_name?: string;
};

/**
 * Type of SERVICENOW's SERVICENOW_DELETE_A_RECORD tool output.
 */
type SERVICENOW_DELETE_A_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description The status of the delete operation
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
 * Type of SERVICENOW's SERVICENOW_FIND_FILE tool input.
 */
type SERVICENOW_FIND_FILE_INPUT = {
  /**
   * Sysparm Limit
   * @description Limit to be applied on pagination. Note: Unusually large sysparm_limit values can impact system performance.
   * @default 1000
   */
  sysparm_limit: string;
  /**
   * Sysparm Offset
   * @description Number of records to exclude from the query. Use this parameter to get more records than specified in sysparm_limit parameter. For example, if sysparm_limit is set to 500, but there are additional records you want to query, you can specify a sysparm_offset parameter value of 500 to get the second set of records.
   * @default 0
   */
  sysparm_offset: string;
  /**
   * Sysparm Query
   * @description Encoded query. Queries for the Attachment API are relative to the Attachments [sys_attachment] table. For example: (sysparm_query=file_name=attachment.doc) The encoded query provides support for order by. To sort responses based on certain fields, use the ORDERBY and ORDERBYDESC clauses in sysparm_query. For example, sysparm_query=ORDERBYfile_name^ORDERBYDESCtable_Name orders the results in ascending order by name first, then in descending order by table name.
   */
  sysparm_query?: string;
};

/**
 * Type of SERVICENOW's SERVICENOW_FIND_FILE tool output.
 */
type SERVICENOW_FIND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The data returned by the API
       */
      results: unknown[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SERVICENOW's SERVICENOW_GET_RECORDS tool input.
 */
type SERVICENOW_GET_RECORDS_INPUT = {
  /**
   * Name Value Pairs
   * @description Name-value pairs to use to filter the result set. This parameter is mutually exclusive with sysparm_query. For example, instead of using &sysparm_query=active=true, you can simplify the calling statement by using &active=true. You can also use the display value when the field is a choice or reference type field, such as &state=closed instead of &state=7. To specify multiple key-value pairs, separate each with an ampersand, such as &active=true&assigned_to=john.smith.
   */
  name_value_pairs?: string;
  /**
   * Sysparm Display Value
   * @description Determines the type of data returned, either the actual values from the database or the display values of the fields. Display values are manipulated based on the actual value in the database and user or system settings and preferences. If returning display values, the value that is returned is dependent on the field type. Choice fields: The database value may be a number, but the display value will be more descriptive. Date fields: The database value is in UTC format, while the display value is based on the user's time zone. Encrypted text: The database value is encrypted, while the displayed value is unencrypted based on the user's encryption context. Reference fields: The database value is sys_id, but the display value is a display field of the referenced record.
   * @default false
   * @enum {string}
   */
  sysparm_display_value: "true" | "false" | "all";
  /**
   * Sysparm Exclude Reference Link
   * @description Flag that indicates whether to exclude Table API links for reference fields.
   * @default false
   */
  sysparm_exclude_reference_link: boolean;
  /**
   * Sysparm Fields
   * @description Comma-separated list of fields to return in the response. Invalid fields are ignored.
   */
  sysparm_fields?: string;
  /**
   * Sysparm Limit
   * @description Maximum number of records to return. For requests that exceed this number of records, use the sysparm_offset parameter to paginate record retrieval. This limit is applied before ACL evaluation. If no records return, including records you have access to, rearrange the record order so records you have access to return first. Note: Unusually large sysparm_limit values can impact system performance.
   * @default 20
   */
  sysparm_limit: number;
  /**
   * Sysparm No Count
   * @description Flag that indicates whether to execute a select count(*) query on the table to return the number of rows in the associated table.
   * @default false
   */
  sysparm_no_count: boolean;
  /**
   * Sysparm Offset
   * @description Starting record index for which to begin retrieving records. Use this value to paginate record retrieval. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time you call this endpoint, sysparm_offset is set to '0'. To simply page through all available records, use sysparm_offset=sysparm_offset+sysparm_limit, until you reach the end of all records. Don't pass a negative number in the sysparm_offset parameter.
   * @default 0
   */
  sysparm_offset: number;
  /**
   * Sysparm Query
   * @description Encoded query used to filter the result set. You can use a UI filter to obtain a properly encoded query. Syntax: sysparm_query=<col_name><operator><value>. <col_name>: Name of the table column to filter against. <operator>: Supports the following values: =: Exactly matches <value>. !=: Does not match <value>. ^: Logically AND multiple query statements. ^OR: Logically OR multiple query statements. LIKE: <col_name> contains the specified string. Only works for <col_name> fields whose data type is string. STARTSWITH: <col_name> starts with the specified string. Only works for <col_name> fields whose data type is string. ENDSWITH: <col_name> ends with the specified string. Only works for <col_name> fields whose data type is string. <value>: Value to match against. All parameters are case-sensitive. Queries can contain more than one entry, such as sysparm_query=<col_name><operator><value>[<operator><col_name><operator><value>]. For example: (sysparm_query=caller_id=javascript:gs.getUserID()^active=true) Encoded queries also support order by functionality. To sort responses based on certain fields, use the ORDERBY and ORDERBYDESC clauses in sysparm_query. Syntax: ORDERBY<col_name> ORDERBYDESC<col_name> For example: sysparm_query=active=true^ORDERBYnumber^ORDERBYDESCcategory This query filters all active records and orders the results in ascending order by number, and then in descending order by category. If part of the query is invalid, such as by specifying an invalid field name, the instance ignores the invalid part. It then returns rows using only the valid portion of the query. You can control this behavior using the property glide.invalid_query.returns_no_rows. Set this property to true to return no rows on an invalid query. Note: The glide.invalid_query.returns_no_rows property controls the behavior of all queries across the instance, such as in lists, scripts (GlideRecord.query()), and web service APIs.
   */
  sysparm_query?: string;
  /**
   * Sysparm Query Category
   * @description Name of the category to use for queries.
   */
  sysparm_query_category?: string;
  /**
   * Sysparm Query No Domain
   * @description Flag that indicates whether to restrict the record search to only the domains for which the logged in user is configured. Valid values: false (Exclude the record if it is in a domain that the currently logged in user is not configured to access), true (Include the record even if it is in a domain that the currently logged in user is not configured to access). Note: The sysparm_query_no_domain parameter is available only to system administrators or users who have the query_no_domain_table_api role.
   * @default false
   */
  sysparm_query_no_domain: boolean;
  /**
   * Sysparm Suppress Pagination Header
   * @description Flag that indicates whether to remove the Link header from the response. The Link header provides various URLs to relative pages in the record set which you can use to paginate the returned record set. Valid values: true (Remove the Link header from the response), false (Do not remove the Link header from the response).
   * @default false
   */
  sysparm_suppress_pagination_header: boolean;
  /**
   * Sysparm View
   * @description UI view for which to render the data. Determines the fields returned in the response.
   * @default both
   * @enum {string}
   */
  sysparm_view: "desktop" | "mobile" | "both";
  /**
   * Table Name
   * @description The name of the table from which to retrieve the record.
   */
  table_name?: string;
};

/**
 * Type of SERVICENOW's SERVICENOW_GET_RECORDS tool output.
 */
type SERVICENOW_GET_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The data returned by the API
       */
      results: {
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
 * Type map of all available tool input types for toolkit "SERVICENOW".
 */
export type SERVICENOW_TOOL_INPUTS = {
  ATTACH_FILE_TO_RECORD: SERVICENOW_ATTACH_FILE_TO_RECORD_INPUT
  CREATE_A_RECORD: SERVICENOW_CREATE_A_RECORD_INPUT
  DELETE_A_RECORD: SERVICENOW_DELETE_A_RECORD_INPUT
  FIND_FILE: SERVICENOW_FIND_FILE_INPUT
  GET_RECORDS: SERVICENOW_GET_RECORDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SERVICENOW".
 */
export type SERVICENOW_TOOL_OUTPUTS = {
  ATTACH_FILE_TO_RECORD: SERVICENOW_ATTACH_FILE_TO_RECORD_OUTPUT
  CREATE_A_RECORD: SERVICENOW_CREATE_A_RECORD_OUTPUT
  DELETE_A_RECORD: SERVICENOW_DELETE_A_RECORD_OUTPUT
  FIND_FILE: SERVICENOW_FIND_FILE_OUTPUT
  GET_RECORDS: SERVICENOW_GET_RECORDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SERVICENOW toolkit.
 */
export const SERVICENOW = {
  slug: "servicenow",
  tools: {
    /**
     * Attaches a file to a specified record in a servicenow table. this endpoint allows you to attach a file with the provided details to the specified record.
     */
    ATTACH_FILE_TO_RECORD: "SERVICENOW_ATTACH_FILE_TO_RECORD",
    /**
     * Creates a new record in a specified servicenow table. this endpoint allows you to create a new record with the provided data in the specified table.
     */
    CREATE_A_RECORD: "SERVICENOW_CREATE_A_RECORD",
    /**
     * Deletes a record from a specified servicenow table. this endpoint allows you to delete a record with the provided id from the specified table.
     */
    DELETE_A_RECORD: "SERVICENOW_DELETE_A_RECORD",
    /**
     * Finds a file in a specified servicenow table. this endpoint allows you to find a file with the provided name in the specified table.
     */
    FIND_FILE: "SERVICENOW_FIND_FILE",
    /**
     * Retrieves a record from a specified servicenow table. this endpoint allows you to retrieve a record with the provided id from the specified table.
     */
    GET_RECORDS: "SERVICENOW_GET_RECORDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SERVICENOW".
 */
export type SERVICENOW_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SERVICENOW".
 */
export type SERVICENOW_TRIGGER_EVENTS = {}
