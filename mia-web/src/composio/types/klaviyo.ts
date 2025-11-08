// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KLAVIYO's KLAVIYO_ADD_PROFILE_TO_LIST tool input.
 */
type KLAVIYO_ADD_PROFILE_TO_LIST_INPUT = {
  /**
   * Emails
   * @description List of email addresses to add to the list (alternative to profile_ids)
   */
  emails?: string[];
  /**
   * List Id
   * @description The ID of the list to add profiles to
   */
  list_id?: string;
  /**
   * Profile Ids
   * @description List of profile IDs to add to the list (max 1000 per call)
   */
  profile_ids?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_ADD_PROFILE_TO_LIST tool output.
 */
type KLAVIYO_ADD_PROFILE_TO_LIST_OUTPUT = {
  /**
   * Data
   * @description Response data from Klaviyo containing information about the operation
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
 * Type of KLAVIYO's KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE tool input.
 */
type KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE_INPUT = {
  /**
   * Data  Id
   * @description The message ID to be assigned to
   */
  data__id?: string;
  /**
   * Data  Relationships  Template  Data  Id
   * @description The template ID to assign
   */
  data__relationships__template__data__id?: string;
  /**
   * Data  Relationships  Template  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__template__data__type?: "template";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign-message";
};

/**
 * Type of KLAVIYO's KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE tool output.
 */
type KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_BULK_CREATE_CLIENT_EVENTS tool input.
 */
type KLAVIYO_BULK_CREATE_CLIENT_EVENTS_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes  Events  Data
   * @description Data
   */
  data__attributes__events__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "event-bulk-create";
};

/**
 * Type of KLAVIYO's KLAVIYO_BULK_CREATE_CLIENT_EVENTS tool output.
 */
type KLAVIYO_BULK_CREATE_CLIENT_EVENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_BULK_CREATE_EVENTS tool input.
 */
type KLAVIYO_BULK_CREATE_EVENTS_INPUT = {
  /**
   * Data  Attributes  Events  Bulk  Create  Data
   * @description Data
   */
  data__attributes__events__bulk__create__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "event-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_BULK_CREATE_EVENTS tool output.
 */
type KLAVIYO_BULK_CREATE_EVENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION tool input.
 */
type KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION_INPUT = {
  /**
   * Data  Attributes  Channels
   * @description The channel(s) through which the profile would like to receive the back in stock notification. This can be leveraged within a back in stock flow to notify the subscriber through their preferred channel(s).
   */
  data__attributes__channels?: string[];
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Relationships  Variant  Data  Id
   * @description The catalog variant ID for which the profile is subscribing to back in stock notifications. This ID is made up of the integration type, catalog ID, and and the external ID of the variant like so: `integrationType:::catalogId:::externalId`. If the integration you are using is not set up for multi-catalog storage, the "catalogId" will be `$default`. For Shopify `$shopify:::$default:::33001893429341`
   */
  data__relationships__variant__data__id?: string;
  /**
   * Data  Relationships  Variant  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__variant__data__type?: "catalog-variant";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "back-in-stock-subscription";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION tool output.
 */
type KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN tool input.
 */
type KLAVIYO_CREATE_CAMPAIGN_INPUT = {
  /**
   * Data  Attributes  Audiences  Excluded
   * @description An optional list of excluded audiences
   */
  data__attributes__audiences__excluded?: string[];
  /**
   * Data  Attributes  Audiences  Included
   * @description A list of included audiences
   */
  data__attributes__audiences__included?: string[];
  /**
   * Data  Attributes  Campaign  Messages  Data
   * @description Data
   */
  data__attributes__campaign__messages__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Attributes  Name
   * @description The campaign name
   */
  data__attributes__name?: string;
  /**
   * Data  Attributes  Send  Options
   * @description Options to use when sending a campaign
   */
  data__attributes__send__options?: {
      [key: string]: unknown;
  };
  /**
   * Data  Attributes  Send  Strategy  Method
   * @description Describes the shape of the options object. Allowed values: ["static", "throttled", "immediate", "smart_send_time"]
   */
  data__attributes__send__strategy__method?: string;
  /**
   * Data  Attributes  Send  Strategy  Options  Static  Datetime
   * Format: date-time
   * @description The time to send at
   */
  data__attributes__send__strategy__options__static__datetime?: string;
  /**
   * Data  Attributes  Send  Strategy  Options  Static  Is  Local
   * @description If the campaign should be sent with local recipient timezone send (requires UTC time) or statically sent at the given time. Defaults to False.
   */
  data__attributes__send__strategy__options__static__is__local?: boolean;
  /**
   * Data  Attributes  Send  Strategy  Options  Static  Send  Past  Recipients  Immediately
   * @description Determines if we should send to local recipient timezone if the given time has passed. Only applicable to local sends. Defaults to False.
   */
  data__attributes__send__strategy__options__static__send__past__recipients__immediately?: boolean;
  /**
   * Data  Attributes  Send  Strategy  Options  Sto  Date
   * Format: date
   * @description The day to send on
   */
  data__attributes__send__strategy__options__sto__date?: string;
  /**
   * Data  Attributes  Send  Strategy  Options  Throttled  Datetime
   * Format: date-time
   * @description The time to send at
   */
  data__attributes__send__strategy__options__throttled__datetime?: string;
  /**
   * Data  Attributes  Send  Strategy  Options  Throttled  Throttle  Percentage
   * @description The percentage of recipients per hour to send to. Allowed values: [10, 11, 13, 14, 17, 20, 25, 33, 50]
   */
  data__attributes__send__strategy__options__throttled__throttle__percentage?: number;
  /**
   * Data  Attributes  Tracking  Options
   * @description The tracking options associated with the campaign
   */
  data__attributes__tracking__options?: {
      [key: string]: unknown;
  };
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN tool output.
 */
type KLAVIYO_CREATE_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN_CLONE tool input.
 */
type KLAVIYO_CREATE_CAMPAIGN_CLONE_INPUT = {
  /**
   * Data  Attributes  New  Name
   * @description The name for the new cloned campaign
   */
  data__attributes__new__name?: string;
  /**
   * Data  Id
   * @description The campaign ID to be cloned
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN_CLONE tool output.
 */
type KLAVIYO_CREATE_CAMPAIGN_CLONE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB tool input.
 */
type KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign to perform recipient estimation for
   */
  campaign_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB tool output.
 */
type KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_OUTPUT = {
  /**
   * Data
   * @description Job data from Klaviyo containing the estimation job ID and status
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
   * Job Id
   * @description The ID of the created estimation job for tracking
   */
  job_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN_SEND_JOB tool input.
 */
type KLAVIYO_CREATE_CAMPAIGN_SEND_JOB_INPUT = {
  /**
   * Data  Id
   * @description The ID of the campaign to send
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign-send-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CAMPAIGN_SEND_JOB tool output.
 */
type KLAVIYO_CREATE_CAMPAIGN_SEND_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_CATEGORY tool input.
 */
type KLAVIYO_CREATE_CATALOG_CATEGORY_INPUT = {
  /**
   * Data  Attributes  Catalog  Type
   * @description The type of catalog. Currently only "$default" is supported.
   * @default $default
   */
  data__attributes__catalog__type: string;
  /**
   * Data  Attributes  External  Id
   * @description The ID of the catalog category in an external system.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Attributes  Integration  Type
   * @description The integration type. Currently only "$custom" is supported.
   * @default $custom
   * @enum {string}
   */
  data__attributes__integration__type: "$custom";
  /**
   * Data  Attributes  Name
   * @description The name of the catalog category.
   */
  data__attributes__name?: string;
  /**
   * Data  Relationships  Items  Data
   * @description Data
   */
  data__relationships__items__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-category";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_CATEGORY tool output.
 */
type KLAVIYO_CREATE_CATALOG_CATEGORY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool input.
 */
type KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool output.
 */
type KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_ITEM tool input.
 */
type KLAVIYO_CREATE_CATALOG_ITEM_INPUT = {
  /**
   * Data  Attributes  Catalog  Type
   * @description The type of catalog. Currently only "$default" is supported.
   * @default $default
   */
  data__attributes__catalog__type: string;
  /**
   * Data  Attributes  Description
   * @description A description of the catalog item.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  External  Id
   * @description The ID of the catalog item in an external system.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Attributes  Image  Full  Url
   * @description URL pointing to the location of a full image of the catalog item.
   */
  data__attributes__image__full__url?: string;
  /**
   * Data  Attributes  Image  Thumbnail  Url
   * @description URL pointing to the location of an image thumbnail of the catalog item
   */
  data__attributes__image__thumbnail__url?: string;
  /**
   * Data  Attributes  Images
   * @description List of URLs pointing to the locations of images of the catalog item.
   */
  data__attributes__images?: string[];
  /**
   * Data  Attributes  Integration  Type
   * @description The integration type. Currently only "$custom" is supported.
   * @default $custom
   * @enum {string}
   */
  data__attributes__integration__type: "$custom";
  /**
   * Data  Attributes  Price
   * @description This field can be used to set the price on the catalog item, which is what gets displayed for the item when included in emails. For most price-update use cases, you will also want to update the `price` on any child variants, using the [Update Catalog Variant Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_variant).
   */
  data__attributes__price?: number;
  /**
   * Data  Attributes  Published
   * @description Boolean value indicating whether the catalog item is published.
   * @default true
   */
  data__attributes__published: boolean;
  /**
   * Data  Attributes  Title
   * @description The title of the catalog item.
   */
  data__attributes__title?: string;
  /**
   * Data  Attributes  Url
   * @description URL pointing to the location of the catalog item on your website.
   */
  data__attributes__url?: string;
  /**
   * Data  Relationships  Categories  Data
   * @description Data
   */
  data__relationships__categories__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-item";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_ITEM tool output.
 */
type KLAVIYO_CREATE_CATALOG_ITEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool input.
 */
type KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool output.
 */
type KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_VARIANT tool input.
 */
type KLAVIYO_CREATE_CATALOG_VARIANT_INPUT = {
  /**
   * Data  Attributes  Catalog  Type
   * @description The type of catalog. Currently only "$default" is supported.
   * @default $default
   */
  data__attributes__catalog__type: string;
  /**
   * Data  Attributes  Description
   * @description A description of the catalog item variant.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  External  Id
   * @description The ID of the catalog item variant in an external system.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Attributes  Image  Full  Url
   * @description URL pointing to the location of a full image of the catalog item variant.
   */
  data__attributes__image__full__url?: string;
  /**
   * Data  Attributes  Image  Thumbnail  Url
   * @description URL pointing to the location of an image thumbnail of the catalog item variant.
   */
  data__attributes__image__thumbnail__url?: string;
  /**
   * Data  Attributes  Images
   * @description List of URLs pointing to the locations of images of the catalog item variant.
   */
  data__attributes__images?: string[];
  /**
   * Data  Attributes  Integration  Type
   * @description The integration type. Currently only "$custom" is supported.
   * @default $custom
   * @enum {string}
   */
  data__attributes__integration__type: "$custom";
  /**
   * Data  Attributes  Inventory  Policy
   * @description This field controls the visibility of this catalog item variant in product feeds/blocks. This field supports the following values: `1`: a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock. `0` or `2`: a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.
   * @default 0
   */
  data__attributes__inventory__policy: number;
  /**
   * Data  Attributes  Inventory  Quantity
   * @description The quantity of the catalog item variant currently in stock.
   */
  data__attributes__inventory__quantity?: number;
  /**
   * Data  Attributes  Price
   * @description This field can be used to set the price on the catalog item variant, which is what gets displayed for the item variant when included in emails. For most price-update use cases, you will also want to update the `price` on any parent items using the [Update Catalog Item Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_item).
   */
  data__attributes__price?: number;
  /**
   * Data  Attributes  Published
   * @description Boolean value indicating whether the catalog item variant is published.
   * @default true
   */
  data__attributes__published: boolean;
  /**
   * Data  Attributes  Sku
   * @description The SKU of the catalog item variant.
   */
  data__attributes__sku?: string;
  /**
   * Data  Attributes  Title
   * @description The title of the catalog item variant.
   */
  data__attributes__title?: string;
  /**
   * Data  Attributes  Url
   * @description URL pointing to the location of the catalog item variant on your website.
   */
  data__attributes__url?: string;
  /**
   * Data  Relationships  Item  Data  Id
   * @description The original catalog item ID for which this is a variant.
   */
  data__relationships__item__data__id?: string;
  /**
   * Data  Relationships  Item  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__item__data__type?: "catalog-item";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-variant";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CATALOG_VARIANT tool output.
 */
type KLAVIYO_CREATE_CATALOG_VARIANT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION tool input.
 */
type KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes  Channels
   * @description The channel(s) through which the profile would like to receive the back in stock notification. This can be leveraged within a back in stock flow to notify the subscriber through their preferred channel(s).
   */
  data__attributes__channels?: string[];
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Relationships  Variant  Data  Id
   * @description The catalog variant ID for which the profile is subscribing to back in stock notifications. This ID is made up of the integration type, catalog ID, and and the external ID of the variant like so: `integrationType:::catalogId:::externalId`. If the integration you are using is not set up for multi-catalog storage, the "catalogId" will be `$default`. For Shopify `$shopify:::$default:::33001893429341`
   */
  data__relationships__variant__data__id?: string;
  /**
   * Data  Relationships  Variant  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__variant__data__type?: "catalog-variant";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "back-in-stock-subscription";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION tool output.
 */
type KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CLIENT_EVENT tool input.
 */
type KLAVIYO_CREATE_CLIENT_EVENT_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes  Metric  Data  Attributes  Name
   * @description Name of the event. Must be less than 128 characters.
   */
  data__attributes__metric__data__attributes__name?: string;
  /**
   * Data  Attributes  Metric  Data  Attributes  Service
   * @description This is for advanced usage. For api requests, this should use the default, which is set to api.
   */
  data__attributes__metric__data__attributes__service?: string;
  /**
   * Data  Attributes  Metric  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__metric__data__type?: "metric";
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__attributes__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Attributes  Time
   * Format: date-time
   * @description When this event occurred. By default, the time the request was received will be used. The time is truncated to the second. The time must be after the year 2000 and can only be up to 1 year in the future.
   */
  data__attributes__time?: string;
  /**
   * Data  Attributes  Unique  Id
   * @description A unique identifier for an event. If the unique_id is repeated for the same profile and metric, only the first processed event will be recorded. If this is not present, this will use the time to the second. Using the default, this limits only one event per profile per second.
   */
  data__attributes__unique__id?: string;
  /**
   * Data  Attributes  Value
   * @description A numeric, monetary value to associate with this event. For example, the dollar amount of a purchase.
   */
  data__attributes__value?: number;
  /**
   * Data  Attributes  Value  Currency
   * @description The ISO 4217 currency code of the value associated with the event.
   */
  data__attributes__value__currency?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "event";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CLIENT_EVENT tool output.
 */
type KLAVIYO_CREATE_CLIENT_EVENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CLIENT_SUBSCRIPTION tool input.
 */
type KLAVIYO_CREATE_CLIENT_SUBSCRIPTION_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes  Custom  Source
   * @description A custom method detail or source to store on the consent records for this subscription.
   */
  data__attributes__custom__source?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Id that can be used to identify a profile when other identifiers are not available
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Relationships  List  Data  Id
   * @description The list ID to add the newly subscribed profile to.
   */
  data__relationships__list__data__id?: string;
  /**
   * Data  Relationships  List  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__list__data__type?: "list";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "subscription";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_CLIENT_SUBSCRIPTION tool output.
 */
type KLAVIYO_CREATE_CLIENT_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_COUPON tool input.
 */
type KLAVIYO_CREATE_COUPON_INPUT = {
  /**
   * Data  Attributes  Description
   * @description A description of the coupon.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  External  Id
   * @description This is the id that is stored in an integration such as Shopify or Magento.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "coupon";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_COUPON tool output.
 */
type KLAVIYO_CREATE_COUPON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_COUPON_CODE tool input.
 */
type KLAVIYO_CREATE_COUPON_CODE_INPUT = {
  /**
   * Data  Attributes  Expires  At
   * Format: date-time
   * @description The datetime when this coupon code will expire. If not specified or set to null, it will be automatically set to 1 year.
   */
  data__attributes__expires__at?: string;
  /**
   * Data  Attributes  Unique  Code
   * @description This is a unique string that will be or is assigned to each customer/profile and is associated with a coupon.
   */
  data__attributes__unique__code?: string;
  /**
   * Data  Relationships  Coupon  Data  Id
   * @description Id
   */
  data__relationships__coupon__data__id?: string;
  /**
   * Data  Relationships  Coupon  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__coupon__data__type?: "coupon";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "coupon-code";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_COUPON_CODE tool output.
 */
type KLAVIYO_CREATE_COUPON_CODE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_EVENT tool input.
 */
type KLAVIYO_CREATE_EVENT_INPUT = {
  /**
   * Data  Attributes  Metric  Data  Attributes  Name
   * @description Name of the event. Must be less than 128 characters.
   */
  data__attributes__metric__data__attributes__name?: string;
  /**
   * Data  Attributes  Metric  Data  Attributes  Service
   * @description This is for advanced usage. For api requests, this should use the default, which is set to api.
   */
  data__attributes__metric__data__attributes__service?: string;
  /**
   * Data  Attributes  Metric  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__metric__data__type?: "metric";
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__attributes__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Attributes  Time
   * Format: date-time
   * @description When this event occurred. By default, the time the request was received will be used. The time is truncated to the second. The time must be after the year 2000 and can only be up to 1 year in the future.
   */
  data__attributes__time?: string;
  /**
   * Data  Attributes  Unique  Id
   * @description A unique identifier for an event. If the unique_id is repeated for the same profile and metric, only the first processed event will be recorded. If this is not present, this will use the time to the second. Using the default, this limits only one event per profile per second.
   */
  data__attributes__unique__id?: string;
  /**
   * Data  Attributes  Value
   * @description A numeric, monetary value to associate with this event. For example, the dollar amount of a purchase.
   */
  data__attributes__value?: number;
  /**
   * Data  Attributes  Value  Currency
   * @description The ISO 4217 currency code of the value associated with the event.
   */
  data__attributes__value__currency?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "event";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_EVENT tool output.
 */
type KLAVIYO_CREATE_EVENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_LIST tool input.
 */
type KLAVIYO_CREATE_LIST_INPUT = {
  /**
   * Data  Attributes  Name
   * @description A helpful name to label the list
   */
  data__attributes__name?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "list";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_LIST tool output.
 */
type KLAVIYO_CREATE_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE tool input.
 */
type KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes____kx?: string;
  /**
   * Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__email?: string;
  /**
   * Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__first__name?: string;
  /**
   * Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__image?: string;
  /**
   * Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__last__name?: string;
  /**
   * Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__location__city?: string;
  /**
   * Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__location__country?: string;
  /**
   * Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__location__region?: string;
  /**
   * Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__organization?: string;
  /**
   * Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__title?: string;
  /**
   * Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__id?: string;
  /**
   * Data  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__meta__patch__properties__unset?: string[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE tool output.
 */
type KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN tool input.
 */
type KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes  Background
   * @description The background state of the push token.
   * @default AVAILABLE
   * @enum {string}
   */
  data__attributes__background: "AVAILABLE" | "DENIED" | "RESTRICTED";
  /**
   * Data  Attributes  Device  Metadata  App  Build
   * @description The build of the app that created the push token
   */
  data__attributes__device__metadata__app__build?: string;
  /**
   * Data  Attributes  Device  Metadata  App  Id
   * @description The ID of the app that created the push token
   */
  data__attributes__device__metadata__app__id?: string;
  /**
   * Data  Attributes  Device  Metadata  App  Name
   * @description The name of the app that created the push token
   */
  data__attributes__device__metadata__app__name?: string;
  /**
   * Data  Attributes  Device  Metadata  App  Version
   * @description The version of the app that created the push token
   */
  data__attributes__device__metadata__app__version?: string;
  /**
   * Data  Attributes  Device  Metadata  Device  Id
   * @description Relatively stable ID for the device. Will update on app uninstall and reinstall
   */
  data__attributes__device__metadata__device__id?: string;
  /**
   * Data  Attributes  Device  Metadata  Device  Model
   * @description The model of the device
   */
  data__attributes__device__metadata__device__model?: string;
  /**
   * Data  Attributes  Device  Metadata  Environment
   * @description The environment in which the push token was created
   * @enum {string}
   */
  data__attributes__device__metadata__environment?: "debug" | "release";
  /**
   * Data  Attributes  Device  Metadata  Klaviyo  Sdk
   * @description The name of the SDK used to create the push token.
   * @enum {string}
   */
  data__attributes__device__metadata__klaviyo__sdk?: "android" | "swift";
  /**
   * Data  Attributes  Device  Metadata  Manufacturer
   * @description The manufacturer of the device
   */
  data__attributes__device__metadata__manufacturer?: string;
  /**
   * Data  Attributes  Device  Metadata  Os  Name
   * @description The name of the operating system on the device.
   * @enum {string}
   */
  data__attributes__device__metadata__os__name?: "android" | "ios" | "ipados" | "macos" | "tvos";
  /**
   * Data  Attributes  Device  Metadata  Os  Version
   * @description The version of the operating system on the device
   */
  data__attributes__device__metadata__os__version?: string;
  /**
   * Data  Attributes  Device  Metadata  Sdk  Version
   * @description The version of the SDK used to create the push token
   */
  data__attributes__device__metadata__sdk__version?: string;
  /**
   * Data  Attributes  Enablement  Status
   * @description This is the enablement status for the individual push token.
   * @default AUTHORIZED
   * @enum {string}
   */
  data__attributes__enablement__status: "AUTHORIZED" | "DENIED" | "NOT_DETERMINED" | "PROVISIONAL" | "UNAUTHORIZED";
  /**
   * Data  Attributes  Platform
   * @description The platform on which the push token was created.
   * @enum {string}
   */
  data__attributes__platform?: "android" | "ios";
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Id that can be used to identify a profile when other identifiers are not available
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__attributes__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Attributes  Token
   * @description A push token from APNS or FCM.
   */
  data__attributes__token?: string;
  /**
   * Data  Attributes  Vendor
   * @description The vendor of the push token.
   * @enum {string}
   */
  data__attributes__vendor?: "apns" | "fcm";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "push-token";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN tool output.
 */
type KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_PROFILE tool input.
 */
type KLAVIYO_CREATE_OR_UPDATE_PROFILE_INPUT = {
  /**
   * Address1
   * @description First line of street address
   */
  address1?: string;
  /**
   * Address2
   * @description Second line of street address
   */
  address2?: string;
  /**
   * Anonymous Id
   * @description Id that can be used to identify a profile when other identifiers are not available
   */
  anonymous_id?: string;
  /**
   * City
   * @description City name
   */
  city?: string;
  /**
   * Country
   * @description Country name
   */
  country?: string;
  /**
   * Email
   * @description Individual's email address
   */
  email?: string;
  /**
   * External Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system
   */
  external_id?: string;
  /**
   * First Name
   * @description Individual's first name
   */
  first_name?: string;
  /**
   * Image
   * @description URL pointing to the location of a profile image
   */
  image?: string;
  /**
   * Last Name
   * @description Individual's last name
   */
  last_name?: string;
  /**
   * Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  latitude?: string;
  /**
   * Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  longitude?: string;
  /**
   * Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  organization?: string;
  /**
   * Phone Number
   * @description Individual's phone number in E.164 format
   */
  phone_number?: string;
  /**
   * Properties
   * @description Custom properties to associate with the profile
   */
  properties?: {
      [key: string]: unknown;
  };
  /**
   * Region
   * @description Region within a country, such as state or province
   */
  region?: string;
  /**
   * Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  timezone?: string;
  /**
   * Title
   * @description Individual's job title
   */
  title?: string;
  /**
   * Zip Code
   * @description Zip code
   */
  zip_code?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_PROFILE tool output.
 */
type KLAVIYO_CREATE_OR_UPDATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The created or updated profile data from Klaviyo
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
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN tool input.
 */
type KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN_INPUT = {
  /**
   * Data  Attributes  Background
   * @description The background state of the push token.
   * @default AVAILABLE
   * @enum {string}
   */
  data__attributes__background: "AVAILABLE" | "DENIED" | "RESTRICTED";
  /**
   * Data  Attributes  Device  Metadata  App  Build
   * @description The build of the app that created the push token
   */
  data__attributes__device__metadata__app__build?: string;
  /**
   * Data  Attributes  Device  Metadata  App  Id
   * @description The ID of the app that created the push token
   */
  data__attributes__device__metadata__app__id?: string;
  /**
   * Data  Attributes  Device  Metadata  App  Name
   * @description The name of the app that created the push token
   */
  data__attributes__device__metadata__app__name?: string;
  /**
   * Data  Attributes  Device  Metadata  App  Version
   * @description The version of the app that created the push token
   */
  data__attributes__device__metadata__app__version?: string;
  /**
   * Data  Attributes  Device  Metadata  Device  Id
   * @description Relatively stable ID for the device. Will update on app uninstall and reinstall
   */
  data__attributes__device__metadata__device__id?: string;
  /**
   * Data  Attributes  Device  Metadata  Device  Model
   * @description The model of the device
   */
  data__attributes__device__metadata__device__model?: string;
  /**
   * Data  Attributes  Device  Metadata  Environment
   * @description The environment in which the push token was created
   * @enum {string}
   */
  data__attributes__device__metadata__environment?: "debug" | "release";
  /**
   * Data  Attributes  Device  Metadata  Klaviyo  Sdk
   * @description The name of the SDK used to create the push token.
   * @enum {string}
   */
  data__attributes__device__metadata__klaviyo__sdk?: "android" | "swift";
  /**
   * Data  Attributes  Device  Metadata  Manufacturer
   * @description The manufacturer of the device
   */
  data__attributes__device__metadata__manufacturer?: string;
  /**
   * Data  Attributes  Device  Metadata  Os  Name
   * @description The name of the operating system on the device.
   * @enum {string}
   */
  data__attributes__device__metadata__os__name?: "android" | "ios" | "ipados" | "macos" | "tvos";
  /**
   * Data  Attributes  Device  Metadata  Os  Version
   * @description The version of the operating system on the device
   */
  data__attributes__device__metadata__os__version?: string;
  /**
   * Data  Attributes  Device  Metadata  Sdk  Version
   * @description The version of the SDK used to create the push token
   */
  data__attributes__device__metadata__sdk__version?: string;
  /**
   * Data  Attributes  Enablement  Status
   * @description This is the enablement status for the individual push token.
   * @default AUTHORIZED
   * @enum {string}
   */
  data__attributes__enablement__status: "AUTHORIZED" | "DENIED" | "NOT_DETERMINED" | "PROVISIONAL" | "UNAUTHORIZED";
  /**
   * Data  Attributes  Platform
   * @description The platform on which the push token was created.
   * @enum {string}
   */
  data__attributes__platform?: "android" | "ios";
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Id that can be used to identify a profile when other identifiers are not available
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__attributes__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Attributes  Token
   * @description A push token from APNS or FCM.
   */
  data__attributes__token?: string;
  /**
   * Data  Attributes  Vendor
   * @description The vendor of the push token.
   * @enum {string}
   */
  data__attributes__vendor?: "apns" | "fcm";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "push-token";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN tool output.
 */
type KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_PROFILE tool input.
 */
type KLAVIYO_CREATE_PROFILE_INPUT = {
  /**
   * Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__email?: string;
  /**
   * Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__first__name?: string;
  /**
   * Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__image?: string;
  /**
   * Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__last__name?: string;
  /**
   * Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__location__city?: string;
  /**
   * Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__location__country?: string;
  /**
   * Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__location__region?: string;
  /**
   * Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__organization?: string;
  /**
   * Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__title?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_PROFILE tool output.
 */
type KLAVIYO_CREATE_PROFILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_SEGMENT tool input.
 */
type KLAVIYO_CREATE_SEGMENT_INPUT = {
  /**
   * Data  Attributes  Definition  Condition  Groups
   * @description Condition Groups
   */
  data__attributes__definition__condition__groups?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Attributes  Is  Starred
   * @description Is Starred
   * @default false
   */
  data__attributes__is__starred: boolean;
  /**
   * Data  Attributes  Name
   * @description Name
   */
  data__attributes__name?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "segment";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_SEGMENT tool output.
 */
type KLAVIYO_CREATE_SEGMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG tool input.
 */
type KLAVIYO_CREATE_TAG_INPUT = {
  /**
   * Data  Attributes  Name
   * @description The Tag name
   */
  data__attributes__name?: string;
  /**
   * Data  Relationships  Tag  Group  Data  Id
   * @description The ID of the Tag Group to associate the Tag with. If this field is not specified, the Tag will be associated with the company"s Default Tag Group.
   */
  data__relationships__tag__group__data__id?: string;
  /**
   * Data  Relationships  Tag  Group  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__tag__group__data__type?: "tag-group";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "tag";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG tool output.
 */
type KLAVIYO_CREATE_TAG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_GROUP tool input.
 */
type KLAVIYO_CREATE_TAG_GROUP_INPUT = {
  /**
   * Data  Attributes  Exclusive
   * @description Exclusive
   * @default false
   */
  data__attributes__exclusive: boolean;
  /**
   * Data  Attributes  Name
   * @description The Tag Group name
   */
  data__attributes__name?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "tag-group";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_GROUP tool output.
 */
type KLAVIYO_CREATE_TAG_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS tool input.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS tool output.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS tool input.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS tool output.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS tool input.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS tool output.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS tool input.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS tool output.
 */
type KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TEMPLATE tool input.
 */
type KLAVIYO_CREATE_TEMPLATE_INPUT = {
  /**
   * Data  Attributes  Editor  Type
   * @description Restricted to CODE
   */
  data__attributes__editor__type?: string;
  /**
   * Data  Attributes  Html
   * @description The HTML contents of the template
   */
  data__attributes__html?: string;
  /**
   * Data  Attributes  Name
   * @description The name of the template
   */
  data__attributes__name?: string;
  /**
   * Data  Attributes  Text
   * @description The plaintext version of the template
   */
  data__attributes__text?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "template";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TEMPLATE tool output.
 */
type KLAVIYO_CREATE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TEMPLATE_CLONE tool input.
 */
type KLAVIYO_CREATE_TEMPLATE_CLONE_INPUT = {
  /**
   * Data  Attributes  Name
   * @description The name of the template
   */
  data__attributes__name?: string;
  /**
   * Data  Id
   * @description The ID of template to be cloned
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "template";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TEMPLATE_CLONE tool output.
 */
type KLAVIYO_CREATE_TEMPLATE_CLONE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TEMPLATE_RENDER tool input.
 */
type KLAVIYO_CREATE_TEMPLATE_RENDER_INPUT = {
  /**
   * Data  Id
   * @description The ID of template
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "template";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_TEMPLATE_RENDER tool output.
 */
type KLAVIYO_CREATE_TEMPLATE_RENDER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_WEBHOOK tool input.
 */
type KLAVIYO_CREATE_WEBHOOK_INPUT = {
  /**
   * Data  Attributes  Description
   * @description A description for the webhook.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  Endpoint  Url
   * @description A url to send webhook calls to. Must be https.
   */
  data__attributes__endpoint__url?: string;
  /**
   * Data  Attributes  Name
   * @description A name for the webhook.
   */
  data__attributes__name?: string;
  /**
   * Data  Attributes  Secret  Key
   * @description A secret key, that will be used for webhook request signing.
   */
  data__attributes__secret__key?: string;
  /**
   * Data  Relationships  Webhook  Topics  Data
   * @description Data
   */
  data__relationships__webhook__topics__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "webhook";
};

/**
 * Type of KLAVIYO's KLAVIYO_CREATE_WEBHOOK tool output.
 */
type KLAVIYO_CREATE_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CAMPAIGN tool input.
 */
type KLAVIYO_DELETE_CAMPAIGN_INPUT = {
  /**
   * Id
   * @description The campaign ID to be deleted
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CAMPAIGN tool output.
 */
type KLAVIYO_DELETE_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_CATEGORY tool input.
 */
type KLAVIYO_DELETE_CATALOG_CATEGORY_INPUT = {
  /**
   * Id
   * @description The catalog category ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_CATEGORY tool output.
 */
type KLAVIYO_DELETE_CATALOG_CATEGORY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool input.
 */
type KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool output.
 */
type KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_ITEM tool input.
 */
type KLAVIYO_DELETE_CATALOG_ITEM_INPUT = {
  /**
   * Id
   * @description The catalog item ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_ITEM tool output.
 */
type KLAVIYO_DELETE_CATALOG_ITEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool input.
 */
type KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool output.
 */
type KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_VARIANT tool input.
 */
type KLAVIYO_DELETE_CATALOG_VARIANT_INPUT = {
  /**
   * Id
   * @description The catalog variant ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_CATALOG_VARIANT tool output.
 */
type KLAVIYO_DELETE_CATALOG_VARIANT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_COUPON tool input.
 */
type KLAVIYO_DELETE_COUPON_INPUT = {
  /**
   * Id
   * @description The internal id of a Coupon is equivalent to its external id stored within an integration.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_COUPON tool output.
 */
type KLAVIYO_DELETE_COUPON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_COUPON_CODE tool input.
 */
type KLAVIYO_DELETE_COUPON_CODE_INPUT = {
  /**
   * Id
   * @description The id of a coupon code is a combination of its unique code and the id of the coupon it is associated with.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_COUPON_CODE tool output.
 */
type KLAVIYO_DELETE_COUPON_CODE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_FLOW tool input.
 */
type KLAVIYO_DELETE_FLOW_INPUT = {
  /**
   * Id
   * @description ID of the Flow to delete. Ex: XVTP5Q
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_FLOW tool output.
 */
type KLAVIYO_DELETE_FLOW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_LIST tool input.
 */
type KLAVIYO_DELETE_LIST_INPUT = {
  /**
   * Id
   * @description Primary key that uniquely identifies this list. Generated by Klaviyo.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_LIST tool output.
 */
type KLAVIYO_DELETE_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_SEGMENT tool input.
 */
type KLAVIYO_DELETE_SEGMENT_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_SEGMENT tool output.
 */
type KLAVIYO_DELETE_SEGMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG tool input.
 */
type KLAVIYO_DELETE_TAG_INPUT = {
  /**
   * Id
   * @description The Tag ID
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG tool output.
 */
type KLAVIYO_DELETE_TAG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_GROUP tool input.
 */
type KLAVIYO_DELETE_TAG_GROUP_INPUT = {
  /**
   * Id
   * @description The Tag Group ID
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_GROUP tool output.
 */
type KLAVIYO_DELETE_TAG_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS tool input.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS tool output.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS tool input.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS tool output.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS tool input.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS tool output.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS tool input.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS tool output.
 */
type KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TEMPLATE tool input.
 */
type KLAVIYO_DELETE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description The ID of template
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_TEMPLATE tool output.
 */
type KLAVIYO_DELETE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_WEBHOOK tool input.
 */
type KLAVIYO_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The ID of the webhook.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_DELETE_WEBHOOK tool output.
 */
type KLAVIYO_DELETE_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_ACCOUNT tool input.
 */
type KLAVIYO_GET_ACCOUNT_INPUT = {
  /**
   * Fields  Account
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__account?: string[];
  /**
   * Id
   * @description The ID of the account
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_ACCOUNT tool output.
 */
type KLAVIYO_GET_ACCOUNT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_ACCOUNTS tool input.
 */
type KLAVIYO_GET_ACCOUNTS_INPUT = {
  /**
   * Fields  Account
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__account?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_ACCOUNTS tool output.
 */
type KLAVIYO_GET_ACCOUNTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_INPUT = {
  /**
   * Fields  List
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__list?: string[];
  /**
   * Fields  Profile  Bulk  Import  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile__bulk__import__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS_INPUT = {
  /**
   * Fields  Profile  Bulk  Import  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile__bulk__import__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `any`, `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created_at" | "-created_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS_INPUT = {
  /**
   * Fields  Import  Error
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__import__error?: string[];
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS_INPUT = {
  /**
   * Fields  List
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__list?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES_INPUT = {
  /**
   * Additional  Fields  Profile
   * @description Request additional fields not included by default in the response. Supported values: "subscriptions", "predictive_analytics"
   */
  additional__fields__profile?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES tool input.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES_INPUT = {
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES tool output.
 */
type KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN tool input.
 */
type KLAVIYO_GET_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The campaign ID to retrieve
   */
  campaign_id?: string;
  /**
   * Include Messages
   * @description Whether to include campaign messages in the response
   * @default false
   */
  include_messages: boolean;
  /**
   * Include Tags
   * @description Whether to include tags in the response
   * @default false
   */
  include_tags: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN tool output.
 */
type KLAVIYO_GET_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Campaign data from Klaviyo
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
   * Included
   * @description Included related objects (messages, tags) if requested
   */
  included?: {
      [key: string]: unknown;
  }[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGNS tool input.
 */
type KLAVIYO_GET_CAMPAIGNS_INPUT = {
  /**
   * Channel
   * @description Campaign channel to filter by (email or sms). Required by Klaviyo API.
   * @default email
   * @enum {string}
   */
  channel: "email" | "sms";
  /**
   * Filter
   * @description Additional filter for campaigns. Will be combined with the required channel filter. Example: 'equals(status,"draft")'
   */
  filter?: string;
  /**
   * Include Archived
   * @description Whether to include archived campaigns in the results
   * @default false
   */
  include_archived: boolean;
  /**
   * Page Cursor
   * @description Cursor for pagination to get the next page of results
   */
  page_cursor?: string;
  /**
   * Sort
   * @description Sort campaigns by field (add '-' prefix for descending order)
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "name" | "-name" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGNS tool output.
 */
type KLAVIYO_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaign objects from Klaviyo
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
   * Links
   * @description Pagination links for navigating through results
   */
  links?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES tool input.
 */
type KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES_INPUT = {
  /**
   * Fields  Campaign
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign?: string[];
  /**
   * Fields  Campaign  Message
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign__message?: string[];
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES tool output.
 */
type KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE tool input.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_INPUT = {
  /**
   * Fields  Campaign
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign?: string[];
  /**
   * Fields  Campaign  Message
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign__message?: string[];
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /**
   * Id
   * @description The message ID to be retrieved
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE tool output.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN tool input.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN_INPUT = {
  /**
   * Fields  Campaign
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN tool output.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN tool input.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN tool output.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE tool input.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE tool output.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE tool input.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE_INPUT = {
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE tool output.
 */
type KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION tool input.
 */
type KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_INPUT = {
  /**
   * Fields  Campaign  Recipient  Estimation
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign__recipient__estimation?: string[];
  /**
   * Id
   * @description The ID of the campaign for which to get the estimated number of recipients
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION tool output.
 */
type KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB tool input.
 */
type KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_INPUT = {
  /**
   * Fields  Campaign  Recipient  Estimation  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign__recipient__estimation__job?: string[];
  /**
   * Id
   * @description The ID of the campaign to get recipient estimation status
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB tool output.
 */
type KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES tool input.
 */
type KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES tool output.
 */
type KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS tool input.
 */
type KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS tool output.
 */
type KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_SEND_JOB tool input.
 */
type KLAVIYO_GET_CAMPAIGN_SEND_JOB_INPUT = {
  /**
   * Fields  Campaign  Send  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__campaign__send__job?: string[];
  /**
   * Id
   * @description The ID of the campaign to send
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_SEND_JOB tool output.
 */
type KLAVIYO_GET_CAMPAIGN_SEND_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_TAGS tool input.
 */
type KLAVIYO_GET_CAMPAIGN_TAGS_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CAMPAIGN_TAGS tool output.
 */
type KLAVIYO_GET_CAMPAIGN_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORIES tool input.
 */
type KLAVIYO_GET_CATALOG_CATEGORIES_INPUT = {
  /**
   * Fields  Catalog  Category
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`ids`: `any`<br>`item.id`: `equals`<br>`name`: `contains`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORIES tool output.
 */
type KLAVIYO_GET_CATALOG_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORY tool input.
 */
type KLAVIYO_GET_CATALOG_CATEGORY_INPUT = {
  /**
   * Fields  Catalog  Category
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category?: string[];
  /**
   * Id
   * @description The catalog category ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORY tool output.
 */
type KLAVIYO_GET_CATALOG_CATEGORY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORY_ITEMS tool input.
 */
type KLAVIYO_GET_CATALOG_CATEGORY_ITEMS_INPUT = {
  /**
   * Fields  Catalog  Item
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item?: string[];
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`ids`: `any`<br>`category.id`: `equals`<br>`title`: `contains`<br>`published`: `equals`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORY_ITEMS tool output.
 */
type KLAVIYO_GET_CATALOG_CATEGORY_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool input.
 */
type KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT = {
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool output.
 */
type KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM tool input.
 */
type KLAVIYO_GET_CATALOG_ITEM_INPUT = {
  /**
   * Fields  Catalog  Item
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item?: string[];
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Id
   * @description The catalog item ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM tool output.
 */
type KLAVIYO_GET_CATALOG_ITEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEMS tool input.
 */
type KLAVIYO_GET_CATALOG_ITEMS_INPUT = {
  /**
   * Fields  Catalog  Item
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item?: string[];
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`ids`: `any`<br>`category.id`: `equals`<br>`title`: `contains`<br>`published`: `equals`
   */
  filter?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEMS tool output.
 */
type KLAVIYO_GET_CATALOG_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM_CATEGORIES tool input.
 */
type KLAVIYO_GET_CATALOG_ITEM_CATEGORIES_INPUT = {
  /**
   * Fields  Catalog  Category
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`ids`: `any`<br>`item.id`: `equals`<br>`name`: `contains`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM_CATEGORIES tool output.
 */
type KLAVIYO_GET_CATALOG_ITEM_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool input.
 */
type KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT = {
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool output.
 */
type KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM_VARIANTS tool input.
 */
type KLAVIYO_GET_CATALOG_ITEM_VARIANTS_INPUT = {
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`ids`: `any`<br>`item.id`: `equals`<br>`sku`: `equals`<br>`title`: `contains`<br>`published`: `equals`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_ITEM_VARIANTS tool output.
 */
type KLAVIYO_GET_CATALOG_ITEM_VARIANTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_VARIANT tool input.
 */
type KLAVIYO_GET_CATALOG_VARIANT_INPUT = {
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Id
   * @description The catalog variant ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_VARIANT tool output.
 */
type KLAVIYO_GET_CATALOG_VARIANT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_VARIANTS tool input.
 */
type KLAVIYO_GET_CATALOG_VARIANTS_INPUT = {
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`ids`: `any`<br>`item.id`: `equals`<br>`sku`: `equals`<br>`title`: `contains`<br>`published`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CATALOG_VARIANTS tool output.
 */
type KLAVIYO_GET_CATALOG_VARIANTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON tool input.
 */
type KLAVIYO_GET_COUPON_INPUT = {
  /**
   * Fields  Coupon
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon?: string[];
  /**
   * Id
   * @description The internal id of a Coupon is equivalent to its external id stored within an integration.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON tool output.
 */
type KLAVIYO_GET_COUPON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPONS tool input.
 */
type KLAVIYO_GET_COUPONS_INPUT = {
  /**
   * Fields  Coupon
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPONS tool output.
 */
type KLAVIYO_GET_COUPONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE tool input.
 */
type KLAVIYO_GET_COUPON_CODE_INPUT = {
  /**
   * Fields  Coupon
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon?: string[];
  /**
   * Fields  Coupon  Code
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon__code?: string[];
  /**
   * Id
   * @description The id of a coupon code is a combination of its unique code and the id of the coupon it is associated with.
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE tool output.
 */
type KLAVIYO_GET_COUPON_CODE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODES tool input.
 */
type KLAVIYO_GET_COUPON_CODES_INPUT = {
  /**
   * Fields  Coupon
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon?: string[];
  /**
   * Fields  Coupon  Code
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon__code?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`expires_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`status`: `equals`<br>`coupon.id`: `any`, `equals`<br>`profile.id`: `any`, `equals`
   */
  filter?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODES tool output.
 */
type KLAVIYO_GET_COUPON_CODES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODES_FOR_COUPON tool input.
 */
type KLAVIYO_GET_COUPON_CODES_FOR_COUPON_INPUT = {
  /**
   * Fields  Coupon  Code
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon__code?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`expires_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`status`: `equals`<br>`coupon.id`: `any`, `equals`<br>`profile.id`: `any`, `equals`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODES_FOR_COUPON tool output.
 */
type KLAVIYO_GET_COUPON_CODES_FOR_COUPON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB tool input.
 */
type KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB_INPUT = {
  /**
   * Fields  Coupon  Code
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon__code?: string[];
  /**
   * Fields  Coupon  Code  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon__code__bulk__create__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB tool output.
 */
type KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS tool input.
 */
type KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS_INPUT = {
  /**
   * Fields  Coupon  Code  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon__code__bulk__create__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS tool output.
 */
type KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON tool input.
 */
type KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON_INPUT = {
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON tool output.
 */
type KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_FOR_COUPON_CODE tool input.
 */
type KLAVIYO_GET_COUPON_FOR_COUPON_CODE_INPUT = {
  /**
   * Fields  Coupon
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__coupon?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_FOR_COUPON_CODE tool output.
 */
type KLAVIYO_GET_COUPON_FOR_COUPON_CODE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES tool input.
 */
type KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES tool output.
 */
type KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_CATEGORIES_JOB tool input.
 */
type KLAVIYO_GET_CREATE_CATEGORIES_JOB_INPUT = {
  /**
   * Fields  Catalog  Category
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category?: string[];
  /**
   * Fields  Catalog  Category  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category__bulk__create__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_CATEGORIES_JOB tool output.
 */
type KLAVIYO_GET_CREATE_CATEGORIES_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_CATEGORIES_JOBS tool input.
 */
type KLAVIYO_GET_CREATE_CATEGORIES_JOBS_INPUT = {
  /**
   * Fields  Catalog  Category  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category__bulk__create__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_CATEGORIES_JOBS tool output.
 */
type KLAVIYO_GET_CREATE_CATEGORIES_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_ITEMS_JOB tool input.
 */
type KLAVIYO_GET_CREATE_ITEMS_JOB_INPUT = {
  /**
   * Fields  Catalog  Item
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item?: string[];
  /**
   * Fields  Catalog  Item  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item__bulk__create__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_ITEMS_JOB tool output.
 */
type KLAVIYO_GET_CREATE_ITEMS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_ITEMS_JOBS tool input.
 */
type KLAVIYO_GET_CREATE_ITEMS_JOBS_INPUT = {
  /**
   * Fields  Catalog  Item  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item__bulk__create__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_ITEMS_JOBS tool output.
 */
type KLAVIYO_GET_CREATE_ITEMS_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_VARIANTS_JOB tool input.
 */
type KLAVIYO_GET_CREATE_VARIANTS_JOB_INPUT = {
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Fields  Catalog  Variant  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant__bulk__create__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_VARIANTS_JOB tool output.
 */
type KLAVIYO_GET_CREATE_VARIANTS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_VARIANTS_JOBS tool input.
 */
type KLAVIYO_GET_CREATE_VARIANTS_JOBS_INPUT = {
  /**
   * Fields  Catalog  Variant  Bulk  Create  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant__bulk__create__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_CREATE_VARIANTS_JOBS tool output.
 */
type KLAVIYO_GET_CREATE_VARIANTS_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_CATEGORIES_JOB tool input.
 */
type KLAVIYO_GET_DELETE_CATEGORIES_JOB_INPUT = {
  /**
   * Fields  Catalog  Category  Bulk  Delete  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category__bulk__delete__job?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_CATEGORIES_JOB tool output.
 */
type KLAVIYO_GET_DELETE_CATEGORIES_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_CATEGORIES_JOBS tool input.
 */
type KLAVIYO_GET_DELETE_CATEGORIES_JOBS_INPUT = {
  /**
   * Fields  Catalog  Category  Bulk  Delete  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category__bulk__delete__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_CATEGORIES_JOBS tool output.
 */
type KLAVIYO_GET_DELETE_CATEGORIES_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_ITEMS_JOB tool input.
 */
type KLAVIYO_GET_DELETE_ITEMS_JOB_INPUT = {
  /**
   * Fields  Catalog  Item  Bulk  Delete  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item__bulk__delete__job?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_ITEMS_JOB tool output.
 */
type KLAVIYO_GET_DELETE_ITEMS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_ITEMS_JOBS tool input.
 */
type KLAVIYO_GET_DELETE_ITEMS_JOBS_INPUT = {
  /**
   * Fields  Catalog  Item  Bulk  Delete  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item__bulk__delete__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_ITEMS_JOBS tool output.
 */
type KLAVIYO_GET_DELETE_ITEMS_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_VARIANTS_JOB tool input.
 */
type KLAVIYO_GET_DELETE_VARIANTS_JOB_INPUT = {
  /**
   * Fields  Catalog  Variant  Bulk  Delete  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant__bulk__delete__job?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_VARIANTS_JOB tool output.
 */
type KLAVIYO_GET_DELETE_VARIANTS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_VARIANTS_JOBS tool input.
 */
type KLAVIYO_GET_DELETE_VARIANTS_JOBS_INPUT = {
  /**
   * Fields  Catalog  Variant  Bulk  Delete  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant__bulk__delete__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_DELETE_VARIANTS_JOBS tool output.
 */
type KLAVIYO_GET_DELETE_VARIANTS_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT tool input.
 */
type KLAVIYO_GET_EVENT_INPUT = {
  /**
   * Fields  Event
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__event?: string[];
  /**
   * Fields  Metric
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__metric?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /**
   * Id
   * @description ID of the event
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT tool output.
 */
type KLAVIYO_GET_EVENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENTS tool input.
 */
type KLAVIYO_GET_EVENTS_INPUT = {
  /**
   * Fields  Event
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__event?: string[];
  /**
   * Fields  Metric
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__metric?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`metric_id`: `equals`<br>`profile_id`: `equals`<br>`profile`: `has`<br>`datetime`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`timestamp`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "datetime" | "-datetime" | "timestamp" | "-timestamp";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENTS tool output.
 */
type KLAVIYO_GET_EVENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_METRIC tool input.
 */
type KLAVIYO_GET_EVENT_METRIC_INPUT = {
  /**
   * Fields  Metric
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__metric?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_METRIC tool output.
 */
type KLAVIYO_GET_EVENT_METRIC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_PROFILE tool input.
 */
type KLAVIYO_GET_EVENT_PROFILE_INPUT = {
  /**
   * Additional  Fields  Profile
   * @description Request additional fields not included by default in the response. Supported values: "subscriptions", "predictive_analytics"
   */
  additional__fields__profile?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_PROFILE tool output.
 */
type KLAVIYO_GET_EVENT_PROFILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC tool input.
 */
type KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC tool output.
 */
type KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE tool input.
 */
type KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE tool output.
 */
type KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW tool input.
 */
type KLAVIYO_GET_FLOW_INPUT = {
  /**
   * Fields  Flow
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow?: string[];
  /**
   * Fields  Flow  Action
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__action?: string[];
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW tool output.
 */
type KLAVIYO_GET_FLOW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOWS tool input.
 */
type KLAVIYO_GET_FLOWS_INPUT = {
  /**
   * Fields  Flow
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow?: string[];
  /**
   * Fields  Flow  Action
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__action?: string[];
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`id`: `any`<br>`name`: `contains`, `ends-with`, `equals`, `starts-with`<br>`status`: `equals`<br>`archived`: `equals`<br>`created`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`updated`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`trigger_type`: `equals`
   */
  filter?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 50. Min: 1. Max: 50.
   * @default 50
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "name" | "-name" | "status" | "-status" | "trigger_type" | "-trigger_type" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOWS tool output.
 */
type KLAVIYO_GET_FLOWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION tool input.
 */
type KLAVIYO_GET_FLOW_ACTION_INPUT = {
  /**
   * Fields  Flow
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow?: string[];
  /**
   * Fields  Flow  Action
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__action?: string[];
  /**
   * Fields  Flow  Message
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__message?: string[];
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION tool output.
 */
type KLAVIYO_GET_FLOW_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE tool input.
 */
type KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE_INPUT = {
  /**
   * Fields  Flow  Action
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__action?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE tool output.
 */
type KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_MESSAGES tool input.
 */
type KLAVIYO_GET_FLOW_ACTION_MESSAGES_INPUT = {
  /**
   * Fields  Flow  Message
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__message?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`id`: `any`<br>`name`: `contains`, `ends-with`, `equals`, `starts-with`<br>`created`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`updated`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Size
   * @description Default: 50. Min: 1. Max: 100.
   * @default 50
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "name" | "-name" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_MESSAGES tool output.
 */
type KLAVIYO_GET_FLOW_ACTION_MESSAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW tool input.
 */
type KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW tool output.
 */
type KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES tool input.
 */
type KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES_INPUT = {
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`name`: `contains`, `ends-with`, `equals`, `starts-with`<br>`created`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`updated`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 50. Min: 1. Max: 50.
   * @default 50
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "name" | "-name" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES tool output.
 */
type KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_FLOW_ACTIONS tool input.
 */
type KLAVIYO_GET_FLOW_FLOW_ACTIONS_INPUT = {
  /**
   * Fields  Flow  Action
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__action?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`id`: `any`<br>`action_type`: `any`, `equals`<br>`status`: `equals`<br>`created`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`updated`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 50. Min: 1. Max: 50.
   * @default 50
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "action_type" | "-action_type" | "created" | "-created" | "id" | "-id" | "status" | "-status" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_FLOW_ACTIONS tool output.
 */
type KLAVIYO_GET_FLOW_FLOW_ACTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_FOR_FLOW_ACTION tool input.
 */
type KLAVIYO_GET_FLOW_FOR_FLOW_ACTION_INPUT = {
  /**
   * Fields  Flow
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_FOR_FLOW_ACTION tool output.
 */
type KLAVIYO_GET_FLOW_FOR_FLOW_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE tool input.
 */
type KLAVIYO_GET_FLOW_MESSAGE_INPUT = {
  /**
   * Fields  Flow  Action
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__action?: string[];
  /**
   * Fields  Flow  Message
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__flow__message?: string[];
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE tool output.
 */
type KLAVIYO_GET_FLOW_MESSAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION tool input.
 */
type KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION tool output.
 */
type KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE tool input.
 */
type KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE tool output.
 */
type KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE tool input.
 */
type KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE_INPUT = {
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE tool output.
 */
type KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS tool input.
 */
type KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS_INPUT = {
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`action_type`: `equals`<br>`status`: `equals`<br>`created`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`updated`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Size
   * @description Default: 50. Min: 1. Max: 100.
   * @default 50
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "status" | "-status" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS tool output.
 */
type KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS tool input.
 */
type KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS tool output.
 */
type KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_TAGS tool input.
 */
type KLAVIYO_GET_FLOW_TAGS_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FLOW_TAGS tool output.
 */
type KLAVIYO_GET_FLOW_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM tool input.
 */
type KLAVIYO_GET_FORM_INPUT = {
  /**
   * Fields  Form
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__form?: string[];
  /**
   * Fields  Form  Version
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__form__version?: string[];
  /**
   * Id
   * @description The ID of the form
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM tool output.
 */
type KLAVIYO_GET_FORM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORMS tool input.
 */
type KLAVIYO_GET_FORMS_INPUT = {
  /**
   * Fields  Form
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__form?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`id`: `any`, `equals`<br>`name`: `any`, `contains`, `equals`<br>`ab_test`: `equals`<br>`updated_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`created_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORMS tool output.
 */
type KLAVIYO_GET_FORMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM_FOR_FORM_VERSION tool input.
 */
type KLAVIYO_GET_FORM_FOR_FORM_VERSION_INPUT = {
  /**
   * Fields  Form
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__form?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM_FOR_FORM_VERSION tool output.
 */
type KLAVIYO_GET_FORM_FOR_FORM_VERSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION tool input.
 */
type KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION tool output.
 */
type KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM_VERSION tool input.
 */
type KLAVIYO_GET_FORM_VERSION_INPUT = {
  /**
   * Fields  Form  Version
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__form__version?: string[];
  /**
   * Id
   * @description The ID of the form version
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_FORM_VERSION tool output.
 */
type KLAVIYO_GET_FORM_VERSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_IMAGE tool input.
 */
type KLAVIYO_GET_IMAGE_INPUT = {
  /**
   * Fields  Image
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__image?: string[];
  /**
   * Id
   * @description The ID of the image
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_IMAGE tool output.
 */
type KLAVIYO_GET_IMAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_IMAGES tool input.
 */
type KLAVIYO_GET_IMAGES_INPUT = {
  /**
   * Fields  Image
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__image?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`id`: `any`, `equals`<br>`updated_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`format`: `any`, `equals`<br>`name`: `any`, `contains`, `ends-with`, `equals`, `starts-with`<br>`size`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`hidden`: `any`, `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "format" | "-format" | "id" | "-id" | "name" | "-name" | "size" | "-size" | "updated_at" | "-updated_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_IMAGES tool output.
 */
type KLAVIYO_GET_IMAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST tool input.
 */
type KLAVIYO_GET_LIST_INPUT = {
  /**
   * Additional  Fields  List
   * @description Request additional fields not included by default in the response. Supported values: "profile_count"
   */
  additional__fields__list?: string[];
  /**
   * Fields  List
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__list?: string[];
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /**
   * Id
   * @description Primary key that uniquely identifies this list. Generated by Klaviyo.
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST tool output.
 */
type KLAVIYO_GET_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LISTS tool input.
 */
type KLAVIYO_GET_LISTS_INPUT = {
  /**
   * Filter
   * @description Filter lists by name, creation date, etc. Example: 'equals(name,"Newsletter")'
   */
  filter?: string;
  /**
   * Include Tags
   * @description Whether to include tags associated with the lists
   * @default false
   */
  include_tags: boolean;
  /**
   * Page Cursor
   * @description Cursor for pagination to get the next page of results
   */
  page_cursor?: string;
  /**
   * Sort
   * @description Sort lists by field (add '-' prefix for descending order)
   * @default name
   * @enum {string}
   */
  sort: "created" | "-created" | "id" | "-id" | "name" | "-name" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LISTS tool output.
 */
type KLAVIYO_GET_LISTS_OUTPUT = {
  /**
   * Data
   * @description List of list objects from Klaviyo
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
   * Included
   * @description Included tag objects if requested
   */
  included?: {
      [key: string]: unknown;
  }[];
  /**
   * Links
   * @description Pagination links for navigating through results
   */
  links?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_PROFILES tool input.
 */
type KLAVIYO_GET_LIST_PROFILES_INPUT = {
  /**
   * Additional  Fields  Profile
   * @description Request additional fields not included by default in the response. Supported values: "subscriptions", "predictive_analytics"
   */
  additional__fields__profile?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`email`: `any`, `equals`<br>`phone_number`: `any`, `equals`<br>`push_token`: `any`, `equals`<br>`_kx`: `equals`<br>`joined_group_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "joined_group_at" | "-joined_group_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_PROFILES tool output.
 */
type KLAVIYO_GET_LIST_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES tool input.
 */
type KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES_INPUT = {
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`email`: `any`, `equals`<br>`phone_number`: `any`, `equals`<br>`push_token`: `any`, `equals`<br>`_kx`: `equals`<br>`joined_group_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 1000.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "joined_group_at" | "-joined_group_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES tool output.
 */
type KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS tool input.
 */
type KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS tool output.
 */
type KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_TAGS tool input.
 */
type KLAVIYO_GET_LIST_TAGS_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_LIST_TAGS tool output.
 */
type KLAVIYO_GET_LIST_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_METRIC tool input.
 */
type KLAVIYO_GET_METRIC_INPUT = {
  /**
   * Fields  Metric
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__metric?: string[];
  /**
   * Id
   * @description Metric ID
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_METRIC tool output.
 */
type KLAVIYO_GET_METRIC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_METRICS tool input.
 */
type KLAVIYO_GET_METRICS_INPUT = {
  /**
   * Fields  Metric
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__metric?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`integration.name`: `equals`<br>`integration.category`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_METRICS tool output.
 */
type KLAVIYO_GET_METRICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE tool input.
 */
type KLAVIYO_GET_PROFILE_INPUT = {
  /**
   * Additional  Fields  Profile
   * @description Request additional fields not included by default in the response. Supported values: "subscriptions", "predictive_analytics"
   */
  additional__fields__profile?: string[];
  /**
   * Fields  List
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__list?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /**
   * Fields  Segment
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__segment?: string[];
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE tool output.
 */
type KLAVIYO_GET_PROFILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILES tool input.
 */
type KLAVIYO_GET_PROFILES_INPUT = {
  /**
   * Filter
   * @description Filter profiles by email, external_id, created date, etc. Example: 'equals(email,"user@example.com")'
   */
  filter?: string;
  /**
   * Include Predictive Analytics
   * @description Whether to include predictive analytics data (note: this may reduce rate limits)
   * @default false
   */
  include_predictive_analytics: boolean;
  /**
   * Include Subscriptions
   * @description Whether to include subscription information in the response
   * @default false
   */
  include_subscriptions: boolean;
  /**
   * Page Cursor
   * @description Cursor for pagination to get the next page of results
   */
  page_cursor?: string;
  /**
   * Page Size
   * @description Number of profiles to return per page (1-100)
   * @default 20
   */
  page_size: number;
  /**
   * Sort
   * @description Sort profiles by field (add '-' prefix for descending order)
   * @default -created
   * @enum {string}
   */
  sort: "created" | "-created" | "email" | "-email" | "id" | "-id" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILES tool output.
 */
type KLAVIYO_GET_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of profile objects from Klaviyo
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
   * Links
   * @description Pagination links for navigating through results
   */
  links?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_LISTS tool input.
 */
type KLAVIYO_GET_PROFILE_LISTS_INPUT = {
  /**
   * Fields  List
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__list?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_LISTS tool output.
 */
type KLAVIYO_GET_PROFILE_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS tool input.
 */
type KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS tool output.
 */
type KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS tool input.
 */
type KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS tool output.
 */
type KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_SEGMENTS tool input.
 */
type KLAVIYO_GET_PROFILE_SEGMENTS_INPUT = {
  /**
   * Fields  Segment
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__segment?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_PROFILE_SEGMENTS tool output.
 */
type KLAVIYO_GET_PROFILE_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT tool input.
 */
type KLAVIYO_GET_SEGMENT_INPUT = {
  /**
   * Additional  Fields  Segment
   * @description Request additional fields not included by default in the response. Supported values: "profile_count"
   */
  additional__fields__segment?: string[];
  /**
   * Fields  Segment
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__segment?: string[];
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT tool output.
 */
type KLAVIYO_GET_SEGMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENTS tool input.
 */
type KLAVIYO_GET_SEGMENTS_INPUT = {
  /**
   * Fields  Segment
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__segment?: string[];
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`name`: `any`, `equals`<br>`id`: `any`, `equals`<br>`created`: `greater-than`<br>`updated`: `greater-than`<br>`is_active`: `any`, `equals`<br>`is_starred`: `equals`
   */
  filter?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "name" | "-name" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENTS tool output.
 */
type KLAVIYO_GET_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_PROFILES tool input.
 */
type KLAVIYO_GET_SEGMENT_PROFILES_INPUT = {
  /**
   * Additional  Fields  Profile
   * @description Request additional fields not included by default in the response. Supported values: "subscriptions", "predictive_analytics"
   */
  additional__fields__profile?: string[];
  /**
   * Fields  Profile
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__profile?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`email`: `any`, `equals`<br>`phone_number`: `any`, `equals`<br>`push_token`: `any`, `equals`<br>`_kx`: `equals`<br>`joined_group_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "joined_group_at" | "-joined_group_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_PROFILES tool output.
 */
type KLAVIYO_GET_SEGMENT_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES tool input.
 */
type KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES_INPUT = {
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`email`: `any`, `equals`<br>`phone_number`: `any`, `equals`<br>`push_token`: `any`, `equals`<br>`_kx`: `equals`<br>`joined_group_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 1000.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "joined_group_at" | "-joined_group_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES tool output.
 */
type KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS tool input.
 */
type KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS tool output.
 */
type KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_TAGS tool input.
 */
type KLAVIYO_GET_SEGMENT_TAGS_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_SEGMENT_TAGS tool output.
 */
type KLAVIYO_GET_SEGMENT_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG tool input.
 */
type KLAVIYO_GET_TAG_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /**
   * Fields  Tag  Group
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag__group?: string[];
  /**
   * Id
   * @description The Tag ID
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG tool output.
 */
type KLAVIYO_GET_TAG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAGS tool input.
 */
type KLAVIYO_GET_TAGS_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /**
   * Fields  Tag  Group
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag__group?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`name`: `contains`, `ends-with`, `equals`, `starts-with`
   */
  filter?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "id" | "-id" | "name" | "-name";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAGS tool output.
 */
type KLAVIYO_GET_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUP tool input.
 */
type KLAVIYO_GET_TAG_GROUP_INPUT = {
  /**
   * Fields  Tag  Group
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag__group?: string[];
  /**
   * Id
   * @description The Tag Group ID
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUP tool output.
 */
type KLAVIYO_GET_TAG_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUPS tool input.
 */
type KLAVIYO_GET_TAG_GROUPS_INPUT = {
  /**
   * Fields  Tag  Group
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag__group?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`name`: `contains`, `ends-with`, `equals`, `starts-with`<br>`exclusive`: `equals`<br>`default`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "id" | "-id" | "name" | "-name";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUPS tool output.
 */
type KLAVIYO_GET_TAG_GROUPS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS tool input.
 */
type KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS tool output.
 */
type KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUP_TAGS tool input.
 */
type KLAVIYO_GET_TAG_GROUP_TAGS_INPUT = {
  /**
   * Fields  Tag
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_GROUP_TAGS tool output.
 */
type KLAVIYO_GET_TAG_GROUP_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS tool input.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS tool output.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS tool input.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS tool output.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS tool input.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS tool output.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS tool input.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS tool output.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP tool input.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP tool output.
 */
type KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_TAG_GROUP tool input.
 */
type KLAVIYO_GET_TAG_TAG_GROUP_INPUT = {
  /**
   * Fields  Tag  Group
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__tag__group?: string[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TAG_TAG_GROUP tool output.
 */
type KLAVIYO_GET_TAG_TAG_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TEMPLATE tool input.
 */
type KLAVIYO_GET_TEMPLATE_INPUT = {
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /**
   * Id
   * @description The ID of template
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TEMPLATE tool output.
 */
type KLAVIYO_GET_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TEMPLATES tool input.
 */
type KLAVIYO_GET_TEMPLATES_INPUT = {
  /**
   * Fields  Template
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__template?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`id`: `any`, `equals`<br>`name`: `any`, `equals`<br>`created`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`updated`: `equals`, `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created" | "-created" | "id" | "-id" | "name" | "-name" | "updated" | "-updated";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_TEMPLATES tool output.
 */
type KLAVIYO_GET_TEMPLATES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_CATEGORIES_JOB tool input.
 */
type KLAVIYO_GET_UPDATE_CATEGORIES_JOB_INPUT = {
  /**
   * Fields  Catalog  Category
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category?: string[];
  /**
   * Fields  Catalog  Category  Bulk  Update  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category__bulk__update__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_CATEGORIES_JOB tool output.
 */
type KLAVIYO_GET_UPDATE_CATEGORIES_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_CATEGORIES_JOBS tool input.
 */
type KLAVIYO_GET_UPDATE_CATEGORIES_JOBS_INPUT = {
  /**
   * Fields  Catalog  Category  Bulk  Update  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__category__bulk__update__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_CATEGORIES_JOBS tool output.
 */
type KLAVIYO_GET_UPDATE_CATEGORIES_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_ITEMS_JOB tool input.
 */
type KLAVIYO_GET_UPDATE_ITEMS_JOB_INPUT = {
  /**
   * Fields  Catalog  Item
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item?: string[];
  /**
   * Fields  Catalog  Item  Bulk  Update  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item__bulk__update__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_ITEMS_JOB tool output.
 */
type KLAVIYO_GET_UPDATE_ITEMS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_ITEMS_JOBS tool input.
 */
type KLAVIYO_GET_UPDATE_ITEMS_JOBS_INPUT = {
  /**
   * Fields  Catalog  Item  Bulk  Update  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__item__bulk__update__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_ITEMS_JOBS tool output.
 */
type KLAVIYO_GET_UPDATE_ITEMS_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_VARIANTS_JOB tool input.
 */
type KLAVIYO_GET_UPDATE_VARIANTS_JOB_INPUT = {
  /**
   * Fields  Catalog  Variant
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant?: string[];
  /**
   * Fields  Catalog  Variant  Bulk  Update  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant__bulk__update__job?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
  /**
   * Job Id
   * @description ID of the job to retrieve.
   */
  job_id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_VARIANTS_JOB tool output.
 */
type KLAVIYO_GET_UPDATE_VARIANTS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_VARIANTS_JOBS tool input.
 */
type KLAVIYO_GET_UPDATE_VARIANTS_JOBS_INPUT = {
  /**
   * Fields  Catalog  Variant  Bulk  Update  Job
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__catalog__variant__bulk__update__job?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`status`: `equals`
   */
  filter?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_UPDATE_VARIANTS_JOBS tool output.
 */
type KLAVIYO_GET_UPDATE_VARIANTS_JOBS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_VERSIONS_FOR_FORM tool input.
 */
type KLAVIYO_GET_VERSIONS_FOR_FORM_INPUT = {
  /**
   * Fields  Form  Version
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__form__version?: string[];
  /**
   * Filter
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#filtering<br>Allowed field(s)/operator(s):<br>`form_type`: `any`, `equals`<br>`status`: `equals`<br>`updated_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`<br>`created_at`: `greater-or-equal`, `greater-than`, `less-or-equal`, `less-than`
   */
  filter?: string;
  /** Id */
  id?: string;
  /**
   * Page  Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page__cursor?: string;
  /**
   * Page  Size
   * @description Default: 20. Min: 1. Max: 100.
   * @default 20
   */
  page__size: number;
  /**
   * Sort
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sorting
   * @enum {string}
   */
  sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at";
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_VERSIONS_FOR_FORM tool output.
 */
type KLAVIYO_GET_VERSIONS_FOR_FORM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_VERSION_IDS_FOR_FORM tool input.
 */
type KLAVIYO_GET_VERSION_IDS_FOR_FORM_INPUT = {
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_VERSION_IDS_FOR_FORM tool output.
 */
type KLAVIYO_GET_VERSION_IDS_FOR_FORM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOK tool input.
 */
type KLAVIYO_GET_WEBHOOK_INPUT = {
  /**
   * Fields  Webhook
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__webhook?: string[];
  /**
   * Id
   * @description The ID of the webhook.
   */
  id?: string;
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOK tool output.
 */
type KLAVIYO_GET_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOKS tool input.
 */
type KLAVIYO_GET_WEBHOOKS_INPUT = {
  /**
   * Fields  Webhook
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#sparse-fieldsets
   */
  fields__webhook?: string[];
  /**
   * Include
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#relationships
   */
  include?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOKS tool output.
 */
type KLAVIYO_GET_WEBHOOKS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOK_TOPIC tool input.
 */
type KLAVIYO_GET_WEBHOOK_TOPIC_INPUT = {
  /**
   * Id
   * @description The ID of the webhook topic.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOK_TOPIC tool output.
 */
type KLAVIYO_GET_WEBHOOK_TOPIC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOK_TOPICS tool input.
 */
type KLAVIYO_GET_WEBHOOK_TOPICS_INPUT = object;

/**
 * Type of KLAVIYO's KLAVIYO_GET_WEBHOOK_TOPICS tool output.
 */
type KLAVIYO_GET_WEBHOOK_TOPICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_MERGE_PROFILES tool input.
 */
type KLAVIYO_MERGE_PROFILES_INPUT = {
  /**
   * Data  Id
   * @description The ID of the destination profile to merge into
   */
  data__id?: string;
  /**
   * Data  Relationships  Profiles  Data
   * @description Data
   */
  data__relationships__profiles__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile-merge";
};

/**
 * Type of KLAVIYO's KLAVIYO_MERGE_PROFILES tool output.
 */
type KLAVIYO_MERGE_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_CAMPAIGN_VALUES tool input.
 */
type KLAVIYO_QUERY_CAMPAIGN_VALUES_INPUT = {
  /**
   * Data  Attributes  Conversion  Metric  Id
   * @description ID of the metric to be used for conversion statistics
   */
  data__attributes__conversion__metric__id?: string;
  /**
   * Data  Attributes  Filter
   * @description API filter string used to filter the query. Allowed filters are send_channel, campaign_id. Allowed operators are equals, contains-any. Only one filter can be used per attribute, only AND can be used as a combination operator. Max of 100 messages per ANY filter. When filtering on send_channel, allowed values are email, push-notification, sms.
   */
  data__attributes__filter?: string;
  /**
   * Data  Attributes  Statistics
   * @description List of statistics to query for. All rate statistics will be returned in fractional form [0.0, 1.0]
   */
  data__attributes__statistics?: string[];
  /**
   * Data  Attributes  Timeframe
   * @description The timeframe to query for data within. The max length a timeframe can be is 1 year
   */
  data__attributes__timeframe?: {
      [key: string]: unknown;
  };
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign-values-report";
  /**
   * Page Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page_cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_CAMPAIGN_VALUES tool output.
 */
type KLAVIYO_QUERY_CAMPAIGN_VALUES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_FLOW_SERIES tool input.
 */
type KLAVIYO_QUERY_FLOW_SERIES_INPUT = {
  /**
   * Data  Attributes  Conversion  Metric  Id
   * @description ID of the metric to be used for conversion statistics
   */
  data__attributes__conversion__metric__id?: string;
  /**
   * Data  Attributes  Filter
   * @description API filter string used to filter the query. Allowed filters are flow_id, send_channel, flow_message_id. Allowed operators are equals, contains-any. Only one filter can be used per attribute, only AND can be used as a combination operator. Max of 100 messages per ANY filter. When filtering on send_channel, allowed values are email, push-notification, sms.
   */
  data__attributes__filter?: string;
  /**
   * Data  Attributes  Interval
   * @description The interval used to aggregate data within the series request. If hourly is used, the timeframe cannot be longer than 7 days. If daily is used, the timeframe cannot be longer than 60 days. If monthly is used, the timeframe cannot be longer than 52 weeks.
   * @enum {string}
   */
  data__attributes__interval?: "daily" | "hourly" | "monthly" | "weekly";
  /**
   * Data  Attributes  Statistics
   * @description List of statistics to query for. All rate statistics will be returned in fractional form [0.0, 1.0]
   */
  data__attributes__statistics?: string[];
  /**
   * Data  Attributes  Timeframe
   * @description The timeframe to query for data within. The max length a timeframe can be is 1 year
   */
  data__attributes__timeframe?: {
      [key: string]: unknown;
  };
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "flow-series-report";
  /**
   * Page Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page_cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_FLOW_SERIES tool output.
 */
type KLAVIYO_QUERY_FLOW_SERIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_FLOW_VALUES tool input.
 */
type KLAVIYO_QUERY_FLOW_VALUES_INPUT = {
  /**
   * Data  Attributes  Conversion  Metric  Id
   * @description ID of the metric to be used for conversion statistics
   */
  data__attributes__conversion__metric__id?: string;
  /**
   * Data  Attributes  Filter
   * @description API filter string used to filter the query. Allowed filters are flow_id, send_channel, flow_message_id. Allowed operators are equals, contains-any. Only one filter can be used per attribute, only AND can be used as a combination operator. Max of 100 messages per ANY filter. When filtering on send_channel, allowed values are email, push-notification, sms.
   */
  data__attributes__filter?: string;
  /**
   * Data  Attributes  Statistics
   * @description List of statistics to query for. All rate statistics will be returned in fractional form [0.0, 1.0]
   */
  data__attributes__statistics?: string[];
  /**
   * Data  Attributes  Timeframe
   * @description The timeframe to query for data within. The max length a timeframe can be is 1 year
   */
  data__attributes__timeframe?: {
      [key: string]: unknown;
  };
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "flow-values-report";
  /**
   * Page Cursor
   * @description For more information please visit https://developers.klaviyo.com/en/v2024-07-15/reference/api-overview#pagination
   */
  page_cursor?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_FLOW_VALUES tool output.
 */
type KLAVIYO_QUERY_FLOW_VALUES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_METRIC_AGGREGATES tool input.
 */
type KLAVIYO_QUERY_METRIC_AGGREGATES_INPUT = {
  /**
   * Data  Attributes  By
   * @description Optional attribute(s) used for partitioning by the aggregation function
   */
  data__attributes__by?: string[];
  /**
   * Data  Attributes  Filter
   * @description List of filters, must include time range using ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).             These filters follow a similar format to those in `GET` requests, the primary difference is that this endpoint asks for a list.             The time range can be filtered by providing a `greater-or-equal` and a `less-than` filter on the `datetime` field.
   */
  data__attributes__filter?: string[];
  /**
   * Data  Attributes  Interval
   * @description Aggregation interval, e.g. "hour", "day", "week", "month"
   * @default day
   * @enum {string}
   */
  data__attributes__interval: "day" | "hour" | "month" | "week";
  /**
   * Data  Attributes  Measurements
   * @description Measurement key, e.g. `unique`, `sum_value`, `count`
   */
  data__attributes__measurements?: string[];
  /**
   * Data  Attributes  Metric  Id
   * @description The metric ID used in the aggregation.
   */
  data__attributes__metric__id?: string;
  /**
   * Data  Attributes  Page  Cursor
   * @description Optional pagination cursor to iterate over large result sets
   */
  data__attributes__page__cursor?: string;
  /**
   * Data  Attributes  Page  Size
   * @description Alter the maximum number of returned rows in a single page of aggregation results
   * @default 500
   */
  data__attributes__page__size: number;
  /**
   * Data  Attributes  Return  Fields
   * @description Provide fields to limit the returned data
   */
  data__attributes__return__fields?: string[];
  /**
   * Data  Attributes  Sort
   * @description Provide a sort key (e.g. -$message)
   * @enum {string}
   */
  data__attributes__sort?: "$attributed_channel" | "-$attributed_channel" | "$attributed_flow" | "-$attributed_flow" | "$attributed_message" | "-$attributed_message" | "$attributed_variation" | "-$attributed_variation" | "$campaign_channel" | "-$campaign_channel" | "$flow" | "-$flow" | "$flow_channel" | "-$flow_channel" | "$message" | "-$message" | "$message_send_cohort" | "-$message_send_cohort" | "$variation" | "-$variation" | "$variation_send_cohort" | "-$variation_send_cohort" | "Bot Click" | "-Bot Click" | "Bounce Type" | "-Bounce Type" | "Campaign Name" | "-Campaign Name" | "Client Canonical" | "-Client Canonical" | "Client Name" | "-Client Name" | "Client Type" | "-Client Type" | "Email Domain" | "-Email Domain" | "Failure Source" | "-Failure Source" | "Failure Type" | "-Failure Type" | "From Number" | "-From Number" | "From Phone Region" | "-From Phone Region" | "Inbox Provider" | "-Inbox Provider" | "List" | "-List" | "Message Name" | "-Message Name" | "Message Type" | "-Message Type" | "Method" | "-Method" | "Subject" | "-Subject" | "To Number" | "-To Number" | "To Phone Region" | "-To Phone Region" | "URL" | "-URL" | "count" | "-count" | "form_id" | "-form_id" | "sum_value" | "-sum_value" | "unique" | "-unique";
  /**
   * Data  Attributes  Timezone
   * @description The timezone used for processing the query, e.g. `"America/New_York"`.             This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones).             While most are supported, a few notable exceptions are `Factory`, `Europe/Kyiv` and `Pacific/Kanton`. This field is case-sensitive.
   * @default UTC
   */
  data__attributes__timezone: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "metric-aggregate";
};

/**
 * Type of KLAVIYO's KLAVIYO_QUERY_METRIC_AGGREGATES tool output.
 */
type KLAVIYO_QUERY_METRIC_AGGREGATES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_REMOVE_PROFILE_FROM_LIST tool input.
 */
type KLAVIYO_REMOVE_PROFILE_FROM_LIST_INPUT = {
  /**
   * Emails
   * @description List of email addresses to remove from the list (alternative to profile_ids)
   */
  emails?: string[];
  /**
   * List Id
   * @description The ID of the list to remove profiles from
   */
  list_id?: string;
  /**
   * Profile Ids
   * @description List of profile IDs to remove from the list (max 1000 per call)
   */
  profile_ids?: string[];
};

/**
 * Type of KLAVIYO's KLAVIYO_REMOVE_PROFILE_FROM_LIST tool output.
 */
type KLAVIYO_REMOVE_PROFILE_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating profiles were removed from the list
       */
      message: string;
      /**
       * Removed Count
       * @description Number of profiles that were successfully removed
       * @default 0
       */
      removed_count: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_REQUEST_PROFILE_DELETION tool input.
 */
type KLAVIYO_REQUEST_PROFILE_DELETION_INPUT = {
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "data-privacy-deletion-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_REQUEST_PROFILE_DELETION tool output.
 */
type KLAVIYO_REQUEST_PROFILE_DELETION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB tool input.
 */
type KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB_INPUT = {
  /**
   * Data  Attributes  Profiles  Data
   * @description Data
   */
  data__attributes__profiles__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Relationships  Lists  Data
   * @description Data
   */
  data__relationships__lists__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile-bulk-import-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB tool output.
 */
type KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB tool input.
 */
type KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB_INPUT = {
  /**
   * Data  Attributes  Coupon  Codes  Data
   * @description Data
   */
  data__attributes__coupon__codes__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "coupon-code-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB tool output.
 */
type KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB tool input.
 */
type KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB_INPUT = {
  /**
   * Data  Attributes  Categories  Data
   * @description Data
   */
  data__attributes__categories__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-category-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB tool output.
 */
type KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_CREATE_ITEMS_JOB tool input.
 */
type KLAVIYO_SPAWN_CREATE_ITEMS_JOB_INPUT = {
  /**
   * Data  Attributes  Items  Data
   * @description Data
   */
  data__attributes__items__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-item-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_CREATE_ITEMS_JOB tool output.
 */
type KLAVIYO_SPAWN_CREATE_ITEMS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_CREATE_VARIANTS_JOB tool input.
 */
type KLAVIYO_SPAWN_CREATE_VARIANTS_JOB_INPUT = {
  /**
   * Data  Attributes  Variants  Data
   * @description Data
   */
  data__attributes__variants__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-variant-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_CREATE_VARIANTS_JOB tool output.
 */
type KLAVIYO_SPAWN_CREATE_VARIANTS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB tool input.
 */
type KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB_INPUT = {
  /**
   * Data  Attributes  Categories  Data
   * @description Data
   */
  data__attributes__categories__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-category-bulk-delete-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB tool output.
 */
type KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_DELETE_ITEMS_JOB tool input.
 */
type KLAVIYO_SPAWN_DELETE_ITEMS_JOB_INPUT = {
  /**
   * Data  Attributes  Items  Data
   * @description Data
   */
  data__attributes__items__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-item-bulk-delete-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_DELETE_ITEMS_JOB tool output.
 */
type KLAVIYO_SPAWN_DELETE_ITEMS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_DELETE_VARIANTS_JOB tool input.
 */
type KLAVIYO_SPAWN_DELETE_VARIANTS_JOB_INPUT = {
  /**
   * Data  Attributes  Variants  Data
   * @description Data
   */
  data__attributes__variants__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-variant-bulk-delete-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_DELETE_VARIANTS_JOB tool output.
 */
type KLAVIYO_SPAWN_DELETE_VARIANTS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB tool input.
 */
type KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB_INPUT = {
  /**
   * Data  Attributes  Categories  Data
   * @description Data
   */
  data__attributes__categories__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-category-bulk-update-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB tool output.
 */
type KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_UPDATE_ITEMS_JOB tool input.
 */
type KLAVIYO_SPAWN_UPDATE_ITEMS_JOB_INPUT = {
  /**
   * Data  Attributes  Items  Data
   * @description Data
   */
  data__attributes__items__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-item-bulk-update-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_UPDATE_ITEMS_JOB tool output.
 */
type KLAVIYO_SPAWN_UPDATE_ITEMS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB tool input.
 */
type KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB_INPUT = {
  /**
   * Data  Attributes  Variants  Data
   * @description Data
   */
  data__attributes__variants__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-variant-bulk-update-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB tool output.
 */
type KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SUBSCRIBE_PROFILES tool input.
 */
type KLAVIYO_SUBSCRIBE_PROFILES_INPUT = {
  /**
   * Data  Attributes  Custom  Source
   * @description A custom method detail or source to store on the consent records.
   */
  data__attributes__custom__source?: string;
  /**
   * Data  Attributes  Historical  Import
   * @description Whether this subscription is part of a historical import. If true, the consented_at field must be provided for each profile.
   * @default false
   */
  data__attributes__historical__import: boolean;
  /**
   * Data  Attributes  Profiles  Data
   * @description Data
   */
  data__attributes__profiles__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Relationships  List  Data  Id
   * @description The list to add the newly subscribed profiles to
   */
  data__relationships__list__data__id?: string;
  /**
   * Data  Relationships  List  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__list__data__type?: "list";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile-subscription-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SUBSCRIBE_PROFILES tool output.
 */
type KLAVIYO_SUBSCRIBE_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_SUPPRESS_PROFILES tool input.
 */
type KLAVIYO_SUPPRESS_PROFILES_INPUT = {
  /**
   * Data  Attributes  Profiles  Data
   * @description Data
   */
  data__attributes__profiles__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Relationships  List  Data  Id
   * @description Suppress all profiles in this list
   */
  data__relationships__list__data__id?: string;
  /**
   * Data  Relationships  List  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__list__data__type?: "list";
  /**
   * Data  Relationships  Segment  Data  Id
   * @description Suppress all profiles in this segment
   */
  data__relationships__segment__data__id?: string;
  /**
   * Data  Relationships  Segment  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__segment__data__type?: "segment";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile-suppression-bulk-create-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_SUPPRESS_PROFILES tool output.
 */
type KLAVIYO_SUPPRESS_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN tool input.
 */
type KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN_INPUT = {
  /**
   * Company Id
   * @description Your Public API Key / Site ID. See [this article](https://help.klaviyo.com/hc/en-us/articles/115005062267) for more details.
   */
  company_id?: string;
  /**
   * Data  Attributes  Platform
   * @description The platform on which the push token was created.
   * @enum {string}
   */
  data__attributes__platform?: "android" | "ios";
  /**
   * Data  Attributes  Profile  Data  Attributes    Kx
   * @description Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo"s web tracking. You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
   */
  data__attributes__profile__data__attributes____kx?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Anonymous  Id
   * @description Id that can be used to identify a profile when other identifiers are not available
   */
  data__attributes__profile__data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__profile__data__attributes__email?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__profile__data__attributes__external__id?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__profile__data__attributes__first__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__profile__data__attributes__image?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__profile__data__attributes__last__name?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__profile__data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__profile__data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__profile__data__attributes__location__city?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__profile__data__attributes__location__country?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__profile__data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__profile__data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__profile__data__attributes__location__region?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__profile__data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__profile__data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__profile__data__attributes__organization?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__profile__data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Profile  Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__profile__data__attributes__title?: string;
  /**
   * Data  Attributes  Profile  Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__attributes__profile__data__id?: string;
  /**
   * Data  Attributes  Profile  Data  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__attributes__profile__data__meta__patch__properties__unset?: string[];
  /**
   * Data  Attributes  Profile  Data  Type
   * @description Type
   * @enum {string}
   */
  data__attributes__profile__data__type?: "profile";
  /**
   * Data  Attributes  Token
   * @description A push token from APNS or FCM.
   */
  data__attributes__token?: string;
  /**
   * Data  Attributes  Vendor
   * @description The vendor of the push token.
   * @enum {string}
   */
  data__attributes__vendor?: "apns" | "fcm";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "push-token-unregister";
};

/**
 * Type of KLAVIYO's KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN tool output.
 */
type KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UNSUBSCRIBE_PROFILES tool input.
 */
type KLAVIYO_UNSUBSCRIBE_PROFILES_INPUT = {
  /**
   * Data  Attributes  Profiles  Data
   * @description Data
   */
  data__attributes__profiles__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Relationships  List  Data  Id
   * @description The list to remove the profiles from
   */
  data__relationships__list__data__id?: string;
  /**
   * Data  Relationships  List  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__list__data__type?: "list";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile-subscription-bulk-delete-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_UNSUBSCRIBE_PROFILES tool output.
 */
type KLAVIYO_UNSUBSCRIBE_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UNSUPPRESS_PROFILES tool input.
 */
type KLAVIYO_UNSUPPRESS_PROFILES_INPUT = {
  /**
   * Data  Attributes  Profiles  Data
   * @description Data
   */
  data__attributes__profiles__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Relationships  List  Data  Id
   * @description The list to pull the profiles to remove suppressions from
   */
  data__relationships__list__data__id?: string;
  /**
   * Data  Relationships  List  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__list__data__type?: "list";
  /**
   * Data  Relationships  Segment  Data  Id
   * @description The segment to pull the profiles to remove suppressions from
   */
  data__relationships__segment__data__id?: string;
  /**
   * Data  Relationships  Segment  Data  Type
   * @description Type
   * @enum {string}
   */
  data__relationships__segment__data__type?: "segment";
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile-suppression-bulk-delete-job";
};

/**
 * Type of KLAVIYO's KLAVIYO_UNSUPPRESS_PROFILES tool output.
 */
type KLAVIYO_UNSUPPRESS_PROFILES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CAMPAIGN tool input.
 */
type KLAVIYO_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The campaign ID to update
   */
  campaign_id?: string;
  /**
   * Excluded Audiences
   * @description List of list/segment IDs to exclude from audiences
   */
  excluded_audiences?: string[];
  /**
   * Included Audiences
   * @description List of list/segment IDs to include as audiences
   */
  included_audiences?: string[];
  /**
   * Name
   * @description The campaign name
   */
  name?: string;
  /**
   * Send Options
   * @description Additional send options (advanced use)
   */
  send_options?: {
      [key: string]: unknown;
  };
  /**
   * Send Strategy Method
   * @description Method for sending the campaign
   * @enum {string}
   */
  send_strategy_method?: "static" | "throttled" | "immediate" | "smart_send_time";
  /**
   * Static Is Local Timezone
   * @description Whether to send in recipients' local timezones
   * @default false
   */
  static_is_local_timezone: boolean;
  /**
   * Static Send Datetime
   * Format: date-time
   * @description When to send the campaign (for static strategy)
   */
  static_send_datetime?: string;
  /**
   * Static Send Past Recipients Immediately
   * @description Whether to send immediately to recipients in past timezones
   * @default false
   */
  static_send_past_recipients_immediately: boolean;
  /**
   * Sto Send Date
   * @description Date to send on for Smart Send Time (YYYY-MM-DD format)
   */
  sto_send_date?: string;
  /**
   * Throttle Percentage
   * @description Percentage of recipients to send to per hour
   * @enum {integer}
   */
  throttle_percentage?: 10 | 11 | 13 | 14 | 17 | 20 | 25 | 33 | 50;
  /**
   * Throttled Send Datetime
   * Format: date-time
   * @description When to start sending the campaign (for throttled strategy)
   */
  throttled_send_datetime?: string;
  /**
   * Tracking Options
   * @description Tracking options for the campaign
   */
  tracking_options?: {
      [key: string]: unknown;
  };
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CAMPAIGN tool output.
 */
type KLAVIYO_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Updated campaign data from Klaviyo
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
 * Type of KLAVIYO's KLAVIYO_UPDATE_CAMPAIGN_MESSAGE tool input.
 */
type KLAVIYO_UPDATE_CAMPAIGN_MESSAGE_INPUT = {
  /**
   * Data  Attributes  Content
   * @description Additional attributes relating to the content of the message
   */
  data__attributes__content?: {
      [key: string]: unknown;
  };
  /**
   * Data  Attributes  Label
   * @description The label or name on the message
   */
  data__attributes__label?: string;
  /**
   * Data  Attributes  Render  Options  Add  Info  Link
   * @description Add Info Link
   * @default true
   */
  data__attributes__render__options__add__info__link: boolean;
  /**
   * Data  Attributes  Render  Options  Add  Opt  Out  Language
   * @description Add Opt Out Language
   * @default false
   */
  data__attributes__render__options__add__opt__out__language: boolean;
  /**
   * Data  Attributes  Render  Options  Add  Org  Prefix
   * @description Add Org Prefix
   * @default true
   */
  data__attributes__render__options__add__org__prefix: boolean;
  /**
   * Data  Attributes  Render  Options  Shorten  Links
   * @description Shorten Links
   * @default true
   */
  data__attributes__render__options__shorten__links: boolean;
  /**
   * Data  Id
   * @description The message ID to be retrieved
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign-message";
  /**
   * Id
   * @description The message ID to be retrieved
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CAMPAIGN_MESSAGE tool output.
 */
type KLAVIYO_UPDATE_CAMPAIGN_MESSAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB tool input.
 */
type KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB_INPUT = {
  /**
   * Data  Attributes  Action
   * @description The action you would like to take with this send job from among "cancel" and "revert"
   */
  data__attributes__action?: string;
  /**
   * Data  Id
   * @description The ID of the currently sending campaign to cancel or revert
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "campaign-send-job";
  /**
   * Id
   * @description The ID of the currently sending campaign to cancel or revert
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB tool output.
 */
type KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_CATEGORY tool input.
 */
type KLAVIYO_UPDATE_CATALOG_CATEGORY_INPUT = {
  /**
   * Data  Attributes  Name
   * @description The name of the catalog category.
   */
  data__attributes__name?: string;
  /**
   * Data  Id
   * @description The catalog category ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  data__id?: string;
  /**
   * Data  Relationships  Items  Data
   * @description Data
   */
  data__relationships__items__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-category";
  /**
   * Id
   * @description The catalog category ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_CATEGORY tool output.
 */
type KLAVIYO_UPDATE_CATALOG_CATEGORY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool input.
 */
type KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS tool output.
 */
type KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_ITEM tool input.
 */
type KLAVIYO_UPDATE_CATALOG_ITEM_INPUT = {
  /**
   * Data  Attributes  Description
   * @description A description of the catalog item.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  Image  Full  Url
   * @description URL pointing to the location of a full image of the catalog item.
   */
  data__attributes__image__full__url?: string;
  /**
   * Data  Attributes  Image  Thumbnail  Url
   * @description URL pointing to the location of an image thumbnail of the catalog item
   */
  data__attributes__image__thumbnail__url?: string;
  /**
   * Data  Attributes  Images
   * @description List of URLs pointing to the locations of images of the catalog item.
   */
  data__attributes__images?: string[];
  /**
   * Data  Attributes  Price
   * @description This field can be used to set the price on the catalog item, which is what gets displayed for the item when included in emails. For most price-update use cases, you will also want to update the `price` on any child variants, using the [Update Catalog Variant Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_variant).
   */
  data__attributes__price?: number;
  /**
   * Data  Attributes  Published
   * @description Boolean value indicating whether the catalog item is published.
   */
  data__attributes__published?: boolean;
  /**
   * Data  Attributes  Title
   * @description The title of the catalog item.
   */
  data__attributes__title?: string;
  /**
   * Data  Attributes  Url
   * @description URL pointing to the location of the catalog item on your website.
   */
  data__attributes__url?: string;
  /**
   * Data  Id
   * @description The catalog item ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  data__id?: string;
  /**
   * Data  Relationships  Categories  Data
   * @description Data
   */
  data__relationships__categories__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-item";
  /**
   * Id
   * @description The catalog item ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_ITEM tool output.
 */
type KLAVIYO_UPDATE_CATALOG_ITEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool input.
 */
type KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT = {
  /**
   * Data
   * @description Data
   */
  data?: {
      [key: string]: unknown;
  }[];
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES tool output.
 */
type KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_VARIANT tool input.
 */
type KLAVIYO_UPDATE_CATALOG_VARIANT_INPUT = {
  /**
   * Data  Attributes  Description
   * @description A description of the catalog item variant.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  Image  Full  Url
   * @description URL pointing to the location of a full image of the catalog item variant.
   */
  data__attributes__image__full__url?: string;
  /**
   * Data  Attributes  Image  Thumbnail  Url
   * @description URL pointing to the location of an image thumbnail of the catalog item variant.
   */
  data__attributes__image__thumbnail__url?: string;
  /**
   * Data  Attributes  Images
   * @description List of URLs pointing to the locations of images of the catalog item variant.
   */
  data__attributes__images?: string[];
  /**
   * Data  Attributes  Inventory  Policy
   * @description This field controls the visibility of this catalog item variant in product feeds/blocks. This field supports the following values: `1`: a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock. `0` or `2`: a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.
   */
  data__attributes__inventory__policy?: number;
  /**
   * Data  Attributes  Inventory  Quantity
   * @description The quantity of the catalog item variant currently in stock.
   */
  data__attributes__inventory__quantity?: number;
  /**
   * Data  Attributes  Price
   * @description This field can be used to set the price on the catalog item variant, which is what gets displayed for the item variant when included in emails. For most price-update use cases, you will also want to update the `price` on any parent items using the [Update Catalog Item Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_item).
   */
  data__attributes__price?: number;
  /**
   * Data  Attributes  Published
   * @description Boolean value indicating whether the catalog item variant is published.
   */
  data__attributes__published?: boolean;
  /**
   * Data  Attributes  Sku
   * @description The SKU of the catalog item variant.
   */
  data__attributes__sku?: string;
  /**
   * Data  Attributes  Title
   * @description The title of the catalog item variant.
   */
  data__attributes__title?: string;
  /**
   * Data  Attributes  Url
   * @description URL pointing to the location of the catalog item variant on your website.
   */
  data__attributes__url?: string;
  /**
   * Data  Id
   * @description The catalog variant ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "catalog-variant";
  /**
   * Id
   * @description The catalog variant ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_CATALOG_VARIANT tool output.
 */
type KLAVIYO_UPDATE_CATALOG_VARIANT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_COUPON tool input.
 */
type KLAVIYO_UPDATE_COUPON_INPUT = {
  /**
   * Data  Attributes  Description
   * @description A description of the coupon.
   */
  data__attributes__description?: string;
  /**
   * Data  Id
   * @description The internal id of a Coupon is equivalent to its external id stored within an integration.
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "coupon";
  /**
   * Id
   * @description The internal id of a Coupon is equivalent to its external id stored within an integration.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_COUPON tool output.
 */
type KLAVIYO_UPDATE_COUPON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_COUPON_CODE tool input.
 */
type KLAVIYO_UPDATE_COUPON_CODE_INPUT = {
  /**
   * Data  Attributes  Expires  At
   * Format: date-time
   * @description The datetime when this coupon code will expire. If not specified or set to null, it will be automatically set to 1 year.
   */
  data__attributes__expires__at?: string;
  /**
   * Data  Attributes  Status
   * @description The API status of our coupon codes.
   * @enum {string}
   */
  data__attributes__status?: "ASSIGNED_TO_PROFILE" | "DELETING" | "PROCESSING" | "UNASSIGNED" | "USED" | "VERSION_NOT_ACTIVE";
  /**
   * Data  Id
   * @description The id of a coupon code is a combination of its unique code and the id of the coupon it is associated with.
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "coupon-code";
  /**
   * Id
   * @description The id of a coupon code is a combination of its unique code and the id of the coupon it is associated with.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_COUPON_CODE tool output.
 */
type KLAVIYO_UPDATE_COUPON_CODE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_FLOW_STATUS tool input.
 */
type KLAVIYO_UPDATE_FLOW_STATUS_INPUT = {
  /**
   * Data  Attributes  Status
   * @description Status you want to update the flow to. ["draft", "manual", or "live"]
   */
  data__attributes__status?: string;
  /**
   * Data  Id
   * @description ID of the Flow to update. Ex: XVTP5Q
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "flow";
  /**
   * Id
   * @description ID of the Flow to update. Ex: XVTP5Q
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_FLOW_STATUS tool output.
 */
type KLAVIYO_UPDATE_FLOW_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_IMAGE tool input.
 */
type KLAVIYO_UPDATE_IMAGE_INPUT = {
  /**
   * Data  Attributes  Hidden
   * @description If true, this image is not shown in the asset library.
   */
  data__attributes__hidden?: boolean;
  /**
   * Data  Attributes  Name
   * @description A name for the image.
   */
  data__attributes__name?: string;
  /**
   * Data  Id
   * @description The ID of the image
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "image";
  /**
   * Id
   * @description The ID of the image
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_IMAGE tool output.
 */
type KLAVIYO_UPDATE_IMAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_LIST tool input.
 */
type KLAVIYO_UPDATE_LIST_INPUT = {
  /**
   * Data  Attributes  Name
   * @description A helpful name to label the list
   */
  data__attributes__name?: string;
  /**
   * Data  Id
   * @description Primary key that uniquely identifies this list. Generated by Klaviyo.
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "list";
  /**
   * Id
   * @description Primary key that uniquely identifies this list. Generated by Klaviyo.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_LIST tool output.
 */
type KLAVIYO_UPDATE_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_PROFILE tool input.
 */
type KLAVIYO_UPDATE_PROFILE_INPUT = {
  /**
   * Data  Attributes  Anonymous  Id
   * @description Anonymous Id
   */
  data__attributes__anonymous__id?: string;
  /**
   * Data  Attributes  Email
   * @description Individual"s email address
   */
  data__attributes__email?: string;
  /**
   * Data  Attributes  External  Id
   * @description A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
   */
  data__attributes__external__id?: string;
  /**
   * Data  Attributes  First  Name
   * @description Individual"s first name
   */
  data__attributes__first__name?: string;
  /**
   * Data  Attributes  Image
   * @description URL pointing to the location of a profile image
   */
  data__attributes__image?: string;
  /**
   * Data  Attributes  Last  Name
   * @description Individual"s last name
   */
  data__attributes__last__name?: string;
  /**
   * Data  Attributes  Location  Address1
   * @description First line of street address
   */
  data__attributes__location__address1?: string;
  /**
   * Data  Attributes  Location  Address2
   * @description Second line of street address
   */
  data__attributes__location__address2?: string;
  /**
   * Data  Attributes  Location  City
   * @description City name
   */
  data__attributes__location__city?: string;
  /**
   * Data  Attributes  Location  Country
   * @description Country name
   */
  data__attributes__location__country?: string;
  /**
   * Data  Attributes  Location  Ip
   * @description IP Address
   */
  data__attributes__location__ip?: string;
  /**
   * Data  Attributes  Location  Latitude
   * @description Latitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__location__latitude?: string;
  /**
   * Data  Attributes  Location  Longitude
   * @description Longitude coordinate. We recommend providing a precision of four decimal places.
   */
  data__attributes__location__longitude?: string;
  /**
   * Data  Attributes  Location  Region
   * @description Region within a country, such as state or province
   */
  data__attributes__location__region?: string;
  /**
   * Data  Attributes  Location  Timezone
   * @description Time zone name. We recommend using time zones from the IANA Time Zone Database.
   */
  data__attributes__location__timezone?: string;
  /**
   * Data  Attributes  Location  Zip
   * @description Zip code
   */
  data__attributes__location__zip?: string;
  /**
   * Data  Attributes  Organization
   * @description Name of the company or organization within the company for whom the individual works
   */
  data__attributes__organization?: string;
  /**
   * Data  Attributes  Phone  Number
   * @description Individual"s phone number in E.164 format
   */
  data__attributes__phone__number?: string;
  /**
   * Data  Attributes  Title
   * @description Individual"s job title
   */
  data__attributes__title?: string;
  /**
   * Data  Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  data__id?: string;
  /**
   * Data  Meta  Patch  Properties  Unset
   * @description Remove a key or keys (and their values) completely from properties
   */
  data__meta__patch__properties__unset?: string[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "profile";
  /**
   * Id
   * @description Primary key that uniquely identifies this profile. Generated by Klaviyo.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_PROFILE tool output.
 */
type KLAVIYO_UPDATE_PROFILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_SEGMENT tool input.
 */
type KLAVIYO_UPDATE_SEGMENT_INPUT = {
  /**
   * Data  Attributes  Definition  Condition  Groups
   * @description Condition Groups
   */
  data__attributes__definition__condition__groups?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Attributes  Is  Starred
   * @description Is Starred
   */
  data__attributes__is__starred?: boolean;
  /**
   * Data  Attributes  Name
   * @description Name
   */
  data__attributes__name?: string;
  /**
   * Data  Id
   * @description Id
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "segment";
  /** Id */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_SEGMENT tool output.
 */
type KLAVIYO_UPDATE_SEGMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_TAG tool input.
 */
type KLAVIYO_UPDATE_TAG_INPUT = {
  /**
   * Data  Attributes  Name
   * @description The Tag name
   */
  data__attributes__name?: string;
  /**
   * Data  Id
   * @description The Tag ID
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "tag";
  /**
   * Id
   * @description The Tag ID
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_TAG tool output.
 */
type KLAVIYO_UPDATE_TAG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_TAG_GROUP tool input.
 */
type KLAVIYO_UPDATE_TAG_GROUP_INPUT = {
  /**
   * Data  Attributes  Name
   * @description The Tag Group name
   */
  data__attributes__name?: string;
  /**
   * Data  Attributes  Return  Fields
   * @description Return Fields
   */
  data__attributes__return__fields?: string[];
  /**
   * Data  Id
   * @description The Tag Group ID
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "tag-group";
  /**
   * Id
   * @description The Tag Group ID
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_TAG_GROUP tool output.
 */
type KLAVIYO_UPDATE_TAG_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_TEMPLATE tool input.
 */
type KLAVIYO_UPDATE_TEMPLATE_INPUT = {
  /**
   * Data  Attributes  Html
   * @description The HTML of the template
   */
  data__attributes__html?: string;
  /**
   * Data  Attributes  Name
   * @description The name of the template
   */
  data__attributes__name?: string;
  /**
   * Data  Attributes  Text
   * @description The plaintext of the template
   */
  data__attributes__text?: string;
  /**
   * Data  Id
   * @description The ID of template
   */
  data__id?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "template";
  /**
   * Id
   * @description The ID of template
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_TEMPLATE tool output.
 */
type KLAVIYO_UPDATE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_WEBHOOK tool input.
 */
type KLAVIYO_UPDATE_WEBHOOK_INPUT = {
  /**
   * Data  Attributes  Description
   * @description A description for the webhook.
   */
  data__attributes__description?: string;
  /**
   * Data  Attributes  Enabled
   * @description Is the webhook enabled.
   */
  data__attributes__enabled?: boolean;
  /**
   * Data  Attributes  Endpoint  Url
   * @description A url to send webhook calls to. Must be https.
   */
  data__attributes__endpoint__url?: string;
  /**
   * Data  Attributes  Name
   * @description A name for the webhook.
   */
  data__attributes__name?: string;
  /**
   * Data  Attributes  Secret  Key
   * @description A secret key, that will be used for webhook request signing.
   */
  data__attributes__secret__key?: string;
  /**
   * Data  Id
   * @description The ID of the webhook.
   */
  data__id?: string;
  /**
   * Data  Relationships  Webhook  Topics  Data
   * @description Data
   */
  data__relationships__webhook__topics__data?: {
      [key: string]: unknown;
  }[];
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "webhook";
  /**
   * Id
   * @description The ID of the webhook.
   */
  id?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPDATE_WEBHOOK tool output.
 */
type KLAVIYO_UPDATE_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPLOAD_IMAGE_FROM_FILE tool input.
 */
type KLAVIYO_UPLOAD_IMAGE_FROM_FILE_INPUT = {
  /**
   * File
   * Format: binary
   * @description File
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Hidden
   * @description Hidden
   * @default false
   */
  hidden: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPLOAD_IMAGE_FROM_FILE tool output.
 */
type KLAVIYO_UPLOAD_IMAGE_FROM_FILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLAVIYO's KLAVIYO_UPLOAD_IMAGE_FROM_URL tool input.
 */
type KLAVIYO_UPLOAD_IMAGE_FROM_URL_INPUT = {
  /**
   * Data  Attributes  Hidden
   * @description If true, this image is not shown in the asset library.
   * @default false
   */
  data__attributes__hidden: boolean;
  /**
   * Data  Attributes  Import  From  Url
   * @description An existing image url to import the image from. Alternatively, you may specify a base-64 encoded data-uri (`data:image/...`). Supported image formats: jpeg,png,gif. Maximum image size: 5MB.
   */
  data__attributes__import__from__url?: string;
  /**
   * Data  Attributes  Name
   * @description A name for the image.  Defaults to the filename if not provided.  If the name matches an existing image, a suffix will be added.
   */
  data__attributes__name?: string;
  /**
   * Data  Type
   * @description Type
   * @enum {string}
   */
  data__type?: "image";
};

/**
 * Type of KLAVIYO's KLAVIYO_UPLOAD_IMAGE_FROM_URL tool output.
 */
type KLAVIYO_UPLOAD_IMAGE_FROM_URL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "KLAVIYO".
 */
export type KLAVIYO_TOOL_INPUTS = {
  ADD_PROFILE_TO_LIST: KLAVIYO_ADD_PROFILE_TO_LIST_INPUT
  ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE: KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE_INPUT
  BULK_CREATE_CLIENT_EVENTS: KLAVIYO_BULK_CREATE_CLIENT_EVENTS_INPUT
  BULK_CREATE_EVENTS: KLAVIYO_BULK_CREATE_EVENTS_INPUT
  CREATE_BACK_IN_STOCK_SUBSCRIPTION: KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION_INPUT
  CREATE_CAMPAIGN: KLAVIYO_CREATE_CAMPAIGN_INPUT
  CREATE_CAMPAIGN_CLONE: KLAVIYO_CREATE_CAMPAIGN_CLONE_INPUT
  CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB: KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_INPUT
  CREATE_CAMPAIGN_SEND_JOB: KLAVIYO_CREATE_CAMPAIGN_SEND_JOB_INPUT
  CREATE_CATALOG_CATEGORY: KLAVIYO_CREATE_CATALOG_CATEGORY_INPUT
  CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT
  CREATE_CATALOG_ITEM: KLAVIYO_CREATE_CATALOG_ITEM_INPUT
  CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT
  CREATE_CATALOG_VARIANT: KLAVIYO_CREATE_CATALOG_VARIANT_INPUT
  CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION: KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION_INPUT
  CREATE_CLIENT_EVENT: KLAVIYO_CREATE_CLIENT_EVENT_INPUT
  CREATE_CLIENT_SUBSCRIPTION: KLAVIYO_CREATE_CLIENT_SUBSCRIPTION_INPUT
  CREATE_COUPON: KLAVIYO_CREATE_COUPON_INPUT
  CREATE_COUPON_CODE: KLAVIYO_CREATE_COUPON_CODE_INPUT
  CREATE_EVENT: KLAVIYO_CREATE_EVENT_INPUT
  CREATE_LIST: KLAVIYO_CREATE_LIST_INPUT
  CREATE_OR_UPDATE_CLIENT_PROFILE: KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE_INPUT
  CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN: KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN_INPUT
  CREATE_OR_UPDATE_PROFILE: KLAVIYO_CREATE_OR_UPDATE_PROFILE_INPUT
  CREATE_OR_UPDATE_PUSH_TOKEN: KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN_INPUT
  CREATE_PROFILE: KLAVIYO_CREATE_PROFILE_INPUT
  CREATE_SEGMENT: KLAVIYO_CREATE_SEGMENT_INPUT
  CREATE_TAG: KLAVIYO_CREATE_TAG_INPUT
  CREATE_TAG_GROUP: KLAVIYO_CREATE_TAG_GROUP_INPUT
  CREATE_TAG_RELATIONSHIPS_CAMPAIGNS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS_INPUT
  CREATE_TAG_RELATIONSHIPS_FLOWS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS_INPUT
  CREATE_TAG_RELATIONSHIPS_LISTS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS_INPUT
  CREATE_TAG_RELATIONSHIPS_SEGMENTS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS_INPUT
  CREATE_TEMPLATE: KLAVIYO_CREATE_TEMPLATE_INPUT
  CREATE_TEMPLATE_CLONE: KLAVIYO_CREATE_TEMPLATE_CLONE_INPUT
  CREATE_TEMPLATE_RENDER: KLAVIYO_CREATE_TEMPLATE_RENDER_INPUT
  CREATE_WEBHOOK: KLAVIYO_CREATE_WEBHOOK_INPUT
  DELETE_CAMPAIGN: KLAVIYO_DELETE_CAMPAIGN_INPUT
  DELETE_CATALOG_CATEGORY: KLAVIYO_DELETE_CATALOG_CATEGORY_INPUT
  DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT
  DELETE_CATALOG_ITEM: KLAVIYO_DELETE_CATALOG_ITEM_INPUT
  DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT
  DELETE_CATALOG_VARIANT: KLAVIYO_DELETE_CATALOG_VARIANT_INPUT
  DELETE_COUPON: KLAVIYO_DELETE_COUPON_INPUT
  DELETE_COUPON_CODE: KLAVIYO_DELETE_COUPON_CODE_INPUT
  DELETE_FLOW: KLAVIYO_DELETE_FLOW_INPUT
  DELETE_LIST: KLAVIYO_DELETE_LIST_INPUT
  DELETE_SEGMENT: KLAVIYO_DELETE_SEGMENT_INPUT
  DELETE_TAG: KLAVIYO_DELETE_TAG_INPUT
  DELETE_TAG_GROUP: KLAVIYO_DELETE_TAG_GROUP_INPUT
  DELETE_TAG_RELATIONSHIPS_CAMPAIGNS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS_INPUT
  DELETE_TAG_RELATIONSHIPS_FLOWS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS_INPUT
  DELETE_TAG_RELATIONSHIPS_LISTS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS_INPUT
  DELETE_TAG_RELATIONSHIPS_SEGMENTS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS_INPUT
  DELETE_TEMPLATE: KLAVIYO_DELETE_TEMPLATE_INPUT
  DELETE_WEBHOOK: KLAVIYO_DELETE_WEBHOOK_INPUT
  GET_ACCOUNT: KLAVIYO_GET_ACCOUNT_INPUT
  GET_ACCOUNTS: KLAVIYO_GET_ACCOUNTS_INPUT
  GET_BULK_PROFILE_IMPORT_JOB: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_INPUT
  GET_BULK_PROFILE_IMPORT_JOBS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS_INPUT
  GET_BULK_PROFILE_IMPORT_JOB_ERRORS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS_INPUT
  GET_BULK_PROFILE_IMPORT_JOB_LISTS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS_INPUT
  GET_BULK_PROFILE_IMPORT_JOB_PROFILES: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES_INPUT
  GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS_INPUT
  GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES_INPUT
  GET_CAMPAIGN: KLAVIYO_GET_CAMPAIGN_INPUT
  GET_CAMPAIGNS: KLAVIYO_GET_CAMPAIGNS_INPUT
  GET_CAMPAIGN_CAMPAIGN_MESSAGES: KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES_INPUT
  GET_CAMPAIGN_MESSAGE: KLAVIYO_GET_CAMPAIGN_MESSAGE_INPUT
  GET_CAMPAIGN_MESSAGE_CAMPAIGN: KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN_INPUT
  GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN: KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN_INPUT
  GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE: KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE_INPUT
  GET_CAMPAIGN_MESSAGE_TEMPLATE: KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE_INPUT
  GET_CAMPAIGN_RECIPIENT_ESTIMATION: KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_INPUT
  GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB: KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_INPUT
  GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES: KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES_INPUT
  GET_CAMPAIGN_RELATIONSHIPS_TAGS: KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS_INPUT
  GET_CAMPAIGN_SEND_JOB: KLAVIYO_GET_CAMPAIGN_SEND_JOB_INPUT
  GET_CAMPAIGN_TAGS: KLAVIYO_GET_CAMPAIGN_TAGS_INPUT
  GET_CATALOG_CATEGORIES: KLAVIYO_GET_CATALOG_CATEGORIES_INPUT
  GET_CATALOG_CATEGORY: KLAVIYO_GET_CATALOG_CATEGORY_INPUT
  GET_CATALOG_CATEGORY_ITEMS: KLAVIYO_GET_CATALOG_CATEGORY_ITEMS_INPUT
  GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT
  GET_CATALOG_ITEM: KLAVIYO_GET_CATALOG_ITEM_INPUT
  GET_CATALOG_ITEMS: KLAVIYO_GET_CATALOG_ITEMS_INPUT
  GET_CATALOG_ITEM_CATEGORIES: KLAVIYO_GET_CATALOG_ITEM_CATEGORIES_INPUT
  GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT
  GET_CATALOG_ITEM_VARIANTS: KLAVIYO_GET_CATALOG_ITEM_VARIANTS_INPUT
  GET_CATALOG_VARIANT: KLAVIYO_GET_CATALOG_VARIANT_INPUT
  GET_CATALOG_VARIANTS: KLAVIYO_GET_CATALOG_VARIANTS_INPUT
  GET_COUPON: KLAVIYO_GET_COUPON_INPUT
  GET_COUPONS: KLAVIYO_GET_COUPONS_INPUT
  GET_COUPON_CODE: KLAVIYO_GET_COUPON_CODE_INPUT
  GET_COUPON_CODES: KLAVIYO_GET_COUPON_CODES_INPUT
  GET_COUPON_CODES_FOR_COUPON: KLAVIYO_GET_COUPON_CODES_FOR_COUPON_INPUT
  GET_COUPON_CODE_BULK_CREATE_JOB: KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB_INPUT
  GET_COUPON_CODE_BULK_CREATE_JOBS: KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS_INPUT
  GET_COUPON_CODE_RELATIONSHIPS_COUPON: KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON_INPUT
  GET_COUPON_FOR_COUPON_CODE: KLAVIYO_GET_COUPON_FOR_COUPON_CODE_INPUT
  GET_COUPON_RELATIONSHIPS_COUPON_CODES: KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES_INPUT
  GET_CREATE_CATEGORIES_JOB: KLAVIYO_GET_CREATE_CATEGORIES_JOB_INPUT
  GET_CREATE_CATEGORIES_JOBS: KLAVIYO_GET_CREATE_CATEGORIES_JOBS_INPUT
  GET_CREATE_ITEMS_JOB: KLAVIYO_GET_CREATE_ITEMS_JOB_INPUT
  GET_CREATE_ITEMS_JOBS: KLAVIYO_GET_CREATE_ITEMS_JOBS_INPUT
  GET_CREATE_VARIANTS_JOB: KLAVIYO_GET_CREATE_VARIANTS_JOB_INPUT
  GET_CREATE_VARIANTS_JOBS: KLAVIYO_GET_CREATE_VARIANTS_JOBS_INPUT
  GET_DELETE_CATEGORIES_JOB: KLAVIYO_GET_DELETE_CATEGORIES_JOB_INPUT
  GET_DELETE_CATEGORIES_JOBS: KLAVIYO_GET_DELETE_CATEGORIES_JOBS_INPUT
  GET_DELETE_ITEMS_JOB: KLAVIYO_GET_DELETE_ITEMS_JOB_INPUT
  GET_DELETE_ITEMS_JOBS: KLAVIYO_GET_DELETE_ITEMS_JOBS_INPUT
  GET_DELETE_VARIANTS_JOB: KLAVIYO_GET_DELETE_VARIANTS_JOB_INPUT
  GET_DELETE_VARIANTS_JOBS: KLAVIYO_GET_DELETE_VARIANTS_JOBS_INPUT
  GET_EVENT: KLAVIYO_GET_EVENT_INPUT
  GET_EVENTS: KLAVIYO_GET_EVENTS_INPUT
  GET_EVENT_METRIC: KLAVIYO_GET_EVENT_METRIC_INPUT
  GET_EVENT_PROFILE: KLAVIYO_GET_EVENT_PROFILE_INPUT
  GET_EVENT_RELATIONSHIPS_METRIC: KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC_INPUT
  GET_EVENT_RELATIONSHIPS_PROFILE: KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE_INPUT
  GET_FLOW: KLAVIYO_GET_FLOW_INPUT
  GET_FLOWS: KLAVIYO_GET_FLOWS_INPUT
  GET_FLOW_ACTION: KLAVIYO_GET_FLOW_ACTION_INPUT
  GET_FLOW_ACTION_FOR_MESSAGE: KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE_INPUT
  GET_FLOW_ACTION_MESSAGES: KLAVIYO_GET_FLOW_ACTION_MESSAGES_INPUT
  GET_FLOW_ACTION_RELATIONSHIPS_FLOW: KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW_INPUT
  GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES: KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES_INPUT
  GET_FLOW_FLOW_ACTIONS: KLAVIYO_GET_FLOW_FLOW_ACTIONS_INPUT
  GET_FLOW_FOR_FLOW_ACTION: KLAVIYO_GET_FLOW_FOR_FLOW_ACTION_INPUT
  GET_FLOW_MESSAGE: KLAVIYO_GET_FLOW_MESSAGE_INPUT
  GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION: KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION_INPUT
  GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE: KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE_INPUT
  GET_FLOW_MESSAGE_TEMPLATE: KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE_INPUT
  GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS: KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS_INPUT
  GET_FLOW_RELATIONSHIPS_TAGS: KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS_INPUT
  GET_FLOW_TAGS: KLAVIYO_GET_FLOW_TAGS_INPUT
  GET_FORM: KLAVIYO_GET_FORM_INPUT
  GET_FORMS: KLAVIYO_GET_FORMS_INPUT
  GET_FORM_FOR_FORM_VERSION: KLAVIYO_GET_FORM_FOR_FORM_VERSION_INPUT
  GET_FORM_ID_FOR_FORM_VERSION: KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION_INPUT
  GET_FORM_VERSION: KLAVIYO_GET_FORM_VERSION_INPUT
  GET_IMAGE: KLAVIYO_GET_IMAGE_INPUT
  GET_IMAGES: KLAVIYO_GET_IMAGES_INPUT
  GET_LIST: KLAVIYO_GET_LIST_INPUT
  GET_LISTS: KLAVIYO_GET_LISTS_INPUT
  GET_LIST_PROFILES: KLAVIYO_GET_LIST_PROFILES_INPUT
  GET_LIST_RELATIONSHIPS_PROFILES: KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES_INPUT
  GET_LIST_RELATIONSHIPS_TAGS: KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS_INPUT
  GET_LIST_TAGS: KLAVIYO_GET_LIST_TAGS_INPUT
  GET_METRIC: KLAVIYO_GET_METRIC_INPUT
  GET_METRICS: KLAVIYO_GET_METRICS_INPUT
  GET_PROFILE: KLAVIYO_GET_PROFILE_INPUT
  GET_PROFILES: KLAVIYO_GET_PROFILES_INPUT
  GET_PROFILE_LISTS: KLAVIYO_GET_PROFILE_LISTS_INPUT
  GET_PROFILE_RELATIONSHIPS_LISTS: KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS_INPUT
  GET_PROFILE_RELATIONSHIPS_SEGMENTS: KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS_INPUT
  GET_PROFILE_SEGMENTS: KLAVIYO_GET_PROFILE_SEGMENTS_INPUT
  GET_SEGMENT: KLAVIYO_GET_SEGMENT_INPUT
  GET_SEGMENTS: KLAVIYO_GET_SEGMENTS_INPUT
  GET_SEGMENT_PROFILES: KLAVIYO_GET_SEGMENT_PROFILES_INPUT
  GET_SEGMENT_RELATIONSHIPS_PROFILES: KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES_INPUT
  GET_SEGMENT_RELATIONSHIPS_TAGS: KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS_INPUT
  GET_SEGMENT_TAGS: KLAVIYO_GET_SEGMENT_TAGS_INPUT
  GET_TAG: KLAVIYO_GET_TAG_INPUT
  GET_TAGS: KLAVIYO_GET_TAGS_INPUT
  GET_TAG_GROUP: KLAVIYO_GET_TAG_GROUP_INPUT
  GET_TAG_GROUPS: KLAVIYO_GET_TAG_GROUPS_INPUT
  GET_TAG_GROUP_RELATIONSHIPS_TAGS: KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS_INPUT
  GET_TAG_GROUP_TAGS: KLAVIYO_GET_TAG_GROUP_TAGS_INPUT
  GET_TAG_RELATIONSHIPS_CAMPAIGNS: KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS_INPUT
  GET_TAG_RELATIONSHIPS_FLOWS: KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS_INPUT
  GET_TAG_RELATIONSHIPS_LISTS: KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS_INPUT
  GET_TAG_RELATIONSHIPS_SEGMENTS: KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS_INPUT
  GET_TAG_RELATIONSHIPS_TAG_GROUP: KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP_INPUT
  GET_TAG_TAG_GROUP: KLAVIYO_GET_TAG_TAG_GROUP_INPUT
  GET_TEMPLATE: KLAVIYO_GET_TEMPLATE_INPUT
  GET_TEMPLATES: KLAVIYO_GET_TEMPLATES_INPUT
  GET_UPDATE_CATEGORIES_JOB: KLAVIYO_GET_UPDATE_CATEGORIES_JOB_INPUT
  GET_UPDATE_CATEGORIES_JOBS: KLAVIYO_GET_UPDATE_CATEGORIES_JOBS_INPUT
  GET_UPDATE_ITEMS_JOB: KLAVIYO_GET_UPDATE_ITEMS_JOB_INPUT
  GET_UPDATE_ITEMS_JOBS: KLAVIYO_GET_UPDATE_ITEMS_JOBS_INPUT
  GET_UPDATE_VARIANTS_JOB: KLAVIYO_GET_UPDATE_VARIANTS_JOB_INPUT
  GET_UPDATE_VARIANTS_JOBS: KLAVIYO_GET_UPDATE_VARIANTS_JOBS_INPUT
  GET_VERSIONS_FOR_FORM: KLAVIYO_GET_VERSIONS_FOR_FORM_INPUT
  GET_VERSION_IDS_FOR_FORM: KLAVIYO_GET_VERSION_IDS_FOR_FORM_INPUT
  GET_WEBHOOK: KLAVIYO_GET_WEBHOOK_INPUT
  GET_WEBHOOKS: KLAVIYO_GET_WEBHOOKS_INPUT
  GET_WEBHOOK_TOPIC: KLAVIYO_GET_WEBHOOK_TOPIC_INPUT
  GET_WEBHOOK_TOPICS: KLAVIYO_GET_WEBHOOK_TOPICS_INPUT
  MERGE_PROFILES: KLAVIYO_MERGE_PROFILES_INPUT
  QUERY_CAMPAIGN_VALUES: KLAVIYO_QUERY_CAMPAIGN_VALUES_INPUT
  QUERY_FLOW_SERIES: KLAVIYO_QUERY_FLOW_SERIES_INPUT
  QUERY_FLOW_VALUES: KLAVIYO_QUERY_FLOW_VALUES_INPUT
  QUERY_METRIC_AGGREGATES: KLAVIYO_QUERY_METRIC_AGGREGATES_INPUT
  REMOVE_PROFILE_FROM_LIST: KLAVIYO_REMOVE_PROFILE_FROM_LIST_INPUT
  REQUEST_PROFILE_DELETION: KLAVIYO_REQUEST_PROFILE_DELETION_INPUT
  SPAWN_BULK_PROFILE_IMPORT_JOB: KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB_INPUT
  SPAWN_COUPON_CODE_BULK_CREATE_JOB: KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB_INPUT
  SPAWN_CREATE_CATEGORIES_JOB: KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB_INPUT
  SPAWN_CREATE_ITEMS_JOB: KLAVIYO_SPAWN_CREATE_ITEMS_JOB_INPUT
  SPAWN_CREATE_VARIANTS_JOB: KLAVIYO_SPAWN_CREATE_VARIANTS_JOB_INPUT
  SPAWN_DELETE_CATEGORIES_JOB: KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB_INPUT
  SPAWN_DELETE_ITEMS_JOB: KLAVIYO_SPAWN_DELETE_ITEMS_JOB_INPUT
  SPAWN_DELETE_VARIANTS_JOB: KLAVIYO_SPAWN_DELETE_VARIANTS_JOB_INPUT
  SPAWN_UPDATE_CATEGORIES_JOB: KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB_INPUT
  SPAWN_UPDATE_ITEMS_JOB: KLAVIYO_SPAWN_UPDATE_ITEMS_JOB_INPUT
  SPAWN_UPDATE_VARIANTS_JOB: KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB_INPUT
  SUBSCRIBE_PROFILES: KLAVIYO_SUBSCRIBE_PROFILES_INPUT
  SUPPRESS_PROFILES: KLAVIYO_SUPPRESS_PROFILES_INPUT
  UNREGISTER_CLIENT_PUSH_TOKEN: KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN_INPUT
  UNSUBSCRIBE_PROFILES: KLAVIYO_UNSUBSCRIBE_PROFILES_INPUT
  UNSUPPRESS_PROFILES: KLAVIYO_UNSUPPRESS_PROFILES_INPUT
  UPDATE_CAMPAIGN: KLAVIYO_UPDATE_CAMPAIGN_INPUT
  UPDATE_CAMPAIGN_MESSAGE: KLAVIYO_UPDATE_CAMPAIGN_MESSAGE_INPUT
  UPDATE_CAMPAIGN_SEND_JOB: KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB_INPUT
  UPDATE_CATALOG_CATEGORY: KLAVIYO_UPDATE_CATALOG_CATEGORY_INPUT
  UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_INPUT
  UPDATE_CATALOG_ITEM: KLAVIYO_UPDATE_CATALOG_ITEM_INPUT
  UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_INPUT
  UPDATE_CATALOG_VARIANT: KLAVIYO_UPDATE_CATALOG_VARIANT_INPUT
  UPDATE_COUPON: KLAVIYO_UPDATE_COUPON_INPUT
  UPDATE_COUPON_CODE: KLAVIYO_UPDATE_COUPON_CODE_INPUT
  UPDATE_FLOW_STATUS: KLAVIYO_UPDATE_FLOW_STATUS_INPUT
  UPDATE_IMAGE: KLAVIYO_UPDATE_IMAGE_INPUT
  UPDATE_LIST: KLAVIYO_UPDATE_LIST_INPUT
  UPDATE_PROFILE: KLAVIYO_UPDATE_PROFILE_INPUT
  UPDATE_SEGMENT: KLAVIYO_UPDATE_SEGMENT_INPUT
  UPDATE_TAG: KLAVIYO_UPDATE_TAG_INPUT
  UPDATE_TAG_GROUP: KLAVIYO_UPDATE_TAG_GROUP_INPUT
  UPDATE_TEMPLATE: KLAVIYO_UPDATE_TEMPLATE_INPUT
  UPDATE_WEBHOOK: KLAVIYO_UPDATE_WEBHOOK_INPUT
  UPLOAD_IMAGE_FROM_FILE: KLAVIYO_UPLOAD_IMAGE_FROM_FILE_INPUT
  UPLOAD_IMAGE_FROM_URL: KLAVIYO_UPLOAD_IMAGE_FROM_URL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KLAVIYO".
 */
export type KLAVIYO_TOOL_OUTPUTS = {
  ADD_PROFILE_TO_LIST: KLAVIYO_ADD_PROFILE_TO_LIST_OUTPUT
  ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE: KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE_OUTPUT
  BULK_CREATE_CLIENT_EVENTS: KLAVIYO_BULK_CREATE_CLIENT_EVENTS_OUTPUT
  BULK_CREATE_EVENTS: KLAVIYO_BULK_CREATE_EVENTS_OUTPUT
  CREATE_BACK_IN_STOCK_SUBSCRIPTION: KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION_OUTPUT
  CREATE_CAMPAIGN: KLAVIYO_CREATE_CAMPAIGN_OUTPUT
  CREATE_CAMPAIGN_CLONE: KLAVIYO_CREATE_CAMPAIGN_CLONE_OUTPUT
  CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB: KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_OUTPUT
  CREATE_CAMPAIGN_SEND_JOB: KLAVIYO_CREATE_CAMPAIGN_SEND_JOB_OUTPUT
  CREATE_CATALOG_CATEGORY: KLAVIYO_CREATE_CATALOG_CATEGORY_OUTPUT
  CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT
  CREATE_CATALOG_ITEM: KLAVIYO_CREATE_CATALOG_ITEM_OUTPUT
  CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT
  CREATE_CATALOG_VARIANT: KLAVIYO_CREATE_CATALOG_VARIANT_OUTPUT
  CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION: KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION_OUTPUT
  CREATE_CLIENT_EVENT: KLAVIYO_CREATE_CLIENT_EVENT_OUTPUT
  CREATE_CLIENT_SUBSCRIPTION: KLAVIYO_CREATE_CLIENT_SUBSCRIPTION_OUTPUT
  CREATE_COUPON: KLAVIYO_CREATE_COUPON_OUTPUT
  CREATE_COUPON_CODE: KLAVIYO_CREATE_COUPON_CODE_OUTPUT
  CREATE_EVENT: KLAVIYO_CREATE_EVENT_OUTPUT
  CREATE_LIST: KLAVIYO_CREATE_LIST_OUTPUT
  CREATE_OR_UPDATE_CLIENT_PROFILE: KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE_OUTPUT
  CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN: KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN_OUTPUT
  CREATE_OR_UPDATE_PROFILE: KLAVIYO_CREATE_OR_UPDATE_PROFILE_OUTPUT
  CREATE_OR_UPDATE_PUSH_TOKEN: KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN_OUTPUT
  CREATE_PROFILE: KLAVIYO_CREATE_PROFILE_OUTPUT
  CREATE_SEGMENT: KLAVIYO_CREATE_SEGMENT_OUTPUT
  CREATE_TAG: KLAVIYO_CREATE_TAG_OUTPUT
  CREATE_TAG_GROUP: KLAVIYO_CREATE_TAG_GROUP_OUTPUT
  CREATE_TAG_RELATIONSHIPS_CAMPAIGNS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS_OUTPUT
  CREATE_TAG_RELATIONSHIPS_FLOWS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS_OUTPUT
  CREATE_TAG_RELATIONSHIPS_LISTS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS_OUTPUT
  CREATE_TAG_RELATIONSHIPS_SEGMENTS: KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS_OUTPUT
  CREATE_TEMPLATE: KLAVIYO_CREATE_TEMPLATE_OUTPUT
  CREATE_TEMPLATE_CLONE: KLAVIYO_CREATE_TEMPLATE_CLONE_OUTPUT
  CREATE_TEMPLATE_RENDER: KLAVIYO_CREATE_TEMPLATE_RENDER_OUTPUT
  CREATE_WEBHOOK: KLAVIYO_CREATE_WEBHOOK_OUTPUT
  DELETE_CAMPAIGN: KLAVIYO_DELETE_CAMPAIGN_OUTPUT
  DELETE_CATALOG_CATEGORY: KLAVIYO_DELETE_CATALOG_CATEGORY_OUTPUT
  DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT
  DELETE_CATALOG_ITEM: KLAVIYO_DELETE_CATALOG_ITEM_OUTPUT
  DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT
  DELETE_CATALOG_VARIANT: KLAVIYO_DELETE_CATALOG_VARIANT_OUTPUT
  DELETE_COUPON: KLAVIYO_DELETE_COUPON_OUTPUT
  DELETE_COUPON_CODE: KLAVIYO_DELETE_COUPON_CODE_OUTPUT
  DELETE_FLOW: KLAVIYO_DELETE_FLOW_OUTPUT
  DELETE_LIST: KLAVIYO_DELETE_LIST_OUTPUT
  DELETE_SEGMENT: KLAVIYO_DELETE_SEGMENT_OUTPUT
  DELETE_TAG: KLAVIYO_DELETE_TAG_OUTPUT
  DELETE_TAG_GROUP: KLAVIYO_DELETE_TAG_GROUP_OUTPUT
  DELETE_TAG_RELATIONSHIPS_CAMPAIGNS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS_OUTPUT
  DELETE_TAG_RELATIONSHIPS_FLOWS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS_OUTPUT
  DELETE_TAG_RELATIONSHIPS_LISTS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS_OUTPUT
  DELETE_TAG_RELATIONSHIPS_SEGMENTS: KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS_OUTPUT
  DELETE_TEMPLATE: KLAVIYO_DELETE_TEMPLATE_OUTPUT
  DELETE_WEBHOOK: KLAVIYO_DELETE_WEBHOOK_OUTPUT
  GET_ACCOUNT: KLAVIYO_GET_ACCOUNT_OUTPUT
  GET_ACCOUNTS: KLAVIYO_GET_ACCOUNTS_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOB: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOBS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOB_ERRORS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOB_LISTS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOB_PROFILES: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS_OUTPUT
  GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES: KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES_OUTPUT
  GET_CAMPAIGN: KLAVIYO_GET_CAMPAIGN_OUTPUT
  GET_CAMPAIGNS: KLAVIYO_GET_CAMPAIGNS_OUTPUT
  GET_CAMPAIGN_CAMPAIGN_MESSAGES: KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES_OUTPUT
  GET_CAMPAIGN_MESSAGE: KLAVIYO_GET_CAMPAIGN_MESSAGE_OUTPUT
  GET_CAMPAIGN_MESSAGE_CAMPAIGN: KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN_OUTPUT
  GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN: KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN_OUTPUT
  GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE: KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE_OUTPUT
  GET_CAMPAIGN_MESSAGE_TEMPLATE: KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE_OUTPUT
  GET_CAMPAIGN_RECIPIENT_ESTIMATION: KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_OUTPUT
  GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB: KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB_OUTPUT
  GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES: KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES_OUTPUT
  GET_CAMPAIGN_RELATIONSHIPS_TAGS: KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS_OUTPUT
  GET_CAMPAIGN_SEND_JOB: KLAVIYO_GET_CAMPAIGN_SEND_JOB_OUTPUT
  GET_CAMPAIGN_TAGS: KLAVIYO_GET_CAMPAIGN_TAGS_OUTPUT
  GET_CATALOG_CATEGORIES: KLAVIYO_GET_CATALOG_CATEGORIES_OUTPUT
  GET_CATALOG_CATEGORY: KLAVIYO_GET_CATALOG_CATEGORY_OUTPUT
  GET_CATALOG_CATEGORY_ITEMS: KLAVIYO_GET_CATALOG_CATEGORY_ITEMS_OUTPUT
  GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT
  GET_CATALOG_ITEM: KLAVIYO_GET_CATALOG_ITEM_OUTPUT
  GET_CATALOG_ITEMS: KLAVIYO_GET_CATALOG_ITEMS_OUTPUT
  GET_CATALOG_ITEM_CATEGORIES: KLAVIYO_GET_CATALOG_ITEM_CATEGORIES_OUTPUT
  GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT
  GET_CATALOG_ITEM_VARIANTS: KLAVIYO_GET_CATALOG_ITEM_VARIANTS_OUTPUT
  GET_CATALOG_VARIANT: KLAVIYO_GET_CATALOG_VARIANT_OUTPUT
  GET_CATALOG_VARIANTS: KLAVIYO_GET_CATALOG_VARIANTS_OUTPUT
  GET_COUPON: KLAVIYO_GET_COUPON_OUTPUT
  GET_COUPONS: KLAVIYO_GET_COUPONS_OUTPUT
  GET_COUPON_CODE: KLAVIYO_GET_COUPON_CODE_OUTPUT
  GET_COUPON_CODES: KLAVIYO_GET_COUPON_CODES_OUTPUT
  GET_COUPON_CODES_FOR_COUPON: KLAVIYO_GET_COUPON_CODES_FOR_COUPON_OUTPUT
  GET_COUPON_CODE_BULK_CREATE_JOB: KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB_OUTPUT
  GET_COUPON_CODE_BULK_CREATE_JOBS: KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS_OUTPUT
  GET_COUPON_CODE_RELATIONSHIPS_COUPON: KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON_OUTPUT
  GET_COUPON_FOR_COUPON_CODE: KLAVIYO_GET_COUPON_FOR_COUPON_CODE_OUTPUT
  GET_COUPON_RELATIONSHIPS_COUPON_CODES: KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES_OUTPUT
  GET_CREATE_CATEGORIES_JOB: KLAVIYO_GET_CREATE_CATEGORIES_JOB_OUTPUT
  GET_CREATE_CATEGORIES_JOBS: KLAVIYO_GET_CREATE_CATEGORIES_JOBS_OUTPUT
  GET_CREATE_ITEMS_JOB: KLAVIYO_GET_CREATE_ITEMS_JOB_OUTPUT
  GET_CREATE_ITEMS_JOBS: KLAVIYO_GET_CREATE_ITEMS_JOBS_OUTPUT
  GET_CREATE_VARIANTS_JOB: KLAVIYO_GET_CREATE_VARIANTS_JOB_OUTPUT
  GET_CREATE_VARIANTS_JOBS: KLAVIYO_GET_CREATE_VARIANTS_JOBS_OUTPUT
  GET_DELETE_CATEGORIES_JOB: KLAVIYO_GET_DELETE_CATEGORIES_JOB_OUTPUT
  GET_DELETE_CATEGORIES_JOBS: KLAVIYO_GET_DELETE_CATEGORIES_JOBS_OUTPUT
  GET_DELETE_ITEMS_JOB: KLAVIYO_GET_DELETE_ITEMS_JOB_OUTPUT
  GET_DELETE_ITEMS_JOBS: KLAVIYO_GET_DELETE_ITEMS_JOBS_OUTPUT
  GET_DELETE_VARIANTS_JOB: KLAVIYO_GET_DELETE_VARIANTS_JOB_OUTPUT
  GET_DELETE_VARIANTS_JOBS: KLAVIYO_GET_DELETE_VARIANTS_JOBS_OUTPUT
  GET_EVENT: KLAVIYO_GET_EVENT_OUTPUT
  GET_EVENTS: KLAVIYO_GET_EVENTS_OUTPUT
  GET_EVENT_METRIC: KLAVIYO_GET_EVENT_METRIC_OUTPUT
  GET_EVENT_PROFILE: KLAVIYO_GET_EVENT_PROFILE_OUTPUT
  GET_EVENT_RELATIONSHIPS_METRIC: KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC_OUTPUT
  GET_EVENT_RELATIONSHIPS_PROFILE: KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE_OUTPUT
  GET_FLOW: KLAVIYO_GET_FLOW_OUTPUT
  GET_FLOWS: KLAVIYO_GET_FLOWS_OUTPUT
  GET_FLOW_ACTION: KLAVIYO_GET_FLOW_ACTION_OUTPUT
  GET_FLOW_ACTION_FOR_MESSAGE: KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE_OUTPUT
  GET_FLOW_ACTION_MESSAGES: KLAVIYO_GET_FLOW_ACTION_MESSAGES_OUTPUT
  GET_FLOW_ACTION_RELATIONSHIPS_FLOW: KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW_OUTPUT
  GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES: KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES_OUTPUT
  GET_FLOW_FLOW_ACTIONS: KLAVIYO_GET_FLOW_FLOW_ACTIONS_OUTPUT
  GET_FLOW_FOR_FLOW_ACTION: KLAVIYO_GET_FLOW_FOR_FLOW_ACTION_OUTPUT
  GET_FLOW_MESSAGE: KLAVIYO_GET_FLOW_MESSAGE_OUTPUT
  GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION: KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION_OUTPUT
  GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE: KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE_OUTPUT
  GET_FLOW_MESSAGE_TEMPLATE: KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE_OUTPUT
  GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS: KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS_OUTPUT
  GET_FLOW_RELATIONSHIPS_TAGS: KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS_OUTPUT
  GET_FLOW_TAGS: KLAVIYO_GET_FLOW_TAGS_OUTPUT
  GET_FORM: KLAVIYO_GET_FORM_OUTPUT
  GET_FORMS: KLAVIYO_GET_FORMS_OUTPUT
  GET_FORM_FOR_FORM_VERSION: KLAVIYO_GET_FORM_FOR_FORM_VERSION_OUTPUT
  GET_FORM_ID_FOR_FORM_VERSION: KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION_OUTPUT
  GET_FORM_VERSION: KLAVIYO_GET_FORM_VERSION_OUTPUT
  GET_IMAGE: KLAVIYO_GET_IMAGE_OUTPUT
  GET_IMAGES: KLAVIYO_GET_IMAGES_OUTPUT
  GET_LIST: KLAVIYO_GET_LIST_OUTPUT
  GET_LISTS: KLAVIYO_GET_LISTS_OUTPUT
  GET_LIST_PROFILES: KLAVIYO_GET_LIST_PROFILES_OUTPUT
  GET_LIST_RELATIONSHIPS_PROFILES: KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES_OUTPUT
  GET_LIST_RELATIONSHIPS_TAGS: KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS_OUTPUT
  GET_LIST_TAGS: KLAVIYO_GET_LIST_TAGS_OUTPUT
  GET_METRIC: KLAVIYO_GET_METRIC_OUTPUT
  GET_METRICS: KLAVIYO_GET_METRICS_OUTPUT
  GET_PROFILE: KLAVIYO_GET_PROFILE_OUTPUT
  GET_PROFILES: KLAVIYO_GET_PROFILES_OUTPUT
  GET_PROFILE_LISTS: KLAVIYO_GET_PROFILE_LISTS_OUTPUT
  GET_PROFILE_RELATIONSHIPS_LISTS: KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS_OUTPUT
  GET_PROFILE_RELATIONSHIPS_SEGMENTS: KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS_OUTPUT
  GET_PROFILE_SEGMENTS: KLAVIYO_GET_PROFILE_SEGMENTS_OUTPUT
  GET_SEGMENT: KLAVIYO_GET_SEGMENT_OUTPUT
  GET_SEGMENTS: KLAVIYO_GET_SEGMENTS_OUTPUT
  GET_SEGMENT_PROFILES: KLAVIYO_GET_SEGMENT_PROFILES_OUTPUT
  GET_SEGMENT_RELATIONSHIPS_PROFILES: KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES_OUTPUT
  GET_SEGMENT_RELATIONSHIPS_TAGS: KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS_OUTPUT
  GET_SEGMENT_TAGS: KLAVIYO_GET_SEGMENT_TAGS_OUTPUT
  GET_TAG: KLAVIYO_GET_TAG_OUTPUT
  GET_TAGS: KLAVIYO_GET_TAGS_OUTPUT
  GET_TAG_GROUP: KLAVIYO_GET_TAG_GROUP_OUTPUT
  GET_TAG_GROUPS: KLAVIYO_GET_TAG_GROUPS_OUTPUT
  GET_TAG_GROUP_RELATIONSHIPS_TAGS: KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS_OUTPUT
  GET_TAG_GROUP_TAGS: KLAVIYO_GET_TAG_GROUP_TAGS_OUTPUT
  GET_TAG_RELATIONSHIPS_CAMPAIGNS: KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS_OUTPUT
  GET_TAG_RELATIONSHIPS_FLOWS: KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS_OUTPUT
  GET_TAG_RELATIONSHIPS_LISTS: KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS_OUTPUT
  GET_TAG_RELATIONSHIPS_SEGMENTS: KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS_OUTPUT
  GET_TAG_RELATIONSHIPS_TAG_GROUP: KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP_OUTPUT
  GET_TAG_TAG_GROUP: KLAVIYO_GET_TAG_TAG_GROUP_OUTPUT
  GET_TEMPLATE: KLAVIYO_GET_TEMPLATE_OUTPUT
  GET_TEMPLATES: KLAVIYO_GET_TEMPLATES_OUTPUT
  GET_UPDATE_CATEGORIES_JOB: KLAVIYO_GET_UPDATE_CATEGORIES_JOB_OUTPUT
  GET_UPDATE_CATEGORIES_JOBS: KLAVIYO_GET_UPDATE_CATEGORIES_JOBS_OUTPUT
  GET_UPDATE_ITEMS_JOB: KLAVIYO_GET_UPDATE_ITEMS_JOB_OUTPUT
  GET_UPDATE_ITEMS_JOBS: KLAVIYO_GET_UPDATE_ITEMS_JOBS_OUTPUT
  GET_UPDATE_VARIANTS_JOB: KLAVIYO_GET_UPDATE_VARIANTS_JOB_OUTPUT
  GET_UPDATE_VARIANTS_JOBS: KLAVIYO_GET_UPDATE_VARIANTS_JOBS_OUTPUT
  GET_VERSIONS_FOR_FORM: KLAVIYO_GET_VERSIONS_FOR_FORM_OUTPUT
  GET_VERSION_IDS_FOR_FORM: KLAVIYO_GET_VERSION_IDS_FOR_FORM_OUTPUT
  GET_WEBHOOK: KLAVIYO_GET_WEBHOOK_OUTPUT
  GET_WEBHOOKS: KLAVIYO_GET_WEBHOOKS_OUTPUT
  GET_WEBHOOK_TOPIC: KLAVIYO_GET_WEBHOOK_TOPIC_OUTPUT
  GET_WEBHOOK_TOPICS: KLAVIYO_GET_WEBHOOK_TOPICS_OUTPUT
  MERGE_PROFILES: KLAVIYO_MERGE_PROFILES_OUTPUT
  QUERY_CAMPAIGN_VALUES: KLAVIYO_QUERY_CAMPAIGN_VALUES_OUTPUT
  QUERY_FLOW_SERIES: KLAVIYO_QUERY_FLOW_SERIES_OUTPUT
  QUERY_FLOW_VALUES: KLAVIYO_QUERY_FLOW_VALUES_OUTPUT
  QUERY_METRIC_AGGREGATES: KLAVIYO_QUERY_METRIC_AGGREGATES_OUTPUT
  REMOVE_PROFILE_FROM_LIST: KLAVIYO_REMOVE_PROFILE_FROM_LIST_OUTPUT
  REQUEST_PROFILE_DELETION: KLAVIYO_REQUEST_PROFILE_DELETION_OUTPUT
  SPAWN_BULK_PROFILE_IMPORT_JOB: KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB_OUTPUT
  SPAWN_COUPON_CODE_BULK_CREATE_JOB: KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB_OUTPUT
  SPAWN_CREATE_CATEGORIES_JOB: KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB_OUTPUT
  SPAWN_CREATE_ITEMS_JOB: KLAVIYO_SPAWN_CREATE_ITEMS_JOB_OUTPUT
  SPAWN_CREATE_VARIANTS_JOB: KLAVIYO_SPAWN_CREATE_VARIANTS_JOB_OUTPUT
  SPAWN_DELETE_CATEGORIES_JOB: KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB_OUTPUT
  SPAWN_DELETE_ITEMS_JOB: KLAVIYO_SPAWN_DELETE_ITEMS_JOB_OUTPUT
  SPAWN_DELETE_VARIANTS_JOB: KLAVIYO_SPAWN_DELETE_VARIANTS_JOB_OUTPUT
  SPAWN_UPDATE_CATEGORIES_JOB: KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB_OUTPUT
  SPAWN_UPDATE_ITEMS_JOB: KLAVIYO_SPAWN_UPDATE_ITEMS_JOB_OUTPUT
  SPAWN_UPDATE_VARIANTS_JOB: KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB_OUTPUT
  SUBSCRIBE_PROFILES: KLAVIYO_SUBSCRIBE_PROFILES_OUTPUT
  SUPPRESS_PROFILES: KLAVIYO_SUPPRESS_PROFILES_OUTPUT
  UNREGISTER_CLIENT_PUSH_TOKEN: KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN_OUTPUT
  UNSUBSCRIBE_PROFILES: KLAVIYO_UNSUBSCRIBE_PROFILES_OUTPUT
  UNSUPPRESS_PROFILES: KLAVIYO_UNSUPPRESS_PROFILES_OUTPUT
  UPDATE_CAMPAIGN: KLAVIYO_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_CAMPAIGN_MESSAGE: KLAVIYO_UPDATE_CAMPAIGN_MESSAGE_OUTPUT
  UPDATE_CAMPAIGN_SEND_JOB: KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB_OUTPUT
  UPDATE_CATALOG_CATEGORY: KLAVIYO_UPDATE_CATALOG_CATEGORY_OUTPUT
  UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS_OUTPUT
  UPDATE_CATALOG_ITEM: KLAVIYO_UPDATE_CATALOG_ITEM_OUTPUT
  UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES_OUTPUT
  UPDATE_CATALOG_VARIANT: KLAVIYO_UPDATE_CATALOG_VARIANT_OUTPUT
  UPDATE_COUPON: KLAVIYO_UPDATE_COUPON_OUTPUT
  UPDATE_COUPON_CODE: KLAVIYO_UPDATE_COUPON_CODE_OUTPUT
  UPDATE_FLOW_STATUS: KLAVIYO_UPDATE_FLOW_STATUS_OUTPUT
  UPDATE_IMAGE: KLAVIYO_UPDATE_IMAGE_OUTPUT
  UPDATE_LIST: KLAVIYO_UPDATE_LIST_OUTPUT
  UPDATE_PROFILE: KLAVIYO_UPDATE_PROFILE_OUTPUT
  UPDATE_SEGMENT: KLAVIYO_UPDATE_SEGMENT_OUTPUT
  UPDATE_TAG: KLAVIYO_UPDATE_TAG_OUTPUT
  UPDATE_TAG_GROUP: KLAVIYO_UPDATE_TAG_GROUP_OUTPUT
  UPDATE_TEMPLATE: KLAVIYO_UPDATE_TEMPLATE_OUTPUT
  UPDATE_WEBHOOK: KLAVIYO_UPDATE_WEBHOOK_OUTPUT
  UPLOAD_IMAGE_FROM_FILE: KLAVIYO_UPLOAD_IMAGE_FROM_FILE_OUTPUT
  UPLOAD_IMAGE_FROM_URL: KLAVIYO_UPLOAD_IMAGE_FROM_URL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KLAVIYO toolkit.
 */
export const KLAVIYO = {
  slug: "klaviyo",
  tools: {
    /**
     * Add profiles to a klaviyo list by profile ids or email addresses. this action subscribes profiles to a marketing list, which is ideal for giving marketing consent. you can add up to 1000 profiles per call using either their klaviyo profile ids or email addresses. rate limits: 10/s burst, 150/m steady. required scopes: `lists:write` and `profiles:write`. preconditions: - either profile ids or emails must be provided (not both) - maximum 1000 profiles per call - email addresses must be valid format - the list must exist and be accessible
     */
    ADD_PROFILE_TO_LIST: "KLAVIYO_ADD_PROFILE_TO_LIST",
    /**
     * Creates a non-reusable version of the template and assigns it to the message.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE: "KLAVIYO_ASSIGN_CAMPAIGN_MESSAGE_TEMPLATE",
    /**
     * Use the client-side endpoint with a public api key to track profile activity. it accepts up to 1000 events/request with rates of 10/s burst and 150/m steady. for server-side, use the bulk create event endpoint.
     */
    BULK_CREATE_CLIENT_EVENTS: "KLAVIYO_BULK_CREATE_CLIENT_EVENTS",
    /**
     * This api endpoint creates or updates profiles by batching up to 1,000 events, with a 5mb payload limit. minimum required: a profile id and metric name. it has rate limits of 10 events per second burst and 150 events per minute. scope is `events:write`.
     */
    BULK_CREATE_EVENTS: "KLAVIYO_BULK_CREATE_EVENTS",
    /**
     * Use the server-side endpoint to subscribe to restock alerts, following the back in stock api guide. for client-side, use the post endpoint provided. rate limits: 350/s burst and 3500/m steady. required scopes: catalogs:write, profiles:write.
     */
    CREATE_BACK_IN_STOCK_SUBSCRIPTION: "KLAVIYO_CREATE_BACK_IN_STOCK_SUBSCRIPTION",
    /**
     * Creates a campaign given a set of parameters, then returns it.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    CREATE_CAMPAIGN: "KLAVIYO_CREATE_CAMPAIGN",
    /**
     * Clones an existing campaign, returning a new campaign based on the original with a new id and name.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    CREATE_CAMPAIGN_CLONE: "KLAVIYO_CREATE_CAMPAIGN_CLONE",
    /**
     * Start an asynchronous task to estimate the number of recipients for a campaign. this action creates a background job that calculates how many profiles would receive the campaign based on its current audience settings. use the job id returned to track progress with the 'get campaign recipient estimation job' action, and get the final count via 'get campaign recipient estimation' action. rate limits: 10/s burst, 150/m steady. required scope: `campaigns:write`. preconditions: - valid api key with campaigns:write scope - campaign id must exist and be accessible - campaign must have audience settings configured
     */
    CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB: "KLAVIYO_CREATE_CAMPAIGN_RECIPIENT_ESTIMATION_JOB",
    /**
     * Trigger a campaign to send asynchronously<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    CREATE_CAMPAIGN_SEND_JOB: "KLAVIYO_CREATE_CAMPAIGN_SEND_JOB",
    /**
     * Create a new catalog category.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    CREATE_CATALOG_CATEGORY: "KLAVIYO_CREATE_CATALOG_CATEGORY",
    /**
     * Create a new item relationship for the given category id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: "KLAVIYO_CREATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS",
    /**
     * Create a new catalog item.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    CREATE_CATALOG_ITEM: "KLAVIYO_CREATE_CATALOG_ITEM",
    /**
     * Create a new catalog category relationship for the given item id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: "KLAVIYO_CREATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES",
    /**
     * Create a new variant for a related catalog item.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    CREATE_CATALOG_VARIANT: "KLAVIYO_CREATE_CATALOG_VARIANT",
    /**
     * Use the endpoint for client-side back in stock notifications with a public api key. for server-side, use post /api/back-in-stock-subscriptions. limits are 350 requests per second and 3500 per minute. requires 'catalogs:write' and 'profiles:write' scopes.
     */
    CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION: "KLAVIYO_CREATE_CLIENT_BACK_IN_STOCK_SUBSCRIPTION",
    /**
     * Create client-side events to track profiles using a public api key, not for updating identifiers (server-side only). rate limits: 350/s, 3500/m. use `events:write` scope.
     */
    CREATE_CLIENT_EVENT: "KLAVIYO_CREATE_CLIENT_EVENT",
    /**
     * Endpoint manages email/sms opt-ins using consent and requires public api key for client use. allows single-channel with details. rate limit: 100/s burst, 700/m steady, under 'subscriptions:write'.
     */
    CREATE_CLIENT_SUBSCRIPTION: "KLAVIYO_CREATE_CLIENT_SUBSCRIPTION",
    /**
     * Creates a new coupon.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `coupons:write`
     */
    CREATE_COUPON: "KLAVIYO_CREATE_COUPON",
    /**
     * Synchronously creates a coupon code for the given coupon.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `coupon-codes:write`
     */
    CREATE_COUPON_CODE: "KLAVIYO_CREATE_COUPON_CODE",
    /**
     * Create or update a profile event with minimum identifiers and metric name. success means validation, not completion. burst limit: 350/s, steady: 3500/m. scope required: `events:write`.
     */
    CREATE_EVENT: "KLAVIYO_CREATE_EVENT",
    /**
     * Create a new list.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m`<br>daily: `100/d` **scopes:** `lists:write`
     */
    CREATE_LIST: "KLAVIYO_CREATE_LIST",
    /**
     * Update user profiles without tracking using a public client-side api; use a private server-side api for identifier changes. burst rate is 350 requests/sec and 3500 requests/min with 'profiles:write' access.
     */
    CREATE_OR_UPDATE_CLIENT_PROFILE: "KLAVIYO_CREATE_OR_UPDATE_CLIENT_PROFILE",
    /**
     * This endpoint for mobile sdks (ios & android) creates/updates push tokens using a public api key. push notifications must be enabled. for migrating tokens use the server-side post endpoint. rate limits are 3/s burst, 150/m steady.
     */
    CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN: "KLAVIYO_CREATE_OR_UPDATE_CLIENT_PUSH_TOKEN",
    /**
     * Create or update a profile in klaviyo with the given attributes. this action allows you to create a new profile or update an existing one if it already exists (based on email or other identifiers). returns 201 for creation, 200 for update. empty fields are cleared with `null`; omitted fields remain unchanged. rate limits: 75/s burst, 700/m steady. required scope: `profiles:write`. preconditions: - at least one identifier (email, phone number, external id, or anonymous id) must be provided - email must be in valid format if provided - phone number must be in e.164 format if provided
     */
    CREATE_OR_UPDATE_PROFILE: "KLAVIYO_CREATE_OR_UPDATE_PROFILE",
    /**
     * Migrate or create push tokens with klaviyo's endpoint, utilizing their mobile sdks for ios & android. rate limits: 75/s burst, 700/m steady. requires profiles:write and push-tokens:write scopes.
     */
    CREATE_OR_UPDATE_PUSH_TOKEN: "KLAVIYO_CREATE_OR_UPDATE_PUSH_TOKEN",
    /**
     * Create a new profile.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `profiles:write`
     */
    CREATE_PROFILE: "KLAVIYO_CREATE_PROFILE",
    /**
     * Create a segment.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m`<br>daily: `100/d` **scopes:** `segments:write`
     */
    CREATE_SEGMENT: "KLAVIYO_CREATE_SEGMENT",
    /**
     * Summary: instructions on creating a tag within an account's designated tag group with a maximum of 500 tags, with optional tag group specification. rate limits are 3/s burst and 60/min steady. tag: #tagcreationlimitandrate
     */
    CREATE_TAG: "KLAVIYO_CREATE_TAG",
    /**
     * Create tag groups up to 50 per account, defaulting to non-exclusive unless specified. related resources can have multiple non-exclusive tags but only one if exclusive. rate limits: 3/s burst, 60/m steady. scopes needed: tags:read, tags:write.
     */
    CREATE_TAG_GROUP: "KLAVIYO_CREATE_TAG_GROUP",
    /**
     * Summary: link a tag to campaigns, ensuring a limit of 100 tags per campaign. campaign ids should be sent via request body. rate limit: 3/s, 60/m. required scopes: campaigns:write, tags:write. tag: #campaigntagginglimits
     */
    CREATE_TAG_RELATIONSHIPS_CAMPAIGNS: "KLAVIYO_CREATE_TAG_RELATIONSHIPS_CAMPAIGNS",
    /**
     * Assign tags to flows using their ids in the request body, ensuring a flow is not linked to over 100 tags. rate limits are 3/s burst and 60/m steady. required scopes: `flows:write` and `tags:write`. tag: flow-tag association limits
     */
    CREATE_TAG_RELATIONSHIPS_FLOWS: "KLAVIYO_CREATE_TAG_RELATIONSHIPS_FLOWS",
    /**
     * Summary: a tag can be added to one or more lists, with a max of 100 tags per list. use the request body to link tag and list ids. tag: #apiusagelimits scopes: lists:write, tags:write
     */
    CREATE_TAG_RELATIONSHIPS_LISTS: "KLAVIYO_CREATE_TAG_RELATIONSHIPS_LISTS",
    /**
     * Summary: set tag associations with segments using the request body, limited to one tag per segment and up to 100 tags per segment. rate limits are three requests per second and sixty per minute. tags: segments:write, tags:write
     */
    CREATE_TAG_RELATIONSHIPS_SEGMENTS: "KLAVIYO_CREATE_TAG_RELATIONSHIPS_SEGMENTS",
    /**
     * Summary: custom html templates can be created unless an account reaches 1,000 template limit. use sparse fieldsets to request specific fields. rate limits are 10 per second and 150 per minute. requires 'templates:write' scope.
     */
    CREATE_TEMPLATE: "KLAVIYO_CREATE_TEMPLATE",
    /**
     * Clone a template by its id, but cloning fails if account has 1,000+ templates. api limit: 1,000 templates. rate limits are 10 per second and 150 per minute. requires `templates:write` scope.
     */
    CREATE_TEMPLATE_CLONE: "KLAVIYO_CREATE_TEMPLATE_CLONE",
    /**
     * Render an email template with specific context and sparse fieldsets, then get html/plain text. rate limit: 3/s burst, 60/m steady. scope: templates:read.
     */
    CREATE_TEMPLATE_RENDER: "KLAVIYO_CREATE_TEMPLATE_RENDER",
    /**
     * Create a new webhook<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:write`
     */
    CREATE_WEBHOOK: "KLAVIYO_CREATE_WEBHOOK",
    /**
     * Delete a campaign with the given campaign id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    DELETE_CAMPAIGN: "KLAVIYO_DELETE_CAMPAIGN",
    /**
     * Delete a catalog category using the given category id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    DELETE_CATALOG_CATEGORY: "KLAVIYO_DELETE_CATALOG_CATEGORY",
    /**
     * Delete item relationships for the given category id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: "KLAVIYO_DELETE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS",
    /**
     * Delete a catalog item with the given item id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    DELETE_CATALOG_ITEM: "KLAVIYO_DELETE_CATALOG_ITEM",
    /**
     * Delete catalog category relationships for the given item id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: "KLAVIYO_DELETE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES",
    /**
     * Delete a catalog item variant with the given variant id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    DELETE_CATALOG_VARIANT: "KLAVIYO_DELETE_CATALOG_VARIANT",
    /**
     * Delete the coupon with the given coupon id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `coupons:write`
     */
    DELETE_COUPON: "KLAVIYO_DELETE_COUPON",
    /**
     * Deletes a coupon code specified by the given identifier synchronously. if a profile has been assigned to the coupon code, an exception will be raised<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `coupon-codes:write`
     */
    DELETE_COUPON_CODE: "KLAVIYO_DELETE_COUPON_CODE",
    /**
     * Delete a flow with the given flow id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:write`
     */
    DELETE_FLOW: "KLAVIYO_DELETE_FLOW",
    /**
     * Delete a list with the given list id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `lists:write`
     */
    DELETE_LIST: "KLAVIYO_DELETE_LIST",
    /**
     * Delete a segment with the given segment id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `segments:write`
     */
    DELETE_SEGMENT: "KLAVIYO_DELETE_SEGMENT",
    /**
     * Delete the tag with the given tag id. any associations between the tag and other resources will also be removed.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read` `tags:write`
     */
    DELETE_TAG: "KLAVIYO_DELETE_TAG",
    /**
     * Delete a specified tag group and its contents; associated resource links will be removed. the default group is undeletable. rate limits: 3/s burst, 60/m steady. requires tags:read and tags:write permissions.
     */
    DELETE_TAG_GROUP: "KLAVIYO_DELETE_TAG_GROUP",
    /**
     * Disconnect a tag from campaigns using the campaign id(s) in the request body. rate limits: 3 requests/second, 60 requests/minute. required scopes: campaigns:write, tags:write.
     */
    DELETE_TAG_RELATIONSHIPS_CAMPAIGNS: "KLAVIYO_DELETE_TAG_RELATIONSHIPS_CAMPAIGNS",
    /**
     * Remove a tag's association with one or more flows. use the request body to pass in the id(s) of the flows(s) whose association with the tag will be removed.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:write` `tags:write`
     */
    DELETE_TAG_RELATIONSHIPS_FLOWS: "KLAVIYO_DELETE_TAG_RELATIONSHIPS_FLOWS",
    /**
     * Remove a tag's association with one or more lists. use the request body to pass in the id(s) of the list(s) whose association with the tag will be removed.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `lists:write` `tags:write`
     */
    DELETE_TAG_RELATIONSHIPS_LISTS: "KLAVIYO_DELETE_TAG_RELATIONSHIPS_LISTS",
    /**
     * Use the request body to de-associate a tag from specified segment ids. rate limits are 3 requests/sec and 60 requests/min. required scopes are 'segments:write' and 'tags:write'.
     */
    DELETE_TAG_RELATIONSHIPS_SEGMENTS: "KLAVIYO_DELETE_TAG_RELATIONSHIPS_SEGMENTS",
    /**
     * Delete a template with the given template id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `templates:write`
     */
    DELETE_TEMPLATE: "KLAVIYO_DELETE_TEMPLATE",
    /**
     * Delete a webhook with the given id.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:write`
     */
    DELETE_WEBHOOK: "KLAVIYO_DELETE_WEBHOOK",
    /**
     * Retrieve a single account object by its account id. you can only request the account by which the private api key was generated.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `accounts:read`
     */
    GET_ACCOUNT: "KLAVIYO_GET_ACCOUNT",
    /**
     * Use a private api key to fetch an associated account's details like contact info, timezone, and currency, as well as validate the key. rate limit: 1 request/second, 15 requests/minute. scope required: `accounts:read`.
     */
    GET_ACCOUNTS: "KLAVIYO_GET_ACCOUNTS",
    /**
     * Get a bulk profile import job with the given job id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `lists:read` `profiles:read`
     */
    GET_BULK_PROFILE_IMPORT_JOB: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB",
    /**
     * Get all bulk profile import jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `lists:read` `profiles:read`
     */
    GET_BULK_PROFILE_IMPORT_JOBS: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOBS",
    /**
     * Get import errors for the bulk profile import job with the given id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `profiles:read`
     */
    GET_BULK_PROFILE_IMPORT_JOB_ERRORS: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_ERRORS",
    /**
     * Get list for the bulk profile import job with the given id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `lists:read`
     */
    GET_BULK_PROFILE_IMPORT_JOB_LISTS: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_LISTS",
    /**
     * Get profiles for the bulk profile import job with the given id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `profiles:read`
     */
    GET_BULK_PROFILE_IMPORT_JOB_PROFILES: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_PROFILES",
    /**
     * Get list relationship for the bulk profile import job with the given id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `lists:read`
     */
    GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_LISTS",
    /**
     * Get profile relationships for the bulk profile import job with the given id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `profiles:read`
     */
    GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES: "KLAVIYO_GET_BULK_PROFILE_IMPORT_JOB_RELATIONSHIPS_PROFILES",
    /**
     * Retrieve a specific campaign by its id from klaviyo. this action fetches detailed information about a single campaign including its name, status, audience settings, send strategy, and optionally related messages and tags. rate limits: 10/s burst, 150/m steady. required scope: `campaigns:read`. preconditions: - valid api key with campaigns:read scope - campaign id must exist and be accessible
     */
    GET_CAMPAIGN: "KLAVIYO_GET_CAMPAIGN",
    /**
     * Retrieve campaigns from your klaviyo account. this action allows you to fetch campaigns with optional filtering and sorting. klaviyo requires specifying a channel (email or sms) to list campaigns. you can add additional filters for status, name, creation date, and other attributes. results are paginated with a default of 10 campaigns per page. rate limits: 10/s burst, 150/m steady. required scope: `campaigns:read`. preconditions: - valid api key with campaigns:read scope - channel must be specified (email or sms) - additional filter syntax must be valid if provided
     */
    GET_CAMPAIGNS: "KLAVIYO_GET_CAMPAIGNS",
    /**
     * Return all messages that belong to the given campaign.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_CAMPAIGN_MESSAGES: "KLAVIYO_GET_CAMPAIGN_CAMPAIGN_MESSAGES",
    /**
     * Returns a specific message based on a required id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_MESSAGE: "KLAVIYO_GET_CAMPAIGN_MESSAGE",
    /**
     * Return the related campaign<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_MESSAGE_CAMPAIGN: "KLAVIYO_GET_CAMPAIGN_MESSAGE_CAMPAIGN",
    /**
     * Returns the id of the related campaign<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN: "KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_CAMPAIGN",
    /**
     * Returns the id of the related template<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read` `templates:read`
     */
    GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE: "KLAVIYO_GET_CAMPAIGN_MESSAGE_RELATIONSHIPS_TEMPLATE",
    /**
     * Return the related template<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read` `templates:read`
     */
    GET_CAMPAIGN_MESSAGE_TEMPLATE: "KLAVIYO_GET_CAMPAIGN_MESSAGE_TEMPLATE",
    /**
     * Get estimated recipients for a given campaign id using `create campaign recipient estimation job`. rate limits are 10/s burst and 150/m steady. required scope: `campaigns:read`.
     */
    GET_CAMPAIGN_RECIPIENT_ESTIMATION: "KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION",
    /**
     * Retrieve the status of a recipient estimation job triggered with the `create campaign recipient estimation job` endpoint.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB: "KLAVIYO_GET_CAMPAIGN_RECIPIENT_ESTIMATION_JOB",
    /**
     * Returns the ids of all messages associated with the given campaign.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES: "KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_CAMPAIGN_MESSAGES",
    /**
     * Returns the ids of all tags associated with the given campaign.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `campaigns:read` `tags:read`
     */
    GET_CAMPAIGN_RELATIONSHIPS_TAGS: "KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS",
    /**
     * Get a campaign send job<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:read`
     */
    GET_CAMPAIGN_SEND_JOB: "KLAVIYO_GET_CAMPAIGN_SEND_JOB",
    /**
     * Return all tags that belong to the given campaign.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `campaigns:read` `tags:read`
     */
    GET_CAMPAIGN_TAGS: "KLAVIYO_GET_CAMPAIGN_TAGS",
    /**
     * Retrieve up to 100 account catalog categories, sortable by creation date. only `$custom` integration and `$default` catalog types supported. rate limits are 350/s and 3500/m. requires `catalogs:read` scope.
     */
    GET_CATALOG_CATEGORIES: "KLAVIYO_GET_CATALOG_CATEGORIES",
    /**
     * Get a catalog category with the given category id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CATALOG_CATEGORY: "KLAVIYO_GET_CATALOG_CATEGORY",
    /**
     * Retrieve up to 100 sorted items per request from a category using the category id. sort by 'created' field. rate limits are 350/s burst and 3500/m steady. requires 'catalogs:read' scope.
     */
    GET_CATALOG_CATEGORY_ITEMS: "KLAVIYO_GET_CATALOG_CATEGORY_ITEMS",
    /**
     * Get all items in the given category id. returns a maximum of 100 items per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: "KLAVIYO_GET_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS",
    /**
     * Get a specific catalog item with the given item id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CATALOG_ITEM: "KLAVIYO_GET_CATALOG_ITEM",
    /**
     * Retrieve up to 100 sorted catalog items per account, with `$custom` integration and `$default` type. rate limits: 350/s burst, 3500/m steady. scope required: `catalogs:read`.
     */
    GET_CATALOG_ITEMS: "KLAVIYO_GET_CATALOG_ITEMS",
    /**
     * Retrieve the catalog categories for an item by id, sorted by 'created' date, with a 100-category maximum per request. rate limits: 350/s burst, 3500/m steady. requires 'catalogs:read' scope.
     */
    GET_CATALOG_ITEM_CATEGORIES: "KLAVIYO_GET_CATALOG_ITEM_CATEGORIES",
    /**
     * Get all catalog categories that a particular item is in. returns a maximum of 100 categories per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: "KLAVIYO_GET_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES",
    /**
     * Retrieve up to 100 variants per request for a specific item id, sortable by creation date. rate limits are 350/s burst and 3500/m steady. requires 'catalogs:read' scope.
     */
    GET_CATALOG_ITEM_VARIANTS: "KLAVIYO_GET_CATALOG_ITEM_VARIANTS",
    /**
     * Get a catalog item variant with the given variant id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CATALOG_VARIANT: "KLAVIYO_GET_CATALOG_VARIANT",
    /**
     * Retrieve up to 100 account variants per request, sortable by creation date. supports only `$custom` integration and `$default` catalog types. rate limits are 350/s burst and 3500/m steady. requires `catalogs:read` scope.
     */
    GET_CATALOG_VARIANTS: "KLAVIYO_GET_CATALOG_VARIANTS",
    /**
     * Get a specific coupon with the given coupon id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupons:read`
     */
    GET_COUPON: "KLAVIYO_GET_COUPON",
    /**
     * Get all coupons in an account. to learn more, see our [coupons api guide](https://developers.klaviyo.com/en/docs/use klaviyos coupons api).<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupons:read`
     */
    GET_COUPONS: "KLAVIYO_GET_COUPONS",
    /**
     * Returns a coupon code specified by the given identifier.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `coupon-codes:read`
     */
    GET_COUPON_CODE: "KLAVIYO_GET_COUPON_CODE",
    /**
     * Obtains coupon codes using necessary coupon or profile filters. rate limits: 350/s, 3500/m. requires 'coupon-codes:read' scope.
     */
    GET_COUPON_CODES: "KLAVIYO_GET_COUPON_CODES",
    /**
     * Gets a list of coupon codes associated with the given coupon id<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupon-codes:read`
     */
    GET_COUPON_CODES_FOR_COUPON: "KLAVIYO_GET_COUPON_CODES_FOR_COUPON",
    /**
     * Get a coupon code bulk create job with the given job id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupon-codes:read`
     */
    GET_COUPON_CODE_BULK_CREATE_JOB: "KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOB",
    /**
     * Get all coupon code bulk create jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupon-codes:read`
     */
    GET_COUPON_CODE_BULK_CREATE_JOBS: "KLAVIYO_GET_COUPON_CODE_BULK_CREATE_JOBS",
    /**
     * Gets a list of coupon code relationships associated with the given coupon id<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupon-codes:read`
     */
    GET_COUPON_CODE_RELATIONSHIPS_COUPON: "KLAVIYO_GET_COUPON_CODE_RELATIONSHIPS_COUPON",
    /**
     * Get the coupon associated with a given coupon code id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupons:read`
     */
    GET_COUPON_FOR_COUPON_CODE: "KLAVIYO_GET_COUPON_FOR_COUPON_CODE",
    /**
     * Gets the coupon relationship associated with the given coupon code id<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupons:read`
     */
    GET_COUPON_RELATIONSHIPS_COUPON_CODES: "KLAVIYO_GET_COUPON_RELATIONSHIPS_COUPON_CODES",
    /**
     * Get a catalog category bulk create job with the given job id. an `include` parameter can be provided to get the following related resource data: `categories`.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CREATE_CATEGORIES_JOB: "KLAVIYO_GET_CREATE_CATEGORIES_JOB",
    /**
     * Get all catalog category bulk create jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CREATE_CATEGORIES_JOBS: "KLAVIYO_GET_CREATE_CATEGORIES_JOBS",
    /**
     * Get a catalog item bulk create job with the given job id. an `include` parameter can be provided to get the following related resource data: `items`.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CREATE_ITEMS_JOB: "KLAVIYO_GET_CREATE_ITEMS_JOB",
    /**
     * Get all catalog item bulk create jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CREATE_ITEMS_JOBS: "KLAVIYO_GET_CREATE_ITEMS_JOBS",
    /**
     * Get a catalog variant bulk create job with the given job id. an `include` parameter can be provided to get the following related resource data: `variants`.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CREATE_VARIANTS_JOB: "KLAVIYO_GET_CREATE_VARIANTS_JOB",
    /**
     * Get all catalog variant bulk create jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_CREATE_VARIANTS_JOBS: "KLAVIYO_GET_CREATE_VARIANTS_JOBS",
    /**
     * Get a catalog category bulk delete job with the given job id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_DELETE_CATEGORIES_JOB: "KLAVIYO_GET_DELETE_CATEGORIES_JOB",
    /**
     * Get all catalog category bulk delete jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_DELETE_CATEGORIES_JOBS: "KLAVIYO_GET_DELETE_CATEGORIES_JOBS",
    /**
     * Get a catalog item bulk delete job with the given job id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_DELETE_ITEMS_JOB: "KLAVIYO_GET_DELETE_ITEMS_JOB",
    /**
     * Get all catalog item bulk delete jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_DELETE_ITEMS_JOBS: "KLAVIYO_GET_DELETE_ITEMS_JOBS",
    /**
     * Get a catalog variant bulk delete job with the given job id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_DELETE_VARIANTS_JOB: "KLAVIYO_GET_DELETE_VARIANTS_JOB",
    /**
     * Get all catalog variant bulk delete jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_DELETE_VARIANTS_JOBS: "KLAVIYO_GET_DELETE_VARIANTS_JOBS",
    /**
     * Get an event with the given event id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `events:read`
     */
    GET_EVENT: "KLAVIYO_GET_EVENT",
    /**
     * Get all events in an account requests can be sorted by the following fields: `datetime`, `timestamp` returns a maximum of 200 events per page.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `events:read`
     */
    GET_EVENTS: "KLAVIYO_GET_EVENTS",
    /**
     * Get the metric for an event with the given event id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `events:read` `metrics:read`
     */
    GET_EVENT_METRIC: "KLAVIYO_GET_EVENT_METRIC",
    /**
     * Get the profile associated with an event with the given event id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `events:read` `profiles:read`
     */
    GET_EVENT_PROFILE: "KLAVIYO_GET_EVENT_PROFILE",
    /**
     * Get a list of related metrics for an event<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `events:read` `metrics:read`
     */
    GET_EVENT_RELATIONSHIPS_METRIC: "KLAVIYO_GET_EVENT_RELATIONSHIPS_METRIC",
    /**
     * Get profile [relationships](https://developers.klaviyo.com/en/reference/api overview#relationships) for an event with the given event id.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `events:read` `profiles:read`
     */
    GET_EVENT_RELATIONSHIPS_PROFILE: "KLAVIYO_GET_EVENT_RELATIONSHIPS_PROFILE",
    /**
     * Get a flow with the given flow id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW: "KLAVIYO_GET_FLOW",
    /**
     * Get all flows in an account. returns a maximum of 50 flows per request, which can be paginated with cursor-based pagination.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOWS: "KLAVIYO_GET_FLOWS",
    /**
     * Get a flow action from a flow with the given flow action id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_ACTION: "KLAVIYO_GET_FLOW_ACTION",
    /**
     * Get the flow action for a flow message with the given message id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_ACTION_FOR_MESSAGE: "KLAVIYO_GET_FLOW_ACTION_FOR_MESSAGE",
    /**
     * Retrieve up to 50 flow messages per request by action id, sortable by various fields, with ascending/descending options, and paginated using `page[size]` and `page[number]`. rate limits: 3/s burst, 60/m steady. scope required: `flows:read`.
     */
    GET_FLOW_ACTION_MESSAGES: "KLAVIYO_GET_FLOW_ACTION_MESSAGES",
    /**
     * Get the flow associated with the given action id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_ACTION_RELATIONSHIPS_FLOW: "KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_FLOW",
    /**
     * Retrieves up to 50 flow message relationships per request for a specified flow action id, with cursor pagination. rate limits: 3/s burst, 60/min steady. requires `flows:read` scope.
     */
    GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES: "KLAVIYO_GET_FLOW_ACTION_RELATIONSHIPS_MESSAGES",
    /**
     * Get all flow actions associated with the given flow id. returns a maximum of 50 flows per request, which can be paginated with cursor-based pagination.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_FLOW_ACTIONS: "KLAVIYO_GET_FLOW_FLOW_ACTIONS",
    /**
     * Get the flow associated with the given action id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_FOR_FLOW_ACTION: "KLAVIYO_GET_FLOW_FOR_FLOW_ACTION",
    /**
     * Get the flow message of a flow with the given message id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_MESSAGE: "KLAVIYO_GET_FLOW_MESSAGE",
    /**
     * Get the [relationship](https://developers.klaviyo.com/en/reference/api overview#relationships) for a flow message's flow action, given the flow id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read`
     */
    GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION: "KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_ACTION",
    /**
     * Returns the id of the related template<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `templates:read`
     */
    GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE: "KLAVIYO_GET_FLOW_MESSAGE_RELATIONSHIPS_TEMPLATE",
    /**
     * Return the related template<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `templates:read`
     */
    GET_FLOW_MESSAGE_TEMPLATE: "KLAVIYO_GET_FLOW_MESSAGE_TEMPLATE",
    /**
     * Retrieve all flow action relationships for a specific flow id, sortable by `id`, `status`, `created`, `updated`. refine with filters, max 50 per page, paginated by `page[size]` and `page[number]`. rate limits: burst 3/s, steady 60/m. scope: `flows:read`.
     */
    GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS: "KLAVIYO_GET_FLOW_RELATIONSHIPS_FLOW_ACTIONS",
    /**
     * Return the tag ids of all tags associated with the given flow.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read` `tags:read`
     */
    GET_FLOW_RELATIONSHIPS_TAGS: "KLAVIYO_GET_FLOW_RELATIONSHIPS_TAGS",
    /**
     * Return all tags associated with the given flow id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read` `tags:read`
     */
    GET_FLOW_TAGS: "KLAVIYO_GET_FLOW_TAGS",
    /**
     * Get the form with the given id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_FORM: "KLAVIYO_GET_FORM",
    /**
     * Get all forms in an account.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_FORMS: "KLAVIYO_GET_FORMS",
    /**
     * Get the form associated with the given form version.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_FORM_FOR_FORM_VERSION: "KLAVIYO_GET_FORM_FOR_FORM_VERSION",
    /**
     * Get the id of the form associated with the given form version.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_FORM_ID_FOR_FORM_VERSION: "KLAVIYO_GET_FORM_ID_FOR_FORM_VERSION",
    /**
     * Get the form version with the given id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_FORM_VERSION: "KLAVIYO_GET_FORM_VERSION",
    /**
     * Get the image with the given image id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `images:read`
     */
    GET_IMAGE: "KLAVIYO_GET_IMAGE",
    /**
     * Get all images in an account.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `images:read`
     */
    GET_IMAGES: "KLAVIYO_GET_IMAGES",
    /**
     * Api allows 75 req/sec and 700 req/min, but with 'profile count' param, it's 1 req/sec and 15 req/min. 'lists:read' scope needed. see developer guide for details.
     */
    GET_LIST: "KLAVIYO_GET_LIST",
    /**
     * Retrieve marketing lists from your klaviyo account. this action allows you to fetch lists with optional filtering and sorting. you can filter by name, creation date, and other attributes. results are paginated with a default of 10 lists per page. rate limits: 75/s burst, 700/m steady. required scope: `lists:read`. preconditions: - valid api key with lists:read scope - filter syntax must be valid if provided
     */
    GET_LISTS: "KLAVIYO_GET_LISTS",
    /**
     * Retrieve profiles in a list by id, filterable by email/phone/push token/join date, sortable by join date. regular rate limit: 75/s, 700/m; with predictive analytics: 10/s, 150/m. details at klaviyo guide. scopes required: lists:read, profiles:read.
     */
    GET_LIST_PROFILES: "KLAVIYO_GET_LIST_PROFILES",
    /**
     * Get profile membership [relationships](https://developers.klaviyo.com/en/reference/api overview#relationships) for a list with the given list id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `lists:read` `profiles:read`
     */
    GET_LIST_RELATIONSHIPS_PROFILES: "KLAVIYO_GET_LIST_RELATIONSHIPS_PROFILES",
    /**
     * Returns the tag ids of all tags associated with the given list.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `lists:read` `tags:read`
     */
    GET_LIST_RELATIONSHIPS_TAGS: "KLAVIYO_GET_LIST_RELATIONSHIPS_TAGS",
    /**
     * Return all tags associated with the given list id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `lists:read` `tags:read`
     */
    GET_LIST_TAGS: "KLAVIYO_GET_LIST_TAGS",
    /**
     * Get a metric with the given metric id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `metrics:read`
     */
    GET_METRIC: "KLAVIYO_GET_METRIC",
    /**
     * Get all metrics in an account. requests can be filtered by the following fields: integration `name`, integration `category` returns a maximum of 200 results per page.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `metrics:read`
     */
    GET_METRICS: "KLAVIYO_GET_METRICS",
    /**
     * Get the profile with the given profile id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `profiles:read`
     */
    GET_PROFILE: "KLAVIYO_GET_PROFILE",
    /**
     * Retrieve profiles from your klaviyo account. this action allows you to fetch profiles with optional filtering and sorting. you can filter by email, external id, creation date, and other attributes. results are paginated with a configurable page size. rate limits: 75/s burst, 700/m steady (lower with predictive analytics). required scope: `profiles:read`. preconditions: - valid api key with profiles:read scope - filter syntax must be valid if provided - page size must be between 1 and 100
     */
    GET_PROFILES: "KLAVIYO_GET_PROFILES",
    /**
     * Get list memberships for a profile with the given profile id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `lists:read` `profiles:read`
     */
    GET_PROFILE_LISTS: "KLAVIYO_GET_PROFILE_LISTS",
    /**
     * Get list memberships for a profile with the given profile id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `lists:read` `profiles:read`
     */
    GET_PROFILE_RELATIONSHIPS_LISTS: "KLAVIYO_GET_PROFILE_RELATIONSHIPS_LISTS",
    /**
     * Get segment membership relationships for a profile with the given profile id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `profiles:read` `segments:read`
     */
    GET_PROFILE_RELATIONSHIPS_SEGMENTS: "KLAVIYO_GET_PROFILE_RELATIONSHIPS_SEGMENTS",
    /**
     * Get segment memberships for a profile with the given profile id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `profiles:read` `segments:read`
     */
    GET_PROFILE_SEGMENTS: "KLAVIYO_GET_PROFILE_SEGMENTS",
    /**
     * Fetch a segment by id with default rates of 75/s and 700/m, or with `additional-fields` at 1/s and 15/m. for details, visit the provided guide. required scope: `segments:read`.
     */
    GET_SEGMENT: "KLAVIYO_GET_SEGMENT",
    /**
     * Fetch segments from an account with filters like `name`, `created`, and `updated`. max 10 results/page. rate limits are 75/s burst, 700/m steady. requires `segments:read` scope.
     */
    GET_SEGMENTS: "KLAVIYO_GET_SEGMENTS",
    /**
     * Retrieve profiles in a segment by id, filtering by email, phone, token, or join date, and sorting by join date. rate limit: 75/s burst, 700/m steady. requires profiles:read and segments:read scopes.
     */
    GET_SEGMENT_PROFILES: "KLAVIYO_GET_SEGMENT_PROFILES",
    /**
     * Get all profile membership [relationships](https://developers.klaviyo.com/en/reference/api overview#relationships) for the given segment id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `profiles:read` `segments:read`
     */
    GET_SEGMENT_RELATIONSHIPS_PROFILES: "KLAVIYO_GET_SEGMENT_RELATIONSHIPS_PROFILES",
    /**
     * If `related resource` is `tags`, returns the tag ids of all tags associated with the given segment id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `segments:read` `tags:read`
     */
    GET_SEGMENT_RELATIONSHIPS_TAGS: "KLAVIYO_GET_SEGMENT_RELATIONSHIPS_TAGS",
    /**
     * Return all tags associated with the given segment id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `segments:read` `tags:read`
     */
    GET_SEGMENT_TAGS: "KLAVIYO_GET_SEGMENT_TAGS",
    /**
     * Retrieve the tag with the given tag id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read`
     */
    GET_TAG: "KLAVIYO_GET_TAG",
    /**
     * Retrieve up to 50 account tags at once, filterable/sortable by name or id, with cursor pagination. rate limits: 3/s burst, 60/m steady. requires `tags:read` scope.
     */
    GET_TAGS: "KLAVIYO_GET_TAGS",
    /**
     * Retrieve the tag group with the given tag group id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read`
     */
    GET_TAG_GROUP: "KLAVIYO_GET_TAG_GROUP",
    /**
     * Retrieve up to 25 tag groups per account, sortable/filterable by specific attributes. default group included. supports cursor pagination and adheres to rate limits of 3 requests per second and 60 per minute. requires `tags:read` scope.
     */
    GET_TAG_GROUPS: "KLAVIYO_GET_TAG_GROUPS",
    /**
     * Returns the tag ids of all tags inside the given tag group.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read`
     */
    GET_TAG_GROUP_RELATIONSHIPS_TAGS: "KLAVIYO_GET_TAG_GROUP_RELATIONSHIPS_TAGS",
    /**
     * Return the tags for a given tag group id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read`
     */
    GET_TAG_GROUP_TAGS: "KLAVIYO_GET_TAG_GROUP_TAGS",
    /**
     * Returns the ids of all campaigns associated with the given tag.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `campaigns:read` `tags:read`
     */
    GET_TAG_RELATIONSHIPS_CAMPAIGNS: "KLAVIYO_GET_TAG_RELATIONSHIPS_CAMPAIGNS",
    /**
     * Returns the ids of all flows associated with the given tag.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:read` `tags:read`
     */
    GET_TAG_RELATIONSHIPS_FLOWS: "KLAVIYO_GET_TAG_RELATIONSHIPS_FLOWS",
    /**
     * Returns the ids of all lists associated with the given tag.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `lists:read` `tags:read`
     */
    GET_TAG_RELATIONSHIPS_LISTS: "KLAVIYO_GET_TAG_RELATIONSHIPS_LISTS",
    /**
     * Returns the ids of all segments associated with the given tag.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `segments:read` `tags:read`
     */
    GET_TAG_RELATIONSHIPS_SEGMENTS: "KLAVIYO_GET_TAG_RELATIONSHIPS_SEGMENTS",
    /**
     * Returns the id of the tag group related to the given tag.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read`
     */
    GET_TAG_RELATIONSHIPS_TAG_GROUP: "KLAVIYO_GET_TAG_RELATIONSHIPS_TAG_GROUP",
    /**
     * Returns the tag group resource for a given tag id.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read`
     */
    GET_TAG_TAG_GROUP: "KLAVIYO_GET_TAG_TAG_GROUP",
    /**
     * Get a template with the given template id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `templates:read`
     */
    GET_TEMPLATE: "KLAVIYO_GET_TEMPLATE",
    /**
     * Retrieve account templates with sorting options (`id`, `name`, `created`, `updated`). limit of 10 results per page, rate limits at 10/s burst and 150/m steady. requires `templates:read` scope.
     */
    GET_TEMPLATES: "KLAVIYO_GET_TEMPLATES",
    /**
     * Get a catalog category bulk update job with the given job id. an `include` parameter can be provided to get the following related resource data: `categories`.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_UPDATE_CATEGORIES_JOB: "KLAVIYO_GET_UPDATE_CATEGORIES_JOB",
    /**
     * Get all catalog category bulk update jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_UPDATE_CATEGORIES_JOBS: "KLAVIYO_GET_UPDATE_CATEGORIES_JOBS",
    /**
     * Get a catalog item bulk update job with the given job id. an `include` parameter can be provided to get the following related resource data: `items`.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_UPDATE_ITEMS_JOB: "KLAVIYO_GET_UPDATE_ITEMS_JOB",
    /**
     * Get all catalog item bulk update jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_UPDATE_ITEMS_JOBS: "KLAVIYO_GET_UPDATE_ITEMS_JOBS",
    /**
     * Get a catalog variate bulk update job with the given job id. an `include` parameter can be provided to get the following related resource data: `variants`.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_UPDATE_VARIANTS_JOB: "KLAVIYO_GET_UPDATE_VARIANTS_JOB",
    /**
     * Get all catalog variant bulk update jobs. returns a maximum of 100 jobs per request.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `catalogs:read`
     */
    GET_UPDATE_VARIANTS_JOBS: "KLAVIYO_GET_UPDATE_VARIANTS_JOBS",
    /**
     * Get the form versions for the given form.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_VERSIONS_FOR_FORM: "KLAVIYO_GET_VERSIONS_FOR_FORM",
    /**
     * Get the ids of the form versions for the given form.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `forms:read`
     */
    GET_VERSION_IDS_FOR_FORM: "KLAVIYO_GET_VERSION_IDS_FOR_FORM",
    /**
     * Get the webhook with the given id.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:read`
     */
    GET_WEBHOOK: "KLAVIYO_GET_WEBHOOK",
    /**
     * Get all webhooks in an account.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:read`
     */
    GET_WEBHOOKS: "KLAVIYO_GET_WEBHOOKS",
    /**
     * Get the webhook topic with the given id.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:read`
     */
    GET_WEBHOOK_TOPIC: "KLAVIYO_GET_WEBHOOK_TOPIC",
    /**
     * Get all webhook topics in a klaviyo account.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:read`
     */
    GET_WEBHOOK_TOPICS: "KLAVIYO_GET_WEBHOOK_TOPICS",
    /**
     * Queue a task to merge one source profile into a destination profile using their ids. deletes the source afterwards. visit help center for details. rate limits: 10/s burst, 150/m steady. needs `profiles:write` scope.
     */
    MERGE_PROFILES: "KLAVIYO_MERGE_PROFILES",
    /**
     * Returns the requested campaign analytics values data<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `2/m`<br>daily: `225/d` **scopes:** `campaigns:read`
     */
    QUERY_CAMPAIGN_VALUES: "KLAVIYO_QUERY_CAMPAIGN_VALUES",
    /**
     * Returns the requested flow analytics series data<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `2/m`<br>daily: `225/d` **scopes:** `flows:read`
     */
    QUERY_FLOW_SERIES: "KLAVIYO_QUERY_FLOW_SERIES",
    /**
     * Returns the requested flow analytics values data<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `2/m`<br>daily: `225/d` **scopes:** `flows:read`
     */
    QUERY_FLOW_VALUES: "KLAVIYO_QUERY_FLOW_VALUES",
    /**
     * The klaviyo endpoint fetches metric events, handling json requests for custom data queries, sorting, and filtering; offers grouping and time-based filters; requires adherence to rate limits (3 requests per second, 60 per minute) under 'metrics:read'.
     */
    QUERY_METRIC_AGGREGATES: "KLAVIYO_QUERY_METRIC_AGGREGATES",
    /**
     * Remove profiles from a klaviyo list by profile ids or email addresses. this action removes profiles from a marketing list without affecting their overall consent status. use the unsubscribe profiles action for complete unsubscribing. you can remove up to 1000 profiles per call. rate limits: 10/s burst, 150/m steady. required scopes: `lists:write` and `profiles:write`. preconditions: - either profile ids or emails must be provided (not both) - maximum 1000 profiles per call - email addresses must be valid format - the list must exist and be accessible
     */
    REMOVE_PROFILE_FROM_LIST: "KLAVIYO_REMOVE_PROFILE_FROM_LIST",
    /**
     * To delete a profile, use only one identifier: email, phone number, or id. requests are asynchronous and can be tracked. ensure legal compliance; refer to docs. rate limits: 3 per second, 60 per minute.
     */
    REQUEST_PROFILE_DELETION: "KLAVIYO_REQUEST_PROFILE_DELETION",
    /**
     * Initiate a job to create/update a batch of profiles, up to 10,000 with a max size of 5mb per request. rate limits: 10/s burst, 150/m steady. requires `lists:write` and `profiles:write` scopes. more info in the bulk profile import api guide.
     */
    SPAWN_BULK_PROFILE_IMPORT_JOB: "KLAVIYO_SPAWN_BULK_PROFILE_IMPORT_JOB",
    /**
     * Create a coupon-code-bulk-create-job to bulk create a list of coupon codes. max number of jobs queued at once we allow for is 100.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `coupon-codes:write`
     */
    SPAWN_COUPON_CODE_BULK_CREATE_JOB: "KLAVIYO_SPAWN_COUPON_CODE_BULK_CREATE_JOB",
    /**
     * Create bulk job for up to 100 catalog categories with a 5mb size limit and a max of 500 concurrent jobs. rate limits: 75/s burst, 700/m steady. requires 'catalogs:write' scope.
     */
    SPAWN_CREATE_CATEGORIES_JOB: "KLAVIYO_SPAWN_CREATE_CATEGORIES_JOB",
    /**
     * Create batches of up to 100 catalog items with a 5mb size limit using the bulk job, which allows 500 concurrent jobs. rate limits are 75/s burst and 700/m steady. requires `catalogs:write` scope.
     */
    SPAWN_CREATE_ITEMS_JOB: "KLAVIYO_SPAWN_CREATE_ITEMS_JOB",
    /**
     * Initiate a job to bulk create up to 100 catalog variants, with a 5mb payload size limit. a max of 500 jobs can run concurrently. rate limits are 75/s burst and 700/m steady. requires 'catalogs:write' scope.
     */
    SPAWN_CREATE_VARIANTS_JOB: "KLAVIYO_SPAWN_CREATE_VARIANTS_JOB",
    /**
     * Delete multiple catalog categories in bulk, with a limit of 100 per request and a 5mb payload size. a maximum of 500 concurrent jobs permitted. rate limits are 75/s burst and 700/min steady. requires `catalogs:write` scope.
     */
    SPAWN_DELETE_CATEGORIES_JOB: "KLAVIYO_SPAWN_DELETE_CATEGORIES_JOB",
    /**
     * Delete batches of catalog items with a bulk job, max 100 items/request, 5mb size limit, and up to 500 concurrent jobs. rate limits are 75/s burst and 700/m steady. requires `catalogs:write` scope.
     */
    SPAWN_DELETE_ITEMS_JOB: "KLAVIYO_SPAWN_DELETE_ITEMS_JOB",
    /**
     * Delete multiple catalog variants with a bulk job, max 100 per request, 5mb size limit. only 500 jobs can run concurrently. rate limits: 75/s burst, 700/m steady. requires `catalogs:write` scope.
     */
    SPAWN_DELETE_VARIANTS_JOB: "KLAVIYO_SPAWN_DELETE_VARIANTS_JOB",
    /**
     * Create a job to bulk update up to 100 categories, with a 5mb size limit and a maximum of 500 concurrent jobs. burst rate limit is 75/s, steady is 700/m. requires `catalogs:write` scope.
     */
    SPAWN_UPDATE_CATEGORIES_JOB: "KLAVIYO_SPAWN_UPDATE_CATEGORIES_JOB",
    /**
     * You can bulk update up to 100 catalog items with a 5mb payload limit. a max of 500 jobs can run concurrently. rate limits are 75 requests/second and 700 requests/minute. required scope: `catalogs:write`.
     */
    SPAWN_UPDATE_ITEMS_JOB: "KLAVIYO_SPAWN_UPDATE_ITEMS_JOB",
    /**
     * Create a job to bulk update up to 100 catalog variants with a 5mb payload limit. a max of 500 jobs may run concurrently. rate limits are 75/s burst and 700/m steady. requires `catalogs:write` scope.
     */
    SPAWN_UPDATE_VARIANTS_JOB: "KLAVIYO_SPAWN_UPDATE_VARIANTS_JOB",
    /**
     * The api supports double opt-in for marketing, with 'historical import' bypassing consent. it resets opt-outs for returning users. caps at 1000 profiles, 75/s, and 700/min. needs 'lists:write', 'profiles:write', 'subscriptions:write' permissions.
     */
    SUBSCRIBE_PROFILES: "KLAVIYO_SUBSCRIBE_PROFILES",
    /**
     * Suppress profiles by email, segment, or list id to stop email marketing, regardless of consent. view guides for details. max 100 emails per request, with rate limits of 75/s and 700/m. scopes: profiles:write, subscriptions:write.
     */
    SUPPRESS_PROFILES: "KLAVIYO_SUPPRESS_PROFILES",
    /**
     * This endpoint unsubscribes a push token, for use with klaviyo's mobile sdks and a public api key. push notifications must be on. rate limits are 3/s and 60/m.
     */
    UNREGISTER_CLIENT_PUSH_TOKEN: "KLAVIYO_UNREGISTER_CLIENT_PUSH_TOKEN",
    /**
     * Opt-out profiles from email or sms marketing. unsubscribe up to 100 profiles at a time with burst (75/s) and steady (700/m) rate limits. use different method to remove without affecting subscriptions. more on consent and removal in the provided links.
     */
    UNSUBSCRIBE_PROFILES: "KLAVIYO_UNSUBSCRIBE_PROFILES",
    /**
     * Remove 'user suppressed' blocks on profiles manually via email, segment, or list id. does not affect unsubscribes or other suppressions. limits: 100 emails per request, 75/s burst, 700/m steady. scope: 'subscriptions:write'.
     */
    UNSUPPRESS_PROFILES: "KLAVIYO_UNSUPPRESS_PROFILES",
    /**
     * Update a campaign with the specified attributes. this action allows you to modify campaign settings including name, audiences, and send strategy. only the fields you provide will be updated; others remain unchanged. rate limits: 10/s burst, 150/m steady. required scope: `campaigns:write`. preconditions: - valid api key with campaigns:write scope - campaign id must exist and be accessible - campaign must be in a state that allows updates (usually draft status) - send strategy options must match the selected method
     */
    UPDATE_CAMPAIGN: "KLAVIYO_UPDATE_CAMPAIGN",
    /**
     * Update a campaign message<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    UPDATE_CAMPAIGN_MESSAGE: "KLAVIYO_UPDATE_CAMPAIGN_MESSAGE",
    /**
     * Permanently cancel the campaign, setting the status to canceled or revert the campaign, setting the status back to draft<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `campaigns:write`
     */
    UPDATE_CAMPAIGN_SEND_JOB: "KLAVIYO_UPDATE_CAMPAIGN_SEND_JOB",
    /**
     * Update a catalog category with the given category id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    UPDATE_CATALOG_CATEGORY: "KLAVIYO_UPDATE_CATALOG_CATEGORY",
    /**
     * Update item relationships for the given category id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS: "KLAVIYO_UPDATE_CATALOG_CATEGORY_RELATIONSHIPS_ITEMS",
    /**
     * Update a catalog item with the given item id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    UPDATE_CATALOG_ITEM: "KLAVIYO_UPDATE_CATALOG_ITEM",
    /**
     * Update catalog category relationships for the given item id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES: "KLAVIYO_UPDATE_CATALOG_ITEM_RELATIONSHIPS_CATEGORIES",
    /**
     * Update a catalog item variant with the given variant id.<br><br>*rate limits*:<br>burst: `75/s`<br>steady: `700/m` **scopes:** `catalogs:write`
     */
    UPDATE_CATALOG_VARIANT: "KLAVIYO_UPDATE_CATALOG_VARIANT",
    /**
     * *rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `coupons:write`
     */
    UPDATE_COUPON: "KLAVIYO_UPDATE_COUPON",
    /**
     * Updates a coupon code specified by the given identifier synchronously. we allow updating the 'status' and 'expires at' of coupon codes.<br><br>*rate limits*:<br>burst: `350/s`<br>steady: `3500/m` **scopes:** `coupon-codes:write`
     */
    UPDATE_COUPON_CODE: "KLAVIYO_UPDATE_COUPON_CODE",
    /**
     * Update the status of a flow with the given flow id, and all actions in that flow.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `flows:write`
     */
    UPDATE_FLOW_STATUS: "KLAVIYO_UPDATE_FLOW_STATUS",
    /**
     * Update the image with the given image id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `images:write`
     */
    UPDATE_IMAGE: "KLAVIYO_UPDATE_IMAGE",
    /**
     * Update the name of a list with the given list id.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `lists:write`
     */
    UPDATE_LIST: "KLAVIYO_UPDATE_LIST",
    /**
     * Update profiles with the provided id. setting fields to `null` clears them; omitting fields retains existing data. rate limits: 75/s burst, 700/m steady. required scope: `profiles:write`.
     */
    UPDATE_PROFILE: "KLAVIYO_UPDATE_PROFILE",
    /**
     * Update a segment with the given segment id.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m`<br>daily: `100/d` **scopes:** `segments:write`
     */
    UPDATE_SEGMENT: "KLAVIYO_UPDATE_SEGMENT",
    /**
     * Update the tag with the given tag id. only a tag's `name` can be changed. a tag cannot be moved from one tag group to another.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read` `tags:write`
     */
    UPDATE_TAG: "KLAVIYO_UPDATE_TAG",
    /**
     * Update the tag group with the given tag group id. only a tag group's `name` can be changed. a tag group's `exclusive` or `default` value cannot be changed.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `60/m` **scopes:** `tags:read` `tags:write`
     */
    UPDATE_TAG_GROUP: "KLAVIYO_UPDATE_TAG_GROUP",
    /**
     * Update a template with the given template id. does not currently update drag & drop templates.<br><br>*rate limits*:<br>burst: `10/s`<br>steady: `150/m` **scopes:** `templates:write`
     */
    UPDATE_TEMPLATE: "KLAVIYO_UPDATE_TEMPLATE",
    /**
     * Update the webhook with the given id.<br><br>*rate limits*:<br>burst: `1/s`<br>steady: `15/m` **scopes:** `webhooks:write`
     */
    UPDATE_WEBHOOK: "KLAVIYO_UPDATE_WEBHOOK",
    /**
     * Upload an image from a file. if you want to import an image from an existing url or a data uri, use the upload image from url endpoint instead.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `100/m`<br>daily: `100/d` **scopes:** `images:write`
     */
    UPLOAD_IMAGE_FROM_FILE: "KLAVIYO_UPLOAD_IMAGE_FROM_FILE",
    /**
     * Import an image from a url or data uri. if you want to upload an image from a file, use the upload image from file endpoint instead.<br><br>*rate limits*:<br>burst: `3/s`<br>steady: `100/m`<br>daily: `100/d` **scopes:** `images:write`
     */
    UPLOAD_IMAGE_FROM_URL: "KLAVIYO_UPLOAD_IMAGE_FROM_URL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KLAVIYO".
 */
export type KLAVIYO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KLAVIYO".
 */
export type KLAVIYO_TRIGGER_EVENTS = {}
