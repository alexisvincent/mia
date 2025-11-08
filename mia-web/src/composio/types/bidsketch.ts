// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BIDSKETCH's BIDSKETCH_CREATE_CLIENT tool input.
 */
type BIDSKETCH_CREATE_CLIENT_INPUT = {
  /**
   * Address Field One
   * @description First line of the client's address.
   * @default null
   */
  address_field_one: string | null;
  /**
   * Address Field Two
   * @description Second line of the client's address.
   * @default null
   */
  address_field_two: string | null;
  /**
   * Alt Phone
   * @description Client's alternate phone number.
   * @default null
   */
  alt_phone: string | null;
  /**
   * City
   * @description City in the client's address.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country in the client's address.
   * @default null
   */
  country: string | null;
  /**
   * Email
   * @description Client's primary email address.
   */
  email?: string;
  /**
   * First Name
   * @description Client's first name if they are a person.
   */
  first_name?: string;
  /**
   * Last Name
   * @description Client's last name if they are a person.
   */
  last_name?: string;
  /**
   * Name
   * @description Client's full name or company name.
   * @default null
   */
  name: string | null;
  /**
   * Notes
   * @description Notes about the client; quotes need not be escaped.
   * @default null
   */
  notes: string | null;
  /**
   * OtherContactRequest
   * @description Secondary contact information for client creation.
   * @default null
   */
  other_contact: {
      /**
       * Email
       * @description Secondary contact's email address.
       */
      email: string;
      /**
       * First Name
       * @description Secondary contact's first name.
       */
      first_name: string;
      /**
       * Last Name
       * @description Secondary contact's last name.
       */
      last_name: string;
      /**
       * Phone
       * @description Secondary contact's phone number.
       * @default null
       */
      phone: string | null;
  } | null;
  /**
   * Phone
   * @description Client's primary phone number.
   * @default null
   */
  phone: string | null;
  /**
   * Postal Zip
   * @description Postal or ZIP code of the client's address.
   * @default null
   */
  postal_zip: string | null;
  /**
   * State
   * @description State in the client's address.
   * @default null
   */
  state: string | null;
  /**
   * Website
   * @description Client's website.
   * @default null
   */
  website: string | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_CREATE_CLIENT tool output.
 */
type BIDSKETCH_CREATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Field One
       * @description First line of the client's address.
       * @default null
       */
      address_field_one: string | null;
      /**
       * Address Field Two
       * @description Second line of the client's address.
       * @default null
       */
      address_field_two: string | null;
      /**
       * Alt Phone
       * @description Client's alternate phone number.
       * @default null
       */
      alt_phone: string | null;
      /**
       * App Url
       * @description Bidsketch app URL for the client.
       */
      app_url: string;
      /**
       * City
       * @description City of the client's address.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the client's address.
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description When the client was created.
       */
      created_at: string;
      /**
       * Email
       * @description Client's primary email address.
       */
      email: string;
      /**
       * First Name
       * @description Client's first name.
       */
      first_name: string;
      /**
       * Id
       * @description The client ID.
       */
      id: number;
      /**
       * Last Name
       * @description Client's last name.
       */
      last_name: string;
      /**
       * Name
       * @description Client's full name or company name.
       * @default null
       */
      name: string | null;
      /**
       * Notes
       * @description Notes about the client.
       * @default null
       */
      notes: string | null;
      /**
       * OtherContactResponse
       * @description Secondary contact information in client record.
       * @default null
       */
      other_contact: {
          /**
           * Email
           * @description Secondary contact's email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Secondary contact's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Secondary contact's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Phone
           * @description Secondary contact's phone number.
           * @default null
           */
          phone: string | null;
      } | null;
      /**
       * Phone
       * @description Client's primary phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Postal Zip
       * @description Postal or ZIP code of the client's address.
       * @default null
       */
      postal_zip: string | null;
      /**
       * State
       * @description State of the client's address.
       * @default null
       */
      state: string | null;
      /**
       * Updated At
       * @description When the client was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for the client.
       */
      url: string;
      /**
       * Website
       * @description Client's website URL.
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_CLIENT tool input.
 */
type BIDSKETCH_DELETE_CLIENT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the client to delete.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_CLIENT tool output.
 */
type BIDSKETCH_DELETE_CLIENT_OUTPUT = {
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_FEE tool input.
 */
type BIDSKETCH_DELETE_FEE_INPUT = {
  /**
   * Fee Id
   * @description Unique ID of the fee to delete
   */
  fee_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_FEE tool output.
 */
type BIDSKETCH_DELETE_FEE_OUTPUT = {
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_PROPOSAL tool input.
 */
type BIDSKETCH_DELETE_PROPOSAL_INPUT = {
  /**
   * Id
   * @description The unique identifier of the proposal to delete.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_PROPOSAL tool output.
 */
type BIDSKETCH_DELETE_PROPOSAL_OUTPUT = {
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_PROPOSAL_FEE tool input.
 */
type BIDSKETCH_DELETE_PROPOSAL_FEE_INPUT = {
  /**
   * Fee Id
   * @description The ID of the fee to delete.
   */
  fee_id?: number;
  /**
   * Proposal Id
   * @description ID of the proposal containing the fee.
   */
  proposal_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_PROPOSAL_FEE tool output.
 */
type BIDSKETCH_DELETE_PROPOSAL_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the fee was successfully deleted.
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_PROPOSAL_SECTION tool input.
 */
type BIDSKETCH_DELETE_PROPOSAL_SECTION_INPUT = {
  /**
   * Proposal Id
   * @description ID of the proposal containing the section to delete
   */
  proposal_id?: number;
  /**
   * Section Id
   * @description ID of the section to delete
   */
  section_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_PROPOSAL_SECTION tool output.
 */
type BIDSKETCH_DELETE_PROPOSAL_SECTION_OUTPUT = {
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_SECTION tool input.
 */
type BIDSKETCH_DELETE_SECTION_INPUT = {
  /**
   * Id
   * @description The ID of the section to delete.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_SECTION tool output.
 */
type BIDSKETCH_DELETE_SECTION_OUTPUT = {
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
 * Type of BIDSKETCH's BIDSKETCH_DELETE_WEBHOOK tool input.
 */
type BIDSKETCH_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The ID of the webhook to delete.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_DELETE_WEBHOOK tool output.
 */
type BIDSKETCH_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of BIDSKETCH's BIDSKETCH_GET_CLIENT tool input.
 */
type BIDSKETCH_GET_CLIENT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the client to retrieve.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_CLIENT tool output.
 */
type BIDSKETCH_GET_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Field One
       * @description First line of the client's address.
       * @default null
       */
      address_field_one: string | null;
      /**
       * Address Field Two
       * @description Second line of the client's address.
       * @default null
       */
      address_field_two: string | null;
      /**
       * Alt Phone
       * @description Client's alternate phone number.
       * @default null
       */
      alt_phone: string | null;
      /**
       * App Url
       * @description The Bidsketch app URL for this client.
       */
      app_url: string;
      /**
       * City
       * @description City of the client's address.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the client's address.
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description When the client was created.
       */
      created_at: string;
      /**
       * Email
       * @description Client's primary email address.
       */
      email: string;
      /**
       * First Name
       * @description Client's first name.
       */
      first_name: string;
      /**
       * Id
       * @description The client ID.
       */
      id: number;
      /**
       * Last Name
       * @description Client's last name.
       */
      last_name: string;
      /**
       * Name
       * @description Client's full name or company name.
       */
      name: string;
      /**
       * Notes
       * @description Notes about the client.
       * @default null
       */
      notes: string | null;
      /**
       * OtherContact
       * @description Secondary contact information, if provided.
       * @default null
       */
      other_contact: {
          /**
           * Email
           * @description Secondary contact's email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Secondary contact's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Secondary contact's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Phone
           * @description Secondary contact's phone number.
           * @default null
           */
          phone: string | null;
      } | null;
      /**
       * Phone
       * @description Client's primary phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Postal Zip
       * @description Postal or ZIP code of the client's address.
       * @default null
       */
      postal_zip: string | null;
      /**
       * State
       * @description State or province of the client's address.
       * @default null
       */
      state: string | null;
      /**
       * Updated At
       * @description When the client was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API URL for this client.
       */
      url: string;
      /**
       * Website
       * @description Client's website URL.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_CLIENTS tool input.
 */
type BIDSKETCH_GET_CLIENTS_INPUT = object;

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_CLIENTS tool output.
 */
type BIDSKETCH_GET_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of Bidsketch clients on the account
       */
      clients: {
          /**
           * App Url
           * @description The Bidsketch app url for the client
           */
          app_url: string;
          /**
           * Created At
           * @description When the client was created
           */
          created_at: string;
          /**
           * Email
           * @description The client's primary email address
           */
          email: string;
          /**
           * First Name
           * @description The client's first name if they are a person
           */
          first_name: string;
          /**
           * Id
           * @description The unique id for the client
           */
          id: number;
          /**
           * Last Name
           * @description The client's last name if they are a person
           */
          last_name: string;
          /**
           * Name
           * @description The client's full name or company name
           */
          name: string;
          /**
           * Phone
           * @description The client's primary phone number
           */
          phone: string;
          /**
           * Updated At
           * @description When the client was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description The API url for the client
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
 * Type of BIDSKETCH's BIDSKETCH_GET_CLIENT_PROPOSALS tool input.
 */
type BIDSKETCH_GET_CLIENT_PROPOSALS_INPUT = {
  /**
   * Client Id
   * @description The ID of the client whose proposals to retrieve
   */
  client_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_CLIENT_PROPOSALS tool output.
 */
type BIDSKETCH_GET_CLIENT_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Proposals
       * @description List of proposals for the specified client
       */
      proposals: {
          /**
           * App Url
           * @description Web URL of this proposal in Bidsketch
           */
          app_url: string;
          /**
           * Created At
           * @description Timestamp when the proposal was created
           */
          created_at: string;
          /**
           * Description
           * @description Short description of the proposal
           */
          description: string;
          /**
           * Id
           * @description Unique identifier of the proposal
           */
          id: number;
          /**
           * Is Draft
           * @description Whether the proposal is still a draft
           */
          is_draft: boolean;
          /**
           * Name
           * @description Title of the proposal
           */
          name: string;
          /**
           * Status
           * @description Current status of the proposal
           * @enum {string}
           */
          status: "Pending" | "Viewed" | "Accepted" | "Declined";
          /**
           * Updated At
           * @description Timestamp when the proposal was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description API URL of this proposal
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
 * Type of BIDSKETCH's BIDSKETCH_GET_FEE tool input.
 */
type BIDSKETCH_GET_FEE_INPUT = {
  /**
   * Fee Id
   * @description Unique ID of the fee to retrieve.
   */
  fee_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_FEE tool output.
 */
type BIDSKETCH_GET_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Base amount per unit or total amount of the fee.
       */
      amount: number;
      /**
       * App Url
       * @description The Bidsketch app url for the fee.
       */
      app_url: string;
      /**
       * Category
       * @description Category label for grouping fees.
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description When the fee was created.
       */
      created_at: string;
      /**
       * Currency
       * @description ISO 4217 currency code for the fee.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description HTML-formatted description of the fee.
       * @default null
       */
      description: string | null;
      /**
       * Details
       * @description Formatted fee label (e.g., '$1,615 (19 hours @ $85/hour)').
       * @default null
       */
      details: string | null;
      /**
       * Feetype
       * @description Type of fee. Must be one of 'fixed', 'hourly', 'monthly', 'yearly', or 'custom'.
       * @enum {string}
       */
      feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
      /**
       * Id
       * @description The unique id for the fee.
       */
      id: number;
      /**
       * Name
       * @description The name of the fee.
       */
      name: string;
      /**
       * Quantity
       * @description Quantity used for calculated fees.
       * @default null
       */
      quantity: number | null;
      /**
       * Total
       * @description Total amount of the fee.
       */
      total: number;
      /**
       * Unit
       * @description Unit label for calculated or custom fees.
       * @default null
       */
      unit: string | null;
      /**
       * Updated At
       * @description When the fee was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API url for the fee.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_FEES tool input.
 */
type BIDSKETCH_GET_FEES_INPUT = object;

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_FEES tool output.
 */
type BIDSKETCH_GET_FEES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fees
       * @description List of fees saved in the account
       */
      fees: {
          /**
           * App Url
           * @description Bidsketch app URL for the fee
           */
          app_url: string;
          /**
           * Category
           * @description A fee category to group fees together
           */
          category: string;
          /**
           * Created At
           * @description Timestamp when the fee was created
           */
          created_at: string;
          /**
           * Details
           * @description A formatted label for the fee
           */
          details: string;
          /**
           * Feetype
           * @description Specifies the type of fee. Must be one of fixed, hourly, monthly, yearly, or custom
           * @enum {string}
           */
          feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
          /**
           * Id
           * @description Unique id for the fee
           */
          id: number;
          /**
           * Name
           * @description The name of the fee
           */
          name: string;
          /**
           * Total
           * @description The total amount of the fee
           */
          total: number;
          /**
           * Updated At
           * @description Timestamp when the fee was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for the fee
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL tool input.
 */
type BIDSKETCH_GET_PROPOSAL_INPUT = {
  /**
   * Id
   * @description The unique identifier of the proposal to retrieve.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL tool output.
 */
type BIDSKETCH_GET_PROPOSAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description The Bidsketch app URL for this proposal.
       */
      app_url: string;
      /**
       * Client Id
       * @description ID of the associated client.
       */
      client_id: number;
      /**
       * Created At
       * @description When the proposal was created.
       */
      created_at: string;
      /**
       * Id
       * @description The proposal ID.
       */
      id: number;
      /**
       * Status
       * @description Current status of the proposal (e.g., draft, sent, accepted).
       */
      status: string;
      /**
       * Title
       * @description Title of the proposal.
       */
      title: string;
      /**
       * Updated At
       * @description When the proposal was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API URL for this proposal.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSALS tool input.
 */
type BIDSKETCH_GET_PROPOSALS_INPUT = object;

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSALS tool output.
 */
type BIDSKETCH_GET_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Proposals
       * @description List of proposals on the account
       */
      proposals: {
          /**
           * App Url
           * @description Web URL of this proposal in Bidsketch
           */
          app_url: string;
          /**
           * Created At
           * @description Timestamp when the proposal was created
           */
          created_at: string;
          /**
           * Description
           * @description Short description of the proposal
           */
          description: string;
          /**
           * Id
           * @description Unique identifier of the proposal
           */
          id: number;
          /**
           * Is Draft
           * @description Whether the proposal is still a draft
           */
          is_draft: boolean;
          /**
           * Name
           * @description Title of the proposal
           */
          name: string;
          /**
           * Status
           * @description Current status of the proposal
           * @enum {string}
           */
          status: "Pending" | "Viewed" | "Accepted" | "Declined";
          /**
           * Updated At
           * @description Timestamp when the proposal was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description API URL of this proposal
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_CONTENT tool input.
 */
type BIDSKETCH_GET_PROPOSAL_CONTENT_INPUT = {
  /**
   * Proposal Id
   * @description ID of the proposal to retrieve content for.
   */
  proposal_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_CONTENT tool output.
 */
type BIDSKETCH_GET_PROPOSAL_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description Bidsketch app URL for the proposal.
       */
      app_url: string;
      /**
       * Content
       * @description Nested content of the proposal.
       */
      content: {
          /**
           * Closing Sections
           * @description List of closing sections in display order.
           */
          closing_sections: {
              /**
               * Description
               * @description HTML content of the section.
               */
              description: string;
              /**
               * Id
               * @description Section ID.
               */
              id: number;
              /**
               * Name
               * @description Section name.
               */
              name: string;
              /**
               * Url
               * @description API URL for this section.
               */
              url: string;
          }[];
          /**
           * Fees
           * @description List of fee items in display order.
           */
          fees: {
              /**
               * Amount
               * @description Unit price or rate.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code (ISO 4217).
               */
              currency: string;
              /**
               * Description
               * @description HTML description of the fee.
               */
              description: string;
              /**
               * Details
               * @description Formatted details of the fee.
               */
              details: string;
              /**
               * Feetype
               * @description Type of fee (e.g., fixed, hourly).
               */
              feetype: string;
              /**
               * Id
               * @description Fee ID.
               */
              id: number;
              /**
               * Name
               * @description Fee name.
               */
              name: string;
              /**
               * Optional
               * @description Whether the fee is optional.
               */
              optional: boolean;
              /**
               * Quantity
               * @description Quantity for hourly or custom fees.
               * @default null
               */
              quantity: number | null;
              /**
               * Total
               * @description Total price for this fee line.
               */
              total: number;
              /**
               * Unit
               * @description Unit for hourly fees (e.g., Hour).
               * @default null
               */
              unit: string | null;
              /**
               * Url
               * @description API URL for this fee.
               */
              url: string;
          }[];
          /**
           * Opening Sections
           * @description List of opening sections in display order.
           */
          opening_sections: {
              /**
               * Description
               * @description HTML content of the section.
               */
              description: string;
              /**
               * Id
               * @description Section ID.
               */
              id: number;
              /**
               * Name
               * @description Section name.
               */
              name: string;
              /**
               * Url
               * @description API URL for this section.
               */
              url: string;
          }[];
      };
      /**
       * Id
       * @description The proposal ID.
       */
      id: number;
      /**
       * Url
       * @description API URL for the proposal.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_FEE tool input.
 */
type BIDSKETCH_GET_PROPOSAL_FEE_INPUT = {
  /**
   * Fee Id
   * @description ID of the fee to retrieve within the proposal.
   */
  fee_id?: number;
  /**
   * Proposal Id
   * @description ID of the proposal containing the fee.
   */
  proposal_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_FEE tool output.
 */
type BIDSKETCH_GET_PROPOSAL_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the fee was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code (ISO 4217).
       */
      currency: string;
      /**
       * Description
       * @description HTML description of the fee item.
       */
      description: string;
      /**
       * Details
       * @description Formatted label or details for this fee.
       */
      details: string;
      /**
       * Feetype
       * @description Type of the fee.
       * @enum {string}
       */
      feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
      /**
       * Id
       * @description Unique identifier of the fee.
       */
      id: number;
      /**
       * Name
       * @description Name of the fee item.
       */
      name: string;
      /**
       * Optional
       * @description Whether the fee is optional.
       */
      optional: boolean;
      /**
       * Quantity
       * @description Quantity for calculated fees, if applicable.
       * @default null
       */
      quantity: number | null;
      /**
       * Total
       * @description Total amount for this fee.
       */
      total: number;
      /**
       * Unit
       * @description Unit label for calculated or custom fees, if applicable.
       * @default null
       */
      unit: string | null;
      /**
       * Unit Amount
       * @description Unit price or amount for this fee.
       */
      unit_amount: number;
      /**
       * Updated At
       * @description Timestamp when the fee was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal fee.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_FEES tool input.
 */
type BIDSKETCH_GET_PROPOSAL_FEES_INPUT = {
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Proposal Id
   * @description ID of the proposal to list fees for.
   */
  proposal_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_FEES tool output.
 */
type BIDSKETCH_GET_PROPOSAL_FEES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fees
       * @description List of fee items for the proposal.
       */
      fees: {
          /**
           * Created At
           * @description Timestamp when the fee was created.
           */
          created_at: string;
          /**
           * Feetype
           * @description Type of fee (e.g., fixed, hourly).
           */
          feetype: string;
          /**
           * Id
           * @description Unique identifier of the fee.
           */
          id: number;
          /**
           * Name
           * @description Name of the fee.
           */
          name: string;
          /**
           * Optional
           * @description Whether the fee is optional.
           */
          optional: boolean;
          /**
           * Total
           * @description Total amount for this fee item.
           */
          total: number;
          /**
           * Updated At
           * @description Timestamp when the fee was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description API URL of this fee.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_SECTION tool input.
 */
type BIDSKETCH_GET_PROPOSAL_SECTION_INPUT = {
  /**
   * Proposal Id
   * @description ID of the proposal containing the section to retrieve
   */
  proposal_id?: number;
  /**
   * Section Id
   * @description ID of the specific section to retrieve
   */
  section_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_SECTION tool output.
 */
type BIDSKETCH_GET_PROPOSAL_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the section was created
       */
      created_at: string;
      /**
       * Description
       * @description HTML content of the section
       */
      description: string;
      /**
       * Id
       * @description The section's unique identifier
       */
      id: number;
      /**
       * Name
       * @description Name/title of the section
       */
      name: string;
      /**
       * Sectiontype
       * @description Section placement: 'opening' or 'closing'
       * @enum {string}
       */
      sectiontype: "opening" | "closing";
      /**
       * Updated At
       * @description Timestamp when the section was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal section
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_SECTIONS tool input.
 */
type BIDSKETCH_GET_PROPOSAL_SECTIONS_INPUT = {
  /**
   * Proposal Id
   * @description ID of the proposal to retrieve sections for.
   */
  proposal_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_SECTIONS tool output.
 */
type BIDSKETCH_GET_PROPOSAL_SECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sections
       * @description List of sections for the specified proposal.
       */
      sections: {
          /**
           * Created At
           * @description Timestamp when the section was created.
           */
          created_at: string;
          /**
           * Id
           * @description Section ID.
           */
          id: number;
          /**
           * Name
           * @description Name of the section.
           */
          name: string;
          /**
           * Sectiontype
           * @description Type of the section: opening or closing.
           * @enum {string}
           */
          sectiontype: "opening" | "closing";
          /**
           * Updated At
           * @description Timestamp when the section was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for this section.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_STATS tool input.
 */
type BIDSKETCH_GET_PROPOSAL_STATS_INPUT = object;

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_PROPOSAL_STATS tool output.
 */
type BIDSKETCH_GET_PROPOSAL_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total number of proposals for the account
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
 * Type of BIDSKETCH's BIDSKETCH_GET_SECTION tool input.
 */
type BIDSKETCH_GET_SECTION_INPUT = {
  /**
   * Id
   * @description The unique identifier of the section to retrieve.
   */
  id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_SECTION tool output.
 */
type BIDSKETCH_GET_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description The Bidsketch app url for the section.
       */
      app_url: string;
      /**
       * Category
       * @description A section category to group sections together.
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description When the section was created.
       */
      created_at: string;
      /**
       * Description
       * @description HTML formatted content of the section.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique id for the section.
       */
      id: number;
      /**
       * Name
       * @description The name of the section.
       */
      name: string;
      /**
       * Sectiontype
       * @description Specifies where the section will appear in a proposal.
       * @enum {string}
       */
      sectiontype: "opening" | "closing";
      /**
       * Updated At
       * @description When the section was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API url for the section.
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
 * Type of BIDSKETCH's BIDSKETCH_GET_SECTIONS tool input.
 */
type BIDSKETCH_GET_SECTIONS_INPUT = object;

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_SECTIONS tool output.
 */
type BIDSKETCH_GET_SECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sections
       * @description List of Bidsketch sections on the account
       */
      sections: {
          /**
           * App Url
           * @description The Bidsketch app url for the section
           */
          app_url: string;
          /**
           * Category
           * @description Category label for grouping sections
           * @default null
           */
          category: string | null;
          /**
           * Created At
           * @description When the section was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique id for the section
           */
          id: number;
          /**
           * Name
           * @description The name of the section
           */
          name: string;
          /**
           * Sectiontype
           * @description Type of the section: opening or closing
           * @enum {string}
           */
          sectiontype: "opening" | "closing";
          /**
           * Updated At
           * @description When the section was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description The API url for the section
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
 * Type of BIDSKETCH's BIDSKETCH_GET_TEMPLATES tool input.
 */
type BIDSKETCH_GET_TEMPLATES_INPUT = object;

/**
 * Type of BIDSKETCH's BIDSKETCH_GET_TEMPLATES tool output.
 */
type BIDSKETCH_GET_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of proposal templates saved in the account
       */
      templates: {
          /**
           * App Url
           * @description The Bidsketch app url for the template
           */
          app_url: string;
          /**
           * Created At
           * @description When the template was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique id for the template
           */
          id: number;
          /**
           * Name
           * @description A name for the template
           */
          name: string;
          /**
           * Updated At
           * @description When the template was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description The API url for the template
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
 * Type of BIDSKETCH's BIDSKETCH_POST_FEE tool input.
 */
type BIDSKETCH_POST_FEE_INPUT = {
  /**
   * Amount
   * @description Fee amount. For fixed fees, this is a total; for calculated fees, this is the amount per unit.
   */
  amount?: number;
  /**
   * Category
   * @description A fee category to group fees together.
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description HTML formatted description for the fee.
   * @default null
   */
  description: string | null;
  /**
   * Feetype
   * @description Type of fee. Must be one of 'fixed', 'hourly', 'monthly', 'yearly', or 'custom'.
   * @enum {string}
   */
  feetype?: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
  /**
   * Name
   * @description Name of the fee to create.
   */
  name?: string;
  /**
   * Quantity
   * @description Quantity used for calculated fees.
   * @default null
   */
  quantity: number | null;
  /**
   * Unit
   * @description Unit label for custom fees. Required only when feetype is 'custom'.
   * @default null
   */
  unit: string | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_POST_FEE tool output.
 */
type BIDSKETCH_POST_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Base amount per unit or total amount of the fee.
       */
      amount: number;
      /**
       * App Url
       * @description The Bidsketch app url for the fee.
       */
      app_url: string;
      /**
       * Category
       * @description Category label for grouping fees.
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description When the fee was created.
       */
      created_at: string;
      /**
       * Currency
       * @description ISO 4217 currency code for the fee.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description HTML-formatted description of the fee.
       * @default null
       */
      description: string | null;
      /**
       * Details
       * @description Formatted fee label (e.g., '$1,615 (19 hours @ $85/hour)').
       * @default null
       */
      details: string | null;
      /**
       * Feetype
       * @description Type of fee.
       * @enum {string}
       */
      feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
      /**
       * Id
       * @description The unique id for the fee.
       */
      id: number;
      /**
       * Name
       * @description The name of the fee.
       */
      name: string;
      /**
       * Quantity
       * @description Quantity used for calculated fees.
       * @default null
       */
      quantity: number | null;
      /**
       * Total
       * @description Total amount of the fee.
       */
      total: number;
      /**
       * Unit
       * @description Unit label for calculated or custom fees.
       * @default null
       */
      unit: string | null;
      /**
       * Updated At
       * @description When the fee was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API url for the fee.
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
 * Type of BIDSKETCH's BIDSKETCH_POST_PROPOSAL_FEE tool input.
 */
type BIDSKETCH_POST_PROPOSAL_FEE_INPUT = {
  /**
   * Amount
   * @description Base amount per unit or total amount for fixed fees.
   */
  amount?: number;
  /**
   * Description
   * @description HTML formatted description for the fee.
   * @default null
   */
  description: string | null;
  /**
   * Feetype
   * @description Type of fee. Must be one of 'fixed', 'hourly', 'monthly', 'yearly', or 'custom'.
   * @enum {string}
   */
  feetype?: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
  /**
   * Name
   * @description Title of the fee line item
   */
  name?: string;
  /**
   * Optional
   * @description Whether the fee is optional. Defaults to false.
   * @default false
   */
  optional: boolean | null;
  /**
   * Proposal Id
   * @description ID of the proposal to which this fee will be added
   */
  proposal_id?: number;
  /**
   * Quantity
   * @description Quantity for calculated fees (e.g., hours).
   * @default null
   */
  quantity: number | null;
  /**
   * Unit
   * @description Unit label for calculated or custom fees. Required when feetype is 'custom'.
   * @default null
   */
  unit: string | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_POST_PROPOSAL_FEE tool output.
 */
type BIDSKETCH_POST_PROPOSAL_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the fee was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code (ISO 4217) of the proposal.
       */
      currency: string;
      /**
       * Description
       * @description HTML description of the fee item.
       * @default null
       */
      description: string | null;
      /**
       * Details
       * @description Formatted label or details for this fee item.
       */
      details: string;
      /**
       * Feetype
       * @description Type of the fee.
       * @enum {string}
       */
      feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
      /**
       * Id
       * @description Unique identifier of the fee.
       */
      id: number;
      /**
       * Name
       * @description Name of the fee item.
       */
      name: string;
      /**
       * Optional
       * @description Whether the fee is optional.
       */
      optional: boolean;
      /**
       * Quantity
       * @description Quantity for calculated fees, if applicable.
       * @default null
       */
      quantity: number | null;
      /**
       * Total
       * @description Total amount for this fee item.
       */
      total: number;
      /**
       * Unit
       * @description Unit label for calculated or custom fees, if applicable.
       * @default null
       */
      unit: string | null;
      /**
       * Unit Amount
       * @description Unit price or base amount for this fee.
       */
      unit_amount: number;
      /**
       * Updated At
       * @description Timestamp when the fee was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal fee.
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
 * Type of BIDSKETCH's BIDSKETCH_POST_PROPOSAL_SECTION tool input.
 */
type BIDSKETCH_POST_PROPOSAL_SECTION_INPUT = {
  /**
   * Description
   * @description HTML content of the section
   */
  description?: string;
  /**
   * Name
   * @description Name/title of the section
   */
  name?: string;
  /**
   * Proposal Id
   * @description ID of the proposal to which this section will be added
   */
  proposal_id?: number;
  /**
   * Sectiontype
   * @description Section placement: 'opening' or 'closing'
   * @enum {string}
   */
  sectiontype?: "opening" | "closing";
};

/**
 * Type of BIDSKETCH's BIDSKETCH_POST_PROPOSAL_SECTION tool output.
 */
type BIDSKETCH_POST_PROPOSAL_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the section was created
       */
      created_at: string;
      /**
       * Description
       * @description HTML content of the section
       */
      description: string;
      /**
       * Id
       * @description The section's unique identifier
       */
      id: number;
      /**
       * Name
       * @description Name/title of the section
       */
      name: string;
      /**
       * Sectiontype
       * @description Section placement: 'opening' or 'closing'
       * @enum {string}
       */
      sectiontype: "opening" | "closing";
      /**
       * Updated At
       * @description Timestamp when the section was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal section
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
 * Type of BIDSKETCH's BIDSKETCH_POST_SECTION tool input.
 */
type BIDSKETCH_POST_SECTION_INPUT = {
  /**
   * Category
   * @description A section category to group sections together.
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description HTML-formatted content of the section.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The name of the section.
   */
  name?: string;
  /**
   * Sectiontype
   * @description Specifies where the section will appear in a proposal. Must be 'opening' or 'closing'.
   * @enum {string}
   */
  sectiontype?: "opening" | "closing";
};

/**
 * Type of BIDSKETCH's BIDSKETCH_POST_SECTION tool output.
 */
type BIDSKETCH_POST_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description The Bidsketch app url for the section.
       */
      app_url: string;
      /**
       * Category
       * @description A section category to group sections together.
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description When the section was created.
       */
      created_at: string;
      /**
       * Description
       * @description HTML formatted content of the section.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique id for the section.
       */
      id: number;
      /**
       * Name
       * @description The name of the section.
       */
      name: string;
      /**
       * Sectiontype
       * @description Specifies where the section appears in a proposal.
       * @enum {string}
       */
      sectiontype: "opening" | "closing";
      /**
       * Updated At
       * @description When the section was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API url for the section.
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
 * Type of BIDSKETCH's BIDSKETCH_POST_WEBHOOK tool input.
 */
type BIDSKETCH_POST_WEBHOOK_INPUT = {
  /**
   * Endpoint
   * @description Publicly accessible URL to receive webhook POST callbacks. Endpoint must respond with HTTP 200 OK or Bidsketch will retry delivery up to 20 times.
   */
  endpoint?: string;
  /**
   * Event
   * @description Type of event to subscribe to. Supported values: 'client_created', 'proposal_created', 'proposal_sent', 'proposal_viewed', 'proposal_accepted', 'proposal_declined', or 'proposal_accepted_or_declined'.
   * @enum {string}
   */
  event?: "client_created" | "proposal_created" | "proposal_sent" | "proposal_viewed" | "proposal_accepted" | "proposal_declined" | "proposal_accepted_or_declined";
};

/**
 * Type of BIDSKETCH's BIDSKETCH_POST_WEBHOOK tool output.
 */
type BIDSKETCH_POST_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Endpoint
       * @description Callback URL for the webhook.
       */
      endpoint: string;
      /**
       * Event
       * @description Subscribed event type.
       * @enum {string}
       */
      event: "client_created" | "proposal_created" | "proposal_sent" | "proposal_viewed" | "proposal_accepted" | "proposal_declined" | "proposal_accepted_or_declined";
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: number;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL of the created webhook resource.
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
 * Type of BIDSKETCH's BIDSKETCH_PUT_CLIENT tool input.
 */
type BIDSKETCH_PUT_CLIENT_INPUT = {
  /**
   * Address Field One
   * @description First line of the client's address.
   * @default null
   */
  address_field_one: string | null;
  /**
   * Address Field Two
   * @description Second line of the client's address.
   * @default null
   */
  address_field_two: string | null;
  /**
   * Alt Phone
   * @description Client's alternate phone number.
   * @default null
   */
  alt_phone: string | null;
  /**
   * City
   * @description City in the client's address.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country in the client's address.
   * @default null
   */
  country: string | null;
  /**
   * Email
   * @description Client's primary email address.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description Client's first name if they are a person.
   * @default null
   */
  first_name: string | null;
  /**
   * Id
   * @description The unique identifier of the client to update.
   */
  id?: number;
  /**
   * Last Name
   * @description Client's last name if they are a person.
   * @default null
   */
  last_name: string | null;
  /**
   * Name
   * @description Client's full name or company name.
   * @default null
   */
  name: string | null;
  /**
   * Notes
   * @description Notes about the client; quotes need not be escaped.
   * @default null
   */
  notes: string | null;
  /**
   * OtherContactRequest
   * @description Secondary contact information for client update.
   * @default null
   */
  other_contact: {
      /**
       * Email
       * @description Secondary contact's email address.
       */
      email: string;
      /**
       * First Name
       * @description Secondary contact's first name.
       */
      first_name: string;
      /**
       * Last Name
       * @description Secondary contact's last name.
       */
      last_name: string;
      /**
       * Phone
       * @description Secondary contact's phone number.
       * @default null
       */
      phone: string | null;
  } | null;
  /**
   * Phone
   * @description Client's primary phone number.
   * @default null
   */
  phone: string | null;
  /**
   * Postal Zip
   * @description Postal or ZIP code of the client's address.
   * @default null
   */
  postal_zip: string | null;
  /**
   * State
   * @description State in the client's address.
   * @default null
   */
  state: string | null;
  /**
   * Website
   * @description Client's website.
   * @default null
   */
  website: string | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_CLIENT tool output.
 */
type BIDSKETCH_PUT_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Field One
       * @description First line of the client's address.
       * @default null
       */
      address_field_one: string | null;
      /**
       * Address Field Two
       * @description Second line of the client's address.
       * @default null
       */
      address_field_two: string | null;
      /**
       * Alt Phone
       * @description Client's alternate phone number.
       * @default null
       */
      alt_phone: string | null;
      /**
       * App Url
       * @description Bidsketch app URL for the client.
       */
      app_url: string;
      /**
       * City
       * @description City of the client's address.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the client's address.
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description When the client was created.
       */
      created_at: string;
      /**
       * Email
       * @description Client's primary email address.
       */
      email: string;
      /**
       * First Name
       * @description Client's first name.
       */
      first_name: string;
      /**
       * Id
       * @description The client ID.
       */
      id: number;
      /**
       * Last Name
       * @description Client's last name.
       */
      last_name: string;
      /**
       * Name
       * @description Client's full name or company name.
       * @default null
       */
      name: string | null;
      /**
       * Notes
       * @description Notes about the client.
       * @default null
       */
      notes: string | null;
      /**
       * OtherContactResponse
       * @description Secondary contact information in client record.
       * @default null
       */
      other_contact: {
          /**
           * Email
           * @description Secondary contact's email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Secondary contact's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Secondary contact's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Phone
           * @description Secondary contact's phone number.
           * @default null
           */
          phone: string | null;
      } | null;
      /**
       * Phone
       * @description Client's primary phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Postal Zip
       * @description Postal or ZIP code of the client's address.
       * @default null
       */
      postal_zip: string | null;
      /**
       * State
       * @description State of the client's address.
       * @default null
       */
      state: string | null;
      /**
       * Updated At
       * @description When the client was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for the client.
       */
      url: string;
      /**
       * Website
       * @description Client's website URL.
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
 * Type of BIDSKETCH's BIDSKETCH_PUT_FEE tool input.
 */
type BIDSKETCH_PUT_FEE_INPUT = {
  /**
   * Amount
   * @description Fee amount. For fixed fees, this is total; for calculated fees, this is per-unit amount.
   * @default null
   */
  amount: number | null;
  /**
   * Category
   * @description A fee category to group fees together.
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description HTML-formatted description of the fee.
   * @default null
   */
  description: string | null;
  /**
   * Fee Id
   * @description Unique ID of the fee to update.
   */
  fee_id?: number;
  /**
   * Feetype
   * @description Type of fee. Must be one of 'fixed', 'hourly', 'monthly', 'yearly', or 'custom'.
   * @default null
   * @enum {string|null}
   */
  feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom" | null;
  /**
   * Name
   * @description Name of the fee.
   * @default null
   */
  name: string | null;
  /**
   * Quantity
   * @description Quantity used for calculated fees.
   * @default null
   */
  quantity: number | null;
  /**
   * Unit
   * @description Unit label for custom fees. Required only when feetype is 'custom'.
   * @default null
   */
  unit: string | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_FEE tool output.
 */
type BIDSKETCH_PUT_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Base amount per unit or total amount of the fee.
       */
      amount: number;
      /**
       * App Url
       * @description The Bidsketch app url for the fee.
       */
      app_url: string;
      /**
       * Category
       * @description Category label for grouping fees.
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description When the fee was created.
       */
      created_at: string;
      /**
       * Currency
       * @description ISO 4217 currency code for the fee.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description HTML-formatted description of the fee.
       * @default null
       */
      description: string | null;
      /**
       * Details
       * @description Formatted fee label (e.g., '$1,615 (19 hours @ $85/hour)').
       * @default null
       */
      details: string | null;
      /**
       * Feetype
       * @description Type of fee.
       * @enum {string}
       */
      feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
      /**
       * Id
       * @description The unique id for the fee.
       */
      id: number;
      /**
       * Name
       * @description The name of the fee.
       */
      name: string;
      /**
       * Quantity
       * @description Quantity used for calculated fees.
       * @default null
       */
      quantity: number | null;
      /**
       * Total
       * @description Total amount of the fee.
       */
      total: number;
      /**
       * Unit
       * @description Unit label for calculated or custom fees.
       * @default null
       */
      unit: string | null;
      /**
       * Updated At
       * @description When the fee was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API url for the fee.
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
 * Type of BIDSKETCH's BIDSKETCH_PUT_PROPOSAL tool input.
 */
type BIDSKETCH_PUT_PROPOSAL_INPUT = {
  /**
   * Client Id
   * @description ID of the client associated with the proposal
   * @default null
   */
  client_id: number | null;
  /**
   * Currency
   * @description ISO 4217 currency code for the proposal
   * @default null
   */
  currency: string | null;
  /**
   * Description
   * @description Summary or description of the proposal
   * @default null
   */
  description: string | null;
  /**
   * Discount
   * @description Discount rate as a decimal percentage
   * @default null
   */
  discount: number | null;
  /**
   * Id
   * @description The unique identifier of the proposal to update
   */
  id?: number;
  /**
   * Name
   * @description Name/title of the proposal
   * @default null
   */
  name: string | null;
  /**
   * Proposal Date
   * @description Date for the proposal (YYYY-MM-DD or datetime string)
   * @default null
   */
  proposal_date: string | null;
  /**
   * PutProposalSettings
   * @description Nested settings for a proposal.
   * @default null
   */
  settings: {
      /**
       * Approval Message
       * @description Message sent to client upon approval
       * @default null
       */
      approval_message: string | null;
      /**
       * Hide Grand Total
       * @description Whether to hide the grand total on the proposal
       * @default null
       */
      hide_grand_total: boolean | null;
      /**
       * Hide Monthly Total
       * @description Whether to hide the monthly subtotal on the proposal
       * @default null
       */
      hide_monthly_total: boolean | null;
      /**
       * Hide Project Total
       * @description Whether to hide the project total on the proposal
       * @default null
       */
      hide_project_total: boolean | null;
      /**
       * Hide Yearly Total
       * @description Whether to hide the yearly subtotal on the proposal
       * @default null
       */
      hide_yearly_total: boolean | null;
      /**
       * Include Optional Fees In Totals
       * @description Whether to include optional fees in totals
       * @default null
       */
      include_optional_fees_in_totals: boolean | null;
      /**
       * Optional Fees Note
       * @description Note displayed for optional fees
       * @default null
       */
      optional_fees_note: string | null;
      /**
       * Optional Fees Title
       * @description Title for optional fees section
       * @default null
       */
      optional_fees_title: string | null;
      /**
       * Proposal Fees Title
       * @description Title for mandatory fees section
       * @default null
       */
      proposal_fees_title: string | null;
  } | null;
  /**
   * Tax
   * @description Primary tax rate as a decimal percentage
   * @default null
   */
  tax: number | null;
  /**
   * Tax2
   * @description Secondary tax rate as a decimal percentage
   * @default null
   */
  tax2: number | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_PROPOSAL tool output.
 */
type BIDSKETCH_PUT_PROPOSAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description Bidsketch app URL for this proposal
       */
      app_url: string;
      /**
       * Client
       * @description Client associated with the proposal
       */
      client: {
          /**
           * App Url
           * @description Bidsketch app URL for the client
           */
          app_url: string;
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name or company
           */
          name: string;
          /**
           * Url
           * @description API URL for the client
           */
          url: string;
      };
      /**
       * Content
       * @description Content summary of the proposal
       */
      content: {
          /**
           * Closing Sections
           * @description Closing sections info
           */
          closing_sections: {
              /**
               * Count
               * @description Number of items in this group
               */
              count: number;
              /**
               * Url
               * @description API URL for this content group
               */
              url: string;
          };
          /**
           * Count
           * @description Total count of content items
           */
          count: number;
          /**
           * Fees
           * @description Fees info
           */
          fees: {
              /**
               * Count
               * @description Number of items in this group
               */
              count: number;
              /**
               * Url
               * @description API URL for this content group
               */
              url: string;
          };
          /**
           * Opening Sections
           * @description Opening sections info
           */
          opening_sections: {
              /**
               * Count
               * @description Number of items in this group
               */
              count: number;
              /**
               * Url
               * @description API URL for this content group
               */
              url: string;
          };
          /**
           * Url
           * @description API URL for content details
           */
          url: string;
      };
      /**
       * Created At
       * @description Creation timestamp of the proposal
       */
      created_at: string;
      /**
       * Currency
       * @description ISO 4217 currency code for the proposal
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Summary or description of the proposal
       */
      description: string;
      /**
       * Discount
       * @description Calculated discount amount
       * @default null
       */
      discount: number | null;
      /**
       * Id
       * @description Proposal ID
       */
      id: number;
      /**
       * Is Draft
       * @description Whether the proposal is a draft
       */
      is_draft: boolean;
      /**
       * Monthly Fees
       * @description Calculated monthly fees subtotal
       * @default null
       */
      monthly_fees: number | null;
      /**
       * Name
       * @description Name/title of the proposal
       */
      name: string;
      /**
       * One Time Fees
       * @description Calculated one-time fees subtotal
       * @default null
       */
      one_time_fees: number | null;
      /**
       * Proposal Date
       * @description Set date of the proposal
       * @default null
       */
      proposal_date: string | null;
      /**
       * Settings
       * @description Settings applied to the proposal
       */
      settings: {
          /**
           * Approval Message
           * @description Message sent to client upon approval
           * @default null
           */
          approval_message: string | null;
          /**
           * Hide Grand Total
           * @description Whether to hide the grand total on the proposal
           * @default null
           */
          hide_grand_total: boolean | null;
          /**
           * Hide Monthly Total
           * @description Whether to hide the monthly subtotal on the proposal
           * @default null
           */
          hide_monthly_total: boolean | null;
          /**
           * Hide Project Total
           * @description Whether to hide the project total on the proposal
           * @default null
           */
          hide_project_total: boolean | null;
          /**
           * Hide Yearly Total
           * @description Whether to hide the yearly subtotal on the proposal
           * @default null
           */
          hide_yearly_total: boolean | null;
          /**
           * Include Optional Fees In Totals
           * @description Whether to include optional fees in totals
           * @default null
           */
          include_optional_fees_in_totals: boolean | null;
          /**
           * Optional Fees Note
           * @description Note displayed for optional fees
           * @default null
           */
          optional_fees_note: string | null;
          /**
           * Optional Fees Title
           * @description Title for optional fees section
           * @default null
           */
          optional_fees_title: string | null;
          /**
           * Proposal Fees Title
           * @description Title for mandatory fees section
           * @default null
           */
          proposal_fees_title: string | null;
      };
      /**
       * Status
       * @description Current status of the proposal (Pending, Viewed, Accepted, Declined)
       */
      status: string;
      /**
       * Tax
       * @description Calculated primary tax amount
       * @default null
       */
      tax: number | null;
      /**
       * Tax2
       * @description Calculated secondary tax amount
       * @default null
       */
      tax2: number | null;
      /**
       * Total
       * @description Calculated total amount of the proposal
       * @default null
       */
      total: number | null;
      /**
       * Updated At
       * @description Last update timestamp of the proposal
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal
       */
      url: string;
      /**
       * User
       * @description User who owns the proposal
       */
      user: string;
      /**
       * Yearly Fees
       * @description Calculated yearly fees subtotal
       * @default null
       */
      yearly_fees: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_PROPOSAL_FEE tool input.
 */
type BIDSKETCH_PUT_PROPOSAL_FEE_INPUT = {
  /**
   * Amount
   * @description Updated amount or per-unit amount for the fee
   * @default null
   */
  amount: number | null;
  /**
   * Description
   * @description Updated HTML description for the fee
   * @default null
   */
  description: string | null;
  /**
   * Fee Id
   * @description ID of the specific fee to update within the proposal
   */
  fee_id?: number;
  /**
   * Feetype
   * @description Type of fee; one of 'fixed', 'hourly', 'monthly', 'yearly', or 'custom'.
   * @default null
   * @enum {string|null}
   */
  feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom" | null;
  /**
   * Name
   * @description New name/title for the fee line item
   * @default null
   */
  name: string | null;
  /**
   * Optional
   * @description Whether the fee is optional; leave blank to keep existing value
   * @default null
   */
  optional: boolean | null;
  /**
   * Proposal Id
   * @description ID of the proposal containing the fee to update
   */
  proposal_id?: number;
  /**
   * Quantity
   * @description Updated quantity for calculated fees
   * @default null
   */
  quantity: number | null;
  /**
   * Unit
   * @description Unit label for custom fees; required when feetype is 'custom'
   * @default null
   */
  unit: string | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_PROPOSAL_FEE tool output.
 */
type BIDSKETCH_PUT_PROPOSAL_FEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the fee was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code (ISO 4217) of the proposal
       */
      currency: string;
      /**
       * Description
       * @description HTML description of the fee item
       */
      description: string;
      /**
       * Details
       * @description Formatted details or label for this fee item
       */
      details: string;
      /**
       * Feetype
       * @description Type of the fee
       * @enum {string}
       */
      feetype: "fixed" | "hourly" | "monthly" | "yearly" | "custom";
      /**
       * Id
       * @description Unique identifier of the fee
       */
      id: number;
      /**
       * Name
       * @description Name of the fee line item
       */
      name: string;
      /**
       * Optional
       * @description Whether the fee is optional
       */
      optional: boolean;
      /**
       * Quantity
       * @description Quantity for calculated fees, if applicable
       * @default null
       */
      quantity: number | null;
      /**
       * Total
       * @description Total amount for this fee item
       */
      total: number;
      /**
       * Unit
       * @description Unit label for calculated or custom fees, if applicable
       * @default null
       */
      unit: string | null;
      /**
       * Unit Amount
       * @description Unit price or per-unit amount for this fee item
       */
      unit_amount: number;
      /**
       * Updated At
       * @description Timestamp when the fee was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal fee
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
 * Type of BIDSKETCH's BIDSKETCH_PUT_PROPOSAL_SECTION tool input.
 */
type BIDSKETCH_PUT_PROPOSAL_SECTION_INPUT = {
  /**
   * Description
   * @description New HTML content for the section
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description New name/title for the section
   * @default null
   */
  name: string | null;
  /**
   * Proposal Id
   * @description ID of the proposal containing the section to update
   */
  proposal_id?: number;
  /**
   * Section Id
   * @description ID of the specific section to update
   */
  section_id?: number;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_PROPOSAL_SECTION tool output.
 */
type BIDSKETCH_PUT_PROPOSAL_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the section was created
       */
      created_at: string;
      /**
       * Description
       * @description HTML content of the section
       */
      description: string;
      /**
       * Id
       * @description The section's unique identifier
       */
      id: number;
      /**
       * Name
       * @description Name/title of the section
       */
      name: string;
      /**
       * Sectiontype
       * @description Section placement: 'opening' or 'closing'
       * @enum {string}
       */
      sectiontype: "opening" | "closing";
      /**
       * Updated At
       * @description Timestamp when the section was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this proposal section
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
 * Type of BIDSKETCH's BIDSKETCH_PUT_SECTION tool input.
 */
type BIDSKETCH_PUT_SECTION_INPUT = {
  /**
   * Category
   * @description A section category to group sections together.
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description HTML-formatted content of the section.
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description The unique identifier of the section to update.
   */
  id?: number;
  /**
   * Name
   * @description The name of the section.
   * @default null
   */
  name: string | null;
  /**
   * Sectiontype
   * @description Specifies where the section will appear in a proposal. Must be 'opening' or 'closing'.
   * @default null
   * @enum {string|null}
   */
  sectiontype: "opening" | "closing" | null;
};

/**
 * Type of BIDSKETCH's BIDSKETCH_PUT_SECTION tool output.
 */
type BIDSKETCH_PUT_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Url
       * @description The Bidsketch app url for the section.
       */
      app_url: string;
      /**
       * Category
       * @description A section category to group sections together.
       * @default null
       */
      category: string | null;
      /**
       * Created At
       * @description When the section was created.
       */
      created_at: string;
      /**
       * Description
       * @description HTML formatted content of the section.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique id for the section.
       */
      id: number;
      /**
       * Name
       * @description The name of the section.
       */
      name: string;
      /**
       * Sectiontype
       * @description Specifies where the section appears in a proposal.
       * @enum {string}
       */
      sectiontype: "opening" | "closing";
      /**
       * Updated At
       * @description When the section was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The API url for the section.
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
 * Type map of all available tool input types for toolkit "BIDSKETCH".
 */
export type BIDSKETCH_TOOL_INPUTS = {
  CREATE_CLIENT: BIDSKETCH_CREATE_CLIENT_INPUT
  DELETE_CLIENT: BIDSKETCH_DELETE_CLIENT_INPUT
  DELETE_FEE: BIDSKETCH_DELETE_FEE_INPUT
  DELETE_PROPOSAL: BIDSKETCH_DELETE_PROPOSAL_INPUT
  DELETE_PROPOSAL_FEE: BIDSKETCH_DELETE_PROPOSAL_FEE_INPUT
  DELETE_PROPOSAL_SECTION: BIDSKETCH_DELETE_PROPOSAL_SECTION_INPUT
  DELETE_SECTION: BIDSKETCH_DELETE_SECTION_INPUT
  DELETE_WEBHOOK: BIDSKETCH_DELETE_WEBHOOK_INPUT
  GET_CLIENT: BIDSKETCH_GET_CLIENT_INPUT
  GET_CLIENTS: BIDSKETCH_GET_CLIENTS_INPUT
  GET_CLIENT_PROPOSALS: BIDSKETCH_GET_CLIENT_PROPOSALS_INPUT
  GET_FEE: BIDSKETCH_GET_FEE_INPUT
  GET_FEES: BIDSKETCH_GET_FEES_INPUT
  GET_PROPOSAL: BIDSKETCH_GET_PROPOSAL_INPUT
  GET_PROPOSALS: BIDSKETCH_GET_PROPOSALS_INPUT
  GET_PROPOSAL_CONTENT: BIDSKETCH_GET_PROPOSAL_CONTENT_INPUT
  GET_PROPOSAL_FEE: BIDSKETCH_GET_PROPOSAL_FEE_INPUT
  GET_PROPOSAL_FEES: BIDSKETCH_GET_PROPOSAL_FEES_INPUT
  GET_PROPOSAL_SECTION: BIDSKETCH_GET_PROPOSAL_SECTION_INPUT
  GET_PROPOSAL_SECTIONS: BIDSKETCH_GET_PROPOSAL_SECTIONS_INPUT
  GET_PROPOSAL_STATS: BIDSKETCH_GET_PROPOSAL_STATS_INPUT
  GET_SECTION: BIDSKETCH_GET_SECTION_INPUT
  GET_SECTIONS: BIDSKETCH_GET_SECTIONS_INPUT
  GET_TEMPLATES: BIDSKETCH_GET_TEMPLATES_INPUT
  POST_FEE: BIDSKETCH_POST_FEE_INPUT
  POST_PROPOSAL_FEE: BIDSKETCH_POST_PROPOSAL_FEE_INPUT
  POST_PROPOSAL_SECTION: BIDSKETCH_POST_PROPOSAL_SECTION_INPUT
  POST_SECTION: BIDSKETCH_POST_SECTION_INPUT
  POST_WEBHOOK: BIDSKETCH_POST_WEBHOOK_INPUT
  PUT_CLIENT: BIDSKETCH_PUT_CLIENT_INPUT
  PUT_FEE: BIDSKETCH_PUT_FEE_INPUT
  PUT_PROPOSAL: BIDSKETCH_PUT_PROPOSAL_INPUT
  PUT_PROPOSAL_FEE: BIDSKETCH_PUT_PROPOSAL_FEE_INPUT
  PUT_PROPOSAL_SECTION: BIDSKETCH_PUT_PROPOSAL_SECTION_INPUT
  PUT_SECTION: BIDSKETCH_PUT_SECTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BIDSKETCH".
 */
export type BIDSKETCH_TOOL_OUTPUTS = {
  CREATE_CLIENT: BIDSKETCH_CREATE_CLIENT_OUTPUT
  DELETE_CLIENT: BIDSKETCH_DELETE_CLIENT_OUTPUT
  DELETE_FEE: BIDSKETCH_DELETE_FEE_OUTPUT
  DELETE_PROPOSAL: BIDSKETCH_DELETE_PROPOSAL_OUTPUT
  DELETE_PROPOSAL_FEE: BIDSKETCH_DELETE_PROPOSAL_FEE_OUTPUT
  DELETE_PROPOSAL_SECTION: BIDSKETCH_DELETE_PROPOSAL_SECTION_OUTPUT
  DELETE_SECTION: BIDSKETCH_DELETE_SECTION_OUTPUT
  DELETE_WEBHOOK: BIDSKETCH_DELETE_WEBHOOK_OUTPUT
  GET_CLIENT: BIDSKETCH_GET_CLIENT_OUTPUT
  GET_CLIENTS: BIDSKETCH_GET_CLIENTS_OUTPUT
  GET_CLIENT_PROPOSALS: BIDSKETCH_GET_CLIENT_PROPOSALS_OUTPUT
  GET_FEE: BIDSKETCH_GET_FEE_OUTPUT
  GET_FEES: BIDSKETCH_GET_FEES_OUTPUT
  GET_PROPOSAL: BIDSKETCH_GET_PROPOSAL_OUTPUT
  GET_PROPOSALS: BIDSKETCH_GET_PROPOSALS_OUTPUT
  GET_PROPOSAL_CONTENT: BIDSKETCH_GET_PROPOSAL_CONTENT_OUTPUT
  GET_PROPOSAL_FEE: BIDSKETCH_GET_PROPOSAL_FEE_OUTPUT
  GET_PROPOSAL_FEES: BIDSKETCH_GET_PROPOSAL_FEES_OUTPUT
  GET_PROPOSAL_SECTION: BIDSKETCH_GET_PROPOSAL_SECTION_OUTPUT
  GET_PROPOSAL_SECTIONS: BIDSKETCH_GET_PROPOSAL_SECTIONS_OUTPUT
  GET_PROPOSAL_STATS: BIDSKETCH_GET_PROPOSAL_STATS_OUTPUT
  GET_SECTION: BIDSKETCH_GET_SECTION_OUTPUT
  GET_SECTIONS: BIDSKETCH_GET_SECTIONS_OUTPUT
  GET_TEMPLATES: BIDSKETCH_GET_TEMPLATES_OUTPUT
  POST_FEE: BIDSKETCH_POST_FEE_OUTPUT
  POST_PROPOSAL_FEE: BIDSKETCH_POST_PROPOSAL_FEE_OUTPUT
  POST_PROPOSAL_SECTION: BIDSKETCH_POST_PROPOSAL_SECTION_OUTPUT
  POST_SECTION: BIDSKETCH_POST_SECTION_OUTPUT
  POST_WEBHOOK: BIDSKETCH_POST_WEBHOOK_OUTPUT
  PUT_CLIENT: BIDSKETCH_PUT_CLIENT_OUTPUT
  PUT_FEE: BIDSKETCH_PUT_FEE_OUTPUT
  PUT_PROPOSAL: BIDSKETCH_PUT_PROPOSAL_OUTPUT
  PUT_PROPOSAL_FEE: BIDSKETCH_PUT_PROPOSAL_FEE_OUTPUT
  PUT_PROPOSAL_SECTION: BIDSKETCH_PUT_PROPOSAL_SECTION_OUTPUT
  PUT_SECTION: BIDSKETCH_PUT_SECTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BIDSKETCH toolkit.
 */
export const BIDSKETCH = {
  slug: "bidsketch",
  tools: {
    /**
     * Tool to create a client. use when adding a new client record to bidsketch.
     */
    CREATE_CLIENT: "BIDSKETCH_CREATE_CLIENT",
    /**
     * Tool to delete a client and all their proposals. use when you want to permanently remove a client and its associated proposals from your account.
     */
    DELETE_CLIENT: "BIDSKETCH_DELETE_CLIENT",
    /**
     * Tool to delete a fee. use when a saved fee is no longer needed. use after confirming this fee isn't referenced in any live proposals.
     */
    DELETE_FEE: "BIDSKETCH_DELETE_FEE",
    /**
     * Tool to delete a proposal and all its content. use after confirming the proposal id to prevent accidental deletions.
     */
    DELETE_PROPOSAL: "BIDSKETCH_DELETE_PROPOSAL",
    /**
     * Tool to delete a proposal fee. use when you need to remove an existing fee before finalizing or sending a proposal.
     */
    DELETE_PROPOSAL_FEE: "BIDSKETCH_DELETE_PROPOSAL_FEE",
    /**
     * Tool to delete a proposal section. use when you need to remove a section from a proposal after verifying its id.
     */
    DELETE_PROPOSAL_SECTION: "BIDSKETCH_DELETE_PROPOSAL_SECTION",
    /**
     * Tool to delete a section. use when you need to permanently remove a saved section after confirming its id.
     */
    DELETE_SECTION: "BIDSKETCH_DELETE_SECTION",
    /**
     * Tool to delete a webhook. use after obtaining the webhook id to remove it.
     */
    DELETE_WEBHOOK: "BIDSKETCH_DELETE_WEBHOOK",
    /**
     * Tool to get a client by id. use when you need detailed client info after obtaining its id.
     */
    GET_CLIENT: "BIDSKETCH_GET_CLIENT",
    /**
     * Tool to retrieve all clients. use when you need to list all clients on the account.
     */
    GET_CLIENTS: "BIDSKETCH_GET_CLIENTS",
    /**
     * Tool to list proposals for a specific client. use after confirming the client id exists.
     */
    GET_CLIENT_PROPOSALS: "BIDSKETCH_GET_CLIENT_PROPOSALS",
    /**
     * Tool to get a single fee. use when you need detailed information about a fee by its id after confirming its existence.
     */
    GET_FEE: "BIDSKETCH_GET_FEE",
    /**
     * Tool to list all the fees for the account. use when you need to fetch every saved fee.
     */
    GET_FEES: "BIDSKETCH_GET_FEES",
    /**
     * Tool to get a proposal by id. use when you need detailed information for a specific proposal after obtaining its id.
     */
    GET_PROPOSAL: "BIDSKETCH_GET_PROPOSAL",
    /**
     * Tool to retrieve all proposals for the account. use when you need an overview of existing proposals.
     */
    GET_PROPOSALS: "BIDSKETCH_GET_PROPOSALS",
    /**
     * Tool to get a proposal with all its content (sections and fees). use when you need a full proposal in one call.
     */
    GET_PROPOSAL_CONTENT: "BIDSKETCH_GET_PROPOSAL_CONTENT",
    /**
     * Tool to get a single fee item for a proposal. use when you need detailed information about a specific fee before updating or displaying it.
     */
    GET_PROPOSAL_FEE: "BIDSKETCH_GET_PROPOSAL_FEE",
    /**
     * Tool to list all fees for a proposal. use after confirming the proposal id exists; supports pagination.
     */
    GET_PROPOSAL_FEES: "BIDSKETCH_GET_PROPOSAL_FEES",
    /**
     * Tool to fetch a single proposal section. use when you need detailed information for a section after listing proposal sections.
     */
    GET_PROPOSAL_SECTION: "BIDSKETCH_GET_PROPOSAL_SECTION",
    /**
     * Tool to get all sections for a proposal. use when you need to list opening or closing sections by proposal id.
     */
    GET_PROPOSAL_SECTIONS: "BIDSKETCH_GET_PROPOSAL_SECTIONS",
    /**
     * Tool to get proposal statistics. use when you need the total count of proposals for the account.
     */
    GET_PROPOSAL_STATS: "BIDSKETCH_GET_PROPOSAL_STATS",
    /**
     * Tool to fetch a section by id. use when you need detailed section information after confirming its id.
     */
    GET_SECTION: "BIDSKETCH_GET_SECTION",
    /**
     * Tool to list all sections. use when you need to retrieve saved sections for your account.
     */
    GET_SECTIONS: "BIDSKETCH_GET_SECTIONS",
    /**
     * Tool to list all proposal templates saved for the account. use when you need to fetch available templates before creating a new proposal.
     */
    GET_TEMPLATES: "BIDSKETCH_GET_TEMPLATES",
    /**
     * Tool to create a fee. use when you need to add a reusable fee to the account before adding it to a proposal. ensure required fields are set (e.g., unit for custom fees).
     */
    POST_FEE: "BIDSKETCH_POST_FEE",
    /**
     * Tool to create a proposal fee. use after confirming the proposal exists to add a cost line item; require unit when feetype is custom.
     */
    POST_PROPOSAL_FEE: "BIDSKETCH_POST_PROPOSAL_FEE",
    /**
     * Tool to create a proposal section. use after confirming a proposal exists to add a new opening or closing section.
     */
    POST_PROPOSAL_SECTION: "BIDSKETCH_POST_PROPOSAL_SECTION",
    /**
     * Tool to create a section. use when you need to add a new section to your account before including it in proposals.
     */
    POST_SECTION: "BIDSKETCH_POST_SECTION",
    /**
     * Tool to create a webhook. use when your endpoint is ready to receive event notifications and must return http 200 ok.
     */
    POST_WEBHOOK: "BIDSKETCH_POST_WEBHOOK",
    /**
     * Tool to update a client. use when you need to modify existing client records with new data.
     */
    PUT_CLIENT: "BIDSKETCH_PUT_CLIENT",
    /**
     * Tool to update a fee. use when you need to modify existing fee records with new data after verifying current values.
     */
    PUT_FEE: "BIDSKETCH_PUT_FEE",
    /**
     * Tool to update a specific proposal's details. use after retrieving a proposal to apply changes.
     */
    PUT_PROPOSAL: "BIDSKETCH_PUT_PROPOSAL",
    /**
     * Tool to update a proposal fee. use when modifying specific properties of an existing fee within a proposal after verifying its existence.
     */
    PUT_PROPOSAL_FEE: "BIDSKETCH_PUT_PROPOSAL_FEE",
    /**
     * Tool to update a proposal section. use when you need to modify the name or content of an existing section after verifying its existence.
     */
    PUT_PROPOSAL_SECTION: "BIDSKETCH_PUT_PROPOSAL_SECTION",
    /**
     * Tool to update a section. use when you need to modify an existing section after confirming its id.
     */
    PUT_SECTION: "BIDSKETCH_PUT_SECTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BIDSKETCH".
 */
export type BIDSKETCH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BIDSKETCH".
 */
export type BIDSKETCH_TRIGGER_EVENTS = {}
