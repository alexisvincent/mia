// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AEROLEADS's AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL tool input.
 */
type AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL_INPUT = {
  /**
   * Linkedin Url
   * Format: uri
   * @description Public LinkedIn profile URL of the prospect; must be a fully qualified URL.
   */
  linkedin_url?: unknown;
};

/**
 * Type of AEROLEADS's AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL tool output.
 */
type AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Address of the prospect
       * @default null
       */
      address: string | null;
      /**
       * Cb Rank
       * @description Cb rank of the prospect
       * @default null
       */
      cb_rank: string | null;
      /**
       * City
       * @description City of the prospect
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the prospect
       * @default null
       */
      country: string | null;
      /**
       * Db Logo Url
       * @description Db logo URL of the prospect
       * @default null
       */
      db_logo_url: string | null;
      /**
       * Education
       * @description Education of the prospect
       * @default null
       */
      education: string | null;
      /**
       * Emails
       * @description Emails of the prospect
       * @default null
       */
      emails: string | null;
      /**
       * Emails S2
       * @description Emails s2 of the prospect
       * @default null
       */
      emails_s2: string | null;
      /**
       * Experience
       * @description Experience of the prospect
       * @default null
       */
      experience: string | null;
      /**
       * First Name
       * @description First name of the prospect
       * @default null
       */
      first_name: string | null;
      /**
       * Full Name
       * @description Full name of the prospect
       * @default null
       */
      full_name: string | null;
      /**
       * Gender
       * @description Gender of the prospect
       * @default null
       */
      gender: string | null;
      /**
       * Industry
       * @description Industry of the prospect
       * @default null
       */
      industry: string | null;
      /**
       * Interests
       * @description Interests of the prospect
       * @default null
       */
      interests: string | null;
      /**
       * Job Company Linkedin Url
       * @description Job company LinkedIn URL of the prospect
       * @default null
       */
      job_company_linkedin_url: string | null;
      /**
       * Job Company Name
       * @description Job company name of the prospect
       * @default null
       */
      job_company_name: string | null;
      /**
       * Job Company Size
       * @description Job company size of the prospect
       * @default null
       */
      job_company_size: string | null;
      /**
       * Job Company Website
       * @description Job company website of the prospect
       * @default null
       */
      job_company_website: string | null;
      /**
       * Job Description
       * @description Job description of the prospect
       * @default null
       */
      job_description: string | null;
      /**
       * Job Summary
       * @description Job summary of the prospect
       * @default null
       */
      job_summary: string | null;
      /**
       * Job Title Detailed Role S2
       * @description Job title detailed role s2 of the prospect
       * @default null
       */
      job_title_detailed_role_s2: string | null;
      /**
       * Job Title Level
       * @description Job title level of the prospect
       * @default null
       */
      job_title_level: string | null;
      /**
       * Job Title Role
       * @description Job title role of the prospect
       * @default null
       */
      job_title_role: string | null;
      /**
       * Languages
       * @description Languages of the prospect
       * @default null
       */
      languages: string | null;
      /**
       * Last Name
       * @description Last name of the prospect
       * @default null
       */
      last_name: string | null;
      /**
       * Organization Current Technologies S2
       * @description Organization current technologies s2 of the prospect
       * @default null
       */
      organization_current_technologies_s2: string | null;
      /**
       * Organization Facebook Url S2
       * @description Organization Facebook URL s2 of the prospect
       * @default null
       */
      organization_facebook_url_s2: string | null;
      /**
       * Organization Founded Year S2
       * @description Organization founded year s2 of the prospect
       * @default null
       */
      organization_founded_year_s2: string | null;
      /**
       * Organization Twitter Url S2
       * @description Organization Twitter URL s2 of the prospect
       * @default null
       */
      organization_twitter_url_s2: string | null;
      /**
       * Phone Numbers
       * @description Phone numbers of the prospect
       * @default null
       */
      phone_numbers: string | null;
      /**
       * Phone Numbers S2
       * @description Phone numbers s2 of the prospect
       * @default null
       */
      phone_numbers_s2: string | null;
      /**
       * Profile Picture Url
       * @description Profile picture URL of the prospect
       * @default null
       */
      profile_picture_url: string | null;
      /**
       * Skills
       * @description Skills of the prospect
       * @default null
       */
      skills: string | null;
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
 * Type map of all available tool input types for toolkit "AEROLEADS".
 */
export type AEROLEADS_TOOL_INPUTS = {
  GET_DETAILS_FROM_LINKEDIN_URL: AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AEROLEADS".
 */
export type AEROLEADS_TOOL_OUTPUTS = {
  GET_DETAILS_FROM_LINKEDIN_URL: AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AEROLEADS toolkit.
 */
export const AEROLEADS = {
  slug: "aeroleads",
  tools: {
    /**
     * Tool to retrieve detailed information about a prospect using their linkedin profile url. use after confirming you have a valid public linkedin url, to enrich lead profiles with additional details.
     */
    GET_DETAILS_FROM_LINKEDIN_URL: "AEROLEADS_GET_DETAILS_FROM_LINKEDIN_URL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AEROLEADS".
 */
export type AEROLEADS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AEROLEADS".
 */
export type AEROLEADS_TRIGGER_EVENTS = {}
