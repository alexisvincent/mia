// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIBERY's FIBERY_DELETE_CUSTOM_APP_ENDPOINT tool input.
 */
type FIBERY_DELETE_CUSTOM_APP_ENDPOINT_INPUT = {
  /**
   * App Id
   * @description Identifier of the custom app containing the endpoint
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description Identifier of the custom endpoint to delete
   */
  endpoint_id?: string;
};

/**
 * Type of FIBERY's FIBERY_DELETE_CUSTOM_APP_ENDPOINT tool output.
 */
type FIBERY_DELETE_CUSTOM_APP_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional response message or error details
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by Fibery
       */
      status_code: number;
      /**
       * Success
       * @description True if the endpoint was successfully deleted
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
 * Type of FIBERY's FIBERY_DELETE_ENTITY tool input.
 */
type FIBERY_DELETE_ENTITY_INPUT = {
  /**
   * Entity Id
   * @description The GUID of the entity to delete (8-4-4-4-12 hex format)
   */
  entity_id?: string;
  /**
   * Type
   * @description Full qualified type name for the entity (e.g., 'Product Discovery/Opportunity'). If provided, deletion will be performed via Commands API (fibery.entity/delete).
   * @default null
   */
  type: string | null;
};

/**
 * Type of FIBERY's FIBERY_DELETE_ENTITY tool output.
 */
