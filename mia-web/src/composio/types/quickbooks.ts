// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_ACCOUNT tool input.
 */
type QUICKBOOKS_CREATE_ACCOUNT_INPUT = {
  /**
   * Account Number
   * @description User-defined account number to help the user in identifying the account within the chart-of-accounts and in deciding what should be posted to the account. must not contain colon (:). For France locales:
   * @default null
   */
  account_number: string | null;
  /**
   * BankAccSubType
   * @description Sub-type of the account. Must use exact enum values (no spaces/slashes). Examples: 'AdvertisingPromotional' (NOT 'Advertising/Promotional'), 'Checking', 'Inventory', 'OtherCurrentAssets', 'Vehicles', 'RetainedEarnings', 'Insurance', 'InterestEarned'. See QuickBooks API docs for complete list.
   * @default null
   * @enum {string|null}
   */
  account_sub_type: "CashOnHand" | "Checking" | "MoneyMarket" | "RentsHeldInTrust" | "Savings" | "TrustAccounts" | null;
  /**
   * AccountType
   * @description Type of the account to be created
   * @default null
   * @enum {string|null}
   */
  account_type: "Bank" | "Other Current Asset" | "Fixed Asset" | "Other Asset" | "Accounts Receivable" | "Equity" | "Expense" | "Other Expense" | "Cost of Goods Sold" | "Accounts Payable" | "Credit Card" | "Long Term Liability" | "Other Current Liability" | "Income" | "Other Income" | null;
  /**
   * Name
   * @description User recognizable name for the Account. Account.Name attribute must not contain double quotes (") or colon (:).
   */
  name?: string;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_ACCOUNT tool output.
 */
type QUICKBOOKS_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data of the created account
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_CUSTOMER tool input.
 */
type QUICKBOOKS_CREATE_CUSTOMER_INPUT = {
  /**
   * Display Name
   * @description The name as displayed. Must be unique across all Customer, Vendor, and Employee objects. Cannot be removed with sparse update. If not supplied, the system generates DisplayName by concatenating customer name components supplied in the request from the following list: Title, GivenName, MiddleName, FamilyName, and Suffix.
   * @default null
   */
  display_name: string | null;
  /**
   * Family Name
   * @description Family name or the last name of the person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  family_name: string | null;
  /**
   * Given Name
   * @description Given name or first name of a person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  given_name: string | null;
  /**
   * Middle Name
   * @description Middle name of the person. The person can have zero or more middle names. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  middle_name: string | null;
  /**
   * Suffix
   * @description Suffix of the name. For example, Jr. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  suffix: string | null;
  /**
   * Title
   * @description Title of the person (max 16 characters - keep it short like 'Mr.', 'Dr.', 'CEO'). This tag supports i18n, all locales. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, Suffix, or FullyQualifiedName attributes are required during create.
   * @default null
   */
  title: string | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_CUSTOMER tool output.
 */
type QUICKBOOKS_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data of the created customer
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_EMPLOYEE tool input.
 */
type QUICKBOOKS_CREATE_EMPLOYEE_INPUT = {
  /**
   * Family Name
   * @description Family name or the last name of the person. At least one of `given_name` or `family_name` attributes is required.
   * @default null
   */
  family_name: string | null;
  /**
   * Given Name
   * @description Given name or Family name of a person. At least one of `given_name` or `family_name` attributes is required.
   * @default null
   */
  given_name: string | null;
  /**
   * EmployeeAddress
   * @description Represents the physical street address for this employee. If QuickBooks Payroll is enabled for the company, the following PhysicalAddress fields are required: City, CountrySubDivisionCode, PostalCode.
   * @default null
   */
  primary_addr: {
      /**
       * City
       * @description City name.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country name. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country.
       * @default null
       */
      country: string | null;
      /**
       * Country Sub Division Code
       * @description Region within a country. For example, state name for USA, province name for Canada.
       * @default null
       */
      country_sub_division_code: string | null;
      /**
       * Lat
       * @description Latitude coordinate of Geocode (Geospacial Entity Object Code). INVALID is returned for invalid addresses.
       * @default null
       */
      lat: string | null;
      /**
       * Line1
       * @description First line of the address.
       * @default null
       */
      line1: string | null;
      /**
       * Line2
       * @description Second line of the address.
       * @default null
       */
      line2: string | null;
      /**
       * Line3
       * @description Third line of the address.
       * @default null
       */
      line3: string | null;
      /**
       * Line4
       * @description Fourth line of the address.
       * @default null
       */
      line4: string | null;
      /**
       * Line5
       * @description Fifth line of the address.
       * @default null
       */
      line5: string | null;
      /**
       * Long
       * @description Longitude coordinate of Geocode (Geospacial Entity Object Code). INVALID is returned for invalid addresses.
       * @default null
       */
      long: string | null;
      /**
       * Postal Code
       * @description Postal code. For example, zip code for USA and Canada.
       * @default null
       */
      postal_code: string | null;
  } | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_EMPLOYEE tool output.
 */
type QUICKBOOKS_CREATE_EMPLOYEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Employee
       * @description Created employee data
       */
      employee: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_VENDOR tool input.
 */
type QUICKBOOKS_CREATE_VENDOR_INPUT = {
  /**
   * Display Name
   * @description The name as displayed. Must be unique across all Customer, Vendor, and Employee objects. Cannot be removed with sparse update. If not supplied, the system generates DisplayName by concatenating customer name components supplied in the request from the following list: Title, GivenName, MiddleName, FamilyName, and Suffix.
   * @default null
   */
  display_name: string | null;
  /**
   * Family Name
   * @description Family name or the last name of the person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  family_name: string | null;
  /**
   * Given Name
   * @description Given name or first name of a person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  given_name: string | null;
  /**
   * Middle Name
   * @description Middle name of the person. The person can have zero or more middle names. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  middle_name: string | null;
  /**
   * Suffix
   * @description Suffix of the name. For example, Jr. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create.
   * @default null
   */
  suffix: string | null;
  /**
   * Title
   * @description Title of the person (max 16 characters - keep it short like 'Mr.', 'Dr.', 'CEO'). This tag supports i18n, all locales. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, Suffix, or FullyQualifiedName attributes are required during create.
   * @default null
   */
  title: string | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_CREATE_VENDOR tool output.
 */
type QUICKBOOKS_CREATE_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Data of the created customer
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_CUSTOMER_BALANCE_DETAIL tool input.
 */
type QUICKBOOKS_CUSTOMER_BALANCE_DETAIL_INPUT = {
  /**
   * AgingMethod
   * @description The date upon which aging is determined.
   * @default null
   * @enum {string|null}
   */
  aging_method: "Report_Date" | "Current" | null;
  /**
   * Arpaid
   * @description Status of the balance.
   * @default null
   * @enum {string|null}
   */
  arpaid: "All" | "Paid" | "Unpaid" | null;
  /**
   * Columns
   * @description Column types to be shown in the report. Supported Values: bill_addr, create_by, create_date, cust_bill_email, cust_comp_name, cust_msg, cust_phone_other, cust_tel, cust_name, deliv_addr, doc_num*, due_date*, last_mod_by, last_mod_date, memo*, sale_sent_state, ship_addr, ship_date, ship_via, term_name, tracking_num, tx_date*, txn_type*. Additional columns with custom fields enabled: sales_cust1, sales_cust2, sales_cust3. Additional columns with location tracking enabled: dept_name*
   * @default null
   */
  columns: string | null;
  /**
   * Custom1
   * @description Filter by the specified custom field as defined by the CustomField attribute in transaction entities where supported. Supported Values: Name of custom field.
   * @default null
   */
  custom1: string | null;
  /**
   * Customer Ids
   * @description One or more comma separated customer IDs. Filters report contents to include information for specified customers.
   * @default null
   */
  customer_ids: string[] | null;
  /**
   * Department Ids
   * @description One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.
   * @default null
   */
  department_ids: string[] | null;
  /**
   * End Duedate
   * @description The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned.
   * @default null
   */
  end_duedate: string | null;
  /**
   * Report Date
   * @description Start date to use for the report, in the format YYYY-MM-DD.
   * @default null
   */
  report_date: string | null;
  /**
   * Shipvia
   * @description Filter by the shipping method as stored in Invoice.ShipMethodRef.Name.
   * @default null
   */
  shipvia: string | null;
  /**
   * Sort By
   * @description The column type used in sorting report rows. Specify a column type as defined with the columns query parameter.
   * @default null
   */
  sort_by: string | null;
  /**
   * SortOrder
   * @description The sort order.
   * @default null
   * @enum {string|null}
   */
  sort_order: "ascend" | "descend" | null;
  /**
   * Start Duedate
   * @description The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned.
   * @default null
   */
  start_duedate: string | null;
  /**
   * Term Ids
   * @description One or more comma separated term IDs. Filters report contents based on term or terms supplied.
   * @default null
   */
  term_ids: string[] | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_CUSTOMER_BALANCE_DETAIL tool output.
 */
type QUICKBOOKS_CUSTOMER_BALANCE_DETAIL_OUTPUT = {
  /**
   * Data
   * @description Balance detail data of the customer
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_CUSTOMER_BALANCE_REPORT tool input.
 */
type QUICKBOOKS_CUSTOMER_BALANCE_REPORT_INPUT = {
  /**
   * AccountingMethod
   * @description The accounting method used in the report.
   * @default null
   * @enum {string|null}
   */
  accounting_method: "Cash" | "Accrual" | null;
  /**
   * Arpaid
   * @description Supported Values: All, Paid, Unpaid
   * @default null
   * @enum {string|null}
   */
  arpaid: "All" | "Paid" | "Unpaid" | null;
  /**
   * Customer Ids
   * @description Filters report contents to include information for specified customers. Supported Values: One or more comma separated customer IDs as returned in the attribute, Customer.Id, of the Customer object response code.
   * @default null
   */
  customer_ids: string[] | null;
  /**
   * DateMacro
   * @description Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range.
   * @default null
   * @enum {string|null}
   */
  date_macro: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year" | null;
  /**
   * Department Ids
   * @description One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.
   * @default null
   */
  department_ids: string[] | null;
  /**
   * Report Date
   * @description Start date to use for the report, in the format YYYY-MM-DD.
   * @default null
   */
  report_date: string | null;
  /**
   * SortOrder
   * @description The sort order.
   * @default null
   * @enum {string|null}
   */
  sort_order: "ascend" | "descend" | null;
  /**
   * SummarizeColumnBy
   * @description The criteria by which to group the report results.
   * @default null
   * @enum {string|null}
   */
  summarize_column_by: "Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices" | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_CUSTOMER_BALANCE_REPORT tool output.
 */
type QUICKBOOKS_CUSTOMER_BALANCE_REPORT_OUTPUT = {
  /**
   * Data
   * @description Balance report data of the customer
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_QUERY_ACCOUNT tool input.
 */
type QUICKBOOKS_QUERY_ACCOUNT_INPUT = {
  /**
   * Query
   * @description Query to be executed
   */
  query?: string;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_QUERY_ACCOUNT tool output.
 */
type QUICKBOOKS_QUERY_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response from the query
       * @default {}
       */
      response: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_READ_ACCOUNT tool input.
 */
type QUICKBOOKS_READ_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description ID of the account to be read
   */
  account_id?: string;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_READ_ACCOUNT tool output.
 */
type QUICKBOOKS_READ_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data of the read account
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_READ_CUSTOMER tool input.
 */
type QUICKBOOKS_READ_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description ID of the customer to be read
   */
  customer_id?: string;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_READ_CUSTOMER tool output.
 */
type QUICKBOOKS_READ_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data of the read customer
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_READ_EMPLOYEE tool input.
 */
type QUICKBOOKS_READ_EMPLOYEE_INPUT = {
  /**
   * Employee Id
   * @description The ID of the employee to be read.
   */
  employee_id?: string;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_READ_EMPLOYEE tool output.
 */
type QUICKBOOKS_READ_EMPLOYEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Employee
       * @description Employee data
       */
      employee: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_READ_VENDOR tool input.
 */
type QUICKBOOKS_READ_VENDOR_INPUT = {
  /**
   * Vendor Id
   * @description ID of the vendor to be read
   */
  vendor_id?: string;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_READ_VENDOR tool output.
 */
type QUICKBOOKS_READ_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Data of the read vendor
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_VENDOR_BALANCE_DETAIL tool input.
 */
type QUICKBOOKS_VENDOR_BALANCE_DETAIL_INPUT = {
  /**
   * AccountingMethod
   * @description The accounting method used in the report.
   * @default null
   * @enum {string|null}
   */
  accounting_method: "Cash" | "Accrual" | null;
  /**
   * Arpaid
   * @description Status of the balance.
   * @default null
   * @enum {string|null}
   */
  appaid: "All" | "Paid" | "Unpaid" | null;
  /**
   * DateMacro
   * @description Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range.
   * @default null
   * @enum {string|null}
   */
  date_macro: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year" | null;
  /**
   * Department Ids
   * @description One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.
   * @default null
   */
  department_ids: string[] | null;
  /**
   * DateMacro
   * @description Predefined date range of due dates for balances to include in the report; otherwise, use the start_duedate and end_duedate to cover an explicit report date range.
   * @default null
   * @enum {string|null}
   */
  duedate_macro: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year" | null;
  /**
   * End Duedate
   * @description The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned.
   * @default null
   */
  end_duedate: string | null;
  /**
   * Report Date
   * @description Start date to use for the report, in the format YYYY-MM-DD.
   * @default null
   */
  report_date: string | null;
  /**
   * Sort By
   * @description The column type used in sorting report rows. Specify a column type as defined with the columns query parameter.
   * @default null
   */
  sort_by: string | null;
  /**
   * SortOrder
   * @description The sort order.
   * @default null
   * @enum {string|null}
   */
  sort_order: "ascend" | "descend" | null;
  /**
   * Start Duedate
   * @description The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned.
   * @default null
   */
  start_duedate: string | null;
  /**
   * Term Ids
   * @description One or more comma separated term IDs. Filters report contents based on term or terms supplied.
   * @default null
   */
  term_ids: string[] | null;
  /**
   * Vendor Ids
   * @description One or more comma separated vendor IDs. Filters report contents to include information for specified vendors.
   * @default null
   */
  vendor_ids: string[] | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_VENDOR_BALANCE_DETAIL tool output.
 */
type QUICKBOOKS_VENDOR_BALANCE_DETAIL_OUTPUT = {
  /**
   * Data
   * @description Balance detail data of the vendor
   * @default {}
   */
  data: {
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
 * Type of QUICKBOOKS's QUICKBOOKS_VENDOR_BALANCE_REPORT tool input.
 */
type QUICKBOOKS_VENDOR_BALANCE_REPORT_INPUT = {
  /**
   * AccountingMethod
   * @description The accounting method used in the report.
   * @default null
   * @enum {string|null}
   */
  accounting_method: "Cash" | "Accrual" | null;
  /**
   * Arpaid
   * @description Status of the balance.
   * @default null
   * @enum {string|null}
   */
  appaid: "All" | "Paid" | "Unpaid" | null;
  /**
   * DateMacro
   * @description Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range.
   * @default null
   * @enum {string|null}
   */
  date_macro: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year" | null;
  /**
   * Department Ids
   * @description One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.
   * @default null
   */
  department_ids: string[] | null;
  /**
   * Qzurl
   * @description Specifies whether Quick Zoom URL information should be generated for rows in the report.
   * @default null
   */
  qzurl: string | null;
  /**
   * Report Date
   * @description Start date to use for the report, in the format YYYY-MM-DD.
   * @default null
   */
  report_date: string | null;
  /**
   * SortOrder
   * @description The sort order.
   * @default null
   * @enum {string|null}
   */
  sort_order: "ascend" | "descend" | null;
  /**
   * SummarizeColumnBy
   * @description The criteria by which to group the report results.
   * @default null
   * @enum {string|null}
   */
  summarize_column_by: "Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices" | null;
  /**
   * Vendor Ids
   * @description Filters report contents to include information for specified vendors. Supported Values: One or more comma separated vendor IDs as returned in the attribute, Vendor.Id, of the Vendor object response code.
   * @default null
   */
  vendor_ids: string[] | null;
};

/**
 * Type of QUICKBOOKS's QUICKBOOKS_VENDOR_BALANCE_REPORT tool output.
 */
type QUICKBOOKS_VENDOR_BALANCE_REPORT_OUTPUT = {
  /**
   * Data
   * @description Balance report data of the vendor
   * @default {}
   */
  data: {
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
 * Type map of all available tool input types for toolkit "QUICKBOOKS".
 */
export type QUICKBOOKS_TOOL_INPUTS = {
  CREATE_ACCOUNT: QUICKBOOKS_CREATE_ACCOUNT_INPUT
  CREATE_CUSTOMER: QUICKBOOKS_CREATE_CUSTOMER_INPUT
  CREATE_EMPLOYEE: QUICKBOOKS_CREATE_EMPLOYEE_INPUT
  CREATE_VENDOR: QUICKBOOKS_CREATE_VENDOR_INPUT
  CUSTOMER_BALANCE_DETAIL: QUICKBOOKS_CUSTOMER_BALANCE_DETAIL_INPUT
  CUSTOMER_BALANCE_REPORT: QUICKBOOKS_CUSTOMER_BALANCE_REPORT_INPUT
  QUERY_ACCOUNT: QUICKBOOKS_QUERY_ACCOUNT_INPUT
  READ_ACCOUNT: QUICKBOOKS_READ_ACCOUNT_INPUT
  READ_CUSTOMER: QUICKBOOKS_READ_CUSTOMER_INPUT
  READ_EMPLOYEE: QUICKBOOKS_READ_EMPLOYEE_INPUT
  READ_VENDOR: QUICKBOOKS_READ_VENDOR_INPUT
  VENDOR_BALANCE_DETAIL: QUICKBOOKS_VENDOR_BALANCE_DETAIL_INPUT
  VENDOR_BALANCE_REPORT: QUICKBOOKS_VENDOR_BALANCE_REPORT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "QUICKBOOKS".
 */
export type QUICKBOOKS_TOOL_OUTPUTS = {
  CREATE_ACCOUNT: QUICKBOOKS_CREATE_ACCOUNT_OUTPUT
  CREATE_CUSTOMER: QUICKBOOKS_CREATE_CUSTOMER_OUTPUT
  CREATE_EMPLOYEE: QUICKBOOKS_CREATE_EMPLOYEE_OUTPUT
  CREATE_VENDOR: QUICKBOOKS_CREATE_VENDOR_OUTPUT
  CUSTOMER_BALANCE_DETAIL: QUICKBOOKS_CUSTOMER_BALANCE_DETAIL_OUTPUT
  CUSTOMER_BALANCE_REPORT: QUICKBOOKS_CUSTOMER_BALANCE_REPORT_OUTPUT
  QUERY_ACCOUNT: QUICKBOOKS_QUERY_ACCOUNT_OUTPUT
  READ_ACCOUNT: QUICKBOOKS_READ_ACCOUNT_OUTPUT
  READ_CUSTOMER: QUICKBOOKS_READ_CUSTOMER_OUTPUT
  READ_EMPLOYEE: QUICKBOOKS_READ_EMPLOYEE_OUTPUT
  READ_VENDOR: QUICKBOOKS_READ_VENDOR_OUTPUT
  VENDOR_BALANCE_DETAIL: QUICKBOOKS_VENDOR_BALANCE_DETAIL_OUTPUT
  VENDOR_BALANCE_REPORT: QUICKBOOKS_VENDOR_BALANCE_REPORT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's QUICKBOOKS toolkit.
 */
export const QUICKBOOKS = {
  slug: "quickbooks",
  tools: {
    /**
     * Create a new account in quickbooks with the given parameters.
     */
    CREATE_ACCOUNT: "QUICKBOOKS_CREATE_ACCOUNT",
    /**
     * Create a new customer in quickbooks with the given parameters.
     */
    CREATE_CUSTOMER: "QUICKBOOKS_CREATE_CUSTOMER",
    /**
     * Create a new employee in quickbooks.
     */
    CREATE_EMPLOYEE: "QUICKBOOKS_CREATE_EMPLOYEE",
    /**
     * Create a new vendor in quickbooks with the given details.
     */
    CREATE_VENDOR: "QUICKBOOKS_CREATE_VENDOR",
    /**
     * Generate a balance detail report for a customer in quickbooks with the given customer id.
     */
    CUSTOMER_BALANCE_DETAIL: "QUICKBOOKS_CUSTOMER_BALANCE_DETAIL",
    /**
     * Generate a balance report for a customer in quickbooks with the given customer id.
     */
    CUSTOMER_BALANCE_REPORT: "QUICKBOOKS_CUSTOMER_BALANCE_REPORT",
    /**
     * Query an account in quickbooks with the given parameters.
     */
    QUERY_ACCOUNT: "QUICKBOOKS_QUERY_ACCOUNT",
    /**
     * Read an account in quickbooks with the given account id.
     */
    READ_ACCOUNT: "QUICKBOOKS_READ_ACCOUNT",
    /**
     * Read a customer in quickbooks with the given customer id.
     */
    READ_CUSTOMER: "QUICKBOOKS_READ_CUSTOMER",
    /**
     * Read an employee's details in quickbooks with the given employee id.
     */
    READ_EMPLOYEE: "QUICKBOOKS_READ_EMPLOYEE",
    /**
     * Read a vendor in quickbooks with the given vendor id.
     */
    READ_VENDOR: "QUICKBOOKS_READ_VENDOR",
    /**
     * Generate a balance detail report for a vendor in quickbooks with the given vendor id.
     */
    VENDOR_BALANCE_DETAIL: "QUICKBOOKS_VENDOR_BALANCE_DETAIL",
    /**
     * Get the balance report of a vendor in quickbooks with the given vendor id.
     */
    VENDOR_BALANCE_REPORT: "QUICKBOOKS_VENDOR_BALANCE_REPORT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "QUICKBOOKS".
 */
export type QUICKBOOKS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "QUICKBOOKS".
 */
export type QUICKBOOKS_TRIGGER_EVENTS = {}
