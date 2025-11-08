// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GIVEBUTTER's GIVEBUTTER_ARCHIVE_CONTACT tool input.
 */
type GIVEBUTTER_ARCHIVE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to archive. The contact must have no associated data like transactions, recurring donations, auction bids, tickets, or communications.
   */
  contact_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_ARCHIVE_CONTACT tool output.
 */
type GIVEBUTTER_ARCHIVE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description ID of the contact that was archived successfully.
       */
      contact_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_CREATE_CAMPAIGN tool input.
 */
type GIVEBUTTER_CREATE_CAMPAIGN_INPUT = {
  /**
   * CoverRequest
   * @description Banner image settings; include only when providing a cover.
   * @default null
   */
  cover: {
      /**
       * Source
       * @description Must be 'upload' when providing a custom image URL.
       * @constant
       */
      source: "upload";
      /**
       * Type
       * @description Must be 'image' for a cover image.
       * @constant
       */
      type: "image";
      /**
       * Url
       * @description Public URL of the cover image.
       */
      url: string;
  } | null;
  /**
   * Currency
   * @description Currency code; only USD is currently supported.
   * @default USD
   * @constant
   */
  currency: "USD";
  /**
   * Description
   * @description HTML content for the campaign description.
   * @default null
   */
  description: string | null;
  /**
   * End At
   * @description UTC datetime string when the campaign ends.
   * @default null
   */
  end_at: string | null;
  /**
   * Goal
   * @description Campaign goal amount in cents (e.g., $1000 -> 100000).
   * @default null
   */
  goal: number | null;
  /**
   * MetaRequest
   * @description SEO meta tags for the campaign page.
   * @default null
   */
  meta: {
      /**
       * Description
       * @description Meta description tag for SEO.
       * @default null
       */
      description: string | null;
      /**
       * Image
       * @description Meta image URL for social previews.
       * @default null
       */
      image: string | null;
      /**
       * Title
       * @description Meta title tag for SEO.
       * @default null
       */
      title: string | null;
  } | null;
  /**
   * Slug
   * @description Unique slug for the campaign; auto-generated if omitted.
   * @default null
   */
  slug: string | null;
  /**
   * Subtitle
   * @description Optional subtitle displayed under the title.
   * @default null
   */
  subtitle: string | null;
  /**
   * Title
   * @description Primary title of the campaign.
   */
  title?: string;
  /**
   * Type
   * @description Type of the campaign.
   * @enum {string}
   */
  type?: "general" | "collect" | "fundraise" | "event";
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_CREATE_CAMPAIGN tool output.
 */
type GIVEBUTTER_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description ID of the account that owns the campaign.
       */
      account_id: string;
      /**
       * CoverResponse
       * @description Cover image object for the campaign.
       * @default null
       */
      cover: {
          /**
           * Source
           * @constant
           */
          source: "upload";
          /**
           * Type
           * @constant
           */
          type: "image";
          /** Url */
          url: string;
      } | null;
      /**
       * Created At
       * @description UTC datetime when the campaign was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code of the campaign.
       */
      currency: string;
      /**
       * Description
       * @description HTML content for the campaign description.
       * @default null
       */
      description: string | null;
      /**
       * Donors
       * @description Number of donors who gave to the campaign.
       */
      donors: number;
      /**
       * End At
       * @description UTC datetime when the campaign ends.
       * @default null
       */
      end_at: string | null;
      /**
       * Goal
       * @description Campaign goal amount.
       * @default null
       */
      goal: number | null;
      /**
       * Id
       * @description The campaign ID.
       */
      id: number;
      /**
       * Logo
       * @description URL of the campaign logo.
       * @default null
       */
      logo: string | null;
      /**
       * Raised
       * @description Total amount raised by the campaign.
       */
      raised: number;
      /**
       * Slug
       * @description Unique slug for the campaign.
       */
      slug: string;
      /**
       * Subtitle
       * @description Subtitle of the campaign.
       * @default null
       */
      subtitle: string | null;
      /**
       * Title
       * @description Title of the campaign.
       */
      title: string;
      /**
       * Type
       * @description Type of the campaign.
       */
      type: string;
      /**
       * Updated At
       * @description UTC datetime when the campaign was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Full URL of the campaign.
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
 * Type of GIVEBUTTER's GIVEBUTTER_CREATE_WEBHOOK tool input.
 */
type GIVEBUTTER_CREATE_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether the webhook is active immediately upon creation.
   * @default true
   */
  enabled: boolean;
  /**
   * Events
   * @description List of event types that will trigger this webhook subscription.
   */
  events?: string[];
  /**
   * Name
   * @description A friendly name for the webhook subscription.
   */
  name?: string;
  /**
   * Url
   * @description The HTTPS endpoint URL that will receive webhook payloads.
   */
  url?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_CREATE_WEBHOOK tool output.
 */
type GIVEBUTTER_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Enabled
       * @description Active status of the webhook subscription.
       */
      enabled: boolean;
      /**
       * Events
       * @description Event types this webhook will receive.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook subscription.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook subscription.
       */
      name: string;
      /**
       * Signing Secret
       * @description Secret token used to verify incoming webhook signatures.
       * @default null
       */
      signing_secret: string | null;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the webhook was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * Url
       * @description Destination URL for webhook payloads.
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
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_CAMPAIGN tool input.
 */
type GIVEBUTTER_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign to delete. Cannot delete if the campaign has any funds raised.
   */
  campaign_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_CAMPAIGN tool output.
 */
type GIVEBUTTER_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Id
       * @description ID of the campaign that was deleted successfully.
       */
      campaign_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_CONTACT tool input.
 */
type GIVEBUTTER_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to delete.
   */
  contact_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_CONTACT tool output.
 */
type GIVEBUTTER_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description ID of the contact that was deleted successfully.
       */
      contact_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_FUND tool input.
 */
type GIVEBUTTER_DELETE_FUND_INPUT = {
  /**
   * Fund Id
   * @description Unique identifier of the fund to delete.
   */
  fund_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_FUND tool output.
 */
type GIVEBUTTER_DELETE_FUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fund Id
       * @description ID of the fund that was deleted successfully.
       */
      fund_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_WEBHOOK tool input.
 */
type GIVEBUTTER_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhook_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_DELETE_WEBHOOK tool output.
 */
type GIVEBUTTER_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook Id
       * @description ID of the webhook that was deleted successfully.
       */
      webhook_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_FUND tool input.
 */
type GIVEBUTTER_GET_FUND_INPUT = {
  /**
   * Fund Id
   * @description Unique identifier of the fund to retrieve
   */
  fund_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_FUND tool output.
 */
type GIVEBUTTER_GET_FUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fund
       * @description The retrieved fund object
       */
      fund: {
          /**
           * Code
           * @description Code of the fund
           * @default null
           */
          code: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the fund was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the fund
           */
          id: string;
          /**
           * Name
           * @description Name of the fund
           */
          name: string;
          /**
           * Raised
           * @description Total amount raised to date
           */
          raised: number;
          /**
           * Supporters
           * @description Number of supporters of the fund
           */
          supporters: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the fund was last updated
           */
          updated_at: string;
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
 * Type of GIVEBUTTER's GIVEBUTTER_GET_MEMBERS tool input.
 */
type GIVEBUTTER_GET_MEMBERS_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign to retrieve members from
   */
  campaign_id?: string;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_MEMBERS tool output.
 */
type GIVEBUTTER_GET_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of member objects returned from the API
       */
      members: {
          /**
           * Display Name
           * @description Public display name of the member
           * @default null
           */
          display_name: string | null;
          /**
           * Donors
           * @description Number of donors who gave to this member
           */
          donors: number;
          /**
           * Email
           * @description Member's email address
           */
          email: string;
          /**
           * First Name
           * @description Member's first name
           */
          first_name: string;
          /**
           * Goal
           * @description Fundraising goal of the member
           */
          goal: number;
          /**
           * Id
           * @description Unique member identifier
           */
          id: string;
          /**
           * Items
           * @description Number of items (tickets) sold by this member
           */
          items: number;
          /**
           * Last Name
           * @description Member's last name
           */
          last_name: string;
          /**
           * Phone
           * @description Member's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Picture
           * @description URL to the member's profile picture
           * @default null
           */
          picture: string | null;
          /**
           * Raised
           * @description Amount of money raised by this member
           */
          raised: number;
          /**
           * Url
           * @description Full URL to the member's fundraising page
           */
          url: string;
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
 * Type of GIVEBUTTER's GIVEBUTTER_GET_PAYOUTS tool input.
 */
type GIVEBUTTER_GET_PAYOUTS_INPUT = {
  /**
   * Limit
   * @description Number of payouts to return per page, must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default null
   */
  page: number | null;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_PAYOUTS tool output.
 */
type GIVEBUTTER_GET_PAYOUTS_OUTPUT = {
  /**
   * Data
   * @description List of payouts associated with the account.
   */
  data?: {
      /**
       * PayoutAddress
       * @description The address a check was mailed to, if applicable.
       * @default null
       */
      address: {
          /**
           * Address 1
           * @description Street address line 1
           */
          address_1: string;
          /**
           * Address 2
           * @description Street address line 2
           * @default null
           */
          address_2: string | null;
          /**
           * City
           * @description City name
           */
          city: string;
          /**
           * Country
           * @description Country name
           */
          country: string;
          /**
           * State
           * @description State or province
           */
          state: string;
          /**
           * Zipcode
           * @description Postal code
           */
          zipcode: string;
      } | null;
      /**
       * Amount
       * @description The amount requested to be withdrawn.
       */
      amount: number;
      /**
       * Campaign Id
       * @description The campaign ID this payout belongs to.
       */
      campaign_id: string;
      /**
       * Completed At
       * @description UTC datetime string indicating when the payout completed processing.
       * @default null
       */
      completed_at: string | null;
      /**
       * Created At
       * @description UTC datetime string indicating when the payout was created.
       */
      created_at: string;
      /**
       * Currency
       * @description The currency this payout was made in.
       */
      currency: string;
      /**
       * Fee
       * @description The fee charged to withdraw this payout.
       */
      fee: number;
      /**
       * Id
       * @description The ID of the payout.
       */
      id: string;
      /**
       * Memo
       * @description The memo written on a check, if applicable.
       * @default null
       */
      memo: string | null;
      /**
       * Method
       * @description The method this payout was made.
       * @enum {string}
       */
      method: "check" | "bank";
      /**
       * Payout
       * @description The final amount to be paid out.
       */
      payout: number;
      /**
       * Status
       * @description The status of this payout.
       * @enum {string}
       */
      status: "pending" | "processing" | "completed" | "cancelled" | "failed";
      /**
       * Tip
       * @description The tip left for the Givebutter team.
       */
      tip: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * First
       * @description URL to the first page of results.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL to the last page of results.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL to the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to the previous page of results.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * From
       * @description Starting item number on this page.
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last available page number.
       */
      last_page: number;
      /**
       * Links
       * @description List of pagination link objects.
       */
      links: {
          /**
           * Active
           * @description Indicates if this link corresponds to the current page.
           */
          active: boolean;
          /**
           * Label
           * @description Label for the pagination link (e.g., page number).
           */
          label: string;
          /**
           * Url
           * @description URL of the pagination link.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path for pagination links.
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * To
       * @description Ending item number on this page.
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_PLANS tool input.
 */
type GIVEBUTTER_GET_PLANS_INPUT = object;

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_PLANS tool output.
 */
type GIVEBUTTER_GET_PLANS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Plans
       * @description List of plan objects returned from the API.
       */
      plans: {
          /**
           * Amount
           * @description The amount of the recurring donation.
           */
          amount: number;
          /**
           * Created At
           * @description UTC datetime string when the plan was created.
           */
          created_at: string;
          /**
           * Email
           * @description The supporter's email address.
           */
          email: string;
          /**
           * Fee Covered
           * @description The portion of the fee the supporter covered.
           */
          fee_covered: number;
          /**
           * First Name
           * @description The supporter's first name.
           */
          first_name: string;
          /**
           * Frequency
           * @description How often the donation is made (monthly, quarterly, or yearly).
           */
          frequency: string;
          /**
           * Id
           * @description The ID of the plan.
           */
          id: string;
          /**
           * Last Name
           * @description The supporter's last name.
           */
          last_name: string;
          /**
           * Method
           * @description The payment method used for this plan.
           */
          method: string;
          /**
           * Next Bill Date
           * @description UTC datetime string when the plan will bill next.
           */
          next_bill_date: string;
          /**
           * Phone
           * @description The supporter's phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Started At
           * @description UTC datetime string when the plan was started.
           */
          started_at: string;
          /**
           * Status
           * @description The status of the plan (active, cancelled, ended, past_due, paused).
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
 * Type of GIVEBUTTER's GIVEBUTTER_GET_TEAMS tool input.
 */
type GIVEBUTTER_GET_TEAMS_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign whose teams to retrieve.
   */
  campaign_id?: string;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_TEAMS tool output.
 */
type GIVEBUTTER_GET_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of team objects returned from the API.
       */
      teams: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the team was created.
           */
          created_at: string;
          /**
           * Goal
           * @description Team fundraising goal, if one was set.
           * @default null
           */
          goal: number | null;
          /**
           * Id
           * @description Unique identifier of the team.
           */
          id: string;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
          /**
           * Raised
           * @description Total amount of funds credited by donors.
           */
          raised: number;
          /**
           * Supporters
           * @description Number of supporters that credited the team.
           */
          supporters: number;
          /**
           * Url
           * @description URL of the team's fundraising page.
           */
          url: string;
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
 * Type of GIVEBUTTER's GIVEBUTTER_GET_TICKETS tool input.
 */
type GIVEBUTTER_GET_TICKETS_INPUT = object;

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_TICKETS tool output.
 */
type GIVEBUTTER_GET_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tickets
       * @description List of ticket objects returned from the API
       */
      tickets: {
          /**
           * Checked In At
           * @description UTC datetime when ticket holder checked in
           * @default null
           */
          checked_in_at: string | null;
          /**
           * Created At
           * @description UTC datetime when the ticket was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the ticket
           * @default null
           */
          description: string | null;
          /**
           * Email
           * @description Email address of the ticket holder
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the ticket holder
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the ticket
           */
          id: string;
          /**
           * Last Name
           * @description Last name of the ticket holder
           * @default null
           */
          last_name: string | null;
          /**
           * Name
           * @description Full name of the ticket holder
           * @default null
           */
          name: string | null;
          /**
           * Pdf
           * @description URL to the ticket PDF, expires after 24 hours
           * @default null
           */
          pdf: string | null;
          /**
           * Phone
           * @description Phone number of the ticket holder
           * @default null
           */
          phone: string | null;
          /**
           * Price
           * @description Price of the ticket in USD
           */
          price: number;
          /**
           * Title
           * @description Title of the ticket
           * @default null
           */
          title: string | null;
          /**
           * Transaction Id
           * @description ID of the associated transaction
           */
          transaction_id: string;
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
 * Type of GIVEBUTTER's GIVEBUTTER_GET_TRANSACTIONS tool input.
 */
type GIVEBUTTER_GET_TRANSACTIONS_INPUT = {
  /**
   * Scope
   * @description Scope of transactions to retrieve: 'account' (default), 'beneficiary', or 'chapter'.
   * @default null
   * @enum {string|null}
   */
  scope: "account" | "beneficiary" | "chapter" | null;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_TRANSACTIONS tool output.
 */
type GIVEBUTTER_GET_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transactions
       * @description List of transaction objects returned from the API
       */
      transactions: {
          /**
           * Address
           * @description Supporter billing address
           * @default null
           */
          address: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Line1
               * @description Street address line 1
               * @default null
               */
              line1: string | null;
              /**
               * Line2
               * @description Street address line 2
               * @default null
               */
              line2: string | null;
              /**
               * Postal Code
               * @description Postal or ZIP code
               * @default null
               */
              postal_code: string | null;
              /**
               * State
               * @description State or province
               * @default null
               */
              state: string | null;
          } | null;
          /**
           * Amount
           * @description Transaction amount
           */
          amount: number;
          /**
           * AttributionData
           * @description Analytics attribution data
           * @default null
           */
          attribution_data: {
              /**
               * Campaign
               * @description Attribution data campaign
               * @default null
               */
              campaign: string | null;
              /**
               * Medium
               * @description Attribution data medium
               * @default null
               */
              medium: string | null;
              /**
               * Source
               * @description Attribution data source
               * @default null
               */
              source: string | null;
          } | null;
          /**
           * Campaign Code
           * @description Campaign code credited to this transaction
           */
          campaign_code: string;
          /**
           * Campaign Id
           * @description Campaign ID credited to this transaction
           */
          campaign_id: string;
          /**
           * Captured
           * @description Whether the transaction has been captured
           */
          captured: boolean;
          /**
           * Captured At
           * @description UTC datetime when the transaction was captured
           */
          captured_at: string;
          /**
           * Check Deposited At
           * @description UTC datetime when the check was deposited
           * @default null
           */
          check_deposited_at: string | null;
          /**
           * Check Number
           * @description Check number if payment method is check
           * @default null
           */
          check_number: string | null;
          /**
           * Communication Opt In
           * @description Value of allow_contact when donation was made
           */
          communication_opt_in: boolean;
          /**
           * Contact Id
           * @description Contact ID credited to this transaction
           */
          contact_id: string;
          /**
           * Created At
           * @description UTC datetime when the transaction was created
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code of the transaction
           */
          currency: string;
          /**
           * Custom Fields
           * @description Custom fields associated with this transaction
           */
          custom_fields: {
              /**
               * Id
               * @description Custom field ID
               */
              id: string;
              /**
               * Key
               * @description Custom field key
               */
              key: string;
              /**
               * Value
               * @description Custom field value
               */
              value: string;
          }[];
          /**
           * Donated
           * @description Final amount donated after fees
           */
          donated: number;
          /**
           * Email
           * @description Supporter email address
           * @default null
           */
          email: string | null;
          /**
           * ExternalId
           * @description External migration ID and label
           * @default null
           */
          external_id: {
              /**
               * External Id
               * @description External ID of the migrated platform
               */
              external_id: string;
              /**
               * Label
               * @description Label of the migrated platform
               */
              label: string;
          } | null;
          /**
           * Fee
           * @description Total fee charged
           */
          fee: number;
          /**
           * Fee Covered
           * @description Portion of fee covered by supporter
           */
          fee_covered: number;
          /**
           * First Name
           * @description Supporter first name
           * @default null
           */
          first_name: string | null;
          /**
           * Fund Code
           * @description Fund code credited to this transaction
           * @default null
           */
          fund_code: string | null;
          /**
           * Fund Id
           * @description Fund ID credited to this transaction
           * @default null
           */
          fund_id: string | null;
          /**
           * Giving Space
           * @description Giving Space for this transaction
           */
          giving_space: {
              /**
               * Code
               * @description Code of the Giving Space
               * @default null
               */
              code: string | null;
              /**
               * Id
               * @description ID of the Giving Space
               */
              id: string;
              /**
               * Name
               * @description Name of the Giving Space
               * @default null
               */
              name: string | null;
          };
          /**
           * Id
           * @description Transaction ID
           */
          id: string;
          /**
           * Last Name
           * @description Supporter last name
           * @default null
           */
          last_name: string | null;
          /**
           * Line Items
           * @description Line items associated with this transaction
           */
          line_items: {
              /**
               * Amount
               * @description Amount for this line item
               */
              amount: number;
              /**
               * Description
               * @description Description of the line item
               * @default null
               */
              description: string | null;
              /**
               * Fee
               * @description Fee for this line item
               */
              fee: number;
              /**
               * Id
               * @description Line item ID
               */
              id: string;
              /**
               * Quantity
               * @description Quantity of the line item
               * @default null
               */
              quantity: number | null;
          }[];
          /**
           * Member Id
           * @description Member ID credited to this transaction
           * @default null
           */
          member_id: string | null;
          /**
           * Method
           * @description Payment method used for the transaction
           * @enum {string}
           */
          method: "card" | "paypal" | "venmo" | "check" | "cash" | "ach" | "donor_advised_fund" | "digital_wallet" | "stock" | "terminal" | "in-kind" | "property" | "other";
          /**
           * Number
           * @description Reference number of the transaction
           */
          number: string;
          /**
           * Payout
           * @description Payout amount after fees (0 for offline donations)
           */
          payout: number;
          /**
           * Phone
           * @description Supporter phone number
           * @default null
           */
          phone: string | null;
          /**
           * Plan Id
           * @description Recurring plan ID if applicable
           * @default null
           */
          plan_id: string | null;
          /**
           * Refunded
           * @description Whether the transaction has been refunded
           */
          refunded: boolean;
          /**
           * Refunded At
           * @description UTC datetime when the transaction was refunded
           * @default null
           */
          refunded_at: string | null;
          /**
           * Status
           * @description Status of the transaction
           * @enum {string}
           */
          status: "succeeded" | "authorized" | "failed" | "cancelled";
          /**
           * Team Id
           * @description Team ID credited to this transaction
           * @default null
           */
          team_id: string | null;
          /**
           * Timezone
           * @description Timezone of the transaction
           */
          timezone: string;
          /**
           * Transacted At
           * @description UTC datetime when the transaction happened
           */
          transacted_at: string;
          /**
           * UTMParameters
           * @description UTM tracking parameters
           * @default null
           */
          utm_parameters: {
              /**
               * Utm Campaign
               * @description UTM campaign parameter
               * @default null
               */
              utm_campaign?: string | null;
              /**
               * Utm Content
               * @description UTM content parameter
               * @default null
               */
              utm_content?: string | null;
              /**
               * Utm Medium
               * @description UTM medium parameter
               * @default null
               */
              utm_medium?: string | null;
              /**
               * Utm Source
               * @description UTM source parameter
               * @default null
               */
              utm_source?: string | null;
              /**
               * Utm Term
               * @description UTM term parameter
               * @default null
               */
              utm_term?: string | null;
          } | null;
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
 * Type of GIVEBUTTER's GIVEBUTTER_GET_WEBHOOKS tool input.
 */
type GIVEBUTTER_GET_WEBHOOKS_INPUT = object;

/**
 * Type of GIVEBUTTER's GIVEBUTTER_GET_WEBHOOKS tool output.
 */
type GIVEBUTTER_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook subscriptions returned by the API.
       */
      webhooks: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the webhook was created.
           */
          created_at: string;
          /**
           * Enabled
           * @description Whether the webhook is currently active.
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier for the webhook.
           */
          id: string;
          /**
           * Last Status
           * @description The last delivery status of the webhook (e.g., 'success', 'failed').
           * @default null
           */
          last_status: string | null;
          /**
           * Last Status Description
           * @description Description of the last delivery status.
           * @default null
           */
          last_status_description: string | null;
          /**
           * Last Used At
           * @description ISO 8601 timestamp when the webhook was last used.
           * @default null
           */
          last_used_at: string | null;
          /**
           * Name
           * @description Friendly name of the webhook subscription.
           */
          name: string;
          /**
           * Signing Secret
           * @description Signing secret used to verify incoming webhook payloads.
           * @default null
           */
          signing_secret: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the webhook was last updated.
           * @default null
           */
          updated_at: string | null;
          /**
           * Url
           * @description Destination URL that receives webhook payloads.
           */
          url: string;
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
 * Type of GIVEBUTTER's GIVEBUTTER_UPDATE_CAMPAIGN tool input.
 */
type GIVEBUTTER_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign to update.
   */
  campaign_id?: string;
  /**
   * CoverRequest
   * @description Banner image settings; include only when updating the cover.
   * @default null
   */
  cover: {
      /**
       * Source
       * @description Must be 'upload' when providing a custom image URL.
       * @constant
       */
      source: "upload";
      /**
       * Type
       * @description Must be 'image' for a cover image.
       * @constant
       */
      type: "image";
      /**
       * Url
       * @description Public URL of the cover image.
       */
      url: string;
  } | null;
  /**
   * Currency
   * @description Currency code; only USD is currently supported.
   * @default null
   * @constant
   */
  currency: "USD";
  /**
   * Description
   * @description HTML content for the campaign description.
   * @default null
   */
  description: string | null;
  /**
   * End At
   * @description UTC datetime string when the campaign ends (e.g., '2024-12-31T23:59:59Z').
   * @default null
   */
  end_at: string | null;
  /**
   * Goal
   * @description Campaign goal amount in cents (e.g., $10.00 -> 1000).
   * @default null
   */
  goal: number | null;
  /**
   * MetaRequest
   * @description SEO meta tags for the campaign page.
   * @default null
   */
  meta: {
      /**
       * Description
       * @description Meta description tag for SEO.
       * @default null
       */
      description: string | null;
      /**
       * Image
       * @description Meta image URL for social previews.
       * @default null
       */
      image: string | null;
      /**
       * Title
       * @description Meta title tag for SEO.
       * @default null
       */
      title: string | null;
  } | null;
  /**
   * Slug
   * @description Unique slug for the campaign; auto-generated if omitted.
   * @default null
   */
  slug: string | null;
  /**
   * Subtitle
   * @description Optional subtitle displayed under the title.
   * @default null
   */
  subtitle: string | null;
  /**
   * Title
   * @description Primary title of the campaign.
   * @default null
   */
  title: string | null;
  /**
   * Type
   * @description Type of the campaign.
   * @default null
   * @enum {string|null}
   */
  type: "general" | "collect" | "fundraise" | "event" | null;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_UPDATE_CAMPAIGN tool output.
 */
type GIVEBUTTER_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description ID of the account that owns the campaign.
       */
      account_id: string;
      /**
       * CoverResponse
       * @description Cover image object for the campaign.
       * @default null
       */
      cover: {
          /**
           * Source
           * @constant
           */
          source: "upload";
          /**
           * Type
           * @constant
           */
          type: "image";
          /** Url */
          url: string;
      } | null;
      /**
       * Created At
       * @description UTC datetime when the campaign was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code of the campaign.
       */
      currency: string;
      /**
       * Description
       * @description HTML content for the campaign description.
       * @default null
       */
      description: string | null;
      /**
       * Donors
       * @description Number of donors who gave to the campaign.
       */
      donors: number;
      /**
       * End At
       * @description UTC datetime when the campaign ends.
       * @default null
       */
      end_at: string | null;
      /**
       * Goal
       * @description Campaign goal amount.
       * @default null
       */
      goal: number | null;
      /**
       * Id
       * @description The campaign ID.
       */
      id: number;
      /**
       * Logo
       * @description URL of the campaign logo.
       * @default null
       */
      logo: string | null;
      /**
       * Raised
       * @description Total amount raised by the campaign.
       */
      raised: number;
      /**
       * Slug
       * @description Unique slug for the campaign.
       */
      slug: string;
      /**
       * Subtitle
       * @description Subtitle of the campaign.
       * @default null
       */
      subtitle: string | null;
      /**
       * Title
       * @description Title of the campaign.
       */
      title: string;
      /**
       * Type
       * @description Type of the campaign.
       */
      type: string;
      /**
       * Updated At
       * @description UTC datetime when the campaign was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Full URL of the campaign.
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
 * Type of GIVEBUTTER's GIVEBUTTER_UPDATE_CONTACT tool input.
 */
type GIVEBUTTER_UPDATE_CONTACT_INPUT = {
  /**
   * AddressRequest
   * @description Address details to update
   * @default null
   */
  address: {
      /**
       * City
       * @description City.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country.
       * @default null
       */
      country: string | null;
      /**
       * State
       * @description State or province.
       * @default null
       */
      state: string | null;
      /**
       * Street
       * @description Street address.
       * @default null
       */
      street: string | null;
      /**
       * Zip
       * @description ZIP or postal code.
       * @default null
       */
      zip: string | null;
  } | null;
  /**
   * Contact Id
   * @description ID of the contact to update.
   */
  contact_id?: string;
  /**
   * Custom Fields
   * @description List of custom field updates (id and new value).
   * @default null
   */
  custom_fields: {
      /**
       * Id
       * @description Identifier of the custom field.
       */
      id: string;
      /**
       * Value
       * @description Value for the custom field.
       */
      value: string;
  }[] | null;
  /**
   * Email
   * @description Email address of the contact.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the contact.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the contact.
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description Phone number of the contact.
   * @default null
   */
  phone: string | null;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_UPDATE_CONTACT tool output.
 */
type GIVEBUTTER_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AddressResponse
       * @description Address object in response
       * @default null
       */
      address: {
          /**
           * City
           * @description City.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country.
           * @default null
           */
          country: string | null;
          /**
           * State
           * @description State or province.
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street address.
           * @default null
           */
          street: string | null;
          /**
           * Zip
           * @description ZIP or postal code.
           * @default null
           */
          zip: string | null;
      } | null;
      /**
       * Custom Fields
       * @description List of custom fields for the contact.
       * @default null
       */
      custom_fields: {
          /**
           * Id
           * @description Identifier of the custom field.
           */
          id: string;
          /**
           * Title
           * @description Title of the custom field.
           */
          title: string;
          /**
           * Value
           * @description Value of the custom field.
           */
          value: string;
      }[] | null;
      /**
       * Email
       * @description Email address of the contact.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the contact.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Phone
       * @description Phone number of the contact.
       * @default null
       */
      phone: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_UPDATE_WEBHOOK tool input.
 */
type GIVEBUTTER_UPDATE_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether the webhook is active (true) or disabled (false).
   * @default null
   */
  enabled: boolean | null;
  /**
   * Events
   * @description List of event types that will trigger this webhook subscription. Available: campaign.created, campaign.updated, ticket.created, transaction.succeeded, contact.created, plan.canceled, plan.created, plan.resumed, plan.updated
   * @default null
   */
  events: string[] | null;
  /**
   * Id
   * @description Unique identifier of the webhook to update
   */
  id?: string;
  /**
   * Name
   * @description New friendly name for the webhook subscription.
   * @default null
   */
  name: string | null;
  /**
   * Url
   * @description The HTTPS endpoint URL that will receive webhook payloads.
   * @default null
   */
  url: string | null;
};

/**
 * Type of GIVEBUTTER's GIVEBUTTER_UPDATE_WEBHOOK tool output.
 */
type GIVEBUTTER_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Events
       * @description Event types this webhook will receive.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook subscription.
       */
      name: string;
      /**
       * Signing Secret
       * @description Secret token used to verify incoming webhook signatures.
       * @default null
       */
      signing_secret: string | null;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the webhook was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * Url
       * @description Destination URL for webhook payloads.
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
 * Type map of all available tool input types for toolkit "GIVEBUTTER".
 */
export type GIVEBUTTER_TOOL_INPUTS = {
  ARCHIVE_CONTACT: GIVEBUTTER_ARCHIVE_CONTACT_INPUT
  CREATE_CAMPAIGN: GIVEBUTTER_CREATE_CAMPAIGN_INPUT
  CREATE_WEBHOOK: GIVEBUTTER_CREATE_WEBHOOK_INPUT
  DELETE_CAMPAIGN: GIVEBUTTER_DELETE_CAMPAIGN_INPUT
  DELETE_CONTACT: GIVEBUTTER_DELETE_CONTACT_INPUT
  DELETE_FUND: GIVEBUTTER_DELETE_FUND_INPUT
  DELETE_WEBHOOK: GIVEBUTTER_DELETE_WEBHOOK_INPUT
  GET_FUND: GIVEBUTTER_GET_FUND_INPUT
  GET_MEMBERS: GIVEBUTTER_GET_MEMBERS_INPUT
  GET_PAYOUTS: GIVEBUTTER_GET_PAYOUTS_INPUT
  GET_PLANS: GIVEBUTTER_GET_PLANS_INPUT
  GET_TEAMS: GIVEBUTTER_GET_TEAMS_INPUT
  GET_TICKETS: GIVEBUTTER_GET_TICKETS_INPUT
  GET_TRANSACTIONS: GIVEBUTTER_GET_TRANSACTIONS_INPUT
  GET_WEBHOOKS: GIVEBUTTER_GET_WEBHOOKS_INPUT
  UPDATE_CAMPAIGN: GIVEBUTTER_UPDATE_CAMPAIGN_INPUT
  UPDATE_CONTACT: GIVEBUTTER_UPDATE_CONTACT_INPUT
  UPDATE_WEBHOOK: GIVEBUTTER_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GIVEBUTTER".
 */
export type GIVEBUTTER_TOOL_OUTPUTS = {
  ARCHIVE_CONTACT: GIVEBUTTER_ARCHIVE_CONTACT_OUTPUT
  CREATE_CAMPAIGN: GIVEBUTTER_CREATE_CAMPAIGN_OUTPUT
  CREATE_WEBHOOK: GIVEBUTTER_CREATE_WEBHOOK_OUTPUT
  DELETE_CAMPAIGN: GIVEBUTTER_DELETE_CAMPAIGN_OUTPUT
  DELETE_CONTACT: GIVEBUTTER_DELETE_CONTACT_OUTPUT
  DELETE_FUND: GIVEBUTTER_DELETE_FUND_OUTPUT
  DELETE_WEBHOOK: GIVEBUTTER_DELETE_WEBHOOK_OUTPUT
  GET_FUND: GIVEBUTTER_GET_FUND_OUTPUT
  GET_MEMBERS: GIVEBUTTER_GET_MEMBERS_OUTPUT
  GET_PAYOUTS: GIVEBUTTER_GET_PAYOUTS_OUTPUT
  GET_PLANS: GIVEBUTTER_GET_PLANS_OUTPUT
  GET_TEAMS: GIVEBUTTER_GET_TEAMS_OUTPUT
  GET_TICKETS: GIVEBUTTER_GET_TICKETS_OUTPUT
  GET_TRANSACTIONS: GIVEBUTTER_GET_TRANSACTIONS_OUTPUT
  GET_WEBHOOKS: GIVEBUTTER_GET_WEBHOOKS_OUTPUT
  UPDATE_CAMPAIGN: GIVEBUTTER_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_CONTACT: GIVEBUTTER_UPDATE_CONTACT_OUTPUT
  UPDATE_WEBHOOK: GIVEBUTTER_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GIVEBUTTER toolkit.
 */
export const GIVEBUTTER = {
  slug: "givebutter",
  tools: {
    /**
     * Tool to archive a contact by their id. use after ensuring the contact has no associated data (e.g., no transactions or communications). example: "archive contact abc123".
     */
    ARCHIVE_CONTACT: "GIVEBUTTER_ARCHIVE_CONTACT",
    /**
     * Tool to create a new campaign. use when you have title, description, goal, and type ready, after confirming your givebutter account is authenticated.
     */
    CREATE_CAMPAIGN: "GIVEBUTTER_CREATE_CAMPAIGN",
    /**
     * Tool to create a new webhook subscription. use when you need to receive real-time notifications programmatically after confirming your endpoint can validate givebutter's signing secret.
     */
    CREATE_WEBHOOK: "GIVEBUTTER_CREATE_WEBHOOK",
    /**
     * Tool to delete a campaign by its id. use after confirming the campaign has no funds raised. example: "delete campaign abc123".
     */
    DELETE_CAMPAIGN: "GIVEBUTTER_DELETE_CAMPAIGN",
    /**
     * Tool to delete a contact by their id. use after confirming the contact has no associated data (e.g., no transactions or communications). example: "delete contact abc123".
     */
    DELETE_CONTACT: "GIVEBUTTER_DELETE_CONTACT",
    /**
     * Tool to delete a fund by its id. use when you need to remove a fund after confirming it exists. example: "delete fund fund abc123".
     */
    DELETE_FUND: "GIVEBUTTER_DELETE_FUND",
    /**
     * Tool to delete a webhook by its id. use when you need to remove an obsolete webhook after confirming no further events are needed. example: "delete webhook abc123".
     */
    DELETE_WEBHOOK: "GIVEBUTTER_DELETE_WEBHOOK",
    /**
     * Tool to retrieve details of a specific fund by its id. use after confirming the fund id is valid.
     */
    GET_FUND: "GIVEBUTTER_GET_FUND",
    /**
     * Tool to retrieve a paginated list of members for a given campaign. use when you need to list or process campaign members.
     */
    GET_MEMBERS: "GIVEBUTTER_GET_MEMBERS",
    /**
     * Tool to retrieve a list of payouts associated with your account. use when you need to list withdrawal transactions after authentication.
     */
    GET_PAYOUTS: "GIVEBUTTER_GET_PAYOUTS",
    /**
     * Tool to retrieve a list of plans associated with your account. use after authentication to fetch recurring donation plans.
     */
    GET_PLANS: "GIVEBUTTER_GET_PLANS",
    /**
     * Tool to retrieve a list of teams for a specific campaign. use after creating or updating a campaign when you need to list fundraising teams. example: "get teams for campaign camp123".
     */
    GET_TEAMS: "GIVEBUTTER_GET_TEAMS",
    /**
     * Tool to retrieve a list of tickets. use when you need to list all tickets for your account after authentication.
     */
    GET_TICKETS: "GIVEBUTTER_GET_TICKETS",
    /**
     * Tool to retrieve a list of transactions associated with your account. use when you need to list all donations and payments, optionally filtered by scope.
     */
    GET_TRANSACTIONS: "GIVEBUTTER_GET_TRANSACTIONS",
    /**
     * Tool to retrieve all webhooks configured for your account. use after obtaining valid authentication.
     */
    GET_WEBHOOKS: "GIVEBUTTER_GET_WEBHOOKS",
    /**
     * Tool to update an existing campaign's details by its id. use when you need to modify campaign attributes after creation.
     */
    UPDATE_CAMPAIGN: "GIVEBUTTER_UPDATE_CAMPAIGN",
    /**
     * Tool to update an existing contact's details by contact id. use when modifying contact information after confirming the contact id. only provided fields will be updated.
     */
    UPDATE_CONTACT: "GIVEBUTTER_UPDATE_CONTACT",
    /**
     * Tool to update an existing webhook subscription's details. use when you need to modify a webhook's name, url, trigger events, or enabled state after confirming its id. example: "update webhook wh 1234567890 to point to https://example.com/hook, enable transaction.succeeded only."
     */
    UPDATE_WEBHOOK: "GIVEBUTTER_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GIVEBUTTER".
 */
export type GIVEBUTTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GIVEBUTTER".
 */
export type GIVEBUTTER_TRIGGER_EVENTS = {}
