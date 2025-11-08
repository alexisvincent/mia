// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_ACTIVITY_DATA tool input.
 */
type ZEROBOUNCE_ACTIVITY_DATA_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to retrieve activity data for.
   */
  email?: unknown;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_ACTIVITY_DATA tool output.
 */
type ZEROBOUNCE_ACTIVITY_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active In Days
       * @description The recency of last engagement in days (30, 60, 90, 180, 365, or 365+).
       * @default null
       * @enum {string|null}
       */
      active_in_days: "30" | "60" | "90" | "180" | "365" | "365+" | null;
      /**
       * Found
       * @description Whether activity data exists for the given email address.
       */
      found: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_AI_SCORING_SINGLE tool input.
 */
type ZEROBOUNCE_AI_SCORING_SINGLE_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to retrieve an AI-generated quality score for.
   */
  email?: unknown;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_AI_SCORING_SINGLE tool output.
 */
type ZEROBOUNCE_AI_SCORING_SINGLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The email address that was scored.
       * @default null
       */
      email: string | null;
      /**
       * Error
       * @description Error message if the request was unsuccessful.
       * @default null
       */
      error: string | null;
      /**
       * Score
       * @description The AI-generated quality score for the email address.
       * @default null
       */
      score: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_ALLOW_BLOCK_LIST tool input.
 */
