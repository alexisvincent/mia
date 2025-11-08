// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SHORT_MENU's SHORT_MENU_CREATE_LINK tool input.
 */
type SHORT_MENU_CREATE_LINK_INPUT = {
  /**
   * Description
   * @description An optional note or description for this link
   * @default null
   */
  description: string | null;
  /**
   * Domain
   * @description Custom domain to use for the generated short link
   * @default null
   */
  domain: string | null;
  /**
   * Expires At
   * @description ISO8601 timestamp when the link should expire
   * @default null
   */
  expires_at: string | null;
  /**
   * Password
   * @description Password to protect the link (plain text)
   * @default null
   */
  password: string | null;
  /**
   * Pixel Ids
   * @description Analytics pixel identifiers to attach to the link
   * @default null
   */
  pixel_ids: string[] | null;
  /**
   * Slug
   * @description Custom slug for the link (alphanumeric, unique). If not provided, the system will auto-generate one.
   * @default null
   */
  slug: string | null;
  /**
   * Tags
   * @description List of tags to categorize the link
   * @default null
   */
  tags: string[] | null;
  /**
   * Url
   * @description The original URL to be shortened
   */
  url?: string;
};

/**
 * Type of SHORT_MENU's SHORT_MENU_CREATE_LINK tool output.
 */
type SHORT_MENU_CREATE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Link creation date/time
       */
      created_at: string;
      /**
       * Description
       * @description Link description or note
       * @default null
       */
      description: string | null;
      /**
       * Domain
       * @description Domain used for the link
       */
      domain: string;
      /**
       * Expires At
       * @description Expiration date/time of the link
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description Unique ID of the created link
       */
      id: string;
      /**
       * Password Enabled
       * @description Whether the link is password protected
       */
      password_enabled: boolean;
      /**
       * Short Url
       * @description The shortened URL
       */
      short_url: string;
      /**
       * Slug
       * @description The custom or auto-generated slug
       */
      slug: string;
      /**
       * Tags
       * @description Tags assigned to the link
       */
      tags: string[];
      /**
       * Url
       * @description The original URL
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
 * Type of SHORT_MENU's SHORT_MENU_GET_DOMAINS tool input.
 */
type SHORT_MENU_GET_DOMAINS_INPUT = object;

/**
 * Type of SHORT_MENU's SHORT_MENU_GET_DOMAINS tool output.
 */
type SHORT_MENU_GET_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of available custom domains
       */
      domains: {
          /**
           * Active
           * @description Indicates if domain is active
           */
          active: boolean;
          /**
           * Default
           * @description Indicates if domain is default
           */
          default: boolean;
          /**
           * Domain
           * @description Custom domain name
           */
          domain: string;
          /**
           * Id
           * @description Unique identifier for the domain
           */
          id: number;
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
 * Type map of all available tool input types for toolkit "SHORT_MENU".
 */
export type SHORT_MENU_TOOL_INPUTS = {
  CREATE_LINK: SHORT_MENU_CREATE_LINK_INPUT
  GET_DOMAINS: SHORT_MENU_GET_DOMAINS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SHORT_MENU".
 */
export type SHORT_MENU_TOOL_OUTPUTS = {
  CREATE_LINK: SHORT_MENU_CREATE_LINK_OUTPUT
  GET_DOMAINS: SHORT_MENU_GET_DOMAINS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SHORT_MENU toolkit.
 */
export const SHORT_MENU = {
  slug: "short_menu",
  tools: {
    /**
     * Tool to create a new shortened link. use when you need to generate a short url with optional custom parameters like domain, tags, slug, etc. use after gathering the target url and any metadata.
     */
    CREATE_LINK: "SHORT_MENU_CREATE_LINK",
    /**
     * Tool to retrieve available custom domains. use when you need to display or select a domain for shortening links.
     */
    GET_DOMAINS: "SHORT_MENU_GET_DOMAINS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SHORT_MENU".
 */
export type SHORT_MENU_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SHORT_MENU".
 */
export type SHORT_MENU_TRIGGER_EVENTS = {}
