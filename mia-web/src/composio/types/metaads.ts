// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of METAADS's METAADS_CREATE_AD tool input.
 */
type METAADS_CREATE_AD_INPUT = {
  /**
   * Ad Set Id
   * @description ID of the ad set to create the ad in
   */
  ad_set_id?: string;
  /**
   * Bid Amount
   * @description Bid amount in cents (overrides ad set bid)
   * @default null
   */
  bid_amount: number | null;
  /**
   * Creative
   * @description Creative specifications for the ad
   */
  creative?: {
      /**
       * Call To Action
       * @description Type of call-to-action button to show
       * @default LEARN_MORE
       * @enum {string}
       */
      call_to_action: "NO_BUTTON" | "BOOK_NOW" | "CONTACT_US" | "DONATE_NOW" | "DOWNLOAD" | "GET_OFFER" | "LEARN_MORE" | "SIGN_UP" | "SHOP_NOW" | "SUBSCRIBE" | "WATCH_MORE";
      /**
       * Carousel Cards
       * @description Cards for carousel ads (required for CAROUSEL type ads)
       * @default null
       */
      carousel_cards: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Image Url
       * @description URL of the image to use (required for IMAGE type ads)
       * @default null
       */
      image_url: string | null;
      /**
       * Message
       * @description The primary text/message that appears in the ad
       */
      message: string;
      /**
       * Page Id
       * @description ID of the Facebook Page this ad will be associated with
       */
      page_id: string;
      /**
       * Type
       * @description Type of ad creative (IMAGE, VIDEO, CAROUSEL, COLLECTION)
       * @enum {string}
       */
      type: "IMAGE" | "VIDEO" | "CAROUSEL" | "COLLECTION";
      /**
       * Video Id
       * @description ID of the video to use (required for VIDEO type ads)
       * @default null
       */
      video_id: string | null;
      /**
       * Website Url
       * @description The URL where people will go when they click the ad
       */
      website_url: string;
  };
  /**
   * Name
   * @description Name of the ad
   */
  name?: string;
  /**
   * Status
   * @description Initial status of the ad
   * @default PAUSED
   * @enum {string}
   */
  status: "ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED";
  /**
   * Tracking Specs
   * @description Tracking specifications for the ad
   * @default null
   */
  tracking_specs: {
      [key: string]: unknown;
  }[] | null;
};

/**
 * Type of METAADS's METAADS_CREATE_AD tool output.
 */
type METAADS_CREATE_AD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created ad
       */
      id: string;
      /**
       * Success
       * @description Whether the ad was created successfully
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
 * Type of METAADS's METAADS_CREATE_AD_CREATIVE tool input.
 */
