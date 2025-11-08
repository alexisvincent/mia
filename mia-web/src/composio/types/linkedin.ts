// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LINKEDIN's LINKEDIN_CREATE_LINKED_IN_POST tool input.
 */
type LINKEDIN_CREATE_LINKED_IN_POST_INPUT = {
  /**
   * Author
   * @description The URN of the LinkedIn member or organization creating the post. Use the GET_USER_INFO action to retrieve the 'author_id' (URN) for the authenticated user. For an organization, the URN will be in the format 'urn:li:organization:{id}'.
   */
  author?: string;
  /**
   * Commentary
   * @description The main text content of the post. This field supports plain text and @-mentions (e.g., @[LinkedIn Member](urn:li:person:xxxx)).
   */
  commentary?: string;
  /**
   * Distribution
   * @description Specifies distribution rules for the post, including feed distribution and targeting.
   */
  distribution?: {
      /**
       * Feed Distribution
       * @description Specifies how the post is distributed on the LinkedIn feed. 'MAIN_FEED' distributes to the main feed, 'NONE' does not distribute automatically.
       * @default MAIN_FEED
       * @enum {string}
       */
      feedDistribution: "MAIN_FEED" | "NONE";
      /**
       * Target Entities
       * @description A list of entities to target with this post. Each entity should be a dictionary. This is often used for targeted distribution, e.g., to specific groups or GeoLocations. For GeoLocations, provide a dictionary like: `{'geoLocations': [{'geo': 'urn:li:geo:103644278'}]}`. Refer to LinkedIn documentation for specific URN formats.
       */
      targetEntities?: {
          [key: string]: unknown;
      }[];
      /**
       * Third Party Distribution Channels
       * @description A list of third-party channels where the post should be distributed, e.g., Twitter. Refer to LinkedIn documentation for supported channels.
       */
      thirdPartyDistributionChannels?: string[];
  };
  /**
   * Is Reshare Disabled By Author
   * @description Set to true to prevent others from resharing this post.
   * @default false
   */
  isReshareDisabledByAuthor: boolean;
  /**
   * Lifecycle State
   * @description The state of the post. Use 'PUBLISHED' to post directly, 'DRAFT' to save as a draft, or 'PUBLISH_REQUESTED' if the post requires review before publishing.
   * @default PUBLISHED
   */
  lifecycleState: string;
  /**
   * Visibility
   * @description Controls who can see the post. 'PUBLIC' makes it visible to everyone, 'CONNECTIONS' to connections only, 'LOGGED_IN' to signed-in LinkedIn members, and 'CONTAINER' for specific group/event posts.
   * @default PUBLIC
   * @enum {string}
   */
  visibility: "PUBLIC" | "CONNECTIONS" | "LOGGED_IN" | "CONTAINER";
};

/**
 * Type of LINKEDIN's LINKEDIN_CREATE_LINKED_IN_POST tool output.
 */
type LINKEDIN_CREATE_LINKED_IN_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full response from the LinkedIn API. This typically includes the 'status_code', 'reason' for the status, the raw 'content' of the response, and the 'share_id' (or post ID, often found in 'x-restli-id' header) of the created post.
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
 * Type of LINKEDIN's LINKEDIN_DELETE_LINKED_IN_POST tool input.
 */
type LINKEDIN_DELETE_LINKED_IN_POST_INPUT = {
  /**
   * Share Id
   * @description Unique identifier of the LinkedIn share (post) to be deleted.
   */
  share_id?: string;
};

/**
 * Type of LINKEDIN's LINKEDIN_DELETE_LINKED_IN_POST tool output.
 */
type LINKEDIN_DELETE_LINKED_IN_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Indicates deletion outcome. Contains a 'deleted' key: `True` if the post deletion was successfully processed, `False` otherwise.
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
 * Type of LINKEDIN's LINKEDIN_GET_COMPANY_INFO tool input.
 */
type LINKEDIN_GET_COMPANY_INFO_INPUT = {
  /**
   * Count
   * @description The number of organization ACLs to return per page.
   * @default 10
   */
  count: number;
  /**
   * Role
   * @description The specific role to filter organization ACLs by.
   * @default ADMINISTRATOR
   * @enum {string}
   */
  role: "ADMINISTRATOR" | "DIRECT_SPONSORED_CONTENT_POSTER";
  /**
   * Start
   * @description The starting index for pagination, representing the number of initial ACLs to skip.
   * @default 0
   */
  start: number;
  /**
   * State
   * @description The approval state of the role to filter by.
   * @default APPROVED
   * @enum {string}
   */
  state: "APPROVED" | "REQUESTED";
};

/**
 * Type of LINKEDIN's LINKEDIN_GET_COMPANY_INFO tool output.
 */
type LINKEDIN_GET_COMPANY_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw API response dictionary, typically listing organization ACLs that match request criteria, detailing organizations and user roles.
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
 * Type of LINKEDIN's LINKEDIN_GET_MY_INFO tool input.
 */
type LINKEDIN_GET_MY_INFO_INPUT = object;

/**
 * Type of LINKEDIN's LINKEDIN_GET_MY_INFO tool output.
 */
type LINKEDIN_GET_MY_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Dict
       * @description The authenticated user's profile data from LinkedIn's `/v2/userinfo` endpoint; includes 'author_id' (derived from 'sub'), vital for attributing content like posts or articles.
       * @default null
       */
      response_dict: {
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
 * Type map of all available tool input types for toolkit "LINKEDIN".
 */
export type LINKEDIN_TOOL_INPUTS = {
  CREATE_LINKED_IN_POST: LINKEDIN_CREATE_LINKED_IN_POST_INPUT
  DELETE_LINKED_IN_POST: LINKEDIN_DELETE_LINKED_IN_POST_INPUT
  GET_COMPANY_INFO: LINKEDIN_GET_COMPANY_INFO_INPUT
  GET_MY_INFO: LINKEDIN_GET_MY_INFO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LINKEDIN".
 */
export type LINKEDIN_TOOL_OUTPUTS = {
  CREATE_LINKED_IN_POST: LINKEDIN_CREATE_LINKED_IN_POST_OUTPUT
  DELETE_LINKED_IN_POST: LINKEDIN_DELETE_LINKED_IN_POST_OUTPUT
  GET_COMPANY_INFO: LINKEDIN_GET_COMPANY_INFO_OUTPUT
  GET_MY_INFO: LINKEDIN_GET_MY_INFO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LINKEDIN toolkit.
 */
export const LINKEDIN = {
  slug: "linkedin",
  tools: {
    /**
     * Creates a new post on linkedin for the authenticated user or an organization they manage; ensure the user has necessary permissions if posting for an organization.
     */
    CREATE_LINKED_IN_POST: "LINKEDIN_CREATE_LINKED_IN_POST",
    /**
     * Deletes a specific linkedin post (share) by its unique `share id`, which must correspond to an existing share.
     */
    DELETE_LINKED_IN_POST: "LINKEDIN_DELETE_LINKED_IN_POST",
    /**
     * Retrieves organizations where the authenticated user has specific roles (acls), to determine their management or content posting capabilities for linkedin company pages.
     */
    GET_COMPANY_INFO: "LINKEDIN_GET_COMPANY_INFO",
    /**
     * Fetches the authenticated linkedin user's profile, notably including the 'author id' required for attributing content such as posts or articles.
     */
    GET_MY_INFO: "LINKEDIN_GET_MY_INFO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LINKEDIN".
 */
export type LINKEDIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LINKEDIN".
 */
export type LINKEDIN_TRIGGER_EVENTS = {}
