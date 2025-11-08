// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_ADD_COMMENT tool input.
 */
type VIRUSTOTAL_ADD_COMMENT_INPUT = {
  /**
   * Domain
   * @description Domain name to comment on. Mutually exclusive with file, url, and ip_address.
   * @default null
   */
  domain: string | null;
  /**
   * File
   * @description SHA-256 hash of the file to comment on. Mutually exclusive with url, domain, and ip_address.
   * @default null
   */
  file: string | null;
  /**
   * Ip Address
   * @description IP address to comment on. Mutually exclusive with file, url, and domain.
   * @default null
   */
  ip_address: string | null;
  /**
   * Text
   * @description The comment text to add.
   */
  text?: string;
  /**
   * Url
   * @description URL resource identifier to comment on. Mutually exclusive with file, domain, and ip_address.
   * @default null
   */
  url: string | null;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_ADD_COMMENT tool output.
 */
type VIRUSTOTAL_ADD_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Created comment data.
   */
  data?: {
      /**
       * Attributes
       * @description Comment attributes.
       */
      attributes: {
          /**
           * Author
           * @description Details of the comment author.
           */
          author: {
              /**
               * Username
               * @description Username of the comment author.
               */
              username: string;
          };
          /**
           * Date
           * @description Unix timestamp when the comment was added.
           */
          date: number;
          /**
           * Text
           * @description Text of the comment.
           */
          text: string;
          /**
           * Votes
           * @description Voting statistics for the comment.
           */
          votes: {
              /**
               * Helpful Votes
               * @description Number of helpful votes.
               */
              helpful_votes: number;
              /**
               * Total Votes
               * @description Total number of votes.
               */
              total_votes: number;
          };
      };
      /**
       * Id
       * @description Identifier of the comment.
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'comment'.
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_ADD_VOTE tool input.
 */
type VIRUSTOTAL_ADD_VOTE_INPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Resource
           * @description The resource identifier to vote on (e.g., SHA256 hash).
           */
          resource: string;
          /**
           * Verdict
           * @description Your vote on the resource, either 'harmless' or 'malicious'.
           * @enum {string}
           */
          verdict: "harmless" | "malicious";
      };
      /**
       * Type
       * @description Fixed type for this request; must always be 'vote'.
       * @default vote
       * @constant
       */
      type: "vote";
  };
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_ADD_VOTE tool output.
 */
type VIRUSTOTAL_ADD_VOTE_OUTPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Date
           * @description UNIX timestamp of when the vote was recorded.
           */
          date: number;
          /**
           * Resource
           * @description The resource ID voted on.
           */
          resource: string;
          /**
           * Verdict
           * @description The verdict submitted.
           */
          verdict: string;
      };
      /**
       * Id
       * @description Unique identifier of the created vote.
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * @description Self URL for the vote.
           */
          self: string;
      };
      /**
       * Type
       * @description Type of the returned object.
       * @constant
       */
      type: "vote";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_ANALYSIS tool input.
 */
