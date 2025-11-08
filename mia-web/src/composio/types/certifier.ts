// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CERTIFIER's CERTIFIER_CERTIFIER_SEND_CREDENTIAL tool input.
 */
type CERTIFIER_CERTIFIER_SEND_CREDENTIAL_INPUT = {
  /**
   * Delivery Method
   * @description Delivery method; only 'email' is supported.
   * @constant
   */
  deliveryMethod?: "email";
  /**
   * Id
   * @description The unique identifier of the credential to send.
   */
  id?: string;
};

/**
 * Type of CERTIFIER's CERTIFIER_CERTIFIER_SEND_CREDENTIAL tool output.
 */
type CERTIFIER_CERTIFIER_SEND_CREDENTIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Delivery Method
       * @description The method used to deliver the credential, 'email'.
       * @constant
       */
      deliveryMethod: "email";
      /**
       * Id
       * @description Unique identifier of the credential.
       */
      id: string;
      /**
       * Recipient
       * @description Information about the recipient.
       */
      recipient: {
          /**
           * Email
           * Format: email
           * @description The recipient's email address
           */
          email: unknown;
          /**
           * Name
           * @description The recipient's full name
           */
          name: string;
      };
      /**
       * Sent At
       * @description Timestamp (ISO 8601) when the credential was sent.
       */
      sentAt: string;
      /**
       * Status
       * @description Current status of the credential.
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
 * Type of CERTIFIER's CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL tool input.
 */
type CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL_INPUT = {
  /**
   * Custom Attributes
   * @description Key-value map of custom attributes (tag → text value).
   * @default null
   */
  customAttributes: {
      [key: string]: string;
  } | null;
  /**
   * Expiry Date
   * Format: date
   * @description ISO 8601 date string when the credential expires (YYYY-MM-DD).
   * @default null
   */
  expiryDate: unknown;
  /**
   * Group Id
   * @description The unique identifier of the group to which the credential belongs.
   */
  groupId?: string;
  /**
   * Issue Date
   * Format: date
   * @description ISO 8601 date string when the credential is issued (YYYY-MM-DD).
   * @default null
   */
  issueDate: unknown;
  /**
   * Recipient
   * @description Recipient details: name and email.
   */
  recipient?: {
      [key: string]: string;
  };
};

/**
 * Type of CERTIFIER's CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL tool output.
 */
type CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Key-value map of the credential's attributes.
       */
      attributes: {
          [key: string]: string;
      };
      /**
       * Created At
       * @description The date and time when the credential was created.
       */
      createdAt: string;
      /**
       * Custom Attributes
       * @description Key-value map of custom attributes.
       */
      customAttributes: {
          [key: string]: string;
      };
      /**
       * Expiry Date
       * @description The date the credential expires.
       * @default null
       */
      expiryDate: string | null;
      /**
       * Group Id
       * @description The unique identifier of the group to which the credential belongs.
       */
      groupId: string;
      /**
       * Id
       * @description The unique identifier of the created credential.
       */
      id: string;
      /**
       * Issue Date
       * @description The date the credential was issued.
       */
      issueDate: string;
      /**
       * Public Id
       * @description The external unique identifier of the credential.
       */
      publicId: string;
      /**
       * Recipient
       * @description Object containing recipient details.
       */
      recipient: {
          [key: string]: string;
      };
      /**
       * Status
       * @description The status of the credential.
       * @enum {string}
       */
      status: "draft" | "scheduled" | "issued" | "expired";
      /**
       * Updated At
       * @description The date and time when the credential was last updated.
       */
      updatedAt: string;
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
 * Type of CERTIFIER's CERTIFIER_LIST_CREDENTIALS tool input.
 */
