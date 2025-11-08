// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BILL's BILL_ACCEPT_NETWORK_INVITATION tool input.
 */
type BILL_ACCEPT_NETWORK_INVITATION_INPUT = {
  /**
   * Id
   * @description BILL-generated ID of the existing vendor or customer in your organization that you want to connect with. The value begins with `009` (vendor) or `0cu` (customer). When you set this field, you cannot set `name` in your request.
   */
  id?: string;
  /**
   * Name
   * @description Name of the new vendor or customer that you want to add in your organization. BILL creates a new vendor or customer with this name. When you set this field, you cannot set `id` in your request.
   */
  name?: string;
  /**
   * Network Id
   * @description Payment Network ID (PNI) of the customer or vendor that sent the invitation. For a verified national vendor, the value begins with `0rv`. BILL uses the PNI to send and receive electronic payments. You can retrieve `networkId` from your `GET /v3/network` search result.
   */
  networkId?: string;
};

/**
 * Type of BILL's BILL_ACCEPT_NETWORK_INVITATION tool output.
 */
type BILL_ACCEPT_NETWORK_INVITATION_OUTPUT = {
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
 * Type of BILL's BILL_ADD_PHONE_FOR_MFA_SETUP tool input.
 */
type BILL_ADD_PHONE_FOR_MFA_SETUP_INPUT = {
  /**
   * Phone
   * @description Phone number for MFA setup. The validation `token` is sent to this number.
   */
  phone?: string;
  /**
   * Primary
   * @description * Set as `true` if the phone number belongs to the primary mobile device. * Set as `false` if the phone number belongs to the backup mobile device.
   */
  primary?: boolean;
};

/**
 * Type of BILL's BILL_ADD_PHONE_FOR_MFA_SETUP tool output.
 */
type BILL_ADD_PHONE_FOR_MFA_SETUP_OUTPUT = {
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
 * Type of BILL's BILL_ADD_PHONE_FOR_RISK_VERIFICATION tool input.
 */
type BILL_ADD_PHONE_FOR_RISK_VERIFICATION_INPUT = {
  /**
   * Phone Number
   * @description Phone number
   */
  phoneNumber?: string;
};

/**
 * Type of BILL's BILL_ADD_PHONE_FOR_RISK_VERIFICATION tool output.
 */
type BILL_ADD_PHONE_FOR_RISK_VERIFICATION_OUTPUT = {
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
 * Type of BILL's BILL_API_LOGIN tool input.
 */
type BILL_API_LOGIN_INPUT = {
  /**
   * Dev Key
   * @description Developer key sent to you by BILL when you create a developer account
   */
  devKey?: string;
  /**
   * Device
   * @description Mobile device name. This is a nickname for your mobile device. Set this field when you set `rememberMeId`.
   */
  device?: string;
  /**
   * Organization Id
   * @description Organization ID
   */
  organizationId?: string;
  /**
   * Password
   * @description Password used to sign in to your BILL account
   */
  password?: string;
  /**
   * Remember Me Id
   * @description MFA ID. Set this field for creating an MFA-trusted API session. This MFA ID is generated when you set `rememberMe` as `true` in your `POST /v3/mfa/challenge/validate` request. This value expires in 30 days. See [Validate MFA challenge](ref:validatechallenge) for more information.
   */
  rememberMeId?: string;
  /**
   * Username
   * @description Email address used to sign in to your BILL account
   */
  username?: string;
};

/**
 * Type of BILL's BILL_API_LOGIN tool output.
 */
type BILL_API_LOGIN_OUTPUT = {
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
 * Type of BILL's BILL_API_LOGIN_AS_USER tool input.
 */
type BILL_API_LOGIN_AS_USER_INPUT = {
  /**
   * Device
   * @description Mobile device name. This is a nickname for your mobile device. Set this field when you set `rememberMeId`.
   */
  device?: string;
  /**
   * Organization Id
   * @description BILL-generated ID of the organization you want to sign in to
   */
  organizationId?: string;
  /**
   * Remember Me Id
   * @description MFA ID. Set this field for creating an MFA-trusted API session. This MFA ID is generated when you set `rememberMe` as `true` in your `POST /v3/mfa/challenge/validate` request. This value expires in 30 days. See [Validate MFA challenge](ref:validatechallenge) for more information.
   */
  rememberMeId?: string;
  /**
   * User Id
   * @description BILL-generated ID of the user you want to sign in as
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_API_LOGIN_AS_USER tool output.
 */
type BILL_API_LOGIN_AS_USER_OUTPUT = {
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
 * Type of BILL's BILL_API_LOGOUT tool input.
 */
type BILL_API_LOGOUT_INPUT = object;

/**
 * Type of BILL's BILL_API_LOGOUT tool output.
 */
type BILL_API_LOGOUT_OUTPUT = {
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
 * Type of BILL's BILL_API_PARTNER_LOGIN tool input.
 */
type BILL_API_PARTNER_LOGIN_INPUT = {
  /**
   * App Key
   * @description Application key sent to you by BILL when you create a partner account
   */
  appKey?: string;
  /**
   * Password
   * @description Password used to sign in to your BILL account
   */
  password?: string;
  /**
   * Username
   * @description Email address used to sign in to your BILL account
   */
  username?: string;
};

/**
 * Type of BILL's BILL_API_PARTNER_LOGIN tool output.
 */
type BILL_API_PARTNER_LOGIN_OUTPUT = {
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
 * Type of BILL's BILL_APPROVE_OR_DENY_A_REIMBURSEMENT tool input.
 */
type BILL_APPROVE_OR_DENY_A_REIMBURSEMENT_INPUT = {
  /**
   * Note
   * @description Optional note for the action taken
   */
  note?: string;
  /**
   * Reimbursement Id
   * @description Reimbursementid
   */
  reimbursementId?: string;
};

/**
 * Type of BILL's BILL_APPROVE_OR_DENY_A_REIMBURSEMENT tool output.
 */
type BILL_APPROVE_OR_DENY_A_REIMBURSEMENT_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_AN_ACCOUNTING_CLASS tool input.
 */
type BILL_ARCHIVE_AN_ACCOUNTING_CLASS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_AN_ACCOUNTING_CLASS tool output.
 */
type BILL_ARCHIVE_AN_ACCOUNTING_CLASS_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_AN_EMPLOYEE tool input.
 */
type BILL_ARCHIVE_AN_EMPLOYEE_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_AN_EMPLOYEE tool output.
 */
type BILL_ARCHIVE_AN_EMPLOYEE_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_AN_INVOICE tool input.
 */
type BILL_ARCHIVE_AN_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_AN_INVOICE tool output.
 */
type BILL_ARCHIVE_AN_INVOICE_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_AN_ITEM tool input.
 */
type BILL_ARCHIVE_AN_ITEM_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_AN_ITEM tool output.
 */
type BILL_ARCHIVE_AN_ITEM_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_BANK_ACCOUNT tool input.
 */
type BILL_ARCHIVE_A_BANK_ACCOUNT_INPUT = {
  /**
   * Bank Account Id
   * @description Bankaccountid
   */
  bankAccountId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_BANK_ACCOUNT tool output.
 */
type BILL_ARCHIVE_A_BANK_ACCOUNT_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_BANK_ACCOUNT_USER tool input.
 */
type BILL_ARCHIVE_A_BANK_ACCOUNT_USER_INPUT = {
  /**
   * Bank Account User Id
   * @description Bankaccountuserid
   */
  bankAccountUserId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_BANK_ACCOUNT_USER tool output.
 */
type BILL_ARCHIVE_A_BANK_ACCOUNT_USER_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_BILL tool input.
 */
type BILL_ARCHIVE_A_BILL_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_BILL tool output.
 */
type BILL_ARCHIVE_A_BILL_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_CHART_OF_ACCOUNTS tool input.
 */
type BILL_ARCHIVE_A_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_CHART_OF_ACCOUNTS tool output.
 */
type BILL_ARCHIVE_A_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_CUSTOMER tool input.
 */
type BILL_ARCHIVE_A_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_CUSTOMER tool output.
 */
type BILL_ARCHIVE_A_CUSTOMER_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_DEPARTMENT tool input.
 */
type BILL_ARCHIVE_A_DEPARTMENT_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_DEPARTMENT tool output.
 */
type BILL_ARCHIVE_A_DEPARTMENT_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_JOB tool input.
 */
type BILL_ARCHIVE_A_JOB_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_JOB tool output.
 */
type BILL_ARCHIVE_A_JOB_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_LOCATION tool input.
 */
type BILL_ARCHIVE_A_LOCATION_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_LOCATION tool output.
 */
type BILL_ARCHIVE_A_LOCATION_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_RECURRING_BILL tool input.
 */
type BILL_ARCHIVE_A_RECURRING_BILL_INPUT = {
  /**
   * Recurring Bill Id
   * @description Recurringbillid
   */
  recurringBillId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_RECURRING_BILL tool output.
 */
type BILL_ARCHIVE_A_RECURRING_BILL_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_A_VENDOR tool input.
 */
type BILL_ARCHIVE_A_VENDOR_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_A_VENDOR tool output.
 */
type BILL_ARCHIVE_A_VENDOR_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES tool input.
 */
type BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES tool output.
 */
type BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_DEPARTMENTS tool input.
 */
type BILL_ARCHIVE_MULTIPLE_DEPARTMENTS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_DEPARTMENTS tool output.
 */
type BILL_ARCHIVE_MULTIPLE_DEPARTMENTS_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_EMPLOYEES tool input.
 */
type BILL_ARCHIVE_MULTIPLE_EMPLOYEES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_EMPLOYEES tool output.
 */
type BILL_ARCHIVE_MULTIPLE_EMPLOYEES_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_ITEMS tool input.
 */
type BILL_ARCHIVE_MULTIPLE_ITEMS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_ITEMS tool output.
 */
type BILL_ARCHIVE_MULTIPLE_ITEMS_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_JOBS tool input.
 */
type BILL_ARCHIVE_MULTIPLE_JOBS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_JOBS tool output.
 */
type BILL_ARCHIVE_MULTIPLE_JOBS_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_LOCATIONS tool input.
 */
type BILL_ARCHIVE_MULTIPLE_LOCATIONS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MULTIPLE_LOCATIONS tool output.
 */
type BILL_ARCHIVE_MULTIPLE_LOCATIONS_OUTPUT = {
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
 * Type of BILL's BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS tool input.
 */
type BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS tool output.
 */
type BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_BILL_ARCHIVE_A_USER tool input.
 */
type BILL_BILL_ARCHIVE_A_USER_INPUT = {
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_BILL_ARCHIVE_A_USER tool output.
 */
type BILL_BILL_ARCHIVE_A_USER_OUTPUT = {
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
 * Type of BILL's BILL_BILL_BILL_CREATE_A_USER tool input.
 */
type BILL_BILL_BILL_CREATE_A_USER_INPUT = {
  /**
   * Accept Terms Of Service
   * @description Set as `true` if the user accepts the BILL terms of service
   */
  acceptTermsOfService?: boolean;
  /**
   * Email
   * @description User email address
   */
  email?: string;
  /**
   * First Name
   * @description User first name
   */
  firstName?: string;
  /**
   * Last Name
   * @description User last name
   */
  lastName?: string;
  /**
   * Role Id
   * @description BILL-generated ID of the user role. The value begins with `0po`. If you do not set `roleId`, the default `ADMINISTRATOR` user role is assigned to the created user. You can get the list of available user roles with `GET /v3/roles`.
   */
  roleId?: string;
};

/**
 * Type of BILL's BILL_BILL_BILL_CREATE_A_USER tool output.
 */
type BILL_BILL_BILL_CREATE_A_USER_OUTPUT = {
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
 * Type of BILL's BILL_BILL_BILL_GET_LIST_OF_USERS tool input.
 */
type BILL_BILL_BILL_GET_LIST_OF_USERS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_BILL_BILL_GET_LIST_OF_USERS tool output.
 */
type BILL_BILL_BILL_GET_LIST_OF_USERS_OUTPUT = {
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
 * Type of BILL's BILL_BILL_BILL_GET_USER_DETAILS tool input.
 */
type BILL_BILL_BILL_GET_USER_DETAILS_INPUT = {
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_BILL_BILL_GET_USER_DETAILS tool output.
 */
type BILL_BILL_BILL_GET_USER_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_BILL_BILL_UPDATE_A_USER tool input.
 */
type BILL_BILL_BILL_UPDATE_A_USER_INPUT = {
  /**
   * First Name
   * @description User first name
   */
  firstName?: string;
  /**
   * Last Name
   * @description User last name
   */
  lastName?: string;
  /**
   * Role Id
   * @description BILL-generated ID of the user role. The value begins with `0po`. If you do not set `roleId`, the default `ADMINISTRATOR` user role is assigned to the created user. You can get the list of available user roles with `GET /v3/roles`.
   */
  roleId?: string;
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_BILL_BILL_UPDATE_A_USER tool output.
 */
type BILL_BILL_BILL_UPDATE_A_USER_OUTPUT = {
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
 * Type of BILL's BILL_BILL_GET_LIST_OF_USER_ROLES tool input.
 */
type BILL_BILL_GET_LIST_OF_USER_ROLES_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_BILL_GET_LIST_OF_USER_ROLES tool output.
 */
type BILL_BILL_GET_LIST_OF_USER_ROLES_OUTPUT = {
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
 * Type of BILL's BILL_BILL_GET_USER_ROLE_DETAILS tool input.
 */
type BILL_BILL_GET_USER_ROLE_DETAILS_INPUT = {
  /**
   * Role Id
   * @description Roleid
   */
  roleId?: string;
};

/**
 * Type of BILL's BILL_BILL_GET_USER_ROLE_DETAILS tool output.
 */
type BILL_BILL_GET_USER_ROLE_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_BILL_RESTORE_AN_ARCHIVED_USER tool input.
 */
type BILL_BILL_RESTORE_AN_ARCHIVED_USER_INPUT = {
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_BILL_RESTORE_AN_ARCHIVED_USER tool output.
 */
type BILL_BILL_RESTORE_AN_ARCHIVED_USER_OUTPUT = {
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
 * Type of BILL's BILL_CANCEL_A_PAYMENT tool input.
 */
type BILL_CANCEL_A_PAYMENT_INPUT = {
  /**
   * Payment Id
   * @description Paymentid
   */
  paymentId?: string;
};

/**
 * Type of BILL's BILL_CANCEL_A_PAYMENT tool output.
 */
type BILL_CANCEL_A_PAYMENT_OUTPUT = {
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
 * Type of BILL's BILL_CHECK_APP_HEALTH tool input.
 */
type BILL_CHECK_APP_HEALTH_INPUT = object;

/**
 * Type of BILL's BILL_CHECK_APP_HEALTH tool output.
 */
type BILL_CHECK_APP_HEALTH_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_AN_ACCOUNTING_CLASS tool input.
 */
type BILL_CREATE_AN_ACCOUNTING_CLASS_INPUT = {
  /**
   * Description
   * @description Accounting class description
   */
  description?: string;
  /**
   * Name
   * @description Accounting class name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent accounting class. You can set this field if this accounting class is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Accounting class short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_CREATE_AN_ACCOUNTING_CLASS tool output.
 */
type BILL_CREATE_AN_ACCOUNTING_CLASS_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_AN_EMPLOYEE tool input.
 */
type BILL_CREATE_AN_EMPLOYEE_INPUT = {
  /**
   * First Name
   * @description Employee first name
   */
  firstName?: string;
  /**
   * Last Name
   * @description Employee last name
   */
  lastName?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent employee. You can set this field if this employee is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Employee short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_CREATE_AN_EMPLOYEE tool output.
 */
type BILL_CREATE_AN_EMPLOYEE_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT tool input.
 */
type BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT_INPUT = object;

/**
 * Type of BILL's BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT tool output.
 */
type BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_AN_INVOICE tool input.
 */
type BILL_CREATE_AN_INVOICE_INPUT = {
  /**
   * Due Date
   * Format: date
   * @description Invoice due date. The value is in the `yyyy-MM-dd` format. If you do not set this value, `dueDate` is set as the date when the invoice is created.
   */
  dueDate?: string;
  /**
   * Invoice Date
   * Format: date
   * @description Invoice creation date. This value is in the `yyyy-MM-dd` format. If you do not set this value, `invoiceDate` is set as the date when the invoice is created.
   */
  invoiceDate?: string;
  /**
   * Invoice Line Items
   * @description Invoice line item information
   */
  invoiceLineItems?: {
      /**
       * Description
       * @description Invoice line item description
       */
      description?: string;
      /**
       * Price
       * @description Invoice line item price. For an invoice in an international currency, this value is in the local currency.
       */
      price?: number;
      /**
       * Quantity
       * @description Invoice line item quantity
       */
      quantity: number;
  }[];
  /**
   * Invoice Number
   * @description User-generated invoice number. This value can be your chosen number scheme. If you do not set this value, `invoiceNumber` is auto-generated.
   */
  invoiceNumber?: string;
  /**
   * Pay To Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the invoice payment. The value begins with `0ca`.
   */
  payToChartOfAccountId?: string;
};

/**
 * Type of BILL's BILL_CREATE_AN_INVOICE tool output.
 */
type BILL_CREATE_AN_INVOICE_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_AN_ITEM tool input.
 */
type BILL_CREATE_AN_ITEM_INPUT = {
  /**
   * Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the item. The value begins with `0ca`.
   */
  chartOfAccountId?: string;
  /**
   * Description
   * @description Item description
   */
  description?: string;
  /**
   * Expense Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the item when it is used for bills or purchases in your accounting system. The value begins with `0ca`.
   */
  expenseChartOfAccountId?: string;
  /**
   * Name
   * @description Item name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent item. You can set this field if this item is a child object.
   */
  parentId?: string;
  /**
   * Price
   * @description Item price
   */
  price?: number;
  /**
   * Purchase Cost
   * @description Item purchase cost set in your accounting system
   */
  purchaseCost?: number;
  /**
   * Purchase Description
   * @description Item description when it is used for bills or purchases in your accounting system
   */
  purchaseDescription?: string;
  /**
   * Short Name
   * @description Item short name
   */
  shortName?: string;
  /**
   * Taxable
   * @description Set as `true` if the item is taxable
   */
  taxable?: boolean;
};

/**
 * Type of BILL's BILL_CREATE_AN_ITEM tool output.
 */
type BILL_CREATE_AN_ITEM_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_AN_ORGANIZATION tool input.
 */
type BILL_CREATE_AN_ORGANIZATION_INPUT = {
  /**
   * Industry
   * @description Organization industry
   */
  industry?: string;
  /**
   * Name
   * @description Organization name
   */
  name?: string;
  /**
   * Phone
   * @description Organization phone number
   */
  phone?: string;
  /**
   * Tax Id
   * @description Organization tax ID. This value is required by the IRS for tax purposes.
   */
  taxId?: string;
};

/**
 * Type of BILL's BILL_CREATE_AN_ORGANIZATION tool output.
 */
type BILL_CREATE_AN_ORGANIZATION_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_BANK_ACCOUNT tool input.
 */
type BILL_CREATE_A_BANK_ACCOUNT_INPUT = {
  /**
   * Access To Admins
   * @description Set as `true` to enable access to all users with the `ADMINISTRATOR` user role
   */
  accessToAdmins?: boolean;
  /**
   * Account Number
   * @description Bank account number. This field is required.
   */
  accountNumber?: string;
  /**
   * Bank Name
   * @description Bank name. Set this field as a nickname for your bank account.
   */
  bankName?: string;
  /**
   * Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the bank account. The value begins with `0ca`.
   */
  chartOfAccountId?: string;
  /**
   * Name On Account
   * @description Full name on bank account
   */
  nameOnAccount?: string;
  /**
   * Routing Number
   * @description Bank routing number. This field is required.
   */
  routingNumber?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_BANK_ACCOUNT tool output.
 */
type BILL_CREATE_A_BANK_ACCOUNT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_BILL tool input.
 */
type BILL_CREATE_A_BILL_INPUT = {
  /**
   * Bill Line Items
   * @description Bill line items information
   */
  billLineItems?: {
      /**
       * Amount
       * @description Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.
       */
      amount: number;
      /**
       * Description
       * @description Bill line item description
       */
      description?: string;
  }[];
  /**
   * Description
   * @description Bill description
   */
  description?: string;
  /**
   * Due Date
   * Format: date
   * @description Bill due date. The value is in the `yyyy-MM-dd` format.
   */
  dueDate?: string;
  /**
   * Pay From Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the bill payment. The value begins with `0ca`.
   */
  payFromChartOfAccountId?: string;
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor. The value begins with `009`.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_BILL tool output.
 */
type BILL_CREATE_A_BILL_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_BUDGET tool input.
 */
type BILL_CREATE_A_BUDGET_INPUT = {
  /**
   * Auto Add Users
   * @description Set to `true` to automatically add all new users to this budget
   */
  autoAddUsers?: boolean;
  /**
   * Budget Group
   * @description Set as `true` if the budget is a budget group, i.e. it can be set as the parent of other budgets
   */
  budgetGroup?: boolean;
  /**
   * Carry Over
   * @description When set to `true`, users and cards assigned funds under this budget will carry over from one budget period to the next
   */
  carryOver?: boolean;
  /**
   * Description
   * @description Budget description
   */
  description?: string;
  /**
   * Expiration Date
   * Format: date
   * @description Budget expiration date. This value is in the `yyyy-MM-dd` format. Set to null for no expiration.
   */
  expirationDate?: string;
  /**
   * Limit
   * @description Spend limit for the initial budget period. Must be set unless `limitlessOverspend` is true.
   */
  limit?: number;
  /**
   * Limitless Goal
   * @description Spend goal for a limitless budget. Do not set unless `limitlessOverspend` is true.
   */
  limitlessGoal?: number;
  /**
   * Limitless Overspend
   * @description When set to `true`, any amount of spend over the budget limit will be allowed. Budgets with limitless overspend cannot have a recurringInterval of `DAILY` or `WEEKLY`.
   */
  limitlessOverspend?: boolean;
  /**
   * Max Tx Size
   * @description Maximum transaction size for the budget. Any single transactions for an amount greater than this will be declined
   */
  maxTxSize?: number;
  /**
   * Members
   * @description List of user IDs that are budget members
   */
  members?: string[];
  /**
   * Name
   * @description Budget name
   */
  name?: string;
  /**
   * Observers
   * @description List of user IDs that are budget observers
   */
  observers?: string[];
  /**
   * Overspend Buffer
   * @description Amount over budget limit to allow spending before transactions will be declined. `overspendBuffer` cannot be set for limitless budgets or budgets with a recurringInterval of `DAILY` or `WEEKLY`.
   */
  overspendBuffer?: number;
  /**
   * Owners
   * @description List of user IDs that are budget owners. At least one owner must be specified.
   */
  owners?: string[];
  /**
   * Parent Budget Id
   * @description BILL-generated ID of the parent budget
   */
  parentBudgetId?: string;
  /**
   * Receipt Required
   * @description Set to `true` if a receipt is required for transactions in the budget
   */
  receiptRequired?: boolean;
  /**
   * Recur Month
   * @description Which month the budget will recur on, for quarterly or yearly budgets. Should be an integer in the range 1-12. Current month is assumed if not specified. Do not set for a `recurringInterval` other than `QUARTERLY` or `YEARLY`. Defaults to current month.
   */
  recurMonth?: number;
  /**
   * Recurring Limit
   * @description Spend limit for all future budget periods. Must be set if recurringInterval is anything other than `NONE`.
   */
  recurringLimit?: number;
  /**
   * Timezone
   * @description Budget funds are reset at midnight in this timezone. Defaults to the timezone of the company"s billing address.
   */
  timezone?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_BUDGET tool output.
 */
type BILL_CREATE_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_BULK_PAYMENT tool input.
 */
type BILL_CREATE_A_BULK_PAYMENT_INPUT = {
  /**
   * Card Funding Purpose
   * @description Card funding purpose. This field is required for the `CARD_ACCOUNT` funding account `type` if BILL cannot identify the vendor industry. See [Get card funding purpose](ref:listcardfundingpurposes) for more information.
   */
  cardFundingPurpose?: string;
  /**
   * Description
   * @description Bill payment description. This value is included in the check memo or in the bank descriptor for electronic payments.
   */
  description?: string;
  /**
   * Payments
   * @description Payments
   */
  payments?: {
      /**
       * Amount
       * @description Payment amount
       */
      amount: number;
      /**
       * Bill Id
       * @description BILL-generated ID of the bill to be paid. The value begins with `00n`.
       */
      billId: string;
  }[];
  /**
   * Process Date
   * Format: date
   * @description Bill payment processing date in the `yyyy-MM-dd` format. Funds are withdrawn from the sender"s funding account on this date. If the funding account `type` is set as `WALLET` or `AP_CARD`, `processDate` is required. For other funding account types, if `processDate` is not set, the date is automatically set as the next available payment date.
   */
  processDate?: string;
  /**
   * Transaction Number
   * @description Payment transaction reference used as an external identifier. You can set this field as a unique alphanumeric value for your system to track the payment transaction. The value must be 50 characters or fewer. If you do not set `transactionNumber`, BILL sets this field as a unique alphanumeric payment identification value.
   */
  transactionNumber?: string;
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor to be paid. The value begins with `009`. * If `vendorId` is set, it must match each bill’s vendor ID. * Do not set `vendorId` when you are paying multiple vendors with one request.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_BULK_PAYMENT tool output.
 */
type BILL_CREATE_A_BULK_PAYMENT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_CHART_OF_ACCOUNTS tool input.
 */
type BILL_CREATE_A_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Description
   * @description Chart of accounts description
   */
  description?: string;
  /**
   * Name
   * @description Chart of accounts name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent chart of accounts. You can set this field if this chart of accounts is a child object.
   */
  parentId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_CHART_OF_ACCOUNTS tool output.
 */
type BILL_CREATE_A_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_CUSTOMER tool input.
 */
type BILL_CREATE_A_CUSTOMER_INPUT = {
  /**
   * Account Number
   * @description Customer account number. The number appears in customer invoices.
   */
  accountNumber?: string;
  /**
   * Company Name
   * @description Customer company name
   */
  companyName?: string;
  /**
   * Description
   * @description Customer description
   */
  description?: string;
  /**
   * Email
   * @description Customer email address
   */
  email?: string;
  /**
   * Fax
   * @description Customer fax number
   */
  fax?: string;
  /**
   * Name
   * @description Customer name
   */
  name?: string;
  /**
   * Payment Term Id
   * @description BILL-generated ID of the payment term. The payment term defines the number of days the customer has to pay an invoice.
   */
  paymentTermId?: string;
  /**
   * Phone
   * @description Customer phone number
   */
  phone?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_CUSTOMER tool output.
 */
type BILL_CREATE_A_CUSTOMER_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_DEPARTMENT tool input.
 */
type BILL_CREATE_A_DEPARTMENT_INPUT = {
  /**
   * Description
   * @description Department description
   */
  description?: string;
  /**
   * Name
   * @description Department name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent department. You can set this field if this department is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Department short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_DEPARTMENT tool output.
 */
type BILL_CREATE_A_DEPARTMENT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_JOB tool input.
 */
type BILL_CREATE_A_JOB_INPUT = {
  /**
   * Description
   * @description Job description
   */
  description?: string;
  /**
   * Name
   * @description Job name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent job. You can set this field if this job is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Job short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_JOB tool output.
 */
type BILL_CREATE_A_JOB_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_LOCATION tool input.
 */
type BILL_CREATE_A_LOCATION_INPUT = {
  /**
   * Description
   * @description Location description
   */
  description?: string;
  /**
   * Name
   * @description Location name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent location. You can set this field if this location is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Location short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_LOCATION tool output.
 */
type BILL_CREATE_A_LOCATION_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_PAYMENT tool input.
 */
type BILL_CREATE_A_PAYMENT_INPUT = {
  /**
   * Amount
   * @description Payment amount. For a payment in an international currency (not USD), this value is in the local currency.
   */
  amount?: number;
  /**
   * Bill Id
   * @description BILL-generated ID of the bill to be paid. The value begins with `00n`. If `createBill` is `true`, do not set `billId` in your payment request.
   */
  billId?: string;
  /**
   * Card Funding Purpose
   * @description Card funding purpose. This field is required for the `CARD_ACCOUNT` funding account `type` if BILL cannot identify the vendor industry. See [Get card funding purpose](ref:listcardfundingpurposes) for more information.
   */
  cardFundingPurpose?: string;
  /**
   * Description
   * @description Bill payment description. This value is included in the check memo or in the bank descriptor for electronic payments.
   */
  description?: string;
  /**
   * Process Date
   * Format: date
   * @description Bill payment processing date in the `yyyy-MM-dd` format. Funds are withdrawn from the sender"s funding account on this date. If the funding account `type` is set as `WALLET` or `AP_CARD`, `processDate` is required. For other funding account types, if `processDate` is not set, the date is automatically set as the next available payment date.
   */
  processDate?: string;
  /**
   * Transaction Number
   * @description Payment transaction reference used as an external identifier. You can set this field as a unique alphanumeric value for your system to track the payment transaction. The value must be 50 characters or fewer. If you do not set `transactionNumber`, BILL sets this field as a unique alphanumeric payment identification value.
   */
  transactionNumber?: string;
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor to be paid. The value begins with `009`. * If `vendorId` is set, it must match your bill’s vendor ID. * If `vendorId` is not set, the bill’s `vendorId` is automatically set.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_PAYMENT tool output.
 */
type BILL_CREATE_A_PAYMENT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_RECURRING_BILL tool input.
 */
type BILL_CREATE_A_RECURRING_BILL_INPUT = {
  /**
   * Description
   * @description User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  description?: string;
  /**
   * Recurring Bill Line Items
   * @description Recurring bill line item information
   */
  recurringBillLineItems?: {
      /**
       * Amount
       * @description Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.
       */
      amount: number;
      /**
       * Chart Of Account Id
       * @description BILL-generated ID of the chart of accounts for the recurring bill line item. The value begins with `0ca`.
       */
      chartOfAccountId?: string;
      /**
       * Description
       * @description Bill line item description
       */
      description?: string;
  }[];
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor. The value begins with `009`.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_RECURRING_BILL tool output.
 */
type BILL_CREATE_A_RECURRING_BILL_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_REIMBURSEMENT tool input.
 */
type BILL_CREATE_A_REIMBURSEMENT_INPUT = {
  /**
   * Amount
   * @description Amount to be reimbursed to the user
   */
  amount?: number;
  /**
   * Budget Id
   * @description BILL-generated ID of the budget that the funds for this reimbursement will come from
   */
  budgetId?: string;
  /**
   * Custom Fields
   * @description List of custom fields and selected values for the reimbursement
   */
  customFields?: {
      /**
       * Custom Field Id
       * @description BILL-generated ID of the custom field
       */
      customFieldId: string;
      /**
       * Note
       * @description Updated note. **Note**: This field will only update for custom fields with a type of NOTE.
       */
      note?: string;
      /**
       * Selected Values
       * @description List of custom field value BILL-generated IDs. **Note**: Pass in an empty array to clear all selectedValues on a custom field.
       */
      selectedValues?: string[];
  }[];
  /**
   * Merchant Name
   * @description Name of the merchant for the transaction that this reimbursement is for
   */
  merchantName?: string;
  /**
   * Note
   * @description Note provided by the submitter that describes the business purpose for the expense
   */
  note?: string;
  /**
   * Occurred Date
   * Format: date
   * @description Date when the user made the purchase. The value is in the `yyyy-MM-dd` format.
   */
  occurredDate?: string;
  /**
   * Receipts
   * @description List of receipts associated with the reimbursement
   */
  receipts?: {
      /**
       * Filename
       * @description Name of the receipt file
       */
      filename: string;
      /**
       * Url
       * @description URL to download receipt. **NOTE**: This field is not present on the Reimbursement list endpoint.
       */
      url: string;
  }[];
  /**
   * User Id
   * @description BILL-generated ID of the user to be reimbursed
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_REIMBURSEMENT tool output.
 */
type BILL_CREATE_A_REIMBURSEMENT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_VENDOR tool input.
 */
type BILL_CREATE_A_VENDOR_INPUT = {
  /**
   * Account Number
   * @description User account number set by the vendor. Set this field as the billing statement account number for vendor services such as utility or credit card bills. When you pay the vendor, this value appears on the check memo or electronic payment record.
   */
  accountNumber?: string;
  /**
   * Email
   * @description Vendor email address
   */
  email?: string;
  /**
   * Name
   * @description Vendor name
   */
  name?: string;
  /**
   * Phone
   * @description Vendor phone number
   */
  phone?: string;
  /**
   * Short Name
   * @description Vendor short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_VENDOR tool output.
 */
type BILL_CREATE_A_VENDOR_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_VENDOR_BANK_ACCOUNT tool input.
 */
type BILL_CREATE_A_VENDOR_BANK_ACCOUNT_INPUT = {
  /**
   * Account Number
   * @description Vendor bank account number. This field is required for enabling electronic payments to vendors. See [Creating an international vendor](doc:creating-an-international-vendor) for more information on how to set up vendor payment information for an international (not US) vendor.
   */
  accountNumber?: string;
  /**
   * Name On Account
   * @description Vendor bank account name
   */
  nameOnAccount?: string;
  /**
   * Regulatory Fields
   * @description International bank account regulatory information. The `name` and `value` fields are required for each required bank account regulatory field. See [Creating an international vendor](doc:creating-an-international-vendor) for more information on how to set `regulatoryFields`.
   */
  regulatoryFields?: {
      /**
       * Name
       * @description Name field
       */
      name?: string;
      /**
       * Value
       * @description Value field
       */
      value?: string;
  }[];
  /**
   * Routing Number
   * @description Vendor bank routing number. This field is required for enabling electronic payments to vendors. This field is empty for an IBAN `accountNumber`. See [Creating an international vendor](doc:creating-an-international-vendor) for more information on how to set up vendor payment information for an international (not US) vendor.
   */
  routingNumber?: string;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_VENDOR_BANK_ACCOUNT tool output.
 */
type BILL_CREATE_A_VENDOR_BANK_ACCOUNT_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_A_VENDOR_CARD tool input.
 */
type BILL_CREATE_A_VENDOR_CARD_INPUT = {
  /**
   * Budget Id
   * @description BILL-generated ID of the budget linked with the card
   */
  budgetId?: string;
  /**
   * Expiration Date
   * Format: date
   * @description Card expiration date. The value is in the `yyyy-MM-dd` format.
   */
  expirationDate?: string;
  /**
   * Limit
   * @description Budget amount of funds added to the card
   */
  limit?: number;
  /**
   * Name
   * @description Card name
   */
  name?: string;
  /**
   * Recurring Limit
   * @description Recurring budget amount added to the card each month
   */
  recurringLimit?: number;
  /**
   * Share Budget Funds
   * @description Set as `true` if the user can spend from unallocated budget funds when the allocation is empty
   */
  shareBudgetFunds?: boolean;
  /**
   * User Id
   * @description BILL-generated ID of the user linked with the card
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_CREATE_A_VENDOR_CARD tool output.
 */
type BILL_CREATE_A_VENDOR_CARD_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_CUSTOM_FIELD tool input.
 */
type BILL_CREATE_CUSTOM_FIELD_INPUT = {
  /**
   * Allow Custom Values
   * @description Set to `true` if the custom field should allow custom values.
   */
  allowCustomValues?: boolean;
  /**
   * Description
   * @description Description of the custom field.
   */
  description?: string;
  /**
   * Minimum Amount For Requirement
   * @description Minimum transaction amount this custom field will be required for.
   */
  minimumAmountForRequirement?: number;
  /**
   * Multi Select
   * @description Set to `true` to allow multiple values to be selected for this custom field.
   */
  multiSelect?: boolean;
  /**
   * Name
   * @description Name of the custom field.
   */
  name?: string;
  /**
   * Required
   * @description Set to `true` if the custom field is required. Defaults to false.
   */
  required?: boolean;
  /**
   * Required Budget Ids
   * @description Budget IDs that will require the new custom field to be required.
   */
  requiredBudgetIds?: string[];
  /**
   * Selected Budget Ids
   * @description Budget IDs to have the new custom field assigned to it but not be required.
   */
  selectedBudgetIds?: string[];
  /**
   * Values
   * @description Initial set of values for the custom field.
   */
  values?: string[];
};

/**
 * Type of BILL's BILL_CREATE_CUSTOM_FIELD tool output.
 */
type BILL_CREATE_CUSTOM_FIELD_OUTPUT = {
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
 * Type of BILL's BILL_CREATE_CUSTOM_FIELD_VALUES tool input.
 */
type BILL_CREATE_CUSTOM_FIELD_VALUES_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
  /**
   * Values
   * @description Values for the custom field.
   */
  values?: string[];
};

/**
 * Type of BILL's BILL_CREATE_CUSTOM_FIELD_VALUES tool output.
 */
type BILL_CREATE_CUSTOM_FIELD_VALUES_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_BUDGET tool input.
 */
type BILL_DELETE_A_BUDGET_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
};

/**
 * Type of BILL's BILL_DELETE_A_BUDGET tool output.
 */
type BILL_DELETE_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_CARD tool input.
 */
type BILL_DELETE_A_CARD_INPUT = {
  /**
   * Card Id
   * @description Cardid
   */
  cardId?: string;
  /**
   * Reason
   * @description Reason
   */
  reason?: unknown;
};

/**
 * Type of BILL's BILL_DELETE_A_CARD tool output.
 */
type BILL_DELETE_A_CARD_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_CUSTOM_FIELD tool input.
 */
type BILL_DELETE_A_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
};

/**
 * Type of BILL's BILL_DELETE_A_CUSTOM_FIELD tool output.
 */
type BILL_DELETE_A_CUSTOM_FIELD_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_MEMBER_FROM_A_BUDGET tool input.
 */
type BILL_DELETE_A_MEMBER_FROM_A_BUDGET_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_DELETE_A_MEMBER_FROM_A_BUDGET tool output.
 */
type BILL_DELETE_A_MEMBER_FROM_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_REIMBURSEMENT tool input.
 */
type BILL_DELETE_A_REIMBURSEMENT_INPUT = {
  /**
   * Reimbursement Id
   * @description Reimbursementid
   */
  reimbursementId?: string;
};

/**
 * Type of BILL's BILL_DELETE_A_REIMBURSEMENT tool output.
 */
type BILL_DELETE_A_REIMBURSEMENT_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_USER tool input.
 */
type BILL_DELETE_A_USER_INPUT = {
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_DELETE_A_USER tool output.
 */
type BILL_DELETE_A_USER_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_A_VENDOR_BANK_ACCOUNT tool input.
 */
type BILL_DELETE_A_VENDOR_BANK_ACCOUNT_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_DELETE_A_VENDOR_BANK_ACCOUNT tool output.
 */
type BILL_DELETE_A_VENDOR_BANK_ACCOUNT_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_CUSTOMER_CONNECTION tool input.
 */
type BILL_DELETE_CUSTOMER_CONNECTION_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
};

/**
 * Type of BILL's BILL_DELETE_CUSTOMER_CONNECTION tool output.
 */
type BILL_DELETE_CUSTOMER_CONNECTION_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_CUSTOM_FIELD_VALUES tool input.
 */
type BILL_DELETE_CUSTOM_FIELD_VALUES_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
};

/**
 * Type of BILL's BILL_DELETE_CUSTOM_FIELD_VALUES tool output.
 */
type BILL_DELETE_CUSTOM_FIELD_VALUES_OUTPUT = {
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
 * Type of BILL's BILL_DELETE_VENDOR_CONNECTION tool input.
 */
type BILL_DELETE_VENDOR_CONNECTION_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_DELETE_VENDOR_CONNECTION tool output.
 */
type BILL_DELETE_VENDOR_CONNECTION_OUTPUT = {
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
 * Type of BILL's BILL_GENERATE_MFA_CHALLENGE tool input.
 */
type BILL_GENERATE_MFA_CHALLENGE_INPUT = {
  /**
   * Use Backup
   * @description Set as `true` to generate the token with the backup device. The default value is `false`.
   */
  useBackup?: boolean;
};

/**
 * Type of BILL's BILL_GENERATE_MFA_CHALLENGE tool output.
 */
type BILL_GENERATE_MFA_CHALLENGE_OUTPUT = {
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
 * Type of BILL's BILL_GET_ACCOUNTING_CLASS_DETAILS tool input.
 */
type BILL_GET_ACCOUNTING_CLASS_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_ACCOUNTING_CLASS_DETAILS tool output.
 */
type BILL_GET_ACCOUNTING_CLASS_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_API_SESSION_DETAILS tool input.
 */
type BILL_GET_API_SESSION_DETAILS_INPUT = object;

/**
 * Type of BILL's BILL_GET_API_SESSION_DETAILS tool output.
 */
type BILL_GET_API_SESSION_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_ATTACHMENT_DETAILS tool input.
 */
type BILL_GET_ATTACHMENT_DETAILS_INPUT = {
  /**
   * Attachment Id
   * @description Attachmentid
   */
  attachmentId?: string;
};

/**
 * Type of BILL's BILL_GET_ATTACHMENT_DETAILS tool output.
 */
type BILL_GET_ATTACHMENT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR tool input.
 */
type BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR_INPUT = {
  /**
   * Include Archived
   * @description Includearchived
   */
  includeArchived?: boolean;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Start
   * @description Start
   */
  start?: number;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR tool output.
 */
type BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR_OUTPUT = {
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
 * Type of BILL's BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET tool input.
 */
type BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET tool output.
 */
type BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_GET_BANK_ACCOUNT_DETAILS tool input.
 */
type BILL_GET_BANK_ACCOUNT_DETAILS_INPUT = {
  /**
   * Bank Account Id
   * @description Bankaccountid
   */
  bankAccountId?: string;
};

/**
 * Type of BILL's BILL_GET_BANK_ACCOUNT_DETAILS tool output.
 */
type BILL_GET_BANK_ACCOUNT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_BILL_DETAILS tool input.
 */
type BILL_GET_BILL_DETAILS_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
};

/**
 * Type of BILL's BILL_GET_BILL_DETAILS tool output.
 */
type BILL_GET_BILL_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_BUDGET_DETAILS tool input.
 */
type BILL_GET_BUDGET_DETAILS_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
};

/**
 * Type of BILL's BILL_GET_BUDGET_DETAILS tool output.
 */
type BILL_GET_BUDGET_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CARD_ACCOUNT_DETAILS tool input.
 */
type BILL_GET_CARD_ACCOUNT_DETAILS_INPUT = {
  /**
   * Card Account Id
   * @description Cardaccountid
   */
  cardAccountId?: string;
};

/**
 * Type of BILL's BILL_GET_CARD_ACCOUNT_DETAILS tool output.
 */
type BILL_GET_CARD_ACCOUNT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CARD_DETAILS tool input.
 */
type BILL_GET_CARD_DETAILS_INPUT = {
  /**
   * Card Id
   * @description Cardid
   */
  cardId?: string;
};

/**
 * Type of BILL's BILL_GET_CARD_DETAILS tool output.
 */
type BILL_GET_CARD_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CARD_FUNDING_PURPOSE tool input.
 */
type BILL_GET_CARD_FUNDING_PURPOSE_INPUT = {
  /**
   * Brand
   * @description Brand
   */
  brand?: string;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_CARD_FUNDING_PURPOSE tool output.
 */
type BILL_GET_CARD_FUNDING_PURPOSE_OUTPUT = {
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
 * Type of BILL's BILL_GET_CHART_OF_ACCOUNTS_DETAILS tool input.
 */
type BILL_GET_CHART_OF_ACCOUNTS_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_CHART_OF_ACCOUNTS_DETAILS tool output.
 */
type BILL_GET_CHART_OF_ACCOUNTS_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CHECK_IMAGE_DATA tool input.
 */
type BILL_GET_CHECK_IMAGE_DATA_INPUT = {
  /**
   * Payment Id
   * @description Paymentid
   */
  paymentId?: string;
};

/**
 * Type of BILL's BILL_GET_CHECK_IMAGE_DATA tool output.
 */
type BILL_GET_CHECK_IMAGE_DATA_OUTPUT = {
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
 * Type of BILL's BILL_GET_CURRENT_USER_DETAILS tool input.
 */
type BILL_GET_CURRENT_USER_DETAILS_INPUT = object;

/**
 * Type of BILL's BILL_GET_CURRENT_USER_DETAILS tool output.
 */
type BILL_GET_CURRENT_USER_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CUSTOMER_DETAILS tool input.
 */
type BILL_GET_CUSTOMER_DETAILS_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
};

/**
 * Type of BILL's BILL_GET_CUSTOMER_DETAILS tool output.
 */
type BILL_GET_CUSTOMER_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CUSTOMER_INVITATION_STATUS tool input.
 */
type BILL_GET_CUSTOMER_INVITATION_STATUS_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
};

/**
 * Type of BILL's BILL_GET_CUSTOMER_INVITATION_STATUS tool output.
 */
type BILL_GET_CUSTOMER_INVITATION_STATUS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CUSTOM_FIELD_DETAILS tool input.
 */
type BILL_GET_CUSTOM_FIELD_DETAILS_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
};

/**
 * Type of BILL's BILL_GET_CUSTOM_FIELD_DETAILS tool output.
 */
type BILL_GET_CUSTOM_FIELD_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_CUSTOM_FIELD_VALUE tool input.
 */
type BILL_GET_CUSTOM_FIELD_VALUE_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
  /**
   * Custom Field Value Id
   * @description Customfieldvalueid
   */
  customFieldValueId?: string;
};

/**
 * Type of BILL's BILL_GET_CUSTOM_FIELD_VALUE tool output.
 */
type BILL_GET_CUSTOM_FIELD_VALUE_OUTPUT = {
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
 * Type of BILL's BILL_GET_DEPARTMENT_DETAILS tool input.
 */
type BILL_GET_DEPARTMENT_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_DEPARTMENT_DETAILS tool output.
 */
type BILL_GET_DEPARTMENT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_DOCUMENT_DETAILS tool input.
 */
type BILL_GET_DOCUMENT_DETAILS_INPUT = {
  /**
   * Document Id
   * @description Documentid
   */
  documentId?: string;
};

/**
 * Type of BILL's BILL_GET_DOCUMENT_DETAILS tool output.
 */
type BILL_GET_DOCUMENT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_DOCUMENT_UPLOAD_STATUS tool input.
 */
type BILL_GET_DOCUMENT_UPLOAD_STATUS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_GET_DOCUMENT_UPLOAD_STATUS tool output.
 */
type BILL_GET_DOCUMENT_UPLOAD_STATUS_OUTPUT = {
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
 * Type of BILL's BILL_GET_EMPLOYEE_DETAILS tool input.
 */
type BILL_GET_EMPLOYEE_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_EMPLOYEE_DETAILS tool output.
 */
type BILL_GET_EMPLOYEE_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_FUNDING_ACCOUNT_PERMISSIONS tool input.
 */
type BILL_GET_FUNDING_ACCOUNT_PERMISSIONS_INPUT = object;

/**
 * Type of BILL's BILL_GET_FUNDING_ACCOUNT_PERMISSIONS tool output.
 */
type BILL_GET_FUNDING_ACCOUNT_PERMISSIONS_OUTPUT = {
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
 * Type of BILL's BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION tool input.
 */
type BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION_INPUT = {
  /**
   * Account Type
   * @description Accounttype
   */
  accountType?: unknown;
  /**
   * Bill Currency
   * @description Billcurrency
   */
  billCurrency?: unknown;
  /**
   * Country
   * @description Country
   */
  country?: unknown;
};

/**
 * Type of BILL's BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION tool output.
 */
type BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION_OUTPUT = {
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
 * Type of BILL's BILL_GET_INVOICE_DETAILS tool input.
 */
type BILL_GET_INVOICE_DETAILS_INPUT = {
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
};

/**
 * Type of BILL's BILL_GET_INVOICE_DETAILS tool output.
 */
type BILL_GET_INVOICE_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_ITEM_DETAILS tool input.
 */
type BILL_GET_ITEM_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_ITEM_DETAILS tool output.
 */
type BILL_GET_ITEM_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_JOB_DETAILS tool input.
 */
type BILL_GET_JOB_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_JOB_DETAILS tool output.
 */
type BILL_GET_JOB_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_ACCOUNTING_CLASSES tool input.
 */
type BILL_GET_LIST_OF_ACCOUNTING_CLASSES_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_ACCOUNTING_CLASSES tool output.
 */
type BILL_GET_LIST_OF_ACCOUNTING_CLASSES_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_AP_CARDS tool input.
 */
type BILL_GET_LIST_OF_AP_CARDS_INPUT = object;

/**
 * Type of BILL's BILL_GET_LIST_OF_AP_CARDS tool output.
 */
type BILL_GET_LIST_OF_AP_CARDS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_BANK_ACCOUNTS tool input.
 */
type BILL_GET_LIST_OF_BANK_ACCOUNTS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_BANK_ACCOUNTS tool output.
 */
type BILL_GET_LIST_OF_BANK_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_BANK_ACCOUNT_USERS tool input.
 */
type BILL_GET_LIST_OF_BANK_ACCOUNT_USERS_INPUT = {
  /**
   * Current User
   * @description Currentuser
   */
  currentUser?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_BANK_ACCOUNT_USERS tool output.
 */
type BILL_GET_LIST_OF_BANK_ACCOUNT_USERS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_BILLS tool input.
 */
type BILL_GET_LIST_OF_BILLS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_BILLS tool output.
 */
type BILL_GET_LIST_OF_BILLS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_BUDGETS tool input.
 */
type BILL_GET_LIST_OF_BUDGETS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_BUDGETS tool output.
 */
type BILL_GET_LIST_OF_BUDGETS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_CARDS tool input.
 */
type BILL_GET_LIST_OF_CARDS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_CARDS tool output.
 */
type BILL_GET_LIST_OF_CARDS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_CARD_ACCOUNTS tool input.
 */
type BILL_GET_LIST_OF_CARD_ACCOUNTS_INPUT = {
  /**
   * Card User Status
   * @description Carduserstatus
   */
  cardUserStatus?: unknown;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_CARD_ACCOUNTS tool output.
 */
type BILL_GET_LIST_OF_CARD_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_CARD_ACCOUNT_USERS tool input.
 */
type BILL_GET_LIST_OF_CARD_ACCOUNT_USERS_INPUT = {
  /**
   * Current User
   * @description Currentuser
   */
  currentUser?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_CARD_ACCOUNT_USERS tool output.
 */
type BILL_GET_LIST_OF_CARD_ACCOUNT_USERS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_CHART_OF_ACCOUNTS tool input.
 */
type BILL_GET_LIST_OF_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_CHART_OF_ACCOUNTS tool output.
 */
type BILL_GET_LIST_OF_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_CUSTOMERS tool input.
 */
type BILL_GET_LIST_OF_CUSTOMERS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_CUSTOMERS tool output.
 */
type BILL_GET_LIST_OF_CUSTOMERS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_CUSTOM_FIELDS tool input.
 */
type BILL_GET_LIST_OF_CUSTOM_FIELDS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_CUSTOM_FIELDS tool output.
 */
type BILL_GET_LIST_OF_CUSTOM_FIELDS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_DEPARTMENTS tool input.
 */
type BILL_GET_LIST_OF_DEPARTMENTS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_DEPARTMENTS tool output.
 */
type BILL_GET_LIST_OF_DEPARTMENTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_DOCUMENTS tool input.
 */
type BILL_GET_LIST_OF_DOCUMENTS_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_DOCUMENTS tool output.
 */
type BILL_GET_LIST_OF_DOCUMENTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_EMPLOYEES tool input.
 */
type BILL_GET_LIST_OF_EMPLOYEES_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_EMPLOYEES tool output.
 */
type BILL_GET_LIST_OF_EMPLOYEES_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_INVOICES tool input.
 */
type BILL_GET_LIST_OF_INVOICES_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_INVOICES tool output.
 */
type BILL_GET_LIST_OF_INVOICES_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_INVOICE_ATTACHMENTS tool input.
 */
type BILL_GET_LIST_OF_INVOICE_ATTACHMENTS_INPUT = {
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_INVOICE_ATTACHMENTS tool output.
 */
type BILL_GET_LIST_OF_INVOICE_ATTACHMENTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_ITEMS tool input.
 */
type BILL_GET_LIST_OF_ITEMS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_ITEMS tool output.
 */
type BILL_GET_LIST_OF_ITEMS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_JOBS tool input.
 */
type BILL_GET_LIST_OF_JOBS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_JOBS tool output.
 */
type BILL_GET_LIST_OF_JOBS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_LOCATIONS tool input.
 */
type BILL_GET_LIST_OF_LOCATIONS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_LOCATIONS tool output.
 */
type BILL_GET_LIST_OF_LOCATIONS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET tool input.
 */
type BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET tool output.
 */
type BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_MFA_PHONE_NUMBERS tool input.
 */
type BILL_GET_LIST_OF_MFA_PHONE_NUMBERS_INPUT = object;

/**
 * Type of BILL's BILL_GET_LIST_OF_MFA_PHONE_NUMBERS tool output.
 */
type BILL_GET_LIST_OF_MFA_PHONE_NUMBERS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_ORGANIZATIONS tool input.
 */
type BILL_GET_LIST_OF_ORGANIZATIONS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_ORGANIZATIONS tool output.
 */
type BILL_GET_LIST_OF_ORGANIZATIONS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES tool input.
 */
type BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES_INPUT = object;

/**
 * Type of BILL's BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES tool output.
 */
type BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_PAYMENTS tool input.
 */
type BILL_GET_LIST_OF_PAYMENTS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_PAYMENTS tool output.
 */
type BILL_GET_LIST_OF_PAYMENTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_RECURRING_BILLS tool input.
 */
type BILL_GET_LIST_OF_RECURRING_BILLS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_RECURRING_BILLS tool output.
 */
type BILL_GET_LIST_OF_RECURRING_BILLS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_REIMBURSEMENTS tool input.
 */
type BILL_GET_LIST_OF_REIMBURSEMENTS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_REIMBURSEMENTS tool output.
 */
type BILL_GET_LIST_OF_REIMBURSEMENTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_TRANSACTIONS tool input.
 */
type BILL_GET_LIST_OF_TRANSACTIONS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Show Custom Field Ids
   * @description Showcustomfieldids
   */
  showCustomFieldIds?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_TRANSACTIONS tool output.
 */
type BILL_GET_LIST_OF_TRANSACTIONS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD tool input.
 */
type BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD tool output.
 */
type BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_VENDORS tool input.
 */
type BILL_GET_LIST_OF_VENDORS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_VENDORS tool output.
 */
type BILL_GET_LIST_OF_VENDORS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_VENDOR_ATTACHMENTS tool input.
 */
type BILL_GET_LIST_OF_VENDOR_ATTACHMENTS_INPUT = {
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_VENDOR_ATTACHMENTS tool output.
 */
type BILL_GET_LIST_OF_VENDOR_ATTACHMENTS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS tool input.
 */
type BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS_INPUT = {
  /**
   * Amount
   * @description Amount
   */
  amount?: number;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS tool output.
 */
type BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS_OUTPUT = {
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
 * Type of BILL's BILL_GET_LOCATION_DETAILS tool input.
 */
type BILL_GET_LOCATION_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_GET_LOCATION_DETAILS tool output.
 */
type BILL_GET_LOCATION_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_ORGANIZATION_DETAILS tool input.
 */
type BILL_GET_ORGANIZATION_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Organizationid
   */
  organizationId?: string;
};

/**
 * Type of BILL's BILL_GET_ORGANIZATION_DETAILS tool output.
 */
type BILL_GET_ORGANIZATION_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS tool input.
 */
type BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Organizationid
   */
  organizationId?: string;
};

/**
 * Type of BILL's BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS tool output.
 */
type BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_PAN_JWT tool input.
 */
type BILL_GET_PAN_JWT_INPUT = {
  /**
   * Card Id
   * @description Cardid
   */
  cardId?: string;
};

/**
 * Type of BILL's BILL_GET_PAN_JWT tool output.
 */
type BILL_GET_PAN_JWT_OUTPUT = {
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
 * Type of BILL's BILL_GET_PAYMENT_DETAILS tool input.
 */
type BILL_GET_PAYMENT_DETAILS_INPUT = {
  /**
   * Payment Id
   * @description Paymentid
   */
  paymentId?: string;
};

/**
 * Type of BILL's BILL_GET_PAYMENT_DETAILS tool output.
 */
type BILL_GET_PAYMENT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION tool input.
 */
type BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION_INPUT = object;

/**
 * Type of BILL's BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION tool output.
 */
type BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION_OUTPUT = {
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
 * Type of BILL's BILL_GET_RECURRING_BILL_DETAILS tool input.
 */
type BILL_GET_RECURRING_BILL_DETAILS_INPUT = {
  /**
   * Recurring Bill Id
   * @description Recurringbillid
   */
  recurringBillId?: string;
};

/**
 * Type of BILL's BILL_GET_RECURRING_BILL_DETAILS tool output.
 */
type BILL_GET_RECURRING_BILL_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_REIMBURSEMENT_DETAILS tool input.
 */
type BILL_GET_REIMBURSEMENT_DETAILS_INPUT = {
  /**
   * Reimbursement Id
   * @description Reimbursementid
   */
  reimbursementId?: string;
};

/**
 * Type of BILL's BILL_GET_REIMBURSEMENT_DETAILS tool output.
 */
type BILL_GET_REIMBURSEMENT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_RISK_VERIFICATION_DETAILS tool input.
 */
type BILL_GET_RISK_VERIFICATION_DETAILS_INPUT = object;

/**
 * Type of BILL's BILL_GET_RISK_VERIFICATION_DETAILS tool output.
 */
type BILL_GET_RISK_VERIFICATION_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS tool input.
 */
type BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS_INPUT = {
  /**
   * Filters
   * @description Filters
   */
  filters?: string;
  /**
   * Transaction Id
   * @description Transactionid
   */
  transactionId?: string;
};

/**
 * Type of BILL's BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS tool output.
 */
type BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS tool input.
 */
type BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS_INPUT = {
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Next Page
   * @description Nextpage
   */
  nextPage?: string;
  /**
   * Prev Page
   * @description Prevpage
   */
  prevPage?: string;
  /**
   * Transaction Id
   * @description Transactionid
   */
  transactionId?: string;
};

/**
 * Type of BILL's BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS tool output.
 */
type BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_TRANSACTION_DETAILS tool input.
 */
type BILL_GET_TRANSACTION_DETAILS_INPUT = {
  /**
   * Show Custom Field Ids
   * @description Showcustomfieldids
   */
  showCustomFieldIds?: string;
  /**
   * Transaction Id
   * @description Transactionid
   */
  transactionId?: string;
};

/**
 * Type of BILL's BILL_GET_TRANSACTION_DETAILS tool output.
 */
type BILL_GET_TRANSACTION_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS tool input.
 */
type BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS tool output.
 */
type BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_VENDOR_CONFIGURATION tool input.
 */
type BILL_GET_VENDOR_CONFIGURATION_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_VENDOR_CONFIGURATION tool output.
 */
type BILL_GET_VENDOR_CONFIGURATION_OUTPUT = {
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
 * Type of BILL's BILL_GET_VENDOR_DETAILS tool input.
 */
type BILL_GET_VENDOR_DETAILS_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_VENDOR_DETAILS tool output.
 */
type BILL_GET_VENDOR_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_GET_VENDOR_INVITATION_STATUS tool input.
 */
type BILL_GET_VENDOR_INVITATION_STATUS_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_GET_VENDOR_INVITATION_STATUS tool output.
 */
type BILL_GET_VENDOR_INVITATION_STATUS_OUTPUT = {
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
 * Type of BILL's BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION tool input.
 */
type BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION_INPUT = object;

/**
 * Type of BILL's BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION tool output.
 */
type BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION_OUTPUT = {
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
 * Type of BILL's BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK tool input.
 */
type BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
  /**
   * Network Id
   * @description Payment Network ID (PNI) of the organization you want to connect with. For a verified national vendor, the value begins with `0rv`. BILL uses the PNI to send and receive electronic payments. You can retrieve `networkId` from your `GET /v3/network` search result.
   */
  networkId?: string;
};

/**
 * Type of BILL's BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK tool output.
 */
type BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK_OUTPUT = {
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
 * Type of BILL's BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK tool input.
 */
type BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK_INPUT = {
  /**
   * Network Id
   * @description Payment Network ID (PNI) of the organization you want to connect with. For a verified national vendor, the value begins with `0rv`. BILL uses the PNI to send and receive electronic payments. You can retrieve `networkId` from your `GET /v3/network` search result.
   */
  networkId?: string;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK tool output.
 */
type BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK_OUTPUT = {
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
 * Type of BILL's BILL_MFA_STEP_UP_FOR_API_SESSION tool input.
 */
type BILL_MFA_STEP_UP_FOR_API_SESSION_INPUT = {
  /**
   * Device
   * @description Mobile device name. This is a nickname for your mobile device. Set this field when you set `rememberMeId`.
   */
  device?: string;
  /**
   * Remember Me Id
   * @description MFA ID. Set this field for creating an MFA-trusted API session. This MFA ID is generated when you set `rememberMe` as `true` in your `POST /v3/mfa/challenge/validate` request. This value expires in 30 days. See [Validate MFA challenge](ref:validatechallenge) for more information.
   */
  rememberMeId?: string;
};

/**
 * Type of BILL's BILL_MFA_STEP_UP_FOR_API_SESSION tool output.
 */
type BILL_MFA_STEP_UP_FOR_API_SESSION_OUTPUT = {
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
 * Type of BILL's BILL_NOMINATE_A_BANK_ACCOUNT_USER tool input.
 */
type BILL_NOMINATE_A_BANK_ACCOUNT_USER_INPUT = {
  /**
   * Bank Account Id
   * @description BILL-generated ID of the bank account. The value begins with `bac`. **Note**: The bank account `status` must be set as `VERIFIED`.
   */
  bankAccountId?: string;
  /**
   * User Id
   * @description BILL-generated ID of the user. The value begins with `006`.
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_NOMINATE_A_BANK_ACCOUNT_USER tool output.
 */
type BILL_NOMINATE_A_BANK_ACCOUNT_USER_OUTPUT = {
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
 * Type of BILL's BILL_RECORD_AR_PAYMENT tool input.
 */
type BILL_RECORD_AR_PAYMENT_INPUT = {
  /**
   * Amount
   * @description Payment amount
   */
  amount?: number;
  /**
   * Customer Id
   * @description BILL-generated ID of the customer. The value begins with `0cu`.
   */
  customerId?: string;
  /**
   * Description
   * @description Payment description
   */
  description?: string;
  /**
   * Invoices
   * @description List of invoices being paid
   */
  invoices?: {
      /**
       * Amount
       * @description Invoice amount paid
       */
      amount: number;
      /**
       * Id
       * @description BILL-generated ID of the invoice. The value begins with `00e`.
       */
      id: string;
  }[];
  /**
   * Payment Date
   * Format: date
   * @description Payment date. The value is in the `yyyy-MM-dd` format.
   */
  paymentDate?: string;
};

/**
 * Type of BILL's BILL_RECORD_AR_PAYMENT tool output.
 */
type BILL_RECORD_AR_PAYMENT_OUTPUT = {
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
 * Type of BILL's BILL_REPLACE_AN_INVOICE tool input.
 */
type BILL_REPLACE_AN_INVOICE_INPUT = {
  /**
   * Due Date
   * Format: date
   * @description Invoice due date. The value is in the `yyyy-MM-dd` format. If you do not set this value, `dueDate` is set as the date when the invoice is created.
   */
  dueDate?: string;
  /**
   * Invoice Date
   * Format: date
   * @description Invoice creation date. This value is in the `yyyy-MM-dd` format. If you do not set this value, `invoiceDate` is set as the date when the invoice is created.
   */
  invoiceDate?: string;
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
  /**
   * Invoice Line Items
   * @description Invoice line item information
   */
  invoiceLineItems?: {
      /**
       * Description
       * @description Invoice line item description
       */
      description?: string;
      /**
       * Id
       * @description BILL-generated ID of the invoice line item. The value begins with `00f`.
       */
      id?: string;
      /**
       * Price
       * @description Invoice line item price. For an invoice in an international currency, this value is in the local currency.
       */
      price?: number;
      /**
       * Quantity
       * @description Invoice line item quantity
       */
      quantity: number;
  }[];
  /**
   * Invoice Number
   * @description User-generated invoice number. This value can be your chosen number scheme. If you do not set this value, `invoiceNumber` is auto-generated.
   */
  invoiceNumber?: string;
  /**
   * Pay To Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the invoice payment. The value begins with `0ca`.
   */
  payToChartOfAccountId?: string;
};

/**
 * Type of BILL's BILL_REPLACE_AN_INVOICE tool output.
 */
type BILL_REPLACE_AN_INVOICE_OUTPUT = {
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
 * Type of BILL's BILL_REPLACE_A_BILL tool input.
 */
type BILL_REPLACE_A_BILL_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
  /**
   * Bill Line Items
   * @description Bill line items information
   */
  billLineItems?: {
      /**
       * Amount
       * @description Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.
       */
      amount: number;
      /**
       * Description
       * @description Bill line item description
       */
      description?: string;
      /**
       * Id
       * @description BILL-generated ID of the bill line item. The value begins with `bli`.
       */
      id?: string;
  }[];
  /**
   * Description
   * @description Bill description
   */
  description?: string;
  /**
   * Due Date
   * Format: date
   * @description Bill due date. The value is in the `yyyy-MM-dd` format.
   */
  dueDate?: string;
  /**
   * Pay From Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the bill payment. The value begins with `0ca`.
   */
  payFromChartOfAccountId?: string;
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor. The value begins with `009`.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_REPLACE_A_BILL tool output.
 */
type BILL_REPLACE_A_BILL_OUTPUT = {
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
 * Type of BILL's BILL_REPLACE_A_RECURRING_BILL tool input.
 */
type BILL_REPLACE_A_RECURRING_BILL_INPUT = {
  /**
   * Description
   * @description User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  description?: string;
  /**
   * Recurring Bill Id
   * @description Recurringbillid
   */
  recurringBillId?: string;
  /**
   * Recurring Bill Line Items
   * @description Recurring bill line item information
   */
  recurringBillLineItems?: {
      /**
       * Amount
       * @description Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.
       */
      amount: number;
      /**
       * Chart Of Account Id
       * @description BILL-generated ID of the chart of accounts for the recurring bill line item. The value begins with `0ca`.
       */
      chartOfAccountId?: string;
      /**
       * Description
       * @description Bill line item description
       */
      description?: string;
      /**
       * Id
       * @description BILL-generated ID of the bill line item. The value begins with `tli`.
       */
      id?: string;
  }[];
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor. The value begins with `009`.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_REPLACE_A_RECURRING_BILL tool output.
 */
type BILL_REPLACE_A_RECURRING_BILL_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_BILL tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_BILL_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_BILL tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_BILL_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_CUSTOMER tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_CUSTOMER tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_CUSTOMER_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_DEPARTMENT tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_DEPARTMENT_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_DEPARTMENT tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_DEPARTMENT_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_EMPLOYEE tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_EMPLOYEE_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_EMPLOYEE tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_EMPLOYEE_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_INVOICE tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_INVOICE tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_INVOICE_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_ITEM tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_ITEM_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_ITEM tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_ITEM_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_JOB tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_JOB_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_JOB tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_JOB_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_LOCATION tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_LOCATION_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_LOCATION tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_LOCATION_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL_INPUT = {
  /**
   * Recurring Bill Id
   * @description Recurringbillid
   */
  recurringBillId?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_VENDOR tool input.
 */
type BILL_RESTORE_AN_ARCHIVED_VENDOR_INPUT = {
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_RESTORE_AN_ARCHIVED_VENDOR tool output.
 */
type BILL_RESTORE_AN_ARCHIVED_VENDOR_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES tool input.
 */
type BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES tool output.
 */
type BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS tool input.
 */
type BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS tool output.
 */
type BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_DEPARTMENTS tool input.
 */
type BILL_RESTORE_MULTIPLE_DEPARTMENTS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_DEPARTMENTS tool output.
 */
type BILL_RESTORE_MULTIPLE_DEPARTMENTS_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_EMPLOYEES tool input.
 */
type BILL_RESTORE_MULTIPLE_EMPLOYEES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_EMPLOYEES tool output.
 */
type BILL_RESTORE_MULTIPLE_EMPLOYEES_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_ITEMS tool input.
 */
type BILL_RESTORE_MULTIPLE_ITEMS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_ITEMS tool output.
 */
type BILL_RESTORE_MULTIPLE_ITEMS_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_JOBS tool input.
 */
type BILL_RESTORE_MULTIPLE_JOBS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_JOBS tool output.
 */
type BILL_RESTORE_MULTIPLE_JOBS_OUTPUT = {
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
 * Type of BILL's BILL_RESTORE_MULTIPLE_LOCATIONS tool input.
 */
type BILL_RESTORE_MULTIPLE_LOCATIONS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of BILL's BILL_RESTORE_MULTIPLE_LOCATIONS tool output.
 */
type BILL_RESTORE_MULTIPLE_LOCATIONS_OUTPUT = {
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
 * Type of BILL's BILL_RETRIEVE_CUSTOMER_ATTACHMENTS tool input.
 */
type BILL_RETRIEVE_CUSTOMER_ATTACHMENTS_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
  /**
   * Max
   * @description Max
   */
  max?: number;
  /**
   * Page
   * @description Page
   */
  page?: string;
};

/**
 * Type of BILL's BILL_RETRIEVE_CUSTOMER_ATTACHMENTS tool output.
 */
type BILL_RETRIEVE_CUSTOMER_ATTACHMENTS_OUTPUT = {
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
 * Type of BILL's BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS tool input.
 */
type BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS_INPUT = {
  /**
   * Account Number
   * @description Accountnumber
   */
  accountNumber?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Scope
   * @description Scope
   */
  scope?: unknown;
  /**
   * Zip Or Postal Code
   * @description Ziporpostalcode
   */
  zipOrPostalCode?: string;
};

/**
 * Type of BILL's BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS tool output.
 */
type BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS_OUTPUT = {
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
 * Type of BILL's BILL_SEND_AN_INVOICE tool input.
 */
type BILL_SEND_AN_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
};

/**
 * Type of BILL's BILL_SEND_AN_INVOICE tool output.
 */
type BILL_SEND_AN_INVOICE_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_AN_ACCOUNTING_CLASS tool input.
 */
type BILL_UPDATE_AN_ACCOUNTING_CLASS_INPUT = {
  /**
   * Description
   * @description Accounting class description
   */
  description?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Accounting class name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent accounting class. You can set this field if this accounting class is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Accounting class short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_UPDATE_AN_ACCOUNTING_CLASS tool output.
 */
type BILL_UPDATE_AN_ACCOUNTING_CLASS_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_AN_EMPLOYEE tool input.
 */
type BILL_UPDATE_AN_EMPLOYEE_INPUT = {
  /**
   * First Name
   * @description Employee first name
   */
  firstName?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Last Name
   * @description Employee last name
   */
  lastName?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent employee. You can set this field if this employee is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Employee short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_UPDATE_AN_EMPLOYEE tool output.
 */
type BILL_UPDATE_AN_EMPLOYEE_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_AN_INVOICE tool input.
 */
type BILL_UPDATE_AN_INVOICE_INPUT = {
  /**
   * Due Date
   * Format: date
   * @description Invoice due date. The value is in the `yyyy-MM-dd` format. If you do not set this value, `dueDate` is set as the date when the invoice is created.
   */
  dueDate?: string;
  /**
   * Invoice Date
   * Format: date
   * @description Invoice creation date. This value is in the `yyyy-MM-dd` format. If you do not set this value, `invoiceDate` is set as the date when the invoice is created.
   */
  invoiceDate?: string;
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
  /**
   * Invoice Line Items
   * @description Invoice line item information
   */
  invoiceLineItems?: {
      /**
       * Description
       * @description Invoice line item description
       */
      description?: string;
      /**
       * Id
       * @description BILL-generated ID of the invoice line item. The value begins with `00f`.
       */
      id: string;
      /**
       * Price
       * @description Invoice line item price. For an invoice in an international currency, this value is in the local currency.
       */
      price?: number;
      /**
       * Quantity
       * @description Invoice line item quantity
       */
      quantity?: number;
  }[];
  /**
   * Invoice Number
   * @description User-generated invoice number. This value can be your chosen number scheme. If you do not set this value, `invoiceNumber` is auto-generated.
   */
  invoiceNumber?: string;
  /**
   * Pay To Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the invoice payment. The value begins with `0ca`.
   */
  payToChartOfAccountId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_AN_INVOICE tool output.
 */
type BILL_UPDATE_AN_INVOICE_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_AN_ITEM tool input.
 */
type BILL_UPDATE_AN_ITEM_INPUT = {
  /**
   * Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the item. The value begins with `0ca`.
   */
  chartOfAccountId?: string;
  /**
   * Description
   * @description Item description
   */
  description?: string;
  /**
   * Expense Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the item when it is used for bills or purchases in your accounting system. The value begins with `0ca`.
   */
  expenseChartOfAccountId?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Item name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent item. You can set this field if this item is a child object.
   */
  parentId?: string;
  /**
   * Price
   * @description Item price
   */
  price?: number;
  /**
   * Purchase Cost
   * @description Item purchase cost set in your accounting system
   */
  purchaseCost?: number;
  /**
   * Purchase Description
   * @description Item description when it is used for bills or purchases in your accounting system
   */
  purchaseDescription?: string;
  /**
   * Short Name
   * @description Item short name
   */
  shortName?: string;
  /**
   * Taxable
   * @description Set as `true` if the item is taxable
   */
  taxable?: boolean;
};

/**
 * Type of BILL's BILL_UPDATE_AN_ITEM tool output.
 */
type BILL_UPDATE_AN_ITEM_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_AN_ORGANIZATION tool input.
 */
type BILL_UPDATE_AN_ORGANIZATION_INPUT = {
  /**
   * Industry
   * @description Organization industry
   */
  industry?: string;
  /**
   * Name
   * @description Organization name
   */
  name?: string;
  /**
   * Organization Id
   * @description Organizationid
   */
  organizationId?: string;
  /**
   * Phone
   * @description Organization phone number
   */
  phone?: string;
  /**
   * Tax Id
   * @description Organization tax ID. This value is required by the IRS for tax purposes.
   */
  taxId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_AN_ORGANIZATION tool output.
 */
type BILL_UPDATE_AN_ORGANIZATION_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_BANK_ACCOUNT tool input.
 */
type BILL_UPDATE_A_BANK_ACCOUNT_INPUT = {
  /**
   * Access To Admins
   * @description Set as `true` to enable access to all users with the `ADMINISTRATOR` user role
   */
  accessToAdmins?: boolean;
  /**
   * Bank Account Id
   * @description Bankaccountid
   */
  bankAccountId?: string;
  /**
   * Bank Name
   * @description Bank name. Set this field as a nickname for your bank account.
   */
  bankName?: string;
  /**
   * Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the organization bank account. The value begins with `0ca`.
   */
  chartOfAccountId?: string;
  /**
   * Name On Account
   * @description Full name on bank account
   */
  nameOnAccount?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_BANK_ACCOUNT tool output.
 */
type BILL_UPDATE_A_BANK_ACCOUNT_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_BILL tool input.
 */
type BILL_UPDATE_A_BILL_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
  /**
   * Bill Line Items
   * @description Bill line items information
   */
  billLineItems?: {
      /**
       * Amount
       * @description Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.
       */
      amount?: number;
      /**
       * Description
       * @description Bill line item description
       */
      description?: string;
      /**
       * Id
       * @description BILL-generated ID of the bill line item. The value begins with `bli`.
       */
      id: string;
  }[];
  /**
   * Description
   * @description Bill description
   */
  description?: string;
  /**
   * Due Date
   * Format: date
   * @description Bill due date. The value is in the `yyyy-MM-dd` format.
   */
  dueDate?: string;
  /**
   * Pay From Chart Of Account Id
   * @description BILL-generated ID of the chart of accounts for the bill payment. The value begins with `0ca`.
   */
  payFromChartOfAccountId?: string;
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor. The value begins with `009`.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_BILL tool output.
 */
type BILL_UPDATE_A_BILL_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_BUDGET tool input.
 */
type BILL_UPDATE_A_BUDGET_INPUT = {
  /**
   * Auto Add Users
   * @description Set to `true` to automatically add all new users to this budget
   */
  autoAddUsers?: boolean;
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
  /**
   * Carry Over
   * @description When set to `true`, users and cards assigned funds under this budget will carry over from one budget period to the next
   */
  carryOver?: boolean;
  /**
   * Description
   * @description Budget description
   */
  description?: string;
  /**
   * Expiration Date
   * Format: date
   * @description Budget expiration date. This value is in the `yyyy-MM-dd` format. Set to null for no expiration.
   */
  expirationDate?: string;
  /**
   * Limit
   * @description Spend limit for the initial budget period.
   */
  limit?: number;
  /**
   * Limitless Goal
   * @description Spend goal for a limitless budget. Do not set unless `limitlessOverspend` is true.
   */
  limitlessGoal?: number;
  /**
   * Limitless Overspend
   * @description When set to `true`, any amount of spend over the budget limit will be allowed. Budgets with limitless overspend cannot have a recurringInterval of `DAILY` or `WEEKLY`.
   */
  limitlessOverspend?: boolean;
  /**
   * Max Tx Size
   * @description Maximum transaction size for the budget. Any single transactions for an amount greater than this will be declined
   */
  maxTxSize?: number;
  /**
   * Name
   * @description Budget name
   */
  name?: string;
  /**
   * Overspend Buffer
   * @description Amount over budget limit to allow spending before transactions will be declined. `overspendBuffer` cannot be set for limitless budgets or budgets with a recurringInterval of `DAILY` or `WEEKLY`.
   */
  overspendBuffer?: number;
  /**
   * Receipt Required
   * @description Set to `true` if a receipt is required for transactions in the budget
   */
  receiptRequired?: boolean;
  /**
   * Recur Month
   * @description Which month the budget will recur on, for quarterly or yearly budgets. Should be an integer in the range 1-12. Current month is assumed if not specified. Do not set for a `recurringInterval` other than `QUARTERLY` or `YEARLY`. Defaults to current month.
   */
  recurMonth?: number;
  /**
   * Recurring Limit
   * @description Spend limit for all future budget periods. Must be set if recurringInterval is anything other than `NONE`.
   */
  recurringLimit?: number;
  /**
   * Timezone
   * @description Budget funds are reset at midnight in this timezone. Defaults to the timezone of the company"s billing address.
   */
  timezone?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_BUDGET tool output.
 */
type BILL_UPDATE_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_CHART_OF_ACCOUNTS tool input.
 */
type BILL_UPDATE_A_CHART_OF_ACCOUNTS_INPUT = {
  /**
   * Description
   * @description Chart of accounts description
   */
  description?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Chart of accounts name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent chart of accounts. You can set this field if this chart of accounts is a child object.
   */
  parentId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_CHART_OF_ACCOUNTS tool output.
 */
type BILL_UPDATE_A_CHART_OF_ACCOUNTS_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_CUSTOMER tool input.
 */
type BILL_UPDATE_A_CUSTOMER_INPUT = {
  /**
   * Account Number
   * @description Customer account number. The number appears in customer invoices.
   */
  accountNumber?: string;
  /**
   * Company Name
   * @description Customer company name
   */
  companyName?: string;
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
  /**
   * Description
   * @description Customer description
   */
  description?: string;
  /**
   * Email
   * @description Customer email address
   */
  email?: string;
  /**
   * Fax
   * @description Customer fax number
   */
  fax?: string;
  /**
   * Name
   * @description Customer name
   */
  name?: string;
  /**
   * Payment Term Id
   * @description BILL-generated ID of the payment term. The payment term defines the number of days the customer has to pay an invoice.
   */
  paymentTermId?: string;
  /**
   * Phone
   * @description Customer phone number
   */
  phone?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_CUSTOMER tool output.
 */
type BILL_UPDATE_A_CUSTOMER_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION tool input.
 */
type BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION_INPUT = {
  /**
   * Custom Fields
   * @description List of updates to perform on the custom fields and values
   */
  customFields?: {
      /**
       * Custom Field Id
       * @description BILL-generated ID of the custom field
       */
      customFieldId: string;
      /**
       * Note
       * @description Updated note. **Note**: This field will only update for custom fields with a type of NOTE.
       */
      note?: string;
      /**
       * Selected Values
       * @description List of custom field value BILL-generated IDs. **Note**: Pass in an empty array to clear all selectedValues on a custom field.
       */
      selectedValues?: string[];
  }[];
  /**
   * Transaction Id
   * @description Transactionid
   */
  transactionId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION tool output.
 */
type BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_DEPARTMENT tool input.
 */
type BILL_UPDATE_A_DEPARTMENT_INPUT = {
  /**
   * Description
   * @description Department description
   */
  description?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Department name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent department. You can set this field if this department is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Department short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_DEPARTMENT tool output.
 */
type BILL_UPDATE_A_DEPARTMENT_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_JOB tool input.
 */
type BILL_UPDATE_A_JOB_INPUT = {
  /**
   * Description
   * @description Job description
   */
  description?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Job name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent job. You can set this field if this job is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Job short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_JOB tool output.
 */
type BILL_UPDATE_A_JOB_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET tool input.
 */
type BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
  /**
   * Members
   * @description List of budget member updates
   */
  members?: {
      /**
       * Limit
       * @description Funds assigned to the user during the current budget period. If shareBudgetFunds is false, limit must be set.
       */
      limit?: number;
      /**
       * Recurring Limit
       * @description Funds assigned to the user in all future budget periods. If shareBudgetFunds is false, recurringLimit must be set.
       */
      recurringLimit?: number;
      /**
       * Share Budget Funds
       * @description Share all budget funds with the user. When set to `true`, limit and recurringLimit must be null.
       */
      shareBudgetFunds?: boolean;
      /**
       * User Id
       * @description BILL-generated ID of the user
       */
      userId: string;
  }[];
};

/**
 * Type of BILL's BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET tool output.
 */
type BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_LOCATION tool input.
 */
type BILL_UPDATE_A_LOCATION_INPUT = {
  /**
   * Description
   * @description Location description
   */
  description?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Location name
   */
  name?: string;
  /**
   * Parent Id
   * @description BILL-generated ID of the parent location. You can set this field if this location is a child object.
   */
  parentId?: string;
  /**
   * Short Name
   * @description Location short name
   */
  shortName?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_LOCATION tool output.
 */
type BILL_UPDATE_A_LOCATION_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_RECURRING_BILL tool input.
 */
type BILL_UPDATE_A_RECURRING_BILL_INPUT = {
  /**
   * Description
   * @description User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  description?: string;
  /**
   * Recurring Bill Id
   * @description Recurringbillid
   */
  recurringBillId?: string;
  /**
   * Recurring Bill Line Items
   * @description Recurring bill line item information
   */
  recurringBillLineItems?: {
      /**
       * Amount
       * @description Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.
       */
      amount?: number;
      /**
       * Chart Of Account Id
       * @description BILL-generated ID of the chart of accounts for the recurring bill line item. The value begins with `0ca`.
       */
      chartOfAccountId?: string;
      /**
       * Description
       * @description Bill line item description
       */
      description?: string;
      /**
       * Id
       * @description BILL-generated ID of the bill line item. The value begins with `tli`.
       */
      id: string;
  }[];
  /**
   * Vendor Id
   * @description BILL-generated ID of the vendor. The value begins with `009`.
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_RECURRING_BILL tool output.
 */
type BILL_UPDATE_A_RECURRING_BILL_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_REIMBURSEMENT tool input.
 */
type BILL_UPDATE_A_REIMBURSEMENT_INPUT = {
  /**
   * Amount
   * @description Amount to be reimbursed to the user
   */
  amount?: number;
  /**
   * Budget Id
   * @description BILL-generated ID of the budget that the funds for this reimbursement will come from
   */
  budgetId?: string;
  /**
   * Custom Fields
   * @description List of custom fields and selected values for the reimbursement
   */
  customFields?: {
      /**
       * Custom Field Id
       * @description BILL-generated ID of the custom field
       */
      customFieldId: string;
      /**
       * Note
       * @description Updated note. **Note**: This field will only update for custom fields with a type of NOTE.
       */
      note?: string;
      /**
       * Selected Values
       * @description List of custom field value BILL-generated IDs. **Note**: Pass in an empty array to clear all selectedValues on a custom field.
       */
      selectedValues?: string[];
  }[];
  /**
   * Merchant Name
   * @description Name of the merchant for the transaction that this reimbursement is for
   */
  merchantName?: string;
  /**
   * Note
   * @description Note provided by the submitter that describes the business purpose for the expense
   */
  note?: string;
  /**
   * Occurred Date
   * Format: date
   * @description Date when the user made the purchase. The value is in the `yyyy-MM-dd` format.
   */
  occurredDate?: string;
  /**
   * Receipts
   * @description Replace the list of receipts associated with the reimbursement
   */
  receipts?: {
      /**
       * Filename
       * @description Name of the receipt file
       */
      filename: string;
      /**
       * Url
       * @description URL to download receipt. **NOTE**: This field is not present on the Reimbursement list endpoint.
       */
      url: string;
  }[];
  /**
   * Reimbursement Id
   * @description Reimbursementid
   */
  reimbursementId?: string;
  /**
   * User Id
   * @description BILL-generated ID of the user to be reimbursed
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_REIMBURSEMENT tool output.
 */
type BILL_UPDATE_A_REIMBURSEMENT_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_VENDOR tool input.
 */
type BILL_UPDATE_A_VENDOR_INPUT = {
  /**
   * Account Number
   * @description User account number set by the vendor. Set this field as the billing statement account number for vendor services such as utility or credit card bills. When you pay the vendor, this value appears on the check memo or electronic payment record.
   */
  accountNumber?: string;
  /**
   * Email
   * @description Vendor email address
   */
  email?: string;
  /**
   * Name
   * @description Vendor name
   */
  name?: string;
  /**
   * Phone
   * @description Vendor phone number
   */
  phone?: string;
  /**
   * Short Name
   * @description Vendor short name
   */
  shortName?: string;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_A_VENDOR tool output.
 */
type BILL_UPDATE_A_VENDOR_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_A_VENDOR_CARD tool input.
 */
type BILL_UPDATE_A_VENDOR_CARD_INPUT = {
  /**
   * Budget Id
   * @description BILL-generated ID of the budget linked with the card
   */
  budgetId?: string;
  /**
   * Card Id
   * @description Cardid
   */
  cardId?: string;
  /**
   * Expiration Date
   * Format: date
   * @description Card expiration date. The value is in the `yyyy-MM-dd` format. Set to null to remove the card"s expiration date.
   */
  expirationDate?: string;
  /**
   * Limit
   * @description Budget amount of funds added to the card
   */
  limit?: number;
  /**
   * Name
   * @description Card name
   */
  name?: string;
  /**
   * Recurring
   * @description Set as `true` to set card as `RECURRING`, Set as `false` to set card as `ONE_TIME`, or leave blank to have the card retain type.
   */
  recurring?: boolean;
  /**
   * Recurring Limit
   * @description Recurring budget amount added to the card each month
   */
  recurringLimit?: number;
  /**
   * Share Budget Funds
   * @description Set as `true` to allow the card to use all available budget funds. If set to `true`, `limit` and `recurringLimit` may not be set.
   */
  shareBudgetFunds?: boolean;
};

/**
 * Type of BILL's BILL_UPDATE_A_VENDOR_CARD tool output.
 */
type BILL_UPDATE_A_VENDOR_CARD_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_BUDGET_MEMBER_FUNDS tool input.
 */
type BILL_UPDATE_BUDGET_MEMBER_FUNDS_INPUT = {
  /**
   * Budget Id
   * @description Budgetid
   */
  budgetId?: string;
  /**
   * Limit
   * @description Funds assigned to the user during the current budget period. If shareBudgetFunds is false, limit must be set.
   */
  limit?: number;
  /**
   * Recurring Limit
   * @description Funds assigned to the user in all future budget periods. If shareBudgetFunds is false, recurringLimit must be set.
   */
  recurringLimit?: number;
  /**
   * Share Budget Funds
   * @description Share all budget funds with the user. When set to `true`, limit and recurringLimit must be null.
   */
  shareBudgetFunds?: boolean;
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_BUDGET_MEMBER_FUNDS tool output.
 */
type BILL_UPDATE_BUDGET_MEMBER_FUNDS_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_CUSTOM_FIELD_DETAILS tool input.
 */
type BILL_UPDATE_CUSTOM_FIELD_DETAILS_INPUT = {
  /**
   * Allow Custom Values
   * @description Set as `true` if the custom field should allow custom values.
   */
  allowCustomValues?: boolean;
  /**
   * Custom Field Id
   * @description Customfieldid
   */
  customFieldId?: string;
  /**
   * Description
   * @description Custom field description.
   */
  description?: string;
  /**
   * Minimum Amount For Requirement
   * @description Minimum transaction amount to make custom field required.
   */
  minimumAmountForRequirement?: number;
  /**
   * Name
   * @description Custom field name.
   */
  name?: string;
  /**
   * Required
   * @description Set as `true` if the custom field is required.
   */
  required?: boolean;
  /**
   * Required Budget Ids
   * @description Budget IDs that will require the new custom field to be required.
   */
  requiredBudgetIds?: string[];
  /**
   * Selected Budget Ids
   * @description Budget IDs to have the new custom field assigned to it but not be required.
   */
  selectedBudgetIds?: string[];
};

/**
 * Type of BILL's BILL_UPDATE_CUSTOM_FIELD_DETAILS tool output.
 */
type BILL_UPDATE_CUSTOM_FIELD_DETAILS_OUTPUT = {
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
 * Type of BILL's BILL_UPDATE_TRANSACTION tool input.
 */
type BILL_UPDATE_TRANSACTION_INPUT = {
  /**
   * Budget Id
   * @description BILL-generated ID of the budget to assign this transaction to
   */
  budgetId?: string;
  /**
   * Transaction Id
   * @description Transactionid
   */
  transactionId?: string;
};

/**
 * Type of BILL's BILL_UPDATE_TRANSACTION tool output.
 */
type BILL_UPDATE_TRANSACTION_OUTPUT = {
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
 * Type of BILL's BILL_UPLOAD_BILL_DOCUMENT tool input.
 */
type BILL_UPLOAD_BILL_DOCUMENT_INPUT = {
  /**
   * Bill Id
   * @description Billid
   */
  billId?: string;
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of BILL's BILL_UPLOAD_BILL_DOCUMENT tool output.
 */
type BILL_UPLOAD_BILL_DOCUMENT_OUTPUT = {
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
 * Type of BILL's BILL_UPLOAD_CUSTOMER_ATTACHMENT tool input.
 */
type BILL_UPLOAD_CUSTOMER_ATTACHMENT_INPUT = {
  /**
   * Customer Id
   * @description Customerid
   */
  customerId?: string;
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of BILL's BILL_UPLOAD_CUSTOMER_ATTACHMENT tool output.
 */
type BILL_UPLOAD_CUSTOMER_ATTACHMENT_OUTPUT = {
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
 * Type of BILL's BILL_UPLOAD_INVOICE_ATTACHMENT tool input.
 */
type BILL_UPLOAD_INVOICE_ATTACHMENT_INPUT = {
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Invoice Id
   * @description Invoiceid
   */
  invoiceId?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of BILL's BILL_UPLOAD_INVOICE_ATTACHMENT tool output.
 */
type BILL_UPLOAD_INVOICE_ATTACHMENT_OUTPUT = {
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
 * Type of BILL's BILL_UPLOAD_VENDOR_ATTACHMENT tool input.
 */
type BILL_UPLOAD_VENDOR_ATTACHMENT_INPUT = {
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Vendor Id
   * @description Vendorid
   */
  vendorId?: string;
};

/**
 * Type of BILL's BILL_UPLOAD_VENDOR_ATTACHMENT tool output.
 */
type BILL_UPLOAD_VENDOR_ATTACHMENT_OUTPUT = {
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
 * Type of BILL's BILL_VALIDATE_MFA_CHALLENGE tool input.
 */
type BILL_VALIDATE_MFA_CHALLENGE_INPUT = {
  /**
   * Challenge Id
   * @description MFA `challengeId` from the `POST /v3/mfa/challenge` response
   */
  challengeId?: string;
  /**
   * Device
   * @description Mobile device name. This is a nickname for your mobile device. Set this field when `rememberMe` is set as `true`.
   */
  device?: string;
  /**
   * Machine Name
   * @description Machine name. This is a nickname for the machine used to complete MFA sign in. Set this field when `rememberMe` is set as `true`.
   */
  machineName?: string;
  /**
   * Remember Me
   * @description Set as `true` for the generated MFA ID to expire in 30 days
   */
  rememberMe?: boolean;
  /**
   * Token
   * @description Validation `token` sent to the registered phone number
   */
  token?: string;
};

/**
 * Type of BILL's BILL_VALIDATE_MFA_CHALLENGE tool output.
 */
type BILL_VALIDATE_MFA_CHALLENGE_OUTPUT = {
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
 * Type of BILL's BILL_VALIDATE_PHONE_FOR_MFA_SETUP tool input.
 */
type BILL_VALIDATE_PHONE_FOR_MFA_SETUP_INPUT = {
  /**
   * Setup Id
   * @description MFA `setupId` from the `POST /v3/mfa/setup` response
   */
  setupId?: string;
  /**
   * Token
   * @description Validation `token` sent to the registered phone number
   */
  token?: string;
};

/**
 * Type of BILL's BILL_VALIDATE_PHONE_FOR_MFA_SETUP tool output.
 */
type BILL_VALIDATE_PHONE_FOR_MFA_SETUP_OUTPUT = {
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
 * Type of BILL's BILL_VERIFY_A_BANK_ACCOUNT tool input.
 */
type BILL_VERIFY_A_BANK_ACCOUNT_INPUT = {
  /**
   * Bank Account Id
   * @description Bankaccountid
   */
  bankAccountId?: string;
  /**
   * Deposit Amount
   * @description Verify deposit amount. Enter an amount between `0.01` and `0.99`. In the sandbox environment, set this field as `0.50` to complete bank account verification.
   */
  depositAmount?: number;
};

/**
 * Type of BILL's BILL_VERIFY_A_BANK_ACCOUNT tool output.
 */
type BILL_VERIFY_A_BANK_ACCOUNT_OUTPUT = {
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
 * Type of BILL's BILL_VOID_A_PAYMENT tool input.
 */
type BILL_VOID_A_PAYMENT_INPUT = {
  /**
   * Payment Id
   * @description Paymentid
   */
  paymentId?: string;
  /**
   * Reason
   * @description Void payment request reason
   */
  reason?: string;
};

/**
 * Type of BILL's BILL_VOID_A_PAYMENT tool output.
 */
type BILL_VOID_A_PAYMENT_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "BILL".
 */
export type BILL_TOOL_INPUTS = {
  ACCEPT_NETWORK_INVITATION: BILL_ACCEPT_NETWORK_INVITATION_INPUT
  ADD_PHONE_FOR_MFA_SETUP: BILL_ADD_PHONE_FOR_MFA_SETUP_INPUT
  ADD_PHONE_FOR_RISK_VERIFICATION: BILL_ADD_PHONE_FOR_RISK_VERIFICATION_INPUT
  API_LOGIN: BILL_API_LOGIN_INPUT
  API_LOGIN_AS_USER: BILL_API_LOGIN_AS_USER_INPUT
  API_LOGOUT: BILL_API_LOGOUT_INPUT
  API_PARTNER_LOGIN: BILL_API_PARTNER_LOGIN_INPUT
  APPROVE_OR_DENY_A_REIMBURSEMENT: BILL_APPROVE_OR_DENY_A_REIMBURSEMENT_INPUT
  ARCHIVE_AN_ACCOUNTING_CLASS: BILL_ARCHIVE_AN_ACCOUNTING_CLASS_INPUT
  ARCHIVE_AN_EMPLOYEE: BILL_ARCHIVE_AN_EMPLOYEE_INPUT
  ARCHIVE_AN_INVOICE: BILL_ARCHIVE_AN_INVOICE_INPUT
  ARCHIVE_AN_ITEM: BILL_ARCHIVE_AN_ITEM_INPUT
  ARCHIVE_A_BANK_ACCOUNT: BILL_ARCHIVE_A_BANK_ACCOUNT_INPUT
  ARCHIVE_A_BANK_ACCOUNT_USER: BILL_ARCHIVE_A_BANK_ACCOUNT_USER_INPUT
  ARCHIVE_A_BILL: BILL_ARCHIVE_A_BILL_INPUT
  ARCHIVE_A_CHART_OF_ACCOUNTS: BILL_ARCHIVE_A_CHART_OF_ACCOUNTS_INPUT
  ARCHIVE_A_CUSTOMER: BILL_ARCHIVE_A_CUSTOMER_INPUT
  ARCHIVE_A_DEPARTMENT: BILL_ARCHIVE_A_DEPARTMENT_INPUT
  ARCHIVE_A_JOB: BILL_ARCHIVE_A_JOB_INPUT
  ARCHIVE_A_LOCATION: BILL_ARCHIVE_A_LOCATION_INPUT
  ARCHIVE_A_RECURRING_BILL: BILL_ARCHIVE_A_RECURRING_BILL_INPUT
  ARCHIVE_A_VENDOR: BILL_ARCHIVE_A_VENDOR_INPUT
  ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES: BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES_INPUT
  ARCHIVE_MULTIPLE_DEPARTMENTS: BILL_ARCHIVE_MULTIPLE_DEPARTMENTS_INPUT
  ARCHIVE_MULTIPLE_EMPLOYEES: BILL_ARCHIVE_MULTIPLE_EMPLOYEES_INPUT
  ARCHIVE_MULTIPLE_ITEMS: BILL_ARCHIVE_MULTIPLE_ITEMS_INPUT
  ARCHIVE_MULTIPLE_JOBS: BILL_ARCHIVE_MULTIPLE_JOBS_INPUT
  ARCHIVE_MULTIPLE_LOCATIONS: BILL_ARCHIVE_MULTIPLE_LOCATIONS_INPUT
  ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS: BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS_INPUT
  BILL_ARCHIVE_A_USER: BILL_BILL_ARCHIVE_A_USER_INPUT
  BILL_BILL_CREATE_A_USER: BILL_BILL_BILL_CREATE_A_USER_INPUT
  BILL_BILL_GET_LIST_OF_USERS: BILL_BILL_BILL_GET_LIST_OF_USERS_INPUT
  BILL_BILL_GET_USER_DETAILS: BILL_BILL_BILL_GET_USER_DETAILS_INPUT
  BILL_BILL_UPDATE_A_USER: BILL_BILL_BILL_UPDATE_A_USER_INPUT
  BILL_GET_LIST_OF_USER_ROLES: BILL_BILL_GET_LIST_OF_USER_ROLES_INPUT
  BILL_GET_USER_ROLE_DETAILS: BILL_BILL_GET_USER_ROLE_DETAILS_INPUT
  BILL_RESTORE_AN_ARCHIVED_USER: BILL_BILL_RESTORE_AN_ARCHIVED_USER_INPUT
  CANCEL_A_PAYMENT: BILL_CANCEL_A_PAYMENT_INPUT
  CHECK_APP_HEALTH: BILL_CHECK_APP_HEALTH_INPUT
  CREATE_AN_ACCOUNTING_CLASS: BILL_CREATE_AN_ACCOUNTING_CLASS_INPUT
  CREATE_AN_EMPLOYEE: BILL_CREATE_AN_EMPLOYEE_INPUT
  CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT: BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT_INPUT
  CREATE_AN_INVOICE: BILL_CREATE_AN_INVOICE_INPUT
  CREATE_AN_ITEM: BILL_CREATE_AN_ITEM_INPUT
  CREATE_AN_ORGANIZATION: BILL_CREATE_AN_ORGANIZATION_INPUT
  CREATE_A_BANK_ACCOUNT: BILL_CREATE_A_BANK_ACCOUNT_INPUT
  CREATE_A_BILL: BILL_CREATE_A_BILL_INPUT
  CREATE_A_BUDGET: BILL_CREATE_A_BUDGET_INPUT
  CREATE_A_BULK_PAYMENT: BILL_CREATE_A_BULK_PAYMENT_INPUT
  CREATE_A_CHART_OF_ACCOUNTS: BILL_CREATE_A_CHART_OF_ACCOUNTS_INPUT
  CREATE_A_CUSTOMER: BILL_CREATE_A_CUSTOMER_INPUT
  CREATE_A_DEPARTMENT: BILL_CREATE_A_DEPARTMENT_INPUT
  CREATE_A_JOB: BILL_CREATE_A_JOB_INPUT
  CREATE_A_LOCATION: BILL_CREATE_A_LOCATION_INPUT
  CREATE_A_PAYMENT: BILL_CREATE_A_PAYMENT_INPUT
  CREATE_A_RECURRING_BILL: BILL_CREATE_A_RECURRING_BILL_INPUT
  CREATE_A_REIMBURSEMENT: BILL_CREATE_A_REIMBURSEMENT_INPUT
  CREATE_A_VENDOR: BILL_CREATE_A_VENDOR_INPUT
  CREATE_A_VENDOR_BANK_ACCOUNT: BILL_CREATE_A_VENDOR_BANK_ACCOUNT_INPUT
  CREATE_A_VENDOR_CARD: BILL_CREATE_A_VENDOR_CARD_INPUT
  CREATE_CUSTOM_FIELD: BILL_CREATE_CUSTOM_FIELD_INPUT
  CREATE_CUSTOM_FIELD_VALUES: BILL_CREATE_CUSTOM_FIELD_VALUES_INPUT
  DELETE_A_BUDGET: BILL_DELETE_A_BUDGET_INPUT
  DELETE_A_CARD: BILL_DELETE_A_CARD_INPUT
  DELETE_A_CUSTOM_FIELD: BILL_DELETE_A_CUSTOM_FIELD_INPUT
  DELETE_A_MEMBER_FROM_A_BUDGET: BILL_DELETE_A_MEMBER_FROM_A_BUDGET_INPUT
  DELETE_A_REIMBURSEMENT: BILL_DELETE_A_REIMBURSEMENT_INPUT
  DELETE_A_USER: BILL_DELETE_A_USER_INPUT
  DELETE_A_VENDOR_BANK_ACCOUNT: BILL_DELETE_A_VENDOR_BANK_ACCOUNT_INPUT
  DELETE_CUSTOMER_CONNECTION: BILL_DELETE_CUSTOMER_CONNECTION_INPUT
  DELETE_CUSTOM_FIELD_VALUES: BILL_DELETE_CUSTOM_FIELD_VALUES_INPUT
  DELETE_VENDOR_CONNECTION: BILL_DELETE_VENDOR_CONNECTION_INPUT
  GENERATE_MFA_CHALLENGE: BILL_GENERATE_MFA_CHALLENGE_INPUT
  GET_ACCOUNTING_CLASS_DETAILS: BILL_GET_ACCOUNTING_CLASS_DETAILS_INPUT
  GET_API_SESSION_DETAILS: BILL_GET_API_SESSION_DETAILS_INPUT
  GET_ATTACHMENT_DETAILS: BILL_GET_ATTACHMENT_DETAILS_INPUT
  GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR: BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR_INPUT
  GET_A_SINGLE_MEMBER_FOR_A_BUDGET: BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET_INPUT
  GET_BANK_ACCOUNT_DETAILS: BILL_GET_BANK_ACCOUNT_DETAILS_INPUT
  GET_BILL_DETAILS: BILL_GET_BILL_DETAILS_INPUT
  GET_BUDGET_DETAILS: BILL_GET_BUDGET_DETAILS_INPUT
  GET_CARD_ACCOUNT_DETAILS: BILL_GET_CARD_ACCOUNT_DETAILS_INPUT
  GET_CARD_DETAILS: BILL_GET_CARD_DETAILS_INPUT
  GET_CARD_FUNDING_PURPOSE: BILL_GET_CARD_FUNDING_PURPOSE_INPUT
  GET_CHART_OF_ACCOUNTS_DETAILS: BILL_GET_CHART_OF_ACCOUNTS_DETAILS_INPUT
  GET_CHECK_IMAGE_DATA: BILL_GET_CHECK_IMAGE_DATA_INPUT
  GET_CURRENT_USER_DETAILS: BILL_GET_CURRENT_USER_DETAILS_INPUT
  GET_CUSTOMER_DETAILS: BILL_GET_CUSTOMER_DETAILS_INPUT
  GET_CUSTOMER_INVITATION_STATUS: BILL_GET_CUSTOMER_INVITATION_STATUS_INPUT
  GET_CUSTOM_FIELD_DETAILS: BILL_GET_CUSTOM_FIELD_DETAILS_INPUT
  GET_CUSTOM_FIELD_VALUE: BILL_GET_CUSTOM_FIELD_VALUE_INPUT
  GET_DEPARTMENT_DETAILS: BILL_GET_DEPARTMENT_DETAILS_INPUT
  GET_DOCUMENT_DETAILS: BILL_GET_DOCUMENT_DETAILS_INPUT
  GET_DOCUMENT_UPLOAD_STATUS: BILL_GET_DOCUMENT_UPLOAD_STATUS_INPUT
  GET_EMPLOYEE_DETAILS: BILL_GET_EMPLOYEE_DETAILS_INPUT
  GET_FUNDING_ACCOUNT_PERMISSIONS: BILL_GET_FUNDING_ACCOUNT_PERMISSIONS_INPUT
  GET_INTERNATIONAL_PAYMENTS_CONFIGURATION: BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION_INPUT
  GET_INVOICE_DETAILS: BILL_GET_INVOICE_DETAILS_INPUT
  GET_ITEM_DETAILS: BILL_GET_ITEM_DETAILS_INPUT
  GET_JOB_DETAILS: BILL_GET_JOB_DETAILS_INPUT
  GET_LIST_OF_ACCOUNTING_CLASSES: BILL_GET_LIST_OF_ACCOUNTING_CLASSES_INPUT
  GET_LIST_OF_AP_CARDS: BILL_GET_LIST_OF_AP_CARDS_INPUT
  GET_LIST_OF_BANK_ACCOUNTS: BILL_GET_LIST_OF_BANK_ACCOUNTS_INPUT
  GET_LIST_OF_BANK_ACCOUNT_USERS: BILL_GET_LIST_OF_BANK_ACCOUNT_USERS_INPUT
  GET_LIST_OF_BILLS: BILL_GET_LIST_OF_BILLS_INPUT
  GET_LIST_OF_BUDGETS: BILL_GET_LIST_OF_BUDGETS_INPUT
  GET_LIST_OF_CARDS: BILL_GET_LIST_OF_CARDS_INPUT
  GET_LIST_OF_CARD_ACCOUNTS: BILL_GET_LIST_OF_CARD_ACCOUNTS_INPUT
  GET_LIST_OF_CARD_ACCOUNT_USERS: BILL_GET_LIST_OF_CARD_ACCOUNT_USERS_INPUT
  GET_LIST_OF_CHART_OF_ACCOUNTS: BILL_GET_LIST_OF_CHART_OF_ACCOUNTS_INPUT
  GET_LIST_OF_CUSTOMERS: BILL_GET_LIST_OF_CUSTOMERS_INPUT
  GET_LIST_OF_CUSTOM_FIELDS: BILL_GET_LIST_OF_CUSTOM_FIELDS_INPUT
  GET_LIST_OF_DEPARTMENTS: BILL_GET_LIST_OF_DEPARTMENTS_INPUT
  GET_LIST_OF_DOCUMENTS: BILL_GET_LIST_OF_DOCUMENTS_INPUT
  GET_LIST_OF_EMPLOYEES: BILL_GET_LIST_OF_EMPLOYEES_INPUT
  GET_LIST_OF_INVOICES: BILL_GET_LIST_OF_INVOICES_INPUT
  GET_LIST_OF_INVOICE_ATTACHMENTS: BILL_GET_LIST_OF_INVOICE_ATTACHMENTS_INPUT
  GET_LIST_OF_ITEMS: BILL_GET_LIST_OF_ITEMS_INPUT
  GET_LIST_OF_JOBS: BILL_GET_LIST_OF_JOBS_INPUT
  GET_LIST_OF_LOCATIONS: BILL_GET_LIST_OF_LOCATIONS_INPUT
  GET_LIST_OF_MEMBERS_FOR_A_BUDGET: BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET_INPUT
  GET_LIST_OF_MFA_PHONE_NUMBERS: BILL_GET_LIST_OF_MFA_PHONE_NUMBERS_INPUT
  GET_LIST_OF_ORGANIZATIONS: BILL_GET_LIST_OF_ORGANIZATIONS_INPUT
  GET_LIST_OF_ORGANIZATION_INDUSTRIES: BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES_INPUT
  GET_LIST_OF_PAYMENTS: BILL_GET_LIST_OF_PAYMENTS_INPUT
  GET_LIST_OF_RECURRING_BILLS: BILL_GET_LIST_OF_RECURRING_BILLS_INPUT
  GET_LIST_OF_REIMBURSEMENTS: BILL_GET_LIST_OF_REIMBURSEMENTS_INPUT
  GET_LIST_OF_TRANSACTIONS: BILL_GET_LIST_OF_TRANSACTIONS_INPUT
  GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD: BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD_INPUT
  GET_LIST_OF_VENDORS: BILL_GET_LIST_OF_VENDORS_INPUT
  GET_LIST_OF_VENDOR_ATTACHMENTS: BILL_GET_LIST_OF_VENDOR_ATTACHMENTS_INPUT
  GET_LIST_OF_VENDOR_PAYMENT_OPTIONS: BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS_INPUT
  GET_LOCATION_DETAILS: BILL_GET_LOCATION_DETAILS_INPUT
  GET_ORGANIZATION_DETAILS: BILL_GET_ORGANIZATION_DETAILS_INPUT
  GET_ORGANIZATION_PRICE_PLAN_DETAILS: BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS_INPUT
  GET_PAN_JWT: BILL_GET_PAN_JWT_INPUT
  GET_PAYMENT_DETAILS: BILL_GET_PAYMENT_DETAILS_INPUT
  GET_PHONE_STATUS_FOR_RISK_VERIFICATION: BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION_INPUT
  GET_RECURRING_BILL_DETAILS: BILL_GET_RECURRING_BILL_DETAILS_INPUT
  GET_REIMBURSEMENT_DETAILS: BILL_GET_REIMBURSEMENT_DETAILS_INPUT
  GET_RISK_VERIFICATION_DETAILS: BILL_GET_RISK_VERIFICATION_DETAILS_INPUT
  GET_TRANSACTION_CUSTOM_FIELD_DETAILS: BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS_INPUT
  GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS: BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS_INPUT
  GET_TRANSACTION_DETAILS: BILL_GET_TRANSACTION_DETAILS_INPUT
  GET_VENDOR_BANK_ACCOUNT_DETAILS: BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS_INPUT
  GET_VENDOR_CONFIGURATION: BILL_GET_VENDOR_CONFIGURATION_INPUT
  GET_VENDOR_DETAILS: BILL_GET_VENDOR_DETAILS_INPUT
  GET_VENDOR_INVITATION_STATUS: BILL_GET_VENDOR_INVITATION_STATUS_INPUT
  INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION: BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION_INPUT
  INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK: BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK_INPUT
  INVITE_A_VENDOR_IN_THE_BILL_NETWORK: BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK_INPUT
  MFA_STEP_UP_FOR_API_SESSION: BILL_MFA_STEP_UP_FOR_API_SESSION_INPUT
  NOMINATE_A_BANK_ACCOUNT_USER: BILL_NOMINATE_A_BANK_ACCOUNT_USER_INPUT
  RECORD_AR_PAYMENT: BILL_RECORD_AR_PAYMENT_INPUT
  REPLACE_AN_INVOICE: BILL_REPLACE_AN_INVOICE_INPUT
  REPLACE_A_BILL: BILL_REPLACE_A_BILL_INPUT
  REPLACE_A_RECURRING_BILL: BILL_REPLACE_A_RECURRING_BILL_INPUT
  RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS: BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS_INPUT
  RESTORE_AN_ARCHIVED_BILL: BILL_RESTORE_AN_ARCHIVED_BILL_INPUT
  RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS: BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS_INPUT
  RESTORE_AN_ARCHIVED_CUSTOMER: BILL_RESTORE_AN_ARCHIVED_CUSTOMER_INPUT
  RESTORE_AN_ARCHIVED_DEPARTMENT: BILL_RESTORE_AN_ARCHIVED_DEPARTMENT_INPUT
  RESTORE_AN_ARCHIVED_EMPLOYEE: BILL_RESTORE_AN_ARCHIVED_EMPLOYEE_INPUT
  RESTORE_AN_ARCHIVED_INVOICE: BILL_RESTORE_AN_ARCHIVED_INVOICE_INPUT
  RESTORE_AN_ARCHIVED_ITEM: BILL_RESTORE_AN_ARCHIVED_ITEM_INPUT
  RESTORE_AN_ARCHIVED_JOB: BILL_RESTORE_AN_ARCHIVED_JOB_INPUT
  RESTORE_AN_ARCHIVED_LOCATION: BILL_RESTORE_AN_ARCHIVED_LOCATION_INPUT
  RESTORE_AN_ARCHIVED_RECURRING_BILL: BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL_INPUT
  RESTORE_AN_ARCHIVED_VENDOR: BILL_RESTORE_AN_ARCHIVED_VENDOR_INPUT
  RESTORE_MULTIPLE_ACCOUNTING_CLASSES: BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES_INPUT
  RESTORE_MULTIPLE_CHART_OF_ACCOUNTS: BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS_INPUT
  RESTORE_MULTIPLE_DEPARTMENTS: BILL_RESTORE_MULTIPLE_DEPARTMENTS_INPUT
  RESTORE_MULTIPLE_EMPLOYEES: BILL_RESTORE_MULTIPLE_EMPLOYEES_INPUT
  RESTORE_MULTIPLE_ITEMS: BILL_RESTORE_MULTIPLE_ITEMS_INPUT
  RESTORE_MULTIPLE_JOBS: BILL_RESTORE_MULTIPLE_JOBS_INPUT
  RESTORE_MULTIPLE_LOCATIONS: BILL_RESTORE_MULTIPLE_LOCATIONS_INPUT
  RETRIEVE_CUSTOMER_ATTACHMENTS: BILL_RETRIEVE_CUSTOMER_ATTACHMENTS_INPUT
  SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS: BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS_INPUT
  SEND_AN_INVOICE: BILL_SEND_AN_INVOICE_INPUT
  UPDATE_AN_ACCOUNTING_CLASS: BILL_UPDATE_AN_ACCOUNTING_CLASS_INPUT
  UPDATE_AN_EMPLOYEE: BILL_UPDATE_AN_EMPLOYEE_INPUT
  UPDATE_AN_INVOICE: BILL_UPDATE_AN_INVOICE_INPUT
  UPDATE_AN_ITEM: BILL_UPDATE_AN_ITEM_INPUT
  UPDATE_AN_ORGANIZATION: BILL_UPDATE_AN_ORGANIZATION_INPUT
  UPDATE_A_BANK_ACCOUNT: BILL_UPDATE_A_BANK_ACCOUNT_INPUT
  UPDATE_A_BILL: BILL_UPDATE_A_BILL_INPUT
  UPDATE_A_BUDGET: BILL_UPDATE_A_BUDGET_INPUT
  UPDATE_A_CHART_OF_ACCOUNTS: BILL_UPDATE_A_CHART_OF_ACCOUNTS_INPUT
  UPDATE_A_CUSTOMER: BILL_UPDATE_A_CUSTOMER_INPUT
  UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION: BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION_INPUT
  UPDATE_A_DEPARTMENT: BILL_UPDATE_A_DEPARTMENT_INPUT
  UPDATE_A_JOB: BILL_UPDATE_A_JOB_INPUT
  UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET: BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET_INPUT
  UPDATE_A_LOCATION: BILL_UPDATE_A_LOCATION_INPUT
  UPDATE_A_RECURRING_BILL: BILL_UPDATE_A_RECURRING_BILL_INPUT
  UPDATE_A_REIMBURSEMENT: BILL_UPDATE_A_REIMBURSEMENT_INPUT
  UPDATE_A_VENDOR: BILL_UPDATE_A_VENDOR_INPUT
  UPDATE_A_VENDOR_CARD: BILL_UPDATE_A_VENDOR_CARD_INPUT
  UPDATE_BUDGET_MEMBER_FUNDS: BILL_UPDATE_BUDGET_MEMBER_FUNDS_INPUT
  UPDATE_CUSTOM_FIELD_DETAILS: BILL_UPDATE_CUSTOM_FIELD_DETAILS_INPUT
  UPDATE_TRANSACTION: BILL_UPDATE_TRANSACTION_INPUT
  UPLOAD_BILL_DOCUMENT: BILL_UPLOAD_BILL_DOCUMENT_INPUT
  UPLOAD_CUSTOMER_ATTACHMENT: BILL_UPLOAD_CUSTOMER_ATTACHMENT_INPUT
  UPLOAD_INVOICE_ATTACHMENT: BILL_UPLOAD_INVOICE_ATTACHMENT_INPUT
  UPLOAD_VENDOR_ATTACHMENT: BILL_UPLOAD_VENDOR_ATTACHMENT_INPUT
  VALIDATE_MFA_CHALLENGE: BILL_VALIDATE_MFA_CHALLENGE_INPUT
  VALIDATE_PHONE_FOR_MFA_SETUP: BILL_VALIDATE_PHONE_FOR_MFA_SETUP_INPUT
  VERIFY_A_BANK_ACCOUNT: BILL_VERIFY_A_BANK_ACCOUNT_INPUT
  VOID_A_PAYMENT: BILL_VOID_A_PAYMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BILL".
 */
export type BILL_TOOL_OUTPUTS = {
  ACCEPT_NETWORK_INVITATION: BILL_ACCEPT_NETWORK_INVITATION_OUTPUT
  ADD_PHONE_FOR_MFA_SETUP: BILL_ADD_PHONE_FOR_MFA_SETUP_OUTPUT
  ADD_PHONE_FOR_RISK_VERIFICATION: BILL_ADD_PHONE_FOR_RISK_VERIFICATION_OUTPUT
  API_LOGIN: BILL_API_LOGIN_OUTPUT
  API_LOGIN_AS_USER: BILL_API_LOGIN_AS_USER_OUTPUT
  API_LOGOUT: BILL_API_LOGOUT_OUTPUT
  API_PARTNER_LOGIN: BILL_API_PARTNER_LOGIN_OUTPUT
  APPROVE_OR_DENY_A_REIMBURSEMENT: BILL_APPROVE_OR_DENY_A_REIMBURSEMENT_OUTPUT
  ARCHIVE_AN_ACCOUNTING_CLASS: BILL_ARCHIVE_AN_ACCOUNTING_CLASS_OUTPUT
  ARCHIVE_AN_EMPLOYEE: BILL_ARCHIVE_AN_EMPLOYEE_OUTPUT
  ARCHIVE_AN_INVOICE: BILL_ARCHIVE_AN_INVOICE_OUTPUT
  ARCHIVE_AN_ITEM: BILL_ARCHIVE_AN_ITEM_OUTPUT
  ARCHIVE_A_BANK_ACCOUNT: BILL_ARCHIVE_A_BANK_ACCOUNT_OUTPUT
  ARCHIVE_A_BANK_ACCOUNT_USER: BILL_ARCHIVE_A_BANK_ACCOUNT_USER_OUTPUT
  ARCHIVE_A_BILL: BILL_ARCHIVE_A_BILL_OUTPUT
  ARCHIVE_A_CHART_OF_ACCOUNTS: BILL_ARCHIVE_A_CHART_OF_ACCOUNTS_OUTPUT
  ARCHIVE_A_CUSTOMER: BILL_ARCHIVE_A_CUSTOMER_OUTPUT
  ARCHIVE_A_DEPARTMENT: BILL_ARCHIVE_A_DEPARTMENT_OUTPUT
  ARCHIVE_A_JOB: BILL_ARCHIVE_A_JOB_OUTPUT
  ARCHIVE_A_LOCATION: BILL_ARCHIVE_A_LOCATION_OUTPUT
  ARCHIVE_A_RECURRING_BILL: BILL_ARCHIVE_A_RECURRING_BILL_OUTPUT
  ARCHIVE_A_VENDOR: BILL_ARCHIVE_A_VENDOR_OUTPUT
  ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES: BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES_OUTPUT
  ARCHIVE_MULTIPLE_DEPARTMENTS: BILL_ARCHIVE_MULTIPLE_DEPARTMENTS_OUTPUT
  ARCHIVE_MULTIPLE_EMPLOYEES: BILL_ARCHIVE_MULTIPLE_EMPLOYEES_OUTPUT
  ARCHIVE_MULTIPLE_ITEMS: BILL_ARCHIVE_MULTIPLE_ITEMS_OUTPUT
  ARCHIVE_MULTIPLE_JOBS: BILL_ARCHIVE_MULTIPLE_JOBS_OUTPUT
  ARCHIVE_MULTIPLE_LOCATIONS: BILL_ARCHIVE_MULTIPLE_LOCATIONS_OUTPUT
  ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS: BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS_OUTPUT
  BILL_ARCHIVE_A_USER: BILL_BILL_ARCHIVE_A_USER_OUTPUT
  BILL_BILL_CREATE_A_USER: BILL_BILL_BILL_CREATE_A_USER_OUTPUT
  BILL_BILL_GET_LIST_OF_USERS: BILL_BILL_BILL_GET_LIST_OF_USERS_OUTPUT
  BILL_BILL_GET_USER_DETAILS: BILL_BILL_BILL_GET_USER_DETAILS_OUTPUT
  BILL_BILL_UPDATE_A_USER: BILL_BILL_BILL_UPDATE_A_USER_OUTPUT
  BILL_GET_LIST_OF_USER_ROLES: BILL_BILL_GET_LIST_OF_USER_ROLES_OUTPUT
  BILL_GET_USER_ROLE_DETAILS: BILL_BILL_GET_USER_ROLE_DETAILS_OUTPUT
  BILL_RESTORE_AN_ARCHIVED_USER: BILL_BILL_RESTORE_AN_ARCHIVED_USER_OUTPUT
  CANCEL_A_PAYMENT: BILL_CANCEL_A_PAYMENT_OUTPUT
  CHECK_APP_HEALTH: BILL_CHECK_APP_HEALTH_OUTPUT
  CREATE_AN_ACCOUNTING_CLASS: BILL_CREATE_AN_ACCOUNTING_CLASS_OUTPUT
  CREATE_AN_EMPLOYEE: BILL_CREATE_AN_EMPLOYEE_OUTPUT
  CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT: BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT_OUTPUT
  CREATE_AN_INVOICE: BILL_CREATE_AN_INVOICE_OUTPUT
  CREATE_AN_ITEM: BILL_CREATE_AN_ITEM_OUTPUT
  CREATE_AN_ORGANIZATION: BILL_CREATE_AN_ORGANIZATION_OUTPUT
  CREATE_A_BANK_ACCOUNT: BILL_CREATE_A_BANK_ACCOUNT_OUTPUT
  CREATE_A_BILL: BILL_CREATE_A_BILL_OUTPUT
  CREATE_A_BUDGET: BILL_CREATE_A_BUDGET_OUTPUT
  CREATE_A_BULK_PAYMENT: BILL_CREATE_A_BULK_PAYMENT_OUTPUT
  CREATE_A_CHART_OF_ACCOUNTS: BILL_CREATE_A_CHART_OF_ACCOUNTS_OUTPUT
  CREATE_A_CUSTOMER: BILL_CREATE_A_CUSTOMER_OUTPUT
  CREATE_A_DEPARTMENT: BILL_CREATE_A_DEPARTMENT_OUTPUT
  CREATE_A_JOB: BILL_CREATE_A_JOB_OUTPUT
  CREATE_A_LOCATION: BILL_CREATE_A_LOCATION_OUTPUT
  CREATE_A_PAYMENT: BILL_CREATE_A_PAYMENT_OUTPUT
  CREATE_A_RECURRING_BILL: BILL_CREATE_A_RECURRING_BILL_OUTPUT
  CREATE_A_REIMBURSEMENT: BILL_CREATE_A_REIMBURSEMENT_OUTPUT
  CREATE_A_VENDOR: BILL_CREATE_A_VENDOR_OUTPUT
  CREATE_A_VENDOR_BANK_ACCOUNT: BILL_CREATE_A_VENDOR_BANK_ACCOUNT_OUTPUT
  CREATE_A_VENDOR_CARD: BILL_CREATE_A_VENDOR_CARD_OUTPUT
  CREATE_CUSTOM_FIELD: BILL_CREATE_CUSTOM_FIELD_OUTPUT
  CREATE_CUSTOM_FIELD_VALUES: BILL_CREATE_CUSTOM_FIELD_VALUES_OUTPUT
  DELETE_A_BUDGET: BILL_DELETE_A_BUDGET_OUTPUT
  DELETE_A_CARD: BILL_DELETE_A_CARD_OUTPUT
  DELETE_A_CUSTOM_FIELD: BILL_DELETE_A_CUSTOM_FIELD_OUTPUT
  DELETE_A_MEMBER_FROM_A_BUDGET: BILL_DELETE_A_MEMBER_FROM_A_BUDGET_OUTPUT
  DELETE_A_REIMBURSEMENT: BILL_DELETE_A_REIMBURSEMENT_OUTPUT
  DELETE_A_USER: BILL_DELETE_A_USER_OUTPUT
  DELETE_A_VENDOR_BANK_ACCOUNT: BILL_DELETE_A_VENDOR_BANK_ACCOUNT_OUTPUT
  DELETE_CUSTOMER_CONNECTION: BILL_DELETE_CUSTOMER_CONNECTION_OUTPUT
  DELETE_CUSTOM_FIELD_VALUES: BILL_DELETE_CUSTOM_FIELD_VALUES_OUTPUT
  DELETE_VENDOR_CONNECTION: BILL_DELETE_VENDOR_CONNECTION_OUTPUT
  GENERATE_MFA_CHALLENGE: BILL_GENERATE_MFA_CHALLENGE_OUTPUT
  GET_ACCOUNTING_CLASS_DETAILS: BILL_GET_ACCOUNTING_CLASS_DETAILS_OUTPUT
  GET_API_SESSION_DETAILS: BILL_GET_API_SESSION_DETAILS_OUTPUT
  GET_ATTACHMENT_DETAILS: BILL_GET_ATTACHMENT_DETAILS_OUTPUT
  GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR: BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR_OUTPUT
  GET_A_SINGLE_MEMBER_FOR_A_BUDGET: BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET_OUTPUT
  GET_BANK_ACCOUNT_DETAILS: BILL_GET_BANK_ACCOUNT_DETAILS_OUTPUT
  GET_BILL_DETAILS: BILL_GET_BILL_DETAILS_OUTPUT
  GET_BUDGET_DETAILS: BILL_GET_BUDGET_DETAILS_OUTPUT
  GET_CARD_ACCOUNT_DETAILS: BILL_GET_CARD_ACCOUNT_DETAILS_OUTPUT
  GET_CARD_DETAILS: BILL_GET_CARD_DETAILS_OUTPUT
  GET_CARD_FUNDING_PURPOSE: BILL_GET_CARD_FUNDING_PURPOSE_OUTPUT
  GET_CHART_OF_ACCOUNTS_DETAILS: BILL_GET_CHART_OF_ACCOUNTS_DETAILS_OUTPUT
  GET_CHECK_IMAGE_DATA: BILL_GET_CHECK_IMAGE_DATA_OUTPUT
  GET_CURRENT_USER_DETAILS: BILL_GET_CURRENT_USER_DETAILS_OUTPUT
  GET_CUSTOMER_DETAILS: BILL_GET_CUSTOMER_DETAILS_OUTPUT
  GET_CUSTOMER_INVITATION_STATUS: BILL_GET_CUSTOMER_INVITATION_STATUS_OUTPUT
  GET_CUSTOM_FIELD_DETAILS: BILL_GET_CUSTOM_FIELD_DETAILS_OUTPUT
  GET_CUSTOM_FIELD_VALUE: BILL_GET_CUSTOM_FIELD_VALUE_OUTPUT
  GET_DEPARTMENT_DETAILS: BILL_GET_DEPARTMENT_DETAILS_OUTPUT
  GET_DOCUMENT_DETAILS: BILL_GET_DOCUMENT_DETAILS_OUTPUT
  GET_DOCUMENT_UPLOAD_STATUS: BILL_GET_DOCUMENT_UPLOAD_STATUS_OUTPUT
  GET_EMPLOYEE_DETAILS: BILL_GET_EMPLOYEE_DETAILS_OUTPUT
  GET_FUNDING_ACCOUNT_PERMISSIONS: BILL_GET_FUNDING_ACCOUNT_PERMISSIONS_OUTPUT
  GET_INTERNATIONAL_PAYMENTS_CONFIGURATION: BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION_OUTPUT
  GET_INVOICE_DETAILS: BILL_GET_INVOICE_DETAILS_OUTPUT
  GET_ITEM_DETAILS: BILL_GET_ITEM_DETAILS_OUTPUT
  GET_JOB_DETAILS: BILL_GET_JOB_DETAILS_OUTPUT
  GET_LIST_OF_ACCOUNTING_CLASSES: BILL_GET_LIST_OF_ACCOUNTING_CLASSES_OUTPUT
  GET_LIST_OF_AP_CARDS: BILL_GET_LIST_OF_AP_CARDS_OUTPUT
  GET_LIST_OF_BANK_ACCOUNTS: BILL_GET_LIST_OF_BANK_ACCOUNTS_OUTPUT
  GET_LIST_OF_BANK_ACCOUNT_USERS: BILL_GET_LIST_OF_BANK_ACCOUNT_USERS_OUTPUT
  GET_LIST_OF_BILLS: BILL_GET_LIST_OF_BILLS_OUTPUT
  GET_LIST_OF_BUDGETS: BILL_GET_LIST_OF_BUDGETS_OUTPUT
  GET_LIST_OF_CARDS: BILL_GET_LIST_OF_CARDS_OUTPUT
  GET_LIST_OF_CARD_ACCOUNTS: BILL_GET_LIST_OF_CARD_ACCOUNTS_OUTPUT
  GET_LIST_OF_CARD_ACCOUNT_USERS: BILL_GET_LIST_OF_CARD_ACCOUNT_USERS_OUTPUT
  GET_LIST_OF_CHART_OF_ACCOUNTS: BILL_GET_LIST_OF_CHART_OF_ACCOUNTS_OUTPUT
  GET_LIST_OF_CUSTOMERS: BILL_GET_LIST_OF_CUSTOMERS_OUTPUT
  GET_LIST_OF_CUSTOM_FIELDS: BILL_GET_LIST_OF_CUSTOM_FIELDS_OUTPUT
  GET_LIST_OF_DEPARTMENTS: BILL_GET_LIST_OF_DEPARTMENTS_OUTPUT
  GET_LIST_OF_DOCUMENTS: BILL_GET_LIST_OF_DOCUMENTS_OUTPUT
  GET_LIST_OF_EMPLOYEES: BILL_GET_LIST_OF_EMPLOYEES_OUTPUT
  GET_LIST_OF_INVOICES: BILL_GET_LIST_OF_INVOICES_OUTPUT
  GET_LIST_OF_INVOICE_ATTACHMENTS: BILL_GET_LIST_OF_INVOICE_ATTACHMENTS_OUTPUT
  GET_LIST_OF_ITEMS: BILL_GET_LIST_OF_ITEMS_OUTPUT
  GET_LIST_OF_JOBS: BILL_GET_LIST_OF_JOBS_OUTPUT
  GET_LIST_OF_LOCATIONS: BILL_GET_LIST_OF_LOCATIONS_OUTPUT
  GET_LIST_OF_MEMBERS_FOR_A_BUDGET: BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET_OUTPUT
  GET_LIST_OF_MFA_PHONE_NUMBERS: BILL_GET_LIST_OF_MFA_PHONE_NUMBERS_OUTPUT
  GET_LIST_OF_ORGANIZATIONS: BILL_GET_LIST_OF_ORGANIZATIONS_OUTPUT
  GET_LIST_OF_ORGANIZATION_INDUSTRIES: BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES_OUTPUT
  GET_LIST_OF_PAYMENTS: BILL_GET_LIST_OF_PAYMENTS_OUTPUT
  GET_LIST_OF_RECURRING_BILLS: BILL_GET_LIST_OF_RECURRING_BILLS_OUTPUT
  GET_LIST_OF_REIMBURSEMENTS: BILL_GET_LIST_OF_REIMBURSEMENTS_OUTPUT
  GET_LIST_OF_TRANSACTIONS: BILL_GET_LIST_OF_TRANSACTIONS_OUTPUT
  GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD: BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD_OUTPUT
  GET_LIST_OF_VENDORS: BILL_GET_LIST_OF_VENDORS_OUTPUT
  GET_LIST_OF_VENDOR_ATTACHMENTS: BILL_GET_LIST_OF_VENDOR_ATTACHMENTS_OUTPUT
  GET_LIST_OF_VENDOR_PAYMENT_OPTIONS: BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS_OUTPUT
  GET_LOCATION_DETAILS: BILL_GET_LOCATION_DETAILS_OUTPUT
  GET_ORGANIZATION_DETAILS: BILL_GET_ORGANIZATION_DETAILS_OUTPUT
  GET_ORGANIZATION_PRICE_PLAN_DETAILS: BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS_OUTPUT
  GET_PAN_JWT: BILL_GET_PAN_JWT_OUTPUT
  GET_PAYMENT_DETAILS: BILL_GET_PAYMENT_DETAILS_OUTPUT
  GET_PHONE_STATUS_FOR_RISK_VERIFICATION: BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION_OUTPUT
  GET_RECURRING_BILL_DETAILS: BILL_GET_RECURRING_BILL_DETAILS_OUTPUT
  GET_REIMBURSEMENT_DETAILS: BILL_GET_REIMBURSEMENT_DETAILS_OUTPUT
  GET_RISK_VERIFICATION_DETAILS: BILL_GET_RISK_VERIFICATION_DETAILS_OUTPUT
  GET_TRANSACTION_CUSTOM_FIELD_DETAILS: BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS_OUTPUT
  GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS: BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS_OUTPUT
  GET_TRANSACTION_DETAILS: BILL_GET_TRANSACTION_DETAILS_OUTPUT
  GET_VENDOR_BANK_ACCOUNT_DETAILS: BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS_OUTPUT
  GET_VENDOR_CONFIGURATION: BILL_GET_VENDOR_CONFIGURATION_OUTPUT
  GET_VENDOR_DETAILS: BILL_GET_VENDOR_DETAILS_OUTPUT
  GET_VENDOR_INVITATION_STATUS: BILL_GET_VENDOR_INVITATION_STATUS_OUTPUT
  INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION: BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION_OUTPUT
  INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK: BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK_OUTPUT
  INVITE_A_VENDOR_IN_THE_BILL_NETWORK: BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK_OUTPUT
  MFA_STEP_UP_FOR_API_SESSION: BILL_MFA_STEP_UP_FOR_API_SESSION_OUTPUT
  NOMINATE_A_BANK_ACCOUNT_USER: BILL_NOMINATE_A_BANK_ACCOUNT_USER_OUTPUT
  RECORD_AR_PAYMENT: BILL_RECORD_AR_PAYMENT_OUTPUT
  REPLACE_AN_INVOICE: BILL_REPLACE_AN_INVOICE_OUTPUT
  REPLACE_A_BILL: BILL_REPLACE_A_BILL_OUTPUT
  REPLACE_A_RECURRING_BILL: BILL_REPLACE_A_RECURRING_BILL_OUTPUT
  RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS: BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS_OUTPUT
  RESTORE_AN_ARCHIVED_BILL: BILL_RESTORE_AN_ARCHIVED_BILL_OUTPUT
  RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS: BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS_OUTPUT
  RESTORE_AN_ARCHIVED_CUSTOMER: BILL_RESTORE_AN_ARCHIVED_CUSTOMER_OUTPUT
  RESTORE_AN_ARCHIVED_DEPARTMENT: BILL_RESTORE_AN_ARCHIVED_DEPARTMENT_OUTPUT
  RESTORE_AN_ARCHIVED_EMPLOYEE: BILL_RESTORE_AN_ARCHIVED_EMPLOYEE_OUTPUT
  RESTORE_AN_ARCHIVED_INVOICE: BILL_RESTORE_AN_ARCHIVED_INVOICE_OUTPUT
  RESTORE_AN_ARCHIVED_ITEM: BILL_RESTORE_AN_ARCHIVED_ITEM_OUTPUT
  RESTORE_AN_ARCHIVED_JOB: BILL_RESTORE_AN_ARCHIVED_JOB_OUTPUT
  RESTORE_AN_ARCHIVED_LOCATION: BILL_RESTORE_AN_ARCHIVED_LOCATION_OUTPUT
  RESTORE_AN_ARCHIVED_RECURRING_BILL: BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL_OUTPUT
  RESTORE_AN_ARCHIVED_VENDOR: BILL_RESTORE_AN_ARCHIVED_VENDOR_OUTPUT
  RESTORE_MULTIPLE_ACCOUNTING_CLASSES: BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES_OUTPUT
  RESTORE_MULTIPLE_CHART_OF_ACCOUNTS: BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS_OUTPUT
  RESTORE_MULTIPLE_DEPARTMENTS: BILL_RESTORE_MULTIPLE_DEPARTMENTS_OUTPUT
  RESTORE_MULTIPLE_EMPLOYEES: BILL_RESTORE_MULTIPLE_EMPLOYEES_OUTPUT
  RESTORE_MULTIPLE_ITEMS: BILL_RESTORE_MULTIPLE_ITEMS_OUTPUT
  RESTORE_MULTIPLE_JOBS: BILL_RESTORE_MULTIPLE_JOBS_OUTPUT
  RESTORE_MULTIPLE_LOCATIONS: BILL_RESTORE_MULTIPLE_LOCATIONS_OUTPUT
  RETRIEVE_CUSTOMER_ATTACHMENTS: BILL_RETRIEVE_CUSTOMER_ATTACHMENTS_OUTPUT
  SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS: BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS_OUTPUT
  SEND_AN_INVOICE: BILL_SEND_AN_INVOICE_OUTPUT
  UPDATE_AN_ACCOUNTING_CLASS: BILL_UPDATE_AN_ACCOUNTING_CLASS_OUTPUT
  UPDATE_AN_EMPLOYEE: BILL_UPDATE_AN_EMPLOYEE_OUTPUT
  UPDATE_AN_INVOICE: BILL_UPDATE_AN_INVOICE_OUTPUT
  UPDATE_AN_ITEM: BILL_UPDATE_AN_ITEM_OUTPUT
  UPDATE_AN_ORGANIZATION: BILL_UPDATE_AN_ORGANIZATION_OUTPUT
  UPDATE_A_BANK_ACCOUNT: BILL_UPDATE_A_BANK_ACCOUNT_OUTPUT
  UPDATE_A_BILL: BILL_UPDATE_A_BILL_OUTPUT
  UPDATE_A_BUDGET: BILL_UPDATE_A_BUDGET_OUTPUT
  UPDATE_A_CHART_OF_ACCOUNTS: BILL_UPDATE_A_CHART_OF_ACCOUNTS_OUTPUT
  UPDATE_A_CUSTOMER: BILL_UPDATE_A_CUSTOMER_OUTPUT
  UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION: BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION_OUTPUT
  UPDATE_A_DEPARTMENT: BILL_UPDATE_A_DEPARTMENT_OUTPUT
  UPDATE_A_JOB: BILL_UPDATE_A_JOB_OUTPUT
  UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET: BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET_OUTPUT
  UPDATE_A_LOCATION: BILL_UPDATE_A_LOCATION_OUTPUT
  UPDATE_A_RECURRING_BILL: BILL_UPDATE_A_RECURRING_BILL_OUTPUT
  UPDATE_A_REIMBURSEMENT: BILL_UPDATE_A_REIMBURSEMENT_OUTPUT
  UPDATE_A_VENDOR: BILL_UPDATE_A_VENDOR_OUTPUT
  UPDATE_A_VENDOR_CARD: BILL_UPDATE_A_VENDOR_CARD_OUTPUT
  UPDATE_BUDGET_MEMBER_FUNDS: BILL_UPDATE_BUDGET_MEMBER_FUNDS_OUTPUT
  UPDATE_CUSTOM_FIELD_DETAILS: BILL_UPDATE_CUSTOM_FIELD_DETAILS_OUTPUT
  UPDATE_TRANSACTION: BILL_UPDATE_TRANSACTION_OUTPUT
  UPLOAD_BILL_DOCUMENT: BILL_UPLOAD_BILL_DOCUMENT_OUTPUT
  UPLOAD_CUSTOMER_ATTACHMENT: BILL_UPLOAD_CUSTOMER_ATTACHMENT_OUTPUT
  UPLOAD_INVOICE_ATTACHMENT: BILL_UPLOAD_INVOICE_ATTACHMENT_OUTPUT
  UPLOAD_VENDOR_ATTACHMENT: BILL_UPLOAD_VENDOR_ATTACHMENT_OUTPUT
  VALIDATE_MFA_CHALLENGE: BILL_VALIDATE_MFA_CHALLENGE_OUTPUT
  VALIDATE_PHONE_FOR_MFA_SETUP: BILL_VALIDATE_PHONE_FOR_MFA_SETUP_OUTPUT
  VERIFY_A_BANK_ACCOUNT: BILL_VERIFY_A_BANK_ACCOUNT_OUTPUT
  VOID_A_PAYMENT: BILL_VOID_A_PAYMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BILL toolkit.
 */
export const BILL = {
  slug: "bill",
  tools: {
    /**
     * Accept a network invitation that was sent to the organization by a vendor or customer. when the invitation is accepted, the organization is connected with the vendor or customer in the bill network. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    ACCEPT_NETWORK_INVITATION: "BILL_ACCEPT_NETWORK_INVITATION",
    /**
     * Sets up multi-factor authentication (mfa) for a user account in the bill api. this endpoint allows users to configure their preferred method of receiving authentication tokens, enhancing account security. it should be used when a user wants to enable mfa or update their existing mfa settings. the setup process requires providing a phone number, selecting between voice calls or text messages for token delivery, and specifying if it's a primary or backup device. this endpoint is crucial for implementing a robust security layer but does not handle the actual authentication process or token validation.
     */
    ADD_PHONE_FOR_MFA_SETUP: "BILL_ADD_PHONE_FOR_MFA_SETUP",
    /**
     * Add a phone number for the currently signed-in user. bill requires the signed-in user to have a linked phone number for initiating risk verification for the organization. you can check whether a phone number has been added for the user with `get /v3/risk-verifications/phone`. after you add a phone number with this endpoint, you can initiate risk verification for the organization with `post /v3/risk-verifications`.
     */
    ADD_PHONE_FOR_RISK_VERIFICATION: "BILL_ADD_PHONE_FOR_RISK_VERIFICATION",
    /**
     * Sign in to your bill developer account. in the response, your api session is created and a bill-generated `sessionid` is available. use the `sessionid` in all subsequent api calls to confirm that you are in a signed-in session. to create an mfa-trusted api session, set `remembermeid` and `device` in addition to the required fields. see [mfa setup](ref:setup) for information about the bill mfa process. you can sign out with `post /v3/logout`. if your api session is inactive for 35 minutes, the session expires and you are automatically signed out. see [api partner login](ref:partnerlogin) for information about the additional permissions you get with the api partner login. **note**: this section is about authentication for working with the bill v3 api. see [authentication with spend & expense api token](doc:authentication-with-api-token) for information about authentication for the spend & expense api endpoints.
     */
    API_LOGIN: "BILL_API_LOGIN",
    /**
     * The loginasuser endpoint allows partners to authenticate and log in as a specific user within a designated organization in the bill system. this powerful feature enables partners to access and interact with an organization's account on behalf of a particular user, facilitating seamless integration and support. it should be used when a partner needs to perform actions or access information as if they were the specified user within the organization. this endpoint requires careful use and proper authorization, as it effectively allows impersonation of a user. while it supports mfa for enhanced security, partners should ensure they have explicit permission from the organization and user before utilizing this functionality.
     */
    API_LOGIN_AS_USER: "BILL_API_LOGIN_AS_USER",
    /**
     * Sign out of your bill developer account. in response, the current `sessionid` expires and your api session is terminated. you will be required to sign in again with `/v3/login` before you can make another api call.
     */
    API_LOGOUT: "BILL_API_LOGOUT",
    /**
     * Authenticates a partner user and initiates a session with the bill api. this endpoint should be used at the beginning of any integration session to obtain necessary authentication tokens or session identifiers. it verifies the partner's credentials and grants access to other api endpoints. the login process is a prerequisite for accessing any protected resources or performing operations within the bill system. note that this endpoint does not provide any financial or account information directly; it only establishes an authenticated session.
     */
    API_PARTNER_LOGIN: "BILL_API_PARTNER_LOGIN",
    /**
     * Approve or deny a reimbursement.
     */
    APPROVE_OR_DENY_A_REIMBURSEMENT: "BILL_APPROVE_OR_DENY_A_REIMBURSEMENT",
    /**
     * Archive an existing accounting class. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_AN_ACCOUNTING_CLASS: "BILL_ARCHIVE_AN_ACCOUNTING_CLASS",
    /**
     * Archive an existing employee. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_AN_EMPLOYEE: "BILL_ARCHIVE_AN_EMPLOYEE",
    /**
     * Archive an existing invoice. in the response, the `archived` field is set as `true`. you can restore an archived invoice with `post /v3/invoices/{invoiceid}/restore`. there is no change when you archive an archived invoice.
     */
    ARCHIVE_AN_INVOICE: "BILL_ARCHIVE_AN_INVOICE",
    /**
     * Archive an existing item. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_AN_ITEM: "BILL_ARCHIVE_AN_ITEM",
    /**
     * Archive an existing bank account. in the response, the `archived` field is set as `true`. archiving a bank account at bill has a set of requirements. * **bank account status**: the bank account `status` must be set as `verified`. you can verify the bank account with `post /v3/funding-accounts/banks/{bankaccountid}/verify`. * **bank account user status**: the bank account user `verificationstatus` must be set as `verified`. to begin the verification process, nominate a bank account user with `post /v3/funding-accounts/banks/users`.
     */
    ARCHIVE_A_BANK_ACCOUNT: "BILL_ARCHIVE_A_BANK_ACCOUNT",
    /**
     * Archive an existing bank account user. in the response, the `archived` field is set as `true` and the bank account user `verificationstatus` is set as `unverified`.
     */
    ARCHIVE_A_BANK_ACCOUNT_USER: "BILL_ARCHIVE_A_BANK_ACCOUNT_USER",
    /**
     * Archive an existing bill. in the response, the `archived` field is set as `true`. you can restore an archived bill with `post /v3/bills/{billid}/restore`. there is no change when you archive an archived bill.
     */
    ARCHIVE_A_BILL: "BILL_ARCHIVE_A_BILL",
    /**
     * Archive an existing chart of accounts. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_A_CHART_OF_ACCOUNTS: "BILL_ARCHIVE_A_CHART_OF_ACCOUNTS",
    /**
     * Archive an existing customer. in the response, the `archived` field is set as `true`. you can restore an archived customer with `post /v3/customers/{customerid}/restore`. there is no change when you archive an archived customer.
     */
    ARCHIVE_A_CUSTOMER: "BILL_ARCHIVE_A_CUSTOMER",
    /**
     * Archive an existing department. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_A_DEPARTMENT: "BILL_ARCHIVE_A_DEPARTMENT",
    /**
     * Archive an existing job. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_A_JOB: "BILL_ARCHIVE_A_JOB",
    /**
     * Archive an existing location. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_A_LOCATION: "BILL_ARCHIVE_A_LOCATION",
    /**
     * Archive a recurring bill. in the response, the `archived` field is set as `true`. you can restore an archived recurring bill with `post /v3/recurringbills/{recurringbillid}/restore`. there is no change when you archive an archived recurring bill. when a recurring bill is modified, all future bills are automatically changed.
     */
    ARCHIVE_A_RECURRING_BILL: "BILL_ARCHIVE_A_RECURRING_BILL",
    /**
     * Archive an existing vendor. in the response, the `archived` field is set as `true`. you can restore an archived vendor with `post /v3/vendors/{vendorid}/restore`. there is no change when you archive an archived vendor.
     */
    ARCHIVE_A_VENDOR: "BILL_ARCHIVE_A_VENDOR",
    /**
     * Archive multiple accounting classes with one api request. in the response, the `archived` field for each object is set as `true`.
     */
    ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES: "BILL_ARCHIVE_MULTIPLE_ACCOUNTING_CLASSES",
    /**
     * Archive multiple departments with one api request. in the response, the `archived` field is set as `true`.
     */
    ARCHIVE_MULTIPLE_DEPARTMENTS: "BILL_ARCHIVE_MULTIPLE_DEPARTMENTS",
    /**
     * Archive multiple employees with one api request. in the response, the `archived` field for each object is set as `true`.
     */
    ARCHIVE_MULTIPLE_EMPLOYEES: "BILL_ARCHIVE_MULTIPLE_EMPLOYEES",
    /**
     * Archive multiple items with one api request. in the response, the `archived` field for each object is set as `true`.
     */
    ARCHIVE_MULTIPLE_ITEMS: "BILL_ARCHIVE_MULTIPLE_ITEMS",
    /**
     * Archive multiple jobs with one api request. in the response, the `archived` field for each object is set as `true`.
     */
    ARCHIVE_MULTIPLE_JOBS: "BILL_ARCHIVE_MULTIPLE_JOBS",
    /**
     * Archive multiple locations with one api request. in the response, the `archived` field for each object is set as `true`.
     */
    ARCHIVE_MULTIPLE_LOCATIONS: "BILL_ARCHIVE_MULTIPLE_LOCATIONS",
    /**
     * Archive multiple chart of accounts with one api request. in the response, the `archived` field for each object is set as `true`.
     */
    ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS: "BILL_ARCHIVE_MUTLIPLE_CHART_OF_ACCOUNTS",
    /**
     * Archive an existing user. in the response, the `archived` field is set as `true`." you can restore an archived user with `post /v3/users/{userid}/restore`. there is no change when you archive an archived user.
     */
    BILL_ARCHIVE_A_USER: "BILL_BILL_ARCHIVE_A_USER",
    /**
     * Create a new user. the currently signed-in user must have the `administrator` user role in the bill organization to perform this operation. see [organizations and users](doc:organizations-users) in the guides section for more information, sample requests, and responses.
     */
    BILL_BILL_CREATE_A_USER: "BILL_BILL_BILL_CREATE_A_USER",
    /**
     * Get a list of user objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    BILL_BILL_GET_LIST_OF_USERS: "BILL_BILL_BILL_GET_LIST_OF_USERS",
    /**
     * Get details about a existing user.
     */
    BILL_BILL_GET_USER_DETAILS: "BILL_BILL_BILL_GET_USER_DETAILS",
    /**
     * Update details about an existing user.
     */
    BILL_BILL_UPDATE_A_USER: "BILL_BILL_BILL_UPDATE_A_USER",
    /**
     * Get a list of user role objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    BILL_GET_LIST_OF_USER_ROLES: "BILL_BILL_GET_LIST_OF_USER_ROLES",
    /**
     * Get details about an existing user role.
     */
    BILL_GET_USER_ROLE_DETAILS: "BILL_BILL_GET_USER_ROLE_DETAILS",
    /**
     * Restore an archived user. in the response, the `archived` field is set as `false`. you can perform any valid bill operation on restored users. there is no change when you restore a restored user.
     */
    BILL_RESTORE_AN_ARCHIVED_USER: "BILL_BILL_RESTORE_AN_ARCHIVED_USER",
    /**
     * Cancel an existing payment. you can attempt to cancel a payment with `post /v3/payments/{paymentid}/cancel` based on a set of conditions. see <a href="https://help.bill.com/hc/en-us/articles/115005898063">payment cancelation and void cut-off timing</a> in the bill help center to learn about the bill cancel payment process and timing. if the conditions are not met, you cannot cancel the payment. at that point, you can attempt to void the payment with `post /v3/payments/{paymentid}/void`.
     */
    CANCEL_A_PAYMENT: "BILL_CANCEL_A_PAYMENT",
    /**
     * Retrieve app details, such as version and deployment location.
     */
    CHECK_APP_HEALTH: "BILL_CHECK_APP_HEALTH",
    /**
     * Create a new accounting class.
     */
    CREATE_AN_ACCOUNTING_CLASS: "BILL_CREATE_AN_ACCOUNTING_CLASS",
    /**
     * Create a new employee.
     */
    CREATE_AN_EMPLOYEE: "BILL_CREATE_AN_EMPLOYEE",
    /**
     * Create an image upload url that can be used to upload receipts for reimbursements.
     */
    CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT: "BILL_CREATE_AN_IMAGE_UPLOAD_URL_FOR_A_REIMBURSEMENT",
    /**
     * Create a new invoice. see [invoices](doc:ar-invoices) in the guides section for more information, sample requests, and responses.
     */
    CREATE_AN_INVOICE: "BILL_CREATE_AN_INVOICE",
    /**
     * Create a new item.
     */
    CREATE_AN_ITEM: "BILL_CREATE_AN_ITEM",
    /**
     * Create a new organization. this operation requires partner-level permissions. * a `sessionid` header value generated with [api partner login](ref:partnerlogin) * an `appkey` header value see [organizations for bill partners](doc:partner-organizations) in the guides section for more information, sample requests, and responses.
     */
    CREATE_AN_ORGANIZATION: "BILL_CREATE_AN_ORGANIZATION",
    /**
     * Create a new bank account. the currently signed-in user must have the `administrator` user role in the bill organization to perform this operation. bill sends an email notification for informing you about changes to your funding accounts. **note**: when you create a bank account, bill sends a test ach payment to the bank account to confirm whether the account details are accurate. in the response, three fields are set to their default values. * the bank account `status` is set as `pending`. you can verify the bank account with `post /v3/funding-accounts/banks/{bankaccountid}/verify`. * the `payables` and `receivables` values are set as `false`. to update these values, update the bank account with `patch /v3/funding-accounts/banks/{bankaccountid}`. see [bank account setup (v3 api)](doc:bank-account-setup-v3-api) in the guides section for more information, sample requests, and responses.
     */
    CREATE_A_BANK_ACCOUNT: "BILL_CREATE_A_BANK_ACCOUNT",
    /**
     * Create a new bill. see [bills](doc:ap-bills) in the guides section for more information, sample requests, and responses.
     */
    CREATE_A_BILL: "BILL_CREATE_A_BILL",
    /**
     * Create a new budget for a company.
     */
    CREATE_A_BUDGET: "BILL_CREATE_A_BUDGET",
    /**
     * This endpoint allows you to create and process multiple bill payments in a single api call. it streamlines the payment process for businesses by enabling batch processing of payments to one or multiple vendors. the endpoint supports various funding sources, including bank accounts, credit/debit cards, bill balance (wallet), and ap cards. it offers flexibility in payment scheduling, delivery methods, and transaction tracking. use this endpoint when you need to efficiently manage and execute multiple payments simultaneously, reducing the number of individual api calls and simplifying your payment workflows. note that certain parameters may be required based on the chosen funding source, and there are specific rules for vendor and bill identification that must be followed.
     */
    CREATE_A_BULK_PAYMENT: "BILL_CREATE_A_BULK_PAYMENT",
    /**
     * Create a new chart of accounts.
     */
    CREATE_A_CHART_OF_ACCOUNTS: "BILL_CREATE_A_CHART_OF_ACCOUNTS",
    /**
     * Create a new customer. see [customers](doc:ar-customers) in the guides section for more information, sample requests, and responses.
     */
    CREATE_A_CUSTOMER: "BILL_CREATE_A_CUSTOMER",
    /**
     * Create a new department.
     */
    CREATE_A_DEPARTMENT: "BILL_CREATE_A_DEPARTMENT",
    /**
     * Create a new job.
     */
    CREATE_A_JOB: "BILL_CREATE_A_JOB",
    /**
     * Create a new location.
     */
    CREATE_A_LOCATION: "BILL_CREATE_A_LOCATION",
    /**
     * Create a payment. see [get list of vendor payment options](ref:listpaymentoptions) to get details about vendor payment options and payment process dates. **note**: creating a payment requires an mfa-trusted api session. see [mfa setup](ref:setup) for information about the bill mfa process. see [payments](doc:ap-payments) in the guides section for more information, sample requests, and responses.
     */
    CREATE_A_PAYMENT: "BILL_CREATE_A_PAYMENT",
    /**
     * Create a recurring bill. see [recurring bills](doc:ap-recurring-bills) in the guides section for more information, sample requests, and responses.
     */
    CREATE_A_RECURRING_BILL: "BILL_CREATE_A_RECURRING_BILL",
    /**
     * Create a reimbursement
     */
    CREATE_A_REIMBURSEMENT: "BILL_CREATE_A_REIMBURSEMENT",
    /**
     * Creates a new vendor in the bill.com system with comprehensive details for invoicing and payment processing. this endpoint allows you to set up a vendor's basic information, address, payment preferences, tax details, and auto-pay settings. it's particularly useful when onboarding new suppliers or updating existing vendor information en masse. the endpoint requires at minimum the vendor's name and address, but allows for extensive customization of payment terms, currencies, and automated payment rules. note that enabling auto-pay features requires additional authentication through mfa. use this endpoint when you need to add new vendors to your bill.com account or update existing vendors with new information.
     */
    CREATE_A_VENDOR: "BILL_CREATE_A_VENDOR",
    /**
     * Create a vendor bank account for an existing vendor. to update vendor bank account information, you must first delete the existing vendor bank account (with `delete /v3/vendors/{vendorid}/bank-account`), and then create a new vendor bank account (with `post /v3/vendors/{vendorid}/bank-account`) with the updated information. **note**: when you add vendor bank account information, bill requires 2 business days to complete a one-time verification of the bank account. payments sent to the vendor are processed after the one-time verification is complete. see [get list of vendor payment options](ref:listpaymentoptions) to get details about vendor payment options and payment process dates.
     */
    CREATE_A_VENDOR_BANK_ACCOUNT: "BILL_CREATE_A_VENDOR_BANK_ACCOUNT",
    /**
     * Create a new vendor card.
     */
    CREATE_A_VENDOR_CARD: "BILL_CREATE_A_VENDOR_CARD",
    /**
     * Create a new custom field.
     */
    CREATE_CUSTOM_FIELD: "BILL_CREATE_CUSTOM_FIELD",
    /**
     * Create new custom field values.
     */
    CREATE_CUSTOM_FIELD_VALUES: "BILL_CREATE_CUSTOM_FIELD_VALUES",
    /**
     * Delete an existing budget.
     */
    DELETE_A_BUDGET: "BILL_DELETE_A_BUDGET",
    /**
     * Delete an existing card.
     */
    DELETE_A_CARD: "BILL_DELETE_A_CARD",
    /**
     * Delete a custom field.
     */
    DELETE_A_CUSTOM_FIELD: "BILL_DELETE_A_CUSTOM_FIELD",
    /**
     * Delete a member from a budget
     */
    DELETE_A_MEMBER_FROM_A_BUDGET: "BILL_DELETE_A_MEMBER_FROM_A_BUDGET",
    /**
     * Delete a specified reimbursement.
     */
    DELETE_A_REIMBURSEMENT: "BILL_DELETE_A_REIMBURSEMENT",
    /**
     * Delete an existing user.
     */
    DELETE_A_USER: "BILL_DELETE_A_USER",
    /**
     * Delete the existing vendor bank account for a vendor. to update vendor bank account information, you must first delete the existing vendor bank account (with `delete /v3/vendors/{vendorid}/bank-account`), and then create a new vendor bank account (with `post /v3/vendors/{vendorid}/bank-account`) with the updated information.
     */
    DELETE_A_VENDOR_BANK_ACCOUNT: "BILL_DELETE_A_VENDOR_BANK_ACCOUNT",
    /**
     * Delete an existing network connection with a customer. in addition, use this endpoint to cancel a pending customer connection invite. you can send a new connection invitation after an existing connection or invitation is canceled. **note**: if the invited customer does not respond to an invitation for 60 days, the invitation expires. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    DELETE_CUSTOMER_CONNECTION: "BILL_DELETE_CUSTOMER_CONNECTION",
    /**
     * Delete custom fields. values cannot be assigned to current or future transactions. the values will remain assigned to past transactions.
     */
    DELETE_CUSTOM_FIELD_VALUES: "BILL_DELETE_CUSTOM_FIELD_VALUES",
    /**
     * Delete an existing network connection with a vendor. in addition, use this endpoint to cancel a pending vendor connection invite. you can send a new connection invitation after an existing connection or invitation is canceled. **note**: if the invited vendor does not respond to an invitation for 60 days, the invitation expires. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    DELETE_VENDOR_CONNECTION: "BILL_DELETE_VENDOR_CONNECTION",
    /**
     * Generates a multi-factor authentication (mfa) challenge for enhanced security in the bill api. this endpoint initiates the mfa process by creating a challenge that the user must respond to with their authentication token. it provides the option to use either the primary or a backup mfa device for generating the challenge. this tool should be used when implementing mfa flows in your application, particularly before sensitive operations like accessing billing information or making payments. the generated challenge is typically time-sensitive and should be responded to promptly for successful authentication.
     */
    GENERATE_MFA_CHALLENGE: "BILL_GENERATE_MFA_CHALLENGE",
    /**
     * Get details about an existing accounting class.
     */
    GET_ACCOUNTING_CLASS_DETAILS: "BILL_GET_ACCOUNTING_CLASS_DETAILS",
    /**
     * Get details about your current api session. this includes information about the current organization id, user id, and mfa status of the organization.
     */
    GET_API_SESSION_DETAILS: "BILL_GET_API_SESSION_DETAILS",
    /**
     * Get details about an attachment. from the response, use `downloadlink` in a get request to download the attachment. ``` curl '{downloadlink}&sessionid={session id}' --output {attachment name} ```
     */
    GET_ATTACHMENT_DETAILS: "BILL_GET_ATTACHMENT_DETAILS",
    /**
     * Get audit trail details about changes made to a vendor object. the audit trail lists records for each create and edit operation. see [getting audit trail details](doc:getting-audit-trail-details) in the guides section for more information, sample requests, and responses.
     */
    GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR: "BILL_GET_AUDIT_TRAIL_DETAILS_FOR_A_VENDOR",
    /**
     * Get a single member for a budget
     */
    GET_A_SINGLE_MEMBER_FOR_A_BUDGET: "BILL_GET_A_SINGLE_MEMBER_FOR_A_BUDGET",
    /**
     * Get details about an existing bank account.
     */
    GET_BANK_ACCOUNT_DETAILS: "BILL_GET_BANK_ACCOUNT_DETAILS",
    /**
     * Get details about an existing bill.
     */
    GET_BILL_DETAILS: "BILL_GET_BILL_DETAILS",
    /**
     * Get details about an existing budget.
     */
    GET_BUDGET_DETAILS: "BILL_GET_BUDGET_DETAILS",
    /**
     * Get details about an existing card account.
     */
    GET_CARD_ACCOUNT_DETAILS: "BILL_GET_CARD_ACCOUNT_DETAILS",
    /**
     * Get details about an existing card.
     */
    GET_CARD_DETAILS: "BILL_GET_CARD_DETAILS",
    /**
     * Get a list of card funding purpose values based on the vendor and card brand. when you create a payment (`post /v3/payments` or `post /v3/payments/bulk`) with a `card account` funding account `type`, bill requires a vendor industry value for compliance. when bill cannot identify the vendor industry, the `cardfundingpurpose` field must be set in your payment request. use this endpoint to get the list of card funding purpose values you can set. if you get an empty 200 response, bill has information about the vendor industry and setting the `cardfundingpurpose` field is not required in your payment request.
     */
    GET_CARD_FUNDING_PURPOSE: "BILL_GET_CARD_FUNDING_PURPOSE",
    /**
     * Get details about an existing chart of accounts.
     */
    GET_CHART_OF_ACCOUNTS_DETAILS: "BILL_GET_CHART_OF_ACCOUNTS_DETAILS",
    /**
     * Get images of an existing check sent to a vendor. from the response, use `downloadlink` in a get request to download the front and back images of the check. ``` curl '{downloadlink}&sessionid={session id}' --output {check name} ```
     */
    GET_CHECK_IMAGE_DATA: "BILL_GET_CHECK_IMAGE_DATA",
    /**
     * Get details about the current user.
     */
    GET_CURRENT_USER_DETAILS: "BILL_GET_CURRENT_USER_DETAILS",
    /**
     * Get details about an existing customer.
     */
    GET_CUSTOMER_DETAILS: "BILL_GET_CUSTOMER_DETAILS",
    /**
     * Get the status of an existing invitation sent with `post /v3/network/invitation/customer/{customerid}`. when the customer accepts the invitation, your organization is connected with the customer. **note**: if the invited customer does not respond to an invitation for 60 days, the invitation expires. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    GET_CUSTOMER_INVITATION_STATUS: "BILL_GET_CUSTOMER_INVITATION_STATUS",
    /**
     * Get details about a custom field.
     */
    GET_CUSTOM_FIELD_DETAILS: "BILL_GET_CUSTOM_FIELD_DETAILS",
    /**
     * Get details about a custom fields values.
     */
    GET_CUSTOM_FIELD_VALUE: "BILL_GET_CUSTOM_FIELD_VALUE",
    /**
     * Get details about an existing department.
     */
    GET_DEPARTMENT_DETAILS: "BILL_GET_DEPARTMENT_DETAILS",
    /**
     * Get details about a document associated with a bill. from the response, use `downloadlink` in a get request to download the document. ``` curl '{downloadlink}&sessionid={session id}' --output {document name} ```
     */
    GET_DOCUMENT_DETAILS: "BILL_GET_DOCUMENT_DETAILS",
    /**
     * Get status of a document upload. use this endpoint to identify when a document upload is complete. * at the start of the document upload process (`in progress`), bill generates an `uploadid` for the document. the value begins with `0du`. * when the document upload is complete (`uploaded`), bill generates a `documentid` for the document. the value begins with `00h`.
     */
    GET_DOCUMENT_UPLOAD_STATUS: "BILL_GET_DOCUMENT_UPLOAD_STATUS",
    /**
     * Get details about an existing employee.
     */
    GET_EMPLOYEE_DETAILS: "BILL_GET_EMPLOYEE_DETAILS",
    /**
     * Get the funding account permissions available for the current organization and current organization user.
     */
    GET_FUNDING_ACCOUNT_PERMISSIONS: "BILL_GET_FUNDING_ACCOUNT_PERMISSIONS",
    /**
     * Get international payments (not usd) configuration that is required for compliance with international payment rules of a vendor country and vendor bank account. this information is based on vendor country, bill currency, and vendor account type. use this endpoint for getting information before creating an international vendor. in the response, the required `paymentpurpose` and `regulatoryfields` information is retrieved for the vendor. **note**: if you are adding `paymentpurpose` and `regulatoryfields` information after creating an international vendor, use `get /v3/vendors/{vendorid}/configuration` to get the required configuration for your created vendor. see [creating an international vendor](doc:creating-an-international-vendor) for more information on how to set `paymentpurpose` and `regulatoryfields`.
     */
    GET_INTERNATIONAL_PAYMENTS_CONFIGURATION: "BILL_GET_INTERNATIONAL_PAYMENTS_CONFIGURATION",
    /**
     * Get details about an existing invoice.
     */
    GET_INVOICE_DETAILS: "BILL_GET_INVOICE_DETAILS",
    /**
     * Get details about an existing item.
     */
    GET_ITEM_DETAILS: "BILL_GET_ITEM_DETAILS",
    /**
     * Get details about an existing job.
     */
    GET_JOB_DETAILS: "BILL_GET_JOB_DETAILS",
    /**
     * Get a list of accounting class objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_ACCOUNTING_CLASSES: "BILL_GET_LIST_OF_ACCOUNTING_CLASSES",
    /**
     * Get a list of ap card objects. with the ap card, you can earn rewards simply by paying your bills. the ap card is a payment method that enables you to send fast payments with no transaction fees or annual fees. you can use the ap card with any vendor who accepts virtual card payments. see [ap card frequently asked questions (faqs)](https://help.bill.com/direct/s/article/000003348) in the bill help to learn more about ap card.
     */
    GET_LIST_OF_AP_CARDS: "BILL_GET_LIST_OF_AP_CARDS",
    /**
     * Get a list of bank account objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_BANK_ACCOUNTS: "BILL_GET_LIST_OF_BANK_ACCOUNTS",
    /**
     * Get a list of bank account user objects. in the response, if the bank account user `verificationstatus` is set as `nominated`, user verification must be completed before the user can pay with the specified bank account. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page.
     */
    GET_LIST_OF_BANK_ACCOUNT_USERS: "BILL_GET_LIST_OF_BANK_ACCOUNT_USERS",
    /**
     * Get a list of bill objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_BILLS: "BILL_GET_LIST_OF_BILLS",
    /**
     * Get a list of budget objects for the current user's company.
     */
    GET_LIST_OF_BUDGETS: "BILL_GET_LIST_OF_BUDGETS",
    /**
     * Get a list of card objects.
     */
    GET_LIST_OF_CARDS: "BILL_GET_LIST_OF_CARDS",
    /**
     * Get a list of card account objects.
     */
    GET_LIST_OF_CARD_ACCOUNTS: "BILL_GET_LIST_OF_CARD_ACCOUNTS",
    /**
     * Get a list of card account user objects. in the response, if the card account user `verificationstatus` is set as `nominated`, user verification must be completed before the user can pay with the specified card account. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page.
     */
    GET_LIST_OF_CARD_ACCOUNT_USERS: "BILL_GET_LIST_OF_CARD_ACCOUNT_USERS",
    /**
     * Get a list of chart of accounts objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_CHART_OF_ACCOUNTS: "BILL_GET_LIST_OF_CHART_OF_ACCOUNTS",
    /**
     * Get a list of customer objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_CUSTOMERS: "BILL_GET_LIST_OF_CUSTOMERS",
    /**
     * Get list of custom fields.
     */
    GET_LIST_OF_CUSTOM_FIELDS: "BILL_GET_LIST_OF_CUSTOM_FIELDS",
    /**
     * Get a list of department objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_DEPARTMENTS: "BILL_GET_LIST_OF_DEPARTMENTS",
    /**
     * Get a list of documents associated with a bill. from the response, use `downloadlink` in a get request to download the document. ``` curl '{downloadlink}&sessionid={session id}' --output {document name} ```
     */
    GET_LIST_OF_DOCUMENTS: "BILL_GET_LIST_OF_DOCUMENTS",
    /**
     * Get a list of employee objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_EMPLOYEES: "BILL_GET_LIST_OF_EMPLOYEES",
    /**
     * Get a list of invoice objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_INVOICES: "BILL_GET_LIST_OF_INVOICES",
    /**
     * Get a list of attachments associated with an invoice. from the response, use `downloadlink` in a get request to download the attachment. ``` curl '{downloadlink}&sessionid={session id}' --output {attachment name} ```
     */
    GET_LIST_OF_INVOICE_ATTACHMENTS: "BILL_GET_LIST_OF_INVOICE_ATTACHMENTS",
    /**
     * Get a list of item objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_ITEMS: "BILL_GET_LIST_OF_ITEMS",
    /**
     * Get a list of job objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_JOBS: "BILL_GET_LIST_OF_JOBS",
    /**
     * Get a list of location objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_LOCATIONS: "BILL_GET_LIST_OF_LOCATIONS",
    /**
     * Get a list of members for a budget.
     */
    GET_LIST_OF_MEMBERS_FOR_A_BUDGET: "BILL_GET_LIST_OF_MEMBERS_FOR_A_BUDGET",
    /**
     * Get a list of phone numbers that have been added for setting up mfa in the current organization.
     */
    GET_LIST_OF_MFA_PHONE_NUMBERS: "BILL_GET_LIST_OF_MFA_PHONE_NUMBERS",
    /**
     * Get a list of organization objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples. this operation requires partner-level permissions. * a `sessionid` header value generated with [api partner login](ref:partnerlogin) * an `appkey` header value
     */
    GET_LIST_OF_ORGANIZATIONS: "BILL_GET_LIST_OF_ORGANIZATIONS",
    /**
     * Get a list of available values for the `industry` field for an organization. use this information to set the `industry` field in your `post /v3/partner/organizations` or `patch /v3/organizations/{organizationid}` request.
     */
    GET_LIST_OF_ORGANIZATION_INDUSTRIES: "BILL_GET_LIST_OF_ORGANIZATION_INDUSTRIES",
    /**
     * Get a list of payment objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_PAYMENTS: "BILL_GET_LIST_OF_PAYMENTS",
    /**
     * Get a list of recurring bill objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_RECURRING_BILLS: "BILL_GET_LIST_OF_RECURRING_BILLS",
    /**
     * Get a list of reimbursement objects.
     */
    GET_LIST_OF_REIMBURSEMENTS: "BILL_GET_LIST_OF_REIMBURSEMENTS",
    /**
     * Get a list of transaction objects.
     */
    GET_LIST_OF_TRANSACTIONS: "BILL_GET_LIST_OF_TRANSACTIONS",
    /**
     * Get list of values for custom field.
     */
    GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD: "BILL_GET_LIST_OF_VALUES_FOR_CUSTOM_FIELD",
    /**
     * Get a list of vendor objects. by default, you get 20 results on one page of results. set `max` in your request to get up to 100 results on one page. see [search operations with lists](doc:search-op-with-lists) in the guides section for filtering, sorting, and pagination examples.
     */
    GET_LIST_OF_VENDORS: "BILL_GET_LIST_OF_VENDORS",
    /**
     * Get a list of attachments associated with a vendor. from the response, use `downloadlink` in a get request to download the attachment. ``` curl '{downloadlink}&sessionid={session id}' --output {attachment name} ```
     */
    GET_LIST_OF_VENDOR_ATTACHMENTS: "BILL_GET_LIST_OF_VENDOR_ATTACHMENTS",
    /**
     * Get a list of vendor payment options available based on the funding account options available in the signed-in user's bill organization and on the payment methods accepted by a vendor. see [vendor payment options](doc:vendor-payment-options) in the guides section for more information, sample requests, and responses.
     */
    GET_LIST_OF_VENDOR_PAYMENT_OPTIONS: "BILL_GET_LIST_OF_VENDOR_PAYMENT_OPTIONS",
    /**
     * Get details about an existing location.
     */
    GET_LOCATION_DETAILS: "BILL_GET_LOCATION_DETAILS",
    /**
     * Get details about an existing organization. the currently signed-in user must have the `administrator` user role in the bill organization to perform this operation. see [organizations and users](doc:organizations-users) in the guides section for more information, sample requests, and responses.
     */
    GET_ORGANIZATION_DETAILS: "BILL_GET_ORGANIZATION_DETAILS",
    /**
     * Get the bill price plan details for an existing organization. the currently signed-in user must have the `administrator` user role in the bill organization to perform this operation. a bill price plan for an organization provides a range of information, including monthly subscription fees and the terms and conditions for additional charges in the price plan.
     */
    GET_ORGANIZATION_PRICE_PLAN_DETAILS: "BILL_GET_ORGANIZATION_PRICE_PLAN_DETAILS",
    /**
     * Get a jwt token for retrieving a card's pan (full account number). the jwt token contains all the information required for retrieving details about a virtual card (16-digit pan, cvv, and expiration date). the jwt token lifespan is 5 minutes. you can convert the retrieved jwt token to get the related virtual card details with `post https://app-dev-sandbox.divvy.co/de/rest/pan`. ``` curl --location --request post 'https://app-dev-sandbox.divvy.co/de/rest/pan' --header 'content-type: application/json' --data-raw '{"token":"{jwt token}"}' ``` **note**: use `post https://api.divvy.co/de/rest/pan` in the production environment.
     */
    GET_PAN_JWT: "BILL_GET_PAN_JWT",
    /**
     * Get details about an existing payment.
     */
    GET_PAYMENT_DETAILS: "BILL_GET_PAYMENT_DETAILS",
    /**
     * Check whether a phone number has been added for the currently signed-in user. bill requires the signed-in user to have a linked phone number for initiating risk verification for the organization. in the response, if `hasphone` is `false`, you can add a phone number for the user with `post /v3/risk-verifications/phone`. after you add a phone number, you can initiate risk verification for the organization with `post /v3/risk-verifications`.
     */
    GET_PHONE_STATUS_FOR_RISK_VERIFICATION: "BILL_GET_PHONE_STATUS_FOR_RISK_VERIFICATION",
    /**
     * Get details about an existing recurring bill.
     */
    GET_RECURRING_BILL_DETAILS: "BILL_GET_RECURRING_BILL_DETAILS",
    /**
     * Get details about a specified reimbursement.
     */
    GET_REIMBURSEMENT_DETAILS: "BILL_GET_REIMBURSEMENT_DETAILS",
    /**
     * Get risk verification details for an existing organization.
     */
    GET_RISK_VERIFICATION_DETAILS: "BILL_GET_RISK_VERIFICATION_DETAILS",
    /**
     * Get details about existing transaction custom fields
     */
    GET_TRANSACTION_CUSTOM_FIELD_DETAILS: "BILL_GET_TRANSACTION_CUSTOM_FIELD_DETAILS",
    /**
     * Get details about an existing transaction custom field and values
     */
    GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS: "BILL_GET_TRANSACTION_CUSTOM_FIELD_VALUE_DETAILS",
    /**
     * Get details about an existing transaction.
     */
    GET_TRANSACTION_DETAILS: "BILL_GET_TRANSACTION_DETAILS",
    /**
     * Get details about an existing vendor bank account.
     */
    GET_VENDOR_BANK_ACCOUNT_DETAILS: "BILL_GET_VENDOR_BANK_ACCOUNT_DETAILS",
    /**
     * Get international payments (not usd) configuration after vendor creation. this configuration is required for compliance with international payment rules of a vendor country and vendor bank account. in the response, the required `paymentpurpose` and `regulatoryfields` information is retrieved for the vendor. **note**: if you are adding `paymentpurpose` and `regulatoryfields` information during international vendor creation, use `get /v3/vendors/configuration/international-payments` to get the required configuration before vendor creation. see [creating an international vendor](doc:creating-an-international-vendor) for more information on how to set `paymentpurpose` and `regulatoryfields`.
     */
    GET_VENDOR_CONFIGURATION: "BILL_GET_VENDOR_CONFIGURATION",
    /**
     * Get details about an existing vendor.
     */
    GET_VENDOR_DETAILS: "BILL_GET_VENDOR_DETAILS",
    /**
     * Get the status of an existing invitation sent with `post /v3/network/invitation/vendor/{vendorid}`. when the vendor accepts the invitation, your organization is connected with the vendor. **note**: if the invited vendor does not respond to an invitation for 60 days, the invitation expires. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    GET_VENDOR_INVITATION_STATUS: "BILL_GET_VENDOR_INVITATION_STATUS",
    /**
     * Initiate risk verification for an organization. the currently signed-in user must have the `administrator` user role in the bill organization to perform this operation. **note**: you must add a phone number for the signed-in user (with `post /v3/risk-verifications/phone`) before you can initiate risk verification. bill partners must add a phone number for a created user with `post /v3/partner/risk-verifications/{userid}/phone`. as a bill partner, when you create an organization and then create a user for that organization, it is important that you initiate risk verification with `post /v3/risk-verifications`. bill performs a kyc/kyb (know you customer/know your business) check based on the provided organization information. bill sends an email notification for risk verficiation. when the check is complete, bill approves the organization for bill ap and ar operations.
     */
    INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION: "BILL_INITIATE_RISK_VERIFICATION_FOR_AN_ORGANIZATION",
    /**
     * Send an invitation to connect a customer created in your organization with a customer in the network. bill sends an invitation email to the customer email address. when the customer accepts the invitation, the customer in your organization is connected with the invited customer. if the invited customer does not respond, delete the invitation (with `delete /v3/network/invitation/customer/{customerid}`) before sending a new invitation. **note**: if the invited customer does not respond to an invitation for 60 days, the invitation expires. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK: "BILL_INVITE_A_CUSTOMER_IN_THE_BILL_NETWORK",
    /**
     * Send an invitation to connect a vendor created in your organization with a vendor in the network. bill sends an invitation email to the vendor email address. when the vendor accepts the invitation, the vendor in your organization is connected with the invited vendor. if the invited vendor does not respond, delete the invitation (with `delete /v3/network/invitation/vendor/{vendorid}`) before sending a new invitation. **note**: if the invited vendor does not respond to an invitation for 60 days, the invitation expires. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    INVITE_A_VENDOR_IN_THE_BILL_NETWORK: "BILL_INVITE_A_VENDOR_IN_THE_BILL_NETWORK",
    /**
     * Set your current api session as mfa trusted. ideally, when you sign in with `post /v3/login`, set `remembermeid` and `device` in your request to generate an mfa-trusted api session. in case you sign in without `remembermeid` and `device` in your request, you can use this `post /v3/mfa/step-up` endpoint to mark the current api session as mfa trusted.
     */
    MFA_STEP_UP_FOR_API_SESSION: "BILL_MFA_STEP_UP_FOR_API_SESSION",
    /**
     * Nominate a bank account user. when you nominate a user, bill performs a set of operations. * the bank account user `verificationstatus` is set as `nominated`. * bill sends the user an email asking them to sign in to the bill web app and complete identity verification. after user identity verification is successful, the bank account user `verificationstatus` is set as `verified` and the user can pay with the specified bank account. **note**: the bank account `status` must be set as `verified` before you can nominate bank account users.
     */
    NOMINATE_A_BANK_ACCOUNT_USER: "BILL_NOMINATE_A_BANK_ACCOUNT_USER",
    /**
     * Record an invoice payment received outside your bill system. apply the recorded payment amount to one or more invoices for a customer. any recorded unapplied amount is an overpayment and is available as a customer balance in your bill system. see [recording an ar payment](doc:recording-an-ar-payment) in the guides section for more information, sample requests, and responses.
     */
    RECORD_AR_PAYMENT: "BILL_RECORD_AR_PAYMENT",
    /**
     * Update the number of line items in an invoice. you can also update other invoice details. you can use the put operation to add, remove, or replace the number of line items in an invoice. a set of rules apply with the put operation. * when you add a new line item, a new line item `id` is generated in the invoice. * when you omit an existing line item `id`, the line item is removed from the invoice.
     */
    REPLACE_AN_INVOICE: "BILL_REPLACE_AN_INVOICE",
    /**
     * Update the number of line items in a bill. you can also update other bill details. you can use the put operation to add, remove, or replace the number of line items in a bill. a set of rules apply with the put operation. * when you add a new line item, a new line item `id` is generated in the bill. * when you omit an existing line item `id`, the line item is removed from the bill.
     */
    REPLACE_A_BILL: "BILL_REPLACE_A_BILL",
    /**
     * Update the number of line items in a recurring bill. you can also update other recurring bill details. you can use the put operation to add, remove, or replace the number of line items in a recurring bill. a set of rules apply with the put operation. * when you add a new line item, a new line item `id` is generated in the bill. * when you omit an existing line item `id`, the line item is removed from the bill. when a recurring bill is modified, all future bills are automatically changed.
     */
    REPLACE_A_RECURRING_BILL: "BILL_REPLACE_A_RECURRING_BILL",
    /**
     * Restore an archived accounting class. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS: "BILL_RESTORE_AN_ARCHIVED_ACCOUNTING_CLASS",
    /**
     * Restore an archived bill. in the response, the `archived` field is set as `false`. you can perform any valid bill operation on restored bills. there is no change when you restore a restored bill.
     */
    RESTORE_AN_ARCHIVED_BILL: "BILL_RESTORE_AN_ARCHIVED_BILL",
    /**
     * Restore an archived chart of accounts. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS: "BILL_RESTORE_AN_ARCHIVED_CHART_OF_ACCOUNTS",
    /**
     * Restore an archived customer. in the response, the `archived` field is set as `false`. you can perform any valid bill operation on restored customers. there is no change when you restore a restored customer.
     */
    RESTORE_AN_ARCHIVED_CUSTOMER: "BILL_RESTORE_AN_ARCHIVED_CUSTOMER",
    /**
     * Restore an archived department. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_DEPARTMENT: "BILL_RESTORE_AN_ARCHIVED_DEPARTMENT",
    /**
     * Restore an archived employee. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_EMPLOYEE: "BILL_RESTORE_AN_ARCHIVED_EMPLOYEE",
    /**
     * Restore an archived invoice. in the response, the `archived` field is set as `false`. you can perform any valid bill operation on restored invoices. there is no change when you restore a restored invoice.
     */
    RESTORE_AN_ARCHIVED_INVOICE: "BILL_RESTORE_AN_ARCHIVED_INVOICE",
    /**
     * Restore an archived item. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_ITEM: "BILL_RESTORE_AN_ARCHIVED_ITEM",
    /**
     * Restore an archived job. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_JOB: "BILL_RESTORE_AN_ARCHIVED_JOB",
    /**
     * Restore an archived location. in the response, the `archived` field is set as `false`.
     */
    RESTORE_AN_ARCHIVED_LOCATION: "BILL_RESTORE_AN_ARCHIVED_LOCATION",
    /**
     * Restore an archived recurring bill. in the response, the `archived` field is set as `false`. you can perform any valid bill operation on restored recurring bills. there is no change when you restore a restored recurring bill. when a recurring bill is modified, all future bills are automatically changed.
     */
    RESTORE_AN_ARCHIVED_RECURRING_BILL: "BILL_RESTORE_AN_ARCHIVED_RECURRING_BILL",
    /**
     * Restore an archived vendor. in the response, the `archived` field is set as `false`. you can perform any valid bill operation on restored vendors. there is no change when you restore a restored vendor.
     */
    RESTORE_AN_ARCHIVED_VENDOR: "BILL_RESTORE_AN_ARCHIVED_VENDOR",
    /**
     * Restore multiple accounting classes with one api request. in the response, the `archived` field for each object is set as `false`.
     */
    RESTORE_MULTIPLE_ACCOUNTING_CLASSES: "BILL_RESTORE_MULTIPLE_ACCOUNTING_CLASSES",
    /**
     * Restore multiple chart of accounts with one api request. in the response, the `archived` field for each object is set as `false`.
     */
    RESTORE_MULTIPLE_CHART_OF_ACCOUNTS: "BILL_RESTORE_MULTIPLE_CHART_OF_ACCOUNTS",
    /**
     * Restore multiple departments with one api request. in the response, the `archived` field is set as `false`.
     */
    RESTORE_MULTIPLE_DEPARTMENTS: "BILL_RESTORE_MULTIPLE_DEPARTMENTS",
    /**
     * Restore multiple employees with one api request. in the response, the `archived` field for each object is set as `false`.
     */
    RESTORE_MULTIPLE_EMPLOYEES: "BILL_RESTORE_MULTIPLE_EMPLOYEES",
    /**
     * Restore multiple items with one api request. in the response, the `archived` field for each object is set as `false`.
     */
    RESTORE_MULTIPLE_ITEMS: "BILL_RESTORE_MULTIPLE_ITEMS",
    /**
     * Restore multiple jobs with one api request. in the response, the `archived` field for each object is set as `false`.
     */
    RESTORE_MULTIPLE_JOBS: "BILL_RESTORE_MULTIPLE_JOBS",
    /**
     * Restore multiple locations with one api request. in the response, the `archived` field for each object is set as `false`.
     */
    RESTORE_MULTIPLE_LOCATIONS: "BILL_RESTORE_MULTIPLE_LOCATIONS",
    /**
     * Retrieves all attachments associated with a specific customer in the bill api. this endpoint allows businesses to fetch documents, invoices, or any other files that have been uploaded and linked to a particular customer account. it should be used when there's a need to access or review all attachment files for a given customer, such as during auditing, customer service inquiries, or account management tasks. the endpoint returns a collection of attachment metadata and potentially the attachment contents, depending on the api's implementation. it does not modify any data and is typically used for read-only operations. note that this endpoint focuses on customer-specific attachments and may not include system-wide or non-customer-related files.
     */
    RETRIEVE_CUSTOMER_ATTACHMENTS: "BILL_RETRIEVE_CUSTOMER_ATTACHMENTS",
    /**
     * Search for a customer, vendor, or verified national vendor. you can search in the bill network and verified national vendor network. when you search in the bill network, there are two `name` requirements for getting search results. * your search term must have a minimum of three characters. * your search term must be a complete word. you will not get search results when your search term is a partial word. when you search in the verified national vendor network, search results are based on both a complete and partial match on `name` and `ziporpostalcode`. you can further filter your search by the billing statement `accountnumber` with the vendor. for example, your verizon internet bill account number. see [bill network](doc:bill-network) in the guides section for more information, sample requests, and responses.
     */
    SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS: "BILL_SEARCH_FOR_AN_ORGANIZATION_IN_THE_BILL_NETWORKS",
    /**
     * Send an invoice to a customer email address. you can send the invoice to multiple email addresses. see [invoices](doc:ar-invoices) in the guides section for more information, sample requests, and responses.
     */
    SEND_AN_INVOICE: "BILL_SEND_AN_INVOICE",
    /**
     * Update details about an existing accounting class.
     */
    UPDATE_AN_ACCOUNTING_CLASS: "BILL_UPDATE_AN_ACCOUNTING_CLASS",
    /**
     * Update details about an existing employee.
     */
    UPDATE_AN_EMPLOYEE: "BILL_UPDATE_AN_EMPLOYEE",
    /**
     * Update details about an invoice line item. you can also update other invoice details. you can use the patch operation to modify line item details, such as `amount`, `quantity`, and `description`. the invoice line item `id` does not change with a patch operation.
     */
    UPDATE_AN_INVOICE: "BILL_UPDATE_AN_INVOICE",
    /**
     * Update details about an existing item.
     */
    UPDATE_AN_ITEM: "BILL_UPDATE_AN_ITEM",
    /**
     * Update details about an existing organization. the currently signed-in user must have the `administrator` user role in the bill organization to perform this operation. see [organizations and users](doc:organizations-users) in the guides section for more information, sample requests, and responses.
     */
    UPDATE_AN_ORGANIZATION: "BILL_UPDATE_AN_ORGANIZATION",
    /**
     * Update details about an existing bank account. this operation follows a set of rules. * **bank account `status` requirement**: the bank account `status` must be set as `verified` before you can update any details about the bank account. you can verify the bank account with `post /v3/funding-accounts/banks/{bankaccountid}/verify`. * **update field restrictions**: you cannot update the `routingnumber`, `accountnumber`, and account `type` values for a bank account. if you want to update any of these values, create a new bank account with `post /v3/funding-accounts/banks`.
     */
    UPDATE_A_BANK_ACCOUNT: "BILL_UPDATE_A_BANK_ACCOUNT",
    /**
     * Update details about a bill line item. you can also update other bill details. you can use the patch operation to modify line item details, such as `amount` and `description`. the bill line item `id` does not change with a patch operation.
     */
    UPDATE_A_BILL: "BILL_UPDATE_A_BILL",
    /**
     * Update details about an existing budget.
     */
    UPDATE_A_BUDGET: "BILL_UPDATE_A_BUDGET",
    /**
     * Update details about an existing chart of accounts.
     */
    UPDATE_A_CHART_OF_ACCOUNTS: "BILL_UPDATE_A_CHART_OF_ACCOUNTS",
    /**
     * Update details about an existing customer.
     */
    UPDATE_A_CUSTOMER: "BILL_UPDATE_A_CUSTOMER",
    /**
     * Update a custom field and values on a transaction.
     */
    UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION: "BILL_UPDATE_A_CUSTOM_FIELD_AND_VALUES_ON_A_TRANSACTION",
    /**
     * Update details about an existing department.
     */
    UPDATE_A_DEPARTMENT: "BILL_UPDATE_A_DEPARTMENT",
    /**
     * Update details about an existing job.
     */
    UPDATE_A_JOB: "BILL_UPDATE_A_JOB",
    /**
     * Update a list of budget members in a budget.
     */
    UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET: "BILL_UPDATE_A_LIST_OF_BUDGET_MEMBERS_IN_A_BUDGET",
    /**
     * Update details about an existing location.
     */
    UPDATE_A_LOCATION: "BILL_UPDATE_A_LOCATION",
    /**
     * Update details about a recurring bill line item. you can also update other recurring bill details. you can use the patch operation to modify line item details, such as amount and description. the recurring bill line item `id` does not change with a patch operation. when a recurring bill is modified, all future bills are automatically changed.
     */
    UPDATE_A_RECURRING_BILL: "BILL_UPDATE_A_RECURRING_BILL",
    /**
     * Update a reimbursement
     */
    UPDATE_A_REIMBURSEMENT: "BILL_UPDATE_A_REIMBURSEMENT",
    /**
     * Update details about an existing vendor. ### requirements for enabling vendor payments vendor address details are required for paying a vendor by check or for inviting the vendor to join the bill network. * `line1` * `city` * `ziporpostalcode` * `country` * `payeename` **note**: you cannot add or update vendor bank account information with this endpoint. you can add and manage vendor bank account information with a dedicated set of endpoints. * **create a vendor bank account**: `post /v3/vendors/{vendorid}/bank-account` * **get vendor bank account details**: `get /v3/vendors/{vendorid}/bank-account` * **delete a vendor bank account**: `delete /v3/vendors/{vendorid}/bank-account`
     */
    UPDATE_A_VENDOR: "BILL_UPDATE_A_VENDOR",
    /**
     * Update a new vendor card.
     */
    UPDATE_A_VENDOR_CARD: "BILL_UPDATE_A_VENDOR_CARD",
    /**
     * Add a member to a budget or update an existing member of the budget
     */
    UPDATE_BUDGET_MEMBER_FUNDS: "BILL_UPDATE_BUDGET_MEMBER_FUNDS",
    /**
     * Update settings for a custom field.
     */
    UPDATE_CUSTOM_FIELD_DETAILS: "BILL_UPDATE_CUSTOM_FIELD_DETAILS",
    /**
     * Update a transaction
     */
    UPDATE_TRANSACTION: "BILL_UPDATE_TRANSACTION",
    /**
     * Upload a document for an existing bill. **note**: when you upload a document, it takes a few minutes for bill to complete the upload process. you can get the document upload status with `get /v3/documents/upload-status`. see [documents and attachments](doc:documents-attachments) in the guides section for more information, sample requests, and responses.
     */
    UPLOAD_BILL_DOCUMENT: "BILL_UPLOAD_BILL_DOCUMENT",
    /**
     * Upload an attachment for an existing customer. **note**: when you upload an attachment, it takes a few minutes for bill to complete the upload process. see [documents and attachments](doc:documents-attachments) in the guides section for more information, sample requests, and responses.
     */
    UPLOAD_CUSTOMER_ATTACHMENT: "BILL_UPLOAD_CUSTOMER_ATTACHMENT",
    /**
     * Upload an attachment for an invoice. **note**: when you upload an attachment, it takes a few minutes for bill to complete the upload process. see [documents and attachments](doc:documents-attachments) in the guides section for more information, sample requests, and responses.
     */
    UPLOAD_INVOICE_ATTACHMENT: "BILL_UPLOAD_INVOICE_ATTACHMENT",
    /**
     * Upload an attachment for an existing vendor. **note**: when you upload an attachment, it takes a few minutes for bill to complete the upload process. see [documents and attachments](doc:documents-attachments) in the guides section for more information, sample requests, and responses.
     */
    UPLOAD_VENDOR_ATTACHMENT: "BILL_UPLOAD_VENDOR_ATTACHMENT",
    /**
     * Validates a multi-factor authentication (mfa) challenge in the bill api. this endpoint is used to complete the mfa process by verifying the token sent to the user's registered phone number. it should be called after initiating an mfa challenge with the 'post /v3/mfa/challenge' endpoint. the function provides options for remembering the device or machine for an extended period, enhancing user convenience for trusted devices while maintaining security. it's crucial for implementing secure, two-factor authentication flows in applications integrated with the bill api.
     */
    VALIDATE_MFA_CHALLENGE: "BILL_VALIDATE_MFA_CHALLENGE",
    /**
     * Validates the setup of multi-factor authentication (mfa) for a user's account in the bill api. this endpoint is used as the final step in the mfa setup process, confirming that the user has successfully received and can provide the validation token sent to their registered phone number. it should be called immediately after the user receives the mfa setup token via the specified method (voice call or sms). the endpoint ensures that the mfa setup is correctly configured and functional, adding an extra layer of security to the user's account. it's important to note that this endpoint does not actually enable mfa; it only validates the setup process.
     */
    VALIDATE_PHONE_FOR_MFA_SETUP: "BILL_VALIDATE_PHONE_FOR_MFA_SETUP",
    /**
     * Verifies a bank account by initiating a small deposit transaction. this endpoint is used to confirm the validity and ownership of a bank account before it can be used for funding or receiving payments. it simulates a micro-deposit process commonly used in financial systems for account verification. the api requires specifying a deposit amount, which must be between $0.01 and $0.99. this verification step is crucial for ensuring the security and accuracy of financial transactions within the bill payment system. note that in the sandbox environment, using a deposit amount of $0.50 will always result in a successful verification, allowing for easy testing and integration.
     */
    VERIFY_A_BANK_ACCOUNT: "BILL_VERIFY_A_BANK_ACCOUNT",
    /**
     * Void an existing payment. void a bill payment that has started processing and cannot be canceled (with `post /v3/payments/{paymentid}/cancel`). you can attempt to void payments made both with bill (online) and outside bill (offline). ### void a payment made with bill (online) in your /`post /v3/payments/{paymentid}/void` request: * set `paymentid` as the bill-generated id of the payment. the value begins with `stp`. * set `type` as the void payment request type * set `reason` as the reason for voiding the payment see [can i cancel or void a payables payment?](https://help.bill.com/direct/s/article/115005898063) in the bill help center to learn about the bill void payment process and timing in the production environment.
     */
    VOID_A_PAYMENT: "BILL_VOID_A_PAYMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BILL".
 */
export type BILL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BILL".
 */
export type BILL_TRIGGER_EVENTS = {}
