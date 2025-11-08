// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GIFT_UP's GIFT_UP_GET_CHECKOUT_SETTINGS tool input.
 */
type GIFT_UP_GET_CHECKOUT_SETTINGS_INPUT = object;

/**
 * Type of GIFT_UP's GIFT_UP_GET_CHECKOUT_SETTINGS tool output.
 */
type GIFT_UP_GET_CHECKOUT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Additional Custom Html
       * @description Custom HTML injected after order completion (script tags not allowed)
       * @default null
       */
      additionalCustomHtml: string | null;
      /**
       * Allow Custom Tip Values
       * @description Whether customers can enter a custom tip amount
       * @default null
       */
      allowCustomTipValues: boolean | null;
      /**
       * Background Color
       * @description Background color mode of the checkout page (light or dark)
       * @default null
       * @enum {string|null}
       */
      backgroundColor: "light" | "dark" | null;
      /**
       * Continue Link Text
       * @description Label for the optional post-order button (requires continueLinkUrl)
       * @default null
       */
      continueLinkText: string | null;
      /**
       * Continue Link Url
       * @description URL target for the optional post-order button (requires continueLinkText)
       * @default null
       */
      continueLinkUrl: string | null;
      /**
       * Default For
       * @description Default recipient setting. One of: SomeoneElse, Me, OnlySomeoneElse, OnlyMe.
       * @default null
       * @enum {string|null}
       */
      defaultFor: "SomeoneElse" | "Me" | "OnlySomeoneElse" | "OnlyMe" | null;
      /**
       * Font Family
       * @description CSS font-family used during checkout, e.g., 'Helvetica, Arial, sans-serif'
       * @default null
       */
      fontFamily: string | null;
      /**
       * Font Size
       * @description Font size in pixels, including 'px' suffix, e.g., '16px'
       * @default null
       */
      fontSize: string | null;
      /**
       * Introduction Text
       * @description Introductory text displayed above the checkout form
       * @default null
       */
      introductionText: string | null;
      /**
       * Logo Url
       * @description URL of the logo displayed on the hosted checkout page
       * @default null
       */
      logoUrl: string | null;
      /**
       * Override Tip Values
       * @description Suggested tip values shown as choices, e.g., ['10%', '5', '€2']
       * @default null
       */
      overrideTipValues: string[] | null;
      /**
       * Redirect Url
       * @description URL to redirect customers after purchase. Supports placeholders: {{orderid}}, {{currency}}, {{revenue}}, {{code}}, {{sku}}, {{name}}.
       * @default null
       */
      redirectUrl: string | null;
      /**
       * Service Fee Charged
       * @description Whether a service fee is applied at checkout
       * @default null
       */
      serviceFeeCharged: boolean | null;
      /**
       * Service Fee Fixed
       * @description Fixed amount charged as service fee (ignored if serviceFeeCharged is false)
       * @default null
       */
      serviceFeeFixed: number | null;
      /**
       * Service Fee Percentage
       * @description Percentage charged as service fee (ignored if serviceFeeCharged is false)
       * @default null
       */
      serviceFeePercentage: number | null;
      /**
       * Show Balance Checker
       * @description Whether to show a gift card balance checker on checkout
       * @default null
       */
      showBalanceChecker: boolean | null;
      /**
       * Theme Color
       * @description Primary theme color as a hex code (e.g., '#ff0000') or RGB value
       * @default null
       */
      themeColor: string | null;
      /**
       * Tips Enabled
       * @description Whether tipping is enabled on the checkout page
       * @default null
       */
      tipsEnabled: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIFT_UP's GIFT_UP_GET_COMPANY tool input.
 */
type GIFT_UP_GET_COMPANY_INPUT = object;

/**
 * Type of GIFT_UP's GIFT_UP_GET_COMPANY tool output.
 */
type GIFT_UP_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Can Show Checkout
       * @description True if enough steps are completed to render the checkout
       */
      canShowCheckout: boolean;
      /**
       * Currency
       * @description Three-letter currency code used for transactions
       */
      currency: string;
      /**
       * Id
       * @description Unique GUID identifier for the company
       */
      id: string;
      /**
       * Is Checkout Live
       * @description True if the checkout has been seen live
       */
      isCheckoutLive: boolean;
      /**
       * Name
       * @description Company name
       */
      name: string;
      /**
       * Onboarding Completed
       * @description True if all onboarding steps are completed
       */
      onboardingCompleted: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIFT_UP's GIFT_UP_LIST_GIFT_CARDS tool input.
 */