type METAADS_CREATE_AD_CREATIVE_INPUT = {
  /**
   * Account Id
   * @description
   *             The ad account ID where you want to create the creative.
   *             Format: act_1234567890
   *             Get this from your Meta Ads account settings.
   *             Must have proper permissions set up.
   *
   */
  account_id?: string;
  /**
   * Creative
   * @description
   *             The creative specifications for your ad.
   *             This defines:
   *             - What type of ad (image, video, carousel)
   *             - What it looks like (images, text)
   *             - How it behaves (links, buttons)
   *             See AdCreative model for details.
   *
   */
  creative?: {
      /**
       * Call To Action
       * @description
       *             The button text and behavior for your ad.
       *             Choose based on your objective:
       *             - Want sales? Use SHOP_NOW
       *             - Want leads? Use SIGN_UP
       *             - Want installs? Use DOWNLOAD
       *             - Not sure? Use LEARN_MORE (default)
       *             See CallToActionType enum for all options.
       *
       * @default LEARN_MORE
       * @enum {string}
       */
      call_to_action: "NO_BUTTON" | "BOOK_NOW" | "CONTACT_US" | "DONATE_NOW" | "DOWNLOAD" | "GET_OFFER" | "LEARN_MORE" | "SIGN_UP" | "SHOP_NOW" | "SUBSCRIBE" | "WATCH_MORE";
      /**
       * Carousel Cards
       * @description
       *             Required for CAROUSEL type ads. List of cards to show.
       *             Each card needs:
       *             - image_url: Image for the card
       *             - headline: Card title (max 40 chars)
       *             - description: Card text (max 20 chars)
       *             - link: URL for the card
       *             Maximum 10 cards per carousel.
       *             All cards should maintain consistent theme/style.
       *
       * @default null
       */
      carousel_cards: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Image Url
       * @description
       *             Required for IMAGE type ads. URL of your ad image.
       *             Requirements:
       *             - Must be publicly accessible
       *             - Recommended size: 1200x628 pixels
       *             - Max file size: 30MB
       *             - Supported formats: JPG, PNG
       *             - Must follow Meta's ad policies
       *
       * @default null
       */
      image_url: string | null;
      /**
       * Message
       * @description
       *             The primary text that appears in your ad.
       *             Best practices:
       *             - Keep it clear and concise
       *             - Include a value proposition
       *             - Add a call to action
       *             - Use relevant keywords
       *             - Stay within text limits
       *
       */
      message: string;
      /**
       * Page Id
       * @description
       *             ID of the Facebook Page this ad will be associated with.
       *             This page must:
       *             - Be accessible to your ad account
       *             - Have the proper permissions set up
       *             - Match your business category
       *
       */
      page_id: string;
      /**
       * Type
       * @description
       *             Type of ad creative to create:
       *             - IMAGE: Single image ad (requires image_url)
       *             - VIDEO: Single video ad (requires video_id)
       *             - CAROUSEL: Multiple cards (requires carousel_cards)
       *             - COLLECTION: Mobile shopping experience
       *
       * @enum {string}
       */
      type: "IMAGE" | "VIDEO" | "CAROUSEL" | "COLLECTION";
      /**
       * Video Id
       * @description
       *             Required for VIDEO type ads. ID of your video.
       *             To get this:
       *             1. Upload video to your Meta account
       *             2. Get the video ID from the response
       *             3. Use that ID here
       *             Video must follow Meta's policies.
       *
       * @default null
       */
      video_id: string | null;
      /**
       * Website Url
       * @description
       *             The URL where people will go when they click your ad.
       *             Requirements:
       *             - Must be a valid URL
       *             - Domain must be verified in Meta
       *             - Should match your business
       *             - Avoid URL parameters if possible
       *
       */
      website_url: string;
  };
  /**
   * Name
   * @description
   *             Name of your ad creative. Best practices:
   *             - Include the creative type (e.g., "Summer Sale - Image")
   *             - Add version if iterating (e.g., "v1")
   *             - Include target audience if specific
   *             - Keep it searchable and organized
   *
   */
  name?: string;
};

/**
 * Type of METAADS's METAADS_CREATE_AD_CREATIVE tool output.
 */
type METAADS_CREATE_AD_CREATIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description
       *             The ID of your new ad creative.
       *             Save this to:
       *             - Use in ad creation
       *             - Reuse the creative in other ads
       *             - Modify the creative later
       *
       */
      id: string;
      /**
       * Success
       * @description Whether the creative was created successfully. Always true if no error was raised.
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
 * Type of METAADS's METAADS_CREATE_AD_SET tool input.
 */
