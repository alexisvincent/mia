// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIGNWELL's SIGNWELL_CREATE_DOCUMENT tool input.
 */
type SIGNWELL_CREATE_DOCUMENT_INPUT = {
  /**
   * Allow Decline
   * @description If true, recipients may decline to sign (which cancels the request).
   * @default true
   */
  allow_decline: boolean | null;
  /**
   * Allow Reassign
   * @description If true, signers may reassign their signing responsibility.
   * @default true
   */
  allow_reassign: boolean | null;
  /**
   * Api Application Id
   * @description UUID of API Application settings to use (optional).
   * @default null
   */
  api_application_id: string | null;
  /**
   * Apply Signing Order
   * @description If true, enforces signing in the order provided by recipients.
   * @default false
   */
  apply_signing_order: boolean | null;
  /**
   * Custom Requester Email
   * @description Custom email used in communications instead of the API key owner.
   * @default null
   */
  custom_requester_email: string | null;
  /**
   * Custom Requester Name
   * @description Custom name used in all email communications and audit records.
   * @default null
   */
  custom_requester_name: string | null;
  /**
   * Decline Redirect Url
   * @description URL to redirect recipients to if they decline to sign.
   * @default null
   */
  decline_redirect_url: string | null;
  /**
   * Draft
   * @description If true, saves document as draft (no emails sent). If false, sends signature requests immediately.
   * @default false
   */
  draft: boolean | null;
  /**
   * Embedded Signing
   * @description If true, enables embedded signing (iframe) and disables email auth.
   * @default false
   */
  embedded_signing: boolean | null;
  /**
   * Embedded Signing Notifications
   * @description If true, sends completion notifications when using embedded signing.
   * @default false
   */
  embedded_signing_notifications: boolean | null;
  /**
   * Expires In
   * @description Number of days before the request expires (>=1). Defaults to account or template setting.
   * @default null
   */
  expires_in: number | null;
  /**
   * Files
   * @description List of files to include in the document. At least one file is required.
   */
  files?: {
      /**
       * File Base64
       * @description Base64-encoded file content. Either file_url or file_base64 is required.
       * @default null
       */
      file_base64: string | null;
      /**
       * File Url
       * @description Public URL to fetch the file. Either file_url or file_base64 is required.
       * @default null
       */
      file_url: string | null;
      /**
       * Name
       * @description Friendly name for this file (e.g., 'Contract.pdf').
       */
      name: string;
  }[];
  /**
   * Language
   * @description ISO 639-1 code for localization (e.g., en, fr, es). Defaults to en.
   * @default null
   */
  language: string | null;
  /**
   * Message
   * @description Email message for the signature request. Defaults to system or template message.
   * @default null
   */
  message: string | null;
  /**
   * Metadata
   * @description Optional key/value data associated with the document.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Recipients
   * @description People who must complete and/or sign this document.
   */
  recipients?: {
      /**
       * Email
       * @description Email address of the recipient.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the recipient, used to track their signing status.
       */
      id: string;
      /**
       * Name
       * @description Full name of the recipient.
       */
      name: string;
  }[];
  /**
   * Redirect Url
   * @description URL to redirect recipients to after successful signing.
   * @default null
   */
  redirect_url: string | null;
  /**
   * Reminders
   * @description If true, sends reminders on day 3, 6, and 10.
   * @default true
   */
  reminders: boolean | null;
  /**
   * Subject
   * @description Email subject for the signature request. Defaults to system or template subject.
   * @default null
   */
  subject: string | null;
  /**
   * Test Mode
   * @description Set to true to enable Test Mode (not legally binding & not billed). Defaults to false.
   * @default false
   */
  test_mode: boolean | null;
  /**
   * Text Tags
   * @description If true, you may place fields via special text tags in your document.
   * @default false
   */
  text_tags: boolean | null;
  /**
   * With Signature Page
   * @description If true, appends a signature page to the end and requires signing there.
   * @default false
   */
  with_signature_page: boolean | null;
};

/**
 * Type of SIGNWELL's SIGNWELL_CREATE_DOCUMENT tool output.
 */
