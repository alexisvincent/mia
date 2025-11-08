// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_PLACE tool input.
 */
type BEACONSTAC_CREATE_PLACE_INPUT = {
  /**
   * Address
   * @description Physical address of the place.
   */
  address?: string;
  /**
   * Latitude
   * @description Latitude coordinate of the place.
   */
  latitude?: string;
  /**
   * Longitude
   * @description Longitude coordinate of the place.
   */
  longitude?: string;
  /**
   * Name
   * @description Name of the place.
   */
  name?: string;
  /**
   * Organization
   * @description ID of the organization this place belongs to.
   */
  organization?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_PLACE tool output.
 */
type BEACONSTAC_CREATE_PLACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Physical address of the place.
       * @default null
       */
      address: string | null;
      /**
       * Created
       * @description Timestamp when the place was created.
       * @default null
       */
      created: string | null;
      /**
       * Id
       * @description Unique identifier of the place.
       * @default null
       */
      id: number | null;
      /**
       * Latitude
       * @description Latitude coordinate of the place.
       * @default null
       */
      latitude: string | null;
      /**
       * Longitude
       * @description Longitude coordinate of the place.
       * @default null
       */
      longitude: string | null;
      /**
       * Name
       * @description Name of the place.
       * @default null
       */
      name: string | null;
      /**
       * Organization
       * @description ID of the organization this place belongs to.
       * @default null
       */
      organization: number | null;
      /**
       * Updated
       * @description Timestamp when the place was last updated.
       * @default null
       */
      updated: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_QR_TEMPLATE tool input.
 */
type BEACONSTAC_CREATE_QR_TEMPLATE_INPUT = {
  /**
   * Background Color
   * @description Hex color code for background
   * @default null
   */
  backgroundColor: unknown;
  /**
   * Background Image
   * Format: uri
   * @description URL of the background image
   * @default null
   */
  backgroundImage: unknown;
  /**
   * Color Dark
   * @description Hex color code for dark modules
   * @default null
   */
  colorDark: unknown;
  /**
   * Color Light
   * @description Hex color code for light background
   * @default null
   */
  colorLight: unknown;
  /**
   * Data Pattern
   * @description Pattern style for data modules
   * @default null
   * @enum {string|null}
   */
  dataPattern: "square" | "circle" | "kite" | "left-diamond" | "right-diamond" | null;
  /**
   * Default
   * @description Whether to set this template as the default for the organization
   * @default null
   */
  default: boolean | null;
  /**
   * Dot Scale
   * @description Scale factor for the QR Code dots (0-1)
   * @default null
   */
  dotScale: number | null;
  /**
   * Eye Ball Color
   * @description Hex color code for eye-ball modules
   * @default null
   */
  eyeBallColor: unknown;
  /**
   * Eye Ball Shape
   * @description Shape of the eye-ball modules
   * @default null
   * @enum {string|null}
   */
  eyeBallShape: "square" | "circle" | "rounded" | "left-leaf" | "right-leaf" | "left-diamond" | "right-diamond" | null;
  /**
   * Eye Frame Color
   * @description Hex color code for eye-frame modules
   * @default null
   */
  eyeFrameColor: unknown;
  /**
   * Eye Frame Shape
   * @description Shape of the eye-frame modules
   * @default null
   * @enum {string|null}
   */
  eyeFrameShape: "square" | "circle" | "rounded" | "left-leaf" | "right-leaf" | null;
  /**
   * Frame Color
   * @description Hex color code for frame
   * @default null
   */
  frameColor: unknown;
  /**
   * Frame Style
   * @description Style of the QR Code frame
   * @default null
   * @enum {string|null}
   */
  frameStyle: "none" | "banner-top" | "box-top" | "box-bottom" | "banner-bottom" | "balloon-top" | "circular" | null;
  /**
   * Frame Text
   * @description Text displayed within the frame
   * @default null
   */
  frameText: string | null;
  /**
   * Frame Text Color
   * @description Hex color code for frame text
   * @default null
   */
  frameTextColor: unknown;
  /**
   * Gradient Type
   * @description Gradient type for the QR Code
   * @default null
   * @enum {string|null}
   */
  gradientType: "none" | "lineaar" | "radial" | null;
  /**
   * Logo Image
   * Format: uri
   * @description URL of the logo image
   * @default null
   */
  logoImage: unknown;
  /**
   * Logo Scale
   * @description Scale factor for the logo (0.1-0.6)
   * @default null
   */
  logoScale: number | null;
  /**
   * Margin
   * @description Margin to apply around the QR Code (in pixels)
   * @default null
   */
  margin: number | null;
  /**
   * Meta
   * @description Arbitrary metadata for the QR Code template
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the QR Code template
   */
  name?: string;
  /**
   * Organization
   * @description ID of the organization to which this template belongs
   */
  organization?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_QR_TEMPLATE tool output.
 */
type BEACONSTAC_CREATE_QR_TEMPLATE_OUTPUT = {
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
 * Type of BEACONSTAC's BEACONSTAC_CREATE_TAG tool input.
 */
type BEACONSTAC_CREATE_TAG_INPUT = {
  /**
   * Name
   * @description Name of the tag.
   */
  name?: string;
  /**
   * Organization
   * @description ID of the organization this tag belongs to.
   */
  organization?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_TAG tool output.
 */
type BEACONSTAC_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the tag was created.
       * @default null
       */
      created: string | null;
      /**
       * Id
       * @description Unique identifier of the tag.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the tag.
       * @default null
       */
      name: string | null;
      /**
       * Organization
       * @description ID of the organization this tag belongs to.
       * @default null
       */
      organization: number | null;
      /**
       * Updated
       * @description Timestamp when the tag was last updated.
       * @default null
       */
      updated: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_USER tool input.
 */
type BEACONSTAC_CREATE_USER_INPUT = {
  /**
   * Billing Email
   * @description Billing email for the User.
   * @default null
   */
  billing_email: string | null;
  /**
   * Customer Plan
   * @description Customer plan for the user: ST=Starter, LT=Lite, BA=Basic, PR=Premium, RE=Reseller, WL=Whitelabel, EN=Enterprise.
   * @enum {string}
   */
  customer_plan?: "ST" | "LT" | "BA" | "PR" | "RE" | "WL" | "EN";
  /**
   * Email
   * @description Email address of the User.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the User.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the User.
   * @default null
   */
  last_name: string | null;
  /**
   * Organization
   * @description ID of the organization to which the user belongs.
   */
  organization?: number;
  /**
   * Password
   * @description Password for the User. Uses default if not provided.
   * @default null
   */
  password: string | null;
  /**
   * Profile Picture
   * @description URL to the User's profile picture.
   * @default null
   */
  profile_picture: string | null;
  /**
   * Username
   * @description Username used to login.
   */
  username?: string;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_CREATE_USER tool output.
 */
type BEACONSTAC_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billing Email
       * @description Billing email of the User.
       * @default null
       */
      billing_email: string | null;
      /**
       * Created
       * @description Timestamp when the User was created.
       * @default null
       */
      created: string | null;
      /**
       * Customer Plan
       * @description Customer plan code of the User.
       * @default null
       */
      customer_plan: string | null;
      /**
       * Date Joined
       * @description Timestamp when the User joined.
       * @default null
       */
      date_joined: string | null;
      /**
       * Email
       * @description Email address of the User.
       * @default null
       */
      email: string | null;
      /**
       * Firebase Token
       * @description Firebase token for notifications.
       * @default null
       */
      firebase_token: string | null;
      /**
       * First Name
       * @description First name of the User.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the User.
       */
      id: number;
      /**
       * Is Active
       * @description Active status of the User.
       * @default null
       */
      is_active: boolean | null;
      /**
       * Is Superuser
       * @description Superuser status of the User.
       * @default null
       */
      is_superuser: boolean | null;
      /**
       * Last Name
       * @description Last name of the User.
       * @default null
       */
      last_name: string | null;
      /**
       * Organization
       * @description Organization ID of the User.
       */
      organization: number;
      /**
       * Profile Picture
       * @description URL to the User's profile picture.
       * @default null
       */
      profile_picture: string | null;
      /**
       * Shopify Id
       * @description Shopify ID of the User.
       * @default null
       */
      shopify_id: number | null;
      /**
       * Stripe Id
       * @description Stripe ID of the User.
       * @default null
       */
      stripe_id: string | null;
      /**
       * Subscription State
       * @description Subscription state (A=Active, E=Expired, R=Removed).
       * @default null
       */
      subscription_state: string | null;
      /**
       * Updated
       * @description Timestamp when the User was last updated.
       * @default null
       */
      updated: string | null;
      /**
       * User Group
       * @description User group code (OW=Owner, AD=Admin, RO=Read-Only).
       * @default null
       */
      user_group: string | null;
      /**
       * Username
       * @description Username of the User.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_DELETE_QR_CODE tool input.
 */
type BEACONSTAC_DELETE_QR_CODE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the QR Code to delete
   */
  id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_DELETE_QR_CODE tool output.
 */
type BEACONSTAC_DELETE_QR_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deletion was successful.
       * @default true
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
 * Type of BEACONSTAC's BEACONSTAC_DELETE_QR_TEMPLATE tool input.
 */
type BEACONSTAC_DELETE_QR_TEMPLATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the QR Code template to delete
   */
  id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_DELETE_QR_TEMPLATE tool output.
 */
type BEACONSTAC_DELETE_QR_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the template deletion was successful.
       * @default true
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
 * Type of BEACONSTAC's BEACONSTAC_DELETE_TAG tool input.
 */
type BEACONSTAC_DELETE_TAG_INPUT = {
  /**
   * Tag Id
   * @description Unique identifier of the Tag to delete.
   */
  tag_id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_DELETE_TAG tool output.
 */
type BEACONSTAC_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deletion was successful.
       * @default true
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
 * Type of BEACONSTAC's BEACONSTAC_LIST_BULK_QR_CODES tool input.
 */
type BEACONSTAC_LIST_BULK_QR_CODES_INPUT = {
  /**
   * Name  Icontains
   * @description Filter collections by name containing this substring (case-insensitive).
   * @default null
   */
  name__icontains: string | null;
  /**
   * Ordering
   * @description Field to order results by. Prefix with '-' for descending. Allowed fields: name, created, updated.
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based index).
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of collections per page, must be between 1 and 100.
   * @default 10
   */
  page_size: number;
  /**
   * Qr Data Type
   * @description Filter by QR data type: 1=Website, 2=SMS, 3=Phone, 4=Email, 5=vCard, 6=Text.
   * @default null
   */
  qr_data_type: number | null;
  /**
   * Search
   * @description Full-text search on collection names.
   * @default null
   */
  search: string | null;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_BULK_QR_CODES tool output.
 */
type BEACONSTAC_LIST_BULK_QR_CODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of Bulk QR Code collections.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of Bulk QR Code collection objects.
       */
      results: {
          /**
           * Attributes
           * @description Attributes/design data for the QR Codes in this collection.
           */
          attributes: {
              [key: string]: unknown;
          };
          /**
           * Created
           * @description Timestamp when the collection was created.
           * @default null
           */
          created: string | null;
          /**
           * Id
           * @description Unique identifier of the Bulk QR Code collection.
           */
          id: number;
          /**
           * Media
           * @description Media ID associated with this collection.
           * @default null
           */
          media: number | null;
          /**
           * Media Data
           * @description Media data associated with media ID.
           * @default null
           */
          media_data: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the Bulk QR Code collection.
           */
          name: string;
          /**
           * Organization
           * @description Organization ID of this collection.
           */
          organization: number;
          /**
           * Qr Data Type
           * @description QR data type: 1=Website, 2=SMS, 3=Phone, 4=Email, 5=vCard, 6=Text.
           */
          qr_data_type: number;
          /**
           * Qr Type
           * @description QR type (1=Static).
           * @default null
           */
          qr_type: number | null;
          /**
           * Storage Url
           * @description Download URL for the zipped QR code collection.
           * @default null
           */
          storage_url: string | null;
          /**
           * Updated
           * @description Timestamp when the collection was last updated.
           * @default null
           */
          updated: string | null;
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
 * Type of BEACONSTAC's BEACONSTAC_LIST_ORGANIZATIONS tool input.
 */
type BEACONSTAC_LIST_ORGANIZATIONS_INPUT = object;

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_ORGANIZATIONS tool output.
 */
type BEACONSTAC_LIST_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the organization.
       */
      id: number;
      /**
       * Name
       * @description Human-readable name of the organization.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_PLACES tool input.
 */
type BEACONSTAC_LIST_PLACES_INPUT = {
  /**
   * Name
   * @description Filter by place name. Supports exact match.
   * @default null
   */
  name: string | null;
  /**
   * Name  Icontains
   * @description Filter by place name (case-insensitive contains).
   * @default null
   */
  name__icontains: string | null;
  /**
   * Ordering
   * @description Comma-separated ordering fields; prefix with '-' for descending. Fields: name, created, updated, address.
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of places per page, must be between 1 and 100.
   * @default 10
   */
  page_size: number;
  /**
   * Search
   * @description Search for place names matching this value (case-insensitive partial match).
   * @default null
   */
  search: string | null;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_PLACES tool output.
 */
type BEACONSTAC_LIST_PLACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of places matching the query.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of places in the current page.
       */
      results: {
          /**
           * Address
           * @description Address of the place.
           * @default null
           */
          address: string | null;
          /**
           * Beacon Count
           * @description Number of beacons associated with this place.
           * @default null
           */
          beacon_count: number | null;
          /**
           * Beacons
           * @description List of associated beacon data objects.
           * @default null
           */
          beacons: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Business Color
           * @description Business color code used in NearBee.
           * @default null
           */
          business_color: string | null;
          /**
           * Business Cover Url
           * @description Business cover URL used in NearBee.
           * @default null
           */
          business_cover_url: string | null;
          /**
           * Business Icon Url
           * @description Business icon URL used in NearBee.
           * @default null
           */
          business_icon_url: string | null;
          /**
           * Created
           * @description Timestamp when the place was created.
           * @default null
           */
          created: string | null;
          /**
           * Default Place
           * @description Whether this place is marked as default.
           * @default null
           */
          default_place: boolean | null;
          /**
           * Id
           * @description Unique identifier of the place.
           */
          id: number;
          /**
           * Latitude
           * @description Latitude coordinate of the place.
           * @default null
           */
          latitude: number | null;
          /**
           * Longitude
           * @description Longitude coordinate of the place.
           * @default null
           */
          longitude: number | null;
          /**
           * Name
           * @description Name of the place.
           */
          name: string;
          /**
           * Organization
           * @description ID of the organization this place belongs to.
           */
          organization: number;
          /**
           * Place Id
           * @description Google Place ID.
           * @default null
           */
          place_id: string | null;
          /**
           * Updated
           * @description Timestamp when the place was last updated.
           * @default null
           */
          updated: string | null;
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
 * Type of BEACONSTAC's BEACONSTAC_LIST_QR_TEMPLATES tool input.
 */
type BEACONSTAC_LIST_QR_TEMPLATES_INPUT = {
  /**
   * Name  Icontains
   * @description Case-insensitive substring to filter template names.
   * @default null
   */
  name__icontains: string | null;
  /**
   * Organization
   * @description ID of the organization to list templates for.
   */
  organization?: number;
  /**
   * Page
   * @description Page number for pagination (1-based index).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page.
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_QR_TEMPLATES tool output.
 */
type BEACONSTAC_LIST_QR_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of templates.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of QR code template objects.
       */
      results: {
          /**
           * Background Color
           * @description Hex background color.
           * @default null
           */
          backgroundColor: string | null;
          /**
           * Background Image
           * @description URL of background image.
           * @default null
           */
          backgroundImage: string | null;
          /**
           * Color Dark
           * @description Hex color for dark modules.
           * @default null
           */
          colorDark: string | null;
          /**
           * Color Light
           * @description Hex color for light modules.
           * @default null
           */
          colorLight: string | null;
          /**
           * Created
           * @description Timestamp when created.
           * @default null
           */
          created: string | null;
          /**
           * Data Pattern
           * @description Pattern of data modules (e.g., 'square').
           * @default null
           */
          dataPattern: string | null;
          /**
           * Default
           * @description True if this is the default template.
           * @default null
           */
          default: boolean | null;
          /**
           * Dot Scale
           * @description Scale factor for data dots [0-1].
           * @default null
           */
          dotScale: number | null;
          /**
           * Eye Ball Color
           * @description Color of the eye-ball.
           * @default null
           */
          eyeBallColor: string | null;
          /**
           * Eye Ball Shape
           * @description Shape of QR code eye-ball.
           * @default null
           */
          eyeBallShape: string | null;
          /**
           * Eye Frame Color
           * @description Color of the eye-frame.
           * @default null
           */
          eyeFrameColor: string | null;
          /**
           * Eye Frame Shape
           * @description Shape of QR code eye-frame.
           * @default null
           */
          eyeFrameShape: string | null;
          /**
           * Frame Color
           * @description Frame color hex code.
           * @default null
           */
          frameColor: string | null;
          /**
           * Frame Style
           * @description Style of the QR code frame.
           * @default null
           */
          frameStyle: string | null;
          /**
           * Frame Text
           * @description Text displayed in the frame.
           * @default null
           */
          frameText: string | null;
          /**
           * Frame Text Color
           * @description Color of frame text.
           * @default null
           */
          frameTextColor: string | null;
          /**
           * Gradient Type
           * @description Gradient type (none, linear, radial).
           * @default null
           */
          gradientType: string | null;
          /**
           * Id
           * @description Unique identifier of the template.
           * @default null
           */
          id: number | null;
          /**
           * Logo Background
           * @description Apply white background behind logo if true.
           * @default null
           */
          logoBackground: boolean | null;
          /**
           * Logo Image
           * @description URL of the logo image.
           * @default null
           */
          logoImage: string | null;
          /**
           * Logo Margin
           * @description Margin around logo image.
           * @default null
           */
          logoMargin: number | null;
          /**
           * Logo Scale
           * @description Scale of embedded logo [0.1-0.6].
           * @default null
           */
          logoScale: number | null;
          /**
           * Maintainer
           * @description User ID who maintains the template.
           * @default null
           */
          maintainer: number | null;
          /**
           * Margin
           * @description Margin around QR code modules.
           * @default null
           */
          margin: number | null;
          /**
           * Meta
           * @description Metadata associated with the template.
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the template.
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @description Organization ID of the template.
           * @default null
           */
          organization: number | null;
          /**
           * Updated
           * @description Timestamp when last updated.
           * @default null
           */
          updated: string | null;
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
 * Type of BEACONSTAC's BEACONSTAC_LIST_TAGS tool input.
 */
type BEACONSTAC_LIST_TAGS_INPUT = {
  /**
   * Name  Icontains
   * @description Filter tags by name containing this substring.
   * @default null
   */
  name__icontains: string | null;
  /**
   * Ordering
   * @description Field by which to order results. Prefix with '-' for descending.
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of tags per page, must be between 1 and 100.
   * @default 10
   */
  page_size: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_TAGS tool output.
 */
type BEACONSTAC_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tags matching the query.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of tags in the current page.
       */
      results: {
          /**
           * Color
           * @description Hex color code of the tag.
           * @default null
           */
          color: string | null;
          /**
           * Created
           * @description Timestamp when the tag was created.
           * @default null
           */
          created: string | null;
          /**
           * Id
           * @description Unique identifier of the tag.
           */
          id: number;
          /**
           * Maintainer
           * @description ID of the user who maintains this tag.
           * @default null
           */
          maintainer: number | null;
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
          /**
           * Organization
           * @description ID of the organization this tag belongs to.
           */
          organization: number;
          /**
           * Updated
           * @description Timestamp when the tag was last updated.
           * @default null
           */
          updated: string | null;
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
 * Type of BEACONSTAC's BEACONSTAC_LIST_USERS tool input.
 */
type BEACONSTAC_LIST_USERS_INPUT = {
  /**
   * Customer Plan
   * @description Filter by customer plan exact match.
   * @default null
   */
  customer_plan: string | null;
  /**
   * Date Joined  Gt
   * @description Filter by date joined greater than this ISO 8601 timestamp.
   * @default null
   */
  date_joined__gt: string | null;
  /**
   * Date Joined  Gte
   * @description Filter by date joined greater than or equal to this ISO 8601 timestamp.
   * @default null
   */
  date_joined__gte: string | null;
  /**
   * Date Joined  Lt
   * @description Filter by date joined less than this ISO 8601 timestamp.
   * @default null
   */
  date_joined__lt: string | null;
  /**
   * Date Joined  Lte
   * @description Filter by date joined less than or equal to this ISO 8601 timestamp.
   * @default null
   */
  date_joined__lte: string | null;
  /**
   * Email  Exact
   * @description Filter by email exact match.
   * @default null
   */
  email__exact: string | null;
  /**
   * Email  Icontains
   * @description Filter by email case-insensitive substring.
   * @default null
   */
  email__icontains: string | null;
  /**
   * First Name  Exact
   * @description Filter by first name exact match.
   * @default null
   */
  first_name__exact: string | null;
  /**
   * First Name  Icontains
   * @description Filter by first name case-insensitive substring.
   * @default null
   */
  first_name__icontains: string | null;
  /**
   * Last Name  Exact
   * @description Filter by last name exact match.
   * @default null
   */
  last_name__exact: string | null;
  /**
   * Last Name  Icontains
   * @description Filter by last name case-insensitive substring.
   * @default null
   */
  last_name__icontains: string | null;
  /**
   * Ordering
   * @description Comma-separated ordering fields. Supported: username, email, date_joined, user_group, first_name, last_name. Prefix with '-' for descending order.
   * @default null
   */
  ordering: string | null;
  /**
   * Organization
   * @description Filter by organization ID exact match.
   * @default null
   */
  organization: number | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of users per page, must be between 1 and 100.
   * @default 10
   */
  page_size: number;
  /**
   * Search
   * @description Full-text search across username, email, user_group, first_name, and last_name.
   * @default null
   */
  search: string | null;
  /**
   * Subscription State
   * @description Filter by subscription state exact match.
   * @default null
   */
  subscription_state: string | null;
  /**
   * Username  Exact
   * @description Filter by username exact match.
   * @default null
   */
  username__exact: string | null;
  /**
   * Username  Icontains
   * @description Filter by username case-insensitive substring.
   * @default null
   */
  username__icontains: string | null;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_LIST_USERS tool output.
 */
type BEACONSTAC_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of users matching the query.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of user objects in the current page.
       */
      results: {
          /**
           * Customer Plan
           * @description The customer's plan type.
           * @default null
           */
          customer_plan: string | null;
          /**
           * Date Joined
           * @description ISO 8601 timestamp when the user joined.
           */
          date_joined: string;
          /**
           * Email
           * @description The email address of the user.
           */
          email: string;
          /**
           * First Name
           * @description First name of the user.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the user.
           * @default null
           */
          last_name: string | null;
          /**
           * Organization
           * @description Organization ID the user belongs to.
           * @default null
           */
          organization: number | null;
          /**
           * Subscription State
           * @description The state of the user's subscription.
           * @default null
           */
          subscription_state: string | null;
          /**
           * User Group
           * @description ID of the user group.
           * @default null
           */
          user_group: number | null;
          /**
           * Username
           * @description The username of the user.
           */
          username: string;
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
 * Type of BEACONSTAC's BEACONSTAC_PERIOD_OVERVIEW tool input.
 */
type BEACONSTAC_PERIOD_OVERVIEW_INPUT = {
  /**
   * From Timestamp
   * @description Start time in EPOCH milliseconds.
   */
  from_timestamp?: number;
  /**
   * Organization
   * @description Organization ID for which analytics overview is requested.
   */
  organization?: number;
  /**
   * Product Type
   * @description Type of product to fetch overview analytics for.
   * @enum {string}
   */
  product_type?: "beacon" | "nfc" | "qr" | "geofence";
  /**
   * To Timestamp
   * @description End time in EPOCH milliseconds.
   */
  to_timestamp?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_PERIOD_OVERVIEW tool output.
 */
type BEACONSTAC_PERIOD_OVERVIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversion Percentage
       * @description Percentage of conversions achieved.
       */
      conversion_percentage: number;
      /**
       * Impression Count
       * @description Total number of impressions received.
       */
      impression_count: number;
      /**
       * Notification Count
       * @description Total number of notifications sent.
       */
      notification_count: number;
      /**
       * Product Count
       * @description Total number of products of the specified type.
       */
      product_count: number;
      /**
       * Unique Visitors
       * @description Total number of unique visitors.
       */
      unique_visitors: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_PRODUCT_OVERVIEW tool input.
 */
type BEACONSTAC_PRODUCT_OVERVIEW_INPUT = {
  /**
   * From Timestamp
   * @description Start time in EPOCH milliseconds.
   */
  from_timestamp?: number;
  /**
   * Organization
   * @description Organization ID for which overview is requested.
   */
  organization?: number;
  /**
   * Product Type
   * @description Type of product to fetch overview for.
   * @enum {string}
   */
  product_type?: "beacon" | "nfc" | "qr" | "geofence";
  /**
   * To Timestamp
   * @description End time in EPOCH milliseconds.
   */
  to_timestamp?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_PRODUCT_OVERVIEW tool output.
 */
type BEACONSTAC_PRODUCT_OVERVIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversion Percentage
       * @description Percentage of conversions achieved.
       */
      conversion_percentage: number;
      /**
       * Impression Count
       * @description Total number of impressions received.
       */
      impression_count: number;
      /**
       * Notification Count
       * @description Total number of notifications sent.
       */
      notification_count: number;
      /**
       * Product Count
       * @description Total number of products of the specified type.
       */
      product_count: number;
      /**
       * Unique Visitors
       * @description Total number of unique visitors.
       */
      unique_visitors: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_RETRIEVE_QR_CODE tool input.
 */
type BEACONSTAC_RETRIEVE_QR_CODE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the QR Code to retrieve
   */
  id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_RETRIEVE_QR_CODE tool output.
 */
type BEACONSTAC_RETRIEVE_QR_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Design attribute overrides for the QR Code, if any.
       * @default null
       */
      attributes: {
          [key: string]: unknown;
      } | null;
      /**
       * Campaign
       * @description Campaign details for dynamic QR Code, if applicable.
       * @default null
       */
      campaign: {
          [key: string]: unknown;
      } | null;
      /**
       * Created
       * @description Timestamp when the QR Code was created.
       * @default null
       */
      created: string | null;
      /**
       * Id
       * @description Unique identifier of the QR Code.
       */
      id: number;
      /**
       * Location Enabled
       * @description Whether GPS analytics is enabled (dynamic only).
       * @default null
       */
      location_enabled: boolean | null;
      /**
       * Name
       * @description Name of the QR Code.
       * @default null
       */
      name: string | null;
      /**
       * Qr Code Content
       * @description Content encoded in the QR Code (for static type).
       * @default null
       */
      qr_code_content: string | null;
      /**
       * Qr Image
       * @description URL of the generated QR Code image.
       * @default null
       */
      qr_image: string | null;
      /**
       * Qr Type
       * @description Type of the QR Code (1=static, 2=dynamic).
       * @default null
       */
      qr_type: number | null;
      /**
       * Updated
       * @description Timestamp when the QR Code was last updated.
       * @default null
       */
      updated: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_RETRIEVE_USER tool input.
 */
type BEACONSTAC_RETRIEVE_USER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the User to retrieve
   */
  id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_RETRIEVE_USER tool output.
 */
type BEACONSTAC_RETRIEVE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Joined
       * @description Timestamp when the user account was created.
       * @default null
       */
      date_joined: string | null;
      /**
       * Email
       * @description Email address of the User.
       */
      email: string;
      /**
       * First Name
       * @description First name of the User.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the User.
       */
      id: number;
      /**
       * Last Login
       * @description Timestamp of last login of the User.
       * @default null
       */
      last_login: string | null;
      /**
       * Last Name
       * @description Last name of the User.
       * @default null
       */
      last_name: string | null;
      /**
       * Username
       * @description Username of the User.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_PLACE tool input.
 */
type BEACONSTAC_UPDATE_PLACE_INPUT = {
  /**
   * Address
   * @description Address of the Place.
   * @default null
   */
  address: string | null;
  /**
   * Business Color
   * @description Business color (used in NearBee).
   * @default null
   */
  business_color: string | null;
  /**
   * Business Cover Url
   * @description Business cover URL (used in NearBee).
   * @default null
   */
  business_cover_url: string | null;
  /**
   * Business Icon Url
   * @description Business icon URL (used in NearBee).
   * @default null
   */
  business_icon_url: string | null;
  /**
   * Latitude
   * @description Latitude coordinate of the Place.
   * @default null
   */
  latitude: number | null;
  /**
   * Longitude
   * @description Longitude coordinate of the Place.
   * @default null
   */
  longitude: number | null;
  /**
   * Name
   * @description New name for the Place.
   */
  name?: string;
  /**
   * Organization
   * @description Organization ID this Place belongs to.
   */
  organization?: number;
  /**
   * Place Id
   * @description Unique identifier of the Place to update.
   */
  place_id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_PLACE tool output.
 */
type BEACONSTAC_UPDATE_PLACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Address of the Place.
       * @default null
       */
      address: string | null;
      /**
       * Beacon Count
       * @description Count of Beacons attached to this Place.
       * @default null
       */
      beacon_count: number | null;
      /**
       * Beacons
       * @description List of Beacon objects associated with this Place.
       * @default null
       */
      beacons: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Business Color
       * @description Business color.
       * @default null
       */
      business_color: string | null;
      /**
       * Business Cover Url
       * @description Business cover URL.
       * @default null
       */
      business_cover_url: string | null;
      /**
       * Business Icon Url
       * @description Business icon URL.
       * @default null
       */
      business_icon_url: string | null;
      /**
       * Created
       * @description Creation timestamp.
       * @default null
       */
      created: string | null;
      /**
       * Default Place
       * @description True if this is the default Place for the organization.
       * @default null
       */
      default_place: boolean | null;
      /**
       * Id
       * @description Unique identifier of the Place.
       */
      id: number;
      /**
       * Latitude
       * @description Latitude coordinate.
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude coordinate.
       * @default null
       */
      longitude: number | null;
      /**
       * Name
       * @description Name of the Place.
       * @default null
       */
      name: string | null;
      /**
       * Organization
       * @description Organization ID of the Place.
       * @default null
       */
      organization: number | null;
      /**
       * Updated
       * @description Last update timestamp.
       * @default null
       */
      updated: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_QR_CODE tool input.
 */
type BEACONSTAC_UPDATE_QR_CODE_INPUT = {
  /**
   * Attributes
   * @description Design attributes for the QR Code
   * @default null
   */
  attributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Campaign
   * @description Campaign configuration for dynamic QR Codes (required if qr_type=2)
   * @default null
   */
  campaign: {
      [key: string]: unknown;
  } | null;
  /**
   * Fields Data
   * @description Fields data for static QR Codes (required if qr_type=1)
   * @default null
   */
  fields_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Meta
   * @description Metadata associated with the QR Code
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description New name for the QR Code
   * @default null
   */
  name: string | null;
  /**
   * Organization
   * @description ID of the organization the QR Code belongs to
   * @default null
   */
  organization: number | null;
  /**
   * Place
   * @description ID of the place where the QR Code is deployed
   * @default null
   */
  place: number | null;
  /**
   * Qr Type
   * @description QR type: 1=Static, 2=Dynamic
   * @default null
   */
  qr_type: number | null;
  /**
   * Qrcode Id
   * @description ID of the QR Code to update
   */
  qrcode_id?: number;
  /**
   * Tags
   * @description List of tag IDs to associate
   * @default null
   */
  tags: number[] | null;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_QR_CODE tool output.
 */
type BEACONSTAC_UPDATE_QR_CODE_OUTPUT = {
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
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_TAG tool input.
 */
type BEACONSTAC_UPDATE_TAG_INPUT = {
  /**
   * Color
   * @description Hex color code for the tag, e.g., '#ff0000'.
   * @default null
   */
  color: string | null;
  /**
   * Name
   * @description New name for the tag.
   * @default null
   */
  name: string | null;
  /**
   * Tag Id
   * @description Unique identifier of the tag to update.
   */
  tag_id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_TAG tool output.
 */
type BEACONSTAC_UPDATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Hex color code of the tag.
       * @default null
       */
      color: string | null;
      /**
       * Created
       * @description Timestamp when the tag was created.
       * @default null
       */
      created: string | null;
      /**
       * Id
       * @description Unique identifier of the tag.
       */
      id: number;
      /**
       * Maintainer
       * @description ID of the user who maintains this tag.
       * @default null
       */
      maintainer: number | null;
      /**
       * Name
       * @description Name of the tag.
       * @default null
       */
      name: string | null;
      /**
       * Organization
       * @description ID of the organization this tag belongs to.
       * @default null
       */
      organization: number | null;
      /**
       * Updated
       * @description Timestamp when the tag was last updated.
       * @default null
       */
      updated: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_USER tool input.
 */
type BEACONSTAC_UPDATE_USER_INPUT = {
  /**
   * First Name
   * @description New first name; leave unset to retain existing
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description New last name; leave unset to retain existing
   * @default null
   */
  last_name: string | null;
  /**
   * Organization
   * @description Organization ID to assign; leave unset to retain existing
   * @default null
   */
  organization: number | null;
  /**
   * Profile Picture
   * @description URL to the User's profile picture; leave unset to retain existing
   * @default null
   */
  profile_picture: string | null;
  /**
   * User Id
   * @description Unique identifier of the User to update
   */
  user_id?: number;
};

/**
 * Type of BEACONSTAC's BEACONSTAC_UPDATE_USER tool output.
 */
type BEACONSTAC_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer Plan
       * @description Customer plan code (e.g., 'PR')
       */
      customer_plan: string;
      /**
       * Date Joined
       * @description Timestamp when the User joined
       */
      date_joined: string;
      /**
       * Email
       * @description User's email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description User's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the User
       */
      id: number;
      /**
       * Last Name
       * @description User's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Organization
       * @description Organization ID the User belongs to
       */
      organization: number;
      /**
       * Profile Picture
       * @description URL to the User's profile picture
       * @default null
       */
      profile_picture: string | null;
      /**
       * Subscription State
       * @description Subscription state (e.g., 'active')
       */
      subscription_state: string;
      /**
       * Username
       * @description User's login username
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BEACONSTAC".
 */
export type BEACONSTAC_TOOL_INPUTS = {
  CREATE_PLACE: BEACONSTAC_CREATE_PLACE_INPUT
  CREATE_QR_TEMPLATE: BEACONSTAC_CREATE_QR_TEMPLATE_INPUT
  CREATE_TAG: BEACONSTAC_CREATE_TAG_INPUT
  CREATE_USER: BEACONSTAC_CREATE_USER_INPUT
  DELETE_QR_CODE: BEACONSTAC_DELETE_QR_CODE_INPUT
  DELETE_QR_TEMPLATE: BEACONSTAC_DELETE_QR_TEMPLATE_INPUT
  DELETE_TAG: BEACONSTAC_DELETE_TAG_INPUT
  LIST_BULK_QR_CODES: BEACONSTAC_LIST_BULK_QR_CODES_INPUT
  LIST_ORGANIZATIONS: BEACONSTAC_LIST_ORGANIZATIONS_INPUT
  LIST_PLACES: BEACONSTAC_LIST_PLACES_INPUT
  LIST_QR_TEMPLATES: BEACONSTAC_LIST_QR_TEMPLATES_INPUT
  LIST_TAGS: BEACONSTAC_LIST_TAGS_INPUT
  LIST_USERS: BEACONSTAC_LIST_USERS_INPUT
  PERIOD_OVERVIEW: BEACONSTAC_PERIOD_OVERVIEW_INPUT
  PRODUCT_OVERVIEW: BEACONSTAC_PRODUCT_OVERVIEW_INPUT
  RETRIEVE_QR_CODE: BEACONSTAC_RETRIEVE_QR_CODE_INPUT
  RETRIEVE_USER: BEACONSTAC_RETRIEVE_USER_INPUT
  UPDATE_PLACE: BEACONSTAC_UPDATE_PLACE_INPUT
  UPDATE_QR_CODE: BEACONSTAC_UPDATE_QR_CODE_INPUT
  UPDATE_TAG: BEACONSTAC_UPDATE_TAG_INPUT
  UPDATE_USER: BEACONSTAC_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BEACONSTAC".
 */
export type BEACONSTAC_TOOL_OUTPUTS = {
  CREATE_PLACE: BEACONSTAC_CREATE_PLACE_OUTPUT
  CREATE_QR_TEMPLATE: BEACONSTAC_CREATE_QR_TEMPLATE_OUTPUT
  CREATE_TAG: BEACONSTAC_CREATE_TAG_OUTPUT
  CREATE_USER: BEACONSTAC_CREATE_USER_OUTPUT
  DELETE_QR_CODE: BEACONSTAC_DELETE_QR_CODE_OUTPUT
  DELETE_QR_TEMPLATE: BEACONSTAC_DELETE_QR_TEMPLATE_OUTPUT
  DELETE_TAG: BEACONSTAC_DELETE_TAG_OUTPUT
  LIST_BULK_QR_CODES: BEACONSTAC_LIST_BULK_QR_CODES_OUTPUT
  LIST_ORGANIZATIONS: BEACONSTAC_LIST_ORGANIZATIONS_OUTPUT
  LIST_PLACES: BEACONSTAC_LIST_PLACES_OUTPUT
  LIST_QR_TEMPLATES: BEACONSTAC_LIST_QR_TEMPLATES_OUTPUT
  LIST_TAGS: BEACONSTAC_LIST_TAGS_OUTPUT
  LIST_USERS: BEACONSTAC_LIST_USERS_OUTPUT
  PERIOD_OVERVIEW: BEACONSTAC_PERIOD_OVERVIEW_OUTPUT
  PRODUCT_OVERVIEW: BEACONSTAC_PRODUCT_OVERVIEW_OUTPUT
  RETRIEVE_QR_CODE: BEACONSTAC_RETRIEVE_QR_CODE_OUTPUT
  RETRIEVE_USER: BEACONSTAC_RETRIEVE_USER_OUTPUT
  UPDATE_PLACE: BEACONSTAC_UPDATE_PLACE_OUTPUT
  UPDATE_QR_CODE: BEACONSTAC_UPDATE_QR_CODE_OUTPUT
  UPDATE_TAG: BEACONSTAC_UPDATE_TAG_OUTPUT
  UPDATE_USER: BEACONSTAC_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BEACONSTAC toolkit.
 */
export const BEACONSTAC = {
  slug: "beaconstac",
  tools: {
    /**
     * Tool to create a new place for location-based assets. use when you need to register a new physical place under an organization.
     */
    CREATE_PLACE: "BEACONSTAC_CREATE_PLACE",
    /**
     * Tool to create a new qr code template. use when you need reusable design presets for qr codes.
     */
    CREATE_QR_TEMPLATE: "BEACONSTAC_CREATE_QR_TEMPLATE",
    /**
     * Tool to create a new tag for organizing qr codes and other objects. use when you need to categorize qr codes under a specific organization.
     */
    CREATE_TAG: "BEACONSTAC_CREATE_TAG",
    /**
     * Tool to create a new user. use when onboarding a new user under your organization (reseller plan and above).
     */
    CREATE_USER: "BEACONSTAC_CREATE_USER",
    /**
     * Tool to delete a qr code by its id. use when you need to remove an existing qr code after validation.
     */
    DELETE_QR_CODE: "BEACONSTAC_DELETE_QR_CODE",
    /**
     * Tool to delete a qr code template by its id. use when you need to permanently remove a qr code template that is no longer needed.
     */
    DELETE_QR_TEMPLATE: "BEACONSTAC_DELETE_QR_TEMPLATE",
    /**
     * Tool to delete a tag by its id. use when you need to remove an existing tag after validation.
     */
    DELETE_TAG: "BEACONSTAC_DELETE_TAG",
    /**
     * Tool to list bulk qr code collections. use when you need to filter, search, or order your bulk qr code collections.
     */
    LIST_BULK_QR_CODES: "BEACONSTAC_LIST_BULK_QR_CODES",
    /**
     * Tool to list organizations. use when you need to fetch all organizations accessible to the authenticated account.
     */
    LIST_ORGANIZATIONS: "BEACONSTAC_LIST_ORGANIZATIONS",
    /**
     * Tool to list your places. use when you need to browse or search your account's places with filtering and ordering.
     */
    LIST_PLACES: "BEACONSTAC_LIST_PLACES",
    /**
     * Tool to list all qr code templates in your account. use when you need to filter and paginate templates.
     */
    LIST_QR_TEMPLATES: "BEACONSTAC_LIST_QR_TEMPLATES",
    /**
     * Tool to list all tags with optional filtering and pagination. use when you need to browse or search tags in your account.
     */
    LIST_TAGS: "BEACONSTAC_LIST_TAGS",
    /**
     * Tool to list all users with optional filtering, searching, ordering, and pagination. use when you need to retrieve user records across your organization.
     */
    LIST_USERS: "BEACONSTAC_LIST_USERS",
    /**
     * Tool to get period overview analytics for products including counts, impressions, and conversion percentage. use after specifying the product type and time interval.
     */
    PERIOD_OVERVIEW: "BEACONSTAC_PERIOD_OVERVIEW",
    /**
     * Tool to get analytics overview for a specified product type over a given time interval. use after specifying the product type and time range to obtain summary metrics.
     */
    PRODUCT_OVERVIEW: "BEACONSTAC_PRODUCT_OVERVIEW",
    /**
     * Tool to retrieve details of a specific qr code by its id. use when you need to fetch or verify qr code properties after creation or update.
     */
    RETRIEVE_QR_CODE: "BEACONSTAC_RETRIEVE_QR_CODE",
    /**
     * Tool to retrieve the details of an existing user by id. use when you need to fetch a user's profile after confirming its existence.
     */
    RETRIEVE_USER: "BEACONSTAC_RETRIEVE_USER",
    /**
     * Tool to update the specified place by id. use after retrieving the place to modify its details, such as name, address, or coordinates.
     */
    UPDATE_PLACE: "BEACONSTAC_UPDATE_PLACE",
    /**
     * Tool to update an existing qr code by its id. use when you need to modify qr code attributes; only provided fields are changed.
     */
    UPDATE_QR_CODE: "BEACONSTAC_UPDATE_QR_CODE",
    /**
     * Tool to update an existing tag by its id. use when you need to modify a tag's name or color after confirming its id via list tags.
     */
    UPDATE_TAG: "BEACONSTAC_UPDATE_TAG",
    /**
     * Tool to update an existing user. use when you need to modify profile details or organization of a user by their id.
     */
    UPDATE_USER: "BEACONSTAC_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BEACONSTAC".
 */
export type BEACONSTAC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BEACONSTAC".
 */
export type BEACONSTAC_TRIGGER_EVENTS = {}
