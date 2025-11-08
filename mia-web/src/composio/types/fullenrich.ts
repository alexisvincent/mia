// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FULLENRICH's FULLENRICH_CREATE_CONTACT_DATA_LIST tool input.
 */
type FULLENRICH_CREATE_CONTACT_DATA_LIST_INPUT = {
  /**
   * Contacts
   * @description List of contact specifications to validate and prepare for bulk enrichment
   */
  contacts?: {
      /**
       * Company Name
       * @description Contact's company name; alternative to domain when using names
       * @default null
       */
      company_name: string | null;
      /**
       * Custom
       * @description Free-form metadata; values must be strings
       * @default null
       */
      custom: {
          [key: string]: string;
      } | null;
      /**
       * Domain
       * @description Contact's domain; required with firstname and lastname
       * @default null
       */
      domain: string | null;
      /**
       * Enrich Fields
       * @description Fields to enrich (e.g., ['contact.emails','contact.phones']); must be non-empty if provided
       * @default null
       */
      enrich_fields: string[] | null;
      /**
       * Firstname
       * @description Contact's first name; required if not using linkedin_url
       * @default null
       */
      firstname: string | null;
      /**
       * Lastname
       * @description Contact's last name; required if not using linkedin_url
       * @default null
       */
      lastname: string | null;
      /**
       * Linkedin Url
       * @description Full LinkedIn profile URL. If provided, names and domain/company_name are ignored
       * @default null
       */
      linkedin_url: string | null;
  }[];
};

/**
 * Type of FULLENRICH's FULLENRICH_CREATE_CONTACT_DATA_LIST tool output.
 */
