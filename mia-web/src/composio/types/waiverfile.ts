// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WAIVERFILE's WAIVERFILE_GET_SITE_DETAILS tool input.
 */
type WAIVERFILE_GET_SITE_DETAILS_INPUT = object;

/**
 * Type of WAIVERFILE's WAIVERFILE_GET_SITE_DETAILS tool output.
 */
type WAIVERFILE_GET_SITE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The site address
       */
      address: string;
      /**
       * City
       * @description Site city
       */
      city: string;
      /**
       * Contact Email
       * @description Contact email for the site
       * @default null
       */
      contactEmail: string | null;
      /**
       * Facebook
       * @description Facebook URL
       * @default null
       */
      facebook: string | null;
      /**
       * Instagram
       * @description Instagram URL
       * @default null
       */
      instagram: string | null;
      /**
       * Logo Url
       * @description URL to the site's logo
       * @default null
       */
      logoUrl: string | null;
      /**
       * Phone
       * @description Site phone number
       * @default null
       */
      phone: string | null;
      /**
       * Site Name
       * @description The name of the WaiverFile site
       */
      siteName: string;
      /**
       * State
       * @description Site state
       */
      state: string;
      /**
       * Theme Color
       * @description Site theme color
       * @default null
       */
      themeColor: string | null;
      /**
       * Tiktok
       * @description TikTok URL
       * @default null
       */
      tiktok: string | null;
      /**
       * Twitter
       * @description Twitter URL
       * @default null
       */
      twitter: string | null;
      /**
       * Website
       * @description Site website URL
       * @default null
       */
      website: string | null;
      /**
       * Zip
       * @description Site zip code
       */
      zip: string;
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
 * Type map of all available tool input types for toolkit "WAIVERFILE".
 */
export type WAIVERFILE_TOOL_INPUTS = {
  GET_SITE_DETAILS: WAIVERFILE_GET_SITE_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WAIVERFILE".
 */
export type WAIVERFILE_TOOL_OUTPUTS = {
  GET_SITE_DETAILS: WAIVERFILE_GET_SITE_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WAIVERFILE toolkit.
 */
export const WAIVERFILE = {
  slug: "waiverfile",
  tools: {
    /**
     * Tool to fetch public details about the waiverfile site. use after authenticating to display site metadata.
     */
    GET_SITE_DETAILS: "WAIVERFILE_GET_SITE_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WAIVERFILE".
 */
export type WAIVERFILE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WAIVERFILE".
 */
export type WAIVERFILE_TRIGGER_EVENTS = {}
