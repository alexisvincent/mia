// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RITEKIT's RITEKIT_AUTO_HASHTAG tool input.
 */
type RITEKIT_AUTO_HASHTAG_INPUT = {
  /**
   * Hashtag Position
   * @description Position of hashtags: 'auto' to insert in context, 'end' to append at end (default is 'auto')
   * @default null
   * @enum {string|null}
   */
  hashtagPosition: "auto" | "end" | null;
  /**
   * Max Hashtags
   * @description Maximum number of hashtags to add (default is 2)
   * @default null
   */
  maxHashtags: number | null;
  /**
   * Post
   * @description Text of the post to add hashtags to
   */
  post?: string;
};

/**
 * Type of RITEKIT's RITEKIT_AUTO_HASHTAG tool output.
 */
type RITEKIT_AUTO_HASHTAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Text
       * @description Post text with relevant hashtags inserted
       */
      text: string;
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
 * Type of RITEKIT's RITEKIT_BANNED_INSTAGRAM_HASHTAGS tool input.
 */
type RITEKIT_BANNED_INSTAGRAM_HASHTAGS_INPUT = {
  /**
   * Access Token
   * @description RiteKit OAuth2 access token passed as 'access_token' query parameter
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description RiteKit API client ID passed as 'client_id' query parameter (alternative to access_token)
   * @default null
   */
  client_id: string | null;
  /**
   * Tags
   * @description List of hashtags to check (without the leading '#'), 1-100 items
   */
  tags?: string[];
};

/**
 * Type of RITEKIT's RITEKIT_BANNED_INSTAGRAM_HASHTAGS tool output.
 */
type RITEKIT_BANNED_INSTAGRAM_HASHTAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Banned Hashtags
       * @description List of hashtags banned on Instagram
       */
      banned_hashtags: string[];
      /**
       * Not Banned Hashtags
       * @description List of hashtags not banned on Instagram
       */
      not_banned_hashtags: string[];
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
 * Type of RITEKIT's RITEKIT_DISPOSABLE_EMAIL_DETECTION tool input.
 */
type RITEKIT_DISPOSABLE_EMAIL_DETECTION_INPUT = {
  /**
   * Client Id
   * @description Your RiteKit API client ID; must be passed as 'client_id' query parameter
   */
  client_id?: string;
  /**
   * Email
   * @description Email address to check for disposability
   */
  email?: string;
};

/**
 * Type of RITEKIT's RITEKIT_DISPOSABLE_EMAIL_DETECTION tool output.
 */
type RITEKIT_DISPOSABLE_EMAIL_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Disposable
       * @description True if the email address is recognized as disposable
       */
      disposable: boolean;
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
 * Type of RITEKIT's RITEKIT_FREEMAIL_DETECTION tool input.
 */
type RITEKIT_FREEMAIL_DETECTION_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to check for free-email provider
   */
  email?: unknown;
};

/**
 * Type of RITEKIT's RITEKIT_FREEMAIL_DETECTION tool output.
 */
type RITEKIT_FREEMAIL_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Freemail
       * @description True if email is from a recognized free email provider
       */
      freemail: boolean;
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
 * Type of RITEKIT's RITEKIT_GET_ACCESS_TOKEN tool input.
 */
type RITEKIT_GET_ACCESS_TOKEN_INPUT = {
  /**
   * Access Token
   * @description Optional access token. If provided, the action will return this token without making a network request.
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description Optional RiteKit API client ID.
   * @default null
   */
  client_id: string | null;
  /**
   * Client Secret
   * @description Optional RiteKit API client secret.
   * @default null
   */
  client_secret: string | null;
};

/**
 * Type of RITEKIT's RITEKIT_GET_ACCESS_TOKEN tool output.
 */
type RITEKIT_GET_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Access token for subsequent RiteKit API requests
       */
      access_token: string;
      /**
       * Expires In
       * @description Lifetime in seconds of the access token (if provided by API)
       * @default null
       */
      expires_in: number | null;
      /**
       * Scope
       * @description Scopes granted by the access token, if any
       * @default null
       */
      scope: string | null;
      /**
       * Token Type
       * @description Type of token returned, typically 'Bearer'
       * @default null
       */
      token_type: string | null;
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
 * Type of RITEKIT's RITEKIT_GET_CLIENT_ID tool input.
 */
type RITEKIT_GET_CLIENT_ID_INPUT = {
  /**
   * Client Id
   * @description Optional RiteKit API client ID. If not provided, the action attempts to read from connection metadata using keys: 'client_id', 'clientId', or 'client-id'.
   * @default null
   */
  client_id: string | null;
};

