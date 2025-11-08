// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GIPHY's GIPHY_ACTION_REGISTER tool input.
 */
type GIPHY_ACTION_REGISTER_INPUT = {
  /**
   * Action Type
   * @description Type of event to register, one of 'SEEN', 'CLICK', 'SENT'.
   * @enum {string}
   */
  action_type?: "SEEN" | "CLICK" | "SENT";
  /**
   * Analytics Response Payload
   * @description Encoded payload from the provided analytics URL; do not modify.
   */
  analytics_response_payload?: string;
  /**
   * Gif Id
   * @description The unique ID of the GIF or sticker to record analytics for.
   */
  gif_id?: string;
  /**
   * Random Id
   * @description An ID or proxy for a specific user.
   */
  random_id?: string;
  /**
   * Ts
   * @description UNIX timestamp in milliseconds when the action occurred.
   */
  ts?: number;
};

/**
 * Type of GIPHY's GIPHY_ACTION_REGISTER tool output.
 */
type GIPHY_ACTION_REGISTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the analytics API.
       */
      status_code: number;
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
 * Type of GIPHY's GIPHY_EMOJI_VARIATIONS tool input.
 */
type GIPHY_EMOJI_VARIATIONS_INPUT = {
  /**
   * Gif Id
   * @description The 'id' value from the GIF Object of the base emoji whose variations you want.
   */
  gif_id?: string;
};

/**
 * Type of GIPHY's GIPHY_EMOJI_VARIATIONS tool output.
 */