type GIFT_UP_LIST_GIFT_CARDS_INPUT = {
  /**
   * Created On Or After
   * Format: date-time
   * @description Include only gift cards created on or after this UTC datetime (ISO 8601)
   * @default null
   */
  createdOnOrAfter: string | null;
  /**
   * Limit
   * @description Number of gift cards to return; default is 10
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of gift cards to skip; default is 0
   * @default null
   */
  offset: number | null;
  /**
   * Order Id
   * @description Include only gift cards for this order ID (GUID)
   * @default null
   */
  orderId: string | null;
  /**
   * Payment Transaction Id
   * @description Include only gift cards where the payment provider transaction ID matches
   * @default null
   */
  paymentTransactionId: string | null;
  /**
   * Purchaser Email
   * Format: email
   * @description Include only gift cards with this purchaser email address
   * @default null
   */
  purchaserEmail: string | null;
  /**
   * Recipient Email
   * Format: email
   * @description Include only gift cards with this recipient email address
   * @default null
   */
  recipientEmail: string | null;
  /**
   * Sku
   * @description Include only gift cards with this private SKU value
   * @default null
   */
  sku: string | null;
  /**
   * Status
   * @description Include only gift cards in this state
   * @default null
   * @enum {string|null}
   */
  status: "active" | "expired" | "redeemed" | "voided" | null;
  /**
   * Updated On Or After
   * Format: date-time
   * @description Include only gift cards updated on or after this UTC datetime (ISO 8601)
   * @default null
   */
  updatedOnOrAfter: string | null;
};

/**
 * Type of GIFT_UP's GIFT_UP_LIST_GIFT_CARDS tool output.
 */
