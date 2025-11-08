// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLEAROUT's CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN tool input.
 */
type CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN_INPUT = {
  /**
   * Query
   * @description Company name, domain, or website URL to autocomplete domains. Examples: 'amazon', 'amazon.com', 'https://amazon.com/about'.
   */
  query?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN tool output.
 */
type CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description List of domain suggestions with confidence scores
   */
  data?: {
      /**
       * Confidence Score
       * @description Confidence score between 0 and 1
       */
      confidence_score: number;
      /**
       * Domain
       * @description Company website domain
       */
      domain: string;
      /**
       * Logo Url
       * @description URL to the company logo
       */
      logo_url: string;
      /**
       * Name
       * @description Company name
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API status; 'success' when request is successful
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_BUSINESS_ACCOUNT_VERIFY tool input.
 */
type CLEAROUT_BUSINESS_ACCOUNT_VERIFY_INPUT = {
  /**
   * Email
   * Format: email
   * @description An email address to verify for a business/work account
   */
  email?: string;
  /**
   * Timeout
   * @description Request wait time in milliseconds; max 110000; default 90000
   * @default 90000
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_BUSINESS_ACCOUNT_VERIFY tool output.
 */
type CLEAROUT_BUSINESS_ACCOUNT_VERIFY_OUTPUT = {
  /**
   * BusinessAccountVerifyData
   * @description Populated only on success
   * @default null
   */
  data: {
      /**
       * Business Account
       * @description Result: 'yes' or 'no'
       */
      business_account: string;
      /**
       * Email Address
       * @description The email address that was verified
       */
      email_address: string;
      /**
       * Time Taken
       * @description Time taken by the API in milliseconds
       */
      time_taken: number;
      /**
       * Verified On
       * Format: date-time
       * @description ISO8601 datetime when verification completed
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description 'success' or 'failed'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_CATCH_ALL_VERIFY tool input.
 */
type CLEAROUT_CATCH_ALL_VERIFY_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to verify for catch-all
   */
  email?: string;
  /**
   * Timeout
   * @description Timeout in milliseconds; maximum 110000; default 90000
   * @default 90000
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_CATCH_ALL_VERIFY tool output.
 */
type CLEAROUT_CATCH_ALL_VERIFY_OUTPUT = {
  /**
   * CatchAllVerifyData
   * @description Data returned on successful verification.
   * @default null
   */
  data: {
      /**
       * Catchall
       * @description Whether the domain accepts all emails
       * @enum {string}
       */
      catchall: "yes" | "no";
      /**
       * Email Address
       * @description Echoed email address
       */
      email_address: string;
      /**
       * Time Taken
       * @description Time in milliseconds taken for verification
       */
      time_taken: number;
      /**
       * Verified On
       * @description ISO timestamp when verification was performed
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Result status
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_DISPOSABLE_VERIFY tool input.
 */
type CLEAROUT_DISPOSABLE_VERIFY_INPUT = {
  /**
   * Email
   * @description Email address to verify for disposability.
   */
  email?: string;
  /**
   * Timeout
   * @description Request wait time in milliseconds; maximum 110000; default is 90000 if omitted.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_DISPOSABLE_VERIFY tool output.
 */
type CLEAROUT_DISPOSABLE_VERIFY_OUTPUT = {
  /**
   * DisposableVerifyData
   * @description Successful response payload for disposable verification.
   * @default null
   */
  data: {
      /**
       * Disposable
       * @description Indicates if the address is disposable.
       */
      disposable: string;
      /**
       * Email Address
       * @description The email address checked.
       */
      email_address: string;
      /**
       * Time Taken
       * @description Processing time in milliseconds.
       */
      time_taken: number;
      /**
       * Verified On
       * @description Timestamp when verification occurred (ISO 8601).
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall request status.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_DOMAIN_FIND_MX tool input.
 */
type CLEAROUT_DOMAIN_FIND_MX_INPUT = {
  /**
   * Domain
   * @description Domain to resolve MX records for
   */
  domain?: string;
  /**
   * Timeout
   * @description Maximum wait time for MX resolution in milliseconds (default 90000, max 110000)
   * @default 90000
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_DOMAIN_FIND_MX tool output.
 */
type CLEAROUT_DOMAIN_FIND_MX_OUTPUT = {
  /**
   * DomainFindMxData
   * @description Resolved MX record data
   * @default null
   */
  data: {
      /**
       * Domain
       * @description Queried domain
       */
      domain: string;
      /**
       * Mx Records
       * @description MX records in priority order
       */
      mx_records: {
          /**
           * Exchange
           * @description Mail server hostname
           */
          exchange: string;
          /**
           * Priority
           * @description Priority of this MX record
           */
          priority: number;
      }[];
      /**
       * Time Taken
       * @description Time taken for lookup in milliseconds
       */
      time_taken: number;
      /**
       * Verified On
       * Format: date-time
       * @description Timestamp when resolution was performed (ISO 8601 format)
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status ("success" or "failed")
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_DOMAIN_FIND_WHOIS tool input.
 */
type CLEAROUT_DOMAIN_FIND_WHOIS_INPUT = {
  /**
   * Domain
   * @description Domain to fetch WHOIS information for, must be a non-empty string.
   */
  domain?: string;
  /**
   * Timeout
   * @description Wait time in milliseconds (max 110000; default 90000).
   * @default 90000
   */
  timeout: number;
};

/**
 * Type of CLEAROUT's CLEAROUT_DOMAIN_FIND_WHOIS tool output.
 */
type CLEAROUT_DOMAIN_FIND_WHOIS_OUTPUT = {
  /**
   * DomainFindWhoisData
   * @description WHOIS lookup data when status is 'success'
   * @default null
   */
  data: {
      /**
       * Domain
       * @description Queried domain
       */
      domain: string;
      /**
       * Time Taken
       * @description Time taken to fetch WHOIS in milliseconds
       */
      time_taken: number;
      /**
       * Verified On
       * @description Timestamp when WHOIS information was verified, in ISO format
       */
      verified_on: string;
      /**
       * Whois Record
       * @description WHOIS detailed record
       */
      whoisRecord: {
          /**
           * Admin
           * @description Administrative contact details
           */
          admin: {
              /**
               * City
               * @description Contact city
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Contact country
               * @default null
               */
              country: string | null;
              /**
               * Email
               * @description Contact email address
               * @default null
               */
              email: string | null;
              /**
               * Fax
               * @description Contact fax number
               * @default null
               */
              fax: string | null;
              /**
               * Fax Ext
               * @description Contact fax extension
               * @default null
               */
              fax_ext: string | null;
              /**
               * Id
               * @description Contact identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Contact name
               * @default null
               */
              name: string | null;
              /**
               * Organization
               * @description Contact organization
               * @default null
               */
              organization: string | null;
              /**
               * Phone
               * @description Contact phone number
               * @default null
               */
              phone: string | null;
              /**
               * Phone Ext
               * @description Contact phone extension
               * @default null
               */
              phone_ext: string | null;
              /**
               * Postal Code
               * @description Contact postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * State
               * @description Contact state
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Contact street address
               * @default null
               */
              street: string | null;
          };
          /**
           * Dnssec
           * @description DNSSEC information
           * @default null
           */
          dnssec: string | null;
          /**
           * Domain
           * @description WHOIS domain record details
           */
          domain: {
              /**
               * Created Date
               * @description Domain creation date in ISO format
               */
              created_date: string;
              /**
               * Id
               * @description Domain identifier
               */
              id: string;
              /**
               * Name
               * @description Domain name
               */
              name: string;
              /**
               * Status
               * @description Object of EPP statuses keyed by status type
               */
              status: {
                  [key: string]: string;
              };
          };
          /**
           * Last Update Whois Database
           * @description Last WHOIS DB update timestamp
           * @default null
           */
          last_update_whois_database: string | null;
          /**
           * Nameservers
           * @description List of nameservers
           */
          nameservers: string[];
          /**
           * Notice
           * @description WHOIS notice text
           * @default null
           */
          notice: string | null;
          /**
           * Registrant
           * @description Registrant contact details
           */
          registrant: {
              /**
               * City
               * @description Contact city
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Contact country
               * @default null
               */
              country: string | null;
              /**
               * Email
               * @description Contact email address
               * @default null
               */
              email: string | null;
              /**
               * Fax
               * @description Contact fax number
               * @default null
               */
              fax: string | null;
              /**
               * Fax Ext
               * @description Contact fax extension
               * @default null
               */
              fax_ext: string | null;
              /**
               * Id
               * @description Contact identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Contact name
               * @default null
               */
              name: string | null;
              /**
               * Organization
               * @description Contact organization
               * @default null
               */
              organization: string | null;
              /**
               * Phone
               * @description Contact phone number
               * @default null
               */
              phone: string | null;
              /**
               * Phone Ext
               * @description Contact phone extension
               * @default null
               */
              phone_ext: string | null;
              /**
               * Postal Code
               * @description Contact postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * State
               * @description Contact state
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Contact street address
               * @default null
               */
              street: string | null;
          };
          /**
           * Registrar
           * @description Registrar details
           */
          registrar: {
              /**
               * Abuse Contact Email
               * @description Registrar abuse contact email
               */
              abuse_contact_email: string;
              /**
               * Abuse Contact Phone
               * @description Registrar abuse contact phone number
               */
              abuse_contact_phone: string;
              /**
               * Name
               * @description Registrar name
               */
              name: string;
              /**
               * Registration Expiry Date
               * @description Domain registration expiry date in ISO format
               */
              registration_expiry_date: string;
              /**
               * Url
               * @description Registrar URL
               */
              url: string;
              /**
               * Whois Server
               * @description WHOIS server
               */
              whois_server: string;
          };
          /**
           * Tech
           * @description Technical contact details
           */
          tech: {
              /**
               * City
               * @description Contact city
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Contact country
               * @default null
               */
              country: string | null;
              /**
               * Email
               * @description Contact email address
               * @default null
               */
              email: string | null;
              /**
               * Fax
               * @description Contact fax number
               * @default null
               */
              fax: string | null;
              /**
               * Fax Ext
               * @description Contact fax extension
               * @default null
               */
              fax_ext: string | null;
              /**
               * Id
               * @description Contact identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Contact name
               * @default null
               */
              name: string | null;
              /**
               * Organization
               * @description Contact organization
               * @default null
               */
              organization: string | null;
              /**
               * Phone
               * @description Contact phone number
               * @default null
               */
              phone: string | null;
              /**
               * Phone Ext
               * @description Contact phone extension
               * @default null
               */
              phone_ext: string | null;
              /**
               * Postal Code
               * @description Contact postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * State
               * @description Contact state
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Contact street address
               * @default null
               */
              street: string | null;
          };
          /**
           * Term Of Use
           * @description Terms of use text
           * @default null
           */
          term_of_use: string | null;
      };
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status, e.g., 'success' or 'failed'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_FINDER_BULK tool input.
 */
type CLEAROUT_EMAIL_FINDER_BULK_INPUT = {
  /**
   * FileUploadable
   * @description Contacts file to upload for bulk email finding. Supported extensions: .csv, .xlsx.
   */
  file?: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  };
  /**
   * Ignore Duplicate File
   * @description Whether to allow uploading a file with the same name and size as a recent upload. Defaults to 'false'. Set to 'true' to override duplicates.
   * @default false
   * @enum {string}
   */
  ignore_duplicate_file: "true" | "false";
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_FINDER_BULK tool output.
 */
type CLEAROUT_EMAIL_FINDER_BULK_OUTPUT = {
  /**
   * EmailFinderBulkData
   * @description Data returned when bulk email finder list is created successfully.
   * @default null
   */
  data: {
      /**
       * List Id
       * @description Identifier of the created bulk email finder list.
       */
      list_id: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Indicates whether the request succeeded or failed.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * BadRequestError
   * @description Populated on validation failure; details of invalid parameters.
   * @default null
   */
  validation: {
      /**
       * Message
       * @description Summary of validation failure.
       */
      message: string;
      /**
       * Reasons
       * @description Detailed list of field-level validation errors.
       */
      reasons: {
          /**
           * Field
           * @description Name of the field with validation error.
           */
          field: string;
          /**
           * Location
           * @description Location of the field (e.g., body).
           */
          location: string;
          /**
           * Messages
           * @description Validation error messages for the field.
           */
          messages: string[];
          /**
           * Types
           * @description Types of validation errors encountered.
           */
          types: string[];
      }[];
  } | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_FINDER_BULK_CANCEL tool input.
 */
type CLEAROUT_EMAIL_FINDER_BULK_CANCEL_INPUT = {
  /**
   * List Id
   * @description The 24-character hex identifier for the bulk email finder job to cancel.
   */
  list_id?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_FINDER_BULK_CANCEL tool output.
 */
type CLEAROUT_EMAIL_FINDER_BULK_CANCEL_OUTPUT = {
  /**
   * BulkCancelData
   * @description Details about the canceled job (present if status == 'success')
   * @default null
   */
  data: {
      /**
       * Created On
       * @description ISO 8601 timestamp when job was created
       */
      created_on: string;
      /**
       * Name
       * @description Original job/list file name
       */
      name: string;
      /**
       * Source
       * @description Source of the job, e.g., 'upload'
       */
      source: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall status of the cancel request
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD tool input.
 */
type CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD_INPUT = {
  /**
   * List Id
   * @description The List ID returned by the bulk email finder response used to retrieve the result file.
   */
  list_id?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD tool output.
 */
type CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD_OUTPUT = {
  /**
   * EmailFinderBulkResultDownloadData
   * @description Data object containing the download URL.
   * @default null
   */
  data: {
      /**
       * Url
       * Format: uri
       * @description URL of the result file to download.
       */
      url: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall status of the request
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK tool input.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_INPUT = {
  /**
   * FileUploadable
   * @description Email list file to verify in bulk. Supported extensions: .csv, .xlsx.
   * @default null
   */
  file: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Mimetype
   * @description MIME type of the file when using file_path variant.
   * @default null
   */
  file_mimetype: string | null;
  /**
   * File Name
   * @description Name of the file when using file_path variant.
   * @default null
   */
  file_name: string | null;
  /**
   * File Path
   * @description Absolute path to a local file to upload when FileUploadable is not available.
   * @default null
   */
  file_path: string | null;
  /**
   * Ignore Duplicate File
   * @description Whether to allow uploading a file that matches a recent upload (same name & size). Defaults to 'false'. Set to 'true' to override duplicates.
   * @default false
   * @enum {string}
   */
  ignore_duplicate_file: "true" | "false";
  /**
   * Optimize
   * @description Optimization mode for bulk verification. 'highest_accuracy' prioritizes precision; 'fastest_turnaround' prioritizes speed. Defaults to 'highest_accuracy'.
   * @default highest_accuracy
   * @enum {string}
   */
  optimize: "highest_accuracy" | "fastest_turnaround";
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK tool output.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_OUTPUT = {
  /**
   * EmailVerifyBulkData
   * @description Data returned when bulk email verification list is created successfully.
   * @default null
   */
  data: {
      /**
       * List Id
       * @description Identifier of the created bulk email verification list.
       */
      list_id: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Indicates whether the request succeeded or failed.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * BadRequestError
   * @description Populated on validation failure; details of invalid parameters.
   * @default null
   */
  validation: {
      /**
       * Message
       * @description Summary of validation failure.
       */
      message: string;
      /**
       * Reasons
       * @description Detailed list of field-level validation errors.
       */
      reasons: {
          /**
           * Field
           * @description Name of the field with validation error.
           */
          field: string;
          /**
           * Location
           * @description Location of the field (e.g., body).
           */
          location: string;
          /**
           * Messages
           * @description Validation error messages for the field.
           */
          messages: string[];
          /**
           * Types
           * @description Types of validation errors encountered.
           */
          types: string[];
      }[];
  } | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK_CANCEL tool input.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_CANCEL_INPUT = {
  /**
   * List Id
   * @description The 24-character hex identifier for the bulk email verification job to cancel.
   */
  list_id?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK_CANCEL tool output.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_CANCEL_OUTPUT = {
  /**
   * BulkCancelData
   * @description Details about the canceled job (present if status == 'success')
   * @default null
   */
  data: {
      /**
       * Created On
       * @description ISO 8601 timestamp when job was created
       */
      created_on: string;
      /**
       * Name
       * @description Original list file name or identifier
       */
      name: string;
      /**
       * Source
       * @description Source of the job, e.g., 'upload'
       */
      source: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall status of the cancel request
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS tool input.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS_INPUT = {
  /**
   * List Id
   * @description Identifier of the bulk email verification job returned by the bulk upload endpoint
   * @example 5cc81d0589c374444f03a5a4
   */
  list_id?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS tool output.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS_OUTPUT = {
  /**
   * ProgressData
   * @description Data payload when the bulk email verification job is running or completed.
   * @default null
   */
  data: {
      /**
       * Percentile
       * @description Percentage of emails verified so far (0100)
       * @example 89
       */
      percentile: number;
      /**
       * Progress Status
       * @description Current status of the bulk verification job
       * @example running
       * @enum {string}
       */
      progress_status: "running" | "completed";
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall request status
   * @example success
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD tool input.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD_INPUT = {
  /**
   * List Id
   * @description Bulk verification list ID returned by the Clearout bulk verification endpoint.
   */
  list_id?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD tool output.
 */
type CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD_OUTPUT = {
  /**
   * EmailVerifyBulkResultDownloadData
   * @description Data object containing the download URL for bulk results.
   * @default null
   */
  data: {
      /**
       * Url
       * Format: uri
       * @description Pre-signed URL to download the bulk verification results file.
       */
      url: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall request status.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_GET_CREDITS tool input.
 */
type CLEAROUT_EMAIL_VERIFY_GET_CREDITS_INPUT = object;

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_GET_CREDITS tool output.
 */
type CLEAROUT_EMAIL_VERIFY_GET_CREDITS_OUTPUT = {
  /**
   * EmailVerifyGetCreditsData
   * @description Payload containing credit information
   * @default null
   */
  data: {
      /**
       * Available Credits
       * @description Total available credits for email verification
       */
      available_credits: number;
      /**
       * Credits
       * @description Detailed breakdown of credit components
       */
      credits: {
          /**
           * Available
           * @description Number of credits currently available
           */
          available: number;
          /**
           * Available Daily Verify Limit
           * @description Remaining daily verify limit, null if unlimited
           * @default null
           */
          available_daily_verify_limit: number | null;
          /**
           * Reset Daily Verify Limit Date
           * @description ISO8601 timestamp when daily verify limit resets
           */
          reset_daily_verify_limit_date: string;
          /**
           * Subs
           * @description Subscribed credits if applicable, null if none
           * @default null
           */
          subs: number | null;
          /**
           * Total
           * @description Total number of credits allocated
           */
          total: number;
      };
      /**
       * Low Credit Balance Min Threshold
       * @description Threshold under which balance is considered low
       */
      low_credit_balance_min_threshold: number;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description 'success' or 'failed'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_INSTANT tool input.
 */
type CLEAROUT_EMAIL_VERIFY_INSTANT_INPUT = {
  /**
   * Email
   * @description Email address to verify.
   */
  email?: string;
  /**
   * Timeout
   * @description Request wait time in milliseconds; default is 130000, max is 180000.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_EMAIL_VERIFY_INSTANT tool output.
 */
type CLEAROUT_EMAIL_VERIFY_INSTANT_OUTPUT = {
  /**
   * DataModel
   * @description Result payload when status is success.
   * @default null
   */
  data: {
      /**
       * Ai Verdict
       * @description AI-generated verdict on validity.
       */
      ai_verdict: string;
      /**
       * Blacklist Info
       * @description Blacklist check results.
       */
      blacklist_info: unknown[];
      /**
       * Bounce Type
       * @description Bounce type if applicable.
       * @default null
       */
      bounce_type: string | null;
      /**
       * Detail Info
       * @description Detailed backend information.
       */
      detail_info: {
          /**
           * Account
           * @description Account type (e.g., personal or business).
           */
          account: string;
          /**
           * Domain
           * @description Domain part of the email.
           */
          domain: string;
          /**
           * Mx Record
           * @description MX record for the domain.
           */
          mx_record: string;
          /**
           * Smtp Provider
           * @description SMTP provider name.
           */
          smtp_provider: string;
      };
      /**
       * Disposable
       * @description Whether this is a disposable email.
       * @enum {string}
       */
      disposable: "yes" | "no";
      /**
       * Email Address
       * @description Verified email address.
       */
      email_address: string;
      /**
       * Free
       * @description Whether this is a free email provider.
       * @enum {string}
       */
      free: "yes" | "no";
      /**
       * Gibberish
       * @description Whether email looks like gibberish.
       * @enum {string}
       */
      gibberish: "yes" | "no";
      /**
       * Profile
       * @description User profile data if available.
       * @default null
       */
      profile: unknown;
      /**
       * Role
       * @description Whether this is a role-based address.
       * @enum {string}
       */
      role: "yes" | "no";
      /**
       * Safe To Send
       * @description Is it safe to send to this email.
       * @enum {string}
       */
      safe_to_send: "yes" | "no";
      /**
       * Status
       * @description Verification status (e.g., valid, invalid).
       */
      status: string;
      /**
       * Sub Status
       * @description Detailed sub-status code and description.
       */
      sub_status: {
          /**
           * Code
           * @description Numeric sub-status code.
           */
          code: number;
          /**
           * Desc
           * @description Description of sub-status.
           */
          desc: string;
      };
      /**
       * Suggested Email Address
       * @description Suggested correction if provided.
       * @default null
       */
      suggested_email_address: string | null;
      /**
       * Time Taken
       * @description Time taken by verification in milliseconds.
       */
      time_taken: number;
      /**
       * Verified On
       * @description ISO 8601 timestamp of verification.
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_FREE_ACCOUNT_VERIFY tool input.
 */
type CLEAROUT_FREE_ACCOUNT_VERIFY_INPUT = {
  /**
   * Email
   * Format: email
   * @description An email address to verify for a free email service provider
   */
  email?: string;
  /**
   * Timeout
   * @description Request wait time in milliseconds; max 110000; default 90000
   * @default 90000
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_FREE_ACCOUNT_VERIFY tool output.
 */
type CLEAROUT_FREE_ACCOUNT_VERIFY_OUTPUT = {
  /**
   * FreeAccountVerifyData
   * @description Successful response payload for free account verification.
   * @default null
   */
  data: {
      /**
       * Email Address
       * @description The email address that was verified
       */
      email_address: string;
      /**
       * Free Account
       * @description Result: 'yes' or 'no' indicating free provider
       */
      free_account: string;
      /**
       * Time Taken
       * @description Time taken by the API in milliseconds
       */
      time_taken: number;
      /**
       * Verified On
       * @description ISO8601 datetime when verification completed
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall request status.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_GIBBERISH_ACCOUNT_VERIFY tool input.
 */
type CLEAROUT_GIBBERISH_ACCOUNT_VERIFY_INPUT = {
  /**
   * Email
   * @description Email address to verify for gibberish.
   */
  email?: string;
  /**
   * Timeout
   * @description Request wait time in milliseconds; default is 90000; maximum is 110000.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_GIBBERISH_ACCOUNT_VERIFY tool output.
 */
type CLEAROUT_GIBBERISH_ACCOUNT_VERIFY_OUTPUT = {
  /**
   * GibberishAccountVerifyData
   * @description Successful response payload for gibberish verification.
   * @default null
   */
  data: {
      /**
       * Email Address
       * @description The email address checked.
       */
      email_address: string;
      /**
       * Gibberish
       * @description Indicates if the address is gibberish ('yes' or 'no').
       */
      gibberish: string;
      /**
       * Time Taken
       * @description Processing time in milliseconds.
       */
      time_taken: number;
      /**
       * Verified On
       * @description Timestamp when verification occurred (ISO 8601).
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall request status ('success' or 'failed').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN tool input.
 */
type CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN_INPUT = {
  /**
   * Name
   * @description Domain name to find the company profile with contact info.
   */
  name?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN tool output.
 */
type CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN_OUTPUT = {
  /**
   * ReverseLookupData
   * @description Result payload when status is success
   * @default null
   */
  data: {
      /**
       * Lead
       * @description Company record; empty object if not found
       */
      lead: {
          /**
           * Address
           * @description Company address info
           * @default null
           */
          addresses: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description ISO country code
               * @default null
               */
              country_code: string | null;
              /**
               * Full Address
               * @description Full address string of the company
               * @default null
               */
              full_address: string | null;
          } | null;
          /**
           * Id
           * @description Company ID
           * @default null
           */
          id: string | null;
          /**
           * Linkedin Url
           * @description Company LinkedIn URL
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Name
           * @description Company name
           * @default null
           */
          name: string | null;
          /**
           * Profile Picture
           * @description URL to company logo/image
           * @default null
           */
          profile_picture: string | null;
          /**
           * Type
           * @description Entity type, usually 'company'
           * @default null
           */
          type: string | null;
      };
      /**
       * Name
       * @description Echo of the queried domain
       */
      name: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL tool input.
 */
type CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL_INPUT = {
  /**
   * Email Address
   * @description Email address to look up the person profile
   */
  email_address?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL tool output.
 */
type CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Response payload when status is 'success'
   * @default null
   */
  data: {
      /**
       * Email Address
       * @description Lookup email address
       */
      email_address: string;
      /**
       * Lead
       * @description Person details; empty if not found
       * @default null
       */
      lead: {
          /**
           * Addresses
           * @description Known addresses for the person
           * @default null
           */
          addresses: {
              /**
               * City
               * @description City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description ISO 2-letter country code
               * @default null
               */
              country_code: string | null;
              /**
               * Full Address
               * @description Full mailing address
               * @default null
               */
              full_address: string | null;
              /**
               * State
               * @description State or region
               * @default null
               */
              state: string | null;
          }[] | null;
          /**
           * Constructed Title
           * @description Title constructed from profile data
           * @default null
           */
          constructed_title: string | null;
          /**
           * Id
           * @description Unique identifier for the person record
           */
          id: string;
          /**
           * Linkedin Url
           * @description URL to the LinkedIn profile
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Name
           * @description Person's full name
           * @default null
           */
          name: string | null;
          /**
           * Profile Picture
           * @description URL to the profile picture
           * @default null
           */
          profile_picture: string | null;
          /**
           * Title
           * @description Current job title
           * @default null
           */
          title: string | null;
          /**
           * Total Experience In Months
           * @description Total professional experience in months
           * @default null
           */
          total_experience_in_months: number | null;
          /**
           * Type
           * @description Record type, always 'person'
           */
          type: string;
      } | null;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall API status
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN tool input.
 */
type CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN_INPUT = {
  /**
   * Url
   * Format: uri
   * @description LinkedIn profile URL of the person (e.g., https://www.linkedin.com/in/williamhgates/).
   */
  url?: string;
};

/**
 * Type of CLEAROUT's CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN tool output.
 */
type CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN_OUTPUT = {
  /**
   * DataModel
   * @description Successfully returned data.
   * @default null
   */
  data: {
      /**
       * Lead
       * @description Person record; empty if not found.
       * @default null
       */
      lead: {
          /**
           * Addresses
           * @description List of addresses associated with the person.
           */
          addresses: {
              /**
               * City
               * @description City.
               */
              city: string;
              /**
               * Country
               * @description Country.
               */
              country: string;
              /**
               * Country Code
               * @description Country code.
               */
              country_code: string;
              /**
               * Full Address
               * @description Full address.
               */
              full_address: string;
              /**
               * State
               * @description State.
               */
              state: string;
          }[];
          /**
           * Contructed Title
           * @description Constructed title of the person.
           */
          contructed_title: string;
          /**
           * Id
           * @description Unique identifier of the lead.
           */
          id: string;
          /**
           * Linkedin Url
           * @description LinkedIn profile URL.
           */
          linkedin_url: string;
          /**
           * Name
           * @description Person's full name.
           */
          name: string;
          /**
           * Profile Picture
           * @description URL of profile picture.
           */
          profile_picture: string;
          /**
           * Title
           * @description Current job title.
           */
          title: string;
          /**
           * Total Experience In Months
           * @description Total experience in months.
           */
          total_experience_in_months: number;
          /**
           * Type
           * @description Type of record, typically 'person'.
           */
          type: string;
      } | null;
      /**
       * Url
       * @description Provided LinkedIn URL, echoed back if lead is empty.
       */
      url: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLEAROUT's CLEAROUT_ROLE_ACCOUNT_VERIFY tool input.
 */
type CLEAROUT_ROLE_ACCOUNT_VERIFY_INPUT = {
  /**
   * Email
   * @description Email address to verify (e.g., support@company.com).
   */
  email?: string;
  /**
   * Timeout
   * @description Optional timeout in milliseconds; default is 90000, max is 110000.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of CLEAROUT's CLEAROUT_ROLE_ACCOUNT_VERIFY tool output.
 */
type CLEAROUT_ROLE_ACCOUNT_VERIFY_OUTPUT = {
  /**
   * RoleAccountVerifyData
   * @description Success payload for role-account verification.
   * @default null
   */
  data: {
      /**
       * Email Address
       * @description The checked email address.
       */
      email_address: string;
      /**
       * Role Account
       * @description Indicates if the address is role-based ('yes' or 'no').
       * @enum {string}
       */
      role_account: "yes" | "no";
      /**
       * Time Taken
       * @description Time in milliseconds taken for verification.
       */
      time_taken: number;
      /**
       * Verified On
       * @description ISO timestamp when verification occurred.
       */
      verified_on: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status.
   * @enum {string}
   */
  status?: "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CLEAROUT".
 */
export type CLEAROUT_TOOL_INPUTS = {
  AUTOCOMPLETE_COMPANY_TO_DOMAIN: CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN_INPUT
  BUSINESS_ACCOUNT_VERIFY: CLEAROUT_BUSINESS_ACCOUNT_VERIFY_INPUT
  CATCH_ALL_VERIFY: CLEAROUT_CATCH_ALL_VERIFY_INPUT
  DISPOSABLE_VERIFY: CLEAROUT_DISPOSABLE_VERIFY_INPUT
  DOMAIN_FIND_MX: CLEAROUT_DOMAIN_FIND_MX_INPUT
  DOMAIN_FIND_WHOIS: CLEAROUT_DOMAIN_FIND_WHOIS_INPUT
  EMAIL_FINDER_BULK: CLEAROUT_EMAIL_FINDER_BULK_INPUT
  EMAIL_FINDER_BULK_CANCEL: CLEAROUT_EMAIL_FINDER_BULK_CANCEL_INPUT
  EMAIL_FINDER_BULK_RESULT_DOWNLOAD: CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD_INPUT
  EMAIL_VERIFY_BULK: CLEAROUT_EMAIL_VERIFY_BULK_INPUT
  EMAIL_VERIFY_BULK_CANCEL: CLEAROUT_EMAIL_VERIFY_BULK_CANCEL_INPUT
  EMAIL_VERIFY_BULK_PROGRESS_STATUS: CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS_INPUT
  EMAIL_VERIFY_BULK_RESULT_DOWNLOAD: CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD_INPUT
  EMAIL_VERIFY_GET_CREDITS: CLEAROUT_EMAIL_VERIFY_GET_CREDITS_INPUT
  EMAIL_VERIFY_INSTANT: CLEAROUT_EMAIL_VERIFY_INSTANT_INPUT
  FREE_ACCOUNT_VERIFY: CLEAROUT_FREE_ACCOUNT_VERIFY_INPUT
  GIBBERISH_ACCOUNT_VERIFY: CLEAROUT_GIBBERISH_ACCOUNT_VERIFY_INPUT
  REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN: CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN_INPUT
  REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL: CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL_INPUT
  REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN: CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN_INPUT
  ROLE_ACCOUNT_VERIFY: CLEAROUT_ROLE_ACCOUNT_VERIFY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLEAROUT".
 */
export type CLEAROUT_TOOL_OUTPUTS = {
  AUTOCOMPLETE_COMPANY_TO_DOMAIN: CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN_OUTPUT
  BUSINESS_ACCOUNT_VERIFY: CLEAROUT_BUSINESS_ACCOUNT_VERIFY_OUTPUT
  CATCH_ALL_VERIFY: CLEAROUT_CATCH_ALL_VERIFY_OUTPUT
  DISPOSABLE_VERIFY: CLEAROUT_DISPOSABLE_VERIFY_OUTPUT
  DOMAIN_FIND_MX: CLEAROUT_DOMAIN_FIND_MX_OUTPUT
  DOMAIN_FIND_WHOIS: CLEAROUT_DOMAIN_FIND_WHOIS_OUTPUT
  EMAIL_FINDER_BULK: CLEAROUT_EMAIL_FINDER_BULK_OUTPUT
  EMAIL_FINDER_BULK_CANCEL: CLEAROUT_EMAIL_FINDER_BULK_CANCEL_OUTPUT
  EMAIL_FINDER_BULK_RESULT_DOWNLOAD: CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD_OUTPUT
  EMAIL_VERIFY_BULK: CLEAROUT_EMAIL_VERIFY_BULK_OUTPUT
  EMAIL_VERIFY_BULK_CANCEL: CLEAROUT_EMAIL_VERIFY_BULK_CANCEL_OUTPUT
  EMAIL_VERIFY_BULK_PROGRESS_STATUS: CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS_OUTPUT
  EMAIL_VERIFY_BULK_RESULT_DOWNLOAD: CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD_OUTPUT
  EMAIL_VERIFY_GET_CREDITS: CLEAROUT_EMAIL_VERIFY_GET_CREDITS_OUTPUT
  EMAIL_VERIFY_INSTANT: CLEAROUT_EMAIL_VERIFY_INSTANT_OUTPUT
  FREE_ACCOUNT_VERIFY: CLEAROUT_FREE_ACCOUNT_VERIFY_OUTPUT
  GIBBERISH_ACCOUNT_VERIFY: CLEAROUT_GIBBERISH_ACCOUNT_VERIFY_OUTPUT
  REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN: CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN_OUTPUT
  REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL: CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL_OUTPUT
  REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN: CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN_OUTPUT
  ROLE_ACCOUNT_VERIFY: CLEAROUT_ROLE_ACCOUNT_VERIFY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLEAROUT toolkit.
 */
export const CLEAROUT = {
  slug: "clearout",
  tools: {
    /**
     * Tool to autocomplete company names to probable domains with confidence scores. Use after obtaining a company name or URL to get suggestions.
     */
    AUTOCOMPLETE_COMPANY_TO_DOMAIN: "CLEAROUT_AUTOCOMPLETE_COMPANY_TO_DOMAIN",
    /**
     * Tool to check if an email belongs to a business/work account. Use when validating corporate emails before onboarding.
     */
    BUSINESS_ACCOUNT_VERIFY: "CLEAROUT_BUSINESS_ACCOUNT_VERIFY",
    /**
     * Tool to check if an email domain is catch-all. Use after confirming email validity.
     */
    CATCH_ALL_VERIFY: "CLEAROUT_CATCH_ALL_VERIFY",
    /**
     * Tool to check if an email is from a disposable provider. Use after acquiring an email address.
     */
    DISPOSABLE_VERIFY: "CLEAROUT_DISPOSABLE_VERIFY",
    /**
     * Tool to retrieve MX records for a domain in priority order. Use when you need to find a domain's mail servers (e.g., for email routing setup).
     */
    DOMAIN_FIND_MX: "CLEAROUT_DOMAIN_FIND_MX",
    /**
     * Tool to fetch WHOIS record for a domain. Use when you need WHOIS data for a domain.
     */
    DOMAIN_FIND_WHOIS: "CLEAROUT_DOMAIN_FIND_WHOIS",
    /**
     * Tool to upload a CSV or XLSX contacts file for bulk email finding. Use when you need to find emails for a list of contacts in bulk.
     */
    EMAIL_FINDER_BULK: "CLEAROUT_EMAIL_FINDER_BULK",
    /**
     * Tool to cancel a running bulk email finder job. Use when you need to stop an in-progress list scan before completion.
     */
    EMAIL_FINDER_BULK_CANCEL: "CLEAROUT_EMAIL_FINDER_BULK_CANCEL",
    /**
     * Tool to generate a bulk email finder result download URL. Use after confirming bulk job completion to retrieve the result file link.
     */
    EMAIL_FINDER_BULK_RESULT_DOWNLOAD: "CLEAROUT_EMAIL_FINDER_BULK_RESULT_DOWNLOAD",
    /**
     * Tool to upload a CSV or XLSX file for bulk email verification. Use when you have a list of emails to verify in bulk.
     */
    EMAIL_VERIFY_BULK: "CLEAROUT_EMAIL_VERIFY_BULK",
    /**
     * Tool to cancel a running bulk email verification job. Use when you need to stop an in-progress list before completion.
     */
    EMAIL_VERIFY_BULK_CANCEL: "CLEAROUT_EMAIL_VERIFY_BULK_CANCEL",
    /**
     * Tool to retrieve progress for a bulk email verification job. Use after initiating a bulk verification to poll its state and percent complete.
     */
    EMAIL_VERIFY_BULK_PROGRESS_STATUS: "CLEAROUT_EMAIL_VERIFY_BULK_PROGRESS_STATUS",
    /**
     * Tool to obtain a temporary URL for bulk email verification results. Use after completing a bulk verification job to download the results file.
     */
    EMAIL_VERIFY_BULK_RESULT_DOWNLOAD: "CLEAROUT_EMAIL_VERIFY_BULK_RESULT_DOWNLOAD",
    /**
     * Tool to fetch available email verification credits. Use when checking remaining credits before performing email verifications.
     */
    EMAIL_VERIFY_GET_CREDITS: "CLEAROUT_EMAIL_VERIFY_GET_CREDITS",
    /**
     * Tool to instantly verify a single email address. Use when you need real-time validation before processing an email.
     */
    EMAIL_VERIFY_INSTANT: "CLEAROUT_EMAIL_VERIFY_INSTANT",
    /**
     * Tool to detect if an email is from a free email service provider. Use after confirming the email format.
     */
    FREE_ACCOUNT_VERIFY: "CLEAROUT_FREE_ACCOUNT_VERIFY",
    /**
     * Tool to verify if an email address is gibberish. Use when filtering out nonsensical or invalid-looking emails.
     */
    GIBBERISH_ACCOUNT_VERIFY: "CLEAROUT_GIBBERISH_ACCOUNT_VERIFY",
    /**
     * Tool to find company information by domain. Use when you need to retrieve a company's profile and contact details based on its domain.
     */
    REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN: "CLEAROUT_REVERSE_LOOKUP_FIND_COMPANY_VIA_DOMAIN",
    /**
     * Tool to retrieve a person’s profile from an email address. Use when you want to enrich a valid email with associated person details.
     */
    REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL: "CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_EMAIL",
    /**
     * Tool to discover person information via a LinkedIn profile URL. Use when you need to retrieve person’s profile details from a LinkedIn URL.
     */
    REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN: "CLEAROUT_REVERSE_LOOKUP_FIND_PERSON_VIA_LINKED_IN",
    /**
     * Tool to determine if an email is a role-based account. Use when identifying group mailboxes (e.g., support@) before sending targeted communications.
     */
    ROLE_ACCOUNT_VERIFY: "CLEAROUT_ROLE_ACCOUNT_VERIFY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLEAROUT".
 */
export type CLEAROUT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLEAROUT".
 */
export type CLEAROUT_TRIGGER_EVENTS = {}
