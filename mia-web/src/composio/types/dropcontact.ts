// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DROPCONTACT's DROPCONTACT_ENRICH_CONTACTS tool input.
 */
type DROPCONTACT_ENRICH_CONTACTS_INPUT = {
  /**
   * Data
   * @description List of contacts to enrich (1-250).
   */
  data?: {
      /**
       * Company
       * @description Name of the company.
       * @default null
       */
      company: string | null;
      /**
       * Email
       * @description Contact's email address.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Contact's first name.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Contact's last name.
       * @default null
       */
      last_name: string | null;
      /**
       * Linkedin
       * @description LinkedIn profile URL or identifier.
       * @default null
       */
      linkedin: string | null;
      /**
       * Siren
       * @description French company SIREN number.
       * @default null
       */
      siren: string | null;
      /**
       * Website
       * @description Company website URL.
       * @default null
       */
      website: string | null;
  }[];
  /**
   * Personal Datas
   * @description Whether to include personal data.
   * @default false
   */
  personal_datas: boolean | null;
};

/**
 * Type of DROPCONTACT's DROPCONTACT_ENRICH_CONTACTS tool output.
 */
type DROPCONTACT_ENRICH_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Per-contact enrichment results.
   */
  data?: {
      /**
       * Input
       * @description Original input data.
       */
      input: {
          /**
           * Company
           * @description Name of the company.
           * @default null
           */
          company: string | null;
          /**
           * Email
           * @description Contact's email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Contact's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Contact's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Linkedin
           * @description LinkedIn profile URL or identifier.
           * @default null
           */
          linkedin: string | null;
          /**
           * Siren
           * @description French company SIREN number.
           * @default null
           */
          siren: string | null;
          /**
           * Website
           * @description Company website URL.
           * @default null
           */
          website: string | null;
      };
      /**
       * Reason
       * @description Error reason when status is not 'ok'.
       * @default null
       */
      reason: string | null;
      /**
       * Result
       * @description Enriched information for this contact.
       */
      result: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status for this contact (e.g., 'ok', 'error').
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier.
   */
  request_id?: string;
  /**
   * Status
   * @description Overall status of the enrichment.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DROPCONTACT's DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS tool input.
 */
type DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of DROPCONTACT's DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS tool output.
 */
type DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriptions
       * @description List of active webhook subscriptions
       */
      subscriptions: {
          /**
           * Created At
           * @description Creation date (ISO 8601 format)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the subscription
           */
          id: string;
          /**
           * Status
           * @description Status of the subscription (enabled or disabled)
           */
          status: string;
          /**
           * Type
           * @description Type of webhook event
           */
          type: string;
          /**
           * Updated At
           * @description Last update date (ISO 8601 format)
           */
          updated_at: string;
          /**
           * Webhook Url
           * @description The configured webhook URL
           */
          webhook_url: string;
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
 * Type of DROPCONTACT's DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS tool input.
 */
type DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS_INPUT = {
  /**
   * Request Id
   * @description The unique identifier for the enrichment request
   */
  request_id?: string;
};

/**
 * Type of DROPCONTACT's DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS tool output.
 */
type DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS_OUTPUT = {
  /**
   * Code
   * @description HTTP-like status code of the request
   */
  code?: number;
  /**
   * Data
   * @description List of enriched contacts information
   */
  data?: ({
      /**
       * Company
       * @description Enriched company name
       * @default null
       */
      company: string | null;
      /**
       * Email
       * @description Enriched email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Enriched first name
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Enriched last name
       * @default null
       */
      last_name: string | null;
      /**
       * Phone
       * @description Enriched phone number
       * @default null
       */
      phone: string | null;
      /**
       * Position
       * @description Enriched job position/job title
       * @default null
       */
      position: string | null;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error or informational message, if applicable
   * @default null
   */
  message: string | null;
  /**
   * Request Id
   * @description The ID of the enrichment request
   */
  request_id?: string;
  /**
   * Status
   * @description Status of the enrichment request (e.g., 'waiting', 'ok', 'error')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "DROPCONTACT".
 */
export type DROPCONTACT_TOOL_INPUTS = {
  ENRICH_CONTACTS: DROPCONTACT_ENRICH_CONTACTS_INPUT
  LIST_WEBHOOK_SUBSCRIPTIONS: DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS_INPUT
  RETRIEVE_ENRICHMENT_RESULTS: DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DROPCONTACT".
 */
export type DROPCONTACT_TOOL_OUTPUTS = {
  ENRICH_CONTACTS: DROPCONTACT_ENRICH_CONTACTS_OUTPUT
  LIST_WEBHOOK_SUBSCRIPTIONS: DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS_OUTPUT
  RETRIEVE_ENRICHMENT_RESULTS: DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DROPCONTACT toolkit.
 */
export const DROPCONTACT = {
  slug: "dropcontact",
  tools: {
    /**
     * Tool to batch enrich contacts with email validation and company info. use after gathering up to 250 contacts.
     */
    ENRICH_CONTACTS: "DROPCONTACT_ENRICH_CONTACTS",
    /**
     * Tool to list webhook subscriptions. use when you need to inspect your configured webhooks.
     */
    LIST_WEBHOOK_SUBSCRIPTIONS: "DROPCONTACT_LIST_WEBHOOK_SUBSCRIPTIONS",
    /**
     * Tool to retrieve enrichment results. use after submitting enrichment requests and use when you need to fetch the completed enrichment data by request id.
     */
    RETRIEVE_ENRICHMENT_RESULTS: "DROPCONTACT_RETRIEVE_ENRICHMENT_RESULTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DROPCONTACT".
 */
export type DROPCONTACT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DROPCONTACT".
 */
export type DROPCONTACT_TRIGGER_EVENTS = {}