/**
 * Type of RITEKIT's RITEKIT_GET_CLIENT_ID tool output.
 */
type RITEKIT_GET_CLIENT_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Id
       * @description Stored RiteKit client_id from the app connection metadata or request
       */
      client_id: string;
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
 * Type of RITEKIT's RITEKIT_GET_CLIENT_SECRET tool input.
 */
type RITEKIT_GET_CLIENT_SECRET_INPUT = {
  /**
   * Client Secret
   * @description Optional RiteKit API client secret. If not provided, the action attempts to read from connection metadata using keys: 'client_secret', 'clientSecret', or 'client-secret'.
   * @default null
   */
  client_secret: string | null;
};

/**
 * Type of RITEKIT's RITEKIT_GET_CLIENT_SECRET tool output.
 */
type RITEKIT_GET_CLIENT_SECRET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Secret
       * @description Stored RiteKit client_secret from the app connection metadata or request
       */
      client_secret: string;
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
 * Type of RITEKIT's RITEKIT_HASHTAG_STATS tool input.
 */
type RITEKIT_HASHTAG_STATS_INPUT = {
  /**
   * Access Token
   * @description Optional RiteKit API token; will be sent as 'access_token' (and 'token') query parameter
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description Optional RiteKit client_id; preferred auth for most endpoints
   * @default null
   */
  client_id: string | null;
  /**
   * Tags
   * @description List of hashtags to analyze (1-100 items)
   */
  tags?: string[];
};

/**
 * Type of RITEKIT's RITEKIT_HASHTAG_STATS tool output.
 */
