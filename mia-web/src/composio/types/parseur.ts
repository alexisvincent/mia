// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PARSEUR's PARSEUR_CREATE_WEBHOOK tool input.
 */
type PARSEUR_CREATE_WEBHOOK_INPUT = {
  /**
   * Category
   * @description Must be set to 'CUSTOM'.
   * @default CUSTOM
   * @constant
   */
  category: "CUSTOM";
  /**
   * Event
   * @description Specifies the event that triggers the webhook.
   * @enum {string}
   */
  event?: "document.processed" | "document.processed.flattened" | "document.template_needed" | "table.processed";
  /**
   * Headers
   * @description Optional HTTP headers to include in each webhook request.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Custom name for the webhook. If omitted, the target URL is used as the name.
   * @default null
   */
  name: string | null;
  /**
   * Parser
   * @description Numeric ID of the mailbox (parser) to which the webhook is added.
   */
  parser?: number;
  /**
   * Parser Field
   * @description ID of a parser field or table-field that the webhook should react to, in the format 'PF12345'.
   * @default null
   */
  parser_field: string | null;
  /**
   * Target
   * @description The HTTPS URL to which the webhook payloads will be sent.
   */
  target?: string;
};

/**
 * Type of PARSEUR's PARSEUR_CREATE_WEBHOOK tool output.
 */
type PARSEUR_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description API key associated with the webhook; null if not set.
       * @default null
       */
      api_key: string | null;
      /**
       * Category
       * @description Webhook category, always 'CUSTOM'.
       */
      category: string;
      /**
       * Default Driver Fee Percentage
       * @description Default driver fee percentage if applicable; null if not set.
       * @default null
       */
      default_driver_fee_percentage: number | null;
      /**
       * Event
       * @description Event type that triggers the webhook.
       * @enum {string}
       */
      event: "document.processed" | "document.processed.flattened" | "document.template_needed" | "table.processed";
      /**
       * Headers
       * @description Custom HTTP headers included with the webhook; null if not set.
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: number;
      /**
       * Name
       * @description Custom name of the webhook; null if not set.
       * @default null
       */
      name: string | null;
      /**
       * Parser Field Set
       * @description List of parser fields or table-fields assigned to the webhook.
       */
      parser_field_set?: {
          [key: string]: unknown;
      }[];
      /**
       * Target
       * @description The URL to which the webhook sends payloads.
       */
      target: string;
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
 * Type of PARSEUR's PARSEUR_DELETE_WEBHOOK tool input.
 */
type PARSEUR_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhook_id?: number;
};

/**
 * Type of PARSEUR's PARSEUR_DELETE_WEBHOOK tool output.
 */
type PARSEUR_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message after webhook deletion.
       */
      message: string;
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
 * Type of PARSEUR's PARSEUR_ENABLE_WEBHOOK tool input.
 */
type PARSEUR_ENABLE_WEBHOOK_INPUT = {
  /**
   * Mailbox Id
   * @description ID of the parser mailbox
   */
  mailbox_id?: number;
  /**
   * Webhook Id
   * @description ID of the webhook to enable
   */
  webhook_id?: number;
};

/**
 * Type of PARSEUR's PARSEUR_ENABLE_WEBHOOK tool output.
 */
type PARSEUR_ENABLE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Category of the webhook, always 'CUSTOM'
       */
      category: string;
      /**
       * Event
       * @description Event the webhook listens to
       * @enum {string}
       */
      event: "document.processed" | "document.processed.flattened" | "document.template_needed" | "table.processed";
      /**
       * Headers
       * @description Custom HTTP headers sent with the webhook payload
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique ID of the webhook
       */
      id: number;
      /**
       * Name
       * @description Custom name of the webhook
       * @default null
       */
      name: string | null;
      /**
       * Parser
       * @description ID of the mailbox (parser) associated with the webhook
       */
      parser: number;
      /**
       * Parser Field
       * @description ID of the field that triggers the webhook, if any
       * @default null
       */
      parser_field: string | null;
      /**
       * Target
       * @description Target URL for the webhook
       */
      target: string;
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
 * Type of PARSEUR's PARSEUR_LIST_DOCUMENTS_IN_MAILBOX tool input.
 */