type CERTIFIER_LIST_CREDENTIALS_INPUT = {
  /**
   * Cursor
   * @description Cursor from previous response to fetch subsequent pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of credentials to return. Defaults to 20.
   * @default 20
   */
  limit: number;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_CREDENTIALS tool output.
 */
type CERTIFIER_LIST_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Array of credential objects
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when created
       */
      createdAt: string;
      /**
       * Custom Attributes
       * @description Custom attributes set by the issuer
       */
      customAttributes?: {
          [key: string]: unknown;
      };
      /**
       * Expiry Date
       * @description ISO8601 timestamp when credential expires, if any
       * @default null
       */
      expiryDate: string | null;
      /**
       * Group Id
       * @description Group ID the credential belongs to
       */
      groupId: string;
      /**
       * Id
       * @description Internal unique ID of the credential
       */
      id: string;
      /**
       * Issue Date
       * @description ISO8601 timestamp when issued
       */
      issueDate: string;
      /**
       * Public Id
       * @description Public identifier exposed to clients
       */
      publicId: string;
      /**
       * Recipient
       * @description Recipient JSON object
       */
      recipient: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Current lifecycle status of the credential
       */
      status: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when last updated
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination cursors for navigation
   */
  pagination?: {
      /**
       * Next
       * @description Cursor to retrieve the next page; null for last page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor to retrieve the previous page; null for first page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_CREDENTIAL_INTERACTIONS tool input.
 */
type CERTIFIER_LIST_CREDENTIAL_INTERACTIONS_INPUT = {
  /**
   * Credential Id
   * @description Filter interactions by this credential's ID.
   * @default null
   */
  credentialId: string | null;
  /**
   * Cursor
   * @description Cursor from previous response to fetch subsequent pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of interactions to return. Defaults to 20.
   * @default 20
   */
  limit: number | null;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_CREDENTIAL_INTERACTIONS tool output.
 */
type CERTIFIER_LIST_CREDENTIAL_INTERACTIONS_OUTPUT = {
  /**
   * Data
   * @description List of credential interaction objects.
   */
  data?: {
      /**
       * Credential Id
       * @description ID of the credential associated with this interaction.
       */
      credentialId: string;
      /**
       * Event Type
       * @description Type of the interaction event.
       * @enum {string}
       */
      eventType: "credential_viewed" | "credential_shared_to_linkedin" | "credential_added_to_linkedin_profile" | "credential_shared_to_facebook" | "credential_shared_to_twitter" | "credential_shared_to_messenger" | "credential_shared_to_whatsapp" | "credential_shared_to_pinterest" | "credential_shared_to_telegram" | "credential_shared_to_weibo" | "credential_downloaded" | "credential_link_copied" | "credential_verified";
      /**
       * Id
       * @description Unique identifier of the interaction event.
       */
      id: string;
      /**
       * Triggered At
       * @description ISO8601 timestamp when this interaction occurred.
       */
      triggeredAt: string;
      /**
       * Triggered By
       * @description Actor that triggered this interaction event.
       * @enum {string}
       */
      triggeredBy: "recipient" | "guest";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination cursors for result navigation.
   */
  pagination?: {
      /**
       * Next
       * @description Cursor to retrieve the next page; null for last page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor to retrieve the previous page; null for first page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_DESIGNS tool input.
 */
type CERTIFIER_LIST_DESIGNS_INPUT = {
  /**
   * Cursor
   * @description Cursor from a previous response to fetch the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of designs to return. Defaults to 20. Must be between 1 and 100.
   * @default 20
   */
  limit: number;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_DESIGNS tool output.
 */
type CERTIFIER_LIST_DESIGNS_OUTPUT = {
  /**
   * Data
   * @description Array of design objects.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the design.
       */
      id: string;
      /**
       * Name
       * @description Name of the design.
       */
      name: string;
      /**
       * Type
       * @description Type of the design; either 'certificate' or 'badge'.
       * @enum {string}
       */
      type: "certificate" | "badge";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination cursors for navigation.
   */
  pagination?: {
      /**
       * Next
       * @description Cursor to retrieve the next page; null for last page.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor to retrieve the previous page; null for first page.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_GROUPS tool input.
 */
type CERTIFIER_LIST_GROUPS_INPUT = {
  /**
   * Cursor
   * @description Cursor from a previous response to fetch the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of groups to return. Defaults to 20. Must be between 1 and 100.
   * @default 20
   */
  limit: number;
};

/**
 * Type of CERTIFIER's CERTIFIER_LIST_GROUPS tool output.
 */
type CERTIFIER_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Array of group objects.
   */
  data?: {
      /**
       * Badge Design Id
       * @description The unique badge design's identifier. At least one of certificateDesignId and badgeDesignId is required.
       * @default null
       */
      badgeDesignId: string | null;
      /**
       * Certificate Design Id
       * @description The unique certificate design's identifier. At least one of certificateDesignId and badgeDesignId is required.
       * @default null
       */
      certificateDesignId: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when this group was created.
       */
      createdAt: string;
      /**
       * Id
       * @description The unique group's identifier.
       */
      id: string;
      /**
       * Learning Event Url
       * @description The learning event's URL that is shown in the digital wallet.
       * @default null
       */
      learningEventUrl: string | null;
      /**
       * Name
       * @description The group's name that is used as [group.name] attribute later on.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when this group was last updated.
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination cursors for navigation.
   */
  pagination?: {
      /**
       * Next
       * @description Cursor to retrieve the next page; null for last page.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor to retrieve the previous page; null for first page.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CERTIFIER".
 */
export type CERTIFIER_TOOL_INPUTS = {
  CERTIFIER_SEND_CREDENTIAL: CERTIFIER_CERTIFIER_SEND_CREDENTIAL_INPUT
  CREATE_ISSUE_SEND_CREDENTIAL: CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL_INPUT
  LIST_CREDENTIALS: CERTIFIER_LIST_CREDENTIALS_INPUT
  LIST_CREDENTIAL_INTERACTIONS: CERTIFIER_LIST_CREDENTIAL_INTERACTIONS_INPUT
  LIST_DESIGNS: CERTIFIER_LIST_DESIGNS_INPUT
  LIST_GROUPS: CERTIFIER_LIST_GROUPS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CERTIFIER".
 */
export type CERTIFIER_TOOL_OUTPUTS = {
  CERTIFIER_SEND_CREDENTIAL: CERTIFIER_CERTIFIER_SEND_CREDENTIAL_OUTPUT
  CREATE_ISSUE_SEND_CREDENTIAL: CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL_OUTPUT
  LIST_CREDENTIALS: CERTIFIER_LIST_CREDENTIALS_OUTPUT
  LIST_CREDENTIAL_INTERACTIONS: CERTIFIER_LIST_CREDENTIAL_INTERACTIONS_OUTPUT
  LIST_DESIGNS: CERTIFIER_LIST_DESIGNS_OUTPUT
  LIST_GROUPS: CERTIFIER_LIST_GROUPS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CERTIFIER toolkit.
 */
export const CERTIFIER = {
  slug: "certifier",
  tools: {
    /**
     * Tool to send a published credential via email. use after confirming the credential is published.
     */
    CERTIFIER_SEND_CREDENTIAL: "CERTIFIER_CERTIFIER_SEND_CREDENTIAL",
    /**
     * Tool to create, issue, and send a credential in a single request. use when group id and recipient details are ready.
     */
    CREATE_ISSUE_SEND_CREDENTIAL: "CERTIFIER_CREATE_ISSUE_SEND_CREDENTIAL",
    /**
     * Tool to list credentials. use after authentication to retrieve paginated credentials.
     */
    LIST_CREDENTIALS: "CERTIFIER_LIST_CREDENTIALS",
    /**
     * Tool to list credential interactions. use when you need to retrieve interaction events for a specific credential, with optional filtering and pagination.
     */
    LIST_CREDENTIAL_INTERACTIONS: "CERTIFIER_LIST_CREDENTIAL_INTERACTIONS",
    /**
     * Tool to list all designs. use after authentication to retrieve certificate and badge designs with pagination.
     */
    LIST_DESIGNS: "CERTIFIER_LIST_DESIGNS",
    /**
     * Tool to list all groups. use when you need to retrieve groups with pagination (limit and cursor).
     */
    LIST_GROUPS: "CERTIFIER_LIST_GROUPS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CERTIFIER".
 */
export type CERTIFIER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CERTIFIER".
 */
export type CERTIFIER_TRIGGER_EVENTS = {}
