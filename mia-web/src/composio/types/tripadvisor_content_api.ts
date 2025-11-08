// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TRIPADVISOR_CONTENT_API's TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS tool input.
 */
type TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS_INPUT = {
  /**
   * Language
   * @description ISO language code for photo captions
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of photos to return (max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description Tripadvisor numeric location ID
   */
  location_id?: string;
  /**
   * Offset
   * @description Result offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Size
   * @description Size of the image to retrieve
   * @default null
   * @enum {string|null}
   */
  size: "thumbnail" | "small" | "medium" | "large" | "original" | null;
};

/**
 * Type of TRIPADVISOR_CONTENT_API's TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS tool output.
 */
type TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS_OUTPUT = {
  /**
   * Data
   * @description List of photos for the specified location
   */
  data?: {
      /**
       * Caption
       * @description Photo caption text
       * @default null
       */
      caption: string | null;
      /**
       * Id
       * @description Unique photo ID
       */
      id: string;
      /**
       * Images
       * @description URLs and dimensions for each image size
       */
      images: {
          /**
           * Large
           * @description Large image size
           */
          large: {
              /**
               * Height
               * @description Image height in pixels
               */
              height: number;
              /**
               * Url
               * @description Direct URL to this image size
               */
              url: string;
              /**
               * Width
               * @description Image width in pixels
               */
              width: number;
          };
          /**
           * Medium
           * @description Medium image size
           */
          medium: {
              /**
               * Height
               * @description Image height in pixels
               */
              height: number;
              /**
               * Url
               * @description Direct URL to this image size
               */
              url: string;
              /**
               * Width
               * @description Image width in pixels
               */
              width: number;
          };
          /**
           * Original
           * @description Original image size
           */
          original: {
              /**
               * Height
               * @description Image height in pixels
               */
              height: number;
              /**
               * Url
               * @description Direct URL to this image size
               */
              url: string;
              /**
               * Width
               * @description Image width in pixels
               */
              width: number;
          };
          /**
           * Small
           * @description Small image size
           */
          small: {
              /**
               * Height
               * @description Image height in pixels
               */
              height: number;
              /**
               * Url
               * @description Direct URL to this image size
               */
              url: string;
              /**
               * Width
               * @description Image width in pixels
               */
              width: number;
          };
          /**
           * Thumbnail
           * @description Thumbnail image size
           */
          thumbnail: {
              /**
               * Height
               * @description Image height in pixels
               */
              height: number;
              /**
               * Url
               * @description Direct URL to this image size
               */
              url: string;
              /**
               * Width
               * @description Image width in pixels
               */
              width: number;
          };
      };
      /**
       * Is Blessed
       * @description Whether the photo is editorially approved
       */
      is_blessed: boolean;
      /**
       * Uploaded Date
       * @description ISO date when the photo was uploaded
       */
      uploaded_date: string;
      /**
       * Url
       * @description URL to the full-size photo
       */
      url: string;
      /**
       * User
       * @description Information about the uploading user
       */
      user: {
          /**
           * Id
           * @description User ID who uploaded the photo
           */
          id: string;
          /**
           * Profile Url
           * @description Tripadvisor profile URL of the user
           */
          profile_url: string;
          /**
           * Username
           * @description User display name
           */
          username: string;
      };
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
 * Type of TRIPADVISOR_CONTENT_API's TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS tool input.
 */
type TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS_INPUT = {
  /**
   * Category
   * @description Filter results by category, e.g., 'attraction', 'restaurant'
   * @default null
   */
  category: string | null;
  /**
   * Lang
   * @description Language code for the response
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description TripAdvisor location ID for context-based filtering
   * @default null
   */
  location_id: string | null;
  /**
   * Search Query
   * @description The search query string for locations
   */
  searchQuery?: string;
};

/**
 * Type of TRIPADVISOR_CONTENT_API's TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS tool output.
 */
type TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description List of matching locations
   */
  data?: {
      /**
       * Address Obj
       * @description Address details of the location
       */
      address_obj: {
          /**
           * City
           * @description City of the location
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the location
           * @default null
           */
          country: string | null;
          /**
           * Postalcode
           * @description Postal code of the location
           * @default null
           */
          postalcode: string | null;
          /**
           * State
           * @description State or region of the location
           * @default null
           */
          state: string | null;
          /**
           * Street1
           * @description Street address line 1 of the location
           * @default null
           */
          street1: string | null;
          /**
           * Street2
           * @description Street address line 2 of the location
           * @default null
           */
          street2: string | null;
      };
      /**
       * Category
       * @description Category of the location
       * @default null
       */
      category: string | null;
      /**
       * Latitude
       * @description Latitude of the location
       * @default null
       */
      latitude: number | null;
      /**
       * Location Id
       * @description TripAdvisor location ID
       */
      location_id: string;
      /**
       * Longitude
       * @description Longitude of the location
       * @default null
       */
      longitude: number | null;
      /**
       * Name
       * @description Name of the location
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
   * Status
   * @description Response status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "TRIPADVISOR_CONTENT_API".
 */
export type TRIPADVISOR_CONTENT_API_TOOL_INPUTS = {
  GET_LOCATION_PHOTOS: TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS_INPUT
  SEARCH_LOCATIONS: TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TRIPADVISOR_CONTENT_API".
 */
export type TRIPADVISOR_CONTENT_API_TOOL_OUTPUTS = {
  GET_LOCATION_PHOTOS: TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS_OUTPUT
  SEARCH_LOCATIONS: TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TRIPADVISOR_CONTENT_API toolkit.
 */
export const TRIPADVISOR_CONTENT_API = {
  slug: "tripadvisor_content_api",
  tools: {
    /**
     * Tool to fetch high-quality recent photos for a specific location. use after confirming the numeric tripadvisor location id.
     */
    GET_LOCATION_PHOTOS: "TRIPADVISOR_CONTENT_API_GET_LOCATION_PHOTOS",
    /**
     * Tool to search for locations matching a query string. use when you need to find tripadvisor location details by name.
     */
    SEARCH_LOCATIONS: "TRIPADVISOR_CONTENT_API_SEARCH_LOCATIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TRIPADVISOR_CONTENT_API".
 */
export type TRIPADVISOR_CONTENT_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TRIPADVISOR_CONTENT_API".
 */
export type TRIPADVISOR_CONTENT_API_TRIGGER_EVENTS = {}