type METAADS_CREATE_AD_SET_INPUT = {
  /**
   * Bid Amount
   * @description Bid amount in cents
   */
  bid_amount?: number;
  /**
   * Billing Event
   * @description The billing event for the ad set
   * @enum {string}
   */
  billing_event?: "IMPRESSIONS" | "LINK_CLICKS" | "APP_INSTALLS" | "POST_ENGAGEMENT" | "THRUPLAY";
  /**
   * Campaign Id
   * @description ID of the campaign to create the ad set in
   */
  campaign_id?: string;
  /**
   * Daily Budget
   * @description Daily budget limit in account currency
   * @default null
   */
  daily_budget: number | null;
  /**
   * End Time
   * @description End time in ISO 8601 format
   * @default null
   */
  end_time: string | null;
  /**
   * Lifetime Budget
   * @description Lifetime budget limit in account currency
   * @default null
   */
  lifetime_budget: number | null;
  /**
   * Name
   * @description Name of the ad set
   */
  name?: string;
  /**
   * Optimization Goal
   * @description The optimization goal for the ad set
   * @enum {string}
   */
  optimization_goal?: "APP_INSTALLS" | "CONVERSATIONS" | "LINK_CLICKS" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "REACH" | "THRUPLAY" | "VALUE";
  /**
   * Start Time
   * @description Start time in ISO 8601 format
   * @default null
   */
  start_time: string | null;
  /**
   * Status
   * @description Initial status of the ad set
   * @default PAUSED
   * @enum {string}
   */
  status: "ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED";
  /**
   * Targeting
   * @description Targeting specifications for the ad set
   */
  targeting?: {
      /**
       * Age Max
       * @description Maximum age for targeting
       * @default 65
       */
      age_max: number;
      /**
       * Age Min
       * @description Minimum age for targeting
       * @default 18
       */
      age_min: number;
      /**
       * Behaviors
       * @description Behavior-based targeting
       * @default null
       */
      behaviors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Custom Audiences
       * @description Custom audience targeting
       * @default null
       */
      custom_audiences: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Genders
       * @description Gender targeting options
       * @default [
       *       0
       *     ]
       */
      genders: number[];
      /**
       * Interests
       * @description Interest-based targeting
       * @default null
       */
      interests: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Location Radius
       * @description Radius in miles (only used for cities/zip targeting)
       * @default null
       */
      location_radius: number | null;
      /**
       * Location Type
       * @description Type of location targeting to use
       * @default countries
       * @enum {string}
       */
      location_type: "countries" | "regions" | "cities" | "zip_codes";
      /**
       * Locations
       * @description List of location identifiers based on location_type
       */
      locations: string[];
  };
};

/**
 * Type of METAADS's METAADS_CREATE_AD_SET tool output.
 */
type METAADS_CREATE_AD_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created ad set
       */
      id: string;
      /**
       * Success
       * @description Whether the ad set was created successfully
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
 * Type of METAADS's METAADS_CREATE_CAMPAIGN tool input.
 */
type METAADS_CREATE_CAMPAIGN_INPUT = {
  /**
   * Account Id
   * @description The ID of the ad account to create the campaign in
   */
  account_id?: string;
  /**
   * Bid Strategy
   * @description Bidding strategy for the campaign
   * @default LOWEST_COST_WITHOUT_CAP
   * @enum {string}
   */
  bid_strategy: "LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "COST_CAP";
  /**
   * Daily Budget
   * @description Daily budget limit in account currency
   * @default null
   */
  daily_budget: number | null;
  /**
   * Lifetime Budget
   * @description Lifetime budget limit in account currency
   * @default null
   */
  lifetime_budget: number | null;
  /**
   * Name
   * @description Name of the campaign
   */
  name?: string;
  /**
   * Objective
   * @description The objective of the campaign
   * @enum {string}
   */
  objective?: "APP_INSTALLS" | "BRAND_AWARENESS" | "CONVERSIONS" | "EVENT_RESPONSES" | "LEAD_GENERATION" | "LINK_CLICKS" | "LOCAL_AWARENESS" | "MESSAGES" | "OFFER_CLAIMS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "REACH" | "STORE_VISITS" | "VIDEO_VIEWS";
  /**
   * Special Ad Categories
   * @description List of special ad categories that apply to this campaign
   * @default []
   */
  special_ad_categories: string[];
  /**
   * Status
   * @description Initial status of the campaign
   * @default PAUSED
   * @enum {string}
   */
  status: "ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED";
};

/**
 * Type of METAADS's METAADS_CREATE_CAMPAIGN tool output.
 */
type METAADS_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created campaign
       */
      id: string;
      /**
       * Success
       * @description Whether the campaign was created successfully
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
 * Type of METAADS's METAADS_CREATE_CUSTOM_AUDIENCE tool input.
 */
