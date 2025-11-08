// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_CREATE_GROUP tool input.
 */
type SAFETYCULTURE_CREATE_GROUP_INPUT = {
  /**
   * Name
   * @description The name of the group to be created.
   */
  name?: string;
};

/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_CREATE_GROUP tool output.
 */
type SAFETYCULTURE_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created group.
       */
      id: string;
      /**
       * Name
       * @description Name of the created group.
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
 * Type of SAFETYCULTURE's SAFETYCULTURE_GET_SIGNATURE_SECRET tool input.
 */
type SAFETYCULTURE_GET_SIGNATURE_SECRET_INPUT = object;

/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_GET_SIGNATURE_SECRET tool output.
 */
type SAFETYCULTURE_GET_SIGNATURE_SECRET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description The secret token used for HMAC-SHA256 signature verification of incoming webhooks.
       */
      token: string;
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
 * Type of SAFETYCULTURE's SAFETYCULTURE_LIST_GROUPS tool input.
 */
type SAFETYCULTURE_LIST_GROUPS_INPUT = object;

/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_LIST_GROUPS tool output.
 */
type SAFETYCULTURE_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description Array of group objects in the organization.
       */
      groups: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the group was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Description of the group.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the group.
           */
          id: string;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the group was last updated.
           * @default null
           */
          updated_at: string | null;
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
 * Type of SAFETYCULTURE's SAFETYCULTURE_LIST_TEMPLATES tool input.
 */
type SAFETYCULTURE_LIST_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of templates to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of templates to skip before starting to return results.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_LIST_TEMPLATES tool output.
 */
type SAFETYCULTURE_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description Array of template objects available in the organization.
       */
      templates: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the template was created.
           */
          created_at: string;
          /**
           * Description
           * @description Description of the template.
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the template.
           */
          id: string;
          /**
           * Modified At
           * @description ISO 8601 timestamp when the template was last modified.
           */
          modified_at: string;
          /**
           * Name
           * @description Name of the template.
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
 * Type of SAFETYCULTURE's SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET tool input.
 */
type SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET_INPUT = object;

/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET tool output.
 */
type SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description The newly generated secret token for signing webhook payloads.
       */
      token: string;
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
 * Type of SAFETYCULTURE's SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS tool input.
 */
type SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS_INPUT = {
  /**
   * Archived
   * @description Include archived inspections if true, exclude if false.
   * @default null
   */
  archived: boolean | null;
  /**
   * Completed
   * @description Filter inspections by completion status; true for completed, false for incomplete.
   * @default null
   */
  completed: boolean | null;
  /**
   * Field
   * @description Fields to include in the response. Must include at least one of 'audit_id', 'modified_at', 'template_id'.
   */
  field?: string[];
  /**
   * Limit
   * @description Maximum number of inspections to return.
   * @default null
   */
  limit: number | null;
  /**
   * Modified After
   * @description Return inspections modified after this ISO 8601 timestamp.
   * @default null
   */
  modified_after: string | null;
  /**
   * Modified Before
   * @description Return inspections modified before this ISO 8601 timestamp.
   * @default null
   */
  modified_before: string | null;
  /**
   * Order
   * @description Sort order of returned inspections: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Owner
   * @description Filter by ownership: 'me' for inspections owned by the requester, 'other' for shared inspections.
   * @default null
   * @enum {string|null}
   */
  owner: "me" | "other" | null;
  /**
   * Template
   * @description Filter inspections by one or more template IDs.
   * @default null
   */
  template: string[] | null;
};

/**
 * Type of SAFETYCULTURE's SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS tool output.
 */
type SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audits
       * @description List of inspections matching the search criteria.
       */
      audits: {
          /**
           * Audit Id
           * @description Unique identifier of the inspection.
           */
          audit_id: string;
          /**
           * Modified At
           * @description Timestamp when the inspection was last modified (ISO 8601).
           */
          modified_at: string;
          /**
           * Template Id
           * @description Identifier of the template used for the inspection, if requested.
           * @default null
           */
          template_id: string | null;
      }[];
      /**
       * Count
       * @description Number of inspections returned.
       */
      count: number;
      /**
       * Total
       * @description Total number of inspections matching the criteria.
       */
      total: number;
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
 * Type map of all available tool input types for toolkit "SAFETYCULTURE".
 */
export type SAFETYCULTURE_TOOL_INPUTS = {
  CREATE_GROUP: SAFETYCULTURE_CREATE_GROUP_INPUT
  GET_SIGNATURE_SECRET: SAFETYCULTURE_GET_SIGNATURE_SECRET_INPUT
  LIST_GROUPS: SAFETYCULTURE_LIST_GROUPS_INPUT
  LIST_TEMPLATES: SAFETYCULTURE_LIST_TEMPLATES_INPUT
  REGENERATE_SIGNATURE_SECRET: SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET_INPUT
  SEARCH_MODIFIED_INSPECTIONS: SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SAFETYCULTURE".
 */
export type SAFETYCULTURE_TOOL_OUTPUTS = {
  CREATE_GROUP: SAFETYCULTURE_CREATE_GROUP_OUTPUT
  GET_SIGNATURE_SECRET: SAFETYCULTURE_GET_SIGNATURE_SECRET_OUTPUT
  LIST_GROUPS: SAFETYCULTURE_LIST_GROUPS_OUTPUT
  LIST_TEMPLATES: SAFETYCULTURE_LIST_TEMPLATES_OUTPUT
  REGENERATE_SIGNATURE_SECRET: SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET_OUTPUT
  SEARCH_MODIFIED_INSPECTIONS: SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SAFETYCULTURE toolkit.
 */
export const SAFETYCULTURE = {
  slug: "safetyculture",
  tools: {
    /**
     * Tool to create a new group. use when organizing users by roles or functions. use after confirming organization details.
     */
    CREATE_GROUP: "SAFETYCULTURE_CREATE_GROUP",
    /**
     * Tool to retrieve the current webhook signature secret. use after setting up webhooks to verify incoming webhook requests with hmac-sha256.
     */
    GET_SIGNATURE_SECRET: "SAFETYCULTURE_GET_SIGNATURE_SECRET",
    /**
     * Tool to list all groups in the organization. use after confirming "platform management: groups" permissions have been granted.
     */
    LIST_GROUPS: "SAFETYCULTURE_LIST_GROUPS",
    /**
     * Tool to list templates in the safetyculture account. use when you need to retrieve available templates for audits or inspections.
     */
    LIST_TEMPLATES: "SAFETYCULTURE_LIST_TEMPLATES",
    /**
     * Tool to generate a new webhook signature secret. use when rotating webhook signing secrets after confirming there are no in-flight webhook deliveries.
     */
    REGENERATE_SIGNATURE_SECRET: "SAFETYCULTURE_REGENERATE_SIGNATURE_SECRET",
    /**
     * Tool to retrieve inspections modified since a given timestamp. use when polling for new or updated inspections after your last sync.
     */
    SEARCH_MODIFIED_INSPECTIONS: "SAFETYCULTURE_SEARCH_MODIFIED_INSPECTIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SAFETYCULTURE".
 */
export type SAFETYCULTURE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SAFETYCULTURE".
 */
export type SAFETYCULTURE_TRIGGER_EVENTS = {}
