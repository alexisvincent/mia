// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DAFFY's DAFFY_CREATE_GIFT tool input.
 */
type DAFFY_CREATE_GIFT_INPUT = {
  /**
   * Amount
   * @description Gift amount in cents (must be non-negative)
   */
  amount?: number;
  /**
   * Delivery Date
   * @description ISO8601 formatted date/time to deliver the gift
   * @default null
   */
  delivery_date: string | null;
  /**
   * Message
   * @description Personalized message to the recipient
   * @default null
   */
  message: string | null;
  /**
   * Name
   * @description Name of the gift recipient
   */
  name?: string;
};

/**
 * Type of DAFFY's DAFFY_CREATE_GIFT tool output.
 */
type DAFFY_CREATE_GIFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Gift amount in cents
       */
      amount: number;
      /**
       * Delivery Date
       * @description Scheduled delivery date/time
       * @default null
       */
      delivery_date: string | null;
      /**
       * Id
       * @description Unique identifier for the gift
       */
      id: string;
      /**
       * Message
       * @description The message sent with the gift
       * @default null
       */
      message: string | null;
      /**
       * Name
       * @description Name of the gift recipient
       */
      name: string;
      /**
       * Status
       * @description Status of the gift (e.g., 'pending', 'delivered')
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DAFFY's DAFFY_GET_BALANCE tool input.
 */
type DAFFY_GET_BALANCE_INPUT = object;

/**
 * Type of DAFFY's DAFFY_GET_BALANCE tool output.
 */
type DAFFY_GET_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * As Of
       * @description The ISO 8601 timestamp when the balance is accurate.
       */
      as_of: string;
      /**
       * Balance
       * @description The current dollar value in the user's account.
       */
      balance: number;
      /**
       * Currency
       * @description The currency code, usually 'USD'.
       */
      currency: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DAFFY's DAFFY_GET_CONTRIBUTIONS tool input.
 */
type DAFFY_GET_CONTRIBUTIONS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, defaults to 1
   * @default 1
   */
  page: number;
};

/**
 * Type of DAFFY's DAFFY_GET_CONTRIBUTIONS tool output.
 */
