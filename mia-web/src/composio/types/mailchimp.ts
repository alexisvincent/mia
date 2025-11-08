import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_AUTOMATION tool input.
 */
type MAILCHIMP_ADD_AUTOMATION_INPUT = {
  /**
   * Recipients  List  Id
   * @description The id of the List.
   */
  recipients__list__id?: string;
  /**
   * Recipients  Store  Id
   * @description The id of the store.
   */
  recipients__store__id?: string;
  /**
   * Settings  From  Name
   * @description The "from" name for the Automation (not an email address).
   */
  settings__from__name?: string;
  /**
   * Settings  Reply  To
   * @description The reply-to email address for the Automation.
   */
  settings__reply__to?: string;
  /**
   * Trigger  Settings  Workflow  Type
   * @description The type of Automation workflow. Currently only supports "abandonedCart".
   */
  trigger__settings__workflow__type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_AUTOMATION tool output.
 */
type MAILCHIMP_ADD_AUTOMATION_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_BATCH_WEBHOOK tool input.
 */
type MAILCHIMP_ADD_BATCH_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether the webhook receives requests or not.
   */
  enabled?: boolean;
  /**
   * Url
   * @description A valid URL for the Webhook.
   */
  url?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_BATCH_WEBHOOK tool output.
 */
type MAILCHIMP_ADD_BATCH_WEBHOOK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CAMPAIGN tool input.
 */
type MAILCHIMP_ADD_CAMPAIGN_INPUT = {
  /**
   * Content Type
   * @description How the campaign"s content is put together. The old drag and drop editor uses "template" while the new editor uses "multichannel". Defaults to template.
   * @enum {string}
   */
  content_type?: "template" | "multichannel";
  /**
   * Recipients  List  Id
   * @description The unique list id.
   */
  recipients__list__id?: string;
  /**
   * Recipients  Segment  Opts  Conditions
   * @description Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
   */
  recipients__segment__opts__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Recipients  Segment  Opts  Match
   * @description Segment match type.
   * @enum {string}
   */
  recipients__segment__opts__match?: "any" | "all";
  /**
   * Recipients  Segment  Opts  Saved  Segment  Id
   * @description The id for an existing saved segment.
   */
  recipients__segment__opts__saved__segment__id?: number;
  /**
   * Rss  Opts  Constrain  Rss  Img
   * @description Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
   */
  rss__opts__constrain__rss__img?: boolean;
  /**
   * Rss  Opts  Feed  Url
   * Format: uri
   * @description The URL for the RSS feed.
   */
  rss__opts__feed__url?: string;
  /**
   * Rss  Opts  Frequency
   * @description The frequency of the RSS Campaign.
   * @enum {string}
   */
  rss__opts__frequency?: "daily" | "weekly" | "monthly";
  /**
   * Rss  Opts  Schedule  Daily  Send  Friday
   * @description Sends the daily RSS Campaign on Fridays.
   */
  rss__opts__schedule__daily__send__friday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Monday
   * @description Sends the daily RSS Campaign on Mondays.
   */
  rss__opts__schedule__daily__send__monday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Saturday
   * @description Sends the daily RSS Campaign on Saturdays.
   */
  rss__opts__schedule__daily__send__saturday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Sunday
   * @description Sends the daily RSS Campaign on Sundays.
   */
  rss__opts__schedule__daily__send__sunday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Thursday
   * @description Sends the daily RSS Campaign on Thursdays.
   */
  rss__opts__schedule__daily__send__thursday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Tuesday
   * @description Sends the daily RSS Campaign on Tuesdays.
   */
  rss__opts__schedule__daily__send__tuesday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Wednesday
   * @description Sends the daily RSS Campaign on Wednesdays.
   */
  rss__opts__schedule__daily__send__wednesday?: boolean;
  /**
   * Rss  Opts  Schedule  Hour
   * @description The hour to send the campaign in local time. Acceptable hours are 0-23. For example, "4" would be 4am in [your account"s default time zone](https://mailchimp.com/help/set-account-defaults/).
   */
  rss__opts__schedule__hour?: number;
  /**
   * Rss  Opts  Schedule  Monthly  Send  Date
   * @description The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where "0" is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
   */
  rss__opts__schedule__monthly__send__date?: number;
  /**
   * Rss  Opts  Schedule  Weekly  Send  Day
   * @description The day of the week to send a weekly RSS Campaign.
   * @enum {string}
   */
  rss__opts__schedule__weekly__send__day?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
  /**
   * Settings  Authenticate
   * @description Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
   */
  settings__authenticate?: boolean;
  /**
   * Settings  Auto  Fb  Post
   * @description An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
   */
  settings__auto__fb__post?: string[];
  /**
   * Settings  Auto  Footer
   * @description Automatically append Mailchimp"s [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
   */
  settings__auto__footer?: boolean;
  /**
   * Settings  Auto  Tweet
   * @description Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
   */
  settings__auto__tweet?: boolean;
  /**
   * Settings  Fb  Comments
   * @description Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
   */
  settings__fb__comments?: boolean;
  /**
   * Settings  Folder  Id
   * @description If the campaign is listed in a folder, the id for that folder.
   */
  settings__folder__id?: string;
  /**
   * Settings  From  Name
   * @description The "from" name on the campaign (not an email address).
   */
  settings__from__name?: string;
  /**
   * Settings  Inline  Css
   * @description Automatically inline the CSS included with the campaign content.
   */
  settings__inline__css?: boolean;
  /**
   * Settings  Preview  Text
   * @description The preview text for the campaign.
   */
  settings__preview__text?: string;
  /**
   * Settings  Reply  To
   * @description The reply-to email address for the campaign. Note: while this field is not required for campaign creation, it is required for sending.
   */
  settings__reply__to?: string;
  /**
   * Settings  Subject  Line
   * @description The subject line for the campaign.
   */
  settings__subject__line?: string;
  /**
   * Settings  Template  Id
   * @description The id of the template to use.
   */
  settings__template__id?: number;
  /**
   * Settings  Title
   * @description The title of the campaign.
   */
  settings__title?: string;
  /**
   * Settings  To  Name
   * @description The campaign"s custom "To" name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
   */
  settings__to__name?: string;
  /**
   * Settings  Use  Conversation
   * @description Use Mailchimp Conversation feature to manage out-of-office replies.
   */
  settings__use__conversation?: boolean;
  /**
   * Social  Card  Description
   * @description A short summary of the campaign to display.
   */
  social__card__description?: string;
  /**
   * Social  Card  Image  Url
   * @description The url for the header image for the card.
   */
  social__card__image__url?: string;
  /**
   * Social  Card  Title
   * @description The title for the card. Typically the subject line of the campaign.
   */
  social__card__title?: string;
  /**
   * Tracking  Capsule  Notes
   * @description Update contact notes for a campaign based on subscriber email addresses.
   */
  tracking__capsule__notes?: boolean;
  /**
   * Tracking  Clicktale
   * @description The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
   */
  tracking__clicktale?: string;
  /**
   * Tracking  Ecomm360
   * @description Whether to enable e-commerce tracking.
   */
  tracking__ecomm360?: boolean;
  /**
   * Tracking  Goal  Tracking
   * @description Deprecated
   */
  tracking__goal__tracking?: boolean;
  /**
   * Tracking  Google  Analytics
   * @description The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
   */
  tracking__google__analytics?: string;
  /**
   * Tracking  Html  Clicks
   * @description Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
   */
  tracking__html__clicks?: boolean;
  /**
   * Tracking  Opens
   * @description Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. Cannot be set to false for variate campaigns.
   */
  tracking__opens?: boolean;
  /**
   * Tracking  Salesforce  Campaign
   * @description Create a campaign in a connected Salesforce account.
   */
  tracking__salesforce__campaign?: boolean;
  /**
   * Tracking  Salesforce  Notes
   * @description Update contact notes for a campaign based on subscriber email addresses.
   */
  tracking__salesforce__notes?: boolean;
  /**
   * Tracking  Text  Clicks
   * @description Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
   */
  tracking__text__clicks?: boolean;
  /**
   * Type
   * @description There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
   * @enum {string}
   */
  type?: "regular" | "plaintext" | "absplit" | "rss" | "variate";
  /**
   * Variate  Settings  From  Names
   * @description The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
   */
  variate__settings__from__names?: string[];
  /**
   * Variate  Settings  Reply  To  Addresses
   * @description The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
   */
  variate__settings__reply__to__addresses?: string[];
  /**
   * Variate  Settings  Send  Times
   * @description The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
   */
  variate__settings__send__times?: string[];
  /**
   * Variate  Settings  Subject  Lines
   * @description The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
   */
  variate__settings__subject__lines?: string[];
  /**
   * Variate  Settings  Test  Size
   * @description The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
   */
  variate__settings__test__size?: number;
  /**
   * Variate  Settings  Wait  Time
   * @description The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
   */
  variate__settings__wait__time?: number;
  /**
   * Variate  Settings  Winner  Criteria
   * @description The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with "manual" as the winner_criteria, the winner must be chosen in the Mailchimp web application.
   * @enum {string}
   */
  variate__settings__winner__criteria?: "opens" | "clicks" | "manual" | "total_revenue";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CAMPAIGN tool output.
 */
type MAILCHIMP_ADD_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CAMPAIGN_FEEDBACK tool input.
 */
type MAILCHIMP_ADD_CAMPAIGN_FEEDBACK_INPUT = {
  /**
   * Block Id
   * @description The block id for the editable block that the feedback addresses.
   */
  block_id?: number;
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Is Complete
   * @description The status of feedback.
   */
  is_complete?: boolean;
  /**
   * Message
   * @description The content of the feedback.
   */
  message?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CAMPAIGN_FEEDBACK tool output.
 */
type MAILCHIMP_ADD_CAMPAIGN_FEEDBACK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CAMPAIGN_FOLDER tool input.
 */
type MAILCHIMP_ADD_CAMPAIGN_FOLDER_INPUT = {
  /**
   * Name
   * @description Name to associate with the folder.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CAMPAIGN_FOLDER tool output.
 */
type MAILCHIMP_ADD_CAMPAIGN_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CART tool input.
 */
type MAILCHIMP_ADD_CART_INPUT = {
  /**
   * Campaign Id
   * @description A string that uniquely identifies the campaign for a cart.
   */
  campaign_id?: string;
  /**
   * Checkout Url
   * @description The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
   */
  checkout_url?: string;
  /**
   * Currency Code
   * @description The three-letter ISO 4217 code for the currency that the cart uses.
   */
  currency_code?: string;
  /**
   * Customer  Address  Address1
   * @description The mailing address of the customer.
   */
  customer__address__address1?: string;
  /**
   * Customer  Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  customer__address__address2?: string;
  /**
   * Customer  Address  City
   * @description The city the customer is located in.
   */
  customer__address__city?: string;
  /**
   * Customer  Address  Country
   * @description The customer"s country.
   */
  customer__address__country?: string;
  /**
   * Customer  Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  customer__address__country__code?: string;
  /**
   * Customer  Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  customer__address__postal__code?: string;
  /**
   * Customer  Address  Province
   * @description The customer"s state name or normalized province.
   */
  customer__address__province?: string;
  /**
   * Customer  Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  customer__address__province__code?: string;
  /**
   * Customer  Company
   * @description The customer"s company.
   */
  customer__company?: string;
  /**
   * Customer  Email  Address
   * @description The customer"s email address.
   */
  customer__email__address?: string;
  /**
   * Customer  First  Name
   * @description The customer"s first name.
   */
  customer__first__name?: string;
  /**
   * Customer  Id
   * @description A unique identifier for the customer. Limited to 50 characters.
   */
  customer__id?: string;
  /**
   * Customer  Last  Name
   * @description The customer"s last name.
   */
  customer__last__name?: string;
  /**
   * Customer  Opt  In  Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  customer__opt__in__status?: boolean;
  /**
   * Id
   * @description A unique identifier for the cart.
   */
  id?: string;
  /**
   * Lines
   * @description An array of the cart"s line items.
   */
  lines?: {
      [key: string]: unknown;
  }[];
  /**
   * Order Total
   * @description The order total for the cart.
   */
  order_total?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Tax Total
   * @description The total tax for the cart.
   */
  tax_total?: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CART tool output.
 */
type MAILCHIMP_ADD_CART_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CART_LINE_ITEM tool input.
 */
type MAILCHIMP_ADD_CART_LINE_ITEM_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Id
   * @description A unique identifier for the cart line item.
   */
  id?: string;
  /**
   * Price
   * @description The price of a cart line item.
   */
  price?: number;
  /**
   * Product Id
   * @description A unique identifier for the product associated with the cart line item.
   */
  product_id?: string;
  /**
   * Product Variant Id
   * @description A unique identifier for the product variant associated with the cart line item.
   */
  product_variant_id?: string;
  /**
   * Quantity
   * @description The quantity of a cart line item.
   */
  quantity?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CART_LINE_ITEM tool output.
 */
type MAILCHIMP_ADD_CART_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CONNECTED_SITE tool input.
 */
type MAILCHIMP_ADD_CONNECTED_SITE_INPUT = {
  /**
   * Domain
   * @description The connected site domain.
   */
  domain?: string;
  /**
   * Foreign Id
   * @description The unique identifier for the site.
   */
  foreign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CONNECTED_SITE tool output.
 */
type MAILCHIMP_ADD_CONNECTED_SITE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_CUSTOMER tool input.
 */
type MAILCHIMP_ADD_CUSTOMER_INPUT = {
  /**
   * Address  Address1
   * @description The mailing address of the customer.
   */
  address__address1?: string;
  /**
   * Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  address__address2?: string;
  /**
   * Address  City
   * @description The city the customer is located in.
   */
  address__city?: string;
  /**
   * Address  Country
   * @description The customer"s country.
   */
  address__country?: string;
  /**
   * Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  address__country__code?: string;
  /**
   * Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  address__postal__code?: string;
  /**
   * Address  Province
   * @description The customer"s state name or normalized province.
   */
  address__province?: string;
  /**
   * Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  address__province__code?: string;
  /**
   * Company
   * @description The customer"s company.
   */
  company?: string;
  /**
   * Email Address
   * @description The customer"s email address.
   */
  email_address?: string;
  /**
   * First Name
   * @description The customer"s first name.
   */
  first_name?: string;
  /**
   * Id
   * @description A unique identifier for the customer. Limited to 50 characters.
   */
  id?: string;
  /**
   * Last Name
   * @description The customer"s last name.
   */
  last_name?: string;
  /**
   * Opt In Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  opt_in_status?: boolean;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_CUSTOMER tool output.
 */
type MAILCHIMP_ADD_CUSTOMER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT tool input.
 */
type MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT_INPUT = {
  /**
   * Verification Email
   * @description The e-mail address at the domain you want to verify. This will receive a two-factor challenge to be used in the verify action.
   */
  verification_email?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT tool output.
 */
type MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_EVENT tool input.
 */
type MAILCHIMP_ADD_EVENT_INPUT = {
  /**
   * Is Syncing
   * @description Events created with the is_syncing value set to `true` will not trigger automations.
   */
  is_syncing?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Name
   * @description The name for this type of event ("purchased", "visited", etc). Must be 2-30 characters in length
   */
  name?: string;
  /**
   * Occurred At
   * Format: date-time
   * @description The date and time the event occurred in ISO 8601 format.
   */
  occurred_at?: string;
  /**
   * Properties
   * @description An optional list of properties
   */
  properties?: {
      [key: string]: string;
  };
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_EVENT tool output.
 */
type MAILCHIMP_ADD_EVENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_EXPORT tool input.
 */
type MAILCHIMP_ADD_EXPORT_INPUT = {
  /**
   * Include Stages
   * @description The stages of an account export to include.
   */
  include_stages?: string[];
  /**
   * Since Timestamp
   * Format: date-time
   * @description An ISO 8601 date that will limit the export to only records created after a given time. For instance, the reports stage will contain any campaign sent after the given timestamp. Audiences, however, are excluded from this limit.
   */
  since_timestamp?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_EXPORT tool output.
 */
type MAILCHIMP_ADD_EXPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_FILE tool input.
 */
type MAILCHIMP_ADD_FILE_INPUT = {
  /**
   * File Data
   * @description The base64-encoded contents of the file.
   */
  file_data?: string;
  /**
   * Folder Id
   * @description The id of the folder.
   */
  folder_id?: number;
  /**
   * Name
   * @description The name of the file.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_FILE tool output.
 */
type MAILCHIMP_ADD_FILE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_FOLDER tool input.
 */
type MAILCHIMP_ADD_FOLDER_INPUT = {
  /**
   * Name
   * @description The name of the folder.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_FOLDER tool output.
 */
type MAILCHIMP_ADD_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_INTEREST_CATEGORY tool input.
 */
type MAILCHIMP_ADD_INTEREST_CATEGORY_INPUT = {
  /**
   * Display Order
   * @description The order that the categories are displayed in the list. Lower numbers display first.
   */
  display_order?: number;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Title
   * @description The text description of this category. This field appears on signup forms and is often phrased as a question.
   */
  title?: string;
  /**
   * Type
   * @description Determines how this category’s interests appear on signup forms.
   * @enum {string}
   */
  type?: "checkboxes" | "dropdown" | "radio" | "hidden";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_INTEREST_CATEGORY tool output.
 */
type MAILCHIMP_ADD_INTEREST_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_INTEREST_IN_CATEGORY tool input.
 */
type MAILCHIMP_ADD_INTEREST_IN_CATEGORY_INPUT = {
  /**
   * Display Order
   * @description The display order for interests.
   */
  display_order?: number;
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Name
   * @description The name of the interest. This can be shown publicly on a subscription form.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_INTEREST_IN_CATEGORY tool output.
 */
type MAILCHIMP_ADD_INTEREST_IN_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_LANDING_PAGE tool input.
 */
type MAILCHIMP_ADD_LANDING_PAGE_INPUT = {
  /**
   * Description
   * @description The description of this landing page.
   */
  description?: string;
  /**
   * List Id
   * @description The list"s ID associated with this landing page.
   */
  list_id?: string;
  /**
   * Name
   * @description The name of this landing page.
   */
  name?: string;
  /**
   * Store Id
   * @description The ID of the store associated with this landing page.
   */
  store_id?: string;
  /**
   * Template Id
   * @description The template_id of this landing page.
   */
  template_id?: number;
  /**
   * Title
   * @description The title of this landing page seen in the browser"s title bar.
   */
  title?: string;
  /**
   * Tracking  Enable  Restricted  Data  Processing
   * @description Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google"s restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
   */
  tracking__enable__restricted__data__processing?: boolean;
  /**
   * Tracking  Track  With  Mailchimp
   * @description Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
   */
  tracking__track__with__mailchimp?: boolean;
  /**
   * Type
   * @description The type of template the landing page has.
   * @enum {string}
   */
  type?: "signup" | "product";
  /**
   * Use Default List
   * @description Will create the Landing Page using the account"s Default List instead of requiring a list_id.
   */
  use_default_list?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_LANDING_PAGE tool output.
 */
type MAILCHIMP_ADD_LANDING_PAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_LIST tool input.
 */
type MAILCHIMP_ADD_LIST_INPUT = {
  /**
   * Campaign  Defaults  From  Email
   * @description The default from email for campaigns sent to this list.
   */
  campaign__defaults__from__email?: string;
  /**
   * Campaign  Defaults  From  Name
   * @description The default from name for campaigns sent to this list.
   */
  campaign__defaults__from__name?: string;
  /**
   * Campaign  Defaults  Language
   * @description The default language for this lists"s forms.
   */
  campaign__defaults__language?: string;
  /**
   * Campaign  Defaults  Subject
   * @description The default subject line for campaigns sent to this list.
   */
  campaign__defaults__subject?: string;
  /**
   * Contact  Address1
   * @description The street address for the list contact.
   */
  contact__address1?: string;
  /**
   * Contact  Address2
   * @description The street address for the list contact.
   */
  contact__address2?: string;
  /**
   * Contact  City
   * @description The city for the list contact.
   */
  contact__city?: string;
  /**
   * Contact  Company
   * @description The company name for the list.
   */
  contact__company?: string;
  /**
   * Contact  Country
   * @description A two-character ISO3166 country code. Defaults to US if invalid.
   */
  contact__country?: string;
  /**
   * Contact  Phone
   * @description The phone number for the list contact.
   */
  contact__phone?: string;
  /**
   * Contact  State
   * @description The state for the list contact.
   */
  contact__state?: string;
  /**
   * Contact  Zip
   * @description The postal or zip code for the list contact.
   */
  contact__zip?: string;
  /**
   * Double Optin
   * @description Whether or not to require the subscriber to confirm subscription via email.
   * @default false
   */
  double_optin: boolean;
  /**
   * Email Type Option
   * @description Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
   */
  email_type_option?: boolean;
  /**
   * Marketing Permissions
   * @description Whether or not the list has marketing permissions (eg. GDPR) enabled.
   * @default false
   */
  marketing_permissions: boolean;
  /**
   * Name
   * @description The name of the list.
   */
  name?: string;
  /**
   * Notify On Subscribe
   * @description The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
   * @default False
   */
  notify_on_subscribe: string;
  /**
   * Notify On Unsubscribe
   * @description The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
   * @default False
   */
  notify_on_unsubscribe: string;
  /**
   * Permission Reminder
   * @description The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
   */
  permission_reminder?: string;
  /**
   * Use Archive Bar
   * @description Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
   * @default false
   */
  use_archive_bar: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_LIST tool output.
 */
type MAILCHIMP_ADD_LIST_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_MEMBER_NOTE tool input.
 */
type MAILCHIMP_ADD_MEMBER_NOTE_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Note
   * @description The content of the note. Note length is limited to 1,000 characters.
   */
  note?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_MEMBER_NOTE tool output.
 */
type MAILCHIMP_ADD_MEMBER_NOTE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_MEMBER_TO_LIST tool input.
 */
type MAILCHIMP_ADD_MEMBER_TO_LIST_INPUT = {
  /**
   * Email Address
   * @description Email address for a subscriber.
   */
  email_address?: string;
  /**
   * Email Type
   * @description Type of email this member asked to get ("html" or "text").
   */
  email_type?: string;
  /**
   * Interests
   * @description The key of this object"s properties is the ID of the interest in question.
   */
  interests?: {
      [key: string]: boolean;
  };
  /**
   * Ip Opt
   * @description The IP address the subscriber used to confirm their opt-in status.
   */
  ip_opt?: string;
  /**
   * Ip Signup
   * @description IP address the subscriber signed up from.
   */
  ip_signup?: string;
  /**
   * Language
   * @description If set/detected, the [subscriber"s language](https://mailchimp.com/help/view-and-edit-contact-languages/).
   */
  language?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Location  Latitude
   * @description The location latitude.
   */
  location__latitude?: number;
  /**
   * Location  Longitude
   * @description The location longitude.
   */
  location__longitude?: number;
  /**
   * Marketing Permissions
   * @description The marketing permissions for the subscriber.
   */
  marketing_permissions?: {
      [key: string]: unknown;
  }[];
  /**
   * Merge Fields
   * @description A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
   */
  merge_fields?: {
      [key: string]: unknown;
  };
  /**
   * Skip Merge Validation
   * @description If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
   */
  skip_merge_validation?: boolean;
  /**
   * Status
   * @description Subscriber"s current status.
   * @enum {string}
   */
  status?: "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";
  /**
   * Tags
   * @description The tags that are associated with a member.
   */
  tags?: string[];
  /**
   * Timestamp Opt
   * Format: date-time
   * @description The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
   */
  timestamp_opt?: string;
  /**
   * Timestamp Signup
   * Format: date-time
   * @description The date and time the subscriber signed up for the list in ISO 8601 format.
   */
  timestamp_signup?: string;
  /**
   * Vip
   * @description [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
   */
  vip?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_MEMBER_TO_LIST tool output.
 */
type MAILCHIMP_ADD_MEMBER_TO_LIST_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_MEMBER_TO_SEGMENT tool input.
 */
type MAILCHIMP_ADD_MEMBER_TO_SEGMENT_INPUT = {
  /**
   * Email Address
   * @description Email address for a subscriber.
   */
  email_address?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Segment Id
   * @description The unique id for the segment.
   */
  segment_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_MEMBER_TO_SEGMENT tool output.
 */
type MAILCHIMP_ADD_MEMBER_TO_SEGMENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_MERGE_FIELD tool input.
 */
type MAILCHIMP_ADD_MERGE_FIELD_INPUT = {
  /**
   * Default Value
   * @description The default value for the merge field if `null`.
   */
  default_value?: string;
  /**
   * Display Order
   * @description The order that the merge field displays on the list signup form.
   */
  display_order?: number;
  /**
   * Help Text
   * @description Extra text to help the subscriber fill out the form.
   */
  help_text?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Name
   * @description The name of the merge field (audience field).
   */
  name?: string;
  /**
   * Options  Choices
   * @description In a radio or dropdown non-group field, the available options for contacts to pick from.
   */
  options__choices?: string[];
  /**
   * Options  Date  Format
   * @description In a date or birthday field, the format of the date.
   */
  options__date__format?: string;
  /**
   * Options  Default  Country
   * @description In an address field, the default country code if none supplied.
   */
  options__default__country?: number;
  /**
   * Options  Phone  Format
   * @description In a phone field, the phone number type: US or International.
   */
  options__phone__format?: string;
  /**
   * Options  Size
   * @description In a text field, the default length of the text field.
   */
  options__size?: number;
  /**
   * Public
   * @description Whether the merge field is displayed on the signup form.
   */
  public?: boolean;
  /**
   * Required
   * @description Whether the merge field is required to import a contact.
   */
  required?: boolean;
  /**
   * Tag
   * @description The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
   */
  tag?: string;
  /**
   * Type
   * @description The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
   * @enum {string}
   */
  type?: "text" | "number" | "address" | "phone" | "date" | "url" | "imageurl" | "radio" | "dropdown" | "birthday" | "zip";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_MERGE_FIELD tool output.
 */
type MAILCHIMP_ADD_MERGE_FIELD_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_ORDER tool input.
 */
type MAILCHIMP_ADD_ORDER_INPUT = {
  /**
   * Billing  Address  Address1
   * @description The billing address for the order.
   */
  billing__address__address1?: string;
  /**
   * Billing  Address  Address2
   * @description An additional field for the billing address.
   */
  billing__address__address2?: string;
  /**
   * Billing  Address  City
   * @description The city in the billing address.
   */
  billing__address__city?: string;
  /**
   * Billing  Address  Company
   * @description The company associated with the billing address.
   */
  billing__address__company?: string;
  /**
   * Billing  Address  Country
   * @description The country in the billing address.
   */
  billing__address__country?: string;
  /**
   * Billing  Address  Country  Code
   * @description The two-letter code for the country in the billing address.
   */
  billing__address__country__code?: string;
  /**
   * Billing  Address  Latitude
   * @description The latitude for the billing address location.
   */
  billing__address__latitude?: number;
  /**
   * Billing  Address  Longitude
   * @description The longitude for the billing address location.
   */
  billing__address__longitude?: number;
  /**
   * Billing  Address  Name
   * @description The name associated with the billing address.
   */
  billing__address__name?: string;
  /**
   * Billing  Address  Phone
   * @description The phone number for the billing address
   */
  billing__address__phone?: string;
  /**
   * Billing  Address  Postal  Code
   * @description The postal or zip code in the billing address.
   */
  billing__address__postal__code?: string;
  /**
   * Billing  Address  Province
   * @description The state or normalized province in the billing address.
   */
  billing__address__province?: string;
  /**
   * Billing  Address  Province  Code
   * @description The two-letter code for the province in the billing address.
   */
  billing__address__province__code?: string;
  /**
   * Campaign Id
   * @description A string that uniquely identifies the campaign for an order.
   */
  campaign_id?: string;
  /**
   * Cancelled At Foreign
   * Format: date-time
   * @description The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being created.
   */
  cancelled_at_foreign?: string;
  /**
   * Currency Code
   * @description The three-letter ISO 4217 code for the currency that the store accepts.
   */
  currency_code?: string;
  /**
   * Customer  Address  Address1
   * @description The mailing address of the customer.
   */
  customer__address__address1?: string;
  /**
   * Customer  Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  customer__address__address2?: string;
  /**
   * Customer  Address  City
   * @description The city the customer is located in.
   */
  customer__address__city?: string;
  /**
   * Customer  Address  Country
   * @description The customer"s country.
   */
  customer__address__country?: string;
  /**
   * Customer  Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  customer__address__country__code?: string;
  /**
   * Customer  Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  customer__address__postal__code?: string;
  /**
   * Customer  Address  Province
   * @description The customer"s state name or normalized province.
   */
  customer__address__province?: string;
  /**
   * Customer  Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  customer__address__province__code?: string;
  /**
   * Customer  Company
   * @description The customer"s company.
   */
  customer__company?: string;
  /**
   * Customer  Email  Address
   * @description The customer"s email address.
   */
  customer__email__address?: string;
  /**
   * Customer  First  Name
   * @description The customer"s first name.
   */
  customer__first__name?: string;
  /**
   * Customer  Id
   * @description A unique identifier for the customer. Limited to 50 characters.
   */
  customer__id?: string;
  /**
   * Customer  Last  Name
   * @description The customer"s last name.
   */
  customer__last__name?: string;
  /**
   * Customer  Opt  In  Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  customer__opt__in__status?: boolean;
  /**
   * Discount Total
   * @description The total amount of the discounts to be applied to the price of the order.
   */
  discount_total?: number;
  /**
   * Financial Status
   * @description The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
   */
  financial_status?: string;
  /**
   * Fulfillment Status
   * @description The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
   */
  fulfillment_status?: string;
  /**
   * Id
   * @description A unique identifier for the order.
   */
  id?: string;
  /**
   * Landing Site
   * @description The URL for the page where the buyer landed when entering the shop.
   */
  landing_site?: string;
  /**
   * Lines
   * @description An array of the order"s line items.
   */
  lines?: {
      [key: string]: unknown;
  }[];
  /**
   * Order Total
   * @description The total for the order.
   */
  order_total?: number;
  /**
   * Order Url
   * @description The URL for the order.
   */
  order_url?: string;
  /**
   * Outreach  Id
   * @description A unique identifier for the outreach. Can be an email campaign ID.
   */
  outreach__id?: string;
  /**
   * Processed At Foreign
   * Format: date-time
   * @description The date and time the order was processed in ISO 8601 format.
   */
  processed_at_foreign?: string;
  /**
   * Promos
   * @description The promo codes applied on the order
   */
  promos?: {
      [key: string]: unknown;
  }[];
  /**
   * Shipping  Address  Address1
   * @description The shipping address for the order.
   */
  shipping__address__address1?: string;
  /**
   * Shipping  Address  Address2
   * @description An additional field for the shipping address.
   */
  shipping__address__address2?: string;
  /**
   * Shipping  Address  City
   * @description The city in the order"s shipping address.
   */
  shipping__address__city?: string;
  /**
   * Shipping  Address  Company
   * @description The company associated with the shipping address.
   */
  shipping__address__company?: string;
  /**
   * Shipping  Address  Country
   * @description The country in the shipping address.
   */
  shipping__address__country?: string;
  /**
   * Shipping  Address  Country  Code
   * @description The two-letter code for the country in the shipping address.
   */
  shipping__address__country__code?: string;
  /**
   * Shipping  Address  Latitude
   * @description The latitude for the shipping address location.
   */
  shipping__address__latitude?: number;
  /**
   * Shipping  Address  Longitude
   * @description The longitude for the shipping address location.
   */
  shipping__address__longitude?: number;
  /**
   * Shipping  Address  Name
   * @description The name associated with an order"s shipping address.
   */
  shipping__address__name?: string;
  /**
   * Shipping  Address  Phone
   * @description The phone number for the order"s shipping address.
   */
  shipping__address__phone?: string;
  /**
   * Shipping  Address  Postal  Code
   * @description The postal or zip code in the shipping address.
   */
  shipping__address__postal__code?: string;
  /**
   * Shipping  Address  Province
   * @description The state or normalized province in the order"s shipping address.
   */
  shipping__address__province?: string;
  /**
   * Shipping  Address  Province  Code
   * @description The two-letter code for the province or state in the shipping address.
   */
  shipping__address__province__code?: string;
  /**
   * Shipping Total
   * @description The shipping total for the order.
   */
  shipping_total?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Tax Total
   * @description The tax total for the order.
   */
  tax_total?: number;
  /**
   * Tracking Carrier
   * @description The tracking carrier associated with the order.
   */
  tracking_carrier?: string;
  /**
   * Tracking Code
   * @description The Mailchimp tracking code for the order. Uses the "mc_tc" parameter in E-Commerce tracking URLs.
   * @enum {string}
   */
  tracking_code?: "prec";
  /**
   * Tracking Number
   * @description The tracking number associated with the order.
   */
  tracking_number?: string;
  /**
   * Tracking Url
   * @description The tracking URL associated with the order.
   */
  tracking_url?: string;
  /**
   * Updated At Foreign
   * Format: date-time
   * @description The date and time the order was updated in ISO 8601 format.
   */
  updated_at_foreign?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_ORDER tool output.
 */
type MAILCHIMP_ADD_ORDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_ORDER_LINE_ITEM tool input.
 */
type MAILCHIMP_ADD_ORDER_LINE_ITEM_INPUT = {
  /**
   * Discount
   * @description The total discount amount applied to this line item.
   */
  discount?: number;
  /**
   * Id
   * @description A unique identifier for the order line item.
   */
  id?: string;
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Price
   * @description The price of an order line item.
   */
  price?: number;
  /**
   * Product Id
   * @description A unique identifier for the product associated with the order line item.
   */
  product_id?: string;
  /**
   * Product Variant Id
   * @description A unique identifier for the product variant associated with the order line item.
   */
  product_variant_id?: string;
  /**
   * Quantity
   * @description The quantity of an order line item.
   */
  quantity?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_ORDER_LINE_ITEM tool output.
 */
type MAILCHIMP_ADD_ORDER_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS tool input.
 */
type MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS_INPUT = {
  /**
   * Is Syncing
   * @description When is_syncing is true, automations based on the tags in the request will not fire
   */
  is_syncing?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
  /**
   * Tags
   * @description A list of tags assigned to the list member.
   */
  tags?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS tool output.
 */
type MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_UPDATE_CUSTOMER tool input.
 */
type MAILCHIMP_ADD_OR_UPDATE_CUSTOMER_INPUT = {
  /**
   * Address  Address1
   * @description The mailing address of the customer.
   */
  address__address1?: string;
  /**
   * Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  address__address2?: string;
  /**
   * Address  City
   * @description The city the customer is located in.
   */
  address__city?: string;
  /**
   * Address  Country
   * @description The customer"s country.
   */
  address__country?: string;
  /**
   * Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  address__country__code?: string;
  /**
   * Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  address__postal__code?: string;
  /**
   * Address  Province
   * @description The customer"s state name or normalized province.
   */
  address__province?: string;
  /**
   * Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  address__province__code?: string;
  /**
   * Company
   * @description The customer"s company.
   */
  company?: string;
  /**
   * Customer Id
   * @description The id for the customer of a store.
   */
  customer_id?: string;
  /**
   * Email Address
   * @description The customer"s email address.
   */
  email_address?: string;
  /**
   * First Name
   * @description The customer"s first name.
   */
  first_name?: string;
  /**
   * Id
   * @description A unique identifier for the customer. Limited to 50 characters.
   */
  id?: string;
  /**
   * Last Name
   * @description The customer"s last name.
   */
  last_name?: string;
  /**
   * Opt In Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  opt_in_status?: boolean;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_UPDATE_CUSTOMER tool output.
 */
type MAILCHIMP_ADD_OR_UPDATE_CUSTOMER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER tool input.
 */
type MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER_INPUT = {
  /**
   * Email Address
   * @description Email address for a subscriber. This value is required only if the email address is not already present on the list.
   */
  email_address?: string;
  /**
   * Email Type
   * @description Type of email this member asked to get ("html" or "text").
   */
  email_type?: string;
  /**
   * Interests
   * @description The key of this object"s properties is the ID of the interest in question.
   */
  interests?: {
      [key: string]: boolean;
  };
  /**
   * Ip Opt
   * @description The IP address the subscriber used to confirm their opt-in status.
   */
  ip_opt?: string;
  /**
   * Ip Signup
   * @description IP address the subscriber signed up from.
   */
  ip_signup?: string;
  /**
   * Language
   * @description If set/detected, the [subscriber"s language](https://mailchimp.com/help/view-and-edit-contact-languages/).
   */
  language?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Location  Latitude
   * @description The location latitude.
   */
  location__latitude?: number;
  /**
   * Location  Longitude
   * @description The location longitude.
   */
  location__longitude?: number;
  /**
   * Marketing Permissions
   * @description The marketing permissions for the subscriber.
   */
  marketing_permissions?: {
      [key: string]: unknown;
  }[];
  /**
   * Merge Fields
   * @description A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
   */
  merge_fields?: {
      [key: string]: unknown;
  };
  /**
   * Skip Merge Validation
   * @description If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
   */
  skip_merge_validation?: boolean;
  /**
   * Status
   * @description Subscriber"s current status.
   * @enum {string}
   */
  status?: "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";
  /**
   * Status If New
   * @description Subscriber"s status. This value is required only if the email address is not already present on the list.
   * @enum {string}
   */
  status_if_new?: "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
  /**
   * Timestamp Opt
   * Format: date-time
   * @description The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
   */
  timestamp_opt?: string;
  /**
   * Timestamp Signup
   * Format: date-time
   * @description The date and time the subscriber signed up for the list in ISO 8601 format.
   */
  timestamp_signup?: string;
  /**
   * Vip
   * @description [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
   */
  vip?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER tool output.
 */
type MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT tool input.
 */
type MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT_INPUT = {
  /**
   * Backorders
   * @description The backorders of a product variant.
   */
  backorders?: string;
  /**
   * Id
   * @description A unique identifier for the product variant.
   */
  id?: string;
  /**
   * Image Url
   * @description The image URL for a product variant.
   */
  image_url?: string;
  /**
   * Inventory Quantity
   * @description The inventory quantity of a product variant.
   */
  inventory_quantity?: number;
  /**
   * Price
   * @description The price of a product variant.
   */
  price?: number;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Sku
   * @description The stock keeping unit (SKU) of a product variant.
   */
  sku?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Title
   * @description The title of a product variant.
   */
  title?: string;
  /**
   * Url
   * @description The URL for a product variant.
   */
  url?: string;
  /**
   * Variant Id
   * @description The id for the product variant.
   */
  variant_id?: string;
  /**
   * Visibility
   * @description The visibility of a product variant.
   */
  visibility?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT tool output.
 */
type MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_PRODUCT tool input.
 */
type MAILCHIMP_ADD_PRODUCT_INPUT = {
  /**
   * Description
   * @description The description of a product.
   */
  description?: string;
  /**
   * Handle
   * @description The handle of a product.
   */
  handle?: string;
  /**
   * Id
   * @description A unique identifier for the product.
   */
  id?: string;
  /**
   * Image Url
   * @description The image URL for a product.
   */
  image_url?: string;
  /**
   * Images
   * @description An array of the product"s images.
   */
  images?: {
      [key: string]: unknown;
  }[];
  /**
   * Published At Foreign
   * Format: date-time
   * @description The date and time the product was published.
   */
  published_at_foreign?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Title
   * @description The title of a product.
   */
  title?: string;
  /**
   * Type
   * @description The type of product.
   */
  type?: string;
  /**
   * Url
   * @description The URL for a product.
   */
  url?: string;
  /**
   * Variants
   * @description An array of the product"s variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
   */
  variants?: {
      [key: string]: unknown;
  }[];
  /**
   * Vendor
   * @description The vendor for a product.
   */
  vendor?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_PRODUCT tool output.
 */
type MAILCHIMP_ADD_PRODUCT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_PRODUCT_IMAGE tool input.
 */
type MAILCHIMP_ADD_PRODUCT_IMAGE_INPUT = {
  /**
   * Id
   * @description A unique identifier for the product image.
   */
  id?: string;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Url
   * @description The URL for a product image.
   */
  url?: string;
  /**
   * Variant Ids
   * @description The list of product variants using the image.
   */
  variant_ids?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_PRODUCT_IMAGE tool output.
 */
type MAILCHIMP_ADD_PRODUCT_IMAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_PRODUCT_VARIANT tool input.
 */
type MAILCHIMP_ADD_PRODUCT_VARIANT_INPUT = {
  /**
   * Backorders
   * @description The backorders of a product variant.
   */
  backorders?: string;
  /**
   * Id
   * @description A unique identifier for the product variant.
   */
  id?: string;
  /**
   * Image Url
   * @description The image URL for a product variant.
   */
  image_url?: string;
  /**
   * Inventory Quantity
   * @description The inventory quantity of a product variant.
   */
  inventory_quantity?: number;
  /**
   * Price
   * @description The price of a product variant.
   */
  price?: number;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Sku
   * @description The stock keeping unit (SKU) of a product variant.
   */
  sku?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Title
   * @description The title of a product variant.
   */
  title?: string;
  /**
   * Url
   * @description The URL for a product variant.
   */
  url?: string;
  /**
   * Visibility
   * @description The visibility of a product variant.
   */
  visibility?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_PRODUCT_VARIANT tool output.
 */
type MAILCHIMP_ADD_PRODUCT_VARIANT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_PROMO_CODE tool input.
 */
type MAILCHIMP_ADD_PROMO_CODE_INPUT = {
  /**
   * Code
   * @description The discount code. Restricted to UTF-8 characters with max length 50.
   */
  code?: string;
  /**
   * Created At Foreign
   * Format: date-time
   * @description The date and time the promotion was created in ISO 8601 format.
   */
  created_at_foreign?: string;
  /**
   * Enabled
   * @description Whether the promo code is currently enabled.
   */
  enabled?: boolean;
  /**
   * Id
   * @description A unique identifier for the promo code. Restricted to UTF-8 characters with max length 50.
   */
  id?: string;
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Redemption Url
   * @description The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
   */
  redemption_url?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Updated At Foreign
   * Format: date-time
   * @description The date and time the promotion was updated in ISO 8601 format.
   */
  updated_at_foreign?: string;
  /**
   * Usage Count
   * @description Number of times promo code has been used.
   */
  usage_count?: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_PROMO_CODE tool output.
 */
type MAILCHIMP_ADD_PROMO_CODE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_PROMO_RULE tool input.
 */
type MAILCHIMP_ADD_PROMO_RULE_INPUT = {
  /**
   * Amount
   * @description The amount of the promo code discount. If "type" is "fixed", the amount is treated as a monetary value. If "type" is "percentage", amount must be a decimal value between 0.0 and 1.0, inclusive.
   */
  amount?: number;
  /**
   * Created At Foreign
   * Format: date-time
   * @description The date and time the promotion was created in ISO 8601 format.
   */
  created_at_foreign?: string;
  /**
   * Description
   * @description The description of a promotion restricted to UTF-8 characters with max length 255.
   */
  description?: string;
  /**
   * Enabled
   * @description Whether the promo rule is currently enabled.
   */
  enabled?: boolean;
  /**
   * Ends At
   * Format: Promo date-time
   * @description The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
   */
  ends_at?: string;
  /**
   * Id
   * @description A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
   */
  id?: string;
  /**
   * Starts At
   * Format: date-time
   * @description The date and time when the promotion is in effect in ISO 8601 format.
   */
  starts_at?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Target
   * @description The target that the discount applies to.
   * @enum {string}
   */
  target?: "per_item" | "total" | "shipping";
  /**
   * Title
   * @description The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
   */
  title?: string;
  /**
   * Type
   * @description Type of discount. For free shipping set type to fixed.
   * @enum {string}
   */
  type?: "fixed" | "percentage";
  /**
   * Updated At Foreign
   * Format: date-time
   * @description The date and time the promotion was updated in ISO 8601 format.
   */
  updated_at_foreign?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_PROMO_RULE tool output.
 */
type MAILCHIMP_ADD_PROMO_RULE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_SEGMENT tool input.
 */
type MAILCHIMP_ADD_SEGMENT_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Name
   * @description The name of the segment.
   */
  name?: string;
  /**
   * Options  Conditions
   * @description Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
   */
  options__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Options  Match
   * @description Match type.
   * @enum {string}
   */
  options__match?: "any" | "all";
  /**
   * Static Segment
   * @description An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.
   */
  static_segment?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_SEGMENT tool output.
 */
type MAILCHIMP_ADD_SEGMENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_STORE tool input.
 */
type MAILCHIMP_ADD_STORE_INPUT = {
  /**
   * Address  Address1
   * @description The store"s mailing address.
   */
  address__address1?: string;
  /**
   * Address  Address2
   * @description An additional field for the store"s mailing address.
   */
  address__address2?: string;
  /**
   * Address  City
   * @description The city the store is located in.
   */
  address__city?: string;
  /**
   * Address  Country
   * @description The store"s country.
   */
  address__country?: string;
  /**
   * Address  Country  Code
   * @description The two-letter code for to the store"s country.
   */
  address__country__code?: string;
  /**
   * Address  Latitude
   * @description The latitude of the store location.
   */
  address__latitude?: number;
  /**
   * Address  Longitude
   * @description The longitude of the store location.
   */
  address__longitude?: number;
  /**
   * Address  Postal  Code
   * @description The store"s postal or zip code.
   */
  address__postal__code?: string;
  /**
   * Address  Province
   * @description The store"s state name or normalized province.
   */
  address__province?: string;
  /**
   * Address  Province  Code
   * @description The two-letter code for the store"s province or state.
   */
  address__province__code?: string;
  /**
   * Currency Code
   * @description The three-letter ISO 4217 code for the currency that the store accepts.
   */
  currency_code?: string;
  /**
   * Domain
   * @description The store domain. This parameter is required for Connected Sites and Google Ads.
   */
  domain?: string;
  /**
   * Email Address
   * @description The email address for the store.
   */
  email_address?: string;
  /**
   * Id
   * @description The unique identifier for the store.
   */
  id?: string;
  /**
   * Is Syncing
   * @description Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
   */
  is_syncing?: boolean;
  /**
   * List Id
   * @description The unique identifier for the list associated with the store. The `list_id` for a specific store cannot change.
   */
  list_id?: string;
  /**
   * Money Format
   * @description The currency format for the store. For example: `$`, `£`, etc.
   */
  money_format?: string;
  /**
   * Name
   * @description The name of the store.
   */
  name?: string;
  /**
   * Phone
   * @description The store phone number.
   */
  phone?: string;
  /**
   * Platform
   * @description The e-commerce platform of the store.
   */
  platform?: string;
  /**
   * Primary Locale
   * @description The primary locale for the store. For example: `en`, `de`, etc.
   */
  primary_locale?: string;
  /**
   * Timezone
   * @description The timezone for the store.
   */
  timezone?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_STORE tool output.
 */
type MAILCHIMP_ADD_STORE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL tool input.
 */
type MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL_INPUT = {
  /**
   * Email Address
   * @description The list member"s email address.
   */
  email_address?: string;
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL tool output.
 */
type MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_TEMPLATE tool input.
 */
type MAILCHIMP_ADD_TEMPLATE_INPUT = {
  /**
   * Folder Id
   * @description The id of the folder the template is currently in.
   */
  folder_id?: string;
  /**
   * Html
   * @description The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API.
   */
  html?: string;
  /**
   * Name
   * @description The name of the template.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_TEMPLATE tool output.
 */
type MAILCHIMP_ADD_TEMPLATE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_TEMPLATE_FOLDER tool input.
 */
type MAILCHIMP_ADD_TEMPLATE_FOLDER_INPUT = {
  /**
   * Name
   * @description The name of the folder.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_TEMPLATE_FOLDER tool output.
 */
type MAILCHIMP_ADD_TEMPLATE_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ADD_WEBHOOK tool input.
 */
type MAILCHIMP_ADD_WEBHOOK_INPUT = {
  /**
   * Events  Campaign
   * @description Whether the webhook is triggered when a campaign is sent or cancelled.
   */
  events__campaign?: boolean;
  /**
   * Events  Cleaned
   * @description Whether the webhook is triggered when a subscriber"s email address is cleaned from the list.
   */
  events__cleaned?: boolean;
  /**
   * Events  Profile
   * @description Whether the webhook is triggered when a subscriber"s profile is updated.
   */
  events__profile?: boolean;
  /**
   * Events  Subscribe
   * @description Whether the webhook is triggered when a list subscriber is added.
   */
  events__subscribe?: boolean;
  /**
   * Events  Unsubscribe
   * @description Whether the webhook is triggered when a list member unsubscribes.
   */
  events__unsubscribe?: boolean;
  /**
   * Events  Upemail
   * @description Whether the webhook is triggered when a subscriber"s email address is changed.
   */
  events__upemail?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Sources  Admin
   * @description Whether the webhook is triggered by admin-initiated actions in the web interface.
   */
  sources__admin?: boolean;
  /**
   * Sources  Api
   * @description Whether the webhook is triggered by actions initiated via the API.
   */
  sources__api?: boolean;
  /**
   * Sources  User
   * @description Whether the webhook is triggered by subscriber-initiated actions.
   */
  sources__user?: boolean;
  /**
   * Url
   * @description A valid URL for the Webhook.
   */
  url?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ADD_WEBHOOK tool output.
 */
type MAILCHIMP_ADD_WEBHOOK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ARCHIVE_AUTOMATION tool input.
 */
type MAILCHIMP_ARCHIVE_AUTOMATION_INPUT = {
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ARCHIVE_AUTOMATION tool output.
 */
type MAILCHIMP_ARCHIVE_AUTOMATION_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_ARCHIVE_LIST_MEMBER tool input.
 */
type MAILCHIMP_ARCHIVE_LIST_MEMBER_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_ARCHIVE_LIST_MEMBER tool output.
 */
type MAILCHIMP_ARCHIVE_LIST_MEMBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS tool input.
 */
type MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Members To Add
   * @description An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent.
   */
  members_to_add?: string[];
  /**
   * Members To Remove
   * @description An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent.
   */
  members_to_remove?: string[];
  /**
   * Segment Id
   * @description The unique id for the segment.
   */
  segment_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS tool output.
 */
type MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE tool input.
 */
type MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Members
   * @description An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call.
   */
  members?: {
      [key: string]: unknown;
  }[];
  /**
   * Skip Duplicate Check
   * @description If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false.
   */
  skip_duplicate_check?: boolean;
  /**
   * Skip Merge Validation
   * @description If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
   */
  skip_merge_validation?: boolean;
  /**
   * Sync Tags
   * @description Whether this batch operation will replace all existing tags with tags in request.
   */
  sync_tags?: boolean;
  /**
   * Update Existing
   * @description Whether this batch operation will change existing members" subscription status.
   */
  update_existing?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE tool output.
 */
type MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS tool input.
 */
type MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Report Id
   * @description The id for the abuse report.
   */
  report_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS tool output.
 */
type MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK tool input.
 */
type MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK tool output.
 */
type MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_CANCEL_CAMPAIGN tool input.
 */
type MAILCHIMP_CANCEL_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_CANCEL_CAMPAIGN tool output.
 */
type MAILCHIMP_CANCEL_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN tool input.
 */
type MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN tool output.
 */
type MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT tool input.
 */
type MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT_INPUT = {
  /**
   * Email Address
   * @description The list member"s email address.
   */
  email_address?: string;
  /**
   * Journey Id
   * @description The id for the Journey.
   */
  journey_id?: number;
  /**
   * Step Id
   * @description The id for the Step.
   */
  step_id?: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT tool output.
 */
type MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_CUSTOMIZE_SIGNUP_FORM tool input.
 */
type MAILCHIMP_CUSTOMIZE_SIGNUP_FORM_INPUT = {
  /**
   * Contents
   * @description The signup form body content.
   */
  contents?: {
      [key: string]: unknown;
  }[];
  /**
   * Header  Image  Align
   * @description Image alignment.
   * @enum {string}
   */
  header__image__align?: "none" | "left" | "center" | "right";
  /**
   * Header  Image  Alt
   * @description Alt text for the image.
   */
  header__image__alt?: string;
  /**
   * Header  Image  Border  Color
   * @description Image border color.
   */
  header__image__border__color?: string;
  /**
   * Header  Image  Border  Style
   * @description Image border style.
   * @enum {string}
   */
  header__image__border__style?: "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "outset" | "inset" | "ridge";
  /**
   * Header  Image  Border  Width
   * @description Image border width.
   */
  header__image__border__width?: string;
  /**
   * Header  Image  Height
   * @description Image height, in pixels.
   */
  header__image__height?: string;
  /**
   * Header  Image  Link
   * @description The URL that the header image will link to.
   */
  header__image__link?: string;
  /**
   * Header  Image  Target
   * @description Image link target.
   * @enum {string}
   */
  header__image__target?: "_blank" | "null";
  /**
   * Header  Image  Url
   * @description Header image URL.
   */
  header__image__url?: string;
  /**
   * Header  Image  Width
   * @description Image width, in pixels.
   */
  header__image__width?: string;
  /**
   * Header  Text
   * @description Header text.
   */
  header__text?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Styles
   * @description An array of objects, each representing an element style for the signup form.
   */
  styles?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_CUSTOMIZE_SIGNUP_FORM tool output.
 */
type MAILCHIMP_CUSTOMIZE_SIGNUP_FORM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_BATCH_REQUEST tool input.
 */
type MAILCHIMP_DELETE_BATCH_REQUEST_INPUT = {
  /**
   * Batch Id
   * @description The unique id for the batch operation.
   */
  batch_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_BATCH_REQUEST tool output.
 */
type MAILCHIMP_DELETE_BATCH_REQUEST_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_BATCH_WEBHOOK tool input.
 */
type MAILCHIMP_DELETE_BATCH_WEBHOOK_INPUT = {
  /**
   * Batch Webhook Id
   * @description The unique id for the batch webhook.
   */
  batch_webhook_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_BATCH_WEBHOOK tool output.
 */
type MAILCHIMP_DELETE_BATCH_WEBHOOK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CAMPAIGN tool input.
 */
type MAILCHIMP_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CAMPAIGN tool output.
 */
type MAILCHIMP_DELETE_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE tool input.
 */
type MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Feedback Id
   * @description The unique id for the feedback message.
   */
  feedback_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE tool output.
 */
type MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CAMPAIGN_FOLDER tool input.
 */
type MAILCHIMP_DELETE_CAMPAIGN_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique id for the campaign folder.
   */
  folder_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CAMPAIGN_FOLDER tool output.
 */
type MAILCHIMP_DELETE_CAMPAIGN_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CART tool input.
 */
type MAILCHIMP_DELETE_CART_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CART tool output.
 */
type MAILCHIMP_DELETE_CART_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CART_LINE_ITEM tool input.
 */
type MAILCHIMP_DELETE_CART_LINE_ITEM_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Line Id
   * @description The id for the line item of a cart.
   */
  line_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CART_LINE_ITEM tool output.
 */
type MAILCHIMP_DELETE_CART_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CONNECTED_SITE tool input.
 */
type MAILCHIMP_DELETE_CONNECTED_SITE_INPUT = {
  /**
   * Connected Site Id
   * @description The unique identifier for the site.
   */
  connected_site_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CONNECTED_SITE tool output.
 */
type MAILCHIMP_DELETE_CONNECTED_SITE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CUSTOMER tool input.
 */
type MAILCHIMP_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The id for the customer of a store.
   */
  customer_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_CUSTOMER tool output.
 */
type MAILCHIMP_DELETE_CUSTOMER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_DOMAIN tool input.
 */
type MAILCHIMP_DELETE_DOMAIN_INPUT = {
  /**
   * Domain Name
   * @description The domain name.
   */
  domain_name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_DOMAIN tool output.
 */
type MAILCHIMP_DELETE_DOMAIN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_FILE tool input.
 */
type MAILCHIMP_DELETE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique id for the File Manager file.
   */
  file_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_FILE tool output.
 */
type MAILCHIMP_DELETE_FILE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_FOLDER tool input.
 */
type MAILCHIMP_DELETE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique id for the File Manager folder.
   */
  folder_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_FOLDER tool output.
 */
type MAILCHIMP_DELETE_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_INTEREST_CATEGORY tool input.
 */
type MAILCHIMP_DELETE_INTEREST_CATEGORY_INPUT = {
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_INTEREST_CATEGORY tool output.
 */
type MAILCHIMP_DELETE_INTEREST_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_INTEREST_IN_CATEGORY tool input.
 */
type MAILCHIMP_DELETE_INTEREST_IN_CATEGORY_INPUT = {
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * Interest Id
   * @description The specific interest or "group name".
   */
  interest_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_INTEREST_IN_CATEGORY tool output.
 */
type MAILCHIMP_DELETE_INTEREST_IN_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_LANDING_PAGE tool input.
 */
type MAILCHIMP_DELETE_LANDING_PAGE_INPUT = {
  /**
   * Page Id
   * @description The unique id for the page.
   */
  page_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_LANDING_PAGE tool output.
 */
type MAILCHIMP_DELETE_LANDING_PAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_LIST tool input.
 */
type MAILCHIMP_DELETE_LIST_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_LIST tool output.
 */
type MAILCHIMP_DELETE_LIST_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_LIST_MEMBER tool input.
 */
type MAILCHIMP_DELETE_LIST_MEMBER_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_LIST_MEMBER tool output.
 */
type MAILCHIMP_DELETE_LIST_MEMBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_MERGE_FIELD tool input.
 */
type MAILCHIMP_DELETE_MERGE_FIELD_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Merge Id
   * @description The id for the merge field.
   */
  merge_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_MERGE_FIELD tool output.
 */
type MAILCHIMP_DELETE_MERGE_FIELD_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_NOTE tool input.
 */
type MAILCHIMP_DELETE_NOTE_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Note Id
   * @description The id for the note.
   */
  note_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_NOTE tool output.
 */
type MAILCHIMP_DELETE_NOTE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_ORDER tool input.
 */
type MAILCHIMP_DELETE_ORDER_INPUT = {
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_ORDER tool output.
 */
type MAILCHIMP_DELETE_ORDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_ORDER_LINE_ITEM tool input.
 */
type MAILCHIMP_DELETE_ORDER_LINE_ITEM_INPUT = {
  /**
   * Line Id
   * @description The id for the line item of an order.
   */
  line_id?: string;
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_ORDER_LINE_ITEM tool output.
 */
type MAILCHIMP_DELETE_ORDER_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PRODUCT tool input.
 */
type MAILCHIMP_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PRODUCT tool output.
 */
type MAILCHIMP_DELETE_PRODUCT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PRODUCT_IMAGE tool input.
 */
type MAILCHIMP_DELETE_PRODUCT_IMAGE_INPUT = {
  /**
   * Image Id
   * @description The id for the product image.
   */
  image_id?: string;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PRODUCT_IMAGE tool output.
 */
type MAILCHIMP_DELETE_PRODUCT_IMAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PRODUCT_VARIANT tool input.
 */
type MAILCHIMP_DELETE_PRODUCT_VARIANT_INPUT = {
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Variant Id
   * @description The id for the product variant.
   */
  variant_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PRODUCT_VARIANT tool output.
 */
type MAILCHIMP_DELETE_PRODUCT_VARIANT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PROMO_CODE tool input.
 */
type MAILCHIMP_DELETE_PROMO_CODE_INPUT = {
  /**
   * Promo Code Id
   * @description The id for the promo code of a store.
   */
  promo_code_id?: string;
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PROMO_CODE tool output.
 */
type MAILCHIMP_DELETE_PROMO_CODE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PROMO_RULE tool input.
 */
type MAILCHIMP_DELETE_PROMO_RULE_INPUT = {
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_PROMO_RULE tool output.
 */
type MAILCHIMP_DELETE_PROMO_RULE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_SEGMENT tool input.
 */
type MAILCHIMP_DELETE_SEGMENT_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Segment Id
   * @description The unique id for the segment.
   */
  segment_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_SEGMENT tool output.
 */
type MAILCHIMP_DELETE_SEGMENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_STORE tool input.
 */
type MAILCHIMP_DELETE_STORE_INPUT = {
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_STORE tool output.
 */
type MAILCHIMP_DELETE_STORE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_TEMPLATE tool input.
 */
type MAILCHIMP_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique id for the template.
   */
  template_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_TEMPLATE tool output.
 */
type MAILCHIMP_DELETE_TEMPLATE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_TEMPLATE_FOLDER tool input.
 */
type MAILCHIMP_DELETE_TEMPLATE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique id for the template folder.
   */
  folder_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_TEMPLATE_FOLDER tool output.
 */
type MAILCHIMP_DELETE_TEMPLATE_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_WEBHOOK tool input.
 */
type MAILCHIMP_DELETE_WEBHOOK_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Webhook Id
   * @description The webhook"s id.
   */
  webhook_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_WEBHOOK tool output.
 */
type MAILCHIMP_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_DELETE_WORKFLOW_EMAIL tool input.
 */
type MAILCHIMP_DELETE_WORKFLOW_EMAIL_INPUT = {
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_DELETE_WORKFLOW_EMAIL tool output.
 */
type MAILCHIMP_DELETE_WORKFLOW_EMAIL_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_ABUSE_REPORT tool input.
 */
type MAILCHIMP_GET_ABUSE_REPORT_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Report Id
   * @description The id for the abuse report.
   */
  report_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_ABUSE_REPORT tool output.
 */
type MAILCHIMP_GET_ABUSE_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_ACCOUNT_EXPORT_INFO tool input.
 */
type MAILCHIMP_GET_ACCOUNT_EXPORT_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Export Id
   * @description The unique id for the account export.
   */
  export_id?: string;
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_ACCOUNT_EXPORT_INFO tool output.
 */
type MAILCHIMP_GET_ACCOUNT_EXPORT_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_AUTHORIZED_APP_INFO tool input.
 */
type MAILCHIMP_GET_AUTHORIZED_APP_INFO_INPUT = {
  /**
   * App Id
   * @description The unique id for the connected authorized application.
   */
  app_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_AUTHORIZED_APP_INFO tool output.
 */
type MAILCHIMP_GET_AUTHORIZED_APP_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER tool input.
 */
type MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER_INPUT = {
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER tool output.
 */
type MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_AUTOMATION_INFO tool input.
 */
type MAILCHIMP_GET_AUTOMATION_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_AUTOMATION_INFO tool output.
 */
type MAILCHIMP_GET_AUTOMATION_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_BATCH_OPERATION_STATUS tool input.
 */
type MAILCHIMP_GET_BATCH_OPERATION_STATUS_INPUT = {
  /**
   * Batch Id
   * @description The unique id for the batch operation.
   */
  batch_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_BATCH_OPERATION_STATUS tool output.
 */
type MAILCHIMP_GET_BATCH_OPERATION_STATUS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_BATCH_WEBHOOK_INFO tool input.
 */
type MAILCHIMP_GET_BATCH_WEBHOOK_INFO_INPUT = {
  /**
   * Batch Webhook Id
   * @description The unique id for the batch webhook.
   */
  batch_webhook_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_BATCH_WEBHOOK_INFO tool output.
 */
type MAILCHIMP_GET_BATCH_WEBHOOK_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_CONTENT tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_CONTENT_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_CONTENT tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_CONTENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Feedback Id
   * @description The unique id for the feedback message.
   */
  feedback_id?: string;
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_FOLDER tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_FOLDER_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique id for the campaign folder.
   */
  folder_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_FOLDER tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_INFO tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_INFO_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Include Resend Shortcut Eligibility
   * @description Return the `resend_shortcut_eligibility` field in the response, which tells you if the campaign is eligible for the various Campaign Resend Shortcuts offered.
   */
  include_resend_shortcut_eligibility?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_INFO tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Link Id
   * @description The id for the link.
   */
  link_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_REPORT tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_REPORT_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_REPORT tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST tool input.
 */
type MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST tool output.
 */
type MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CART_INFO tool input.
 */
type MAILCHIMP_GET_CART_INFO_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CART_INFO tool output.
 */
type MAILCHIMP_GET_CART_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CART_LINE_ITEM tool input.
 */
type MAILCHIMP_GET_CART_LINE_ITEM_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Line Id
   * @description The id for the line item of a cart.
   */
  line_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CART_LINE_ITEM tool output.
 */
type MAILCHIMP_GET_CART_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER tool input.
 */
type MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Link Id
   * @description The id for the link.
   */
  link_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER tool output.
 */
type MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CONNECTED_SITE tool input.
 */
type MAILCHIMP_GET_CONNECTED_SITE_INPUT = {
  /**
   * Connected Site Id
   * @description The unique identifier for the site.
   */
  connected_site_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CONNECTED_SITE tool output.
 */
type MAILCHIMP_GET_CONNECTED_SITE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CONVERSATION tool input.
 */
type MAILCHIMP_GET_CONVERSATION_INPUT = {
  /**
   * Conversation Id
   * @description The unique id for the conversation.
   */
  conversation_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CONVERSATION tool output.
 */
type MAILCHIMP_GET_CONVERSATION_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_CUSTOMER_INFO tool input.
 */
type MAILCHIMP_GET_CUSTOMER_INFO_INPUT = {
  /**
   * Customer Id
   * @description The id for the customer of a store.
   */
  customer_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_CUSTOMER_INFO tool output.
 */
type MAILCHIMP_GET_CUSTOMER_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_DOMAIN_INFO tool input.
 */
type MAILCHIMP_GET_DOMAIN_INFO_INPUT = {
  /**
   * Domain Name
   * @description The domain name.
   */
  domain_name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_DOMAIN_INFO tool output.
 */
type MAILCHIMP_GET_DOMAIN_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_FACEBOOK_AD_INFO tool input.
 */
type MAILCHIMP_GET_FACEBOOK_AD_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Outreach Id
   * @description The outreach id.
   */
  outreach_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_FACEBOOK_AD_INFO tool output.
 */
type MAILCHIMP_GET_FACEBOOK_AD_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_FACEBOOK_AD_REPORT tool input.
 */
type MAILCHIMP_GET_FACEBOOK_AD_REPORT_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Outreach Id
   * @description The outreach id.
   */
  outreach_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_FACEBOOK_AD_REPORT tool output.
 */
type MAILCHIMP_GET_FACEBOOK_AD_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_FILE tool input.
 */
type MAILCHIMP_GET_FILE_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique id for the File Manager file.
   */
  file_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_FILE tool output.
 */
type MAILCHIMP_GET_FILE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_FOLDER tool input.
 */
type MAILCHIMP_GET_FOLDER_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique id for the File Manager folder.
   */
  folder_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_FOLDER tool output.
 */
type MAILCHIMP_GET_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH tool input.
 */
type MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Month
   * @description A specific month of list growth history.
   */
  month?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH tool output.
 */
type MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST tool input.
 */
type MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST tool output.
 */
type MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_INTEREST_CATEGORY_INFO tool input.
 */
type MAILCHIMP_GET_INTEREST_CATEGORY_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_INTEREST_CATEGORY_INFO tool output.
 */
type MAILCHIMP_GET_INTEREST_CATEGORY_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_INTEREST_IN_CATEGORY tool input.
 */
type MAILCHIMP_GET_INTEREST_IN_CATEGORY_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * Interest Id
   * @description The specific interest or "group name".
   */
  interest_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_INTEREST_IN_CATEGORY tool output.
 */
type MAILCHIMP_GET_INTEREST_IN_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_LANDING_PAGE_CONTENT tool input.
 */
type MAILCHIMP_GET_LANDING_PAGE_CONTENT_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Page Id
   * @description The unique id for the page.
   */
  page_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_LANDING_PAGE_CONTENT tool output.
 */
type MAILCHIMP_GET_LANDING_PAGE_CONTENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_LANDING_PAGE_INFO tool input.
 */
type MAILCHIMP_GET_LANDING_PAGE_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Page Id
   * @description The unique id for the page.
   */
  page_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_LANDING_PAGE_INFO tool output.
 */
type MAILCHIMP_GET_LANDING_PAGE_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_LANDING_PAGE_REPORT tool input.
 */
type MAILCHIMP_GET_LANDING_PAGE_REPORT_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Outreach Id
   * @description The outreach id.
   */
  outreach_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_LANDING_PAGE_REPORT tool output.
 */
type MAILCHIMP_GET_LANDING_PAGE_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_LATEST_CHIMP_CHATTER tool input.
 */
type MAILCHIMP_GET_LATEST_CHIMP_CHATTER_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_LATEST_CHIMP_CHATTER tool output.
 */
type MAILCHIMP_GET_LATEST_CHIMP_CHATTER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_LISTS_INFO tool input.
 */
type MAILCHIMP_GET_LISTS_INFO_INPUT = {
  /**
   * Before Campaign Last Sent
   * @description Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_campaign_last_sent?: string;
  /**
   * Before Date Created
   * @description Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_date_created?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Email
   * @description Restrict results to lists that include a specific subscriber"s email address.
   */
  email?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Has Ecommerce Store
   * @description Restrict results to lists that contain an active, connected, undeleted ecommerce store.
   */
  has_ecommerce_store?: boolean;
  /**
   * Include Total Contacts
   * @description Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
   */
  include_total_contacts?: boolean;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Campaign Last Sent
   * @description Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_campaign_last_sent?: string;
  /**
   * Since Date Created
   * @description Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_date_created?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "date_created";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_LISTS_INFO tool output.
 */
type MAILCHIMP_GET_LISTS_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_LIST_INFO tool input.
 */
type MAILCHIMP_GET_LIST_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Include Total Contacts
   * @description Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
   */
  include_total_contacts?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_LIST_INFO tool output.
 */
type MAILCHIMP_GET_LIST_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_MEMBER_INFO tool input.
 */
type MAILCHIMP_GET_MEMBER_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_MEMBER_INFO tool output.
 */
type MAILCHIMP_GET_MEMBER_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_MEMBER_NOTE tool input.
 */
type MAILCHIMP_GET_MEMBER_NOTE_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Note Id
   * @description The id for the note.
   */
  note_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_MEMBER_NOTE tool output.
 */
type MAILCHIMP_GET_MEMBER_NOTE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_MERGE_FIELD tool input.
 */
type MAILCHIMP_GET_MERGE_FIELD_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Merge Id
   * @description The id for the merge field.
   */
  merge_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_MERGE_FIELD tool output.
 */
type MAILCHIMP_GET_MERGE_FIELD_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_MESSAGE tool input.
 */
type MAILCHIMP_GET_MESSAGE_INPUT = {
  /**
   * Conversation Id
   * @description The unique id for the conversation.
   */
  conversation_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Message Id
   * @description The unique id for the conversation message.
   */
  message_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_MESSAGE tool output.
 */
type MAILCHIMP_GET_MESSAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER tool input.
 */
type MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER tool output.
 */
type MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_ORDER_INFO tool input.
 */
type MAILCHIMP_GET_ORDER_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_ORDER_INFO tool output.
 */
type MAILCHIMP_GET_ORDER_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_ORDER_LINE_ITEM tool input.
 */
type MAILCHIMP_GET_ORDER_LINE_ITEM_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Line Id
   * @description The id for the line item of an order.
   */
  line_id?: string;
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_ORDER_LINE_ITEM tool output.
 */
type MAILCHIMP_GET_ORDER_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_PRODUCT_IMAGE_INFO tool input.
 */
type MAILCHIMP_GET_PRODUCT_IMAGE_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Image Id
   * @description The id for the product image.
   */
  image_id?: string;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_PRODUCT_IMAGE_INFO tool output.
 */
type MAILCHIMP_GET_PRODUCT_IMAGE_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_PRODUCT_INFO tool input.
 */
type MAILCHIMP_GET_PRODUCT_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_PRODUCT_INFO tool output.
 */
type MAILCHIMP_GET_PRODUCT_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_PRODUCT_VARIANT_INFO tool input.
 */
type MAILCHIMP_GET_PRODUCT_VARIANT_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Variant Id
   * @description The id for the product variant.
   */
  variant_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_PRODUCT_VARIANT_INFO tool output.
 */
type MAILCHIMP_GET_PRODUCT_VARIANT_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_PROMO_CODE tool input.
 */
type MAILCHIMP_GET_PROMO_CODE_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Promo Code Id
   * @description The id for the promo code of a store.
   */
  promo_code_id?: string;
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_PROMO_CODE tool output.
 */
type MAILCHIMP_GET_PROMO_CODE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_PROMO_RULE tool input.
 */
type MAILCHIMP_GET_PROMO_RULE_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_PROMO_RULE tool output.
 */
type MAILCHIMP_GET_PROMO_RULE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SEGMENT_INFO tool input.
 */
type MAILCHIMP_GET_SEGMENT_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Include Cleaned
   * @description Include cleaned members in response
   */
  include_cleaned?: boolean;
  /**
   * Include Transactional
   * @description Include transactional members in response
   */
  include_transactional?: boolean;
  /**
   * Include Unsubscribed
   * @description Include unsubscribed members in response
   */
  include_unsubscribed?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Segment Id
   * @description The unique id for the segment.
   */
  segment_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SEGMENT_INFO tool output.
 */
type MAILCHIMP_GET_SEGMENT_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_STORE_INFO tool input.
 */
type MAILCHIMP_GET_STORE_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_STORE_INFO tool output.
 */
type MAILCHIMP_GET_STORE_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY tool input.
 */
type MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Since
   * @description Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY tool output.
 */
type MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW tool input.
 */
type MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW_INPUT = {
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW tool output.
 */
type MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY tool input.
 */
type MAILCHIMP_GET_SURVEY_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY tool output.
 */
type MAILCHIMP_GET_SURVEY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY_QUESTION_REPORT tool input.
 */
type MAILCHIMP_GET_SURVEY_QUESTION_REPORT_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Question Id
   * @description The ID of the survey question.
   */
  question_id?: string;
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY_QUESTION_REPORT tool output.
 */
type MAILCHIMP_GET_SURVEY_QUESTION_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY_REPORT tool input.
 */
type MAILCHIMP_GET_SURVEY_REPORT_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY_REPORT tool output.
 */
type MAILCHIMP_GET_SURVEY_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY_RESPONSE tool input.
 */
type MAILCHIMP_GET_SURVEY_RESPONSE_INPUT = {
  /**
   * Response Id
   * @description The ID of the survey response.
   */
  response_id?: string;
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_SURVEY_RESPONSE tool output.
 */
type MAILCHIMP_GET_SURVEY_RESPONSE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_TEMPLATE_FOLDER tool input.
 */
type MAILCHIMP_GET_TEMPLATE_FOLDER_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique id for the template folder.
   */
  folder_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_TEMPLATE_FOLDER tool output.
 */
type MAILCHIMP_GET_TEMPLATE_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_TEMPLATE_INFO tool input.
 */
type MAILCHIMP_GET_TEMPLATE_INFO_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Template Id
   * @description The unique id for the template.
   */
  template_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_TEMPLATE_INFO tool output.
 */
type MAILCHIMP_GET_TEMPLATE_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_UNSUBSCRIBED_MEMBER tool input.
 */
type MAILCHIMP_GET_UNSUBSCRIBED_MEMBER_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_UNSUBSCRIBED_MEMBER tool output.
 */
type MAILCHIMP_GET_UNSUBSCRIBED_MEMBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_WEBHOOK_INFO tool input.
 */
type MAILCHIMP_GET_WEBHOOK_INFO_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Webhook Id
   * @description The webhook"s id.
   */
  webhook_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_WEBHOOK_INFO tool output.
 */
type MAILCHIMP_GET_WEBHOOK_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_GET_WORKFLOW_EMAIL_INFO tool input.
 */
type MAILCHIMP_GET_WORKFLOW_EMAIL_INFO_INPUT = {
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_GET_WORKFLOW_EMAIL_INFO tool output.
 */
type MAILCHIMP_GET_WORKFLOW_EMAIL_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_ABUSE_REPORTS tool input.
 */
type MAILCHIMP_LIST_ABUSE_REPORTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_ABUSE_REPORTS tool output.
 */
type MAILCHIMP_LIST_ABUSE_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_ACCOUNT_EXPORTS tool input.
 */
type MAILCHIMP_LIST_ACCOUNT_EXPORTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_ACCOUNT_EXPORTS tool output.
 */
type MAILCHIMP_LIST_ACCOUNT_EXPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_ACCOUNT_ORDERS tool input.
 */
type MAILCHIMP_LIST_ACCOUNT_ORDERS_INPUT = {
  /**
   * Campaign Id
   * @description Restrict results to orders with a specific `campaign_id` value.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Customer Id
   * @description Restrict results to orders made by a specific customer.
   */
  customer_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Has Outreach
   * @description Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
   */
  has_outreach?: boolean;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Outreach Id
   * @description Restrict results to orders with a specific `outreach_id` value.
   */
  outreach_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_ACCOUNT_ORDERS tool output.
 */
type MAILCHIMP_LIST_ACCOUNT_ORDERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_ANSWERS_FOR_QUESTION tool input.
 */
type MAILCHIMP_LIST_ANSWERS_FOR_QUESTION_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Question Id
   * @description The ID of the survey question.
   */
  question_id?: string;
  /**
   * Respondent Familiarity Is
   * @description Filter survey responses by familiarity of the respondents.
   * @enum {string}
   */
  respondent_familiarity_is?: "new" | "known" | "unknown";
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_ANSWERS_FOR_QUESTION tool output.
 */
type MAILCHIMP_LIST_ANSWERS_FOR_QUESTION_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_API_ROOT_RESOURCES tool input.
 */
type MAILCHIMP_LIST_API_ROOT_RESOURCES_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_API_ROOT_RESOURCES tool output.
 */
type MAILCHIMP_LIST_API_ROOT_RESOURCES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTHORIZED_APPS tool input.
 */
type MAILCHIMP_LIST_AUTHORIZED_APPS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTHORIZED_APPS tool output.
 */
type MAILCHIMP_LIST_AUTHORIZED_APPS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTOMATED_EMAILS tool input.
 */
type MAILCHIMP_LIST_AUTOMATED_EMAILS_INPUT = {
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTOMATED_EMAILS tool output.
 */
type MAILCHIMP_LIST_AUTOMATED_EMAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS tool input.
 */
type MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS_INPUT = {
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS tool output.
 */
type MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTOMATIONS tool input.
 */
type MAILCHIMP_LIST_AUTOMATIONS_INPUT = {
  /**
   * Before Create Time
   * @description Restrict the response to automations created before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_create_time?: string;
  /**
   * Before Start Time
   * @description Restrict the response to automations started before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_start_time?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Create Time
   * @description Restrict the response to automations created after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_create_time?: string;
  /**
   * Since Start Time
   * @description Restrict the response to automations started after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_start_time?: string;
  /**
   * Status
   * @description Restrict the results to automations with the specified status.
   * @enum {string}
   */
  status?: "save" | "paused" | "sending";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_AUTOMATIONS tool output.
 */
type MAILCHIMP_LIST_AUTOMATIONS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_BATCH_REQUESTS tool input.
 */
type MAILCHIMP_LIST_BATCH_REQUESTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_BATCH_REQUESTS tool output.
 */
type MAILCHIMP_LIST_BATCH_REQUESTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_BATCH_WEBHOOKS tool input.
 */
type MAILCHIMP_LIST_BATCH_WEBHOOKS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_BATCH_WEBHOOKS tool output.
 */
type MAILCHIMP_LIST_BATCH_WEBHOOKS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGNS tool input.
 */
type MAILCHIMP_LIST_CAMPAIGNS_INPUT = {
  /**
   * Before Create Time
   * @description Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_create_time?: string;
  /**
   * Before Send Time
   * @description Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_send_time?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique folder id.
   */
  folder_id?: string;
  /**
   * Include Resend Shortcut Eligibility
   * @description Return the `resend_shortcut_eligibility` field in the response, which tells you if the campaign is eligible for the various Campaign Resend Shortcuts offered.
   */
  include_resend_shortcut_eligibility?: boolean;
  /**
   * List Id
   * @description The unique id for the list.
   */
  list_id?: string;
  /**
   * Member Id
   * @description Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address.
   */
  member_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Create Time
   * @description Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_create_time?: string;
  /**
   * Since Send Time
   * @description Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_send_time?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "create_time" | "send_time";
  /**
   * Status
   * @description The status of the campaign.
   * @enum {string}
   */
  status?: "save" | "paused" | "schedule" | "sending" | "sent";
  /**
   * Type
   * @description The campaign type.
   * @enum {string}
   */
  type?: "regular" | "plaintext" | "absplit" | "rss" | "variate";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGNS tool output.
 */
type MAILCHIMP_LIST_CAMPAIGNS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_DETAILS tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_DETAILS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns click reports sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "total_clicks" | "unique_clicks";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_DETAILS tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_DETAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_FEEDBACK tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_FEEDBACK_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_FEEDBACK tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_FEEDBACK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_FOLDERS tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_FOLDERS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_FOLDERS tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_FOLDERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since
   * @description Restrict results to campaign open events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns open reports sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "opens_count";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "title" | "total_revenue" | "total_purchased";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_REPORTS tool input.
 */
type MAILCHIMP_LIST_CAMPAIGN_REPORTS_INPUT = {
  /**
   * Before Send Time
   * @description Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_send_time?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Send Time
   * @description Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_send_time?: string;
  /**
   * Type
   * @description The campaign type.
   * @enum {string}
   */
  type?: "regular" | "plaintext" | "absplit" | "rss" | "variate";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CAMPAIGN_REPORTS tool output.
 */
type MAILCHIMP_LIST_CAMPAIGN_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CARTS tool input.
 */
type MAILCHIMP_LIST_CARTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CARTS tool output.
 */
type MAILCHIMP_LIST_CARTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CART_LINE_ITEMS tool input.
 */
type MAILCHIMP_LIST_CART_LINE_ITEMS_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CART_LINE_ITEMS tool output.
 */
type MAILCHIMP_LIST_CART_LINE_ITEMS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS tool input.
 */
type MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS tool output.
 */
type MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS tool input.
 */
type MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Link Id
   * @description The id for the link.
   */
  link_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS tool output.
 */
type MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CONNECTED_SITES tool input.
 */
type MAILCHIMP_LIST_CONNECTED_SITES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CONNECTED_SITES tool output.
 */
type MAILCHIMP_LIST_CONNECTED_SITES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CONVERSATIONS tool input.
 */
type MAILCHIMP_LIST_CONVERSATIONS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Has Unread Messages
   * @description Whether the conversation has any unread messages.
   * @enum {string}
   */
  has_unread_messages?: "true" | "false";
  /**
   * List Id
   * @description The unique id for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CONVERSATIONS tool output.
 */
type MAILCHIMP_LIST_CONVERSATIONS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_CUSTOMERS tool input.
 */
type MAILCHIMP_LIST_CUSTOMERS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Email Address
   * @description Restrict the response to customers with the email address.
   */
  email_address?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_CUSTOMERS tool output.
 */
type MAILCHIMP_LIST_CUSTOMERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS tool input.
 */
type MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS tool output.
 */
type MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_EEP_URL_ACTIVITY tool input.
 */
type MAILCHIMP_LIST_EEP_URL_ACTIVITY_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_EEP_URL_ACTIVITY tool output.
 */
type MAILCHIMP_LIST_EEP_URL_ACTIVITY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_EMAIL_ACTIVITY tool input.
 */
type MAILCHIMP_LIST_EMAIL_ACTIVITY_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since
   * @description Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_EMAIL_ACTIVITY tool output.
 */
type MAILCHIMP_LIST_EMAIL_ACTIVITY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_FACEBOOK_ADS tool input.
 */
type MAILCHIMP_LIST_FACEBOOK_ADS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "created_at" | "updated_at" | "end_time";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_FACEBOOK_ADS tool output.
 */
type MAILCHIMP_LIST_FACEBOOK_ADS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS tool input.
 */
type MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "created_at" | "updated_at" | "end_time";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS tool output.
 */
type MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT tool input.
 */
type MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Outreach Id
   * @description The outreach id.
   */
  outreach_id?: string;
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "title" | "total_revenue" | "total_purchased";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT tool output.
 */
type MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_FOLDERS tool input.
 */
type MAILCHIMP_LIST_FOLDERS_INPUT = {
  /**
   * Before Created At
   * @description Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_created_at?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Created By
   * @description The Mailchimp account user who created the File Manager file.
   */
  created_by?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Created At
   * @description Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_created_at?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_FOLDERS tool output.
 */
type MAILCHIMP_LIST_FOLDERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_GROWTH_HISTORY_DATA tool input.
 */
type MAILCHIMP_LIST_GROWTH_HISTORY_DATA_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "month";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_GROWTH_HISTORY_DATA tool output.
 */
type MAILCHIMP_LIST_GROWTH_HISTORY_DATA_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_INTERESTS_IN_CATEGORY tool input.
 */
type MAILCHIMP_LIST_INTERESTS_IN_CATEGORY_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_INTERESTS_IN_CATEGORY tool output.
 */
type MAILCHIMP_LIST_INTERESTS_IN_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_INTEREST_CATEGORIES tool input.
 */
type MAILCHIMP_LIST_INTEREST_CATEGORIES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Type
   * @description Restrict results a type of interest group
   */
  type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_INTEREST_CATEGORIES tool output.
 */
type MAILCHIMP_LIST_INTEREST_CATEGORIES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_LANDING_PAGES tool input.
 */
type MAILCHIMP_LIST_LANDING_PAGES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "created_at" | "updated_at";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_LANDING_PAGES tool output.
 */
type MAILCHIMP_LIST_LANDING_PAGES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_LANDING_PAGES_REPORTS tool input.
 */
type MAILCHIMP_LIST_LANDING_PAGES_REPORTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_LANDING_PAGES_REPORTS tool output.
 */
type MAILCHIMP_LIST_LANDING_PAGES_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_LOCATIONS tool input.
 */
type MAILCHIMP_LIST_LOCATIONS_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_LOCATIONS tool output.
 */
type MAILCHIMP_LIST_LOCATIONS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBERS_INFO tool input.
 */
type MAILCHIMP_LIST_MEMBERS_INFO_INPUT = {
  /**
   * Before Last Changed
   * @description Restrict results to subscribers whose information changed before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_last_changed?: string;
  /**
   * Before Timestamp Opt
   * @description Restrict results to subscribers who opted-in before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_timestamp_opt?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Email Type
   * @description The email type.
   */
  email_type?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Interest Category Id
   * @description The unique id for the interest category.
   */
  interest_category_id?: string;
  /**
   * Interest Ids
   * @description Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for any supplied interest categories.
   */
  interest_ids?: string;
  /**
   * Interest Match
   * @description Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. "any" will match a member with any of the interest supplied, "all" will only match members with every interest supplied, and "none" will match members without any of the interest supplied.
   * @enum {string}
   */
  interest_match?: "any" | "all" | "none";
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Last Campaign
   * @description Filter subscribers by those subscribed/unsubscribed/pending/cleaned since last email campaign send. Member status is required to use this filter.
   */
  since_last_campaign?: boolean;
  /**
   * Since Last Changed
   * @description Restrict results to subscribers whose information changed after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_last_changed?: string;
  /**
   * Since Timestamp Opt
   * @description Restrict results to subscribers who opted-in after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_timestamp_opt?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "timestamp_opt" | "timestamp_signup" | "last_changed";
  /**
   * Status
   * @description The subscriber"s status.
   * @enum {string}
   */
  status?: "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional" | "archived";
  /**
   * Unique Email Id
   * @description A unique identifier for the email address across all Mailchimp lists.
   */
  unique_email_id?: string;
  /**
   * Unsubscribed Since
   * @description Filter subscribers by those unsubscribed since a specific date. Using any status other than unsubscribed with this filter will result in an error.
   */
  unsubscribed_since?: string;
  /**
   * Vip Only
   * @description A filter to return only the list"s VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.
   */
  vip_only?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBERS_INFO tool output.
 */
type MAILCHIMP_LIST_MEMBERS_INFO_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBERS_IN_SEGMENT tool input.
 */
type MAILCHIMP_LIST_MEMBERS_IN_SEGMENT_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Include Cleaned
   * @description Include cleaned members in response
   */
  include_cleaned?: boolean;
  /**
   * Include Transactional
   * @description Include transactional members in response
   */
  include_transactional?: boolean;
  /**
   * Include Unsubscribed
   * @description Include unsubscribed members in response
   */
  include_unsubscribed?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Segment Id
   * @description The unique id for the segment.
   */
  segment_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBERS_IN_SEGMENT tool output.
 */
type MAILCHIMP_LIST_MEMBERS_IN_SEGMENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBER_EVENTS tool input.
 */
type MAILCHIMP_LIST_MEMBER_EVENTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBER_EVENTS tool output.
 */
type MAILCHIMP_LIST_MEMBER_EVENTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBER_GOAL_EVENTS tool input.
 */
type MAILCHIMP_LIST_MEMBER_GOAL_EVENTS_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBER_GOAL_EVENTS tool output.
 */
type MAILCHIMP_LIST_MEMBER_GOAL_EVENTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBER_TAGS tool input.
 */
type MAILCHIMP_LIST_MEMBER_TAGS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MEMBER_TAGS tool output.
 */
type MAILCHIMP_LIST_MEMBER_TAGS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MERGE_FIELDS tool input.
 */
type MAILCHIMP_LIST_MERGE_FIELDS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Required
   * @description Whether it"s a required merge field.
   */
  required?: boolean;
  /**
   * Type
   * @description The merge field type.
   */
  type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MERGE_FIELDS tool output.
 */
type MAILCHIMP_LIST_MERGE_FIELDS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_MESSAGES tool input.
 */
type MAILCHIMP_LIST_MESSAGES_INPUT = {
  /**
   * Before Timestamp
   * @description Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_timestamp?: string;
  /**
   * Conversation Id
   * @description The unique id for the conversation.
   */
  conversation_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Is Read
   * @description Whether a conversation message has been marked as read.
   * @enum {string}
   */
  is_read?: "true" | "false";
  /**
   * Since Timestamp
   * @description Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_timestamp?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_MESSAGES tool output.
 */
type MAILCHIMP_LIST_MESSAGES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_ORDERS tool input.
 */
type MAILCHIMP_LIST_ORDERS_INPUT = {
  /**
   * Campaign Id
   * @description Restrict results to orders with a specific `campaign_id` value.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Customer Id
   * @description Restrict results to orders made by a specific customer.
   */
  customer_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Has Outreach
   * @description Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
   */
  has_outreach?: boolean;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Outreach Id
   * @description Restrict results to orders with a specific `outreach_id` value.
   */
  outreach_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_ORDERS tool output.
 */
type MAILCHIMP_LIST_ORDERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_ORDER_LINE_ITEMS tool input.
 */
type MAILCHIMP_LIST_ORDER_LINE_ITEMS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_ORDER_LINE_ITEMS tool output.
 */
type MAILCHIMP_LIST_ORDER_LINE_ITEMS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_PRODUCT tool input.
 */
type MAILCHIMP_LIST_PRODUCT_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_PRODUCT tool output.
 */
type MAILCHIMP_LIST_PRODUCT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_PRODUCT_IMAGES tool input.
 */
type MAILCHIMP_LIST_PRODUCT_IMAGES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_PRODUCT_IMAGES tool output.
 */
type MAILCHIMP_LIST_PRODUCT_IMAGES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_PRODUCT_VARIANTS tool input.
 */
type MAILCHIMP_LIST_PRODUCT_VARIANTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_PRODUCT_VARIANTS tool output.
 */
type MAILCHIMP_LIST_PRODUCT_VARIANTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_PROMO_CODES tool input.
 */
type MAILCHIMP_LIST_PROMO_CODES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_PROMO_CODES tool output.
 */
type MAILCHIMP_LIST_PROMO_CODES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_PROMO_RULES tool input.
 */
type MAILCHIMP_LIST_PROMO_RULES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_PROMO_RULES tool output.
 */
type MAILCHIMP_LIST_PROMO_RULES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_RECENT_ACTIVITY tool input.
 */
type MAILCHIMP_LIST_RECENT_ACTIVITY_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_RECENT_ACTIVITY tool output.
 */
type MAILCHIMP_LIST_RECENT_ACTIVITY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_RECENT_MEMBER_NOTES tool input.
 */
type MAILCHIMP_LIST_RECENT_MEMBER_NOTES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns notes sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "created_at" | "updated_at" | "note_id";
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_RECENT_MEMBER_NOTES tool output.
 */
type MAILCHIMP_LIST_RECENT_MEMBER_NOTES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SEGMENTS tool input.
 */
type MAILCHIMP_LIST_SEGMENTS_INPUT = {
  /**
   * Before Created At
   * @description Restrict results to segments created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_created_at?: string;
  /**
   * Before Updated At
   * @description Restrict results to segments update before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_updated_at?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Include Cleaned
   * @description Include cleaned members in response
   */
  include_cleaned?: boolean;
  /**
   * Include Transactional
   * @description Include transactional members in response
   */
  include_transactional?: boolean;
  /**
   * Include Unsubscribed
   * @description Include unsubscribed members in response
   */
  include_unsubscribed?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Created At
   * @description Restrict results to segments created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_created_at?: string;
  /**
   * Since Updated At
   * @description Restrict results to segments update after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_updated_at?: string;
  /**
   * Type
   * @description Limit results based on segment type.
   */
  type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SEGMENTS tool output.
 */
type MAILCHIMP_LIST_SEGMENTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SENDING_DOMAINS tool input.
 */
type MAILCHIMP_LIST_SENDING_DOMAINS_INPUT = object;

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SENDING_DOMAINS tool output.
 */
type MAILCHIMP_LIST_SENDING_DOMAINS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SIGNUP_FORMS tool input.
 */
type MAILCHIMP_LIST_SIGNUP_FORMS_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SIGNUP_FORMS tool output.
 */
type MAILCHIMP_LIST_SIGNUP_FORMS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_STORED_FILES tool input.
 */
type MAILCHIMP_LIST_STORED_FILES_INPUT = {
  /**
   * Before Created At
   * @description Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_created_at?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Created By
   * @description The Mailchimp account user who created the File Manager file.
   */
  created_by?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Created At
   * @description Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_created_at?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "added_date" | "name" | "size";
  /**
   * Type
   * @description The file type for the File Manager file.
   */
  type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_STORED_FILES tool output.
 */
type MAILCHIMP_LIST_STORED_FILES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_STORES tool input.
 */
type MAILCHIMP_LIST_STORES_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_STORES tool output.
 */
type MAILCHIMP_LIST_STORES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW tool input.
 */
type MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW_INPUT = {
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW tool output.
 */
type MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS tool input.
 */
type MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS tool output.
 */
type MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SURVEY_REPORTS tool input.
 */
type MAILCHIMP_LIST_SURVEY_REPORTS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SURVEY_REPORTS tool output.
 */
type MAILCHIMP_LIST_SURVEY_REPORTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_SURVEY_RESPONSES tool input.
 */
type MAILCHIMP_LIST_SURVEY_RESPONSES_INPUT = {
  /**
   * Answered Question
   * @description The ID of the question that was answered.
   */
  answered_question?: number;
  /**
   * Chose Answer
   * @description The ID of the option chosen to filter responses on.
   */
  chose_answer?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Respondent Familiarity Is
   * @description Filter survey responses by familiarity of the respondents.
   * @enum {string}
   */
  respondent_familiarity_is?: "new" | "known" | "unknown";
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_SURVEY_RESPONSES tool output.
 */
type MAILCHIMP_LIST_SURVEY_RESPONSES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_TEMPLATES tool input.
 */
type MAILCHIMP_LIST_TEMPLATES_INPUT = {
  /**
   * Before Date Created
   * @description Restrict the response to templates created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_date_created?: string;
  /**
   * Category
   * @description Limit results based on category.
   */
  category?: string;
  /**
   * Content Type
   * @description Limit results based on how the template"s content is put together. Only templates of type `user` can be filtered by `content_type`. If you want to retrieve saved templates created with the legacy email editor, then filter `content_type` to `template`. If you"d rather pull your saved templates for the new editor, filter to `multichannel`. For code your own templates, filter to `html`.
   * @enum {string}
   */
  content_type?: "html" | "template" | "multichannel";
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Created By
   * @description The Mailchimp account user who created the template.
   */
  created_by?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique folder id.
   */
  folder_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Date Created
   * @description Restrict the response to templates created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_date_created?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns user templates sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "date_created" | "date_edited" | "name";
  /**
   * Type
   * @description Limit results based on template type.
   */
  type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_TEMPLATES tool output.
 */
type MAILCHIMP_LIST_TEMPLATES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_TEMPLATE_FOLDERS tool input.
 */
type MAILCHIMP_LIST_TEMPLATE_FOLDERS_INPUT = {
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_TEMPLATE_FOLDERS tool output.
 */
type MAILCHIMP_LIST_TEMPLATE_FOLDERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_TOP_EMAIL_CLIENTS tool input.
 */
type MAILCHIMP_LIST_TOP_EMAIL_CLIENTS_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_TOP_EMAIL_CLIENTS tool output.
 */
type MAILCHIMP_LIST_TOP_EMAIL_CLIENTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES tool input.
 */
type MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES tool output.
 */
type MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS tool input.
 */
type MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS tool output.
 */
type MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_LIST_WEBHOOKS tool input.
 */
type MAILCHIMP_LIST_WEBHOOKS_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_LIST_WEBHOOKS tool output.
 */
type MAILCHIMP_LIST_WEBHOOKS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_PAUSE_AUTOMATED_EMAIL tool input.
 */
type MAILCHIMP_PAUSE_AUTOMATED_EMAIL_INPUT = {
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_PAUSE_AUTOMATED_EMAIL tool output.
 */
type MAILCHIMP_PAUSE_AUTOMATED_EMAIL_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_PAUSE_AUTOMATION_EMAILS tool input.
 */
type MAILCHIMP_PAUSE_AUTOMATION_EMAILS_INPUT = {
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_PAUSE_AUTOMATION_EMAILS tool output.
 */
type MAILCHIMP_PAUSE_AUTOMATION_EMAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_PAUSE_RSS_CAMPAIGN tool input.
 */
type MAILCHIMP_PAUSE_RSS_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_PAUSE_RSS_CAMPAIGN tool output.
 */
type MAILCHIMP_PAUSE_RSS_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_PING tool input.
 */
type MAILCHIMP_PING_INPUT = object;

/**
 * Type of MAILCHIMP's MAILCHIMP_PING tool output.
 */
type MAILCHIMP_PING_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_PUBLISH_A_SURVEY tool input.
 */
type MAILCHIMP_PUBLISH_A_SURVEY_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_PUBLISH_A_SURVEY tool output.
 */
type MAILCHIMP_PUBLISH_A_SURVEY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_PUBLISH_LANDING_PAGE tool input.
 */
type MAILCHIMP_PUBLISH_LANDING_PAGE_INPUT = {
  /**
   * Page Id
   * @description The unique id for the page.
   */
  page_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_PUBLISH_LANDING_PAGE tool output.
 */
type MAILCHIMP_PUBLISH_LANDING_PAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT tool input.
 */
type MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Segment Id
   * @description The unique id for the segment.
   */
  segment_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT tool output.
 */
type MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW tool input.
 */
type MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW_INPUT = {
  /**
   * Email Address
   * @description The list member"s email address.
   */
  email_address?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW tool output.
 */
type MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_REPLICATE_CAMPAIGN tool input.
 */
type MAILCHIMP_REPLICATE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_REPLICATE_CAMPAIGN tool output.
 */
type MAILCHIMP_REPLICATE_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_RESEND_CAMPAIGN tool input.
 */
type MAILCHIMP_RESEND_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Shortcut Type
   * @description Which campaign resend shortcut to use. Default is `to_non_openers`.
   * @enum {string}
   */
  shortcut_type?: "to_non_openers" | "to_new_subscribers" | "to_non_clickers";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_RESEND_CAMPAIGN tool output.
 */
type MAILCHIMP_RESEND_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_RESUME_RSS_CAMPAIGN tool input.
 */
type MAILCHIMP_RESUME_RSS_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_RESUME_RSS_CAMPAIGN tool output.
 */
type MAILCHIMP_RESUME_RSS_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS tool input.
 */
type MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS tool output.
 */
type MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_RETRIEVE_FOLDER_CONTENTS tool input.
 */
type MAILCHIMP_RETRIEVE_FOLDER_CONTENTS_INPUT = {
  /**
   * Before Created At
   * @description Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  before_created_at?: string;
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Created By
   * @description The Mailchimp account user who created the File Manager file.
   */
  created_by?: string;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique id for the File Manager folder.
   */
  folder_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Since Created At
   * @description Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
   */
  since_created_at?: string;
  /**
   * Sort Dir
   * @description Determines the order direction for sorted results.
   * @enum {string}
   */
  sort_dir?: "ASC" | "DESC";
  /**
   * Sort Field
   * @description Returns files sorted by the specified field.
   * @enum {string}
   */
  sort_field?: "added_date" | "name" | "size";
  /**
   * Type
   * @description The file type for the File Manager file.
   */
  type?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_RETRIEVE_FOLDER_CONTENTS tool output.
 */
type MAILCHIMP_RETRIEVE_FOLDER_CONTENTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SCHEDULE_CAMPAIGN tool input.
 */
type MAILCHIMP_SCHEDULE_CAMPAIGN_INPUT = {
  /**
   * Batch  Delivery  Batch  Count
   * @description The number of batches for the campaign send.
   */
  batch__delivery__batch__count?: number;
  /**
   * Batch  Delivery  Batch  Delay
   * @description The delay, in minutes, between batches.
   */
  batch__delivery__batch__delay?: number;
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Schedule Time
   * Format: date-time
   * @description The UTC date and time to schedule the campaign for delivery in ISO 8601 format. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).
   */
  schedule_time?: string;
  /**
   * Timewarp
   * @description Choose whether the campaign should use [Timewarp](https://mailchimp.com/help/use-timewarp/) when sending. Campaigns scheduled with Timewarp are localized based on the recipients" time zones. For example, a Timewarp campaign with a `schedule_time` of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to `true` for campaigns using [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/).
   */
  timewarp?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SCHEDULE_CAMPAIGN tool output.
 */
type MAILCHIMP_SCHEDULE_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SEARCH_CAMPAIGNS tool input.
 */
type MAILCHIMP_SEARCH_CAMPAIGNS_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Query
   * @description The search query used to filter results.
   */
  query?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SEARCH_CAMPAIGNS tool output.
 */
type MAILCHIMP_SEARCH_CAMPAIGNS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME tool input.
 */
type MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Name
   * @description The search query used to filter tags.  The search query will be compared to each tag as a prefix, so all tags that have a name starting with this field will be returned.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME tool output.
 */
type MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SEARCH_MEMBERS tool input.
 */
type MAILCHIMP_SEARCH_MEMBERS_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique id for the list.
   */
  list_id?: string;
  /**
   * Query
   * @description The search query used to filter results. Query should be a valid email, or a string representing a contact"s first or last name.
   */
  query?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SEARCH_MEMBERS tool output.
 */
type MAILCHIMP_SEARCH_MEMBERS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SEND_CAMPAIGN tool input.
 */
type MAILCHIMP_SEND_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SEND_CAMPAIGN tool output.
 */
type MAILCHIMP_SEND_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SEND_TEST_EMAIL tool input.
 */
type MAILCHIMP_SEND_TEST_EMAIL_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Send Type
   * @description Choose the type of test email to send.
   * @enum {string}
   */
  send_type?: "html" | "plaintext";
  /**
   * Test Emails
   * @description An array of email addresses to send the test email to.
   */
  test_emails?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SEND_TEST_EMAIL tool output.
 */
type MAILCHIMP_SEND_TEST_EMAIL_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_SET_CAMPAIGN_CONTENT tool input.
 */
type MAILCHIMP_SET_CAMPAIGN_CONTENT_INPUT = {
  /**
   * Archive  Archive  Content
   * @description The base64-encoded representation of the archive file.
   */
  archive__archive__content?: string;
  /**
   * Archive  Archive  Type
   * @description The type of encoded file. Defaults to zip.
   * @enum {string}
   */
  archive__archive__type?: "zip" | "tar.gz" | "tar.bz2" | "tar" | "tgz" | "tbz";
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Html
   * @description The raw HTML for the campaign.
   */
  html?: string;
  /**
   * Plain Text
   * @description The plain-text portion of the campaign. If left unspecified, we"ll generate this automatically.
   */
  plain_text?: string;
  /**
   * Template  Id
   * @description The id of the template to use.
   */
  template__id?: number;
  /**
   * Url
   * @description When importing a campaign, the URL where the HTML lives.
   */
  url?: string;
  /**
   * Variate Contents
   * @description Content options for [Multivariate Campaigns](https://mailchimp.com/help/about-multivariate-campaigns/). Each content option must provide HTML content and may optionally provide plain text. For campaigns not testing content, only one object should be provided.
   */
  variate_contents?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_SET_CAMPAIGN_CONTENT tool output.
 */
type MAILCHIMP_SET_CAMPAIGN_CONTENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_START_AUTOMATED_EMAIL tool input.
 */
type MAILCHIMP_START_AUTOMATED_EMAIL_INPUT = {
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_START_AUTOMATED_EMAIL tool output.
 */
type MAILCHIMP_START_AUTOMATED_EMAIL_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_START_AUTOMATION_EMAILS tool input.
 */
type MAILCHIMP_START_AUTOMATION_EMAILS_INPUT = {
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_START_AUTOMATION_EMAILS tool output.
 */
type MAILCHIMP_START_AUTOMATION_EMAILS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_START_BATCH_OPERATION tool input.
 */
type MAILCHIMP_START_BATCH_OPERATION_INPUT = {
  /**
   * Operations
   * @description An array of objects that describes operations to perform.
   */
  operations?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_START_BATCH_OPERATION tool output.
 */
type MAILCHIMP_START_BATCH_OPERATION_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UNPUBLISH_A_SURVEY tool input.
 */
type MAILCHIMP_UNPUBLISH_A_SURVEY_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Survey Id
   * @description The ID of the survey.
   */
  survey_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UNPUBLISH_A_SURVEY tool output.
 */
type MAILCHIMP_UNPUBLISH_A_SURVEY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UNPUBLISH_LANDING_PAGE tool input.
 */
type MAILCHIMP_UNPUBLISH_LANDING_PAGE_INPUT = {
  /**
   * Page Id
   * @description The unique id for the page.
   */
  page_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UNPUBLISH_LANDING_PAGE tool output.
 */
type MAILCHIMP_UNPUBLISH_LANDING_PAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UNSCHEDULE_CAMPAIGN tool input.
 */
type MAILCHIMP_UNSCHEDULE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UNSCHEDULE_CAMPAIGN tool output.
 */
type MAILCHIMP_UNSCHEDULE_CAMPAIGN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_BATCH_WEBHOOK tool input.
 */
type MAILCHIMP_UPDATE_BATCH_WEBHOOK_INPUT = {
  /**
   * Batch Webhook Id
   * @description The unique id for the batch webhook.
   */
  batch_webhook_id?: string;
  /**
   * Enabled
   * @description Whether the webhook receives requests or not.
   */
  enabled?: boolean;
  /**
   * Url
   * @description A valid URL for the Webhook.
   */
  url?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_BATCH_WEBHOOK tool output.
 */
type MAILCHIMP_UPDATE_BATCH_WEBHOOK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE tool input.
 */
type MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE_INPUT = {
  /**
   * Block Id
   * @description The block id for the editable block that the feedback addresses.
   */
  block_id?: number;
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Feedback Id
   * @description The unique id for the feedback message.
   */
  feedback_id?: string;
  /**
   * Is Complete
   * @description The status of feedback.
   */
  is_complete?: boolean;
  /**
   * Message
   * @description The content of the feedback.
   */
  message?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE tool output.
 */
type MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CAMPAIGN_FOLDER tool input.
 */
type MAILCHIMP_UPDATE_CAMPAIGN_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique id for the campaign folder.
   */
  folder_id?: string;
  /**
   * Name
   * @description Name to associate with the folder.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CAMPAIGN_FOLDER tool output.
 */
type MAILCHIMP_UPDATE_CAMPAIGN_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS tool input.
 */
type MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS_INPUT = {
  /**
   * Campaign Id
   * @description The unique id for the campaign.
   */
  campaign_id?: string;
  /**
   * Recipients  List  Id
   * @description The unique list id.
   */
  recipients__list__id?: string;
  /**
   * Recipients  Segment  Opts  Conditions
   * @description Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
   */
  recipients__segment__opts__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Recipients  Segment  Opts  Match
   * @description Segment match type.
   * @enum {string}
   */
  recipients__segment__opts__match?: "any" | "all";
  /**
   * Recipients  Segment  Opts  Prebuilt  Segment  Id
   * @description The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
   */
  recipients__segment__opts__prebuilt__segment__id?: string;
  /**
   * Recipients  Segment  Opts  Saved  Segment  Id
   * @description The id for an existing saved segment.
   */
  recipients__segment__opts__saved__segment__id?: number;
  /**
   * Rss  Opts  Constrain  Rss  Img
   * @description Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
   */
  rss__opts__constrain__rss__img?: boolean;
  /**
   * Rss  Opts  Feed  Url
   * Format: uri
   * @description The URL for the RSS feed.
   */
  rss__opts__feed__url?: string;
  /**
   * Rss  Opts  Frequency
   * @description The frequency of the RSS Campaign.
   * @enum {string}
   */
  rss__opts__frequency?: "daily" | "weekly" | "monthly";
  /**
   * Rss  Opts  Schedule  Daily  Send  Friday
   * @description Sends the daily RSS Campaign on Fridays.
   */
  rss__opts__schedule__daily__send__friday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Monday
   * @description Sends the daily RSS Campaign on Mondays.
   */
  rss__opts__schedule__daily__send__monday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Saturday
   * @description Sends the daily RSS Campaign on Saturdays.
   */
  rss__opts__schedule__daily__send__saturday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Sunday
   * @description Sends the daily RSS Campaign on Sundays.
   */
  rss__opts__schedule__daily__send__sunday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Thursday
   * @description Sends the daily RSS Campaign on Thursdays.
   */
  rss__opts__schedule__daily__send__thursday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Tuesday
   * @description Sends the daily RSS Campaign on Tuesdays.
   */
  rss__opts__schedule__daily__send__tuesday?: boolean;
  /**
   * Rss  Opts  Schedule  Daily  Send  Wednesday
   * @description Sends the daily RSS Campaign on Wednesdays.
   */
  rss__opts__schedule__daily__send__wednesday?: boolean;
  /**
   * Rss  Opts  Schedule  Hour
   * @description The hour to send the campaign in local time. Acceptable hours are 0-23. For example, "4" would be 4am in [your account"s default time zone](https://mailchimp.com/help/set-account-defaults/).
   */
  rss__opts__schedule__hour?: number;
  /**
   * Rss  Opts  Schedule  Monthly  Send  Date
   * @description The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where "0" is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
   */
  rss__opts__schedule__monthly__send__date?: number;
  /**
   * Rss  Opts  Schedule  Weekly  Send  Day
   * @description The day of the week to send a weekly RSS Campaign.
   * @enum {string}
   */
  rss__opts__schedule__weekly__send__day?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
  /**
   * Settings  Authenticate
   * @description Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
   */
  settings__authenticate?: boolean;
  /**
   * Settings  Auto  Fb  Post
   * @description An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
   */
  settings__auto__fb__post?: string[];
  /**
   * Settings  Auto  Footer
   * @description Automatically append Mailchimp"s [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
   */
  settings__auto__footer?: boolean;
  /**
   * Settings  Auto  Tweet
   * @description Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
   */
  settings__auto__tweet?: boolean;
  /**
   * Settings  Fb  Comments
   * @description Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
   */
  settings__fb__comments?: boolean;
  /**
   * Settings  Folder  Id
   * @description If the campaign is listed in a folder, the id for that folder.
   */
  settings__folder__id?: string;
  /**
   * Settings  From  Name
   * @description The "from" name on the campaign (not an email address).
   */
  settings__from__name?: string;
  /**
   * Settings  Inline  Css
   * @description Automatically inline the CSS included with the campaign content.
   */
  settings__inline__css?: boolean;
  /**
   * Settings  Preview  Text
   * @description The preview text for the campaign.
   */
  settings__preview__text?: string;
  /**
   * Settings  Reply  To
   * @description The reply-to email address for the campaign.
   */
  settings__reply__to?: string;
  /**
   * Settings  Subject  Line
   * @description The subject line for the campaign.
   */
  settings__subject__line?: string;
  /**
   * Settings  Template  Id
   * @description The id of the template to use.
   */
  settings__template__id?: number;
  /**
   * Settings  Title
   * @description The title of the campaign.
   */
  settings__title?: string;
  /**
   * Settings  To  Name
   * @description The campaign"s custom "To" name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
   */
  settings__to__name?: string;
  /**
   * Settings  Use  Conversation
   * @description Use Mailchimp Conversation feature to manage out-of-office replies.
   */
  settings__use__conversation?: boolean;
  /**
   * Social  Card  Description
   * @description A short summary of the campaign to display.
   */
  social__card__description?: string;
  /**
   * Social  Card  Image  Url
   * @description The url for the header image for the card.
   */
  social__card__image__url?: string;
  /**
   * Social  Card  Title
   * @description The title for the card. Typically the subject line of the campaign.
   */
  social__card__title?: string;
  /**
   * Tracking  Capsule  Notes
   * @description Update contact notes for a campaign based on subscriber email addresses.
   */
  tracking__capsule__notes?: boolean;
  /**
   * Tracking  Clicktale
   * @description The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
   */
  tracking__clicktale?: string;
  /**
   * Tracking  Ecomm360
   * @description Whether to enable e-commerce tracking.
   */
  tracking__ecomm360?: boolean;
  /**
   * Tracking  Goal  Tracking
   * @description Deprecated
   */
  tracking__goal__tracking?: boolean;
  /**
   * Tracking  Google  Analytics
   * @description The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
   */
  tracking__google__analytics?: string;
  /**
   * Tracking  Html  Clicks
   * @description Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
   */
  tracking__html__clicks?: boolean;
  /**
   * Tracking  Opens
   * @description Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. Cannot be set to false for variate campaigns.
   */
  tracking__opens?: boolean;
  /**
   * Tracking  Salesforce  Campaign
   * @description Create a campaign in a connected Salesforce account.
   */
  tracking__salesforce__campaign?: boolean;
  /**
   * Tracking  Salesforce  Notes
   * @description Update contact notes for a campaign based on subscriber email addresses.
   */
  tracking__salesforce__notes?: boolean;
  /**
   * Tracking  Text  Clicks
   * @description Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
   */
  tracking__text__clicks?: boolean;
  /**
   * Variate  Settings  From  Names
   * @description The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
   */
  variate__settings__from__names?: string[];
  /**
   * Variate  Settings  Reply  To  Addresses
   * @description The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
   */
  variate__settings__reply__to__addresses?: string[];
  /**
   * Variate  Settings  Send  Times
   * @description The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
   */
  variate__settings__send__times?: string[];
  /**
   * Variate  Settings  Subject  Lines
   * @description The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
   */
  variate__settings__subject__lines?: string[];
  /**
   * Variate  Settings  Test  Size
   * @description The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
   */
  variate__settings__test__size?: number;
  /**
   * Variate  Settings  Wait  Time
   * @description The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
   */
  variate__settings__wait__time?: number;
  /**
   * Variate  Settings  Winner  Criteria
   * @description The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with "manual" as the winner_criteria, the winner must be chosen in the Mailchimp web application.
   * @enum {string}
   */
  variate__settings__winner__criteria?: "opens" | "clicks" | "manual" | "total_revenue";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS tool output.
 */
type MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CART tool input.
 */
type MAILCHIMP_UPDATE_CART_INPUT = {
  /**
   * Campaign Id
   * @description A string that uniquely identifies the campaign associated with a cart.
   */
  campaign_id?: string;
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Checkout Url
   * @description The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
   */
  checkout_url?: string;
  /**
   * Currency Code
   * @description The three-letter ISO 4217 code for the currency that the cart uses.
   */
  currency_code?: string;
  /**
   * Customer  Address  Address1
   * @description The mailing address of the customer.
   */
  customer__address__address1?: string;
  /**
   * Customer  Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  customer__address__address2?: string;
  /**
   * Customer  Address  City
   * @description The city the customer is located in.
   */
  customer__address__city?: string;
  /**
   * Customer  Address  Country
   * @description The customer"s country.
   */
  customer__address__country?: string;
  /**
   * Customer  Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  customer__address__country__code?: string;
  /**
   * Customer  Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  customer__address__postal__code?: string;
  /**
   * Customer  Address  Province
   * @description The customer"s state name or normalized province.
   */
  customer__address__province?: string;
  /**
   * Customer  Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  customer__address__province__code?: string;
  /**
   * Customer  Company
   * @description The customer"s company.
   */
  customer__company?: string;
  /**
   * Customer  First  Name
   * @description The customer"s first name.
   */
  customer__first__name?: string;
  /**
   * Customer  Last  Name
   * @description The customer"s last name.
   */
  customer__last__name?: string;
  /**
   * Customer  Opt  In  Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  customer__opt__in__status?: boolean;
  /**
   * Lines
   * @description An array of the cart"s line items.
   */
  lines?: {
      [key: string]: unknown;
  }[];
  /**
   * Order Total
   * @description The order total for the cart.
   */
  order_total?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Tax Total
   * @description The total tax for the cart.
   */
  tax_total?: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CART tool output.
 */
type MAILCHIMP_UPDATE_CART_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CART_LINE_ITEM tool input.
 */
type MAILCHIMP_UPDATE_CART_LINE_ITEM_INPUT = {
  /**
   * Cart Id
   * @description The id for the cart.
   */
  cart_id?: string;
  /**
   * Line Id
   * @description The id for the line item of a cart.
   */
  line_id?: string;
  /**
   * Price
   * @description The price of a cart line item.
   */
  price?: number;
  /**
   * Product Id
   * @description A unique identifier for the product associated with the cart line item.
   */
  product_id?: string;
  /**
   * Product Variant Id
   * @description A unique identifier for the product variant associated with the cart line item.
   */
  product_variant_id?: string;
  /**
   * Quantity
   * @description The quantity of a cart line item.
   */
  quantity?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CART_LINE_ITEM tool output.
 */
type MAILCHIMP_UPDATE_CART_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CUSTOMER tool input.
 */
type MAILCHIMP_UPDATE_CUSTOMER_INPUT = {
  /**
   * Address  Address1
   * @description The mailing address of the customer.
   */
  address__address1?: string;
  /**
   * Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  address__address2?: string;
  /**
   * Address  City
   * @description The city the customer is located in.
   */
  address__city?: string;
  /**
   * Address  Country
   * @description The customer"s country.
   */
  address__country?: string;
  /**
   * Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  address__country__code?: string;
  /**
   * Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  address__postal__code?: string;
  /**
   * Address  Province
   * @description The customer"s state name or normalized province.
   */
  address__province?: string;
  /**
   * Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  address__province__code?: string;
  /**
   * Company
   * @description The customer"s company.
   */
  company?: string;
  /**
   * Customer Id
   * @description The id for the customer of a store.
   */
  customer_id?: string;
  /**
   * First Name
   * @description The customer"s first name.
   */
  first_name?: string;
  /**
   * Last Name
   * @description The customer"s last name.
   */
  last_name?: string;
  /**
   * Opt In Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  opt_in_status?: boolean;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_CUSTOMER tool output.
 */
type MAILCHIMP_UPDATE_CUSTOMER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_FILE tool input.
 */
type MAILCHIMP_UPDATE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique id for the File Manager file.
   */
  file_id?: string;
  /**
   * Folder Id
   * @description The id of the folder. Setting `folder_id` to `0` will remove a file from its current folder.
   */
  folder_id?: number;
  /**
   * Name
   * @description The name of the file.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_FILE tool output.
 */
type MAILCHIMP_UPDATE_FILE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_FOLDER tool input.
 */
type MAILCHIMP_UPDATE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique id for the File Manager folder.
   */
  folder_id?: string;
  /**
   * Name
   * @description The name of the folder.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_FOLDER tool output.
 */
type MAILCHIMP_UPDATE_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_INTEREST_CATEGORY tool input.
 */
type MAILCHIMP_UPDATE_INTEREST_CATEGORY_INPUT = {
  /**
   * Display Order
   * @description The order that the categories are displayed in the list. Lower numbers display first.
   */
  display_order?: number;
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Title
   * @description The text description of this category. This field appears on signup forms and is often phrased as a question.
   */
  title?: string;
  /**
   * Type
   * @description Determines how this category’s interests appear on signup forms.
   * @enum {string}
   */
  type?: "checkboxes" | "dropdown" | "radio" | "hidden";
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_INTEREST_CATEGORY tool output.
 */
type MAILCHIMP_UPDATE_INTEREST_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY tool input.
 */
type MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY_INPUT = {
  /**
   * Display Order
   * @description The display order for interests.
   */
  display_order?: number;
  /**
   * Interest Category Id
   * @description The unique ID for the interest category.
   */
  interest_category_id?: string;
  /**
   * Interest Id
   * @description The specific interest or "group name".
   */
  interest_id?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Name
   * @description The name of the interest. This can be shown publicly on a subscription form.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY tool output.
 */
type MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_LANDING_PAGE tool input.
 */
type MAILCHIMP_UPDATE_LANDING_PAGE_INPUT = {
  /**
   * Description
   * @description The description of this landing page.
   */
  description?: string;
  /**
   * List Id
   * @description The list"s ID associated with this landing page.
   */
  list_id?: string;
  /**
   * Name
   * @description The name of this landing page.
   */
  name?: string;
  /**
   * Page Id
   * @description The unique id for the page.
   */
  page_id?: string;
  /**
   * Store Id
   * @description The ID of the store associated with this landing page.
   */
  store_id?: string;
  /**
   * Title
   * @description The title of this landing page seen in the browser"s title bar.
   */
  title?: string;
  /**
   * Tracking  Enable  Restricted  Data  Processing
   * @description Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google"s restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
   */
  tracking__enable__restricted__data__processing?: boolean;
  /**
   * Tracking  Track  With  Mailchimp
   * @description Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
   */
  tracking__track__with__mailchimp?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_LANDING_PAGE tool output.
 */
type MAILCHIMP_UPDATE_LANDING_PAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_LISTS tool input.
 */
type MAILCHIMP_UPDATE_LISTS_INPUT = {
  /**
   * Campaign  Defaults  From  Email
   * @description The default from email for campaigns sent to this list.
   */
  campaign__defaults__from__email?: string;
  /**
   * Campaign  Defaults  From  Name
   * @description The default from name for campaigns sent to this list.
   */
  campaign__defaults__from__name?: string;
  /**
   * Campaign  Defaults  Language
   * @description The default language for this lists"s forms.
   */
  campaign__defaults__language?: string;
  /**
   * Campaign  Defaults  Subject
   * @description The default subject line for campaigns sent to this list.
   */
  campaign__defaults__subject?: string;
  /**
   * Contact  Address1
   * @description The street address for the list contact.
   */
  contact__address1?: string;
  /**
   * Contact  Address2
   * @description The street address for the list contact.
   */
  contact__address2?: string;
  /**
   * Contact  City
   * @description The city for the list contact.
   */
  contact__city?: string;
  /**
   * Contact  Company
   * @description The company name for the list.
   */
  contact__company?: string;
  /**
   * Contact  Country
   * @description A two-character ISO3166 country code. Defaults to US if invalid.
   */
  contact__country?: string;
  /**
   * Contact  Phone
   * @description The phone number for the list contact.
   */
  contact__phone?: string;
  /**
   * Contact  State
   * @description The state for the list contact.
   */
  contact__state?: string;
  /**
   * Contact  Zip
   * @description The postal or zip code for the list contact.
   */
  contact__zip?: string;
  /**
   * Double Optin
   * @description Whether or not to require the subscriber to confirm subscription via email.
   * @default false
   */
  double_optin: boolean;
  /**
   * Email Type Option
   * @description Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
   */
  email_type_option?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Marketing Permissions
   * @description Whether or not the list has marketing permissions (eg. GDPR) enabled.
   * @default false
   */
  marketing_permissions: boolean;
  /**
   * Name
   * @description The name of the list.
   */
  name?: string;
  /**
   * Notify On Subscribe
   * @description The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
   * @default False
   */
  notify_on_subscribe: string;
  /**
   * Notify On Unsubscribe
   * @description The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
   * @default False
   */
  notify_on_unsubscribe: string;
  /**
   * Permission Reminder
   * @description The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
   */
  permission_reminder?: string;
  /**
   * Use Archive Bar
   * @description Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
   * @default false
   */
  use_archive_bar: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_LISTS tool output.
 */
type MAILCHIMP_UPDATE_LISTS_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_LIST_MEMBER tool input.
 */
type MAILCHIMP_UPDATE_LIST_MEMBER_INPUT = {
  /**
   * Email Address
   * @description Email address for a subscriber.
   */
  email_address?: string;
  /**
   * Email Type
   * @description Type of email this member asked to get ("html" or "text").
   */
  email_type?: string;
  /**
   * Interests
   * @description The key of this object"s properties is the ID of the interest in question.
   */
  interests?: {
      [key: string]: boolean;
  };
  /**
   * Ip Opt
   * @description The IP address the subscriber used to confirm their opt-in status.
   */
  ip_opt?: string;
  /**
   * Ip Signup
   * @description IP address the subscriber signed up from.
   */
  ip_signup?: string;
  /**
   * Language
   * @description If set/detected, the [subscriber"s language](https://mailchimp.com/help/view-and-edit-contact-languages/).
   */
  language?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Location  Latitude
   * @description The location latitude.
   */
  location__latitude?: number;
  /**
   * Location  Longitude
   * @description The location longitude.
   */
  location__longitude?: number;
  /**
   * Marketing Permissions
   * @description The marketing permissions for the subscriber.
   */
  marketing_permissions?: {
      [key: string]: unknown;
  }[];
  /**
   * Merge Fields
   * @description A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
   */
  merge_fields?: {
      [key: string]: unknown;
  };
  /**
   * Skip Merge Validation
   * @description If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
   */
  skip_merge_validation?: boolean;
  /**
   * Status
   * @description Subscriber"s current status.
   * @enum {string}
   */
  status?: "subscribed" | "unsubscribed" | "cleaned" | "pending";
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
  /**
   * Timestamp Opt
   * Format: date-time
   * @description The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
   */
  timestamp_opt?: string;
  /**
   * Timestamp Signup
   * Format: date-time
   * @description The date and time the subscriber signed up for the list in ISO 8601 format.
   */
  timestamp_signup?: string;
  /**
   * Vip
   * @description [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
   */
  vip?: boolean;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_LIST_MEMBER tool output.
 */
type MAILCHIMP_UPDATE_LIST_MEMBER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_MERGE_FIELD tool input.
 */
type MAILCHIMP_UPDATE_MERGE_FIELD_INPUT = {
  /**
   * Default Value
   * @description The default value for the merge field if `null`.
   */
  default_value?: string;
  /**
   * Display Order
   * @description The order that the merge field displays on the list signup form.
   */
  display_order?: number;
  /**
   * Help Text
   * @description Extra text to help the subscriber fill out the form.
   */
  help_text?: string;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Merge Id
   * @description The id for the merge field.
   */
  merge_id?: string;
  /**
   * Name
   * @description The name of the merge field (audience field).
   */
  name?: string;
  /**
   * Options  Choices
   * @description In a radio or dropdown non-group field, the available options for members to pick from.
   */
  options__choices?: string[];
  /**
   * Options  Date  Format
   * @description In a date or birthday field, the format of the date.
   */
  options__date__format?: string;
  /**
   * Options  Default  Country
   * @description In an address field, the default country code if none supplied.
   */
  options__default__country?: number;
  /**
   * Options  Phone  Format
   * @description In a phone field, the phone number type: US or International.
   */
  options__phone__format?: string;
  /**
   * Public
   * @description Whether the merge field is displayed on the signup form.
   */
  public?: boolean;
  /**
   * Required
   * @description Whether the merge field is required to import a contact.
   */
  required?: boolean;
  /**
   * Tag
   * @description The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
   */
  tag?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_MERGE_FIELD tool output.
 */
type MAILCHIMP_UPDATE_MERGE_FIELD_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_NOTE tool input.
 */
type MAILCHIMP_UPDATE_NOTE_INPUT = {
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Note
   * @description The content of the note. Note length is limited to 1,000 characters.
   */
  note?: string;
  /**
   * Note Id
   * @description The id for the note.
   */
  note_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_NOTE tool output.
 */
type MAILCHIMP_UPDATE_NOTE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_ORDER tool input.
 */
type MAILCHIMP_UPDATE_ORDER_INPUT = {
  /**
   * Billing  Address  Address1
   * @description The billing address for the order.
   */
  billing__address__address1?: string;
  /**
   * Billing  Address  Address2
   * @description An additional field for the billing address.
   */
  billing__address__address2?: string;
  /**
   * Billing  Address  City
   * @description The city in the billing address.
   */
  billing__address__city?: string;
  /**
   * Billing  Address  Company
   * @description The company associated with the billing address.
   */
  billing__address__company?: string;
  /**
   * Billing  Address  Country
   * @description The country in the billing address.
   */
  billing__address__country?: string;
  /**
   * Billing  Address  Country  Code
   * @description The two-letter code for the country in the billing address.
   */
  billing__address__country__code?: string;
  /**
   * Billing  Address  Latitude
   * @description The latitude for the billing address location.
   */
  billing__address__latitude?: number;
  /**
   * Billing  Address  Longitude
   * @description The longitude for the billing address location.
   */
  billing__address__longitude?: number;
  /**
   * Billing  Address  Name
   * @description The name associated with an order"s billing address.
   */
  billing__address__name?: string;
  /**
   * Billing  Address  Phone
   * @description The phone number for the billing address.
   */
  billing__address__phone?: string;
  /**
   * Billing  Address  Postal  Code
   * @description The postal or zip code in the billing address.
   */
  billing__address__postal__code?: string;
  /**
   * Billing  Address  Province
   * @description The state or normalized province in the billing address.
   */
  billing__address__province?: string;
  /**
   * Billing  Address  Province  Code
   * @description The two-letter code for the province or state in the billing address.
   */
  billing__address__province__code?: string;
  /**
   * Campaign Id
   * @description A string that uniquely identifies the campaign associated with an order.
   */
  campaign_id?: string;
  /**
   * Cancelled At Foreign
   * Format: date-time
   * @description The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being edited.
   */
  cancelled_at_foreign?: string;
  /**
   * Currency Code
   * @description The three-letter ISO 4217 code for the currency that the store accepts.
   */
  currency_code?: string;
  /**
   * Customer  Address  Address1
   * @description The mailing address of the customer.
   */
  customer__address__address1?: string;
  /**
   * Customer  Address  Address2
   * @description An additional field for the customer"s mailing address.
   */
  customer__address__address2?: string;
  /**
   * Customer  Address  City
   * @description The city the customer is located in.
   */
  customer__address__city?: string;
  /**
   * Customer  Address  Country
   * @description The customer"s country.
   */
  customer__address__country?: string;
  /**
   * Customer  Address  Country  Code
   * @description The two-letter code for the customer"s country.
   */
  customer__address__country__code?: string;
  /**
   * Customer  Address  Postal  Code
   * @description The customer"s postal or zip code.
   */
  customer__address__postal__code?: string;
  /**
   * Customer  Address  Province
   * @description The customer"s state name or normalized province.
   */
  customer__address__province?: string;
  /**
   * Customer  Address  Province  Code
   * @description The two-letter code for the customer"s province or state.
   */
  customer__address__province__code?: string;
  /**
   * Customer  Company
   * @description The customer"s company.
   */
  customer__company?: string;
  /**
   * Customer  First  Name
   * @description The customer"s first name.
   */
  customer__first__name?: string;
  /**
   * Customer  Last  Name
   * @description The customer"s last name.
   */
  customer__last__name?: string;
  /**
   * Customer  Opt  In  Status
   * @description The customer"s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don"t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
   */
  customer__opt__in__status?: boolean;
  /**
   * Discount Total
   * @description The total amount of the discounts to be applied to the price of the order.
   */
  discount_total?: number;
  /**
   * Financial Status
   * @description The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
   */
  financial_status?: string;
  /**
   * Fulfillment Status
   * @description The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
   */
  fulfillment_status?: string;
  /**
   * Landing Site
   * @description The URL for the page where the buyer landed when entering the shop.
   */
  landing_site?: string;
  /**
   * Lines
   * @description An array of the order"s line items.
   */
  lines?: {
      [key: string]: unknown;
  }[];
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Order Total
   * @description The order total associated with an order.
   */
  order_total?: number;
  /**
   * Order Url
   * @description The URL for the order.
   */
  order_url?: string;
  /**
   * Outreach  Id
   * @description A unique identifier for the outreach. Can be an email campaign ID.
   */
  outreach__id?: string;
  /**
   * Processed At Foreign
   * Format: date-time
   * @description The date and time the order was processed in ISO 8601 format.
   */
  processed_at_foreign?: string;
  /**
   * Promos
   * @description The promo codes applied on the order. Note: Patch will completely replace the value of promos with the new one provided.
   */
  promos?: {
      [key: string]: unknown;
  }[];
  /**
   * Shipping  Address  Address1
   * @description The shipping address for the order.
   */
  shipping__address__address1?: string;
  /**
   * Shipping  Address  Address2
   * @description An additional field for the shipping address.
   */
  shipping__address__address2?: string;
  /**
   * Shipping  Address  City
   * @description The city in the order"s shipping address.
   */
  shipping__address__city?: string;
  /**
   * Shipping  Address  Company
   * @description The company associated with an order"s shipping address.
   */
  shipping__address__company?: string;
  /**
   * Shipping  Address  Country
   * @description The country in the order"s shipping address.
   */
  shipping__address__country?: string;
  /**
   * Shipping  Address  Country  Code
   * @description The two-letter code for the country in the shipping address.
   */
  shipping__address__country__code?: string;
  /**
   * Shipping  Address  Latitude
   * @description The latitude for the shipping address location.
   */
  shipping__address__latitude?: number;
  /**
   * Shipping  Address  Longitude
   * @description The longitude for the shipping address location.
   */
  shipping__address__longitude?: number;
  /**
   * Shipping  Address  Name
   * @description The name associated with an order"s shipping address.
   */
  shipping__address__name?: string;
  /**
   * Shipping  Address  Phone
   * @description The phone number for the order"s shipping address
   */
  shipping__address__phone?: string;
  /**
   * Shipping  Address  Postal  Code
   * @description The postal or zip code in the order"s shipping address.
   */
  shipping__address__postal__code?: string;
  /**
   * Shipping  Address  Province
   * @description The state or normalized province in the order"s shipping address.
   */
  shipping__address__province?: string;
  /**
   * Shipping  Address  Province  Code
   * @description The two-letter code for the province or state the order"s shipping address is located in.
   */
  shipping__address__province__code?: string;
  /**
   * Shipping Total
   * @description The shipping total for the order.
   */
  shipping_total?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Tax Total
   * @description The tax total associated with an order.
   */
  tax_total?: number;
  /**
   * Tracking Carrier
   * @description The tracking carrier associated with the order.
   */
  tracking_carrier?: string;
  /**
   * Tracking Code
   * @description The Mailchimp tracking code for the order. Uses the "mc_tc" parameter in E-Commerce tracking URLs.
   * @enum {string}
   */
  tracking_code?: "prec";
  /**
   * Tracking Number
   * @description The tracking number associated with the order.
   */
  tracking_number?: string;
  /**
   * Tracking Url
   * @description The tracking URL associated with the order.
   */
  tracking_url?: string;
  /**
   * Updated At Foreign
   * Format: date-time
   * @description The date and time the order was updated in ISO 8601 format.
   */
  updated_at_foreign?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_ORDER tool output.
 */
type MAILCHIMP_UPDATE_ORDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_ORDER_LINE_ITEM tool input.
 */
type MAILCHIMP_UPDATE_ORDER_LINE_ITEM_INPUT = {
  /**
   * Discount
   * @description The total discount amount applied to this line item.
   */
  discount?: number;
  /**
   * Line Id
   * @description The id for the line item of an order.
   */
  line_id?: string;
  /**
   * Order Id
   * @description The id for the order in a store.
   */
  order_id?: string;
  /**
   * Price
   * @description The price of an order line item.
   */
  price?: number;
  /**
   * Product Id
   * @description A unique identifier for the product associated with the order line item.
   */
  product_id?: string;
  /**
   * Product Variant Id
   * @description A unique identifier for the product variant associated with the order line item.
   */
  product_variant_id?: string;
  /**
   * Quantity
   * @description The quantity of an order line item.
   */
  quantity?: number;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_ORDER_LINE_ITEM tool output.
 */
type MAILCHIMP_UPDATE_ORDER_LINE_ITEM_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PRODUCT tool input.
 */
type MAILCHIMP_UPDATE_PRODUCT_INPUT = {
  /**
   * Description
   * @description The description of a product.
   */
  description?: string;
  /**
   * Handle
   * @description The handle of a product.
   */
  handle?: string;
  /**
   * Image Url
   * @description The image URL for a product.
   */
  image_url?: string;
  /**
   * Images
   * @description An array of the product"s images.
   */
  images?: {
      [key: string]: unknown;
  }[];
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Published At Foreign
   * Format: date-time
   * @description The date and time the product was published in ISO 8601 format.
   */
  published_at_foreign?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Title
   * @description The title of a product.
   */
  title?: string;
  /**
   * Type
   * @description The type of product.
   */
  type?: string;
  /**
   * Url
   * @description The URL for a product.
   */
  url?: string;
  /**
   * Variants
   * @description An array of the product"s variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
   */
  variants?: {
      [key: string]: unknown;
  }[];
  /**
   * Vendor
   * @description The vendor for a product.
   */
  vendor?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PRODUCT tool output.
 */
type MAILCHIMP_UPDATE_PRODUCT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PRODUCT_IMAGE tool input.
 */
type MAILCHIMP_UPDATE_PRODUCT_IMAGE_INPUT = {
  /**
   * Id
   * @description A unique identifier for the product image.
   */
  id?: string;
  /**
   * Image Id
   * @description The id for the product image.
   */
  image_id?: string;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Url
   * @description The URL for a product image.
   */
  url?: string;
  /**
   * Variant Ids
   * @description The list of product variants using the image.
   */
  variant_ids?: string[];
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PRODUCT_IMAGE tool output.
 */
type MAILCHIMP_UPDATE_PRODUCT_IMAGE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PRODUCT_VARIANT tool input.
 */
type MAILCHIMP_UPDATE_PRODUCT_VARIANT_INPUT = {
  /**
   * Backorders
   * @description The backorders of a product variant.
   */
  backorders?: string;
  /**
   * Image Url
   * @description The image URL for a product variant.
   */
  image_url?: string;
  /**
   * Inventory Quantity
   * @description The inventory quantity of a product variant.
   */
  inventory_quantity?: number;
  /**
   * Price
   * @description The price of a product variant.
   */
  price?: number;
  /**
   * Product Id
   * @description The id for the product of a store.
   */
  product_id?: string;
  /**
   * Sku
   * @description The stock keeping unit (SKU) of a product variant.
   */
  sku?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Title
   * @description The title of a product variant.
   */
  title?: string;
  /**
   * Url
   * @description The URL for a product variant.
   */
  url?: string;
  /**
   * Variant Id
   * @description The id for the product variant.
   */
  variant_id?: string;
  /**
   * Visibility
   * @description The visibility of a product variant.
   */
  visibility?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PRODUCT_VARIANT tool output.
 */
type MAILCHIMP_UPDATE_PRODUCT_VARIANT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PROMO_CODE tool input.
 */
type MAILCHIMP_UPDATE_PROMO_CODE_INPUT = {
  /**
   * Code
   * @description The discount code. Restricted to UTF-8 characters with max length 50.
   */
  code?: string;
  /**
   * Created At Foreign
   * Format: date-time
   * @description The date and time the promotion was created in ISO 8601 format.
   */
  created_at_foreign?: string;
  /**
   * Enabled
   * @description Whether the promo code is currently enabled.
   */
  enabled?: boolean;
  /**
   * Promo Code Id
   * @description The id for the promo code of a store.
   */
  promo_code_id?: string;
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Redemption Url
   * @description The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
   */
  redemption_url?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Updated At Foreign
   * Format: date-time
   * @description The date and time the promotion was updated in ISO 8601 format.
   */
  updated_at_foreign?: string;
  /**
   * Usage Count
   * @description Number of times promo code has been used.
   */
  usage_count?: number;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PROMO_CODE tool output.
 */
type MAILCHIMP_UPDATE_PROMO_CODE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PROMO_RULE tool input.
 */
type MAILCHIMP_UPDATE_PROMO_RULE_INPUT = {
  /**
   * Amount
   * @description The amount of the promo code discount. If "type" is "fixed", the amount is treated as a monetary value. If "type" is "percentage", amount must be a decimal value between 0.0 and 1.0, inclusive.
   */
  amount?: number;
  /**
   * Created At Foreign
   * Format: date-time
   * @description The date and time the promotion was created in ISO 8601 format.
   */
  created_at_foreign?: string;
  /**
   * Description
   * @description The description of a promotion restricted to UTF-8 characters with max length 255.
   */
  description?: string;
  /**
   * Enabled
   * @description Whether the promo rule is currently enabled.
   */
  enabled?: boolean;
  /**
   * Ends At
   * Format: Promo date-time
   * @description The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
   */
  ends_at?: string;
  /**
   * Promo Rule Id
   * @description The id for the promo rule of a store.
   */
  promo_rule_id?: string;
  /**
   * Starts At
   * Format: date-time
   * @description The date and time when the promotion is in effect in ISO 8601 format.
   */
  starts_at?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Target
   * @description The target that the discount applies to.
   * @enum {string}
   */
  target?: "per_item" | "total" | "shipping";
  /**
   * Title
   * @description The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
   */
  title?: string;
  /**
   * Type
   * @description Type of discount. For free shipping set type to fixed.
   * @enum {string}
   */
  type?: "fixed" | "percentage";
  /**
   * Updated At Foreign
   * Format: date-time
   * @description The date and time the promotion was updated in ISO 8601 format.
   */
  updated_at_foreign?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_PROMO_RULE tool output.
 */
type MAILCHIMP_UPDATE_PROMO_RULE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_STORE tool input.
 */
type MAILCHIMP_UPDATE_STORE_INPUT = {
  /**
   * Address  Address1
   * @description The store"s mailing address.
   */
  address__address1?: string;
  /**
   * Address  Address2
   * @description An additional field for the store"s mailing address.
   */
  address__address2?: string;
  /**
   * Address  City
   * @description The city the store is located in.
   */
  address__city?: string;
  /**
   * Address  Country
   * @description The store"s country.
   */
  address__country?: string;
  /**
   * Address  Country  Code
   * @description The two-letter code for to the store"s country.
   */
  address__country__code?: string;
  /**
   * Address  Latitude
   * @description The latitude of the store location.
   */
  address__latitude?: number;
  /**
   * Address  Longitude
   * @description The longitude of the store location.
   */
  address__longitude?: number;
  /**
   * Address  Postal  Code
   * @description The store"s postal or zip code.
   */
  address__postal__code?: string;
  /**
   * Address  Province
   * @description The store"s state name or normalized province.
   */
  address__province?: string;
  /**
   * Address  Province  Code
   * @description The two-letter code for the store"s province or state.
   */
  address__province__code?: string;
  /**
   * Currency Code
   * @description The three-letter ISO 4217 code for the currency that the store accepts.
   */
  currency_code?: string;
  /**
   * Domain
   * @description The store domain.
   */
  domain?: string;
  /**
   * Email Address
   * @description The email address for the store.
   */
  email_address?: string;
  /**
   * Is Syncing
   * @description Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
   */
  is_syncing?: boolean;
  /**
   * Money Format
   * @description The currency format for the store. For example: `$`, `£`, etc.
   */
  money_format?: string;
  /**
   * Name
   * @description The name of the store.
   */
  name?: string;
  /**
   * Phone
   * @description The store phone number.
   */
  phone?: string;
  /**
   * Platform
   * @description The e-commerce platform of the store.
   */
  platform?: string;
  /**
   * Primary Locale
   * @description The primary locale for the store. For example: `en`, `de`, etc.
   */
  primary_locale?: string;
  /**
   * Store Id
   * @description The store id.
   */
  store_id?: string;
  /**
   * Timezone
   * @description The timezone for the store.
   */
  timezone?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_STORE tool output.
 */
type MAILCHIMP_UPDATE_STORE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_TEMPLATE tool input.
 */
type MAILCHIMP_UPDATE_TEMPLATE_INPUT = {
  /**
   * Folder Id
   * @description The id of the folder the template is currently in.
   */
  folder_id?: string;
  /**
   * Html
   * @description The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API.
   */
  html?: string;
  /**
   * Name
   * @description The name of the template.
   */
  name?: string;
  /**
   * Template Id
   * @description The unique id for the template.
   */
  template_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_TEMPLATE tool output.
 */
type MAILCHIMP_UPDATE_TEMPLATE_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_TEMPLATE_FOLDER tool input.
 */
type MAILCHIMP_UPDATE_TEMPLATE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique id for the template folder.
   */
  folder_id?: string;
  /**
   * Name
   * @description The name of the folder.
   */
  name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_TEMPLATE_FOLDER tool output.
 */
type MAILCHIMP_UPDATE_TEMPLATE_FOLDER_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_WEBHOOK tool input.
 */
type MAILCHIMP_UPDATE_WEBHOOK_INPUT = {
  /**
   * Events  Campaign
   * @description Whether the webhook is triggered when a campaign is sent or cancelled.
   */
  events__campaign?: boolean;
  /**
   * Events  Cleaned
   * @description Whether the webhook is triggered when a subscriber"s email address is cleaned from the list.
   */
  events__cleaned?: boolean;
  /**
   * Events  Profile
   * @description Whether the webhook is triggered when a subscriber"s profile is updated.
   */
  events__profile?: boolean;
  /**
   * Events  Subscribe
   * @description Whether the webhook is triggered when a list subscriber is added.
   */
  events__subscribe?: boolean;
  /**
   * Events  Unsubscribe
   * @description Whether the webhook is triggered when a list member unsubscribes.
   */
  events__unsubscribe?: boolean;
  /**
   * Events  Upemail
   * @description Whether the webhook is triggered when a subscriber"s email address is changed.
   */
  events__upemail?: boolean;
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Sources  Admin
   * @description Whether the webhook is triggered by admin-initiated actions in the web interface.
   */
  sources__admin?: boolean;
  /**
   * Sources  Api
   * @description Whether the webhook is triggered by actions initiated via the API.
   */
  sources__api?: boolean;
  /**
   * Sources  User
   * @description Whether the webhook is triggered by subscriber-initiated actions.
   */
  sources__user?: boolean;
  /**
   * Url
   * @description A valid URL for the Webhook.
   */
  url?: string;
  /**
   * Webhook Id
   * @description The webhook"s id.
   */
  webhook_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_WEBHOOK tool output.
 */
type MAILCHIMP_UPDATE_WEBHOOK_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_WORKFLOW_EMAIL tool input.
 */
type MAILCHIMP_UPDATE_WORKFLOW_EMAIL_INPUT = {
  /**
   * Delay  Action
   * @description The action that triggers the delay of an automation emails.
   * @enum {string}
   */
  delay__action?: "signup" | "ecomm_abandoned_browse" | "ecomm_abandoned_cart";
  /**
   * Delay  Amount
   * @description The delay amount for an automation email.
   */
  delay__amount?: number;
  /**
   * Delay  Direction
   * @description Whether the delay settings describe before or after the delay action of an automation email.
   * @enum {string}
   */
  delay__direction?: "after";
  /**
   * Delay  Type
   * @description The type of delay for an automation email.
   * @enum {string}
   */
  delay__type?: "now" | "day" | "hour" | "week";
  /**
   * Settings  From  Name
   * @description The "from" name for the Automation (not an email address).
   */
  settings__from__name?: string;
  /**
   * Settings  Preview  Text
   * @description The preview text for the campaign.
   */
  settings__preview__text?: string;
  /**
   * Settings  Reply  To
   * @description The reply-to email address for the Automation.
   */
  settings__reply__to?: string;
  /**
   * Settings  Subject  Line
   * @description The subject line for the campaign.
   */
  settings__subject__line?: string;
  /**
   * Settings  Title
   * @description The title of the Automation.
   */
  settings__title?: string;
  /**
   * Workflow Email Id
   * @description The unique id for the Automation workflow email.
   */
  workflow_email_id?: string;
  /**
   * Workflow Id
   * @description The unique id for the Automation workflow.
   */
  workflow_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_UPDATE_WORKFLOW_EMAIL tool output.
 */
type MAILCHIMP_UPDATE_WORKFLOW_EMAIL_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT tool input.
 */
type MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT_INPUT = {
  /**
   * Connected Site Id
   * @description The unique identifier for the site.
   */
  connected_site_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT tool output.
 */
type MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_VERIFY_DOMAIN tool input.
 */
type MAILCHIMP_VERIFY_DOMAIN_INPUT = {
  /**
   * Code
   * @description The code that was sent to the email address provided when adding a new domain to verify.
   */
  code?: string;
  /**
   * Domain Name
   * @description The domain name.
   */
  domain_name?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_VERIFY_DOMAIN tool output.
 */
type MAILCHIMP_VERIFY_DOMAIN_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_VIEW_DEFAULT_CONTENT tool input.
 */
type MAILCHIMP_VIEW_DEFAULT_CONTENT_INPUT = {
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * Template Id
   * @description The unique id for the template.
   */
  template_id?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_VIEW_DEFAULT_CONTENT tool output.
 */
type MAILCHIMP_VIEW_DEFAULT_CONTENT_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_VIEW_RECENT_ACTIVITY tool input.
 */
type MAILCHIMP_VIEW_RECENT_ACTIVITY_INPUT = {
  /**
   * Activity Filters
   * @description A comma-separated list of activity filters that correspond to a set of activity types, e.g "?activity_filters=open,bounce,click".
   */
  activity_filters?: string[];
  /**
   * Count
   * @description The number of records to return. Default value is 10. Maximum value is 1000
   * @default 10
   */
  count: number;
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Offset
   * @description Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
   * @default 0
   */
  offset: number;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_VIEW_RECENT_ACTIVITY tool output.
 */
type MAILCHIMP_VIEW_RECENT_ACTIVITY_OUTPUT = {
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
 * Type of MAILCHIMP's MAILCHIMP_VIEW_RECENT_ACTIVITY50 tool input.
 */
type MAILCHIMP_VIEW_RECENT_ACTIVITY50_INPUT = {
  /**
   * Action
   * @description A comma seperated list of actions to return.
   */
  action?: string[];
  /**
   * Exclude Fields
   * @description A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   */
  exclude_fields?: string[];
  /**
   * Fields
   * @description A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   */
  fields?: string[];
  /**
   * List Id
   * @description The unique ID for the list.
   */
  list_id?: string;
  /**
   * Subscriber Hash
   * @description The MD5 hash of the lowercase version of the list member"s email address. This endpoint also accepts a list member"s email address or contact_id.
   */
  subscriber_hash?: string;
};

/**
 * Type of MAILCHIMP's MAILCHIMP_VIEW_RECENT_ACTIVITY50 tool output.
 */
type MAILCHIMP_VIEW_RECENT_ACTIVITY50_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "MAILCHIMP".
 */
export type MAILCHIMP_TOOL_INPUTS = {
  ADD_AUTOMATION: MAILCHIMP_ADD_AUTOMATION_INPUT
  ADD_BATCH_WEBHOOK: MAILCHIMP_ADD_BATCH_WEBHOOK_INPUT
  ADD_CAMPAIGN: MAILCHIMP_ADD_CAMPAIGN_INPUT
  ADD_CAMPAIGN_FEEDBACK: MAILCHIMP_ADD_CAMPAIGN_FEEDBACK_INPUT
  ADD_CAMPAIGN_FOLDER: MAILCHIMP_ADD_CAMPAIGN_FOLDER_INPUT
  ADD_CART: MAILCHIMP_ADD_CART_INPUT
  ADD_CART_LINE_ITEM: MAILCHIMP_ADD_CART_LINE_ITEM_INPUT
  ADD_CONNECTED_SITE: MAILCHIMP_ADD_CONNECTED_SITE_INPUT
  ADD_CUSTOMER: MAILCHIMP_ADD_CUSTOMER_INPUT
  ADD_DOMAIN_TO_ACCOUNT: MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT_INPUT
  ADD_EVENT: MAILCHIMP_ADD_EVENT_INPUT
  ADD_EXPORT: MAILCHIMP_ADD_EXPORT_INPUT
  ADD_FILE: MAILCHIMP_ADD_FILE_INPUT
  ADD_FOLDER: MAILCHIMP_ADD_FOLDER_INPUT
  ADD_INTEREST_CATEGORY: MAILCHIMP_ADD_INTEREST_CATEGORY_INPUT
  ADD_INTEREST_IN_CATEGORY: MAILCHIMP_ADD_INTEREST_IN_CATEGORY_INPUT
  ADD_LANDING_PAGE: MAILCHIMP_ADD_LANDING_PAGE_INPUT
  ADD_LIST: MAILCHIMP_ADD_LIST_INPUT
  ADD_MEMBER_NOTE: MAILCHIMP_ADD_MEMBER_NOTE_INPUT
  ADD_MEMBER_TO_LIST: MAILCHIMP_ADD_MEMBER_TO_LIST_INPUT
  ADD_MEMBER_TO_SEGMENT: MAILCHIMP_ADD_MEMBER_TO_SEGMENT_INPUT
  ADD_MERGE_FIELD: MAILCHIMP_ADD_MERGE_FIELD_INPUT
  ADD_ORDER: MAILCHIMP_ADD_ORDER_INPUT
  ADD_ORDER_LINE_ITEM: MAILCHIMP_ADD_ORDER_LINE_ITEM_INPUT
  ADD_OR_REMOVE_MEMBER_TAGS: MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS_INPUT
  ADD_OR_UPDATE_CUSTOMER: MAILCHIMP_ADD_OR_UPDATE_CUSTOMER_INPUT
  ADD_OR_UPDATE_LIST_MEMBER: MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER_INPUT
  ADD_OR_UPDATE_PRODUCT_VARIANT: MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT_INPUT
  ADD_PRODUCT: MAILCHIMP_ADD_PRODUCT_INPUT
  ADD_PRODUCT_IMAGE: MAILCHIMP_ADD_PRODUCT_IMAGE_INPUT
  ADD_PRODUCT_VARIANT: MAILCHIMP_ADD_PRODUCT_VARIANT_INPUT
  ADD_PROMO_CODE: MAILCHIMP_ADD_PROMO_CODE_INPUT
  ADD_PROMO_RULE: MAILCHIMP_ADD_PROMO_RULE_INPUT
  ADD_SEGMENT: MAILCHIMP_ADD_SEGMENT_INPUT
  ADD_STORE: MAILCHIMP_ADD_STORE_INPUT
  ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL: MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL_INPUT
  ADD_TEMPLATE: MAILCHIMP_ADD_TEMPLATE_INPUT
  ADD_TEMPLATE_FOLDER: MAILCHIMP_ADD_TEMPLATE_FOLDER_INPUT
  ADD_WEBHOOK: MAILCHIMP_ADD_WEBHOOK_INPUT
  ARCHIVE_AUTOMATION: MAILCHIMP_ARCHIVE_AUTOMATION_INPUT
  ARCHIVE_LIST_MEMBER: MAILCHIMP_ARCHIVE_LIST_MEMBER_INPUT
  BATCH_ADD_OR_REMOVE_MEMBERS: MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS_INPUT
  BATCH_SUBSCRIBE_OR_UNSUBSCRIBE: MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE_INPUT
  CAMPAIGN_ABUSE_REPORT_DETAILS: MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS_INPUT
  CAMPAIGN_STATISTICS_FEEDBACK: MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK_INPUT
  CANCEL_CAMPAIGN: MAILCHIMP_CANCEL_CAMPAIGN_INPUT
  CREATE_A_SURVEY_CAMPAIGN: MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN_INPUT
  CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT: MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT_INPUT
  CUSTOMIZE_SIGNUP_FORM: MAILCHIMP_CUSTOMIZE_SIGNUP_FORM_INPUT
  DELETE_BATCH_REQUEST: MAILCHIMP_DELETE_BATCH_REQUEST_INPUT
  DELETE_BATCH_WEBHOOK: MAILCHIMP_DELETE_BATCH_WEBHOOK_INPUT
  DELETE_CAMPAIGN: MAILCHIMP_DELETE_CAMPAIGN_INPUT
  DELETE_CAMPAIGN_FEEDBACK_MESSAGE: MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE_INPUT
  DELETE_CAMPAIGN_FOLDER: MAILCHIMP_DELETE_CAMPAIGN_FOLDER_INPUT
  DELETE_CART: MAILCHIMP_DELETE_CART_INPUT
  DELETE_CART_LINE_ITEM: MAILCHIMP_DELETE_CART_LINE_ITEM_INPUT
  DELETE_CONNECTED_SITE: MAILCHIMP_DELETE_CONNECTED_SITE_INPUT
  DELETE_CUSTOMER: MAILCHIMP_DELETE_CUSTOMER_INPUT
  DELETE_DOMAIN: MAILCHIMP_DELETE_DOMAIN_INPUT
  DELETE_FILE: MAILCHIMP_DELETE_FILE_INPUT
  DELETE_FOLDER: MAILCHIMP_DELETE_FOLDER_INPUT
  DELETE_INTEREST_CATEGORY: MAILCHIMP_DELETE_INTEREST_CATEGORY_INPUT
  DELETE_INTEREST_IN_CATEGORY: MAILCHIMP_DELETE_INTEREST_IN_CATEGORY_INPUT
  DELETE_LANDING_PAGE: MAILCHIMP_DELETE_LANDING_PAGE_INPUT
  DELETE_LIST: MAILCHIMP_DELETE_LIST_INPUT
  DELETE_LIST_MEMBER: MAILCHIMP_DELETE_LIST_MEMBER_INPUT
  DELETE_MERGE_FIELD: MAILCHIMP_DELETE_MERGE_FIELD_INPUT
  DELETE_NOTE: MAILCHIMP_DELETE_NOTE_INPUT
  DELETE_ORDER: MAILCHIMP_DELETE_ORDER_INPUT
  DELETE_ORDER_LINE_ITEM: MAILCHIMP_DELETE_ORDER_LINE_ITEM_INPUT
  DELETE_PRODUCT: MAILCHIMP_DELETE_PRODUCT_INPUT
  DELETE_PRODUCT_IMAGE: MAILCHIMP_DELETE_PRODUCT_IMAGE_INPUT
  DELETE_PRODUCT_VARIANT: MAILCHIMP_DELETE_PRODUCT_VARIANT_INPUT
  DELETE_PROMO_CODE: MAILCHIMP_DELETE_PROMO_CODE_INPUT
  DELETE_PROMO_RULE: MAILCHIMP_DELETE_PROMO_RULE_INPUT
  DELETE_SEGMENT: MAILCHIMP_DELETE_SEGMENT_INPUT
  DELETE_STORE: MAILCHIMP_DELETE_STORE_INPUT
  DELETE_TEMPLATE: MAILCHIMP_DELETE_TEMPLATE_INPUT
  DELETE_TEMPLATE_FOLDER: MAILCHIMP_DELETE_TEMPLATE_FOLDER_INPUT
  DELETE_WEBHOOK: MAILCHIMP_DELETE_WEBHOOK_INPUT
  DELETE_WORKFLOW_EMAIL: MAILCHIMP_DELETE_WORKFLOW_EMAIL_INPUT
  GET_ABUSE_REPORT: MAILCHIMP_GET_ABUSE_REPORT_INPUT
  GET_ACCOUNT_EXPORT_INFO: MAILCHIMP_GET_ACCOUNT_EXPORT_INFO_INPUT
  GET_AUTHORIZED_APP_INFO: MAILCHIMP_GET_AUTHORIZED_APP_INFO_INPUT
  GET_AUTOMATED_EMAIL_SUBSCRIBER: MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER_INPUT
  GET_AUTOMATION_INFO: MAILCHIMP_GET_AUTOMATION_INFO_INPUT
  GET_BATCH_OPERATION_STATUS: MAILCHIMP_GET_BATCH_OPERATION_STATUS_INPUT
  GET_BATCH_WEBHOOK_INFO: MAILCHIMP_GET_BATCH_WEBHOOK_INFO_INPUT
  GET_CAMPAIGN_CONTENT: MAILCHIMP_GET_CAMPAIGN_CONTENT_INPUT
  GET_CAMPAIGN_FEEDBACK_MESSAGE: MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE_INPUT
  GET_CAMPAIGN_FOLDER: MAILCHIMP_GET_CAMPAIGN_FOLDER_INPUT
  GET_CAMPAIGN_INFO: MAILCHIMP_GET_CAMPAIGN_INFO_INPUT
  GET_CAMPAIGN_LINK_DETAILS: MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS_INPUT
  GET_CAMPAIGN_RECIPIENT_INFO: MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO_INPUT
  GET_CAMPAIGN_REPORT: MAILCHIMP_GET_CAMPAIGN_REPORT_INPUT
  GET_CAMPAIGN_SEND_CHECKLIST: MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST_INPUT
  GET_CART_INFO: MAILCHIMP_GET_CART_INFO_INPUT
  GET_CART_LINE_ITEM: MAILCHIMP_GET_CART_LINE_ITEM_INPUT
  GET_CLICKED_LINK_SUBSCRIBER: MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER_INPUT
  GET_CONNECTED_SITE: MAILCHIMP_GET_CONNECTED_SITE_INPUT
  GET_CONVERSATION: MAILCHIMP_GET_CONVERSATION_INPUT
  GET_CUSTOMER_INFO: MAILCHIMP_GET_CUSTOMER_INFO_INPUT
  GET_DOMAIN_INFO: MAILCHIMP_GET_DOMAIN_INFO_INPUT
  GET_FACEBOOK_AD_INFO: MAILCHIMP_GET_FACEBOOK_AD_INFO_INPUT
  GET_FACEBOOK_AD_REPORT: MAILCHIMP_GET_FACEBOOK_AD_REPORT_INPUT
  GET_FILE: MAILCHIMP_GET_FILE_INPUT
  GET_FOLDER: MAILCHIMP_GET_FOLDER_INPUT
  GET_GROWTH_HISTORY_BY_MONTH: MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH_INPUT
  GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST: MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST_INPUT
  GET_INTEREST_CATEGORY_INFO: MAILCHIMP_GET_INTEREST_CATEGORY_INFO_INPUT
  GET_INTEREST_IN_CATEGORY: MAILCHIMP_GET_INTEREST_IN_CATEGORY_INPUT
  GET_LANDING_PAGE_CONTENT: MAILCHIMP_GET_LANDING_PAGE_CONTENT_INPUT
  GET_LANDING_PAGE_INFO: MAILCHIMP_GET_LANDING_PAGE_INFO_INPUT
  GET_LANDING_PAGE_REPORT: MAILCHIMP_GET_LANDING_PAGE_REPORT_INPUT
  GET_LATEST_CHIMP_CHATTER: MAILCHIMP_GET_LATEST_CHIMP_CHATTER_INPUT
  GET_LISTS_INFO: MAILCHIMP_GET_LISTS_INFO_INPUT
  GET_LIST_INFO: MAILCHIMP_GET_LIST_INFO_INPUT
  GET_MEMBER_INFO: MAILCHIMP_GET_MEMBER_INFO_INPUT
  GET_MEMBER_NOTE: MAILCHIMP_GET_MEMBER_NOTE_INPUT
  GET_MERGE_FIELD: MAILCHIMP_GET_MERGE_FIELD_INPUT
  GET_MESSAGE: MAILCHIMP_GET_MESSAGE_INPUT
  GET_OPENED_CAMPAIGN_SUBSCRIBER: MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER_INPUT
  GET_ORDER_INFO: MAILCHIMP_GET_ORDER_INFO_INPUT
  GET_ORDER_LINE_ITEM: MAILCHIMP_GET_ORDER_LINE_ITEM_INPUT
  GET_PRODUCT_IMAGE_INFO: MAILCHIMP_GET_PRODUCT_IMAGE_INFO_INPUT
  GET_PRODUCT_INFO: MAILCHIMP_GET_PRODUCT_INFO_INPUT
  GET_PRODUCT_VARIANT_INFO: MAILCHIMP_GET_PRODUCT_VARIANT_INFO_INPUT
  GET_PROMO_CODE: MAILCHIMP_GET_PROMO_CODE_INPUT
  GET_PROMO_RULE: MAILCHIMP_GET_PROMO_RULE_INPUT
  GET_SEGMENT_INFO: MAILCHIMP_GET_SEGMENT_INFO_INPUT
  GET_STORE_INFO: MAILCHIMP_GET_STORE_INFO_INPUT
  GET_SUBSCRIBER_EMAIL_ACTIVITY: MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY_INPUT
  GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW: MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW_INPUT
  GET_SURVEY: MAILCHIMP_GET_SURVEY_INPUT
  GET_SURVEY_QUESTION_REPORT: MAILCHIMP_GET_SURVEY_QUESTION_REPORT_INPUT
  GET_SURVEY_REPORT: MAILCHIMP_GET_SURVEY_REPORT_INPUT
  GET_SURVEY_RESPONSE: MAILCHIMP_GET_SURVEY_RESPONSE_INPUT
  GET_TEMPLATE_FOLDER: MAILCHIMP_GET_TEMPLATE_FOLDER_INPUT
  GET_TEMPLATE_INFO: MAILCHIMP_GET_TEMPLATE_INFO_INPUT
  GET_UNSUBSCRIBED_MEMBER: MAILCHIMP_GET_UNSUBSCRIBED_MEMBER_INPUT
  GET_WEBHOOK_INFO: MAILCHIMP_GET_WEBHOOK_INFO_INPUT
  GET_WORKFLOW_EMAIL_INFO: MAILCHIMP_GET_WORKFLOW_EMAIL_INFO_INPUT
  LIST_ABUSE_REPORTS: MAILCHIMP_LIST_ABUSE_REPORTS_INPUT
  LIST_ACCOUNT_EXPORTS: MAILCHIMP_LIST_ACCOUNT_EXPORTS_INPUT
  LIST_ACCOUNT_ORDERS: MAILCHIMP_LIST_ACCOUNT_ORDERS_INPUT
  LIST_ANSWERS_FOR_QUESTION: MAILCHIMP_LIST_ANSWERS_FOR_QUESTION_INPUT
  LIST_API_ROOT_RESOURCES: MAILCHIMP_LIST_API_ROOT_RESOURCES_INPUT
  LIST_AUTHORIZED_APPS: MAILCHIMP_LIST_AUTHORIZED_APPS_INPUT
  LIST_AUTOMATED_EMAILS: MAILCHIMP_LIST_AUTOMATED_EMAILS_INPUT
  LIST_AUTOMATED_EMAIL_SUBSCRIBERS: MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS_INPUT
  LIST_AUTOMATIONS: MAILCHIMP_LIST_AUTOMATIONS_INPUT
  LIST_BATCH_REQUESTS: MAILCHIMP_LIST_BATCH_REQUESTS_INPUT
  LIST_BATCH_WEBHOOKS: MAILCHIMP_LIST_BATCH_WEBHOOKS_INPUT
  LIST_CAMPAIGNS: MAILCHIMP_LIST_CAMPAIGNS_INPUT
  LIST_CAMPAIGN_DETAILS: MAILCHIMP_LIST_CAMPAIGN_DETAILS_INPUT
  LIST_CAMPAIGN_FEEDBACK: MAILCHIMP_LIST_CAMPAIGN_FEEDBACK_INPUT
  LIST_CAMPAIGN_FOLDERS: MAILCHIMP_LIST_CAMPAIGN_FOLDERS_INPUT
  LIST_CAMPAIGN_OPEN_DETAILS: MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS_INPUT
  LIST_CAMPAIGN_PRODUCT_ACTIVITY: MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY_INPUT
  LIST_CAMPAIGN_RECIPIENTS: MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS_INPUT
  LIST_CAMPAIGN_REPORTS: MAILCHIMP_LIST_CAMPAIGN_REPORTS_INPUT
  LIST_CARTS: MAILCHIMP_LIST_CARTS_INPUT
  LIST_CART_LINE_ITEMS: MAILCHIMP_LIST_CART_LINE_ITEMS_INPUT
  LIST_CHILD_CAMPAIGN_REPORTS: MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS_INPUT
  LIST_CLICKED_LINK_SUBSCRIBERS: MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS_INPUT
  LIST_CONNECTED_SITES: MAILCHIMP_LIST_CONNECTED_SITES_INPUT
  LIST_CONVERSATIONS: MAILCHIMP_LIST_CONVERSATIONS_INPUT
  LIST_CUSTOMERS: MAILCHIMP_LIST_CUSTOMERS_INPUT
  LIST_DOMAIN_PERFORMANCE_STATS: MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS_INPUT
  LIST_EEP_URL_ACTIVITY: MAILCHIMP_LIST_EEP_URL_ACTIVITY_INPUT
  LIST_EMAIL_ACTIVITY: MAILCHIMP_LIST_EMAIL_ACTIVITY_INPUT
  LIST_FACEBOOK_ADS: MAILCHIMP_LIST_FACEBOOK_ADS_INPUT
  LIST_FACEBOOK_ADS_REPORTS: MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS_INPUT
  LIST_FACEBOOK_ECOMMERCE_REPORT: MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT_INPUT
  LIST_FOLDERS: MAILCHIMP_LIST_FOLDERS_INPUT
  LIST_GROWTH_HISTORY_DATA: MAILCHIMP_LIST_GROWTH_HISTORY_DATA_INPUT
  LIST_INTERESTS_IN_CATEGORY: MAILCHIMP_LIST_INTERESTS_IN_CATEGORY_INPUT
  LIST_INTEREST_CATEGORIES: MAILCHIMP_LIST_INTEREST_CATEGORIES_INPUT
  LIST_LANDING_PAGES: MAILCHIMP_LIST_LANDING_PAGES_INPUT
  LIST_LANDING_PAGES_REPORTS: MAILCHIMP_LIST_LANDING_PAGES_REPORTS_INPUT
  LIST_LOCATIONS: MAILCHIMP_LIST_LOCATIONS_INPUT
  LIST_MEMBERS_INFO: MAILCHIMP_LIST_MEMBERS_INFO_INPUT
  LIST_MEMBERS_IN_SEGMENT: MAILCHIMP_LIST_MEMBERS_IN_SEGMENT_INPUT
  LIST_MEMBER_EVENTS: MAILCHIMP_LIST_MEMBER_EVENTS_INPUT
  LIST_MEMBER_GOAL_EVENTS: MAILCHIMP_LIST_MEMBER_GOAL_EVENTS_INPUT
  LIST_MEMBER_TAGS: MAILCHIMP_LIST_MEMBER_TAGS_INPUT
  LIST_MERGE_FIELDS: MAILCHIMP_LIST_MERGE_FIELDS_INPUT
  LIST_MESSAGES: MAILCHIMP_LIST_MESSAGES_INPUT
  LIST_ORDERS: MAILCHIMP_LIST_ORDERS_INPUT
  LIST_ORDER_LINE_ITEMS: MAILCHIMP_LIST_ORDER_LINE_ITEMS_INPUT
  LIST_PRODUCT: MAILCHIMP_LIST_PRODUCT_INPUT
  LIST_PRODUCT_IMAGES: MAILCHIMP_LIST_PRODUCT_IMAGES_INPUT
  LIST_PRODUCT_VARIANTS: MAILCHIMP_LIST_PRODUCT_VARIANTS_INPUT
  LIST_PROMO_CODES: MAILCHIMP_LIST_PROMO_CODES_INPUT
  LIST_PROMO_RULES: MAILCHIMP_LIST_PROMO_RULES_INPUT
  LIST_RECENT_ACTIVITY: MAILCHIMP_LIST_RECENT_ACTIVITY_INPUT
  LIST_RECENT_MEMBER_NOTES: MAILCHIMP_LIST_RECENT_MEMBER_NOTES_INPUT
  LIST_SEGMENTS: MAILCHIMP_LIST_SEGMENTS_INPUT
  LIST_SENDING_DOMAINS: MAILCHIMP_LIST_SENDING_DOMAINS_INPUT
  LIST_SIGNUP_FORMS: MAILCHIMP_LIST_SIGNUP_FORMS_INPUT
  LIST_STORED_FILES: MAILCHIMP_LIST_STORED_FILES_INPUT
  LIST_STORES: MAILCHIMP_LIST_STORES_INPUT
  LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW: MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW_INPUT
  LIST_SURVEY_QUESTION_REPORTS: MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS_INPUT
  LIST_SURVEY_REPORTS: MAILCHIMP_LIST_SURVEY_REPORTS_INPUT
  LIST_SURVEY_RESPONSES: MAILCHIMP_LIST_SURVEY_RESPONSES_INPUT
  LIST_TEMPLATES: MAILCHIMP_LIST_TEMPLATES_INPUT
  LIST_TEMPLATE_FOLDERS: MAILCHIMP_LIST_TEMPLATE_FOLDERS_INPUT
  LIST_TOP_EMAIL_CLIENTS: MAILCHIMP_LIST_TOP_EMAIL_CLIENTS_INPUT
  LIST_TOP_OPEN_ACTIVITIES: MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES_INPUT
  LIST_UNSUBSCRIBED_MEMBERS: MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS_INPUT
  LIST_WEBHOOKS: MAILCHIMP_LIST_WEBHOOKS_INPUT
  PAUSE_AUTOMATED_EMAIL: MAILCHIMP_PAUSE_AUTOMATED_EMAIL_INPUT
  PAUSE_AUTOMATION_EMAILS: MAILCHIMP_PAUSE_AUTOMATION_EMAILS_INPUT
  PAUSE_RSS_CAMPAIGN: MAILCHIMP_PAUSE_RSS_CAMPAIGN_INPUT
  PING: MAILCHIMP_PING_INPUT
  PUBLISH_A_SURVEY: MAILCHIMP_PUBLISH_A_SURVEY_INPUT
  PUBLISH_LANDING_PAGE: MAILCHIMP_PUBLISH_LANDING_PAGE_INPUT
  REMOVE_LIST_MEMBER_FROM_SEGMENT: MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT_INPUT
  REMOVE_SUBSCRIBER_FROM_WORKFLOW: MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW_INPUT
  REPLICATE_CAMPAIGN: MAILCHIMP_REPLICATE_CAMPAIGN_INPUT
  RESEND_CAMPAIGN: MAILCHIMP_RESEND_CAMPAIGN_INPUT
  RESUME_RSS_CAMPAIGN: MAILCHIMP_RESUME_RSS_CAMPAIGN_INPUT
  RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS: MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS_INPUT
  RETRIEVE_FOLDER_CONTENTS: MAILCHIMP_RETRIEVE_FOLDER_CONTENTS_INPUT
  SCHEDULE_CAMPAIGN: MAILCHIMP_SCHEDULE_CAMPAIGN_INPUT
  SEARCH_CAMPAIGNS: MAILCHIMP_SEARCH_CAMPAIGNS_INPUT
  SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME: MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME_INPUT
  SEARCH_MEMBERS: MAILCHIMP_SEARCH_MEMBERS_INPUT
  SEND_CAMPAIGN: MAILCHIMP_SEND_CAMPAIGN_INPUT
  SEND_TEST_EMAIL: MAILCHIMP_SEND_TEST_EMAIL_INPUT
  SET_CAMPAIGN_CONTENT: MAILCHIMP_SET_CAMPAIGN_CONTENT_INPUT
  START_AUTOMATED_EMAIL: MAILCHIMP_START_AUTOMATED_EMAIL_INPUT
  START_AUTOMATION_EMAILS: MAILCHIMP_START_AUTOMATION_EMAILS_INPUT
  START_BATCH_OPERATION: MAILCHIMP_START_BATCH_OPERATION_INPUT
  UNPUBLISH_A_SURVEY: MAILCHIMP_UNPUBLISH_A_SURVEY_INPUT
  UNPUBLISH_LANDING_PAGE: MAILCHIMP_UNPUBLISH_LANDING_PAGE_INPUT
  UNSCHEDULE_CAMPAIGN: MAILCHIMP_UNSCHEDULE_CAMPAIGN_INPUT
  UPDATE_BATCH_WEBHOOK: MAILCHIMP_UPDATE_BATCH_WEBHOOK_INPUT
  UPDATE_CAMPAIGN_FEEDBACK_MESSAGE: MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE_INPUT
  UPDATE_CAMPAIGN_FOLDER: MAILCHIMP_UPDATE_CAMPAIGN_FOLDER_INPUT
  UPDATE_CAMPAIGN_SETTINGS: MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS_INPUT
  UPDATE_CART: MAILCHIMP_UPDATE_CART_INPUT
  UPDATE_CART_LINE_ITEM: MAILCHIMP_UPDATE_CART_LINE_ITEM_INPUT
  UPDATE_CUSTOMER: MAILCHIMP_UPDATE_CUSTOMER_INPUT
  UPDATE_FILE: MAILCHIMP_UPDATE_FILE_INPUT
  UPDATE_FOLDER: MAILCHIMP_UPDATE_FOLDER_INPUT
  UPDATE_INTEREST_CATEGORY: MAILCHIMP_UPDATE_INTEREST_CATEGORY_INPUT
  UPDATE_INTEREST_IN_CATEGORY: MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY_INPUT
  UPDATE_LANDING_PAGE: MAILCHIMP_UPDATE_LANDING_PAGE_INPUT
  UPDATE_LISTS: MAILCHIMP_UPDATE_LISTS_INPUT
  UPDATE_LIST_MEMBER: MAILCHIMP_UPDATE_LIST_MEMBER_INPUT
  UPDATE_MERGE_FIELD: MAILCHIMP_UPDATE_MERGE_FIELD_INPUT
  UPDATE_NOTE: MAILCHIMP_UPDATE_NOTE_INPUT
  UPDATE_ORDER: MAILCHIMP_UPDATE_ORDER_INPUT
  UPDATE_ORDER_LINE_ITEM: MAILCHIMP_UPDATE_ORDER_LINE_ITEM_INPUT
  UPDATE_PRODUCT: MAILCHIMP_UPDATE_PRODUCT_INPUT
  UPDATE_PRODUCT_IMAGE: MAILCHIMP_UPDATE_PRODUCT_IMAGE_INPUT
  UPDATE_PRODUCT_VARIANT: MAILCHIMP_UPDATE_PRODUCT_VARIANT_INPUT
  UPDATE_PROMO_CODE: MAILCHIMP_UPDATE_PROMO_CODE_INPUT
  UPDATE_PROMO_RULE: MAILCHIMP_UPDATE_PROMO_RULE_INPUT
  UPDATE_STORE: MAILCHIMP_UPDATE_STORE_INPUT
  UPDATE_TEMPLATE: MAILCHIMP_UPDATE_TEMPLATE_INPUT
  UPDATE_TEMPLATE_FOLDER: MAILCHIMP_UPDATE_TEMPLATE_FOLDER_INPUT
  UPDATE_WEBHOOK: MAILCHIMP_UPDATE_WEBHOOK_INPUT
  UPDATE_WORKFLOW_EMAIL: MAILCHIMP_UPDATE_WORKFLOW_EMAIL_INPUT
  VERIFY_CONNECTED_SITE_SCRIPT: MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT_INPUT
  VERIFY_DOMAIN: MAILCHIMP_VERIFY_DOMAIN_INPUT
  VIEW_DEFAULT_CONTENT: MAILCHIMP_VIEW_DEFAULT_CONTENT_INPUT
  VIEW_RECENT_ACTIVITY: MAILCHIMP_VIEW_RECENT_ACTIVITY_INPUT
  VIEW_RECENT_ACTIVITY50: MAILCHIMP_VIEW_RECENT_ACTIVITY50_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILCHIMP".
 */
export type MAILCHIMP_TOOL_OUTPUTS = {
  ADD_AUTOMATION: MAILCHIMP_ADD_AUTOMATION_OUTPUT
  ADD_BATCH_WEBHOOK: MAILCHIMP_ADD_BATCH_WEBHOOK_OUTPUT
  ADD_CAMPAIGN: MAILCHIMP_ADD_CAMPAIGN_OUTPUT
  ADD_CAMPAIGN_FEEDBACK: MAILCHIMP_ADD_CAMPAIGN_FEEDBACK_OUTPUT
  ADD_CAMPAIGN_FOLDER: MAILCHIMP_ADD_CAMPAIGN_FOLDER_OUTPUT
  ADD_CART: MAILCHIMP_ADD_CART_OUTPUT
  ADD_CART_LINE_ITEM: MAILCHIMP_ADD_CART_LINE_ITEM_OUTPUT
  ADD_CONNECTED_SITE: MAILCHIMP_ADD_CONNECTED_SITE_OUTPUT
  ADD_CUSTOMER: MAILCHIMP_ADD_CUSTOMER_OUTPUT
  ADD_DOMAIN_TO_ACCOUNT: MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT_OUTPUT
  ADD_EVENT: MAILCHIMP_ADD_EVENT_OUTPUT
  ADD_EXPORT: MAILCHIMP_ADD_EXPORT_OUTPUT
  ADD_FILE: MAILCHIMP_ADD_FILE_OUTPUT
  ADD_FOLDER: MAILCHIMP_ADD_FOLDER_OUTPUT
  ADD_INTEREST_CATEGORY: MAILCHIMP_ADD_INTEREST_CATEGORY_OUTPUT
  ADD_INTEREST_IN_CATEGORY: MAILCHIMP_ADD_INTEREST_IN_CATEGORY_OUTPUT
  ADD_LANDING_PAGE: MAILCHIMP_ADD_LANDING_PAGE_OUTPUT
  ADD_LIST: MAILCHIMP_ADD_LIST_OUTPUT
  ADD_MEMBER_NOTE: MAILCHIMP_ADD_MEMBER_NOTE_OUTPUT
  ADD_MEMBER_TO_LIST: MAILCHIMP_ADD_MEMBER_TO_LIST_OUTPUT
  ADD_MEMBER_TO_SEGMENT: MAILCHIMP_ADD_MEMBER_TO_SEGMENT_OUTPUT
  ADD_MERGE_FIELD: MAILCHIMP_ADD_MERGE_FIELD_OUTPUT
  ADD_ORDER: MAILCHIMP_ADD_ORDER_OUTPUT
  ADD_ORDER_LINE_ITEM: MAILCHIMP_ADD_ORDER_LINE_ITEM_OUTPUT
  ADD_OR_REMOVE_MEMBER_TAGS: MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS_OUTPUT
  ADD_OR_UPDATE_CUSTOMER: MAILCHIMP_ADD_OR_UPDATE_CUSTOMER_OUTPUT
  ADD_OR_UPDATE_LIST_MEMBER: MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER_OUTPUT
  ADD_OR_UPDATE_PRODUCT_VARIANT: MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT_OUTPUT
  ADD_PRODUCT: MAILCHIMP_ADD_PRODUCT_OUTPUT
  ADD_PRODUCT_IMAGE: MAILCHIMP_ADD_PRODUCT_IMAGE_OUTPUT
  ADD_PRODUCT_VARIANT: MAILCHIMP_ADD_PRODUCT_VARIANT_OUTPUT
  ADD_PROMO_CODE: MAILCHIMP_ADD_PROMO_CODE_OUTPUT
  ADD_PROMO_RULE: MAILCHIMP_ADD_PROMO_RULE_OUTPUT
  ADD_SEGMENT: MAILCHIMP_ADD_SEGMENT_OUTPUT
  ADD_STORE: MAILCHIMP_ADD_STORE_OUTPUT
  ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL: MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL_OUTPUT
  ADD_TEMPLATE: MAILCHIMP_ADD_TEMPLATE_OUTPUT
  ADD_TEMPLATE_FOLDER: MAILCHIMP_ADD_TEMPLATE_FOLDER_OUTPUT
  ADD_WEBHOOK: MAILCHIMP_ADD_WEBHOOK_OUTPUT
  ARCHIVE_AUTOMATION: MAILCHIMP_ARCHIVE_AUTOMATION_OUTPUT
  ARCHIVE_LIST_MEMBER: MAILCHIMP_ARCHIVE_LIST_MEMBER_OUTPUT
  BATCH_ADD_OR_REMOVE_MEMBERS: MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS_OUTPUT
  BATCH_SUBSCRIBE_OR_UNSUBSCRIBE: MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE_OUTPUT
  CAMPAIGN_ABUSE_REPORT_DETAILS: MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS_OUTPUT
  CAMPAIGN_STATISTICS_FEEDBACK: MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK_OUTPUT
  CANCEL_CAMPAIGN: MAILCHIMP_CANCEL_CAMPAIGN_OUTPUT
  CREATE_A_SURVEY_CAMPAIGN: MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN_OUTPUT
  CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT: MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT_OUTPUT
  CUSTOMIZE_SIGNUP_FORM: MAILCHIMP_CUSTOMIZE_SIGNUP_FORM_OUTPUT
  DELETE_BATCH_REQUEST: MAILCHIMP_DELETE_BATCH_REQUEST_OUTPUT
  DELETE_BATCH_WEBHOOK: MAILCHIMP_DELETE_BATCH_WEBHOOK_OUTPUT
  DELETE_CAMPAIGN: MAILCHIMP_DELETE_CAMPAIGN_OUTPUT
  DELETE_CAMPAIGN_FEEDBACK_MESSAGE: MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE_OUTPUT
  DELETE_CAMPAIGN_FOLDER: MAILCHIMP_DELETE_CAMPAIGN_FOLDER_OUTPUT
  DELETE_CART: MAILCHIMP_DELETE_CART_OUTPUT
  DELETE_CART_LINE_ITEM: MAILCHIMP_DELETE_CART_LINE_ITEM_OUTPUT
  DELETE_CONNECTED_SITE: MAILCHIMP_DELETE_CONNECTED_SITE_OUTPUT
  DELETE_CUSTOMER: MAILCHIMP_DELETE_CUSTOMER_OUTPUT
  DELETE_DOMAIN: MAILCHIMP_DELETE_DOMAIN_OUTPUT
  DELETE_FILE: MAILCHIMP_DELETE_FILE_OUTPUT
  DELETE_FOLDER: MAILCHIMP_DELETE_FOLDER_OUTPUT
  DELETE_INTEREST_CATEGORY: MAILCHIMP_DELETE_INTEREST_CATEGORY_OUTPUT
  DELETE_INTEREST_IN_CATEGORY: MAILCHIMP_DELETE_INTEREST_IN_CATEGORY_OUTPUT
  DELETE_LANDING_PAGE: MAILCHIMP_DELETE_LANDING_PAGE_OUTPUT
  DELETE_LIST: MAILCHIMP_DELETE_LIST_OUTPUT
  DELETE_LIST_MEMBER: MAILCHIMP_DELETE_LIST_MEMBER_OUTPUT
  DELETE_MERGE_FIELD: MAILCHIMP_DELETE_MERGE_FIELD_OUTPUT
  DELETE_NOTE: MAILCHIMP_DELETE_NOTE_OUTPUT
  DELETE_ORDER: MAILCHIMP_DELETE_ORDER_OUTPUT
  DELETE_ORDER_LINE_ITEM: MAILCHIMP_DELETE_ORDER_LINE_ITEM_OUTPUT
  DELETE_PRODUCT: MAILCHIMP_DELETE_PRODUCT_OUTPUT
  DELETE_PRODUCT_IMAGE: MAILCHIMP_DELETE_PRODUCT_IMAGE_OUTPUT
  DELETE_PRODUCT_VARIANT: MAILCHIMP_DELETE_PRODUCT_VARIANT_OUTPUT
  DELETE_PROMO_CODE: MAILCHIMP_DELETE_PROMO_CODE_OUTPUT
  DELETE_PROMO_RULE: MAILCHIMP_DELETE_PROMO_RULE_OUTPUT
  DELETE_SEGMENT: MAILCHIMP_DELETE_SEGMENT_OUTPUT
  DELETE_STORE: MAILCHIMP_DELETE_STORE_OUTPUT
  DELETE_TEMPLATE: MAILCHIMP_DELETE_TEMPLATE_OUTPUT
  DELETE_TEMPLATE_FOLDER: MAILCHIMP_DELETE_TEMPLATE_FOLDER_OUTPUT
  DELETE_WEBHOOK: MAILCHIMP_DELETE_WEBHOOK_OUTPUT
  DELETE_WORKFLOW_EMAIL: MAILCHIMP_DELETE_WORKFLOW_EMAIL_OUTPUT
  GET_ABUSE_REPORT: MAILCHIMP_GET_ABUSE_REPORT_OUTPUT
  GET_ACCOUNT_EXPORT_INFO: MAILCHIMP_GET_ACCOUNT_EXPORT_INFO_OUTPUT
  GET_AUTHORIZED_APP_INFO: MAILCHIMP_GET_AUTHORIZED_APP_INFO_OUTPUT
  GET_AUTOMATED_EMAIL_SUBSCRIBER: MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER_OUTPUT
  GET_AUTOMATION_INFO: MAILCHIMP_GET_AUTOMATION_INFO_OUTPUT
  GET_BATCH_OPERATION_STATUS: MAILCHIMP_GET_BATCH_OPERATION_STATUS_OUTPUT
  GET_BATCH_WEBHOOK_INFO: MAILCHIMP_GET_BATCH_WEBHOOK_INFO_OUTPUT
  GET_CAMPAIGN_CONTENT: MAILCHIMP_GET_CAMPAIGN_CONTENT_OUTPUT
  GET_CAMPAIGN_FEEDBACK_MESSAGE: MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE_OUTPUT
  GET_CAMPAIGN_FOLDER: MAILCHIMP_GET_CAMPAIGN_FOLDER_OUTPUT
  GET_CAMPAIGN_INFO: MAILCHIMP_GET_CAMPAIGN_INFO_OUTPUT
  GET_CAMPAIGN_LINK_DETAILS: MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS_OUTPUT
  GET_CAMPAIGN_RECIPIENT_INFO: MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO_OUTPUT
  GET_CAMPAIGN_REPORT: MAILCHIMP_GET_CAMPAIGN_REPORT_OUTPUT
  GET_CAMPAIGN_SEND_CHECKLIST: MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST_OUTPUT
  GET_CART_INFO: MAILCHIMP_GET_CART_INFO_OUTPUT
  GET_CART_LINE_ITEM: MAILCHIMP_GET_CART_LINE_ITEM_OUTPUT
  GET_CLICKED_LINK_SUBSCRIBER: MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER_OUTPUT
  GET_CONNECTED_SITE: MAILCHIMP_GET_CONNECTED_SITE_OUTPUT
  GET_CONVERSATION: MAILCHIMP_GET_CONVERSATION_OUTPUT
  GET_CUSTOMER_INFO: MAILCHIMP_GET_CUSTOMER_INFO_OUTPUT
  GET_DOMAIN_INFO: MAILCHIMP_GET_DOMAIN_INFO_OUTPUT
  GET_FACEBOOK_AD_INFO: MAILCHIMP_GET_FACEBOOK_AD_INFO_OUTPUT
  GET_FACEBOOK_AD_REPORT: MAILCHIMP_GET_FACEBOOK_AD_REPORT_OUTPUT
  GET_FILE: MAILCHIMP_GET_FILE_OUTPUT
  GET_FOLDER: MAILCHIMP_GET_FOLDER_OUTPUT
  GET_GROWTH_HISTORY_BY_MONTH: MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH_OUTPUT
  GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST: MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST_OUTPUT
  GET_INTEREST_CATEGORY_INFO: MAILCHIMP_GET_INTEREST_CATEGORY_INFO_OUTPUT
  GET_INTEREST_IN_CATEGORY: MAILCHIMP_GET_INTEREST_IN_CATEGORY_OUTPUT
  GET_LANDING_PAGE_CONTENT: MAILCHIMP_GET_LANDING_PAGE_CONTENT_OUTPUT
  GET_LANDING_PAGE_INFO: MAILCHIMP_GET_LANDING_PAGE_INFO_OUTPUT
  GET_LANDING_PAGE_REPORT: MAILCHIMP_GET_LANDING_PAGE_REPORT_OUTPUT
  GET_LATEST_CHIMP_CHATTER: MAILCHIMP_GET_LATEST_CHIMP_CHATTER_OUTPUT
  GET_LISTS_INFO: MAILCHIMP_GET_LISTS_INFO_OUTPUT
  GET_LIST_INFO: MAILCHIMP_GET_LIST_INFO_OUTPUT
  GET_MEMBER_INFO: MAILCHIMP_GET_MEMBER_INFO_OUTPUT
  GET_MEMBER_NOTE: MAILCHIMP_GET_MEMBER_NOTE_OUTPUT
  GET_MERGE_FIELD: MAILCHIMP_GET_MERGE_FIELD_OUTPUT
  GET_MESSAGE: MAILCHIMP_GET_MESSAGE_OUTPUT
  GET_OPENED_CAMPAIGN_SUBSCRIBER: MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER_OUTPUT
  GET_ORDER_INFO: MAILCHIMP_GET_ORDER_INFO_OUTPUT
  GET_ORDER_LINE_ITEM: MAILCHIMP_GET_ORDER_LINE_ITEM_OUTPUT
  GET_PRODUCT_IMAGE_INFO: MAILCHIMP_GET_PRODUCT_IMAGE_INFO_OUTPUT
  GET_PRODUCT_INFO: MAILCHIMP_GET_PRODUCT_INFO_OUTPUT
  GET_PRODUCT_VARIANT_INFO: MAILCHIMP_GET_PRODUCT_VARIANT_INFO_OUTPUT
  GET_PROMO_CODE: MAILCHIMP_GET_PROMO_CODE_OUTPUT
  GET_PROMO_RULE: MAILCHIMP_GET_PROMO_RULE_OUTPUT
  GET_SEGMENT_INFO: MAILCHIMP_GET_SEGMENT_INFO_OUTPUT
  GET_STORE_INFO: MAILCHIMP_GET_STORE_INFO_OUTPUT
  GET_SUBSCRIBER_EMAIL_ACTIVITY: MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY_OUTPUT
  GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW: MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW_OUTPUT
  GET_SURVEY: MAILCHIMP_GET_SURVEY_OUTPUT
  GET_SURVEY_QUESTION_REPORT: MAILCHIMP_GET_SURVEY_QUESTION_REPORT_OUTPUT
  GET_SURVEY_REPORT: MAILCHIMP_GET_SURVEY_REPORT_OUTPUT
  GET_SURVEY_RESPONSE: MAILCHIMP_GET_SURVEY_RESPONSE_OUTPUT
  GET_TEMPLATE_FOLDER: MAILCHIMP_GET_TEMPLATE_FOLDER_OUTPUT
  GET_TEMPLATE_INFO: MAILCHIMP_GET_TEMPLATE_INFO_OUTPUT
  GET_UNSUBSCRIBED_MEMBER: MAILCHIMP_GET_UNSUBSCRIBED_MEMBER_OUTPUT
  GET_WEBHOOK_INFO: MAILCHIMP_GET_WEBHOOK_INFO_OUTPUT
  GET_WORKFLOW_EMAIL_INFO: MAILCHIMP_GET_WORKFLOW_EMAIL_INFO_OUTPUT
  LIST_ABUSE_REPORTS: MAILCHIMP_LIST_ABUSE_REPORTS_OUTPUT
  LIST_ACCOUNT_EXPORTS: MAILCHIMP_LIST_ACCOUNT_EXPORTS_OUTPUT
  LIST_ACCOUNT_ORDERS: MAILCHIMP_LIST_ACCOUNT_ORDERS_OUTPUT
  LIST_ANSWERS_FOR_QUESTION: MAILCHIMP_LIST_ANSWERS_FOR_QUESTION_OUTPUT
  LIST_API_ROOT_RESOURCES: MAILCHIMP_LIST_API_ROOT_RESOURCES_OUTPUT
  LIST_AUTHORIZED_APPS: MAILCHIMP_LIST_AUTHORIZED_APPS_OUTPUT
  LIST_AUTOMATED_EMAILS: MAILCHIMP_LIST_AUTOMATED_EMAILS_OUTPUT
  LIST_AUTOMATED_EMAIL_SUBSCRIBERS: MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS_OUTPUT
  LIST_AUTOMATIONS: MAILCHIMP_LIST_AUTOMATIONS_OUTPUT
  LIST_BATCH_REQUESTS: MAILCHIMP_LIST_BATCH_REQUESTS_OUTPUT
  LIST_BATCH_WEBHOOKS: MAILCHIMP_LIST_BATCH_WEBHOOKS_OUTPUT
  LIST_CAMPAIGNS: MAILCHIMP_LIST_CAMPAIGNS_OUTPUT
  LIST_CAMPAIGN_DETAILS: MAILCHIMP_LIST_CAMPAIGN_DETAILS_OUTPUT
  LIST_CAMPAIGN_FEEDBACK: MAILCHIMP_LIST_CAMPAIGN_FEEDBACK_OUTPUT
  LIST_CAMPAIGN_FOLDERS: MAILCHIMP_LIST_CAMPAIGN_FOLDERS_OUTPUT
  LIST_CAMPAIGN_OPEN_DETAILS: MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS_OUTPUT
  LIST_CAMPAIGN_PRODUCT_ACTIVITY: MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY_OUTPUT
  LIST_CAMPAIGN_RECIPIENTS: MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS_OUTPUT
  LIST_CAMPAIGN_REPORTS: MAILCHIMP_LIST_CAMPAIGN_REPORTS_OUTPUT
  LIST_CARTS: MAILCHIMP_LIST_CARTS_OUTPUT
  LIST_CART_LINE_ITEMS: MAILCHIMP_LIST_CART_LINE_ITEMS_OUTPUT
  LIST_CHILD_CAMPAIGN_REPORTS: MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS_OUTPUT
  LIST_CLICKED_LINK_SUBSCRIBERS: MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS_OUTPUT
  LIST_CONNECTED_SITES: MAILCHIMP_LIST_CONNECTED_SITES_OUTPUT
  LIST_CONVERSATIONS: MAILCHIMP_LIST_CONVERSATIONS_OUTPUT
  LIST_CUSTOMERS: MAILCHIMP_LIST_CUSTOMERS_OUTPUT
  LIST_DOMAIN_PERFORMANCE_STATS: MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS_OUTPUT
  LIST_EEP_URL_ACTIVITY: MAILCHIMP_LIST_EEP_URL_ACTIVITY_OUTPUT
  LIST_EMAIL_ACTIVITY: MAILCHIMP_LIST_EMAIL_ACTIVITY_OUTPUT
  LIST_FACEBOOK_ADS: MAILCHIMP_LIST_FACEBOOK_ADS_OUTPUT
  LIST_FACEBOOK_ADS_REPORTS: MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS_OUTPUT
  LIST_FACEBOOK_ECOMMERCE_REPORT: MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT_OUTPUT
  LIST_FOLDERS: MAILCHIMP_LIST_FOLDERS_OUTPUT
  LIST_GROWTH_HISTORY_DATA: MAILCHIMP_LIST_GROWTH_HISTORY_DATA_OUTPUT
  LIST_INTERESTS_IN_CATEGORY: MAILCHIMP_LIST_INTERESTS_IN_CATEGORY_OUTPUT
  LIST_INTEREST_CATEGORIES: MAILCHIMP_LIST_INTEREST_CATEGORIES_OUTPUT
  LIST_LANDING_PAGES: MAILCHIMP_LIST_LANDING_PAGES_OUTPUT
  LIST_LANDING_PAGES_REPORTS: MAILCHIMP_LIST_LANDING_PAGES_REPORTS_OUTPUT
  LIST_LOCATIONS: MAILCHIMP_LIST_LOCATIONS_OUTPUT
  LIST_MEMBERS_INFO: MAILCHIMP_LIST_MEMBERS_INFO_OUTPUT
  LIST_MEMBERS_IN_SEGMENT: MAILCHIMP_LIST_MEMBERS_IN_SEGMENT_OUTPUT
  LIST_MEMBER_EVENTS: MAILCHIMP_LIST_MEMBER_EVENTS_OUTPUT
  LIST_MEMBER_GOAL_EVENTS: MAILCHIMP_LIST_MEMBER_GOAL_EVENTS_OUTPUT
  LIST_MEMBER_TAGS: MAILCHIMP_LIST_MEMBER_TAGS_OUTPUT
  LIST_MERGE_FIELDS: MAILCHIMP_LIST_MERGE_FIELDS_OUTPUT
  LIST_MESSAGES: MAILCHIMP_LIST_MESSAGES_OUTPUT
  LIST_ORDERS: MAILCHIMP_LIST_ORDERS_OUTPUT
  LIST_ORDER_LINE_ITEMS: MAILCHIMP_LIST_ORDER_LINE_ITEMS_OUTPUT
  LIST_PRODUCT: MAILCHIMP_LIST_PRODUCT_OUTPUT
  LIST_PRODUCT_IMAGES: MAILCHIMP_LIST_PRODUCT_IMAGES_OUTPUT
  LIST_PRODUCT_VARIANTS: MAILCHIMP_LIST_PRODUCT_VARIANTS_OUTPUT
  LIST_PROMO_CODES: MAILCHIMP_LIST_PROMO_CODES_OUTPUT
  LIST_PROMO_RULES: MAILCHIMP_LIST_PROMO_RULES_OUTPUT
  LIST_RECENT_ACTIVITY: MAILCHIMP_LIST_RECENT_ACTIVITY_OUTPUT
  LIST_RECENT_MEMBER_NOTES: MAILCHIMP_LIST_RECENT_MEMBER_NOTES_OUTPUT
  LIST_SEGMENTS: MAILCHIMP_LIST_SEGMENTS_OUTPUT
  LIST_SENDING_DOMAINS: MAILCHIMP_LIST_SENDING_DOMAINS_OUTPUT
  LIST_SIGNUP_FORMS: MAILCHIMP_LIST_SIGNUP_FORMS_OUTPUT
  LIST_STORED_FILES: MAILCHIMP_LIST_STORED_FILES_OUTPUT
  LIST_STORES: MAILCHIMP_LIST_STORES_OUTPUT
  LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW: MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW_OUTPUT
  LIST_SURVEY_QUESTION_REPORTS: MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS_OUTPUT
  LIST_SURVEY_REPORTS: MAILCHIMP_LIST_SURVEY_REPORTS_OUTPUT
  LIST_SURVEY_RESPONSES: MAILCHIMP_LIST_SURVEY_RESPONSES_OUTPUT
  LIST_TEMPLATES: MAILCHIMP_LIST_TEMPLATES_OUTPUT
  LIST_TEMPLATE_FOLDERS: MAILCHIMP_LIST_TEMPLATE_FOLDERS_OUTPUT
  LIST_TOP_EMAIL_CLIENTS: MAILCHIMP_LIST_TOP_EMAIL_CLIENTS_OUTPUT
  LIST_TOP_OPEN_ACTIVITIES: MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES_OUTPUT
  LIST_UNSUBSCRIBED_MEMBERS: MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS_OUTPUT
  LIST_WEBHOOKS: MAILCHIMP_LIST_WEBHOOKS_OUTPUT
  PAUSE_AUTOMATED_EMAIL: MAILCHIMP_PAUSE_AUTOMATED_EMAIL_OUTPUT
  PAUSE_AUTOMATION_EMAILS: MAILCHIMP_PAUSE_AUTOMATION_EMAILS_OUTPUT
  PAUSE_RSS_CAMPAIGN: MAILCHIMP_PAUSE_RSS_CAMPAIGN_OUTPUT
  PING: MAILCHIMP_PING_OUTPUT
  PUBLISH_A_SURVEY: MAILCHIMP_PUBLISH_A_SURVEY_OUTPUT
  PUBLISH_LANDING_PAGE: MAILCHIMP_PUBLISH_LANDING_PAGE_OUTPUT
  REMOVE_LIST_MEMBER_FROM_SEGMENT: MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT_OUTPUT
  REMOVE_SUBSCRIBER_FROM_WORKFLOW: MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW_OUTPUT
  REPLICATE_CAMPAIGN: MAILCHIMP_REPLICATE_CAMPAIGN_OUTPUT
  RESEND_CAMPAIGN: MAILCHIMP_RESEND_CAMPAIGN_OUTPUT
  RESUME_RSS_CAMPAIGN: MAILCHIMP_RESUME_RSS_CAMPAIGN_OUTPUT
  RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS: MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS_OUTPUT
  RETRIEVE_FOLDER_CONTENTS: MAILCHIMP_RETRIEVE_FOLDER_CONTENTS_OUTPUT
  SCHEDULE_CAMPAIGN: MAILCHIMP_SCHEDULE_CAMPAIGN_OUTPUT
  SEARCH_CAMPAIGNS: MAILCHIMP_SEARCH_CAMPAIGNS_OUTPUT
  SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME: MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME_OUTPUT
  SEARCH_MEMBERS: MAILCHIMP_SEARCH_MEMBERS_OUTPUT
  SEND_CAMPAIGN: MAILCHIMP_SEND_CAMPAIGN_OUTPUT
  SEND_TEST_EMAIL: MAILCHIMP_SEND_TEST_EMAIL_OUTPUT
  SET_CAMPAIGN_CONTENT: MAILCHIMP_SET_CAMPAIGN_CONTENT_OUTPUT
  START_AUTOMATED_EMAIL: MAILCHIMP_START_AUTOMATED_EMAIL_OUTPUT
  START_AUTOMATION_EMAILS: MAILCHIMP_START_AUTOMATION_EMAILS_OUTPUT
  START_BATCH_OPERATION: MAILCHIMP_START_BATCH_OPERATION_OUTPUT
  UNPUBLISH_A_SURVEY: MAILCHIMP_UNPUBLISH_A_SURVEY_OUTPUT
  UNPUBLISH_LANDING_PAGE: MAILCHIMP_UNPUBLISH_LANDING_PAGE_OUTPUT
  UNSCHEDULE_CAMPAIGN: MAILCHIMP_UNSCHEDULE_CAMPAIGN_OUTPUT
  UPDATE_BATCH_WEBHOOK: MAILCHIMP_UPDATE_BATCH_WEBHOOK_OUTPUT
  UPDATE_CAMPAIGN_FEEDBACK_MESSAGE: MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE_OUTPUT
  UPDATE_CAMPAIGN_FOLDER: MAILCHIMP_UPDATE_CAMPAIGN_FOLDER_OUTPUT
  UPDATE_CAMPAIGN_SETTINGS: MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS_OUTPUT
  UPDATE_CART: MAILCHIMP_UPDATE_CART_OUTPUT
  UPDATE_CART_LINE_ITEM: MAILCHIMP_UPDATE_CART_LINE_ITEM_OUTPUT
  UPDATE_CUSTOMER: MAILCHIMP_UPDATE_CUSTOMER_OUTPUT
  UPDATE_FILE: MAILCHIMP_UPDATE_FILE_OUTPUT
  UPDATE_FOLDER: MAILCHIMP_UPDATE_FOLDER_OUTPUT
  UPDATE_INTEREST_CATEGORY: MAILCHIMP_UPDATE_INTEREST_CATEGORY_OUTPUT
  UPDATE_INTEREST_IN_CATEGORY: MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY_OUTPUT
  UPDATE_LANDING_PAGE: MAILCHIMP_UPDATE_LANDING_PAGE_OUTPUT
  UPDATE_LISTS: MAILCHIMP_UPDATE_LISTS_OUTPUT
  UPDATE_LIST_MEMBER: MAILCHIMP_UPDATE_LIST_MEMBER_OUTPUT
  UPDATE_MERGE_FIELD: MAILCHIMP_UPDATE_MERGE_FIELD_OUTPUT
  UPDATE_NOTE: MAILCHIMP_UPDATE_NOTE_OUTPUT
  UPDATE_ORDER: MAILCHIMP_UPDATE_ORDER_OUTPUT
  UPDATE_ORDER_LINE_ITEM: MAILCHIMP_UPDATE_ORDER_LINE_ITEM_OUTPUT
  UPDATE_PRODUCT: MAILCHIMP_UPDATE_PRODUCT_OUTPUT
  UPDATE_PRODUCT_IMAGE: MAILCHIMP_UPDATE_PRODUCT_IMAGE_OUTPUT
  UPDATE_PRODUCT_VARIANT: MAILCHIMP_UPDATE_PRODUCT_VARIANT_OUTPUT
  UPDATE_PROMO_CODE: MAILCHIMP_UPDATE_PROMO_CODE_OUTPUT
  UPDATE_PROMO_RULE: MAILCHIMP_UPDATE_PROMO_RULE_OUTPUT
  UPDATE_STORE: MAILCHIMP_UPDATE_STORE_OUTPUT
  UPDATE_TEMPLATE: MAILCHIMP_UPDATE_TEMPLATE_OUTPUT
  UPDATE_TEMPLATE_FOLDER: MAILCHIMP_UPDATE_TEMPLATE_FOLDER_OUTPUT
  UPDATE_WEBHOOK: MAILCHIMP_UPDATE_WEBHOOK_OUTPUT
  UPDATE_WORKFLOW_EMAIL: MAILCHIMP_UPDATE_WORKFLOW_EMAIL_OUTPUT
  VERIFY_CONNECTED_SITE_SCRIPT: MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT_OUTPUT
  VERIFY_DOMAIN: MAILCHIMP_VERIFY_DOMAIN_OUTPUT
  VIEW_DEFAULT_CONTENT: MAILCHIMP_VIEW_DEFAULT_CONTENT_OUTPUT
  VIEW_RECENT_ACTIVITY: MAILCHIMP_VIEW_RECENT_ACTIVITY_OUTPUT
  VIEW_RECENT_ACTIVITY50: MAILCHIMP_VIEW_RECENT_ACTIVITY50_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of MAILCHIMP's CAMPAIGN_TRIGGER trigger payload.
 */
type MAILCHIMP_CAMPAIGN_TRIGGER_PAYLOAD = {
  /**
   * Email
   * @description Email address of the subscriber
   * @default null
   */
  email: string | null;
  /**
   * Event Type
   * @description Type of event
   * @default null
   */
  event_type: string | null;
  /**
   * List Id
   * @description ID of the list/audience
   * @default null
   */
  list_id: string | null;
  /**
   * Merge Fields
   * @description Custom merge fields/data
   * @default null
   */
  merge_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Timestamp
   * @description When the event occurred
   * @default null
   */
  timestamp: string | null;
};

/**
 * Type of MAILCHIMP's PROFILE_UPDATE_TRIGGER trigger payload.
 */
type MAILCHIMP_PROFILE_UPDATE_TRIGGER_PAYLOAD = {
  /**
   * Email
   * @description Email address of the subscriber
   * @default null
   */
  email: string | null;
  /**
   * Event Type
   * @description Type of event
   * @default null
   */
  event_type: string | null;
  /**
   * List Id
   * @description ID of the list/audience
   * @default null
   */
  list_id: string | null;
  /**
   * Merge Fields
   * @description Custom merge fields/data
   * @default null
   */
  merge_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Timestamp
   * @description When the event occurred
   * @default null
   */
  timestamp: string | null;
};

/**
 * Type of MAILCHIMP's SUBSCRIBE_TRIGGER trigger payload.
 */
type MAILCHIMP_SUBSCRIBE_TRIGGER_PAYLOAD = {
  /**
   * Email
   * @description Email address of the subscriber
   * @default null
   */
  email: string | null;
  /**
   * Event Type
   * @description Type of event
   * @default null
   */
  event_type: string | null;
  /**
   * List Id
   * @description ID of the list/audience
   * @default null
   */
  list_id: string | null;
  /**
   * Merge Fields
   * @description Custom merge fields/data
   * @default null
   */
  merge_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Timestamp
   * @description When the event occurred
   * @default null
   */
  timestamp: string | null;
};

/**
 * Type of MAILCHIMP's UNSUBSCRIBE_TRIGGER trigger payload.
 */
type MAILCHIMP_UNSUBSCRIBE_TRIGGER_PAYLOAD = {
  /**
   * Email
   * @description Email address of the subscriber
   * @default null
   */
  email: string | null;
  /**
   * Event Type
   * @description Type of event
   * @default null
   */
  event_type: string | null;
  /**
   * List Id
   * @description ID of the list/audience
   * @default null
   */
  list_id: string | null;
  /**
   * Merge Fields
   * @description Custom merge fields/data
   * @default null
   */
  merge_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Timestamp
   * @description When the event occurred
   * @default null
   */
  timestamp: string | null;
};

/**
 * Map of Composio's MAILCHIMP toolkit.
 */
export const MAILCHIMP = {
  slug: "mailchimp",
  tools: {
    /**
     * Create a new classic automation in your mailchimp account.
     */
    ADD_AUTOMATION: "MAILCHIMP_ADD_AUTOMATION",
    /**
     * Configure a webhook that will fire whenever any batch request completes processing. you may only have a maximum of 20 batch webhooks.
     */
    ADD_BATCH_WEBHOOK: "MAILCHIMP_ADD_BATCH_WEBHOOK",
    /**
     * Create a new mailchimp campaign.
     */
    ADD_CAMPAIGN: "MAILCHIMP_ADD_CAMPAIGN",
    /**
     * Add feedback on a specific campaign.
     */
    ADD_CAMPAIGN_FEEDBACK: "MAILCHIMP_ADD_CAMPAIGN_FEEDBACK",
    /**
     * Create a new campaign folder.
     */
    ADD_CAMPAIGN_FOLDER: "MAILCHIMP_ADD_CAMPAIGN_FOLDER",
    /**
     * Add a new cart to a store.
     */
    ADD_CART: "MAILCHIMP_ADD_CART",
    /**
     * Add a new line item to an existing cart.
     */
    ADD_CART_LINE_ITEM: "MAILCHIMP_ADD_CART_LINE_ITEM",
    /**
     * Create a new mailchimp connected site.
     */
    ADD_CONNECTED_SITE: "MAILCHIMP_ADD_CONNECTED_SITE",
    /**
     * Add a new customer to a store.
     */
    ADD_CUSTOMER: "MAILCHIMP_ADD_CUSTOMER",
    /**
     * Add a domain to the account.
     */
    ADD_DOMAIN_TO_ACCOUNT: "MAILCHIMP_ADD_DOMAIN_TO_ACCOUNT",
    /**
     * Add an event for a list member.
     */
    ADD_EVENT: "MAILCHIMP_ADD_EVENT",
    /**
     * Create a new account export in your mailchimp account.
     */
    ADD_EXPORT: "MAILCHIMP_ADD_EXPORT",
    /**
     * Upload a new image or file to the file manager.
     */
    ADD_FILE: "MAILCHIMP_ADD_FILE",
    /**
     * Create a new folder in the file manager.
     */
    ADD_FOLDER: "MAILCHIMP_ADD_FOLDER",
    /**
     * Create a new interest category.
     */
    ADD_INTEREST_CATEGORY: "MAILCHIMP_ADD_INTEREST_CATEGORY",
    /**
     * Create a new interest or 'group name' for a specific category.
     */
    ADD_INTEREST_IN_CATEGORY: "MAILCHIMP_ADD_INTEREST_IN_CATEGORY",
    /**
     * Create a new mailchimp landing page.
     */
    ADD_LANDING_PAGE: "MAILCHIMP_ADD_LANDING_PAGE",
    /**
     * Create a new list in your mailchimp account.
     */
    ADD_LIST: "MAILCHIMP_ADD_LIST",
    /**
     * Add a new note for a specific subscriber.
     */
    ADD_MEMBER_NOTE: "MAILCHIMP_ADD_MEMBER_NOTE",
    /**
     * Add a new member to the list.
     */
    ADD_MEMBER_TO_LIST: "MAILCHIMP_ADD_MEMBER_TO_LIST",
    /**
     * Add a member to a static segment.
     */
    ADD_MEMBER_TO_SEGMENT: "MAILCHIMP_ADD_MEMBER_TO_SEGMENT",
    /**
     * Add a new merge field for a specific audience.
     */
    ADD_MERGE_FIELD: "MAILCHIMP_ADD_MERGE_FIELD",
    /**
     * Add a new order to a store.
     */
    ADD_ORDER: "MAILCHIMP_ADD_ORDER",
    /**
     * Add a new line item to an existing order.
     */
    ADD_ORDER_LINE_ITEM: "MAILCHIMP_ADD_ORDER_LINE_ITEM",
    /**
     * Add or remove tags from a list member. if a tag that does not exist is passed in and set as 'active', a new tag will be created.
     */
    ADD_OR_REMOVE_MEMBER_TAGS: "MAILCHIMP_ADD_OR_REMOVE_MEMBER_TAGS",
    /**
     * Add or update a customer.
     */
    ADD_OR_UPDATE_CUSTOMER: "MAILCHIMP_ADD_OR_UPDATE_CUSTOMER",
    /**
     * Add or update a list member.
     */
    ADD_OR_UPDATE_LIST_MEMBER: "MAILCHIMP_ADD_OR_UPDATE_LIST_MEMBER",
    /**
     * Add or update a product variant.
     */
    ADD_OR_UPDATE_PRODUCT_VARIANT: "MAILCHIMP_ADD_OR_UPDATE_PRODUCT_VARIANT",
    /**
     * Add a new product to a store.
     */
    ADD_PRODUCT: "MAILCHIMP_ADD_PRODUCT",
    /**
     * Add a new image to the product.
     */
    ADD_PRODUCT_IMAGE: "MAILCHIMP_ADD_PRODUCT_IMAGE",
    /**
     * Add a new variant to the product.
     */
    ADD_PRODUCT_VARIANT: "MAILCHIMP_ADD_PRODUCT_VARIANT",
    /**
     * Add a new promo code to a store.
     */
    ADD_PROMO_CODE: "MAILCHIMP_ADD_PROMO_CODE",
    /**
     * Add a new promo rule to a store.
     */
    ADD_PROMO_RULE: "MAILCHIMP_ADD_PROMO_RULE",
    /**
     * Create a new segment in a specific list.
     */
    ADD_SEGMENT: "MAILCHIMP_ADD_SEGMENT",
    /**
     * Add a new store to your mailchimp account.
     */
    ADD_STORE: "MAILCHIMP_ADD_STORE",
    /**
     * Manually add a subscriber to a workflow, bypassing the default trigger settings. you can also use this endpoint to trigger a series of automated emails in an api 3.0 workflow type.
     */
    ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL: "MAILCHIMP_ADD_SUBSCRIBER_TO_WORKFLOW_EMAIL",
    /**
     * Create a new template for the account. only classic templates are supported.
     */
    ADD_TEMPLATE: "MAILCHIMP_ADD_TEMPLATE",
    /**
     * Create a new template folder.
     */
    ADD_TEMPLATE_FOLDER: "MAILCHIMP_ADD_TEMPLATE_FOLDER",
    /**
     * Create a new webhook for a specific list.
     */
    ADD_WEBHOOK: "MAILCHIMP_ADD_WEBHOOK",
    /**
     * Archiving will permanently end your automation and keep the report data. you’ll be able to replicate your archived automation, but you can’t restart it.
     */
    ARCHIVE_AUTOMATION: "MAILCHIMP_ARCHIVE_AUTOMATION",
    /**
     * Archive a list member. to permanently delete, use the delete-permanent action.
     */
    ARCHIVE_LIST_MEMBER: "MAILCHIMP_ARCHIVE_LIST_MEMBER",
    /**
     * Batch add/remove list members to static segment
     */
    BATCH_ADD_OR_REMOVE_MEMBERS: "MAILCHIMP_BATCH_ADD_OR_REMOVE_MEMBERS",
    /**
     * Batch subscribe or unsubscribe list members.
     */
    BATCH_SUBSCRIBE_OR_UNSUBSCRIBE: "MAILCHIMP_BATCH_SUBSCRIBE_OR_UNSUBSCRIBE",
    /**
     * Get information about a specific abuse report for a campaign.
     */
    CAMPAIGN_ABUSE_REPORT_DETAILS: "MAILCHIMP_CAMPAIGN_ABUSE_REPORT_DETAILS",
    /**
     * Get feedback based on a campaign's statistics. advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.
     */
    CAMPAIGN_STATISTICS_FEEDBACK: "MAILCHIMP_CAMPAIGN_STATISTICS_FEEDBACK",
    /**
     * Cancel a regular or plain-text campaign after you send, before all of your recipients receive it. this feature is included with mailchimp pro.
     */
    CANCEL_CAMPAIGN: "MAILCHIMP_CANCEL_CAMPAIGN",
    /**
     * Utilize the list id and survey id to generate a campaign that links to your survey.
     */
    CREATE_A_SURVEY_CAMPAIGN: "MAILCHIMP_CREATE_A_SURVEY_CAMPAIGN",
    /**
     * Create a trigger step in the customer journey builder via the api. use the provided url with {journey id} and {step id} to activate conditions for a contact.
     */
    CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT: "MAILCHIMP_CUSTOMER_JOURNEYS_API_TRIGGER_FOR_A_CONTACT",
    /**
     * Customize a list's default signup form.
     */
    CUSTOMIZE_SIGNUP_FORM: "MAILCHIMP_CUSTOMIZE_SIGNUP_FORM",
    /**
     * Stops a batch request from running. since only one batch request is run at a time, this can be used to cancel a long running request. the results of any completed operations will not be available after this call.
     */
    DELETE_BATCH_REQUEST: "MAILCHIMP_DELETE_BATCH_REQUEST",
    /**
     * Remove a batch webhook. webhooks will no longer be sent to the given url.
     */
    DELETE_BATCH_WEBHOOK: "MAILCHIMP_DELETE_BATCH_WEBHOOK",
    /**
     * Remove a campaign from your mailchimp account.
     */
    DELETE_CAMPAIGN: "MAILCHIMP_DELETE_CAMPAIGN",
    /**
     * Remove a specific feedback message for a campaign.
     */
    DELETE_CAMPAIGN_FEEDBACK_MESSAGE: "MAILCHIMP_DELETE_CAMPAIGN_FEEDBACK_MESSAGE",
    /**
     * Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.
     */
    DELETE_CAMPAIGN_FOLDER: "MAILCHIMP_DELETE_CAMPAIGN_FOLDER",
    /**
     * Delete a cart.
     */
    DELETE_CART: "MAILCHIMP_DELETE_CART",
    /**
     * Delete a specific cart line item.
     */
    DELETE_CART_LINE_ITEM: "MAILCHIMP_DELETE_CART_LINE_ITEM",
    /**
     * Remove a connected site from your mailchimp account.
     */
    DELETE_CONNECTED_SITE: "MAILCHIMP_DELETE_CONNECTED_SITE",
    /**
     * Delete a customer from a store.
     */
    DELETE_CUSTOMER: "MAILCHIMP_DELETE_CUSTOMER",
    /**
     * Delete a verified domain from the account.
     */
    DELETE_DOMAIN: "MAILCHIMP_DELETE_DOMAIN",
    /**
     * Remove a specific file from the file manager.
     */
    DELETE_FILE: "MAILCHIMP_DELETE_FILE",
    /**
     * Delete a specific folder in the file manager.
     */
    DELETE_FOLDER: "MAILCHIMP_DELETE_FOLDER",
    /**
     * Delete a specific interest category.
     */
    DELETE_INTEREST_CATEGORY: "MAILCHIMP_DELETE_INTEREST_CATEGORY",
    /**
     * Delete interests or group names in a specific category.
     */
    DELETE_INTEREST_IN_CATEGORY: "MAILCHIMP_DELETE_INTEREST_IN_CATEGORY",
    /**
     * Delete a landing page.
     */
    DELETE_LANDING_PAGE: "MAILCHIMP_DELETE_LANDING_PAGE",
    /**
     * Delete a list from your mailchimp account. if you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. you’ll also lose subscribers’ email addresses, unless you exported and backed up your list.
     */
    DELETE_LIST: "MAILCHIMP_DELETE_LIST",
    /**
     * Delete all personally identifiable information related to a list member, and remove them from a list. this will make it impossible to re-import the list member.
     */
    DELETE_LIST_MEMBER: "MAILCHIMP_DELETE_LIST_MEMBER",
    /**
     * Delete a specific merge field.
     */
    DELETE_MERGE_FIELD: "MAILCHIMP_DELETE_MERGE_FIELD",
    /**
     * Delete a specific note for a specific list member.
     */
    DELETE_NOTE: "MAILCHIMP_DELETE_NOTE",
    /**
     * Delete an order.
     */
    DELETE_ORDER: "MAILCHIMP_DELETE_ORDER",
    /**
     * Delete a specific order line item.
     */
    DELETE_ORDER_LINE_ITEM: "MAILCHIMP_DELETE_ORDER_LINE_ITEM",
    /**
     * Delete a product.
     */
    DELETE_PRODUCT: "MAILCHIMP_DELETE_PRODUCT",
    /**
     * Delete a product image.
     */
    DELETE_PRODUCT_IMAGE: "MAILCHIMP_DELETE_PRODUCT_IMAGE",
    /**
     * Delete a product variant.
     */
    DELETE_PRODUCT_VARIANT: "MAILCHIMP_DELETE_PRODUCT_VARIANT",
    /**
     * Delete a promo code from a store.
     */
    DELETE_PROMO_CODE: "MAILCHIMP_DELETE_PROMO_CODE",
    /**
     * Delete a promo rule from a store.
     */
    DELETE_PROMO_RULE: "MAILCHIMP_DELETE_PROMO_RULE",
    /**
     * Delete a specific segment in a list.
     */
    DELETE_SEGMENT: "MAILCHIMP_DELETE_SEGMENT",
    /**
     * Delete a store. deleting a store will also delete any associated subresources, including customers, orders, products, and carts.
     */
    DELETE_STORE: "MAILCHIMP_DELETE_STORE",
    /**
     * Delete a specific template.
     */
    DELETE_TEMPLATE: "MAILCHIMP_DELETE_TEMPLATE",
    /**
     * Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.
     */
    DELETE_TEMPLATE_FOLDER: "MAILCHIMP_DELETE_TEMPLATE_FOLDER",
    /**
     * Delete a specific webhook in a list.
     */
    DELETE_WEBHOOK: "MAILCHIMP_DELETE_WEBHOOK",
    /**
     * Removes an individual classic automation workflow email. emails from certain workflow types, including the abandoned cart email (abandonedcart) and product retargeting email (abandonedbrowse) workflows, cannot be deleted.
     */
    DELETE_WORKFLOW_EMAIL: "MAILCHIMP_DELETE_WORKFLOW_EMAIL",
    /**
     * Get details about a specific abuse report.
     */
    GET_ABUSE_REPORT: "MAILCHIMP_GET_ABUSE_REPORT",
    /**
     * Get information about a specific account export.
     */
    GET_ACCOUNT_EXPORT_INFO: "MAILCHIMP_GET_ACCOUNT_EXPORT_INFO",
    /**
     * Get information about a specific authorized application.
     */
    GET_AUTHORIZED_APP_INFO: "MAILCHIMP_GET_AUTHORIZED_APP_INFO",
    /**
     * Get information about a specific subscriber in a classic automation email queue.
     */
    GET_AUTOMATED_EMAIL_SUBSCRIBER: "MAILCHIMP_GET_AUTOMATED_EMAIL_SUBSCRIBER",
    /**
     * Get a summary of an individual classic automation workflow's settings and content. the `trigger settings` object returns information for the first email in the workflow.
     */
    GET_AUTOMATION_INFO: "MAILCHIMP_GET_AUTOMATION_INFO",
    /**
     * Get the status of a batch request.
     */
    GET_BATCH_OPERATION_STATUS: "MAILCHIMP_GET_BATCH_OPERATION_STATUS",
    /**
     * Get information about a specific batch webhook.
     */
    GET_BATCH_WEBHOOK_INFO: "MAILCHIMP_GET_BATCH_WEBHOOK_INFO",
    /**
     * Get the the html and plain-text content for a campaign.
     */
    GET_CAMPAIGN_CONTENT: "MAILCHIMP_GET_CAMPAIGN_CONTENT",
    /**
     * Get a specific feedback message from a campaign.
     */
    GET_CAMPAIGN_FEEDBACK_MESSAGE: "MAILCHIMP_GET_CAMPAIGN_FEEDBACK_MESSAGE",
    /**
     * Get information about a specific folder used to organize campaigns.
     */
    GET_CAMPAIGN_FOLDER: "MAILCHIMP_GET_CAMPAIGN_FOLDER",
    /**
     * Get information about a specific campaign.
     */
    GET_CAMPAIGN_INFO: "MAILCHIMP_GET_CAMPAIGN_INFO",
    /**
     * Get click details for a specific link in a campaign.
     */
    GET_CAMPAIGN_LINK_DETAILS: "MAILCHIMP_GET_CAMPAIGN_LINK_DETAILS",
    /**
     * Get information about a specific campaign recipient.
     */
    GET_CAMPAIGN_RECIPIENT_INFO: "MAILCHIMP_GET_CAMPAIGN_RECIPIENT_INFO",
    /**
     * Get report details for a specific sent campaign.
     */
    GET_CAMPAIGN_REPORT: "MAILCHIMP_GET_CAMPAIGN_REPORT",
    /**
     * Review the send checklist for a campaign, and resolve any issues before sending.
     */
    GET_CAMPAIGN_SEND_CHECKLIST: "MAILCHIMP_GET_CAMPAIGN_SEND_CHECKLIST",
    /**
     * Get information about a specific cart.
     */
    GET_CART_INFO: "MAILCHIMP_GET_CART_INFO",
    /**
     * Get information about a specific cart line item.
     */
    GET_CART_LINE_ITEM: "MAILCHIMP_GET_CART_LINE_ITEM",
    /**
     * Get information about a specific subscriber who clicked a link in a specific campaign.
     */
    GET_CLICKED_LINK_SUBSCRIBER: "MAILCHIMP_GET_CLICKED_LINK_SUBSCRIBER",
    /**
     * Get information about a specific connected site.
     */
    GET_CONNECTED_SITE: "MAILCHIMP_GET_CONNECTED_SITE",
    /**
     * Api endpoint for conversations is deprecated, replaced by inbox. although historical data is accessible, new campaign replies and messages are not retrievable through this endpoint.
     */
    GET_CONVERSATION: "MAILCHIMP_GET_CONVERSATION",
    /**
     * Get information about a specific customer.
     */
    GET_CUSTOMER_INFO: "MAILCHIMP_GET_CUSTOMER_INFO",
    /**
     * Get the details for a single domain on the account.
     */
    GET_DOMAIN_INFO: "MAILCHIMP_GET_DOMAIN_INFO",
    /**
     * Get details of a facebook ad.
     */
    GET_FACEBOOK_AD_INFO: "MAILCHIMP_GET_FACEBOOK_AD_INFO",
    /**
     * Get report of a facebook ad.
     */
    GET_FACEBOOK_AD_REPORT: "MAILCHIMP_GET_FACEBOOK_AD_REPORT",
    /**
     * Get information about a specific file in the file manager.
     */
    GET_FILE: "MAILCHIMP_GET_FILE",
    /**
     * Get information about a specific folder in the file manager.
     */
    GET_FOLDER: "MAILCHIMP_GET_FOLDER",
    /**
     * Get a summary of a specific list's growth activity for a specific month and year.
     */
    GET_GROWTH_HISTORY_BY_MONTH: "MAILCHIMP_GET_GROWTH_HISTORY_BY_MONTH",
    /**
     * Get information about all available surveys for a specific list.
     */
    GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST: "MAILCHIMP_GET_INFORMATION_ABOUT_ALL_SURVEYS_FOR_A_LIST",
    /**
     * Get information about a specific interest category.
     */
    GET_INTEREST_CATEGORY_INFO: "MAILCHIMP_GET_INTEREST_CATEGORY_INFO",
    /**
     * Get interests or 'group names' for a specific category.
     */
    GET_INTEREST_IN_CATEGORY: "MAILCHIMP_GET_INTEREST_IN_CATEGORY",
    /**
     * Get the the html for your landing page.
     */
    GET_LANDING_PAGE_CONTENT: "MAILCHIMP_GET_LANDING_PAGE_CONTENT",
    /**
     * Get information about a specific page.
     */
    GET_LANDING_PAGE_INFO: "MAILCHIMP_GET_LANDING_PAGE_INFO",
    /**
     * Get report of a landing page.
     */
    GET_LANDING_PAGE_REPORT: "MAILCHIMP_GET_LANDING_PAGE_REPORT",
    /**
     * Return the chimp chatter for this account ordered by most recent.
     */
    GET_LATEST_CHIMP_CHATTER: "MAILCHIMP_GET_LATEST_CHIMP_CHATTER",
    /**
     * Get information about all lists in the account.
     */
    GET_LISTS_INFO: "MAILCHIMP_GET_LISTS_INFO",
    /**
     * Get information about a specific list in your mailchimp account. results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.
     */
    GET_LIST_INFO: "MAILCHIMP_GET_LIST_INFO",
    /**
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     */
    GET_MEMBER_INFO: "MAILCHIMP_GET_MEMBER_INFO",
    /**
     * Get a specific note for a specific list member.
     */
    GET_MEMBER_NOTE: "MAILCHIMP_GET_MEMBER_NOTE",
    /**
     * Get information about a specific merge field.
     */
    GET_MERGE_FIELD: "MAILCHIMP_GET_MERGE_FIELD",
    /**
     * The conversation endpoint is outdated and replaced by inbox, which isn't supported by it. historical conversation data is accessible, but new replies and inbox messages are not.
     */
    GET_MESSAGE: "MAILCHIMP_GET_MESSAGE",
    /**
     * Get information about a specific subscriber who opened a campaign.
     */
    GET_OPENED_CAMPAIGN_SUBSCRIBER: "MAILCHIMP_GET_OPENED_CAMPAIGN_SUBSCRIBER",
    /**
     * Get information about a specific order.
     */
    GET_ORDER_INFO: "MAILCHIMP_GET_ORDER_INFO",
    /**
     * Get information about a specific order line item.
     */
    GET_ORDER_LINE_ITEM: "MAILCHIMP_GET_ORDER_LINE_ITEM",
    /**
     * Get information about a specific product image.
     */
    GET_PRODUCT_IMAGE_INFO: "MAILCHIMP_GET_PRODUCT_IMAGE_INFO",
    /**
     * Get information about a specific product.
     */
    GET_PRODUCT_INFO: "MAILCHIMP_GET_PRODUCT_INFO",
    /**
     * Get information about a specific product variant.
     */
    GET_PRODUCT_VARIANT_INFO: "MAILCHIMP_GET_PRODUCT_VARIANT_INFO",
    /**
     * Get information about a specific promo code.
     */
    GET_PROMO_CODE: "MAILCHIMP_GET_PROMO_CODE",
    /**
     * Get information about a specific promo rule.
     */
    GET_PROMO_RULE: "MAILCHIMP_GET_PROMO_RULE",
    /**
     * Get information about a specific segment.
     */
    GET_SEGMENT_INFO: "MAILCHIMP_GET_SEGMENT_INFO",
    /**
     * Get information about a specific store.
     */
    GET_STORE_INFO: "MAILCHIMP_GET_STORE_INFO",
    /**
     * Get a specific list member's activity in a campaign including opens, clicks, and bounces.
     */
    GET_SUBSCRIBER_EMAIL_ACTIVITY: "MAILCHIMP_GET_SUBSCRIBER_EMAIL_ACTIVITY",
    /**
     * Get information about a specific subscriber who was removed from a classic automation workflow.
     */
    GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW: "MAILCHIMP_GET_SUBSCRIBER_REMOVED_FROM_WORKFLOW",
    /**
     * Get details about a specific survey.
     */
    GET_SURVEY: "MAILCHIMP_GET_SURVEY",
    /**
     * Get report for a survey question.
     */
    GET_SURVEY_QUESTION_REPORT: "MAILCHIMP_GET_SURVEY_QUESTION_REPORT",
    /**
     * Get report for a survey.
     */
    GET_SURVEY_REPORT: "MAILCHIMP_GET_SURVEY_REPORT",
    /**
     * Get a single survey response.
     */
    GET_SURVEY_RESPONSE: "MAILCHIMP_GET_SURVEY_RESPONSE",
    /**
     * Get information about a specific folder used to organize templates.
     */
    GET_TEMPLATE_FOLDER: "MAILCHIMP_GET_TEMPLATE_FOLDER",
    /**
     * Get information about a specific template.
     */
    GET_TEMPLATE_INFO: "MAILCHIMP_GET_TEMPLATE_INFO",
    /**
     * Get information about a specific list member who unsubscribed from a campaign.
     */
    GET_UNSUBSCRIBED_MEMBER: "MAILCHIMP_GET_UNSUBSCRIBED_MEMBER",
    /**
     * Get information about a specific webhook.
     */
    GET_WEBHOOK_INFO: "MAILCHIMP_GET_WEBHOOK_INFO",
    /**
     * Get information about an individual classic automation workflow email.
     */
    GET_WORKFLOW_EMAIL_INFO: "MAILCHIMP_GET_WORKFLOW_EMAIL_INFO",
    /**
     * Get all abuse reports for a specific list.
     */
    LIST_ABUSE_REPORTS: "MAILCHIMP_LIST_ABUSE_REPORTS",
    /**
     * Get a list of account exports for a given account.
     */
    LIST_ACCOUNT_EXPORTS: "MAILCHIMP_LIST_ACCOUNT_EXPORTS",
    /**
     * Get information about an account's orders.
     */
    LIST_ACCOUNT_ORDERS: "MAILCHIMP_LIST_ACCOUNT_ORDERS",
    /**
     * Get answers for a survey question.
     */
    LIST_ANSWERS_FOR_QUESTION: "MAILCHIMP_LIST_ANSWERS_FOR_QUESTION",
    /**
     * Get links to all other resources available in the api.
     */
    LIST_API_ROOT_RESOURCES: "MAILCHIMP_LIST_API_ROOT_RESOURCES",
    /**
     * Get a list of an account's registered, connected applications.
     */
    LIST_AUTHORIZED_APPS: "MAILCHIMP_LIST_AUTHORIZED_APPS",
    /**
     * Get a summary of the emails in a classic automation workflow.
     */
    LIST_AUTOMATED_EMAILS: "MAILCHIMP_LIST_AUTOMATED_EMAILS",
    /**
     * Get information about a classic automation email queue.
     */
    LIST_AUTOMATED_EMAIL_SUBSCRIBERS: "MAILCHIMP_LIST_AUTOMATED_EMAIL_SUBSCRIBERS",
    /**
     * Get a summary of an account's classic automations.
     */
    LIST_AUTOMATIONS: "MAILCHIMP_LIST_AUTOMATIONS",
    /**
     * Get a summary of batch requests that have been made.
     */
    LIST_BATCH_REQUESTS: "MAILCHIMP_LIST_BATCH_REQUESTS",
    /**
     * Get all webhooks that have been configured for batches.
     */
    LIST_BATCH_WEBHOOKS: "MAILCHIMP_LIST_BATCH_WEBHOOKS",
    /**
     * Get all campaigns in an account.
     */
    LIST_CAMPAIGNS: "MAILCHIMP_LIST_CAMPAIGNS",
    /**
     * Get information about clicks on specific links in your mailchimp campaigns.
     */
    LIST_CAMPAIGN_DETAILS: "MAILCHIMP_LIST_CAMPAIGN_DETAILS",
    /**
     * Get team feedback while you're working together on a mailchimp campaign.
     */
    LIST_CAMPAIGN_FEEDBACK: "MAILCHIMP_LIST_CAMPAIGN_FEEDBACK",
    /**
     * Get all folders used to organize campaigns.
     */
    LIST_CAMPAIGN_FOLDERS: "MAILCHIMP_LIST_CAMPAIGN_FOLDERS",
    /**
     * Get detailed information about any campaign emails that were opened by a list member.
     */
    LIST_CAMPAIGN_OPEN_DETAILS: "MAILCHIMP_LIST_CAMPAIGN_OPEN_DETAILS",
    /**
     * Get breakdown of product activity for a campaign
     */
    LIST_CAMPAIGN_PRODUCT_ACTIVITY: "MAILCHIMP_LIST_CAMPAIGN_PRODUCT_ACTIVITY",
    /**
     * Get information about campaign recipients.
     */
    LIST_CAMPAIGN_RECIPIENTS: "MAILCHIMP_LIST_CAMPAIGN_RECIPIENTS",
    /**
     * Get campaign reports.
     */
    LIST_CAMPAIGN_REPORTS: "MAILCHIMP_LIST_CAMPAIGN_REPORTS",
    /**
     * Get information about a store's carts.
     */
    LIST_CARTS: "MAILCHIMP_LIST_CARTS",
    /**
     * Get information about a cart's line items.
     */
    LIST_CART_LINE_ITEMS: "MAILCHIMP_LIST_CART_LINE_ITEMS",
    /**
     * Get a list of reports with child campaigns for a specific parent campaign.
     */
    LIST_CHILD_CAMPAIGN_REPORTS: "MAILCHIMP_LIST_CHILD_CAMPAIGN_REPORTS",
    /**
     * Get information about list members who clicked on a specific link in a campaign.
     */
    LIST_CLICKED_LINK_SUBSCRIBERS: "MAILCHIMP_LIST_CLICKED_LINK_SUBSCRIBERS",
    /**
     * Get all connected sites in an account.
     */
    LIST_CONNECTED_SITES: "MAILCHIMP_LIST_CONNECTED_SITES",
    /**
     * List of conversations for an account is available via an endpoint, but it's deprecated in favor of inbox. the endpoint excludes new inbox data including campaign replies and messages. past conversations remain accessible.
     */
    LIST_CONVERSATIONS: "MAILCHIMP_LIST_CONVERSATIONS",
    /**
     * Get information about a store's customers.
     */
    LIST_CUSTOMERS: "MAILCHIMP_LIST_CUSTOMERS",
    /**
     * Get statistics for the top-performing email domains in a campaign.
     */
    LIST_DOMAIN_PERFORMANCE_STATS: "MAILCHIMP_LIST_DOMAIN_PERFORMANCE_STATS",
    /**
     * Get a summary of social activity for the campaign, tracked by eepurl.
     */
    LIST_EEP_URL_ACTIVITY: "MAILCHIMP_LIST_EEP_URL_ACTIVITY",
    /**
     * Get a list of member's subscriber activity in a specific campaign.
     */
    LIST_EMAIL_ACTIVITY: "MAILCHIMP_LIST_EMAIL_ACTIVITY",
    /**
     * Get list of facebook ads.
     */
    LIST_FACEBOOK_ADS: "MAILCHIMP_LIST_FACEBOOK_ADS",
    /**
     * Get reports of facebook ads.
     */
    LIST_FACEBOOK_ADS_REPORTS: "MAILCHIMP_LIST_FACEBOOK_ADS_REPORTS",
    /**
     * Get breakdown of product activity for an outreach.
     */
    LIST_FACEBOOK_ECOMMERCE_REPORT: "MAILCHIMP_LIST_FACEBOOK_ECOMMERCE_REPORT",
    /**
     * Get a list of all folders in the file manager.
     */
    LIST_FOLDERS: "MAILCHIMP_LIST_FOLDERS",
    /**
     * Get a month-by-month summary of a specific list's growth activity.
     */
    LIST_GROWTH_HISTORY_DATA: "MAILCHIMP_LIST_GROWTH_HISTORY_DATA",
    /**
     * Get a list of this category's interests.
     */
    LIST_INTERESTS_IN_CATEGORY: "MAILCHIMP_LIST_INTERESTS_IN_CATEGORY",
    /**
     * Get information about a list's interest categories.
     */
    LIST_INTEREST_CATEGORIES: "MAILCHIMP_LIST_INTEREST_CATEGORIES",
    /**
     * Get all landing pages.
     */
    LIST_LANDING_PAGES: "MAILCHIMP_LIST_LANDING_PAGES",
    /**
     * Get reports of landing pages.
     */
    LIST_LANDING_PAGES_REPORTS: "MAILCHIMP_LIST_LANDING_PAGES_REPORTS",
    /**
     * Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their ip address.
     */
    LIST_LOCATIONS: "MAILCHIMP_LIST_LOCATIONS",
    /**
     * Get information about members in a specific mailchimp list.
     */
    LIST_MEMBERS_INFO: "MAILCHIMP_LIST_MEMBERS_INFO",
    /**
     * Get information about members in a saved segment.
     */
    LIST_MEMBERS_IN_SEGMENT: "MAILCHIMP_LIST_MEMBERS_IN_SEGMENT",
    /**
     * Get events for a contact.
     */
    LIST_MEMBER_EVENTS: "MAILCHIMP_LIST_MEMBER_EVENTS",
    /**
     * Get the last 50 goal events for a member on a specific list.
     */
    LIST_MEMBER_GOAL_EVENTS: "MAILCHIMP_LIST_MEMBER_GOAL_EVENTS",
    /**
     * Get the tags on a list member.
     */
    LIST_MEMBER_TAGS: "MAILCHIMP_LIST_MEMBER_TAGS",
    /**
     * Get a list of all merge fields for an audience.
     */
    LIST_MERGE_FIELDS: "MAILCHIMP_LIST_MERGE_FIELDS",
    /**
     * Legacy "conversations" endpoint is deprecated; use "inbox" for new messages. old conversations are accessible, but new campaign replies and inbox messages are not.
     */
    LIST_MESSAGES: "MAILCHIMP_LIST_MESSAGES",
    /**
     * Get information about a store's orders.
     */
    LIST_ORDERS: "MAILCHIMP_LIST_ORDERS",
    /**
     * Get information about an order's line items.
     */
    LIST_ORDER_LINE_ITEMS: "MAILCHIMP_LIST_ORDER_LINE_ITEMS",
    /**
     * Get information about a store's products.
     */
    LIST_PRODUCT: "MAILCHIMP_LIST_PRODUCT",
    /**
     * Get information about a product's images.
     */
    LIST_PRODUCT_IMAGES: "MAILCHIMP_LIST_PRODUCT_IMAGES",
    /**
     * Get information about a product's variants.
     */
    LIST_PRODUCT_VARIANTS: "MAILCHIMP_LIST_PRODUCT_VARIANTS",
    /**
     * Get information about a store's promo codes.
     */
    LIST_PROMO_CODES: "MAILCHIMP_LIST_PROMO_CODES",
    /**
     * Get information about a store's promo rules.
     */
    LIST_PROMO_RULES: "MAILCHIMP_LIST_PROMO_RULES",
    /**
     * Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including automation activity.
     */
    LIST_RECENT_ACTIVITY: "MAILCHIMP_LIST_RECENT_ACTIVITY",
    /**
     * Get recent notes for a specific list member.
     */
    LIST_RECENT_MEMBER_NOTES: "MAILCHIMP_LIST_RECENT_MEMBER_NOTES",
    /**
     * Get information about all available segments for a specific list.
     */
    LIST_SEGMENTS: "MAILCHIMP_LIST_SEGMENTS",
    /**
     * Get all of the sending domains on the account.
     */
    LIST_SENDING_DOMAINS: "MAILCHIMP_LIST_SENDING_DOMAINS",
    /**
     * Get signup forms for a specific list.
     */
    LIST_SIGNUP_FORMS: "MAILCHIMP_LIST_SIGNUP_FORMS",
    /**
     * Get a list of available images and files stored in the file manager for the account.
     */
    LIST_STORED_FILES: "MAILCHIMP_LIST_STORED_FILES",
    /**
     * Get information about all stores in the account.
     */
    LIST_STORES: "MAILCHIMP_LIST_STORES",
    /**
     * Get information about subscribers who were removed from a classic automation workflow.
     */
    LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW: "MAILCHIMP_LIST_SUBSCRIBERS_REMOVED_FROM_WORKFLOW",
    /**
     * Get reports for survey questions.
     */
    LIST_SURVEY_QUESTION_REPORTS: "MAILCHIMP_LIST_SURVEY_QUESTION_REPORTS",
    /**
     * Get reports for surveys.
     */
    LIST_SURVEY_REPORTS: "MAILCHIMP_LIST_SURVEY_REPORTS",
    /**
     * Get responses to a survey.
     */
    LIST_SURVEY_RESPONSES: "MAILCHIMP_LIST_SURVEY_RESPONSES",
    /**
     * Get a list of an account's available templates.
     */
    LIST_TEMPLATES: "MAILCHIMP_LIST_TEMPLATES",
    /**
     * Get all folders used to organize templates.
     */
    LIST_TEMPLATE_FOLDERS: "MAILCHIMP_LIST_TEMPLATE_FOLDERS",
    /**
     * Get a list of the top email clients based on user-agent strings.
     */
    LIST_TOP_EMAIL_CLIENTS: "MAILCHIMP_LIST_TOP_EMAIL_CLIENTS",
    /**
     * Get top open locations for a specific campaign.
     */
    LIST_TOP_OPEN_ACTIVITIES: "MAILCHIMP_LIST_TOP_OPEN_ACTIVITIES",
    /**
     * Get information about members who have unsubscribed from a specific campaign.
     */
    LIST_UNSUBSCRIBED_MEMBERS: "MAILCHIMP_LIST_UNSUBSCRIBED_MEMBERS",
    /**
     * Get information about all webhooks for a specific list.
     */
    LIST_WEBHOOKS: "MAILCHIMP_LIST_WEBHOOKS",
    /**
     * Pause an automated email.
     */
    PAUSE_AUTOMATED_EMAIL: "MAILCHIMP_PAUSE_AUTOMATED_EMAIL",
    /**
     * Pause all emails in a specific classic automation workflow.
     */
    PAUSE_AUTOMATION_EMAILS: "MAILCHIMP_PAUSE_AUTOMATION_EMAILS",
    /**
     * Pause an rss-driven campaign.
     */
    PAUSE_RSS_CAMPAIGN: "MAILCHIMP_PAUSE_RSS_CAMPAIGN",
    /**
     * A health check for the api that won't return any account-specific information.
     */
    PING: "MAILCHIMP_PING",
    /**
     * Publish a survey that is in draft, unpublished, or has been previously published and edited.
     */
    PUBLISH_A_SURVEY: "MAILCHIMP_PUBLISH_A_SURVEY",
    /**
     * Publish a landing page that is in draft, unpublished, or has been previously published and edited.
     */
    PUBLISH_LANDING_PAGE: "MAILCHIMP_PUBLISH_LANDING_PAGE",
    /**
     * Remove a member from the specified static segment.
     */
    REMOVE_LIST_MEMBER_FROM_SEGMENT: "MAILCHIMP_REMOVE_LIST_MEMBER_FROM_SEGMENT",
    /**
     * Remove a subscriber from any point in a classic automation workflow; once removed, they cannot be re-added to that workflow.
     */
    REMOVE_SUBSCRIBER_FROM_WORKFLOW: "MAILCHIMP_REMOVE_SUBSCRIBER_FROM_WORKFLOW",
    /**
     * Replicate a campaign in saved or send status.
     */
    REPLICATE_CAMPAIGN: "MAILCHIMP_REPLICATE_CAMPAIGN",
    /**
     * Remove the guesswork for resending a campaign to certain segments. you can use this endpoint as a shortcut to replicate a campaign and resend it to common segments, such as those who didn't open the campaign, or any new subscribers since it was sent.
     */
    RESEND_CAMPAIGN: "MAILCHIMP_RESEND_CAMPAIGN",
    /**
     * Resume an rss-driven campaign.
     */
    RESUME_RSS_CAMPAIGN: "MAILCHIMP_RESUME_RSS_CAMPAIGN",
    /**
     * Get a list of abuse complaints for a specific campaign.
     */
    RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS: "MAILCHIMP_RETRIEVE_CAMPAIGN_ABUSE_COMPLAINTS",
    /**
     * Get a list of available images and files stored in this folder.
     */
    RETRIEVE_FOLDER_CONTENTS: "MAILCHIMP_RETRIEVE_FOLDER_CONTENTS",
    /**
     * Schedule a campaign for delivery. if you're using multivariate campaigns to test send times or sending rss campaigns, use the send action instead.
     */
    SCHEDULE_CAMPAIGN: "MAILCHIMP_SCHEDULE_CAMPAIGN",
    /**
     * Search all campaigns for the specified query terms.
     */
    SEARCH_CAMPAIGNS: "MAILCHIMP_SEARCH_CAMPAIGNS",
    /**
     * Search for tags on a list by name. if no name is provided, will return all tags on the list.
     */
    SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME: "MAILCHIMP_SEARCH_FOR_TAGS_ON_A_LIST_BY_NAME",
    /**
     * Search for list members. this search can be restricted to a specific list, or can be used to search across all lists in an account.
     */
    SEARCH_MEMBERS: "MAILCHIMP_SEARCH_MEMBERS",
    /**
     * Send a mailchimp campaign. for rss campaigns, the campaign will send according to its schedule. all other campaigns will send immediately.
     */
    SEND_CAMPAIGN: "MAILCHIMP_SEND_CAMPAIGN",
    /**
     * Send a test email.
     */
    SEND_TEST_EMAIL: "MAILCHIMP_SEND_TEST_EMAIL",
    /**
     * Set the content for a campaign.
     */
    SET_CAMPAIGN_CONTENT: "MAILCHIMP_SET_CAMPAIGN_CONTENT",
    /**
     * Start an automated email.
     */
    START_AUTOMATED_EMAIL: "MAILCHIMP_START_AUTOMATED_EMAIL",
    /**
     * Start all emails in a classic automation workflow.
     */
    START_AUTOMATION_EMAILS: "MAILCHIMP_START_AUTOMATION_EMAILS",
    /**
     * Begin processing a batch operations request.
     */
    START_BATCH_OPERATION: "MAILCHIMP_START_BATCH_OPERATION",
    /**
     * Unpublish a survey that has been published.
     */
    UNPUBLISH_A_SURVEY: "MAILCHIMP_UNPUBLISH_A_SURVEY",
    /**
     * Unpublish a landing page that is in draft or has been published.
     */
    UNPUBLISH_LANDING_PAGE: "MAILCHIMP_UNPUBLISH_LANDING_PAGE",
    /**
     * Unschedule a scheduled campaign that hasn't started sending.
     */
    UNSCHEDULE_CAMPAIGN: "MAILCHIMP_UNSCHEDULE_CAMPAIGN",
    /**
     * Update a webhook that will fire whenever any batch request completes processing.
     */
    UPDATE_BATCH_WEBHOOK: "MAILCHIMP_UPDATE_BATCH_WEBHOOK",
    /**
     * Update a specific feedback message for a campaign.
     */
    UPDATE_CAMPAIGN_FEEDBACK_MESSAGE: "MAILCHIMP_UPDATE_CAMPAIGN_FEEDBACK_MESSAGE",
    /**
     * Update a specific folder used to organize campaigns.
     */
    UPDATE_CAMPAIGN_FOLDER: "MAILCHIMP_UPDATE_CAMPAIGN_FOLDER",
    /**
     * Update some or all of the settings for a specific campaign.
     */
    UPDATE_CAMPAIGN_SETTINGS: "MAILCHIMP_UPDATE_CAMPAIGN_SETTINGS",
    /**
     * Update a specific cart.
     */
    UPDATE_CART: "MAILCHIMP_UPDATE_CART",
    /**
     * Update a specific cart line item.
     */
    UPDATE_CART_LINE_ITEM: "MAILCHIMP_UPDATE_CART_LINE_ITEM",
    /**
     * Update a customer.
     */
    UPDATE_CUSTOMER: "MAILCHIMP_UPDATE_CUSTOMER",
    /**
     * Update a file in the file manager.
     */
    UPDATE_FILE: "MAILCHIMP_UPDATE_FILE",
    /**
     * Update a specific file manager folder.
     */
    UPDATE_FOLDER: "MAILCHIMP_UPDATE_FOLDER",
    /**
     * Update a specific interest category.
     */
    UPDATE_INTEREST_CATEGORY: "MAILCHIMP_UPDATE_INTEREST_CATEGORY",
    /**
     * Update interests or 'group names' for a specific category.
     */
    UPDATE_INTEREST_IN_CATEGORY: "MAILCHIMP_UPDATE_INTEREST_IN_CATEGORY",
    /**
     * Update a landing page.
     */
    UPDATE_LANDING_PAGE: "MAILCHIMP_UPDATE_LANDING_PAGE",
    /**
     * Update the settings for a specific list.
     */
    UPDATE_LISTS: "MAILCHIMP_UPDATE_LISTS",
    /**
     * Update information for a specific list member.
     */
    UPDATE_LIST_MEMBER: "MAILCHIMP_UPDATE_LIST_MEMBER",
    /**
     * Update a specific merge field.
     */
    UPDATE_MERGE_FIELD: "MAILCHIMP_UPDATE_MERGE_FIELD",
    /**
     * Update a specific note for a specific list member.
     */
    UPDATE_NOTE: "MAILCHIMP_UPDATE_NOTE",
    /**
     * Update a specific order.
     */
    UPDATE_ORDER: "MAILCHIMP_UPDATE_ORDER",
    /**
     * Update a specific order line item.
     */
    UPDATE_ORDER_LINE_ITEM: "MAILCHIMP_UPDATE_ORDER_LINE_ITEM",
    /**
     * Update a specific product.
     */
    UPDATE_PRODUCT: "MAILCHIMP_UPDATE_PRODUCT",
    /**
     * Update a product image.
     */
    UPDATE_PRODUCT_IMAGE: "MAILCHIMP_UPDATE_PRODUCT_IMAGE",
    /**
     * Update a product variant.
     */
    UPDATE_PRODUCT_VARIANT: "MAILCHIMP_UPDATE_PRODUCT_VARIANT",
    /**
     * Update a promo code.
     */
    UPDATE_PROMO_CODE: "MAILCHIMP_UPDATE_PROMO_CODE",
    /**
     * Update a promo rule.
     */
    UPDATE_PROMO_RULE: "MAILCHIMP_UPDATE_PROMO_RULE",
    /**
     * Update a store.
     */
    UPDATE_STORE: "MAILCHIMP_UPDATE_STORE",
    /**
     * Update the name, html, or `folder id` of an existing template.
     */
    UPDATE_TEMPLATE: "MAILCHIMP_UPDATE_TEMPLATE",
    /**
     * Update a specific folder used to organize templates.
     */
    UPDATE_TEMPLATE_FOLDER: "MAILCHIMP_UPDATE_TEMPLATE_FOLDER",
    /**
     * Update the settings for an existing webhook.
     */
    UPDATE_WEBHOOK: "MAILCHIMP_UPDATE_WEBHOOK",
    /**
     * Update settings for a classic automation workflow email. only works with workflows of type: abandonedbrowse, abandonedcart, emailfollowup, or singlewelcome.
     */
    UPDATE_WORKFLOW_EMAIL: "MAILCHIMP_UPDATE_WORKFLOW_EMAIL",
    /**
     * Verify that the connected sites script has been installed, either via the script url or fragment.
     */
    VERIFY_CONNECTED_SITE_SCRIPT: "MAILCHIMP_VERIFY_CONNECTED_SITE_SCRIPT",
    /**
     * Verify a domain for sending.
     */
    VERIFY_DOMAIN: "MAILCHIMP_VERIFY_DOMAIN",
    /**
     * Get the sections that you can edit in a template, including each section's default content.
     */
    VIEW_DEFAULT_CONTENT: "MAILCHIMP_VIEW_DEFAULT_CONTENT",
    /**
     * Get a member's activity on a specific list, including opens, clicks, and unsubscribes.
     */
    VIEW_RECENT_ACTIVITY: "MAILCHIMP_VIEW_RECENT_ACTIVITY",
    /**
     * Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.
     */
    VIEW_RECENT_ACTIVITY50: "MAILCHIMP_VIEW_RECENT_ACTIVITY50",
  },
  triggerTypes: {
    /**
     * Triggered when a campaign is sent or experiences an event in Mailchimp
     */
    CAMPAIGN_TRIGGER: "MAILCHIMP_CAMPAIGN_TRIGGER",
    /**
     * Triggered when a subscriber's profile is updated in Mailchimp
     */
    PROFILE_UPDATE_TRIGGER: "MAILCHIMP_PROFILE_UPDATE_TRIGGER",
    /**
     * Triggered when a subscriber subscribes to Mailchimp
     */
    SUBSCRIBE_TRIGGER: "MAILCHIMP_SUBSCRIBE_TRIGGER",
    /**
     * Triggered when a subscriber unsubscribes from Mailchimp
     */
    UNSUBSCRIBE_TRIGGER: "MAILCHIMP_UNSUBSCRIBE_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "MAILCHIMP".
 */
export type MAILCHIMP_TRIGGER_PAYLOADS = {
  CAMPAIGN_TRIGGER: MAILCHIMP_CAMPAIGN_TRIGGER_PAYLOAD
  PROFILE_UPDATE_TRIGGER: MAILCHIMP_PROFILE_UPDATE_TRIGGER_PAYLOAD
  SUBSCRIBE_TRIGGER: MAILCHIMP_SUBSCRIBE_TRIGGER_PAYLOAD
  UNSUBSCRIBE_TRIGGER: MAILCHIMP_UNSUBSCRIBE_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "MAILCHIMP".
 */
export type MAILCHIMP_TRIGGER_EVENTS = {
  CAMPAIGN_TRIGGER: TriggerEvent<MAILCHIMP_CAMPAIGN_TRIGGER_PAYLOAD>
  PROFILE_UPDATE_TRIGGER: TriggerEvent<MAILCHIMP_PROFILE_UPDATE_TRIGGER_PAYLOAD>
  SUBSCRIBE_TRIGGER: TriggerEvent<MAILCHIMP_SUBSCRIBE_TRIGGER_PAYLOAD>
  UNSUBSCRIBE_TRIGGER: TriggerEvent<MAILCHIMP_UNSUBSCRIBE_TRIGGER_PAYLOAD>
}
