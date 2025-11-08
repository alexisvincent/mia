// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOODBITS's GOODBITS_CREATE_LINK tool input.
 */
type GOODBITS_CREATE_LINK_INPUT = {
  /**
   * Description
   * @description Optional HTML description of the article
   * @default null
   */
  description: string | null;
  /**
   * Fetch Remote Thumbnail Url
   * @description Optional image URL to fetch as thumbnail
   * @default null
   */
  fetch_remote_thumbnail_url: string | null;
  /**
   * Image Candidates
   * @description Optional list of candidate thumbnail image URLs
   * @default null
   */
  image_candidates: string[] | null;
  /**
   * Title
   * @description Optional custom title for the link
   * @default null
   */
  title: string | null;
  /**
   * Url
   * @description The URL of the article to save
   */
  url?: string;
};

/**
 * Type of GOODBITS's GOODBITS_CREATE_LINK tool output.
 */
type GOODBITS_CREATE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Link
       * @description The newly created link object with all its attributes
       */
      link: {
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
 * Type of GOODBITS's GOODBITS_CREATE_SUBSCRIBER tool input.
 */
type GOODBITS_CREATE_SUBSCRIBER_INPUT = {
  /**
   * Subscriber
   * @description Subscriber object containing email and optional name details
   */
  subscriber?: {
      /**
       * Email
       * Format: email
       * @description Email address of the new subscriber
       */
      email: string;
      /**
       * First Name
       * @description First name of the new subscriber
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Last name of the new subscriber
       * @default null
       */
      last_name: string | null;
  };
};

/**
 * Type of GOODBITS's GOODBITS_CREATE_SUBSCRIBER tool output.
 */
type GOODBITS_CREATE_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriber
       * @description Details of the newly created subscriber
       */
      subscriber: {
          /**
           * Email
           * @description The subscriber's email
           */
          email: string;
          /**
           * First Name
           * @description First name returned
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Last name returned
           * @default null
           */
          last_name: string | null;
          /**
           * Name
           * @description Combined name of the subscriber
           */
          name: string;
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
 * Type of GOODBITS's GOODBITS_DELETE_SUBSCRIBER tool input.
 */
type GOODBITS_DELETE_SUBSCRIBER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Subscriber's email address to delete
   */
  email?: string;
};

/**
 * Type of GOODBITS's GOODBITS_DELETE_SUBSCRIBER tool output.
 */
type GOODBITS_DELETE_SUBSCRIBER_OUTPUT = {
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
 * Type of GOODBITS's GOODBITS_GET_NEWSLETTER tool input.
 */
type GOODBITS_GET_NEWSLETTER_INPUT = object;

/**
 * Type of GOODBITS's GOODBITS_GET_NEWSLETTER tool output.
 */
type GOODBITS_GET_NEWSLETTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Newsletter
       * @description Container for newsletter details
       */
      newsletter: {
          /**
           * Id
           * @description Newsletter ID
           */
          id: number;
          /**
           * Name
           * @description Newsletter name
           */
          name: string;
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
 * Type of GOODBITS's GOODBITS_UPDATE_SUBSCRIBER_STATUS tool input.
 */
type GOODBITS_UPDATE_SUBSCRIBER_STATUS_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email of the subscriber to update
   */
  email?: string;
  /**
   * Status
   * @description New status for the subscriber
   * @enum {string}
   */
  status?: "unsubscribed" | "cleaned" | "pending" | "deleted";
};

/**
 * Type of GOODBITS's GOODBITS_UPDATE_SUBSCRIBER_STATUS tool output.
 */
type GOODBITS_UPDATE_SUBSCRIBER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Updated status of the subscriber
       * @enum {string}
       */
      status: "unsubscribed" | "cleaned" | "pending" | "deleted";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GOODBITS".
 */
export type GOODBITS_TOOL_INPUTS = {
  CREATE_LINK: GOODBITS_CREATE_LINK_INPUT
  CREATE_SUBSCRIBER: GOODBITS_CREATE_SUBSCRIBER_INPUT
  DELETE_SUBSCRIBER: GOODBITS_DELETE_SUBSCRIBER_INPUT
  GET_NEWSLETTER: GOODBITS_GET_NEWSLETTER_INPUT
  UPDATE_SUBSCRIBER_STATUS: GOODBITS_UPDATE_SUBSCRIBER_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOODBITS".
 */
export type GOODBITS_TOOL_OUTPUTS = {
  CREATE_LINK: GOODBITS_CREATE_LINK_OUTPUT
  CREATE_SUBSCRIBER: GOODBITS_CREATE_SUBSCRIBER_OUTPUT
  DELETE_SUBSCRIBER: GOODBITS_DELETE_SUBSCRIBER_OUTPUT
  GET_NEWSLETTER: GOODBITS_GET_NEWSLETTER_OUTPUT
  UPDATE_SUBSCRIBER_STATUS: GOODBITS_UPDATE_SUBSCRIBER_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOODBITS toolkit.
 */
export const GOODBITS = {
  slug: "goodbits",
  tools: {
    /**
     * Tool to create a content link in Goodbits Content Library. Use when you have an article URL and optional metadata ready.
     */
    CREATE_LINK: "GOODBITS_CREATE_LINK",
    /**
     * Tool to add a new subscriber to the newsletter. Use after confirming user opt-in.
     */
    CREATE_SUBSCRIBER: "GOODBITS_CREATE_SUBSCRIBER",
    /**
     * Tool to mark a subscriber as deleted. Use when you need to prevent future emails being sent to a subscriber.
     */
    DELETE_SUBSCRIBER: "GOODBITS_DELETE_SUBSCRIBER",
    /**
     * Tool to fetch newsletter identifier and name. Use after authenticating with your API token.
     */
    GET_NEWSLETTER: "GOODBITS_GET_NEWSLETTER",
    /**
     * Tool to update subscriber status. Use when you need to change an existing subscriber’s subscription status by email. Example: "Update the status of john@example.com to unsubscribed"
     */
    UPDATE_SUBSCRIBER_STATUS: "GOODBITS_UPDATE_SUBSCRIBER_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOODBITS".
 */
export type GOODBITS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOODBITS".
 */
export type GOODBITS_TRIGGER_EVENTS = {}