type ZEROBOUNCE_ALLOW_BLOCK_LIST_INPUT = {
  /**
   * Rule
   * @description Action for the filter: 'allow' to whitelist, 'block' to blacklist.
   * @enum {string}
   */
  rule?: "allow" | "block";
  /**
   * Target
   * @description Level to apply the filter: 'email', 'domain', 'mx', or 'tld'.
   * @enum {string}
   */
  target?: "email" | "domain" | "mx" | "tld";
  /**
   * Value
   * @description The email, domain, MX record, or TLD to filter.
   */
  value?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_ALLOW_BLOCK_LIST tool output.
 */
type ZEROBOUNCE_ALLOW_BLOCK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API confirmation message. E.g., 'Filter successfully added', 'Filter successfully updated', or 'Filter already exists'.
       */
      Message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_BATCH_VALIDATE_EMAILS tool input.
 */
type ZEROBOUNCE_BATCH_VALIDATE_EMAILS_INPUT = {
  /**
   * Activity Data
   * @description Include activity data in the validation results
   * @default false
   */
  activity_data: boolean | null;
  /**
   * Api Key
   * @description API key for authentication, automatically added
   */
  api_key?: string;
  /**
   * Email Batch
   * @description List of up to 200 email objects to validate
   */
  email_batch?: {
      /**
       * Email Address
       * Format: email
       * @description Email address to validate
       */
      email_address: unknown;
      /**
       * Ip Address
       * Format: ipv4
       * @default null
       */
      ip_address: unknown;
  }[];
  /**
   * Timeout
   * @description Timeout in seconds (10–120). If exceeded, emails marked unknown/greylisted
   * @default null
   */
  timeout: number | null;
  /**
   * Verify Plus
   * @description Use Verify+ validation method (overrides account setting)
   * @default false
   */
  verify_plus: boolean | null;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_BATCH_VALIDATE_EMAILS tool output.
 */
type ZEROBOUNCE_BATCH_VALIDATE_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Batch
       * @description Array of validation results for each email
       */
      email_batch: {
          /**
           * Account
           * @description Local part of the email address
           * @default null
           */
          account: string | null;
          /**
           * Active In Days
           * @description Last active time bracket in days, or null
           * @default null
           */
          active_in_days: string | null;
          /**
           * Address
           * Format: email
           * @description Validated email address
           */
          address: unknown;
          /**
           * City
           * @description City of the IP passed in, or null
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the IP passed in, or null
           * @default null
           */
          country: string | null;
          /**
           * Did You Mean
           * @description Suggested email address if typo detected
           * @default null
           */
          did_you_mean: string | null;
          /**
           * Domain
           * @description Domain of the email address
           * @default null
           */
          domain: string | null;
          /**
           * Domain Age Days
           * @description Age of the domain in days, or null
           * @default null
           */
          domain_age_days: string | null;
          /**
           * Firstname
           * @description First name of the owner, or null
           * @default null
           */
          firstname: string | null;
          /**
           * Free Email
           * @description True if from a free email provider
           */
          free_email: boolean;
          /**
           * Gender
           * @description Gender of the owner, or null
           * @default null
           */
          gender: string | null;
          /**
           * Lastname
           * @description Last name of the owner, or null
           * @default null
           */
          lastname: string | null;
          /**
           * Mx Found
           * @description True if an MX record was found for the domain
           */
          mx_found: boolean;
          /**
           * Mx Record
           * @description Preferred MX record of the domain
           * @default null
           */
          mx_record: string | null;
          /**
           * Processed At
           * @description UTC timestamp when processed
           */
          processed_at: string;
          /**
           * Region
           * @description Region/State of the IP passed in, or null
           * @default null
           */
          region: string | null;
          /**
           * Smtp Provider
           * @description SMTP provider name, or null (beta)
           * @default null
           */
          smtp_provider: string | null;
          /**
           * Status
           * @description Validation status of the email
           * @enum {string}
           */
          status: "valid" | "invalid" | "catch-all" | "unknown" | "spamtrap" | "abuse" | "do_not_mail";
          /**
           * Sub Status
           * @description Detailed sub-status of the validation result
           * @enum {string}
           */
          sub_status: "alternate" | "antispam_system" | "greylisted" | "mail_server_temporary_error" | "forcible_disconnect" | "mail_server_did_not_respond" | "timeout_exceeded" | "failed_smtp_connection" | "mailbox_quota_exceeded" | "exception_occurred" | "possible_trap" | "role_based" | "global_suppression" | "mailbox_not_found" | "no_dns_entries" | "failed_syntax_check" | "possible_typo" | "unroutable_ip_address" | "leading_period_removed" | "does_not_accept_mail" | "alias_address" | "role_based_catch_all" | "disposable" | "toxic";
          /**
           * Zipcode
           * @description Zip code of the IP passed in, or null
           * @default null
           */
          zipcode: string | null;
      }[];
      /**
       * Errors
       * @description Array of errors encountered during validation
       */
      errors: {
          /**
           * Email Address
           * @description Email address related to the error
           */
          email_address: string;
          /**
           * Error
           * @description Error message for the batch operation
           */
          error: string;
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_DELETE_FILE tool input.
 */
type ZEROBOUNCE_DELETE_FILE_INPUT = {
  /**
   * File Id
   * @description The file ID returned when uploading via sendfile API.
   */
  file_id?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DELETE_FILE tool output.
 */
type ZEROBOUNCE_DELETE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description ID of the deleted file
       */
      file_id: string;
      /**
       * File Name
       * @description Name of the deleted file
       */
      file_name: string;
      /**
       * Message
       * @description Message indicating the result of the operation
       */
      message: string;
      /**
       * Success
       * @description Indicates if the file was successfully deleted
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS tool input.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS_INPUT = {
  /**
   * File Id
   * @description The ID of the domain search job returned by the sendfile API.
   */
  file_id?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS tool output.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Complete Percentage
       * @description Completion percentage string (e.g., '100%').
       * @default null
       */
      complete_percentage: string | null;
      /**
       * File Id
       * @description Unique identifier for the uploaded file.
       * @default null
       */
      file_id: string | null;
      /**
       * File Name
       * @description Name of the file that was processed.
       * @default null
       */
      file_name: string | null;
      /**
       * File Status
       * @description Current processing status (e.g., 'Processing', 'Complete').
       * @default null
       */
      file_status: string | null;
      /**
       * Message
       * @description Error message when success is false.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the request succeeded.
       */
      success: boolean;
      /**
       * Upload Date
       * @description UTC timestamp when the file was uploaded (ISO 8601).
       * @default null
       */
      upload_date: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE tool input.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE_INPUT = {
  /**
   * File Id
   * @description The ID of the domain search job returned by the sendfile API.
   */
  file_id?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE tool output.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the results file.
       */
      content: string;
      /**
       * File Name
       * @description The name of the downloaded results file, as provided in the Content-Disposition header.
       * @default null
       */
      file_name: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE tool input.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE_INPUT = {
  /**
   * Domain Column
   * @description 1-based index of the column containing domains in the file.
   */
  domain_column?: number;
  /**
   * File
   * Format: binary
   * @description Raw contents of the CSV or TXT file to upload.
   */
  file?: string;
  /**
   * File Name
   * @description Filename including extension (e.g., 'domains.csv').
   */
  file_name?: string;
  /**
   * Has Header Row
   * @description Whether the first row of the file is a header row.
   * @default false
   */
  has_header_row: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE tool output.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description Unique identifier for the uploaded file.
       * @default null
       */
      file_id: string | null;
      /**
       * File Name
       * @description Name of the file that was accepted.
       * @default null
       */
      file_name: string | null;
      /**
       * Message
       * @description Confirmation message or list of error messages.
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the file was accepted for processing.
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_SINGLE tool input.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_SINGLE_INPUT = {
  /**
   * Company Name
   * @description The company name to search if domain is not known (e.g., 'Example Inc')
   * @default null
   */
  company_name: string | null;
  /**
   * Domain
   * @description The email domain to search (e.g., 'example.com')
   * @default null
   */
  domain: string | null;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_DOMAIN_SEARCH_SINGLE tool output.
 */
type ZEROBOUNCE_DOMAIN_SEARCH_SINGLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Name
       * @description The company name that was searched
       * @default null
       */
      company_name: string | null;
      /**
       * Confidence
       * @description Confidence level for the inferred format
       * @default null
       */
      confidence: string | null;
      /**
       * Did You Mean
       * @description Suggested correction if input domain or company was ambiguous
       * @default null
       */
      did_you_mean: string | null;
      /**
       * Domain
       * @description The domain name that was searched
       * @default null
       */
      domain: string | null;
      /**
       * Failure Reason
       * @description Reason for failure, if any
       * @default null
       */
      failure_reason: string | null;
      /**
       * Format
       * @description Inferred email format pattern for provided domain or company
       * @default null
       */
      format: string | null;
      /**
       * Other Domain Formats
       * @description List of alternative formats with confidence levels
       * @default null
       */
      other_domain_formats: {
          /**
           * Confidence
           * @description Confidence level for this format
           */
          confidence: string;
          /**
           * Format
           * @description Email address format pattern (e.g., 'first', 'first.last')
           */
          format: string;
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE tool input.
 */
type ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE_INPUT = {
  /**
   * Api Key
   * @description Your API Key, found in your ZeroBounce account.
   */
  api_key?: string;
  /**
   * File Id
   * @description The ID of the file to delete, returned by the email finder sendfile API
   */
  file_id?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE tool output.
 */
type ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description The ID of the deleted file, echoed back
       * @default null
       */
      file_id: string | null;
      /**
       * File Name
       * @description The original name of the deleted file, if available
       * @default null
       */
      file_name: string | null;
      /**
       * Message
       * @description A human-readable status message
       */
      message: string;
      /**
       * Success
       * @description True if the file was successfully deleted
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS tool input.
 */
type ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS_INPUT = {
  /**
   * File Id
   * @description The file ID returned by the Email Finder send file API
   */
  file_id?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS tool output.
 */
type ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Complete Percentage
       * @description Processing completion percentage (0-100).
       */
      complete_percentage: number;
      /**
       * Duplicate
       * @description Count of duplicate records.
       */
      duplicate: number;
      /**
       * File Id
       * @description Unique identifier for the uploaded file.
       */
      file_id: string;
      /**
       * File Name
       * @description Name of the file that was processed.
       */
      file_name: string;
      /**
       * Invalid
       * @description Count of invalid records.
       */
      invalid: number;
      /**
       * Message
       * @description Additional message or details, if any.
       * @default null
       */
      message: string | null;
      /**
       * Processed Items
       * @description Number of records processed so far.
       */
      processed_items: number;
      /**
       * Status
       * @description Current processing status (e.g., 'Processing', 'Complete', 'Failed').
       */
      status: string;
      /**
       * Total Items
       * @description Total records in the file.
       */
      total_items: number;
      /**
       * Upload Date
       * @description UTC timestamp when the file was uploaded (ISO 8601 format).
       */
      upload_date: string;
      /**
       * Valid
       * @description Count of valid records.
       */
      valid: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_SEND_FILE tool input.
 */
type ZEROBOUNCE_EMAIL_FINDER_SEND_FILE_INPUT = {
  /**
   * Domain Column
   * @description 1-based index of the column containing domains in the file.
   */
  domain_column?: number;
  /**
   * File
   * Format: binary
   * @description Raw contents of the CSV or TXT file to upload.
   */
  file?: string;
  /**
   * File Name
   * @description Filename including extension (e.g., 'emails.csv').
   */
  file_name?: string;
  /**
   * First Name Column
   * @description 1-based index of the first name column. Either this or full_name_column is required.
   * @default null
   */
  first_name_column: number | null;
  /**
   * Full Name Column
   * @description 1-based index of the full name column. Either this or first_name_column is required.
   * @default null
   */
  full_name_column: number | null;
  /**
   * Has Header Row
   * @description Whether the first row of the file is a header row.
   * @default false
   */
  has_header_row: boolean;
  /**
   * Last Name Column
   * @description 1-based index of the last name column (optional).
   * @default null
   */
  last_name_column: number | null;
  /**
   * Middle Name Column
   * @description 1-based index of the middle name column (optional).
   * @default null
   */
  middle_name_column: number | null;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_SEND_FILE tool output.
 */
type ZEROBOUNCE_EMAIL_FINDER_SEND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description Unique identifier for the uploaded file.
       * @default null
       */
      file_id: string | null;
      /**
       * File Name
       * @description Name of the file that was accepted.
       * @default null
       */
      file_name: string | null;
      /**
       * Message
       * @description Confirmation message or list of error messages.
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the file was accepted for processing.
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_SINGLE tool input.
 */
type ZEROBOUNCE_EMAIL_FINDER_SINGLE_INPUT = {
  /**
   * Company Name
   * @description The company name to search if domain is not known (e.g., 'Example Company LLC')
   * @default null
   */
  company_name: string | null;
  /**
   * Domain
   * @description The email domain to search (e.g., 'example.com')
   * @default null
   */
  domain: string | null;
  /**
   * First Name
   * @description First name of the person (optional).
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the person (optional).
   * @default null
   */
  last_name: string | null;
  /**
   * Middle Name
   * @description Middle name of the person (optional).
   * @default null
   */
  middle_name: string | null;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_EMAIL_FINDER_SINGLE tool output.
 */
type ZEROBOUNCE_EMAIL_FINDER_SINGLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Name
       * @description The company name that was searched
       * @default null
       */
      company_name: string | null;
      /**
       * Confidence
       * @description Confidence level for the inferred format
       * @default null
       */
      confidence: string | null;
      /**
       * Did You Mean
       * @description Suggested correction if input domain or company was ambiguous
       * @default null
       */
      did_you_mean: string | null;
      /**
       * Domain
       * @description The domain name that was searched
       * @default null
       */
      domain: string | null;
      /**
       * Failure Reason
       * @description Reason for failure, if any
       * @default null
       */
      failure_reason: string | null;
      /**
       * Format
       * @description Inferred email format pattern for provided domain or company
       * @default null
       */
      format: string | null;
      /**
       * Other Domain Formats
       * @description List of alternative formats with confidence levels
       * @default null
       */
      other_domain_formats: {
          /**
           * Confidence
           * @description Confidence level for this format
           */
          confidence: string;
          /**
           * Format
           * @description Email address format pattern (e.g., 'first', 'first.last')
           */
          format: string;
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_GET_API_USAGE tool input.
 */
type ZEROBOUNCE_GET_API_USAGE_INPUT = {
  /**
   * End Date
   * Format: date
   * @description End date of query in YYYY-MM-DD format.
   */
  end_date?: unknown;
  /**
   * Start Date
   * Format: date
   * @description Start date of query in YYYY-MM-DD format.
   */
  start_date?: unknown;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_GET_API_USAGE tool output.
 */
type ZEROBOUNCE_GET_API_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * End Date
       * @description End date of the queried period
       */
      end_date: string;
      /**
       * Start Date
       * @description Start date of the queried period
       */
      start_date: string;
      /**
       * Status Catch All
       * @description Total catch-all email addresses returned by the API
       */
      status_catch_all: number;
      /**
       * Status Do Not Mail
       * @description Total do not mail email addresses returned by the API
       */
      status_do_not_mail: number;
      /**
       * Status Invalid
       * @description Total invalid email addresses returned by the API
       */
      status_invalid: number;
      /**
       * Status Spamtrap
       * @description Total spamtrap email addresses returned by the API
       */
      status_spamtrap: number;
      /**
       * Status Unknown
       * @description Total unknown email addresses returned by the API
       */
      status_unknown: number;
      /**
       * Status Valid
       * @description Total valid email addresses returned by the API
       */
      status_valid: number;
      /**
       * Sub Status Alias Address
       * @description Total sub-status "alias_address"
       */
      sub_status_alias_address: number;
      /**
       * Sub Status Allowed
       * @description Total sub-status "allowed"
       */
      sub_status_allowed: number;
      /**
       * Sub Status Alternate
       * @description Total sub-status "alternate"
       */
      sub_status_alternate: number;
      /**
       * Sub Status Antispam System
       * @description Total sub-status "antispam_system"
       */
      sub_status_antispam_system: number;
      /**
       * Sub Status Blocked
       * @description Total sub-status "blocked"
       */
      sub_status_blocked: number;
      /**
       * Sub Status Disposable
       * @description Total sub-status "disposable"
       */
      sub_status_disposable: number;
      /**
       * Sub Status Does Not Accept Mail
       * @description Total sub-status "does_not_accept_mail"
       */
      sub_status_does_not_accept_mail: number;
      /**
       * Sub Status Exception Occurred
       * @description Total sub-status "exception_occurred"
       */
      sub_status_exception_occurred: number;
      /**
       * Sub Status Failed Smtp Connection
       * @description Total sub-status "failed_smtp_connection"
       */
      sub_status_failed_smtp_connection: number;
      /**
       * Sub Status Failed Syntax Check
       * @description Total sub-status "failed_syntax_check"
       */
      sub_status_failed_syntax_check: number;
      /**
       * Sub Status Forcible Disconnect
       * @description Total sub-status "forcible_disconnect"
       */
      sub_status_forcible_disconnect: number;
      /**
       * Sub Status Global Suppression
       * @description Total sub-status "global_suppression"
       */
      sub_status_global_suppression: number;
      /**
       * Sub Status Greylisted
       * @description Total sub-status "greylisted"
       */
      sub_status_greylisted: number;
      /**
       * Sub Status Leading Period Removed
       * @description Total sub-status "leading_period_removed"
       */
      sub_status_leading_period_removed: number;
      /**
       * Sub Status Mail Server Did Not Respond
       * @description Total sub-status "mail_server_did_not_respond"
       */
      sub_status_mail_server_did_not_respond: number;
      /**
       * Sub Status Mail Server Temporary Error
       * @description Total sub-status "mail_server_temporary_error"
       */
      sub_status_mail_server_temporary_error: number;
      /**
       * Sub Status Mailbox Not Found
       * @description Total sub-status "mailbox_not_found"
       */
      sub_status_mailbox_not_found: number;
      /**
       * Sub Status Mailbox Quota Exceeded
       * @description Total sub-status "mailbox_quota_exceeded"
       */
      sub_status_mailbox_quota_exceeded: number;
      /**
       * Sub Status Mx Forward
       * @description Total sub-status "mx_forward"
       */
      sub_status_mx_forward: number;
      /**
       * Sub Status No Dns Entries
       * @description Total sub-status "no_dns_entries"
       */
      sub_status_no_dns_entries: number;
      /**
       * Sub Status Possible Trap
       * @description Total sub-status "possible_trap"
       */
      sub_status_possible_trap: number;
      /**
       * Sub Status Possible Typo
       * @description Total sub-status "possible_typo"
       */
      sub_status_possible_typo: number;
      /**
       * Sub Status Role Based
       * @description Total sub-status "role_based"
       */
      sub_status_role_based: number;
      /**
       * Sub Status Role Based Catch All
       * @description Total sub-status "role_based_catch_all"
       */
      sub_status_role_based_catch_all: number;
      /**
       * Sub Status Timeout Exceeded
       * @description Total sub-status "timeout_exceeded"
       */
      sub_status_timeout_exceeded: number;
      /**
       * Sub Status Toxic
       * @description Total sub-status "toxic"
       */
      sub_status_toxic: number;
      /**
       * Sub Status Unroutable Ip Address
       * @description Total sub-status "unroutable_ip_address"
       */
      sub_status_unroutable_ip_address: number;
      /**
       * Total
       * @description Total number of times the API has been called
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_GET_CREDIT_BALANCE tool input.
 */
type ZEROBOUNCE_GET_CREDIT_BALANCE_INPUT = object;

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_GET_CREDIT_BALANCE tool output.
 */
type ZEROBOUNCE_GET_CREDIT_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Number of credits left on your account. Returns -1 if API key is invalid.
       */
      Credits: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_LIST_EVALUATOR tool input.
 */
type ZEROBOUNCE_LIST_EVALUATOR_INPUT = {
  /**
   * Email Address Column
   * @description 1-based index of the column containing email addresses.
   */
  email_address_column?: number;
  /**
   * File
   * Format: binary
   * @description Raw contents of the CSV or TXT file to upload.
   */
  file?: string;
  /**
   * File Name
   * @description Filename including extension (e.g., 'emails.csv').
   */
  file_name?: string;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_LIST_EVALUATOR tool output.
 */
type ZEROBOUNCE_LIST_EVALUATOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abuse
       * @description True if abuse addresses found.
       * @default null
       */
      abuse: boolean | null;
      /**
       * Activity Data Percentage
       * @description Percentage of emails with activity data.
       * @default null
       */
      activity_data_percentage: number | null;
      /**
       * Catch All Percentage
       * @description Percentage of catch-all emails.
       * @default null
       */
      catch_all_percentage: number | null;
      /**
       * Do Not Mail
       * @description True if do-not-mail addresses found.
       * @default null
       */
      do_not_mail: boolean | null;
      /**
       * Error Message
       * @description Error message if any.
       */
      error_message: string;
      /**
       * File Id
       * @description Unique identifier for the uploaded file.
       */
      file_id: string;
      /**
       * Invalid Percentage
       * @description Percentage of invalid emails.
       * @default null
       */
      invalid_percentage: number | null;
      /**
       * Progress
       * @description Progress percentage (0-100).
       */
      progress: number;
      /**
       * Spam Trap
       * @description True if spam-trap addresses found.
       * @default null
       */
      spam_trap: boolean | null;
      /**
       * Status
       * @description Processing status of the file (e.g., 'processing').
       */
      status: string;
      /**
       * Total Risky Percentage
       * @description Sum percentage of all risky emails.
       * @default null
       */
      total_risky_percentage: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_SEND_FILE tool input.
 */
type ZEROBOUNCE_SEND_FILE_INPUT = {
  /**
   * Email Address Column
   * @description 1-based index of the column containing the email address in the file.
   */
  email_address_column?: number;
  /**
   * File
   * Format: binary
   * @description Raw contents of the CSV or TXT file to upload.
   */
  file?: string;
  /**
   * File Name
   * @description Filename including extension (e.g., 'emails.csv').
   */
  file_name?: string;
  /**
   * First Name Column
   * @description 1-based index of the column containing the first name in the file (optional).
   * @default null
   */
  first_name_column: number | null;
  /**
   * Gender Column
   * @description 1-based index of the column containing gender in the file (optional).
   * @default null
   */
  gender_column: number | null;
  /**
   * Has Header Row
   * @description Whether the first row of the file is a header row.
   * @default false
   */
  has_header_row: boolean;
  /**
   * Ip Address Column
   * @description 1-based index of the column containing IP address in the file (optional).
   * @default null
   */
  ip_address_column: number | null;
  /**
   * Last Name Column
   * @description 1-based index of the column containing the last name in the file (optional).
   * @default null
   */
  last_name_column: number | null;
  /**
   * Remove Duplicate
   * @description Whether duplicate emails should be removed before processing.
   * @default false
   */
  remove_duplicate: boolean;
  /**
   * Return Url
   * @description Callback URL to receive notification when file processing is complete (optional).
   * @default null
   */
  return_url: string | null;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_SEND_FILE tool output.
 */
type ZEROBOUNCE_SEND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description Unique identifier for the uploaded file.
       * @default null
       */
      file_id: string | null;
      /**
       * File Name
       * @description Name of the file that was accepted.
       * @default null
       */
      file_name: string | null;
      /**
       * Message
       * @description Confirmation message or list of error messages.
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the file was accepted for processing.
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
 * Type of ZEROBOUNCE's ZEROBOUNCE_VALIDATE_EMAIL tool input.
 */
type ZEROBOUNCE_VALIDATE_EMAIL_INPUT = {
  /**
   * Credits Info
   * @description Include remaining credits info in the response.
   * @default null
   */
  credits_info: boolean | null;
  /**
   * Email
   * Format: email
   * @description The email address to validate.
   */
  email?: unknown;
  /**
   * Ip Address
   * Format: ipv4
   * @default null
   */
  ip_address: unknown;
};

/**
 * Type of ZEROBOUNCE's ZEROBOUNCE_VALIDATE_EMAIL tool output.
 */
type ZEROBOUNCE_VALIDATE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Local part of the email.
       * @default null
       */
      account: string | null;
      /**
       * Address
       * @description The validated email address.
       */
      address: string;
      /**
       * City
       * @description City if detectible.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country if detectible.
       * @default null
       */
      country: string | null;
      /**
       * Did You Mean
       * @description Suggested correction if misspelled.
       * @default null
       */
      did_you_mean: string | null;
      /**
       * Domain
       * @description Domain part of the email.
       * @default null
       */
      domain: string | null;
      /**
       * Domain Age Days
       * @description Age of the domain in days.
       * @default null
       */
      domain_age_days: string | null;
      /**
       * Firstname
       * @description Detected first name.
       * @default null
       */
      firstname: string | null;
      /**
       * Free Email
       * @description True if a free email provider.
       */
      free_email: boolean;
      /**
       * Gender
       * @description Gender if detected.
       * @default null
       */
      gender: string | null;
      /**
       * Lastname
       * @description Detected last name.
       * @default null
       */
      lastname: string | null;
      /**
       * Mx Found
       * @description Whether MX records were found.
       */
      mx_found: boolean;
      /**
       * Mx Record
       * @description MX record details.
       * @default null
       */
      mx_record: string | null;
      /**
       * Processed At
       * @description Timestamp when processing completed.
       * @default null
       */
      processed_at: string | null;
      /**
       * Region
       * @description Region if detectible.
       * @default null
       */
      region: string | null;
      /**
       * Smtp Provider
       * @description Identified SMTP provider, if available.
       * @default null
       */
      smtp_provider: string | null;
      /**
       * Status
       * @description Overall deliverability status.
       * @enum {string}
       */
      status: "valid" | "invalid" | "catch-all" | "unknown" | "spamtrap" | "do_not_mail";
      /**
       * Sub Status
       * @description More granular status or reason code.
       * @default null
       */
      sub_status: string | null;
      /**
       * Zipcode
       * @description ZIP/postal code.
       * @default null
       */
      zipcode: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ZEROBOUNCE".
 */
export type ZEROBOUNCE_TOOL_INPUTS = {
  ACTIVITY_DATA: ZEROBOUNCE_ACTIVITY_DATA_INPUT
  AI_SCORING_SINGLE: ZEROBOUNCE_AI_SCORING_SINGLE_INPUT
  ALLOW_BLOCK_LIST: ZEROBOUNCE_ALLOW_BLOCK_LIST_INPUT
  BATCH_VALIDATE_EMAILS: ZEROBOUNCE_BATCH_VALIDATE_EMAILS_INPUT
  DELETE_FILE: ZEROBOUNCE_DELETE_FILE_INPUT
  DOMAIN_SEARCH_FILE_STATUS: ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS_INPUT
  DOMAIN_SEARCH_GET_FILE: ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE_INPUT
  DOMAIN_SEARCH_SEND_FILE: ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE_INPUT
  DOMAIN_SEARCH_SINGLE: ZEROBOUNCE_DOMAIN_SEARCH_SINGLE_INPUT
  EMAIL_FINDER_DELETE_FILE: ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE_INPUT
  EMAIL_FINDER_FILE_STATUS: ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS_INPUT
  EMAIL_FINDER_SEND_FILE: ZEROBOUNCE_EMAIL_FINDER_SEND_FILE_INPUT
  EMAIL_FINDER_SINGLE: ZEROBOUNCE_EMAIL_FINDER_SINGLE_INPUT
  GET_API_USAGE: ZEROBOUNCE_GET_API_USAGE_INPUT
  GET_CREDIT_BALANCE: ZEROBOUNCE_GET_CREDIT_BALANCE_INPUT
  LIST_EVALUATOR: ZEROBOUNCE_LIST_EVALUATOR_INPUT
  SEND_FILE: ZEROBOUNCE_SEND_FILE_INPUT
  VALIDATE_EMAIL: ZEROBOUNCE_VALIDATE_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZEROBOUNCE".
 */
export type ZEROBOUNCE_TOOL_OUTPUTS = {
  ACTIVITY_DATA: ZEROBOUNCE_ACTIVITY_DATA_OUTPUT
  AI_SCORING_SINGLE: ZEROBOUNCE_AI_SCORING_SINGLE_OUTPUT
  ALLOW_BLOCK_LIST: ZEROBOUNCE_ALLOW_BLOCK_LIST_OUTPUT
  BATCH_VALIDATE_EMAILS: ZEROBOUNCE_BATCH_VALIDATE_EMAILS_OUTPUT
  DELETE_FILE: ZEROBOUNCE_DELETE_FILE_OUTPUT
  DOMAIN_SEARCH_FILE_STATUS: ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS_OUTPUT
  DOMAIN_SEARCH_GET_FILE: ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE_OUTPUT
  DOMAIN_SEARCH_SEND_FILE: ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE_OUTPUT
  DOMAIN_SEARCH_SINGLE: ZEROBOUNCE_DOMAIN_SEARCH_SINGLE_OUTPUT
  EMAIL_FINDER_DELETE_FILE: ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE_OUTPUT
  EMAIL_FINDER_FILE_STATUS: ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS_OUTPUT
  EMAIL_FINDER_SEND_FILE: ZEROBOUNCE_EMAIL_FINDER_SEND_FILE_OUTPUT
  EMAIL_FINDER_SINGLE: ZEROBOUNCE_EMAIL_FINDER_SINGLE_OUTPUT
  GET_API_USAGE: ZEROBOUNCE_GET_API_USAGE_OUTPUT
  GET_CREDIT_BALANCE: ZEROBOUNCE_GET_CREDIT_BALANCE_OUTPUT
  LIST_EVALUATOR: ZEROBOUNCE_LIST_EVALUATOR_OUTPUT
  SEND_FILE: ZEROBOUNCE_SEND_FILE_OUTPUT
  VALIDATE_EMAIL: ZEROBOUNCE_VALIDATE_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZEROBOUNCE toolkit.
 */
export const ZEROBOUNCE = {
  slug: "zerobounce",
  tools: {
    /**
     * Tool to get activity data (opens, clicks, etc.) for a given email. use after confirming the email address to gauge engagement recency.
     */
    ACTIVITY_DATA: "ZEROBOUNCE_ACTIVITY_DATA",
    /**
     * Tool to score a single email address using zerobounce ai. use when you need real-time email lead quality feedback before outreach. example prompt: "score the email mark@gmail.com."
     */
    AI_SCORING_SINGLE: "ZEROBOUNCE_AI_SCORING_SINGLE",
    /**
     * Tool to manage allowlist and blocklist for email validation. use when you need to programmatically add or modify custom filters before validating emails.
     */
    ALLOW_BLOCK_LIST: "ZEROBOUNCE_ALLOW_BLOCK_LIST",
    /**
     * Tool to validate a batch of email addresses in real time. use when you need to validate up to 200 emails at once with optional activity data.
     */
    BATCH_VALIDATE_EMAILS: "ZEROBOUNCE_BATCH_VALIDATE_EMAILS",
    /**
     * Tool to delete a file that was submitted for bulk validation. use when file status is 'complete'.
     */
    DELETE_FILE: "ZEROBOUNCE_DELETE_FILE",
    /**
     * Tool to get the processing status of a file submitted for bulk domain search. use after submitting the file to poll status.
     */
    DOMAIN_SEARCH_FILE_STATUS: "ZEROBOUNCE_DOMAIN_SEARCH_FILE_STATUS",
    /**
     * Tool to download the results file for a completed bulk domain search job. use when you have the file id and the job is complete.
     */
    DOMAIN_SEARCH_GET_FILE: "ZEROBOUNCE_DOMAIN_SEARCH_GET_FILE",
    /**
     * Tool to upload a file for bulk domain search. use when you have many domains in a csv/txt and need to lookup their details in bulk.
     */
    DOMAIN_SEARCH_SEND_FILE: "ZEROBOUNCE_DOMAIN_SEARCH_SEND_FILE",
    /**
     * Tool to identify common email address formats for a given domain. use when you need to guess email patterns for a company based on its domain.
     */
    DOMAIN_SEARCH_SINGLE: "ZEROBOUNCE_DOMAIN_SEARCH_SINGLE",
    /**
     * Tool to delete a file that was submitted for bulk email finding. use when the file processing status is 'complete' and you need to remove it.
     */
    EMAIL_FINDER_DELETE_FILE: "ZEROBOUNCE_EMAIL_FINDER_DELETE_FILE",
    /**
     * Tool to get the processing status of a file submitted for bulk email finding. use when you need to poll the progress of a bulk email-finder file upload.
     */
    EMAIL_FINDER_FILE_STATUS: "ZEROBOUNCE_EMAIL_FINDER_FILE_STATUS",
    /**
     * Tool to upload a file for bulk email finding. use when you have lists of names and domains to find emails in bulk via csv/txt upload.
     */
    EMAIL_FINDER_SEND_FILE: "ZEROBOUNCE_EMAIL_FINDER_SEND_FILE",
    /**
     * Tool to find an email address for a given person and domain. use when you need to locate a professional email from a person's name and company domain. use after confirming domain or company info.
     */
    EMAIL_FINDER_SINGLE: "ZEROBOUNCE_EMAIL_FINDER_SINGLE",
    /**
     * Tool to retrieve api usage statistics for a given period. use when you need usage metrics between two dates.
     */
    GET_API_USAGE: "ZEROBOUNCE_GET_API_USAGE",
    /**
     * Tool to retrieve your current zerobounce email validation credit balance. use when you need to monitor remaining credits to avoid service interruptions.
     */
    GET_CREDIT_BALANCE: "ZEROBOUNCE_GET_CREDIT_BALANCE",
    /**
     * Tool to evaluate the quality of an email list. use when you have a list of emails and need a quick health check before full validation.
     */
    LIST_EVALUATOR: "ZEROBOUNCE_LIST_EVALUATOR",
    /**
     * Tool to upload a file for bulk email validation. use when you need to validate large lists of emails via csv or txt file.
     */
    SEND_FILE: "ZEROBOUNCE_SEND_FILE",
    /**
     * Tool to validate a single email address in real time. use when you need to confirm deliverability and domain details before sending emails.
     */
    VALIDATE_EMAIL: "ZEROBOUNCE_VALIDATE_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZEROBOUNCE".
 */
export type ZEROBOUNCE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZEROBOUNCE".
 */
export type ZEROBOUNCE_TRIGGER_EVENTS = {}
