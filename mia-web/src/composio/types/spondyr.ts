// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SPONDYR's SPONDYR_CONDITIONS_LIST tool input.
 */
type SPONDYR_CONDITIONS_LIST_INPUT = {
  /**
   * Transaction Type
   * @description Name of the transaction type to list all conditions for
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_CONDITIONS_LIST tool output.
 */
type SPONDYR_CONDITIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description List of conditions associated with the transaction type
       */
      Data: {
          /**
           * Field Name
           * @description The JSON/CSV field that this condition applies to
           */
          FieldName: string;
          /**
           * Name
           * @description The name of the condition
           */
          Name: string;
          /**
           * Possible Values
           * @description Optional newline-delimited list of possible matching values
           * @default null
           */
          PossibleValues: string | null;
          /**
           * Transaction Type
           * @description The transaction type this condition applies to
           */
          TransactionType: string;
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
 * Type of SPONDYR's SPONDYR_CREATE_CONDITION tool input.
 */
type SPONDYR_CREATE_CONDITION_INPUT = {
  /**
   * Field Name
   * @description The field name from the transaction type JSON/CSV to apply this condition to.
   */
  FieldName?: string;
  /**
   * Name
   * @description The name of the new Condition.
   */
  Name?: string;
  /**
   * Possible Values
   * @description Optional newline-delimited values to match (use '
   *     ' or '
   *     ' between values).
   * @default null
   */
  PossibleValues: string | null;
  /**
   * Transaction Type
   * @description The name of the Transaction Type this Condition is for.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_CREATE_CONDITION tool output.
 */
type SPONDYR_CREATE_CONDITION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error details if APIStatus is ERROR.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Reference Id
       * @description Reference ID for the created Condition.
       */
      ReferenceID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_CREATE_TRANSACTION_TYPE tool input.
 */
type SPONDYR_CREATE_TRANSACTION_TYPE_INPUT = {
  /**
   * Name
   * @description The name of the Transaction Type to create
   */
  Name?: string;
  /**
   * Template Json
   * @description JSON-formatted string containing sample data defining the transaction schema
   */
  TemplateJSON?: string;
};

/**
 * Type of SPONDYR's SPONDYR_CREATE_TRANSACTION_TYPE tool output.
 */
type SPONDYR_CREATE_TRANSACTION_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description APIStatus: OK if successful, ERROR if not
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Reference Id
       * @description Reference ID for the created Transaction Type
       */
      ReferenceID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_DELIVER_SPONDYR tool input.
 */
type SPONDYR_DELIVER_SPONDYR_INPUT = {
  /**
   * New Recipients
   * @description Additional recipients beyond the originally configured list.
   * @default null
   */
  NewRecipients: {
      /**
       * Address1
       * @description The recipient's street address.
       * @default null
       */
      Address1: string | null;
      /**
       * Address2
       * @description The recipient's street address 2.
       * @default null
       */
      Address2: string | null;
      /**
       * City
       * @description The recipient's city.
       * @default null
       */
      City: string | null;
      /**
       * Email
       * @description The recipient's email address.
       * @default null
       */
      Email: string | null;
      /**
       * Fax
       * @description The recipient's fax number.
       * @default null
       */
      Fax: string | null;
      /**
       * First Name
       * @description The recipient's first name.
       * @default null
       */
      FirstName: string | null;
      /**
       * Last Name
       * @description The recipient's last name.
       * @default null
       */
      LastName: string | null;
      /**
       * Mobile Phone
       * @description The recipient's mobile phone number.
       * @default null
       */
      MobilePhone: string | null;
      /**
       * Remote Id
       * @description The recipient's identifier from your application.
       * @default null
       */
      RemoteID: string | null;
      /**
       * State
       * @description The recipient's state.
       * @default null
       */
      State: string | null;
      /**
       * Targeted Delivery Method
       * @description Optional forced delivery method for this recipient (Email, Fax, Mail, Text).
       * @default null
       * @enum {string|null}
       */
      TargetedDeliveryMethod: "Email" | "Fax" | "Mail" | "Text" | null;
      /**
       * Template
       * @description Comma-delimited list of template names from the original generate request or 'All'.
       * @default null
       */
      Template: string | null;
      /**
       * Zip
       * @description The recipient's postal code.
       * @default null
       */
      Zip: string | null;
  }[] | null;
  /**
   * Original Recipients
   * @description Original recipients to deliver; 'All', 'None', or comma-delimited list. Defaults to 'All'.
   * @default All
   */
  OriginalRecipients: string | null;
  /**
   * Reference Id
   * @description The reference ID from the original generate request.
   */
  ReferenceID?: string;
  /**
   * Template
   * @description Templates to deliver; 'All' or comma-delimited list. Defaults to 'All'.
   * @default All
   */
  Template: string | null;
};

/**
 * Type of SPONDYR's SPONDYR_DELIVER_SPONDYR tool output.
 */
type SPONDYR_DELIVER_SPONDYR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if delivery succeeded; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Reference Id
       * @description Reference ID for retrieving status later.
       */
      ReferenceID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_EVENT_TYPE_UPDATE tool input.
 */
type SPONDYR_EVENT_TYPE_UPDATE_INPUT = {
  /**
   * Event Type
   * @description The name of the existing Event Type to update.
   */
  EventType?: string;
  /**
   * Name
   * @description The new name for the Event Type.
   */
  Name?: string;
  /**
   * Transaction Type
   * @description The Transaction Type name this Event Type belongs to.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_EVENT_TYPE_UPDATE tool output.
 */
type SPONDYR_EVENT_TYPE_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if the update failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Reference Id
       * @description Identifier for retrieving or updating the Event Type.
       */
      ReferenceID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_GET_EVENT_TYPES tool input.
 */
type SPONDYR_GET_EVENT_TYPES_INPUT = {
  /**
   * Transaction Type
   * @description The name of the Transaction Type whose event types are to be listed
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_GET_EVENT_TYPES tool output.
 */
type SPONDYR_GET_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description APIStatus: OK if successful, ERROR if not
       */
      APIStatus: string;
      /**
       * Data
       * @description List of event types for the specified transaction type
       */
      Data: {
          /**
           * Name
           * @description The name of the Event Type
           */
          Name: string;
          /**
           * Transaction Type
           * @description The Transaction Type name this Event Type is for
           */
          TransactionType: string;
      }[];
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_GET_SPONDYR_STATUS tool input.
 */
type SPONDYR_GET_SPONDYR_STATUS_INPUT = {
  /**
   * Application User Id
   * @description Optional user identifier for viewer context logging
   * @default null
   */
  ApplicationUserID: string | null;
  /**
   * First Name
   * @description Optional viewer first name for logging
   * @default null
   */
  FirstName: string | null;
  /**
   * Include Data
   * @description Include original data payload in the response if true
   * @default false
   */
  IncludeData: boolean;
  /**
   * Last Name
   * @description Optional viewer last name for logging
   * @default null
   */
  LastName: string | null;
  /**
   * Reference Id
   * @description Reference ID returned from the Send/Generate request
   */
  ReferenceID?: string;
};

/**
 * Type of SPONDYR's SPONDYR_GET_SPONDYR_STATUS tool output.
 */
type SPONDYR_GET_SPONDYR_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful, ERROR otherwise
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Correspondence
       * @description Generated correspondence items
       */
      Correspondence: {
          /**
           * Content Type
           * @description PDF, DOC, HTML, or TEXT
           */
          ContentType: string;
          /**
           * Created Date
           * @description Date when correspondence was queued for generation
           */
          CreatedDate: string;
          /**
           * Recipients
           * @description Delivery status for each recipient
           */
          Recipients: {
              /**
               * Cover Page Uri
               * @description URI to the cover page, valid for 20 minutes
               * @default null
               */
              CoverPageURI: string | null;
              /**
               * Delivery Date
               * @description Date of delivery or null if not delivered yet
               * @default null
               */
              DeliveryDate: string | null;
              /**
               * Delivery Status Code
               * @description SUCCESS, UNDELIVERABLE, or ERROR
               */
              DeliveryStatusCode: string;
              /**
               * Delivery Status Name
               * @description Success, Undeliverable, or Error
               */
              DeliveryStatusName: string;
              /**
               * Delivery To
               * @description Email, fax, or postal address of recipient
               */
              DeliveryTo: string;
              /**
               * Details
               * @description Any delivery messages or errors
               * @default null
               */
              Details: string | null;
              /**
               * Is Successful
               * @description True if delivery succeeded
               */
              IsSuccessful: boolean;
              /**
               * Name
               * @description Recipient's name
               */
              Name: string;
          }[];
          /**
           * Search Filters
           * @description Search tags associated with this correspondence
           */
          SearchFilters: {
              /**
               * Name
               * @description Search tag name
               */
              Name: string;
              /**
               * Value
               * @description Value logged for this search tag
               */
              Value: string;
          }[];
          /**
           * Status Code
           * @description GENERATED, ERROR, QUEUEDLIM, QUEUEDSYS, or CANCELED
           */
          StatusCode: string;
          /**
           * Status Name
           * @description Human-readable status of the correspondence item
           */
          StatusName: string;
          /**
           * Template
           * @description Name of the template used
           */
          Template: string;
          /**
           * Uri
           * @description URI to generated correspondence, valid for 20 minutes
           */
          URI: string;
      }[];
      /**
       * Created Date
       * @description Date when the original request was made
       */
      CreatedDate: string;
      /**
       * Data
       * @description Original data payload, included only if IncludeData=true
       * @default null
       */
      Data: {
          [key: string]: unknown;
      } | null;
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Event Type
       * @description Event Type from the original send/generate request
       */
      EventType: string;
      /**
       * Reference Id
       * @description Reference ID of the original send/generate request
       */
      ReferenceID: string;
      /**
       * Status Code
       * @description Processing status code of the correspondence
       * @enum {string}
       */
      StatusCode: "SUBMITTED" | "MATCH" | "FINISH" | "FINISHPART" | "NOMATCH" | "QUEUEDLIM" | "QUEUEDSYS" | "CANCELED" | "ERROR";
      /**
       * Status Name
       * @description Human-readable status description
       */
      StatusName: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_GET_TRANSACTION_TYPES tool input.
 */
type SPONDYR_GET_TRANSACTION_TYPES_INPUT = object;

/**
 * Type of SPONDYR's SPONDYR_GET_TRANSACTION_TYPES tool output.
 */
type SPONDYR_GET_TRANSACTION_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description APIStatus: OK if successful, ERROR if not
       */
      APIStatus: string;
      /**
       * Data
       * @description List of available transaction types
       */
      Data: {
          /**
           * Name
           * @description The name of the Transaction Type
           */
          Name: string;
          /**
           * Template Csv
           * @description Comma-delimited list of flattened JSON fields
           */
          TemplateCSV: string;
          /**
           * Template Json
           * @description JSON-formatted string containing all available properties with sample data
           */
          TemplateJSON: string;
      }[];
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_RECIPIENTS_LIST tool input.
 */
type SPONDYR_RECIPIENTS_LIST_INPUT = {
  /**
   * Transaction Type
   * @description The name of the Transaction Type whose recipients are to be listed
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_RECIPIENTS_LIST tool output.
 */
type SPONDYR_RECIPIENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful, ERROR if not
       */
      APIStatus: string;
      /**
       * Data
       * @description List of recipients for the specified transaction type
       */
      Data: {
          /**
           * Address1
           * @description Line 1 of the Recipient's address
           * @default null
           */
          Address1: string | null;
          /**
           * Address2
           * @description Line 2 of the Recipient's address
           * @default null
           */
          Address2: string | null;
          /**
           * City
           * @description The Recipient's city
           * @default null
           */
          City: string | null;
          /**
           * Email
           * @description The Recipient's email address
           * @default null
           */
          Email: string | null;
          /**
           * Fax
           * @description The Recipient's fax number
           * @default null
           */
          Fax: string | null;
          /**
           * First Name
           * @description The Recipient's first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Last Name
           * @description The Recipient's last name
           * @default null
           */
          LastName: string | null;
          /**
           * Mobile Phone
           * @description The Recipient's mobile phone number
           * @default null
           */
          MobilePhone: string | null;
          /**
           * Name
           * @description The name of the Recipient
           */
          Name: string;
          /**
           * Remote Id
           * @description The Recipient's remote id
           * @default null
           */
          RemoteID: string | null;
          /**
           * State
           * @description The Recipient's state or province
           * @default null
           */
          State: string | null;
          /**
           * Transaction Type
           * @description The Transaction Type this Recipient is for
           */
          TransactionType: string;
          /**
           * Zip
           * @description The Recipient's postal code
           * @default null
           */
          Zip: string | null;
      }[];
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_RECIPIENT_DELETE tool input.
 */
type SPONDYR_RECIPIENT_DELETE_INPUT = {
  /**
   * Recipient
   * @description The name of the Recipient to delete or deactivate.
   */
  Recipient?: string;
  /**
   * Transaction Type
   * @description The name of the Transaction Type this Recipient is for.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_RECIPIENT_DELETE tool output.
 */
type SPONDYR_RECIPIENT_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if deletion succeeded; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if deletion failed.
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_RECIPIENT_GET tool input.
 */
type SPONDYR_RECIPIENT_GET_INPUT = {
  /**
   * Recipient
   * @description The name of the Recipient to retrieve.
   */
  Recipient?: string;
  /**
   * Transaction Type
   * @description The name of the Transaction Type this Recipient is for.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_RECIPIENT_GET tool output.
 */
type SPONDYR_RECIPIENT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Address1
       * @description The Recipient's address 1.
       * @default null
       */
      Address1: string | null;
      /**
       * Address2
       * @description The Recipient's address 2.
       * @default null
       */
      Address2: string | null;
      /**
       * City
       * @description The Recipient's city.
       * @default null
       */
      City: string | null;
      /**
       * Email
       * @description The Recipient's email address.
       * @default null
       */
      Email: string | null;
      /**
       * Error Message
       * @description Error message if retrieval failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Fax
       * @description The Recipient's fax number.
       * @default null
       */
      Fax: string | null;
      /**
       * First Name
       * @description The Recipient's first name.
       * @default null
       */
      FirstName: string | null;
      /**
       * Last Name
       * @description The Recipient's last name.
       * @default null
       */
      LastName: string | null;
      /**
       * Mobile Phone
       * @description The Recipient's mobile phone number.
       * @default null
       */
      MobilePhone: string | null;
      /**
       * Name
       * @description The name of the Recipient.
       */
      Name: string;
      /**
       * Remote Id
       * @description The Recipient's remote id.
       * @default null
       */
      RemoteID: string | null;
      /**
       * State
       * @description The Recipient's state.
       * @default null
       */
      State: string | null;
      /**
       * Transaction Type
       * @description The Transaction Type name this Recipient is for.
       */
      TransactionType: string;
      /**
       * Zip
       * @description The Recipient's zip code.
       * @default null
       */
      Zip: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTERS_LIST tool input.
 */
type SPONDYR_SEARCH_FILTERS_LIST_INPUT = {
  /**
   * Transaction Type
   * @description The name of the Transaction Type whose search filters are to be listed
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTERS_LIST tool output.
 */
type SPONDYR_SEARCH_FILTERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful, ERROR if not
       */
      APIStatus: string;
      /**
       * Data
       * @description List of search filters for the specified transaction type
       */
      Data: {
          /**
           * Name
           * @description The name of the search filter
           */
          Name: string;
          /**
           * Tag
           * @description The value used to tag correspondence
           */
          Tag: string;
          /**
           * Transaction Type
           * @description The Transaction Type this search filter is for
           */
          TransactionType: string;
      }[];
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTER_CREATE tool input.
 */
type SPONDYR_SEARCH_FILTER_CREATE_INPUT = {
  /**
   * Name
   * @description The name of the new search filter.
   */
  Name?: string;
  /**
   * Tag
   * @description The tag value to assign for this search filter (e.g. {OrderNumber}).
   */
  Tag?: string;
  /**
   * Transaction Type
   * @description The name of the Transaction Type this Search Filter is for.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTER_CREATE tool output.
 */
type SPONDYR_SEARCH_FILTER_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error details if APIStatus is ERROR.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Reference Id
       * @description Reference ID for the created search filter.
       */
      ReferenceID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTER_DELETE tool input.
 */
type SPONDYR_SEARCH_FILTER_DELETE_INPUT = {
  /**
   * Search
   * @description The name of the Search Filter to delete.
   */
  Search?: string;
  /**
   * Transaction Type
   * @description The Transaction Type of the Search Filter.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTER_DELETE tool output.
 */
type SPONDYR_SEARCH_FILTER_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if deletion failed.
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTER_GET tool input.
 */
type SPONDYR_SEARCH_FILTER_GET_INPUT = {
  /**
   * Search
   * @description The name of the Search Filter to retrieve.
   */
  Search?: string;
  /**
   * Transaction Type
   * @description The Transaction Type of the Search Filter.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_FILTER_GET tool output.
 */
type SPONDYR_SEARCH_FILTER_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if retrieval failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Name
       * @description The name of the Search Filter.
       */
      Name: string;
      /**
       * Tag
       * @description The tag value used to label correspondence for searching.
       */
      Tag: string;
      /**
       * Transaction Type
       * @description The Transaction Type this Search Filter belongs to.
       */
      TransactionType: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_SPONDYRS tool input.
 */
type SPONDYR_SEARCH_SPONDYRS_INPUT = {
  /**
   * Batch Reference Id
   * @description Filter results to a specific batch reference ID.
   * @default null
   */
  BatchReferenceID: string | null;
  /**
   * Event Type
   * @description Restrict results to a given event type.
   * @default null
   */
  EventType: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  Page: number | null;
  /**
   * Page Size
   * @description Number of records per page (max 250).
   * @default null
   */
  PageSize: number | null;
  /**
   * Search Name
   * @description Name of the search filter/tag to apply.
   * @default null
   */
  SearchName: string | null;
  /**
   * Search Value
   * @description Value to match for the given search filter. Requires SearchName.
   * @default null
   */
  SearchValue: string | null;
  /**
   * Sort Column
   * @description Field name to sort by.
   * @default null
   */
  SortColumn: string | null;
  /**
   * Sort Order
   * @description Sort direction: ASC or DESC.
   * @default null
   * @enum {string|null}
   */
  SortOrder: "ASC" | "DESC" | null;
};

/**
 * Type of SPONDYR's SPONDYR_SEARCH_SPONDYRS tool output.
 */
type SPONDYR_SEARCH_SPONDYRS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful, ERROR if not.
       */
      APIStatus: string;
      /**
       * Data
       * @description Array of search result items.
       */
      Data: {
          /**
           * Correspondence
           * @description List of correspondence entries.
           */
          Correspondence: {
              /**
               * Content Type
               * @description Content type: PDF, DOC, HTML, or TEXT.
               */
              ContentType: string;
              /**
               * Created Date
               * @description Date when correspondence was generated.
               */
              CreatedDate: string;
              /**
               * Recipients
               * @description List of recipients for this correspondence.
               */
              Recipients: {
                  /**
                   * Cover Page Uri
                   * @description URI to the generated cover page, valid for 20 minutes.
                   * @default null
                   */
                  CoverPageURI: string | null;
                  /**
                   * Delivery Date
                   * @description Date of delivery or null.
                   * @default null
                   */
                  DeliveryDate: string | null;
                  /**
                   * Delivery Status Code
                   * @description Delivery status code: SUCCESS, UNDELIVERABLE, or ERROR.
                   */
                  DeliveryStatusCode: string;
                  /**
                   * Delivery Status Name
                   * @description Delivery status name.
                   */
                  DeliveryStatusName: string;
                  /**
                   * Delivery To
                   * @description Contact info to which the correspondence was sent.
                   */
                  DeliveryTo: string;
                  /**
                   * Details
                   * @description Any delivery error details.
                   * @default null
                   */
                  Details: string | null;
                  /**
                   * Is Successful
                   * @description True if delivery was successful.
                   */
                  IsSuccessful: boolean;
                  /**
                   * Name
                   * @description Recipient's name.
                   */
                  Name: string;
              }[];
              /**
               * Search Filters
               * @description Search filters associated with this correspondence.
               */
              SearchFilters: {
                  /**
                   * Name
                   * @description The name of the search tag.
                   */
                  Name: string;
                  /**
                   * Value
                   * @description The value logged for the search tag.
                   */
                  Value: string;
              }[];
              /**
               * Status Code
               * @description Generation status code.
               */
              StatusCode: string;
              /**
               * Status Name
               * @description Generation status name.
               */
              StatusName: string;
              /**
               * Template
               * @description Name of the template used.
               */
              Template: string;
              /**
               * Uri
               * @description URI to the generated correspondence, valid for 20 minutes.
               */
              URI: string;
          }[];
          /**
           * Created Date
           * @description Date when the original request was made.
           */
          CreatedDate: string;
          /**
           * Reference Id
           * @description Reference ID from the original request.
           */
          ReferenceID: string;
          /**
           * Status Code
           * @description Overall status code.
           */
          StatusCode: string;
          /**
           * Status Name
           * @description Overall status name.
           */
          StatusName: string;
      }[];
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Page
       * @description Current page number.
       */
      Page: number;
      /**
       * Page Count
       * @description Total number of pages available.
       */
      PageCount: number;
      /**
       * Page Size
       * @description Current page size.
       */
      PageSize: number;
      /**
       * Record Count
       * @description Total number of records matching criteria.
       */
      RecordCount: number;
      /**
       * Sort Column
       * @description Sort column used.
       */
      SortColumn: string;
      /**
       * Sort Order
       * @description Sort order used.
       */
      SortOrder: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_SSO_STUB tool input.
 */
type SPONDYR_SSO_STUB_INPUT = {
  /**
   * Application User Id
   * @description Your system's user identifier for the SSO user (URL-encoded).
   */
  ApplicationUserID?: string;
  /**
   * First Name
   * @description SSO user's first name (URL-encoded).
   */
  FirstName?: string;
  /**
   * Last Name
   * @description SSO user's last name (URL-encoded).
   */
  LastName?: string;
  /**
   * Role
   * @description Stub user's permissions. One of: Owner, Integrator, Editor, Tenant User.
   * @enum {string}
   */
  Role?: "Owner" | "Integrator" | "Editor" | "Tenant User";
  /**
   * Tenant Token
   * @description Tenant token for multi-tenant applications.
   * @default null
   */
  TenantToken: string | null;
  /**
   * Time Zone
   * @description Display timezone (IANA/Windows name). Defaults to UTC if omitted or invalid.
   * @default null
   */
  TimeZone: string | null;
};

/**
 * Type of SPONDYR's SPONDYR_SSO_STUB tool output.
 */
type SPONDYR_SSO_STUB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error detail if APIStatus is ERROR.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * User Token
       * @description One-time token for redirecting or embedding the user into Spondyr.
       */
      UserToken: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_TEMPLATES_LIST tool input.
 */
type SPONDYR_TEMPLATES_LIST_INPUT = {
  /**
   * Transaction Type
   * @description The name of the Transaction Type whose templates are to be listed
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_TEMPLATES_LIST tool output.
 */
type SPONDYR_TEMPLATES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful, ERROR otherwise
       */
      APIStatus: string;
      /**
       * Data
       * @description List of templates for the specified transaction type
       */
      Data: {
          /**
           * Conditions
           * @description Conditions defined for selecting this template
           */
          Conditions: {
              [key: string]: unknown;
          }[];
          /**
           * Content Type
           * @description Content type of the template: PDF, DOC, HTML, or TEXT
           */
          ContentType: string;
          /**
           * Event Type
           * @description The Event Type this template is configured for
           */
          EventType: string;
          /**
           * Name
           * @description The name of the template
           */
          Name: string;
          /**
           * Recipients
           * @description Configured recipients for the template
           */
          Recipients: {
              [key: string]: unknown;
          }[];
          /**
           * Searches
           * @description Search filter names associated with this template
           */
          Searches: string[];
          /**
           * Template Content Reference Id
           * @description Reference ID of the uploaded template content (via TemplateContent API)
           */
          TemplateContentReferenceID: string;
          /**
           * Transaction Type
           * @description The Transaction Type this template is for
           */
          TransactionType: string;
      }[];
      /**
       * Error Message
       * @description Error message if APIStatus is ERROR
       * @default null
       */
      ErrorMessage: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_TEMPLATE_GET tool input.
 */
type SPONDYR_TEMPLATE_GET_INPUT = {
  /**
   * Template
   * @description The name of the Template to retrieve.
   */
  Template?: string;
  /**
   * Transaction Type
   * @description The name of the Transaction Type this Template is for.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_TEMPLATE_GET tool output.
 */
type SPONDYR_TEMPLATE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Conditions
       * @description Conditions defined for template selection.
       */
      Conditions: {
          /**
           * Compare Operator
           * @description Comparison operator for the condition.
           * @enum {string}
           */
          CompareOperator: "=" | ">" | "<" | ">=" | "<=" | "<>";
          /**
           * Compare Value
           * @description The value(s) for the condition, newline delimited if multiple.
           */
          CompareValue: string;
          /**
           * Logical Operator
           * @description Logical operator for the condition.
           * @enum {string}
           */
          LogicalOperator: "AND" | "OR";
          /**
           * Name
           * @description The name of the condition.
           */
          Name: string;
      }[];
      /**
       * Content Type
       * @description The content type of the template.
       * @enum {string}
       */
      ContentType: "PDF" | "DOC" | "HTML" | "TEXT";
      /**
       * Error Message
       * @description Error message if retrieval failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Event Type
       * @description The Event Type name this Template is for.
       */
      EventType: string;
      /**
       * Name
       * @description The name of the Template.
       */
      Name: string;
      /**
       * Recipients
       * @description Configured recipients for the template.
       */
      Recipients: {
          /**
           * Delivery Method
           * @description The delivery method for the recipient.
           */
          DeliveryMethod: string;
          /**
           * Destination Folder
           * @description Optional destination folder for destination recipients.
           * @default null
           */
          DestinationFolder: string | null;
          /**
           * Email Body
           * @description Optional email body when delivery method is Email.
           * @default null
           */
          EmailBody: string | null;
          /**
           * Email From Address
           * @description Optional from email address when delivery method is Email.
           * @default null
           */
          EmailFromAddress: string | null;
          /**
           * Email Subject
           * @description Optional email subject when delivery method is Email or DocuSign.
           * @default null
           */
          EmailSubject: string | null;
          /**
           * Mail From Address1
           * @description Optional mail from address1 when delivery method is Mail.
           * @default null
           */
          MailFromAddress1: string | null;
          /**
           * Mail From Address2
           * @description Optional mail from address2 when delivery method is Mail.
           * @default null
           */
          MailFromAddress2: string | null;
          /**
           * Mail From City
           * @description Optional mail from city when delivery method is Mail.
           * @default null
           */
          MailFromCity: string | null;
          /**
           * Mail From Name
           * @description Optional mail from name when delivery method is Mail.
           * @default null
           */
          MailFromName: string | null;
          /**
           * Mail From State
           * @description Optional mail from state when delivery method is Mail.
           * @default null
           */
          MailFromState: string | null;
          /**
           * Mail From Zip
           * @description Optional mail from zip when delivery method is Mail.
           * @default null
           */
          MailFromZip: string | null;
          /**
           * Name
           * @description The recipient's name.
           */
          Name: string;
          /**
           * Signers
           * @description Optional list of signers when delivery method is DocuSign.
           * @default null
           */
          Signers: {
              /**
               * Email
               * @description The email address of the signer.
               */
              Email: string;
              /**
               * Name
               * @description The name of the signer.
               */
              Name: string;
              /**
               * Role
               * @description The role of the signer.
               * @enum {string}
               */
              Role: "Signer" | "Agent" | "CC" | "Certified Delivery" | "Editor" | "In Person Signer" | "Intermediary";
          }[] | null;
          /**
           * Text Body
           * @description Optional text message body when delivery method is Text.
           * @default null
           */
          TextBody: string | null;
      }[];
      /**
       * Searches
       * @description Search filters associated with the template.
       */
      Searches: string[];
      /**
       * Template Content
       * @description Base64 encoded content previously uploaded.
       */
      TemplateContent: string;
      /**
       * Template Content Reference Id
       * @description Reference ID for previously uploaded template content.
       */
      TemplateContentReferenceID: string;
      /**
       * Transaction Type
       * @description The Transaction Type name this Template is for.
       */
      TransactionType: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_TRANSACTION_TYPE_GET tool input.
 */
type SPONDYR_TRANSACTION_TYPE_GET_INPUT = {
  /**
   * Transaction Type
   * @description The name of the Transaction Type to retrieve.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_TRANSACTION_TYPE_GET tool output.
 */
type SPONDYR_TRANSACTION_TYPE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if retrieval failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Name
       * @description The name of the Transaction Type.
       */
      Name: string;
      /**
       * Template Csv
       * @description Comma delimited list of flattened JSON fields.
       */
      TemplateCSV: string;
      /**
       * Template Json
       * @description JSON formatted string containing all available properties with sample data.
       */
      TemplateJSON: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SPONDYR's SPONDYR_TRANSACTION_TYPE_UPDATE tool input.
 */
type SPONDYR_TRANSACTION_TYPE_UPDATE_INPUT = {
  /**
   * Name
   * @description The name of the transaction type.
   */
  Name?: string;
  /**
   * Template Json
   * @description JSON-formatted string containing all available properties with sample data.
   */
  TemplateJSON?: string;
  /**
   * Transaction Type
   * @description The existing transaction type name to update.
   */
  TransactionType?: string;
};

/**
 * Type of SPONDYR's SPONDYR_TRANSACTION_TYPE_UPDATE tool output.
 */
type SPONDYR_TRANSACTION_TYPE_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Status
       * @description OK if successful; ERROR otherwise.
       * @enum {string}
       */
      APIStatus: "OK" | "ERROR";
      /**
       * Error Message
       * @description Error message if update failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Reference Id
       * @description Identifier for retrieving or updating the transaction type.
       */
      ReferenceID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SPONDYR".
 */
export type SPONDYR_TOOL_INPUTS = {
  CONDITIONS_LIST: SPONDYR_CONDITIONS_LIST_INPUT
  CREATE_CONDITION: SPONDYR_CREATE_CONDITION_INPUT
  CREATE_TRANSACTION_TYPE: SPONDYR_CREATE_TRANSACTION_TYPE_INPUT
  DELIVER_SPONDYR: SPONDYR_DELIVER_SPONDYR_INPUT
  EVENT_TYPE_UPDATE: SPONDYR_EVENT_TYPE_UPDATE_INPUT
  GET_EVENT_TYPES: SPONDYR_GET_EVENT_TYPES_INPUT
  GET_SPONDYR_STATUS: SPONDYR_GET_SPONDYR_STATUS_INPUT
  GET_TRANSACTION_TYPES: SPONDYR_GET_TRANSACTION_TYPES_INPUT
  RECIPIENTS_LIST: SPONDYR_RECIPIENTS_LIST_INPUT
  RECIPIENT_DELETE: SPONDYR_RECIPIENT_DELETE_INPUT
  RECIPIENT_GET: SPONDYR_RECIPIENT_GET_INPUT
  SEARCH_FILTERS_LIST: SPONDYR_SEARCH_FILTERS_LIST_INPUT
  SEARCH_FILTER_CREATE: SPONDYR_SEARCH_FILTER_CREATE_INPUT
  SEARCH_FILTER_DELETE: SPONDYR_SEARCH_FILTER_DELETE_INPUT
  SEARCH_FILTER_GET: SPONDYR_SEARCH_FILTER_GET_INPUT
  SEARCH_SPONDYRS: SPONDYR_SEARCH_SPONDYRS_INPUT
  SSO_STUB: SPONDYR_SSO_STUB_INPUT
  TEMPLATES_LIST: SPONDYR_TEMPLATES_LIST_INPUT
  TEMPLATE_GET: SPONDYR_TEMPLATE_GET_INPUT
  TRANSACTION_TYPE_GET: SPONDYR_TRANSACTION_TYPE_GET_INPUT
  TRANSACTION_TYPE_UPDATE: SPONDYR_TRANSACTION_TYPE_UPDATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SPONDYR".
 */
export type SPONDYR_TOOL_OUTPUTS = {
  CONDITIONS_LIST: SPONDYR_CONDITIONS_LIST_OUTPUT
  CREATE_CONDITION: SPONDYR_CREATE_CONDITION_OUTPUT
  CREATE_TRANSACTION_TYPE: SPONDYR_CREATE_TRANSACTION_TYPE_OUTPUT
  DELIVER_SPONDYR: SPONDYR_DELIVER_SPONDYR_OUTPUT
  EVENT_TYPE_UPDATE: SPONDYR_EVENT_TYPE_UPDATE_OUTPUT
  GET_EVENT_TYPES: SPONDYR_GET_EVENT_TYPES_OUTPUT
  GET_SPONDYR_STATUS: SPONDYR_GET_SPONDYR_STATUS_OUTPUT
  GET_TRANSACTION_TYPES: SPONDYR_GET_TRANSACTION_TYPES_OUTPUT
  RECIPIENTS_LIST: SPONDYR_RECIPIENTS_LIST_OUTPUT
  RECIPIENT_DELETE: SPONDYR_RECIPIENT_DELETE_OUTPUT
  RECIPIENT_GET: SPONDYR_RECIPIENT_GET_OUTPUT
  SEARCH_FILTERS_LIST: SPONDYR_SEARCH_FILTERS_LIST_OUTPUT
  SEARCH_FILTER_CREATE: SPONDYR_SEARCH_FILTER_CREATE_OUTPUT
  SEARCH_FILTER_DELETE: SPONDYR_SEARCH_FILTER_DELETE_OUTPUT
  SEARCH_FILTER_GET: SPONDYR_SEARCH_FILTER_GET_OUTPUT
  SEARCH_SPONDYRS: SPONDYR_SEARCH_SPONDYRS_OUTPUT
  SSO_STUB: SPONDYR_SSO_STUB_OUTPUT
  TEMPLATES_LIST: SPONDYR_TEMPLATES_LIST_OUTPUT
  TEMPLATE_GET: SPONDYR_TEMPLATE_GET_OUTPUT
  TRANSACTION_TYPE_GET: SPONDYR_TRANSACTION_TYPE_GET_OUTPUT
  TRANSACTION_TYPE_UPDATE: SPONDYR_TRANSACTION_TYPE_UPDATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SPONDYR toolkit.
 */
export const SPONDYR = {
  slug: "spondyr",
  tools: {
    /**
     * Tool to list all conditions for a transaction type. use when you need to retrieve all condition rules defined for a specific transaction type.
     */
    CONDITIONS_LIST: "SPONDYR_CONDITIONS_LIST",
    /**
     * Tool to create a new condition. use when defining detailed rules for template selection based on transaction data.
     */
    CREATE_CONDITION: "SPONDYR_CREATE_CONDITION",
    /**
     * Tool to create a new transaction type. use after defining the json schema for your data to register it in spondyr.
     */
    CREATE_TRANSACTION_TYPE: "SPONDYR_CREATE_TRANSACTION_TYPE",
    /**
     * Tool to trigger delivery of a previously generated correspondence. use after calling the generate api.
     */
    DELIVER_SPONDYR: "SPONDYR_DELIVER_SPONDYR",
    /**
     * Tool to update an existing event type. use when you need to modify the name or associated transaction type of an event type. example: rename the 'ordershipped' event to 'orderdelivered'.
     */
    EVENT_TYPE_UPDATE: "SPONDYR_EVENT_TYPE_UPDATE",
    /**
     * Tool to list all event types for a given transaction type. use when you need to discover available events after retrieving transaction types.
     */
    GET_EVENT_TYPES: "SPONDYR_GET_EVENT_TYPES",
    /**
     * Tool to retrieve the status of a previously generated correspondence. use after generating correspondence to check its processing and delivery status.
     */
    GET_SPONDYR_STATUS: "SPONDYR_GET_SPONDYR_STATUS",
    /**
     * Tool to retrieve a list of available transaction types. use after authentication to discover data schemas.
     */
    GET_TRANSACTION_TYPES: "SPONDYR_GET_TRANSACTION_TYPES",
    /**
     * Tool to list all recipients for a transaction type. use when you need to discover or verify all configured recipients before sending or managing correspondence.
     */
    RECIPIENTS_LIST: "SPONDYR_RECIPIENTS_LIST",
    /**
     * Tool to delete or deactivate a specific recipient. use when you need to remove an existing recipient mapping in spondyr.
     */
    RECIPIENT_DELETE: "SPONDYR_RECIPIENT_DELETE",
    /**
     * Tool to retrieve details of a specific recipient. use when you need to fetch recipient configuration for a given transaction type. example: "retrieve recipient 'customer' for transaction type 'orderplaced'."
     */
    RECIPIENT_GET: "SPONDYR_RECIPIENT_GET",
    /**
     * Tool to list all search filters for a transaction type. use when you need to discover available filters before searching correspondence.
     */
    SEARCH_FILTERS_LIST: "SPONDYR_SEARCH_FILTERS_LIST",
    /**
     * Tool to create a new search filter. use when you need to define a reusable filter for a specific transaction type.
     */
    SEARCH_FILTER_CREATE: "SPONDYR_SEARCH_FILTER_CREATE",
    /**
     * Tool to delete or deactivate a specific search filter. use when you need to remove an existing search filter by name. call after confirming the filter exists.
     */
    SEARCH_FILTER_DELETE: "SPONDYR_SEARCH_FILTER_DELETE",
    /**
     * Tool to retrieve details of a specific search filter. use when you need to fetch the tag and transaction type of an existing filter by name.
     */
    SEARCH_FILTER_GET: "SPONDYR_SEARCH_FILTER_GET",
    /**
     * Tool to search generated correspondence by multiple criteria. use after correspondence generation to retrieve historical records with filters, paging, and sorting.
     */
    SEARCH_SPONDYRS: "SPONDYR_SEARCH_SPONDYRS",
    /**
     * Tool to create a one-time sso user stub in spondyr. use after application authentication to generate a temporary sso token for embedding or redirecting users.
     */
    SSO_STUB: "SPONDYR_SSO_STUB",
    /**
     * Tool to list all templates for a transaction type. use when you need to discover available templates before generating correspondence.
     */
    TEMPLATES_LIST: "SPONDYR_TEMPLATES_LIST",
    /**
     * Tool to retrieve a specific template’s configuration and content reference. use when you need to inspect a template's settings for a transaction type. example: "fetch template 'mytemplate' for transaction type 'orderplaced'."
     */
    TEMPLATE_GET: "SPONDYR_TEMPLATE_GET",
    /**
     * Tool to retrieve details of a specific transaction type. use when inspecting a transaction type schema. example: "get transaction type 'orderplaced' to view its json schema."
     */
    TRANSACTION_TYPE_GET: "SPONDYR_TRANSACTION_TYPE_GET",
    /**
     * Tool to update an existing transaction type. use after retrieving a transaction type to apply changes. example: "update transaction type 'order' with new json schema."
     */
    TRANSACTION_TYPE_UPDATE: "SPONDYR_TRANSACTION_TYPE_UPDATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SPONDYR".
 */
export type SPONDYR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SPONDYR".
 */
export type SPONDYR_TRIGGER_EVENTS = {}
