// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HARVEST's HARVEST_CREATE_CLIENT tool input.
 */
type HARVEST_CREATE_CLIENT_INPUT = {
  /**
   * Address
   * @description The client's physical address. May include new line characters.
   * @default null
   */
  address: string | null;
  /**
   * Currency
   * @description ISO currency code for the client. If omitted, the company's default currency is used.
   * @default null
   */
  currency: string | null;
  /**
   * Is Active
   * @description Whether the client is active, or archived. Defaults to true.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Name
   * @description A textual description of the client.
   */
  name?: string;
};

/**
 * Type of HARVEST's HARVEST_CREATE_CLIENT tool output.
 */
type HARVEST_CREATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The client's physical address.
       * @default null
       */
      address: string | null;
      /**
       * Created At
       * @description Date and time the client was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Currency
       * @description The currency code associated with this client.
       */
      currency: string;
      /**
       * Id
       * @description Unique ID for the client.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the client is active or archived.
       */
      is_active: boolean;
      /**
       * Name
       * @description A textual description of the client.
       */
      name: string;
      /**
       * Statement Key
       * @description Key to build the client's invoice dashboard URL.
       */
      statement_key: string;
      /**
       * Updated At
       * @description Date and time the client was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_CREATE_CLIENT_CONTACT tool input.
 */
