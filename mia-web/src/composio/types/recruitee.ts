// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RECRUITEE's RECRUITEE_CREATE_CANDIDATE tool input.
 */
type RECRUITEE_CREATE_CANDIDATE_INPUT = {
  /**
   * Cover Letter
   * @description Cover letter text for the candidate.
   * @default null
   */
  cover_letter: string | null;
  /**
   * Custom Fields
   * @description Custom fields for the candidate as defined by the company.
   * @default null
   */
  custom_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * Format: email
   * @default null
   */
  email: unknown;
  /**
   * Name
   * @description Full name of the candidate.
   */
  name?: string;
  /**
   * Offers
   * @description List of offer IDs to associate with the candidate.
   * @default null
   */
  offers: number[] | null;
  /**
   * Phone
   * @description Phone number of the candidate.
   * @default null
   */
  phone: string | null;
  /**
   * Photo
   * Format: uri
   * @default null
   */
  photo: unknown;
  /**
   * Resume
   * Format: uri
   * @default null
   */
  resume: unknown;
  /**
   * Social Links
   * @default null
   */
  social_links: unknown[] | null;
  /**
   * Source
   * @description The source from which the candidate was obtained.
   * @default null
   */
  source: string | null;
  /**
   * Tags
   * @description List of tags associated with the candidate.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_CREATE_CANDIDATE tool output.
 */
type RECRUITEE_CREATE_CANDIDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Candidate */
      candidate: {
          /**
           * Cover Letter
           * @description Cover letter text.
           * @default null
           */
          cover_letter: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the candidate was created.
           */
          created_at: unknown;
          /**
           * Custom Fields
           * @description Custom fields defined by the company for the candidate.
           * @default null
           */
          custom_fields: unknown;
          /**
           * Email
           * @description Email address of the candidate.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the candidate.
           */
          id: number;
          /**
           * Name
           * @description Full name of the candidate.
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the candidate.
           * @default null
           */
          phone: string | null;
          /**
           * Photo
           * @description URL of the candidate's photo.
           * @default null
           */
          photo: string | null;
          /**
           * Resume
           * @description URL of the candidate's resume.
           * @default null
           */
          resume: string | null;
          /**
           * Social Links
           * @description URLs of the candidate's social profiles.
           * @default null
           */
          social_links: string[] | null;
          /**
           * Source
           * @description Source from which the candidate was obtained.
           * @default null
           */
          source: string | null;
          /**
           * Tags
           * @description Tags associated with the candidate.
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the candidate was last updated.
           */
          updated_at: unknown;
      };
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
 * Type of RECRUITEE's RECRUITEE_CREATE_NOTE tool input.
 */
type RECRUITEE_CREATE_NOTE_INPUT = {
  /**
   * Candidate Id
   * @description Unique identifier of the candidate to attach the note to.
   */
  candidate_id?: string;
  /**
   * Note
   * @description The note object containing content and optional visibility.
   */
  note?: {
      /**
       * Body
       * @description The content of the note.
       */
      body: string;
      /**
       * Visibility
       * @description Visibility settings for a note.
       * @default null
       */
      visibility: {
          /**
           * Level
           * @description Visibility level of the note. 'public' is visible to anyone with candidate access; 'private' is restricted.
           * @default public
           * @enum {string}
           */
          level: "public" | "private";
      } | null;
  };
};

/**
 * Type of RECRUITEE's RECRUITEE_CREATE_NOTE tool output.
 */
type RECRUITEE_CREATE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Note
       * @description The created note object.
       */
      note: {
          /**
           * Body
           * @description Content of the note.
           */
          body: string;
          /**
           * Created At
           * @description Timestamp when the note was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the created note.
           */
          id: number;
          /**
           * Updated At
           * @description Timestamp when the note was last updated.
           */
          updated_at: string;
          /**
           * Visibility
           * @description Visibility settings of the note.
           */
          visibility: {
              /**
               * Level
               * @description Visibility level of the note. 'public' is visible to anyone with candidate access; 'private' is restricted.
               * @default public
               * @enum {string}
               */
              level: "public" | "private";
          };
      };
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
 * Type of RECRUITEE's RECRUITEE_CREATE_OFFER tool input.
 */
type RECRUITEE_CREATE_OFFER_INPUT = {
  /**
   * Offer
   * @description The offer object containing details for the new job offer.
   */
  offer?: {
      /**
       * Description
       * @description Detailed description of the job offer.
       * @default null
       */
      description: string | null;
      /**
       * Kind
       * @description Type of the offer: 'job' for standard positions or 'talent_pool' for talent pools.
       * @default null
       * @enum {string|null}
       */
      kind: "job" | "talent_pool" | null;
      /**
       * Options Cover Letter
       * @description Cover letter field setting in application form.
       * @default null
       * @enum {string|null}
       */
      options_cover_letter: "required" | "optional" | "off" | null;
      /**
       * Options Cv
       * @description CV upload field setting in application form.
       * @default null
       * @enum {string|null}
       */
      options_cv: "required" | "optional" | "off" | null;
      /**
       * Options Phone
       * @description Phone field setting in application form.
       * @default null
       * @enum {string|null}
       */
      options_phone: "required" | "optional" | "off" | null;
      /**
       * Options Photo
       * @description Photo field setting in application form.
       * @default null
       * @enum {string|null}
       */
      options_photo: "required" | "optional" | "off" | null;
      /**
       * Status
       * @description Status of the job offer.
       * @default null
       * @enum {string|null}
       */
      status: "draft" | "internal" | "published" | "closed" | "archived" | null;
      /**
       * Title
       * @description The title of the job offer.
       */
      title: string;
      /**
       * Visibility Options
       * @description Options for job visibility.
       * @default null
       */
      visibility_options: string[] | null;
  };
};

/**
 * Type of RECRUITEE's RECRUITEE_CREATE_OFFER tool output.
 */
type RECRUITEE_CREATE_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created offer.
       */
      id: number;
      /**
       * Kind
       * @description Type of the offer.
       */
      kind: string;
      /**
       * Options Cover Letter
       * @description Cover letter field setting in application form.
       */
      options_cover_letter: string;
      /**
       * Options Cv
       * @description CV upload field setting in application form.
       */
      options_cv: string;
      /**
       * Options Phone
       * @description Phone field setting in application form.
       */
      options_phone: string;
      /**
       * Options Photo
       * @description Photo field setting in application form.
       */
      options_photo: string;
      /**
       * Slug
       * @description URL-friendly slug generated from the offer title.
       */
      slug: string;
      /**
       * Status
       * @description Status of the job offer.
       */
      status: string;
      /**
       * Title
       * @description The title of the job offer.
       */
      title: string;
      /**
       * Visibility Options
       * @description Options for job visibility.
       */
      visibility_options: string[];
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
 * Type of RECRUITEE's RECRUITEE_DELETE_CANDIDATE tool input.
 */
type RECRUITEE_DELETE_CANDIDATE_INPUT = {
  /**
   * Candidate Id
   * @description Unique identifier of the candidate to delete.
   */
  candidate_id?: number;
};

/**
 * Type of RECRUITEE's RECRUITEE_DELETE_CANDIDATE tool output.
 */
type RECRUITEE_DELETE_CANDIDATE_OUTPUT = {
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
 * Type of RECRUITEE's RECRUITEE_DELETE_TAG tool input.
 */
type RECRUITEE_DELETE_TAG_INPUT = {
  /**
   * Tag Id
   * @description Unique identifier of the tag to delete.
   */
  tag_id?: number;
};

/**
 * Type of RECRUITEE's RECRUITEE_DELETE_TAG tool output.
 */
type RECRUITEE_DELETE_TAG_OUTPUT = {
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
 * Type of RECRUITEE's RECRUITEE_GET_CANDIDATE tool input.
 */
type RECRUITEE_GET_CANDIDATE_INPUT = {
  /**
   * Candidate Id
   * @description Unique identifier of the candidate to retrieve.
   */
  candidate_id?: number;
  /**
   * Company Id
   * @description Company ID or subdomain. Can be either the numerical company ID or the company subdomain. If not provided, uses the subdomain from the connection.
   * @default null
   */
  company_id: number | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_CANDIDATE tool output.
 */
type RECRUITEE_GET_CANDIDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Candidate
       * @description Detailed information about a candidate.
       */
      candidate: {
          /**
           * Cover Letter
           * @description Cover letter text of the candidate.
           * @default null
           */
          cover_letter: string | null;
          /**
           * Created At
           * @description Timestamp when the candidate was created.
           */
          created_at: string;
          /**
           * Custom Fields
           * @description Custom fields for the candidate as defined by the company.
           * @default null
           */
          custom_fields: {
              [key: string]: string | number | boolean | unknown[] | {
                  [key: string]: unknown;
              };
          } | null;
          /**
           * Emails
           * @description List of candidate email addresses.
           * @default null
           */
          emails: string[] | null;
          /**
           * Id
           * @description Unique identifier of the candidate.
           */
          id: number;
          /**
           * Name
           * @description Full name of the candidate.
           */
          name: string;
          /**
           * Offers
           * @description Offer IDs associated with the candidate.
           * @default null
           */
          offers: number[] | null;
          /**
           * Phones
           * @description List of candidate phone numbers.
           * @default null
           */
          phones: string[] | null;
          /**
           * Photo
           * @description URL of the candidate's photo.
           * @default null
           */
          photo: string | null;
          /**
           * Resume
           * @description URL of the candidate's resume.
           * @default null
           */
          resume: string | null;
          /**
           * Social Links
           * @description Social profile URLs of the candidate.
           * @default null
           */
          social_links: string[] | null;
          /**
           * Source
           * @description Source from which the candidate was obtained.
           * @default null
           */
          source: string | null;
          /**
           * Tags
           * @description Tags associated with the candidate.
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * @description Timestamp when the candidate was last updated.
           */
          updated_at: string;
      };
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
 * Type of RECRUITEE's RECRUITEE_GET_CANDIDATES tool input.
 */
type RECRUITEE_GET_CANDIDATES_INPUT = {
  /**
   * Company Id
   * @description Company ID or subdomain. Can be either the numerical company ID or the company subdomain. If not provided, uses the subdomain from the connection.
   * @default null
   */
  company_id: number | null;
  /**
   * Created After
   * Format: date-time
   * @description Return candidates created after this ISO 8601 timestamp.
   * @default null
   */
  createdAfter: unknown;
  /**
   * Deleted
   * @description If true, only deleted candidates are returned.
   * @default null
   */
  deleted: boolean | null;
  /**
   * Disqualified
   * @description If true, only disqualified candidates are returned.
   * @default null
   */
  disqualified: boolean | null;
  /**
   * Ids
   * @description List of candidate IDs to retrieve.
   * @default null
   */
  ids: number[] | null;
  /**
   * Limit
   * @description Maximum number of candidates to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offer Id
   * @description Filter candidates by specific offer ID.
   * @default null
   */
  offerId: number | null;
  /**
   * Offset
   * @description Number of candidates to skip before returning results (pagination offset).
   * @default null
   */
  offset: number | null;
  /**
   * Qualified
   * @description If true, only qualified candidates are returned.
   * @default null
   */
  qualified: boolean | null;
  /**
   * Query
   * @description Search term to filter candidates by name or offer.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description Sort by date or by last message.
   * @default null
   * @enum {string|null}
   */
  sort: "by_date" | "by_last_message" | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_CANDIDATES tool output.
 */
type RECRUITEE_GET_CANDIDATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Candidates
       * @description List of candidates.
       */
      candidates: {
          /**
           * Cover Letter
           * @description Cover letter text of the candidate.
           * @default null
           */
          cover_letter: string | null;
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp when the candidate was created.
           */
          created_at: unknown;
          /**
           * Custom Fields
           * @description Custom fields defined for the candidate.
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Emails
           * @description Email addresses of the candidate.
           * @default null
           */
          emails: string[] | null;
          /**
           * Id
           * @description Candidate unique identifier.
           */
          id: number;
          /**
           * Name
           * @description Full name of the candidate.
           * @default null
           */
          name: string | null;
          /**
           * Offers
           * @description Offer IDs associated with the candidate.
           * @default null
           */
          offers: number[] | null;
          /**
           * Phones
           * @description Phone numbers of the candidate.
           * @default null
           */
          phones: string[] | null;
          /**
           * Photo
           * @description URL of the candidate's photo.
           * @default null
           */
          photo: string | null;
          /**
           * Resume
           * @description URL of the candidate's resume.
           * @default null
           */
          resume: string | null;
          /**
           * Social Links
           * @description List of social profile URLs.
           * @default null
           */
          social_links: string[] | null;
          /**
           * Source
           * @description Source from which the candidate was obtained.
           * @default null
           */
          source: string | null;
          /**
           * Tags
           * @description Tags associated with the candidate.
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 timestamp when the candidate was last updated.
           */
          updated_at: unknown;
      }[];
      /**
       * Total
       * @description Total number of candidates available.
       * @default null
       */
      total: number | null;
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
 * Type of RECRUITEE's RECRUITEE_GET_COMPANY_ID tool input.
 */
type RECRUITEE_GET_COMPANY_ID_INPUT = object;

/**
 * Type of RECRUITEE's RECRUITEE_GET_COMPANY_ID tool output.
 */
type RECRUITEE_GET_COMPANY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Detailed information about the company.
       */
      company: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the company was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the company.
           */
          id: number;
          /**
           * Name
           * @description Name of the company.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the company was last updated.
           */
          updated_at: string;
      };
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
 * Type of RECRUITEE's RECRUITEE_GET_COMPANY_OFFERS_PUBLIC tool input.
 */
type RECRUITEE_GET_COMPANY_OFFERS_PUBLIC_INPUT = object;

/**
 * Type of RECRUITEE's RECRUITEE_GET_COMPANY_OFFERS_PUBLIC tool output.
 */
type RECRUITEE_GET_COMPANY_OFFERS_PUBLIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Offers
       * @description List of published company job offers.
       */
      offers: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the offer was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique identifier for the offer.
           */
          id: number;
          /**
           * Kind
           * @description Type of the offer ('job' or 'talent_pool').
           * @enum {string}
           */
          kind: "job" | "talent_pool";
          /**
           * Location
           * @description Location details of the job offer, if provided.
           * @default null
           */
          location: string | null;
          /**
           * Slug
           * @description URL-friendly version of the title.
           */
          slug: string;
          /**
           * Status
           * @description Current status of the offer.
           * @enum {string}
           */
          status: "draft" | "internal" | "published" | "closed" | "archived";
          /**
           * Title
           * @description Title of the job offer.
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the offer was last updated.
           * @default null
           */
          updated_at: string | null;
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
 * Type of RECRUITEE's RECRUITEE_GET_COMPANY_OFFER_PUBLIC tool input.
 */
type RECRUITEE_GET_COMPANY_OFFER_PUBLIC_INPUT = {
  /**
   * Identifier
   * @description Offer ID or slug, e.g., '12345' or 'software-engineer'.
   */
  identifier?: string;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_COMPANY_OFFER_PUBLIC tool output.
 */
type RECRUITEE_GET_COMPANY_OFFER_PUBLIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Benefits
       * @description List of offered benefits.
       */
      benefits?: string[];
      /**
       * Department
       * @description Department name for the job offer.
       * @default null
       */
      department: string | null;
      /**
       * Description
       * @description Detailed job description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the job offer.
       */
      id: number;
      /**
       * Locations
       * @description List of locations where the job is available.
       */
      locations?: string[];
      /**
       * Published At
       * @description Offer publish date-time in ISO 8601 format.
       * @default null
       */
      published_at: string | null;
      /**
       * Requirements
       * @description List of job requirements.
       */
      requirements?: string[];
      /**
       * Slug
       * @description URL-friendly slug for the job offer.
       */
      slug: string;
      /**
       * Title
       * @description Title of the job offer.
       */
      title: string;
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
 * Type of RECRUITEE's RECRUITEE_GET_DEPARTMENTS tool input.
 */
type RECRUITEE_GET_DEPARTMENTS_INPUT = object;

/**
 * Type of RECRUITEE's RECRUITEE_GET_DEPARTMENTS tool output.
 */
type RECRUITEE_GET_DEPARTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Departments
       * @description List of company departments.
       */
      departments: {
          /**
           * Id
           * @description Unique identifier of the department.
           */
          id: number;
          /**
           * Name
           * @description Name of the department.
           */
          name: string;
          /**
           * Offers Count
           * @description Number of offers assigned to the department.
           */
          offers_count: number;
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
 * Type of RECRUITEE's RECRUITEE_GET_LOCATIONS tool input.
 */
type RECRUITEE_GET_LOCATIONS_INPUT = object;

/**
 * Type of RECRUITEE's RECRUITEE_GET_LOCATIONS tool output.
 */
type RECRUITEE_GET_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of company locations.
       */
      locations: {
          /**
           * Active Offers Count
           * @description Number of offers the location is assigned to.
           * @default 0
           */
          active_offers_count: number | null;
          /**
           * Active Requisitions Count
           * @description Number of requisitions the location is assigned to.
           * @default 0
           */
          active_requisitions_count: number | null;
          /**
           * Archived At
           * @description ISO 8601 timestamp when archived.
           * @default null
           */
          archived_at: string | null;
          /**
           * City
           * @description City.
           */
          city: string;
          /**
           * Country Code
           * @description ISO 3166 country code.
           */
          country_code: string;
          /**
           * Created At
           * @description ISO 8601 timestamp of creation.
           */
          created_at: string;
          /**
           * Full Address
           * @description One line full address (country, state, city, postal code, street).
           */
          full_address: string;
          /**
           * Id
           * @description Unique location ID - used in job offers to refer to a correct location.
           */
          id: number;
          /**
           * Is Deletable
           * @description Indicates if the location can be deleted.
           * @default true
           */
          is_deletable: boolean | null;
          /**
           * Lang Code
           * @description Default language code of the location.
           */
          lang_code: string;
          /**
           * Name
           * @description Location name.
           */
          name: string;
          /**
           * Postal Code
           * @description Postal code.
           * @default null
           */
          postal_code: string | null;
          /**
           * State Code
           * @description State code.
           * @default null
           */
          state_code: string | null;
          /**
           * State Name
           * @description State name.
           * @default null
           */
          state_name: string | null;
          /**
           * Street
           * @description Street address.
           * @default null
           */
          street: string | null;
          /**
           * Translations
           * @description List of objects containing translation fields and values.
           */
          translations?: {
              /**
               * City
               * @description Translated city name.
               * @default null
               */
              city: string | null;
              /**
               * Full Address
               * @description Translated full address.
               * @default null
               */
              full_address: string | null;
              /**
               * Lang Code
               * @description Language code of the translation.
               */
              lang_code: string;
              /**
               * Name
               * @description Translated location name.
               * @default null
               */
              name: string | null;
              /**
               * Postal Code
               * @description Translated postal code.
               * @default null
               */
              postal_code: string | null;
              /**
               * State Code
               * @description Translated state code.
               * @default null
               */
              state_code: string | null;
              /**
               * State Name
               * @description Translated state name.
               * @default null
               */
              state_name: string | null;
              /**
               * Street
               * @description Translated street address.
               * @default null
               */
              street: string | null;
          }[] | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated.
           * @default null
           */
          updated_at: string | null;
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
 * Type of RECRUITEE's RECRUITEE_GET_NOTES tool input.
 */
type RECRUITEE_GET_NOTES_INPUT = {
  /**
   * Candidate Id
   * @description Unique identifier of the candidate.
   */
  candidate_id?: number;
  /**
   * Limit
   * @description Maximum number of notes to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of notes to skip.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_NOTES tool output.
 */
type RECRUITEE_GET_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Notes
       * @description List of note objects.
       */
      notes: {
          /**
           * NoteAdmin
           * @description Admin user object for a note.
           * @default null
           */
          admin: {
              /**
               * Email
               * @description Admin user's email address.
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description Admin user's first name.
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier of the admin user.
               */
              id: number;
              /**
               * Last Name
               * @description Admin user's last name.
               * @default null
               */
              last_name: string | null;
          } | null;
          /**
           * Admin Id
           * @description ID of the admin who created the note.
           * @default null
           */
          admin_id: number | null;
          /**
           * Attachments
           * @description List of attachments.
           */
          attachments?: {
              /**
               * Created At
               * @description ISO 8601 timestamp when the attachment was created.
               */
              created_at: string;
              /**
               * Filename
               * @description Name of the attachment file.
               */
              filename: string;
              /**
               * Id
               * @description Unique identifier of the attachment.
               */
              id: number;
              /**
               * Updated At
               * @description ISO 8601 timestamp when the attachment was last updated.
               */
              updated_at: string;
              /**
               * Url
               * @description Download URL of the attachment.
               */
              url: string;
          }[];
          /**
           * Body Json
           * @description JSON representation of the note body.
           * @default null
           */
          body_json: {
              [key: string]: unknown;
          } | null;
          /**
           * Candidate Id
           * @description ID of the associated candidate.
           * @default null
           */
          candidate_id: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the note was created.
           */
          created_at: string;
          /**
           * NoteGuest
           * @description Guest user object for a note.
           * @default null
           */
          guest: {
              /**
               * Email
               * @description Guest user's email address.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique identifier of the guest user.
               */
              id: number;
              /**
               * Name
               * @description Guest user's name.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Guest Id
           * @description ID of the guest who created the note.
           * @default null
           */
          guest_id: number | null;
          /**
           * Reply To Id
           * @description ID of the note this one replies to.
           * @default null
           */
          reply_to_id: number | null;
          /**
           * Triggered
           * @description Whether the note was triggered by an event.
           * @default null
           */
          triggered: boolean | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the note was last updated.
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
 * Type of RECRUITEE's RECRUITEE_GET_OFFER tool input.
 */
type RECRUITEE_GET_OFFER_INPUT = {
  /**
   * Offer Id
   * @description ID of the offer to retrieve.
   */
  offer_id?: number;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_OFFER tool output.
 */
type RECRUITEE_GET_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description Attachments linked to the offer.
       */
      attachments?: {
          /**
           * Filename
           * @description Uploaded filename.
           */
          filename: string;
          /**
           * Id
           * @description Unique attachment ID.
           */
          id: number;
          /**
           * Url
           * @description Download URL of the attachment.
           */
          url: string;
      }[];
      /**
       * Created At
       * @description ISO 8601 datetime when the offer was created.
       */
      created_at: string;
      /**
       * Custom Fields
       * @description Custom fields for the offer.
       */
      custom_fields?: {
          /**
           * Field Key
           * @description Custom field identifier key.
           */
          field_key: string;
          /**
           * Value
           * @description Value of the custom field.
           */
          value: unknown;
      }[];
      /**
       * Department Id
       * @description Department ID this offer belongs to.
       * @default null
       */
      department_id: number | null;
      /**
       * Description
       * @description Detailed description of the job offer.
       * @default null
       */
      description: string | null;
      /**
       * Employment Types
       * @description List of employment types for this offer.
       */
      employment_types?: string[];
      /**
       * Expires At
       * @description ISO 8601 datetime when the offer expires.
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description Unique identifier of the offer.
       */
      id: number;
      /**
       * Kind
       * @description Type of the offer, e.g., 'job' or 'talent_pool'.
       * @default null
       */
      kind: string | null;
      /**
       * Locations
       * @description List of locations for this offer.
       */
      locations?: string[];
      /**
       * Options Cover Letter
       * @description Cover letter requirement setting in application form.
       * @default null
       */
      options_cover_letter: string | null;
      /**
       * Options Cv
       * @description CV requirement setting in application form.
       * @default null
       */
      options_cv: string | null;
      /**
       * Options Phone
       * @description Phone requirement setting in application form.
       * @default null
       */
      options_phone: string | null;
      /**
       * Options Photo
       * @description Photo requirement setting in application form.
       * @default null
       */
      options_photo: string | null;
      /**
       * Ref
       * @description Internal reference code.
       * @default null
       */
      ref: string | null;
      /**
       * Slug
       * @description URL-friendly slug of the offer.
       * @default null
       */
      slug: string | null;
      /**
       * Status
       * @description Current status of the offer.
       */
      status: string;
      /**
       * Tags
       * @description Tags assigned to the offer.
       */
      tags?: string[];
      /**
       * Title
       * @description Title of the job offer.
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 datetime when the offer was last updated.
       */
      updated_at: string;
      /**
       * Visibility Options
       * @description Visibility options for this offer.
       */
      visibility_options?: string[];
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
 * Type of RECRUITEE's RECRUITEE_GET_OFFERS tool input.
 */
type RECRUITEE_GET_OFFERS_INPUT = {
  /**
   * Company Id
   * @description Company ID or subdomain. Can be either the numerical company ID or the company subdomain. If not provided, uses the subdomain from the connection.
   * @default null
   */
  company_id: number | null;
  /**
   * Limit
   * @description Maximum number of offers to return (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of offers to skip (for pagination).
   * @default null
   */
  offset: number | null;
  /**
   * Query
   * @description Search term to filter job offers.
   * @default null
   */
  query: string | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_OFFERS tool output.
 */
type RECRUITEE_GET_OFFERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Offers
       * @description List of job offers.
       */
      offers: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the offer was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique identifier of the offer.
           */
          id: number;
          /**
           * Kind
           * @description Type of the offer ('job' or 'talent_pool').
           * @enum {string}
           */
          kind: "job" | "talent_pool";
          /**
           * Location
           * @description Location of the job offer, if provided.
           * @default null
           */
          location: string | null;
          /**
           * Slug
           * @description URL-friendly slug of the offer title.
           * @default null
           */
          slug: string | null;
          /**
           * Status
           * @description Current status of the offer.
           * @enum {string}
           */
          status: "draft" | "internal" | "published" | "closed" | "archived";
          /**
           * Title
           * @description Title of the job offer.
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the offer was last updated.
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Total
       * @description Total number of offers available.
       * @default null
       */
      total: number | null;
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
 * Type of RECRUITEE's RECRUITEE_GET_PIPELINE_STAGES tool input.
 */
type RECRUITEE_GET_PIPELINE_STAGES_INPUT = {
  /**
   * Offer Id
   * @description ID of the job offer to retrieve pipeline stages for.
   */
  offer_id?: number;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_PIPELINE_STAGES tool output.
 */
type RECRUITEE_GET_PIPELINE_STAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stages
       * @description List of pipeline stages for the specified job offer.
       */
      stages: {
          /**
           * Id
           * @description Unique identifier of the pipeline stage.
           */
          id: number;
          /**
           * Name
           * @description Name of the pipeline stage.
           */
          name: string;
          /**
           * Position
           * @description Order position of the pipeline stage.
           */
          position: number;
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
 * Type of RECRUITEE's RECRUITEE_GET_TAGS tool input.
 */
type RECRUITEE_GET_TAGS_INPUT = {
  /**
   * Page
   * @description Page number of results (minimum 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tags per page (1-100).
   * @default null
   */
  per_page: number | null;
  /**
   * Query
   * @description Search term to filter tags by name.
   * @default null
   */
  query: string | null;
  /**
   * Sort By
   * @description Field to sort by: 'name' or 'taggings_count'.
   * @default null
   * @enum {string|null}
   */
  sort_by: "name" | "taggings_count" | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_GET_TAGS tool output.
 */
type RECRUITEE_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number.
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of tags returned per page.
       * @default null
       */
      per_page: number | null;
      /**
       * Tags
       * @description List of tags.
       */
      tags: {
          /**
           * Context
           * @description Context of the tag.
           */
          context: string;
          /**
           * Id
           * @description Unique identifier of the tag.
           */
          id: number;
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
          /**
           * Status
           * @description Status of the tag.
           * @default null
           */
          status: string | null;
          /**
           * Taggings Count
           * @description Number of times the tag has been used.
           */
          taggings_count: number;
      }[];
      /**
       * Total
       * @description Total number of tags available.
       * @default null
       */
      total: number | null;
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
 * Type of RECRUITEE's RECRUITEE_UPDATE_CANDIDATE tool input.
 */
type RECRUITEE_UPDATE_CANDIDATE_INPUT = {
  /**
   * Candidate Id
   * @description Unique identifier of the candidate to update.
   */
  candidate_id?: number;
  /**
   * Cover Letter
   * @description Cover letter text for the candidate.
   * @default null
   */
  cover_letter: string | null;
  /**
   * Custom Fields
   * @description Custom fields for the candidate as defined by the company.
   * @default null
   */
  custom_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * Format: email
   * @default null
   */
  email: unknown;
  /**
   * Name
   * @description Full name of the candidate.
   * @default null
   */
  name: string | null;
  /**
   * Offers
   * @description List of offer IDs to associate with the candidate.
   * @default null
   */
  offers: number[] | null;
  /**
   * Phone
   * @description Phone number of the candidate.
   * @default null
   */
  phone: string | null;
  /**
   * Photo
   * Format: uri
   * @default null
   */
  photo: unknown;
  /**
   * Resume
   * Format: uri
   * @default null
   */
  resume: unknown;
  /**
   * Social Links
   * @default null
   */
  social_links: unknown[] | null;
  /**
   * Source
   * @description Source from which the candidate was obtained.
   * @default null
   */
  source: string | null;
  /**
   * Tags
   * @description List of tags associated with the candidate.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_UPDATE_CANDIDATE tool output.
 */
type RECRUITEE_UPDATE_CANDIDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Candidate
       * @description Candidate schema returned by Recruitee.
       */
      candidate: {
          /**
           * Cover Letter
           * @description Cover letter text.
           * @default null
           */
          cover_letter: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the candidate was created.
           */
          created_at: unknown;
          /**
           * Custom Fields
           * @description Custom fields defined by the company for the candidate.
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Email address of the candidate.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the candidate.
           */
          id: number;
          /**
           * Name
           * @description Full name of the candidate.
           */
          name: string;
          /**
           * Offers
           * @description Offer IDs associated with the candidate.
           * @default null
           */
          offers: number[] | null;
          /**
           * Phone
           * @description Phone number of the candidate.
           * @default null
           */
          phone: string | null;
          /**
           * Photo
           * @description URL of the candidate's photo.
           * @default null
           */
          photo: string | null;
          /**
           * Resume
           * @description URL of the candidate's resume.
           * @default null
           */
          resume: string | null;
          /**
           * Social Links
           * @description URLs of the candidate's social profiles.
           * @default null
           */
          social_links: string[] | null;
          /**
           * Source
           * @description Source from which the candidate was obtained.
           * @default null
           */
          source: string | null;
          /**
           * Tags
           * @description Tags associated with the candidate.
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the candidate was last updated.
           */
          updated_at: unknown;
      };
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
 * Type of RECRUITEE's RECRUITEE_UPDATE_NOTE tool input.
 */
type RECRUITEE_UPDATE_NOTE_INPUT = {
  /**
   * Body
   * @description Updated text content of the note.
   * @default null
   */
  body: string | null;
  /**
   * Candidate Id
   * @description Unique identifier of the candidate.
   */
  candidate_id?: number;
  /**
   * Note Id
   * @description Unique identifier of the note to update.
   */
  note_id?: number;
  /**
   * Pinned
   * @description True to pin the note, false to unpin.
   * @default null
   */
  pinned: boolean | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_UPDATE_NOTE tool output.
 */
type RECRUITEE_UPDATE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Note
       * @description The updated note object.
       */
      note: {
          /**
           * Admin Id
           * @description ID of the admin who created or updated the note.
           * @default null
           */
          admin_id: number | null;
          /**
           * Body
           * @description Text content of the note.
           */
          body: string;
          /**
           * Body Html
           * @description HTML version of the note body, if any.
           * @default null
           */
          body_html: string | null;
          /**
           * Body Json
           * @description JSON representation of the note body, if any.
           * @default null
           */
          body_json: {
              [key: string]: unknown;
          } | null;
          /**
           * Candidate Id
           * @description ID of the candidate associated with the note.
           * @default null
           */
          candidate_id: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the note was created.
           */
          created_at: string;
          /**
           * Guest Id
           * @description ID of the guest who created or updated the note.
           * @default null
           */
          guest_id: number | null;
          /**
           * Id
           * @description Unique identifier of the note.
           */
          id: number;
          /**
           * Pinned
           * @description Pin status of the note.
           * @default null
           */
          pinned: boolean | null;
          /**
           * Reply To Id
           * @description If reply, the parent note ID.
           * @default null
           */
          reply_to_id: number | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the note was last updated.
           */
          updated_at: string;
      };
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
 * Type of RECRUITEE's RECRUITEE_UPDATE_OFFER tool input.
 */
type RECRUITEE_UPDATE_OFFER_INPUT = {
  /**
   * Offer Id
   * @description ID of the offer to update.
   */
  offer_id?: number;
  /**
   * Options Cover Letter
   * @description Cover letter requirement setting in application form.
   * @default null
   * @enum {string|null}
   */
  options_cover_letter: "required" | "optional" | "off" | null;
  /**
   * Options Cv
   * @description CV requirement setting in application form.
   * @default null
   * @enum {string|null}
   */
  options_cv: "required" | "optional" | "off" | null;
  /**
   * Options Phone
   * @description Phone requirement setting in application form.
   * @default null
   * @enum {string|null}
   */
  options_phone: "required" | "optional" | "off" | null;
  /**
   * Options Photo
   * @description Photo requirement setting in application form.
   * @default null
   * @enum {string|null}
   */
  options_photo: "required" | "optional" | "off" | null;
};

/**
 * Type of RECRUITEE's RECRUITEE_UPDATE_OFFER tool output.
 */
type RECRUITEE_UPDATE_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Offer
       * @description Schema for a job offer in Recruitee.
       */
      offer: {
          /**
           * Attachments
           * @description Attachments linked to the offer.
           */
          attachments?: {
              /**
               * Filename
               * @description Uploaded filename.
               */
              filename: string;
              /**
               * Id
               * @description Unique attachment ID.
               */
              id: number;
              /**
               * Url
               * @description Download URL of the attachment.
               */
              url: string;
          }[];
          /**
           * Created At
           * @description ISO 8601 datetime when the offer was created.
           */
          created_at: string;
          /**
           * Custom Fields
           * @description Custom fields for the offer.
           */
          custom_fields?: {
              /**
               * Field Key
               * @description Custom field identifier key.
               */
              field_key: string;
              /**
               * Value
               * @description Value of the custom field.
               */
              value: unknown;
          }[];
          /**
           * Department Id
           * @description Department ID this offer belongs to.
           * @default null
           */
          department_id: number | null;
          /**
           * Description
           * @description Detailed description of the job offer.
           * @default null
           */
          description: string | null;
          /**
           * Employment Types
           * @description List of employment types for this offer.
           */
          employment_types?: string[];
          /**
           * Expires At
           * @description ISO 8601 datetime when the offer expires.
           * @default null
           */
          expires_at: string | null;
          /**
           * Id
           * @description Unique identifier of the offer.
           */
          id: number;
          /**
           * Kind
           * @description Type of the offer, e.g., 'job' or 'talent_pool'.
           * @default null
           */
          kind: string | null;
          /**
           * Locations
           * @description List of locations for this offer.
           */
          locations?: string[];
          /**
           * Options Cover Letter
           * @description Cover letter requirement setting in application form.
           * @default null
           */
          options_cover_letter: string | null;
          /**
           * Options Cv
           * @description CV requirement setting in application form.
           * @default null
           */
          options_cv: string | null;
          /**
           * Options Phone
           * @description Phone requirement setting in application form.
           * @default null
           */
          options_phone: string | null;
          /**
           * Options Photo
           * @description Photo requirement setting in application form.
           * @default null
           */
          options_photo: string | null;
          /**
           * Ref
           * @description Internal reference code.
           * @default null
           */
          ref: string | null;
          /**
           * Slug
           * @description URL-friendly slug of the offer.
           * @default null
           */
          slug: string | null;
          /**
           * Status
           * @description Current status of the offer.
           */
          status: string;
          /**
           * Tags
           * @description Tags assigned to the offer.
           */
          tags?: string[];
          /**
           * Title
           * @description Title of the job offer.
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 datetime when the offer was last updated.
           */
          updated_at: string;
          /**
           * Visibility Options
           * @description Visibility options for this offer.
           */
          visibility_options?: string[];
      };
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
 * Type map of all available tool input types for toolkit "RECRUITEE".
 */
export type RECRUITEE_TOOL_INPUTS = {
  CREATE_CANDIDATE: RECRUITEE_CREATE_CANDIDATE_INPUT
  CREATE_NOTE: RECRUITEE_CREATE_NOTE_INPUT
  CREATE_OFFER: RECRUITEE_CREATE_OFFER_INPUT
  DELETE_CANDIDATE: RECRUITEE_DELETE_CANDIDATE_INPUT
  DELETE_TAG: RECRUITEE_DELETE_TAG_INPUT
  GET_CANDIDATE: RECRUITEE_GET_CANDIDATE_INPUT
  GET_CANDIDATES: RECRUITEE_GET_CANDIDATES_INPUT
  GET_COMPANY_ID: RECRUITEE_GET_COMPANY_ID_INPUT
  GET_COMPANY_OFFERS_PUBLIC: RECRUITEE_GET_COMPANY_OFFERS_PUBLIC_INPUT
  GET_COMPANY_OFFER_PUBLIC: RECRUITEE_GET_COMPANY_OFFER_PUBLIC_INPUT
  GET_DEPARTMENTS: RECRUITEE_GET_DEPARTMENTS_INPUT
  GET_LOCATIONS: RECRUITEE_GET_LOCATIONS_INPUT
  GET_NOTES: RECRUITEE_GET_NOTES_INPUT
  GET_OFFER: RECRUITEE_GET_OFFER_INPUT
  GET_OFFERS: RECRUITEE_GET_OFFERS_INPUT
  GET_PIPELINE_STAGES: RECRUITEE_GET_PIPELINE_STAGES_INPUT
  GET_TAGS: RECRUITEE_GET_TAGS_INPUT
  UPDATE_CANDIDATE: RECRUITEE_UPDATE_CANDIDATE_INPUT
  UPDATE_NOTE: RECRUITEE_UPDATE_NOTE_INPUT
  UPDATE_OFFER: RECRUITEE_UPDATE_OFFER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RECRUITEE".
 */
export type RECRUITEE_TOOL_OUTPUTS = {
  CREATE_CANDIDATE: RECRUITEE_CREATE_CANDIDATE_OUTPUT
  CREATE_NOTE: RECRUITEE_CREATE_NOTE_OUTPUT
  CREATE_OFFER: RECRUITEE_CREATE_OFFER_OUTPUT
  DELETE_CANDIDATE: RECRUITEE_DELETE_CANDIDATE_OUTPUT
  DELETE_TAG: RECRUITEE_DELETE_TAG_OUTPUT
  GET_CANDIDATE: RECRUITEE_GET_CANDIDATE_OUTPUT
  GET_CANDIDATES: RECRUITEE_GET_CANDIDATES_OUTPUT
  GET_COMPANY_ID: RECRUITEE_GET_COMPANY_ID_OUTPUT
  GET_COMPANY_OFFERS_PUBLIC: RECRUITEE_GET_COMPANY_OFFERS_PUBLIC_OUTPUT
  GET_COMPANY_OFFER_PUBLIC: RECRUITEE_GET_COMPANY_OFFER_PUBLIC_OUTPUT
  GET_DEPARTMENTS: RECRUITEE_GET_DEPARTMENTS_OUTPUT
  GET_LOCATIONS: RECRUITEE_GET_LOCATIONS_OUTPUT
  GET_NOTES: RECRUITEE_GET_NOTES_OUTPUT
  GET_OFFER: RECRUITEE_GET_OFFER_OUTPUT
  GET_OFFERS: RECRUITEE_GET_OFFERS_OUTPUT
  GET_PIPELINE_STAGES: RECRUITEE_GET_PIPELINE_STAGES_OUTPUT
  GET_TAGS: RECRUITEE_GET_TAGS_OUTPUT
  UPDATE_CANDIDATE: RECRUITEE_UPDATE_CANDIDATE_OUTPUT
  UPDATE_NOTE: RECRUITEE_UPDATE_NOTE_OUTPUT
  UPDATE_OFFER: RECRUITEE_UPDATE_OFFER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RECRUITEE toolkit.
 */
export const RECRUITEE = {
  slug: "recruitee",
  tools: {
    /**
     * Tool to create a new candidate profile. use after gathering all candidate details. example: "create a new candidate named jane doe with email jane.doe@example.com."
     */
    CREATE_CANDIDATE: "RECRUITEE_CREATE_CANDIDATE",
    /**
     * Tool to create a new note for a candidate. use after confirming this detail.
     */
    CREATE_NOTE: "RECRUITEE_CREATE_NOTE",
    /**
     * Tool to create a new job offer. use after confirming all offer details and ready to publish.
     */
    CREATE_OFFER: "RECRUITEE_CREATE_OFFER",
    /**
     * Tool to delete a candidate profile. use when you need to permanently remove a candidate from your recruitee account. returns no content on success.
     */
    DELETE_CANDIDATE: "RECRUITEE_DELETE_CANDIDATE",
    /**
     * Tool to delete a tag. use when you need to permanently remove a tag from recruitee. use after confirming the tag is not in use.
     */
    DELETE_TAG: "RECRUITEE_DELETE_TAG",
    /**
     * Tool to retrieve detailed information about a specific candidate. use when you need the candidate's full profile before proceeding.
     */
    GET_CANDIDATE: "RECRUITEE_GET_CANDIDATE",
    /**
     * Tool to retrieve a list of all candidates in the company. use when you need to fetch or filter candidates before proceeding.
     */
    GET_CANDIDATES: "RECRUITEE_GET_CANDIDATES",
    /**
     * Tool to retrieve the company id of the authenticated account. use when you need to confirm your company identity before other operations.
     */
    GET_COMPANY_ID: "RECRUITEE_GET_COMPANY_ID",
    /**
     * Tool to get a list of published company jobs from the careers site api. use when you need to list all current published offers.
     */
    GET_COMPANY_OFFERS_PUBLIC: "RECRUITEE_GET_COMPANY_OFFERS_PUBLIC",
    /**
     * Tool to retrieve a specific published job offer by id or slug from the public careers site api. use after you have the offer identifier.
     */
    GET_COMPANY_OFFER_PUBLIC: "RECRUITEE_GET_COMPANY_OFFER_PUBLIC",
    /**
     * Tool to retrieve a list of company departments. use when you need to reference or assign offers or candidates to departments.
     */
    GET_DEPARTMENTS: "RECRUITEE_GET_DEPARTMENTS",
    /**
     * Tool to retrieve a list of company locations. use when you need to see all location options before assigning them to offers.
     */
    GET_LOCATIONS: "RECRUITEE_GET_LOCATIONS",
    /**
     * Tool to retrieve a list of notes for a specific candidate. use after confirming the candidate exists when you need to review their notes.
     */
    GET_NOTES: "RECRUITEE_GET_NOTES",
    /**
     * Tool to retrieve detailed information about a specific job offer. use when you have the offer id and need its full metadata.
     */
    GET_OFFER: "RECRUITEE_GET_OFFER",
    /**
     * Tool to retrieve a list of all job offers. use after authentication to browse or paginate your company's complete set of offers.
     */
    GET_OFFERS: "RECRUITEE_GET_OFFERS",
    /**
     * Tool to retrieve pipeline stages of a job offer. use when you have the offer id and need its stages to track candidate progression. example: "get pipeline stages for offer id 456."
     */
    GET_PIPELINE_STAGES: "RECRUITEE_GET_PIPELINE_STAGES",
    /**
     * Tool to retrieve a list of all tags. use after authenticating to fetch or search tags by name or usage count.
     */
    GET_TAGS: "RECRUITEE_GET_TAGS",
    /**
     * Tool to update information for an existing candidate. use when you need to modify a candidate's profile after retrieval.
     */
    UPDATE_CANDIDATE: "RECRUITEE_UPDATE_CANDIDATE",
    /**
     * Tool to update an existing note for a candidate. use when you need to modify note text or pin status after creation.
     */
    UPDATE_NOTE: "RECRUITEE_UPDATE_NOTE",
    /**
     * Tool to update information for an existing job offer. use when you need to modify an offer's details after retrieval.
     */
    UPDATE_OFFER: "RECRUITEE_UPDATE_OFFER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RECRUITEE".
 */
export type RECRUITEE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RECRUITEE".
 */
export type RECRUITEE_TRIGGER_EVENTS = {}