type METAADS_CREATE_CUSTOM_AUDIENCE_INPUT = {
  /**
   * Account Id
   * @description The ID of the ad account to create the custom audience in
   */
  account_id?: string;
  /**
   * ContentType
   * @description Type of content for customer file-based audiences
   * @default null
   * @enum {string|null}
   */
  content_type: "EMAIL" | "PHONE" | "MOBILE_ADVERTISER_ID" | "MADID" | "EXTERNAL_ID" | "LOOKALIKE_VALUE" | null;
  /**
   * Customer File
   * @description List of customer identifiers (hashed)
   * @default null
   */
  customer_file: string[] | null;
  /**
   * CustomerFileSource
   * @description Source of the customer file data
   * @default null
   * @enum {string|null}
   */
  customer_file_source: "USER_PROVIDED_ONLY" | "PARTNER_PROVIDED_ONLY" | "BOTH_USER_AND_PARTNER_PROVIDED" | null;
  /**
   * Description
   * @description Description of the custom audience
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the custom audience
   */
  name?: string;
  /**
   * Prefill
   * @description Whether to prefill the audience with available data
   * @default true
   */
  prefill: boolean | null;
  /**
   * Retention Days
   * @description Number of days to keep the audience data
   * @default null
   */
  retention_days: number | null;
  /**
   * Rule
   * @description Rule for website/app custom audiences
   * @default null
   */
  rule: {
      /**
       * Clauses
       * @description Clauses that define the rule
       */
      clauses: {
          [key: string]: unknown;
      }[];
      /**
       * Rule Type
       * @description Type of rule for audience creation
       */
      rule_type: string;
  } | null;
  /**
   * Subtype
   * @description Type of the custom audience
   * @enum {string}
   */
  subtype?: "CUSTOM_AUDIENCE" | "WEBSITE" | "APP" | "OFFLINE_CONVERSION" | "CLAIM" | "PARTNER" | "MANAGED_PARTNER" | "VIDEO" | "PAGE" | "ENGAGEMENT" | "DATA_SET" | "BAG_OF_ACCOUNTS" | "STUDY_RULE_AUDIENCE" | "FOX";
};

/**
 * Type of METAADS's METAADS_CREATE_CUSTOM_AUDIENCE tool output.
 */
type METAADS_CREATE_CUSTOM_AUDIENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created custom audience
       */
      id: string;
      /**
       * Success
       * @description Whether the custom audience was created successfully
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
 * Type of METAADS's METAADS_DELETE_AD_CREATIVE tool input.
 */
type METAADS_DELETE_AD_CREATIVE_INPUT = {
  /** Creative Id */
  creative_id?: string;
};

/**
 * Type of METAADS's METAADS_DELETE_AD_CREATIVE tool output.
 */
type METAADS_DELETE_AD_CREATIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Success */
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
 * Type of METAADS's METAADS_DELETE_CAMPAIGN tool input.
 */
type METAADS_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to delete
   */
  campaign_id?: string;
};

/**
 * Type of METAADS's METAADS_DELETE_CAMPAIGN tool output.
 */
type METAADS_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the campaign was deleted successfully
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
 * Type of METAADS's METAADS_GET_AD_CREATIVE tool input.
 */
type METAADS_GET_AD_CREATIVE_INPUT = {
  /** Creative Id */
  creative_id?: string;
  /**
   * Fields
   * @default [
   *       "id",
   *       "name",
   *       "status",
   *       "object_story_spec"
   *     ]
   */
  fields: string[] | null;
};

/**
 * Type of METAADS's METAADS_GET_AD_CREATIVE tool output.
 */