type FULLENRICH_CREATE_CONTACT_DATA_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datas
       * @description Validated list of contact data objects ready for bulk enrichment
       */
      datas: {
          [key: string]: unknown;
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
 * Type of FULLENRICH's FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT tool input.
 */
type FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT_INPUT = {
  /**
   * Enrichment Id
   * @description Bulk enrichment job ID to fetch
   */
  enrichment_id?: string;
  /**
   * Force Results
   * @description Return partial results even if job is not finished (may be incomplete)
   * @default false
   */
  forceResults: boolean;
};

/**
 * Type of FULLENRICH's FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT tool output.
 */
type FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost details for the enrichment job
       */
      cost: {
          /**
           * Credits
           * @description Number of credits consumed by the enrichment job
           */
          credits: number;
      };
      /**
       * Datas
       * @description Array of enrichment result items
       */
      datas: {
          /**
           * Contact
           * @description Enriched contact data
           */
          contact: {
              /**
               * Domain
               * @description Contact's email domain
               * @default null
               */
              domain: string | null;
              /**
               * Emails
               * @description List of emails found for the contact
               */
              emails?: {
                  /**
                   * Email
                   * @description Enriched email address
                   */
                  email: string;
                  /**
                   * Status
                   * @description Status of the email (e.g., verified, risky)
                   */
                  status: string;
              }[];
              /**
               * Firstname
               * @description Contact's first name
               * @default null
               */
              firstname: string | null;
              /**
               * Lastname
               * @description Contact's last name
               * @default null
               */
              lastname: string | null;
              /**
               * Most Probable Email
               * @description Most probable email address
               * @default null
               */
              most_probable_email: string | null;
              /**
               * Most Probable Email Status
               * @description Status of most probable email
               * @default null
               */
              most_probable_email_status: string | null;
              /**
               * Most Probable Phone
               * @description Most probable phone number
               * @default null
               */
              most_probable_phone: string | null;
              /**
               * Phones
               * @description List of phone numbers found for the contact
               */
              phones?: {
                  /**
                   * Number
                   * @description Phone number
                   */
                  number: string;
                  /**
                   * Region
                   * @description Region or country code of the phone number
                   */
                  region: string;
              }[];
              /**
               * ContactProfile
               * @description Detailed profile information for the contact
               * @default null
               */
              profile: {
                  /**
                   * Firstname
                   * @description First name as detected on profile
                   * @default null
                   */
                  firstname: string | null;
                  /**
                   * Headline
                   * @description Profile headline or title
                   * @default null
                   */
                  headline: string | null;
                  /**
                   * Lastname
                   * @description Last name as detected on profile
                   * @default null
                   */
                  lastname: string | null;
                  /**
                   * Linkedin Handle
                   * @description LinkedIn handle or username
                   * @default null
                   */
                  linkedin_handle: string | null;
                  /**
                   * Linkedin Id
                   * @description LinkedIn profile ID
                   * @default null
                   */
                  linkedin_id: string | null;
                  /**
                   * Linkedin Url
                   * @description LinkedIn profile URL
                   * @default null
                   */
                  linkedin_url: string | null;
                  /**
                   * Location
                   * @description Profile location
                   * @default null
                   */
                  location: string | null;
                  /**
                   * Positions
                   * @description List of positions held on profile
                   */
                  positions?: {
                      /**
                       * Company
                       * @description Company details for this position
                       * @default null
                       */
                      company: {
                          /**
                           * Id
                           * @description Company unique ID
                           * @default null
                           */
                          id: string | null;
                          /**
                           * Industry
                           * @description Industry sector of the company
                           * @default null
                           */
                          industry: string | null;
                          /**
                           * Name
                           * @description Company name
                           * @default null
                           */
                          name: string | null;
                          /**
                           * Size
                           * @description Company size or employee count range
                           * @default null
                           */
                          size: string | null;
                          /**
                           * Website
                           * @description Company website URL
                           * @default null
                           */
                          website: string | null;
                      } | null;
                      /**
                       * End Date
                       * @description End date of the position, in ISO format
                       * @default null
                       */
                      end_date: string | null;
                      /**
                       * Id
                       * @description Position unique ID
                       * @default null
                       */
                      id: string | null;
                      /**
                       * Start Date
                       * @description Start date of the position, in ISO format
                       * @default null
                       */
                      start_date: string | null;
                      /**
                       * Title
                       * @description Job title
                       * @default null
                       */
                      title: string | null;
                  }[];
                  /**
                   * Premium Account
                   * @description Whether the profile has a premium account
                   * @default null
                   */
                  premium_account: boolean | null;
                  /**
                   * Sales Navigator Id
                   * @description Sales Navigator profile ID
                   * @default null
                   */
                  sales_navigator_id: string | null;
                  /**
                   * Summary
                   * @description Profile summary or bio
                   * @default null
                   */
                  summary: string | null;
              } | null;
              /**
               * Social Medias
               * @description List of social media profiles for the contact
               */
              social_medias?: {
                  /**
                   * Type
                   * @description Type of social media (e.g., LinkedIn, Twitter)
                   */
                  type: string;
                  /**
                   * Url
                   * @description URL of the social media profile
                   */
                  url: string;
              }[];
          };
          /**
           * Custom
           * @description Custom key/value pairs provided in enrichment request
           */
          custom: {
              [key: string]: string;
          };
      }[];
      /**
       * Id
       * @description Enrichment job ID
       */
      id: string;
      /**
       * Name
       * @description Enrichment job name
       */
      name: string;
      /**
       * Status
       * @description Status of the enrichment job
       * @enum {string}
       */
      status: "CREATED" | "IN_PROGRESS" | "CANCELED" | "CREDITS_INSUFFICIENT" | "FINISHED" | "RATE_LIMIT" | "UNKNOWN";
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
 * Type of FULLENRICH's FULLENRICH_GET_CURRENT_CREDIT_BALANCE tool input.
 */
type FULLENRICH_GET_CURRENT_CREDIT_BALANCE_INPUT = object;

/**
 * Type of FULLENRICH's FULLENRICH_GET_CURRENT_CREDIT_BALANCE tool output.
 */
type FULLENRICH_GET_CURRENT_CREDIT_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance
       * @description Number of credits available on your workspace
       */
      balance: number;
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
 * Type of FULLENRICH's FULLENRICH_START_BULK_ENRICHMENT tool input.
 */
type FULLENRICH_START_BULK_ENRICHMENT_INPUT = {
  /**
   * Check Domain
   * @description If false, skip contacts with invalid/missing domains
   * @default null
   */
  checkDomain: boolean | null;
  /**
   * Check Linkedin Url
   * @description If false, skip contacts with invalid/missing LinkedIn URLs
   * @default null
   */
  checkLinkedinUrl: boolean | null;
  /**
   * Datas
   * @description List of 1–100 contacts to enrich; see ContactData for details
   */
  datas?: {
      /**
       * Company Name
       * @description Contact's company name; alternative to domain when using names
       * @default null
       */
      company_name: string | null;
      /**
       * Custom
       * @description Free-form metadata; values must be strings. Numbers or nested objects will error
       * @default null
       */
      custom: {
          [key: string]: string;
      } | null;
      /**
       * Domain
       * @description Contact's domain; required with firstname and lastname
       * @default null
       */
      domain: string | null;
      /**
       * Enrich Fields
       * @description Fields to enrich (e.g., ['contact.emails','contact.phones']); omit to get default fields
       * @default null
       */
      enrich_fields: string[] | null;
      /**
       * Firstname
       * @description Contact's first name; required if not using linkedin_url
       * @default null
       */
      firstname: string | null;
      /**
       * Lastname
       * @description Contact's last name; required if not using linkedin_url
       * @default null
       */
      lastname: string | null;
      /**
       * Linkedin Url
       * @description Full LinkedIn profile URL. If provided, names and domain/company_name are ignored
       * @default null
       */
      linkedin_url: string | null;
  }[];
  /**
   * Name
   * @description Human-readable job name (e.g., 'Sales Operations in London')
   */
  name?: string;
  /**
   * Webhook Url
   * @description URL to receive a POST callback when job finishes, fails, or lacks credits
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of FULLENRICH's FULLENRICH_START_BULK_ENRICHMENT tool output.
 */
type FULLENRICH_START_BULK_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Enrichment Id
       * @description ID of the started bulk enrichment job
       */
      enrichment_id: string;
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
 * Type map of all available tool input types for toolkit "FULLENRICH".
 */
export type FULLENRICH_TOOL_INPUTS = {
  CREATE_CONTACT_DATA_LIST: FULLENRICH_CREATE_CONTACT_DATA_LIST_INPUT
  FULLENRICH_GET_ENRICHMENT_RESULT: FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT_INPUT
  GET_CURRENT_CREDIT_BALANCE: FULLENRICH_GET_CURRENT_CREDIT_BALANCE_INPUT
  START_BULK_ENRICHMENT: FULLENRICH_START_BULK_ENRICHMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FULLENRICH".
 */
export type FULLENRICH_TOOL_OUTPUTS = {
  CREATE_CONTACT_DATA_LIST: FULLENRICH_CREATE_CONTACT_DATA_LIST_OUTPUT
  FULLENRICH_GET_ENRICHMENT_RESULT: FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT_OUTPUT
  GET_CURRENT_CREDIT_BALANCE: FULLENRICH_GET_CURRENT_CREDIT_BALANCE_OUTPUT
  START_BULK_ENRICHMENT: FULLENRICH_START_BULK_ENRICHMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FULLENRICH toolkit.
 */
export const FULLENRICH = {
  slug: "fullenrich",
  tools: {
    /**
     * Tool to create a list of contact data entries. Use when preparing the 'datas' payload for bulk enrichment; validates each contact's composition and returns a JSON-ready list.
     */
    CREATE_CONTACT_DATA_LIST: "FULLENRICH_CREATE_CONTACT_DATA_LIST",
    /**
     * Tool to retrieve results of a bulk enrichment by enrichment ID. Use after confirming the job has been submitted to fetch status and enriched data.
     */
    FULLENRICH_GET_ENRICHMENT_RESULT: "FULLENRICH_FULLENRICH_GET_ENRICHMENT_RESULT",
    /**
     * Tool to retrieve current workspace credit balance. Use after authenticating your API key.
     */
    GET_CURRENT_CREDIT_BALANCE: "FULLENRICH_GET_CURRENT_CREDIT_BALANCE",
    /**
     * Tool to start a bulk enrichment job. Use when you have up to 100 contacts prepared and need batch enrichment. Use after confirming contact data.
     */
    START_BULK_ENRICHMENT: "FULLENRICH_START_BULK_ENRICHMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FULLENRICH".
 */
export type FULLENRICH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FULLENRICH".
 */
export type FULLENRICH_TRIGGER_EVENTS = {}
