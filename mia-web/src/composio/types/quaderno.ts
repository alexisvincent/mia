// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of QUADERNO's QUADERNO_CALCULATE_TAX_RATE tool input.
 */
type QUADERNO_CALCULATE_TAX_RATE_INPUT = {
  /**
   * Amount
   * @description Monetary amount for tax calculation
   * @default null
   */
  amount: number | null;
  /**
   * From Country
   * @description Origin country code (ISO 3166-1 alpha-2)
   * @default null
   */
  from_country: unknown;
  /**
   * Product Type
   * @description Type of item being sold
   * @default null
   * @enum {string|null}
   */
  product_type: "good" | "service" | null;
  /**
   * Tax Code
   * @description Tax code representing the product or service type
   * @default null
   */
  tax_code: string | null;
  /**
   * Tax Id
   * @description Customer's tax identification number, if available
   * @default null
   */
  tax_id: string | null;
  /**
   * To Country
   * @description Destination country code (ISO 3166-1 alpha-2)
   */
  to_country?: unknown;
  /**
   * To Postal Code
   * @description Postal code of the destination address
   * @default null
   */
  to_postal_code: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_CALCULATE_TAX_RATE tool output.
 */
type QUADERNO_CALCULATE_TAX_RATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code where tax applies
       */
      country: unknown;
      /**
       * Name
       * @description Name of the tax (e.g., VAT)
       * @default null
       */
      name: string | null;
      /**
       * Rate
       * @description Tax rate percentage
       */
      rate: number;
      /**
       * Region
       * @description Region or state within the country
       * @default null
       */
      region: string | null;
      /**
       * Status
       * @description Tax calculation status
       * @enum {string}
       */
      status: "taxable" | "non_taxable" | "not_registered" | "reverse_charge";
      /**
       * Subtotal
       * @description Subtotal amount before tax
       * @default null
       */
      subtotal: number | null;
      /**
       * Tax Amount
       * @description Calculated tax amount
       * @default null
       */
      tax_amount: number | null;
      /**
       * Tax Behavior
       * @description Whether the tax is included in price or added on top
       * @enum {string}
       */
      tax_behavior: "inclusive" | "exclusive";
      /**
       * Tax Code
       * @description Tax code used in calculation
       */
      tax_code: string;
      /**
       * Taxable Part
       * @description Portion of subtotal subject to tax (percent)
       * @default null
       */
      taxable_part: number | null;
      /**
       * Total Amount
       * @description Total amount including tax
       * @default null
       */
      total_amount: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_CREATE_CONTACT tool input.
 */
type QUADERNO_CREATE_CONTACT_INPUT = {
  /**
   * City
   * @description City or locality of the address.
   * @default null
   */
  city: string | null;
  /**
   * Contact Person
   * @description Primary contact person for company contacts.
   * @default null
   */
  contact_person: string | null;
  /**
   * Country
   * @description 2-letter ISO country code.
   */
  country?: string;
  /**
   * Department
   * @description Department for company contacts.
   * @default null
   */
  department: string | null;
  /**
   * Email
   * Format: email
   * @description Email address of the contact.
   */
  email?: unknown;
  /**
   * First Name
   * @description First name of the contact. Required if kind is 'person'.
   * @default null
   */
  first_name: string | null;
  /**
   * Full Name
   * @description Full name of the contact. Useful for companies or alternative display.
   * @default null
   */
  full_name: string | null;
  /**
   * Kind
   * @description Type of contact, either 'person' or 'company'.
   * @enum {string}
   */
  kind?: "person" | "company";
  /**
   * Last Name
   * @description Last name of the contact. Optional for 'person'.
   * @default null
   */
  last_name: string | null;
  /**
   * Phone 1
   * @description Primary phone number of the contact.
   * @default null
   */
  phone_1: string | null;
  /**
   * Postal Code
   * @description ZIP or postal code.
   * @default null
   */
  postal_code: string | null;
  /**
   * Region
   * @description State or region of the address.
   * @default null
   */
  region: string | null;
  /**
   * Street Line 1
   * @description First line of street address.
   * @default null
   */
  street_line_1: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_CREATE_CONTACT tool output.
 */
type QUADERNO_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description City or locality (District/Suburb/Town/Village).
       * @default null
       */
      city: string | null;
      /**
       * Contact Person
       * @description Contact person (for company contacts).
       * @default null
       */
      contact_person: string | null;
      /**
       * Country
       * @description 2-letter ISO country code.
       */
      country: string;
      /**
       * Created At
       * @description Unix timestamp of contact creation.
       */
      created_at: number;
      /**
       * Department
       * @description Department (for company contacts).
       * @default null
       */
      department: string | null;
      /**
       * Discount
       * @description Default discount percentage for this contact.
       * @default null
       */
      discount: number | null;
      /**
       * Email
       * @description Email address of the contact.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name (for person contacts).
       * @default null
       */
      first_name: string | null;
      /**
       * Full Name
       * @description Full name or company name.
       * @default null
       */
      full_name: string | null;
      /**
       * Id
       * @description Unique identifier for the contact.
       */
      id: number;
      /**
       * Kind
       * @description Type of contact, 'person' or 'company'.
       * @enum {string}
       */
      kind: "person" | "company";
      /**
       * Language
       * @description Preferred language of the contact.
       * @default null
       */
      language: string | null;
      /**
       * Last Name
       * @description Last name (for person contacts).
       * @default null
       */
      last_name: string | null;
      /**
       * Notes
       * @description Internal notes about the contact.
       * @default null
       */
      notes: string | null;
      /**
       * Permalink
       * @description URL to the contact's billing page.
       * @default null
       */
      permalink: string | null;
      /**
       * Phone 1
       * @description Primary phone number.
       * @default null
       */
      phone_1: string | null;
      /**
       * Postal Code
       * @description ZIP or postal code.
       * @default null
       */
      postal_code: string | null;
      /**
       * Processor
       * @description External platform where contact was imported from.
       * @default null
       */
      processor: string | null;
      /**
       * Processor Id
       * @description ID assigned by external processor.
       * @default null
       */
      processor_id: string | null;
      /**
       * Region
       * @description State or region of the address.
       * @default null
       */
      region: string | null;
      /**
       * Street Line 1
       * @description Address line 1 (Street/PO Box).
       * @default null
       */
      street_line_1: string | null;
      /**
       * Street Line 2
       * @description Address line 2 (Apartment/Suite/Unit/Building).
       * @default null
       */
      street_line_2: string | null;
      /**
       * Tax Id
       * @description Tax identification number.
       * @default null
       */
      tax_id: string | null;
      /**
       * Tax Status
       * @description Tax status of the contact ('taxable', 'exempt', or 'reverse').
       * @default null
       * @enum {string|null}
       */
      tax_status: "taxable" | "exempt" | "reverse" | null;
      /**
       * Url
       * @description API URL to access the contact.
       * @default null
       */
      url: string | null;
      /**
       * Web
       * @description Website of the contact.
       * @default null
       */
      web: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_CREATE_INVOICE tool input.
 */
type QUADERNO_CREATE_INVOICE_INPUT = {
  /**
   * Attachment
   * @description Attachment object with data, filename, public flag
   * @default null
   */
  attachment: {
      [key: string]: unknown;
  } | null;
  /**
   * City
   * @description Billing city
   * @default null
   */
  city: string | null;
  /**
   * Contact
   * @description Customer data object or existing contact reference {id:...}
   */
  contact?: {
      [key: string]: unknown;
  };
  /**
   * Country
   * @description Billing country code
   * @default null
   */
  country: string | null;
  /**
   * Currency
   * @description Three-letter ISO currency code
   */
  currency?: string;
  /**
   * Custom Metadata
   * @description Custom metadata key/value pairs
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Due Date
   * @description Payment due date (YYYY-MM-DD)
   * @default null
   */
  due_date: string | null;
  /**
   * Evidence
   * @description Evidence object for tax calculation
   * @default null
   */
  evidence: {
      [key: string]: unknown;
  } | null;
  /**
   * Issue Date
   * @description Invoice issue date (YYYY-MM-DD)
   * @default null
   */
  issue_date: string | null;
  /**
   * Items
   * @description List of line item objects with description, quantity, unit_price
   */
  items?: {
      [key: string]: unknown;
  }[];
  /**
   * Notes
   * @description Internal notes for the invoice
   * @default null
   */
  notes: string | null;
  /**
   * Number
   * @description Invoice number; auto-generated if omitted
   * @default null
   */
  number: string | null;
  /**
   * Payment Details
   * @description Payment details info
   * @default null
   */
  payment_details: string | null;
  /**
   * Payment Processor
   * @description Payment processor name
   * @default null
   */
  payment_processor: string | null;
  /**
   * Payment Processor Id
   * @description Processor-assigned invoice ID
   * @default null
   */
  payment_processor_id: string | null;
  /**
   * Po Number
   * @description Purchase order number
   * @default null
   */
  po_number: string | null;
  /**
   * Postal Code
   * @description Billing postal code
   * @default null
   */
  postal_code: string | null;
  /**
   * Processor Fee Cents
   * @description Processor fee in cents
   * @default null
   */
  processor_fee_cents: number | null;
  /**
   * Recurring Frequency
   * @description Recurring frequency number
   * @default null
   */
  recurring_frequency: number | null;
  /**
   * Recurring Period
   * @description Recurring period unit
   * @default null
   * @enum {string|null}
   */
  recurring_period: "days" | "weeks" | "months" | "years" | null;
  /**
   * Region
   * @description Billing region/state
   * @default null
   */
  region: string | null;
  /**
   * Street Line 1
   * @description Billing street line 1
   * @default null
   */
  street_line_1: string | null;
  /**
   * Street Line 2
   * @description Billing street line 2
   * @default null
   */
  street_line_2: string | null;
  /**
   * Subject
   * @description Invoice subject or summary
   * @default null
   */
  subject: string | null;
  /**
   * Tag List
   * @description Comma-separated list of tags
   * @default null
   */
  tag_list: string | null;
  /**
   * Tax Id
   * @description Customer tax ID
   * @default null
   */
  tax_id: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_CREATE_INVOICE tool output.
 */
type QUADERNO_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description Billing city
       * @default null
       */
      city: string | null;
      /**
       * Contact
       * @description Customer contact details
       */
      contact: {
          /**
           * City
           * @description City of the contact
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description 2-letter ISO country code of the contact
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Email address of the contact
           * @default null
           */
          email: string | null;
          /**
           * Full Name
           * @description Full name of the contact
           */
          full_name: string;
          /**
           * Id
           * @description Contact unique identifier
           */
          id: number;
          /**
           * Postal Code
           * @description Postal code of the contact
           * @default null
           */
          postal_code: string | null;
          /**
           * Region
           * @description Region or state of the contact
           * @default null
           */
          region: string | null;
          /**
           * Street Line 1
           * @description Billing address line 1
           * @default null
           */
          street_line_1: string | null;
          /**
           * Street Line 2
           * @description Billing address line 2
           * @default null
           */
          street_line_2: string | null;
      };
      /**
       * Country
       * @description Billing country code
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Invoice creation timestamp
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code of the invoice
       */
      currency: string;
      /**
       * Custom Metadata
       * @description Custom metadata key/value pairs
       * @default null
       */
      custom_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Deliveries
       * @description Delivery events list
       * @default null
       */
      deliveries: {
          /**
           * Delivered At
           * @description Timestamp when the invoice was delivered to the customer
           */
          delivered_at: string;
          /**
           * Recipient
           * @description Recipient identifier for the delivery
           */
          recipient: string;
          /**
           * Service Response
           * @description Response from the delivery service
           * @default null
           */
          service_response: string | null;
          /**
           * Type
           * @description Type of delivery event
           */
          type: string;
      }[] | null;
      /**
       * Discount Cents
       * @description Discount amount in cents
       * @default null
       */
      discount_cents: number | null;
      /**
       * Due Date
       * @description Due date for payment
       * @default null
       */
      due_date: string | null;
      /**
       * InvoiceEvidence
       * @description Location evidence details
       * @default null
       */
      evidence: {
          /**
           * Additional Evidence
           * @description Additional evidence description
           * @default null
           */
          additional_evidence: string | null;
          /**
           * Additional Evidence Country
           * @description Country code for additional evidence
           * @default null
           */
          additional_evidence_country: string | null;
          /**
           * Bank Country
           * @description Bank country code
           * @default null
           */
          bank_country: string | null;
          /**
           * Billing Country
           * @description Billing country code
           * @default null
           */
          billing_country: string | null;
          /**
           * Ip Address
           * @description IP address used as evidence
           * @default null
           */
          ip_address: string | null;
          /**
           * Ip Country
           * @description Country derived from IP evidence
           * @default null
           */
          ip_country: string | null;
          /**
           * Notes
           * @description Notes on the evidence
           * @default null
           */
          notes: string | null;
          /**
           * State
           * @description State of evidence (unsettled, confirmed, conflicting)
           * @default null
           */
          state: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier of the invoice
       */
      id: number;
      /**
       * Issue Date
       * @description Invoice issue date
       */
      issue_date: string;
      /**
       * Items
       * @description Line items of the invoice
       */
      items: {
          /**
           * Description
           * @description Line item description
           */
          description: string;
          /**
           * Discount Cents
           * @description Discount amount in cents
           * @default null
           */
          discount_cents: number | null;
          /**
           * Discount Rate
           * @description Discount rate percentage
           * @default null
           */
          discount_rate: number | null;
          /**
           * Quantity
           * @description Quantity of the item
           */
          quantity: number;
          /**
           * Unit Price
           * @description Unit price of the item
           */
          unit_price: number;
      }[];
      /**
       * Notes
       * @description Internal notes for the invoice
       * @default null
       */
      notes: string | null;
      /**
       * Number
       * @description Invoice number
       */
      number: string;
      /**
       * Payment Details
       * @description Payment details info
       * @default null
       */
      payment_details: string | null;
      /**
       * Payment Processor
       * @description Payment processor used
       * @default null
       */
      payment_processor: string | null;
      /**
       * Payment Processor Id
       * @description Processor-assigned ID
       * @default null
       */
      payment_processor_id: string | null;
      /**
       * Payments
       * @description Payments against the invoice
       */
      payments: {
          /**
           * Amount Cents
           * @description Amount paid in cents
           * @default null
           */
          amount_cents: number | null;
          /**
           * Date
           * @description Date of payment
           * @default null
           */
          date: string | null;
          /**
           * Payment Method
           * @description Payment method used
           * @default null
           */
          payment_method: string | null;
          /**
           * Processor
           * @description Payment processor name
           * @default null
           */
          processor: string | null;
          /**
           * Processor Id
           * @description Processor-assigned payment ID
           * @default null
           */
          processor_id: string | null;
      }[];
      /**
       * Pdf
       * @description PDF download URL for the invoice
       */
      pdf: string;
      /**
       * Permalink
       * @description URL to view invoice online
       */
      permalink: string;
      /**
       * Po Number
       * @description Purchase order number
       * @default null
       */
      po_number: string | null;
      /**
       * Postal Code
       * @description Billing postal code
       * @default null
       */
      postal_code: string | null;
      /**
       * Processor Fee Cents
       * @description Processor fee in cents
       * @default null
       */
      processor_fee_cents: number | null;
      /**
       * Recurring Frequency
       * @description Recurring frequency number
       * @default null
       */
      recurring_frequency: number | null;
      /**
       * Recurring Period
       * @description Recurring period unit
       * @default null
       */
      recurring_period: string | null;
      /**
       * Region
       * @description Billing region/state
       * @default null
       */
      region: string | null;
      /**
       * RelatedDocument
       * @description Related document information
       * @default null
       */
      related_document: {
          /**
           * Id
           * @description ID of the related document
           */
          id: number;
          /**
           * Type
           * @description Type of related document, e.g., 'Recurring'
           */
          type: string;
      } | null;
      /**
       * State
       * @description Current state of the invoice
       * @enum {string}
       */
      state: "outstanding" | "late" | "uncollectible" | "paid" | "refunded" | "archived";
      /**
       * Street Line 1
       * @description Billing street line 1
       * @default null
       */
      street_line_1: string | null;
      /**
       * Street Line 2
       * @description Billing street line 2
       * @default null
       */
      street_line_2: string | null;
      /**
       * Subject
       * @description Invoice subject or summary
       * @default null
       */
      subject: string | null;
      /**
       * Subtotal Cents
       * @description Subtotal amount in cents before taxes/discounts
       * @default null
       */
      subtotal_cents: number | null;
      /**
       * Tag List
       * @description Comma-separated tags
       * @default null
       */
      tag_list: string | null;
      /**
       * Tax Id
       * @description Customer tax ID
       * @default null
       */
      tax_id: string | null;
      /**
       * Taxes
       * @description Taxes applied to the invoice
       */
      taxes: {
          /**
           * Amount Cents
           * @description Tax amount in cents
           * @default null
           */
          amount_cents: number | null;
          /**
           * Country
           * @description Country code where tax applies
           * @default null
           */
          country: string | null;
          /**
           * Label
           * @description Tax label or name
           */
          label: string;
          /**
           * Rate
           * @description Tax rate percentage
           */
          rate: number;
          /**
           * Region
           * @description Region where tax applies
           * @default null
           */
          region: string | null;
      }[];
      /**
       * Total Cents
       * @description Total amount in cents after taxes/discounts
       * @default null
       */
      total_cents: number | null;
      /**
       * Url
       * @description API resource URL for the invoice
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
 * Type of QUADERNO's QUADERNO_CREATE_PRODUCT tool input.
 */
type QUADERNO_CREATE_PRODUCT_INPUT = {
  /**
   * Code
   * @description The product's SKU (Stock Keeping Unit).
   */
  code?: string;
  /**
   * Country
   * @description 2-letter ISO country code. Required if tax_based_on is 'country'.
   * @default null
   */
  country: string | null;
  /**
   * Currency
   * @description Three-letter ISO currency code in uppercase.
   * @default null
   */
  currency: string | null;
  /**
   * Description
   * @description The product's description for customer display.
   * @default null
   */
  description: string | null;
  /**
   * Kind
   * @description Type of product: one-off purchase or subscription.
   * @default one_off
   * @enum {string}
   */
  kind: "one_off" | "subscription";
  /**
   * Name
   * @description The product's name for customer display.
   */
  name?: string;
  /**
   * Paypal Interval Duration
   * @description For subscription products: number of times the charge should recur.
   * @default null
   */
  paypal_interval_duration: number | null;
  /**
   * Paypal Interval Frequency
   * @description For PayPal subscriptions: number of intervals between subscription billings.
   * @default null
   */
  paypal_interval_frequency: number | null;
  /**
   * Paypal Interval Unit
   * @description For PayPal subscriptions: billing frequency unit.
   * @default monthly
   * @enum {string}
   */
  paypal_interval_unit: "daily" | "weekly" | "monthly" | "yearly";
  /**
   * Product Type
   * @description The type of the product: 'good' or 'service'.
   * @default service
   * @enum {string}
   */
  product_type: "good" | "service";
  /**
   * Stock
   * @description Stock of the physical product.
   * @default null
   */
  stock: string | null;
  /**
   * Stripe Plan Id
   * @description For Stripe subscriptions: ID of the Stripe price.
   * @default null
   */
  stripe_plan_id: string | null;
  /**
   * Tax Based On
   * @description How taxes are calculated: based on customer country or a specific country.
   * @default customer_country
   * @enum {string}
   */
  tax_based_on: "customer_country" | "country";
  /**
   * Tax Class
   * @description Tax class that applies to the product.
   * @default eservice
   * @enum {string}
   */
  tax_class: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced";
  /**
   * Tax Type
   * @description Whether taxes are included in the unit_cost.
   * @default included
   * @enum {string}
   */
  tax_type: "excluded" | "included";
  /**
   * Unit Cost
   * @description The unit price to be charged.
   */
  unit_cost?: string;
};

/**
 * Type of QUADERNO's QUADERNO_CREATE_PRODUCT tool output.
 */
type QUADERNO_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The product's SKU.
       */
      code: string;
      /**
       * Country
       * @description 2-letter country code.
       * @default null
       */
      country: string | null;
      /**
       * Currency
       * @description Three-letter currency code.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description The product's description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the product.
       */
      id: number;
      /**
       * Kind
       * @description Product kind: one_off or subscription.
       */
      kind: string;
      /**
       * Name
       * @description The product's name.
       */
      name: string;
      /**
       * Paypal Interval Duration
       * @description PayPal interval duration.
       * @default null
       */
      paypal_interval_duration: number | null;
      /**
       * Paypal Interval Frequency
       * @description PayPal interval frequency.
       * @default null
       */
      paypal_interval_frequency: number | null;
      /**
       * Paypal Interval Unit
       * @description PayPal interval unit.
       * @default null
       */
      paypal_interval_unit: string | null;
      /**
       * Product Type
       * @description Product type: good or service.
       */
      product_type: string;
      /**
       * Stock
       * @description Physical stock of the product.
       * @default null
       */
      stock: string | null;
      /**
       * Stripe Plan Id
       * @description Stripe plan ID for subscriptions.
       * @default null
       */
      stripe_plan_id: string | null;
      /**
       * Tax Based On
       * @description Tax calculation basis.
       */
      tax_based_on: string;
      /**
       * Tax Class
       * @description Tax class applied.
       */
      tax_class: string;
      /**
       * Tax Type
       * @description Whether taxes are included or excluded.
       */
      tax_type: string;
      /**
       * Unit Cost
       * @description Unit cost charged.
       */
      unit_cost: string;
      /**
       * Url
       * @description URL of the product.
       * @default null
       */
      url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_DELETE_COUPON tool input.
 */
type QUADERNO_DELETE_COUPON_INPUT = {
  /**
   * Id
   * @description Unique identifier of the coupon to be deleted
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_DELETE_COUPON tool output.
 */
type QUADERNO_DELETE_COUPON_OUTPUT = {
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
 * Type of QUADERNO's QUADERNO_DELETE_EXPENSE tool input.
 */
type QUADERNO_DELETE_EXPENSE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the expense to be deleted
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_DELETE_EXPENSE tool output.
 */
type QUADERNO_DELETE_EXPENSE_OUTPUT = {
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
 * Type of QUADERNO's QUADERNO_DELETE_PRODUCT tool input.
 */
type QUADERNO_DELETE_PRODUCT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the product to be deleted
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_DELETE_PRODUCT tool output.
 */
type QUADERNO_DELETE_PRODUCT_OUTPUT = {
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
 * Type of QUADERNO's QUADERNO_DELETE_TAX_ID tool input.
 */
type QUADERNO_DELETE_TAX_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the tax ID to be deleted
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_DELETE_TAX_ID tool output.
 */
type QUADERNO_DELETE_TAX_ID_OUTPUT = {
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
 * Type of QUADERNO's QUADERNO_DELIVER_CREDIT_NOTE tool input.
 */
type QUADERNO_DELIVER_CREDIT_NOTE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the credit note to deliver
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_DELIVER_CREDIT_NOTE tool output.
 */
type QUADERNO_DELIVER_CREDIT_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credit Id
       * @description ID of the credit note that was delivered
       */
      credit_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_DELIVER_INVOICE tool input.
 */
type QUADERNO_DELIVER_INVOICE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the invoice to deliver
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_DELIVER_INVOICE tool output.
 */
type QUADERNO_DELIVER_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice Id
       * @description ID of the invoice that was delivered
       */
      invoice_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_CONTACTS tool input.
 */
type QUADERNO_LIST_CONTACTS_INPUT = {
  /**
   * Processor Id
   * @description Filter contacts by external processor ID
   * @default null
   */
  processor_id: string | null;
  /**
   * Q
   * @description Filter contacts by full name, email, or tax ID (case-sensitive)
   * @default null
   */
  q: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_CONTACTS tool output.
 */
type QUADERNO_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts returned by the API
       */
      contacts: {
          /**
           * City
           * @description City of the contact
           * @default null
           */
          city: string | null;
          /**
           * Contact Person
           * @description Contact person name (if company)
           * @default null
           */
          contact_person: string | null;
          /**
           * Country
           * @description Country code (ISO 3166-1 alpha-2)
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description Timestamp when contact was created
           * @default null
           */
          created_at: number | null;
          /**
           * Department
           * @description Department (if company)
           * @default null
           */
          department: string | null;
          /**
           * Discount
           * @description Default discount rate for this contact
           * @default null
           */
          discount: number | null;
          /**
           * Email
           * @description Email address of the contact
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name (if person)
           * @default null
           */
          first_name: string | null;
          /**
           * Full Name
           * @description Full or business name of the contact
           * @default null
           */
          full_name: string | null;
          /**
           * Id
           * @description Unique identifier for the contact
           */
          id: number;
          /**
           * Kind
           * @description Type of contact: 'person' or 'company'
           */
          kind: string;
          /**
           * Language
           * @description Preferred language (ISO 639-1)
           * @default null
           */
          language: string | null;
          /**
           * Last Name
           * @description Last name (if person)
           * @default null
           */
          last_name: string | null;
          /**
           * Permalink
           * @description Dashboard URL to the contact
           * @default null
           */
          permalink: string | null;
          /**
           * Phone 1
           * @description Primary phone number
           * @default null
           */
          phone_1: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code
           * @default null
           */
          postal_code: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Street Line 1
           * @description Address line 1
           * @default null
           */
          street_line_1: string | null;
          /**
           * Street Line 2
           * @description Address line 2
           * @default null
           */
          street_line_2: string | null;
          /**
           * Tax Id
           * @description Tax identification number of the contact
           * @default null
           */
          tax_id: string | null;
          /**
           * Tax Status
           * @description Default tax status: 'taxable', 'exempt', or 'reverse'
           * @default null
           */
          tax_status: string | null;
          /**
           * Updated At
           * @description Timestamp of last contact update
           * @default null
           */
          updated_at: number | null;
          /**
           * Url
           * @description API URL for this contact
           * @default null
           */
          url: string | null;
          /**
           * Web
           * @description Website URL of the contact
           * @default null
           */
          web: string | null;
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
 * Type of QUADERNO's QUADERNO_LIST_COUPONS tool input.
 */
type QUADERNO_LIST_COUPONS_INPUT = object;

/**
 * Type of QUADERNO's QUADERNO_LIST_COUPONS tool output.
 */
type QUADERNO_LIST_COUPONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Coupons
       * @description List of coupons sorted by creation date (newest first).
       */
      coupons: {
          /**
           * Amount Off Cents
           * @description Amount in cents to subtract from the purchase subtotal.
           * @default null
           */
          amount_off_cents: number | null;
          /**
           * Code
           * @description Coupon code applied at checkout.
           */
          code: string;
          /**
           * Currency
           * @description Three-letter ISO currency code, uppercase.
           * @default null
           */
          currency: string | null;
          /**
           * Id
           * @description Unique identifier for the coupon.
           */
          id: number;
          /**
           * Max Redemptions
           * @description Maximum number of times this coupon can be redeemed.
           * @default null
           */
          max_redemptions: number | null;
          /**
           * Name
           * @description Name of the coupon displayed on invoices.
           * @default null
           */
          name: string | null;
          /**
           * Percent Off
           * @description Percentage to subtract from the purchase subtotal.
           * @default null
           */
          percent_off: number | null;
          /**
           * Processor Id
           * @description ID of the coupon in the processor system, if any.
           * @default null
           */
          processor_id: string | null;
          /**
           * Redeem By
           * @description Date (YYYY-MM-DD) after which the coupon cannot be redeemed.
           * @default null
           */
          redeem_by: string | null;
          /**
           * Times Redeemed
           * @description Number of times this coupon has been redeemed.
           * @default null
           */
          times_redeemed: number | null;
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
 * Type of QUADERNO's QUADERNO_LIST_EVIDENCE tool input.
 */
type QUADERNO_LIST_EVIDENCE_INPUT = {
  /**
   * Document Id
   * @description Filter by related document ID
   * @default null
   */
  document_id: number | null;
  /**
   * State
   * @description Filter by one or more evidence states, comma-separated. Valid states: 'confirmed', 'unsettled', 'conflicting'
   * @default null
   */
  state: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_EVIDENCE tool output.
 */
type QUADERNO_LIST_EVIDENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Evidences
       * @description List of evidence objects returned by the API
       */
      evidences: {
          /**
           * Additional Evidence
           * @description Additional evidence used to prove the customer's location
           * @default null
           */
          additional_evidence: string | null;
          /**
           * Additional Evidence Country
           * @description Country code for the additional evidence (ISO 3166-1 alpha-2)
           * @default null
           */
          additional_evidence_country: string | null;
          /**
           * Bank Country
           * @description Country code of the customer's bank (ISO 3166-1 alpha-2)
           * @default null
           */
          bank_country: string | null;
          /**
           * Billing Country
           * @description Country code for billing (ISO 3166-1 alpha-2)
           * @default null
           */
          billing_country: string | null;
          /**
           * Created At
           * @description Timestamp when evidence was created
           * @default null
           */
          created_at: string | null;
          /**
           * Document Id
           * @description Identifier of the related document (e.g., invoice)
           */
          document_id: number;
          /**
           * Id
           * @description Unique identifier for the evidence object
           */
          id: number;
          /**
           * Ip Address
           * @description IP address of the customer
           * @default null
           */
          ip_address: string | null;
          /**
           * Ip Country
           * @description Country code determined from the IP address (ISO 3166-1 alpha-2)
           * @default null
           */
          ip_country: string | null;
          /**
           * Notes
           * @description Internal notes about the evidence
           * @default null
           */
          notes: string | null;
          /**
           * State
           * @description State of the evidence: 'unsettled', 'conflicting', or 'confirmed'
           */
          state: string;
          /**
           * Url
           * @description API URL for the evidence object
           * @default null
           */
          url: string | null;
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
 * Type of QUADERNO's QUADERNO_LIST_EXPENSES tool input.
 */
type QUADERNO_LIST_EXPENSES_INPUT = {
  /**
   * Created Before
   * @description Return expenses created before this expense ID for pagination
   * @default null
   */
  created_before: string | null;
  /**
   * Limit
   * @description Number of expenses to return per page (default 25, max 100)
   * @default null
   */
  limit: number | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_EXPENSES tool output.
 */
type QUADERNO_LIST_EXPENSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expenses
       * @description List of expense objects returned by the API
       */
      expenses: {
          [key: string]: unknown;
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
 * Type of QUADERNO's QUADERNO_LIST_JURISDICTIONS tool input.
 */
type QUADERNO_LIST_JURISDICTIONS_INPUT = {
  /**
   * Country
   * @description 2-letter ISO 3166-1 country code to filter jurisdictions. Case-sensitive.
   * @default null
   */
  country: string | null;
  /**
   * Region
   * @description Region or state filter. Case-sensitive. Use 'none' to return jurisdictions without a region.
   * @default null
   */
  region: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_JURISDICTIONS tool output.
 */
type QUADERNO_LIST_JURISDICTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jurisdictions
       * @description List of tax jurisdictions returned by the API
       */
      jurisdictions: {
          /**
           * Country
           * @description 2-letter ISO 3166-1 country code
           */
          country: string;
          /**
           * Id
           * @description Unique identifier for the tax jurisdiction
           */
          id: number;
          /**
           * Name
           * @description Name of the tax jurisdiction
           */
          name: string;
          /**
           * Region
           * @description Region or state, if applicable
           * @default null
           */
          region: string | null;
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
 * Type of QUADERNO's QUADERNO_LIST_PRODUCTS tool input.
 */
type QUADERNO_LIST_PRODUCTS_INPUT = {
  /**
   * Q
   * @description Case-sensitive filter string; matches product's name or SKU code.
   * @default null
   */
  q: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_PRODUCTS tool output.
 */
type QUADERNO_LIST_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Products
       * @description List of products returned by the API.
       */
      products: {
          /**
           * Code
           * @description Product's SKU (Stock Keeping Unit)
           */
          code: string;
          /**
           * Country
           * @description 2-letter ISO country code
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description Timestamp when product was created, as string or integer
           */
          created_at: number | null;
          /**
           * Currency
           * @description 3-letter ISO currency code in uppercase.
           * @default null
           */
          currency: string | null;
          /**
           * Description
           * @description Product description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique product identifier
           */
          id: number;
          /**
           * Kind
           * @description Transaction type: one-off purchase or subscription
           * @enum {string}
           */
          kind: "one_off" | "subscription";
          /**
           * Name
           * @description Displayable product name
           */
          name: string;
          /**
           * Paypal Interval Duration
           * @description For subscriptions: number of times the charge should recur
           * @default null
           */
          paypal_interval_duration: number | null;
          /**
           * Paypal Interval Frequency
           * @description For subscriptions: number of intervals between subscription billings
           * @default null
           */
          paypal_interval_frequency: number | null;
          /**
           * Paypal Interval Unit
           * @description For subscriptions: billing frequency unit
           * @default null
           * @enum {string|null}
           */
          paypal_interval_unit: "daily" | "weekly" | "monthly" | "yearly" | null;
          /**
           * Product Type
           * @description Product type: good or service
           * @enum {string}
           */
          product_type: "good" | "service";
          /**
           * Stock
           * @description Stock quantity for physical products
           * @default null
           */
          stock: string | null;
          /**
           * Stripe Plan Id
           * @description Stripe plan ID for related subscription
           * @default null
           */
          stripe_plan_id: string | null;
          /**
           * Tax Based On
           * @description Basis for tax calculation: customer_country or country
           * @default null
           * @enum {string|null}
           */
          tax_based_on: "customer_country" | "country" | null;
          /**
           * Tax Class
           * @description Tax class applied to the product
           * @default null
           * @enum {string|null}
           */
          tax_class: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced" | null;
          /**
           * Tax Type
           * @description Whether unit_cost excludes or includes tax
           * @default null
           * @enum {string|null}
           */
          tax_type: "excluded" | "included" | null;
          /**
           * Unit Cost
           * @description Unit price as string, e.g., '9.99'
           * @default null
           */
          unit_cost: string | null;
          /**
           * Url
           * @description URL to access this product resource
           * @default null
           */
          url: string | null;
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
 * Type of QUADERNO's QUADERNO_LIST_REGISTERED_TAX_I_DS tool input.
 */
type QUADERNO_LIST_REGISTERED_TAX_I_DS_INPUT = {
  /**
   * Created Before
   * @description Cursor to return only tax IDs created before this timestamp. Use the `created_at` value from the last record of the previous page.
   * @default null
   */
  created_before: number | null;
  /**
   * Limit
   * @description Maximum number of records to return (default 25, max 100).
   * @default null
   */
  limit: number | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_REGISTERED_TAX_I_DS tool output.
 */
type QUADERNO_LIST_REGISTERED_TAX_I_DS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tax Ids
       * @description List of registered tax IDs returned by the API
       */
      tax_ids: {
          /**
           * Created At
           * @description Timestamp when the tax ID was created
           */
          created_at: number;
          /**
           * Id
           * @description Unique identifier for the registered tax ID
           */
          id: number;
          /**
           * Import Scheme
           * @description Whether the EU import scheme is enabled for this tax ID
           */
          import_scheme: boolean;
          /**
           * Jurisdiction
           * @description Associated jurisdiction details
           */
          jurisdiction: {
              /**
               * Country
               * @description Country code of the jurisdiction
               */
              country: string;
              /**
               * Id
               * @description Unique identifier for the jurisdiction
               */
              id: number;
              /**
               * Name
               * @description Name of the jurisdiction
               */
              name: string;
              /**
               * Region
               * @description Region or state code of the jurisdiction, if applicable
               * @default null
               */
              region: string | null;
          };
          /**
           * Permanent Establishment
           * @description Whether the business has a permanent establishment in this jurisdiction
           */
          permanent_establishment: boolean;
          /**
           * State
           * @description State of the tax ID (e.g., 'verified')
           */
          state: string;
          /**
           * Valid From
           * @description Start date (YYYY-MM-DD) when the tax ID became valid
           * @default null
           */
          valid_from: string | null;
          /**
           * Valid Until
           * @description End date (YYYY-MM-DD) when the tax ID expires, or null if none
           * @default null
           */
          valid_until: string | null;
          /**
           * Value
           * @description Value of the tax ID (e.g., VAT number)
           */
          value: string;
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
 * Type of QUADERNO's QUADERNO_LIST_REPORTING_REQUESTS tool input.
 */
type QUADERNO_LIST_REPORTING_REQUESTS_INPUT = object;

/**
 * Type of QUADERNO's QUADERNO_LIST_REPORTING_REQUESTS tool output.
 */
type QUADERNO_LIST_REPORTING_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reporting Requests
       * @description List of reporting requests returned by the API
       */
      reporting_requests: {
          /**
           * Completed At
           * @description Timestamp (epoch seconds) when the report was completed
           */
          completed_at: number;
          /**
           * Created At
           * @description Timestamp (epoch seconds) when the request was created
           */
          created_at: number;
          /**
           * Id
           * @description Unique identifier for the reporting request
           */
          id: number;
          /**
           * Parameters
           * @description Parameters specifying report details, such as from_date and to_date
           */
          parameters: {
              /**
               * From Date
               * @description Start date for the report in YYYY-MM-DD format
               * @default null
               */
              from_date?: string | null;
              /**
               * To Date
               * @description End date for the report in YYYY-MM-DD format
               * @default null
               */
              to_date?: string | null;
          };
          /**
           * Report Type
           * @description Type of report requested: 'tax_summary', 'invoices_list', or 'credits_list'
           */
          report_type: string;
          /**
           * Report Url
           * @description Download URL for the generated report, available when state is 'succeeded'
           * @default null
           */
          report_url: string | null;
          /**
           * State
           * @description Current state of the request: 'pending', 'succeeded', or 'failed'
           */
          state: string;
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
 * Type of QUADERNO's QUADERNO_LIST_SESSIONS tool input.
 */
type QUADERNO_LIST_SESSIONS_INPUT = {
  /**
   * Status
   * @description Filter sessions by status
   * @default null
   */
  status: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_LIST_SESSIONS tool output.
 */
type QUADERNO_LIST_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sessions
       * @description List of checkout sessions returned by the API
       */
      sessions: {
          /**
           * Billing Details Collection
           * @description Whether billing details were collected: 'auto' or 'required'
           */
          billing_details_collection: string;
          /**
           * Cancel Url
           * @description URL to redirect if payment is canceled
           */
          cancel_url: string;
          /**
           * SessionCoupon
           * @description Details of applied coupon, if any
           * @default null
           */
          coupon: {
              /**
               * Amount Off
               * @description Amount deducted from subtotal
               * @default null
               */
              amount_off: number | null;
              /**
               * Code
               * @description Coupon code
               */
              code: string;
              /**
               * Created At
               * @description Timestamp when coupon was created
               * @default null
               */
              created_at: number | null;
              /**
               * Currency
               * @description Currency of the coupon amount
               * @default null
               */
              currency: string | null;
              /**
               * Id
               * @description Unique identifier for the coupon
               */
              id: number;
              /**
               * Kind
               * @description Type of coupon: 'amount_off' or 'percent_off'
               * @default null
               */
              kind: string | null;
              /**
               * Max Redemptions
               * @description Max times this coupon can be used
               * @default null
               */
              max_redemptions: number | null;
              /**
               * Name
               * @description User-friendly name of the coupon
               * @default null
               */
              name: string | null;
              /**
               * Percent Off
               * @description Percentage deducted from subtotal
               * @default null
               */
              percent_off: number | null;
              /**
               * Redeem By
               * @description ISO date when coupon expires
               * @default null
               */
              redeem_by: string | null;
              /**
               * Times Redeemed
               * @description Number of times coupon has been redeemed
               * @default null
               */
              times_redeemed: number | null;
          } | null;
          /**
           * Coupon Collection
           * @description Whether coupon collection was enabled
           */
          coupon_collection: boolean;
          /**
           * Created At
           * @description Timestamp when session was created
           */
          created_at: number;
          /**
           * Custom
           * @description Custom metadata forwarded to the payment processor
           * @default null
           */
          custom: string | null;
          /**
           * SessionCustomer
           * @description Customer billing information
           * @default null
           */
          customer: {
              /**
               * Billing City
               * @description Customer billing city
               * @default null
               */
              billing_city: string | null;
              /**
               * Billing Country
               * @description Customer billing country code
               * @default null
               */
              billing_country: string | null;
              /**
               * Billing Postal Code
               * @description Customer billing postal code
               * @default null
               */
              billing_postal_code: string | null;
              /**
               * Billing Street Line 1
               * @description Customer billing address line 1
               * @default null
               */
              billing_street_line_1: string | null;
              /**
               * Billing Street Line 2
               * @description Customer billing address line 2
               * @default null
               */
              billing_street_line_2: string | null;
              /**
               * Company
               * @description Customer company name
               * @default null
               */
              company: string | null;
              /**
               * Contact
               * @description Associated contact ID
               * @default null
               */
              contact: number | null;
              /**
               * Email
               * @description Customer email address
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description Customer first name
               * @default null
               */
              first_name: string | null;
              /**
               * Last Name
               * @description Customer last name
               * @default null
               */
              last_name: string | null;
              /**
               * Tax Id
               * @description Customer tax identification number
               * @default null
               */
              tax_id: string | null;
          } | null;
          /**
           * Id
           * @description Unique identifier for the checkout session
           */
          id: number;
          /**
           * Items
           * @description List of items in the session
           */
          items: {
              /**
               * Amount
               * @description Amount for this item
               */
              amount: number;
              /**
               * Currency
               * @description Currency code for the item amount
               */
              currency: string;
              /**
               * Description
               * @description Item description
               * @default null
               */
              description: string | null;
              /**
               * Name
               * @description Item name
               * @default null
               */
              name: string | null;
              /**
               * Product
               * @description Product code
               * @default null
               */
              product: string | null;
              /**
               * Quantity
               * @description Quantity of the item
               */
              quantity: number;
          }[];
          /**
           * Locale
           * @description Locale code for the checkout session
           */
          locale: string;
          /**
           * Metadata
           * @description Additional metadata attached to the session
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Payment Methods
           * @description Payment methods accepted in session
           */
          payment_methods: string[];
          /**
           * Permalink
           * @description Direct URL to the checkout session
           */
          permalink: string;
          /**
           * Processor
           * @description Payment processor used
           */
          processor: string;
          /**
           * Processor Id
           * @description Processor-assigned payment ID
           * @default null
           */
          processor_id: string | null;
          /**
           * Status
           * @description Current session status, e.g., 'pending', 'completed'
           */
          status: string;
          /**
           * Success Url
           * @description URL to redirect upon successful payment
           */
          success_url: string;
          /**
           * Updatable Quantity
           * @description Whether item quantities are updatable by customer
           */
          updatable_quantity: boolean;
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
 * Type of QUADERNO's QUADERNO_LIST_TAX_CODES tool input.
 */
type QUADERNO_LIST_TAX_CODES_INPUT = object;

/**
 * Type of QUADERNO's QUADERNO_LIST_TAX_CODES tool output.
 */
type QUADERNO_LIST_TAX_CODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tax Codes
       * @description Supported tax codes returned by the API
       */
      tax_codes: {
          /**
           * Description
           * @description Detailed description of the tax code
           */
          description: string;
          /**
           * Id
           * @description Code identifier: consulting, ebook, eservice, exempt, reduced, saas, or standard
           * @enum {string}
           */
          id: "consulting" | "ebook" | "eservice" | "exempt" | "reduced" | "saas" | "standard";
          /**
           * Name
           * @description Human-readable name of the tax code, e.g. 'Consulting'
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
 * Type of QUADERNO's QUADERNO_LIST_WEBHOOKS tool input.
 */
type QUADERNO_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of QUADERNO's QUADERNO_LIST_WEBHOOKS tool output.
 */
type QUADERNO_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks sorted by creation date (newest first)
       */
      webhooks: {
          /**
           * Auth Key
           * @description Authentication key for the webhook
           */
          auth_key: string;
          /**
           * Created At
           * @description Creation timestamp of the webhook (ISO 8601)
           */
          created_at: string;
          /**
           * Events Sent
           * @description Number of events sent to the webhook
           */
          events_sent: number;
          /**
           * Events Types
           * @description List of event types the webhook is subscribed to
           */
          events_types: string[];
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: number;
          /**
           * Last Error
           * @description Last error message encountered by the webhook
           * @default null
           */
          last_error: string | null;
          /**
           * Last Error At
           * @description Timestamp of the last error encountered by the webhook
           * @default null
           */
          last_error_at: string | null;
          /**
           * Last Sent At
           * @description Timestamp of the last event successfully sent to the webhook
           * @default null
           */
          last_sent_at: string | null;
          /**
           * Url
           * @description URL of the webhook endpoint
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
 * Type of QUADERNO's QUADERNO_RETRIEVE_CONTACT tool input.
 */
type QUADERNO_RETRIEVE_CONTACT_INPUT = {
  /**
   * Id
   * @description ID of the contact to retrieve
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_CONTACT tool output.
 */
type QUADERNO_RETRIEVE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description City/District/Suburb/Town/Village
       * @default null
       */
      city: string | null;
      /**
       * Contact Person
       * @description Contact person if the contact is a company
       * @default null
       */
      contact_person: string | null;
      /**
       * Country
       * @description 2-letter ISO country code
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp of when the contact was created
       * @default null
       */
      created_at: number | null;
      /**
       * Department
       * @description Department if the contact is a company
       * @default null
       */
      department: string | null;
      /**
       * Discount
       * @description Default discount for this contact
       * @default null
       */
      discount: number | null;
      /**
       * Email
       * @description The contact's email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description The contact's first name (if the contact is a person)
       * @default null
       */
      first_name: string | null;
      /**
       * Full Name
       * @description The contact's full name
       * @default null
       */
      full_name: string | null;
      /**
       * Id
       * @description Unique identifier for the contact
       */
      id: number;
      /**
       * Kind
       * @description Type of contact; either 'company' or 'person'
       * @default null
       * @enum {string|null}
       */
      kind: "company" | "person" | null;
      /**
       * Language
       * @description Preferred language; 2-letter ISO language code
       * @default null
       */
      language: string | null;
      /**
       * Last Name
       * @description The contact's last name (if the contact is a person)
       * @default null
       */
      last_name: string | null;
      /**
       * Notes
       * @description Internal notes about the contact
       * @default null
       */
      notes: string | null;
      /**
       * Permalink
       * Format: uri
       * @description URL to the contact's billing page
       * @default null
       */
      permalink: string | null;
      /**
       * Phone 1
       * @description The contact's phone number
       * @default null
       */
      phone_1: string | null;
      /**
       * Postal Code
       * @description ZIP or postal code
       * @default null
       */
      postal_code: string | null;
      /**
       * Processor
       * @description External platform where the contact was imported from
       * @default null
       */
      processor: string | null;
      /**
       * Processor Id
       * @description ID assigned to the contact by the payment processor
       * @default null
       */
      processor_id: string | null;
      /**
       * Region
       * @description State/Province/Region
       * @default null
       */
      region: string | null;
      /**
       * Street Line 1
       * @description Address line 1 (Street address/PO Box)
       * @default null
       */
      street_line_1: string | null;
      /**
       * Street Line 2
       * @description Address line 2 (Apartment/Suite/Unit/Building)
       * @default null
       */
      street_line_2: string | null;
      /**
       * Tax Id
       * @description The contact's tax identification number
       * @default null
       */
      tax_id: string | null;
      /**
       * Tax Status
       * @description Specifies the tax status of the contact; 'taxable', 'exempt', or 'reverse'
       * @default null
       * @enum {string|null}
       */
      tax_status: "taxable" | "exempt" | "reverse" | null;
      /**
       * Url
       * Format: uri
       * @description API URL for the contact
       * @default null
       */
      url: string | null;
      /**
       * Web
       * Format: uri
       * @description The contact's website
       * @default null
       */
      web: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_COUPON tool input.
 */
type QUADERNO_RETRIEVE_COUPON_INPUT = {
  /**
   * Id
   * @description Unique identifier of the coupon to retrieve
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_COUPON tool output.
 */
type QUADERNO_RETRIEVE_COUPON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount Off Cents
       * @description Fixed amount in cents to subtract
       * @default null
       */
      amount_off_cents: number | null;
      /**
       * Code
       * @description Unique coupon code
       */
      code: string;
      /**
       * Currency
       * @description Three-letter ISO currency code, uppercase
       * @default null
       */
      currency: string | null;
      /**
       * Id
       * @description Unique identifier for the coupon
       */
      id: number;
      /**
       * Max Redemptions
       * @description Maximum number of times this coupon can be redeemed
       * @default null
       */
      max_redemptions: number | null;
      /**
       * Name
       * @description Display name of the coupon on invoices
       * @default null
       */
      name: string | null;
      /**
       * Percent Off
       * @description Percentage to subtract from the purchase subtotal
       * @default null
       */
      percent_off: number | null;
      /**
       * Processor Id
       * @description Processor id
       * @default null
       */
      processor_id: string | null;
      /**
       * Redeem By
       * @description Date (YYYY-MM-DD) after which the coupon can no longer be redeemed
       * @default null
       */
      redeem_by: string | null;
      /**
       * Times Redeemed
       * @description Number of times this coupon has been redeemed
       * @default null
       */
      times_redeemed: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_EVIDENCE tool input.
 */
type QUADERNO_RETRIEVE_EVIDENCE_INPUT = {
  /**
   * Id
   * @description ID of the evidence to retrieve
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_EVIDENCE tool output.
 */
type QUADERNO_RETRIEVE_EVIDENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Additional Evidence
       * @description Additional evidence used to proof the customer's location
       * @default null
       */
      additional_evidence: string | null;
      /**
       * Additional Evidence Country
       * @description 2-letter ISO 3166-1 code for the additional evidence country
       * @default null
       */
      additional_evidence_country: string | null;
      /**
       * Bank Country
       * @description 2-letter ISO 3166-1 code of the customer's bank country
       * @default null
       */
      bank_country: string | null;
      /**
       * Billing Country
       * @description 2-letter ISO 3166-1 code of the billing country
       * @default null
       */
      billing_country: string | null;
      /**
       * Created At
       * @description Timestamp when the evidence was created
       * @default null
       */
      created_at: number | null;
      /**
       * Document Id
       * @description ID of the related document (e.g., invoice)
       */
      document_id: number;
      /**
       * Id
       * @description Unique identifier for the evidence object
       */
      id: number;
      /**
       * Ip Address
       * @description The customer's IP address
       * @default null
       */
      ip_address: string | null;
      /**
       * Ip Country
       * @description 2-letter ISO 3166-1 code for the IP country
       * @default null
       */
      ip_country: string | null;
      /**
       * Notes
       * @description Internal notes about the evidence
       * @default null
       */
      notes: string | null;
      /**
       * State
       * @description State of the evidence: 'unsettled', 'conflicting', or 'confirmed'
       * @enum {string}
       */
      state: "unsettled" | "conflicting" | "confirmed";
      /**
       * Url
       * Format: uri
       * @description API URL for the evidence object
       * @default null
       */
      url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_INVOICE tool input.
 */
type QUADERNO_RETRIEVE_INVOICE_INPUT = {
  /**
   * Id
   * @description ID of the invoice to retrieve
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_INVOICE tool output.
 */
type QUADERNO_RETRIEVE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Details of the invoiced contact
       */
      contact: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Timestamp of invoice creation
       */
      created_at: number;
      /**
       * Currency
       * @description Currency code (ISO 4217, e.g., USD)
       */
      currency: string;
      /**
       * Discount Cents
       * @description Discount amount in cents
       */
      discount_cents: number;
      /**
       * Due Date
       * @description Date the invoice is due (YYYY-MM-DD)
       * @default null
       */
      due_date: string | null;
      /**
       * Id
       * @description Unique identifier for the invoice
       */
      id: number;
      /**
       * Issue Date
       * @description Date the invoice was issued (YYYY-MM-DD)
       */
      issue_date: string;
      /**
       * Items
       * @description Line items on the invoice
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Number
       * @description Invoice number
       */
      number: string;
      /**
       * Payments
       * @description Payments applied to this invoice
       */
      payments: {
          [key: string]: unknown;
      }[];
      /**
       * Pdf
       * Format: uri
       * @description URL to download the invoice PDF
       */
      pdf: string;
      /**
       * Permalink
       * Format: uri
       * @description URL to view the invoice online
       */
      permalink: string;
      /**
       * State
       * @description Invoice state (e.g., outstanding, paid)
       */
      state: string;
      /**
       * Subtotal Cents
       * @description Subtotal amount in cents
       */
      subtotal_cents: number;
      /**
       * Total Cents
       * @description Total amount in cents
       */
      total_cents: number;
      /**
       * Url
       * Format: uri
       * @description API URL for this invoice resource
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
 * Type of QUADERNO's QUADERNO_RETRIEVE_JURISDICTION tool input.
 */
type QUADERNO_RETRIEVE_JURISDICTION_INPUT = {
  /**
   * Id
   * @description ID of the desired jurisdiction
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_JURISDICTION tool output.
 */
type QUADERNO_RETRIEVE_JURISDICTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description 2-letter ISO country code
       */
      country: string;
      /**
       * Id
       * @description Unique identifier for the jurisdiction
       */
      id: number;
      /**
       * Name
       * @description Name of the tax jurisdiction
       */
      name: string;
      /**
       * Region
       * @description Region or state, if applicable
       * @default null
       */
      region: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_PRODUCT tool input.
 */
type QUADERNO_RETRIEVE_PRODUCT_INPUT = {
  /**
   * Id
   * @description ID of the desired product
   */
  id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_RETRIEVE_PRODUCT tool output.
 */
type QUADERNO_RETRIEVE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The product's SKU (Stock Keeping Unit)
       */
      code: string;
      /**
       * Country
       * @description 2-letter ISO country code, e.g., 'US'
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp of when the product was created
       */
      created_at: number | null;
      /**
       * Currency
       * @description 3-letter ISO currency code, uppercase, e.g., 'USD'
       */
      currency: string;
      /**
       * Description
       * @description The product's description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the product
       */
      id: number;
      /**
       * Kind
       * @description Type of transaction: 'one_off' or 'subscription'
       * @enum {string}
       */
      kind: "one_off" | "subscription";
      /**
       * Name
       * @description The product's displayable name
       */
      name: string;
      /**
       * Paypal Interval Duration
       * @description For subscriptions: number of times the charge should recur
       * @default null
       */
      paypal_interval_duration: number | null;
      /**
       * Paypal Interval Frequency
       * @description For subscriptions: number of intervals between subscription billings
       * @default null
       */
      paypal_interval_frequency: number | null;
      /**
       * Paypal Interval Unit
       * @description For subscriptions: specifies billing frequency
       * @default null
       * @enum {string|null}
       */
      paypal_interval_unit: "daily" | "weekly" | "monthly" | "yearly" | null;
      /**
       * Product Type
       * @description Product is a tangible 'good' or a 'service'
       * @enum {string}
       */
      product_type: "good" | "service";
      /**
       * Stock
       * @description Stock quantity for physical products
       * @default null
       */
      stock: string | null;
      /**
       * Stripe Plan Id
       * @description ID of the Stripe price related to the subscription
       * @default null
       */
      stripe_plan_id: string | null;
      /**
       * Tax Based On
       * @description How taxes are calculated: based on customer country or specific country
       * @enum {string}
       */
      tax_based_on: "customer_country" | "country";
      /**
       * Tax Class
       * @description Tax class that applies to the product
       * @enum {string}
       */
      tax_class: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced";
      /**
       * Tax Type
       * @description Specify if unit_cost includes ('included') or excludes ('excluded') taxes
       * @enum {string}
       */
      tax_type: "excluded" | "included";
      /**
       * Unit Cost
       * @description The unit price to be charged, e.g., '9.99'
       */
      unit_cost: string;
      /**
       * Url
       * @description URL to access this product resource
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
 * Type of QUADERNO's QUADERNO_UPDATE_CREDIT_NOTE tool input.
 */
type QUADERNO_UPDATE_CREDIT_NOTE_INPUT = {
  /**
   * Attachment
   * @description Represents a file attachment for the credit note.
   * @default null
   */
  attachment: {
      /**
       * Data
       * @description Base64-encoded content of the file
       */
      data: string;
      /**
       * Filename
       * @description File name including extension
       */
      filename: string;
      /**
       * Public
       * @description Whether the file should be publicly accessible
       */
      public: boolean;
  } | null;
  /**
   * Custom Metadata
   * @description Custom key-value metadata attached to the credit note
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Id
   * @description ID of the credit note to update
   */
  id?: number;
  /**
   * Notes
   * @description Extra notes about the credit note
   * @default null
   */
  notes: string | null;
  /**
   * Payment Details
   * @description Details about accepted payment methods
   * @default null
   */
  payment_details: string | null;
  /**
   * Po Number
   * @description Purchase order number
   * @default null
   */
  po_number: string | null;
  /**
   * Street Line 1
   * @description Billing address line 1
   * @default null
   */
  street_line_1: string | null;
  /**
   * Street Line 2
   * @description Billing address line 2
   * @default null
   */
  street_line_2: string | null;
  /**
   * Tag List
   * @description List of tags; multiple tags joined by commas
   * @default null
   */
  tag_list: string[] | null;
};

/**
 * Type of QUADERNO's QUADERNO_UPDATE_CREDIT_NOTE tool output.
 */
type QUADERNO_UPDATE_CREDIT_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of QUADERNO's QUADERNO_UPDATE_INVOICE tool input.
 */
type QUADERNO_UPDATE_INVOICE_INPUT = {
  /**
   * Attachment
   * @description Represents a file attachment for the invoice.
   * @default null
   */
  attachment: {
      /**
       * Data
       * @description Base64-encoded content of the file
       */
      data: string;
      /**
       * Filename
       * @description File name including extension
       */
      filename: string;
      /**
       * Public
       * @description Whether the file should be publicly accessible
       */
      public: boolean;
  } | null;
  /**
   * Custom Metadata
   * @description Custom key-value metadata attached to the invoice
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Id
   * @description ID of the invoice to update
   */
  id?: number;
  /**
   * Notes
   * @description Extra notes about the invoice
   * @default null
   */
  notes: string | null;
  /**
   * Payment Details
   * @description Details about accepted payment methods
   * @default null
   */
  payment_details: string | null;
  /**
   * Po Number
   * @description Purchase order number
   * @default null
   */
  po_number: string | null;
  /**
   * Street Line 1
   * @description Billing address line 1
   * @default null
   */
  street_line_1: string | null;
  /**
   * Street Line 2
   * @description Billing address line 2
   * @default null
   */
  street_line_2: string | null;
  /**
   * Tag List
   * @description List of tags; multiple tags will be joined with commas
   * @default null
   */
  tag_list: string[] | null;
};

/**
 * Type of QUADERNO's QUADERNO_UPDATE_INVOICE tool output.
 */
type QUADERNO_UPDATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of QUADERNO's QUADERNO_UPDATE_PRODUCT tool input.
 */
type QUADERNO_UPDATE_PRODUCT_INPUT = {
  /**
   * Code
   * @description Product SKU (Stock Keeping Unit)
   * @default null
   */
  code: string | null;
  /**
   * Country
   * @description 2-letter ISO country code
   * @default null
   */
  country: string | null;
  /**
   * Currency
   * @description 3-letter ISO currency code, uppercase
   * @default null
   */
  currency: string | null;
  /**
   * Description
   * @description Product description for display
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description ID of the product to update
   */
  id?: number;
  /**
   * Kind
   * @description Transaction type
   * @default null
   * @enum {string|null}
   */
  kind: "one_off" | "subscription" | null;
  /**
   * Name
   * @description Product name for display
   * @default null
   */
  name: string | null;
  /**
   * Paypal Interval Duration
   * @description Subscription recurrence count
   * @default null
   */
  paypal_interval_duration: number | null;
  /**
   * Paypal Interval Frequency
   * @description Subscription billing frequency count
   * @default null
   */
  paypal_interval_frequency: number | null;
  /**
   * Paypal Interval Unit
   * @description Subscription billing frequency unit
   * @default null
   * @enum {string|null}
   */
  paypal_interval_unit: "daily" | "weekly" | "monthly" | "yearly" | null;
  /**
   * Product Type
   * @description Product type
   * @default null
   * @enum {string|null}
   */
  product_type: "good" | "service" | null;
  /**
   * Stock
   * @description Product stock level
   * @default null
   */
  stock: string | null;
  /**
   * Stripe Plan Id
   * @description Stripe subscription price ID
   * @default null
   */
  stripe_plan_id: string | null;
  /**
   * Tax Based On
   * @description Tax calculation basis
   * @default null
   * @enum {string|null}
   */
  tax_based_on: "customer_country" | "country" | null;
  /**
   * Tax Class
   * @description Tax class for the product
   * @default null
   * @enum {string|null}
   */
  tax_class: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced" | null;
  /**
   * Tax Type
   * @description Whether unit_cost includes tax or not
   * @default null
   * @enum {string|null}
   */
  tax_type: "excluded" | "included" | null;
  /**
   * Unit Cost
   * @description Unit price to be charged
   * @default null
   */
  unit_cost: string | null;
};

/**
 * Type of QUADERNO's QUADERNO_UPDATE_PRODUCT tool output.
 */
type QUADERNO_UPDATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Product SKU
       * @default null
       */
      code: string | null;
      /**
       * Country
       * @description 2-letter ISO country code
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Product creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Currency
       * @description 3-letter ISO currency code
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Product description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Product ID
       * @default null
       */
      id: number | null;
      /**
       * Kind
       * @description Transaction type
       * @default null
       * @enum {string|null}
       */
      kind: "one_off" | "subscription" | null;
      /**
       * Name
       * @description Product name for display
       * @default null
       */
      name: string | null;
      /**
       * Paypal Interval Duration
       * @description Subscription recurrence count
       * @default null
       */
      paypal_interval_duration: number | null;
      /**
       * Paypal Interval Frequency
       * @description Subscription billing frequency count
       * @default null
       */
      paypal_interval_frequency: number | null;
      /**
       * Paypal Interval Unit
       * @description Subscription billing frequency unit
       * @default null
       * @enum {string|null}
       */
      paypal_interval_unit: "daily" | "weekly" | "monthly" | "yearly" | null;
      /**
       * Product Type
       * @description Product type
       * @default null
       * @enum {string|null}
       */
      product_type: "good" | "service" | null;
      /**
       * Stock
       * @description Product stock level
       * @default null
       */
      stock: string | null;
      /**
       * Stripe Plan Id
       * @description Stripe subscription price ID
       * @default null
       */
      stripe_plan_id: string | null;
      /**
       * Tax Based On
       * @description Tax calculation basis
       * @default null
       * @enum {string|null}
       */
      tax_based_on: "customer_country" | "country" | null;
      /**
       * Tax Class
       * @description Tax class for the product
       * @default null
       * @enum {string|null}
       */
      tax_class: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced" | null;
      /**
       * Tax Type
       * @description Whether unit_cost includes tax or not
       * @default null
       * @enum {string|null}
       */
      tax_type: "excluded" | "included" | null;
      /**
       * Unit Cost
       * @description Unit price charged
       * @default null
       */
      unit_cost: string | null;
      /**
       * Url
       * @description API URL of the product
       * @default null
       */
      url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_VALIDATE_TAX_ID tool input.
 */
type QUADERNO_VALIDATE_TAX_ID_INPUT = {
  /**
   * Country
   * @description Tax ID's registration country as a 2-letter ISO 3166-1 code.
   */
  country?: string;
  /**
   * Tax Id
   * @description The tax identification number to validate.
   */
  tax_id?: string;
};

/**
 * Type of QUADERNO's QUADERNO_VALIDATE_TAX_ID tool output.
 */
type QUADERNO_VALIDATE_TAX_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Valid
       * @description Indicates if the tax ID is valid (true), invalid (false), or temporarily unavailable (null).
       * @default null
       */
      valid: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of QUADERNO's QUADERNO_VOID_CREDIT_NOTE tool input.
 */
type QUADERNO_VOID_CREDIT_NOTE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the credit note to void
   */
  id?: number;
};

/**
 * Type of QUADERNO's QUADERNO_VOID_CREDIT_NOTE tool output.
 */
type QUADERNO_VOID_CREDIT_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type map of all available tool input types for toolkit "QUADERNO".
 */
export type QUADERNO_TOOL_INPUTS = {
  CALCULATE_TAX_RATE: QUADERNO_CALCULATE_TAX_RATE_INPUT
  CREATE_CONTACT: QUADERNO_CREATE_CONTACT_INPUT
  CREATE_INVOICE: QUADERNO_CREATE_INVOICE_INPUT
  CREATE_PRODUCT: QUADERNO_CREATE_PRODUCT_INPUT
  DELETE_COUPON: QUADERNO_DELETE_COUPON_INPUT
  DELETE_EXPENSE: QUADERNO_DELETE_EXPENSE_INPUT
  DELETE_PRODUCT: QUADERNO_DELETE_PRODUCT_INPUT
  DELETE_TAX_ID: QUADERNO_DELETE_TAX_ID_INPUT
  DELIVER_CREDIT_NOTE: QUADERNO_DELIVER_CREDIT_NOTE_INPUT
  DELIVER_INVOICE: QUADERNO_DELIVER_INVOICE_INPUT
  LIST_CONTACTS: QUADERNO_LIST_CONTACTS_INPUT
  LIST_COUPONS: QUADERNO_LIST_COUPONS_INPUT
  LIST_EVIDENCE: QUADERNO_LIST_EVIDENCE_INPUT
  LIST_EXPENSES: QUADERNO_LIST_EXPENSES_INPUT
  LIST_JURISDICTIONS: QUADERNO_LIST_JURISDICTIONS_INPUT
  LIST_PRODUCTS: QUADERNO_LIST_PRODUCTS_INPUT
  LIST_REGISTERED_TAX_I_DS: QUADERNO_LIST_REGISTERED_TAX_I_DS_INPUT
  LIST_REPORTING_REQUESTS: QUADERNO_LIST_REPORTING_REQUESTS_INPUT
  LIST_SESSIONS: QUADERNO_LIST_SESSIONS_INPUT
  LIST_TAX_CODES: QUADERNO_LIST_TAX_CODES_INPUT
  LIST_WEBHOOKS: QUADERNO_LIST_WEBHOOKS_INPUT
  RETRIEVE_CONTACT: QUADERNO_RETRIEVE_CONTACT_INPUT
  RETRIEVE_COUPON: QUADERNO_RETRIEVE_COUPON_INPUT
  RETRIEVE_EVIDENCE: QUADERNO_RETRIEVE_EVIDENCE_INPUT
  RETRIEVE_INVOICE: QUADERNO_RETRIEVE_INVOICE_INPUT
  RETRIEVE_JURISDICTION: QUADERNO_RETRIEVE_JURISDICTION_INPUT
  RETRIEVE_PRODUCT: QUADERNO_RETRIEVE_PRODUCT_INPUT
  UPDATE_CREDIT_NOTE: QUADERNO_UPDATE_CREDIT_NOTE_INPUT
  UPDATE_INVOICE: QUADERNO_UPDATE_INVOICE_INPUT
  UPDATE_PRODUCT: QUADERNO_UPDATE_PRODUCT_INPUT
  VALIDATE_TAX_ID: QUADERNO_VALIDATE_TAX_ID_INPUT
  VOID_CREDIT_NOTE: QUADERNO_VOID_CREDIT_NOTE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "QUADERNO".
 */
export type QUADERNO_TOOL_OUTPUTS = {
  CALCULATE_TAX_RATE: QUADERNO_CALCULATE_TAX_RATE_OUTPUT
  CREATE_CONTACT: QUADERNO_CREATE_CONTACT_OUTPUT
  CREATE_INVOICE: QUADERNO_CREATE_INVOICE_OUTPUT
  CREATE_PRODUCT: QUADERNO_CREATE_PRODUCT_OUTPUT
  DELETE_COUPON: QUADERNO_DELETE_COUPON_OUTPUT
  DELETE_EXPENSE: QUADERNO_DELETE_EXPENSE_OUTPUT
  DELETE_PRODUCT: QUADERNO_DELETE_PRODUCT_OUTPUT
  DELETE_TAX_ID: QUADERNO_DELETE_TAX_ID_OUTPUT
  DELIVER_CREDIT_NOTE: QUADERNO_DELIVER_CREDIT_NOTE_OUTPUT
  DELIVER_INVOICE: QUADERNO_DELIVER_INVOICE_OUTPUT
  LIST_CONTACTS: QUADERNO_LIST_CONTACTS_OUTPUT
  LIST_COUPONS: QUADERNO_LIST_COUPONS_OUTPUT
  LIST_EVIDENCE: QUADERNO_LIST_EVIDENCE_OUTPUT
  LIST_EXPENSES: QUADERNO_LIST_EXPENSES_OUTPUT
  LIST_JURISDICTIONS: QUADERNO_LIST_JURISDICTIONS_OUTPUT
  LIST_PRODUCTS: QUADERNO_LIST_PRODUCTS_OUTPUT
  LIST_REGISTERED_TAX_I_DS: QUADERNO_LIST_REGISTERED_TAX_I_DS_OUTPUT
  LIST_REPORTING_REQUESTS: QUADERNO_LIST_REPORTING_REQUESTS_OUTPUT
  LIST_SESSIONS: QUADERNO_LIST_SESSIONS_OUTPUT
  LIST_TAX_CODES: QUADERNO_LIST_TAX_CODES_OUTPUT
  LIST_WEBHOOKS: QUADERNO_LIST_WEBHOOKS_OUTPUT
  RETRIEVE_CONTACT: QUADERNO_RETRIEVE_CONTACT_OUTPUT
  RETRIEVE_COUPON: QUADERNO_RETRIEVE_COUPON_OUTPUT
  RETRIEVE_EVIDENCE: QUADERNO_RETRIEVE_EVIDENCE_OUTPUT
  RETRIEVE_INVOICE: QUADERNO_RETRIEVE_INVOICE_OUTPUT
  RETRIEVE_JURISDICTION: QUADERNO_RETRIEVE_JURISDICTION_OUTPUT
  RETRIEVE_PRODUCT: QUADERNO_RETRIEVE_PRODUCT_OUTPUT
  UPDATE_CREDIT_NOTE: QUADERNO_UPDATE_CREDIT_NOTE_OUTPUT
  UPDATE_INVOICE: QUADERNO_UPDATE_INVOICE_OUTPUT
  UPDATE_PRODUCT: QUADERNO_UPDATE_PRODUCT_OUTPUT
  VALIDATE_TAX_ID: QUADERNO_VALIDATE_TAX_ID_OUTPUT
  VOID_CREDIT_NOTE: QUADERNO_VOID_CREDIT_NOTE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's QUADERNO toolkit.
 */
export const QUADERNO = {
  slug: "quaderno",
  tools: {
    /**
     * Tool to calculate applicable tax rate for given address and transaction type. use when you need tax details before invoicing.
     */
    CALCULATE_TAX_RATE: "QUADERNO_CALCULATE_TAX_RATE",
    /**
     * Tool to create a new contact (customer or vendor). use when you need to add a person or company contact in quaderno.
     */
    CREATE_CONTACT: "QUADERNO_CREATE_CONTACT",
    /**
     * Tool to create a new invoice. use when you need customer, items, and payment details prepared before invoicing.
     */
    CREATE_INVOICE: "QUADERNO_CREATE_INVOICE",
    /**
     * Tool to create a new product. use after configuring sku, pricing, and tax settings.
     */
    CREATE_PRODUCT: "QUADERNO_CREATE_PRODUCT",
    /**
     * Tool to permanently delete a coupon. use when you have confirmed the coupon id is correct and need to remove it permanently (cannot be undone).
     */
    DELETE_COUPON: "QUADERNO_DELETE_COUPON",
    /**
     * Tool to permanently delete an expense by id. use when you have confirmed the expense id is correct and no longer need the expense.
     */
    DELETE_EXPENSE: "QUADERNO_DELETE_EXPENSE",
    /**
     * Tool to permanently delete a product by id. use when you have confirmed the product id is correct and no longer need the product.
     */
    DELETE_PRODUCT: "QUADERNO_DELETE_PRODUCT",
    /**
     * Tool to permanently delete a registered tax id by id. use when you have confirmed the tax id exists and no longer need the tax id.
     */
    DELETE_TAX_ID: "QUADERNO_DELETE_TAX_ID",
    /**
     * Tool to deliver a credit note to the customer via email. use after confirming the credit note is finalized.
     */
    DELIVER_CREDIT_NOTE: "QUADERNO_DELIVER_CREDIT_NOTE",
    /**
     * Tool to deliver an invoice to the customer via email. use after confirming the invoice is finalized to send it.
     */
    DELIVER_INVOICE: "QUADERNO_DELIVER_INVOICE",
    /**
     * Tool to list contacts, paginated and filterable by name, email, or tax id. use when you need to retrieve subsets of your contacts.
     */
    LIST_CONTACTS: "QUADERNO_LIST_CONTACTS",
    /**
     * Tool to list all coupons. use when you need to retrieve available coupons sorted by creation date (newest first).
     */
    LIST_COUPONS: "QUADERNO_LIST_COUPONS",
    /**
     * Tool to list all evidence objects. use when you need to retrieve location evidences, optionally filtered by state or document id.
     */
    LIST_EVIDENCE: "QUADERNO_LIST_EVIDENCE",
    /**
     * Tool to list all expenses, paginated. use when you need to page through expenses with optional filters. example: listexpenses(limit=50, created before="exp 12345").
     */
    LIST_EXPENSES: "QUADERNO_LIST_EXPENSES",
    /**
     * Tool to list all tax jurisdictions. use when you need supported jurisdictions for tax calculations.
     */
    LIST_JURISDICTIONS: "QUADERNO_LIST_JURISDICTIONS",
    /**
     * Tool to list all products. use when you need a paginated and filterable product catalog.
     */
    LIST_PRODUCTS: "QUADERNO_LIST_PRODUCTS",
    /**
     * Tool to list all registered tax ids. use when retrieving jurisdictions where your business has registered tax ids. supports optional cursor-based pagination.
     */
    LIST_REGISTERED_TAX_I_DS: "QUADERNO_LIST_REGISTERED_TAX_I_DS",
    /**
     * Tool to list all reporting requests. use after creating report requests to retrieve their status and download links.
     */
    LIST_REPORTING_REQUESTS: "QUADERNO_LIST_REPORTING_REQUESTS",
    /**
     * Tool to list all quaderno checkout sessions, paginated and filterable by status. use when you need to retrieve your checkout sessions.
     */
    LIST_SESSIONS: "QUADERNO_LIST_SESSIONS",
    /**
     * Tool to list all supported tax codes. use when you need to retrieve the full set of tax codes for classifying items.
     */
    LIST_TAX_CODES: "QUADERNO_LIST_TAX_CODES",
    /**
     * Tool to list all webhooks. use when you need to retrieve webhook configurations.
     */
    LIST_WEBHOOKS: "QUADERNO_LIST_WEBHOOKS",
    /**
     * Tool to retrieve details of an existing contact by id. use after confirming contact id.
     */
    RETRIEVE_CONTACT: "QUADERNO_RETRIEVE_CONTACT",
    /**
     * Tool to retrieve details of an existing coupon by id. use after obtaining the coupon id from creation or list operations.
     */
    RETRIEVE_COUPON: "QUADERNO_RETRIEVE_COUPON",
    /**
     * Tool to retrieve details of an existing evidence object by id. use after confirming evidence id.
     */
    RETRIEVE_EVIDENCE: "QUADERNO_RETRIEVE_EVIDENCE",
    /**
     * Tool to retrieve details of an existing invoice by id. use when you need full invoice details for reporting or reconciliation.
     */
    RETRIEVE_INVOICE: "QUADERNO_RETRIEVE_INVOICE",
    /**
     * Tool to retrieve a tax jurisdiction by id. use when you need the name, country, and region of a specific jurisdiction after confirming its id. example: "retrieve jurisdiction 94".
     */
    RETRIEVE_JURISDICTION: "QUADERNO_RETRIEVE_JURISDICTION",
    /**
     * Tool to retrieve details of an existing product by id. use after confirming the product id exists.
     */
    RETRIEVE_PRODUCT: "QUADERNO_RETRIEVE_PRODUCT",
    /**
     * Tool to update a credit note. use when you need to modify metadata, tags, notes, billing address, or attach files to an existing credit note. only limited fields can be updated if it has already been paid or delivered.
     */
    UPDATE_CREDIT_NOTE: "QUADERNO_UPDATE_CREDIT_NOTE",
    /**
     * Tool to update an invoice. use when the invoice is not yet paid or delivered to modify only allowed fields. only the fields: po number, tag list, payment details, notes, street line 1, street line 2, custom metadata, and attachment can be modified.
     */
    UPDATE_INVOICE: "QUADERNO_UPDATE_INVOICE",
    /**
     * Tool to update a product; unspecified fields remain unchanged. use after fetching the product to apply partial updates.
     */
    UPDATE_PRODUCT: "QUADERNO_UPDATE_PRODUCT",
    /**
     * Tool to validate a tax id. use when confirming whether a given country-specific tax id is valid. example: validate tax id 'de303954554' for germany.
     */
    VALIDATE_TAX_ID: "QUADERNO_VALIDATE_TAX_ID",
    /**
     * Tool to void a credit note. use when you need to cancel an existing credit note.
     */
    VOID_CREDIT_NOTE: "QUADERNO_VOID_CREDIT_NOTE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "QUADERNO".
 */
export type QUADERNO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "QUADERNO".
 */
export type QUADERNO_TRIGGER_EVENTS = {}
