// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of Y_GY's Y_GY_CREATE_SHORT_LINK tool input.
 */
type Y_GY_CREATE_SHORT_LINK_INPUT = {
  /**
   * Custom
   * @description Custom slug/alias for the short link (alphanumeric, unique)
   * @default null
   */
  custom: string | null;
  /**
   * Domain
   * @description Custom domain for the short link (must be configured in your account)
   * @default null
   */
  domain: string | null;
  /**
   * Url
   * Format: uri
   * @description The original (long) URL to be shortened
   */
  url?: string;
};

/**
 * Type of Y_GY's Y_GY_CREATE_SHORT_LINK tool output.
 */
type Y_GY_CREATE_SHORT_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the link was created
       */
      created_at: string;
      /**
       * Domain
       * @description Domain used for the short link
       */
      domain: string;
      /**
       * Id
       * @description Unique identifier of the newly created short link
       */
      id: string;
      /**
       * Short
       * Format: uri
       * @description Full shortened URL
       */
      short: string;
      /**
       * Url
       * Format: uri
       * @description Original URL that was provided
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
 * Type of Y_GY's Y_GY_CREATE_TAG tool input.
 */
type Y_GY_CREATE_TAG_INPUT = {
  /**
   * Name
   * @description The desired name for the new tag.
   */
  name?: string;
};

/**
 * Type of Y_GY's Y_GY_CREATE_TAG tool output.
 */
type Y_GY_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The timestamp when the tag was created.
       */
      created_at: string;
      /**
       * Id
       * @description The unique identifier for the created tag.
       */
      id: number;
      /**
       * Name
       * @description The name of the created tag.
       */
      name: string;
      /**
       * Organization Id
       * @description The identifier for the organization to which the tag belongs.
       */
      organization_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of Y_GY's Y_GY_DELETE_SHORT_LINK tool input.
 */
type Y_GY_DELETE_SHORT_LINK_INPUT = {
  /**
   * Id
   * @description The unique ID of the short link to delete.
   */
  id?: string;
};

/**
 * Type of Y_GY's Y_GY_DELETE_SHORT_LINK tool output.
 */
type Y_GY_DELETE_SHORT_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the operation.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the deletion was successful.
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
 * Type of Y_GY's Y_GY_DELETE_TAG tool input.
 */
type Y_GY_DELETE_TAG_INPUT = {
  /**
   * Id
   * @description The unique identifier of the tag to delete
   */
  id?: string;
};

/**
 * Type of Y_GY's Y_GY_DELETE_TAG tool output.
 */
type Y_GY_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message providing details about the operation
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the tag was successfully deleted
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
 * Type of Y_GY's Y_GY_GET_ALL_LINKS tool input.
 */
type Y_GY_GET_ALL_LINKS_INPUT = {
  /**
   * Limit
   * @description Number of items per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search term to filter links
   * @default null
   */
  search: string | null;
  /**
   * Tag
   * @description Filter links by tag
   * @default null
   */
  tag: string | null;
};

/**
 * Type of Y_GY's Y_GY_GET_ALL_LINKS tool output.
 */
type Y_GY_GET_ALL_LINKS_OUTPUT = {
  /**
   * Data
   * @description List of link objects returned
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the link
       */
      id: string;
      /**
       * Tags
       * @description List of tags associated with the link
       */
      tags: string[];
      /**
       * Title
       * @description Title or description of the link
       */
      title: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_at: string;
      /**
       * Url
       * @description The URL of the link
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Number of items per page
   */
  limit?: number;
  /**
   * Page
   * @description Current page number
   */
  page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matching links
   */
  total?: number;
};

/**
 * Type of Y_GY's Y_GY_GET_ALL_TAGS tool input.
 */
type Y_GY_GET_ALL_TAGS_INPUT = object;

/**
 * Type of Y_GY's Y_GY_GET_ALL_TAGS tool output.
 */