type SIGNWELL_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the new document.
       */
      id: string;
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
 * Type of SIGNWELL's SIGNWELL_CREATE_WEBHOOK tool input.
 */
type SIGNWELL_CREATE_WEBHOOK_INPUT = {
  /**
   * Api Application Id
   * @description UUID of the API Application to associate with this webhook.
   * @default null
   */
  apiApplicationId: string | null;
  /**
   * Callback Url
   * @description URL where SignWell will post document event payloads.
   */
  callbackUrl?: string;
};

/**
 * Type of SIGNWELL's SIGNWELL_CREATE_WEBHOOK tool output.
 */
type SIGNWELL_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Callback Url
       * @description The registered callback URL.
       */
      callback_url: string;
      /**
       * Id
       * @description Unique identifier of the new webhook.
       */
      id: string;
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
 * Type of SIGNWELL's SIGNWELL_DELETE_DOCUMENT tool input.
 */
type SIGNWELL_DELETE_DOCUMENT_INPUT = {
  /**
   * Id
   * @description Unique identifier for a document
   */
  id?: string;
};

/**
 * Type of SIGNWELL's SIGNWELL_DELETE_DOCUMENT tool output.
 */
type SIGNWELL_DELETE_DOCUMENT_OUTPUT = {
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
 * Type of SIGNWELL's SIGNWELL_DELETE_WEBHOOK tool input.
 */
type SIGNWELL_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier for the webhook
   */
  id?: string;
};

/**
 * Type of SIGNWELL's SIGNWELL_DELETE_WEBHOOK tool output.
 */
type SIGNWELL_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of SIGNWELL's SIGNWELL_GET_CREDENTIALS tool input.
 */
type SIGNWELL_GET_CREDENTIALS_INPUT = object;

/**
 * Type of SIGNWELL's SIGNWELL_GET_CREDENTIALS tool output.
 */
type SIGNWELL_GET_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of SIGNWELL's SIGNWELL_GET_DOCUMENT tool input.
 */
type SIGNWELL_GET_DOCUMENT_INPUT = {
  /**
   * Id
   * @description The unique identifier for the document to retrieve.
   */
  id?: string;
};

/**
 * Type of SIGNWELL's SIGNWELL_GET_DOCUMENT tool output.
 */
type SIGNWELL_GET_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of SIGNWELL's SIGNWELL_LIST_BULK_SENDS tool input.
 */