type METAADS_GET_AD_CREATIVE_OUTPUT = {
  /** Data */
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
 * Type of METAADS's METAADS_GET_INSIGHTS tool input.
 */
type METAADS_GET_INSIGHTS_INPUT = {
  /**
   * Action Attribution Windows
   * @description Attribution windows for conversion metrics
   * @default [
   *       "7d_click",
   *       "1d_view"
   *     ]
   */
  action_attribution_windows: string[];
  /**
   * Breakdowns
   * @description List of breakdowns to apply to the data
   * @default null
   */
  breakdowns: string[] | null;
  /**
   * DatePreset
   * @description Predefined date range for the insights
   * @default null
   * @enum {string|null}
   */
  date_preset: "today" | "yesterday" | "last_7d" | "last_30d" | "this_month" | "last_month" | "this_quarter" | "lifetime" | null;
  /**
   * Fields
   * @description List of fields to include in the response
   * @default [
   *       "impressions",
   *       "clicks",
   *       "spend"
   *     ]
   */
  fields: string[];
  /**
   * Filtering
   * @description Filters to apply to the data
   * @default null
   */
  filtering: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Level
   * @description Level at which to aggregate the data
   * @default account
   * @enum {string}
   */
  level: "account" | "campaign" | "adset" | "ad";
  /**
   * Object Id
   * @description ID of the object to get insights for (ad account, campaign, ad set, or ad)
   */
  object_id?: string;
  /**
   * Sort
   * @description Fields to sort by with direction (_ascending or _descending suffix)
   * @default null
   */
  sort: string[] | null;
  /**
   * TimeRange
   * @description Custom date range for the insights
   * @default null
   */
  time_range: {
      /**
       * Since
       * @description Start date in YYYY-MM-DD format
       */
      since: string;
      /**
       * Until
       * @description End date in YYYY-MM-DD format
       */
      until: string;
  } | null;
};

/**
 * Type of METAADS's METAADS_GET_INSIGHTS tool output.
 */
type METAADS_GET_INSIGHTS_OUTPUT = {
  /**
   * Data
   * @description List of insight results
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
   * Paging
   * @description Paging information if available
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of METAADS's METAADS_PAUSE_CAMPAIGN tool input.
 */
type METAADS_PAUSE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to pause
   */
  campaign_id?: string;
};

/**
 * Type of METAADS's METAADS_PAUSE_CAMPAIGN tool output.
 */
type METAADS_PAUSE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the campaign was paused successfully
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
 * Type of METAADS's METAADS_PREVIEW_AD_CREATIVE tool input.
 */
type METAADS_PREVIEW_AD_CREATIVE_INPUT = {
  /**
   * Creative Id
   * @description
   *             ID of the ad creative to preview.
   *             Get this from:
   *             - CreateAdCreative response
   *             - Existing ad creative lookup
   *             Format: 23842938523454
   *
   */
  creative_id?: string;
  /**
   * Thumbnail Height
   * @description
   *             Height of the preview thumbnail in pixels.
   *             - Default: 120px
   *             - Min: 50px
   *             - Max: 1200px
   *             Choose based on your display needs.
   *
   * @default 120
   */
  thumbnail_height: number;
  /**
   * Thumbnail Width
   * @description
   *             Width of the preview thumbnail in pixels.
   *             - Default: 150px
   *             - Min: 50px
   *             - Max: 1200px
   *             Larger sizes give better quality but load slower.
   *
   * @default 150
   */
  thumbnail_width: number;
};

/**
 * Type of METAADS's METAADS_PREVIEW_AD_CREATIVE tool output.
 */
type METAADS_PREVIEW_AD_CREATIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Thumbnail Url
       * @description
       *             URL to view the creative preview thumbnail.
       *             This URL:
       *             - Is temporary (expires after some time)
       *             - Shows how the ad will look
       *             - Can be embedded in img tags
       *             - Can be shared with stakeholders
       *
       */
      thumbnail_url: string;
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
 * Type of METAADS's METAADS_READ_ADSETS tool input.
 */
type METAADS_READ_ADSETS_INPUT = {
  /**
   * Ad Account Id
   * @description ID of the ad account to fetch adsets from
   */
  ad_account_id?: string;
  /**
   * DatePreset
   * @description Predefined date range used to aggregate insights metrics
   * @default null
   * @enum {string|null}
   */
  date_preset: "TODAY" | "YESTERDAY" | "THIS_MONTH" | "LAST_MONTH" | "THIS_QUARTER" | "MAXIMUM" | "DATA_MAXIMUM" | "LAST_3D" | "LAST_7D" | "LAST_14D" | "LAST_28D" | "LAST_30D" | "LAST_90D" | "LAST_WEEK_MON_SUN" | "LAST_WEEK_SUN_SAT" | "LAST_QUARTER" | "LAST_YEAR" | "THIS_WEEK_MON_TODAY" | "THIS_WEEK_SUN_TODAY" | "THIS_YEAR" | null;
  /**
   * Effective Status
   * @description Filter adsets by their effective status
   * @default null
   */
  effective_status: string[] | null;
  /**
   * Fields
   * @description Fields to return for each ad set
   * @default [
   *       "name",
   *       "id",
   *       "status"
   *     ]
   */
  fields: string[];
  /**
   * Is Completed
   * @description Filter adsets by completed status
   * @default null
   */
  is_completed: boolean | null;
  /**
   * Limit
   * @description Maximum number of adsets to return
   * @default 50
   */
  limit: number | null;
  /**
   * Time Range Since
   * @description Start date in YYYY-MM-DD format for custom date range
   * @default null
   */
  time_range_since: string | null;
  /**
   * Time Range Until
   * @description End date in YYYY-MM-DD format for custom date range
   * @default null
   */
  time_range_until: string | null;
  /**
   * Updated Since
   * @description Time since the Adset has been updated (in seconds)
   * @default null
   */
  updated_since: number | null;
};

/**
 * Type of METAADS's METAADS_READ_ADSETS tool output.
 */
type METAADS_READ_ADSETS_OUTPUT = {
  /**
   * Data
   * @description List of ad sets
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
   * Paging Next
   * @description URL to the next page of data
   * @default null
   */
  paging_next: string | null;
  /**
   * Paging Previous
   * @description URL to the previous page of data
   * @default null
   */
  paging_previous: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of adsets
   * @default null
   */
  total_count: number | null;
};

/**
 * Type of METAADS's METAADS_RESUME_CAMPAIGN tool input.
 */
type METAADS_RESUME_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to resume
   */
  campaign_id?: string;
};

