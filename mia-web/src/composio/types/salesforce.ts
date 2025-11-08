import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SALESFORCE's SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION tool input.
 */
type SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION_INPUT = {
  /**
   * Account Number
   * @description Account number assigned to this account (max 40 chars).
   */
  AccountNumber?: string;
  /**
   * Account Source
   * @description Origin source of the account record (admin-defined picklist, values max 40 chars).
   */
  AccountSource?: string;
  /**
   * Active  C
   * @description Custom field indicating if the account is active.
   */
  Active__c?: string;
  /**
   * Annual Revenue
   * @description Estimated annual revenue.
   */
  AnnualRevenue?: number;
  /**
   * Billing City
   * @description City for the billing address (max 40 chars).
   */
  BillingCity?: string;
  /**
   * Billing Country
   * @description Country for the billing address (max 80 chars).
   */
  BillingCountry?: string;
  /**
   * Billing Geocode Accuracy
   * @description Accuracy level of the geocode for the billing address.
   */
  BillingGeocodeAccuracy?: string;
  /**
   * Billing Latitude
   * @description Latitude for the billing address (-90 to 90, up to 15 decimal places).
   */
  BillingLatitude?: number;
  /**
   * Billing Longitude
   * @description Longitude for the billing address (-180 to 180, up to 15 decimal places).
   */
  BillingLongitude?: number;
  /**
   * Billing Postal Code
   * @description Postal code for the billing address (max 20 chars).
   */
  BillingPostalCode?: string;
  /**
   * Billing State
   * @description State or province for the billing address (max 80 chars).
   */
  BillingState?: string;
  /**
   * Billing Street
   * @description Street address for the billing location.
   */
  BillingStreet?: string;
  /**
   * Clean Status
   * @description Data quality status compared with Data.com.
   */
  CleanStatus?: string;
  /**
   * Created By Id
   * @description ID of the user who created the account (read-only).
   */
  CreatedById?: string;
  /**
   * Created Date
   * Format: date-time
   * @description Date and time of account creation (read-only).
   */
  CreatedDate?: string;
  /**
   * Customer Priority  C
   * @description Custom field for customer priority (e.g., High, Medium, Low).
   */
  CustomerPriority__c?: string;
  /**
   * Dandb Company Id
   * @description Associated Dun & Bradstreet company ID for D&B integration (read-only).
   */
  DandbCompanyId?: string;
  /**
   * Description
   * @description Text description of the account (max 32,000 chars).
   */
  Description?: string;
  /**
   * Duns Number
   * @description D-U-N-S number (9-digit identifier, max 9 chars). For business accounts. Requires Data.com Prospector/Clean.
   */
  DunsNumber?: string;
  /**
   * Fax
   * @description Fax number for the account.
   */
  Fax?: string;
  /**
   * Id
   * @description Unique identifier for the account (system-generated and read-only upon creation).
   */
  Id?: string;
  /**
   * Industry
   * @description Primary industry of the account (picklist, max 40 chars).
   */
  Industry?: string;
  /**
   * Is Deleted
   * @description Indicates if the account is in the Recycle Bin (read-only).
   */
  IsDeleted?: boolean;
  /**
   * Jigsaw
   * @description Data.com company ID reference (max 20 chars, API v22.0+). For business accounts. Read-only, do not modify.
   */
  Jigsaw?: string;
  /**
   * Jigsaw Company Id
   * @description Associated Data.com company ID (read-only).
   */
  JigsawCompanyId?: string;
  /**
   * Last Activity Date
   * Format: date
   * @description Most recent due date of an event or closed task associated with the record (read-only).
   */
  LastActivityDate?: string;
  /**
   * Last Modified By Id
   * @description ID of the user who last modified the account (read-only).
   */
  LastModifiedById?: string;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Date and time of last modification (read-only).
   */
  LastModifiedDate?: string;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Timestamp of when current user last accessed this record or related items (read-only).
   */
  LastReferencedDate?: string;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Timestamp of when current user last viewed this account record (read-only).
   */
  LastViewedDate?: string;
  /**
   * Master Record Id
   * @description ID of the master record if this account was merged (read-only).
   */
  MasterRecordId?: string;
  /**
   * Naics Code
   * @description NAICS code (6-digit industry classifier, max 8 chars). For business accounts. Requires Data.com Prospector/Clean.
   */
  NaicsCode?: string;
  /**
   * Naics Desc
   * @description Description of line of business based on NAICS code (max 120 chars). For business accounts. Requires Data.com Prospector/Clean.
   */
  NaicsDesc?: string;
  /**
   * Name
   * @description Name of the account (required, max 255 chars). For Person Accounts, this is a concatenated field from the associated contact and not directly modifiable.
   */
  Name?: string;
  /**
   * Number Of Employees
   * @description Number of employees (max 8 digits).
   */
  NumberOfEmployees?: number;
  /**
   * Numberof Locations  C
   * @description Custom field for the number of physical locations.
   */
  NumberofLocations__c?: number;
  /**
   * Operating Hours Id
   * @description ID of associated operating hours. Requires Salesforce Field Service.
   */
  OperatingHoursId?: string;
  /**
   * Owner Id
   * @description ID of the Salesforce user owning this account. 'Transfer Record' permission may be needed to update if not the API user (API v16.0+).
   */
  OwnerId?: string;
  /**
   * Ownership
   * @description Ownership structure (picklist).
   */
  Ownership?: string;
  /**
   * Parent Id
   * @description ID of the parent account for subsidiary or hierarchical relationships.
   */
  ParentId?: string;
  /**
   * Phone
   * @description Primary phone number for the account (max 40 chars).
   */
  Phone?: string;
  /**
   * Photo Url
   * @description URL path for the social network profile image (read-only). Blank if Social Accounts and Contacts is not enabled for the user.
   */
  PhotoUrl?: string;
  /**
   * Rating
   * @description Prospect rating (picklist).
   */
  Rating?: string;
  /**
   * Sla Expiration Date  C
   * Format: date
   * @description Custom field for SLA expiration date.
   */
  SLAExpirationDate__c?: string;
  /**
   * Sla Serial Number  C
   * @description Custom field for SLA serial number.
   */
  SLASerialNumber__c?: string;
  /**
   * Sla  C
   * @description Custom field for Service Level Agreement (SLA) type/details.
   */
  SLA__c?: string;
  /**
   * Shipping City
   * @description City for the shipping address (max 40 chars).
   */
  ShippingCity?: string;
  /**
   * Shipping Country
   * @description Country for the shipping address (max 80 chars).
   */
  ShippingCountry?: string;
  /**
   * Shipping Geocode Accuracy
   * @description Accuracy level of the geocode for the shipping address.
   */
  ShippingGeocodeAccuracy?: string;
  /**
   * Shipping Latitude
   * @description Latitude for the shipping address (-90 to 90, up to 15 decimal places).
   */
  ShippingLatitude?: number;
  /**
   * Shipping Longitude
   * @description Longitude for the shipping address (-180 to 180, up to 15 decimal places).
   */
  ShippingLongitude?: number;
  /**
   * Shipping Postal Code
   * @description Postal code for the shipping address (max 20 chars).
   */
  ShippingPostalCode?: string;
  /**
   * Shipping State
   * @description State or province for the shipping address (max 80 chars).
   */
  ShippingState?: string;
  /**
   * Shipping Street
   * @description Street address for the shipping location (max 255 chars).
   */
  ShippingStreet?: string;
  /**
   * Sic
   * @description Standard Industrial Classification (SIC) code (max 20 chars). For business accounts only.
   */
  Sic?: string;
  /**
   * Sic Desc
   * @description Description of line of business based on SIC code (max 80 chars). For business accounts only.
   */
  SicDesc?: string;
  /**
   * Site
   * @description Name of the account’s specific location or site (max 80 chars).
   */
  Site?: string;
  /**
   * System Modstamp
   * Format: date-time
   * @description Timestamp of last modification by user or automated process (read-only).
   */
  SystemModstamp?: string;
  /**
   * Ticker Symbol
   * @description Stock market ticker symbol (max 20 chars). For business accounts only.
   */
  TickerSymbol?: string;
  /**
   * Tradestyle
   * @description Organization's 'Doing Business As' (DBA) name (max 255 chars). For business accounts. Requires Data.com Prospector/Clean.
   */
  Tradestyle?: string;
  /**
   * Type
   * @description Type of account, influencing categorization and behavior.
   */
  Type?: string;
  /**
   * Upsell Opportunity  C
   * @description Custom field indicating upsell opportunity potential.
   */
  UpsellOpportunity__c?: string;
  /**
   * Website
   * @description Website URL of the account (max 255 chars).
   */
  Website?: string;
  /**
   * Year Started
   * @description Year the organization was established (max 4 chars). For business accounts. Requires Data.com Prospector/Clean.
   */
  YearStarted?: string;
  /**
   * Attributes  Type
   * @description Internal Salesforce field: Type of the SObject (e.g., 'Account'). System-set or read-only.
   */
  attributes__type?: string;
  /**
   * Attributes  Url
   * @description Internal Salesforce field: Relative API URL for this SObject record. System-set or read-only.
   */
  attributes__url?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION tool output.
 */
type SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION_OUTPUT = {
  /**
   * Data
   * @description Salesforce API response. On success, includes new account 'id' and 'success' status (e.g., {'id': '001xx000003DGgPAAW', 'success': True, 'errors': []}).
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
 * Type of SALESFORCE's SALESFORCE_ADD_CONTACT_TO_CAMPAIGN tool input.
 */
type SALESFORCE_ADD_CONTACT_TO_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The Salesforce ID of the campaign to add the contact to.
   */
  campaign_id?: string;
  /**
   * Contact Id
   * @description The Salesforce ID of the contact to add to the campaign.
   */
  contact_id?: string;
  /**
   * Status
   * @description The status of the campaign member. Common values include 'Sent', 'Responded'. The available statuses depend on campaign configuration.
   * @default Sent
   */
  status: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_ADD_CONTACT_TO_CAMPAIGN tool output.
 */
type SALESFORCE_ADD_CONTACT_TO_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new CampaignMember ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_ADD_LEAD_TO_CAMPAIGN tool input.
 */
type SALESFORCE_ADD_LEAD_TO_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The Salesforce ID of the campaign to add the lead to.
   */
  campaign_id?: string;
  /**
   * Lead Id
   * @description The Salesforce ID of the lead to add to the campaign.
   */
  lead_id?: string;
  /**
   * Status
   * @description The status of the campaign member. Common values include 'Sent', 'Responded'. The available statuses depend on campaign configuration.
   * @default Sent
   */
  status: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_ADD_LEAD_TO_CAMPAIGN tool output.
 */
type SALESFORCE_ADD_LEAD_TO_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new CampaignMember ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM tool input.
 */
type SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM_INPUT = {
  /**
   * Description
   * @description Optional description for this line item.
   * @default
   */
  description: string;
  /**
   * Discount
   * @description Discount percentage (0-100). Cannot be used with TotalPrice.
   * @default null
   */
  discount: number | null;
  /**
   * Opportunity Id
   * @description The Salesforce ID of the opportunity to add a product to.
   */
  opportunity_id?: string;
  /**
   * Pricebook Entry Id
   * @description The ID of the PricebookEntry that contains the product and price information. This links to a specific product in a specific pricebook.
   */
  pricebook_entry_id?: string;
  /**
   * Quantity
   * @description The quantity of the product to add.
   */
  quantity?: number;
  /**
   * Service Date
   * @description Service date for the product in YYYY-MM-DD format.
   * @default null
   */
  service_date: string | null;
  /**
   * Total Price
   * @description The total price for this line item. Cannot be used with UnitPrice or Discount.
   * @default null
   */
  total_price: number | null;
  /**
   * Unit Price
   * @description The sales price per unit. If not specified, uses the standard price from the pricebook entry.
   * @default null
   */
  unit_price: number | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM tool output.
 */
type SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new OpportunityLineItem ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES tool input.
 */
type SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES_INPUT = {
  /**
   * Lead Id
   * @description The Salesforce ID of the lead to apply assignment rules to.
   */
  lead_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES tool output.
 */
type SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing action execution results or error information.
       */
      response_data: unknown[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT tool input.
 */
type SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The Salesforce ID of the account to associate the contact with.
   */
  account_id?: string;
  /**
   * Contact Id
   * @description The Salesforce ID of the contact to associate with an account.
   */
  contact_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT tool output.
 */
type SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS tool input.
 */
type SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS_INPUT = {
  /**
   * Clone Products
   * @description Whether to clone the opportunity's products (line items). Set to false to clone only the opportunity.
   * @default true
   */
  clone_products: boolean;
  /**
   * Close Date
   * @description Close date for the cloned opportunity in YYYY-MM-DD format. If not specified, uses original close date.
   * @default null
   */
  close_date: string | null;
  /**
   * New Name
   * @description Name for the cloned opportunity. If not specified, will append 'Clone of' to original name.
   * @default
   */
  new_name: string;
  /**
   * Opportunity Id
   * @description The ID of the opportunity to clone.
   */
  opportunity_id?: string;
  /**
   * Stage Name
   * @description Stage for the cloned opportunity. If not specified, uses original stage.
   * @default
   */
  stage_name: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS tool output.
 */
type SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the new opportunity ID and optionally the cloned line item IDs.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CLONE_RECORD tool input.
 */
type SALESFORCE_CLONE_RECORD_INPUT = {
  /**
   * Field Updates
   * @description Optional field updates to apply to the cloned record. Use this to modify specific fields in the clone.
   * @default null
   */
  field_updates: {
      [key: string]: unknown;
  } | null;
  /**
   * Object Type
   * @description The Salesforce object type to clone (e.g., Account, Contact, Lead, Opportunity).
   */
  object_type?: string;
  /**
   * Record Id
   * @description The ID of the record to clone.
   */
  record_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CLONE_RECORD tool output.
 */
type SALESFORCE_CLONE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new record ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_COMPLETE_TASK tool input.
 */
type SALESFORCE_COMPLETE_TASK_INPUT = {
  /**
   * Completion Notes
   * @description Optional notes to add about the task completion. Will be appended to existing description.
   * @default
   */
  completion_notes: string;
  /**
   * Task Id
   * @description The Salesforce ID of the task to mark as completed.
   */
  task_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_COMPLETE_TASK tool output.
 */
type SALESFORCE_COMPLETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_ACCOUNT tool input.
 */
type SALESFORCE_CREATE_ACCOUNT_INPUT = {
  /**
   * Account Source
   * @description Source of the account.
   * @default
   */
  account_source: string;
  /**
   * Annual Revenue
   * @description Estimated annual revenue.
   * @default null
   */
  annual_revenue: number | null;
  /**
   * Billing City
   * @description Billing address city.
   * @default
   */
  billing_city: string;
  /**
   * Billing Country
   * @description Billing address country.
   * @default
   */
  billing_country: string;
  /**
   * Billing Postal Code
   * @description Billing address postal/zip code.
   * @default
   */
  billing_postal_code: string;
  /**
   * Billing State
   * @description Billing address state/province.
   * @default
   */
  billing_state: string;
  /**
   * Billing Street
   * @description Billing address street.
   * @default
   */
  billing_street: string;
  /**
   * Description
   * @description Text description of the account.
   * @default
   */
  description: string;
  /**
   * Fax
   * @description Fax number.
   * @default
   */
  fax: string;
  /**
   * Industry
   * @description Industry the account belongs to.
   * @default
   */
  industry: string;
  /**
   * Name
   * @description Account name (required field in Salesforce).
   */
  name?: string;
  /**
   * Number Of Employees
   * @description Number of employees.
   * @default null
   */
  number_of_employees: number | null;
  /**
   * Parent Id
   * @description ID of the parent account if this is a subsidiary.
   * @default
   */
  parent_id: string;
  /**
   * Phone
   * @description Main phone number.
   * @default
   */
  phone: string;
  /**
   * Shipping City
   * @description Shipping address city.
   * @default
   */
  shipping_city: string;
  /**
   * Shipping Country
   * @description Shipping address country.
   * @default
   */
  shipping_country: string;
  /**
   * Shipping Postal Code
   * @description Shipping address postal/zip code.
   * @default
   */
  shipping_postal_code: string;
  /**
   * Shipping State
   * @description Shipping address state/province.
   * @default
   */
  shipping_state: string;
  /**
   * Shipping Street
   * @description Shipping address street.
   * @default
   */
  shipping_street: string;
  /**
   * Sic Desc
   * @description Standard Industrial Classification (SIC) description.
   * @default
   */
  sic_desc: string;
  /**
   * Type
   * @description Type of account.
   * @default
   */
  type: string;
  /**
   * Website
   * @description Company website URL.
   * @default
   */
  website: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_ACCOUNT tool output.
 */
type SALESFORCE_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Salesforce response containing the new account ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_CAMPAIGN tool input.
 */
type SALESFORCE_CREATE_CAMPAIGN_INPUT = {
  /**
   * Actual Cost
   * @description Actual cost spent on the campaign.
   * @default 0
   */
  actual_cost: number;
  /**
   * Budgeted Cost
   * @description Budgeted cost for the campaign.
   * @default 0
   */
  budgeted_cost: number;
  /**
   * Description
   * @description Detailed description of the campaign.
   * @default
   */
  description: string;
  /**
   * End Date
   * @description Campaign end date in YYYY-MM-DD format.
   * @default
   */
  end_date: string;
  /**
   * Expected Response
   * @description Expected response rate as a percentage.
   * @default 0
   */
  expected_response: number;
  /**
   * Expected Revenue
   * @description Expected revenue from the campaign.
   * @default 0
   */
  expected_revenue: number;
  /**
   * Is Active
   * @description Whether the campaign is currently active.
   * @default false
   */
  is_active: boolean;
  /**
   * Name
   * @description Campaign name (required field in Salesforce).
   */
  name?: string;
  /**
   * Number Sent
   * @description Number of individuals targeted by the campaign.
   * @default 0
   */
  number_sent: number;
  /**
   * Parent Id
   * @description ID of the parent campaign if this is a child campaign.
   * @default
   */
  parent_id: string;
  /**
   * Start Date
   * @description Campaign start date in YYYY-MM-DD format.
   * @default
   */
  start_date: string;
  /**
   * Status
   * @description Current status of the campaign.
   * @default
   */
  status: string;
  /**
   * Type
   * @description Type of campaign.
   * @default
   */
  type: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_CAMPAIGN tool output.
 */
type SALESFORCE_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Salesforce response containing the new campaign ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST tool input.
 */
type SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST_INPUT = {
  /**
   * Actual Cost
   * @description Actual cost of the campaign, in the organization's currency.
   */
  ActualCost?: number;
  /**
   * Amount All Opportunities
   * @description Read-only. Total monetary amount of all opportunities (including closed/won) in this campaign, in organization's currency. Label: Value Opportunities in Campaign.
   */
  AmountAllOpportunities?: number;
  /**
   * Amount Won Opportunities
   * @description Read-only. Total monetary amount of closed/won opportunities in this campaign, in organization's currency. Label: Value Won Opportunities in Campaign.
   */
  AmountWonOpportunities?: number;
  /**
   * Budgeted Cost
   * @description Budgeted cost for this campaign, in the organization's currency.
   */
  BudgetedCost?: number;
  /**
   * Campaign Member Record Type Id
   * @description Record type ID for associated CampaignMember records, determining their fields and layout.
   */
  CampaignMemberRecordTypeId?: string;
  /**
   * Created By Id
   * @description Read-only. ID of the user who created this campaign record.
   */
  CreatedById?: string;
  /**
   * Created Date
   * Format: date-time
   * @description Read-only. Creation date and time (ISO 8601).
   */
  CreatedDate?: string;
  /**
   * Description
   * @description Detailed description of the campaign (limit 32KB; first 255 characters displayed in reports).
   */
  Description?: string;
  /**
   * End Date
   * Format: date
   * @description Ending date for the campaign (YYYY-MM-DD); responses received after this date are still counted.
   */
  EndDate?: string;
  /**
   * Expected Response
   * @description Percentage of responses expected from targeted individuals.
   */
  ExpectedResponse?: number;
  /**
   * Expected Revenue
   * @description Expected revenue from this campaign, in the organization's currency.
   */
  ExpectedRevenue?: number;
  /**
   * Id
   * @description Unique identifier for the campaign record, usually system-generated upon creation.
   */
  Id?: string;
  /**
   * Is Active
   * @description Indicates if the campaign is active. Label: Active.
   */
  IsActive?: boolean;
  /**
   * Is Deleted
   * @description Indicates if the campaign record has been deleted.
   */
  IsDeleted?: boolean;
  /**
   * Last Activity Date
   * Format: date
   * @description Read-only. Most recent activity date (event due date or closed task due date, YYYY-MM-DD).
   */
  LastActivityDate?: string;
  /**
   * Last Modified By Id
   * @description Read-only. ID of the user who last modified this campaign record.
   */
  LastModifiedById?: string;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Read-only. Last modification date and time (ISO 8601).
   */
  LastModifiedDate?: string;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Read-only. Timestamp of current user's last access to this record, a related record, or a list view (ISO 8601).
   */
  LastReferencedDate?: string;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Read-only. Timestamp of current user's last view of this record/list view (ISO 8601). Null if only accessed (see LastReferencedDate) but not viewed.
   */
  LastViewedDate?: string;
  /**
   * Name
   * @description Required. Name of the campaign (limit 80 characters).
   */
  Name?: string;
  /**
   * Number Of Contacts
   * @description Read-only. Total contacts associated with this campaign. Label: Total Contacts.
   */
  NumberOfContacts?: number;
  /**
   * Number Of Converted Leads
   * @description Read-only. Leads converted to an account and contact from this campaign. Label: Converted Leads.
   */
  NumberOfConvertedLeads?: number;
  /**
   * Number Of Leads
   * @description Read-only. Total leads associated with this campaign. Label: Leads in Campaign.
   */
  NumberOfLeads?: number;
  /**
   * Number Of Opportunities
   * @description Read-only. Total opportunities associated with this campaign. Label: Opportunities in Campaign.
   */
  NumberOfOpportunities?: number;
  /**
   * Number Of Responses
   * @description Read-only. Contacts and unconverted leads with Member Status “Responded”. Label: Responses in Campaign.
   */
  NumberOfResponses?: number;
  /**
   * Number Of Won Opportunities
   * @description Read-only. Closed or won opportunities from this campaign. Label: Won Opportunities in Campaign.
   */
  NumberOfWonOpportunities?: number;
  /**
   * Number Sent
   * @description Total number of individuals targeted (e.g., emails sent). Label: Num Sent.
   */
  NumberSent?: number;
  /**
   * Owner Id
   * @description ID of the campaign owner. Defaults to the ID of the user making the API call.
   */
  OwnerId?: string;
  /**
   * Parent Id
   * @description ID of the parent Campaign record for hierarchical grouping.
   */
  ParentId?: string;
  /**
   * Start Date
   * Format: date
   * @description Starting date for the campaign (YYYY-MM-DD).
   */
  StartDate?: string;
  /**
   * Status
   * @description Current status of the campaign (limit 40 characters).
   */
  Status?: string;
  /**
   * System Modstamp
   * Format: date-time
   * @description Read-only. Last modification date and time by a user or automated process (ISO 8601).
   */
  SystemModstamp?: string;
  /**
   * Type
   * @description Type of campaign (limit 40 characters).
   */
  Type?: string;
  /**
   * Attributes  Type
   * @description sObject type, typically 'Campaign'.
   */
  attributes__type?: string;
  /**
   * Attributes  Url
   * @description Read-only. Relative URL to the campaign record.
   */
  attributes__url?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST tool output.
 */
type SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_CREATE_CONTACT tool input.
 */
type SALESFORCE_CREATE_CONTACT_INPUT = {
  /**
   * Account Id
   * @description ID of the Account this contact is associated with.
   * @default
   */
  account_id: string;
  /**
   * Birthdate
   * @description Contact's birthdate in YYYY-MM-DD format.
   * @default
   */
  birthdate: string;
  /**
   * Department
   * @description Contact's department.
   * @default
   */
  department: string;
  /**
   * Description
   * @description Additional notes or description about the contact.
   * @default
   */
  description: string;
  /**
   * Email
   * @description Contact's email address.
   * @default
   */
  email: string;
  /**
   * First Name
   * @description Contact's first name.
   * @default
   */
  first_name: string;
  /**
   * Last Name
   * @description Contact's last name (required field in Salesforce).
   */
  last_name?: string;
  /**
   * Lead Source
   * @description Source from which this contact originated.
   * @default
   */
  lead_source: string;
  /**
   * Mailing City
   * @description Contact's mailing city.
   * @default
   */
  mailing_city: string;
  /**
   * Mailing Country
   * @description Contact's mailing country.
   * @default
   */
  mailing_country: string;
  /**
   * Mailing Postal Code
   * @description Contact's mailing postal/zip code.
   * @default
   */
  mailing_postal_code: string;
  /**
   * Mailing State
   * @description Contact's mailing state/province.
   * @default
   */
  mailing_state: string;
  /**
   * Mailing Street
   * @description Contact's mailing street address.
   * @default
   */
  mailing_street: string;
  /**
   * Mobile Phone
   * @description Contact's mobile phone number.
   * @default
   */
  mobile_phone: string;
  /**
   * Phone
   * @description Contact's primary phone number.
   * @default
   */
  phone: string;
  /**
   * Title
   * @description Contact's job title.
   * @default
   */
  title: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_CONTACT tool output.
 */
type SALESFORCE_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Salesforce response containing the new contact ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_LEAD tool input.
 */
type SALESFORCE_CREATE_LEAD_INPUT = {
  /**
   * Annual Revenue
   * @description Lead's company annual revenue.
   * @default 0
   */
  annual_revenue: number;
  /**
   * City
   * @description Lead's city.
   * @default
   */
  city: string;
  /**
   * Company
   * @description Lead's company name (required field in Salesforce).
   */
  company?: string;
  /**
   * Country
   * @description Lead's country.
   * @default
   */
  country: string;
  /**
   * Description
   * @description Additional notes or description about the lead.
   * @default
   */
  description: string;
  /**
   * Email
   * @description Lead's email address.
   * @default
   */
  email: string;
  /**
   * First Name
   * @description Lead's first name.
   * @default
   */
  first_name: string;
  /**
   * Industry
   * @description Lead's industry.
   * @default
   */
  industry: string;
  /**
   * Last Name
   * @description Lead's last name (required field in Salesforce).
   */
  last_name?: string;
  /**
   * Lead Source
   * @description Source of the lead.
   * @default
   */
  lead_source: string;
  /**
   * Number Of Employees
   * @description Number of employees at lead's company.
   * @default 0
   */
  number_of_employees: number;
  /**
   * Phone
   * @description Lead's phone number.
   * @default
   */
  phone: string;
  /**
   * Postal Code
   * @description Lead's postal/zip code.
   * @default
   */
  postal_code: string;
  /**
   * Rating
   * @description Lead rating.
   * @default
   */
  rating: string;
  /**
   * State
   * @description Lead's state/province.
   * @default
   */
  state: string;
  /**
   * Status
   * @description Lead status.
   * @default
   */
  status: string;
  /**
   * Street
   * @description Lead's street address.
   * @default
   */
  street: string;
  /**
   * Title
   * @description Lead's job title.
   * @default
   */
  title: string;
  /**
   * Website
   * @description Lead's company website.
   * @default
   */
  website: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_LEAD tool output.
 */
type SALESFORCE_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Salesforce response containing the new lead ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE tool input.
 */
type SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE_INPUT = {
  /**
   * Annual Revenue
   * @description Annual revenue of the lead’s company.
   */
  AnnualRevenue?: number;
  /**
   * City
   * @description City for the address.
   */
  City?: string;
  /**
   * Clean Status
   * @description Record's clean status compared with Data.com (e.g., Matched, Different, Pending).
   */
  CleanStatus?: string;
  /**
   * Company
   * @description Company name (up to 255 characters). If person accounts are enabled and this is null, lead converts to a person account.
   */
  Company?: string;
  /**
   * Company Duns Number
   * @description D-U-N-S number (unique 9-digit business ID; max 9 chars). Available if Data.com Prospector/Clean used.
   */
  CompanyDunsNumber?: string;
  /**
   * Converted Account Id
   * @description ID of the Account object from conversion. Read-only.
   */
  ConvertedAccountId?: string;
  /**
   * Converted Contact Id
   * @description ID of the Contact object from conversion. Read-only.
   */
  ConvertedContactId?: string;
  /**
   * Converted Date
   * Format: date
   * @description Conversion date. Read-only; set upon conversion.
   */
  ConvertedDate?: string;
  /**
   * Converted Opportunity Id
   * @description ID of the Opportunity from conversion. Read-only.
   */
  ConvertedOpportunityId?: string;
  /**
   * Country
   * @description Country for the address.
   */
  Country?: string;
  /**
   * Created By Id
   * @description ID of user who created this. System-generated, read-only.
   */
  CreatedById?: string;
  /**
   * Created Date
   * Format: date-time
   * @description Creation timestamp. System-generated, read-only.
   */
  CreatedDate?: string;
  /**
   * Current Generators  C
   * @description Custom field for information about current generators or similar equipment/services.
   */
  CurrentGenerators__c?: string;
  /**
   * Dandb Company Id
   * @description Associated D&B Company record ID. Available if Data.com used.
   */
  DandbCompanyId?: string;
  /**
   * Description
   * @description Description (up to 32,000 characters).
   */
  Description?: string;
  /**
   * Email
   * @description Email address.
   */
  Email?: string;
  /**
   * Email Bounced Date
   * Format: date-time
   * @description Date/time of last email bounce (if bounce management active).
   */
  EmailBouncedDate?: string;
  /**
   * Email Bounced Reason
   * @description Reason for last email bounce (if bounce management active).
   */
  EmailBouncedReason?: string;
  /**
   * First Name
   * @description First name (up to 40 characters).
   */
  FirstName?: string;
  /**
   * Individual Id
   * @description Associated data privacy record ID. Available if Data Protection/Privacy enabled.
   */
  IndividualId?: string;
  /**
   * Industry
   * @description Primary industry of the lead's company.
   */
  Industry?: string;
  /**
   * Is Converted
   * @description True if converted to Account/Contact/Opportunity; false otherwise. Read-only; set upon conversion.
   */
  IsConverted?: boolean;
  /**
   * Is Deleted
   * @description Indicates if the lead is in the Recycle Bin (true) or not (false). Salesforce defaults to false if this field is omitted.
   */
  IsDeleted?: boolean;
  /**
   * Is Priority Record
   * @description True if this lead is marked as a priority record.
   */
  IsPriorityRecord?: boolean;
  /**
   * Is Unread By Owner
   * @description True if assigned to an owner but not yet viewed by them. Salesforce defaults to true when a lead is created or its owner changes.
   */
  IsUnreadByOwner?: boolean;
  /**
   * Jigsaw
   * @description Data.com contact ID (max 20 chars). Indicates Data.com import. Do not modify; for import troubleshooting.
   */
  Jigsaw?: string;
  /**
   * Jigsaw Contact Id
   * @description Jigsaw contact ID. Read-only.
   */
  JigsawContactId?: string;
  /**
   * Last Activity Date
   * Format: date
   * @description Later of most recent event's Due Date or most recently closed task's Due Date. Read-only.
   */
  LastActivityDate?: string;
  /**
   * Last Modified By Id
   * @description ID of user who last modified this. System-generated, read-only.
   */
  LastModifiedById?: string;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Last modification timestamp. System-generated, read-only.
   */
  LastModifiedDate?: string;
  /**
   * Last Name
   * @description Last name of the lead (up to 80 characters).
   */
  LastName?: string;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Timestamp when current user last accessed this or related record. Read-only.
   */
  LastReferencedDate?: string;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Timestamp when current user last viewed. Null if only accessed (LastReferencedDate) but not viewed. Read-only.
   */
  LastViewedDate?: string;
  /**
   * Lead Source
   * @description Source of the lead.
   * @enum {string}
   */
  LeadSource?: "Web" | "Other" | "Phone Inquiry" | "Partner Referral" | "Purchased List";
  /**
   * Master Record Id
   * @description ID of the master record if this lead was deleted due to a merge; null otherwise.
   */
  MasterRecordId?: string;
  /**
   * Number Of Employees
   * @description Number of employees at the lead’s company.
   */
  NumberOfEmployees?: number;
  /**
   * Numberof Locations  C
   * @description Custom field for the number of locations the lead's company has.
   */
  NumberofLocations__c?: number;
  /**
   * Owner Id
   * @description ID of the owner. Defaults to current user if unspecified.
   */
  OwnerId?: string;
  /**
   * Phone
   * @description Primary phone number.
   */
  Phone?: string;
  /**
   * Photo Url
   * @description Path for social network profile image URL; used with Salesforce instance URL. Empty if Social Accounts/Contacts disabled.
   */
  PhotoUrl?: string;
  /**
   * Postal Code
   * @description Postal or ZIP code for the address.
   */
  PostalCode?: string;
  /**
   * Primary  C
   * @description Custom field, possibly indicates if primary contact/lead.
   */
  Primary__c?: string;
  /**
   * Product Interest  C
   * @description Custom field indicating the product(s) the lead is interested in.
   */
  ProductInterest__c?: string;
  /**
   * Rating
   * @description Rating (e.g., Hot, Warm, Cold).
   */
  Rating?: string;
  /**
   * Sic Code  C
   * @description Custom field for Standard Industrial Classification (SIC) code.
   */
  SICCode__c?: string;
  /**
   * Salutation
   * @description Salutation for the lead.
   * @enum {string}
   */
  Salutation?: "Mr." | "Ms." | "Mrs." | "Dr." | "Prof.";
  /**
   * State
   * @description State or province for the address.
   */
  State?: string;
  /**
   * Status
   * @description Current status (e.g., Open, Contacted). Defined in LeadStatus object in Salesforce setup.
   */
  Status?: string;
  /**
   * Street
   * @description Street address.
   */
  Street?: string;
  /**
   * System Modstamp
   * Format: date-time
   * @description Timestamp of last modification by user or system. System-generated, read-only.
   */
  SystemModstamp?: string;
  /**
   * Title
   * @description Title (e.g., CFO, CEO; up to 128 characters).
   */
  Title?: string;
  /**
   * Website
   * @description Website URL.
   */
  Website?: string;
  /**
   * Attributes  Type
   * @description SObject type (typically 'Lead'). Usually metadata, not set by user on creation.
   */
  attributes__type?: string;
  /**
   * Attributes  Url
   * @description Relative URL of SObject record. Usually metadata, not set by user on creation.
   */
  attributes__url?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE tool output.
 */
type SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Salesforce response, typically including new lead ID and success status, or error details.
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
 * Type of SALESFORCE's SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER tool input.
 */
type SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER_INPUT = {
  /**
   * Account Id
   * @description Parent Account ID; must exist if specified. Caution advised when changing for portal-enabled contacts.
   */
  AccountId?: string;
  /**
   * Assistant Name
   * @description Assistant's name.
   */
  AssistantName?: string;
  /**
   * Assistant Phone
   * @description Assistant's phone.
   */
  AssistantPhone?: string;
  /**
   * Birthdate
   * Format: date
   * @description Birthdate (YYYY-MM-DD). SOQL queries ignore year for date comparisons (e.g., `Birthdate > TODAY`).
   */
  Birthdate?: string;
  /**
   * Clean Status
   * @description Record's clean status compared to Data.com (e.g., 'Matched' may appear as 'In Sync' in UI).
   */
  CleanStatus?: string;
  /**
   * Contact Source
   * @description Source of contact information, for more granular tracking than LeadSource.
   */
  ContactSource?: string;
  /**
   * Created By Id
   * @description Read-only: ID of user who created contact.
   */
  CreatedById?: string;
  /**
   * Created Date
   * Format: date-time
   * @description Read-only: Timestamp of contact creation.
   */
  CreatedDate?: string;
  /**
   * Department
   * @description Contact's department.
   */
  Department?: string;
  /**
   * Description
   * @description Description (up to 32KB). Label: Contact Description.
   */
  Description?: string;
  /**
   * Email
   * @description Email address.
   */
  Email?: string;
  /**
   * Email Bounced Date
   * Format: date-time
   * @description Date and time of email bounce, if bounce management is active and an email bounced.
   */
  EmailBouncedDate?: string;
  /**
   * Email Bounced Reason
   * @description Reason for email bounce, if bounce management is active and an email bounced.
   */
  EmailBouncedReason?: string;
  /**
   * Fax
   * @description Primary business fax. Label: Business Fax.
   */
  Fax?: string;
  /**
   * First Name
   * @description Contact's first name (up to 40 characters).
   */
  FirstName?: string;
  /**
   * Home Phone
   * @description Home phone.
   */
  HomePhone?: string;
  /**
   * Id
   * @description Unique contact identifier, system-generated; omit for new contact creation.
   */
  Id?: string;
  /**
   * Individual Id
   * @description ID of associated data privacy record. Available if Data Protection & Privacy enabled.
   */
  IndividualId?: string;
  /**
   * Is Deleted
   * @description Read-only: True if contact is in Recycle Bin. Label: Deleted.
   */
  IsDeleted?: boolean;
  /**
   * Is Email Bounced
   * @description True if email bounced; bounce management must be active.
   */
  IsEmailBounced?: boolean;
  /**
   * Is Priority Record
   * @description True if contact is a priority record.
   */
  IsPriorityRecord?: boolean;
  /**
   * Jigsaw
   * @description Read-only: Data.com Company ID (max 20 chars), indicates import from Data.com. Label: Data.com Key. Do not modify.
   */
  Jigsaw?: string;
  /**
   * Jigsaw Contact Id
   * @description Read-only: Jigsaw (Data.com) ID, links to Data.com contact data.
   */
  JigsawContactId?: string;
  /**
   * Languages  C
   * @description Custom field: Languages spoken by the contact (e.g., English;Spanish). '__c' denotes a custom field.
   */
  Languages__c?: string;
  /**
   * Last Activity Date
   * Format: date
   * @description Read-only: Most recent due date of associated event or closed task.
   */
  LastActivityDate?: string;
  /**
   * Last Cu Request Date
   * Format: date-time
   * @description Read-only: Timestamp of last contact update request (e.g., Data.com Clean).
   */
  LastCURequestDate?: string;
  /**
   * Last Cu Update Date
   * Format: date-time
   * @description Read-only: Timestamp of last update from a contact update request.
   */
  LastCUUpdateDate?: string;
  /**
   * Last Modified By Id
   * @description Read-only: ID of user who last modified contact.
   */
  LastModifiedById?: string;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Read-only: Timestamp of last modification.
   */
  LastModifiedDate?: string;
  /**
   * Last Name
   * @description Required: Contact's last name (up to 80 characters).
   */
  LastName?: string;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Read-only: Timestamp current user last accessed contact, related record, or its list view.
   */
  LastReferencedDate?: string;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Read-only: Timestamp current user last viewed contact. Null if only referenced.
   */
  LastViewedDate?: string;
  /**
   * Lead Source
   * @description Lead source for this contact (e.g., Web, Phone Inquiry).
   */
  LeadSource?: string;
  /**
   * Level  C
   * @description Custom field: Contact's level (e.g., Primary, Secondary). '__c' denotes a custom field.
   */
  Level__c?: string;
  /**
   * Mailing City
   * @description Mailing address: City.
   */
  MailingCity?: string;
  /**
   * Mailing Country
   * @description Mailing address: Country.
   */
  MailingCountry?: string;
  /**
   * Mailing Geocode Accuracy
   * @description Mailing address: Geocode accuracy. See Salesforce docs for geolocation compound fields.
   */
  MailingGeocodeAccuracy?: string;
  /**
   * Mailing Latitude
   * @description Mailing address: Latitude (-90 to 90, 15 decimal places). Use with MailingLongitude.
   */
  MailingLatitude?: number;
  /**
   * Mailing Longitude
   * @description Mailing address: Longitude (-180 to 180, 15 decimal places). Use with MailingLatitude.
   */
  MailingLongitude?: number;
  /**
   * Mailing Postal Code
   * @description Mailing address: Postal code.
   */
  MailingPostalCode?: string;
  /**
   * Mailing State
   * @description Mailing address: State or province.
   */
  MailingState?: string;
  /**
   * Mailing Street
   * @description Mailing address: Street.
   */
  MailingStreet?: string;
  /**
   * Master Record Id
   * @description Read-only: ID of the master record post-merge deletion; null otherwise.
   */
  MasterRecordId?: string;
  /**
   * Mobile Phone
   * @description Mobile phone.
   */
  MobilePhone?: string;
  /**
   * Name
   * @description Read-only: Full name, a concatenation of FirstName, MiddleName, LastName, and Suffix (up to 203 characters).
   */
  Name?: string;
  /**
   * Other City
   * @description Alternate address: City.
   */
  OtherCity?: string;
  /**
   * Other Country
   * @description Alternate address: Country.
   */
  OtherCountry?: string;
  /**
   * Other Geocode Accuracy
   * @description Alternate address: Geocode accuracy. See Salesforce docs for geolocation compound fields.
   */
  OtherGeocodeAccuracy?: string;
  /**
   * Other Latitude
   * @description Alternate address: Latitude (-90 to 90, 15 decimal places). Use with OtherLongitude.
   */
  OtherLatitude?: number;
  /**
   * Other Longitude
   * @description Alternate address: Longitude (-180 to 180, 15 decimal places). Use with OtherLatitude.
   */
  OtherLongitude?: number;
  /**
   * Other Phone
   * @description Alternate address phone.
   */
  OtherPhone?: string;
  /**
   * Other Postal Code
   * @description Alternate address: Postal code.
   */
  OtherPostalCode?: string;
  /**
   * Other State
   * @description Alternate address: State or province.
   */
  OtherState?: string;
  /**
   * Other Street
   * @description Alternate address: Street.
   */
  OtherStreet?: string;
  /**
   * Owner Id
   * @description ID of the Salesforce user owning this contact. Defaults to the logged-in user if unspecified.
   */
  OwnerId?: string;
  /**
   * Phone
   * @description Primary business phone. Label: Business Phone.
   */
  Phone?: string;
  /**
   * Photo Url
   * @description Read-only: Path for social profile image URL (redirects). Empty if Social Accounts & Contacts disabled.
   */
  PhotoUrl?: string;
  /**
   * Reports To Id
   * @description ID of manager contact reports to. Not for person accounts (IsPersonAccount true).
   */
  ReportsToId?: string;
  /**
   * Salutation
   * @description Honorific for the contact's name (e.g., Dr., Mr., Mrs.).
   */
  Salutation?: string;
  /**
   * System Modstamp
   * Format: date-time
   * @description Read-only: Timestamp of last system modification (user or automated).
   */
  SystemModstamp?: string;
  /**
   * Title
   * @description Contact's title (e.g., CEO, Vice President).
   */
  Title?: string;
  /**
   * Attributes  Type
   * @description Salesforce SObject type, typically 'Contact'. Part of 'attributes' metadata.
   */
  attributes__type?: string;
  /**
   * Attributes  Url
   * @description Relative URL for this SObject record, usually system-generated. Part of 'attributes' metadata.
   */
  attributes__url?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER tool output.
 */
type SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER_OUTPUT = {
  /**
   * Data
   * @description Salesforce API response data. On success, typically includes new contact 'id', 'success' flag (true), and empty 'errors' array (e.g., `{'id': '003R00000012345AAA', 'success': True, 'errors': []}`).
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
 * Type of SALESFORCE's SALESFORCE_CREATE_NOTE tool input.
 */
type SALESFORCE_CREATE_NOTE_INPUT = {
  /**
   * Body
   * @description Body/content of the note. Can contain detailed text information.
   * @default
   */
  body: string;
  /**
   * Is Private
   * @description Whether the note should be private (only visible to owner and users with Modify All Data permission).
   * @default false
   */
  is_private: boolean;
  /**
   * Owner Id
   * @description ID of the user who will own the note. Defaults to the current user if not specified.
   * @default
   */
  owner_id: string;
  /**
   * Parent Id
   * @description ID of the record to attach the note to (required field in Salesforce). Can be any record that supports notes like Account, Contact, Lead, Opportunity, etc.
   */
  parent_id?: string;
  /**
   * Title
   * @description Title of the note (required field in Salesforce).
   */
  title?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_NOTE tool output.
 */
type SALESFORCE_CREATE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Salesforce response containing the new note ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER tool input.
 */
type SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER_INPUT = {
  /**
   * Body
   * @description Content or body of the note.
   */
  Body?: string;
  /**
   * Created By Id
   * @description ID of the user who created the note (system-generated, read-only on create).
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Timestamp of note creation (system-generated, read-only on create).
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Id
   * @description Unique identifier for the Note object, typically auto-generated and not provided in the request.
   * @default null
   */
  Id: string | null;
  /**
   * Is Deleted
   * @description Indicates if the object is in the Recycle Bin. Label is Deleted.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Is Private
   * @description If true, restricts note visibility to the owner or users with "Modify All Data" permission. Label is Private.
   * @default null
   */
  IsPrivate: boolean | null;
  /**
   * Last Modified By Id
   * @description ID of the user who last modified the note (system-generated).
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Timestamp of last modification (system-generated).
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Owner Id
   * @description ID of the Salesforce User who will own the note; defaults to the API user.
   * @default null
   */
  OwnerId: string | null;
  /**
   * Parent Id
   * @description ID of the parent Salesforce record (e.g., Account, Contact) to which this note is related; must reference an existing record.
   */
  ParentId?: string;
  /**
   * System Modstamp
   * Format: date-time
   * @description Timestamp of last system change (system-generated).
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Title
   * @description Title of the note.
   */
  Title?: string;
  /**
   * Attributes  Type
   * @description SObject type, should be 'Note' if provided. Corresponds to `attributes.type` in the JSON body.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description API URL for the SObject. Corresponds to `attributes.url` in the JSON body (typically read-only).
   * @default null
   */
  attributes__url: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER tool output.
 */
type SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_CREATE_OPPORTUNITY tool input.
 */
type SALESFORCE_CREATE_OPPORTUNITY_INPUT = {
  /**
   * Account Id
   * @description ID of the Account this opportunity is associated with.
   * @default
   */
  account_id: string;
  /**
   * Amount
   * @description Estimated total sale amount.
   * @default 0
   */
  amount: number;
  /**
   * Close Date
   * @description Expected close date in YYYY-MM-DD format (required field in Salesforce).
   */
  close_date?: string;
  /**
   * Contact Id
   * @description ID of the primary Contact for this opportunity.
   * @default
   */
  contact_id: string;
  /**
   * Description
   * @description Text description of the opportunity.
   * @default
   */
  description: string;
  /**
   * Lead Source
   * @description Source of the opportunity.
   * @default
   */
  lead_source: string;
  /**
   * Name
   * @description Opportunity name (required field in Salesforce).
   */
  name?: string;
  /**
   * Next Step
   * @description Description of next step in sales process.
   * @default
   */
  next_step: string;
  /**
   * Pricebook2 Id
   * @description ID of the price book for this opportunity.
   * @default
   */
  pricebook2_id: string;
  /**
   * Probability
   * @description Percentage probability of closing (0-100).
   * @default 0
   */
  probability: number;
  /**
   * Stage Name
   * @description Current stage of the opportunity (required field in Salesforce).
   */
  stage_name?: string;
  /**
   * Type
   * @description Type of opportunity.
   * @default
   */
  type: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_OPPORTUNITY tool output.
 */
type SALESFORCE_CREATE_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Salesforce response containing the new opportunity ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_CREATE_OPPORTUNITY_RECORD tool input.
 */
type SALESFORCE_CREATE_OPPORTUNITY_RECORD_INPUT = {
  /**
   * Account Id
   * @description ID of the linked Account. Often crucial for creating a valid opportunity.
   */
  AccountId?: string;
  /**
   * Amount
   * @description Estimated total sale amount. If products are involved, this may be auto-calculated, and direct updates might be ignored.
   */
  Amount?: number;
  /**
   * Campaign Id
   * @description ID of the influencing Campaign. Ensure Campaign feature is enabled and ID is valid.
   */
  CampaignId?: string;
  /**
   * Close Date
   * Format: date
   * @description Expected close date (YYYY-MM-DD). Required.
   */
  CloseDate?: string;
  /**
   * Contact Id
   * @description ID of the primary Contact. Set only during creation. Use OpportunityContactRole object to modify or add other contacts later.
   */
  ContactId?: string;
  /**
   * Created By Id
   * @description Read-only. ID of the user who created this record. Auto-set by Salesforce.
   */
  CreatedById?: string;
  /**
   * Created Date
   * Format: date-time
   * @description Read-only. Creation timestamp. Auto-set by Salesforce.
   */
  CreatedDate?: string;
  /**
   * Current Generators  C
   * @description Custom field: Information on current generators.
   */
  CurrentGenerators__c?: string;
  /**
   * Delivery Installation Status  C
   * @description Custom field: Delivery or installation status.
   */
  DeliveryInstallationStatus__c?: string;
  /**
   * Description
   * @description Detailed text description. Limit: 32,000 characters.
   */
  Description?: string;
  /**
   * Expected Revenue
   * @description Read-only. Calculated as Amount * Probability. Cannot be set during creation.
   */
  ExpectedRevenue?: number;
  /**
   * Fiscal
   * @description Fiscal period ('YYYY Q' format, e.g., '2024 1') based on CloseDate. Used if standard fiscal year settings not enabled. Often auto-derived.
   */
  Fiscal?: string;
  /**
   * Fiscal Quarter
   * @description Fiscal quarter (1-4) of CloseDate. Often auto-derived from CloseDate based on org's fiscal year settings.
   */
  FiscalQuarter?: number;
  /**
   * Fiscal Year
   * @description Fiscal year (e.g., 2024) of CloseDate. Often auto-derived from CloseDate based on org's fiscal year settings.
   */
  FiscalYear?: number;
  /**
   * Forecast Category
   * @description Forecast category (e.g., 'Pipeline', 'Best Case'). Often implied by StageName. For API v12.0+, typically set via ForecastCategoryName. Values depend on Salesforce configuration.
   */
  ForecastCategory?: string;
  /**
   * Forecast Category Name
   * @description Name of the forecast category (e.g., 'Pipeline'). API v12.0+. Often implied by StageName but can be overridden. Typically determines ForecastCategory.
   */
  ForecastCategoryName?: string;
  /**
   * Has Open Activity
   * @description Read-only. Indicates if open activities (Events or Tasks) exist. API v35.0+.
   */
  HasOpenActivity?: boolean;
  /**
   * Has Opportunity Line Item
   * @description Read-only. Indicates if associated line items (products) exist. System-managed; ignored during creation.
   */
  HasOpportunityLineItem?: boolean;
  /**
   * Has Overdue Task
   * @description Read-only. Indicates if overdue Tasks exist. API v35.0+.
   */
  HasOverdueTask?: boolean;
  /**
   * Id
   * @description System-generated unique identifier. Typically not provided during creation; providing it may be ignored or cause an error.
   */
  Id?: string;
  /**
   * Is Closed
   * @description Read-only. Indicates if closed or open. Auto-set by Salesforce based on StageName; cannot be set on creation.
   */
  IsClosed?: boolean;
  /**
   * Is Deleted
   * @description Indicates if the record is in the Recycle Bin. Generally used for querying, not set during creation.
   */
  IsDeleted?: boolean;
  /**
   * Is Private
   * @description If true, this opportunity is private and only visible to the owner and users with appropriate sharing access.
   */
  IsPrivate?: boolean;
  /**
   * Is Won
   * @description Read-only. Indicates if won, lost, or open. Auto-set by Salesforce based on StageName; cannot be set on creation.
   */
  IsWon?: boolean;
  /**
   * Last Activity Date
   * Format: date
   * @description Read-only. Date of the most recent activity (Event or Task). Not settable on creation.
   */
  LastActivityDate?: string;
  /**
   * Last Amount Changed History Id
   * @description Read-only. ID of OpportunityHistory record tracking last Amount change (API v50.0+). Not settable on creation.
   */
  LastAmountChangedHistoryId?: string;
  /**
   * Last Close Date Changed History Id
   * @description Read-only. ID of OpportunityHistory record tracking last CloseDate change (API v50.0+). Not settable on creation.
   */
  LastCloseDateChangedHistoryId?: string;
  /**
   * Last Modified By Id
   * @description Read-only. ID of the user who last modified this record. Auto-set by Salesforce.
   */
  LastModifiedById?: string;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Read-only. Last modification timestamp. Auto-set by Salesforce.
   */
  LastModifiedDate?: string;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Read-only. Timestamp of when current user last accessed this record or a related one. Not settable on creation.
   */
  LastReferencedDate?: string;
  /**
   * Last Stage Change Date
   * Format: date-time
   * @description Read-only. Timestamp of last StageName change. Auto-set by Salesforce.
   */
  LastStageChangeDate?: string;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Read-only. Timestamp of when current user last viewed this record. Not settable on creation.
   */
  LastViewedDate?: string;
  /**
   * Lead Source
   * @description Lead or opportunity source (e.g., 'Web', 'Partner Referral'). Values depend on Salesforce configuration.
   */
  LeadSource?: string;
  /**
   * Main Competitors  C
   * @description Custom field: Identified main competitors.
   */
  MainCompetitors__c?: string;
  /**
   * Name
   * @description Descriptive name for the opportunity. Required. Limit: 120 characters.
   */
  Name?: string;
  /**
   * Next Step
   * @description Next actionable step towards closing. Limit: 255 characters.
   */
  NextStep?: string;
  /**
   * Order Number  C
   * @description Custom field: Associated order number.
   */
  OrderNumber__c?: string;
  /**
   * Owner Id
   * @description ID of the User owning this opportunity. Defaults to creating user if unspecified (depending on settings). Ensure User ID is valid and active.
   */
  OwnerId?: string;
  /**
   * Pricebook2 Id
   * @description ID of the associated Price Book (Pricebook2). Generally required if adding products. Ensure products/price books are enabled and ID is valid.
   */
  Pricebook2Id?: string;
  /**
   * Probability
   * @description Likelihood (percentage, e.g., 75 for 75%) of closing. Often implied by StageName but can be overridden.
   */
  Probability?: number;
  /**
   * Push Count
   * @description Read-only. Used internally by Salesforce for mobile sync updates. Not user-settable.
   */
  PushCount?: number;
  /**
   * Stage Name
   * @description Current stage (e.g., 'Prospecting', 'Closed Won'). Required. May update ForecastCategoryName, IsClosed, IsWon, and Probability. Query OpportunityStage object or refer to Salesforce setup for valid names.
   */
  StageName?: string;
  /**
   * System Modstamp
   * Format: date-time
   * @description Read-only. Last system modification timestamp. Auto-set by Salesforce.
   */
  SystemModstamp?: string;
  /**
   * Total Opportunity Quantity
   * @description Total quantity of items (e.g., units, licenses). Used in quantity-based forecasting.
   */
  TotalOpportunityQuantity?: number;
  /**
   * Tracking Number  C
   * @description Custom field: Associated tracking number.
   */
  TrackingNumber__c?: string;
  /**
   * Type
   * @description Opportunity type (e.g., 'New Business', 'Existing Customer'). Values depend on Salesforce configuration.
   */
  Type?: string;
  /**
   * Attributes  Type
   * @description SObject type for this record, typically 'Opportunity'.
   */
  attributes__type?: string;
  /**
   * Attributes  Url
   * @description Relative URL for this Opportunity record.
   */
  attributes__url?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_OPPORTUNITY_RECORD tool output.
 */
type SALESFORCE_CREATE_OPPORTUNITY_RECORD_OUTPUT = {
  /**
   * Data
   * @description Salesforce response. On success, typically includes the new Opportunity 'id' and a 'success' flag.
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
 * Type of SALESFORCE's SALESFORCE_CREATE_TASK tool input.
 */
type SALESFORCE_CREATE_TASK_INPUT = {
  /**
   * Activity Date
   * @description Due date for the task in YYYY-MM-DD format.
   * @default null
   */
  activity_date: string | null;
  /**
   * Description
   * @description Detailed description or notes for the task.
   * @default
   */
  description: string;
  /**
   * Is Reminder Set
   * @description Whether to set a reminder for this task.
   * @default false
   */
  is_reminder_set: boolean;
  /**
   * Owner Id
   * @description ID of the user who owns the task. Defaults to current user if not specified.
   * @default
   */
  owner_id: string;
  /**
   * Priority
   * @description Priority level of the task.
   * @default Normal
   */
  priority: string;
  /**
   * Reminder Date Time
   * @description Date and time for the reminder in ISO format (YYYY-MM-DDTHH:MM:SS). Required if is_reminder_set is true.
   * @default null
   */
  reminder_date_time: string | null;
  /**
   * Status
   * @description Status of the task.
   * @default Not Started
   */
  status: string;
  /**
   * Subject
   * @description Subject/title of the task.
   */
  subject?: string;
  /**
   * What Id
   * @description ID of the related record (Account, Opportunity, Case, etc.) this task is associated with.
   * @default
   */
  what_id: string;
  /**
   * Who Id
   * @description ID of the Contact or Lead this task is associated with.
   * @default
   */
  who_id: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_CREATE_TASK tool output.
 */
type SALESFORCE_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new task ID, success status, and any errors.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_DELETE_ACCOUNT tool input.
 */
type SALESFORCE_DELETE_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The Salesforce ID of the account to delete.
   */
  account_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_ACCOUNT tool output.
 */
type SALESFORCE_DELETE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID tool input.
 */
type SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID_INPUT = {
  /**
   * Id
   * @description The unique 15-character or 18-character ID of the Lead object to be deleted. Lead object IDs typically start with the prefix '00Q'. This is a required path parameter.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID tool output.
 */
type SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_DELETE_CAMPAIGN tool input.
 */
type SALESFORCE_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The Salesforce ID of the campaign to delete.
   */
  campaign_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_CAMPAIGN tool output.
 */
type SALESFORCE_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce API containing status information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_DELETE_CONTACT tool input.
 */
type SALESFORCE_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The Salesforce ID of the contact to delete.
   */
  contact_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_CONTACT tool output.
 */
type SALESFORCE_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_DELETE_LEAD tool input.
 */
type SALESFORCE_DELETE_LEAD_INPUT = {
  /**
   * Lead Id
   * @description The Salesforce ID of the lead to delete.
   */
  lead_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_LEAD tool output.
 */
type SALESFORCE_DELETE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_DELETE_NOTE tool input.
 */
type SALESFORCE_DELETE_NOTE_INPUT = {
  /**
   * Note Id
   * @description The Salesforce ID of the note to delete.
   */
  note_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_NOTE tool output.
 */
type SALESFORCE_DELETE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_DELETE_OPPORTUNITY tool input.
 */
type SALESFORCE_DELETE_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description The Salesforce ID of the opportunity to delete.
   */
  opportunity_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_DELETE_OPPORTUNITY tool output.
 */
type SALESFORCE_DELETE_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_EXECUTE_SOQL_QUERY tool input.
 */
type SALESFORCE_EXECUTE_SOQL_QUERY_INPUT = {
  /**
   * Soql Query
   * @description The SOQL (Salesforce Object Query Language) query to execute. Example: 'SELECT Id, Name, Email FROM Contact WHERE Name LIKE '%John%' LIMIT 10'. Make sure to follow SOQL syntax and escape single quotes properly.
   */
  soql_query?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_EXECUTE_SOQL_QUERY tool output.
 */
type SALESFORCE_EXECUTE_SOQL_QUERY_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the raw SOQL query results from Salesforce. This typically includes a list of records (under a key like 'records') and the total number of records. The exact structure and fields depend on the executed SOQL query.
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
 * Type of SALESFORCE's SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY tool input.
 */
type SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY_INPUT = {
  /**
   * Fields
   * @description Optional comma-delimited list of Account field names to retrieve (e.g., 'Name,BillingCity,Industry'). If unspecified, null, or empty, all accessible Account fields are returned.
   */
  fields?: string;
  /**
   * Id
   * @description Unique identifier (ID) of the Salesforce Account to retrieve.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY tool output.
 */
type SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS tool input.
 */
type SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS_INPUT = {
  /**
   * If Modified Since
   * @description Fetch sObjects modified after this RFC3339 datetime string.
   * @default null
   */
  "If-Modified-Since": string | null;
  /**
   * If Unmodified Since
   * @description Fetch sObjects unmodified since this RFC3339 datetime string.
   * @default null
   */
  "If-Unmodified-Since": string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS tool output.
 */
type SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_GET_ACCOUNT tool input.
 */
type SALESFORCE_GET_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The Salesforce ID of the account to retrieve.
   */
  account_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_ACCOUNT tool output.
 */
type SALESFORCE_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full account object from Salesforce including all fields and metadata, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_CAMPAIGN tool input.
 */
type SALESFORCE_GET_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The Salesforce ID of the campaign to retrieve.
   */
  campaign_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_CAMPAIGN tool output.
 */
type SALESFORCE_GET_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full campaign object from Salesforce including all fields and metadata.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_CONTACT tool input.
 */
type SALESFORCE_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The Salesforce ID of the contact to retrieve.
   */
  contact_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_CONTACT tool output.
 */
type SALESFORCE_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full contact object from Salesforce including all fields and metadata.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_DASHBOARD tool input.
 */
type SALESFORCE_GET_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description The Salesforce ID of the dashboard to retrieve.
   */
  dashboard_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_DASHBOARD tool output.
 */
type SALESFORCE_GET_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dashboard metadata including components, layout, filters, and running user information, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_LEAD tool input.
 */
type SALESFORCE_GET_LEAD_INPUT = {
  /**
   * Lead Id
   * @description The Salesforce ID of the lead to retrieve.
   */
  lead_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_LEAD tool output.
 */
type SALESFORCE_GET_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full lead object from Salesforce including all fields and metadata.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_NOTE tool input.
 */
type SALESFORCE_GET_NOTE_INPUT = {
  /**
   * Note Id
   * @description The Salesforce ID of the note to retrieve.
   */
  note_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_NOTE tool output.
 */
type SALESFORCE_GET_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full note object from Salesforce including all fields and metadata, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS tool input.
 */
type SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS_INPUT = {
  /**
   * Fields
   * @description Comma-delimited API names of fields for the Note object (e.g., 'Title,Body'). If omitted, all accessible fields are retrieved.
   * @default null
   */
  fields: string | null;
  /**
   * Id
   * @description Unique identifier (ID) of the Note object to retrieve.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS tool output.
 */
type SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the fields and values of the retrieved Note object. The structure of this dictionary depends on the 'fields' requested or the default fields for the Note sObject.
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
 * Type of SALESFORCE's SALESFORCE_GET_OPPORTUNITY tool input.
 */
type SALESFORCE_GET_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description The Salesforce ID of the opportunity to retrieve.
   */
  opportunity_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_OPPORTUNITY tool output.
 */
type SALESFORCE_GET_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full opportunity object from Salesforce including all fields and metadata.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_REPORT tool input.
 */
type SALESFORCE_GET_REPORT_INPUT = {
  /**
   * Report Id
   * @description The Salesforce ID of the report to retrieve metadata for.
   */
  report_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_REPORT tool output.
 */
type SALESFORCE_GET_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Report metadata including structure, fields, filters, and groupings, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_REPORT_INSTANCE tool input.
 */
type SALESFORCE_GET_REPORT_INSTANCE_INPUT = {
  /**
   * Instance Id
   * @description The report instance ID returned from running a report.
   */
  instance_id?: string;
  /**
   * Report Id
   * @description The Salesforce ID of the report.
   */
  report_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_REPORT_INSTANCE tool output.
 */
type SALESFORCE_GET_REPORT_INSTANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Report instance results including status, data, or error messages.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_GET_USER_INFO tool input.
 */
type SALESFORCE_GET_USER_INFO_INPUT = {
  /**
   * Include Permissions
   * @description Whether to include user permissions in the response (requires additional API call).
   * @default false
   */
  include_permissions: boolean;
  /**
   * User Id
   * @description The Salesforce User ID to retrieve information for. If not provided, returns current user info.
   * @default
   */
  user_id: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_GET_USER_INFO tool output.
 */
type SALESFORCE_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description User information from Salesforce, either from userinfo endpoint or User object.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_ACCOUNTS tool input.
 */
type SALESFORCE_LIST_ACCOUNTS_INPUT = {
  /**
   * Query
   * @description SOQL query to fetch accounts. Use standard SOQL syntax to filter, sort, and limit results.
   * @default SELECT Id, Name, Type, Industry, Phone, Website, BillingCity, ShippingCity, AnnualRevenue, NumberOfEmployees FROM Account
   */
  query: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_ACCOUNTS tool output.
 */
type SALESFORCE_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce query API containing totalSize, done flag, and records array, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_CAMPAIGNS tool input.
 */
type SALESFORCE_LIST_CAMPAIGNS_INPUT = {
  /**
   * Query
   * @description SOQL query to fetch campaigns. Use standard SOQL syntax to filter, sort, and limit results.
   * @default SELECT Id, Name, Type, Status, StartDate, EndDate, BudgetedCost, ActualCost, ExpectedRevenue, IsActive, ParentId FROM Campaign
   */
  query: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_CAMPAIGNS tool output.
 */
type SALESFORCE_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce query API containing totalSize, done flag, and records array.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_CONTACTS tool input.
 */
type SALESFORCE_LIST_CONTACTS_INPUT = {
  /**
   * Query
   * @description SOQL query to fetch contacts. Use standard SOQL syntax to filter, sort, and limit results.
   * @default SELECT Id, FirstName, LastName, Email, Phone, Title, Department, AccountId FROM Contact
   */
  query: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_CONTACTS tool output.
 */
type SALESFORCE_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce query API containing totalSize, done flag, and records array.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_DASHBOARDS tool input.
 */
type SALESFORCE_LIST_DASHBOARDS_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_LIST_DASHBOARDS tool output.
 */
type SALESFORCE_LIST_DASHBOARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of dashboards available in the Salesforce organization or error response.
       */
      response_data: unknown[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_EMAIL_TEMPLATES tool input.
 */
type SALESFORCE_LIST_EMAIL_TEMPLATES_INPUT = {
  /**
   * Folder Name
   * @description Filter by folder name to get templates from a specific folder.
   * @default
   */
  folder_name: string;
  /**
   * Include Body
   * @description Whether to include the template body content in results. Note: This may increase response size significantly.
   * @default false
   */
  include_body: boolean;
  /**
   * Is Active Only
   * @description Whether to return only active templates. Set to false to include inactive templates.
   * @default true
   */
  is_active_only: boolean;
  /**
   * Limit
   * @description Maximum number of templates to return.
   * @default 50
   */
  limit: number;
  /**
   * Order By
   * @description Field to sort results by.
   * @default Name
   */
  order_by: string;
  /**
   * Order Direction
   * @description Sort direction: ASC for ascending, DESC for descending.
   * @default ASC
   */
  order_direction: string;
  /**
   * Search Term
   * @description Search term to filter templates by name. Uses LIKE operator for partial matches.
   * @default
   */
  search_term: string;
  /**
   * Template Type
   * @description Filter by template type. Common values: text, custom, html, visualforce.
   * @default
   */
  template_type: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_EMAIL_TEMPLATES tool output.
 */
type SALESFORCE_LIST_EMAIL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the list of email templates and metadata.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_LEADS tool input.
 */
type SALESFORCE_LIST_LEADS_INPUT = {
  /**
   * Query
   * @description SOQL query to fetch leads. Use standard SOQL syntax to filter, sort, and limit results.
   * @default SELECT Id, FirstName, LastName, Company, Title, Email, Phone, Status, LeadSource, Rating, Industry FROM Lead
   */
  query: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_LEADS tool output.
 */
type SALESFORCE_LIST_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce query API containing totalSize, done flag, and records array.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_NOTES tool input.
 */
type SALESFORCE_LIST_NOTES_INPUT = {
  /**
   * Query
   * @description SOQL query to fetch notes. Use standard SOQL syntax to filter, sort, and limit results.
   * @default SELECT Id, Title, Body, IsPrivate, ParentId, OwnerId, CreatedDate, LastModifiedDate FROM Note
   */
  query: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_NOTES tool output.
 */
type SALESFORCE_LIST_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce query API containing totalSize, done flag, and records array, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_OPPORTUNITIES tool input.
 */
type SALESFORCE_LIST_OPPORTUNITIES_INPUT = {
  /**
   * Query
   * @description SOQL query to fetch opportunities. Use standard SOQL syntax to filter, sort, and limit results.
   * @default SELECT Id, Name, StageName, CloseDate, Amount, Probability, Type, LeadSource, AccountId FROM Opportunity
   */
  query: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LIST_OPPORTUNITIES tool output.
 */
type SALESFORCE_LIST_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce query API containing totalSize, done flag, and records array.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LIST_REPORTS tool input.
 */
type SALESFORCE_LIST_REPORTS_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_LIST_REPORTS tool output.
 */
type SALESFORCE_LIST_REPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of reports available in the Salesforce organization or error response.
       */
      response_data: unknown[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_LOG_CALL tool input.
 */
type SALESFORCE_LOG_CALL_INPUT = {
  /**
   * Call Date
   * @description Date of the call in YYYY-MM-DD format. Defaults to today if not specified.
   * @default null
   */
  call_date: string | null;
  /**
   * Call Disposition
   * @description Outcome or result of the call.
   * @default
   */
  call_disposition: string;
  /**
   * Call Duration Seconds
   * @description Duration of the call in seconds.
   * @default null
   */
  call_duration_seconds: number | null;
  /**
   * Call Type
   * @description Type of call made.
   * @default Outbound
   */
  call_type: string;
  /**
   * Comments
   * @description Detailed notes or description of what was discussed during the call.
   * @default
   */
  comments: string;
  /**
   * Subject
   * @description Subject line for the call log. Defaults to 'Call'.
   * @default Call
   */
  subject: string;
  /**
   * What Id
   * @description ID of the related record (Account, Opportunity, Case, etc.) associated with the call.
   * @default
   */
  what_id: string;
  /**
   * Who Id
   * @description ID of the Contact or Lead associated with the call.
   * @default
   */
  who_id: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LOG_CALL tool output.
 */
type SALESFORCE_LOG_CALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new task ID representing the logged call.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_LOG_EMAIL_ACTIVITY tool input.
 */
type SALESFORCE_LOG_EMAIL_ACTIVITY_INPUT = {
  /**
   * Bcc Address
   * @description BCC email addresses (comma-separated if multiple).
   * @default
   */
  bcc_address: string;
  /**
   * Cc Address
   * @description CC email addresses (comma-separated if multiple).
   * @default
   */
  cc_address: string;
  /**
   * From Address
   * @description Email address of the sender.
   */
  from_address?: string;
  /**
   * Html Body
   * @description HTML body of the email. If provided, takes precedence over text_body for display.
   * @default
   */
  html_body: string;
  /**
   * Is Client Managed
   * @description Whether the email is client-managed (not sent through Salesforce).
   * @default true
   */
  is_client_managed: boolean;
  /**
   * Is Externally Visible
   * @description Whether the email is visible in customer portals/communities.
   * @default true
   */
  is_externally_visible: boolean;
  /**
   * Is Incoming
   * @description Whether this is an incoming email (true) or outgoing email (false).
   * @default false
   */
  is_incoming: boolean;
  /**
   * Message Date
   * @description Date/time the email was sent in ISO format. Defaults to current time if not provided.
   * @default null
   */
  message_date: string | null;
  /**
   * Parent Id
   * @description ID of the parent record, typically a Case for case-related emails.
   * @default
   */
  parent_id: string;
  /**
   * Related To Id
   * @description ID of the record to associate this email with (Account, Opportunity, Case, etc.).
   */
  related_to_id?: string;
  /**
   * Status
   * @description Status of the email. 0=New, 1=Read, 2=Replied, 3=Sent, 4=Forwarded, 5=Draft
   * @default 3
   */
  status: string;
  /**
   * Subject
   * @description Subject line of the email.
   */
  subject?: string;
  /**
   * Text Body
   * @description Plain text body of the email.
   * @default
   */
  text_body: string;
  /**
   * To Address
   * @description Email addresses of the recipients (comma-separated if multiple).
   */
  to_address?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_LOG_EMAIL_ACTIVITY tool output.
 */
type SALESFORCE_LOG_EMAIL_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the new EmailMessage ID and success status.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_MASS_TRANSFER_OWNERSHIP tool input.
 */
type SALESFORCE_MASS_TRANSFER_OWNERSHIP_INPUT = {
  /**
   * New Owner Id
   * @description The user ID of the new owner to transfer records to.
   */
  new_owner_id?: string;
  /**
   * Object Type
   * @description The Salesforce object type for the records to transfer (e.g., Account, Contact, Lead, Opportunity).
   */
  object_type?: string;
  /**
   * Record Ids
   * @description List of record IDs to transfer ownership.
   */
  record_ids?: string[];
  /**
   * Send Notification Email
   * @description Whether to send email notification to the new owner about the transfer.
   * @default false
   */
  send_notification_email: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_MASS_TRANSFER_OWNERSHIP tool output.
 */
type SALESFORCE_MASS_TRANSFER_OWNERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing results for each record transfer.
       */
      response_data: unknown[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_QUERY_CONTACTS_BY_NAME tool input.
 */
type SALESFORCE_QUERY_CONTACTS_BY_NAME_INPUT = {
  /**
   * Contact Name
   * @description The name or partial name to search for within the 'Name' field of Salesforce Contact records. Supports partial matches (e.g., 'John' will find 'John Smith', 'John Doe', etc.).
   */
  contact_name?: string;
  /**
   * Fields
   * @description Comma-separated list of Salesforce Contact object field API names to retrieve. Common field API names include: Id, Name, FirstName, LastName, Email, Phone, MobilePhone, Title, AccountId.
   * @default Id,Name,Email,Phone,AccountId
   */
  fields: string;
  /**
   * Limit
   * @description Maximum number of contact records to return.
   * @default 20
   */
  limit: number;
};

/**
 * Type of SALESFORCE's SALESFORCE_QUERY_CONTACTS_BY_NAME tool output.
 */
type SALESFORCE_QUERY_CONTACTS_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description The raw JSON response from the Salesforce SOQL query. This dictionary typically includes a 'records' key with a list of contacts, 'totalSize' indicating the total number of matching records, and 'done' status indicating if all records have been retrieved.
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
 * Type of SALESFORCE's SALESFORCE_QUERY_REPORT tool input.
 */
type SALESFORCE_QUERY_REPORT_INPUT = {
  /**
   * Aggregates
   * @description List of aggregate field identifiers to include in the report (e.g., sum of Amount as 's!Amount', average of Amount as 'a!Amount').
   * @default null
   */
  aggregates: string[] | null;
  /**
   * Allowed In Custom Detail Formula
   * @description Indicates if fields used in the report are allowed in custom detail formulas.
   * @default null
   */
  allowedInCustomDetailFormula: boolean | null;
  /**
   * Buckets
   * @description A list of bucket field definitions to apply to the report.
   * @default null
   */
  buckets: {
      /**
       * Bucket Type
       * @description The data type of the bucket field. Determines how values are grouped.
       * @enum {string}
       */
      bucketType: "TEXT" | "NUMBER" | "PICKLIST";
      /**
       * Developer Name
       * @description The unique API developer name for the bucket field.
       */
      developerName: string;
      /**
       * Label
       * @description The user-facing display label for the bucket field.
       */
      label: string;
      /**
       * Null Treated As Zero
       * @description Indicates if null input values should be treated as zero (true) when bucketing, or remain as null (false).
       */
      nullTreatedAsZero: boolean;
      /**
       * Other Bucket Label
       * @description The label for the catch-all 'Other' category, used when `bucketType` is PICKLIST and not all source values are explicitly bucketed.
       * @default null
       */
      otherBucketLabel: string | null;
      /**
       * Source Column Name
       * @description The API name of the source report column that this bucket field is based on.
       */
      sourceColumnName: string;
      /**
       * Values
       * @description A list of specific value groupings (BucketFieldValue) within this bucket field.
       */
      values: {
          /**
           * Label
           * @description The user-facing display name for this bucket value or category.
           */
          label: string;
          /**
           * Range Upper Bound
           * @description The upper boundary for the range of values included in this bucket category. Applicable for buckets of type NUMBER.
           * @default null
           */
          rangeUpperBound: number | null;
          /**
           * Source Dimension Values
           * @description A list of raw values from the source field that are grouped into this bucket category. Applicable for buckets of type PICKLIST and TEXT.
           */
          sourceDimensionValues: string[];
      }[];
  }[] | null;
  /**
   * Chart
   * @description Configuration for the chart to be displayed with the report, if any.
   * @default null
   */
  chart: {
      /**
       * Chart Type
       * @description The type of chart to display for the report.
       * @enum {string}
       */
      chartType: "Line" | "VerticalColumn" | "VerticalColumnStacked" | "VerticalColumnStacked100" | "HorizontalBar" | "HorizontalBarStacked" | "HorizontalBarStacked100" | "Pie" | "Donut" | "Funnel" | "Scatter";
      /**
       * Groupings
       * @description Specifies the report grouping to be used for the chart, if applicable.
       * @default null
       */
      groupings: string | null;
      /**
       * Has Legend
       * @description Specifies if the chart should display a legend (true) or not (false).
       * @default null
       */
      hasLegend: boolean | null;
      /**
       * Show Chart Values
       * @description Determines if the chart should display values (e.g., on bars or points) (true) or not (false).
       * @default null
       */
      showChartValues: boolean | null;
      /**
       * Summaries
       * @description List of unique identifiers for summary or custom summary formula fields to be displayed in the chart. Examples: 'a!Amount' (average of Amount), 's!Amount' (sum of Amount), 'm!Amount' (minimum Amount), 'x!Amount' (maximum Amount), 's!<customfieldID>' (sum of a custom field). For custom fields and custom report types, the identity is a combination of the summary type and the field ID.
       * @default null
       */
      summaries: string[] | null;
      /**
       * Summary Axis Locations
       * @description Specifies the axis (X or Y) on which the summary values are shown in the chart.
       * @default null
       */
      summaryAxisLocations: string | null;
      /**
       * Title
       * @description The title to be displayed for the chart.
       * @default null
       */
      title: string | null;
  }[] | null;
  /**
   * Cross Filters
   * @description A list of cross-object filters to apply to the report.
   * @default null
   */
  crossFilters: {
      /**
       * Criteria
       * @description A list of `ReportFilter` objects that define the conditions for filtering the `relatedEntity`.
       */
      criteria: {
          /**
           * Column
           * @description The unique API name of the report column to which this filter is applied.
           */
          column: string;
          /**
           * Filter Type
           * @description Describes the type of value used to filter report data. Valid values are:
           *     fieldToField—Filters report data by comparing values of one field with the values of a second field.
           *     fieldValue—Filters report data by comparing values of a field with a defined value.
           *     null—If null, the filterType defaults to fieldValue.
           * @default fieldValue
           */
          filterType: string;
          /**
           * Is Run Page Editable
           * @description Specifies if this filter can be edited by users on the report run page (true) or not (false).
           * @default false
           */
          isRunPageEditable: boolean;
          /**
           * Operator
           * @description Condition used to filter a field (e.g., equals, greaterThan); available operators depend on field data type.
           * @enum {string}
           */
          operator: "equals" | "notEqual" | "lessThan" | "greaterThan" | "lessOrEqual" | "greaterOrEqual" | "contains" | "notContains" | "startsWith" | "includes" | "excludes" | "between";
          /**
           * Value
           * @description The value used for filtering the specified column. For datetime fields, providing only a date (e.g., '2015-08-08') may result in a default time being applied based on GMT and your timezone (e.g., '2015-08-08T07:00:00Z' if timezone is PST/GMT-7).
           */
          value: string;
      }[];
      /**
       * Includes Object
       * @description If true, the report includes primary entity records that HAVE corresponding related entity records meeting the criteria. If false (a 'without' filter), includes primary records that DO NOT HAVE such related records.
       */
      includesObject: boolean;
      /**
       * Primary Entity Field
       * @description The API name of the field on the primary object that links to the `relatedEntity`.
       */
      primaryEntityField: string;
      /**
       * Related Entity
       * @description The API name of the related object being filtered against (e.g., Opportunity for an Account report cross-filtered with Opportunities).
       */
      relatedEntity: string;
      /**
       * Related Entity Join Field
       * @description The API name of the field on the `relatedEntity` used to join with the `primaryEntityField`.
       */
      relatedEntityJoinField: string;
  }[] | null;
  /**
   * CurrencyCode
   * @description Supported currency codes for reports.
   * @default null
   * @enum {string|null}
   */
  currency: "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "JPY" | "CHF" | "CNY" | "INR" | "BRL" | "MXN" | "SGD" | "NZD" | "HKD" | null;
  /**
   * Custom Detail Formula
   * @description A list of row-level (custom detail) formula definitions for the report.
   * @default null
   */
  customDetailFormula: {
      /**
       * Decimal Places
       * @description Number of decimal places for numeric formula results. Required for numeric types, not applicable for others.
       * @default null
       */
      decimalPlaces: number | null;
      /**
       * Description
       * @description An optional user-defined description for this row-level formula.
       * @default null
       */
      description: string | null;
      /**
       * Formula
       * @description The formula expression to be evaluated for each row. Can reference most report type fields, excluding bucketed and historical tracking fields.
       */
      formula: string;
      /**
       * Formula Type
       * @description The data type of the result produced by the formula. Valid types include: date, datetime, number, text.
       */
      formulaType: string;
      /**
       * Label
       * @description The user-facing display label for this row-level formula column.
       */
      label: string;
  }[] | null;
  /**
   * Custom Summary Formula
   * @description A list of custom summary formula definitions for the report.
   * @default null
   */
  customSummaryFormula: {
      /**
       * Across Group
       * @description The API name of a specific column grouping to apply this formula to, if `acrossGroupType` is CUSTOM. Otherwise, null.
       * @default null
       */
      acrossGroup: string | null;
      /**
       * Across Group Type
       * @description Specifies the column grouping level at which this summary formula is calculated and displayed.
       * @enum {string}
       */
      acrossGroupType: "all" | "custom" | "grand_total";
      /**
       * Decimal Places
       * @description Number of decimal places to display for numeric, currency, or percent formula results.
       * @default null
       */
      decimalPlaces: number | null;
      /**
       * Description
       * @description An optional user-defined description for the custom summary formula.
       * @default null
       */
      description: string | null;
      /**
       * Down Group
       * @description The API name of a specific row grouping to apply this formula to, if `downGroupType` is CUSTOM. Otherwise, null.
       * @default null
       */
      downGroup: string | null;
      /**
       * Down Group Type
       * @description Specifies the row grouping level at which this summary formula is calculated and displayed.
       * @enum {string}
       */
      downGroupType: "all" | "custom" | "grand_total";
      /**
       * Formula
       * @description The formula expression defining the calculations for the custom summary. Typically involves aggregate functions.
       */
      formula: string;
      /**
       * Formula Type
       * @description The data type and format of the result from the custom summary formula.
       * @enum {string}
       */
      formulaType: "number" | "currency" | "percent";
      /**
       * Label
       * @description The user-facing display label for the custom summary formula.
       */
      label: string;
  }[] | null;
  /**
   * Detail Columns
   * @description A list of API names of the columns to include in the detail section of the report.
   * @default null
   */
  detailColumns: string[] | null;
  /**
   * Developer Name
   * @description The unique API developer name of the report being queried. This is often used to identify a saved report definition.
   * @default null
   */
  developerName: string | null;
  /**
   * Division
   * @description Determines the division of records to include in the report (e.g., West Coast, East Coast). Available only if your organization uses divisions to segment data and you have the 'Affected by Divisions' permission. If you do not have this permission, reports include records in all divisions.
   * @default null
   */
  division: string | null;
  /**
   * Folder Id
   * @description The ID of the folder where the report is stored. Necessary if identifying the report by `developerName` within a specific folder.
   * @default null
   */
  folderId: string | null;
  /**
   * Groupings Across
   * @description A list of field groupings to be applied across columns (for matrix reports).
   * @default null
   */
  groupingsAcross: {
      /**
       * Date Granularity
       * @description Interval set on a date field used as a column grouping. Value can be:
       *     Day
       *     Calendar Week
       *     Calendar Month
       *     Calendar Quarter
       *     Calendar Year
       *     Fiscal Quarter
       *     Fiscal Year
       *     Calendar Month in Year
       *     Calendar Day in Month
       */
      dateGranularity: string;
      /**
       * Name
       * @description The API name of the field used for column-based grouping (matrix reports).
       */
      name: string;
      /**
       * Sort Order
       * @description Specifies the sort order for data within this column grouping.
       * @enum {string}
       */
      sortOrder: "asc" | "desc";
  }[] | null;
  /**
   * Groupings Down
   * @description A list of field groupings to be applied down rows (for summary or matrix reports).
   * @default null
   */
  groupingsDown: {
      /**
       * Date Granularity
       * @description Interval set on a date field that’s used as a row grouping. Value can be:
       *     Day
       *     Calendar Week
       *     Calendar Month
       *     Calendar Quarter
       *     Calendar Year
       *     Fiscal Quarter
       *     Fiscal Year
       *     Calendar Month in Year
       *     Calendar Day in Month
       */
      dateGranularity: string;
      /**
       * Name
       * @description The API name of the field used for row-based grouping in the report.
       */
      name: string;
      /**
       * Sort Aggregate
       * @description Summary field that’s used to sort data within a grouping in a report that’s in summary format. Applies if you have the Aggregate Sort feature enabled as part of its pilot program. The value is null when data within a grouping is not sorted by a summary field. In this example, data grouped by Account Owner is sorted by the sum of Annual Revenue.
       * @default null
       */
      sortAggregate: string | null;
      /**
       * Sort Order
       * @description Specifies the sort order for data within this row grouping.
       * @enum {string}
       */
      sortOrder: "asc" | "desc";
  }[] | null;
  /**
   * Has Detail Rows
   * @description If true, the report output will include individual record rows (detail rows). If false, only summary data is returned.
   * @default true
   */
  hasDetailRows: boolean;
  /**
   * Has Record Count
   * @description If true, the report will display the total number of records.
   * @default true
   */
  hasRecordCount: boolean;
  /**
   * Historical Snapshot Dates
   * @description A list of dates for which historical trending data should be retrieved. Dates should be in YYYY-MM-DD format.
   * @default null
   */
  historicalSnapshotDates: string[] | null;
  /**
   * Id
   * @description The unique identifier (ID) of the report to query.
   */
  id?: string;
  /**
   * Name
   * @description The display name of the report. This is typically used for display purposes and may not be unique.
   * @default null
   */
  name: string | null;
  /**
   * ReportPresentationOptions
   * @description Presentation settings for the report.
   * @default null
   */
  presentationOptions: {
      /**
       * Has Stacked Summaries
       * @description If true, stacked summaries are enabled for display in the report.
       */
      hasStackedSummaries: boolean;
      /**
       * Historical Columns
       * @description Specifies presentation options for historical tracking columns in the report.
       */
      historicalColumns: {
          /**
           * Decrease Is Positive
           * @description If true, a decrease in value for a historical column is displayed as a positive change (e.g., in green); otherwise, it's displayed as negative (e.g., in red).
           */
          decreaseIsPositive: boolean;
          /**
           * Show Changes
           * @description If true, displays a separate column showing the change in value for the corresponding historical column.
           */
          showChanges: boolean;
      };
  } | null;
  /**
   * Report Boolean Filter
   * @description A string defining the logical relationship between multiple `reportFilters`. Uses 1-based indexing for filters (e.g., '(1 AND 2) OR 3').
   * @default null
   */
  reportBooleanFilter: string | null;
  /**
   * Report Filters
   * @description A list of filter conditions to apply to the report data. Each filter specifies a column, operator, and value.
   * @default null
   */
  reportFilters: {
      /**
       * Column
       * @description The unique API name of the report column to which this filter is applied.
       */
      column: string;
      /**
       * Filter Type
       * @description Describes the type of value used to filter report data. Valid values are:
       *     fieldToField—Filters report data by comparing values of one field with the values of a second field.
       *     fieldValue—Filters report data by comparing values of a field with a defined value.
       *     null—If null, the filterType defaults to fieldValue.
       * @default fieldValue
       */
      filterType: string;
      /**
       * Is Run Page Editable
       * @description Specifies if this filter can be edited by users on the report run page (true) or not (false).
       * @default false
       */
      isRunPageEditable: boolean;
      /**
       * Operator
       * @description Condition used to filter a field (e.g., equals, greaterThan); available operators depend on field data type.
       * @enum {string}
       */
      operator: "equals" | "notEqual" | "lessThan" | "greaterThan" | "lessOrEqual" | "greaterOrEqual" | "contains" | "notContains" | "startsWith" | "includes" | "excludes" | "between";
      /**
       * Value
       * @description The value used for filtering the specified column. For datetime fields, providing only a date (e.g., '2015-08-08') may result in a default time being applied based on GMT and your timezone (e.g., '2015-08-08T07:00:00Z' if timezone is PST/GMT-7).
       */
      value: string;
  }[] | null;
  /**
   * Report Format
   * @description The desired format for the report output. Determines the structure of the data returned.
   * @enum {string}
   */
  reportFormat?: "TABULAR" | "SUMMARY" | "MATRIX" | "MULTI_BLOCK";
  /**
   * Report Type
   * @description Specifies the type of the report, including its unique API name (`type`) and display name (`label`). This defines the objects and fields available for reporting.
   */
  reportType?: {
      /**
       * Label
       * @description The display name of the report type.
       */
      label: string;
      /**
       * Type
       * @description The unique API identifier for the report type.
       */
      type: string;
  };
  /**
   * Scope
   * @description Defines the scope of the data on which you run the report. For example, you can run the report against all opportunities, opportunities you own, or opportunities your team owns. Valid values depend on the report type.
   * @default null
   */
  scope: string | null;
  /**
   * Show Grand Total
   * @description If true, the report output will include a grand total summary.
   * @default true
   */
  showGrandTotal: boolean;
  /**
   * Show Subtotals
   * @description If true, the report output will include subtotals for groupings.
   * @default true
   */
  showSubtotals: boolean;
  /**
   * Sort By
   * @description A list of dictionaries specifying the columns and direction for sorting the report data. Each dictionary should define 'column' (API name) and 'sortOrder' ('asc' or 'desc').
   * @default null
   */
  sortBy: {
      [key: string]: unknown;
  }[] | null;
  /**
   * StandardDateFilter
   * @description A filter based on a standard or custom date range for a specific date field.
   * @default null
   */
  standardDateFilter: {
      /**
       * Column
       * @description The API name of the date field used for the standard date filter.
       */
      column: string;
      /**
       * Duration Value
       * @description The predefined date range or 'CUSTOM' to specify a custom range using startDate and endDate.
       */
      durationValue: string;
      /**
       * End Date
       * @description The end date for a custom date range filter. Used when `durationValue` is 'CUSTOM'. Format: YYYY-MM-DD.
       * @default null
       */
      endDate: string | null;
      /**
       * Start Date
       * @description The start date for a custom date range filter. Used when `durationValue` is 'CUSTOM'. Format: YYYY-MM-DD.
       * @default null
       */
      startDate: string | null;
  } | null;
  /**
   * Standard Filters
   * @description A list of standard filters to apply, typically specific to the `reportType`. Each filter is a dictionary with 'name' and 'value' string pairs.
   * @default null
   */
  standardFilters: {
      [key: string]: unknown;
  }[] | null;
  /**
   * TopRows
   * @description Limits report output to a specified number of top or bottom rows.
   * @default null
   */
  topRows: {
      /**
       * Direction
       * @description The sort direction (e.g., 'ASC' or 'DESC') applied to the primary sort column when limiting the number of rows using `rowLimit`.
       */
      direction: string;
      /**
       * Row Limit
       * @description The maximum number of rows to return in the report (e.g., top 10).
       */
      rowLimit: number;
  } | null;
  /**
   * User Or Hierarchy Filter Id
   * @description The ID of a user or role used to filter the report based on role hierarchy (e.g., 'My Team's Opportunities').
   * @default null
   */
  userOrHierarchyFilterId: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_QUERY_REPORT tool output.
 */
type SALESFORCE_QUERY_REPORT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the queried report data, structured according to the report format and requested details.
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
 * Type of SALESFORCE's SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER tool input.
 */
type SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER_INPUT = {
  /**
   * Id
   * @description Unique Salesforce Account ID (typically 15 or 18 characters).
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER tool output.
 */
type SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID tool input.
 */
type SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique identifier (ID) of the Contact object to be deleted. This is a required path parameter. Salesforce IDs are typically 15-character case-sensitive or 18-character case-insensitive.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID tool output.
 */
type SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Contains error details if the operation fails; typically empty on successful deletion (HTTP 204).
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
 * Type of SALESFORCE's SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID tool input.
 */
type SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique Salesforce identifier (typically 18-character) of the Campaign SObject to be deleted.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID tool output.
 */
type SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain information related to the operation. For a successful deletion (indicated by an HTTP 204 No Content response), this field is usually empty or not applicable. In the event of an error, this field may contain details about the error.
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
 * Type of SALESFORCE's SALESFORCE_REMOVE_FROM_CAMPAIGN tool input.
 */
type SALESFORCE_REMOVE_FROM_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The Salesforce ID of the campaign to remove the member from.
   */
  campaign_id?: string;
  /**
   * Campaign Member Id
   * @description The specific CampaignMember record ID to delete. Either member_id or campaign_member_id must be provided.
   * @default
   */
  campaign_member_id: string;
  /**
   * Member Id
   * @description The Salesforce ID of the lead or contact to remove from the campaign. Either member_id or campaign_member_id must be provided.
   * @default
   */
  member_id: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_REMOVE_FROM_CAMPAIGN tool output.
 */
type SALESFORCE_REMOVE_FROM_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing the operation result or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID tool input.
 */
type SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique 15-character or 18-character Salesforce ID of the Note object to be deleted.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID tool output.
 */
type SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Typically empty for a successful deletion (which returns an HTTP 204 No Content status). In other cases, such as errors, this field might contain details related to the outcome of the operation.
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
 * Type of SALESFORCE's SALESFORCE_REMOVE_OPPORTUNITY_BY_ID tool input.
 */
type SALESFORCE_REMOVE_OPPORTUNITY_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the Salesforce Opportunity to be deleted, e.g., '001R0000005hDFYIA2'.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_REMOVE_OPPORTUNITY_BY_ID tool output.
 */
type SALESFORCE_REMOVE_OPPORTUNITY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Dictionary that may contain data, especially in error cases; successful deletions (HTTP 204) typically have an empty body.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES tool input.
 */
type SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES tool output.
 */
type SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description SObject metadata for the Account object, including attributes like name, label, key prefix, and related resource URLs.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING tool input.
 */
type SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING tool output.
 */
type SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing detailed information and metadata for the Salesforce Campaign sObject. This includes object attributes (e.g., `queryable`, `searchable`), URLs for related operations (e.g., creating records, describing layouts, accessing specific records), and a list of recently viewed campaign records.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES tool input.
 */
type SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES tool output.
 */
type SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_LEAD_BY_ID tool input.
 */
type SALESFORCE_RETRIEVE_LEAD_BY_ID_INPUT = {
  /**
   * Fields
   * @description Comma-delimited list of Salesforce Lead field API names to return (e.g., Name,Email,Company). If omitted, all accessible fields are returned.
   * @default null
   */
  fields: string | null;
  /**
   * Id
   * @description Unique identifier (ID) of the Salesforce Lead to retrieve.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_LEAD_BY_ID tool output.
 */
type SALESFORCE_RETRIEVE_LEAD_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved fields and their values for the specified Lead. The keys are the field API names, and the values are their corresponding data.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES tool input.
 */
type SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES tool output.
 */
type SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the Salesforce API, typically containing Lead sObject details or a list of Lead records. The structure varies based on the API response.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION tool input.
 */
type SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION tool output.
 */
type SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Detailed metadata for the Salesforce 'Note' SObject, including its fields, properties, and supported operations.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA tool input.
 */
type SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA_INPUT = object;

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA tool output.
 */
type SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the retrieved Salesforce Opportunity data. This typically includes a list of opportunity records, where each record is a dictionary of fields such as 'Id', 'Name', 'Amount', 'StageName', 'CloseDate', 'AccountId', and other standard or custom fields associated with Opportunity objects.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS tool input.
 */
type SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS_INPUT = {
  /**
   * Fields
   * @description An optional, comma-delimited list of API names of the Opportunity fields to retrieve. If not specified, all accessible fields for the Opportunity object will be returned. This parameter is used as a query parameter in the GET request.
   * @default null
   */
  fields: string | null;
  /**
   * Id
   * @description The unique Salesforce ID of the Opportunity record to retrieve. This is a required path parameter.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS tool output.
 */
type SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved Opportunity data. Keys are the API names of the fields, and values are their corresponding values.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS tool input.
 */
type SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS_INPUT = {
  /**
   * Fields
   * @description Optional comma-delimited list of field API names for the Campaign object whose values you want to retrieve (e.g., 'name,description,numberofemployees,industry'). Field names are case-sensitive and should match Salesforce API names. If unspecified, all accessible fields are returned.
   * @default null
   */
  fields: string | null;
  /**
   * Id
   * @description The unique identifier (ID) of the Salesforce Campaign object to retrieve. Example: '001R0000005hDFYIA2'.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS tool output.
 */
type SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary where keys are the field API names and values are their corresponding values for the retrieved Campaign object. The fields returned depend on the `fields` parameter in the request; if `fields` was not provided, all accessible fields are included.
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
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID tool input.
 */
type SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID_INPUT = {
  /**
   * Fields
   * @description Comma-delimited string of Contact field API names to retrieve. If omitted, a default set of fields is returned.
   * @default null
   */
  fields: string | null;
  /**
   * Id
   * @description The unique Salesforce ID of the Contact record to retrieve.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID tool output.
 */
type SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the Contact object, where keys are field API names (e.g., 'Id', 'Name', 'Email') and values are their corresponding data.
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
 * Type of SALESFORCE's SALESFORCE_RUN_REPORT tool input.
 */
type SALESFORCE_RUN_REPORT_INPUT = {
  /**
   * Report Id
   * @description The Salesforce ID of the report to run.
   */
  report_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_RUN_REPORT tool output.
 */
type SALESFORCE_RUN_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Report instance information or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_RUN_SOQL_QUERY tool input.
 */
type SALESFORCE_RUN_SOQL_QUERY_INPUT = {
  /**
   * Query
   * @description SOQL query to execute. Use standard SOQL syntax.
   */
  query?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_RUN_SOQL_QUERY tool output.
 */
type SALESFORCE_RUN_SOQL_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Query results with totalSize, done flag, records array, and optional nextRecordsUrl for pagination, or error response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_ACCOUNTS tool input.
 */
type SALESFORCE_SEARCH_ACCOUNTS_INPUT = {
  /**
   * Billing City
   * @description Search by billing city. Supports partial matches.
   * @default null
   */
  billing_city: string | null;
  /**
   * Billing Country
   * @description Search by billing country. Supports partial matches.
   * @default null
   */
  billing_country: string | null;
  /**
   * Billing State
   * @description Search by billing state/province. Supports partial matches.
   * @default null
   */
  billing_state: string | null;
  /**
   * Fields
   * @description Comma-separated list of Account fields to retrieve.
   * @default Id,Name,Type,Industry,Phone,Website,BillingStreet,BillingCity,BillingState,BillingCountry,NumberOfEmployees,AnnualRevenue
   */
  fields: string;
  /**
   * Industry
   * @description Search by industry.
   * @default null
   */
  industry: string | null;
  /**
   * Limit
   * @description Maximum number of accounts to return.
   * @default 50
   */
  limit: number;
  /**
   * Name
   * @description Search by account name. Supports partial matches.
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description Search by phone number. Supports partial matches.
   * @default null
   */
  phone: string | null;
  /**
   * Type
   * @description Search by account type.
   * @default null
   */
  type: string | null;
  /**
   * Website
   * @description Search by website. Supports partial matches.
   * @default null
   */
  website: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_ACCOUNTS tool output.
 */
type SALESFORCE_SEARCH_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching accounts or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_CAMPAIGNS tool input.
 */
type SALESFORCE_SEARCH_CAMPAIGNS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of Campaign fields to retrieve.
   * @default Id,Name,Type,Status,StartDate,EndDate,IsActive,Description,BudgetedCost,ActualCost,NumberOfContacts,NumberOfLeads
   */
  fields: string;
  /**
   * Is Active
   * @description Filter by active status. True for active campaigns, False for inactive.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Limit
   * @description Maximum number of campaigns to return.
   * @default 50
   */
  limit: number;
  /**
   * Name
   * @description Search by campaign name. Supports partial matches.
   * @default null
   */
  name: string | null;
  /**
   * Start Date From
   * @description Search campaigns starting from this date (YYYY-MM-DD).
   * @default null
   */
  start_date_from: string | null;
  /**
   * Start Date To
   * @description Search campaigns starting before this date (YYYY-MM-DD).
   * @default null
   */
  start_date_to: string | null;
  /**
   * Status
   * @description Search by campaign status.
   * @default null
   */
  status: string | null;
  /**
   * Type
   * @description Search by campaign type.
   * @default null
   */
  type: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_CAMPAIGNS tool output.
 */
type SALESFORCE_SEARCH_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching campaigns or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_CONTACTS tool input.
 */
type SALESFORCE_SEARCH_CONTACTS_INPUT = {
  /**
   * Account Name
   * @description Search by associated account name. Supports partial matches.
   * @default null
   */
  account_name: string | null;
  /**
   * Email
   * @description Search by email address. Supports partial matches.
   * @default null
   */
  email: string | null;
  /**
   * Fields
   * @description Comma-separated list of Contact fields to retrieve.
   * @default Id,Name,FirstName,LastName,Email,Phone,MobilePhone,Title,AccountId,Account.Name
   */
  fields: string;
  /**
   * Limit
   * @description Maximum number of contacts to return.
   * @default 50
   */
  limit: number;
  /**
   * Name
   * @description Search by contact name (first name, last name, or full name). Supports partial matches.
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description Search by phone number. Supports partial matches.
   * @default null
   */
  phone: string | null;
  /**
   * Title
   * @description Search by job title. Supports partial matches.
   * @default null
   */
  title: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_CONTACTS tool output.
 */
type SALESFORCE_SEARCH_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching contacts or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_LEADS tool input.
 */
type SALESFORCE_SEARCH_LEADS_INPUT = {
  /**
   * Company
   * @description Search by company name. Supports partial matches.
   * @default null
   */
  company: string | null;
  /**
   * Email
   * @description Search by email address. Supports partial matches.
   * @default null
   */
  email: string | null;
  /**
   * Fields
   * @description Comma-separated list of Lead fields to retrieve.
   * @default Id,Name,FirstName,LastName,Email,Phone,Title,Company,Status,LeadSource,CreatedDate
   */
  fields: string;
  /**
   * Lead Source
   * @description Search by lead source.
   * @default null
   */
  lead_source: string | null;
  /**
   * Limit
   * @description Maximum number of leads to return.
   * @default 50
   */
  limit: number;
  /**
   * Name
   * @description Search by lead name (first name, last name, or full name). Supports partial matches.
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description Search by phone number. Supports partial matches.
   * @default null
   */
  phone: string | null;
  /**
   * Status
   * @description Search by lead status.
   * @default null
   */
  status: string | null;
  /**
   * Title
   * @description Search by job title. Supports partial matches.
   * @default null
   */
  title: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_LEADS tool output.
 */
type SALESFORCE_SEARCH_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching leads or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_NOTES tool input.
 */
type SALESFORCE_SEARCH_NOTES_INPUT = {
  /**
   * Body
   * @description Search within note body content. Supports partial matches.
   * @default null
   */
  body: string | null;
  /**
   * Created Date From
   * @description Search notes created from this date (YYYY-MM-DD).
   * @default null
   */
  created_date_from: string | null;
  /**
   * Created Date To
   * @description Search notes created before this date (YYYY-MM-DD).
   * @default null
   */
  created_date_to: string | null;
  /**
   * Fields
   * @description Comma-separated list of Note fields to retrieve.
   * @default Id,Title,Body,ParentId,Parent.Name,OwnerId,Owner.Name,IsPrivate,CreatedDate,LastModifiedDate
   */
  fields: string;
  /**
   * Is Private
   * @description Filter by private status. True for private notes, False for public notes.
   * @default null
   */
  is_private: boolean | null;
  /**
   * Limit
   * @description Maximum number of notes to return.
   * @default 50
   */
  limit: number;
  /**
   * Owner Name
   * @description Search by note owner name. Supports partial matches.
   * @default null
   */
  owner_name: string | null;
  /**
   * Parent Name
   * @description Search by parent record name (Account, Contact, etc.). Supports partial matches.
   * @default null
   */
  parent_name: string | null;
  /**
   * Title
   * @description Search by note title. Supports partial matches.
   * @default null
   */
  title: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_NOTES tool output.
 */
type SALESFORCE_SEARCH_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching notes or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_OPPORTUNITIES tool input.
 */
type SALESFORCE_SEARCH_OPPORTUNITIES_INPUT = {
  /**
   * Account Name
   * @description Search by associated account name. Supports partial matches.
   * @default null
   */
  account_name: string | null;
  /**
   * Amount Max
   * @description Maximum opportunity amount.
   * @default null
   */
  amount_max: number | null;
  /**
   * Amount Min
   * @description Minimum opportunity amount.
   * @default null
   */
  amount_min: number | null;
  /**
   * Close Date From
   * @description Search opportunities with close date from this date. MUST use YYYY-MM-DD format only. Natural language phrases like 'this quarter' or 'next month' will cause SOQL syntax errors.
   * @default null
   */
  close_date_from: string | null;
  /**
   * Close Date To
   * @description Search opportunities with close date before this date. MUST use YYYY-MM-DD format only. Natural language phrases like 'this quarter' or 'end of year' will cause SOQL syntax errors.
   * @default null
   */
  close_date_to: string | null;
  /**
   * Fields
   * @description Comma-separated list of Opportunity fields to retrieve.
   * @default Id,Name,AccountId,Account.Name,StageName,Amount,CloseDate,IsClosed,IsWon,Probability,LeadSource,CreatedDate
   */
  fields: string;
  /**
   * Is Closed
   * @description Filter by closed status. True for closed opportunities, False for open.
   * @default null
   */
  is_closed: boolean | null;
  /**
   * Is Won
   * @description Filter by won status. True for won opportunities, False for lost (only applies to closed opportunities).
   * @default null
   */
  is_won: boolean | null;
  /**
   * Lead Source
   * @description Search by lead source.
   * @default null
   */
  lead_source: string | null;
  /**
   * Limit
   * @description Maximum number of opportunities to return.
   * @default 50
   */
  limit: number;
  /**
   * Name
   * @description Search by opportunity name. Supports partial matches.
   * @default null
   */
  name: string | null;
  /**
   * Stage Name
   * @description Search by opportunity stage.
   * @default null
   */
  stage_name: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_OPPORTUNITIES tool output.
 */
type SALESFORCE_SEARCH_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching opportunities or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEARCH_TASKS tool input.
 */
type SALESFORCE_SEARCH_TASKS_INPUT = {
  /**
   * Account Name
   * @description Search by related account name. Supports partial matches.
   * @default null
   */
  account_name: string | null;
  /**
   * Activity Date From
   * @description Search tasks with activity date from this date (YYYY-MM-DD).
   * @default null
   */
  activity_date_from: string | null;
  /**
   * Activity Date To
   * @description Search tasks with activity date before this date (YYYY-MM-DD).
   * @default null
   */
  activity_date_to: string | null;
  /**
   * Assigned To Name
   * @description Search by assigned user name. Supports partial matches.
   * @default null
   */
  assigned_to_name: string | null;
  /**
   * Contact Name
   * @description Search by related contact name. Supports partial matches.
   * @default null
   */
  contact_name: string | null;
  /**
   * Fields
   * @description Comma-separated list of Task fields to retrieve.
   * @default Id,Subject,Status,Priority,ActivityDate,IsClosed,Description,OwnerId,Owner.Name,WhatId,What.Name,WhoId,Who.Name
   */
  fields: string;
  /**
   * Is Closed
   * @description Filter by closed status. True for completed tasks, False for open tasks.
   * @default null
   */
  is_closed: boolean | null;
  /**
   * Limit
   * @description Maximum number of tasks to return.
   * @default 50
   */
  limit: number;
  /**
   * Priority
   * @description Search by task priority.
   * @default null
   */
  priority: string | null;
  /**
   * Status
   * @description Search by task status.
   * @default null
   */
  status: string | null;
  /**
   * Subject
   * @description Search by task subject. Supports partial matches.
   * @default null
   */
  subject: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEARCH_TASKS tool output.
 */
type SALESFORCE_SEARCH_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce SOQL query containing matching tasks or error information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_SEND_EMAIL tool input.
 */
type SALESFORCE_SEND_EMAIL_INPUT = {
  /**
   * Attachment Ids
   * @description IDs of files to attach. Can be a comma-delimited string or a list.
   * @default null
   */
  attachment_ids: string | null;
  /**
   * Bcc Addresses
   * @description BCC email addresses. Can be a comma-delimited string or a list.
   * @default null
   */
  bcc_addresses: string | null;
  /**
   * Body
   * @description Body content of the email.
   */
  body?: string;
  /**
   * Cc Addresses
   * @description CC email addresses. Can be a comma-delimited string or a list.
   * @default null
   */
  cc_addresses: string | null;
  /**
   * Is Html
   * @description Whether the email body is HTML formatted.
   * @default false
   */
  is_html: boolean;
  /**
   * Log Email
   * @description Whether to log the email on the recipient's activity timeline.
   * @default false
   */
  log_email: boolean;
  /**
   * Recipient Id
   * @description ID of a lead, contact, or person account to send the email to. Used for logging and merge fields.
   * @default
   */
  recipient_id: string;
  /**
   * Related Record Id
   * @description ID of a related record (e.g., Account, Opportunity, Case) for logging and merge fields.
   * @default
   */
  related_record_id: string;
  /**
   * Sender Address
   * @description Organization-wide email address. Required only when sender_type is OrgWideEmailAddress.
   * @default
   */
  sender_address: string;
  /**
   * Sender Type
   * @description Type of sender. Valid values: CurrentUser, DefaultWorkflowUser, OrgWideEmailAddress.
   * @default CurrentUser
   */
  sender_type: string;
  /**
   * Subject
   * @description Subject line of the email.
   */
  subject?: string;
  /**
   * To Addresses
   * @description Email addresses of recipients. Can be a comma-delimited string or a list.
   */
  to_addresses?: string | null;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEND_EMAIL tool output.
 */
type SALESFORCE_SEND_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing success status and any errors.
       */
      response_data: unknown[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEND_EMAIL_FROM_TEMPLATE tool input.
 */
type SALESFORCE_SEND_EMAIL_FROM_TEMPLATE_INPUT = {
  /**
   * Add Threading Tokens
   * @description Whether to add threading tokens for email-to-case or custom threading. Useful for case-related emails.
   * @default false
   */
  add_threading_tokens: boolean;
  /**
   * Additional To Addresses
   * @description Additional email addresses to send to (besides the recipient). Can be a comma-delimited string or a list.
   * @default null
   */
  additional_to_addresses: string | null;
  /**
   * Attachment Ids
   * @description IDs of files to attach. Can be a comma-delimited string or a list.
   * @default null
   */
  attachment_ids: string | null;
  /**
   * Bcc Addresses
   * @description BCC email addresses. Can be a comma-delimited string or a list.
   * @default null
   */
  bcc_addresses: string | null;
  /**
   * Cc Addresses
   * @description CC email addresses. Can be a comma-delimited string or a list.
   * @default null
   */
  cc_addresses: string | null;
  /**
   * Log Email
   * @description Whether to log the email on the recipient's activity timeline. Defaults to true for template emails.
   * @default true
   */
  log_email: boolean;
  /**
   * Recipient Id
   * @description ID of the lead, contact, or person account to send the email to. Required when using templates.
   */
  recipient_id?: string;
  /**
   * Related Record Id
   * @description ID of a related record (e.g., Case, Opportunity) to populate merge fields from a different object.
   * @default
   */
  related_record_id: string;
  /**
   * Sender Address
   * @description Organization-wide email address. Required only when sender_type is OrgWideEmailAddress.
   * @default
   */
  sender_address: string;
  /**
   * Sender Type
   * @description Type of sender. Valid values: CurrentUser, DefaultWorkflowUser, OrgWideEmailAddress.
   * @default CurrentUser
   */
  sender_type: string;
  /**
   * Template Id
   * @description ID of the email template to use.
   */
  template_id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEND_EMAIL_FROM_TEMPLATE tool output.
 */
type SALESFORCE_SEND_EMAIL_FROM_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Salesforce containing success status and any errors.
       */
      response_data: unknown[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEND_MASS_EMAIL tool input.
 */
type SALESFORCE_SEND_MASS_EMAIL_INPUT = {
  /**
   * Batch Size
   * @description Number of recipients to process in each batch. Maximum is 150.
   * @default 50
   */
  batch_size: number;
  /**
   * Body
   * @description Body content of the email. Required if template_id is not provided.
   * @default
   */
  body: string;
  /**
   * Is Html
   * @description Whether the email body is HTML formatted. Only applies when not using a template.
   * @default false
   */
  is_html: boolean;
  /**
   * Log Emails
   * @description Whether to log the emails on each recipient's activity timeline.
   * @default true
   */
  log_emails: boolean;
  /**
   * Recipient Ids
   * @description List of IDs for leads, contacts, or person accounts to send emails to. Maximum 150 recipients per call.
   */
  recipient_ids?: string[];
  /**
   * Sender Address
   * @description Organization-wide email address. Required only when sender_type is OrgWideEmailAddress.
   * @default
   */
  sender_address: string;
  /**
   * Sender Type
   * @description Type of sender. Valid values: CurrentUser, DefaultWorkflowUser, OrgWideEmailAddress.
   * @default CurrentUser
   */
  sender_type: string;
  /**
   * Subject
   * @description Subject line of the email. Required if template_id is not provided.
   * @default
   */
  subject: string;
  /**
   * Template Id
   * @description ID of the email template to use. If not specified, subject and body must be provided.
   * @default
   */
  template_id: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_SEND_MASS_EMAIL tool output.
 */
type SALESFORCE_SEND_MASS_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Summary of mass email operation including success count, failure count, and details.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_ACCOUNT tool input.
 */
type SALESFORCE_UPDATE_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The Salesforce ID of the account to update.
   */
  account_id?: string;
  /**
   * Account Source
   * @description Updated account source. Leave empty to keep unchanged.
   * @default
   */
  account_source: string;
  /**
   * Annual Revenue
   * @description Updated annual revenue. Leave empty to keep unchanged.
   * @default null
   */
  annual_revenue: number | null;
  /**
   * Billing City
   * @description Updated billing city. Leave empty to keep unchanged.
   * @default
   */
  billing_city: string;
  /**
   * Billing Country
   * @description Updated billing country. Leave empty to keep unchanged.
   * @default
   */
  billing_country: string;
  /**
   * Billing Postal Code
   * @description Updated billing postal code. Leave empty to keep unchanged.
   * @default
   */
  billing_postal_code: string;
  /**
   * Billing State
   * @description Updated billing state. Leave empty to keep unchanged.
   * @default
   */
  billing_state: string;
  /**
   * Billing Street
   * @description Updated billing street. Leave empty to keep unchanged.
   * @default
   */
  billing_street: string;
  /**
   * Description
   * @description Updated description. Leave empty to keep unchanged.
   * @default
   */
  description: string;
  /**
   * Fax
   * @description Updated fax number. Leave empty to keep unchanged.
   * @default
   */
  fax: string;
  /**
   * Industry
   * @description Updated industry. Leave empty to keep unchanged.
   * @default
   */
  industry: string;
  /**
   * Name
   * @description Updated account name. Leave empty to keep unchanged.
   * @default
   */
  name: string;
  /**
   * Number Of Employees
   * @description Updated number of employees. Leave empty to keep unchanged.
   * @default null
   */
  number_of_employees: number | null;
  /**
   * Parent Id
   * @description Updated parent account ID. Leave empty to keep unchanged.
   * @default
   */
  parent_id: string;
  /**
   * Phone
   * @description Updated phone number. Leave empty to keep unchanged.
   * @default
   */
  phone: string;
  /**
   * Shipping City
   * @description Updated shipping city. Leave empty to keep unchanged.
   * @default
   */
  shipping_city: string;
  /**
   * Shipping Country
   * @description Updated shipping country. Leave empty to keep unchanged.
   * @default
   */
  shipping_country: string;
  /**
   * Shipping Postal Code
   * @description Updated shipping postal code. Leave empty to keep unchanged.
   * @default
   */
  shipping_postal_code: string;
  /**
   * Shipping State
   * @description Updated shipping state. Leave empty to keep unchanged.
   * @default
   */
  shipping_state: string;
  /**
   * Shipping Street
   * @description Updated shipping street. Leave empty to keep unchanged.
   * @default
   */
  shipping_street: string;
  /**
   * Sic Desc
   * @description Updated SIC description. Leave empty to keep unchanged.
   * @default
   */
  sic_desc: string;
  /**
   * Type
   * @description Updated account type. Leave empty to keep unchanged.
   * @default
   */
  type: string;
  /**
   * Website
   * @description Updated website URL. Leave empty to keep unchanged.
   * @default
   */
  website: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_ACCOUNT tool output.
 */
type SALESFORCE_UPDATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID tool input.
 */
type SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID_INPUT = {
  /**
   * Account Number
   * @description Account number (not the system ID, max 40 chars).
   * @default null
   */
  AccountNumber: string | null;
  /**
   * Account Source
   * @description Source of the account record (picklist, max 40 chars).
   * @default null
   */
  AccountSource: string | null;
  /**
   * Active  C
   * @description Custom field: Indicates if the account is active.
   * @default null
   */
  Active__c: string | null;
  /**
   * Annual Revenue
   * @description Estimated annual revenue.
   * @default null
   */
  AnnualRevenue: number | null;
  /**
   * Billing City
   * @description Billing city (max 40 chars).
   * @default null
   */
  BillingCity: string | null;
  /**
   * Billing Country
   * @description Billing country (max 80 chars).
   * @default null
   */
  BillingCountry: string | null;
  /**
   * Billing Geocode Accuracy
   * @description Geocode accuracy for billing address. Part of BillingAddress compound field.
   * @default null
   */
  BillingGeocodeAccuracy: string | null;
  /**
   * Billing Latitude
   * @description Latitude for billing address (-90 to 90, up to 15 decimal places). Part of BillingAddress compound field.
   * @default null
   */
  BillingLatitude: number | null;
  /**
   * Billing Longitude
   * @description Longitude for billing address (-180 to 180, up to 15 decimal places). Part of BillingAddress compound field.
   * @default null
   */
  BillingLongitude: number | null;
  /**
   * Billing Postal Code
   * @description Billing postal code (max 20 chars).
   * @default null
   */
  BillingPostalCode: string | null;
  /**
   * Billing State
   * @description Billing state/province (max 80 chars).
   * @default null
   */
  BillingState: string | null;
  /**
   * Billing Street
   * @description Billing street address.
   * @default null
   */
  BillingStreet: string | null;
  /**
   * Clean Status
   * @description Data quality status compared with Data.com (e.g., Matched, Pending). Typically managed by Data.com Clean.
   * @default null
   */
  CleanStatus: string | null;
  /**
   * Created By Id
   * @description ID of the user who created the account (read-only).
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Creation date and time (read-only).
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Customer Priority  C
   * @description Custom field: Customer priority.
   * @default null
   */
  CustomerPriority__c: string | null;
  /**
   * Dandb Company Id
   * @description D&B Company ID for Dun & Bradstreet integration (typically read-only).
   * @default null
   */
  DandbCompanyId: string | null;
  /**
   * Description
   * @description Text description (max 32,000 chars; 255 in reports).
   * @default null
   */
  Description: string | null;
  /**
   * Duns Number
   * @description D-U-N-S number for business accounts (9 digits). Typically requires Data.com.
   * @default null
   */
  DunsNumber: string | null;
  /**
   * Fax
   * @description Fax number (max 40 chars).
   * @default null
   */
  Fax: string | null;
  /**
   * Id
   * @description Salesforce Account ID. Generally read-only for updates as the record is identified by the `id` path parameter; if provided, it might be ignored or must match.
   * @default null
   */
  Id: string | null;
  /**
   * Industry
   * @description Primary industry (picklist, max 40 chars).
   * @default null
   */
  Industry: string | null;
  /**
   * Is Deleted
   * @description Indicates if the object is in the Recycle Bin. Typically read-only for updates.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Jigsaw
   * @description Data.com (Jigsaw) company ID reference (max 20 chars). Typically managed by Data.com integration.
   * @default null
   */
  Jigsaw: string | null;
  /**
   * Jigsaw Company Id
   * @description Jigsaw company ID (read-only, for Data.com integration).
   * @default null
   */
  JigsawCompanyId: string | null;
  /**
   * Last Activity Date
   * Format: date
   * @description Most recent activity date (read-only).
   * @default null
   */
  LastActivityDate: string | null;
  /**
   * Last Modified By Id
   * @description ID of the user who last modified the account (read-only).
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Last modification date and time (read-only).
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Timestamp of last access by current user (read-only).
   * @default null
   */
  LastReferencedDate: string | null;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Timestamp of last view by current user (read-only).
   * @default null
   */
  LastViewedDate: string | null;
  /**
   * Master Record Id
   * @description ID of the master record if this account was merged and deleted; null otherwise. Typically read-only.
   * @default null
   */
  MasterRecordId: string | null;
  /**
   * Naics Code
   * @description NAICS code for business accounts (6 digits, max 8 chars total). Typically requires Data.com.
   * @default null
   */
  NaicsCode: string | null;
  /**
   * Naics Desc
   * @description NAICS code description for business accounts (max 120 chars). Typically requires Data.com.
   * @default null
   */
  NaicsDesc: string | null;
  /**
   * Name
   * @description Name of the account (max 255 chars). For Person Accounts, this is a concatenated field (FirstName, MiddleName, LastName, Suffix) and not directly modifiable here.
   * @default null
   */
  Name: string | null;
  /**
   * Number Of Employees
   * @description Number of employees (max 8 digits).
   * @default null
   */
  NumberOfEmployees: number | null;
  /**
   * Numberof Locations  C
   * @description Custom field: Number of locations for the account.
   * @default null
   */
  NumberofLocations__c: number | null;
  /**
   * Operating Hours Id
   * @description ID of operating hours associated with the account. Requires Field Service to be enabled.
   * @default null
   */
  OperatingHoursId: string | null;
  /**
   * Owner Id
   * @description ID of the user owning this account. Defaults to current user on creation. Requires permission to change.
   * @default null
   */
  OwnerId: string | null;
  /**
   * Ownership
   * @description Ownership type (picklist).
   * @default null
   */
  Ownership: string | null;
  /**
   * Parent Id
   * @description ID of the parent account, if any.
   * @default null
   */
  ParentId: string | null;
  /**
   * Phone
   * @description Primary phone number (max 40 chars).
   * @default null
   */
  Phone: string | null;
  /**
   * Photo Url
   * @description Path for social network profile image URL. Typically read-only.
   * @default null
   */
  PhotoUrl: string | null;
  /**
   * Rating
   * @description Account prospect rating (picklist).
   * @default null
   */
  Rating: string | null;
  /**
   * Sla Expiration Date  C
   * Format: date
   * @description Custom field: SLA expiration date.
   * @default null
   */
  SLAExpirationDate__c: string | null;
  /**
   * Sla Serial Number  C
   * @description Custom field: SLA serial number.
   * @default null
   */
  SLASerialNumber__c: string | null;
  /**
   * Sla  C
   * @description Custom field: Service Level Agreement (SLA) information.
   * @default null
   */
  SLA__c: string | null;
  /**
   * Shipping City
   * @description Shipping city (max 40 chars).
   * @default null
   */
  ShippingCity: string | null;
  /**
   * Shipping Country
   * @description Shipping country (max 80 chars).
   * @default null
   */
  ShippingCountry: string | null;
  /**
   * Shipping Geocode Accuracy
   * @description Geocode accuracy for shipping address. Part of ShippingAddress compound field.
   * @default null
   */
  ShippingGeocodeAccuracy: string | null;
  /**
   * Shipping Latitude
   * @description Latitude for shipping address (-90 to 90, up to 15 decimal places). Part of ShippingAddress compound field.
   * @default null
   */
  ShippingLatitude: number | null;
  /**
   * Shipping Longitude
   * @description Longitude for shipping address (-180 to 180, up to 15 decimal places). Part of ShippingAddress compound field.
   * @default null
   */
  ShippingLongitude: number | null;
  /**
   * Shipping Postal Code
   * @description Shipping postal code (max 20 chars).
   * @default null
   */
  ShippingPostalCode: string | null;
  /**
   * Shipping State
   * @description Shipping state/province (max 80 chars).
   * @default null
   */
  ShippingState: string | null;
  /**
   * Shipping Street
   * @description Shipping street address (max 255 chars).
   * @default null
   */
  ShippingStreet: string | null;
  /**
   * Sic
   * @description SIC code for business accounts (max 20 chars).
   * @default null
   */
  Sic: string | null;
  /**
   * Sic Desc
   * @description SIC code description for business accounts (max 80 chars).
   * @default null
   */
  SicDesc: string | null;
  /**
   * Site
   * @description Account site/location name (e.g., Headquarters, max 80 chars).
   * @default null
   */
  Site: string | null;
  /**
   * System Modstamp
   * Format: date-time
   * @description System modification timestamp (read-only).
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Ticker Symbol
   * @description Stock market symbol for business accounts (max 20 chars).
   * @default null
   */
  TickerSymbol: string | null;
  /**
   * Tradestyle
   * @description Tradestyle or 'DBA' name for business accounts (max 255 chars). Typically requires Data.com.
   * @default null
   */
  Tradestyle: string | null;
  /**
   * Type
   * @description Type of account (picklist).
   * @default null
   */
  Type: string | null;
  /**
   * Upsell Opportunity  C
   * @description Custom field: Potential upsell opportunities.
   * @default null
   */
  UpsellOpportunity__c: string | null;
  /**
   * Website
   * @description Account website (fully qualified URL, max 255 chars).
   * @default null
   */
  Website: string | null;
  /**
   * Year Started
   * @description Year organization was established for business accounts (4 chars). Typically requires Data.com.
   * @default null
   */
  YearStarted: string | null;
  /**
   * Attributes  Type
   * @description Salesforce SObject type (e.g., 'Account'). Read-only, ignored in updates.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description URL for the Salesforce SObject. Read-only, ignored in updates.
   * @default null
   */
  attributes__url: string | null;
  /**
   * Id
   * @description Unique identifier (ID) of the Account object to be updated (e.g., '001R0000005hDFYIA2').
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID tool output.
 */
type SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Response data from Salesforce. Empty for successful HTTP 204 updates; may contain error details otherwise.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_CAMPAIGN tool input.
 */
type SALESFORCE_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Actual Cost
   * @description Updated actual cost. Leave as -1 to keep unchanged.
   * @default -1
   */
  actual_cost: number;
  /**
   * Budgeted Cost
   * @description Updated budgeted cost. Leave as -1 to keep unchanged.
   * @default -1
   */
  budgeted_cost: number;
  /**
   * Campaign Id
   * @description The Salesforce ID of the campaign to update.
   */
  campaign_id?: string;
  /**
   * Description
   * @description Updated description. Leave empty to keep unchanged.
   * @default
   */
  description: string;
  /**
   * End Date
   * @description Updated end date in YYYY-MM-DD format. Leave empty to keep unchanged.
   * @default
   */
  end_date: string;
  /**
   * Expected Response
   * @description Updated expected response rate. Leave as -1 to keep unchanged.
   * @default -1
   */
  expected_response: number;
  /**
   * Expected Revenue
   * @description Updated expected revenue. Leave as -1 to keep unchanged.
   * @default -1
   */
  expected_revenue: number;
  /**
   * Is Active
   * @description Updated active status. Leave as None to keep unchanged.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Name
   * @description Updated campaign name. Leave empty to keep unchanged.
   * @default
   */
  name: string;
  /**
   * Number Sent
   * @description Updated number sent. Leave as -1 to keep unchanged.
   * @default -1
   */
  number_sent: number;
  /**
   * Parent Id
   * @description Updated parent campaign ID. Leave empty to keep unchanged.
   * @default
   */
  parent_id: string;
  /**
   * Start Date
   * @description Updated start date in YYYY-MM-DD format. Leave empty to keep unchanged.
   * @default
   */
  start_date: string;
  /**
   * Status
   * @description Updated campaign status. Leave empty to keep unchanged.
   * @default
   */
  status: string;
  /**
   * Type
   * @description Updated campaign type. Leave empty to keep unchanged.
   * @default
   */
  type: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_CAMPAIGN tool output.
 */
type SALESFORCE_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from Salesforce API containing status information.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON tool input.
 */
type SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON_INPUT = {
  /**
   * Actual Cost
   * @description Actual cost of the campaign.
   * @default null
   */
  ActualCost: number | null;
  /**
   * Amount All Opportunities
   * @description Read-only. Total value of all opportunities. Label: Value Opportunities in Campaign.
   * @default null
   */
  AmountAllOpportunities: number | null;
  /**
   * Amount Won Opportunities
   * @description Read-only. Total value of won opportunities. Label: Value Won Opportunities in Campaign.
   * @default null
   */
  AmountWonOpportunities: number | null;
  /**
   * Budgeted Cost
   * @description Budgeted cost for the campaign.
   * @default null
   */
  BudgetedCost: number | null;
  /**
   * Campaign Member Record Type Id
   * @description Record type ID for CampaignMember records, used to differentiate member types.
   * @default null
   */
  CampaignMemberRecordTypeId: string | null;
  /**
   * Created By Id
   * @description Read-only. ID of the creator.
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Read-only. Creation date and time.
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Description
   * @description Campaign description (limit 32KB; first 255 chars displayed in reports).
   * @default null
   */
  Description: string | null;
  /**
   * End Date
   * Format: date
   * @description Campaign end date (YYYY-MM-DD); responses received after this date are still counted.
   * @default null
   */
  EndDate: string | null;
  /**
   * Expected Response
   * @description Expected response rate percentage (e.g., 10 for 10%).
   * @default null
   */
  ExpectedResponse: number | null;
  /**
   * Expected Revenue
   * @description Expected revenue from the campaign.
   * @default null
   */
  ExpectedRevenue: number | null;
  /**
   * Id
   * @description Read-only. Campaign ID.
   * @default null
   */
  Id: string | null;
  /**
   * Is Active
   * @description Indicates if the campaign is active. Label: Active.
   * @default null
   */
  IsActive: boolean | null;
  /**
   * Is Deleted
   * @description Read-only. Indicates if the record has been deleted.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Last Activity Date
   * Format: date
   * @description Read-only. Date of the last activity (event or closed task).
   * @default null
   */
  LastActivityDate: string | null;
  /**
   * Last Modified By Id
   * @description Read-only. ID of the last modifier.
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Read-only. Last modification date and time.
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Read-only. Timestamp of the current user's last reference.
   * @default null
   */
  LastReferencedDate: string | null;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Read-only. Timestamp of the current user's last view.
   * @default null
   */
  LastViewedDate: string | null;
  /**
   * Name
   * @description Name of the campaign (max 80 characters).
   * @default null
   */
  Name: string | null;
  /**
   * Number Of Contacts
   * @description Read-only. Total contacts in the campaign. Label: Total Contacts.
   * @default null
   */
  NumberOfContacts: number | null;
  /**
   * Number Of Converted Leads
   * @description Read-only. Number of converted leads. Label: Converted Leads.
   * @default null
   */
  NumberOfConvertedLeads: number | null;
  /**
   * Number Of Leads
   * @description Read-only. Total leads in the campaign. Label: Leads in Campaign.
   * @default null
   */
  NumberOfLeads: number | null;
  /**
   * Number Of Opportunities
   * @description Read-only. Total opportunities in the campaign. Label: Opportunities in Campaign.
   * @default null
   */
  NumberOfOpportunities: number | null;
  /**
   * Number Of Responses
   * @description Read-only. Number of 'Responded' members. Label: Responses in Campaign.
   * @default null
   */
  NumberOfResponses: number | null;
  /**
   * Number Of Won Opportunities
   * @description Read-only. Number of won opportunities. Label: Won Opportunities in Campaign.
   * @default null
   */
  NumberOfWonOpportunities: number | null;
  /**
   * Number Sent
   * @description Number of individuals targeted (e.g., emails sent). Label: Num Sent.
   * @default null
   */
  NumberSent: number | null;
  /**
   * Owner Id
   * @description ID of the campaign owner; defaults to the API caller if not specified.
   * @default null
   */
  OwnerId: string | null;
  /**
   * Parent Id
   * @description ID of the parent Campaign if part of a hierarchy.
   * @default null
   */
  ParentId: string | null;
  /**
   * Start Date
   * Format: date
   * @description Campaign start date (YYYY-MM-DD).
   * @default null
   */
  StartDate: string | null;
  /**
   * Status
   * @description Status of the campaign (limit 40 characters).
   * @default null
   */
  Status: string | null;
  /**
   * System Modstamp
   * Format: date-time
   * @description Read-only. Timestamp of the last system modification.
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Type
   * @description Type of campaign (limit 40 characters).
   * @default null
   */
  Type: string | null;
  /**
   * Attributes  Type
   * @description Read-only. Salesforce object type, typically 'Campaign'.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description Read-only. API URL for this Campaign object.
   * @default null
   */
  attributes__url: string | null;
  /**
   * Id
   * @description Unique identifier of the Campaign to update (e.g., 001R0000005hDFYIA2).
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON tool output.
 */
type SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON_OUTPUT = {
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_CONTACT tool input.
 */
type SALESFORCE_UPDATE_CONTACT_INPUT = {
  /**
   * Account Id
   * @description Updated Account ID association. Leave empty to keep unchanged.
   * @default
   */
  account_id: string;
  /**
   * Birthdate
   * @description Updated birthdate in YYYY-MM-DD format. Leave empty to keep unchanged.
   * @default
   */
  birthdate: string;
  /**
   * Contact Id
   * @description The Salesforce ID of the contact to update.
   */
  contact_id?: string;
  /**
   * Department
   * @description Updated department. Leave empty to keep unchanged.
   * @default
   */
  department: string;
  /**
   * Description
   * @description Updated description/notes. Leave empty to keep unchanged.
   * @default
   */
  description: string;
  /**
   * Email
   * @description Updated email address. Leave empty to keep unchanged.
   * @default
   */
  email: string;
  /**
   * First Name
   * @description Updated first name. Leave empty to keep unchanged.
   * @default
   */
  first_name: string;
  /**
   * Last Name
   * @description Updated last name. Leave empty to keep unchanged.
   * @default
   */
  last_name: string;
  /**
   * Mailing City
   * @description Updated mailing city. Leave empty to keep unchanged.
   * @default
   */
  mailing_city: string;
  /**
   * Mailing Country
   * @description Updated mailing country. Leave empty to keep unchanged.
   * @default
   */
  mailing_country: string;
  /**
   * Mailing Postal Code
   * @description Updated mailing postal/zip code. Leave empty to keep unchanged.
   * @default
   */
  mailing_postal_code: string;
  /**
   * Mailing State
   * @description Updated mailing state/province. Leave empty to keep unchanged.
   * @default
   */
  mailing_state: string;
  /**
   * Mailing Street
   * @description Updated mailing street address. Leave empty to keep unchanged.
   * @default
   */
  mailing_street: string;
  /**
   * Mobile Phone
   * @description Updated mobile phone number. Leave empty to keep unchanged.
   * @default
   */
  mobile_phone: string;
  /**
   * Phone
   * @description Updated primary phone number. Leave empty to keep unchanged.
   * @default
   */
  phone: string;
  /**
   * Title
   * @description Updated job title. Leave empty to keep unchanged.
   * @default
   */
  title: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_CONTACT tool output.
 */
type SALESFORCE_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_CONTACT_BY_ID tool input.
 */
type SALESFORCE_UPDATE_CONTACT_BY_ID_INPUT = {
  /**
   * Account Id
   * @description Parent Account ID. When changing accounts for portal-enabled contacts, update up to 50 contacts at once, preferably after business hours.
   * @default null
   */
  AccountId: string | null;
  /**
   * Assistant Name
   * @description Assistant's name.
   * @default null
   */
  AssistantName: string | null;
  /**
   * Assistant Phone
   * @description Assistant's telephone number.
   * @default null
   */
  AssistantPhone: string | null;
  /**
   * Birthdate
   * Format: date
   * @description Birthdate (YYYY-MM-DD). Year is ignored in report/SOQL filters.
   * @default null
   */
  Birthdate: string | null;
  /**
   * Clean Status
   * @description Data quality status compared to Data.com (e.g., 'Matched', 'Pending').
   * @default null
   */
  CleanStatus: string | null;
  /**
   * Contact Source
   * @description Source of contact information (e.g., external system).
   * @default null
   */
  ContactSource: string | null;
  /**
   * Created By Id
   * @description ID of the user who created the contact (read-only).
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Creation date/time (read-only).
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Department
   * @description Department.
   * @default null
   */
  Department: string | null;
  /**
   * Description
   * @description Description (up to 32KB). Label: 'Contact Description'.
   * @default null
   */
  Description: string | null;
  /**
   * Email
   * @description Email address.
   * @default null
   */
  Email: string | null;
  /**
   * Email Bounced Date
   * Format: date-time
   * @description Date/time of email bounce, if bounce management is active.
   * @default null
   */
  EmailBouncedDate: string | null;
  /**
   * Email Bounced Reason
   * @description Reason for email bounce, if bounce management is active.
   * @default null
   */
  EmailBouncedReason: string | null;
  /**
   * Fax
   * @description Business fax number. Label: 'Business Fax'.
   * @default null
   */
  Fax: string | null;
  /**
   * First Name
   * @description Contact's first name, up to 40 characters.
   * @default null
   */
  FirstName: string | null;
  /**
   * Home Phone
   * @description Home telephone number.
   * @default null
   */
  HomePhone: string | null;
  /**
   * Id
   * @description Salesforce Contact ID. Typically not required in the request body if the Contact ID is in the URL path; if provided, it must match the path ID.
   * @default null
   */
  Id: string | null;
  /**
   * Individual Id
   * @description Associated data privacy record ID. Available if Data Protection and Privacy is enabled.
   * @default null
   */
  IndividualId: string | null;
  /**
   * Is Deleted
   * @description Indicates if the contact is in the Recycle Bin. Label: 'Deleted'.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Is Email Bounced
   * @description Indicates if an email to the contact has bounced, if bounce management is active.
   * @default null
   */
  IsEmailBounced: boolean | null;
  /**
   * Is Priority Record
   * @description Indicates if this is a priority contact.
   * @default null
   */
  IsPriorityRecord: boolean | null;
  /**
   * Jigsaw
   * @description Data.com (Salesforce D&B) company ID. Max 20 chars. Do not modify; used for import troubleshooting.
   * @default null
   */
  Jigsaw: string | null;
  /**
   * Jigsaw Contact Id
   * @description Data.com contact ID (read-only). Used for internal sync; do not modify.
   * @default null
   */
  JigsawContactId: string | null;
  /**
   * Languages  C
   * @description Custom field 'Languages__c': Languages spoken by the contact (e.g., English;Spanish).
   * @default null
   */
  Languages__c: string | null;
  /**
   * Last Activity Date
   * Format: date
   * @description Date of the most recent activity or closed task (read-only).
   * @default null
   */
  LastActivityDate: string | null;
  /**
   * Last Cu Request Date
   * Format: date-time
   * @description Timestamp of the last contact update request for data privacy (read-only).
   * @default null
   */
  LastCURequestDate: string | null;
  /**
   * Last Cu Update Date
   * Format: date-time
   * @description Timestamp of the last contact update for data privacy (read-only).
   * @default null
   */
  LastCUUpdateDate: string | null;
  /**
   * Last Modified By Id
   * @description ID of the user who last modified the contact (read-only).
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Last modification date/time (read-only).
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Last Name
   * @description Contact's last name, up to 80 characters.
   * @default null
   */
  LastName: string | null;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Timestamp of when current user last accessed this contact or related records (read-only).
   * @default null
   */
  LastReferencedDate: string | null;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Timestamp of when current user last viewed this contact; null if only referenced (read-only).
   * @default null
   */
  LastViewedDate: string | null;
  /**
   * Lead Source
   * @description Lead source (e.g., Web, Partner Referral).
   * @default null
   */
  LeadSource: string | null;
  /**
   * Level  C
   * @description Custom field 'Level__c': Categorizes contact importance/engagement (e.g., Primary).
   * @default null
   */
  Level__c: string | null;
  /**
   * Mailing City
   * @description Mailing address: city.
   * @default null
   */
  MailingCity: string | null;
  /**
   * Mailing Country
   * @description Mailing address: country.
   * @default null
   */
  MailingCountry: string | null;
  /**
   * Mailing Geocode Accuracy
   * @description Mailing address: geocode accuracy.
   * @default null
   */
  MailingGeocodeAccuracy: string | null;
  /**
   * Mailing Latitude
   * @description Mailing address: latitude (–90 to 90, up to 15 decimal places). Use with MailingLongitude.
   * @default null
   */
  MailingLatitude: number | null;
  /**
   * Mailing Longitude
   * @description Mailing address: longitude (–180 to 180, up to 15 decimal places). Use with MailingLatitude.
   * @default null
   */
  MailingLongitude: number | null;
  /**
   * Mailing Postal Code
   * @description Mailing address: postal code.
   * @default null
   */
  MailingPostalCode: string | null;
  /**
   * Mailing State
   * @description Mailing address: state/province.
   * @default null
   */
  MailingState: string | null;
  /**
   * Mailing Street
   * @description Mailing address: street.
   * @default null
   */
  MailingStreet: string | null;
  /**
   * Master Record Id
   * @description ID of the master record if this contact was merged and deleted; null otherwise.
   * @default null
   */
  MasterRecordId: string | null;
  /**
   * Mobile Phone
   * @description Mobile phone number.
   * @default null
   */
  MobilePhone: string | null;
  /**
   * Name
   * @description Full name (read-only). Concatenation of FirstName, MiddleName, LastName, Suffix.
   * @default null
   */
  Name: string | null;
  /**
   * Other City
   * @description Alternative address: city.
   * @default null
   */
  OtherCity: string | null;
  /**
   * Other Country
   * @description Alternative address: country.
   * @default null
   */
  OtherCountry: string | null;
  /**
   * Other Geocode Accuracy
   * @description Alternative address: geocode accuracy.
   * @default null
   */
  OtherGeocodeAccuracy: string | null;
  /**
   * Other Latitude
   * @description Alternative address: latitude (–90 to 90, up to 15 decimal places). Use with OtherLongitude.
   * @default null
   */
  OtherLatitude: number | null;
  /**
   * Other Longitude
   * @description Alternative address: longitude (–180 to 180, up to 15 decimal places). Use with OtherLatitude.
   * @default null
   */
  OtherLongitude: number | null;
  /**
   * Other Phone
   * @description Alternative address: phone number.
   * @default null
   */
  OtherPhone: string | null;
  /**
   * Other Postal Code
   * @description Alternative address: postal code.
   * @default null
   */
  OtherPostalCode: string | null;
  /**
   * Other State
   * @description Alternative address: state/province.
   * @default null
   */
  OtherState: string | null;
  /**
   * Other Street
   * @description Alternative address: street.
   * @default null
   */
  OtherStreet: string | null;
  /**
   * Owner Id
   * @description Salesforce User ID of the contact owner.
   * @default null
   */
  OwnerId: string | null;
  /**
   * Phone
   * @description Primary business phone. Label: 'Business Phone'.
   * @default null
   */
  Phone: string | null;
  /**
   * Photo Url
   * @description Relative path to profile photo (read-only). Combine with instance URL for full path. Empty if Social Accounts/Contacts is disabled.
   * @default null
   */
  PhotoUrl: string | null;
  /**
   * Reports To Id
   * @description Manager's Contact ID. Not available if IsPersonAccount is true.
   * @default null
   */
  ReportsToId: string | null;
  /**
   * Salutation
   * @description Honorific for greetings (e.g., Mr., Ms., Dr.).
   * @default null
   */
  Salutation: string | null;
  /**
   * System Modstamp
   * Format: date-time
   * @description Last system modification date/time (read-only).
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Title
   * @description Job title (e.g., CEO, Vice President).
   * @default null
   */
  Title: string | null;
  /**
   * Attributes  Type
   * @description Salesforce SObject type (e.g., 'Contact'). Typically read-only, not for update requests.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description Relative API URL for this SObject. Typically read-only, not for update requests.
   * @default null
   */
  attributes__url: string | null;
  /**
   * Id
   * @description Unique Salesforce ID of the Contact to update (e.g., '001R0000005hDFYIA2'). This is a required path parameter.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_CONTACT_BY_ID tool output.
 */
type SALESFORCE_UPDATE_CONTACT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Response data. Salesforce typically returns 204 No Content on successful Contact PATCH, so this may be empty or a proxy success confirmation.
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_LEAD tool input.
 */
type SALESFORCE_UPDATE_LEAD_INPUT = {
  /**
   * Annual Revenue
   * @description Updated annual revenue. Leave as -1 to keep unchanged.
   * @default -1
   */
  annual_revenue: number;
  /**
   * City
   * @description Updated city. Leave empty to keep unchanged.
   * @default
   */
  city: string;
  /**
   * Company
   * @description Updated company name. Leave empty to keep unchanged.
   * @default
   */
  company: string;
  /**
   * Country
   * @description Updated country. Leave empty to keep unchanged.
   * @default
   */
  country: string;
  /**
   * Description
   * @description Updated description. Leave empty to keep unchanged.
   * @default
   */
  description: string;
  /**
   * Email
   * @description Updated email address. Leave empty to keep unchanged.
   * @default
   */
  email: string;
  /**
   * First Name
   * @description Updated first name. Leave empty to keep unchanged.
   * @default
   */
  first_name: string;
  /**
   * Industry
   * @description Updated industry. Leave empty to keep unchanged.
   * @default
   */
  industry: string;
  /**
   * Last Name
   * @description Updated last name. Leave empty to keep unchanged.
   * @default
   */
  last_name: string;
  /**
   * Lead Id
   * @description The Salesforce ID of the lead to update.
   */
  lead_id?: string;
  /**
   * Lead Source
   * @description Updated lead source. Leave empty to keep unchanged.
   * @default
   */
  lead_source: string;
  /**
   * Number Of Employees
   * @description Updated number of employees. Leave as -1 to keep unchanged.
   * @default -1
   */
  number_of_employees: number;
  /**
   * Phone
   * @description Updated phone number. Leave empty to keep unchanged.
   * @default
   */
  phone: string;
  /**
   * Postal Code
   * @description Updated postal/zip code. Leave empty to keep unchanged.
   * @default
   */
  postal_code: string;
  /**
   * Rating
   * @description Updated rating. Leave empty to keep unchanged.
   * @default
   */
  rating: string;
  /**
   * State
   * @description Updated state/province. Leave empty to keep unchanged.
   * @default
   */
  state: string;
  /**
   * Status
   * @description Updated status. Leave empty to keep unchanged.
   * @default
   */
  status: string;
  /**
   * Street
   * @description Updated street address. Leave empty to keep unchanged.
   * @default
   */
  street: string;
  /**
   * Title
   * @description Updated job title. Leave empty to keep unchanged.
   * @default
   */
  title: string;
  /**
   * Website
   * @description Updated website. Leave empty to keep unchanged.
   * @default
   */
  website: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_LEAD tool output.
 */
type SALESFORCE_UPDATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD tool input.
 */
type SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD_INPUT = {
  /**
   * Annual Revenue
   * @description Annual revenue of the lead's company.
   * @default null
   */
  AnnualRevenue: number | null;
  /**
   * City
   * @description City for the lead's address.
   * @default null
   */
  City: string | null;
  /**
   * Clean Status
   * @description Data cleanliness status compared with Data.com (e.g., Matched/In Sync, Acknowledged/Reviewed).
   * @default null
   */
  CleanStatus: string | null;
  /**
   * Company
   * @description Required. Company the lead works for. If person accounts are enabled and Company is null, the lead converts to a person account.
   * @default null
   */
  Company: string | null;
  /**
   * Company Duns Number
   * @description Company D-U-N-S number (max 9 chars). Requires Data.com Prospector/Clean.
   * @default null
   */
  CompanyDunsNumber: string | null;
  /**
   * Converted Account Id
   * @description Read-only Salesforce ID of the Account created from this lead.
   * @default null
   */
  ConvertedAccountId: string | null;
  /**
   * Converted Contact Id
   * @description Read-only Salesforce ID of the Contact created from this lead.
   * @default null
   */
  ConvertedContactId: string | null;
  /**
   * Converted Date
   * Format: date
   * @description Read-only date of lead conversion (YYYY-MM-DD).
   * @default null
   */
  ConvertedDate: string | null;
  /**
   * Converted Opportunity Id
   * @description Read-only Salesforce ID of the Opportunity created from this lead.
   * @default null
   */
  ConvertedOpportunityId: string | null;
  /**
   * Country
   * @description Country for the lead's address.
   * @default null
   */
  Country: string | null;
  /**
   * Created By Id
   * @description Read-only ID of the user who created the lead.
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Read-only creation timestamp (ISO 8601).
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Current Generators  C
   * @description Custom field, possibly detailing current solutions or 'generators' used.
   * @default null
   */
  CurrentGenerators__c: string | null;
  /**
   * Dandb Company Id
   * @description Typically read-only D&B Company ID used by Data.com.
   * @default null
   */
  DandbCompanyId: string | null;
  /**
   * Description
   * @description Free-text description or notes (up to 32,000 characters).
   * @default null
   */
  Description: string | null;
  /**
   * Email
   * @description Email address.
   * @default null
   */
  Email: string | null;
  /**
   * Email Bounced Date
   * Format: date-time
   * @description Date and time of email bounce (ISO 8601), if bounce management is active.
   * @default null
   */
  EmailBouncedDate: string | null;
  /**
   * Email Bounced Reason
   * @description Reason for email bounce, if bounce management is active.
   * @default null
   */
  EmailBouncedReason: string | null;
  /**
   * Fax
   * @description Fax number.
   * @default null
   */
  Fax: string | null;
  /**
   * First Name
   * @description Lead's first name (up to 40 characters).
   * @default null
   */
  FirstName: string | null;
  /**
   * Geocode Accuracy
   * @description Accuracy level of the geocoded address, specific to Salesforce's geocoding service.
   * @default null
   */
  GeocodeAccuracy: string | null;
  /**
   * Id
   * @description Salesforce ID of the Lead. If included in the request body, it must match the `id` in the URL path; generally not needed in the body for updates.
   * @default null
   */
  Id: string | null;
  /**
   * Individual Id
   * @description ID of the associated Individual (data privacy) record. Available if Data Protection and Privacy is enabled.
   * @default null
   */
  IndividualId: string | null;
  /**
   * Industry
   * @description Primary industry of the lead's company.
   * @default null
   */
  Industry: string | null;
  /**
   * Is Converted
   * @description Read-only flag indicating if the lead has been converted. Label: Converted.
   * @default null
   */
  IsConverted: boolean | null;
  /**
   * Is Deleted
   * @description Specifies if the Lead is in the Recycle Bin. Label: Deleted.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Is Priority Record
   * @description Indicates if this is a priority record; meaning varies by Salesforce customization.
   * @default null
   */
  IsPriorityRecord: boolean | null;
  /**
   * Is Unread By Owner
   * @description Specifies if the lead is unread by its owner. Label: Unread By Owner.
   * @default null
   */
  IsUnreadByOwner: boolean | null;
  /**
   * Jigsaw
   * @description Data.com (Jigsaw) contact ID reference (max 20 chars). Indicates Data.com import. Do not modify. Label: Data.com Key.
   * @default null
   */
  Jigsaw: string | null;
  /**
   * Jigsaw Contact Id
   * @description Typically read-only Data.com (Jigsaw) contact ID for integration.
   * @default null
   */
  JigsawContactId: string | null;
  /**
   * Last Activity Date
   * Format: date
   * @description Read-only most recent activity date (YYYY-MM-DD).
   * @default null
   */
  LastActivityDate: string | null;
  /**
   * Last Modified By Id
   * @description Read-only ID of the user who last modified the lead.
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Read-only last modification timestamp (ISO 8601).
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Last Name
   * @description Lead's last name (up to 80 characters).
   * @default null
   */
  LastName: string | null;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Read-only timestamp of when the current user last accessed this lead or related record (ISO 8601).
   * @default null
   */
  LastReferencedDate: string | null;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Read-only timestamp of when the current user last viewed this lead (ISO 8601).
   * @default null
   */
  LastViewedDate: string | null;
  /**
   * Latitude
   * @description WGS84 latitude in decimal degrees (-90.0 to 90.0, up to 15 decimal places).
   * @default null
   */
  Latitude: number | null;
  /**
   * LeadsourceEnm
   * @description Source of the lead.
   * @default null
   * @enum {string|null}
   */
  LeadSource: "Web" | "Other" | "Phone Inquiry" | "Partner Referral" | "Purchased List" | null;
  /**
   * Longitude
   * @description WGS84 longitude in decimal degrees (-180.0 to 180.0, up to 15 decimal places).
   * @default null
   */
  Longitude: number | null;
  /**
   * Master Record Id
   * @description ID of the master Lead record if this Lead was merged and deleted; `null` otherwise.
   * @default null
   */
  MasterRecordId: string | null;
  /**
   * Mobile Phone
   * @description Mobile phone number.
   * @default null
   */
  MobilePhone: string | null;
  /**
   * Name
   * @description Read-only full name of the lead (concatenation of FirstName, MiddleName, LastName, Suffix; max 203 characters).
   * @default null
   */
  Name: string | null;
  /**
   * Number Of Employees
   * @description Number of employees at the lead's company. Label: Employees.
   * @default null
   */
  NumberOfEmployees: number | null;
  /**
   * Numberof Locations  C
   * @description Custom field for the number of locations of the lead's company.
   * @default null
   */
  NumberofLocations__c: number | null;
  /**
   * Owner Id
   * @description Salesforce User ID of the lead owner.
   * @default null
   */
  OwnerId: string | null;
  /**
   * Phone
   * @description Primary phone number.
   * @default null
   */
  Phone: string | null;
  /**
   * Photo Url
   * @description Relative URL path to the lead's photo; combine with Salesforce instance URL for full image URL. Empty if Social Accounts and Contacts is disabled.
   * @default null
   */
  PhotoUrl: string | null;
  /**
   * Postal Code
   * @description Postal code (e.g., ZIP code). Label: Zip/Postal Code.
   * @default null
   */
  PostalCode: string | null;
  /**
   * Primary  C
   * @description Custom field, often indicating primary contact status.
   * @default null
   */
  Primary__c: string | null;
  /**
   * Product Interest  C
   * @description Custom field for lead's product interest.
   * @default null
   */
  ProductInterest__c: string | null;
  /**
   * Rating
   * @description Lead rating (e.g., potential or priority).
   * @default null
   */
  Rating: string | null;
  /**
   * Sic Code  C
   * @description Custom field for Standard Industrial Classification (SIC) code.
   * @default null
   */
  SICCode__c: string | null;
  /**
   * SalutationEnm
   * @description Lead's salutation.
   * @default null
   * @enum {string|null}
   */
  Salutation: "Mr." | "Ms." | "Mrs." | "Dr." | "Prof." | null;
  /**
   * State
   * @description State or province (e.g., CA, California).
   * @default null
   */
  State: string | null;
  /**
   * Status
   * @description Current status (e.g., Open, Contacted); defined in LeadStatus picklist.
   * @default null
   */
  Status: string | null;
  /**
   * Street
   * @description Street address (e.g., 123 Main St).
   * @default null
   */
  Street: string | null;
  /**
   * System Modstamp
   * Format: date-time
   * @description Read-only timestamp of last system modification (ISO 8601).
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Title
   * @description Lead's job title.
   * @default null
   */
  Title: string | null;
  /**
   * Website
   * @description Website URL.
   * @default null
   */
  Website: string | null;
  /**
   * Attributes  Type
   * @description Salesforce sObject type (e.g., 'Lead'). Generally not set by user for simple updates.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description API URL for this Lead record. Generally not set by user for simple updates.
   * @default null
   */
  attributes__url: string | null;
  /**
   * Id
   * @description Unique Salesforce ID of the Lead to update (e.g., 001R0000005hDFYIA2); this is a required path parameter.
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD tool output.
 */
type SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD_OUTPUT = {
  /**
   * Data
   * @description Response data from Salesforce API. Empty for successful HTTP 204 updates; populated for errors or other success codes returning content.
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_NOTE tool input.
 */
type SALESFORCE_UPDATE_NOTE_INPUT = {
  /**
   * Body
   * @description Updated body/content of the note. Leave empty to keep unchanged.
   * @default
   */
  body: string;
  /**
   * Is Private
   * @description Updated privacy setting. Leave empty to keep unchanged.
   * @default null
   */
  is_private: boolean | null;
  /**
   * Note Id
   * @description The Salesforce ID of the note to update.
   */
  note_id?: string;
  /**
   * Owner Id
   * @description Updated owner ID. Leave empty to keep unchanged.
   * @default
   */
  owner_id: string;
  /**
   * Title
   * @description Updated title of the note. Leave empty to keep unchanged.
   * @default
   */
  title: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_NOTE tool output.
 */
type SALESFORCE_UPDATE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_OPPORTUNITY tool input.
 */
type SALESFORCE_UPDATE_OPPORTUNITY_INPUT = {
  /**
   * Account Id
   * @description Updated Account ID. Leave empty to keep unchanged.
   * @default
   */
  account_id: string;
  /**
   * Amount
   * @description Updated amount. Leave as -1 to keep unchanged.
   * @default -1
   */
  amount: number;
  /**
   * Close Date
   * @description Updated close date in YYYY-MM-DD format. Leave empty to keep unchanged.
   * @default
   */
  close_date: string;
  /**
   * Contact Id
   * @description Updated primary Contact ID. Leave empty to keep unchanged.
   * @default
   */
  contact_id: string;
  /**
   * Description
   * @description Updated description. Leave empty to keep unchanged.
   * @default
   */
  description: string;
  /**
   * Lead Source
   * @description Updated lead source. Leave empty to keep unchanged.
   * @default
   */
  lead_source: string;
  /**
   * Name
   * @description Updated opportunity name. Leave empty to keep unchanged.
   * @default
   */
  name: string;
  /**
   * Next Step
   * @description Updated next step. Leave empty to keep unchanged.
   * @default
   */
  next_step: string;
  /**
   * Opportunity Id
   * @description The Salesforce ID of the opportunity to update.
   */
  opportunity_id?: string;
  /**
   * Probability
   * @description Updated probability percentage. Leave as -1 to keep unchanged.
   * @default -1
   */
  probability: number;
  /**
   * Stage Name
   * @description Updated stage. Leave empty to keep unchanged.
   * @default
   */
  stage_name: string;
  /**
   * Type
   * @description Updated opportunity type. Leave empty to keep unchanged.
   * @default
   */
  type: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_OPPORTUNITY tool output.
 */
type SALESFORCE_UPDATE_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_OPPORTUNITY_BY_ID tool input.
 */
type SALESFORCE_UPDATE_OPPORTUNITY_BY_ID_INPUT = {
  /**
   * Account Id
   * @description ID of the associated Account, which must exist in Salesforce.
   * @default null
   */
  AccountId: string | null;
  /**
   * Amount
   * @description Estimated total sale amount. If the opportunity has products, this amount is the sum of the related products and direct updates to this field are ignored.
   * @default null
   */
  Amount: number | null;
  /**
   * Campaign Id
   * @description ID of a related Campaign. Requires Campaigns feature enabled and read access to the Campaign object.
   * @default null
   */
  CampaignId: string | null;
  /**
   * Close Date
   * Format: date
   * @description Expected close date in YYYY-MM-DD format.
   * @default null
   */
  CloseDate: string | null;
  /**
   * Contact Id
   * @description Read-only. ID of primary Contact, derived from OpportunityContactRole. Set at creation via IsPrimary flag on OpportunityContactRole (API v46.0+).
   * @default null
   */
  ContactId: string | null;
  /**
   * Created By Id
   * @description Read-only. ID of the user who created this record.
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Read-only. Creation timestamp (ISO 8601 UTC).
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Current Generators  C
   * @description Information about current generators related to the opportunity.
   * @default null
   */
  CurrentGenerators__c: string | null;
  /**
   * Delivery Installation Status  C
   * @description Delivery and installation status of the opportunity.
   * @default null
   */
  DeliveryInstallationStatus__c: string | null;
  /**
   * Description
   * @description Text description of the opportunity. Max 32,000 characters.
   * @default null
   */
  Description: string | null;
  /**
   * Expected Revenue
   * @description Read-only. Calculated as Amount * Probability. Updated by changes to Amount or Probability.
   * @default null
   */
  ExpectedRevenue: number | null;
  /**
   * Fiscal
   * @description If fiscal years are not enabled: name of the fiscal quarter/period for CloseDate (Format: "YYYY Q", e.g., "2023 1").
   * @default null
   */
  Fiscal: string | null;
  /**
   * Fiscal Quarter
   * @description Fiscal quarter (1-4) of the CloseDate, based on organization's fiscal year settings.
   * @default null
   */
  FiscalQuarter: number | null;
  /**
   * Fiscal Year
   * @description Fiscal year of the CloseDate (e.g., 2024), based on organization's fiscal year settings.
   * @default null
   */
  FiscalYear: number | null;
  /**
   * Forecast Category
   * @description Forecast category (e.g., 'Pipeline', 'BestCase'). Implied by StageName but can be overridden. In API v12.0+, value is set via ForecastCategoryName.
   * @default null
   */
  ForecastCategory: string | null;
  /**
   * Forecast Category Name
   * @description API v12.0+. Name of the forecast category (e.g., 'Pipeline'). Implied by StageName but can be overridden.
   * @default null
   */
  ForecastCategoryName: string | null;
  /**
   * Has Open Activity
   * @description Read-only. True if opportunity has an open event or task (API v35.0+).
   * @default null
   */
  HasOpenActivity: boolean | null;
  /**
   * Has Opportunity Line Item
   * @description Read-only. True if opportunity has line items (Products). Requires assigned Pricebook to add line items.
   * @default null
   */
  HasOpportunityLineItem: boolean | null;
  /**
   * Has Overdue Task
   * @description Read-only. True if opportunity has an overdue task (API v35.0+).
   * @default null
   */
  HasOverdueTask: boolean | null;
  /**
   * Id
   * @description Salesforce ID of the Opportunity; should match the 'id' in the URL path if provided.
   * @default null
   */
  Id: string | null;
  /**
   * Is Closed
   * @description Read-only. Indicates if closed. Controlled by StageName. Label: Closed.
   * @default null
   */
  IsClosed: boolean | null;
  /**
   * Is Deleted
   * @description Indicates if the object is in the Recycle Bin. Label: Deleted.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Is Private
   * @description If true, the opportunity is private, visible only to the owner and administrators.
   * @default null
   */
  IsPrivate: boolean | null;
  /**
   * Is Won
   * @description Read-only. Indicates if won. Controlled by StageName. Label: Won.
   * @default null
   */
  IsWon: boolean | null;
  /**
   * Last Activity Date
   * Format: date
   * @description Read-only. Due date of most recent event or last closed task (YYYY-MM-DD).
   * @default null
   */
  LastActivityDate: string | null;
  /**
   * Last Amount Changed History Id
   * @description Read-only. ID of OpportunityHistory record for last Amount update (API v50.0+).
   * @default null
   */
  LastAmountChangedHistoryId: string | null;
  /**
   * Last Close Date Changed History Id
   * @description Read-only. ID of OpportunityHistory record for last CloseDate update (API v50.0+).
   * @default null
   */
  LastCloseDateChangedHistoryId: string | null;
  /**
   * Last Modified By Id
   * @description Read-only. ID of the user who last modified this record.
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Read-only. Last modification timestamp (ISO 8601 UTC).
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Last Referenced Date
   * Format: date-time
   * @description Read-only. Timestamp current user last accessed this record or a related record (ISO 8601 UTC).
   * @default null
   */
  LastReferencedDate: string | null;
  /**
   * Last Stage Change Date
   * Format: date-time
   * @description Read-only. Timestamp of last stage change (ISO 8601 UTC).
   * @default null
   */
  LastStageChangeDate: string | null;
  /**
   * Last Viewed Date
   * Format: date-time
   * @description Read-only. Timestamp current user last viewed this record (ISO 8601 UTC). Null if only referenced (LastReferencedDate).
   * @default null
   */
  LastViewedDate: string | null;
  /**
   * Lead Source
   * @description Source of this opportunity (e.g., 'Advertisement', 'Trade Show').
   * @default null
   */
  LeadSource: string | null;
  /**
   * Main Competitors  C
   * @description Main competitors for this opportunity.
   * @default null
   */
  MainCompetitors__c: string | null;
  /**
   * Name
   * @description Name for this opportunity. Max 120 characters.
   * @default null
   */
  Name: string | null;
  /**
   * Next Step
   * @description Next task in closing the opportunity. Max 255 characters.
   * @default null
   */
  NextStep: string | null;
  /**
   * Order Number  C
   * @description Order number associated with the opportunity.
   * @default null
   */
  OrderNumber__c: string | null;
  /**
   * Owner Id
   * @description ID of the User owner. Updating may change previous owner's record access. Requires 'Transfer Record' permission (API v16.0+).
   * @default null
   */
  OwnerId: string | null;
  /**
   * Pricebook2 Id
   * @description ID of the associated Pricebook2. Required to add line items if products are enabled. Cannot update if line items exist.
   * @default null
   */
  Pricebook2Id: string | null;
  /**
   * Probability
   * @description Estimated confidence percentage (0-100) in closing. Usually implied by StageName, but can be overridden. Round decimal probabilities to whole numbers.
   * @default null
   */
  Probability: number | null;
  /**
   * Push Count
   * @description Number of times this record has been synchronized with a mobile device. Used by Salesforce mobile applications.
   * @default null
   */
  PushCount: number | null;
  /**
   * Stage Name
   * @description Current stage (e.g., 'Prospecting'). Updating automatically updates ForecastCategoryName, IsClosed, IsWon, and Probability. Query OpportunityStage object for available names.
   * @default null
   */
  StageName: string | null;
  /**
   * System Modstamp
   * Format: date-time
   * @description Read-only. Last system modification timestamp (ISO 8601 UTC), by user or automation.
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Total Opportunity Quantity
   * @description Number of items in this opportunity. Used in quantity-based forecasting.
   * @default null
   */
  TotalOpportunityQuantity: number | null;
  /**
   * Tracking Number  C
   * @description Tracking number related to the opportunity.
   * @default null
   */
  TrackingNumber__c: string | null;
  /**
   * Type
   * @description Type of opportunity (e.g., 'New Business', 'Existing Customer'). Label: Opportunity Type.
   * @default null
   */
  Type: string | null;
  /**
   * Attributes  Type
   * @description Type of the Salesforce SObject (e.g., 'Opportunity'). Generally Salesforce-provided.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description Relative URL of the SObject record in Salesforce. Generally Salesforce-provided.
   * @default null
   */
  attributes__url: string | null;
  /**
   * Id
   * @description Unique Salesforce ID of the Opportunity to update (e.g., 006P0000004iVBDIA2).
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_OPPORTUNITY_BY_ID tool output.
 */
type SALESFORCE_UPDATE_OPPORTUNITY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary, as a successful update returns HTTP 204 No Content.
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID tool input.
 */
type SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID_INPUT = {
  /**
   * Body
   * @description Content or body of the Note. Limited to 32 KB.
   * @default null
   */
  Body: string | null;
  /**
   * Created By Id
   * @description Salesforce ID of the User who created the Note (Salesforce field `CreatedById`). System-generated, read-only, and not updatable.
   * @default null
   */
  CreatedById: string | null;
  /**
   * Created Date
   * Format: date-time
   * @description Timestamp of Note creation (Salesforce field `CreatedDate`). System-generated, read-only, and not updatable through this action.
   * @default null
   */
  CreatedDate: string | null;
  /**
   * Id
   * @description Salesforce ID of the Note. Generally not modified as the record ID is specified in the URL path (`id`). If included, it should match the `id` in the path.
   * @default null
   */
  Id: string | null;
  /**
   * Is Deleted
   * @description Indicates whether the Note has been moved to the Recycle Bin (`true`) or not (`false`). Set to `true` to soft-delete. Label: `Deleted`.
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Is Private
   * @description Controls Note visibility. If `true`, Note is private (accessible only by owner or users with 'Modify All Data'). If `false` (default), visibility based on sharing rules. Note: users without 'Modify All Data' setting this `true` on a non-owned note might lose access. Label: `Private`.
   * @default null
   */
  IsPrivate: boolean | null;
  /**
   * Last Modified By Id
   * @description Salesforce ID of the User who last modified the Note (Salesforce field `LastModifiedById`). System-generated, read-only, and not updatable.
   * @default null
   */
  LastModifiedById: string | null;
  /**
   * Last Modified Date
   * Format: date-time
   * @description Timestamp of Note's last modification (Salesforce field `LastModifiedDate`). System-generated, read-only, and not updatable.
   * @default null
   */
  LastModifiedDate: string | null;
  /**
   * Owner Id
   * @description The 18-character Salesforce ID of the User who owns the Note. Updating this changes Note ownership.
   * @default null
   */
  OwnerId: string | null;
  /**
   * Parent Id
   * @description ID of the parent SObject (e.g., Account, Contact, Opportunity) to which this Note is related; can be updated. Salesforce Note objects often require a `ParentId`.
   * @default null
   */
  ParentId: string | null;
  /**
   * System Modstamp
   * Format: date-time
   * @description Timestamp of Note record's last modification by user or system (Salesforce field `SystemModstamp`). System-generated, read-only, not updatable.
   * @default null
   */
  SystemModstamp: string | null;
  /**
   * Title
   * @description Title of the Note.
   * @default null
   */
  Title: string | null;
  /**
   * Attributes  Type
   * @description Type of the SObject, typically 'Note'. System-managed metadata, not part of an update request.
   * @default null
   */
  attributes__type: string | null;
  /**
   * Attributes  Url
   * @description Relative URL for the SObject record. System-managed metadata, not part of an update request.
   * @default null
   */
  attributes__url: string | null;
  /**
   * Id
   * @description The 18-character Salesforce ID of the Note SObject to be updated. This is a required path parameter. (Note: actual Note IDs typically start with `002`).
   */
  id?: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID tool output.
 */
type SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Response data. For a successful update (204 No Content), this is typically not populated.
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
 * Type of SALESFORCE's SALESFORCE_UPDATE_TASK tool input.
 */
type SALESFORCE_UPDATE_TASK_INPUT = {
  /**
   * Activity Date
   * @description Updated due date in YYYY-MM-DD format. Leave empty to keep unchanged.
   * @default null
   */
  activity_date: string | null;
  /**
   * Description
   * @description Updated description or notes. Leave empty to keep unchanged.
   * @default
   */
  description: string;
  /**
   * Is Reminder Set
   * @description Whether to set/unset a reminder. Leave empty to keep unchanged.
   * @default null
   */
  is_reminder_set: boolean | null;
  /**
   * Priority
   * @description Updated priority level. Leave empty to keep unchanged.
   * @default
   */
  priority: string;
  /**
   * Reminder Date Time
   * @description Updated reminder date/time in ISO format. Leave empty to keep unchanged.
   * @default null
   */
  reminder_date_time: string | null;
  /**
   * Status
   * @description Updated status. Leave empty to keep unchanged.
   * @default
   */
  status: string;
  /**
   * Subject
   * @description Updated subject/title of the task. Leave empty to keep unchanged.
   * @default
   */
  subject: string;
  /**
   * Task Id
   * @description The Salesforce ID of the task to update.
   */
  task_id?: string;
  /**
   * What Id
   * @description Updated related record ID. Leave empty to keep unchanged.
   * @default
   */
  what_id: string;
  /**
   * Who Id
   * @description Updated Contact or Lead ID. Leave empty to keep unchanged.
   * @default
   */
  who_id: string;
};

/**
 * Type of SALESFORCE's SALESFORCE_UPDATE_TASK tool output.
 */
type SALESFORCE_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response from Salesforce API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "SALESFORCE".
 */
export type SALESFORCE_TOOL_INPUTS = {
  ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION: SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION_INPUT
  ADD_CONTACT_TO_CAMPAIGN: SALESFORCE_ADD_CONTACT_TO_CAMPAIGN_INPUT
  ADD_LEAD_TO_CAMPAIGN: SALESFORCE_ADD_LEAD_TO_CAMPAIGN_INPUT
  ADD_OPPORTUNITY_LINE_ITEM: SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM_INPUT
  APPLY_LEAD_ASSIGNMENT_RULES: SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES_INPUT
  ASSOCIATE_CONTACT_TO_ACCOUNT: SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT_INPUT
  CLONE_OPPORTUNITY_WITH_PRODUCTS: SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS_INPUT
  CLONE_RECORD: SALESFORCE_CLONE_RECORD_INPUT
  COMPLETE_TASK: SALESFORCE_COMPLETE_TASK_INPUT
  CREATE_ACCOUNT: SALESFORCE_CREATE_ACCOUNT_INPUT
  CREATE_CAMPAIGN: SALESFORCE_CREATE_CAMPAIGN_INPUT
  CREATE_CAMPAIGN_RECORD_VIA_POST: SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST_INPUT
  CREATE_CONTACT: SALESFORCE_CREATE_CONTACT_INPUT
  CREATE_LEAD: SALESFORCE_CREATE_LEAD_INPUT
  CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE: SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE_INPUT
  CREATE_NEW_CONTACT_WITH_JSON_HEADER: SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER_INPUT
  CREATE_NOTE: SALESFORCE_CREATE_NOTE_INPUT
  CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER: SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER_INPUT
  CREATE_OPPORTUNITY: SALESFORCE_CREATE_OPPORTUNITY_INPUT
  CREATE_OPPORTUNITY_RECORD: SALESFORCE_CREATE_OPPORTUNITY_RECORD_INPUT
  CREATE_TASK: SALESFORCE_CREATE_TASK_INPUT
  DELETE_ACCOUNT: SALESFORCE_DELETE_ACCOUNT_INPUT
  DELETE_A_LEAD_OBJECT_BY_ITS_ID: SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID_INPUT
  DELETE_CAMPAIGN: SALESFORCE_DELETE_CAMPAIGN_INPUT
  DELETE_CONTACT: SALESFORCE_DELETE_CONTACT_INPUT
  DELETE_LEAD: SALESFORCE_DELETE_LEAD_INPUT
  DELETE_NOTE: SALESFORCE_DELETE_NOTE_INPUT
  DELETE_OPPORTUNITY: SALESFORCE_DELETE_OPPORTUNITY_INPUT
  EXECUTE_SOQL_QUERY: SALESFORCE_EXECUTE_SOQL_QUERY_INPUT
  FETCH_ACCOUNT_BY_ID_WITH_QUERY: SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY_INPUT
  FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS: SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS_INPUT
  GET_ACCOUNT: SALESFORCE_GET_ACCOUNT_INPUT
  GET_CAMPAIGN: SALESFORCE_GET_CAMPAIGN_INPUT
  GET_CONTACT: SALESFORCE_GET_CONTACT_INPUT
  GET_DASHBOARD: SALESFORCE_GET_DASHBOARD_INPUT
  GET_LEAD: SALESFORCE_GET_LEAD_INPUT
  GET_NOTE: SALESFORCE_GET_NOTE_INPUT
  GET_NOTE_BY_ID_WITH_FIELDS: SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS_INPUT
  GET_OPPORTUNITY: SALESFORCE_GET_OPPORTUNITY_INPUT
  GET_REPORT: SALESFORCE_GET_REPORT_INPUT
  GET_REPORT_INSTANCE: SALESFORCE_GET_REPORT_INSTANCE_INPUT
  GET_USER_INFO: SALESFORCE_GET_USER_INFO_INPUT
  LIST_ACCOUNTS: SALESFORCE_LIST_ACCOUNTS_INPUT
  LIST_CAMPAIGNS: SALESFORCE_LIST_CAMPAIGNS_INPUT
  LIST_CONTACTS: SALESFORCE_LIST_CONTACTS_INPUT
  LIST_DASHBOARDS: SALESFORCE_LIST_DASHBOARDS_INPUT
  LIST_EMAIL_TEMPLATES: SALESFORCE_LIST_EMAIL_TEMPLATES_INPUT
  LIST_LEADS: SALESFORCE_LIST_LEADS_INPUT
  LIST_NOTES: SALESFORCE_LIST_NOTES_INPUT
  LIST_OPPORTUNITIES: SALESFORCE_LIST_OPPORTUNITIES_INPUT
  LIST_REPORTS: SALESFORCE_LIST_REPORTS_INPUT
  LOG_CALL: SALESFORCE_LOG_CALL_INPUT
  LOG_EMAIL_ACTIVITY: SALESFORCE_LOG_EMAIL_ACTIVITY_INPUT
  MASS_TRANSFER_OWNERSHIP: SALESFORCE_MASS_TRANSFER_OWNERSHIP_INPUT
  QUERY_CONTACTS_BY_NAME: SALESFORCE_QUERY_CONTACTS_BY_NAME_INPUT
  QUERY_REPORT: SALESFORCE_QUERY_REPORT_INPUT
  REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER: SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER_INPUT
  REMOVE_A_SPECIFIC_CONTACT_BY_ID: SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID_INPUT
  REMOVE_CAMPAIGN_OBJECT_BY_ID: SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID_INPUT
  REMOVE_FROM_CAMPAIGN: SALESFORCE_REMOVE_FROM_CAMPAIGN_INPUT
  REMOVE_NOTE_OBJECT_BY_ID: SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID_INPUT
  REMOVE_OPPORTUNITY_BY_ID: SALESFORCE_REMOVE_OPPORTUNITY_BY_ID_INPUT
  RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES: SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES_INPUT
  RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING: SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING_INPUT
  RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES: SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES_INPUT
  RETRIEVE_LEAD_BY_ID: SALESFORCE_RETRIEVE_LEAD_BY_ID_INPUT
  RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES: SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES_INPUT
  RETRIEVE_NOTE_OBJECT_INFORMATION: SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION_INPUT
  RETRIEVE_OPPORTUNITIES_DATA: SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA_INPUT
  RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS: SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS_INPUT
  RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS: SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS_INPUT
  RETRIEVE_SPECIFIC_CONTACT_BY_ID: SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID_INPUT
  RUN_REPORT: SALESFORCE_RUN_REPORT_INPUT
  RUN_SOQL_QUERY: SALESFORCE_RUN_SOQL_QUERY_INPUT
  SEARCH_ACCOUNTS: SALESFORCE_SEARCH_ACCOUNTS_INPUT
  SEARCH_CAMPAIGNS: SALESFORCE_SEARCH_CAMPAIGNS_INPUT
  SEARCH_CONTACTS: SALESFORCE_SEARCH_CONTACTS_INPUT
  SEARCH_LEADS: SALESFORCE_SEARCH_LEADS_INPUT
  SEARCH_NOTES: SALESFORCE_SEARCH_NOTES_INPUT
  SEARCH_OPPORTUNITIES: SALESFORCE_SEARCH_OPPORTUNITIES_INPUT
  SEARCH_TASKS: SALESFORCE_SEARCH_TASKS_INPUT
  SEND_EMAIL: SALESFORCE_SEND_EMAIL_INPUT
  SEND_EMAIL_FROM_TEMPLATE: SALESFORCE_SEND_EMAIL_FROM_TEMPLATE_INPUT
  SEND_MASS_EMAIL: SALESFORCE_SEND_MASS_EMAIL_INPUT
  UPDATE_ACCOUNT: SALESFORCE_UPDATE_ACCOUNT_INPUT
  UPDATE_ACCOUNT_OBJECT_BY_ID: SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID_INPUT
  UPDATE_CAMPAIGN: SALESFORCE_UPDATE_CAMPAIGN_INPUT
  UPDATE_CAMPAIGN_BY_ID_WITH_JSON: SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON_INPUT
  UPDATE_CONTACT: SALESFORCE_UPDATE_CONTACT_INPUT
  UPDATE_CONTACT_BY_ID: SALESFORCE_UPDATE_CONTACT_BY_ID_INPUT
  UPDATE_LEAD: SALESFORCE_UPDATE_LEAD_INPUT
  UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD: SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD_INPUT
  UPDATE_NOTE: SALESFORCE_UPDATE_NOTE_INPUT
  UPDATE_OPPORTUNITY: SALESFORCE_UPDATE_OPPORTUNITY_INPUT
  UPDATE_OPPORTUNITY_BY_ID: SALESFORCE_UPDATE_OPPORTUNITY_BY_ID_INPUT
  UPDATE_SPECIFIC_NOTE_BY_ID: SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID_INPUT
  UPDATE_TASK: SALESFORCE_UPDATE_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SALESFORCE".
 */
export type SALESFORCE_TOOL_OUTPUTS = {
  ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION: SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION_OUTPUT
  ADD_CONTACT_TO_CAMPAIGN: SALESFORCE_ADD_CONTACT_TO_CAMPAIGN_OUTPUT
  ADD_LEAD_TO_CAMPAIGN: SALESFORCE_ADD_LEAD_TO_CAMPAIGN_OUTPUT
  ADD_OPPORTUNITY_LINE_ITEM: SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM_OUTPUT
  APPLY_LEAD_ASSIGNMENT_RULES: SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES_OUTPUT
  ASSOCIATE_CONTACT_TO_ACCOUNT: SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT_OUTPUT
  CLONE_OPPORTUNITY_WITH_PRODUCTS: SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS_OUTPUT
  CLONE_RECORD: SALESFORCE_CLONE_RECORD_OUTPUT
  COMPLETE_TASK: SALESFORCE_COMPLETE_TASK_OUTPUT
  CREATE_ACCOUNT: SALESFORCE_CREATE_ACCOUNT_OUTPUT
  CREATE_CAMPAIGN: SALESFORCE_CREATE_CAMPAIGN_OUTPUT
  CREATE_CAMPAIGN_RECORD_VIA_POST: SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST_OUTPUT
  CREATE_CONTACT: SALESFORCE_CREATE_CONTACT_OUTPUT
  CREATE_LEAD: SALESFORCE_CREATE_LEAD_OUTPUT
  CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE: SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE_OUTPUT
  CREATE_NEW_CONTACT_WITH_JSON_HEADER: SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER_OUTPUT
  CREATE_NOTE: SALESFORCE_CREATE_NOTE_OUTPUT
  CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER: SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER_OUTPUT
  CREATE_OPPORTUNITY: SALESFORCE_CREATE_OPPORTUNITY_OUTPUT
  CREATE_OPPORTUNITY_RECORD: SALESFORCE_CREATE_OPPORTUNITY_RECORD_OUTPUT
  CREATE_TASK: SALESFORCE_CREATE_TASK_OUTPUT
  DELETE_ACCOUNT: SALESFORCE_DELETE_ACCOUNT_OUTPUT
  DELETE_A_LEAD_OBJECT_BY_ITS_ID: SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID_OUTPUT
  DELETE_CAMPAIGN: SALESFORCE_DELETE_CAMPAIGN_OUTPUT
  DELETE_CONTACT: SALESFORCE_DELETE_CONTACT_OUTPUT
  DELETE_LEAD: SALESFORCE_DELETE_LEAD_OUTPUT
  DELETE_NOTE: SALESFORCE_DELETE_NOTE_OUTPUT
  DELETE_OPPORTUNITY: SALESFORCE_DELETE_OPPORTUNITY_OUTPUT
  EXECUTE_SOQL_QUERY: SALESFORCE_EXECUTE_SOQL_QUERY_OUTPUT
  FETCH_ACCOUNT_BY_ID_WITH_QUERY: SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY_OUTPUT
  FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS: SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS_OUTPUT
  GET_ACCOUNT: SALESFORCE_GET_ACCOUNT_OUTPUT
  GET_CAMPAIGN: SALESFORCE_GET_CAMPAIGN_OUTPUT
  GET_CONTACT: SALESFORCE_GET_CONTACT_OUTPUT
  GET_DASHBOARD: SALESFORCE_GET_DASHBOARD_OUTPUT
  GET_LEAD: SALESFORCE_GET_LEAD_OUTPUT
  GET_NOTE: SALESFORCE_GET_NOTE_OUTPUT
  GET_NOTE_BY_ID_WITH_FIELDS: SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS_OUTPUT
  GET_OPPORTUNITY: SALESFORCE_GET_OPPORTUNITY_OUTPUT
  GET_REPORT: SALESFORCE_GET_REPORT_OUTPUT
  GET_REPORT_INSTANCE: SALESFORCE_GET_REPORT_INSTANCE_OUTPUT
  GET_USER_INFO: SALESFORCE_GET_USER_INFO_OUTPUT
  LIST_ACCOUNTS: SALESFORCE_LIST_ACCOUNTS_OUTPUT
  LIST_CAMPAIGNS: SALESFORCE_LIST_CAMPAIGNS_OUTPUT
  LIST_CONTACTS: SALESFORCE_LIST_CONTACTS_OUTPUT
  LIST_DASHBOARDS: SALESFORCE_LIST_DASHBOARDS_OUTPUT
  LIST_EMAIL_TEMPLATES: SALESFORCE_LIST_EMAIL_TEMPLATES_OUTPUT
  LIST_LEADS: SALESFORCE_LIST_LEADS_OUTPUT
  LIST_NOTES: SALESFORCE_LIST_NOTES_OUTPUT
  LIST_OPPORTUNITIES: SALESFORCE_LIST_OPPORTUNITIES_OUTPUT
  LIST_REPORTS: SALESFORCE_LIST_REPORTS_OUTPUT
  LOG_CALL: SALESFORCE_LOG_CALL_OUTPUT
  LOG_EMAIL_ACTIVITY: SALESFORCE_LOG_EMAIL_ACTIVITY_OUTPUT
  MASS_TRANSFER_OWNERSHIP: SALESFORCE_MASS_TRANSFER_OWNERSHIP_OUTPUT
  QUERY_CONTACTS_BY_NAME: SALESFORCE_QUERY_CONTACTS_BY_NAME_OUTPUT
  QUERY_REPORT: SALESFORCE_QUERY_REPORT_OUTPUT
  REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER: SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER_OUTPUT
  REMOVE_A_SPECIFIC_CONTACT_BY_ID: SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID_OUTPUT
  REMOVE_CAMPAIGN_OBJECT_BY_ID: SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID_OUTPUT
  REMOVE_FROM_CAMPAIGN: SALESFORCE_REMOVE_FROM_CAMPAIGN_OUTPUT
  REMOVE_NOTE_OBJECT_BY_ID: SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID_OUTPUT
  REMOVE_OPPORTUNITY_BY_ID: SALESFORCE_REMOVE_OPPORTUNITY_BY_ID_OUTPUT
  RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES: SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES_OUTPUT
  RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING: SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING_OUTPUT
  RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES: SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES_OUTPUT
  RETRIEVE_LEAD_BY_ID: SALESFORCE_RETRIEVE_LEAD_BY_ID_OUTPUT
  RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES: SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES_OUTPUT
  RETRIEVE_NOTE_OBJECT_INFORMATION: SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION_OUTPUT
  RETRIEVE_OPPORTUNITIES_DATA: SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA_OUTPUT
  RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS: SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS_OUTPUT
  RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS: SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS_OUTPUT
  RETRIEVE_SPECIFIC_CONTACT_BY_ID: SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID_OUTPUT
  RUN_REPORT: SALESFORCE_RUN_REPORT_OUTPUT
  RUN_SOQL_QUERY: SALESFORCE_RUN_SOQL_QUERY_OUTPUT
  SEARCH_ACCOUNTS: SALESFORCE_SEARCH_ACCOUNTS_OUTPUT
  SEARCH_CAMPAIGNS: SALESFORCE_SEARCH_CAMPAIGNS_OUTPUT
  SEARCH_CONTACTS: SALESFORCE_SEARCH_CONTACTS_OUTPUT
  SEARCH_LEADS: SALESFORCE_SEARCH_LEADS_OUTPUT
  SEARCH_NOTES: SALESFORCE_SEARCH_NOTES_OUTPUT
  SEARCH_OPPORTUNITIES: SALESFORCE_SEARCH_OPPORTUNITIES_OUTPUT
  SEARCH_TASKS: SALESFORCE_SEARCH_TASKS_OUTPUT
  SEND_EMAIL: SALESFORCE_SEND_EMAIL_OUTPUT
  SEND_EMAIL_FROM_TEMPLATE: SALESFORCE_SEND_EMAIL_FROM_TEMPLATE_OUTPUT
  SEND_MASS_EMAIL: SALESFORCE_SEND_MASS_EMAIL_OUTPUT
  UPDATE_ACCOUNT: SALESFORCE_UPDATE_ACCOUNT_OUTPUT
  UPDATE_ACCOUNT_OBJECT_BY_ID: SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID_OUTPUT
  UPDATE_CAMPAIGN: SALESFORCE_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_CAMPAIGN_BY_ID_WITH_JSON: SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON_OUTPUT
  UPDATE_CONTACT: SALESFORCE_UPDATE_CONTACT_OUTPUT
  UPDATE_CONTACT_BY_ID: SALESFORCE_UPDATE_CONTACT_BY_ID_OUTPUT
  UPDATE_LEAD: SALESFORCE_UPDATE_LEAD_OUTPUT
  UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD: SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD_OUTPUT
  UPDATE_NOTE: SALESFORCE_UPDATE_NOTE_OUTPUT
  UPDATE_OPPORTUNITY: SALESFORCE_UPDATE_OPPORTUNITY_OUTPUT
  UPDATE_OPPORTUNITY_BY_ID: SALESFORCE_UPDATE_OPPORTUNITY_BY_ID_OUTPUT
  UPDATE_SPECIFIC_NOTE_BY_ID: SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID_OUTPUT
  UPDATE_TASK: SALESFORCE_UPDATE_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of SALESFORCE's NEW_CONTACT_TRIGGER trigger payload.
 */
type SALESFORCE_NEW_CONTACT_TRIGGER_PAYLOAD = {
  /**
   * Contact
   * @description The Salesforce contact that was created
   */
  contact?: {
      /**
       * Created Date
       * @description When the contact was created
       * @default null
       */
      created_date: string | null;
      /**
       * Id
       * @description The ID of the contact
       */
      id: string;
      /**
       * Name
       * @description The name of the contact
       */
      name: string;
  };
  /**
   * Event Type
   * @description Type of Salesforce contact event
   * @default new_contact
   */
  event_type: string;
};

/**
 * Type of SALESFORCE's NEW_LEAD_TRIGGER trigger payload.
 */
type SALESFORCE_NEW_LEAD_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of Salesforce lead event
   * @default new_lead
   */
  event_type: string;
  /**
   * Lead
   * @description The Salesforce lead that was created
   */
  lead?: {
      /**
       * Created Date
       * @description When the lead was created
       * @default null
       */
      created_date: string | null;
      /**
       * Id
       * @description The ID of the lead
       */
      id: string;
      /**
       * Name
       * @description The name of the lead
       */
      name: string;
  };
};

/**
 * Map of Composio's SALESFORCE toolkit.
 */
export const SALESFORCE = {
  slug: "salesforce",
  tools: {
    /**
     * Deprecated: creates a new salesforce account using a json post request, requiring 'name'; specific fields (e.g., custom, dunsnumber) may have org-level prerequisites.
     */
    ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION: "SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION",
    /**
     * Adds a contact to a campaign by creating a campaignmember record, allowing you to track campaign engagement.
     */
    ADD_CONTACT_TO_CAMPAIGN: "SALESFORCE_ADD_CONTACT_TO_CAMPAIGN",
    /**
     * Adds a lead to a campaign by creating a campaignmember record, allowing you to track campaign engagement.
     */
    ADD_LEAD_TO_CAMPAIGN: "SALESFORCE_ADD_LEAD_TO_CAMPAIGN",
    /**
     * Adds a product (line item) to an opportunity. the product must exist in a pricebook entry that's associated with the opportunity's pricebook.
     */
    ADD_OPPORTUNITY_LINE_ITEM: "SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM",
    /**
     * Applies configured lead assignment rules to a specific lead, automatically routing it to the appropriate owner based on your organization's rules.
     */
    APPLY_LEAD_ASSIGNMENT_RULES: "SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES",
    /**
     * Associates a contact with an account by updating the contact's accountid field.
     */
    ASSOCIATE_CONTACT_TO_ACCOUNT: "SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT",
    /**
     * Clones an opportunity and optionally its products (line items). creates a new opportunity with the same field values and products as the original.
     */
    CLONE_OPPORTUNITY_WITH_PRODUCTS: "SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS",
    /**
     * Creates a copy of an existing salesforce record by reading its data, removing system fields, and creating a new record. optionally apply field updates to the clone.
     */
    CLONE_RECORD: "SALESFORCE_CLONE_RECORD",
    /**
     * Marks a task as completed with optional completion notes. this is a convenience action that updates the task status to 'completed'.
     */
    COMPLETE_TASK: "SALESFORCE_COMPLETE_TASK",
    /**
     * Creates a new account in salesforce with the specified information.
     */
    CREATE_ACCOUNT: "SALESFORCE_CREATE_ACCOUNT",
    /**
     * Creates a new campaign in salesforce with the specified information.
     */
    CREATE_CAMPAIGN: "SALESFORCE_CREATE_CAMPAIGN",
    /**
     * Deprecated: creates a new campaign record in salesforce; if 'parentid' is provided, it must be a valid id of an existing campaign record, and if 'ownerid' is provided, it must be a valid id of an active user.
     */
    CREATE_CAMPAIGN_RECORD_VIA_POST: "SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST",
    /**
     * Creates a new contact in salesforce with the specified information.
     */
    CREATE_CONTACT: "SALESFORCE_CREATE_CONTACT",
    /**
     * Creates a new lead in salesforce with the specified information.
     */
    CREATE_LEAD: "SALESFORCE_CREATE_LEAD",
    /**
     * Deprecated: creates a new lead in salesforce, requiring `lastname` and `company` unless person accounts are enabled and `company` is null.
     */
    CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE: "SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE",
    /**
     * Deprecated: creates a new contact in salesforce; 'lastname' is required, an existing 'accountid' must be used if provided, and any custom fields (ending with '  c') must be predefined.
     */
    CREATE_NEW_CONTACT_WITH_JSON_HEADER: "SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER",
    /**
     * Creates a new note attached to a salesforce record with the specified title and content.
     */
    CREATE_NOTE: "SALESFORCE_CREATE_NOTE",
    /**
     * Deprecated: creates a new note record in salesforce, associated with an existing salesforce object via `parentid`, automatically including a `content-type: application/json` header.
     */
    CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER: "SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER",
    /**
     * Creates a new opportunity in salesforce with the specified information.
     */
    CREATE_OPPORTUNITY: "SALESFORCE_CREATE_OPPORTUNITY",
    /**
     * Deprecated: creates a new opportunity record in salesforce; `name`, `stagename`, and `closedate` are mandatory, and ensure any referenced ids (e.g., `accountid`, `campaignid`) are valid and corresponding salesforce features are enabled if used.
     */
    CREATE_OPPORTUNITY_RECORD: "SALESFORCE_CREATE_OPPORTUNITY_RECORD",
    /**
     * Creates a new task in salesforce to track activities, to-dos, and follow-ups related to contacts, leads, or other records.
     */
    CREATE_TASK: "SALESFORCE_CREATE_TASK",
    /**
     * Permanently deletes an account from salesforce. this action cannot be undone.
     */
    DELETE_ACCOUNT: "SALESFORCE_DELETE_ACCOUNT",
    /**
     * Deprecated: permanently deletes an existing lead object from salesforce using its unique id.
     */
    DELETE_A_LEAD_OBJECT_BY_ITS_ID: "SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID",
    /**
     * Permanently deletes a campaign from salesforce. this action cannot be undone.
     */
    DELETE_CAMPAIGN: "SALESFORCE_DELETE_CAMPAIGN",
    /**
     * Permanently deletes a contact from salesforce. this action cannot be undone.
     */
    DELETE_CONTACT: "SALESFORCE_DELETE_CONTACT",
    /**
     * Permanently deletes a lead from salesforce. this action cannot be undone.
     */
    DELETE_LEAD: "SALESFORCE_DELETE_LEAD",
    /**
     * Permanently deletes a note from salesforce. this action cannot be undone.
     */
    DELETE_NOTE: "SALESFORCE_DELETE_NOTE",
    /**
     * Permanently deletes an opportunity from salesforce. this action cannot be undone.
     */
    DELETE_OPPORTUNITY: "SALESFORCE_DELETE_OPPORTUNITY",
    /**
     * Deprecated: executes the provided soql query against salesforce; the query must begin with 'select'.
     */
    EXECUTE_SOQL_QUERY: "SALESFORCE_EXECUTE_SOQL_QUERY",
    /**
     * Deprecated: use this action to retrieve a salesforce account by its unique id, which must be a valid and existing salesforce account id; you can optionally specify a comma-delimited list of fields to return.
     */
    FETCH_ACCOUNT_BY_ID_WITH_QUERY: "SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY",
    /**
     * Deprecated: fetches sobjects from `/sobjects` based on caller-set 'if-modified-since' (returns objects modified after a date, or 304 status if none) or 'if-unmodified-since' (returns objects if unmodified since a date, or 412 status if modified) http headers.
     */
    FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS: "SALESFORCE_FETCH_MODIFIED_OR_UNMODIFIED_SOBJECTS",
    /**
     * Retrieves a specific account by id from salesforce, returning all available fields.
     */
    GET_ACCOUNT: "SALESFORCE_GET_ACCOUNT",
    /**
     * Retrieves a specific campaign by id from salesforce, returning all available fields.
     */
    GET_CAMPAIGN: "SALESFORCE_GET_CAMPAIGN",
    /**
     * Retrieves a specific contact by id from salesforce, returning all available fields.
     */
    GET_CONTACT: "SALESFORCE_GET_CONTACT",
    /**
     * Gets detailed metadata for a specific dashboard including its components, layout, and filters.
     */
    GET_DASHBOARD: "SALESFORCE_GET_DASHBOARD",
    /**
     * Retrieves a specific lead by id from salesforce, returning all available fields.
     */
    GET_LEAD: "SALESFORCE_GET_LEAD",
    /**
     * Retrieves a specific note by id from salesforce, returning all available fields.
     */
    GET_NOTE: "SALESFORCE_GET_NOTE",
    /**
     * Deprecated: retrieves a salesforce note object by its id, optionally specifying which fields to return; the note id must exist.
     */
    GET_NOTE_BY_ID_WITH_FIELDS: "SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS",
    /**
     * Retrieves a specific opportunity by id from salesforce, returning all available fields.
     */
    GET_OPPORTUNITY: "SALESFORCE_GET_OPPORTUNITY",
    /**
     * Gets detailed metadata for a specific report including its structure, columns, filters, and groupings.
     */
    GET_REPORT: "SALESFORCE_GET_REPORT",
    /**
     * Gets the results of a report instance created by running a report. check status to see if report has completed.
     */
    GET_REPORT_INSTANCE: "SALESFORCE_GET_REPORT_INSTANCE",
    /**
     * Retrieves information about the current user or a specific user in salesforce.
     */
    GET_USER_INFO: "SALESFORCE_GET_USER_INFO",
    /**
     * Lists accounts from salesforce using soql query, allowing flexible filtering, sorting, and field selection.
     */
    LIST_ACCOUNTS: "SALESFORCE_LIST_ACCOUNTS",
    /**
     * Lists campaigns from salesforce using soql query, allowing flexible filtering, sorting, and field selection.
     */
    LIST_CAMPAIGNS: "SALESFORCE_LIST_CAMPAIGNS",
    /**
     * Lists contacts from salesforce using soql query, allowing flexible filtering, sorting, and field selection.
     */
    LIST_CONTACTS: "SALESFORCE_LIST_CONTACTS",
    /**
     * Lists all dashboards available in salesforce with basic metadata including name, id, and urls.
     */
    LIST_DASHBOARDS: "SALESFORCE_LIST_DASHBOARDS",
    /**
     * Lists available email templates in salesforce with filtering and search capabilities.
     */
    LIST_EMAIL_TEMPLATES: "SALESFORCE_LIST_EMAIL_TEMPLATES",
    /**
     * Lists leads from salesforce using soql query, allowing flexible filtering, sorting, and field selection.
     */
    LIST_LEADS: "SALESFORCE_LIST_LEADS",
    /**
     * Lists notes from salesforce using soql query, allowing flexible filtering, sorting, and field selection.
     */
    LIST_NOTES: "SALESFORCE_LIST_NOTES",
    /**
     * Lists opportunities from salesforce using soql query, allowing flexible filtering, sorting, and field selection.
     */
    LIST_OPPORTUNITIES: "SALESFORCE_LIST_OPPORTUNITIES",
    /**
     * Lists all reports available in salesforce with basic metadata including name, id, and urls.
     */
    LIST_REPORTS: "SALESFORCE_LIST_REPORTS",
    /**
     * Logs a completed phone call as a task in salesforce with call-specific details like duration, type, and disposition.
     */
    LOG_CALL: "SALESFORCE_LOG_CALL",
    /**
     * Creates an emailmessage record to log email activity in salesforce, associating it with related records.
     */
    LOG_EMAIL_ACTIVITY: "SALESFORCE_LOG_EMAIL_ACTIVITY",
    /**
     * Transfers ownership of multiple records to a new owner in a single operation using salesforce's composite api for better performance.
     */
    MASS_TRANSFER_OWNERSHIP: "SALESFORCE_MASS_TRANSFER_OWNERSHIP",
    /**
     * Deprecated: finds salesforce contact records by name using a case-insensitive search.
     */
    QUERY_CONTACTS_BY_NAME: "SALESFORCE_QUERY_CONTACTS_BY_NAME",
    /**
     * Deprecated: executes a salesforce report synchronously by its `id` and `reporttype`, optionally with dynamic ad-hoc adjustments like filters or groupings, and returns its data without modifying the saved report.
     */
    QUERY_REPORT: "SALESFORCE_QUERY_REPORT",
    /**
     * Deprecated: deletes an existing salesforce account using its unique id, returning an empty response on success (http 204).
     */
    REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER: "SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER",
    /**
     * Deprecated: permanently deletes a specific contact from salesforce using its unique id, which must correspond to an existing record.
     */
    REMOVE_A_SPECIFIC_CONTACT_BY_ID: "SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID",
    /**
     * Deprecated: permanently deletes a specific campaign sobject in salesforce using its unique id.
     */
    REMOVE_CAMPAIGN_OBJECT_BY_ID: "SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID",
    /**
     * Removes a lead or contact from a campaign by deleting the campaignmember record. provide either the member id (lead/contact id) or the specific campaign member id.
     */
    REMOVE_FROM_CAMPAIGN: "SALESFORCE_REMOVE_FROM_CAMPAIGN",
    /**
     * Deprecated: permanently deletes an existing salesforce note object identified by its unique id.
     */
    REMOVE_NOTE_OBJECT_BY_ID: "SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID",
    /**
     * Deprecated: permanently deletes an existing salesforce opportunity by its id; if the opportunity does not exist, a 'not found' (404) error occurs.
     */
    REMOVE_OPPORTUNITY_BY_ID: "SALESFORCE_REMOVE_OPPORTUNITY_BY_ID",
    /**
     * Deprecated: retrieves comprehensive metadata for the salesforce account sobject, detailing its properties, recent records, and related resource urls.
     */
    RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES: "SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES",
    /**
     * Deprecated: retrieves comprehensive information and metadata for the salesforce campaign sobject, provided it is enabled and accessible in the organization, and features robust error handling.
     */
    RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING: "SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING",
    /**
     * Deprecated: retrieves comprehensive metadata (e.g., fields, data types, picklist values) for the salesforce contact sobject; this action does not retrieve individual contact records.
     */
    RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES: "SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES",
    /**
     * Deprecated: retrieves details for a salesforce lead by its id; the specified lead id must exist in salesforce.
     */
    RETRIEVE_LEAD_BY_ID: "SALESFORCE_RETRIEVE_LEAD_BY_ID",
    /**
     * Deprecated: retrieves lead sobject data from salesforce, such as recently viewed leads or general lead object information.
     */
    RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES: "SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES",
    /**
     * Deprecated: retrieves comprehensive metadata for the salesforce 'note' sobject, if it is enabled and accessible, to understand its structure and capabilities.
     */
    RETRIEVE_NOTE_OBJECT_INFORMATION: "SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION",
    /**
     * Deprecated: retrieves all available opportunity records, representing potential revenue-generating deals, from salesforce.
     */
    RETRIEVE_OPPORTUNITIES_DATA: "SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA",
    /**
     * Deprecated: retrieves a salesforce opportunity by its id; the opportunity id must exist.
     */
    RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS: "SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS",
    /**
     * Deprecated: retrieves details for a specific salesforce campaign object by its id, optionally limiting to specified fields; the campaign object must exist.
     */
    RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS: "SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS",
    /**
     * Deprecated: retrieves a salesforce contact by its unique id; the id must correspond to an existing contact record in salesforce.
     */
    RETRIEVE_SPECIFIC_CONTACT_BY_ID: "SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID",
    /**
     * Runs a report and returns the results. creates a report instance that can be checked for completion.
     */
    RUN_REPORT: "SALESFORCE_RUN_REPORT",
    /**
     * Executes a soql query against salesforce data. returns records matching the query with pagination support.
     */
    RUN_SOQL_QUERY: "SALESFORCE_RUN_SOQL_QUERY",
    /**
     * Search for salesforce accounts using multiple criteria like name, industry, type, location, or contact information.
     */
    SEARCH_ACCOUNTS: "SALESFORCE_SEARCH_ACCOUNTS",
    /**
     * Search for salesforce campaigns using multiple criteria like name, type, status, date range, or active status.
     */
    SEARCH_CAMPAIGNS: "SALESFORCE_SEARCH_CAMPAIGNS",
    /**
     * Search for salesforce contacts using multiple criteria like name, email, phone, account, or title.
     */
    SEARCH_CONTACTS: "SALESFORCE_SEARCH_CONTACTS",
    /**
     * Search for salesforce leads using multiple criteria like name, email, phone, company, title, status, or lead source.
     */
    SEARCH_LEADS: "SALESFORCE_SEARCH_LEADS",
    /**
     * Search for salesforce notes using multiple criteria like title, body content, parent record, owner, or creation date.
     */
    SEARCH_NOTES: "SALESFORCE_SEARCH_NOTES",
    /**
     * Search for salesforce opportunities using multiple criteria like name, account, stage, amount, close date, or status.
     */
    SEARCH_OPPORTUNITIES: "SALESFORCE_SEARCH_OPPORTUNITIES",
    /**
     * Search for salesforce tasks using multiple criteria like subject, status, priority, assigned user, related records, or dates.
     */
    SEARCH_TASKS: "SALESFORCE_SEARCH_TASKS",
    /**
     * Sends an email through salesforce with options for recipients, attachments, and activity logging.
     */
    SEND_EMAIL: "SALESFORCE_SEND_EMAIL",
    /**
     * Sends an email using a predefined salesforce email template with merge field support.
     */
    SEND_EMAIL_FROM_TEMPLATE: "SALESFORCE_SEND_EMAIL_FROM_TEMPLATE",
    /**
     * Sends bulk emails to multiple recipients, either using a template or custom content. processes in batches for better performance.
     */
    SEND_MASS_EMAIL: "SALESFORCE_SEND_MASS_EMAIL",
    /**
     * Updates an existing account in salesforce with the specified changes. only provided fields will be updated.
     */
    UPDATE_ACCOUNT: "SALESFORCE_UPDATE_ACCOUNT",
    /**
     * Deprecated: updates specified fields of an existing salesforce account object identified by its unique id; field names are case-sensitive and read-only fields are ignored.
     */
    UPDATE_ACCOUNT_OBJECT_BY_ID: "SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID",
    /**
     * Updates an existing campaign in salesforce with the specified changes. only provided fields will be updated.
     */
    UPDATE_CAMPAIGN: "SALESFORCE_UPDATE_CAMPAIGN",
    /**
     * Deprecated: updates specific fields of an existing campaign in salesforce, identified by its unique `id`, which must already exist.
     */
    UPDATE_CAMPAIGN_BY_ID_WITH_JSON: "SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON",
    /**
     * Updates an existing contact in salesforce with the specified changes. only provided fields will be updated.
     */
    UPDATE_CONTACT: "SALESFORCE_UPDATE_CONTACT",
    /**
     * Deprecated: updates specified fields of an existing salesforce contact by its id; at least one field must be provided for modification.
     */
    UPDATE_CONTACT_BY_ID: "SALESFORCE_UPDATE_CONTACT_BY_ID",
    /**
     * Updates an existing lead in salesforce with the specified changes. only provided fields will be updated.
     */
    UPDATE_LEAD: "SALESFORCE_UPDATE_LEAD",
    /**
     * Deprecated: updates specified fields of an existing lead in salesforce via its unique id (path parameter), returning http 204 on success or error details on failure; request body must contain at least one field to update.
     */
    UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD: "SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD",
    /**
     * Updates an existing note in salesforce with the specified changes. only provided fields will be updated.
     */
    UPDATE_NOTE: "SALESFORCE_UPDATE_NOTE",
    /**
     * Updates an existing opportunity in salesforce with the specified changes. only provided fields will be updated.
     */
    UPDATE_OPPORTUNITY: "SALESFORCE_UPDATE_OPPORTUNITY",
    /**
     * Deprecated: updates specified fields of an existing salesforce opportunity by its id; the opportunity must exist, and some fields (like name, stagename, closedate) may have specific salesforce validation rules if being modified, while read-only fields update indirectly based on other changes.
     */
    UPDATE_OPPORTUNITY_BY_ID: "SALESFORCE_UPDATE_OPPORTUNITY_BY_ID",
    /**
     * Deprecated: use `update specific note by id` instead. updates specified fields of an existing salesforce note sobject identified by its id; the note must already exist.
     */
    UPDATE_SPECIFIC_NOTE_BY_ID: "SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID",
    /**
     * Updates an existing task in salesforce with new information. only provided fields will be updated.
     */
    UPDATE_TASK: "SALESFORCE_UPDATE_TASK",
  },
  triggerTypes: {
    /**
     * Triggers when a new Contact is Created in Salesforce.
     */
    NEW_CONTACT_TRIGGER: "SALESFORCE_NEW_CONTACT_TRIGGER",
    /**
     * Triggers when a new Lead is created in Salesforce.
     */
    NEW_LEAD_TRIGGER: "SALESFORCE_NEW_LEAD_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "SALESFORCE".
 */
export type SALESFORCE_TRIGGER_PAYLOADS = {
  NEW_CONTACT_TRIGGER: SALESFORCE_NEW_CONTACT_TRIGGER_PAYLOAD
  NEW_LEAD_TRIGGER: SALESFORCE_NEW_LEAD_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "SALESFORCE".
 */
export type SALESFORCE_TRIGGER_EVENTS = {
  NEW_CONTACT_TRIGGER: TriggerEvent<SALESFORCE_NEW_CONTACT_TRIGGER_PAYLOAD>
  NEW_LEAD_TRIGGER: TriggerEvent<SALESFORCE_NEW_LEAD_TRIGGER_PAYLOAD>
}
