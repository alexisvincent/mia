// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PLAIN's PLAIN_ADD_CUSTOMER_TO_GROUP tool input.
 */
type PLAIN_ADD_CUSTOMER_TO_GROUP_INPUT = {
  /**
   * Customer Group Identifiers
   * @description List of customer group identifiers. Must contain at least one identifier.
   */
  customerGroupIdentifiers?: {
      /**
       * Customer Group Id
       * @description Plain internal ID of the customer group.
       * @default null
       */
      customerGroupId: string | null;
      /**
       * Customer Group Key
       * @description Unique key of the customer group.
       * @default null
       */
      customerGroupKey: string | null;
      /**
       * External Id
       * @description Your external ID for the customer group.
       * @default null
       */
      externalId: string | null;
  }[];
  /**
   * Customer Id
   * @description ID of the customer to add to groups.
   */
  customerId?: string;
};

/**
 * Type of PLAIN's PLAIN_ADD_CUSTOMER_TO_GROUP tool output.
 */
type PLAIN_ADD_CUSTOMER_TO_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer Group Memberships
       * @default null
       */
      customerGroupMemberships: {
          /**
           * Created At
           * @description Creation time of membership.
           */
          createdAt: {
              /**
               * Iso8601
               * @description ISO 8601 timestamp of creation.
               */
              iso8601: string;
          };
          /**
           * Customer Group
           * @description Details of the customer group.
           */
          customerGroup: {
              /**
               * Id
               * @description ID of the customer group.
               */
              id: string;
              /**
               * Key
               * @description Key of the customer group.
               */
              key: string;
              /**
               * Name
               * @description Name of the customer group.
               */
              name: string;
          };
          /**
           * Customer Id
           * @description ID of the customer.
           */
          customerId: string;
      }[] | null;
      /**
       * MutationError
       * @description Mutation error, if any.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Fixed error code from the API.
           */
          code: string;
          /**
           * Fields
           * @description List of field-specific errors, if any.
           * @default null
           */
          fields: {
              /**
               * Field
               * @description Name of the field where error occurred.
               */
              field: string;
              /**
               * Message
               * @description Technical error message.
               */
              message: string;
              /**
               * Type
               * @description Type of field error.
               * @enum {string}
               */
              type: "VALIDATION" | "REQUIRED" | "NOT_FOUND";
          }[] | null;
          /**
           * Message
           * @description Technical error message.
           */
          message: string;
          /**
           * Type
           * @description Type of error.
           * @enum {string}
           */
          type: "VALIDATION" | "FORBIDDEN" | "INTERNAL";
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
 * Type of PLAIN's PLAIN_CREATE_CUSTOMER tool input.
 */
type PLAIN_CREATE_CUSTOMER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Customer's unique email address
   */
  email?: unknown;
  /**
   * Email Verified
   * @description Whether this email is already verified in Plain
   * @default false
   */
  email_verified: boolean;
  /**
   * External Id
   * @description Your system's ID for idempotency (optional)
   * @default null
   */
  external_id: string | null;
  /**
   * Full Name
   * @description The full name of the customer (e.g. 'John Doe')
   */
  full_name?: string;
  /**
   * Short Name
   * @description An optional short name, typically the first name
   * @default null
   */
  short_name: string | null;
};

/**
 * Type of PLAIN's PLAIN_CREATE_CUSTOMER tool output.
 */
type PLAIN_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when customer was created
       */
      created_at: string;
      /**
       * Email
       * @description Email object with 'email' and 'isVerified' flags
       */
      email: {
          [key: string]: unknown;
      };
      /**
       * External Id
       * @description The externalId you supplied (if any)
       * @default null
       */
      external_id: string | null;
      /**
       * Full Name
       * @description The customer's full name
       */
      full_name: string;
      /**
       * Id
       * @description Plain's internal customer ID
       */
      id: string;
      /**
       * Short Name
       * @description The customer's short name
       * @default null
       */
      short_name: string | null;
      /**
       * Updated At
       * @description ISO-8601 timestamp when customer was last updated
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
 * Type of PLAIN's PLAIN_CREATE_THREAD tool input.
 */
type PLAIN_CREATE_THREAD_INPUT = {
  /**
   * AssignedTo
   * @description Optional user assignment for the thread
   * @default null
   */
  assignedTo: {
      /**
       * User Id
       * @description Plain user ID to assign the thread to
       */
      userId: string;
  } | null;
  /**
   * Components
   * @description Optional list of content components for the thread
   * @default null
   */
  components: {
      /**
       * ComponentText
       * @description A text component to include in the thread
       * @default null
       */
      componentText: {
          /**
           * Text
           * @description Text content of the component
           */
          text: string;
      } | null;
  }[] | null;
  /**
   * Customer Identifier
   * @description Identifier object for the customer
   */
  customerIdentifier?: {
      /**
       * Customer Id
       * @description Plain customer ID to identify the customer
       * @default null
       */
      customerId: string | null;
      /**
       * Email Address
       * Format: email
       * @description Email address of the customer
       * @default null
       */
      emailAddress: unknown;
      /**
       * External Id
       * @description External ID for the customer
       * @default null
       */
      externalId: string | null;
  };
  /**
   * Label Type Ids
   * @description Optional list of label type IDs to assign
   * @default null
   */
  labelTypeIds: string[] | null;
  /**
   * Title
   * @description Title of the new thread
   */
  title?: string;
};

/**
 * Type of PLAIN's PLAIN_CREATE_THREAD tool output.
 */
