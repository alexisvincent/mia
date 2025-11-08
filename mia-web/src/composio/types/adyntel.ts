// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ADYNTEL's ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY tool input.
 */
type ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY_INPUT = {
  /**
   * Company Domain
   * @description The domain of the company to retrieve ads for.
   */
  company_domain?: string;
};

/**
 * Type of ADYNTEL's ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY tool output.
 */
type ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY_OUTPUT = {
  /**
   * Data
   * @description The data returned by the API.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Whether the request was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ADYNTEL's ADYNTEL_META_AD_SEARCH tool input.
 */
type ADYNTEL_META_AD_SEARCH_INPUT = {
  /**
   * Country Code
   * @description To limit results to one specific country. Please use ISO 3166-1 alpha-2 country code.
   * @default null
   */
  country_code: string | null;
  /**
   * Keyword
   * @description The keyword you want to use in your search.
   */
  keyword?: string;
};

/**
 * Type of ADYNTEL's ADYNTEL_META_AD_SEARCH tool output.
 */
type ADYNTEL_META_AD_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active Status
       * @description The active status of the ads.
       * @default null
       */
      active_status: string | null;
      /**
       * Continuation Token
       * @description The continuation token to get the next page of results.
       * @default null
       */
      continuation_token: string | null;
      /**
       * Country Code
       * @description The country code of the ads.
       * @default null
       */
      country_code: string | null;
      /**
       * Is Result Complete
       * @description Whether the result is complete.
       * @default null
       */
      is_result_complete: boolean | null;
      /**
       * Media Types
       * @description The media types of the ads.
       * @default null
       */
      media_types: string | null;
      /**
       * Number Of Ads
       * @description The number of ads found.
       * @default null
       */
      number_of_ads: number | null;
      /**
       * Platform
       * @description The platform of the ads.
       * @default null
       */
      platform: string[] | null;
      /**
       * Query
       * @description The query used for the search.
       * @default null
       */
      query: string | null;
      /**
       * Results
       * @description The results of the search.
       * @default null
       */
      results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Type
       * @description The search type.
       * @default null
       */
      search_type: string | null;
      /**
       * Start Max Date
       * @description The start max date of the ads.
       * @default null
       */
      start_max_date: string | null;
      /**
       * Start Min Date
       * @description The start min date of the ads.
       * @default null
       */
      start_min_date: string | null;
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
 * Type of ADYNTEL's ADYNTEL_SEARCH_TIK_TOK_ADS tool input.
 */
type ADYNTEL_SEARCH_TIK_TOK_ADS_INPUT = {
  /**
   * Api Key
   * @description Adyntel API key.
   */
  api_key?: string;
  /**
   * CountryCode
   * @description Use if you want to limit the search to only one country.
   * @default null
   * @enum {string|null}
   */
  country_code: "AT" | "BE" | "BG" | "CH" | "CY" | "CZ" | "DE" | "DK" | "EE" | "ES" | "FI" | "FR" | "GB" | "GR" | "HR" | "HU" | "IE" | "IS" | "IT" | "LI" | "LT" | "LU" | "LV" | "MT" | "NL" | "NO" | "PL" | "PT" | "RO" | "SE" | "SI" | "SK" | "ALL" | null;
  /**
   * Email
   * @description Adyntel account email.
   */
  email?: string;
  /**
   * Keyword
   * @description Your search query.
   */
  keyword?: string;
};

/**
 * Type of ADYNTEL's ADYNTEL_SEARCH_TIK_TOK_ADS tool output.
 */
type ADYNTEL_SEARCH_TIK_TOK_ADS_OUTPUT = {
  /** Code */
  code?: number;
  /** Data */
  data?: {
      /** Audit Status */
      audit_status: string;
      /** Estimated Audience */
      estimated_audience: string;
      /** First Shown Date */
      first_shown_date: number;
      /** Id */
      id: string;
      /** Image Urls */
      image_urls: string[];
      /** Impression */
      impression: number;
      /** Last Shown Date */
      last_shown_date: number;
      /** Name */
      name: string;
      /** Rejection Info */
      rejection_info: string | null;
      /** Show Mode */
      show_mode: number;
      /** Sor Audit Status */
      sor_audit_status: string;
      /** Spent */
      spent: string;
      /** Type */
      type: string;
      /** Videos */
      videos: {
          /** Cover Img */
          cover_img: string;
          /** Video Url */
          video_url: string;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Has More */
  has_more?: boolean;
  /** Search Id */
  search_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /** Total */
  total?: number;
};

/**
 * Type map of all available tool input types for toolkit "ADYNTEL".
 */
export type ADYNTEL_TOOL_INPUTS = {
  GET_GOOGLE_ADS_BY_COMPANY: ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY_INPUT
  META_AD_SEARCH: ADYNTEL_META_AD_SEARCH_INPUT
  SEARCH_TIK_TOK_ADS: ADYNTEL_SEARCH_TIK_TOK_ADS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ADYNTEL".
 */
export type ADYNTEL_TOOL_OUTPUTS = {
  GET_GOOGLE_ADS_BY_COMPANY: ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY_OUTPUT
  META_AD_SEARCH: ADYNTEL_META_AD_SEARCH_OUTPUT
  SEARCH_TIK_TOK_ADS: ADYNTEL_SEARCH_TIK_TOK_ADS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ADYNTEL toolkit.
 */
export const ADYNTEL = {
  slug: "adyntel",
  tools: {
    /**
     * Retrieve all google ads for a given company domain.
     */
    GET_GOOGLE_ADS_BY_COMPANY: "ADYNTEL_GET_GOOGLE_ADS_BY_COMPANY",
    /**
     * Search the meta ad library.
     */
    META_AD_SEARCH: "ADYNTEL_META_AD_SEARCH",
    /**
     * Tool to search for ads on tiktok using a keyword. use when you want to find ads related to a specific topic.
     */
    SEARCH_TIK_TOK_ADS: "ADYNTEL_SEARCH_TIK_TOK_ADS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ADYNTEL".
 */
export type ADYNTEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ADYNTEL".
 */
export type ADYNTEL_TRIGGER_EVENTS = {}