type RITEKIT_HASHTAG_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description Statistics for requested hashtags.
       */
      stats: {
          /**
           * Color
           * @description Popularity/quality grade code. 0=Unused, 1=Overused, 2=Good, 3=Great, 4=Good for Instagram only, 5=Banned on Instagram
           */
          color: number;
          /**
           * Exposure
           * @description Average impressions per hour for tweets with the hashtag.
           */
          exposure: number;
          /**
           * Hashtag
           * @description The hashtag analyzed.
           */
          hashtag: string;
          /**
           * Images
           * @description Share of tweets/hour containing images (percentage).
           */
          images: number;
          /**
           * Links
           * @description Share of tweets/hour containing URLs (percentage).
           */
          links: number;
          /**
           * Mentions
           * @description Share of tweets/hour containing @mentions (percentage).
           */
          mentions: number;
          /**
           * Retweets
           * @description Average retweets per hour containing the hashtag.
           */
          retweets: number;
          /**
           * Tweets
           * @description Average unique tweets per hour containing the hashtag.
           */
          tweets: number;
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
 * Type of RITEKIT's RITEKIT_HASHTAG_SUGGESTIONS tool input.
 */
type RITEKIT_HASHTAG_SUGGESTIONS_INPUT = {
  /**
   * Access Token
   * @description OAuth2 access token; required if client_id is not provided
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description Client ID for authentication; required if access_token is not provided
   * @default null
   */
  client_id: string | null;
  /**
   * Text
   * @description Input text or single word (1–1000 characters) to get hashtag suggestions
   */
  text?: string;
};

/**
 * Type of RITEKIT's RITEKIT_HASHTAG_SUGGESTIONS tool output.
 */
type RITEKIT_HASHTAG_SUGGESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of suggested hashtags with scores
       */
      suggestions: {
          /**
           * Score
           * @description Relevance score for the hashtag suggestion
           */
          score: number;
          /**
           * Tag
           * @description Suggested hashtag including leading #
           */
          tag: string;
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
 * Type of RITEKIT's RITEKIT_LINK_AD_DELETE tool input.
 */
type RITEKIT_LINK_AD_DELETE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the link ad to delete
   */
  id?: string;
};

/**
 * Type of RITEKIT's RITEKIT_LINK_AD_DELETE tool output.
 */
type RITEKIT_LINK_AD_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the deletion was successful
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
 * Type of RITEKIT's RITEKIT_LIST_LINK_ADS tool input.
 */
type RITEKIT_LIST_LINK_ADS_INPUT = {
  /**
   * Access Token
   * @description OAuth2 access token; optional if using client_id
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description RiteKit API client ID; optional if using OAuth access_token
   * @default null
   */
  client_id: string | null;
};

/**
 * Type of RITEKIT's RITEKIT_LIST_LINK_ADS tool output.
 */
type RITEKIT_LIST_LINK_ADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Link Ads
       * @description List of link ads for the authenticated user
       */
      link_ads: {
          /**
           * Code
           * @description Short code or identifier
           * @default null
           */
          code: string | null;
          /**
           * Default
           * @description Whether this is the default ad (1 or 0)
           * @default null
           */
          default: number | null;
          /**
           * Id
           * @description Unique identifier of the link ad
           */
          id: string | null;
          /**
           * Name
           * @description Display name of the link ad
           * @default null
           */
          name: string | null;
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
 * Type of RITEKIT's RITEKIT_RITEKIT_AUTO_HASHTAG tool input.
 */
type RITEKIT_RITEKIT_AUTO_HASHTAG_INPUT = {
  /**
   * Access Token
   * @description OAuth2 access token; optional if using client_id
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description RiteKit API client ID; optional if using OAuth
   * @default null
   */
  client_id: string | null;
  /**
   * Hashtag Position
   * @description Where to place hashtags: 'auto' to insert anywhere, 'end' to append at end, defaults to 'auto'
   * @default null
   * @enum {string|null}
   */
  hashtagPosition: "auto" | "end" | null;
  /**
   * Max Hashtags
   * @description Maximum number of hashtags to add, defaults to 2 if not specified
   * @default null
   */
  maxHashtags: number | null;
  /**
   * Post
   * @description Text of the post to add hashtags to
   */
  post?: string;
};

/**
 * Type of RITEKIT's RITEKIT_RITEKIT_AUTO_HASHTAG tool output.
 */
type RITEKIT_RITEKIT_AUTO_HASHTAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Text
       * @description Post text with relevant hashtags inserted
       */
      text: string;
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
 * Type of RITEKIT's RITEKIT_RITEKIT_GET_ACCESS_TOKEN tool input.
 */
type RITEKIT_RITEKIT_GET_ACCESS_TOKEN_INPUT = {
  /**
   * Access Token
   * @description Optional access token. If provided, the action will return this token without making a network request.
   * @default null
   */
  access_token: string | null;
  /**
   * Client Id
   * @description RiteKit API client ID
   */
  client_id?: string;
  /**
   * Client Secret
   * @description RiteKit API client secret
   */
  client_secret?: string;
};

/**
 * Type of RITEKIT's RITEKIT_RITEKIT_GET_ACCESS_TOKEN tool output.
 */
type RITEKIT_RITEKIT_GET_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Access token for subsequent API calls
       */
      access_token: string;
      /**
       * Expires In
       * @description Lifetime in seconds if provided by API
       * @default null
       */
      expires_in: number | null;
      /**
       * Token Type
       * @description Token type if available
       * @default Bearer
       */
      token_type: string | null;
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
 * Type of RITEKIT's RITEKIT_SHORTEN_LINK tool input.
 */
type RITEKIT_SHORTEN_LINK_INPUT = {
  /**
   * Cta
   * @description ID of the call-to-action to attach to the shortened link
   */
  cta?: number;
  /**
   * Url
   * Format: uri
   * @description URL to be shortened
   */
  url?: string;
};

/**
 * Type of RITEKIT's RITEKIT_SHORTEN_LINK tool output.
 */
type RITEKIT_SHORTEN_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Short Url
       * Format: uri
       * @description Generated shortened URL with the specified CTA
       */
      short_url: string;
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
 * Type of RITEKIT's RITEKIT_TEXT_TO_IMAGE tool input.
 */
type RITEKIT_TEXT_TO_IMAGE_INPUT = {
  /**
   * Animation
   * @description Animation effect: none, rays, glint, or circle
   * @default null
   * @enum {string|null}
   */
  animation: "none" | "rays" | "glint" | "circle" | null;
  /**
   * Author
   * @description Name of the author or source of the quote
   * @default null
   */
  author: string | null;
  /**
   * Author Font
   * @description Font family for the author text
   * @default null
   */
  authorFont: string | null;
  /**
   * Author Font Color
   * @description Color (hex or name) for the author text
   * @default null
   */
  authorFontColor: string | null;
  /**
   * Background Color
   * @description Background color for solid type
   * @default null
   */
  backgroundColor: string | null;
  /**
   * Bg Type
   * @description Background type: 'solid' or 'gradient'
   * @default null
   * @enum {string|null}
   */
  bgType: "solid" | "gradient" | null;
  /**
   * Brand Logo
   * @description URL of a brand logo to include
   * @default null
   */
  brandLogo: string | null;
  /**
   * Client Id
   * @description Optional RiteKit API client ID. If not provided, the action attempts to read from connection metadata
   * @default null
   */
  client_id: string | null;
  /**
   * Enable Highlight
   * @description Highlight behind quote text (1 = yes, 0 = no)
   * @default null
   * @enum {integer|null}
   */
  enableHighlight: 0 | 1 | null;
  /**
   * Font Size
   * @description Font size for the quote text (px, between 8 and 144)
   * @default null
   */
  fontSize: number | null;
  /**
   * Gradient Color1
   * @description First color for gradient background
   * @default null
   */
  gradientColor1: string | null;
  /**
   * Gradient Color2
   * @description Second color for gradient background
   * @default null
   */
  gradientColor2: string | null;
  /**
   * Gradient Type
   * @description Gradient type when bgType is 'gradient'
   * @default null
   * @enum {string|null}
   */
  gradientType: "linear" | "radial" | null;
  /**
   * Highlight Color
   * @description Color (hex or name) for highlight
   * @default null
   */
  highlightColor: string | null;
  /**
   * Quote
   * @description Text of the quote to render as an image
   */
  quote?: string;
  /**
   * Quote Font
   * @description Font family for the quote text
   * @default null
   */
  quoteFont: string | null;
  /**
   * Quote Font Color
   * @description Color (hex or name) for the quote text
   * @default null
   */
  quoteFontColor: string | null;
  /**
   * Show Quote Mark
   * @description Display quote mark (1 = yes, 0 = no)
   * @default null
   * @enum {integer|null}
   */
  showQuoteMark: 0 | 1 | null;
};

/**
 * Type of RITEKIT's RITEKIT_TEXT_TO_IMAGE tool output.
 */
type RITEKIT_TEXT_TO_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description URL of the generated image
       */
      url: string;
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
 * Type map of all available tool input types for toolkit "RITEKIT".
 */
export type RITEKIT_TOOL_INPUTS = {
  AUTO_HASHTAG: RITEKIT_AUTO_HASHTAG_INPUT
  BANNED_INSTAGRAM_HASHTAGS: RITEKIT_BANNED_INSTAGRAM_HASHTAGS_INPUT
  DISPOSABLE_EMAIL_DETECTION: RITEKIT_DISPOSABLE_EMAIL_DETECTION_INPUT
  FREEMAIL_DETECTION: RITEKIT_FREEMAIL_DETECTION_INPUT
  GET_ACCESS_TOKEN: RITEKIT_GET_ACCESS_TOKEN_INPUT
  GET_CLIENT_ID: RITEKIT_GET_CLIENT_ID_INPUT
  GET_CLIENT_SECRET: RITEKIT_GET_CLIENT_SECRET_INPUT
  HASHTAG_STATS: RITEKIT_HASHTAG_STATS_INPUT
  HASHTAG_SUGGESTIONS: RITEKIT_HASHTAG_SUGGESTIONS_INPUT
  LINK_AD_DELETE: RITEKIT_LINK_AD_DELETE_INPUT
  LIST_LINK_ADS: RITEKIT_LIST_LINK_ADS_INPUT
  RITEKIT_AUTO_HASHTAG: RITEKIT_RITEKIT_AUTO_HASHTAG_INPUT
  RITEKIT_GET_ACCESS_TOKEN: RITEKIT_RITEKIT_GET_ACCESS_TOKEN_INPUT
  SHORTEN_LINK: RITEKIT_SHORTEN_LINK_INPUT
  TEXT_TO_IMAGE: RITEKIT_TEXT_TO_IMAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RITEKIT".
 */
export type RITEKIT_TOOL_OUTPUTS = {
  AUTO_HASHTAG: RITEKIT_AUTO_HASHTAG_OUTPUT
  BANNED_INSTAGRAM_HASHTAGS: RITEKIT_BANNED_INSTAGRAM_HASHTAGS_OUTPUT
  DISPOSABLE_EMAIL_DETECTION: RITEKIT_DISPOSABLE_EMAIL_DETECTION_OUTPUT
  FREEMAIL_DETECTION: RITEKIT_FREEMAIL_DETECTION_OUTPUT
  GET_ACCESS_TOKEN: RITEKIT_GET_ACCESS_TOKEN_OUTPUT
  GET_CLIENT_ID: RITEKIT_GET_CLIENT_ID_OUTPUT
  GET_CLIENT_SECRET: RITEKIT_GET_CLIENT_SECRET_OUTPUT
  HASHTAG_STATS: RITEKIT_HASHTAG_STATS_OUTPUT
  HASHTAG_SUGGESTIONS: RITEKIT_HASHTAG_SUGGESTIONS_OUTPUT
  LINK_AD_DELETE: RITEKIT_LINK_AD_DELETE_OUTPUT
  LIST_LINK_ADS: RITEKIT_LIST_LINK_ADS_OUTPUT
  RITEKIT_AUTO_HASHTAG: RITEKIT_RITEKIT_AUTO_HASHTAG_OUTPUT
  RITEKIT_GET_ACCESS_TOKEN: RITEKIT_RITEKIT_GET_ACCESS_TOKEN_OUTPUT
  SHORTEN_LINK: RITEKIT_SHORTEN_LINK_OUTPUT
  TEXT_TO_IMAGE: RITEKIT_TEXT_TO_IMAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RITEKIT toolkit.
 */
export const RITEKIT = {
  slug: "ritekit",
  tools: {
    /**
     * Tool to automatically add relevant hashtags to a given post. use when you have plain text and need suggested hashtags appended or inserted in context.
     */
    AUTO_HASHTAG: "RITEKIT_AUTO_HASHTAG",
    /**
     * Tool to identify which hashtags are banned on instagram. use when preparing content and need to filter out banned hashtags before posting.
     */
    BANNED_INSTAGRAM_HASHTAGS: "RITEKIT_BANNED_INSTAGRAM_HASHTAGS",
    /**
     * Tool to detect if an email address is disposable. use before allowing sign-ups to filter out disposable emails.
     */
    DISPOSABLE_EMAIL_DETECTION: "RITEKIT_DISPOSABLE_EMAIL_DETECTION",
    /**
     * Tool to detect whether an email address belongs to a free email provider. use when validating lead quality before ingestion.
     */
    FREEMAIL_DETECTION: "RITEKIT_FREEMAIL_DETECTION",
    /**
     * Tool to obtain a ritekit access token. prefer using a stored token from connection metadata or request. falls back to oauth2 client credentials if both client id and client secret are provided and no token is otherwise available.
     */
    GET_ACCESS_TOKEN: "RITEKIT_GET_ACCESS_TOKEN",
    /**
     * Tool to retrieve stored ritekit client id. use when child actions require the client id query parameter.
     */
    GET_CLIENT_ID: "RITEKIT_GET_CLIENT_ID",
    /**
     * Tool to retrieve stored ritekit client secret. use when child actions require the client secret parameter.
     */
    GET_CLIENT_SECRET: "RITEKIT_GET_CLIENT_SECRET",
    /**
     * Tool to retrieve real-time engagement stats for up to 100 hashtags. use when you have a list of hashtags and need metrics like tweets, retweets, exposure, mentions, links, images, and popularity grade.
     */
    HASHTAG_STATS: "RITEKIT_HASHTAG_STATS",
    /**
     * Tool to get hashtag suggestions for a given text. use when you need relevant hashtags for social media posts.
     */
    HASHTAG_SUGGESTIONS: "RITEKIT_HASHTAG_SUGGESTIONS",
    /**
     * Tool to delete a link ad. use when you need to permanently remove a link ad by its id.
     */
    LINK_AD_DELETE: "RITEKIT_LINK_AD_DELETE",
    /**
     * Tool to retrieve a list of link ads. use after authenticating to fetch all link ads for the user.
     */
    LIST_LINK_ADS: "RITEKIT_LIST_LINK_ADS",
    /**
     * Tool to automatically add relevant hashtags to a given post. use when you have plain text and need suggested hashtags appended or inserted in context.
     */
    RITEKIT_AUTO_HASHTAG: "RITEKIT_RITEKIT_AUTO_HASHTAG",
    /**
     * Tool to fetch a ritekit oauth2 access token using client credentials. use when you need an access token for subsequent ritekit api calls.
     */
    RITEKIT_GET_ACCESS_TOKEN: "RITEKIT_RITEKIT_GET_ACCESS_TOKEN",
    /**
     * Tool to shorten a url with a specified cta. use when you need to generate a call-to-action-enabled short link.
     */
    SHORTEN_LINK: "RITEKIT_SHORTEN_LINK",
    /**
     * Tool to convert a quote into a styled image. use after preparing quote text and style options.
     */
    TEXT_TO_IMAGE: "RITEKIT_TEXT_TO_IMAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RITEKIT".
 */
export type RITEKIT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RITEKIT".
 */
export type RITEKIT_TRIGGER_EVENTS = {}