type PARSEUR_LIST_DOCUMENTS_IN_MAILBOX_INPUT = {
  /**
   * Mailbox Id
   * @description The unique identifier of the mailbox to list documents from.
   */
  mailbox_id?: string;
  /**
   * Ordering
   * @description Field to sort by. Prepend a minus for descending order. Supported: name, created, modified, status.
   * @default null
   * @enum {string|null}
   */
  ordering: "name" | "-name" | "created" | "-created" | "modified" | "-modified" | "status" | "-status" | null;
  /**
   * Page
   * @description Page number to retrieve (pagination). Defaults to 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page. Defaults to 25.
   * @default 25
   */
  page_size: number;
  /**
   * Received After
   * @description Filter to include documents received on or after this date (YYYY-MM-DD).
   * @default null
   */
  received_after: string | null;
  /**
   * Received Before
   * @description Filter to include documents received on or before this date (YYYY-MM-DD).
   * @default null
   */
  received_before: string | null;
  /**
   * Search
   * @description Search query to filter documents by ID, name, template name, sender/recipient, or metadata.
   * @default null
   */
  search: string | null;
  /**
   * Tz
   * @description Timezone for interpreting date filters, e.g., 'Asia/Singapore'. Defaults to UTC.
   * @default null
   */
  tz: string | null;
  /**
   * With Result
   * @description If true, includes the full parsed result string in each document object.
   * @default false
   */
  with_result: boolean;
};

/**
 * Type of PARSEUR's PARSEUR_LIST_DOCUMENTS_IN_MAILBOX tool output.
 */
