// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RESEND's RESEND_CANCEL_EMAIL tool input.
 */
type RESEND_CANCEL_EMAIL_INPUT = {
  /**
   * Id
   * @description The id of the email to cancel.
   */
  id?: string;
};

/**
 * Type of RESEND's RESEND_CANCEL_EMAIL tool output.
 */
type RESEND_CANCEL_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the email that was canceled.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'email'.
       */
      object?: string;
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
 * Type of RESEND's RESEND_CREATE_AUDIENCE tool input.
 */
type RESEND_CREATE_AUDIENCE_INPUT = {
  /**
   * Name
   * @description The name of the audience you want to create.
   */
  name?: string;
};

/**
 * Type of RESEND's RESEND_CREATE_AUDIENCE tool output.
 */
type RESEND_CREATE_AUDIENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the created audience.
       */
      id?: string;
      /**
       * Name
       * @description The name of the audience.
       */
      name?: string;
      /**
       * Object
       * @description The type of object, which is 'audience'.
       * @default audience
       */
      object: string;
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
 * Type of RESEND's RESEND_CREATE_CONTACT tool input.
 */
type RESEND_CREATE_CONTACT_INPUT = {
  /**
   * Audience Id
   * @description The Audience ID.
   */
  audienceId?: string;
  /**
   * Email
   * @description The email address of the contact.
   */
  email?: string;
  /**
   * First Name
   * @description The first name of the contact.
   */
  firstName?: string;
  /**
   * Last Name
   * @description The last name of the contact.
   */
  lastName?: string;
  /**
   * Unsubscribed
   * @description The subscription status.
   */
  unsubscribed?: boolean;
};

/**
 * Type of RESEND's RESEND_CREATE_CONTACT tool output.
 */
type RESEND_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the created contact.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'contact'.
       */
      object?: string;
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
 * Type of RESEND's RESEND_CREATE_DOMAIN tool input.
 */
type RESEND_CREATE_DOMAIN_INPUT = {
  /**
   * Name
   * @description The name of the domain to be created.
   */
  name?: string;
  /**
   * Region
   * @description The region where emails will be sent from.
   * @default us-east-1
   * @enum {string}
   */
  region: "us-east-1" | "eu-west-1" | "sa-east-1" | "ap-northeast-1";
};

/**
 * Type of RESEND's RESEND_CREATE_DOMAIN tool output.
 */
type RESEND_CREATE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the domain.
       */
      created_at?: string;
      /**
       * Id
       * @description The id of the created domain.
       */
      id?: string;
      /**
       * Name
       * @description The name of the created domain.
       */
      name?: string;
      /**
       * Records
       * @description The DNS records associated with the domain.
       */
      records?: unknown[];
      /**
       * Region
       * @description The region where emails will be sent from.
       */
      region?: string;
      /**
       * Status
       * @description The status of the domain creation.
       */
      status?: string;
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
 * Type of RESEND's RESEND_DELETE_AUDIENCE tool input.
 */
type RESEND_DELETE_AUDIENCE_INPUT = {
  /**
   * Audience Id
   * @description The ID of the audience to delete.
   */
  audience_id?: string;
};

/**
 * Type of RESEND's RESEND_DELETE_AUDIENCE tool output.
 */
type RESEND_DELETE_AUDIENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the deleted audience.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'audience'.
       * @default audience
       */
      object: string;
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
 * Type of RESEND's RESEND_DELETE_CONTACT tool input.
 */
type RESEND_DELETE_CONTACT_INPUT = {
  /**
   * Audience Id
   * @description The Audience ID.
   */
  audienceId?: string;
  /**
   * Email
   * @description The Contact email. Either id or email must be provided.
   */
  email?: string;
  /**
   * Id
   * @description The Contact ID. Either id or email must be provided.
   */
  id?: string;
};

/**
 * Type of RESEND's RESEND_DELETE_CONTACT tool output.
 */
type RESEND_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description The id of the deleted contact.
       */
      contact?: string;
      /**
       * Deleted
       * @description Indicates if the contact was successfully deleted.
       */
      deleted?: boolean;
      /**
       * Object
       * @description The type of object, which is 'contact'.
       */
      object?: string;
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
 * Type of RESEND's RESEND_DELETE_DOMAIN tool input.
 */
