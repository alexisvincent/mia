// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIGMA's FIGMA_ADD_A_COMMENT_TO_A_FILE tool input.
 */
type FIGMA_ADD_A_COMMENT_TO_A_FILE_INPUT = {
  /**
   * Client Meta
   * @description Optional. Dictionary specifying the comment's position (e.g., absolute canvas coordinates, relative to a node, or a region defined with dimensions and positioning). If omitted, Figma determines a default position.
   * @default null
   */
  client_meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Comment Id
   * @description ID of an existing root comment to reply to. Replies cannot be made to other replies.
   * @default null
   */
  comment_id: string | null;
  /**
   * File Key
   * @description Identifier for the Figma file or branch. Can be a file key or a branch key (use `GET /v1/files/:key` with `branch_data` to get a branch key).
   */
  file_key?: string;
  /**
   * Message
   * @description Text content of the comment.
   */
  message?: string;
};

/**
 * Type of FIGMA's FIGMA_ADD_A_COMMENT_TO_A_FILE tool output.
 */
type FIGMA_ADD_A_COMMENT_TO_A_FILE_OUTPUT = {
  /**
   * Data
   * @description Full details of the successfully posted comment.
   */
  data?: {
      /**
       * ClientMeta
       * @description Positioning information of the comment (absolute, relative to node, or region).
       */
      client_meta: {
          /**
           * X
           * @description The X-coordinate for the comment's absolute position on the canvas.
           */
          x: number;
          /**
           * Y
           * @description The Y-coordinate for the comment's absolute position on the canvas.
           */
          y: number;
      } | null;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp (UTC ISO 8601) when the comment was created.
       */
      created_at: string;
      /**
       * File Key
       * @description Identifier of the file where the comment was posted.
       */
      file_key: string;
      /**
       * Id
       * @description Unique identifier for the created comment.
       */
      id: string;
      /**
       * Message
       * @description The text content of the comment.
       */
      message: string;
      /**
       * Order Id
       * @description Numerically sortable string for UI comment order; present only for top-level comments.
       * @default null
       */
      order_id: string | null;
      /**
       * Parent Id
       * @description Identifier of the parent comment if this is a reply; null for top-level comments.
       * @default null
       */
      parent_id: string | null;
      /**
       * Reactions
       * @description List of reactions made to this comment.
       */
      reactions: {
          /**
           * Created At
           * Format: date-time
           * @description Timestamp (UTC ISO 8601) when the reaction was added.
           */
          created_at: string;
          /**
           * Emoji
           * @description Emoji shortcode for the reaction (e.g., `:heart:`, `:+1::skin-tone-2:`). Refer to Figma documentation for a list of supported shortcodes.
           */
          emoji: string;
          /**
           * User
           * @description Details of the user who left the reaction.
           */
          user: {
              /**
               * Handle
               * @description Display name or handle of the user.
               */
              handle: string;
              /**
               * Id
               * @description Unique identifier of the user.
               */
              id: string;
              /**
               * Img Url
               * @description URL of the user's profile image.
               */
              img_url: string;
          };
      }[];
      /**
       * Resolved At
       * Format: date-time
       * @description Timestamp (UTC ISO 8601) when the comment was resolved; null if not resolved.
       * @default null
       */
      resolved_at: string | null;
      /**
       * User
       * @description Details of the user who posted the comment.
       */
      user: {
          /**
           * Handle
           * @description Display name or handle of the user.
           */
          handle: string;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Img Url
           * @description URL of the user's profile image.
           */
          img_url: string;
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
 * Type of FIGMA's FIGMA_ADD_A_REACTION_TO_A_COMMENT tool input.
 */
type FIGMA_ADD_A_REACTION_TO_A_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The unique identifier of the comment to which the reaction should be added.
   */
  comment_id?: string;
  /**
   * Emoji
   * @description The emoji to use for the reaction, specified as a shortcode (e.g., `:heart:`, `:+1::skin-tone-2:`). For a comprehensive list of accepted emoji shortcodes, including aliases and skin tone modifiers, refer to the file linked here: [https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json).
   */
  emoji?: string;
  /**
   * File Key
   * @description Identifier of the Figma file or branch to which the comment reaction will be posted. This can be a file key (e.g., from the file URL) or a branch key. Use the `GET /v1/files/:key` endpoint with the `branch_data=true` query parameter to obtain the branch key if needed.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_ADD_A_REACTION_TO_A_COMMENT tool output.
 */
type FIGMA_ADD_A_REACTION_TO_A_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Contains the response data from the API, typically including the status of the operation.
   */
  data?: {
      /**
       * Error
       * @description A boolean flag indicating if an error occurred during the request. For successful operations, this will be `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Status
       * @description The HTTP status code of the API request. A value of 200 indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_CREATE_A_WEBHOOK tool input.
 */
type FIGMA_CREATE_A_WEBHOOK_INPUT = {
  /**
   * Description
   * @description Optional user-defined description for the webhook (max 150 chars), useful for identification and management.
   * @default null
   */
  description: string | null;
  /**
   * Endpoint
   * @description Publicly accessible HTTPS URL (max 2048 chars) that receives POST requests from Figma for the `event_type`.
   */
  endpoint?: string;
  /**
   * Event Type
   * @description Type of event that triggers the webhook.
   * @enum {string}
   */
  event_type?: "FILE_COMMENT" | "FILE_DELETE" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "LIBRARY_PUBLISH" | "PING";
  /**
   * Passcode
   * @description Secret string (max 100 chars) included in requests to your `endpoint` for verifying Figma's origin.
   */
  passcode?: string;
  /**
   * StatusEnm0
   * @description Initial status. `VAL_ACTIVE` (default): webhook is operational and receives initial `PING`. `VAL_PAUSED`: webhook is inactive, no initial `PING`; requires later activation to receive events.
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "PAUSED" | null;
  /**
   * Team Id
   * @description Identifier of the Figma team for which this webhook monitors events.
   */
  team_id?: string;
};

/**
 * Type of FIGMA's FIGMA_CREATE_A_WEBHOOK tool output.
 */
type FIGMA_CREATE_A_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Full details of the successfully created webhook.
   */
  data?: {
      /**
       * Client Id
       * @description Client ID of the OAuth application that created this webhook, if applicable; null if not created via OAuth.
       * @default null
       */
      client_id: string | null;
      /**
       * Description
       * @description Optional user-provided description (max 140 chars), if supplied during creation.
       * @default null
       */
      description: string | null;
      /**
       * Endpoint
       * @description URL where Figma sends POST requests when the subscribed event occurs.
       */
      endpoint: string;
      /**
       * Event Type
       * @description Type of event this webhook is subscribed to.
       * @enum {string}
       */
      event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT";
      /**
       * Id
       * @description Unique identifier for the newly created webhook.
       */
      id: string;
      /**
       * Passcode
       * @description Secret passcode sent by Figma with each event notification to your endpoint for request verification.
       */
      passcode: string;
      /**
       * Status
       * @description Current status: `ACTIVE` (operational, receiving events) or `PAUSED` (inactive, not receiving events).
       * @enum {string}
       */
      status: "ACTIVE" | "PAUSED";
      /**
       * Team Id
       * @description Identifier of the Figma team for which this webhook triggers notifications.
       */
      team_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_CREATE_DEV_RESOURCES tool input.
 */
type FIGMA_CREATE_DEV_RESOURCES_INPUT = {
  /**
   * Dev Resources
   * @description List of development resources to create.
   */
  dev_resources?: {
      /**
       * File Key
       * @description Identifier of the Figma file for attachment.
       */
      file_key: string;
      /**
       * Name
       * @description Visible name for the dev resource in Figma.
       */
      name: string;
      /**
       * Node Id
       * @description Identifier of the node within the Figma file for attachment.
       */
      node_id: string;
      /**
       * Url
       * @description URL for the dev resource (e.g., Jira ticket, GitHub issue, documentation).
       */
      url: string;
  }[];
};

/**
 * Type of FIGMA's FIGMA_CREATE_DEV_RESOURCES tool output.
 */
type FIGMA_CREATE_DEV_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Successfully created dev resources and any errors.
   */
  data?: {
      /**
       * Errors
       * @description Errors encountered during creation, if any.
       * @default null
       */
      errors: {
          /**
           * Error
           * @description Detailed error message.
           */
          error: string;
          /**
           * File Key
           * @description Identifier of the Figma file related to the error, if applicable.
           * @default null
           */
          file_key: string | null;
          /**
           * Node Id
           * @description Identifier of the Figma node related to the error, if applicable.
           * @default null
           */
          node_id: string | null;
      }[] | null;
      /**
       * Links Created
       * @description Successfully created development resources.
       */
      links_created: {
          /**
           * File Key
           * @description Identifier of the Figma file where attached.
           */
          file_key: string;
          /**
           * Id
           * @description Identifier of the created dev resource.
           */
          id: string;
          /**
           * Name
           * @description Name of the created dev resource.
           */
          name: string;
          /**
           * Node Id
           * @description Identifier of the Figma node where attached.
           */
          node_id: string;
          /**
           * Url
           * @description URL of the created dev resource.
           */
          url: string;
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
 * Type of FIGMA's FIGMA_CREATE_MODIFY_DELETE_VARIABLES tool input.
 */
type FIGMA_CREATE_MODIFY_DELETE_VARIABLES_INPUT = {
  /**
   * File Key
   * @description The key of the Figma file or branch to modify variables in. Use `GET /v1/files/:key` with the `branch_data=true` query parameter to obtain a branch key.
   */
  file_key?: string;
  /**
   * Variable Collections
   * @description List of operations for variable collections, each a dict with 'action' ('CREATE', 'UPDATE', 'DELETE'). For 'CREATE', include 'name' (temp 'id' optional). For 'UPDATE', 'id' and fields to modify. For 'DELETE', 'id'. See Figma API's `VariableCollectionMutation` for details.
   * @default []
   */
  variableCollections: {
      [key: string]: unknown;
  }[];
  /**
   * Variable Mode Values
   * @description A list of specific values to set for variables in particular modes. Each item links a variable and a mode to a new value.
   * @default []
   */
  variableModeValues: {
      /**
       * Mode Id
       * @description The ID of the mode in which to set the variable's value. This mode must belong to the variable collection containing the target variable.
       */
      modeId: string;
      /**
       * Value
       * @description The value to set for the variable in the specified mode. While this field is typed as boolean in the schema, the actual value provided must match the variable's `resolvedType` (e.g., STRING, FLOAT, COLOR, BOOLEAN). If setting to a variable alias, the alias must also resolve to this type. For non-boolean types, refer to Figma API documentation for the correct value structure if issues arise with this boolean-typed field.
       */
      value: boolean;
      /**
       * Variable Id
       * @description The ID of the target variable. A temporary ID can be used if the variable is being created in the same request.
       */
      variableId: string;
  }[];
  /**
   * Variable Modes
   * @description List of operations for modes, each a dict with 'action' ('CREATE', 'UPDATE', 'DELETE'). For 'CREATE', include 'variableCollectionId', 'name' (temp 'id' optional). For 'UPDATE', 'id' and 'name'. For 'DELETE', 'id'. See Figma API's `VariableModeMutation` for details.
   * @default []
   */
  variableModes: {
      [key: string]: unknown;
  }[];
  /**
   * Variables
   * @description List of operations for variables, each a dict with 'action' ('CREATE', 'UPDATE', 'DELETE'). For 'CREATE', include 'variableCollectionId', 'name', 'resolvedType' (temp 'id' optional). For 'UPDATE', 'id' and fields to modify. For 'DELETE', 'id'. See Figma API's `VariableMutation` for details.
   * @default []
   */
  variables: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of FIGMA's FIGMA_CREATE_MODIFY_DELETE_VARIABLES tool output.
 */
type FIGMA_CREATE_MODIFY_DELETE_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description The main part of the response, containing status, error indication, and metadata from the operation.
   */
  data?: {
      /**
       * Error
       * @description A boolean flag indicating if an error occurred. For successful requests, this value is always `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description Contains metadata about the performed operations, such as the mapping of temporary IDs to real IDs for newly created entities.
       */
      meta: {
          /**
           * Temp Id To Real Id
           * @description A mapping from temporary IDs provided in the request (e.g., for newly created items) to their permanent, real IDs assigned by Figma after creation.
           */
          tempIdToRealId: {
              [key: string]: string;
          };
      };
      /**
       * Status
       * @description The HTTP status code of the response. Typically 200 for success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_DELETE_A_COMMENT tool input.
 */
type FIGMA_DELETE_A_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The unique string identifier of the comment to be deleted. This ID is specific to the comment within the Figma file.
   */
  comment_id?: string;
  /**
   * File Key
   * @description The key of the Figma file or branch from which the comment will be deleted. This can be a file key (typically found in the file's URL) or a branch key. To obtain a branch key, use the `GET /v1/files/:key` endpoint with the `branch_data` query parameter.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_DELETE_A_COMMENT tool output.
 */
type FIGMA_DELETE_A_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Contains the outcome of the comment deletion attempt, including status and error indicators.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred. For successful requests where the comment is deleted, this value is always `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Status
       * @description The HTTP status code of the request. A value of 200 indicates the comment was successfully deleted.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_DELETE_A_REACTION tool input.
 */
type FIGMA_DELETE_A_REACTION_INPUT = {
  /**
   * Comment Id
   * @description Identifier of the comment from which the reaction will be removed. This ID is specific to the comment within the Figma file.
   */
  comment_id?: string;
  /**
   * Emoji
   * @description The specific emoji character (e.g., '❤️', '👍') of the reaction to delete. This must be an exact match to the emoji of an existing reaction on the comment.
   */
  emoji?: string;
  /**
   * File Key
   * @description Key of the file or branch containing the comment reaction to be deleted. The file key can be obtained from the file URL or API responses. To get a branch key, use the `GET /v1/files/:key` endpoint with the `branch_data` query parameter.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_DELETE_A_REACTION tool output.
 */
type FIGMA_DELETE_A_REACTION_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the delete operation, including status and error information.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred. Always `false` on successful deletion, as per the API specification.
       * @enum {boolean}
       */
      error: false;
      /**
       * Status
       * @description HTTP status code confirming the outcome of the deletion. Always `200` on success as per the API specification.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_DELETE_A_WEBHOOK tool input.
 */
type FIGMA_DELETE_A_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to be deleted.
   */
  webhook_id?: string;
};

/**
 * Type of FIGMA's FIGMA_DELETE_A_WEBHOOK tool output.
 */
type FIGMA_DELETE_A_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the webhook that was successfully deleted.
   */
  data?: {
      /**
       * Client Id
       * @description Client ID of the OAuth application that created this webhook, if any.
       * @default null
       */
      client_id: string | null;
      /**
       * Description
       * @description User-provided description or name for the deleted webhook (max 140 characters).
       * @default null
       */
      description: string | null;
      /**
       * Endpoint
       * @description HTTPS URL endpoint where Figma sent POST notifications for the subscribed event.
       */
      endpoint: string;
      /**
       * Event Type
       * @description Type of event the deleted webhook was configured to listen for.
       * @enum {string}
       */
      event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT";
      /**
       * Id
       * @description The unique identifier of the deleted webhook.
       */
      id: string;
      /**
       * Passcode
       * @description Secret passcode included by Figma in the `X-Figma-Signature` header for verifying request authenticity to the webhook's endpoint.
       */
      passcode: string;
      /**
       * Status
       * @description Operational status of the webhook at deletion, indicating if it was `ACTIVE` (healthy, receiving all events) or `PAUSED` (not receiving any events).
       * @enum {string}
       */
      status: "ACTIVE" | "PAUSED";
      /**
       * Team Id
       * @description The ID of the team for which the deleted webhook was receiving event notifications.
       */
      team_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_DELETE_DEV_RESOURCE tool input.
 */
type FIGMA_DELETE_DEV_RESOURCE_INPUT = {
  /**
   * Dev Resource Id
   * @description Identifier of the dev resource to delete from the file.
   */
  dev_resource_id?: string;
  /**
   * File Key
   * @description Identifier of the Figma file from which to delete the dev resource. Must be a main file key, not a branch key.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_DELETE_DEV_RESOURCE tool output.
 */
type FIGMA_DELETE_DEV_RESOURCE_OUTPUT = {
  /**
   * Data
   * @description API response dictionary; typically an empty object confirms successful deletion.
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
 * Type of FIGMA's FIGMA_DESIGN_TOKENS_TO_TAILWIND tool input.
 */
type FIGMA_DESIGN_TOKENS_TO_TAILWIND_INPUT = {
  /**
   * Config Format
   * @description Output format: 'ts' for TypeScript or 'js' for JavaScript
   * @default ts
   */
  config_format: string;
  /**
   * Include Font Imports
   * @description Include @import statements for Google Fonts
   * @default true
   */
  include_font_imports: boolean;
  /**
   * Prefix
   * @description Prefix for generated token names (e.g., 'brand-')
   * @default
   */
  prefix: string;
  /**
   * Tokens
   * @description Design tokens to convert
   */
  tokens?: {
      /** Border Radius */
      border_radius: {
          /** Name */
          name: string;
          /** Source */
          source: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
          /** Value */
          value: number | null;
      }[];
      /** Colors */
      colors: {
          /** Name */
          name: string;
          /**
           * Opacity
           * @default null
           */
          opacity: number | null;
          /** Source */
          source: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
          /** Value */
          value: string;
      }[];
      /** Shadows */
      shadows: {
          /** Name */
          name: string;
          /** Shadows */
          shadows: {
              [key: string]: unknown;
          }[];
          /** Source */
          source: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
      }[];
      /** Sources */
      sources: {
          [key: string]: number;
      };
      /** Spacing */
      spacing: {
          /** Name */
          name: string;
          /** Source */
          source: string;
          /** Type */
          type: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
          /** Value */
          value: number;
      }[];
      /** Total Tokens */
      total_tokens: number;
      /** Typography */
      typography: {
          /** Font Family */
          font_family: string;
          /** Font Size */
          font_size: number;
          /** Font Weight */
          font_weight: number;
          /**
           * Letter Spacing
           * @default null
           */
          letter_spacing: number | null;
          /**
           * Line Height
           * @default null
           */
          line_height: number | null;
          /** Name */
          name: string;
          /** Source */
          source: string;
          /**
           * Text Transform
           * @default null
           */
          text_transform: string | null;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
      }[];
  };
};

/**
 * Type of FIGMA's FIGMA_DESIGN_TOKENS_TO_TAILWIND tool output.
 */
type FIGMA_DESIGN_TOKENS_TO_TAILWIND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config Content
       * @description Tailwind config file content
       */
      config_content: string;
      /**
       * Globals Css
       * @description Global CSS with font imports
       * @default null
       */
      globals_css: string | null;
      /**
       * Token Summary
       * @description Summary of tokens converted
       */
      token_summary: {
          [key: string]: number;
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
 * Type of FIGMA's FIGMA_DETECT_BACKGROUND tool input.
 */
type FIGMA_DETECT_BACKGROUND_INPUT = {
  /**
   * File Key
   * @description The Figma file key
   */
  file_key?: string;
  /**
   * Search Depth
   * @description How many levels up to search for backgrounds
   * @default 3
   */
  search_depth: number;
  /**
   * Target Node Ids
   * @description List of node IDs to find backgrounds for
   */
  target_node_ids?: string[];
};

/**
 * Type of FIGMA's FIGMA_DETECT_BACKGROUND tool output.
 */
type FIGMA_DETECT_BACKGROUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Backgrounds */
      backgrounds: {
          [key: string]: {
              /** Bounds */
              bounds: {
                  [key: string]: number;
              };
              /**
               * Confidence
               * @description Confidence score 0-1
               */
              confidence: number;
              /**
               * Fill Type
               * @default null
               */
              fill_type: string | null;
              /** Name */
              name: string;
              /** Node Id */
              node_id: string;
              /** Reason */
              reason: string;
              /** Type */
              type: string;
          }[];
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
 * Type of FIGMA's FIGMA_DISCOVER_FIGMA_RESOURCES tool input.
 */
type FIGMA_DISCOVER_FIGMA_RESOURCES_INPUT = {
  /**
   * Figma Url
   * @description Full Figma URL to extract file_key, node_id, and team_id from. Works with any Figma URL format:
   *     • File: https://www.figma.com/file/ABC123/Design-Name
   *     • Design: https://www.figma.com/design/ABC123/Design-Name
   *     • With node: https://www.figma.com/file/ABC123/Design?node-id=123:456
   *     • Team: https://www.figma.com/files/team/123456/Team-Name
   *     This is the easiest way to get all IDs you need!
   * @default null
   */
  figma_url: string | null;
  /**
   * File Key
   * @description File key to extract all node IDs from. Get this from file URL (figma.com/file/FILE_KEY/...) or from project files list. Returns hierarchical list of all nodes with IDs, names, types, and paths.
   * @default null
   */
  file_key: string | null;
  /**
   * Max Depth
   * @description Maximum tree depth to traverse when discovering nodes. 2=pages+frames, 3=pages+frames+components, etc. Higher values find more nodes but take longer.
   * @default 2
   */
  max_depth: number;
  /**
   * Project Id
   * @description Project ID to list all files from. Get this from project URL or from team projects list. Returns files with keys, names, and thumbnails.
   * @default null
   */
  project_id: string | null;
  /**
   * Team Id
   * @description Team ID to list all projects from. Get this from team URL: https://www.figma.com/files/team/YOUR_TEAM_ID/Team-Name. Returns list of projects with IDs and names.
   * @default null
   */
  team_id: string | null;
};

/**
 * Type of FIGMA's FIGMA_DISCOVER_FIGMA_RESOURCES tool output.
 */
type FIGMA_DISCOVER_FIGMA_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ExtractedIds
       * @description IDs automatically extracted from Figma URL.
       * @default null
       */
      extracted_ids: {
          /**
           * File Key
           * @description Figma file key extracted from URL (use with other Figma actions)
           * @default null
           */
          file_key: string | null;
          /**
           * Node Id
           * @description Node ID extracted from URL, converted to API format (123:456 → 123-456)
           * @default null
           */
          node_id: string | null;
          /**
           * Team Id
           * @description Team ID extracted from URL (use to list projects)
           * @default null
           */
          team_id: string | null;
      } | null;
      /**
       * Files
       * @description Files found in project (if project_id provided). Use file keys with other actions.
       * @default []
       */
      files: {
          /**
           * Key
           * @description File key (use with file_key parameter or other Figma actions)
           */
          key: string;
          /**
           * Last Modified
           * @description Last modification timestamp
           */
          last_modified: string;
          /**
           * Name
           * @description Human-readable file name
           */
          name: string;
          /**
           * Thumbnail Url
           * @description Preview thumbnail URL (may expire)
           * @default null
           */
          thumbnail_url: string | null;
      }[];
      /**
       * Instructions
       * @description Step-by-step guidance on what to do next based on your input.
       * @default []
       */
      instructions: string[];
      /**
       * Nodes
       * @description Nodes found in file (if file_key provided). Use node IDs for background detection, etc.
       * @default []
       */
      nodes: {
          /**
           * Id
           * @description Node ID (use with target_node_ids or node_id parameters)
           */
          id: string;
          /**
           * Name
           * @description Human-readable node name from Figma
           */
          name: string;
          /**
           * Path
           * @description Full hierarchical path (e.g., 'Page 1/Header/Logo')
           */
          path: string;
          /**
           * Type
           * @description Node type (FRAME, COMPONENT, TEXT, etc.)
           */
          type: string;
      }[];
      /**
       * Projects
       * @description Projects found in team (if team_id provided). Use project IDs to get files.
       * @default []
       */
      projects: {
          /**
           * Id
           * @description Project ID (use with project_id parameter)
           */
          id: string;
          /**
           * Name
           * @description Human-readable project name
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
 * Type of FIGMA's FIGMA_DOWNLOAD_FIGMA_IMAGES tool input.
 */
type FIGMA_DOWNLOAD_FIGMA_IMAGES_INPUT = {
  /**
   * File Key
   * @description Figma file key from URL
   */
  file_key?: string;
  /**
   * Images
   * @description List of images to download
   */
  images?: {
      /**
       * File Name
       * @description Output filename with extension (e.g., 'logo.png', 'icon.svg')
       */
      file_name: string;
      /**
       * Format
       * @description Image format: png, svg, jpg, pdf
       * @default png
       */
      format: string;
      /**
       * Node Id
       * @description Node ID to render as image (e.g., '1:2')
       */
      node_id: string;
  }[];
  /**
   * Scale
   * @description Image scaling factor (0.01 to 4, default 2 for retina)
   * @default 2
   */
  scale: number;
  /**
   * Svg Include Id
   * @description Include element IDs in SVG
   * @default false
   */
  svg_include_id: boolean;
  /**
   * Svg Outline Text
   * @description Convert text to paths in SVG for accuracy
   * @default true
   */
  svg_outline_text: boolean;
  /**
   * Svg Simplify Stroke
   * @description Simplify strokes in SVG
   * @default true
   */
  svg_simplify_stroke: boolean;
};

/**
 * Type of FIGMA's FIGMA_DOWNLOAD_FIGMA_IMAGES tool output.
 */
type FIGMA_DOWNLOAD_FIGMA_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Downloaded Images
       * @description List of download results
       */
      downloaded_images: {
          /**
           * FileDownloadable
           * @description Downloaded file
           * @default null
           */
          content: {
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
          } | null;
          /**
           * Error
           * @description Error message if failed
           * @default null
           */
          error: string | null;
          /**
           * File Name
           * @description Output filename
           */
          file_name: string;
          /**
           * Node Id
           * @description Node ID that was downloaded
           */
          node_id: string;
          /**
           * Success
           * @description Whether download succeeded
           */
          success: boolean;
      }[];
      /**
       * Failed Count
       * @description Number of failed downloads
       */
      failed_count: number;
      /**
       * Successful Count
       * @description Number of successfully downloaded images
       */
      successful_count: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_EXTRACT_DESIGN_TOKENS tool input.
 */
type FIGMA_EXTRACT_DESIGN_TOKENS_INPUT = {
  /**
   * Extract From Nodes
   * @description Extract tokens from node properties
   * @default true
   */
  extract_from_nodes: boolean;
  /**
   * File Key
   * @description The Figma file key
   */
  file_key?: string;
  /**
   * Include Local Styles
   * @description Include local styles in extraction
   * @default true
   */
  include_local_styles: boolean;
  /**
   * Include Variables
   * @description Include variables in extraction
   * @default false
   */
  include_variables: boolean;
};

/**
 * Type of FIGMA's FIGMA_EXTRACT_DESIGN_TOKENS tool output.
 */
type FIGMA_EXTRACT_DESIGN_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Border Radius */
      border_radius: {
          /** Name */
          name: string;
          /** Source */
          source: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
          /** Value */
          value: number | null;
      }[];
      /** Colors */
      colors: {
          /** Name */
          name: string;
          /**
           * Opacity
           * @default null
           */
          opacity: number | null;
          /** Source */
          source: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
          /** Value */
          value: string;
      }[];
      /** Shadows */
      shadows: {
          /** Name */
          name: string;
          /** Shadows */
          shadows: {
              [key: string]: unknown;
          }[];
          /** Source */
          source: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
      }[];
      /** Sources */
      sources: {
          [key: string]: number;
      };
      /** Spacing */
      spacing: {
          /** Name */
          name: string;
          /** Source */
          source: string;
          /** Type */
          type: string;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
          /** Value */
          value: number;
      }[];
      /** Total Tokens */
      total_tokens: number;
      /** Typography */
      typography: {
          /** Font Family */
          font_family: string;
          /** Font Size */
          font_size: number;
          /** Font Weight */
          font_weight: number;
          /**
           * Letter Spacing
           * @default null
           */
          letter_spacing: number | null;
          /**
           * Line Height
           * @default null
           */
          line_height: number | null;
          /** Name */
          name: string;
          /** Source */
          source: string;
          /**
           * Text Transform
           * @default null
           */
          text_transform: string | null;
          /**
           * Usage Count
           * @default 0
           */
          usage_count: number;
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
 * Type of FIGMA's FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS tool input.
 */
type FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS_INPUT = {
  /**
   * Analyze Components
   * @description Extract component variant states
   * @default true
   */
  analyze_components: boolean;
  /**
   * File Key
   * @description Figma file key from URL
   */
  file_key?: string;
  /**
   * Include Animations
   * @description Include detailed animation data
   * @default true
   */
  include_animations: boolean;
};

/**
 * Type of FIGMA's FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS tool output.
 */
type FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Animation Types Used
       * @description List of animation types used in the prototype
       */
      animation_types_used: string[];
      /**
       * Component States
       * @description Component variant states
       */
      component_states: {
          /**
           * Component Id
           * @description Component ID
           */
          component_id: string;
          /**
           * Default Variant
           * @description Default variant
           * @default null
           */
          default_variant: string | null;
          /**
           * Name
           * @description Component name
           */
          name: string;
          /**
           * Variants
           * @description Available variant names
           */
          variants: string[];
      }[];
      /**
       * Interactions
       * @description All interactions found in the prototype
       */
      interactions: {
          /**
           * Actions
           * @description Actions to perform
           */
          actions: {
              /**
               * Destination Id
               * @description Target node ID
               * @default null
               */
              destination_id: string | null;
              /**
               * Navigation
               * @description Navigation type (NAVIGATE, OVERLAY, etc.)
               * @default null
               */
              navigation: string | null;
              /**
               * AnimationTransition
               * @description Animation transition details.
               * @default null
               */
              transition: {
                  /**
                   * Direction
                   * @description Direction for directional transitions
                   * @default null
                   */
                  direction: string | null;
                  /**
                   * Duration
                   * @description Duration in milliseconds
                   */
                  duration: number;
                  /**
                   * Easing
                   * @description Easing function (ease-in, ease-out, etc.)
                   */
                  easing: string;
                  /**
                   * Type
                   * @description Transition type (SMART_ANIMATE, DISSOLVE, etc.)
                   */
                  type: string;
              } | null;
              /**
               * Type
               * @description Action type (NODE, URL, BACK, etc.)
               */
              type: string;
              /**
               * Url
               * @description URL for URL actions
               * @default null
               */
              url: string | null;
          }[];
          /**
           * Node Id
           * @description Source node ID
           */
          node_id: string;
          /**
           * Node Name
           * @description Source node name
           */
          node_name: string;
          /**
           * Trigger
           * @description Interaction trigger
           */
          trigger: {
              /**
               * Delay
               * @description Delay in milliseconds
               * @default null
               */
              delay: number | null;
              /**
               * Timeout
               * @description Timeout in milliseconds
               * @default null
               */
              timeout: number | null;
              /**
               * Type
               * @description Trigger type (ON_CLICK, ON_HOVER, etc.)
               */
              type: string;
          };
      }[];
      /**
       * Prototype Flows
       * @description Prototype flows and starting points
       */
      prototype_flows: {
          /**
           * Name
           * @description Flow name
           */
          name: string;
          /**
           * Nodes In Flow
           * @description All node IDs in this flow
           */
          nodes_in_flow: string[];
          /**
           * Starting Node Id
           * @description Starting frame ID
           */
          starting_node_id: string;
      }[];
      /**
       * Total Interactions
       * @description Total number of interactions found
       */
      total_interactions: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_ACTIVITY_LOGS tool input.
 */
type FIGMA_GET_ACTIVITY_LOGS_INPUT = {
  /**
   * End Time
   * @description Unix timestamp for the latest time for events. If unspecified, defaults to the current timestamp.
   */
  end_time?: number;
  /**
   * Events
   * @description Comma-separated event types to include. If unspecified, all event types are returned. Refer to Figma's API documentation for a comprehensive list.
   */
  events?: string;
  /**
   * Limit
   * @description Maximum number of events per response, for pagination. If unspecified, defaults to 1000.
   */
  limit?: number;
  /**
   * Order
   * @description Sort order for events by timestamp.
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Start Time
   * @description Unix timestamp for the earliest time for events. If unspecified, defaults to one year ago.
   */
  start_time?: number;
};

/**
 * Type of FIGMA's FIGMA_GET_ACTIVITY_LOGS tool output.
 */
type FIGMA_GET_ACTIVITY_LOGS_OUTPUT = {
  /** Data */
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
 * Type of FIGMA's FIGMA_GET_A_WEBHOOK tool input.
 */
type FIGMA_GET_A_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to retrieve.
   */
  webhook_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_A_WEBHOOK tool output.
 */
type FIGMA_GET_A_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information of the retrieved webhook.
   */
  data?: {
      /**
       * Client Id
       * @description The client ID of the OAuth application that created this webhook, if applicable. This field will be null if the webhook was not created by an OAuth app.
       * @default null
       */
      client_id: string | null;
      /**
       * Description
       * @description An optional, user-provided description or name for the webhook. This can help in managing multiple webhooks. Maximum length is 140 characters.
       * @default null
       */
      description: string | null;
      /**
       * Endpoint
       * @description The URL of the server endpoint that Figma will send HTTP POST requests to when the subscribed event occurs.
       */
      endpoint: string;
      /**
       * Event Type
       * @description The type of event that triggers the webhook. Valid event types include PING, FILE_UPDATE, FILE_VERSION_UPDATE, FILE_DELETE, LIBRARY_PUBLISH, and FILE_COMMENT.
       * @enum {string}
       */
      event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT";
      /**
       * Id
       * @description The unique identifier of the webhook.
       */
      id: string;
      /**
       * Passcode
       * @description A secret passcode that Figma includes in the `X-Figma-Signature` header of webhook requests. This passcode can be used by your endpoint to verify the authenticity of incoming requests from Figma.
       */
      passcode: string;
      /**
       * Status
       * @description The current operational status of the webhook. `ACTIVE` indicates the webhook is healthy and receiving all subscribed events. `PAUSED` indicates the webhook is temporarily disabled and will not receive events.
       * @enum {string}
       */
      status: "ACTIVE" | "PAUSED";
      /**
       * Team Id
       * @description The unique identifier of the team for which the webhook listens to events.
       */
      team_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_COMMENTS_IN_A_FILE tool input.
 */
type FIGMA_GET_COMMENTS_IN_A_FILE_INPUT = {
  /**
   * As Md
   * @description If true, comment content will be returned in Markdown format where applicable (e.g., for links, bold text). Defaults to false, returning rich text structure.
   * @default null
   */
  as_md: boolean | null;
  /**
   * File Key
   * @description Identifier for the Figma file from which to retrieve comments. This can be a file key (a unique string identifying a file) or a branch key. To obtain a branch key, use the `GET /v1/files/:key` endpoint with the `branch_data` query parameter.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_COMMENTS_IN_A_FILE tool output.
 */
type FIGMA_GET_COMMENTS_IN_A_FILE_OUTPUT = {
  /**
   * Data
   * @description Wrapper object containing the list of comments.
   */
  data?: {
      /**
       * Comments
       * @description A list of comment objects retrieved from the Figma file.
       */
      comments: {
          /**
           * ClientMeta
           * @description Positioning data for the comment, detailing its location and type (point or region) on the canvas. The structure of this field varies based on how the comment is placed:
           *     - `ClientMeta`: Absolute canvas coordinates (x, y) for a point comment.
           *     - `ClientMeta1`: Node-relative offset (`node_id`, `node_offset`) for a point comment.
           *     - `ClientMeta2`: Absolute canvas coordinates (`x`, `y` for an anchor corner), region dimensions (`region_width`, `region_height`), and `comment_pin_corner` for a region comment.
           *     - `ClientMeta3`: Node-relative offset (`node_id`, `node_offset` for an anchor corner), region dimensions, and `comment_pin_corner` for a region comment.
           */
          client_meta: {
              /**
               * X
               * @description The X coordinate of a vector, typically representing an absolute position on the Figma canvas.
               */
              x: number;
              /**
               * Y
               * @description The Y coordinate of a vector, typically representing an absolute position on the Figma canvas.
               */
              y: number;
          } | null;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp in UTC ISO 8601 format indicating when the comment was created.
           */
          created_at: string;
          /**
           * File Key
           * @description Identifier of the Figma file containing this comment.
           */
          file_key: string;
          /**
           * Id
           * @description Unique identifier for the comment.
           */
          id: string;
          /**
           * Message
           * @description The text content of the comment. May include mentions or rich text elements if `as_md` is false, or Markdown content if `as_md` is true.
           */
          message: string;
          /**
           * Order Id
           * @description A string representing the numerical identifier (e.g., '1', '2') displayed with the comment in the Figma UI. This is typically present only for top-level comments and reflects their visible ordering.
           * @default null
           */
          order_id: string | null;
          /**
           * Parent Id
           * @description Identifier of the parent comment if this comment is a reply. Null or absent for top-level comments.
           * @default null
           */
          parent_id: string | null;
          /**
           * Reactions
           * @description A list of all reactions made to this comment.
           */
          reactions: {
              /**
               * Created At
               * Format: date-time
               * @description Timestamp in UTC ISO 8601 format indicating when the reaction was added.
               */
              created_at: string;
              /**
               * Emoji
               * @description The emoji reaction, represented as a shortcode (e.g., `:heart:`, `:+1::skin-tone-2:`). For a list of accepted emoji shortcodes and information on skin tone modifiers, refer to the linked resource: [emoji list](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json).
               */
              emoji: string;
              /**
               * User
               * @description Details of the user who added the reaction.
               */
              user: {
                  /**
                   * Handle
                   * @description Display name or handle of the Figma user.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description Unique and stable identifier for the Figma user.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL of the user's profile image.
                   */
                  img_url: string;
              };
          }[];
          /**
           * Resolved At
           * Format: date-time
           * @description Timestamp in UTC ISO 8601 format indicating when the comment was resolved. Null or absent if the comment is not resolved.
           * @default null
           */
          resolved_at: string | null;
          /**
           * User
           * @description Details of the user who created the comment.
           */
          user: {
              /**
               * Handle
               * @description Display name or handle of the Figma user.
               */
              handle: string;
              /**
               * Id
               * @description Unique and stable identifier for the Figma user.
               */
              id: string;
              /**
               * Img Url
               * @description URL of the user's profile image.
               */
              img_url: string;
          };
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
 * Type of FIGMA's FIGMA_GET_COMPONENT tool input.
 */
type FIGMA_GET_COMPONENT_INPUT = {
  /**
   * File Key
   * @description File key that contains the component
   */
  file_key?: string;
  /**
   * Node Id
   * @description ID of the component node
   */
  node_id?: string;
  /**
   * Simplify
   * @description Automatically simplify response (recommended)
   * @default true
   */
  simplify: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_COMPONENT tool output.
 */
type FIGMA_GET_COMPONENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Simplified */
  simplified?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_COMPONENT_SET tool input.
 */
type FIGMA_GET_COMPONENT_SET_INPUT = {
  /**
   * Key
   * @description The unique identifier of the component set.
   */
  key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_COMPONENT_SET tool output.
 */
type FIGMA_GET_COMPONENT_SET_OUTPUT = {
  /**
   * Data
   * @description The main data payload of the response, containing details of the component set.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred. For successful requests, this value is always `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description Contains the detailed metadata for the requested component set.
       */
      meta: {
          /**
           * ContainingFrame
           * @description Information about the frame that contains the component set, if applicable. This provides context on where the component set is located within a file structure.
           * @default null
           */
          containing_frame: {
              /**
               * Background Color
               * @description The background color of the frame, if set, in RGBA format.
               * @default null
               */
              backgroundColor: string | null;
              /**
               * ContainingComponentSet
               * @description Details of the component set that this frame is part of, if applicable.
               * @default null
               */
              containingComponentSet: {
                  /**
                   * Name
                   * @description The name of the parent component set node, if applicable.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Node Id
                   * @description The unique identifier of the parent component set node, if applicable.
                   * @default null
                   */
                  nodeId: string | null;
              } | null;
              /**
               * ContainingStateGroup
               * @description Deprecated: This field is deprecated. Use `containingComponentSet` instead for information about the component set containing this frame.
               * @default null
               */
              containingStateGroup: {
                  /**
                   * Name
                   * @description The name of the state group node, if applicable.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Node Id
                   * @description The unique identifier of the state group node, if applicable.
                   * @default null
                   */
                  nodeId: string | null;
              } | null;
              /**
               * Name
               * @description The name of the frame node.
               * @default null
               */
              name: string | null;
              /**
               * Node Id
               * @description The unique identifier of the frame node within the file.
               * @default null
               */
              nodeId: string | null;
              /**
               * Page Id
               * @description The unique identifier of the page containing this frame.
               */
              pageId: string;
              /**
               * Page Name
               * @description The name of the page containing this frame.
               */
              pageName: string;
          } | null;
          /**
           * Created At
           * Format: date-time
           * @description The date and time (UTC ISO 8601 format) when the component set was created.
           */
          created_at: string;
          /**
           * Description
           * @description The description of the component set as provided by the publisher.
           */
          description: string;
          /**
           * File Key
           * @description The unique identifier of the Figma file that contains this component set.
           */
          file_key: string;
          /**
           * Key
           * @description The unique identifier for the component set.
           */
          key: string;
          /**
           * Name
           * @description The name of the component set.
           */
          name: string;
          /**
           * Node Id
           * @description The unique identifier of the component set node within the Figma file.
           */
          node_id: string;
          /**
           * Thumbnail Url
           * @description URL to a thumbnail image of the component set, if available.
           * @default null
           */
          thumbnail_url: string | null;
          /**
           * Updated At
           * Format: date-time
           * @description The date and time (UTC ISO 8601 format) when the component set was last updated.
           */
          updated_at: string;
          /**
           * User
           * @description Information about the user who published the component set.
           */
          user: {
              /**
               * Handle
               * @description The name of the user, often their username or display name.
               */
              handle: string;
              /**
               * Id
               * @description Unique stable identifier of the user.
               */
              id: string;
              /**
               * Img Url
               * @description URL of the user's profile image.
               */
              img_url: string;
          };
      };
      /**
       * Status
       * @description HTTP status code of the response. A value of 200 indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_CURRENT_USER tool input.
 */
type FIGMA_GET_CURRENT_USER_INPUT = object;

/**
 * Type of FIGMA's FIGMA_GET_CURRENT_USER tool output.
 */
type FIGMA_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the currently authenticated user.
   */
  data?: {
      /**
       * Email
       * @description Email address for the user's Figma account; exclusively available on this /v1/me endpoint.
       */
      email: string;
      /**
       * Handle
       * @description Figma handle or display name of the user.
       */
      handle: string;
      /**
       * Id
       * @description Unique stable identifier of the user.
       */
      id: string;
      /**
       * Img Url
       * @description URL of the user's profile image.
       */
      img_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_DEV_RESOURCES tool input.
 */
type FIGMA_GET_DEV_RESOURCES_INPUT = {
  /**
   * File Key
   * @description The unique identifier of the Figma design file from which to retrieve development resources. This must be the key for a main file, not a branch key.
   */
  file_key?: string;
  /**
   * Node Ids
   * @description A comma-separated string of node IDs. If provided, the response will be filtered to include only development resources linked to these specific nodes. If omitted or `null`, all development resources in the file will be returned.
   */
  node_ids?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_DEV_RESOURCES tool output.
 */
type FIGMA_GET_DEV_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description The object containing the list of development resources.
   */
  data?: {
      /**
       * Dev Resources
       * @description A list of `DevResource` objects, each representing an external development resource linked to the Figma file or specific nodes within it.
       */
      dev_resources: {
          /**
           * File Key
           * @description The identifier of the Figma file this development resource is associated with.
           */
          file_key: string;
          /**
           * Id
           * @description Unique identifier of this specific development resource link.
           */
          id: string;
          /**
           * Name
           * @description The display name of the development resource (e.g., 'Implement Feature X', 'BUG-123').
           */
          name: string;
          /**
           * Node Id
           * @description The identifier of the specific node (e.g., layer, frame, component) in the Figma file to which this development resource is attached.
           */
          node_id: string;
          /**
           * Url
           * @description The URL pointing to the external development tool or resource (e.g., a link to a Jira ticket, GitHub issue, or documentation page).
           */
          url: string;
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
 * Type of FIGMA's FIGMA_GET_FILES_IN_A_PROJECT tool input.
 */
type FIGMA_GET_FILES_IN_A_PROJECT_INPUT = {
  /**
   * Branch Data
   * @description If true, includes metadata for branches of main files.
   * @default false
   */
  branch_data: boolean;
  /**
   * Project Id
   * @description Identifier of the Figma project, typically found in its URL.
   */
  project_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_FILES_IN_A_PROJECT tool output.
 */
type FIGMA_GET_FILES_IN_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Contains the project's details, including its name and a list of its associated files.
   */
  data?: {
      /**
       * Files
       * @description `File` objects, each representing a file within the project.
       */
      files: {
          /**
           * Key
           * @description Unique opaque identifier for the Figma file.
           */
          key: string;
          /**
           * Last Modified
           * Format: date-time
           * @description UTC timestamp (ISO 8601) of the last update to file content or metadata.
           */
          last_modified: string;
          /**
           * Name
           * @description The user-visible name of the Figma file.
           */
          name: string;
          /**
           * Thumbnail Url
           * @description A temporary URL to a thumbnail image of the file's last saved version. This URL may change or expire.
           * @default null
           */
          thumbnail_url: string | null;
      }[];
      /**
       * Name
       * @description The name of the Figma project.
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
 * Type of FIGMA's FIGMA_GET_FILE_COMPONENTS tool input.
 */
type FIGMA_GET_FILE_COMPONENTS_INPUT = {
  /**
   * File Key
   * @description Key of the Figma file. This file must be a main file (not a branch key) that acts as a library, as components are published from main files.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_COMPONENTS tool output.
 */
type FIGMA_GET_FILE_COMPONENTS_OUTPUT = {
  /**
   * Data
   * @description Structured API response detailing retrieved components and request outcome.
   */
  data?: {
      /**
       * Error
       * @description Error indicator; `false` for successful requests.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description Contains the list of retrieved components.
       */
      meta: {
          /**
           * Components
           * @description List of `Component` objects found in the file library.
           */
          components: {
              /**
               * ContainingFrame
               * @description Data on the frame where the component resides; null if not within a frame.
               * @default null
               */
              containing_frame: {
                  /**
                   * Background Color
                   * @description Background color of the frame node (RGBA); null if not set or applicable.
                   * @default null
                   */
                  backgroundColor: string | null;
                  /**
                   * ContainingComponentSet
                   * @description Details of the component set for this frame, if applicable; null if not part of a component set.
                   * @default null
                   */
                  containingComponentSet: {
                      /**
                       * Name
                       * @description Name of the component set node; null if not applicable.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description ID of the component set node; null if not applicable.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * ContainingStateGroup
                   * @description Deprecated: Use `containingComponentSet`. Details of the state group for this frame, if any.
                   * @default null
                   */
                  containingStateGroup: {
                      /**
                       * Name
                       * @description Name of the state group node; null if not applicable.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description ID of the state group node; null if not applicable.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * Name
                   * @description Name of the frame node; null if not applicable.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Node Id
                   * @description ID of the frame node containing the component; null if not applicable.
                   * @default null
                   */
                  nodeId: string | null;
                  /**
                   * Page Id
                   * @description ID of the page containing this frame.
                   */
                  pageId: string;
                  /**
                   * Page Name
                   * @description Name of the page containing this frame.
                   */
                  pageName: string;
              } | null;
              /**
               * Created At
               * Format: date-time
               * @description Timestamp (UTC ISO 8601) when the component was created.
               */
              created_at: string;
              /**
               * Description
               * @description Description of the component, as provided by the publisher in the Figma UI.
               */
              description: string;
              /**
               * File Key
               * @description Key of the Figma file containing this component.
               */
              file_key: string;
              /**
               * Key
               * @description Unique global key for the component.
               */
              key: string;
              /**
               * Name
               * @description Name of the component as it appears in the Figma UI.
               */
              name: string;
              /**
               * Node Id
               * @description ID of the component node within the Figma file.
               */
              node_id: string;
              /**
               * Thumbnail Url
               * @description URL for a 1024x1024 component thumbnail; null if unavailable.
               * @default null
               */
              thumbnail_url: string | null;
              /**
               * Updated At
               * Format: date-time
               * @description Timestamp (UTC ISO 8601) when the component was last updated.
               */
              updated_at: string;
              /**
               * User
               * @description User who created or last updated the component.
               */
              user: {
                  /**
                   * Handle
                   * @description User's display name or handle.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description User's unique and stable identifier.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL of the user's profile image.
                   */
                  img_url: string;
              };
          }[];
      };
      /**
       * Status
       * @description HTTP response status code; 200 indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_COMPONENT_SETS tool input.
 */
type FIGMA_GET_FILE_COMPONENT_SETS_INPUT = {
  /**
   * File Key
   * @description Key of the Figma file. Must be a main file key (not a branch key) as component sets are published from main files.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_COMPONENT_SETS tool output.
 */
type FIGMA_GET_FILE_COMPONENT_SETS_OUTPUT = {
  /**
   * Data
   * @description The structured response data from the API, including status, error information, and the list of component sets.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred during the request. For successful requests, this is expected to be `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description The primary payload of the response, containing the list of component sets.
       */
      meta: {
          /**
           * Component Sets
           * @description Details of each component set found in the file.
           */
          component_sets: {
              /**
               * ContainingFrame
               * @description Data on the frame in which this component set resides, if applicable.
               * @default null
               */
              containing_frame: {
                  /**
                   * Background Color
                   * @description Background color of the frame node, if applicable.
                   * @default null
                   */
                  backgroundColor: string | null;
                  /**
                   * ContainingComponentSet
                   * @description Details of the component set that contains this frame node, if applicable.
                   * @default null
                   */
                  containingComponentSet: {
                      /**
                       * Name
                       * @description Name of the component set node, if applicable.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description Identifier of the component set node, if applicable.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * ContainingStateGroup
                   * @description Deprecated. Use `containingComponentSet` instead for details about the component set this frame belongs to.
                   * @default null
                   */
                  containingStateGroup: {
                      /**
                       * Name
                       * @description Name of the state group node, if applicable.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description Identifier of the state group node, if applicable.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * Name
                   * @description Name of the frame node, if applicable.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Node Id
                   * @description Identifier of the frame node within the file, if applicable.
                   * @default null
                   */
                  nodeId: string | null;
                  /**
                   * Page Id
                   * @description Identifier of the page containing the frame node.
                   */
                  pageId: string;
                  /**
                   * Page Name
                   * @description Name of the page containing the frame node.
                   */
                  pageName: string;
              } | null;
              /**
               * Created At
               * Format: date-time
               * @description Timestamp (UTC ISO 8601) when the component set was created.
               */
              created_at: string;
              /**
               * Description
               * @description Description of the component set, as provided by the publisher.
               */
              description: string;
              /**
               * File Key
               * @description Identifier of the Figma file that contains this component set.
               */
              file_key: string;
              /**
               * Key
               * @description The unique identifier for this component set.
               */
              key: string;
              /**
               * Name
               * @description Name of the component set.
               */
              name: string;
              /**
               * Node Id
               * @description Identifier of the component set node within the Figma file.
               */
              node_id: string;
              /**
               * Thumbnail Url
               * @description URL to a thumbnail image of the component set, if available.
               * @default null
               */
              thumbnail_url: string | null;
              /**
               * Updated At
               * Format: date-time
               * @description Timestamp (UTC ISO 8601) when the component set was last updated.
               */
              updated_at: string;
              /**
               * User
               * @description Information about the user associated with this component set (e.g., creator or last modifier).
               */
              user: {
                  /**
                   * Handle
                   * @description The user's display name or handle.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description Unique and stable identifier of the user.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL of the user's profile image.
                   */
                  img_url: string;
              };
          }[];
      };
      /**
       * Status
       * @description HTTP status code of the response, typically indicating success (e.g., 200).
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_JSON tool input.
 */
type FIGMA_GET_FILE_JSON_INPUT = {
  /**
   * Branch Data
   * @description Include branch metadata
   * @default false
   */
  branch_data: boolean;
  /**
   * Depth
   * @description Tree traversal depth (e.g., 2 for pages and top-level children)
   * @default null
   */
  depth: number | null;
  /**
   * File Key
   * @description Figma file key from URL (figma.com/file/{file_key}/...)
   */
  file_key?: string;
  /**
   * Geometry
   * @description Set to "paths" to include vector data
   * @default null
   */
  geometry: string | null;
  /**
   * Ids
   * @description Comma-separated node IDs to fetch specific nodes
   * @default null
   */
  ids: string | null;
  /**
   * Include Raw
   * @description Include raw API response alongside simplified data
   * @default false
   */
  include_raw: boolean;
  /**
   * Plugin Data
   * @description Comma-separated plugin IDs to include plugin data
   * @default null
   */
  plugin_data: string | null;
  /**
   * Simplify
   * @description Automatically simplify response for AI (recommended)
   * @default true
   */
  simplify: boolean;
  /**
   * Version
   * @description Specific version ID; current version if omitted
   * @default null
   */
  version: string | null;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_JSON tool output.
 */
type FIGMA_GET_FILE_JSON_OUTPUT = {
  /**
   * Data
   * @description Simplified Figma file data (or raw if simplify=False)
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
   * Raw Data
   * @description Raw API response (only if include_raw=True)
   * @default null
   */
  raw_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Simplified
   * @description Whether the data was simplified
   */
  simplified?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_STYLES tool input.
 */
type FIGMA_GET_FILE_STYLES_INPUT = {
  /**
   * File Key
   * @description Key of the main Figma file (not a branch) from which to retrieve styles.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_FILE_STYLES tool output.
 */
type FIGMA_GET_FILE_STYLES_OUTPUT = {
  /**
   * Data
   * @description Structured response data.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred; `false` for successful requests.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description Object containing the list of retrieved styles.
       */
      meta: {
          /** Styles */
          styles: {
              /**
               * Created At
               * Format: date-time
               * @description UTC timestamp (ISO 8601) of when the style was created.
               */
              created_at: string;
              /**
               * Description
               * @description Description of the style, typically provided by its publisher.
               */
              description: string;
              /**
               * File Key
               * @description Identifier of the Figma file where this style is defined.
               */
              file_key: string;
              /**
               * Key
               * @description Unique string identifier for the style.
               */
              key: string;
              /**
               * Name
               * @description Display name of the style.
               */
              name: string;
              /**
               * Node Id
               * @description Identifier of the node within the Figma file that defines this style.
               */
              node_id: string;
              /**
               * Sort Position
               * @description User-defined string for sorting the style, often a numerical representation.
               */
              sort_position: string;
              /**
               * Style Type
               * @description Category of the style (e.g., FILL, TEXT).
               * @enum {string}
               */
              style_type: "FILL" | "TEXT" | "EFFECT" | "GRID";
              /**
               * Thumbnail Url
               * @description URL for a thumbnail image of the style, if available.
               * @default null
               */
              thumbnail_url: string | null;
              /**
               * Updated At
               * Format: date-time
               * @description UTC timestamp (ISO 8601) of when the style was last modified.
               */
              updated_at: string;
              /**
               * User
               * @description User who created or last updated the style.
               */
              user: {
                  /**
                   * Handle
                   * @description User's display name or handle.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description Unique identifier for the user.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL of the user's profile image.
                   */
                  img_url: string;
              };
          }[];
      };
      /**
       * Status
       * @description HTTP status code; 200 indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_IMAGE_FILLS tool input.
 */
type FIGMA_GET_IMAGE_FILLS_INPUT = {
  /**
   * File Key
   * @description Identifier of the Figma file or branch from which to retrieve image fill URLs. This can be a file key (obtained from the file's URL) or a branch key.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_IMAGE_FILLS tool output.
 */
type FIGMA_GET_IMAGE_FILLS_OUTPUT = {
  /**
   * Data
   * @description Contains the mapping of image references to their download URLs, along with response status information.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred during the request. For successful requests, this value is `false`.
       * @enum {boolean}
       */
      error: false;
      /** Meta */
      meta: {
          /**
           * Images
           * @description A dictionary mapping image reference IDs to their corresponding downloadable image URLs. Image reference IDs are found in `imageRef` attributes within Paint objects (obtained from the 'GET /v1/files/:key' endpoint). Note: These image URLs expire after 14 days.
           */
          images: {
              [key: string]: string;
          };
      };
      /**
       * Status
       * @description The HTTP status code of the response. For example, 200 for a successful request.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA tool input.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination, from a previous response's `cursor` field; omit for the first page.
   */
  cursor?: string;
  /**
   * End Date
   * @description End date (YYYY-MM-DD) for analytics. Data includes up to end of this date's week. Defaults to latest computed week.
   */
  end_date?: string;
  /**
   * File Key
   * @description Unique identifier (key) of the Figma library file to retrieve analytics data from.
   */
  file_key?: string;
  /**
   * Group By
   * @description Dimension to group analytics: 'component' or 'team'.
   * @enum {string}
   */
  group_by?: "component" | "team";
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) for analytics. Data includes from start of this date's week. Defaults to one year prior.
   */
  start_date?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA tool output.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA_OUTPUT = {
  /**
   * Data
   * @description The structured library analytics data.
   */
  data?: {
      /**
       * Cursor
       * @description The cursor to use to fetch the next page of data. This field is present only if `next_page` is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Next Page
       * @description A boolean indicating whether there is a subsequent page of data available to fetch.
       */
      next_page: boolean;
      /**
       * Rows
       * @description An array of analytics data entries. If `group_by` is 'component', entries will be of type `Row`. If `group_by` is 'team', entries will be of type `Row1`.
       */
      rows: {
          /**
           * Component Key
           * @description The unique and stable identifier of the component.
           */
          component_key: string;
          /**
           * Component Name
           * @description The name of the component.
           */
          component_name: string;
          /**
           * Component Set Key
           * @description The unique and stable identifier of the component set to which this component belongs, if applicable.
           * @default null
           */
          component_set_key: string | null;
          /**
           * Component Set Name
           * @description The name of the component set to which this component belongs, if applicable.
           * @default null
           */
          component_set_name: string | null;
          /**
           * Detachments
           * @description The total number of detach events for this component during the specified week.
           */
          detachments: number;
          /**
           * Insertions
           * @description The total number of insertion events for this component during the specified week.
           */
          insertions: number;
          /**
           * Week
           * @description The start date of the week for this data point, in ISO 8601 format (e.g., '2023-12-13').
           */
          week: string;
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
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA tool input.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA_INPUT = {
  /**
   * Cursor
   * @description Opaque string for pagination to fetch the next page of data, obtained from a previous response.
   * @default null
   */
  cursor: string | null;
  /**
   * File Key
   * @description Unique identifier (key) of the Figma library file.
   */
  file_key?: string;
  /**
   * Group By
   * @description Dimension to group analytics data, affecting the response `rows` structure.
   * @enum {string}
   */
  group_by?: "component" | "file";
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA tool output.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA_OUTPUT = {
  /**
   * Data
   * @description The analytics results, including usage rows and pagination information.
   */
  data?: {
      /**
       * Cursor
       * @description Pagination cursor for the next page; present if `next_page` is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Next Page
       * @description Indicates if more analytics data is available on a subsequent page.
       */
      next_page: boolean;
      /**
       * Rows
       * @description Array of analytics data rows; objects are `Row` or `Row1` based on the request's `group_by` parameter.
       */
      rows: {
          /**
           * Component Key
           * @description Unique and stable identifier of the component.
           */
          component_key: string;
          /**
           * Component Name
           * @description Display name of the component.
           */
          component_name: string;
          /**
           * Component Set Key
           * @description Unique and stable identifier of the component set, if applicable.
           * @default null
           */
          component_set_key: string | null;
          /**
           * Component Set Name
           * @description Name of the component set, if applicable.
           * @default null
           */
          component_set_name: string | null;
          /**
           * Files Using
           * @description Number of distinct files where this component is used.
           */
          files_using: number;
          /**
           * Teams Using
           * @description Number of distinct teams using this component.
           */
          teams_using: number;
          /**
           * Usages
           * @description Total instances of this component used across the organization.
           */
          usages: number;
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
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA tool input.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination, from a previous response's `cursor` field to fetch the next page; omit for first page.
   * @default null
   */
  cursor: string | null;
  /**
   * End Date
   * @description End date for the analytics data range (YYYY-MM-DD). Data includes up to the end of this date's week. Defaults to the most recently computed week if unspecified.
   * @default null
   */
  end_date: string | null;
  /**
   * File Key
   * @description Unique identifier (key) of the Figma library.
   */
  file_key?: string;
  /**
   * Group By
   * @description Dimension by which to group the library style analytics data.
   * @enum {string}
   */
  group_by?: "style" | "team";
  /**
   * Start Date
   * @description Start date for the analytics data range (YYYY-MM-DD). Data includes from the start of this date's week. Defaults to one year prior if unspecified.
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA tool output.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA_OUTPUT = {
  /**
   * Data
   * @description Structured analytics data, including rows, `next_page` flag, and `cursor` for pagination if applicable.
   */
  data?: {
      /**
       * Cursor
       * @description Opaque cursor for fetching the next page, present if `next_page` is true. Use in `cursor` parameter of subsequent requests.
       * @default null
       */
      cursor: string | null;
      /**
       * Next Page
       * @description Indicates if a subsequent page of data can be fetched.
       */
      next_page: boolean;
      /**
       * Rows
       * @description Array of analytics data entries. Structure depends on `group_by`: `Row` for 'style', `Row1` for 'team'.
       */
      rows: {
          /**
           * Detachments
           * @description Total times this style was detached during the week.
           */
          detachments: number;
          /**
           * Insertions
           * @description Total times this style was inserted (applied) during the week.
           */
          insertions: number;
          /**
           * Style Key
           * @description Unique and stable identifier for the style.
           */
          style_key: string;
          /**
           * Style Name
           * @description Human-readable name of the style.
           */
          style_name: string;
          /**
           * Style Type
           * @description Type of the style (e.g., FILL, TEXT).
           */
          style_type: string;
          /**
           * Week
           * @description Week identifier for this data row (typically start date of the week, YYYY-MM-DD).
           */
          week: string;
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
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA tool input.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA_INPUT = {
  /**
   * Cursor
   * @description An opaque string cursor from a previous response, used for paginating through results. If not provided, the first page is returned.
   */
  cursor?: string;
  /**
   * File Key
   * @description The unique key of the Figma library for which to retrieve style usage analytics.
   */
  file_key?: string;
  /**
   * Group By
   * @description Dimension by which to group analytics data, determining the structure of 'rows' in the response.
   * @enum {string}
   */
  group_by?: "file" | "style";
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA tool output.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA_OUTPUT = {
  /**
   * Data
   * @description Contains the structured analytics data, pagination information, and the actual usage rows.
   */
  data?: {
      /**
       * Cursor
       * @description The cursor to use for fetching the next page of data. This field is present only if 'next_page' is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Next Page
       * @description A boolean indicating whether more data is available for a subsequent request.
       */
      next_page: boolean;
      /**
       * Rows
       * @description An array of analytics data, with each object's structure depending on the 'group_by' parameter. If 'group_by' is 'style', items will conform to the 'Row' schema. If 'group_by' is 'file', items will conform to the 'Row1' schema.
       */
      rows: {
          /**
           * Files Using
           * @description The number of distinct files within the organization that use this style.
           */
          files_using: number;
          /**
           * Style Key
           * @description The unique and stable identifier for the style.
           */
          style_key: string;
          /**
           * Style Name
           * @description The display name of the style.
           */
          style_name: string;
          /**
           * Style Type
           * @description The type of the style (e.g., PAINT, TEXT, EFFECT, GRID).
           */
          style_type: string;
          /**
           * Teams Using
           * @description The number of distinct teams within the organization that use this style.
           */
          teams_using: number;
          /**
           * Usages
           * @description The total number of times this style is used across the organization.
           */
          usages: number;
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
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA tool input.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination from a previous response; omit or use null for the first page.
   */
  cursor?: string;
  /**
   * End Date
   * @description End date (YYYY-MM-DD) for the analytics range. Data is aggregated weekly; this date rounds to the nearest week end. Defaults to the latest computed week if unspecified.
   */
  end_date?: string;
  /**
   * File Key
   * @description Unique identifier (key) of the Figma file (library) for which to retrieve variable analytics data.
   */
  file_key?: string;
  /**
   * Group By
   * @description Dimension to group analytics data, which determines the structure of `rows` in the response.
   * @enum {string}
   */
  group_by?: "team" | "variable";
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) for the analytics range. Data is aggregated weekly; this date rounds to the nearest week start. Defaults to one year prior if unspecified.
   */
  start_date?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA tool output.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA_OUTPUT = {
  /**
   * Data
   * @description Structured response with paginated library analytics data for variable actions.
   */
  data?: {
      /**
       * Cursor
       * @description Opaque cursor for the next page; present only if `next_page` is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Next Page
       * @description Indicates if more data is available; if true, a `cursor` is provided for the next page.
       */
      next_page: boolean;
      /**
       * Rows
       * @description Array of analytics data, structured by the `group_by` request parameter: 'variable' for variable-specific metrics, 'team' for team-specific metrics.
       */
      rows: {
          /**
           * Collection Key
           * @description Unique and stable identifier of the variable's collection.
           */
          collection_key: string;
          /**
           * Collection Name
           * @description Name of the variable's collection.
           */
          collection_name: string;
          /**
           * Detachments
           * @description Total detach events for this variable this week.
           */
          detachments: number;
          /**
           * Insertions
           * @description Total insertion events for this variable this week.
           */
          insertions: number;
          /**
           * Variable Key
           * @description Unique and stable identifier of the variable.
           */
          variable_key: string;
          /**
           * Variable Name
           * @description Name of the variable.
           */
          variable_name: string;
          /**
           * Variable Type
           * @description Type of the variable.
           */
          variable_type: string;
          /**
           * Week
           * @description Start date of the week for this data point (YYYY-MM-DD).
           */
          week: string;
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
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA tool input.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination, from a previous response's `cursor` field if `next_page` was true. Omit for the first page.
   */
  cursor?: string;
  /**
   * File Key
   * @description Key of the Figma library file (from its URL) for which to retrieve variable usage analytics.
   */
  file_key?: string;
  /**
   * Group By
   * @description Dimension for grouping analytics data, determining the structure of `rows` in the response ('file' or 'variable').
   * @enum {string}
   */
  group_by?: "file" | "variable";
};

/**
 * Type of FIGMA's FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA tool output.
 */
type FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA_OUTPUT = {
  /**
   * Data
   * @description Paginated analytics data for variable usage from the specified library.
   */
  data?: {
      /**
       * Cursor
       * @description Opaque cursor for the next page; present if `next_page` is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Next Page
       * @description Indicates if more data is available. If true, `cursor` is provided for the next page.
       */
      next_page: boolean;
      /**
       * Rows
       * @description Array of analytics data: `Row` objects if `group_by` was 'variable', or `Row1` objects if `group_by` was 'file'.
       */
      rows: {
          /**
           * Collection Key
           * @description Unique and stable key of the variable's collection.
           */
          collection_key: string;
          /**
           * Collection Name
           * @description Name of the variable's collection.
           */
          collection_name: string;
          /**
           * Files Using
           * @description Total distinct files in the organization using this variable.
           */
          files_using: number;
          /**
           * Teams Using
           * @description Total distinct teams in the organization using this variable.
           */
          teams_using: number;
          /**
           * Usages
           * @description Total times this variable is used across the organization.
           */
          usages: number;
          /**
           * Variable Key
           * @description Unique and stable key of the variable.
           */
          variable_key: string;
          /**
           * Variable Name
           * @description Display name of the variable.
           */
          variable_name: string;
          /**
           * Variable Type
           * @description Type of the variable (e.g., 'BOOLEAN', 'COLOR', 'FLOAT', 'STRING').
           */
          variable_type: string;
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
 * Type of FIGMA's FIGMA_GET_LOCAL_VARIABLES tool input.
 */
type FIGMA_GET_LOCAL_VARIABLES_INPUT = {
  /**
   * File Key
   * @description Key of the Figma file or branch. Can be a standard file key or a branch-specific key (to obtain a branch key, use `GET /v1/files/:key` with the `branch_data` query parameter).
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_LOCAL_VARIABLES tool output.
 */
type FIGMA_GET_LOCAL_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description The structured response data containing the status, error indicator, and the local variables metadata.
   */
  data?: {
      /**
       * Error
       * @description Boolean indicating if an error occurred. `false` for successful requests.
       * @enum {boolean}
       */
      error: false;
      /** Meta */
      meta: {
          /**
           * Variable Collections
           * @description A dictionary where keys are variable collection IDs (strings) and values are the corresponding `VariableCollections` objects.
           */
          variableCollections: {
              [key: string]: {
                  /**
                   * Defaultmodeid
                   * @description The identifier of the mode that is considered the default for this variable collection.
                   */
                  defaultModeId: string;
                  /**
                   * Hiddenfrompublishing
                   * @description Indicates if this entire variable collection is hidden when publishing the current file as a library.
                   */
                  hiddenFromPublishing: boolean;
                  /**
                   * Id
                   * @description A unique string identifier for this variable collection.
                   */
                  id: string;
                  /**
                   * Key
                   * @description The unique, machine-readable key for this variable collection.
                   */
                  key: string;
                  /**
                   * Modes
                   * @description A list of `Mode` objects defined within this variable collection.
                   */
                  modes: {
                      /**
                       * Modeid
                       * @description A unique string identifier for this mode within its variable collection.
                       */
                      modeId: string;
                      /**
                       * Name
                       * @description The user-facing display name of this mode (e.g., 'Light', 'Dark').
                       */
                      name: string;
                  }[];
                  /**
                   * Name
                   * @description The user-facing display name of this variable collection.
                   */
                  name: string;
                  /**
                   * Remote
                   * @description Indicates if this variable collection is remote (i.e., imported from another Figma library file).
                   */
                  remote: boolean;
                  /**
                   * Variableids
                   * @description An ordered list of string identifiers for variables belonging to this collection. The order generally mirrors the Figma Design UI but does not account for variable groups, so it might not precisely match the visual ordering and grouping.
                   */
                  variableIds: string[];
              };
          };
          /**
           * Variables
           * @description A dictionary where keys are variable IDs (strings) and values are the corresponding `Variables` objects containing their full details.
           */
          variables: {
              [key: string]: {
                  /**
                   * CodeSyntax
                   * @description An object providing platform-specific code representations for the variable (e.g., for Web, Android, iOS). All platform fields are optional.
                   */
                  codeSyntax: {
                      /**
                       * Android
                       * @default null
                       */
                      ANDROID: string | null;
                      /**
                       * Web
                       * @default null
                       */
                      WEB: string | null;
                      /**
                       * Ios
                       * @default null
                       */
                      iOS: string | null;
                  };
                  /**
                   * Deletedbutreferenced
                   * @description Optional. If `true`, signifies that the variable was deleted within the Figma editor, yet the document might still contain references to it. Such references can occur through bound values or variable aliases. Defaults to `false` if not present.
                   * @default false
                   */
                  deletedButReferenced: boolean | null;
                  /**
                   * Description
                   * @description A user-provided description for the variable.
                   */
                  description: string;
                  /**
                   * Hiddenfrompublishing
                   * @description Indicates if this variable is hidden when publishing the current file as a library. For a variable to be publishable, both the variable itself and its parent `VariableCollection` must have `hiddenFromPublishing` set to `false`.
                   */
                  hiddenFromPublishing: boolean;
                  /**
                   * Id
                   * @description A unique string identifier for this variable.
                   */
                  id: string;
                  /**
                   * Key
                   * @description The unique, machine-readable key for this variable, often used for programmatic access or referencing.
                   */
                  key: string;
                  /**
                   * Name
                   * @description The user-facing display name of this variable.
                   */
                  name: string;
                  /**
                   * Remote
                   * @description Indicates if this variable is a remote variable (i.e., imported from a library).
                   */
                  remote: boolean;
                  /**
                   * ResolvedType
                   * @description The resolved data type of the variable, such as BOOLEAN, FLOAT, STRING, or COLOR.
                   * @enum {string}
                   */
                  resolvedType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR";
                  /**
                   * Scopes
                   * @description A list of scopes defining where this variable is displayed in the Figma UI's variable picker (e.g., `TEXT_CONTENT`, `CORNER_RADIUS`). This setting controls visibility in the UI picker only and does not prevent the variable from being bound in other scopes programmatically via the API.
                   */
                  scopes: ("ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE_COLOR" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_WEIGHT" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS")[];
                  /**
                   * Valuesbymode
                   * @description A dictionary mapping mode IDs to their corresponding values for this variable. The value's structure depends on the `resolvedType` (e.g., boolean, float, string, RGBA color object, or variable alias object).
                   */
                  valuesByMode: {
                      [key: string]: boolean | number | string | {
                          /**
                           * A
                           * @description Alpha (opacity) channel value, normalized between 0.0 and 1.0.
                           */
                          a: number;
                          /**
                           * B
                           * @description Blue color channel value, normalized between 0.0 and 1.0.
                           */
                          b: number;
                          /**
                           * G
                           * @description Green color channel value, normalized between 0.0 and 1.0.
                           */
                          g: number;
                          /**
                           * R
                           * @description Red color channel value, normalized between 0.0 and 1.0.
                           */
                          r: number;
                      } | {
                          /**
                           * Id
                           * @description The ID of the variable to which the current variable is aliased. This aliased variable can be either local or remote. Details for both types can be retrieved using the `GET /v1/files/:file_key/variables/local` endpoint (this same endpoint).
                           */
                          id: string;
                          /**
                           * Type
                           * @enum {string}
                           */
                          type: "VARIABLE_ALIAS";
                      };
                  };
                  /**
                   * Variablecollectionid
                   * @description The unique identifier of the `VariableCollection` to which this variable belongs.
                   */
                  variableCollectionId: string;
              };
          };
      };
      /**
       * Status
       * @description The HTTP status code of the response, e.g., 200 for success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_PAYMENTS tool input.
 */
type FIGMA_GET_PAYMENTS_INPUT = {
  /**
   * Community File Id
   * @description ID of the Community file. Obtain from its Community page URL (number after 'file/'). If `user_id` is provided, specify exactly one of `community_file_id`, `plugin_id`, or `widget_id`.
   */
  community_file_id?: number;
  /**
   * Plugin Id
   * @description ID of the plugin. Obtain from its manifest or Community page URL (number after 'plugin/'). If `user_id` is provided, specify exactly one of `community_file_id`, `plugin_id`, or `widget_id`.
   */
  plugin_id?: number;
  /**
   * Plugin Payment Token
   * @description Short-lived auth token from `getPluginPaymentTokenAsync` (Figma Plugin Payments API). See Figma docs 'Calling the Payments REST API...'. If provided, `user_id` and resource IDs are typically not needed.
   */
  plugin_payment_token?: string;
  /**
   * User Id
   * @description ID of the user whose payment information is sought. Obtain via OAuth2 with Figma REST API. Required if `plugin_payment_token` is not provided.
   */
  user_id?: number;
  /**
   * Widget Id
   * @description ID of the widget. Obtain from its manifest or Community page URL (number after 'widget/'). If `user_id` is provided, specify exactly one of `community_file_id`, `plugin_id`, or `widget_id`.
   */
  widget_id?: number;
};

/**
 * Type of FIGMA's FIGMA_GET_PAYMENTS tool output.
 */
type FIGMA_GET_PAYMENTS_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed payment information for the user and resource, including status, error, and metadata.
   */
  data?: {
      /**
       * Error
       * @description For successful requests, this value is always `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description An object describing a user's payment information for a plugin, widget, or Community file.
       */
      meta: {
          /**
           * Date Of Purchase
           * Format: date-time
           * @description The UTC ISO 8601 timestamp indicating when the user purchased the resource. No value is given if the user has never purchased the resource.
           *
           *     Note that a value will still be returned if the user had purchased the resource, but no longer has active access to it (e.g. purchase refunded, subscription ended).
           * @default null
           */
          date_of_purchase: string | null;
          /**
           * Payment Status
           * @description An object describing the user's payment status.
           */
          payment_status: {
              /**
               * Type
               * @description The current payment status of the user on the resource, as a string enum:
               *
               *     - `UNPAID`: user has not paid for the resource
               *     - `PAID`: user has an active purchase on the resource
               *     - `TRIAL`: user is in the trial period for a subscription resource
               * @default null
               * @enum {string|null}
               */
              type: "UNPAID" | "PAID" | "TRIAL" | null;
          };
          /**
           * Resource Id
           * @description ID of the queried plugin, widget, or Community file. Can be used for response validation.
           */
          resource_id: string;
          /**
           * Resource Type
           * @description The type of the resource.
           * @enum {string}
           */
          resource_type: "PLUGIN" | "WIDGET" | "COMMUNITY_FILE";
          /**
           * User Id
           * @description ID of the user whose payment information was queried. Can be used for response validation.
           */
          user_id: string;
      };
      /**
       * Status
       * @description The response status code.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_PROJECTS_IN_A_TEAM tool input.
 */
type FIGMA_GET_PROJECTS_IN_A_TEAM_INPUT = {
  /**
   * Team Id
   * @description Identifier of the Figma team from which to list projects. Note: The `team_id` cannot be programmatically obtained solely from a user token. To find a `team_id`, navigate to a team page you are a member of in Figma. The `team_id` will be present in the URL, typically formatted as `https://www.figma.com/files/team/YOUR_TEAM_ID/Your_Team_Name`.
   */
  team_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_PROJECTS_IN_A_TEAM tool output.
 */
type FIGMA_GET_PROJECTS_IN_A_TEAM_OUTPUT = {
  /**
   * Data
   * @description Contains the team's name and its list of associated projects.
   */
  data?: {
      /**
       * Name
       * @description The name of the team.
       */
      name: string;
      /**
       * Projects
       * @description A list of projects associated with the team.
       */
      projects: {
          /**
           * Id
           * @description The unique identifier for the project.
           */
          id: string;
          /**
           * Name
           * @description The name of the project.
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
 * Type of FIGMA's FIGMA_GET_PUBLISHED_VARIABLES tool input.
 */
type FIGMA_GET_PUBLISHED_VARIABLES_INPUT = {
  /**
   * File Key
   * @description The key of the Figma file from which to retrieve published variables. This must be a main file's key, not a branch key, as publishing from branches is not supported.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_PUBLISHED_VARIABLES tool output.
 */
type FIGMA_GET_PUBLISHED_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description The structured response data containing status, error information, and the metadata of published variables.
   */
  data?: {
      /**
       * Error
       * @description Boolean flag indicating if an error occurred with the request. For successful operations, this value is `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description Contains the core data of the response, including dictionaries of published variables and variable collections.
       */
      meta: {
          /**
           * Variable Collections
           * @description A dictionary where keys are variable collection IDs (strings) and values are the corresponding detailed variable collection objects.
           */
          variableCollections: {
              [key: string]: {
                  /**
                   * Id
                   * @description The unique identifier of this variable collection, stable within the file where it is created.
                   */
                  id: string;
                  /**
                   * Key
                   * @description The stable, unique key of this variable collection, generated by Figma upon creation.
                   */
                  key: string;
                  /**
                   * Name
                   * @description The user-defined name of this variable collection.
                   */
                  name: string;
                  /**
                   * Subscribed Id
                   * @description The ID used by subscribing files to reference this variable collection. This ID changes each time the collection (or any variable within it) is modified and republished.
                   */
                  subscribed_id: string;
                  /**
                   * Updatedat
                   * Format: date-time
                   * @description The UTC ISO 8601 timestamp indicating when this variable collection was last published. This timestamp updates if any variable within the collection is modified and subsequently published.
                   */
                  updatedAt: string;
              };
          };
          /**
           * Variables
           * @description A dictionary where keys are variable IDs (strings) and values are the corresponding detailed variable objects.
           */
          variables: {
              [key: string]: {
                  /**
                   * Id
                   * @description The unique identifier of this variable, stable within the file where it is created.
                   */
                  id: string;
                  /**
                   * Key
                   * @description The stable, unique key of this variable, generated by Figma upon creation.
                   */
                  key: string;
                  /**
                   * Name
                   * @description The user-defined name of this variable.
                   */
                  name: string;
                  /**
                   * ResolvedDataType
                   * @description The resolved data type of the variable, such as `BOOLEAN`, `FLOAT`, `STRING`, or `COLOR`.
                   * @enum {string}
                   */
                  resolvedDataType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR";
                  /**
                   * Subscribed Id
                   * @description The ID used by subscribing files to reference this variable. This ID changes each time the variable is modified and republished.
                   */
                  subscribed_id: string;
                  /**
                   * Updatedat
                   * Format: date-time
                   * @description The UTC ISO 8601 timestamp indicating when this variable was last modified and published.
                   */
                  updatedAt: string;
                  /**
                   * Variablecollectionid
                   * @description The identifier of the variable collection to which this variable belongs.
                   */
                  variableCollectionId: string;
              };
          };
      };
      /**
       * Status
       * @description The HTTP status code of the response. For this operation, a successful response is indicated by status 200.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_REACTIONS_FOR_A_COMMENT tool input.
 */
type FIGMA_GET_REACTIONS_FOR_A_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description Identifier of the comment.
   */
  comment_id?: string;
  /**
   * Cursor
   * @description Pagination cursor from `next_page` of a previous response. Omit or use null for the first page.
   */
  cursor?: string;
  /**
   * File Key
   * @description Key for the Figma file or branch. Can be a file key (from URL) or a branch key. To get a branch key, use `GET /v1/files/:key` with the `branch_data` query parameter.
   */
  file_key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_REACTIONS_FOR_A_COMMENT tool output.
 */
type FIGMA_GET_REACTIONS_FOR_A_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Contains the list of reactions and pagination details.
   */
  data?: {
      /**
       * Pagination
       * @description Pagination URLs (`prev_page`, `next_page`) for navigating results.
       */
      pagination: {
          /**
           * Next Page
           * @description URL for the next page of reactions, if any.
           * @default null
           */
          next_page: string | null;
          /**
           * Prev Page
           * @description URL for the previous page of reactions, if any.
           * @default null
           */
          prev_page: string | null;
      };
      /**
       * Reactions
       * @description List of reaction objects.
       */
      reactions: {
          /**
           * Created At
           * Format: date-time
           * @description UTC ISO 8601 timestamp of reaction creation.
           */
          created_at: string;
          /**
           * Emoji
           * @description Emoji shortcode (e.g., `:heart:`, `:+1::skin-tone-2:`). See full list of accepted shortcodes at https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json.
           */
          emoji: string;
          /**
           * User
           * @description User who added the reaction.
           */
          user: {
              /**
               * Handle
               * @description User's display name.
               */
              handle: string;
              /**
               * Id
               * @description User's unique identifier.
               */
              id: string;
              /**
               * Img Url
               * @description User's profile image URL.
               */
              img_url: string;
          };
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
 * Type of FIGMA's FIGMA_GET_STYLE tool input.
 */
type FIGMA_GET_STYLE_INPUT = {
  /**
   * Key
   * @description The unique identifier (key) of the style to retrieve. Style keys are typically prefixed with 'S:'.
   */
  key?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_STYLE tool output.
 */
type FIGMA_GET_STYLE_OUTPUT = {
  /**
   * Data
   * @description The main data payload of the response, encapsulating the style's status, error state, and metadata.
   */
  data?: {
      /**
       * Error
       * @description Boolean flag indicating if an error occurred. `false` (from the Error enum) signifies a successful request.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description An object containing the detailed metadata properties for the requested style.
       */
      meta: {
          /**
           * Created At
           * Format: date-time
           * @description The date and time (in UTC ISO 8601 format) when the style was initially created.
           */
          created_at: string;
          /**
           * Description
           * @description A textual description of the style, often provided by the person who published it.
           */
          description: string;
          /**
           * File Key
           * @description The unique identifier of the Figma file where this style is defined.
           */
          file_key: string;
          /**
           * Key
           * @description The unique identifier (key) of this style. This typically starts with 'S:'.
           */
          key: string;
          /**
           * Name
           * @description The human-readable name of the style as it appears in the Figma UI.
           */
          name: string;
          /**
           * Node Id
           * @description Identifier of the specific node within the Figma file from which this style originates.
           */
          node_id: string;
          /**
           * Sort Position
           * @description A user-defined string that can be used to order styles. Note that Figma itself might not use this field for internal sorting; it's often intended for client-side sorting logic.
           */
          sort_position: string;
          /**
           * Style Type
           * @description Specifies the type of the style, such as FILL, TEXT, EFFECT, or GRID.
           * @enum {string}
           */
          style_type: "FILL" | "TEXT" | "EFFECT" | "GRID";
          /**
           * Thumbnail Url
           * @description Optional URL for a thumbnail image preview of the style. This can be null if no thumbnail is available.
           * @default null
           */
          thumbnail_url: string | null;
          /**
           * Updated At
           * Format: date-time
           * @description The date and time (in UTC ISO 8601 format) when the style was last modified.
           */
          updated_at: string;
          /**
           * User
           * @description Information about the Figma user primarily associated with this style (e.g., its creator or last editor).
           */
          user: {
              /**
               * Handle
               * @description The user's display name or handle in Figma.
               */
              handle: string;
              /**
               * Id
               * @description Unique, stable identifier for the user within Figma.
               */
              id: string;
              /**
               * Img Url
               * @description URL pointing to the user's profile image.
               */
              img_url: string;
          };
      };
      /**
       * Status
       * @description HTTP status code of the API response. A value of 200 (from the Status enum) indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_COMPONENTS tool input.
 */
type FIGMA_GET_TEAM_COMPONENTS_INPUT = {
  /**
   * After
   * @description Opaque cursor indicating the point after which to retrieve components. Used for pagination. Exclusive with the `before` parameter. The cursor value is an internally tracked integer that doesn't correspond to any specific Figma IDs.
   */
  after?: number;
  /**
   * Before
   * @description Opaque cursor indicating the point before which to retrieve components. Used for pagination. Exclusive with the `after` parameter. The cursor value is an internally tracked integer that doesn't correspond to any specific Figma IDs.
   */
  before?: number;
  /**
   * Page Size
   * @description Number of components to return per page.
   * @default 30
   */
  page_size: number;
  /**
   * Team Id
   * @description Identifier of the Figma team from which to retrieve published components.
   */
  team_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_COMPONENTS tool output.
 */
type FIGMA_GET_TEAM_COMPONENTS_OUTPUT = {
  /**
   * Data
   * @description The main data payload of the response, including status, error indicator, and the retrieved components along with pagination cursors.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred. For successful requests, this value is `false`.
       * @enum {boolean}
       */
      error: false;
      /** Meta */
      meta: {
          /** Components */
          components: {
              /**
               * ContainingFrame
               * @description Details about the frame in which the component is located within the library, if applicable.
               * @default null
               */
              containing_frame: {
                  /**
                   * Background Color
                   * @description The background color of the frame node, if set.
                   * @default null
                   */
                  backgroundColor: string | null;
                  /**
                   * ContainingComponentSet
                   * @description Details of the component set that contains this frame node, if applicable.
                   * @default null
                   */
                  containingComponentSet: {
                      /**
                       * Name
                       * @description The name assigned to the component set node.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description The unique identifier of the component set node.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * ContainingStateGroup
                   * @description Deprecated. Use `containingComponentSet` for more accurate component structure information.
                   * @default null
                   */
                  containingStateGroup: {
                      /**
                       * Name
                       * @description The name assigned to the state group node.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description The unique identifier of the state group node.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * Name
                   * @description The name of the frame node.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Node Id
                   * @description The unique identifier of the frame node within the Figma file.
                   * @default null
                   */
                  nodeId: string | null;
                  /**
                   * Page Id
                   * @description The unique identifier of the page that contains this frame node.
                   */
                  pageId: string;
                  /**
                   * Page Name
                   * @description The name of the page that contains this frame node.
                   */
                  pageName: string;
              } | null;
              /**
               * Created At
               * Format: date-time
               * @description The timestamp (UTC ISO 8601 format) indicating when the component was created.
               */
              created_at: string;
              /**
               * Description
               * @description A description of the component, typically provided by its publisher.
               */
              description: string;
              /**
               * File Key
               * @description The unique identifier of the Figma file where this component is defined.
               */
              file_key: string;
              /**
               * Key
               * @description The unique, globally_identifiable key for the component.
               */
              key: string;
              /**
               * Name
               * @description The name of the component as it appears in Figma.
               */
              name: string;
              /**
               * Node Id
               * @description The unique identifier of the component node within its Figma file.
               */
              node_id: string;
              /**
               * Thumbnail Url
               * @description URL for a thumbnail image preview of the component. May not always be present.
               * @default null
               */
              thumbnail_url: string | null;
              /**
               * Updated At
               * Format: date-time
               * @description The timestamp (UTC ISO 8601 format) indicating when the component was last updated.
               */
              updated_at: string;
              /**
               * User
               * @description Information about the Figma user who created or last updated the component.
               */
              user: {
                  /**
                   * Handle
                   * @description The user's Figma display name or handle.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description Unique, stable identifier for the user.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL for the user's profile image.
                   */
                  img_url: string;
              };
          }[];
          /**
           * Cursor
           * @description Contains opaque cursors for pagination, allowing navigation to the next or previous set of components.
           * @default null
           */
          cursor: {
              /**
               * After
               * @default null
               */
              after: number | null;
              /**
               * Before
               * @default null
               */
              before: number | null;
          } | null;
      };
      /**
       * Status
       * @description HTTP status code of the response. A value of 200 indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_COMPONENT_SETS tool input.
 */
type FIGMA_GET_TEAM_COMPONENT_SETS_INPUT = {
  /**
   * After
   * @description Cursor for pagination, indicating the point after which to retrieve component sets. Exclusive with the 'before' parameter. The cursor value is an internally tracked integer and does not correspond to any specific Figma IDs.
   */
  after?: number;
  /**
   * Before
   * @description Cursor for pagination, indicating the point before which to retrieve component sets. Exclusive with the 'after' parameter. The cursor value is an internally tracked integer and does not correspond to any specific Figma IDs.
   */
  before?: number;
  /**
   * Page Size
   * @description Number of component sets to return in a single page.
   * @default 30
   */
  page_size: number;
  /**
   * Team Id
   * @description The unique identifier of the team from which to list component sets.
   */
  team_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_COMPONENT_SETS tool output.
 */
type FIGMA_GET_TEAM_COMPONENT_SETS_OUTPUT = {
  /**
   * Data
   * @description The structured response from the API, containing the status, error indicator, and the metadata which includes component sets and pagination cursors.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred with the request. For successful requests, this value is always `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description The main data payload of the response, including the list of component sets (`component_sets`) and pagination cursors (`cursor`).
       */
      meta: {
          /**
           * Component Sets
           * @description A list of `ComponentSet` objects detailing the retrieved component sets.
           */
          component_sets: {
              /**
               * ContainingFrame
               * @description Optional. Information about the frame that contains a component from this set, providing contextual placement data.
               * @default null
               */
              containing_frame: {
                  /**
                   * Background Color
                   * @description Optional. The background color of the frame, typically in a hex string format (e.g., '#FFFFFF').
                   * @default null
                   */
                  backgroundColor: string | null;
                  /**
                   * ContainingComponentSet
                   * @description Optional. Details of the component set node that contains this frame, if applicable.
                   * @default null
                   */
                  containingComponentSet: {
                      /**
                       * Name
                       * @description Optional. The name assigned to the component set node.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description Optional. The unique identifier of the component set node.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * ContainingStateGroup
                   * @description Deprecated - Use `containingComponentSet` instead for more accurate information.
                   * @default null
                   */
                  containingStateGroup: {
                      /**
                       * Name
                       * @description Optional. The name assigned to the state group node.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Node Id
                       * @description Optional. The unique identifier of the state group node.
                       * @default null
                       */
                      nodeId: string | null;
                  } | null;
                  /**
                   * Name
                   * @description Optional. The name of the frame node.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Node Id
                   * @description Optional. The unique identifier of the frame node within the Figma file.
                   * @default null
                   */
                  nodeId: string | null;
                  /**
                   * Page Id
                   * @description The unique identifier of the page that contains this frame node.
                   */
                  pageId: string;
                  /**
                   * Page Name
                   * @description The name of the page that contains this frame node.
                   */
                  pageName: string;
              } | null;
              /**
               * Created At
               * Format: date-time
               * @description The date and time (UTC ISO 8601 format) when the component set was initially created.
               */
              created_at: string;
              /**
               * Description
               * @description A textual description of the component set, as provided by its publisher.
               */
              description: string;
              /**
               * File Key
               * @description The unique key of the Figma file that contains this component set.
               */
              file_key: string;
              /**
               * Key
               * @description The unique key acting as an identifier for the component set.
               */
              key: string;
              /**
               * Name
               * @description The human-readable name of the component set.
               */
              name: string;
              /**
               * Node Id
               * @description The unique identifier of the component set's node within the Figma file structure.
               */
              node_id: string;
              /**
               * Thumbnail Url
               * @description Optional. URL for a thumbnail image preview of the component set.
               * @default null
               */
              thumbnail_url: string | null;
              /**
               * Updated At
               * Format: date-time
               * @description The date and time (UTC ISO 8601 format) when the component set was last modified.
               */
              updated_at: string;
              /**
               * User
               * @description Information about the user associated with (e.g., creator of) the component set.
               */
              user: {
                  /**
                   * Handle
                   * @description The user's display name or handle.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description Unique and stable identifier for the user.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL pointing to the user's profile image.
                   */
                  img_url: string;
              };
          }[];
          /**
           * Cursor
           * @description Pagination cursors. Contains `before` and `after` cursors for navigating through the list of component sets. These are internally tracked integers.
           * @default null
           */
          cursor: {
              /**
               * After
               * @description Optional. Cursor for paginating to the next page of results. The cursor value is an internally tracked integer.
               * @default null
               */
              after: number | null;
              /**
               * Before
               * @description Optional. Cursor for paginating to the previous page of results. The cursor value is an internally tracked integer.
               * @default null
               */
              before: number | null;
          } | null;
      };
      /**
       * Status
       * @description The HTTP status code of the response. A value of 200 typically indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_STYLES tool input.
 */
type FIGMA_GET_TEAM_STYLES_INPUT = {
  /**
   * After
   * @description Opaque integer cursor to retrieve styles after this point; use `cursor.after` from a previous response. Exclusive with `before`.
   */
  after?: number;
  /**
   * Before
   * @description Opaque integer cursor to retrieve styles before this point; use `cursor.before` from a previous response. Exclusive with `after`.
   */
  before?: number;
  /**
   * Page Size
   * @description Number of style items to return per page.
   * @default 30
   */
  page_size: number;
  /**
   * Team Id
   * @description Identifier of the team to retrieve published styles from.
   */
  team_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_STYLES tool output.
 */
type FIGMA_GET_TEAM_STYLES_OUTPUT = {
  /**
   * Data
   * @description The main container for the response, including status, error indication, and the metadata which holds the styles and pagination cursors.
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred. For successful requests, this value is `false`.
       * @enum {boolean}
       */
      error: false;
      /**
       * Meta
       * @description Contains the core response data, including the list of styles and pagination cursors.
       */
      meta: {
          /**
           * Cursor
           * @description Pagination cursors for navigating the list of styles.
           * @default null
           */
          cursor: {
              /**
               * After
               * @description Opaque cursor value for the `after` parameter to retrieve the next page of results. Null if no next page.
               * @default null
               */
              after: number | null;
              /**
               * Before
               * @description Opaque cursor value for the `before` parameter to retrieve the previous page of results. Null if no previous page.
               * @default null
               */
              before: number | null;
          } | null;
          /**
           * Styles
           * @description List of style objects retrieved for the current page.
           */
          styles: {
              /**
               * Created At
               * Format: date-time
               * @description Timestamp in UTC ISO 8601 format indicating when the style was created.
               */
              created_at: string;
              /**
               * Description
               * @description Description of the style, as provided by its publisher.
               */
              description: string;
              /**
               * File Key
               * @description Identifier of the Figma file where this style is defined and published.
               */
              file_key: string;
              /**
               * Key
               * @description The unique identifier (key) for the style.
               */
              key: string;
              /**
               * Name
               * @description Display name of the style.
               */
              name: string;
              /**
               * Node Id
               * @description Identifier of the specific node within the Figma file that defines this style.
               */
              node_id: string;
              /**
               * Sort Position
               * @description A user-specified string, often numerical, used for ordering or sorting styles.
               */
              sort_position: string;
              /**
               * Style Type
               * @description Type of the style, indicating what properties it defines (e.g., FILL, TEXT, EFFECT, GRID).
               * @enum {string}
               */
              style_type: "FILL" | "TEXT" | "EFFECT" | "GRID";
              /**
               * Thumbnail Url
               * @description URL for a thumbnail image preview of the style, if available.
               * @default null
               */
              thumbnail_url: string | null;
              /**
               * Updated At
               * Format: date-time
               * @description Timestamp in UTC ISO 8601 format indicating when the style was last updated.
               */
              updated_at: string;
              /**
               * User
               * @description Information about the user who created or last updated the style.
               */
              user: {
                  /**
                   * Handle
                   * @description Display name or handle of the user.
                   */
                  handle: string;
                  /**
                   * Id
                   * @description Unique and stable identifier of the user.
                   */
                  id: string;
                  /**
                   * Img Url
                   * @description URL of the user's profile image.
                   */
                  img_url: string;
              };
          }[];
      };
      /**
       * Status
       * @description HTTP status code of the response. A value of 200 indicates success.
       * @enum {integer}
       */
      status: 200;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_WEBHOOKS tool input.
 */
type FIGMA_GET_TEAM_WEBHOOKS_INPUT = {
  /**
   * Team Id
   * @description Identifier of the team for which to retrieve webhooks.
   */
  team_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_TEAM_WEBHOOKS tool output.
 */
type FIGMA_GET_TEAM_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description An object containing the list of webhooks for the team.
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook objects for the specified team.
       */
      webhooks: {
          /**
           * Client Id
           * @description Client ID of the OAuth app that created this webhook; null if not created by an OAuth app.
           * @default null
           */
          client_id: string | null;
          /**
           * Description
           * @description Optional user-defined description for the webhook (max 140 characters).
           * @default null
           */
          description: string | null;
          /**
           * Endpoint
           * @description URL endpoint that Figma POSTs to when a subscribed event occurs.
           */
          endpoint: string;
          /**
           * Event Type
           * @description Event triggering webhook. Valid types: `PING`, `FILE_UPDATE`, `FILE_VERSION_UPDATE`, `FILE_DELETE`, `LIBRARY_PUBLISH`, `FILE_COMMENT`.
           * @enum {string}
           */
          event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT";
          /**
           * Id
           * @description Identifier of the webhook.
           */
          id: string;
          /**
           * Passcode
           * @description Secret passcode in the `X-Figma-Signature` header, used to verify Figma request origin.
           */
          passcode: string;
          /**
           * Status
           * @description Operational status: `ACTIVE` (healthy, receiving events) or `PAUSED` (disabled, no events).
           * @enum {string}
           */
          status: "ACTIVE" | "PAUSED";
          /**
           * Team Id
           * @description Identifier of the team that owns this webhook.
           */
          team_id: string;
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
 * Type of FIGMA's FIGMA_GET_VERSIONS_OF_A_FILE tool input.
 */
type FIGMA_GET_VERSIONS_OF_A_FILE_INPUT = {
  /**
   * After
   * @description Version ID for pagination; retrieves versions created strictly after this ID.
   */
  after?: number;
  /**
   * Before
   * @description Version ID for pagination; retrieves versions created strictly before this ID.
   */
  before?: number;
  /**
   * File Key
   * @description The key of the file or branch from which to retrieve the version history. For branch keys, use `GET /v1/files/:key` with the `branch_data` query param to obtain it.
   */
  file_key?: string;
  /**
   * Page Size
   * @description Number of version items per page. The API defaults to 30 if this parameter is not sent.
   */
  page_size?: number;
};

/**
 * Type of FIGMA's FIGMA_GET_VERSIONS_OF_A_FILE tool output.
 */
type FIGMA_GET_VERSIONS_OF_A_FILE_OUTPUT = {
  /**
   * Data
   * @description The main response data, containing the list of file versions and pagination information.
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details with URLs for next/previous pages.
       */
      pagination: {
          /**
           * Next Page
           * @description URL to retrieve the next page of version results.
           * @default null
           */
          next_page: string | null;
          /**
           * Prev Page
           * @description URL to retrieve the previous page of version results.
           * @default null
           */
          prev_page: string | null;
      };
      /**
       * Versions
       * @description A list containing the file version objects.
       */
      versions: {
          /**
           * Created At
           * Format: date-time
           * @description The timestamp in UTC ISO 8601 format indicating when this version was created.
           */
          created_at: string;
          /**
           * Description
           * @description Description entered in the Figma editor for this version.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier for this specific file version.
           */
          id: string;
          /**
           * Label
           * @description Label assigned in the Figma editor for this version.
           * @default null
           */
          label: string | null;
          /**
           * Thumbnail Url
           * @description URL for a thumbnail image of this file version.
           * @default null
           */
          thumbnail_url: string | null;
          /**
           * User
           * @description Details of the user who created this version.
           */
          user: {
              /**
               * Handle
               * @description The display name or handle of the user.
               */
              handle: string;
              /**
               * Id
               * @description The unique and stable identifier for the user.
               */
              id: string;
              /**
               * Img Url
               * @description The URL for the user's profile image.
               */
              img_url: string;
          };
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
 * Type of FIGMA's FIGMA_GET_WEBHOOK_REQUESTS tool input.
 */
type FIGMA_GET_WEBHOOK_REQUESTS_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the Figma webhook subscription for which to retrieve past event requests. This refers to the ID of the webhook itself, not an individual event.
   */
  webhook_id?: string;
};

/**
 * Type of FIGMA's FIGMA_GET_WEBHOOK_REQUESTS tool output.
 */
type FIGMA_GET_WEBHOOK_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of webhook requests detailing past event deliveries for the specified webhook.
   */
  data?: {
      /**
       * Requests
       * @description A list of webhook request objects, each detailing a past delivery attempt for the specified webhook.
       */
      requests: {
          /**
           * Error Msg
           * @description An error message if the webhook request failed or an error occurred during processing. `null` if the request was successful.
           * @default null
           */
          error_msg: string | null;
          /**
           * Request Info
           * @description Detailed information about the webhook request sent by Figma to the subscriber's endpoint.
           */
          request_info: {
              /**
               * Endpoint
               * @description The URL of the subscriber's endpoint to which Figma sent the webhook notification.
               */
              endpoint: string;
              /**
               * Id
               * @description The unique identifier for this specific webhook request event (delivery attempt).
               */
              id: string;
              /**
               * Payload
               * @description The JSON payload delivered to the subscriber's endpoint for this webhook event.
               */
              payload: {
                  [key: string]: unknown;
              };
              /**
               * Sent At
               * Format: date-time
               * @description The UTC timestamp (ISO 8601 format) indicating when Figma sent the webhook request.
               */
              sent_at: string;
          };
          /**
           * ResponseInfo
           * @description Detailed information about the response received by Figma from the subscriber's endpoint, if available.
           * @default null
           */
          response_info: {
              /**
               * Received At
               * Format: date-time
               * @description The UTC timestamp (ISO 8601 format) indicating when Figma received the response from the subscriber's endpoint.
               */
              received_at: string;
              /**
               * Status
               * @description The HTTP status code returned by the subscriber's endpoint in response to the webhook delivery.
               */
              status: string;
          } | null;
          /**
           * Webhook Id
           * @description The unique identifier of the Figma webhook subscription that generated this request.
           */
          webhook_id: string;
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
 * Type of FIGMA's FIGMA_RENDER_IMAGES_OF_FILE_NODES tool input.
 */
type FIGMA_RENDER_IMAGES_OF_FILE_NODES_INPUT = {
  /**
   * Contents Only
   * @description If true, excludes content overlapping node boundaries. If false, includes overlapping content (may increase processing time).
   * @default true
   */
  contents_only: boolean;
  /**
   * File Key
   * @description Key of the Figma file or branch. To obtain a branch key, use the `GET /v1/files/:key` endpoint with the `branch_data=true` query parameter.
   */
  file_key?: string;
  /**
   * Format
   * @description Desired output format for the rendered images.
   * @default png
   * @enum {string}
   */
  format: "jpg" | "pdf" | "png" | "svg";
  /**
   * Ids
   * @description Comma-separated list of node IDs to render as images (e.g., '1:2,1:3,1:4').
   */
  ids?: string;
  /**
   * Scale
   * @description Image scaling factor, a number between 0.01 and 4 (e.g., 2 renders at twice original size).
   */
  scale?: number;
  /**
   * Svg Include Id
   * @description (SVG format only) If true, includes `id` attributes (using layer name) for all SVG elements.
   * @default false
   */
  svg_include_id: boolean;
  /**
   * Svg Include Node Id
   * @description (SVG format only) If true, includes `data-node-id` attribute (with node ID) for all SVG elements.
   * @default false
   */
  svg_include_node_id: boolean;
  /**
   * Svg Outline Text
   * @description (SVG format only) If true, text is rendered as vector paths (outlines) for visual fidelity. If false, text is rendered as `<text>` elements (selectable, appearance may vary).
   * @default true
   */
  svg_outline_text: boolean;
  /**
   * Svg Simplify Stroke
   * @description (SVG format only) If true, simplifies inside/outside strokes, using `stroke` attribute instead of `<mask>` where possible.
   * @default true
   */
  svg_simplify_stroke: boolean;
  /**
   * Use Absolute Bounds
   * @description If true, uses full node dimensions for rendering, ignoring cropping/empty space (useful for text nodes without unintended cropping).
   * @default false
   */
  use_absolute_bounds: boolean;
  /**
   * Version
   * @description Specific version ID of the file to render; if omitted, the current version is used.
   */
  version?: string;
};

/**
 * Type of FIGMA's FIGMA_RENDER_IMAGES_OF_FILE_NODES tool output.
 */
type FIGMA_RENDER_IMAGES_OF_FILE_NODES_OUTPUT = {
  /**
   * Data
   * @description Core response data with image rendering results.
   */
  data?: {
      /**
       * Err
       * @description Always `null` if overall request was successful. Check `images` map for node-specific rendering status.
       */
      err: null;
      /**
       * Images
       * @description Maps each requested node ID to its rendered image URL. A `null` value signifies rendering failure for that node (e.g., ID non-existent, node unrenderable). All input `ids` are present as keys.
       */
      images: {
          [key: string]: string | null;
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
 * Type of FIGMA's FIGMA_UPDATE_A_WEBHOOK tool input.
 */
type FIGMA_UPDATE_A_WEBHOOK_INPUT = {
  /**
   * Description
   * @description Optional description for the webhook. Max length 150.
   * @default null
   */
  description: string | null;
  /**
   * Endpoint
   * @description URL of the HTTP endpoint to receive POST requests for webhook events. Max length 2048.
   */
  endpoint?: string;
  /**
   * Event Type
   * @description Type of event that triggers the webhook.
   * @enum {string}
   */
  event_type?: "FILE_COMMENT" | "FILE_DELETE" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "LIBRARY_PUBLISH" | "PING";
  /**
   * Passcode
   * @description Secret string for your endpoint to verify webhook authenticity. Max length 100.
   */
  passcode?: string;
  /**
   * StatusEnm0
   * @description Operational status: `ACTIVE` to receive events, `PAUSED` to temporarily stop event delivery.
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "PAUSED" | null;
  /**
   * Webhook Id
   * @description Unique identifier of the existing webhook to update.
   */
  webhook_id?: string;
};

/**
 * Type of FIGMA's FIGMA_UPDATE_A_WEBHOOK tool output.
 */
type FIGMA_UPDATE_A_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The updated webhook object details.
   */
  data?: {
      /**
       * Client Id
       * @description The client ID of the OAuth application that created this webhook, if applicable.
       * @default null
       */
      client_id: string | null;
      /**
       * Description
       * @description A user-defined description or name for the webhook, useful for organization. Max length 140 characters.
       * @default null
       */
      description: string | null;
      /**
       * Endpoint
       * @description The URL of the endpoint that receives POST requests when the webhook is triggered.
       */
      endpoint: string;
      /**
       * Event Type
       * @description The type of event the webhook is subscribed to (e.g., `FILE_UPDATE`, `PING`).
       * @enum {string}
       */
      event_type: "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT";
      /**
       * Id
       * @description The unique identifier of the webhook.
       */
      id: string;
      /**
       * Passcode
       * @description The secret passcode used to verify webhook requests, sent by Figma to your endpoint.
       */
      passcode: string;
      /**
       * Status
       * @description The current operational status of the webhook. `ACTIVE` means it's receiving events, `PAUSED` means it's not.
       * @enum {string}
       */
      status: "ACTIVE" | "PAUSED";
      /**
       * Team Id
       * @description The identifier of the team to which the webhook subscription belongs.
       */
      team_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIGMA's FIGMA_UPDATE_DEV_RESOURCES tool input.
 */
type FIGMA_UPDATE_DEV_RESOURCES_INPUT = {
  /**
   * Dev Resources
   * @description List of dev resources to update. Each must include its `id` and can optionally provide a new `name` and/or `url`.
   */
  dev_resources?: {
      /**
       * Id
       * @description Unique identifier of the existing dev resource to update.
       */
      id: string;
      /**
       * Name
       * @description New name for the dev resource. If not provided, the current name is retained.
       * @default null
       */
      name: string | null;
      /**
       * Url
       * @description New URL for the dev resource. If not provided, the current URL is retained.
       * @default null
       */
      url: string | null;
  }[];
};

/**
 * Type of FIGMA's FIGMA_UPDATE_DEV_RESOURCES tool output.
 */
type FIGMA_UPDATE_DEV_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Detailed results of the bulk update, including successfully updated resources and any errors.
   */
  data?: {
      /**
       * Errors
       * @description List of errors from the update process. Each error typically includes the failed resource's `id` (if applicable) and a message.
       * @default null
       */
      errors: {
          /**
           * Error
           * @description Message describing the error.
           */
          error: string;
          /**
           * Id
           * @description Unique identifier of the dev resource that failed to update; may be absent if the error is not specific to one resource.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * Links Updated
       * @description List of successfully updated dev resources, detailing each resource's `id`, `name`, `url`, `file_key`, and `node_id`.
       * @default null
       */
      links_updated: {
          /**
           * File Key
           * @description Figma file key where the updated dev resource is located.
           */
          file_key: string;
          /**
           * Id
           * @description Unique identifier of the successfully updated dev resource.
           */
          id: string;
          /**
           * Name
           * @description Updated name of the dev resource.
           */
          name: string;
          /**
           * Node Id
           * @description ID of the Figma node (e.g., layer, component) to which the dev resource is attached.
           */
          node_id: string;
          /**
           * Url
           * @description Updated URL of the dev resource.
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "FIGMA".
 */
export type FIGMA_TOOL_INPUTS = {
  ADD_A_COMMENT_TO_A_FILE: FIGMA_ADD_A_COMMENT_TO_A_FILE_INPUT
  ADD_A_REACTION_TO_A_COMMENT: FIGMA_ADD_A_REACTION_TO_A_COMMENT_INPUT
  CREATE_A_WEBHOOK: FIGMA_CREATE_A_WEBHOOK_INPUT
  CREATE_DEV_RESOURCES: FIGMA_CREATE_DEV_RESOURCES_INPUT
  CREATE_MODIFY_DELETE_VARIABLES: FIGMA_CREATE_MODIFY_DELETE_VARIABLES_INPUT
  DELETE_A_COMMENT: FIGMA_DELETE_A_COMMENT_INPUT
  DELETE_A_REACTION: FIGMA_DELETE_A_REACTION_INPUT
  DELETE_A_WEBHOOK: FIGMA_DELETE_A_WEBHOOK_INPUT
  DELETE_DEV_RESOURCE: FIGMA_DELETE_DEV_RESOURCE_INPUT
  DESIGN_TOKENS_TO_TAILWIND: FIGMA_DESIGN_TOKENS_TO_TAILWIND_INPUT
  DETECT_BACKGROUND: FIGMA_DETECT_BACKGROUND_INPUT
  DISCOVER_FIGMA_RESOURCES: FIGMA_DISCOVER_FIGMA_RESOURCES_INPUT
  DOWNLOAD_FIGMA_IMAGES: FIGMA_DOWNLOAD_FIGMA_IMAGES_INPUT
  EXTRACT_DESIGN_TOKENS: FIGMA_EXTRACT_DESIGN_TOKENS_INPUT
  EXTRACT_PROTOTYPE_INTERACTIONS: FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS_INPUT
  GET_ACTIVITY_LOGS: FIGMA_GET_ACTIVITY_LOGS_INPUT
  GET_A_WEBHOOK: FIGMA_GET_A_WEBHOOK_INPUT
  GET_COMMENTS_IN_A_FILE: FIGMA_GET_COMMENTS_IN_A_FILE_INPUT
  GET_COMPONENT: FIGMA_GET_COMPONENT_INPUT
  GET_COMPONENT_SET: FIGMA_GET_COMPONENT_SET_INPUT
  GET_CURRENT_USER: FIGMA_GET_CURRENT_USER_INPUT
  GET_DEV_RESOURCES: FIGMA_GET_DEV_RESOURCES_INPUT
  GET_FILES_IN_A_PROJECT: FIGMA_GET_FILES_IN_A_PROJECT_INPUT
  GET_FILE_COMPONENTS: FIGMA_GET_FILE_COMPONENTS_INPUT
  GET_FILE_COMPONENT_SETS: FIGMA_GET_FILE_COMPONENT_SETS_INPUT
  GET_FILE_JSON: FIGMA_GET_FILE_JSON_INPUT
  GET_FILE_STYLES: FIGMA_GET_FILE_STYLES_INPUT
  GET_IMAGE_FILLS: FIGMA_GET_IMAGE_FILLS_INPUT
  GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA: FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA_INPUT
  GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA: FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA_INPUT
  GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA: FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA_INPUT
  GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA: FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA_INPUT
  GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA: FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA_INPUT
  GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA: FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA_INPUT
  GET_LOCAL_VARIABLES: FIGMA_GET_LOCAL_VARIABLES_INPUT
  GET_PAYMENTS: FIGMA_GET_PAYMENTS_INPUT
  GET_PROJECTS_IN_A_TEAM: FIGMA_GET_PROJECTS_IN_A_TEAM_INPUT
  GET_PUBLISHED_VARIABLES: FIGMA_GET_PUBLISHED_VARIABLES_INPUT
  GET_REACTIONS_FOR_A_COMMENT: FIGMA_GET_REACTIONS_FOR_A_COMMENT_INPUT
  GET_STYLE: FIGMA_GET_STYLE_INPUT
  GET_TEAM_COMPONENTS: FIGMA_GET_TEAM_COMPONENTS_INPUT
  GET_TEAM_COMPONENT_SETS: FIGMA_GET_TEAM_COMPONENT_SETS_INPUT
  GET_TEAM_STYLES: FIGMA_GET_TEAM_STYLES_INPUT
  GET_TEAM_WEBHOOKS: FIGMA_GET_TEAM_WEBHOOKS_INPUT
  GET_VERSIONS_OF_A_FILE: FIGMA_GET_VERSIONS_OF_A_FILE_INPUT
  GET_WEBHOOK_REQUESTS: FIGMA_GET_WEBHOOK_REQUESTS_INPUT
  RENDER_IMAGES_OF_FILE_NODES: FIGMA_RENDER_IMAGES_OF_FILE_NODES_INPUT
  UPDATE_A_WEBHOOK: FIGMA_UPDATE_A_WEBHOOK_INPUT
  UPDATE_DEV_RESOURCES: FIGMA_UPDATE_DEV_RESOURCES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIGMA".
 */
export type FIGMA_TOOL_OUTPUTS = {
  ADD_A_COMMENT_TO_A_FILE: FIGMA_ADD_A_COMMENT_TO_A_FILE_OUTPUT
  ADD_A_REACTION_TO_A_COMMENT: FIGMA_ADD_A_REACTION_TO_A_COMMENT_OUTPUT
  CREATE_A_WEBHOOK: FIGMA_CREATE_A_WEBHOOK_OUTPUT
  CREATE_DEV_RESOURCES: FIGMA_CREATE_DEV_RESOURCES_OUTPUT
  CREATE_MODIFY_DELETE_VARIABLES: FIGMA_CREATE_MODIFY_DELETE_VARIABLES_OUTPUT
  DELETE_A_COMMENT: FIGMA_DELETE_A_COMMENT_OUTPUT
  DELETE_A_REACTION: FIGMA_DELETE_A_REACTION_OUTPUT
  DELETE_A_WEBHOOK: FIGMA_DELETE_A_WEBHOOK_OUTPUT
  DELETE_DEV_RESOURCE: FIGMA_DELETE_DEV_RESOURCE_OUTPUT
  DESIGN_TOKENS_TO_TAILWIND: FIGMA_DESIGN_TOKENS_TO_TAILWIND_OUTPUT
  DETECT_BACKGROUND: FIGMA_DETECT_BACKGROUND_OUTPUT
  DISCOVER_FIGMA_RESOURCES: FIGMA_DISCOVER_FIGMA_RESOURCES_OUTPUT
  DOWNLOAD_FIGMA_IMAGES: FIGMA_DOWNLOAD_FIGMA_IMAGES_OUTPUT
  EXTRACT_DESIGN_TOKENS: FIGMA_EXTRACT_DESIGN_TOKENS_OUTPUT
  EXTRACT_PROTOTYPE_INTERACTIONS: FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS_OUTPUT
  GET_ACTIVITY_LOGS: FIGMA_GET_ACTIVITY_LOGS_OUTPUT
  GET_A_WEBHOOK: FIGMA_GET_A_WEBHOOK_OUTPUT
  GET_COMMENTS_IN_A_FILE: FIGMA_GET_COMMENTS_IN_A_FILE_OUTPUT
  GET_COMPONENT: FIGMA_GET_COMPONENT_OUTPUT
  GET_COMPONENT_SET: FIGMA_GET_COMPONENT_SET_OUTPUT
  GET_CURRENT_USER: FIGMA_GET_CURRENT_USER_OUTPUT
  GET_DEV_RESOURCES: FIGMA_GET_DEV_RESOURCES_OUTPUT
  GET_FILES_IN_A_PROJECT: FIGMA_GET_FILES_IN_A_PROJECT_OUTPUT
  GET_FILE_COMPONENTS: FIGMA_GET_FILE_COMPONENTS_OUTPUT
  GET_FILE_COMPONENT_SETS: FIGMA_GET_FILE_COMPONENT_SETS_OUTPUT
  GET_FILE_JSON: FIGMA_GET_FILE_JSON_OUTPUT
  GET_FILE_STYLES: FIGMA_GET_FILE_STYLES_OUTPUT
  GET_IMAGE_FILLS: FIGMA_GET_IMAGE_FILLS_OUTPUT
  GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA: FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA_OUTPUT
  GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA: FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA_OUTPUT
  GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA: FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA_OUTPUT
  GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA: FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA_OUTPUT
  GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA: FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA_OUTPUT
  GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA: FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA_OUTPUT
  GET_LOCAL_VARIABLES: FIGMA_GET_LOCAL_VARIABLES_OUTPUT
  GET_PAYMENTS: FIGMA_GET_PAYMENTS_OUTPUT
  GET_PROJECTS_IN_A_TEAM: FIGMA_GET_PROJECTS_IN_A_TEAM_OUTPUT
  GET_PUBLISHED_VARIABLES: FIGMA_GET_PUBLISHED_VARIABLES_OUTPUT
  GET_REACTIONS_FOR_A_COMMENT: FIGMA_GET_REACTIONS_FOR_A_COMMENT_OUTPUT
  GET_STYLE: FIGMA_GET_STYLE_OUTPUT
  GET_TEAM_COMPONENTS: FIGMA_GET_TEAM_COMPONENTS_OUTPUT
  GET_TEAM_COMPONENT_SETS: FIGMA_GET_TEAM_COMPONENT_SETS_OUTPUT
  GET_TEAM_STYLES: FIGMA_GET_TEAM_STYLES_OUTPUT
  GET_TEAM_WEBHOOKS: FIGMA_GET_TEAM_WEBHOOKS_OUTPUT
  GET_VERSIONS_OF_A_FILE: FIGMA_GET_VERSIONS_OF_A_FILE_OUTPUT
  GET_WEBHOOK_REQUESTS: FIGMA_GET_WEBHOOK_REQUESTS_OUTPUT
  RENDER_IMAGES_OF_FILE_NODES: FIGMA_RENDER_IMAGES_OF_FILE_NODES_OUTPUT
  UPDATE_A_WEBHOOK: FIGMA_UPDATE_A_WEBHOOK_OUTPUT
  UPDATE_DEV_RESOURCES: FIGMA_UPDATE_DEV_RESOURCES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIGMA toolkit.
 */
export const FIGMA = {
  slug: "figma",
  tools: {
    /**
     * Posts a new comment to a figma file or branch, optionally replying to an existing root comment (replies cannot be nested); `region height` and `region width` in `client meta` must be positive if defining a comment region.
     */
    ADD_A_COMMENT_TO_A_FILE: "FIGMA_ADD_A_COMMENT_TO_A_FILE",
    /**
     * Posts a specified emoji reaction to an existing comment in a figma file or branch, requiring valid file key and comment id.
     */
    ADD_A_REACTION_TO_A_COMMENT: "FIGMA_ADD_A_REACTION_TO_A_COMMENT",
    /**
     * Creates a figma webhook for a `team id` to send post notifications for an `event type` to a publicly accessible https `endpoint`; an initial ping is sent unless `status` is `paused`.
     */
    CREATE_A_WEBHOOK: "FIGMA_CREATE_A_WEBHOOK",
    /**
     * Creates and attaches multiple uniquely-urled development resources to specified figma nodes, up to 10 per node.
     */
    CREATE_DEV_RESOURCES: "FIGMA_CREATE_DEV_RESOURCES",
    /**
     * Manages variables, collections, modes, and their values in a figma file via batch create/update/delete operations; use temporary ids to link new related items in one request and ensure `variablemodevalues` match the target variable's `resolvedtype`.
     */
    CREATE_MODIFY_DELETE_VARIABLES: "FIGMA_CREATE_MODIFY_DELETE_VARIABLES",
    /**
     * Deletes a specific comment from a figma file or branch, provided the authenticated user is the original author of the comment.
     */
    DELETE_A_COMMENT: "FIGMA_DELETE_A_COMMENT",
    /**
     * Deletes a specific emoji reaction from a comment in a figma file; the user must have originally created the reaction.
     */
    DELETE_A_REACTION: "FIGMA_DELETE_A_REACTION",
    /**
     * Permanently deletes an existing webhook, identified by its unique `webhook id`; this operation is irreversible.
     */
    DELETE_A_WEBHOOK: "FIGMA_DELETE_A_WEBHOOK",
    /**
     * Deletes a development resource (used to link figma design elements to external developer information like code or tasks) from a specified figma file.
     */
    DELETE_DEV_RESOURCE: "FIGMA_DELETE_DEV_RESOURCE",
    /**
     * Convert design tokens to tailwind css configuration. takes the output from extractdesigntokens and generates: - tailwind.config.ts/js with theme extensions - optional globals.css with font imports note: shadow colors can be provided in either string format (e.g., "rgba(15, 110, 110, 0.32)") or dictionary format (e.g., {"r": 0.059, "g": 0.431, "b": 0.431, "a": 0.32}).
     */
    DESIGN_TOKENS_TO_TAILWIND: "FIGMA_DESIGN_TOKENS_TO_TAILWIND",
    /**
     * Detect background layers for selected nodes. uses geometric analysis, z-index ordering, and visual properties to identify potential background layers.
     */
    DETECT_BACKGROUND: "FIGMA_DETECT_BACKGROUND",
    /**
     * 🔍 smart figma resource discovery - never guess ids again! 🎯 easiest method: just paste any figma url to get all ids: • file urls: https://www.figma.com/file/abc123/design → get file key • design urls: https://www.figma.com/design/abc123/design → get file key • node urls: ...?node-id=123:456 → get file key + node id • team urls: .../team/123456/... → get team id 🔄 step-by-step discovery: 1. team id → projects list (with project ids) 2. project id → files list (with file keys + thumbnails) 3. file key → nodes list (with node ids + hierarchy) 💡 common workflows: • extract from url: discoverfigmaresources(figma url="...") • browse team: discoverfigmaresources(team id="123") • list files: discoverfigmaresources(project id="proj 456") • find nodes: discoverfigmaresources(file key="abc123") ✨ get file key for getfilejson, node ids for detectbackground, etc.
     */
    DISCOVER_FIGMA_RESOURCES: "FIGMA_DISCOVER_FIGMA_RESOURCES",
    /**
     * Download images from figma file nodes. renders specified nodes as images and downloads them using mercury's filedownloadable infrastructure. supports png, svg, jpg, and pdf formats.
     */
    DOWNLOAD_FIGMA_IMAGES: "FIGMA_DOWNLOAD_FIGMA_IMAGES",
    /**
     * Extract design tokens from figma files. combines styles, variables, and extracted values to create a comprehensive design token system.
     */
    EXTRACT_DESIGN_TOKENS: "FIGMA_EXTRACT_DESIGN_TOKENS",
    /**
     * Extract prototype interactions and animations from figma files. analyzes the prototype data to extract: - user interactions (clicks, hovers, etc.) - transition animations - component variant states - user flows and navigation
     */
    EXTRACT_PROTOTYPE_INTERACTIONS: "FIGMA_EXTRACT_PROTOTYPE_INTERACTIONS",
    /**
     * Retrieves activity log events from figma, allowing filtering by event types, time range, and pagination.
     */
    GET_ACTIVITY_LOGS: "FIGMA_GET_ACTIVITY_LOGS",
    /**
     * Retrieves detailed information about a specific webhook by its id, provided the webhook exists and is accessible to the user.
     */
    GET_A_WEBHOOK: "FIGMA_GET_A_WEBHOOK",
    /**
     * Retrieves all comments from an existing figma file, identified by a valid `file key`, returning details like content, author, position, and reactions, with an option for markdown formatted content.
     */
    GET_COMMENTS_IN_A_FILE: "FIGMA_GET_COMMENTS_IN_A_FILE",
    /**
     * Get component data with automatic simplification. returns clean, ai-friendly component structure.
     */
    GET_COMPONENT: "FIGMA_GET_COMPONENT",
    /**
     * Retrieves detailed metadata for a specific published figma component set using its unique `key`.
     */
    GET_COMPONENT_SET: "FIGMA_GET_COMPONENT_SET",
    /**
     * Retrieves detailed information for the currently authenticated figma user.
     */
    GET_CURRENT_USER: "FIGMA_GET_CURRENT_USER",
    /**
     * Retrieves development resources (e.g., jira/github links) for a figma main file, optionally filtering by specific node ids.
     */
    GET_DEV_RESOURCES: "FIGMA_GET_DEV_RESOURCES",
    /**
     * Fetches a list of files in a figma project, optionally including branch metadata.
     */
    GET_FILES_IN_A_PROJECT: "FIGMA_GET_FILES_IN_A_PROJECT",
    /**
     * Retrieves published components from a figma file, which must be a main file (not a branch) acting as a library.
     */
    GET_FILE_COMPONENTS: "FIGMA_GET_FILE_COMPONENTS",
    /**
     * Retrieves all published component sets from the specified figma main file (file key must not be for a branch).
     */
    GET_FILE_COMPONENT_SETS: "FIGMA_GET_FILE_COMPONENT_SETS",
    /**
     * Get figma file data with automatic simplification. this enhanced version automatically transforms verbose figma json into clean, ai-friendly format with: - css-like property names - deduplicated variables - removed empty values - 70%+ size reduction use simplify=false to get raw api response.
     */
    GET_FILE_JSON: "FIGMA_GET_FILE_JSON",
    /**
     * Retrieves a list of published styles (like colors, text attributes, effects, and layout grids) from a specified main figma file (not a branch).
     */
    GET_FILE_STYLES: "FIGMA_GET_FILE_STYLES",
    /**
     * Retrieves temporary (14-day expiry) download urls for all image fills in a figma file; requires `imageref` from `paint` objects to map urls.
     */
    GET_IMAGE_FILLS: "FIGMA_GET_IMAGE_FILLS",
    /**
     * Retrieves component insertion and detachment analytics for a specified figma library, groupable by 'component' or 'team' and filterable by a date range (yyyy-mm-dd).
     */
    GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA: "FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_ACTION_DATA",
    /**
     * Retrieves component usage analytics for a specified figma library file (identified by `file key`), with data groupable by 'component' or 'file'.
     */
    GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA: "FIGMA_GET_LIBRARY_ANALYTICS_COMPONENT_USAGE_DATA",
    /**
     * Retrieves style usage analytics (insertions, detachments) for a figma library, grouped by 'style' or 'team'; if providing a date range, ensure end date is not before start date.
     */
    GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA: "FIGMA_GET_LIBRARY_ANALYTICS_STYLE_ACTION_DATA",
    /**
     * Retrieves style usage analytics for a figma library (specified by a valid `file key`), allowing data to be grouped by 'file' or 'style'.
     */
    GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA: "FIGMA_GET_LIBRARY_ANALYTICS_STYLE_USAGE_DATA",
    /**
     * Retrieves weekly, paginated analytics data on variable insertions and detachments for a specified figma library (identified by `file key`), groupable by 'variable' or 'team', and filterable by an optional date range.
     */
    GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA: "FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_ACTION_DATA",
    /**
     * Retrieves paginated analytics data on variable usage from a specified figma library, grouped by 'file' or 'variable', for libraries with enabled analytics.
     */
    GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA: "FIGMA_GET_LIBRARY_ANALYTICS_VARIABLE_USAGE_DATA",
    /**
     * Retrieves all local/remote variables for a figma file/branch; crucial for obtaining mode-specific values which `/v1/files/{file key}/variables/published` omits.
     */
    GET_LOCAL_VARIABLES: "FIGMA_GET_LOCAL_VARIABLES",
    /**
     * Retrieves a user's payment information for a figma plugin, widget, or community file; the authenticated identity must own the resource.
     */
    GET_PAYMENTS: "FIGMA_GET_PAYMENTS",
    /**
     * Retrieves projects within a specified figma team that are visible to the authenticated user.
     */
    GET_PROJECTS_IN_A_TEAM: "FIGMA_GET_PROJECTS_IN_A_TEAM",
    /**
     * Retrieves variables published from a specified figma file; this api is available only to full members of enterprise organizations.
     */
    GET_PUBLISHED_VARIABLES: "FIGMA_GET_PUBLISHED_VARIABLES",
    /**
     * Retrieves reactions for a specific comment in a figma file.
     */
    GET_REACTIONS_FOR_A_COMMENT: "FIGMA_GET_REACTIONS_FOR_A_COMMENT",
    /**
     * Retrieves detailed metadata for a specific style in figma using its unique style key.
     */
    GET_STYLE: "FIGMA_GET_STYLE",
    /**
     * Retrieves components published in a specific figma team's library; the team must have published components, otherwise an empty list is returned.
     */
    GET_TEAM_COMPONENTS: "FIGMA_GET_TEAM_COMPONENTS",
    /**
     * Retrieves a paginated list of published component sets (collections of reusable ui elements) from a specified figma team's library.
     */
    GET_TEAM_COMPONENT_SETS: "FIGMA_GET_TEAM_COMPONENT_SETS",
    /**
     * Retrieves a paginated list of published styles, such as colors or text attributes, from a specified figma team's library.
     */
    GET_TEAM_STYLES: "FIGMA_GET_TEAM_STYLES",
    /**
     * Retrieves all webhooks registered for a specified figma team.
     */
    GET_TEAM_WEBHOOKS: "FIGMA_GET_TEAM_WEBHOOKS",
    /**
     * Retrieves the version history for a figma file or branch, as specified by its `file key`.
     */
    GET_VERSIONS_OF_A_FILE: "FIGMA_GET_VERSIONS_OF_A_FILE",
    /**
     * Retrieves a history of webhook requests for a specific figma webhook subscription; data is available for requests sent within the last seven days.
     */
    GET_WEBHOOK_REQUESTS: "FIGMA_GET_WEBHOOK_REQUESTS",
    /**
     * Renders specified nodes from a figma file as images (jpg, pdf, png, svg), returning a map of node ids to image urls (or `null` for failed nodes); images expire after 30 days and are capped at 32 megapixels (larger requests are scaled down).
     */
    RENDER_IMAGES_OF_FILE_NODES: "FIGMA_RENDER_IMAGES_OF_FILE_NODES",
    /**
     * Updates an existing figma webhook, identified by `webhook id`, allowing modification of its event type, endpoint, passcode, status, or description.
     */
    UPDATE_A_WEBHOOK: "FIGMA_UPDATE_A_WEBHOOK",
    /**
     * Updates the name and/or url of one or more existing figma dev resources, each identified by its unique `id`.
     */
    UPDATE_DEV_RESOURCES: "FIGMA_UPDATE_DEV_RESOURCES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIGMA".
 */
export type FIGMA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIGMA".
 */
export type FIGMA_TRIGGER_EVENTS = {}