type PLAIN_CREATE_THREAD_OUTPUT = {
  /**
   * Data
   * @description GraphQL response payload
   */
  data?: {
      /**
       * Create Thread
       * @description Result of the createThread mutation
       */
      createThread: {
          /**
           * Thread
           * @description Created thread details
           */
          thread: {
              /**
               * Customer
               * @description Associated customer details
               */
              customer: {
                  /**
                   * Email
                   * @description Email details of the customer
                   */
                  email: {
                      /**
                       * Email
                       * @description Email address of the customer
                       */
                      email: string;
                  };
                  /**
                   * Full Name
                   * @description Full name of the customer
                   */
                  fullName: string;
                  /**
                   * Id
                   * @description Customer unique identifier
                   */
                  id: string;
              };
              /**
               * Id
               * @description Thread unique identifier
               */
              id: string;
              /**
               * Labels
               * @description Labels assigned to the thread
               */
              labels: {
                  /**
                   * Id
                   * @description Label unique identifier
                   */
                  id: string;
                  /**
                   * Label Type
                   * @description Type details of the label
                   */
                  labelType: {
                      /**
                       * Id
                       * @description LabelType unique identifier
                       */
                      id: string;
                      /**
                       * Name
                       * @description LabelType name
                       */
                      name: string;
                  };
              }[];
              /**
               * Priority
               * @description Priority level of the thread
               */
              priority: number;
              /**
               * Status
               * @description Current status of the thread
               */
              status: string;
              /**
               * Status Changed At
               * @description Status change timestamp
               */
              statusChangedAt: {
                  /**
                   * Iso8601
                   * @description Timestamp of last status change in ISO8601 format
                   */
                  iso8601: string;
              };
              /**
               * Title
               * @description Title of the thread
               */
              title: string;
          };
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
 * Type of PLAIN's PLAIN_DELETE_CUSTOMER tool input.
 */
type PLAIN_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to delete, as returned by the Plain API.
   */
  customer_id?: string;
};

/**
 * Type of PLAIN's PLAIN_DELETE_CUSTOMER tool output.
 */
type PLAIN_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * DeleteCustomerError
       * @description Error details if deletion failed.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code.
           */
          code: string;
          /**
           * Fields
           * @description List of field-specific errors.
           */
          fields: {
              /**
               * Field
               * @description Name of the field with the error.
               */
              field: string;
              /**
               * Message
               * @description Validation message for the field.
               */
              message: string;
              /**
               * Type
               * @description Type of the error for the field.
               */
              type: string;
          }[];
          /**
           * Message
           * @description Error message.
           */
          message: string;
          /**
           * Type
           * @description Error type.
           */
          type: string;
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
 * Type of PLAIN's PLAIN_DELETE_USER tool input.
 */
type PLAIN_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the user to delete, as returned by the Plain API.
   */
  user_id?: string;
};

/**
 * Type of PLAIN's PLAIN_DELETE_USER tool output.
 */
type PLAIN_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * DeleteUserError
       * @description Error details if deletion failed.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code.
           */
          code: string;
          /**
           * Fields
           * @description List of field-specific errors.
           */
          fields: {
              /**
               * Field
               * @description Name of the field with the error.
               */
              field: string;
              /**
               * Message
               * @description Validation message for the field.
               */
              message: string;
              /**
               * Type
               * @description Type of the error for the field.
               */
              type: string;
          }[];
          /**
           * Message
           * @description Error message.
           */
          message: string;
          /**
           * Type
           * @description Error type.
           */
          type: string;
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
 * Type of PLAIN's PLAIN_FETCH_COMPANY tool input.
 */
type PLAIN_FETCH_COMPANY_INPUT = {
  /**
   * Company Id
   * @description Plain's internal ID of the company to fetch, e.g., 'cmp_01H1P4TE62AS5KZ4CZFC0578ED'.
   */
  company_id?: string;
};

/**
 * Type of PLAIN's PLAIN_FETCH_COMPANY tool output.
 */
type PLAIN_FETCH_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CompanyAccountOwner
       * @description User assigned as account owner for this company
       * @default null
       */
      accountOwner: {
          /**
           * Email
           * @description Email address of the account owner user
           */
          email: string;
          /**
           * Full Name
           * @description Full name of the account owner user
           */
          fullName: string;
          /**
           * Id
           * @description Unique ID of the account owner user
           */
          id: string;
          /**
           * Public Name
           * @description Public display name of the account owner user
           */
          publicName: string;
      } | null;
      /**
       * Contract Value
       * @description Contract value for the company, if any
       * @default null
       */
      contractValue: number | null;
      /**
       * Created At
       * @description Creation timestamp of the company record
       */
      createdAt: {
          /**
           * Iso8601
           * @description Timestamp in ISO 8601 format
           */
          iso8601: string;
      };
      /**
       * Domain Name
       * @description Domain name of the company
       */
      domainName: string;
      /**
       * Id
       * @description Unique ID of the company
       */
      id: string;
      /**
       * Is Deleted
       * @description Flag indicating if the company is deleted
       */
      isDeleted: boolean;
      /**
       * Logo Url
       * @description URL of the company's logo, if available
       * @default null
       */
      logoUrl: string | null;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Updated At
       * @description Last update timestamp of the company record
       */
      updatedAt: {
          /**
           * Iso8601
           * @description Timestamp in ISO 8601 format
           */
          iso8601: string;
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
 * Type of PLAIN's PLAIN_FETCH_ISSUES tool input.
 */
type PLAIN_FETCH_ISSUES_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier of the customer whose issues are to be retrieved.
   */
  customerId?: string;
  /**
   * Link First
   * @description The number of issue links to fetch per thread. Must be ≥1.
   * @default 50
   */
  linkFirst: number | null;
  /**
   * Thread First
   * @description The number of threads to fetch for the customer. Must be ≥1.
   * @default 50
   */
  threadFirst: number | null;
};

/**
 * Type of PLAIN's PLAIN_FETCH_ISSUES tool output.
 */
type PLAIN_FETCH_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issues
       * @description List of external issue links associated with the customer.
       */
      issues: {
          /**
           * Description
           * @description The description of the external issue.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The internal ID of the link resource.
           */
          id: string;
          /**
           * Source Id
           * @description The external issue ID.
           */
          sourceId: string;
          /**
           * Source Type
           * @description The type of issue tracker, e.g., jira, linear.
           */
          sourceType: string;
          /**
           * Status
           * @description The status of the external issue link.
           */
          status: string;
          /**
           * Title
           * @description The title of the external issue.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description The URL of the external issue.
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
 * Type of PLAIN's PLAIN_FETCH_TIER tool input.
 */
type PLAIN_FETCH_TIER_INPUT = {
  /**
   * Tier Id
   * @description The unique identifier of the tier to fetch (e.g., 'tier_123')
   */
  tier_id?: string;
};

/**
 * Type of PLAIN's PLAIN_FETCH_TIER tool output.
 */
type PLAIN_FETCH_TIER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tier
       * @description Tier object returned by the API.
       * @default null
       */
      tier: {
          /**
           * Default Priority
           * @description The default priority level of the tier.
           * @default null
           */
          defaultPriority: number | null;
          /**
           * External Id
           * @description An external identifier for the tier.
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description The unique identifier of the tier.
           */
          id: string;
          /**
           * Name
           * @description The name of the tier.
           * @default null
           */
          name: string | null;
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
 * Type of PLAIN's PLAIN_GET_CUSTOMERS tool input.
 */
type PLAIN_GET_CUSTOMERS_INPUT = {
  /**
   * After
   * @description Cursor for forward pagination. Use with 'first'.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for backward pagination. Use with 'last'.
   * @default null
   */
  before: string | null;
  /**
   * CustomersFiltersInput
   * @description Filters to apply when fetching customers.
   * @default null
   */
  filters: {
      /**
       * External Id
       * @description Only returns customers with this external ID.
       * @default null
       */
      externalId: string | null;
      /**
       * Is Marked As Spam
       * @description If set, only returns customers whose spam status matches this flag.
       * @default null
       */
      isMarkedAsSpam: boolean | null;
  } | null;
  /**
   * First
   * @description Number of customers to fetch after the 'after' cursor. Must be ≥ 1.
   * @default null
   */
  first: number | null;
  /**
   * Last
   * @description Number of customers to fetch before the 'before' cursor. Must be ≥ 1.
   * @default null
   */
  last: number | null;
  /**
   * CustomersSortInput
   * @description Sorting instructions for the customers list.
   * @default null
   */
  sortBy: {
      /**
       * Direction
       * @description Sort order: ASC for ascending, DESC for descending.
       * @enum {string}
       */
      direction: "ASC" | "DESC";
      /**
       * Field
       * @description Which customer field to sort by (e.g., 'FULL_NAME', 'UPDATED_AT').
       */
      field: string;
  } | null;
};

/**
 * Type of PLAIN's PLAIN_GET_CUSTOMERS tool output.
 */
type PLAIN_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Customers */
      customers: {
          /** Edges */
          edges: {
              /** Node */
              node: {
                  /** Email */
                  email: {
                      /**
                       * Email
                       * @description Customer's email address.
                       */
                      email: string;
                      /**
                       * Is Verified
                       * @description Whether the email is verified.
                       */
                      isVerified: boolean;
                  };
                  /**
                   * External Id
                   * @default null
                   */
                  externalId: string | null;
                  /** Full Name */
                  fullName: string;
                  /** Id */
                  id: string;
                  /**
                   * MarkedAsSpamAt
                   * @default null
                   */
                  markedAsSpamAt: {
                      /**
                       * Iso8601
                       * @description ISO8601 timestamp when the customer was marked as spam.
                       */
                      iso8601: string;
                  } | null;
                  /**
                   * Short Name
                   * @default null
                   */
                  shortName: string | null;
              };
          }[];
          /** Page Info */
          pageInfo: {
              /**
               * End Cursor
               * @default null
               */
              endCursor: string | null;
              /** Has Next Page */
              hasNextPage: boolean;
              /** Has Previous Page */
              hasPreviousPage: boolean;
              /**
               * Start Cursor
               * @default null
               */
              startCursor: string | null;
          };
          /** Total Count */
          totalCount: number;
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
 * Type of PLAIN's PLAIN_GET_CUSTOMER_BY_EMAIL tool input.
 */
type PLAIN_GET_CUSTOMER_BY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the customer to fetch
   */
  email?: unknown;
};

/**
 * Type of PLAIN's PLAIN_GET_CUSTOMER_BY_EMAIL tool output.
 */
type PLAIN_GET_CUSTOMER_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description GraphQL response payload
   */
  data?: {
      /**
       * CustomerByEmail
       * @description Customer details returned by customerByEmail query.
       * @default null
       */
      customerByEmail: {
          /**
           * Full Name
           * @description Full name of the customer
           */
          fullName: string;
          /**
           * Id
           * @description Unique identifier of the customer
           */
          id: string;
          /**
           * Updated At
           * @description Details of last update timestamp
           */
          updatedAt: {
              /**
               * Iso8601
               * @description Timestamp of last update in ISO 8601 format
               */
              iso8601: string;
          };
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
 * Type of PLAIN's PLAIN_GET_CUSTOMER_BY_ID tool input.
 */
type PLAIN_GET_CUSTOMER_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique identifier of the customer to retrieve.
   */
  id?: string;
};

/**
 * Type of PLAIN's PLAIN_GET_CUSTOMER_BY_ID tool output.
 */
type PLAIN_GET_CUSTOMER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the customer was created.
       */
      created_at: string;
      /**
       * Email
       * @description The email address of the customer.
       */
      email: string;
      /**
       * Full Name
       * @description The full name of the customer.
       */
      full_name: string;
      /**
       * Id
       * @description Plain's internal customer ID.
       */
      id: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the customer was last updated.
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
 * Type of PLAIN's PLAIN_GET_THREAD_BY_ID tool input.
 */
type PLAIN_GET_THREAD_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the thread to fetch
   */
  id?: string;
};

/**
 * Type of PLAIN's PLAIN_GET_THREAD_BY_ID tool output.
 */
type PLAIN_GET_THREAD_BY_ID_OUTPUT = {
  /**
   * Data
   * @description GraphQL response payload
   */
  data?: {
      /**
       * Thread
       * @description Thread details
       */
      thread: {
          /**
           * Id
           * @description Thread unique identifier
           */
          id: string;
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
 * Type of PLAIN's PLAIN_GET_USER_BY_ID tool input.
 */
type PLAIN_GET_USER_BY_ID_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the user to fetch
   */
  user_id?: string;
};

/**
 * Type of PLAIN's PLAIN_GET_USER_BY_ID tool output.
 */
type PLAIN_GET_USER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description GraphQL response payload with user data
   */
  data?: {
      /**
       * User
       * @description User details returned by the getUser query.
       * @default null
       */
      user: {
          /**
           * Avatar Url
           * @description Avatar URL of the user, if available
           * @default null
           */
          avatarUrl: string | null;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Full Name
           * @description Full name of the user
           */
          fullName: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: string;
          /**
           * Public Name
           * @description Display name or short name of the user
           */
          publicName: string;
          /**
           * Status
           * @description Current status of the user
           */
          status: string;
          /**
           * Status Changed At
           * @description Details of when the status last changed
           */
          statusChangedAt: {
              /**
               * Iso8601
               * @description Timestamp when the user's status last changed in ISO 8601 format
               */
              iso8601: string;
          };
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
 * Type of PLAIN's PLAIN_LIST_THREADS tool input.
 */
type PLAIN_LIST_THREADS_INPUT = {
  /**
   * After
   * @description Cursor for forward pagination. Use with 'first'.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for backward pagination. Use with 'last'.
   * @default null
   */
  before: string | null;
  /**
   * First
   * @description Number of threads to fetch after the 'after' cursor. Must be ≥ 1.
   * @default null
   */
  first: number | null;
  /**
   * Last
   * @description Number of threads to fetch before the 'before' cursor. Must be ≥ 1.
   * @default null
   */
  last: number | null;
};

/**
 * Type of PLAIN's PLAIN_LIST_THREADS tool output.
 */
type PLAIN_LIST_THREADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Threads */
      threads: {
          /** Edges */
          edges: {
              /**
               * Cursor
               * @description Cursor for pagination
               */
              cursor: string;
              /** Node */
              node: {
                  /**
                   * Created At
                   * @description ISO8601 creation timestamp
                   */
                  createdAt: string;
                  /**
                   * Id
                   * @description Thread unique identifier
                   */
                  id: string;
                  /**
                   * Priority
                   * @description Priority level of the thread
                   */
                  priority: number;
                  /**
                   * Ref
                   * @description Human-readable thread reference
                   */
                  ref: string;
                  /**
                   * Status
                   * @description Current status of the thread
                   */
                  status: string;
                  /**
                   * Title
                   * @description Title of the thread
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Updated At
                   * @description ISO8601 last updated timestamp
                   */
                  updatedAt: string;
              };
          }[];
          /** Page Info */
          pageInfo: {
              /**
               * End Cursor
               * @default null
               */
              endCursor: string | null;
              /** Has Next Page */
              hasNextPage: boolean;
              /** Has Previous Page */
              hasPreviousPage: boolean;
              /**
               * Start Cursor
               * @default null
               */
              startCursor: string | null;
          };
          /** Total Count */
          totalCount: number;
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
 * Type of PLAIN's PLAIN_LIST_TIERS tool input.
 */
type PLAIN_LIST_TIERS_INPUT = {
  /**
   * After
   * @description Cursor for forward pagination, used together with 'first'.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for backward pagination, used together with 'last'.
   * @default null
   */
  before: string | null;
  /**
   * First
   * @description Number of items to fetch in forward pagination; must be ≥ 1.
   * @default null
   */
  first: number | null;
  /**
   * Last
   * @description Number of items to fetch in backward pagination; must be ≥ 1.
   * @default null
   */
  last: number | null;
};

/**
 * Type of PLAIN's PLAIN_LIST_TIERS tool output.
 */
type PLAIN_LIST_TIERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tiers
       * @description Connection object containing edges and pageInfo.
       */
      tiers: {
          /**
           * Edges
           * @description List of tier edges for pagination.
           */
          edges: {
              /**
               * Cursor
               * @description Pagination cursor for this edge.
               */
              cursor: string;
              /**
               * Node
               * @description The tier node data.
               */
              node: {
                  /**
                   * Default Priority
                   * @description Default priority level of the tier.
                   * @default null
                   */
                  defaultPriority: number | null;
                  /**
                   * External Id
                   * @description External identifier for the tier, if any.
                   * @default null
                   */
                  externalId: string | null;
                  /**
                   * Id
                   * @description Unique identifier of the tier.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name of the tier.
                   * @default null
                   */
                  name: string | null;
              };
          }[];
          /**
           * Page Info
           * @description Pagination information for the tiers list.
           */
          pageInfo: {
              /**
               * End Cursor
               * @description Cursor corresponding to the last result in the current page.
               * @default null
               */
              endCursor: string | null;
              /**
               * Has Next Page
               * @description Whether there is a next page of results.
               */
              hasNextPage: boolean;
              /**
               * Has Previous Page
               * @description Whether there is a previous page of results.
               */
              hasPreviousPage: boolean;
              /**
               * Start Cursor
               * @description Cursor corresponding to the first result in the current page.
               * @default null
               */
              startCursor: string | null;
          };
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
 * Type of PLAIN's PLAIN_PLAIN_CREATE_CUSTOMER_GROUP tool input.
 */
type PLAIN_PLAIN_CREATE_CUSTOMER_GROUP_INPUT = {
  /**
   * Color
   * @description Hex color code for the group (e.g. #FF5733)
   */
  color?: unknown;
  /**
   * External Id
   * @description Optional external ID for the customer group
   * @default null
   */
  externalId: string | null;
  /**
   * Key
   * @description Unique key for the customer group
   */
  key?: string;
  /**
   * Name
   * @description Name of the customer group
   */
  name?: string;
};

/**
 * Type of PLAIN's PLAIN_PLAIN_CREATE_CUSTOMER_GROUP tool output.
 */
type PLAIN_PLAIN_CREATE_CUSTOMER_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CustomerGroupModel
       * @description Details of the created customer group
       * @default null
       */
      customerGroup: {
          /**
           * Color
           * @description Hex color code for the group
           */
          color: string;
          /**
           * Created At
           * @description Creation timestamp
           */
          createdAt: {
              /**
               * Iso8601
               * @description Date and time in ISO 8601 format
               */
              iso8601: string;
          };
          /**
           * External Id
           * @description Optional external ID of the group
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description ID of the created customer group
           */
          id: string;
          /**
           * Key
           * @description Unique key for the customer group
           */
          key: string;
          /**
           * Name
           * @description Name of the customer group
           */
          name: string;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updatedAt: {
              /**
               * Iso8601
               * @description Date and time in ISO 8601 format
               */
              iso8601: string;
          };
      } | null;
      /**
       * MutationError
       * @description Error information if creation failed
       * @default null
       */
      error: {
          /**
           * Code
           * @description Fixed error code identifying the error
           */
          code: string;
          /**
           * Fields
           * @description List of field-specific errors if any
           * @default null
           */
          fields: {
              /**
               * Field
               * @description Field with validation error
               */
              field: string;
              /**
               * Message
               * @description Technical error message for the field error
               */
              message: string;
              /**
               * Type
               * @description Type of the field error, e.g., REQUIRED or VALIDATION
               */
              type: string;
          }[] | null;
          /**
           * Message
           * @description Technical error message for the mutation failure
           */
          message: string;
          /**
           * Type
           * @description High-level error type, e.g., VALIDATION, FORBIDDEN
           */
          type: string;
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
 * Type of PLAIN's PLAIN_PLAIN_LIST_CUSTOMER_GROUPS tool input.
 */
type PLAIN_PLAIN_LIST_CUSTOMER_GROUPS_INPUT = {
  /**
   * After
   * @description Cursor for forward pagination. Use with 'first'.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for backward pagination. Use with 'last'.
   * @default null
   */
  before: string | null;
  /**
   * CustomerGroupsFilter
   * @description Filters to apply when fetching customer groups.
   * @default null
   */
  filters: {
      /**
       * External Ids
       * @description Only returns groups with these external IDs.
       * @default null
       */
      externalIds: string[] | null;
  } | null;
  /**
   * First
   * @description Number of groups to fetch after the 'after' cursor. Must be ≥ 1.
   * @default null
   */
  first: number | null;
  /**
   * Last
   * @description Number of groups to fetch before the 'before' cursor. Must be ≥ 1.
   * @default null
   */
  last: number | null;
};

/**
 * Type of PLAIN's PLAIN_PLAIN_LIST_CUSTOMER_GROUPS tool output.
 */
type PLAIN_PLAIN_LIST_CUSTOMER_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Customer Groups */
      customerGroups: {
          /** Edges */
          edges: {
              /**
               * Cursor
               * @description Cursor for pagination.
               */
              cursor: string;
              /** Node */
              node: {
                  /**
                   * Color
                   * @description Hex color code assigned to the group.
                   */
                  color: string;
                  /**
                   * Created At
                   * @description ISO8601 timestamp when the group was created.
                   */
                  createdAt: string;
                  /**
                   * External Id
                   * @description External ID of the group.
                   * @default null
                   */
                  externalId: string | null;
                  /**
                   * Id
                   * @description Unique identifier of the customer group.
                   */
                  id: string;
                  /**
                   * Key
                   * @description Key of the customer group.
                   */
                  key: string;
                  /**
                   * Name
                   * @description Name of the customer group.
                   */
                  name: string;
                  /**
                   * Updated At
                   * @description ISO8601 timestamp when the group was last updated.
                   */
                  updatedAt: string;
              };
          }[];
          /** Page Info */
          pageInfo: {
              /**
               * End Cursor
               * @default null
               */
              endCursor: string | null;
              /** Has Next Page */
              hasNextPage: boolean;
              /** Has Previous Page */
              hasPreviousPage: boolean;
              /**
               * Start Cursor
               * @default null
               */
              startCursor: string | null;
          };
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
 * Type of PLAIN's PLAIN_PLAIN_QUERY_THREADS tool input.
 */
type PLAIN_PLAIN_QUERY_THREADS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination returned by a previous call. Omit for first page.
   * @default null
   */
  cursor: string | null;
  /**
   * Statuses
   * @description Filter threads by status. Supported values: TODO, SNOOZED, DONE.
   * @default null
   */
  statuses: string[] | null;
};

/**
 * Type of PLAIN's PLAIN_PLAIN_QUERY_THREADS tool output.
 */
type PLAIN_PLAIN_QUERY_THREADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Threads
       * @description Paginated threads list.
       */
      threads: {
          /**
           * Edges
           * @description List of thread edges.
           */
          edges: {
              /**
               * Cursor
               * @description Cursor for this edge.
               */
              cursor: string;
              /**
               * Node
               * @description Thread node.
               */
              node: {
                  /**
                   * Created At
                   * @description Creation timestamp object with iso8601 field.
                   */
                  createdAt: {
                      [key: string]: string;
                  };
                  /**
                   * Id
                   * @description Unique ID of the thread.
                   */
                  id: string;
                  /**
                   * Priority
                   * @description Priority level of the thread.
                   * @default null
                   */
                  priority: number | null;
                  /**
                   * Ref
                   * @description Human-readable reference of the thread.
                   */
                  ref: string;
                  /**
                   * Status
                   * @description Current status of the thread.
                   */
                  status: string;
                  /**
                   * Title
                   * @description Title of the thread.
                   */
                  title: string;
                  /**
                   * Updated At
                   * @description Last update timestamp object with iso8601 field.
                   */
                  updatedAt: {
                      [key: string]: string;
                  };
              };
          }[];
          /**
           * Page Info
           * @description Pagination metadata.
           */
          pageInfo: {
              /**
               * End Cursor
               * @description Cursor of the last item in this page.
               * @default null
               */
              endCursor: string | null;
              /**
               * Has Next Page
               * @description True if there's a next page.
               */
              hasNextPage: boolean;
              /**
               * Has Previous Page
               * @description True if there's a previous page.
               */
              hasPreviousPage: boolean;
              /**
               * Start Cursor
               * @description Cursor of the first item in this page.
               * @default null
               */
              startCursor: string | null;
          };
          /**
           * Total Count
           * @description Total number of threads.
           */
          totalCount: number;
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
 * Type of PLAIN's PLAIN_REMOVE_CUSTOMER_FROM_GROUP tool input.
 */
type PLAIN_REMOVE_CUSTOMER_FROM_GROUP_INPUT = {
  /**
   * Customer Group Identifiers
   * @description List of customer group identifiers. Must contain at least one identifier.
   */
  customerGroupIdentifiers?: {
      /**
       * Customer Group Id
       * @description Plain internal ID of the customer group.
       * @default null
       */
      customerGroupId: string | null;
      /**
       * Customer Group Key
       * @description Unique key of the customer group.
       * @default null
       */
      customerGroupKey: string | null;
      /**
       * External Id
       * @description Your external ID for the customer group.
       * @default null
       */
      externalId: string | null;
  }[];
  /**
   * Customer Id
   * @description ID of the customer to remove from groups.
   */
  customerId?: string;
};

/**
 * Type of PLAIN's PLAIN_REMOVE_CUSTOMER_FROM_GROUP tool output.
 */
type PLAIN_REMOVE_CUSTOMER_FROM_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * MutationError
       * @description Mutation error, if any.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Fixed error code from the API.
           */
          code: string;
          /**
           * Fields
           * @description List of field-specific errors, if any.
           * @default null
           */
          fields: {
              /**
               * Field
               * @description Name of the field where error occurred.
               */
              field: string;
              /**
               * Message
               * @description Technical error message.
               */
              message: string;
              /**
               * Type
               * @description Type of field error.
               * @enum {string}
               */
              type: "VALIDATION" | "REQUIRED" | "NOT_FOUND";
          }[] | null;
          /**
           * Message
           * @description Technical error message.
           */
          message: string;
          /**
           * Type
           * @description Type of error.
           * @enum {string}
           */
          type: "VALIDATION" | "FORBIDDEN" | "INTERNAL";
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
 * Type of PLAIN's PLAIN_SEND_MESSAGE tool input.
 */
type PLAIN_SEND_MESSAGE_INPUT = {
  /**
   * ChannelSpecificOptions
   * @description Channel-specific options such as email CC/BCC recipients
   * @default null
   */
  channelSpecificOptions: {
      /**
       * EmailOptions
       * @description Email-specific options like CC/BCC
       * @default null
       */
      email: {
          /**
           * Additional Recipients
           * @description List of CC recipients
           * @default null
           */
          additionalRecipients: {
              /**
               * Email
               * Format: email
               * @description Email address of the recipient
               */
              email: unknown;
              /**
               * Name
               * @description Name of the recipient
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Hidden Recipients
           * @description List of BCC recipients
           * @default null
           */
          hiddenRecipients: {
              /**
               * Email
               * Format: email
               * @description Email address of the recipient
               */
              email: unknown;
              /**
               * Name
               * @description Name of the recipient
               * @default null
               */
              name: string | null;
          }[] | null;
      } | null;
  } | null;
  /**
   * Impersonation
   * @description Impersonate a customer when sending the message
   * @default null
   */
  impersonation: {
      /**
       * As Customer
       * @description Send the message as this customer
       */
      asCustomer: {
          /**
           * Customer Identifier
           * @description Identifier of the customer to impersonate
           */
          customerIdentifier: {
              /**
               * Customer Id
               * @description Plain customer ID to identify the customer
               * @default null
               */
              customerId: string | null;
              /**
               * Email Address
               * Format: email
               * @description Email address of the customer
               * @default null
               */
              emailAddress: unknown;
              /**
               * External Id
               * @description External ID for the customer
               * @default null
               */
              externalId: string | null;
          };
      };
  } | null;
  /**
   * Markdown Content
   * @description Markdown-formatted content of the message; at least one of textContent or markdownContent is required
   * @default null
   */
  markdownContent: string | null;
  /**
   * Text Content
   * @description Plain text content of the message
   * @default null
   */
  textContent: string | null;
  /**
   * Thread Id
   * @description Unique identifier of the thread to reply to
   */
  threadId?: string;
};

/**
 * Type of PLAIN's PLAIN_SEND_MESSAGE tool output.
 */
type PLAIN_SEND_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description GraphQL response payload
   */
  data?: {
      /**
       * Reply To Thread
       * @description Empty object representing a successful send
       */
      replyToThread: {
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
 * Type of PLAIN's PLAIN_UPDATE_COMPANY tool input.
 */
type PLAIN_UPDATE_COMPANY_INPUT = {
  /**
   * Account Owner User Id
   * @description ID of the user to assign as account owner.
   * @default null
   */
  accountOwnerUserId: string | null;
  /**
   * Company Id
   * @description Unique ID of the existing company to update.
   */
  companyId?: string;
  /**
   * Contract Value
   * @description Optional contract value in cents. Must be non-negative.
   * @default null
   */
  contractValue: number | null;
  /**
   * Domain Name
   * @description New domain name for the company (e.g., 'acme.com').
   */
  domainName?: string;
  /**
   * Name
   * @description New name for the company.
   */
  name?: string;
};

/**
 * Type of PLAIN's PLAIN_UPDATE_COMPANY tool output.
 */
type PLAIN_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Updated company details.
       */
      company: {
          /**
           * Created At
           * @description When the company was created.
           */
          createdAt: {
              /**
               * Iso8601
               * @description ISO 8601 timestamp of creation.
               */
              iso8601: string;
          };
          /**
           * Domain Name
           * @description Domain name of the company.
           */
          domainName: string;
          /**
           * Id
           * @description Unique ID of the company.
           */
          id: string;
          /**
           * Name
           * @description Name of the company.
           */
          name: string;
      };
      /**
       * MutationError
       * @description Mutation-level error if the upsert failed.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Fixed error code for handling specific errors.
           */
          code: string;
          /**
           * Fields
           * @description List of field-level errors if validation failed.
           * @default null
           */
          fields: {
              /**
               * Field
               * @description Name of the input field with an error.
               */
              field: string;
              /**
               * Message
               * @description Technical description of the field error.
               */
              message: string;
              /**
               * Type
               * @description Category of the field error (e.g., VALIDATION, REQUIRED, NOT_FOUND).
               */
              type: string;
          }[] | null;
          /**
           * Message
           * @description Technical description of the mutation error.
           */
          message: string;
          /**
           * Type
           * @description Category of the error (e.g., VALIDATION, FORBIDDEN, INTERNAL).
           */
          type: string;
      } | null;
      /**
       * Result
       * @description Upsert result: 'CREATED' or 'UPDATED'.
       */
      result: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PLAIN's PLAIN_UPDATE_THREAD tool input.
 */
type PLAIN_UPDATE_THREAD_INPUT = {
  /**
   * Thread Id
   * @description Unique identifier of the thread to update
   */
  threadId?: string;
  /**
   * Title
   * @description New title for the thread
   */
  title?: string;
};

/**
 * Type of PLAIN's PLAIN_UPDATE_THREAD tool output.
 */
type PLAIN_UPDATE_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * MutationError
       * @description Error information if update failed
       * @default null
       */
      error: {
          /**
           * Code
           * @description Fixed error code identifying the error
           */
          code: string;
          /**
           * Fields
           * @description List of field-specific errors, if any
           * @default null
           */
          fields: {
              /**
               * Field
               * @description The name of the field with an error
               */
              field: string;
              /**
               * Message
               * @description Technical message describing the field error
               */
              message: string;
              /**
               * Type
               * @description Type of the field error, e.g., REQUIRED or VALIDATION
               */
              type: string;
          }[] | null;
          /**
           * Message
           * @description Technical message describing the mutation failure
           */
          message: string;
          /**
           * Type
           * @description High-level error type, e.g., VALIDATION or FORBIDDEN
           */
          type: string;
      } | null;
      /**
       * ThreadModel
       * @description Updated thread details
       * @default null
       */
      thread: {
          /**
           * Id
           * @description Thread unique identifier
           */
          id: string;
          /**
           * Title
           * @description Thread title
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the thread was last updated
           */
          updatedAt: {
              /**
               * Iso8601
               * @description ISO 8601 timestamp string
               */
              iso8601: string;
          };
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
 * Type of PLAIN's PLAIN_UPSERT_CUSTOMER tool input.
 */
type PLAIN_UPSERT_CUSTOMER_INPUT = {
  /**
   * Identifier
   * @description Selector for existing customer.
   */
  identifier?: {
      /**
       * Customer Id
       * @description Plain internal customer ID.
       * @default null
       */
      customerId: string | null;
      /**
       * Email Address
       * Format: email
       * @description Customer's email address. Must be unique and valid format.
       * @default null
       */
      emailAddress: unknown;
      /**
       * External Id
       * @description External ID of the customer in your system.
       * @default null
       */
      externalId: string | null;
  };
  /**
   * On Create
   * @description Details for creation if not found.
   */
  onCreate?: {
      /**
       * Customer Group Identifiers
       * @description Groups to assign on create.
       * @default null
       */
      customerGroupIdentifiers: {
          /**
           * Customer Group Id
           * @description Plain internal ID of the customer group.
           * @default null
           */
          customerGroupId: string | null;
          /**
           * Customer Group Key
           * @description Unique key of the customer group.
           * @default null
           */
          customerGroupKey: string | null;
          /**
           * External Id
           * @description Your external ID for the customer group.
           * @default null
           */
          external_id: string | null;
      }[] | null;
      /**
       * Email
       * @description Email details for the new customer.
       */
      email: {
          /**
           * Email
           * Format: email
           * @description The customer's email address.
           */
          email: unknown;
          /**
           * Is Verified
           * @description Whether the email address is already verified.
           */
          isVerified: boolean;
      };
      /**
       * External Id
       * @description External ID to set on customer creation.
       * @default null
       */
      externalId: string | null;
      /**
       * Full Name
       * @description Full name for the new customer.
       */
      fullName: string;
      /**
       * Short Name
       * @description Optional short name for the new customer.
       * @default null
       */
      shortName: string | null;
      /**
       * Tenant Identifiers
       * @description Tenants to assign on create.
       * @default null
       */
      tenantIdentifiers: {
          /**
           * External Id
           * @description External ID of the tenant.
           * @default null
           */
          external_id: string | null;
          /**
           * Tenant Id
           * @description Plain internal ID of the tenant.
           * @default null
           */
          tenantId: string | null;
      }[] | null;
  };
  /**
   * On Update
   * @description Details for update if found.
   */
  onUpdate?: {
      /**
       * EmailAddressInput
       * @description Input object for email address with verification status.
       * @default null
       */
      email: {
          /**
           * Email
           * Format: email
           * @description The customer's email address.
           */
          email: unknown;
          /**
           * Is Verified
           * @description Whether the email address is already verified.
           */
          isVerified: boolean;
      } | null;
      /**
       * OptionalStringInput
       * @description Wrapper for optional string inputs in onUpdate.
       * @default null
       */
      externalId: {
          /** Value */
          value: string | null;
      } | null;
      /**
       * StringInput
       * @description Wrapper for required string inputs in onUpdate.
       * @default null
       */
      fullName: {
          /** Value */
          value: string;
      } | null;
      /**
       * OptionalStringInput
       * @description Wrapper for optional string inputs in onUpdate.
       * @default null
       */
      shortName: {
          /** Value */
          value: string | null;
      } | null;
  };
};

/**
 * Type of PLAIN's PLAIN_UPSERT_CUSTOMER tool output.
 */
type PLAIN_UPSERT_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** CustomerResponse */
      customer: {
          /**
           * Email
           * @description Input object for email address with verification status.
           */
          email: {
              /**
               * Email
               * Format: email
               * @description The customer's email address.
               */
              email: unknown;
              /**
               * Is Verified
               * @description Whether the email address is already verified.
               */
              isVerified: boolean;
          };
          /**
           * External Id
           * @default null
           */
          externalId: string | null;
          /** Full Name */
          fullName: string;
          /** Id */
          id: string;
          /**
           * Short Name
           * @default null
           */
          shortName: string | null;
      } | null;
      /** MutationError */
      error: {
          /** Code */
          code: string;
          /** Fields */
          fields: {
              /** Field */
              field: string;
              /** Message */
              message: string;
              /**
               * Type
               * @enum {string}
               */
              type: "VALIDATION" | "REQUIRED" | "NOT_FOUND";
          }[] | null;
          /** Message */
          message: string;
      } | null;
      /**
       * Result
       * @enum {string}
       */
      result: "CREATED" | "UPDATED" | "NOOP";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PLAIN".
 */
export type PLAIN_TOOL_INPUTS = {
  ADD_CUSTOMER_TO_GROUP: PLAIN_ADD_CUSTOMER_TO_GROUP_INPUT
  CREATE_CUSTOMER: PLAIN_CREATE_CUSTOMER_INPUT
  CREATE_THREAD: PLAIN_CREATE_THREAD_INPUT
  DELETE_CUSTOMER: PLAIN_DELETE_CUSTOMER_INPUT
  DELETE_USER: PLAIN_DELETE_USER_INPUT
  FETCH_COMPANY: PLAIN_FETCH_COMPANY_INPUT
  FETCH_ISSUES: PLAIN_FETCH_ISSUES_INPUT
  FETCH_TIER: PLAIN_FETCH_TIER_INPUT
  GET_CUSTOMERS: PLAIN_GET_CUSTOMERS_INPUT
  GET_CUSTOMER_BY_EMAIL: PLAIN_GET_CUSTOMER_BY_EMAIL_INPUT
  GET_CUSTOMER_BY_ID: PLAIN_GET_CUSTOMER_BY_ID_INPUT
  GET_THREAD_BY_ID: PLAIN_GET_THREAD_BY_ID_INPUT
  GET_USER_BY_ID: PLAIN_GET_USER_BY_ID_INPUT
  LIST_THREADS: PLAIN_LIST_THREADS_INPUT
  LIST_TIERS: PLAIN_LIST_TIERS_INPUT
  PLAIN_CREATE_CUSTOMER_GROUP: PLAIN_PLAIN_CREATE_CUSTOMER_GROUP_INPUT
  PLAIN_LIST_CUSTOMER_GROUPS: PLAIN_PLAIN_LIST_CUSTOMER_GROUPS_INPUT
  PLAIN_QUERY_THREADS: PLAIN_PLAIN_QUERY_THREADS_INPUT
  REMOVE_CUSTOMER_FROM_GROUP: PLAIN_REMOVE_CUSTOMER_FROM_GROUP_INPUT
  SEND_MESSAGE: PLAIN_SEND_MESSAGE_INPUT
  UPDATE_COMPANY: PLAIN_UPDATE_COMPANY_INPUT
  UPDATE_THREAD: PLAIN_UPDATE_THREAD_INPUT
  UPSERT_CUSTOMER: PLAIN_UPSERT_CUSTOMER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PLAIN".
 */
export type PLAIN_TOOL_OUTPUTS = {
  ADD_CUSTOMER_TO_GROUP: PLAIN_ADD_CUSTOMER_TO_GROUP_OUTPUT
  CREATE_CUSTOMER: PLAIN_CREATE_CUSTOMER_OUTPUT
  CREATE_THREAD: PLAIN_CREATE_THREAD_OUTPUT
  DELETE_CUSTOMER: PLAIN_DELETE_CUSTOMER_OUTPUT
  DELETE_USER: PLAIN_DELETE_USER_OUTPUT
  FETCH_COMPANY: PLAIN_FETCH_COMPANY_OUTPUT
  FETCH_ISSUES: PLAIN_FETCH_ISSUES_OUTPUT
  FETCH_TIER: PLAIN_FETCH_TIER_OUTPUT
  GET_CUSTOMERS: PLAIN_GET_CUSTOMERS_OUTPUT
  GET_CUSTOMER_BY_EMAIL: PLAIN_GET_CUSTOMER_BY_EMAIL_OUTPUT
  GET_CUSTOMER_BY_ID: PLAIN_GET_CUSTOMER_BY_ID_OUTPUT
  GET_THREAD_BY_ID: PLAIN_GET_THREAD_BY_ID_OUTPUT
  GET_USER_BY_ID: PLAIN_GET_USER_BY_ID_OUTPUT
  LIST_THREADS: PLAIN_LIST_THREADS_OUTPUT
  LIST_TIERS: PLAIN_LIST_TIERS_OUTPUT
  PLAIN_CREATE_CUSTOMER_GROUP: PLAIN_PLAIN_CREATE_CUSTOMER_GROUP_OUTPUT
  PLAIN_LIST_CUSTOMER_GROUPS: PLAIN_PLAIN_LIST_CUSTOMER_GROUPS_OUTPUT
  PLAIN_QUERY_THREADS: PLAIN_PLAIN_QUERY_THREADS_OUTPUT
  REMOVE_CUSTOMER_FROM_GROUP: PLAIN_REMOVE_CUSTOMER_FROM_GROUP_OUTPUT
  SEND_MESSAGE: PLAIN_SEND_MESSAGE_OUTPUT
  UPDATE_COMPANY: PLAIN_UPDATE_COMPANY_OUTPUT
  UPDATE_THREAD: PLAIN_UPDATE_THREAD_OUTPUT
  UPSERT_CUSTOMER: PLAIN_UPSERT_CUSTOMER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PLAIN toolkit.
 */
export const PLAIN = {
  slug: "plain",
  tools: {
    /**
     * Tool to add a customer to one or more customer groups. use when you have a customer and groups ready.
     */
    ADD_CUSTOMER_TO_GROUP: "PLAIN_ADD_CUSTOMER_TO_GROUP",
    /**
     * Tool to create a customer. use after gathering email and full name to provision a new customer in plain.
     */
    CREATE_CUSTOMER: "PLAIN_CREATE_CUSTOMER",
    /**
     * Tool to create a new thread. use after obtaining valid customer identifier.
     */
    CREATE_THREAD: "PLAIN_CREATE_THREAD",
    /**
     * Tool to delete a customer from the system. use when you need to remove a customer by their id.
     */
    DELETE_CUSTOMER: "PLAIN_DELETE_CUSTOMER",
    /**
     * Tool to delete a user from the system. use when you need to remove a user by their id after confirming existence.
     */
    DELETE_USER: "PLAIN_DELETE_USER",
    /**
     * Tool to fetch company details by id. use when you need the full profile of a company, including name, domain, contract value, owner info, and timestamps.
     */
    FETCH_COMPANY: "PLAIN_FETCH_COMPANY",
    /**
     * Tool to fetch external issue links for a customer. use when you need to list all issues across a customer's threads.
     */
    FETCH_ISSUES: "PLAIN_FETCH_ISSUES",
    /**
     * Tool to fetch a tier by its id. use when you have a tier id and need its metadata before proceeding. example: "fetch tier with id tier 123".
     */
    FETCH_TIER: "PLAIN_FETCH_TIER",
    /**
     * Tool to fetch a list of customers. use when retrieving multiple customer records with pagination, filtering, or sorting.
     */
    GET_CUSTOMERS: "PLAIN_GET_CUSTOMERS",
    /**
     * Tool to fetch customer details by email. use after confirming the email exists to retrieve detailed customer information.
     */
    GET_CUSTOMER_BY_EMAIL: "PLAIN_GET_CUSTOMER_BY_EMAIL",
    /**
     * Tool to retrieve details of a specific customer by their unique id. use after obtaining the customer's id to fetch their complete record.
     */
    GET_CUSTOMER_BY_ID: "PLAIN_GET_CUSTOMER_BY_ID",
    /**
     * Tool to fetch details of a specific thread using its unique identifier. use after confirming the thread id is correct.
     */
    GET_THREAD_BY_ID: "PLAIN_GET_THREAD_BY_ID",
    /**
     * Tool to fetch user by id. use when you have a valid user id to retrieve detailed user information.
     */
    GET_USER_BY_ID: "PLAIN_GET_USER_BY_ID",
    /**
     * Tool to list all threads. use when you need to retrieve thread summaries with optional pagination.
     */
    LIST_THREADS: "PLAIN_LIST_THREADS",
    /**
     * Tool to retrieve a list of tiers with pagination. use when you need to browse available tiers after determining pagination cursors. example: 'list tiers with first=25'.
     */
    LIST_TIERS: "PLAIN_LIST_TIERS",
    /**
     * Tool to create a new customer group. use when needing to group customers for segmentation. creates a new customer group with specified name, key, color, and optional externalid.
     */
    PLAIN_CREATE_CUSTOMER_GROUP: "PLAIN_PLAIN_CREATE_CUSTOMER_GROUP",
    /**
     * Tool to list all customer groups. use when you need to retrieve group metadata with optional pagination or filters.
     */
    PLAIN_LIST_CUSTOMER_GROUPS: "PLAIN_PLAIN_LIST_CUSTOMER_GROUPS",
    /**
     * Tool to retrieve a paginated list of threads. use when you need to list threads with optional status filtering.
     */
    PLAIN_QUERY_THREADS: "PLAIN_PLAIN_QUERY_THREADS",
    /**
     * Tool to remove a customer from one or more customer groups. use when you need to revoke memberships.
     */
    REMOVE_CUSTOMER_FROM_GROUP: "PLAIN_REMOVE_CUSTOMER_FROM_GROUP",
    /**
     * Tool to send a new message within a thread. use after identifying the thread and preparing message content.
     */
    SEND_MESSAGE: "PLAIN_SEND_MESSAGE",
    /**
     * Tool to update an existing company's details. use when modifying a company's name or domain.
     */
    UPDATE_COMPANY: "PLAIN_UPDATE_COMPANY",
    /**
     * Tool to update a thread's title. use when renaming a thread after confirming its id.
     */
    UPDATE_THREAD: "PLAIN_UPDATE_THREAD",
    /**
     * Tool to upsert (create or update) a customer. use when syncing or ensuring a customer record exists before subsequent actions.
     */
    UPSERT_CUSTOMER: "PLAIN_UPSERT_CUSTOMER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PLAIN".
 */
export type PLAIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PLAIN".
 */
export type PLAIN_TRIGGER_EVENTS = {}