type RESEND_DELETE_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description The id of the domain to delete.
   */
  domain_id?: string;
};

/**
 * Type of RESEND's RESEND_DELETE_DOMAIN tool output.
 */
type RESEND_DELETE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates whether the domain was successfully deleted.
       */
      deleted?: boolean;
      /**
       * Id
       * @description The id of the deleted domain.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'domain'.
       */
      object?: string;
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
 * Type of RESEND's RESEND_LIST_AUDIENCES tool input.
 */
type RESEND_LIST_AUDIENCES_INPUT = object;

/**
 * Type of RESEND's RESEND_LIST_AUDIENCES tool output.
 */
type RESEND_LIST_AUDIENCES_OUTPUT = {
  /**
   * Data
   * @description The list of audiences.
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the audience.
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description The id of the audience.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description The name of the audience.
       * @default null
       */
      name: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description The type of object, which is 'list'.
   * @default list
   */
  object: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RESEND's RESEND_LIST_CONTACTS tool input.
 */
type RESEND_LIST_CONTACTS_INPUT = {
  /**
   * Audience Id
   * @description The Audience ID.
   */
  audienceId?: string;
};

/**
 * Type of RESEND's RESEND_LIST_CONTACTS tool output.
 */
type RESEND_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description A list of contacts.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description The type of object, which is 'list'.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RESEND's RESEND_LIST_DOMAINS tool input.
 */
type RESEND_LIST_DOMAINS_INPUT = object;

/**
 * Type of RESEND's RESEND_LIST_DOMAINS tool output.
 */
type RESEND_LIST_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description The list of domains.
       */
      domains?: {
          /**
           * Created At
           * @description The creation timestamp of the domain.
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description The id of the domain.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the domain.
           * @default null
           */
          name: string | null;
          /**
           * Region
           * @description The region where emails will be sent from.
           * @default null
           */
          region: string | null;
          /**
           * Status
           * @description The status of the domain.
           * @default null
           */
          status: string | null;
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
 * Type of RESEND's RESEND_RETRIEVE_AUDIENCE tool input.
 */
type RESEND_RETRIEVE_AUDIENCE_INPUT = {
  /**
   * Audience Id
   * @description The ID of the audience to retrieve.
   */
  audience_id?: string;
};

/**
 * Type of RESEND's RESEND_RETRIEVE_AUDIENCE tool output.
 */
type RESEND_RETRIEVE_AUDIENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the audience.
       */
      created_at?: string;
      /**
       * Id
       * @description The id of the retrieved audience.
       */
      id?: string;
      /**
       * Name
       * @description The name of the audience.
       */
      name?: string;
      /**
       * Object
       * @description The type of object, which is 'audience'.
       * @default audience
       */
      object: string;
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
 * Type of RESEND's RESEND_RETRIEVE_CONTACT tool input.
 */
type RESEND_RETRIEVE_CONTACT_INPUT = {
  /**
   * Audience Id
   * @description The Audience ID.
   */
  audienceId?: string;
  /**
   * Id
   * @description The Contact ID.
   */
  id?: string;
};

/**
 * Type of RESEND's RESEND_RETRIEVE_CONTACT tool output.
 */
type RESEND_RETRIEVE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the contact.
       */
      created_at?: string;
      /**
       * Email
       * @description The email of the contact.
       */
      email?: string;
      /**
       * First Name
       * @description The first name of the contact.
       */
      first_name?: string;
      /**
       * Id
       * @description The id of the contact.
       */
      id?: string;
      /**
       * Last Name
       * @description The last name of the contact.
       */
      last_name?: string;
      /**
       * Object
       * @description The type of object, which is 'contact'.
       */
      object?: string;
      /**
       * Unsubscribed
       * @description The subscription status.
       */
      unsubscribed?: boolean;
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
 * Type of RESEND's RESEND_RETRIEVE_DOMAIN tool input.
 */
type RESEND_RETRIEVE_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description The id of the domain to retrieve.
   */
  domain_id?: string;
};

/**
 * Type of RESEND's RESEND_RETRIEVE_DOMAIN tool output.
 */
type RESEND_RETRIEVE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the domain.
       */
      created_at?: string;
      /**
       * Id
       * @description The id of the created domain.
       */
      id?: string;
      /**
       * Name
       * @description The name of the created domain.
       */
      name?: string;
      /**
       * Records
       * @description The DNS records associated with the domain.
       */
      records?: unknown[];
      /**
       * Region
       * @description The region where emails will be sent from.
       */
      region?: string;
      /**
       * Status
       * @description The status of the domain creation.
       */
      status?: string;
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
 * Type of RESEND's RESEND_RETRIEVE_EMAIL tool input.
 */
type RESEND_RETRIEVE_EMAIL_INPUT = {
  /**
   * Email Id
   * @description The id of the email to retrieve.
   */
  email_id?: string;
};

/**
 * Type of RESEND's RESEND_RETRIEVE_EMAIL tool output.
 */
type RESEND_RETRIEVE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bcc
       * @description The BCC recipient email addresses.
       */
      bcc?: (string | null)[];
      /**
       * Cc
       * @description The CC recipient email addresses.
       */
      cc?: (string | null)[];
      /**
       * Created At
       * @description The creation timestamp of the email.
       */
      created_at?: string;
      /**
       * From
       * @description The sender email address.
       */
      from?: string;
      /**
       * Html
       * @description The HTML content of the email.
       */
      html?: string;
      /**
       * Id
       * @description The id of the email.
       */
      id?: string;
      /**
       * Last Event
       * @description The last event of the email.
       */
      last_event?: string;
      /**
       * Object
       * @description The type of object, which is 'email'.
       */
      object?: string;
      /**
       * Reply To
       * @description The reply-to email addresses.
       */
      reply_to?: (string | null)[];
      /**
       * Subject
       * @description The subject of the email.
       */
      subject?: string;
      /**
       * Text
       * @description The plain text content of the email.
       */
      text?: string;
      /**
       * To
       * @description The recipient email addresses.
       */
      to?: string[];
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
 * Type of RESEND's RESEND_SEND_EMAIL tool input.
 */
type RESEND_SEND_EMAIL_INPUT = {
  /**
   * Bcc
   * @description Bcc recipient email address. For multiple addresses, send as an array of strings.
   * @default null
   */
  bcc: string | null;
  /**
   * Cc
   * @description Cc recipient email address. For multiple addresses, send as an array of strings.
   * @default null
   */
  cc: string | null;
  /**
   * From
   * @description Sender email address. To include a friendly name, use the format 'Your Name <sender@domain.com>'.
   */
  from?: string;
  /**
   * Headers
   * @description Custom headers to add to the email.
   */
  headers?: {
      [key: string]: unknown;
  };
  /**
   * Html
   * @description The HTML version of the message.
   */
  html?: string;
  /**
   * React
   * @description The React version of the message. Only available in the Node.js SDK.
   */
  react?: string;
  /**
   * Reply To
   * @description Reply-to email address. For multiple addresses, send as an array of strings.
   * @default null
   */
  reply_to: string | null;
  /**
   * Scheduled At
   * @description Schedule email to be sent later. The date should be in natural language (e.g., 'Your Name <sender@domain.com>').
   */
  scheduled_at?: string;
  /**
   * Subject
   * @description Email subject.
   */
  subject?: string;
  /**
   * Text
   * @description The plain text version of the message.
   */
  text?: string;
  /**
   * To
   * @description Recipient email address. For multiple addresses, send as an array of strings. Max 50.
   */
  to?: string | null;
};

/**
 * Type of RESEND's RESEND_SEND_EMAIL tool output.
 */
type RESEND_SEND_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the sent email.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'email'.
       */
      object?: string;
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
 * Type of RESEND's RESEND_UPDATE_DOMAIN tool input.
 */
type RESEND_UPDATE_DOMAIN_INPUT = {
  /**
   * Click Tracking
   * @description Track clicks within the body of each HTML email.
   * @default false
   */
  click_tracking: boolean;
  /**
   * Domain Id
   * @description The id of the domain to update.
   */
  domain_id?: string;
  /**
   * Open Tracking
   * @description Track the open rate of each email.
   * @default false
   */
  open_tracking: boolean;
  /**
   * Tls
   * @description TLS setting for email communication. 'opportunistic': Always attempts to make a secure connection. 'enforced': Requires TLS for email communication.
   * @default opportunistic
   * @enum {string}
   */
  tls: "opportunistic" | "enforced";
};

/**
 * Type of RESEND's RESEND_UPDATE_DOMAIN tool output.
 */
type RESEND_UPDATE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the domain.
       */
      created_at?: string;
      /**
       * Id
       * @description The id of the updated domain.
       */
      id?: string;
      /**
       * Name
       * @description The name of the updated domain.
       */
      name?: string;
      /**
       * Records
       * @description The DNS records associated with the domain.
       */
      records?: unknown[];
      /**
       * Region
       * @description The region where emails will be sent from.
       */
      region?: string;
      /**
       * Status
       * @description The status of the domain update.
       */
      status?: string;
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
 * Type of RESEND's RESEND_UPDATE_EMAIL tool input.
 */
type RESEND_UPDATE_EMAIL_INPUT = {
  /**
   * Id
   * @description The ID of the email to update.
   */
  id?: string;
  /**
   * Scheduled At
   * @description Schedule email to be sent later. The date should be in ISO 8601 format (e.g: 2024-08-05T11:52:01.858Z).
   */
  scheduled_at?: string;
};

/**
 * Type of RESEND's RESEND_UPDATE_EMAIL tool output.
 */
type RESEND_UPDATE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the updated email.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'email'.
       * @default email
       */
      object: string;
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
 * Type of RESEND's RESEND_VERIFY_DOMAIN tool input.
 */
type RESEND_VERIFY_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description The id of the domain to verify.
   */
  domain_id?: string;
};

