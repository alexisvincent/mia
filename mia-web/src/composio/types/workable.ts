// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WORKABLE's WORKABLE_DELETE_DEPARTMENT tool input.
 */
type WORKABLE_DELETE_DEPARTMENT_INPUT = {
  /**
   * Force
   * @description Set to 'DELETE' to force deletion regardless of associated resources.
   * @default null
   * @constant
   */
  force: "DELETE";
  /**
   * Id
   * @description Unique identifier of the department to delete.
   */
  id?: string;
};

/**
 * Type of WORKABLE's WORKABLE_DELETE_DEPARTMENT tool output.
 */
type WORKABLE_DELETE_DEPARTMENT_OUTPUT = {
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
 * Type of WORKABLE's WORKABLE_GET_ACCOUNT tool input.
 */
type WORKABLE_GET_ACCOUNT_INPUT = {
  /**
   * Subdomain
   * @description The subdomain of the account to retrieve
   */
  subdomain?: string;
};

/**
 * Type of WORKABLE's WORKABLE_GET_ACCOUNT tool output.
 */
type WORKABLE_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description The account's description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The account's unique key
       */
      id: string;
      /**
       * Name
       * @description The account's name
       */
      name: string;
      /**
       * Subdomain
       * @description The account's subdomain
       */
      subdomain: string;
      /**
       * Summary
       * @description A brief summary of the account
       * @default null
       */
      summary: string | null;
      /**
       * Website Url
       * @description The account's website URL
       */
      website_url: string;
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
 * Type of WORKABLE's WORKABLE_GET_ACCOUNTS tool input.
 */
type WORKABLE_GET_ACCOUNTS_INPUT = object;

/**
 * Type of WORKABLE's WORKABLE_GET_ACCOUNTS tool output.
 */
type WORKABLE_GET_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of accounts accessible to the authenticated user
       */
      accounts: {
          /**
           * Description
           * @description The description of the account
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The account unique key
           */
          id: string;
          /**
           * Name
           * @description The name of the account
           */
          name: string;
          /**
           * Subdomain
           * @description The subdomain of the account
           */
          subdomain: string;
          /**
           * Summary
           * @description The summary of the account
           * @default null
           */
          summary: string | null;
          /**
           * Website Url
           * @description The URL of the account's web site
           */
          website_url: string;
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
 * Type of WORKABLE's WORKABLE_GET_BACKGROUND_CHECK_PACKAGES tool input.
 */
type WORKABLE_GET_BACKGROUND_CHECK_PACKAGES_INPUT = {
  /**
   * Provider
   * @description Identifier of the background check provider.
   */
  provider?: string;
};

/**
 * Type of WORKABLE's WORKABLE_GET_BACKGROUND_CHECK_PACKAGES tool output.
 */
type WORKABLE_GET_BACKGROUND_CHECK_PACKAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Packages
       * @description List of available background check packages.
       */
      packages: {
          /**
           * Code
           * @description Unique code for the background check package.
           */
          code: string;
          /**
           * Country
           * @description Country where the package is available.
           */
          country: string;
          /**
           * Description
           * @description Description of the background check package.
           */
          description: string;
          /**
           * Name
           * @description Name of the background check package.
           */
          name: string;
          /**
           * Provider
           * @description Provider of the background check package.
           */
          provider: string;
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
 * Type of WORKABLE's WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS tool input.
 */
type WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS_INPUT = object;

/**
 * Type of WORKABLE's WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS tool output.
 */
type WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Providers
       * @description List of available background check providers.
       */
      providers: {
          /**
           * Id
           * @description Unique identifier of the background check provider.
           */
          id: string;
          /**
           * Integration Type
           * @description Type of integration with Workable.
           */
          integration_type: string;
          /**
           * Logo Url
           * Format: uri
           * @description URL pointing to the provider's logo image.
           */
          logo_url: string;
          /**
           * Name
           * @description Human-readable name of the provider.
           */
          name: string;
          /**
           * Status
           * @description Connection status, e.g., 'connected' or 'not_connected'.
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
 * Type of WORKABLE's WORKABLE_GET_CANDIDATES tool input.
 */
type WORKABLE_GET_CANDIDATES_INPUT = {
  /**
   * Limit
   * @description Number of candidates per page. Default is 50; maximum is 100.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of WORKABLE's WORKABLE_GET_CANDIDATES tool output.
 */
type WORKABLE_GET_CANDIDATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Candidates
       * @description List of candidates
       */
      candidates: {
          /**
           * Account
           * @description Account details for a candidate.
           * @default null
           */
          account: {
              /**
               * Name
               * @description Account's name
               * @default null
               */
              name: string | null;
              /**
               * Subdomain
               * @description Account's subdomain
               * @default null
               */
              subdomain: string | null;
          } | null;
          /**
           * Address
           * @description The address of the candidate
           * @default null
           */
          address: string | null;
          /**
           * Created At
           * @description Timestamp when the candidate was created
           * @default null
           */
          created_at: string | null;
          /**
           * Disqualification Reason
           * @description Reason for disqualification, if any
           * @default null
           */
          disqualification_reason: string | null;
          /**
           * Disqualified
           * @description True if the candidate is disqualified
           * @default null
           */
          disqualified: boolean | null;
          /**
           * Domain
           * @description Source domain of the candidate
           * @default null
           */
          domain: string | null;
          /**
           * Email
           * @description Candidate's email address
           * @default null
           */
          email: string | null;
          /**
           * Firstname
           * @description Candidate's first name
           * @default null
           */
          firstname: string | null;
          /**
           * Headline
           * @description Candidate's headline
           * @default null
           */
          headline: string | null;
          /**
           * Hired At
           * @description Date when the candidate was moved to the hired stage
           * @default null
           */
          hired_at: string | null;
          /**
           * Id
           * @description Candidate identifier
           */
          id: string;
          /**
           * Job
           * @description Job details for a candidate.
           * @default null
           */
          job: {
              /**
               * Shortcode
               * @description Job's system generated code
               * @default null
               */
              shortcode: string | null;
              /**
               * Title
               * @description Job's title
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Lastname
           * @description Candidate's last name
           * @default null
           */
          lastname: string | null;
          /**
           * Name
           * @description Candidate's full name
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description The phone number of the candidate
           * @default null
           */
          phone: string | null;
          /**
           * Profile Url
           * @description Candidate's URL in Workable
           * @default null
           */
          profile_url: string | null;
          /**
           * Sourced
           * @description True if the candidate has been sourced
           * @default null
           */
          sourced: boolean | null;
          /**
           * Stage
           * @description Candidate's stage slug
           * @default null
           */
          stage: string | null;
          /**
           * Stage Kind
           * @description Candidate's stage kind
           * @default null
           */
          stage_kind: string | null;
          /**
           * Updated At
           * @description Timestamp when the candidate was last updated
           * @default null
           */
          updated_at: string | null;
          /**
           * Withdrew
           * @description True if the candidate withdrew
           * @default null
           */
          withdrew: boolean | null;
      }[];
      /**
       * Paging
       * @description Pagination details for list endpoints.
       * @default null
       */
      paging: {
          /**
           * Next
           * @description URL for the next page of results
           * @default null
           */
          next: string | null;
      } | null;
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
 * Type of WORKABLE's WORKABLE_GET_EVENTS tool input.
 */
type WORKABLE_GET_EVENTS_INPUT = object;

/**
 * Type of WORKABLE's WORKABLE_GET_EVENTS tool output.
 */
type WORKABLE_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of scheduled events.
       */
      events: {
          /**
           * Cancelled
           * @description Indicates if the event is cancelled.
           */
          cancelled: boolean;
          /**
           * EventCandidate
           * @description Candidate participating in the event.
           * @default null
           */
          candidate: {
              /**
               * Id
               * @description Unique identifier for the candidate.
               */
              id: string;
              /**
               * Name
               * @description Name of the candidate.
               */
              name: string;
          } | null;
          /**
           * EventConference
           * @description Conference details for the event (if any).
           * @default null
           */
          conference: {
              /**
               * Id
               * @description Unique identifier for the conference.
               */
              id: string;
              /**
               * Type
               * @description Type of the conference.
               * @enum {string}
               */
              type: "google_meet" | "zoom_meeting" | "teams_meeting";
              /**
               * Url
               * @description URL to join the conference.
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * Description
           * @description Description of the event.
           * @default null
           */
          description: string | null;
          /**
           * Ends At
           * @description End time of the event in ISO 8601 format.
           */
          ends_at: string;
          /**
           * Id
           * @description Unique identifier for the event.
           */
          id: string;
          /**
           * Job
           * @description Job associated with the event.
           */
          job: {
              /**
               * Id
               * @description Unique identifier for the job.
               */
              id: string;
              /**
               * Title
               * @description Title of the job.
               */
              title: string;
          };
          /**
           * Members
           * @description List of members and their RSVP status.
           */
          members: {
              /**
               * Id
               * @description Unique identifier for the member.
               */
              id: string;
              /**
               * Name
               * @description Name of the member.
               */
              name: string;
              /**
               * Status
               * @description RSVP status of the member.
               */
              status: string;
          }[];
          /**
           * Starts At
           * @description Start time of the event in ISO 8601 format.
           */
          starts_at: string;
          /**
           * Title
           * @description Title of the event.
           */
          title: string;
          /**
           * Type
           * @description Type of the event.
           * @enum {string}
           */
          type: "call" | "interview" | "meeting";
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
 * Type of WORKABLE's WORKABLE_GET_JOBS tool input.
 */
type WORKABLE_GET_JOBS_INPUT = {
  /**
   * Created After
   * @description Return results created after this ISO 8601 timestamp.
   * @default null
   */
  created_after: string | null;
  /**
   * Include Fields
   * @description Comma-separated list of extra fields to include in each job (e.g., 'description,full_description,requirements,benefits').
   * @default null
   */
  include_fields: string | null;
  /**
   * Limit
   * @description Number of jobs to retrieve per page. Default is 50; maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Max Id
   * @description Return results with an ID less than or equal to this value.
   * @default null
   */
  max_id: string | null;
  /**
   * Since Id
   * @description Return results with an ID greater than or equal to this value.
   * @default null
   */
  since_id: string | null;
  /**
   * State
   * @description Filter jobs by state. One of 'draft', 'published', 'archived', or 'closed'.
   * @default null
   * @enum {string|null}
   */
  state: "draft" | "published" | "closed" | "archived" | null;
  /**
   * Updated After
   * @description Return results updated after this ISO 8601 timestamp.
   * @default null
   */
  updated_after: string | null;
};

/**
 * Type of WORKABLE's WORKABLE_GET_JOBS tool output.
 */
type WORKABLE_GET_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of jobs matching query parameters.
       */
      jobs: {
          /**
           * Application Url
           * @description URL for job applications.
           * @default null
           */
          application_url: string | null;
          /**
           * Code
           * @description Job code as defined in the editor.
           * @default null
           */
          code: string | null;
          /**
           * Created At
           * @description Timestamp when the job was created (ISO 8601).
           * @default null
           */
          created_at: string | null;
          /**
           * Department
           * @description Department associated with the job.
           * @default null
           */
          department: string | null;
          /**
           * Department Hierarchy
           * @description Hierarchical structure of the department.
           * @default null
           */
          department_hierarchy: {
              /**
               * Id
               * @description Department ID.
               */
              id: number;
              /**
               * Name
               * @description Department name.
               */
              name: string;
          }[] | null;
          /**
           * Full Title
           * @description Full title of the job.
           * @default null
           */
          full_title: string | null;
          /**
           * Id
           * @description Job identifier.
           */
          id: string;
          /**
           * Location
           * @description Primary location details.
           * @default null
           */
          location: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name.
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Country code.
               * @default null
               */
              country_code: string | null;
              /**
               * Location Str
               * @description Full location string.
               * @default null
               */
              location_str: string | null;
              /**
               * Region
               * @description Region name.
               * @default null
               */
              region: string | null;
              /**
               * Region Code
               * @description Region code.
               * @default null
               */
              region_code: string | null;
              /**
               * Telecommuting
               * @description Indicates if telecommuting is allowed.
               * @default null
               */
              telecommuting: boolean | null;
              /**
               * Workplace Type
               * @description Type of workplace (e.g., 'on_site').
               * @default null
               */
              workplace_type: string | null;
              /**
               * Zip Code
               * @description Zip code.
               * @default null
               */
              zip_code: string | null;
          } | null;
          /**
           * Locations
           * @description List of additional locations.
           * @default null
           */
          locations: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description Country code.
               * @default null
               */
              country_code: string | null;
              /**
               * Country Name
               * @description Country name.
               * @default null
               */
              country_name: string | null;
              /**
               * State Code
               * @description State code.
               * @default null
               */
              state_code: string | null;
              /**
               * Subregion
               * @description Subregion name.
               * @default null
               */
              subregion: string | null;
              /**
               * Zip Code
               * @description Zip code.
               * @default null
               */
              zip_code: string | null;
          }[] | null;
          /**
           * Salary
           * @description Salary details.
           * @default null
           */
          salary: {
              /**
               * Salary Currency
               * @description Currency code.
               * @default null
               */
              salary_currency: string | null;
              /**
               * Salary From
               * @description Minimum salary.
               * @default null
               */
              salary_from: number | null;
              /**
               * Salary To
               * @description Maximum salary.
               * @default null
               */
              salary_to: number | null;
          } | null;
          /**
           * Shortcode
           * @description System-generated job code.
           * @default null
           */
          shortcode: string | null;
          /**
           * Shortlink
           * @description Shortened URL for the job posting.
           * @default null
           */
          shortlink: string | null;
          /**
           * State
           * @description State of the job.
           * @default null
           * @enum {string|null}
           */
          state: "draft" | "published" | "closed" | "archived" | null;
          /**
           * Title
           * @description Short title of the job.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description URL of the job posting.
           * @default null
           */
          url: string | null;
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
 * Type of WORKABLE's WORKABLE_GET_LEGAL_ENTITIES tool input.
 */
type WORKABLE_GET_LEGAL_ENTITIES_INPUT = object;

/**
 * Type of WORKABLE's WORKABLE_GET_LEGAL_ENTITIES tool output.
 */
type WORKABLE_GET_LEGAL_ENTITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Legal Entities
       * @description List of account legal entities returned by the API.
       */
      legal_entities: {
          /**
           * Display Name
           * @description A human-readable concatenation of the hierarchy from entity to location to site.
           */
          display_name: string;
          /**
           * Id
           * @description The legal entity identifier. Use this ID when creating or updating employees via POST or PATCH endpoints.
           */
          id: string;
          /**
           * Legal Name
           * @description The official or legal name of the entity. May be null if not provided or not applicable.
           * @default null
           */
          legal_name: string | null;
          /**
           * Name
           * @description The common or colloquial name of the entity, location, or site.
           */
          name: string;
          /**
           * Parent Id
           * @description Reference to the unique identifier of the parent object. Null for top-level entities; for locations refers to an entity; for sites refers to a location.
           * @default null
           */
          parent_id: string | null;
          /**
           * Type
           * @description The classification type of the object. One of 'entity', 'location', or 'site'.
           * @enum {string}
           */
          type: "entity" | "location" | "site";
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
 * Type of WORKABLE's WORKABLE_GET_MEMBERS tool input.
 */
type WORKABLE_GET_MEMBERS_INPUT = {
  /**
   * Limit
   * @description Max number of members to retrieve per page
   * @default null
   */
  limit: number | null;
  /**
   * Max Id
   * @description Only return members with ID less than or equal to this value
   * @default null
   */
  max_id: string | null;
  /**
   * Role
   * @description Filter members by role
   * @default null
   * @enum {string|null}
   */
  role: "admin" | "simple" | "reviewer" | "no_access" | null;
  /**
   * Shortcode
   * @description Filter by job shortcode; only collaborators on that job are returned
   * @default null
   */
  shortcode: string | null;
  /**
   * Since Id
   * @description Only return members with ID greater than or equal to this value
   * @default null
   */
  since_id: string | null;
};

/**
 * Type of WORKABLE's WORKABLE_GET_MEMBERS tool output.
 */
type WORKABLE_GET_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of account members matching query parameters
       */
      members: {
          /**
           * Active
           * @description True if the member is active, False otherwise
           */
          active: boolean;
          /**
           * Collaboration Rules
           * @description Rules defining this member's collaboration permissions per job
           */
          collaboration_rules: {
              /**
               * Departments
               * @description List of department identifiers for this collaboration
               */
              departments: string[];
              /**
               * Locations
               * @description List of location identifiers for this collaboration
               */
              locations: string[];
              /**
               * Role
               * @description Role assigned in this collaboration
               */
              role: string;
          }[];
          /**
           * Email
           * @description Email address of the member
           */
          email: string;
          /**
           * Headline
           * @description Professional headline of the member
           * @default null
           */
          headline: string | null;
          /**
           * Hris Role
           * @description Member's HRIS role
           * @enum {string}
           */
          hris_role: "hris_admin" | "hris_employee" | "hris_no_access";
          /**
           * Id
           * @description Unique member identifier
           */
          id: string;
          /**
           * Name
           * @description Full name of the member
           */
          name: string;
          /**
           * Role
           * @description Member's role within the account
           * @enum {string}
           */
          role: "admin" | "simple" | "reviewer" | "no_access";
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
 * Type of WORKABLE's WORKABLE_GET_RECRUITERS tool input.
 */
type WORKABLE_GET_RECRUITERS_INPUT = {
  /**
   * Shortcode
   * @description The job's shortcode. If provided only recruiters collaborating on the correlated job will be returned.
   * @default null
   */
  shortcode: string | null;
};

/**
 * Type of WORKABLE's WORKABLE_GET_RECRUITERS tool output.
 */
type WORKABLE_GET_RECRUITERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Recruiters
       * @description List of external recruiters associated with the account.
       */
      recruiters: {
          /**
           * Email
           * @description Email address of the recruiter.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the recruiter.
           */
          id: string;
          /**
           * Name
           * @description Full name of the recruiter.
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
 * Type of WORKABLE's WORKABLE_GET_REQUISITIONS tool input.
 */
type WORKABLE_GET_REQUISITIONS_INPUT = {
  /**
   * Created After
   * @description Filter requisitions created after this timestamp (ISO8601 or Unix time).
   * @default null
   */
  created_after: string | null;
  /**
   * Limit
   * @description Number of results per page. Default is 50; maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Updated After
   * @description Filter requisitions updated after this timestamp (ISO8601 or Unix time).
   * @default null
   */
  updated_after: string | null;
};

/**
 * Type of WORKABLE's WORKABLE_GET_REQUISITIONS tool output.
 */
type WORKABLE_GET_REQUISITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Paging
       * @description Pagination details.
       * @default null
       */
      paging: {
          /**
           * Next
           * @description URL for the next page of results.
           * @default null
           */
          next: string | null;
      } | null;
      /**
       * Requisitions
       * @description List of requisitions matching query parameters.
       */
      requisitions: {
          /**
           * Approval Groups
           * @description Approval workflow groups.
           * @default null
           */
          approval_groups: {
              /**
               * Approvers
               * @description List of approvers.
               */
              approvers: {
                  /**
                   * Decision
                   * @description Approver's decision (approved, rejected).
                   * @default null
                   */
                  decision: string | null;
                  /**
                   * Id
                   * @description Approver identifier.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Approver name.
                   */
                  name: string;
              }[];
              /**
               * Id
               * @description Approval group identifier.
               */
              id: string;
          }[] | null;
          /**
           * Candidate Id
           * @description Candidate ID for filled or reserved requisitions.
           * @default null
           */
          candidate_id: string | null;
          /**
           * Code
           * @description Requisition code.
           * @default null
           */
          code: string | null;
          /**
           * Department
           * @description Department details.
           * @default null
           */
          department: {
              /**
               * Id
               * @description Department identifier.
               */
              id: string;
              /**
               * Name
               * @description Department name.
               */
              name: string;
          } | null;
          /**
           * Employment Type
           * @description Employment type (e.g., Full-time, Part-time).
           * @default null
           */
          employment_type: string | null;
          /**
           * PersonSummary
           * @description Summary of a person (requester, manager, owner).
           * @default null
           */
          hiring_manager: {
              /**
               * Id
               * @description Person identifier.
               */
              id: string;
              /**
               * Name
               * @description Person name.
               */
              name: string;
          } | null;
          /**
           * Id
           * @description Requisition identifier.
           */
          id: string;
          /**
           * JobSummary
           * @description Basic job information.
           * @default null
           */
          job: {
              /**
               * Id
               * @description Job identifier.
               */
              id: string;
              /**
               * Title
               * @description Job title.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Location
           * @description Location details.
           * @default null
           */
          location: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name.
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description 2-letter ISO country code.
               * @default null
               */
              country_code: string | null;
              /**
               * Location Str
               * @description Location as a string.
               * @default null
               */
              location_str: string | null;
              /**
               * Region
               * @description Region name.
               * @default null
               */
              region: string | null;
              /**
               * Region Code
               * @description Region code.
               * @default null
               */
              region_code: string | null;
              /**
               * Zip Code
               * @description ZIP code.
               * @default null
               */
              zip_code: string | null;
          } | null;
          /**
           * PersonSummary
           * @description Summary of a person (requester, manager, owner).
           * @default null
           */
          owner: {
              /**
               * Id
               * @description Person identifier.
               */
              id: string;
              /**
               * Name
               * @description Person name.
               */
              name: string;
          } | null;
          /**
           * Plan Date
           * @description Planned date (YYYY-MM-DD).
           * @default null
           */
          plan_date: string | null;
          /**
           * Reason
           * @description Reason for requisition (new_hire, replacement, backfill).
           * @default null
           */
          reason: string | null;
          /**
           * PersonSummary
           * @description Summary of a person (requester, manager, owner).
           * @default null
           */
          requester: {
              /**
               * Id
               * @description Person identifier.
               */
              id: string;
              /**
               * Name
               * @description Person name.
               */
              name: string;
          } | null;
          /**
           * Requisition Attributes
           * @description Custom attributes.
           * @default null
           */
          requisition_attributes: {
              /**
               * Name
               * @description Attribute name.
               */
              name: string;
              /**
               * RequisitionAttributeValue
               * @description Value object for custom requisition attributes.
               * @default null
               */
              value: {
                  /**
                   * Body
                   * @description Value content.
                   * @default null
                   */
                  body: string | null;
                  /**
                   * Choices
                   * @description Selected choices.
                   * @default null
                   */
                  choices: string[] | null;
                  /**
                   * SalaryRange
                   * @description Salary range details for requisitions.
                   * @default null
                   */
                  data: {
                      /**
                       * Currency Iso
                       * @description 3-letter ISO currency code.
                       * @default null
                       */
                      currency_iso: string | null;
                      /**
                       * Frequency
                       * @description Salary frequency (hour, day, week, month, year).
                       * @default null
                       */
                      frequency: string | null;
                      /**
                       * Salary From
                       * @description Minimum salary.
                       * @default null
                       */
                      salary_from: number | null;
                      /**
                       * Salary To
                       * @description Maximum salary.
                       * @default null
                       */
                      salary_to: number | null;
                  } | null;
              } | null;
          }[] | null;
          /**
           * Salary
           * @description Filled requisition salary details.
           * @default null
           */
          salary: {
              /**
               * Amount
               * @description Salary amount.
               * @default null
               */
              amount: number | null;
              /**
               * Currency Iso
               * @description Currency code.
               * @default null
               */
              currency_iso: string | null;
              /**
               * Frequency
               * @description Salary frequency.
               * @default null
               */
              frequency: string | null;
          } | null;
          /**
           * SalaryRange
           * @description Salary range details for requisitions.
           * @default null
           */
          salary_range: {
              /**
               * Currency Iso
               * @description 3-letter ISO currency code.
               * @default null
               */
              currency_iso: string | null;
              /**
               * Frequency
               * @description Salary frequency (hour, day, week, month, year).
               * @default null
               */
              frequency: string | null;
              /**
               * Salary From
               * @description Minimum salary.
               * @default null
               */
              salary_from: number | null;
              /**
               * Salary To
               * @description Maximum salary.
               * @default null
               */
              salary_to: number | null;
          } | null;
          /**
           * Start Date
           * @description Start date (YYYY-MM-DD).
           * @default null
           */
          start_date: string | null;
          /**
           * State
           * @description Requisition state (processing, draft, pending, etc.).
           * @default null
           */
          state: string | null;
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
 * Type of WORKABLE's WORKABLE_GET_STAGES tool input.
 */
type WORKABLE_GET_STAGES_INPUT = object;

/**
 * Type of WORKABLE's WORKABLE_GET_STAGES tool output.
 */
type WORKABLE_GET_STAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stages
       * @description List of recruitment pipeline stages
       */
      stages: {
          /**
           * Kind
           * @description Type of the stage. One of `sourced`, `applied`, `shortlisted`, `assessment`, `phone-screen`, `interview`, `offer`, `hired`
           * @enum {string}
           */
          kind: "sourced" | "applied" | "shortlisted" | "assessment" | "phone-screen" | "interview" | "offer" | "hired";
          /**
           * Name
           * @description Stage name
           * @example Assessment
           */
          name: string;
          /**
           * Position
           * @description Position of the stage in the pipeline (zero-based index)
           * @example 2
           */
          position: number;
          /**
           * Slug
           * @description Unique token of the stage
           * @example assessment
           */
          slug: string;
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
 * Type of WORKABLE's WORKABLE_GET_SUBSCRIPTIONS tool input.
 */
type WORKABLE_GET_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of WORKABLE's WORKABLE_GET_SUBSCRIPTIONS tool output.
 */
type WORKABLE_GET_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriptions
       * @description List of active webhook subscriptions.
       */
      subscriptions: {
          /**
           * Args
           * @description Optional filters applied to the subscription
           */
          args?: {
              [key: string]: unknown;
          };
          /**
           * Event
           * @description Event type the subscription listens to
           */
          event: string;
          /**
           * Id
           * @description Unique identifier for the subscription
           */
          id: string;
          /**
           * Target
           * @description The URL where events are sent
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
 * Type of WORKABLE's WORKABLE_POST_BACKGROUND_CHECK tool input.
 */
type WORKABLE_POST_BACKGROUND_CHECK_INPUT = {
  /**
   * Attachments
   * @description List of additional result attachments.
   * @default null
   */
  attachments: {
      /**
       * Description
       * @description Label for the attachment (e.g., 'Background Check Report').
       * @default null
       */
      description: string | null;
      /**
       * Url
       * Format: uri
       * @description Public URL to the attachment.
       */
      url: string;
  }[] | null;
  /**
   * Background Check Id
   * @description Identifier of the background check request.
   */
  background_check_id?: string;
  /**
   * BackgroundCheckDetails
   * @description Structured results for a completed background check.
   * @default null
   */
  check: {
      /**
       * Overall Status
       * @description Overall status of the check (e.g., 'clear', 'consider').
       */
      overall_status: string;
      /**
       * Result
       * @description List of sub-report result items.
       */
      result: {
          /**
           * Name
           * @description Key for the sub-report (e.g., 'motor_vehicle_report').
           */
          name: string;
          /**
           * Status
           * @description Status of the sub-report (e.g., 'clear', 'consider').
           */
          status: string;
      }[];
  } | null;
  /**
   * Results Url
   * Format: uri
   * @description Link to full report on provider's site. Required when status is 'completed'.
   * @default null
   */
  results_url: string | null;
  /**
   * Status
   * @description New status of the background check.
   * @enum {string}
   */
  status?: "pending" | "consented" | "completed" | "declined" | "expired";
};

/**
 * Type of WORKABLE's WORKABLE_POST_BACKGROUND_CHECK tool output.
 */
type WORKABLE_POST_BACKGROUND_CHECK_OUTPUT = {
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
 * Type of WORKABLE's WORKABLE_POST_DEPARTMENTS tool input.
 */
type WORKABLE_POST_DEPARTMENTS_INPUT = {
  /**
   * Name
   * @description The name of the department.
   */
  name?: string;
  /**
   * Parent Id
   * @description Identifier of the parent department, or null for top-level departments.
   * @default null
   */
  parent_id: string | null;
};

/**
 * Type of WORKABLE's WORKABLE_POST_DEPARTMENTS tool output.
 */
type WORKABLE_POST_DEPARTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The department identifier.
       */
      id: string;
      /**
       * Name
       * @description The name of the department.
       */
      name: string;
      /**
       * Parent Id
       * @description Identifier of the parent department, or null for top-level departments.
       * @default null
       */
      parent_id: string | null;
      /**
       * Sample
       * @description Indicates whether the department is a sample created department.
       */
      sample: boolean;
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
 * Type of WORKABLE's WORKABLE_POST_DEPARTMENT_MERGE tool input.
 */
type WORKABLE_POST_DEPARTMENT_MERGE_INPUT = {
  /**
   * Force
   * @description Whether to force the merge, overriding any conflicts.
   * @default false
   */
  force: boolean | null;
  /**
   * Id
   * @description The ID of the department to be merged (source department).
   */
  id?: string;
  /**
   * Target Department Id
   * @description The ID of the target department to merge into.
   */
  target_department_id?: string;
};

/**
 * Type of WORKABLE's WORKABLE_POST_DEPARTMENT_MERGE tool output.
 */
type WORKABLE_POST_DEPARTMENT_MERGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the merged (target) department.
       */
      id: string;
      /**
       * Name
       * @description Name of the merged department.
       */
      name: string;
      /**
       * Parent Id
       * @description Identifier of the parent department, or null for top-level departments.
       * @default null
       */
      parent_id: string | null;
      /**
       * Sample
       * @description Indicates whether the department is a sample created department.
       */
      sample: boolean;
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
 * Type of WORKABLE's WORKABLE_POST_MEMBERS_INVITE tool input.
 */
type WORKABLE_POST_MEMBERS_INVITE_INPUT = {
  /**
   * Collaboration Rules
   * @description Array of collaboration rules to apply to the invited member.
   * @default null
   */
  collaboration_rules: {
      /**
       * Departments
       * @description List of department identifiers this collaboration rule applies to.
       */
      departments: string[];
      /**
       * Locations
       * @description List of location identifiers this collaboration rule applies to.
       */
      locations: string[];
      /**
       * Role
       * @description Role of the member in this collaboration rule.
       * @enum {string}
       */
      role: "admin" | "simple" | "reviewer" | "no_access";
  }[] | null;
  /**
   * Email
   * @description Email address to send the invitation to.
   */
  email?: string;
  /**
   * Hris Role
   * @description HRIS role for the invited member if Workable HR is enabled. Possible: hris_admin, hris_employee, hris_no_access.
   * @default null
   * @enum {string|null}
   */
  hris_role: "hris_admin" | "hris_employee" | "hris_no_access" | null;
  /**
   * Member Id
   * @description Identifier of the existing member sending the invitation. Required when using an account-wide access token.
   * @default null
   */
  member_id: string | null;
  /**
   * Role
   * @description Role to assign to the invited member. Possible: admin, simple, reviewer, no_access.
   * @enum {string}
   */
  role?: "admin" | "simple" | "reviewer" | "no_access";
};

/**
 * Type of WORKABLE's WORKABLE_POST_MEMBERS_INVITE tool output.
 */
type WORKABLE_POST_MEMBERS_INVITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collaboration Rules
       * @description Collaboration rules applied to the member.
       */
      collaboration_rules: {
          /**
           * Departments
           * @description List of department identifiers this collaboration rule applies to.
           */
          departments: string[];
          /**
           * Locations
           * @description List of location identifiers this collaboration rule applies to.
           */
          locations: string[];
          /**
           * Role
           * @description Role of the member in this collaboration rule.
           * @enum {string}
           */
          role: "admin" | "simple" | "reviewer" | "no_access";
      }[];
      /**
       * Email
       * @description Email address of the invited member.
       */
      email: string;
      /**
       * Hris Role
       * @description HRIS role of the member if set.
       * @default null
       * @enum {string|null}
       */
      hris_role: "hris_admin" | "hris_employee" | "hris_no_access" | null;
      /**
       * Id
       * @description Unique identifier of the invited member.
       */
      id: string;
      /**
       * Role
       * @description Role assigned to the member.
       * @enum {string}
       */
      role: "admin" | "simple" | "reviewer" | "no_access";
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
 * Type of WORKABLE's WORKABLE_POST_MEMBER_ENABLE tool input.
 */
type WORKABLE_POST_MEMBER_ENABLE_INPUT = {
  /**
   * Id
   * @description The ID of the member to restore.
   */
  id?: string;
};

/**
 * Type of WORKABLE's WORKABLE_POST_MEMBER_ENABLE tool output.
 */
type WORKABLE_POST_MEMBER_ENABLE_OUTPUT = {
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
 * Type of WORKABLE's WORKABLE_PUT_DEPARTMENTS tool input.
 */
type WORKABLE_PUT_DEPARTMENTS_INPUT = {
  /**
   * Id
   * @description Identifier of the department to update.
   */
  id?: string;
  /**
   * Name
   * @description New department name. Include only when renaming.
   * @default null
   */
  name: string | null;
  /**
   * Parent Id
   * @description Identifier of the new parent department, or null for top-level.
   * @default null
   */
  parent_id: string | null;
};

/**
 * Type of WORKABLE's WORKABLE_PUT_DEPARTMENTS tool output.
 */
type WORKABLE_PUT_DEPARTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Department identifier.
       */
      id: string;
      /**
       * Name
       * @description Name of the department.
       */
      name: string;
      /**
       * Parent Id
       * @description Parent department identifier or null if top-level.
       * @default null
       */
      parent_id: string | null;
      /**
       * Sample
       * @description Indicates whether the department is a sample created department.
       */
      sample: boolean;
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
 * Type of WORKABLE's WORKABLE_PUT_MEMBERS tool input.
 */
type WORKABLE_PUT_MEMBERS_INPUT = {
  /**
   * Collaboration Rules
   * @description An array of collaboration rules assigned to the member.
   * @default null
   */
  collaboration_rules: {
      /**
       * Departments
       * @description List of department identifiers applicable for this collaboration.
       */
      departments: string[];
      /**
       * Locations
       * @description List of location identifiers applicable for this collaboration.
       */
      locations: string[];
      /**
       * Role
       * @description Role of the member in this collaboration.
       * @enum {string}
       */
      role: "admin" | "simple" | "reviewer" | "no_access";
  }[] | null;
  /**
   * Email
   * @description The email address of the member.
   * @default null
   */
  email: string | null;
  /**
   * Headline
   * @description The headline or job title of the member.
   * @default null
   */
  headline: string | null;
  /**
   * Hris Role
   * @description The member's HRIS role. Possible values: 'hris_admin', 'hris_employee', 'hris_no_access'.
   * @default null
   * @enum {string|null}
   */
  hris_role: "hris_admin" | "hris_employee" | "hris_no_access" | null;
  /**
   * Id
   * @description The unique identifier of the member to be updated.
   */
  id?: string;
  /**
   * Name
   * @description The full name of the member.
   * @default null
   */
  name: string | null;
  /**
   * Role
   * @description The member's role. Possible values: 'admin', 'simple', 'reviewer', 'no_access'.
   * @default null
   * @enum {string|null}
   */
  role: "admin" | "simple" | "reviewer" | "no_access" | null;
};

/**
 * Type of WORKABLE's WORKABLE_PUT_MEMBERS tool output.
 */
type WORKABLE_PUT_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collaboration Rules
       * @description An array of collaboration rules assigned to the member.
       * @default null
       */
      collaboration_rules: {
          /**
           * Departments
           * @description List of department identifiers applicable for this collaboration.
           */
          departments: string[];
          /**
           * Locations
           * @description List of location identifiers applicable for this collaboration.
           */
          locations: string[];
          /**
           * Role
           * @description Role of the member in this collaboration.
           * @enum {string}
           */
          role: "admin" | "simple" | "reviewer" | "no_access";
      }[] | null;
      /**
       * Email
       * @description The email address of the member.
       * @default null
       */
      email: string | null;
      /**
       * Headline
       * @description The headline or job title of the member.
       * @default null
       */
      headline: string | null;
      /**
       * Hris Role
       * @description The member's HRIS role.
       * @default null
       * @enum {string|null}
       */
      hris_role: "hris_admin" | "hris_employee" | "hris_no_access" | null;
      /**
       * Id
       * @description The unique identifier of the member.
       */
      id: string;
      /**
       * Name
       * @description The full name of the member.
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description The member's role.
       * @default null
       * @enum {string|null}
       */
      role: "admin" | "simple" | "reviewer" | "no_access" | null;
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
 * Type map of all available tool input types for toolkit "WORKABLE".
 */
export type WORKABLE_TOOL_INPUTS = {
  DELETE_DEPARTMENT: WORKABLE_DELETE_DEPARTMENT_INPUT
  GET_ACCOUNT: WORKABLE_GET_ACCOUNT_INPUT
  GET_ACCOUNTS: WORKABLE_GET_ACCOUNTS_INPUT
  GET_BACKGROUND_CHECK_PACKAGES: WORKABLE_GET_BACKGROUND_CHECK_PACKAGES_INPUT
  GET_BACKGROUND_CHECK_PROVIDERS: WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS_INPUT
  GET_CANDIDATES: WORKABLE_GET_CANDIDATES_INPUT
  GET_EVENTS: WORKABLE_GET_EVENTS_INPUT
  GET_JOBS: WORKABLE_GET_JOBS_INPUT
  GET_LEGAL_ENTITIES: WORKABLE_GET_LEGAL_ENTITIES_INPUT
  GET_MEMBERS: WORKABLE_GET_MEMBERS_INPUT
  GET_RECRUITERS: WORKABLE_GET_RECRUITERS_INPUT
  GET_REQUISITIONS: WORKABLE_GET_REQUISITIONS_INPUT
  GET_STAGES: WORKABLE_GET_STAGES_INPUT
  GET_SUBSCRIPTIONS: WORKABLE_GET_SUBSCRIPTIONS_INPUT
  POST_BACKGROUND_CHECK: WORKABLE_POST_BACKGROUND_CHECK_INPUT
  POST_DEPARTMENTS: WORKABLE_POST_DEPARTMENTS_INPUT
  POST_DEPARTMENT_MERGE: WORKABLE_POST_DEPARTMENT_MERGE_INPUT
  POST_MEMBERS_INVITE: WORKABLE_POST_MEMBERS_INVITE_INPUT
  POST_MEMBER_ENABLE: WORKABLE_POST_MEMBER_ENABLE_INPUT
  PUT_DEPARTMENTS: WORKABLE_PUT_DEPARTMENTS_INPUT
  PUT_MEMBERS: WORKABLE_PUT_MEMBERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WORKABLE".
 */
export type WORKABLE_TOOL_OUTPUTS = {
  DELETE_DEPARTMENT: WORKABLE_DELETE_DEPARTMENT_OUTPUT
  GET_ACCOUNT: WORKABLE_GET_ACCOUNT_OUTPUT
  GET_ACCOUNTS: WORKABLE_GET_ACCOUNTS_OUTPUT
  GET_BACKGROUND_CHECK_PACKAGES: WORKABLE_GET_BACKGROUND_CHECK_PACKAGES_OUTPUT
  GET_BACKGROUND_CHECK_PROVIDERS: WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS_OUTPUT
  GET_CANDIDATES: WORKABLE_GET_CANDIDATES_OUTPUT
  GET_EVENTS: WORKABLE_GET_EVENTS_OUTPUT
  GET_JOBS: WORKABLE_GET_JOBS_OUTPUT
  GET_LEGAL_ENTITIES: WORKABLE_GET_LEGAL_ENTITIES_OUTPUT
  GET_MEMBERS: WORKABLE_GET_MEMBERS_OUTPUT
  GET_RECRUITERS: WORKABLE_GET_RECRUITERS_OUTPUT
  GET_REQUISITIONS: WORKABLE_GET_REQUISITIONS_OUTPUT
  GET_STAGES: WORKABLE_GET_STAGES_OUTPUT
  GET_SUBSCRIPTIONS: WORKABLE_GET_SUBSCRIPTIONS_OUTPUT
  POST_BACKGROUND_CHECK: WORKABLE_POST_BACKGROUND_CHECK_OUTPUT
  POST_DEPARTMENTS: WORKABLE_POST_DEPARTMENTS_OUTPUT
  POST_DEPARTMENT_MERGE: WORKABLE_POST_DEPARTMENT_MERGE_OUTPUT
  POST_MEMBERS_INVITE: WORKABLE_POST_MEMBERS_INVITE_OUTPUT
  POST_MEMBER_ENABLE: WORKABLE_POST_MEMBER_ENABLE_OUTPUT
  PUT_DEPARTMENTS: WORKABLE_PUT_DEPARTMENTS_OUTPUT
  PUT_MEMBERS: WORKABLE_PUT_MEMBERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WORKABLE toolkit.
 */
export const WORKABLE = {
  slug: "workable",
  tools: {
    /**
     * Tool to delete a department. use when removing an obsolete or restructured department after confirming dependent resources.
     */
    DELETE_DEPARTMENT: "WORKABLE_DELETE_DEPARTMENT",
    /**
     * Tool to return the specified account. use when you need account metadata by subdomain after listing available accounts.
     */
    GET_ACCOUNT: "WORKABLE_GET_ACCOUNT",
    /**
     * Tool to retrieve a collection of all accounts you have access to. use when you need to list your workable accounts after authentication.
     */
    GET_ACCOUNTS: "WORKABLE_GET_ACCOUNTS",
    /**
     * Tool to retrieve a list of available background check packages from a specified provider. use after identifying the provider to view available package options.
     */
    GET_BACKGROUND_CHECK_PACKAGES: "WORKABLE_GET_BACKGROUND_CHECK_PACKAGES",
    /**
     * Tool to retrieve a list of available background check providers. use after confirming valid authentication to list integrated background check services.
     */
    GET_BACKGROUND_CHECK_PROVIDERS: "WORKABLE_GET_BACKGROUND_CHECK_PROVIDERS",
    /**
     * Tool to retrieve a list of all candidates across jobs. use when you need to aggregate candidate data across your organization.
     */
    GET_CANDIDATES: "WORKABLE_GET_CANDIDATES",
    /**
     * Tool to retrieve a collection of events scheduled in the account. use when you need to list all upcoming or past calls, interviews, or meetings.
     */
    GET_EVENTS: "WORKABLE_GET_EVENTS",
    /**
     * Tool to retrieve a list of jobs from your workable account. use after validating account authentication before managing job postings.
     */
    GET_JOBS: "WORKABLE_GET_JOBS",
    /**
     * Tool to retrieve a collection of your account legal entities. use after confirming valid authentication and enabling employee management.
     */
    GET_LEGAL_ENTITIES: "WORKABLE_GET_LEGAL_ENTITIES",
    /**
     * Tool to retrieve a list of your workable account members. use after confirming valid authentication to fetch collaborators, admins, or reviewers.
     */
    GET_MEMBERS: "WORKABLE_GET_MEMBERS",
    /**
     * Tool to retrieve external recruiters. use when you need to fetch all external recruiters for your account after confirming the r jobs scope.
     */
    GET_RECRUITERS: "WORKABLE_GET_RECRUITERS",
    /**
     * Tool to retrieve a collection of requisitions in the account. use after authentication succeeds.
     */
    GET_REQUISITIONS: "WORKABLE_GET_REQUISITIONS",
    /**
     * Tool to retrieve a collection of your recruitment pipeline stages. use when you need to list all available stages before managing candidates or pipelines.
     */
    GET_STAGES: "WORKABLE_GET_STAGES",
    /**
     * Tool to list all active subscriptions. use after verifying webhooks configuration to ensure subscriptions are active.
     */
    GET_SUBSCRIPTIONS: "WORKABLE_GET_SUBSCRIPTIONS",
    /**
     * Tool to inject background check results directly into the candidate's timeline. use after a background check status changes to push results and attachments into workable.
     */
    POST_BACKGROUND_CHECK: "WORKABLE_POST_BACKGROUND_CHECK",
    /**
     * Tool to create a department in your account. use when you need to add a new department for organizing teams under your workable account.
     */
    POST_DEPARTMENTS: "WORKABLE_POST_DEPARTMENTS",
    /**
     * Tool to merge a department into another. use after confirming both department ids and optional force flag.
     */
    POST_DEPARTMENT_MERGE: "WORKABLE_POST_DEPARTMENT_MERGE",
    /**
     * Tool to invite a member to your workable account. use when sending an invitation email.
     */
    POST_MEMBERS_INVITE: "WORKABLE_POST_MEMBERS_INVITE",
    /**
     * Tool to restore a deactivated member. use after confirming the member is currently deactivated.
     */
    POST_MEMBER_ENABLE: "WORKABLE_POST_MEMBER_ENABLE",
    /**
     * Tool to update an existing department in your account. use when renaming a department or changing its parent after confirming its id.
     */
    PUT_DEPARTMENTS: "WORKABLE_PUT_DEPARTMENTS",
    /**
     * Tool to update a member's details. use when you need to modify information of an existing member after confirming the id.
     */
    PUT_MEMBERS: "WORKABLE_PUT_MEMBERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WORKABLE".
 */
export type WORKABLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WORKABLE".
 */
export type WORKABLE_TRIGGER_EVENTS = {}