type PARSEUR_LIST_DOCUMENTS_IN_MAILBOX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of documents in this mailbox.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of documents on the requested page.
       */
      results: {
          /**
           * Bcc
           * @description List of BCC recipient email addresses.
           * @default null
           */
          bcc: string[] | null;
          /**
           * Cc
           * @description List of CC recipient email addresses.
           * @default null
           */
          cc: string[] | null;
          /**
           * Created
           * @description ISO 8601 timestamp when the document was received.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the document.
           */
          id: string;
          /**
           * Metadata
           * @description Metadata headers of the document as key-value pairs.
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Modified
           * @description ISO 8601 timestamp when the document was last processed.
           */
          modified: string;
          /**
           * Name
           * @description Name of the document.
           */
          name: string;
          /**
           * Result
           * @description Parsed result string; present only when with_result=true.
           * @default null
           */
          result: string | null;
          /**
           * Sender
           * @description Email address of the sender.
           * @default null
           */
          sender: string | null;
          /**
           * Template Name
           * @description Name of the template used to parse the document, if any.
           * @default null
           */
          template_name: string | null;
          /**
           * To
           * @description List of recipient email addresses (To).
           * @default null
           */
          to: string[] | null;
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
 * Type of PARSEUR's PARSEUR_LIST_MAILBOXES tool input.
 */
type PARSEUR_LIST_MAILBOXES_INPUT = {
  /**
   * Ordering
   * @description Field to sort by. Prepend a minus to reverse order. Supported keys: name, document_count, template_count, PARSEDOK_count, PARSEDKO_count, QUOTAEXC_count, EXPORTKO_count.
   * @default null
   * @enum {string|null}
   */
  ordering: "name" | "-name" | "document_count" | "-document_count" | "template_count" | "-template_count" | "PARSEDOK_count" | "-PARSEDOK_count" | "PARSEDKO_count" | "-PARSEDKO_count" | "QUOTAEXC_count" | "-QUOTAEXC_count" | "EXPORTKO_count" | "-EXPORTKO_count" | null;
  /**
   * Page
   * @description Page number to retrieve (pagination). Defaults to 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of mailboxes per page. Defaults to 25, maximum 100.
   * @default 25
   */
  page_size: number;
  /**
   * Search
   * @description Filter mailboxes whose name or email prefix contains this string (case-insensitive).
   * @default null
   */
  search: string | null;
};

/**
 * Type of PARSEUR's PARSEUR_LIST_MAILBOXES tool output.
 */
type PARSEUR_LIST_MAILBOXES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of mailboxes available.
       */
      count: number;
      /**
       * Current
       * @description Current page number.
       */
      current: number;
      /**
       * Results
       * @description List of mailbox objects on the current page.
       */
      results: {
          [key: string]: unknown;
      }[];
      /**
       * Total
       * @description Total number of pages.
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
 * Type of PARSEUR's PARSEUR_LIST_TEMPLATES tool input.
 */
type PARSEUR_LIST_TEMPLATES_INPUT = {
  /**
   * Mailbox Id
   * @description The unique identifier of the mailbox (parser) to list templates for.
   */
  mailbox_id?: string;
  /**
   * Ordering
   * @description Field to sort by. Prepend a minus to reverse order. Supported: name, created, modified, last_activity, status, document_count.
   * @default null
   * @enum {string|null}
   */
  ordering: "name" | "-name" | "created" | "-created" | "modified" | "-modified" | "last_activity" | "-last_activity" | "status" | "-status" | "document_count" | "-document_count" | null;
  /**
   * Page
   * @description Page number to retrieve (pagination). Defaults to 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page. Defaults to 25.
   * @default 25
   */
  page_size: number;
  /**
   * Search
   * @description Filter templates whose name contains this string (case-insensitive).
   * @default null
   */
  search: string | null;
};

/**
 * Type of PARSEUR's PARSEUR_LIST_TEMPLATES tool output.
 */
type PARSEUR_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of templates in this mailbox.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of templates on the requested page.
       */
      results: {
          /**
           * Created
           * Format: date-time
           * @description When the template was first created (ISO 8601).
           */
          created: string;
          /**
           * Document Count
           * @description Number of documents matched by this template.
           */
          document_count: number;
          /**
           * Id
           * @description Unique template identifier.
           */
          id: number;
          /**
           * Last Activity
           * Format: date-time
           * @description Last time this template was used (ISO 8601).
           */
          last_activity: string;
          /**
           * Modified
           * Format: date-time
           * @description When the template was last updated (ISO 8601).
           */
          modified: string;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Status
           * @description Current status of the template (e.g. ACTIVE).
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
 * Type of PARSEUR's PARSEUR_LIST_WEBHOOKS tool input.
 */
type PARSEUR_LIST_WEBHOOKS_INPUT = {
  /**
   * Mailbox Id
   * @description The unique identifier of the mailbox whose webhooks you want to list.
   */
  mailbox_id?: string;
};

/**
 * Type of PARSEUR's PARSEUR_LIST_WEBHOOKS tool output.
 */
type PARSEUR_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available Webhook Set
       * @description List of paused webhooks for the specified mailbox.
       * @default []
       */
      available_webhook_set: {
          /**
           * Category
           * @description Webhook category, always 'CUSTOM'.
           */
          category: string;
          /**
           * Event
           * @description The event type that triggers the webhook.
           */
          event: string;
          /**
           * Headers
           * @description Custom headers sent with the webhook.
           * @default null
           */
          headers: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description The unique identifier of the webhook.
           */
          id: string;
          /**
           * Name
           * @description Custom name for the webhook.
           * @default null
           */
          name: string | null;
          /**
           * Parser
           * @description The mailbox ID to which the webhook belongs.
           */
          parser: string | null;
          /**
           * Parser Field
           * @description Field ID that triggers the webhook, in 'PF12345' format.
           * @default null
           */
          parser_field: string | null;
          /**
           * Target
           * @description The URL to which the webhook will send payloads.
           */
          target: string;
      }[];
      /**
       * Webhook Set
       * @description List of enabled webhooks for the specified mailbox.
       * @default []
       */
      webhook_set: {
          /**
           * Category
           * @description Webhook category, always 'CUSTOM'.
           */
          category: string;
          /**
           * Event
           * @description The event type that triggers the webhook.
           */
          event: string;
          /**
           * Headers
           * @description Custom headers sent with the webhook.
           * @default null
           */
          headers: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description The unique identifier of the webhook.
           */
          id: string;
          /**
           * Name
           * @description Custom name for the webhook.
           * @default null
           */
          name: string | null;
          /**
           * Parser
           * @description The mailbox ID to which the webhook belongs.
           */
          parser: string | null;
          /**
           * Parser Field
           * @description Field ID that triggers the webhook, in 'PF12345' format.
           * @default null
           */
          parser_field: string | null;
          /**
           * Target
           * @description The URL to which the webhook will send payloads.
           */
          target: string;
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
 * Type of PARSEUR's PARSEUR_PAUSE_WEBHOOK tool input.
 */
type PARSEUR_PAUSE_WEBHOOK_INPUT = {
  /**
   * Mailbox Id
   * @description ID of the parser mailbox
   */
  mailbox_id?: number;
  /**
   * Webhook Id
   * @description ID of the webhook to pause
   */
  webhook_id?: number;
};

/**
 * Type of PARSEUR's PARSEUR_PAUSE_WEBHOOK tool output.
 */
type PARSEUR_PAUSE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code returned by the API; 204 indicates successful pause
       */
      code: number;
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
 * Type of PARSEUR's PARSEUR_RETRIEVE_WEBHOOK tool input.
 */
type PARSEUR_RETRIEVE_WEBHOOK_INPUT = {
  /**
   * Mailbox Id
   * @description Unique identifier of the mailbox (parser)
   */
  mailbox_id?: string;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook
   */
  webhook_id?: string;
};

/**
 * Type of PARSEUR's PARSEUR_RETRIEVE_WEBHOOK tool output.
 */
type PARSEUR_RETRIEVE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Webhook category, always 'CUSTOM'
       */
      category: string;
      /**
       * Event
       * @description Event that triggers the webhook
       * @enum {string}
       */
      event: "document.processed" | "document.processed.flattened" | "document.template_needed" | "table.processed";
      /**
       * Headers
       * @description Custom headers sent with the webhook POST
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique webhook identifier
       */
      id: number;
      /**
       * Name
       * @description Name of the webhook (defaults to target if omitted)
       * @default null
       */
      name: string | null;
      /**
       * Parser
       * @description Mailbox ID this webhook is attached to
       */
      parser: number;
      /**
       * Parser Field
       * @description Field ID this webhook is scoped to, in 'PF...' format
       * @default null
       */
      parser_field: string | null;
      /**
       * Target
       * @description Callback URL of the webhook
       */
      target: string;
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
 * Type of PARSEUR's PARSEUR_UPDATE_WEBHOOK tool input.
 */
type PARSEUR_UPDATE_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Trigger event for the webhook
   * @default null
   * @enum {string|null}
   */
  event: "document.processed" | "document.processed.flattened" | "document.template_needed" | "table.processed" | null;
  /**
   * Headers
   * @description Additional HTTP headers to include; Content-Type is always application/json
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Custom name for the webhook; defaults to the target URL if omitted
   * @default null
   */
  name: string | null;
  /**
   * Parser Field
   * @description ID of a specific field trigger in 'PF12345' format
   * @default null
   */
  parser_field: string | null;
  /**
   * Target
   * @description HTTPS URL to receive the webhook payload
   * @default null
   */
  target: string | null;
  /**
   * Webhook Id
   * @description Unique ID of the webhook to update
   */
  webhook_id?: number;
};

/**
 * Type of PARSEUR's PARSEUR_UPDATE_WEBHOOK tool output.
 */
type PARSEUR_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description API key associated with the webhook; null if not set.
       * @default null
       */
      api_key: string | null;
      /**
       * Category
       * @description Category of the webhook, always 'CUSTOM'
       */
      category: string;
      /**
       * Default Driver Fee Percentage
       * @description Default driver fee percentage if applicable; null if not set.
       * @default null
       */
      default_driver_fee_percentage: number | null;
      /**
       * Event
       * @description Event type the webhook listens to
       * @enum {string}
       */
      event: "document.processed" | "document.processed.flattened" | "document.template_needed" | "table.processed";
      /**
       * Headers
       * @description Custom HTTP headers sent with the webhook payload; null if not set.
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: number;
      /**
       * Name
       * @description Custom name of the webhook; null if not set.
       * @default null
       */
      name: string | null;
      /**
       * Parser Field Set
       * @description List of parser fields or table-fields assigned to the webhook.
       */
      parser_field_set?: {
          [key: string]: unknown;
      }[];
      /**
       * Target
       * @description Target URL for the webhook
       */
      target: string;
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
 * Type map of all available tool input types for toolkit "PARSEUR".
 */
export type PARSEUR_TOOL_INPUTS = {
  CREATE_WEBHOOK: PARSEUR_CREATE_WEBHOOK_INPUT
  DELETE_WEBHOOK: PARSEUR_DELETE_WEBHOOK_INPUT
  ENABLE_WEBHOOK: PARSEUR_ENABLE_WEBHOOK_INPUT
  LIST_DOCUMENTS_IN_MAILBOX: PARSEUR_LIST_DOCUMENTS_IN_MAILBOX_INPUT
  LIST_MAILBOXES: PARSEUR_LIST_MAILBOXES_INPUT
  LIST_TEMPLATES: PARSEUR_LIST_TEMPLATES_INPUT
  LIST_WEBHOOKS: PARSEUR_LIST_WEBHOOKS_INPUT
  PAUSE_WEBHOOK: PARSEUR_PAUSE_WEBHOOK_INPUT
  RETRIEVE_WEBHOOK: PARSEUR_RETRIEVE_WEBHOOK_INPUT
  UPDATE_WEBHOOK: PARSEUR_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PARSEUR".
 */
export type PARSEUR_TOOL_OUTPUTS = {
  CREATE_WEBHOOK: PARSEUR_CREATE_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: PARSEUR_DELETE_WEBHOOK_OUTPUT
  ENABLE_WEBHOOK: PARSEUR_ENABLE_WEBHOOK_OUTPUT
  LIST_DOCUMENTS_IN_MAILBOX: PARSEUR_LIST_DOCUMENTS_IN_MAILBOX_OUTPUT
  LIST_MAILBOXES: PARSEUR_LIST_MAILBOXES_OUTPUT
  LIST_TEMPLATES: PARSEUR_LIST_TEMPLATES_OUTPUT
  LIST_WEBHOOKS: PARSEUR_LIST_WEBHOOKS_OUTPUT
  PAUSE_WEBHOOK: PARSEUR_PAUSE_WEBHOOK_OUTPUT
  RETRIEVE_WEBHOOK: PARSEUR_RETRIEVE_WEBHOOK_OUTPUT
  UPDATE_WEBHOOK: PARSEUR_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PARSEUR toolkit.
 */
export const PARSEUR = {
  slug: "parseur",
  tools: {
    /**
     * Tool to create a new webhook in parseur. use when you need to send parsed data via http post in real time.
     */
    CREATE_WEBHOOK: "PARSEUR_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific webhook. use when permanently removing a webhook after confirming its id.
     */
    DELETE_WEBHOOK: "PARSEUR_DELETE_WEBHOOK",
    /**
     * Tool to enable a paused webhook for a mailbox. use after confirming the webhook is correctly configured.
     */
    ENABLE_WEBHOOK: "PARSEUR_ENABLE_WEBHOOK",
    /**
     * Tool to list documents within a specific mailbox. use when you need to paginate, search, or sort the documents of a given mailbox after obtaining its id.
     */
    LIST_DOCUMENTS_IN_MAILBOX: "PARSEUR_LIST_DOCUMENTS_IN_MAILBOX",
    /**
     * Tool to retrieve a list of all mailboxes. use when you need to browse or filter mailboxes via pagination, searching, or sorting.
     */
    LIST_MAILBOXES: "PARSEUR_LIST_MAILBOXES",
    /**
     * Tool to list all templates in a given mailbox. use after fetching mailbox details when you need to page through and inspect available templates for further actions.
     */
    LIST_TEMPLATES: "PARSEUR_LIST_TEMPLATES",
    /**
     * Tool to list all webhooks for a mailbox. use when you need to retrieve both active and paused webhooks for a given mailbox.
     */
    LIST_WEBHOOKS: "PARSEUR_LIST_WEBHOOKS",
    /**
     * Tool to pause (disable) an existing webhook. use when you need to stop sending parsed data via a webhook after confirming the correct mailbox and webhook ids.
     */
    PAUSE_WEBHOOK: "PARSEUR_PAUSE_WEBHOOK",
    /**
     * Tool to retrieve details of a specific webhook. use after creating or listing webhooks.
     */
    RETRIEVE_WEBHOOK: "PARSEUR_RETRIEVE_WEBHOOK",
    /**
     * Tool to update an existing webhook’s settings. use when you need to change the webhook’s target url, event type, headers, or name after creation.
     */
    UPDATE_WEBHOOK: "PARSEUR_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PARSEUR".
 */
export type PARSEUR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PARSEUR".
 */
export type PARSEUR_TRIGGER_EVENTS = {}
