// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REPLY's REPLY_CREATE_LIST tool input.
 */
type REPLY_CREATE_LIST_INPUT = {
  /**
   * Name
   * @description Name of the new personal list to create.
   */
  name?: string;
};

/**
 * Type of REPLY's REPLY_CREATE_LIST tool output.
 */
type REPLY_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created list.
       */
      id: number;
      /**
       * Name
       * @description Name of the created list.
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
 * Type of REPLY's REPLY_DELETE_LIST_BY_ID tool input.
 */
type REPLY_DELETE_LIST_BY_ID_INPUT = {
  /**
   * List Id
   * @description ID of the personal list to delete. Only lists owned by the authenticated user can be deleted.
   */
  listId?: number;
};

/**
 * Type of REPLY's REPLY_DELETE_LIST_BY_ID tool output.
 */
type REPLY_DELETE_LIST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of REPLY's REPLY_GET_ALL_LISTS tool input.
 */
type REPLY_GET_ALL_LISTS_INPUT = object;

/**
 * Type of REPLY's REPLY_GET_ALL_LISTS tool output.
 */
type REPLY_GET_ALL_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description List of available people lists
       */
      lists: {
          /**
           * Id
           * @description Unique identifier of the list
           */
          id: number;
          /**
           * Name
           * @description Name of the list
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
 * Type of REPLY's REPLY_GET_BLACKLIST_ALL tool input.
 */
type REPLY_GET_BLACKLIST_ALL_INPUT = object;

/**
 * Type of REPLY's REPLY_GET_BLACKLIST_ALL tool output.
 */
type REPLY_GET_BLACKLIST_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description A list of all blacklisted domains and email addresses.
       */
      domains: string[];
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
 * Type of REPLY's REPLY_GET_CAMPAIGNS_FOR_CONTACT tool input.
 */
type REPLY_GET_CAMPAIGNS_FOR_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description ID of the contact to retrieve associated campaigns for.
   */
  contactId?: number;
};

/**
 * Type of REPLY's REPLY_GET_CAMPAIGNS_FOR_CONTACT tool output.
 */