type SIGNWELL_LIST_BULK_SENDS_INPUT = {
  /**
   * Api Application Id
   * @description Unique identifier for API Application settings to scope the request.
   * @default null
   */
  api_application_id: string | null;
  /**
   * Email
   * @description Email address of the user that sent the Bulk Send. Requires admin or manager role to view other users' sends.
   * @default null
   */
  email: string | null;
  /**
   * Page
   * @description Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page. Defaults to 10, maximum 50.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of SIGNWELL's SIGNWELL_LIST_BULK_SENDS tool output.
 */
type SIGNWELL_LIST_BULK_SENDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bulk Sends
       * @description List of bulk send records.
       */
      bulk_sends: {
          /**
           * Created At
           * @description Timestamp when the bulk send was created (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the bulk send.
           */
          id: string;
          /**
           * Status
           * @description Current status of the bulk send.
           */
          status: string;
          /**
           * Template Id
           * @description Identifier of the template used in the bulk send.
           */
          template_id: string;
          /**
           * Total Completed
           * @description Number of documents completed.
           */
          total_completed: number;
          /**
           * Total Failed
           * @description Number of documents failed.
           */
          total_failed: number;
          /**
           * Total Sent
           * @description Number of documents sent.
           */
          total_sent: number;
      }[];
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Next Page
       * @description Next page number if available, else null.
       * @default null
       */
      next_page: number | null;
      /**
       * Previous Page
       * @description Previous page number if available, else null.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Count
       * @description Total number of bulk send records.
       */
      total_count: number;
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
 * Type of SIGNWELL's SIGNWELL_LIST_WEBHOOKS tool input.
 */
type SIGNWELL_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of SIGNWELL's SIGNWELL_LIST_WEBHOOKS tool output.
 */
type SIGNWELL_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of registered webhooks on the account
       */
      webhooks: {
          /**
           * Callback Url
           * @description Destination URL for the webhook
           */
          callback_url: string;
          /**
           * Created At
           * @description Timestamp when the webhook was created
           * @default null
           */
          created_at: string | null;
          /**
           * Event
           * @description Event trigger for the webhook
           * @default null
           */
          event: string | null;
          /**
           * Id
           * @description Unique identifier for the webhook
           */
          id: string;
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
 * Type map of all available tool input types for toolkit "SIGNWELL".
 */
export type SIGNWELL_TOOL_INPUTS = {
  CREATE_DOCUMENT: SIGNWELL_CREATE_DOCUMENT_INPUT
  CREATE_WEBHOOK: SIGNWELL_CREATE_WEBHOOK_INPUT
  DELETE_DOCUMENT: SIGNWELL_DELETE_DOCUMENT_INPUT
  DELETE_WEBHOOK: SIGNWELL_DELETE_WEBHOOK_INPUT
  GET_CREDENTIALS: SIGNWELL_GET_CREDENTIALS_INPUT
  GET_DOCUMENT: SIGNWELL_GET_DOCUMENT_INPUT
  LIST_BULK_SENDS: SIGNWELL_LIST_BULK_SENDS_INPUT
  LIST_WEBHOOKS: SIGNWELL_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIGNWELL".
 */
export type SIGNWELL_TOOL_OUTPUTS = {
  CREATE_DOCUMENT: SIGNWELL_CREATE_DOCUMENT_OUTPUT
  CREATE_WEBHOOK: SIGNWELL_CREATE_WEBHOOK_OUTPUT
  DELETE_DOCUMENT: SIGNWELL_DELETE_DOCUMENT_OUTPUT
  DELETE_WEBHOOK: SIGNWELL_DELETE_WEBHOOK_OUTPUT
  GET_CREDENTIALS: SIGNWELL_GET_CREDENTIALS_OUTPUT
  GET_DOCUMENT: SIGNWELL_GET_DOCUMENT_OUTPUT
  LIST_BULK_SENDS: SIGNWELL_LIST_BULK_SENDS_OUTPUT
  LIST_WEBHOOKS: SIGNWELL_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIGNWELL toolkit.
 */
export const SIGNWELL = {
  slug: "signwell",
  tools: {
    /**
     * Tool to create and optionally send a new document for signing. use when you have files and recipients defined and want to programmatically submit a signature request in one call.
     */
    CREATE_DOCUMENT: "SIGNWELL_CREATE_DOCUMENT",
    /**
     * Tool to register a webhook callback url. use when you need to receive document event notifications.
     */
    CREATE_WEBHOOK: "SIGNWELL_CREATE_WEBHOOK",
    /**
     * Tool to delete a document (and cancel signing if in progress). use when you need to remove a document by id after confirming it.
     */
    DELETE_DOCUMENT: "SIGNWELL_DELETE_DOCUMENT",
    /**
     * Tool to delete a registered webhook. use when you need to remove a webhook no longer sending events.
     */
    DELETE_WEBHOOK: "SIGNWELL_DELETE_WEBHOOK",
    /**
     * Tool to retrieve account information for the current api key. use when validating credentials and obtaining user details.
     */
    GET_CREDENTIALS: "SIGNWELL_GET_CREDENTIALS",
    /**
     * Tool to return a document and all associated document data. use when you need to fetch document details by id.
     */
    GET_DOCUMENT: "SIGNWELL_GET_DOCUMENT",
    /**
     * Tool to list all bulk sends. use after setting up api credentials to retrieve paginated records.
     */
    LIST_BULK_SENDS: "SIGNWELL_LIST_BULK_SENDS",
    /**
     * Tool to list all registered webhooks. use when you need to retrieve the active webhooks for your signwell account after setup.
     */
    LIST_WEBHOOKS: "SIGNWELL_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIGNWELL".
 */
export type SIGNWELL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIGNWELL".
 */
export type SIGNWELL_TRIGGER_EVENTS = {}