type VIRUSTOTAL_GET_ANALYSIS_INPUT = {
  /**
   * Id
   * @description The identifier of the analysis to retrieve
   */
  id?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_ANALYSIS tool output.
 */
type VIRUSTOTAL_GET_ANALYSIS_OUTPUT = {
  /**
   * Data
   * @description Analysis report data
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Date
           * @description Analysis date (epoch time)
           */
          date: number;
          /**
           * Results
           * @description Per-engine scan results keyed by engine name
           */
          results: {
              [key: string]: {
                  /**
                   * Category
                   * @description Result category (e.g., 'malicious')
                   */
                  category: string;
                  /**
                   * Engine Name
                   * @description Name of the scanning engine
                   */
                  engine_name: string;
                  /**
                   * Method
                   * @description Scan method used (e.g., 'blacklist')
                   */
                  method: string;
                  /**
                   * Result
                   * @description Result string or null if not applicable
                   * @default null
                   */
                  result: string | null;
                  /**
                   * Update
                   * @description Engine last update date
                   */
                  update: string;
              };
          };
          /**
           * Stats
           * @description Analysis statistics
           */
          stats: {
              /**
               * Harmless
               * @description Number of harmless verdicts
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious verdicts
               */
              malicious: number;
              /**
               * Suspicious
               * @description Number of suspicious verdicts
               */
              suspicious: number;
              /**
               * Timeout
               * @description Number of timeouts
               */
              timeout: number;
              /**
               * Undetected
               * @description Number of undetected verdicts
               */
              undetected: number;
          };
          /**
           * Status
           * @description Analysis status (e.g., 'completed')
           */
          status: string;
      };
      /**
       * Id
       * @description Unique analysis ID
       */
      id: string;
      /**
       * Type
       * @description Object type, typically 'analysis'
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * AnalysisMeta
   * @description Additional metadata
   * @default null
   */
  meta: {
      /**
       * FileInfo
       * @description File metadata if applicable
       * @default null
       */
      file_info: {
          /**
           * Md5
           * @description MD5 hash
           */
          md5: string;
          /**
           * Sha1
           * @description SHA-1 hash
           */
          sha1: string;
          /**
           * Sha256
           * @description SHA-256 hash
           */
          sha256: string;
          /**
           * Size
           * @description File size in bytes
           */
          size: number;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_COMMENTS tool input.
 */
type VIRUSTOTAL_GET_COMMENTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching next page
   * @default null
   */
  cursor: string | null;
  /**
   * Filter[Resource]
   * @description Resource identifier to get comments for (SHA-256, URL, domain, or IP address)
   */
  "filter[resource]"?: string;
  /**
   * Limit
   * @description Number of comments to return per page (default: 10, max: 40)
   * @default null
   */
  limit: number | null;
  /**
   * Sort
   * @description Sort order by comment date ('asc' or 'desc')
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_COMMENTS tool output.
 */
type VIRUSTOTAL_GET_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description List of comment objects
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Date
           * @description UNIX timestamp when the comment was posted
           */
          date: number;
          /**
           * Date Human
           * @description Human-readable date string
           */
          date_human: string;
          /**
           * Text
           * @description Comment content
           */
          text: string;
          /**
           * User
           * @description Author information
           */
          user: {
              /**
               * Id
               * @description User identifier
               */
              id: string;
              /**
               * Type
               * @description Resource type, always 'user'
               */
              type: string;
          };
          /**
           * Votes
           * @description Votes breakdown per category
           */
          votes: {
              /**
               * Harmless
               * @description Number of harmless votes
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious votes
               */
              malicious: number;
          };
      };
      /**
       * Id
       * @description Comment identifier
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'comment'
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination information
   */
  meta?: {
      /**
       * Count
       * @description Number of comments returned in this page
       */
      count: number;
      /**
       * Cursor
       * @description Cursor for the next page if available
       * @default null
       */
      cursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS tool input.
 */
type VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Domain
   * @description The domain name to query (e.g., 'example.com').
   */
  domain?: string;
  /**
   * Limit
   * @description Number of items to return per page (1-40). Defaults to server default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Relationship
   * @description Type of relationship to retrieve. Allowed values:             communicating_files, referrer_files, downloaded_files, resolutions, subdomains,             categories, whois, ssl_certificates, detected_downloaded_samples, detected_referrer_samples.
   * @enum {string}
   */
  relationship?: "communicating_files" | "referrer_files" | "downloaded_files" | "resolutions" | "subdomains" | "categories" | "whois" | "ssl_certificates" | "detected_downloaded_samples" | "detected_referrer_samples";
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS tool output.
 */
type VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS_OUTPUT = {
  /**
   * Data
   * @description Array of related objects for the domain
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the related object
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the related object
       */
      id: string;
      /**
       * Links
       * @description Pagination links for this object
       */
      links: {
          /**
           * Next
           * @description Link to the next page of results
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results
           * @default null
           */
          prev: string | null;
      };
      /**
       * Type
       * @description The type of the related object
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links for navigating through result pages
   */
  links?: {
      /**
       * Next
       * @description Link to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Link to the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Metadata about the results, including count and cursor
   */
  meta?: {
      /**
       * Count
       * @description Number of items in this response page
       */
      count: number;
      /**
       * Cursor
       * @description Cursor to retrieve the next page of results
       * @default null
       */
      cursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_DOMAIN_REPORT tool input.
 */
type VIRUSTOTAL_GET_DOMAIN_REPORT_INPUT = {
  /**
   * Domain
   * @description The domain name to retrieve the report for (e.g., 'example.com')
   */
  domain?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_DOMAIN_REPORT tool output.
 */
type VIRUSTOTAL_GET_DOMAIN_REPORT_OUTPUT = {
  /**
   * Data
   * @description Domain report data
   */
  data?: {
      /**
       * Attributes
       * @description Domain attributes
       */
      attributes: {
          /**
           * Categories
           * @description Categories assigned to the domain
           */
          categories: {
              [key: string]: string;
          };
          /**
           * Last Analysis Results
           * @description Per-engine analysis results keyed by engine name
           */
          last_analysis_results: {
              [key: string]: {
                  /**
                   * Category
                   * @description Result category (e.g., 'malicious')
                   */
                  category: string;
                  /**
                   * Engine Name
                   * @description Name of the scanning engine
                   */
                  engine_name: string;
                  /**
                   * Method
                   * @description Scan method used (e.g., 'blacklist')
                   */
                  method: string;
                  /**
                   * Result
                   * @description Result string or null if not applicable
                   * @default null
                   */
                  result: string | null;
                  /**
                   * Update
                   * @description Engine last update date
                   */
                  update: string;
              };
          };
          /**
           * Last Analysis Stats
           * @description Stats on the last domain analysis
           */
          last_analysis_stats: {
              /**
               * Harmless
               * @description Number of harmless verdicts
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious verdicts
               */
              malicious: number;
              /**
               * Suspicious
               * @description Number of suspicious verdicts
               */
              suspicious: number;
              /**
               * Timeout
               * @description Number of timeouts
               */
              timeout: number;
              /**
               * Undetected
               * @description Number of undetected verdicts
               */
              undetected: number;
          };
          /**
           * Last Dns Records
           * @description List of last observed DNS records
           */
          last_dns_records: {
              /**
               * Ttl
               * @description Time-to-live of the record
               */
              ttl: number;
              /**
               * Type
               * @description DNS record type, e.g., 'A', 'NS'
               */
              type: string;
              /**
               * Value
               * @description Record value, e.g., IP address or nameserver
               */
              value: string;
          }[];
          /**
           * Last Https Certificate
           * @description Details of the last observed HTTPS certificate
           */
          last_https_certificate: {
              /**
               * Fingerprint
               * @description Certificate fingerprints
               */
              fingerprint: {
                  /**
                   * Md5
                   * @description MD5 fingerprint of the certificate
                   */
                  md5: string;
                  /**
                   * Sha1
                   * @description SHA1 fingerprint of the certificate
                   */
                  sha1: string;
                  /**
                   * Sha256
                   * @description SHA256 fingerprint of the certificate
                   */
                  sha256: string;
              };
              /**
               * Issuer
               * @description Certificate issuer details
               */
              issuer: {
                  [key: string]: string | null;
              };
              /**
               * Serial Number
               * @description Certificate serial number
               */
              serial_number: string;
              /**
               * Signature Algorithm
               * @description Signature algorithm used
               */
              signature_algorithm: string;
              /**
               * Subject
               * @description Certificate subject details
               */
              subject: {
                  [key: string]: string | null;
              };
              /**
               * Validity Not After
               * @description Validity end timestamp
               */
              validity_not_after: number;
              /**
               * Validity Not Before
               * @description Validity start timestamp
               */
              validity_not_before: number;
              /**
               * Version
               * @description Certificate version
               */
              version: number;
          };
          /**
           * Reputation
           * @description Domain reputation score
           */
          reputation: number;
          /**
           * Tags
           * @description Tags assigned to the domain
           */
          tags: string[];
      };
      /**
       * Id
       * @description Domain identifier
       */
      id: string;
      /**
       * Links
       * @description Related resource links
       */
      links: {
          /**
           * Self
           * @description Link to the domain resource in VirusTotal
           */
          self: string;
      };
      /**
       * Type
       * @description Resource type; always 'domain'
       * @constant
       */
      type: "domain";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_FILE_REPORT tool input.
 */
type VIRUSTOTAL_GET_FILE_REPORT_INPUT = {
  /**
   * Id
   * @description Unique file identifier (SHA-256, SHA-1, MD5 hash or scan_id)
   */
  id?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_FILE_REPORT tool output.
 */
type VIRUSTOTAL_GET_FILE_REPORT_OUTPUT = {
  /**
   * Data
   * @description File report data
   */
  data?: {
      /**
       * Attributes
       * @description File analysis and metadata attributes
       */
      attributes: {
          /**
           * First Submission Date
           * @description Epoch timestamp of first submission
           */
          first_submission_date: number;
          /**
           * Last Analysis Results
           * @description Per-engine analysis results keyed by engine name
           */
          last_analysis_results: {
              [key: string]: {
                  /**
                   * Category
                   * @description Result category (e.g., 'malicious')
                   */
                  category: string;
                  /**
                   * Engine Name
                   * @description Name of the scanning engine
                   */
                  engine_name: string;
                  /**
                   * Engine Update
                   * @description Engine's last update date
                   */
                  engine_update: string;
                  /**
                   * Engine Version
                   * @description Version of the scanning engine
                   */
                  engine_version: string;
                  /**
                   * Method
                   * @description Scan method used by the engine
                   */
                  method: string;
                  /**
                   * Result
                   * @description Engine result or null if no detection
                   * @default null
                   */
                  result: string | null;
              };
          };
          /**
           * Last Analysis Stats
           * @description Aggregated analysis stats for the file
           */
          last_analysis_stats: {
              /**
               * Harmless
               * @description Number of harmless verdicts
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious verdicts
               */
              malicious: number;
              /**
               * Suspicious
               * @description Number of suspicious verdicts
               */
              suspicious: number;
              /**
               * Timeout
               * @description Number of timeouts
               */
              timeout: number;
              /**
               * Undetected
               * @description Number of undetected verdicts
               */
              undetected: number;
          };
          /**
           * Last Modification Date
           * @description Epoch timestamp of last modification
           */
          last_modification_date: number;
          /**
           * Last Submission Date
           * @description Epoch timestamp of last submission
           */
          last_submission_date: number;
          /**
           * Magic
           * @description File type description (magic)
           * @default null
           */
          magic: string | null;
          /**
           * Md5
           * @description MD5 hash of the file
           */
          md5: string;
          /**
           * Meaningful Name
           * @description Original file name as provided by the user
           * @default null
           */
          meaningful_name: string | null;
          /**
           * Reputation
           * @description File reputation score
           */
          reputation: number;
          /**
           * Sha1
           * @description SHA1 hash of the file
           */
          sha1: string;
          /**
           * Sha256
           * @description SHA256 hash of the file
           */
          sha256: string;
          /**
           * Size
           * @description File size in bytes
           */
          size: number;
          /**
           * Tags
           * @description Tags assigned to the file
           */
          tags: string[];
          /**
           * Times Submitted
           * @description Number of times the file has been submitted
           */
          times_submitted: number;
          /**
           * Total Votes
           * @description Total user votes on the file
           */
          total_votes: {
              /**
               * Harmless
               * @description Number of harmless votes
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious votes
               */
              malicious: number;
          };
          /**
           * Type Description
           * @description Description of the file type
           * @default null
           */
          type_description: string | null;
          /**
           * Type Tag
           * @description Tag of the file type
           * @default null
           */
          type_tag: string | null;
      };
      /**
       * Id
       * @description File identifier
       */
      id: string;
      /**
       * Links
       * @description Related resource links
       */
      links: {
          /**
           * Self
           * @description Link to this file resource in VirusTotal
           */
          self: string;
      };
      /**
       * Type
       * @description Resource type; always 'file'
       * @constant
       */
      type: "file";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS tool input.
 */
type VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Ip
   * @description The IPv4 or IPv6 address to query (e.g., '8.8.8.8').
   */
  ip?: string;
  /**
   * Limit
   * @description Number of items to return per page (1-40). Defaults to server default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Relationship
   * @description Type of relationship to retrieve. Allowed values: communicating_files, downloaded_files, communicating_urls.
   * @enum {string}
   */
  relationship?: "communicating_files" | "downloaded_files" | "communicating_urls";
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS tool output.
 */
type VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS_OUTPUT = {
  /**
   * Data
   * @description Array of related objects for the IP address
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the related object
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the related object
       */
      id: string;
      /**
       * Links
       * @description Pagination links for this object
       */
      links: {
          /**
           * Next
           * @description Link to the next page of results
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results
           * @default null
           */
          prev: string | null;
      };
      /**
       * Type
       * @description The type of the related object
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links for navigating through result pages
   */
  links?: {
      /**
       * Next
       * @description Link to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Link to the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Metadata about the results, including count and cursor
   */
  meta?: {
      /**
       * Count
       * @description Number of items in this response page
       */
      count: number;
      /**
       * Cursor
       * @description Cursor to retrieve the next page of results
       * @default null
       */
      cursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_IP_ADDRESS_REPORT tool input.
 */
type VIRUSTOTAL_GET_IP_ADDRESS_REPORT_INPUT = {
  /**
   * Ip
   * @description The IP address to retrieve the report for (IPv4 or IPv6)
   */
  ip?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_IP_ADDRESS_REPORT tool output.
 */
type VIRUSTOTAL_GET_IP_ADDRESS_REPORT_OUTPUT = {
  /**
   * Data
   * @description IP address report data
   */
  data?: {
      /**
       * Attributes
       * @description IP address attributes
       */
      attributes: {
          /**
           * As Owner
           * @description Autonomous System owner
           * @default null
           */
          as_owner: string | null;
          /**
           * Asn
           * @description Autonomous System Number
           */
          asn: number;
          /**
           * Country
           * @description Country of the IP address
           * @default null
           */
          country: string | null;
          /**
           * Last Analysis Results
           * @description Per-engine scan results keyed by engine name
           */
          last_analysis_results: {
              [key: string]: {
                  /**
                   * Category
                   * @description Analysis category (e.g., 'malicious')
                   */
                  category: string;
                  /**
                   * Engine Name
                   * @description Name of the scanning engine
                   */
                  engine_name: string;
                  /**
                   * Method
                   * @description Scan method used (e.g., 'blacklist')
                   */
                  method: string;
                  /**
                   * Result
                   * @description Result string or null if not applicable
                   * @default null
                   */
                  result: string | null;
                  /**
                   * Update
                   * @description Date of the last update of the engine
                   */
                  update: string;
              };
          };
          /**
           * Last Analysis Stats
           * @description Analysis statistics timed by verdict
           */
          last_analysis_stats: {
              /**
               * Harmless
               * @description Number of harmless verdicts
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious verdicts
               */
              malicious: number;
              /**
               * Suspicious
               * @description Number of suspicious verdicts
               */
              suspicious: number;
              /**
               * Timeout
               * @description Number of timeout verdicts
               */
              timeout: number;
              /**
               * Undetected
               * @description Number of undetected verdicts
               */
              undetected: number;
          };
          /**
           * Last Modification Date
           * @description Timestamp of last modification
           */
          last_modification_date: number;
          /**
           * Network
           * @description CIDR network of the IP address
           * @default null
           */
          network: string | null;
          /**
           * Regional Internet Registry
           * @description Regional Internet Registry
           * @default null
           */
          regional_internet_registry: string | null;
          /**
           * Reputation
           * @description Community reputation score
           */
          reputation: number;
          /**
           * Tags
           * @description List of tags associated with the IP
           */
          tags: string[];
      };
      /**
       * Id
       * @description IP address identifier
       */
      id: string;
      /**
       * Links
       * @description Related resource links
       */
      links: {
          /**
           * Self
           * @description Link to this IP resource in VirusTotal
           */
          self: string;
      };
      /**
       * Type
       * @description Resource type; always 'ip_address'
       * @constant
       */
      type: "ip_address";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_METADATA tool input.
 */
type VIRUSTOTAL_GET_METADATA_INPUT = object;

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_METADATA tool output.
 */
type VIRUSTOTAL_GET_METADATA_OUTPUT = {
  /**
   * Data
   * @description Metadata response payload
   */
  data?: {
      /**
       * Attributes
       * @description Metadata attributes
       */
      attributes: {
          /**
           * Endpoints
           * @description Mapping of API endpoint paths to their info
           */
          endpoints: {
              [key: string]: {
                  /**
                   * Methods
                   * @description HTTP methods available at this endpoint
                   */
                  methods: string[];
                  /**
                   * Summary
                   * @description Brief description of the endpoint
                   */
                  summary: string;
                  /**
                   * Url
                   * @description Full URL of the endpoint
                   */
                  url: string;
              };
          };
      };
      /**
       * Id
       * @description Resource identifier, typically 'metadata'
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'metadata'
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_URL_REPORT tool input.
 */
type VIRUSTOTAL_GET_URL_REPORT_INPUT = {
  /**
   * Id
   * @description Base64 URL identifier (RFC 4648 without padding) of the URL
   */
  id?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_URL_REPORT tool output.
 */
type VIRUSTOTAL_GET_URL_REPORT_OUTPUT = {
  /**
   * Data
   * @description URL report data
   */
  data?: {
      /**
       * Attributes
       * @description Analysis and metadata attributes of the URL
       */
      attributes: {
          /**
           * Last Analysis Results
           * @description Per-engine analysis results keyed by engine name
           */
          last_analysis_results: {
              [key: string]: {
                  /**
                   * Category
                   * @description Result category (e.g., 'malicious')
                   */
                  category: string;
                  /**
                   * Engine Name
                   * @description Name of the scanning engine
                   */
                  engine_name: string;
                  /**
                   * Engine Update
                   * @description Engine's last update date
                   */
                  engine_update: string;
                  /**
                   * Engine Version
                   * @description Version of the scanning engine
                   */
                  engine_version: string;
                  /**
                   * Method
                   * @description Scan method used by the engine
                   */
                  method: string;
                  /**
                   * Result
                   * @description Engine result or null if no detection
                   * @default null
                   */
                  result: string | null;
              };
          };
          /**
           * Last Analysis Stats
           * @description Aggregated analysis stats for the URL
           */
          last_analysis_stats: {
              /**
               * Harmless
               * @description Number of harmless verdicts
               */
              harmless: number;
              /**
               * Malicious
               * @description Number of malicious verdicts
               */
              malicious: number;
              /**
               * Suspicious
               * @description Number of suspicious verdicts
               */
              suspicious: number;
              /**
               * Timeout
               * @description Number of timeouts
               */
              timeout: number;
              /**
               * Undetected
               * @description Number of undetected verdicts
               */
              undetected: number;
          };
          /**
           * Last Submission Date
           * @description Unix timestamp of the last analysis submission
           */
          last_submission_date: number;
          /**
           * Reputation
           * @description Community reputation score of the URL
           */
          reputation: number;
          /**
           * Tags
           * @description Tags associated with the URL
           */
          tags: string[];
          /**
           * Times Submitted
           * @description Number of times the URL has been submitted for analysis
           */
          times_submitted: number;
          /**
           * Title
           * @description Title of the web page, if available
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description The actual URL that was analyzed
           */
          url: string;
      };
      /**
       * Id
       * @description URL identifier
       */
      id: string;
      /**
       * Links
       * @description Related resource links
       */
      links: {
          /**
           * Self
           * @description Link to this URL resource in VirusTotal
           */
          self: string;
      };
      /**
       * Type
       * @description Resource type; always 'url'
       * @constant
       */
      type: "url";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_VOTES tool input.
 */
type VIRUSTOTAL_GET_VOTES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching subsequent pages of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of votes to retrieve (default: 10, max: 40).
   * @default null
   */
  limit: number | null;
  /**
   * Object Id
   * @description Identifier of the object (e.g., file hash, URL-encoded URL, domain name, or IP address).
   */
  object_id?: string;
  /**
   * Object Type
   * @description Type of the object to retrieve votes for: 'files', 'urls', 'domains', or 'ip_addresses'.
   * @enum {string}
   */
  object_type?: "files" | "urls" | "domains" | "ip_addresses";
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_GET_VOTES tool output.
 */
type VIRUSTOTAL_GET_VOTES_OUTPUT = {
  /**
   * Data
   * @description List of votes.
   */
  data?: {
      /**
       * Attributes
       * @description Vote attributes.
       */
      attributes: {
          /**
           * Date
           * @description Unix timestamp of the vote.
           */
          date: number;
          /**
           * User
           * @description Information about the user who cast the vote.
           */
          user: {
              /**
               * Id
               * @description User identifier.
               */
              id: string;
              /**
               * Type
               * @description User type, typically 'community_user'.
               */
              type: string;
          };
          /**
           * Verdict
           * @description User's verdict: 'malicious', 'harmless', 'suspicious', or 'undetected'.
           * @enum {string}
           */
          verdict: "malicious" | "harmless" | "suspicious" | "undetected";
      };
      /**
       * Id
       * @description Vote identifier.
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'vote'.
       * @constant
       */
      type: "vote";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * VotesMeta
   * @description Pagination metadata.
   * @default null
   */
  meta: {
      /**
       * Cursor
       * @description Cursor for retrieving the next page of results.
       */
      cursor: string;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_RESCAN_FILE tool input.
 */
type VIRUSTOTAL_RESCAN_FILE_INPUT = {
  /**
   * Id
   * @description Unique file identifier (SHA-256, SHA-1, or MD5 hash of the file) to re-analyze.
   */
  id?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_RESCAN_FILE tool output.
 */
type VIRUSTOTAL_RESCAN_FILE_OUTPUT = {
  /**
   * Data
   * @description Analysis data returned after rescan.
   */
  data?: {
      /**
       * Id
       * @description Analysis identifier.
       */
      id: string;
      /**
       * Type
       * @description Type of the returned object (always 'analysis').
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_SCAN_URL tool input.
 */
type VIRUSTOTAL_SCAN_URL_INPUT = {
  /**
   * Url
   * @description The URL to be analyzed.
   */
  url?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_SCAN_URL tool output.
 */
type VIRUSTOTAL_SCAN_URL_OUTPUT = {
  /**
   * Data
   * @description Analysis data for the URL scan.
   */
  data?: {
      /**
       * Id
       * @description Identifier for the submitted analysis.
       */
      id: string;
      /**
       * Type
       * @description The object type, typically 'analysis'.
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the scanned URL.
   */
  meta?: {
      /**
       * Url Info
       * @description Details of the URL object.
       */
      url_info: {
          /**
           * Id
           * @description Identifier of the URL object in VirusTotal.
           */
          id: string;
          /**
           * Url
           * @description The submitted URL (possibly normalized).
           */
          url: string;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_SEARCH tool input.
 */
type VIRUSTOTAL_SEARCH_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous SEARCH response. Use to retrieve the next batch of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of items to return (1-40). Defaults to 10 if not specified.
   * @default null
   */
  limit: number | null;
  /**
   * Query
   * @description Query string to search in the VirusTotal database. Can be a file hash, URL, domain, IP address, or an advanced search query.
   */
  query?: string;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_SEARCH tool output.
 */
type VIRUSTOTAL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description List of search result items.
   */
  data?: {
      /**
       * Attributes
       * @description Object-specific attributes returned by the search.
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Object identifier (e.g., hash value, domain name)
       */
      id: string;
      /**
       * Type
       * @description Object type (e.g., 'file', 'url', 'domain', 'ip_address', 'comment')
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata including next cursor.
   */
  meta?: {
      /**
       * Cursor
       * @description Cursor for next page of results.
       * @default null
       */
      cursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_UPLOAD_FILE tool input.
 */
type VIRUSTOTAL_UPLOAD_FILE_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the file to upload.
   */
  file?: unknown;
  /**
   * Filename
   * @description Optional filename to use for the uploaded file.
   * @default null
   */
  filename: string | null;
};

/**
 * Type of VIRUSTOTAL's VIRUSTOTAL_UPLOAD_FILE tool output.
 */
type VIRUSTOTAL_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Analysis data returned after file upload.
   */
  data?: {
      /**
       * Id
       * @description Analysis identifier for the uploaded file.
       */
      id: string;
      /**
       * Links
       * @description Links to analysis resources.
       */
      links: {
          /**
           * Self
           * @description URL to the uploaded analysis.
           */
          self: string;
      };
      /**
       * Type
       * @description Type of the returned object (always 'analysis').
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "VIRUSTOTAL".
 */
export type VIRUSTOTAL_TOOL_INPUTS = {
  ADD_COMMENT: VIRUSTOTAL_ADD_COMMENT_INPUT
  ADD_VOTE: VIRUSTOTAL_ADD_VOTE_INPUT
  GET_ANALYSIS: VIRUSTOTAL_GET_ANALYSIS_INPUT
  GET_COMMENTS: VIRUSTOTAL_GET_COMMENTS_INPUT
  GET_DOMAIN_RELATIONSHIPS: VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS_INPUT
  GET_DOMAIN_REPORT: VIRUSTOTAL_GET_DOMAIN_REPORT_INPUT
  GET_FILE_REPORT: VIRUSTOTAL_GET_FILE_REPORT_INPUT
  GET_IP_ADDRESS_RELATIONSHIPS: VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS_INPUT
  GET_IP_ADDRESS_REPORT: VIRUSTOTAL_GET_IP_ADDRESS_REPORT_INPUT
  GET_METADATA: VIRUSTOTAL_GET_METADATA_INPUT
  GET_URL_REPORT: VIRUSTOTAL_GET_URL_REPORT_INPUT
  GET_VOTES: VIRUSTOTAL_GET_VOTES_INPUT
  RESCAN_FILE: VIRUSTOTAL_RESCAN_FILE_INPUT
  SCAN_URL: VIRUSTOTAL_SCAN_URL_INPUT
  SEARCH: VIRUSTOTAL_SEARCH_INPUT
  UPLOAD_FILE: VIRUSTOTAL_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "VIRUSTOTAL".
 */
export type VIRUSTOTAL_TOOL_OUTPUTS = {
  ADD_COMMENT: VIRUSTOTAL_ADD_COMMENT_OUTPUT
  ADD_VOTE: VIRUSTOTAL_ADD_VOTE_OUTPUT
  GET_ANALYSIS: VIRUSTOTAL_GET_ANALYSIS_OUTPUT
  GET_COMMENTS: VIRUSTOTAL_GET_COMMENTS_OUTPUT
  GET_DOMAIN_RELATIONSHIPS: VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS_OUTPUT
  GET_DOMAIN_REPORT: VIRUSTOTAL_GET_DOMAIN_REPORT_OUTPUT
  GET_FILE_REPORT: VIRUSTOTAL_GET_FILE_REPORT_OUTPUT
  GET_IP_ADDRESS_RELATIONSHIPS: VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS_OUTPUT
  GET_IP_ADDRESS_REPORT: VIRUSTOTAL_GET_IP_ADDRESS_REPORT_OUTPUT
  GET_METADATA: VIRUSTOTAL_GET_METADATA_OUTPUT
  GET_URL_REPORT: VIRUSTOTAL_GET_URL_REPORT_OUTPUT
  GET_VOTES: VIRUSTOTAL_GET_VOTES_OUTPUT
  RESCAN_FILE: VIRUSTOTAL_RESCAN_FILE_OUTPUT
  SCAN_URL: VIRUSTOTAL_SCAN_URL_OUTPUT
  SEARCH: VIRUSTOTAL_SEARCH_OUTPUT
  UPLOAD_FILE: VIRUSTOTAL_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's VIRUSTOTAL toolkit.
 */
export const VIRUSTOTAL = {
  slug: "virustotal",
  tools: {
    /**
     * Tool to add a comment to a virustotal resource (file, url, domain, or ip address). use after analyzing a resource to leave contextual feedback. provide exactly one identifier per call.
     */
    ADD_COMMENT: "VIRUSTOTAL_ADD_COMMENT",
    /**
     * Tool to add a vote (harmless/malicious) to a virustotal resource. use after reviewing analysis results to submit your verdict.
     */
    ADD_VOTE: "VIRUSTOTAL_ADD_VOTE",
    /**
     * Tool to retrieve the analysis report of a file or url submission. use after obtaining an analysis id to fetch its detailed report.
     */
    GET_ANALYSIS: "VIRUSTOTAL_GET_ANALYSIS",
    /**
     * Tool to retrieve the latest comments on a virustotal resource. use when you need to review user-generated comments for a file, url, domain, or ip after obtaining its identifier.
     */
    GET_COMMENTS: "VIRUSTOTAL_GET_COMMENTS",
    /**
     * Tool to retrieve relationship objects for a given domain. use when you have a domain and need to explore its related entities.
     */
    GET_DOMAIN_RELATIONSHIPS: "VIRUSTOTAL_GET_DOMAIN_RELATIONSHIPS",
    /**
     * Tool to retrieve the analysis report of a domain. use when you need detailed insight on a domain's reputation and analysis stats.
     */
    GET_DOMAIN_REPORT: "VIRUSTOTAL_GET_DOMAIN_REPORT",
    /**
     * Tool to retrieve the analysis report of a file. use when you have a file's hash and need detailed scan metadata.
     */
    GET_FILE_REPORT: "VIRUSTOTAL_GET_FILE_REPORT",
    /**
     * Tool to retrieve objects related to a specific ip address by relationship type. use when you have an ip and need to explore connected files, urls, or other entities.
     */
    GET_IP_ADDRESS_RELATIONSHIPS: "VIRUSTOTAL_GET_IP_ADDRESS_RELATIONSHIPS",
    /**
     * Tool to retrieve the analysis report of an ip address. use when you need detailed insight on an ip's reputation, asn, country, and analysis stats.
     */
    GET_IP_ADDRESS_REPORT: "VIRUSTOTAL_GET_IP_ADDRESS_REPORT",
    /**
     * Tool to retrieve virustotal metadata. use when you need to list all available api endpoints with methods, summaries, and urls.
     */
    GET_METADATA: "VIRUSTOTAL_GET_METADATA",
    /**
     * Tool to retrieve the analysis report of a url. use when you have a url identifier (base64-url without padding) and need detailed scan results, reputation, and metadata.
     */
    GET_URL_REPORT: "VIRUSTOTAL_GET_URL_REPORT",
    /**
     * Tool to retrieve votes on files, urls, domains, or ip addresses. use when you need to view community votes for a given object.
     */
    GET_VOTES: "VIRUSTOTAL_GET_VOTES",
    /**
     * Tool to re-analyze a previously submitted file. use when you need updated analysis results after an initial scan.
     */
    RESCAN_FILE: "VIRUSTOTAL_RESCAN_FILE",
    /**
     * Tool to submit a url for scanning. use when you have a url and need to submit it to virustotal to obtain an analysis id for later retrieval.
     */
    SCAN_URL: "VIRUSTOTAL_SCAN_URL",
    /**
     * Tool to search for objects in the virustotal database. use when locating files, urls, domains, ips, or comments matching a query. supports pagination with limit and cursor.
     */
    SEARCH: "VIRUSTOTAL_SEARCH",
    /**
     * Tool to upload a file for scanning. use when you have binary file content ready to submit for virustotal analysis.
     */
    UPLOAD_FILE: "VIRUSTOTAL_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "VIRUSTOTAL".
 */
export type VIRUSTOTAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "VIRUSTOTAL".
 */
export type VIRUSTOTAL_TRIGGER_EVENTS = {}
