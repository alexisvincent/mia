// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BAMBOOHR's BAMBOOHR_ADDS_A_TABLE_ROW tool input.
 */
type BAMBOOHR_ADDS_A_TABLE_ROW_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Date */
  date?: string;
  /** Department */
  department?: string;
  /** Division */
  division?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
  /** Job Title */
  jobTitle?: string;
  /** Location */
  location?: string;
  /** Reports To */
  reportsTo?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADDS_A_TABLE_ROW tool output.
 */
type BAMBOOHR_ADDS_A_TABLE_ROW_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT tool input.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT tool output.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT tool input.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT_INPUT = {
  /** Address Line1 */
  addressLine1?: string;
  /** Address Line2 */
  addressLine2?: string;
  /** City */
  city?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Country */
  country?: string;
  /** Date Of Birth */
  dateOfBirth?: string;
  /** Employee Id */
  employeeId?: string;
  /** First Name */
  firstName?: string;
  /** Gender */
  gender?: string;
  /** Home Phone */
  homePhone?: string;
  /** Is Student */
  isStudent?: string;
  /** Is Us Citizen */
  isUsCitizen?: string;
  /** Last Name */
  lastName?: string;
  /** Middle Name */
  middleName?: string;
  /** Relationship */
  relationship?: string;
  /** Ssn */
  ssn?: string;
  /** State */
  state?: string;
  /** Zip Code */
  zipCode?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT tool output.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS tool input.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_INPUT = {
  /** Additional Fed */
  additionalFed?: string;
  /** Additional Local */
  additionalLocal?: string;
  /** Additional State */
  additionalState?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Fed Withholding */
  fedWithholding?: string;
  /**
   * Id
   * @description {id} is the employee id.
   */
  id?: string;
  /** Local Withholding */
  localWithholding?: string;
  /** State Withholding */
  stateWithholding?: string;
  /** Tax Local */
  taxLocal?: string;
  /** Tax State */
  taxState?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS tool output.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION tool input.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_INPUT = {
  /** Accounts */
  accounts?: {
      /**
       * Account Type
       * @description Accounttype
       */
      accountType?: string;
      /**
       * Bank Name
       * @description Bankname
       */
      bankName?: string;
      /**
       * Deposit Order
       * @description Depositorder
       */
      depositOrder?: string;
      /**
       * Masked Account Number
       * @description Maskedaccountnumber
       */
      maskedAccountNumber?: string;
      /**
       * Rule Amount
       * @description Ruleamount
       */
      ruleAmount?: string;
      /**
       * Rule Type
       * @description Ruletype
       */
      ruleType?: string;
  }[];
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee id.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION tool output.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB tool input.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB_INPUT = {
  /** Additional Fed */
  additionalFed?: string;
  /** Additional Local */
  additionalLocal?: string;
  /** Additional State */
  additionalState?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Currency Code */
  currencyCode?: string;
  /** Deductions */
  deductions?: {
      /**
       * Deduction Amount
       * @description Deductionamount
       */
      deductionAmount?: string;
      /**
       * Deduction Description
       * @description Deductiondescription
       */
      deductionDescription?: string;
      /**
       * External Deduction Id
       * @description Externaldeductionid
       */
      externalDeductionId?: string;
      /**
       * Ytd Deduction Amount
       * @description Ytddeductionamount
       */
      ytdDeductionAmount?: string;
  }[];
  /**
   * Deductions Amount
   * @description float value
   */
  deductionsAmount?: string;
  /**
   * Dependents Amount
   * @description float value
   */
  dependentsAmount?: string;
  /** Deposits */
  deposits?: {
      /**
       * Account Type
       * @description Accounttype
       */
      accountType?: string;
      /**
       * Deposit Amount
       * @description Depositamount
       */
      depositAmount?: string;
      /**
       * Deposit Order
       * @description Depositorder
       */
      depositOrder?: string;
      /**
       * Masked Account Number
       * @description Maskedaccountnumber
       */
      maskedAccountNumber?: string;
  }[];
  /** Employee Id */
  employeeId?: string;
  /** External Record Id */
  externalRecordId?: string;
  /** Fed Witholding */
  fedWitholding?: string;
  /**
   * Federal Type
   * @description must be 2020_w4, pre_2020_w4, or null
   * @enum {string}
   */
  federalType?: "2020_w4" | "pre_2020_w4";
  /** Gross */
  gross?: string;
  /** Local Withholding */
  localWithholding?: string;
  /** Net */
  net?: string;
  /**
   * Other Income
   * @description float value
   */
  otherIncome?: string;
  /** Pay Date */
  payDate?: string;
  /** Pay Period From */
  payPeriodFrom?: string;
  /** Pay Period To */
  payPeriodTo?: string;
  /** Payee Name */
  payeeName?: string;
  /** Payor Add1 */
  payorAdd1?: string;
  /** Payor Add2 */
  payorAdd2?: string;
  /** Payor City */
  payorCity?: string;
  /** Payor Name */
  payorName?: string;
  /** Payor State */
  payorState?: string;
  /** Payor Zip */
  payorZip?: string;
  /** State Withholding */
  stateWithholding?: string;
  /** Tax Local */
  taxLocal?: string;
  /** Tax State */
  taxState?: string;
  /** Taxes */
  taxes?: {
      /**
       * External Tax Id
       * @description Externaltaxid
       */
      externalTaxId?: string;
      /**
       * Tax Amount
       * @description Taxamount
       */
      taxAmount?: string;
      /**
       * Tax Description
       * @description Taxdescription
       */
      taxDescription?: string;
      /**
       * Ytd Tax Amount
       * @description Ytdtaxamount
       */
      ytdTaxAmount?: string;
  }[];
  /** Total Deductions */
  totalDeductions?: string;
  /** Total Taxes */
  totalTaxes?: string;
  /**
   * Two Jobs
   * @description boolean value
   */
  twoJobs?: string;
  /** Wages */
  wages?: {
      /**
       * External Wage Id
       * @description Externalwageid
       */
      externalWageId?: string;
      /**
       * Hours
       * @description Hours
       */
      hours?: string;
      /**
       * Wage Amount
       * @description Wageamount
       */
      wageAmount?: string;
      /**
       * Wage Description
       * @description Wagedescription
       */
      wageDescription?: string;
      /**
       * Wage Rate
       * @description Wagerate
       */
      wageRate?: string;
      /**
       * Ytd Wage Amount
       * @description Ytdwageamount
       */
      ytdWageAmount?: string;
  }[];
  /** Ytd Deductions */
  ytdDeductions?: string;
  /** Ytd Gross */
  ytdGross?: string;
  /** Ytd Net */
  ytdNet?: string;
  /** Ytd Taxes */
  ytdTaxes?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB tool output.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS tool input.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Employee Id */
  employeeId?: string;
  /** Unpaid Periods */
  unpaidPeriods?: {
      /**
       * Pay Date
       * @description Paydate
       */
      payDate?: string;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS tool output.
 */
type BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_HOUR_RECORD tool input.
 */
type BAMBOOHR_ADD_AN_HOUR_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Date Hours Worked
   * @description The date the hours were worked. Please use the ISO-8601 date format YYYY-MM-DD.
   */
  dateHoursWorked?: string;
  /**
   * Department Id
   * @description [Optional] The ID of the department for the employee.
   */
  departmentId?: number;
  /**
   * Division Id
   * @description [Optional] The ID of the division for the employee.
   */
  divisionId?: number;
  /**
   * Employee Id
   * @description The ID of the employee.
   */
  employeeId?: number;
  /**
   * Hours Worked
   * @description The number of hours worked.
   */
  hoursWorked?: number;
  /**
   * Job Code
   * @description [Optional] A job code.
   */
  jobCode?: number;
  /**
   * Job Data
   * @description [Optional] A list of up to four 20 characters max job numbers in comma delimited format with no spaces.
   */
  jobData?: string;
  /**
   * Job Title Id
   * @description [Optional] The ID of the job title for the employee.
   */
  jobTitleId?: number;
  /**
   * Pay Code
   * @description [Optional] Only necessary if the payroll provider requires a pay code
   */
  payCode?: string;
  /**
   * Pay Rate
   * @description [Optional] The rate of pay. e.g. $15.00/hour should use 15.00 here. Only necessary if the payroll provider requires a pay rate.
   */
  payRate?: number;
  /**
   * Rate Type
   * @description The type of hours - regular or overtime. Please use either "REG" or "OT" here.
   */
  rateType?: string;
  /**
   * Time Tracking Id
   * @description A unique identifier for the record. Use this ID to adjust or delete these hours. It can be any ID you use to track the record up to 36 characters in length. (i.e. UUID).
   */
  timeTrackingId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_AN_HOUR_RECORD tool output.
 */
type BAMBOOHR_ADD_AN_HOUR_RECORD_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_APPLICATION_COMMENT tool input.
 */
type BAMBOOHR_ADD_APPLICATION_COMMENT_INPUT = {
  /**
   * Application Id
   * @description The ID of the application to add a comment to.
   */
  applicationId?: number;
  /**
   * Comment
   * @description The comment being posted.
   */
  comment?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Type
   * @description Always the value "comment".
   * @default comment
   */
  type: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_APPLICATION_COMMENT tool output.
 */
type BAMBOOHR_ADD_APPLICATION_COMMENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE tool input.
 */
type BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE_INPUT = {
  /** Benefit Group Id */
  benefitGroupId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Employee Id */
  employeeId?: string;
  /** End Date */
  endDate?: string;
  /** Start Date */
  startDate?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE tool output.
 */
type BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT tool input.
 */
type BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT tool output.
 */
type BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * BenefitType
       * @description Benefit type
       * @default null
       * @enum {string|null}
       */
      benefitType: "health" | "dental" | "vision" | "retirement" | "hsa" | "flex" | "life" | "disability" | "reimbursement" | "supplemental" | "other" | null;
      /**
       * Benefit Vendor Id
       * @description Benefit vendor ID
       * @default null
       */
      benefitVendorId: string | null;
      /**
       * Deduction Type Id
       * @description Deduction type ID
       * @default null
       */
      deductionTypeId: number | null;
      /**
       * Description
       * @description Description
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * Format: date
       * @description Benefit end date
       * @default null
       */
      endDate: string | null;
      /**
       * MeetAcaMin
       * @description Meets ACA minimum requirements
       * @default null
       */
      meetAcaMin: (("yes" | "no") | null) | null;
      /**
       * MinEssentialCoverage
       * @description Provides minimum essential coverage
       * @default null
       */
      minEssentialCoverage: (("yes" | "no") | null) | null;
      /**
       * Name
       * @description Name
       * @default null
       */
      name: string | null;
      /**
       * Plan Url
       * @description Plan url
       * @default null
       */
      planUrl: string | null;
      /**
       * Reimbursement Amount
       * @description Reimbursement amount
       * @default null
       */
      reimbursementAmount: number | null;
      /**
       * ReimbursementFrequency
       * @description Reimbursement frequency
       * @default null
       */
      reimbursementFrequency: (("pay period" | "month" | "quarter" | "year" | "one time") | null) | null;
      /**
       * SafeHarbor
       * @description Is a safe harbor
       * @default null
       */
      safeHarbor: (("yes" | "no") | null) | null;
      /**
       * Sso Login Url
       * @description SSO login url
       * @default null
       */
      ssoLoginUrl: string | null;
      /**
       * Sso Login Url Link Text
       * @description SSO login link text
       * @default null
       */
      ssoLoginUrlLinkText: string | null;
      /**
       * Start Date
       * Format: date
       * @description Benefit start date
       * @default null
       */
      startDate: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST tool input.
 */
type BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Date
   * @description The date the request should be added in history. This will usually be the first date of the request. Should be in ISO8601 date format (YYYY-MM-DD).
   */
  date?: string;
  /**
   * Employee Id
   * @description The ID of the employee.
   */
  employeeId?: number;
  /**
   * Note
   * @description This is an optional note to show in history.
   */
  note?: string;
  /**
   * Time Off Request Id
   * @description The ID of the time off request.
   */
  timeOffRequestId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST tool output.
 */
type BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_TIME_OFF_REQUEST tool input.
 */
type BAMBOOHR_ADD_A_TIME_OFF_REQUEST_INPUT = {
  /** Amount */
  amount?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Dates */
  dates?: {
      /**
       * Amount
       * @description Amount
       */
      amount?: number;
      /**
       * Ymd
       * @description Ymd
       */
      ymd?: string;
  }[];
  /**
   * Employee Id
   * @description Employeeid
   */
  employeeId?: string;
  /** End */
  end?: string;
  /** Notes */
  notes?: {
      /**
       * From
       * @description From
       */
      from?: string;
      /**
       * Note
       * @description Note
       */
      note?: string;
  }[];
  /** Previous Request */
  previousRequest?: number;
  /** Start */
  start?: string;
  /** Status */
  status?: string;
  /** Time Off Type Id */
  timeOffTypeId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_A_TIME_OFF_REQUEST tool output.
 */
type BAMBOOHR_ADD_A_TIME_OFF_REQUEST_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES tool input.
 */
type BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Entries
   * @description Entries
   */
  entries?: {
      /**
       * Date
       * @description Date for the timesheet entry. Must be in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Employee Id
       * @description Unique identifier for the employee.
       */
      employeeId: number;
      /**
       * End
       * @description End time for the timesheet entry. Local time for the employee. Must be in hh:mm 24 hour format.
       */
      end: string;
      /**
       * Id
       * @description The ID of an existing timesheet entry. This can be specified to edit an existing entry.
       */
      id?: number;
      /**
       * Note
       * @description Optional note to associate with the timesheet entry.
       */
      note?: string;
      /**
       * Project Id
       * @description The ID of the project to associate with the timesheet entry.
       */
      projectId?: number;
      /**
       * Start
       * @description Start time for the timesheet entry. Local time for the employee. Must be in hh:mm 24 hour format.
       */
      start: string;
      /**
       * Task Id
       * @description The ID of the task to associate with the timesheet entry.
       */
      taskId?: number;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES tool output.
 */
type BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Approved
       * @description Approval status of the timesheet for the entry.
       * @default null
       */
      approved: boolean | null;
      /**
       * Approved At
       * @description Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.
       * @default null
       */
      approvedAt: string | null;
      /**
       * Employee Id
       * @description ID of the employee associated with the entry.
       * @default null
       */
      employeeId: number | null;
      /**
       * End
       * @description Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.
       * @default null
       */
      end: string | null;
      /**
       * Hours
       * @description The number of hours for the entry. This value has a maximum scale of 4. Property can be null.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description ID of the entry.
       * @default null
       */
      id: number | null;
      /**
       * Note
       * @description The note associated with the entry. Property can be null.
       * @default null
       */
      note: string | null;
      /**
       * ProjectInfo
       * @default null
       */
      projectInfo: {
          /**
           * Project
           * @default null
           */
          project: {
              /**
               * Id
               * @description ID of the project.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the project.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Task
           * @default null
           */
          task: {
              /**
               * Id
               * @description ID of the task.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the task.
               * @default null
               */
              name: string | null;
          } | null;
      } | null;
      /**
       * Start
       * @description Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.
       * @default null
       */
      start: string | null;
      /**
       * Timezone
       * @description The timezone the clock entry was recorded in. Property can be null.
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description type of the entry.
       * @default null
       * @enum {string|null}
       */
      type: "hour" | "clock" | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES tool input.
 */
type BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Hours
   * @description Hours
   */
  hours?: {
      /**
       * Date
       * @description Date for the timesheet entry. Must be in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Employee Id
       * @description Unique identifier for the employee.
       */
      employeeId: number;
      /**
       * Hours
       * @description Hours worked for this timesheet entry.
       */
      hours: number;
      /**
       * Id
       * @description The ID of an existing timesheet entry. This can be specified to edit an existing entry.
       */
      id?: number;
      /**
       * Note
       * @description Optional note to associate with the timesheet entry.
       */
      note?: string;
      /**
       * Project Id
       * @description The ID of the project to associate with the timesheet entry.
       */
      projectId?: number;
      /**
       * Task Id
       * @description The ID of the task to associate with the timesheet entry.
       */
      taskId?: number;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES tool output.
 */
type BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Approved
       * @description Approval status of the timesheet for the entry.
       * @default null
       */
      approved: boolean | null;
      /**
       * Approved At
       * @description Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.
       * @default null
       */
      approvedAt: string | null;
      /**
       * Employee Id
       * @description ID of the employee associated with the entry.
       * @default null
       */
      employeeId: number | null;
      /**
       * End
       * @description Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.
       * @default null
       */
      end: string | null;
      /**
       * Hours
       * @description The number of hours for the entry. This value has a maximum scale of 4. Property can be null.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description ID of the entry.
       * @default null
       */
      id: number | null;
      /**
       * Note
       * @description The note associated with the entry. Property can be null.
       * @default null
       */
      note: string | null;
      /**
       * ProjectInfo
       * @default null
       */
      projectInfo: {
          /**
           * Project
           * @default null
           */
          project: {
              /**
               * Id
               * @description ID of the project.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the project.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Task
           * @default null
           */
          task: {
              /**
               * Id
               * @description ID of the task.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the task.
               * @default null
               */
              name: string | null;
          } | null;
      } | null;
      /**
       * Start
       * @description Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.
       * @default null
       */
      start: string | null;
      /**
       * Timezone
       * @description The timezone the clock entry was recorded in. Property can be null.
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description type of the entry.
       * @default null
       * @enum {string|null}
       */
      type: "hour" | "clock" | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_EMPLOYEE tool input.
 */
type BAMBOOHR_ADD_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** First Name */
  firstName?: string;
  /** Last Name */
  lastName?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_EMPLOYEE tool output.
 */
type BAMBOOHR_ADD_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_NEW_CANDIDATE tool input.
 */
type BAMBOOHR_ADD_NEW_CANDIDATE_INPUT = {
  /**
   * Address
   * @description Address
   */
  address?: string;
  /**
   * City
   * @description City
   */
  city?: string;
  /**
   * College Name
   * @description Collegename
   */
  collegeName?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Country
   * @description Country
   */
  country?: string;
  /**
   * Cover Letter
   * Format: binary
   * @description Coverletter
   */
  coverLetter?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Date Available
   * @description Dateavailable
   */
  dateAvailable?: string;
  /**
   * Desired Salary
   * @description Desiredsalary
   */
  desiredSalary?: string;
  /**
   * Email
   * @description Email
   */
  email?: string;
  /**
   * First Name
   * @description Firstname
   */
  firstName?: string;
  /**
   * Highest Education
   * @description Highesteducation
   * @enum {string}
   */
  highestEducation?: "College - Associates" | "College - Bachelor of Arts" | "College - Bachelor of Fine Arts" | "College - Bachelor of Science" | "College - Doctorate" | "College - Master of Arts" | "College - Master of Business Administration" | "College - Master of Fine Arts" | "College - Master of Science" | "GED or Equivalent" | "High School" | "Medical Doctor" | "Other" | "Some College";
  /**
   * Job Id
   * @description Jobid
   */
  jobId?: number;
  /**
   * Last Name
   * @description Lastname
   */
  lastName?: string;
  /**
   * Linkedin Url
   * @description Linkedinurl
   */
  linkedinUrl?: string;
  /**
   * Phone Number
   * @description Phonenumber
   */
  phoneNumber?: string;
  /**
   * References
   * @description References
   */
  references?: string;
  /**
   * Referred By
   * @description Referredby
   */
  referredBy?: string;
  /**
   * Resume
   * Format: binary
   * @description Resume
   */
  resume?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Source
   * @description Source
   */
  source?: string;
  /**
   * State
   * @description State
   */
  state?: string;
  /**
   * Website Url
   * @description Websiteurl
   */
  websiteUrl?: string;
  /**
   * Zip
   * @description Zip
   */
  zip?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_NEW_CANDIDATE tool output.
 */
type BAMBOOHR_ADD_NEW_CANDIDATE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Candidate Id
       * @default null
       */
      candidateId: number | null;
      /**
       * Result
       * @default null
       */
      result: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD tool input.
 */
type BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Completed
   * Format: date
   * @description Completed is a required field and must be in yyyy-mm-dd format.
   */
  completed?: string;
  /**
   * Cost  Cost
   * @description Cost
   */
  cost__cost?: number;
  /**
   * Cost  Currency
   * @description Currency
   */
  cost__currency?: string;
  /**
   * Credits
   * @description Credits
   */
  credits?: number;
  /**
   * Employee Id
   * @description The ID of the employee to add a training record to.
   */
  employeeId?: number;
  /**
   * Hours
   * @description Hours
   */
  hours?: number;
  /**
   * Instructor
   * @description Instructor
   */
  instructor?: string;
  /**
   * Notes
   * @description Notes
   */
  notes?: string;
  /**
   * Type
   * @description This must be an existing training type id.
   * @default 0
   */
  type: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD tool output.
 */
type BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Completed
       * @description Completed is a date in the format yyyy-mm-dd.
       * @default null
       */
      completed: string | null;
      /**
       * Cost
       * @description The currency and cost for the training record.
       * @default null
       */
      cost: string | null;
      /**
       * Credits
       * @description What was credited for the training record.
       * @default null
       */
      credits: number | null;
      /**
       * Employee Id
       * @description The ID of the employee associated with the training.
       * @default null
       */
      employeeId: number | null;
      /**
       * Hours
       * @description Hours associated with the training record.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description The ID of the training record.
       * @default null
       */
      id: number | null;
      /**
       * Instructor
       * @description Name of the instructor.
       * @default null
       */
      instructor: string | null;
      /**
       * Notes
       * @description Notes left on the training record.
       * @default null
       */
      notes: string | null;
      /**
       * Type
       * @description The training type ID.
       * @default null
       */
      type: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_NEW_JOB_OPENING tool input.
 */
type BAMBOOHR_ADD_NEW_JOB_OPENING_INPUT = {
  /**
   * Application Question Address
   * @description Applicationquestionaddress
   * @enum {string}
   */
  applicationQuestionAddress?: "Required" | "false" | "true";
  /**
   * Application Question College
   * @description Applicationquestioncollege
   * @enum {string}
   */
  applicationQuestionCollege?: "Required" | "false" | "true";
  /**
   * Application Question Cover Letter
   * @description Applicationquestioncoverletter
   * @enum {string}
   */
  applicationQuestionCoverLetter?: "Required" | "false" | "true";
  /**
   * Application Question Date Available
   * @description Applicationquestiondateavailable
   * @enum {string}
   */
  applicationQuestionDateAvailable?: "Required" | "false" | "true";
  /**
   * Application Question Desired Salary
   * @description Applicationquestiondesiredsalary
   * @enum {string}
   */
  applicationQuestionDesiredSalary?: "Required" | "false" | "true";
  /**
   * Application Question Highest Education
   * @description Applicationquestionhighesteducation
   * @enum {string}
   */
  applicationQuestionHighestEducation?: "Required" | "false" | "true";
  /**
   * Application Question Linkedin Url
   * @description Applicationquestionlinkedinurl
   * @enum {string}
   */
  applicationQuestionLinkedinUrl?: "Required" | "false" | "true";
  /**
   * Application Question References
   * @description Applicationquestionreferences
   * @enum {string}
   */
  applicationQuestionReferences?: "Required" | "false" | "true";
  /**
   * Application Question Referred By
   * @description Applicationquestionreferredby
   * @enum {string}
   */
  applicationQuestionReferredBy?: "Required" | "false" | "true";
  /**
   * Application Question Resume
   * @description Applicationquestionresume
   * @enum {string}
   */
  applicationQuestionResume?: "Required" | "false" | "true";
  /**
   * Application Question Website Url
   * @description Applicationquestionwebsiteurl
   * @enum {string}
   */
  applicationQuestionWebsiteUrl?: "Required" | "false" | "true";
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Compensation
   * @description Compensation
   */
  compensation?: string;
  /**
   * Department
   * @description Department
   */
  department?: string;
  /**
   * Employment Type
   * @description Employmenttype
   */
  employmentType?: string;
  /**
   * Hiring Lead
   * @description Hiringlead
   */
  hiringLead?: number;
  /**
   * Internal Job Code
   * @description Internaljobcode
   */
  internalJobCode?: string;
  /**
   * Job Description
   * @description Jobdescription
   */
  jobDescription?: string;
  /**
   * Job Location
   * @description Joblocation
   */
  jobLocation?: number;
  /**
   * Job Status
   * @description Jobstatus
   * @enum {string}
   */
  jobStatus?: "Canceled" | "Draft" | "Filled" | "On Hold" | "Open";
  /**
   * Minimum Experience
   * @description Minimumexperience
   * @enum {string}
   */
  minimumExperience?: "Entry-level" | "Executive" | "Experienced" | "Manager/Supervisor" | "Mid-level" | "Senior Executive" | "Senior Manager/Supervisor'";
  /**
   * Posting Title
   * @description Postingtitle
   */
  postingTitle?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_NEW_JOB_OPENING tool output.
 */
type BAMBOOHR_ADD_NEW_JOB_OPENING_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Job Opening Id
       * @default null
       */
      jobOpeningId: number | null;
      /**
       * Result
       * @default null
       */
      result: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS tool input.
 */
type BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * List Field Id
   * @description Listfieldid
   */
  listFieldId?: string;
  /** Options */
  options?: {
      /** Adp Code */
      adpCode?: string;
      /** Archived */
      archived?: string;
      /** Id */
      id?: number;
      /** Value */
      value?: string;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS tool output.
 */
type BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY tool input.
 */
type BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of the employee to clock in.
   */
  employeeId?: string;
  /**
   * Note
   * @description The note that should be associated with the timesheet entry
   */
  note?: string;
  /**
   * Project Id
   * @description id of the time tracking project that should be associated with the timesheet entry. Required if taskId is specified.
   */
  projectId?: number;
  /**
   * Task Id
   * @description id of the time tracking task that should be associated with the timesheet entry.
   */
  taskId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY tool output.
 */
type BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Approved
       * @description Approval status of the timesheet for the entry.
       * @default null
       */
      approved: boolean | null;
      /**
       * Approved At
       * @description Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.
       * @default null
       */
      approvedAt: string | null;
      /**
       * Employee Id
       * @description ID of the employee associated with the entry.
       * @default null
       */
      employeeId: number | null;
      /**
       * End
       * @description Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.
       * @default null
       */
      end: string | null;
      /**
       * Hours
       * @description The number of hours for the entry. This value has a maximum scale of 4. Property can be null.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description ID of the entry.
       * @default null
       */
      id: number | null;
      /**
       * Note
       * @description The note associated with the entry. Property can be null.
       * @default null
       */
      note: string | null;
      /**
       * ProjectInfo
       * @default null
       */
      projectInfo: {
          /**
           * Project
           * @default null
           */
          project: {
              /**
               * Id
               * @description ID of the project.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the project.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Task
           * @default null
           */
          task: {
              /**
               * Id
               * @description ID of the task.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the task.
               * @default null
               */
              name: string | null;
          } | null;
      } | null;
      /**
       * Start
       * @description Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.
       * @default null
       */
      start: string | null;
      /**
       * Timezone
       * @description The timezone the clock entry was recorded in. Property can be null.
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description type of the entry.
       * @default null
       * @enum {string|null}
       */
      type: "hour" | "clock" | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY tool input.
 */
type BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of the employee to clock out.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY tool output.
 */
type BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Approved
       * @description Approval status of the timesheet for the entry.
       * @default null
       */
      approved: boolean | null;
      /**
       * Approved At
       * @description Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.
       * @default null
       */
      approvedAt: string | null;
      /**
       * Employee Id
       * @description ID of the employee associated with the entry.
       * @default null
       */
      employeeId: number | null;
      /**
       * End
       * @description Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.
       * @default null
       */
      end: string | null;
      /**
       * Hours
       * @description The number of hours for the entry. This value has a maximum scale of 4. Property can be null.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description ID of the entry.
       * @default null
       */
      id: number | null;
      /**
       * Note
       * @description The note associated with the entry. Property can be null.
       * @default null
       */
      note: string | null;
      /**
       * ProjectInfo
       * @default null
       */
      projectInfo: {
          /**
           * Project
           * @default null
           */
          project: {
              /**
               * Id
               * @description ID of the project.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the project.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Task
           * @default null
           */
          task: {
              /**
               * Id
               * @description ID of the task.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the task.
               * @default null
               */
              name: string | null;
          } | null;
      } | null;
      /**
       * Start
       * @description Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.
       * @default null
       */
      start: string | null;
      /**
       * Timezone
       * @description The timezone the clock entry was recorded in. Property can be null.
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description type of the entry.
       * @default null
       * @enum {string|null}
       */
      type: "hour" | "clock" | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_TRAINING_CATEGORY tool input.
 */
type BAMBOOHR_ADD_TRAINING_CATEGORY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Name
   * @description Name of the new training category.
   */
  name?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_TRAINING_CATEGORY tool output.
 */
type BAMBOOHR_ADD_TRAINING_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Id
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @default null
       */
      name: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_TRAINING_TYPE tool input.
 */
type BAMBOOHR_ADD_TRAINING_TYPE_INPUT = {
  /**
   * Allow Employees To Mark Complete
   * @description Allows all employees who can view the training to be able to mark it complete.
   * @default false
   */
  allowEmployeesToMarkComplete: boolean;
  /**
   * Category  Accuracy
   * @description Accuracy in meters of the clock in location
   */
  category__accuracy?: number;
  /**
   * Category  Address
   * @description Address...
   */
  category__address?: string;
  /**
   * Category  Id
   * @description Category ID
   */
  category__id?: number;
  /**
   * Category  Name
   * @description Category Name
   */
  category__name?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Description
   * @description Description for the training.
   */
  description?: string;
  /**
   * Due From Hire Date
   * @description Number of days before the training is due for new hires. Not valid unless training is required.
   * @default 30
   */
  dueFromHireDate: number;
  /**
   * Frequency
   * @description The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.
   * @default 12
   */
  frequency: number;
  /**
   * Link Url
   * @description Optional URL that can be included with a training.
   */
  linkUrl?: string;
  /**
   * Name
   * @description Name of the new training type.
   */
  name?: string;
  /**
   * Renewable
   * @description Renewable is optional but if you are setting it to true you must pass a frequency which is the months between renewals.
   */
  renewable?: boolean;
  /**
   * Required
   * @description Is this a required training?
   */
  required?: boolean;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_TRAINING_TYPE tool output.
 */
type BAMBOOHR_ADD_TRAINING_TYPE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Allow Employees To Mark Complete
       * @description Allows all employees who can view the training to be able to mark it complete.
       * @default null
       */
      allowEmployeesToMarkComplete: boolean | null;
      /**
       * Category
       * @description The category ID and name
       * @default null
       */
      category: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Description
       * @description Description for the training.
       * @default null
       */
      description: string | null;
      /**
       * Due From Hire Date
       * @description Number of days before the training is due for new hires. Not valid if training is not required.
       * @default null
       */
      dueFromHireDate: number | null;
      /**
       * Frequency
       * @description The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.
       * @default null
       */
      frequency: number | null;
      /**
       * Id
       * @description The ID of the training
       * @default null
       */
      id: number | null;
      /**
       * Link Url
       * @description Optional URL that can be included with a training.
       * @default null
       */
      linkUrl: string | null;
      /**
       * Name
       * @description Name of the training type.
       * @default null
       */
      name: string | null;
      /**
       * Renewable
       * @description If true, training will be renewed based off of frequency.
       * @default null
       */
      renewable: boolean | null;
      /**
       * Required
       * @description Is this a required training?
       * @default null
       */
      required: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_ADD_WEBHOOK tool input.
 */
type BAMBOOHR_ADD_WEBHOOK_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Format
   * @description The format the webhook should use (json - default, form-encoded).
   * @enum {string}
   */
  format?: "form-encoded" | "json";
  /**
   * Frequency  Day
   * @description The day to potentially fire (1-31, null to potentially fire every day)
   */
  frequency__day?: number;
  /**
   * Frequency  Hour
   * @description The hour to potentially fire (0-23, null to potentially fire every hour)
   */
  frequency__hour?: number;
  /**
   * Frequency  Minute
   * @description The minute to potentially fire (0-59, null to potentially fire every minute)
   */
  frequency__minute?: number;
  /**
   * Frequency  Month
   * @description The month to potentially fire (1-12, null to potentially fire every month)
   */
  frequency__month?: number;
  /**
   * Include Company Domain
   * @description If set to true, the company domain will be added to the header.
   */
  includeCompanyDomain?: boolean;
  /**
   * Limit  Seconds
   * @description The minimum amount of seconds between requests
   */
  limit__seconds?: number;
  /**
   * Limit  Times
   * @description The amount of records to send
   */
  limit__times?: number;
  /**
   * Monitor Fields
   * @description A list of fields to monitor.
   */
  monitorFields?: string[];
  /**
   * Name
   * @description The name of the webhook.
   */
  name?: string;
  /**
   * Post Fields
   * @description A list of fields to post to the webhook url. Field ID or alias: external name
   */
  postFields?: {
      [key: string]: string;
  };
  /**
   * Url
   * @description The url the webhook should send data to (must begin with https://).
   */
  url?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADD_WEBHOOK tool output.
 */
type BAMBOOHR_ADD_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Created
       * @description timestamp of creation
       * @default null
       */
      created: string | null;
      /**
       * Format
       * @description The format the webhook should use (json, form-encoded).
       * @default null
       */
      format: string | null;
      /**
       * Frequency
       * @description How often the webhook could fire.
       * @default null
       */
      frequency: {
          /**
           * Day
           * @description The day to potentially fire
           * @default null
           */
          day: number | null;
          /**
           * Hour
           * @description The hour to potentially fire.
           * @default null
           */
          hour: number | null;
          /**
           * Minute
           * @description The minute to potentially fire
           * @default null
           */
          minute: number | null;
          /**
           * Month
           * @description The month to potentially fire
           * @default null
           */
          month: unknown;
      } | null;
      /**
       * Id
       * @description The id of the webhook.
       * @default null
       */
      id: number | null;
      /**
       * Include Company Domain
       * @description If set to true, the company domain will be added to the header.
       * @default null
       */
      includeCompanyDomain: boolean | null;
      /**
       * Last Sent
       * @description timestamp of last webhook sent
       * @default null
       */
      lastSent: string | null;
      /**
       * Limit
       * @description To limit how often to potentially fire a webhook, and maximum amount of records to send
       * @default null
       */
      limit: {
          /**
           * Seconds
           * @description The minimum amount of seconds between requests
           * @default null
           */
          seconds: number | null;
          /**
           * Times
           * @description The amount of records to send
           * @default null
           */
          times: number | null;
      } | null;
      /**
       * Monitor Fields
       * @description A list of fields to monitor.
       * @default null
       */
      monitorFields: string[] | null;
      /**
       * Name
       * @description The name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Post Fields
       * @description A list of fields to post to the webhook url. Field ID or alias: external name
       * @default null
       */
      postFields: {
          [key: string]: string;
      } | null;
      /**
       * Private Key
       * @description The private key which can be used to verify that the webhook is secure (uses HMAC-SHA256)
       * @default null
       */
      privateKey: string | null;
      /**
       * Url
       * @description The url the webhook should send data to.
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
 * Type of BAMBOOHR's BAMBOOHR_ADJUST_TIME_OFF_BALANCE tool input.
 */
type BAMBOOHR_ADJUST_TIME_OFF_BALANCE_INPUT = {
  /**
   * Amount
   * @description The number of hours/days to adjust the balance by.
   */
  amount?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Date
   * @description The date the adjustment should be added in history. Should be in ISO8601 date format (YYYY-MM-DD).
   */
  date?: string;
  /**
   * Employee Id
   * @description The ID of the employee.
   */
  employeeId?: number;
  /**
   * Note
   * @description This is an optional note to show in history.
   */
  note?: string;
  /**
   * Time Off Type Id
   * @description The ID of the time off type to add a balance adjustment for.
   */
  timeOffTypeId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ADJUST_TIME_OFF_BALANCE tool output.
 */
type BAMBOOHR_ADJUST_TIME_OFF_BALANCE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ALIGNABLE_GOAL_OPTIONS tool input.
 */
type BAMBOOHR_ALIGNABLE_GOAL_OPTIONS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID to get alignable goal options for.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ALIGNABLE_GOAL_OPTIONS tool output.
 */
type BAMBOOHR_ALIGNABLE_GOAL_OPTIONS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS tool input.
 */
type BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Last Changed
   * @description UNIX timestamp for last change to timesheet
   */
  lastChanged?: number;
  /**
   * Timesheets
   * @description Array of timesheet objects that contain the timesheet id
   */
  timesheets?: {
      /**
       * Timesheet Id
       * @description The id of the timesheet
       */
      timesheetId?: number;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS tool output.
 */
type BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_APPROVE_TIMESHEETS_ACTION tool input.
 */
type BAMBOOHR_APPROVE_TIMESHEETS_ACTION_INPUT = {
  /**
   * Clock Outs
   * @description Array of clock out information
   */
  clockOuts?: {
      /**
       * Date
       * @description Date of the clock out. Date string format (YYYY-MM-DD)
       */
      date: string;
      /**
       * End
       * @description 24 hour format (hh:mm) for clock out time
       */
      end: string;
      /**
       * Timesheet Id
       * @description The id of the timesheet
       */
      timesheetId: number;
  }[];
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_APPROVE_TIMESHEETS_ACTION tool output.
 */
type BAMBOOHR_APPROVE_TIMESHEETS_ACTION_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS tool input.
 */
type BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID to get sharing options for.
   */
  employeeId?: string;
  /**
   * Limit
   * @description Limit will restrict results to specified number.
   */
  limit?: string;
  /**
   * Search
   * @description The search term used to filter employees returned. Will search name, employee ID and email.
   */
  search?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS tool output.
 */
type BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CAN_CREATE_A_GOAL tool input.
 */
type BAMBOOHR_CAN_CREATE_A_GOAL_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CAN_CREATE_A_GOAL tool output.
 */
type BAMBOOHR_CAN_CREATE_A_GOAL_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CHANGE_APPLICANT_S_STATUS tool input.
 */
type BAMBOOHR_CHANGE_APPLICANT_S_STATUS_INPUT = {
  /**
   * Application Id
   * @description The ID of the application to add a comment to.
   */
  applicationId?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Status
   * @description Associates a status id with an application.
   */
  status?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CHANGE_APPLICANT_S_STATUS tool output.
 */
type BAMBOOHR_CHANGE_APPLICANT_S_STATUS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CHANGE_A_REQUEST_STATUS tool input.
 */
type BAMBOOHR_CHANGE_A_REQUEST_STATUS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Note
   * @description A note to attach to the change in status
   */
  note?: string;
  /**
   * Request Id
   * @description Requestid
   */
  requestId?: string;
  /**
   * Status
   * @description One of approved, cancelled, denied
   */
  status?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CHANGE_A_REQUEST_STATUS tool output.
 */
type BAMBOOHR_CHANGE_A_REQUEST_STATUS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS tool input.
 */
type BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee id.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS tool output.
 */
type BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION tool input.
 */
type BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION tool output.
 */
type BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS tool input.
 */
type BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee id.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS tool output.
 */
type BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL tool input.
 */
type BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL_INPUT = {
  /**
   * Clock In Location  Accuracy
   * @description Accuracy in meters of the clock in location
   */
  clockInLocation__accuracy?: number;
  /**
   * Clock In Location  Address
   * @description Address
   */
  clockInLocation__address?: string;
  /**
   * Clock In Location  Latitude
   * @description Latitude
   */
  clockInLocation__latitude?: number;
  /**
   * Clock In Location  Longitude
   * @description Longitude
   */
  clockInLocation__longitude?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description {employeeId} is id of the employee clocking out
   */
  employeeId?: string;
  /**
   * Note
   * @description The note associated with the clock in
   */
  note?: string;
  /**
   * Project Id
   * @description The id of the project associated with the clock in
   */
  projectId?: number;
  /**
   * Start
   * @description The start time for the clock in. In 24 hour format HH:MM
   */
  start?: string;
  /**
   * Task Id
   * @description The id of the task associated with the clock in
   */
  taskId?: number;
  /**
   * Timezone
   * @description The timezone associated with the clock in.
   */
  timezone?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL tool output.
 */
type BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME tool input.
 */
type BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Datetime
   * @description Date time for clock out in atom format.
   */
  datetime?: string;
  /**
   * Employee Id
   * @description The employeeId for the time entry.
   */
  employeeId?: number;
  /**
   * Timezone
   * @description Timezone of the time entry
   */
  timezone?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME tool output.
 */
type BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL tool input.
 */
type BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL_INPUT = {
  /**
   * Clock Out Location  Accuracy
   * @description Accuracy in meters of the clock out location
   */
  clockOutLocation__accuracy?: number;
  /**
   * Clock Out Location  Address
   * @description Address
   */
  clockOutLocation__address?: string;
  /**
   * Clock Out Location  Latitude
   * @description Latitude
   */
  clockOutLocation__latitude?: number;
  /**
   * Clock Out Location  Longitude
   * @description Longitude
   */
  clockOutLocation__longitude?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description {employeeId} is id of the employee clocking out
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL tool output.
 */
type BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_CLOSE_GOAL tool input.
 */
type BAMBOOHR_CLOSE_GOAL_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CLOSE_GOAL tool output.
 */
type BAMBOOHR_CLOSE_GOAL_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Goal
       * @description An individual goal
       * @default null
       */
      goal: {
          /**
           * Actions
           * @description Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.
           * @default null
           */
          actions: {
              /**
               * Can Edit Goal Milestone Progress Bar
               * @description can the user edit the progress of a milestone in this goal.
               * @default null
               */
              canEditGoalMilestoneProgressBar: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can the user edit the progress bar of this goal.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
          } | null;
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Milestones
           * @description All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.
           * @default null
           */
          milestones: {
              /**
               * Completed Date Time
               * @description The date and time in which the goal has been completed. If the goal is not completed the value will be null.
               * @default null
               */
              completedDateTime: string | null;
              /**
               * Current Value
               * @description The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              currentValue: number | null;
              /**
               * Employee Goal Id
               * @description The id of the goal which encompasses this milestone.
               * @default null
               */
              employeeGoalId: number | null;
              /**
               * End Value
               * @description The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              endValue: number | null;
              /**
               * Id
               * @description The id of the milestone.
               * @default null
               */
              id: number | null;
              /**
               * Last Update Date Date Time
               * @description The date and time in which the goal was last updated.
               * @default null
               */
              lastUpdateDateDateTime: string | null;
              /**
               * Last Update User Id
               * @description The ID of the user who last updated this milestone.
               * @default null
               */
              lastUpdateUserId: number | null;
              /**
               * Start Value
               * @description The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              startValue: number | null;
              /**
               * Title
               * @description The title of the milestone.
               * @default null
               */
              title: string | null;
          }[] | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT tool input.
 */
type BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT_INPUT = {
  /**
   * Allow All Employees
   * @description Indicates if all employees can log time for this project. Defaults to true if not provided.
   */
  allowAllEmployees?: boolean;
  /**
   * Billable
   * @description Indicates if the project is billable. Defaults to true if not provided.
   */
  billable?: boolean;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Ids
   * @description A list of employee IDs that can log time for this project.
   */
  employeeIds?: number[];
  /**
   * Has Tasks
   * @description Indicates if the project has tasks. Defaults to false if not provided.
   */
  hasTasks?: boolean;
  /**
   * Name
   * @description Name of the project.
   */
  name?: string;
  /**
   * Tasks
   * @description List of tasks to create and associate with the project.
   */
  tasks?: {
      /**
       * Billable
       * @description Indicates if the tasks is billable. Defaults to true if not provided.
       */
      billable?: boolean;
      /**
       * Name
       * @description Name of the task.
       */
      name: string;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT tool output.
 */
type BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Employee Ids
       * @description A list of employee IDs that can log time for this project. If not present, all employees can log time for the project.
       * @default null
       */
      employeeIds: number[] | null;
      /**
       * Id
       * @description ID of the project.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the project.
       * @default null
       */
      name: string | null;
      /**
       * Tasks
       * @description A list of time tracking tasks for the project.
       * @default null
       */
      tasks: {
          /**
           * Id
           * @description ID of the task.
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name of the task.
           * @default null
           */
          name: string | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_CREATE_GOAL tool input.
 */
type BAMBOOHR_CREATE_GOAL_INPUT = {
  /**
   * Aligns With Option Id
   * @description [Optional] The option ID that aligns with this goal.
   */
  alignsWithOptionId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Completion Date
   * @description [Optional] The date the goal was completed. If date is set, and no milestones are contained within this goal, percentComplete must be set to 100. If this goal does contain milestones, completion date cannot be set.
   */
  completionDate?: number;
  /**
   * Description
   * @description [Optional] The goal description.
   */
  description?: string;
  /**
   * Due Date
   * @description [Required] The goal due date in YYYY-mm-dd format.
   */
  dueDate?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Milestones
   * @description [Optional] Milestones for the goal.
   */
  milestones?: {
      /**
       * End Value
       * @description [Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.
       */
      endValue?: number;
      /**
       * Start Value
       * @description [Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.
       */
      startValue?: number;
      /**
       * Title
       * @description [Required] The title of the milestone.
       */
      title: string;
  }[];
  /**
   * Percent Complete
   * @description [Optional] The goal completion percentage (0 - 100). If completionDate is set, this value must be 100.
   */
  percentComplete?: number;
  /**
   * Shared With Employee Ids
   * @description [Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered "shared with". This must include the employee for whom the goal is created.
   */
  sharedWithEmployeeIds?: number[];
  /**
   * Title
   * @description [Required] The goal title.
   */
  title?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CREATE_GOAL tool output.
 */
type BAMBOOHR_CREATE_GOAL_OUTPUT = {
  /**
   * Data
   * @description The response schema
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
 * Type of BAMBOOHR's BAMBOOHR_CREATE_GOAL_COMMENT tool input.
 */
type BAMBOOHR_CREATE_GOAL_COMMENT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_CREATE_GOAL_COMMENT tool output.
 */
type BAMBOOHR_CREATE_GOAL_COMMENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETES_A_TABLE_ROW tool input.
 */
type BAMBOOHR_DELETES_A_TABLE_ROW_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
  /**
   * Row Id
   * @description Row ID
   */
  rowId?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETES_A_TABLE_ROW tool output.
 */
type BAMBOOHR_DELETES_A_TABLE_ROW_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Sucess
       * @default null
       */
      sucess: boolean | null;
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB tool input.
 */
type BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the paystub (record) ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB tool output.
 */
type BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_AN_HOUR_RECORD tool input.
 */
type BAMBOOHR_DELETE_AN_HOUR_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_AN_HOUR_RECORD tool output.
 */
type BAMBOOHR_DELETE_AN_HOUR_RECORD_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_A_COMPANY_BENEFIT tool input.
 */
type BAMBOOHR_DELETE_A_COMPANY_BENEFIT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the company benefit ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_A_COMPANY_BENEFIT tool output.
 */
type BAMBOOHR_DELETE_A_COMPANY_BENEFIT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_CLOCK_ENTRIES tool input.
 */
type BAMBOOHR_DELETE_CLOCK_ENTRIES_INPUT = {
  /**
   * Clock Entry Ids
   * @description Clockentryids
   */
  clockEntryIds?: number[];
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_CLOCK_ENTRIES tool output.
 */
type BAMBOOHR_DELETE_CLOCK_ENTRIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_COMPANY_FILE tool input.
 */
type BAMBOOHR_DELETE_COMPANY_FILE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * File Id
   * @description {fileId} is the ID of the company file being deleted.
   */
  fileId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_COMPANY_FILE tool output.
 */
type BAMBOOHR_DELETE_COMPANY_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_EMPLOYEE_FILE tool input.
 */
type BAMBOOHR_DELETE_EMPLOYEE_FILE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * File Id
   * @description {fileId} is the ID of the employee file being deleted.
   */
  fileId?: string;
  /**
   * Id
   * @description {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_EMPLOYEE_FILE tool output.
 */
type BAMBOOHR_DELETE_EMPLOYEE_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD tool input.
 */
type BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Training Record Id
   * @description The ID of the training record to delete.
   */
  employeeTrainingRecordId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD tool output.
 */
type BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_GOAL tool input.
 */
type BAMBOOHR_DELETE_GOAL_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_GOAL tool output.
 */
type BAMBOOHR_DELETE_GOAL_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_GOAL_COMMENT tool input.
 */
type BAMBOOHR_DELETE_GOAL_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description commentId is the ID of a specific comment for the specified goal.
   */
  commentId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_GOAL_COMMENT tool output.
 */
type BAMBOOHR_DELETE_GOAL_COMMENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES tool input.
 */
type BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES_INPUT = {
  /**
   * Clock Entry Ids
   * @description Clockentryids
   */
  clockEntryIds?: number[];
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES tool output.
 */
type BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES tool input.
 */
type BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Hour Entry Ids
   * @description Hourentryids
   */
  hourEntryIds?: number[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES tool output.
 */
type BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TRAINING_CATEGORY tool input.
 */
type BAMBOOHR_DELETE_TRAINING_CATEGORY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Training Category Id
   * @description The ID of the training category to delete.
   */
  trainingCategoryId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TRAINING_CATEGORY tool output.
 */
type BAMBOOHR_DELETE_TRAINING_CATEGORY_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TRAINING_TYPE tool input.
 */
type BAMBOOHR_DELETE_TRAINING_TYPE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Training Type Id
   * @description The ID of the training type to delete.
   */
  trainingTypeId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_TRAINING_TYPE tool output.
 */
type BAMBOOHR_DELETE_TRAINING_TYPE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_DELETE_WEBHOOK tool input.
 */
type BAMBOOHR_DELETE_WEBHOOK_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is an webhook ID that is associated with the User API key.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_DELETE_WEBHOOK tool output.
 */
type BAMBOOHR_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_EDIT_AN_HOUR_RECORD tool input.
 */
type BAMBOOHR_EDIT_AN_HOUR_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Hours Worked
   * @description The updated number of hours worked. e.g. if Employee A worked 8.0 hours originally and decided they only worked 6.0, please send 6.0 here not -2.0.
   */
  hoursWorked?: number;
  /**
   * Time Tracking Id
   * @description The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).
   */
  timeTrackingId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_EDIT_AN_HOUR_RECORD tool output.
 */
type BAMBOOHR_EDIT_AN_HOUR_RECORD_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY tool input.
 */
type BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY_INPUT = {
  /**
   * Clock In Location  Accuracy
   * @description Accuracy in meters of the clock in location
   */
  clockInLocation__accuracy?: number;
  /**
   * Clock In Location  Address
   * @description Address
   */
  clockInLocation__address?: string;
  /**
   * Clock In Location  Latitude
   * @description Latitude
   */
  clockInLocation__latitude?: number;
  /**
   * Clock In Location  Longitude
   * @description Longitude
   */
  clockInLocation__longitude?: number;
  /**
   * Clock Out Location  Accuracy
   * @description Accuracy in meters of the clock in location
   */
  clockOutLocation__accuracy?: number;
  /**
   * Clock Out Location  Address
   * @description Address
   */
  clockOutLocation__address?: string;
  /**
   * Clock Out Location  Latitude
   * @description Latitude
   */
  clockOutLocation__latitude?: number;
  /**
   * Clock Out Location  Longitude
   * @description Longitude
   */
  clockOutLocation__longitude?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of the employee to whom the projects belong.
   */
  employeeId?: string;
  /**
   * Note
   * @description The note associated with the clock in
   */
  note?: string;
  /**
   * Project Id
   * @description The id of the project associated with the clock in
   */
  projectId?: number;
  /**
   * Start
   * @description The start time for the clock in. In 24 hour format HH:MM
   */
  start?: string;
  /**
   * Task Id
   * @description The id of the task associated with the clock in
   */
  taskId?: number;
  /**
   * Timezone
   * @description The timezone associated with the clock in.
   */
  timezone?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY tool output.
 */
type BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW tool input.
 */
type BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Date */
  date?: string;
  /** Department */
  department?: string;
  /** Division */
  division?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
  /** Job Title */
  jobTitle?: string;
  /** Location */
  location?: string;
  /** Reports To */
  reportsTo?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW tool output.
 */
type BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES tool input.
 */
type BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description Employeeid
   */
  employeeId?: string;
  /**
   * End
   * @description End
   */
  end?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES tool output.
 */
type BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS tool input.
 */
type BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Since
   * @description URL encoded iso8601 timestamp
   */
  since?: string;
  /**
   * Type
   * @description Use one of these in the {type} variable in the URL: "inserted", "updated", "deleted"
   */
  type?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS tool output.
 */
type BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA tool input.
 */
type BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Since
   * @description URL encoded iso8601 timestamp
   */
  since?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA tool output.
 */
type BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY tool input.
 */
type BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY tool output.
 */
type BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Webhooks
       * @default null
       */
      webhooks: {
          /**
           * Created
           * Format: date-time
           * @description The creation date of the webhook.
           * @default null
           */
          created: string | null;
          /**
           * Id
           * @description The ID of the webhook.
           * @default null
           */
          id: string | null;
          /**
           * Last Sent
           * Format: date-time
           * @description The date the webhook was last sent.
           * @default null
           */
          lastSent: string | null;
          /**
           * Name
           * @description The name of the webhook.
           * @default null
           */
          name: string | null;
          /**
           * Url
           * @description The url of the webhook.
           * @default null
           */
          url: string | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AGGREGATE_GOAL_INFO tool input.
 */
type BAMBOOHR_GET_AGGREGATE_GOAL_INFO_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the Goal ID used to generate the aggregate information.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AGGREGATE_GOAL_INFO tool output.
 */
type BAMBOOHR_GET_AGGREGATE_GOAL_INFO_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Aligns With Options
       * @description All possible goals that this goal could be aligned with.
       * @default null
       */
      alignsWithOptions: {
          /**
           * Id
           * @description Id of the goal that the selected goal could be aligned with.
           * @default null
           */
          id: number | null;
          /**
           * Title
           * @description Title of the goal that the selected goal could be aligned with.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Can Align
       * @description The selected user can align goals with other users.
       * @default null
       */
      canAlign: boolean | null;
      /**
       * Can Create Goals
       * @description The selected user can create a goal.
       * @default null
       */
      canCreateGoals: boolean | null;
      /**
       * Comments
       * @description Comments linked to selected goal.
       * @default null
       */
      comments: {
          /**
           * Author User Id
           * @description Id of the author of the comment.
           * @default null
           */
          authorUserId: number | null;
          /**
           * Can Delete
           * @description Can the comment be deleted.
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Edit
           * @description Can the comment be edited.
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Created At
           * Format: date-time
           * @description The date and time that the comment was created.
           * @default null
           */
          createdAt: string | null;
          /**
           * Id
           * @description Id of the comment.
           * @default null
           */
          id: number | null;
          /**
           * Text
           * @description The actual text of the comment.
           * @default null
           */
          text: string | null;
      }[] | null;
      /**
       * Goal
       * @description The selected goal object
       * @default null
       */
      goal: {
          /**
           * Actions
           * @description Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.
           * @default null
           */
          actions: {
              /**
               * Can Edit Goal Milestone Progress Bar
               * @description can the user edit the progress of a milestone in this goal.
               * @default null
               */
              canEditGoalMilestoneProgressBar: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can the user edit the progress bar of this goal.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
          } | null;
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Milestones
           * @description All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.
           * @default null
           */
          milestones: {
              /**
               * Completed Date Time
               * @description The date and time in which the goal has been completed. If the goal is not completed the value will be null.
               * @default null
               */
              completedDateTime: string | null;
              /**
               * Current Value
               * @description The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              currentValue: number | null;
              /**
               * Employee Goal Id
               * @description The id of the goal which encompasses this milestone.
               * @default null
               */
              employeeGoalId: number | null;
              /**
               * End Value
               * @description The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              endValue: number | null;
              /**
               * Id
               * @description The id of the milestone.
               * @default null
               */
              id: number | null;
              /**
               * Last Update Date Date Time
               * @description The date and time in which the goal was last updated.
               * @default null
               */
              lastUpdateDateDateTime: string | null;
              /**
               * Last Update User Id
               * @description The ID of the user who last updated this milestone.
               * @default null
               */
              lastUpdateUserId: number | null;
              /**
               * Start Value
               * @description The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              startValue: number | null;
              /**
               * Title
               * @description The title of the milestone.
               * @default null
               */
              title: string | null;
          }[] | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
      } | null;
      /**
       * Persons
       * @description A list of people with access to the goal.
       * @default null
       */
      persons: {
          /**
           * Display First Name
           * @description First name of the person.
           * @default null
           */
          displayFirstName: string | null;
          /**
           * Employee Id
           * @description The id of this employee.
           * @default null
           */
          employeeId: number | null;
          /**
           * Last Name
           * @description Last name of the person.
           * @default null
           */
          lastName: string | null;
          /**
           * Photo Url
           * @description url of the user profile image.
           * @default null
           */
          photoUrl: string | null;
          /**
           * User Id
           * @description The user id of the person if applicable.
           * @default null
           */
          userId: number | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO tool input.
 */
type BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID used to generate the aggregate information.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO tool output.
 */
type BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Can Align
       * @description The selected user can align goals with other users.
       * @default null
       */
      canAlign: boolean | null;
      /**
       * Can Create Goals
       * @description The selected user can create a goal.
       * @default null
       */
      canCreateGoals: boolean | null;
      /**
       * Comments
       * @description A list of how many comments belong to each goal.
       * @default null
       */
      comments: {
          /**
           * Comment Count
           * @description How many comments are linked to the goal
           * @default null
           */
          commentCount: number | null;
          /**
           * Goal Id
           * @description The goalId that the comments are linked to.
           * @default null
           */
          goalId: number | null;
      }[] | null;
      /**
       * Filters
       * @description All the goals of the user seperated by filter.
       * @default null
       */
      filters: {
          /**
           * Count
           * @description Count of the goals with that filter.
           * @default null
           */
          count: number | null;
          /**
           * Id
           * @description Id of the filter.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the filter.
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Goals
       * @description All goals in selected filter.
       * @default null
       */
      goals: {
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Persons
       * @description A list of people with access to the goal.
       * @default null
       */
      persons: {
          /**
           * Display First Name
           * @description First name of the person.
           * @default null
           */
          displayFirstName: string | null;
          /**
           * Employee Id
           * @description The id of this employee.
           * @default null
           */
          employeeId: number | null;
          /**
           * Last Name
           * @description Last name of the person.
           * @default null
           */
          lastName: string | null;
          /**
           * Photo Url
           * @description url of the user profile image.
           * @default null
           */
          photoUrl: string | null;
          /**
           * User Id
           * @description The user id of the person if applicable.
           * @default null
           */
          userId: number | null;
      }[] | null;
      /**
       * Selected Filter
       * @description The id of the current selected filter.
       * @default null
       */
      selectedFilter: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11 tool input.
 */
type BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID used to generate the aggregate information.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11 tool output.
 */
type BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Can Align
       * @description The selected user can align goals with other users.
       * @default null
       */
      canAlign: boolean | null;
      /**
       * Can Create Goals
       * @description The selected user can create a goal.
       * @default null
       */
      canCreateGoals: boolean | null;
      /**
       * Comments
       * @description A list of how many comments belong to each goal.
       * @default null
       */
      comments: {
          /**
           * Comment Count
           * @description How many comments are linked to the goal
           * @default null
           */
          commentCount: number | null;
          /**
           * Goal Id
           * @description The goalId that the comments are linked to.
           * @default null
           */
          goalId: number | null;
      }[] | null;
      /**
       * Filters
       * @description All the goals of the user seperated by filter.
       * @default null
       */
      filters: {
          /**
           * Actions
           * @description What actions a user can preform on this kind of goal.
           * @default null
           */
          actions: {
              /**
               * Can Close Goal
               * @description Can a goal be closed in this state.
               * @default null
               */
              canCloseGoal: boolean | null;
              /**
               * Can Edit Goal
               * @description Can a goal be edited in this state.
               * @default null
               */
              canEditGoal: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can a goal progress bar be edited in this state.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
              /**
               * Can Reopen Goal
               * @description Can a goal be reopened in this state.
               * @default null
               */
              canReopenGoal: boolean | null;
              /**
               * Can Share Goal
               * @description Can a goal be shared in this state.
               * @default null
               */
              canShareGoal: boolean | null;
          } | null;
          /**
           * Count
           * @description Count of the goals with that filter.
           * @default null
           */
          count: number | null;
          /**
           * Id
           * @description Id of the filter.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the filter.
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Goals
       * @description All goals in selected filter.
       * @default null
       */
      goals: {
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Persons
       * @description A list of people with access to the goal.
       * @default null
       */
      persons: {
          /**
           * Display First Name
           * @description First name of the person.
           * @default null
           */
          displayFirstName: string | null;
          /**
           * Employee Id
           * @description The id of this employee.
           * @default null
           */
          employeeId: number | null;
          /**
           * Last Name
           * @description Last name of the person.
           * @default null
           */
          lastName: string | null;
          /**
           * Photo Url
           * @description url of the user profile image.
           * @default null
           */
          photoUrl: string | null;
          /**
           * User Id
           * @description The user id of the person if applicable.
           * @default null
           */
          userId: number | null;
      }[] | null;
      /**
       * Selected Filter
       * @description The id of the current selected filter.
       * @default null
       */
      selectedFilter: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12 tool input.
 */
type BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID used to generate the aggregate information.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12 tool output.
 */
type BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Can Align
       * @description The selected user can align goals with other users.
       * @default null
       */
      canAlign: boolean | null;
      /**
       * Can Create Goals
       * @description The selected user can create a goal.
       * @default null
       */
      canCreateGoals: boolean | null;
      /**
       * Comments
       * @description A list of how many comments belong to each goal.
       * @default null
       */
      comments: {
          /**
           * Comment Count
           * @description How many comments are linked to the goal
           * @default null
           */
          commentCount: number | null;
          /**
           * Goal Id
           * @description The goalId that the comments are linked to.
           * @default null
           */
          goalId: number | null;
      }[] | null;
      /**
       * Filters
       * @description All the goals of the user seperated by filter.
       * @default null
       */
      filters: {
          /**
           * Actions
           * @description What actions a user can preform on this kind of goal.
           * @default null
           */
          actions: {
              /**
               * Can Close Goal
               * @description Can a goal be closed in this state.
               * @default null
               */
              canCloseGoal: boolean | null;
              /**
               * Can Edit Goal
               * @description Can a goal be edited in this state.
               * @default null
               */
              canEditGoal: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can a goal progress bar be edited in this state.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
              /**
               * Can Reopen Goal
               * @description Can a goal be reopened in this state.
               * @default null
               */
              canReopenGoal: boolean | null;
              /**
               * Can Share Goal
               * @description Can a goal be shared in this state.
               * @default null
               */
              canShareGoal: boolean | null;
          } | null;
          /**
           * Count
           * @description Count of the goals with that filter.
           * @default null
           */
          count: number | null;
          /**
           * Id
           * @description Id of the filter.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the filter.
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Goals
       * @description All goals in selected filter.
       * @default null
       */
      goals: {
          /**
           * Actions1
           * @description Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.
           * @default null
           */
          actions: {
              /**
               * Can Edit Goal Milestone Progress Bar
               * @description can the user edit the progress of a milestone in this goal.
               * @default null
               */
              canEditGoalMilestoneProgressBar: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can the user edit the progress bar of this goal.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
          } | null;
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Milestones
           * @description All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.
           * @default null
           */
          milestones: {
              /**
               * Completed Date Time
               * @description The date and time in which the goal has been completed. If the goal is not completed the value will be null.
               * @default null
               */
              completedDateTime: string | null;
              /**
               * Current Value
               * @description The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              currentValue: number | null;
              /**
               * Employee Goal Id
               * @description The id of the goal which encompasses this milestone.
               * @default null
               */
              employeeGoalId: number | null;
              /**
               * End Value
               * @description The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              endValue: number | null;
              /**
               * Id
               * @description The id of the milestone.
               * @default null
               */
              id: number | null;
              /**
               * Last Update Date Date Time
               * @description The date and time in which the goal was last updated.
               * @default null
               */
              lastUpdateDateDateTime: string | null;
              /**
               * Last Update User Id
               * @description The ID of the user who last updated this milestone.
               * @default null
               */
              lastUpdateUserId: number | null;
              /**
               * Start Value
               * @description The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              startValue: number | null;
              /**
               * Title
               * @description The title of the milestone.
               * @default null
               */
              title: string | null;
          }[] | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Persons
       * @description A list of people with access to the goal.
       * @default null
       */
      persons: {
          /**
           * Display First Name
           * @description First name of the person.
           * @default null
           */
          displayFirstName: string | null;
          /**
           * Employee Id
           * @description The id of this employee.
           * @default null
           */
          employeeId: number | null;
          /**
           * Last Name
           * @description Last name of the person.
           * @default null
           */
          lastName: string | null;
          /**
           * Photo Url
           * @description url of the user profile image.
           * @default null
           */
          photoUrl: string | null;
          /**
           * User Id
           * @description The user id of the person if applicable.
           * @default null
           */
          userId: number | null;
      }[] | null;
      /**
       * Selected Filter
       * @description The id of the current selected filter.
       * @default null
       */
      selectedFilter: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS tool input.
 */
type BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employeeid
   * @description {employeeid} is the employee ID. Supplying this ID limits the response to the specific employee.
   */
  employeeid?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS tool output.
 */
type BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_COMPANY_FILE tool input.
 */
type BAMBOOHR_GET_AN_COMPANY_FILE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * File Id
   * @description {fileId} is the ID of the company file being retrieved.
   */
  fileId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_COMPANY_FILE tool output.
 */
type BAMBOOHR_GET_AN_COMPANY_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_FILE tool input.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_FILE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * File Id
   * @description {fileId} is the ID of the employee file being retrieved.
   */
  fileId?: string;
  /**
   * Id
   * @description {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_FILE tool output.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_PHOTO tool input.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_PHOTO_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description The ID for the employee you are getting the photo for.
   */
  employeeId?: string;
  /**
   * Size
   * @description Photo size
   * @enum {string}
   */
  size?: "large" | "medium" | "original" | "tiny" | "xs";
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_PHOTO tool output.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_PHOTO_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS tool input.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS tool output.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION tool input.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION tool output.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB tool input.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the paystub (record) ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB tool output.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS tool input.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS tool output.
 */
type BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_HOUR_RECORD tool input.
 */
type BAMBOOHR_GET_AN_HOUR_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the time tracking ID used to originally create the record.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_AN_HOUR_RECORD tool output.
 */
type BAMBOOHR_GET_AN_HOUR_RECORD_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_APPLICATIONS tool input.
 */
type BAMBOOHR_GET_APPLICATIONS_INPUT = {
  /**
   * Application Status
   * @description A list of application status groups to filter by.
   * @enum {string}
   */
  applicationStatus?: "ACTIVE" | "ALL" | "ALL_ACTIVE" | "HIRED" | "INACTIVE" | "NEW";
  /**
   * Application Status Id
   * @description Application status id to filter by.
   */
  applicationStatusId?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Job Id
   * @description A Job Id to limit results to
   */
  jobId?: number;
  /**
   * Job Status Groups
   * @description A list of position status groups to filter by.
   * @enum {string}
   */
  jobStatusGroups?: "ALL" | "Canceled" | "DRAFT_AND_OPEN" | "Deleted" | "Draft" | "Filled" | "On Hold" | "Open";
  /**
   * New Since
   * @description Only get applications newer than a given UTC timestamp, for example 2024-01-01 13:00:00
   */
  newSince?: string;
  /**
   * Page
   * @description The page number
   */
  page?: number;
  /**
   * Search String
   * @description A general search criteria by which to find applications.
   */
  searchString?: string;
  /**
   * Sort By
   * @description A specific field to sort the results by.
   * @enum {string}
   */
  sortBy?: "created_date" | "first_name" | "job_title" | "last_updated" | "phone" | "rating" | "status";
  /**
   * Sort Order
   * @description Order by which to sort results.
   * @enum {string}
   */
  sortOrder?: "ASC" | "DESC";
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_APPLICATIONS tool output.
 */
type BAMBOOHR_GET_APPLICATIONS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Applications
       * @default null
       */
      applications: {
          /**
           * Applicant
           * @default null
           */
          applicant: {
              /**
               * Avatar
               * @default null
               */
              avatar: string | null;
              /**
               * First Name
               * @default null
               */
              firstName: string | null;
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Last Name
               * @default null
               */
              lastName: string | null;
          } | null;
          /**
           * Applied Date
           * @default null
           */
          appliedDate: string | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Job
           * @default null
           */
          job: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Title
               * @default null
               */
              title: {
                  /**
                   * Id
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Label
                   * @default null
                   */
                  label: string | null;
              } | null;
          } | null;
          /**
           * Rating
           * @default null
           */
          rating: number | null;
          /**
           * Status
           * @default null
           */
          status: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Label
               * @default null
               */
              label: string | null;
          } | null;
      }[] | null;
      /**
       * Next Page Url
       * @default null
       */
      nextPageUrl: string | null;
      /**
       * Pagination Complete
       * @default null
       */
      paginationComplete: boolean | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_APPLICATION_DETAILS tool input.
 */
type BAMBOOHR_GET_APPLICATION_DETAILS_INPUT = {
  /**
   * Application Id
   * @description The ID of the application to look up details.
   */
  applicationId?: number;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_APPLICATION_DETAILS tool output.
 */
type BAMBOOHR_GET_APPLICATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Also Applied To Count
       * @default null
       */
      alsoAppliedToCount: number | null;
      /**
       * Applicant
       * @default null
       */
      applicant: {
          /**
           * Address
           * @default null
           */
          address: {
              /**
               * Address Line1
               * @default null
               */
              addressLine1: string | null;
              /**
               * Address Line2
               * @default null
               */
              addressLine2: string | null;
              /**
               * City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @default null
               */
              country: string | null;
              /**
               * State
               * @default null
               */
              state: string | null;
              /**
               * Zipcode
               * @default null
               */
              zipcode: string | null;
          } | null;
          /**
           * Available Start Date
           * @default null
           */
          availableStartDate: string | null;
          /**
           * Avatar
           * @default null
           */
          avatar: string | null;
          /**
           * Education
           * @default null
           */
          education: {
              /**
               * Institution
               * @default null
               */
              institution: string | null;
              /**
               * Level
               * @default null
               */
              level: {
                  /**
                   * Id
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Label
                   * @default null
                   */
                  label: string | null;
              } | null;
          } | null;
          /**
           * Email
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Last Name
           * @default null
           */
          lastName: string | null;
          /**
           * Linkedin Url
           * @default null
           */
          linkedinUrl: string | null;
          /**
           * Phone Number
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Website Url
           * @default null
           */
          websiteUrl: string | null;
      } | null;
      /**
       * Applied Date
       * @default null
       */
      appliedDate: string | null;
      /**
       * Comment Count
       * @default null
       */
      commentCount: number | null;
      /**
       * Cover Letter File Id
       * @default null
       */
      coverLetterFileId: number | null;
      /**
       * Desired Salary
       * @default null
       */
      desiredSalary: string | null;
      /**
       * Duplicate Application Count
       * @default null
       */
      duplicateApplicationCount: number | null;
      /**
       * Email Count
       * @default null
       */
      emailCount: number | null;
      /**
       * Id
       * @default null
       */
      id: number | null;
      /**
       * Job1
       * @default null
       */
      job: {
          /**
           * HiringLead
           * @default null
           */
          hiringLead: {
              /**
               * Avatar
               * @default null
               */
              avatar: string | null;
              /**
               * Employee Id
               * @default null
               */
              employeeId: number | null;
              /**
               * First Name
               * @default null
               */
              firstName: string | null;
              /**
               * JobTitle
               * @default null
               */
              jobTitle: {
                  /**
                   * Id
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Label
                   * @default null
                   */
                  label: string | null;
              } | null;
              /**
               * Last Name
               * @default null
               */
              lastName: string | null;
          } | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Title1
           * @default null
           */
          title: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Label
               * @default null
               */
              label: string | null;
          } | null;
      } | null;
      /**
       * Moved From
       * @default null
       */
      movedFrom: string | null;
      /**
       * MovedTo
       * @default null
       */
      movedTo: {
          /**
           * Application Id
           * @default null
           */
          applicationId: number | null;
          /**
           * Job
           * @default null
           */
          job: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Title
               * @default null
               */
              title: {
                  /**
                   * Id
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Label
                   * @default null
                   */
                  label: string | null;
              } | null;
          } | null;
      } | null;
      /**
       * Questions And Answers
       * @default null
       */
      questionsAndAnswers: {
          /**
           * Answer
           * @default null
           */
          answer: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Label
               * @default null
               */
              label: string | null;
          } | null;
          /**
           * Question
           * @default null
           */
          question: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Label
               * @default null
               */
              label: string | null;
          } | null;
      }[] | null;
      /**
       * Rating
       * @default null
       */
      rating: number | null;
      /**
       * Referred By
       * @default null
       */
      referredBy: string | null;
      /**
       * Resume File Id
       * @default null
       */
      resumeFileId: number | null;
      /**
       * Status
       * @default null
       */
      status: {
          /**
           * ChangedByUser
           * @default null
           */
          changedByUser: {
              /**
               * Avatar
               * @default null
               */
              avatar: string | null;
              /**
               * First Name
               * @default null
               */
              firstName: string | null;
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Last Name
               * @default null
               */
              lastName: string | null;
          } | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Label
           * @default null
           */
          label: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_CLOCK_ENTRY tool input.
 */
type BAMBOOHR_GET_A_CLOCK_ENTRY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of employee to whom the clock entry belongs.
   */
  employeeId?: string;
  /**
   * Id
   * @description the id to whom the clock entry belongs.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_CLOCK_ENTRY tool output.
 */
type BAMBOOHR_GET_A_CLOCK_ENTRY_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_COMPANY_BENEFIT tool input.
 */
type BAMBOOHR_GET_A_COMPANY_BENEFIT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the company benefit ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_COMPANY_BENEFIT tool output.
 */
type BAMBOOHR_GET_A_COMPANY_BENEFIT_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * BenefitType
       * @description Benefit type
       * @default null
       * @enum {string|null}
       */
      benefitType: "health" | "dental" | "vision" | "retirement" | "hsa" | "flex" | "life" | "disability" | "reimbursement" | "supplemental" | "other" | null;
      /**
       * Benefit Vendor Id
       * @description Benefit vendor ID
       * @default null
       */
      benefitVendorId: string | null;
      /**
       * Deduction Type Id
       * @description Deduction type ID
       * @default null
       */
      deductionTypeId: number | null;
      /**
       * Description
       * @description Description
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * Format: date
       * @description Benefit end date
       * @default null
       */
      endDate: string | null;
      /**
       * MeetAcaMin
       * @description Meets ACA minimum requirements
       * @default null
       */
      meetAcaMin: (("yes" | "no") | null) | null;
      /**
       * MinEssentialCoverage
       * @description Provides minimum essential coverage
       * @default null
       */
      minEssentialCoverage: (("yes" | "no") | null) | null;
      /**
       * Name
       * @description Name
       * @default null
       */
      name: string | null;
      /**
       * Plan Url
       * @description Plan url
       * @default null
       */
      planUrl: string | null;
      /**
       * Reimbursement Amount
       * @description Reimbursement amount
       * @default null
       */
      reimbursementAmount: number | null;
      /**
       * ReimbursementFrequency
       * @description Reimbursement frequency
       * @default null
       */
      reimbursementFrequency: (("pay period" | "month" | "quarter" | "year" | "one time") | null) | null;
      /**
       * SafeHarbor
       * @description Is a safe harbor
       * @default null
       */
      safeHarbor: (("yes" | "no") | null) | null;
      /**
       * Sso Login Url
       * @description SSO login url
       * @default null
       */
      ssoLoginUrl: string | null;
      /**
       * Sso Login Url Link Text
       * @description SSO login link text
       * @default null
       */
      ssoLoginUrlLinkText: string | null;
      /**
       * Start Date
       * Format: date
       * @description Benefit start date
       * @default null
       */
      startDate: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_DAILY_ENTRY tool input.
 */
type BAMBOOHR_GET_A_DAILY_ENTRY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of employee to whom the daily entry belongs.
   */
  employeeId?: string;
  /**
   * Id
   * @description the id to whom the daily entry belongs.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_DAILY_ENTRY tool output.
 */
type BAMBOOHR_GET_A_DAILY_ENTRY_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * BenefitType
       * @description Benefit type
       * @default null
       * @enum {string|null}
       */
      benefitType: "health" | "dental" | "vision" | "retirement" | "hsa" | "flex" | "life" | "disability" | "reimbursement" | "supplemental" | "other" | null;
      /**
       * Benefit Vendor Id
       * @description Benefit vendor ID
       * @default null
       */
      benefitVendorId: string | null;
      /**
       * Deduction Type Id
       * @description Deduction type ID
       * @default null
       */
      deductionTypeId: number | null;
      /**
       * Description
       * @description Description
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * Format: date
       * @description Benefit end date
       * @default null
       */
      endDate: string | null;
      /**
       * MeetAcaMin
       * @description Meets ACA minimum requirements
       * @default null
       */
      meetAcaMin: (("yes" | "no") | null) | null;
      /**
       * MinEssentialCoverage
       * @description Provides minimum essential coverage
       * @default null
       */
      minEssentialCoverage: (("yes" | "no") | null) | null;
      /**
       * Name
       * @description Name
       * @default null
       */
      name: string | null;
      /**
       * Plan Url
       * @description Plan url
       * @default null
       */
      planUrl: string | null;
      /**
       * Reimbursement Amount
       * @description Reimbursement amount
       * @default null
       */
      reimbursementAmount: number | null;
      /**
       * ReimbursementFrequency
       * @description Reimbursement frequency
       * @default null
       */
      reimbursementFrequency: (("pay period" | "month" | "quarter" | "year" | "one time") | null) | null;
      /**
       * SafeHarbor
       * @description Is a safe harbor
       * @default null
       */
      safeHarbor: (("yes" | "no") | null) | null;
      /**
       * Sso Login Url
       * @description SSO login url
       * @default null
       */
      ssoLoginUrl: string | null;
      /**
       * Sso Login Url Link Text
       * @description SSO login link text
       * @default null
       */
      ssoLoginUrlLinkText: string | null;
      /**
       * Start Date
       * Format: date
       * @description Benefit start date
       * @default null
       */
      startDate: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Can Be Aca Plan
       * @description Can the company benefit plan be an ACA plan.
       * @default null
       */
      canBeAcaPlan: boolean | null;
      /**
       * Can Co Exist Enrollment
       * @description Can the company benefit plan co-exist with an enrollment plan.
       * @default null
       */
      canCoExistEnrollment: boolean | null;
      /**
       * Is Reimbursement Plan
       * @description Is the company benefit plan a reimbursement plan.
       * @default null
       */
      isReimbursementPlan: boolean | null;
      /**
       * Name
       * @description The name of the company benefit plan.
       * @default null
       */
      name: string | null;
      /**
       * Slug
       * @description The unique identifier for the company benefit plan.
       * @default null
       */
      slug: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Filters  Company Benefit Id
   * @description Company Benefit Id
   */
  filters__companyBenefitId?: number;
  /**
   * Filters  Employee Id
   * @description Employee Id
   */
  filters__employeeId?: number;
  /**
   * Filters  Enrollment Status Effective Date
   * Format: date
   * @description Enrollment Status Effective Date
   */
  filters__enrollmentStatusEffectiveDate?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Benefit Plan Coverage Id
       * @description Benefit Plan Coverage ID
       * @default null
       */
      benefitPlanCoverageId: number | null;
      /**
       * Company Amount
       * @description Company amount
       * @default null
       */
      companyAmount: number | null;
      /**
       * Company Amount Type
       * @description Company amount type
       * @default null
       */
      companyAmountType: string | null;
      /**
       * Company Annual Max
       * @description Company annual max
       * @default null
       */
      companyAnnualMax: number | null;
      /**
       * Company Benefit Id
       * @description Company benefit ID
       * @default null
       */
      companyBenefitId: number | null;
      /**
       * Company Benefit Name
       * @description Company benefit name
       * @default null
       */
      companyBenefitName: string | null;
      /**
       * Company Cap Amount
       * @description Company cap amount
       * @default null
       */
      companyCapAmount: number | null;
      /**
       * Company Cap Amount Type
       * @description Company cap amount type
       * @default null
       */
      companyCapAmountType: string | null;
      /**
       * Company Percent Based On
       * @description Company percent based on
       * @default null
       */
      companyPercentBasedOn: string | null;
      /**
       * Coverage Level
       * @description Coverage level
       * @default null
       */
      coverageLevel: string | null;
      /**
       * Currency Code
       * @description Currency code
       * @default null
       */
      currencyCode: string | null;
      /**
       * Deduction End Date
       * Format: date
       * @description Deduction end date
       * @default null
       */
      deductionEndDate: string | null;
      /**
       * Deduction Start Date
       * Format: date
       * @description Deduction start date
       * @default null
       */
      deductionStartDate: string | null;
      /**
       * Effective Date
       * Format: date
       * @description Enrollment status effective date
       * @default null
       */
      effectiveDate: string | null;
      /**
       * Employee Amount
       * @description Employee amount
       * @default null
       */
      employeeAmount: number | null;
      /**
       * Employee Amount Type
       * @description Employee amount type
       * @default null
       */
      employeeAmountType: string | null;
      /**
       * Employee Annual Max
       * @description Employee annual max
       * @default null
       */
      employeeAnnualMax: number | null;
      /**
       * Employee Cap Amount
       * @description Employee cap amount
       * @default null
       */
      employeeCapAmount: number | null;
      /**
       * Employee Cap Amount Type
       * @description Employee cap amount type
       * @default null
       */
      employeeCapAmountType: string | null;
      /**
       * Employee Id
       * @description Employee ID
       * @default null
       */
      employeeId: number | null;
      /**
       * Employee Percent Based On
       * @description Employee percent based on
       * @default null
       */
      employeePercentBasedOn: string | null;
      /**
       * EnrollmentStatus
       * @description Enrollment status
       * @default null
       * @enum {string|null}
       */
      enrollmentStatus: "Eligible" | "Enrolled" | "Waived" | "Withdrawn" | "Terminated" | "Ineligible" | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_FIELDS tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_FIELDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_FIELDS tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_FIELDS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_USERS tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_USERS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_USERS tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_USERS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT tool input.
 */
type BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * End
   * @description A date in the form YYYY-MM-DD - defaults to 14 days from the start date.
   */
  end?: string;
  /**
   * Start
   * @description A date in the form YYYY-MM-DD - defaults to the current date.
   */
  start?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT tool output.
 */
type BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE tool input.
 */
type BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of employee to whom the timesheet belongs.
   */
  employeeId?: string;
  /**
   * Timesheet Id
   * @description timesheetId is the id to whom the timesheet belongs.
   */
  timesheetId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE tool output.
 */
type BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_COVERAGES tool input.
 */
type BAMBOOHR_GET_BENEFIT_COVERAGES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_COVERAGES tool output.
 */
type BAMBOOHR_GET_BENEFIT_COVERAGES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE tool input.
 */
type BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE tool output.
 */
type BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES tool input.
 */
type BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES tool output.
 */
type BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUPS tool input.
 */
type BAMBOOHR_GET_BENEFIT_GROUPS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUPS tool output.
 */
type BAMBOOHR_GET_BENEFIT_GROUPS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES tool input.
 */
type BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES tool output.
 */
type BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUP_PLANS tool input.
 */
type BAMBOOHR_GET_BENEFIT_GROUP_PLANS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUP_PLANS tool output.
 */
type BAMBOOHR_GET_BENEFIT_GROUP_PLANS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS tool input.
 */
type BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS tool output.
 */
type BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_PLANS tool input.
 */
type BAMBOOHR_GET_BENEFIT_PLANS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_PLANS tool output.
 */
type BAMBOOHR_GET_BENEFIT_PLANS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES tool input.
 */
type BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES tool output.
 */
type BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE tool input.
 */
type BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE tool output.
 */
type BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_COMPANY_LOCATIONS tool input.
 */
type BAMBOOHR_GET_COMPANY_LOCATIONS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_COMPANY_LOCATIONS tool output.
 */
type BAMBOOHR_GET_COMPANY_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Location
       * @default null
       */
      location: {
          /**
           * Address Line1
           * @description The first address line of the location
           * @default null
           */
          addressLine1: string | null;
          /**
           * Address Line2
           * @description The second address line of the location
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the location
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @default null
           */
          country: {
              /**
               * Id
               * @description The ID of the country
               * @default null
               */
              id: number | null;
              /**
               * Iso Code
               * @description The ISO standard code of the country
               * @default null
               */
              iso_code: string | null;
              /**
               * Name
               * @description The name of the country
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Description
           * @description Description of the location
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The ID of the location
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name of the location
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description The phone number of the location
           * @default null
           */
          phone: string | null;
          /**
           * State
           * @default null
           */
          state: {
              /**
               * Abbrev
               * @description The abbreviation of the state
               * @default null
               */
              abbrev: string | null;
              /**
               * Id
               * @description The ID of the state
               * @default null
               */
              id: number | null;
              /**
               * Iso Code
               * @description The ISO standard code of the state
               * @default null
               */
              iso_code: string | null;
              /**
               * Name
               * @description The name of the state
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Zipcode
           * @description The ZIP or postal code of the location
           * @default null
           */
          zipcode: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_COMPANY_REPORT tool input.
 */
type BAMBOOHR_GET_COMPANY_REPORT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Fd
   * @description yes=apply standard duplicate field filtering, no=return the raw results with no duplicate filtering. Default value is "yes"
   */
  fd?: string;
  /**
   * Format
   * @description The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON
   */
  format?: string;
  /**
   * Id
   * @description {id} is a report ID.
   */
  id?: string;
  /**
   * Only Current
   * @description Setting to false will return future dated values from history table fields.
   * @default true
   */
  onlyCurrent: boolean;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_COMPANY_REPORT tool output.
 */
type BAMBOOHR_GET_COMPANY_REPORT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS tool input.
 */
type BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS tool output.
 */
type BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE tool input.
 */
type BAMBOOHR_GET_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Fields
   * @description {fields} is a comma separated list of values taken from the official list of field names.
   */
  fields?: string;
  /**
   * Id
   * @description {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
   */
  id?: string;
  /**
   * Only Current
   * @description Setting to false will return future dated values from history table fields.
   * @default true
   */
  onlyCurrent: boolean;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE tool output.
 */
type BAMBOOHR_GET_EMPLOYEE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Id
       * @description The ID of the employee
       * @default null
       */
      id: string | null;
  } & {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN tool input.
 */
type BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the benefit plan ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN tool output.
 */
type BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_DEPENDENT tool input.
 */
type BAMBOOHR_GET_EMPLOYEE_DEPENDENT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee dependent ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_DEPENDENT tool output.
 */
type BAMBOOHR_GET_EMPLOYEE_DEPENDENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_DIRECTORY tool input.
 */
type BAMBOOHR_GET_EMPLOYEE_DIRECTORY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_DIRECTORY tool output.
 */
type BAMBOOHR_GET_EMPLOYEE_DIRECTORY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Id
       * @description The ID of the employee
       * @default null
       */
      id: string | null;
  } & {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_PROJECTS tool input.
 */
type BAMBOOHR_GET_EMPLOYEE_PROJECTS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of the employee to retrieve projects for.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_PROJECTS tool output.
 */
type BAMBOOHR_GET_EMPLOYEE_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Id
       * @description ID of the project.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the project.
       * @default null
       */
      name: string | null;
      /**
       * Tasks
       * @description A list of time tracking tasks for the project.
       * @default null
       */
      tasks: {
          /**
           * Id
           * @description ID of the task.
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name of the task.
           * @default null
           */
          name: string | null;
      }[] | null;
  }[][];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS tool input.
 */
type BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS tool output.
 */
type BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_GOALS tool input.
 */
type BAMBOOHR_GET_GOALS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID to whom the goals are assigned.
   */
  employeeId?: string;
  /**
   * Filter
   * @description A filter that can be applied to only show the goals that are in a certain state.
   */
  filter?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_GOALS tool output.
 */
type BAMBOOHR_GET_GOALS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Goals
       * @description All goals of the selected employee
       * @default null
       */
      goals: {
          /**
           * Actions
           * @description Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.
           * @default null
           */
          actions: {
              /**
               * Can Edit Goal Milestone Progress Bar
               * @description can the user edit the progress of a milestone in this goal.
               * @default null
               */
              canEditGoalMilestoneProgressBar: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can the user edit the progress bar of this goal.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
          } | null;
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Milestones
           * @description All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.
           * @default null
           */
          milestones: {
              /**
               * Completed Date Time
               * @description The date and time in which the goal has been completed. If the goal is not completed the value will be null.
               * @default null
               */
              completedDateTime: string | null;
              /**
               * Current Value
               * @description The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              currentValue: number | null;
              /**
               * Employee Goal Id
               * @description The id of the goal which encompasses this milestone.
               * @default null
               */
              employeeGoalId: number | null;
              /**
               * End Value
               * @description The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              endValue: number | null;
              /**
               * Id
               * @description The id of the milestone.
               * @default null
               */
              id: number | null;
              /**
               * Last Update Date Date Time
               * @description The date and time in which the goal was last updated.
               * @default null
               */
              lastUpdateDateDateTime: string | null;
              /**
               * Last Update User Id
               * @description The ID of the user who last updated this milestone.
               * @default null
               */
              lastUpdateUserId: number | null;
              /**
               * Start Value
               * @description The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
               * @default null
               */
              startValue: number | null;
              /**
               * Title
               * @description The title of the milestone.
               * @default null
               */
              title: string | null;
          }[] | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_GOAL_COMMENTS tool input.
 */
type BAMBOOHR_GET_GOAL_COMMENTS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_GOAL_COMMENTS tool output.
 */
type BAMBOOHR_GET_GOAL_COMMENTS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_GOAL_STATUS_COUNTS tool input.
 */
type BAMBOOHR_GET_GOAL_STATUS_COUNTS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID to whom the goals are assigned.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_GOAL_STATUS_COUNTS tool output.
 */
type BAMBOOHR_GET_GOAL_STATUS_COUNTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Filters
       * @description All the goals of the user seperated by filter.
       * @default null
       */
      filters: {
          /**
           * Count
           * @description Count of the goals with that filter.
           * @default null
           */
          count: number | null;
          /**
           * Id
           * @description Id of the filter.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the filter.
           * @default null
           */
          name: string | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11 tool input.
 */
type BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID to whom the goals are assigned.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11 tool output.
 */
type BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Filters
       * @description All the goals of the user seperated by filter.
       * @default null
       */
      filters: {
          /**
           * Actions
           * @description What actions a user can preform on this kind of goal.
           * @default null
           */
          actions: {
              /**
               * Can Close Goal
               * @description Can a goal be closed in this state.
               * @default null
               */
              canCloseGoal: boolean | null;
              /**
               * Can Edit Goal
               * @description Can a goal be edited in this state.
               * @default null
               */
              canEditGoal: boolean | null;
              /**
               * Can Edit Goal Progress Bar
               * @description Can a goal progress bar be edited in this state.
               * @default null
               */
              canEditGoalProgressBar: boolean | null;
              /**
               * Can Reopen Goal
               * @description Can a goal be reopened in this state.
               * @default null
               */
              canReopenGoal: boolean | null;
              /**
               * Can Share Goal
               * @description Can a goal be shared in this state.
               * @default null
               */
              canShareGoal: boolean | null;
          } | null;
          /**
           * Count
           * @description Count of the goals with that filter.
           * @default null
           */
          count: number | null;
          /**
           * Id
           * @description Id of the filter.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the filter.
           * @default null
           */
          name: string | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_HIRING_LEADS tool input.
 */
type BAMBOOHR_GET_HIRING_LEADS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_HIRING_LEADS tool output.
 */
type BAMBOOHR_GET_HIRING_LEADS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * HiringLead
       * @default null
       */
      hiringLead: {
          /**
           * Employee Id
           * @description The employeeId of the potential hiring lead
           * @default null
           */
          employeeId: number | null;
          /**
           * Preferred Full Name
           * @description The preferred full name of the potential hiring lead
           * @default null
           */
          preferredFullName: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_JOB_SUMMARIES tool input.
 */
type BAMBOOHR_GET_JOB_SUMMARIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Sort By
   * @description A specific field to sort the results by.
   * @enum {string}
   */
  sortBy?: "count" | "created" | "lead" | "status" | "title";
  /**
   * Sort Order
   * @description Order by which to sort results.
   * @enum {string}
   */
  sortOrder?: "ASC" | "DESC";
  /**
   * Status Groups
   * @description A list of status groups to filter positions by.
   * @enum {string}
   */
  statusGroups?: "ALL" | "Canceled" | "DRAFT_AND_OPEN" | "Deleted" | "Draft" | "Filled" | "On Hold" | "Open";
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_JOB_SUMMARIES tool output.
 */
type BAMBOOHR_GET_JOB_SUMMARIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Active Applicants Count
       * @default null
       */
      activeApplicantsCount: number | null;
      /**
       * Department
       * @default null
       */
      department: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Label
           * @default null
           */
          label: string | null;
      } | null;
      /**
       * Id
       * @default null
       */
      id: number | null;
      /**
       * Location
       * @default null
       */
      location: {
          /**
           * Address
           * @default null
           */
          address: {
              /**
               * Address Line1
               * @default null
               */
              addressLine1: string | null;
              /**
               * Address Line2
               * @default null
               */
              addressLine2: string | null;
              /**
               * City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @default null
               */
              country: string | null;
              /**
               * Description
               * @default null
               */
              description: string | null;
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Phone Number
               * @default null
               */
              phoneNumber: string | null;
              /**
               * State
               * @default null
               */
              state: string | null;
              /**
               * Zipcode
               * @default null
               */
              zipcode: string | null;
          } | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Label
           * @default null
           */
          label: string | null;
      } | null;
      /**
       * New Applicants Count
       * @default null
       */
      newApplicantsCount: number | null;
      /**
       * Posted Date
       * @default null
       */
      postedDate: string | null;
      /**
       * Posting Url
       * @default null
       */
      postingUrl: string | null;
      /**
       * Status
       * @default null
       */
      status: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Label
           * @default null
           */
          label: string | null;
      } | null;
      /**
       * Title
       * @default null
       */
      title: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Label
           * @default null
           */
          label: string | null;
      } | null;
      /**
       * Total Applicants Count
       * @default null
       */
      totalApplicantsCount: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_MONITOR_FIELDS tool input.
 */
type BAMBOOHR_GET_MONITOR_FIELDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_MONITOR_FIELDS tool output.
 */
type BAMBOOHR_GET_MONITOR_FIELDS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @default null
       */
      fields: {
          /**
           * Alias
           * @default null
           */
          alias: string | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
      }[] | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO tool input.
 */
type BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of the employee to whom the projects belong.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO tool output.
 */
type BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_STATUSES tool input.
 */
type BAMBOOHR_GET_STATUSES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_STATUSES tool output.
 */
type BAMBOOHR_GET_STATUSES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Code
       * @default null
       */
      code: string | null;
      /**
       * Description
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @default null
       */
      enabled: boolean | null;
      /**
       * Id
       * @default null
       */
      id: string | null;
      /**
       * Manageable
       * @default null
       */
      manageable: boolean | null;
      /**
       * Name
       * @default null
       */
      name: string | null;
      /**
       * Translated Name
       * @default null
       */
      translatedName: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_TASKS_FOR_A_PROJECT tool input.
 */
type BAMBOOHR_GET_TASKS_FOR_A_PROJECT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of the employee to whom the projects belong.
   */
  employeeId?: string;
  /**
   * Project Id
   * @description id of the project to which the tasks belong.
   */
  projectId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_TASKS_FOR_A_PROJECT tool output.
 */
type BAMBOOHR_GET_TASKS_FOR_A_PROJECT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_TIMESHEETS_BY_IDS tool input.
 */
type BAMBOOHR_GET_TIMESHEETS_BY_IDS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Timesheets
   * @description Comma separated list of timesheet ids
   */
  timesheets?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_TIMESHEETS_BY_IDS tool output.
 */
type BAMBOOHR_GET_TIMESHEETS_BY_IDS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_TIMESHEET_ENTRIES tool input.
 */
type BAMBOOHR_GET_TIMESHEET_ENTRIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Ids
   * @description A comma separated list of employee IDs. When specified, only entries that match these employee IDs are returned.
   */
  employeeIds?: string;
  /**
   * End
   * @description YYYY-MM-DD. Only show timesheet entries on/before the specified end date. Must be within the last 365 days.
   */
  end?: string;
  /**
   * Start
   * @description YYYY-MM-DD. Only show timesheet entries on/after the specified start date. Must be within the last 365 days.
   */
  start?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_TIMESHEET_ENTRIES tool output.
 */
type BAMBOOHR_GET_TIMESHEET_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Approved
       * @description Approval status of the timesheet for the entry.
       * @default null
       */
      approved: boolean | null;
      /**
       * Approved At
       * @description Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.
       * @default null
       */
      approvedAt: string | null;
      /**
       * Employee Id
       * @description ID of the employee associated with the entry.
       * @default null
       */
      employeeId: number | null;
      /**
       * End
       * @description Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.
       * @default null
       */
      end: string | null;
      /**
       * Hours
       * @description The number of hours for the entry. This value has a maximum scale of 4. Property can be null.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description ID of the entry.
       * @default null
       */
      id: number | null;
      /**
       * Note
       * @description The note associated with the entry. Property can be null.
       * @default null
       */
      note: string | null;
      /**
       * ProjectInfo
       * @default null
       */
      projectInfo: {
          /**
           * Project
           * @default null
           */
          project: {
              /**
               * Id
               * @description ID of the project.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the project.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Task
           * @default null
           */
          task: {
              /**
               * Id
               * @description ID of the task.
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the task.
               * @default null
               */
              name: string | null;
          } | null;
      } | null;
      /**
       * Start
       * @description Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.
       * @default null
       */
      start: string | null;
      /**
       * Timezone
       * @description The timezone the clock entry was recorded in. Property can be null.
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description type of the entry.
       * @default null
       * @enum {string|null}
       */
      type: "hour" | "clock" | null;
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
 * Type of BAMBOOHR's BAMBOOHR_GET_TIME_OFF_POLICIES tool input.
 */
type BAMBOOHR_GET_TIME_OFF_POLICIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_TIME_OFF_POLICIES tool output.
 */
type BAMBOOHR_GET_TIME_OFF_POLICIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_TIME_OFF_REQUESTS tool input.
 */
type BAMBOOHR_GET_TIME_OFF_REQUESTS_INPUT = {
  /**
   * Action
   * @description Limit to requests that the user has a particular level of access to. Legal values are: "view" or "approve". Defaults to view.
   */
  action?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description A particular employee ID to limit the response to.
   */
  employeeId?: string;
  /**
   * End
   * @description YYYY-MM-DD. Only show time off that occurs on/before the specified end date.
   */
  end?: string;
  /**
   * Id
   * @description A particular request ID to limit the response to.
   */
  id?: number;
  /**
   * Start
   * @description YYYY-MM-DD. Only show time off that occurs on/after the specified start date.
   */
  start?: string;
  /**
   * Status
   * @description A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are "approved", "denied", "superceded", "requested", "canceled".
   */
  status?: string;
  /**
   * Type
   * @description A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included.
   */
  type?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_TIME_OFF_REQUESTS tool output.
 */
type BAMBOOHR_GET_TIME_OFF_REQUESTS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_TIME_OFF_TYPES tool input.
 */
type BAMBOOHR_GET_TIME_OFF_TYPES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Mode
   * @description set to "request" to get a list of all time off types with which this user can create a time off request. The default is to return the list of time off types the user has permissions on. This distinction is important, as employees can request time off for types that they don"t have permission to view balances and requests for.
   */
  mode?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_TIME_OFF_TYPES tool output.
 */
type BAMBOOHR_GET_TIME_OFF_TYPES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_GET_WEBHOOK tool input.
 */
type BAMBOOHR_GET_WEBHOOK_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description The webhook ID to display details about.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_WEBHOOK tool output.
 */
type BAMBOOHR_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Created
       * @description timestamp of creation
       * @default null
       */
      created: string | null;
      /**
       * Format
       * @description The format the webhook should use (json, form-encoded).
       * @default null
       */
      format: string | null;
      /**
       * Frequency
       * @description How often the webhook could fire.
       * @default null
       */
      frequency: {
          /**
           * Day
           * @description The day to potentially fire
           * @default null
           */
          day: number | null;
          /**
           * Hour
           * @description The hour to potentially fire.
           * @default null
           */
          hour: number | null;
          /**
           * Minute
           * @description The minute to potentially fire
           * @default null
           */
          minute: number | null;
          /**
           * Month
           * @description The month to potentially fire
           * @default null
           */
          month: unknown;
      } | null;
      /**
       * Id
       * @description The id of the webhook.
       * @default null
       */
      id: number | null;
      /**
       * Include Company Domain
       * @description If set to true, the company domain will be added to the header.
       * @default null
       */
      includeCompanyDomain: boolean | null;
      /**
       * Last Sent
       * @description timestamp of last webhook sent
       * @default null
       */
      lastSent: string | null;
      /**
       * Limit
       * @description To limit how often to potentially fire a webhook, and maximum amount of records to send
       * @default null
       */
      limit: {
          /**
           * Seconds
           * @description The minimum amount of seconds between requests
           * @default null
           */
          seconds: number | null;
          /**
           * Times
           * @description The amount of records to send
           * @default null
           */
          times: number | null;
      } | null;
      /**
       * Monitor Fields
       * @description A list of fields to monitor.
       * @default null
       */
      monitorFields: string[] | null;
      /**
       * Name
       * @description The name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Post Fields
       * @description A list of fields to post to the webhook url. Field ID or alias: external name
       * @default null
       */
      postFields: {
          [key: string]: string;
      } | null;
      /**
       * Url
       * @description The url the webhook should send data to.
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
 * Type of BAMBOOHR's BAMBOOHR_GET_WEBHOOK_LOGS tool input.
 */
type BAMBOOHR_GET_WEBHOOK_LOGS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description The webhook ID to get logs about.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_GET_WEBHOOK_LOGS tool output.
 */
type BAMBOOHR_GET_WEBHOOK_LOGS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Employee Ids
       * @description A list of employee ids that were changed.
       * @default null
       */
      employeeIds: number[] | null;
      /**
       * Failure Count
       * @description Count of how many times this call failed since last success
       * @default null
       */
      failureCount: number | null;
      /**
       * Last Attempted
       * @description timestamp of last time the webhook was sent
       * @default null
       */
      lastAttempted: string | null;
      /**
       * Last Success
       * @description timestamp of last time the webhook was sent successfully
       * @default null
       */
      lastSuccess: string | null;
      /**
       * Status
       * @description Status code of last request
       * @default null
       */
      status: number | null;
      /**
       * Url
       * @description The URL of the webhook.
       * @default null
       */
      url: string | null;
      /**
       * Webhook Id
       * @description The id of the webhook.
       * @default null
       */
      webhookId: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN tool input.
 */
type BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description id of employee to whom the clock entry belongs.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN tool output.
 */
type BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES tool input.
 */
type BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES tool output.
 */
type BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES tool input.
 */
type BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES tool output.
 */
type BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_EMPLOYEE_TRAININGS tool input.
 */
type BAMBOOHR_LIST_EMPLOYEE_TRAININGS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description The ID of the employee to get a list of trainings for.
   */
  employeeId?: number;
  /**
   * Training Type Id
   * @description The training type id is optional. Not supplying a training type id will return the collection of all training records for the employee.
   * @default 0
   */
  trainingTypeId: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_EMPLOYEE_TRAININGS tool output.
 */
type BAMBOOHR_LIST_EMPLOYEE_TRAININGS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * TrainingId
       * @default null
       */
      trainingId: {
          /**
           * Completed
           * @description Completed is a date in the format yyyy-mm-dd.
           * @default null
           */
          completed: string | null;
          /**
           * Cost
           * @description The currency and cost for the training record.
           * @default null
           */
          cost: string | null;
          /**
           * Credits
           * @description What was credited for the training record.
           * @default null
           */
          credits: number | null;
          /**
           * Employee Id
           * @description The ID of the employee associated with the training.
           * @default null
           */
          employeeId: number | null;
          /**
           * Hours
           * @description Hours associated with the training record.
           * @default null
           */
          hours: number | null;
          /**
           * Id
           * @description The ID of the training record.
           * @default null
           */
          id: number | null;
          /**
           * Instructor
           * @description Name of the instructor.
           * @default null
           */
          instructor: string | null;
          /**
           * Notes
           * @description Notes left on the training record.
           * @default null
           */
          notes: string | null;
          /**
           * Type
           * @description The training type ID.
           * @default null
           */
          type: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE tool input.
 */
type BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description Employeeid
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE tool output.
 */
type BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11 tool input.
 */
type BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description Employeeid
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11 tool output.
 */
type BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_TRAINING_CATEGORIES tool input.
 */
type BAMBOOHR_LIST_TRAINING_CATEGORIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_TRAINING_CATEGORIES tool output.
 */
type BAMBOOHR_LIST_TRAINING_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * CategoryId
       * @description The category ID and name
       * @default null
       */
      categoryId: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_LIST_TRAINING_TYPES tool input.
 */
type BAMBOOHR_LIST_TRAINING_TYPES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_LIST_TRAINING_TYPES tool output.
 */
type BAMBOOHR_LIST_TRAINING_TYPES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * TrainingId
       * @default null
       */
      trainingId: {
          /**
           * Allow Employees To Mark Complete
           * @description Allows all employees who can view the training to be able to mark it complete.
           * @default null
           */
          allowEmployeesToMarkComplete: boolean | null;
          /**
           * Category
           * @description The category ID and name
           * @default null
           */
          category: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Description
           * @description Description for the training.
           * @default null
           */
          description: string | null;
          /**
           * Due From Hire Date
           * @description Number of days before the training is due for new hires. Not valid if training is not required.
           * @default null
           */
          dueFromHireDate: number | null;
          /**
           * Frequency
           * @description The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.
           * @default null
           */
          frequency: number | null;
          /**
           * Id
           * @description The ID of the training
           * @default null
           */
          id: number | null;
          /**
           * Link Url
           * @description Optional URL that can be included with a training.
           * @default null
           */
          linkUrl: string | null;
          /**
           * Name
           * @description Name of the training type.
           * @default null
           */
          name: string | null;
          /**
           * Renewable
           * @description If true, training will be renewed based off of frequency.
           * @default null
           */
          renewable: boolean | null;
          /**
           * Required
           * @description Is this a required training?
           * @default null
           */
          required: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_MODIFIES_ROW_CONTENTS tool input.
 */
type BAMBOOHR_MODIFIES_ROW_CONTENTS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Date */
  date?: string;
  /** Department */
  department?: string;
  /** Division */
  division?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
  /** Job Title */
  jobTitle?: string;
  /** Location */
  location?: string;
  /** Reports To */
  reportsTo?: string;
  /**
   * Row Id
   * @description Row ID
   */
  rowId?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_MODIFIES_ROW_CONTENTS tool output.
 */
type BAMBOOHR_MODIFIES_ROW_CONTENTS_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_REOPEN_A_GOAL tool input.
 */
type BAMBOOHR_REOPEN_A_GOAL_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_REOPEN_A_GOAL tool output.
 */
type BAMBOOHR_REOPEN_A_GOAL_OUTPUT = {
  /**
   * Data
   * @description The response schema
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
 * Type of BAMBOOHR's BAMBOOHR_REQUEST_A_CUSTOM_REPORT tool input.
 */
type BAMBOOHR_REQUEST_A_CUSTOM_REPORT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Fields */
  fields?: string[];
  /**
   * Filters  Last Changed  Include Null
   * @description yes|no
   */
  filters__lastChanged__includeNull?: string;
  /**
   * Filters  Last Changed  Value
   * @description Date last changed
   */
  filters__lastChanged__value?: string;
  /**
   * Format
   * @description The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON
   */
  format?: string;
  /**
   * Only Current
   * @description Limits the report to only current employees. Setting to false will include future-dated employees in the report.
   * @default true
   */
  onlyCurrent: boolean;
  /** Title */
  title?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_REQUEST_A_CUSTOM_REPORT tool output.
 */
type BAMBOOHR_REQUEST_A_CUSTOM_REPORT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO tool input.
 */
type BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description The ID for the employee you are setting the photo for.
   */
  employeeId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO tool output.
 */
type BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_STORE_CLOCK_ENTRIES tool input.
 */
type BAMBOOHR_STORE_CLOCK_ENTRIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Entries
   * @description Entries
   */
  entries?: {
      /**
       * Clock Entry Id
       * @description id of existing time entry. used when updating time entry
       */
      clockEntryId?: number;
      /**
       * Date
       * @description date of the time entry
       */
      date?: string;
      /**
       * Employee Id
       * @description employee id for the time entry
       */
      employeeId?: number;
      /**
       * End
       * @description 24 hour format (hh:mm) for end time
       */
      end?: string;
      /**
       * Note
       * @description Note
       */
      note?: string;
      /**
       * Project Id
       * @description The id of the project associated with the time entry
       */
      projectId?: number;
      /**
       * Start
       * @description 24 hour format (hh:mm) for start time
       */
      start?: string;
      /**
       * Task Id
       * @description The id of the task associated with the time entry
       */
      taskId?: number;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_STORE_CLOCK_ENTRIES tool output.
 */
type BAMBOOHR_STORE_CLOCK_ENTRIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_STORE_DAILY_ENTRIES tool input.
 */
type BAMBOOHR_STORE_DAILY_ENTRIES_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Entries
   * @description Entries
   */
  entries?: {
      /**
       * Daily Entry Id
       * @description The id of the daily entry if updating an existing entry
       */
      dailyEntryId?: number;
      /**
       * Date
       * @description date of the time entry
       */
      date?: string;
      /**
       * Employee Id
       * @description employee id for the time entry
       */
      employeeId?: number;
      /**
       * Hours
       * @description The number of hours for the time entry.
       */
      hours?: number;
      /**
       * Note
       * @description Note
       */
      note?: string;
      /**
       * Project Id
       * @description The id of the project associated with the time entry
       */
      projectId?: number;
      /**
       * Task Id
       * @description The id of the task associated with the time entry
       */
      taskId?: number;
  }[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_STORE_DAILY_ENTRIES tool output.
 */
type BAMBOOHR_STORE_DAILY_ENTRIES_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATES_A_TABLE_ROW tool input.
 */
type BAMBOOHR_UPDATES_A_TABLE_ROW_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Date */
  date?: string;
  /** Department */
  department?: string;
  /** Division */
  division?: string;
  /**
   * Id
   * @description {id} is the employee ID.
   */
  id?: string;
  /** Job Title */
  jobTitle?: string;
  /** Location */
  location?: string;
  /** Reports To */
  reportsTo?: string;
  /**
   * Row Id
   * @description Row ID
   */
  rowId?: string;
  /**
   * Table
   * @description Table name
   */
  table?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATES_A_TABLE_ROW tool output.
 */
type BAMBOOHR_UPDATES_A_TABLE_ROW_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT tool input.
 */
type BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT_INPUT = {
  /** Address Line1 */
  addressLine1?: string;
  /** Address Line2 */
  addressLine2?: string;
  /** City */
  city?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Country */
  country?: string;
  /** Date Of Birth */
  dateOfBirth?: string;
  /** Employee Id */
  employeeId?: string;
  /** First Name */
  firstName?: string;
  /** Gender */
  gender?: string;
  /** Home Phone */
  homePhone?: string;
  /**
   * Id
   * @description {id} is the employee dependent ID.
   */
  id?: string;
  /** Is Student */
  isStudent?: string;
  /** Is Us Citizen */
  isUsCitizen?: string;
  /** Last Name */
  lastName?: string;
  /** Middle Name */
  middleName?: string;
  /** Relationship */
  relationship?: string;
  /** Ssn */
  ssn?: string;
  /** State */
  state?: string;
  /** Zip Code */
  zipCode?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT tool output.
 */
type BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_A_COMPANY_BENEFIT tool input.
 */
type BAMBOOHR_UPDATE_A_COMPANY_BENEFIT_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is the company benefit ID.
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_A_COMPANY_BENEFIT tool output.
 */
type BAMBOOHR_UPDATE_A_COMPANY_BENEFIT_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * BenefitType
       * @description Benefit type
       * @default null
       * @enum {string|null}
       */
      benefitType: "health" | "dental" | "vision" | "retirement" | "hsa" | "flex" | "life" | "disability" | "reimbursement" | "supplemental" | "other" | null;
      /**
       * Benefit Vendor Id
       * @description Benefit vendor ID
       * @default null
       */
      benefitVendorId: string | null;
      /**
       * Deduction Type Id
       * @description Deduction type ID
       * @default null
       */
      deductionTypeId: number | null;
      /**
       * Description
       * @description Description
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * Format: date
       * @description Benefit end date
       * @default null
       */
      endDate: string | null;
      /**
       * MeetAcaMin
       * @description Meets ACA minimum requirements
       * @default null
       */
      meetAcaMin: (("yes" | "no") | null) | null;
      /**
       * MinEssentialCoverage
       * @description Provides minimum essential coverage
       * @default null
       */
      minEssentialCoverage: (("yes" | "no") | null) | null;
      /**
       * Name
       * @description Name
       * @default null
       */
      name: string | null;
      /**
       * Plan Url
       * @description Plan url
       * @default null
       */
      planUrl: string | null;
      /**
       * Reimbursement Amount
       * @description Reimbursement amount
       * @default null
       */
      reimbursementAmount: number | null;
      /**
       * ReimbursementFrequency
       * @description Reimbursement frequency
       * @default null
       */
      reimbursementFrequency: (("pay period" | "month" | "quarter" | "year" | "one time") | null) | null;
      /**
       * SafeHarbor
       * @description Is a safe harbor
       * @default null
       */
      safeHarbor: (("yes" | "no") | null) | null;
      /**
       * Sso Login Url
       * @description SSO login url
       * @default null
       */
      ssoLoginUrl: string | null;
      /**
       * Sso Login Url Link Text
       * @description SSO login link text
       * @default null
       */
      ssoLoginUrlLinkText: string | null;
      /**
       * Start Date
       * Format: date
       * @description Benefit start date
       * @default null
       */
      startDate: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_COMPANY_FILE tool input.
 */
type BAMBOOHR_UPDATE_COMPANY_FILE_INPUT = {
  /** Category Id */
  categoryId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * File Id
   * @description {fileId} is the ID of the employee file being updated.
   */
  fileId?: string;
  /** Name */
  name?: string;
  /** Share With Employee */
  shareWithEmployee?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_COMPANY_FILE tool output.
 */
type BAMBOOHR_UPDATE_COMPANY_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_EMPLOYEE tool input.
 */
type BAMBOOHR_UPDATE_EMPLOYEE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** First Name */
  firstName?: string;
  /**
   * Id
   * @description {id} is an employee ID.
   */
  id?: string;
  /** Last Name */
  lastName?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_EMPLOYEE tool output.
 */
type BAMBOOHR_UPDATE_EMPLOYEE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_EMPLOYEE_FILE tool input.
 */
type BAMBOOHR_UPDATE_EMPLOYEE_FILE_INPUT = {
  /** Category Id */
  categoryId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * File Id
   * @description {fileId} is the ID of the employee file being updated.
   */
  fileId?: string;
  /**
   * Id
   * @description {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
   */
  id?: string;
  /** Name */
  name?: string;
  /** Share With Employee */
  shareWithEmployee?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_EMPLOYEE_FILE tool output.
 */
type BAMBOOHR_UPDATE_EMPLOYEE_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD tool input.
 */
type BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Completed
   * @description Completed is the only required field and must be in yyyy-mm-dd format. The other parameters are optional.
   */
  completed?: string;
  /**
   * Cost  Cost
   * @description Cost
   */
  cost__cost?: number;
  /**
   * Cost  Currency
   * @description Currency
   */
  cost__currency?: string;
  /**
   * Credits
   * @description Credits
   */
  credits?: number;
  /**
   * Employee Training Record Id
   * @description The ID of the training record to update.
   */
  employeeTrainingRecordId?: number;
  /**
   * Hours
   * @description Hours
   */
  hours?: number;
  /**
   * Instructor
   * @description Instructor
   */
  instructor?: string;
  /**
   * Notes
   * @description Notes
   */
  notes?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD tool output.
 */
type BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Completed
       * @description Completed is a date in the format yyyy-mm-dd.
       * @default null
       */
      completed: string | null;
      /**
       * Cost
       * @description The currency and cost for the training record.
       * @default null
       */
      cost: string | null;
      /**
       * Credits
       * @description What was credited for the training record.
       * @default null
       */
      credits: number | null;
      /**
       * Employee Id
       * @description The ID of the employee associated with the training.
       * @default null
       */
      employeeId: number | null;
      /**
       * Hours
       * @description Hours associated with the training record.
       * @default null
       */
      hours: number | null;
      /**
       * Id
       * @description The ID of the training record.
       * @default null
       */
      id: number | null;
      /**
       * Instructor
       * @description Name of the instructor.
       * @default null
       */
      instructor: string | null;
      /**
       * Notes
       * @description Notes left on the training record.
       * @default null
       */
      notes: string | null;
      /**
       * Type
       * @description The training type ID.
       * @default null
       */
      type: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL tool input.
 */
type BAMBOOHR_UPDATE_GOAL_INPUT = {
  /**
   * Aligns With Option Id
   * @description The option ID that aligns with this goal.
   */
  alignsWithOptionId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Completion Date
   * @description The date the goal was completed.
   */
  completionDate?: number;
  /**
   * Description
   * @description The goal description.
   */
  description?: string;
  /**
   * Due Date
   * @description The goal due date in YYYY-mm-dd format.
   */
  dueDate?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
  /**
   * Id
   * @description A unique identifier for the record. Use this ID to reference this goal.
   */
  id?: number;
  /**
   * Percent Complete
   * @description The goal completion percentage (0 - 100).
   */
  percentComplete?: number;
  /**
   * Shared With Employee Ids
   * @description Employee IDs of employees with whom the goal is shared. All goal owners are considered "shared with".
   */
  sharedWithEmployeeIds?: number[];
  /**
   * Title
   * @description The goal title.
   */
  title?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL tool output.
 */
type BAMBOOHR_UPDATE_GOAL_OUTPUT = {
  /**
   * Data
   * @description The response schema
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_COMMENT tool input.
 */
type BAMBOOHR_UPDATE_GOAL_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description commentId is the comment ID for the specified goal.
   */
  commentId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_COMMENT tool output.
 */
type BAMBOOHR_UPDATE_GOAL_COMMENT_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_PROGRESS tool input.
 */
type BAMBOOHR_UPDATE_GOAL_PROGRESS_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: number;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_PROGRESS tool output.
 */
type BAMBOOHR_UPDATE_GOAL_PROGRESS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Goal
       * @description The selected goal object
       * @default null
       */
      goal: {
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_SHARING tool input.
 */
type BAMBOOHR_UPDATE_GOAL_SHARING_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
  /**
   * Shared With Employee Ids
   * @description Sharedwithemployeeids
   */
  sharedWithEmployeeIds?: number[];
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_SHARING tool output.
 */
type BAMBOOHR_UPDATE_GOAL_SHARING_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Goal
       * @description The selected goal object
       * @default null
       */
      goal: {
          /**
           * Aligns With Option Id
           * @default null
           */
          alignsWithOptionId: number | null;
          /**
           * Completion Date
           * Format: date
           * @description The date the goal was completed.
           * @default null
           */
          completionDate: string | null;
          /**
           * Description
           * @description A description of the goal.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * Format: date
           * @description The due date of the goal.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description The id of the goal.
           * @default null
           */
          id: number | null;
          /**
           * Percent Complete
           * @description A percentage (1-100) that denotes how complete the goal is.
           * @default null
           */
          percentComplete: number | null;
          /**
           * Shared With Employee Ids
           * @description Ids of the employees that have access to this goal.
           * @default null
           */
          sharedWithEmployeeIds: number[] | null;
          /**
           * Status
           * @description The status of the goal.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the goal.
           * @default null
           */
          title: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_V11 tool input.
 */
type BAMBOOHR_UPDATE_GOAL_V11_INPUT = {
  /**
   * Aligns With Option Id
   * @description [Optional] The option ID that aligns with this goal.
   */
  alignsWithOptionId?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Deleted Milestone Ids
   * @description [Optional] Ids of all the milestones to be deleted with the update.
   */
  deletedMilestoneIds?: number[];
  /**
   * Description
   * @description [Optional] The goal description.
   */
  description?: string;
  /**
   * Due Date
   * @description [Required] The goal due date in YYYY-mm-dd format.
   */
  dueDate?: string;
  /**
   * Employee Id
   * @description employeeId is the employee ID with whom the goal is associated.
   */
  employeeId?: string;
  /**
   * Goal Id
   * @description goalId is the goal ID for the specified employee.
   */
  goalId?: string;
  /**
   * Milestones
   * @description [Optional] All milestones to be added to the goal with this update.
   */
  milestones?: {
      /**
       * End Value
       * @description [Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.
       */
      endValue?: number;
      /**
       * Start Value
       * @description [Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.
       */
      startValue?: number;
      /**
       * Title
       * @description [Required] The title of the milestone.
       */
      title: string;
  }[];
  /**
   * Milestones Enabled
   * @description [Optional] A flag indicating whether or not milestones are enabled for this goal. Setting this flag to false will delete all existing milestones for this goal.
   */
  milestonesEnabled?: boolean;
  /**
   * Shared With Employee Ids
   * @description [Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered "shared with". This must include the employee for whom the goal is created.
   */
  sharedWithEmployeeIds?: number[];
  /**
   * Title
   * @description [Required] The goal title.
   */
  title?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_GOAL_V11 tool output.
 */
type BAMBOOHR_UPDATE_GOAL_V11_OUTPUT = {
  /**
   * Data
   * @description The response schema
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_TRAINING_CATEGORY tool input.
 */
type BAMBOOHR_UPDATE_TRAINING_CATEGORY_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Name
   * @description Name of the training category.
   */
  name?: string;
  /**
   * Training Category Id
   * @description The ID of the training category to update.
   */
  trainingCategoryId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_TRAINING_CATEGORY tool output.
 */
type BAMBOOHR_UPDATE_TRAINING_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Id
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @default null
       */
      name: string | null;
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_TRAINING_TYPE tool input.
 */
type BAMBOOHR_UPDATE_TRAINING_TYPE_INPUT = {
  /**
   * Allow Employees To Mark Complete
   * @description Allows all employees who can view the training to be able to mark it complete.
   * @default false
   */
  allowEmployeesToMarkComplete: boolean;
  /**
   * Category  Accuracy
   * @description Accuracy in meters of the clock in location
   */
  category__accuracy?: number;
  /**
   * Category  Address
   * @description Address...
   */
  category__address?: string;
  /**
   * Category  Id
   * @description Category ID
   */
  category__id?: number;
  /**
   * Category  Name
   * @description Category Name
   */
  category__name?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Description
   * @description Description for the training.
   */
  description?: string;
  /**
   * Due From Hire Date
   * @description Number of days before the training is due for new hires. Not valid unless training is required.
   * @default 30
   */
  dueFromHireDate: number;
  /**
   * Frequency
   * @description The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.
   * @default 12
   */
  frequency: number;
  /**
   * Link Url
   * @description Optional URL that can be included with a training.
   */
  linkUrl?: string;
  /**
   * Name
   * @description Name of the training type.
   */
  name?: string;
  /**
   * Renewable
   * @description Renewable is optional but if you are setting it to true you must pass a frequency.
   */
  renewable?: boolean;
  /**
   * Required
   * @description Is this a required training?
   */
  required?: boolean;
  /**
   * Training Type Id
   * @description The ID of the training type to update.
   */
  trainingTypeId?: number;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_TRAINING_TYPE tool output.
 */
type BAMBOOHR_UPDATE_TRAINING_TYPE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Allow Employees To Mark Complete
       * @description Allows all employees who can view the training to be able to mark it complete.
       * @default null
       */
      allowEmployeesToMarkComplete: boolean | null;
      /**
       * Category
       * @description The category ID and name
       * @default null
       */
      category: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Description
       * @description Description for the training.
       * @default null
       */
      description: string | null;
      /**
       * Due From Hire Date
       * @description Number of days before the training is due for new hires. Not valid if training is not required.
       * @default null
       */
      dueFromHireDate: number | null;
      /**
       * Frequency
       * @description The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.
       * @default null
       */
      frequency: number | null;
      /**
       * Id
       * @description The ID of the training
       * @default null
       */
      id: number | null;
      /**
       * Link Url
       * @description Optional URL that can be included with a training.
       * @default null
       */
      linkUrl: string | null;
      /**
       * Name
       * @description Name of the training type.
       * @default null
       */
      name: string | null;
      /**
       * Renewable
       * @description If true, training will be renewed based off of frequency.
       * @default null
       */
      renewable: boolean | null;
      /**
       * Required
       * @description Is this a required training?
       * @default null
       */
      required: number | null;
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
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_WEBHOOK tool input.
 */
type BAMBOOHR_UPDATE_WEBHOOK_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Format
   * @description The format the webhook should use (json - default, form-encoded).
   * @enum {string}
   */
  format?: "form-encoded" | "json";
  /**
   * Frequency  Day
   * @description The day to potentially fire (1-31, null to potentially fire every day)
   */
  frequency__day?: number;
  /**
   * Frequency  Hour
   * @description The hour to potentially fire (0-23, null to potentially fire every hour)
   */
  frequency__hour?: number;
  /**
   * Frequency  Minute
   * @description The minute to potentially fire (0-59, null to potentially fire every minute)
   */
  frequency__minute?: number;
  /**
   * Frequency  Month
   * @description The month to potentially fire (1-12, null to potentially fire every month)
   */
  frequency__month?: number;
  /**
   * Id
   * @description {id} is a webhook ID.
   */
  id?: string;
  /**
   * Include Company Domain
   * @description If set to true, the company domain will be added to the header.
   */
  includeCompanyDomain?: boolean;
  /**
   * Limit  Seconds
   * @description The minimum amount of seconds between requests
   */
  limit__seconds?: number;
  /**
   * Limit  Times
   * @description The amount of records to send
   */
  limit__times?: number;
  /**
   * Monitor Fields
   * @description A list of fields to monitor.
   */
  monitorFields?: string[];
  /**
   * Name
   * @description The name of the webhook.
   */
  name?: string;
  /**
   * Post Fields
   * @description A list of fields to post to the webhook url. Field ID or alias: external name
   */
  postFields?: {
      [key: string]: string;
  };
  /**
   * Url
   * @description The url the webhook should send data to (must begin with https://).
   */
  url?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPDATE_WEBHOOK tool output.
 */
type BAMBOOHR_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Created
       * @description timestamp of creation
       * @default null
       */
      created: string | null;
      /**
       * Format
       * @description The format the webhook should use (json, form-encoded).
       * @default null
       */
      format: string | null;
      /**
       * Frequency
       * @description How often the webhook could fire.
       * @default null
       */
      frequency: {
          /**
           * Day
           * @description The day to potentially fire
           * @default null
           */
          day: number | null;
          /**
           * Hour
           * @description The hour to potentially fire.
           * @default null
           */
          hour: number | null;
          /**
           * Minute
           * @description The minute to potentially fire
           * @default null
           */
          minute: number | null;
          /**
           * Month
           * @description The month to potentially fire
           * @default null
           */
          month: unknown;
      } | null;
      /**
       * Id
       * @description The id of the webhook.
       * @default null
       */
      id: number | null;
      /**
       * Include Company Domain
       * @description If set to true, the company domain will be added to the header.
       * @default null
       */
      includeCompanyDomain: boolean | null;
      /**
       * Last Sent
       * @description timestamp of last webhook sent
       * @default null
       */
      lastSent: string | null;
      /**
       * Limit
       * @description To limit how often to potentially fire a webhook, and maximum amount of records to send
       * @default null
       */
      limit: {
          /**
           * Seconds
           * @description The minimum amount of seconds between requests
           * @default null
           */
          seconds: number | null;
          /**
           * Times
           * @description The amount of records to send
           * @default null
           */
          times: number | null;
      } | null;
      /**
       * Monitor Fields
       * @description A list of fields to monitor.
       * @default null
       */
      monitorFields: string[] | null;
      /**
       * Name
       * @description The name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Post Fields
       * @description A list of fields to post to the webhook url. Field ID or alias: external name
       * @default null
       */
      postFields: {
          [key: string]: string;
      } | null;
      /**
       * Url
       * @description The url the webhook should send data to.
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
 * Type of BAMBOOHR's BAMBOOHR_UPLOAD_COMPANY_FILE tool input.
 */
type BAMBOOHR_UPLOAD_COMPANY_FILE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPLOAD_COMPANY_FILE tool output.
 */
type BAMBOOHR_UPLOAD_COMPANY_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_UPLOAD_EMPLOYEE_FILE tool input.
 */
type BAMBOOHR_UPLOAD_EMPLOYEE_FILE_INPUT = {
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /**
   * Id
   * @description {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
   */
  id?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_UPLOAD_EMPLOYEE_FILE tool output.
 */
type BAMBOOHR_UPLOAD_EMPLOYEE_FILE_OUTPUT = {
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
 * Type of BAMBOOHR's BAMBOOHR_USER_LOGIN tool input.
 */
type BAMBOOHR_USER_LOGIN_INPUT = {
  /** Application Key */
  applicationKey?: string;
  /**
   * Company Domain
   * @description The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is "mycompany"
   */
  companyDomain?: string;
  /** Password */
  password?: string;
  /** User */
  user?: string;
};

/**
 * Type of BAMBOOHR's BAMBOOHR_USER_LOGIN tool output.
 */
type BAMBOOHR_USER_LOGIN_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "BAMBOOHR".
 */
export type BAMBOOHR_TOOL_INPUTS = {
  ADDS_A_TABLE_ROW: BAMBOOHR_ADDS_A_TABLE_ROW_INPUT
  ADD_AN_EMPLOYEE_BENEFIT: BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT_INPUT
  ADD_AN_EMPLOYEE_DEPENDENT: BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT_INPUT
  ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_INPUT
  ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_INPUT
  ADD_AN_EMPLOYEE_S_PAYSTUB: BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB_INPUT
  ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_INPUT
  ADD_AN_HOUR_RECORD: BAMBOOHR_ADD_AN_HOUR_RECORD_INPUT
  ADD_APPLICATION_COMMENT: BAMBOOHR_ADD_APPLICATION_COMMENT_INPUT
  ADD_A_BENEFIT_GROUP_EMPLOYEE: BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE_INPUT
  ADD_A_NEW_COMPANY_BENEFIT: BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT_INPUT
  ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST: BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST_INPUT
  ADD_A_TIME_OFF_REQUEST: BAMBOOHR_ADD_A_TIME_OFF_REQUEST_INPUT
  ADD_EDIT_TIMESHEET_CLOCK_ENTRIES: BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES_INPUT
  ADD_EDIT_TIMESHEET_HOUR_ENTRIES: BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES_INPUT
  ADD_EMPLOYEE: BAMBOOHR_ADD_EMPLOYEE_INPUT
  ADD_NEW_CANDIDATE: BAMBOOHR_ADD_NEW_CANDIDATE_INPUT
  ADD_NEW_EMPLOYEE_TRAINING_RECORD: BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD_INPUT
  ADD_NEW_JOB_OPENING: BAMBOOHR_ADD_NEW_JOB_OPENING_INPUT
  ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS: BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS_INPUT
  ADD_TIMESHEET_CLOCK_IN_ENTRY: BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY_INPUT
  ADD_TIMESHEET_CLOCK_OUT_ENTRY: BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY_INPUT
  ADD_TRAINING_CATEGORY: BAMBOOHR_ADD_TRAINING_CATEGORY_INPUT
  ADD_TRAINING_TYPE: BAMBOOHR_ADD_TRAINING_TYPE_INPUT
  ADD_WEBHOOK: BAMBOOHR_ADD_WEBHOOK_INPUT
  ADJUST_TIME_OFF_BALANCE: BAMBOOHR_ADJUST_TIME_OFF_BALANCE_INPUT
  ALIGNABLE_GOAL_OPTIONS: BAMBOOHR_ALIGNABLE_GOAL_OPTIONS_INPUT
  APPROVE_EMPLOYEE_TIMESHEETS: BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS_INPUT
  APPROVE_TIMESHEETS_ACTION: BAMBOOHR_APPROVE_TIMESHEETS_ACTION_INPUT
  AVAILABLE_GOAL_SHARING_OPTIONS: BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS_INPUT
  CAN_CREATE_A_GOAL: BAMBOOHR_CAN_CREATE_A_GOAL_INPUT
  CHANGE_APPLICANT_S_STATUS: BAMBOOHR_CHANGE_APPLICANT_S_STATUS_INPUT
  CHANGE_A_REQUEST_STATUS: BAMBOOHR_CHANGE_A_REQUEST_STATUS_INPUT
  CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_INPUT
  CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_INPUT
  CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_INPUT
  CLOCK_IN_EMPLOYEE_ID_OPTIONAL: BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL_INPUT
  CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME: BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME_INPUT
  CLOCK_OUT_EMPLOYEE_ID_OPTIONAL: BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL_INPUT
  CLOSE_GOAL: BAMBOOHR_CLOSE_GOAL_INPUT
  CREATE_A_TIME_TRACKING_PROJECT: BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT_INPUT
  CREATE_GOAL: BAMBOOHR_CREATE_GOAL_INPUT
  CREATE_GOAL_COMMENT: BAMBOOHR_CREATE_GOAL_COMMENT_INPUT
  DELETES_A_TABLE_ROW: BAMBOOHR_DELETES_A_TABLE_ROW_INPUT
  DELETE_AN_EMPLOYEE_S_PAYSTUB: BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB_INPUT
  DELETE_AN_HOUR_RECORD: BAMBOOHR_DELETE_AN_HOUR_RECORD_INPUT
  DELETE_A_COMPANY_BENEFIT: BAMBOOHR_DELETE_A_COMPANY_BENEFIT_INPUT
  DELETE_CLOCK_ENTRIES: BAMBOOHR_DELETE_CLOCK_ENTRIES_INPUT
  DELETE_COMPANY_FILE: BAMBOOHR_DELETE_COMPANY_FILE_INPUT
  DELETE_EMPLOYEE_FILE: BAMBOOHR_DELETE_EMPLOYEE_FILE_INPUT
  DELETE_EMPLOYEE_TRAINING_RECORD: BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD_INPUT
  DELETE_GOAL: BAMBOOHR_DELETE_GOAL_INPUT
  DELETE_GOAL_COMMENT: BAMBOOHR_DELETE_GOAL_COMMENT_INPUT
  DELETE_TIMESHEET_CLOCK_ENTRIES: BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES_INPUT
  DELETE_TIMESHEET_HOUR_ENTRIES: BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES_INPUT
  DELETE_TRAINING_CATEGORY: BAMBOOHR_DELETE_TRAINING_CATEGORY_INPUT
  DELETE_TRAINING_TYPE: BAMBOOHR_DELETE_TRAINING_TYPE_INPUT
  DELETE_WEBHOOK: BAMBOOHR_DELETE_WEBHOOK_INPUT
  EDIT_AN_HOUR_RECORD: BAMBOOHR_EDIT_AN_HOUR_RECORD_INPUT
  EDIT_CURRENT_CLOCK_IN_ENTRY: BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY_INPUT
  ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW: BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW_INPUT
  ESTIMATE_FUTURE_TIME_OFF_BALANCES: BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES_INPUT
  GETS_ALL_UPDATED_EMPLOYEE_IDS: BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS_INPUT
  GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA: BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA_INPUT
  GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY: BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY_INPUT
  GET_AGGREGATE_GOAL_INFO: BAMBOOHR_GET_AGGREGATE_GOAL_INFO_INPUT
  GET_ALL_AGGREGATE_GOAL_INFO: BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_INPUT
  GET_ALL_AGGREGATE_GOAL_INFO_VERSION11: BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11_INPUT
  GET_ALL_AGGREGATE_GOAL_INFO_VERSION12: BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12_INPUT
  GET_ALL_EMPLOYEE_DEPENDENTS: BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS_INPUT
  GET_AN_COMPANY_FILE: BAMBOOHR_GET_AN_COMPANY_FILE_INPUT
  GET_AN_EMPLOYEE_FILE: BAMBOOHR_GET_AN_EMPLOYEE_FILE_INPUT
  GET_AN_EMPLOYEE_PHOTO: BAMBOOHR_GET_AN_EMPLOYEE_PHOTO_INPUT
  GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_INPUT
  GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_INPUT
  GET_AN_EMPLOYEE_S_PAYSTUB: BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB_INPUT
  GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_INPUT
  GET_AN_HOUR_RECORD: BAMBOOHR_GET_AN_HOUR_RECORD_INPUT
  GET_APPLICATIONS: BAMBOOHR_GET_APPLICATIONS_INPUT
  GET_APPLICATION_DETAILS: BAMBOOHR_GET_APPLICATION_DETAILS_INPUT
  GET_A_CLOCK_ENTRY: BAMBOOHR_GET_A_CLOCK_ENTRY_INPUT
  GET_A_COMPANY_BENEFIT: BAMBOOHR_GET_A_COMPANY_BENEFIT_INPUT
  GET_A_DAILY_ENTRY: BAMBOOHR_GET_A_DAILY_ENTRY_INPUT
  GET_A_LIST_OF_COMPANY_BENEFITS: BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS_INPUT
  GET_A_LIST_OF_COMPANY_BENEFIT_TYPES: BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES_INPUT
  GET_A_LIST_OF_EMPLOYEE_BENEFITS: BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS_INPUT
  GET_A_LIST_OF_FIELDS: BAMBOOHR_GET_A_LIST_OF_FIELDS_INPUT
  GET_A_LIST_OF_TABULAR_FIELDS: BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS_INPUT
  GET_A_LIST_OF_USERS: BAMBOOHR_GET_A_LIST_OF_USERS_INPUT
  GET_A_LIST_OF_WHO_S_OUT: BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT_INPUT
  GET_A_TIMESHEET_FOR_AN_EMPLOYEE: BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE_INPUT
  GET_BENEFIT_COVERAGES: BAMBOOHR_GET_BENEFIT_COVERAGES_INPUT
  GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE: BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE_INPUT
  GET_BENEFIT_DEDUCTION_TYPES: BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES_INPUT
  GET_BENEFIT_GROUPS: BAMBOOHR_GET_BENEFIT_GROUPS_INPUT
  GET_BENEFIT_GROUP_EMPLOYEES: BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES_INPUT
  GET_BENEFIT_GROUP_PLANS: BAMBOOHR_GET_BENEFIT_GROUP_PLANS_INPUT
  GET_BENEFIT_GROUP_PLAN_COSTS: BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS_INPUT
  GET_BENEFIT_PLANS: BAMBOOHR_GET_BENEFIT_PLANS_INPUT
  GET_BENEFIT_PLAN_COVERAGES: BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES_INPUT
  GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE: BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE_INPUT
  GET_COMPANY_LOCATIONS: BAMBOOHR_GET_COMPANY_LOCATIONS_INPUT
  GET_COMPANY_REPORT: BAMBOOHR_GET_COMPANY_REPORT_INPUT
  GET_DETAILS_FOR_LIST_FIELDS: BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS_INPUT
  GET_EMPLOYEE: BAMBOOHR_GET_EMPLOYEE_INPUT
  GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN: BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN_INPUT
  GET_EMPLOYEE_DEPENDENT: BAMBOOHR_GET_EMPLOYEE_DEPENDENT_INPUT
  GET_EMPLOYEE_DIRECTORY: BAMBOOHR_GET_EMPLOYEE_DIRECTORY_INPUT
  GET_EMPLOYEE_PROJECTS: BAMBOOHR_GET_EMPLOYEE_PROJECTS_INPUT
  GET_EMPLOYEE_TABLE_ROWS: BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS_INPUT
  GET_GOALS: BAMBOOHR_GET_GOALS_INPUT
  GET_GOAL_COMMENTS: BAMBOOHR_GET_GOAL_COMMENTS_INPUT
  GET_GOAL_STATUS_COUNTS: BAMBOOHR_GET_GOAL_STATUS_COUNTS_INPUT
  GET_GOAL_STATUS_COUNTS_VERSION11: BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11_INPUT
  GET_HIRING_LEADS: BAMBOOHR_GET_HIRING_LEADS_INPUT
  GET_JOB_SUMMARIES: BAMBOOHR_GET_JOB_SUMMARIES_INPUT
  GET_MONITOR_FIELDS: BAMBOOHR_GET_MONITOR_FIELDS_INPUT
  GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO: BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO_INPUT
  GET_STATUSES: BAMBOOHR_GET_STATUSES_INPUT
  GET_TASKS_FOR_A_PROJECT: BAMBOOHR_GET_TASKS_FOR_A_PROJECT_INPUT
  GET_TIMESHEETS_BY_IDS: BAMBOOHR_GET_TIMESHEETS_BY_IDS_INPUT
  GET_TIMESHEET_ENTRIES: BAMBOOHR_GET_TIMESHEET_ENTRIES_INPUT
  GET_TIME_OFF_POLICIES: BAMBOOHR_GET_TIME_OFF_POLICIES_INPUT
  GET_TIME_OFF_REQUESTS: BAMBOOHR_GET_TIME_OFF_REQUESTS_INPUT
  GET_TIME_OFF_TYPES: BAMBOOHR_GET_TIME_OFF_TYPES_INPUT
  GET_WEBHOOK: BAMBOOHR_GET_WEBHOOK_INPUT
  GET_WEBHOOK_LOGS: BAMBOOHR_GET_WEBHOOK_LOGS_INPUT
  IS_EMPLOYEE_CLOCKED_IN: BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN_INPUT
  LIST_COMPANY_FILES_AND_CATEGORIES: BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES_INPUT
  LIST_EMPLOYEE_FILES_AND_CATEGORIES: BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES_INPUT
  LIST_EMPLOYEE_TRAININGS: BAMBOOHR_LIST_EMPLOYEE_TRAININGS_INPUT
  LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE: BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_INPUT
  LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11: BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11_INPUT
  LIST_TRAINING_CATEGORIES: BAMBOOHR_LIST_TRAINING_CATEGORIES_INPUT
  LIST_TRAINING_TYPES: BAMBOOHR_LIST_TRAINING_TYPES_INPUT
  MODIFIES_ROW_CONTENTS: BAMBOOHR_MODIFIES_ROW_CONTENTS_INPUT
  REOPEN_A_GOAL: BAMBOOHR_REOPEN_A_GOAL_INPUT
  REQUEST_A_CUSTOM_REPORT: BAMBOOHR_REQUEST_A_CUSTOM_REPORT_INPUT
  STORE_A_NEW_EMPLOYEE_PHOTO: BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO_INPUT
  STORE_CLOCK_ENTRIES: BAMBOOHR_STORE_CLOCK_ENTRIES_INPUT
  STORE_DAILY_ENTRIES: BAMBOOHR_STORE_DAILY_ENTRIES_INPUT
  UPDATES_A_TABLE_ROW: BAMBOOHR_UPDATES_A_TABLE_ROW_INPUT
  UPDATE_AN_EMPLOYEE_DEPENDENT: BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT_INPUT
  UPDATE_A_COMPANY_BENEFIT: BAMBOOHR_UPDATE_A_COMPANY_BENEFIT_INPUT
  UPDATE_COMPANY_FILE: BAMBOOHR_UPDATE_COMPANY_FILE_INPUT
  UPDATE_EMPLOYEE: BAMBOOHR_UPDATE_EMPLOYEE_INPUT
  UPDATE_EMPLOYEE_FILE: BAMBOOHR_UPDATE_EMPLOYEE_FILE_INPUT
  UPDATE_EMPLOYEE_TRAINING_RECORD: BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD_INPUT
  UPDATE_GOAL: BAMBOOHR_UPDATE_GOAL_INPUT
  UPDATE_GOAL_COMMENT: BAMBOOHR_UPDATE_GOAL_COMMENT_INPUT
  UPDATE_GOAL_PROGRESS: BAMBOOHR_UPDATE_GOAL_PROGRESS_INPUT
  UPDATE_GOAL_SHARING: BAMBOOHR_UPDATE_GOAL_SHARING_INPUT
  UPDATE_GOAL_V11: BAMBOOHR_UPDATE_GOAL_V11_INPUT
  UPDATE_TRAINING_CATEGORY: BAMBOOHR_UPDATE_TRAINING_CATEGORY_INPUT
  UPDATE_TRAINING_TYPE: BAMBOOHR_UPDATE_TRAINING_TYPE_INPUT
  UPDATE_WEBHOOK: BAMBOOHR_UPDATE_WEBHOOK_INPUT
  UPLOAD_COMPANY_FILE: BAMBOOHR_UPLOAD_COMPANY_FILE_INPUT
  UPLOAD_EMPLOYEE_FILE: BAMBOOHR_UPLOAD_EMPLOYEE_FILE_INPUT
  USER_LOGIN: BAMBOOHR_USER_LOGIN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BAMBOOHR".
 */
export type BAMBOOHR_TOOL_OUTPUTS = {
  ADDS_A_TABLE_ROW: BAMBOOHR_ADDS_A_TABLE_ROW_OUTPUT
  ADD_AN_EMPLOYEE_BENEFIT: BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT_OUTPUT
  ADD_AN_EMPLOYEE_DEPENDENT: BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT_OUTPUT
  ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_OUTPUT
  ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_OUTPUT
  ADD_AN_EMPLOYEE_S_PAYSTUB: BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB_OUTPUT
  ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_OUTPUT
  ADD_AN_HOUR_RECORD: BAMBOOHR_ADD_AN_HOUR_RECORD_OUTPUT
  ADD_APPLICATION_COMMENT: BAMBOOHR_ADD_APPLICATION_COMMENT_OUTPUT
  ADD_A_BENEFIT_GROUP_EMPLOYEE: BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE_OUTPUT
  ADD_A_NEW_COMPANY_BENEFIT: BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT_OUTPUT
  ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST: BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST_OUTPUT
  ADD_A_TIME_OFF_REQUEST: BAMBOOHR_ADD_A_TIME_OFF_REQUEST_OUTPUT
  ADD_EDIT_TIMESHEET_CLOCK_ENTRIES: BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES_OUTPUT
  ADD_EDIT_TIMESHEET_HOUR_ENTRIES: BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES_OUTPUT
  ADD_EMPLOYEE: BAMBOOHR_ADD_EMPLOYEE_OUTPUT
  ADD_NEW_CANDIDATE: BAMBOOHR_ADD_NEW_CANDIDATE_OUTPUT
  ADD_NEW_EMPLOYEE_TRAINING_RECORD: BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD_OUTPUT
  ADD_NEW_JOB_OPENING: BAMBOOHR_ADD_NEW_JOB_OPENING_OUTPUT
  ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS: BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS_OUTPUT
  ADD_TIMESHEET_CLOCK_IN_ENTRY: BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY_OUTPUT
  ADD_TIMESHEET_CLOCK_OUT_ENTRY: BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY_OUTPUT
  ADD_TRAINING_CATEGORY: BAMBOOHR_ADD_TRAINING_CATEGORY_OUTPUT
  ADD_TRAINING_TYPE: BAMBOOHR_ADD_TRAINING_TYPE_OUTPUT
  ADD_WEBHOOK: BAMBOOHR_ADD_WEBHOOK_OUTPUT
  ADJUST_TIME_OFF_BALANCE: BAMBOOHR_ADJUST_TIME_OFF_BALANCE_OUTPUT
  ALIGNABLE_GOAL_OPTIONS: BAMBOOHR_ALIGNABLE_GOAL_OPTIONS_OUTPUT
  APPROVE_EMPLOYEE_TIMESHEETS: BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS_OUTPUT
  APPROVE_TIMESHEETS_ACTION: BAMBOOHR_APPROVE_TIMESHEETS_ACTION_OUTPUT
  AVAILABLE_GOAL_SHARING_OPTIONS: BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS_OUTPUT
  CAN_CREATE_A_GOAL: BAMBOOHR_CAN_CREATE_A_GOAL_OUTPUT
  CHANGE_APPLICANT_S_STATUS: BAMBOOHR_CHANGE_APPLICANT_S_STATUS_OUTPUT
  CHANGE_A_REQUEST_STATUS: BAMBOOHR_CHANGE_A_REQUEST_STATUS_OUTPUT
  CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_OUTPUT
  CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_OUTPUT
  CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_OUTPUT
  CLOCK_IN_EMPLOYEE_ID_OPTIONAL: BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL_OUTPUT
  CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME: BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME_OUTPUT
  CLOCK_OUT_EMPLOYEE_ID_OPTIONAL: BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL_OUTPUT
  CLOSE_GOAL: BAMBOOHR_CLOSE_GOAL_OUTPUT
  CREATE_A_TIME_TRACKING_PROJECT: BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT_OUTPUT
  CREATE_GOAL: BAMBOOHR_CREATE_GOAL_OUTPUT
  CREATE_GOAL_COMMENT: BAMBOOHR_CREATE_GOAL_COMMENT_OUTPUT
  DELETES_A_TABLE_ROW: BAMBOOHR_DELETES_A_TABLE_ROW_OUTPUT
  DELETE_AN_EMPLOYEE_S_PAYSTUB: BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB_OUTPUT
  DELETE_AN_HOUR_RECORD: BAMBOOHR_DELETE_AN_HOUR_RECORD_OUTPUT
  DELETE_A_COMPANY_BENEFIT: BAMBOOHR_DELETE_A_COMPANY_BENEFIT_OUTPUT
  DELETE_CLOCK_ENTRIES: BAMBOOHR_DELETE_CLOCK_ENTRIES_OUTPUT
  DELETE_COMPANY_FILE: BAMBOOHR_DELETE_COMPANY_FILE_OUTPUT
  DELETE_EMPLOYEE_FILE: BAMBOOHR_DELETE_EMPLOYEE_FILE_OUTPUT
  DELETE_EMPLOYEE_TRAINING_RECORD: BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD_OUTPUT
  DELETE_GOAL: BAMBOOHR_DELETE_GOAL_OUTPUT
  DELETE_GOAL_COMMENT: BAMBOOHR_DELETE_GOAL_COMMENT_OUTPUT
  DELETE_TIMESHEET_CLOCK_ENTRIES: BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES_OUTPUT
  DELETE_TIMESHEET_HOUR_ENTRIES: BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES_OUTPUT
  DELETE_TRAINING_CATEGORY: BAMBOOHR_DELETE_TRAINING_CATEGORY_OUTPUT
  DELETE_TRAINING_TYPE: BAMBOOHR_DELETE_TRAINING_TYPE_OUTPUT
  DELETE_WEBHOOK: BAMBOOHR_DELETE_WEBHOOK_OUTPUT
  EDIT_AN_HOUR_RECORD: BAMBOOHR_EDIT_AN_HOUR_RECORD_OUTPUT
  EDIT_CURRENT_CLOCK_IN_ENTRY: BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY_OUTPUT
  ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW: BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW_OUTPUT
  ESTIMATE_FUTURE_TIME_OFF_BALANCES: BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES_OUTPUT
  GETS_ALL_UPDATED_EMPLOYEE_IDS: BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS_OUTPUT
  GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA: BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA_OUTPUT
  GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY: BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY_OUTPUT
  GET_AGGREGATE_GOAL_INFO: BAMBOOHR_GET_AGGREGATE_GOAL_INFO_OUTPUT
  GET_ALL_AGGREGATE_GOAL_INFO: BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_OUTPUT
  GET_ALL_AGGREGATE_GOAL_INFO_VERSION11: BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11_OUTPUT
  GET_ALL_AGGREGATE_GOAL_INFO_VERSION12: BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12_OUTPUT
  GET_ALL_EMPLOYEE_DEPENDENTS: BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS_OUTPUT
  GET_AN_COMPANY_FILE: BAMBOOHR_GET_AN_COMPANY_FILE_OUTPUT
  GET_AN_EMPLOYEE_FILE: BAMBOOHR_GET_AN_EMPLOYEE_FILE_OUTPUT
  GET_AN_EMPLOYEE_PHOTO: BAMBOOHR_GET_AN_EMPLOYEE_PHOTO_OUTPUT
  GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS_OUTPUT
  GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION_OUTPUT
  GET_AN_EMPLOYEE_S_PAYSTUB: BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB_OUTPUT
  GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS_OUTPUT
  GET_AN_HOUR_RECORD: BAMBOOHR_GET_AN_HOUR_RECORD_OUTPUT
  GET_APPLICATIONS: BAMBOOHR_GET_APPLICATIONS_OUTPUT
  GET_APPLICATION_DETAILS: BAMBOOHR_GET_APPLICATION_DETAILS_OUTPUT
  GET_A_CLOCK_ENTRY: BAMBOOHR_GET_A_CLOCK_ENTRY_OUTPUT
  GET_A_COMPANY_BENEFIT: BAMBOOHR_GET_A_COMPANY_BENEFIT_OUTPUT
  GET_A_DAILY_ENTRY: BAMBOOHR_GET_A_DAILY_ENTRY_OUTPUT
  GET_A_LIST_OF_COMPANY_BENEFITS: BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS_OUTPUT
  GET_A_LIST_OF_COMPANY_BENEFIT_TYPES: BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES_OUTPUT
  GET_A_LIST_OF_EMPLOYEE_BENEFITS: BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS_OUTPUT
  GET_A_LIST_OF_FIELDS: BAMBOOHR_GET_A_LIST_OF_FIELDS_OUTPUT
  GET_A_LIST_OF_TABULAR_FIELDS: BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS_OUTPUT
  GET_A_LIST_OF_USERS: BAMBOOHR_GET_A_LIST_OF_USERS_OUTPUT
  GET_A_LIST_OF_WHO_S_OUT: BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT_OUTPUT
  GET_A_TIMESHEET_FOR_AN_EMPLOYEE: BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE_OUTPUT
  GET_BENEFIT_COVERAGES: BAMBOOHR_GET_BENEFIT_COVERAGES_OUTPUT
  GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE: BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE_OUTPUT
  GET_BENEFIT_DEDUCTION_TYPES: BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES_OUTPUT
  GET_BENEFIT_GROUPS: BAMBOOHR_GET_BENEFIT_GROUPS_OUTPUT
  GET_BENEFIT_GROUP_EMPLOYEES: BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES_OUTPUT
  GET_BENEFIT_GROUP_PLANS: BAMBOOHR_GET_BENEFIT_GROUP_PLANS_OUTPUT
  GET_BENEFIT_GROUP_PLAN_COSTS: BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS_OUTPUT
  GET_BENEFIT_PLANS: BAMBOOHR_GET_BENEFIT_PLANS_OUTPUT
  GET_BENEFIT_PLAN_COVERAGES: BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES_OUTPUT
  GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE: BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE_OUTPUT
  GET_COMPANY_LOCATIONS: BAMBOOHR_GET_COMPANY_LOCATIONS_OUTPUT
  GET_COMPANY_REPORT: BAMBOOHR_GET_COMPANY_REPORT_OUTPUT
  GET_DETAILS_FOR_LIST_FIELDS: BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS_OUTPUT
  GET_EMPLOYEE: BAMBOOHR_GET_EMPLOYEE_OUTPUT
  GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN: BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN_OUTPUT
  GET_EMPLOYEE_DEPENDENT: BAMBOOHR_GET_EMPLOYEE_DEPENDENT_OUTPUT
  GET_EMPLOYEE_DIRECTORY: BAMBOOHR_GET_EMPLOYEE_DIRECTORY_OUTPUT
  GET_EMPLOYEE_PROJECTS: BAMBOOHR_GET_EMPLOYEE_PROJECTS_OUTPUT
  GET_EMPLOYEE_TABLE_ROWS: BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS_OUTPUT
  GET_GOALS: BAMBOOHR_GET_GOALS_OUTPUT
  GET_GOAL_COMMENTS: BAMBOOHR_GET_GOAL_COMMENTS_OUTPUT
  GET_GOAL_STATUS_COUNTS: BAMBOOHR_GET_GOAL_STATUS_COUNTS_OUTPUT
  GET_GOAL_STATUS_COUNTS_VERSION11: BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11_OUTPUT
  GET_HIRING_LEADS: BAMBOOHR_GET_HIRING_LEADS_OUTPUT
  GET_JOB_SUMMARIES: BAMBOOHR_GET_JOB_SUMMARIES_OUTPUT
  GET_MONITOR_FIELDS: BAMBOOHR_GET_MONITOR_FIELDS_OUTPUT
  GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO: BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO_OUTPUT
  GET_STATUSES: BAMBOOHR_GET_STATUSES_OUTPUT
  GET_TASKS_FOR_A_PROJECT: BAMBOOHR_GET_TASKS_FOR_A_PROJECT_OUTPUT
  GET_TIMESHEETS_BY_IDS: BAMBOOHR_GET_TIMESHEETS_BY_IDS_OUTPUT
  GET_TIMESHEET_ENTRIES: BAMBOOHR_GET_TIMESHEET_ENTRIES_OUTPUT
  GET_TIME_OFF_POLICIES: BAMBOOHR_GET_TIME_OFF_POLICIES_OUTPUT
  GET_TIME_OFF_REQUESTS: BAMBOOHR_GET_TIME_OFF_REQUESTS_OUTPUT
  GET_TIME_OFF_TYPES: BAMBOOHR_GET_TIME_OFF_TYPES_OUTPUT
  GET_WEBHOOK: BAMBOOHR_GET_WEBHOOK_OUTPUT
  GET_WEBHOOK_LOGS: BAMBOOHR_GET_WEBHOOK_LOGS_OUTPUT
  IS_EMPLOYEE_CLOCKED_IN: BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN_OUTPUT
  LIST_COMPANY_FILES_AND_CATEGORIES: BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES_OUTPUT
  LIST_EMPLOYEE_FILES_AND_CATEGORIES: BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES_OUTPUT
  LIST_EMPLOYEE_TRAININGS: BAMBOOHR_LIST_EMPLOYEE_TRAININGS_OUTPUT
  LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE: BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_OUTPUT
  LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11: BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11_OUTPUT
  LIST_TRAINING_CATEGORIES: BAMBOOHR_LIST_TRAINING_CATEGORIES_OUTPUT
  LIST_TRAINING_TYPES: BAMBOOHR_LIST_TRAINING_TYPES_OUTPUT
  MODIFIES_ROW_CONTENTS: BAMBOOHR_MODIFIES_ROW_CONTENTS_OUTPUT
  REOPEN_A_GOAL: BAMBOOHR_REOPEN_A_GOAL_OUTPUT
  REQUEST_A_CUSTOM_REPORT: BAMBOOHR_REQUEST_A_CUSTOM_REPORT_OUTPUT
  STORE_A_NEW_EMPLOYEE_PHOTO: BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO_OUTPUT
  STORE_CLOCK_ENTRIES: BAMBOOHR_STORE_CLOCK_ENTRIES_OUTPUT
  STORE_DAILY_ENTRIES: BAMBOOHR_STORE_DAILY_ENTRIES_OUTPUT
  UPDATES_A_TABLE_ROW: BAMBOOHR_UPDATES_A_TABLE_ROW_OUTPUT
  UPDATE_AN_EMPLOYEE_DEPENDENT: BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT_OUTPUT
  UPDATE_A_COMPANY_BENEFIT: BAMBOOHR_UPDATE_A_COMPANY_BENEFIT_OUTPUT
  UPDATE_COMPANY_FILE: BAMBOOHR_UPDATE_COMPANY_FILE_OUTPUT
  UPDATE_EMPLOYEE: BAMBOOHR_UPDATE_EMPLOYEE_OUTPUT
  UPDATE_EMPLOYEE_FILE: BAMBOOHR_UPDATE_EMPLOYEE_FILE_OUTPUT
  UPDATE_EMPLOYEE_TRAINING_RECORD: BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD_OUTPUT
  UPDATE_GOAL: BAMBOOHR_UPDATE_GOAL_OUTPUT
  UPDATE_GOAL_COMMENT: BAMBOOHR_UPDATE_GOAL_COMMENT_OUTPUT
  UPDATE_GOAL_PROGRESS: BAMBOOHR_UPDATE_GOAL_PROGRESS_OUTPUT
  UPDATE_GOAL_SHARING: BAMBOOHR_UPDATE_GOAL_SHARING_OUTPUT
  UPDATE_GOAL_V11: BAMBOOHR_UPDATE_GOAL_V11_OUTPUT
  UPDATE_TRAINING_CATEGORY: BAMBOOHR_UPDATE_TRAINING_CATEGORY_OUTPUT
  UPDATE_TRAINING_TYPE: BAMBOOHR_UPDATE_TRAINING_TYPE_OUTPUT
  UPDATE_WEBHOOK: BAMBOOHR_UPDATE_WEBHOOK_OUTPUT
  UPLOAD_COMPANY_FILE: BAMBOOHR_UPLOAD_COMPANY_FILE_OUTPUT
  UPLOAD_EMPLOYEE_FILE: BAMBOOHR_UPLOAD_EMPLOYEE_FILE_OUTPUT
  USER_LOGIN: BAMBOOHR_USER_LOGIN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BAMBOOHR toolkit.
 */
export const BAMBOOHR = {
  slug: "bamboohr",
  tools: {
    /**
     * This endpoint allows you to update a specific row in an employee's table within bamboohr. it is used to modify various aspects of an employee's record, such as their job information, location, or organizational structure. the endpoint is particularly useful for keeping employee data up-to-date when changes occur, such as promotions, transfers, or organizational restructuring. it's important to note that this endpoint updates a single row in a specific table, so multiple calls may be necessary for comprehensive employee record updates across different tables.
     */
    ADDS_A_TABLE_ROW: "BAMBOOHR_ADDS_A_TABLE_ROW",
    /**
     * Creates or updates an employee benefit in the bamboohr system. this endpoint allows you to manage various aspects of an employee's benefit enrollment, including coverage details, financial contributions, and enrollment status. it's primarily used when setting up new benefits for an employee, making changes to existing benefits, or updating enrollment statuses. the endpoint is versatile, handling different types of benefits with various contribution structures for both employees and the company. it's important to note that while many fields are optional, they may be required depending on the specific benefit type and company policies. this endpoint should not be used for bulk updates or to retrieve benefit information; separate endpoints likely exist for those purposes.
     */
    ADD_AN_EMPLOYEE_BENEFIT: "BAMBOOHR_ADD_AN_EMPLOYEE_BENEFIT",
    /**
     * This endpoint allows you to create a new dependent for an existing employee in the bamboohr system. it is used to add family members or other individuals who are dependent on the employee, which is crucial for benefits administration, tax purposes, and other hr-related tasks. the endpoint requires detailed information about the dependent, including personal details, contact information, and status indicators. it should be used when onboarding new employees with dependents, updating family information, or managing benefits enrollment periods. note that some fields contain sensitive personal information, so ensure proper data security measures are in place when using this endpoint.
     */
    ADD_AN_EMPLOYEE_DEPENDENT: "BAMBOOHR_ADD_AN_EMPLOYEE_DEPENDENT",
    /**
     * This endpoint updates an employee's withholding information for tax purposes in the bamboohr system. it allows modification of federal, state, and local tax withholding amounts, including any additional withholdings, as well as specifying the applicable tax state and local jurisdiction. this tool should be used when there are changes to an employee's tax situation, such as filing status changes, additional jobs, or relocation. it's crucial for maintaining accurate payroll calculations and tax compliance. the endpoint doesn't calculate tax amounts; it only updates the stored values based on the provided information. users should ensure they have the correct withholding information before making updates, as incorrect data may lead to under or over-withholding of taxes.
     */
    ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: "BAMBOOHR_ADD_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS",
    /**
     * Updates the direct deposit account information for a specific employee in the bamboohr system. this endpoint allows you to modify existing direct deposit accounts or add new ones for an employee. it's particularly useful when an employee changes their bank account, adjusts their deposit allocations, or wants to split their paycheck across multiple accounts. the endpoint requires the company domain and employee id in the url path, and accepts an array of account objects in the request body, each detailing the specifics of a direct deposit account. this tool should be used with caution as it directly affects an employee's payment method, and any errors could result in payroll issues.
     */
    ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: "BAMBOOHR_ADD_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION",
    /**
     * Creates a new employee pay stub in the bamboohr system. this endpoint allows for the detailed recording of an employee's pay information for a specific pay period, including gross and net pay, taxes, deductions, and direct deposit allocations. it should be used when processing payroll to maintain accurate financial records for each employee. the endpoint captures both current pay period data and year-to-date totals, providing a comprehensive view of an employee's earnings and deductions. it's particularly useful for integrating external payroll systems with bamboohr, ensuring that hr records are synchronized with actual payroll data. note that this endpoint does not process actual payments; it only records the pay stub information in the bamboohr system.
     */
    ADD_AN_EMPLOYEE_S_PAYSTUB: "BAMBOOHR_ADD_AN_EMPLOYEE_S_PAYSTUB",
    /**
     * Posts unpaid pay stubs for a specific employee in the bamboohr system. this endpoint allows you to add or update information about pay periods for which an employee has not been paid. it's useful for tracking delayed payments, managing payroll discrepancies, or recording periods of unpaid leave. the function requires the employee's id and an array of unpaid period dates. use this when you need to update an employee's payroll record with periods that haven't been compensated yet. note that this endpoint doesn't process payments; it only records the unpaid periods for tracking and future processing.
     */
    ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: "BAMBOOHR_ADD_AN_EMPLOYEE_S_UNPAID_PAYSTUBS",
    /**
     * This endpoint allows you to add a new time tracking record for an employee in the bamboohr system. it's used to log hours worked, including regular and overtime hours, along with associated details such as pay rates, job codes, and organizational information. the endpoint is essential for accurate time tracking, payroll processing, and reporting within bamboohr. use this when you need to manually input or programmatically add time entries for employees, ensuring that all required fields are provided and optional fields are included as needed for your specific payroll and reporting requirements.
     */
    ADD_AN_HOUR_RECORD: "BAMBOOHR_ADD_AN_HOUR_RECORD",
    /**
     * This endpoint allows you to post a comment on a specific application in bamboohr's applicant tracking system. it's used to add notes, feedback, or any relevant information to an applicant's file during the recruitment process. the endpoint requires the company domain and application id to identify where the comment should be added, along with the comment text itself. it's particularly useful for collaboration among hiring team members, documenting interview feedback, or noting important details about an applicant. this function should be used whenever there's a need to update an application with new information in a comment format. note that this endpoint only handles adding comments and does not provide functionality for reading or modifying existing comments.
     */
    ADD_APPLICATION_COMMENT: "BAMBOOHR_ADD_APPLICATION_COMMENT",
    /**
     * This endpoint allows you to associate an employee with a specific benefit group in bamboohr for a defined period. it's used when you need to enroll an employee in a new benefits package or update their existing benefits enrollment. the association can be set for a specific time frame or left open-ended for ongoing enrollment. this tool is particularly useful for hr administrators managing employee benefits, especially during onboarding, annual enrollment periods, or when an employee's benefit status changes. note that this endpoint only creates the association; it doesn't provide details about the benefits themselves or handle the actual enrollment process in specific benefit plans.
     */
    ADD_A_BENEFIT_GROUP_EMPLOYEE: "BAMBOOHR_ADD_A_BENEFIT_GROUP_EMPLOYEE",
    /**
     * This endpoint creates a new company benefit in bamboohr. it allows hr administrators to set up various types of employee benefits, including health insurance, retirement plans, and reimbursement programs. the endpoint captures essential details such as benefit type, start and end dates, deduction information, and compliance with aca requirements. use this endpoint when adding a new benefit offering or updating an existing benefit with new terms. it's particularly useful during open enrollment periods or when changing benefit providers. note that this endpoint does not enroll employees in the benefit; it only sets up the benefit at the company level.
     */
    ADD_A_NEW_COMPANY_BENEFIT: "BAMBOOHR_ADD_A_NEW_COMPANY_BENEFIT",
    /**
     * Adds a new time off history item to an employee's record in bamboohr. this endpoint is used to retroactively add time off requests to an employee's history, which is useful for maintaining accurate records of past time off, especially when backfilling data or correcting historical entries. it allows hr administrators to ensure that an employee's time off history is complete and up-to-date, which is crucial for accurate leave balance calculations and reporting. the endpoint requires the company domain and employee id to be specified in the url path, ensuring that the time off history item is added to the correct employee's record.
     */
    ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST: "BAMBOOHR_ADD_A_TIME_OFF_HISTORY_ITEM_FOR_TIME_OFF_REQUEST",
    /**
     * This endpoint allows you to add or update a time off request for a specific employee in bamboohr. it's used to submit new time off requests or modify existing ones, providing detailed information about the request such as start and end dates, type of time off, and any associated notes. this tool is essential for managing employee leave and maintaining accurate records of time off within the bamboohr system. it should be used whenever an employee needs to request time off or when hr needs to update an existing time off request. the endpoint doesn't handle approval workflows directly; it's primarily for creating and updating request data.
     */
    ADD_A_TIME_OFF_REQUEST: "BAMBOOHR_ADD_A_TIME_OFF_REQUEST",
    /**
     * The "store time tracking clock entries" endpoint allows you to create or update multiple time tracking entries for employees in bamboohr. this endpoint is used to record working hours, including start and end times, dates, and optional project, task, and note information. it's particularly useful for batch processing of time entries, such as at the end of a pay period or when synchronizing data from another system. use this endpoint when you need to add new time entries or modify existing ones in bulk. it supports creating new entries and updating existing ones by specifying the entry id. the endpoint is designed for efficiency, allowing multiple entries to be processed in a single api call. note that this endpoint does not handle time entry approval workflows or payroll calculations directly. it's primarily for data entry and updates. ensure that the employee ids, project ids, and task ids used in the request correspond to valid entities in your bamboohr system to avoid errors.
     */
    ADD_EDIT_TIMESHEET_CLOCK_ENTRIES: "BAMBOOHR_ADD_EDIT_TIMESHEET_CLOCK_ENTRIES",
    /**
     * This endpoint allows you to store or update multiple time tracking hour entries for employees in bamboohr. it's designed for bulk creation or modification of timesheet entries, enabling efficient management of employee work hours, project time allocation, and task tracking. use this endpoint when you need to submit time entries for one or more employees, associate work hours with specific projects or tasks, or update existing time entries. the endpoint is particularly useful for integrating external time tracking systems with bamboohr or for automating the process of time entry submission. note that while you can create multiple entries in a single request, each entry must contain the required fields (employeeid, date, and hours) to be valid. optional fields allow for more detailed time tracking and management capabilities.
     */
    ADD_EDIT_TIMESHEET_HOUR_ENTRIES: "BAMBOOHR_ADD_EDIT_TIMESHEET_HOUR_ENTRIES",
    /**
     * Creates a new employee record in the bamboohr system. this endpoint allows you to add a new employee to your company's hr database by providing essential information such as first name and last name. it's typically used when onboarding new hires or adding existing employees to the bamboohr system for the first time. the endpoint supports additional properties beyond the required fields, allowing for flexible and comprehensive employee data entry. however, it's important to note that this endpoint only initiates the employee record and may not include all possible employee information fields available in bamboohr.
     */
    ADD_EMPLOYEE: "BAMBOOHR_ADD_EMPLOYEE",
    /**
     * This endpoint creates a new job application in the bamboohr applicant tracking system. it allows for the submission of a candidate's personal information, professional details, and supporting documents for a specific job opening. the endpoint accepts multipart/form-data, enabling the upload of resume and cover letter files along with text-based information. it should be used when a new candidate applies for a job or when bulk-uploading applications from external sources. the endpoint requires at minimum the candidate's first name, last name, and the job id, but allows for a comprehensive application with optional fields covering everything from contact details to educational background.
     */
    ADD_NEW_CANDIDATE: "BAMBOOHR_ADD_NEW_CANDIDATE",
    /**
     * This endpoint allows you to create a new training record for a specific employee in the bamboohr system. it's used to document completed training sessions, including details such as the completion date, cost, instructor, duration, credits earned, and any additional notes. this tool is essential for maintaining accurate employee development records, tracking professional growth, and ensuring compliance with training requirements. it should be used whenever an employee completes a training session, workshop, or course that needs to be officially recorded in their hr file. the endpoint requires the company domain and employee id as part of the url, ensuring that the training record is associated with the correct employee in the appropriate company account.
     */
    ADD_NEW_EMPLOYEE_TRAINING_RECORD: "BAMBOOHR_ADD_NEW_EMPLOYEE_TRAINING_RECORD",
    /**
     * Creates a new job opening in the bamboohr applicant tracking system. this endpoint allows you to set up a comprehensive job listing with detailed information about the position, requirements, and application process. use this when you need to post a new job opportunity, whether it's ready to be published or still in draft form. the endpoint captures essential job details and allows customization of the application form through various question fields. it's particularly useful for hr managers and recruiters who need to efficiently manage the hiring process. note that while you can create a job opening, this endpoint does not automatically publish or advertise the position; additional steps may be required to make the job visible to potential applicants.
     */
    ADD_NEW_JOB_OPENING: "BAMBOOHR_ADD_NEW_JOB_OPENING",
    /**
     * Adds new values or updates existing values for a specific list field in the bamboohr system. this endpoint allows you to modify the available options for custom dropdown fields, multi-select fields, or other list-type fields in your bamboohr instance. it's particularly useful when you need to maintain consistent list options across your hr system, such as updating department names, job titles, or any other predefined lists used in employee records or forms. the endpoint requires the company domain and the specific list field id to be included in the url path, ensuring changes are applied to the correct field in the right company instance.
     */
    ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS: "BAMBOOHR_ADD_OR_UPDATE_VALUES_FOR_LIST_FIELDS",
    /**
     * Clocks in an employee in the bamboohr time tracking system, marking the start of their work period. this endpoint should be used when an employee begins their work shift or returns from a break. it allows for optional association with specific projects and tasks, as well as the addition of a note for context. the function is particularly useful for remote workers or companies with flexible working hours. it does not provide clock-out functionality or retrieve existing time entries - separate endpoints would be required for those actions.
     */
    ADD_TIMESHEET_CLOCK_IN_ENTRY: "BAMBOOHR_ADD_TIMESHEET_CLOCK_IN_ENTRY",
    /**
     * This endpoint clocks out an employee in the bamboohr time tracking system, marking the end of their working hours. it should be used when an employee finishes their work shift or needs to record the end of their working time. the endpoint is part of the time tracking api, which integrates with bamboohr timesheets for comprehensive time management. it's important to note that this endpoint only records the clock-out time and doesn't provide additional information about the employee's shift or total hours worked. ensure that the employee is currently clocked in before using this endpoint, as attempting to clock out an employee who isn't clocked in may result in an error.
     */
    ADD_TIMESHEET_CLOCK_OUT_ENTRY: "BAMBOOHR_ADD_TIMESHEET_CLOCK_OUT_ENTRY",
    /**
     * Creates a new training category in the bamboohr system. this endpoint allows hr administrators to organize and structure their training programs by adding custom categories. use this when you need to introduce a new classification for training content, courses, or programs. the newly created category can then be used to group related training materials, making it easier for employees and managers to navigate and access specific types of training. this endpoint is essential for maintaining an organized and efficient training management system within bamboohr.
     */
    ADD_TRAINING_CATEGORY: "BAMBOOHR_ADD_TRAINING_CATEGORY",
    /**
     * Creates a new training type in the bamboohr system with specified attributes and settings. this endpoint allows hr administrators to define and customize various aspects of a training program, including its name, description, renewal requirements, categorization, and completion settings. it's particularly useful for setting up new employee training programs, compliance courses, or skill development modules within an organization. the endpoint provides flexibility in configuring how the training is presented, tracked, and managed within the bamboohr platform.
     */
    ADD_TRAINING_TYPE: "BAMBOOHR_ADD_TRAINING_TYPE",
    /**
     * The addwebhook endpoint allows you to create a new webhook in bamboohr, enabling real-time notifications for specific employee data changes. this tool is used to set up automated data synchronization between bamboohr and external systems, triggered by changes to monitored fields. it provides granular control over which data is sent, how often, and in what format. use this when you need to integrate bamboohr with other systems or automate workflows based on hr data changes. note that webhooks are subject to rate limiting and security constraints, so careful configuration is essential to ensure reliable and secure data transmission.
     */
    ADD_WEBHOOK: "BAMBOOHR_ADD_WEBHOOK",
    /**
     * This endpoint allows you to adjust the time off balance for a specific employee in bamboohr. it's used to make corrections, add or subtract time off, or reconcile discrepancies in an employee's time off records. the adjustment is applied to a particular time off type (e.g., vacation, sick leave) on a specified date. this tool is particularly useful for hr administrators who need to manually modify time off balances due to policy changes, corrections, or special circumstances. it provides a way to maintain accurate time off records without altering the underlying accrual rules or past time off requests. note that this adjustment will be reflected in the employee's time off history and may affect future balance calculations.
     */
    ADJUST_TIME_OFF_BALANCE: "BAMBOOHR_ADJUST_TIME_OFF_BALANCE",
    /**
     * Retrieves the available goal alignment options for a specific employee or the authenticated api user in bamboohr. this endpoint is used to fetch possible alignment choices for employee goals, which helps in ensuring that individual objectives are in line with broader organizational goals. the response includes the currently aligned option for the employee's goal, if one exists. this tool is particularly useful when setting up or adjusting employee performance goals, allowing for proper alignment with company objectives. it should be used when there's a need to view or update the alignment of an employee's goals within the performance management system. the endpoint does not modify any data; it only provides information about available alignment options.
     */
    ALIGNABLE_GOAL_OPTIONS: "BAMBOOHR_ALIGNABLE_GOAL_OPTIONS",
    /**
     * The approvetimesheets endpoint enables managers or authorized personnel to approve multiple employee timesheets in a single api call within the bamboohr time tracking system. this function streamlines the timesheet approval process, which is a critical step in payroll processing and ensuring accurate compensation for employees. it should be used at the end of a pay period or when managers need to approve a batch of completed timesheets. the endpoint requires the last modification timestamp and an array of timesheet ids to be approved, allowing for efficient batch processing. however, it does not provide the ability to partially approve or reject individual time entries within a timesheet; the approval applies to the entire timesheet for each id provided.
     */
    APPROVE_EMPLOYEE_TIMESHEETS: "BAMBOOHR_APPROVE_EMPLOYEE_TIMESHEETS",
    /**
     * This endpoint will approve all timesheets for employees that are currently clocked in. it will only approve the current timesheet, not any previous timesheets.
     */
    APPROVE_TIMESHEETS_ACTION: "BAMBOOHR_APPROVE_TIMESHEETS_ACTION",
    /**
     * Retrieves the list of employees with whom a specific employee's goals can be shared within bamboohr. this endpoint is used to determine the visibility options for an employee's performance goals, allowing hr managers or system administrators to view and potentially modify goal sharing settings. it's particularly useful when setting up or reviewing goal visibility across the organization, ensuring appropriate access to performance information. the endpoint does not modify any data; it only provides information about current share options. it should be used when there's a need to understand or audit the goal visibility for a particular employee.
     */
    AVAILABLE_GOAL_SHARING_OPTIONS: "BAMBOOHR_AVAILABLE_GOAL_SHARING_OPTIONS",
    /**
     * This endpoint checks whether a specific employee has the permission to create goals within the bamboohr performance management system. it is useful for determining user capabilities before attempting to create or modify goals, ensuring proper access control within the application. the endpoint should be used when setting up or managing goal-setting processes, or when building interfaces that dynamically adjust based on user permissions. it does not provide information about existing goals or other performance metrics, focusing solely on the create permission for goals.
     */
    CAN_CREATE_A_GOAL: "BAMBOOHR_CAN_CREATE_A_GOAL",
    /**
     * Updates the status of a specific application in the bamboohr applicant tracking system. this endpoint allows you to change the current status of an application, which is useful for tracking the progress of candidates through your hiring process. use this when you need to move an application to a new stage, such as from 'new' to 'under review' or 'interviewed' to 'offer extended'. the status is represented by an integer id, which corresponds to predefined status options in your bamboohr setup. it's important to note that this endpoint only updates the status and doesn't provide additional information about the application or candidate. ensure you have the correct status id before making the call, as incorrect ids may lead to unexpected status changes.
     */
    CHANGE_APPLICANT_S_STATUS: "BAMBOOHR_CHANGE_APPLICANT_S_STATUS",
    /**
     * This endpoint updates the status of a specific time-off request in bamboohr. it allows hr managers or authorized personnel to approve, deny, or cancel an employee's time-off request. the endpoint is used when a decision has been made regarding a pending time-off request or when there's a need to change the status of an existing request. it's particularly useful for maintaining accurate records of employee leave and ensuring proper workflow in the time-off management process. the endpoint also provides the option to attach a note to the status change, allowing for clear communication and documentation of the decision-making process.
     */
    CHANGE_A_REQUEST_STATUS: "BAMBOOHR_CHANGE_A_REQUEST_STATUS",
    /**
     * Deletes a specific employee withholding record from the bamboohr system. this endpoint is used to remove tax deduction or other financial withholding information for an employee. it should be used when you need to permanently remove outdated, incorrect, or no longer applicable withholding data. this operation cannot be undone, so it should be used with caution. the endpoint requires the company's bamboohr subdomain and the unique identifier of the withholding record to be deleted. it does not return any content upon successful deletion, typically responding with a 204 no content status.
     */
    CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: "BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS",
    /**
     * Deletes a specific direct deposit account associated with an employee in the bamboohr system. this endpoint should be used when an employee's direct deposit account needs to be removed, such as when an employee closes a bank account or requests removal of a direct deposit option. the deletion is permanent and cannot be undone, so it should be used with caution. this endpoint only removes the specified direct deposit account and does not affect other accounts or employee information.
     */
    CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: "BAMBOOHR_CLEAR_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION",
    /**
     * This endpoint deletes a specific unpaid pay stub for an employee in the bamboohr system. it is used to remove outdated, erroneous, or unnecessary unpaid pay stub records from the company's hr database. the operation is irreversible, so it should be used with caution. this endpoint is particularly useful for correcting payroll mistakes, managing test data, or cleaning up records during employee offboarding processes. it does not affect paid pay stubs or other employee financial records beyond the specified unpaid pay stub.
     */
    CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: "BAMBOOHR_CLEAR_AN_EMPLOYEE_S_UNPAID_PAYSTUBS",
    /**
     * This endpoint records a clock-in event for a specific employee in the bamboohr time tracking system. it allows for precise tracking of work hours, including the start time, associated project and task, and optionally, the location of the clock-in. this tool should be used when an employee begins their work day or returns from a break. it's particularly useful for organizations that need detailed time tracking, especially those with remote or field workers. the endpoint doesn't handle clock-out events or provide any information about ongoing or completed work periods.
     */
    CLOCK_IN_EMPLOYEE_ID_OPTIONAL: "BAMBOOHR_CLOCK_IN_EMPLOYEE_ID_OPTIONAL",
    /**
     * This endpoint records the clock-out time for a specific employee in the bamboohr time tracking system. it should be used when an employee ends their work shift or workday. the endpoint requires the company domain, employee id, and the exact clock-out time. it supports specifying a timezone, which is particularly useful for companies with employees working across different geographical locations. this function is crucial for accurate time tracking, payroll processing, and compliance with labor regulations. note that this endpoint only records the clock-out event; it does not provide information about the total hours worked or any other time tracking data.
     */
    CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME: "BAMBOOHR_CLOCK_OUT_AN_EMPLOYEE_AT_A_SPECIFIC_TIME",
    /**
     * The clockoutemployee endpoint allows you to record an employee's clock-out time and location in the bamboohr time tracking system. this endpoint should be used when an employee finishes their work session and needs to log their end time and current location. it captures precise geolocation data along with a readable address to ensure accurate time and location tracking for payroll, compliance, and workforce management purposes. this tool is particularly useful for remote or field workers who need to clock out from various locations.
     */
    CLOCK_OUT_EMPLOYEE_ID_OPTIONAL: "BAMBOOHR_CLOCK_OUT_EMPLOYEE_ID_OPTIONAL",
    /**
     * The closeemployeegoal endpoint allows you to mark a specific performance goal as completed or closed for an individual employee in bamboohr. this action is typically used when an employee has achieved their goal or when the goal period has ended. the endpoint provides the option to include a final comment, which can be useful for summarizing the outcome or providing context for the goal closure. it's important to note that this action is irreversible, so it should be used carefully and only when you're certain that the goal should be finalized. this endpoint is particularly useful for maintaining up-to-date performance records and facilitating performance review processes within the bamboohr system.
     */
    CLOSE_GOAL: "BAMBOOHR_CLOSE_GOAL",
    /**
     * Creates a new time tracking project in bamboohr. this endpoint allows you to set up a project with customizable settings such as billability, employee access, and associated tasks. use this when you need to establish a new project for tracking employee time, whether for client work or internal initiatives. the endpoint is particularly useful for project managers or hr administrators setting up new projects or initiatives that require time tracking. note that while you can create a project without tasks, adding tasks provides more granular time tracking capabilities.
     */
    CREATE_A_TIME_TRACKING_PROJECT: "BAMBOOHR_CREATE_A_TIME_TRACKING_PROJECT",
    /**
     * This endpoint allows you to add a new goal for a specific employee in the bamboohr performance management system. it's used to create structured, trackable objectives that can be aligned with company strategies and shared among team members. the endpoint is particularly useful for setting up performance targets, professional development plans, or project-specific goals. it supports both simple goals and more complex objectives with multiple milestones, enabling detailed progress tracking and collaborative goal-setting within the organization.
     */
    CREATE_GOAL: "BAMBOOHR_CREATE_GOAL",
    /**
     * This endpoint allows you to post a comment on a specific employee's goal within the bamboohr performance management system. it's used to provide feedback, updates, or additional information related to an employee's progress on a particular goal. the endpoint is particularly useful for managers, hr professionals, or team members who need to collaborate and communicate about goal achievement. when using this endpoint, ensure you have the necessary permissions to comment on the specified employee's goals. the comment will be immediately visible to users with access to the employee's performance records in bamboohr.
     */
    CREATE_GOAL_COMMENT: "BAMBOOHR_CREATE_GOAL_COMMENT",
    /**
     * This endpoint deletes a specific row from an employee's table in bamboohr. it allows for the removal of individual entries from structured data sets associated with an employee, such as job history, education records, or certifications. the endpoint should be used when there's a need to remove incorrect or outdated information from an employee's record. it's important to note that this operation is irreversible, so it should be used with caution. this endpoint does not return the deleted data or provide a confirmation of deletion in its response, so additional verification may be necessary after calling this endpoint.
     */
    DELETES_A_TABLE_ROW: "BAMBOOHR_DELETES_A_TABLE_ROW",
    /**
     * Deletes a specific employee pay stub from the bamboohr system. this endpoint should be used when there's a need to remove an incorrect or outdated pay stub from an employee's record. it permanently removes the pay stub data, so it should be used with caution and only when necessary, such as in cases of payroll errors or data cleanup. the operation cannot be undone, so it's crucial to verify the correct pay stub id before deletion. this endpoint is particularly useful for maintaining accurate payroll records and ensuring compliance with financial regulations.
     */
    DELETE_AN_EMPLOYEE_S_PAYSTUB: "BAMBOOHR_DELETE_AN_EMPLOYEE_S_PAYSTUB",
    /**
     * The deletetimetrackingentry endpoint allows for the deletion of a specific time tracking entry from the bamboohr system. this operation is used when you need to remove an individual time tracking record, such as an incorrectly entered time-off request or work hours log. the endpoint requires the company domain and the unique identifier of the time tracking entry to be deleted. it's important to note that this operation is irreversible, so it should be used with caution. this endpoint is particularly useful for correcting errors in time tracking data or removing outdated entries, but it should not be used for bulk deletions or regular data management tasks.
     */
    DELETE_AN_HOUR_RECORD: "BAMBOOHR_DELETE_AN_HOUR_RECORD",
    /**
     * Deletes a specific company benefit from the bamboohr system. this endpoint should be used when you need to remove a benefit that is no longer offered or relevant to the company. it permanently removes the benefit from the system, so it should be used with caution. once deleted, the benefit cannot be recovered, and any employees associated with this benefit may need to be updated. this operation may have implications for reporting and historical data, so it's recommended to archive or document the benefit details before deletion if needed for record-keeping purposes.
     */
    DELETE_A_COMPANY_BENEFIT: "BAMBOOHR_DELETE_A_COMPANY_BENEFIT",
    /**
     * Deletes multiple clock entries from the bamboohr time tracking system. this endpoint allows administrators to remove specific time tracking records, which is useful for correcting errors, managing outdated entries, or cleaning up the time tracking data. it should be used when you need to permanently remove one or more clock entries from an employee's time tracking history. note that this operation is irreversible, so caution should be exercised when using this endpoint. the endpoint does not provide any confirmation or details about the deleted entries, so it's recommended to verify the deletion through a separate get request if necessary.
     */
    DELETE_CLOCK_ENTRIES: "BAMBOOHR_DELETE_CLOCK_ENTRIES",
    /**
     * Deletes a specific file from the bamboohr system for a given company. this endpoint is used when you need to permanently remove a file from an employee's records or the company's document storage in bamboohr. it should be used with caution as the deletion is irreversible. the endpoint requires the company's subdomain and the specific file id to identify and delete the correct file. it's particularly useful for maintaining data hygiene, removing outdated or incorrect documents, or complying with data retention policies. note that this operation may be subject to user permissions within the bamboohr system, and successful deletion might depend on the file's association with other records or processes.
     */
    DELETE_COMPANY_FILE: "BAMBOOHR_DELETE_COMPANY_FILE",
    /**
     * Deletes a specific file associated with an employee in the bamboohr system. this endpoint should be used when you need to permanently remove a document or file from an employee's record. it's particularly useful for maintaining data accuracy, complying with document retention policies, or removing outdated or incorrect files. the operation is irreversible, so caution should be exercised when using this endpoint. it does not provide any confirmation or retrieve the file content before deletion, so it's advisable to verify the correct fileid before making the call.
     */
    DELETE_EMPLOYEE_FILE: "BAMBOOHR_DELETE_EMPLOYEE_FILE",
    /**
     * Deletes a specific employee training record from the bamboohr system. this endpoint is used to permanently remove a training record associated with an employee, such as completed courses, certifications, or professional development activities. it should be used when a training record needs to be removed due to errors, duplications, or when it's no longer relevant. caution should be exercised when using this endpoint, as the deletion is irreversible and may affect reporting or compliance tracking. ensure proper authorization and verification before deleting any records.
     */
    DELETE_EMPLOYEE_TRAINING_RECORD: "BAMBOOHR_DELETE_EMPLOYEE_TRAINING_RECORD",
    /**
     * This endpoint deletes a specific goal associated with an employee in the bamboohr performance management system. it should be used when a goal is no longer relevant, has been completed, or needs to be removed from an employee's record. the operation is permanent and cannot be undone, so it should be used with caution. this endpoint is particularly useful for maintaining up-to-date and relevant goal records, especially during performance review cycles or when organizational objectives change. it does not return any data upon successful deletion, and it's important to note that it will not affect any historical performance data or completed goal achievements that may be associated with the deleted goal.
     */
    DELETE_GOAL: "BAMBOOHR_DELETE_GOAL",
    /**
     * Deletes a specific comment on an employee's performance goal in the bamboohr system. this endpoint should be used when you need to remove feedback, notes, or other comments that are no longer relevant or appropriate for a particular goal. it's particularly useful for maintaining clean and up-to-date goal tracking by removing outdated or incorrect information. the deletion is permanent, so use this endpoint with caution. it does not return any content upon successful deletion, only a success status code.
     */
    DELETE_GOAL_COMMENT: "BAMBOOHR_DELETE_GOAL_COMMENT",
    /**
     * Deletes multiple clock entries from the bamboohr time tracking system. this endpoint allows administrators or authorized users to remove specific time clock entries identified by their unique ids. it should be used when there's a need to correct errors, remove duplicate entries, or manage outdated records in bulk. the endpoint processes the deletion of all specified entries in a single request, improving efficiency for large-scale time tracking data management. however, it's important to note that this action is irreversible, and deleted clock entries cannot be recovered through the api.
     */
    DELETE_TIMESHEET_CLOCK_ENTRIES: "BAMBOOHR_DELETE_TIMESHEET_CLOCK_ENTRIES",
    /**
     * Deletes multiple time tracking hour entries from the bamboohr system. this endpoint allows for bulk removal of hour entries, which is useful for correcting errors, removing duplicate entries, or cleaning up historical time tracking data. it should be used when you need to permanently remove specific hour entries from an employee's time tracking record. be cautious when using this endpoint, as deleted entries cannot be recovered. this tool does not provide a way to retrieve or view the entries before deletion, so it's recommended to verify the entries to be deleted using other endpoints before calling this one.
     */
    DELETE_TIMESHEET_HOUR_ENTRIES: "BAMBOOHR_DELETE_TIMESHEET_HOUR_ENTRIES",
    /**
     * Deletes a specific training category from the bamboohr system for a given company. this endpoint should be used when you need to remove an obsolete or incorrect training category from the company's hr records. it permanently removes the category and all associated data, so it should be used with caution. the operation cannot be undone, and any training records linked to this category may be affected. ensure you have the necessary permissions and have verified the category id before deletion.
     */
    DELETE_TRAINING_CATEGORY: "BAMBOOHR_DELETE_TRAINING_CATEGORY",
    /**
     * Deletes a specific training type from the bamboohr system. this endpoint is used to permanently remove a training category that is no longer needed or was created in error. it should be used with caution as the deletion is irreversible and may affect related training records. the endpoint requires the company's bamboohr subdomain and the unique identifier of the training type to be deleted. it's important to note that this action might have cascading effects on employees' training records or reports that reference the deleted training type.
     */
    DELETE_TRAINING_TYPE: "BAMBOOHR_DELETE_TRAINING_TYPE",
    /**
     * The deletewebhook endpoint is used to remove a specific webhook from the bamboohr system. this operation permanently deletes the webhook configuration, stopping any further notifications for the events it was set up to monitor. use this endpoint when you need to discontinue a particular integration or clean up unused webhooks to maintain an organized webhook structure. it's important to note that this action cannot be undone, so it should be used with caution. the endpoint requires the company's domain and the unique identifier of the webhook to ensure precise targeting of the webhook to be deleted.
     */
    DELETE_WEBHOOK: "BAMBOOHR_DELETE_WEBHOOK",
    /**
     * This endpoint allows you to adjust existing time tracking records in bamboohr. it is used to update the number of hours worked for a specific time entry, identified by its unique time tracking id. this tool is particularly useful for correcting errors in time logs, adjusting hours after the fact, or updating time records based on new information. the endpoint requires both the time tracking id and the new total hours worked, ensuring accurate and targeted updates to employee time records. it's important to note that this endpoint updates the total hours worked, not the difference from the original value.
     */
    EDIT_AN_HOUR_RECORD: "BAMBOOHR_EDIT_AN_HOUR_RECORD",
    /**
     * This endpoint allows an employee to clock in and record their work start time in the bamboohr time tracking system. it captures essential information such as the start time, timezone, and optionally, the project and task being worked on, as well as the precise geolocation of the clock-in event. this tool should be used when an employee begins their work shift or returns from a break. it's particularly useful for businesses tracking remote work, field services, or requiring detailed time logs for project-based billing. the endpoint does not handle clock-out events directly; a separate call would be needed for that purpose.
     */
    EDIT_CURRENT_CLOCK_IN_ENTRY: "BAMBOOHR_EDIT_CURRENT_CLOCK_IN_ENTRY",
    /**
     * Updates a specific row in a custom table for an individual employee in bamboohr. this endpoint allows you to modify various aspects of an employee's record, such as their job information, location, or organizational details. it's particularly useful for keeping employee data current when there are changes in their role, department, or other key information. the endpoint should be used when there's a need to update specific fields in a custom table that's associated with an employee, rather than modifying their core profile. it's important to note that this endpoint updates existing data and doesn't create new entries. ensure that the table and employee id exist before making the call, as the endpoint doesn't provide validation for non-existent records.
     */
    ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW: "BAMBOOHR_ENSURE_EMPLOYEE_FIELDS_FOR_TABLE_ROW",
    /**
     * Retrieves the time off calculator information for a specific employee in bamboohr. this endpoint is used to access details about an employee's time off balances, accruals, and other related metrics. it's particularly useful for hr managers or employees themselves to check current leave balances or plan future time off requests. the calculator may include information such as available vacation days, sick leave, or other types of time off specific to the company's policies. this endpoint should be used when there's a need to programmatically access up-to-date time off information for an individual employee, which can be helpful for integrating with other systems or generating reports. note that the exact details returned may vary based on the company's bamboohr configuration and time off policies.
     */
    ESTIMATE_FUTURE_TIME_OFF_BALANCES: "BAMBOOHR_ESTIMATE_FUTURE_TIME_OFF_BALANCES",
    /**
     * Retrieves a list of employees whose records have been changed in the bamboohr system for a specific company. this endpoint is useful for syncing employee data with external systems or for auditing purposes. it allows you to efficiently track updates to employee information without querying all employee records. the endpoint returns only the identifiers of changed employees, not the actual changes, so you may need to make additional api calls to fetch the updated details. use this endpoint regularly to keep your systems in sync with bamboohr data. note that the specific time range for changes and the format of the response are not provided in the given schema and may require additional parameters or documentation.
     */
    GETS_ALL_UPDATED_EMPLOYEE_IDS: "BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_IDS",
    /**
     * Retrieves information about changes made to a specific table in the bamboohr system for a given company. this endpoint is useful for tracking updates and modifications to employee data or other hr-related information stored in bamboohr. it allows you to monitor changes in a particular table, helping maintain data integrity and auditing purposes. use this endpoint when you need to review recent changes, sync data with external systems, or generate reports on data modifications within a specific bamboohr table. the endpoint requires specifying both the company domain and the target table name to fetch the relevant change data.
     */
    GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA: "BAMBOOHR_GETS_ALL_UPDATED_EMPLOYEE_TABLE_DATA",
    /**
     * Retrieves a list of all webhooks configured for a specific company in bamboohr. this endpoint allows you to view the current webhook subscriptions, providing information about the events being monitored and the target urls where notifications are sent. use this endpoint when you need to audit existing webhooks, verify webhook configurations, or prepare for updating or deleting webhooks. it's particularly useful for maintaining and troubleshooting integrations that rely on real-time data from bamboohr. note that this endpoint only lists webhooks; it does not provide details about individual webhook events or allow for webhook creation or modification.
     */
    GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY: "BAMBOOHR_GETS_AS_LIST_OF_WEBHOOKS_FOR_THE_USER_API_KEY",
    /**
     * Retrieves aggregated performance data for a specific employee's goal within the bamboohr system. this endpoint allows users to fetch consolidated information about a particular goal, providing insights into the employee's progress and performance related to that objective. it should be used when detailed aggregate data about a specific goal is needed, such as for performance reviews, goal tracking, or progress reporting. the endpoint focuses solely on individual goal data and does not provide company-wide or team-level aggregates. note that the specific aggregated metrics returned may vary based on the goal type and settings within your bamboohr environment.
     */
    GET_AGGREGATE_GOAL_INFO: "BAMBOOHR_GET_AGGREGATE_GOAL_INFO",
    /**
     * Retrieves aggregated goal information for a specific employee within a company's bamboohr system. this endpoint provides a comprehensive overview of an employee's goals, including a list of all goals, goal type counts, and goal comment counts. it's particularly useful for managers or hr professionals who need a quick summary of an employee's performance objectives and progress. the tool should be used when a high-level view of an employee's goal-related activities is required, such as during performance reviews or goal-setting sessions. it does not provide detailed information about individual goals or allow for goal modifications.
     */
    GET_ALL_AGGREGATE_GOAL_INFO: "BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO",
    /**
     * Retrieves aggregated performance goal data for a specific employee within a company's bamboohr system. this endpoint provides a comprehensive summary of an employee's goals, potentially including metrics such as goal completion rates, progress status, and overall performance against set objectives. it's particularly useful for managers and hr professionals who need a quick overview of an employee's goal-related performance without diving into individual goal details. the aggregated data can be valuable for performance reviews, goal-setting sessions, or generating reports on employee progress. note that this endpoint focuses on summarized data and may not provide granular details about each individual goal.
     */
    GET_ALL_AGGREGATE_GOAL_INFO_VERSION11: "BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION11",
    /**
     * Retrieves aggregated information about an employee's goals within the bamboohr performance management system. this endpoint provides a summary of goal-related data for a specific employee, which may include metrics such as goal completion rates, progress status, or overall performance indicators. it's particularly useful for managers or hr professionals who need a quick overview of an employee's goal achievement without delving into individual goal details. the aggregated data can be valuable for performance reviews, progress tracking, or identifying areas where an employee may need additional support or recognition. note that this endpoint focuses on summarized data and may not provide exhaustive details about each individual goal.
     */
    GET_ALL_AGGREGATE_GOAL_INFO_VERSION12: "BAMBOOHR_GET_ALL_AGGREGATE_GOAL_INFO_VERSION12",
    /**
     * Retrieves a list of dependents for all employees in the company. this endpoint provides comprehensive information about employee dependents, which may include family members, beneficiaries, or other individuals associated with employees for hr purposes such as benefits administration or emergency contacts. it's particularly useful for generating reports, updating benefits information, or performing company-wide dependent audits. the endpoint returns data for all employees, so it should be used cautiously and in compliance with data privacy regulations. note that this endpoint does not support filtering or pagination, so it may return a large amount of data for companies with many employees and dependents.
     */
    GET_ALL_EMPLOYEE_DEPENDENTS: "BAMBOOHR_GET_ALL_EMPLOYEE_DEPENDENTS",
    /**
     * Retrieves a specific employee file from the bamboohr system. this endpoint allows you to fetch individual documents or records associated with employees, such as contracts, performance reviews, or personal information forms. it should be used when you need to access or download a particular file for an employee. the endpoint requires the company's bamboohr subdomain and the unique file identifier to locate and retrieve the correct file. note that this endpoint only retrieves the file content; it does not provide metadata about the file or list multiple files. ensure you have the necessary permissions to access the requested file, as bamboohr's access controls may restrict file retrieval based on user roles.
     */
    GET_AN_COMPANY_FILE: "BAMBOOHR_GET_AN_COMPANY_FILE",
    /**
     * Retrieves a specific file associated with an employee from the bamboohr system. this endpoint allows you to access individual documents or files that have been uploaded to an employee's record, such as resumes, contracts, or performance reviews. it should be used when you need to fetch a particular file for viewing, downloading, or processing. the endpoint requires precise identification of the company, employee, and file, ensuring secure and accurate retrieval of sensitive hr documents. it's important to note that this endpoint only retrieves the file; it does not provide capabilities for uploading, modifying, or deleting files. access to files may be subject to user permissions within the bamboohr system.
     */
    GET_AN_EMPLOYEE_FILE: "BAMBOOHR_GET_AN_EMPLOYEE_FILE",
    /**
     * Retrieves an employee's photo from the bamboohr system in a specified size. this endpoint is used to fetch visual representations of employees, which can be useful for directories, profiles, or other hr-related applications that require employee images. the tool allows for flexibility in photo size, enabling developers to retrieve appropriately sized images for different use cases, such as thumbnails or full-size profile pictures. it should be used when an application needs to display or process an employee's photo. note that the availability and quality of photos depend on what has been uploaded to the bamboohr system for each employee.
     */
    GET_AN_EMPLOYEE_PHOTO: "BAMBOOHR_GET_AN_EMPLOYEE_PHOTO",
    /**
     * Retrieves the withholding information for a specific employee within a company's bamboohr system. this endpoint allows hr professionals and authorized personnel to access tax withholding details, which are crucial for payroll processing and tax reporting. it provides up-to-date information on an employee's tax withholding status, including federal, state, and local tax elections. use this endpoint when you need to review or verify an employee's current withholding information, such as during payroll runs, annual reviews, or when an employee requests changes to their withholding. the endpoint returns only the most recent withholding data and does not provide historical information or the ability to modify withholding details.
     */
    GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS: "BAMBOOHR_GET_AN_EMPLOYEE_S_DEFAULT_WITHHOLDINGS",
    /**
     * Retrieves detailed information about a specific employee's direct deposit account within a bamboohr company instance. this endpoint is used to access sensitive financial information, such as bank account details and routing numbers, associated with an employee's payroll. it should be used when there's a need to view or verify an employee's direct deposit setup, such as during payroll processing or when an employee requests to confirm their banking information. the endpoint returns read-only data and does not allow modifications to the account information. it's important to note that this endpoint should only be accessed by authorized personnel with appropriate permissions due to the sensitive nature of the data involved.
     */
    GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION: "BAMBOOHR_GET_AN_EMPLOYEE_S_DIRECT_DEPOSIT_INFORMATION",
    /**
     * Retrieves detailed pay stub information for a specific employee within a company's bamboohr system. this endpoint allows hr professionals or authorized personnel to access an individual employee's pay details, including earnings, deductions, and net pay for a particular pay period. it's particularly useful for payroll verification, addressing employee inquiries about their compensation, or generating reports. the endpoint should be used when specific, detailed pay information is needed for an individual employee. it does not provide aggregate payroll data or modify any information. note that access to this sensitive data is likely to be restricted to users with appropriate permissions within the bamboohr system.
     */
    GET_AN_EMPLOYEE_S_PAYSTUB: "BAMBOOHR_GET_AN_EMPLOYEE_S_PAYSTUB",
    /**
     * Retrieves the unpaid pay stubs for a specific employee within a company's bamboohr account. this endpoint is used to access detailed information about an employee's earnings that have not yet been paid out, which is crucial for payroll processing and financial record-keeping. it should be used when there's a need to review or verify an employee's pending compensation before the actual payment is made. the endpoint provides up-to-date information on unpaid wages, bonuses, or other forms of compensation, but does not include historical data for already paid stubs. it's particularly useful for payroll administrators, finance teams, or integrated payroll systems that need to ensure accurate and timely payment processing.
     */
    GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS: "BAMBOOHR_GET_AN_EMPLOYEE_S_UNPAID_PAYSTUBS",
    /**
     * Retrieves a specific time tracking record from bamboohr based on the provided company domain and record id. this endpoint allows you to fetch detailed information about a single time entry, including the employee, date, hours worked, and any associated metadata. it's particularly useful for auditing time entries, generating reports, or displaying detailed time tracking information in custom interfaces. the endpoint should be used when you need to access or verify the details of a specific time tracking record. note that this endpoint only retrieves data and does not modify any existing records.
     */
    GET_AN_HOUR_RECORD: "BAMBOOHR_GET_AN_HOUR_RECORD",
    /**
     * Retrieves a list of applications submitted through the bamboohr applicant tracking system (ats). this endpoint allows hr personnel and recruiters to access and review all job applications in a centralized manner. it's particularly useful for managing the hiring process, tracking candidate progress, and generating reports on recruitment activities. the endpoint returns detailed information about each application, which may include applicant details, applied position, application date, and current status. use this endpoint when you need to fetch application data for review, analysis, or integration with other hr systems. note that the response may be paginated for large datasets, and additional parameters for filtering or sorting may be available but are not specified in the given schema.
     */
    GET_APPLICATIONS: "BAMBOOHR_GET_APPLICATIONS",
    /**
     * Retrieves detailed information about a specific job application from bamboohr's applicant tracking system. this endpoint allows you to access comprehensive data related to a single application, including applicant details, application status, and any custom fields associated with the application process. it's particularly useful when you need to review or process individual applications, such as during candidate evaluation or interview scheduling. the endpoint provides a snapshot of the application at the time of the request, reflecting the most current information available in the system. note that this endpoint is read-only and does not allow modification of application data.
     */
    GET_APPLICATION_DETAILS: "BAMBOOHR_GET_APPLICATION_DETAILS",
    /**
     * Retrieves a specific clock entry for an employee from the bamboohr time tracking system. this endpoint allows you to fetch detailed information about a single clock-in or clock-out record, including timestamps and any associated metadata. use this when you need to review or verify a particular time entry for an employee, such as for payroll processing, attendance verification, or dispute resolution. the endpoint provides access to historical time tracking data, but it does not allow modification of existing entries or creation of new ones. note that the accessibility of clock entries may be subject to company-specific permissions and retention policies.
     */
    GET_A_CLOCK_ENTRY: "BAMBOOHR_GET_A_CLOCK_ENTRY",
    /**
     * Retrieves detailed information about a specific company benefit offered by an organization using bamboohr. this endpoint allows hr administrators or integrated systems to fetch comprehensive data about a particular benefit, such as health insurance plans, retirement options, or other employee perks. it's useful for reviewing benefit details, verifying information, or displaying benefit specifics to employees. the endpoint requires the company's bamboohr subdomain and the unique identifier of the benefit, ensuring accurate and targeted data retrieval. note that this endpoint only provides information about the benefit itself and does not include employee enrollment data or personal information.
     */
    GET_A_COMPANY_BENEFIT: "BAMBOOHR_GET_A_COMPANY_BENEFIT",
    /**
     * Retrieves a specific daily time tracking entry for an employee in bamboohr. this endpoint allows you to fetch detailed information about a single day's time tracking record, including clock-in and clock-out times, total hours worked, and any associated metadata. it's particularly useful when you need to review or verify an employee's time entry for a specific date. the endpoint requires the company domain, employee id, and the unique identifier of the daily entry to ensure accurate and secure data retrieval. use this endpoint when you need to access or display detailed time tracking information for auditing, payroll processing, or employee time management purposes.
     */
    GET_A_DAILY_ENTRY: "BAMBOOHR_GET_A_DAILY_ENTRY",
    /**
     * Retrieves a comprehensive list of company-wide benefits offered by the organization as configured in bamboohr. this endpoint provides details about various benefit programs such as health insurance plans, retirement options, paid time off policies, and other perks available to employees. it's particularly useful for hr managers and system integrators who need to access or sync the company's benefit information across different platforms. the endpoint should be used when you need an overview of all benefits at the company level, rather than benefits assigned to specific employees. note that this endpoint does not provide individual employee enrollment information or personalized benefit details.
     */
    GET_A_LIST_OF_COMPANY_BENEFITS: "BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFITS",
    /**
     * Retrieves a list of company benefit types available in the specified bamboohr company account. this endpoint allows hr administrators and integrated systems to fetch information about the various benefit categories or types that the company offers to its employees. it's useful for populating dropdown menus in benefits enrollment forms, generating reports on benefit offerings, or syncing benefit type data with other hr systems. the endpoint provides a comprehensive view of the benefit structure within the organization but does not include details about specific benefit plans or employee enrollments.
     */
    GET_A_LIST_OF_COMPANY_BENEFIT_TYPES: "BAMBOOHR_GET_A_LIST_OF_COMPANY_BENEFIT_TYPES",
    /**
     * Retrieves employee benefit information based on specified filters. this endpoint allows hr professionals and benefit administrators to query and access employee benefit data using various criteria such as employee id, company benefit plan id, or enrollment status effective date. it is particularly useful for tasks like auditing benefit enrollments, managing open enrollment periods, or generating reports on benefit plan participation. the endpoint requires at least one filter to be specified and can combine multiple filters for more precise queries. it should be used when specific employee benefit information is needed, rather than for bulk data retrieval. note that this endpoint only provides filter-based access to benefit data and does not support creating, updating, or deleting benefit information.
     */
    GET_A_LIST_OF_EMPLOYEE_BENEFITS: "BAMBOOHR_GET_A_LIST_OF_EMPLOYEE_BENEFITS",
    /**
     * Retrieves metadata about available fields in the bamboohr api for a specific company. this endpoint provides essential information about the structure and attributes of employee data that can be accessed or manipulated through other api calls. it should be used when you need to understand the available fields, their data types, and any constraints or formatting requirements. this information is crucial for constructing accurate queries or updates to employee records. the endpoint does not return actual employee data; it only provides metadata about the fields themselves.
     */
    GET_A_LIST_OF_FIELDS: "BAMBOOHR_GET_A_LIST_OF_FIELDS",
    /**
     * Retrieves metadata information about the tables available in the bamboohr system for a specific company. this endpoint is essential for developers and integrators who need to understand the structure of the bamboohr data model. it provides details about the available tables, which can be used to plan data retrieval, reporting, and integration strategies. the metadata likely includes table names, field names, and potentially data types or other structural information. this tool should be used when initializing a new integration or when updates to the bamboohr system might have changed the data structure. it's particularly useful for dynamic integrations that need to adapt to changes in the bamboohr schema. note that this endpoint doesn't return the actual data within the tables, only their structural information.
     */
    GET_A_LIST_OF_TABULAR_FIELDS: "BAMBOOHR_GET_A_LIST_OF_TABULAR_FIELDS",
    /**
     * Retrieves metadata about users within a specific company's bamboohr instance. this endpoint is useful for obtaining information about all users in the system, which can be valuable for user management, reporting, and integration purposes. it provides a comprehensive list of users and their associated metadata, allowing for efficient bulk retrieval of user information. this endpoint should be used when you need to gather data about multiple users simultaneously or when you require an up-to-date list of all users in the bamboohr system for a given company.
     */
    GET_A_LIST_OF_USERS: "BAMBOOHR_GET_A_LIST_OF_USERS",
    /**
     * Retrieves a list of employees who are currently out of office or on leave within your organization. this endpoint is part of bamboohr's time off management feature and provides real-time information about employee absences. use this endpoint to get an overview of current staff availability, which can be helpful for resource planning, scheduling, or maintaining an up-to-date company-wide calendar. the endpoint returns data for all types of absences, including vacation, sick leave, and other approved time-off categories. note that this endpoint only provides current "who's out" information and does not offer historical or future absence data.
     */
    GET_A_LIST_OF_WHO_S_OUT: "BAMBOOHR_GET_A_LIST_OF_WHO_S_OUT",
    /**
     * Retrieves a specific timesheet for a given employee within a bamboohr company environment. this endpoint allows you to fetch detailed time tracking information for a particular timesheet, identified by its unique id, associated with a specific employee. it's useful for reviewing an employee's work hours, verifying time entries, or gathering data for payroll processing. the endpoint should be used when you need to access or analyze individual timesheet data, rather than summary or aggregate time tracking information. note that this endpoint retrieves data for a single timesheet only; for bulk timesheet data or time tracking summaries, you may need to use different endpoints or make multiple calls.
     */
    GET_A_TIMESHEET_FOR_AN_EMPLOYEE: "BAMBOOHR_GET_A_TIMESHEET_FOR_AN_EMPLOYEE",
    /**
     * Retrieves the benefit coverages information for employees within a specific company in bamboohr. this endpoint allows hr administrators and authorized personnel to access detailed data about the various benefit plans and coverage options available to employees. it provides a comprehensive overview of the company's benefit offerings, which may include health insurance, dental plans, vision coverage, life insurance, and other employee benefits. use this endpoint when you need to review, audit, or report on the current benefit coverage landscape for the entire organization. the returned data can be useful for benefits administration, open enrollment planning, and ensuring compliance with company policies and regulations.
     */
    GET_BENEFIT_COVERAGES: "BAMBOOHR_GET_BENEFIT_COVERAGES",
    /**
     * Retrieves detailed information about a specific payroll deduction by its id for a given company in bamboohr. this endpoint allows hr administrators and payroll managers to access comprehensive data about individual deductions, such as type, amount, frequency, and associated employee information. it's particularly useful when reviewing or auditing payroll deductions, preparing reports, or addressing employee inquiries about specific deductions. the endpoint provides up-to-date information but does not allow modifications to the deduction data.
     */
    GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE: "BAMBOOHR_GET_BENEFIT_DEDUCTIONS_FOR_EMPLOYEE",
    /**
     * Retrieves a comprehensive list of all deduction types configured in the bamboohr system for a specific company. this endpoint is crucial for benefits administrators and payroll managers who need to review or audit the various deduction categories set up in their bamboohr instance. it provides a complete overview of all possible deductions that can be applied to employee paychecks, such as health insurance premiums, retirement contributions, or other benefits-related deductions. this tool should be used when a full inventory of deduction types is required, for example, during benefit enrollment periods, payroll reconciliation, or when updating company-wide benefit policies. note that this endpoint does not provide individual employee deduction information, but rather the types of deductions available in the system.
     */
    GET_BENEFIT_DEDUCTION_TYPES: "BAMBOOHR_GET_BENEFIT_DEDUCTION_TYPES",
    /**
     * Retrieves a list of benefit groups for a specific company in bamboohr. this endpoint allows you to access information about the various benefit groups set up within your organization, which can be crucial for managing employee benefits and understanding the structure of your company's benefit offerings. it's particularly useful when you need to review or audit the benefit groups available to employees, or when integrating benefit information with other hr systems. the endpoint doesn't support creating, updating, or deleting benefit groups, nor does it allow for enrolling employees or changing benefit statuses. use this endpoint when you need a comprehensive overview of all benefit groups in your bamboohr instance.
     */
    GET_BENEFIT_GROUPS: "BAMBOOHR_GET_BENEFIT_GROUPS",
    /**
     * Retrieves a list of employees associated with benefit groups within a specific bamboohr company instance. this endpoint is useful for hr administrators and systems integrators who need to access or audit employee benefit group assignments. it provides a comprehensive view of how employees are categorized for benefits purposes, which can be essential for managing enrollment periods, analyzing benefit distribution, or synchronizing data with other hr systems. the endpoint should be used when you need an up-to-date snapshot of benefit group memberships across the organization. note that this endpoint only provides read access and cannot be used to modify benefit group assignments. the returned data may include employee ids, names, and their associated benefit group information, but the exact structure of the response should be verified in the api documentation.
     */
    GET_BENEFIT_GROUP_EMPLOYEES: "BAMBOOHR_GET_BENEFIT_GROUP_EMPLOYEES",
    /**
     * Retrieves a list of benefit group plans for a specified company in bamboohr. this endpoint is used to fetch information about the various benefit plans associated with different groups within the organization. it's particularly useful for hr administrators and benefits managers who need to review or manage the benefit offerings across the company. the endpoint returns details about each benefit group plan, which may include plan names, coverage types, eligibility criteria, and other relevant information. use this endpoint when you need a comprehensive overview of the benefit structure within the company or when preparing for benefits enrollment periods. note that the specific details returned may vary based on the company's configuration and the user's access permissions within bamboohr.
     */
    GET_BENEFIT_GROUP_PLANS: "BAMBOOHR_GET_BENEFIT_GROUP_PLANS",
    /**
     * Retrieves the costs associated with benefit group plans for a specific company in bamboohr. this endpoint provides detailed financial information about employee benefit plans, including premiums, contributions, and other related expenses. it is particularly useful for hr managers and finance teams who need to analyze and manage benefit costs across different employee groups. the endpoint should be used when you need to review or report on the current cost structure of your company's benefit plans. it does not modify any data and is intended for read-only operations. note that the response may not include historical cost data or future projections, focusing instead on current cost information.
     */
    GET_BENEFIT_GROUP_PLAN_COSTS: "BAMBOOHR_GET_BENEFIT_GROUP_PLAN_COSTS",
    /**
     * Retrieves a list of benefit plans available for the specified company in bamboohr. this endpoint allows you to fetch comprehensive information about the various employee benefit plans offered by the organization, such as health insurance, retirement plans, and other perks. it should be used when you need to review or analyze the benefit offerings for a specific company within bamboohr. the endpoint provides a snapshot of current benefit plans and does not include historical data or employee enrollment information. keep in mind that the level of detail in the response may vary depending on the company's configuration and data availability in bamboohr.
     */
    GET_BENEFIT_PLANS: "BAMBOOHR_GET_BENEFIT_PLANS",
    /**
     * Retrieves detailed information about benefit plan coverages for employees within a specific bamboohr company environment. this endpoint provides comprehensive data on various benefits and coverages offered by the company, such as health insurance, retirement plans, and other employee benefits. it should be used when you need to access or review the current benefit plans and coverage details for employees. the endpoint is particularly useful for hr administrators, benefits coordinators, or integration systems that need to synchronize benefit information with other platforms. note that this endpoint only provides read access to the benefit plan coverage data and cannot be used to modify or update this information.
     */
    GET_BENEFIT_PLAN_COVERAGES: "BAMBOOHR_GET_BENEFIT_PLAN_COVERAGES",
    /**
     * Retrieves detailed information about a specific employee plan within a company's bamboohr system. this endpoint allows hr professionals and authorized personnel to access individual plan details, which may include benefits information, compensation arrangements, or other work-related agreements. it's particularly useful when reviewing or updating an employee's plan, during performance evaluations, or when making changes to employee benefits. the endpoint requires the company's unique domain identifier and the specific plan id to fetch the correct information. while it provides access to plan details, it does not allow modifications to the plan through this get request. for any changes or updates to the plan, a separate endpoint (likely a put or patch request) would be necessary.
     */
    GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE: "BAMBOOHR_GET_BENEFIT_PLAN_DEDUCTIONS_BY_EMPLOYEE",
    /**
     * Retrieves a list of locations associated with the applicant tracking system for a specific bamboohr company account. this endpoint is useful for obtaining information about the various locations or offices where job openings may be available or where applicants might be considered for placement. it can be used to populate location dropdown menus in job application forms or to filter job postings by location. the endpoint provides a comprehensive view of all locations configured in the company's applicant tracking system, which is particularly valuable for organizations with multiple office locations or those offering remote work options. note that this endpoint only returns location data and does not provide any information about specific job openings or applicants associated with these locations.
     */
    GET_COMPANY_LOCATIONS: "BAMBOOHR_GET_COMPANY_LOCATIONS",
    /**
     * Retrieves a specific report from the bamboohr system for a given company. this endpoint allows users to fetch pre-configured reports containing various hr-related data such as employee information, company statistics, or custom reports created within the bamboohr platform. it is particularly useful for extracting structured data for analysis, reporting, or integration with other systems. the endpoint should be used when specific report data is needed, rather than raw data queries. note that the availability and content of reports depend on the company's bamboohr configuration and permissions.
     */
    GET_COMPANY_REPORT: "BAMBOOHR_GET_COMPANY_REPORT",
    /**
     * Retrieves metadata about reference lists available in a company's bamboohr instance. this endpoint provides essential information about predefined lists used across various bamboohr operations, such as employee statuses, departments, or job titles. it's particularly useful for understanding the structure and available options within your bamboohr setup, which can be crucial for data integration, reporting, or building custom applications that interact with bamboohr data. the endpoint returns a comprehensive overview of all available lists, their purposes, and potentially their contents, allowing developers to efficiently work with standardized data sets within the bamboohr ecosystem. use this endpoint when you need to explore or validate the available options for fields that rely on predefined lists in your bamboohr instance.
     */
    GET_DETAILS_FOR_LIST_FIELDS: "BAMBOOHR_GET_DETAILS_FOR_LIST_FIELDS",
    /**
     * Retrieves detailed information for a specific employee within a company's bamboohr system. this endpoint allows you to fetch comprehensive employee data using the employee's unique identifier. it's particularly useful when you need to access or display individual employee records, update employee information, or verify employee details. the endpoint returns all available fields for the employee, which may include personal information, job details, compensation data, and custom fields configured for the company. use this endpoint when you need specific, up-to-date information about a single employee. note that the exact fields returned may vary based on the company's bamboohr configuration and the permissions of the authenticated user making the request.
     */
    GET_EMPLOYEE: "BAMBOOHR_GET_EMPLOYEE",
    /**
     * Retrieves detailed information about a specific employee deduction within a bamboohr company account. this endpoint allows hr professionals and authorized personnel to access individual deduction records, which may include details such as the deduction type, amount, frequency, and associated employee. it's particularly useful for verifying deduction details, auditing payroll information, or gathering data for financial reporting. the endpoint should be used when specific deduction information is needed, rather than for bulk data retrieval. note that this endpoint provides read-only access to deduction data and cannot be used to modify existing deductions or create new ones.
     */
    GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN: "BAMBOOHR_GET_EMPLOYEE_DEDUCTIONS_BY_BENEFIT_PLAN",
    /**
     * Retrieves detailed information about a specific employee's dependent in bamboohr. this endpoint is used to fetch data such as the dependent's name, relationship to the employee, date of birth, and other relevant details stored in the system. it's particularly useful when you need to access or verify information about an employee's family members or other dependents for benefits administration, emergency contact updates, or other hr-related tasks. the endpoint requires both the company's unique domain and the specific dependent's id to locate and return the correct information.
     */
    GET_EMPLOYEE_DEPENDENT: "BAMBOOHR_GET_EMPLOYEE_DEPENDENT",
    /**
     * Retrieves the employee directory for a specified bamboohr company. this endpoint provides a list of employees within the company, including basic information such as names, job titles, and departments. it's useful for getting an overview of the company's workforce or for integrating employee data into other systems. the endpoint should be used when you need a comprehensive list of employees, but it may not include detailed information about each employee. for more specific or detailed employee data, consider using custom reports or individual employee endpoints instead. keep in mind that the amount and type of information returned may depend on the user's permissions within the bamboohr system.
     */
    GET_EMPLOYEE_DIRECTORY: "BAMBOOHR_GET_EMPLOYEE_DIRECTORY",
    /**
     * Retrieves a list of projects assigned to a specific employee within a company's bamboohr account. this endpoint is part of the time tracking api and allows you to fetch project assignments for individual employees, which is essential for managing and tracking employee time across different projects. use this endpoint when you need to view or analyze an employee's project allocations, plan resource distribution, or generate reports on employee project involvement. the endpoint returns only current project assignments and does not provide historical data or future planned assignments. it's particularly useful for managers and hr professionals who need to oversee employee workloads and project distributions.
     */
    GET_EMPLOYEE_PROJECTS: "BAMBOOHR_GET_EMPLOYEE_PROJECTS",
    /**
     * Retrieves specific table data for a given employee from a company's bamboohr instance. this endpoint allows you to access structured information about an employee, such as job details, employment status, or custom fields, depending on the specified table. it's particularly useful for integrations that need to pull specific categories of employee data for reporting, analysis, or synchronization with other systems. the endpoint requires the company's bamboohr domain, the employee's unique identifier, and the name of the table to be queried. note that the availability and content of tables may vary based on the company's bamboohr configuration.
     */
    GET_EMPLOYEE_TABLE_ROWS: "BAMBOOHR_GET_EMPLOYEE_TABLE_ROWS",
    /**
     * Retrieves the performance goals for a specific employee within a company's bamboohr account. this endpoint allows you to fetch the current set of goals associated with an individual employee, which may include both active and completed goals. it's particularly useful for managers or hr professionals who need to review an employee's objectives, track progress, or prepare for performance discussions. the endpoint should be used when you need to access detailed goal information for a single employee, such as during performance reviews, goal-setting sessions, or when generating reports on employee performance. note that this endpoint only provides goal data and does not include other performance metrics or feedback. the response will likely include details such as goal descriptions, target dates, current status, and any associated notes or updates.
     */
    GET_GOALS: "BAMBOOHR_GET_GOALS",
    /**
     * Retrieves comments associated with a specific goal for a particular employee within a company's bamboohr environment. this endpoint is useful for tracking feedback, progress updates, and discussions related to employee performance goals. it provides valuable insights into the ongoing communication and evaluation process surrounding individual employee objectives. the tool should be used when detailed information about goal-related comments is needed, such as during performance reviews, goal assessments, or when monitoring employee progress. it does not modify any data and is intended for read-only access to existing comments. note that this endpoint only returns comments for a single goal at a time and does not provide information about the goal itself or other aspects of employee performance.
     */
    GET_GOAL_COMMENTS: "BAMBOOHR_GET_GOAL_COMMENTS",
    /**
     * Retrieves the available filters for an employee's performance goals in bamboohr. this endpoint is used to fetch a list of filters that can be applied when querying or managing an employee's goals. these filters may include criteria such as goal status, goal type, time frame, or other relevant categorizations specific to the company's performance management system. the retrieved filters can be used to refine subsequent api calls related to employee goals, allowing for more targeted and efficient data retrieval or updates. this endpoint is particularly useful when building interfaces or reports that require dynamic filtering options for employee goals.
     */
    GET_GOAL_STATUS_COUNTS: "BAMBOOHR_GET_GOAL_STATUS_COUNTS",
    /**
     * Retrieves the available filters for an employee's performance goals in bamboohr. this endpoint is used to fetch a list of filter options that can be applied when querying or managing an employee's goals within the performance management system. it provides the necessary parameters to narrow down goal-related data, such as by goal type, status, or time frame. this tool is particularly useful when preparing to search or analyze an employee's goals, as it allows you to understand the available filtering options before making more specific goal-related api calls.
     */
    GET_GOAL_STATUS_COUNTS_VERSION11: "BAMBOOHR_GET_GOAL_STATUS_COUNTS_VERSION11",
    /**
     * Retrieves a list of hiring leads from the bamboohr applicant tracking system (ats) for a specified company. this endpoint allows users to access information about individuals responsible for various aspects of the hiring process, such as recruiters, hiring managers, or interviewers. it should be used when you need to gather data on the personnel involved in recruitment activities within your organization. the endpoint provides an overview of hiring leads but may not include detailed information about ongoing recruitment processes or candidate data. note that the specific fields returned in the response are not detailed in the given schema and may vary based on the company's configuration and permissions.
     */
    GET_HIRING_LEADS: "BAMBOOHR_GET_HIRING_LEADS",
    /**
     * Retrieves a list of job postings from the company's applicant tracking system (ats) in bamboohr. this endpoint provides access to all active job listings for the specified company, including details such as job titles, descriptions, and current status. it's particularly useful for hr managers, recruiters, or integration systems that need to display or process the company's current job openings. the endpoint returns comprehensive job data, allowing for easy synchronization with external job boards or internal systems. note that this endpoint likely returns all active jobs without pagination, so it may not be suitable for companies with an extremely large number of open positions.
     */
    GET_JOB_SUMMARIES: "BAMBOOHR_GET_JOB_SUMMARIES",
    /**
     * Retrieves a list of fields currently being monitored for webhook notifications in bamboohr. this endpoint is used to check which specific data points (such as employee information, time-off requests, or other hr-related activities) are set up for real-time notifications through webhooks. it's particularly useful for developers integrating their applications with bamboohr to understand what changes they can track. the endpoint doesn't modify any data; it only provides information about the current webhook monitoring configuration. note that this endpoint doesn't set up new monitored fields; it only reports on existing ones.
     */
    GET_MONITOR_FIELDS: "BAMBOOHR_GET_MONITOR_FIELDS",
    /**
     * Retrieves a list of time tracking projects assigned to a specific employee within a bamboohr company environment. this endpoint is used to fetch project data that an employee can log time against, supporting efficient time tracking and project management. it's particularly useful for integrations that need to display or process an employee's available projects for time entry. the endpoint should be called when initializing time entry interfaces or updating project lists for a given employee. note that this endpoint only provides project information and does not include actual time entries or project details beyond what's necessary for time tracking purposes.
     */
    GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO: "BAMBOOHR_GET_PROJECTS_AN_EMPLOYEE_CAN_LOG_TIME_TO",
    /**
     * Retrieves a list of all applicant tracking statuses for a specific bamboohr company. this endpoint is useful for getting an overview of the different stages in your company's recruitment process. it can be used to populate dropdown menus in applicant tracking systems, generate reports on application statuses, or synchronize status information with other hr tools. the endpoint returns all available statuses, so there's no need for pagination or filtering parameters. note that this endpoint only provides status information and does not include details about individual applicants or job postings.
     */
    GET_STATUSES: "BAMBOOHR_GET_STATUSES",
    /**
     * Retrieves a list of tasks assigned to a specific employee for a particular project within a company's bamboohr account. this endpoint is useful for managers or hr personnel who need to review an employee's project-specific workload or track progress on assigned tasks. it provides a detailed view of an individual's responsibilities within a given project context. the endpoint should be used when there's a need to assess employee engagement in projects, monitor task assignments, or gather data for performance reviews related to project contributions. it will not provide information about tasks from other projects or for other employees, focusing solely on the intersection of the specified employee and project.
     */
    GET_TASKS_FOR_A_PROJECT: "BAMBOOHR_GET_TASKS_FOR_A_PROJECT",
    /**
     * Retrieves specific timesheet data from the bamboohr time tracking system. this endpoint allows you to fetch detailed information for one or multiple timesheets by providing their unique ids. it's particularly useful when you need to access time tracking records for specific employees or time periods. the endpoint should be used when you have the timesheet ids and require the associated time tracking data. it does not provide a way to search or filter timesheets; you must know the exact ids of the timesheets you want to retrieve. the response will include all available information for the requested timesheets, which can be used for reporting, payroll processing, or auditing purposes.
     */
    GET_TIMESHEETS_BY_IDS: "BAMBOOHR_GET_TIMESHEETS_BY_IDS",
    /**
     * Retrieves timesheet entries for a specific company in bamboohr. this endpoint is part of the time tracking feature and provides detailed information about employee time entries, including total hours worked, holiday and time off hours, clock in and out times, projects, tasks, and notes. it's primarily used for payroll processing, workforce management, and generating time-related reports. the endpoint should be used when you need to access comprehensive time tracking data for all employees or when preparing for payroll runs. it does not provide real-time clock-in/out status and may have limitations on the date range for which data can be retrieved in a single call.
     */
    GET_TIMESHEET_ENTRIES: "BAMBOOHR_GET_TIMESHEET_ENTRIES",
    /**
     * Retrieves metadata about time off policies for a specific company in the bamboohr system. this endpoint provides access to information about various types of time off policies configured for the company, such as vacation, sick leave, or personal time. it's useful for obtaining an overview of all available time off policies, their settings, and any associated rules or accrual information. the endpoint should be used when there's a need to review or audit the company's time off policy structure, or when integrating time off management with other systems. note that this endpoint only provides policy information and does not include individual employee time off balances or requests.
     */
    GET_TIME_OFF_POLICIES: "BAMBOOHR_GET_TIME_OFF_POLICIES",
    /**
     * Retrieves a list of time off requests for a specific company in the bamboohr system. this endpoint allows hr administrators and authorized personnel to fetch and review all pending, approved, and denied time off requests across the organization. it's particularly useful for managing employee leave, tracking time off balances, and ensuring proper staffing levels. the endpoint should be used when you need a comprehensive view of all time off requests or when integrating bamboohr's time off management with other systems. note that this endpoint likely returns all time off requests without filtering, so additional processing may be required for specific date ranges or employee subsets.
     */
    GET_TIME_OFF_REQUESTS: "BAMBOOHR_GET_TIME_OFF_REQUESTS",
    /**
     * Retrieves a list of available time off types for a specific company in bamboohr. this endpoint is used to fetch metadata about the various categories of time off that employees can request, such as vacation, sick leave, or personal days. it's particularly useful when setting up or managing time off policies, or when integrating time off requests with other systems. the endpoint provides essential information for creating time off requests or reporting on time off usage across the organization. note that this endpoint only returns the types of time off available and does not provide information about individual employee time off balances or requests.
     */
    GET_TIME_OFF_TYPES: "BAMBOOHR_GET_TIME_OFF_TYPES",
    /**
     * Retrieves detailed information about a specific webhook registered in the bamboohr system. this endpoint allows you to fetch the configuration and settings of an existing webhook using its unique identifier. use this endpoint when you need to review or verify the details of a particular webhook, such as its target url, subscribed events, or current status. it's particularly useful for troubleshooting webhook-related issues or auditing your webhook configurations. the endpoint does not modify any webhook settings; it's a read-only operation.
     */
    GET_WEBHOOK: "BAMBOOHR_GET_WEBHOOK",
    /**
     * Retrieves the log entries for a specific webhook in a company's bamboohr instance. this endpoint is used to access the history of events triggered by the webhook, providing valuable information for monitoring and troubleshooting integrations. it's particularly useful for developers who need to verify that webhooks are functioning correctly or investigate any issues with event delivery. the log typically includes details such as timestamps, event types, and delivery statuses for each webhook trigger. this tool should be used when detailed information about a webhook's activity is required, but it does not provide real-time notifications or allow modification of the webhook itself.
     */
    GET_WEBHOOK_LOGS: "BAMBOOHR_GET_WEBHOOK_LOGS",
    /**
     * Retrieves the current clock-in status for a specific employee within a company's bamboohr environment. this endpoint allows you to quickly determine whether an employee is currently clocked in or out, which is useful for real-time attendance tracking and management. it should be used when you need to check an employee's immediate work status, such as for timesheet verification or monitoring ongoing projects. the endpoint provides a simple boolean response, indicating only the current state, and does not offer historical data or clock-in/out times. this tool is particularly valuable for managers and hr professionals who need to monitor employee attendance or track time-sensitive tasks.
     */
    IS_EMPLOYEE_CLOCKED_IN: "BAMBOOHR_IS_EMPLOYEE_CLOCKED_IN",
    /**
     * The viewfile endpoint allows you to retrieve and view employee files stored in the bamboohr system. this get request is used to access specific documents or files associated with employees within your company's bamboohr instance. it's particularly useful for retrieving important employee documents such as contracts, performance reviews, or any other files stored in the system. the endpoint requires the company's subdomain for identification and likely accepts additional query parameters (not specified in the schema) to identify the specific file to be viewed. use this endpoint when you need to access or display employee files directly through the api, enabling integration with document management systems or internal company portals.
     */
    LIST_COMPANY_FILES_AND_CATEGORIES: "BAMBOOHR_LIST_COMPANY_FILES_AND_CATEGORIES",
    /**
     * This endpoint allows you to view a specific file associated with an employee in the bamboohr system. it retrieves the file's content and metadata, enabling you to access important employee documents such as contracts, performance reviews, or any other files stored in the employee's profile. use this endpoint when you need to fetch and display the contents of an employee's file, such as during employee reviews, audits, or when updating employee records. the endpoint is read-only and does not modify any data. note that while the endpoint doesn't explicitly specify which file to view, it's likely that an additional identifier for the specific file is required, either as part of the path or through a separate api call. also, be aware that access to employee files may be restricted based on user permissions within bamboohr.
     */
    LIST_EMPLOYEE_FILES_AND_CATEGORIES: "BAMBOOHR_LIST_EMPLOYEE_FILES_AND_CATEGORIES",
    /**
     * Retrieves the training record for a specific employee within a bamboohr company account. this endpoint allows you to access detailed information about an employee's training history, including completed courses, certifications, and other relevant training data. it should be used when you need to review or report on an individual employee's training progress or compliance status. the endpoint does not provide aggregate training data for multiple employees or allow modifications to the training record. keep in mind that the response structure and specific fields returned may vary based on the company's bamboohr configuration and the employee's training history.
     */
    LIST_EMPLOYEE_TRAININGS: "BAMBOOHR_LIST_EMPLOYEE_TRAININGS",
    /**
     * Retrieves the time off policies applicable to a specific employee within a bamboohr company. this endpoint allows you to fetch detailed information about the leave policies, including vacation days, sick leave, and other types of absences that are assigned to the employee. it's particularly useful for hr systems integration, leave management applications, or when you need to display an employee's available time off options. the endpoint returns policy details such as accrual rates, maximum balances, and any specific rules applied to the employee. use this when you need to understand an employee's time off entitlements or to synchronize leave policy data with external systems. note that this endpoint only provides policy information and does not include the employee's current leave balances or usage history.
     */
    LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE: "BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE",
    /**
     * Retrieves the time-off policies applicable to a specific employee within a bamboohr company account. this endpoint allows you to fetch detailed information about the time-off rules, accrual rates, and other policy specifics for an individual employee. it's particularly useful for hr managers or systems that need to understand or display an employee's current time-off entitlements and rules. the endpoint should be used when you need to review or verify an employee's time-off policies, such as during leave requests or policy audits. it does not modify any data and is read-only. note that the response will only include policies relevant to the specified employee and may not provide a comprehensive list of all company-wide policies.
     */
    LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11: "BAMBOOHR_LIST_TIME_OFF_POLICIES_FOR_EMPLOYEE_VERSION11",
    /**
     * Retrieves all training categories for a specific company in bamboohr. this endpoint allows hr managers and administrators to access a comprehensive list of training categories set up within their organization's bamboohr instance. it's useful for getting an overview of the training structure, planning new training programs, or integrating training data with other systems. the endpoint returns all categories without filtering, making it ideal for populating dropdown menus or generating reports on the company's training taxonomy. note that this endpoint only provides category information and does not include details about specific training sessions or employee participation.
     */
    LIST_TRAINING_CATEGORIES: "BAMBOOHR_LIST_TRAINING_CATEGORIES",
    /**
     * Retrieves a list of training types configured in the company's bamboohr system. this endpoint allows developers to access and integrate training type information into their applications, supporting features such as employee development tracking, training program management, or reporting on learning initiatives. it's particularly useful when building custom dashboards, generating training-related reports, or synchronizing training data with other systems. the endpoint provides a comprehensive view of the training categories or classifications used within the organization but does not return detailed information about specific training sessions or employee participation.
     */
    LIST_TRAINING_TYPES: "BAMBOOHR_LIST_TRAINING_TYPES",
    /**
     * This endpoint updates a specific row in an employee's table within bamboohr. it modifies various aspects of employee information, such as job details or organizational assignment. use it to keep employee records current when changes occur in employment status, job role, or structure. specify company domain, employee id, table name, and row id. partial updates are supported.
     */
    MODIFIES_ROW_CONTENTS: "BAMBOOHR_MODIFIES_ROW_CONTENTS",
    /**
     * Reopens a previously closed or completed goal for a specific employee in the bamboohr performance management system. this endpoint allows hr managers or authorized personnel to reactivate a goal that was marked as finished, enabling further updates or modifications to the goal. it's particularly useful when goals need to be revisited due to changing circumstances, ongoing projects, or as part of a continuous performance review process. the endpoint requires the company's domain, the employee's id, and the specific goal id to be reopened. use this endpoint when you need to make a closed goal active again for tracking and evaluation purposes.
     */
    REOPEN_A_GOAL: "BAMBOOHR_REOPEN_A_GOAL",
    /**
     * Creates a custom report in bamboohr with specified parameters. this endpoint allows users to generate tailored reports by defining a title, applying filters, and selecting specific data fields to include. it's particularly useful for extracting and analyzing employee data based on custom criteria. the report can include various employee attributes and can be filtered based on when the data was last changed. this tool should be used when detailed, customized employee data reports are needed, especially for data analysis, hr planning, or integration with other systems. note that the report generation might be asynchronous, and the actual report data may need to be retrieved separately.
     */
    REQUEST_A_CUSTOM_REPORT: "BAMBOOHR_REQUEST_A_CUSTOM_REPORT",
    /**
     * Updates the photo for a specific employee in the bamboohr system. this endpoint allows you to upload a new profile picture for an employee, enhancing their digital presence within the hr platform. it should be used when there's a need to refresh an employee's photo, such as after a company-wide headshot update or when onboarding a new employee. the endpoint accepts image data (not specified in the schema, but likely in the request body) and associates it with the given employee id. note that this endpoint only updates the photo and does not affect other employee profile information. ensure the image meets any size or format requirements specified by bamboohr to avoid upload issues.
     */
    STORE_A_NEW_EMPLOYEE_PHOTO: "BAMBOOHR_STORE_A_NEW_EMPLOYEE_PHOTO",
    /**
     * The create clock entries endpoint allows you to add or update time tracking entries for employees in the bamboohr system. this endpoint is used to record work hours, including start and end times, for one or multiple employees in a single request. it's particularly useful for bulk time entry creation or for updating existing entries. the endpoint accepts a json payload containing an array of entry objects, each representing a single clock entry with details such as employee id, date, start and end times, and optional information like project and task associations. use this endpoint when you need to log employee work hours, update existing time entries, or associate work time with specific projects and tasks. it's important to note that this endpoint does not handle time-off requests or other types of absence management, which are typically handled by separate endpoints in the bamboohr api.
     */
    STORE_CLOCK_ENTRIES: "BAMBOOHR_STORE_CLOCK_ENTRIES",
    /**
     * The addorupdatedailytimeentries endpoint allows you to create new or update existing daily time entries for employees in the bamboohr time tracking system. it accepts an array of time entry objects, enabling bulk operations in a single request. this tool is ideal for efficiently managing multiple time entries, such as importing time data or updating entries after payroll review. it handles both adding new entries and updating existing ones based on the 'dailyentryid' parameter.
     */
    STORE_DAILY_ENTRIES: "BAMBOOHR_STORE_DAILY_ENTRIES",
    /**
     * Updates a specific row in a table associated with an employee's record in bamboohr. this endpoint allows for modifying various attributes of an employee's data, such as job information, location, or other custom fields, depending on the table being updated. it's particularly useful for recording changes in an employee's status, position, or other job-related information over time. the endpoint should be used when there's a need to update existing information in an employee's record, rather than adding new entries. it's important to note that this endpoint updates an existing row and does not create new ones. the specific fields available for update may vary depending on the table being modified and your bamboohr configuration.
     */
    UPDATES_A_TABLE_ROW: "BAMBOOHR_UPDATES_A_TABLE_ROW",
    /**
     * The updateemployeedependent endpoint allows you to modify the information of an existing employee dependent in the bamboohr system. this tool is used to update personal details, contact information, and other relevant data for an employee's dependent, such as a spouse, child, or other family member. it's particularly useful for maintaining accurate records for benefits administration, emergency contacts, and compliance purposes. the endpoint accepts a comprehensive set of fields, allowing for detailed updates to the dependent's profile. however, it's important to note that while many fields are provided, not all may be required for every update operation. use this endpoint when there are changes to a dependent's information or when correcting existing data in the system.
     */
    UPDATE_AN_EMPLOYEE_DEPENDENT: "BAMBOOHR_UPDATE_AN_EMPLOYEE_DEPENDENT",
    /**
     * Updates an existing company benefit in the bamboohr system. this endpoint allows you to modify the details of a specific benefit offering, such as its name, type, dates, and various attributes. it's used when changes need to be made to an existing benefit, such as extending the coverage period, updating the benefit description, or adjusting reimbursement details. the endpoint requires the company domain and the benefit id to identify the specific benefit to be updated. at minimum, the update must include the benefit name, start date, and type, even if these values remain unchanged. this endpoint should not be used to create new benefits or to delete existing ones.
     */
    UPDATE_A_COMPANY_BENEFIT: "BAMBOOHR_UPDATE_A_COMPANY_BENEFIT",
    /**
     * Updates an existing company file in bamboohr, allowing modifications to the file's metadata such as name, category, and employee sharing permissions. this endpoint is used when you need to change details of a file already uploaded to the bamboohr system, without replacing the file content itself. it's particularly useful for reorganizing files, updating file names for better clarity, or adjusting file visibility to employees. the endpoint doesn't support uploading new file content; it's strictly for updating file metadata. ensure you have the correct file id and company domain before making the request, as these are crucial for targeting the right file in the correct bamboohr instance.
     */
    UPDATE_COMPANY_FILE: "BAMBOOHR_UPDATE_COMPANY_FILE",
    /**
     * Updates an employee's basic information in the bamboohr system. this endpoint allows you to modify an employee's first name and/or last name. it should be used when there's a need to correct or change an employee's name in the hr records, such as in cases of marriage, divorce, or legal name changes. the endpoint accepts partial updates, meaning you can update either the first name, last name, or both. any additional properties sent in the request will also be accepted due to the 'additionalproperties: true' setting, but their behavior is not specified in this schema. it's important to note that this endpoint only updates name information and should not be used for modifying other employee data such as contact details or job information.
     */
    UPDATE_EMPLOYEE: "BAMBOOHR_UPDATE_EMPLOYEE",
    /**
     * Updates an existing file associated with a specific employee in the bamboohr system. this endpoint allows you to modify file properties such as the name, category, and sharing status. use this when you need to rename a file, move it to a different category, or change its visibility to the employee. it's particularly useful for maintaining up-to-date and properly organized employee records. note that this endpoint doesn't allow you to change the actual content of the file; it only updates the file's metadata. to replace the file content, you would need to delete the existing file and upload a new one.
     */
    UPDATE_EMPLOYEE_FILE: "BAMBOOHR_UPDATE_EMPLOYEE_FILE",
    /**
     * The updateemployeetrainingrecord endpoint allows you to update an existing training record for a specific employee in the bamboohr system. this tool is used to modify details of a completed training, such as the completion date, cost, instructor information, duration, credits earned, and any additional notes. it's particularly useful for keeping employee training records up-to-date and accurate, which is crucial for maintaining compliance and tracking professional development. the endpoint requires the company domain and the unique identifier of the training record to be updated, ensuring that the correct record is modified for the right employee within the organization.
     */
    UPDATE_EMPLOYEE_TRAINING_RECORD: "BAMBOOHR_UPDATE_EMPLOYEE_TRAINING_RECORD",
    /**
     * Updates an existing employee goal in the bamboohr system. this endpoint allows you to modify various aspects of an employee's goal, including its title, description, progress, alignment, sharing, and key dates. it's particularly useful for keeping goal information current as progress is made or when goal details need to be adjusted. the endpoint requires the company domain, employee id, and goal id to be specified in the url path. note that any non-required fields not provided in the request will overwrite existing data with null values, so include all relevant fields even if they haven't changed. use this endpoint when you need to update goal information, track progress, or modify goal sharing and alignment within your organization.
     */
    UPDATE_GOAL: "BAMBOOHR_UPDATE_GOAL",
    /**
     * Updates a specific comment on an employee's goal in bamboohr's performance management system. this endpoint allows you to modify existing feedback or progress updates associated with a particular goal for an employee. it's useful for correcting information, providing additional context, or updating the status of a goal. the endpoint requires the company domain, employee id, goal id, and comment id to precisely target the comment to be updated. the new comment content should be provided in the request body as a json string. this endpoint should be used when there's a need to revise or expand on previously provided goal-related feedback. it does not create new comments or modify the goal itself, only the specified comment.
     */
    UPDATE_GOAL_COMMENT: "BAMBOOHR_UPDATE_GOAL_COMMENT",
    /**
     * Updates the progress of a specific employee's goal in bamboohr. this endpoint allows you to modify the completion status of a goal assigned to an employee, helping track performance and achievement. it's particularly useful for regular goal check-ins or when significant milestones are reached. the endpoint also considers goal sharing, as the description mentions that employee ids of those with whom the goal is shared are tracked. use this when you need to reflect the latest status of an employee's progress towards their set objectives. note that this endpoint only updates the progress and doesn't modify other aspects of the goal or provide additional goal details.
     */
    UPDATE_GOAL_PROGRESS: "BAMBOOHR_UPDATE_GOAL_PROGRESS",
    /**
     * Updates the list of employees with whom a specific performance goal is shared in bamboohr. this endpoint allows you to modify the visibility of an employee's goal by specifying which other employees should have access to it. it's useful for managing goal transparency and collaboration within the organization. the endpoint automatically includes all goal owners in the sharing list, so they don't need to be explicitly specified. use this when you need to change who can view or interact with a particular employee's performance goal.
     */
    UPDATE_GOAL_SHARING: "BAMBOOHR_UPDATE_GOAL_SHARING",
    /**
     * This endpoint updates an existing employee goal with milestones in the bamboohr performance management system. it allows for comprehensive modification of goal details, including title, description, alignment, shared employees, due date, and associated milestones. the endpoint is particularly useful for adjusting goals as circumstances change or for adding more detailed tracking through milestones. it's important to note that any non-required field not provided in the request will overwrite existing data with a null value, potentially resulting in unintended data loss. this endpoint should be used carefully to ensure all necessary information is included in each update to maintain the integrity of the goal data.
     */
    UPDATE_GOAL_V11: "BAMBOOHR_UPDATE_GOAL_V11",
    /**
     * This endpoint allows you to update the name of an existing training category in bamboohr. it is used when you need to modify the label or classification of a group of training programs or courses within your organization. the endpoint requires the company domain and the specific training category id to identify which category to update. you should use this when reorganizing your training structure or correcting category names. note that this endpoint only updates the name of the category and does not affect the training items associated with it. ensure you have the necessary permissions to modify training categories before using this endpoint.
     */
    UPDATE_TRAINING_CATEGORY: "BAMBOOHR_UPDATE_TRAINING_CATEGORY",
    /**
     * Updates an existing training type in the bamboohr system. this endpoint allows you to modify various attributes of a training type, including its name, description, frequency, category, and other properties. it's used when you need to change the details of an existing training program or adjust its settings. the endpoint requires the company domain and the specific training type id in the url path. it's important to note that while some fields are optional, the 'name' and 'required' fields must always be provided in the update request. this tool is particularly useful for hr managers and administrators who need to keep training information up-to-date or make changes to training requirements and settings.
     */
    UPDATE_TRAINING_TYPE: "BAMBOOHR_UPDATE_TRAINING_TYPE",
    /**
     * Updates an existing webhook configuration in bamboohr. this endpoint allows you to modify various aspects of a webhook, including the monitored fields, data to be sent, frequency of updates, and rate limiting. use this when you need to change the behavior of an existing webhook, such as adjusting which employee data changes trigger notifications or modifying the format and content of the webhook payload. the endpoint provides fine-grained control over webhook behavior, enabling real-time integration with other systems based on specific bamboohr events. note that updating a webhook requires careful consideration of the receiving system's capabilities and the potential impact on data flow between systems.
     */
    UPDATE_WEBHOOK: "BAMBOOHR_UPDATE_WEBHOOK",
    /**
     * This endpoint allows you to upload files to the bamboohr system for a specific company. it is used to add documents, such as employee records, contracts, or other hr-related files, to the company's bamboohr account. the endpoint should be used when you need to programmatically add new files to the system or update existing documents. it's important to note that this endpoint only handles the file upload process and does not provide functionality for retrieving or managing existing files. be aware that there may be limitations on file types and sizes that can be uploaded, although these are not specified in the given schema.
     */
    UPLOAD_COMPANY_FILE: "BAMBOOHR_UPLOAD_COMPANY_FILE",
    /**
     * This endpoint allows you to upload a file to an employee's record in bamboohr. it's used when you need to attach documents such as contracts, certificates, or any other relevant files to a specific employee's profile. the endpoint accepts a file upload, likely through a multipart form data request, and associates it with the specified employee. this function is particularly useful for maintaining comprehensive employee records, ensuring all relevant documents are centralized and easily accessible within the bamboohr system. note that the file size and type limitations are not specified in the schema and may be subject to bamboohr's general file upload constraints.
     */
    UPLOAD_EMPLOYEE_FILE: "BAMBOOHR_UPLOAD_EMPLOYEE_FILE",
    /**
     * Authenticates a user with the bamboohr system, initiating a session for subsequent api calls. this endpoint should be used as the first step when integrating with the bamboohr api, allowing access to protected resources and user-specific data. it requires the application key, user credentials, and is specific to each company's domain. the login process is essential for maintaining security and tracking user actions within the bamboohr system. note that this endpoint does not provide any hr data directly; it only establishes authentication for further api usage.
     */
    USER_LOGIN: "BAMBOOHR_USER_LOGIN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BAMBOOHR".
 */
export type BAMBOOHR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BAMBOOHR".
 */
export type BAMBOOHR_TRIGGER_EVENTS = {}