type REPLY_GET_CAMPAIGNS_FOR_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of sequences (campaigns) associated with the contact.
       */
      campaigns: {
          /**
           * Is Sequence Owner
           * @description Indicates if the sequence belongs to the current user.
           */
          isSequenceOwner: boolean;
          /**
           * Sequence Id
           * @description ID of the sequence (campaign).
           */
          sequenceId: number;
          /**
           * Sequence Name
           * @description Name of the sequence (campaign).
           */
          sequenceName: string;
          /**
           * Status
           * @description Current status of the sequence (e.g., Active).
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
 * Type of REPLY's REPLY_GET_CAMPAIGN_SCHEDULES_ALL tool input.
 */
type REPLY_GET_CAMPAIGN_SCHEDULES_ALL_INPUT = object;

/**
 * Type of REPLY's REPLY_GET_CAMPAIGN_SCHEDULES_ALL tool output.
 */
type REPLY_GET_CAMPAIGN_SCHEDULES_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schedules
       * @description List of campaign schedules (default and user-created).
       */
      schedules: {
          /**
           * Follow Up Timings
           * @description Follow-up schedule timings per day.
           */
          followUpTimings: {
              /**
               * Is Active
               * @description Whether this day is active in the schedule.
               */
              isActive: boolean;
              /**
               * Time Ranges
               * @description List of time ranges for this day.
               */
              timeRanges: {
                  /**
                   * From Time
                   * @description Start time of the range.
                   */
                  fromTime: {
                      /**
                       * Hour
                       * @description Hour of the time (0-24).
                       */
                      hour: number;
                      /**
                       * Minute
                       * @description Minute of the time (0-59).
                       */
                      minute: number;
                  };
                  /**
                   * To Time
                   * @description End time of the range.
                   */
                  toTime: {
                      /**
                       * Hour
                       * @description Hour of the time (0-24).
                       */
                      hour: number;
                      /**
                       * Minute
                       * @description Minute of the time (0-59).
                       */
                      minute: number;
                  };
              }[];
              /**
               * Week Day
               * @description Name of the weekday, e.g., 'Monday'.
               */
              weekDay: string;
          }[];
          /**
           * Id
           * @description Unique identifier for the schedule.
           */
          id: number;
          /**
           * Is Default
           * @description Indicates if this is the default schedule.
           */
          isDefault: boolean;
          /**
           * Main Timings
           * @description Primary schedule timings per day.
           */
          mainTimings: {
              /**
               * Is Active
               * @description Whether this day is active in the schedule.
               */
              isActive: boolean;
              /**
               * Time Ranges
               * @description List of time ranges for this day.
               */
              timeRanges: {
                  /**
                   * From Time
                   * @description Start time of the range.
                   */
                  fromTime: {
                      /**
                       * Hour
                       * @description Hour of the time (0-24).
                       */
                      hour: number;
                      /**
                       * Minute
                       * @description Minute of the time (0-59).
                       */
                      minute: number;
                  };
                  /**
                   * To Time
                   * @description End time of the range.
                   */
                  toTime: {
                      /**
                       * Hour
                       * @description Hour of the time (0-24).
                       */
                      hour: number;
                      /**
                       * Minute
                       * @description Minute of the time (0-59).
                       */
                      minute: number;
                  };
              }[];
              /**
               * Week Day
               * @description Name of the weekday, e.g., 'Monday'.
               */
              weekDay: string;
          }[];
          /**
           * Name
           * @description Name of the schedule.
           */
          name: string;
          /**
           * Timezone Id
           * @description Timezone identifier for the schedule.
           */
          timezoneId: string;
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
 * Type of REPLY's REPLY_GET_CONTACTS_IN_LIST_BY_ID tool input.
 */
type REPLY_GET_CONTACTS_IN_LIST_BY_ID_INPUT = {
  /**
   * Limit
   * @description Number of contacts per page (default is 20, max is 100)
   * @default 20
   */
  limit: number;
  /**
   * List Id
   * @description Unique identifier of the list to retrieve contacts from
   */
  list_id?: string;
  /**
   * Page
   * @description Page number for pagination (default is 1)
   * @default 1
   */
  page: number;
};

/**
 * Type of REPLY's REPLY_GET_CONTACTS_IN_LIST_BY_ID tool output.
 */
type REPLY_GET_CONTACTS_IN_LIST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description List of contacts in the specified list
   */
  data?: {
      /**
       * Adding Date
       * @description Date when the contact was added
       * @default null
       */
      addingDate: string | null;
      /**
       * City
       * @description Contact's city
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Contact's company name
       * @default null
       */
      company: string | null;
      /**
       * Company Size
       * @description Size of the contact's company
       * @default null
       */
      companySize: string | null;
      /**
       * Country
       * @description Contact's country
       * @default null
       */
      country: string | null;
      /**
       * Custom Fields
       * @description Custom fields associated with the contact
       */
      customFields?: {
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
      }[];
      /**
       * Domain
       * @description Contact's company domain
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * @description Contact's email address
       */
      email: string;
      /**
       * First Name
       * @description Contact's first name
       * @default null
       */
      firstName: string | null;
      /**
       * Full Name
       * @description Contact's full name
       * @default null
       */
      fullName: string | null;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: string;
      /**
       * Industry
       * @description Industry of the contact's company
       * @default null
       */
      industry: string | null;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      lastName: string | null;
      /**
       * Linked In Profile
       * @description URL to the contact's LinkedIn profile
       * @default null
       */
      linkedInProfile: string | null;
      /**
       * Linked In Recruiter
       * @description URL to the contact's LinkedIn Recruiter profile
       * @default null
       */
      linkedInRecruiter: string | null;
      /**
       * Linked In Sales Navigator
       * @description URL to the contact's LinkedIn Sales Navigator profile
       * @default null
       */
      linkedInSalesNavigator: string | null;
      /**
       * Notes
       * @description Notes associated with the contact
       * @default null
       */
      notes: string | null;
      /**
       * Phone
       * @description Contact's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Phone Status
       * @description Status of the phone number
       * @default null
       */
      phoneStatus: string | null;
      /**
       * State
       * @description Contact's state
       * @default null
       */
      state: string | null;
      /**
       * Time Zone Id
       * @description Contact's time zone ID
       * @default null
       */
      timeZoneId: string | null;
      /**
       * Title
       * @description Contact's job title
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
       * @description Number of items per page
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
 * Type of REPLY's REPLY_GET_EMAIL_ACCOUNTS tool input.
 */
type REPLY_GET_EMAIL_ACCOUNTS_INPUT = object;

/**
 * Type of REPLY's REPLY_GET_EMAIL_ACCOUNTS tool output.
 */
type REPLY_GET_EMAIL_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Accounts
       * @description A list of all configured email accounts in the Reply account
       */
      email_accounts: {
          /**
           * Created At
           * @description Timestamp when the email account was created
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the account
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the email account
           */
          id: number;
          /**
           * Status
           * @description Status of the email account, e.g., 'active' or 'inactive'
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp of the last update to the email account
           */
          updated_at: string;
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
 * Type of REPLY's REPLY_GET_LIST_BY_ID tool input.
 */
type REPLY_GET_LIST_BY_ID_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the list to retrieve
   */
  list_id?: number;
};

/**
 * Type of REPLY's REPLY_GET_LIST_BY_ID tool output.
 */
type REPLY_GET_LIST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the list
       */
      id: number;
      /**
       * Name
       * @description Name of the list
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
 * Type of REPLY's REPLY_GET_TEMPLATES_LIST tool input.
 */
type REPLY_GET_TEMPLATES_LIST_INPUT = object;

/**
 * Type of REPLY's REPLY_GET_TEMPLATES_LIST tool output.
 */
type REPLY_GET_TEMPLATES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Community Templates
       * @description List of community-shared templates.
       */
      communityTemplates: {
          /**
           * Body
           * @description Body content of the template.
           */
          body: string;
          /**
           * Category Id
           * @description Category ID of the template.
           * @default null
           */
          categoryId: number | null;
          /**
           * Id
           * @description Unique template identifier.
           */
          id: number;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Subject
           * @description Subject of the template.
           */
          subject: string;
      }[];
      /**
       * Team Templates
       * @description List of templates shared within the team.
       */
      teamTemplates: {
          /**
           * Body
           * @description Body content of the template.
           */
          body: string;
          /**
           * Category Id
           * @description Category ID of the template.
           * @default null
           */
          categoryId: number | null;
          /**
           * Id
           * @description Unique template identifier.
           */
          id: number;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Subject
           * @description Subject of the template.
           */
          subject: string;
      }[];
      /**
       * User Templates
       * @description List of templates created by the user.
       */
      userTemplates: {
          /**
           * Body
           * @description Body content of the template.
           */
          body: string;
          /**
           * Category Id
           * @description Category ID of the template.
           * @default null
           */
          categoryId: number | null;
          /**
           * Id
           * @description Unique template identifier.
           */
          id: number;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Subject
           * @description Subject of the template.
           */
          subject: string;
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
 * Type of REPLY's REPLY_IO_DELETE_CAMPAIGN tool input.
 */
type REPLY_IO_DELETE_CAMPAIGN_INPUT = {
  /**
   * Id
   * @description Campaign (sequence) ID to delete, must be a positive integer
   */
  id?: number;
};

/**
 * Type of REPLY's REPLY_IO_DELETE_CAMPAIGN tool output.
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
 * Type of REPLY's REPLY_IO_DELETE_EMAIL_ACCOUNT tool input.
 */
type REPLY_IO_DELETE_EMAIL_ACCOUNT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the email account to delete
   */
  id?: string;
};

/**
 * Type of REPLY's REPLY_IO_DELETE_EMAIL_ACCOUNT tool output.
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
 * Type of REPLY's REPLY_IO_DELETE_SEQUENCE tool input.
 */
type REPLY_IO_DELETE_SEQUENCE_INPUT = {
  /**
   * Id
   * @description Sequence ID to delete; must be an integer ≥ 1
   */
  id?: number;
};

/**
 * Type of REPLY's REPLY_IO_DELETE_SEQUENCE tool output.
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
 * Type of REPLY's REPLY_IO_DELETE_USER tool input.
 */
type REPLY_IO_DELETE_USER_INPUT = {
  /**
   * Id
   * @description User ID to delete; string identifier to maximize compatibility
   */
  id?: string;
};

/**
 * Type of REPLY's REPLY_IO_DELETE_USER tool output.
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
 * Type of REPLY's REPLY_IO_GENERATE_ULID tool input.
 */
type REPLY_IO_GENERATE_ULID_INPUT = object;

/**
 * Type of REPLY's REPLY_IO_GENERATE_ULID tool output.
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
 * Type of REPLY's REPLY_IO_LIST_CAMPAIGNS tool input.
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
 * Type of REPLY's REPLY_IO_LIST_CAMPAIGNS tool output.
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
 * Type of REPLY's REPLY_IO_LIST_CONTACTS_BASIC tool input.
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
 * Type of REPLY's REPLY_IO_LIST_CONTACTS_BASIC tool output.
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
 * Type of REPLY's REPLY_IO_LIST_EMAIL_ACCOUNTS tool input.
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
 * Type of REPLY's REPLY_IO_LIST_EMAIL_ACCOUNTS tool output.
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
 * Type of REPLY's REPLY_IO_LIST_LISTS tool input.
 */
type REPLY_IO_LIST_LISTS_INPUT = object;

/**
 * Type of REPLY's REPLY_IO_LIST_LISTS tool output.
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
 * Type of REPLY's REPLY_IO_LIST_SEQUENCES tool input.
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
 * Type of REPLY's REPLY_IO_LIST_SEQUENCES tool output.
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
 * Type of REPLY's REPLY_IO_SEARCH_CONTACTS tool input.
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
 * Type of REPLY's REPLY_IO_SEARCH_CONTACTS tool output.
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
 * Type of REPLY's REPLY_MARK_CONTACT_AS_FINISHED tool input.
 */
type REPLY_MARK_CONTACT_AS_FINISHED_INPUT = {
  /**
   * Domain
   * @description Email domain for which all contacts will be marked as finished
   * @default null
   */
  domain: string | null;
  /**
   * Email
   * Format: email
   * @default null
   */
  email: unknown;
};

/**
 * Type of REPLY's REPLY_MARK_CONTACT_AS_FINISHED tool output.
 */
type REPLY_MARK_CONTACT_AS_FINISHED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the operation was successful
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
 * Type of REPLY's REPLY_MARK_CONTACT_AS_REPLIED tool input.
 */
type REPLY_MARK_CONTACT_AS_REPLIED_INPUT = {
  /**
   * Domain
   * @description Email domain whose contacts should be marked as replied
   * @default null
   */
  domain: string | null;
  /**
   * Email
   * @description Email address of the contact to mark as replied
   * @default null
   */
  email: string | null;
};

/**
 * Type of REPLY's REPLY_MARK_CONTACT_AS_REPLIED tool output.
 */
type REPLY_MARK_CONTACT_AS_REPLIED_OUTPUT = {
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
 * Type of REPLY's REPLY_MOVE_CONTACTS_TO_LISTS tool input.
 */
type REPLY_MOVE_CONTACTS_TO_LISTS_INPUT = {
  /**
   * Contact Ids
   * @description List of contact IDs to move
   */
  ContactIds?: number[];
  /**
   * List Ids
   * @description List of list IDs where contacts should be moved
   */
  ListIds?: number[];
};

/**
 * Type of REPLY's REPLY_MOVE_CONTACTS_TO_LISTS tool output.
 */
type REPLY_MOVE_CONTACTS_TO_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the operation was successful
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
 * Type of REPLY's REPLY_REMOVE_DOMAIN_FROM_BLACKLIST tool input.
 */
type REPLY_REMOVE_DOMAIN_FROM_BLACKLIST_INPUT = {
  /**
   * Domain
   * @description The domain name to remove from the blacklist
   */
  domain?: string;
};

/**
 * Type of REPLY's REPLY_REMOVE_DOMAIN_FROM_BLACKLIST tool output.
 */
type REPLY_REMOVE_DOMAIN_FROM_BLACKLIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The domain that was removed from the blacklist
       */
      domain: string;
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
 * Type of REPLY's REPLY_REMOVE_EMAIL_FROM_BLACKLIST tool input.
 */
type REPLY_REMOVE_EMAIL_FROM_BLACKLIST_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to remove from the blacklist
   */
  email?: unknown;
};

/**
 * Type of REPLY's REPLY_REMOVE_EMAIL_FROM_BLACKLIST tool output.
 */
type REPLY_REMOVE_EMAIL_FROM_BLACKLIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The email address that was removed from the blacklist
       */
      email: string;
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
 * Type map of all available tool input types for toolkit "REPLY".
 */
export type REPLY_TOOL_INPUTS = {
  CREATE_LIST: REPLY_CREATE_LIST_INPUT
  DELETE_LIST_BY_ID: REPLY_DELETE_LIST_BY_ID_INPUT
  GET_ALL_LISTS: REPLY_GET_ALL_LISTS_INPUT
  GET_BLACKLIST_ALL: REPLY_GET_BLACKLIST_ALL_INPUT
  GET_CAMPAIGNS_FOR_CONTACT: REPLY_GET_CAMPAIGNS_FOR_CONTACT_INPUT
  GET_CAMPAIGN_SCHEDULES_ALL: REPLY_GET_CAMPAIGN_SCHEDULES_ALL_INPUT
  GET_CONTACTS_IN_LIST_BY_ID: REPLY_GET_CONTACTS_IN_LIST_BY_ID_INPUT
  GET_EMAIL_ACCOUNTS: REPLY_GET_EMAIL_ACCOUNTS_INPUT
  GET_LIST_BY_ID: REPLY_GET_LIST_BY_ID_INPUT
  GET_TEMPLATES_LIST: REPLY_GET_TEMPLATES_LIST_INPUT
  IO_DELETE_CAMPAIGN: REPLY_IO_DELETE_CAMPAIGN_INPUT
  IO_DELETE_EMAIL_ACCOUNT: REPLY_IO_DELETE_EMAIL_ACCOUNT_INPUT
  IO_DELETE_SEQUENCE: REPLY_IO_DELETE_SEQUENCE_INPUT
  IO_DELETE_USER: REPLY_IO_DELETE_USER_INPUT
  IO_GENERATE_ULID: REPLY_IO_GENERATE_ULID_INPUT
  IO_LIST_CAMPAIGNS: REPLY_IO_LIST_CAMPAIGNS_INPUT
  IO_LIST_CONTACTS_BASIC: REPLY_IO_LIST_CONTACTS_BASIC_INPUT
  IO_LIST_EMAIL_ACCOUNTS: REPLY_IO_LIST_EMAIL_ACCOUNTS_INPUT
  IO_LIST_LISTS: REPLY_IO_LIST_LISTS_INPUT
  IO_LIST_SEQUENCES: REPLY_IO_LIST_SEQUENCES_INPUT
  IO_SEARCH_CONTACTS: REPLY_IO_SEARCH_CONTACTS_INPUT
  MARK_CONTACT_AS_FINISHED: REPLY_MARK_CONTACT_AS_FINISHED_INPUT
  MARK_CONTACT_AS_REPLIED: REPLY_MARK_CONTACT_AS_REPLIED_INPUT
  MOVE_CONTACTS_TO_LISTS: REPLY_MOVE_CONTACTS_TO_LISTS_INPUT
  REMOVE_DOMAIN_FROM_BLACKLIST: REPLY_REMOVE_DOMAIN_FROM_BLACKLIST_INPUT
  REMOVE_EMAIL_FROM_BLACKLIST: REPLY_REMOVE_EMAIL_FROM_BLACKLIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REPLY".
 */
export type REPLY_TOOL_OUTPUTS = {
  CREATE_LIST: REPLY_CREATE_LIST_OUTPUT
  DELETE_LIST_BY_ID: REPLY_DELETE_LIST_BY_ID_OUTPUT
  GET_ALL_LISTS: REPLY_GET_ALL_LISTS_OUTPUT
  GET_BLACKLIST_ALL: REPLY_GET_BLACKLIST_ALL_OUTPUT
  GET_CAMPAIGNS_FOR_CONTACT: REPLY_GET_CAMPAIGNS_FOR_CONTACT_OUTPUT
  GET_CAMPAIGN_SCHEDULES_ALL: REPLY_GET_CAMPAIGN_SCHEDULES_ALL_OUTPUT
  GET_CONTACTS_IN_LIST_BY_ID: REPLY_GET_CONTACTS_IN_LIST_BY_ID_OUTPUT
  GET_EMAIL_ACCOUNTS: REPLY_GET_EMAIL_ACCOUNTS_OUTPUT
  GET_LIST_BY_ID: REPLY_GET_LIST_BY_ID_OUTPUT
  GET_TEMPLATES_LIST: REPLY_GET_TEMPLATES_LIST_OUTPUT
  IO_DELETE_CAMPAIGN: REPLY_IO_DELETE_CAMPAIGN_OUTPUT
  IO_DELETE_EMAIL_ACCOUNT: REPLY_IO_DELETE_EMAIL_ACCOUNT_OUTPUT
  IO_DELETE_SEQUENCE: REPLY_IO_DELETE_SEQUENCE_OUTPUT
  IO_DELETE_USER: REPLY_IO_DELETE_USER_OUTPUT
  IO_GENERATE_ULID: REPLY_IO_GENERATE_ULID_OUTPUT
  IO_LIST_CAMPAIGNS: REPLY_IO_LIST_CAMPAIGNS_OUTPUT
  IO_LIST_CONTACTS_BASIC: REPLY_IO_LIST_CONTACTS_BASIC_OUTPUT
  IO_LIST_EMAIL_ACCOUNTS: REPLY_IO_LIST_EMAIL_ACCOUNTS_OUTPUT
  IO_LIST_LISTS: REPLY_IO_LIST_LISTS_OUTPUT
  IO_LIST_SEQUENCES: REPLY_IO_LIST_SEQUENCES_OUTPUT
  IO_SEARCH_CONTACTS: REPLY_IO_SEARCH_CONTACTS_OUTPUT
  MARK_CONTACT_AS_FINISHED: REPLY_MARK_CONTACT_AS_FINISHED_OUTPUT
  MARK_CONTACT_AS_REPLIED: REPLY_MARK_CONTACT_AS_REPLIED_OUTPUT
  MOVE_CONTACTS_TO_LISTS: REPLY_MOVE_CONTACTS_TO_LISTS_OUTPUT
  REMOVE_DOMAIN_FROM_BLACKLIST: REPLY_REMOVE_DOMAIN_FROM_BLACKLIST_OUTPUT
  REMOVE_EMAIL_FROM_BLACKLIST: REPLY_REMOVE_EMAIL_FROM_BLACKLIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REPLY toolkit.
 */
export const REPLY = {
  slug: "reply",
  tools: {
    /**
     * Tool to add a new personal list on the people page. use when you need to organize contacts into a custom list.
     */
    CREATE_LIST: "REPLY_CREATE_LIST",
    /**
     * Tool to delete a list by its id. use when you need to remove a personal list you own.
     */
    DELETE_LIST_BY_ID: "REPLY_DELETE_LIST_BY_ID",
    /**
     * Tool to retrieve all available people lists. use when you need to list all lists in your reply account.
     */
    GET_ALL_LISTS: "REPLY_GET_ALL_LISTS",
    /**
     * Tool to retrieve the full list of blacklisted domains and emails. use after confirming updates to the blacklist when you need a complete view.
     */
    GET_BLACKLIST_ALL: "REPLY_GET_BLACKLIST_ALL",
    /**
     * Tool to retrieve campaigns a contact belongs to by contact id. use when you need to list all sequences (campaigns) associated with a specific contact.
     */
    GET_CAMPAIGNS_FOR_CONTACT: "REPLY_GET_CAMPAIGNS_FOR_CONTACT",
    /**
     * Tool to list all campaign schedules (default and user-created). use when you need to fetch scheduling details after personalization.
     */
    GET_CAMPAIGN_SCHEDULES_ALL: "REPLY_GET_CAMPAIGN_SCHEDULES_ALL",
    /**
     * Tool to retrieve contacts in a specific personal list. use after obtaining the list id when you need a paginated set of contacts for that list.
     */
    GET_CONTACTS_IN_LIST_BY_ID: "REPLY_GET_CONTACTS_IN_LIST_BY_ID",
    /**
     * Tool to retrieve list of all email accounts in your reply.io account. use when you need to inspect or manage email configurations.
     */
    GET_EMAIL_ACCOUNTS: "REPLY_GET_EMAIL_ACCOUNTS",
    /**
     * Tool to return a specific people list by its id. use after you know the list id and need its details.
     */
    GET_LIST_BY_ID: "REPLY_GET_LIST_BY_ID",
    /**
     * Tool to retrieve a list of user, team, and community templates. use when you need to display all available templates.
     */
    GET_TEMPLATES_LIST: "REPLY_GET_TEMPLATES_LIST",
    /**
     * Tool to delete a campaign by id. use when you need to remove an existing campaign; use after confirming the campaign id.
     */
    IO_DELETE_CAMPAIGN: "REPLY_IO_DELETE_CAMPAIGN",
    /**
     * Tool to delete a specific email account. use when you need to remove an existing email account identified by its id.
     */
    IO_DELETE_EMAIL_ACCOUNT: "REPLY_IO_DELETE_EMAIL_ACCOUNT",
    /**
     * Tool to delete a sequence. use after confirming the sequence exists to remove it permanently.
     */
    IO_DELETE_SEQUENCE: "REPLY_IO_DELETE_SEQUENCE",
    /**
     * Tool to delete a user. use after confirming the user exists to remove them permanently.
     */
    IO_DELETE_USER: "REPLY_IO_DELETE_USER",
    /**
     * Tool to generate a ulid string. use when a unique identifier is required for creating tasks or other entities in reply.io.
     */
    IO_GENERATE_ULID: "REPLY_IO_GENERATE_ULID",
    /**
     * Tool to list all campaigns (sequences). use when you need a paginated list of campaigns.
     */
    IO_LIST_CAMPAIGNS: "REPLY_IO_LIST_CAMPAIGNS",
    /**
     * Tool to list all contacts. use when verifying api access and gathering contact ids for testing contact creation.
     */
    IO_LIST_CONTACTS_BASIC: "REPLY_IO_LIST_CONTACTS_BASIC",
    /**
     * Tool to list all email accounts. use when you need to retrieve email accounts page by page.
     */
    IO_LIST_EMAIL_ACCOUNTS: "REPLY_IO_LIST_EMAIL_ACCOUNTS",
    /**
     * Tool to list all contact lists. use when you need to retrieve all available lists in your reply.io account.
     */
    IO_LIST_LISTS: "REPLY_IO_LIST_LISTS",
    /**
     * Tool to retrieve a paginated list of sequences. use when you need to browse sequences with optional filtering by name.
     */
    IO_LIST_SEQUENCES: "REPLY_IO_LIST_SEQUENCES",
    /**
     * Tool to search contacts by email. use when you need to find existing contact ids for update tests.
     */
    IO_SEARCH_CONTACTS: "REPLY_IO_SEARCH_CONTACTS",
    /**
     * Tool to mark a specific contact by email or all contacts under a domain as finished in all campaigns.
     */
    MARK_CONTACT_AS_FINISHED: "REPLY_MARK_CONTACT_AS_FINISHED",
    /**
     * Tool to mark a contact as replied in all campaigns by email or domain. use after confirming the contact has responded.
     */
    MARK_CONTACT_AS_REPLIED: "REPLY_MARK_CONTACT_AS_REPLIED",
    /**
     * Tool to move one or more contacts to specified lists. use when reorganizing contacts across lists after verifying contact and list ids.
     */
    MOVE_CONTACTS_TO_LISTS: "REPLY_MOVE_CONTACTS_TO_LISTS",
    /**
     * Tool to remove the specified domain from the blacklist. use when you need to allow sending to that domain again.
     */
    REMOVE_DOMAIN_FROM_BLACKLIST: "REPLY_REMOVE_DOMAIN_FROM_BLACKLIST",
    /**
     * Tool to remove the specified email from the blacklist. use when you need to allow sending to that address again.
     */
    REMOVE_EMAIL_FROM_BLACKLIST: "REPLY_REMOVE_EMAIL_FROM_BLACKLIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REPLY".
 */
export type REPLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REPLY".
 */
export type REPLY_TRIGGER_EVENTS = {}
