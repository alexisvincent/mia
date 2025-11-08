// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CARDLY's CARDLY_CREATE_CONTACT_LIST tool input.
 */
type CARDLY_CREATE_CONTACT_LIST_INPUT = {
  /**
   * Description
   * @description Free-text description of this contact list.
   * @default null
   */
  description: string | null;
  /**
   * Fields
   * @description Custom fields to add to this list. New fields will be created; existing fields (matched by name) updated.
   * @default null
   */
  fields: {
      /**
       * Description
       * @description Longer human-readable description of the field.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Short name for this field; used to create a unique identifier if new.
       */
      name: string;
      /**
       * Type
       * @description Data type of this field.
       * @enum {string}
       */
      type: "text" | "date" | "number" | "url";
  }[] | null;
  /**
   * Name
   * @description A short, unique name for this contact list.
   */
  name?: string;
};

/**
 * Type of CARDLY's CARDLY_CREATE_CONTACT_LIST tool output.
 */
type CARDLY_CREATE_CONTACT_LIST_OUTPUT = {
  /**
   * Data
   * @description The newly created contact list.
   */
  data?: {
      /**
       * Automations
       * @description Number of automations linked to this list.
       */
      automations: number;
      /**
       * Contacts
       * @description Number of contacts in this list.
       */
      contacts: number;
      /**
       * Description
       * @description Description of the contact list.
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description Custom fields configured on this list.
       */
      fields: {
          /**
           * Code
           * @description Machine-readable code for this field.
           */
          code: string;
          /**
           * Description
           * @description Description of the field.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID of this custom field.
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the field.
           */
          name: string;
          /**
           * Status
           * @description Current status of the field (e.g., 'active').
           */
          status: string;
          /**
           * Type
           * @description Data type of the field.
           */
          type: string;
      }[];
      /**
       * Id
       * @description Unique contact list identifier.
       */
      id: string;
      /**
       * Name
       * @description Name of the contact list.
       */
      name: string;
      /**
       * Rules
       * @description Automation rules attached to this contact list.
       */
      rules: {
          [key: string]: unknown;
      }[];
      /**
       * Status
       * @description Current status of the contact list.
       */
      status: string;
      /**
       * Validation
       * @description Counts of contacts in validation states.
       */
      validation: {
          [key: string]: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Standard API status object.
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_CREATE_WEBHOOK tool input.
 */
type CARDLY_CREATE_WEBHOOK_INPUT = {
  /**
   * Description
   * @description Free-text description of what this webhook is for.
   * @default null
   */
  description: string | null;
  /**
   * Events
   * @description List of event names this webhook subscribes to; only notifications for these events will be sent.
   */
  events?: string[];
  /**
   * Metadata
   * @description Arbitrary key/value pairs to attach to this webhook for user-defined metadata.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Target Url
   * @description The URL this webhook will send POST requests to once one of the subscribed events is triggered. Must be a valid HTTPS endpoint.
   */
  targetUrl?: string;
};

/**
 * Type of CARDLY's CARDLY_CREATE_WEBHOOK tool output.
 */
type CARDLY_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The newly created webhook object.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Human-readable notes or description of the webhook.
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description List of event names the webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the created webhook.
       */
      id: string;
      /**
       * Metadata
       * @description User-defined metadata attached to the webhook.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Protected
       * @description Reserved internal flag; usually null.
       * @default null
       */
      protected: string | null;
      /**
       * Secret
       * @description One-time secret provided at creation; use this to verify webhook postback signatures. Store securely, as it cannot be retrieved again.
       */
      secret: string;
      /**
       * Status
       * @description Current status of the webhook (e.g., 'active' or 'disabled').
       */
      status: string;
      /**
       * Target Url
       * @description The endpoint URL set to receive webhook notifications.
       */
      targetUrl: string;
      /**
       * Updated At
       * @description Timestamp of the last update to this webhook.
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Standard API status object.
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings, or error messages relevant to the response.
       */
      messages: string[];
      /**
       * Status
       * @description Overall call status identifier.
       * @enum {string}
       */
      status: "OK" | "WARN" | "ERROR";
      /**
       * Version
       * @description Current API build version.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_DELETE_INVITATION_BY_EMAIL tool input.
 */
type CARDLY_DELETE_INVITATION_BY_EMAIL_INPUT = {
  /**
   * Email
   * @description The email address of the invitation to delete.
   */
  email?: string;
};

/**
 * Type of CARDLY's CARDLY_DELETE_INVITATION_BY_EMAIL tool output.
 */
type CARDLY_DELETE_INVITATION_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Details of the deleted invitation.
   */
  data?: {
      /**
       * Accepted
       * @description ISO timestamp when invitation was accepted, or null if not yet accepted.
       * @default null
       */
      accepted: string | null;
      /**
       * Email
       * @description Invitee's email address.
       */
      email: string;
      /**
       * Expires
       * @description ISO timestamp when invitation expires.
       */
      expires: string;
      /**
       * First Name
       * @description Invitee's first name.
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier for the invitation.
       */
      id: string;
      /**
       * Invite Sent
       * @description ISO timestamp when invitation email was sent.
       */
      inviteSent: string;
      /**
       * Invited
       * @description ISO timestamp when invitation was created.
       */
      invited: string;
      /**
       * Last Name
       * @description Invitee's last name.
       */
      lastName: string;
      /**
       * Links
       * @description Actionable links for this invitation.
       */
      links: {
          /**
           * Accept
           * @description URL to accept the invitation.
           */
          accept: string;
      };
      /**
       * Permissions
       * @description Permissions granted upon acceptance.
       */
      permissions: {
          /**
           * Use Credits
           * @description Whether the invitee can use credits.
           */
          useCredits: boolean;
          /**
           * Use Gift Credit
           * @description Whether the invitee can use gift credits.
           */
          useGiftCredit: boolean;
          /**
           * Use Saved Card
           * @description Whether the invitee can use saved cards.
           */
          useSavedCard: boolean;
      };
      /**
       * Status
       * @description Invitation status, e.g., 'invited', 'accepted', 'expired'.
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status metadata.
   */
  state?: {
      /**
       * Messages
       * @description Informational or error messages.
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call, e.g., 'OK'.
       */
      status: string;
      /**
       * Version
       * @description API build version for this response.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_DELETE_WEBHOOK tool input.
 */
type CARDLY_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The unique ID of the webhook to delete.
   */
  id?: string;
};

/**
 * Type of CARDLY's CARDLY_DELETE_WEBHOOK tool output.
 */
type CARDLY_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The webhook object that was deleted
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when webhook was created
       */
      createdAt: string;
      /**
       * Description
       * @description User-provided description of the webhook
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description List of event types this webhook is subscribed to
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the webhook
       */
      id: string;
      /**
       * Metadata
       * @description User-provided metadata attached to this webhook
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Protected
       * @description Whether this webhook is protected from changes
       * @default null
       */
      protected: boolean | null;
      /**
       * Secret
       * @description Secret token used for signing events. Store securely.
       */
      secret: string;
      /**
       * Status
       * @description Status of the webhook, e.g., 'active' or 'disabled'
       */
      status: string;
      /**
       * Target Url
       * @description URL where webhook events will be sent
       */
      targetUrl: string;
      /**
       * Updated At
       * @description ISO timestamp when webhook was last updated
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_GENERATE_PREVIEW tool input.
 */
type CARDLY_GENERATE_PREVIEW_INPUT = {
  /**
   * Artwork
   * @description Artwork UUID or slug to preview
   */
  artwork?: string;
  /**
   * Messages
   * @description Message overrides when not using a template
   * @default null
   */
  messages: {
      /**
       * Pages
       * @description List of page-level text overrides
       */
      pages: {
          /**
           * Page
           * @description 1-based page index to apply this message
           */
          page: number;
          /**
           * Style
           * @description Optional style overrides at page level
           * @default null
           */
          style: {
              /**
               * Align
               * @description Text alignment override for default or template style
               * @default null
               * @enum {string|null}
               */
              align: "left" | "center" | "right" | null;
              /**
               * Color
               * @description Hex color code for text, e.g., 'FFFFFF'
               * @default null
               */
              color: string | null;
              /**
               * Font
               * @description UUID of the writing font to apply
               * @default null
               */
              font: string | null;
              /**
               * Size
               * @description Font size in points
               * @default null
               */
              size: number | null;
              /**
               * Vertical Align
               * @description Vertical alignment override
               * @default null
               * @enum {string|null}
               */
              verticalAlign: "top" | "center" | "bottom" | null;
              /**
               * Writing
               * @description UUID of the handwriting style to apply
               * @default null
               */
              writing: string | null;
          } | null;
          /**
           * Text
           * @description Text override for this page
           */
          text: string;
      }[];
  } | null;
  /**
   * Purchase Order Number
   * @description Reference number for internal tracking
   * @default null
   */
  purchaseOrderNumber: string | null;
  /**
   * Recipient
   * @description Envelope recipient details
   */
  recipient?: {
      /**
       * Address
       * @description Primary street address line
       */
      address: string;
      /**
       * Address2
       * @description Secondary address line (suite, unit, etc.)
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description Suburb or city
       */
      city: string;
      /**
       * Company
       * @description Company name on the envelope
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description ISO 3166-1 alpha-2 country code
       */
      country: string;
      /**
       * First Name
       * @description First name on the envelope
       */
      firstName: string;
      /**
       * Last Name
       * @description Last name on the envelope
       * @default null
       */
      lastName: string | null;
      /**
       * Omit Address
       * @description (Sender only) omit return address entirely
       * @default null
       */
      omitAddress: boolean | null;
      /**
       * Postcode
       * @description Postal code (if required)
       * @default null
       */
      postcode: string | null;
      /**
       * Region
       * @description State/province (if required)
       * @default null
       */
      region: string | null;
  };
  /**
   * Requested Arrival
   * @description Desired arrival date (ISO 8601) for estimates
   * @default null
   */
  requestedArrival: string | null;
  /**
   * Address
   * @description Sender details (provide all fields if specifying)
   * @default null
   */
  sender: {
      /**
       * Address
       * @description Primary street address line
       */
      address: string;
      /**
       * Address2
       * @description Secondary address line (suite, unit, etc.)
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description Suburb or city
       */
      city: string;
      /**
       * Company
       * @description Company name on the envelope
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description ISO 3166-1 alpha-2 country code
       */
      country: string;
      /**
       * First Name
       * @description First name on the envelope
       */
      firstName: string;
      /**
       * Last Name
       * @description Last name on the envelope
       * @default null
       */
      lastName: string | null;
      /**
       * Omit Address
       * @description (Sender only) omit return address entirely
       * @default null
       */
      omitAddress: boolean | null;
      /**
       * Postcode
       * @description Postal code (if required)
       * @default null
       */
      postcode: string | null;
      /**
       * Region
       * @description State/province (if required)
       * @default null
       */
      region: string | null;
  } | null;
  /**
   * Ship To Me
   * @description True to send a blank envelope back to sender
   * @default null
   */
  shipToMe: boolean | null;
  /**
   * Shipping Method
   * @description Shipping method (per-region support varies)
   * @default null
   * @enum {string|null}
   */
  shippingMethod: "standard" | "tracked" | "express" | null;
  /**
   * Style
   * @description Global style overrides (optional)
   * @default null
   */
  style: {
      /**
       * Align
       * @description Text alignment override for default or template style
       * @default null
       * @enum {string|null}
       */
      align: "left" | "center" | "right" | null;
      /**
       * Color
       * @description Hex color code for text, e.g., 'FFFFFF'
       * @default null
       */
      color: string | null;
      /**
       * Font
       * @description UUID of the writing font to apply
       * @default null
       */
      font: string | null;
      /**
       * Size
       * @description Font size in points
       * @default null
       */
      size: number | null;
      /**
       * Vertical Align
       * @description Vertical alignment override
       * @default null
       * @enum {string|null}
       */
      verticalAlign: "top" | "center" | "bottom" | null;
      /**
       * Writing
       * @description UUID of the handwriting style to apply
       * @default null
       */
      writing: string | null;
  } | null;
  /**
   * Template
   * @description Template ID for variable substitution (optional)
   * @default null
   */
  template: string | null;
  /**
   * Variables
   * @description Key/value map of template variables to inject
   * @default null
   */
  variables: {
      [key: string]: string;
  } | null;
};

/**
 * Type of CARDLY's CARDLY_GENERATE_PREVIEW tool output.
 */
type CARDLY_GENERATE_PREVIEW_OUTPUT = {
  /** Data */
  data?: {
      /** Balance */
      balance: number;
      /** Gift Balance */
      giftBalance: {
          /** Balance */
          balance: number;
          /** Currency */
          currency: string;
      };
      /** Order */
      order: {
          /** Credit Cost */
          creditCost: number;
          /** Delivery */
          delivery: {
              /** Dispatch */
              dispatch: string;
              /** Estimated Max Arrival */
              estimatedMaxArrival: string;
              /** Estimated Min Arrival */
              estimatedMinArrival: string;
              /** Requested */
              requested: string;
          };
          /** Gift Credit Cost */
          giftCreditCost: number;
      };
      /** Preview */
      preview: {
          /** Expires */
          expires: string | null;
          /** Format */
          format: string;
          /** Urls */
          urls: {
              /** Card */
              card: string;
              /** Envelope */
              envelope: string | null;
          };
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** State */
  state?: {
      /** Messages */
      messages: string[];
      /** Status */
      status: string;
      /** Version */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_LIST_ARTWORK tool input.
 */
type CARDLY_LIST_ARTWORK_INPUT = {
  /**
   * Limit
   * @description Maximum number of artwork items to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before returning results
   * @default null
   */
  offset: number | null;
  /**
   * Own Only
   * @description If true, return only artwork owned by your organisation; defaults to false
   * @default null
   */
  ownOnly: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_ARTWORK tool output.
 */
type CARDLY_LIST_ARTWORK_OUTPUT = {
  /**
   * Data
   * @description Paginated artwork data
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Last Record
           * @description 1-based number of last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped before this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used for ordering results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Sorting direction
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Calculated page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based number of first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total records available for this query
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of artwork items
       */
      results: {
          /**
           * Artwork
           * @description List of preview image URLs for each page, null for blank pages
           */
          artwork: (string | null)[];
          /**
           * Created At
           * @description ISO date when artwork was created
           */
          createdAt: string;
          /**
           * Description
           * @description Artwork description
           * @default null
           */
          description: string | null;
          /**
           * Full Path
           * @description Full SEO path for artwork
           */
          fullPath: string;
          /**
           * Id
           * @description Unique artwork identifier
           */
          id: string;
          /**
           * Media
           * @description Associated media product details
           */
          media: {
              /**
               * Art
               * @description Artwork pixel dimensions
               */
              art: {
                  /**
                   * Px
                   * @description Artwork pixel dimensions, including and excluding bleed
                   */
                  px: {
                      /**
                       * Height
                       * @description Total artwork height in pixels
                       */
                      height: number;
                      /**
                       * Inner Height
                       * @description Inner area height in pixels
                       */
                      innerHeight: number;
                      /**
                       * Inner Width
                       * @description Inner area width in pixels
                       */
                      innerWidth: number;
                      /**
                       * Width
                       * @description Total artwork width in pixels
                       */
                      width: number;
                  };
              };
              /**
               * Bleed
               * @description Bleed zone dimensions in mm
               */
              bleed: {
                  /**
                   * Mm
                   * @description Bleed zone in millimeters
                   */
                  mm: {
                      /**
                       * X
                       * @description Left and right bleed in mm
                       */
                      x: number;
                      /**
                       * Y
                       * @description Top and bottom bleed in mm
                       */
                      y: number;
                  };
              };
              /**
               * Credit Cost
               * @description Credit cost for ordering this media type
               */
              creditCost: number;
              /**
               * Description
               * @description Media description and restrictions
               */
              description: string;
              /**
               * Dimensions
               * @description Physical dimensions in mm
               */
              dimensions: {
                  /**
                   * Mm
                   * @description Dimensions in millimeters
                   */
                  mm: {
                      /**
                       * Height
                       * @description Height in mm
                       */
                      height: number;
                      /**
                       * Width
                       * @description Width in mm
                       */
                      width: number;
                  };
              };
              /**
               * Id
               * @description Unique identifier for this media size
               */
              id: string;
              /**
               * Name
               * @description Media name
               */
              name: string;
              /**
               * Pages
               * @description Number of pages in this media
               */
              pages: number;
          };
          /**
           * Name
           * @description Artwork title
           */
          name: string;
          /**
           * Revision
           * @description Artwork revision number
           */
          revision: number;
          /**
           * Slug
           * @description URL-friendly artwork identifier
           */
          slug: string;
          /**
           * Updated At
           * @description ISO date when artwork was last updated
           */
          updatedAt: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status information
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_CREDIT_HISTORY tool input.
 */
type CARDLY_LIST_CREDIT_HISTORY_INPUT = {
  /**
   * Effective Time.Gt
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results after this time.
   * @default null
   */
  "effectiveTime.gt": string | null;
  /**
   * Effective Time.Gte
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results after or equal to this time.
   * @default null
   */
  "effectiveTime.gte": string | null;
  /**
   * Effective Time.Lt
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results before this time.
   * @default null
   */
  "effectiveTime.lt": string | null;
  /**
   * Effective Time.Lte
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results before or equal to this time.
   * @default null
   */
  "effectiveTime.lte": string | null;
  /**
   * Limit
   * @description Maximum number of records to retrieve per page, must be at least 1.
   * @default 25
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to collect the result set, must be non-negative.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_CREDIT_HISTORY tool output.
 */
type CARDLY_LIST_CREDIT_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Container for pagination and result records.
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the result set.
       */
      meta: {
          /**
           * Last Record
           * @description The 1-based number of the last record in this result set, relative to the whole result set.
           */
          lastRecord: number;
          /**
           * Limit
           * @description The maximum number of results per page.
           */
          limit: number;
          /**
           * Offset
           * @description The current number of records to offset the start of the result set by.
           */
          offset: number;
          /**
           * Order By
           * @description The current field that results are ordered by.
           */
          orderBy: string;
          /**
           * Order Direction
           * @description The direction results are ordered by, ascending or descending.
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description The calculated page number for these results, based on supplied offset and limit values.
           */
          page: number;
          /**
           * Start Record
           * @description The 1-based number of the first record in this result set, relative to the whole result set.
           */
          startRecord: number;
          /**
           * Total Records
           * @description The total number of results in the entire set based on your query parameters.
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description A paginated array of zero or more credit history objects.
       */
      results: {
          /**
           * Change
           * @description Value that was either credited or debited from the organisation in this action.
           */
          change: number;
          /**
           * Effective Time
           * @description Timestamp of when this credit history entry occurred.
           */
          effectiveTime: string;
          /**
           * Id
           * @description Unique identifier for this credit history entry.
           */
          id: string;
          /**
           * New Balance
           * @description The current account credit balance at the time this change was effected.
           */
          newBalance: number;
          /**
           * Notes
           * @description An extended description of what effected this balance change.
           * @default null
           */
          notes: string | null;
          /**
           * Order Id
           * @description Identifier for an order that triggered this credit history entry.
           * @default null
           */
          orderId: string | null;
          /**
           * Transaction Id
           * @description Identifier for a transaction that triggered this credit history entry.
           * @default null
           */
          transactionId: string | null;
          /**
           * Type
           * @description A human-readable, brief description of what this entry is for, e.g., 'Signup Bonus'.
           */
          type: string;
          /**
           * Type Code
           * @description A short code to denote the type of change this was.
           * @enum {string}
           */
          typeCode: "A" | "C" | "D" | "E" | "P" | "R" | "S";
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Overall API call status.
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings or error messages relevant to the response.
       */
      messages: string[];
      /**
       * Status
       * @description Whether or not the request succeeded without errors or warnings.
       * @enum {string}
       */
      status: "OK" | "WARN" | "ERROR";
      /**
       * Version
       * @description The current build version of Cardly.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_LIST_FONTS tool input.
 */
type CARDLY_LIST_FONTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of records per page, must be at least 1.
   * @default 25
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting the result set, must be non-negative.
   * @default 0
   */
  offset: number | null;
  /**
   * Organisation Only
   * @description If true, return only fonts exclusive to your organisation.
   * @default false
   */
  organisationOnly: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_FONTS tool output.
 */
type CARDLY_LIST_FONTS_OUTPUT = {
  /**
   * Data
   * @description Data containing pagination and results.
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the font listing.
       */
      meta: {
          /**
           * Last Record
           * @description 1-based index of the last record in this page.
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page.
           */
          limit: number;
          /**
           * Offset
           * @description Zero-based offset for this page.
           */
          offset: number;
          /**
           * Order By
           * @description Current field results are ordered by.
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of ordering.
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Calculated page number based on offset and limit.
           */
          page: number;
          /**
           * Start Record
           * @description 1-based index of the first record in this page.
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total number of records available.
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of fonts returned by the API.
       */
      results: {
          /**
           * Can Humanise
           * @description Whether this font supports humanisation.
           */
          canHumanise: boolean;
          /**
           * Category
           * @description Category of the font, e.g., 'hand', 'serif'.
           */
          category: string;
          /**
           * Family Variants
           * @description Number of variants in the font family.
           */
          familyVariants: number;
          /**
           * Id
           * @description Unique identifier of the font.
           */
          id: string;
          /**
           * Name
           * @description Name of the font.
           */
          name: string;
          /**
           * Restricted
           * @description If true, font is restricted to your organisation.
           */
          restricted: boolean;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object.
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings or error messages from the call.
       */
      messages: string[];
      /**
       * Status
       * @description Overall call status identifier.
       * @enum {string}
       */
      status: "OK" | "WARN" | "ERROR";
      /**
       * Version
       * @description API build version number.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description Indicates if the response is in test mode.
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_GIFT_CREDIT_HISTORY tool input.
 */
type CARDLY_LIST_GIFT_CREDIT_HISTORY_INPUT = {
  /**
   * Effective Time.Gt
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results after this time.
   * @default null
   */
  "effectiveTime.gt": string | null;
  /**
   * Effective Time.Gte
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results after or equal to this time.
   * @default null
   */
  "effectiveTime.gte": string | null;
  /**
   * Effective Time.Lt
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results before this time.
   * @default null
   */
  "effectiveTime.lt": string | null;
  /**
   * Effective Time.Lte
   * @description YYYY-MM-DD HH:ii:ss formatted string to retrieve only results before or equal to this time.
   * @default null
   */
  "effectiveTime.lte": string | null;
  /**
   * Limit
   * @description Maximum number of records to return. Defaults to server-side default if unspecified.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination. Defaults to server-side default if unspecified.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_GIFT_CREDIT_HISTORY tool output.
 */
type CARDLY_LIST_GIFT_CREDIT_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Results and pagination data.
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Last Record
           * @description 1-based index of last record in this page.
           */
          lastRecord: number;
          /**
           * Limit
           * @description Number of records requested per page.
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped for this page.
           */
          offset: number;
          /**
           * Order By
           * @description Field by which results are ordered.
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of ordering.
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Start Record
           * @description 1-based index of first record in this page.
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total number of records available.
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of gift credit history records.
       */
      results: {
          /**
           * Change
           * @description Amount credited or debited.
           */
          change: number;
          /**
           * Change Net
           * @description Amount credited or debited exclusive of tax.
           */
          changeNet: number;
          /**
           * Change Tax
           * @description Tax component for this transaction.
           */
          changeTax: number;
          /**
           * Effective Time
           * @description Timestamp when this entry occurred.
           */
          effectiveTime: string;
          /**
           * Id
           * @description Unique identifier for this gift credit history entry.
           */
          id: string;
          /**
           * New Balance
           * @description Account gift credit balance after this change.
           */
          newBalance: number;
          /**
           * Notes
           * @description Extended description of this change.
           * @default null
           */
          notes: string | null;
          /**
           * Order Id
           * @description Identifier for an order that triggered this entry.
           * @default null
           */
          orderId: string | null;
          /**
           * Transaction Id
           * @description Identifier for a transaction that triggered this entry.
           * @default null
           */
          transactionId: string | null;
          /**
           * Type
           * @description Description of what this entry is for.
           */
          type: string;
          /**
           * Type Code
           * @description Short code denoting the type of change.
           * @enum {string}
           */
          typeCode: "A" | "C" | "D" | "E" | "P" | "R" | "S";
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object.
   */
  state?: {
      /**
       * Messages
       * @description Any messages or warnings from the API.
       */
      messages: string[];
      /**
       * Status
       * @description Overall response status.
       * @enum {string}
       */
      status: "OK" | "WARN" | "ERROR";
      /**
       * Version
       * @description API build version.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARDLY's CARDLY_LIST_INVITATIONS tool input.
 */
type CARDLY_LIST_INVITATIONS_INPUT = {
  /**
   * Accepted Only
   * @description If true, only return accepted invitations.
   * @default null
   */
  acceptedOnly: boolean | null;
  /**
   * Expired Only
   * @description If true, only return expired invitations.
   * @default null
   */
  expiredOnly: boolean | null;
  /**
   * Include Accepted
   * @description If true, includes accepted invitations in the response. Default filters them out.
   * @default null
   */
  includeAccepted: boolean | null;
  /**
   * Limit
   * @description Maximum number of invitations to return. Defaults to API default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of invitation records to skip before returning results. Defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_INVITATIONS tool output.
 */
type CARDLY_LIST_INVITATIONS_OUTPUT = {
  /**
   * Data
   * @description Paginated invitations data
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Last Record
           * @description 1-based number of last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped before this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used for ordering results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of sort order
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Calculated page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based number of first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total records available for this query
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of invitation objects
       */
      results: {
          /**
           * Accepted
           * @description ISO timestamp when invitation was accepted, or null if not yet accepted
           * @default null
           */
          accepted: string | null;
          /**
           * Email
           * @description Invitee's email address
           */
          email: string;
          /**
           * Expires
           * @description ISO timestamp when invitation expires
           */
          expires: string;
          /**
           * First Name
           * @description Invitee's first name
           */
          firstName: string;
          /**
           * Id
           * @description Unique identifier for the invitation
           */
          id: string;
          /**
           * Invite Sent
           * @description ISO timestamp when invitation email was sent
           */
          inviteSent: string;
          /**
           * Invited
           * @description ISO timestamp when invitation was created
           */
          invited: string;
          /**
           * Last Name
           * @description Invitee's last name
           */
          lastName: string;
          /**
           * Links
           * @description Actionable links for the invitation
           */
          links: {
              /**
               * Accept
               * @description URL to accept the invitation
               */
              accept: string;
          };
          /**
           * Permissions
           * @description Permissions granted upon acceptance
           */
          permissions: {
              /**
               * Use Credits
               * @description Whether the invitee can use credits
               */
              useCredits: boolean;
              /**
               * Use Gift Credit
               * @description Whether the invitee can use gift credits
               */
              useGiftCredit: boolean;
              /**
               * Use Saved Card
               * @description Whether the invitee can use saved cards
               */
              useSavedCard: boolean;
          };
          /**
           * Status
           * @description Invitation status, e.g., 'invited', 'accepted', 'expired'
           */
          status: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_MEDIA tool input.
 */
type CARDLY_LIST_MEDIA_INPUT = {
  /**
   * Limit
   * @description Maximum number of media items to return, defaults to 25 if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination, defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
  /**
   * Organisation Only
   * @description If true, only return media items exclusive to your organisation.
   * @default false
   */
  organisationOnly: boolean;
};

/**
 * Type of CARDLY's CARDLY_LIST_MEDIA tool output.
 */
type CARDLY_LIST_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Paginated media data results
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the media listing
       */
      meta: {
          /**
           * Last Record
           * @description 1-based number of the last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of results per page
           */
          limit: number;
          /**
           * Offset
           * @description Zero-based offset for this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used to order results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of ordering: asc or desc
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Current page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based number of the first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total number of records available
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of media size objects
       */
      results: {
          /**
           * Art
           * @description Artwork pixel dimensions for this media type
           */
          art: {
              /**
               * Px
               * @description Artwork pixel dimensions, including bleed information
               */
              px: {
                  /**
                   * Height
                   * @description Total artwork height in pixels, inclusive of bleed zones
                   */
                  height: number;
                  /**
                   * Inner Height
                   * @description Height of the artwork inner area in pixels, exclusive of bleed zones
                   */
                  innerHeight: number;
                  /**
                   * Inner Width
                   * @description Width of the artwork inner area in pixels, exclusive of bleed zones
                   */
                  innerWidth: number;
                  /**
                   * Width
                   * @description Total artwork width in pixels, inclusive of bleed zones
                   */
                  width: number;
              };
          };
          /**
           * Bleed
           * @description Bleed zone dimensions in millimeters
           */
          bleed: {
              /**
               * Mm
               * @description Bleed zone dimensions in millimeters
               */
              mm: {
                  /**
                   * X
                   * @description Left and right bleed zone measurements in millimeters
                   */
                  x: number;
                  /**
                   * Y
                   * @description Top and bottom bleed zone measurements in millimeters
                   */
                  y: number;
              };
          };
          /**
           * Credit Cost
           * @description Credit cost required when ordering this media type
           */
          creditCost: number;
          /**
           * Description
           * @description Description of the product and any restrictions
           */
          description: string;
          /**
           * Dimensions
           * @description Physical dimensions in millimeters, exclusive of bleed
           */
          dimensions: {
              /**
               * Mm
               * @description Physical dimensions in millimeters
               */
              mm: {
                  /**
                   * Height
                   * @description Height of the product in millimeters, exclusive of bleed zones
                   */
                  height: number;
                  /**
                   * Width
                   * @description Width of the product in millimeters, exclusive of bleed zones
                   */
                  width: number;
              };
          };
          /**
           * Id
           * @description Unique identifier for this media size
           */
          id: string;
          /**
           * Name
           * @description Localised, human-readable name of the media product
           */
          name: string;
          /**
           * Pages
           * @description Number of pages this media contains
           */
          pages: number;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status including code, messages, and build version
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings or error messages
       */
      messages: string[];
      /**
       * Status
       * @description Call status, e.g., 'OK'
       */
      status: string;
      /**
       * Version
       * @description API build version number
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description Indicates test mode when using a test API key
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_ORDERS tool input.
 */
type CARDLY_LIST_ORDERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of orders to return. Defaults to API default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before returning results. Defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_ORDERS tool output.
 */
type CARDLY_LIST_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Paginated orders data.
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Last Record
           * @description 1-based index of the last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped before this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used for ordering results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of sort order
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Current page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based index of the first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total number of records available
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of orders returned by the API.
       */
      results: {
          /**
           * Costs
           * @description Aggregate costs for the order.
           */
          costs: {
              /**
               * Credits
               * @description Total card credit cost of the order.
               * @default null
               */
              credits: number | null;
              /**
               * Currency
               * @description Currency code for the order totals.
               */
              currency: string;
              /**
               * Discount
               * @description Total discount applied to the order.
               * @default null
               */
              discount: number | null;
              /**
               * Gift Credit
               * @description Total gift credit cost of the order.
               * @default null
               */
              giftCredit: number | null;
              /**
               * Gross
               * @description Gross monetary amount of the order.
               * @default null
               */
              gross: number | null;
              /**
               * Shipping
               * @description Shipping cost for the order.
               * @default null
               */
              shipping: number | null;
              /**
               * Shipping Tax
               * @description Shipping tax amount for the order.
               * @default null
               */
              shippingTax: number | null;
              /**
               * Tax
               * @description Total tax amount for the order.
               * @default null
               */
              tax: number | null;
              /**
               * Total
               * @description Total amount charged for the order.
               */
              total: number;
          };
          /**
           * Customer
           * @description Details about the order's customer.
           */
          customer: {
              /**
               * Address
               * @description Primary address line of the customer.
               */
              address: string;
              /**
               * Address2
               * @description Secondary address line of the customer.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City of the customer.
               */
              city: string;
              /**
               * Country
               * @description 2-character ISO country code of the customer.
               */
              country: string;
              /**
               * Email
               * @description Email address of the customer.
               */
              email: string;
              /**
               * First Name
               * @description First name of the order's customer.
               */
              firstName: string;
              /**
               * Last Name
               * @description Last name of the order's customer.
               */
              lastName: string;
              /**
               * Notes
               * @description Additional notes for the order.
               * @default null
               */
              notes: string | null;
              /**
               * Postcode
               * @description Postal code of the customer.
               */
              postcode: number | null;
              /**
               * Purchase Order No
               * @description Purchase order number if provided.
               * @default null
               */
              purchaseOrderNo: string | null;
              /**
               * Region
               * @description State or province of the customer.
               */
              region: string;
          };
          /**
           * Id
           * @description Unique identifier for this order.
           */
          id: string;
          /**
           * Items
           * @description List of items comprising this order.
           */
          items: {
              /**
               * Artwork
               * @description Artwork ID for this order item, if applicable.
               * @default null
               */
              artwork: string | null;
              /**
               * Costs
               * @description Costs associated with this order item.
               */
              costs: {
                  /**
                   * Credits
                   * @description Total card credit cost of the order.
                   * @default null
                   */
                  credits: number | null;
                  /**
                   * Currency
                   * @description Currency code for the order totals.
                   */
                  currency: string;
                  /**
                   * Discount
                   * @description Total discount applied to the order.
                   * @default null
                   */
                  discount: number | null;
                  /**
                   * Gift Credit
                   * @description Total gift credit cost of the order.
                   * @default null
                   */
                  giftCredit: number | null;
                  /**
                   * Gross
                   * @description Gross monetary amount of the order.
                   * @default null
                   */
                  gross: number | null;
                  /**
                   * Shipping
                   * @description Shipping cost for the order.
                   * @default null
                   */
                  shipping: number | null;
                  /**
                   * Shipping Tax
                   * @description Shipping tax amount for the order.
                   * @default null
                   */
                  shippingTax: number | null;
                  /**
                   * Tax
                   * @description Total tax amount for the order.
                   * @default null
                   */
                  tax: number | null;
                  /**
                   * Total
                   * @description Total amount charged for the order.
                   */
                  total: number;
              };
              /**
               * Delivery
               * @description Delivery timing details.
               */
              delivery: {
                  /**
                   * Dispatch
                   * @description Dispatch date.
                   * @default null
                   */
                  dispatch: string | null;
                  /**
                   * Estimated Max Arrival
                   * @description Estimated maximum arrival date.
                   * @default null
                   */
                  estimatedMaxArrival: string | null;
                  /**
                   * Estimated Min Arrival
                   * @description Estimated minimum arrival date.
                   * @default null
                   */
                  estimatedMinArrival: string | null;
                  /**
                   * Requested
                   * @description Requested delivery date.
                   * @default null
                   */
                  requested: string | null;
              };
              /**
               * Id
               * @description Unique identifier of this order item.
               */
              id: string;
              /**
               * Label
               * @description Label or title for this order item.
               */
              label: string;
              /**
               * Media
               * @description Media ID for this order item, if applicable.
               * @default null
               */
              media: string | null;
              /**
               * Quantity
               * @description Quantity ordered for this item.
               */
              quantity: number;
              /**
               * Recipient
               * @description Recipient address details.
               */
              recipient: {
                  /**
                   * Address
                   * @description Primary address line.
                   */
                  address: string;
                  /**
                   * Address2
                   * @description Secondary address line.
                   * @default null
                   */
                  address2: string | null;
                  /**
                   * City
                   * @description City of the address.
                   */
                  city: string;
                  /**
                   * Company
                   * @description Company on the address.
                   * @default null
                   */
                  company: string | null;
                  /**
                   * Country
                   * @description 2-character ISO country code of the address.
                   */
                  country: string;
                  /**
                   * Name
                   * @description Name on the address.
                   */
                  name: string;
                  /**
                   * Omit Address
                   * @description Whether to omit the address on the envelope.
                   */
                  omitAddress: boolean;
                  /**
                   * Postcode
                   * @description Postal code of the address.
                   */
                  postcode: number | null;
                  /**
                   * Region
                   * @description State or province of the address.
                   */
                  region: string;
              };
              /**
               * Related
               * @description Related items like gift cards or envelopes.
               * @default null
               */
              related: {
                  /**
                   * Costs
                   * @description Costs associated with the related item.
                   */
                  costs: {
                      /**
                       * Credits
                       * @description Total card credit cost of the order.
                       * @default null
                       */
                      credits: number | null;
                      /**
                       * Currency
                       * @description Currency code for the order totals.
                       */
                      currency: string;
                      /**
                       * Discount
                       * @description Total discount applied to the order.
                       * @default null
                       */
                      discount: number | null;
                      /**
                       * Gift Credit
                       * @description Total gift credit cost of the order.
                       * @default null
                       */
                      giftCredit: number | null;
                      /**
                       * Gross
                       * @description Gross monetary amount of the order.
                       * @default null
                       */
                      gross: number | null;
                      /**
                       * Shipping
                       * @description Shipping cost for the order.
                       * @default null
                       */
                      shipping: number | null;
                      /**
                       * Shipping Tax
                       * @description Shipping tax amount for the order.
                       * @default null
                       */
                      shippingTax: number | null;
                      /**
                       * Tax
                       * @description Total tax amount for the order.
                       * @default null
                       */
                      tax: number | null;
                      /**
                       * Total
                       * @description Total amount charged for the order.
                       */
                      total: number;
                  };
                  /**
                   * Id
                   * @description Unique identifier for the related item.
                   */
                  id: string;
                  /**
                   * Label
                   * @description Label or description of the related item.
                   */
                  label: string;
                  /**
                   * Quantity
                   * @description Quantity of the related item.
                   */
                  quantity: number;
                  /**
                   * Type
                   * @description Type of the related item.
                   */
                  type: string;
              }[] | null;
              /**
               * Scheduled Date
               * @description Scheduled arrival date, if provided.
               * @default null
               */
              scheduledDate: string | null;
              /**
               * Sender
               * @description Sender address details.
               */
              sender: {
                  /**
                   * Address
                   * @description Primary address line.
                   */
                  address: string;
                  /**
                   * Address2
                   * @description Secondary address line.
                   * @default null
                   */
                  address2: string | null;
                  /**
                   * City
                   * @description City of the address.
                   */
                  city: string;
                  /**
                   * Company
                   * @description Company on the address.
                   * @default null
                   */
                  company: string | null;
                  /**
                   * Country
                   * @description 2-character ISO country code of the address.
                   */
                  country: string;
                  /**
                   * Name
                   * @description Name on the address.
                   */
                  name: string;
                  /**
                   * Omit Address
                   * @description Whether to omit the address on the envelope.
                   */
                  omitAddress: boolean;
                  /**
                   * Postcode
                   * @description Postal code of the address.
                   */
                  postcode: number | null;
                  /**
                   * Region
                   * @description State or province of the address.
                   */
                  region: string;
              };
              /**
               * Ship Method
               * @description Shipping method used for this item.
               */
              shipMethod: string;
              /**
               * Ship To
               * @description Shipping destination: 'S' or 'D'.
               */
              shipTo: string;
              /**
               * Template
               * @description Template ID for this order item, if applicable.
               * @default null
               */
              template: string | null;
              /**
               * Timings
               * @description Lodge, shipped, held timings for this item.
               */
              timings: {
                  /**
                   * Held
                   * @description Held timestamp.
                   * @default null
                   */
                  held: string | null;
                  /**
                   * Lodge After
                   * @description After this time, the item can be lodged.
                   * @default null
                   */
                  lodgeAfter: string | null;
                  /**
                   * Lodged
                   * @description Lodged timestamp.
                   * @default null
                   */
                  lodged: string | null;
                  /**
                   * Shipped
                   * @description Shipped timestamp.
                   * @default null
                   */
                  shipped: string | null;
              };
              /**
               * OrderItemTracking
               * @description Tracking information for this item.
               * @default null
               */
              tracking: {
                  /**
                   * Carrier
                   * @description Shipping carrier code.
                   */
                  carrier: string;
                  /**
                   * Code
                   * @description Tracking code.
                   */
                  code: number | null;
                  /**
                   * Link
                   * @description URL for tracking shipment.
                   */
                  link: string;
              } | null;
              /**
               * Type
               * @description Type of the item (e.g., 'card').
               */
              type: string;
          }[];
          /**
           * Origin
           * @description Source of the order (e.g., 'api').
           */
          origin: string;
          /**
           * Status
           * @description Current status of the order.
           */
          status: string;
          /**
           * Timings
           * @description Overall order timing details.
           */
          timings: {
              /**
               * Created
               * @description Order creation timestamp.
               */
              created: string;
              /**
               * Paid
               * @description Order payment timestamp.
               * @default null
               */
              paid: string | null;
              /**
               * Updated
               * @description Order update timestamp.
               */
              updated: string;
          };
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status details.
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings, or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise.
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_TEMPLATES tool input.
 */
type CARDLY_LIST_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Maximum number of templates to return. Defaults to API default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before returning results. Defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_TEMPLATES tool output.
 */
type CARDLY_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Paginated template data
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Last Record
           * @description 1-based number of last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped before this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used for ordering results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of sort order
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Calculated page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based number of first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total records available for this query
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of templates returned by API
       */
      results: {
          /**
           * Created At
           * @description ISO timestamp when template was created
           */
          createdAt: string;
          /**
           * Definition
           * @description Template definition including layout and variables
           */
          definition: {
              /**
               * Pages
               * @description Page-specific overrides for this template
               */
              pages: {
                  [key: string]: unknown;
              }[];
              /**
               * Style
               * @description Default style applied to this template
               */
              style: {
                  /**
                   * Align
                   * @description Text alignment on card, e.g., left, center, right
                   */
                  align: string;
                  /**
                   * Color
                   * @description Hex color code for text
                   */
                  color: string;
                  /**
                   * Font
                   * @description Font identifier for text rendering
                   */
                  font: string;
                  /**
                   * Size
                   * @description Font size to use for text
                   */
                  size: number;
                  /**
                   * Writing
                   * @description Writing style identifier for handwriting element
                   */
                  writing: string;
              };
              /**
               * Variables
               * @description Variables available for template substitution
               */
              variables: {
                  [key: string]: {
                      /**
                       * Description
                       * @description Description of the variable for user context
                       */
                      description: string;
                      /**
                       * Example
                       * @description Example value for this variable
                       */
                      example: string;
                  };
              };
              /**
               * Version
               * @description Template definition version
               */
              version: number;
          };
          /**
           * Generic
           * @description Whether this is a generic (unbranded) template
           */
          generic: boolean;
          /**
           * GiftCard
           * @description Gift card configuration if this is a gift template
           * @default null
           */
          giftCard: {
              /**
               * Amount
               * @description Default gift card amount
               */
              amount: number;
              /**
               * Can Change
               * @description Whether the gift amount can be changed by recipient
               */
              canChange: boolean;
              /**
               * Currency
               * @description Currency code of the gift card
               */
              currency: string;
              /**
               * Id
               * @description Gift card identifier associated with this template
               */
              id: string;
              /**
               * Region
               * @description Region code for gift card
               */
              region: string;
          } | null;
          /**
           * Id
           * @description Unique template identifier
           */
          id: string;
          /**
           * Media
           * @description Media product associated with this template
           */
          media: {
              /**
               * Art
               * @description Artwork pixel dimensions
               */
              art: {
                  /**
                   * Px
                   * @description Artwork pixel dimensions, including and excluding bleed
                   */
                  px: {
                      /**
                       * Height
                       * @description Total artwork height in pixels
                       */
                      height: number;
                      /**
                       * Inner Height
                       * @description Inner area height in pixels
                       */
                      innerHeight: number;
                      /**
                       * Inner Width
                       * @description Inner area width in pixels
                       */
                      innerWidth: number;
                      /**
                       * Width
                       * @description Total artwork width in pixels
                       */
                      width: number;
                  };
              };
              /**
               * Bleed
               * @description Bleed zone dimensions in mm
               */
              bleed: {
                  /**
                   * Mm
                   * @description Bleed zone in millimeters
                   */
                  mm: {
                      /**
                       * X
                       * @description Bleed on x-axis in mm
                       */
                      x: number;
                      /**
                       * Y
                       * @description Bleed on y-axis in mm
                       */
                      y: number;
                  };
              };
              /**
               * Credit Cost
               * @description Credit cost for ordering this media type
               */
              creditCost: number;
              /**
               * Description
               * @description Media description and restrictions
               */
              description: string;
              /**
               * Dimensions
               * @description Physical dimensions in mm
               */
              dimensions: {
                  /**
                   * Mm
                   * @description Dimensions in millimeters
                   */
                  mm: {
                      /**
                       * Height
                       * @description Height in mm
                       */
                      height: number;
                      /**
                       * Width
                       * @description Width in mm
                       */
                      width: number;
                  };
              };
              /**
               * Id
               * @description Unique identifier for this media size
               */
              id: string;
              /**
               * Name
               * @description Media name
               */
              name: string;
              /**
               * Pages
               * @description Number of pages in this media
               */
              pages: number;
          };
          /**
           * Name
           * @description Template name
           */
          name: string;
          /**
           * Slug
           * @description URL-friendly template identifier
           */
          slug: string;
          /**
           * Updated At
           * @description ISO timestamp when template was last updated
           */
          updatedAt: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_USERS tool input.
 */
type CARDLY_LIST_USERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of users to return. Defaults to API default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of user records to skip before returning results. Defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_USERS tool output.
 */
type CARDLY_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Paginated users data
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Last Record
           * @description 1-based number of last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped before this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used for ordering results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of sorting, asc or desc
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Calculated page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based number of first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total number of records available
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of user objects
       */
      results: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the user was created
           */
          createdAt: string;
          /**
           * Email
           * @description User's email address
           */
          email: string;
          /**
           * First Name
           * @description User's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique user identifier
           */
          id: string;
          /**
           * Last Name
           * @description User's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Status
           * @description User account status
           */
          status: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status including status, messages, and version
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_WEBHOOKS tool input.
 */
type CARDLY_LIST_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhooks to return. Defaults to API default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhook records to skip before returning results. Defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_WEBHOOKS tool output.
 */
type CARDLY_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Paginated webhooks data
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Last Record
           * @description 1-based number of last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum number of records per page
           */
          limit: number;
          /**
           * Offset
           * @description Number of records skipped before this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used for ordering results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of sort order
           * @enum {string}
           */
          orderDirection: "asc" | "desc";
          /**
           * Page
           * @description Calculated page number based on offset and limit
           */
          page: number;
          /**
           * Start Record
           * @description 1-based number of first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total records available for this query
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of webhook objects
       */
      results: {
          /**
           * Created At
           * @description ISO timestamp when webhook was created
           */
          createdAt: string;
          /**
           * Description
           * @description User-provided description of the webhook
           * @default null
           */
          description: string | null;
          /**
           * Events
           * @description List of event types this webhook is subscribed to
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier for the webhook
           */
          id: string;
          /**
           * Metadata
           * @description User-provided metadata attached to this webhook
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Protected
           * @description Whether this webhook is protected from changes
           * @default null
           */
          protected: boolean | null;
          /**
           * Secret
           * @description Secret token used for signing events. Store securely.
           */
          secret: string;
          /**
           * Status
           * @description Status of the webhook, e.g., 'active' or 'disabled'
           */
          status: string;
          /**
           * Target Url
           * @description URL where webhook events will be sent
           */
          targetUrl: string;
          /**
           * Updated At
           * @description ISO timestamp when webhook was last updated
           */
          updatedAt: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings or errors
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call
       */
      status: string;
      /**
       * Version
       * @description Current API build version
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_WRITING_STYLES tool input.
 */
type CARDLY_LIST_WRITING_STYLES_INPUT = {
  /**
   * Limit
   * @description Number of records to return, defaults to 25 if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination, defaults to 0 if omitted.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CARDLY's CARDLY_LIST_WRITING_STYLES tool output.
 */
type CARDLY_LIST_WRITING_STYLES_OUTPUT = {
  /**
   * Data
   * @description Data object containing meta and list of writing styles
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the listing
       */
      meta: {
          /**
           * Last Record
           * @description 1-based index of the last record in this page
           */
          lastRecord: number;
          /**
           * Limit
           * @description Maximum records per page
           */
          limit: number;
          /**
           * Offset
           * @description Zero-based offset for this page
           */
          offset: number;
          /**
           * Order By
           * @description Field used to order results
           */
          orderBy: string;
          /**
           * Order Direction
           * @description Direction of ordering: asc or desc
           */
          orderDirection: string;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Start Record
           * @description 1-based index of the first record in this page
           */
          startRecord: number;
          /**
           * Total Records
           * @description Total number of records available
           */
          totalRecords: number;
      };
      /**
       * Results
       * @description List of writing styles returned by the API
       */
      results: {
          /**
           * Description
           * @description Description of the writing style
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the writing style
           */
          id: string;
          /**
           * Name
           * @description Name of the writing style
           */
          name: string;
          /**
           * Order
           * @description Order of the writing style (lower values denote more precise writing)
           */
          order: number;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status including status, messages, and version
   */
  state?: {
      [key: string]: string | string[] | number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description Indicates test mode when using a test API key
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_RETRIEVE_ACCOUNT_BALANCE tool input.
 */
type CARDLY_RETRIEVE_ACCOUNT_BALANCE_INPUT = object;

/**
 * Type of CARDLY's CARDLY_RETRIEVE_ACCOUNT_BALANCE tool output.
 */
type CARDLY_RETRIEVE_ACCOUNT_BALANCE_OUTPUT = {
  /**
   * Data
   * @description The nested data object containing balances.
   */
  data?: {
      /**
       * Balance
       * @description Your organisation's current card credit balance; may be non-integer.
       */
      balance: number;
      /**
       * Gift Credit
       * @description The gift credit balance and its currency.
       */
      giftCredit: {
          /**
           * Balance
           * @description Your organisation's current gift credit balance; may be non-integer.
           */
          balance: number;
          /**
           * Currency
           * @description The ISO currency code the gift credit balance is held in, e.g. 'USD'.
           */
          currency: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status including overall API call status, messages, and build version.
   */
  state?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description Indicates if the call ran in test mode with a test API key.
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_RETRIEVE_ORDER tool input.
 */
type CARDLY_RETRIEVE_ORDER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the order to retrieve.
   */
  id?: string;
};

/**
 * Type of CARDLY's CARDLY_RETRIEVE_ORDER tool output.
 */
type CARDLY_RETRIEVE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Detailed order information.
   */
  data?: {
      /**
       * Costs
       * @description Aggregate costs for the order.
       */
      costs: {
          /**
           * Credits
           * @description Total card credit cost of the order.
           * @default null
           */
          credits: number | null;
          /**
           * Currency
           * @description Currency code for the order totals.
           */
          currency: string;
          /**
           * Discount
           * @description Total discount applied to the order.
           * @default null
           */
          discount: number | null;
          /**
           * Gift Credit
           * @description Total gift credit cost of the order.
           * @default null
           */
          giftCredit: number | null;
          /**
           * Gross
           * @description Gross monetary amount of the order.
           * @default null
           */
          gross: number | null;
          /**
           * Shipping
           * @description Shipping cost for the order.
           * @default null
           */
          shipping: number | null;
          /**
           * Shipping Tax
           * @description Shipping tax amount for the order.
           * @default null
           */
          shippingTax: number | null;
          /**
           * Tax
           * @description Total tax amount for the order.
           * @default null
           */
          tax: number | null;
          /**
           * Total
           * @description Total amount charged for the order.
           */
          total: number;
      };
      /**
       * Customer
       * @description Details about the order's customer.
       */
      customer: {
          /**
           * Address
           * @description Primary address line of the customer.
           */
          address: string;
          /**
           * Address2
           * @description Secondary address line of the customer.
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description City of the customer.
           */
          city: string;
          /**
           * Country
           * @description 2-character ISO country code of the customer.
           */
          country: string;
          /**
           * Email
           * @description Email address of the customer.
           */
          email: string;
          /**
           * First Name
           * @description First name of the order's customer.
           */
          firstName: string;
          /**
           * Last Name
           * @description Last name of the order's customer.
           */
          lastName: string;
          /**
           * Notes
           * @description Additional notes for the order.
           * @default null
           */
          notes: string | null;
          /**
           * Postcode
           * @description Postal code of the customer.
           */
          postcode: number | null;
          /**
           * Purchase Order No
           * @description Purchase order number if provided.
           * @default null
           */
          purchaseOrderNo: string | null;
          /**
           * Region
           * @description State or province of the customer.
           */
          region: string;
      };
      /**
       * Id
       * @description Unique identifier for this order.
       */
      id: string;
      /**
       * Items
       * @description List of items comprising this order.
       */
      items: {
          /**
           * Artwork
           * @description Artwork ID for this order item, if applicable.
           * @default null
           */
          artwork: string | null;
          /**
           * Costs
           * @description Costs associated with this order item.
           */
          costs: {
              /**
               * Credits
               * @description Total card credit cost of the order.
               * @default null
               */
              credits: number | null;
              /**
               * Currency
               * @description Currency code for the order totals.
               */
              currency: string;
              /**
               * Discount
               * @description Total discount applied to the order.
               * @default null
               */
              discount: number | null;
              /**
               * Gift Credit
               * @description Total gift credit cost of the order.
               * @default null
               */
              giftCredit: number | null;
              /**
               * Gross
               * @description Gross monetary amount of the order.
               * @default null
               */
              gross: number | null;
              /**
               * Shipping
               * @description Shipping cost for the order.
               * @default null
               */
              shipping: number | null;
              /**
               * Shipping Tax
               * @description Shipping tax amount for the order.
               * @default null
               */
              shippingTax: number | null;
              /**
               * Tax
               * @description Total tax amount for the order.
               * @default null
               */
              tax: number | null;
              /**
               * Total
               * @description Total amount charged for the order.
               */
              total: number;
          };
          /**
           * Delivery
           * @description Delivery timing details.
           */
          delivery: {
              /**
               * Dispatch
               * @description Dispatch date.
               * @default null
               */
              dispatch: string | null;
              /**
               * Estimated Max Arrival
               * @description Estimated maximum arrival date.
               * @default null
               */
              estimatedMaxArrival: string | null;
              /**
               * Estimated Min Arrival
               * @description Estimated minimum arrival date.
               * @default null
               */
              estimatedMinArrival: string | null;
              /**
               * Requested
               * @description Requested delivery date.
               * @default null
               */
              requested: string | null;
          };
          /**
           * Id
           * @description Unique identifier of this order item.
           */
          id: string;
          /**
           * Label
           * @description Label or title for this order item.
           */
          label: string;
          /**
           * Media
           * @description Media ID for this order item, if applicable.
           * @default null
           */
          media: string | null;
          /**
           * Quantity
           * @description Quantity ordered for this item.
           */
          quantity: number;
          /**
           * Recipient
           * @description Recipient address details.
           */
          recipient: {
              /**
               * Address
               * @description Primary address line.
               */
              address: string;
              /**
               * Address2
               * @description Secondary address line.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City of the address.
               */
              city: string;
              /**
               * Company
               * @description Company on the address.
               * @default null
               */
              company: string | null;
              /**
               * Country
               * @description 2-character ISO country code of the address.
               */
              country: string;
              /**
               * Name
               * @description Name on the address.
               */
              name: string;
              /**
               * Omit Address
               * @description Whether to omit the address on the envelope.
               */
              omitAddress: boolean;
              /**
               * Postcode
               * @description Postal code of the address.
               */
              postcode: number | null;
              /**
               * Region
               * @description State or province of the address.
               */
              region: string;
          };
          /**
           * Related
           * @description Related items like gift cards or envelopes.
           * @default null
           */
          related: {
              /**
               * Costs
               * @description Costs associated with the related item.
               */
              costs: {
                  /**
                   * Credits
                   * @description Total card credit cost of the order.
                   * @default null
                   */
                  credits: number | null;
                  /**
                   * Currency
                   * @description Currency code for the order totals.
                   */
                  currency: string;
                  /**
                   * Discount
                   * @description Total discount applied to the order.
                   * @default null
                   */
                  discount: number | null;
                  /**
                   * Gift Credit
                   * @description Total gift credit cost of the order.
                   * @default null
                   */
                  giftCredit: number | null;
                  /**
                   * Gross
                   * @description Gross monetary amount of the order.
                   * @default null
                   */
                  gross: number | null;
                  /**
                   * Shipping
                   * @description Shipping cost for the order.
                   * @default null
                   */
                  shipping: number | null;
                  /**
                   * Shipping Tax
                   * @description Shipping tax amount for the order.
                   * @default null
                   */
                  shippingTax: number | null;
                  /**
                   * Tax
                   * @description Total tax amount for the order.
                   * @default null
                   */
                  tax: number | null;
                  /**
                   * Total
                   * @description Total amount charged for the order.
                   */
                  total: number;
              };
              /**
               * Id
               * @description Unique identifier for the related item.
               */
              id: string;
              /**
               * Label
               * @description Label or description of the related item.
               */
              label: string;
              /**
               * Quantity
               * @description Quantity of the related item.
               */
              quantity: number;
              /**
               * Type
               * @description Type of the related item.
               */
              type: string;
          }[] | null;
          /**
           * Scheduled Date
           * @description Scheduled arrival date, if provided.
           * @default null
           */
          scheduledDate: string | null;
          /**
           * Sender
           * @description Sender address details.
           */
          sender: {
              /**
               * Address
               * @description Primary address line.
               */
              address: string;
              /**
               * Address2
               * @description Secondary address line.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City of the address.
               */
              city: string;
              /**
               * Company
               * @description Company on the address.
               * @default null
               */
              company: string | null;
              /**
               * Country
               * @description 2-character ISO country code of the address.
               */
              country: string;
              /**
               * Name
               * @description Name on the address.
               */
              name: string;
              /**
               * Omit Address
               * @description Whether to omit the address on the envelope.
               */
              omitAddress: boolean;
              /**
               * Postcode
               * @description Postal code of the address.
               */
              postcode: number | null;
              /**
               * Region
               * @description State or province of the address.
               */
              region: string;
          };
          /**
           * Ship Method
           * @description Shipping method used for this item.
           */
          shipMethod: string;
          /**
           * Ship To
           * @description Shipping destination: 'S' or 'D'.
           */
          shipTo: string;
          /**
           * Template
           * @description Template ID for this order item, if applicable.
           * @default null
           */
          template: string | null;
          /**
           * Timings
           * @description Lodge, shipped, held timings for this item.
           */
          timings: {
              /**
               * Held
               * @description Held timestamp.
               * @default null
               */
              held: string | null;
              /**
               * Lodge After
               * @description After this time, the item can be lodged.
               * @default null
               */
              lodgeAfter: string | null;
              /**
               * Lodged
               * @description Lodged timestamp.
               * @default null
               */
              lodged: string | null;
              /**
               * Shipped
               * @description Shipped timestamp.
               * @default null
               */
              shipped: string | null;
          };
          /**
           * OrderItemTracking
           * @description Tracking information for this item.
           * @default null
           */
          tracking: {
              /**
               * Carrier
               * @description Shipping carrier code.
               */
              carrier: string;
              /**
               * Code
               * @description Tracking code.
               */
              code: string | null;
              /**
               * Link
               * @description URL for tracking shipment.
               */
              link: string;
          } | null;
          /**
           * Type
           * @description Type of the item (e.g., 'card').
           */
          type: string;
      }[];
      /**
       * Origin
       * @description Source of the order (e.g., 'api').
       */
      origin: string;
      /**
       * Status
       * @description Current status of the order.
       */
      status: string;
      /**
       * Timings
       * @description Overall order timing details.
       */
      timings: {
          /**
           * Created
           * @description Order creation timestamp.
           */
          created: string;
          /**
           * Paid
           * @description Order payment timestamp.
           * @default null
           */
          paid: string | null;
          /**
           * Updated
           * @description Order update timestamp.
           */
          updated: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status details.
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings, or errors.
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call.
       */
      status: string;
      /**
       * Version
       * @description Current API build version.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True if response was returned in test mode.
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_RETRIEVE_USER tool input.
 */
type CARDLY_RETRIEVE_USER_INPUT = {
  /**
   * Id
   * @description Unique ID of the user to retrieve.
   */
  id?: string;
};

/**
 * Type of CARDLY's CARDLY_RETRIEVE_USER tool output.
 */
type CARDLY_RETRIEVE_USER_OUTPUT = {
  /**
   * Data
   * @description Detailed user information.
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the user was created.
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description First name of the user.
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the user.
       */
      lastName: string;
      /**
       * Status
       * @description Status of the user (e.g., 'active').
       */
      status: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the user was last updated.
       * @default null
       */
      updatedAt: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Response status object.
   */
  state?: {
      /**
       * Messages
       * @description Notifications, warnings, or errors.
       */
      messages: string[];
      /**
       * Status
       * @description Overall status of the API call.
       */
      status: string;
      /**
       * Version
       * @description Current API build version.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key, omitted otherwise.
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type of CARDLY's CARDLY_UPDATE_WEBHOOK tool input.
 */
type CARDLY_UPDATE_WEBHOOK_INPUT = {
  /**
   * Description
   * @description Free-text description of what this webhook is for.
   * @default null
   */
  description: string | null;
  /**
   * Disabled
   * @description If true, disables the webhook; if false, enables it.
   * @default null
   */
  disabled: boolean | null;
  /**
   * Events
   * @description List of event names this webhook subscribes to; only notifications for these events will be sent.
   */
  events?: string[];
  /**
   * Id
   * @description The unique ID of the webhook to update.
   */
  id?: string;
  /**
   * Metadata
   * @description Arbitrary key/value pairs to attach to this webhook for user-defined metadata.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Target Url
   * Format: uri
   * @description The URL this webhook will send POST requests to once one of its subscribed events is triggered.
   */
  targetUrl?: string;
};

/**
 * Type of CARDLY's CARDLY_UPDATE_WEBHOOK tool output.
 */
type CARDLY_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The updated webhook object.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Human-readable notes or description of the webhook.
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description List of event names the webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Metadata
       * @description User-defined metadata attached to the webhook.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Protected
       * @description Reserved internal flag; usually null.
       * @default null
       */
      protected: boolean | null;
      /**
       * Secret
       * @description Secret token for verifying postbacks; only shown on creation, obfuscated afterwards.
       * @default null
       */
      secret: string | null;
      /**
       * Status
       * @description Current status of the webhook (e.g., 'active' or 'disabled').
       */
      status: string;
      /**
       * Target Url
       * Format: uri
       * @description The endpoint URL set to receive webhook notifications.
       */
      targetUrl: string;
      /**
       * Updated At
       * @description Timestamp of the last update to this webhook.
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * State
   * @description Standard API status object.
   */
  state?: {
      /**
       * Messages
       * @description Any notifications, warnings, or error messages relevant to the response.
       */
      messages: string[];
      /**
       * Status
       * @description Overall call status identifier.
       * @enum {string}
       */
      status: "OK" | "WARN" | "ERROR";
      /**
       * Version
       * @description Current API build version.
       */
      version: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Test Mode
   * @description True when using a test-mode API key; omitted otherwise.
   * @default null
   */
  testMode: boolean | null;
};

/**
 * Type map of all available tool input types for toolkit "CARDLY".
 */
export type CARDLY_TOOL_INPUTS = {
  CREATE_CONTACT_LIST: CARDLY_CREATE_CONTACT_LIST_INPUT
  CREATE_WEBHOOK: CARDLY_CREATE_WEBHOOK_INPUT
  DELETE_INVITATION_BY_EMAIL: CARDLY_DELETE_INVITATION_BY_EMAIL_INPUT
  DELETE_WEBHOOK: CARDLY_DELETE_WEBHOOK_INPUT
  GENERATE_PREVIEW: CARDLY_GENERATE_PREVIEW_INPUT
  LIST_ARTWORK: CARDLY_LIST_ARTWORK_INPUT
  LIST_CREDIT_HISTORY: CARDLY_LIST_CREDIT_HISTORY_INPUT
  LIST_FONTS: CARDLY_LIST_FONTS_INPUT
  LIST_GIFT_CREDIT_HISTORY: CARDLY_LIST_GIFT_CREDIT_HISTORY_INPUT
  LIST_INVITATIONS: CARDLY_LIST_INVITATIONS_INPUT
  LIST_MEDIA: CARDLY_LIST_MEDIA_INPUT
  LIST_ORDERS: CARDLY_LIST_ORDERS_INPUT
  LIST_TEMPLATES: CARDLY_LIST_TEMPLATES_INPUT
  LIST_USERS: CARDLY_LIST_USERS_INPUT
  LIST_WEBHOOKS: CARDLY_LIST_WEBHOOKS_INPUT
  LIST_WRITING_STYLES: CARDLY_LIST_WRITING_STYLES_INPUT
  RETRIEVE_ACCOUNT_BALANCE: CARDLY_RETRIEVE_ACCOUNT_BALANCE_INPUT
  RETRIEVE_ORDER: CARDLY_RETRIEVE_ORDER_INPUT
  RETRIEVE_USER: CARDLY_RETRIEVE_USER_INPUT
  UPDATE_WEBHOOK: CARDLY_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CARDLY".
 */
export type CARDLY_TOOL_OUTPUTS = {
  CREATE_CONTACT_LIST: CARDLY_CREATE_CONTACT_LIST_OUTPUT
  CREATE_WEBHOOK: CARDLY_CREATE_WEBHOOK_OUTPUT
  DELETE_INVITATION_BY_EMAIL: CARDLY_DELETE_INVITATION_BY_EMAIL_OUTPUT
  DELETE_WEBHOOK: CARDLY_DELETE_WEBHOOK_OUTPUT
  GENERATE_PREVIEW: CARDLY_GENERATE_PREVIEW_OUTPUT
  LIST_ARTWORK: CARDLY_LIST_ARTWORK_OUTPUT
  LIST_CREDIT_HISTORY: CARDLY_LIST_CREDIT_HISTORY_OUTPUT
  LIST_FONTS: CARDLY_LIST_FONTS_OUTPUT
  LIST_GIFT_CREDIT_HISTORY: CARDLY_LIST_GIFT_CREDIT_HISTORY_OUTPUT
  LIST_INVITATIONS: CARDLY_LIST_INVITATIONS_OUTPUT
  LIST_MEDIA: CARDLY_LIST_MEDIA_OUTPUT
  LIST_ORDERS: CARDLY_LIST_ORDERS_OUTPUT
  LIST_TEMPLATES: CARDLY_LIST_TEMPLATES_OUTPUT
  LIST_USERS: CARDLY_LIST_USERS_OUTPUT
  LIST_WEBHOOKS: CARDLY_LIST_WEBHOOKS_OUTPUT
  LIST_WRITING_STYLES: CARDLY_LIST_WRITING_STYLES_OUTPUT
  RETRIEVE_ACCOUNT_BALANCE: CARDLY_RETRIEVE_ACCOUNT_BALANCE_OUTPUT
  RETRIEVE_ORDER: CARDLY_RETRIEVE_ORDER_OUTPUT
  RETRIEVE_USER: CARDLY_RETRIEVE_USER_OUTPUT
  UPDATE_WEBHOOK: CARDLY_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CARDLY toolkit.
 */
export const CARDLY = {
  slug: "cardly",
  tools: {
    /**
     * Tool to add a new contact list. use after defining name and optional custom fields, before populating the list with contacts.
     */
    CREATE_CONTACT_LIST: "CARDLY_CREATE_CONTACT_LIST",
    /**
     * Tool to create a new webhook subscription. use when you need cardly to notify your application via http post for specific events.
     */
    CREATE_WEBHOOK: "CARDLY_CREATE_WEBHOOK",
    /**
     * Tool to delete an invitation by email address. use when you need to invalidate an outstanding invitation immediately.
     */
    DELETE_INVITATION_BY_EMAIL: "CARDLY_DELETE_INVITATION_BY_EMAIL",
    /**
     * Tool to delete a webhook. use after confirming the webhook id to immediately cease all activity and event subscriptions for that webhook.
     */
    DELETE_WEBHOOK: "CARDLY_DELETE_WEBHOOK",
    /**
     * Tool to generate a low-quality, watermarked preview document for a card. use after confirming artwork and template details to estimate costs and delivery.
     */
    GENERATE_PREVIEW: "CARDLY_GENERATE_PREVIEW",
    /**
     * Tool to retrieve the currently available artwork for your organisation. use when you need to list and paginate artwork items, optionally filtering to only your own artwork.
     */
    LIST_ARTWORK: "CARDLY_LIST_ARTWORK",
    /**
     * Tool to list credit history records. use after checking account balance to review recent credits/debits.
     */
    LIST_CREDIT_HISTORY: "CARDLY_LIST_CREDIT_HISTORY",
    /**
     * Tool to list your currently available fonts. use after confirming authentication to explore font options in cardly.
     */
    LIST_FONTS: "CARDLY_LIST_FONTS",
    /**
     * Tool to list gift credit history records for your organization. use when you need paginated gift credit entries with optional time-based filters.
     */
    LIST_GIFT_CREDIT_HISTORY: "CARDLY_LIST_GIFT_CREDIT_HISTORY",
    /**
     * Tool to retrieve active invitations for your organisation with optional filters. use when you need to audit invited users and their statuses before sending new invitations or revoking access.
     */
    LIST_INVITATIONS: "CARDLY_LIST_INVITATIONS",
    /**
     * Tool to retrieve the currently available media sizes for product artwork. use when you need to explore or validate media options before creating artwork.
     */
    LIST_MEDIA: "CARDLY_LIST_MEDIA",
    /**
     * Tool to retrieve orders placed by your organisation. use when you need to fetch paginated order history after confirming the endpoint.
     */
    LIST_ORDERS: "CARDLY_LIST_ORDERS",
    /**
     * Tool to retrieve your currently available templates from cardly. use to list and paginate templates for selection in card sends.
     */
    LIST_TEMPLATES: "CARDLY_LIST_TEMPLATES",
    /**
     * Tool to retrieve all users associated with your account. use when you need to list and paginate user accounts.
     */
    LIST_USERS: "CARDLY_LIST_USERS",
    /**
     * Tool to retrieve any active or disabled webhooks set up for your organisation. use when you need to audit configured webhook endpoints before modifying subscriptions.
     */
    LIST_WEBHOOKS: "CARDLY_LIST_WEBHOOKS",
    /**
     * Tool to list available writing styles. use when you need to retrieve writing styles available for handwriting personalization.
     */
    LIST_WRITING_STYLES: "CARDLY_LIST_WRITING_STYLES",
    /**
     * Tool to retrieve the current account and gift credit balances for your organisation. use after authenticating to verify available credit before placing orders.
     */
    RETRIEVE_ACCOUNT_BALANCE: "CARDLY_RETRIEVE_ACCOUNT_BALANCE",
    /**
     * Tool to retrieve information on a specific order. use after obtaining an order id to fetch its details.
     */
    RETRIEVE_ORDER: "CARDLY_RETRIEVE_ORDER",
    /**
     * Tool to retrieve detailed information about a specific user. use after obtaining the user id to fetch its details.
     */
    RETRIEVE_USER: "CARDLY_RETRIEVE_USER",
    /**
     * Tool to update a webhook’s settings, including target url and events. use after retrieving existing webhook to apply configuration changes.
     */
    UPDATE_WEBHOOK: "CARDLY_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CARDLY".
 */
export type CARDLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CARDLY".
 */
export type CARDLY_TRIGGER_EVENTS = {}
