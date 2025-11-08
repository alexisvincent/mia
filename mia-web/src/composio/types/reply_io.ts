// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REPLY_IO's REPLY_IO_DELETE_CAMPAIGN tool input.
 */
type REPLY_IO_DELETE_CAMPAIGN_INPUT = {
  /**
   * Id
   * @description Campaign (sequence) ID to delete, must be a positive integer
   */
  id?: number;
};

/**
 * Type of REPLY_IO's REPLY_IO_DELETE_CAMPAIGN tool output.
 */
type REPLY_IO_DELETE_CAMPAIGN_OUTPUT = {
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
 * Type of REPLY_IO's REPLY_IO_DELETE_EMAIL_ACCOUNT tool input.
 */
type REPLY_IO_DELETE_EMAIL_ACCOUNT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the email account to delete
   */
  id?: string;
};

/**
 * Type of REPLY_IO's REPLY_IO_DELETE_EMAIL_ACCOUNT tool output.
 */
type REPLY_IO_DELETE_EMAIL_ACCOUNT_OUTPUT = {
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
 * Type of REPLY_IO's REPLY_IO_DELETE_SEQUENCE tool input.
 */
type REPLY_IO_DELETE_SEQUENCE_INPUT = {
  /**
   * Id
   * @description Sequence ID to delete; must be an integer ≥ 1
   */
  id?: number;
};

/**
 * Type of REPLY_IO's REPLY_IO_DELETE_SEQUENCE tool output.
 */
type REPLY_IO_DELETE_SEQUENCE_OUTPUT = {
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
 * Type of REPLY_IO's REPLY_IO_DELETE_USER tool input.
 */
type REPLY_IO_DELETE_USER_INPUT = {
  /**
   * Id
   * @description User ID to delete; string identifier to maximize compatibility
   */
  id?: string;
};

/**
 * Type of REPLY_IO's REPLY_IO_DELETE_USER tool output.
 */
type REPLY_IO_DELETE_USER_OUTPUT = {
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
 * Type of REPLY_IO's REPLY_IO_GENERATE_ULID tool input.
 */
type REPLY_IO_GENERATE_ULID_INPUT = object;

/**
 * Type of REPLY_IO's REPLY_IO_GENERATE_ULID tool output.
 */
type REPLY_IO_GENERATE_ULID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ulid
       * @description The newly generated ULID string
       */
      ulid: string;
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
 * Type of REPLY_IO's REPLY_IO_LIST_CAMPAIGNS tool input.
 */
type REPLY_IO_LIST_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of items per page, must be ≥ 1
   * @default 20
   */
  limit: number;
  /**
   * Name
   * @description Filter campaigns by name (exact match or contains, depending on API)
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve (1-based indexing)
   * @default 1
   */
  page: number;
};

/**
 * Type of REPLY_IO's REPLY_IO_LIST_CAMPAIGNS tool output.
 */
type REPLY_IO_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Pagination information
       */
      info: {
          /**
           * Has More
           * @description Whether more items are available beyond this page
           */
          hasMore: boolean;
      };
      /**
       * Items
       * @description Array of campaigns returned for this page
       */
      items: {
          /**
           * Created
           * @description Timestamp when the sequence was created
           */
          created: string;
          /**
           * Id
           * @description Sequence ID
           */
          id: number;
          /**
           * Is Archived
           * @description Flag indicating whether the sequence is archived
           */
          isArchived: boolean;
          /**
           * Name
           * @description Sequence name
           */
          name: string;
          /**
           * Owner Id
           * @description User ID of the sequence owner
           */
          ownerId: number;
          /**
           * Status
           * @description Current status of the sequence
           * @enum {string}
           */
          status: "New" | "Active" | "Paused" | "Archived";
          /**
           * Team Id
           * @description Team ID to which this sequence belongs
           */
          teamId: number;
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
 * Type of REPLY_IO's REPLY_IO_LIST_CONTACTS_BASIC tool input.
 */
type REPLY_IO_LIST_CONTACTS_BASIC_INPUT = {
  /**
   * Limit
   * @description Number of items per page (max 100)
   * @default 20
   */
  limit: number;
  /**
   * Page
   * @description Page number to retrieve (1-based indexing)
   * @default 1
   */
  page: number;
};

/**
 * Type of REPLY_IO's REPLY_IO_LIST_CONTACTS_BASIC tool output.
 */
type REPLY_IO_LIST_CONTACTS_BASIC_OUTPUT = {
  /**
   * Data
   * @description List of contacts on this page
   */
  data?: {
      /**
       * Adding Date
       * @description Date contact was added (ISO 8601)
       * @default null
       */
      addingDate: string | null;
      /**
       * City
       * @description Contact city
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Contact company name
       * @default null
       */
      company: string | null;
      /**
       * Company Size
       * @description Company size range
       * @default null
       */
      companySize: string | null;
      /**
       * Country
       * @description Contact country
       * @default null
       */
      country: string | null;
      /**
       * Custom Fields
       * @description List of custom fields
       * @default null
       */
      customFields: {
          /**
           * Key
           * @description Custom field key
           */
          key: string;
          /**
           * Value
           * @description Custom field value
           */
          value: string;
      }[] | null;
      /**
       * Domain
       * @description Company domain
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * @description Contact email address
       */
      email: string;
      /**
       * First Name
       * @description Contact first name
       * @default null
       */
      firstName: string | null;
      /**
       * Full Name
       * @description Contact full name
       * @default null
       */
      fullName: string | null;
      /**
       * Id
       * @description Unique contact ID
       */
      id: number;
      /**
       * Industry
       * @description Industry sector
       * @default null
       */
      industry: string | null;
      /**
       * Last Name
       * @description Contact last name
       * @default null
       */
      lastName: string | null;
      /**
       * Linked In Profile
       * @description LinkedIn profile URL
       * @default null
       */
      linkedInProfile: string | null;
      /**
       * Linked In Recruiter
       * @description LinkedIn Recruiter URL
       * @default null
       */
      linkedInRecruiter: string | null;
      /**
       * Linked In Sales Navigator
       * @description LinkedIn Sales Navigator URL
       * @default null
       */
      linkedInSalesNavigator: string | null;
      /**
       * Notes
       * @description Additional notes
       * @default null
       */
      notes: string | null;
      /**
       * Phone
       * @description Contact phone number
       * @default null
       */
      phone: string | null;
      /**
       * Phone Status
       * @description Phone validation status
       * @default null
       */
      phoneStatus: string | null;
      /**
       * State
       * @description Contact state
       * @default null
       */
      state: string | null;
      /**
       * Time Zone
       * @description Contact time zone
       * @default null
       */
      timeZone: string | null;
      /**
       * Title
       * @description Contact job title
       * @default null
       */
      title: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details
   */
  pagination?: {
      /**
       * Current Page
       * @description Current page number
       */
      currentPage: number;
      /**
       * Limit
       * @description Number of items per page in this response
       */
      limit: number;
      /**
       * Pages
       * @description Total number of pages
       */
      pages: number;
      /**
       * Total
       * @description Total number of contacts
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of REPLY_IO's REPLY_IO_LIST_EMAIL_ACCOUNTS tool input.
 */
type REPLY_IO_LIST_EMAIL_ACCOUNTS_INPUT = {
  /**
   * Limit
   * @description Number of items per page (max 100)
   * @default 10
   */
  limit: number;
  /**
   * Page
   * @description Page number to retrieve (1-based indexing)
   * @default 1
   */
  page: number;
  /**
   * Status
   * @description Filter by account status (active/inactive)
   * @default null
   */
  status: string | null;
};

/**
 * Type of REPLY_IO's REPLY_IO_LIST_EMAIL_ACCOUNTS tool output.
 */
type REPLY_IO_LIST_EMAIL_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description List of email accounts on this page
   */
  data?: {
      /**
       * Email Address
       * Format: email
       * @description Email address used for sending
       */
      emailAddress: unknown;
      /**
       * Id
       * @description Unique email account ID
       */
      id: number;
      /**
       * Sender Name
       * @description Sender display name
       */
      senderName: string;
      /**
       * Signature
       * @description Email signature
       * @default null
       */
      signature: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details
   */
  pagination?: {
      /**
       * Current Page
       * @description Current page number
       */
      currentPage: number;
      /**
       * Limit
       * @description Number of items per page in this response
       */
      limit: number;
      /**
       * Pages
       * @description Total number of pages
       */
      pages: number;
      /**
       * Total
       * @description Total number of email accounts
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of REPLY_IO's REPLY_IO_LIST_LISTS tool input.
 */
type REPLY_IO_LIST_LISTS_INPUT = object;

/**
 * Type of REPLY_IO's REPLY_IO_LIST_LISTS tool output.
 */
type REPLY_IO_LIST_LISTS_OUTPUT = {
  /**
   * Data
   * @description Array of contact list objects
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the contact list
       */
      id: number;
      /**
       * Name
       * @description Name of the contact list
       */
      name: string;
  }[];
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
 * Type of REPLY_IO's REPLY_IO_LIST_SEQUENCES tool input.
 */
type REPLY_IO_LIST_SEQUENCES_INPUT = {
  /**
   * Limit
   * @description Number of items per page, between 1 and 100
   * @default 50
   */
  limit: number;
  /**
   * Name
   * @description Filter sequences by name
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number, starting at 1
   * @default 1
   */
  page: number;
};

/**
 * Type of REPLY_IO's REPLY_IO_LIST_SEQUENCES tool output.
 */
type REPLY_IO_LIST_SEQUENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Pagination metadata
       */
      info: {
          /**
           * Has More
           * @description Indicates whether additional items are available
           */
          hasMore: boolean;
      };
      /**
       * Items
       * @description List of sequence objects
       */
      items: {
          /**
           * Created At
           * @description ISO timestamp when sequence was created
           */
          createdAt: string;
          /**
           * Created By
           * @description User UUID who created the sequence
           * @default null
           */
          createdBy: string | null;
          /**
           * Email Accounts
           * @description Email accounts attached to the sequence
           * @default null
           */
          emailAccounts: unknown[] | null;
          /**
           * Id
           * @description Unique sequence identifier
           */
          id: number;
          /**
           * Is Archived
           * @description Indicates if the sequence is archived
           */
          isArchived: boolean;
          /**
           * Meta
           * @description Additional metadata for the sequence
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Sequence name
           */
          name: string;
          /**
           * Owner Id
           * @description Owner UUID of the sequence
           */
          ownerId: string;
          /**
           * Schedule Id
           * @description Scheduler ID if assigned
           * @default null
           */
          scheduleId: number | null;
          /**
           * Settings
           * @description Settings configuration of the sequence
           * @default null
           */
          settings: {
              [key: string]: unknown;
          } | null;
          /**
           * Status
           * @description Current sequence status
           * @enum {string}
           */
          status: "New" | "Active" | "Paused" | "Archived" | "Error";
          /**
           * Steps
           * @description Steps included in the sequence
           * @default null
           */
          steps: unknown[] | null;
          /**
           * Team Id
           * @description Team UUID associated with the sequence
           */
          teamId: string;
          /**
           * Updated At
           * @description ISO timestamp when sequence was last updated
           * @default null
           */
          updatedAt: string | null;
          /**
           * Updated By
           * @description User UUID who last updated the sequence
           * @default null
           */
          updatedBy: string | null;
          /**
           * Version
           * @description Version number of the sequence
           * @default null
           */
          version: number | null;
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
 * Type of REPLY_IO's REPLY_IO_SEARCH_CONTACTS tool input.
 */
type REPLY_IO_SEARCH_CONTACTS_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to search for.
   */
  email?: unknown;
};

/**
 * Type of REPLY_IO's REPLY_IO_SEARCH_CONTACTS tool output.
 */
type REPLY_IO_SEARCH_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts matching the search criteria.
       */
      contacts: {
          /**
           * Adding Date
           * Format: date-time
           * @description Creation timestamp.
           * @default null
           */
          addingDate: unknown;
          /**
           * City
           * @description City of residence.
           * @default null
           */
          city: string | null;
          /**
           * Company
           * @description Organization name.
           * @default null
           */
          company: string | null;
          /**
           * Company Size
           * @description Organization employee count.
           * @default null
           */
          companySize: string | null;
          /**
           * Country
           * @description Country.
           * @default null
           */
          country: string | null;
          /**
           * Custom Fields
           * @description List of user-defined custom fields.
           * @default null
           */
          customFields: {
              /**
               * Key
               * @description Custom field key.
               * @default null
               */
              key: string | null;
              /**
               * Value
               * @description Custom field value.
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Domain
           * @description Email domain.
           * @default null
           */
          domain: string | null;
          /**
           * Email
           * Format: email
           * @description Primary email address.
           */
          email: unknown;
          /**
           * First Name
           * @description First name.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique contact ID.
           */
          id: number;
          /**
           * Industry
           * @description Business sector.
           * @default null
           */
          industry: string | null;
          /**
           * Last Name
           * @description Last name.
           * @default null
           */
          lastName: string | null;
          /**
           * Linked In Profile
           * Format: uri
           * @description LinkedIn profile URL.
           * @default null
           */
          linkedInProfile: unknown;
          /**
           * Linked In Recruiter
           * Format: uri
           * @description LinkedIn Recruiter URL.
           * @default null
           */
          linkedInRecruiter: unknown;
          /**
           * Linked In Sales Navigator
           * Format: uri
           * @description LinkedIn Sales Navigator URL.
           * @default null
           */
          linkedInSalesNavigator: unknown;
          /**
           * Notes
           * @description Additional information.
           * @default null
           */
          notes: string | null;
          /**
           * Phone
           * @description Phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Phone Status
           * @description Phone validation status.
           * @default null
           */
          phoneStatus: string | null;
          /**
           * State
           * @description State or province.
           * @default null
           */
          state: string | null;
          /**
           * Time Zone
           * @description Timezone identifier.
           * @default null
           */
          timeZone: string | null;
          /**
           * Title
           * @description Job title.
           * @default null
           */
          title: string | null;
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
 * Type map of all available tool input types for toolkit "REPLY_IO".
 */
export type REPLY_IO_TOOL_INPUTS = {
  DELETE_CAMPAIGN: REPLY_IO_DELETE_CAMPAIGN_INPUT
  DELETE_EMAIL_ACCOUNT: REPLY_IO_DELETE_EMAIL_ACCOUNT_INPUT
  DELETE_SEQUENCE: REPLY_IO_DELETE_SEQUENCE_INPUT
  DELETE_USER: REPLY_IO_DELETE_USER_INPUT
  GENERATE_ULID: REPLY_IO_GENERATE_ULID_INPUT
  LIST_CAMPAIGNS: REPLY_IO_LIST_CAMPAIGNS_INPUT
  LIST_CONTACTS_BASIC: REPLY_IO_LIST_CONTACTS_BASIC_INPUT
  LIST_EMAIL_ACCOUNTS: REPLY_IO_LIST_EMAIL_ACCOUNTS_INPUT
  LIST_LISTS: REPLY_IO_LIST_LISTS_INPUT
  LIST_SEQUENCES: REPLY_IO_LIST_SEQUENCES_INPUT
  SEARCH_CONTACTS: REPLY_IO_SEARCH_CONTACTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REPLY_IO".
 */
export type REPLY_IO_TOOL_OUTPUTS = {
  DELETE_CAMPAIGN: REPLY_IO_DELETE_CAMPAIGN_OUTPUT
  DELETE_EMAIL_ACCOUNT: REPLY_IO_DELETE_EMAIL_ACCOUNT_OUTPUT
  DELETE_SEQUENCE: REPLY_IO_DELETE_SEQUENCE_OUTPUT
  DELETE_USER: REPLY_IO_DELETE_USER_OUTPUT
  GENERATE_ULID: REPLY_IO_GENERATE_ULID_OUTPUT
  LIST_CAMPAIGNS: REPLY_IO_LIST_CAMPAIGNS_OUTPUT
  LIST_CONTACTS_BASIC: REPLY_IO_LIST_CONTACTS_BASIC_OUTPUT
  LIST_EMAIL_ACCOUNTS: REPLY_IO_LIST_EMAIL_ACCOUNTS_OUTPUT
  LIST_LISTS: REPLY_IO_LIST_LISTS_OUTPUT
  LIST_SEQUENCES: REPLY_IO_LIST_SEQUENCES_OUTPUT
  SEARCH_CONTACTS: REPLY_IO_SEARCH_CONTACTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REPLY_IO toolkit.
 */
export const REPLY_IO = {
  slug: "reply_io",
  tools: {
    /**
     * Tool to delete a campaign by id. use when you need to remove an existing campaign; use after confirming the campaign id.
     */
    DELETE_CAMPAIGN: "REPLY_IO_DELETE_CAMPAIGN",
    /**
     * Tool to delete a specific email account. use when you need to remove an existing email account identified by its id.
     */
    DELETE_EMAIL_ACCOUNT: "REPLY_IO_DELETE_EMAIL_ACCOUNT",
    /**
     * Tool to delete a sequence. use after confirming the sequence exists to remove it permanently.
     */
    DELETE_SEQUENCE: "REPLY_IO_DELETE_SEQUENCE",
    /**
     * Tool to delete a user. use after confirming the user exists to remove them permanently.
     */
    DELETE_USER: "REPLY_IO_DELETE_USER",
    /**
     * Tool to generate a ulid string. use when a unique identifier is required for creating tasks or other entities in reply.io.
     */
    GENERATE_ULID: "REPLY_IO_GENERATE_ULID",
    /**
     * Tool to list all campaigns (sequences). use when you need a paginated list of campaigns.
     */
    LIST_CAMPAIGNS: "REPLY_IO_LIST_CAMPAIGNS",
    /**
     * Tool to list all contacts. use when verifying api access and gathering contact ids for testing contact creation.
     */
    LIST_CONTACTS_BASIC: "REPLY_IO_LIST_CONTACTS_BASIC",
    /**
     * Tool to list all email accounts. use when you need to retrieve email accounts page by page.
     */
    LIST_EMAIL_ACCOUNTS: "REPLY_IO_LIST_EMAIL_ACCOUNTS",
    /**
     * Tool to list all contact lists. use when you need to retrieve all available lists in your reply.io account.
     */
    LIST_LISTS: "REPLY_IO_LIST_LISTS",
    /**
     * Tool to retrieve a paginated list of sequences. use when you need to browse sequences with optional filtering by name.
     */
    LIST_SEQUENCES: "REPLY_IO_LIST_SEQUENCES",
    /**
     * Tool to search contacts by email. use when you need to find existing contact ids for update tests.
     */
    SEARCH_CONTACTS: "REPLY_IO_SEARCH_CONTACTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REPLY_IO".
 */
export type REPLY_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REPLY_IO".
 */
export type REPLY_IO_TRIGGER_EVENTS = {}