/**
 * Type of METAADS's METAADS_RESUME_CAMPAIGN tool output.
 */
type METAADS_RESUME_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the campaign was resumed successfully
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
 * Type of METAADS's METAADS_UPDATE_AD_CREATIVE tool input.
 */
type METAADS_UPDATE_AD_CREATIVE_INPUT = {
  /** Creative Id */
  creative_id?: string;
  /**
   * Name
   * @default null
   */
  name: string | null;
  /**
   * AdStatus
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED" | null;
};

/**
 * Type of METAADS's METAADS_UPDATE_AD_CREATIVE tool output.
 */
type METAADS_UPDATE_AD_CREATIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Success */
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
 * Type of METAADS's METAADS_UPDATE_CAMPAIGN tool input.
 */
type METAADS_UPDATE_CAMPAIGN_INPUT = {
  /**
   * BidStrategy
   * @description Updated bidding strategy for the campaign
   * @default null
   * @enum {string|null}
   */
  bid_strategy: "LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "COST_CAP" | "LOWEST_COST_WITH_MIN_ROAS" | null;
  /**
   * Campaign Id
   * @description ID of the campaign to update
   */
  campaign_id?: string;
  /**
   * Daily Budget
   * @description Updated daily budget limit in account currency
   * @default null
   */
  daily_budget: number | null;
  /**
   * Lifetime Budget
   * @description Updated lifetime budget limit in account currency
   * @default null
   */
  lifetime_budget: number | null;
  /**
   * Name
   * @description New name for the campaign
   * @default null
   */
  name: string | null;
  /**
   * Special Ad Categories
   * @description Updated list of special ad categories that apply to this campaign
   * @default null
   */
  special_ad_categories: string[] | null;
  /**
   * Spend Cap
   * @description Updated spend cap for the campaign in account currency (minimum value $100 USD)
   * @default null
   */
  spend_cap: number | null;
  /**
   * CampaignStatus
   * @description Updated status of the campaign
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED" | null;
};

/**
 * Type of METAADS's METAADS_UPDATE_CAMPAIGN tool output.
 */
type METAADS_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the campaign was updated successfully
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
 * Type of METAADS's METAADS_UPLOAD_AD_IMAGE tool input.
 */
type METAADS_UPLOAD_AD_IMAGE_INPUT = {
  /**
   * Ad Account Id
   * @description ID of the ad account to upload the image to
   */
  ad_account_id?: string;
  /**
   * FileUploadable
   * @description Image file to upload. Supported formats include JPG, PNG, GIF, etc.
   */
  image?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Name
   * @description Optional name for the image (max 100 characters)
   * @default null
   */
  name: string | null;
};

/**
 * Type of METAADS's METAADS_UPLOAD_AD_IMAGE tool output.
 */
type METAADS_UPLOAD_AD_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hash
       * @description Hash of the uploaded image for use in ad creatives
       */
      hash: string;
      /**
       * Height
       * @description Height of the image in pixels
       */
      height: number;
      /**
       * Id
       * @description ID of the uploaded image
       */
      id: string;
      /**
       * Permalink Url
       * @description Permanent URL of the image to use in story creatives
       * @default null
       */
      permalink_url: string | null;
      /**
       * Url
       * @description Temporary URL for the image (not for use in ad creatives)
       */
      url: string;
      /**
       * Width
       * @description Width of the image in pixels
       */
      width: number;
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
 * Type map of all available tool input types for toolkit "METAADS".
 */
export type METAADS_TOOL_INPUTS = {
  CREATE_AD: METAADS_CREATE_AD_INPUT
  CREATE_AD_CREATIVE: METAADS_CREATE_AD_CREATIVE_INPUT
  CREATE_AD_SET: METAADS_CREATE_AD_SET_INPUT
  CREATE_CAMPAIGN: METAADS_CREATE_CAMPAIGN_INPUT
  CREATE_CUSTOM_AUDIENCE: METAADS_CREATE_CUSTOM_AUDIENCE_INPUT
  DELETE_AD_CREATIVE: METAADS_DELETE_AD_CREATIVE_INPUT
  DELETE_CAMPAIGN: METAADS_DELETE_CAMPAIGN_INPUT
  GET_AD_CREATIVE: METAADS_GET_AD_CREATIVE_INPUT
  GET_INSIGHTS: METAADS_GET_INSIGHTS_INPUT
  PAUSE_CAMPAIGN: METAADS_PAUSE_CAMPAIGN_INPUT
  PREVIEW_AD_CREATIVE: METAADS_PREVIEW_AD_CREATIVE_INPUT
  READ_ADSETS: METAADS_READ_ADSETS_INPUT
  RESUME_CAMPAIGN: METAADS_RESUME_CAMPAIGN_INPUT
  UPDATE_AD_CREATIVE: METAADS_UPDATE_AD_CREATIVE_INPUT
  UPDATE_CAMPAIGN: METAADS_UPDATE_CAMPAIGN_INPUT
  UPLOAD_AD_IMAGE: METAADS_UPLOAD_AD_IMAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "METAADS".
 */
export type METAADS_TOOL_OUTPUTS = {
  CREATE_AD: METAADS_CREATE_AD_OUTPUT
  CREATE_AD_CREATIVE: METAADS_CREATE_AD_CREATIVE_OUTPUT
  CREATE_AD_SET: METAADS_CREATE_AD_SET_OUTPUT
  CREATE_CAMPAIGN: METAADS_CREATE_CAMPAIGN_OUTPUT
  CREATE_CUSTOM_AUDIENCE: METAADS_CREATE_CUSTOM_AUDIENCE_OUTPUT
  DELETE_AD_CREATIVE: METAADS_DELETE_AD_CREATIVE_OUTPUT
  DELETE_CAMPAIGN: METAADS_DELETE_CAMPAIGN_OUTPUT
  GET_AD_CREATIVE: METAADS_GET_AD_CREATIVE_OUTPUT
  GET_INSIGHTS: METAADS_GET_INSIGHTS_OUTPUT
  PAUSE_CAMPAIGN: METAADS_PAUSE_CAMPAIGN_OUTPUT
  PREVIEW_AD_CREATIVE: METAADS_PREVIEW_AD_CREATIVE_OUTPUT
  READ_ADSETS: METAADS_READ_ADSETS_OUTPUT
  RESUME_CAMPAIGN: METAADS_RESUME_CAMPAIGN_OUTPUT
  UPDATE_AD_CREATIVE: METAADS_UPDATE_AD_CREATIVE_OUTPUT
  UPDATE_CAMPAIGN: METAADS_UPDATE_CAMPAIGN_OUTPUT
  UPLOAD_AD_IMAGE: METAADS_UPLOAD_AD_IMAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's METAADS toolkit.
 */
export const METAADS = {
  slug: "metaads",
  tools: {
    /**
     * Create a new ad within an ad set using the meta marketing api. supports various ad formats including image, video, carousel, and collection ads.
     */
    CREATE_AD: "METAADS_CREATE_AD",
    /**
     * Create a new ad creative using the meta marketing api. ad creatives are reusable visual and interactive elements that define how your ad looks and behaves: - can be used in multiple ads - support various formats (image, video, carousel) - include text, media, and call-to-action buttons - must follow meta's ad policies
     */
    CREATE_AD_CREATIVE: "METAADS_CREATE_AD_CREATIVE",
    /**
     * Create a new ad set within a campaign using the meta marketing api. supports detailed targeting options, budgets, and optimization goals.
     */
    CREATE_AD_SET: "METAADS_CREATE_AD_SET",
    /**
     * Create a new advertising campaign using the meta marketing api. supports various campaign objectives, budgets, and bidding strategies.
     */
    CREATE_CAMPAIGN: "METAADS_CREATE_CAMPAIGN",
    /**
     * Create a new custom audience using the meta marketing api. supports various types of custom audiences including customer lists, website visitors, and app users.
     */
    CREATE_CUSTOM_AUDIENCE: "METAADS_CREATE_CUSTOM_AUDIENCE",
    /**
     * Delete ad creative
     */
    DELETE_AD_CREATIVE: "METAADS_DELETE_AD_CREATIVE",
    /**
     * Delete an advertising campaign using the meta marketing api. this marks the campaign as deleted, which prevents it from delivering ads. note that deleted campaigns are not permanently removed from meta's systems and can still be viewed in reports.
     */
    DELETE_CAMPAIGN: "METAADS_DELETE_CAMPAIGN",
    /**
     * Get ad creative
     */
    GET_AD_CREATIVE: "METAADS_GET_AD_CREATIVE",
    /**
     * Get insights data for a meta ads object (ad account, campaign, ad set, or ad) using the meta marketing api. supports various metrics, breakdowns, and filtering options with flexible date ranges.
     */
    GET_INSIGHTS: "METAADS_GET_INSIGHTS",
    /**
     * Pause an advertising campaign using the meta marketing api. this stops the campaign from delivering ads but allows it to be resumed later. all child ad sets and ads will also be paused with an effective status of campaign paused.
     */
    PAUSE_CAMPAIGN: "METAADS_PAUSE_CAMPAIGN",
    /**
     * Preview ad creative
     */
    PREVIEW_AD_CREATIVE: "METAADS_PREVIEW_AD_CREATIVE",
    /**
     * Retrieve ad sets from a meta ad account using the marketing api. returns information about the ad sets including their status, targeting, and other properties.
     */
    READ_ADSETS: "METAADS_READ_ADSETS",
    /**
     * Resume a paused advertising campaign using the meta marketing api. this sets the campaign status to active so it can deliver ads again. note that child ad sets and ads that were previously active will also resume delivery, but those that were individually paused will remain paused.
     */
    RESUME_CAMPAIGN: "METAADS_RESUME_CAMPAIGN",
    /**
     * Update ad creative
     */
    UPDATE_AD_CREATIVE: "METAADS_UPDATE_AD_CREATIVE",
    /**
     * Update an existing advertising campaign using the meta marketing api. allows modification of campaign properties like name, status, budget, and bidding strategy. only the fields that need to be updated should be included in the request.
     */
    UPDATE_CAMPAIGN: "METAADS_UPDATE_CAMPAIGN",
    /**
     * Upload an image for use in meta ad creatives using the marketing api. the image can later be referenced by its hash when creating ad creatives.
     */
    UPLOAD_AD_IMAGE: "METAADS_UPLOAD_AD_IMAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "METAADS".
 */
export type METAADS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "METAADS".
 */
export type METAADS_TRIGGER_EVENTS = {}