type GIFT_UP_LIST_GIFT_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Gift Cards
       * @description List of gift cards
       */
      giftCards: {
          /**
           * Backing Type
           * @description Balance backing type
           * @enum {string}
           */
          backingType: "Currency" | "Units";
          /**
           * Can Be Redeemed
           * @description True if the card can be redeemed now
           */
          canBeRedeemed: boolean;
          /**
           * Code
           * @description Gift card code
           */
          code: string;
          /**
           * Download Links
           * @description Download links for artwork/PDF/wallet
           */
          downloadLinks: {
              /**
               * Apple Wallet Url
               * @description URL for Apple Wallet pass
               */
              appleWalletUrl: string;
              /**
               * Artwork Url
               * @description URL for artwork download
               */
              artworkUrl: string;
              /**
               * Google Wallet Url
               * @description URL for Google Wallet pass
               */
              googleWalletUrl: string;
              /**
               * Image Url
               * @description URL for image download
               */
              imageUrl: string;
              /**
               * Pdf Url
               * @description URL for PDF download
               */
              pdfUrl: string;
          };
          /**
           * Email Fulfilment
           * @description Email fulfilment details
           */
          emailFulfilment: {
              /**
               * Email Address
               * Format: email
               * @description Recipient email address
               */
              emailAddress: string;
              /**
               * Scheduled For
               * Format: date-time
               * @description Scheduled send time (UTC); null if immediate
               * @default null
               */
              scheduledFor: string | null;
          };
          /**
           * Equivalent Value Per Unit
           * @description Equivalent value per unit
           */
          equivalentValuePerUnit: number | null;
          /**
           * Expires On
           * Format: date-time
           * @description Expiry datetime; null if none
           * @default null
           */
          expiresOn: string | null;
          /**
           * Fulfilled By
           * @description Fulfilment method
           * @enum {string}
           */
          fulfilledBy: "Post" | "Email";
          /**
           * Fulfilled On
           * Format: date-time
           * @description Datetime when the card was fulfilled (UTC)
           */
          fulfilledOn: string;
          /**
           * Has Expired
           * @description True if the card has expired
           */
          hasExpired: boolean;
          /**
           * Initial Units
           * @description Initial units balance
           */
          initialUnits: number;
          /**
           * Initial Value
           * @description Initial currency balance
           */
          initialValue: number | null;
          /**
           * Is Voided
           * @description True if the card is voided
           */
          isVoided: boolean;
          /**
           * Ledger
           * @description History of ledger events for the gift card
           */
          ledger: {
              /**
               * Event Occured At Location Id
               * @description Location GUID where event occurred
               */
              eventOccuredAtLocationId: string;
              /**
               * Event Occured On
               * Format: date-time
               * @description Event datetime (UTC)
               */
              eventOccuredOn: string;
              /**
               * Event Type
               * @description Type of event: GiftCardCreated|CreditAdded|Redeemed|Expired|Unexpired|Voided|Reactivated
               */
              eventType: string;
              /**
               * Id
               * @description Unique GUID for the ledger event
               */
              id: string;
              /**
               * Metadata
               * @description Additional metadata for the event
               */
              metadata: {
                  [key: string]: unknown;
              };
              /**
               * Reason
               * @description Reason for the event
               */
              reason: string;
              /**
               * Units
               * @description Unit change for the event
               */
              units: number;
              /**
               * Value
               * @description Value change for the event
               */
              value: number | null;
              /**
               * Who Email
               * Format: email
               * @description Email of the actor
               */
              whoEmail: string;
              /**
               * Who Name
               * @description Name of the actor
               */
              whoName: string;
          }[];
          /**
           * Message
           * @description Custom message printed on the card
           */
          message: string;
          /**
           * Not Yet Valid
           * @description True if the card is not yet valid
           */
          notYetValid: boolean;
          /**
           * Order
           * @description Associated order details
           */
          order: {
              /**
               * Created On
               * Format: date-time
               * @description Order creation time (UTC)
               */
              createdOn: string;
              /**
               * Currency
               * @description Currency of the order
               */
              currency: string;
              /**
               * Custom Fields
               * @description Custom fields for the order
               */
              customFields: {
                  /**
                   * Label
                   * @description Custom field label
                   */
                  label: string;
                  /**
                   * Value
                   * @description Custom field value (string, number, or boolean)
                   */
                  value: string | null;
              }[];
              /**
               * Discount
               * @description Discount amount
               */
              discount: number | null;
              /**
               * Download Links
               * @description Links to download gift card artifacts
               */
              downloadLinks: {
                  /**
                   * Single
                   * @description Links for single downloads
                   */
                  single: {
                      /**
                       * Image Url
                       * @description URL to download single PNG
                       */
                      imageUrl: string;
                      /**
                       * Pdf Url
                       * @description URL to download single PDF
                       */
                      pdfUrl: string;
                  };
                  /**
                   * Zip
                   * @description Links for batch downloads
                   */
                  zip: {
                      /**
                       * Image Url
                       * @description URL to download ZIP of PNGs
                       */
                      imageUrl: string;
                      /**
                       * Pdf Url
                       * @description URL to download ZIP of PDFs
                       */
                      pdfUrl: string;
                  };
              };
              /**
               * Id
               * @description Unique order GUID
               */
              id: string;
              /**
               * Metadata
               * @description Metadata key-value store
               */
              metadata: {
                  [key: string]: unknown;
              };
              /**
               * Notes
               * @description Notes on the order
               */
              notes: {
                  /**
                   * Content
                   * @description Note content
                   */
                  content: string;
                  /**
                   * Created On
                   * Format: date-time
                   * @description When the note was created (UTC)
                   */
                  createdOn: string;
                  /**
                   * Username
                   * @description User who created the note
                   */
                  username: string;
              }[];
              /**
               * Order Number
               * @description Reference number for the order
               */
              orderNumber: string;
              /**
               * Payment
               * @description Payment details for the order
               */
              payment: {
                  /**
                   * Account Id
                   * @description Payment provider account ID
                   */
                  accountId: string;
                  /**
                   * Provider
                   * @description Payment provider name
                   */
                  provider: string;
                  /**
                   * Transaction Id
                   * @description Payment provider transaction ID
                   */
                  transactionId: string;
              };
              /**
               * Promotions
               * @description Promotions applied to the order
               */
              promotions: {
                  /**
                   * Code
                   * @description Promotion code used
                   */
                  code: string;
                  /**
                   * Name
                   * @description Promotion name
                   */
                  name: string;
                  /**
                   * Promotion Id
                   * @description Unique GUID for the promotion
                   */
                  promotionId: string;
              }[];
              /**
               * Purchaser Email
               * Format: email
               * @description Purchaser's email address
               */
              purchaserEmail: string;
              /**
               * Purchaser Name
               * @description Purchaser's name
               */
              purchaserName: string;
              /**
               * Referrer
               * @description Origin of the order
               */
              referrer: string;
              /**
               * Revenue
               * @description Total revenue amount
               */
              revenue: number | null;
              /**
               * Sales Taxes
               * @description Sales taxes applied
               */
              salesTaxes: {
                  /**
                   * Amount
                   * @description Amount of tax collected
                   */
                  amount: number | null;
                  /**
                   * Label
                   * @description Sales tax label
                   */
                  label: string;
                  /**
                   * Type
                   * @description Tax type: inclusive or exclusive
                   */
                  type: string;
              }[];
              /**
               * Selected Recipient
               * @description Recipient type: SomeoneElse, Purchaser or None
               */
              selectedRecipient: string;
              /**
               * Service Fee
               * @description Service fee amount
               */
              serviceFee: number | null;
              /**
               * Shipping Fee
               * @description Shipping fee amount
               */
              shippingFee: number | null;
              /**
               * Tip
               * @description Tip amount
               */
              tip: number | null;
          };
          /**
           * Postal Fulfilment
           * @description Postal fulfilment details
           */
          postalFulfilment: {
              /**
               * Address
               * @description Postal address details
               */
              address: {
                  /**
                   * Address1
                   * @description Primary street address
                   */
                  address1: string;
                  /**
                   * Address2
                   * @description Secondary street address
                   * @default null
                   */
                  address2: string | null;
                  /**
                   * City
                   * @description City name
                   */
                  city: string;
                  /**
                   * Country Code
                   * @description Two-letter ISO country code
                   */
                  countryCode: string;
                  /**
                   * Name
                   * @description Recipient or return name
                   */
                  name: string;
                  /**
                   * Postal Code
                   * @description Postal or ZIP code
                   */
                  postalCode: string;
                  /**
                   * State
                   * @description State or province name
                   */
                  state: string;
              };
              /**
               * Shipping Option Name
               * @description Selected shipping option name
               */
              shippingOptionName: string;
          };
          /**
           * Recipient Email
           * Format: email
           * @description Recipient's email
           */
          recipientEmail: string;
          /**
           * Recipient Name
           * @description Recipient's name
           */
          recipientName: string;
          /**
           * Remaining Units
           * @description Remaining units balance
           */
          remainingUnits: number;
          /**
           * Remaining Value
           * @description Remaining currency balance
           */
          remainingValue: number | null;
          /**
           * Sku
           * @description Private SKU of the associated item
           */
          sku: string;
          /**
           * Sub Title
           * @description Subtitle shown under the title
           */
          subTitle: string;
          /**
           * Terms
           * @description Terms captured when created
           */
          terms: string;
          /**
           * Title
           * @description Main title of the gift card
           */
          title: string;
          /**
           * Valid From
           * Format: date-time
           * @description Valid-from datetime; null if none
           * @default null
           */
          validFrom: string | null;
          /**
           * Voided On
           * Format: date-time
           * @description Voided datetime; null if none
           * @default null
           */
          voidedOn: string | null;
      }[];
      /**
       * Has More
       * @description True if more gift cards are available
       */
      hasMore: boolean;
      /**
       * Total
       * @description Total number of gift cards matching filters
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIFT_UP's GIFT_UP_LIST_ITEMS tool input.
 */