type Y_GY_GET_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tag objects
       */
      tags: {
          /**
           * Created At
           * @description Timestamp when the tag was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the tag
           */
          description: string;
          /**
           * Id
           * @description Unique ID of the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the tag was last updated
           */
          updated_at: string;
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
 * Type of Y_GY's Y_GY_GET_SHORT_LINK tool input.
 */
type Y_GY_GET_SHORT_LINK_INPUT = {
  /**
   * Id
   * @description Unique identifier for the short link
   */
  id?: string;
};

/**
 * Type of Y_GY's Y_GY_GET_SHORT_LINK tool output.
 */
type Y_GY_GET_SHORT_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clicks
       * @description Number of times the link was clicked
       */
      clicks: number;
      /**
       * Created At
       * @description ISO 8601 timestamp when the link was created
       */
      created_at: string;
      /**
       * Expires At
       * @description Expiration timestamp if set, else null
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description The unique ID of the short link
       */
      id: string;
      /**
       * Original Url
       * @description The original, full-length URL
       */
      original_url: string;
      /**
       * Short Url
       * @description The shortened URL
       */
      short_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of Y_GY's Y_GY_REGISTER_USER tool input.
 */
type Y_GY_REGISTER_USER_INPUT = {
  /**
   * Email
   * @description Email address for the new user account.
   */
  email?: string;
  /**
   * Password
   * @description Password for the new user account.
   */
  password?: string;
  /**
   * Username
   * @description Desired username for the new user account.
   */
  username?: string;
};

/**
 * Type of Y_GY's Y_GY_REGISTER_USER tool output.
 */
type Y_GY_REGISTER_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The email of the newly registered user.
       */
      email: string;
      /**
       * User Id
       * @description The unique identifier for the newly registered user.
       */
      user_id: string;
      /**
       * Username
       * @description The username of the newly registered user.
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "Y_GY".
 */
export type Y_GY_TOOL_INPUTS = {
  CREATE_SHORT_LINK: Y_GY_CREATE_SHORT_LINK_INPUT
  CREATE_TAG: Y_GY_CREATE_TAG_INPUT
  DELETE_SHORT_LINK: Y_GY_DELETE_SHORT_LINK_INPUT
  DELETE_TAG: Y_GY_DELETE_TAG_INPUT
  GET_ALL_LINKS: Y_GY_GET_ALL_LINKS_INPUT
  GET_ALL_TAGS: Y_GY_GET_ALL_TAGS_INPUT
  GET_SHORT_LINK: Y_GY_GET_SHORT_LINK_INPUT
  REGISTER_USER: Y_GY_REGISTER_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "Y_GY".
 */
export type Y_GY_TOOL_OUTPUTS = {
  CREATE_SHORT_LINK: Y_GY_CREATE_SHORT_LINK_OUTPUT
  CREATE_TAG: Y_GY_CREATE_TAG_OUTPUT
  DELETE_SHORT_LINK: Y_GY_DELETE_SHORT_LINK_OUTPUT
  DELETE_TAG: Y_GY_DELETE_TAG_OUTPUT
  GET_ALL_LINKS: Y_GY_GET_ALL_LINKS_OUTPUT
  GET_ALL_TAGS: Y_GY_GET_ALL_TAGS_OUTPUT
  GET_SHORT_LINK: Y_GY_GET_SHORT_LINK_OUTPUT
  REGISTER_USER: Y_GY_REGISTER_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's Y_GY toolkit.
 */
export const Y_GY = {
  slug: "y_gy",
  tools: {
    /**
     * Tool to create a new short link with optional custom domain or alias. use when you need to shorten a long url into a branded link.
     */
    CREATE_SHORT_LINK: "Y_GY_CREATE_SHORT_LINK",
    /**
     * Tool to create a new tag. use after determining the tag name to categorize links.
     */
    CREATE_TAG: "Y_GY_CREATE_TAG",
    /**
     * Tool to delete a specific short link by its id. use when you need to remove a short link after confirming its id.
     */
    DELETE_SHORT_LINK: "Y_GY_DELETE_SHORT_LINK",
    /**
     * Tool to delete a tag. use when you need to remove a tag by its id after confirming it exists.
     */
    DELETE_TAG: "Y_GY_DELETE_TAG",
    /**
     * Tool to fetch all short links with optional pagination. use when you need to list existing links with filters.
     */
    GET_ALL_LINKS: "Y_GY_GET_ALL_LINKS",
    /**
     * Tool to retrieve all tags associated with the organization. use when you need to list all available tags for categorizing resources.
     */
    GET_ALL_TAGS: "Y_GY_GET_ALL_TAGS",
    /**
     * Tool to retrieve details for a short link. use when you have a link id and need its metadata.
     */
    GET_SHORT_LINK: "Y_GY_GET_SHORT_LINK",
    /**
     * Tool to register a new user account. use when onboarding a new user to the y.gy system with their chosen username, password, and email.
     */
    REGISTER_USER: "Y_GY_REGISTER_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "Y_GY".
 */
export type Y_GY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "Y_GY".
 */
export type Y_GY_TRIGGER_EVENTS = {}
