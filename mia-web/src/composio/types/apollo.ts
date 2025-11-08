// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APOLLO's APOLLO_ADD_CONTACTS_TO_SEQUENCE tool input.
 */
type APOLLO_ADD_CONTACTS_TO_SEQUENCE_INPUT = {
  /**
   * Contact Ids
   * @description List of unique Apollo contact IDs to add to the sequence (in request body).
   */
  contact_ids?: string[];
  /**
   * Emailer Campaign Id
   * @description Unique ID of the Apollo emailer campaign (should match `sequence_id`; in request body).
   */
  emailer_campaign_id?: string;
  /**
   * Send Email From Email Account Id
   * @description Unique ID of the Apollo email account for sending emails (in request body).
   */
  send_email_from_email_account_id?: string;
  /**
   * Sequence Active In Other Campaigns
   * @description If true, add contacts active in other sequences (query parameter).
   * @default false
   */
  sequence_active_in_other_campaigns: boolean | null;
  /**
   * Sequence Finished In Other Campaigns
   * @description If true, add contacts finished in other sequences (query parameter).
   * @default false
   */
  sequence_finished_in_other_campaigns: boolean | null;
  /**
   * Sequence Id
   * @description Unique ID of the Apollo sequence to add contacts to (path parameter).
   */
  sequence_id?: string;
  /**
   * Sequence Job Change
   * @description If true, add contacts who recently changed jobs (query parameter).
   * @default false
   */
  sequence_job_change: boolean | null;
  /**
   * Sequence No Email
   * @description If true, add contacts without an email address (query parameter).
   * @default false
   */
  sequence_no_email: boolean | null;
  /**
   * Sequence Unverified Email
   * @description If true, add contacts with unverified emails (query parameter).
   * @default false
   */
  sequence_unverified_email: boolean | null;
  /**
   * User Id
   * @description Optional unique ID of the user performing the action (in request body if specified).
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of APOLLO's APOLLO_ADD_CONTACTS_TO_SEQUENCE tool output.
 */
type APOLLO_ADD_CONTACTS_TO_SEQUENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * EntityProgressJob
       * @description Details of the asynchronous background job initiated to add contacts.
       * @default null
       */
      entity_progress_job: {
          /**
           * Batch Size
           * @description Number of entities processed per batch.
           * @default 0
           */
          batch_size: number | null;
          /**
           * Entity Ids
           * @description Unique IDs of entities (e.g., contacts) processed/affected.
           * @default null
           */
          entity_ids: string[] | null;
          /**
           * Id
           * @description Unique ID for this background job.
           * @default null
           */
          id: string | null;
          /**
           * Job Type
           * @description Type/category of this background job (e.g., 'add_contacts_to_sequence').
           * @default null
           */
          job_type: string | null;
          /**
           * EntityProgressJobParams
           * @description Parameters used to configure and run this job.
           * @default null
           */
          params: {
              /**
               * Deploy Contacts Analytics Params
               * @description Analytics parameters for deploying contacts.
               * @default null
               */
              deploy_contacts_analytics_params: {
                  [key: string]: unknown;
              } | null;
              /**
               * Followup Sequence Params
               * @description Parameters for follow-up sequences, if applicable (variable structure).
               * @default null
               */
              followup_sequence_params: unknown;
              /**
               * Safety Check Filter Options
               * @description Options for safety checks/filters during the job.
               * @default null
               */
              safety_check_filter_options: {
                  [key: string]: unknown;
              } | null;
              /**
               * Scheduled Addition Params
               * @description Parameters for scheduled contact addition (variable structure).
               * @default null
               */
              scheduled_addition_params: unknown;
              /**
               * Send Email From Email Account Id
               * @description Email account IDs for sending emails in this job.
               * @default null
               */
              send_email_from_email_account_id: string[] | null;
              /**
               * Send Email From Email Address
               * @description Specific email address used for sending/scheduling emails (variable structure).
               * @default null
               */
              send_email_from_email_address: unknown;
              /**
               * Sequence Id
               * @description ID of the sequence for this job.
               * @default null
               */
              sequence_id: string | null;
              /**
               * Signals
               * @description Signal information for job processing (variable structure).
               * @default null
               */
              signals: unknown;
              /**
               * Source
               * @description Origin/source of the job or processed entities.
               * @default null
               */
              source: string | null;
          } | null;
          /**
           * Progress
           * @description Job completion progress (percentage/count).
           * @default 0
           */
          progress: number | null;
          /**
           * Signals Hash
           * @description Hash of signals data for this job, if any.
           * @default null
           */
          signals_hash: string | null;
          /**
           * User Id
           * @description Unique ID of the user initiating this job.
           * @default null
           */
          user_id: string | null;
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
 * Type of APOLLO's APOLLO_BULK_ORGANIZATION_ENRICHMENT tool input.
 */
type APOLLO_BULK_ORGANIZATION_ENRICHMENT_INPUT = {
  /**
   * Domains
   * @description A list of company domains to enrich. Domains should be base domains (e.g., 'apollo.io') and not include 'www.', '@', or protocols like 'http://'.
   */
  domains?: string[];
};

/**
 * Type of APOLLO's APOLLO_BULK_ORGANIZATION_ENRICHMENT tool output.
 */
type APOLLO_BULK_ORGANIZATION_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Specific error code if the request failed/partially failed.
       * @default null
       */
      error_code: string | null;
      /**
       * Error Message
       * @description Human-readable error message.
       * @default null
       */
      error_message: string | null;
      /**
       * Missing Records
       * @description Number of requested domains not found or enriched.
       * @default 0
       */
      missing_records: number | null;
      /**
       * Organizations
       * @description List of enriched organization details for successfully processed domains.
       * @default null
       */
      organizations: {
          /**
           * Account
           * @description Detailed information about the associated Apollo account, if linked.
           * @default null
           */
          account: {
              [key: string]: unknown;
          } | null;
          /**
           * Account Id
           * @description ID of the associated Apollo account, if linked.
           * @default null
           */
          account_id: string | null;
          /**
           * Alexa Ranking
           * @description Alexa website traffic ranking (lower is better).
           * @default 0
           */
          alexa_ranking: number | null;
          /**
           * Angellist Url
           * @description URL of the AngelList profile.
           * @default null
           */
          angellist_url: string | null;
          /**
           * Blog Url
           * @description URL of the official blog.
           * @default null
           */
          blog_url: string | null;
          /**
           * City
           * @description City of the primary office.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the primary office.
           * @default null
           */
          country: string | null;
          /**
           * Crunchbase Url
           * @description URL of the Crunchbase profile.
           * @default null
           */
          crunchbase_url: string | null;
          /**
           * Departmental Head Count
           * @description Estimated employee count per department (e.g., {'engineering': 50}).
           * @default null
           */
          departmental_head_count: {
              [key: string]: unknown;
          } | null;
          /**
           * Estimated Num Employees
           * @description Estimated total number of employees.
           * @default 0
           */
          estimated_num_employees: number | null;
          /**
           * Facebook Url
           * @description URL of the Facebook page.
           * @default null
           */
          facebook_url: string | null;
          /**
           * Founded Year
           * @description Year the organization was founded.
           * @default 0
           */
          founded_year: number | null;
          /**
           * Has Intent Signal Account
           * @description If the organization has an associated Apollo account for intent signals.
           * @default true
           */
          has_intent_signal_account: boolean | null;
          /**
           * Id
           * @description Apollo's unique identifier for the organization.
           * @default null
           */
          id: string | null;
          /**
           * Industries
           * @description All industries the organization is associated with.
           * @default null
           */
          industries: string[] | null;
          /**
           * Industry
           * @description The primary industry of the organization.
           * @default null
           */
          industry: string | null;
          /**
           * Industry Tag Hash
           * @description Hash information related to the industry tag.
           * @default null
           */
          industry_tag_hash: {
              [key: string]: unknown;
          } | null;
          /**
           * Industry Tag Id
           * @description Identifier for the primary industry tag in Apollo's system.
           * @default null
           */
          industry_tag_id: string | null;
          /**
           * Intent Signal Account
           * @description Identifier/details of the account associated with intent signals.
           * @default null
           */
          intent_signal_account: string | null;
          /**
           * Intent Strength
           * @description Qualitative measure of buying intent (e.g., 'High') based on Apollo's signals.
           * @default null
           */
          intent_strength: string | null;
          /**
           * Keywords
           * @description Keywords relevant to the business, products, or services.
           * @default null
           */
          keywords: string[] | null;
          /**
           * Languages
           * @description Languages associated with the organization (e.g., used on their website).
           * @default null
           */
          languages: string[] | null;
          /**
           * Linkedin Uid
           * @description Unique LinkedIn numeric identifier for the company page.
           * @default null
           */
          linkedin_uid: string | null;
          /**
           * Linkedin Url
           * @description URL of the LinkedIn company profile.
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Logo Url
           * @description URL of the official logo.
           * @default null
           */
          logo_url: string | null;
          /**
           * Name
           * @description The official name of the organization.
           * @default null
           */
          name: string | null;
          /**
           * Owned By Organization Id
           * @description Apollo ID for the parent or owning organization.
           * @default null
           */
          owned_by_organization_id: string | null;
          /**
           * Phone
           * @description A general phone number for the organization.
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code for the primary address.
           * @default null
           */
          postal_code: string | null;
          /**
           * Primary Domain
           * @description Primary website domain.
           * @default null
           */
          primary_domain: string | null;
          /**
           * Primary Phone
           * @description Primary phone contact information (e.g., number, type, source).
           * @default null
           */
          primary_phone: {
              [key: string]: unknown;
          } | null;
          /**
           * Publicly Traded Exchange
           * @description Stock exchange where listed, if publicly traded.
           * @default null
           */
          publicly_traded_exchange: string | null;
          /**
           * Publicly Traded Symbol
           * @description Stock ticker symbol, if publicly traded.
           * @default null
           */
          publicly_traded_symbol: string | null;
          /**
           * Raw Address
           * @description Full, unstructured primary location address.
           * @default null
           */
          raw_address: string | null;
          /**
           * Retail Location Count
           * @description Number of retail locations.
           * @default 0
           */
          retail_location_count: number | null;
          /**
           * Secondary Industries
           * @description Secondary industries the organization operates in or is related to.
           * @default null
           */
          secondary_industries: string[] | null;
          /**
           * Seo Description
           * @description SEO description (often from meta tags).
           * @default null
           */
          seo_description: string | null;
          /**
           * Short Description
           * @description Brief summary of the organization.
           * @default null
           */
          short_description: string | null;
          /**
           * Show Intent
           * @description If intent data should be displayed or considered.
           * @default true
           */
          show_intent: boolean | null;
          /**
           * Snippets Loaded
           * @description Whether relevant data snippets have been loaded by Apollo.
           * @default true
           */
          snippets_loaded: boolean | null;
          /**
           * State
           * @description State or province of the primary office.
           * @default null
           */
          state: string | null;
          /**
           * Street Address
           * @description Street component of the primary address.
           * @default null
           */
          street_address: string | null;
          /**
           * Twitter Url
           * @description URL of the Twitter profile.
           * @default null
           */
          twitter_url: string | null;
          /**
           * Website Url
           * @description The main website URL of the organization.
           * @default null
           */
          website_url: string | null;
      }[] | null;
      /**
       * Status
       * @description Overall status of the request (e.g., "success").
       * @default null
       */
      status: string | null;
      /**
       * Total Requested Domains
       * @description Total number of domains submitted.
       * @default 0
       */
      total_requested_domains: number | null;
      /**
       * Unique Domains
       * @description Number of unique domains processed.
       * @default 0
       */
      unique_domains: number | null;
      /**
       * Unique Enriched Records
       * @description Number of unique organizations successfully enriched.
       * @default 0
       */
      unique_enriched_records: number | null;
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
 * Type of APOLLO's APOLLO_BULK_PEOPLE_ENRICHMENT tool input.
 */
type APOLLO_BULK_PEOPLE_ENRICHMENT_INPUT = {
  /**
   * Details
   * @description List of up to 10 person objects to enrich. For effective matching, include key identifiers like email, LinkedIn URL, or name plus company information.
   */
  details?: {
      /**
       * Company Name
       * @description Company name.
       * @default null
       */
      company_name: string | null;
      /**
       * Domain
       * @description Company's domain.
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * @description Email address.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Person's first name.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Person's last name.
       * @default null
       */
      last_name: string | null;
      /**
       * Linkedin Url
       * @description LinkedIn profile URL.
       * @default null
       */
      linkedin_url: string | null;
      /**
       * Name
       * @description Person's full name.
       * @default null
       */
      name: string | null;
      /**
       * Organization Id
       * @description Apollo ID of the associated organization.
       * @default null
       */
      organization_id: string | null;
      /**
       * Title
       * @description Job title.
       * @default null
       */
      title: string | null;
  }[];
  /**
   * Reveal Personal Emails
   * @description If true, enriches with personal emails; may consume additional credits.
   * @default false
   */
  reveal_personal_emails: boolean | null;
  /**
   * Reveal Phone Number
   * @description If true, enriches with all available phone numbers; may consume credits and requires 'webhook_url'.
   * @default false
   */
  reveal_phone_number: boolean | null;
  /**
   * Webhook Url
   * @description Webhook URL for phone number delivery if `reveal_phone_number` is true; mandatory in that case.
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of APOLLO's APOLLO_BULK_PEOPLE_ENRICHMENT tool output.
 */
type APOLLO_BULK_PEOPLE_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Consumed
       * @description Apollo credits consumed by this request.
       * @default 0
       */
      credits_consumed: number | null;
      /**
       * Error Code
       * @description Error code if an issue occurred (e.g., 'bad_request'), else null.
       * @default null
       */
      error_code: string | null;
      /**
       * Error Message
       * @description Descriptive error message if an issue occurred, else null.
       * @default null
       */
      error_message: string | null;
      /**
       * Matches
       * @description List of enriched data for each successfully matched person.
       * @default null
       */
      matches: {
          /**
           * Departments
           * @description Associated departments in current organization (e.g., ['Engineering', 'Product']).
           * @default null
           */
          departments: string[] | null;
          /**
           * Email
           * @description Primary identified email address.
           * @default null
           */
          email: string | null;
          /**
           * Email Status
           * @description Verification status of primary email (e.g., 'verified', 'guessed').
           * @default null
           */
          email_status: string | null;
          /**
           * Employment History
           * @description List of person's employment and educational background.
           * @default null
           */
          employment_history: {
              /**
               *  Id
               * @description Apollo's unique ID for the employment/education record.
               * @default null
               */
              _id: string | null;
              /**
               * Created At
               * @description Record creation timestamp in Apollo.
               * @default null
               */
              created_at: string | null;
              /**
               * Current
               * @description True if this is the person's current employment/education.
               * @default true
               */
              current: boolean | null;
              /**
               * Degree
               * @description Academic degree obtained, if an educational record.
               * @default null
               */
              degree: string | null;
              /**
               * Description
               * @description Description of role, responsibilities, or educational program.
               * @default null
               */
              description: string | null;
              /**
               * Emails
               * @description Email(s) associated with this specific employment/education record.
               * @default null
               */
              emails: string | null;
              /**
               * End Date
               * @description End date of employment/education (YYYY-MM-DD or YYYY-MM).
               * @default null
               */
              end_date: string | null;
              /**
               * Grade Level
               * @description Grade level for education, if applicable.
               * @default null
               */
              grade_level: string | null;
              /**
               * Kind
               * @description Record type, e.g., 'employment' or 'education'.
               * @default null
               */
              kind: string | null;
              /**
               * Major
               * @description Academic major, if an educational record.
               * @default null
               */
              major: string | null;
              /**
               * Organization Id
               * @description Apollo ID for the associated organization.
               * @default null
               */
              organization_id: string | null;
              /**
               * Organization Name
               * @description Name of the company or educational institution.
               * @default null
               */
              organization_name: string | null;
              /**
               * Raw Address
               * @description Raw, unparsed address of the organization for this record.
               * @default null
               */
              raw_address: string | null;
              /**
               * Start Date
               * @description Start date of employment/education (YYYY-MM-DD or YYYY-MM).
               * @default null
               */
              start_date: string | null;
              /**
               * Title
               * @description Job title held or degree/program name.
               * @default null
               */
              title: string | null;
              /**
               * Updated At
               * @description Record last update timestamp in Apollo.
               * @default null
               */
              updated_at: string | null;
          }[] | null;
          /**
           * Extrapolated Email Confidence
           * @description Confidence score/category for extrapolated emails (e.g., 'high', '0.75').
           * @default null
           */
          extrapolated_email_confidence: string | null;
          /**
           * Facebook Url
           * @description URL of person's Facebook profile, if available.
           * @default null
           */
          facebook_url: string | null;
          /**
           * First Name
           * @description Person's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Functions
           * @description Associated job functions (e.g., ['engineering', 'sales']).
           * @default null
           */
          functions: string[] | null;
          /**
           * Github Url
           * @description URL of person's GitHub profile, if available.
           * @default null
           */
          github_url: string | null;
          /**
           * Headline
           * @description Professional headline, often from LinkedIn.
           * @default null
           */
          headline: string | null;
          /**
           * Id
           * @description Apollo's unique ID for the person.
           * @default null
           */
          id: string | null;
          /**
           * Last Name
           * @description Person's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Linkedin Url
           * @description LinkedIn profile URL.
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Name
           * @description Person's full name.
           * @default null
           */
          name: string | null;
          /**
           * OrganizationDetails
           * @description Details of person's current primary organization.
           * @default null
           */
          organization: {
              /**
               * Domain
               * @description Organization's primary internet domain (e.g., 'apollo.io').
               * @default null
               */
              domain: string | null;
              /**
               * Id
               * @description Apollo's unique ID for the organization.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Organization's official name.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Organization Id
           * @description Apollo ID of person's current primary organization.
           * @default null
           */
          organization_id: string | null;
          /**
           * Photo Url
           * @description URL of person's profile photo, if available.
           * @default null
           */
          photo_url: string | null;
          /**
           * Seniority
           * @description Calculated/inferred seniority level (e.g., 'executive', 'manager').
           * @default null
           */
          seniority: string | null;
          /**
           * Subdepartments
           * @description Associated sub-departments (e.g., ['Frontend Development', 'AI Research']).
           * @default null
           */
          subdepartments: string[] | null;
          /**
           * Title
           * @description Current job title.
           * @default null
           */
          title: string | null;
          /**
           * Twitter Url
           * @description URL of person's Twitter profile, if available.
           * @default null
           */
          twitter_url: string | null;
      }[] | null;
      /**
       * Missing Records
       * @description Number of submitted records not matched in Apollo.
       * @default 0
       */
      missing_records: number | null;
      /**
       * Status
       * @description Overall status of the bulk enrichment (e.g., "success").
       * @default null
       */
      status: string | null;
      /**
       * Total Requested Enrichments
       * @description Total number of people submitted for enrichment.
       * @default 0
       */
      total_requested_enrichments: number | null;
      /**
       * Unique Enriched Records
       * @description Number of unique records successfully found and enriched.
       * @default 0
       */
      unique_enriched_records: number | null;
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
 * Type of APOLLO's APOLLO_BULK_UPDATE_ACCOUNT_STAGE tool input.
 */
type APOLLO_BULK_UPDATE_ACCOUNT_STAGE_INPUT = {
  /**
   * Account Ids
   * @description A list of unique identifiers for accounts whose stage needs to be updated.
   */
  account_ids?: string[];
  /**
   * Account Stage Id
   * @description The unique identifier of the account stage to which the specified accounts will be moved.
   */
  account_stage_id?: string;
};

/**
 * Type of APOLLO's APOLLO_BULK_UPDATE_ACCOUNT_STAGE tool output.
 */
type APOLLO_BULK_UPDATE_ACCOUNT_STAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description Details accounts updated with their ID and new stage ID; null if no accounts were updated or if details are not returned.
       * @default null
       */
      accounts: {
          /**
           * Account Stage Id
           * @description The unique identifier of the new stage assigned to the account.
           */
          account_stage_id: string;
          /**
           * Id
           * @description The unique identifier of the account that was updated.
           */
          id: string;
      }[] | null;
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
 * Type of APOLLO's APOLLO_CREATE_ACCOUNT tool input.
 */
type APOLLO_CREATE_ACCOUNT_INPUT = {
  /**
   * Account Stage Id
   * @description Unique ID for the account's sales stage (e.g., 'Prospecting' or 'Closed Won'); retrieve via the 'List Account Stages' endpoint.
   */
  account_stage_id?: string;
  /**
   * Domain
   * @description Company's primary domain name (e.g., 'apollo.io', not 'www.apollo.io') to help Apollo enrich account data.
   */
  domain?: string;
  /**
   * Name
   * @description Human-readable name for the account.
   */
  name?: string;
  /**
   * Owner Id
   * @description Unique ID of the user within your Apollo team to be assigned as owner; retrieve via the 'Get a List of Users' endpoint.
   */
  owner_id?: string;
  /**
   * Phone
   * @description Primary phone number for the account (e.g., main corporate line, branch, or direct dial).
   */
  phone?: string;
  /**
   * Raw Address
   * @description Physical address or general location of the account (e.g., full street address or 'City, State, Country').
   */
  raw_address?: string;
};

/**
 * Type of APOLLO's APOLLO_CREATE_ACCOUNT tool output.
 */
type APOLLO_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Dictionary with the full object of the newly created account as returned by Apollo.io, including ID, name, domain, and other processed or enriched information.
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
 * Type of APOLLO's APOLLO_CREATE_CONTACT tool input.
 */
type APOLLO_CREATE_CONTACT_INPUT = {
  /**
   * Account Id
   * @description Apollo ID of the organization to assign this contact; obtain via 'Organization Search' (usually the `id` field).
   */
  account_id?: string;
  /**
   * Contact Stage Id
   * @description Apollo ID for the contact's sales/engagement stage (e.g., representing 'Approaching'); obtain via an action listing contact stages.
   */
  contact_stage_id?: string;
  /**
   * Corporate Phone
   * @description Work or office direct line. Apollo attempts to parse/sanitize format.
   */
  corporate_phone?: string;
  /**
   * Direct Phone
   * @description Primary direct dial phone number. Apollo attempts to parse/sanitize format.
   */
  direct_phone?: string;
  /**
   * Email
   * @description The primary email address for the contact.
   */
  email?: string;
  /**
   * First Name
   * @description First name of the contact.
   */
  first_name?: string;
  /**
   * Home Phone
   * @description Home phone number. Apollo attempts to parse/sanitize format.
   */
  home_phone?: string;
  /**
   * Label Names
   * @description Descriptive labels to categorize the contact; new labels create new lists in Apollo.
   */
  label_names?: string[];
  /**
   * Last Name
   * @description Last name of the contact.
   */
  last_name?: string;
  /**
   * Mobile Phone
   * @description Mobile phone number. Apollo attempts to parse/sanitize format.
   */
  mobile_phone?: string;
  /**
   * Organization Name
   * @description Name of the contact's current organization. Use 'Organization Search' for the exact Apollo-recognized name for best results.
   */
  organization_name?: string;
  /**
   * Other Phone
   * @description Alternative or unspecified-type phone number. Apollo attempts to parse/sanitize format.
   */
  other_phone?: string;
  /**
   * Present Raw Address
   * @description Contact's current location as a single string (e.g., 'Atlanta, United States', 'Tokyo, Japan').
   */
  present_raw_address?: string;
  /**
   * Title
   * @description The contact's current job title.
   */
  title?: string;
  /**
   * Website Url
   * @description Full corporate website URL for the contact's employer (e.g., 'https://www.apollo.io/'); must be an official company site, not social media.
   */
  website_url?: string;
};

/**
 * Type of APOLLO's APOLLO_CREATE_CONTACT tool output.
 */
type APOLLO_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Dictionary with the newly created contact's data from Apollo API, matching Apollo's standard contact object.
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
 * Type of APOLLO's APOLLO_CREATE_DEAL tool input.
 */
type APOLLO_CREATE_DEAL_INPUT = {
  /**
   * Account Id
   * @description Unique identifier of the Apollo account (company) for this deal. Find via 'Organization Search' endpoint.
   */
  account_id?: string;
  /**
   * Amount
   * @description Monetary value (string of numbers only, e.g., '50000', no symbols/commas). Currency is based on Apollo account settings.
   */
  amount?: string;
  /**
   * Closed Date
   * @description Anticipated deal closing date (YYYY-MM-DD).
   */
  closed_date?: string;
  /**
   * Name
   * @description Human-readable name for the new deal.
   */
  name?: string;
  /**
   * Opportunity Stage Id
   * @description Unique identifier for the deal's sales pipeline stage (e.g., 'Prospecting'). Retrieve via 'List Deal Stages' endpoint.
   */
  opportunity_stage_id?: string;
  /**
   * Owner Id
   * @description Unique identifier of the Apollo user owning this deal. Retrieve via 'Get a List of Users' endpoint.
   */
  owner_id?: string;
};

/**
 * Type of APOLLO's APOLLO_CREATE_DEAL tool output.
 */
type APOLLO_CREATE_DEAL_OUTPUT = {
  /**
   * Data
   * @description Comprehensive details of the newly created deal from the Apollo API, including its ID and all specified attributes.
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
 * Type of APOLLO's APOLLO_CREATE_TASK tool input.
 */
type APOLLO_CREATE_TASK_INPUT = {
  /**
   * Contact Ids
   * @description A list of Apollo contact IDs for whom tasks will be created. A separate task is generated for each contact ID in this list.
   */
  contact_ids?: string[];
  /**
   * Due At
   * @description The due date and time for the task(s), specified in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ' or 'YYYY-MM-DDTHH:MM:SS+HH:MM'). If no timezone offset is provided, GMT is assumed.
   */
  due_at?: string;
  /**
   * Note
   * @description An optional note or description providing additional context for the task(s). This is particularly recommended for tasks of type 'action_item'.
   * @default null
   */
  note: string | null;
  /**
   * Priority
   * @description The priority level for the task(s). Accepted values: 'high', 'medium', 'low'.
   */
  priority?: string;
  /**
   * Status
   * @description The status to assign to the newly created task(s). For new, upcoming tasks, 'scheduled' is appropriate. Other common values include 'completed' or 'archived' for tasks already finished.
   */
  status?: string;
  /**
   * Type
   * @description The type of task to be created. Accepted values: 'call', 'outreach_manual_email', 'linkedin_step_connect', 'linkedin_step_message', 'linkedin_step_view_profile', 'linkedin_step_interact_post', 'action_item'.
   */
  type?: string;
  /**
   * User Id
   * @description The ID of the user in your Apollo account who will own the created task(s). This ID can be retrieved using the 'Get a List of Users' endpoint.
   */
  user_id?: string;
};

/**
 * Type of APOLLO's APOLLO_CREATE_TASK tool output.
 */
type APOLLO_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Apollo API's response to the task creation request.
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
 * Type of APOLLO's APOLLO_GET_LABELS tool input.
 */
type APOLLO_GET_LABELS_INPUT = object;

/**
 * Type of APOLLO's APOLLO_GET_LABELS tool output.
 */
type APOLLO_GET_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Labels
       * @description A list of distinct labels available in the Apollo.io account.
       */
      labels: {
          /**
           * Cached Count
           * @description The number of Apollo records (e.g., contacts, accounts) currently associated with this label.
           */
          cached_count: number;
          /**
           * Created At
           * Format: date-time
           * @description The date and time when this label was created, presented in UTC as an ISO 8601 timestamp string (e.g., '2020-10-31T10:00:00.000Z').
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier for this specific label.
           */
          id: string;
          /**
           * Key
           * @description An alternative unique identifier for the label, often identical to the 'id' field. It can be used interchangeably with 'id' for identifying the label.
           */
          key: string;
          /**
           * Modality
           * @description Indicates the type of Apollo entity this label is applied to. For instance, 'contacts' means the label is for contact records.
           */
          modality: string;
          /**
           * Name
           * @description The user-assigned name for this label.
           */
          name: string;
          /**
           * Team Id
           * @description The unique identifier of the team within the Apollo.io organization that this label belongs to.
           */
          team_id: string;
          /**
           * Updated At
           * Format: date-time
           * @description The date and time when this label was last modified, presented in UTC as an ISO 8601 timestamp string (e.g., '2020-10-31T10:00:00.000Z').
           */
          updated_at: string;
          /**
           * User Id
           * @description The unique identifier of the Apollo.io user who initially created this label.
           */
          user_id: string;
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
 * Type of APOLLO's APOLLO_GET_OPPORTUNITY_STAGES tool input.
 */
type APOLLO_GET_OPPORTUNITY_STAGES_INPUT = object;

/**
 * Type of APOLLO's APOLLO_GET_OPPORTUNITY_STAGES tool output.
 */
type APOLLO_GET_OPPORTUNITY_STAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Opportunity Stages
       * @description A list of `OpportunityStage` objects, each detailing an available opportunity (deal) stage within the Apollo.io account. May be an empty list if no stages are configured.
       * @default null
       */
      opportunity_stages: {
          /**
           * Description
           * @description A textual description providing more details or context about this specific opportunity (deal) stage.
           * @default null
           */
          description: string | null;
          /**
           * Display Order
           * @description Numerical display order within its pipeline.
           * @default null
           */
          display_order: number | null;
          /**
           * Forecast Category Cd
           * @description Forecast category code (e.g., 'Pipeline', 'BestCase', 'Commit').
           * @default null
           */
          forecast_category_cd: string | null;
          /**
           * Id
           * @description The unique identifier for this opportunity (deal) stage.
           * @default null
           */
          id: string | null;
          /**
           * Is Closed
           * @description Indicates if this stage signifies a closed deal (won or lost).
           * @default null
           */
          is_closed: boolean | null;
          /**
           * Is Editable
           * @description Indicates if stage properties can be modified; treat as string due to unspecified API data type.
           * @default null
           */
          is_editable: string | null;
          /**
           * Is Meeting Set
           * @description Indicates if a meeting is scheduled for opportunities in this stage; treat as string due to unspecified API data type.
           * @default null
           */
          is_meeting_set: string | null;
          /**
           * Is Won
           * @description Indicates if this stage signifies a successfully won deal.
           * @default null
           */
          is_won: boolean | null;
          /**
           * Name
           * @description The name of the opportunity (deal) stage, e.g., 'Prospecting', 'Negotiation'.
           * @default null
           */
          name: string | null;
          /**
           * Opportunity Pipeline Id
           * @description The unique identifier of the opportunity pipeline to which this stage belongs.
           * @default null
           */
          opportunity_pipeline_id: string | null;
          /**
           * Probability
           * @description Probability (percentage) that an opportunity in this stage will be closed successfully.
           * @default null
           */
          probability: number | null;
          /**
           * Salesforce Id
           * @description The unique identifier of the corresponding stage in Salesforce, if a Salesforce integration is active and this stage is synced.
           * @default null
           */
          salesforce_id: string | null;
          /**
           * Team Id
           * @description The unique identifier of the team associated with this opportunity stage.
           * @default null
           */
          team_id: string | null;
          /**
           * Type
           * @description The type classification of the opportunity (deal) stage, e.g., 'standard' or 'custom'.
           * @default null
           */
          type: string | null;
      }[] | null;
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
 * Type of APOLLO's APOLLO_GET_ORGANIZATION_JOB_POSTINGS tool input.
 */
type APOLLO_GET_ORGANIZATION_JOB_POSTINGS_INPUT = {
  /**
   * Organization Id
   * @description The unique identifier for the organization whose job postings are being requested.
   */
  organization_id?: string;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of job postings per page (max 100) for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Q Organization Domains
   * @description Filter job postings by the organization's domain (e.g., 'apollo.io').
   * @default null
   */
  q_organization_domains: string | null;
};

/**
 * Type of APOLLO's APOLLO_GET_ORGANIZATION_JOB_POSTINGS tool output.
 */
type APOLLO_GET_ORGANIZATION_JOB_POSTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Postings
       * @description List of job postings from the organization.
       */
      job_postings?: {
          /**
           * Created At
           * @description The timestamp indicating the creation time of the job posting, in ISO 8601 format.
           * @default null
           */
          created_at: string | null;
          /**
           * Department
           * @description The department within the organization to which this job posting belongs (e.g., 'Engineering').
           * @default null
           */
          department: string | null;
          /**
           * Description
           * @description A detailed description of the job role, responsibilities, and qualifications.
           * @default null
           */
          description: string | null;
          /**
           * Employment Type
           * @description The type of employment offered (e.g., 'Full-time', 'Part-time', 'Contract').
           * @default null
           */
          employment_type: string | null;
          /**
           * Experience Level
           * @description The level of experience required for the job (e.g., 'Entry Level', 'Mid-Senior level', 'Director').
           * @default null
           */
          experience_level: string | null;
          /**
           * Id
           * @description Unique identifier of the job posting.
           */
          id: string;
          /**
           * Internal
           * @description A boolean flag indicating whether the job posting is intended for internal applicants only.
           * @default null
           */
          internal: boolean | null;
          /**
           * Location
           * @description The geographical location where the job is based (e.g., 'San Francisco, CA', 'Remote').
           * @default null
           */
          location: string | null;
          /**
           * Organization Angellist Url
           * @description The URL of the organization's AngelList profile.
           * @default null
           */
          organization_angellist_url: string | null;
          /**
           * Organization Crunchbase Url
           * @description The URL of the organization's Crunchbase profile.
           * @default null
           */
          organization_crunchbase_url: string | null;
          /**
           * Organization Domain
           * @description The primary domain name of the organization (e.g., 'company.com').
           * @default null
           */
          organization_domain: string | null;
          /**
           * Organization Facebook Url
           * @description The URL of the organization's Facebook page.
           * @default null
           */
          organization_facebook_url: string | null;
          /**
           * Organization Id
           * @description The unique identifier of the organization that published this job posting.
           * @default null
           */
          organization_id: string | null;
          /**
           * Organization Linkedin Url
           * @description The URL of the organization's LinkedIn company profile.
           * @default null
           */
          organization_linkedin_url: string | null;
          /**
           * Organization Name
           * @description The name of the organization that published this job posting.
           * @default null
           */
          organization_name: string | null;
          /**
           * Organization Twitter Url
           * @description The URL of the organization's Twitter profile.
           * @default null
           */
          organization_twitter_url: string | null;
          /**
           * Organization Website Url
           * @description The URL of the organization's official website.
           * @default null
           */
          organization_website_url: string | null;
          /**
           * Title
           * @description The title of the job posting (e.g., 'Software Engineer').
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description The timestamp indicating the last update time of the job posting, in ISO 8601 format.
           * @default null
           */
          updated_at: string | null;
          /**
           * Url
           * @description The direct URL to the job posting on the organization's career page or job board.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination details for the job postings, such as current page and total items.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
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
 * Type of APOLLO's APOLLO_GET_TYPED_CUSTOM_FIELDS tool input.
 */
type APOLLO_GET_TYPED_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of APOLLO's APOLLO_GET_TYPED_CUSTOM_FIELDS tool output.
 */
type APOLLO_GET_TYPED_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Typed Custom Fields
       * @description All typed custom field definitions configured in the Apollo.io instance.
       */
      typed_custom_fields: {
          /**
           * Additional Mapped Crm Field
           * @description Identifier for an additional mapped CRM field, if applicable.
           * @default null
           */
          additional_mapped_crm_field: string | null;
          /**
           * Id
           * @description Unique identifier for the custom field definition.
           */
          id: string;
          /**
           * Is Readonly Mapped Crm Field
           * @description Indicates if the `mapped_crm_field` is read-only.
           * @default null
           */
          is_readonly_mapped_crm_field: boolean | null;
          /**
           * Mapped Crm Field
           * @description Identifier of the corresponding field in an integrated CRM, if mapped.
           * @default null
           */
          mapped_crm_field: string | null;
          /**
           * Mirrored
           * @description Indicates if this custom field is mirrored from another system or source.
           * @default null
           */
          mirrored: boolean | null;
          /**
           * Modality
           * @description The type of Apollo entity this custom field is associated with.
           * @default null
           */
          modality: string | null;
          /**
           * Name
           * @description Display name of the custom field.
           * @default null
           */
          name: string | null;
          /**
           * Picklist Options
           * @description String representations of available options, if `type` is 'picklist'.
           * @default null
           */
          picklist_options: string[] | null;
          /**
           * Picklist Options Last Synced At
           * @description Timestamp (ISO 8601) when `picklist_options` were last synchronized from an external source, if applicable.
           * @default null
           */
          picklist_options_last_synced_at: string | null;
          /**
           * Picklist Value Set Id
           * @description Identifier for the set of predefined picklist options if `type` is 'picklist'.
           * @default null
           */
          picklist_value_set_id: string | null;
          /**
           * Picklist Values
           * @description Detailed objects for each picklist option, providing more information than `picklist_options` (e.g., IDs, CRM mappings).
           * @default null
           */
          picklist_values: {
              /**
               *  Id
               * @description Unique identifier for the picklist option value.
               * @default null
               */
              _id: string | null;
              /**
               * Id
               * @description Identifier for the picklist option value.
               * @default null
               */
              id: string | null;
              /**
               * Key
               * @description A unique key or internal identifier for the picklist option value.
               * @default null
               */
              key: string | null;
              /**
               * Mapped Crm Values
               * @description Maps this picklist option to its CRM representations; keys are usually CRM field IDs.
               * @default null
               */
              mapped_crm_values: {
                  [key: string]: unknown;
              } | null;
              /**
               * Name
               * @description Display name of the picklist option value.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * System Name
           * @description System-generated or internal name for the custom field, often for API/integration.
           * @default null
           */
          system_name: string | null;
          /**
           * Text Field Max Length
           * @description Maximum character length for the custom field if `type` is text-based (e.g., 'string', 'text_area').
           * @default null
           */
          text_field_max_length: number | null;
          /**
           * Type
           * @description The data type of the custom field.
           * @default null
           */
          type: string | null;
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
 * Type of APOLLO's APOLLO_LIST_ACCOUNT_STAGES tool input.
 */
type APOLLO_LIST_ACCOUNT_STAGES_INPUT = object;

/**
 * Type of APOLLO's APOLLO_LIST_ACCOUNT_STAGES tool output.
 */
type APOLLO_LIST_ACCOUNT_STAGES_OUTPUT = {
  /**
   * Data
   * @description Contains account stages, usually under an 'account_stages' key, as a list of objects where each object has an 'id' and 'name'.
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
 * Type of APOLLO's APOLLO_LIST_CONTACT_STAGES tool input.
 */
type APOLLO_LIST_CONTACT_STAGES_INPUT = object;

/**
 * Type of APOLLO's APOLLO_LIST_CONTACT_STAGES tool output.
 */
type APOLLO_LIST_CONTACT_STAGES_OUTPUT = {
  /**
   * Data
   * @description The raw JSON response from the API as a dictionary, expected to contain a list of contact stages (often under a key like 'contact_stages'), each detailed with an ID and name.
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
 * Type of APOLLO's APOLLO_LIST_DEALS tool input.
 */
type APOLLO_LIST_DEALS_INPUT = {
  /**
   * Page
   * @description Page number for paginated results.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of deals to retrieve per page.
   */
  per_page?: number;
  /**
   * Sort By Field
   * @description Field to sort deals by. If not provided, a default sort order is applied by the Apollo API.
   */
  sort_by_field?: string;
};

/**
 * Type of APOLLO's APOLLO_LIST_DEALS tool output.
 */
type APOLLO_LIST_DEALS_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the Apollo API, typically including a list of deals and pagination information.
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
 * Type of APOLLO's APOLLO_LIST_EMAIL_ACCOUNTS tool input.
 */
type APOLLO_LIST_EMAIL_ACCOUNTS_INPUT = object;

/**
 * Type of APOLLO's APOLLO_LIST_EMAIL_ACCOUNTS tool output.
 */
type APOLLO_LIST_EMAIL_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Accounts
       * @description List of email accounts.
       * @default null
       */
      email_accounts: {
          /**
           * Active
           * @description Indicates if the account is active and can send/receive emails.
           * @default null
           */
          active: boolean | null;
          /**
           * Aliases
           * @description Email aliases.
           * @default null
           */
          aliases: string[] | null;
          /**
           * Default
           * @description Indicates if this is the user's default email account.
           * @default null
           */
          default: boolean | null;
          /**
           * Email
           * @description Email address.
           * @default null
           */
          email: string | null;
          /**
           * Email Daily Threshold
           * @description Maximum daily emails.
           * @default null
           */
          email_daily_threshold: number | null;
          /**
           * Email Sending Policy Cd
           * @description Code for the email sending policy.
           * @default null
           */
          email_sending_policy_cd: string | null;
          /**
           * Id
           * @description Unique identifier.
           * @default null
           */
          id: string | null;
          /**
           * Last Synced At
           * @description ISO 8601 timestamp of the last successful synchronization.
           * @default null
           */
          last_synced_at: string | null;
          /**
           * Mailgun Domains
           * @description Associated Mailgun domains, if Mailgun is used.
           * @default null
           */
          mailgun_domains: string | null;
          /**
           * Max Outbound Emails Per Hour
           * @description Maximum hourly outbound emails.
           * @default null
           */
          max_outbound_emails_per_hour: number | null;
          /**
           * Nylas Provider
           * @description Nylas provider type, if connected via Nylas.
           * @default null
           */
          nylas_provider: string | null;
          /**
           * Provider Display Name
           * @description Display name of the email service provider.
           * @default null
           */
          provider_display_name: string | null;
          /**
           * Seconds Delay Between Emails
           * @description Delay in seconds between sending consecutive emails.
           * @default null
           */
          seconds_delay_between_emails: number | null;
          /**
           * Sendgrid Api User
           * @description SendGrid API username, if SendGrid is used.
           * @default null
           */
          sendgrid_api_user: string | null;
          /**
           * Signature Edit Disabled
           * @description Indicates if email signature editing is disabled.
           * @default null
           */
          signature_edit_disabled: boolean | null;
          /**
           * Signature Html
           * @description HTML content of the email signature.
           * @default null
           */
          signature_html: string | null;
          /**
           * Type
           * @description Type of email account.
           * @default null
           */
          type: string | null;
          /**
           * User Id
           * @description Unique identifier of the user owner.
           * @default null
           */
          user_id: string | null;
      }[] | null;
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
 * Type of APOLLO's APOLLO_LIST_USERS tool input.
 */
type APOLLO_LIST_USERS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (e.g., 1, 2, 3...). Defaults to the first page if omitted.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of users to retrieve per page (e.g., 10, 25, 50...). Defaults to a predefined page size if omitted.
   */
  per_page?: number;
};

/**
 * Type of APOLLO's APOLLO_LIST_USERS tool output.
 */
type APOLLO_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the raw JSON response from the Apollo API. This typically includes a list of users, their associated details, and pagination metadata (e.g., total entries, current page) if applicable.
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
 * Type of APOLLO's APOLLO_ORGANIZATION_ENRICHMENT tool input.
 */
type APOLLO_ORGANIZATION_ENRICHMENT_INPUT = {
  /**
   * Domain
   * @description The domain of the company to enrich, (e.g., 'apollo.io', 'microsoft.com'). Do not include 'www.' or '@' symbols.
   */
  domain?: string;
};

/**
 * Type of APOLLO's APOLLO_ORGANIZATION_ENRICHMENT tool output.
 */
type APOLLO_ORGANIZATION_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the enriched data for the organization from Apollo.io. This can include details such as industry, revenue, employee count, funding information, technologies used, and more.
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
 * Type of APOLLO's APOLLO_ORGANIZATION_SEARCH tool input.
 */
type APOLLO_ORGANIZATION_SEARCH_INPUT = {
  /**
   * Organization Ids
   * @description Apollo's unique organization IDs to fetch specific companies.
   */
  organization_ids?: string[];
  /**
   * Organization Locations
   * @description Company HQs (city, state, country) to include; filters on primary HQ only.
   */
  organization_locations?: string[];
  /**
   * Organization Not Locations
   * @description Company HQs (city, state, country) to exclude; useful for territory management.
   */
  organization_not_locations?: string[];
  /**
   * Organization Num Employees Ranges
   * @description Employee count ranges. Each string must be in 'min,max' format (e.g., '1,10').
   */
  organization_num_employees_ranges?: string[];
  /**
   * Page
   * @description Page number for paginated results, used with `per_page`.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of organization records per page, used with `page`.
   */
  per_page?: number;
  /**
   * Q Organization Keyword Tags
   * @description Keywords for company industries/specializations (e.g., 'software', 'healthcare').
   */
  q_organization_keyword_tags?: string[];
  /**
   * Q Organization Name
   * @description Organization name; supports partial matching (e.g., 'Apollo' matches 'Apollo Inc.').
   */
  q_organization_name?: string;
};

/**
 * Type of APOLLO's APOLLO_ORGANIZATION_SEARCH tool output.
 */
type APOLLO_ORGANIZATION_SEARCH_OUTPUT = {
  /**
   * Data
   * @description API response: list of matching organizations and pagination details (total records, current page, records per page).
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
 * Type of APOLLO's APOLLO_PEOPLE_ENRICHMENT tool input.
 */
type APOLLO_PEOPLE_ENRICHMENT_INPUT = {
  /**
   * Domain
   * @description Domain name of the person's organization (e.g., 'apollo.io'); exclude 'www.' or 'http(s)://'. Used for matching.
   */
  domain?: string;
  /**
   * Email
   * @description The email address of the person.
   */
  email?: string;
  /**
   * First Name
   * @description The first name of the person.
   */
  first_name?: string;
  /**
   * Hashed Email
   * @description MD5 or SHA-256 hashed email; used for matching if plain email is unavailable.
   */
  hashed_email?: string;
  /**
   * Id
   * @description Unique Apollo ID for the person, ensuring a direct match.
   */
  id?: string;
  /**
   * Last Name
   * @description The last name of the person.
   */
  last_name?: string;
  /**
   * Linkedin Url
   * @description Full URL of the person's LinkedIn profile.
   */
  linkedin_url?: string;
  /**
   * Name
   * @description Full name of the person; used for matching instead of or with `first_name` and `last_name`.
   */
  name?: string;
  /**
   * Organization Name
   * @description Name of the person's organization; used with name fields for matching.
   */
  organization_name?: string;
  /**
   * Reveal Personal Emails
   * @description If true, attempts to enrich with personal emails; may incur additional API credits.
   * @default false
   */
  reveal_personal_emails: boolean;
  /**
   * Reveal Phone Number
   * @description If true, attempts to enrich with phone numbers; may incur additional API credits and requires `webhook_url`.
   * @default false
   */
  reveal_phone_number: boolean;
  /**
   * Webhook Url
   * @description Publicly accessible URL for Apollo to POST phone number data if `reveal_phone_number` is true.
   */
  webhook_url?: string;
};

/**
 * Type of APOLLO's APOLLO_PEOPLE_ENRICHMENT tool output.
 */
type APOLLO_PEOPLE_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Dictionary with enriched data for the person from Apollo.io; structure and content vary based on information found and requested.
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
 * Type of APOLLO's APOLLO_PEOPLE_SEARCH tool input.
 */
type APOLLO_PEOPLE_SEARCH_INPUT = {
  /**
   * Contact Email Status
   * @description Email statuses to filter contacts. Allowed: 'verified', 'unverified', 'likely to engage', 'unavailable'.
   * @default null
   */
  contact_email_status: string[] | null;
  /**
   * Organization Ids
   * @description Apollo-specific company IDs to find people within these organizations; obtain from Organization Search.
   * @default null
   */
  organization_ids: string[] | null;
  /**
   * Organization Locations
   * @description Company HQs (e.g., 'Texas', 'Tokyo', 'Spain'); uses primary HQ location.
   * @default null
   */
  organization_locations: string[] | null;
  /**
   * Organization Num Employees Ranges
   * @description Org employee count ranges for organizations (e.g., '1,10', '10000,20000'); format as 'min,max' string.
   * @default null
   */
  organization_num_employees_ranges: string[] | null;
  /**
   * Page
   * @description Page number (1-based) for pagination. Max 500 if `per_page` is 100.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Records per page. Max 100.
   * @default null
   */
  per_page: number | null;
  /**
   * Person Locations
   * @description Current geographic locations of people (e.g., 'London', 'California', 'Germany').
   * @default null
   */
  person_locations: string[] | null;
  /**
   * Person Seniorities
   * @description Job seniority levels for current positions (e.g., 'Director', 'VP', 'Senior').
   * @default null
   */
  person_seniorities: string[] | null;
  /**
   * Person Titles
   * @description Job titles (e.g., 'software engineer'); matches if any title found, may include similar.
   * @default null
   */
  person_titles: string[] | null;
  /**
   * Q Keywords
   * @description Keywords for person profile fields like skills, job descriptions, or technologies (e.g., 'marketing technology', 'saas sales').
   * @default null
   */
  q_keywords: string | null;
  /**
   * Q Organization Domains
   * @description Company domains (e.g., 'apollo.io', 'microsoft.com'); exclude 'www.' or '@' prefixes.
   * @default null
   */
  q_organization_domains: string[] | null;
};

/**
 * Type of APOLLO's APOLLO_PEOPLE_SEARCH tool output.
 */
type APOLLO_PEOPLE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Search results, including a list of people (e.g., under 'people' key) and pagination details (total entries, current page, total pages).
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
 * Type of APOLLO's APOLLO_SEARCH_ACCOUNTS tool input.
 */
type APOLLO_SEARCH_ACCOUNTS_INPUT = {
  /**
   * Account Stage Ids
   * @description A list of Apollo IDs for account stages to filter the results by. These IDs can be retrieved using the 'List Account Stages' endpoint.
   */
  account_stage_ids?: string[];
  /**
   * Page
   * @description The page number for pagination, starting from 1. This is used with the 'per_page' parameter to navigate through results.
   */
  page?: number;
  /**
   * Per Page
   * @description The number of results to return per page. This is used for pagination in conjunction with the 'page' parameter. Maximum value is 100.
   */
  per_page?: number;
  /**
   * Q Organization Name
   * @description Keywords to search for in account names. This field supports partial name matching.
   */
  q_organization_name?: string;
  /**
   * Sort Ascending
   * @description Determines the sort order. Set to true for ascending order. This parameter must be used in conjunction with 'sort_by_field'.
   * @default false
   */
  sort_ascending: boolean;
  /**
   * Sort By Field
   * @description The field by which to sort the accounts. Valid options are: 'account_last_activity_date', 'account_created_at', 'account_updated_at'.
   */
  sort_by_field?: string;
};

/**
 * Type of APOLLO's APOLLO_SEARCH_ACCOUNTS tool output.
 */
type APOLLO_SEARCH_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the search results, including a list of accounts and pagination details.
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
 * Type of APOLLO's APOLLO_SEARCH_CONTACTS tool input.
 */
type APOLLO_SEARCH_CONTACTS_INPUT = {
  /**
   * Contact Stage Ids
   * @description Apollo contact stage IDs to filter contacts; obtain IDs using the 'List Contact Stages' action.
   */
  contact_stage_ids?: string[];
  /**
   * Page
   * @description Page number of results (1-indexed, max 500); use with 'per_page' for pagination.
   */
  page?: number;
  /**
   * Per Page
   * @description Contact records to return per page (max 100); for pagination.
   */
  per_page?: number;
  /**
   * Q Keywords
   * @description Keywords for matching contact names, titles, employers, or emails.
   */
  q_keywords?: string;
  /**
   * Sort Ascending
   * @description Sorts results in ascending order; requires 'sort_by_field'.
   * @default false
   */
  sort_ascending: boolean;
  /**
   * Sort By Field
   * @description Field to sort results. Valid options: 'contact_last_activity_date', 'contact_email_last_opened_at', 'contact_email_last_clicked_at', 'contact_created_at', 'contact_updated_at'.
   */
  sort_by_field?: string;
};

/**
 * Type of APOLLO's APOLLO_SEARCH_CONTACTS tool output.
 */
type APOLLO_SEARCH_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Search results, including 'contacts' list and 'pagination' details (e.g., 'page', 'per_page', 'total_entries', 'total_pages').
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
 * Type of APOLLO's APOLLO_SEARCH_SEQUENCES tool input.
 */
type APOLLO_SEARCH_SEQUENCES_INPUT = {
  /**
   * Page
   * @description Page number for paginated results.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of sequences per page. Maximum value is 100.
   * @default 25
   */
  per_page: number | null;
  /**
   * Q Name
   * @description Name or part of the name of the sequence to search for. If omitted, results are not filtered by name.
   * @default null
   */
  q_name: string | null;
};

/**
 * Type of APOLLO's APOLLO_SEARCH_SEQUENCES tool output.
 */
type APOLLO_SEARCH_SEQUENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description The current page number of the paginated results.
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description The number of sequences returned per page, corresponding to the request.
       * @default null
       */
      per_page: number | null;
      /**
       * Sequences
       * @description A list of sequences that match the specified search criteria.
       */
      sequences?: {
          /**
           * Active Count
           * @description The number of contacts currently active in this sequence.
           * @default null
           */
          active_count: number | null;
          /**
           * Created At
           * Format: date-time
           * @description The timestamp indicating when the sequence was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description The unique identifier of the sequence.
           */
          id: string;
          /**
           * Name
           * @description The name of the sequence.
           * @default null
           */
          name: string | null;
          /**
           * Num Steps
           * @description The total number of steps defined within this sequence.
           * @default null
           */
          num_steps: number | null;
          /**
           * Permissions
           * @description Permissions associated with the sequence for the authenticated user. Details are specific to the API's implementation.
           * @default null
           */
          permissions: string | null;
          /**
           * Status
           * @description The current status of the sequence (e.g., 'active', 'inactive', 'draft').
           * @default null
           */
          status: string | null;
          /**
           * Unique Bounced
           * @description The count of unique contacts whose communications bounced from this sequence.
           * @default null
           */
          unique_bounced: number | null;
          /**
           * Unique Clicked
           * @description The count of unique contacts who have clicked a link in any communication from this sequence.
           * @default null
           */
          unique_clicked: number | null;
          /**
           * Unique Delivered
           * @description The count of unique contacts to whom communications from this sequence have been successfully delivered.
           * @default null
           */
          unique_delivered: number | null;
          /**
           * Unique Opened
           * @description The count of unique contacts who have opened any communication from this sequence.
           * @default null
           */
          unique_opened: number | null;
          /**
           * Unique Replied
           * @description The count of unique contacts who have replied to any communication from this sequence.
           * @default null
           */
          unique_replied: number | null;
          /**
           * Unique Scheduled
           * @description The count of unique contacts scheduled to receive communications from this sequence.
           * @default null
           */
          unique_scheduled: number | null;
          /**
           * Updated At
           * Format: date-time
           * @description The timestamp indicating when the sequence was last updated.
           * @default null
           */
          updated_at: string | null;
          /**
           * User Id
           * @description The unique identifier of the user who created or owns the sequence.
           * @default null
           */
          user_id: string | null;
      }[];
      /**
       * Total Entries
       * @description The total number of sequences found that match the search criteria across all pages.
       * @default null
       */
      total_entries: number | null;
      /**
       * Total Pages
       * @description The total number of pages available for the current search query.
       * @default null
       */
      total_pages: number | null;
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
 * Type of APOLLO's APOLLO_SEARCH_TASKS tool input.
 */
type APOLLO_SEARCH_TASKS_INPUT = {
  /**
   * Account Ids
   * @description List of account IDs to filter tasks by association.
   * @default null
   */
  account_ids: string[] | null;
  /**
   * Contact Ids
   * @description List of contact IDs to filter tasks by association.
   * @default null
   */
  contact_ids: string[] | null;
  /**
   * DateRange
   * @description Filter tasks by due date range.
   * @default null
   */
  due_date_range: {
      /**
       * Gte
       * Format: date
       * @description Start date of the range (inclusive).
       * @default null
       */
      gte: string | null;
      /**
       * Lte
       * Format: date
       * @description End date of the range (inclusive).
       * @default null
       */
      lte: string | null;
  } | null;
  /**
   * Page
   * @description Page number for pagination (starts from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tasks per page (1-100).
   * @default null
   */
  per_page: number | null;
  /**
   * Q Keywords
   * @description Keywords for searching task notes or subjects (matches partial words).
   * @default null
   */
  q_keywords: string | null;
  /**
   * Sort Ascending
   * @description Sort order: `true` for ascending, `false` for descending.
   * @default null
   */
  sort_ascending: boolean | null;
  /**
   * Sort By Field
   * @description Field for sorting tasks (e.g., 'due_date', 'created_at').
   * @default null
   */
  sort_by_field: string | null;
  /**
   * DateRange
   * @description Filter tasks by creation date range.
   * @default null
   */
  task_created_at_range: {
      /**
       * Gte
       * Format: date
       * @description Start date of the range (inclusive).
       * @default null
       */
      gte: string | null;
      /**
       * Lte
       * Format: date
       * @description End date of the range (inclusive).
       * @default null
       */
      lte: string | null;
  } | null;
  /**
   * Task Priorities
   * @description List of case-sensitive task priorities to filter by (e.g., 'High', 'Normal').
   * @default null
   */
  task_priorities: string[] | null;
  /**
   * Task Types
   * @description List of task types to filter by (e.g., 'call', 'email').
   * @default null
   */
  task_types: string[] | null;
  /**
   * DateRange
   * @description Filter tasks by last update date range.
   * @default null
   */
  task_updated_at_range: {
      /**
       * Gte
       * Format: date
       * @description Start date of the range (inclusive).
       * @default null
       */
      gte: string | null;
      /**
       * Lte
       * Format: date
       * @description End date of the range (inclusive).
       * @default null
       */
      lte: string | null;
  } | null;
  /**
   * Task User Ids
   * @description List of user IDs to filter tasks by assignment.
   * @default null
   */
  task_user_ids: string[] | null;
};

/**
 * Type of APOLLO's APOLLO_SEARCH_TASKS tool output.
 */
type APOLLO_SEARCH_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details for the task list.
       */
      pagination: {
          /**
           * Page
           * @description Current page number.
           * @default null
           */
          page: number | null;
          /**
           * Per Page
           * @description Number of tasks requested per page.
           * @default null
           */
          per_page: number | null;
          /**
           * Total Entries
           * @description Total tasks matching criteria across all pages.
           * @default null
           */
          total_entries: number | null;
          /**
           * Total Pages
           * @description Total pages available.
           * @default null
           */
          total_pages: number | null;
      };
      /**
       * Tasks
       * @description List of tasks matching the search criteria.
       */
      tasks: {
          /**
           * Account Ids
           * @description List of account IDs associated with the task.
           * @default null
           */
          account_ids: string[] | null;
          /**
           * Completed At
           * @description Timestamp (ISO 8601 format) of task completion. Null if not completed.
           * @default null
           */
          completed_at: string | null;
          /**
           * Completed By User Id
           * @description User ID of the completer. Null if not completed or unknown.
           * @default null
           */
          completed_by_user_id: string | null;
          /**
           * Contact Ids
           * @description List of contact IDs associated with the task.
           * @default null
           */
          contact_ids: string[] | null;
          /**
           * Created At
           * @description Timestamp (ISO 8601 format) of task creation.
           * @default null
           */
          created_at: string | null;
          /**
           * Due Date
           * Format: date
           * @description Task due date (YYYY-MM-DD format). Null if not set.
           * @default null
           */
          due_date: string | null;
          /**
           * Id
           * @description Unique Apollo-generated task identifier.
           */
          id: string;
          /**
           * Note
           * @description Additional notes for the task. Null if not set.
           * @default null
           */
          note: string | null;
          /**
           * Priority
           * @description Task priority (e.g., 'High', 'Normal'). Null if not set.
           * @default null
           */
          priority: string | null;
          /**
           * Subject
           * @description Task subject or title. Null if not set.
           * @default null
           */
          subject: string | null;
          /**
           * Type
           * @description Task type (e.g., 'call', 'email'). Null if not set.
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description Timestamp (ISO 8601 format) of last task update.
           * @default null
           */
          updated_at: string | null;
          /**
           * User Id
           * @description User ID of the assignee. Null if not assigned.
           * @default null
           */
          user_id: string | null;
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
 * Type of APOLLO's APOLLO_UPDATE_ACCOUNT tool input.
 */
type APOLLO_UPDATE_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The unique Apollo identifier (ID) for the account to be updated. This ID can be retrieved using the 'Search for Accounts' endpoint.
   */
  account_id?: string;
  /**
   * Account Stage Id
   * @description The unique Apollo identifier (ID) for the new account stage (e.g., 'Prospecting', 'Negotiation'). This ID can be retrieved using the 'List Account Stages' endpoint.
   * @default null
   */
  account_stage_id: string | null;
  /**
   * Domain
   * @description The new primary domain for the account. Ensure the 'www.' prefix is excluded (e.g., 'apollo.io' instead of 'www.apollo.io').
   * @default null
   */
  domain: string | null;
  /**
   * Name
   * @description The new name for the account. This should be a human-readable name representing the organization.
   * @default null
   */
  name: string | null;
  /**
   * Owner Id
   * @description The unique identifier (ID) of the Apollo user to be assigned as the new owner of this account. This ID can be retrieved using the 'Get a List of Users' endpoint.
   * @default null
   */
  owner_id: string | null;
  /**
   * Phone
   * @description The new primary phone number for the account. Apollo will attempt to sanitize and standardize the provided phone number format.
   * @default null
   */
  phone: string | null;
  /**
   * Raw Address
   * @description The new corporate street address for the account. This can be a free-form string including details like street, city, state, and country.
   * @default null
   */
  raw_address: string | null;
};

/**
 * Type of APOLLO's APOLLO_UPDATE_ACCOUNT tool output.
 */
type APOLLO_UPDATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full, updated details of the account as returned by Apollo after the modification.
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
 * Type of APOLLO's APOLLO_UPDATE_CONTACT tool input.
 */
type APOLLO_UPDATE_CONTACT_INPUT = {
  /**
   * Account Id
   * @description The Apollo ID of the account to which the contact should be (re)assigned. If provided, this updates the contact's associated account.
   */
  account_id?: string;
  /**
   * Contact Id
   * @description The unique Apollo identifier for the contact to be updated. This ID can be obtained using the 'Search for Contacts' action.
   */
  contact_id?: string;
  /**
   * Contact Stage Id
   * @description The Apollo ID for the contact's new stage. This ID can be obtained using the 'List Contact Stages' action.
   */
  contact_stage_id?: string;
  /**
   * Corporate Phone
   * @description The contact's new work or office phone number.
   */
  corporate_phone?: string;
  /**
   * Direct Phone
   * @description The contact's new primary direct phone number.
   */
  direct_phone?: string;
  /**
   * Email
   * @description The contact's new primary email address.
   */
  email?: string;
  /**
   * First Name
   * @description The contact's new first name.
   */
  first_name?: string;
  /**
   * Home Phone
   * @description The contact's new home phone number.
   */
  home_phone?: string;
  /**
   * Label Names
   * @description The updated list of label names to associate with the contact. These labels help categorize contacts within your team's Apollo account.
   */
  label_names?: string[];
  /**
   * Last Name
   * @description The contact's new last name.
   */
  last_name?: string;
  /**
   * Mobile Phone
   * @description The contact's new mobile phone number.
   */
  mobile_phone?: string;
  /**
   * Organization Name
   * @description The new name of the company or organization the contact is associated with.
   */
  organization_name?: string;
  /**
   * Other Phone
   * @description An alternative or uncategorized new phone number for the contact.
   */
  other_phone?: string;
  /**
   * Present Raw Address
   * @description The contact's new personal location or address, provided as a single string.
   */
  present_raw_address?: string;
  /**
   * Title
   * @description The contact's new job title.
   */
  title?: string;
  /**
   * Website Url
   * @description The new corporate website URL for the contact's current employer.
   */
  website_url?: string;
};

/**
 * Type of APOLLO's APOLLO_UPDATE_CONTACT tool output.
 */
type APOLLO_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing all fields of the contact after the update, as returned by the Apollo API. This includes both updated and unchanged fields.
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
 * Type of APOLLO's APOLLO_UPDATE_CONTACT_OWNERSHIP tool input.
 */
type APOLLO_UPDATE_CONTACT_OWNERSHIP_INPUT = {
  /**
   * Contact Ids
   * @description Unique Apollo identifiers for existing contacts to update.
   */
  contact_ids?: string[];
  /**
   * Owner Id
   * @description Unique Apollo identifier for the user, part of your team's Apollo account, to become the new owner.
   */
  owner_id?: string;
};

/**
 * Type of APOLLO's APOLLO_UPDATE_CONTACT_OWNERSHIP tool output.
 */
type APOLLO_UPDATE_CONTACT_OWNERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description Details of contacts whose ownership was successfully updated.
       */
      contacts: {
          /**
           * Crm Owner Id
           * @description Identifier of the new owner in the connected CRM, if applicable; null if no CRM or not synced.
           * @default null
           */
          crm_owner_id: string | null;
          /**
           * Id
           * @description Unique Apollo identifier of the contact whose ownership was updated.
           */
          id: string;
          /**
           * Owner Id
           * @description Unique Apollo identifier of the new owner assigned.
           */
          owner_id: string;
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
 * Type of APOLLO's APOLLO_UPDATE_CONTACT_STAGE tool input.
 */
type APOLLO_UPDATE_CONTACT_STAGE_INPUT = {
  /**
   * Contact Ids
   * @description Unique identifiers for the contacts whose stage needs to be updated.
   */
  contact_ids?: string[];
  /**
   * Contact Stage Id
   * @description Unique identifier of the contact stage to assign to the contacts.
   */
  contact_stage_id?: string;
};

/**
 * Type of APOLLO's APOLLO_UPDATE_CONTACT_STAGE tool output.
 */
type APOLLO_UPDATE_CONTACT_STAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts whose stages were updated, including their details.
       * @default null
       */
      contacts: {
          /**
           * Contact Stage Id
           * @description Unique identifier of the contact's stage after the update.
           * @default null
           */
          contact_stage_id: string | null;
          /**
           * Email
           * @description Primary email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the contact.
           * @default null
           */
          id: string | null;
          /**
           * Last Name
           * @description Last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Name
           * @description Full name.
           * @default null
           */
          name: string | null;
          /**
           * Organization Name
           * @description Organization name.
           * @default null
           */
          organization_name: string | null;
          /**
           * Phone Numbers
           * @description Phone numbers.
           * @default null
           */
          phone_numbers: string[] | null;
          /**
           * Title
           * @description Job title.
           * @default null
           */
          title: string | null;
      }[] | null;
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
 * Type of APOLLO's APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE tool input.
 */
type APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact.
   */
  contact_id?: string;
  /**
   * Sequence Id
   * @description Unique identifier of the sequence.
   */
  sequence_id?: string;
  /**
   * Status
   * @description New status for the contact in the sequence. Note: 'active' status is not supported by this action.
   * @enum {string}
   */
  status?: "active" | "paused" | "finished_replied" | "finished_not_replied" | "bounced" | "unsubscribed";
};

/**
 * Type of APOLLO's APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE tool output.
 */
type APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contact objects affected by the status update.
       * @default null
       */
      contacts: {
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the contact.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Full name of the contact.
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Updated status of the contact within the sequence.
           * @default null
           */
          status: string | null;
      }[] | null;
      /**
       * Emailer Campaigns
       * @description List of sequence objects (referred to as 'emailer campaigns' by the Apollo API) affected.
       * @default null
       */
      emailer_campaigns: {
          /**
           * Active Contact Count
           * @description Total number of contacts currently active in this sequence.
           * @default null
           */
          active_contact_count: number | null;
          /**
           * Id
           * @description Unique identifier of the sequence.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Name of the sequence.
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Message
       * @description Informational message from the Apollo API regarding the operation's outcome.
       * @default null
       */
      message: string | null;
      /**
       * Num Contacts Affected
       * @description Total number of contacts whose status was successfully updated.
       * @default null
       */
      num_contacts_affected: number | null;
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
 * Type of APOLLO's APOLLO_UPDATE_DEALS tool input.
 */
type APOLLO_UPDATE_DEALS_INPUT = {
  /**
   * Account Id
   * @description The unique Apollo identifier of the account to be associated. Obtain this ID from account-related actions. Preserves current account if omitted.
   */
  account_id?: string;
  /**
   * Amount
   * @description The new monetary value of the deal (e.g., '50000'). Preserves current amount if omitted.
   */
  amount?: string;
  /**
   * Closed Date
   * @description The new estimated or actual close date (YYYY-MM-DD). Preserves current close date if omitted.
   */
  closed_date?: string;
  /**
   * Is Closed
   * @description Indicates if the deal is closed. `true` for closed, `false` for open. Preserves current status if omitted.
   */
  is_closed?: boolean;
  /**
   * Is Won
   * @description Indicates if the deal is won. `true` for won, `false` for lost/open. Preserves current status if omitted.
   */
  is_won?: boolean;
  /**
   * Name
   * @description The new human-readable name for the deal. Preserves current name if omitted.
   */
  name?: string;
  /**
   * Opportunity Id
   * @description The unique identifier of the Apollo opportunity (deal) to be updated.
   */
  opportunity_id?: string;
  /**
   * Opportunity Stage Id
   * @description The unique identifier for the new stage. Obtain this ID via 'List Deal Stages'. Preserves current stage if omitted.
   */
  opportunity_stage_id?: string;
  /**
   * Owner Id
   * @description The unique identifier of the Apollo user to be assigned as the new owner. Obtain this ID via 'List All Users'. Preserves current owner if omitted.
   */
  owner_id?: string;
  /**
   * Source
   * @description The new source from which this deal originated (e.g., 'Website', 'Referral'). Preserves current source if omitted.
   */
  source?: string;
};

/**
 * Type of APOLLO's APOLLO_UPDATE_DEALS tool output.
 */
type APOLLO_UPDATE_DEALS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the complete, updated details of the deal from the Apollo API.
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
 * Type map of all available tool input types for toolkit "APOLLO".
 */
export type APOLLO_TOOL_INPUTS = {
  ADD_CONTACTS_TO_SEQUENCE: APOLLO_ADD_CONTACTS_TO_SEQUENCE_INPUT
  BULK_ORGANIZATION_ENRICHMENT: APOLLO_BULK_ORGANIZATION_ENRICHMENT_INPUT
  BULK_PEOPLE_ENRICHMENT: APOLLO_BULK_PEOPLE_ENRICHMENT_INPUT
  BULK_UPDATE_ACCOUNT_STAGE: APOLLO_BULK_UPDATE_ACCOUNT_STAGE_INPUT
  CREATE_ACCOUNT: APOLLO_CREATE_ACCOUNT_INPUT
  CREATE_CONTACT: APOLLO_CREATE_CONTACT_INPUT
  CREATE_DEAL: APOLLO_CREATE_DEAL_INPUT
  CREATE_TASK: APOLLO_CREATE_TASK_INPUT
  GET_LABELS: APOLLO_GET_LABELS_INPUT
  GET_OPPORTUNITY_STAGES: APOLLO_GET_OPPORTUNITY_STAGES_INPUT
  GET_ORGANIZATION_JOB_POSTINGS: APOLLO_GET_ORGANIZATION_JOB_POSTINGS_INPUT
  GET_TYPED_CUSTOM_FIELDS: APOLLO_GET_TYPED_CUSTOM_FIELDS_INPUT
  LIST_ACCOUNT_STAGES: APOLLO_LIST_ACCOUNT_STAGES_INPUT
  LIST_CONTACT_STAGES: APOLLO_LIST_CONTACT_STAGES_INPUT
  LIST_DEALS: APOLLO_LIST_DEALS_INPUT
  LIST_EMAIL_ACCOUNTS: APOLLO_LIST_EMAIL_ACCOUNTS_INPUT
  LIST_USERS: APOLLO_LIST_USERS_INPUT
  ORGANIZATION_ENRICHMENT: APOLLO_ORGANIZATION_ENRICHMENT_INPUT
  ORGANIZATION_SEARCH: APOLLO_ORGANIZATION_SEARCH_INPUT
  PEOPLE_ENRICHMENT: APOLLO_PEOPLE_ENRICHMENT_INPUT
  PEOPLE_SEARCH: APOLLO_PEOPLE_SEARCH_INPUT
  SEARCH_ACCOUNTS: APOLLO_SEARCH_ACCOUNTS_INPUT
  SEARCH_CONTACTS: APOLLO_SEARCH_CONTACTS_INPUT
  SEARCH_SEQUENCES: APOLLO_SEARCH_SEQUENCES_INPUT
  SEARCH_TASKS: APOLLO_SEARCH_TASKS_INPUT
  UPDATE_ACCOUNT: APOLLO_UPDATE_ACCOUNT_INPUT
  UPDATE_CONTACT: APOLLO_UPDATE_CONTACT_INPUT
  UPDATE_CONTACT_OWNERSHIP: APOLLO_UPDATE_CONTACT_OWNERSHIP_INPUT
  UPDATE_CONTACT_STAGE: APOLLO_UPDATE_CONTACT_STAGE_INPUT
  UPDATE_CONTACT_STATUS_IN_SEQUENCE: APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE_INPUT
  UPDATE_DEALS: APOLLO_UPDATE_DEALS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APOLLO".
 */
export type APOLLO_TOOL_OUTPUTS = {
  ADD_CONTACTS_TO_SEQUENCE: APOLLO_ADD_CONTACTS_TO_SEQUENCE_OUTPUT
  BULK_ORGANIZATION_ENRICHMENT: APOLLO_BULK_ORGANIZATION_ENRICHMENT_OUTPUT
  BULK_PEOPLE_ENRICHMENT: APOLLO_BULK_PEOPLE_ENRICHMENT_OUTPUT
  BULK_UPDATE_ACCOUNT_STAGE: APOLLO_BULK_UPDATE_ACCOUNT_STAGE_OUTPUT
  CREATE_ACCOUNT: APOLLO_CREATE_ACCOUNT_OUTPUT
  CREATE_CONTACT: APOLLO_CREATE_CONTACT_OUTPUT
  CREATE_DEAL: APOLLO_CREATE_DEAL_OUTPUT
  CREATE_TASK: APOLLO_CREATE_TASK_OUTPUT
  GET_LABELS: APOLLO_GET_LABELS_OUTPUT
  GET_OPPORTUNITY_STAGES: APOLLO_GET_OPPORTUNITY_STAGES_OUTPUT
  GET_ORGANIZATION_JOB_POSTINGS: APOLLO_GET_ORGANIZATION_JOB_POSTINGS_OUTPUT
  GET_TYPED_CUSTOM_FIELDS: APOLLO_GET_TYPED_CUSTOM_FIELDS_OUTPUT
  LIST_ACCOUNT_STAGES: APOLLO_LIST_ACCOUNT_STAGES_OUTPUT
  LIST_CONTACT_STAGES: APOLLO_LIST_CONTACT_STAGES_OUTPUT
  LIST_DEALS: APOLLO_LIST_DEALS_OUTPUT
  LIST_EMAIL_ACCOUNTS: APOLLO_LIST_EMAIL_ACCOUNTS_OUTPUT
  LIST_USERS: APOLLO_LIST_USERS_OUTPUT
  ORGANIZATION_ENRICHMENT: APOLLO_ORGANIZATION_ENRICHMENT_OUTPUT
  ORGANIZATION_SEARCH: APOLLO_ORGANIZATION_SEARCH_OUTPUT
  PEOPLE_ENRICHMENT: APOLLO_PEOPLE_ENRICHMENT_OUTPUT
  PEOPLE_SEARCH: APOLLO_PEOPLE_SEARCH_OUTPUT
  SEARCH_ACCOUNTS: APOLLO_SEARCH_ACCOUNTS_OUTPUT
  SEARCH_CONTACTS: APOLLO_SEARCH_CONTACTS_OUTPUT
  SEARCH_SEQUENCES: APOLLO_SEARCH_SEQUENCES_OUTPUT
  SEARCH_TASKS: APOLLO_SEARCH_TASKS_OUTPUT
  UPDATE_ACCOUNT: APOLLO_UPDATE_ACCOUNT_OUTPUT
  UPDATE_CONTACT: APOLLO_UPDATE_CONTACT_OUTPUT
  UPDATE_CONTACT_OWNERSHIP: APOLLO_UPDATE_CONTACT_OWNERSHIP_OUTPUT
  UPDATE_CONTACT_STAGE: APOLLO_UPDATE_CONTACT_STAGE_OUTPUT
  UPDATE_CONTACT_STATUS_IN_SEQUENCE: APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE_OUTPUT
  UPDATE_DEALS: APOLLO_UPDATE_DEALS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APOLLO toolkit.
 */
export const APOLLO = {
  slug: "apollo",
  tools: {
    /**
     * Adds contacts to a specified apollo email sequence by initiating an asynchronous background job and returning its details.
     */
    ADD_CONTACTS_TO_SEQUENCE: "APOLLO_ADD_CONTACTS_TO_SEQUENCE",
    /**
     * Enriches data for up to 10 organizations simultaneously by providing a list of their base company domains (e.g., 'apollo.io', not 'www.apollo.io').
     */
    BULK_ORGANIZATION_ENRICHMENT: "APOLLO_BULK_ORGANIZATION_ENRICHMENT",
    /**
     * Use to enrich multiple person profiles simultaneously with comprehensive data from apollo's database.
     */
    BULK_PEOPLE_ENRICHMENT: "APOLLO_BULK_PEOPLE_ENRICHMENT",
    /**
     * Bulk updates the stage for specified existing apollo.io accounts, moving them to a valid new account stage.
     */
    BULK_UPDATE_ACCOUNT_STAGE: "APOLLO_BULK_UPDATE_ACCOUNT_STAGE",
    /**
     * Creates a new account in apollo.io; a new record is created even if a similar account exists, and provided `owner id` or `account stage id` must be valid existing ids.
     */
    CREATE_ACCOUNT: "APOLLO_CREATE_ACCOUNT",
    /**
     * Creates a new contact in apollo.io; use `account id` to link to an organization and `contact stage id` for sales stage, noting that apollo does not perform automatic deduplication.
     */
    CREATE_CONTACT: "APOLLO_CREATE_CONTACT",
    /**
     * Creates a new sales opportunity (deal) in apollo.io; all provided ids (`owner id`, `account id`, `opportunity stage id`) must be valid existing apollo identifiers.
     */
    CREATE_DEAL: "APOLLO_CREATE_DEAL",
    /**
     * Creates a distinct apollo.io task for each contact id in contact ids, assigning them to user id; this action is not for free plan users and repeated calls create duplicate tasks.
     */
    CREATE_TASK: "APOLLO_CREATE_TASK",
    /**
     * Retrieves all labels from apollo.io, used for organizing contacts and accounts.
     */
    GET_LABELS: "APOLLO_GET_LABELS",
    /**
     * Retrieves all configured opportunity (deal) stages from the apollo.io account.
     */
    GET_OPPORTUNITY_STAGES: "APOLLO_GET_OPPORTUNITY_STAGES",
    /**
     * Retrieves paginated job postings for a specified organization by its id, optionally filtering by domain; ensure `organization id` is a valid identifier.
     */
    GET_ORGANIZATION_JOB_POSTINGS: "APOLLO_GET_ORGANIZATION_JOB_POSTINGS",
    /**
     * Retrieves all typed custom field definitions available in the apollo.io instance, detailing their types and configurations.
     */
    GET_TYPED_CUSTOM_FIELDS: "APOLLO_GET_TYPED_CUSTOM_FIELDS",
    /**
     * Retrieves all available apollo.io account stages, each including its unique id and name.
     */
    LIST_ACCOUNT_STAGES: "APOLLO_LIST_ACCOUNT_STAGES",
    /**
     * Retrieves all available contact stages from an apollo account, including their unique ids and names.
     */
    LIST_CONTACT_STAGES: "APOLLO_LIST_CONTACT_STAGES",
    /**
     * Retrieves a list of deals from apollo, using apollo's default sort order if 'sort by field' is omitted.
     */
    LIST_DEALS: "APOLLO_LIST_DEALS",
    /**
     * Retrieves all email accounts and their details for the authenticated user; takes no parameters.
     */
    LIST_EMAIL_ACCOUNTS: "APOLLO_LIST_EMAIL_ACCOUNTS",
    /**
     * Retrieves a list of all users (teammates) associated with the apollo account, supporting pagination via `page` and `per page` parameters.
     */
    LIST_USERS: "APOLLO_LIST_USERS",
    /**
     * Fetches comprehensive organization enrichment data from apollo.io for a given company domain; results are most meaningful if the company exists in apollo's database.
     */
    ORGANIZATION_ENRICHMENT: "APOLLO_ORGANIZATION_ENRICHMENT",
    /**
     * Searches apollo's database for organizations using various filters; consumes credits (unavailable on free plans), retrieves a maximum of 50,000 records, and uses `page` (1-500) and `per page` (1-100) for pagination.
     */
    ORGANIZATION_SEARCH: "APOLLO_ORGANIZATION_SEARCH",
    /**
     * Enriches and retrieves information for a person from apollo.io, requiring one of: `email`, `hashed email`, `id`, `linkedin url`, or (`first name` and `last name` with `organization name` or `domain`) for matching; `webhook url` must be provided if `reveal phone number` is true.
     */
    PEOPLE_ENRICHMENT: "APOLLO_PEOPLE_ENRICHMENT",
    /**
     * Searches apollo's contact database for people using various filters; results are limited to 50,000 records and this action does not enrich contact data.
     */
    PEOPLE_SEARCH: "APOLLO_PEOPLE_SEARCH",
    /**
     * Searches for accounts within your existing apollo.io database using various criteria; requires a paid plan and is limited to 50,000 records.
     */
    SEARCH_ACCOUNTS: "APOLLO_SEARCH_ACCOUNTS",
    /**
     * Searches apollo contacts using keywords, stage ids (from 'list contact stages' action), or sorting (max 50,000 records; `sort ascending` requires `sort by field`).
     */
    SEARCH_CONTACTS: "APOLLO_SEARCH_CONTACTS",
    /**
     * Searches for sequences (e.g., automated email campaigns) in apollo.io.
     */
    SEARCH_SEQUENCES: "APOLLO_SEARCH_SEQUENCES",
    /**
     * Searches for tasks in apollo.io using filters like keywords, date ranges (due, created, updated), priorities, types, assigned users, associated contacts/accounts, supporting sorting and pagination.
     */
    SEARCH_TASKS: "APOLLO_SEARCH_TASKS",
    /**
     * Updates specified attributes of an existing account in apollo.io.
     */
    UPDATE_ACCOUNT: "APOLLO_UPDATE_ACCOUNT",
    /**
     * Updates specified attributes of an existing apollo.io contact, identified by `contact id`; requires at least one other attribute to be provided for modification.
     */
    UPDATE_CONTACT: "APOLLO_UPDATE_CONTACT",
    /**
     * Updates the ownership of specified apollo contacts to a given apollo user, who must be part of the same team.
     */
    UPDATE_CONTACT_OWNERSHIP: "APOLLO_UPDATE_CONTACT_OWNERSHIP",
    /**
     * Updates the stage for one or more existing contacts in apollo.io to a new valid contact stage, useful for managing sales funnel progression.
     */
    UPDATE_CONTACT_STAGE: "APOLLO_UPDATE_CONTACT_STAGE",
    /**
     * Updates a contact's status within a designated apollo sequence, but cannot set the status to 'active'.
     */
    UPDATE_CONTACT_STATUS_IN_SEQUENCE: "APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE",
    /**
     * Updates specified fields of an existing apollo.io deal (opportunity), requiring a valid `opportunity id`.
     */
    UPDATE_DEALS: "APOLLO_UPDATE_DEALS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APOLLO".
 */
export type APOLLO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APOLLO".
 */
export type APOLLO_TRIGGER_EVENTS = {}