/**
 * Type of RESEND's RESEND_VERIFY_DOMAIN tool output.
 */
type RESEND_VERIFY_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The id of the verified domain.
       */
      id?: string;
      /**
       * Object
       * @description The type of object, which is 'domain'.
       */
      object?: string;
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
 * Type map of all available tool input types for toolkit "RESEND".
 */
export type RESEND_TOOL_INPUTS = {
  CANCEL_EMAIL: RESEND_CANCEL_EMAIL_INPUT
  CREATE_AUDIENCE: RESEND_CREATE_AUDIENCE_INPUT
  CREATE_CONTACT: RESEND_CREATE_CONTACT_INPUT
  CREATE_DOMAIN: RESEND_CREATE_DOMAIN_INPUT
  DELETE_AUDIENCE: RESEND_DELETE_AUDIENCE_INPUT
  DELETE_CONTACT: RESEND_DELETE_CONTACT_INPUT
  DELETE_DOMAIN: RESEND_DELETE_DOMAIN_INPUT
  LIST_AUDIENCES: RESEND_LIST_AUDIENCES_INPUT
  LIST_CONTACTS: RESEND_LIST_CONTACTS_INPUT
  LIST_DOMAINS: RESEND_LIST_DOMAINS_INPUT
  RETRIEVE_AUDIENCE: RESEND_RETRIEVE_AUDIENCE_INPUT
  RETRIEVE_CONTACT: RESEND_RETRIEVE_CONTACT_INPUT
  RETRIEVE_DOMAIN: RESEND_RETRIEVE_DOMAIN_INPUT
  RETRIEVE_EMAIL: RESEND_RETRIEVE_EMAIL_INPUT
  SEND_EMAIL: RESEND_SEND_EMAIL_INPUT
  UPDATE_DOMAIN: RESEND_UPDATE_DOMAIN_INPUT
  UPDATE_EMAIL: RESEND_UPDATE_EMAIL_INPUT
  VERIFY_DOMAIN: RESEND_VERIFY_DOMAIN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RESEND".
 */
export type RESEND_TOOL_OUTPUTS = {
  CANCEL_EMAIL: RESEND_CANCEL_EMAIL_OUTPUT
  CREATE_AUDIENCE: RESEND_CREATE_AUDIENCE_OUTPUT
  CREATE_CONTACT: RESEND_CREATE_CONTACT_OUTPUT
  CREATE_DOMAIN: RESEND_CREATE_DOMAIN_OUTPUT
  DELETE_AUDIENCE: RESEND_DELETE_AUDIENCE_OUTPUT
  DELETE_CONTACT: RESEND_DELETE_CONTACT_OUTPUT
  DELETE_DOMAIN: RESEND_DELETE_DOMAIN_OUTPUT
  LIST_AUDIENCES: RESEND_LIST_AUDIENCES_OUTPUT
  LIST_CONTACTS: RESEND_LIST_CONTACTS_OUTPUT
  LIST_DOMAINS: RESEND_LIST_DOMAINS_OUTPUT
  RETRIEVE_AUDIENCE: RESEND_RETRIEVE_AUDIENCE_OUTPUT
  RETRIEVE_CONTACT: RESEND_RETRIEVE_CONTACT_OUTPUT
  RETRIEVE_DOMAIN: RESEND_RETRIEVE_DOMAIN_OUTPUT
  RETRIEVE_EMAIL: RESEND_RETRIEVE_EMAIL_OUTPUT
  SEND_EMAIL: RESEND_SEND_EMAIL_OUTPUT
  UPDATE_DOMAIN: RESEND_UPDATE_DOMAIN_OUTPUT
  UPDATE_EMAIL: RESEND_UPDATE_EMAIL_OUTPUT
  VERIFY_DOMAIN: RESEND_VERIFY_DOMAIN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RESEND toolkit.
 */
export const RESEND = {
  slug: "resend",
  tools: {
    /**
     * Cancel a scheduled email.
     */
    CANCEL_EMAIL: "RESEND_CANCEL_EMAIL",
    /**
     * Create a list of contacts.
     */
    CREATE_AUDIENCE: "RESEND_CREATE_AUDIENCE",
    /**
     * Create a contact in resend.
     */
    CREATE_CONTACT: "RESEND_CREATE_CONTACT",
    /**
     * Create a domain through the resend email api.
     */
    CREATE_DOMAIN: "RESEND_CREATE_DOMAIN",
    /**
     * Remove an existing audience.
     */
    DELETE_AUDIENCE: "RESEND_DELETE_AUDIENCE",
    /**
     * Delete a contact in resend.
     */
    DELETE_CONTACT: "RESEND_DELETE_CONTACT",
    /**
     * Delete a domain through the resend email api.
     */
    DELETE_DOMAIN: "RESEND_DELETE_DOMAIN",
    /**
     * List all audiences.
     */
    LIST_AUDIENCES: "RESEND_LIST_AUDIENCES",
    /**
     * List contacts in resend.
     */
    LIST_CONTACTS: "RESEND_LIST_CONTACTS",
    /**
     * List all domains.
     */
    LIST_DOMAINS: "RESEND_LIST_DOMAINS",
    /**
     * Retrieve a single audience.
     */
    RETRIEVE_AUDIENCE: "RESEND_RETRIEVE_AUDIENCE",
    /**
     * Retrieve a contact in resend.
     */
    RETRIEVE_CONTACT: "RESEND_RETRIEVE_CONTACT",
    /**
     * Retrieve a single domain.
     */
    RETRIEVE_DOMAIN: "RESEND_RETRIEVE_DOMAIN",
    /**
     * Retrieve a single email.
     */
    RETRIEVE_EMAIL: "RESEND_RETRIEVE_EMAIL",
    /**
     * Send an email using resend.
     */
    SEND_EMAIL: "RESEND_SEND_EMAIL",
    /**
     * Update an existing domain.
     */
    UPDATE_DOMAIN: "RESEND_UPDATE_DOMAIN",
    /**
     * Update a scheduled email.
     */
    UPDATE_EMAIL: "RESEND_UPDATE_EMAIL",
    /**
     * Verify a domain through the resend email api.
     */
    VERIFY_DOMAIN: "RESEND_VERIFY_DOMAIN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RESEND".
 */
export type RESEND_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RESEND".
 */
export type RESEND_TRIGGER_EVENTS = {}