type DAFFY_GET_CONTRIBUTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of contribution objects
       */
      items: {
          /**
           * Completed At
           * Format: date-time
           * @description Timestamp when the payment was completed, may be null
           * @default null
           */
          completed_at: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the payment was created
           */
          created_at: string;
          /**
           * Currency
           * @description Currency contributed, e.g., USD, crypto token symbol
           */
          currency: string;
          /**
           * Frequency
           * @description Contribution frequency, e.g., OneTime, Recurring
           */
          frequency: string;
          /**
           * Id
           * @description Unique contribution ID
           */
          id: number;
          /**
           * Received At
           * Format: date-time
           * @description Timestamp when the payment was received, may be null
           * @default null
           */
          received_at: string | null;
          /**
           * Status
           * @description Payment status
           * @enum {string}
           */
          status: "pending" | "success" | "waiting_for_funds" | "failed";
          /**
           * Type
           * @description Payment type
           * @enum {string}
           */
          type: "bank_account_scheduled_deposit" | "credit_card_scheduled_deposit" | "crypto_payment" | "stock_payment" | "check_payment" | "wire_payment" | "check_daf_transfer" | "wire_daf_transfer" | "company_payment" | "third_party_payment";
          /**
           * Units
           * @description Number of units contributed
           */
          units: number;
          /**
           * Valuation
           * @description The unit price in US dollars
           */
          valuation: number;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Count
           * @description Total count of contributions
           */
          count: number;
          /**
           * Last
           * @description Last page number
           */
          last: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DAFFY's DAFFY_GET_DONATIONS tool input.
 */
type DAFFY_GET_DONATIONS_INPUT = {
  /**
   * Created After
   * @description Filter donations created after this ISO8601 date
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * @description Filter donations created before this ISO8601 date
   * @default null
   */
  created_before: string | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Starting point within the collection of results
   * @default null
   */
  offset: number | null;
};

/**
 * Type of DAFFY's DAFFY_GET_DONATIONS tool output.
 */
type DAFFY_GET_DONATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Donations
       * @description List of donation objects for the user
       */
      donations: {
          /**
           * Amount
           * @description Amount donated, in cents
           */
          amount: number;
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format
           */
          created_at: string;
          /**
           * Designation
           * @description Designation or purpose for the donation
           * @default null
           */
          designation: string | null;
          /**
           * Donor Id
           * @description Donor ID
           */
          donor_id: string;
          /**
           * Fund Id
           * @description ID of the recommended fund
           * @default null
           */
          fund_id: string | null;
          /**
           * Fund Name
           * @description Name of the fund, if applicable
           * @default null
           */
          fund_name: string | null;
          /**
           * Id
           * @description Unique identifier for the donation
           */
          id: string;
          /**
           * Nonprofit Id
           * @description ID of the nonprofit
           */
          nonprofit_id: string;
          /**
           * Nonprofit Name
           * @description Name of the nonprofit
           */
          nonprofit_name: string;
          /**
           * Receipt Url
           * @description URL for the donation receipt
           */
          receipt_url: string;
          /**
           * Status
           * @description Status of the donation
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DAFFY's DAFFY_GET_GIFTS tool input.
 */
type DAFFY_GET_GIFTS_INPUT = {
  /**
   * Filter
   * @description Only return gifts of this type: 'sent' or 'received'.
   * @default null
   * @enum {string|null}
   */
  filter: "sent" | "received" | null;
  /**
   * Limit
   * @description Maximum number of gifts to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of gifts to skip before starting to return results.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of DAFFY's DAFFY_GET_GIFTS tool output.
 */
type DAFFY_GET_GIFTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Gifts
       * @description List of gifts matching the query.
       */
      gifts: {
          /**
           * Amount
           * @description Amount of the gift.
           */
          amount: number;
          /**
           * Created At
           * @description ISO 8601 timestamp when the gift was created.
           */
          created_at: string;
          /**
           * Currency
           * @description ISO 4217 currency code.
           */
          currency: string;
          /**
           * Id
           * @description Unique identifier for the gift.
           */
          id: string;
          /**
           * Message
           * @description Optional message accompanying the gift.
           * @default null
           */
          message: string | null;
          /**
           * Receiver Id
           * @description ID of the receiver.
           */
          receiver_id: string;
          /**
           * Sender Id
           * @description ID of the sender.
           */
          sender_id: string;
          /**
           * Status
           * @description Current status of the gift.
           */
          status: string;
          /**
           * Type
           * @description Type of gift, either 'sent' or 'received'.
           * @enum {string}
           */
          type: "sent" | "received";
          /**
           * Updated At
           * @description ISO 8601 timestamp when the gift was last updated.
           */
          updated_at: string;
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
 * Type of DAFFY's DAFFY_GET_GIFT_BY_CODE tool input.
 */
type DAFFY_GET_GIFT_BY_CODE_INPUT = {
  /**
   * Code
   * @description UUID of the gift to retrieve.
   */
  code?: string;
};

/**
 * Type of DAFFY's DAFFY_GET_GIFT_BY_CODE tool output.
 */
type DAFFY_GET_GIFT_BY_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount of the gift.
       */
      amount: number;
      /**
       * Claimed
       * @description Indicates whether this gift was claimed.
       */
      claimed: boolean;
      /**
       * Code
       * @description Unique identifier for the gift.
       */
      code: string;
      /**
       * Created At
       * @description Timestamp when this gift was created, in ISO8601 format.
       */
      created_at: string;
      /**
       * Ein
       * @description Non-Profit EIN code associated with this gift.
       */
      ein: string;
      /**
       * Message
       * @description Message associated with the gift.
       */
      message: string;
      /**
       * Name
       * @description Name of the beneficiary of the gift.
       */
      name: string;
      /**
       * Seen
       * @description Indicates whether this gift was seen.
       */
      seen: boolean;
      /**
       * Status
       * @description Status of the gift (e.g., new, accepted, denied, claimed).
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when this gift changed its state, in ISO8601 format.
       */
      updated_at: string;
      /**
       * Url
       * @description URL of this gift for sharing.
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
 * Type of DAFFY's DAFFY_GET_NON_PROFIT_BY_EIN tool input.
 */
type DAFFY_GET_NON_PROFIT_BY_EIN_INPUT = {
  /**
   * Ein
   * @description Nine-digit Employer Identification Number (EIN) of the non-profit.
   */
  ein?: string;
};

/**
 * Type of DAFFY's DAFFY_GET_NON_PROFIT_BY_EIN tool output.
 */
type DAFFY_GET_NON_PROFIT_BY_EIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Mailing address of the organization.
       * @default null
       */
      address: string | null;
      /**
       * City
       * @description City of the organization.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the organization.
       * @default null
       */
      country: string | null;
      /**
       * Ein
       * @description Employer Identification Number of the non-profit.
       */
      ein: string;
      /**
       * Irs Activity Codes
       * @description List of IRS activity codes.
       */
      irs_activity_codes?: string[];
      /**
       * Irs Classification Codes
       * @description List of IRS classification codes.
       */
      irs_classification_codes?: string[];
      /**
       * Irs Subsection
       * @description IRS subsection code.
       * @default null
       */
      irs_subsection: string | null;
      /**
       * Mission
       * @description Mission statement of the organization.
       * @default null
       */
      mission: string | null;
      /**
       * Name
       * @description Name of the non-profit organization.
       */
      name: string;
      /**
       * Ntee Code
       * @description NTEE classification code describing the purpose.
       * @default null
       */
      ntee_code: string | null;
      /**
       * Organization Type
       * @description Type of the non-profit organization.
       * @default null
       */
      organization_type: string | null;
      /**
       * State
       * @description State of the organization.
       * @default null
       */
      state: string | null;
      /**
       * Website
       * @description Website URL of the organization.
       * @default null
       */
      website: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DAFFY's DAFFY_GET_USER_CAUSES tool input.
 */
type DAFFY_GET_USER_CAUSES_INPUT = {
  /**
   * User Id
   * @description The ID of the user whose causes are to be retrieved.
   */
  user_id?: string;
};

/**
 * Type of DAFFY's DAFFY_GET_USER_CAUSES tool output.
 */
type DAFFY_GET_USER_CAUSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Causes
       * @description List of causes associated with the user
       */
      causes: {
          /**
           * Category
           * @description Category the cause falls under
           */
          category: string;
          /**
           * Description
           * @description Description of the cause
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the cause
           */
          id: string;
          /**
           * Image Url
           * @description URL to an image representing the cause
           */
          image_url: string;
          /**
           * Name
           * @description Name of the cause
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
 * Type of DAFFY's DAFFY_GET_USER_PROFILE tool input.
 */
type DAFFY_GET_USER_PROFILE_INPUT = object;

/**
 * Type of DAFFY's DAFFY_GET_USER_PROFILE tool output.
 */
type DAFFY_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Account creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description Unique user identifier
       */
      id: string;
      /**
       * Name
       * @description User's full name
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last profile update timestamp in ISO 8601 format
       */
      updated_at: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DAFFY's DAFFY_SEARCH_NON_PROFITS tool input.
 */
type DAFFY_SEARCH_NON_PROFITS_INPUT = {
  /**
   * Cause Id
   * @description Filter results to nonprofits in the specified cause category ID.
   * @default null
   */
  cause_id: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1–50).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of results to skip for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Query
   * @description Search text to match against nonprofit name or EIN.
   * @default null
   */
  query: string | null;
};

/**
 * Type of DAFFY's DAFFY_SEARCH_NON_PROFITS tool output.
 */
type DAFFY_SEARCH_NON_PROFITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of nonprofit objects matching the search.
       */
      results: {
          /**
           * Cause Id
           * @description Cause category ID.
           */
          cause_id: string;
          /**
           * Ein
           * @description Employer Identification Number.
           */
          ein: string;
          /**
           * Id
           * @description Unique nonprofit identifier.
           */
          id: string;
          /**
           * Location
           * @description Location details of the nonprofit.
           */
          location: {
              /**
               * City
               * @description City of the nonprofit.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country of the nonprofit.
               * @default null
               */
              country: string | null;
              /**
               * State
               * @description State of the nonprofit.
               * @default null
               */
              state: string | null;
          };
          /**
           * Logo Url
           * @description Logo image URL of the nonprofit.
           * @default null
           */
          logo_url: string | null;
          /**
           * Mission
           * @description Mission statement of the nonprofit.
           * @default null
           */
          mission: string | null;
          /**
           * Name
           * @description Name of the nonprofit organization.
           */
          name: string;
          /**
           * Website Url
           * @description Website URL of the nonprofit.
           * @default null
           */
          website_url: string | null;
      }[];
      /**
       * Total
       * @description Total number of nonprofits matching the criteria.
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
 * Type map of all available tool input types for toolkit "DAFFY".
 */
export type DAFFY_TOOL_INPUTS = {
  CREATE_GIFT: DAFFY_CREATE_GIFT_INPUT
  GET_BALANCE: DAFFY_GET_BALANCE_INPUT
  GET_CONTRIBUTIONS: DAFFY_GET_CONTRIBUTIONS_INPUT
  GET_DONATIONS: DAFFY_GET_DONATIONS_INPUT
  GET_GIFTS: DAFFY_GET_GIFTS_INPUT
  GET_GIFT_BY_CODE: DAFFY_GET_GIFT_BY_CODE_INPUT
  GET_NON_PROFIT_BY_EIN: DAFFY_GET_NON_PROFIT_BY_EIN_INPUT
  GET_USER_CAUSES: DAFFY_GET_USER_CAUSES_INPUT
  GET_USER_PROFILE: DAFFY_GET_USER_PROFILE_INPUT
  SEARCH_NON_PROFITS: DAFFY_SEARCH_NON_PROFITS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DAFFY".
 */
export type DAFFY_TOOL_OUTPUTS = {
  CREATE_GIFT: DAFFY_CREATE_GIFT_OUTPUT
  GET_BALANCE: DAFFY_GET_BALANCE_OUTPUT
  GET_CONTRIBUTIONS: DAFFY_GET_CONTRIBUTIONS_OUTPUT
  GET_DONATIONS: DAFFY_GET_DONATIONS_OUTPUT
  GET_GIFTS: DAFFY_GET_GIFTS_OUTPUT
  GET_GIFT_BY_CODE: DAFFY_GET_GIFT_BY_CODE_OUTPUT
  GET_NON_PROFIT_BY_EIN: DAFFY_GET_NON_PROFIT_BY_EIN_OUTPUT
  GET_USER_CAUSES: DAFFY_GET_USER_CAUSES_OUTPUT
  GET_USER_PROFILE: DAFFY_GET_USER_PROFILE_OUTPUT
  SEARCH_NON_PROFITS: DAFFY_SEARCH_NON_PROFITS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DAFFY toolkit.
 */
export const DAFFY = {
  slug: "daffy",
  tools: {
    /**
     * Tool to create a new charitable gift. use when you have recipient details and amount ready.
     */
    CREATE_GIFT: "DAFFY_CREATE_GIFT",
    /**
     * Tool to retrieve the authenticated user's fund balance. use after authenticating to confirm account funds.
     */
    GET_BALANCE: "DAFFY_GET_BALANCE",
    /**
     * Tool to retrieve list of contributions to the authenticated user's fund. use when needing to paginate through contribution history.
     */
    GET_CONTRIBUTIONS: "DAFFY_GET_CONTRIBUTIONS",
    /**
     * Tool to retrieve a list of donations for the authenticated user. use after authentication to fetch donation history.
     */
    GET_DONATIONS: "DAFFY_GET_DONATIONS",
    /**
     * Tool to retrieve a list of gifts. use when you need to page or filter gifts.
     */
    GET_GIFTS: "DAFFY_GET_GIFTS",
    /**
     * Tool to retrieve details of a specific gift by its unique code. use after obtaining the gift code.
     */
    GET_GIFT_BY_CODE: "DAFFY_GET_GIFT_BY_CODE",
    /**
     * Tool to retrieve information about a non-profit organization by ein. use after confirming the correct nine-digit ein.
     */
    GET_NON_PROFIT_BY_EIN: "DAFFY_GET_NON_PROFIT_BY_EIN",
    /**
     * Tool to retrieve a list of causes for a specified user. use after confirming the user id is valid.
     */
    GET_USER_CAUSES: "DAFFY_GET_USER_CAUSES",
    /**
     * Tool to retrieve the authenticated user's profile. use when you need details about the current user's account.
     */
    GET_USER_PROFILE: "DAFFY_GET_USER_PROFILE",
    /**
     * Tool to search non-profit organizations by cause id and query text. use when you need to find nonprofits matching a search term or a specific cause.
     */
    SEARCH_NON_PROFITS: "DAFFY_SEARCH_NON_PROFITS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DAFFY".
 */
export type DAFFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DAFFY".
 */
export type DAFFY_TRIGGER_EVENTS = {}