type GIFT_UP_LIST_ITEMS_INPUT = {
  /**
   * Group Id
   * @description Include only items in this group (UUID)
   * @default null
   */
  groupId: string | null;
};

/**
 * Type of GIFT_UP's GIFT_UP_LIST_ITEMS tool output.
 */
type GIFT_UP_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of items available for sale
       */
      items: {
          /**
           * Additional Terms
           * @description Additional terms applied to gift card sales containing this item
           * @default null
           */
          additionalTerms: string | null;
          /**
           * Artwork Url
           * @description Artwork URL for this item (set in the dashboard)
           * @default null
           */
          artworkURL: string | null;
          /**
           * Available From
           * Format: date-time
           * @description Datetime the item becomes buyable (UTC)
           * @default null
           */
          availableFrom: string | null;
          /**
           * Available Until
           * Format: date-time
           * @description Datetime the item is no longer buyable (UTC)
           * @default null
           */
          availableUntil: string | null;
          /**
           * Backing Type
           * @description Balance backing type; one of Currency, Units
           * @enum {string}
           */
          backingType: "Currency" | "Units";
          /**
           * Codes
           * @description Optional list of pre-generated codes to issue when this item is sold
           * @default null
           */
          codes: string[] | null;
          /**
           * Description
           * @description Description of the item
           */
          description: string;
          /**
           * Details Url
           * @description Fully qualified URL with more information about the item
           * @default null
           */
          detailsURL: string | null;
          /**
           * Equivalent Value Per Unit
           * @description Equivalent value per unit for reporting (Units-backed items)
           * @default null
           */
          equivalentValuePerUnit: number | null;
          /**
           * Expires On
           * Format: date-time
           * @description Datetime gift cards from this item expire (UTC)
           * @default null
           */
          expiresOn: string | null;
          /**
           * Expires On In Days
           * @description Days after creation until expiry (UTC)
           * @default null
           */
          expiresOnInDays: number | null;
          /**
           * Expires On In Months
           * @description Months after creation until expiry (UTC)
           * @default null
           */
          expiresOnInMonths: number | null;
          /**
           * Group
           * @description Item group name this item is part of
           * @default null
           */
          group: string | null;
          /**
           * Group Id
           * @description Item group id this item is part of
           * @default null
           */
          groupId: string | null;
          /**
           * Id
           * @description Unique GUID identifier for the item
           */
          id: string;
          /**
           * Maximum Price
           * @description Maximum customer-entered price for custom value items (Currency + priceType=Custom)
           * @default null
           */
          maximumPrice: number | null;
          /**
           * Minimum Price
           * @description Minimum customer-entered price for custom value items (Currency + priceType=Custom)
           * @default null
           */
          minimumPrice: number | null;
          /**
           * Name
           * @description Name of the item
           */
          name: string;
          /**
           * Override Expiry
           * @description Whether this item overrides the default expiry
           */
          overrideExpiry: boolean;
          /**
           * Override Valid From
           * @description Whether this item overrides the default valid-from
           */
          overrideValidFrom: boolean;
          /**
           * Per Order Limit
           * @description Optional per-order purchase limit for this item
           * @default null
           */
          perOrderLimit: number | null;
          /**
           * Price
           * @description Price to charge the purchaser. Required if backingType is Currency and priceType is Specified, or if backingType is Units.
           * @default null
           */
          price: number | null;
          /**
           * Price Type
           * @description Price type; one of Specified, Custom
           * @enum {string}
           */
          priceType: "Specified" | "Custom";
          /**
           * Sku
           * @description Private SKU/code in an external system; added to gift cards sold containing this item
           * @default null
           */
          sku: string | null;
          /**
           * Stock Level
           * @description Optional stock level available to purchase
           * @default null
           */
          stockLevel: number | null;
          /**
           * Units
           * @description Unit balance issued on the gift card (Units-backed items)
           * @default null
           */
          units: number | null;
          /**
           * Valid From
           * Format: date-time
           * @description Datetime gift cards from this item become valid (UTC)
           * @default null
           */
          validFrom: string | null;
          /**
           * Valid From In Days
           * @description Days after creation that gift cards become valid (UTC)
           * @default null
           */
          validFromInDays: number | null;
          /**
           * Value
           * @description Currency balance issued on the gift card (Currency-backed items)
           * @default null
           */
          value: number | null;
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
 * Type of GIFT_UP's GIFT_UP_LIST_ITEM_GROUPS tool input.
 */
type GIFT_UP_LIST_ITEM_GROUPS_INPUT = object;

/**
 * Type of GIFT_UP's GIFT_UP_LIST_ITEM_GROUPS tool output.
 */
type GIFT_UP_LIST_ITEM_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of item group objects
       */
      groups: {
          /**
           * Auto Expand
           * @description Whether items are expanded by default in checkout
           */
          autoExpand: boolean;
          /**
           * Description
           * @description Description of the item group
           */
          description: string;
          /**
           * Id
           * @description Unique GUID identifier for the item group
           */
          id: string;
          /**
           * Name
           * @description Name of the item group
           */
          name: string;
          /**
           * Sort Order
           * @description Sort order for checkout display (ascending)
           */
          sortOrder: number;
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
 * Type of GIFT_UP's GIFT_UP_LIST_LOCATIONS tool input.
 */
type GIFT_UP_LIST_LOCATIONS_INPUT = object;

/**
 * Type of GIFT_UP's GIFT_UP_LIST_LOCATIONS tool output.
 */
type GIFT_UP_LIST_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of location objects associated with the account
       */
      locations: {
          /**
           * Id
           * @description Unique GUID identifier for the location
           */
          id: string;
          /**
           * Name
           * @description Location name
           */
          name: string;
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
 * Type of GIFT_UP's GIFT_UP_LIST_REPORT_TRANSACTIONS tool input.
 */
type GIFT_UP_LIST_REPORT_TRANSACTIONS_INPUT = {
  /**
   * Code
   * @description Filter by gift card code.
   * @default null
   */
  code: string | null;
  /**
   * Event Occurred On Or After
   * Format: date-time
   * @description Include only transactions occurring on or after this UTC datetime.
   * @default null
   */
  eventOccurredOnOrAfter: string | null;
  /**
   * Event Occurred On Or Before
   * Format: date-time
   * @description Include only transactions occurring on or before this UTC datetime.
   * @default null
   */
  eventOccurredOnOrBefore: string | null;
  /**
   * Events
   * @description Filter by event type; can be specified multiple times. One of: OrderPlaced, GiftCardCreated, CreditAdded, Redeemed, Expired, Unexpired, Voided, Reactivated.
   * @default null
   */
  events: string[] | null;
  /**
   * Limit
   * @description Number of transactions to return (default 20).
   * @default null
   */
  limit: number | null;
  /**
   * Locations
   * @description Filter by location id (GUID); can be specified multiple times.
   * @default null
   */
  locations: string[] | null;
  /**
   * Offset
   * @description Number of transactions to skip (default 0).
   * @default null
   */
  offset: number | null;
  /**
   * Test Mode
   * @description If true, include header x-giftup-testmode: true to use test mode.
   * @default false
   */
  test_mode: boolean;
  /**
   * Users
   * @description Filter by user email address; can be specified multiple times.
   * @default null
   */
  users: string[] | null;
};

/**
 * Type of GIFT_UP's GIFT_UP_LIST_REPORT_TRANSACTIONS tool output.
 */
type GIFT_UP_LIST_REPORT_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more transactions are available after this page.
       */
      hasMore: boolean;
      /**
       * Total
       * @description Total number of matching transactions.
       */
      total: number;
      /**
       * Transactions
       * @description List of transaction objects.
       */
      transactions: {
          /**
           * Currency
           * @description 3-letter currency code.
           */
          currency: string;
          /**
           * Event Occured At Location Id
           * Format: uuid
           * @description Location id where the event occurred.
           */
          eventOccuredAtLocationId: string;
          /**
           * Event Occurred On
           * Format: date-time
           * @description When the event occurred.
           */
          eventOccurredOn: string;
          /**
           * Event Type
           * @description Type of the event.
           */
          eventType: string;
          /**
           * GiftCardInfo
           * @description Gift card information, present for gift card events.
           * @default null
           */
          giftCard: {
              /**
               * Code
               * @description Gift card code.
               */
              code: string;
              /**
               * Id
               * @description Gift card id.
               */
              id: string;
              /**
               * Title
               * @description Main title of the gift card.
               */
              title: string;
              /**
               * Unit Change
               * @description Unit change (for units-backed cards).
               */
              unitChange: number;
              /**
               * Value Change
               * @description Currency change introduced by this event.
               */
              valueChange: number | null;
          } | null;
          /**
           * Gift Up Fee
           * @description Gift Up! fee incurred for this transaction.
           */
          giftUpFee: number | null;
          /**
           * Id
           * Format: uuid
           * @description Unique identifier for the event.
           */
          id: string;
          /**
           * Metadata
           * @description Key-value data you provide.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * OrderDetails
           * @description Order details, present for OrderPlaced events.
           * @default null
           */
          orderDetails: {
              /**
               * Income
               * @description Revenue taken.
               */
              income: number | null;
              /**
               * Service Fee
               * @description Service fee charged.
               */
              serviceFee: number | null;
              /**
               * Shipping Fee
               * @description Shipping fee charged.
               */
              shippingFee: number | null;
              /**
               * Tip
               * @description Tip taken.
               */
              tip: number | null;
          } | null;
          /**
           * Order Id
           * @description Order id this transaction belongs to.
           * @default null
           */
          orderId: string | null;
          /**
           * Reason
           * @description Reason for the transaction.
           * @default null
           */
          reason: string | null;
          /**
           * Referrer
           * @description Origin of the event.
           * @default null
           */
          referrer: string | null;
          /**
           * Who Email
           * @description Email of the user who did the event.
           * @default null
           */
          whoEmail: string | null;
          /**
           * Who Name
           * @description Name of the user who did the event.
           * @default null
           */
          whoName: string | null;
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
 * Type of GIFT_UP's GIFT_UP_LIST_USERS tool input.
 */
type GIFT_UP_LIST_USERS_INPUT = {
  /**
   * X Giftup Displayname
   * @description Overrides display name used in API calls
   * @default null
   */
  x_giftup_displayname: string | null;
  /**
   * X Giftup Testmode
   * @description If true, call runs against test data where supported
   * @default null
   */
  x_giftup_testmode: boolean | null;
};

/**
 * Type of GIFT_UP's GIFT_UP_LIST_USERS tool output.
 */
type GIFT_UP_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users that have access to the account
       */
      users: {
          /**
           * Avatar Url
           * @description Uploaded image URL or base64 image when inviting/updating
           * @default null
           */
          avatarUrl: string | null;
          /**
           * Disable Search In Redeem App
           * @description True if user cannot search in the redeem app
           */
          disableSearchInRedeemApp: boolean;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Email Confirmed
           * @description True if the user has confirmed their email
           */
          emailConfirmed: boolean;
          /**
           * Expired Gift Card Redemption Disabled
           * @description True if user cannot redeem an expired/not-yet-valid gift card
           */
          expiredGiftCardRedemptionDisabled: boolean;
          /**
           * Hidden In Redeem App
           * @description True if hidden in the redeem app
           */
          hiddenInRedeemApp: boolean;
          /**
           * Hide Log In Redeem App
           * @description True if user cannot view a gift card's history log in the redeem app
           */
          hideLogInRedeemApp: boolean;
          /**
           * Id
           * @description Unique GUID identifier for the user
           */
          id: string;
          /**
           * Is Administrator
           * @description True if the user is a dashboard admin
           */
          isAdministrator: boolean;
          /**
           * Locations
           * @description Locations this user can operate in
           */
          locations: {
              /**
               * Id
               * @description Unique GUID identifier for the location
               */
              id: string;
              /**
               * Name
               * @description Name of the location
               */
              name: string;
          }[];
          /**
           * Name
           * @description Name of the user
           */
          name: string;
          /**
           * Pin
           * @description Redeem PIN number for the user
           * @default null
           */
          pin: string | null;
          /**
           * Redeem Location Restriction Enforced
           * @description True if user cannot redeem gift cards not issued for their location(s)
           */
          redeemLocationRestrictionEnforced: boolean;
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
 * Type of GIFT_UP's GIFT_UP_SUBSCRIBE_WEBHOOK tool input.
 */
type GIFT_UP_SUBSCRIBE_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Type of webhook event to subscribe to. Supported: order-created, gift-card-created, gift-card-updated, gift-card-redeemed.
   * @enum {string}
   */
  event?: "order-created" | "gift-card-created" | "gift-card-updated" | "gift-card-redeemed";
  /**
   * Is Test Mode
   * @description If true, only test webhooks will be sent.
   * @default false
   */
  isTestMode: boolean;
  /**
   * Secret
   * @description Optional secret used to sign webhook requests.
   * @default null
   */
  secret: string | null;
  /**
   * Target Url
   * Format: uri
   * @description The URL to which Gift Up! will POST webhook events.
   */
  targetUrl?: string;
};

/**
 * Type of GIFT_UP's GIFT_UP_SUBSCRIBE_WEBHOOK tool output.
 */
type GIFT_UP_SUBSCRIBE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the created webhook subscription.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GIFT_UP".
 */
export type GIFT_UP_TOOL_INPUTS = {
  GET_CHECKOUT_SETTINGS: GIFT_UP_GET_CHECKOUT_SETTINGS_INPUT
  GET_COMPANY: GIFT_UP_GET_COMPANY_INPUT
  LIST_GIFT_CARDS: GIFT_UP_LIST_GIFT_CARDS_INPUT
  LIST_ITEMS: GIFT_UP_LIST_ITEMS_INPUT
  LIST_ITEM_GROUPS: GIFT_UP_LIST_ITEM_GROUPS_INPUT
  LIST_LOCATIONS: GIFT_UP_LIST_LOCATIONS_INPUT
  LIST_REPORT_TRANSACTIONS: GIFT_UP_LIST_REPORT_TRANSACTIONS_INPUT
  LIST_USERS: GIFT_UP_LIST_USERS_INPUT
  SUBSCRIBE_WEBHOOK: GIFT_UP_SUBSCRIBE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GIFT_UP".
 */
export type GIFT_UP_TOOL_OUTPUTS = {
  GET_CHECKOUT_SETTINGS: GIFT_UP_GET_CHECKOUT_SETTINGS_OUTPUT
  GET_COMPANY: GIFT_UP_GET_COMPANY_OUTPUT
  LIST_GIFT_CARDS: GIFT_UP_LIST_GIFT_CARDS_OUTPUT
  LIST_ITEMS: GIFT_UP_LIST_ITEMS_OUTPUT
  LIST_ITEM_GROUPS: GIFT_UP_LIST_ITEM_GROUPS_OUTPUT
  LIST_LOCATIONS: GIFT_UP_LIST_LOCATIONS_OUTPUT
  LIST_REPORT_TRANSACTIONS: GIFT_UP_LIST_REPORT_TRANSACTIONS_OUTPUT
  LIST_USERS: GIFT_UP_LIST_USERS_OUTPUT
  SUBSCRIBE_WEBHOOK: GIFT_UP_SUBSCRIBE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GIFT_UP toolkit.
 */
export const GIFT_UP = {
  slug: "gift_up",
  tools: {
    /**
     * Tool to retrieve the current checkout settings. Use when you need to display or audit your checkout configuration.
     */
    GET_CHECKOUT_SETTINGS: "GIFT_UP_GET_CHECKOUT_SETTINGS",
    /**
     * Tool to retrieve company details. Use when you need to fetch the current company associated with the API key.
     */
    GET_COMPANY: "GIFT_UP_GET_COMPANY",
    /**
     * Tool to list gift cards. Use when you need to retrieve gift cards with optional filters.
     */
    LIST_GIFT_CARDS: "GIFT_UP_LIST_GIFT_CARDS",
    /**
     * Tool to list items. Use when you need to retrieve all items available for sale, optional filter by groupId.
     */
    LIST_ITEMS: "GIFT_UP_LIST_ITEMS",
    /**
     * Tool to list item groups. Use when you need to retrieve all item groups for filtering items by group.
     */
    LIST_ITEM_GROUPS: "GIFT_UP_LIST_ITEM_GROUPS",
    /**
     * Tool to list all locations. Use when you need to retrieve all locations associated with the account.
     */
    LIST_LOCATIONS: "GIFT_UP_LIST_LOCATIONS",
    /**
     * Tool to list report transactions with optional filters. Use after setting desired filters to retrieve transactions report.
     */
    LIST_REPORT_TRANSACTIONS: "GIFT_UP_LIST_REPORT_TRANSACTIONS",
    /**
     * Tool to list all users. Use when you need to retrieve all users who have access to your Gift Up! account.
     */
    LIST_USERS: "GIFT_UP_LIST_USERS",
    /**
     * Tool to subscribe to a Gift Up! webhook event. Use when you need to register a callback URL for specific account events.
     */
    SUBSCRIBE_WEBHOOK: "GIFT_UP_SUBSCRIBE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GIFT_UP".
 */
export type GIFT_UP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GIFT_UP".
 */
export type GIFT_UP_TRIGGER_EVENTS = {}
