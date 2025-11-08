// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEMPLATED's TEMPLATED_ADD_TAGS_TO_TEMPLATE tool input.
 */
type TEMPLATED_ADD_TAGS_TO_TEMPLATE_INPUT = {
  /**
   * Tags
   * @description List of tags to add to the template; existing tags are preserved
   */
  tags?: string[];
  /**
   * Template Id
   * @description The unique identifier of the template to which tags will be added
   */
  template_id?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_ADD_TAGS_TO_TEMPLATE tool output.
 */
type TEMPLATED_ADD_TAGS_TO_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the template was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the template
       */
      id: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Tags
       * @description Complete list of tags on the template
       */
      tags: string[];
      /**
       * Updated At
       * @description ISO-8601 timestamp when the template was last updated
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
 * Type of TEMPLATED's TEMPLATED_CLONE_TEMPLATE_ACTION tool input.
 */
type TEMPLATED_CLONE_TEMPLATE_ACTION_INPUT = {
  /**
   * Description
   * @description Description for the cloned template
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description ID of the template to clone
   */
  id?: string;
  /**
   * Name
   * @description Name for the cloned template
   */
  name?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_CLONE_TEMPLATE_ACTION tool output.
 */
type TEMPLATED_CLONE_TEMPLATE_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the cloned template
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description ID of the newly cloned template
       */
      id: string;
      /**
       * Modified At
       * @description ISO 8601 timestamp when the template was last modified
       */
      modified_at: string;
      /**
       * Name
       * @description Name of the cloned template
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
 * Type of TEMPLATED's TEMPLATED_CREATE_RENDER tool input.
 */
type TEMPLATED_CREATE_RENDER_INPUT = {
  /**
   * File Name
   * @description File name for the rendered output.
   * @default null
   */
  file_name: string | null;
  /**
   * Output Format
   * @description Desired output file format. Supported: 'pdf', 'png'.
   * @default null
   * @enum {string|null}
   */
  output_format: "pdf" | "png" | null;
  /**
   * Template Id
   * @description ID of the template to render.
   */
  template_id?: string;
  /**
   * Variables
   * @description Key-value pairs for template variables.
   */
  variables?: {
      [key: string]: unknown;
  };
  /**
   * Webhook Url
   * Format: uri
   * @description Webhook URL to receive completion notification.
   * @default null
   */
  webhook_url: unknown;
};

/**
 * Type of TEMPLATED's TEMPLATED_CREATE_RENDER tool output.
 */
type TEMPLATED_CREATE_RENDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the render was created.
       */
      created_at: string;
      /**
       * File Name
       * @description Name of the output file.
       */
      file_name: string;
      /**
       * File Url
       * @description URL for the rendered file (if completed synchronously).
       * @default null
       */
      file_url: string | null;
      /**
       * Id
       * @description The ID of the render job.
       */
      id: string;
      /**
       * Output Format
       * @description Output file format.
       */
      output_format: string;
      /**
       * Status
       * @description Status of the render job.
       */
      status: string;
      /**
       * Template Id
       * @description ID of the used template.
       */
      template_id: string;
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
 * Type of TEMPLATED's TEMPLATED_DELETE_TEMPLATE tool input.
 */
type TEMPLATED_DELETE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the template to delete.
   */
  id?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_DELETE_TEMPLATE tool output.
 */
type TEMPLATED_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the result of the delete action.
       */
      message: string;
      /**
       * Status
       * @description Indicates success ('success') or error.
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
 * Type of TEMPLATED's TEMPLATED_GET_ACCOUNT_INFORMATION tool input.
 */
type TEMPLATED_GET_ACCOUNT_INFORMATION_INPUT = object;

/**
 * Type of TEMPLATED's TEMPLATED_GET_ACCOUNT_INFORMATION tool output.
 */
type TEMPLATED_GET_ACCOUNT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Account creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description Account unique identifier
       */
      id: string;
      /**
       * Name
       * @description User's name
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last update timestamp in ISO 8601 format
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
 * Type of TEMPLATED's TEMPLATED_LIST_ALL_TEMPLATES tool input.
 */
type TEMPLATED_LIST_ALL_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of templates per page (must be >= 1).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of TEMPLATED's TEMPLATED_LIST_ALL_TEMPLATES tool output.
 */
type TEMPLATED_LIST_ALL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Paging details for the results.
       */
      pagination: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of templates returned per page.
           */
          per_page: number;
          /**
           * Total
           * @description Total number of templates across all pages.
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Templates
       * @description List of retrieved templates.
       */
      templates: ({
          /**
           * Description
           * @description Description of the template.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the template.
           */
          id: string;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of TEMPLATED's TEMPLATED_LIST_TEMPLATE_RENDERS tool input.
 */
type TEMPLATED_LIST_TEMPLATE_RENDERS_INPUT = {
  /**
   * Id
   * @description ID of the template to list renders for
   */
  id?: string;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of renders per page, between 1 and 100
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of TEMPLATED's TEMPLATED_LIST_TEMPLATE_RENDERS tool output.
 */
type TEMPLATED_LIST_TEMPLATE_RENDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of renders across all pages
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of render objects on this page
       */
      results: {
          /**
           * Completed At
           * @description ISO8601 timestamp when rendering finished, if applicable
           * @default null
           */
          completed_at: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the render was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the render
           */
          id: string;
          /**
           * Output Url
           * @description URL to the rendered output, if available
           * @default null
           */
          output_url: string | null;
          /**
           * Status
           * @description Current status of the render
           */
          status: string;
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
 * Type of TEMPLATED's TEMPLATED_REMOVE_TEMPLATE_TAGS tool input.
 */
type TEMPLATED_REMOVE_TEMPLATE_TAGS_INPUT = {
  /**
   * Tags
   * @description List of tag names to remove from the template
   */
  tags?: string[];
  /**
   * Template Id
   * @description Unique identifier of the template to modify
   */
  template_id?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_REMOVE_TEMPLATE_TAGS tool output.
 */
type TEMPLATED_REMOVE_TEMPLATE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors encountered during tag removal
       */
      errors: {
          /**
           * Message
           * @description Error message explaining why the tag removal failed
           */
          message: string;
          /**
           * Tag
           * @description Tag name that failed to be removed
           */
          tag: string;
      }[];
      /**
       * Removed Tags
       * @description List of tags that were successfully removed
       */
      removed_tags: string[];
      /**
       * Success
       * @description Indicates if the tag removal operation succeeded
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
 * Type of TEMPLATED's TEMPLATED_RETRIEVE_RENDER tool input.
 */
type TEMPLATED_RETRIEVE_RENDER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the render to retrieve
   */
  id?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_RETRIEVE_RENDER tool output.
 */
type TEMPLATED_RETRIEVE_RENDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the render was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the render
       */
      id: string;
      /**
       * Inputs
       * @description Input data used for rendering
       */
      inputs: {
          [key: string]: unknown;
      };
      /**
       * Result Url
       * @description URL to access the rendered output if available
       * @default null
       */
      result_url: string | null;
      /**
       * Status
       * @description Current status of the render, e.g., 'pending', 'completed'
       */
      status: string;
      /**
       * Template Id
       * @description ID of the template used for the render
       */
      template_id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the render was last updated
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
 * Type of TEMPLATED's TEMPLATED_RETRIEVE_TEMPLATE tool input.
 */
type TEMPLATED_RETRIEVE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the template to retrieve
   */
  id?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_RETRIEVE_TEMPLATE tool output.
 */
type TEMPLATED_RETRIEVE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Template content or body
       */
      content: string;
      /**
       * Created At
       * Format: date-time
       * @description ISO-8601 timestamp when the template was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the template
       */
      description: string;
      /**
       * Id
       * @description Unique identifier for the template
       */
      id: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO-8601 timestamp when the template was last updated
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
 * Type of TEMPLATED's TEMPLATED_UPDATE_TEMPLATE_TAGS tool input.
 */
type TEMPLATED_UPDATE_TEMPLATE_TAGS_INPUT = {
  /**
   * Tags
   * @description List of tags to assign to the template, replacing all existing tags
   */
  tags?: string[];
  /**
   * Template Id
   * @description The unique identifier of the template to update tags for
   */
  template_id?: string;
};

/**
 * Type of TEMPLATED's TEMPLATED_UPDATE_TEMPLATE_TAGS tool output.
 */
type TEMPLATED_UPDATE_TEMPLATE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description Updated list of tags assigned to the template
       */
      tags: string[];
      /**
       * Template Id
       * @description Unique identifier of the template
       */
      template_id: string;
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
 * Type map of all available tool input types for toolkit "TEMPLATED".
 */
export type TEMPLATED_TOOL_INPUTS = {
  ADD_TAGS_TO_TEMPLATE: TEMPLATED_ADD_TAGS_TO_TEMPLATE_INPUT
  CLONE_TEMPLATE_ACTION: TEMPLATED_CLONE_TEMPLATE_ACTION_INPUT
  CREATE_RENDER: TEMPLATED_CREATE_RENDER_INPUT
  DELETE_TEMPLATE: TEMPLATED_DELETE_TEMPLATE_INPUT
  GET_ACCOUNT_INFORMATION: TEMPLATED_GET_ACCOUNT_INFORMATION_INPUT
  LIST_ALL_TEMPLATES: TEMPLATED_LIST_ALL_TEMPLATES_INPUT
  LIST_TEMPLATE_RENDERS: TEMPLATED_LIST_TEMPLATE_RENDERS_INPUT
  REMOVE_TEMPLATE_TAGS: TEMPLATED_REMOVE_TEMPLATE_TAGS_INPUT
  RETRIEVE_RENDER: TEMPLATED_RETRIEVE_RENDER_INPUT
  RETRIEVE_TEMPLATE: TEMPLATED_RETRIEVE_TEMPLATE_INPUT
  UPDATE_TEMPLATE_TAGS: TEMPLATED_UPDATE_TEMPLATE_TAGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEMPLATED".
 */
export type TEMPLATED_TOOL_OUTPUTS = {
  ADD_TAGS_TO_TEMPLATE: TEMPLATED_ADD_TAGS_TO_TEMPLATE_OUTPUT
  CLONE_TEMPLATE_ACTION: TEMPLATED_CLONE_TEMPLATE_ACTION_OUTPUT
  CREATE_RENDER: TEMPLATED_CREATE_RENDER_OUTPUT
  DELETE_TEMPLATE: TEMPLATED_DELETE_TEMPLATE_OUTPUT
  GET_ACCOUNT_INFORMATION: TEMPLATED_GET_ACCOUNT_INFORMATION_OUTPUT
  LIST_ALL_TEMPLATES: TEMPLATED_LIST_ALL_TEMPLATES_OUTPUT
  LIST_TEMPLATE_RENDERS: TEMPLATED_LIST_TEMPLATE_RENDERS_OUTPUT
  REMOVE_TEMPLATE_TAGS: TEMPLATED_REMOVE_TEMPLATE_TAGS_OUTPUT
  RETRIEVE_RENDER: TEMPLATED_RETRIEVE_RENDER_OUTPUT
  RETRIEVE_TEMPLATE: TEMPLATED_RETRIEVE_TEMPLATE_OUTPUT
  UPDATE_TEMPLATE_TAGS: TEMPLATED_UPDATE_TEMPLATE_TAGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEMPLATED toolkit.
 */
export const TEMPLATED = {
  slug: "templated",
  tools: {
    /**
     * Tool to append new tags to an existing template without overwriting existing tags. use when you already have the template id and want to add additional tags.
     */
    ADD_TAGS_TO_TEMPLATE: "TEMPLATED_ADD_TAGS_TO_TEMPLATE",
    /**
     * Tool to clone an existing template. use after you have a template id and want to duplicate it with a new name. example: "clone template tpl 123 as 'copy of template'".
     */
    CLONE_TEMPLATE_ACTION: "TEMPLATED_CLONE_TEMPLATE_ACTION",
    /**
     * Tool to create a document render from a template. use when you need a pdf or image output with dynamic variables. example: "generate an invoice pdf using template 'tpl 123' with variables { ... }."
     */
    CREATE_RENDER: "TEMPLATED_CREATE_RENDER",
    /**
     * Tool to delete a template by its unique id. use when you have confirmed the template id and need to remove it permanently.
     */
    DELETE_TEMPLATE: "TEMPLATED_DELETE_TEMPLATE",
    /**
     * Tool to retrieve account information, including email, name, and timestamps. use after confirming your api token is valid.
     */
    GET_ACCOUNT_INFORMATION: "TEMPLATED_GET_ACCOUNT_INFORMATION",
    /**
     * Tool to list all templates of a user. use when you need to retrieve available templates with optional pagination.
     */
    LIST_ALL_TEMPLATES: "TEMPLATED_LIST_ALL_TEMPLATES",
    /**
     * Tool to list all renders of a specific template. use after obtaining a template id when you need paginated render results.
     */
    LIST_TEMPLATE_RENDERS: "TEMPLATED_LIST_TEMPLATE_RENDERS",
    /**
     * Tool to remove specific tags from a template. use when you have a template id and want to untag existing tags.
     */
    REMOVE_TEMPLATE_TAGS: "TEMPLATED_REMOVE_TEMPLATE_TAGS",
    /**
     * Tool to retrieve details of a specific render by its id. use after obtaining the render id when you need details of a render.
     */
    RETRIEVE_RENDER: "TEMPLATED_RETRIEVE_RENDER",
    /**
     * Tool to retrieve a single template by its unique id. use after obtaining the template id.
     */
    RETRIEVE_TEMPLATE: "TEMPLATED_RETRIEVE_TEMPLATE",
    /**
     * Tool to overwrite all tags on a template. use when you need to replace the entire tag list for a specific template.
     */
    UPDATE_TEMPLATE_TAGS: "TEMPLATED_UPDATE_TEMPLATE_TAGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEMPLATED".
 */
export type TEMPLATED_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEMPLATED".
 */
export type TEMPLATED_TRIGGER_EVENTS = {}