type GIPHY_EMOJI_VARIATIONS_OUTPUT = {
  /**
   * Data
   * @description List of variation Emoji Objects.
   */
  data?: {
      /**
       * Alt Text
       * @description Alt text for accessibility.
       * @default null
       */
      alt_text: string | null;
      /**
       * Bitly Url
       * @description Shortened Bitly URL.
       * @default null
       */
      bitly_url: string | null;
      /**
       * Content Url
       * @description Unused content URL field.
       * @default null
       */
      content_url: string | null;
      /**
       * Create Datetime
       * @description Datetime when GIF was added to Giphy.
       * @default null
       */
      create_datetime: string | null;
      /**
       * Embed Url
       * @description Embeddable GIF URL.
       * @default null
       */
      embed_url: string | null;
      /**
       * Id
       * @description Unique GIF/Emoji ID.
       */
      id: string;
      /**
       * Images
       * @description Object containing multiple renditions and sizes.
       */
      images: {
          [key: string]: unknown;
      };
      /**
       * Import Datetime
       * @description Datetime when GIF was uploaded to source.
       * @default null
       */
      import_datetime: string | null;
      /**
       * Is Low Contrast
       * @description Whether a sticker is low-contrast.
       * @default null
       */
      is_low_contrast: boolean | null;
      /**
       * Rating
       * @description MPAA-style rating (e.g., Y, G, PG).
       * @default null
       */
      rating: string | null;
      /**
       * Slug
       * @description Slug for the GIF page URL.
       * @default null
       */
      slug: string | null;
      /**
       * Source
       * @description Original source URL of the GIF.
       * @default null
       */
      source: string | null;
      /**
       * Source Post Url
       * @description Page URL of the source post.
       * @default null
       */
      source_post_url: string | null;
      /**
       * Source Tld
       * @description Top-level domain of the source URL.
       * @default null
       */
      source_tld: string | null;
      /**
       * Title
       * @description Title of the GIF.
       * @default null
       */
      title: string | null;
      /**
       * Trending Datetime
       * @description Datetime when GIF trended on Giphy.
       * @default null
       */
      trending_datetime: string | null;
      /**
       * Type
       * @description Typically 'gif' or 'emoji'.
       * @default null
       */
      type: string | null;
      /**
       * Update Datetime
       * @description Datetime when GIF was last updated.
       * @default null
       */
      update_datetime: string | null;
      /**
       * Url
       * @description URL for the GIF’s page.
       * @default null
       */
      url: string | null;
      /**
       * User
       * @description User object containing details of the uploader.
       * @default null
       */
      user: {
          [key: string]: unknown;
      } | null;
      /**
       * Username
       * @description Uploader’s username, if any.
       * @default null
       */
      username: string | null;
      /**
       * Variation Count
       * @description Number of variations associated with the emoji.
       * @default null
       */
      variation_count: number | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response status and metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Human-readable message returned by the API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GET_GIFS_BY_IDS tool input.
 */
type GIPHY_GET_GIFS_BY_IDS_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user.
   * @default null
   */
  country_code: string | null;
  /**
   * Ids
   * @description Comma-separated list of GIF IDs; maximum 100 IDs.
   */
  ids?: string;
  /**
   * Random Id
   * @description An optional unique user or session ID for A/B testing.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter results by rating (g, pg, pg-13, r).
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision; requires country_code to be set.
   * @default null
   */
  region: string | null;
};

/**
 * Type of GIPHY's GIPHY_GET_GIFS_BY_IDS tool output.
 */
type GIPHY_GET_GIFS_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description List of GIF objects for the requested IDs.
   */
  data?: {
      /**
       * Analytics
       * @description Analytics URLs for GIF interactions.
       */
      analytics: {
          /**
           * Onclick
           * @description Analytics triggered on click.
           */
          onclick: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
          /**
           * Onload
           * @description Analytics triggered on load.
           */
          onload: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
          /**
           * Onsent
           * @description Analytics triggered on send.
           */
          onsent: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
      };
      /**
       * Analytics Response Payload
       * @description Payload to send in analytics requests.
       */
      analytics_response_payload: string;
      /**
       * Bitly Gif Url
       * @description Shortened URL for the GIF.
       */
      bitly_gif_url: string;
      /**
       * Bitly Url
       * @description Shortened URL for the GIF page.
       */
      bitly_url: string;
      /**
       * Content Url
       * @description URL for the raw content (if any).
       */
      content_url: string;
      /**
       * Embed Url
       * @description URL for embedding the GIF.
       */
      embed_url: string;
      /**
       * Id
       * @description Unique GIF identifier.
       */
      id: string;
      /**
       * Images
       * @description Dictionary of multiple image formats and metadata.
       */
      images: {
          [key: string]: {
              [key: string]: unknown;
          };
      };
      /**
       * Import Datetime
       * @description Datetime when GIF was added to GIPHY.
       */
      import_datetime: string;
      /**
       * Is Sticker
       * @description Indicator if GIF is a sticker (0 or 1).
       */
      is_sticker: number;
      /**
       * Rating
       * @description Content rating of the GIF.
       */
      rating: string;
      /**
       * Slug
       * @description Short human-readable identifier.
       */
      slug: string;
      /**
       * Source
       * @description Source URL of the GIF content.
       */
      source: string;
      /**
       * Source Post Url
       * @description Source post URL for the GIF.
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source.
       */
      source_tld: string;
      /**
       * Title
       * @description User-generated title of the GIF.
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when the GIF started trending.
       */
      trending_datetime: string;
      /**
       * Type
       * @description Media type, always 'gif'.
       */
      type: string;
      /**
       * Url
       * @description URL for the GIF page on GIPHY.
       */
      url: string;
      /**
       * Username
       * @description Username of the GIF uploader, if any.
       */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Message accompanying the status code.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code of the API response.
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information.
   */
  pagination?: {
      /**
       * Count
       * @description Number of items returned in this response.
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination (zero-indexed).
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GET_GIF_BY_ID tool input.
 */
type GIPHY_GET_GIF_BY_ID_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user; include if requests are proxied.
   * @default null
   */
  country_code: unknown;
  /**
   * Gif Id
   * @description The unique ID of the GIF to fetch.
   */
  gif_id?: string;
  /**
   * Random Id
   * @description An ID or proxy for a specific user.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Return empty response if the GIF’s rating exceeds this value.
   * @default null
   * @enum {string|null}
   */
  rating: "Y" | "G" | "PG" | "PG-13" | "R" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision code; include only if proxied and country_code is set.
   * @default null
   */
  region: unknown;
};

/**
 * Type of GIPHY's GIPHY_GET_GIF_BY_ID tool output.
 */
type GIPHY_GET_GIF_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Metadata for the requested GIF.
   */
  data?: {
      /**
       * Alt Text
       * @description Alt text for accessibility.
       */
      alt_text: string;
      /**
       * Bitly Url
       * @description Shortened Bitly URL.
       */
      bitly_url: string;
      /**
       * Content Url
       * @description Unused content URL field.
       */
      content_url: string;
      /**
       * Create Datetime
       * @description Datetime when GIF was added to Giphy.
       */
      create_datetime: string;
      /**
       * Embed Url
       * @description Embeddable GIF URL.
       */
      embed_url: string;
      /**
       * Id
       * @description Unique GIF ID.
       */
      id: string;
      /**
       * Images
       * @description Object containing multiple renditions and sizes.
       */
      images: {
          [key: string]: unknown;
      };
      /**
       * Import Datetime
       * @description Datetime when GIF was uploaded to source.
       */
      import_datetime: string;
      /**
       * Is Low Contrast
       * @description Whether a sticker is low-contrast.
       * @default null
       */
      is_low_contrast: boolean | null;
      /**
       * Rating
       * @description MPAA-style rating (e.g., Y, G, PG).
       */
      rating: string;
      /**
       * Slug
       * @description Slug for the GIF page URL.
       */
      slug: string;
      /**
       * Source
       * @description Original source URL of the GIF.
       */
      source: string;
      /**
       * Source Post Url
       * @description Page URL of the source post.
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source URL.
       */
      source_tld: string;
      /**
       * Title
       * @description Title of the GIF.
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when GIF trended on Giphy.
       */
      trending_datetime: string;
      /**
       * Type
       * @description Typically 'gif'.
       */
      type: string;
      /**
       * Update Datetime
       * @description Datetime when GIF was last updated.
       */
      update_datetime: string;
      /**
       * Url
       * @description URL for the GIF’s page.
       */
      url: string;
      /**
       * User
       * @description User object containing details of the uploader.
       * @default null
       */
      user: {
          [key: string]: unknown;
      } | null;
      /**
       * Username
       * @description Uploader’s username, if any.
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response status and metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Human-readable message returned by the API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GET_STICKERS_BY_IDS tool input.
 */
type GIPHY_GET_STICKERS_BY_IDS_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user.
   * @default null
   */
  country_code: string | null;
  /**
   * Ids
   * @description Comma-separated list of sticker IDs; maximum 100 IDs.
   */
  ids?: string;
  /**
   * Random Id
   * @description An optional unique user or session ID for A/B testing.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter results by rating (g, pg, pg-13, r).
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision; requires country_code to be set.
   * @default null
   */
  region: string | null;
};

/**
 * Type of GIPHY's GIPHY_GET_STICKERS_BY_IDS tool output.
 */
type GIPHY_GET_STICKERS_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description List of sticker objects for the requested IDs.
   */
  data?: {
      /**
       * Analytics
       * @description Analytics URLs for GIF interactions.
       */
      analytics: {
          /**
           * Onclick
           * @description Analytics triggered on click.
           */
          onclick: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
          /**
           * Onload
           * @description Analytics triggered on load.
           */
          onload: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
          /**
           * Onsent
           * @description Analytics triggered on send.
           */
          onsent: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
      };
      /**
       * Analytics Response Payload
       * @description Payload to send in analytics requests.
       */
      analytics_response_payload: string;
      /**
       * Bitly Gif Url
       * @description Shortened URL for the GIF.
       */
      bitly_gif_url: string;
      /**
       * Bitly Url
       * @description Shortened URL for the GIF page.
       */
      bitly_url: string;
      /**
       * Content Url
       * @description URL for the raw content (if any).
       */
      content_url: string;
      /**
       * Embed Url
       * @description URL for embedding the GIF.
       */
      embed_url: string;
      /**
       * Id
       * @description Unique GIF identifier.
       */
      id: string;
      /**
       * Images
       * @description Dictionary of multiple image formats and metadata.
       */
      images: {
          [key: string]: {
              [key: string]: unknown;
          };
      };
      /**
       * Import Datetime
       * @description Datetime when GIF was added to GIPHY.
       */
      import_datetime: string;
      /**
       * Is Sticker
       * @description Indicator if GIF is a sticker (0 or 1).
       */
      is_sticker: number;
      /**
       * Rating
       * @description Content rating of the GIF.
       */
      rating: string;
      /**
       * Slug
       * @description Short human-readable identifier.
       */
      slug: string;
      /**
       * Source
       * @description Source URL of the GIF content.
       */
      source: string;
      /**
       * Source Post Url
       * @description Source post URL for the GIF.
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source.
       */
      source_tld: string;
      /**
       * Title
       * @description User-generated title of the GIF.
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when the GIF started trending.
       */
      trending_datetime: string;
      /**
       * Type
       * @description Media type, always 'gif'.
       */
      type: string;
      /**
       * Url
       * @description URL for the GIF page on GIPHY.
       */
      url: string;
      /**
       * Username
       * @description Username of the GIF uploader, if any.
       */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Message accompanying the status code.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code of the API response.
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information.
   */
  pagination?: {
      /**
       * Count
       * @description Number of items returned in this response.
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination (zero-indexed).
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GET_STICKER_BY_ID tool input.
 */
type GIPHY_GET_STICKER_BY_ID_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user; include if requests are proxied.
   * @default null
   */
  country_code: unknown;
  /**
   * Random Id
   * @description An ID or proxy for a specific user.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Return empty response if the sticker’s rating exceeds this value.
   * @default null
   * @enum {string|null}
   */
  rating: "Y" | "G" | "PG" | "PG-13" | "R" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision code; include only if proxied and country_code is set.
   * @default null
   */
  region: unknown;
  /**
   * Sticker Id
   * @description The unique ID of the sticker to fetch.
   */
  sticker_id?: string;
};

/**
 * Type of GIPHY's GIPHY_GET_STICKER_BY_ID tool output.
 */
type GIPHY_GET_STICKER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Metadata for the requested sticker.
   */
  data?: {
      /**
       * Alt Text
       * @description Alt text for accessibility.
       */
      alt_text: string;
      /**
       * Bitly Url
       * @description Shortened Bitly URL.
       */
      bitly_url: string;
      /**
       * Content Url
       * @description Unused content URL field.
       */
      content_url: string;
      /**
       * Create Datetime
       * @description Datetime when sticker was added to Giphy.
       */
      create_datetime: string;
      /**
       * Embed Url
       * @description Embeddable sticker URL.
       */
      embed_url: string;
      /**
       * Id
       * @description Unique sticker ID.
       */
      id: string;
      /**
       * Images
       * @description Object containing multiple renditions and sizes.
       */
      images: {
          [key: string]: unknown;
      };
      /**
       * Import Datetime
       * @description Datetime when sticker was uploaded to source.
       */
      import_datetime: string;
      /**
       * Is Low Contrast
       * @description Whether a sticker is low-contrast.
       * @default null
       */
      is_low_contrast: boolean | null;
      /**
       * Rating
       * @description MPAA-style rating (e.g., Y, G, PG).
       */
      rating: string;
      /**
       * Slug
       * @description Slug for the sticker page URL.
       */
      slug: string;
      /**
       * Source
       * @description Original source URL of the sticker.
       */
      source: string;
      /**
       * Source Post Url
       * @description Page URL of the source post.
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source URL.
       */
      source_tld: string;
      /**
       * Title
       * @description Title of the sticker.
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when sticker trended on Giphy.
       */
      trending_datetime: string;
      /**
       * Type
       * @description Typically 'gif'.
       */
      type: string;
      /**
       * Update Datetime
       * @description Datetime when sticker was last updated.
       */
      update_datetime: string;
      /**
       * Url
       * @description URL for the sticker’s page.
       */
      url: string;
      /**
       * User
       * @description User object containing details of the uploader.
       * @default null
       */
      user: {
          [key: string]: unknown;
      } | null;
      /**
       * Username
       * @description Uploader’s username, if any.
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response status and metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Human-readable message returned by the API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_CATEGORIES tool input.
 */
type GIPHY_GIPHY_CATEGORIES_INPUT = object;

/**
 * Type of GIPHY's GIPHY_GIPHY_CATEGORIES tool output.
 */
type GIPHY_GIPHY_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description List of GIF category objects.
   */
  data?: {
      /**
       * Gif
       * @description Featured GIF for the category.
       */
      gif: {
          /**
           * Alt Text
           * @description Alt text for accessibility.
           */
          alt_text: string;
          /**
           * Bitly Url
           * @description Shortened Bitly URL.
           */
          bitly_url: string;
          /**
           * Content Url
           * @description Unused content URL field.
           */
          content_url: string;
          /**
           * Create Datetime
           * @description Datetime when GIF was added to Giphy.
           */
          create_datetime: string;
          /**
           * Embed Url
           * @description Embeddable GIF URL.
           */
          embed_url: string;
          /**
           * Id
           * @description Unique GIF ID.
           */
          id: string;
          /**
           * Images
           * @description Object containing multiple renditions and sizes.
           */
          images: {
              [key: string]: unknown;
          };
          /**
           * Import Datetime
           * @description Datetime when GIF was uploaded to source.
           */
          import_datetime: string;
          /**
           * Is Low Contrast
           * @description Whether a sticker is low-contrast.
           * @default null
           */
          is_low_contrast: boolean | null;
          /**
           * Rating
           * @description MPAA-style rating (e.g., Y, G, PG).
           */
          rating: string;
          /**
           * Slug
           * @description Slug for the GIF page URL.
           */
          slug: string;
          /**
           * Source
           * @description Original source URL of the GIF.
           */
          source: string;
          /**
           * Source Post Url
           * @description Page URL of the source post.
           */
          source_post_url: string;
          /**
           * Source Tld
           * @description Top-level domain of the source URL.
           */
          source_tld: string;
          /**
           * Title
           * @description Title of the GIF.
           */
          title: string;
          /**
           * Trending Datetime
           * @description Datetime when GIF trended on Giphy.
           */
          trending_datetime: string;
          /**
           * Type
           * @description Typically 'gif'.
           */
          type: string;
          /**
           * Update Datetime
           * @description Datetime when GIF was last updated.
           */
          update_datetime: string;
          /**
           * Url
           * @description URL for the GIF’s page.
           */
          url: string;
          /**
           * User
           * @description User object containing details of the uploader.
           * @default null
           */
          user: {
              [key: string]: unknown;
          } | null;
          /**
           * Username
           * @description Uploader’s username, if any.
           */
          username: string;
      };
      /**
       * Name
       * @description Category name.
       */
      name: string;
      /**
       * Name Encoded
       * @description Encoded category name.
       */
      name_encoded: string;
      /**
       * Subcategories
       * @description List of subcategories.
       */
      subcategories: {
          /**
           * Name
           * @description Subcategory name.
           */
          name: string;
          /**
           * Name Encoded
           * @description Encoded subcategory name.
           */
          name_encoded: string;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Response message from API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY.
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information.
   */
  pagination?: {
      /**
       * Count
       * @description Number of items returned.
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination.
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_CATEGORY_BY_ID tool input.
 */
type GIPHY_GIPHY_CATEGORY_BY_ID_INPUT = {
  /**
   * Category Id
   * @description Unique identifier (encoded name) of the GIF category to fetch.
   */
  category_id?: string;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_CATEGORY_BY_ID tool output.
 */
type GIPHY_GIPHY_CATEGORY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Metadata for the requested GIF category.
   */
  data?: {
      /**
       * Gif
       * @description Featured GIF for the category.
       */
      gif: {
          /**
           * Alt Text
           * @description Alt text for accessibility.
           */
          alt_text: string;
          /**
           * Bitly Url
           * @description Shortened Bitly URL.
           */
          bitly_url: string;
          /**
           * Content Url
           * @description Unused content URL field.
           */
          content_url: string;
          /**
           * Create Datetime
           * @description Datetime when GIF was added to Giphy.
           */
          create_datetime: string;
          /**
           * Embed Url
           * @description Embeddable GIF URL.
           */
          embed_url: string;
          /**
           * Id
           * @description Unique GIF ID.
           */
          id: string;
          /**
           * Images
           * @description Object containing multiple renditions and sizes.
           */
          images: {
              [key: string]: unknown;
          };
          /**
           * Import Datetime
           * @description Datetime when GIF was uploaded to source.
           */
          import_datetime: string;
          /**
           * Is Low Contrast
           * @description Whether a sticker is low-contrast.
           * @default null
           */
          is_low_contrast: boolean | null;
          /**
           * Rating
           * @description MPAA-style rating (e.g., Y, G, PG).
           */
          rating: string;
          /**
           * Slug
           * @description Slug for the GIF page URL.
           */
          slug: string;
          /**
           * Source
           * @description Original source URL of the GIF.
           */
          source: string;
          /**
           * Source Post Url
           * @description Page URL of the source post.
           */
          source_post_url: string;
          /**
           * Source Tld
           * @description Top-level domain of the source URL.
           */
          source_tld: string;
          /**
           * Title
           * @description Title of the GIF.
           */
          title: string;
          /**
           * Trending Datetime
           * @description Datetime when GIF trended on Giphy.
           */
          trending_datetime: string;
          /**
           * Type
           * @description Typically 'gif'.
           */
          type: string;
          /**
           * Update Datetime
           * @description Datetime when GIF was last updated.
           */
          update_datetime: string;
          /**
           * Url
           * @description URL for the GIF’s page.
           */
          url: string;
          /**
           * User
           * @description User object containing details of the uploader.
           * @default null
           */
          user: {
              [key: string]: unknown;
          } | null;
          /**
           * Username
           * @description Uploader’s username, if any.
           */
          username: string;
      };
      /**
       * Name
       * @description Category name.
       */
      name: string;
      /**
       * Name Encoded
       * @description URL-safe encoded category name.
       */
      name_encoded: string;
      /**
       * Subcategories
       * @description List of related subcategories.
       */
      subcategories: {
          /**
           * Name
           * @description Subcategory name.
           */
          name: string;
          /**
           * Name Encoded
           * @description URL-safe encoded subcategory name.
           */
          name_encoded: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response status and metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Human-readable message returned by the API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_CATEGORY_GIFS tool input.
 */
type GIPHY_GIPHY_CATEGORY_GIFS_INPUT = {
  /**
   * Bundle
   * @description Restrict renditions to the specified bundle (e.g., 'messaging_non_clips').
   * @default null
   */
  bundle: string | null;
  /**
   * Category Id
   * @description The unique identifier (slug or ID) of the GIF category to fetch.
   */
  category_id?: string;
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user.
   * @default null
   */
  country_code: string | null;
  /**
   * Limit
   * @description Max number of GIFs to return; default 25; maximum 499.
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Starting position of results; default 0; maximum 4999.
   * @default 0
   */
  offset: number;
  /**
   * Random Id
   * @description An ID or proxy for a specific user session.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter results by content rating: g, pg, pg-13, or r.
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision code; specify if proxied and country_code is proxied.
   * @default null
   */
  region: string | null;
  /**
   * Remove Low Contrast
   * @description Exclude low-contrast items from results.
   * @default null
   */
  remove_low_contrast: boolean | null;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_CATEGORY_GIFS tool output.
 */
type GIPHY_GIPHY_CATEGORY_GIFS_OUTPUT = {
  /**
   * Data
   * @description Array of GIF objects in the specified category
   */
  data?: {
      /**
       * Alt Text
       * @description Alt text for accessibility.
       * @default null
       */
      alt_text: string | null;
      /**
       * Bitly Url
       * @description Shortened Bitly URL.
       */
      bitly_url: string;
      /**
       * Content Url
       * @description Unused content URL field.
       */
      content_url: string;
      /**
       * Embed Url
       * @description Embeddable GIF URL.
       */
      embed_url: string;
      /**
       * Id
       * @description Unique GIF ID.
       */
      id: string;
      /**
       * Images
       * @description Object containing multiple renditions and sizes.
       */
      images: {
          [key: string]: {
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: string;
              /**
               * Mp4
               * @description URL to the mp4 version
               * @default null
               */
              mp4: string | null;
              /**
               * Mp4 Size
               * @description Size of the mp4 in bytes
               * @default null
               */
              mp4_size: string | null;
              /**
               * Size
               * @description Size of the image in bytes
               * @default null
               */
              size: string | null;
              /**
               * Url
               * @description URL of the image rendition
               */
              url: string;
              /**
               * Webp
               * @description URL to the webp version
               * @default null
               */
              webp: string | null;
              /**
               * Webp Size
               * @description Size of the webp in bytes
               * @default null
               */
              webp_size: string | null;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: string;
          };
      };
      /**
       * Import Datetime
       * @description Datetime when GIF was uploaded to source.
       */
      import_datetime: string;
      /**
       * Is Low Contrast
       * @description Whether the GIF is low contrast.
       * @default null
       */
      is_low_contrast: boolean | null;
      /**
       * Rating
       * @description Content rating of the GIF.
       */
      rating: string;
      /**
       * Slug
       * @description Slug for the GIF page URL.
       */
      slug: string;
      /**
       * Source
       * @description Original source URL of the GIF.
       */
      source: string;
      /**
       * Source Post Url
       * @description Page URL of the source post.
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source URL.
       */
      source_tld: string;
      /**
       * Title
       * @description Title of the GIF.
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when GIF trended on Giphy.
       */
      trending_datetime: string;
      /**
       * Type
       * @description Type of the object, typically 'gif'.
       */
      type: string;
      /**
       * Url
       * @description URL for the GIF's page.
       */
      url: string;
      /**
       * Username
       * @description Uploader's username, if any.
       */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the API response
   */
  meta?: {
      /**
       * Msg
       * @description Message returned by GIPHY API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API.
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination details for the result set
   */
  pagination?: {
      /**
       * Count
       * @description Number of results returned in this response.
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination where these results start.
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of results available.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_EMOJI tool input.
 */
type GIPHY_GIPHY_EMOJI_INPUT = {
  /**
   * Limit
   * @description Maximum number of emoji objects to return (default is 25).
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Zero-based offset for pagination (default is 0).
   * @default 0
   */
  offset: number;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_EMOJI tool output.
 */
type GIPHY_GIPHY_EMOJI_OUTPUT = {
  /**
   * Data
   * @description List of emoji GIF objects with variations and media renditions
   */
  data?: {
      /**
       * Content Url
       * @description URL of the original content
       */
      content_url: string;
      /**
       * Embed Url
       * @description Embed URL for the GIF
       */
      embed_url: string;
      /**
       * Id
       * @description Unique identifier for the GIF
       */
      id: string;
      /**
       * Images
       * @description Mapping of available image renditions
       */
      images: {
          [key: string]: {
              /**
               * Height
               * @description Height of the media in pixels
               */
              height: string;
              /**
               * Mp4
               * @description MP4 format URL
               * @default null
               */
              mp4: string | null;
              /**
               * Mp4 Size
               * @description Size of MP4 media in bytes
               * @default null
               */
              mp4_size: string | null;
              /**
               * Size
               * @description Size of the media in bytes
               */
              size: string;
              /**
               * Url
               * @description Media URL
               */
              url: string;
              /**
               * Webp
               * @description WebP format URL
               * @default null
               */
              webp: string | null;
              /**
               * Webp Size
               * @description Size of WebP media in bytes
               * @default null
               */
              webp_size: string | null;
              /**
               * Width
               * @description Width of the media in pixels
               */
              width: string;
          };
      };
      /**
       * Import Datetime
       * @description Import datetime of the GIF in 'YYYY-MM-DD HH:MM:SS' format
       */
      import_datetime: string;
      /**
       * Is Sticker
       * @description Indicator if this GIF is a sticker (1) or not (0)
       */
      is_sticker: number;
      /**
       * Rating
       * @description Content rating for the GIF
       */
      rating: string;
      /**
       * Slug
       * @description Slugified title for the GIF URL
       */
      slug: string;
      /**
       * Source
       * @description Source URL for the GIF
       */
      source: string;
      /**
       * Source Post Url
       * @description Full source post URL
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top level domain of the source URL
       */
      source_tld: string;
      /**
       * Title
       * @description Title or alt text of the GIF
       */
      title: string;
      /**
       * Trending Datetime
       * @description Trending datetime of the GIF in 'YYYY-MM-DD HH:MM:SS' format
       */
      trending_datetime: string;
      /**
       * Type
       * @description Type of the Giphy object
       */
      type: string;
      /**
       * Url
       * @description URL for the GIF page on Giphy
       */
      url: string;
      /**
       * Username
       * @description Username of the GIF creator
       */
      username: string;
      /**
       * Variation Count
       * @description Number of style/skin-tone variations available
       */
      variation_count: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the API response
   */
  meta?: {
      /**
       * Msg
       * @description Message returned by the API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code of the response
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination details for this response
   */
  pagination?: {
      /**
       * Count
       * @description Number of items returned in the current page
       */
      count: number;
      /**
       * Offset
       * @description Zero-based offset of the current page
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available (may not be present in all responses)
       * @default null
       */
      total_count: number | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TAG_RELATED tool input.
 */
type GIPHY_GIPHY_TAG_RELATED_INPUT = {
  /**
   * Term
   * @description Tag term to find related tags.
   */
  term?: string;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TAG_RELATED tool output.
 */
type GIPHY_GIPHY_TAG_RELATED_OUTPUT = {
  /**
   * Data
   * @description Array of related tag terms.
   */
  data?: {
      /**
       * Name
       * @description Related tag term.
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
   * Meta
   * @description Response status and metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Human-readable message returned by the API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TAG_SEARCH tool input.
 */
type GIPHY_GIPHY_TAG_SEARCH_INPUT = {
  /**
   * Limit
   * @description Maximum number of tag suggestions to return; default is 5.
   * @default 5
   */
  limit: number;
  /**
   * Offset
   * @description Starting position of results; default is 0.
   * @default 0
   */
  offset: number;
  /**
   * Q
   * @description Tag term to autocomplete; search query for tag suggestions.
   */
  q?: string;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TAG_SEARCH tool output.
 */
type GIPHY_GIPHY_TAG_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Array of tag suggestion objects.
   */
  data?: {
      /**
       * Name
       * @description Name of the tag suggestion.
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
   * Meta
   * @description Metadata about the API response.
   */
  meta?: {
      /**
       * Msg
       * @description Message returned by GIPHY API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TAG_TRENDING tool input.
 */
type GIPHY_GIPHY_TAG_TRENDING_INPUT = object;

/**
 * Type of GIPHY's GIPHY_GIPHY_TAG_TRENDING tool output.
 */
type GIPHY_GIPHY_TAG_TRENDING_OUTPUT = {
  /**
   * Data
   * @description List of trending search terms
   */
  data?: string[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the API response
   */
  meta?: {
      /**
       * Msg
       * @description Human-readable message returned by GIPHY API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TRANSLATE_STICKER tool input.
 */
type GIPHY_GIPHY_TRANSLATE_STICKER_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 end-user country code; include if requests are proxied.
   * @default null
   */
  country_code: unknown;
  /**
   * Random Id
   * @description An ID or proxy for a specific user.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter results by rating; acceptable values: g, pg, pg-13, r.
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision code; include only if proxied and country_code is set.
   * @default null
   */
  region: unknown;
  /**
   * S
   * @description Term or phrase to translate into a sticker. Supports @username and #hashtag hints.
   */
  s?: string;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TRANSLATE_STICKER tool output.
 */
type GIPHY_GIPHY_TRANSLATE_STICKER_OUTPUT = {
  /**
   * Data
   * @description A single sticker object and its metadata as returned by GIPHY.
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
   * Meta
   * @description Response metadata including status and response ID.
   */
  meta?: {
      /**
       * Msg
       * @description Message accompanying the status code returned by GIPHY API.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API.
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TRENDING_STICKERS tool input.
 */
type GIPHY_GIPHY_TRENDING_STICKERS_INPUT = {
  /**
   * Bundle
   * @description Return only renditions for the named bundle.
   * @default null
   */
  bundle: string | null;
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user, uppercase.
   * @default null
   */
  country_code: string | null;
  /**
   * Limit
   * @description Maximum number of sticker GIFs to return. Defaults to 25.
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Starting position of results (zero-indexed). Defaults to 0. Maximum 499.
   * @default 0
   */
  offset: number;
  /**
   * Random Id
   * @description An optional unique user or session ID for A/B testing.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter results by content rating (g, pg, pg-13, r).
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision code; requires country_code to be set.
   * @default null
   */
  region: string | null;
  /**
   * Remove Low Contrast
   * @description Exclude low-contrast stickers from results.
   * @default null
   */
  remove_low_contrast: boolean | null;
};

/**
 * Type of GIPHY's GIPHY_GIPHY_TRENDING_STICKERS tool output.
 */
type GIPHY_GIPHY_TRENDING_STICKERS_OUTPUT = {
  /**
   * Data
   * @description List of trending sticker GIF objects.
   */
  data?: {
      /**
       * Analytics
       * @description Analytics URLs for GIF interactions.
       */
      analytics: {
          /**
           * Onclick
           * @description Analytics triggered on click.
           */
          onclick: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
          /**
           * Onload
           * @description Analytics triggered on load.
           */
          onload: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
          /**
           * Onsent
           * @description Analytics triggered on send.
           */
          onsent: {
              /**
               * Url
               * @description Analytics event URL.
               */
              url: string;
          };
      };
      /**
       * Analytics Response Payload
       * @description Payload to send in analytics requests.
       */
      analytics_response_payload: string;
      /**
       * Bitly Gif Url
       * @description Shortened URL for the GIF.
       */
      bitly_gif_url: string;
      /**
       * Bitly Url
       * @description Shortened URL for the GIF page.
       */
      bitly_url: string;
      /**
       * Content Url
       * @description URL for the raw content (if any).
       */
      content_url: string;
      /**
       * Embed Url
       * @description URL for embedding the GIF.
       */
      embed_url: string;
      /**
       * Id
       * @description Unique GIF identifier.
       */
      id: string;
      /**
       * Images
       * @description Dictionary of multiple image formats and metadata.
       */
      images: {
          [key: string]: {
              [key: string]: unknown;
          };
      };
      /**
       * Import Datetime
       * @description Datetime when GIF was added to GIPHY.
       */
      import_datetime: string;
      /**
       * Is Sticker
       * @description Indicator if GIF is a sticker (0 or 1).
       */
      is_sticker: number;
      /**
       * Rating
       * @description Content rating of the GIF.
       */
      rating: string;
      /**
       * Slug
       * @description Short human-readable identifier.
       */
      slug: string;
      /**
       * Source
       * @description Source URL of the GIF content.
       */
      source: string;
      /**
       * Source Post Url
       * @description Source post URL for the GIF.
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source.
       */
      source_tld: string;
      /**
       * Title
       * @description User-generated title of the GIF.
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when the GIF started trending.
       */
      trending_datetime: string;
      /**
       * Type
       * @description Media type, always 'gif'.
       */
      type: string;
      /**
       * Url
       * @description URL for the GIF page on GIPHY.
       */
      url: string;
      /**
       * Username
       * @description Username of the GIF uploader, if any.
       */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      /**
       * Msg
       * @description Message accompanying the status code.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code of the API response.
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information.
   */
  pagination?: {
      /**
       * Count
       * @description Number of items returned in this response.
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination (zero-indexed).
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_RANDOM_GIF tool input.
 */
type GIPHY_RANDOM_GIF_INPUT = {
  /**
   * Random Id
   * @description Unique ID/proxy for a specific user
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter by content rating; one of 'y','g','pg','pg-13','r'
   * @default null
   * @enum {string|null}
   */
  rating: "y" | "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Tag
   * @description Filter results by a tag; supports @username tagging
   * @default null
   */
  tag: string | null;
};

/**
 * Type of GIPHY's GIPHY_RANDOM_GIF tool output.
 */
type GIPHY_RANDOM_GIF_OUTPUT = {
  /**
   * Data
   * @description Random GIF object returned by Giphy
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
   * Meta
   * @description Response metadata from Giphy API
   */
  meta?: {
      /**
       * Msg
       * @description Response message from API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_RANDOM_STICKER tool input.
 */
type GIPHY_RANDOM_STICKER_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 code for end-user country
   * @default null
   */
  country_code: string | null;
  /**
   * Random Id
   * @description An ID/proxy for a specific user session
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter by content rating; one of 'g', 'pg', 'pg-13', 'r'
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 subdivision code; requires country_code to be set
   * @default null
   */
  region: string | null;
  /**
   * Tag
   * @description Filter results by a tag; supports @username tagging
   * @default null
   */
  tag: string | null;
};

/**
 * Type of GIPHY's GIPHY_RANDOM_STICKER tool output.
 */
type GIPHY_RANDOM_STICKER_OUTPUT = {
  /**
   * Data
   * @description Full sticker object returned by Giphy
   */
  data?: {
      /**
       * Alt Text
       * @description Alternate text for accessibility
       * @default null
       */
      alt_text: string | null;
      /**
       * Bitly Url
       * @description Shortened URL for the sticker page
       */
      bitly_url: string;
      /**
       * Content Url
       * @description URL for the raw content of the sticker
       */
      content_url: string;
      /**
       * Create Datetime
       * @description Datetime when the sticker was created
       */
      create_datetime: string;
      /**
       * Embed Url
       * @description URL for embedding the sticker
       */
      embed_url: string;
      /**
       * Id
       * @description Unique sticker identifier
       */
      id: string;
      /**
       * Images
       * @description Dictionary of multiple image renditions
       */
      images: {
          [key: string]: {
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: string;
              /**
               * Mp4
               * @description URL to the mp4 version
               * @default null
               */
              mp4: string | null;
              /**
               * Mp4 Size
               * @description Size of the mp4 in bytes
               * @default null
               */
              mp4_size: string | null;
              /**
               * Size
               * @description Size of the image in bytes
               * @default null
               */
              size: string | null;
              /**
               * Url
               * @description URL of the image rendition
               */
              url: string;
              /**
               * Webp
               * @description URL to the webp version
               * @default null
               */
              webp: string | null;
              /**
               * Webp Size
               * @description Size of the webp in bytes
               * @default null
               */
              webp_size: string | null;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: string;
          };
      };
      /**
       * Import Datetime
       * @description Datetime when the sticker was added to Giphy
       */
      import_datetime: string;
      /**
       * Is Low Contrast
       * @description Indicator if sticker is low contrast
       * @default null
       */
      is_low_contrast: boolean | null;
      /**
       * Rating
       * @description Content rating of the sticker
       */
      rating: string;
      /**
       * Slug
       * @description Short human-readable identifier
       */
      slug: string;
      /**
       * Source
       * @description Source URL of the sticker content
       */
      source: string;
      /**
       * Source Post Url
       * @description Source post URL for the sticker
       */
      source_post_url: string;
      /**
       * Source Tld
       * @description Top-level domain of the source
       */
      source_tld: string;
      /**
       * Title
       * @description User-generated title of the sticker
       */
      title: string;
      /**
       * Trending Datetime
       * @description Datetime when the sticker started trending
       */
      trending_datetime: string;
      /**
       * Type
       * @description Media type, e.g., 'sticker'
       */
      type: string;
      /**
       * Update Datetime
       * @description Datetime when the sticker was last updated
       */
      update_datetime: string;
      /**
       * Url
       * @description URL for the sticker page on Giphy
       */
      url: string;
      /**
       * Username
       * @description Username of the uploader, if any
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata
   */
  meta?: {
      /**
       * Msg
       * @description Response message
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description Response status code
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_SEARCH_GIFS tool input.
 */
type GIPHY_SEARCH_GIFS_INPUT = {
  /**
   * Bundle
   * @description Returns only renditions that correspond to the named bundle
   * @default null
   */
  bundle: string | null;
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country of the end user
   * @default null
   */
  country_code: string | null;
  /**
   * Fields
   * @description Comma-separated list of fields to return (Fields on Demand)
   * @default null
   */
  fields: string | null;
  /**
   * Lang
   * @description 2-letter ISO 639-1 code for regional content
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Max number of objects to return; default 25; beta keys max limit is 50
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Result starting position; default 0; maximum 4999
   * @default 0
   */
  offset: number;
  /**
   * Q
   * @description Search query term/phrase; @<username> searches a specific user’s GIFs. If contains 'sticker' returns stickers.
   */
  q?: string;
  /**
   * Random Id
   * @description ID/proxy for a specific user
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filters by rating; acceptable values: g, pg, pg-13, r
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 country subdivision; specify if proxied and country_code is proxied
   * @default null
   */
  region: string | null;
  /**
   * Remove Low Contrast
   * @description Exclude low-contrast items from results
   * @default null
   */
  remove_low_contrast: boolean | null;
};

/**
 * Type of GIPHY's GIPHY_SEARCH_GIFS tool output.
 */
type GIPHY_SEARCH_GIFS_OUTPUT = {
  /**
   * Data
   * @description Array of GIF objects matching the search query
   */
  data?: {
      /**
       * Alt Text
       * @default null
       */
      alt_text: string | null;
      /** Bitly Url */
      bitly_url: string;
      /** Content Url */
      content_url: string;
      /** Embed Url */
      embed_url: string;
      /** Id */
      id: string;
      /** Images */
      images: {
          [key: string]: {
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: string;
              /**
               * Mp4
               * @description URL to the mp4 version
               * @default null
               */
              mp4: string | null;
              /**
               * Mp4 Size
               * @description Size of the mp4 in bytes
               * @default null
               */
              mp4_size: string | null;
              /**
               * Size
               * @description Size of the image in bytes
               * @default null
               */
              size: string | null;
              /**
               * Url
               * @description URL of the image rendition
               */
              url: string;
              /**
               * Webp
               * @description URL to the webp version
               * @default null
               */
              webp: string | null;
              /**
               * Webp Size
               * @description Size of the webp in bytes
               * @default null
               */
              webp_size: string | null;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: string;
          };
      };
      /** Import Datetime */
      import_datetime: string;
      /**
       * Is Low Contrast
       * @default null
       */
      is_low_contrast: boolean | null;
      /** Rating */
      rating: string;
      /** Slug */
      slug: string;
      /** Source */
      source: string;
      /** Source Post Url */
      source_post_url: string;
      /** Source Tld */
      source_tld: string;
      /** Title */
      title: string;
      /** Trending Datetime */
      trending_datetime: string;
      /** Type */
      type: string;
      /** Url */
      url: string;
      /** Username */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the API response
   */
  meta?: {
      /**
       * Msg
       * @description Message returned by GIPHY API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information for the result set
   */
  pagination?: {
      /**
       * Count
       * @description Number of results returned in this response
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of results for this query
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_SEARCH_STICKERS tool input.
 */
type GIPHY_SEARCH_STICKERS_INPUT = {
  /**
   * Bundle
   * @description Returns only renditions that correspond to the named bundle
   * @default null
   */
  bundle: string | null;
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country of the end user
   * @default null
   */
  country_code: string | null;
  /**
   * Lang
   * @description 2-letter ISO 639-1 code for regional content
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Max number of items to return; default 25; beta keys max limit is 50
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Result starting position; default 0; maximum 4999
   * @default 0
   */
  offset: number;
  /**
   * Q
   * @description Search query term/phrase for stickers; returns matching sticker items.
   */
  q?: string;
  /**
   * Random Id
   * @description An ID/proxy for a specific user
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filters by rating; acceptable values: g, pg, pg-13, r
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description ISO 3166-2 country subdivision; specify if proxied and country_code is proxied
   * @default null
   */
  region: string | null;
  /**
   * Remove Low Contrast
   * @description Exclude low-contrast items from results
   * @default null
   */
  remove_low_contrast: boolean | null;
};

/**
 * Type of GIPHY's GIPHY_SEARCH_STICKERS tool output.
 */
type GIPHY_SEARCH_STICKERS_OUTPUT = {
  /**
   * Data
   * @description Array of sticker GIF objects matching the search query
   */
  data?: {
      /**
       * Alt Text
       * @default null
       */
      alt_text: string | null;
      /** Bitly Url */
      bitly_url: string;
      /** Content Url */
      content_url: string;
      /** Embed Url */
      embed_url: string;
      /** Id */
      id: string;
      /** Images */
      images: {
          [key: string]: {
              /**
               * Height
               * @description Height of the image in pixels
               */
              height: string;
              /**
               * Mp4
               * @description URL to the mp4 version
               * @default null
               */
              mp4: string | null;
              /**
               * Mp4 Size
               * @description Size of the mp4 in bytes
               * @default null
               */
              mp4_size: string | null;
              /**
               * Size
               * @description Size of the image in bytes
               * @default null
               */
              size: string | null;
              /**
               * Url
               * @description URL of the image rendition
               */
              url: string;
              /**
               * Webp
               * @description URL to the webp version
               * @default null
               */
              webp: string | null;
              /**
               * Webp Size
               * @description Size of the webp in bytes
               * @default null
               */
              webp_size: string | null;
              /**
               * Width
               * @description Width of the image in pixels
               */
              width: string;
          };
      };
      /** Import Datetime */
      import_datetime: string;
      /**
       * Is Low Contrast
       * @default null
       */
      is_low_contrast: boolean | null;
      /** Rating */
      rating: string;
      /** Slug */
      slug: string;
      /** Source */
      source: string;
      /** Source Post Url */
      source_post_url: string;
      /** Source Tld */
      source_tld: string;
      /** Title */
      title: string;
      /** Trending Datetime */
      trending_datetime: string;
      /** Type */
      type: string;
      /** Url */
      url: string;
      /** Username */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the API response
   */
  meta?: {
      /**
       * Msg
       * @description Message returned by GIPHY API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information for the result set
   */
  pagination?: {
      /**
       * Count
       * @description Number of results returned in this response
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of results for this query
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_TAG_RANDOM tool input.
 */
type GIPHY_TAG_RANDOM_INPUT = {
  /**
   * Random Id
   * @description Unique ID/proxy for a specific user session
   * @default null
   */
  random_id: string | null;
  /**
   * Tag
   * @description Filter results by a search term for the tag
   * @default null
   */
  tag: string | null;
};

/**
 * Type of GIPHY's GIPHY_TAG_RANDOM tool output.
 */
type GIPHY_TAG_RANDOM_OUTPUT = {
  /**
   * Data
   * @description Random tag object returned by GIPHY
   */
  data?: {
      /**
       * Name
       * @description Name of the tag
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
   * Meta
   * @description Response metadata from GIPHY API
   */
  meta?: {
      /**
       * Msg
       * @description Message returned by GIPHY API
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_TRENDING_GIFS tool input.
 */
type GIPHY_TRENDING_GIFS_INPUT = {
  /**
   * Bundle
   * @description Restrict renditions to the specified bundle (e.g., 'messaging_non_clips').
   * @default null
   */
  bundle: string | null;
  /**
   * Country Code
   * @description End user's country code (ISO 3166-1 alpha-2).
   * @default null
   */
  country_code: string | null;
  /**
   * Limit
   * @description Maximum number of GIFs to return (1-499).
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Starting position of results (0-499).
   * @default 0
   */
  offset: number;
  /**
   * Random Id
   * @description An ID/proxy string to identify the user session.
   * @default null
   */
  random_id: string | null;
  /**
   * Rating
   * @description Filter results by GIF rating. One of 'g', 'pg', 'pg-13', 'r'.
   * @default null
   * @enum {string|null}
   */
  rating: "g" | "pg" | "pg-13" | "r" | null;
  /**
   * Region
   * @description End user's region code (ISO 3166-2).
   * @default null
   */
  region: string | null;
  /**
   * Remove Low Contrast
   * @description Whether to exclude low-contrast GIFs.
   * @default false
   */
  remove_low_contrast: boolean;
};

/**
 * Type of GIPHY's GIPHY_TRENDING_GIFS tool output.
 */
type GIPHY_TRENDING_GIFS_OUTPUT = {
  /**
   * Data
   * @description A list of GIF objects as returned by the GIPHY API.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Meta information about the API response.
   */
  meta?: {
      /**
       * Msg
       * @description Message accompanying the status code.
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response.
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code returned by GIPHY API.
       */
      status: number;
  };
  /**
   * Pagination
   * @description Pagination information for the returned GIFs.
   */
  pagination?: {
      /**
       * Count
       * @description Number of results returned in this response.
       */
      count: number;
      /**
       * Offset
       * @description Position in pagination this response starts from.
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of results available.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIPHY's GIPHY_UPLOAD_GIF tool input.
 */
type GIPHY_UPLOAD_GIF_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 alpha-2 country code of the end user.
   * @default null
   */
  country_code: string | null;
  /**
   * File
   * Format: binary
   * @description Binary data of the animated GIF or video file. Required if source_image_url is not provided.
   * @default null
   */
  file: string | null;
  /**
   * Region
   * @description ISO 3166-2 country subdivision code; requires country_code.
   * @default null
   */
  region: string | null;
  /**
   * Source Image Url
   * @description Public URL of the image or video to upload. Required if file is not provided.
   * @default null
   */
  source_image_url: string | null;
  /**
   * Source Post Url
   * @description URL of the source page for the asset.
   * @default null
   */
  source_post_url: string | null;
  /**
   * Tags
   * @description Comma-delimited list of tags to apply to the upload.
   * @default null
   */
  tags: string | null;
};

/**
 * Type of GIPHY's GIPHY_UPLOAD_GIF tool output.
 */
type GIPHY_UPLOAD_GIF_OUTPUT = {
  /**
   * Data
   * @description Uploaded GIF data
   */
  data?: {
      /**
       * Id
       * @description The ID of the newly created GIF on GIPHY
       */
      id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata
   */
  meta?: {
      /**
       * Msg
       * @description HTTP response message, e.g., 'OK'
       */
      msg: string;
      /**
       * Response Id
       * @description Unique ID for this API response
       */
      response_id: string;
      /**
       * Status
       * @description HTTP status code, e.g., 200
       */
      status: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GIPHY".
 */
export type GIPHY_TOOL_INPUTS = {
  ACTION_REGISTER: GIPHY_ACTION_REGISTER_INPUT
  EMOJI_VARIATIONS: GIPHY_EMOJI_VARIATIONS_INPUT
  GET_GIFS_BY_IDS: GIPHY_GET_GIFS_BY_IDS_INPUT
  GET_GIF_BY_ID: GIPHY_GET_GIF_BY_ID_INPUT
  GET_STICKERS_BY_IDS: GIPHY_GET_STICKERS_BY_IDS_INPUT
  GET_STICKER_BY_ID: GIPHY_GET_STICKER_BY_ID_INPUT
  GIPHY_CATEGORIES: GIPHY_GIPHY_CATEGORIES_INPUT
  GIPHY_CATEGORY_BY_ID: GIPHY_GIPHY_CATEGORY_BY_ID_INPUT
  GIPHY_CATEGORY_GIFS: GIPHY_GIPHY_CATEGORY_GIFS_INPUT
  GIPHY_EMOJI: GIPHY_GIPHY_EMOJI_INPUT
  GIPHY_TAG_RELATED: GIPHY_GIPHY_TAG_RELATED_INPUT
  GIPHY_TAG_SEARCH: GIPHY_GIPHY_TAG_SEARCH_INPUT
  GIPHY_TAG_TRENDING: GIPHY_GIPHY_TAG_TRENDING_INPUT
  GIPHY_TRANSLATE_STICKER: GIPHY_GIPHY_TRANSLATE_STICKER_INPUT
  GIPHY_TRENDING_STICKERS: GIPHY_GIPHY_TRENDING_STICKERS_INPUT
  RANDOM_GIF: GIPHY_RANDOM_GIF_INPUT
  RANDOM_STICKER: GIPHY_RANDOM_STICKER_INPUT
  SEARCH_GIFS: GIPHY_SEARCH_GIFS_INPUT
  SEARCH_STICKERS: GIPHY_SEARCH_STICKERS_INPUT
  TAG_RANDOM: GIPHY_TAG_RANDOM_INPUT
  TRENDING_GIFS: GIPHY_TRENDING_GIFS_INPUT
  UPLOAD_GIF: GIPHY_UPLOAD_GIF_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GIPHY".
 */
export type GIPHY_TOOL_OUTPUTS = {
  ACTION_REGISTER: GIPHY_ACTION_REGISTER_OUTPUT
  EMOJI_VARIATIONS: GIPHY_EMOJI_VARIATIONS_OUTPUT
  GET_GIFS_BY_IDS: GIPHY_GET_GIFS_BY_IDS_OUTPUT
  GET_GIF_BY_ID: GIPHY_GET_GIF_BY_ID_OUTPUT
  GET_STICKERS_BY_IDS: GIPHY_GET_STICKERS_BY_IDS_OUTPUT
  GET_STICKER_BY_ID: GIPHY_GET_STICKER_BY_ID_OUTPUT
  GIPHY_CATEGORIES: GIPHY_GIPHY_CATEGORIES_OUTPUT
  GIPHY_CATEGORY_BY_ID: GIPHY_GIPHY_CATEGORY_BY_ID_OUTPUT
  GIPHY_CATEGORY_GIFS: GIPHY_GIPHY_CATEGORY_GIFS_OUTPUT
  GIPHY_EMOJI: GIPHY_GIPHY_EMOJI_OUTPUT
  GIPHY_TAG_RELATED: GIPHY_GIPHY_TAG_RELATED_OUTPUT
  GIPHY_TAG_SEARCH: GIPHY_GIPHY_TAG_SEARCH_OUTPUT
  GIPHY_TAG_TRENDING: GIPHY_GIPHY_TAG_TRENDING_OUTPUT
  GIPHY_TRANSLATE_STICKER: GIPHY_GIPHY_TRANSLATE_STICKER_OUTPUT
  GIPHY_TRENDING_STICKERS: GIPHY_GIPHY_TRENDING_STICKERS_OUTPUT
  RANDOM_GIF: GIPHY_RANDOM_GIF_OUTPUT
  RANDOM_STICKER: GIPHY_RANDOM_STICKER_OUTPUT
  SEARCH_GIFS: GIPHY_SEARCH_GIFS_OUTPUT
  SEARCH_STICKERS: GIPHY_SEARCH_STICKERS_OUTPUT
  TAG_RANDOM: GIPHY_TAG_RANDOM_OUTPUT
  TRENDING_GIFS: GIPHY_TRENDING_GIFS_OUTPUT
  UPLOAD_GIF: GIPHY_UPLOAD_GIF_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GIPHY toolkit.
 */
export const GIPHY = {
  slug: "giphy",
  tools: {
    /**
     * Tool to register user interactions (view, click, send) with a GIF for analytics. Use when you have the analytics payload, timestamp, and user ID to record the event.
     */
    ACTION_REGISTER: "GIPHY_ACTION_REGISTER",
    /**
     * Tool to fetch variations for a specific emoji. Use when you have an emoji's GIF ID and want its variations.
     */
    EMOJI_VARIATIONS: "GIPHY_EMOJI_VARIATIONS",
    /**
     * Tool to fetch metadata for multiple GIFs by their IDs. Use when you need information on up to 100 known GIF IDs.
     */
    GET_GIFS_BY_IDS: "GIPHY_GET_GIFS_BY_IDS",
    /**
     * Tool to fetch GIF metadata by its unique ID. Use when you have a valid GIF ID to retrieve metadata.
     */
    GET_GIF_BY_ID: "GIPHY_GET_GIF_BY_ID",
    /**
     * Tool to fetch metadata for multiple stickers by their IDs. Use when you need information on up to 100 known sticker IDs.
     */
    GET_STICKERS_BY_IDS: "GIPHY_GET_STICKERS_BY_IDS",
    /**
     * Tool to fetch sticker metadata by its unique ID. Use when you have a valid sticker ID to retrieve metadata.
     */
    GET_STICKER_BY_ID: "GIPHY_GET_STICKER_BY_ID",
    /**
     * Tool to fetch a list of GIF categories on GIPHY. Use when you need to browse available categories before selecting one.
     */
    GIPHY_CATEGORIES: "GIPHY_GIPHY_CATEGORIES",
    /**
     * Tool to fetch metadata for a GIF category by its unique ID. Use when you need details for a specific category identifier.
     */
    GIPHY_CATEGORY_BY_ID: "GIPHY_GIPHY_CATEGORY_BY_ID",
    /**
     * Tool to fetch GIFs associated with a specific GIF category. Use after retrieving category_id from the categories endpoint to get curated GIFs.
     */
    GIPHY_CATEGORY_GIFS: "GIPHY_GIPHY_CATEGORY_GIFS",
    /**
     * Tool to fetch GIPHY emoji GIF objects. Use when you need a paginated list of GIPHY emojis.
     */
    GIPHY_EMOJI: "GIPHY_GIPHY_EMOJI",
    /**
     * Tool to fetch tags related to a specified tag. Use when you want to find semantically related tags for improved search suggestion.
     */
    GIPHY_TAG_RELATED: "GIPHY_GIPHY_TAG_RELATED",
    /**
     * Tool to search GIPHY's tag library for autocomplete suggestions. Use when you need to generate tag suggestions for a user query.
     */
    GIPHY_TAG_SEARCH: "GIPHY_GIPHY_TAG_SEARCH",
    /**
     * Tool to fetch the most popular search terms (tags) on GIPHY. Use when you need trending tags for content discovery.
     */
    GIPHY_TAG_TRENDING: "GIPHY_GIPHY_TAG_TRENDING",
    /**
     * Tool to translate a term or phrase into a single sticker using GIPHY’s translation algorithm. Use after confirming the exact phrase to visualize as a sticker.
     */
    GIPHY_TRANSLATE_STICKER: "GIPHY_GIPHY_TRANSLATE_STICKER",
    /**
     * Tool to fetch trending stickers. Use when you need the most relevant and engaging sticker GIFs currently trending.
     */
    GIPHY_TRENDING_STICKERS: "GIPHY_GIPHY_TRENDING_STICKERS",
    /**
     * Tool to fetch a random GIF from Giphy. Use when you need a single random GIF, optionally filtered by tag or rating. Example: 'Get a random cat GIF rated G.'
     */
    RANDOM_GIF: "GIPHY_RANDOM_GIF",
    /**
     * Tool to fetch a single random sticker. Use when you need a random sticker, optionally filtered by tag or rating.
     */
    RANDOM_STICKER: "GIPHY_RANDOM_STICKER",
    /**
     * Tool to search GIPHY's GIF library. Use when you need to find GIFs by keyword or phrase.
     */
    SEARCH_GIFS: "GIPHY_SEARCH_GIFS",
    /**
     * Tool to search GIPHY's sticker library. Use when you need to find stickers by keyword or phrase.
     */
    SEARCH_STICKERS: "GIPHY_SEARCH_STICKERS",
    /**
     * Tool to fetch a single random tag from Giphy. Use when you need a random search term tag, optionally filtered by a query term.
     */
    TAG_RANDOM: "GIPHY_TAG_RANDOM",
    /**
     * Tool to fetch trending GIFs from GIPHY. Use when you need the most relevant and engaging GIFs currently trending.
     */
    TRENDING_GIFS: "GIPHY_TRENDING_GIFS",
    /**
     * Tool to upload a GIF or video file to GIPHY. Use when you need to create a new GIPHY entry from a local file or public URL. Requires developer API key and supports optional metadata.
     */
    UPLOAD_GIF: "GIPHY_UPLOAD_GIF",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GIPHY".
 */
export type GIPHY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GIPHY".
 */
export type GIPHY_TRIGGER_EVENTS = {}