type HARVEST_CREATE_CLIENT_CONTACT_INPUT = {
  /**
   * Client Id
   * @description ID of the client associated with this contact.
   */
  client_id?: number;
  /**
   * Email
   * Format: email
   * @description Contact's email address.
   */
  email?: unknown;
  /**
   * Fax
   * @description Contact's fax number.
   * @default null
   */
  fax: string | null;
  /**
   * First Name
   * @description First name of the contact.
   */
  first_name?: string;
  /**
   * Last Name
   * @description Last name of the contact.
   * @default null
   */
  last_name: string | null;
  /**
   * Phone Mobile
   * @description Contact's mobile phone number.
   * @default null
   */
  phone_mobile: string | null;
  /**
   * Phone Office
   * @description Contact's office phone number.
   * @default null
   */
  phone_office: string | null;
  /**
   * Title
   * @description Title of the contact (e.g., 'Director of Ops').
   * @default null
   */
  title: string | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_CLIENT_CONTACT tool output.
 */
type HARVEST_CREATE_CLIENT_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Id
       * @description ID of the associated client.
       */
      client_id: number;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the contact was created.
       */
      created_at: string;
      /**
       * Email
       * @description Contact's email address.
       * @default null
       */
      email: string | null;
      /**
       * Fax
       * @description Contact's fax number.
       * @default null
       */
      fax: string | null;
      /**
       * First Name
       * @description First name of the contact.
       */
      first_name: string;
      /**
       * Id
       * @description ID of the newly created contact.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Phone Mobile
       * @description Contact's mobile phone number.
       * @default null
       */
      phone_mobile: string | null;
      /**
       * Phone Office
       * @description Contact's office phone number.
       * @default null
       */
      phone_office: string | null;
      /**
       * Title
       * @description Title of the contact.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the contact was last updated.
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
 * Type of HARVEST's HARVEST_CREATE_ESTIMATE tool input.
 */
type HARVEST_CREATE_ESTIMATE_INPUT = {
  /**
   * Client Id
   * @description ID of the client this estimate belongs to.
   */
  client_id?: number;
  /**
   * Currency
   * @description Currency for the estimate; defaults to client's currency.
   * @default null
   */
  currency: string | null;
  /**
   * Discount
   * @description Discount percentage subtracted from subtotal, e.g., 15.0 for 15%.
   * @default null
   */
  discount: number | null;
  /**
   * Issue Date
   * @description Date the estimate was issued (YYYY-MM-DD); defaults to today.
   * @default null
   */
  issue_date: string | null;
  /**
   * Line Items
   * @description List of line items to include on the estimate.
   * @default null
   */
  line_items: {
      /**
       * Description
       * @description Text description of the line item.
       * @default null
       */
      description: string | null;
      /**
       * Kind
       * @description The name of an estimate item category.
       * @default null
       */
      kind: string | null;
      /**
       * Quantity
       * @description Unit quantity of the item (defaults to 1).
       * @default null
       */
      quantity: number | null;
      /**
       * Taxed
       * @description Whether the estimate's first tax percentage applies to this line item.
       * @default null
       */
      taxed: boolean | null;
      /**
       * Taxed2
       * @description Whether the estimate's second tax percentage applies to this line item.
       * @default null
       */
      taxed2: boolean | null;
      /**
       * Unit Price
       * @description Individual price per unit (defaults to 0.0).
       * @default null
       */
      unit_price: number | null;
  }[] | null;
  /**
   * Notes
   * @description Additional notes to include on the estimate.
   * @default null
   */
  notes: string | null;
  /**
   * Number
   * @description If not set, the estimate number will be auto-generated.
   * @default null
   */
  number: string | null;
  /**
   * Purchase Order
   * @description The purchase order number.
   * @default null
   */
  purchase_order: string | null;
  /**
   * Subject
   * @description Estimate subject.
   * @default null
   */
  subject: string | null;
  /**
   * Tax
   * @description First tax percentage applied to subtotal, e.g., 10.0 for 10%.
   * @default null
   */
  tax: number | null;
  /**
   * Tax2
   * @description Second tax percentage applied to subtotal, e.g., 5.0 for 5%.
   * @default null
   */
  tax2: number | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_ESTIMATE tool output.
 */
type HARVEST_CREATE_ESTIMATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accepted At
       * @description Datetime when estimate was accepted.
       * @default null
       */
      accepted_at: string | null;
      /** Amount */
      amount: number;
      /**
       * Client
       * @description Client associated with the estimate.
       */
      client: {
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Client Key
       * @description Unique key identifying the estimate.
       */
      client_key: string;
      /**
       * Created At
       * @description Datetime when estimate was created.
       */
      created_at: string;
      /**
       * Creator
       * @description User who created the estimate.
       */
      creator: {
          /**
           * Id
           * @description Unique ID for the user who created the estimate.
           */
          id: number;
          /**
           * Name
           * @description Name of the user who created the estimate.
           */
          name: string;
      };
      /**
       * Currency
       * @description Currency used by the estimate.
       */
      currency: string;
      /**
       * Declined At
       * @description Datetime when estimate was declined.
       * @default null
       */
      declined_at: string | null;
      /**
       * Discount
       * @description Discount percentage applied to estimate.
       * @default null
       */
      discount: number | null;
      /**
       * Discount Amount
       * @description Monetary amount from discount.
       * @default null
       */
      discount_amount: number | null;
      /**
       * Id
       * @description Unique ID for the estimate.
       */
      id: number;
      /**
       * Issue Date
       * @description Date the estimate was issued (YYYY-MM-DD).
       */
      issue_date: string;
      /**
       * Line Items
       * @description Line items associated with the estimate.
       */
      line_items: {
          /**
           * Amount
           * @description Line item subtotal (quantity * unit_price).
           */
          amount: number;
          /**
           * Description
           * @description Text description of the line item.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID for the line item.
           */
          id: number;
          /**
           * Kind
           * @description Estimate item category name.
           * @default null
           */
          kind: string | null;
          /**
           * Quantity
           * @description Unit quantity of the item.
           */
          quantity: number;
          /**
           * Taxed
           * @description Whether the estimate's first tax applies to this line item.
           */
          taxed: boolean;
          /**
           * Taxed2
           * @description Whether the estimate's second tax applies to this line item.
           */
          taxed2: boolean;
          /**
           * Unit Price
           * @description Individual price per unit.
           */
          unit_price: number;
      }[];
      /**
       * Notes
       * @description Notes included on the estimate.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Estimate number.
       */
      number: string;
      /**
       * Purchase Order
       * @description Purchase order number.
       * @default null
       */
      purchase_order: string | null;
      /**
       * Sent At
       * @description Datetime when estimate was sent.
       * @default null
       */
      sent_at: string | null;
      /**
       * State
       * @description Current state of the estimate.
       */
      state: string;
      /**
       * Tax
       * @description First tax percentage applied to estimate.
       * @default null
       */
      tax: number | null;
      /**
       * Tax2
       * @description Second tax percentage applied to estimate.
       * @default null
       */
      tax2: number | null;
      /**
       * Tax2 Amount
       * @description Monetary amount from second tax.
       * @default null
       */
      tax2_amount: number | null;
      /**
       * Tax Amount
       * @description Monetary amount from first tax.
       * @default null
       */
      tax_amount: number | null;
      /**
       * Updated At
       * @description Datetime when estimate was last updated.
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
 * Type of HARVEST's HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY tool input.
 */
type HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY_INPUT = {
  /**
   * Name
   * @description The name of the estimate item category.
   */
  name?: string;
};

/**
 * Type of HARVEST's HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY tool output.
 */
type HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the category was created in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID for the estimate item category.
       */
      id: number;
      /**
       * Name
       * @description The name of the estimate item category.
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the category was last updated in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_CREATE_ESTIMATE_MESSAGE tool input.
 */
type HARVEST_CREATE_ESTIMATE_MESSAGE_INPUT = {
  /**
   * Body
   * @description The message body.
   * @default null
   */
  body: string | null;
  /**
   * Estimate Id
   * @description ID of the estimate to add a message to.
   */
  estimate_id?: number;
  /**
   * Event Type
   * @description If provided, runs an event on the estimate. Options: accept, decline, re-open, or send.
   * @default null
   * @enum {string|null}
   */
  event_type: "accept" | "decline" | "re-open" | "send" | null;
  /**
   * Recipients
   * @description Array of recipient parameters. Required unless performing an event-only call.
   * @default null
   */
  recipients: {
      /**
       * Email
       * @description Email of the message recipient.
       */
      email: string;
      /**
       * Name
       * @description Name of the message recipient.
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Send Me A Copy
   * @description Whether to email a copy of the message to the current user. Defaults to false.
   * @default null
   */
  send_me_a_copy: boolean | null;
  /**
   * Subject
   * @description The message subject.
   * @default null
   */
  subject: string | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_ESTIMATE_MESSAGE tool output.
 */
type HARVEST_CREATE_ESTIMATE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description The message body.
       * @default null
       */
      body: string | null;
      /**
       * Created At
       * @description Date and time the message was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Event Type
       * @description Type of estimate event that occurred with the message.
       * @default null
       * @enum {string|null}
       */
      event_type: "accept" | "decline" | "re-open" | "send" | null;
      /**
       * Id
       * @description Unique ID for the message.
       */
      id: number;
      /**
       * Recipients
       * @description List of message recipients.
       */
      recipients: {
          /**
           * Email
           * @description Email of the message recipient.
           */
          email: string;
          /**
           * Name
           * @description Name of the message recipient.
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Send Me A Copy
       * @description Whether a copy was sent to the current user.
       */
      send_me_a_copy: boolean;
      /**
       * Sent By
       * @description Name of the user that created the message.
       */
      sent_by: string;
      /**
       * Sent By Email
       * @description Email of the user that created the message.
       */
      sent_by_email: string;
      /**
       * Sent From
       * @description Name of the user that the message was sent from.
       */
      sent_from: string;
      /**
       * Sent From Email
       * @description Email of the user that the message was sent from.
       */
      sent_from_email: string;
      /**
       * Updated At
       * @description Date and time the message was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_CREATE_EXPENSE tool input.
 */
type HARVEST_CREATE_EXPENSE_INPUT = {
  /**
   * Billable
   * @description Whether the expense is billable. Defaults to true.
   * @default null
   */
  billable: boolean | null;
  /**
   * Expense Category Id
   * @description ID of the expense category this expense is tracked against.
   */
  expense_category_id?: number;
  /**
   * Notes
   * @description Textual notes describing the expense.
   * @default null
   */
  notes: string | null;
  /**
   * Project Id
   * @description ID of the project associated with this expense.
   */
  project_id?: number;
  /**
   * Receipt
   * @description Receipt file to attach. Multipart/form-data upload not supported by this tool.
   * @default null
   */
  receipt: string | null;
  /**
   * Spent Date
   * Format: date
   * @description Date the expense occurred (YYYY-MM-DD).
   */
  spent_date?: string;
  /**
   * Total Cost
   * @description Total amount of the expense. Required if not using a unit-based category.
   * @default null
   */
  total_cost: number | null;
  /**
   * Units
   * @description Quantity of units to use for calculating total_cost. Required for unit-based categories.
   * @default null
   */
  units: number | null;
  /**
   * User Id
   * @description ID of the user associated with this expense. Defaults to the authenticated user.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_EXPENSE tool output.
 */
type HARVEST_CREATE_EXPENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approval Status
       * @description Approval status: unsubmitted, submitted, or approved
       */
      approval_status: string;
      /**
       * Billable
       * @description Whether the expense is billable
       */
      billable: boolean;
      /**
       * Client
       * @description Client associated with the expense
       */
      client: {
          /**
           * Currency
           * @description Client currency (ISO code)
           */
          currency: string;
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name
           */
          name: string;
      };
      /**
       * Created At
       * @description Timestamp when the expense was created (ISO 8601)
       */
      created_at: string;
      /**
       * Expense Category
       * @description Expense category details
       */
      expense_category: {
          /**
           * Id
           * @description Expense category ID
           */
          id: number;
          /**
           * Name
           * @description Expense category name
           */
          name: string;
          /**
           * Unit Name
           * @description Unit name for category, if unit-based
           * @default null
           */
          unit_name: string | null;
          /**
           * Unit Price
           * @description Unit price for category, if unit-based
           * @default null
           */
          unit_price: number | null;
      };
      /**
       * Id
       * @description Unique ID for the expense
       */
      id: number;
      /**
       * ExpenseInvoice
       * @description Invoice associated with the expense, if any
       * @default null
       */
      invoice: {
          /**
           * Id
           * @description Invoice ID
           */
          id: number;
          /**
           * Number
           * @description Invoice number
           */
          number: string;
      } | null;
      /**
       * Is Billed
       * @description Whether the expense has been billed
       */
      is_billed: boolean;
      /**
       * Is Closed
       * @description Deprecated: whether the expense is closed
       */
      is_closed: boolean;
      /**
       * Is Locked
       * @description Whether the expense is locked
       */
      is_locked: boolean;
      /**
       * Locked Reason
       * @description Reason the expense is locked, if any
       * @default null
       */
      locked_reason: string | null;
      /**
       * Notes
       * @description Textual notes describing the expense
       * @default null
       */
      notes: string | null;
      /**
       * Project
       * @description Project associated with the expense
       */
      project: {
          /**
           * Code
           * @description Project code
           * @default null
           */
          code: string | null;
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * ExpenseReceipt
       * @description Receipt file attached to the expense
       * @default null
       */
      receipt: {
          /**
           * Content Type
           * @description MIME type of the receipt file
           */
          content_type: string;
          /**
           * File Name
           * @description Filename of the receipt
           */
          file_name: string;
          /**
           * File Size
           * @description Size of the receipt file in bytes
           */
          file_size: number;
          /**
           * Url
           * @description URL of the receipt file
           */
          url: string;
      } | null;
      /**
       * Spent Date
       * @description Date the expense occurred (YYYY-MM-DD)
       */
      spent_date: string;
      /**
       * Total Cost
       * @description Total amount of the expense
       */
      total_cost: number;
      /**
       * Units
       * @description Quantity of units used for the expense
       */
      units: number;
      /**
       * Updated At
       * @description Timestamp when the expense was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * User
       * @description User associated with the expense
       */
      user: {
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
           */
          name: string;
      };
      /**
       * User Assignment
       * @description User assignment details
       */
      user_assignment: {
          /**
           * Budget
           * @description Budget for the assignment, if any
           * @default null
           */
          budget: number | null;
          /**
           * Created At
           * @description Assignment creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Hourly Rate
           * @description Hourly rate for this assignment
           */
          hourly_rate: number;
          /**
           * Id
           * @description User assignment ID
           */
          id: number;
          /**
           * Is Active
           * @description Whether the assignment is active
           */
          is_active: boolean;
          /**
           * Is Project Manager
           * @description Whether user is project manager
           */
          is_project_manager: boolean;
          /**
           * Updated At
           * @description Assignment update timestamp (ISO 8601)
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
 * Type of HARVEST's HARVEST_CREATE_INVOICE tool input.
 */
type HARVEST_CREATE_INVOICE_INPUT = {
  /**
   * Client Id
   * @description ID of the client to associate with the invoice.
   */
  client_id?: number;
  /**
   * Currency
   * @description Currency code (e.g., 'USD').
   * @default null
   */
  currency: string | null;
  /**
   * Discount
   * @description Percentage discount applied to the invoice (0-100).
   * @default null
   */
  discount: number | null;
  /**
   * Due Date
   * @description Date the invoice is due (YYYY-MM-DD).
   * @default null
   */
  due_date: string | null;
  /**
   * Issue Date
   * @description Date the invoice was issued (YYYY-MM-DD).
   * @default null
   */
  issue_date: string | null;
  /**
   * Line Items
   * @description Array of line item objects to include in the invoice.
   */
  line_items?: {
      /**
       * Description
       * @description Text description of the line item.
       */
      description: string;
      /**
       * Kind
       * @description The name of an invoice item category.
       */
      kind: string;
      /**
       * Quantity
       * @description The unit quantity of the item.
       */
      quantity: number | null;
      /**
       * Taxed
       * @description Whether the invoice's `tax` percentage applies to this line item.
       * @default null
       */
      taxed: boolean | null;
      /**
       * Taxed2
       * @description Whether the invoice's `tax2` percentage applies to this line item.
       * @default null
       */
      taxed2: boolean | null;
      /**
       * Unit Price
       * @description The individual price per unit.
       */
      unit_price: number | null;
  }[];
  /**
   * Notes
   * @description Additional notes on the invoice.
   * @default null
   */
  notes: string | null;
  /**
   * Number
   * @description Custom invoice number (e.g., 'INV-1001').
   * @default null
   */
  number: string | null;
  /**
   * Purchase Order
   * @description Purchase order number.
   * @default null
   */
  purchase_order: string | null;
  /**
   * State
   * @description State of the invoice. Options: 'draft', 'open', 'paid', 'closed'.
   * @default null
   * @enum {string|null}
   */
  state: "draft" | "open" | "paid" | "closed" | null;
  /**
   * Subject
   * @description Subject of the invoice.
   * @default null
   */
  subject: string | null;
  /**
   * Tax
   * @description First tax rate applied to the invoice (0-100).
   * @default null
   */
  tax: number | null;
  /**
   * Tax2
   * @description Second tax rate applied to the invoice (0-100).
   * @default null
   */
  tax2: number | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_INVOICE tool output.
 */
type HARVEST_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Total amount of the invoice.
       */
      amount: number | null;
      /**
       * Client
       * @description Client info associated with the invoice.
       */
      client: {
          /**
           * Id
           * @description ID of the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Closed At
       * @description Date and time the invoice was closed (ISO 8601).
       * @default null
       */
      closed_at: string | null;
      /**
       * Created At
       * @description Date and time the invoice was created (ISO 8601).
       */
      created_at: string;
      /**
       * Creator
       * @description Creator of the invoice.
       */
      creator: {
          /**
           * Id
           * @description ID of the creator.
           */
          id: number;
          /**
           * Name
           * @description Name of the creator.
           */
          name: string;
      };
      /**
       * Currency
       * @description Currency code associated with the invoice.
       */
      currency: string;
      /**
       * Discount
       * @description Discount percentage applied.
       * @default null
       */
      discount: number | null;
      /**
       * Discount Amount
       * @description Amount from discount.
       */
      discount_amount: number | null;
      /**
       * Due Amount
       * @description Amount due on the invoice.
       */
      due_amount: number | null;
      /**
       * Due Date
       * @description Date the invoice is due (YYYY-MM-DD).
       */
      due_date: string;
      /**
       * EstimateInfo
       * @description associated estimate ID, if any.
       * @default null
       */
      estimate: {
          /**
           * Id
           * @description ID of the associated estimate.
           */
          id: number;
      } | null;
      /**
       * Id
       * @description ID of the invoice.
       */
      id: number;
      /**
       * Issue Date
       * @description Date the invoice was issued (YYYY-MM-DD).
       */
      issue_date: string;
      /**
       * Line Items
       * @description Line items on the invoice.
       */
      line_items: {
          /**
           * Amount
           * @description Line item subtotal (quantity * unit_price).
           */
          amount: number | null;
          /**
           * Description
           * @description Text description of the line item.
           */
          description: string;
          /**
           * Id
           * @description ID of the line item.
           */
          id: number;
          /**
           * ProjectInfo
           * @description Associated project info.
           * @default null
           */
          project: {
              /**
               * Code
               * @description Code of the project.
               * @default null
               */
              code: string | null;
              /**
               * Id
               * @description ID of the project.
               */
              id: number;
              /**
               * Name
               * @description Name of the project.
               */
              name: string;
          } | null;
          /**
           * Quantity
           * @description Unit quantity of the item.
           */
          quantity: number | null;
          /**
           * Taxed
           * @description Whether first tax applies to this line item.
           */
          taxed: boolean;
          /**
           * Taxed2
           * @description Whether second tax applies to this line item.
           */
          taxed2: boolean;
          /**
           * Unit Price
           * @description Unit price of the item.
           */
          unit_price: number | null;
      }[];
      /**
       * Notes
       * @description Notes on the invoice.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Invoice number.
       */
      number: string;
      /**
       * Paid At
       * @description Date and time the invoice was paid (ISO 8601).
       * @default null
       */
      paid_at: string | null;
      /**
       * Paid Date
       * @description Date the invoice was paid (YYYY-MM-DD).
       * @default null
       */
      paid_date: string | null;
      /**
       * Payment Options
       * @description Available payment options.
       */
      payment_options: {
          /**
           * Fee
           * @description Fee amount for this option.
           */
          fee: number | null;
          /**
           * Fee Type
           * @description Type of fee: percent or fixed.
           * @enum {string}
           */
          fee_type: "percent" | "fixed";
          /**
           * Payment Gateway
           * @description Payment gateway info.
           */
          payment_gateway: {
              /**
               * Id
               * @description ID of the payment gateway.
               */
              id: number;
              /**
               * Name
               * @description Name of the payment gateway.
               */
              name: string;
          };
      }[];
      /**
       * Payment Term
       * @description Payment terms for the invoice.
       * @default null
       */
      payment_term: string | null;
      /**
       * Period End
       * @description End date of the period (YYYY-MM-DD).
       * @default null
       */
      period_end: string | null;
      /**
       * Period Start
       * @description Start date of the period (YYYY-MM-DD).
       * @default null
       */
      period_start: string | null;
      /**
       * Purchase Order
       * @description Purchase order number.
       * @default null
       */
      purchase_order: string | null;
      /**
       * Recurring Invoice Id
       * @description ID of the recurring invoice.
       * @default null
       */
      recurring_invoice_id: number | null;
      /**
       * RetainerInfo
       * @description associated retainer ID, if any.
       * @default null
       */
      retainer: {
          /**
           * Id
           * @description ID of the associated retainer.
           */
          id: number;
      } | null;
      /**
       * Sent At
       * @description Date and time the invoice was sent (ISO 8601).
       * @default null
       */
      sent_at: string | null;
      /**
       * State
       * @description State of the invoice.
       * @enum {string}
       */
      state: "draft" | "open" | "paid" | "closed";
      /**
       * Subject
       * @description Subject of the invoice.
       * @default null
       */
      subject: string | null;
      /**
       * Tax
       * @description First tax rate applied.
       * @default null
       */
      tax: number | null;
      /**
       * Tax2
       * @description Second tax rate applied.
       * @default null
       */
      tax2: number | null;
      /**
       * Tax2 Amount
       * @description Amount from the second tax.
       */
      tax2_amount: number | null;
      /**
       * Tax Amount
       * @description Amount from the first tax.
       */
      tax_amount: number | null;
      /**
       * Updated At
       * @description Date and time the invoice was last updated (ISO 8601).
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
 * Type of HARVEST's HARVEST_CREATE_INVOICE_ITEM_CATEGORY tool input.
 */
type HARVEST_CREATE_INVOICE_ITEM_CATEGORY_INPUT = {
  /**
   * Name
   * @description The name of the invoice item category.
   */
  name?: string;
};

/**
 * Type of HARVEST's HARVEST_CREATE_INVOICE_ITEM_CATEGORY tool output.
 */
type HARVEST_CREATE_INVOICE_ITEM_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Date and time the category was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID for the invoice item category.
       */
      id: number;
      /**
       * Name
       * @description Name of the invoice item category.
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the category was last updated, in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Use As Expense
       * @description Whether this category is used for expenses.
       */
      use_as_expense: boolean;
      /**
       * Use As Service
       * @description Whether this category is used for billable hours.
       */
      use_as_service: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_CREATE_INVOICE_MESSAGE tool input.
 */
type HARVEST_CREATE_INVOICE_MESSAGE_INPUT = {
  /**
   * Attach Pdf
   * @description If true, attach a PDF of the invoice to the message email
   * @default false
   */
  attach_pdf: boolean | null;
  /**
   * Body
   * @description The message body
   * @default null
   */
  body: string | null;
  /**
   * Event Type
   * @description Invoice event type: omit or 'send' to send the message; 'close','draft','re-open' for state changes without emailing
   * @default null
   * @enum {string|null}
   */
  event_type: "close" | "draft" | "re-open" | "send" | null;
  /**
   * Include Link To Client Invoice
   * @description Deprecated. Ignored if true; if false, clears payment options on the invoice.
   * @default null
   */
  include_link_to_client_invoice: boolean | null;
  /**
   * Invoice Id
   * @description ID of the invoice to message
   */
  invoice_id?: number;
  /**
   * Recipients
   * @description List of message recipients; at least one email is required
   * @default null
   */
  recipients: {
      /**
       * Email
       * @description Email of the message recipient
       */
      email: string;
      /**
       * Name
       * @description Name of the message recipient
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Send Me A Copy
   * @description If true, send a copy of the message email to the current user
   * @default false
   */
  send_me_a_copy: boolean | null;
  /**
   * Subject
   * @description The message subject
   * @default null
   */
  subject: string | null;
  /**
   * Thank You
   * @description If true, send a thank you message email
   * @default false
   */
  thank_you: boolean | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_INVOICE_MESSAGE tool output.
 */
type HARVEST_CREATE_INVOICE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attach Pdf
       * @description Indicates if a PDF was attached to the message
       */
      attach_pdf: boolean;
      /**
       * Body
       * @description The message body
       */
      body: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the message was created
       */
      created_at: string;
      /**
       * Event Type
       * @description The type of invoice event that occurred with the message
       * @default null
       */
      event_type: string | null;
      /**
       * Id
       * @description Unique ID for the message
       */
      id: number;
      /**
       * Include Link To Client Invoice
       * @description Indicates if a link to the client invoice was included
       */
      include_link_to_client_invoice: boolean;
      /**
       * Recipients
       * @description List of message recipients
       */
      recipients: {
          /**
           * Email
           * @description Email of the recipient
           */
          email: string;
          /**
           * Name
           * @description Name of the recipient
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Reminder
       * @description Indicates if this was a reminder message
       */
      reminder: boolean;
      /**
       * Send Me A Copy
       * @description Indicates if a copy of the message was sent to the current user
       */
      send_me_a_copy: boolean;
      /**
       * Send Reminder On
       * Format: date-time
       * @description Date and time when the reminder was sent
       * @default null
       */
      send_reminder_on: string | null;
      /**
       * Sent By
       * @description Name of the user that created the message
       */
      sent_by: string;
      /**
       * Sent By Email
       * @description Email of the user that created the message
       */
      sent_by_email: string;
      /**
       * Sent From
       * @description Name of the user that the message was sent from
       */
      sent_from: string;
      /**
       * Sent From Email
       * @description Email of the user that the message was sent from
       */
      sent_from_email: string;
      /**
       * Subject
       * @description The message subject
       */
      subject: string | null;
      /**
       * Thank You
       * @description Indicates if this was a thank you message
       */
      thank_you: boolean;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the message was last updated
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
 * Type of HARVEST's HARVEST_CREATE_INVOICE_PAYMENT tool input.
 */
type HARVEST_CREATE_INVOICE_PAYMENT_INPUT = {
  /**
   * Amount
   * @description The amount of the payment.
   */
  amount?: number | null;
  /**
   * Invoice Id
   * @description ID of the invoice to add a payment to.
   */
  invoice_id?: number;
  /**
   * Notes
   * @description Any notes to be associated with the payment.
   * @default null
   */
  notes: string | null;
  /**
   * Paid At
   * @description Date and time the payment was made (ISO 8601). Pass either paid_at or paid_date, but not both.
   * @default null
   */
  paid_at: string | null;
  /**
   * Paid Date
   * @description Date the payment was made (YYYY-MM-DD). Pass either paid_date or paid_at, but not both.
   * @default null
   */
  paid_date: string | null;
  /**
   * Send Thank You
   * @description Whether to send a thank you email (if enabled). Only sends if invoice fully paid. Defaults to true.
   * @default null
   */
  send_thank_you: boolean | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_INVOICE_PAYMENT tool output.
 */
type HARVEST_CREATE_INVOICE_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description The amount of the payment.
       */
      amount: number | null;
      /**
       * Created At
       * @description Date and time the payment was recorded.
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID for the payment.
       */
      id: number;
      /**
       * Notes
       * @description Any notes associated with the payment.
       * @default null
       */
      notes: string | null;
      /**
       * Paid At
       * @description Date and time the payment was made.
       * @default null
       */
      paid_at: string | null;
      /**
       * Paid Date
       * @description Date the payment was made.
       * @default null
       */
      paid_date: string | null;
      /**
       * Payment Gateway
       * @description The payment gateway id and name used to process the payment.
       */
      payment_gateway: {
          /**
           * Id
           * @description ID of the payment gateway used to process the payment.
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name of the payment gateway used to process the payment.
           * @default null
           */
          name: string | null;
      };
      /**
       * Recorded By
       * @description Name of the person who recorded the payment.
       */
      recorded_by: string;
      /**
       * Recorded By Email
       * @description Email of the person who recorded the payment.
       */
      recorded_by_email: string;
      /**
       * Transaction Id
       * @description Card authorization or PayPal transaction ID.
       * @default null
       */
      transaction_id: string | null;
      /**
       * Updated At
       * @description Date and time the payment was last updated.
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
 * Type of HARVEST's HARVEST_CREATE_PROJECT tool input.
 */
type HARVEST_CREATE_PROJECT_INPUT = {
  /**
   * Bill By
   * @description The method by which the project is invoiced.
   * @default null
   * @enum {string|null}
   */
  bill_by: "Project" | "Tasks" | "People" | "None" | null;
  /**
   * Budget
   * @description The monetary budget for the project.
   * @default null
   */
  budget: number | null;
  /**
   * Budget By
   * @description The method by which the project is budgeted.
   * @default null
   * @enum {string|null}
   */
  budget_by: "project" | "project_cost" | "task" | "person" | "none" | null;
  /**
   * Budget Is Monthly
   * @description Whether the budget resets every month.
   * @default null
   */
  budget_is_monthly: boolean | null;
  /**
   * Client Id
   * @description ID of the client to associate this project with.
   */
  client_id?: number;
  /**
   * Code
   * @description The project code.
   * @default null
   */
  code: string | null;
  /**
   * Cost Budget
   * @description The monetary cost budget for the project.
   * @default null
   */
  cost_budget: number | null;
  /**
   * Cost Budget Include Expenses
   * @description Whether expenses are included in the cost budget.
   * @default null
   */
  cost_budget_include_expenses: boolean | null;
  /**
   * Ends On
   * Format: date
   * @description Date the project ends (YYYY-MM-DD).
   * @default null
   */
  ends_on: string | null;
  /**
   * Fee
   * @description The fee for the project when billing by project.
   * @default null
   */
  fee: number | null;
  /**
   * Hourly Rate
   * @description The default hourly rate to use for this project when billing by project.
   * @default null
   */
  hourly_rate: number | null;
  /**
   * Is Active
   * @description Whether the project is active (true) or archived (false). Defaults to true.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Billable
   * @description Whether the project is billable. Defaults to true.
   * @default null
   */
  is_billable: boolean | null;
  /**
   * Is Fixed Fee
   * @description Whether the project is a fixed-fee project.
   * @default null
   */
  is_fixed_fee: boolean | null;
  /**
   * Name
   * @description Name of the project.
   */
  name?: string;
  /**
   * Notes
   * @description Any additional notes about the project.
   * @default null
   */
  notes: string | null;
  /**
   * Notify When Over Budget
   * @description Whether to send a notification when the project exceeds its budget.
   * @default null
   */
  notify_when_over_budget: boolean | null;
  /**
   * Over Budget Notification Percentage
   * @description Percentage at which the over budget notification is triggered.
   * @default null
   */
  over_budget_notification_percentage: number | null;
  /**
   * Show Budget To All
   * @description Whether the budget is visible to all project members.
   * @default null
   */
  show_budget_to_all: boolean | null;
  /**
   * Starts On
   * Format: date
   * @description Date the project starts (YYYY-MM-DD).
   * @default null
   */
  starts_on: string | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_PROJECT tool output.
 */
type HARVEST_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bill By
       * @description The method by which the project is invoiced.
       * @default null
       */
      bill_by: string | null;
      /**
       * Budget
       * @description The monetary budget for the project.
       * @default null
       */
      budget: number | null;
      /**
       * Budget By
       * @description The method by which the project is budgeted.
       * @default null
       */
      budget_by: string | null;
      /**
       * Budget Is Monthly
       * @description Whether the budget resets every month.
       */
      budget_is_monthly: boolean;
      /**
       * Client
       * @description An object containing the client's ID, name, and currency.
       */
      client: {
          /**
           * Currency
           * @description The client's currency (ISO code).
           */
          currency: string;
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description The client's name.
           */
          name: string;
      };
      /**
       * Code
       * @description The project code.
       * @default null
       */
      code: string | null;
      /**
       * Cost Budget
       * @description The monetary cost budget for the project.
       * @default null
       */
      cost_budget: number | null;
      /**
       * Cost Budget Include Expenses
       * @description Whether expenses are included in the cost budget.
       */
      cost_budget_include_expenses: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the project was created.
       */
      created_at: string;
      /**
       * Ends On
       * Format: date
       * @description Date the project ends.
       * @default null
       */
      ends_on: string | null;
      /**
       * Fee
       * @description The fee for the project when billing by project.
       * @default null
       */
      fee: number | null;
      /**
       * Hourly Rate
       * @description The default hourly rate to use for this project when billing by project.
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique ID for the project.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the project is active or archived.
       */
      is_active: boolean;
      /**
       * Is Billable
       * @description Whether the project is billable.
       */
      is_billable: boolean;
      /**
       * Is Fixed Fee
       * @description Whether the project is a fixed-fee project.
       */
      is_fixed_fee: boolean;
      /**
       * Name
       * @description The name of the project.
       */
      name: string;
      /**
       * Notes
       * @description Any additional notes about the project.
       * @default null
       */
      notes: string | null;
      /**
       * Notify When Over Budget
       * @description Whether notifications are sent when project is over budget.
       */
      notify_when_over_budget: boolean;
      /**
       * Over Budget Notification Date
       * Format: date-time
       * @description Date of the last over budget notification.
       * @default null
       */
      over_budget_notification_date: string | null;
      /**
       * Over Budget Notification Percentage
       * @description Percentage value at which the over budget notification is triggered.
       * @default null
       */
      over_budget_notification_percentage: number | null;
      /**
       * Show Budget To All
       * @description Whether the budget is visible to all project members.
       */
      show_budget_to_all: boolean;
      /**
       * Starts On
       * Format: date
       * @description Date the project starts.
       * @default null
       */
      starts_on: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the project was last updated.
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
 * Type of HARVEST's HARVEST_CREATE_TASK tool input.
 */
type HARVEST_CREATE_TASK_INPUT = {
  /**
   * Billable By Default
   * @description Determines if the task is billable by default when added to a project.
   * @default null
   */
  billable_by_default: boolean | null;
  /**
   * Default Hourly Rate
   * @description The default hourly rate for this task when added to a project.
   * @default null
   */
  default_hourly_rate: number | null;
  /**
   * Is Active
   * @description Specifies if the task is active (true) or archived (false).
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Default
   * @description Indicates if this task should be automatically added to future projects.
   * @default null
   */
  is_default: boolean | null;
  /**
   * Name
   * @description The name of the task to create.
   */
  name?: string;
};

/**
 * Type of HARVEST's HARVEST_CREATE_TASK tool output.
 */
type HARVEST_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable By Default
       * @description Indicates if the task is billable by default.
       */
      billable_by_default: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the task was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Default Hourly Rate
       * @description The default hourly rate for the task.
       * @default null
       */
      default_hourly_rate: number | null;
      /**
       * Id
       * @description Unique ID for the task.
       */
      id: number;
      /**
       * Is Active
       * @description Specifies if the task is active or archived.
       */
      is_active: boolean;
      /**
       * Is Default
       * @description Indicates if the task is automatically added to future projects.
       */
      is_default: boolean;
      /**
       * Name
       * @description The name of the task.
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the task was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_CREATE_TIME_ENTRY tool input.
 */
type HARVEST_CREATE_TIME_ENTRY_INPUT = {
  /**
   * Ended Time
   * @description Time the entry ended (e.g., '5:00pm'); if omitted, timer remains running
   * @default null
   */
  ended_time: string | null;
  /**
   * ExternalReference
   * @description Links this entry to an external system (task, project, etc.).
   * @default null
   */
  external_reference: {
      /**
       * Group Id
       * @description External service's equivalent project or board ID
       * @default null
       */
      group_id: string | null;
      /**
       * Id
       * @description External service's equivalent task or card ID
       * @default null
       */
      id: string | null;
      /**
       * Permalink
       * @description URL of the external time tracking reference
       * @default null
       */
      permalink: string | null;
  } | null;
  /**
   * Hours
   * @description Total hours to log; required when not using start/end times
   * @default null
   */
  hours: number | null;
  /**
   * Notes
   * @description Notes or description of the work performed
   * @default null
   */
  notes: string | null;
  /**
   * Project Id
   * @description ID of the project to associate with the time entry
   */
  project_id?: number;
  /**
   * Spent Date
   * @description Date the time entry was spent (YYYY-MM-DD)
   */
  spent_date?: string;
  /**
   * Started Time
   * @description Time the entry started (e.g., '9:00am'); omit ended_time for running timer
   * @default null
   */
  started_time: string | null;
  /**
   * Task Id
   * @description ID of the task to associate with the time entry
   */
  task_id?: number;
  /**
   * User Id
   * @description ID of the user; defaults to the authenticated user
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_TIME_ENTRY tool output.
 */
type HARVEST_CREATE_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the time entry is billable
       */
      billable: boolean;
      /**
       * Billable Rate
       * @description Billable rate for the time entry
       * @default null
       */
      billable_rate: number | null;
      /**
       * Budgeted
       * @description Whether the time entry is budgeted
       */
      budgeted: boolean;
      /**
       * Client
       * @description Client associated with the time entry
       */
      client: {
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name
           */
          name: string;
      };
      /**
       * Cost Rate
       * @description Cost rate for the time entry
       * @default null
       */
      cost_rate: number | null;
      /**
       * Created At
       * @description Timestamp when the time entry was created
       */
      created_at: string;
      /**
       * Ended Time
       * @description Time the entry ended
       * @default null
       */
      ended_time: string | null;
      /**
       * ExternalReference
       * @description Links this entry to an external system (task, project, etc.).
       * @default null
       */
      external_reference: {
          /**
           * Group Id
           * @description External service's equivalent project or board ID
           * @default null
           */
          group_id: string | null;
          /**
           * Id
           * @description External service's equivalent task or card ID
           * @default null
           */
          id: string | null;
          /**
           * Permalink
           * @description URL of the external time tracking reference
           * @default null
           */
          permalink: string | null;
      } | null;
      /**
       * Hours
       * @description Total hours tracked
       */
      hours: number | null;
      /**
       * Id
       * @description Unique ID for the time entry
       */
      id: number;
      /**
       * Is Billed
       * @description Whether the time entry is billed
       */
      is_billed: boolean;
      /**
       * Is Closed
       * @description Whether the time entry is closed
       */
      is_closed: boolean;
      /**
       * Is Locked
       * @description Whether the time entry is locked
       */
      is_locked: boolean;
      /**
       * Is Running
       * @description Whether the timer is currently running
       */
      is_running: boolean;
      /**
       * Locked Reason
       * @description Reason why the time entry is locked
       * @default null
       */
      locked_reason: string | null;
      /**
       * Notes
       * @description Notes on the time entry
       * @default null
       */
      notes: string | null;
      /**
       * Project
       * @description Project associated with the time entry
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * Rounded Hours
       * @description Rounded hours
       */
      rounded_hours: number | null;
      /**
       * Spent Date
       * @description Date the time entry was spent
       */
      spent_date: string;
      /**
       * Started Time
       * @description Time the entry started
       * @default null
       */
      started_time: string | null;
      /**
       * Task
       * @description Task associated with the time entry
       */
      task: {
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
      };
      /**
       * Timer Started At
       * @description Timestamp when the timer was started
       * @default null
       */
      timer_started_at: string | null;
      /**
       * Updated At
       * @description Timestamp when the time entry was last updated
       */
      updated_at: string;
      /**
       * User
       * @description User associated with the time entry
       */
      user: {
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
           */
          name: string;
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
 * Type of HARVEST's HARVEST_CREATE_USER tool input.
 */
type HARVEST_CREATE_USER_INPUT = {
  /**
   * Access Roles
   * @description Access role(s) that determine the user’s permissions in Harvest. Possible values: administrator, manager, member, and additional manager roles.
   * @default null
   */
  access_roles: string[] | null;
  /**
   * Cost Rate
   * @description The cost rate to use for this user when calculating project costs. Defaults to 0.0.
   * @default null
   */
  cost_rate: number | null;
  /**
   * Default Hourly Rate
   * @description The billable rate to use for this user when added to a project. Defaults to 0.0.
   * @default null
   */
  default_hourly_rate: number | null;
  /**
   * Email
   * @description The email address of the user.
   */
  email?: string;
  /**
   * First Name
   * @description The first name of the user.
   */
  first_name?: string;
  /**
   * Has Access To All Future Projects
   * @description Whether the user should be automatically added to future projects. Defaults to false.
   * @default null
   */
  has_access_to_all_future_projects: boolean | null;
  /**
   * Is Active
   * @description Whether the user is active or archived. Defaults to true.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Contractor
   * @description Whether the user is a contractor or an employee. Defaults to false.
   * @default null
   */
  is_contractor: boolean | null;
  /**
   * Last Name
   * @description The last name of the user.
   */
  last_name?: string;
  /**
   * Roles
   * @description Descriptive names of the business roles assigned to this person. Used for filtering reports, with no impact on permissions.
   * @default null
   */
  roles: string[] | null;
  /**
   * Timezone
   * @description The user’s timezone. Defaults to the company’s timezone. See supported time zones in the Harvest docs.
   * @default null
   */
  timezone: string | null;
  /**
   * Weekly Capacity
   * @description The number of hours per week this person is available to work in seconds. Defaults to 126000 (35 hours).
   * @default null
   */
  weekly_capacity: number | null;
};

/**
 * Type of HARVEST's HARVEST_CREATE_USER tool output.
 */
type HARVEST_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Roles
       * @description Access role(s) that determine the user’s permissions in Harvest.
       */
      access_roles: string[];
      /**
       * Avatar Url
       * @description The URL to the user’s avatar image.
       */
      avatar_url: string;
      /**
       * Cost Rate
       * @description The cost rate to use for this user when calculating project costs. Defaults to 0.0.
       * @default null
       */
      cost_rate: number | null;
      /**
       * Created At
       * @description Date and time the user was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Default Hourly Rate
       * @description The billable rate to use for this user when added to a project. Defaults to 0.0.
       * @default null
       */
      default_hourly_rate: number | null;
      /**
       * Email
       * @description The email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description The first name of the user.
       */
      first_name: string;
      /**
       * Has Access To All Future Projects
       * @description Whether the user should be automatically added to future projects.
       */
      has_access_to_all_future_projects: boolean;
      /**
       * Id
       * @description Unique ID for the user.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the user is active or archived.
       */
      is_active: boolean;
      /**
       * Is Contractor
       * @description Whether the user is a contractor or an employee.
       */
      is_contractor: boolean;
      /**
       * Last Name
       * @description The last name of the user.
       */
      last_name: string;
      /**
       * Roles
       * @description Descriptive names of the business roles assigned to this person.
       */
      roles: string[];
      /**
       * Telephone
       * @description The user’s telephone number.
       */
      telephone: string;
      /**
       * Timezone
       * @description The user’s timezone.
       */
      timezone: string;
      /**
       * Updated At
       * @description Date and time the user was last updated, in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Weekly Capacity
       * @description The number of hours per week this person is available to work in seconds.
       */
      weekly_capacity: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_DELETE_CLIENT tool input.
 */
type HARVEST_DELETE_CLIENT_INPUT = {
  /**
   * Client Id
   * @description The ID of the client to delete.
   */
  client_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_CLIENT tool output.
 */
type HARVEST_DELETE_CLIENT_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_CLIENT_CONTACT tool input.
 */
type HARVEST_DELETE_CLIENT_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact to delete.
   */
  contact_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_CLIENT_CONTACT tool output.
 */
type HARVEST_DELETE_CLIENT_CONTACT_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_ESTIMATE tool input.
 */
type HARVEST_DELETE_ESTIMATE_INPUT = {
  /**
   * Estimate Id
   * @description The ID of the estimate to delete.
   */
  estimate_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_ESTIMATE tool output.
 */
type HARVEST_DELETE_ESTIMATE_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_ESTIMATE_MESSAGE tool input.
 */
type HARVEST_DELETE_ESTIMATE_MESSAGE_INPUT = {
  /**
   * Estimate Id
   * @description The ID of the estimate.
   */
  estimate_id?: number;
  /**
   * Message Id
   * @description The ID of the message to delete from the estimate.
   */
  message_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_ESTIMATE_MESSAGE tool output.
 */
type HARVEST_DELETE_ESTIMATE_MESSAGE_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_INVOICE tool input.
 */
type HARVEST_DELETE_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description The ID of the invoice to delete.
   */
  invoice_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_INVOICE tool output.
 */
type HARVEST_DELETE_INVOICE_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_INVOICE_ITEM_CATEGORY tool input.
 */
type HARVEST_DELETE_INVOICE_ITEM_CATEGORY_INPUT = {
  /**
   * Invoice Item Category Id
   * @description The ID of the invoice item category to delete.
   */
  invoice_item_category_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_INVOICE_ITEM_CATEGORY tool output.
 */
type HARVEST_DELETE_INVOICE_ITEM_CATEGORY_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_INVOICE_MESSAGE tool input.
 */
type HARVEST_DELETE_INVOICE_MESSAGE_INPUT = {
  /**
   * Invoice Id
   * @description The ID of the invoice to delete a message from.
   */
  invoice_id?: number;
  /**
   * Message Id
   * @description The ID of the message to be deleted.
   */
  message_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_INVOICE_MESSAGE tool output.
 */
type HARVEST_DELETE_INVOICE_MESSAGE_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_INVOICE_PAYMENT tool input.
 */
type HARVEST_DELETE_INVOICE_PAYMENT_INPUT = {
  /**
   * Invoice Id
   * @description The ID of the invoice containing the payment to delete.
   */
  invoice_id?: number;
  /**
   * Payment Id
   * @description The ID of the invoice payment to delete.
   */
  payment_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_INVOICE_PAYMENT tool output.
 */
type HARVEST_DELETE_INVOICE_PAYMENT_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_PROJECT tool input.
 */
type HARVEST_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to delete.
   */
  project_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_PROJECT tool output.
 */
type HARVEST_DELETE_PROJECT_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_TASK tool input.
 */
type HARVEST_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task to delete.
   */
  task_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_TASK tool output.
 */
type HARVEST_DELETE_TASK_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_TIME_ENTRY tool input.
 */
type HARVEST_DELETE_TIME_ENTRY_INPUT = {
  /**
   * Time Entry Id
   * @description The ID of the time entry to delete.
   */
  time_entry_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_TIME_ENTRY tool output.
 */
type HARVEST_DELETE_TIME_ENTRY_OUTPUT = {
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
 * Type of HARVEST's HARVEST_DELETE_USER tool input.
 */
type HARVEST_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description The ID of the user to delete.
   */
  user_id?: number;
};

/**
 * Type of HARVEST's HARVEST_DELETE_USER tool output.
 */
type HARVEST_DELETE_USER_OUTPUT = {
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
 * Type of HARVEST's HARVEST_GET_CLIENT tool input.
 */
type HARVEST_GET_CLIENT_INPUT = {
  /**
   * Client Id
   * @description The ID of the client to retrieve.
   */
  client_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_CLIENT tool output.
 */
type HARVEST_GET_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The physical address of the client, if provided.
       * @default null
       */
      address: string | null;
      /**
       * Created At
       * @description Date and time when the client was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Currency
       * @description The currency code associated with this client.
       */
      currency: string;
      /**
       * Id
       * @description Unique identifier for the client.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the client is active.
       */
      is_active: boolean;
      /**
       * Name
       * @description The name of the client.
       */
      name: string;
      /**
       * Statement Key
       * @description Key used to build the client's statement URL.
       */
      statement_key: string;
      /**
       * Updated At
       * @description Date and time when the client was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_GET_CLIENT_CONTACT tool input.
 */
type HARVEST_GET_CLIENT_CONTACT_INPUT = {
  /**
   * Client Id
   * @description ID of the client the contact belongs to.
   */
  client_id?: number;
  /**
   * Contact Id
   * @description ID of the contact to retrieve.
   */
  contact_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_CLIENT_CONTACT tool output.
 */
type HARVEST_GET_CLIENT_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client
       * @description The client associated with the contact.
       */
      client: {
          /**
           * Id
           * @description Unique ID for the client associated with the contact.
           */
          id: number;
          /**
           * Name
           * @description Name of the client associated with the contact.
           */
          name: string;
      };
      /**
       * Created At
       * @description Date and time the contact was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact.
       */
      email: string;
      /**
       * Fax
       * @description Fax number of the contact.
       * @default null
       */
      fax: string | null;
      /**
       * First Name
       * @description First name of the contact.
       */
      first_name: string;
      /**
       * Id
       * @description Unique ID for the contact.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Phone Mobile
       * @description Mobile phone number of the contact.
       * @default null
       */
      phone_mobile: string | null;
      /**
       * Phone Office
       * @description Office phone number of the contact.
       * @default null
       */
      phone_office: string | null;
      /**
       * Title
       * @description Title of the contact.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Date and time the contact was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_GET_COMPANY_INFO tool input.
 */
type HARVEST_GET_COMPANY_INFO_INPUT = object;

/**
 * Type of HARVEST's HARVEST_GET_COMPANY_INFO tool output.
 */
type HARVEST_GET_COMPANY_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approval Feature
       * @description Whether the approval module is enabled.
       */
      approval_feature: boolean;
      /**
       * Base Uri
       * @description The Harvest URL for the company.
       */
      base_uri: string;
      /**
       * Clock
       * @description Whether the company uses a 12-hour or 24-hour clock.
       * @enum {string}
       */
      clock: "12h" | "24h";
      /**
       * Color Scheme
       * @description The color scheme being used in the Harvest web client.
       */
      color_scheme: string;
      /**
       * Currency Code Display
       * @description How to display the currency code when formatting currency.
       * @enum {string}
       */
      currency_code_display: "iso_code_none" | "iso_code_before" | "iso_code_after";
      /**
       * Currency Symbol Display
       * @description How to display the currency symbol when formatting currency.
       * @enum {string}
       */
      currency_symbol_display: "symbol_none" | "symbol_before" | "symbol_after";
      /**
       * Date Format
       * @description The format used to display date in Harvest.
       * @enum {string}
       */
      date_format: "%m/%d/%Y" | "%d/%m/%Y" | "%Y-%m-%d" | "%d.%m.%Y" | "%Y.%m.%d" | "%Y/%m/%d";
      /**
       * Decimal Symbol
       * @description Symbol used when formatting decimals.
       */
      decimal_symbol: string;
      /**
       * Estimate Feature
       * @description Whether the estimate module is enabled.
       */
      estimate_feature: boolean;
      /**
       * Expense Feature
       * @description Whether the expense module is enabled.
       */
      expense_feature: boolean;
      /**
       * Full Domain
       * @description The Harvest domain for the company.
       */
      full_domain: string;
      /**
       * Invoice Feature
       * @description Whether the invoice module is enabled.
       */
      invoice_feature: boolean;
      /**
       * Is Active
       * @description Whether the company is active (true) or archived (false).
       */
      is_active: boolean;
      /**
       * Name
       * @description The name of the company.
       */
      name: string;
      /**
       * Plan Type
       * @description The type of plan the company is on, e.g., trial, free, simple-v4.
       */
      plan_type: string;
      /**
       * Team Feature
       * @description Whether the team scheduling module is enabled.
       */
      team_feature: boolean;
      /**
       * Thousands Separator
       * @description Separator used when formatting numbers.
       */
      thousands_separator: string;
      /**
       * Time Format
       * @description The format used to display time in Harvest.
       * @enum {string}
       */
      time_format: "decimal" | "hours_minutes";
      /**
       * Wants Timestamp Timers
       * @description Whether time is tracked via duration or start and end times.
       */
      wants_timestamp_timers: boolean;
      /**
       * Week Start Day
       * @description The weekday used as the start of the week.
       * @enum {string}
       */
      week_start_day: "Saturday" | "Sunday" | "Monday";
      /**
       * Weekly Capacity
       * @description The weekly capacity in seconds, must be non-negative.
       */
      weekly_capacity: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_GET_ESTIMATE tool input.
 */
type HARVEST_GET_ESTIMATE_INPUT = {
  /**
   * Estimate Id
   * @description ID of the estimate to retrieve.
   */
  estimate_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_ESTIMATE tool output.
 */
type HARVEST_GET_ESTIMATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accepted At
       * @description Datetime when estimate was accepted.
       * @default null
       */
      accepted_at: string | null;
      /**
       * Amount
       * @description Total amount for the estimate.
       */
      amount: number;
      /**
       * Client
       * @description Client associated with the estimate.
       */
      client: {
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Client Key
       * @description Unique key identifying the estimate.
       */
      client_key: string;
      /**
       * Created At
       * @description Datetime when estimate was created.
       */
      created_at: string;
      /**
       * Creator
       * @description User who created the estimate.
       */
      creator: {
          /**
           * Id
           * @description Unique ID for the user who created the estimate.
           */
          id: number;
          /**
           * Name
           * @description Name of the user who created the estimate.
           */
          name: string;
      };
      /**
       * Currency
       * @description Currency used by the estimate.
       */
      currency: string;
      /**
       * Declined At
       * @description Datetime when estimate was declined.
       * @default null
       */
      declined_at: string | null;
      /**
       * Discount
       * @description Discount percentage applied to estimate.
       * @default null
       */
      discount: number | null;
      /**
       * Discount Amount
       * @description Monetary amount from discount.
       * @default null
       */
      discount_amount: number | null;
      /**
       * Id
       * @description Unique ID for the estimate.
       */
      id: number;
      /**
       * Issue Date
       * @description Date the estimate was issued (YYYY-MM-DD).
       */
      issue_date: string;
      /**
       * Line Items
       * @description Line items associated with the estimate.
       */
      line_items: {
          /**
           * Amount
           * @description Line item subtotal (quantity * unit_price).
           */
          amount: number;
          /**
           * Description
           * @description Text description of the line item.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID for the line item.
           */
          id: number;
          /**
           * Kind
           * @description Estimate item category name.
           * @default null
           */
          kind: string | null;
          /**
           * Quantity
           * @description Unit quantity of the item.
           */
          quantity: number;
          /**
           * Taxed
           * @description Whether the estimate's first tax applies to this line item.
           */
          taxed: boolean;
          /**
           * Taxed2
           * @description Whether the estimate's second tax applies to this line item.
           */
          taxed2: boolean;
          /**
           * Unit Price
           * @description Individual price per unit.
           */
          unit_price: number;
      }[];
      /**
       * Notes
       * @description Notes included on the estimate.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Estimate number.
       */
      number: string;
      /**
       * Purchase Order
       * @description Purchase order number.
       * @default null
       */
      purchase_order: string | null;
      /**
       * Sent At
       * @description Datetime when estimate was sent.
       * @default null
       */
      sent_at: string | null;
      /**
       * State
       * @description Current state of the estimate.
       */
      state: string;
      /**
       * Tax
       * @description First tax percentage applied to estimate.
       * @default null
       */
      tax: number | null;
      /**
       * Tax2
       * @description Second tax percentage applied to estimate.
       * @default null
       */
      tax2: number | null;
      /**
       * Tax2 Amount
       * @description Monetary amount from second tax.
       * @default null
       */
      tax2_amount: number | null;
      /**
       * Tax Amount
       * @description Monetary amount from first tax.
       * @default null
       */
      tax_amount: number | null;
      /**
       * Updated At
       * @description Datetime when estimate was last updated.
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
 * Type of HARVEST's HARVEST_GET_INVOICE tool input.
 */
type HARVEST_GET_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description Unique ID of the invoice to retrieve.
   */
  invoice_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_INVOICE tool output.
 */
type HARVEST_GET_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Total amount for the invoice.
       */
      amount: number;
      /**
       * Client
       * @description Client details for the invoice.
       */
      client: {
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Client Key
       * @description Key for public client invoice URL.
       */
      client_key: string;
      /**
       * Closed At
       * Format: date-time
       * @description Date and time the invoice was closed.
       * @default null
       */
      closed_at: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the invoice was created.
       */
      created_at: string;
      /**
       * Creator
       * @description Creator details for the invoice.
       */
      creator: {
          /**
           * Id
           * @description Unique ID for the person that created the invoice.
           */
          id: number;
          /**
           * Name
           * @description Name of the person that created the invoice.
           */
          name: string;
      };
      /**
       * Currency
       * @description The currency code associated with this invoice.
       */
      currency: string;
      /**
       * Discount
       * @description Discount percentage subtracted from subtotal.
       * @default null
       */
      discount: number | null;
      /**
       * Discount Amount
       * @description Amount of discount applied.
       */
      discount_amount: number;
      /**
       * Due Amount
       * @description Total amount due at this time.
       */
      due_amount: number;
      /**
       * Due Date
       * Format: date
       * @description Date the invoice is due.
       */
      due_date: string;
      /**
       * InvoiceEstimate
       * @description Associated estimate details, if any.
       * @default null
       */
      estimate: {
          /**
           * Id
           * @description Unique ID for the associated estimate.
           */
          id: number;
      } | null;
      /**
       * Id
       * @description Unique ID for the invoice.
       */
      id: number;
      /**
       * Issue Date
       * Format: date
       * @description Date the invoice was issued.
       */
      issue_date: string;
      /**
       * Line Items
       * @description Invoice line items.
       */
      line_items: {
          /**
           * Amount
           * @description The line item subtotal (quantity * unit_price).
           */
          amount: number;
          /**
           * Description
           * @description Text description of the line item.
           */
          description: string;
          /**
           * Id
           * @description Unique ID for the line item.
           */
          id: number;
          /**
           * Kind
           * @description The name of an invoice item category.
           */
          kind: string;
          /**
           * InvoiceProject
           * @description Associated project for the line item.
           * @default null
           */
          project: {
              /**
               * Code
               * @description Code of the project.
               * @default null
               */
              code: string | null;
              /**
               * Id
               * @description Unique ID for the project.
               */
              id: number;
              /**
               * Name
               * @description Name of the project.
               */
              name: string;
          } | null;
          /**
           * Quantity
           * @description The unit quantity of the item.
           */
          quantity: number;
          /**
           * Taxed
           * @description Whether the invoice's tax percentage applies to this line item.
           */
          taxed: boolean;
          /**
           * Taxed2
           * @description Whether the invoice's tax2 percentage applies to this line item.
           */
          taxed2: boolean;
          /**
           * Unit Price
           * @description The individual price per unit.
           */
          unit_price: number;
      }[];
      /**
       * Notes
       * @description Additional notes on the invoice.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Invoice number.
       */
      number: string;
      /**
       * Paid At
       * Format: date-time
       * @description Date and time the invoice was paid.
       * @default null
       */
      paid_at: string | null;
      /**
       * Paid Date
       * Format: date
       * @description Date the invoice was paid.
       * @default null
       */
      paid_date: string | null;
      /**
       * Payment Options
       * @description Enabled payment options for the invoice.
       */
      payment_options: string[];
      /**
       * Payment Term
       * @description Timeframe in which the invoice should be paid.
       */
      payment_term: string;
      /**
       * Period End
       * Format: date
       * @description End date of the period charged.
       * @default null
       */
      period_end: string | null;
      /**
       * Period Start
       * Format: date
       * @description Start date of the period charged.
       * @default null
       */
      period_start: string | null;
      /**
       * Purchase Order
       * @description The purchase order number.
       * @default null
       */
      purchase_order: string | null;
      /**
       * Recurring Invoice Id
       * @description Unique ID of the associated recurring invoice.
       * @default null
       */
      recurring_invoice_id: number | null;
      /**
       * InvoiceRetainer
       * @description Associated retainer details, if any.
       * @default null
       */
      retainer: {
          /**
           * Id
           * @description Unique ID for the associated retainer.
           */
          id: number;
      } | null;
      /**
       * Sent At
       * Format: date-time
       * @description Date and time the invoice was sent.
       * @default null
       */
      sent_at: string | null;
      /**
       * State
       * @description Current state of the invoice.
       * @enum {string}
       */
      state: "draft" | "open" | "paid" | "closed";
      /**
       * Subject
       * @description The invoice subject.
       * @default null
       */
      subject: string | null;
      /**
       * Tax
       * @description Tax percentage applied to subtotal.
       * @default null
       */
      tax: number | null;
      /**
       * Tax2
       * @description Second tax percentage applied.
       * @default null
       */
      tax2: number | null;
      /**
       * Tax2 Amount
       * @description Amount of second tax applied.
       */
      tax2_amount: number;
      /**
       * Tax Amount
       * @description Amount of tax applied.
       */
      tax_amount: number;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the invoice was last updated.
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
 * Type of HARVEST's HARVEST_GET_PROJECT tool input.
 */
type HARVEST_GET_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the Harvest project to retrieve.
   */
  project_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_PROJECT tool output.
 */
type HARVEST_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bill By
       * @description Billing method for the project.
       * @default null
       */
      bill_by: string | null;
      /**
       * Budget
       * @description Budget for the project.
       * @default null
       */
      budget: number | null;
      /**
       * Budget By
       * @description Budget measurement method.
       * @default null
       */
      budget_by: string | null;
      /**
       * Budget Is Monthly
       * @description Whether the budget resets monthly.
       */
      budget_is_monthly: boolean;
      /**
       * Client
       * @description Client object nested inside the project.
       */
      client: {
          /**
           * Currency
           * @description Currency code for the client (ISO 4217).
           */
          currency: string;
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Code
       * @description Project code.
       * @default null
       */
      code: string | null;
      /**
       * Cost Budget
       * @description Cost budget for the project.
       * @default null
       */
      cost_budget: number | null;
      /**
       * Cost Budget Include Expenses
       * @description Whether expenses are included in the cost budget.
       */
      cost_budget_include_expenses: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the project was created.
       */
      created_at: string;
      /**
       * Ends On
       * Format: date
       * @description Project end date (YYYY-MM-DD).
       * @default null
       */
      ends_on: string | null;
      /**
       * Fee
       * @description Fixed fee for the project.
       * @default null
       */
      fee: number | null;
      /**
       * Hourly Rate
       * @description Hourly rate for the project.
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique ID for the project.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the project is active.
       */
      is_active: boolean;
      /**
       * Is Billable
       * @description Whether the project is billable.
       */
      is_billable: boolean;
      /**
       * Is Fixed Fee
       * @description Whether the project has a fixed fee.
       */
      is_fixed_fee: boolean;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Notes
       * @description Additional notes about the project.
       * @default null
       */
      notes: string | null;
      /**
       * Notify When Over Budget
       * @description Notify when the budget is exceeded.
       */
      notify_when_over_budget: boolean;
      /**
       * Over Budget Notification Date
       * Format: date-time
       * @description Date of the last over-budget notification.
       * @default null
       */
      over_budget_notification_date: string | null;
      /**
       * Over Budget Notification Percentage
       * @description Percentage threshold for over-budget notification.
       * @default null
       */
      over_budget_notification_percentage: number | null;
      /**
       * Show Budget To All
       * @description Whether the budget is visible to all users.
       */
      show_budget_to_all: boolean;
      /**
       * Starts On
       * Format: date
       * @description Project start date (YYYY-MM-DD).
       * @default null
       */
      starts_on: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the project was last updated.
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
 * Type of HARVEST's HARVEST_GET_TASK tool input.
 */
type HARVEST_GET_TASK_INPUT = {
  /**
   * Task Id
   * @description Unique ID of the task to retrieve.
   */
  task_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_TASK tool output.
 */
type HARVEST_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable By Default
       * @description Indicates if the task is billable by default.
       */
      billable_by_default: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the task was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Default Hourly Rate
       * @description The default hourly rate for the task.
       * @default null
       */
      default_hourly_rate: number | null;
      /**
       * Id
       * @description Unique ID for the task.
       */
      id: number;
      /**
       * Is Active
       * @description Specifies if the task is active or archived.
       */
      is_active: boolean;
      /**
       * Is Default
       * @description Indicates if the task is a default task.
       */
      is_default: boolean;
      /**
       * Name
       * @description The name of the task.
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the task was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_GET_TIME_ENTRY tool input.
 */
type HARVEST_GET_TIME_ENTRY_INPUT = {
  /**
   * Time Entry Id
   * @description The ID of the time entry to retrieve.
   */
  time_entry_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_TIME_ENTRY tool output.
 */
type HARVEST_GET_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the time entry is billable
       */
      billable: boolean;
      /**
       * Billable Rate
       * @description Billable rate for the time entry
       */
      billable_rate: number | null;
      /**
       * Budgeted
       * @description Whether the time entry is budgeted
       */
      budgeted: boolean;
      /**
       * Client
       * @description Client associated with the time entry
       */
      client: {
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name
           */
          name: string;
      };
      /**
       * Cost Rate
       * @description Cost rate for the time entry
       */
      cost_rate: number | null;
      /**
       * Created At
       * @description Timestamp when the time entry was created (ISO 8601)
       */
      created_at: string;
      /**
       * Ended Time
       * @description Time the entry ended
       * @default null
       */
      ended_time: string | null;
      /**
       * ExternalReference
       * @description External reference metadata returned by Harvest
       * @default null
       */
      external_reference: {
          /**
           * Group Id
           * @description External reference group ID
           * @default null
           */
          group_id: string | null;
          /**
           * Id
           * @description External reference ID
           * @default null
           */
          id: string | null;
          /**
           * Permalink
           * @description URL of the external reference
           * @default null
           */
          permalink: string | null;
      } | null;
      /**
       * Hours
       * @description Number of hours tracked
       */
      hours: number | null;
      /**
       * Id
       * @description Unique ID for the time entry
       */
      id: number;
      /**
       * Invoice
       * @description Invoice associated with the time entry
       * @default null
       */
      invoice: {
          /**
           * Due Amount
           * @description Amount due on the invoice
           */
          due_amount: number | null;
          /**
           * Id
           * @description Invoice ID associated with the time entry
           */
          id: number;
          /**
           * Number
           * @description Invoice number
           */
          number: string;
          /**
           * Paid Amount
           * @description Amount paid on the invoice
           */
          paid_amount: number | null;
      } | null;
      /**
       * Is Billed
       * @description Whether the time entry has been billed
       */
      is_billed: boolean;
      /**
       * Is Closed
       * @description Whether the time entry is closed
       */
      is_closed: boolean;
      /**
       * Is Locked
       * @description Whether the time entry is locked
       */
      is_locked: boolean;
      /**
       * Is Running
       * @description Whether the timer is currently running
       */
      is_running: boolean;
      /**
       * Locked Reason
       * @description Reason why the time entry is locked
       * @default null
       */
      locked_reason: string | null;
      /**
       * Notes
       * @description Notes on the time entry
       * @default null
       */
      notes: string | null;
      /**
       * Project
       * @description Project associated with the time entry
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * Spent Date
       * @description Date the time entry was spent (YYYY-MM-DD)
       */
      spent_date: string;
      /**
       * Started Time
       * @description Time the entry started
       * @default null
       */
      started_time: string | null;
      /**
       * Task
       * @description Task associated with the time entry
       */
      task: {
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
      };
      /**
       * TaskAssignment
       * @description Task assignment associated with the time entry
       * @default null
       */
      task_assignment: {
          /**
           * Billable
           * @description Whether the task assignment is billable
           */
          billable: boolean;
          /**
           * Budgeted
           * @description Whether the task assignment is budgeted
           */
          budgeted: boolean;
          /**
           * Hourly Rate
           * @description Hourly rate for this assignment
           */
          hourly_rate: number | null;
          /**
           * Id
           * @description Task assignment ID
           */
          id: number;
          /**
           * Target Hours
           * @description Target hours for this assignment
           * @default null
           */
          target_hours: number | null;
      } | null;
      /**
       * Timer Started At
       * @description Timestamp when the timer was started
       * @default null
       */
      timer_started_at: string | null;
      /**
       * Updated At
       * @description Timestamp when the time entry was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * User
       * @description User associated with the time entry
       */
      user: {
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
           */
          name: string;
      };
      /**
       * UserAssignment
       * @description User assignment associated with the time entry
       * @default null
       */
      user_assignment: {
          /**
           * Billable Rate
           * @description Billable rate for this user assignment
           */
          billable_rate: number | null;
          /**
           * Budgeted Rate
           * @description Budgeted rate for this user assignment
           */
          budgeted_rate: number | null;
          /**
           * Id
           * @description User assignment ID
           */
          id: number;
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_GET_USER tool input.
 */
type HARVEST_GET_USER_INPUT = {
  /**
   * User Id
   * @description The unique ID of the user to retrieve.
   */
  user_id?: number;
};

/**
 * Type of HARVEST's HARVEST_GET_USER tool output.
 */
type HARVEST_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Roles
       * @description Access roles assigned to the user for permissions.
       */
      access_roles: string[];
      /**
       * Avatar Url
       * @description URL to the user's avatar image.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Cost Rate
       * @description Cost rate for the user.
       * @default null
       */
      cost_rate: number | null;
      /**
       * Created At
       * @description Date and time the user was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Default Hourly Rate
       * @description Default hourly rate for the user.
       * @default null
       */
      default_hourly_rate: number | null;
      /**
       * Email
       * @description The email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description The first name of the user.
       */
      first_name: string;
      /**
       * Has Access To All Future Projects
       * @description Whether the user has access to all future projects.
       */
      has_access_to_all_future_projects: boolean;
      /**
       * Id
       * @description Unique ID for the user.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the user is active.
       */
      is_active: boolean;
      /**
       * Is Contractor
       * @description Whether the user is a contractor.
       */
      is_contractor: boolean;
      /**
       * Last Name
       * @description The last name of the user.
       */
      last_name: string;
      /**
       * Roles
       * @description Business roles assigned to the user.
       */
      roles: string[];
      /**
       * Telephone
       * @description The user's telephone number.
       * @default null
       */
      telephone: string | null;
      /**
       * Timezone
       * @description The timezone of the user.
       */
      timezone: string;
      /**
       * Updated At
       * @description Date and time the user was last updated, in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Weekly Capacity
       * @description Weekly capacity in seconds.
       */
      weekly_capacity: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_CLIENTS tool input.
 */
type HARVEST_LIST_CLIENTS_INPUT = {
  /**
   * Is Active
   * @description Pass true to only return active clients and false to return inactive clients.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Page
   * @description DEPRECATED. Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of records to return per page. Min 1, max 2000. Defaults to 2000.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return clients that have been updated since the given date and time, in ISO 8601 format.
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_CLIENTS tool output.
 */
type HARVEST_LIST_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description An array of client objects.
       */
      clients: {
          /**
           * Address
           * @description The physical address for the client.
           * @default null
           */
          address: string | null;
          /**
           * Created At
           * @description Date and time the client was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Currency
           * @description The currency code associated with this client.
           */
          currency: string;
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Is Active
           * @description Whether the client is active or archived.
           */
          is_active: boolean;
          /**
           * Name
           * @description A textual description of the client.
           */
          name: string;
          /**
           * Statement Key
           * @description Used to build a URL to the client’s invoice dashboard.
           */
          statement_key: string;
          /**
           * Updated At
           * @description Date and time the client was last updated, in ISO 8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if there is no next page.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if there is no previous page.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_CLIENT_CONTACTS tool input.
 */
type HARVEST_LIST_CLIENT_CONTACTS_INPUT = {
  /**
   * Client Id
   * @description Only return contacts belonging to the client with this ID.
   * @default null
   */
  client_id: number | null;
  /**
   * Page
   * @description Page number to use in pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records to return per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * @description Only return contacts updated since this date/time (ISO 8601).
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_CLIENT_CONTACTS tool output.
 */
type HARVEST_LIST_CLIENT_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of client contact objects.
       */
      contacts: {
          /**
           * Client
           * @description The client associated with the contact.
           */
          client: {
              /**
               * Id
               * @description Unique ID for the client.
               */
              id: number;
              /**
               * Name
               * @description Name of the client.
               */
              name: string;
          };
          /**
           * Created At
           * @description Date and time the contact was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the contact.
           */
          email: string;
          /**
           * Fax
           * @description Fax number of the contact.
           * @default null
           */
          fax: string | null;
          /**
           * First Name
           * @description First name of the contact.
           */
          first_name: string;
          /**
           * Id
           * @description Unique ID for the contact.
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the contact.
           */
          last_name: string | null;
          /**
           * Phone Mobile
           * @description Mobile phone number of the contact.
           * @default null
           */
          phone_mobile: string | null;
          /**
           * Phone Office
           * @description Office phone number of the contact.
           * @default null
           */
          phone_office: string | null;
          /**
           * Title
           * @description Title of the contact.
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description Date and time the contact was last updated, in ISO 8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Links
       * @description Links to navigate through pages.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if not present.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if not present.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of contacts.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_ESTIMATE_MESSAGES tool input.
 */
type HARVEST_LIST_ESTIMATE_MESSAGES_INPUT = {
  /**
   * Estimate Id
   * @description ID of the estimate to retrieve messages for.
   */
  estimate_id?: number;
  /**
   * Page
   * @description DEPRECATED. Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records per page, between 1 and 2000. Defaults to 2000.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return estimate messages updated since the given date and time, in ISO 8601 format.
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_ESTIMATE_MESSAGES tool output.
 */
type HARVEST_LIST_ESTIMATE_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Estimate Messages
       * @description Array of estimate message objects.
       */
      estimate_messages: {
          /**
           * Body
           * @description The message body.
           */
          body: string;
          /**
           * Created At
           * @description Date and time the message was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Event Type
           * @description Type of estimate event that occurred with the message.
           */
          event_type: string;
          /**
           * Id
           * @description Unique ID for the message.
           */
          id: number;
          /**
           * Recipients
           * @description List of message recipients.
           */
          recipients: {
              /**
               * Email
               * @description Email of the message recipient.
               */
              email: string;
              /**
               * Name
               * @description Name of the message recipient.
               * @default null
               */
              name: string | null;
          }[];
          /**
           * Send Me A Copy
           * @description Whether a copy of the message was emailed to the current user.
           */
          send_me_a_copy: boolean;
          /**
           * Sent By
           * @description Name of the user who created the message.
           */
          sent_by: string;
          /**
           * Sent By Email
           * @description Email of the user who created the message.
           */
          sent_by_email: string;
          /**
           * Sent From
           * @description Name of the user the message was sent from.
           */
          sent_from: string;
          /**
           * Sent From Email
           * @description Email of the user the message was sent from.
           */
          sent_from_email: string;
          /**
           * Subject
           * @description The message subject.
           */
          subject: string;
          /**
           * Updated At
           * @description Date and time the message was last updated, in ISO 8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, if applicable.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, if applicable.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description Next page number, if applicable.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of records per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description Previous page number, if applicable.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description Total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_EXPENSE_CATEGORIES tool input.
 */
type HARVEST_LIST_EXPENSE_CATEGORIES_INPUT = {
  /**
   * Is Active
   * @description Pass true to return only active expense categories; false to return only inactive categories.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records to return per page (1–2000).
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return expense categories updated since the given date and time (ISO 8601).
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_EXPENSE_CATEGORIES tool output.
 */
type HARVEST_LIST_EXPENSE_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expense Categories
       * @description An array of expense category objects.
       */
      expense_categories: {
          /**
           * Created At
           * Format: date-time
           * @description Date and time the category was created (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID for the expense category.
           */
          id: number;
          /**
           * Is Active
           * @description Whether the expense category is active.
           */
          is_active: boolean;
          /**
           * Name
           * @description Name of the expense category.
           */
          name: string;
          /**
           * Unit Name
           * @description Unit name of the expense category.
           */
          unit_name: string | null;
          /**
           * Unit Price
           * @description Unit price for the expense category.
           */
          unit_price: number | null;
          /**
           * Updated At
           * Format: date-time
           * @description Date and time the category was last updated (ISO 8601).
           */
          updated_at: string;
      }[];
      /**
       * Links
       * @description Pagination navigation links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description Next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description Previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description Total number of expense category entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICES tool input.
 */
type HARVEST_LIST_INVOICES_INPUT = {
  /**
   * Client Id
   * @description Only return invoices belonging to the client with the given ID.
   * @default null
   */
  client_id: number | null;
  /**
   * From Date
   * Format: date
   * @description Only return invoices with an issue_date on or after the given date (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Page
   * @description Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records to return per page. 1–2000. Defaults to 100.
   * @default null
   */
  per_page: number | null;
  /**
   * Project Id
   * @description Only return invoices associated with the project with the given ID.
   * @default null
   */
  project_id: number | null;
  /**
   * State
   * @description Only return invoices with a state matching this value.
   * @default null
   * @enum {string|null}
   */
  state: "draft" | "open" | "paid" | "closed" | null;
  /**
   * To Date
   * Format: date
   * @description Only return invoices with an issue_date on or before the given date (YYYY-MM-DD).
   * @default null
   */
  to_date: string | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return invoices that have been updated since the given date and time, in ISO 8601 format.
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICES tool output.
 */
type HARVEST_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoices
       * @description An array of invoice objects.
       */
      invoices: {
          /**
           * Amount
           * @description Total amount for the invoice.
           */
          amount: number;
          /**
           * Client
           * @description Client details for the invoice.
           */
          client: {
              /**
               * Id
               * @description Unique ID for the client.
               */
              id: number;
              /**
               * Name
               * @description Name of the client.
               */
              name: string;
          };
          /**
           * Client Key
           * @description Key for public client invoice URL.
           */
          client_key: string;
          /**
           * Closed At
           * Format: date-time
           * @description Date and time the invoice was closed.
           * @default null
           */
          closed_at: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Date and time the invoice was created.
           */
          created_at: string;
          /**
           * Creator
           * @description Creator details for the invoice.
           */
          creator: {
              /**
               * Id
               * @description Unique ID for the person that created the invoice.
               */
              id: number;
              /**
               * Name
               * @description Name of the person that created the invoice.
               */
              name: string;
          };
          /**
           * Discount
           * @description Discount percentage subtracted from subtotal.
           * @default null
           */
          discount: number | null;
          /**
           * Discount Amount
           * @description Amount of discount applied.
           */
          discount_amount: number;
          /**
           * Due Amount
           * @description Total amount due at this time.
           */
          due_amount: number;
          /**
           * Due Date
           * Format: date
           * @description Date the invoice is due.
           */
          due_date: string;
          /**
           * InvoiceEstimate
           * @description Associate estimate details, if any.
           * @default null
           */
          estimate: {
              /**
               * Id
               * @description Unique ID for the associated estimate.
               */
              id: number;
          } | null;
          /**
           * Id
           * @description Unique ID for the invoice.
           */
          id: number;
          /**
           * Issue Date
           * Format: date
           * @description Date the invoice was issued.
           */
          issue_date: string;
          /**
           * Line Items
           * @description Invoice line items.
           */
          line_items: {
              /**
               * Amount
               * @description The line item subtotal (quantity * unit_price).
               */
              amount: number;
              /**
               * Description
               * @description Text description of the line item.
               */
              description: string;
              /**
               * Id
               * @description Unique ID for the line item.
               */
              id: number;
              /**
               * Kind
               * @description The name of an invoice item category.
               */
              kind: string;
              /**
               * InvoiceProject
               * @description Associated project for the line item.
               * @default null
               */
              project: {
                  /**
                   * Code
                   * @description Code of the project.
                   * @default null
                   */
                  code: string | null;
                  /**
                   * Id
                   * @description Unique ID for the project.
                   */
                  id: number;
                  /**
                   * Name
                   * @description Name of the project.
                   */
                  name: string;
              } | null;
              /**
               * Quantity
               * @description The unit quantity of the item.
               */
              quantity: number;
              /**
               * Taxed
               * @description Whether the invoice's tax percentage applies to this line item.
               */
              taxed: boolean;
              /**
               * Taxed2
               * @description Whether the invoice's tax2 percentage applies to this line item.
               */
              taxed2: boolean;
              /**
               * Unit Price
               * @description The individual price per unit.
               */
              unit_price: number;
          }[];
          /**
           * Notes
           * @description Additional notes on the invoice.
           * @default null
           */
          notes: string | null;
          /**
           * Number
           * @description Invoice number.
           */
          number: string;
          /**
           * Paid At
           * Format: date-time
           * @description Date and time the invoice was paid.
           * @default null
           */
          paid_at: string | null;
          /**
           * Paid Date
           * Format: date
           * @description Date the invoice was paid.
           * @default null
           */
          paid_date: string | null;
          /**
           * Payment Options
           * @description Enabled payment options for the invoice.
           */
          payment_options: string[];
          /**
           * Payment Term
           * @description Timeframe in which the invoice should be paid.
           */
          payment_term: string;
          /**
           * Period End
           * Format: date
           * @description End date of the period charged.
           * @default null
           */
          period_end: string | null;
          /**
           * Period Start
           * Format: date
           * @description Start date of the period charged.
           * @default null
           */
          period_start: string | null;
          /**
           * Purchase Order
           * @description The purchase order number.
           * @default null
           */
          purchase_order: string | null;
          /**
           * Recurring Invoice Id
           * @description ID of the associated recurring invoice.
           * @default null
           */
          recurring_invoice_id: number | null;
          /**
           * InvoiceRetainer
           * @description Associate retainer details, if any.
           * @default null
           */
          retainer: {
              /**
               * Id
               * @description Unique ID for the associated retainer.
               */
              id: number;
          } | null;
          /**
           * Sent At
           * Format: date-time
           * @description Date and time the invoice was sent.
           * @default null
           */
          sent_at: string | null;
          /**
           * State
           * @description Current state of the invoice.
           * @enum {string}
           */
          state: "draft" | "open" | "paid" | "closed";
          /**
           * Subject
           * @description The invoice subject.
           * @default null
           */
          subject: string | null;
          /**
           * Tax
           * @description Tax percentage applied to subtotal.
           * @default null
           */
          tax: number | null;
          /**
           * Tax2
           * @description Second tax percentage applied.
           * @default null
           */
          tax2: number | null;
          /**
           * Tax2 Amount
           * @description Amount of second tax applied.
           */
          tax2_amount: number;
          /**
           * Tax Amount
           * @description Amount of tax applied.
           */
          tax_amount: number;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICE_ITEM_CATEGORIES tool input.
 */
type HARVEST_LIST_INVOICE_ITEM_CATEGORIES_INPUT = {
  /**
   * Page
   * @description DEPRECATED. Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of records to return per page. Min 1, max 2000. Defaults to 2000.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return invoice item categories that have been updated since the given date and time, in ISO 8601 format.
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICE_ITEM_CATEGORIES tool output.
 */
type HARVEST_LIST_INVOICE_ITEM_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice Item Categories
       * @description An array of invoice item category objects.
       */
      invoice_item_categories: {
          /**
           * Created At
           * Format: date-time
           * @description Date and time the category was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID for the invoice item category.
           */
          id: number;
          /**
           * Name
           * @description The name of the invoice item category.
           */
          name: string;
          /**
           * Updated At
           * Format: date-time
           * @description Date and time the category was last updated, in ISO 8601 format.
           */
          updated_at: string;
          /**
           * Use As Expense
           * @description Whether this category is used for expenses when generating an invoice.
           */
          use_as_expense: boolean;
          /**
           * Use As Service
           * @description Whether this category is used for billable hours when generating an invoice.
           */
          use_as_service: boolean;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if there is no next page.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if there is no previous page.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICE_MESSAGES tool input.
 */
type HARVEST_LIST_INVOICE_MESSAGES_INPUT = {
  /**
   * Invoice Id
   * @description ID of the invoice to retrieve messages for.
   */
  invoice_id?: number;
  /**
   * Page
   * @description Page number to use in pagination (deprecated, defaults to 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records to return per page (1-2000, defaults to 2000).
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * @description Only return messages updated since this date/time (ISO 8601).
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICE_MESSAGES tool output.
 */
type HARVEST_LIST_INVOICE_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice Messages
       * @description Array of invoice message objects.
       */
      invoice_messages: {
          /**
           * Attach Pdf
           * @description Whether a PDF is attached.
           */
          attach_pdf: boolean;
          /**
           * Body
           * @description Body of the message.
           */
          body: string;
          /**
           * Created At
           * @description Date and time the message was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Event Type
           * @description Type of event.
           * @default null
           */
          event_type: string | null;
          /**
           * Id
           * @description Unique ID for the message.
           */
          id: number;
          /**
           * Include Link To Client Invoice
           * @description Whether a link to the client invoice is included.
           */
          include_link_to_client_invoice: boolean;
          /**
           * Recipients
           * @description Recipients of the message.
           */
          recipients: {
              /**
               * Email
               * @description Email address of the recipient.
               */
              email: string;
              /**
               * Name
               * @description Name of the recipient.
               */
              name: string;
          }[];
          /**
           * Reminder
           * @description Whether it's a reminder message.
           */
          reminder: boolean;
          /**
           * Send Me A Copy
           * @description Whether the sender requested a copy.
           */
          send_me_a_copy: boolean;
          /**
           * Send Reminder On
           * @description Date and time to send the reminder (ISO 8601).
           * @default null
           */
          send_reminder_on: string | null;
          /**
           * Sent By
           * @description Name of the sender.
           */
          sent_by: string;
          /**
           * Sent By Email
           * @description Email of the sender.
           */
          sent_by_email: string;
          /**
           * Sent From
           * @description Name of the sender.
           */
          sent_from: string;
          /**
           * Sent From Email
           * @description Email of the sender.
           */
          sent_from_email: string;
          /**
           * Subject
           * @description Subject of the message.
           */
          subject: string;
          /**
           * Thank You
           * @description Whether it's a thank-you message.
           */
          thank_you: boolean;
          /**
           * Updated At
           * @description Date and time the message was last updated, in ISO 8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Links
       * @description Links to navigate through pages.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if not present.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if not present.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICE_PAYMENTS tool input.
 */
type HARVEST_LIST_INVOICE_PAYMENTS_INPUT = {
  /**
   * Invoice Id
   * @description Unique ID of the invoice to retrieve payments for.
   */
  invoice_id?: number;
  /**
   * Page
   * @description DEPRECATED. Page number for pagination (defaults to 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records per page (1–2000; defaults to 2000).
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return invoice payments updated since this date and time (ISO 8601).
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_INVOICE_PAYMENTS tool output.
 */
type HARVEST_LIST_INVOICE_PAYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice Payments
       * @description List of invoice payment objects.
       */
      invoice_payments: {
          /**
           * Amount
           * @description Amount of the payment.
           */
          amount: number | null;
          /**
           * Created At
           * @description Date and time the payment was recorded (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID for the payment.
           */
          id: number;
          /**
           * Notes
           * @description Notes associated with the payment.
           * @default null
           */
          notes: string | null;
          /**
           * Paid At
           * @description Date and time the payment was made (ISO 8601).
           */
          paid_at: string;
          /**
           * Paid Date
           * @description Date the payment was made (YYYY-MM-DD).
           */
          paid_date: string;
          /**
           * Payment Gateway
           * @description Payment gateway used to process the payment.
           */
          payment_gateway: {
              /**
               * Id
               * @description Unique ID for the payment gateway.
               */
              id: number;
              /**
               * Name
               * @description Name of the payment gateway.
               */
              name: string;
          };
          /**
           * Recorded By
           * @description Name of the person who recorded the payment.
           */
          recorded_by: string;
          /**
           * Recorded By Email
           * @description Email of the person who recorded the payment.
           */
          recorded_by_email: string;
          /**
           * Transaction Id
           * @description Card authorization or PayPal transaction ID.
           * @default null
           */
          transaction_id: string | null;
          /**
           * Updated At
           * @description Date and time the payment was last updated (ISO 8601).
           */
          updated_at: string;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_PROJECTS tool input.
 */
type HARVEST_LIST_PROJECTS_INPUT = {
  /**
   * Client
   * @description Filter projects by the client ID.
   * @default null
   */
  client: number | null;
  /**
   * Page
   * @description Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records per page. Min 1, max 100. Defaults to 100.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return projects updated since the given date/time (ISO 8601).
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_PROJECTS tool output.
 */
type HARVEST_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination navigation links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description Next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description Previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Projects
       * @description An array of project objects.
       */
      projects: {
          /**
           * Bill By
           * @description Billing method for the project.
           * @default null
           */
          bill_by: string | null;
          /**
           * Budget
           * @description Budget for the project.
           * @default null
           */
          budget: number | null;
          /**
           * Budget By
           * @description Budget calculation method.
           * @default null
           */
          budget_by: string | null;
          /**
           * Budget Is Monthly
           * @description Whether the budget resets monthly.
           */
          budget_is_monthly: boolean;
          /**
           * Client
           * @description Client object nested inside project.
           */
          client: {
              /**
               * Currency
               * @description Currency code for the client (ISO 4217).
               */
              currency: string;
              /**
               * Id
               * @description Unique ID for the client.
               */
              id: number;
              /**
               * Name
               * @description Name of the client.
               */
              name: string;
          };
          /**
           * Code
           * @description Project code.
           * @default null
           */
          code: string | null;
          /**
           * Cost Budget
           * @description Cost budget for the project.
           * @default null
           */
          cost_budget: number | null;
          /**
           * Cost Budget Include Expenses
           * @description Whether expenses are included in the cost budget.
           */
          cost_budget_include_expenses: boolean;
          /**
           * Created At
           * Format: date-time
           * @description Date and time the project was created.
           */
          created_at: string;
          /**
           * Ends On
           * Format: date
           * @description Project end date (YYYY-MM-DD).
           * @default null
           */
          ends_on: string | null;
          /**
           * Fee
           * @description Fee for the project when billing by project.
           * @default null
           */
          fee: number | null;
          /**
           * Hint Earliest Record At
           * Format: date
           * @description Earliest record date for the project.
           * @default null
           */
          hint_earliest_record_at: string | null;
          /**
           * Hint Latest Record At
           * Format: date
           * @description Latest record date for the project.
           * @default null
           */
          hint_latest_record_at: string | null;
          /**
           * Hourly Rate
           * @description Hourly rate for the project.
           * @default null
           */
          hourly_rate: number | null;
          /**
           * Id
           * @description Unique ID for the project.
           */
          id: number;
          /**
           * Is Active
           * @description Whether the project is active.
           */
          is_active: boolean;
          /**
           * Is Billable
           * @description Whether the project is billable.
           */
          is_billable: boolean;
          /**
           * Is Fixed Fee
           * @description Whether the project is a fixed-fee project.
           */
          is_fixed_fee: boolean;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
          /**
           * Notify When Over Budget
           * @description Notify when the budget is exceeded.
           */
          notify_when_over_budget: boolean;
          /**
           * Over Budget Notification Date
           * Format: date-time
           * @description Date of the last over budget notification.
           * @default null
           */
          over_budget_notification_date: string | null;
          /**
           * Over Budget Notification Percentage
           * @description Percentage threshold for over-budget notification.
           * @default null
           */
          over_budget_notification_percentage: number | null;
          /**
           * Show Budget To All
           * @description Whether the budget is visible to all users.
           */
          show_budget_to_all: boolean;
          /**
           * Starts On
           * Format: date
           * @description Project start date (YYYY-MM-DD).
           * @default null
           */
          starts_on: string | null;
          /**
           * Updated At
           * Format: date-time
           * @description Date and time the project was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Total Entries
       * @description Total number of project entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_TASKS tool input.
 */
type HARVEST_LIST_TASKS_INPUT = {
  /**
   * Is Active
   * @description Pass true to only return active tasks and false to return archived tasks.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Default
   * @description Pass true to only return default tasks.
   * @default null
   */
  is_default: boolean | null;
  /**
   * Page
   * @description Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of records to return per page. Min 1, max 100. Defaults to 100.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return tasks that have been updated since the given date and time, in ISO 8601 format.
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_TASKS tool output.
 */
type HARVEST_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination navigation links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description Next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description Previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Tasks
       * @description An array of task objects.
       */
      tasks: {
          /**
           * Billable By Default
           * @description Whether new projects with this task are billable by default.
           */
          billable_by_default: boolean;
          /**
           * Created At
           * Format: date-time
           * @description Date and time the task was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Default Hourly Rate
           * @description The default hourly rate for the task.
           * @default null
           */
          default_hourly_rate: number | null;
          /**
           * Id
           * @description Unique ID for the task.
           */
          id: number;
          /**
           * Is Active
           * @description Specifies if the task is active or archived.
           */
          is_active: boolean;
          /**
           * Is Default
           * @description Whether the task is automatically added to future projects.
           */
          is_default: boolean;
          /**
           * Name
           * @description The name of the task.
           */
          name: string;
          /**
           * Updated At
           * Format: date-time
           * @description Date and time the task was last updated, in ISO 8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Total Entries
       * @description Total number of task entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_TIME_ENTRIES tool input.
 */
type HARVEST_LIST_TIME_ENTRIES_INPUT = {
  /**
   * Client Id
   * @description Only return time entries belonging to the client with the given ID.
   * @default null
   */
  client_id: number | null;
  /**
   * External Reference Id
   * @description Only return time entries with the given external reference ID.
   * @default null
   */
  external_reference_id: string | null;
  /**
   * From Date
   * Format: date
   * @description Only return time entries with a spent_date on or after this date (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Is Billed
   * @description Pass true to return invoiced entries, false for unbilled entries.
   * @default null
   */
  is_billed: boolean | null;
  /**
   * Is Running
   * @description Pass true to return running timers, false for stopped entries.
   * @default null
   */
  is_running: boolean | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records to return per page (1–2000).
   * @default null
   */
  per_page: number | null;
  /**
   * Project Id
   * @description Only return time entries belonging to the project with the given ID.
   * @default null
   */
  project_id: number | null;
  /**
   * Task Id
   * @description Only return time entries belonging to the task with the given ID.
   * @default null
   */
  task_id: number | null;
  /**
   * To
   * Format: date
   * @description Only return time entries with a spent_date on or before this date (YYYY-MM-DD).
   * @default null
   */
  to: string | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return time entries updated since this date and time (ISO 8601).
   * @default null
   */
  updated_since: string | null;
  /**
   * User Id
   * @description Only return time entries belonging to the user with the given ID.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_TIME_ENTRIES tool output.
 */
type HARVEST_LIST_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description Next page number, or null if none.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description Previous page number, or null if none.
       * @default null
       */
      previous_page: number | null;
      /**
       * Time Entries
       * @description List of time entry objects.
       */
      time_entries: {
          /**
           * Billable
           * @description Whether the time entry is billable
           */
          billable: boolean;
          /**
           * Billable Rate
           * @description Billable rate for the time entry
           */
          billable_rate: number | null;
          /**
           * Budgeted
           * @description Whether the time entry is budgeted
           */
          budgeted: boolean;
          /**
           * Client
           * @description Client associated with the time entry
           */
          client: {
              /**
               * Id
               * @description Client ID
               */
              id: number;
              /**
               * Name
               * @description Client name
               */
              name: string;
          };
          /**
           * Cost Rate
           * @description Cost rate for the time entry
           */
          cost_rate: number | null;
          /**
           * Created At
           * @description Timestamp when the time entry was created (ISO 8601)
           */
          created_at: string;
          /**
           * Ended Time
           * @description Time the entry ended
           * @default null
           */
          ended_time: string | null;
          /**
           * ExternalReference
           * @description External reference metadata returned by Harvest
           * @default null
           */
          external_reference: {
              /**
               * Group Id
               * @description External reference group ID
               * @default null
               */
              group_id: string | null;
              /**
               * Id
               * @description External reference ID
               * @default null
               */
              id: string | null;
              /**
               * Permalink
               * @description URL of the external reference
               * @default null
               */
              permalink: string | null;
          } | null;
          /**
           * Hours
           * @description Number of hours tracked
           */
          hours: number | null;
          /**
           * Id
           * @description Unique ID for the time entry
           */
          id: number;
          /**
           * Invoice
           * @description Invoice associated with the time entry
           * @default null
           */
          invoice: {
              /**
               * Due Amount
               * @description Amount due on the invoice
               */
              due_amount: number | null;
              /**
               * Id
               * @description Invoice ID associated with the time entry
               */
              id: number;
              /**
               * Number
               * @description Invoice number
               */
              number: string;
              /**
               * Paid Amount
               * @description Amount paid on the invoice
               */
              paid_amount: number | null;
          } | null;
          /**
           * Is Billed
           * @description Whether the time entry has been billed
           */
          is_billed: boolean;
          /**
           * Is Closed
           * @description Whether the time entry is closed
           */
          is_closed: boolean;
          /**
           * Is Locked
           * @description Whether the time entry is locked
           */
          is_locked: boolean;
          /**
           * Is Running
           * @description Whether the timer is currently running
           */
          is_running: boolean;
          /**
           * Locked Reason
           * @description Reason why the time entry is locked
           * @default null
           */
          locked_reason: string | null;
          /**
           * Notes
           * @description Notes on the time entry
           * @default null
           */
          notes: string | null;
          /**
           * Project
           * @description Project associated with the time entry
           */
          project: {
              /**
               * Id
               * @description Project ID
               */
              id: number;
              /**
               * Name
               * @description Project name
               */
              name: string;
          };
          /**
           * Spent Date
           * @description Date the time entry was spent (YYYY-MM-DD)
           */
          spent_date: string;
          /**
           * Started Time
           * @description Time the entry started
           * @default null
           */
          started_time: string | null;
          /**
           * Task
           * @description Task associated with the time entry
           */
          task: {
              /**
               * Id
               * @description Task ID
               */
              id: number;
              /**
               * Name
               * @description Task name
               */
              name: string;
          };
          /**
           * TaskAssignment
           * @description Task assignment associated with the time entry
           * @default null
           */
          task_assignment: {
              /**
               * Billable
               * @description Whether the task assignment is billable
               */
              billable: boolean;
              /**
               * Budgeted
               * @description Whether the task assignment is budgeted
               */
              budgeted: boolean;
              /**
               * Hourly Rate
               * @description Hourly rate for this assignment
               */
              hourly_rate: number | null;
              /**
               * Id
               * @description Task assignment ID
               */
              id: number;
              /**
               * Target Hours
               * @description Target hours for this assignment
               * @default null
               */
              target_hours: number | null;
          } | null;
          /**
           * Timer Started At
           * @description Timestamp when the timer was started
           * @default null
           */
          timer_started_at: string | null;
          /**
           * Updated At
           * @description Timestamp when the time entry was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * User
           * @description User associated with the time entry
           */
          user: {
              /**
               * Id
               * @description User ID
               */
              id: number;
              /**
               * Name
               * @description User name
               */
              name: string;
          };
          /**
           * UserAssignment
           * @description User assignment associated with the time entry
           * @default null
           */
          user_assignment: {
              /**
               * Billable Rate
               * @description Billable rate for this user assignment
               */
              billable_rate: number | null;
              /**
               * Budgeted Rate
               * @description Budgeted rate for this user assignment
               */
              budgeted_rate: number | null;
              /**
               * Id
               * @description User assignment ID
               */
              id: number;
          } | null;
      }[];
      /**
       * Total Entries
       * @description Total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_LIST_USERS tool input.
 */
type HARVEST_LIST_USERS_INPUT = {
  /**
   * Is Active
   * @description Pass true to only return active users and false to return inactive users.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Page
   * @description DEPRECATED. Page number for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of records to return per page. Min 1, max 2000. Defaults to 2000.
   * @default null
   */
  per_page: number | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Only return users that have been updated since the given date and time, in ISO 8601 format.
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HARVEST's HARVEST_LIST_USERS tool output.
 */
type HARVEST_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, or null if none.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL of the previous page, or null if none.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Next Page
       * @description The next page number, or null if there is no next page.
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of records returned per page.
       */
      per_page: number;
      /**
       * Previous Page
       * @description The previous page number, or null if there is no previous page.
       * @default null
       */
      previous_page: number | null;
      /**
       * Total Entries
       * @description The total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description The total number of pages.
       */
      total_pages: number;
      /**
       * Users
       * @description An array of user objects.
       */
      users: {
          /**
           * Access Roles
           * @description Array of access roles assigned to the user.
           */
          access_roles: string[];
          /**
           * Avatar Url
           * @description URL to the user's avatar.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Cost Rate
           * @description Cost rate for the user.
           * @default null
           */
          cost_rate: number | null;
          /**
           * Created At
           * @description Date and time the user was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Default Hourly Rate
           * @description Default hourly rate for the user.
           * @default null
           */
          default_hourly_rate: number | null;
          /**
           * Email
           * @description The email address of the user.
           */
          email: string;
          /**
           * First Name
           * @description The first name of the user.
           */
          first_name: string;
          /**
           * Has Access To All Future Projects
           * @description Whether the user has access to all future projects.
           */
          has_access_to_all_future_projects: boolean;
          /**
           * Id
           * @description Unique ID for the user.
           */
          id: number;
          /**
           * Is Active
           * @description Whether the user is active.
           */
          is_active: boolean;
          /**
           * Is Contractor
           * @description Whether the user is a contractor.
           */
          is_contractor: boolean;
          /**
           * Last Name
           * @description The last name of the user.
           */
          last_name: string;
          /**
           * Telephone
           * @description The user's telephone number.
           * @default null
           */
          telephone: string | null;
          /**
           * Timezone
           * @description The timezone of the user.
           */
          timezone: string;
          /**
           * Updated At
           * @description Date and time the user was last updated, in ISO 8601 format.
           */
          updated_at: string;
          /**
           * Weekly Capacity
           * @description Weekly capacity in seconds.
           */
          weekly_capacity: number;
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
 * Type of HARVEST's HARVEST_UPDATE_CLIENT tool input.
 */
type HARVEST_UPDATE_CLIENT_INPUT = {
  /**
   * Address
   * @description The client's physical address. May include new line characters.
   * @default null
   */
  address: string | null;
  /**
   * Client Id
   * @description Unique ID of the client to update
   */
  client_id?: number;
  /**
   * Currency
   * @description ISO currency code for the client.
   * @default null
   */
  currency: string | null;
  /**
   * Is Active
   * @description Whether the client is active or archived.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Name
   * @description A textual description of the client.
   * @default null
   */
  name: string | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_CLIENT tool output.
 */
type HARVEST_UPDATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The client's physical address.
       * @default null
       */
      address: string | null;
      /**
       * Created At
       * @description Date and time the client was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Currency
       * @description The currency code associated with this client.
       */
      currency: string;
      /**
       * Id
       * @description Unique ID for the client.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the client is active or archived.
       */
      is_active: boolean;
      /**
       * Name
       * @description A textual description of the client.
       */
      name: string;
      /**
       * Statement Key
       * @description Key to build the client's invoice dashboard URL.
       */
      statement_key: string;
      /**
       * Updated At
       * @description Date and time the client was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_UPDATE_CLIENT_CONTACT tool input.
 */
type HARVEST_UPDATE_CLIENT_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description ID of the contact to update.
   */
  contact_id?: number;
  /**
   * Email
   * Format: email
   * @description Contact's email address.
   */
  email?: unknown;
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
   * Phone Mobile
   * @description Contact's mobile phone number.
   * @default null
   */
  phone_mobile: string | null;
  /**
   * Phone Office
   * @description Contact's office phone number.
   * @default null
   */
  phone_office: string | null;
  /**
   * Title
   * @description Title of the contact (e.g., 'Director of Ops').
   * @default null
   */
  title: string | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_CLIENT_CONTACT tool output.
 */
type HARVEST_UPDATE_CLIENT_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Indicates if the contact is archived.
       */
      archived: boolean;
      /**
       * Client Id
       * @description ID of the associated client.
       */
      client_id: number;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the contact was created.
       */
      created_at: string;
      /**
       * Email
       * @description Contact's email address.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact.
       */
      first_name: string;
      /**
       * Id
       * @description ID of the updated contact.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Phone Mobile
       * @description Contact's mobile phone number.
       * @default null
       */
      phone_mobile: string | null;
      /**
       * Phone Office
       * @description Contact's office phone number.
       * @default null
       */
      phone_office: string | null;
      /**
       * Title
       * @description Title of the contact.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the contact was last updated.
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
 * Type of HARVEST's HARVEST_UPDATE_COMPANY_INFO tool input.
 */
type HARVEST_UPDATE_COMPANY_INFO_INPUT = {
  /**
   * Color Scheme
   * @description Color scheme for the Harvest UI (e.g., 'green', 'blue').
   * @default null
   */
  color_scheme: string | null;
  /**
   * Currency
   * @description The ISO currency code for the company.
   * @default null
   */
  currency: string | null;
  /**
   * Decimal Symbol
   * @description Character used as a decimal separator in amounts.
   * @default null
   */
  decimal_symbol: string | null;
  /**
   * Name
   * @description The name of the company.
   * @default null
   */
  name: string | null;
  /**
   * Thousands Separator
   * @description Character used to separate thousands in amounts.
   * @default null
   */
  thousands_separator: string | null;
  /**
   * Timezone
   * @description The timezone for the company, in IANA format.
   * @default null
   */
  timezone: string | null;
  /**
   * Week Start Day
   * @description The day the week begins in the company settings.
   * @default null
   * @enum {string|null}
   */
  week_start_day: "Saturday" | "Sunday" | "Monday" | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_COMPANY_INFO tool output.
 */
type HARVEST_UPDATE_COMPANY_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approval Feature
       * @description Whether the approval module is enabled.
       */
      approval_feature: boolean;
      /**
       * Base Uri
       * @description The Harvest URL for the company.
       */
      base_uri: string;
      /**
       * Clock
       * @description Whether the company uses a 12-hour or 24-hour clock.
       * @enum {string}
       */
      clock: "12h" | "24h";
      /**
       * Color Scheme
       * @description The color scheme being used in the Harvest web client.
       */
      color_scheme: string;
      /**
       * Currency Code Display
       * @description How to display the currency code when formatting currency.
       * @enum {string}
       */
      currency_code_display: "iso_code_none" | "iso_code_before" | "iso_code_after";
      /**
       * Currency Symbol Display
       * @description How to display the currency symbol when formatting currency.
       * @enum {string}
       */
      currency_symbol_display: "symbol_none" | "symbol_before" | "symbol_after";
      /**
       * Date Format
       * @description The format used to display date in Harvest.
       * @enum {string}
       */
      date_format: "%m/%d/%Y" | "%d/%m/%Y" | "%Y-%m-%d" | "%d.%m.%Y" | "%Y.%m.%d" | "%Y/%m/%d";
      /**
       * Decimal Symbol
       * @description Symbol used when formatting decimals.
       */
      decimal_symbol: string;
      /**
       * Estimate Feature
       * @description Whether the estimate module is enabled.
       */
      estimate_feature: boolean;
      /**
       * Expense Feature
       * @description Whether the expense module is enabled.
       */
      expense_feature: boolean;
      /**
       * Full Domain
       * @description The Harvest domain for the company.
       */
      full_domain: string;
      /**
       * Invoice Feature
       * @description Whether the invoice module is enabled.
       */
      invoice_feature: boolean;
      /**
       * Is Active
       * @description Whether the company is active (true) or archived (false).
       */
      is_active: boolean;
      /**
       * Name
       * @description The name of the company.
       */
      name: string;
      /**
       * Plan Type
       * @description The type of plan the company is on, e.g., trial, free, simple-v4.
       */
      plan_type: string;
      /**
       * Team Feature
       * @description Whether the team scheduling module is enabled.
       */
      team_feature: boolean;
      /**
       * Thousands Separator
       * @description Separator used when formatting numbers.
       */
      thousands_separator: string;
      /**
       * Time Format
       * @description The format used to display time in Harvest.
       * @enum {string}
       */
      time_format: "decimal" | "hours_minutes";
      /**
       * Wants Timestamp Timers
       * @description Whether time is tracked via duration or start and end times.
       */
      wants_timestamp_timers: boolean;
      /**
       * Week Start Day
       * @description The weekday used as the start of the week.
       * @enum {string}
       */
      week_start_day: "Saturday" | "Sunday" | "Monday";
      /**
       * Weekly Capacity
       * @description The weekly capacity in seconds, must be non-negative.
       */
      weekly_capacity: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_ESTIMATE tool input.
 */
type HARVEST_UPDATE_ESTIMATE_INPUT = {
  /**
   * Client Id
   * @description The ID of the client this estimate belongs to.
   * @default null
   */
  client_id: number | null;
  /**
   * Currency
   * @description Currency code for the estimate; defaults to client's currency.
   * @default null
   */
  currency: string | null;
  /**
   * Discount
   * @description Discount percentage subtracted from the subtotal, e.g., 15.0 for 15%.
   * @default null
   */
  discount: number | null;
  /**
   * Estimate Id
   * @description Unique ID of the estimate to update.
   */
  estimate_id?: number;
  /**
   * Issue Date
   * @description Date the estimate was issued (YYYY-MM-DD).
   * @default null
   */
  issue_date: string | null;
  /**
   * Line Items
   * @description List of line items to update or add. Omit unchanged items.
   * @default null
   */
  line_items: {
      /**
       * Description
       * @description Text description of the line item.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID for the estimate line item.
       * @default null
       */
      id: number | null;
      /**
       * Kind
       * @description The name of an estimate item category.
       * @default null
       */
      kind: string | null;
      /**
       * Quantity
       * @description Unit quantity of the item (defaults to 1).
       * @default null
       */
      quantity: number | null;
      /**
       * Taxed
       * @description Whether the estimate's first tax applies to this line item.
       * @default null
       */
      taxed: boolean | null;
      /**
       * Taxed2
       * @description Whether the estimate's second tax applies to this line item.
       * @default null
       */
      taxed2: boolean | null;
      /**
       * Unit Price
       * @description Individual price per unit.
       * @default null
       */
      unit_price: number | null;
  }[] | null;
  /**
   * Notes
   * @description Additional notes for the estimate.
   * @default null
   */
  notes: string | null;
  /**
   * Number
   * @description Custom estimate number. Auto-generated if omitted.
   * @default null
   */
  number: string | null;
  /**
   * Purchase Order
   * @description The purchase order number.
   * @default null
   */
  purchase_order: string | null;
  /**
   * Subject
   * @description Estimate subject line.
   * @default null
   */
  subject: string | null;
  /**
   * Tax
   * @description First tax percentage applied to the subtotal, e.g., 10.0 for 10%.
   * @default null
   */
  tax: number | null;
  /**
   * Tax2
   * @description Second tax percentage applied to the subtotal, e.g., 5.0 for 5%.
   * @default null
   */
  tax2: number | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_ESTIMATE tool output.
 */
type HARVEST_UPDATE_ESTIMATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accepted At
       * @description Datetime when estimate was accepted.
       * @default null
       */
      accepted_at: string | null;
      /**
       * Amount
       * @description Total amount including discounts and taxes.
       */
      amount: number;
      /**
       * Client
       * @description Client associated with the estimate.
       */
      client: {
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Client Key
       * @description Unique key identifying the estimate.
       */
      client_key: string;
      /**
       * Created At
       * @description Datetime when estimate was created.
       */
      created_at: string;
      /**
       * Creator
       * @description User who created the estimate.
       */
      creator: {
          /**
           * Id
           * @description Unique ID for the user who created the estimate.
           */
          id: number;
          /**
           * Name
           * @description Name of the user who created the estimate.
           */
          name: string;
      };
      /**
       * Currency
       * @description Currency used by the estimate.
       */
      currency: string;
      /**
       * Declined At
       * @description Datetime when estimate was declined.
       * @default null
       */
      declined_at: string | null;
      /**
       * Discount
       * @description Discount percentage applied to estimate.
       */
      discount: number;
      /**
       * Discount Amount
       * @description Monetary amount from discount.
       */
      discount_amount: number;
      /**
       * Id
       * @description Unique ID for the estimate.
       */
      id: number;
      /**
       * Issue Date
       * @description Date the estimate was issued (YYYY-MM-DD).
       */
      issue_date: string;
      /**
       * Line Items
       * @description Line items associated with the estimate.
       */
      line_items: {
          /**
           * Amount
           * @description Line item subtotal (quantity * unit_price).
           */
          amount: number;
          /**
           * Description
           * @description Text description of the line item.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID for the line item.
           */
          id: number;
          /**
           * Kind
           * @description Estimate item category name.
           * @default null
           */
          kind: string | null;
          /**
           * Quantity
           * @description Unit quantity of the item.
           */
          quantity: number;
          /**
           * Taxed
           * @description Whether the estimate's first tax applies to this line item.
           */
          taxed: boolean;
          /**
           * Taxed2
           * @description Whether the estimate's second tax applies to this line item.
           */
          taxed2: boolean;
          /**
           * Unit Price
           * @description Individual price per unit.
           */
          unit_price: number;
      }[];
      /**
       * Notes
       * @description Notes included on the estimate.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Estimate number.
       */
      number: string;
      /**
       * Purchase Order
       * @description Purchase order number.
       * @default null
       */
      purchase_order: string | null;
      /**
       * Sent At
       * @description Datetime when estimate was sent.
       * @default null
       */
      sent_at: string | null;
      /**
       * State
       * @description Current state of the estimate.
       */
      state: string;
      /**
       * Subject
       * @description Estimate subject.
       * @default null
       */
      subject: string | null;
      /**
       * Tax
       * @description First tax percentage applied to estimate.
       */
      tax: number;
      /**
       * Tax2
       * @description Second tax percentage applied to estimate.
       */
      tax2: number;
      /**
       * Tax2 Amount
       * @description Monetary amount from second tax.
       */
      tax2_amount: number;
      /**
       * Tax Amount
       * @description Monetary amount from first tax.
       */
      tax_amount: number;
      /**
       * Updated At
       * @description Datetime when estimate was last updated.
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
 * Type of HARVEST's HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY tool input.
 */
type HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY_INPUT = {
  /**
   * Estimate Item Category Id
   * @description Unique ID of the estimate item category to update
   */
  estimate_item_category_id?: number;
  /**
   * Name
   * @description The new name for the estimate item category.
   * @default null
   */
  name: string | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY tool output.
 */
type HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Time when the category was created in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID of the estimate item category
       */
      id: number;
      /**
       * Name
       * @description Name of the estimate item category
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Time when the category was last updated in ISO 8601 format
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
 * Type of HARVEST's HARVEST_UPDATE_EXPENSE tool input.
 */
type HARVEST_UPDATE_EXPENSE_INPUT = {
  /**
   * Billable
   * @description Whether the expense is billable.
   * @default null
   */
  billable: boolean | null;
  /**
   * Delete Receipt
   * @description Pass true to delete the attached receipt.
   * @default null
   */
  delete_receipt: boolean | null;
  /**
   * Expense Category Id
   * @description ID of the expense category for this expense.
   * @default null
   */
  expense_category_id: number | null;
  /**
   * Expense Id
   * @description Unique ID of the expense to update
   */
  expense_id?: number;
  /**
   * Notes
   * @description Notes or description for the expense.
   * @default null
   */
  notes: string | null;
  /**
   * Project Id
   * @description ID of the project associated with this expense.
   * @default null
   */
  project_id: number | null;
  /**
   * Spent Date
   * @description Date the expense occurred (YYYY-MM-DD)
   * @default null
   */
  spent_date: string | null;
  /**
   * Total Cost
   * @description Total amount of the expense.
   * @default null
   */
  total_cost: number | null;
  /**
   * Units
   * @description Quantity of units used to calculate the expense total.
   * @default null
   */
  units: number | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_EXPENSE tool output.
 */
type HARVEST_UPDATE_EXPENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the expense is billable
       */
      billable: boolean;
      /**
       * Client
       * @description Client associated with the expense
       */
      client: {
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name
           */
          name: string;
      };
      /**
       * Created At
       * @description Timestamp when the expense was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code for the expense
       * @default null
       */
      currency: string | null;
      /**
       * Exchange Rate
       * @description Exchange rate if currency differs from project
       * @default null
       */
      exchange_rate: number | null;
      /**
       * Expense Category
       * @description Category associated with the expense
       */
      expense_category: {
          /**
           * Id
           * @description Expense category ID
           */
          id: number;
          /**
           * Name
           * @description Expense category name
           */
          name: string;
      };
      /**
       * Has Receipt
       * @description Whether the expense has a receipt attached
       * @default null
       */
      has_receipt: boolean | null;
      /**
       * Id
       * @description Unique ID for the expense
       */
      id: number;
      /**
       * ExpenseInvoice
       * @description Invoice details if the expense has been invoiced
       * @default null
       */
      invoice: {
          /**
           * Id
           * @description Invoice ID
           */
          id: number;
      } | null;
      /**
       * Is Billed
       * @description Whether the expense has been billed
       */
      is_billed: boolean;
      /**
       * Is Closed
       * @description Whether the expense is closed
       */
      is_closed: boolean;
      /**
       * Is Deleted
       * @description Whether the expense has been deleted
       * @default null
       */
      is_deleted: boolean | null;
      /**
       * Is Locked
       * @description Whether the expense is locked
       */
      is_locked: boolean;
      /**
       * Notes
       * @description Notes for the expense
       * @default null
       */
      notes: string | null;
      /**
       * Project
       * @description Project associated with the expense
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * ExpenseReceipt
       * @description Receipt details if a receipt is attached
       * @default null
       */
      receipt: {
          /**
           * File Name
           * @description Receipt file name
           */
          file_name: string;
          /**
           * File Size
           * @description Receipt file size in bytes
           */
          file_size: number;
          /**
           * Url
           * @description URL for the receipt image
           */
          url: string;
      } | null;
      /**
       * Spent Date
       * @description Date the expense occurred
       */
      spent_date: string;
      /**
       * Total Cost
       * @description Total amount of the expense
       */
      total_cost: number | null;
      /**
       * Units
       * @description Quantity of units for the expense
       * @default null
       */
      units: number | null;
      /**
       * Updated At
       * @description Timestamp when the expense was last updated
       */
      updated_at: string;
      /**
       * User
       * @description User who created the expense
       */
      user: {
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
           */
          name: string;
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
 * Type of HARVEST's HARVEST_UPDATE_INVOICE tool input.
 */
type HARVEST_UPDATE_INVOICE_INPUT = {
  /**
   * Client Id
   * @description ID of the client this invoice belongs to.
   * @default null
   */
  client_id: number | null;
  /**
   * Currency
   * @description Currency code (e.g., USD).
   * @default null
   */
  currency: string | null;
  /**
   * Discount
   * @description Discount percentage applied to the invoice.
   * @default null
   */
  discount: number | null;
  /**
   * Due Date
   * Format: date
   * @description Date the invoice is due (YYYY-MM-DD).
   * @default null
   */
  due_date: string | null;
  /**
   * Estimate Id
   * @description ID of the estimate associated with this invoice.
   * @default null
   */
  estimate_id: number | null;
  /**
   * Invoice Id
   * @description Unique ID of the invoice to update.
   */
  invoice_id?: number;
  /**
   * Issue Date
   * Format: date
   * @description Date the invoice was issued (YYYY-MM-DD).
   * @default null
   */
  issue_date: string | null;
  /**
   * Line Items
   * @description Array of line item objects to update or add.
   * @default null
   */
  line_items: {
      /**
       * Description
       * @description Text description of the line item.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID for the line item.
       * @default null
       */
      id: number | null;
      /**
       * Kind
       * @description Name of an invoice item category.
       * @default null
       */
      kind: string | null;
      /**
       * Project Id
       * @description ID of the project associated with the line item.
       * @default null
       */
      project_id: number | null;
      /**
       * Quantity
       * @description Unit quantity of the item.
       * @default null
       */
      quantity: number | null;
      /**
       * Taxed
       * @description Whether the invoice's tax percentage applies to this line item.
       * @default null
       */
      taxed: boolean | null;
      /**
       * Taxed2
       * @description Whether the invoice's tax2 percentage applies to this line item.
       * @default null
       */
      taxed2: boolean | null;
      /**
       * Unit Price
       * @description Individual price per unit.
       * @default null
       */
      unit_price: number | null;
  }[] | null;
  /**
   * Notes
   * @description Additional notes to include on the invoice.
   * @default null
   */
  notes: string | null;
  /**
   * Number
   * @description Custom invoice number.
   * @default null
   */
  number: string | null;
  /**
   * Payment Options
   * @description Payment options available: 'ach', 'credit_card', or 'paypal'.
   * @default null
   */
  payment_options: string[] | null;
  /**
   * Payment Term
   * @description Payment timeframe: 'upon receipt', 'net 15', 'net 30', 'net 45', or 'net 60'.
   * @default null
   * @enum {string|null}
   */
  payment_term: "upon receipt" | "net 15" | "net 30" | "net 45" | "net 60" | null;
  /**
   * Purchase Order
   * @description The purchase order number.
   * @default null
   */
  purchase_order: string | null;
  /**
   * Retainer Id
   * @description ID of the retainer associated with this invoice.
   * @default null
   */
  retainer_id: number | null;
  /**
   * Subject
   * @description The invoice subject.
   * @default null
   */
  subject: string | null;
  /**
   * Tax
   * @description Tax percentage applied to the invoice.
   * @default null
   */
  tax: number | null;
  /**
   * Tax2
   * @description Additional tax percentage applied.
   * @default null
   */
  tax2: number | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_INVOICE tool output.
 */
type HARVEST_UPDATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Total amount of the invoice.
       */
      amount: number | null;
      /**
       * Client
       * @description Client info associated with the invoice.
       */
      client: {
          /**
           * Id
           * @description ID of the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Closed At
       * @description Date and time the invoice was closed (ISO 8601).
       * @default null
       */
      closed_at: string | null;
      /**
       * Created At
       * @description Date and time the invoice was created (ISO 8601).
       */
      created_at: string;
      /**
       * Creator
       * @description Creator of the invoice.
       */
      creator: {
          /**
           * Id
           * @description ID of the creator.
           */
          id: number;
          /**
           * Name
           * @description Name of the creator.
           */
          name: string;
      };
      /**
       * Currency
       * @description Currency code associated with the invoice.
       */
      currency: string;
      /**
       * Discount
       * @description Discount percentage applied.
       * @default null
       */
      discount: number | null;
      /**
       * Discount Amount
       * @description Amount from discount.
       */
      discount_amount: number | null;
      /**
       * Due Amount
       * @description Amount due on the invoice.
       */
      due_amount: number | null;
      /**
       * Due Date
       * @description Date the invoice is due (YYYY-MM-DD).
       */
      due_date: string;
      /**
       * EstimateInfo
       * @description associated estimate ID, if any.
       * @default null
       */
      estimate: {
          /**
           * Id
           * @description ID of the associated estimate.
           */
          id: number;
      } | null;
      /**
       * Id
       * @description ID of the invoice.
       */
      id: number;
      /**
       * Issue Date
       * @description Date the invoice was issued (YYYY-MM-DD).
       */
      issue_date: string;
      /**
       * Line Items
       * @description Line items on the invoice.
       */
      line_items: {
          /**
           * Amount
           * @description Line item subtotal (quantity * unit_price).
           */
          amount: number | null;
          /**
           * Description
           * @description Text description of the line item.
           */
          description: string;
          /**
           * Id
           * @description ID of the line item.
           */
          id: number;
          /**
           * ProjectInfo
           * @description Associated project info.
           * @default null
           */
          project: {
              /**
               * Code
               * @description Code of the project.
               * @default null
               */
              code: string | null;
              /**
               * Id
               * @description ID of the project.
               */
              id: number;
              /**
               * Name
               * @description Name of the project.
               */
              name: string;
          } | null;
          /**
           * Quantity
           * @description Unit quantity of the item.
           */
          quantity: number | null;
          /**
           * Taxed
           * @description Whether first tax applies to this line item.
           */
          taxed: boolean;
          /**
           * Taxed2
           * @description Whether second tax applies to this line item.
           */
          taxed2: boolean;
          /**
           * Unit Price
           * @description Unit price of the item.
           */
          unit_price: number | null;
      }[];
      /**
       * Notes
       * @description Notes on the invoice.
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Invoice number.
       */
      number: string;
      /**
       * Paid At
       * @description Date and time the invoice was paid (ISO 8601).
       * @default null
       */
      paid_at: string | null;
      /**
       * Paid Date
       * @description Date the invoice was paid (YYYY-MM-DD).
       * @default null
       */
      paid_date: string | null;
      /**
       * Payment Options
       * @description Available payment options.
       */
      payment_options: {
          /**
           * Fee
           * @description Fee amount for this option.
           */
          fee: number | null;
          /**
           * Fee Type
           * @description Type of fee: percent or fixed.
           * @enum {string}
           */
          fee_type: "percent" | "fixed";
          /**
           * Payment Gateway
           * @description Payment gateway info.
           */
          payment_gateway: {
              /**
               * Id
               * @description ID of the payment gateway.
               */
              id: number;
              /**
               * Name
               * @description Name of the payment gateway.
               */
              name: string;
          };
      }[];
      /**
       * Payment Term
       * @description Payment terms for the invoice.
       * @default null
       */
      payment_term: string | null;
      /**
       * Period End
       * @description End date of the period (YYYY-MM-DD).
       * @default null
       */
      period_end: string | null;
      /**
       * Period Start
       * @description Start date of the period (YYYY-MM-DD).
       * @default null
       */
      period_start: string | null;
      /**
       * Purchase Order
       * @description Purchase order number.
       * @default null
       */
      purchase_order: string | null;
      /**
       * Recurring Invoice Id
       * @description ID of the recurring invoice.
       * @default null
       */
      recurring_invoice_id: number | null;
      /**
       * RetainerInfo
       * @description associated retainer ID, if any.
       * @default null
       */
      retainer: {
          /**
           * Id
           * @description ID of the associated retainer.
           */
          id: number;
      } | null;
      /**
       * Sent At
       * @description Date and time the invoice was sent (ISO 8601).
       * @default null
       */
      sent_at: string | null;
      /**
       * State
       * @description State of the invoice.
       * @enum {string}
       */
      state: "draft" | "open" | "paid" | "closed";
      /**
       * Subject
       * @description Subject of the invoice.
       * @default null
       */
      subject: string | null;
      /**
       * Tax
       * @description First tax rate applied.
       * @default null
       */
      tax: number | null;
      /**
       * Tax2
       * @description Second tax rate applied.
       * @default null
       */
      tax2: number | null;
      /**
       * Tax2 Amount
       * @description Amount from the second tax.
       */
      tax2_amount: number | null;
      /**
       * Tax Amount
       * @description Amount from the first tax.
       */
      tax_amount: number | null;
      /**
       * Updated At
       * @description Date and time the invoice was last updated (ISO 8601).
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
 * Type of HARVEST's HARVEST_UPDATE_PROJECT tool input.
 */
type HARVEST_UPDATE_PROJECT_INPUT = {
  /**
   * Bill By
   * @description Billing method: 'Project', 'Tasks', 'People', or 'none'
   * @default null
   * @enum {string|null}
   */
  bill_by: "Project" | "Tasks" | "People" | "none" | null;
  /**
   * Budget
   * @description Time budget in hours when budgeting by hours
   * @default null
   */
  budget: number | null;
  /**
   * Budget By
   * @description Budgeting method: 'project' (hours per project), 'project_cost' (total fees), 'task' (hours per task), 'task_fees' (fees per task), 'person' (hours per person), or 'none'
   * @default null
   * @enum {string|null}
   */
  budget_by: "project" | "project_cost" | "task" | "task_fees" | "person" | "none" | null;
  /**
   * Budget Is Monthly
   * @description If true, reset budget each month; defaults to false
   * @default null
   */
  budget_is_monthly: boolean | null;
  /**
   * Client Id
   * @description ID of the client to associate this project with
   * @default null
   */
  client_id: number | null;
  /**
   * Code
   * @description Project code identifier
   * @default null
   */
  code: string | null;
  /**
   * Cost Budget
   * @description Monetary budget when budgeting by money
   * @default null
   */
  cost_budget: number | null;
  /**
   * Cost Budget Include Expenses
   * @description Include tracked expenses in 'project_cost' budgets; defaults to false
   * @default null
   */
  cost_budget_include_expenses: boolean | null;
  /**
   * Ends On
   * Format: date
   * @description Project end date (YYYY-MM-DD)
   * @default null
   */
  ends_on: string | null;
  /**
   * Fee
   * @description Fixed-fee amount to invoice for fixed-fee projects
   * @default null
   */
  fee: number | null;
  /**
   * Hourly Rate
   * @description Hourly rate when billed by project hourly rate
   * @default null
   */
  hourly_rate: number | null;
  /**
   * Is Active
   * @description Whether the project is active (true) or archived (false)
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Billable
   * @description Whether time on this project is billable
   * @default null
   */
  is_billable: boolean | null;
  /**
   * Is Fixed Fee
   * @description Whether this is a fixed-fee project
   * @default null
   */
  is_fixed_fee: boolean | null;
  /**
   * Name
   * @description Name of the project
   * @default null
   */
  name: string | null;
  /**
   * Notes
   * @description Project notes or description
   * @default null
   */
  notes: string | null;
  /**
   * Notify When Over Budget
   * @description Email managers when over budget; defaults to false
   * @default null
   */
  notify_when_over_budget: boolean | null;
  /**
   * Over Budget Notification Percentage
   * @description Threshold percent to trigger over-budget alerts (e.g., 80.0)
   * @default null
   */
  over_budget_notification_percentage: number | null;
  /**
   * Project Id
   * @description Unique ID of the project to update
   */
  project_id?: number;
  /**
   * Show Budget To All
   * @description Show budget to all employees; defaults to false
   * @default null
   */
  show_budget_to_all: boolean | null;
  /**
   * Starts On
   * Format: date
   * @description Project start date (YYYY-MM-DD)
   * @default null
   */
  starts_on: string | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_PROJECT tool output.
 */
type HARVEST_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bill By
       * @description Billing method for the project.
       * @default null
       */
      bill_by: string | null;
      /**
       * Budget
       * @description Budget for the project.
       * @default null
       */
      budget: number | null;
      /**
       * Budget By
       * @description Budget calculation method.
       * @default null
       */
      budget_by: string | null;
      /**
       * Budget Is Monthly
       * @description Whether the budget resets monthly.
       */
      budget_is_monthly: boolean;
      /**
       * Client
       * @description Client object nested inside project.
       */
      client: {
          /**
           * Currency
           * @description Currency code for the client (ISO 4217).
           */
          currency: string;
          /**
           * Id
           * @description Unique ID for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
           */
          name: string;
      };
      /**
       * Code
       * @description Project code.
       * @default null
       */
      code: string | null;
      /**
       * Cost Budget
       * @description Cost budget for the project.
       * @default null
       */
      cost_budget: number | null;
      /**
       * Cost Budget Include Expenses
       * @description Whether expenses are included in the cost budget.
       */
      cost_budget_include_expenses: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the project was created.
       */
      created_at: string;
      /**
       * Ends On
       * Format: date
       * @description Project end date (YYYY-MM-DD).
       * @default null
       */
      ends_on: string | null;
      /**
       * Fee
       * @description Fee for the project when billing by project.
       * @default null
       */
      fee: number | null;
      /**
       * Hint Earliest Record At
       * Format: date
       * @description Earliest record date for the project.
       * @default null
       */
      hint_earliest_record_at: string | null;
      /**
       * Hint Latest Record At
       * Format: date
       * @description Latest record date for the project.
       * @default null
       */
      hint_latest_record_at: string | null;
      /**
       * Hourly Rate
       * @description Hourly rate for the project.
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique ID for the project.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the project is active.
       */
      is_active: boolean;
      /**
       * Is Billable
       * @description Whether the project is billable.
       */
      is_billable: boolean;
      /**
       * Is Fixed Fee
       * @description Whether the project is a fixed-fee project.
       */
      is_fixed_fee: boolean;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Notify When Over Budget
       * @description Notify when the budget is exceeded.
       */
      notify_when_over_budget: boolean;
      /**
       * Over Budget Notification Date
       * Format: date-time
       * @description Date of the last over budget notification.
       * @default null
       */
      over_budget_notification_date: string | null;
      /**
       * Over Budget Notification Percentage
       * @description Percentage threshold for over-budget notification.
       * @default null
       */
      over_budget_notification_percentage: number | null;
      /**
       * Show Budget To All
       * @description Whether the budget is visible to all users.
       */
      show_budget_to_all: boolean;
      /**
       * Starts On
       * Format: date
       * @description Project start date (YYYY-MM-DD).
       * @default null
       */
      starts_on: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the project was last updated.
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
 * Type of HARVEST's HARVEST_UPDATE_TASK tool input.
 */
type HARVEST_UPDATE_TASK_INPUT = {
  /**
   * Billable By Default
   * @description Whether new projects with this task are billable by default.
   * @default null
   */
  billable_by_default: boolean | null;
  /**
   * Default Hourly Rate
   * @description Default hourly rate when this task is added to a project.
   * @default null
   */
  default_hourly_rate: number | null;
  /**
   * Is Active
   * @description Whether this task is active (true) or archived (false).
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Default
   * @description Whether this task should be automatically added to future projects.
   * @default null
   */
  is_default: boolean | null;
  /**
   * Name
   * @description New name for the task.
   * @default null
   */
  name: string | null;
  /**
   * Task Id
   * @description Unique ID of the task to update
   */
  task_id?: number;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_TASK tool output.
 */
type HARVEST_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable By Default
       * @description Whether new projects with this task are billable by default.
       */
      billable_by_default: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Date and time the task was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Default Hourly Rate
       * @description Default hourly rate when the task is added to a project.
       */
      default_hourly_rate: number;
      /**
       * Id
       * @description Unique ID for the task.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the task is active or archived.
       */
      is_active: boolean;
      /**
       * Is Default
       * @description Whether the task is automatically added to future projects.
       */
      is_default: boolean;
      /**
       * Name
       * @description The name of the task.
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Date and time the task was last updated, in ISO 8601 format.
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
 * Type of HARVEST's HARVEST_UPDATE_TIME_ENTRY tool input.
 */
type HARVEST_UPDATE_TIME_ENTRY_INPUT = {
  /**
   * Ended Time
   * @description The time the entry ended (e.g., '5:00pm'); if omitted, timer remains running
   * @default null
   */
  ended_time: string | null;
  /**
   * Hours
   * @description The updated number of hours for the time entry.
   * @default null
   */
  hours: number | null;
  /**
   * Notes
   * @description The updated notes for the time entry.
   * @default null
   */
  notes: string | null;
  /**
   * Project Id
   * @description ID of the project associated with the time entry.
   * @default null
   */
  project_id: number | null;
  /**
   * Spent Date
   * @description The date the time entry was spent (YYYY-MM-DD)
   * @default null
   */
  spent_date: string | null;
  /**
   * Started Time
   * @description The time the entry started (e.g., '9:00am'); omit ended_time for running timer
   * @default null
   */
  started_time: string | null;
  /**
   * Task Id
   * @description ID of the task associated with the time entry.
   * @default null
   */
  task_id: number | null;
  /**
   * Time Entry Id
   * @description Unique ID of the time entry to update
   */
  time_entry_id?: number;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_TIME_ENTRY tool output.
 */
type HARVEST_UPDATE_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the time entry is billable
       */
      billable: boolean;
      /**
       * Billable Rate
       * @description Billable rate for the time entry
       */
      billable_rate: number | null;
      /**
       * Budgeted
       * @description Whether the time entry is budgeted
       */
      budgeted: boolean;
      /**
       * Client
       * @description Client associated with the time entry
       */
      client: {
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name
           */
          name: string;
      };
      /**
       * Cost Rate
       * @description Cost rate for the time entry
       */
      cost_rate: number | null;
      /**
       * Created At
       * @description Timestamp when the time entry was created
       */
      created_at: string;
      /**
       * Ended Time
       * @description Time the entry ended
       * @default null
       */
      ended_time: string | null;
      /**
       * Hours
       * @description Total hours tracked
       */
      hours: number | null;
      /**
       * Id
       * @description Unique ID for the time entry
       */
      id: number;
      /**
       * Is Billed
       * @description Whether the time entry is billed
       */
      is_billed: boolean;
      /**
       * Is Closed
       * @description Whether the time entry is closed
       */
      is_closed: boolean;
      /**
       * Is Locked
       * @description Whether the time entry is locked
       */
      is_locked: boolean;
      /**
       * Is Running
       * @description Whether the timer is currently running
       */
      is_running: boolean;
      /**
       * Locked Reason
       * @description Reason why the time entry is locked
       * @default null
       */
      locked_reason: string | null;
      /**
       * Notes
       * @description Notes associated with the time entry
       * @default null
       */
      notes: string | null;
      /**
       * Project
       * @description Project associated with the time entry
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * Rounded Hours
       * @description Rounded hours
       */
      rounded_hours: number | null;
      /**
       * Spent Date
       * @description Date the time entry was spent
       */
      spent_date: string;
      /**
       * Started Time
       * @description Time the entry started
       * @default null
       */
      started_time: string | null;
      /**
       * Task
       * @description Task associated with the time entry
       */
      task: {
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
      };
      /**
       * Timer Started At
       * @description Timestamp when the timer was started
       * @default null
       */
      timer_started_at: string | null;
      /**
       * Updated At
       * @description Timestamp when the time entry was last updated
       */
      updated_at: string;
      /**
       * User
       * @description User who created the time entry
       */
      user: {
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
           */
          name: string;
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
 * Type of HARVEST's HARVEST_UPDATE_USER tool input.
 */
type HARVEST_UPDATE_USER_INPUT = {
  /**
   * Access Roles
   * @description Access roles that determine the user’s permissions in Harvest. Possible values: administrator, manager, member, project_creator, billable_rates_manager, managed_projects_invoice_drafter, managed_projects_invoice_manager, client_and_task_manager, time_and_expenses_manager, estimates_manager.
   * @default null
   */
  access_roles: string[] | null;
  /**
   * Email
   * @description The email address of the user. Cannot be updated if the user is inactive.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description The first name of the user. Cannot be updated if the user is inactive.
   * @default null
   */
  first_name: string | null;
  /**
   * Has Access To All Future Projects
   * @description Whether the user should be automatically added to future projects. Defaults to false.
   * @default null
   */
  has_access_to_all_future_projects: boolean | null;
  /**
   * Is Active
   * @description Whether the user is active or archived.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Contractor
   * @description Whether the user is a contractor or an employee. Defaults to false.
   * @default null
   */
  is_contractor: boolean | null;
  /**
   * Last Name
   * @description The last name of the user. Cannot be updated if the user is inactive.
   * @default null
   */
  last_name: string | null;
  /**
   * Roles
   * @description Descriptive names of the business roles assigned to this person. Used for filtering reports, with no impact on permissions.
   * @default null
   */
  roles: string[] | null;
  /**
   * Timezone
   * @description The user’s timezone. Defaults to the company’s timezone. See supported time zones in the Harvest docs.
   * @default null
   */
  timezone: string | null;
  /**
   * User Id
   * @description Unique ID of the user to update
   */
  user_id?: number;
  /**
   * Weekly Capacity
   * @description The number of hours per week this person is available to work, in seconds. Must be non-negative.
   * @default null
   */
  weekly_capacity: number | null;
};

/**
 * Type of HARVEST's HARVEST_UPDATE_USER tool output.
 */
type HARVEST_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Roles
       * @description Access roles that determine the user’s permissions in Harvest.
       */
      access_roles: string[];
      /**
       * Avatar Url
       * @description URL to the user’s avatar image.
       */
      avatar_url: string;
      /**
       * Cost Rate
       * @description The cost rate to use for this user when calculating project costs.
       * @default null
       */
      cost_rate: number | null;
      /**
       * Created At
       * @description Date and time the user was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Default Hourly Rate
       * @description The billable rate to use for this user when added to a project.
       * @default null
       */
      default_hourly_rate: number | null;
      /**
       * Email
       * @description The email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description The first name of the user.
       */
      first_name: string;
      /**
       * Has Access To All Future Projects
       * @description Whether the user should be automatically added to future projects.
       */
      has_access_to_all_future_projects: boolean;
      /**
       * Id
       * @description Unique ID for the user.
       */
      id: number;
      /**
       * Is Active
       * @description Whether the user is active or archived.
       */
      is_active: boolean;
      /**
       * Is Contractor
       * @description Whether the user is a contractor or an employee.
       */
      is_contractor: boolean;
      /**
       * Last Name
       * @description The last name of the user.
       */
      last_name: string;
      /**
       * Roles
       * @description Descriptive names of the business roles assigned to this person.
       */
      roles: string[];
      /**
       * Telephone
       * @description The user’s telephone number.
       */
      telephone: string;
      /**
       * Timezone
       * @description The user’s timezone.
       */
      timezone: string;
      /**
       * Updated At
       * @description Date and time the user was last updated, in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Weekly Capacity
       * @description The number of hours per week this person is available to work in seconds.
       */
      weekly_capacity: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "HARVEST".
 */
export type HARVEST_TOOL_INPUTS = {
  CREATE_CLIENT: HARVEST_CREATE_CLIENT_INPUT
  CREATE_CLIENT_CONTACT: HARVEST_CREATE_CLIENT_CONTACT_INPUT
  CREATE_ESTIMATE: HARVEST_CREATE_ESTIMATE_INPUT
  CREATE_ESTIMATE_ITEM_CATEGORY: HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY_INPUT
  CREATE_ESTIMATE_MESSAGE: HARVEST_CREATE_ESTIMATE_MESSAGE_INPUT
  CREATE_EXPENSE: HARVEST_CREATE_EXPENSE_INPUT
  CREATE_INVOICE: HARVEST_CREATE_INVOICE_INPUT
  CREATE_INVOICE_ITEM_CATEGORY: HARVEST_CREATE_INVOICE_ITEM_CATEGORY_INPUT
  CREATE_INVOICE_MESSAGE: HARVEST_CREATE_INVOICE_MESSAGE_INPUT
  CREATE_INVOICE_PAYMENT: HARVEST_CREATE_INVOICE_PAYMENT_INPUT
  CREATE_PROJECT: HARVEST_CREATE_PROJECT_INPUT
  CREATE_TASK: HARVEST_CREATE_TASK_INPUT
  CREATE_TIME_ENTRY: HARVEST_CREATE_TIME_ENTRY_INPUT
  CREATE_USER: HARVEST_CREATE_USER_INPUT
  DELETE_CLIENT: HARVEST_DELETE_CLIENT_INPUT
  DELETE_CLIENT_CONTACT: HARVEST_DELETE_CLIENT_CONTACT_INPUT
  DELETE_ESTIMATE: HARVEST_DELETE_ESTIMATE_INPUT
  DELETE_ESTIMATE_MESSAGE: HARVEST_DELETE_ESTIMATE_MESSAGE_INPUT
  DELETE_INVOICE: HARVEST_DELETE_INVOICE_INPUT
  DELETE_INVOICE_ITEM_CATEGORY: HARVEST_DELETE_INVOICE_ITEM_CATEGORY_INPUT
  DELETE_INVOICE_MESSAGE: HARVEST_DELETE_INVOICE_MESSAGE_INPUT
  DELETE_INVOICE_PAYMENT: HARVEST_DELETE_INVOICE_PAYMENT_INPUT
  DELETE_PROJECT: HARVEST_DELETE_PROJECT_INPUT
  DELETE_TASK: HARVEST_DELETE_TASK_INPUT
  DELETE_TIME_ENTRY: HARVEST_DELETE_TIME_ENTRY_INPUT
  DELETE_USER: HARVEST_DELETE_USER_INPUT
  GET_CLIENT: HARVEST_GET_CLIENT_INPUT
  GET_CLIENT_CONTACT: HARVEST_GET_CLIENT_CONTACT_INPUT
  GET_COMPANY_INFO: HARVEST_GET_COMPANY_INFO_INPUT
  GET_ESTIMATE: HARVEST_GET_ESTIMATE_INPUT
  GET_INVOICE: HARVEST_GET_INVOICE_INPUT
  GET_PROJECT: HARVEST_GET_PROJECT_INPUT
  GET_TASK: HARVEST_GET_TASK_INPUT
  GET_TIME_ENTRY: HARVEST_GET_TIME_ENTRY_INPUT
  GET_USER: HARVEST_GET_USER_INPUT
  LIST_CLIENTS: HARVEST_LIST_CLIENTS_INPUT
  LIST_CLIENT_CONTACTS: HARVEST_LIST_CLIENT_CONTACTS_INPUT
  LIST_ESTIMATE_MESSAGES: HARVEST_LIST_ESTIMATE_MESSAGES_INPUT
  LIST_EXPENSE_CATEGORIES: HARVEST_LIST_EXPENSE_CATEGORIES_INPUT
  LIST_INVOICES: HARVEST_LIST_INVOICES_INPUT
  LIST_INVOICE_ITEM_CATEGORIES: HARVEST_LIST_INVOICE_ITEM_CATEGORIES_INPUT
  LIST_INVOICE_MESSAGES: HARVEST_LIST_INVOICE_MESSAGES_INPUT
  LIST_INVOICE_PAYMENTS: HARVEST_LIST_INVOICE_PAYMENTS_INPUT
  LIST_PROJECTS: HARVEST_LIST_PROJECTS_INPUT
  LIST_TASKS: HARVEST_LIST_TASKS_INPUT
  LIST_TIME_ENTRIES: HARVEST_LIST_TIME_ENTRIES_INPUT
  LIST_USERS: HARVEST_LIST_USERS_INPUT
  UPDATE_CLIENT: HARVEST_UPDATE_CLIENT_INPUT
  UPDATE_CLIENT_CONTACT: HARVEST_UPDATE_CLIENT_CONTACT_INPUT
  UPDATE_COMPANY_INFO: HARVEST_UPDATE_COMPANY_INFO_INPUT
  UPDATE_ESTIMATE: HARVEST_UPDATE_ESTIMATE_INPUT
  UPDATE_ESTIMATE_ITEM_CATEGORY: HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY_INPUT
  UPDATE_EXPENSE: HARVEST_UPDATE_EXPENSE_INPUT
  UPDATE_INVOICE: HARVEST_UPDATE_INVOICE_INPUT
  UPDATE_PROJECT: HARVEST_UPDATE_PROJECT_INPUT
  UPDATE_TASK: HARVEST_UPDATE_TASK_INPUT
  UPDATE_TIME_ENTRY: HARVEST_UPDATE_TIME_ENTRY_INPUT
  UPDATE_USER: HARVEST_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HARVEST".
 */
export type HARVEST_TOOL_OUTPUTS = {
  CREATE_CLIENT: HARVEST_CREATE_CLIENT_OUTPUT
  CREATE_CLIENT_CONTACT: HARVEST_CREATE_CLIENT_CONTACT_OUTPUT
  CREATE_ESTIMATE: HARVEST_CREATE_ESTIMATE_OUTPUT
  CREATE_ESTIMATE_ITEM_CATEGORY: HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY_OUTPUT
  CREATE_ESTIMATE_MESSAGE: HARVEST_CREATE_ESTIMATE_MESSAGE_OUTPUT
  CREATE_EXPENSE: HARVEST_CREATE_EXPENSE_OUTPUT
  CREATE_INVOICE: HARVEST_CREATE_INVOICE_OUTPUT
  CREATE_INVOICE_ITEM_CATEGORY: HARVEST_CREATE_INVOICE_ITEM_CATEGORY_OUTPUT
  CREATE_INVOICE_MESSAGE: HARVEST_CREATE_INVOICE_MESSAGE_OUTPUT
  CREATE_INVOICE_PAYMENT: HARVEST_CREATE_INVOICE_PAYMENT_OUTPUT
  CREATE_PROJECT: HARVEST_CREATE_PROJECT_OUTPUT
  CREATE_TASK: HARVEST_CREATE_TASK_OUTPUT
  CREATE_TIME_ENTRY: HARVEST_CREATE_TIME_ENTRY_OUTPUT
  CREATE_USER: HARVEST_CREATE_USER_OUTPUT
  DELETE_CLIENT: HARVEST_DELETE_CLIENT_OUTPUT
  DELETE_CLIENT_CONTACT: HARVEST_DELETE_CLIENT_CONTACT_OUTPUT
  DELETE_ESTIMATE: HARVEST_DELETE_ESTIMATE_OUTPUT
  DELETE_ESTIMATE_MESSAGE: HARVEST_DELETE_ESTIMATE_MESSAGE_OUTPUT
  DELETE_INVOICE: HARVEST_DELETE_INVOICE_OUTPUT
  DELETE_INVOICE_ITEM_CATEGORY: HARVEST_DELETE_INVOICE_ITEM_CATEGORY_OUTPUT
  DELETE_INVOICE_MESSAGE: HARVEST_DELETE_INVOICE_MESSAGE_OUTPUT
  DELETE_INVOICE_PAYMENT: HARVEST_DELETE_INVOICE_PAYMENT_OUTPUT
  DELETE_PROJECT: HARVEST_DELETE_PROJECT_OUTPUT
  DELETE_TASK: HARVEST_DELETE_TASK_OUTPUT
  DELETE_TIME_ENTRY: HARVEST_DELETE_TIME_ENTRY_OUTPUT
  DELETE_USER: HARVEST_DELETE_USER_OUTPUT
  GET_CLIENT: HARVEST_GET_CLIENT_OUTPUT
  GET_CLIENT_CONTACT: HARVEST_GET_CLIENT_CONTACT_OUTPUT
  GET_COMPANY_INFO: HARVEST_GET_COMPANY_INFO_OUTPUT
  GET_ESTIMATE: HARVEST_GET_ESTIMATE_OUTPUT
  GET_INVOICE: HARVEST_GET_INVOICE_OUTPUT
  GET_PROJECT: HARVEST_GET_PROJECT_OUTPUT
  GET_TASK: HARVEST_GET_TASK_OUTPUT
  GET_TIME_ENTRY: HARVEST_GET_TIME_ENTRY_OUTPUT
  GET_USER: HARVEST_GET_USER_OUTPUT
  LIST_CLIENTS: HARVEST_LIST_CLIENTS_OUTPUT
  LIST_CLIENT_CONTACTS: HARVEST_LIST_CLIENT_CONTACTS_OUTPUT
  LIST_ESTIMATE_MESSAGES: HARVEST_LIST_ESTIMATE_MESSAGES_OUTPUT
  LIST_EXPENSE_CATEGORIES: HARVEST_LIST_EXPENSE_CATEGORIES_OUTPUT
  LIST_INVOICES: HARVEST_LIST_INVOICES_OUTPUT
  LIST_INVOICE_ITEM_CATEGORIES: HARVEST_LIST_INVOICE_ITEM_CATEGORIES_OUTPUT
  LIST_INVOICE_MESSAGES: HARVEST_LIST_INVOICE_MESSAGES_OUTPUT
  LIST_INVOICE_PAYMENTS: HARVEST_LIST_INVOICE_PAYMENTS_OUTPUT
  LIST_PROJECTS: HARVEST_LIST_PROJECTS_OUTPUT
  LIST_TASKS: HARVEST_LIST_TASKS_OUTPUT
  LIST_TIME_ENTRIES: HARVEST_LIST_TIME_ENTRIES_OUTPUT
  LIST_USERS: HARVEST_LIST_USERS_OUTPUT
  UPDATE_CLIENT: HARVEST_UPDATE_CLIENT_OUTPUT
  UPDATE_CLIENT_CONTACT: HARVEST_UPDATE_CLIENT_CONTACT_OUTPUT
  UPDATE_COMPANY_INFO: HARVEST_UPDATE_COMPANY_INFO_OUTPUT
  UPDATE_ESTIMATE: HARVEST_UPDATE_ESTIMATE_OUTPUT
  UPDATE_ESTIMATE_ITEM_CATEGORY: HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY_OUTPUT
  UPDATE_EXPENSE: HARVEST_UPDATE_EXPENSE_OUTPUT
  UPDATE_INVOICE: HARVEST_UPDATE_INVOICE_OUTPUT
  UPDATE_PROJECT: HARVEST_UPDATE_PROJECT_OUTPUT
  UPDATE_TASK: HARVEST_UPDATE_TASK_OUTPUT
  UPDATE_TIME_ENTRY: HARVEST_UPDATE_TIME_ENTRY_OUTPUT
  UPDATE_USER: HARVEST_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HARVEST toolkit.
 */
export const HARVEST = {
  slug: "harvest",
  tools: {
    /**
     * Tool to create a new client. use after gathering client details to register a new client in harvest.
     */
    CREATE_CLIENT: "HARVEST_CREATE_CLIENT",
    /**
     * Tool to create a new client contact. use when you need to add a contact under an existing client. call after you've retrieved or confirmed the client id.
     */
    CREATE_CLIENT_CONTACT: "HARVEST_CREATE_CLIENT_CONTACT",
    /**
     * Tool to create a new estimate. use after gathering client and line item details.
     */
    CREATE_ESTIMATE: "HARVEST_CREATE_ESTIMATE",
    /**
     * Tool to create a new estimate item category in harvest. use after deciding to categorize line items within an estimate.
     */
    CREATE_ESTIMATE_ITEM_CATEGORY: "HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY",
    /**
     * Tool to create a new message for an estimate. use when you have an estimate id and want to send a message or run an event (send, accept, decline, re-open) on the estimate.
     */
    CREATE_ESTIMATE_MESSAGE: "HARVEST_CREATE_ESTIMATE_MESSAGE",
    /**
     * Tool to create a new expense entry. use when recording costs against projects. ensure either units or total cost is provided.
     */
    CREATE_EXPENSE: "HARVEST_CREATE_EXPENSE",
    /**
     * Tool to create a new invoice. use when you have gathered all invoice details and need to bill a client in harvest.
     */
    CREATE_INVOICE: "HARVEST_CREATE_INVOICE",
    /**
     * Tool to create a new invoice item category. use after you have decided on the category name to register it in harvest.
     */
    CREATE_INVOICE_ITEM_CATEGORY: "HARVEST_CREATE_INVOICE_ITEM_CATEGORY",
    /**
     * Tool to create a new message for an invoice. use after confirming the invoice id when you need to notify a client with invoice details.
     */
    CREATE_INVOICE_MESSAGE: "HARVEST_CREATE_INVOICE_MESSAGE",
    /**
     * Tool to create a new payment on an invoice. use when recording a payment against an existing invoice.
     */
    CREATE_INVOICE_PAYMENT: "HARVEST_CREATE_INVOICE_PAYMENT",
    /**
     * Tool to create a new project. use after confirming the client exists.
     */
    CREATE_PROJECT: "HARVEST_CREATE_PROJECT",
    /**
     * Tool to create a new task. use after identifying task details to register it in harvest.
     */
    CREATE_TASK: "HARVEST_CREATE_TASK",
    /**
     * Tool to create a new time entry. use when logging hours for a project by specifying start/end times or duration.
     */
    CREATE_TIME_ENTRY: "HARVEST_CREATE_TIME_ENTRY",
    /**
     * Tool to create a new user. use after gathering user details to invite them to harvest.
     */
    CREATE_USER: "HARVEST_CREATE_USER",
    /**
     * Tool to delete a client. use when you need to remove a client that has no associated projects, invoices, or estimates. call after confirming the client id exists and has no dependent resources.
     */
    DELETE_CLIENT: "HARVEST_DELETE_CLIENT",
    /**
     * Tool to delete a client contact. use when you need to remove a contact that is no longer relevant. call after confirming the contact id exists.
     */
    DELETE_CLIENT_CONTACT: "HARVEST_DELETE_CLIENT_CONTACT",
    /**
     * Tool to delete an estimate. use when you need to remove an estimate that is no longer needed. call after confirming the estimate id exists and has no dependent resources.
     */
    DELETE_ESTIMATE: "HARVEST_DELETE_ESTIMATE",
    /**
     * Tool to delete an estimate message. use when you need to remove a message from an estimate. call after confirming estimate id and message id are correct.
     */
    DELETE_ESTIMATE_MESSAGE: "HARVEST_DELETE_ESTIMATE_MESSAGE",
    /**
     * Tool to delete an invoice. use when you need to remove an invoice that has no associated payments. call after confirming the invoice id exists.
     */
    DELETE_INVOICE: "HARVEST_DELETE_INVOICE",
    /**
     * Tool to delete an invoice item category. use when you need to remove an obsolete or incorrect invoice item category. call after confirming the invoice item category id exists.
     */
    DELETE_INVOICE_ITEM_CATEGORY: "HARVEST_DELETE_INVOICE_ITEM_CATEGORY",
    /**
     * Tool to delete a message from an invoice. use when you need to remove a specific message that is no longer relevant. call after confirming the invoice id and message id.
     */
    DELETE_INVOICE_MESSAGE: "HARVEST_DELETE_INVOICE_MESSAGE",
    /**
     * Tool to delete an invoice payment. use when you need to remove a payment from an invoice after confirming payment details.
     */
    DELETE_INVOICE_PAYMENT: "HARVEST_DELETE_INVOICE_PAYMENT",
    /**
     * Tool to delete a project. use when you need to remove a project and all its associated time entries and expenses; invoices remain intact. call after confirming the project id exists.
     */
    DELETE_PROJECT: "HARVEST_DELETE_PROJECT",
    /**
     * Tool to delete a task. use when you need to remove a task that has no associated time entries. call after confirming the task id exists and has no dependent time entries.
     */
    DELETE_TASK: "HARVEST_DELETE_TASK",
    /**
     * Tool to delete a time entry. use when removing an existing time entry that is deletable (not closed or on archived projects/tasks). call after confirming the time entry id exists.
     */
    DELETE_TIME_ENTRY: "HARVEST_DELETE_TIME_ENTRY",
    /**
     * Tool to delete a user. use when you need to remove a user that has no associated time entries or expenses. call after confirming the user id exists and has no dependent time entries or expenses.
     */
    DELETE_USER: "HARVEST_DELETE_USER",
    /**
     * Tool to retrieve a specific client by id. use when you need details of a client before invoicing or reporting.
     */
    GET_CLIENT: "HARVEST_GET_CLIENT",
    /**
     * Tool to retrieve a specific client contact. use when you have client id and contact id to fetch and verify contact details.
     */
    GET_CLIENT_CONTACT: "HARVEST_GET_CLIENT_CONTACT",
    /**
     * Tool to retrieve information about the authenticated user's company. use after authentication to fetch company settings for display or configuration.
     */
    GET_COMPANY_INFO: "HARVEST_GET_COMPANY_INFO",
    /**
     * Tool to retrieve a specific estimate by id. use after confirming the estimate id. example: "get estimate with id 123456".
     */
    GET_ESTIMATE: "HARVEST_GET_ESTIMATE",
    /**
     * Tool to retrieve a specific invoice by id. use when you need the full details of an invoice after selecting or creating it. example: 'get invoice with id 13150378.'
     */
    GET_INVOICE: "HARVEST_GET_INVOICE",
    /**
     * Tool to retrieve a specific harvest project by id. use when you have a project id and need its details.
     */
    GET_PROJECT: "HARVEST_GET_PROJECT",
    /**
     * Tool to retrieve a specific task by id. use when you have a task id and need its detailed information.
     */
    GET_TASK: "HARVEST_GET_TASK",
    /**
     * Tool to retrieve a single time entry by id. use when you have a specific time entry id and need its full details.
     */
    GET_TIME_ENTRY: "HARVEST_GET_TIME_ENTRY",
    /**
     * Tool to retrieve a specific user by id. use after obtaining a valid user id (for example via list users). example: "get details of user 3230547".
     */
    GET_USER: "HARVEST_GET_USER",
    /**
     * Tool to list clients. use when you need to retrieve a paginated list of clients from harvest. ensure you have a valid access token in metadata before calling.
     */
    LIST_CLIENTS: "HARVEST_LIST_CLIENTS",
    /**
     * Tool to list client contacts. use when you need to retrieve contacts with optional filtering and pagination.
     */
    LIST_CLIENT_CONTACTS: "HARVEST_LIST_CLIENT_CONTACTS",
    /**
     * Tool to list messages for an estimate. use after obtaining an estimate id to retrieve associated messages, supports pagination and filtering by update time.
     */
    LIST_ESTIMATE_MESSAGES: "HARVEST_LIST_ESTIMATE_MESSAGES",
    /**
     * Tool to list expense categories. use when you need to retrieve a paginated list of expense categories, optionally filtering by active status or last update timestamp.
     */
    LIST_EXPENSE_CATEGORIES: "HARVEST_LIST_EXPENSE_CATEGORIES",
    /**
     * Tool to list invoices. use when you need to retrieve invoices filtered by client, project, date range, or state. example: 'list invoices for client 5735776 from 2023-01-01 to 2023-01-31.'
     */
    LIST_INVOICES: "HARVEST_LIST_INVOICES",
    /**
     * Tool to retrieve invoice item categories. use when you need to fetch a paginated list of invoice item categories in harvest.
     */
    LIST_INVOICE_ITEM_CATEGORIES: "HARVEST_LIST_INVOICE_ITEM_CATEGORIES",
    /**
     * Tool to list messages associated with a given invoice. use when you need to retrieve invoice messages with optional filtering by update time and pagination.
     */
    LIST_INVOICE_MESSAGES: "HARVEST_LIST_INVOICE_MESSAGES",
    /**
     * Tool to retrieve payments for a specific invoice. use when you need to list all payments applied to an invoice after confirming the invoice exists.
     */
    LIST_INVOICE_PAYMENTS: "HARVEST_LIST_INVOICE_PAYMENTS",
    /**
     * Tool to list projects. use when you need to retrieve a paginated list of projects from harvest. ensure a valid access token is present in metadata before calling.
     */
    LIST_PROJECTS: "HARVEST_LIST_PROJECTS",
    /**
     * Tool to list tasks. use when you need to retrieve a paginated list of tasks from harvest. ensure you have a valid access token in metadata before calling.
     */
    LIST_TASKS: "HARVEST_LIST_TASKS",
    /**
     * Tool to retrieve a list of time entries. use when you need to fetch tracked hours with filters or date ranges for reporting or invoicing. example: "list time entries for project 123 between 2023-01-01 and 2023-01-31".
     */
    LIST_TIME_ENTRIES: "HARVEST_LIST_TIME_ENTRIES",
    /**
     * Tool to list users. use when you need to retrieve a paginated list of users from harvest.
     */
    LIST_USERS: "HARVEST_LIST_USERS",
    /**
     * Tool to update an existing client. use after retrieving client details to modify its properties. supports partial updates; omit fields to leave them unchanged.
     */
    UPDATE_CLIENT: "HARVEST_UPDATE_CLIENT",
    /**
     * Tool to update a client contact. use when you have a contact id and need to modify its details.
     */
    UPDATE_CLIENT_CONTACT: "HARVEST_UPDATE_CLIENT_CONTACT",
    /**
     * Tool to update information about the company. use to modify company settings such as name, timezone, or formatting options. use after obtaining current settings to apply changes.
     */
    UPDATE_COMPANY_INFO: "HARVEST_UPDATE_COMPANY_INFO",
    /**
     * Tool to update an existing estimate. use when you need to modify specific fields of an estimate; omit parameters to leave other fields unchanged.
     */
    UPDATE_ESTIMATE: "HARVEST_UPDATE_ESTIMATE",
    /**
     * Tool to update an estimate item category. use after retrieving the category to change its name.
     */
    UPDATE_ESTIMATE_ITEM_CATEGORY: "HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY",
    /**
     * Tool to update an existing expense. use after retrieving an expense to modify project, category, date, cost, or delete a receipt; omit fields to leave unchanged.
     */
    UPDATE_EXPENSE: "HARVEST_UPDATE_EXPENSE",
    /**
     * Tool to update an existing invoice. use after retrieving invoice details to modify its fields. supports partial updates; omit fields to leave unchanged.
     */
    UPDATE_INVOICE: "HARVEST_UPDATE_INVOICE",
    /**
     * Tool to update an existing project. use when you need to modify one or more fields of a project by its id. invoke after confirming the project id and desired changes.
     */
    UPDATE_PROJECT: "HARVEST_UPDATE_PROJECT",
    /**
     * Tool to update an existing task. use after retrieving task details to modify its attributes such as name, billing defaults, or status. supports partial updates; omit fields to leave them unchanged.
     */
    UPDATE_TASK: "HARVEST_UPDATE_TASK",
    /**
     * Tool to update an existing time entry. use after retrieving the entry to adjust hours, notes, project, or task details. supports partial updates; omit fields to leave unchanged.
     */
    UPDATE_TIME_ENTRY: "HARVEST_UPDATE_TIME_ENTRY",
    /**
     * Tool to update an existing user. use when you need to modify a user's profile or settings after confirming the user id.
     */
    UPDATE_USER: "HARVEST_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HARVEST".
 */
export type HARVEST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HARVEST".
 */
export type HARVEST_TRIGGER_EVENTS = {}
