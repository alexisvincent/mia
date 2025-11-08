// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CURATED's CURATED_CURATED_CREATE_DRAFT_ISSUE tool input.
 */
type CURATED_CURATED_CREATE_DRAFT_ISSUE_INPUT = {
  /**
   * Editor Note
   * @description Optional note from the editor
   * @default null
   */
  editor_note: string | null;
  /**
   * Issue Number
   * @description Sequential number for the issue; if omitted, the next available number is used
   * @default null
   */
  issue_number: number | null;
  /**
   * Publication Id
   * @description ID of the publication where the draft issue will be created
   */
  publication_id?: string;
  /**
   * Title
   * @description Title of the new draft issue
   */
  title?: string;
};

/**
 * Type of CURATED's CURATED_CURATED_CREATE_DRAFT_ISSUE tool output.
 */
type CURATED_CURATED_CREATE_DRAFT_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the draft issue was created
       */
      created_at: string;
      /**
       * Editor Note
       * @description Editor note in the issue
       * @default null
       */
      editor_note: string | null;
      /**
       * Id
       * @description Unique identifier of the draft issue
       */
      id: string;
      /**
       * Issue Number
       * @description Assigned issue number
       */
      issue_number: number;
      /**
       * Publication Id
       * @description Identifier of the publication
       */
      publication_id: string;
      /**
       * Status
       * @description Status of the issue, expected to be 'draft'
       */
      status: string;
      /**
       * Title
       * @description Title of the issue
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the draft issue was last updated
       */
      updated_at: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CURATED's CURATED_CURATED_CREATE_LINK tool input.
 */
type CURATED_CURATED_CREATE_LINK_INPUT = {
  /**
   * Category
   * @description Optional category for the collected link, e.g., 'code'
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description Optional description for the collected link
   * @default null
   */
  description: string | null;
  /**
   * Image
   * @description Optional image URL for the collected link
   * @default null
   */
  image: string | null;
  /**
   * Publication Id
   * @description ID of the publication to which the link will be added
   */
  publication_id?: number;
  /**
   * Title
   * @description Optional title of the collected link
   * @default null
   */
  title: string | null;
  /**
   * Url
   * @description URL for the collected link
   */
  url?: string;
};

/**
 * Type of CURATED's CURATED_CURATED_CREATE_LINK tool output.
 */
type CURATED_CURATED_CREATE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Category assigned to the link
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description Timestamp when the link was created in ISO8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the link
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID of the newly created link
       */
      id: number;
      /**
       * Image
       * @description Image URL for the link
       * @default null
       */
      image: string | null;
      /**
       * Publication Id
       * @description ID of the publication that owns this link
       */
      publication_id: number;
      /**
       * Title
       * @description Title of the link
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Timestamp when the link was last updated in ISO8601 format
       */
      updated_at: string;
      /**
       * Url
       * @description URL of the link
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
 * Type of CURATED's CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS tool input.
 */
type CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS_INPUT = {
  /**
   * Page
   * @description Page number of results to return (defaults to 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (default 100, maximum 100)
   * @default null
   */
  per_page: number | null;
  /**
   * Publication Id
   * @description The unique ID of the publication whose subscribers are being listed
   */
  publication_id?: string;
};

/**
 * Type of CURATED's CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS tool output.
 */
type CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscribers
       * @description List of email subscribers for the publication
       */
      subscribers: {
          /**
           * Added At
           * Format: date-time
           * @description ISO 8601 timestamp when the subscriber was added
           */
          added_at: string;
          /**
           * Email
           * @description Subscriber's email address
           */
          email: string;
          /**
           * First Name
           * @description Subscriber's first name, if provided
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier for the subscriber
           */
          id: string;
          /**
           * Last Name
           * @description Subscriber's last name, if provided
           * @default null
           */
          last_name: string | null;
          /**
           * Unsubscribed At
           * Format: date-time
           * @description ISO 8601 timestamp when user unsubscribed, or null if still subscribed
           * @default null
           */
          unsubscribed_at: string | null;
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
 * Type of CURATED's CURATED_CURATED_LIST_PUBLICATIONS tool input.
 */
type CURATED_CURATED_LIST_PUBLICATIONS_INPUT = object;

/**
 * Type of CURATED's CURATED_CURATED_LIST_PUBLICATIONS tool output.
 */
type CURATED_CURATED_LIST_PUBLICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publications
       * @description List of publications accessible by the API key
       */
      publications: {
          /**
           * Id
           * @description The ID of the publication
           */
          id: number;
          /**
           * Key
           * @description The Curated subdomain key for the publication
           */
          key: string;
          /**
           * Name
           * @description The name of the publication
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
 * Type of CURATED's CURATED_LIST_CATEGORIES tool input.
 */
type CURATED_LIST_CATEGORIES_INPUT = {
  /**
   * Publication Id
   * @description The ID of the publication for which to retrieve categories.
   */
  publication_id?: string;
};

/**
 * Type of CURATED's CURATED_LIST_CATEGORIES tool output.
 */
type CURATED_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of categories returned for the publication.
       */
      categories: {
          /**
           * Code
           * @description The tag for the category (as defined in settings).
           */
          code: string;
          /**
           * Limit
           * @description If sponsored, the number of sponsored links per issue for this category.
           * @default null
           */
          limit: number | null;
          /**
           * Name
           * @description The human-readable name of the category.
           */
          name: string;
          /**
           * Sponsored
           * @description True if this is a sponsor category.
           */
          sponsored: boolean;
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
 * Type of CURATED's CURATED_LIST_ISSUES tool input.
 */
type CURATED_LIST_ISSUES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page for pagination, must be >= 1
   * @default null
   */
  per_page: number | null;
  /**
   * Publication Id
   * @description The ID of the publication for which to list issues.
   */
  publication_id?: string;
};

/**
 * Type of CURATED's CURATED_LIST_ISSUES tool output.
 */
type CURATED_LIST_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issues
       * @description List of issues for the publication.
       */
      issues: {
          /**
           * Id
           * @description Unique identifier of the issue.
           */
          id: number;
          /**
           * Issue
           * @description Issue number within the volume.
           */
          issue: number;
          /**
           * Number Of Links
           * @description Number of links contained in this issue.
           */
          number_of_links: number;
          /**
           * Published At
           * @description Publication date in ISO 8601 format.
           */
          published_at: string;
          /**
           * Title
           * @description Title of the issue.
           */
          title: string;
          /**
           * Url
           * @description URL to view the issue.
           */
          url: string;
          /**
           * Volume
           * @description Volume number of the issue.
           */
          volume: number;
      }[];
      /**
       * Page
       * @description Current page number of the results.
       */
      page: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CURATED".
 */
export type CURATED_TOOL_INPUTS = {
  CURATED_CREATE_DRAFT_ISSUE: CURATED_CURATED_CREATE_DRAFT_ISSUE_INPUT
  CURATED_CREATE_LINK: CURATED_CURATED_CREATE_LINK_INPUT
  CURATED_LIST_EMAIL_SUBSCRIBERS: CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS_INPUT
  CURATED_LIST_PUBLICATIONS: CURATED_CURATED_LIST_PUBLICATIONS_INPUT
  LIST_CATEGORIES: CURATED_LIST_CATEGORIES_INPUT
  LIST_ISSUES: CURATED_LIST_ISSUES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CURATED".
 */
export type CURATED_TOOL_OUTPUTS = {
  CURATED_CREATE_DRAFT_ISSUE: CURATED_CURATED_CREATE_DRAFT_ISSUE_OUTPUT
  CURATED_CREATE_LINK: CURATED_CURATED_CREATE_LINK_OUTPUT
  CURATED_LIST_EMAIL_SUBSCRIBERS: CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS_OUTPUT
  CURATED_LIST_PUBLICATIONS: CURATED_CURATED_LIST_PUBLICATIONS_OUTPUT
  LIST_CATEGORIES: CURATED_LIST_CATEGORIES_OUTPUT
  LIST_ISSUES: CURATED_LIST_ISSUES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CURATED toolkit.
 */
export const CURATED = {
  slug: "curated",
  tools: {
    /**
     * Tool to create a draft issue for a publication. use after confirming the publication id. applies default settings if optional fields are omitted.
     */
    CURATED_CREATE_DRAFT_ISSUE: "CURATED_CURATED_CREATE_DRAFT_ISSUE",
    /**
     * Tool to create a collected link for a publication. use when you want to add a new link (with url, title, etc.) to a publication's collection.
     */
    CURATED_CREATE_LINK: "CURATED_CURATED_CREATE_LINK",
    /**
     * Tool to list all email subscribers for a publication. use after confirming the publication id.
     */
    CURATED_LIST_EMAIL_SUBSCRIBERS: "CURATED_CURATED_LIST_EMAIL_SUBSCRIBERS",
    /**
     * Tool to list all publications accessible by the api key. use when you need to retrieve your publication ids for further api calls. example prompt: "list my publications".
     */
    CURATED_LIST_PUBLICATIONS: "CURATED_CURATED_LIST_PUBLICATIONS",
    /**
     * Tool to list all categories for a publication. use after you have the publication id and need to fetch its categories.
     */
    LIST_CATEGORIES: "CURATED_LIST_CATEGORIES",
    /**
     * Tool to list all issues for a publication. use after you have the publication id and need to fetch its issues (supports pagination).
     */
    LIST_ISSUES: "CURATED_LIST_ISSUES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CURATED".
 */
export type CURATED_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CURATED".
 */
export type CURATED_TRIGGER_EVENTS = {}