type FIBERY_DELETE_ENTITY_OUTPUT = {
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
 * Type of FIBERY's FIBERY_DELETE_FILE tool input.
 */
type FIBERY_DELETE_FILE_INPUT = {
  /**
   * File Id
   * @description Identifier of the file to delete.
   */
  file_id?: string;
};

/**
 * Type of FIBERY's FIBERY_DELETE_FILE tool output.
 */
type FIBERY_DELETE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates if the file was successfully deleted
       */
      deleted: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_EXECUTE_GRAPH_QL_QUERY tool input.
 */
type FIBERY_EXECUTE_GRAPH_QL_QUERY_INPUT = {
  /**
   * Operation Name
   * @description Optional operation name when sending multiple operations.
   * @default null
   */
  operationName: string | null;
  /**
   * Query
   * @description GraphQL query or mutation string to execute.
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of variable names to values for the GraphQL query.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FIBERY's FIBERY_EXECUTE_GRAPH_QL_QUERY tool output.
 */
type FIBERY_EXECUTE_GRAPH_QL_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data returned by the GraphQL query; schema depends on the query.
   * @default null
   */
  data: unknown;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors, if any occurred during execution.
   * @default null
   */
  errors: {
      /**
       * Locations
       * @description Locations in the GraphQL document where errors occurred.
       * @default null
       */
      locations: {
          [key: string]: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL endpoint.
       */
      message: string;
      /**
       * Path
       * @description Path of the response field which experienced the error.
       * @default null
       */
      path: unknown[] | null;
  }[] | null;
  /**
   * Message
   * @description Request-level error message, for example missing query.
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_FIBERY_AUTHENTICATE tool input.
 */
type FIBERY_FIBERY_AUTHENTICATE_INPUT = {
  /**
   * Command Body
   * @description Optional override for the /commands payload used to validate the token. If omitted, a default query against fibery/user will be used.
   * @default null
   */
  command_body: {
      [key: string]: unknown;
  }[] | null;
};

/**
 * Type of FIBERY's FIBERY_FIBERY_AUTHENTICATE tool output.
 */
type FIBERY_FIBERY_AUTHENTICATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description Personal API token to use for subsequent requests
       */
      value: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_GET_APP_INFO tool input.
 */
type FIBERY_GET_APP_INFO_INPUT = {
  /**
   * App Id
   * @description Optional custom app id to resolve app info via Fibery workspace proxy when base_url ends with /api.
   * @default null
   */
  appId: string | null;
};

/**
 * Type of FIBERY's FIBERY_GET_APP_INFO tool output.
 */
type FIBERY_GET_APP_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authentication
       * @description List of authentication schemas supported by the app
       */
      authentication: {
          /**
           * Description
           * @description Description of the authentication schema
           */
          description: string;
          /**
           * Fields
           * @description List of fields needed for this authentication schema; omit when not required
           * @default null
           */
          fields: {
              /**
               * Description
               * @description Detailed explanation of the field
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Unique field identifier
               */
              id: string;
              /**
               * Optional
               * @description Whether this field is optional
               */
              optional: boolean;
              /**
               * Title
               * @description Human-readable field title
               */
              title: string;
              /**
               * Type
               * @description Field type (e.g., text, number, bool, password, date, oauth, list, multidropdown, etc.)
               */
              type: string;
          }[] | null;
          /**
           * Id
           * @description Authentication schema identifier (e.g., basic, oauth, oauth2)
           */
          id: string;
          /**
           * Name
           * @description Display name of this authentication method
           */
          name: string;
      }[];
      /**
       * Description
       * @description Brief description of the application
       */
      description: string;
      /**
       * Name
       * @description Human-readable application name
       */
      name: string;
      /**
       * Responsible For
       * @description Capabilities flags for this application
       */
      responsibleFor: {
          /**
           * Data Providing
           * @description Whether the app provides data via the sources defined
           * @default null
           */
          dataProviding: boolean | null;
      };
      /**
       * Site
       * @description Application/site identifier or URL
       */
      site: string;
      /**
       * Sources
       * @description List of data sources exposed by the app
       */
      sources: {
          /**
           * Description
           * @description Optional description of the source
           * @default null
           */
          description: string | null;
          /**
           * Filter
           * @description Optional list of fields to filter data from this source
           * @default null
           */
          filter: {
              /**
               * Description
               * @description Detailed explanation of the field
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Unique field identifier
               */
              id: string;
              /**
               * Optional
               * @description Whether this field is optional
               */
              optional: boolean;
              /**
               * Title
               * @description Human-readable field title
               */
              title: string;
              /**
               * Type
               * @description Field type (e.g., text, number, bool, password, date, oauth, list, multidropdown, etc.)
               */
              type: string;
          }[] | null;
          /**
           * Id
           * @description Source identifier
           */
          id: string;
          /**
           * Name
           * @description Source display name
           */
          name: string;
      }[];
      /**
       * Type
       * @description If set to 'crunch', indicates predefined data schema controlled per account/source
       * @default null
       */
      type: string | null;
      /**
       * Version
       * @description Application version string
       */
      version: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_GET_CUSTOM_APPS tool input.
 */
type FIBERY_GET_CUSTOM_APPS_INPUT = {
  /**
   * Limit
   * @description Maximum number of custom apps to return (required by Fibery q/limit).
   * @default 100
   */
  limit: number | null;
};

/**
 * Type of FIBERY's FIBERY_GET_CUSTOM_APPS tool output.
 */
type FIBERY_GET_CUSTOM_APPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Apps
       * @description List of custom apps in the workspace
       */
      apps: {
          /**
           * Id
           * @description Unique identifier of the custom app
           */
          id: string;
          /**
           * Name
           * @description Name of the custom app
           * @default null
           */
          name: string | null;
          /**
           * Title
           * @description Title of the custom app
           * @default null
           */
          title: string | null;
          /**
           * Version
           * @description Version of the custom app
           * @default null
           */
          version: string | null;
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
 * Type of FIBERY's FIBERY_GET_CUSTOM_APP_ENDPOINTS tool input.
 */
type FIBERY_GET_CUSTOM_APP_ENDPOINTS_INPUT = {
  /**
   * App Id
   * @description Identifier of the custom Fibery app whose endpoints will be retrieved
   */
  app_id?: string;
};

/**
 * Type of FIBERY's FIBERY_GET_CUSTOM_APP_ENDPOINTS tool output.
 */
type FIBERY_GET_CUSTOM_APP_ENDPOINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Endpoints
       * @description List of custom app endpoints
       */
      endpoints: {
          /**
           * Description
           * @description Optional description of the endpoint
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique endpoint identifier
           */
          id: string;
          /**
           * Method
           * @description HTTP method of the endpoint, e.g., GET, POST
           */
          method: string;
          /**
           * Name
           * @description Optional name of the endpoint
           * @default null
           */
          name: string | null;
          /**
           * Path
           * @description Endpoint path relative to the custom app base URL
           */
          path: string;
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
 * Type of FIBERY's FIBERY_GET_ENTITIES tool input.
 */
type FIBERY_GET_ENTITIES_INPUT = {
  /**
   * From
   * @description Full database/type name in 'Namespace/Type' format, e.g. 'Product/Feature'
   */
  from?: string;
  /**
   * Limit
   * @description Maximum number of entities to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of entities to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Params
   * @description Bindings for any $-variables in `where`, e.g. {'$age': 30}
   * @default null
   */
  params: {
      [key: string]: unknown;
  } | null;
  /**
   * Select
   * @description List of field identifiers to return, e.g. ['fibery/id', 'user/name']
   */
  select?: string[];
  /**
   * Where
   * @description Filter expression array, e.g. ['=', ['user/age'], '$age']
   * @default null
   */
  where: unknown[] | null;
};

/**
 * Type of FIBERY's FIBERY_GET_ENTITIES tool output.
 */
type FIBERY_GET_ENTITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entities
       * @description List of entity objects shaped by the select fields
       */
      entities: {
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
 * Type of FIBERY's FIBERY_GET_ENTITY tool input.
 */
type FIBERY_GET_ENTITY_INPUT = {
  /**
   * Entity Id
   * @description Entity identifier in 'Type/ID' format, e.g., 'fibery/user/<uuid>' or 'Product Discovery/Opportunity/<uuid>'
   */
  entity_id?: string;
  /**
   * Expand
   * @description Optional list of additional fields to return (e.g., ['user/name', 'user/email']).
   * @default null
   */
  expand: string[] | null;
};

/**
 * Type of FIBERY's FIBERY_GET_ENTITY tool output.
 */
type FIBERY_GET_ENTITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity
       * @description JSON object containing the entity's fields and values
       */
      entity: {
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
 * Type of FIBERY's FIBERY_GET_FILE tool input.
 */
type FIBERY_GET_FILE_INPUT = {
  /**
   * File Id
   * @description Unique identifier of the file (may not work for download).
   * @default null
   */
  fileId: string | null;
  /**
   * File Secret
   * @description Secret identifier of the file to retrieve.
   * @default null
   */
  fileSecret: string | null;
};

/**
 * Type of FIBERY's FIBERY_GET_FILE tool output.
 */
type FIBERY_GET_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the file.
       */
      content: string;
      /**
       * Content Type
       * @description MIME type of the file from the 'Content-Type' header.
       */
      content_type: string;
      /**
       * Filename
       * @description Original filename extracted from 'Content-Disposition' header, if present.
       * @default null
       */
      filename: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_GET_GRAPH_QL_SCHEMA tool input.
 */
type FIBERY_GET_GRAPH_QL_SCHEMA_INPUT = object;

/**
 * Type of FIBERY's FIBERY_GET_GRAPH_QL_SCHEMA tool output.
 */
type FIBERY_GET_GRAPH_QL_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sdl
       * @description Full GraphQL schema (SDL or introspection JSON) of the current Fibery workspace, returned as plain text.
       */
      sdl: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_GET_USER_PREFERENCES tool input.
 */
type FIBERY_GET_USER_PREFERENCES_INPUT = object;

/**
 * Type of FIBERY's FIBERY_GET_USER_PREFERENCES tool output.
 */
type FIBERY_GET_USER_PREFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description List of query results
       */
      result: {
          /**
           * Fibery/Ui Preferences
           * @description User UI preferences object
           */
          "fibery/ui-preferences": {
              /**
               * First Day Of Week
               * @description First day of the week, 1 = Monday, 7 = Sunday
               */
              firstDayOfWeek: number;
              /**
               * Iso Weekends
               * @description Weekend days in ISO format, e.g., [6,7]
               */
              isoWeekends: number[];
              /**
               * Weekends
               * @description Legacy weekend days as list of integers
               */
              weekends: number[];
          };
      }[];
      /**
       * Success
       * @description Indicates success of the command execution
       */
      success: boolean;
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
 * Type of FIBERY's FIBERY_POST_AUTH_REFRESH_TOKEN tool input.
 */
type FIBERY_POST_AUTH_REFRESH_TOKEN_INPUT = {
  /**
   * Refresh Token
   * @description The refresh token used to obtain a new access token
   */
  refresh_token?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_AUTH_REFRESH_TOKEN tool output.
 */
type FIBERY_POST_AUTH_REFRESH_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Newly issued access token to use for authenticated requests
       */
      access_token: string;
      /**
       * Expires In
       * @description Lifetime of the access token in seconds
       */
      expires_in: number;
      /**
       * Refresh Token
       * @description New refresh token to use for subsequent token refreshes
       */
      refresh_token: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_POST_AUTH_TOKEN tool input.
 */
type FIBERY_POST_AUTH_TOKEN_INPUT = {
  /**
   * Grant Type
   * @description Grant type, must be 'password' for resource owner password credentials flow
   * @default password
   * @constant
   */
  grant_type: "password";
  /**
   * Password
   * @description Fibery account password
   */
  password?: string;
  /**
   * Username
   * @description Fibery account username, typically an email address
   */
  username?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_AUTH_TOKEN tool output.
 */
type FIBERY_POST_AUTH_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Access token for authenticated requests
       */
      access_token: string;
      /**
       * Expires In
       * @description Lifetime in seconds of the access token
       */
      expires_in: number;
      /**
       * Raw
       * @description Full raw JSON response for any additional fields
       * @default null
       */
      raw: {
          [key: string]: unknown;
      } | null;
      /**
       * Refresh Token
       * @description Token to refresh the access token when expired
       * @default null
       */
      refresh_token: string | null;
      /**
       * Scope
       * @description Scopes granted by the access token, if provided
       * @default null
       */
      scope: string | null;
      /**
       * Token Type
       * @description Type of the token issued, typically 'Bearer'
       */
      token_type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_POST_CREATE_ENTITY tool input.
 */
type FIBERY_POST_CREATE_ENTITY_INPUT = {
  /**
   * Entity
   * @description Field values for the new entity. Relations must be provided as objects with 'fibery/id' keys, e.g., {'assignee': {'fibery/id': '<uuid>'}} or arrays of such objects.
   */
  entity?: {
      [key: string]: unknown;
  };
  /**
   * Type
   * @description Full qualified type name for the entity, e.g., 'App/Type'.
   */
  type?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_CREATE_ENTITY tool output.
 */
type FIBERY_POST_CREATE_ENTITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of FIBERY's FIBERY_POST_FETCH_DATA tool input.
 */
type FIBERY_POST_FETCH_DATA_INPUT = {
  /**
   * Account
   * @description Authentication payload matching the app's auth schema (custom-app). Not used by Fibery commands fallback.
   */
  account?: {
      [key: string]: unknown;
  };
  /**
   * Filter
   * @description Optional filter map. For custom-apps, pass fields as declared in GET /. For Fibery fallback, you may include keys like 'q/select', 'q/where', 'q/limit', 'q/offset', and 'params'.
   * @default null
   */
  filter: {
      [key: string]: unknown;
  } | null;
  /**
   * Source
   * @description Source identifier. For custom-apps this matches an ID from GET /. When using Fibery fallback, provide a full type like 'fibery/user'.
   */
  source?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_FETCH_DATA tool output.
 */
type FIBERY_POST_FETCH_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payload
       * @description Raw response body as text; may be JSON, CSV, or other text format
       */
      payload: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_POST_FETCH_DATA_COUNT tool input.
 */
type FIBERY_POST_FETCH_DATA_COUNT_INPUT = {
  /**
   * Account
   * @description Account object holding credentials/configuration (not used by this endpoint)
   */
  account?: {
      [key: string]: string;
  };
  /**
   * Filter
   * @description Filter object (not used directly). Use Get Entities for complex filtering.
   */
  filter?: {
      [key: string]: string;
  };
  /**
   * Source
   * @description Full Fibery type name in 'Namespace/Type' format, e.g. 'fibery/user'
   */
  source?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_FETCH_DATA_COUNT tool output.
 */
type FIBERY_POST_FETCH_DATA_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Count of records matching the criteria, as a number or string
       */
      count: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_POST_FETCH_DATA_LIST tool input.
 */
type FIBERY_POST_FETCH_DATA_LIST_INPUT = {
  /**
   * Field
   * @description Field name (marked with 'datalist' flag) to fetch options for.
   */
  field?: string;
  /**
   * Source
   * @description Source identifier for which to fetch the datalist options.
   */
  source?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_FETCH_DATA_LIST tool output.
 */
type FIBERY_POST_FETCH_DATA_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Options
       * @description List of selectable options returned by the API.
       */
      options: {
          /**
           * Title
           * @description User-visible label for the option.
           */
          title: string;
          /**
           * Value
           * @description Stored value returned in subsequent requests.
           */
          value: string;
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
 * Type of FIBERY's FIBERY_POST_FETCH_SCHEMA tool input.
 */
type FIBERY_POST_FETCH_SCHEMA_INPUT = {
  /**
   * Account
   * @description Account credentials object, e.g., {username, password}
   */
  account?: {
      [key: string]: unknown;
  };
  /**
   * Filter
   * @description Filter object to scope the schema, structure as per your app design
   */
  filter?: {
      [key: string]: unknown;
  };
};

/**
 * Type of FIBERY's FIBERY_POST_FETCH_SCHEMA tool output.
 */
type FIBERY_POST_FETCH_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: {
          /**
           * Description
           * @description Field description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Field id
           */
          id: string;
          /**
           * Ignore
           * @description Whether the field is visible in fields catalog
           */
          ignore: boolean;
          /**
           * Name
           * @description Human-readable field name
           */
          name: string;
          /**
           * Readonly
           * @description If true, field name and type cannot be modified
           */
          readonly: boolean;
          /**
           * Type
           * @description Data type of the field
           * @enum {string}
           */
          type: "id" | "text" | "number" | "date" | "array[text]" | "array[number]" | "array[date]";
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
 * Type of FIBERY's FIBERY_POST_OAUTH2_ACCESS_TOKEN tool input.
 */
type FIBERY_POST_OAUTH2_ACCESS_TOKEN_INPUT = {
  /**
   * Code
   * @description The authorization code returned by the authorization server
   */
  code?: string;
  /**
   * Grant Type
   * @description OAuth2 grant type, must be 'authorization_code' for this exchange
   * @default authorization_code
   * @constant
   */
  grant_type: "authorization_code";
  /**
   * Redirect Uri
   * @description The redirect URI (callback) used in the initial authorization request
   */
  redirect_uri?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_OAUTH2_ACCESS_TOKEN tool output.
 */
type FIBERY_POST_OAUTH2_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description The OAuth2 access token to use for authenticated requests
       */
      access_token: string;
      /**
       * Expires In
       * @description Time in seconds before the access token expires
       */
      expires_in: number;
      /**
       * Raw
       * @description The full raw JSON response for any additional fields
       * @default null
       */
      raw: {
          [key: string]: unknown;
      } | null;
      /**
       * Refresh Token
       * @description Token to refresh the access token when it expires
       * @default null
       */
      refresh_token: string | null;
      /**
       * Scope
       * @description Scopes granted by the access token, if provided
       * @default null
       */
      scope: string | null;
      /**
       * Token Type
       * @description The type of the token issued, typically 'Bearer'
       */
      token_type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIBERY's FIBERY_POST_REVOKE_TOKEN tool input.
 */
type FIBERY_POST_REVOKE_TOKEN_INPUT = {
  /**
   * Token
   * @description Access token to revoke
   */
  token?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_REVOKE_TOKEN tool output.
 */
type FIBERY_POST_REVOKE_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the token was revoked successfully
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
 * Type of FIBERY's FIBERY_POST_VALIDATE_ACCOUNT tool input.
 */
type FIBERY_POST_VALIDATE_ACCOUNT_INPUT = {
  /**
   * Fields
   * @description Key–value map of credential fields required by the selected authentication type. For 'basic', include 'username' and 'password'. For 'oauth2', include 'access_token', 'refresh_token', and 'expire_on' (ISO date-time).
   */
  fields?: {
      [key: string]: unknown;
  };
  /**
   * Id
   * @description Identifier of the authentication/account type to validate (e.g., 'basic', 'oauth2').
   */
  id?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_VALIDATE_ACCOUNT tool output.
 */
type FIBERY_POST_VALIDATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description (OAuth2) Refreshed access token to replace an expired one.
       * @default null
       */
      access_token: string | null;
      /**
       * Expire On
       * @description (OAuth2) New access token expiration date-time in ISO 8601 format.
       * @default null
       */
      expire_on: string | null;
      /**
       * Name
       * @description Human-friendly display name of the validated account.
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
 * Type of FIBERY's FIBERY_POST_VALIDATE_FILTER tool input.
 */
type FIBERY_POST_VALIDATE_FILTER_INPUT = {
  /**
   * Account
   * @description Account credentials object used for validation.
   */
  account?: {
      [key: string]: unknown;
  };
  /**
   * Filter
   * @description Filter definition object to validate (structure depends on your app).
   */
  filter?: {
      [key: string]: unknown;
  };
  /**
   * Source
   * @description Identifier of the data source to validate against.
   */
  source?: string;
};

/**
 * Type of FIBERY's FIBERY_POST_VALIDATE_FILTER tool output.
 */
type FIBERY_POST_VALIDATE_FILTER_OUTPUT = {
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
 * Type of FIBERY's FIBERY_UPDATE_ENTITY tool input.
 */
type FIBERY_UPDATE_ENTITY_INPUT = {
  /**
   * Entity Id
   * @description The GUID of the entity to update (8-4-4-4-12 hex format)
   */
  entity_id?: string;
  /**
   * Fields
   * @description Mapping of field API names to new values. Relations must be provided as objects with 'fibery/id' keys, e.g., {'assignee': {'fibery/id': '<uuid>'}} or arrays of such objects.
   */
  fields?: {
      [key: string]: unknown;
  };
  /**
   * Type
   * @description Fully-qualified Type name, e.g., 'Product Discovery/Opportunity'
   */
  type?: string;
};

/**
 * Type of FIBERY's FIBERY_UPDATE_ENTITY tool output.
 */
type FIBERY_UPDATE_ENTITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of FIBERY's FIBERY_UPDATE_USER_PREFERENCES tool input.
 */
type FIBERY_UPDATE_USER_PREFERENCES_INPUT = object;

/**
 * Type of FIBERY's FIBERY_UPDATE_USER_PREFERENCES tool output.
 */
type FIBERY_UPDATE_USER_PREFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of FIBERY's FIBERY_UPLOAD_FILE tool input.
 */
type FIBERY_UPLOAD_FILE_INPUT = {
  /**
   * File Name
   * @description Optional name to assign to the file in Fibery. Defaults to the basename of file_path if omitted.
   * @default null
   */
  file_name: string | null;
  /**
   * File Path
   * @description Local filesystem path to the file to upload.
   */
  file_path?: string;
};

/**
 * Type of FIBERY's FIBERY_UPLOAD_FILE tool output.
 */
type FIBERY_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description MIME type of the uploaded file
       */
      contentType: string;
      /**
       * Created At
       * @description ISO timestamp when the file was created
       */
      createdAt: string;
      /**
       * Created By
       * @description Identifier of the user who uploaded the file
       */
      createdBy: string;
      /**
       * Id
       * @description Unique identifier of the uploaded file in Fibery
       */
      id: string;
      /**
       * Name
       * @description Name of the uploaded file in Fibery
       */
      name: string;
      /**
       * Preview Url
       * @description URL for preview of the file if supported
       * @default null
       */
      previewUrl: string | null;
      /**
       * Size
       * @description Size of the uploaded file in bytes
       */
      size: number;
      /**
       * Url
       * @description URL to download the uploaded file
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "FIBERY".
 */
export type FIBERY_TOOL_INPUTS = {
  DELETE_CUSTOM_APP_ENDPOINT: FIBERY_DELETE_CUSTOM_APP_ENDPOINT_INPUT
  DELETE_ENTITY: FIBERY_DELETE_ENTITY_INPUT
  DELETE_FILE: FIBERY_DELETE_FILE_INPUT
  EXECUTE_GRAPH_QL_QUERY: FIBERY_EXECUTE_GRAPH_QL_QUERY_INPUT
  FIBERY_AUTHENTICATE: FIBERY_FIBERY_AUTHENTICATE_INPUT
  GET_APP_INFO: FIBERY_GET_APP_INFO_INPUT
  GET_CUSTOM_APPS: FIBERY_GET_CUSTOM_APPS_INPUT
  GET_CUSTOM_APP_ENDPOINTS: FIBERY_GET_CUSTOM_APP_ENDPOINTS_INPUT
  GET_ENTITIES: FIBERY_GET_ENTITIES_INPUT
  GET_ENTITY: FIBERY_GET_ENTITY_INPUT
  GET_FILE: FIBERY_GET_FILE_INPUT
  GET_GRAPH_QL_SCHEMA: FIBERY_GET_GRAPH_QL_SCHEMA_INPUT
  GET_USER_PREFERENCES: FIBERY_GET_USER_PREFERENCES_INPUT
  POST_AUTH_REFRESH_TOKEN: FIBERY_POST_AUTH_REFRESH_TOKEN_INPUT
  POST_AUTH_TOKEN: FIBERY_POST_AUTH_TOKEN_INPUT
  POST_CREATE_ENTITY: FIBERY_POST_CREATE_ENTITY_INPUT
  POST_FETCH_DATA: FIBERY_POST_FETCH_DATA_INPUT
  POST_FETCH_DATA_COUNT: FIBERY_POST_FETCH_DATA_COUNT_INPUT
  POST_FETCH_DATA_LIST: FIBERY_POST_FETCH_DATA_LIST_INPUT
  POST_FETCH_SCHEMA: FIBERY_POST_FETCH_SCHEMA_INPUT
  POST_OAUTH2_ACCESS_TOKEN: FIBERY_POST_OAUTH2_ACCESS_TOKEN_INPUT
  POST_REVOKE_TOKEN: FIBERY_POST_REVOKE_TOKEN_INPUT
  POST_VALIDATE_ACCOUNT: FIBERY_POST_VALIDATE_ACCOUNT_INPUT
  POST_VALIDATE_FILTER: FIBERY_POST_VALIDATE_FILTER_INPUT
  UPDATE_ENTITY: FIBERY_UPDATE_ENTITY_INPUT
  UPDATE_USER_PREFERENCES: FIBERY_UPDATE_USER_PREFERENCES_INPUT
  UPLOAD_FILE: FIBERY_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIBERY".
 */
export type FIBERY_TOOL_OUTPUTS = {
  DELETE_CUSTOM_APP_ENDPOINT: FIBERY_DELETE_CUSTOM_APP_ENDPOINT_OUTPUT
  DELETE_ENTITY: FIBERY_DELETE_ENTITY_OUTPUT
  DELETE_FILE: FIBERY_DELETE_FILE_OUTPUT
  EXECUTE_GRAPH_QL_QUERY: FIBERY_EXECUTE_GRAPH_QL_QUERY_OUTPUT
  FIBERY_AUTHENTICATE: FIBERY_FIBERY_AUTHENTICATE_OUTPUT
  GET_APP_INFO: FIBERY_GET_APP_INFO_OUTPUT
  GET_CUSTOM_APPS: FIBERY_GET_CUSTOM_APPS_OUTPUT
  GET_CUSTOM_APP_ENDPOINTS: FIBERY_GET_CUSTOM_APP_ENDPOINTS_OUTPUT
  GET_ENTITIES: FIBERY_GET_ENTITIES_OUTPUT
  GET_ENTITY: FIBERY_GET_ENTITY_OUTPUT
  GET_FILE: FIBERY_GET_FILE_OUTPUT
  GET_GRAPH_QL_SCHEMA: FIBERY_GET_GRAPH_QL_SCHEMA_OUTPUT
  GET_USER_PREFERENCES: FIBERY_GET_USER_PREFERENCES_OUTPUT
  POST_AUTH_REFRESH_TOKEN: FIBERY_POST_AUTH_REFRESH_TOKEN_OUTPUT
  POST_AUTH_TOKEN: FIBERY_POST_AUTH_TOKEN_OUTPUT
  POST_CREATE_ENTITY: FIBERY_POST_CREATE_ENTITY_OUTPUT
  POST_FETCH_DATA: FIBERY_POST_FETCH_DATA_OUTPUT
  POST_FETCH_DATA_COUNT: FIBERY_POST_FETCH_DATA_COUNT_OUTPUT
  POST_FETCH_DATA_LIST: FIBERY_POST_FETCH_DATA_LIST_OUTPUT
  POST_FETCH_SCHEMA: FIBERY_POST_FETCH_SCHEMA_OUTPUT
  POST_OAUTH2_ACCESS_TOKEN: FIBERY_POST_OAUTH2_ACCESS_TOKEN_OUTPUT
  POST_REVOKE_TOKEN: FIBERY_POST_REVOKE_TOKEN_OUTPUT
  POST_VALIDATE_ACCOUNT: FIBERY_POST_VALIDATE_ACCOUNT_OUTPUT
  POST_VALIDATE_FILTER: FIBERY_POST_VALIDATE_FILTER_OUTPUT
  UPDATE_ENTITY: FIBERY_UPDATE_ENTITY_OUTPUT
  UPDATE_USER_PREFERENCES: FIBERY_UPDATE_USER_PREFERENCES_OUTPUT
  UPLOAD_FILE: FIBERY_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIBERY toolkit.
 */
export const FIBERY = {
  slug: "fibery",
  tools: {
    /**
     * Tool to delete a specific custom app endpoint. Use after confirming the app and endpoint IDs to remove.
     */
    DELETE_CUSTOM_APP_ENDPOINT: "FIBERY_DELETE_CUSTOM_APP_ENDPOINT",
    /**
     * Tool to delete a specific Fibery entity by its ID. Use when you have verified the entity exists and have its GUID. Deletion is irreversible.
     */
    DELETE_ENTITY: "FIBERY_DELETE_ENTITY",
    /**
     * Tool to delete a specific file. Use when you need to remove a file from Fibery by its ID.
     */
    DELETE_FILE: "FIBERY_DELETE_FILE",
    /**
     * Tool to execute GraphQL queries or mutations against a Fibery space. Use when you need to fetch or modify Fibery data via the GraphQL API.
     */
    EXECUTE_GRAPH_QL_QUERY: "FIBERY_EXECUTE_GRAPH_QL_QUERY",
    /**
     * Tool to validate existing Fibery personal API token by performing a real API call. If the call succeeds, returns the token value extracted from the Authorization header. Use the returned token in the `Authorization: Token <value>` header for further calls.
     */
    FIBERY_AUTHENTICATE: "FIBERY_FIBERY_AUTHENTICATE",
    /**
     * Tool to retrieve application information. Use when you need the version, name, description, authentication methods, and available data sources before further operations.
     */
    GET_APP_INFO: "FIBERY_GET_APP_INFO",
    /**
     * Tool to list all custom apps in the Fibery workspace. Use when you need the identifiers of all custom apps.
     */
    GET_CUSTOM_APPS: "FIBERY_GET_CUSTOM_APPS",
    /**
     * Tool to list custom app endpoints. Use when you need the available custom endpoints for a given app before invoking them.
     */
    GET_CUSTOM_APP_ENDPOINTS: "FIBERY_GET_CUSTOM_APP_ENDPOINTS",
    /**
     * Tool to query Fibery entities. Use after specifying type and fields; supports optional filters and pagination.
     */
    GET_ENTITIES: "FIBERY_GET_ENTITIES",
    /**
     * Tool to retrieve detailed info of a specific Fibery entity by its ID. Uses Fibery Commands API (fibery.entity/query) filtered by fibery/id with q/limit = 1.
     */
    GET_ENTITY: "FIBERY_GET_ENTITY",
    /**
     * Tool to retrieve a file by its secret or id. Prefer the file secret to download raw bytes. Returns the file content, MIME type, and original filename if available.
     */
    GET_FILE: "FIBERY_GET_FILE",
    /**
     * Tool to retrieve the GraphQL schema for the current workspace. Uses standard GraphQL introspection.
     */
    GET_GRAPH_QL_SCHEMA: "FIBERY_GET_GRAPH_QL_SCHEMA",
    /**
     * Tool to retrieve the current user's UI preferences. Use after authentication to tailor UI to user settings.
     */
    GET_USER_PREFERENCES: "FIBERY_GET_USER_PREFERENCES",
    /**
     * Tool to refresh an access token using a refresh token. Use when the current access token has expired and a valid refresh token is available.
     */
    POST_AUTH_REFRESH_TOKEN: "FIBERY_POST_AUTH_REFRESH_TOKEN",
    /**
     * Tool to authenticate with Fibery using resource owner password credentials. Use when you need an access token by providing username and password. Include the returned token in the `Authorization: Token <access_token>` header for subsequent API calls.
     */
    POST_AUTH_TOKEN: "FIBERY_POST_AUTH_TOKEN",
    /**
     * Tool to create a new Fibery entity. Use when you have prepared all necessary field values and need to persist a new record. Example: Create a 'Project/Task' with title and assignee.
     */
    POST_CREATE_ENTITY: "FIBERY_POST_CREATE_ENTITY",
    /**
     * Tool to fetch data from a specified source. Use after specifying the source and optional filters.
     */
    POST_FETCH_DATA: "FIBERY_POST_FETCH_DATA",
    /**
     * Tool to return the count of records for a given Fibery type (source). Uses Fibery commands API and returns the total number of entities of the type.
     */
    POST_FETCH_DATA_COUNT: "FIBERY_POST_FETCH_DATA_COUNT",
    /**
     * Tool to fetch options for a datalist filter field. Use after retrieving field metadata to build dynamic filters.
     */
    POST_FETCH_DATA_LIST: "FIBERY_POST_FETCH_DATA_LIST",
    /**
     * Tool to fetch predefined data schema. Use after authenticating when mapping and integrating Fibery data.
     */
    POST_FETCH_SCHEMA: "FIBERY_POST_FETCH_SCHEMA",
    /**
     * Tool to finalize OAuth2 authentication for Fibery custom apps. Use when exchanging an authorization code for access and refresh tokens after user authorization. Notes: - In Fibery custom app flows, the access_token endpoint is typically implemented by the app itself (your connector) rather than the Fibery workspace domain. We therefore probe multiple candidate roots and paths and provide resilient fallbacks.
     */
    POST_OAUTH2_ACCESS_TOKEN: "FIBERY_POST_OAUTH2_ACCESS_TOKEN",
    /**
     * Tool to revoke an existing Fibery API access token. Use when invalidating a user session or logging out.
     */
    POST_REVOKE_TOKEN: "FIBERY_POST_REVOKE_TOKEN",
    /**
     * Tool to validate account credentials. Use when confirming provided credentials (and optionally refreshing OAuth2 tokens) before further API calls.
     */
    POST_VALIDATE_ACCOUNT: "FIBERY_POST_VALIDATE_ACCOUNT",
    /**
     * Tool to validate filter definitions. Use when ensuring filter structure and syntax are correct before running a data query.
     */
    POST_VALIDATE_FILTER: "FIBERY_POST_VALIDATE_FILTER",
    /**
     * Tool to update an existing Fibery entity. Uses Commands API: fibery.entity/update.
     */
    UPDATE_ENTITY: "FIBERY_UPDATE_ENTITY",
    /**
     * Tool to update the current user's preferences by using the Commands API. It fetches the current user id and preferences, merges the provided payload, and writes back the merged object into 'fibery/ui-preferences' of the current fibery/user.
     */
    UPDATE_USER_PREFERENCES: "FIBERY_UPDATE_USER_PREFERENCES",
    /**
     * Tool to upload a file to Fibery. Use when you need to attach a local file via the Fibery Files API.
     */
    UPLOAD_FILE: "FIBERY_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIBERY".
 */
export type FIBERY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIBERY".
 */
export type FIBERY_TRIGGER_EVENTS = {}
