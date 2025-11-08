// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TAPFILIATE's TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES tool input.
 */
type TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES_INPUT = {
  /**
   * Affiliate Group Id
   * @description Filter by affiliate group ID
   * @default null
   */
  affiliate_group_id: string | null;
  /**
   * Click Id
   * @description Filter by click ID
   * @default null
   */
  click_id: string | null;
  /**
   * Email
   * @description Filter by affiliate email
   * @default null
   */
  email: string | null;
  /**
   * Parent Id
   * @description Filter by parent affiliate ID
   * @default null
   */
  parent_id: string | null;
  /**
   * Referral Code
   * @description Filter by referral code
   * @default null
   */
  referral_code: string | null;
  /**
   * Source Id
   * @description Filter by source ID
   * @default null
   */
  source_id: string | null;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES tool output.
 */
type TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AffiliateAddress
       * @description Address info
       * @default null
       */
      address: {
          /**
           * Address
           * @description Address line 1
           * @default null
           */
          address: string | null;
          /**
           * Address Two
           * @description Address line 2
           * @default null
           */
          address_two: string | null;
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * AffiliateAddressCountry
           * @description Country info
           * @default null
           */
          country: {
              /**
               * Code
               * @description Country ISO 3166-1 code
               */
              code: string;
              /**
               * Name
               * @description Country name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description State or region
           * @default null
           */
          state: string | null;
      } | null;
      /**
       * Affiliate Group Id
       * @description Affiliate group ID
       * @default null
       */
      affiliate_group_id: string | null;
      /**
       * AffiliateCompany
       * @description Company info
       * @default null
       */
      company: {
          /**
           * Description
           * @description Company description
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Company name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom fields
       * @default null
       */
      custom_fields: {
          [key: string]: string | number | boolean | null;
      } | null;
      /**
       * Email
       * @description Email address
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description First name
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Affiliate ID
       */
      id: string;
      /**
       * Lastname
       * @description Last name
       * @default null
       */
      lastname: string | null;
      /**
       * Meta Data
       * @description Metadata
       */
      meta_data?: {
          [key: string]: string | number | boolean | null;
      };
      /**
       * Parent Id
       * @description Parent affiliate ID
       * @default null
       */
      parent_id: string | null;
      /**
       * Promotion Method
       * @description Promotion method
       * @default null
       */
      promotion_method: string | null;
      /**
       * AffiliateReferralLink
       * @description Referral link details
       * @default null
       */
      referral_link: {
          /**
           * Asset Id
           * @description Asset ID for tracking
           * @default null
           */
          asset_id: string | null;
          /**
           * Link
           * @description Full referral tracking URL
           */
          link: string;
          /**
           * Source Id
           * @description Source ID for tracking
           * @default null
           */
          source_id: string | null;
      } | null;
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
 * Type of TAPFILIATE's TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE tool input.
 */
type TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE_INPUT = {
  /**
   * Affiliate Id
   * @description Unique identifier of the affiliate to retrieve.
   */
  affiliate_id?: string;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE tool output.
 */
type TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name of the affiliate
       * @default null
       */
      company: string | null;
      /**
       * Created At
       * @description ISO 8601 datetime when the affiliate was created
       */
      created_at: string;
      /**
       * Email
       * @description Affiliate email address
       */
      email: string;
      /**
       * First Name
       * @description Affiliate first name
       */
      first_name: string;
      /**
       * Id
       * @description Affiliate id
       */
      id: string;
      /**
       * Last Name
       * @description Affiliate last name
       */
      last_name: string;
      /**
       * Meta Data
       * @description Custom metadata fields of the affiliate
       */
      meta_data: {
          [key: string]: string | number | boolean | null;
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
 * Type of TAPFILIATE's TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS tool input.
 */
type TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS_INPUT = {
  /**
   * Affiliate Id
   * @description Only return commissions belonging to this affiliate
   * @default null
   */
  affiliate_id: string | null;
  /**
   * Conversion Id
   * @description Only return commissions for this conversion
   * @default null
   */
  conversion_id: string | null;
  /**
   * Created At From
   * @description ISO 8601 timestamp; include commissions created at or after this time
   * @default null
   */
  created_at_from: string | null;
  /**
   * Created At To
   * @description ISO 8601 timestamp; include commissions created at or before this time
   * @default null
   */
  created_at_to: string | null;
  /**
   * Page
   * @description Page number to retrieve; must be >=1. Defaults to first page
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page; must be >=1
   * @default null
   */
  per_page: number | null;
  /**
   * Program Id
   * @description Only return commissions belonging to this program
   * @default null
   */
  program_id: string | null;
  /**
   * Status
   * @description Filter by commission status (e.g., approved, pending)
   * @default null
   */
  status: string | null;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS tool output.
 */
type TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount of the commission.
       */
      amount: number;
      /**
       * Conversion Id
       * @description ID of the conversion this commission is attached to.
       */
      conversion_id: string;
      /**
       * Created At
       * @description ISO datetime when the commission was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code of the commission.
       * @default null
       */
      currency: string | null;
      /**
       * Id
       * @description Unique identifier of the commission.
       */
      id: string;
      /**
       * Meta Data
       * @description Custom metadata associated with the commission.
       */
      meta_data?: {
          [key: string]: string | number | boolean | null;
      };
      /**
       * Sale Amount
       * @description Sale amount this commission is part of.
       * @default null
       */
      sale_amount: number | null;
      /**
       * Status
       * @description Status of the commission.
       */
      status: string;
      /**
       * User Id
       * @description Affiliate ID associated with this commission.
       */
      user_id: string;
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
 * Type of TAPFILIATE's TAPFILIATE_DELETE_AN_AFFILIATE tool input.
 */
type TAPFILIATE_DELETE_AN_AFFILIATE_INPUT = {
  /**
   * Affiliate Id
   * @description Unique identifier of the affiliate to delete.
   */
  affiliate_id?: string;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_DELETE_AN_AFFILIATE tool output.
 */
type TAPFILIATE_DELETE_AN_AFFILIATE_OUTPUT = {
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
 * Type of TAPFILIATE's TAPFILIATE_LIST_ALL_AFFILIATES tool input.
 */
type TAPFILIATE_LIST_ALL_AFFILIATES_INPUT = {
  /**
   * Affiliate Group Id
   * @description Filter by affiliate group ID
   * @default null
   */
  affiliate_group_id: string | null;
  /**
   * Click Id
   * @description Filter by click ID
   * @default null
   */
  click_id: string | null;
  /**
   * Email
   * @description Filter by affiliate email
   * @default null
   */
  email: string | null;
  /**
   * Parent Id
   * @description Filter by parent affiliate ID
   * @default null
   */
  parent_id: string | null;
  /**
   * Referral Code
   * @description Filter by referral code
   * @default null
   */
  referral_code: string | null;
  /**
   * Source Id
   * @description Filter by source ID
   * @default null
   */
  source_id: string | null;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_LIST_ALL_AFFILIATES tool output.
 */
type TAPFILIATE_LIST_ALL_AFFILIATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AffiliateAddress
       * @description Affiliate address info
       * @default null
       */
      address: {
          /**
           * Address
           * @description Address line 1
           * @default null
           */
          address: string | null;
          /**
           * Address Two
           * @description Address line 2
           * @default null
           */
          address_two: string | null;
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * AffiliateAddressCountry
           * @description Country info
           * @default null
           */
          country: {
              /**
               * Code
               * @description Country ISO 3166-1 code
               */
              code: string;
              /**
               * Name
               * @description Country name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description State or region
           * @default null
           */
          state: string | null;
      } | null;
      /**
       * Affiliate Group Id
       * @description Affiliate group ID
       * @default null
       */
      affiliate_group_id: string | null;
      /**
       * AffiliateCompany
       * @description Affiliate company info
       * @default null
       */
      company: {
          /**
           * Description
           * @description Company description of the affiliate
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Company name of the affiliate
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Created At
       * @description ISO datetime when affiliate was created
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom custom fields
       */
      custom_fields?: {
          [key: string]: string | number | boolean | null;
      };
      /**
       * Email
       * @description Affiliate email address
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description Affiliate first name
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Affiliate ID
       */
      id: string;
      /**
       * Lastname
       * @description Affiliate last name
       * @default null
       */
      lastname: string | null;
      /**
       * Meta Data
       * @description Custom metadata for affiliate
       */
      meta_data?: {
          [key: string]: string | number | boolean | null;
      };
      /**
       * Parent Id
       * @description Parent affiliate ID
       * @default null
       */
      parent_id: string | null;
      /**
       * Promoted At
       * @description ISO datetime when affiliate was promoted
       * @default null
       */
      promoted_at: string | null;
      /**
       * Promotion Method
       * @description Method used to promote affiliate
       * @default null
       */
      promotion_method: string | null;
      /**
       * AffiliateReferralLink
       * @description Generated referral link details
       * @default null
       */
      referral_link: {
          /**
           * Asset Id
           * @description Asset ID for tracking
           * @default null
           */
          asset_id: string | null;
          /**
           * Link
           * @description Full referral tracking URL
           */
          link: string;
          /**
           * Source Id
           * @description Source ID for tracking
           * @default null
           */
          source_id: string | null;
      } | null;
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
 * Type of TAPFILIATE's TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT tool input.
 */
type TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT_INPUT = {
  /**
   * Affiliate Id
   * @description The ID of the affiliate to receive the payment.
   */
  affiliate_id?: string;
  /**
   * Amount
   * @description The payment amount, must be non-negative.
   */
  amount?: number;
  /**
   * Currency
   * @description Three-letter ISO 4217 currency code for the payment.
   */
  currency?: string;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT tool output.
 */
type TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affiliate
       * @description Affiliate associated with this payment.
       */
      affiliate: {
          /**
           * Firstname
           * @description Affiliate first name.
           */
          firstname: string;
          /**
           * Id
           * @description Affiliate id.
           */
          id: string;
          /**
           * Lastname
           * @description Affiliate last name.
           */
          lastname: string;
      };
      /**
       * Amount
       * @description Amount of the payment.
       */
      amount: number;
      /**
       * Created At
       * @description Timestamp when the payment was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency of the payment.
       */
      currency: string;
      /**
       * Id
       * @description Payment id.
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
 * Type of TAPFILIATE's TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS tool input.
 */
type TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >=1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page, must be >=1
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS tool output.
 */
type TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affiliate
       * @description Affiliate details
       */
      affiliate: {
          /**
           * Firstname
           * @description Affiliate first name
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description Affiliate unique identifier
           */
          id: string;
          /**
           * Lastname
           * @description Affiliate last name
           * @default null
           */
          lastname: string | null;
      };
      /**
       * Amount
       * @description Payment amount
       */
      amount: number;
      /**
       * Created At
       * @description Timestamp when payment was created
       */
      created_at: string;
      /**
       * Currency
       * @description Payment currency code
       */
      currency: string;
      /**
       * Id
       * @description Payment unique identifier
       */
      id: string;
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
 * Type of TAPFILIATE's TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT tool input.
 */
type TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT_INPUT = {
  /**
   * Payment Id
   * @description Unique identifier of the payment to retrieve.
   */
  payment_id?: string;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT tool output.
 */
type TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affiliate
       * @description Affiliate details for the payment
       */
      affiliate: {
          /**
           * Firstname
           * @description Affiliate first name
           */
          firstname: string;
          /**
           * Id
           * @description Affiliate id
           */
          id: string;
          /**
           * Lastname
           * @description Affiliate last name
           */
          lastname: string;
      };
      /**
       * Amount
       * @description Payment amount
       */
      amount: number;
      /**
       * Created At
       * @description ISO 8601 datetime when the payment was created
       */
      created_at: string;
      /**
       * Currency
       * @description Three-letter currency code, e.g., USD
       */
      currency: string;
      /**
       * Id
       * @description Payment id
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
 * Type of TAPFILIATE's TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS tool input.
 */
type TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS_INPUT = {
  /**
   * Affiliate Id
   * @description Tapfiliate-generated ID of the affiliate whose payout methods to list
   */
  affiliate_id?: string;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS tool output.
 */
type TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payout Methods
       * @description List of payout methods configured for the affiliate
       */
      payout_methods: {
          /**
           * Details
           * @description Method-specific detail fields as key-value pairs
           */
          details: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Identifier of the payout method
           */
          id: string;
          /**
           * Primary
           * @description Whether this is the affiliate's primary payout method
           */
          primary: boolean;
          /**
           * Title
           * @description Name of the payout method
           */
          title: string;
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
 * Type of TAPFILIATE's TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS tool input.
 */
type TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS_INPUT = {
  /**
   * Asset Id
   * @description Filter programs by asset ID.
   * @default null
   */
  asset_id: string | null;
};

/**
 * Type of TAPFILIATE's TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS tool output.
 */
type TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cookie Time
       * @description Duration in days for which affiliate cookies are valid.
       */
      cookie_time: number;
      /**
       * Currency
       * @description ISO currency code used by the program.
       */
      currency: string;
      /**
       * Currency Symbol
       * @description Symbol for the program's currency.
       */
      currency_symbol: string;
      /**
       * Default Landing Page Url
       * @description Default landing page URL for the program.
       */
      default_landing_page_url: string;
      /**
       * Id
       * @description Unique program identifier.
       */
      id: string;
      /**
       * ProgramCategory
       * @description Category information for a program.
       * @default null
       */
      program_category: {
          /**
           * Id
           * @description Unique identifier of the program category.
           */
          id: number;
          /**
           * Identifier
           * @description Machine-readable identifier of the category.
           */
          identifier: string;
          /**
           * Is Admitad Suitable
           * @description Indicates if the category is suitable for Admitad integrations.
           */
          is_admitad_suitable: boolean;
          /**
           * Title
           * @description Human-readable title of the category.
           */
          title: string;
      } | null;
      /**
       * Recurring
       * @description Whether the program supports recurring commissions.
       */
      recurring: boolean;
      /**
       * Recurring Cap
       * @description Maximum number of recurring commissions allowed; null if unlimited.
       * @default null
       */
      recurring_cap: number | null;
      /**
       * Recurring Period Days
       * @description Interval in days between recurring commissions; null if not applicable.
       * @default null
       */
      recurring_period_days: number | null;
      /**
       * Title
       * @description Title of the program.
       */
      title: string;
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
 * Type map of all available tool input types for toolkit "TAPFILIATE".
 */
export type TAPFILIATE_TOOL_INPUTS = {
  AFFILIATES_LIST_ALL_AFFILIATES: TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES_INPUT
  AFFILIATES_RETRIEVE_AN_AFFILIATE: TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE_INPUT
  COMMISSIONS_LIST_ALL_COMMISSIONS: TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS_INPUT
  DELETE_AN_AFFILIATE: TAPFILIATE_DELETE_AN_AFFILIATE_INPUT
  LIST_ALL_AFFILIATES: TAPFILIATE_LIST_ALL_AFFILIATES_INPUT
  PAYMENTS_CREATE_A_PAYMENT: TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT_INPUT
  PAYMENTS_LIST_ALL_PAYMENTS: TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS_INPUT
  PAYMENTS_RETRIEVE_A_PAYMENT: TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT_INPUT
  PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS: TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS_INPUT
  PROGRAMS_LIST_ALL_PROGRAMS: TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TAPFILIATE".
 */
export type TAPFILIATE_TOOL_OUTPUTS = {
  AFFILIATES_LIST_ALL_AFFILIATES: TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES_OUTPUT
  AFFILIATES_RETRIEVE_AN_AFFILIATE: TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE_OUTPUT
  COMMISSIONS_LIST_ALL_COMMISSIONS: TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS_OUTPUT
  DELETE_AN_AFFILIATE: TAPFILIATE_DELETE_AN_AFFILIATE_OUTPUT
  LIST_ALL_AFFILIATES: TAPFILIATE_LIST_ALL_AFFILIATES_OUTPUT
  PAYMENTS_CREATE_A_PAYMENT: TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT_OUTPUT
  PAYMENTS_LIST_ALL_PAYMENTS: TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS_OUTPUT
  PAYMENTS_RETRIEVE_A_PAYMENT: TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT_OUTPUT
  PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS: TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS_OUTPUT
  PROGRAMS_LIST_ALL_PROGRAMS: TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TAPFILIATE toolkit.
 */
export const TAPFILIATE = {
  slug: "tapfiliate",
  tools: {
    /**
     * Tool to list all affiliates. use after verifying api credentials to fetch affiliates with optional filters.
     */
    AFFILIATES_LIST_ALL_AFFILIATES: "TAPFILIATE_AFFILIATES_LIST_ALL_AFFILIATES",
    /**
     * Tool to retrieve details of a specific affiliate. use when you have the affiliate id and need full affiliate profile.
     */
    AFFILIATES_RETRIEVE_AN_AFFILIATE: "TAPFILIATE_AFFILIATES_RETRIEVE_AN_AFFILIATE",
    /**
     * Tool to retrieve all commissions. use when you need to fetch commission records with optional filters and pagination after confirming valid api credentials.
     */
    COMMISSIONS_LIST_ALL_COMMISSIONS: "TAPFILIATE_COMMISSIONS_LIST_ALL_COMMISSIONS",
    /**
     * Tool to delete a specific affiliate. use when you need to remove an affiliate by their affiliate id after confirming it exists.
     */
    DELETE_AN_AFFILIATE: "TAPFILIATE_DELETE_AN_AFFILIATE",
    /**
     * Tool to list all affiliates. use after confirming api access to fetch affiliates with optional filters.
     */
    LIST_ALL_AFFILIATES: "TAPFILIATE_LIST_ALL_AFFILIATES",
    /**
     * Tool to create a payment. use when you need to credit an affiliate after confirming transaction details.
     */
    PAYMENTS_CREATE_A_PAYMENT: "TAPFILIATE_PAYMENTS_CREATE_A_PAYMENT",
    /**
     * Tool to list all payments. use when you need to retrieve paginated payment records after confirming api credentials.
     */
    PAYMENTS_LIST_ALL_PAYMENTS: "TAPFILIATE_PAYMENTS_LIST_ALL_PAYMENTS",
    /**
     * Tool to retrieve details of a specific payment. use when you have the payment id and need full payment information.
     */
    PAYMENTS_RETRIEVE_A_PAYMENT: "TAPFILIATE_PAYMENTS_RETRIEVE_A_PAYMENT",
    /**
     * Tool to retrieve a list of all payout methods for an affiliate. use when fetching available payment options for an affiliate.
     */
    PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS: "TAPFILIATE_PAYOUT_METHODS_LIST_ALL_PAYOUT_METHODS",
    /**
     * Tool to list all programs. use after confirming api credentials to fetch program list with optional asset filters.
     */
    PROGRAMS_LIST_ALL_PROGRAMS: "TAPFILIATE_PROGRAMS_LIST_ALL_PROGRAMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TAPFILIATE".
 */
export type TAPFILIATE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TAPFILIATE".
 */
export type TAPFILIATE_TRIGGER_EVENTS = {}
