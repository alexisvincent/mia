import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HUBSPOT's HUBSPOT_ADD_ASSET_ASSOCIATION tool input.
 */
type HUBSPOT_ADD_ASSET_ASSOCIATION_INPUT = {
  /**
   * Asset Id
   * @description The unique identifier of the asset to be associated with the campaign. This ID is specific to the `assetType` (e.g., a form ID, list ID, or external URL ID).
   */
  assetId?: string;
  /**
   * Asset Type
   * @description Type of asset to associate with the campaign. Supported types: 'FORM', 'OBJECT_LIST' (Static List), 'EXTERNAL_WEB_URL' (External Website Page).
   */
  assetType?: string;
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) of the HubSpot campaign to which the asset will be associated.
   */
  campaignGuid?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ADD_ASSET_ASSOCIATION tool output.
 */
type HUBSPOT_ADD_ASSET_ASSOCIATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response, often detailing the asset's association with the campaign or confirming the success of the operation.
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
 * Type of HUBSPOT's HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE tool input.
 */
type HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description Numeric identifier of the target application associated with the event template. Provided in the URL path.
   */
  appId?: number;
  /**
   * Created At
   * Format: date-time
   * @description The creation date and time of the event template token in ISO 8601 format (e.g., '2023-01-15T10:30:00Z'). This field is nullable and will be null if the template was created before February 18th, 2020.
   */
  createdAt?: string;
  /**
   * Event Template Id
   * @description Unique identifier of the event template. Provided in the URL path.
   */
  eventTemplateId?: string;
  /**
   * Label
   * @description The user-facing label for the token. This label is used for list segmentation and in reporting.
   */
  label?: string;
  /**
   * Name
   * @description The internal name of the token, used for referencing it within templates. Must be unique for this event template. Allowed characters: alphanumeric, periods (.), dashes (-), or underscores (_).
   */
  name?: string;
  /**
   * Object Property Name
   * @description The name of an existing CRM object property (e.g., 'dealstage', 'lifecyclestage'). If provided, this token will populate the specified CRM object property associated with the event. This allows for building or updating CRM objects through the Timeline API.
   */
  objectPropertyName?: string;
  /**
   * Options
   * @description A list of options for the token, required and applicable only if the token `type` is 'enumeration'. Each option must have a 'label' and a 'value'.
   */
  options?: {
      /**
       * Label
       * @description The user-facing display text for this option.
       */
      label: string;
      /**
       * Value
       * @description The internal programmatic value associated with this option.
       */
      value: string;
  }[];
  /**
   * Type
   * @description The data type of the token. Determines how the token's value is stored and validated.
   * @enum {string}
   */
  type?: "date" | "enumeration" | "number" | "string";
  /**
   * Updated At
   * Format: date-time
   * @description The date and time the event template token was last updated, in ISO 8601 format (e.g., '2023-01-16T14:45:00Z'). This field is nullable and will be null if the template was updated before February 18th, 2020.
   */
  updatedAt?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE tool output.
 */
type HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the newly created event template token.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE tool input.
 */
type HUBSPOT_ARCHIVE_INPUT = {
  /**
   * Email Id
   * @description Identifier of the email to be archived.
   */
  emailId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE tool output.
 */
type HUBSPOT_ARCHIVE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of input objects, each specifying the ID of an email to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the email to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch archive operation. The content may vary, typically providing status information for the archived emails or details of any errors encountered during the process.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of objects, where each object contains the ID of a quote to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the quote to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Status of the batch archive operation; a 204 No Content response (empty dictionary or success indicator) is typical for success, while partial successes or failures may include detailed statuses for each quote.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of company objects, where each object contains the 'id' of a company to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the company to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch archive operation. If all operations are successful (HTTP 200), this may be empty or provide a success confirmation. In case of partial success or failures (HTTP 207 Multi-Status), it typically includes details on the status of each archival attempt.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of contact objects, each specifying the ID of the contact to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the contact to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the API. Typically, a successful request to this endpoint returns a 204 No Content response if the batch archive was successful, meaning this field might be empty or not present for successful operations. If there are errors, this field may contain details about them.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of deals to archive, each specified by its unique 'id'.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the deal to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Response data from the batch archive operation. The structure of this dictionary can vary. Note that a fully successful batch archive often results in a 204 No Content HTTP status, meaning no response body is returned and this field may not be populated.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of objects, where each object contains the 'id' of a feedback submission to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the feedback submission to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the batch archive request's acceptance. Since the operation is asynchronous, this response typically confirms that the batch archival task has been queued for processing, potentially including a status like 'PENDING' or a job identifier.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of objects, where each object contains the 'id' of a line item to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the line item to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain results or errors if the API provides a response body. For successful 204 No Content responses, this field is typically absent or the response body is empty.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of input objects, where each object contains the 'id' of a CRM record to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the CRM object to be archived.
       */
      id: string;
  }[];
  /**
   * Object Type
   * @description The type of CRM object to archive (e.g., 'contacts', 'companies', 'deals', 'tickets').
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Details from the batch archive operation; may be empty for a successful operation (HTTP 204) or contain individual error/status information.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES_INPUT = {
  /**
   * Inputs
   * @description A list of properties to archive, each specified by its internal `name`.
   */
  inputs?: {
      /**
       * Name
       * @description The internal name of the property to be archived.
       */
      name: string;
  }[];
  /**
   * Object Type
   * @description The HubSpot CRM object type for which properties are being archived.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing data returned by the batch archive operation; structure and content may vary.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description List of tickets to archive, each identified by its ID.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the ticket to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Details about the batch archive operation; specific contents may vary but reflect the outcome.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID_INPUT = {
  /**
   * Inputs
   * @description A list of products to be archived, each specified by its unique 'id'.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the product to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_COMPANY tool input.
 */
type HUBSPOT_ARCHIVE_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The system-generated unique identifier for the company to archive, obtainable from other HubSpot API endpoints.
   */
  companyId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_COMPANY tool output.
 */
type HUBSPOT_ARCHIVE_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_CONTACT_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_CONTACT_BY_ID_INPUT = {
  /**
   * Contact Id
   * @description Unique HubSpot CRM identifier (typically numeric or UUID) for the contact to be archived.
   */
  contactId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_CONTACT_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_CONTACT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID_INPUT = {
  /**
   * Object Id
   * @description The unique identifier for the CRM object to be archived. This ID must correspond to an existing object of the specified `objectType`. The format is typically a string of numbers or a UUID. Ensure the correct ID is provided as this operation is irreversible via the API.
   */
  objectId?: string;
  /**
   * Object Type
   * @description The type of CRM object to be archived. This value is case-sensitive, must be a valid HubSpot CRM object type (e.g., contacts, companies, deals, quotes), and should be provided in lowercase plural form (e.g., 'contacts', not 'Contact').
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_EMAILS tool input.
 */
type HUBSPOT_ARCHIVE_EMAILS_INPUT = {
  /**
   * Inputs
   * @description List of email objects to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the email to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_EMAILS tool output.
 */
type HUBSPOT_ARCHIVE_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Response data from the API.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION tool input.
 */
type HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION_INPUT = {
  /**
   * Feedback Submission Id
   * @description The unique identifier of an existing Feedback Submission in HubSpot CRM to be archived.
   */
  feedbackSubmissionId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION tool output.
 */
type HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain data related to the outcome of the archive operation. For successful archive operations (which typically return an HTTP 204 No Content status), this field might be empty or not applicable.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID_INPUT = {
  /**
   * Line Item Id
   * @description The unique identifier of the existing line item in HubSpot CRM to be archived.
   */
  lineItemId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Usually an empty dictionary upon successful archival.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PRODUCT tool input.
 */
type HUBSPOT_ARCHIVE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description Unique HubSpot identifier for the product to be archived.
   */
  productId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PRODUCT tool output.
 */
type HUBSPOT_ARCHIVE_PRODUCT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PRODUCTS tool input.
 */
type HUBSPOT_ARCHIVE_PRODUCTS_INPUT = {
  /**
   * Inputs
   * @description List of product objects to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the product to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PRODUCTS tool output.
 */
type HUBSPOT_ARCHIVE_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Response data from the API.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID tool input.
 */
type HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of an existing product in your HubSpot product catalog to be archived.
   */
  productId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID tool output.
 */
type HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID_OUTPUT = {
  /**
   * Data
   * @description Response data from the API; typically empty for a successful archival (204 No Content), but may contain details in case of an error.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME tool input.
 */
type HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME_INPUT = {
  /**
   * Object Type
   * @description The case-sensitive type of CRM object (e.g., 'contacts', 'companies') for which the property is being archived; must match an existing object type.
   */
  objectType?: string;
  /**
   * Property Name
   * @description The case-sensitive internal name of the property to archive (e.g., 'custom_field_1', 'annual_revenue').
   */
  propertyName?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME tool output.
 */
type HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME_OUTPUT = {
  /**
   * Data
   * @description Empty dictionary, as the API returns 204 No Content on successful archival.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PROPERTY_GROUP tool input.
 */
type HUBSPOT_ARCHIVE_PROPERTY_GROUP_INPUT = {
  /**
   * Group Name
   * @description The unique internal name of the property group you want to archive. This name is case-sensitive and must exactly match an existing property group's name within the specified `objectType`.
   */
  groupName?: string;
  /**
   * Object Type
   * @description The specific CRM object type (e.g., 'contacts', 'companies', 'deals', or custom object types) that the property group belongs to. This value must be in lowercase and match an existing object type definition in your HubSpot account.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_PROPERTY_GROUP tool output.
 */
type HUBSPOT_ARCHIVE_PROPERTY_GROUP_OUTPUT = {
  /**
   * Data
   * @description Contains API response data; typically empty for a successful archive operation (HTTP 204 No Content response).
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID_INPUT = {
  /**
   * Quote Id
   * @description The unique identifier (ID) of an existing Quote object in HubSpot CRM to be archived.
   */
  quoteId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_TICKET tool input.
 */
type HUBSPOT_ARCHIVE_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description Unique HubSpot identifier for the ticket to be archived.
   */
  ticketId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_TICKET tool output.
 */
type HUBSPOT_ARCHIVE_TICKET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_TICKETS tool input.
 */
type HUBSPOT_ARCHIVE_TICKETS_INPUT = {
  /**
   * Inputs
   * @description List of ticket objects to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the ticket to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_TICKETS tool output.
 */
type HUBSPOT_ARCHIVE_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Response data from the API.
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
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_TICKET_BY_ID tool input.
 */
type HUBSPOT_ARCHIVE_TICKET_BY_ID_INPUT = {
  /**
   * Ticket Id
   * @description The unique identifier of an existing HubSpot ticket to be archived.
   */
  ticketId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_ARCHIVE_TICKET_BY_ID tool output.
 */
type HUBSPOT_ARCHIVE_TICKET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description The response data. For a successful ticket archival (HTTP 204 No Content), this dictionary will typically be empty.
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
 * Type of HUBSPOT's HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID tool input.
 */
type HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID_INPUT = {
  /**
   * Object Type
   * @description The HubSpot CRM object type that has pipelines (e.g., 'deals', 'tickets'); determines the pipeline's context. Must be a valid, case-sensitive object type.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description The unique identifier of an existing pipeline within the specified `objectType` for which to retrieve the audit history.
   */
  pipelineId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID tool output.
 */
type HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Details all changes (mutations) to the pipeline in reverse chronological order.
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
 * Type of HUBSPOT's HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES tool input.
 */
type HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES_INPUT = {
  /**
   * Archived
   * @description If true, returns only archived company records; otherwise (default), returns active, non-archived companies.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Property name to use as the unique identifier for companies in `inputs`. If not provided, HubSpot's default company ID (`hs_object_id`) is used.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description List of company identifiers to retrieve. Each `id` within an input object corresponds to the value of the property specified in `idProperty`.
   */
  inputs?: {
      /**
       * Id
       * @description Unique identifier for the company, corresponding to the value of the property specified by `idProperty` in the main request.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description List of company property names to retrieve. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of company property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES tool output.
 */
type HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Dictionary of batch read results: keys are requested company IDs, values are company objects with their properties.
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
 * Type of HUBSPOT's HUBSPOT_BATCH_READ_EMAILS_ACTION tool input.
 */
type HUBSPOT_BATCH_READ_EMAILS_ACTION_INPUT = {
  /**
   * Archived
   * @description Whether to include archived emails in the results. If `True`, only archived emails are returned; if `False`, archived emails are excluded.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of a unique property to be used for identifying the emails specified in the `inputs` list. If omitted, the system defaults to using the HubSpot email ID (`hs_object_id` or `id`). When specified, ensure the `id` values within the `inputs` list correspond to the values of this unique property for the respective emails.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description A list of objects, where each object specifies an email to be retrieved. Each object must contain an `id` field identifying the email.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the email to retrieve. This ID corresponds to the primary HubSpot object ID or the value of the unique property specified in the `idProperty` field of the main batch request.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Email property internal names to return for each email; if omitted, default properties are returned. Specifying properties can optimize response size and processing.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Email property internal names for which all historical values should be retrieved; requesting history for many properties can impact performance.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_BATCH_READ_EMAILS_ACTION tool output.
 */
type HUBSPOT_BATCH_READ_EMAILS_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary where keys are the input identifiers (the `id` from each item in the `inputs` list) and values are the corresponding email objects. Each email object includes the properties specified in the request. If an email ID is not found or an error occurs for a specific email, it might be absent from the results or handled as per HubSpot's batch API error reporting.
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
 * Type of HUBSPOT's HUBSPOT_BATCH_UPDATE_QUOTES tool input.
 */
type HUBSPOT_BATCH_UPDATE_QUOTES_INPUT = {
  /**
   * Inputs
   * @description List of `InputsRequest` objects, each specifying a quote to update and its new property values.
   */
  inputs?: {
      /**
       * Id
       * @description The quote's HubSpot object ID or the value of the unique property specified by `idProperty`.
       */
      id: string;
      /**
       * Id Property
       * @description Name of the unique property used for quote identification if `id` is not the HubSpot object ID. If omitted, `id` is assumed to be the object ID.
       */
      idProperty?: string;
      /**
       * Properties
       * @description Dictionary of writable properties to update (e.g., `hs_title`, `hs_status`). Keys are internal property names; values are the new property values.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_BATCH_UPDATE_QUOTES tool output.
 */
type HUBSPOT_BATCH_UPDATE_QUOTES_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing results of the batch update, including status for each quote (e.g., success, failure) and any updated quote information.
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
 * Type of HUBSPOT's HUBSPOT_CAMPAIGN_SEARCH tool input.
 */
type HUBSPOT_CAMPAIGN_SEARCH_INPUT = {
  /**
   * After
   * @description Pagination cursor to retrieve the next set of results, typically obtained from a previous response's 'paging' object.
   */
  after?: string;
  /**
   * Limit
   * @description Maximum number of campaigns per page. Allowed range: 1-100. Defaults to 50 if unspecified.
   */
  limit?: number;
  /**
   * Name
   * @description Filter by campaign name using a partial substring match. If omitted, no name filtering is applied.
   */
  name?: string;
  /**
   * Properties
   * @description List of campaign property names to return. If a property value is empty for a campaign, it is omitted from that campaign's data in the response. An empty list input may result in an empty 'properties' map in the response.
   */
  properties?: string[];
  /**
   * Sort
   * @description Allowed values: `hs_name`, `createdAt`, `updatedAt`. Prefix field name with `-` for descending order. Defaults to `hs_name` if unspecified.
   */
  sort?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CAMPAIGN_SEARCH tool output.
 */
type HUBSPOT_CAMPAIGN_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the HubSpot API. Typically includes a 'results' list of campaign objects and a 'paging' object for pagination. Campaign objects in 'results' contain the requested properties.
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
 * Type of HUBSPOT's HUBSPOT_CANCEL_ACTIVE_IMPORT tool input.
 */
type HUBSPOT_CANCEL_ACTIVE_IMPORT_INPUT = {
  /**
   * Import Id
   * @description The unique identifier for the active HubSpot import job to be cancelled; must correspond to an import job currently in progress.
   */
  importId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_CANCEL_ACTIVE_IMPORT tool output.
 */
type HUBSPOT_CANCEL_ACTIVE_IMPORT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. Typically, this includes a confirmation or status update regarding the cancellation of the import job.
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
 * Type of HUBSPOT's HUBSPOT_CLONE_MARKETING_EMAIL tool input.
 */
type HUBSPOT_CLONE_MARKETING_EMAIL_INPUT = {
  /**
   * Clone Name
   * @description The name for the newly cloned marketing email. If not provided, HubSpot may assign a default name (e.g., 'Copy of [Original Email Name]').
   */
  cloneName?: string;
  /**
   * Id
   * @description The unique identifier of the existing marketing email to be cloned.
   */
  id?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CLONE_MARKETING_EMAIL tool output.
 */
type HUBSPOT_CLONE_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the full object of the newly cloned marketing email, including its new ID, name, content, and other properties.
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
 * Type of HUBSPOT's HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS tool input.
 */
type HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS_INPUT = {
  /**
   * App Id
   * @description Unique identifier for the target HubSpot app whose calling extension settings are being configured.
   */
  appId?: number;
  /**
   * Height
   * @description Target height in pixels for the iframe embedding the calling UI.
   */
  height?: number;
  /**
   * Is Ready
   * @description If `true`, the calling service appears as an option under the 'Call' action in contact records; `false` hides it.
   */
  isReady?: boolean;
  /**
   * Name
   * @description Display name for the calling service in the HubSpot interface.
   */
  name?: string;
  /**
   * Supports Custom Objects
   * @description Specifies if the service is compatible with HubSpot's engagement v2 service and custom objects.
   */
  supportsCustomObjects?: boolean;
  /**
   * Url
   * @description Publicly accessible HTTPS URL for the phone/calling UI, which should be built using the HubSpot Calling SDK.
   */
  url?: string;
  /**
   * Width
   * @description Target width in pixels for the iframe embedding the calling UI.
   */
  width?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS tool output.
 */
type HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated settings of the configured calling extension, confirming the changes applied.
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
 * Type of HUBSPOT's HUBSPOT_CREATE tool input.
 */
type HUBSPOT_CREATE_INPUT = {
  /**
   * Associations
   * @description A list of associations to link this email with other CRM objects. Each association specifies the target object's ID (`to_id`) and the nature of the relationship (`types`).
   */
  associations?: {
      /**
       * To  Id
       * @description The unique identifier of the CRM object (e.g., contact, company, deal, ticket) to which the email will be associated.
       */
      to__id?: string;
      /**
       * Types
       * @description A list detailing the types of associations to establish between the email and the CRM object specified in `to_id`.
       */
      types: {
          /**
           * Association Category
           * @description Category of the association.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description The unique identifier for the type of association (e.g., specific ID for 'email to contact' or 'email to company'). This ID is dependent on the associationCategory.
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Properties
   * @description A dictionary of key-value pairs representing the properties of the email. Essential properties include `hs_email_subject`, `hs_email_html` (for the email body), `hs_timestamp` (UTC millisecond timestamp of when the email was sent or will be sent), and potentially `hubspot_owner_id`, `hs_email_direction`, `hs_email_status`.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE tool output.
 */
type HUBSPOT_CREATE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties of the newly created email object, including its unique ID (e.g., `id`) and other attributes.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_AB_TEST_VARIATION tool input.
 */
type HUBSPOT_CREATE_AB_TEST_VARIATION_INPUT = {
  /**
   * Content Id
   * @description The ID of the original email content to use as a template for the new variation.
   */
  contentId?: string;
  /**
   * Variation Name
   * @description A unique name for the new A/B test variation.
   */
  variationName?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_AB_TEST_VARIATION tool output.
 */
type HUBSPOT_CREATE_AB_TEST_VARIATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP tool input.
 */
type HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP_INPUT = {
  /**
   * Display Order
   * @description Order in which the group appears in the HubSpot UI. Positive values are sorted ascendingly; -1 places it after groups with positive `displayOrder`. If unspecified, the group is added at the end.
   */
  displayOrder?: number;
  /**
   * Label
   * @description Human-readable label for the property group, displayed in the HubSpot UI.
   */
  label?: string;
  /**
   * Name
   * @description The unique internal programmatic name for the property group within the specified `objectType`, used for API referencing.
   */
  name?: string;
  /**
   * Object Type
   * @description The CRM object type for which the property group will be created.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP tool output.
 */
type HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP_OUTPUT = {
  /**
   * Data
   * @description The newly created property group object.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE tool input.
 */
type HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE_INPUT = {
  /**
   * From Object Type Id
   * @description Object type ID or fully qualified name (e.g., 'contacts' or '0-1') for the 'from' side of the new association type, defining the origin object in the relationship.
   */
  fromObjectTypeId?: string;
  /**
   * Name
   * @description Optional, user-defined unique name for the new association type (e.g., 'contact_to_company_custom'). If not supplied, HubSpot may generate a default.
   */
  name?: string;
  /**
   * Object Type
   * @description Fully qualified name (e.g., 'contacts') or object type ID (e.g., '2-12345') of the primary object schema for which the new association type is being defined.
   */
  objectType?: string;
  /**
   * To Object Type Id
   * @description Object type ID or fully qualified name (e.g., 'companies' or '0-2') for the 'to' side of the new association type, defining the target object in the relationship.
   */
  toObjectTypeId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE tool output.
 */
type HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created association type definition, including `fromObjectTypeId`, `toObjectTypeId`, `name`, and label.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS tool input.
 */
type HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS_INPUT = {
  /**
   * Inputs
   * @description List of campaign objects to be created in a batch, each defining a new campaign and its properties.
   */
  inputs?: {
      /**
       * Properties
       * @description Key-value pairs representing the properties of a single campaign to be created.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS tool output.
 */
type HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_COMPANIES tool input.
 */
type HUBSPOT_CREATE_A_BATCH_OF_COMPANIES_INPUT = {
  /**
   * Inputs
   * @description A list of company objects to create, each defining properties and associations. Maximum of 100 companies per batch.
   */
  inputs?: {
      /**
       * Associations
       * @description A list of associations to create for this company with other existing CRM objects.
       */
      associations: {
          /**
           * To  Id
           * @description The ID of the existing CRM object to which the new company will be associated.
           */
          to__id?: string;
          /**
           * Types
           * @description Association types defining the relationships between the new company and other CRM objects.
           */
          types: {
              /**
               * Association Category
               * @description Specifies the category of the association (e.g., HubSpot-defined, user-defined, or integrator-defined).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The numerical ID of the specific association type within the chosen category (e.g., ID for 'company to contact' or 'company to deal' association).
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Company properties (e.g., 'name', 'domain', 'city'). Ensure all HubSpot-defined required properties for companies are included.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_COMPANIES tool output.
 */
type HUBSPOT_CREATE_A_BATCH_OF_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description The raw response data from the API detailing the outcome of the batch creation request. This typically includes a list of the created company objects and may also contain information about any errors encountered for companies that failed to create.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_CONTACTS tool input.
 */
type HUBSPOT_CREATE_A_BATCH_OF_CONTACTS_INPUT = {
  /**
   * Inputs
   * @description A list of contact creation requests. Each object in the list defines the properties and associations for a single new contact. Up to 100 contacts can be created in a single batch request.
   *             For example:
   *             [
   *                 {
   *                     "associations": [
   *                         {
   *                             "types": [
   *                                 {
   *                                     "associationCategory": "HUBSPOT_DEFINED",
   *                                     "associationTypeId": 1
   *                                 }
   *                             ],
   *                             "to": {
   *                                 "id": "25496222837"
   *                             }
   *                         }
   *                     ],
   *                     "properties": {
   *                         "email": "new.contact@example.com",
   *                         "firstname": "John",
   *                         "lastname": "Doe",
   *                         "company": "Example Corp"
   *                     }
   *                 }
   *             ]
   *
   */
  inputs?: {
      /**
       * Associations
       * @description A list of associations to create for the new contact. Associations link this contact to other CRM objects such as companies or deals.
       */
      associations: {
          /**
           * To
           * @description Specifies the target CRM object for the association by its ID. For example, `{'id': '12345'}` where '12345' is the ID of an existing company or deal.
           */
          to: {
              /**
               * Id
               * @description The unique identifier of the CRM object (e.g., company ID, deal ID) to which the new contact will be associated.
               */
              id: string;
          };
          /**
           * Types
           * @description A list of association type definitions. Each item specifies the category and type ID of an association.
           */
          types: {
              /**
               * Association Category
               * @description The category of the association. HubSpot-defined associations are default and cannot be deleted. User-defined associations are custom associations created by users. Integrator-defined associations are created by HubSpot integrations.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The unique ID of the association type, defining the nature of the link (e.g., contact to company).
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description An object containing the properties to set for the new contact. This includes standard HubSpot contact properties (e.g., `firstname`, `lastname`, `email`) and any defined custom properties.
       */
      properties: {
          /**
           * Address
           * @description The contact's full street address, including apartment or unit number.
           */
          address?: string;
          /**
           * Annualrevenue
           * @description The annual revenue of the company the contact is associated with.
           */
          annualrevenue?: string;
          /**
           * Associatedcompanyid
           * @description The ID of the primary company associated with this contact.
           */
          associatedcompanyid?: string;
          /**
           * Associatedcompanylastupdated
           * @description The timestamp indicating the last update to the associated company's record. Typically in ISO 8601 format.
           */
          associatedcompanylastupdated?: string;
          /**
           * City
           * @description The city where the contact resides.
           */
          city?: string;
          /**
           * Closedate
           * @description The date when the deal associated with the contact was closed. Recommended format: YYYY-MM-DD.
           */
          closedate?: string;
          /**
           * Company
           * @description The name of the company the contact works for or is associated with.
           */
          company?: string;
          /**
           * Company Size
           * @description The size of the contact's company, often categorized by the number of employees.
           */
          company_size?: string;
          /**
           * Country
           * @description The country where the contact resides.
           */
          country?: string;
          /**
           * Createdate
           * @description The date and time when the contact record was created in HubSpot. Format: ISO 8601.
           */
          createdate?: string;
          /**
           * Currentlyinworkflow
           * @description Indicates if the contact is currently active in any HubSpot workflow. Boolean value represented as a string.
           */
          currentlyinworkflow?: string;
          /**
           * Custom Properties
           * @description A dictionary of custom properties for the contact. Keys are the internal names of the custom properties (e.g., `my_custom_field_123`), and values are the respective property values to be set. For example: `{'custom_property_1': 'value for custom property 1', 'custom_property_2': 'value for custom property 2'}`.
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * Date Of Birth
           * @description The contact's date of birth. Recommended format: YYYY-MM-DD.
           */
          date_of_birth?: string;
          /**
           * Days To Close
           * @description The number of days it took to close the deal associated with the contact.
           */
          days_to_close?: string;
          /**
           * Degree
           * @description The contact's highest educational degree obtained (e.g., Bachelor's, Master's).
           */
          degree?: string;
          /**
           * Email
           * @description The primary email address of the contact. This is often used as a unique identifier.
           */
          email?: string;
          /**
           * Engagements Last Meeting Booked
           * @description Timestamp of the last meeting booked with the contact. Format: ISO 8601.
           */
          engagements_last_meeting_booked?: string;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description The campaign ID or name associated with the last meeting booked with the contact.
           */
          engagements_last_meeting_booked_campaign?: string;
          /**
           * Engagements Last Meeting Booked Medium
           * @description The medium (e.g., email, call, LinkedIn) through which the last meeting was booked.
           */
          engagements_last_meeting_booked_medium?: string;
          /**
           * Engagements Last Meeting Booked Source
           * @description The source (e.g., organic search, referral, sales outreach) of the last meeting booked.
           */
          engagements_last_meeting_booked_source?: string;
          /**
           * Fax
           * @description The contact's facsimile (fax) number.
           */
          fax?: string;
          /**
           * Field Of Study
           * @description The contact's primary field of academic study (e.g., Computer Science, Marketing).
           */
          field_of_study?: string;
          /**
           * First Conversion Date
           * @description The date of the contact's first conversion (e.g., submitting a form, downloading an ebook). Format: ISO 8601.
           */
          first_conversion_date?: string;
          /**
           * First Conversion Event Name
           * @description The name or description of the specific event that marked the contact's first conversion.
           */
          first_conversion_event_name?: string;
          /**
           * First Deal Created Date
           * @description The date when the first deal was created for this contact in HubSpot. Format: ISO 8601.
           */
          first_deal_created_date?: string;
          /**
           * Firstname
           * @description The contact's first name.
           */
          firstname?: string;
          /**
           * Followercount
           * @description The contact's follower count on a specified social media platform (e.g., Twitter, LinkedIn).
           */
          followercount?: string;
          /**
           * Gender
           * @description The contact's gender.
           */
          gender?: string;
          /**
           * Graduation Date
           * @description The contact's graduation date from an educational institution. Recommended format: YYYY-MM-DD.
           */
          graduation_date?: string;
          /**
           * Hs Additional Emails
           * @description A semi-colon separated list of additional email addresses for the contact.
           */
          hs_additional_emails?: string;
          /**
           * Hs All Accessible Team Ids
           * @description A semi-colon separated list of all HubSpot team IDs that have access to this contact record.
           */
          hs_all_accessible_team_ids?: string;
          /**
           * Hs All Assigned Business Unit Ids
           * @description A semi-colon separated list of all business unit IDs assigned to the contact.
           */
          hs_all_assigned_business_unit_ids?: string;
          /**
           * Hs All Contact Vids
           * @description A semi-colon separated list of all legacy contact VIDs (Visitor IDs) associated with this contact.
           */
          hs_all_contact_vids?: string;
          /**
           * Hs All Owner Ids
           * @description A semi-colon separated list of all HubSpot user IDs who have ever been owners of this contact.
           */
          hs_all_owner_ids?: string;
          /**
           * Hs All Team Ids
           * @description A semi-colon separated list of all HubSpot team IDs this contact has been associated with.
           */
          hs_all_team_ids?: string;
          /**
           * Hs Analytics Average Page Views
           * @description The average number of pages viewed by the contact per session on your website, tracked by HubSpot.
           */
          hs_analytics_average_page_views?: string;
          /**
           * Hs Analytics First Referrer
           * @description The first referring URL that brought the contact to your website.
           */
          hs_analytics_first_referrer?: string;
          /**
           * Hs Analytics First Timestamp
           * @description Timestamp of the contact's first interaction tracked by HubSpot analytics. Format: ISO 8601.
           */
          hs_analytics_first_timestamp?: string;
          /**
           * Hs Analytics First Touch Converting Campaign
           * @description The HubSpot campaign ID or name of the first campaign that led to a conversion for this contact.
           */
          hs_analytics_first_touch_converting_campaign?: string;
          /**
           * Hs Analytics First Url
           * @description The first URL visited by the contact on your website as tracked by HubSpot.
           */
          hs_analytics_first_url?: string;
          /**
           * Hs Analytics First Visit Timestamp
           * @description Timestamp of the contact's first visit to your website. Format: ISO 8601.
           */
          hs_analytics_first_visit_timestamp?: string;
          /**
           * Hs Analytics Last Referrer
           * @description The last referring URL that brought the contact to your website.
           */
          hs_analytics_last_referrer?: string;
          /**
           * Hs Analytics Last Timestamp
           * @description Timestamp of the contact's last interaction tracked by HubSpot analytics. Format: ISO 8601.
           */
          hs_analytics_last_timestamp?: string;
          /**
           * Hs Analytics Last Touch Converting Campaign
           * @description The HubSpot campaign ID or name of the last campaign that led to a conversion for this contact.
           */
          hs_analytics_last_touch_converting_campaign?: string;
          /**
           * Hs Analytics Last Url
           * @description The last URL visited by the contact on your website as tracked by HubSpot.
           */
          hs_analytics_last_url?: string;
          /**
           * Hs Analytics Last Visit Timestamp
           * @description Timestamp of the contact's last visit to your website. Format: ISO 8601.
           */
          hs_analytics_last_visit_timestamp?: string;
          /**
           * Hs Analytics Num Event Completions
           * @description The total number of HubSpot-tracked custom behavioral events completed by the contact.
           */
          hs_analytics_num_event_completions?: string;
          /**
           * Hs Analytics Num Page Views
           * @description The total number of pages viewed by the contact on your website, as tracked by HubSpot.
           */
          hs_analytics_num_page_views?: string;
          /**
           * Hs Analytics Num Visits
           * @description The total number of sessions (visits) by the contact on your website, as tracked by HubSpot.
           */
          hs_analytics_num_visits?: string;
          /**
           * Hs Analytics Revenue
           * @description The amount of revenue attributed to this contact through HubSpot's analytics.
           */
          hs_analytics_revenue?: string;
          /**
           * Hs Analytics Source
           * @description The original source of the contact (e.g., Organic Search, Paid Social, Direct Traffic).
           */
          hs_analytics_source?: string;
          /**
           * Hs Analytics Source Data 1
           * @description Additional source data field 1, often used for UTM parameters like `utm_campaign` or `utm_medium`.
           */
          hs_analytics_source_data_1?: string;
          /**
           * Hs Analytics Source Data 2
           * @description Additional source data field 2, often used for UTM parameters like `utm_source` or `utm_content`.
           */
          hs_analytics_source_data_2?: string;
          /**
           * Hubspot Owner Assigneddate
           * @description The date and time when a HubSpot owner was assigned to the contact. Format: ISO 8601.
           */
          hubspot_owner_assigneddate?: string;
          /**
           * Hubspot Owner Id
           * @description The ID of the HubSpot user who is the current owner of this contact.
           */
          hubspot_owner_id?: string;
          /**
           * Hubspot Team Id
           * @description The ID of the HubSpot team to which the contact is primarily assigned.
           */
          hubspot_team_id?: string;
          /**
           * Hubspotscore
           * @description The contact's lead score as calculated by HubSpot's lead scoring rules.
           */
          hubspotscore?: string;
          /**
           * Industry
           * @description The primary industry of the contact's company.
           */
          industry?: string;
          /**
           * Ip City
           * @description The city identified from the contact's IP address during their last website session.
           */
          ip_city?: string;
          /**
           * Ip Country
           * @description The country identified from the contact's IP address during their last website session.
           */
          ip_country?: string;
          /**
           * Ip Country Code
           * @description The country code (e.g., US, CA, GB) identified from the contact's IP address.
           */
          ip_country_code?: string;
          /**
           * Ip Latlon
           * @description The approximate latitude and longitude derived from the contact's IP address. Format: 'latitude,longitude'.
           */
          ip_latlon?: string;
          /**
           * Ip State
           * @description The state or region identified from the contact's IP address during their last website session.
           */
          ip_state?: string;
          /**
           * Ip State Code
           * @description The state or region code (e.g., MA, CA, TX) identified from the contact's IP address.
           */
          ip_state_code?: string;
          /**
           * Ip Zipcode
           * @description The ZIP or postal code identified from the contact's IP address.
           */
          ip_zipcode?: string;
          /**
           * Job Function
           * @description The contact's job function or department (e.g., Sales, Marketing, Engineering).
           */
          job_function?: string;
          /**
           * Jobtitle
           * @description The contact's official job title.
           */
          jobtitle?: string;
          /**
           * Kloutscoregeneral
           * @description The contact's general Klout score, if available and applicable (Klout service is defunct).
           */
          kloutscoregeneral?: string;
          /**
           * Lastmodifieddate
           * @description The date and time when the contact record was last modified. Format: ISO 8601.
           */
          lastmodifieddate?: string;
          /**
           * Lastname
           * @description The contact's last name.
           */
          lastname?: string;
          /**
           * Lifecyclestage
           * @description The contact's current stage in the sales and marketing funnel.
           */
          lifecyclestage?: string;
          /**
           * Linkedinbio
           * @description The contact's biography or summary from their LinkedIn profile.
           */
          linkedinbio?: string;
          /**
           * Linkedinconnections
           * @description The number of LinkedIn connections the contact has.
           */
          linkedinconnections?: string;
          /**
           * Marital Status
           * @description The contact's marital status.
           */
          marital_status?: string;
          /**
           * Message
           * @description A general message or note related to the contact, often captured from a form submission's message field.
           */
          message?: string;
          /**
           * Military Status
           * @description The contact's military status (e.g., Veteran, Active Duty).
           */
          military_status?: string;
          /**
           * Mobilephone
           * @description The contact's mobile phone number.
           */
          mobilephone?: string;
          /**
           * Notes Last Contacted
           * @description The date when the contact was last contacted, based on information logged in notes. Format: ISO 8601.
           */
          notes_last_contacted?: string;
          /**
           * Notes Last Updated
           * @description The date when notes about the contact were last updated. Format: ISO 8601.
           */
          notes_last_updated?: string;
          /**
           * Notes Next Activity Date
           * @description The date of the next scheduled activity with the contact, based on information logged in notes. Format: ISO 8601.
           */
          notes_next_activity_date?: string;
          /**
           * Num Associated Deals
           * @description The number of deals currently associated with this contact in HubSpot.
           */
          num_associated_deals?: string;
          /**
           * Num Contacted Notes
           * @description The number of notes logged that specifically relate to contacting or attempts to contact this individual.
           */
          num_contacted_notes?: string;
          /**
           * Num Conversion Events
           * @description The total number of conversion events (e.g., form submissions, CTA clicks) recorded for this contact.
           */
          num_conversion_events?: string;
          /**
           * Num Notes
           * @description The total number of notes associated with this contact record.
           */
          num_notes?: string;
          /**
           * Num Unique Conversion Events
           * @description The number of unique types of conversion events recorded for this contact.
           */
          num_unique_conversion_events?: string;
          /**
           * Numemployees
           * @description The number of employees in the contact's company.
           */
          numemployees?: string;
          /**
           * Owneremail
           * @description The email address of the HubSpot user who is the current owner of this contact.
           */
          owneremail?: string;
          /**
           * Ownername
           * @description The full name of the HubSpot user who is the current owner of this contact.
           */
          ownername?: string;
          /**
           * Phone
           * @description The contact's primary phone number (can be landline or mobile).
           */
          phone?: string;
          /**
           * Photo
           * @description URL of the contact's photo or avatar.
           */
          photo?: string;
          /**
           * Recent Conversion Date
           * @description The date of the contact's most recent conversion event. Format: ISO 8601.
           */
          recent_conversion_date?: string;
          /**
           * Recent Conversion Event Name
           * @description The name of the contact's most recent conversion event.
           */
          recent_conversion_event_name?: string;
          /**
           * Recent Deal Amount
           * @description The monetary amount of the most recent deal associated with the contact.
           */
          recent_deal_amount?: string;
          /**
           * Recent Deal Close Date
           * @description The close date of the most recent deal associated with the contact. Recommended format: YYYY-MM-DD.
           */
          recent_deal_close_date?: string;
          /**
           * Relationship Status
           * @description The contact's relationship status (e.g., single, married, domestic partnership). This may differ from marital_status depending on specific CRM setup.
           */
          relationship_status?: string;
          /**
           * Salutation
           * @description The salutation for the contact (e.g., Mr., Ms., Dr., Prof.).
           */
          salutation?: string;
          /**
           * School
           * @description The name of the school, college, or university the contact attended.
           */
          school?: string;
          /**
           * Seniority
           * @description The contact's seniority level within their organization (e.g., Entry-level, Manager, Director, VP, C-level).
           */
          seniority?: string;
          /**
           * Start Date
           * @description The contact's start date, typically referring to their employment start date or a project start date. Recommended format: YYYY-MM-DD.
           */
          start_date?: string;
          /**
           * State
           * @description The state or province where the contact resides.
           */
          state?: string;
          /**
           * Surveymonkeyeventlastupdated
           * @description Timestamp of the last update related to a SurveyMonkey event for this contact. Format: ISO 8601.
           */
          surveymonkeyeventlastupdated?: string;
          /**
           * Total Revenue
           * @description The total revenue generated from all deals associated with this contact.
           */
          total_revenue?: string;
          /**
           * Twitterbio
           * @description The contact's biography from their Twitter profile.
           */
          twitterbio?: string;
          /**
           * Twitterhandle
           * @description The contact's Twitter username (handle), without the '@' symbol.
           */
          twitterhandle?: string;
          /**
           * Twitterprofilephoto
           * @description URL of the contact's Twitter profile photo.
           */
          twitterprofilephoto?: string;
          /**
           * Webinareventlastupdated
           * @description Timestamp of the last update related to a webinar event (e.g., registration, attendance) for this contact. Format: ISO 8601.
           */
          webinareventlastupdated?: string;
          /**
           * Website
           * @description The URL of the contact's personal or company website.
           */
          website?: string;
          /**
           * Work Email
           * @description The contact's work or business email address.
           */
          work_email?: string;
          /**
           * Zip
           * @description The ZIP or postal code where the contact resides.
           */
          zip?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_CONTACTS tool output.
 */
type HUBSPOT_CREATE_A_BATCH_OF_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description The response from the HubSpot API. This typically includes a 'status' field (e.g., 'COMPLETE'), a 'results' list with details for each created contact, and 'startedAt'/'completedAt' timestamps. If errors occurred, 'errors' may also be present.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_EMAILS tool input.
 */
type HUBSPOT_CREATE_A_BATCH_OF_EMAILS_INPUT = {
  /**
   * Inputs
   * @description List of email objects to create, each defining its properties and associations.
   */
  inputs?: {
      /**
       * Associations
       * @description Associations to link this email with other CRM objects.
       */
      associations: {
          /**
           * To
           * @description The unique identifier of the CRM object to which the email will be associated.
           */
          to: string;
          /**
           * Types
           * @description Defines the types of associations to be created for the email.
           */
          types: {
              /**
               * Association Category
               * @description Category of the association (HubSpot-defined, user-defined, or integrator-defined).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description Unique identifier for the type of association, specifying the nature of the link between the email and the associated object.
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Email properties. Required: 'hs_email_subject', 'hs_email_text', 'hs_email_direction'. The 'hs_email_direction' must be one of: 'EMAIL' (outgoing), 'INCOMING_EMAIL' (incoming), or 'FORWARDED_EMAIL' (forwarded).
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_BATCH_OF_EMAILS tool output.
 */
type HUBSPOT_CREATE_A_BATCH_OF_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Response data, including creation status and details of created email objects.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_A_CAMPAIGN tool input.
 */
type HUBSPOT_CREATE_A_CAMPAIGN_INPUT = {
  /**
   * Properties
   * @description A dictionary of properties for the new campaign. Common properties include 'name', 'campaign_goal', and 'is_ab_test'.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_CAMPAIGN tool output.
 */
type HUBSPOT_CREATE_A_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL tool input.
 */
type HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL_INPUT = {
  /**
   * Active Domain
   * @description Domain for sending the email; must be a connected and verified HubSpot sending domain.
   */
  activeDomain?: string;
  /**
   * Archived
   * @description True if the email is archived (typically hidden from main dashboard view).
   */
  archived?: boolean;
  /**
   * Business Unit Id
   * @description The ID of the business unit this email is associated with, if applicable.
   */
  businessUnitId?: string;
  /**
   * Campaign
   * @description ID (GUID) of the associated HubSpot campaign for tracking/reporting.
   */
  campaign?: string;
  /**
   * Content  Flex Areas
   * @description Dictionary defining content and layout of flexible, customizable areas in the email template.
   */
  content__flexAreas?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Plain Text Version
   * @description Plain text version of the email, for non-HTML clients or recipient preference.
   */
  content__plainTextVersion?: string;
  /**
   * Content  Smart Fields
   * @description Dictionary of smart fields for email personalization based on contact properties.
   */
  content__smartFields?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Template Path
   * @description Path to the email template in HubSpot Design Manager.
   */
  content__templatePath?: string;
  /**
   * Content  Theme Settings Values
   * @description Dictionary of theme settings values to customize email appearance.
   */
  content__themeSettingsValues?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Widget Containers
   * @description Dictionary of widget containers for grouping and managing widgets in the email template.
   */
  content__widgetContainers?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Widgets
   * @description Dictionary of widgets (e.g., text, images, CTAs) and their configurations for email content.
   */
  content__widgets?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Feedback Survey Id
   * @description The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;
  /**
   * From  Custom Reply To
   * @description Custom reply-to email address, overrides main 'Reply To' if set.
   */
  from__customReplyTo?: string;
  /**
   * From  From Name
   * @description Sender name appearing in the 'From' field of the received email.
   */
  from__fromName?: string;
  /**
   * From  Reply To
   * @description Primary 'From' and reply-to email address, unless `from__customReplyTo` is used.
   */
  from__replyTo?: string;
  /**
   * Language
   * @description Primary language of the email content.
   * @enum {string}
   */
  language?: "af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za";
  /**
   * Name
   * @description Internal name of the email, as displayed on the HubSpot email dashboard.
   */
  name?: string;
  /**
   * Publish Date
   * Format: date-time
   * @description Scheduled ISO 8601 date-time for email publication or sending.
   */
  publishDate?: string;
  /**
   * Rss Data  Blog Email Type
   * @description The type of blog email, which determines send frequency (e.g., instant, daily, weekly).
   */
  rssData__blogEmailType?: string;
  /**
   * Rss Data  Blog Image Max Width
   * @description The maximum width for images included from the blog feed in the RSS email.
   */
  rssData__blogImageMaxWidth?: number;
  /**
   * Rss Data  Blog Layout
   * @description Specifies the layout to be used for the blog RSS email.
   */
  rssData__blogLayout?: string;
  /**
   * Rss Data  Hubspot Blog Id
   * @description The ID of the HubSpot blog to be used for the RSS email.
   */
  rssData__hubspotBlogId?: string;
  /**
   * Rss Data  Max Entries
   * @description The maximum number of blog posts (RSS entries) to include in a single RSS email.
   */
  rssData__maxEntries?: number;
  /**
   * Rss Data  Rss Entry Template
   * @description The HTML template for formatting each individual RSS entry within the email.
   */
  rssData__rssEntryTemplate?: string;
  /**
   * Rss Data  Timing
   * @description A dictionary specifying the timing and scheduling details for sending RSS emails (e.g., specific day/time for weekly sends).
   */
  rssData__timing?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Rss Data  Url
   * @description URL of the RSS feed for email content. Must be valid and accessible if using RSS features.
   */
  rssData__url?: string;
  /**
   * Rss Data  Use Headline As Subject
   * @description If true, the email subject will be automatically populated from the blog post headline for RSS emails.
   */
  rssData__useHeadlineAsSubject?: boolean;
  /**
   * Send On Publish
   * @description True to send email immediately on publish; false to publish without sending until triggered/scheduled.
   */
  sendOnPublish?: boolean;
  /**
   * State
   * @description Current state of the email (e.g., DRAFT, SCHEDULED, PUBLISHED).
   * @enum {string}
   */
  state?: "AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT";
  /**
   * Subcategory
   * @description Email subcategory for internal organization or specific types (e.g., 'newsletter').
   */
  subcategory?: string;
  /**
   * Subject
   * @description The subject line of the marketing email.
   */
  subject?: string;
  /**
   * Subscription Details  Office Location Id
   * @description ID of the office location for CAN-SPAM compliance and personalization.
   */
  subscriptionDetails__officeLocationId?: string;
  /**
   * Subscription Details  Preferences Group Id
   * @description ID of the subscription preferences group for managing recipient preferences.
   */
  subscriptionDetails__preferencesGroupId?: string;
  /**
   * Subscription Details  Subscription Id
   * @description ID of the specific subscription type (e.g., newsletter, product updates).
   */
  subscriptionDetails__subscriptionId?: string;
  /**
   * Testing  Ab Sample Size Default
   * @description Default email version (master/variant) if A/B test sample size is too small for significance.
   * @enum {string}
   */
  testing__abSampleSizeDefault?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Sampling Default
   * @description Default email version (master/variant) if A/B test is inconclusive after the test period.
   * @enum {string}
   */
  testing__abSamplingDefault?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Status
   * @description Current A/B test status for this email (e.g., master, variant).
   * @enum {string}
   */
  testing__abStatus?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Success Metric
   * @description Metric (e.g., CLICKS_BY_OPENS) to determine the A/B test winning version.
   * @enum {string}
   */
  testing__abSuccessMetric?: "CLICKS_BY_OPENS" | "CLICKS_BY_DELIVERED" | "OPENS_BY_DELIVERED";
  /**
   * Testing  Ab Test Percentage
   * @description Percentage of recipients in the A/B test group (e.g., 20 for 20%).
   */
  testing__abTestPercentage?: number;
  /**
   * Testing  Hours To Wait
   * @description Hours to wait for A/B test results before sending the winning version to remaining recipients.
   */
  testing__hoursToWait?: number;
  /**
   * Testing  Test Id
   * @description The unique identifier for the A/B test associated with this email.
   */
  testing__testId?: string;
  /**
   * To  Contact Ids  Exclude
   * @description List of specific contact IDs to explicitly exclude, even if in included lists.
   */
  to__contactIds__exclude?: string[];
  /**
   * To  Contact Ids  Include
   * @description List of specific contact IDs to include as recipients.
   */
  to__contactIds__include?: string[];
  /**
   * To  Contact Lists  Exclude
   * @description List of contact list IDs whose members to explicitly exclude.
   */
  to__contactLists__exclude?: string[];
  /**
   * To  Contact Lists  Include
   * @description List of contact list IDs whose members to include as recipients.
   */
  to__contactLists__include?: string[];
  /**
   * To  Limit Send Frequency
   * @description True to apply HubSpot's send frequency limits, preventing over-mailing.
   */
  to__limitSendFrequency?: boolean;
  /**
   * To  Suppress Graymail
   * @description True to not send to contacts identified by HubSpot as 'graymail' (low engagement).
   */
  to__suppressGraymail?: boolean;
  /**
   * Webversion  Domain
   * @description Domain for the email's web version; defaults to HubSpot domain if unspecified.
   */
  webversion__domain?: string;
  /**
   * Webversion  Expires At
   * Format: date-time
   * @description ISO 8601 date-time when the web version expires and becomes inaccessible.
   */
  webversion__expiresAt?: string;
  /**
   * Webversion  Meta Description
   * @description Meta description for the web version, used by search engines.
   */
  webversion__metaDescription?: string;
  /**
   * Webversion  Redirect To Page Id
   * @description ID of a HubSpot page for redirect if web version link is expired/deactivated.
   */
  webversion__redirectToPageId?: string;
  /**
   * Webversion  Redirect To Url
   * @description Custom URL for redirect if web version link is expired/deactivated.
   */
  webversion__redirectToUrl?: string;
  /**
   * Webversion  Slug
   * @description Custom URL slug for the email's web version (e.g., 'july-newsletter').
   */
  webversion__slug?: string;
  /**
   * Webversion  Title
   * @description Browser tab title for the email's web version.
   */
  webversion__title?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL tool output.
 */
type HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_CONTACTS tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_CONTACTS_INPUT = {
  /**
   * Inputs
   * @description A list of contact creation requests. Each object in the list defines the properties and associations for a single new contact. Up to 100 contacts can be created in a single batch request.
   *             For example:
   *             [
   *                 {
   *                     "associations": [
   *                         {
   *                             "types": [
   *                                 {
   *                                     "associationCategory": "HUBSPOT_DEFINED",
   *                                     "associationTypeId": 1
   *                                 }
   *                             ],
   *                             "to": {
   *                                 "id": "25496222837"
   *                             }
   *                         }
   *                     ],
   *                     "properties": {
   *                         "email": "new.contact@example.com",
   *                         "firstname": "John",
   *                         "lastname": "Doe",
   *                         "company": "Example Corp"
   *                     }
   *                 }
   *             ]
   *
   */
  inputs?: {
      /**
       * Associations
       * @description A list of associations to create for the new contact. Associations link this contact to other CRM objects such as companies or deals.
       */
      associations: {
          /**
           * To
           * @description Specifies the target CRM object for the association by its ID. For example, `{'id': '12345'}` where '12345' is the ID of an existing company or deal.
           */
          to: {
              /**
               * Id
               * @description The unique identifier of the CRM object (e.g., company ID, deal ID) to which the new contact will be associated.
               */
              id: string;
          };
          /**
           * Types
           * @description A list of association type definitions. Each item specifies the category and type ID of an association.
           */
          types: {
              /**
               * Association Category
               * @description The category of the association. HubSpot-defined associations are default and cannot be deleted. User-defined associations are custom associations created by users. Integrator-defined associations are created by HubSpot integrations.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The unique ID of the association type, defining the nature of the link (e.g., contact to company).
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description An object containing the properties to set for the new contact. This includes standard HubSpot contact properties (e.g., `firstname`, `lastname`, `email`) and any defined custom properties.
       */
      properties: {
          /**
           * Address
           * @description The contact's full street address, including apartment or unit number.
           */
          address?: string;
          /**
           * Annualrevenue
           * @description The annual revenue of the company the contact is associated with.
           */
          annualrevenue?: string;
          /**
           * Associatedcompanyid
           * @description The ID of the primary company associated with this contact.
           */
          associatedcompanyid?: string;
          /**
           * Associatedcompanylastupdated
           * @description The timestamp indicating the last update to the associated company's record. Typically in ISO 8601 format.
           */
          associatedcompanylastupdated?: string;
          /**
           * City
           * @description The city where the contact resides.
           */
          city?: string;
          /**
           * Closedate
           * @description The date when the deal associated with the contact was closed. Recommended format: YYYY-MM-DD.
           */
          closedate?: string;
          /**
           * Company
           * @description The name of the company the contact works for or is associated with.
           */
          company?: string;
          /**
           * Company Size
           * @description The size of the contact's company, often categorized by the number of employees.
           */
          company_size?: string;
          /**
           * Country
           * @description The country where the contact resides.
           */
          country?: string;
          /**
           * Createdate
           * @description The date and time when the contact record was created in HubSpot. Format: ISO 8601.
           */
          createdate?: string;
          /**
           * Currentlyinworkflow
           * @description Indicates if the contact is currently active in any HubSpot workflow. Boolean value represented as a string.
           */
          currentlyinworkflow?: string;
          /**
           * Custom Properties
           * @description A dictionary of custom properties for the contact. Keys are the internal names of the custom properties (e.g., `my_custom_field_123`), and values are the respective property values to be set. For example: `{'custom_property_1': 'value for custom property 1', 'custom_property_2': 'value for custom property 2'}`.
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * Date Of Birth
           * @description The contact's date of birth. Recommended format: YYYY-MM-DD.
           */
          date_of_birth?: string;
          /**
           * Days To Close
           * @description The number of days it took to close the deal associated with the contact.
           */
          days_to_close?: string;
          /**
           * Degree
           * @description The contact's highest educational degree obtained (e.g., Bachelor's, Master's).
           */
          degree?: string;
          /**
           * Email
           * @description The primary email address of the contact. This is often used as a unique identifier.
           */
          email?: string;
          /**
           * Engagements Last Meeting Booked
           * @description Timestamp of the last meeting booked with the contact. Format: ISO 8601.
           */
          engagements_last_meeting_booked?: string;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description The campaign ID or name associated with the last meeting booked with the contact.
           */
          engagements_last_meeting_booked_campaign?: string;
          /**
           * Engagements Last Meeting Booked Medium
           * @description The medium (e.g., email, call, LinkedIn) through which the last meeting was booked.
           */
          engagements_last_meeting_booked_medium?: string;
          /**
           * Engagements Last Meeting Booked Source
           * @description The source (e.g., organic search, referral, sales outreach) of the last meeting booked.
           */
          engagements_last_meeting_booked_source?: string;
          /**
           * Fax
           * @description The contact's facsimile (fax) number.
           */
          fax?: string;
          /**
           * Field Of Study
           * @description The contact's primary field of academic study (e.g., Computer Science, Marketing).
           */
          field_of_study?: string;
          /**
           * First Conversion Date
           * @description The date of the contact's first conversion (e.g., submitting a form, downloading an ebook). Format: ISO 8601.
           */
          first_conversion_date?: string;
          /**
           * First Conversion Event Name
           * @description The name or description of the specific event that marked the contact's first conversion.
           */
          first_conversion_event_name?: string;
          /**
           * First Deal Created Date
           * @description The date when the first deal was created for this contact in HubSpot. Format: ISO 8601.
           */
          first_deal_created_date?: string;
          /**
           * Firstname
           * @description The contact's first name.
           */
          firstname?: string;
          /**
           * Followercount
           * @description The contact's follower count on a specified social media platform (e.g., Twitter, LinkedIn).
           */
          followercount?: string;
          /**
           * Gender
           * @description The contact's gender.
           */
          gender?: string;
          /**
           * Graduation Date
           * @description The contact's graduation date from an educational institution. Recommended format: YYYY-MM-DD.
           */
          graduation_date?: string;
          /**
           * Hs Additional Emails
           * @description A semi-colon separated list of additional email addresses for the contact.
           */
          hs_additional_emails?: string;
          /**
           * Hs All Accessible Team Ids
           * @description A semi-colon separated list of all HubSpot team IDs that have access to this contact record.
           */
          hs_all_accessible_team_ids?: string;
          /**
           * Hs All Assigned Business Unit Ids
           * @description A semi-colon separated list of all business unit IDs assigned to the contact.
           */
          hs_all_assigned_business_unit_ids?: string;
          /**
           * Hs All Contact Vids
           * @description A semi-colon separated list of all legacy contact VIDs (Visitor IDs) associated with this contact.
           */
          hs_all_contact_vids?: string;
          /**
           * Hs All Owner Ids
           * @description A semi-colon separated list of all HubSpot user IDs who have ever been owners of this contact.
           */
          hs_all_owner_ids?: string;
          /**
           * Hs All Team Ids
           * @description A semi-colon separated list of all HubSpot team IDs this contact has been associated with.
           */
          hs_all_team_ids?: string;
          /**
           * Hs Analytics Average Page Views
           * @description The average number of pages viewed by the contact per session on your website, tracked by HubSpot.
           */
          hs_analytics_average_page_views?: string;
          /**
           * Hs Analytics First Referrer
           * @description The first referring URL that brought the contact to your website.
           */
          hs_analytics_first_referrer?: string;
          /**
           * Hs Analytics First Timestamp
           * @description Timestamp of the contact's first interaction tracked by HubSpot analytics. Format: ISO 8601.
           */
          hs_analytics_first_timestamp?: string;
          /**
           * Hs Analytics First Touch Converting Campaign
           * @description The HubSpot campaign ID or name of the first campaign that led to a conversion for this contact.
           */
          hs_analytics_first_touch_converting_campaign?: string;
          /**
           * Hs Analytics First Url
           * @description The first URL visited by the contact on your website as tracked by HubSpot.
           */
          hs_analytics_first_url?: string;
          /**
           * Hs Analytics First Visit Timestamp
           * @description Timestamp of the contact's first visit to your website. Format: ISO 8601.
           */
          hs_analytics_first_visit_timestamp?: string;
          /**
           * Hs Analytics Last Referrer
           * @description The last referring URL that brought the contact to your website.
           */
          hs_analytics_last_referrer?: string;
          /**
           * Hs Analytics Last Timestamp
           * @description Timestamp of the contact's last interaction tracked by HubSpot analytics. Format: ISO 8601.
           */
          hs_analytics_last_timestamp?: string;
          /**
           * Hs Analytics Last Touch Converting Campaign
           * @description The HubSpot campaign ID or name of the last campaign that led to a conversion for this contact.
           */
          hs_analytics_last_touch_converting_campaign?: string;
          /**
           * Hs Analytics Last Url
           * @description The last URL visited by the contact on your website as tracked by HubSpot.
           */
          hs_analytics_last_url?: string;
          /**
           * Hs Analytics Last Visit Timestamp
           * @description Timestamp of the contact's last visit to your website. Format: ISO 8601.
           */
          hs_analytics_last_visit_timestamp?: string;
          /**
           * Hs Analytics Num Event Completions
           * @description The total number of HubSpot-tracked custom behavioral events completed by the contact.
           */
          hs_analytics_num_event_completions?: string;
          /**
           * Hs Analytics Num Page Views
           * @description The total number of pages viewed by the contact on your website, as tracked by HubSpot.
           */
          hs_analytics_num_page_views?: string;
          /**
           * Hs Analytics Num Visits
           * @description The total number of sessions (visits) by the contact on your website, as tracked by HubSpot.
           */
          hs_analytics_num_visits?: string;
          /**
           * Hs Analytics Revenue
           * @description The amount of revenue attributed to this contact through HubSpot's analytics.
           */
          hs_analytics_revenue?: string;
          /**
           * Hs Analytics Source
           * @description The original source of the contact (e.g., Organic Search, Paid Social, Direct Traffic).
           */
          hs_analytics_source?: string;
          /**
           * Hs Analytics Source Data 1
           * @description Additional source data field 1, often used for UTM parameters like `utm_campaign` or `utm_medium`.
           */
          hs_analytics_source_data_1?: string;
          /**
           * Hs Analytics Source Data 2
           * @description Additional source data field 2, often used for UTM parameters like `utm_source` or `utm_content`.
           */
          hs_analytics_source_data_2?: string;
          /**
           * Hubspot Owner Assigneddate
           * @description The date and time when a HubSpot owner was assigned to the contact. Format: ISO 8601.
           */
          hubspot_owner_assigneddate?: string;
          /**
           * Hubspot Owner Id
           * @description The ID of the HubSpot user who is the current owner of this contact.
           */
          hubspot_owner_id?: string;
          /**
           * Hubspot Team Id
           * @description The ID of the HubSpot team to which the contact is primarily assigned.
           */
          hubspot_team_id?: string;
          /**
           * Hubspotscore
           * @description The contact's lead score as calculated by HubSpot's lead scoring rules.
           */
          hubspotscore?: string;
          /**
           * Industry
           * @description The primary industry of the contact's company.
           */
          industry?: string;
          /**
           * Ip City
           * @description The city identified from the contact's IP address during their last website session.
           */
          ip_city?: string;
          /**
           * Ip Country
           * @description The country identified from the contact's IP address during their last website session.
           */
          ip_country?: string;
          /**
           * Ip Country Code
           * @description The country code (e.g., US, CA, GB) identified from the contact's IP address.
           */
          ip_country_code?: string;
          /**
           * Ip Latlon
           * @description The approximate latitude and longitude derived from the contact's IP address. Format: 'latitude,longitude'.
           */
          ip_latlon?: string;
          /**
           * Ip State
           * @description The state or region identified from the contact's IP address during their last website session.
           */
          ip_state?: string;
          /**
           * Ip State Code
           * @description The state or region code (e.g., MA, CA, TX) identified from the contact's IP address.
           */
          ip_state_code?: string;
          /**
           * Ip Zipcode
           * @description The ZIP or postal code identified from the contact's IP address.
           */
          ip_zipcode?: string;
          /**
           * Job Function
           * @description The contact's job function or department (e.g., Sales, Marketing, Engineering).
           */
          job_function?: string;
          /**
           * Jobtitle
           * @description The contact's official job title.
           */
          jobtitle?: string;
          /**
           * Kloutscoregeneral
           * @description The contact's general Klout score, if available and applicable (Klout service is defunct).
           */
          kloutscoregeneral?: string;
          /**
           * Lastmodifieddate
           * @description The date and time when the contact record was last modified. Format: ISO 8601.
           */
          lastmodifieddate?: string;
          /**
           * Lastname
           * @description The contact's last name.
           */
          lastname?: string;
          /**
           * Lifecyclestage
           * @description The contact's current stage in the sales and marketing funnel.
           */
          lifecyclestage?: string;
          /**
           * Linkedinbio
           * @description The contact's biography or summary from their LinkedIn profile.
           */
          linkedinbio?: string;
          /**
           * Linkedinconnections
           * @description The number of LinkedIn connections the contact has.
           */
          linkedinconnections?: string;
          /**
           * Marital Status
           * @description The contact's marital status.
           */
          marital_status?: string;
          /**
           * Message
           * @description A general message or note related to the contact, often captured from a form submission's message field.
           */
          message?: string;
          /**
           * Military Status
           * @description The contact's military status (e.g., Veteran, Active Duty).
           */
          military_status?: string;
          /**
           * Mobilephone
           * @description The contact's mobile phone number.
           */
          mobilephone?: string;
          /**
           * Notes Last Contacted
           * @description The date when the contact was last contacted, based on information logged in notes. Format: ISO 8601.
           */
          notes_last_contacted?: string;
          /**
           * Notes Last Updated
           * @description The date when notes about the contact were last updated. Format: ISO 8601.
           */
          notes_last_updated?: string;
          /**
           * Notes Next Activity Date
           * @description The date of the next scheduled activity with the contact, based on information logged in notes. Format: ISO 8601.
           */
          notes_next_activity_date?: string;
          /**
           * Num Associated Deals
           * @description The number of deals currently associated with this contact in HubSpot.
           */
          num_associated_deals?: string;
          /**
           * Num Contacted Notes
           * @description The number of notes logged that specifically relate to contacting or attempts to contact this individual.
           */
          num_contacted_notes?: string;
          /**
           * Num Conversion Events
           * @description The total number of conversion events (e.g., form submissions, CTA clicks) recorded for this contact.
           */
          num_conversion_events?: string;
          /**
           * Num Notes
           * @description The total number of notes associated with this contact record.
           */
          num_notes?: string;
          /**
           * Num Unique Conversion Events
           * @description The number of unique types of conversion events recorded for this contact.
           */
          num_unique_conversion_events?: string;
          /**
           * Numemployees
           * @description The number of employees in the contact's company.
           */
          numemployees?: string;
          /**
           * Owneremail
           * @description The email address of the HubSpot user who is the current owner of this contact.
           */
          owneremail?: string;
          /**
           * Ownername
           * @description The full name of the HubSpot user who is the current owner of this contact.
           */
          ownername?: string;
          /**
           * Phone
           * @description The contact's primary phone number (can be landline or mobile).
           */
          phone?: string;
          /**
           * Photo
           * @description URL of the contact's photo or avatar.
           */
          photo?: string;
          /**
           * Recent Conversion Date
           * @description The date of the contact's most recent conversion event. Format: ISO 8601.
           */
          recent_conversion_date?: string;
          /**
           * Recent Conversion Event Name
           * @description The name of the contact's most recent conversion event.
           */
          recent_conversion_event_name?: string;
          /**
           * Recent Deal Amount
           * @description The monetary amount of the most recent deal associated with the contact.
           */
          recent_deal_amount?: string;
          /**
           * Recent Deal Close Date
           * @description The close date of the most recent deal associated with the contact. Recommended format: YYYY-MM-DD.
           */
          recent_deal_close_date?: string;
          /**
           * Relationship Status
           * @description The contact's relationship status (e.g., single, married, domestic partnership). This may differ from marital_status depending on specific CRM setup.
           */
          relationship_status?: string;
          /**
           * Salutation
           * @description The salutation for the contact (e.g., Mr., Ms., Dr., Prof.).
           */
          salutation?: string;
          /**
           * School
           * @description The name of the school, college, or university the contact attended.
           */
          school?: string;
          /**
           * Seniority
           * @description The contact's seniority level within their organization (e.g., Entry-level, Manager, Director, VP, C-level).
           */
          seniority?: string;
          /**
           * Start Date
           * @description The contact's start date, typically referring to their employment start date or a project start date. Recommended format: YYYY-MM-DD.
           */
          start_date?: string;
          /**
           * State
           * @description The state or province where the contact resides.
           */
          state?: string;
          /**
           * Surveymonkeyeventlastupdated
           * @description Timestamp of the last update related to a SurveyMonkey event for this contact. Format: ISO 8601.
           */
          surveymonkeyeventlastupdated?: string;
          /**
           * Total Revenue
           * @description The total revenue generated from all deals associated with this contact.
           */
          total_revenue?: string;
          /**
           * Twitterbio
           * @description The contact's biography from their Twitter profile.
           */
          twitterbio?: string;
          /**
           * Twitterhandle
           * @description The contact's Twitter username (handle), without the '@' symbol.
           */
          twitterhandle?: string;
          /**
           * Twitterprofilephoto
           * @description URL of the contact's Twitter profile photo.
           */
          twitterprofilephoto?: string;
          /**
           * Webinareventlastupdated
           * @description Timestamp of the last update related to a webinar event (e.g., registration, attendance) for this contact. Format: ISO 8601.
           */
          webinareventlastupdated?: string;
          /**
           * Website
           * @description The URL of the contact's personal or company website.
           */
          website?: string;
          /**
           * Work Email
           * @description The contact's work or business email address.
           */
          work_email?: string;
          /**
           * Zip
           * @description The ZIP or postal code where the contact resides.
           */
          zip?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_CONTACTS tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description The response from the HubSpot API. This typically includes a 'status' field (e.g., 'COMPLETE'), a 'results' list with details for each created contact, and 'startedAt'/'completedAt' timestamps. If errors occurred, 'errors' may also be present.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_DEALS tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_DEALS_INPUT = {
  /**
   * Inputs
   * @description List of deal objects to create, each defining its properties and associations with other CRM objects.
   */
  inputs?: {
      /**
       * Associations
       * @description List of associations for this deal (e.g., with contacts or companies).
       */
      associations: {
          /**
           * To
           * @description Target object (identified by its ID) to associate with the deal.
           */
          to: {
              /**
               * Id
               * @description Unique ID of the target object for association.
               */
              id: string;
          };
          /**
           * Types
           * @description List of association types defining the relationship.
           */
          types: {
              /**
               * Association Category
               * @description Category of the association (HubSpot-defined, user-defined, or integrator-defined).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description Unique ID of the association type.
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Properties for the new deal. `dealname` is typically required.
       */
      properties: {
          /**
           * Amount
           * @description Total monetary value of the deal.
           */
          amount?: string;
          /**
           * Amount In Home Currency
           * @description Read-only: Deal amount in the company's home currency, calculated by HubSpot.
           */
          amount_in_home_currency?: string;
          /**
           * Closed Lost Reason
           * @description Reason why the deal was lost.
           */
          closed_lost_reason?: string;
          /**
           * Closed Won Reason
           * @description Reason why the deal was won.
           */
          closed_won_reason?: string;
          /**
           * Closedate
           * @description Expected or actual close date (e.g., YYYY-MM-DD or Unix timestamp in milliseconds).
           */
          closedate?: string;
          /**
           * Createdate
           * @description Read-only: Date and time the deal was created.
           */
          createdate?: string;
          /**
           * Custom Properties
           * @description Dictionary of custom properties. Keys are internal names, values are the values to set.
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * Days To Close
           * @description Read-only: Number of days between creation and close date, calculated by HubSpot.
           */
          days_to_close?: string;
          /**
           * Deal Currency Code
           * @description ISO 4217 currency code for the deal's amount.
           */
          deal_currency_code?: string;
          /**
           * Dealname
           * @description Name or title of the deal. Typically required for creating a new deal.
           */
          dealname?: string;
          /**
           * Dealstage
           * @description ID or internal name of the current deal stage within a HubSpot pipeline.
           */
          dealstage?: string;
          /**
           * Dealtype
           * @description Type of deal (e.g., 'newbusiness', 'existingbusiness'), typically custom-defined.
           */
          dealtype?: string;
          /**
           * Description
           * @description Brief summary or notes about the deal.
           */
          description?: string;
          /**
           * Engagements Last Meeting Booked
           * @description Read-only: Date of the most recent meeting booked associated with this deal.
           */
          engagements_last_meeting_booked?: string;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description Read-only: HubSpot campaign ID for the last meeting booked.
           */
          engagements_last_meeting_booked_campaign?: string;
          /**
           * Engagements Last Meeting Booked Medium
           * @description Read-only: Medium (e.g., 'EMAIL', 'CALL') of the last meeting booked.
           */
          engagements_last_meeting_booked_medium?: string;
          /**
           * Engagements Last Meeting Booked Source
           * @description Read-only: Source (e.g., 'CRM_UI', 'SALES_TOOLS') of the last meeting booked.
           */
          engagements_last_meeting_booked_source?: string;
          /**
           * Hs Acv
           * @description Annual Contract Value (ACV) of the deal.
           */
          hs_acv?: string;
          /**
           * Hs All Accessible Team Ids
           * @description Read-only: Semicolon-separated list of team IDs with access to this deal.
           */
          hs_all_accessible_team_ids?: string;
          /**
           * Hs All Assigned Business Unit Ids
           * @description Read-only: Semicolon-separated list of assigned business unit IDs (requires Business Units add-on).
           */
          hs_all_assigned_business_unit_ids?: string;
          /**
           * Hs All Owner Ids
           * @description Read-only: Semicolon-separated list of all assigned owner IDs.
           */
          hs_all_owner_ids?: string;
          /**
           * Hs All Team Ids
           * @description Read-only: Semicolon-separated list of all teams assigned as an owner.
           */
          hs_all_team_ids?: string;
          /**
           * Hs Analytics Source
           * @description Read-only: Original source of the associated contact (e.g., 'Organic Search').
           */
          hs_analytics_source?: string;
          /**
           * Hs Arr
           * @description Annual Recurring Revenue (ARR) of the deal.
           */
          hs_arr?: string;
          /**
           * Hs Campaign
           * @description HubSpot campaign ID that led to this deal.
           */
          hs_campaign?: string;
          /**
           * Hs Closed Amount
           * @description Final amount of the deal when closed.
           */
          hs_closed_amount?: string;
          /**
           * Hs Closed Amount In Home Currency
           * @description Read-only: Final closed amount in company's home currency, calculated by HubSpot.
           */
          hs_closed_amount_in_home_currency?: string;
          /**
           * Hs Createdate
           * @description Read-only: Exact date and time the deal was created in HubSpot.
           */
          hs_createdate?: string;
          /**
           * Hs Deal Stage Probability
           * @description Read-only: Win probability for the current deal stage, based on pipeline settings.
           */
          hs_deal_stage_probability?: string;
          /**
           * Hs Forecast Amount
           * @description Weighted amount of the deal ('Amount' * 'Deal Stage Probability') for sales forecasting.
           */
          hs_forecast_amount?: string;
          /**
           * Hs Forecast Probability
           * @description Probability of closing the deal for forecasting; can be manual or stage-based.
           */
          hs_forecast_probability?: string;
          /**
           * Hs Is Closed
           * @description Read-only: Indicates if the deal is closed ('true' or 'false'), derived from `dealstage`.
           */
          hs_is_closed?: string;
          /**
           * Hs Lastmodifieddate
           * @description Read-only: Date and time the deal was last modified.
           */
          hs_lastmodifieddate?: string;
          /**
           * Hs Mrr
           * @description Monthly Recurring Revenue (MRR) of the deal.
           */
          hs_mrr?: string;
          /**
           * Hs Next Step
           * @description Next actionable step for this deal.
           */
          hs_next_step?: string;
          /**
           * Hs Object Id
           * @description Read-only: Unique ID of the deal in HubSpot.
           */
          hs_object_id?: string;
          /**
           * Hs Priority
           * @description Priority of the deal (e.g., 'high', 'medium', 'low').
           */
          hs_priority?: string;
          /**
           * Hs Projected Amount
           * @description Deprecated. Use `hs_forecast_amount` instead. Projected deal amount.
           */
          hs_projected_amount?: string;
          /**
           * Hs Projected Amount In Home Currency
           * @description Deprecated. Projected deal amount in home currency.
           */
          hs_projected_amount_in_home_currency?: string;
          /**
           * Hs Tcv
           * @description Total Contract Value (TCV), including one-time and recurring charges.
           */
          hs_tcv?: string;
          /**
           * Hubspot Owner Id
           * @description ID of the HubSpot user assigned as the deal owner.
           */
          hubspot_owner_id?: string;
          /**
           * Pipeline
           * @description ID or internal name of the sales pipeline this deal belongs to.
           */
          pipeline?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_DEALS tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_DEALS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response, including results for each deal creation attempt.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS_INPUT = {
  /**
   * Inputs
   * @description A list of feedback submission objects to create. Each object defines the properties and associations for a new feedback submission.
   */
  inputs?: {
      /**
       * Associations
       * @description A list of associations to be created for this feedback submission with other CRM objects.
       */
      associations: {
          /**
           * To  Id
           * @description ID of the target CRM object (e.g., Contact, Company, Deal, Ticket) for association.
           */
          to__id?: string;
          /**
           * Types
           * @description A list of association types to be created between the feedback submission and other CRM objects.
           */
          types: {
              /**
               * Association Category
               * @description Category of the association: `HUBSPOT_DEFINED` (standard), `USER_DEFINED` (custom), or `INTEGRATOR_DEFINED` (integration-created). HubSpot-defined are generally recommended.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description ID for the association type, defining the relationship's nature (e.g., feedback submission to contact). Find in HubSpot settings or via associations API.
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Key-value pairs of properties for the feedback submission. Names are case-sensitive. Custom properties use their internal HubSpot name (e.g., `my_custom_property`).
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch creation operation. This typically includes a list of created feedback submissions (often under a 'results' key), status information, and any errors that occurred for specific submissions.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS_INPUT = {
  /**
   * Inputs
   * @description List of line items to create, each with its own properties and associations.
   */
  inputs?: {
      /**
       * Associations
       * @description Associations to create for this line item.
       */
      associations: {
          /**
           * To  Id
           * @description ID of the target object for association.
           */
          to__id?: string;
          /**
           * Types
           * @description Association types to create between this line item and other objects.
           */
          types: {
              /**
               * Association Category
               * @description Category of association: `HUBSPOT_DEFINED` (standard CRM), `USER_DEFINED` (custom), or `INTEGRATOR_DEFINED` (integrations).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description ID of the association type (e.g., `20` for line item to deal).
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Properties (name-value pairs) for the line item. Ensure these property names are predefined in your HubSpot account.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_OBJECTS tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_OBJECTS_INPUT = {
  /**
   * Inputs
   * @description A list of objects to be created in batch. Each item in the list defines the properties and associations for a new object.
   */
  inputs?: {
      /**
       * Associations
       * @description Optional. List of associations to create for this object. If you do not want to associate this object with any others, omit this field or provide an empty list. Example with associations: [{...}]. Example with none: [].
       * @default null
       */
      associations: {
          /**
           * To  Id
           * @description The unique identifier of the existing object to associate with the new object.
           */
          to__id?: string;
          /**
           * Types
           * @description A list defining the types of associations to create.
           */
          types: {
              /**
               * Association Category
               * @description The category of the association, indicating how it was defined.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The unique identifier for the type of association (e.g., contact to company, deal to contact).
               */
              associationTypeId: number;
          }[];
      }[] | null;
      /**
       * Properties
       * @description A dictionary of properties for the object; keys are internal property names, and values are their corresponding string values. Property names must be valid for the specified `objectType`.
       */
      properties: {
          [key: string]: string;
      };
  }[];
  /**
   * Object Type
   * @description The type of CRM object to create in batch (e.g., 'contacts', 'companies', 'deals', 'tickets', 'products', 'line_items', or a custom object ID). Must be a valid HubSpot CRM object type.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_OBJECTS tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch creation. This typically includes a list of the created objects, possibly with their IDs, and any errors encountered for specific objects within the batch.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_PROPERTIES tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_PROPERTIES_INPUT = {
  /**
   * Inputs
   * @description List of definitions for the new properties to be created.
   */
  inputs?: {
      /**
       * Calculation Formula
       * @description HubSpot-specific formula if `fieldType` is 'calculation_equation', to compute the property's value.
       */
      calculationFormula?: string;
      /**
       * Description
       * @description User-friendly description/help text displayed in HubSpot UI.
       */
      description?: string;
      /**
       * Display Order
       * @description Display order within its group in UI (ascending; -1 for last).
       */
      displayOrder?: number;
      /**
       * External Options
       * @description For 'enumeration' type properties, if true, options are sourced externally (e.g., from HubSpot users if `referencedObjectType` is 'OWNER').
       */
      externalOptions?: boolean;
      /**
       * Field Type
       * @description Controls UI rendering, behavior, and input field type for the property.
       * @enum {string}
       */
      fieldType: "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_equation";
      /**
       * Form Field
       * @description If true, property can be used in HubSpot forms.
       */
      formField?: boolean;
      /**
       * Group Name
       * @description Property group name for UI organization.
       */
      groupName: string;
      /**
       * Has Unique Value
       * @description If true, property value must be unique across all object records; unchangeable once set.
       */
      hasUniqueValue?: boolean;
      /**
       * Hidden
       * @description If true, property is hidden and inaccessible in HubSpot UI.
       */
      hidden?: boolean;
      /**
       * Label
       * @description Human-readable label for UI display.
       */
      label: string;
      /**
       * Name
       * @description Internal programmatic name, unique for the object type (lowercase, underscores for spaces); used for API reference.
       */
      name: string;
      /**
       * Options
       * @description Defines pre-set options for an 'enumeration' type property; required if `type` is 'enumeration' and `externalOptions` is false.
       */
      options?: {
          /**
           * Description
           * @description Optional descriptive context for the option.
           */
          description?: string;
          /**
           * Display Order
           * @description Sort order for display in UI (ascending; -1 for last).
           */
          displayOrder: number;
          /**
           * Hidden
           * @description If true, hides the option in the HubSpot UI.
           */
          hidden: boolean;
          /**
           * Label
           * @description Human-readable label for UI display.
           */
          label: string;
          /**
           * Value
           * @description Internal value for API use.
           */
          value: string;
      }[];
      /**
       * Referenced Object Type
       * @description For "enumeration" type with `externalOptions` true, set to "OWNER" to source options from HubSpot users.
       */
      referencedObjectType?: string;
      /**
       * Type
       * @description Specifies the kind of data this property stores.
       * @enum {string}
       */
      type: "string" | "number" | "date" | "datetime" | "enumeration" | "bool";
  }[];
  /**
   * Object Type
   * @description Target HubSpot CRM object type (e.g., 'contacts', 'companies', 'deals', or custom object ID) for property creation.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_PROPERTIES tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description API response, usually a list of created properties with details, or status/error info for batch items.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_QUOTES tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_QUOTES_INPUT = {
  /**
   * Inputs
   * @description A list of quote objects to be created. Each object in the list defines the properties and associations for a new quote.
   */
  inputs?: {
      /**
       * Associations
       * @description A list of associations to be established for this quote, linking it to other CRM objects like contacts, companies, or deals.
       */
      associations: {
          /**
           * To  Id
           * @description The unique identifier of the CRM object to which the current object will be associated (e.g., contact ID, company ID, deal ID).
           */
          to__id?: string;
          /**
           * Types
           * @description A list defining the types of associations to create. Each item specifies the association category and type ID.
           */
          types: {
              /**
               * Association Category
               * @description The category of the association, specifying whether it's HubSpot-defined, user-defined, or integrator-defined.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The unique identifier of the specific association type (e.g., the ID for 'quote to contact' association).
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description A dictionary of properties for the quote. Keys are property internal names (e.g., `hs_title`, `hs_expiration_date`) and values are the corresponding property values.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_QUOTES tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_QUOTES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_TICKET tool input.
 */
type HUBSPOT_CREATE_BATCH_OF_TICKET_INPUT = {
  /**
   * Inputs
   * @description List of ticket creation requests; each item defines one ticket with its properties and associations.
   */
  inputs?: {
      /**
       * Associations
       * @description Associations to create for this ticket, linking to other HubSpot CRM objects (e.g., contacts, companies).
       */
      associations: {
          /**
           * To
           * @description Target object to associate with this ticket, specifying its ID.
           */
          to: {
              /**
               * Id
               * @description Unique ID of the HubSpot object to associate with (e.g., a contact ID, company ID).
               */
              id: string;
          };
          /**
           * Types
           * @description Defines the types of associations, specifying `associationCategory` and `associationTypeId` for each.
           */
          types: {
              /**
               * Association Category
               * @description Category of the association (e.g., `HUBSPOT_DEFINED`, `USER_DEFINED`).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description Unique ID of the association type (e.g., `16` for 'ticket to contact', `26` for 'ticket to company').
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Properties for the new ticket (e.g., `subject`, `hs_pipeline`, `hs_pipeline_stage`); `subject` is often required.
       */
      properties: {
          /**
           * Closed Date
           * @description Date and time ticket was closed (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ss.SSSZ').
           */
          closed_date?: string;
          /**
           * Content
           * @description Main content or description of the ticket, detailing the issue or request.
           */
          content?: string;
          /**
           * Created By
           * @description ID of the user who initially created the ticket.
           */
          created_by?: string;
          /**
           * Createdate
           * @description Date and time ticket was created (ISO 8601 format); HubSpot automatically sets this if not provided.
           */
          createdate?: string;
          /**
           * Custom Properties
           * @description Custom properties for the ticket, using internal names as keys and providing their values (e.g., `{'my_custom_field': 'value'}`).
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * First Agent Reply Date
           * @description Date and time of the first agent reply to this ticket (ISO 8601 format).
           */
          first_agent_reply_date?: string;
          /**
           * Hs All Accessible Team Ids
           * @description All team IDs with access to view or interact with this ticket (typically HubSpot-managed).
           */
          hs_all_accessible_team_ids?: string[];
          /**
           * Hs All Assigned Business Unit Ids
           * @description All business unit IDs associated with this ticket for data partitioning (typically HubSpot-managed).
           */
          hs_all_assigned_business_unit_ids?: string[];
          /**
           * Hs All Associated Contact Companies
           * @description Read-only. Company names linked to contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_companies?: string[];
          /**
           * Hs All Associated Contact Emails
           * @description Read-only. Email addresses of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_emails?: string[];
          /**
           * Hs All Associated Contact Firstnames
           * @description Read-only. First names of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_firstnames?: string[];
          /**
           * Hs All Associated Contact Lastnames
           * @description Read-only. Last names of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_lastnames?: string[];
          /**
           * Hs All Associated Contact Mobilephones
           * @description Read-only. Mobile phone numbers of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_mobilephones?: string[];
          /**
           * Hs All Associated Contact Phones
           * @description Read-only. Phone numbers of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_phones?: string[];
          /**
           * Hs All Conversation Mentions
           * @description Read-only. User IDs or names mentioned in the ticket's conversation thread (HubSpot-populated).
           */
          hs_all_conversation_mentions?: string[];
          /**
           * Hs All Owner Ids
           * @description All HubSpot user IDs who are owners of this ticket, including primary and secondary.
           */
          hs_all_owner_ids?: string[];
          /**
           * Hs All Team Ids
           * @description All team IDs associated with this ticket, including primary and secondary.
           */
          hs_all_team_ids?: string[];
          /**
           * Hs Assigned Team Ids
           * @description Team IDs specifically assigned to work on this ticket.
           */
          hs_assigned_team_ids?: string[];
          /**
           * Hs Assignment Method
           * @description Method used for assigning the ticket.
           */
          hs_assignment_method?: string;
          /**
           * Hs Auto Generated From Thread Id
           * @description ID of the conversation thread if this ticket was automatically generated from it.
           */
          hs_auto_generated_from_thread_id?: string;
          /**
           * Hs Conversations Originating Message Id
           * @description ID of the initial message in the conversation that led to this ticket's creation.
           */
          hs_conversations_originating_message_id?: string;
          /**
           * Hs Conversations Originating Thread Id
           * @description ID of the conversation thread from which this ticket originated.
           */
          hs_conversations_originating_thread_id?: string;
          /**
           * Hs Created By User Id
           * @description HubSpot user ID of the person who created the ticket within the HubSpot system.
           */
          hs_created_by_user_id?: string;
          /**
           * Hs Lastcontacted
           * @description Date and time of the last contact activity related to the ticket (ISO 8601 format).
           */
          hs_lastcontacted?: string;
          /**
           * Hs Lastmodifieddate
           * @description Date and time when the ticket was last modified (ISO 8601 format; HubSpot automatically updates this).
           */
          hs_lastmodifieddate?: string;
          /**
           * Hs Pipeline
           * @description ID of the pipeline this ticket belongs to (uses default pipeline if not provided).
           */
          hs_pipeline?: string;
          /**
           * Hs Pipeline Stage
           * @description ID of the stage within the pipeline this ticket is currently in (required if `hs_pipeline` is set).
           */
          hs_pipeline_stage?: string;
          /**
           * Hs Primary Company
           * @description ID of the primary company associated with this ticket.
           */
          hs_primary_company?: string;
          /**
           * Hs Tag Ids
           * @description Tag IDs applied to the ticket for categorization or filtering.
           */
          hs_tag_ids?: string[];
          /**
           * Hs Ticket Category
           * @description Category of the ticket (values are often custom to your HubSpot setup).
           */
          hs_ticket_category?: string;
          /**
           * Hs Ticket Priority
           * @description Priority level of the ticket.
           */
          hs_ticket_priority?: string;
          /**
           * Hubspot Owner Id
           * @description HubSpot user ID of the owner assigned to this ticket.
           */
          hubspot_owner_id?: string;
          /**
           * Hubspot Team Id
           * @description HubSpot team ID assigned to this ticket.
           */
          hubspot_team_id?: string;
          /**
           * Last Engagement Date
           * @description Date and time of the last engagement activity on the ticket (ISO 8601 format).
           */
          last_engagement_date?: string;
          /**
           * Last Reply Date
           * @description Date and time of the last reply sent or received regarding the ticket (ISO 8601 format).
           */
          last_reply_date?: string;
          /**
           * Notes Last Contacted
           * @description Date and time of the last contact as recorded in notes (ISO 8601 format).
           */
          notes_last_contacted?: string;
          /**
           * Notes Last Updated
           * @description Date and time when notes associated with the ticket were last updated (ISO 8601 format).
           */
          notes_last_updated?: string;
          /**
           * Notes Next Activity Date
           * @description Date and time for the next scheduled activity related to the ticket notes (ISO 8601 format).
           */
          notes_next_activity_date?: string;
          /**
           * Source Type
           * @description Source from which the ticket originated.
           */
          source_type?: string;
          /**
           * Subject
           * @description Subject line or title of the ticket (often a required field for ticket creation).
           */
          subject?: string;
          /**
           * Time To Close
           * @description Duration taken to resolve and close the ticket (usually set by HubSpot upon closing).
           */
          time_to_close?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_BATCH_OF_TICKET tool output.
 */
type HUBSPOT_CREATE_BATCH_OF_TICKET_OUTPUT = {
  /**
   * Data
   * @description Response from the HubSpot API, typically including 'status', 'results' (list of created tickets), 'errors', and timestamps.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_CAMPAIGN tool input.
 */
type HUBSPOT_CREATE_CAMPAIGN_INPUT = {
  /**
   * Name
   * @description Campaign name.
   */
  name?: string;
  /**
   * Type
   * @description Campaign type.
   */
  type?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CAMPAIGN tool output.
 */
type HUBSPOT_CREATE_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CAMPAIGNS tool input.
 */
type HUBSPOT_CREATE_CAMPAIGNS_INPUT = {
  /**
   * Inputs
   * @description List of campaign objects to create.
   */
  inputs?: {
      /**
       * Name
       * @description Campaign name.
       */
      name: string;
      /**
       * Type
       * @description Campaign type.
       */
      type?: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CAMPAIGNS tool output.
 */
type HUBSPOT_CREATE_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_COMPANY tool input.
 */
type HUBSPOT_CREATE_COMPANY_INPUT = {
  /**
   * About Us
   * @description Company description or about us information.
   */
  about_us?: string;
  /**
   * Address
   * @description Company street address.
   */
  address?: string;
  /**
   * Address2
   * @description Additional address information (suite, floor, etc.).
   */
  address2?: string;
  /**
   * Annualrevenue
   * @description Company's annual revenue.
   */
  annualrevenue?: string;
  /**
   * Associations
   * @description List of associations to create with other existing HubSpot objects.
   */
  associations?: {
      /**
       * To  Id
       * @description Id
       */
      to__id?: string;
      /**
       * Types
       * @description Types
       */
      types: {
          /**
           * Association Category
           * @description Associationcategory
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Associationtypeid
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * City
   * @description City where the company is located.
   */
  city?: string;
  /**
   * Country
   * @description Country where the company is located.
   */
  country?: string;
  /**
   * Custom Properties
   * @description Custom properties for the company.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Description
   * @description Brief description of the company.
   */
  description?: string;
  /**
   * Domain
   * @description Company's primary domain name.
   */
  domain?: string;
  /**
   * Founded Year
   * @description Year the company was founded.
   */
  founded_year?: string;
  /**
   * Industry
   * @description Industry the company operates in.
   */
  industry?: string;
  /**
   * Is Public
   * @description Whether the company is publicly traded.
   */
  is_public?: string;
  /**
   * Lifecyclestage
   * @description Current lifecycle stage of the company.
   */
  lifecyclestage?: string;
  /**
   * Name
   * @description Company name.
   */
  name?: string;
  /**
   * Numberofemployees
   * @description Number of employees in the company.
   */
  numberofemployees?: string;
  /**
   * Phone
   * @description Company's primary phone number.
   */
  phone?: string;
  /**
   * State
   * @description State or region where the company is located.
   */
  state?: string;
  /**
   * Timezone
   * @description Company's timezone.
   */
  timezone?: string;
  /**
   * Type
   * @description Type of company.
   */
  type?: string;
  /**
   * Website
   * @description Company's website URL.
   */
  website?: string;
  /**
   * Zip
   * @description Company's postal code.
   */
  zip?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_COMPANY tool output.
 */
type HUBSPOT_CREATE_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_COMPANY_OBJECT tool input.
 */
type HUBSPOT_CREATE_COMPANY_OBJECT_INPUT = {
  /**
   * About Us
   * @description Detailed information about the company.
   */
  about_us?: string;
  /**
   * Address
   * @description The company's street address.
   */
  address?: string;
  /**
   * Address2
   * @description Additional address information.
   */
  address2?: string;
  /**
   * Annualrevenue
   * @description The annual revenue of the company.
   */
  annualrevenue?: string;
  /**
   * Associations
   * @description Associations represent the relationships between objects and activities in the HubSpot CRM.
   */
  associations?: {
      /**
       * To  Id
       * @description Id
       */
      to__id?: string;
      /**
       * Types
       * @description Types
       */
      types: {
          /**
           * Association Category
           * @description Associationcategory
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Associationtypeid
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * City
   * @description The city where the company is located.
   */
  city?: string;
  /**
   * Country
   * @description The country where the company is located.
   */
  country?: string;
  /**
   * Createdate
   * @description The date when the company record was created.
   */
  createdate?: string;
  /**
   * Custom Properties
   * @description Custom properties of the Contact object to be set. For example {`custom_property_1`: `value for custom property 1`, `custom_property_2`: `value for custom property 2`}.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Description
   * @description A brief description of the company.
   */
  description?: string;
  /**
   * Domain
   * @description The company's domain name.
   */
  domain?: string;
  /**
   * Facebook Company Page
   * @description The company's Facebook page URL.
   */
  facebook_company_page?: string;
  /**
   * Founded Year
   * @description The year the company was founded.
   */
  founded_year?: string;
  /**
   * Hs Lastmodifieddate
   * @description The date when the company record was last modified.
   */
  hs_lastmodifieddate?: string;
  /**
   * Hs Lead Status
   * @description The lead status of the company in HubSpot.
   */
  hs_lead_status?: string;
  /**
   * Hs Score
   * @description The HubSpot score of the company.
   */
  hs_score?: string;
  /**
   * Hubspot Owner Id
   * @description The HubSpot owner ID associated with the company.
   */
  hubspot_owner_id?: string;
  /**
   * Industry
   * @description The industry sector of the company.
   */
  industry?: string;
  /**
   * Is Public
   * @description Whether the company is publicly traded.
   */
  is_public?: string;
  /**
   * Lifecyclestage
   * @description The lifecycle stage of the company.
   */
  lifecyclestage?: string;
  /**
   * Linkedin Company Page
   * @description The company's LinkedIn page URL.
   */
  linkedin_company_page?: string;
  /**
   * Name
   * @description The name of the company.
   */
  name?: string;
  /**
   * Notes Last Updated
   * @description The date when the company notes were last updated.
   */
  notes_last_updated?: string;
  /**
   * Numberofemployees
   * @description The number of employees in the company.
   */
  numberofemployees?: string;
  /**
   * Parent Company
   * @description The parent company, if applicable.
   */
  parent_company?: string;
  /**
   * Phone
   * @description The company's phone number.
   */
  phone?: string;
  /**
   * State
   * @description The state or region where the company is located.
   */
  state?: string;
  /**
   * Timezone
   * @description The timezone of the company's primary location.
   */
  timezone?: string;
  /**
   * Twitterhandle
   * @description The company's Twitter handle.
   */
  twitterhandle?: string;
  /**
   * Type
   * @description The type or category of the company.
   */
  type?: string;
  /**
   * Website
   * @description The company's website URL.
   */
  website?: string;
  /**
   * Zip
   * @description The postal or ZIP code of the company.
   */
  zip?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_COMPANY_OBJECT tool output.
 */
type HUBSPOT_CREATE_COMPANY_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CONTACT tool input.
 */
type HUBSPOT_CREATE_CONTACT_INPUT = {
  /**
   * Address
   * @description The contact's street address, including apartment or unit number.
   */
  address?: string;
  /**
   * Annualrevenue
   * @description The annual revenue of the company the contact works for.
   */
  annualrevenue?: string;
  /**
   * Associatedcompanyid
   * @description The ID of the primary company associated with this contact. This is a read-only property automatically updated when an association is made.
   */
  associatedcompanyid?: string;
  /**
   * Associatedcompanylastupdated
   * @description The timestamp of the last update to the primary associated company. This is a read-only property.
   */
  associatedcompanylastupdated?: string;
  /**
   * Associations
   * @description List of associations to create with other existing HubSpot objects (e.g., companies, deals).
   */
  associations?: {
      /**
       * To
       * @description The ID of the object to associate the new contact with. For example, if associating with a company, this would be the company's ID.
       */
      to?: {
          [key: string]: string;
      };
      /**
       * Types
       * @description A list of association types and their categories to be created between the new contact and another object. Each item in the list defines one association.
       */
      types: {
          /**
           * Association Category
           * @description A category of the association. Possible values: `HUBSPOT_DEFINED` - an association type created by HubSpot, `USER_DEFINED` - an association type created by the user, `INTEGRATOR_DEFINED` - an association type created by an integration.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description The ID of the association type. This is a unique identifier for the type of relationship (e.g., Contact to Company).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * City
   * @description The city where the contact resides.
   */
  city?: string;
  /**
   * Closedate
   * @description The date when the deal associated with this contact was closed. Expected format is a UTC timestamp in milliseconds.
   */
  closedate?: string;
  /**
   * Company
   * @description The name of the company the contact works for. If `associatedcompanyid` is set, this field might be auto-populated.
   */
  company?: string;
  /**
   * Company Size
   * @description The size of the company the contact works for, often categorized (e.g., '1-10 employees', '501-1000 employees').
   */
  company_size?: string;
  /**
   * Country
   * @description The country where the contact resides.
   */
  country?: string;
  /**
   * Createdate
   * @description The date and time when the contact record was created in HubSpot. This is a read-only property, typically a UTC timestamp.
   */
  createdate?: string;
  /**
   * Currentlyinworkflow
   * @description Indicates whether the contact is currently active in any HubSpot workflow. Boolean value, 'true' or 'false'.
   */
  currentlyinworkflow?: string;
  /**
   * Custom Properties
   * @description A dictionary of custom properties to set for the contact. Keys are the internal names of your custom contact properties, and values are the data to set. Example: `{'custom_property_internal_name': 'value_for_custom_property'}`.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Date Of Birth
   * @description The contact's date of birth. Format can vary, but YYYY-MM-DD is common.
   */
  date_of_birth?: string;
  /**
   * Days To Close
   * @description The number of days it took to close the deal associated with this contact. This is usually calculated automatically.
   */
  days_to_close?: string;
  /**
   * Degree
   * @description The contact's highest completed educational degree.
   */
  degree?: string;
  /**
   * Email
   * @description The primary email address of the contact. This is a unique identifier for contacts in HubSpot.
   */
  email?: string;
  /**
   * Engagements Last Meeting Booked
   * @description Timestamp of the last meeting booked with the contact through HubSpot's meetings tool.
   */
  engagements_last_meeting_booked?: string;
  /**
   * Engagements Last Meeting Booked Campaign
   * @description The HubSpot campaign ID (GUID) associated with the last meeting booked.
   */
  engagements_last_meeting_booked_campaign?: string;
  /**
   * Engagements Last Meeting Booked Medium
   * @description The medium (e.g., 'Meetings Tool', 'Email') through which the last meeting was booked.
   */
  engagements_last_meeting_booked_medium?: string;
  /**
   * Engagements Last Meeting Booked Source
   * @description The source (e.g., 'SALES', 'MARKETING') of the last meeting booked.
   */
  engagements_last_meeting_booked_source?: string;
  /**
   * Fax
   * @description The contact's fax number.
   */
  fax?: string;
  /**
   * Field Of Study
   * @description The contact's primary field of study during their education.
   */
  field_of_study?: string;
  /**
   * First Conversion Date
   * @description The date and time of the contact's first conversion (e.g., form submission). UTC timestamp.
   */
  first_conversion_date?: string;
  /**
   * First Conversion Event Name
   * @description The name or identifier of the event that marked the contact's first conversion.
   */
  first_conversion_event_name?: string;
  /**
   * First Deal Created Date
   * @description The date and time when the first deal was created for this contact. UTC timestamp.
   */
  first_deal_created_date?: string;
  /**
   * Firstname
   * @description The contact's first name.
   */
  firstname?: string;
  /**
   * Followercount
   * @description The number of followers the contact has on a specified social media platform (e.g., Twitter).
   */
  followercount?: string;
  /**
   * Gender
   * @description The contact's gender.
   */
  gender?: string;
  /**
   * Graduation Date
   * @description The contact's graduation date from their educational institution. Format can vary.
   */
  graduation_date?: string;
  /**
   * Hs Additional Emails
   * @description A semicolon-separated list of additional email addresses for the contact.
   */
  hs_additional_emails?: string;
  /**
   * Hs All Accessible Team Ids
   * @description A semicolon-separated list of HubSpot Team IDs that have access to this contact record.
   */
  hs_all_accessible_team_ids?: string;
  /**
   * Hs All Assigned Business Unit Ids
   * @description A semicolon-separated list of Business Unit IDs assigned to this contact, if using HubSpot's Business Units feature.
   */
  hs_all_assigned_business_unit_ids?: string;
  /**
   * Hs All Contact Vids
   * @description A semicolon-separated list of all HubSpot Contact VID (Visitor ID) values associated with this contact, typically used for merging contacts.
   */
  hs_all_contact_vids?: string;
  /**
   * Hs All Owner Ids
   * @description A semicolon-separated list of all HubSpot Owner IDs who have been assigned to this contact at some point.
   */
  hs_all_owner_ids?: string;
  /**
   * Hs All Team Ids
   * @description A semicolon-separated list of all HubSpot Team IDs this contact is or has been associated with.
   */
  hs_all_team_ids?: string;
  /**
   * Hs Analytics Average Page Views
   * @description The average number of pages viewed by the contact per session on your website, tracked by HubSpot analytics.
   */
  hs_analytics_average_page_views?: string;
  /**
   * Hs Analytics First Referrer
   * @description The first referring URL that brought the contact to your website.
   */
  hs_analytics_first_referrer?: string;
  /**
   * Hs Analytics First Timestamp
   * @description Timestamp of the contact's first recorded interaction (e.g., first website visit). UTC timestamp.
   */
  hs_analytics_first_timestamp?: string;
  /**
   * Hs Analytics First Touch Converting Campaign
   * @description The HubSpot campaign ID (GUID) of the campaign that led to the contact's first conversion.
   */
  hs_analytics_first_touch_converting_campaign?: string;
  /**
   * Hs Analytics First Url
   * @description The first URL on your website that the contact visited.
   */
  hs_analytics_first_url?: string;
  /**
   * Hs Analytics First Visit Timestamp
   * @description Timestamp of the contact's first visit to your website. UTC timestamp.
   */
  hs_analytics_first_visit_timestamp?: string;
  /**
   * Hs Analytics Last Referrer
   * @description The last referring URL that brought the contact to your website before their most recent session.
   */
  hs_analytics_last_referrer?: string;
  /**
   * Hs Analytics Last Timestamp
   * @description Timestamp of the contact's last recorded interaction (e.g., last website visit, form submission). UTC timestamp.
   */
  hs_analytics_last_timestamp?: string;
  /**
   * Hs Analytics Last Touch Converting Campaign
   * @description The HubSpot campaign ID (GUID) of the campaign that led to the contact's most recent conversion.
   */
  hs_analytics_last_touch_converting_campaign?: string;
  /**
   * Hs Analytics Last Url
   * @description The last URL on your website that the contact visited.
   */
  hs_analytics_last_url?: string;
  /**
   * Hs Analytics Last Visit Timestamp
   * @description Timestamp of the contact's most recent visit to your website. UTC timestamp.
   */
  hs_analytics_last_visit_timestamp?: string;
  /**
   * Hs Analytics Num Event Completions
   * @description The total number of HubSpot custom events completed by the contact.
   */
  hs_analytics_num_event_completions?: string;
  /**
   * Hs Analytics Num Page Views
   * @description The total number of pages viewed by the contact on your website.
   */
  hs_analytics_num_page_views?: string;
  /**
   * Hs Analytics Num Visits
   * @description The total number of sessions (visits) the contact has had on your website.
   */
  hs_analytics_num_visits?: string;
  /**
   * Hs Analytics Revenue
   * @description Revenue attributed to this contact through HubSpot's analytics or e-commerce integrations. This is often a sum of closed-won deal amounts associated with the contact.
   */
  hs_analytics_revenue?: string;
  /**
   * Hs Analytics Source
   * @description The original source that generated the contact (e.g., 'Organic Search', 'Paid Social', 'Referrals').
   */
  hs_analytics_source?: string;
  /**
   * Hs Analytics Source Data 1
   * @description Additional detail for the source. For 'Organic search', this might be the search engine. For 'Paid social', this could be the social media platform.
   */
  hs_analytics_source_data_1?: string;
  /**
   * Hs Analytics Source Data 2
   * @description Further detail for the source. For 'Organic search', this might be the keyword. For 'Paid social', this could be the campaign name.
   */
  hs_analytics_source_data_2?: string;
  /**
   * Hubspot Owner Assigneddate
   * @description The date and time when a HubSpot owner was most recently assigned to this contact. UTC timestamp in milliseconds.
   */
  hubspot_owner_assigneddate?: string;
  /**
   * Hubspot Owner Id
   * @description The ID of the HubSpot user who is the current owner of this contact.
   */
  hubspot_owner_id?: string;
  /**
   * Hubspot Team Id
   * @description The ID of the HubSpot team that owns this contact.
   */
  hubspot_team_id?: string;
  /**
   * Hubspotscore
   * @description The contact's HubSpot lead score, calculated based on criteria defined in your HubSpot portal's scoring settings.
   */
  hubspotscore?: string;
  /**
   * Industry
   * @description The primary industry of the company the contact works for.
   */
  industry?: string;
  /**
   * Ip City
   * @description The city associated with the contact's IP address, often captured during their first website visit or form submission.
   */
  ip_city?: string;
  /**
   * Ip Country
   * @description The country associated with the contact's IP address.
   */
  ip_country?: string;
  /**
   * Ip Country Code
   * @description The two-letter country code (ISO 3166-1 alpha-2) associated with the contact's IP address.
   */
  ip_country_code?: string;
  /**
   * Ip Latlon
   * @description The approximate latitude and longitude associated with the contact's IP address, typically in 'latitude,longitude' format.
   */
  ip_latlon?: string;
  /**
   * Ip State
   * @description The state or region associated with the contact's IP address.
   */
  ip_state?: string;
  /**
   * Ip State Code
   * @description The state or region code associated with the contact's IP address (e.g., US state code).
   */
  ip_state_code?: string;
  /**
   * Ip Zipcode
   * @description The postal code or ZIP code associated with the contact's IP address.
   */
  ip_zipcode?: string;
  /**
   * Job Function
   * @description The contact's job function or department.
   */
  job_function?: string;
  /**
   * Jobtitle
   * @description The contact's job title.
   */
  jobtitle?: string;
  /**
   * Kloutscoregeneral
   * @description The contact's general Klout score, if available and integrated. Klout was a service that rated social media influence.
   */
  kloutscoregeneral?: string;
  /**
   * Lastmodifieddate
   * @description The date and time when the contact record was last modified. This is a read-only property, UTC timestamp.
   */
  lastmodifieddate?: string;
  /**
   * Lastname
   * @description The contact's last name.
   */
  lastname?: string;
  /**
   * Lifecyclestage
   * @description The contact's current stage in your sales and marketing funnel (e.g., 'Lead', 'Marketing Qualified Lead', 'Customer'). These stages are customizable in HubSpot.
   */
  lifecyclestage?: string;
  /**
   * Linkedinbio
   * @description The contact's biography from their LinkedIn profile.
   */
  linkedinbio?: string;
  /**
   * Linkedinconnections
   * @description The number of LinkedIn connections the contact has.
   */
  linkedinconnections?: string;
  /**
   * Marital Status
   * @description The contact's marital status.
   */
  marital_status?: string;
  /**
   * Message
   * @description A free-text message or note often captured from a form submission's message field.
   */
  message?: string;
  /**
   * Military Status
   * @description The contact's military status.
   */
  military_status?: string;
  /**
   * Mobilephone
   * @description The contact's mobile phone number.
   */
  mobilephone?: string;
  /**
   * Notes Last Contacted
   * @description The date and time the contact was last contacted, based on logged activities like calls, emails, or meetings. UTC timestamp in milliseconds.
   */
  notes_last_contacted?: string;
  /**
   * Notes Last Updated
   * @description The date and time when the notes on the contact record were last updated. UTC timestamp in milliseconds.
   */
  notes_last_updated?: string;
  /**
   * Notes Next Activity Date
   * @description The date and time of the next scheduled activity (e.g., task, meeting) with the contact. UTC timestamp in milliseconds.
   */
  notes_next_activity_date?: string;
  /**
   * Num Associated Deals
   * @description The total number of deals currently associated with this contact.
   */
  num_associated_deals?: string;
  /**
   * Num Contacted Notes
   * @description The number of notes on the contact record that relate to being contacted (e.g., call logs, meeting notes).
   */
  num_contacted_notes?: string;
  /**
   * Num Conversion Events
   * @description The total number of conversion events (e.g., form submissions, CTA clicks) attributed to this contact.
   */
  num_conversion_events?: string;
  /**
   * Num Notes
   * @description The total number of notes logged on the contact's record.
   */
  num_notes?: string;
  /**
   * Num Unique Conversion Events
   * @description The number of unique types of conversion events completed by the contact.
   */
  num_unique_conversion_events?: string;
  /**
   * Numemployees
   * @description The number of employees at the company the contact works for. This may differ from 'company_size' if manually entered or from a different source.
   */
  numemployees?: string;
  /**
   * Owneremail
   * @description The email address of the HubSpot user who owns this contact. Read-only, reflects the owner's primary email.
   */
  owneremail?: string;
  /**
   * Ownername
   * @description The full name of the HubSpot user who owns this contact. Read-only.
   */
  ownername?: string;
  /**
   * Phone
   * @description The contact's primary phone number (often a business phone).
   */
  phone?: string;
  /**
   * Photo
   * @description URL of the contact's photo or avatar.
   */
  photo?: string;
  /**
   * Recent Conversion Date
   * @description The date and time of the contact's most recent conversion event. UTC timestamp.
   */
  recent_conversion_date?: string;
  /**
   * Recent Conversion Event Name
   * @description The name or identifier of the contact's most recent conversion event.
   */
  recent_conversion_event_name?: string;
  /**
   * Recent Deal Amount
   * @description The amount of the most recent closed-won deal associated with this contact.
   */
  recent_deal_amount?: string;
  /**
   * Recent Deal Close Date
   * @description The close date of the most recent closed-won deal associated with this contact. UTC timestamp in milliseconds.
   */
  recent_deal_close_date?: string;
  /**
   * Relationship Status
   * @description The contact's self-reported relationship status.
   */
  relationship_status?: string;
  /**
   * Salutation
   * @description The salutation for the contact (e.g., 'Mr.', 'Ms.', 'Dr.').
   */
  salutation?: string;
  /**
   * School
   * @description The name of the school, college, or university the contact attended.
   */
  school?: string;
  /**
   * Seniority
   * @description The contact's seniority level within their organization.
   */
  seniority?: string;
  /**
   * Start Date
   * @description The contact's start date, typically referring to their employment start date at their current company. Format can vary.
   */
  start_date?: string;
  /**
   * State
   * @description The state or region where the contact resides.
   */
  state?: string;
  /**
   * Surveymonkeyeventlastupdated
   * @description Timestamp of the last update related to a SurveyMonkey event for this contact, if integrated. UTC timestamp.
   */
  surveymonkeyeventlastupdated?: string;
  /**
   * Total Revenue
   * @description The total revenue generated from all closed-won deals associated with this contact.
   */
  total_revenue?: string;
  /**
   * Twitterbio
   * @description The contact's biography from their Twitter profile.
   */
  twitterbio?: string;
  /**
   * Twitterhandle
   * @description The contact's Twitter username (handle), without the '@' symbol.
   */
  twitterhandle?: string;
  /**
   * Twitterprofilephoto
   * @description URL of the contact's Twitter profile photo.
   */
  twitterprofilephoto?: string;
  /**
   * Webinareventlastupdated
   * @description Timestamp of the last update related to a webinar event (e.g., GoToWebinar) for this contact, if integrated. UTC timestamp.
   */
  webinareventlastupdated?: string;
  /**
   * Website
   * @description The URL of the contact's personal or company website.
   */
  website?: string;
  /**
   * Work Email
   * @description The contact's work email address. This might be different from the primary `email` if that's a personal address.
   */
  work_email?: string;
  /**
   * Zip
   * @description The contact's postal code or ZIP code.
   */
  zip?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CONTACT tool output.
 */
type HUBSPOT_CREATE_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES tool input.
 */
type HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES_INPUT = {
  /**
   * Address
   * @description The contact's street address, including apartment or unit number.
   */
  address?: string;
  /**
   * Annualrevenue
   * @description The annual revenue of the company the contact works for.
   */
  annualrevenue?: string;
  /**
   * Associatedcompanyid
   * @description The ID of the primary company associated with this contact. This is a read-only property automatically updated when an association is made.
   */
  associatedcompanyid?: string;
  /**
   * Associatedcompanylastupdated
   * @description The timestamp of the last update to the primary associated company. This is a read-only property.
   */
  associatedcompanylastupdated?: string;
  /**
   * Associations
   * @description List of associations to create with other existing HubSpot objects (e.g., companies, deals).
   */
  associations?: {
      /**
       * To
       * @description The ID of the object to associate the new contact with. For example, if associating with a company, this would be the company's ID.
       */
      to?: {
          [key: string]: string;
      };
      /**
       * Types
       * @description A list of association types and their categories to be created between the new contact and another object. Each item in the list defines one association.
       */
      types: {
          /**
           * Association Category
           * @description A category of the association. Possible values: `HUBSPOT_DEFINED` - an association type created by HubSpot, `USER_DEFINED` - an association type created by the user, `INTEGRATOR_DEFINED` - an association type created by an integration.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description The ID of the association type. This is a unique identifier for the type of relationship (e.g., Contact to Company).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * City
   * @description The city where the contact resides.
   */
  city?: string;
  /**
   * Closedate
   * @description The date when the deal associated with this contact was closed. Expected format is a UTC timestamp in milliseconds.
   */
  closedate?: string;
  /**
   * Company
   * @description The name of the company the contact works for. If `associatedcompanyid` is set, this field might be auto-populated.
   */
  company?: string;
  /**
   * Company Size
   * @description The size of the company the contact works for, often categorized (e.g., '1-10 employees', '501-1000 employees').
   */
  company_size?: string;
  /**
   * Country
   * @description The country where the contact resides.
   */
  country?: string;
  /**
   * Createdate
   * @description The date and time when the contact record was created in HubSpot. This is a read-only property, typically a UTC timestamp.
   */
  createdate?: string;
  /**
   * Currentlyinworkflow
   * @description Indicates whether the contact is currently active in any HubSpot workflow. Boolean value, 'true' or 'false'.
   */
  currentlyinworkflow?: string;
  /**
   * Custom Properties
   * @description A dictionary of custom properties to set for the contact. Keys are the internal names of your custom contact properties, and values are the data to set. Example: `{'custom_property_internal_name': 'value_for_custom_property'}`.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Date Of Birth
   * @description The contact's date of birth. Format can vary, but YYYY-MM-DD is common.
   */
  date_of_birth?: string;
  /**
   * Days To Close
   * @description The number of days it took to close the deal associated with this contact. This is usually calculated automatically.
   */
  days_to_close?: string;
  /**
   * Degree
   * @description The contact's highest completed educational degree.
   */
  degree?: string;
  /**
   * Email
   * @description The primary email address of the contact. This is a unique identifier for contacts in HubSpot.
   */
  email?: string;
  /**
   * Engagements Last Meeting Booked
   * @description Timestamp of the last meeting booked with the contact through HubSpot's meetings tool.
   */
  engagements_last_meeting_booked?: string;
  /**
   * Engagements Last Meeting Booked Campaign
   * @description The HubSpot campaign ID (GUID) associated with the last meeting booked.
   */
  engagements_last_meeting_booked_campaign?: string;
  /**
   * Engagements Last Meeting Booked Medium
   * @description The medium (e.g., 'Meetings Tool', 'Email') through which the last meeting was booked.
   */
  engagements_last_meeting_booked_medium?: string;
  /**
   * Engagements Last Meeting Booked Source
   * @description The source (e.g., 'SALES', 'MARKETING') of the last meeting booked.
   */
  engagements_last_meeting_booked_source?: string;
  /**
   * Fax
   * @description The contact's fax number.
   */
  fax?: string;
  /**
   * Field Of Study
   * @description The contact's primary field of study during their education.
   */
  field_of_study?: string;
  /**
   * First Conversion Date
   * @description The date and time of the contact's first conversion (e.g., form submission). UTC timestamp.
   */
  first_conversion_date?: string;
  /**
   * First Conversion Event Name
   * @description The name or identifier of the event that marked the contact's first conversion.
   */
  first_conversion_event_name?: string;
  /**
   * First Deal Created Date
   * @description The date and time when the first deal was created for this contact. UTC timestamp.
   */
  first_deal_created_date?: string;
  /**
   * Firstname
   * @description The contact's first name.
   */
  firstname?: string;
  /**
   * Followercount
   * @description The number of followers the contact has on a specified social media platform (e.g., Twitter).
   */
  followercount?: string;
  /**
   * Gender
   * @description The contact's gender.
   */
  gender?: string;
  /**
   * Graduation Date
   * @description The contact's graduation date from their educational institution. Format can vary.
   */
  graduation_date?: string;
  /**
   * Hs Additional Emails
   * @description A semicolon-separated list of additional email addresses for the contact.
   */
  hs_additional_emails?: string;
  /**
   * Hs All Accessible Team Ids
   * @description A semicolon-separated list of HubSpot Team IDs that have access to this contact record.
   */
  hs_all_accessible_team_ids?: string;
  /**
   * Hs All Assigned Business Unit Ids
   * @description A semicolon-separated list of Business Unit IDs assigned to this contact, if using HubSpot's Business Units feature.
   */
  hs_all_assigned_business_unit_ids?: string;
  /**
   * Hs All Contact Vids
   * @description A semicolon-separated list of all HubSpot Contact VID (Visitor ID) values associated with this contact, typically used for merging contacts.
   */
  hs_all_contact_vids?: string;
  /**
   * Hs All Owner Ids
   * @description A semicolon-separated list of all HubSpot Owner IDs who have been assigned to this contact at some point.
   */
  hs_all_owner_ids?: string;
  /**
   * Hs All Team Ids
   * @description A semicolon-separated list of all HubSpot Team IDs this contact is or has been associated with.
   */
  hs_all_team_ids?: string;
  /**
   * Hs Analytics Average Page Views
   * @description The average number of pages viewed by the contact per session on your website, tracked by HubSpot analytics.
   */
  hs_analytics_average_page_views?: string;
  /**
   * Hs Analytics First Referrer
   * @description The first referring URL that brought the contact to your website.
   */
  hs_analytics_first_referrer?: string;
  /**
   * Hs Analytics First Timestamp
   * @description Timestamp of the contact's first recorded interaction (e.g., first website visit). UTC timestamp.
   */
  hs_analytics_first_timestamp?: string;
  /**
   * Hs Analytics First Touch Converting Campaign
   * @description The HubSpot campaign ID (GUID) of the campaign that led to the contact's first conversion.
   */
  hs_analytics_first_touch_converting_campaign?: string;
  /**
   * Hs Analytics First Url
   * @description The first URL on your website that the contact visited.
   */
  hs_analytics_first_url?: string;
  /**
   * Hs Analytics First Visit Timestamp
   * @description Timestamp of the contact's first visit to your website. UTC timestamp.
   */
  hs_analytics_first_visit_timestamp?: string;
  /**
   * Hs Analytics Last Referrer
   * @description The last referring URL that brought the contact to your website before their most recent session.
   */
  hs_analytics_last_referrer?: string;
  /**
   * Hs Analytics Last Timestamp
   * @description Timestamp of the contact's last recorded interaction (e.g., last website visit, form submission). UTC timestamp.
   */
  hs_analytics_last_timestamp?: string;
  /**
   * Hs Analytics Last Touch Converting Campaign
   * @description The HubSpot campaign ID (GUID) of the campaign that led to the contact's most recent conversion.
   */
  hs_analytics_last_touch_converting_campaign?: string;
  /**
   * Hs Analytics Last Url
   * @description The last URL on your website that the contact visited.
   */
  hs_analytics_last_url?: string;
  /**
   * Hs Analytics Last Visit Timestamp
   * @description Timestamp of the contact's most recent visit to your website. UTC timestamp.
   */
  hs_analytics_last_visit_timestamp?: string;
  /**
   * Hs Analytics Num Event Completions
   * @description The total number of HubSpot custom events completed by the contact.
   */
  hs_analytics_num_event_completions?: string;
  /**
   * Hs Analytics Num Page Views
   * @description The total number of pages viewed by the contact on your website.
   */
  hs_analytics_num_page_views?: string;
  /**
   * Hs Analytics Num Visits
   * @description The total number of sessions (visits) the contact has had on your website.
   */
  hs_analytics_num_visits?: string;
  /**
   * Hs Analytics Revenue
   * @description Revenue attributed to this contact through HubSpot's analytics or e-commerce integrations. This is often a sum of closed-won deal amounts associated with the contact.
   */
  hs_analytics_revenue?: string;
  /**
   * Hs Analytics Source
   * @description The original source that generated the contact (e.g., 'Organic Search', 'Paid Social', 'Referrals').
   */
  hs_analytics_source?: string;
  /**
   * Hs Analytics Source Data 1
   * @description Additional detail for the source. For 'Organic search', this might be the search engine. For 'Paid social', this could be the social media platform.
   */
  hs_analytics_source_data_1?: string;
  /**
   * Hs Analytics Source Data 2
   * @description Further detail for the source. For 'Organic search', this might be the keyword. For 'Paid social', this could be the campaign name.
   */
  hs_analytics_source_data_2?: string;
  /**
   * Hubspot Owner Assigneddate
   * @description The date and time when a HubSpot owner was most recently assigned to this contact. UTC timestamp in milliseconds.
   */
  hubspot_owner_assigneddate?: string;
  /**
   * Hubspot Owner Id
   * @description The ID of the HubSpot user who is the current owner of this contact.
   */
  hubspot_owner_id?: string;
  /**
   * Hubspot Team Id
   * @description The ID of the HubSpot team that owns this contact.
   */
  hubspot_team_id?: string;
  /**
   * Hubspotscore
   * @description The contact's HubSpot lead score, calculated based on criteria defined in your HubSpot portal's scoring settings.
   */
  hubspotscore?: string;
  /**
   * Industry
   * @description The primary industry of the company the contact works for.
   */
  industry?: string;
  /**
   * Ip City
   * @description The city associated with the contact's IP address, often captured during their first website visit or form submission.
   */
  ip_city?: string;
  /**
   * Ip Country
   * @description The country associated with the contact's IP address.
   */
  ip_country?: string;
  /**
   * Ip Country Code
   * @description The two-letter country code (ISO 3166-1 alpha-2) associated with the contact's IP address.
   */
  ip_country_code?: string;
  /**
   * Ip Latlon
   * @description The approximate latitude and longitude associated with the contact's IP address, typically in 'latitude,longitude' format.
   */
  ip_latlon?: string;
  /**
   * Ip State
   * @description The state or region associated with the contact's IP address.
   */
  ip_state?: string;
  /**
   * Ip State Code
   * @description The state or region code associated with the contact's IP address (e.g., US state code).
   */
  ip_state_code?: string;
  /**
   * Ip Zipcode
   * @description The postal code or ZIP code associated with the contact's IP address.
   */
  ip_zipcode?: string;
  /**
   * Job Function
   * @description The contact's job function or department.
   */
  job_function?: string;
  /**
   * Jobtitle
   * @description The contact's job title.
   */
  jobtitle?: string;
  /**
   * Kloutscoregeneral
   * @description The contact's general Klout score, if available and integrated. Klout was a service that rated social media influence.
   */
  kloutscoregeneral?: string;
  /**
   * Lastmodifieddate
   * @description The date and time when the contact record was last modified. This is a read-only property, UTC timestamp.
   */
  lastmodifieddate?: string;
  /**
   * Lastname
   * @description The contact's last name.
   */
  lastname?: string;
  /**
   * Lifecyclestage
   * @description The contact's current stage in your sales and marketing funnel (e.g., 'Lead', 'Marketing Qualified Lead', 'Customer'). These stages are customizable in HubSpot.
   */
  lifecyclestage?: string;
  /**
   * Linkedinbio
   * @description The contact's biography from their LinkedIn profile.
   */
  linkedinbio?: string;
  /**
   * Linkedinconnections
   * @description The number of LinkedIn connections the contact has.
   */
  linkedinconnections?: string;
  /**
   * Marital Status
   * @description The contact's marital status.
   */
  marital_status?: string;
  /**
   * Message
   * @description A free-text message or note often captured from a form submission's message field.
   */
  message?: string;
  /**
   * Military Status
   * @description The contact's military status.
   */
  military_status?: string;
  /**
   * Mobilephone
   * @description The contact's mobile phone number.
   */
  mobilephone?: string;
  /**
   * Notes Last Contacted
   * @description The date and time the contact was last contacted, based on logged activities like calls, emails, or meetings. UTC timestamp in milliseconds.
   */
  notes_last_contacted?: string;
  /**
   * Notes Last Updated
   * @description The date and time when the notes on the contact record were last updated. UTC timestamp in milliseconds.
   */
  notes_last_updated?: string;
  /**
   * Notes Next Activity Date
   * @description The date and time of the next scheduled activity (e.g., task, meeting) with the contact. UTC timestamp in milliseconds.
   */
  notes_next_activity_date?: string;
  /**
   * Num Associated Deals
   * @description The total number of deals currently associated with this contact.
   */
  num_associated_deals?: string;
  /**
   * Num Contacted Notes
   * @description The number of notes on the contact record that relate to being contacted (e.g., call logs, meeting notes).
   */
  num_contacted_notes?: string;
  /**
   * Num Conversion Events
   * @description The total number of conversion events (e.g., form submissions, CTA clicks) attributed to this contact.
   */
  num_conversion_events?: string;
  /**
   * Num Notes
   * @description The total number of notes logged on the contact's record.
   */
  num_notes?: string;
  /**
   * Num Unique Conversion Events
   * @description The number of unique types of conversion events completed by the contact.
   */
  num_unique_conversion_events?: string;
  /**
   * Numemployees
   * @description The number of employees at the company the contact works for. This may differ from 'company_size' if manually entered or from a different source.
   */
  numemployees?: string;
  /**
   * Owneremail
   * @description The email address of the HubSpot user who owns this contact. Read-only, reflects the owner's primary email.
   */
  owneremail?: string;
  /**
   * Ownername
   * @description The full name of the HubSpot user who owns this contact. Read-only.
   */
  ownername?: string;
  /**
   * Phone
   * @description The contact's primary phone number (often a business phone).
   */
  phone?: string;
  /**
   * Photo
   * @description URL of the contact's photo or avatar.
   */
  photo?: string;
  /**
   * Recent Conversion Date
   * @description The date and time of the contact's most recent conversion event. UTC timestamp.
   */
  recent_conversion_date?: string;
  /**
   * Recent Conversion Event Name
   * @description The name or identifier of the contact's most recent conversion event.
   */
  recent_conversion_event_name?: string;
  /**
   * Recent Deal Amount
   * @description The amount of the most recent closed-won deal associated with this contact.
   */
  recent_deal_amount?: string;
  /**
   * Recent Deal Close Date
   * @description The close date of the most recent closed-won deal associated with this contact. UTC timestamp in milliseconds.
   */
  recent_deal_close_date?: string;
  /**
   * Relationship Status
   * @description The contact's self-reported relationship status.
   */
  relationship_status?: string;
  /**
   * Salutation
   * @description The salutation for the contact (e.g., 'Mr.', 'Ms.', 'Dr.').
   */
  salutation?: string;
  /**
   * School
   * @description The name of the school, college, or university the contact attended.
   */
  school?: string;
  /**
   * Seniority
   * @description The contact's seniority level within their organization.
   */
  seniority?: string;
  /**
   * Start Date
   * @description The contact's start date, typically referring to their employment start date at their current company. Format can vary.
   */
  start_date?: string;
  /**
   * State
   * @description The state or region where the contact resides.
   */
  state?: string;
  /**
   * Surveymonkeyeventlastupdated
   * @description Timestamp of the last update related to a SurveyMonkey event for this contact, if integrated. UTC timestamp.
   */
  surveymonkeyeventlastupdated?: string;
  /**
   * Total Revenue
   * @description The total revenue generated from all closed-won deals associated with this contact.
   */
  total_revenue?: string;
  /**
   * Twitterbio
   * @description The contact's biography from their Twitter profile.
   */
  twitterbio?: string;
  /**
   * Twitterhandle
   * @description The contact's Twitter username (handle), without the '@' symbol.
   */
  twitterhandle?: string;
  /**
   * Twitterprofilephoto
   * @description URL of the contact's Twitter profile photo.
   */
  twitterprofilephoto?: string;
  /**
   * Webinareventlastupdated
   * @description Timestamp of the last update related to a webinar event (e.g., GoToWebinar) for this contact, if integrated. UTC timestamp.
   */
  webinareventlastupdated?: string;
  /**
   * Website
   * @description The URL of the contact's personal or company website.
   */
  website?: string;
  /**
   * Work Email
   * @description The contact's work email address. This might be different from the primary `email` if that's a personal address.
   */
  work_email?: string;
  /**
   * Zip
   * @description The contact's postal code or ZIP code.
   */
  zip?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES tool output.
 */
type HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES tool input.
 */
type HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES_INPUT = {
  /**
   * Associations
   * @description List of associations to create between the new object and existing CRM objects, using `to_id` and `types`.
   */
  associations?: {
      /**
       * To  Id
       * @description Unique ID of the existing CRM object to associate with the new object.
       */
      to__id?: string;
      /**
       * Types
       * @description List defining association types, each specifying `associationCategory` and `associationTypeId`.
       */
      types: {
          /**
           * Association Category
           * @description Category of the association type (HubSpot-defined, user-defined, or integrator-defined).
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique ID for the association type (e.g., contact to company); obtain from HubSpot settings or the association types API.
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Object Type
   * @description Type of CRM object to create (e.g., 'contacts', 'companies', 'deals', or custom object schema ID like 'p12345678').
   */
  objectType?: string;
  /**
   * Properties
   * @description Key-value pairs for the object's properties. Keys must be internal HubSpot property names valid for the `objectType` (e.g., 'email', 'firstname'), and values are the data to set.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES tool output.
 */
type HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Dictionary with properties and data of the created CRM object, including its unique ID and timestamps.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_DEAL tool input.
 */
type HUBSPOT_CREATE_DEAL_INPUT = {
  /**
   * Amount
   * @description Total monetary value of the deal.
   */
  amount?: string;
  /**
   * Amount In Home Currency
   * @description Deal's value in company's home currency (read-only, HubSpot-calculated).
   */
  amount_in_home_currency?: string;
  /**
   * Associations
   * @description Associations to create between the new deal and other CRM objects (e.g., contact, company).
   */
  associations?: {
      /**
       * To  Id
       * @description ID of the CRM object (e.g., contact, company) to associate with.
       */
      to__id?: string;
      /**
       * Types
       * @description List of association types to be created, each defining category and type ID.
       */
      types: {
          /**
           * Association Category
           * @description A categorization of the association type. The available categories are `HUBSPOT_DEFINED`, `USER_DEFINED`, and `INTEGRATOR_DEFINED`.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique ID of the association type, specifying the relationship nature (e.g., deal-contact).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Closed Lost Reason
   * @description Reason why the deal was lost.
   */
  closed_lost_reason?: string;
  /**
   * Closed Won Reason
   * @description Reason why the deal was won.
   */
  closed_won_reason?: string;
  /**
   * Closedate
   * @description Date (YYYY-MM-DD) or datetime (ISO 8601) when the deal closed or is expected to close.
   */
  closedate?: string;
  /**
   * Createdate
   * @description Date/time deal was created (read-only, HubSpot-set).
   */
  createdate?: string;
  /**
   * Custom Properties
   * @description Custom properties for the deal. Keys are internal property names, values are the values to set. E.g., `{'internal_name_1': 'value1'}`.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Days To Close
   * @description Days between creation and close (read-only, HubSpot-calculated).
   */
  days_to_close?: string;
  /**
   * Deal Currency Code
   * @description Currency code (e.g., USD) for deal amount; defaults to company's home currency.
   */
  deal_currency_code?: string;
  /**
   * Dealname
   * @description Descriptive name or title of the deal.
   */
  dealname?: string;
  /**
   * Dealstage
   * @description ID of the deal's current stage in its pipeline.
   */
  dealstage?: string;
  /**
   * Dealtype
   * @description Type of deal (e.g., 'newbusiness', 'existingbusiness').
   */
  dealtype?: string;
  /**
   * Description
   * @description Detailed text description of the deal.
   */
  description?: string;
  /**
   * Engagements Last Meeting Booked
   * @description Date/time of last booked meeting for this deal (typically read-only).
   */
  engagements_last_meeting_booked?: string;
  /**
   * Engagements Last Meeting Booked Campaign
   * @description Campaign ID for the last booked meeting (typically read-only).
   */
  engagements_last_meeting_booked_campaign?: string;
  /**
   * Engagements Last Meeting Booked Medium
   * @description Medium (e.g., 'Meetings') of last booked meeting (typically read-only).
   */
  engagements_last_meeting_booked_medium?: string;
  /**
   * Engagements Last Meeting Booked Source
   * @description Source (e.g., 'Calendar') of last booked meeting (typically read-only).
   */
  engagements_last_meeting_booked_source?: string;
  /**
   * Hs Acv
   * @description Annual Contract Value (ACV) (HubSpot-calculated).
   */
  hs_acv?: string;
  /**
   * Hs All Accessible Team Ids
   * @description Semicolon-separated list of team IDs with access (typically read-only).
   */
  hs_all_accessible_team_ids?: string;
  /**
   * Hs All Assigned Business Unit Ids
   * @description Semicolon-separated list of assigned business unit IDs (for Business Units add-on).
   */
  hs_all_assigned_business_unit_ids?: string;
  /**
   * Hs All Owner Ids
   * @description Semicolon-separated list of all owner IDs (primary, co-owners).
   */
  hs_all_owner_ids?: string;
  /**
   * Hs All Team Ids
   * @description Semicolon-separated list of all associated team IDs (owner's primary, additional teams; typically read-only).
   */
  hs_all_team_ids?: string;
  /**
   * Hs Analytics Source
   * @description Original deal source per HubSpot analytics (e.g., 'Organic Search'; typically read-only).
   */
  hs_analytics_source?: string;
  /**
   * Hs Arr
   * @description Annual Recurring Revenue (ARR) (HubSpot-calculated).
   */
  hs_arr?: string;
  /**
   * Hs Campaign
   * @description GUID of the HubSpot campaign that generated this deal.
   */
  hs_campaign?: string;
  /**
   * Hs Closed Amount
   * @description Actual amount when deal closed (HubSpot-calculated).
   */
  hs_closed_amount?: string;
  /**
   * Hs Closed Amount In Home Currency
   * @description Closed amount in home currency (HubSpot-calculated).
   */
  hs_closed_amount_in_home_currency?: string;
  /**
   * Hs Createdate
   * @description Specific date/time deal record created (ISO 8601, read-only, HubSpot-set).
   */
  hs_createdate?: string;
  /**
   * Hs Deal Stage Probability
   * @description Win probability (decimal, e.g., 0.5) based on current stage; typically stage-defined.
   */
  hs_deal_stage_probability?: string;
  /**
   * Hs Forecast Amount
   * @description Forecasted amount ('Amount' * 'hs_deal_stage_probability'; HubSpot-calculated).
   */
  hs_forecast_amount?: string;
  /**
   * Hs Forecast Probability
   * @description Sales forecasting probability; may differ from 'hs_deal_stage_probability'.
   */
  hs_forecast_probability?: string;
  /**
   * Hs Is Closed
   * @description Indicates if deal is closed ('true'/'false'; read-only, from deal stage properties).
   */
  hs_is_closed?: string;
  /**
   * Hs Lastmodifieddate
   * @description Date/time deal last modified (ISO 8601, read-only, HubSpot-updated).
   */
  hs_lastmodifieddate?: string;
  /**
   * Hs Mrr
   * @description Monthly Recurring Revenue (MRR) (HubSpot-calculated).
   */
  hs_mrr?: string;
  /**
   * Hs Next Step
   * @description Next planned step for this deal.
   */
  hs_next_step?: string;
  /**
   * Hs Object Id
   * @description Unique ID of the deal object (read-only, HubSpot-assigned).
   */
  hs_object_id?: string;
  /**
   * Hs Priority
   * @description Priority level (e.g., 'high', 'medium', 'low').
   */
  hs_priority?: string;
  /**
   * Hs Projected Amount
   * @description Projected deal amount (manually set or calculated).
   */
  hs_projected_amount?: string;
  /**
   * Hs Projected Amount In Home Currency
   * @description Projected amount in home currency (HubSpot-calculated).
   */
  hs_projected_amount_in_home_currency?: string;
  /**
   * Hs Tcv
   * @description Total Contract Value (TCV) (HubSpot-calculated).
   */
  hs_tcv?: string;
  /**
   * Hubspot Owner Id
   * @description ID of the HubSpot user owning the deal; may be auto-assigned if unspecified.
   */
  hubspot_owner_id?: string;
  /**
   * Pipeline
   * @description ID of the sales pipeline for this deal (required).
   */
  pipeline?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_DEAL tool output.
 */
type HUBSPOT_CREATE_DEAL_OUTPUT = {
  /**
   * Data
   * @description Dictionary with properties and details of the new deal, including standard and custom properties.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_EMAIL tool input.
 */
type HUBSPOT_CREATE_EMAIL_INPUT = {
  /**
   * Properties
   * @description Email properties to set. Keys are HubSpot internal property names.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_EMAIL tool output.
 */
type HUBSPOT_CREATE_EMAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_EMAILS tool input.
 */
type HUBSPOT_CREATE_EMAILS_INPUT = {
  /**
   * Inputs
   * @description List of email objects to create.
   */
  inputs?: {
      /**
       * Properties
       * @description Email properties to set. Keys are HubSpot internal property names.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_EMAILS tool output.
 */
type HUBSPOT_CREATE_EMAILS_OUTPUT = {
  /**
   * Data
   * @description API response with operation status and results.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP tool input.
 */
type HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the target HubSpot app.
   */
  appId?: number;
  /**
   * Detail Template
   * @description Optional Markdown string with Handlebars templating for rendering HTML for expanded event details on the CRM timeline, using tokens for event-specific data.
   */
  detailTemplate?: string;
  /**
   * Header Template
   * @description Optional Markdown string with Handlebars templating for rendering HTML for the event header on the CRM timeline, using tokens for event-specific data.
   */
  headerTemplate?: string;
  /**
   * Name
   * @description The name of the event template, unique for the app and object type.
   */
  name?: string;
  /**
   * Object Type
   * @description The CRM object type this event template is associated with (e.g., 'contacts', 'companies').
   */
  objectType?: string;
  /**
   * Tokens
   * @description Defines custom properties (tokens) for the event, which can populate CRM object properties if a token's `objectPropertyName` is set.
   */
  tokens?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO 8601 timestamp of token creation; null if template created before February 18th, 2020.
       */
      createdAt?: string;
      /**
       * Label
       * @description Human-readable label for the token, used for list segmentation and reporting.
       */
      label: string;
      /**
       * Name
       * @description Internal name of the token, unique for the event template. Allows alphanumeric characters, periods, dashes, or underscores.
       */
      name: string;
      /**
       * Object Property Name
       * @description Name of the corresponding CRM object property. If set, this token populates the CRM property, enabling CRM object creation/updates via Timeline API.
       */
      objectPropertyName?: string;
      /**
       * Options
       * @description List of selectable options if token `type` is 'enumeration'.
       */
      options?: {
          /**
           * Label
           * @description The human-readable label for the option shown in the UI.
           */
          label: string;
          /**
           * Value
           * @description The internal value stored for the option.
           */
          value: string;
      }[];
      /**
       * Type
       * @description Data type of the token.
       * @enum {string}
       */
      type: "date" | "enumeration" | "number" | "string";
      /**
       * Updated At
       * Format: date-time
       * @description ISO 8601 timestamp of last token update; null if template created before February 18th, 2020.
       */
      updatedAt?: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP tool output.
 */
type HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP_OUTPUT = {
  /**
   * Data
   * @description Full details of the newly created event template.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_FEEDBACK_SUBMISSION tool input.
 */
type HUBSPOT_CREATE_FEEDBACK_SUBMISSION_INPUT = {
  /**
   * Associations
   * @description Associations between this feedback submission and other CRM objects, specifying target object ID and association types.
   */
  associations?: {
      /**
       * To  Id
       * @description ID of the target HubSpot CRM object for association (e.g., contact ID, ticket ID).
       */
      to__id?: string;
      /**
       * Types
       * @description Defines association types to create, each with an association category and type ID.
       */
      types: {
          /**
           * Association Category
           * @description Category of the association: 'HUBSPOT_DEFINED' (standard HubSpot), 'USER_DEFINED' (custom in account), or 'INTEGRATOR_DEFINED' (integration-created).
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique ID for the association type, defining the link's nature with another CRM object. Obtain from HubSpot documentation/API for specific associations.
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Properties
   * @description Properties for the feedback submission. Keys are internal names (e.g., 'hs_feedback_rating'), values must be strings. Property names must be pre-defined in your HubSpot account.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_FEEDBACK_SUBMISSION tool output.
 */
type HUBSPOT_CREATE_FEEDBACK_SUBMISSION_OUTPUT = {
  /**
   * Data
   * @description Details of the created feedback submission, including its ID and creation timestamp.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_LINE_ITEM tool input.
 */
type HUBSPOT_CREATE_LINE_ITEM_INPUT = {
  /**
   * Properties
   * @description Line item properties to set. Keys are HubSpot internal property names.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_LINE_ITEM tool output.
 */
type HUBSPOT_CREATE_LINE_ITEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_LINE_ITEMS tool input.
 */
type HUBSPOT_CREATE_LINE_ITEMS_INPUT = {
  /**
   * Inputs
   * @description List of line item objects to create.
   */
  inputs?: {
      /**
       * Properties
       * @description Line item properties to set.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_LINE_ITEMS tool output.
 */
type HUBSPOT_CREATE_LINE_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_LINE_ITEM_OBJECT tool input.
 */
type HUBSPOT_CREATE_LINE_ITEM_OBJECT_INPUT = {
  /**
   * Associations
   * @description Links the new line item with other CRM objects (e.g., deals, quotes). Provide an empty list if the API supports creating unassociated line items.
   */
  associations?: {
      /**
       * To  Id
       * @description The unique ID of the CRM object (e.g., deal, quote) to which the new line item will be associated.
       */
      to__id?: string;
      /**
       * Types
       * @description A list detailing the association's type and category; typically one entry defines a single link.
       */
      types: {
          /**
           * Association Category
           * @description Category of the association (e.g., 'HUBSPOT_DEFINED' for standard HubSpot associations such as line item to deal).
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description HubSpot-specific ID defining the association type's nature (e.g., for a line item to deal link).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Properties
   * @description Key-value pairs for the line item's properties (e.g., 'name', 'quantity', 'price'). Consult HubSpot documentation for all properties required by your specific instance.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_LINE_ITEM_OBJECT tool output.
 */
type HUBSPOT_CREATE_LINE_ITEM_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH tool input.
 */
type HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH_INPUT = {
  /**
   * Inputs
   * @description A list of event objects to be created. Each object in the list must conform to the InputsRequest schema and define a single timeline event.
   */
  inputs?: {
      /**
       * Domain
       * @description The domain name to associate with the event, often used with `utk` (user token) for analytics or contact tracking.
       */
      domain?: string;
      /**
       * Email
       * @description The email address of the contact to associate with this event. Can be used to identify existing contacts, create new ones, or update the email of an existing contact if `objectId` is also provided.
       */
      email?: string;
      /**
       * Event Template Id
       * @description The unique identifier of the event template to be used for creating the timeline event. This template defines the structure and properties of the event.
       */
      eventTemplateId: string;
      /**
       * Id
       * @description Optional unique identifier for the event. HubSpot will generate one if omitted. You can use `{{uuid}}` within the ID string (e.g., `my-event-{{uuid}}`) to ensure uniqueness if providing your own.
       */
      id?: string;
      /**
       * Object Id
       * @description The unique identifier of the CRM object (e.g., company, deal) to which this event pertains. Required for all event types except contact events where `email` or `utk` can be used instead.
       */
      objectId?: string;
      /**
       * Timeline I Frame  Header Label
       * @description The title or header label for the modal window that displays the iframe's content. Used if the event template includes an iframe.
       */
      timelineIFrame__headerLabel?: string;
      /**
       * Timeline I Frame  Height
       * @description The height of the iframe's modal window in pixels. Applicable if the event template uses an iframe.
       */
      timelineIFrame__height?: number;
      /**
       * Timeline I Frame  Link Label
       * @description The text for the link that, when clicked, will display the iframe. Relevant only if the event template uses an iframe.
       */
      timelineIFrame__linkLabel?: string;
      /**
       * Timeline I Frame  Url
       * @description The URL of the content to be displayed within the iframe. This is required if the event template is configured to display an iframe.
       */
      timelineIFrame__url?: string;
      /**
       * Timeline I Frame  Width
       * @description The width of the iframe's modal window in pixels. Applicable if the event template uses an iframe.
       */
      timelineIFrame__width?: number;
      /**
       * Timestamp
       * Format: date-time
       * @description The Coordinated Universal Time (UTC) ISO 8601 formatted date and time when the event actually occurred (e.g., '2023-05-15T10:30:00Z'). If omitted, HubSpot will use the time the event is processed. This timestamp influences the event's chronological position on the CRM object's timeline.
       */
      timestamp?: string;
      /**
       * Tokens
       * @description A dictionary of key-value pairs, where keys are token names defined in the event template and values are the specific data for this event. All token values must be strings.
       */
      tokens: {
          [key: string]: string;
      };
      /**
       * Utk
       * @description The HubSpot user token (utk) to associate the event with a contact. Recommended if the contact's email is unknown but a `usertoken` from a cookie is available.
       */
      utk?: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH tool output.
 */
type HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_NEW_DEAL_OBJECT tool input.
 */
type HUBSPOT_CREATE_NEW_DEAL_OBJECT_INPUT = {
  /**
   * Amount
   * @description Total monetary value of the deal.
   */
  amount?: string;
  /**
   * Amount In Home Currency
   * @description Deal's value in company's home currency (read-only, HubSpot-calculated).
   */
  amount_in_home_currency?: string;
  /**
   * Associations
   * @description Associations to create between the new deal and other CRM objects (e.g., contact, company).
   */
  associations?: {
      /**
       * To  Id
       * @description ID of the CRM object (e.g., contact, company) to associate with.
       */
      to__id?: string;
      /**
       * Types
       * @description List of association types to be created, each defining category and type ID.
       */
      types: {
          /**
           * Association Category
           * @description A categorization of the association type. The available categories are `HUBSPOT_DEFINED`, `USER_DEFINED`, and `INTEGRATOR_DEFINED`.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique ID of the association type, specifying the relationship nature (e.g., deal-contact).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Closed Lost Reason
   * @description Reason why the deal was lost.
   */
  closed_lost_reason?: string;
  /**
   * Closed Won Reason
   * @description Reason why the deal was won.
   */
  closed_won_reason?: string;
  /**
   * Closedate
   * @description Date (YYYY-MM-DD) or datetime (ISO 8601) when the deal closed or is expected to close.
   */
  closedate?: string;
  /**
   * Createdate
   * @description Date/time deal was created (read-only, HubSpot-set).
   */
  createdate?: string;
  /**
   * Custom Properties
   * @description Custom properties for the deal. Keys are internal property names, values are the values to set. E.g., `{'internal_name_1': 'value1'}`.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Days To Close
   * @description Days between creation and close (read-only, HubSpot-calculated).
   */
  days_to_close?: string;
  /**
   * Deal Currency Code
   * @description Currency code (e.g., USD) for deal amount; defaults to company's home currency.
   */
  deal_currency_code?: string;
  /**
   * Dealname
   * @description Descriptive name or title of the deal.
   */
  dealname?: string;
  /**
   * Dealstage
   * @description ID of the deal's current stage in its pipeline.
   */
  dealstage?: string;
  /**
   * Dealtype
   * @description Type of deal (e.g., 'newbusiness', 'existingbusiness').
   */
  dealtype?: string;
  /**
   * Description
   * @description Detailed text description of the deal.
   */
  description?: string;
  /**
   * Engagements Last Meeting Booked
   * @description Date/time of last booked meeting for this deal (typically read-only).
   */
  engagements_last_meeting_booked?: string;
  /**
   * Engagements Last Meeting Booked Campaign
   * @description Campaign ID for the last booked meeting (typically read-only).
   */
  engagements_last_meeting_booked_campaign?: string;
  /**
   * Engagements Last Meeting Booked Medium
   * @description Medium (e.g., 'Meetings') of last booked meeting (typically read-only).
   */
  engagements_last_meeting_booked_medium?: string;
  /**
   * Engagements Last Meeting Booked Source
   * @description Source (e.g., 'Calendar') of last booked meeting (typically read-only).
   */
  engagements_last_meeting_booked_source?: string;
  /**
   * Hs Acv
   * @description Annual Contract Value (ACV) (HubSpot-calculated).
   */
  hs_acv?: string;
  /**
   * Hs All Accessible Team Ids
   * @description Semicolon-separated list of team IDs with access (typically read-only).
   */
  hs_all_accessible_team_ids?: string;
  /**
   * Hs All Assigned Business Unit Ids
   * @description Semicolon-separated list of assigned business unit IDs (for Business Units add-on).
   */
  hs_all_assigned_business_unit_ids?: string;
  /**
   * Hs All Owner Ids
   * @description Semicolon-separated list of all owner IDs (primary, co-owners).
   */
  hs_all_owner_ids?: string;
  /**
   * Hs All Team Ids
   * @description Semicolon-separated list of all associated team IDs (owner's primary, additional teams; typically read-only).
   */
  hs_all_team_ids?: string;
  /**
   * Hs Analytics Source
   * @description Original deal source per HubSpot analytics (e.g., 'Organic Search'; typically read-only).
   */
  hs_analytics_source?: string;
  /**
   * Hs Arr
   * @description Annual Recurring Revenue (ARR) (HubSpot-calculated).
   */
  hs_arr?: string;
  /**
   * Hs Campaign
   * @description GUID of the HubSpot campaign that generated this deal.
   */
  hs_campaign?: string;
  /**
   * Hs Closed Amount
   * @description Actual amount when deal closed (HubSpot-calculated).
   */
  hs_closed_amount?: string;
  /**
   * Hs Closed Amount In Home Currency
   * @description Closed amount in home currency (HubSpot-calculated).
   */
  hs_closed_amount_in_home_currency?: string;
  /**
   * Hs Createdate
   * @description Specific date/time deal record created (ISO 8601, read-only, HubSpot-set).
   */
  hs_createdate?: string;
  /**
   * Hs Deal Stage Probability
   * @description Win probability (decimal, e.g., 0.5) based on current stage; typically stage-defined.
   */
  hs_deal_stage_probability?: string;
  /**
   * Hs Forecast Amount
   * @description Forecasted amount ('Amount' * 'hs_deal_stage_probability'; HubSpot-calculated).
   */
  hs_forecast_amount?: string;
  /**
   * Hs Forecast Probability
   * @description Sales forecasting probability; may differ from 'hs_deal_stage_probability'.
   */
  hs_forecast_probability?: string;
  /**
   * Hs Is Closed
   * @description Indicates if deal is closed ('true'/'false'; read-only, from deal stage properties).
   */
  hs_is_closed?: string;
  /**
   * Hs Lastmodifieddate
   * @description Date/time deal last modified (ISO 8601, read-only, HubSpot-updated).
   */
  hs_lastmodifieddate?: string;
  /**
   * Hs Mrr
   * @description Monthly Recurring Revenue (MRR) (HubSpot-calculated).
   */
  hs_mrr?: string;
  /**
   * Hs Next Step
   * @description Next planned step for this deal.
   */
  hs_next_step?: string;
  /**
   * Hs Object Id
   * @description Unique ID of the deal object (read-only, HubSpot-assigned).
   */
  hs_object_id?: string;
  /**
   * Hs Priority
   * @description Priority level (e.g., 'high', 'medium', 'low').
   */
  hs_priority?: string;
  /**
   * Hs Projected Amount
   * @description Projected deal amount (manually set or calculated).
   */
  hs_projected_amount?: string;
  /**
   * Hs Projected Amount In Home Currency
   * @description Projected amount in home currency (HubSpot-calculated).
   */
  hs_projected_amount_in_home_currency?: string;
  /**
   * Hs Tcv
   * @description Total Contract Value (TCV) (HubSpot-calculated).
   */
  hs_tcv?: string;
  /**
   * Hubspot Owner Id
   * @description ID of the HubSpot user owning the deal; may be auto-assigned if unspecified.
   */
  hubspot_owner_id?: string;
  /**
   * Pipeline
   * @description ID of the sales pipeline for this deal (required).
   */
  pipeline?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_NEW_DEAL_OBJECT tool output.
 */
type HUBSPOT_CREATE_NEW_DEAL_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Dictionary with properties and details of the new deal, including standard and custom properties.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES tool input.
 */
type HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES_INPUT = {
  /**
   * Associated Objects
   * @description Object type IDs (e.g., 'CONTACT', 'COMPANY', 'p123456') this schema can be associated with.
   */
  associatedObjects?: string[];
  /**
   * Description
   * @description Optional human-readable description for the custom object schema.
   */
  description?: string;
  /**
   * Labels  Plural
   * @description Plural display name used in HubSpot UI; immutable after creation.
   */
  labels__plural?: string;
  /**
   * Labels  Singular
   * @description Singular display name used in HubSpot UI; immutable after creation.
   */
  labels__singular?: string;
  /**
   * Name
   * @description Unique, immutable programmatic name for the schema (used in API calls); must be unique in the account.
   */
  name?: string;
  /**
   * Primary Display Property
   * @description Internal name of the primary identifier property; must be defined in 'properties'.
   */
  primaryDisplayProperty?: string;
  /**
   * Properties
   * @description List of property definitions for this custom object schema.
   */
  properties?: {
      /**
       * Description
       * @description Optional help text for the property displayed in HubSpot.
       */
      description?: string;
      /**
       * Display Order
       * @description Display order relative to other properties; -1 places it after positive values.
       */
      displayOrder?: number;
      /**
       * Field Type
       * @description UI field type (e.g., 'text', 'select'); depends on property 'type'.
       */
      fieldType: string;
      /**
       * Form Field
       * @description Allows this property to be used in HubSpot forms if true.
       */
      formField?: boolean;
      /**
       * Group Name
       * @description Property group name for UI organization.
       */
      groupName?: string;
      /**
       * Has Unique Value
       * @description Ensures property value is unique across all records; immutable after creation.
       */
      hasUniqueValue?: boolean;
      /**
       * Hidden
       * @description Hides the property in the HubSpot UI if true.
       */
      hidden?: boolean;
      /**
       * Label
       * @description Human-readable label displayed in HubSpot.
       */
      label: string;
      /**
       * Name
       * @description Unique internal programmatic name for API use.
       */
      name: string;
      /**
       * Number Display Hint
       * @description Display hint for 'number' type properties in UI.
       * @enum {string}
       */
      numberDisplayHint?: "unformatted" | "formatted" | "currency" | "percentage" | "duration" | "probability";
      /**
       * Option Sort Strategy
       * @description Sort strategy for 'enumeration' property options in UI: 'DISPLAY_ORDER' or 'ALPHABETICAL'.
       * @enum {string}
       */
      optionSortStrategy?: "DISPLAY_ORDER" | "ALPHABETICAL";
      /**
       * Options
       * @description List of options for 'enumeration' type properties; required for this type.
       */
      options?: {
          /**
           * Description
           * @description Optional help text for the option.
           */
          description?: string;
          /**
           * Display Order
           * @description Sort order for display; -1 places it after positive values.
           */
          displayOrder: number;
          /**
           * Hidden
           * @description Hides the option in the HubSpot UI if true.
           */
          hidden: boolean;
          /**
           * Label
           * @description Human-readable label displayed in HubSpot.
           */
          label: string;
          /**
           * Value
           * @description Internal value used when setting the property via API.
           */
          value: string;
      }[];
      /**
       * Referenced Object Type
       * @description For 'enumeration' type, specifies the object type whose records populate options (e.g., 'CONTACT', 'COMPANY', 'OWNER' for users).
       */
      referencedObjectType?: string;
      /**
       * Searchable In Global Search
       * @description Makes property values searchable in HubSpot's global search; subject to limits.
       */
      searchableInGlobalSearch?: boolean;
      /**
       * Show Currency Symbol
       * @description Displays currency symbol for 'number' type properties with 'CURRENCY' or 'FORMATTED' hint.
       */
      showCurrencySymbol?: boolean;
      /**
       * Text Display Hint
       * @description Display and validation hint for 'string' type properties in UI.
       * @enum {string}
       */
      textDisplayHint?: "unformatted_single_line" | "multi_line" | "email" | "phone_number" | "domain_name" | "ip_address" | "physical_address" | "postal_code";
      /**
       * Type
       * @description Data type of the property.
       * @enum {string}
       */
      type: "string" | "number" | "date" | "datetime" | "enumeration" | "bool";
  }[];
  /**
   * Required Properties
   * @description Internal names of properties required for new records; must be defined in 'properties'.
   */
  requiredProperties?: string[];
  /**
   * Searchable Properties
   * @description Internal names of properties indexed for global search; must be defined in 'properties'.
   */
  searchableProperties?: string[];
  /**
   * Secondary Display Properties
   * @description Internal names of properties for secondary display on record pages; must be defined in 'properties'.
   */
  secondaryDisplayProperties?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES tool output.
 */
type HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created custom object schema, including its system-generated ID (objectTypeId), fully qualified name, properties, and associations.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION tool input.
 */
type HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION_INPUT = {
  /**
   * Active Domain
   * @description Connected and verified sending domain in HubSpot.
   */
  activeDomain?: string;
  /**
   * Archived
   * @description Indicates if the marketing email is archived.
   */
  archived?: boolean;
  /**
   * Business Unit Id
   * @description Associated business unit ID, for accounts with multiple units.
   */
  businessUnitId?: string;
  /**
   * Campaign
   * @description Associated HubSpot campaign ID for tracking/reporting.
   */
  campaign?: string;
  /**
   * Content  Flex Areas
   * @description Configuration for flexible content areas in the email template.
   */
  content__flexAreas?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Plain Text Version
   * @description Plain text version of the email.
   */
  content__plainTextVersion?: string;
  /**
   * Content  Smart Fields
   * @description Smart fields and values for email personalization.
   */
  content__smartFields?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Template Path
   * @description Path to the email template in HubSpot Design Manager.
   */
  content__templatePath?: string;
  /**
   * Content  Theme Settings Values
   * @description Custom values for theme settings applied to the email template.
   */
  content__themeSettingsValues?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Widget Containers
   * @description Configuration for widget containers in the email template.
   */
  content__widgetContainers?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Widgets
   * @description Configuration for widgets (modules) in email content.
   */
  content__widgets?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Email Id
   * @description The unique identifier of the marketing email.
   */
  emailId?: string;
  /**
   * From  Custom Reply To
   * @description Custom reply-to email address; overrides `replyTo`.
   */
  from__customReplyTo?: string;
  /**
   * From  From Name
   * @description 'From' name displayed to recipients.
   */
  from__fromName?: string;
  /**
   * From  Reply To
   * @description 'From' email address; receives replies if `customReplyTo` is not set.
   */
  from__replyTo?: string;
  /**
   * Language
   * @description Primary language of email content (e.g., 'en', 'en-us').
   * @enum {string}
   */
  language?: "af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za";
  /**
   * Name
   * @description Internal name of the email for HubSpot dashboard.
   */
  name?: string;
  /**
   * Publish Date
   * Format: date-time
   * @description Scheduled send date/time (ISO 8601). Used for scheduled emails.
   */
  publishDate?: string;
  /**
   * Rss Data  Blog Email Type
   * @description Type of RSS email (e.g., 'instant', 'daily', 'weekly'). Applies if `rssData` is configured.
   */
  rssData__blogEmailType?: string;
  /**
   * Rss Data  Blog Image Max Width
   * @description Maximum width for images imported from RSS feed blog posts. Applies if `rssData` is configured.
   */
  rssData__blogImageMaxWidth?: number;
  /**
   * Rss Data  Blog Layout
   * @description Layout style for blog posts in RSS email. Applies if `rssData` is configured.
   */
  rssData__blogLayout?: string;
  /**
   * Rss Data  Hubspot Blog Id
   * @description HubSpot-hosted blog ID for RSS-to-Email. Applies if `rssData` is configured and blog is HubSpot-hosted.
   */
  rssData__hubspotBlogId?: string;
  /**
   * Rss Data  Max Entries
   * @description Maximum blog posts per RSS email. Applies if `rssData` is configured.
   */
  rssData__maxEntries?: number;
  /**
   * Rss Data  Rss Entry Template
   * @description HTML template for each RSS entry. Applies if `rssData` is configured.
   */
  rssData__rssEntryTemplate?: string;
  /**
   * Rss Data  Timing
   * @description Send timing for RSS emails. Applies if `rssData` is configured.
   */
  rssData__timing?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Rss Data  Url
   * @description External RSS feed URL. Required for external blog RSS emails.
   */
  rssData__url?: string;
  /**
   * Rss Data  Use Headline As Subject
   * @description If true, email subject is first blog post headline. Applies if `rssData` is configured.
   */
  rssData__useHeadlineAsSubject?: boolean;
  /**
   * Send On Publish
   * @description If true, sends email immediately on publishing, overriding `publishDate`.
   */
  sendOnPublish?: boolean;
  /**
   * State
   * @description Current state of the email (e.g., 'DRAFT'); typically system-managed.
   * @enum {string}
   */
  state?: "AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT";
  /**
   * Subcategory
   * @description Email subcategory for organization/reporting (e.g., 'MARKETING_EMAIL').
   */
  subcategory?: string;
  /**
   * Subject
   * @description The subject line of the email.
   */
  subject?: string;
  /**
   * Subscription Details  Office Location Id
   * @description Company office location ID for email footer (compliance).
   */
  subscriptionDetails__officeLocationId?: string;
  /**
   * Subscription Details  Preferences Group Id
   * @description Associated subscription preferences group ID.
   */
  subscriptionDetails__preferencesGroupId?: string;
  /**
   * Subscription Details  Subscription Id
   * @description Specific subscription type ID (e.g., newsletter).
   */
  subscriptionDetails__subscriptionId?: string;
  /**
   * Testing  Ab Sample Size Default
   * @description Default email version ('master' or 'variant') if A/B test sample size is too small.
   * @enum {string}
   */
  testing__abSampleSizeDefault?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Sampling Default
   * @description Default email version ('master' or 'variant') if A/B test results are inconclusive.
   * @enum {string}
   */
  testing__abSamplingDefault?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Status
   * @description Current status of the A/B test.
   * @enum {string}
   */
  testing__abStatus?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Success Metric
   * @description Metric to determine A/B test winning version (e.g., 'CLICKS_BY_OPENS').
   * @enum {string}
   */
  testing__abSuccessMetric?: "CLICKS_BY_OPENS" | "CLICKS_BY_DELIVERED" | "OPENS_BY_DELIVERED";
  /**
   * Testing  Ab Test Percentage
   * @description Percentage of recipients in the A/B test group (e.g., 20 for 20%).
   */
  testing__abTestPercentage?: number;
  /**
   * Testing  Hours To Wait
   * @description Hours to wait for A/B test results before sending the winning version.
   */
  testing__hoursToWait?: number;
  /**
   * Testing  Test Id
   * @description Unique identifier of the A/B test, if applicable.
   */
  testing__testId?: string;
  /**
   * To  Contact Ids  Exclude
   * @description Specific contact IDs to exclude from recipients.
   */
  to__contactIds__exclude?: string[];
  /**
   * To  Contact Ids  Include
   * @description Specific contact IDs to include as recipients.
   */
  to__contactIds__include?: string[];
  /**
   * To  Contact Lists  Exclude
   * @description Contact list IDs whose members will be excluded.
   */
  to__contactLists__exclude?: string[];
  /**
   * To  Contact Lists  Include
   * @description Contact list IDs whose members will be included as recipients.
   */
  to__contactLists__include?: string[];
  /**
   * To  Limit Send Frequency
   * @description If true, respects contact send frequency limits.
   */
  to__limitSendFrequency?: boolean;
  /**
   * To  Suppress Graymail
   * @description If true, suppresses sending to 'graymail' contacts.
   */
  to__suppressGraymail?: boolean;
  /**
   * Webversion  Domain
   * @description Domain for the email web version; defaults to HubSpot domain if unspecified.
   */
  webversion__domain?: string;
  /**
   * Webversion  Expires At
   * Format: date-time
   * @description Expiration date/time (ISO 8601) for the web version link.
   */
  webversion__expiresAt?: string;
  /**
   * Webversion  Meta Description
   * @description Meta description for the web version (for search engines).
   */
  webversion__metaDescription?: string;
  /**
   * Webversion  Redirect To Page Id
   * @description HubSpot page ID to redirect to from web version link; overrides `redirectToUrl`.
   */
  webversion__redirectToPageId?: string;
  /**
   * Webversion  Redirect To Url
   * @description Custom URL to redirect to from web version link if `redirectToPageId` is not set.
   */
  webversion__redirectToUrl?: string;
  /**
   * Webversion  Slug
   * @description URL slug for the web version (e.g., 'july-newsletter').
   */
  webversion__slug?: string;
  /**
   * Webversion  Title
   * @description Browser tab title for the web version.
   */
  webversion__title?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION tool output.
 */
type HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION_OUTPUT = {
  /**
   * Data
   * @description Details of the created or updated draft email.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE tool input.
 */
type HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE_INPUT = {
  /**
   * Display Order
   * @description Display order for this pipeline. Pipelines for the same object type with matching `displayOrder` are sorted alphabetically by label.
   */
  displayOrder?: number;
  /**
   * Label
   * @description A unique label for the pipeline, used for organization in the HubSpot UI for this object type.
   */
  label?: string;
  /**
   * Object Type
   * @description Identifier for the CRM object type (e.g., 'deals', 'tickets', or a custom object type ID) for the new pipeline, determining its context and properties in HubSpot.
   */
  objectType?: string;
  /**
   * Stages
   * @description A list of stage definitions for the new pipeline; each stage `label` must be unique within this pipeline.
   */
  stages?: {
      /**
       * Display Order
       * @description Display order for this stage. Stages with the same `displayOrder` are sorted alphabetically by label.
       */
      displayOrder: number;
      /**
       * Label
       * @description A unique label for the pipeline stage, unique within the parent pipeline.
       */
      label: string;
      /**
       * Metadata
       * @description Stage-specific properties. For 'deals' pipelines, `probability` (a float between 0.0-1.0, in 0.1 increments) is required. For 'tickets' pipelines, `ticketState` ('OPEN'/'CLOSED') is optional.
       */
      metadata: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE tool output.
 */
type HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the newly created pipeline, including its unique ID, label, display order, and defined stages.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_PIPELINE_STAGE tool input.
 */
type HUBSPOT_CREATE_PIPELINE_STAGE_INPUT = {
  /**
   * Display Order
   * @description Stage's display order in the pipeline (lower numbers first). Stages with identical `displayOrder` are sorted alphabetically by `label`.
   */
  displayOrder?: number;
  /**
   * Label
   * @description User-visible name for the pipeline stage, unique within the parent pipeline.
   */
  label?: string;
  /**
   * Metadata
   * @description Stage-specific properties. For `deals` pipelines, `metadata` must include a `probability` key (value 0.0-1.0 in 0.1 increments). For `tickets` pipelines, an optional `ticketState` key can specify `OPEN` or `CLOSED` status.
   */
  metadata?: {
      [key: string]: string;
  };
  /**
   * Object Type
   * @description CRM object type (e.g., 'deals', 'tickets') for the new stage. Must be a valid HubSpot CRM object type supporting pipelines. Typically lowercase and plural.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Identifier of the existing pipeline (specific to `objectType`) where the new stage will be added.
   */
  pipelineId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PIPELINE_STAGE tool output.
 */
type HUBSPOT_CREATE_PIPELINE_STAGE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties of the newly created pipeline stage, including its ID.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCT tool input.
 */
type HUBSPOT_CREATE_PRODUCT_INPUT = {
  /**
   * Associations
   * @description A list of associations to create between this new product and other CRM objects. Each association specifies the target object ID and the type of relationship.
   */
  associations?: {
      /**
       * To  Id
       * @description The unique ID of the target CRM object to associate with this product (e.g., a deal ID or company ID).
       */
      to__id?: string;
      /**
       * Types
       * @description A list defining the types of associations. For product objects, this typically involves one type specifying the relationship.
       */
      types: {
          /**
           * Association Category
           * @description The category of the association. Determines if the association is defined by HubSpot, a user, or an integrator.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique numeric ID of the association type defining the nature of the relationship (e.g., product to deal).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Custom Properties
   * @description A dictionary of custom properties for the product. Keys are the internal names of your HubSpot custom product properties, and values are the respective property values. Example: `{"material": "Titanium", "warranty_years": "5"}`.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Description
   * @description A detailed description of the product, its features, and benefits.
   */
  description?: string;
  /**
   * Hs Active
   * @description Indicates if the product is currently active and available for sale. Set to `true` if active, `false` otherwise.
   */
  hs_active?: boolean;
  /**
   * Hs Archived
   * @description Indicates if the product has been archived. Archived products are typically hidden from active lists and sales processes. Set to `true` to archive.
   */
  hs_archived?: boolean;
  /**
   * Hs Cost Of Goods Sold
   * @description The cost of goods sold (COGS) for the product. Used for profit margin calculations.
   */
  hs_cost_of_goods_sold?: number;
  /**
   * Hs Featured
   * @description Indicates if the product is marked as a featured item, which can be used to highlight it in product listings.
   */
  hs_featured?: boolean;
  /**
   * Hs Images
   * @description A comma-separated string of URLs for product images. The first URL is typically used as the primary image.
   */
  hs_images?: string;
  /**
   * Hs Product Category
   * @description The primary category the product belongs to (e.g., 'Electronics', 'Apparel', 'Consulting Services').
   */
  hs_product_category?: string;
  /**
   * Hs Product Id
   * @description An external or secondary unique identifier for the product. Useful for mapping to external systems. HubSpot does not auto-generate this.
   */
  hs_product_id?: string;
  /**
   * Hs Product Status
   * @description The current sales or lifecycle status of the product (e.g., 'Available', 'Discontinued', 'Pre-order', 'Out of Stock').
   */
  hs_product_status?: string;
  /**
   * Hs Product Subcategory
   * @description A more specific subcategory for the product (e.g., 'Laptops' under 'Electronics').
   */
  hs_product_subcategory?: string;
  /**
   * Hs Product Type
   * @description The general type of the product (e.g., 'Physical Good', 'Service', 'Software License').
   */
  hs_product_type?: string;
  /**
   * Hs Recurring Billing Period
   * @description The billing frequency for recurring revenue products, formatted as a PnYnMnDTnHnMnS string (e.g., P1M for 1 month, P1Y for 1 year).
   */
  hs_recurring_billing_period?: string;
  /**
   * Hs Sku
   * @description The Stock Keeping Unit (SKU) for the product. This should be unique across all products if used for inventory management.
   */
  hs_sku?: string;
  /**
   * Hs Url
   * @description A direct URL link to the product's page on an e-commerce website or product information site.
   */
  hs_url?: string;
  /**
   * Hs Valid From
   * @description The date (YYYY-MM-DD format) from which the product is considered valid or available for sale.
   */
  hs_valid_from?: string;
  /**
   * Hs Valid Through
   * @description The date (YYYY-MM-DD format) until which the product is considered valid or available. Leave empty if there's no expiration date.
   */
  hs_valid_through?: string;
  /**
   * Name
   * @description The official name of the product.
   */
  name?: string;
  /**
   * Price
   * @description The selling price of the product in the default currency of the HubSpot account.
   */
  price?: number;
  /**
   * Quantity
   * @description The current quantity of the product available in inventory. This property might be relevant for physical goods.
   */
  quantity?: number;
  /**
   * Tax Category
   * @description The tax category or code applicable to the product, used for calculating sales tax (e.g., 'Taxable Goods', 'Non-Taxable').
   */
  tax_category?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCT tool output.
 */
type HUBSPOT_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing all properties of the newly created HubSpot product object, including its unique HubSpot ID.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCTS tool input.
 */
type HUBSPOT_CREATE_PRODUCTS_INPUT = {
  /**
   * Inputs
   * @description List of product objects to create.
   */
  inputs?: {
      /**
       * Properties
       * @description Product properties to set. Keys are HubSpot internal property names.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCTS tool output.
 */
type HUBSPOT_CREATE_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description API response with operation status and results.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCT_BATCH tool input.
 */
type HUBSPOT_CREATE_PRODUCT_BATCH_INPUT = {
  /**
   * Inputs
   * @description A list of product definitions. Each item in the list represents a distinct product to be created, complete with its properties and any desired associations to other CRM objects.
   */
  inputs?: {
      /**
       * Associations
       * @description A list of associations to create for this product. This defines how the new product will be linked to other existing CRM objects such as deals or companies.
       */
      associations: {
          /**
           * To  Id
           * @description The ID of the existing CRM object to which the new product will be associated (e.g., a contact ID, company ID, deal ID, or line_item ID).
           */
          to__id?: string;
          /**
           * Types
           * @description A list of association type definitions. Each item specifies one type of association to create between the new product and the CRM object identified in `to__id`.
           */
          types: {
              /**
               * Association Category
               * @description The category of the association. `HUBSPOT_DEFINED` for standard HubSpot associations, `USER_DEFINED` for custom associations defined in your HubSpot account, or `INTEGRATOR_DEFINED` for associations created by third-party integrations.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The unique identifier for the specific association type within the chosen category. This ID specifies the nature of the link (e.g., a product being associated 'to' a deal). Actual Type IDs can be found in your HubSpot portal settings or API documentation.
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description A dictionary of properties for the product. Keys are the internal names of the product properties (e.g., 'name', 'price', 'description', 'hs_sku'), and values are the desired string values for these properties. All property values must be provided as strings.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCT_BATCH tool output.
 */
type HUBSPOT_CREATE_PRODUCT_BATCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCT_OBJECT tool input.
 */
type HUBSPOT_CREATE_PRODUCT_OBJECT_INPUT = {
  /**
   * Associations
   * @description A list of associations to create between this new product and other CRM objects. Each association specifies the target object ID and the type of relationship.
   */
  associations?: {
      /**
       * To  Id
       * @description The unique ID of the target CRM object to associate with this product (e.g., a deal ID or company ID).
       */
      to__id?: string;
      /**
       * Types
       * @description A list defining the types of associations. For product objects, this typically involves one type specifying the relationship.
       */
      types: {
          /**
           * Association Category
           * @description The category of the association. Determines if the association is defined by HubSpot, a user, or an integrator.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique numeric ID of the association type defining the nature of the relationship (e.g., product to deal).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Custom Properties
   * @description A dictionary of custom properties for the product. Keys are the internal names of your HubSpot custom product properties, and values are the respective property values. Example: `{"material": "Titanium", "warranty_years": "5"}`.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Description
   * @description A detailed description of the product, its features, and benefits.
   */
  description?: string;
  /**
   * Hs Active
   * @description Indicates if the product is currently active and available for sale. Set to `true` if active, `false` otherwise.
   */
  hs_active?: boolean;
  /**
   * Hs Archived
   * @description Indicates if the product has been archived. Archived products are typically hidden from active lists and sales processes. Set to `true` to archive.
   */
  hs_archived?: boolean;
  /**
   * Hs Cost Of Goods Sold
   * @description The cost of goods sold (COGS) for the product. Used for profit margin calculations.
   */
  hs_cost_of_goods_sold?: number;
  /**
   * Hs Featured
   * @description Indicates if the product is marked as a featured item, which can be used to highlight it in product listings.
   */
  hs_featured?: boolean;
  /**
   * Hs Images
   * @description A comma-separated string of URLs for product images. The first URL is typically used as the primary image.
   */
  hs_images?: string;
  /**
   * Hs Product Category
   * @description The primary category the product belongs to (e.g., 'Electronics', 'Apparel', 'Consulting Services').
   */
  hs_product_category?: string;
  /**
   * Hs Product Id
   * @description An external or secondary unique identifier for the product. Useful for mapping to external systems. HubSpot does not auto-generate this.
   */
  hs_product_id?: string;
  /**
   * Hs Product Status
   * @description The current sales or lifecycle status of the product (e.g., 'Available', 'Discontinued', 'Pre-order', 'Out of Stock').
   */
  hs_product_status?: string;
  /**
   * Hs Product Subcategory
   * @description A more specific subcategory for the product (e.g., 'Laptops' under 'Electronics').
   */
  hs_product_subcategory?: string;
  /**
   * Hs Product Type
   * @description The general type of the product (e.g., 'Physical Good', 'Service', 'Software License').
   */
  hs_product_type?: string;
  /**
   * Hs Recurring Billing Period
   * @description The billing frequency for recurring revenue products, formatted as a PnYnMnDTnHnMnS string (e.g., P1M for 1 month, P1Y for 1 year).
   */
  hs_recurring_billing_period?: string;
  /**
   * Hs Sku
   * @description The Stock Keeping Unit (SKU) for the product. This should be unique across all products if used for inventory management.
   */
  hs_sku?: string;
  /**
   * Hs Url
   * @description A direct URL link to the product's page on an e-commerce website or product information site.
   */
  hs_url?: string;
  /**
   * Hs Valid From
   * @description The date (YYYY-MM-DD format) from which the product is considered valid or available for sale.
   */
  hs_valid_from?: string;
  /**
   * Hs Valid Through
   * @description The date (YYYY-MM-DD format) until which the product is considered valid or available. Leave empty if there's no expiration date.
   */
  hs_valid_through?: string;
  /**
   * Name
   * @description The official name of the product.
   */
  name?: string;
  /**
   * Price
   * @description The selling price of the product in the default currency of the HubSpot account.
   */
  price?: number;
  /**
   * Quantity
   * @description The current quantity of the product available in inventory. This property might be relevant for physical goods.
   */
  quantity?: number;
  /**
   * Tax Category
   * @description The tax category or code applicable to the product, used for calculating sales tax (e.g., 'Taxable Goods', 'Non-Taxable').
   */
  tax_category?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PRODUCT_OBJECT tool output.
 */
type HUBSPOT_CREATE_PRODUCT_OBJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing all properties of the newly created HubSpot product object, including its unique HubSpot ID.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE tool input.
 */
type HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE_INPUT = {
  /**
   * Calculation Formula
   * @description Formula for calculated property, required if `fieldType` is 'calculation_equation'. Can reference other properties by their internal names.
   */
  calculationFormula?: string;
  /**
   * Description
   * @description Optional description for the property, displayed as help text in HubSpot UI.
   */
  description?: string;
  /**
   * Display Order
   * @description Controls display order of properties in HubSpot UI, sorted ascending; -1 displays after positive values.
   */
  displayOrder?: number;
  /**
   * External Options
   * @description If true, 'enumeration' options are sourced externally, requiring `referencedObjectType` (e.g., 'OWNER' for HubSpot users). Defaults to false. Only for 'enumeration' type.
   */
  externalOptions?: boolean;
  /**
   * Field Type
   * @description Controls UI display and interaction method (e.g., text input, dropdown, checkbox).
   * @enum {string}
   */
  fieldType?: "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_equation";
  /**
   * Form Field
   * @description If true, property can be used in HubSpot forms. Defaults to false if not set.
   */
  formField?: boolean;
  /**
   * Group Name
   * @description Name of the property group for organization in HubSpot UI.
   */
  groupName?: string;
  /**
   * Has Unique Value
   * @description If true, property's value must be unique across all records for the `objectType`. Cannot be changed to false after being set to true.
   */
  hasUniqueValue?: boolean;
  /**
   * Hidden
   * @description If true, hides property in HubSpot UI, lists, and forms. Defaults to false if not set.
   */
  hidden?: boolean;
  /**
   * Label
   * @description Human-readable label for the property shown in HubSpot UI.
   */
  label?: string;
  /**
   * Name
   * @description Internal programmatic name (snake_case), unique within the `objectType`, used for API referencing.
   */
  name?: string;
  /**
   * Object Type
   * @description Target HubSpot CRM object type (e.g., contacts, companies) for the new property. Case-sensitive.
   */
  objectType?: string;
  /**
   * Options
   * @description List of predefined options, required if `type` is 'enumeration'; each option defines a possible value.
   */
  options?: {
      /**
       * Description
       * @description Optional description for the property option.
       */
      description?: string;
      /**
       * Display Order
       * @description Controls display order of options, sorted ascending; -1 displays after positive values.
       */
      displayOrder: number;
      /**
       * Hidden
       * @description If true, this option will not be displayed in HubSpot.
       */
      hidden: boolean;
      /**
       * Label
       * @description Human-readable label for the option shown in HubSpot UI.
       */
      label: string;
      /**
       * Value
       * @description Internal value of the option, used in API calls and must be unique among all options for this property.
       */
      value: string;
  }[];
  /**
   * Referenced Object Type
   * @description For properties referencing other HubSpot objects (e.g., "OWNER" when `externalOptions` is true and `type` is "enumeration" to populate options with users). Applicable for specific property types.
   */
  referencedObjectType?: string;
  /**
   * Type
   * @description The data type of the property.
   * @enum {string}
   */
  type?: "string" | "number" | "date" | "datetime" | "enumeration" | "bool";
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE tool output.
 */
type HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Dictionary with the definition and attributes of the created property.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_QUOTE_OBJECT tool input.
 */
type HUBSPOT_CREATE_QUOTE_OBJECT_INPUT = {
  /**
   * Associations
   * @description A list of associations to create for the new quote. Each item specifies the object to associate with and the type of association.
   */
  associations?: {
      /**
       * To  Id
       * @description The ID of the existing object to associate the new quote with.
       */
      to__id?: string;
      /**
       * Types
       * @description A list of association types to create between the new quote and other objects.
       */
      types: {
          /**
           * Association Category
           * @description The category of the association. HubSpot-defined associations are created by HubSpot, user-defined are created by users, and integrator-defined are created by integrations.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description The ID that specifies the type of association. For example, to associate a quote with a deal, use the appropriate HubSpot-defined ID.
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Properties
   * @description A dictionary of key-value pairs representing the properties of the quote to be created. Property names are HubSpot internal names.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_QUOTE_OBJECT tool output.
 */
type HUBSPOT_CREATE_QUOTE_OBJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties of the newly created quote object, including its ID.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_TICKET tool input.
 */
type HUBSPOT_CREATE_TICKET_INPUT = {
  /**
   * Associations
   * @description List defining associations between this new ticket and other existing HubSpot objects (e.g., linking to a contact or company). Each item specifies the target object ID (`to`) and the type of association (`types`).
   */
  associations?: {
      /**
       * To
       * @description ID of the HubSpot object to associate with the ticket (e.g., a contact ID, company ID).
       */
      to?: string;
      /**
       * Types
       * @description List of association type definitions specifying the link between the ticket and the target object.
       */
      types: {
          /**
           * Association Category
           * @description Category of the association.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique ID of the specific association type (e.g., ID for 'ticket_to_contact' association).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Closed Date
   * @description Date and time the ticket was closed (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ssZ').
   */
  closed_date?: string;
  /**
   * Content
   * @description Main body or description of the ticket, detailing the issue or request; typically required.
   */
  content?: string;
  /**
   * Created By
   * @description ID of the HubSpot user who created the ticket.
   */
  created_by?: string;
  /**
   * Createdate
   * @description Date and time the ticket was created (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ssZ'); HubSpot typically sets this automatically if not provided.
   */
  createdate?: string;
  /**
   * Custom Properties
   * @description Dictionary of custom properties for the ticket: keys are internal names (e.g., `my_custom_field_name`), values are the data.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * First Agent Reply Date
   * @description Date and time of the first agent reply on this ticket (ISO 8601 format).
   */
  first_agent_reply_date?: string;
  /**
   * Hs All Accessible Team Ids
   * @description List of all team IDs with access to this ticket; usually managed by HubSpot.
   */
  hs_all_accessible_team_ids?: string[];
  /**
   * Hs All Assigned Business Unit Ids
   * @description List of all business unit IDs assigned to this ticket; usually managed by HubSpot.
   */
  hs_all_assigned_business_unit_ids?: string[];
  /**
   * Hs All Associated Contact Companies
   * @description System-populated list of company names or IDs for contacts linked to this ticket.
   */
  hs_all_associated_contact_companies?: string[];
  /**
   * Hs All Associated Contact Emails
   * @description System-populated list of email addresses of contacts associated with this ticket.
   */
  hs_all_associated_contact_emails?: string[];
  /**
   * Hs All Associated Contact Firstnames
   * @description System-populated list of first names of contacts associated with this ticket.
   */
  hs_all_associated_contact_firstnames?: string[];
  /**
   * Hs All Associated Contact Lastnames
   * @description System-populated list of last names of contacts associated with this ticket.
   */
  hs_all_associated_contact_lastnames?: string[];
  /**
   * Hs All Associated Contact Mobilephones
   * @description System-populated list of mobile phone numbers of contacts associated with this ticket.
   */
  hs_all_associated_contact_mobilephones?: string[];
  /**
   * Hs All Associated Contact Phones
   * @description System-populated list of phone numbers of contacts associated with this ticket.
   */
  hs_all_associated_contact_phones?: string[];
  /**
   * Hs All Conversation Mentions
   * @description System-populated list of all mentions in conversations related to this ticket.
   */
  hs_all_conversation_mentions?: string[];
  /**
   * Hs All Owner Ids
   * @description List of all HubSpot owner IDs associated with this ticket; usually managed by HubSpot.
   */
  hs_all_owner_ids?: string[];
  /**
   * Hs All Team Ids
   * @description List of all team IDs associated with this ticket; usually managed by HubSpot.
   */
  hs_all_team_ids?: string[];
  /**
   * Hs Assigned Team Ids
   * @description List of team IDs specifically assigned to this ticket.
   */
  hs_assigned_team_ids?: string[];
  /**
   * Hs Assignment Method
   * @description Method used for assigning the ticket (e.g., 'MANUAL', 'AUTOMATIC_ROUND_ROBIN').
   */
  hs_assignment_method?: string;
  /**
   * Hs Auto Generated From Thread Id
   * @description If auto-generated from a conversation, the ID of the originating thread.
   */
  hs_auto_generated_from_thread_id?: string;
  /**
   * Hs Conversations Originating Message Id
   * @description ID of the first message in the conversation that led to this ticket's creation.
   */
  hs_conversations_originating_message_id?: string;
  /**
   * Hs Conversations Originating Thread Id
   * @description ID of the conversation thread from which this ticket originated.
   */
  hs_conversations_originating_thread_id?: string;
  /**
   * Hs Created By User Id
   * @description HubSpot user ID of the person or system that created this ticket.
   */
  hs_created_by_user_id?: string;
  /**
   * Hs Lastcontacted
   * @description Date and time of the last contact associated with this ticket (ISO 8601 format).
   */
  hs_lastcontacted?: string;
  /**
   * Hs Lastmodifieddate
   * @description Date and time this ticket was last modified (ISO 8601 format); HubSpot typically sets this automatically.
   */
  hs_lastmodifieddate?: string;
  /**
   * Hs Pipeline
   * @description ID of the pipeline this ticket belongs to; often a required field.
   */
  hs_pipeline?: string;
  /**
   * Hs Pipeline Stage
   * @description ID of the current stage of the ticket within its pipeline; often required and must belong to the specified `hs_pipeline`.
   */
  hs_pipeline_stage?: string;
  /**
   * Hs Primary Company
   * @description ID of the primary company associated with this ticket.
   */
  hs_primary_company?: string;
  /**
   * Hs Tag Ids
   * @description List of tag IDs associated with the ticket for categorization or filtering.
   */
  hs_tag_ids?: string[];
  /**
   * Hs Ticket Category
   * @description Category of the ticket (e.g., 'Technical Support', 'Billing Inquiry'); values might be HubSpot-defined or custom.
   */
  hs_ticket_category?: string;
  /**
   * Hs Ticket Priority
   * @description Priority of the ticket (e.g., 'HIGH', 'MEDIUM', 'LOW'); values might be HubSpot-defined or custom.
   */
  hs_ticket_priority?: string;
  /**
   * Hubspot Owner Id
   * @description ID of the HubSpot user who owns this ticket.
   */
  hubspot_owner_id?: string;
  /**
   * Hubspot Team Id
   * @description ID of the HubSpot team this ticket is assigned to.
   */
  hubspot_team_id?: string;
  /**
   * Last Engagement Date
   * @description Date and time of the last engagement (e.g., email, call) with this ticket (ISO 8601 format).
   */
  last_engagement_date?: string;
  /**
   * Last Reply Date
   * @description Date and time of the last reply (either from agent or contact) on this ticket (ISO 8601 format).
   */
  last_reply_date?: string;
  /**
   * Notes Last Contacted
   * @description Timestamp of the last contact logged in notes associated with the ticket (ISO 8601 format).
   */
  notes_last_contacted?: string;
  /**
   * Notes Last Updated
   * @description Timestamp of when the notes for this ticket were last updated (ISO 8601 format).
   */
  notes_last_updated?: string;
  /**
   * Notes Next Activity Date
   * @description Timestamp for the next scheduled activity related to this ticket's notes (ISO 8601 format).
   */
  notes_next_activity_date?: string;
  /**
   * Source Type
   * @description Source channel through which the ticket was created (e.g., 'EMAIL', 'CHAT', 'PHONE', 'API').
   */
  source_type?: string;
  /**
   * Subject
   * @description Subject line or title of the ticket; typically a required field.
   */
  subject?: string;
  /**
   * Time To Close
   * @description Time taken to close the ticket, often in milliseconds or ISO 8601 duration (e.g. 'PT2H30M').
   */
  time_to_close?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_TICKET tool output.
 */
type HUBSPOT_CREATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the properties of the newly created HubSpot ticket, including its ID and all set properties.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_TICKETS tool input.
 */
type HUBSPOT_CREATE_TICKETS_INPUT = {
  /**
   * Inputs
   * @description List of ticket creation requests; each item defines one ticket with its properties and associations.
   */
  inputs?: {
      /**
       * Associations
       * @description Associations to create for this ticket, linking to other HubSpot CRM objects (e.g., contacts, companies).
       */
      associations: {
          /**
           * To
           * @description Target object to associate with this ticket, specifying its ID.
           */
          to: {
              /**
               * Id
               * @description Unique ID of the HubSpot object to associate with (e.g., a contact ID, company ID).
               */
              id: string;
          };
          /**
           * Types
           * @description Defines the types of associations, specifying `associationCategory` and `associationTypeId` for each.
           */
          types: {
              /**
               * Association Category
               * @description Category of the association (e.g., `HUBSPOT_DEFINED`, `USER_DEFINED`).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description Unique ID of the association type (e.g., `16` for 'ticket to contact', `26` for 'ticket to company').
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Properties for the new ticket (e.g., `subject`, `hs_pipeline`, `hs_pipeline_stage`); `subject` is often required.
       */
      properties: {
          /**
           * Closed Date
           * @description Date and time ticket was closed (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ss.SSSZ').
           */
          closed_date?: string;
          /**
           * Content
           * @description Main content or description of the ticket, detailing the issue or request.
           */
          content?: string;
          /**
           * Created By
           * @description ID of the user who initially created the ticket.
           */
          created_by?: string;
          /**
           * Createdate
           * @description Date and time ticket was created (ISO 8601 format); HubSpot automatically sets this if not provided.
           */
          createdate?: string;
          /**
           * Custom Properties
           * @description Custom properties for the ticket, using internal names as keys and providing their values (e.g., `{'my_custom_field': 'value'}`).
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * First Agent Reply Date
           * @description Date and time of the first agent reply to this ticket (ISO 8601 format).
           */
          first_agent_reply_date?: string;
          /**
           * Hs All Accessible Team Ids
           * @description All team IDs with access to view or interact with this ticket (typically HubSpot-managed).
           */
          hs_all_accessible_team_ids?: string[];
          /**
           * Hs All Assigned Business Unit Ids
           * @description All business unit IDs associated with this ticket for data partitioning (typically HubSpot-managed).
           */
          hs_all_assigned_business_unit_ids?: string[];
          /**
           * Hs All Associated Contact Companies
           * @description Read-only. Company names linked to contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_companies?: string[];
          /**
           * Hs All Associated Contact Emails
           * @description Read-only. Email addresses of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_emails?: string[];
          /**
           * Hs All Associated Contact Firstnames
           * @description Read-only. First names of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_firstnames?: string[];
          /**
           * Hs All Associated Contact Lastnames
           * @description Read-only. Last names of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_lastnames?: string[];
          /**
           * Hs All Associated Contact Mobilephones
           * @description Read-only. Mobile phone numbers of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_mobilephones?: string[];
          /**
           * Hs All Associated Contact Phones
           * @description Read-only. Phone numbers of contacts associated with this ticket (HubSpot-populated).
           */
          hs_all_associated_contact_phones?: string[];
          /**
           * Hs All Conversation Mentions
           * @description Read-only. User IDs or names mentioned in the ticket's conversation thread (HubSpot-populated).
           */
          hs_all_conversation_mentions?: string[];
          /**
           * Hs All Owner Ids
           * @description All HubSpot user IDs who are owners of this ticket, including primary and secondary.
           */
          hs_all_owner_ids?: string[];
          /**
           * Hs All Team Ids
           * @description All team IDs associated with this ticket, including primary and secondary.
           */
          hs_all_team_ids?: string[];
          /**
           * Hs Assigned Team Ids
           * @description Team IDs specifically assigned to work on this ticket.
           */
          hs_assigned_team_ids?: string[];
          /**
           * Hs Assignment Method
           * @description Method used for assigning the ticket.
           */
          hs_assignment_method?: string;
          /**
           * Hs Auto Generated From Thread Id
           * @description ID of the conversation thread if this ticket was automatically generated from it.
           */
          hs_auto_generated_from_thread_id?: string;
          /**
           * Hs Conversations Originating Message Id
           * @description ID of the initial message in the conversation that led to this ticket's creation.
           */
          hs_conversations_originating_message_id?: string;
          /**
           * Hs Conversations Originating Thread Id
           * @description ID of the conversation thread from which this ticket originated.
           */
          hs_conversations_originating_thread_id?: string;
          /**
           * Hs Created By User Id
           * @description HubSpot user ID of the person who created the ticket within the HubSpot system.
           */
          hs_created_by_user_id?: string;
          /**
           * Hs Lastcontacted
           * @description Date and time of the last contact activity related to the ticket (ISO 8601 format).
           */
          hs_lastcontacted?: string;
          /**
           * Hs Lastmodifieddate
           * @description Date and time when the ticket was last modified (ISO 8601 format; HubSpot automatically updates this).
           */
          hs_lastmodifieddate?: string;
          /**
           * Hs Pipeline
           * @description ID of the pipeline this ticket belongs to (uses default pipeline if not provided).
           */
          hs_pipeline?: string;
          /**
           * Hs Pipeline Stage
           * @description ID of the stage within the pipeline this ticket is currently in (required if `hs_pipeline` is set).
           */
          hs_pipeline_stage?: string;
          /**
           * Hs Primary Company
           * @description ID of the primary company associated with this ticket.
           */
          hs_primary_company?: string;
          /**
           * Hs Tag Ids
           * @description Tag IDs applied to the ticket for categorization or filtering.
           */
          hs_tag_ids?: string[];
          /**
           * Hs Ticket Category
           * @description Category of the ticket (values are often custom to your HubSpot setup).
           */
          hs_ticket_category?: string;
          /**
           * Hs Ticket Priority
           * @description Priority level of the ticket.
           */
          hs_ticket_priority?: string;
          /**
           * Hubspot Owner Id
           * @description HubSpot user ID of the owner assigned to this ticket.
           */
          hubspot_owner_id?: string;
          /**
           * Hubspot Team Id
           * @description HubSpot team ID assigned to this ticket.
           */
          hubspot_team_id?: string;
          /**
           * Last Engagement Date
           * @description Date and time of the last engagement activity on the ticket (ISO 8601 format).
           */
          last_engagement_date?: string;
          /**
           * Last Reply Date
           * @description Date and time of the last reply sent or received regarding the ticket (ISO 8601 format).
           */
          last_reply_date?: string;
          /**
           * Notes Last Contacted
           * @description Date and time of the last contact as recorded in notes (ISO 8601 format).
           */
          notes_last_contacted?: string;
          /**
           * Notes Last Updated
           * @description Date and time when notes associated with the ticket were last updated (ISO 8601 format).
           */
          notes_last_updated?: string;
          /**
           * Notes Next Activity Date
           * @description Date and time for the next scheduled activity related to the ticket notes (ISO 8601 format).
           */
          notes_next_activity_date?: string;
          /**
           * Source Type
           * @description Source from which the ticket originated.
           */
          source_type?: string;
          /**
           * Subject
           * @description Subject line or title of the ticket (often a required field for ticket creation).
           */
          subject?: string;
          /**
           * Time To Close
           * @description Duration taken to resolve and close the ticket (usually set by HubSpot upon closing).
           */
          time_to_close?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_TICKETS tool output.
 */
type HUBSPOT_CREATE_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Response from the HubSpot API, typically including 'status', 'results' (list of created tickets), 'errors', and timestamps.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_TICKET_OBJECT tool input.
 */
type HUBSPOT_CREATE_TICKET_OBJECT_INPUT = {
  /**
   * Associations
   * @description List defining associations between this new ticket and other existing HubSpot objects (e.g., linking to a contact or company). Each item specifies the target object ID (`to`) and the type of association (`types`).
   */
  associations?: {
      /**
       * To
       * @description ID of the HubSpot object to associate with the ticket (e.g., a contact ID, company ID).
       */
      to?: string;
      /**
       * Types
       * @description List of association type definitions specifying the link between the ticket and the target object.
       */
      types: {
          /**
           * Association Category
           * @description Category of the association.
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Unique ID of the specific association type (e.g., ID for 'ticket_to_contact' association).
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * Closed Date
   * @description Date and time the ticket was closed (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ssZ').
   */
  closed_date?: string;
  /**
   * Content
   * @description Main body or description of the ticket, detailing the issue or request; typically required.
   */
  content?: string;
  /**
   * Created By
   * @description ID of the HubSpot user who created the ticket.
   */
  created_by?: string;
  /**
   * Createdate
   * @description Date and time the ticket was created (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ssZ'); HubSpot typically sets this automatically if not provided.
   */
  createdate?: string;
  /**
   * Custom Properties
   * @description Dictionary of custom properties for the ticket: keys are internal names (e.g., `my_custom_field_name`), values are the data.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * First Agent Reply Date
   * @description Date and time of the first agent reply on this ticket (ISO 8601 format).
   */
  first_agent_reply_date?: string;
  /**
   * Hs All Accessible Team Ids
   * @description List of all team IDs with access to this ticket; usually managed by HubSpot.
   */
  hs_all_accessible_team_ids?: string[];
  /**
   * Hs All Assigned Business Unit Ids
   * @description List of all business unit IDs assigned to this ticket; usually managed by HubSpot.
   */
  hs_all_assigned_business_unit_ids?: string[];
  /**
   * Hs All Associated Contact Companies
   * @description System-populated list of company names or IDs for contacts linked to this ticket.
   */
  hs_all_associated_contact_companies?: string[];
  /**
   * Hs All Associated Contact Emails
   * @description System-populated list of email addresses of contacts associated with this ticket.
   */
  hs_all_associated_contact_emails?: string[];
  /**
   * Hs All Associated Contact Firstnames
   * @description System-populated list of first names of contacts associated with this ticket.
   */
  hs_all_associated_contact_firstnames?: string[];
  /**
   * Hs All Associated Contact Lastnames
   * @description System-populated list of last names of contacts associated with this ticket.
   */
  hs_all_associated_contact_lastnames?: string[];
  /**
   * Hs All Associated Contact Mobilephones
   * @description System-populated list of mobile phone numbers of contacts associated with this ticket.
   */
  hs_all_associated_contact_mobilephones?: string[];
  /**
   * Hs All Associated Contact Phones
   * @description System-populated list of phone numbers of contacts associated with this ticket.
   */
  hs_all_associated_contact_phones?: string[];
  /**
   * Hs All Conversation Mentions
   * @description System-populated list of all mentions in conversations related to this ticket.
   */
  hs_all_conversation_mentions?: string[];
  /**
   * Hs All Owner Ids
   * @description List of all HubSpot owner IDs associated with this ticket; usually managed by HubSpot.
   */
  hs_all_owner_ids?: string[];
  /**
   * Hs All Team Ids
   * @description List of all team IDs associated with this ticket; usually managed by HubSpot.
   */
  hs_all_team_ids?: string[];
  /**
   * Hs Assigned Team Ids
   * @description List of team IDs specifically assigned to this ticket.
   */
  hs_assigned_team_ids?: string[];
  /**
   * Hs Assignment Method
   * @description Method used for assigning the ticket (e.g., 'MANUAL', 'AUTOMATIC_ROUND_ROBIN').
   */
  hs_assignment_method?: string;
  /**
   * Hs Auto Generated From Thread Id
   * @description If auto-generated from a conversation, the ID of the originating thread.
   */
  hs_auto_generated_from_thread_id?: string;
  /**
   * Hs Conversations Originating Message Id
   * @description ID of the first message in the conversation that led to this ticket's creation.
   */
  hs_conversations_originating_message_id?: string;
  /**
   * Hs Conversations Originating Thread Id
   * @description ID of the conversation thread from which this ticket originated.
   */
  hs_conversations_originating_thread_id?: string;
  /**
   * Hs Created By User Id
   * @description HubSpot user ID of the person or system that created this ticket.
   */
  hs_created_by_user_id?: string;
  /**
   * Hs Lastcontacted
   * @description Date and time of the last contact associated with this ticket (ISO 8601 format).
   */
  hs_lastcontacted?: string;
  /**
   * Hs Lastmodifieddate
   * @description Date and time this ticket was last modified (ISO 8601 format); HubSpot typically sets this automatically.
   */
  hs_lastmodifieddate?: string;
  /**
   * Hs Pipeline
   * @description ID of the pipeline this ticket belongs to; often a required field.
   */
  hs_pipeline?: string;
  /**
   * Hs Pipeline Stage
   * @description ID of the current stage of the ticket within its pipeline; often required and must belong to the specified `hs_pipeline`.
   */
  hs_pipeline_stage?: string;
  /**
   * Hs Primary Company
   * @description ID of the primary company associated with this ticket.
   */
  hs_primary_company?: string;
  /**
   * Hs Tag Ids
   * @description List of tag IDs associated with the ticket for categorization or filtering.
   */
  hs_tag_ids?: string[];
  /**
   * Hs Ticket Category
   * @description Category of the ticket (e.g., 'Technical Support', 'Billing Inquiry'); values might be HubSpot-defined or custom.
   */
  hs_ticket_category?: string;
  /**
   * Hs Ticket Priority
   * @description Priority of the ticket (e.g., 'HIGH', 'MEDIUM', 'LOW'); values might be HubSpot-defined or custom.
   */
  hs_ticket_priority?: string;
  /**
   * Hubspot Owner Id
   * @description ID of the HubSpot user who owns this ticket.
   */
  hubspot_owner_id?: string;
  /**
   * Hubspot Team Id
   * @description ID of the HubSpot team this ticket is assigned to.
   */
  hubspot_team_id?: string;
  /**
   * Last Engagement Date
   * @description Date and time of the last engagement (e.g., email, call) with this ticket (ISO 8601 format).
   */
  last_engagement_date?: string;
  /**
   * Last Reply Date
   * @description Date and time of the last reply (either from agent or contact) on this ticket (ISO 8601 format).
   */
  last_reply_date?: string;
  /**
   * Notes Last Contacted
   * @description Timestamp of the last contact logged in notes associated with the ticket (ISO 8601 format).
   */
  notes_last_contacted?: string;
  /**
   * Notes Last Updated
   * @description Timestamp of when the notes for this ticket were last updated (ISO 8601 format).
   */
  notes_last_updated?: string;
  /**
   * Notes Next Activity Date
   * @description Timestamp for the next scheduled activity related to this ticket's notes (ISO 8601 format).
   */
  notes_next_activity_date?: string;
  /**
   * Source Type
   * @description Source channel through which the ticket was created (e.g., 'EMAIL', 'CHAT', 'PHONE', 'API').
   */
  source_type?: string;
  /**
   * Subject
   * @description Subject line or title of the ticket; typically a required field.
   */
  subject?: string;
  /**
   * Time To Close
   * @description Time taken to close the ticket, often in milliseconds or ISO 8601 duration (e.g. 'PT2H30M').
   */
  time_to_close?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_TICKET_OBJECT tool output.
 */
type HUBSPOT_CREATE_TICKET_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the properties of the newly created HubSpot ticket, including its ID and all set properties.
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
 * Type of HUBSPOT's HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE tool input.
 */
type HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE_INPUT = {
  /**
   * Domain
   * @description Domain associated with the event, often paired with `utk` for contact event context.
   */
  domain?: string;
  /**
   * Email
   * @description Email for contact-specific events; identifies existing contact, creates new, or changes email (if `objectId` provided).
   */
  email?: string;
  /**
   * Event Template Id
   * @description The unique identifier of the event template, which must exist in HubSpot.
   */
  eventTemplateId?: string;
  /**
   * Id
   * @description Optional unique event identifier; HubSpot auto-generates if omitted. Use `{{uuid}}` for uniqueness if providing an ID.
   */
  id?: string;
  /**
   * Object Id
   * @description Unique identifier of the CRM object (e.g., company, deal) for event association; required for non-contact objects.
   */
  objectId?: string;
  /**
   * Timeline I Frame  Header Label
   * @description Title/header for the modal window displaying iframe content.
   */
  timelineIFrame__headerLabel?: string;
  /**
   * Timeline I Frame  Height
   * @description Height of the iframe modal window (pixels).
   */
  timelineIFrame__height?: number;
  /**
   * Timeline I Frame  Link Label
   * @description Text for the link that opens the iframe modal with more details.
   */
  timelineIFrame__linkLabel?: string;
  /**
   * Timeline I Frame  Url
   * @description URL of content to display in the iframe.
   */
  timelineIFrame__url?: string;
  /**
   * Timeline I Frame  Width
   * @description Width of the iframe modal window (pixels).
   */
  timelineIFrame__width?: number;
  /**
   * Timestamp
   * Format: date-time
   * @description ISO 8601 UTC timestamp of event occurrence; defaults to current time. Determines timeline placement.
   */
  timestamp?: string;
  /**
   * Tokens
   * @description Key-value pairs for populating dynamic content in the event template; keys are token names from the template.
   */
  tokens?: {
      [key: string]: string;
  };
  /**
   * Utk
   * @description HubSpot user token (e.g., from `hubspotutk` cookie) to associate event with a contact; use if contact's email is unknown.
   */
  utk?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE tool output.
 */
type HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_WORKFLOW tool input.
 */
type HUBSPOT_CREATE_WORKFLOW_INPUT = {
  /**
   * Actions
   * @description Action configurations defining workflow steps; each dictionary is an action with settings.
   */
  actions?: {
      [key: string]: unknown;
  }[];
  /**
   * Blocked Dates
   * @description Configurations for dates when workflow actions should not execute.
   */
  blockedDates?: {
      [key: string]: unknown;
  }[];
  /**
   * Can Enroll From Salesforce
   * @description Allow contacts to be enrolled directly from Salesforce.
   * @default false
   */
  canEnrollFromSalesforce: boolean;
  /**
   * Custom Properties
   * @description Custom key-value pairs for organization or tracking.
   */
  customProperties?: {
      [key: string]: string;
  };
  /**
   * Data Sources
   * @description Data source configurations for conditions or personalization.
   */
  dataSources?: {
      [key: string]: unknown;
  }[];
  /**
   * Description
   * @description Explanation of the workflow's purpose and functionality.
   * @default
   */
  description: string;
  /**
   * Enrollment Criteria
   * @description Configuration defining criteria for object enrollment.
   * @default null
   */
  enrollmentCriteria: {
      [key: string]: unknown;
  } | null;
  /**
   * Flow Type
   * @description Category: 'WORKFLOW' for standard, 'ACTION_SET' for reusable action sets.
   * @default WORKFLOW
   * @enum {string}
   */
  flowType: "WORKFLOW" | "ACTION_SET" | "UNKNOWN";
  /**
   * Is Enabled
   * @description Activate workflow upon creation (true) or create disabled (false).
   * @default false
   */
  isEnabled: boolean;
  /**
   * Name
   * @description The unique name for the workflow.
   */
  name?: string;
  /**
   * Object Type Id
   * @description HubSpot internal ID for the object type (e.g., '0-1' for Contacts, '0-2' for Companies).
   * @default 0-1
   */
  objectTypeId: string;
  /**
   * Suppression List Ids
   * @description HubSpot list IDs for contacts to be prevented from enrollment.
   */
  suppressionListIds?: number[];
  /**
   * Time Windows
   * @description Configurations for periods when workflow actions can execute.
   */
  timeWindows?: {
      [key: string]: unknown;
  }[];
  /**
   * Type
   * @description 'CONTACT_FLOW' for contact-based, 'PLATFORM_FLOW' for other object types.
   * @default CONTACT_FLOW
   * @enum {string}
   */
  type: "CONTACT_FLOW" | "PLATFORM_FLOW";
  /**
   * WorkflowUnenrollmentSetting
   * @description Defines if/how objects unenroll from other workflows upon enrolling in this one.
   * @default null
   */
  unEnrollmentSetting: {
      /**
       * Flow Ids
       * @description Workflow IDs for unenrollment if 'type' is 'SELECTIVE'.
       */
      flowIds?: string[];
      /**
       * Type
       * @description Unenrollment behavior: 'ALL' from all other workflows, 'SELECTIVE' from specified workflows.
       * @enum {string}
       */
      type: "ALL" | "SELECTIVE";
  } | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_CREATE_WORKFLOW tool output.
 */
type HUBSPOT_CREATE_WORKFLOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier for the newly created workflow.
       */
      id: string;
      /**
       * Is Enabled
       * @description Indicates whether the created workflow is currently active.
       */
      isEnabled: boolean;
      /**
       * Name
       * @description The name of the created workflow.
       */
      name: string;
      /**
       * Response Data
       * @description The complete JSON response data from the HubSpot API for the created workflow.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description The type of the created workflow (e.g., CONTACT_FLOW).
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
 * Type of HUBSPOT's HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL tool input.
 */
type HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL_INPUT = {
  /**
   * After
   * @description Pagination token from `paging.next.after` of a previous response, used to fetch the subsequent page. Omit for the first page.
   */
  after?: string;
  /**
   * Archived
   * @description Boolean flag to filter contacts by archived status: `true` returns only archived contacts; `false` (default) returns only active (non-archived) contacts.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., "companies", "deals") for which to retrieve associated IDs with each contact.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of contacts to return per page, controlling pagination size (default: 5).
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description List of contact property internal names to include in the response (e.g., "email", "firstname"). If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property internal names for which to retrieve historical values (e.g., "lifecyclestage"). If no history exists for a property, only its current value is returned.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL tool output.
 */
type HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL_OUTPUT = {
  /**
   * Data
   * @description The API response, typically a dictionary including a list of contacts and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS tool input.
 */
type HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS_INPUT = {
  /**
   * Inputs
   * @description A list of marketing campaign identifiers to be archived in batch.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the marketing campaign to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS tool output.
 */
type HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description The response body. Note: This action consistently returns a 204 No Content status, indicating that the response body will be empty.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_A_MARKETING_EMAIL tool input.
 */
type HUBSPOT_DELETE_A_MARKETING_EMAIL_INPUT = {
  /**
   * Archived
   * @description If `true`, archives the email for potential restoration; if `false` or omitted, the email is permanently deleted.
   */
  archived?: boolean;
  /**
   * Email Id
   * @description The unique identifier of the existing marketing email.
   */
  emailId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_A_MARKETING_EMAIL tool output.
 */
type HUBSPOT_DELETE_A_MARKETING_EMAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS tool input.
 */
type HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS_INPUT = {
  /**
   * App Id
   * @description The unique identifier for the calling extension app to be deleted. This ID is assigned by HubSpot when the extension is created.
   */
  appId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS tool output.
 */
type HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Response data from the API. For a successful deletion, this will typically be an empty dictionary, as HubSpot often returns a 204 No Content status for DELETE operations.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_CAMPAIGN tool input.
 */
type HUBSPOT_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) for the marketing campaign to be deleted.
   */
  campaignGuid?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_CAMPAIGN tool output.
 */
type HUBSPOT_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Response data, which will be an empty dictionary as the API returns a 204 No Content status for successful deletions.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE tool input.
 */
type HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_INPUT = {
  /**
   * Id Property
   * @description The HubSpot property name (e.g., 'email') specifying the type of `objectId` used for GDPR deletion of a contact. If omitted, `objectId` is assumed to be the contact's primary unique ID.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description The identifier (e.g., an email address or unique record ID) of the contact to be deleted for GDPR compliance, its type defined by `idProperty`.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE tool output.
 */
type HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_PIPELINE_BY_ID tool input.
 */
type HUBSPOT_DELETE_PIPELINE_BY_ID_INPUT = {
  /**
   * Object Type
   * @description Type of CRM object associated with the pipeline, determining which pipeline category is affected.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Unique identifier of the pipeline to be deleted.
   */
  pipelineId?: string;
  /**
   * Validate Deal Stage Usages Before Delete
   * @description If true (for deal pipelines), HubSpot verifies if any deals use stages from this pipeline before deletion to prevent disruption.
   * @default false
   */
  validateDealStageUsagesBeforeDelete: boolean;
  /**
   * Validate References Before Delete
   * @description If true, HubSpot checks for existing references to this pipeline before deletion to prevent data loss or orphaned records.
   * @default false
   */
  validateReferencesBeforeDelete: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_PIPELINE_BY_ID tool output.
 */
type HUBSPOT_DELETE_PIPELINE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Response data from the API; typically empty for a successful (204 No Content) pipeline deletion.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID tool input.
 */
type HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID_INPUT = {
  /**
   * Object Type
   * @description The CRM object type for the pipeline (e.g., 'deals', 'tickets').
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Identifier of the pipeline (specific to the `objectType`) from which the stage will be deleted.
   */
  pipelineId?: string;
  /**
   * Stage Id
   * @description Identifier of the pipeline stage to be deleted.
   */
  stageId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID tool output.
 */
type HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE tool input.
 */
type HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE_INPUT = {
  /**
   * Archived
   * @description Set to `true` to delete an already archived schema; defaults to `false` for deleting an active schema.
   * @default false
   */
  archived: boolean;
  /**
   * Object Type
   * @description The fully qualified name or object type ID of the custom object schema to be deleted, which must uniquely specify the schema.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE tool output.
 */
type HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain information related to the outcome of the delete operation. HubSpot typically returns a 204 No Content (empty response) for successful deletions.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE tool input.
 */
type HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description The numeric identifier (positive integer) for the target application within which the event template exists. The template specified by `eventTemplateId` must be part of this application.
   */
  appId?: number;
  /**
   * Event Template Id
   * @description The unique identifier for the event template to be deleted. This ID must correspond to an existing template within the specified application. Typically a UUID or a system-generated string.
   */
  eventTemplateId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE tool output.
 */
type HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS tool input.
 */
type HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS_INPUT = {
  /**
   * App Id
   * @description The unique identifier for the video conferencing application whose settings are to be deleted; assigned when the application is created in your HubSpot developer portal.
   */
  appId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS tool output.
 */
type HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain data for errors; typically empty for successful deletions.
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
 * Type of HUBSPOT's HUBSPOT_DELETE_WORKFLOW tool input.
 */
type HUBSPOT_DELETE_WORKFLOW_INPUT = {
  /**
   * Workflow Id
   * @description The unique identifier of the HubSpot workflow to be deleted.
   */
  workflow_id?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_DELETE_WORKFLOW tool output.
 */
type HUBSPOT_DELETE_WORKFLOW_OUTPUT = {
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
 * Type of HUBSPOT's HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID tool input.
 */
type HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to true to include only archived contacts; defaults to false (active contacts).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'companies', 'deals') to include associated object IDs in the response.
   * @default null
   */
  associations: string[] | null;
  /**
   * Contact Id
   * @description Unique internal HubSpot CRM object ID for the contact, which must be valid and existing.
   */
  contactId?: string;
  /**
   * Properties
   * @description Contact property names to include in the response; if omitted, all available properties are returned.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include current and historical values in the response.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID tool output.
 */
type HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot CRM contact, dependent on 'properties', 'propertiesWithHistory', and 'associations' request parameters.
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
 * Type of HUBSPOT's HUBSPOT_FETCH_CONTACT_IDS tool input.
 */
type HUBSPOT_FETCH_CONTACT_IDS_INPUT = {
  /**
   * After
   * @description A pagination cursor. Used to fetch the next set of results. Provide the 'after' value from a previous response to get subsequent pages. Example: NTI1Cg%3D%3D
   */
  after?: string;
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) of the campaign for which to fetch contact IDs.
   */
  campaignGuid?: string;
  /**
   * Contact Type
   * @description The type of contact interaction to filter by. Allowed values: 'contactFirstTouch' (contacts whose first interaction was with this campaign), 'contactLastTouch' (contacts whose last interaction before a key event was with this campaign), 'influencedContacts' (all contacts who interacted with assets of this campaign).
   */
  contactType?: string;
  /**
   * End Date
   * @description The end date for filtering report data, formatted as YYYY-MM-DD. If not provided, defaults to the current date.
   */
  endDate?: string;
  /**
   * Limit
   * @description The maximum number of contact IDs to return in a single request. Default is 100.
   */
  limit?: number;
  /**
   * Start Date
   * @description The start date for filtering report data, formatted as YYYY-MM-DD. If not provided, defaults to 2006-01-01.
   */
  startDate?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_FETCH_CONTACT_IDS tool output.
 */
type HUBSPOT_FETCH_CONTACT_IDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of contact IDs and any relevant pagination details. Typically includes a 'results' key with a list of contact objects/IDs and a 'paging' key for 'next' page cursor.
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
 * Type of HUBSPOT's HUBSPOT_FETCH_IMPORT_ERROR_DETAILS tool input.
 */
type HUBSPOT_FETCH_IMPORT_ERROR_DETAILS_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response's `paging.next.after` property to fetch the next page of error details.
   */
  after?: string;
  /**
   * Import Id
   * @description Identifier of the import operation for which to fetch error details; must correspond to an existing import in HubSpot.
   */
  importId?: number;
  /**
   * Limit
   * @description Maximum number of error records to return per page (e.g., between 1 and a HubSpot-defined maximum of 100).
   */
  limit?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_FETCH_IMPORT_ERROR_DETAILS tool output.
 */
type HUBSPOT_FETCH_IMPORT_ERROR_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Raw API response, typically including a `results` array of import errors and a `paging` object for pagination details.
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
 * Type of HUBSPOT's HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY tool input.
 */
type HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY_INPUT = {
  /**
   * Archived
   * @description Set to `True` to retrieve archived Line Items; `False` (default) retrieves non-archived items.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Optional list of object types (e.g., 'deal') for which to retrieve IDs of associated objects. Ignores non-existent association types.
   */
  associations?: string[];
  /**
   * Id Property
   * @description Name of a unique property (e.g., 'sku') to use as the identifier instead of the HubSpot ID. Must be unique across all Line Items.
   */
  idProperty?: string;
  /**
   * Line Item Id
   * @description The Line Item's unique identifier (HubSpot ID or value of `idProperty` if specified).
   */
  lineItemId?: string;
  /**
   * Properties
   * @description Optional list of property names to return for the Line Item. Non-existent properties are ignored.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Optional list of property names for which to retrieve historical values. Ignores non-existent properties or those without history.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY tool output.
 */
type HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and details of the retrieved Line Item. The structure and content will vary based on the 'properties', 'propertiesWithHistory', and 'associations' requested.
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
 * Type of HUBSPOT's HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID tool input.
 */
type HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID_INPUT = {
  /**
   * App Id
   * @description The unique identifier for an existing calling extension app.
   */
  appId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID tool output.
 */
type HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary of recording settings for the app; structure varies based on the app's configuration.
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
 * Type of HUBSPOT's HUBSPOT_FETCH_REVENUE tool input.
 */
type HUBSPOT_FETCH_REVENUE_INPUT = {
  /**
   * Attribution Model
   * @description Attribution model for revenue calculation; defaults to 'LINEAR' if omitted. Allowed values: 'LINEAR', 'FIRST_INTERACTION', 'LAST_INTERACTION', 'FULL_PATH', 'U_SHAPED', 'W_SHAPED', 'TIME_DECAY', 'J_SHAPED', 'INVERSE_J_SHAPED'.
   */
  attributionModel?: string;
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) for the marketing campaign.
   */
  campaignGuid?: string;
  /**
   * End Date
   * @description End date (YYYY-MM-DD) for filtering report data; defaults to the current date if omitted.
   */
  endDate?: string;
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) for filtering report data; defaults to '2006-01-01' if omitted.
   */
  startDate?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_FETCH_REVENUE tool output.
 */
type HUBSPOT_FETCH_REVENUE_OUTPUT = {
  /**
   * Data
   * @description Revenue attribution report data for the campaign, reflecting specified filters.
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
 * Type of HUBSPOT's HUBSPOT_GDPR_DELETE tool input.
 */
type HUBSPOT_GDPR_DELETE_INPUT = {
  /**
   * Id Property
   * @description Name of the property for the contact's unique identifier (e.g., 'email') if `objectId` is not the HubSpot contact ID; `objectId` must then be this property's value.
   * @default null
   */
  idProperty: string | null;
  /**
   * Object Id
   * @description Unique identifier of the contact to delete. If `idProperty` is set, this is that property's value (e.g., an email address); otherwise, it's the HubSpot contact ID.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GDPR_DELETE tool output.
 */
type HUBSPOT_GDPR_DELETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_ACTIVE_IMPORTS_LIST tool input.
 */
type HUBSPOT_GET_ACTIVE_IMPORTS_LIST_INPUT = {
  /**
   * After
   * @description Cursor for the next page of results, from a previous response's `paging.next.after` property.
   */
  after?: string;
  /**
   * Before
   * @description Cursor for the previous page of results, obtained from a previous response.
   */
  before?: string;
  /**
   * Limit
   * @description Maximum number of import results per page.
   */
  limit?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_ACTIVE_IMPORTS_LIST tool output.
 */
type HUBSPOT_GET_ACTIVE_IMPORTS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_AGGREGATED_STATISTICS tool input.
 */
type HUBSPOT_GET_AGGREGATED_STATISTICS_INPUT = {
  /**
   * Email Ids
   * @description Filter statistics by specific email IDs.
   */
  emailIds?: number[];
  /**
   * End Timestamp
   * @description End of the time range (ISO8601 format); statistics are aggregated for emails sent on or before this time.
   */
  endTimestamp?: string;
  /**
   * Property
   * @description Specific email property to include (e.g., 'subject', 'campaignGuid'); if omitted, all available properties are returned. See HubSpot docs for available properties.
   */
  property?: string;
  /**
   * Start Timestamp
   * @description Start of the time range (ISO8601 format); statistics are aggregated for emails sent on or after this time.
   */
  startTimestamp?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_AGGREGATED_STATISTICS tool output.
 */
type HUBSPOT_GET_AGGREGATED_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Aggregated email statistics, where keys are property names and values are their corresponding aggregated data.
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
 * Type of HUBSPOT's HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS tool input.
 */
type HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS_INPUT = {
  /**
   * Email Ids
   * @description Optional list of specific email IDs to filter results; if omitted, statistics for all emails in the time range are returned.
   */
  emailIds?: number[];
  /**
   * End Timestamp
   * @description End of the time span for statistics (ISO8601 timestamp); must be on or after `startTimestamp`.
   */
  endTimestamp?: string;
  /**
   * Interval
   * @description Time interval for aggregating email statistics, defining data granularity (e.g., YEAR, MONTH, DAY).
   * @enum {string}
   */
  interval?: "YEAR" | "QUARTER" | "MONTH" | "WEEK" | "DAY" | "HOUR" | "QUARTER_HOUR" | "MINUTE" | "SECOND";
  /**
   * Start Timestamp
   * @description Start of the time span for statistics (ISO8601 timestamp).
   */
  startTimestamp?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS tool output.
 */
type HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS_OUTPUT = {
  /**
   * Data
   * @description Aggregated email statistics, where keys are interval start times (e.g., timestamp or date string) and values are metrics for that interval (e.g., email send counts).
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
 * Type of HUBSPOT's HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT tool input.
 */
type HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT_INPUT = {
  /**
   * After
   * @description The cursor token to retrieve the next page of results. This value is obtained from the `paging.next.after` property of a previous paged response.
   */
  after?: string;
  /**
   * Archived
   * @description Specifies whether to include archived emails in the results. Defaults to `false` (archived emails are not returned). Set to `true` to retrieve archived emails.
   */
  archived?: boolean;
  /**
   * Created After
   * @description Filter emails created after this ISO 8601 date-time (e.g., '2023-10-26T00:00:00Z').
   */
  createdAfter?: string;
  /**
   * Created At
   * @description Filter emails created at this exact ISO 8601 date-time (e.g., '2023-10-26T10:30:00Z').
   */
  createdAt?: string;
  /**
   * Created Before
   * @description Filter emails created before this ISO 8601 date-time (e.g., '2023-10-27T00:00:00Z').
   */
  createdBefore?: string;
  /**
   * Include Stats
   * @description If `true`, includes statistics (e.g., open rates, click rates) with each email. Defaults to `false`.
   */
  includeStats?: boolean;
  /**
   * Included Properties
   * @description A list of specific property names to include in the response for each email object. If omitted, a default set of properties is returned. Consult the HubSpot API documentation for available email properties.
   */
  includedProperties?: string[];
  /**
   * Is Published
   * @description Filter emails based on their publication status: `true` for published emails, `false` for draft emails. If omitted, both published and draft emails are returned.
   */
  isPublished?: boolean;
  /**
   * Limit
   * @description The maximum number of emails to return per page. Default is 100, max is 100.
   */
  limit?: number;
  /**
   * Sort
   * @description A list of fields to sort the results by. Valid fields are `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Prefix with '-' for descending order (e.g., '-createdAt'). `createdAt` is the default sort order if unspecified.
   */
  sort?: string[];
  /**
   * Type
   * @description Filter emails by type. Multiple types can be specified. If omitted, emails of all types are returned. See TypeEnm for allowed values.
   * @enum {string}
   */
  type?: "AB_EMAIL" | "BATCH_EMAIL" | "LOCALTIME_EMAIL" | "AUTOMATED_AB_EMAIL" | "BLOG_EMAIL" | "BLOG_EMAIL_CHILD" | "RSS_EMAIL" | "RSS_EMAIL_CHILD" | "RESUBSCRIBE_EMAIL" | "OPTIN_EMAIL" | "OPTIN_FOLLOWUP_EMAIL" | "AUTOMATED_EMAIL" | "FEEDBACK_CES_EMAIL" | "FEEDBACK_CUSTOM_EMAIL" | "FEEDBACK_CUSTOM_SURVEY_EMAIL" | "FEEDBACK_NPS_EMAIL" | "FOLLOWUP_EMAIL" | "LEADFLOW_EMAIL" | "SINGLE_SEND_API" | "MARKETING_SINGLE_SEND_API" | "SMTP_TOKEN" | "TICKET_EMAIL" | "MEMBERSHIP_REGISTRATION_EMAIL" | "MEMBERSHIP_PASSWORD_SAVED_EMAIL" | "MEMBERSHIP_PASSWORD_RESET_EMAIL" | "MEMBERSHIP_EMAIL_VERIFICATION_EMAIL" | "MEMBERSHIP_OTP_LOGIN_EMAIL";
  /**
   * Updated After
   * @description Filter emails last updated after this ISO 8601 date-time (e.g., '2023-10-26T00:00:00Z').
   */
  updatedAfter?: string;
  /**
   * Updated At
   * @description Filter emails last updated at this exact ISO 8601 date-time (e.g., '2023-10-26T12:45:00Z').
   */
  updatedAt?: string;
  /**
   * Updated Before
   * @description Filter emails last updated before this ISO 8601 date-time (e.g., '2023-10-27T00:00:00Z').
   */
  updatedBefore?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT tool output.
 */
type HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response, typically including a 'results' array of marketing emails and a 'paging' object for navigating through results.
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
 * Type of HUBSPOT's HUBSPOT_GET_ALL_WORKFLOWS tool input.
 */
type HUBSPOT_GET_ALL_WORKFLOWS_INPUT = {
  /**
   * Limit
   * @description Maximum number of workflows to retrieve per API call, used for pagination.
   * @default 100
   */
  limit: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_ALL_WORKFLOWS tool output.
 */
type HUBSPOT_GET_ALL_WORKFLOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the HubSpot API, typically including a 'results' key with a list of workflow objects (each with ID, name, type, status) and a 'paging' key if more workflows exist; this action returns a summary.
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
 * Type of HUBSPOT's HUBSPOT_GET_A_PAGE_OF_OWNERS tool input.
 */
type HUBSPOT_GET_A_PAGE_OF_OWNERS_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response to fetch the next page.
   */
  after?: string;
  /**
   * Archived
   * @description Set to `true` for archived owners, or `false` for active owners.
   * @default false
   */
  archived: boolean;
  /**
   * Email
   * @description Filter by a specific email address.
   */
  email?: string;
  /**
   * Limit
   * @description Maximum number of CRM owners per page. Refer to HubSpot's API documentation for current limits.
   * @default 100
   */
  limit: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_A_PAGE_OF_OWNERS tool output.
 */
type HUBSPOT_GET_A_PAGE_OF_OWNERS_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the HubSpot API, typically including 'results' (list of owner objects) and 'paging' details.
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
 * Type of HUBSPOT's HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL tool input.
 */
type HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL_INPUT = {
  /**
   * Email Id
   * @description The unique identifier of the marketing email whose revision is to be fetched.
   */
  emailId?: string;
  /**
   * Revision Id
   * @description The unique identifier of the specific revision of the marketing email to be retrieved.
   */
  revisionId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL tool output.
 */
type HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the comprehensive details of the specified marketing email revision. The exact structure and content of this dictionary will depend on the data stored for the email revision.
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
 * Type of HUBSPOT's HUBSPOT_GET_CAMPAIGN tool input.
 */
type HUBSPOT_GET_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Unique HubSpot identifier for the campaign to retrieve.
   */
  campaignId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_CAMPAIGN tool output.
 */
type HUBSPOT_GET_CAMPAIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_CAMPAIGNS tool input.
 */
type HUBSPOT_GET_CAMPAIGNS_INPUT = {
  /**
   * After
   * @description Pagination token from previous response.
   */
  after?: string;
  /**
   * Limit
   * @description Maximum number of campaigns to return.
   * @default 10
   */
  limit: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_CAMPAIGNS tool output.
 */
type HUBSPOT_GET_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_CAMPAIGN_METRICS tool input.
 */
type HUBSPOT_GET_CAMPAIGN_METRICS_INPUT = {
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) for the marketing campaign for which to retrieve metrics.
   */
  campaignGuid?: string;
  /**
   * End Date
   * @description The end date (YYYY-MM-DD) for filtering report data.
   */
  endDate?: string;
  /**
   * Start Date
   * @description The start date (YYYY-MM-DD) for filtering report data.
   */
  startDate?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_CAMPAIGN_METRICS tool output.
 */
type HUBSPOT_GET_CAMPAIGN_METRICS_OUTPUT = {
  /**
   * Data
   * @description Key attribution metrics for the campaign, such as sessions, new contacts, and influenced contacts, as key-value pairs.
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
 * Type of HUBSPOT's HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL tool input.
 */
type HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL_INPUT = {
  /**
   * Email Id
   * @description The unique identifier of the marketing email. Used to fetch its draft version or, if unavailable, its published version.
   */
  emailId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL tool output.
 */
type HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_EMAILS tool input.
 */
type HUBSPOT_GET_EMAILS_INPUT = {
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Alternate unique identifier property to use.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description List of email identifiers to retrieve.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the email to retrieve.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Email property names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Email property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_EMAILS tool output.
 */
type HUBSPOT_GET_EMAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_IMPORT_RECORD_INFORMATION tool input.
 */
type HUBSPOT_GET_IMPORT_RECORD_INFORMATION_INPUT = {
  /**
   * Import Id
   * @description The unique identifier for the import record to retrieve, typically obtained when an import is initiated or from a list of imports.
   */
  importId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_IMPORT_RECORD_INFORMATION tool output.
 */
type HUBSPOT_GET_IMPORT_RECORD_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing comprehensive details of the specified import record. This includes its current status, progress, any updates made to the record, results, and potential errors encountered during the import process.
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
 * Type of HUBSPOT's HUBSPOT_GET_MARKETING_EMAILS tool input.
 */
type HUBSPOT_GET_MARKETING_EMAILS_INPUT = {
  /**
   * After
   * @description The paging cursor token from a previous response, used to retrieve the next page of results. If not provided, an initial set of results is returned.
   * @default null
   */
  after: string | null;
  /**
   * Created After
   * @description Filters marketing emails created after the specified timestamp. Provide an ISO 8601 date (e.g., YYYY-MM-DD) or a millisecond timestamp.
   * @default null
   */
  createdAfter: string | null;
  /**
   * Created At
   * @description Filters marketing emails by their exact creation timestamp. Provide an ISO 8601 date (e.g., YYYY-MM-DD) or a millisecond timestamp.
   * @default null
   */
  createdAt: string | null;
  /**
   * Limit
   * @description The maximum number of marketing emails to return in a single page.
   * @default 20
   */
  limit: number;
  /**
   * Sort
   * @description A list of fields to sort the results by. By default, results are sorted by 'createdAt' in ascending order. Prepend a field name with a hyphen for descending order (e.g., '-name').
   * @default null
   */
  sort: string[] | null;
  /**
   * Updated At
   * @description Filters marketing emails by their exact last update timestamp. Provide an ISO 8601 date (e.g., YYYY-MM-DD) or a millisecond timestamp.
   * @default null
   */
  updatedAt: string | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_MARKETING_EMAILS tool output.
 */
type HUBSPOT_GET_MARKETING_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the list of marketing email objects and pagination information. The 'results' key holds the list of emails, and the 'paging' key (if present) contains a 'next' object with an 'after' token for fetching subsequent pages.
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
 * Type of HUBSPOT's HUBSPOT_GET_PIPELINE_STAGE_AUDIT tool input.
 */
type HUBSPOT_GET_PIPELINE_STAGE_AUDIT_INPUT = {
  /**
   * Object Type
   * @description The CRM object type (e.g., 'deals', 'tickets') for the pipeline stage.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description The unique identifier of the pipeline containing the stage.
   */
  pipelineId?: string;
  /**
   * Stage Id
   * @description The unique identifier of the pipeline stage.
   */
  stageId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_PIPELINE_STAGE_AUDIT tool output.
 */
type HUBSPOT_GET_PIPELINE_STAGE_AUDIT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing a reverse chronological list of all mutations (changes) that have occurred on the specified pipeline stage.
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
 * Type of HUBSPOT's HUBSPOT_GET_PRODUCT tool input.
 */
type HUBSPOT_GET_PRODUCT_INPUT = {
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types for which to retrieve associated IDs.
   * @default null
   */
  associations: string[] | null;
  /**
   * Product Id
   * @description Unique HubSpot identifier for the product to retrieve.
   */
  productId?: string;
  /**
   * Properties
   * @description Product property names to include in the response.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include historical values.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_PRODUCT tool output.
 */
type HUBSPOT_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot product.
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
 * Type of HUBSPOT's HUBSPOT_GET_PRODUCTS tool input.
 */
type HUBSPOT_GET_PRODUCTS_INPUT = {
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Alternate unique identifier property to use.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description List of product identifiers to retrieve.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the product to retrieve.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Product property names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Product property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_PRODUCTS tool output.
 */
type HUBSPOT_GET_PRODUCTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_QUOTE_BY_ID tool input.
 */
type HUBSPOT_GET_QUOTE_BY_ID_INPUT = {
  /**
   * Archived
   * @description Specifies whether the quote to retrieve is archived (`True`) or active (`False`).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object type names (e.g., 'deals', 'contacts') for which to retrieve IDs of associated objects; fetches linked CRM object IDs. Non-existent association types are ignored.
   */
  associations?: string[];
  /**
   * Id Property
   * @description Internal name of a unique custom property to use as the quote identifier instead of the HubSpot object ID; this property must have unique values across all quotes.
   */
  idProperty?: string;
  /**
   * Properties
   * @description HubSpot property internal names to include in the response; limits data returned and improves performance. Non-existent properties are ignored.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description HubSpot property internal names for which to include historical values; retrieves change history. Non-existent properties or those without history are ignored.
   */
  propertiesWithHistory?: string[];
  /**
   * Quote Id
   * @description Unique identifier of the quote; can be the HubSpot object ID or a custom unique property value if `idProperty` is specified.
   */
  quoteId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_QUOTE_BY_ID tool output.
 */
type HUBSPOT_GET_QUOTE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Dictionary representing the retrieved quote. Keys are property internal names; structure depends on `properties` and `propertiesWithHistory` request parameters. Associated object IDs are nested under an 'associations' key if `associations` were requested.
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
 * Type of HUBSPOT's HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL tool input.
 */
type HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL_INPUT = {
  /**
   * After
   * @description Cursor for the next page of results, typically from `paging.next.after` in a previous response.
   */
  after?: string;
  /**
   * Before
   * @description Cursor for the previous page of results, typically from `paging.prev.before` in a previous response.
   */
  before?: string;
  /**
   * Email Id
   * @description The unique identifier of the marketing email for which revisions are to be fetched.
   */
  emailId?: string;
  /**
   * Limit
   * @description Maximum number of email revisions per page. The API defaults to 100 if this parameter is not provided.
   */
  limit?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL tool output.
 */
type HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description API response data, including `results` (a list of email revision objects, each detailing a historical version's full state; revision ID -1 marks the current version) and `paging` information.
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
 * Type of HUBSPOT's HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP tool input.
 */
type HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP_INPUT = {
  /**
   * App Id
   * @description The ID of the target application for which the event template is being retrieved. This parameter is required and ensures the template lookup is specific to an app integration within HubSpot. The appId must be a valid, existing app ID in your HubSpot account.
   */
  appId?: number;
  /**
   * Event Template Id
   * @description The unique identifier of the event template. This ID is assigned by HubSpot when the template is created. It is required and must be a valid, existing template ID associated with the specified app.
   */
  eventTemplateId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP tool output.
 */
type HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL tool input.
 */
type HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL_INPUT = {
  /**
   * Archived
   * @description Filter by archived status: `true` for archived, `false` for not archived. Omit to retrieve regardless of archived status.
   */
  archived?: boolean;
  /**
   * Email Id
   * @description The unique identifier of the marketing email to retrieve.
   */
  emailId?: string;
  /**
   * Include Stats
   * @description Whether to include performance statistics (e.g., open rates, click-through rates) with the email details.
   */
  includeStats?: boolean;
  /**
   * Included Properties
   * @description Specific marketing email property names to include in the response (e.g., "name", "subject", "createdById"). If omitted, a default set of properties is returned.
   */
  includedProperties?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL tool output.
 */
type HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and details of the retrieved marketing email.
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
 * Type of HUBSPOT's HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL tool input.
 */
type HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL_INPUT = {
  /**
   * Email Id
   * @description The unique identifier of the A/B marketing email. If this ID refers to variation A, the details for variation B will be returned, and vice-versa.
   */
  emailId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL tool output.
 */
type HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Properties and content of the alternate A/B marketing email variation.
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
 * Type of HUBSPOT's HUBSPOT_GET_TICKET tool input.
 */
type HUBSPOT_GET_TICKET_INPUT = {
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types for which to retrieve associated IDs.
   * @default null
   */
  associations: string[] | null;
  /**
   * Properties
   * @description Ticket property names to include in the response.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include historical values.
   * @default null
   */
  propertiesWithHistory: string[] | null;
  /**
   * Ticket Id
   * @description Unique HubSpot identifier for the ticket to retrieve.
   */
  ticketId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_TICKET tool output.
 */
type HUBSPOT_GET_TICKET_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot ticket.
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
 * Type of HUBSPOT's HUBSPOT_GET_TICKETS tool input.
 */
type HUBSPOT_GET_TICKETS_INPUT = {
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Alternate unique identifier property to use.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description List of ticket identifiers to retrieve.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the ticket to retrieve.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Ticket property names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Ticket property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_TICKETS tool output.
 */
type HUBSPOT_GET_TICKETS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_WORKFLOW_BY_ID tool input.
 */
type HUBSPOT_GET_WORKFLOW_BY_ID_INPUT = {
  /**
   * Workflow Id
   * @description The unique identifier of the HubSpot workflow to retrieve. This ID can be found by using the 'Get all workflows' action or from the URL when viewing a workflow in the HubSpot UI.
   */
  workflow_id?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_WORKFLOW_BY_ID tool output.
 */
type HUBSPOT_GET_WORKFLOW_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the complete details of the retrieved workflow, including its metadata, starting conditions, and the sequence of actions (steps).
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
 * Type of HUBSPOT's HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS tool input.
 */
type HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Maximum number of email campaigns to retrieve.
   * @default 100
   */
  limit: number;
  /**
   * Workflow Id
   * @description The unique ID of an existing HubSpot workflow for which to fetch associated email campaigns.
   */
  workflow_id?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS tool output.
 */
type HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response detailing email campaigns for the workflow.
       */
      response_data?: {
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES tool input.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES_INPUT = {
  /**
   * Inputs
   * @description A list of company objects, each specifying the ID of the company to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the company to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES tool output.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the API. Typically, a successful request returns a 204 No Content response if the batch archive was successful.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_CONTACT tool input.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique HubSpot CRM identifier (typically numeric or UUID) for the contact to be archived.
   */
  contactId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_CONTACT tool output.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS tool input.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS_INPUT = {
  /**
   * Inputs
   * @description A list of contact objects, each specifying the ID of the contact to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the contact to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS tool output.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the API. Typically, a successful request to this endpoint returns a 204 No Content response if the batch archive was successful, meaning this field might be empty or not present for successful operations. If there are errors, this field may contain details about them.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_DEALS_INPUT = {
  /**
   * Inputs
   * @description List of deal objects to be archived.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the deal to be archived.
       */
      id: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_ARCHIVE_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_ARCHIVE_DEALS_OUTPUT = {
  /**
   * Data
   * @description Response data from the API.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_CREATE_COMPANIES tool input.
 */
type HUBSPOT_HUBSPOT_CREATE_COMPANIES_INPUT = {
  /**
   * Inputs
   * @description A list of company objects to create. Each object represents one new company with its properties.
   */
  inputs?: {
      /**
       * Properties
       * @description Company properties to set. Keys are HubSpot internal property names (e.g., 'name', 'domain', 'industry'), and values are the data to set.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_CREATE_COMPANIES tool output.
 */
type HUBSPOT_HUBSPOT_CREATE_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description The raw response data from the API detailing the outcome of the batch creation request. This typically includes a list of the created company objects and may also contain information about any errors encountered for companies that failed to create.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_CREATE_CONTACTS tool input.
 */
type HUBSPOT_HUBSPOT_CREATE_CONTACTS_INPUT = {
  /**
   * Inputs
   * @description A list of contact objects to create. Each object represents one new contact with its properties and optional associations.
   */
  inputs?: {
      /**
       * Address
       * @description The contact's street address, including apartment or unit number.
       */
      address?: string;
      /**
       * Annualrevenue
       * @description The annual revenue of the company the contact works for.
       */
      annualrevenue?: string;
      /**
       * Associations
       * @description List of associations to create with other existing HubSpot objects (e.g., companies, deals).
       */
      associations?: {
          /**
           * To
           * @description The target CRM object to associate with the new contact.
           */
          to: {
              /**
               * Id
               * @description The unique identifier of the CRM object (e.g., company ID, deal ID) to which the new contact will be associated.
               */
              id: string;
          };
          /**
           * Types
           * @description A list of association type definitions, specifying the category and type ID for each association.
           */
          types: {
              /**
               * Association Category
               * @description The category of the association. HubSpot-defined associations are default and cannot be deleted. User-defined associations are custom associations created by users. Integrator-defined associations are created by HubSpot integrations.
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description The unique ID of the association type, defining the nature of the link (e.g., contact to company).
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * City
       * @description The city where the contact resides.
       */
      city?: string;
      /**
       * Company
       * @description The name of the company the contact works for.
       */
      company?: string;
      /**
       * Country
       * @description The country where the contact resides.
       */
      country?: string;
      /**
       * Custom Properties
       * @description A dictionary of custom properties to set for the contact. Keys are the internal names of your custom contact properties, and values are the data to set.
       */
      custom_properties?: {
          [key: string]: string;
      };
      /**
       * Email
       * @description The primary email address of the contact. This is a unique identifier for contacts in HubSpot.
       */
      email?: string;
      /**
       * Firstname
       * @description The contact's first name.
       */
      firstname?: string;
      /**
       * Jobtitle
       * @description The contact's job title.
       */
      jobtitle?: string;
      /**
       * Lastname
       * @description The contact's last name.
       */
      lastname?: string;
      /**
       * Lifecyclestage
       * @description The contact's current stage in your sales and marketing funnel.
       */
      lifecyclestage?: string;
      /**
       * Phone
       * @description The contact's primary phone number.
       */
      phone?: string;
      /**
       * State
       * @description The state or region where the contact resides.
       */
      state?: string;
      /**
       * Website
       * @description The URL of the contact's personal or company website.
       */
      website?: string;
      /**
       * Zip
       * @description The contact's postal code or ZIP code.
       */
      zip?: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_CREATE_CONTACTS tool output.
 */
type HUBSPOT_HUBSPOT_CREATE_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description The response from the HubSpot API. This typically includes a 'status' field (e.g., 'COMPLETE'), a 'results' list with details for each created contact, and 'startedAt'/'completedAt' timestamps. If errors occurred, 'errors' may also be present.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_CREATE_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_CREATE_DEALS_INPUT = {
  /**
   * Inputs
   * @description List of deal objects to create, each defining its properties and associations with other CRM objects.
   */
  inputs?: {
      /**
       * Associations
       * @description List of associations for this deal (e.g., with contacts or companies).
       */
      associations: {
          /**
           * To
           * @description Target object (identified by its ID) to associate with the deal.
           */
          to: {
              /**
               * Id
               * @description Unique ID of the target object for association.
               */
              id: string;
          };
          /**
           * Types
           * @description List of association types defining the relationship.
           */
          types: {
              /**
               * Association Category
               * @description Category of the association (HubSpot-defined, user-defined, or integrator-defined).
               * @enum {string}
               */
              associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
              /**
               * Association Type Id
               * @description Unique ID of the association type.
               */
              associationTypeId: number;
          }[];
      }[];
      /**
       * Properties
       * @description Properties for the new deal. `dealname` is typically required.
       */
      properties: {
          /**
           * Amount
           * @description Total monetary value of the deal.
           */
          amount?: string;
          /**
           * Amount In Home Currency
           * @description Read-only: Deal amount in the company's home currency, calculated by HubSpot.
           */
          amount_in_home_currency?: string;
          /**
           * Closed Lost Reason
           * @description Reason why the deal was lost.
           */
          closed_lost_reason?: string;
          /**
           * Closed Won Reason
           * @description Reason why the deal was won.
           */
          closed_won_reason?: string;
          /**
           * Closedate
           * @description Expected or actual close date (e.g., YYYY-MM-DD or Unix timestamp in milliseconds).
           */
          closedate?: string;
          /**
           * Createdate
           * @description Read-only: Date and time the deal was created.
           */
          createdate?: string;
          /**
           * Custom Properties
           * @description Dictionary of custom properties. Keys are internal names, values are the values to set.
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * Days To Close
           * @description Read-only: Number of days between creation and close date, calculated by HubSpot.
           */
          days_to_close?: string;
          /**
           * Deal Currency Code
           * @description ISO 4217 currency code for the deal's amount.
           */
          deal_currency_code?: string;
          /**
           * Dealname
           * @description Name or title of the deal. Typically required for creating a new deal.
           */
          dealname?: string;
          /**
           * Dealstage
           * @description ID or internal name of the current deal stage within a HubSpot pipeline.
           */
          dealstage?: string;
          /**
           * Dealtype
           * @description Type of deal (e.g., 'newbusiness', 'existingbusiness'), typically custom-defined.
           */
          dealtype?: string;
          /**
           * Description
           * @description Brief summary or notes about the deal.
           */
          description?: string;
          /**
           * Engagements Last Meeting Booked
           * @description Read-only: Date of the most recent meeting booked associated with this deal.
           */
          engagements_last_meeting_booked?: string;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description Read-only: HubSpot campaign ID for the last meeting booked.
           */
          engagements_last_meeting_booked_campaign?: string;
          /**
           * Engagements Last Meeting Booked Medium
           * @description Read-only: Medium (e.g., 'EMAIL', 'CALL') of the last meeting booked.
           */
          engagements_last_meeting_booked_medium?: string;
          /**
           * Engagements Last Meeting Booked Source
           * @description Read-only: Source (e.g., 'CRM_UI', 'SALES_TOOLS') of the last meeting booked.
           */
          engagements_last_meeting_booked_source?: string;
          /**
           * Hs Acv
           * @description Annual Contract Value (ACV) of the deal.
           */
          hs_acv?: string;
          /**
           * Hs All Accessible Team Ids
           * @description Read-only: Semicolon-separated list of team IDs with access to this deal.
           */
          hs_all_accessible_team_ids?: string;
          /**
           * Hs All Assigned Business Unit Ids
           * @description Read-only: Semicolon-separated list of assigned business unit IDs (requires Business Units add-on).
           */
          hs_all_assigned_business_unit_ids?: string;
          /**
           * Hs All Owner Ids
           * @description Read-only: Semicolon-separated list of all assigned owner IDs.
           */
          hs_all_owner_ids?: string;
          /**
           * Hs All Team Ids
           * @description Read-only: Semicolon-separated list of all teams assigned as an owner.
           */
          hs_all_team_ids?: string;
          /**
           * Hs Analytics Source
           * @description Read-only: Original source of the associated contact (e.g., 'Organic Search').
           */
          hs_analytics_source?: string;
          /**
           * Hs Arr
           * @description Annual Recurring Revenue (ARR) of the deal.
           */
          hs_arr?: string;
          /**
           * Hs Campaign
           * @description HubSpot campaign ID that led to this deal.
           */
          hs_campaign?: string;
          /**
           * Hs Closed Amount
           * @description Final amount of the deal when closed.
           */
          hs_closed_amount?: string;
          /**
           * Hs Closed Amount In Home Currency
           * @description Read-only: Final closed amount in company's home currency, calculated by HubSpot.
           */
          hs_closed_amount_in_home_currency?: string;
          /**
           * Hs Createdate
           * @description Read-only: Exact date and time the deal was created in HubSpot.
           */
          hs_createdate?: string;
          /**
           * Hs Deal Stage Probability
           * @description Read-only: Win probability for the current deal stage, based on pipeline settings.
           */
          hs_deal_stage_probability?: string;
          /**
           * Hs Forecast Amount
           * @description Weighted amount of the deal ('Amount' * 'Deal Stage Probability') for sales forecasting.
           */
          hs_forecast_amount?: string;
          /**
           * Hs Forecast Probability
           * @description Probability of closing the deal for forecasting; can be manual or stage-based.
           */
          hs_forecast_probability?: string;
          /**
           * Hs Is Closed
           * @description Read-only: Indicates if the deal is closed ('true' or 'false'), derived from `dealstage`.
           */
          hs_is_closed?: string;
          /**
           * Hs Lastmodifieddate
           * @description Read-only: Date and time the deal was last modified.
           */
          hs_lastmodifieddate?: string;
          /**
           * Hs Mrr
           * @description Monthly Recurring Revenue (MRR) of the deal.
           */
          hs_mrr?: string;
          /**
           * Hs Next Step
           * @description Next actionable step for this deal.
           */
          hs_next_step?: string;
          /**
           * Hs Object Id
           * @description Read-only: Unique ID of the deal in HubSpot.
           */
          hs_object_id?: string;
          /**
           * Hs Priority
           * @description Priority of the deal (e.g., 'high', 'medium', 'low').
           */
          hs_priority?: string;
          /**
           * Hs Projected Amount
           * @description Deprecated. Use `hs_forecast_amount` instead. Projected deal amount.
           */
          hs_projected_amount?: string;
          /**
           * Hs Projected Amount In Home Currency
           * @description Deprecated. Projected deal amount in home currency.
           */
          hs_projected_amount_in_home_currency?: string;
          /**
           * Hs Tcv
           * @description Total Contract Value (TCV), including one-time and recurring charges.
           */
          hs_tcv?: string;
          /**
           * Hubspot Owner Id
           * @description ID of the HubSpot user assigned as the deal owner.
           */
          hubspot_owner_id?: string;
          /**
           * Pipeline
           * @description ID or internal name of the sales pipeline this deal belongs to.
           */
          pipeline?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_CREATE_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_CREATE_DEALS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response, including results for each deal creation attempt.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_COMPANY tool input.
 */
type HUBSPOT_HUBSPOT_GET_COMPANY_INPUT = {
  /**
   * Archived
   * @description Set to true to include only archived companies; defaults to false (active companies).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'contacts', 'deals') to include associated object IDs in the response.
   * @default null
   */
  associations: string[] | null;
  /**
   * Company Id
   * @description Unique HubSpot identifier for the company to retrieve.
   */
  companyId?: string;
  /**
   * Properties
   * @description Company property names to include in the response; if omitted, all available properties are returned.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include current and historical values in the response.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_COMPANY tool output.
 */
type HUBSPOT_HUBSPOT_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot company, dependent on 'properties', 'propertiesWithHistory', and 'associations' request parameters.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_CONTACT_IDS tool input.
 */
type HUBSPOT_HUBSPOT_GET_CONTACT_IDS_INPUT = {
  /**
   * After
   * @description A pagination cursor. Used to fetch the next set of results. Provide the 'after' value from a previous response to get subsequent pages. Example: NTI1Cg%3D%3D
   */
  after?: string;
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) of the campaign for which to fetch contact IDs.
   */
  campaignGuid?: string;
  /**
   * Contact Type
   * @description The type of contact interaction to filter by. Allowed values: 'contactFirstTouch' (contacts whose first interaction was with this campaign), 'contactLastTouch' (contacts whose last interaction before a key event was with this campaign), 'influencedContacts' (all contacts who interacted with assets of this campaign).
   */
  contactType?: string;
  /**
   * End Date
   * @description The end date for filtering report data, formatted as YYYY-MM-DD. If not provided, defaults to the current date.
   */
  endDate?: string;
  /**
   * Limit
   * @description The maximum number of contact IDs to return in a single request. Default is 100.
   */
  limit?: number;
  /**
   * Start Date
   * @description The start date for filtering report data, formatted as YYYY-MM-DD. If not provided, defaults to 2006-01-01.
   */
  startDate?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_CONTACT_IDS tool output.
 */
type HUBSPOT_HUBSPOT_GET_CONTACT_IDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of contact IDs and any relevant pagination details. Typically includes a 'results' key with a list of contact objects/IDs and a 'paging' key for 'next' page cursor.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_DEAL tool input.
 */
type HUBSPOT_HUBSPOT_GET_DEAL_INPUT = {
  /**
   * Archived
   * @description Set to true to include only archived deals; defaults to false (active deals).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'contacts', 'companies') for which to retrieve associated IDs.
   * @default null
   */
  associations: string[] | null;
  /**
   * Deal Id
   * @description Unique HubSpot identifier for the deal to retrieve.
   */
  dealId?: string;
  /**
   * Properties
   * @description Deal property names to include in the response; if omitted, all available properties are returned.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include current and historical values in the response.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_DEAL tool output.
 */
type HUBSPOT_HUBSPOT_GET_DEAL_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot deal, dependent on request parameters.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_GET_DEALS_INPUT = {
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Alternate unique identifier property to use for retrieving deals.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description List of deal identifiers to retrieve.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the deal to retrieve.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Deal property names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Deal property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_GET_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_GET_DEALS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING tool input.
 */
type HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING_INPUT = {
  /**
   * After
   * @description Token for fetching the next page; typically the `paging.next.after` value from a previous response.
   */
  after?: string;
  /**
   * Archived
   * @description Set to `true` to retrieve only archived products, `false` for active.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'deal', 'company') for which to retrieve associated IDs; non-existent ones are ignored.
   */
  associations?: string[];
  /**
   * Limit
   * @description Number of products per page (1-100).
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description Specific product property names to include (e.g., 'name', 'price'); non-existent ones are ignored. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Product property names for which to include historical values (e.g., 'price'); may reduce products returned per request due to increased response size.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING tool output.
 */
type HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING_OUTPUT = {
  /**
   * Data
   * @description API response data, typically a dictionary with a list of products and HubSpot pagination information.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_LIST_COMPANIES tool input.
 */
type HUBSPOT_HUBSPOT_LIST_COMPANIES_INPUT = {
  /**
   * After
   * @description Pagination token from `paging.next.after` of a previous response, used to fetch the subsequent page. Omit for the first page.
   */
  after?: string;
  /**
   * Archived
   * @description Boolean flag to filter companies by archived status: `true` returns only archived companies; `false` (default) returns only active companies.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., 'contacts', 'deals') for which to retrieve associated IDs with each company.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of companies to return per page, controlling pagination size (default: 10).
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description List of company property internal names to include in the response (e.g., 'name', 'domain'). If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property internal names for which to retrieve historical values (e.g., 'industry'). If no history exists for a property, only its current value is returned.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_LIST_COMPANIES tool output.
 */
type HUBSPOT_HUBSPOT_LIST_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description The API response, typically a dictionary including a list of companies and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_LIST_CONTACTS tool input.
 */
type HUBSPOT_HUBSPOT_LIST_CONTACTS_INPUT = {
  /**
   * After
   * @description Pagination token from `paging.next.after` of a previous response, used to fetch the subsequent page. Omit for the first page.
   */
  after?: string;
  /**
   * Archived
   * @description Boolean flag to filter contacts by archived status: `true` returns only archived contacts; `false` (default) returns only active (non-archived) contacts.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., "companies", "deals") for which to retrieve associated IDs with each contact.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of contacts to return per page, controlling pagination size (default: 5).
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description List of contact property internal names to include in the response (e.g., "email", "firstname"). If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property internal names for which to retrieve historical values (e.g., "lifecyclestage"). If no history exists for a property, only its current value is returned.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_LIST_CONTACTS tool output.
 */
type HUBSPOT_HUBSPOT_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description The API response, typically a dictionary including a list of contacts and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_LIST_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_LIST_DEALS_INPUT = {
  /**
   * After
   * @description Pagination token from previous response to fetch the subsequent page.
   */
  after?: string;
  /**
   * Archived
   * @description Filter by archived status: true for archived deals, false for active deals.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types for which to retrieve associated IDs.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of deals to return per page (default: 10).
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description List of deal property names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_LIST_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_LIST_DEALS_OUTPUT = {
  /**
   * Data
   * @description The API response including a list of deals and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_MERGE_CONTACTS tool input.
 */
type HUBSPOT_HUBSPOT_MERGE_CONTACTS_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the contact record that will be merged into the primary contact record. This contact will be deleted after the merge.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the contact record that will remain after the merge and will absorb the information from the contact specified by `objectIdToMerge`. The merged contact will retain this ID.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_MERGE_CONTACTS tool output.
 */
type HUBSPOT_HUBSPOT_MERGE_CONTACTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_MERGE_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_MERGE_DEALS_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the deal that will be merged into the primary deal.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the deal that will remain after the merge.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_MERGE_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_MERGE_DEALS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_READ_CONTACT tool input.
 */
type HUBSPOT_HUBSPOT_READ_CONTACT_INPUT = {
  /**
   * Archived
   * @description Set to true to include only archived contacts; defaults to false (active contacts).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'companies', 'deals') to include associated object IDs in the response.
   * @default null
   */
  associations: string[] | null;
  /**
   * Contact Id
   * @description Unique internal HubSpot CRM object ID for the contact, which must be valid and existing.
   */
  contactId?: string;
  /**
   * Properties
   * @description Contact property names to include in the response; if omitted, all available properties are returned.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include current and historical values in the response.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_READ_CONTACT tool output.
 */
type HUBSPOT_HUBSPOT_READ_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot CRM contact, dependent on 'properties', 'propertiesWithHistory', and 'associations' request parameters.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_READ_CONTACTS tool input.
 */
type HUBSPOT_HUBSPOT_READ_CONTACTS_INPUT = {
  /**
   * Archived
   * @description Specifies if only archived contacts should be returned (`true`), or only non-archived contacts (`false`).
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of an alternate unique identifier property to use for retrieving contacts. If specified, the `inputs` objects should provide values for this property instead of the default `id`.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description A list of contact identifiers to retrieve. Each object in the list should contain an `id` (or the `idProperty` if specified) of a contact.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the contact to retrieve.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Contact property names to include in the response; a default set is returned if unspecified.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Contact property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_READ_CONTACTS tool output.
 */
type HUBSPOT_HUBSPOT_READ_CONTACTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_REMOVE_DEAL tool input.
 */
type HUBSPOT_HUBSPOT_REMOVE_DEAL_INPUT = {
  /**
   * Deal Id
   * @description Unique HubSpot identifier for the deal to be removed.
   */
  dealId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_REMOVE_DEAL tool output.
 */
type HUBSPOT_HUBSPOT_REMOVE_DEAL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_SEARCH_COMPANIES tool input.
 */
type HUBSPOT_HUBSPOT_SEARCH_COMPANIES_INPUT = {
  /**
   * After
   * @description Pagination cursor; use `paging.next.after` from a previous response to fetch the next page.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description Custom company property internal names (not in `HubSpotCompanyProperties` enum) to include in the response.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description List of filter groups; filters within a group are ANDed, and multiple groups are ORed.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description List of filter criteria; filters within this list are combined using an AND operator.
       */
      filters: {
          /**
           * High Value
           * @description Upper bound for a range filter; required and used only when `operator` is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description Operator defining the filter's logic; determines which other fields (`value`, `values`, `highValue`) are required.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The HubSpot company property internal name to filter on.
           * @enum {string}
           */
          propertyName: "name" | "domain" | "website" | "description" | "phone" | "email" | "fax" | "address" | "address2" | "city" | "state" | "postal_code" | "country" | "industry" | "annualrevenue" | "numberofemployees" | "type" | "year_founded" | "facebook_company_page" | "linkedin_company_page" | "twitter_handle" | "hubspot_owner_id" | "hs_lead_status" | "lifecyclestage" | "createdate" | "hs_lastmodifieddate" | "hs_created_by_user_id" | "hs_updated_by_user_id" | "total_money_raised" | "founded_year" | "is_public" | "timezone" | "hs_ideal_customer_profile" | "hs_parent_company_id" | "first_contact_createdate" | "recent_deal_amount" | "total_revenue" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_analytics_first_visit_timestamp" | "hs_analytics_last_visit_timestamp" | "hs_analytics_num_visits" | "hs_analytics_num_page_views" | "twitterhandle" | "twitterbio" | "twitterfollowers" | "hs_target_account_probability" | "hubspot_team_id" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_all_accessible_team_ids" | "hs_merged_object_ids" | "hs_object_id" | "hs_unique_creation_key";
          /**
           * Value
           * @description Comparison value for `propertyName`; serves as the lower bound when `operator` is `BETWEEN`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description Values for `IN` or `NOT_IN` operators; required and used only when `operator` is `IN` or `NOT_IN`.
           * @default []
           */
          values: string[];
      }[];
  }[];
  /**
   * Limit
   * @description Maximum number of company records to return.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description HubSpot company property internal names to include in the response; a default set is returned if unspecified.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description String to search across default text properties of company records.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description List of sort objects to define the order of results.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The direction of sorting.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The HubSpot company property internal name to sort the results by.
       * @enum {string}
       */
      propertyName: "name" | "domain" | "website" | "description" | "phone" | "email" | "fax" | "address" | "address2" | "city" | "state" | "postal_code" | "country" | "industry" | "annualrevenue" | "numberofemployees" | "type" | "year_founded" | "facebook_company_page" | "linkedin_company_page" | "twitter_handle" | "hubspot_owner_id" | "hs_lead_status" | "lifecyclestage" | "createdate" | "hs_lastmodifieddate" | "hs_created_by_user_id" | "hs_updated_by_user_id" | "total_money_raised" | "founded_year" | "is_public" | "timezone" | "hs_ideal_customer_profile" | "hs_parent_company_id" | "first_contact_createdate" | "recent_deal_amount" | "total_revenue" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_analytics_first_visit_timestamp" | "hs_analytics_last_visit_timestamp" | "hs_analytics_num_visits" | "hs_analytics_num_page_views" | "twitterhandle" | "twitterbio" | "twitterfollowers" | "hs_target_account_probability" | "hubspot_team_id" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_all_accessible_team_ids" | "hs_merged_object_ids" | "hs_object_id" | "hs_unique_creation_key";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_SEARCH_COMPANIES tool output.
 */
type HUBSPOT_HUBSPOT_SEARCH_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Search results from the HubSpot API, including company objects and pagination information.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_SEARCH_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_SEARCH_DEALS_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response's `paging.next.after` to fetch the next page; omit for the first page.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description User-defined custom property internal names (not standard HubSpot properties) to include in the response.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description Filter groups to apply to the search. Filters within a group are ANDed; groups are ORed.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description Filter criteria to apply within this group.
       */
      filters: {
          /**
           * High Value
           * @description Higher bound value for a property, used only when operator is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description Comparison operator defining how the property's value is compared against `value`, `values`, or `highValue`.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description Internal name of the HubSpot deal property to filter on.
           * @enum {string}
           */
          propertyName: "amount" | "amount_in_home_currency" | "closed_lost_reason" | "closed_won_reason" | "closedate" | "createdate" | "days_to_close" | "deal_currency_code" | "dealname" | "dealstage" | "dealtype" | "description" | "engagements_last_meeting_booked" | "engagements_last_meeting_booked_campaign" | "engagements_last_meeting_booked_medium" | "engagements_last_meeting_booked_source" | "hs_acv" | "hs_all_accessible_team_ids" | "hs_all_assigned_business_unit_ids" | "hs_all_collaborator_owner_ids" | "hs_all_deal_split_owner_ids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_analytics_latest_source" | "hs_analytics_latest_source_company" | "hs_analytics_latest_source_contact" | "hs_analytics_latest_source_data_1" | "hs_analytics_latest_source_data_1_company" | "hs_analytics_latest_source_data_1_contact" | "hs_analytics_latest_source_data_2" | "hs_analytics_latest_source_data_2_company" | "hs_analytics_latest_source_data_2_contact" | "hs_analytics_latest_source_timestamp" | "hs_analytics_latest_source_timestamp_company" | "hs_analytics_latest_source_timestamp_contact" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_arr" | "hs_associated_deal_registration_deal_type" | "hs_associated_deal_registration_product_interests" | "hs_campaign" | "hs_closed_amount" | "hs_closed_amount_in_home_currency" | "hs_closed_deal_close_date" | "hs_closed_deal_create_date" | "hs_closed_won_count" | "hs_closed_won_date" | "hs_created_by_user_id" | "hs_createdate" | "hs_date_entered_appointmentscheduled" | "hs_date_entered_closedlost" | "hs_date_entered_closedwon" | "hs_date_entered_contractsent" | "hs_date_entered_decisionmakerboughtin" | "hs_date_entered_presentationscheduled" | "hs_date_entered_qualifiedtobuy" | "hs_date_exited_appointmentscheduled" | "hs_date_exited_closedlost" | "hs_date_exited_closedwon" | "hs_date_exited_contractsent" | "hs_date_exited_decisionmakerboughtin" | "hs_date_exited_presentationscheduled" | "hs_date_exited_qualifiedtobuy" | "hs_days_to_close_raw" | "hs_deal_amount_calculation_preference" | "hs_deal_registration_mrr" | "hs_deal_registration_mrr_currency_code" | "hs_deal_score" | "hs_deal_stage_probability" | "hs_deal_stage_probability_shadow" | "hs_exchange_rate" | "hs_forecast_amount" | "hs_forecast_probability" | "hs_has_empty_conditional_stage_properties" | "hs_is_active_shared_deal" | "hs_is_closed" | "hs_is_closed_count" | "hs_is_closed_lost" | "hs_is_closed_won" | "hs_is_deal_split" | "hs_is_in_first_deal_stage" | "hs_is_open_count" | "hs_lastmodifieddate" | "hs_latest_approval_status" | "hs_latest_approval_status_approval_id" | "hs_latest_meeting_activity" | "hs_likelihood_to_close" | "hs_line_item_global_term_hs_discount_percentage" | "hs_line_item_global_term_hs_discount_percentage_enabled" | "hs_line_item_global_term_hs_recurring_billing_period" | "hs_line_item_global_term_hs_recurring_billing_period_enabled" | "hs_line_item_global_term_hs_recurring_billing_start_date" | "hs_line_item_global_term_hs_recurring_billing_start_date_enabled" | "hs_line_item_global_term_recurringbillingfrequency" | "hs_line_item_global_term_recurringbillingfrequency_enabled" | "hs_manual_forecast_category" | "hs_merged_object_ids" | "hs_mrr" | "hs_next_step" | "hs_next_step_updated_at" | "hs_notes_last_activity" | "hs_notes_next_activity" | "hs_notes_next_activity_type" | "hs_num_associated_active_deal_registrations" | "hs_num_associated_deal_registrations" | "hs_num_associated_deal_splits" | "hs_num_of_associated_line_items" | "hs_num_target_accounts" | "hs_object_id" | "hs_object_source" | "hs_object_source_detail_1" | "hs_object_source_detail_2" | "hs_object_source_detail_3" | "hs_object_source_id" | "hs_object_source_label" | "hs_object_source_user_id" | "hs_open_deal_create_date" | "hs_pinned_engagement_id" | "hs_predicted_amount" | "hs_predicted_amount_in_home_currency" | "hs_priority" | "hs_projected_amount" | "hs_projected_amount_in_home_currency" | "hs_read_only" | "hs_sales_email_last_replied" | "hs_shared_team_ids" | "hs_shared_user_ids" | "hs_source_object_id" | "hs_synced_deal_owner_name_and_email" | "hs_tag_ids" | "hs_tcv" | "hs_time_in_appointmentscheduled" | "hs_time_in_closedlost" | "hs_time_in_closedwon" | "hs_time_in_contractsent" | "hs_time_in_decisionmakerboughtin" | "hs_time_in_presentationscheduled" | "hs_time_in_qualifiedtobuy" | "hs_unique_creation_key" | "hs_updated_by_user_id" | "hs_user_ids_of_all_notification_followers" | "hs_user_ids_of_all_notification_unfollowers" | "hs_user_ids_of_all_owners" | "hs_v2_cumulative_time_in_appointmentscheduled" | "hs_v2_cumulative_time_in_closedlost" | "hs_v2_cumulative_time_in_closedwon" | "hs_v2_cumulative_time_in_contractsent" | "hs_v2_cumulative_time_in_decisionmakerboughtin" | "hs_v2_cumulative_time_in_presentationscheduled" | "hs_v2_cumulative_time_in_qualifiedtobuy" | "hs_v2_date_entered_appointmentscheduled" | "hs_v2_date_entered_closedlost" | "hs_v2_date_entered_closedwon" | "hs_v2_date_entered_contractsent" | "hs_v2_date_entered_decisionmakerboughtin" | "hs_v2_date_entered_presentationscheduled" | "hs_v2_date_entered_qualifiedtobuy" | "hs_v2_date_exited_appointmentscheduled" | "hs_v2_date_exited_closedlost" | "hs_v2_date_exited_closedwon" | "hs_v2_date_exited_contractsent" | "hs_v2_date_exited_decisionmakerboughtin" | "hs_v2_date_exited_presentationscheduled" | "hs_v2_date_exited_qualifiedtobuy" | "hs_v2_latest_time_in_appointmentscheduled" | "hs_v2_latest_time_in_closedlost" | "hs_v2_latest_time_in_closedwon" | "hs_v2_latest_time_in_contractsent" | "hs_v2_latest_time_in_decisionmakerboughtin" | "hs_v2_latest_time_in_presentationscheduled" | "hs_v2_latest_time_in_qualifiedtobuy" | "hs_was_imported" | "hubspot_owner_assigneddate" | "hubspot_owner_id" | "hubspot_team_id" | "notes_last_contacted" | "notes_last_updated" | "notes_next_activity_date" | "num_associated_contacts" | "num_contacted_notes" | "num_notes" | "pipeline";
          /**
           * Value
           * @description Value to compare the property against; used for operators other than `BETWEEN`, `IN`, `NOT_IN`, `HAS_PROPERTY`, and `NOT_HAS_PROPERTY`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description Values to match for the property, used only when operator is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description Maximum number of deal records to return.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description Specific HubSpot deal property internal names to include in the response; a default set is returned if omitted.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description String to search across default text properties in deals for records containing this string.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description Sort order for results. If multiple sort objects are provided, they are applied in the given order.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description Direction of sorting.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description Internal name of the HubSpot deal property to sort by.
       * @enum {string}
       */
      propertyName: "amount" | "amount_in_home_currency" | "closed_lost_reason" | "closed_won_reason" | "closedate" | "createdate" | "days_to_close" | "deal_currency_code" | "dealname" | "dealstage" | "dealtype" | "description" | "engagements_last_meeting_booked" | "engagements_last_meeting_booked_campaign" | "engagements_last_meeting_booked_medium" | "engagements_last_meeting_booked_source" | "hs_acv" | "hs_all_accessible_team_ids" | "hs_all_assigned_business_unit_ids" | "hs_all_collaborator_owner_ids" | "hs_all_deal_split_owner_ids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_analytics_latest_source" | "hs_analytics_latest_source_company" | "hs_analytics_latest_source_contact" | "hs_analytics_latest_source_data_1" | "hs_analytics_latest_source_data_1_company" | "hs_analytics_latest_source_data_1_contact" | "hs_analytics_latest_source_data_2" | "hs_analytics_latest_source_data_2_company" | "hs_analytics_latest_source_data_2_contact" | "hs_analytics_latest_source_timestamp" | "hs_analytics_latest_source_timestamp_company" | "hs_analytics_latest_source_timestamp_contact" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_arr" | "hs_associated_deal_registration_deal_type" | "hs_associated_deal_registration_product_interests" | "hs_campaign" | "hs_closed_amount" | "hs_closed_amount_in_home_currency" | "hs_closed_deal_close_date" | "hs_closed_deal_create_date" | "hs_closed_won_count" | "hs_closed_won_date" | "hs_created_by_user_id" | "hs_createdate" | "hs_date_entered_appointmentscheduled" | "hs_date_entered_closedlost" | "hs_date_entered_closedwon" | "hs_date_entered_contractsent" | "hs_date_entered_decisionmakerboughtin" | "hs_date_entered_presentationscheduled" | "hs_date_entered_qualifiedtobuy" | "hs_date_exited_appointmentscheduled" | "hs_date_exited_closedlost" | "hs_date_exited_closedwon" | "hs_date_exited_contractsent" | "hs_date_exited_decisionmakerboughtin" | "hs_date_exited_presentationscheduled" | "hs_date_exited_qualifiedtobuy" | "hs_days_to_close_raw" | "hs_deal_amount_calculation_preference" | "hs_deal_registration_mrr" | "hs_deal_registration_mrr_currency_code" | "hs_deal_score" | "hs_deal_stage_probability" | "hs_deal_stage_probability_shadow" | "hs_exchange_rate" | "hs_forecast_amount" | "hs_forecast_probability" | "hs_has_empty_conditional_stage_properties" | "hs_is_active_shared_deal" | "hs_is_closed" | "hs_is_closed_count" | "hs_is_closed_lost" | "hs_is_closed_won" | "hs_is_deal_split" | "hs_is_in_first_deal_stage" | "hs_is_open_count" | "hs_lastmodifieddate" | "hs_latest_approval_status" | "hs_latest_approval_status_approval_id" | "hs_latest_meeting_activity" | "hs_likelihood_to_close" | "hs_line_item_global_term_hs_discount_percentage" | "hs_line_item_global_term_hs_discount_percentage_enabled" | "hs_line_item_global_term_hs_recurring_billing_period" | "hs_line_item_global_term_hs_recurring_billing_period_enabled" | "hs_line_item_global_term_hs_recurring_billing_start_date" | "hs_line_item_global_term_hs_recurring_billing_start_date_enabled" | "hs_line_item_global_term_recurringbillingfrequency" | "hs_line_item_global_term_recurringbillingfrequency_enabled" | "hs_manual_forecast_category" | "hs_merged_object_ids" | "hs_mrr" | "hs_next_step" | "hs_next_step_updated_at" | "hs_notes_last_activity" | "hs_notes_next_activity" | "hs_notes_next_activity_type" | "hs_num_associated_active_deal_registrations" | "hs_num_associated_deal_registrations" | "hs_num_associated_deal_splits" | "hs_num_of_associated_line_items" | "hs_num_target_accounts" | "hs_object_id" | "hs_object_source" | "hs_object_source_detail_1" | "hs_object_source_detail_2" | "hs_object_source_detail_3" | "hs_object_source_id" | "hs_object_source_label" | "hs_object_source_user_id" | "hs_open_deal_create_date" | "hs_pinned_engagement_id" | "hs_predicted_amount" | "hs_predicted_amount_in_home_currency" | "hs_priority" | "hs_projected_amount" | "hs_projected_amount_in_home_currency" | "hs_read_only" | "hs_sales_email_last_replied" | "hs_shared_team_ids" | "hs_shared_user_ids" | "hs_source_object_id" | "hs_synced_deal_owner_name_and_email" | "hs_tag_ids" | "hs_tcv" | "hs_time_in_appointmentscheduled" | "hs_time_in_closedlost" | "hs_time_in_closedwon" | "hs_time_in_contractsent" | "hs_time_in_decisionmakerboughtin" | "hs_time_in_presentationscheduled" | "hs_time_in_qualifiedtobuy" | "hs_unique_creation_key" | "hs_updated_by_user_id" | "hs_user_ids_of_all_notification_followers" | "hs_user_ids_of_all_notification_unfollowers" | "hs_user_ids_of_all_owners" | "hs_v2_cumulative_time_in_appointmentscheduled" | "hs_v2_cumulative_time_in_closedlost" | "hs_v2_cumulative_time_in_closedwon" | "hs_v2_cumulative_time_in_contractsent" | "hs_v2_cumulative_time_in_decisionmakerboughtin" | "hs_v2_cumulative_time_in_presentationscheduled" | "hs_v2_cumulative_time_in_qualifiedtobuy" | "hs_v2_date_entered_appointmentscheduled" | "hs_v2_date_entered_closedlost" | "hs_v2_date_entered_closedwon" | "hs_v2_date_entered_contractsent" | "hs_v2_date_entered_decisionmakerboughtin" | "hs_v2_date_entered_presentationscheduled" | "hs_v2_date_entered_qualifiedtobuy" | "hs_v2_date_exited_appointmentscheduled" | "hs_v2_date_exited_closedlost" | "hs_v2_date_exited_closedwon" | "hs_v2_date_exited_contractsent" | "hs_v2_date_exited_decisionmakerboughtin" | "hs_v2_date_exited_presentationscheduled" | "hs_v2_date_exited_qualifiedtobuy" | "hs_v2_latest_time_in_appointmentscheduled" | "hs_v2_latest_time_in_closedlost" | "hs_v2_latest_time_in_closedwon" | "hs_v2_latest_time_in_contractsent" | "hs_v2_latest_time_in_decisionmakerboughtin" | "hs_v2_latest_time_in_presentationscheduled" | "hs_v2_latest_time_in_qualifiedtobuy" | "hs_was_imported" | "hubspot_owner_assigneddate" | "hubspot_owner_id" | "hubspot_team_id" | "notes_last_contacted" | "notes_last_updated" | "notes_next_activity_date" | "num_associated_contacts" | "num_contacted_notes" | "num_notes" | "pipeline";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_SEARCH_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_SEARCH_DEALS_OUTPUT = {
  /**
   * Data
   * @description Search results, including a list of matching deals (under 'results' key) and pagination information (under 'paging' key if applicable).
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_COMPANIES tool input.
 */
type HUBSPOT_HUBSPOT_UPDATE_COMPANIES_INPUT = {
  /**
   * Inputs
   * @description List of company update operations, each specifying company 'id' and 'properties' with new values.
   */
  inputs?: {
      /**
       * Id
       * @description The HubSpot Company ID of the company to be updated.
       */
      id: string;
      /**
       * Properties
       * @description Properties to update. Only include changes. Use HubSpot internal property names.
       */
      properties?: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_COMPANIES tool output.
 */
type HUBSPOT_HUBSPOT_UPDATE_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response: includes operation 'status', 'results' list of updated companies, potential 'errors', and timestamps.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_COMPANY tool input.
 */
type HUBSPOT_HUBSPOT_UPDATE_COMPANY_INPUT = {
  /**
   * Company Id
   * @description Unique HubSpot identifier for the company to be updated.
   */
  companyId?: string;
  /**
   * Properties
   * @description Company properties to update. Keys are internal HubSpot property names (e.g., 'name', 'domain'); use an empty string as a value to clear a property. Read-only properties are ignored.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_COMPANY tool output.
 */
type HUBSPOT_HUBSPOT_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description The company object after the update, including all its properties.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_CONTACT tool input.
 */
type HUBSPOT_HUBSPOT_UPDATE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique HubSpot identifier for the contact to be partially updated.
   */
  contactId?: string;
  /**
   * Properties
   * @description Contact properties to update. Keys are internal HubSpot property names (e.g., `firstname`, `email`); use an empty string as a value to clear a property. Read-only properties are ignored.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_CONTACT tool output.
 */
type HUBSPOT_HUBSPOT_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description The contact object after the partial update, including all its properties.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_CONTACTS tool input.
 */
type HUBSPOT_HUBSPOT_UPDATE_CONTACTS_INPUT = {
  /**
   * Inputs
   * @description List of contact update operations, each specifying contact 'id' (VID) and 'properties' with new values.
   */
  inputs?: {
      /**
       * Id
       * @description The VID (HubSpot Contact ID) of the contact to be updated.
       */
      id: string | null;
      /**
       * Properties
       * @description Properties to update. Only include changes. Use HubSpot internal property names.
       * @default null
       */
      properties: {
          /**
           * Address
           * @description Full street address.
           * @default null
           */
          address: string | null;
          /**
           * Annualrevenue
           * @description Annual revenue (numeric value stored as string).
           * @default null
           */
          annualrevenue: string | null;
          /**
           * Associatedcompanyid
           * @description ID of the primary associated company.
           * @default null
           */
          associatedcompanyid: string | null;
          /**
           * Associatedcompanylastupdated
           * @description Timestamp of last update to primary associated company (often Unix milliseconds).
           * @default null
           */
          associatedcompanylastupdated: string | null;
          /**
           * City
           * @description City of residence.
           * @default null
           */
          city: string | null;
          /**
           * Closedate
           * @description Close date of associated deal (YYYY-MM-DD or Unix milliseconds).
           * @default null
           */
          closedate: string | null;
          /**
           * Company
           * @description Company name.
           * @default null
           */
          company: string | null;
          /**
           * Company Size
           * @description Company size (e.g., '1-10 employees', '500+ employees').
           * @default null
           */
          company_size: string | null;
          /**
           * Country
           * @description Country of residence.
           * @default null
           */
          country: string | null;
          /**
           * Createdate
           * @description Record creation date (ISO 8601 or Unix milliseconds).
           * @default null
           */
          createdate: string | null;
          /**
           * Currentlyinworkflow
           * @description Boolean (as string 'true'/'false') indicating if currently in any HubSpot workflow.
           * @default null
           */
          currentlyinworkflow: string | null;
          /**
           * Date Of Birth
           * @description Date of birth (e.g., 'YYYY-MM-DD').
           * @default null
           */
          date_of_birth: string | null;
          /**
           * Days To Close
           * @description Days to close associated deal (numeric value as string).
           * @default null
           */
          days_to_close: string | null;
          /**
           * Degree
           * @description Highest educational degree.
           * @default null
           */
          degree: string | null;
          /**
           * Email
           * @description Primary email address (HubSpot unique identifier by default).
           * @default null
           */
          email: string | null;
          /**
           * Engagements Last Meeting Booked
           * @description Timestamp of last booked meeting (often Unix milliseconds).
           * @default null
           */
          engagements_last_meeting_booked: string | null;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description Campaign GUID for last booked meeting.
           * @default null
           */
          engagements_last_meeting_booked_campaign: string | null;
          /**
           * Engagements Last Meeting Booked Medium
           * @description Medium for last booked meeting (e.g., 'email', 'organic').
           * @default null
           */
          engagements_last_meeting_booked_medium: string | null;
          /**
           * Engagements Last Meeting Booked Source
           * @description Source for last booked meeting (e.g., 'Forms', 'Meetings').
           * @default null
           */
          engagements_last_meeting_booked_source: string | null;
          /**
           * Fax
           * @description Fax number.
           * @default null
           */
          fax: string | null;
          /**
           * Field Of Study
           * @description Primary field of academic study.
           * @default null
           */
          field_of_study: string | null;
          /**
           * First Conversion Date
           * @description Timestamp of first conversion (often Unix milliseconds).
           * @default null
           */
          first_conversion_date: string | null;
          /**
           * First Conversion Event Name
           * @description Event name for first conversion (e.g., form name).
           * @default null
           */
          first_conversion_event_name: string | null;
          /**
           * First Deal Created Date
           * @description Timestamp of first deal creation (often Unix milliseconds).
           * @default null
           */
          first_deal_created_date: string | null;
          /**
           * Firstname
           * @description First name.
           * @default null
           */
          firstname: string | null;
          /**
           * Followercount
           * @description Social media follower count (numeric value as string).
           * @default null
           */
          followercount: string | null;
          /**
           * Gender
           * @description Gender (e.g., 'Male', 'Female', 'Other').
           * @default null
           */
          gender: string | null;
          /**
           * Graduation Date
           * @description Graduation date (e.g., 'YYYY-MM-DD').
           * @default null
           */
          graduation_date: string | null;
          /**
           * Hs Additional Emails
           * @description Semicolon-separated additional email addresses (e.g., 'email1@example.com;email2@example.com').
           * @default null
           */
          hs_additional_emails: string | null;
          /**
           * Hs All Accessible Team Ids
           * @description Semicolon-separated IDs of all teams with access to the contact record.
           * @default null
           */
          hs_all_accessible_team_ids: string | null;
          /**
           * Hs All Assigned Business Unit Ids
           * @description Semicolon-separated IDs of all assigned business units.
           * @default null
           */
          hs_all_assigned_business_unit_ids: string | null;
          /**
           * Hs All Contact Vids
           * @description Semicolon-separated known associated HubSpot contact IDs (VIDs), e.g., if merged.
           * @default null
           */
          hs_all_contact_vids: string | null;
          /**
           * Hs All Owner Ids
           * @description Semicolon-separated IDs of all assigned owners.
           * @default null
           */
          hs_all_owner_ids: string | null;
          /**
           * Hs All Team Ids
           * @description Semicolon-separated IDs of all teams the contact is a member of or assigned to.
           * @default null
           */
          hs_all_team_ids: string | null;
          /**
           * Hs Analytics Average Page Views
           * @description Average page views per session (numeric value as string).
           * @default null
           */
          hs_analytics_average_page_views: string | null;
          /**
           * Hs Analytics First Referrer
           * @description First external referrer URL.
           * @default null
           */
          hs_analytics_first_referrer: string | null;
          /**
           * Hs Analytics First Timestamp
           * @description Timestamp of first interaction with website/tracked assets (often Unix milliseconds).
           * @default null
           */
          hs_analytics_first_timestamp: string | null;
          /**
           * Hs Analytics First Touch Converting Campaign
           * @description GUID of HubSpot campaign for first touch conversion.
           * @default null
           */
          hs_analytics_first_touch_converting_campaign: string | null;
          /**
           * Hs Analytics First Url
           * @description First URL visited on your website.
           * @default null
           */
          hs_analytics_first_url: string | null;
          /**
           * Hs Analytics First Visit Timestamp
           * @description Timestamp of first website visit (often Unix milliseconds).
           * @default null
           */
          hs_analytics_first_visit_timestamp: string | null;
          /**
           * Hs Analytics Last Referrer
           * @description Last external referrer URL before most recent session/conversion.
           * @default null
           */
          hs_analytics_last_referrer: string | null;
          /**
           * Hs Analytics Last Timestamp
           * @description Timestamp of most recent interaction with website/tracked assets (often Unix milliseconds).
           * @default null
           */
          hs_analytics_last_timestamp: string | null;
          /**
           * Hs Analytics Last Touch Converting Campaign
           * @description GUID of HubSpot campaign for last touch conversion.
           * @default null
           */
          hs_analytics_last_touch_converting_campaign: string | null;
          /**
           * Hs Analytics Last Url
           * @description Last URL visited during most recent session.
           * @default null
           */
          hs_analytics_last_url: string | null;
          /**
           * Hs Analytics Last Visit Timestamp
           * @description Timestamp of most recent website visit (often Unix milliseconds).
           * @default null
           */
          hs_analytics_last_visit_timestamp: string | null;
          /**
           * Hs Analytics Num Event Completions
           * @description Total HubSpot marketing events completed (numeric value as string).
           * @default null
           */
          hs_analytics_num_event_completions: string | null;
          /**
           * Hs Analytics Num Page Views
           * @description Total page views across all sessions (numeric value as string).
           * @default null
           */
          hs_analytics_num_page_views: string | null;
          /**
           * Hs Analytics Num Visits
           * @description Total website sessions (visits) (numeric value as string).
           * @default null
           */
          hs_analytics_num_visits: string | null;
          /**
           * Hs Analytics Revenue
           * @description Revenue attributed via HubSpot analytics (numeric value as string).
           * @default null
           */
          hs_analytics_revenue: string | null;
          /**
           * Hs Analytics Source
           * @description Original contact source (e.g., 'Organic Search', 'Paid Social', 'Direct Traffic').
           * @default null
           */
          hs_analytics_source: string | null;
          /**
           * Hs Analytics Source Data 1
           * @description Additional source data (e.g., specific campaign name or search term).
           * @default null
           */
          hs_analytics_source_data_1: string | null;
          /**
           * Hs Analytics Source Data 2
           * @description Further additional source data (e.g., ad group or specific link clicked).
           * @default null
           */
          hs_analytics_source_data_2: string | null;
          /**
           * Hs Lead Status
           * @description Lead status indicating the current state of the lead (e.g., 'NEW', 'OPEN', 'IN_PROGRESS', 'OPEN_DEAL', 'UNQUALIFIED', 'ATTEMPTED_TO_CONTACT', 'CONNECTED', 'BAD_TIMING').
           * @default null
           */
          hs_lead_status: string | null;
          /**
           * Hubspot Owner Assigneddate
           * @description Timestamp of HubSpot owner assignment (often Unix milliseconds).
           * @default null
           */
          hubspot_owner_assigneddate: string | null;
          /**
           * Hubspot Owner Id
           * @description ID of the HubSpot user owning this contact.
           * @default null
           */
          hubspot_owner_id: string | null;
          /**
           * Hubspot Team Id
           * @description ID of the HubSpot team for the contact or owner.
           * @default null
           */
          hubspot_team_id: string | null;
          /**
           * Hubspotscore
           * @description HubSpot lead score (numeric value as string).
           * @default null
           */
          hubspotscore: string | null;
          /**
           * Industry
           * @description Industry of contact or company.
           * @default null
           */
          industry: string | null;
          /**
           * Ip City
           * @description City from IP address (recent interaction).
           * @default null
           */
          ip_city: string | null;
          /**
           * Ip Country
           * @description Country from IP address.
           * @default null
           */
          ip_country: string | null;
          /**
           * Ip Country Code
           * @description Country code from IP address (e.g., 'US', 'GB').
           * @default null
           */
          ip_country_code: string | null;
          /**
           * Ip Latlon
           * @description Approximate latitude,longitude from IP address.
           * @default null
           */
          ip_latlon: string | null;
          /**
           * Ip State
           * @description State/region from IP address.
           * @default null
           */
          ip_state: string | null;
          /**
           * Ip State Code
           * @description State/region code from IP address (e.g., 'CA', 'NY').
           * @default null
           */
          ip_state_code: string | null;
          /**
           * Ip Zipcode
           * @description Postal/ZIP code from IP address.
           * @default null
           */
          ip_zipcode: string | null;
          /**
           * Job Function
           * @description Job function or department (e.g., 'Marketing', 'Sales', 'Engineering').
           * @default null
           */
          job_function: string | null;
          /**
           * Jobtitle
           * @description Job title.
           * @default null
           */
          jobtitle: string | null;
          /**
           * Kloutscoregeneral
           * @description Klout score, if available (numeric value as string).
           * @default null
           */
          kloutscoregeneral: string | null;
          /**
           * Lastmodifieddate
           * @description Record last modification date (ISO 8601 or Unix milliseconds).
           * @default null
           */
          lastmodifieddate: string | null;
          /**
           * Lastname
           * @description Last name.
           * @default null
           */
          lastname: string | null;
          /**
           * Lifecyclestage
           * @description Current marketing/sales funnel stage. Must be a valid lifecycle stage in your HubSpot instance.
           * @default null
           */
          lifecyclestage: string | null;
          /**
           * Linkedinbio
           * @description LinkedIn profile biography.
           * @default null
           */
          linkedinbio: string | null;
          /**
           * Linkedinconnections
           * @description Number of LinkedIn connections (numeric value as string).
           * @default null
           */
          linkedinconnections: string | null;
          /**
           * Marital Status
           * @description Marital status (e.g., 'Single', 'Married').
           * @default null
           */
          marital_status: string | null;
          /**
           * Message
           * @description General message/note, often from form submission.
           * @default null
           */
          message: string | null;
          /**
           * Military Status
           * @description Military status.
           * @default null
           */
          military_status: string | null;
          /**
           * Mobilephone
           * @description Mobile phone number.
           * @default null
           */
          mobilephone: string | null;
          /**
           * Notes Last Contacted
           * @description Timestamp of last logged contact (often Unix milliseconds).
           * @default null
           */
          notes_last_contacted: string | null;
          /**
           * Notes Last Updated
           * @description Timestamp of last note update (often Unix milliseconds).
           * @default null
           */
          notes_last_updated: string | null;
          /**
           * Notes Next Activity Date
           * @description Timestamp of next scheduled activity (often Unix milliseconds).
           * @default null
           */
          notes_next_activity_date: string | null;
          /**
           * Num Associated Deals
           * @description Number of currently associated deals (numeric value as string).
           * @default null
           */
          num_associated_deals: string | null;
          /**
           * Num Contacted Notes
           * @description Number of notes about contacting this contact (numeric value as string).
           * @default null
           */
          num_contacted_notes: string | null;
          /**
           * Num Conversion Events
           * @description Total recorded conversion events (numeric value as string).
           * @default null
           */
          num_conversion_events: string | null;
          /**
           * Num Notes
           * @description Total associated notes (numeric value as string).
           * @default null
           */
          num_notes: string | null;
          /**
           * Num Unique Conversion Events
           * @description Number of unique types of conversion events (numeric value as string).
           * @default null
           */
          num_unique_conversion_events: string | null;
          /**
           * Numemployees
           * @description Number of employees in company (numeric value as string).
           * @default null
           */
          numemployees: string | null;
          /**
           * Owneremail
           * @description Email address of owning HubSpot user.
           * @default null
           */
          owneremail: string | null;
          /**
           * Ownername
           * @description Full name of owning HubSpot user.
           * @default null
           */
          ownername: string | null;
          /**
           * Phone
           * @description Primary phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Photo
           * @description URL to photo/avatar.
           * @default null
           */
          photo: string | null;
          /**
           * Recent Conversion Date
           * @description Timestamp of most recent conversion (often Unix milliseconds).
           * @default null
           */
          recent_conversion_date: string | null;
          /**
           * Recent Conversion Event Name
           * @description Event name for most recent conversion.
           * @default null
           */
          recent_conversion_event_name: string | null;
          /**
           * Recent Deal Amount
           * @description Amount of most recent associated deal (numeric value as string).
           * @default null
           */
          recent_deal_amount: string | null;
          /**
           * Recent Deal Close Date
           * @description Close date of most recent deal (Unix ms or YYYY-MM-DD).
           * @default null
           */
          recent_deal_close_date: string | null;
          /**
           * Relationship Status
           * @description Relationship status (e.g. 'Single', 'In a relationship').
           * @default null
           */
          relationship_status: string | null;
          /**
           * Salutation
           * @description Salutation (e.g., 'Mr.', 'Ms.', 'Dr.').
           * @default null
           */
          salutation: string | null;
          /**
           * School
           * @description School name attended/attending.
           * @default null
           */
          school: string | null;
          /**
           * Seniority
           * @description Seniority level (e.g., 'Entry-level', 'Manager', 'VP').
           * @default null
           */
          seniority: string | null;
          /**
           * Start Date
           * @description Start date (job/program, e.g., 'YYYY-MM-DD').
           * @default null
           */
          start_date: string | null;
          /**
           * State
           * @description State/region of residence.
           * @default null
           */
          state: string | null;
          /**
           * Surveymonkeyeventlastupdated
           * @description Timestamp of last SurveyMonkey event update (often Unix milliseconds).
           * @default null
           */
          surveymonkeyeventlastupdated: string | null;
          /**
           * Total Revenue
           * @description Total revenue from associated deals (numeric value as string).
           * @default null
           */
          total_revenue: string | null;
          /**
           * Twitterbio
           * @description Twitter profile biography.
           * @default null
           */
          twitterbio: string | null;
          /**
           * Twitterhandle
           * @description Twitter username (handle), without '@'.
           * @default null
           */
          twitterhandle: string | null;
          /**
           * Twitterprofilephoto
           * @description URL to Twitter profile photo.
           * @default null
           */
          twitterprofilephoto: string | null;
          /**
           * Webinareventlastupdated
           * @description Timestamp of last webinar platform event update (often Unix milliseconds).
           * @default null
           */
          webinareventlastupdated: string | null;
          /**
           * Website
           * @description Personal or company website URL.
           * @default null
           */
          website: string | null;
          /**
           * Work Email
           * @description Work email address.
           * @default null
           */
          work_email: string | null;
          /**
           * Zip
           * @description Postal/ZIP code of residence.
           * @default null
           */
          zip: string | null;
      } | null;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_CONTACTS tool output.
 */
type HUBSPOT_HUBSPOT_UPDATE_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response: includes operation 'status' (e.g., 'PENDING', 'COMPLETE'), 'results' list of updated contacts, potential 'errors', and 'startedAt'/'completedAt' timestamps.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_DEAL tool input.
 */
type HUBSPOT_HUBSPOT_UPDATE_DEAL_INPUT = {
  /**
   * Deal Id
   * @description Unique HubSpot identifier for the deal to be updated.
   */
  dealId?: string;
  /**
   * Properties
   * @description Deal properties to update. Keys are internal HubSpot property names; use empty string to clear a property.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_DEAL tool output.
 */
type HUBSPOT_HUBSPOT_UPDATE_DEAL_OUTPUT = {
  /**
   * Data
   * @description The deal object after the update, including all its properties.
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
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_DEALS tool input.
 */
type HUBSPOT_HUBSPOT_UPDATE_DEALS_INPUT = {
  /**
   * Inputs
   * @description List of deal update operations.
   */
  inputs?: {
      /**
       * Id
       * @description The HubSpot Deal ID to be updated.
       */
      id: string;
      /**
       * Properties
       * @description Properties to update. Only include changes.
       */
      properties?: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_HUBSPOT_UPDATE_DEALS tool output.
 */
type HUBSPOT_HUBSPOT_UPDATE_DEALS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response with operation status and results.
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
 * Type of HUBSPOT's HUBSPOT_INITIATE_DATA_IMPORT_PROCESS tool input.
 */
type HUBSPOT_INITIATE_DATA_IMPORT_PROCESS_INPUT = {
  /**
   * Files
   * Format: binary
   * @description The binary content of the file(s) to be imported. Supported formats typically include CSV, XLSX, and XLS. Ensure the file structure aligns with the mappings defined in `importRequest`.
   */
  files?: {
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
   * Import Request
   * @description A JSON string specifying the configuration for the import process. This configuration dictates how data from the uploaded file(s) is mapped and imported into HubSpot. Key properties include `name` (a descriptive name for the import, e.g., "Q3 Contact Import"), `dateFormat` (e.g., 'MONTH_DAY_YEAR', 'DAY_MONTH_YEAR'), `importOperations` (defines if the import should create and update, only create, or only update records, e.g., 'CREATE_AND_UPDATE'), and `files` (an array detailing each file, its format, and `columnMappings`). The `columnMappings` are crucial as they map spreadsheet columns to HubSpot CRM object properties (e.g., map 'Email Address' column to 'CONTACT' object's 'email' property).
   */
  importRequest?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_INITIATE_DATA_IMPORT_PROCESS tool output.
 */
type HUBSPOT_INITIATE_DATA_IMPORT_PROCESS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the initiated import process. This typically includes an `id` for the import job, its current `state` (e.g., 'PENDING'), and other relevant metadata from HubSpot.
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
 * Type of HUBSPOT's HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT tool input.
 */
type HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT_INPUT = {
  /**
   * About Us
   * @description Detailed information about the company.
   */
  about_us?: string;
  /**
   * Address
   * @description The company's street address.
   */
  address?: string;
  /**
   * Address2
   * @description Additional address information.
   */
  address2?: string;
  /**
   * Annualrevenue
   * @description The annual revenue of the company.
   */
  annualrevenue?: string;
  /**
   * Associations
   * @description Associations represent the relationships between objects and activities in the HubSpot CRM.
   */
  associations?: {
      /**
       * To  Id
       * @description Id
       */
      to__id?: string;
      /**
       * Types
       * @description Types
       */
      types: {
          /**
           * Association Category
           * @description Associationcategory
           * @enum {string}
           */
          associationCategory: "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED";
          /**
           * Association Type Id
           * @description Associationtypeid
           */
          associationTypeId: number;
      }[];
  }[];
  /**
   * City
   * @description The city where the company is located.
   */
  city?: string;
  /**
   * Country
   * @description The country where the company is located.
   */
  country?: string;
  /**
   * Createdate
   * @description The date when the company record was created.
   */
  createdate?: string;
  /**
   * Custom Properties
   * @description Custom properties of the Contact object to be set. For example {`custom_property_1`: `value for custom property 1`, `custom_property_2`: `value for custom property 2`}.
   */
  custom_properties?: {
      [key: string]: string;
  };
  /**
   * Description
   * @description A brief description of the company.
   */
  description?: string;
  /**
   * Domain
   * @description The company's domain name.
   */
  domain?: string;
  /**
   * Facebook Company Page
   * @description The company's Facebook page URL.
   */
  facebook_company_page?: string;
  /**
   * Founded Year
   * @description The year the company was founded.
   */
  founded_year?: string;
  /**
   * Hs Lastmodifieddate
   * @description The date when the company record was last modified.
   */
  hs_lastmodifieddate?: string;
  /**
   * Hs Lead Status
   * @description The lead status of the company in HubSpot.
   */
  hs_lead_status?: string;
  /**
   * Hs Score
   * @description The HubSpot score of the company.
   */
  hs_score?: string;
  /**
   * Hubspot Owner Id
   * @description The HubSpot owner ID associated with the company.
   */
  hubspot_owner_id?: string;
  /**
   * Industry
   * @description The industry sector of the company.
   */
  industry?: string;
  /**
   * Is Public
   * @description Whether the company is publicly traded.
   */
  is_public?: string;
  /**
   * Lifecyclestage
   * @description The lifecycle stage of the company.
   */
  lifecyclestage?: string;
  /**
   * Linkedin Company Page
   * @description The company's LinkedIn page URL.
   */
  linkedin_company_page?: string;
  /**
   * Name
   * @description The name of the company.
   */
  name?: string;
  /**
   * Notes Last Updated
   * @description The date when the company notes were last updated.
   */
  notes_last_updated?: string;
  /**
   * Numberofemployees
   * @description The number of employees in the company.
   */
  numberofemployees?: string;
  /**
   * Parent Company
   * @description The parent company, if applicable.
   */
  parent_company?: string;
  /**
   * Phone
   * @description The company's phone number.
   */
  phone?: string;
  /**
   * State
   * @description The state or region where the company is located.
   */
  state?: string;
  /**
   * Timezone
   * @description The timezone of the company's primary location.
   */
  timezone?: string;
  /**
   * Twitterhandle
   * @description The company's Twitter handle.
   */
  twitterhandle?: string;
  /**
   * Type
   * @description The type or category of the company.
   */
  type?: string;
  /**
   * Website
   * @description The company's website URL.
   */
  website?: string;
  /**
   * Zip
   * @description The postal or ZIP code of the company.
   */
  zip?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT tool output.
 */
type HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST tool input.
 */
type HUBSPOT_LIST_INPUT = {
  /**
   * After
   * @description Cursor for pagination; use `paging.next.after` from a previous response for the next page.
   */
  after?: string;
  /**
   * Archived
   * @description Set to `True` to retrieve only archived emails, `False` (default) for non-archived emails.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of valid HubSpot CRM object types (e.g., 'contact', 'deal') for which to retrieve associated IDs. If an association type is invalid or doesn't exist for an email, it's ignored for that email.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of email records per page.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description List of valid HubSpot email property names to include. If a requested property doesn't exist on a record, it's omitted from that record's response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of valid HubSpot email property names to retrieve with history. If a requested property doesn't exist, it's ignored.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST tool output.
 */
type HUBSPOT_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP tool input.
 */
type HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP_INPUT = {
  /**
   * App Id
   * @description The unique integer identifier for the target HubSpot application.
   */
  appId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP tool output.
 */
type HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP_OUTPUT = {
  /**
   * Data
   * @description API response, typically including a list of event template objects and potential paging details.
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
 * Type of HUBSPOT's HUBSPOT_LIST_ASSETS tool input.
 */
type HUBSPOT_LIST_ASSETS_INPUT = {
  /**
   * After
   * @description Pagination cursor from 'paging.next.after' of a previous response; results will begin after this cursor.
   */
  after?: string;
  /**
   * Asset Type
   * @description The specific type of asset to retrieve (e.g., BLOG_POST, LANDING_PAGE); only one asset type per request.
   */
  assetType?: string;
  /**
   * Campaign Guid
   * @description Unique identifier (UUID) of an existing marketing campaign whose assets are to be listed.
   */
  campaignGuid?: string;
  /**
   * End Date
   * @description End date (YYYY-MM-DD, inclusive) for asset performance metrics. Metrics are not fetched if `startDate` or `endDate` is missing/invalid.
   */
  endDate?: string;
  /**
   * Limit
   * @description Maximum number of assets to return per response (positive integer).
   */
  limit?: string;
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD, inclusive) for asset performance metrics. Metrics are not fetched if `startDate` or `endDate` is missing/invalid.
   */
  startDate?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_ASSETS tool output.
 */
type HUBSPOT_LIST_ASSETS_OUTPUT = {
  /**
   * Data
   * @description API response dictionary, typically including 'results' (array of asset objects) and 'paging' (pagination details like 'next.after' cursor).
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
 * Type of HUBSPOT's HUBSPOT_LIST_ASSOCIATION_TYPES tool input.
 */
type HUBSPOT_LIST_ASSOCIATION_TYPES_INPUT = {
  /**
   * From Object Type
   * @description The type of the first object in the association (e.g., contact, company, deal).
   */
  fromObjectType?: string;
  /**
   * To Object Type
   * @description The type of the second object in the association (e.g., contact, company, deal).
   */
  toObjectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_ASSOCIATION_TYPES tool output.
 */
type HUBSPOT_LIST_ASSOCIATION_TYPES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results, where keys are typically 'results' holding a list of association types.
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
 * Type of HUBSPOT's HUBSPOT_LIST_CONTACTS_PAGE tool input.
 */
type HUBSPOT_LIST_CONTACTS_PAGE_INPUT = {
  /**
   * After
   * @description Pagination token from `paging.next.after` of a previous response, used to fetch the subsequent page. Omit for the first page.
   */
  after?: string;
  /**
   * Archived
   * @description Boolean flag to filter contacts by archived status: `true` returns only archived contacts; `false` (default) returns only active (non-archived) contacts.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., "companies", "deals") for which to retrieve associated IDs with each contact.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of contacts to return per page, controlling pagination size (default: 5).
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description List of contact property internal names to include in the response (e.g., "email", "firstname"). If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property internal names for which to retrieve historical values (e.g., "lifecyclestage"). If no history exists for a property, only its current value is returned.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_CONTACTS_PAGE tool output.
 */
type HUBSPOT_LIST_CONTACTS_PAGE_OUTPUT = {
  /**
   * Data
   * @description The API response, typically a dictionary including a list of contacts and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE tool input.
 */
type HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE_INPUT = {
  /**
   * After
   * @description The pagination token to retrieve the next page of results. This value is obtained from the `paging.next.after` field of a previous response. If omitted, the first page is returned. Use with `limit` for iterating through large sets of feedback submissions.
   */
  after?: string;
  /**
   * Archived
   * @description Specifies whether to include archived feedback submissions. Set to `True` to retrieve only archived submissions. `False` (default) retrieves only active (non-archived) submissions. Useful for accessing historical or managing archived feedback.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., `contact`, `survey`, `ticket`) for which to retrieve associated IDs. This allows fetching IDs of related objects. If an association doesn't exist for a submission, it's ignored.
   */
  associations?: string[];
  /**
   * Limit
   * @description The maximum number of feedback submissions to return per page. Using smaller values can lead to quicker responses, while larger values reduce the total number of API calls for large datasets.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description List of HubSpot internal property names to include for each feedback submission in the response (e.g., `hs_sentiment`, `hs_survey_name`, `hs_content`). If specified, only these properties are returned. If a property doesn't exist for a submission, it's ignored. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of HubSpot internal property names for which to include historical values. The response includes both current and past values for these properties. Requesting history may affect the number of submissions returned per page due to increased response size.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE tool output.
 */
type HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the HubSpot API, typically including a `results` field (list of feedback submission objects) and a `paging` field (pagination tokens).
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
 * Type of HUBSPOT's HUBSPOT_LIST_PAGE_OF_TICKETS tool input.
 */
type HUBSPOT_LIST_PAGE_OF_TICKETS_INPUT = {
  /**
   * After
   * @description Cursor token from `paging.next.after` of a previous response to get the next page of results.
   */
  after?: string;
  /**
   * Archived
   * @description Filter tickets by archival status. `true` for archived only, `false` for non-archived only. Cannot retrieve both simultaneously.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., 'contact', 'company') to retrieve associated object IDs for. Includes standard and custom CRM objects; non-existent associations for a ticket are ignored.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of tickets per page (1-100). Controls response data volume.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description List of ticket property internal names to include. Optimizes response by requesting only needed properties; non-existent properties for a ticket are omitted.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of ticket property internal names to include historical values for, showing change history. May increase data load; use judiciously.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_PAGE_OF_TICKETS tool output.
 */
type HUBSPOT_LIST_PAGE_OF_TICKETS_OUTPUT = {
  /**
   * Data
   * @description The raw JSON response from the HubSpot API. This typically includes a `results` key, which is a list of ticket objects, and may include a `paging` key with a `next.after` token for fetching subsequent pages if more results are available.
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
 * Type of HUBSPOT's HUBSPOT_LIST_QUOTES_PAGE tool input.
 */
type HUBSPOT_LIST_QUOTES_PAGE_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response's `paging.next.after` property to fetch the subsequent page. Use the exact token provided by the API; do not modify it.
   */
  after?: string;
  /**
   * Archived
   * @description If true, returns only archived quotes. If false, returns only active (non-archived) quotes.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description A list of object types (e.g., `contacts`, `companies`, `deals`) for which to retrieve IDs of associated records. Non-existent association types or associations for a specific quote are ignored.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of quotes to return per page.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description A list of quote property names to include in the response for each quote (e.g., `hs_title`, `hs_quote_amount`). Non-existent properties for a quote are ignored. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of quote property names for which historical values should be included (e.g., `hs_quote_amount`, `hs_expiration_date`). Using this may reduce the maximum number of quotes returnable per request due to increased data volume.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_QUOTES_PAGE tool output.
 */
type HUBSPOT_LIST_QUOTES_PAGE_OUTPUT = {
  /**
   * Data
   * @description The API response data, typically including a list of quotes and pagination information (`paging`).
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
 * Type of HUBSPOT's HUBSPOT_LIST_TICKETS tool input.
 */
type HUBSPOT_LIST_TICKETS_INPUT = {
  /**
   * After
   * @description Pagination token from previous response.
   */
  after?: string;
  /**
   * Archived
   * @description Filter by archived status.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types for which to retrieve associated IDs.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of tickets to return per page.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description List of ticket property names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_LIST_TICKETS tool output.
 */
type HUBSPOT_LIST_TICKETS_OUTPUT = {
  /**
   * Data
   * @description API response including list of tickets and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_MERGE_EMAILS tool input.
 */
type HUBSPOT_MERGE_EMAILS_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the email that will be merged into the primary email.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the email that will remain after the merge.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_EMAILS tool output.
 */
type HUBSPOT_MERGE_EMAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_PRODUCTS tool input.
 */
type HUBSPOT_MERGE_PRODUCTS_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the product that will be merged into the primary product.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the product that will remain after the merge.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_PRODUCTS tool output.
 */
type HUBSPOT_MERGE_PRODUCTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TICKETS tool input.
 */
type HUBSPOT_MERGE_TICKETS_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the ticket that will be merged into the primary ticket.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the ticket that will remain after the merge.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TICKETS tool output.
 */
type HUBSPOT_MERGE_TICKETS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the company record that will be merged into the primary company record and subsequently deleted.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the company record that will remain as the primary record after the merge, absorbing the information from the other company.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the contact record that will be merged into the primary contact record. This contact will be deleted after the merge.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the contact record that will remain after the merge and will absorb the information from the contact specified by `objectIdToMerge`. The merged contact will retain this ID.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description The unique identifier of the deal to be merged into the `primaryObjectId` deal. This deal will be archived after the merge process is completed.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The unique identifier of the primary deal that will persist after the merge. It will incorporate data from the deal specified by `objectIdToMerge`.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description ID of the email to be merged; it will be deleted after this operation.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description ID of the primary email that absorbs the other and is retained.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS tool input.
 */
type HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS_INPUT = {
  /**
   * Object Id To Merge
   * @description The unique identifier of the feedback submission to be merged into the primary one. This submission will be absorbed and typically archived or deleted after the merge process.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The unique identifier of the feedback submission that will remain as the primary record after the merge. It will contain the combined information from both submissions.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS tool output.
 */
type HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the merged feedback submission object, including its properties and values after the merge.
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
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the line item that will be merged into the primary line item. This line item will be absorbed and will no longer exist as a separate entity after the merge.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the primary line item that will remain after the merge. Its record will be updated with data from the line item specified by `objectIdToMerge`.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the properties of the merged primary line item after the merge operation.
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
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description ID of the object to be merged into the primary object and subsequently deleted.
   */
  objectIdToMerge?: string;
  /**
   * Object Type
   * @description The CRM object type (e.g., 'contacts', 'companies') of the two records to merge. Must be a valid object type in your HubSpot account.
   */
  objectType?: string;
  /**
   * Primary Object Id
   * @description ID of the object that will remain after the merge, into which data from `objectIdToMerge` is consolidated.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description The ID of the product record to be merged into the primary product record. This product record will be archived or deleted after a successful merge.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The ID of the product record that will remain after the merge and into which data from `objectIdToMerge` will be consolidated.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and details of the merged product, reflecting the state of the `primaryObjectId` product after consolidation.
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
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description The unique identifier of the quote to be merged into the primary quote. This quote will be archived after the merge.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description The unique identifier of the quote that will remain after the merge and will be updated with information from the other quote. Its properties take precedence in case of conflicts.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE tool input.
 */
type HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE_INPUT = {
  /**
   * Object Id To Merge
   * @description ID of the ticket to merge into the primary ticket; this ticket will be deactivated.
   */
  objectIdToMerge?: string;
  /**
   * Primary Object Id
   * @description ID of the primary ticket that remains active and absorbs the other ticket's information.
   */
  primaryObjectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE tool output.
 */
type HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE_OUTPUT = {
  /**
   * Data
   * @description Details of the merged ticket.
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
 * Type of HUBSPOT's HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS tool input.
 */
type HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS_INPUT = {
  /**
   * App Id
   * @description The unique ID of the target app whose calling extension settings are being modified.
   */
  appId?: number;
  /**
   * Height
   * @description Target height (pixels) of the iframe embedding the phone/calling UI.
   */
  height?: number;
  /**
   * Is Ready
   * @description If `true`, the calling service appears as an option under the 'Call' action in contact records.
   */
  isReady?: boolean;
  /**
   * Name
   * @description User-facing display name of the calling service.
   */
  name?: string;
  /**
   * Supports Custom Objects
   * @description Indicates if the calling service is compatible with HubSpot's engagement V2 service and custom objects.
   */
  supportsCustomObjects?: boolean;
  /**
   * Url
   * @description URL to the phone/calling UI, which should be built using the HubSpot Calling SDK.
   */
  url?: string;
  /**
   * Width
   * @description Target width (pixels) of the iframe embedding the phone/calling UI.
   */
  width?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS tool output.
 */
type HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the updated settings of the calling extension.
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
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID tool input.
 */
type HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID_INPUT = {
  /**
   * Contact Id
   * @description Unique HubSpot identifier for the contact to be partially updated.
   */
  contactId?: string;
  /**
   * Properties
   * @description Contact properties to update. Keys are internal HubSpot property names (e.g., `firstname`, `email`); use an empty string as a value to clear a property. Read-only properties are ignored.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID tool output.
 */
type HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID_OUTPUT = {
  /**
   * Data
   * @description The contact object after the partial update, including all its properties.
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
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID tool input.
 */
type HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID_INPUT = {
  /**
   * Id Property
   * @description Name of a unique property (e.g., 'email' for contacts) to use for identifying the object instead of its internal ID. If set, `objectId` should be the value of this property.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description Unique identifier of the CRM object. If `idProperty` is specified, this is the value of that unique property; otherwise, it's the internal object ID.
   */
  objectId?: string;
  /**
   * Object Type
   * @description Type of the CRM object to be updated.
   */
  objectType?: string;
  /**
   * Properties
   * @description Dictionary of properties to update. Keys are internal property names (e.g., 'firstname', 'dealstage'), and values are their new values.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID tool output.
 */
type HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Properties of the updated CRM object.
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
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID tool input.
 */
type HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID_INPUT = {
  /**
   * Deal Id
   * @description Unique identifier of the deal. Defaults to HubSpot object ID; use value of custom property if `idProperty` is specified.
   */
  dealId?: string;
  /**
   * Id Property
   * @description Name of a custom unique property (e.g., 'deal_external_id') to identify the deal if not using the default HubSpot object ID.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Dictionary of properties to update. Keys are HubSpot internal property names (e.g., 'dealname', 'amount'), values are new string values. Only specified properties are updated; others remain unchanged.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID tool output.
 */
type HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID_OUTPUT = {
  /**
   * Data
   * @description The updated deal object, reflecting all its properties after the partial update.
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
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID tool input.
 */
type HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID_INPUT = {
  /**
   * Archived
   * @description To restore an archived pipeline, set to `false`. Other uses (e.g., archiving an active pipeline or setting `false` for an already active one) will result in a `400 Bad Request`.
   */
  archived?: boolean;
  /**
   * Display Order
   * @description Display order for the pipeline. Pipelines with the same order are sorted alphabetically by label.
   */
  displayOrder?: number;
  /**
   * Label
   * @description Unique label for the pipeline for UI organization.
   */
  label?: string;
  /**
   * Object Type
   * @description Type of CRM object the pipeline is associated with (e.g., 'deals', 'tickets').
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Unique identifier of the pipeline to update.
   */
  pipelineId?: string;
  /**
   * Validate Deal Stage Usages Before Delete
   * @description For deal pipelines only: if `true`, check if any deals use stages affected by the update.
   * @default false
   */
  validateDealStageUsagesBeforeDelete: boolean;
  /**
   * Validate References Before Delete
   * @description If `true`, verify existing references to pipeline stages before updates that could delete or alter them.
   * @default false
   */
  validateReferencesBeforeDelete: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID tool output.
 */
type HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP tool input.
 */
type HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP_INPUT = {
  /**
   * Display Order
   * @description Order for displaying the property group: lowest positive integer first, -1 places it after positive values. If omitted, the current order is unchanged.
   */
  displayOrder?: number;
  /**
   * Group Name
   * @description The unique, case-sensitive internal name of the existing property group to be updated for the specified `objectType`.
   */
  groupName?: string;
  /**
   * Label
   * @description Human-readable label for the property group in the UI. If omitted, the current label is unchanged.
   */
  label?: string;
  /**
   * Object Type
   * @description The CRM object type (e.g., "contacts", "companies") for which the property group is updated; must be a valid HubSpot CRM object type.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP tool output.
 */
type HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the updated property group.
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
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID tool input.
 */
type HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID_INPUT = {
  /**
   * Id Property
   * @description Internal name of a custom unique property used to identify the ticket if `ticketId` is not the HubSpot object ID. If omitted, `ticketId` is treated as the HubSpot object ID.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Dictionary of ticket properties to update (internal name: new value). Only provided properties are changed. To clear a property's value, use an empty string.
   */
  properties?: {
      [key: string]: string;
  };
  /**
   * Ticket Id
   * @description Unique identifier of the ticket to be updated; can be the HubSpot object ID or a custom unique property value if `idProperty` is specified.
   */
  ticketId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID tool output.
 */
type HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID tool input.
 */
type HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID_INPUT = {
  /**
   * Company Id
   * @description The unique identifier for the company to be updated. By default, this is the HubSpot internal object ID. If `idProperty` is specified, this `companyId` should be the value of that unique property (e.g., a domain name if `idProperty` is 'domain').
   */
  companyId?: string;
  /**
   * Id Property
   * @description Optional. The name of a unique property used to identify the company instead of its internal HubSpot ID. If provided, `companyId` must be the value of this property. Common examples include 'domain' or a custom unique ID field.
   */
  idProperty?: string;
  /**
   * Properties
   * @description A dictionary of properties to update on the company. Keys are the internal names of the HubSpot company properties (e.g., 'name', 'website', 'city'), and values are the new values for these properties. To clear a property's value, provide an empty string as its value. Read-only properties or properties that do not exist will be ignored.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID tool output.
 */
type HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the state of the company object after the partial update. This will include all properties of the company, reflecting the changes made.
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
 * Type of HUBSPOT's HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID tool input.
 */
type HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID_INPUT = {
  /**
   * Id Property
   * @description Optional. Name of a unique quote property. If provided, `quoteId` is interpreted as this property's value, not the internal object ID.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Properties to update on the quote (internal property names to new values). Only included properties will be updated.
   */
  properties?: {
      [key: string]: string;
  };
  /**
   * Quote Id
   * @description Unique identifier of the quote. Typically an internal HubSpot object ID, or a unique property value if `idProperty` is specified.
   */
  quoteId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID tool output.
 */
type HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID_OUTPUT = {
  /**
   * Data
   * @description Contains the updated quote object's properties.
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
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE_INPUT = {
  /**
   * Id Property
   * @description Optional name of an alternate unique identifier property. If provided, objectId must be the value of this property for the company.
   * @default null
   */
  idProperty: string | null;
  /**
   * Object Id
   * @description The unique identifier of the company to be permanently deleted. If `idProperty` is specified, this is the value of that custom unique property. Otherwise, this is the company's HubSpot Company ID.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the API response; may be empty or not present for successful GDPR deletions (typically a 204 No Content status).
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
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_INPUT = {
  /**
   * Id Property
   * @description Specifies the type of identifier provided in `objectId`. For instance, use 'email' if `objectId` is an email address. This field is optional and can be omitted if `objectId` refers to the HubSpot contact ID (VID).
   * @default null
   */
  idProperty: string | null;
  /**
   * Object Id
   * @description The unique identifier of the contact to be permanently deleted. This can be the HubSpot contact ID (VID), or if `idProperty` is specified, it can be another unique property like an email address.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_OUTPUT = {
  /**
   * Data
   * @description Contains data returned by the API. Note: A successful GDPR deletion typically results in an HTTP 204 No Content response, in which case this field might be empty or unpopulated.
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
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_INPUT = {
  /**
   * Id Property
   * @description Identifies `objectId` type: 'email' for email address, or null/omitted for HubSpot ID. 'email' is primary.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description The contact's identifier (email or HubSpot ID, based on `idProperty`) for permanent deletion.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_OUTPUT = {
  /**
   * Data
   * @description A dictionary which may contain data returned by the API. For successful GDPR deletions, this might be empty or contain a status confirmation.
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
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE_INPUT = {
  /**
   * Id Property
   * @description Name of the HubSpot quote property to use for quote identification if `objectId` is not the primary HubSpot ID. If omitted, `objectId` is assumed to be the primary HubSpot ID.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description Unique identifier of the quote to be permanently deleted. This is the quote's HubSpot object ID, unless `idProperty` specifies an alternative unique identifying property.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR_INPUT = {
  /**
   * Id Property
   * @description The name of the property that contains the unique identifier of the contact specified in `objectId`. For example, if `objectId` is an email address, set this to 'email'. If `objectId` is the HubSpot contact ID, this field can be omitted or set to 'hs_object_id'.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description The unique identifier of the contact to be permanently deleted. This could be the contact's HubSpot ID or another unique property value (e.g., email address) if `idProperty` is specified.
   */
  objectId?: string;
  /**
   * Object Type
   * @description The type of HubSpot object to be deleted. Must be 'contacts' for this GDPR deletion endpoint. This parameter is part of the URL path.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data from the response, if any. Typically, a successful GDPR deletion returns no content.
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
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE_INPUT = {
  /**
   * Id Property
   * @description The HubSpot deal property name that `objectId` refers to (e.g., 'email'); if omitted, `objectId` is the deal's unique ID.
   * @default null
   */
  idProperty: string | null;
  /**
   * Object Id
   * @description Identifier of the deal to be deleted. If `idProperty` is specified, this is the value of that property; otherwise, it's the deal's unique HubSpot ID.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE_OUTPUT = {
  /**
   * Data
   * @description API response; empty on success, or may contain details if an identifier was blocklisted when a deal was not found using `idProperty`.
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
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT_INPUT = {
  /**
   * Id Property
   * @description The contact property name to be used as its unique identifier. If not provided, HubSpot will use its default unique identifier for contacts.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description Value of the contact's unique identifier for permanent deletion. Must correspond to `idProperty` if specified, or to HubSpot's default unique identifier if `idProperty` is omitted.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR tool input.
 */
type HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR_INPUT = {
  /**
   * Id Property
   * @description The name of the property that uniquely identifies the line item, if `objectId` is not its primary HubSpot ID. For example, 'external_id'. If omitted, `objectId` is assumed to be the line item's primary HubSpot ID.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description The value of the unique identifier for the line item to be permanently deleted. This corresponds to the property named in `idProperty`, or the line item's primary HubSpot ID if `idProperty` is not provided.
   */
  objectId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR tool output.
 */
type HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR_OUTPUT = {
  /**
   * Data
   * @description A dictionary which may contain details from the GDPR deletion attempt. For successful deletions that return an HTTP 204 (No Content) status, this field might be empty or not applicable.
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
 * Type of HUBSPOT's HUBSPOT_PUBLISH_MARKETING_EMAIL tool input.
 */
type HUBSPOT_PUBLISH_MARKETING_EMAIL_INPUT = {
  /**
   * Email Id
   * @description Identifier of the HubSpot marketing email to publish or send.
   */
  email_id?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PUBLISH_MARKETING_EMAIL tool output.
 */
type HUBSPOT_PUBLISH_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API JSON response detailing the outcome of the publish/send operation.
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
 * Type of HUBSPOT's HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE tool input.
 */
type HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE_INPUT = {
  /**
   * Object Type
   * @description The specific object type (e.g., 'contacts', 'companies', or a custom object ID) for which the schema will be permanently deleted. Must be an exact, case-sensitive match to a valid object type defined in HubSpot.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE tool output.
 */
type HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data returned by the API as a result of the purge operation. This may be empty if the API returns no content upon successful execution (e.g., an HTTP 204 status).
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
 * Type of HUBSPOT's HUBSPOT_READ tool input.
 */
type HUBSPOT_READ_INPUT = {
  /**
   * Archived
   * @description Set to true to retrieve only archived email objects.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'contact', 'company') for associated IDs; non-existent associations are ignored.
   */
  associations?: string[];
  /**
   * Email Id
   * @description Unique identifier of the email, typically the internal HubSpot object ID.
   */
  emailId?: string;
  /**
   * Id Property
   * @description Name of an alternative unique property to identify the email if not using `emailId`.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Specific email properties to include; non-existent properties are ignored.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Email properties for which to retrieve historical values; non-existent properties are ignored.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ tool output.
 */
type HUBSPOT_READ_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_ALL_PROPERTIES tool input.
 */
type HUBSPOT_READ_ALL_PROPERTIES_INPUT = {
  /**
   * Archived
   * @description Filter properties by their archived status: `true` for archived, `false` for active (non-archived).
   * @default false
   */
  archived: boolean;
  /**
   * Object Type
   * @description Identifier for the CRM object type (e.g., 'contacts', 'companies'). Must be a valid, case-sensitive object type name existing in HubSpot.
   */
  objectType?: string;
  /**
   * Properties
   * @description Comma-separated string of specific property names to return. If omitted, all properties for the object type are returned.
   */
  properties?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_ALL_PROPERTIES tool output.
 */
type HUBSPOT_READ_ALL_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Dictionary of property names mapped to their definitions and metadata (e.g., data type, field type, label).
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
 * Type of HUBSPOT's HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE tool input.
 */
type HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE_INPUT = {
  /**
   * Archived
   * @description Filter properties by their archived status: `true` for archived, `false` for active (non-archived).
   * @default false
   */
  archived: boolean;
  /**
   * Object Type
   * @description Identifier for the CRM object type (e.g., 'contacts', 'companies'). Must be a valid, case-sensitive object type name existing in HubSpot.
   */
  objectType?: string;
  /**
   * Properties
   * @description Comma-separated string of specific property names to return. If omitted, all properties for the object type are returned.
   */
  properties?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE tool output.
 */
type HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Dictionary of property names mapped to their definitions and metadata (e.g., data type, field type, label).
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
 * Type of HUBSPOT's HUBSPOT_READ_ALL_PROPERTY_GROUPS tool input.
 */
type HUBSPOT_READ_ALL_PROPERTY_GROUPS_INPUT = {
  /**
   * Object Type
   * @description Specifies the HubSpot CRM object type for which property groups will be retrieved.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_ALL_PROPERTY_GROUPS tool output.
 */
type HUBSPOT_READ_ALL_PROPERTY_GROUPS_OUTPUT = {
  /**
   * Data
   * @description The API response dictionary containing a collection of property groups for the specified CRM object type, typically under a 'results' key.
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
 * Type of HUBSPOT's HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID tool input.
 */
type HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID_INPUT = {
  /**
   * Archived
   * @description Set to `true` to retrieve only archived owners; otherwise, active (non-archived) owners are returned.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Determines if `ownerId` refers to the HubSpot owner ID (`id`) or the user ID (`userId`).
   * @default id
   * @enum {string}
   */
  idProperty: "id" | "userId";
  /**
   * Owner Id
   * @description Unique identifier of the owner. Its meaning (HubSpot owner ID or user ID) is determined by `idProperty`.
   */
  ownerId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID tool output.
 */
type HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID_OUTPUT = {
  /**
   * Data
   * @description Properties and details of the retrieved owner.
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
 * Type of HUBSPOT's HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE tool input.
 */
type HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response's `paging.next.after` property, used to fetch the next page of results.
   */
  after?: string;
  /**
   * Archived
   * @description Set to true to retrieve only archived objects. If false or omitted (default), non-archived objects are returned.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., 'companies', 'deals') for which to retrieve associated IDs. Only existing associations are returned.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of results to return per page (must be an integer between 1 and 100).
   * @default 10
   */
  limit: number;
  /**
   * Object Type
   * @description Identifier for the type of CRM object to retrieve (e.g., 'contacts', 'companies', 'deals', or a custom object type ID).
   */
  objectType?: string;
  /**
   * Properties
   * @description List of property names to include for each object; non-existent properties on an object are ignored. Customizes response and can reduce payload size.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property names for which to include historical values. Using this parameter may reduce the maximum number of objects returnable in a single request.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE tool output.
 */
type HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response, typically including a list of objects and pagination details.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS tool input.
 */
type HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS_INPUT = {
  /**
   * End Date
   * @description End date (YYYY-MM-DD) for fetching asset metrics. If omitted, asset metrics will not be fetched.
   */
  endDate?: string;
  /**
   * Inputs
   * @description A list of campaign identifiers to read. Each item must specify the 'id' of a campaign.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the campaign.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description A comma-separated list of campaign properties to include in the response. If a specified property has no value for a campaign, it will be omitted from the response for that campaign. If this parameter is empty or not provided, an empty properties map will be returned for each campaign.
   */
  properties?: string[];
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) for fetching asset metrics. If omitted, asset metrics will not be fetched.
   */
  startDate?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS tool output.
 */
type HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch read operation. Each key is a campaign ID, and the value is an object representing the campaign, including its properties and associated assets if requested.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES tool input.
 */
type HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES_INPUT = {
  /**
   * Archived
   * @description If true, retrieves only archived property definitions; otherwise, retrieves non-archived definitions.
   */
  archived?: boolean;
  /**
   * Inputs
   * @description A list of property identifiers, each specifying the 'name' of a property whose definition should be retrieved for the given `objectType`.
   */
  inputs?: {
      /**
       * Name
       * @description The programmatic name of the CRM object property whose definition is to be retrieved.
       */
      name: string;
  }[];
  /**
   * Object Type
   * @description The case-sensitive CRM object type (e.g., 'contacts', 'companies') for which properties are being read, matching the type in your HubSpot account.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES tool output.
 */
type HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Response data including a list of retrieved property definitions (metadata), operation status, and other batch-related information.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_CAMPAIGN tool input.
 */
type HUBSPOT_READ_A_CAMPAIGN_INPUT = {
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) of the marketing campaign to retrieve.
   */
  campaignGuid?: string;
  /**
   * End Date
   * @description End date (YYYY-MM-DD) for fetching asset metrics; requires `startDate` to retrieve metrics.
   * @default null
   */
  endDate: string | null;
  /**
   * Properties
   * @description Specific campaign property names to return. Properties without a value are omitted. If this list is empty or not provided, the campaign's properties map in the response is empty.
   * @default null
   */
  properties: string[] | null;
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) for fetching asset metrics; requires `endDate` to retrieve metrics.
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_CAMPAIGN tool output.
 */
type HUBSPOT_READ_A_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Campaign data, including specified `properties` and general asset information. Detailed asset metrics are only included if both `startDate` and `endDate` were provided in the request.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME tool input.
 */
type HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME_INPUT = {
  /**
   * Archived
   * @description If true, retrieves an archived property definition; retrieves active property definitions by default.
   * @default false
   */
  archived: boolean;
  /**
   * Object Type
   * @description Specifies the CRM object type (e.g., 'contacts', 'deals') for which the property is retrieved.
   */
  objectType?: string;
  /**
   * Properties
   * @description Optional comma-separated list of additional property attributes to return; consult HubSpot API documentation for available attributes and format.
   */
  properties?: string;
  /**
   * Property Name
   * @description The internal, unique name of the property to retrieve (e.g., 'firstname', 'dealname').
   */
  propertyName?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME tool output.
 */
type HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the complete definition and metadata of the retrieved CRM property.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_PAGE_OF_DEALS tool input.
 */
type HUBSPOT_READ_A_PAGE_OF_DEALS_INPUT = {
  /**
   * After
   * @description Token from a previous response's `paging.next.after` to fetch the next page. Omit for the first page.
   */
  after?: string;
  /**
   * Archived
   * @description Set to true to return only archived deals; false returns active deals.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'contact', 'company') for which to retrieve associated IDs. Non-existent associations are ignored.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of deals to return (up to 100).
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description Deal property names to include in the response. Non-existent properties for a deal are ignored.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Deal property names for which to include historical values. Using this may reduce the number of deals retrieved per request.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_PAGE_OF_DEALS tool output.
 */
type HUBSPOT_READ_A_PAGE_OF_DEALS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of deals and pagination information.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_PROPERTY tool input.
 */
type HUBSPOT_READ_A_PROPERTY_INPUT = {
  /**
   * Archived
   * @description If true, retrieves an archived property definition; retrieves active property definitions by default.
   * @default false
   */
  archived: boolean;
  /**
   * Object Type
   * @description Specifies the CRM object type (e.g., 'contacts', 'deals') for which the property is retrieved.
   */
  objectType?: string;
  /**
   * Properties
   * @description Optional comma-separated list of additional property attributes to return; consult HubSpot API documentation for available attributes and format.
   */
  properties?: string;
  /**
   * Property Name
   * @description The internal, unique name of the property to retrieve (e.g., 'firstname', 'dealname').
   */
  propertyName?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_PROPERTY tool output.
 */
type HUBSPOT_READ_A_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the complete definition and metadata of the retrieved CRM property.
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
 * Type of HUBSPOT's HUBSPOT_READ_A_PROPERTY_GROUP tool input.
 */
type HUBSPOT_READ_A_PROPERTY_GROUP_INPUT = {
  /**
   * Group Name
   * @description Unique identifier (name) of the property group to retrieve. These names are case-sensitive and often use lowercase letters and underscores.
   */
  groupName?: string;
  /**
   * Object Type
   * @description The type of CRM object for which to retrieve the property group.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_A_PROPERTY_GROUP tool output.
 */
type HUBSPOT_READ_A_PROPERTY_GROUP_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information and attributes of the retrieved property group.
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
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY tool input.
 */
type HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY_INPUT = {
  /**
   * Archived
   * @description Set to `true` to retrieve only archived submissions; `false` (default) for active submissions.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Unique identifier property name to use instead of 'id'; `inputs` should contain values for this property if provided.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description Identifiers for feedback submissions to retrieve, using primary 'id' or `idProperty`.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the feedback submission.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Property names to return for each feedback submission; defaults if not specified.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Property names for which to retrieve historical values; past values are included if updated.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY tool output.
 */
type HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Key-value pairs of identifiers (from `inputs` or `idProperty`) and their corresponding feedback submission objects, including requested properties and history if `propertiesWithHistory` was specified.
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
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES tool input.
 */
type HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES_INPUT = {
  /**
   * Archived
   * @description Specifies if only archived contacts should be returned (`true`), or only non-archived contacts (`false`).
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of an alternate unique identifier property to use for retrieving contacts. If specified, the `inputs` objects should provide values for this property instead of the default `id`.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description A list of contact identifiers to retrieve. Each object in the list should contain an `id` (or the `idProperty` if specified) of a contact.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the contact to retrieve.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description Contact property names to include in the response; a default set is returned if unspecified.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Contact property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES tool output.
 */
type HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES tool input.
 */
type HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES_INPUT = {
  /**
   * Archived
   * @description If true, retrieves only archived CRM objects; if false (default), retrieves non-archived objects.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Alternate unique identifier property name (e.g., 'email' for contacts) to use instead of the default object ID.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description List of objects, each with an 'id' identifying a CRM object to retrieve, using the HubSpot object ID or the value of `idProperty`.
   */
  inputs?: {
      /**
       * Id
       * @description Unique identifier of the CRM object, corresponding to `idProperty` if set, or the default object ID.
       */
      id: string;
  }[];
  /**
   * Object Type
   * @description Type of CRM object to read (e.g., 'contacts', 'companies'). Determines which object collection to query.
   */
  objectType?: string;
  /**
   * Properties
   * @description List of property names to return for each CRM object. If omitted, default properties are returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of property names for which to retrieve historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES tool output.
 */
type HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES_OUTPUT = {
  /**
   * Data
   * @description Results of the batch read, including status, requested objects with properties, and any errors.
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
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES tool input.
 */
type HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES_INPUT = {
  /**
   * Archived
   * @description If true, returns only archived line items; otherwise (default is false), returns all line items.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of a property whose values are unique for that object type. Use this if you want to identify line items by a custom unique property instead of the default 'id'.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description A list of objects, where each object contains the 'id' of a line item to retrieve. The 'id' can be the line item's unique ID or the value of the property specified in `idProperty`.
   */
  inputs?: {
      /**
       * Id
       * @description Identifier for the line item to retrieve. This can be the line item's unique ID or a value of the property specified in `idProperty`.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description A list of property names to be returned in the response. If not specified, all readable properties will be returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of property names for which to return historical values; if a property has been updated, the response includes its previous values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES tool output.
 */
type HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY tool input.
 */
type HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY_INPUT = {
  /**
   * Archived
   * @description If `true`, only archived products are returned; otherwise, both archived and active products are returned.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Name of the property to use as a unique identifier for products in `inputs`. If provided, `inputs.id` is matched against this property's value (e.g., 'hs_sku'); otherwise, the default HubSpot product ID is used.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description List of products to retrieve. Each item's `id` field corresponds to `idProperty`'s value or the primary product ID if `idProperty` is unset.
   */
  inputs?: {
      /**
       * Id
       * @description Unique identifier for the product. Used with `idProperty` if specified in the main request; otherwise, defaults to the product's primary HubSpot ID.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description List of product property names to include in the response. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description List of product property names for which to retrieve the full history of changes, including historical values and change sources.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY tool output.
 */
type HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Contains batch read results, typically including a `results` list of product objects, a `status` key (e.g., 'COMPLETE'), and an optional `errors` key.
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
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES tool input.
 */
type HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES_INPUT = {
  /**
   * Archived
   * @description Specifies whether to include archived quotes in the results. If `true`, only archived quotes are returned. If `false` (default) or omitted, only active (non-archived) quotes are returned.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of the property to use as the unique identifier for the quotes specified in the `inputs` list. If omitted, the quote's primary object ID (e.g., `hs_object_id`) is used. This property must be a unique identifier for quotes.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description A list of objects, each specifying a quote to retrieve. Each object must contain an `id` field that holds the identifier of the quote, corresponding to `idProperty` or the primary object ID.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the quote to retrieve. This ID corresponds to the value of the property specified in `idProperty` in the main request, or the quote's primary object ID if `idProperty` is not specified.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description A list of internal names of quote properties to be included in the response for each quote. If omitted, a default set of properties is returned by HubSpot. Refer to HubSpot documentation for default properties.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of internal names of quote properties for which historical values should be retrieved. The response will include the history of changes for these properties.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES tool output.
 */
type HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch read operation. This typically includes a 'results' key with a list of quote objects (each containing its properties), along with status and timing information for the batch request. Errors for individual quotes, if any, might also be part of this structure.
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
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES tool input.
 */
type HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES_INPUT = {
  /**
   * Archived
   * @description Set to true to retrieve only archived tickets, or false for non-archived tickets.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of the unique property used to identify the tickets in the 'inputs' list (e.g., a custom external ID). If not provided, the default HubSpot ticket ID ('id') is assumed.
   * @default null
   */
  idProperty: string | null;
  /**
   * Inputs
   * @description A list of ticket identifiers to retrieve. Each item in the list specifies the 'id' of the ticket according to the `idProperty` (or default HubSpot ID).
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the ticket to be retrieved. This ID is used in conjunction with the `idProperty` if specified, otherwise it's assumed to be the HubSpot ticket ID.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description A list of specific ticket property names to be included in the response for each ticket (e.g., 'subject', 'content', 'hs_pipeline'). If omitted, a default set of properties will be returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of property names for which historical values should be retrieved. This allows tracking changes to specific ticket fields over time.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES tool output.
 */
type HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch read operation. Typically, this includes a 'results' key with a list of retrieved ticket objects and a 'status' key indicating the overall success. It may also include 'errors' if some tickets could not be retrieved.
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
 * Type of HUBSPOT's HUBSPOT_READ_BUDGET tool input.
 */
type HUBSPOT_READ_BUDGET_INPUT = {
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) of the marketing campaign for which to retrieve budget information.
   */
  campaignGuid?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_BUDGET tool output.
 */
type HUBSPOT_READ_BUDGET_OUTPUT = {
  /**
   * Data
   * @description Dictionary with detailed budget (e.g., 'totalBudget', 'totalSpend', 'remainingBudget') and spend information for the campaign; budget/spend items may have an 'order' field indicating creation sequence (0 is oldest).
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
 * Type of HUBSPOT's HUBSPOT_READ_CRM_CONTACT_BY_ID tool input.
 */
type HUBSPOT_READ_CRM_CONTACT_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to true to include only archived contacts; defaults to false (active contacts).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'companies', 'deals') to include associated object IDs in the response.
   * @default null
   */
  associations: string[] | null;
  /**
   * Contact Id
   * @description Unique internal HubSpot CRM object ID for the contact, which must be valid and existing.
   */
  contactId?: string;
  /**
   * Properties
   * @description Contact property names to include in the response; if omitted, all available properties are returned.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description Property names for which to include current and historical values in the response.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_CRM_CONTACT_BY_ID tool output.
 */
type HUBSPOT_READ_CRM_CONTACT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Properties of the retrieved HubSpot CRM contact, dependent on 'properties', 'propertiesWithHistory', and 'associations' request parameters.
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
 * Type of HUBSPOT's HUBSPOT_READ_CRM_OBJECT_BY_ID tool input.
 */
type HUBSPOT_READ_CRM_OBJECT_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to `true` to retrieve only archived objects. Defaults to `false` (non-archived objects).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description A list of object types (e.g., 'contacts', 'companies') for which to retrieve associated IDs (e.g., to get associated companies for a contact). Non-existent associations are ignored.
   */
  associations?: string[];
  /**
   * Id Property
   * @description The name of a unique property (e.g., 'email' for contacts, 'domain' for companies) to use for lookup instead of the internal object ID. If omitted, the internal object ID is used.
   */
  idProperty?: string;
  /**
   * Object Id
   * @description The unique identifier of the CRM object, or the value of the unique property if `idProperty` is specified.
   */
  objectId?: string;
  /**
   * Object Type
   * @description Specifies the type of CRM object to retrieve (e.g., 'contacts', 'companies', 'deals', 'tickets'). Must be a valid HubSpot CRM object type.
   */
  objectType?: string;
  /**
   * Properties
   * @description A list of property names to include in the response. Non-existent properties are ignored. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of property names to retrieve value history for, showing changes over time. Non-existent properties or those without history are ignored.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_CRM_OBJECT_BY_ID tool output.
 */
type HUBSPOT_READ_CRM_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties, property history, and associations of the retrieved CRM object. The structure and content are determined by the `properties`, `propertiesWithHistory`, and `associations` parameters provided in the request.
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
 * Type of HUBSPOT's HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID tool input.
 */
type HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to true to retrieve only archived submissions; false (default) retrieves active ones.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'CONTACT') for which to retrieve associated IDs; HubSpot ignores non-existent associations.
   */
  associations?: string[];
  /**
   * Feedback Submission Id
   * @description Identifier of the feedback submission to retrieve; use a custom property value if 'idProperty' is set. Must be an existing submission.
   */
  feedbackSubmissionId?: string;
  /**
   * Id Property
   * @description Name of a unique property (e.g., 'survey_response_id') to use as the identifier instead of the internal object ID. Its values must be unique.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Specific feedback submission property names to include in the response; HubSpot ignores non-existent ones.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Feedback submission property names for which to include a history of values; HubSpot ignores non-existent ones.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID tool output.
 */
type HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_PRODUCT_BY_ID tool input.
 */
type HUBSPOT_READ_PRODUCT_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to `True` to retrieve only archived products.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'deal') for which to retrieve associated record IDs. Non-existent types ignored.
   */
  associations?: string[];
  /**
   * Id Property
   * @description Unique property name (e.g., 'sku') for product lookup instead of object ID; `productId` must then be this property's value.
   */
  idProperty?: string;
  /**
   * Product Id
   * @description Unique product identifier; can be the HubSpot object ID or a custom unique property value if `idProperty` is specified.
   */
  productId?: string;
  /**
   * Properties
   * @description Specific property names to retrieve; only these are returned. Non-existent properties ignored.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Property names for which to retrieve value history; current and past values are returned. Non-existent properties ignored.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_PRODUCT_BY_ID tool output.
 */
type HUBSPOT_READ_PRODUCT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Product properties, structured by request parameters (properties, propertiesWithHistory, associations); includes standard/custom fields, history, and associated IDs.
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
 * Type of HUBSPOT's HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE tool input.
 */
type HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE_INPUT = {
  /**
   * Object Type
   * @description Specifies the HubSpot CRM object type for which property groups will be retrieved.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE tool output.
 */
type HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description The API response dictionary containing a collection of property groups for the specified CRM object type, typically under a 'results' key.
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
 * Type of HUBSPOT's HUBSPOT_RECYCLE_CONTACT_BY_ID tool input.
 */
type HUBSPOT_RECYCLE_CONTACT_BY_ID_INPUT = {
  /**
   * Contact Id
   * @description Unique HubSpot CRM identifier (typically numeric or UUID) for the contact to be archived.
   */
  contactId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RECYCLE_CONTACT_BY_ID tool output.
 */
type HUBSPOT_RECYCLE_CONTACT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_REMOVE_ASSET_ASSOCIATION tool input.
 */
type HUBSPOT_REMOVE_ASSET_ASSOCIATION_INPUT = {
  /**
   * Asset Id
   * @description The unique identifier of the asset.
   */
  assetId?: string;
  /**
   * Asset Type
   * @description The type of asset to disassociate. Supported types are 'FORM', 'OBJECT_LIST', or 'EXTERNAL_WEB_URL'.
   */
  assetType?: string;
  /**
   * Campaign Guid
   * @description The unique identifier (UUID) of the HubSpot campaign.
   */
  campaignGuid?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_REMOVE_ASSET_ASSOCIATION tool output.
 */
type HUBSPOT_REMOVE_ASSET_ASSOCIATION_OUTPUT = {
  /**
   * Data
   * @description Response data; typically empty for a successful disassociation (204 No Content).
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
 * Type of HUBSPOT's HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA tool input.
 */
type HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA_INPUT = {
  /**
   * Association Identifier
   * @description The unique ID of the association definition to remove from the specified object schema.
   */
  associationIdentifier?: string;
  /**
   * Object Type
   * @description The fully qualified name or ID of the HubSpot object schema from which to remove the association definition.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA tool output.
 */
type HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description The API response data. For this delete operation, it's often empty on success (HTTP 204 No Content response from the server).
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
 * Type of HUBSPOT's HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID tool input.
 */
type HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID_INPUT = {
  /**
   * Deal Id
   * @description Unique identifier of the deal to be archived. Must correspond to an existing deal and is typically numeric but always treat as a string (e.g., "1234567", "deal_abc123").
   */
  dealId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID tool output.
 */
type HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE tool input.
 */
type HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the target application associated with the event template. Must be a valid integer representing the ID of your HubSpot app.
   */
  appId?: number;
  /**
   * Event Template Id
   * @description The unique identifier of the event template from which the token will be removed. Must be a valid string representing an existing event template ID in your HubSpot account.
   */
  eventTemplateId?: string;
  /**
   * Token Name
   * @description The name of the token to be removed from the event template. Must be a string that exactly matches an existing token's name within the specified template (case-sensitive).
   */
  tokenName?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE tool output.
 */
type HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. For a successful deletion, this may be an empty dictionary. If an error occurs, this dictionary will contain error details.
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
 * Type of HUBSPOT's HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE tool input.
 */
type HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE_INPUT = {
  /**
   * Event Id
   * @description The unique ID for a specific HubSpot CRM timeline event to render.
   */
  eventId?: string;
  /**
   * Event Template Id
   * @description The unique ID for an existing HubSpot event template to use for rendering.
   */
  eventTemplateId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE tool output.
 */
type HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Rendered event details, structured according to the specified event template.
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
 * Type of HUBSPOT's HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML tool input.
 */
type HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML_INPUT = {
  /**
   * Detail
   * @description If true, renders the detailTemplate; if false or not provided, renders the headerTemplate.
   */
  detail?: boolean;
  /**
   * Event Id
   * @description The unique identifier for an existing event on the HubSpot timeline whose data will be used in the rendering.
   */
  eventId?: string;
  /**
   * Event Template Id
   * @description The unique identifier for an existing event template to be used for rendering.
   */
  eventTemplateId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML tool output.
 */
type HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the rendered HTML string from the event template and event data.
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
 * Type of HUBSPOT's HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE tool input.
 */
type HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE_INPUT = {
  /**
   * Display Order
   * @description Display order for this pipeline; those with the same order are sorted alphabetically by `label`.
   */
  displayOrder?: number;
  /**
   * Label
   * @description Unique label for this pipeline, for UI organization.
   */
  label?: string;
  /**
   * Object Type
   * @description Identifies the CRM object type (e.g., 'deals', 'tickets') for the pipeline being updated.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Unique ID of the pipeline to update, specific to its `objectType`.
   */
  pipelineId?: string;
  /**
   * Stages
   * @description A list of stage definitions that will completely replace all existing stages in the pipeline.
   */
  stages?: {
      /**
       * Display Order
       * @description Display order for this stage; stages with the same order are sorted alphabetically by `label`.
       */
      displayOrder: number;
      /**
       * Label
       * @description Unique label for this stage within the pipeline, for UI organization.
       */
      label: string;
      /**
       * Metadata
       * @description Stage-specific metadata, varying by pipeline type. For 'deals' pipelines, include 'probability' (e.g., `{'probability': 0.5}` for likelihood a deal will close, 0.0-1.0 in 0.1 increments). For 'tickets' pipelines, 'ticketState' (e.g., `{'ticketState': 'OPEN'}`) is optional, indicating if the ticket is 'OPEN' or 'CLOSED'.
       */
      metadata: {
          [key: string]: string;
      };
  }[];
  /**
   * Validate Deal Stage Usages Before Delete
   * @description If true and `objectType` is 'deals', checks deal stage usage before modification/deletion to prevent data issues.
   * @default false
   */
  validateDealStageUsagesBeforeDelete: boolean;
  /**
   * Validate References Before Delete
   * @description If true, validates existing references to the pipeline before updating to prevent issues from modifying referenced stages.
   * @default false
   */
  validateReferencesBeforeDelete: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE tool output.
 */
type HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE_OUTPUT = {
  /**
   * Data
   * @description Properties of the updated pipeline.
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
 * Type of HUBSPOT's HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES tool input.
 */
type HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES_INPUT = {
  /**
   * Display Order
   * @description The display order for this pipeline stage. Stages with the same `displayOrder` value are sorted alphabetically by their label. Use -1 to place the stage at the end.
   */
  displayOrder?: number;
  /**
   * Label
   * @description A new label for the pipeline stage.
   */
  label?: string;
  /**
   * Metadata
   * @description Key-value pairs for custom stage properties; all values must be strings. For 'deals' `objectType`, 'probability' (string: number from 0.0-1.0 in 0.1 increments, e.g., '0.5') is required. For 'tickets' `objectType`, 'ticketState' (string: 'OPEN' or 'CLOSED') is optional.
   */
  metadata?: {
      [key: string]: string;
  };
  /**
   * Object Type
   * @description The CRM object type associated with the pipeline (e.g., 'deals' for sales pipelines, 'tickets' for support pipelines).
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Unique identifier of the pipeline, assigned by HubSpot when the pipeline is created.
   */
  pipelineId?: string;
  /**
   * Stage Id
   * @description Unique identifier of the specific pipeline stage to be updated, assigned by HubSpot and unique to the stage within its pipeline.
   */
  stageId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES tool output.
 */
type HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing all properties of the updated pipeline stage, reflecting the applied changes.
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
 * Type of HUBSPOT's HUBSPOT_RESET_DRAFT tool input.
 */
type HUBSPOT_RESET_DRAFT_INPUT = {
  /**
   * Email Id
   * @description Identifier of the marketing email whose draft will be reset to its currently published (live) version.
   */
  emailId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RESET_DRAFT tool output.
 */
type HUBSPOT_RESET_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Full representation of the marketing email after its draft is reset to the live version.
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
 * Type of HUBSPOT's HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL tool input.
 */
type HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_INPUT = {
  /**
   * Email Id
   * @description Identifier of the marketing email.
   */
  emailId?: string;
  /**
   * Revision Id
   * @description Identifier of the specific email revision to restore.
   */
  revisionId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL tool output.
 */
type HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Full details of the restored marketing email, including its new revision ID and updated properties.
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
 * Type of HUBSPOT's HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE tool input.
 */
type HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE_INPUT = {
  /**
   * Email Id
   * @description The unique identifier of the marketing email.
   */
  emailId?: string;
  /**
   * Revision Id
   * @description The specific revision ID of the marketing email to restore.
   */
  revisionId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE tool output.
 */
type HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE_OUTPUT = {
  /**
   * Data
   * @description Restored marketing email object, including all properties in its draft state.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS tool input.
 */
type HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS_INPUT = {
  /**
   * Archived
   * @description Set to true to retrieve only archived object schemas, or false for only active, non-archived schemas. Archived schemas are typically inactive but retained for historical/compliance.
   * @default false
   */
  archived: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS tool output.
 */
type HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_ALL_PIPELINES tool input.
 */
type HUBSPOT_RETRIEVE_ALL_PIPELINES_INPUT = {
  /**
   * Object Type
   * @description The case-sensitive CRM object type (e.g., 'deals', 'tickets') for which to retrieve pipelines; must support pipelines.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_ALL_PIPELINES tool output.
 */
type HUBSPOT_RETRIEVE_ALL_PIPELINES_OUTPUT = {
  /**
   * Data
   * @description Pipeline data for the specified object type; structure varies based on HubSpot definitions.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE tool input.
 */
type HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE_INPUT = {
  /**
   * Object Type
   * @description The case-sensitive CRM object type (e.g., 'deals', 'tickets') for which to retrieve pipelines; must support pipelines.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE tool output.
 */
type HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Pipeline data for the specified object type; structure varies based on HubSpot definitions.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES tool input.
 */
type HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES_INPUT = {
  /**
   * Archived
   * @description If true, retrieves only archived deals; defaults to false, returning active deals.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description The name of a unique property to be used for identifying deals in the `inputs` list. If specified, the `id` values in the `inputs` array will be matched against this property instead of the default HubSpot deal ID. This is optional and typically used with custom unique identifiers.
   */
  idProperty?: string;
  /**
   * Inputs
   * @description A list of inputs, where each input specifies a deal to retrieve. Each item in the list should contain an `id` which is either a HubSpot deal ID or a value for the property defined in `idProperty`.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the deal to retrieve. This can be the HubSpot deal ID or the value of a custom unique property specified in the `idProperty` field of the main request.
       */
      id: string;
  }[];
  /**
   * Properties
   * @description A list of deal property names to be included in the response for each deal. If omitted, a default set of properties will be returned. Use this to specify exactly which deal attributes you need.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of property names for which to include historical values in the response. For example, if you want to see the history of changes for the 'dealstage' property, include 'dealstage' in this list.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES tool output.
 */
type HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch read operation. This includes the status of the request and the data for the retrieved deals, structured according to the requested properties.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP tool input.
 */
type HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP_INPUT = {
  /**
   * App Id
   * @description The unique integer identifier for the target HubSpot app.
   */
  appId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP tool output.
 */
type HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID tool input.
 */
type HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to `true` to retrieve archived company records instead of active ones.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'contacts', 'deals', 'tickets') for which to retrieve associated IDs. Invalid or non-existent association types are ignored.
   */
  associations?: string[];
  /**
   * Company Id
   * @description Unique company identifier. Use the HubSpot object ID by default, or if `idProperty` is set, use the value of that unique property for this field.
   */
  companyId?: string;
  /**
   * Id Property
   * @description Name of a unique property to use as an alternative identifier instead of the HubSpot object ID. If provided, `companyId` must be a value of this property. This property must have unique values across all companies.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Specific company property names to include in the response. Non-existent properties are ignored. Example HubSpot properties: 'name', 'website', 'industry', 'annual_revenue'.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Company property names for which to retrieve current values and historical changes. Properties without history or non-existent ones are handled gracefully. Example HubSpot properties: 'name', 'lifecyclestage'.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID tool output.
 */
type HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Company object data, including its properties and any requested associations or property history.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_DEAL_BY_ID tool input.
 */
type HUBSPOT_RETRIEVE_DEAL_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to true to return only archived deals; defaults to false (active deals).
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description A list of object types (e.g., 'contacts', 'companies') for which to retrieve associated IDs.
   */
  associations?: string[];
  /**
   * Deal Id
   * @description The deal's unique identifier; use the internal HubSpot object ID or a custom unique property value if `idProperty` is specified.
   */
  dealId?: string;
  /**
   * Id Property
   * @description The internal name of a unique deal property to use as an alternative identifier to the HubSpot object ID.
   */
  idProperty?: string;
  /**
   * Properties
   * @description A list of deal property internal names to include in the response.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description A list of deal property internal names for which to return historical values.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_DEAL_BY_ID tool output.
 */
type HUBSPOT_RETRIEVE_DEAL_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and details of the retrieved deal, reflecting requested `properties`, `propertiesWithHistory`, and `associations`.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA tool input.
 */
type HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA_INPUT = {
  /**
   * Object Type
   * @description Fully qualified name for standard HubSpot objects (e.g., 'contacts', 'companies') or unique object type ID for custom objects (e.g., 'p123456', '2-xxxxxxx'). Case-sensitive and must match an existing object type as defined in HubSpot.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA tool output.
 */
type HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Detailed schema definition for the requested object type, including its properties, data types, labels, and associations.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_LINE_ITEMS_LIST tool input.
 */
type HUBSPOT_RETRIEVE_LINE_ITEMS_LIST_INPUT = {
  /**
   * After
   * @description Pagination token from 'paging.next.after' of a previous response to fetch the subsequent page. Omit for the first request.
   */
  after?: string;
  /**
   * Archived
   * @description Filter by archive status: `true` for archived only, `false` (default) for active only. Manages historical or current items.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., `["deal", "product"]`) for which to retrieve associated IDs. Invalid types are ignored. Valid types depend on HubSpot data model.
   */
  associations?: string[];
  /**
   * Limit
   * @description Maximum number of line items to return per page; controls response size. An API-defined upper limit may apply.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description Property names to include for each line item (e.g., `["name", "price"]`); customizes returned data. Non-existent properties are ignored. If omitted, a default set is returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Property names for which to include historical values (e.g., `["status", "amount"]`); tracks changes. May reduce items returned per request due to increased payload.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_LINE_ITEMS_LIST tool output.
 */
type HUBSPOT_RETRIEVE_LINE_ITEMS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID tool input.
 */
type HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to `True` to retrieve archived Line Items; `False` (default) retrieves non-archived items.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Optional list of object types (e.g., 'deal') for which to retrieve IDs of associated objects. Ignores non-existent association types.
   */
  associations?: string[];
  /**
   * Id Property
   * @description Name of a unique property (e.g., 'sku') to use as the identifier instead of the HubSpot ID. Must be unique across all Line Items.
   */
  idProperty?: string;
  /**
   * Line Item Id
   * @description The Line Item's unique identifier (HubSpot ID or value of `idProperty` if specified).
   */
  lineItemId?: string;
  /**
   * Properties
   * @description Optional list of property names to return for the Line Item. Non-existent properties are ignored.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Optional list of property names for which to retrieve historical values. Ignores non-existent properties or those without history.
   */
  propertiesWithHistory?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID tool output.
 */
type HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and details of the retrieved Line Item. The structure and content will vary based on the 'properties', 'propertiesWithHistory', and 'associations' requested.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_OWNERS tool input.
 */
type HUBSPOT_RETRIEVE_OWNERS_INPUT = object;

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_OWNERS tool output.
 */
type HUBSPOT_RETRIEVE_OWNERS_OUTPUT = {
  /**
   * Data
   * @description A dictionary holding the list of owners.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID tool input.
 */
type HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID_INPUT = {
  /**
   * Archived
   * @description Set to `true` to retrieve only archived owners; otherwise, active (non-archived) owners are returned.
   * @default false
   */
  archived: boolean;
  /**
   * Id Property
   * @description Determines if `ownerId` refers to the HubSpot owner ID (`id`) or the user ID (`userId`).
   * @default id
   * @enum {string}
   */
  idProperty: "id" | "userId";
  /**
   * Owner Id
   * @description Unique identifier of the owner. Its meaning (HubSpot owner ID or user ID) is determined by `idProperty`.
   */
  ownerId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID tool output.
 */
type HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID_OUTPUT = {
  /**
   * Data
   * @description Properties and details of the retrieved owner.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES tool input.
 */
type HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES_INPUT = {
  /**
   * After
   * @description Pagination cursor from a previous response's 'paging.next.after' property to fetch the next page.
   * @default null
   */
  after: string | null;
  /**
   * Archived
   * @description Filter companies by archival status: `true` for archived, `false` for active.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description List of object types (e.g., 'contacts', 'deals') for which to retrieve associated record IDs. Non-existent associations are omitted for a company.
   * @default null
   */
  associations: string[] | null;
  /**
   * Limit
   * @description Maximum number of companies per page.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description List of company property internal names to include. Non-existent properties are omitted for a company. If omitted, default properties are returned.
   * @default null
   */
  properties: string[] | null;
  /**
   * Properties With History
   * @description List of company property internal names to retrieve historical values for (including previous values and timestamps). Note: May increase response data size.
   * @default null
   */
  propertiesWithHistory: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES tool output.
 */
type HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Raw API JSON response. Typically includes a 'results' list of company objects and a 'paging' key for pagination.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS tool input.
 */
type HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response to fetch the next page.
   */
  after?: string;
  /**
   * Archived
   * @description Set to `true` for archived owners, or `false` for active owners.
   * @default false
   */
  archived: boolean;
  /**
   * Email
   * @description Filter by a specific email address.
   */
  email?: string;
  /**
   * Limit
   * @description Maximum number of CRM owners per page. Refer to HubSpot's API documentation for current limits.
   * @default 100
   */
  limit: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS tool output.
 */
type HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the HubSpot API, typically including 'results' (list of owner objects) and 'paging' details.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PIPELINE_STAGES tool input.
 */
type HUBSPOT_RETRIEVE_PIPELINE_STAGES_INPUT = {
  /**
   * Object Type
   * @description The CRM object type (e.g., deals, tickets) for which to retrieve pipeline stages; must support pipelines.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description The unique ID of the pipeline associated with the specified objectType whose stages are to be retrieved.
   */
  pipelineId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PIPELINE_STAGES tool output.
 */
type HUBSPOT_RETRIEVE_PIPELINE_STAGES_OUTPUT = {
  /**
   * Data
   * @description Results of the request, typically a list of pipeline stages under a 'results' key, each with properties like 'id', 'label', and 'displayOrder'.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID tool input.
 */
type HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID_INPUT = {
  /**
   * Object Type
   * @description The type of CRM object associated with the pipeline (e.g., 'deals', 'tickets'). This is case-sensitive and determines which object-specific pipeline and stages are queried. Must be a valid HubSpot CRM object type.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description The unique identifier (ID) of the pipeline containing the stage. This ID must be valid and correspond to the specified `objectType`.
   */
  pipelineId?: string;
  /**
   * Stage Id
   * @description The unique identifier (ID) of the specific pipeline stage to retrieve. This ID must be valid and exist within the specified pipeline.
   */
  stageId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID tool output.
 */
type HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and metadata of the retrieved pipeline stage.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_TICKET_BY_ID tool input.
 */
type HUBSPOT_RETRIEVE_TICKET_BY_ID_INPUT = {
  /**
   * Archived
   * @description Set to `true` to retrieve the ticket from archived records; active tickets are searched otherwise.
   * @default false
   */
  archived: boolean;
  /**
   * Associations
   * @description Object types (e.g., 'contacts', 'companies') for which to retrieve associated object IDs.
   */
  associations?: string[];
  /**
   * Id Property
   * @description Name of a unique property to use for identifying the ticket instead of the HubSpot object ID; its values must be unique across all tickets.
   */
  idProperty?: string;
  /**
   * Properties
   * @description Specific property names to include in the response; if provided, only these properties will be returned.
   */
  properties?: string[];
  /**
   * Properties With History
   * @description Property names for which to include value history; response will include current and historical values for these.
   */
  propertiesWithHistory?: string[];
  /**
   * Ticket Id
   * @description Unique ticket identifier; can be the HubSpot object ID or a unique property value if `idProperty` is specified.
   */
  ticketId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_TICKET_BY_ID tool output.
 */
type HUBSPOT_RETRIEVE_TICKET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Dictionary with the retrieved ticket's details; structure varies based on `properties`, `propertiesWithHistory`, and `associations` requested.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS tool input.
 */
type HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS_INPUT = {
  /**
   * Event Id
   * @description The unique identifier for the specific timeline event. This ID uniquely identifies the event within the context of its template and must correspond to an existing event in your HubSpot CRM timeline.
   */
  eventId?: string;
  /**
   * Event Template Id
   * @description The unique identifier for the event template. This ID is crucial for locating the specific type of event and must correspond to a pre-defined event template in your HubSpot account.
   */
  eventTemplateId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS tool output.
 */
type HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing all available information for the retrieved timeline event.
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
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID tool input.
 */
type HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID_INPUT = {
  /**
   * App Id
   * @description The unique integer identifier for the video conference application, corresponding to the ID of the application created in your HubSpot developer portal.
   */
  appId?: number;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID tool output.
 */
type HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the ExternalSettings object for the video conference application, containing details like webhook URLs for meeting management and user/account settings.
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
 * Type of HUBSPOT's HUBSPOT_RETURN_PIPELINE_BY_ID tool input.
 */
type HUBSPOT_RETURN_PIPELINE_BY_ID_INPUT = {
  /**
   * Object Type
   * @description The CRM object type for which the pipeline is being retrieved. Must be a valid HubSpot object type that supports pipelines.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Unique identifier of the pipeline to retrieve for the specified object type, typically a system-generated string or UUID.
   */
  pipelineId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_RETURN_PIPELINE_BY_ID tool output.
 */
type HUBSPOT_RETURN_PIPELINE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_CAMPAIGNS tool input.
 */
type HUBSPOT_SEARCH_CAMPAIGNS_INPUT = {
  /**
   * After
   * @description Pagination token from previous response.
   */
  after?: string;
  /**
   * Limit
   * @description Maximum number of campaigns to return.
   * @default 10
   */
  limit: number;
  /**
   * Query
   * @description Text search query to find campaigns by name.
   */
  query?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_CAMPAIGNS tool output.
 */
type HUBSPOT_SEARCH_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_COMPANY_OBJECTS tool input.
 */
type HUBSPOT_SEARCH_COMPANY_OBJECTS_INPUT = {
  /**
   * After
   * @description Pagination cursor; use `paging.next.after` from a previous response to fetch the next page.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description Custom company property internal names (not in `HubSpotCompanyProperties` enum) to include in the response.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description List of filter groups; filters within a group are ANDed, and multiple groups are ORed.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description List of filter criteria; filters within this list are combined using an AND operator.
       */
      filters: {
          /**
           * High Value
           * @description Upper bound for a range filter; required and used only when `operator` is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description Operator defining the filter's logic; determines which other fields (`value`, `values`, `highValue`) are required.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The HubSpot company property internal name to filter on.
           * @enum {string}
           */
          propertyName: "name" | "domain" | "website" | "description" | "phone" | "email" | "fax" | "address" | "address2" | "city" | "state" | "postal_code" | "country" | "industry" | "annualrevenue" | "numberofemployees" | "type" | "year_founded" | "facebook_company_page" | "linkedin_company_page" | "twitter_handle" | "hubspot_owner_id" | "hs_lead_status" | "lifecyclestage" | "createdate" | "hs_lastmodifieddate" | "hs_created_by_user_id" | "hs_updated_by_user_id" | "total_money_raised" | "founded_year" | "is_public" | "timezone" | "hs_ideal_customer_profile" | "hs_parent_company_id" | "first_contact_createdate" | "recent_deal_amount" | "total_revenue" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_analytics_first_visit_timestamp" | "hs_analytics_last_visit_timestamp" | "hs_analytics_num_visits" | "hs_analytics_num_page_views" | "twitterhandle" | "twitterbio" | "twitterfollowers" | "hs_target_account_probability" | "hubspot_team_id" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_all_accessible_team_ids" | "hs_merged_object_ids" | "hs_object_id" | "hs_unique_creation_key";
          /**
           * Value
           * @description Comparison value for `propertyName`; serves as the lower bound when `operator` is `BETWEEN`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description Values for `IN` or `NOT_IN` operators; required and used only when `operator` is `IN` or `NOT_IN`.
           * @default []
           */
          values: string[];
      }[];
  }[];
  /**
   * Limit
   * @description Maximum number of company records to return.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description HubSpot company property internal names to include in the response; a default set is returned if unspecified.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description String to search across default text properties of company records.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description List of sort objects to define the order of results.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The direction of sorting.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The HubSpot company property internal name to sort the results by.
       * @enum {string}
       */
      propertyName: "name" | "domain" | "website" | "description" | "phone" | "email" | "fax" | "address" | "address2" | "city" | "state" | "postal_code" | "country" | "industry" | "annualrevenue" | "numberofemployees" | "type" | "year_founded" | "facebook_company_page" | "linkedin_company_page" | "twitter_handle" | "hubspot_owner_id" | "hs_lead_status" | "lifecyclestage" | "createdate" | "hs_lastmodifieddate" | "hs_created_by_user_id" | "hs_updated_by_user_id" | "total_money_raised" | "founded_year" | "is_public" | "timezone" | "hs_ideal_customer_profile" | "hs_parent_company_id" | "first_contact_createdate" | "recent_deal_amount" | "total_revenue" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_analytics_first_visit_timestamp" | "hs_analytics_last_visit_timestamp" | "hs_analytics_num_visits" | "hs_analytics_num_page_views" | "twitterhandle" | "twitterbio" | "twitterfollowers" | "hs_target_account_probability" | "hubspot_team_id" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_all_accessible_team_ids" | "hs_merged_object_ids" | "hs_object_id" | "hs_unique_creation_key";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_COMPANY_OBJECTS tool output.
 */
type HUBSPOT_SEARCH_COMPANY_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Search results from the HubSpot API, including company objects and pagination information.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description The cursor token for pagination. Use the `after` value from the `paging.next` object of a previous response to fetch the next set of results. If `None` or an empty string, it fetches the first page.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description A list of internal names for custom contact properties to retrieve (e.g., `custom_lead_score`). Use this for data from custom fields defined in HubSpot.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description A list of filter groups. Filters within a group are ANDed. Multiple groups are ORed. Example: `[{'filters': [{'propertyName': 'lifecyclestage', 'operator': 'EQ', 'value': 'customer'}]}]` finds contacts who are customers.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description A list of filter criteria objects. All filters within this list are combined using AND logic.
       */
      filters: {
          /**
           * High Value
           * @description The higher bound value for a `BETWEEN` operation. Required and only used when `operator` is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description The operator to use for filtering (e.g., `EQ`, `NEQ`, `LT`, `BETWEEN`, `IN`). Determines how the `propertyName` is compared with `value`, `values`, or `highValue`. See `OperatorEnm` for all options.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The HubSpot contact property to filter on. See `HubspotContactProperties` for available options.
           * @enum {string}
           */
          propertyName: "address" | "annualrevenue" | "associatedcompanyid" | "associatedcompanylastupdated" | "city" | "closedate" | "company" | "company_size" | "country" | "createdate" | "currentlyinworkflow" | "date_of_birth" | "days_to_close" | "degree" | "email" | "engagements_last_meeting_booked" | "engagements_last_meeting_booked_campaign" | "engagements_last_meeting_booked_medium" | "engagements_last_meeting_booked_source" | "fax" | "field_of_study" | "first_conversion_date" | "first_conversion_event_name" | "first_deal_created_date" | "firstname" | "followercount" | "gender" | "graduation_date" | "hs_additional_emails" | "hs_all_accessible_team_ids" | "hs_all_assigned_business_unit_ids" | "hs_all_contact_vids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_analytics_average_page_views" | "hs_analytics_first_referrer" | "hs_analytics_first_timestamp" | "hs_analytics_first_touch_converting_campaign" | "hs_analytics_first_url" | "hs_analytics_first_visit_timestamp" | "hs_analytics_last_referrer" | "hs_analytics_last_timestamp" | "hs_analytics_last_touch_converting_campaign" | "hs_analytics_last_url" | "hs_analytics_last_visit_timestamp" | "hs_analytics_num_event_completions" | "hs_analytics_num_page_views" | "hs_analytics_num_visits" | "hs_analytics_revenue" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hubspot_owner_assigneddate" | "hubspot_owner_id" | "hubspot_team_id" | "hubspotscore" | "industry" | "ip_city" | "ip_country" | "ip_country_code" | "ip_latlon" | "ip_state" | "ip_state_code" | "ip_zipcode" | "job_function" | "jobtitle" | "kloutscoregeneral" | "lastmodifieddate" | "lastname" | "lifecyclestage" | "linkedinbio" | "linkedinconnections" | "marital_status" | "message" | "military_status" | "mobilephone" | "notes_last_contacted" | "notes_last_updated" | "notes_next_activity_date" | "num_associated_deals" | "num_contacted_notes" | "num_conversion_events" | "num_notes" | "num_unique_conversion_events" | "numemployees" | "owneremail" | "ownername" | "phone" | "photo" | "recent_conversion_date" | "recent_conversion_event_name" | "recent_deal_amount" | "recent_deal_close_date" | "relationship_status" | "salutation" | "school" | "seniority" | "start_date" | "state" | "surveymonkeyeventlastupdated" | "total_revenue" | "twitterbio" | "twitterhandle" | "twitterprofilephoto" | "webinareventlastupdated" | "website" | "work_email" | "hs_object_id" | "zip";
          /**
           * Value
           * @description The value to compare the property against. Required for most operators (e.g., `EQ`, `LT`). Not used with `BETWEEN`, `IN`, `NOT_IN`, `HAS_PROPERTY`, `NOT_HAS_PROPERTY` operators.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description A list of values for `IN` or `NOT_IN` operations. Required and only used when `operator` is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description The maximum number of contacts to return.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description A list of specific contact property internal names to include in the response (e.g., `firstname`, `email`). If omitted, a default set of properties is returned. Refer to `HubspotContactProperties` for standard options.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description A string to search across default text properties of contacts (e.g., name, email). This provides a broad, text-based search.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description A list of sort criteria to apply. Each criterion specifies a contact `propertyName` and a sort `direction`. Example: `[{'propertyName': 'lastname', 'direction': 'ASCENDING'}]` sorts contacts by last name.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The direction for sorting (`ASCENDING` or `DESCENDING`). See `DirectionEnm` for options.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The HubSpot contact property to sort by. Refer to `HubspotContactProperties` for valid internal property names.
       * @enum {string}
       */
      propertyName: "address" | "annualrevenue" | "associatedcompanyid" | "associatedcompanylastupdated" | "city" | "closedate" | "company" | "company_size" | "country" | "createdate" | "currentlyinworkflow" | "date_of_birth" | "days_to_close" | "degree" | "email" | "engagements_last_meeting_booked" | "engagements_last_meeting_booked_campaign" | "engagements_last_meeting_booked_medium" | "engagements_last_meeting_booked_source" | "fax" | "field_of_study" | "first_conversion_date" | "first_conversion_event_name" | "first_deal_created_date" | "firstname" | "followercount" | "gender" | "graduation_date" | "hs_additional_emails" | "hs_all_accessible_team_ids" | "hs_all_assigned_business_unit_ids" | "hs_all_contact_vids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_analytics_average_page_views" | "hs_analytics_first_referrer" | "hs_analytics_first_timestamp" | "hs_analytics_first_touch_converting_campaign" | "hs_analytics_first_url" | "hs_analytics_first_visit_timestamp" | "hs_analytics_last_referrer" | "hs_analytics_last_timestamp" | "hs_analytics_last_touch_converting_campaign" | "hs_analytics_last_url" | "hs_analytics_last_visit_timestamp" | "hs_analytics_num_event_completions" | "hs_analytics_num_page_views" | "hs_analytics_num_visits" | "hs_analytics_revenue" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hubspot_owner_assigneddate" | "hubspot_owner_id" | "hubspot_team_id" | "hubspotscore" | "industry" | "ip_city" | "ip_country" | "ip_country_code" | "ip_latlon" | "ip_state" | "ip_state_code" | "ip_zipcode" | "job_function" | "jobtitle" | "kloutscoregeneral" | "lastmodifieddate" | "lastname" | "lifecyclestage" | "linkedinbio" | "linkedinconnections" | "marital_status" | "message" | "military_status" | "mobilephone" | "notes_last_contacted" | "notes_last_updated" | "notes_next_activity_date" | "num_associated_deals" | "num_contacted_notes" | "num_conversion_events" | "num_notes" | "num_unique_conversion_events" | "numemployees" | "owneremail" | "ownername" | "phone" | "photo" | "recent_conversion_date" | "recent_conversion_event_name" | "recent_deal_amount" | "recent_deal_close_date" | "relationship_status" | "salutation" | "school" | "seniority" | "start_date" | "state" | "surveymonkeyeventlastupdated" | "total_revenue" | "twitterbio" | "twitterhandle" | "twitterprofilephoto" | "webinareventlastupdated" | "website" | "work_email" | "hs_object_id" | "zip";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description The raw JSON response from the HubSpot API. This typically includes a 'results' array of contacts, a 'total' count of matching records, and 'paging' information for navigating through more results.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS tool input.
 */
type HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS_INPUT = {
  /**
   * After
   * @description Pagination cursor from `paging.next.after` of a previous response to fetch the next page.
   */
  after?: string;
  /**
   * Filter Groups
   * @description Filter groups to apply; filters within a group are OR'd, groups are AND'd.
   */
  filterGroups?: {
      /**
       * Filters
       * @description List of filter criteria; filters within this list are OR'd. At least one filter is required per group.
       */
      filters: {
          /**
           * High Value
           * @description Upper bound for a `BETWEEN` operator; used with `value` (lower bound) when `operator` is `BETWEEN`.
           */
          highValue?: string;
          /**
           * Operator
           * @description Filter operator defining comparison logic (e.g., EQ, GT, IN). See `OperatorEnm`.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description Internal name of the CRM property to filter on (must be filterable for emails).
           */
          propertyName: string;
          /**
           * Value
           * @description Value to filter `propertyName` by (e.g., for `EQ`, `NEQ`); for `BETWEEN`, this is the lower bound.
           */
          value?: string;
          /**
           * Values
           * @description Values to match `propertyName` when `operator` is `IN` or `NOT_IN`.
           */
          values?: string[];
      }[];
  }[];
  /**
   * Limit
   * @description Maximum email objects to return (1-100). Default is 10.
   */
  limit?: number;
  /**
   * Properties
   * @description Email property internal names to return. Specific properties can improve performance; defaults if unspecified.
   */
  properties?: string[];
  /**
   * Query
   * @description Full-text search query for default email properties (e.g., `compan*` for prefix). If empty, relies on filters.
   */
  query?: string;
  /**
   * Sorts
   * @description Property names for sorting (e.g., `hs_createdate:DESC` for descending). Applied in order.
   */
  sorts?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS tool output.
 */
type HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Response payload, typically with a `results` list of emails and a `paging` object.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description Optional. Cursor for pagination (from previous response).
   * @default null
   */
  after: string | null;
  /**
   * Filter Groups
   * @description Optional. List of filter groups (AND within, OR between). Provide at least one filterGroup or a query.
   * @default null
   */
  filterGroups: {
      /**
       * Filters
       * @description A list of individual filter criteria; all filters in this list are ANDed together.
       */
      filters: {
          /**
           * High Value
           * @description The highest value for a `BETWEEN` operator. Required and only used when `operator` is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description The filter operator defining the comparison logic (e.g., EQ for equals, LT for less than).
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The internal name of the CRM property to filter on.
           */
          propertyName: string;
          /**
           * Value
           * @description The value to compare the property against. Used for operators like `EQ`, `NEQ`, `LT`, `LTE`, `GT`, `GTE`, `CONTAINS_TOKEN`, `NOT_CONTAINS_TOKEN`. Required for these operators unless the operator is `HAS_PROPERTY` or `NOT_HAS_PROPERTY`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description A list of values for `IN` or `NOT_IN` operators. Required and only used when `operator` is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[] | null;
  /**
   * Limit
   * @description Optional. Max results per page (default 10, max 100).
   * @default null
   */
  limit: number | null;
  /**
   * Object Type
   * @description The type of CRM object to search (e.g., 'contacts', 'companies', 'deals', 'tickets', or custom object IDs like '2-1234567'). Must be a valid HubSpot object type, lowercase and plural for standard types.
   */
  objectType?: string;
  /**
   * Properties
   * @description Optional. List of property names to include in the response.
   * @default null
   */
  properties: string[] | null;
  /**
   * Query
   * @description A string for a broad search across multiple fields on the object. Use this for quick text searches.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description Optional. List of property names to sort by. Use '-property' for descending.
   * @default null
   */
  sorts: string[] | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description Raw response data from the HubSpot API, typically including 'results' (list of objects), 'total' (count), and 'paging' information.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_DEALS_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_DEALS_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description Pagination token from a previous response's `paging.next.after` to fetch the next page; omit for the first page.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description User-defined custom property internal names (not standard HubSpot properties) to include in the response.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description Filter groups to apply to the search. Filters within a group are ANDed; groups are ORed.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description Filter criteria to apply within this group.
       */
      filters: {
          /**
           * High Value
           * @description Higher bound value for a property, used only when operator is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description Comparison operator defining how the property's value is compared against `value`, `values`, or `highValue`.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description Internal name of the HubSpot deal property to filter on.
           * @enum {string}
           */
          propertyName: "amount" | "amount_in_home_currency" | "closed_lost_reason" | "closed_won_reason" | "closedate" | "createdate" | "days_to_close" | "deal_currency_code" | "dealname" | "dealstage" | "dealtype" | "description" | "engagements_last_meeting_booked" | "engagements_last_meeting_booked_campaign" | "engagements_last_meeting_booked_medium" | "engagements_last_meeting_booked_source" | "hs_acv" | "hs_all_accessible_team_ids" | "hs_all_assigned_business_unit_ids" | "hs_all_collaborator_owner_ids" | "hs_all_deal_split_owner_ids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_analytics_latest_source" | "hs_analytics_latest_source_company" | "hs_analytics_latest_source_contact" | "hs_analytics_latest_source_data_1" | "hs_analytics_latest_source_data_1_company" | "hs_analytics_latest_source_data_1_contact" | "hs_analytics_latest_source_data_2" | "hs_analytics_latest_source_data_2_company" | "hs_analytics_latest_source_data_2_contact" | "hs_analytics_latest_source_timestamp" | "hs_analytics_latest_source_timestamp_company" | "hs_analytics_latest_source_timestamp_contact" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_arr" | "hs_associated_deal_registration_deal_type" | "hs_associated_deal_registration_product_interests" | "hs_campaign" | "hs_closed_amount" | "hs_closed_amount_in_home_currency" | "hs_closed_deal_close_date" | "hs_closed_deal_create_date" | "hs_closed_won_count" | "hs_closed_won_date" | "hs_created_by_user_id" | "hs_createdate" | "hs_date_entered_appointmentscheduled" | "hs_date_entered_closedlost" | "hs_date_entered_closedwon" | "hs_date_entered_contractsent" | "hs_date_entered_decisionmakerboughtin" | "hs_date_entered_presentationscheduled" | "hs_date_entered_qualifiedtobuy" | "hs_date_exited_appointmentscheduled" | "hs_date_exited_closedlost" | "hs_date_exited_closedwon" | "hs_date_exited_contractsent" | "hs_date_exited_decisionmakerboughtin" | "hs_date_exited_presentationscheduled" | "hs_date_exited_qualifiedtobuy" | "hs_days_to_close_raw" | "hs_deal_amount_calculation_preference" | "hs_deal_registration_mrr" | "hs_deal_registration_mrr_currency_code" | "hs_deal_score" | "hs_deal_stage_probability" | "hs_deal_stage_probability_shadow" | "hs_exchange_rate" | "hs_forecast_amount" | "hs_forecast_probability" | "hs_has_empty_conditional_stage_properties" | "hs_is_active_shared_deal" | "hs_is_closed" | "hs_is_closed_count" | "hs_is_closed_lost" | "hs_is_closed_won" | "hs_is_deal_split" | "hs_is_in_first_deal_stage" | "hs_is_open_count" | "hs_lastmodifieddate" | "hs_latest_approval_status" | "hs_latest_approval_status_approval_id" | "hs_latest_meeting_activity" | "hs_likelihood_to_close" | "hs_line_item_global_term_hs_discount_percentage" | "hs_line_item_global_term_hs_discount_percentage_enabled" | "hs_line_item_global_term_hs_recurring_billing_period" | "hs_line_item_global_term_hs_recurring_billing_period_enabled" | "hs_line_item_global_term_hs_recurring_billing_start_date" | "hs_line_item_global_term_hs_recurring_billing_start_date_enabled" | "hs_line_item_global_term_recurringbillingfrequency" | "hs_line_item_global_term_recurringbillingfrequency_enabled" | "hs_manual_forecast_category" | "hs_merged_object_ids" | "hs_mrr" | "hs_next_step" | "hs_next_step_updated_at" | "hs_notes_last_activity" | "hs_notes_next_activity" | "hs_notes_next_activity_type" | "hs_num_associated_active_deal_registrations" | "hs_num_associated_deal_registrations" | "hs_num_associated_deal_splits" | "hs_num_of_associated_line_items" | "hs_num_target_accounts" | "hs_object_id" | "hs_object_source" | "hs_object_source_detail_1" | "hs_object_source_detail_2" | "hs_object_source_detail_3" | "hs_object_source_id" | "hs_object_source_label" | "hs_object_source_user_id" | "hs_open_deal_create_date" | "hs_pinned_engagement_id" | "hs_predicted_amount" | "hs_predicted_amount_in_home_currency" | "hs_priority" | "hs_projected_amount" | "hs_projected_amount_in_home_currency" | "hs_read_only" | "hs_sales_email_last_replied" | "hs_shared_team_ids" | "hs_shared_user_ids" | "hs_source_object_id" | "hs_synced_deal_owner_name_and_email" | "hs_tag_ids" | "hs_tcv" | "hs_time_in_appointmentscheduled" | "hs_time_in_closedlost" | "hs_time_in_closedwon" | "hs_time_in_contractsent" | "hs_time_in_decisionmakerboughtin" | "hs_time_in_presentationscheduled" | "hs_time_in_qualifiedtobuy" | "hs_unique_creation_key" | "hs_updated_by_user_id" | "hs_user_ids_of_all_notification_followers" | "hs_user_ids_of_all_notification_unfollowers" | "hs_user_ids_of_all_owners" | "hs_v2_cumulative_time_in_appointmentscheduled" | "hs_v2_cumulative_time_in_closedlost" | "hs_v2_cumulative_time_in_closedwon" | "hs_v2_cumulative_time_in_contractsent" | "hs_v2_cumulative_time_in_decisionmakerboughtin" | "hs_v2_cumulative_time_in_presentationscheduled" | "hs_v2_cumulative_time_in_qualifiedtobuy" | "hs_v2_date_entered_appointmentscheduled" | "hs_v2_date_entered_closedlost" | "hs_v2_date_entered_closedwon" | "hs_v2_date_entered_contractsent" | "hs_v2_date_entered_decisionmakerboughtin" | "hs_v2_date_entered_presentationscheduled" | "hs_v2_date_entered_qualifiedtobuy" | "hs_v2_date_exited_appointmentscheduled" | "hs_v2_date_exited_closedlost" | "hs_v2_date_exited_closedwon" | "hs_v2_date_exited_contractsent" | "hs_v2_date_exited_decisionmakerboughtin" | "hs_v2_date_exited_presentationscheduled" | "hs_v2_date_exited_qualifiedtobuy" | "hs_v2_latest_time_in_appointmentscheduled" | "hs_v2_latest_time_in_closedlost" | "hs_v2_latest_time_in_closedwon" | "hs_v2_latest_time_in_contractsent" | "hs_v2_latest_time_in_decisionmakerboughtin" | "hs_v2_latest_time_in_presentationscheduled" | "hs_v2_latest_time_in_qualifiedtobuy" | "hs_was_imported" | "hubspot_owner_assigneddate" | "hubspot_owner_id" | "hubspot_team_id" | "notes_last_contacted" | "notes_last_updated" | "notes_next_activity_date" | "num_associated_contacts" | "num_contacted_notes" | "num_notes" | "pipeline";
          /**
           * Value
           * @description Value to compare the property against; used for operators other than `BETWEEN`, `IN`, `NOT_IN`, `HAS_PROPERTY`, and `NOT_HAS_PROPERTY`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description Values to match for the property, used only when operator is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description Maximum number of deal records to return.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description Specific HubSpot deal property internal names to include in the response; a default set is returned if omitted.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description String to search across default text properties in deals for records containing this string.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description Sort order for results. If multiple sort objects are provided, they are applied in the given order.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description Direction of sorting.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description Internal name of the HubSpot deal property to sort by.
       * @enum {string}
       */
      propertyName: "amount" | "amount_in_home_currency" | "closed_lost_reason" | "closed_won_reason" | "closedate" | "createdate" | "days_to_close" | "deal_currency_code" | "dealname" | "dealstage" | "dealtype" | "description" | "engagements_last_meeting_booked" | "engagements_last_meeting_booked_campaign" | "engagements_last_meeting_booked_medium" | "engagements_last_meeting_booked_source" | "hs_acv" | "hs_all_accessible_team_ids" | "hs_all_assigned_business_unit_ids" | "hs_all_collaborator_owner_ids" | "hs_all_deal_split_owner_ids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_analytics_latest_source" | "hs_analytics_latest_source_company" | "hs_analytics_latest_source_contact" | "hs_analytics_latest_source_data_1" | "hs_analytics_latest_source_data_1_company" | "hs_analytics_latest_source_data_1_contact" | "hs_analytics_latest_source_data_2" | "hs_analytics_latest_source_data_2_company" | "hs_analytics_latest_source_data_2_contact" | "hs_analytics_latest_source_timestamp" | "hs_analytics_latest_source_timestamp_company" | "hs_analytics_latest_source_timestamp_contact" | "hs_analytics_source" | "hs_analytics_source_data_1" | "hs_analytics_source_data_2" | "hs_arr" | "hs_associated_deal_registration_deal_type" | "hs_associated_deal_registration_product_interests" | "hs_campaign" | "hs_closed_amount" | "hs_closed_amount_in_home_currency" | "hs_closed_deal_close_date" | "hs_closed_deal_create_date" | "hs_closed_won_count" | "hs_closed_won_date" | "hs_created_by_user_id" | "hs_createdate" | "hs_date_entered_appointmentscheduled" | "hs_date_entered_closedlost" | "hs_date_entered_closedwon" | "hs_date_entered_contractsent" | "hs_date_entered_decisionmakerboughtin" | "hs_date_entered_presentationscheduled" | "hs_date_entered_qualifiedtobuy" | "hs_date_exited_appointmentscheduled" | "hs_date_exited_closedlost" | "hs_date_exited_closedwon" | "hs_date_exited_contractsent" | "hs_date_exited_decisionmakerboughtin" | "hs_date_exited_presentationscheduled" | "hs_date_exited_qualifiedtobuy" | "hs_days_to_close_raw" | "hs_deal_amount_calculation_preference" | "hs_deal_registration_mrr" | "hs_deal_registration_mrr_currency_code" | "hs_deal_score" | "hs_deal_stage_probability" | "hs_deal_stage_probability_shadow" | "hs_exchange_rate" | "hs_forecast_amount" | "hs_forecast_probability" | "hs_has_empty_conditional_stage_properties" | "hs_is_active_shared_deal" | "hs_is_closed" | "hs_is_closed_count" | "hs_is_closed_lost" | "hs_is_closed_won" | "hs_is_deal_split" | "hs_is_in_first_deal_stage" | "hs_is_open_count" | "hs_lastmodifieddate" | "hs_latest_approval_status" | "hs_latest_approval_status_approval_id" | "hs_latest_meeting_activity" | "hs_likelihood_to_close" | "hs_line_item_global_term_hs_discount_percentage" | "hs_line_item_global_term_hs_discount_percentage_enabled" | "hs_line_item_global_term_hs_recurring_billing_period" | "hs_line_item_global_term_hs_recurring_billing_period_enabled" | "hs_line_item_global_term_hs_recurring_billing_start_date" | "hs_line_item_global_term_hs_recurring_billing_start_date_enabled" | "hs_line_item_global_term_recurringbillingfrequency" | "hs_line_item_global_term_recurringbillingfrequency_enabled" | "hs_manual_forecast_category" | "hs_merged_object_ids" | "hs_mrr" | "hs_next_step" | "hs_next_step_updated_at" | "hs_notes_last_activity" | "hs_notes_next_activity" | "hs_notes_next_activity_type" | "hs_num_associated_active_deal_registrations" | "hs_num_associated_deal_registrations" | "hs_num_associated_deal_splits" | "hs_num_of_associated_line_items" | "hs_num_target_accounts" | "hs_object_id" | "hs_object_source" | "hs_object_source_detail_1" | "hs_object_source_detail_2" | "hs_object_source_detail_3" | "hs_object_source_id" | "hs_object_source_label" | "hs_object_source_user_id" | "hs_open_deal_create_date" | "hs_pinned_engagement_id" | "hs_predicted_amount" | "hs_predicted_amount_in_home_currency" | "hs_priority" | "hs_projected_amount" | "hs_projected_amount_in_home_currency" | "hs_read_only" | "hs_sales_email_last_replied" | "hs_shared_team_ids" | "hs_shared_user_ids" | "hs_source_object_id" | "hs_synced_deal_owner_name_and_email" | "hs_tag_ids" | "hs_tcv" | "hs_time_in_appointmentscheduled" | "hs_time_in_closedlost" | "hs_time_in_closedwon" | "hs_time_in_contractsent" | "hs_time_in_decisionmakerboughtin" | "hs_time_in_presentationscheduled" | "hs_time_in_qualifiedtobuy" | "hs_unique_creation_key" | "hs_updated_by_user_id" | "hs_user_ids_of_all_notification_followers" | "hs_user_ids_of_all_notification_unfollowers" | "hs_user_ids_of_all_owners" | "hs_v2_cumulative_time_in_appointmentscheduled" | "hs_v2_cumulative_time_in_closedlost" | "hs_v2_cumulative_time_in_closedwon" | "hs_v2_cumulative_time_in_contractsent" | "hs_v2_cumulative_time_in_decisionmakerboughtin" | "hs_v2_cumulative_time_in_presentationscheduled" | "hs_v2_cumulative_time_in_qualifiedtobuy" | "hs_v2_date_entered_appointmentscheduled" | "hs_v2_date_entered_closedlost" | "hs_v2_date_entered_closedwon" | "hs_v2_date_entered_contractsent" | "hs_v2_date_entered_decisionmakerboughtin" | "hs_v2_date_entered_presentationscheduled" | "hs_v2_date_entered_qualifiedtobuy" | "hs_v2_date_exited_appointmentscheduled" | "hs_v2_date_exited_closedlost" | "hs_v2_date_exited_closedwon" | "hs_v2_date_exited_contractsent" | "hs_v2_date_exited_decisionmakerboughtin" | "hs_v2_date_exited_presentationscheduled" | "hs_v2_date_exited_qualifiedtobuy" | "hs_v2_latest_time_in_appointmentscheduled" | "hs_v2_latest_time_in_closedlost" | "hs_v2_latest_time_in_closedwon" | "hs_v2_latest_time_in_contractsent" | "hs_v2_latest_time_in_decisionmakerboughtin" | "hs_v2_latest_time_in_presentationscheduled" | "hs_v2_latest_time_in_qualifiedtobuy" | "hs_was_imported" | "hubspot_owner_assigneddate" | "hubspot_owner_id" | "hubspot_team_id" | "notes_last_contacted" | "notes_last_updated" | "notes_next_activity_date" | "num_associated_contacts" | "num_contacted_notes" | "num_notes" | "pipeline";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_DEALS_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_DEALS_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description Search results, including a list of matching deals (under 'results' key) and pagination information (under 'paging' key if applicable).
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_EMAILS tool input.
 */
type HUBSPOT_SEARCH_EMAILS_INPUT = {
  /**
   * After
   * @description Pagination token from previous response.
   */
  after?: string;
  /**
   * Limit
   * @description Maximum number of emails to return.
   * @default 10
   */
  limit: number;
  /**
   * Properties
   * @description Email property names to include in the response.
   */
  properties?: string[];
  /**
   * Query
   * @description Text search query to find emails by subject or content.
   * @default null
   */
  query: string | null;
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_EMAILS tool output.
 */
type HUBSPOT_SEARCH_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Search results including matching emails and pagination information.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS tool input.
 */
type HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS_INPUT = {
  /**
   * After
   * @description A pagination token from a previous response to retrieve the next page of results.
   */
  after?: string;
  /**
   * Filter Groups
   * @description A list of filter groups to apply to the search. Each group represents a set of AND-ed filters. Multiple filter groups are combined using OR logic.
   */
  filterGroups?: {
      /**
       * Filters
       * @description A list of filter criteria. Filters within this group are combined using AND logic.
       */
      filters: {
          /**
           * High Value
           * @description Specifies the higher bound for a `BETWEEN` operation. Required only when `operator` is `BETWEEN`.
           */
          highValue?: string;
          /**
           * Operator
           * @description The filter operator to apply.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The internal name of the feedback submission property to filter on.
           */
          propertyName: string;
          /**
           * Value
           * @description The string value to compare the property against. Used for operators like `EQ`, `LT`, `GT`, `CONTAINS_TOKEN`, etc., and as the lower bound when `operator` is `BETWEEN`.
           */
          value?: string;
          /**
           * Values
           * @description A list of string values to match against the property. Used when `operator` is `IN` or `NOT_IN`.
           */
          values?: string[];
      }[];
  }[];
  /**
   * Limit
   * @description The maximum number of feedback submissions to return in a single response.
   */
  limit?: number;
  /**
   * Properties
   * @description A list of specific feedback submission property names to be included in the response. If omitted, a default set of properties is returned.
   */
  properties?: string[];
  /**
   * Query
   * @description A string to search across all searchable properties of feedback submissions. This performs a broad text search.
   */
  query?: string;
  /**
   * Sorts
   * @description A list of property names to sort the results by. Properties are sorted in ascending order by default. Prefix a property name with a hyphen (`-`) for descending order.
   */
  sorts?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS tool output.
 */
type HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the search results. This typically includes a 'results' array with feedback submission objects and may include a 'paging' object for pagination if more results are available.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description Pagination cursor from a prior response to fetch the next page of results.
   */
  after?: string;
  /**
   * Filter Groups
   * @description List of filter groups. Line items must match all filters in at least one group (filters within a group are ANDed; groups are ORed).
   */
  filterGroups?: {
      /**
       * Filters
       * @description List of filter conditions to apply within this group. All conditions are ANDed together.
       */
      filters: {
          /**
           * High Value
           * @description Higher value for range-based filters (e.g., `BETWEEN`).
           */
          highValue?: string;
          /**
           * Operator
           * @description Filtering operator (e.g., `EQ`, `BETWEEN`) defining the comparison logic.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description Name of the line item property to filter on.
           */
          propertyName: string;
          /**
           * Value
           * @description Value to filter by; serves as the lower bound for the `BETWEEN` operator.
           */
          value?: string;
          /**
           * Values
           * @description List of values for multi-value operators (e.g., `IN`, `NOT_IN`).
           */
          values?: string[];
      }[];
  }[];
  /**
   * Limit
   * @description Maximum number of line items to retrieve.
   */
  limit?: number;
  /**
   * Properties
   * @description Specific line item property names to include in results. If omitted, a default set is returned.
   */
  properties?: string[];
  /**
   * Query
   * @description Optional search string applied across all searchable line item properties.
   */
  query?: string;
  /**
   * Sorts
   * @description List of property names for sorting results. Prepend '-' for descending order.
   */
  sorts?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_PRODUCTS tool input.
 */
type HUBSPOT_SEARCH_PRODUCTS_INPUT = {
  /**
   * After
   * @description The cursor for pagination. To get the next page of results, use the `after` value from the `paging.next.after` property of a previous response.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description A list of internal names of custom product properties to include in the response. It's important to use the property's internal API name. For example `['custom_field_api_name_1', 'custom_field_api_name_2']`.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description A list of filter groups to apply to the search. Each filter group contains one or more filters. Filters within a group are combined using AND logic, while multiple filter groups are combined using OR logic. For example: `[{'filters': [{'propertyName': 'price', 'operator': 'GT', 'value': '100'}]}]`.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description A list of filter criteria. Filters within a single group are combined with AND logic.
       */
      filters: {
          /**
           * High Value
           * @description The higher string value for a range filter. Required and only used when the operator is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description The comparison operator defining how the `propertyName` is evaluated against the provided value(s). See `OperatorEnm` for all options.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The product property to filter on. Choose from available `HubSpotProductProperties` or a custom property name.
           * @enum {string}
           */
          propertyName: "name" | "description" | "hs_sku" | "hs_product_id" | "price" | "hs_recurring_billing_period" | "hs_cost_of_goods_sold" | "hs_active" | "hs_archived" | "hs_featured" | "hs_product_type" | "hs_product_category" | "hs_product_subcategory" | "quantity" | "tax_category" | "hs_url" | "hs_images" | "hs_object_id" | "createdate" | "hs_lastmodifieddate" | "hs_created_by" | "hs_updated_by" | "hs_valid_from" | "hs_valid_through" | "hs_product_status";
          /**
           * Value
           * @description The single string value to filter by. Required for most operators (e.g., `EQ`, `GT`, `CONTAINS_TOKEN`) and serves as the lower bound when operator is `BETWEEN`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description A list of string values to filter by. Required and only used when the operator is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description The maximum number of products to return in the search results.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description A list of specific standard product properties to include in the response. If not provided, a default set of properties will be returned. Refer to `HubSpotProductProperties` for available options.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description A string to search across all default text properties of products. Finds records where any of these properties contain the specified string.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description A list of sort objects to define the order of search results. Each object specifies a `propertyName` and a `direction`. For example, `[{'propertyName': 'name', 'direction': 'ASCENDING'}]` sorts products by name alphabetically.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The sorting direction for the `propertyName`. Can be `ASCENDING` or `DESCENDING`.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The product property to sort by. Choose from available `HubSpotProductProperties`.
       * @enum {string}
       */
      propertyName: "name" | "description" | "hs_sku" | "hs_product_id" | "price" | "hs_recurring_billing_period" | "hs_cost_of_goods_sold" | "hs_active" | "hs_archived" | "hs_featured" | "hs_product_type" | "hs_product_category" | "hs_product_subcategory" | "quantity" | "tax_category" | "hs_url" | "hs_images" | "hs_object_id" | "createdate" | "hs_lastmodifieddate" | "hs_created_by" | "hs_updated_by" | "hs_valid_from" | "hs_valid_through" | "hs_product_status";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_PRODUCTS tool output.
 */
type HUBSPOT_SEARCH_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the search results. This typically includes a 'results' key with a list of product objects and a 'paging' key for pagination details.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description The cursor for pagination. To get the next page of results, use the `after` value from the `paging.next.after` property of a previous response.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description A list of internal names of custom product properties to include in the response. It's important to use the property's internal API name. For example `['custom_field_api_name_1', 'custom_field_api_name_2']`.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description A list of filter groups to apply to the search. Each filter group contains one or more filters. Filters within a group are combined using AND logic, while multiple filter groups are combined using OR logic. For example: `[{'filters': [{'propertyName': 'price', 'operator': 'GT', 'value': '100'}]}]`.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description A list of filter criteria. Filters within a single group are combined with AND logic.
       */
      filters: {
          /**
           * High Value
           * @description The higher string value for a range filter. Required and only used when the operator is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description The comparison operator defining how the `propertyName` is evaluated against the provided value(s). See `OperatorEnm` for all options.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The product property to filter on. Choose from available `HubSpotProductProperties` or a custom property name.
           * @enum {string}
           */
          propertyName: "name" | "description" | "hs_sku" | "hs_product_id" | "price" | "hs_recurring_billing_period" | "hs_cost_of_goods_sold" | "hs_active" | "hs_archived" | "hs_featured" | "hs_product_type" | "hs_product_category" | "hs_product_subcategory" | "quantity" | "tax_category" | "hs_url" | "hs_images" | "hs_object_id" | "createdate" | "hs_lastmodifieddate" | "hs_created_by" | "hs_updated_by" | "hs_valid_from" | "hs_valid_through" | "hs_product_status";
          /**
           * Value
           * @description The single string value to filter by. Required for most operators (e.g., `EQ`, `GT`, `CONTAINS_TOKEN`) and serves as the lower bound when operator is `BETWEEN`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description A list of string values to filter by. Required and only used when the operator is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description The maximum number of products to return in the search results.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description A list of specific standard product properties to include in the response. If not provided, a default set of properties will be returned. Refer to `HubSpotProductProperties` for available options.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description A string to search across all default text properties of products. Finds records where any of these properties contain the specified string.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description A list of sort objects to define the order of search results. Each object specifies a `propertyName` and a `direction`. For example, `[{'propertyName': 'name', 'direction': 'ASCENDING'}]` sorts products by name alphabetically.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The sorting direction for the `propertyName`. Can be `ASCENDING` or `DESCENDING`.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The product property to sort by. Choose from available `HubSpotProductProperties`.
       * @enum {string}
       */
      propertyName: "name" | "description" | "hs_sku" | "hs_product_id" | "price" | "hs_recurring_billing_period" | "hs_cost_of_goods_sold" | "hs_active" | "hs_archived" | "hs_featured" | "hs_product_type" | "hs_product_category" | "hs_product_subcategory" | "quantity" | "tax_category" | "hs_url" | "hs_images" | "hs_object_id" | "createdate" | "hs_lastmodifieddate" | "hs_created_by" | "hs_updated_by" | "hs_valid_from" | "hs_valid_through" | "hs_product_status";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the search results. This typically includes a 'results' key with a list of product objects and a 'paging' key for pagination details.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_QUOTES_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_QUOTES_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description A cursor for pagination. Set this to the 'next.after' value from a previous response to get the next page of results. If not provided, the first page is returned.
   */
  after?: string;
  /**
   * Filter Groups
   * @description A list of filter groups to apply to the search. Multiple filter groups are combined with an OR logic, while filters within a group are combined with AND logic.
   */
  filterGroups?: {
      /**
       * Filters
       * @description A list of filters to apply. Multiple filters in this list will be combined with an AND operator.
       */
      filters: {
          /**
           * High Value
           * @description The higher value for a 'BETWEEN' operator. This is required if the operator is 'BETWEEN'.
           */
          highValue?: string;
          /**
           * Operator
           * @description The comparison operator to use for the filter. Determines how the 'propertyName' and 'value' (or 'values'/'highValue') are compared.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The internal name of the quote property to filter by.
           */
          propertyName: string;
          /**
           * Value
           * @description The value to compare the property against. This is required for most operators, except 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', and 'NOT_HAS_PROPERTY'.
           */
          value?: string;
          /**
           * Values
           * @description A list of values to be used with 'IN' or 'NOT_IN' operators. This is required if the operator is 'IN' or 'NOT_IN'.
           */
          values?: string[];
      }[];
  }[];
  /**
   * Limit
   * @description The maximum number of quote records to return in the response. Default is 10, maximum is 100.
   */
  limit?: number;
  /**
   * Properties
   * @description Specific quote property internal names to include in the response; omitting returns a default set. Include custom property names here.
   */
  properties?: string[];
  /**
   * Query
   * @description A string to search across all searchable properties of quotes. This performs a broad text search.
   */
  query?: string;
  /**
   * Sorts
   * @description A list of property names to sort the results by. Prepend '-' for descending order. For example, 'hs_quote_amount' for ascending or '-hs_createdate' for descending.
   */
  sorts?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_QUOTES_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_QUOTES_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the search results, including a list of quote objects and pagination information.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_TICKETS tool input.
 */
type HUBSPOT_SEARCH_TICKETS_INPUT = {
  /**
   * After
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @default []
   */
  filterGroups: unknown[];
  /**
   * Limit
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description Ticket properties to include in the response.
   * @default [
   *       "subject",
   *       "content",
   *       "hs_ticket_priority",
   *       "hs_pipeline_stage"
   *     ]
   */
  properties: string[];
  /**
   * Query
   * @description Text search query to find tickets by content or subject.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @default []
   */
  sorts: unknown[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_TICKETS tool output.
 */
type HUBSPOT_SEARCH_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Search results including matching tickets and pagination information.
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
 * Type of HUBSPOT's HUBSPOT_SEARCH_TICKETS_BY_CRITERIA tool input.
 */
type HUBSPOT_SEARCH_TICKETS_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description The cursor for pagination. Use the 'after' value from the 'paging.next.after' property of a previous response to fetch the next page of results.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description A list of API names for custom ticket properties to include in the response. These should be predefined in your HubSpot account. Combine with 'properties' field if you need both standard and custom properties.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description A list of filter groups to apply to the search. Each filter group consists of one or more filters. Filters within a single group are combined using AND logic. Multiple filter groups are combined using OR logic. For example: `[{'filters': [{'propertyName': 'hs_ticket_priority', 'operator': 'EQ', 'value': 'HIGH'}]}]`.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description A list of filter criteria. All filters in this list are combined using AND logic.
       */
      filters: {
          /**
           * High Value
           * @description Higher bound value for the 'BETWEEN' operator.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description The comparison operator to use for the filter.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The name of the ticket property to filter on.
           * @enum {string}
           */
          propertyName: "subject" | "content" | "hs_ticket_name" | "hs_ticket_id" | "hs_pipeline" | "hs_pipeline_stage" | "hs_ticket_priority" | "hs_ticket_status" | "createdate" | "hs_closed_date" | "hs_lastmodifieddate" | "first_agent_reply_date" | "time_to_close" | "time_to_first_response" | "hubspot_owner_id" | "hubspot_team_id" | "hs_created_by" | "hs_contact_id" | "hs_company_id" | "hs_deal_id" | "source_type" | "source_category" | "source_data_1" | "source_data_2" | "hs_resolution_date" | "hs_resolution" | "hs_resolved_by" | "hs_nps_follow_up" | "hs_customer_satisfaction" | "hs_feedback_last_nps" | "hs_object_id" | "hs_merged_object_ids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_all_accessible_team_ids" | "hs_last_engagement_date" | "hs_last_contacted_date" | "hs_number_of_times_contacted" | "hs_ticket_category" | "hs_ticket_subcategory";
          /**
           * Value
           * @description The value to filter by. Used for operators other than 'BETWEEN', 'IN', or 'NOT_IN'. For 'BETWEEN', this is the lower bound value.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description List of values to be used with 'IN' or 'NOT_IN' operators.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description Maximum number of ticket records to return. Maximum value is 100.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description Specifies ticket property API names to include in the response. Defines which fields are returned; if omitted, a default set of properties is returned.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description A string to search across all default text properties of tickets (e.g., subject, content). Finds tickets where any of these properties contain the query string.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description A list of sort objects to define the order of results. Each object specifies a ticket property and sort direction. For example, `[{'propertyName': 'hs_closed_date', 'direction': 'DESCENDING'}]` sorts tickets by close date in descending order.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The direction of the sort, either 'ASCENDING' or 'DESCENDING'.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The name of the ticket property to sort by.
       * @enum {string}
       */
      propertyName: "subject" | "content" | "hs_ticket_name" | "hs_ticket_id" | "hs_pipeline" | "hs_pipeline_stage" | "hs_ticket_priority" | "hs_ticket_status" | "createdate" | "hs_closed_date" | "hs_lastmodifieddate" | "first_agent_reply_date" | "time_to_close" | "time_to_first_response" | "hubspot_owner_id" | "hubspot_team_id" | "hs_created_by" | "hs_contact_id" | "hs_company_id" | "hs_deal_id" | "source_type" | "source_category" | "source_data_1" | "source_data_2" | "hs_resolution_date" | "hs_resolution" | "hs_resolved_by" | "hs_nps_follow_up" | "hs_customer_satisfaction" | "hs_feedback_last_nps" | "hs_object_id" | "hs_merged_object_ids" | "hs_all_owner_ids" | "hs_all_team_ids" | "hs_all_accessible_team_ids" | "hs_last_engagement_date" | "hs_last_contacted_date" | "hs_number_of_times_contacted" | "hs_ticket_category" | "hs_ticket_subcategory";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SEARCH_TICKETS_BY_CRITERIA tool output.
 */
type HUBSPOT_SEARCH_TICKETS_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description The response data containing the list of tickets matching the search criteria, and pagination information under a 'paging' key if applicable.
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
 * Type of HUBSPOT's HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA tool input.
 */
type HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA_INPUT = {
  /**
   * After
   * @description The cursor for pagination. To get the next page of results, use the `after` value from the `paging.next.after` property of a previous response.
   * @default null
   */
  after: string | null;
  /**
   * Custom Properties
   * @description A list of internal names of custom product properties to include in the response. It's important to use the property's internal API name. For example `['custom_field_api_name_1', 'custom_field_api_name_2']`.
   * @default []
   */
  custom_properties: string[];
  /**
   * Filter Groups
   * @description A list of filter groups to apply to the search. Each filter group contains one or more filters. Filters within a group are combined using AND logic, while multiple filter groups are combined using OR logic. For example: `[{'filters': [{'propertyName': 'price', 'operator': 'GT', 'value': '100'}]}]`.
   * @default []
   */
  filterGroups: {
      /**
       * Filters
       * @description A list of filter criteria. Filters within a single group are combined with AND logic.
       */
      filters: {
          /**
           * High Value
           * @description The higher string value for a range filter. Required and only used when the operator is `BETWEEN`.
           * @default null
           */
          highValue: string | null;
          /**
           * Operator
           * @description The comparison operator defining how the `propertyName` is evaluated against the provided value(s). See `OperatorEnm` for all options.
           * @enum {string}
           */
          operator: "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN";
          /**
           * Property Name
           * @description The product property to filter on. Choose from available `HubSpotProductProperties` or a custom property name.
           * @enum {string}
           */
          propertyName: "name" | "description" | "hs_sku" | "hs_product_id" | "price" | "hs_recurring_billing_period" | "hs_cost_of_goods_sold" | "hs_active" | "hs_archived" | "hs_featured" | "hs_product_type" | "hs_product_category" | "hs_product_subcategory" | "quantity" | "tax_category" | "hs_url" | "hs_images" | "hs_object_id" | "createdate" | "hs_lastmodifieddate" | "hs_created_by" | "hs_updated_by" | "hs_valid_from" | "hs_valid_through" | "hs_product_status";
          /**
           * Value
           * @description The single string value to filter by. Required for most operators (e.g., `EQ`, `GT`, `CONTAINS_TOKEN`) and serves as the lower bound when operator is `BETWEEN`.
           * @default null
           */
          value: string | null;
          /**
           * Values
           * @description A list of string values to filter by. Required and only used when the operator is `IN` or `NOT_IN`.
           * @default null
           */
          values: string[] | null;
      }[];
  }[];
  /**
   * Limit
   * @description The maximum number of products to return in the search results.
   * @default 5
   */
  limit: number;
  /**
   * Properties
   * @description A list of specific standard product properties to include in the response. If not provided, a default set of properties will be returned. Refer to `HubSpotProductProperties` for available options.
   * @default []
   */
  properties: string[];
  /**
   * Query
   * @description A string to search across all default text properties of products. Finds records where any of these properties contain the specified string.
   * @default null
   */
  query: string | null;
  /**
   * Sorts
   * @description A list of sort objects to define the order of search results. Each object specifies a `propertyName` and a `direction`. For example, `[{'propertyName': 'name', 'direction': 'ASCENDING'}]` sorts products by name alphabetically.
   * @default []
   */
  sorts: {
      /**
       * Direction
       * @description The sorting direction for the `propertyName`. Can be `ASCENDING` or `DESCENDING`.
       * @enum {string}
       */
      direction: "ASCENDING" | "DESCENDING";
      /**
       * Property Name
       * @description The product property to sort by. Choose from available `HubSpotProductProperties`.
       * @enum {string}
       */
      propertyName: "name" | "description" | "hs_sku" | "hs_product_id" | "price" | "hs_recurring_billing_period" | "hs_cost_of_goods_sold" | "hs_active" | "hs_archived" | "hs_featured" | "hs_product_type" | "hs_product_category" | "hs_product_subcategory" | "quantity" | "tax_category" | "hs_url" | "hs_images" | "hs_object_id" | "createdate" | "hs_lastmodifieddate" | "hs_created_by" | "hs_updated_by" | "hs_valid_from" | "hs_valid_through" | "hs_product_status";
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA tool output.
 */
type HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the search results. This typically includes a 'results' key with a list of product objects and a 'paging' key for pagination details.
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
 * Type of HUBSPOT's HUBSPOT_SET_CALL_RECORDING_SETTINGS tool input.
 */
type HUBSPOT_SET_CALL_RECORDING_SETTINGS_INPUT = {
  /**
   * App Id
   * @description Unique identifier for the third-party calling app integration in HubSpot CRM whose recording settings will be modified.
   */
  appId?: number;
  /**
   * Url To Retrieve Authed Recording
   * @description Endpoint URL for HubSpot to retrieve call recordings; must serve recordings for specific calls and may require authentication.
   */
  urlToRetrieveAuthedRecording?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_SET_CALL_RECORDING_SETTINGS tool output.
 */
type HUBSPOT_SET_CALL_RECORDING_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Confirmation response from the API regarding the updated settings.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE tool input.
 */
type HUBSPOT_UPDATE_INPUT = {
  /**
   * Email Id
   * @description Identifier of the email object. This is its internal HubSpot ID, or a custom unique property value if `idProperty` is also provided.
   */
  emailId?: string;
  /**
   * Id Property
   * @description Name of a unique HubSpot property for emails. If specified, `emailId` must be the value of this unique property, not the internal HubSpot ID.
   * @default null
   */
  idProperty: string | null;
  /**
   * Properties
   * @description Property names and new values for the email. Values overwrite existing ones; an empty string clears a property. Read-only or non-existent properties are ignored.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE tool output.
 */
type HUBSPOT_UPDATE_OUTPUT = {
  /**
   * Data
   * @description The updated email object, including all its properties.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS tool input.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS_INPUT = {
  /**
   * Inputs
   * @description A list of campaign objects to update. Each object must include the campaign 'id' and a 'properties' dictionary.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the marketing campaign.
       */
      id: string;
      /**
       * Properties
       * @description Properties to update for the campaign; an empty string value resets a property. Refer to HubSpot's documentation for available properties.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS tool output.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS tool input.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS_INPUT = {
  /**
   * Inputs
   * @description List of contact update operations, each specifying contact 'id' (VID) and 'properties' with new values.
   */
  inputs?: {
      /**
       * Id
       * @description The VID (HubSpot Contact ID) of the contact to be updated.
       */
      id: string | null;
      /**
       * Properties
       * @description Properties to update. Only include changes. Use HubSpot internal property names.
       * @default null
       */
      properties: {
          /**
           * Address
           * @description Full street address.
           * @default null
           */
          address: string | null;
          /**
           * Annualrevenue
           * @description Annual revenue (numeric value stored as string).
           * @default null
           */
          annualrevenue: string | null;
          /**
           * Associatedcompanyid
           * @description ID of the primary associated company.
           * @default null
           */
          associatedcompanyid: string | null;
          /**
           * Associatedcompanylastupdated
           * @description Timestamp of last update to primary associated company (often Unix milliseconds).
           * @default null
           */
          associatedcompanylastupdated: string | null;
          /**
           * City
           * @description City of residence.
           * @default null
           */
          city: string | null;
          /**
           * Closedate
           * @description Close date of associated deal (YYYY-MM-DD or Unix milliseconds).
           * @default null
           */
          closedate: string | null;
          /**
           * Company
           * @description Company name.
           * @default null
           */
          company: string | null;
          /**
           * Company Size
           * @description Company size (e.g., '1-10 employees', '500+ employees').
           * @default null
           */
          company_size: string | null;
          /**
           * Country
           * @description Country of residence.
           * @default null
           */
          country: string | null;
          /**
           * Createdate
           * @description Record creation date (ISO 8601 or Unix milliseconds).
           * @default null
           */
          createdate: string | null;
          /**
           * Currentlyinworkflow
           * @description Boolean (as string 'true'/'false') indicating if currently in any HubSpot workflow.
           * @default null
           */
          currentlyinworkflow: string | null;
          /**
           * Date Of Birth
           * @description Date of birth (e.g., 'YYYY-MM-DD').
           * @default null
           */
          date_of_birth: string | null;
          /**
           * Days To Close
           * @description Days to close associated deal (numeric value as string).
           * @default null
           */
          days_to_close: string | null;
          /**
           * Degree
           * @description Highest educational degree.
           * @default null
           */
          degree: string | null;
          /**
           * Email
           * @description Primary email address (HubSpot unique identifier by default).
           * @default null
           */
          email: string | null;
          /**
           * Engagements Last Meeting Booked
           * @description Timestamp of last booked meeting (often Unix milliseconds).
           * @default null
           */
          engagements_last_meeting_booked: string | null;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description Campaign GUID for last booked meeting.
           * @default null
           */
          engagements_last_meeting_booked_campaign: string | null;
          /**
           * Engagements Last Meeting Booked Medium
           * @description Medium for last booked meeting (e.g., 'email', 'organic').
           * @default null
           */
          engagements_last_meeting_booked_medium: string | null;
          /**
           * Engagements Last Meeting Booked Source
           * @description Source for last booked meeting (e.g., 'Forms', 'Meetings').
           * @default null
           */
          engagements_last_meeting_booked_source: string | null;
          /**
           * Fax
           * @description Fax number.
           * @default null
           */
          fax: string | null;
          /**
           * Field Of Study
           * @description Primary field of academic study.
           * @default null
           */
          field_of_study: string | null;
          /**
           * First Conversion Date
           * @description Timestamp of first conversion (often Unix milliseconds).
           * @default null
           */
          first_conversion_date: string | null;
          /**
           * First Conversion Event Name
           * @description Event name for first conversion (e.g., form name).
           * @default null
           */
          first_conversion_event_name: string | null;
          /**
           * First Deal Created Date
           * @description Timestamp of first deal creation (often Unix milliseconds).
           * @default null
           */
          first_deal_created_date: string | null;
          /**
           * Firstname
           * @description First name.
           * @default null
           */
          firstname: string | null;
          /**
           * Followercount
           * @description Social media follower count (numeric value as string).
           * @default null
           */
          followercount: string | null;
          /**
           * Gender
           * @description Gender (e.g., 'Male', 'Female', 'Other').
           * @default null
           */
          gender: string | null;
          /**
           * Graduation Date
           * @description Graduation date (e.g., 'YYYY-MM-DD').
           * @default null
           */
          graduation_date: string | null;
          /**
           * Hs Additional Emails
           * @description Semicolon-separated additional email addresses (e.g., 'email1@example.com;email2@example.com').
           * @default null
           */
          hs_additional_emails: string | null;
          /**
           * Hs All Accessible Team Ids
           * @description Semicolon-separated IDs of all teams with access to the contact record.
           * @default null
           */
          hs_all_accessible_team_ids: string | null;
          /**
           * Hs All Assigned Business Unit Ids
           * @description Semicolon-separated IDs of all assigned business units.
           * @default null
           */
          hs_all_assigned_business_unit_ids: string | null;
          /**
           * Hs All Contact Vids
           * @description Semicolon-separated known associated HubSpot contact IDs (VIDs), e.g., if merged.
           * @default null
           */
          hs_all_contact_vids: string | null;
          /**
           * Hs All Owner Ids
           * @description Semicolon-separated IDs of all assigned owners.
           * @default null
           */
          hs_all_owner_ids: string | null;
          /**
           * Hs All Team Ids
           * @description Semicolon-separated IDs of all teams the contact is a member of or assigned to.
           * @default null
           */
          hs_all_team_ids: string | null;
          /**
           * Hs Analytics Average Page Views
           * @description Average page views per session (numeric value as string).
           * @default null
           */
          hs_analytics_average_page_views: string | null;
          /**
           * Hs Analytics First Referrer
           * @description First external referrer URL.
           * @default null
           */
          hs_analytics_first_referrer: string | null;
          /**
           * Hs Analytics First Timestamp
           * @description Timestamp of first interaction with website/tracked assets (often Unix milliseconds).
           * @default null
           */
          hs_analytics_first_timestamp: string | null;
          /**
           * Hs Analytics First Touch Converting Campaign
           * @description GUID of HubSpot campaign for first touch conversion.
           * @default null
           */
          hs_analytics_first_touch_converting_campaign: string | null;
          /**
           * Hs Analytics First Url
           * @description First URL visited on your website.
           * @default null
           */
          hs_analytics_first_url: string | null;
          /**
           * Hs Analytics First Visit Timestamp
           * @description Timestamp of first website visit (often Unix milliseconds).
           * @default null
           */
          hs_analytics_first_visit_timestamp: string | null;
          /**
           * Hs Analytics Last Referrer
           * @description Last external referrer URL before most recent session/conversion.
           * @default null
           */
          hs_analytics_last_referrer: string | null;
          /**
           * Hs Analytics Last Timestamp
           * @description Timestamp of most recent interaction with website/tracked assets (often Unix milliseconds).
           * @default null
           */
          hs_analytics_last_timestamp: string | null;
          /**
           * Hs Analytics Last Touch Converting Campaign
           * @description GUID of HubSpot campaign for last touch conversion.
           * @default null
           */
          hs_analytics_last_touch_converting_campaign: string | null;
          /**
           * Hs Analytics Last Url
           * @description Last URL visited during most recent session.
           * @default null
           */
          hs_analytics_last_url: string | null;
          /**
           * Hs Analytics Last Visit Timestamp
           * @description Timestamp of most recent website visit (often Unix milliseconds).
           * @default null
           */
          hs_analytics_last_visit_timestamp: string | null;
          /**
           * Hs Analytics Num Event Completions
           * @description Total HubSpot marketing events completed (numeric value as string).
           * @default null
           */
          hs_analytics_num_event_completions: string | null;
          /**
           * Hs Analytics Num Page Views
           * @description Total page views across all sessions (numeric value as string).
           * @default null
           */
          hs_analytics_num_page_views: string | null;
          /**
           * Hs Analytics Num Visits
           * @description Total website sessions (visits) (numeric value as string).
           * @default null
           */
          hs_analytics_num_visits: string | null;
          /**
           * Hs Analytics Revenue
           * @description Revenue attributed via HubSpot analytics (numeric value as string).
           * @default null
           */
          hs_analytics_revenue: string | null;
          /**
           * Hs Analytics Source
           * @description Original contact source (e.g., 'Organic Search', 'Paid Social', 'Direct Traffic').
           * @default null
           */
          hs_analytics_source: string | null;
          /**
           * Hs Analytics Source Data 1
           * @description Additional source data (e.g., specific campaign name or search term).
           * @default null
           */
          hs_analytics_source_data_1: string | null;
          /**
           * Hs Analytics Source Data 2
           * @description Further additional source data (e.g., ad group or specific link clicked).
           * @default null
           */
          hs_analytics_source_data_2: string | null;
          /**
           * Hs Lead Status
           * @description Lead status indicating the current state of the lead (e.g., 'NEW', 'OPEN', 'IN_PROGRESS', 'OPEN_DEAL', 'UNQUALIFIED', 'ATTEMPTED_TO_CONTACT', 'CONNECTED', 'BAD_TIMING').
           * @default null
           */
          hs_lead_status: string | null;
          /**
           * Hubspot Owner Assigneddate
           * @description Timestamp of HubSpot owner assignment (often Unix milliseconds).
           * @default null
           */
          hubspot_owner_assigneddate: string | null;
          /**
           * Hubspot Owner Id
           * @description ID of the HubSpot user owning this contact.
           * @default null
           */
          hubspot_owner_id: string | null;
          /**
           * Hubspot Team Id
           * @description ID of the HubSpot team for the contact or owner.
           * @default null
           */
          hubspot_team_id: string | null;
          /**
           * Hubspotscore
           * @description HubSpot lead score (numeric value as string).
           * @default null
           */
          hubspotscore: string | null;
          /**
           * Industry
           * @description Industry of contact or company.
           * @default null
           */
          industry: string | null;
          /**
           * Ip City
           * @description City from IP address (recent interaction).
           * @default null
           */
          ip_city: string | null;
          /**
           * Ip Country
           * @description Country from IP address.
           * @default null
           */
          ip_country: string | null;
          /**
           * Ip Country Code
           * @description Country code from IP address (e.g., 'US', 'GB').
           * @default null
           */
          ip_country_code: string | null;
          /**
           * Ip Latlon
           * @description Approximate latitude,longitude from IP address.
           * @default null
           */
          ip_latlon: string | null;
          /**
           * Ip State
           * @description State/region from IP address.
           * @default null
           */
          ip_state: string | null;
          /**
           * Ip State Code
           * @description State/region code from IP address (e.g., 'CA', 'NY').
           * @default null
           */
          ip_state_code: string | null;
          /**
           * Ip Zipcode
           * @description Postal/ZIP code from IP address.
           * @default null
           */
          ip_zipcode: string | null;
          /**
           * Job Function
           * @description Job function or department (e.g., 'Marketing', 'Sales', 'Engineering').
           * @default null
           */
          job_function: string | null;
          /**
           * Jobtitle
           * @description Job title.
           * @default null
           */
          jobtitle: string | null;
          /**
           * Kloutscoregeneral
           * @description Klout score, if available (numeric value as string).
           * @default null
           */
          kloutscoregeneral: string | null;
          /**
           * Lastmodifieddate
           * @description Record last modification date (ISO 8601 or Unix milliseconds).
           * @default null
           */
          lastmodifieddate: string | null;
          /**
           * Lastname
           * @description Last name.
           * @default null
           */
          lastname: string | null;
          /**
           * Lifecyclestage
           * @description Current marketing/sales funnel stage. Must be a valid lifecycle stage in your HubSpot instance.
           * @default null
           */
          lifecyclestage: string | null;
          /**
           * Linkedinbio
           * @description LinkedIn profile biography.
           * @default null
           */
          linkedinbio: string | null;
          /**
           * Linkedinconnections
           * @description Number of LinkedIn connections (numeric value as string).
           * @default null
           */
          linkedinconnections: string | null;
          /**
           * Marital Status
           * @description Marital status (e.g., 'Single', 'Married').
           * @default null
           */
          marital_status: string | null;
          /**
           * Message
           * @description General message/note, often from form submission.
           * @default null
           */
          message: string | null;
          /**
           * Military Status
           * @description Military status.
           * @default null
           */
          military_status: string | null;
          /**
           * Mobilephone
           * @description Mobile phone number.
           * @default null
           */
          mobilephone: string | null;
          /**
           * Notes Last Contacted
           * @description Timestamp of last logged contact (often Unix milliseconds).
           * @default null
           */
          notes_last_contacted: string | null;
          /**
           * Notes Last Updated
           * @description Timestamp of last note update (often Unix milliseconds).
           * @default null
           */
          notes_last_updated: string | null;
          /**
           * Notes Next Activity Date
           * @description Timestamp of next scheduled activity (often Unix milliseconds).
           * @default null
           */
          notes_next_activity_date: string | null;
          /**
           * Num Associated Deals
           * @description Number of currently associated deals (numeric value as string).
           * @default null
           */
          num_associated_deals: string | null;
          /**
           * Num Contacted Notes
           * @description Number of notes about contacting this contact (numeric value as string).
           * @default null
           */
          num_contacted_notes: string | null;
          /**
           * Num Conversion Events
           * @description Total recorded conversion events (numeric value as string).
           * @default null
           */
          num_conversion_events: string | null;
          /**
           * Num Notes
           * @description Total associated notes (numeric value as string).
           * @default null
           */
          num_notes: string | null;
          /**
           * Num Unique Conversion Events
           * @description Number of unique types of conversion events (numeric value as string).
           * @default null
           */
          num_unique_conversion_events: string | null;
          /**
           * Numemployees
           * @description Number of employees in company (numeric value as string).
           * @default null
           */
          numemployees: string | null;
          /**
           * Owneremail
           * @description Email address of owning HubSpot user.
           * @default null
           */
          owneremail: string | null;
          /**
           * Ownername
           * @description Full name of owning HubSpot user.
           * @default null
           */
          ownername: string | null;
          /**
           * Phone
           * @description Primary phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Photo
           * @description URL to photo/avatar.
           * @default null
           */
          photo: string | null;
          /**
           * Recent Conversion Date
           * @description Timestamp of most recent conversion (often Unix milliseconds).
           * @default null
           */
          recent_conversion_date: string | null;
          /**
           * Recent Conversion Event Name
           * @description Event name for most recent conversion.
           * @default null
           */
          recent_conversion_event_name: string | null;
          /**
           * Recent Deal Amount
           * @description Amount of most recent associated deal (numeric value as string).
           * @default null
           */
          recent_deal_amount: string | null;
          /**
           * Recent Deal Close Date
           * @description Close date of most recent deal (Unix ms or YYYY-MM-DD).
           * @default null
           */
          recent_deal_close_date: string | null;
          /**
           * Relationship Status
           * @description Relationship status (e.g. 'Single', 'In a relationship').
           * @default null
           */
          relationship_status: string | null;
          /**
           * Salutation
           * @description Salutation (e.g., 'Mr.', 'Ms.', 'Dr.').
           * @default null
           */
          salutation: string | null;
          /**
           * School
           * @description School name attended/attending.
           * @default null
           */
          school: string | null;
          /**
           * Seniority
           * @description Seniority level (e.g., 'Entry-level', 'Manager', 'VP').
           * @default null
           */
          seniority: string | null;
          /**
           * Start Date
           * @description Start date (job/program, e.g., 'YYYY-MM-DD').
           * @default null
           */
          start_date: string | null;
          /**
           * State
           * @description State/region of residence.
           * @default null
           */
          state: string | null;
          /**
           * Surveymonkeyeventlastupdated
           * @description Timestamp of last SurveyMonkey event update (often Unix milliseconds).
           * @default null
           */
          surveymonkeyeventlastupdated: string | null;
          /**
           * Total Revenue
           * @description Total revenue from associated deals (numeric value as string).
           * @default null
           */
          total_revenue: string | null;
          /**
           * Twitterbio
           * @description Twitter profile biography.
           * @default null
           */
          twitterbio: string | null;
          /**
           * Twitterhandle
           * @description Twitter username (handle), without '@'.
           * @default null
           */
          twitterhandle: string | null;
          /**
           * Twitterprofilephoto
           * @description URL to Twitter profile photo.
           * @default null
           */
          twitterprofilephoto: string | null;
          /**
           * Webinareventlastupdated
           * @description Timestamp of last webinar platform event update (often Unix milliseconds).
           * @default null
           */
          webinareventlastupdated: string | null;
          /**
           * Website
           * @description Personal or company website URL.
           * @default null
           */
          website: string | null;
          /**
           * Work Email
           * @description Work email address.
           * @default null
           */
          work_email: string | null;
          /**
           * Zip
           * @description Postal/ZIP code of residence.
           * @default null
           */
          zip: string | null;
      } | null;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS tool output.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response: includes operation 'status' (e.g., 'PENDING', 'COMPLETE'), 'results' list of updated contacts, potential 'errors', and 'startedAt'/'completedAt' timestamps.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_EMAILS tool input.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_EMAILS_INPUT = {
  /**
   * Inputs
   * @description List of email objects to update. Each must specify the email's identifier (via `id` and optionally `idProperty`) and `properties` with new string values.
   */
  inputs?: {
      /**
       * Id
       * @description The email's identifier. HubSpot object ID if `idProperty` is unspecified; otherwise, the value of the unique property defined in `idProperty`.
       */
      id: string;
      /**
       * Id Property
       * @description Name of a unique property (e.g., 'my_custom_unique_key') to identify an email if its HubSpot object `id` is not used. If omitted, `id` is assumed to be the HubSpot object ID.
       */
      idProperty?: string;
      /**
       * Properties
       * @description Properties to update. Keys are internal email property names (e.g., 'hs_email_subject', 'hs_email_status'); values are the new string values.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_EMAILS tool output.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Batch update response details, including job `status` (e.g., 'COMPLETE'), `results` for each email (ID, updated properties, or item-specific errors), and any overall batch `errors`.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS tool input.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS_INPUT = {
  /**
   * Inputs
   * @description A list of objects, where each object defines a line item to be updated and its new property values. Each object must conform to the InputsRequest schema.
   */
  inputs?: {
      /**
       * Id
       * @description Identifier of the line item to update. If `idProperty` is specified, this is its value; otherwise, it's the line item's primary object ID.
       */
      id: string;
      /**
       * Id Property
       * @description Name of a unique property for identifying the line item. If provided, `id` must be this property's value; otherwise, `id` is the line item's primary object ID.
       * @default null
       */
      idProperty: string | null;
      /**
       * Properties
       * @description Dictionary of properties to update for the line item: keys are internal property names, values are their new values.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS tool output.
 */
type HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_MARKETING_EMAIL tool input.
 */
type HUBSPOT_UPDATE_A_MARKETING_EMAIL_INPUT = {
  /**
   * Active Domain
   * @description The domain from which this email will be sent (e.g., 'info.example.com'). Must be a connected sending domain in HubSpot.
   */
  activeDomain?: string;
  /**
   * Archived
   * @description Set to `true` to archive the marketing email, or `false` to make it active (unarchive).
   */
  archived?: boolean;
  /**
   * Business Unit Id
   * @description The ID of the business unit this email belongs to. Requires the Business Units add-on for HubSpot.
   */
  businessUnitId?: string;
  /**
   * Campaign
   * @description The ID of the HubSpot campaign this email is associated with.
   */
  campaign?: string;
  /**
   * Content  Flex Areas
   * @description A dictionary defining content for flexible column areas within drag-and-drop email templates.
   */
  content__flexAreas?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Plain Text Version
   * @description The plain text version of the email. If omitted, HubSpot may auto-generate it from the HTML content.
   */
  content__plainTextVersion?: string;
  /**
   * Content  Smart Fields
   * @description A dictionary of smart fields and their values/configurations used in the email content. Enables personalization based on contact properties.
   */
  content__smartFields?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Template Path
   * @description The path to the email template file within the HubSpot Design Manager (e.g., 'marketplace/some_template_name').
   */
  content__templatePath?: string;
  /**
   * Content  Theme Settings Values
   * @description A dictionary of theme settings overrides for the email template. Allows customization of global theme styles.
   */
  content__themeSettingsValues?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Widget Containers
   * @description A dictionary defining the layout and content of widget containers in the email template.
   */
  content__widgetContainers?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Content  Widgets
   * @description A dictionary specifying the configuration and content of various widgets (modules) used in the email.
   */
  content__widgets?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Email Id
   * @description The unique ID of the marketing email to be updated.
   */
  emailId?: string;
  /**
   * From  Custom Reply To
   * @description A custom email address for replies. If set, this overrides the main `replyTo` address for replies.
   */
  from__customReplyTo?: string;
  /**
   * From  From Name
   * @description The sender's name as it appears in the recipient's inbox (e.g., 'Marketing Team').
   */
  from__fromName?: string;
  /**
   * From  Reply To
   * @description The email address used as the 'From' address and default 'Reply-To' address. Must be a verified address in HubSpot.
   */
  from__replyTo?: string;
  /**
   * Language
   * @description The primary language of the email, using ISO 639-1 language codes (e.g., 'en') or language-locale codes (e.g., 'en-us').
   * @enum {string}
   */
  language?: "af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za";
  /**
   * Name
   * @description The internal name of the email as it appears in the HubSpot dashboard.
   */
  name?: string;
  /**
   * Publish Date
   * Format: date-time
   * @description The scheduled publication date and time for the email in ISO 8601 format (e.g., '2023-12-31T10:00:00Z'). Used for scheduled emails.
   */
  publishDate?: string;
  /**
   * Rss Data  Blog Email Type
   * @description Specifies the type of RSS email, such as instant, daily, weekly, or monthly.
   */
  rssData__blogEmailType?: string;
  /**
   * Rss Data  Blog Image Max Width
   * @description Maximum width in pixels for images included from an RSS feed in the email.
   */
  rssData__blogImageMaxWidth?: number;
  /**
   * Rss Data  Blog Layout
   * @description Defines the layout style for displaying blog posts within an RSS email.
   */
  rssData__blogLayout?: string;
  /**
   * Rss Data  Hubspot Blog Id
   * @description The ID of the HubSpot blog used as the source for an RSS-to-email.
   */
  rssData__hubspotBlogId?: string;
  /**
   * Rss Data  Max Entries
   * @description The maximum number of blog posts to include in a single RSS email.
   */
  rssData__maxEntries?: number;
  /**
   * Rss Data  Rss Entry Template
   * @description The HTML template used to render each individual blog post (entry) in an RSS email.
   */
  rssData__rssEntryTemplate?: string;
  /**
   * Rss Data  Timing
   * @description A dictionary defining the scheduling for RSS emails (e.g., time of day, day of week/month). The structure depends on `blogEmailType`.
   */
  rssData__timing?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Rss Data  Url
   * @description The URL of the external RSS feed if not using a HubSpot blog.
   */
  rssData__url?: string;
  /**
   * Rss Data  Use Headline As Subject
   * @description If `true`, the headline of the latest blog post will be used as the email's subject line for RSS emails.
   */
  rssData__useHeadlineAsSubject?: boolean;
  /**
   * Send On Publish
   * @description If `true` and the email state is set to 'PUBLISHED', the email will be sent immediately. If `false` for a 'PUBLISHED' state, it implies it was already sent or is a template.
   */
  sendOnPublish?: boolean;
  /**
   * State
   * @description The desired state of the email after the update. Common states include 'DRAFT', 'SCHEDULED', 'PUBLISHED'.
   * @enum {string}
   */
  state?: "AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT";
  /**
   * Subcategory
   * @description The subcategory of the email, often used for organization (e.g., 'newsletter', 'promotional').
   */
  subcategory?: string;
  /**
   * Subject
   * @description The subject line of the marketing email.
   */
  subject?: string;
  /**
   * Subscription Details  Office Location Id
   * @description The ID of the CAN-SPAM office location to be used in the email footer.
   */
  subscriptionDetails__officeLocationId?: string;
  /**
   * Subscription Details  Preferences Group Id
   * @description The ID of the subscription preferences page/group associated with this email. Allows recipients to manage their preferences.
   */
  subscriptionDetails__preferencesGroupId?: string;
  /**
   * Subscription Details  Subscription Id
   * @description The ID of the specific email subscription type (e.g., marketing, newsletter) this email belongs to.
   */
  subscriptionDetails__subscriptionId?: string;
  /**
   * Testing  Ab Sample Size Default
   * @description Version of the email that should be sent if there are too few recipients to conduct an AB test (e.g., 'master', 'variant').
   * @enum {string}
   */
  testing__abSampleSizeDefault?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Sampling Default
   * @description Version of the email that should be sent if the results are inconclusive after the test period (e.g., 'master', 'variant').
   * @enum {string}
   */
  testing__abSamplingDefault?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Status
   * @description Status of the AB test (e.g., 'master', 'variant').
   * @enum {string}
   */
  testing__abStatus?: "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant";
  /**
   * Testing  Ab Success Metric
   * @description Metric to determine the winning version that will be sent to the remaining contacts (e.g., 'CLICKS_BY_OPENS').
   * @enum {string}
   */
  testing__abSuccessMetric?: "CLICKS_BY_OPENS" | "CLICKS_BY_DELIVERED" | "OPENS_BY_DELIVERED";
  /**
   * Testing  Ab Test Percentage
   * @description The percentage of recipients who will be part of the A/B test group (e.g., 50 for 50%).
   */
  testing__abTestPercentage?: number;
  /**
   * Testing  Hours To Wait
   * @description Time limit in hours on gathering test results. After this time is up, the winning version will be sent to the remaining contacts.
   */
  testing__hoursToWait?: number;
  /**
   * Testing  Test Id
   * @description The unique identifier of the A/B test, if applicable.
   */
  testing__testId?: string;
  /**
   * To  Contact Ids  Exclude
   * @description A list of contact IDs to specifically exclude from receiving this email.
   */
  to__contactIds__exclude?: string[];
  /**
   * To  Contact Ids  Include
   * @description A list of contact IDs to specifically include as recipients for this email.
   */
  to__contactIds__include?: string[];
  /**
   * To  Contact Lists  Exclude
   * @description A list of contact list IDs whose members should be excluded from receiving this email.
   */
  to__contactLists__exclude?: string[];
  /**
   * To  Contact Lists  Include
   * @description A list of contact list IDs whose members should receive this email.
   */
  to__contactLists__include?: string[];
  /**
   * To  Limit Send Frequency
   * @description If `true`, respects HubSpot's send frequency limits for contacts. If `false`, may override these limits.
   */
  to__limitSendFrequency?: boolean;
  /**
   * To  Suppress Graymail
   * @description If `true`, HubSpot will attempt to avoid sending this email to contacts classified as 'graymail' (low engagement).
   */
  to__suppressGraymail?: boolean;
  /**
   * Webversion  Domain
   * @description The domain to be used for the web version of this email. If not specified, the default portal domain is used.
   */
  webversion__domain?: string;
  /**
   * Webversion  Expires At
   * Format: date-time
   * @description The date and time when the web version link will expire, in ISO 8601 format. After this time, the link may redirect or show an error.
   */
  webversion__expiresAt?: string;
  /**
   * Webversion  Meta Description
   * @description The meta description for the web version of the email, used by search engines.
   */
  webversion__metaDescription?: string;
  /**
   * Webversion  Redirect To Page Id
   * @description The ID of a HubSpot-hosted page to redirect to if the web version link is expired or manually disabled.
   */
  webversion__redirectToPageId?: string;
  /**
   * Webversion  Redirect To Url
   * @description An external URL to redirect to if the web version link is expired or disabled, used if `redirectToPageId` is not set.
   */
  webversion__redirectToUrl?: string;
  /**
   * Webversion  Slug
   * @description The URL slug for the web version of the email (e.g., 'july-newsletter-2024').
   */
  webversion__slug?: string;
  /**
   * Webversion  Title
   * @description The title displayed in the browser tab for the web version of the email.
   */
  webversion__title?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_A_MARKETING_EMAIL tool output.
 */
type HUBSPOT_UPDATE_A_MARKETING_EMAIL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full representation of the updated marketing email object.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS tool input.
 */
type HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS_INPUT = {
  /**
   * Inputs
   * @description List of feedback submissions to update, each specifying its identifier and new property values.
   */
  inputs?: {
      /**
       * Id
       * @description Unique identifier of the feedback submission, either HubSpot object ID or value of `idProperty`.
       */
      id: string;
      /**
       * Id Property
       * @description Name of an alternate unique property to identify the submission; if used, `id` must be the value of this property.
       * @default null
       */
      idProperty: string | null;
      /**
       * Properties
       * @description Properties to update; keys are internal HubSpot property names, values are new string values.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS tool output.
 */
type HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Results of the batch update, typically including status, updated submissions or their identifiers, timestamps, and any errors.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_COMPANIES tool input.
 */
type HUBSPOT_UPDATE_BATCH_OF_COMPANIES_INPUT = {
  /**
   * Inputs
   * @description List of individual company update operations to be performed in the batch.
   */
  inputs?: {
      /**
       * Id
       * @description The company's identifier. If `idProperty` is set, this is the value of that unique property; otherwise, it's the HubSpot company ID.
       */
      id: string;
      /**
       * Id Property
       * @description Specifies a unique property name (e.g., 'domain') used for identifying the company. If provided, the `id` field must contain the value of this unique property; otherwise, the `id` field refers to the HubSpot company ID.
       */
      idProperty?: string;
      /**
       * Properties
       * @description Company properties to update. Keys are the internal names of the properties, and values are their new settings.
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_COMPANIES tool output.
 */
type HUBSPOT_UPDATE_BATCH_OF_COMPANIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS tool input.
 */
type HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS_INPUT = {
  /**
   * Inputs
   * @description List of ticket update operations. Each must include the ticket `id` and a `properties` object with new field values. Example: `[{'id': '123', 'properties': {'subject': 'Updated subject', 'hs_ticket_priority': 'HIGH'}}]`.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier (object ID) of the ticket to update.
       */
      id: string;
      /**
       * Properties
       * @description Ticket properties to update. Only provide fields to change; unspecified properties are unchanged.
       */
      properties?: {
          /**
           * Closed Date
           * @description The date when the ticket was closed. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          closed_date?: string;
          /**
           * Content
           * @description The main text or body of the ticket.
           */
          content?: string;
          /**
           * Created By
           * @description The ID of the user who initially created the ticket.
           */
          created_by?: string;
          /**
           * Createdate
           * @description The date when the ticket was created. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          createdate?: string;
          /**
           * First Agent Reply Date
           * @description The timestamp of the first reply made by an agent to the ticket. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          first_agent_reply_date?: string;
          /**
           * Hs All Accessible Team Ids
           * @description A list of team IDs that have access to the ticket.
           */
          hs_all_accessible_team_ids?: string[];
          /**
           * Hs All Assigned Business Unit Ids
           * @description A list of all business unit IDs assigned to the ticket.
           */
          hs_all_assigned_business_unit_ids?: string[];
          /**
           * Hs All Associated Contact Companies
           * @description A list of company names associated with the contacts linked to the ticket.
           */
          hs_all_associated_contact_companies?: string[];
          /**
           * Hs All Associated Contact Emails
           * @description A list of email addresses of contacts associated with the ticket.
           */
          hs_all_associated_contact_emails?: string[];
          /**
           * Hs All Associated Contact Firstnames
           * @description A list of first names of contacts associated with the ticket.
           */
          hs_all_associated_contact_firstnames?: string[];
          /**
           * Hs All Associated Contact Lastnames
           * @description A list of last names of contacts associated with the ticket.
           */
          hs_all_associated_contact_lastnames?: string[];
          /**
           * Hs All Associated Contact Mobilephones
           * @description A list of mobile phone numbers of contacts associated with the ticket.
           */
          hs_all_associated_contact_mobilephones?: string[];
          /**
           * Hs All Associated Contact Phones
           * @description A list of phone numbers of contacts associated with the ticket.
           */
          hs_all_associated_contact_phones?: string[];
          /**
           * Hs All Conversation Mentions
           * @description A list of all user mentions within the ticket's conversation.
           */
          hs_all_conversation_mentions?: string[];
          /**
           * Hs All Owner Ids
           * @description A list of all owner IDs ever assigned to the ticket.
           */
          hs_all_owner_ids?: string[];
          /**
           * Hs All Team Ids
           * @description A list of all team IDs that have ever been associated with the ticket.
           */
          hs_all_team_ids?: string[];
          /**
           * Hs Assigned Team Ids
           * @description A list of currently assigned team IDs for the ticket.
           */
          hs_assigned_team_ids?: string[];
          /**
           * Hs Assignment Method
           * @description The method by which the ticket was assigned (e.g., 'MANUAL', 'AUTOMATED').
           */
          hs_assignment_method?: string;
          /**
           * Hs Auto Generated From Thread Id
           * @description If auto-generated, the ID of the conversation thread from which this ticket originated.
           */
          hs_auto_generated_from_thread_id?: string;
          /**
           * Hs Conversations Originating Message Id
           * @description The ID of the first message in the conversation that led to this ticket's creation.
           */
          hs_conversations_originating_message_id?: string;
          /**
           * Hs Conversations Originating Thread Id
           * @description The ID of the originating conversation thread for this ticket.
           */
          hs_conversations_originating_thread_id?: string;
          /**
           * Hs Created By User Id
           * @description The ID of the HubSpot user who created the ticket.
           */
          hs_created_by_user_id?: string;
          /**
           * Hs Lastcontacted
           * @description The date when a contact associated with this ticket was last contacted. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          hs_lastcontacted?: string;
          /**
           * Hs Lastmodifieddate
           * @description The date when the ticket was last modified. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          hs_lastmodifieddate?: string;
          /**
           * Hs Pipeline
           * @description The ID of the pipeline this ticket belongs to.
           */
          hs_pipeline?: string;
          /**
           * Hs Pipeline Stage
           * @description The ID of the current stage of the ticket within its pipeline.
           */
          hs_pipeline_stage?: string;
          /**
           * Hs Primary Company
           * @description The ID of the primary company associated with this ticket.
           */
          hs_primary_company?: string;
          /**
           * Hs Tag Ids
           * @description A list of tag IDs associated with the ticket.
           */
          hs_tag_ids?: string[];
          /**
           * Hs Ticket Category
           * @description The category of the ticket (e.g., 'SUPPORT_ISSUE', 'BILLING_QUESTION').
           */
          hs_ticket_category?: string;
          /**
           * Hs Ticket Priority
           * @description The priority of the ticket (e.g., 'HIGH', 'MEDIUM', 'LOW').
           */
          hs_ticket_priority?: string;
          /**
           * Hubspot Owner Id
           * @description The ID of the HubSpot user who owns the ticket.
           */
          hubspot_owner_id?: string;
          /**
           * Hubspot Team Id
           * @description The ID of the HubSpot team assigned to the ticket.
           */
          hubspot_team_id?: string;
          /**
           * Last Engagement Date
           * @description The date of the last engagement (e.g., email, call, meeting) related to the ticket. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          last_engagement_date?: string;
          /**
           * Last Reply Date
           * @description The date of the last reply sent or received for the ticket. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          last_reply_date?: string;
          /**
           * Notes Last Contacted
           * @description The date when a contact associated with the ticket was last contacted, as recorded in notes. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          notes_last_contacted?: string;
          /**
           * Notes Last Updated
           * @description The date when notes associated with the ticket were last updated. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          notes_last_updated?: string;
          /**
           * Notes Next Activity Date
           * @description The date of the next scheduled activity for the ticket, as recorded in notes. This should be in ISO 8601 date format (YYYY-MM-DD) or a UNIX timestamp in milliseconds.
           */
          notes_next_activity_date?: string;
          /**
           * Source Type
           * @description The source from which the ticket was created (e.g., 'EMAIL', 'CHAT', 'PHONE').
           */
          source_type?: string;
          /**
           * Subject
           * @description The subject line or title of the ticket.
           */
          subject?: string;
          /**
           * Time To Close
           * @description The duration, in milliseconds, it took to close the ticket from its creation time. This is typically set when the ticket is closed.
           */
          time_to_close?: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS tool output.
 */
type HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Results of the batch update, detailing outcomes for each ticket, including successes and any errors.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_DEALS tool input.
 */
type HUBSPOT_UPDATE_BATCH_OF_DEALS_INPUT = {
  /**
   * Inputs
   * @description A list of deal update objects. Each object must contain the `id` of the deal and a `properties` object specifying the new values for the deal's properties.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the deal to be updated. This is the HubSpot deal ID.
       */
      id: string | null;
      /**
       * Properties
       * @description An object containing the deal properties to update. Only include the properties you want to change. Property names should be the internal HubSpot names.
       */
      properties: {
          /**
           * Amount
           * @description The monetary value of the deal. This is typically in the currency specified by `deal_currency_code`.
           * @default null
           */
          amount: string | null;
          /**
           * Amount In Home Currency
           * @description The deal amount automatically converted to the company's home currency as configured in HubSpot.
           * @default null
           */
          amount_in_home_currency: string | null;
          /**
           * Closed Lost Reason
           * @description A text description of the reason why the deal was lost. This is often a custom property.
           * @default null
           */
          closed_lost_reason: string | null;
          /**
           * Closed Won Reason
           * @description A text description of the reason why the deal was won. This is often a custom property.
           * @default null
           */
          closed_won_reason: string | null;
          /**
           * Closedate
           * @description The date when the deal was closed (either won or lost), or the expected close date for an open deal. Represented in ISO 8601 format (YYYY-MM-DD).
           * @default null
           */
          closedate: string | null;
          /**
           * Createdate
           * @description The date and time when the deal was created in HubSpot. This is a read-only property automatically set by HubSpot. Represented in ISO 8601 format.
           * @default null
           */
          createdate: string | null;
          /**
           * Days To Close
           * @description The number of days between the deal's creation date and its close date. This is automatically calculated by HubSpot once a deal is closed.
           * @default null
           */
          days_to_close: string | null;
          /**
           * Deal Currency Code
           * @description The currency code (e.g., USD, EUR) for the deal's amount. This is important if you operate in multiple currencies.
           * @default null
           */
          deal_currency_code: string | null;
          /**
           * Dealname
           * @description The name or title of the deal. This should be a descriptive name for easy identification.
           * @default null
           */
          dealname: string | null;
          /**
           * Dealstage
           * @description The current stage of the deal within its sales pipeline. This is the internal ID of the deal stage.
           * @default null
           */
          dealstage: string | null;
          /**
           * Dealtype
           * @description The type of deal, used to categorize deals, for example, 'newbusiness' or 'existingbusiness'.
           * @default null
           */
          dealtype: string | null;
          /**
           * Description
           * @description A detailed description of the deal, including any relevant notes or context.
           * @default null
           */
          description: string | null;
          /**
           * Engagements Last Meeting Booked
           * @description The date and time of the last meeting booked that is associated with this deal. Represented in ISO 8601 format.
           * @default null
           */
          engagements_last_meeting_booked: string | null;
          /**
           * Engagements Last Meeting Booked Campaign
           * @description The HubSpot campaign ID associated with the last meeting booked for this deal.
           * @default null
           */
          engagements_last_meeting_booked_campaign: string | null;
          /**
           * Engagements Last Meeting Booked Medium
           * @description The medium (e.g., 'Meetings tool', 'Email') through which the last meeting associated with this deal was booked.
           * @default null
           */
          engagements_last_meeting_booked_medium: string | null;
          /**
           * Engagements Last Meeting Booked Source
           * @description The source (e.g., 'SALES', 'INTEGRATION') of the last meeting booked for this deal.
           * @default null
           */
          engagements_last_meeting_booked_source: string | null;
          /**
           * Hs Acv
           * @description The Annual Contract Value of the deal. This is the total value of the contract over a 12-month period.
           * @default null
           */
          hs_acv: string | null;
          /**
           * Hs All Accessible Team Ids
           * @description A semicolon-separated string of all team IDs that have access to this deal.
           * @default null
           */
          hs_all_accessible_team_ids: string | null;
          /**
           * Hs All Assigned Business Unit Ids
           * @description A semicolon-separated string of all business unit IDs assigned to this deal. Requires a Business Units Add-On.
           * @default null
           */
          hs_all_assigned_business_unit_ids: string | null;
          /**
           * Hs All Owner Ids
           * @description A semicolon-separated string of all HubSpot owner IDs associated with this deal. This includes the main deal owner and any co-owners.
           * @default null
           */
          hs_all_owner_ids: string | null;
          /**
           * Hs All Team Ids
           * @description A semicolon-separated string of all team IDs associated with this deal. This includes the primary team and any additional teams.
           * @default null
           */
          hs_all_team_ids: string | null;
          /**
           * Hs Analytics Source
           * @description The original source of the contact associated with the deal (e.g., 'Organic Search', 'Paid Social'). Provides insight into where the deal originated.
           * @default null
           */
          hs_analytics_source: string | null;
          /**
           * Hs Arr
           * @description The Annual Recurring Revenue of the deal. Represents the portion of the contract value that recurs annually.
           * @default null
           */
          hs_arr: string | null;
          /**
           * Hs Campaign
           * @description The HubSpot campaign ID that led to this deal. Useful for tracking marketing campaign effectiveness.
           * @default null
           */
          hs_campaign: string | null;
          /**
           * Hs Closed Amount
           * @description The final amount of the deal when it was closed (won or lost).
           * @default null
           */
          hs_closed_amount: string | null;
          /**
           * Hs Closed Amount In Home Currency
           * @description The final amount of the deal when it was closed, converted to the company's home currency.
           * @default null
           */
          hs_closed_amount_in_home_currency: string | null;
          /**
           * Hs Createdate
           * @description The date and time when the deal record was created in HubSpot. This is a read-only property. Represented in ISO 8601 format.
           * @default null
           */
          hs_createdate: string | null;
          /**
           * Hs Deal Stage Probability
           * @description The probability of winning the deal, automatically set based on the deal's current stage in the pipeline. This probability is defined in the pipeline settings.
           * @default null
           */
          hs_deal_stage_probability: string | null;
          /**
           * Hs Forecast Amount
           * @description The forecasted amount for the deal, which can be manually set or calculated based on `hs_deal_stage_probability` and `amount`.
           * @default null
           */
          hs_forecast_amount: string | null;
          /**
           * Hs Forecast Probability
           * @description The probability used for forecasting this deal. This can be different from `hs_deal_stage_probability` if manually overridden by a sales user.
           * @default null
           */
          hs_forecast_probability: string | null;
          /**
           * Hs Is Closed
           * @description A boolean value (true/false) indicating whether the deal is closed (either won or lost).
           * @default null
           */
          hs_is_closed: string | null;
          /**
           * Hs Lastmodifieddate
           * @description The date and time when any property of the deal was last modified. This is a read-only property. Represented in ISO 8601 format.
           * @default null
           */
          hs_lastmodifieddate: string | null;
          /**
           * Hs Mrr
           * @description The Monthly Recurring Revenue of the deal. Represents the portion of the contract value that recurs monthly.
           * @default null
           */
          hs_mrr: string | null;
          /**
           * Hs Next Step
           * @description A text description of the next action item or step to be taken for this deal.
           * @default null
           */
          hs_next_step: string | null;
          /**
           * Hs Object Id
           * @description The unique identifier (ID) of the deal object in HubSpot. This is a read-only property.
           * @default null
           */
          hs_object_id: string | null;
          /**
           * Hs Priority
           * @description The priority level of the deal (e.g., 'high', 'medium', 'low'). This is typically a custom property.
           * @default null
           */
          hs_priority: string | null;
          /**
           * Hs Projected Amount
           * @description Deprecated. Use `hs_forecast_amount` instead. The projected monetary value of the deal.
           * @default null
           */
          hs_projected_amount: string | null;
          /**
           * Hs Projected Amount In Home Currency
           * @description Deprecated. Use `hs_forecast_amount` (converted to home currency) instead. The projected monetary value of the deal in the account's default currency.
           * @default null
           */
          hs_projected_amount_in_home_currency: string | null;
          /**
           * Hs Tcv
           * @description The Total Contract Value of the deal. This is the total value of the contract over its entire duration.
           * @default null
           */
          hs_tcv: string | null;
          /**
           * Hubspot Owner Id
           * @description The HubSpot user ID of the owner assigned to the deal.
           * @default null
           */
          hubspot_owner_id: string | null;
          /**
           * Pipeline
           * @description The ID of the sales pipeline this deal belongs to. Deals can be moved between pipelines.
           * @default null
           */
          pipeline: string | null;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_DEALS tool output.
 */
type HUBSPOT_UPDATE_BATCH_OF_DEALS_OUTPUT = {
  /**
   * Data
   * @description Response from the HubSpot API, typically including a list of processed deals with their status or any errors.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES tool input.
 */
type HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES_INPUT = {
  /**
   * Inputs
   * @description List of objects to update, each detailing the object and its property changes. Max 100 objects per batch.
   */
  inputs?: {
      /**
       * Id
       * @description Unique identifier of the object to update, either its HubSpot ID or the value of the unique property specified in `idProperty`.
       */
      id: string;
      /**
       * Id Property
       * @description Name of the unique property for object identification if `id` is not the HubSpot object ID; if omitted, `id` is assumed to be the HubSpot object ID.
       */
      idProperty?: string;
      /**
       * Properties
       * @description Dictionary of property internal names to their new values for the update.
       */
      properties: {
          [key: string]: string;
      };
  }[];
  /**
   * Object Type
   * @description Case-sensitive CRM object type to be updated in bulk (e.g., 'contacts', 'p_customobject'), determining the target object set.
   */
  objectType?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES tool output.
 */
type HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES_OUTPUT = {
  /**
   * Data
   * @description Details the batch update outcome: status (e.g., 'COMPLETE'), results for each object (potentially including the updated object or error details), and relevant timestamps.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_PRODUCTS tool input.
 */
type HUBSPOT_UPDATE_BATCH_OF_PRODUCTS_INPUT = {
  /**
   * Inputs
   * @description A list of product update operations. Each item in the list defines a product to update and the properties to change.
   */
  inputs?: {
      /**
       * Id
       * @description The unique identifier of the product to be updated. This should be the value corresponding to the `idProperty` (e.g., the SKU value if `idProperty` is 'sku') or the HubSpot object ID if `idProperty` is not specified.
       */
      id: string;
      /**
       * Id Property
       * @description The name of the unique property used to identify the product. If not provided, the default 'hs_object_id' is used. Examples include 'sku' or a custom unique property.
       */
      idProperty?: string;
      /**
       * Properties
       * @description Dictionary of product properties to update with their new values (e.g., {'price': '29.99', 'description': 'New product description'}).
       */
      properties: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_BATCH_OF_PRODUCTS tool output.
 */
type HUBSPOT_UPDATE_BATCH_OF_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results of the batch update operation. This typically includes details on successfully updated products and any errors encountered for specific products within the batch.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS tool input.
 */
type HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS_INPUT = {
  /**
   * App Id
   * @description The unique identifier for the calling app.
   */
  appId?: number;
  /**
   * Url To Retrieve Authed Recording
   * @description URL HubSpot uses to retrieve call recordings requiring authentication from the calling app.
   */
  urlToRetrieveAuthedRecording?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS tool output.
 */
type HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Contains the updated recording settings for the app.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_CAMPAIGN tool input.
 */
type HUBSPOT_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Campaign Guid
   * @description Unique identifier (UUID) of the HubSpot marketing campaign to update.
   */
  campaignGuid?: string;
  /**
   * Properties
   * @description Dictionary of campaign properties to update. Keys are internal property names, values are their new string values. Values overwrite existing ones. Attempting to update read-only or non-existent properties will result in an error.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_CAMPAIGN tool output.
 */
type HUBSPOT_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description The updated HubSpot marketing campaign object, including all its properties after the update.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_EMAILS tool input.
 */
type HUBSPOT_UPDATE_EMAILS_INPUT = {
  /**
   * Inputs
   * @description List of email update operations.
   */
  inputs?: {
      /**
       * Id
       * @description The HubSpot Email ID to be updated.
       */
      id: string;
      /**
       * Properties
       * @description Properties to update. Only include changes.
       */
      properties?: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_EMAILS tool output.
 */
type HUBSPOT_UPDATE_EMAILS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response with operation status and results.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE tool input.
 */
type HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description ID of the application associated with the event template.
   */
  appId?: number;
  /**
   * Detail Template
   * @description Markdown for the event's detailed timeline view, using Handlebars for dynamic data (e.g., `{{token_name}}`).
   */
  detailTemplate?: string;
  /**
   * Event Template Id
   * @description Unique identifier of the event template to update.
   */
  eventTemplateId?: string;
  /**
   * Header Template
   * @description Markdown for the event's header on the timeline, using Handlebars for dynamic data (e.g., `{{token_name}}`).
   */
  headerTemplate?: string;
  /**
   * Id
   * @description Unique identifier of the event template; must match `eventTemplateId` in the URL path.
   */
  id?: string;
  /**
   * Name
   * @description New name for the event template.
   */
  name?: string;
  /**
   * Tokens
   * @description List of token definitions; replaces all existing tokens for the template.
   */
  tokens?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp of when the Event Template Token was created. Informational and may be null if created before February 18th, 2020.
       */
      createdAt?: string;
      /**
       * Label
       * @description User-friendly label for the token, for display in HubSpot (e.g., list segmentation, reporting).
       */
      label: string;
      /**
       * Name
       * @description Name of the token referenced in templates. Must be unique for the template and only contain alphanumeric characters, periods, dashes, or underscores.
       */
      name: string;
      /**
       * Object Property Name
       * @description Name of the CRM object property to populate, allowing CRM object construction via the Timeline API.
       */
      objectPropertyName?: string;
      /**
       * Options
       * @description List of selectable options, required if token `type` is `enumeration`.
       */
      options?: {
          /**
           * Label
           * @description User-facing label for the enumeration option.
           */
          label: string;
          /**
           * Value
           * @description Internal or programmatic value of the enumeration option.
           */
          value: string;
      }[];
      /**
       * Type
       * @description Data type of the token (`string`, `number`, `date`, or `enumeration`).
       * @enum {string}
       */
      type: "date" | "enumeration" | "number" | "string";
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp of when the Event Template Token was last updated. Informational and may be null if created before February 18th, 2020.
       */
      updatedAt?: string;
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE tool output.
 */
type HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Updated event template object, including its properties and tokens as stored in HubSpot.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA tool input.
 */
type HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA_INPUT = {
  /**
   * Description
   * @description A human-readable description for the custom object schema itself.
   */
  description?: string;
  /**
   * Labels  Plural
   * @description The plural display name for the custom object type (e.g., 'Companies', 'Tickets'), used in the HubSpot UI for multiple records of this type.
   */
  labels__plural?: string;
  /**
   * Labels  Singular
   * @description The singular display name for the custom object type (e.g., 'Company', 'Ticket'), used in the HubSpot UI for a single record of this type.
   */
  labels__singular?: string;
  /**
   * Object Type
   * @description The fully qualified name or object type ID that uniquely identifies the custom object schema to be updated. This must correspond to an existing schema in your HubSpot account.
   */
  objectType?: string;
  /**
   * Primary Display Property
   * @description The internal name of the property that will serve as the primary display identifier on the HubSpot record page for this object type. This is typically a unique identifier like a name or ID.
   */
  primaryDisplayProperty?: string;
  /**
   * Required Properties
   * @description A list of internal names of properties that are mandatory when creating a new record of this object type.
   */
  requiredProperties?: string[];
  /**
   * Restorable
   * @description A boolean indicating whether records of this object type can be restored from the recycle bin if deleted. Set to `true` to enable restoration, `false` otherwise.
   */
  restorable?: boolean;
  /**
   * Searchable Properties
   * @description A list of internal names of properties that will be indexed and searchable within HubSpot's product search for this object type.
   */
  searchableProperties?: string[];
  /**
   * Secondary Display Properties
   * @description A list of internal names of properties to be displayed as secondary information on the HubSpot record page for this object type. These properties appear below the primary display property.
   */
  secondaryDisplayProperties?: string[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA tool output.
 */
type HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the complete, updated custom object schema, including all its properties and settings as returned by the HubSpot API.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID tool input.
 */
type HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID_INPUT = {
  /**
   * Feedback Submission Id
   * @description The unique identifier of the Feedback Submission to update. This can be its internal object ID or a unique property value if `idProperty` is specified. Must be a non-empty string.
   */
  feedbackSubmissionId?: string;
  /**
   * Id Property
   * @description The name of a unique property used to identify the Feedback Submission. If provided, `feedbackSubmissionId` must contain the value of this property, instead of the internal object ID. This property must be a unique identifier for Feedback Submission objects.
   */
  idProperty?: string;
  /**
   * Properties
   * @description A dictionary of properties to update on the Feedback Submission. Keys are the internal names of the properties, and values are their new string values. Only properties included here will be modified; others will remain unchanged.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID tool output.
 */
type HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the full, updated Feedback Submission object after the changes have been applied.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY tool input.
 */
type HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY_INPUT = {
  /**
   * Id Property
   * @description Name of a unique property on the Line Item used for identification instead of HubSpot object ID. If used, `lineItemId` must contain this property's value. Must be a valid, unique-value property for Line Items.
   */
  idProperty?: string;
  /**
   * Line Item Id
   * @description Identifier for the Line Item to update: HubSpot object ID by default, or the value of the unique property if `idProperty` is specified. Must be non-empty.
   */
  lineItemId?: string;
  /**
   * Properties
   * @description Properties to update. Keys are internal HubSpot line item property names (e.g., 'quantity', 'price'), values are new string values. Example: `{'quantity': '5', 'name': 'New Product Name'}`.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY tool output.
 */
type HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the updated Line Item object, including all its properties after the partial update.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS tool input.
 */
type HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS_INPUT = {
  /**
   * Archived
   * @description Set to `true` to archive the pipeline stage, `false` to unarchive. If omitted, its archival status remains unchanged.
   */
  archived?: boolean;
  /**
   * Display Order
   * @description The display order for this pipeline stage. If multiple stages share the same `displayOrder`, they are sorted alphabetically by `label`. Use -1 to position the stage at the end. Omit to leave unchanged.
   */
  displayOrder?: number;
  /**
   * Label
   * @description The display name (label) of the pipeline stage. This label must be unique within the pipeline it belongs to. Omit to leave unchanged.
   */
  label?: string;
  /**
   * Metadata
   * @description Required. Stage-specific metadata (key-value string pairs) based on `objectType`.
   *     - For 'deals': MUST include 'probability' (string '0.0'-'1.0', e.g., '0.7', in '0.1' increments).
   *     - For 'tickets': Optional 'ticketState' ('OPEN' or 'CLOSED').
   *     For others, or if no specific metadata is set (and `objectType` allows), an empty `{}` may be used (deals always require 'probability').
   */
  metadata?: {
      [key: string]: string;
  };
  /**
   * Object Type
   * @description Type of CRM object (e.g., 'deals', 'tickets') for the pipeline; must be a valid HubSpot object type that supports pipelines.
   */
  objectType?: string;
  /**
   * Pipeline Id
   * @description Unique identifier of the pipeline (specific to the HubSpot account and `objectType`) containing the stage to update; must refer to an existing pipeline.
   */
  pipelineId?: string;
  /**
   * Stage Id
   * @description Unique identifier of the pipeline stage to update; must exist within the specified `pipelineId`.
   */
  stageId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS tool output.
 */
type HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full representation of the updated pipeline stage, including all its properties.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_PRODUCT tool input.
 */
type HUBSPOT_UPDATE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description Unique HubSpot identifier for the product to be updated.
   */
  productId?: string;
  /**
   * Properties
   * @description Product properties to update. Keys are internal HubSpot property names.
   */
  properties?: {
      [key: string]: string;
  };
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_PRODUCT tool output.
 */
type HUBSPOT_UPDATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description The product object after the update.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_PRODUCTS tool input.
 */
type HUBSPOT_UPDATE_PRODUCTS_INPUT = {
  /**
   * Inputs
   * @description List of product update operations.
   */
  inputs?: {
      /**
       * Id
       * @description The HubSpot Product ID to be updated.
       */
      id: string;
      /**
       * Properties
       * @description Properties to update. Only include changes.
       */
      properties?: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_PRODUCTS tool output.
 */
type HUBSPOT_UPDATE_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response with operation status and results.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY tool input.
 */
type HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY_INPUT = {
  /**
   * Calculation Formula
   * @description New formula if `fieldType` is 'calculation_equation'; defines how its value is auto-computed. Ensure valid HubSpot calculation syntax.
   */
  calculationFormula?: string;
  /**
   * Description
   * @description New description for the property, displayed as help text in the HubSpot UI.
   */
  description?: string;
  /**
   * Display Order
   * @description New display order for the property within its group. Lower positive integers appear first; -1 typically places it after positively numbered properties.
   */
  displayOrder?: number;
  /**
   * Field Type
   * @description New field type controlling how the property is displayed and interacted with in the HubSpot UI.
   * @enum {string}
   */
  fieldType?: "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_equation";
  /**
   * Form Field
   * @description If true, allows this property to be included as a field in HubSpot forms and available in the form editor.
   */
  formField?: boolean;
  /**
   * Group Name
   * @description New internal name of the property group for this property; groups help organize properties in the HubSpot UI.
   */
  groupName?: string;
  /**
   * Hidden
   * @description If true, hides the property in the HubSpot UI, making it not generally visible or usable in standard interfaces.
   */
  hidden?: boolean;
  /**
   * Label
   * @description New human-readable label for the property, displayed in the HubSpot UI.
   */
  label?: string;
  /**
   * Object Type
   * @description Type of CRM object for which the property is being updated; this determines its context.
   */
  objectType?: string;
  /**
   * Options
   * @description List of new option definitions if property `type` is 'enumeration'; supplying a new list overwrites existing options.
   */
  options?: {
      /**
       * Description
       * @description Optional detailed description for this option, providing additional context in HubSpot.
       */
      description?: string;
      /**
       * Display Order
       * @description Sort order for this option relative to others. Lower positive integers display first; -1 typically places it after positively ordered options.
       */
      displayOrder: number;
      /**
       * Hidden
       * @description If true, this option is hidden in HubSpot selection UIs.
       */
      hidden: boolean;
      /**
       * Label
       * @description User-friendly label displayed in the HubSpot UI for this option (e.g., 'High Priority').
       */
      label: string;
      /**
       * Value
       * @description Internal, machine-readable value for this option (e.g., 'high_priority'), used when programmatically setting the property's value via API.
       */
      value: string;
  }[];
  /**
   * Property Name
   * @description Internal name of the property to update (case-sensitive); must correspond to an existing property for the specified `objectType`.
   */
  propertyName?: string;
  /**
   * Type
   * @description New data type for the property. Modifying the `type` of an existing property with data can cause data loss; use with caution.
   * @enum {string}
   */
  type?: "string" | "number" | "date" | "datetime" | "enumeration" | "bool";
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY tool output.
 */
type HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description The full definition of the CRM property after the update has been applied.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_TICKET tool input.
 */
type HUBSPOT_UPDATE_TICKET_INPUT = {
  /**
   * Properties
   * @description Ticket properties to update. Keys are internal HubSpot property names.
   */
  properties?: {
      [key: string]: string;
  };
  /**
   * Ticket Id
   * @description Unique HubSpot identifier for the ticket to be updated.
   */
  ticketId?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_TICKET tool output.
 */
type HUBSPOT_UPDATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description The ticket object after the update.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_TICKETS tool input.
 */
type HUBSPOT_UPDATE_TICKETS_INPUT = {
  /**
   * Inputs
   * @description List of ticket update operations.
   */
  inputs?: {
      /**
       * Id
       * @description The HubSpot Ticket ID to be updated.
       */
      id: string;
      /**
       * Properties
       * @description Properties to update. Only include changes.
       */
      properties?: {
          [key: string]: string;
      };
  }[];
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_TICKETS tool output.
 */
type HUBSPOT_UPDATE_TICKETS_OUTPUT = {
  /**
   * Data
   * @description HubSpot API response with operation status and results.
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE tool input.
 */
type HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description Unique identifier (ID) of the application associated with the event template and token.
   */
  appId?: number;
  /**
   * Event Template Id
   * @description Unique identifier (ID) of the event template containing the token to update.
   */
  eventTemplateId?: string;
  /**
   * Label
   * @description New human-readable label for the token, displayed in UIs and used for segmentation/reporting.
   */
  label?: string;
  /**
   * Object Property Name
   * @description Name of the CRM object property this token populates, linking its value to a CRM object property. If null, no direct mapping.
   */
  objectPropertyName?: string;
  /**
   * Options
   * @description List of option objects defining selectable choices, applicable only if the token's type is 'enumeration'. Required to modify options for an enumeration type token.
   */
  options?: {
      /**
       * Label
       * @description The display label for this option. This is what users will see in interfaces.
       */
      label: string;
      /**
       * Value
       * @description The internal value stored when this option is selected. This value is used by the system.
       */
      value: string;
  }[];
  /**
   * Token Name
   * @description Name of the token to update within the specified event template; must match an existing token's name.
   */
  tokenName?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE tool output.
 */
type HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the updated token object, including its properties like name, label, type, and options (if applicable).
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
 * Type of HUBSPOT's HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS tool input.
 */
type HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS_INPUT = {
  /**
   * App Id
   * @description Unique identifier for the video conference application in HubSpot, assigned upon creation in the developer portal. Example: 12345.
   */
  appId?: number;
  /**
   * Create Meeting Url
   * @description URL HubSpot uses to send requests for creating new video conference meetings.
   */
  createMeetingUrl?: string;
  /**
   * Delete Meeting Url
   * @description URL HubSpot uses to notify the video conference app when an integrated meeting is deleted in HubSpot.
   */
  deleteMeetingUrl?: string;
  /**
   * Fetch Accounts Uri
   * @description URL HubSpot uses to fetch user accounts from the video conference app, enabling users to select from multiple accounts if available.
   */
  fetchAccountsUri?: string;
  /**
   * Update Meeting Url
   * @description URL HubSpot uses to send updates for existing meetings, e.g., when details like topic or schedule are modified within HubSpot.
   */
  updateMeetingUrl?: string;
  /**
   * User Verify Url
   * @description URL HubSpot uses to verify a user's existence and authentication with the video conference app, confirming identity before certain actions.
   */
  userVerifyUrl?: string;
};

/**
 * Type of HUBSPOT's HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS tool output.
 */
type HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the successfully updated settings of the video conference application.
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
 * Type map of all available tool input types for toolkit "HUBSPOT".
 */
export type HUBSPOT_TOOL_INPUTS = {
  ADD_ASSET_ASSOCIATION: HUBSPOT_ADD_ASSET_ASSOCIATION_INPUT
  ADD_TOKEN_TO_EVENT_TEMPLATE: HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE_INPUT
  ARCHIVE: HUBSPOT_ARCHIVE_INPUT
  ARCHIVE_A_BATCH_OF_EMAILS_BY_ID: HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID_INPUT
  ARCHIVE_A_BATCH_OF_QUOTES_BY_ID: HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID_INPUT
  ARCHIVE_BATCH_OF_COMPANIES_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID_INPUT
  ARCHIVE_BATCH_OF_CONTACTS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID_INPUT
  ARCHIVE_BATCH_OF_DEALS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID_INPUT
  ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID_INPUT
  ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID_INPUT
  ARCHIVE_BATCH_OF_OBJECTS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID_INPUT
  ARCHIVE_BATCH_OF_PROPERTIES: HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES_INPUT
  ARCHIVE_BATCH_OF_TICKETS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID_INPUT
  ARCHIVE_BATCH_PRODUCTS_BY_ID: HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID_INPUT
  ARCHIVE_COMPANY: HUBSPOT_ARCHIVE_COMPANY_INPUT
  ARCHIVE_CONTACT_BY_ID: HUBSPOT_ARCHIVE_CONTACT_BY_ID_INPUT
  ARCHIVE_CRM_OBJECT_BY_ID: HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID_INPUT
  ARCHIVE_EMAILS: HUBSPOT_ARCHIVE_EMAILS_INPUT
  ARCHIVE_FEEDBACK_SUBMISSION: HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION_INPUT
  ARCHIVE_LINE_ITEM_BY_ID: HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID_INPUT
  ARCHIVE_PRODUCT: HUBSPOT_ARCHIVE_PRODUCT_INPUT
  ARCHIVE_PRODUCTS: HUBSPOT_ARCHIVE_PRODUCTS_INPUT
  ARCHIVE_PRODUCT_BY_PRODUCT_ID: HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID_INPUT
  ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME: HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME_INPUT
  ARCHIVE_PROPERTY_GROUP: HUBSPOT_ARCHIVE_PROPERTY_GROUP_INPUT
  ARCHIVE_QUOTE_OBJECT_BY_ID: HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID_INPUT
  ARCHIVE_TICKET: HUBSPOT_ARCHIVE_TICKET_INPUT
  ARCHIVE_TICKETS: HUBSPOT_ARCHIVE_TICKETS_INPUT
  ARCHIVE_TICKET_BY_ID: HUBSPOT_ARCHIVE_TICKET_BY_ID_INPUT
  AUDIT_PIPELINE_CHANGES_BY_ID: HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID_INPUT
  BATCH_READ_COMPANIES_BY_PROPERTIES: HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES_INPUT
  BATCH_READ_EMAILS_ACTION: HUBSPOT_BATCH_READ_EMAILS_ACTION_INPUT
  BATCH_UPDATE_QUOTES: HUBSPOT_BATCH_UPDATE_QUOTES_INPUT
  CAMPAIGN_SEARCH: HUBSPOT_CAMPAIGN_SEARCH_INPUT
  CANCEL_ACTIVE_IMPORT: HUBSPOT_CANCEL_ACTIVE_IMPORT_INPUT
  CLONE_MARKETING_EMAIL: HUBSPOT_CLONE_MARKETING_EMAIL_INPUT
  CONFIGURE_CALLING_EXTENSION_SETTINGS: HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS_INPUT
  CREATE: HUBSPOT_CREATE_INPUT
  CREATE_AB_TEST_VARIATION: HUBSPOT_CREATE_AB_TEST_VARIATION_INPUT
  CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP: HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP_INPUT
  CREATE_ASSOCIATION_FOR_OBJECT_TYPE: HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE_INPUT
  CREATE_A_BATCH_OF_CAMPAIGNS: HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS_INPUT
  CREATE_A_BATCH_OF_COMPANIES: HUBSPOT_CREATE_A_BATCH_OF_COMPANIES_INPUT
  CREATE_A_BATCH_OF_CONTACTS: HUBSPOT_CREATE_A_BATCH_OF_CONTACTS_INPUT
  CREATE_A_BATCH_OF_EMAILS: HUBSPOT_CREATE_A_BATCH_OF_EMAILS_INPUT
  CREATE_A_CAMPAIGN: HUBSPOT_CREATE_A_CAMPAIGN_INPUT
  CREATE_A_NEW_MARKETING_EMAIL: HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL_INPUT
  CREATE_BATCH_OF_CONTACTS: HUBSPOT_CREATE_BATCH_OF_CONTACTS_INPUT
  CREATE_BATCH_OF_DEALS: HUBSPOT_CREATE_BATCH_OF_DEALS_INPUT
  CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS: HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS_INPUT
  CREATE_BATCH_OF_LINE_ITEMS: HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS_INPUT
  CREATE_BATCH_OF_OBJECTS: HUBSPOT_CREATE_BATCH_OF_OBJECTS_INPUT
  CREATE_BATCH_OF_PROPERTIES: HUBSPOT_CREATE_BATCH_OF_PROPERTIES_INPUT
  CREATE_BATCH_OF_QUOTES: HUBSPOT_CREATE_BATCH_OF_QUOTES_INPUT
  CREATE_BATCH_OF_TICKET: HUBSPOT_CREATE_BATCH_OF_TICKET_INPUT
  CREATE_CAMPAIGN: HUBSPOT_CREATE_CAMPAIGN_INPUT
  CREATE_CAMPAIGNS: HUBSPOT_CREATE_CAMPAIGNS_INPUT
  CREATE_COMPANY: HUBSPOT_CREATE_COMPANY_INPUT
  CREATE_COMPANY_OBJECT: HUBSPOT_CREATE_COMPANY_OBJECT_INPUT
  CREATE_CONTACT: HUBSPOT_CREATE_CONTACT_INPUT
  CREATE_CONTACT_OBJECT_WITH_PROPERTIES: HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES_INPUT
  CREATE_CRM_OBJECT_WITH_PROPERTIES: HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES_INPUT
  CREATE_DEAL: HUBSPOT_CREATE_DEAL_INPUT
  CREATE_EMAIL: HUBSPOT_CREATE_EMAIL_INPUT
  CREATE_EMAILS: HUBSPOT_CREATE_EMAILS_INPUT
  CREATE_EVENT_TEMPLATE_FOR_APP: HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP_INPUT
  CREATE_FEEDBACK_SUBMISSION: HUBSPOT_CREATE_FEEDBACK_SUBMISSION_INPUT
  CREATE_LINE_ITEM: HUBSPOT_CREATE_LINE_ITEM_INPUT
  CREATE_LINE_ITEMS: HUBSPOT_CREATE_LINE_ITEMS_INPUT
  CREATE_LINE_ITEM_OBJECT: HUBSPOT_CREATE_LINE_ITEM_OBJECT_INPUT
  CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH: HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH_INPUT
  CREATE_NEW_DEAL_OBJECT: HUBSPOT_CREATE_NEW_DEAL_OBJECT_INPUT
  CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES: HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES_INPUT
  CREATE_OR_UPDATE_DRAFT_VERSION: HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION_INPUT
  CREATE_PIPELINE_FOR_OBJECT_TYPE: HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE_INPUT
  CREATE_PIPELINE_STAGE: HUBSPOT_CREATE_PIPELINE_STAGE_INPUT
  CREATE_PRODUCT: HUBSPOT_CREATE_PRODUCT_INPUT
  CREATE_PRODUCTS: HUBSPOT_CREATE_PRODUCTS_INPUT
  CREATE_PRODUCT_BATCH: HUBSPOT_CREATE_PRODUCT_BATCH_INPUT
  CREATE_PRODUCT_OBJECT: HUBSPOT_CREATE_PRODUCT_OBJECT_INPUT
  CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE: HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE_INPUT
  CREATE_QUOTE_OBJECT: HUBSPOT_CREATE_QUOTE_OBJECT_INPUT
  CREATE_TICKET: HUBSPOT_CREATE_TICKET_INPUT
  CREATE_TICKETS: HUBSPOT_CREATE_TICKETS_INPUT
  CREATE_TICKET_OBJECT: HUBSPOT_CREATE_TICKET_OBJECT_INPUT
  CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE: HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE_INPUT
  CREATE_WORKFLOW: HUBSPOT_CREATE_WORKFLOW_INPUT
  CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL: HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL_INPUT
  DELETE_A_BATCH_OF_CAMPAIGNS: HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS_INPUT
  DELETE_A_MARKETING_EMAIL: HUBSPOT_DELETE_A_MARKETING_EMAIL_INPUT
  DELETE_CALLING_EXTENSION_SETTINGS: HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS_INPUT
  DELETE_CAMPAIGN: HUBSPOT_DELETE_CAMPAIGN_INPUT
  DELETE_CONTACT_FOR_GDPR_COMPLIANCE: HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_INPUT
  DELETE_PIPELINE_BY_ID: HUBSPOT_DELETE_PIPELINE_BY_ID_INPUT
  DELETE_PIPELINE_STAGE_BY_ID: HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID_INPUT
  DELETE_SCHEMA_BY_OBJECT_TYPE: HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE_INPUT
  DELETE_TIMELINE_EVENT_TEMPLATE: HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE_INPUT
  DELETE_VIDEO_CONFERENCING_APP_SETTINGS: HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS_INPUT
  DELETE_WORKFLOW: HUBSPOT_DELETE_WORKFLOW_INPUT
  FETCH_CONTACT_DETAILS_BY_ID: HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID_INPUT
  FETCH_CONTACT_IDS: HUBSPOT_FETCH_CONTACT_IDS_INPUT
  FETCH_IMPORT_ERROR_DETAILS: HUBSPOT_FETCH_IMPORT_ERROR_DETAILS_INPUT
  FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY: HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY_INPUT
  FETCH_RECORDING_SETTINGS_BY_APP_ID: HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID_INPUT
  FETCH_REVENUE: HUBSPOT_FETCH_REVENUE_INPUT
  GDPR_DELETE: HUBSPOT_GDPR_DELETE_INPUT
  GET_ACTIVE_IMPORTS_LIST: HUBSPOT_GET_ACTIVE_IMPORTS_LIST_INPUT
  GET_AGGREGATED_STATISTICS: HUBSPOT_GET_AGGREGATED_STATISTICS_INPUT
  GET_AGGREGATED_STATISTIC_INTERVALS: HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS_INPUT
  GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT: HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT_INPUT
  GET_ALL_WORKFLOWS: HUBSPOT_GET_ALL_WORKFLOWS_INPUT
  GET_A_PAGE_OF_OWNERS: HUBSPOT_GET_A_PAGE_OF_OWNERS_INPUT
  GET_A_REVISION_OF_A_MARKETING_EMAIL: HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL_INPUT
  GET_CAMPAIGN: HUBSPOT_GET_CAMPAIGN_INPUT
  GET_CAMPAIGNS: HUBSPOT_GET_CAMPAIGNS_INPUT
  GET_CAMPAIGN_METRICS: HUBSPOT_GET_CAMPAIGN_METRICS_INPUT
  GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL: HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL_INPUT
  GET_EMAILS: HUBSPOT_GET_EMAILS_INPUT
  GET_IMPORT_RECORD_INFORMATION: HUBSPOT_GET_IMPORT_RECORD_INFORMATION_INPUT
  GET_MARKETING_EMAILS: HUBSPOT_GET_MARKETING_EMAILS_INPUT
  GET_PIPELINE_STAGE_AUDIT: HUBSPOT_GET_PIPELINE_STAGE_AUDIT_INPUT
  GET_PRODUCT: HUBSPOT_GET_PRODUCT_INPUT
  GET_PRODUCTS: HUBSPOT_GET_PRODUCTS_INPUT
  GET_QUOTE_BY_ID: HUBSPOT_GET_QUOTE_BY_ID_INPUT
  GET_REVISIONS_OF_A_MARKETING_EMAIL: HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL_INPUT
  GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP: HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP_INPUT
  GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL: HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL_INPUT
  GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL: HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL_INPUT
  GET_TICKET: HUBSPOT_GET_TICKET_INPUT
  GET_TICKETS: HUBSPOT_GET_TICKETS_INPUT
  GET_WORKFLOW_BY_ID: HUBSPOT_GET_WORKFLOW_BY_ID_INPUT
  GET_WORKFLOW_EMAIL_CAMPAIGNS: HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS_INPUT
  HUBSPOT_ARCHIVE_COMPANIES: HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES_INPUT
  HUBSPOT_ARCHIVE_CONTACT: HUBSPOT_HUBSPOT_ARCHIVE_CONTACT_INPUT
  HUBSPOT_ARCHIVE_CONTACTS: HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS_INPUT
  HUBSPOT_ARCHIVE_DEALS: HUBSPOT_HUBSPOT_ARCHIVE_DEALS_INPUT
  HUBSPOT_CREATE_COMPANIES: HUBSPOT_HUBSPOT_CREATE_COMPANIES_INPUT
  HUBSPOT_CREATE_CONTACTS: HUBSPOT_HUBSPOT_CREATE_CONTACTS_INPUT
  HUBSPOT_CREATE_DEALS: HUBSPOT_HUBSPOT_CREATE_DEALS_INPUT
  HUBSPOT_GET_COMPANY: HUBSPOT_HUBSPOT_GET_COMPANY_INPUT
  HUBSPOT_GET_CONTACT_IDS: HUBSPOT_HUBSPOT_GET_CONTACT_IDS_INPUT
  HUBSPOT_GET_DEAL: HUBSPOT_HUBSPOT_GET_DEAL_INPUT
  HUBSPOT_GET_DEALS: HUBSPOT_HUBSPOT_GET_DEALS_INPUT
  HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING: HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING_INPUT
  HUBSPOT_LIST_COMPANIES: HUBSPOT_HUBSPOT_LIST_COMPANIES_INPUT
  HUBSPOT_LIST_CONTACTS: HUBSPOT_HUBSPOT_LIST_CONTACTS_INPUT
  HUBSPOT_LIST_DEALS: HUBSPOT_HUBSPOT_LIST_DEALS_INPUT
  HUBSPOT_MERGE_CONTACTS: HUBSPOT_HUBSPOT_MERGE_CONTACTS_INPUT
  HUBSPOT_MERGE_DEALS: HUBSPOT_HUBSPOT_MERGE_DEALS_INPUT
  HUBSPOT_READ_CONTACT: HUBSPOT_HUBSPOT_READ_CONTACT_INPUT
  HUBSPOT_READ_CONTACTS: HUBSPOT_HUBSPOT_READ_CONTACTS_INPUT
  HUBSPOT_REMOVE_DEAL: HUBSPOT_HUBSPOT_REMOVE_DEAL_INPUT
  HUBSPOT_SEARCH_COMPANIES: HUBSPOT_HUBSPOT_SEARCH_COMPANIES_INPUT
  HUBSPOT_SEARCH_DEALS: HUBSPOT_HUBSPOT_SEARCH_DEALS_INPUT
  HUBSPOT_UPDATE_COMPANIES: HUBSPOT_HUBSPOT_UPDATE_COMPANIES_INPUT
  HUBSPOT_UPDATE_COMPANY: HUBSPOT_HUBSPOT_UPDATE_COMPANY_INPUT
  HUBSPOT_UPDATE_CONTACT: HUBSPOT_HUBSPOT_UPDATE_CONTACT_INPUT
  HUBSPOT_UPDATE_CONTACTS: HUBSPOT_HUBSPOT_UPDATE_CONTACTS_INPUT
  HUBSPOT_UPDATE_DEAL: HUBSPOT_HUBSPOT_UPDATE_DEAL_INPUT
  HUBSPOT_UPDATE_DEALS: HUBSPOT_HUBSPOT_UPDATE_DEALS_INPUT
  INITIATE_DATA_IMPORT_PROCESS: HUBSPOT_INITIATE_DATA_IMPORT_PROCESS_INPUT
  INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT: HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT_INPUT
  LIST: HUBSPOT_LIST_INPUT
  LIST_ALL_EVENT_TEMPLATES_FOR_APP: HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP_INPUT
  LIST_ASSETS: HUBSPOT_LIST_ASSETS_INPUT
  LIST_ASSOCIATION_TYPES: HUBSPOT_LIST_ASSOCIATION_TYPES_INPUT
  LIST_CONTACTS_PAGE: HUBSPOT_LIST_CONTACTS_PAGE_INPUT
  LIST_FEEDBACK_SUBMISSIONS_PAGE: HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE_INPUT
  LIST_PAGE_OF_TICKETS: HUBSPOT_LIST_PAGE_OF_TICKETS_INPUT
  LIST_QUOTES_PAGE: HUBSPOT_LIST_QUOTES_PAGE_INPUT
  LIST_TICKETS: HUBSPOT_LIST_TICKETS_INPUT
  MERGE_EMAILS: HUBSPOT_MERGE_EMAILS_INPUT
  MERGE_PRODUCTS: HUBSPOT_MERGE_PRODUCTS_INPUT
  MERGE_TICKETS: HUBSPOT_MERGE_TICKETS_INPUT
  MERGE_TWO_COMPANIES_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE_INPUT
  MERGE_TWO_CONTACTS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE_INPUT
  MERGE_TWO_DEALS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE_INPUT
  MERGE_TWO_EMAILS_WITH_SAME_TYPE: HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE_INPUT
  MERGE_TWO_FEEDBACK_SUBMISSIONS: HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS_INPUT
  MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE_INPUT
  MERGE_TWO_OBJECTS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE_INPUT
  MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE: HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE_INPUT
  MERGE_TWO_QUOTES_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE_INPUT
  MERGE_TWO_TICKETS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE_INPUT
  MODIFY_CALLING_EXTENSION_SETTINGS: HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS_INPUT
  PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID: HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID_INPUT
  PARTIALLY_UPDATE_CRM_OBJECT_BY_ID: HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID_INPUT
  PARTIALLY_UPDATE_DEAL_BY_ID: HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID_INPUT
  PARTIALLY_UPDATE_PIPELINE_BY_ID: HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID_INPUT
  PARTIALLY_UPDATE_PROPERTY_GROUP: HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP_INPUT
  PARTIALLY_UPDATE_TICKET_BY_ID: HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID_INPUT
  PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID: HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID_INPUT
  PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID: HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID_INPUT
  PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE_INPUT
  PERMANENTLY_DELETE_CONTACT_FOR_GDPR: HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_INPUT
  PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_INPUT
  PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE_INPUT
  PERMANENTLY_DELETE_CONTACT_VIA_GDPR: HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR_INPUT
  PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE_INPUT
  PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT: HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT_INPUT
  PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR: HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR_INPUT
  PUBLISH_MARKETING_EMAIL: HUBSPOT_PUBLISH_MARKETING_EMAIL_INPUT
  PURGE_SCHEMA_BY_OBJECT_TYPE: HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE_INPUT
  READ: HUBSPOT_READ_INPUT
  READ_ALL_PROPERTIES: HUBSPOT_READ_ALL_PROPERTIES_INPUT
  READ_ALL_PROPERTIES_FOR_OBJECT_TYPE: HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE_INPUT
  READ_ALL_PROPERTY_GROUPS: HUBSPOT_READ_ALL_PROPERTY_GROUPS_INPUT
  READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID: HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID_INPUT
  READ_APAGE_OF_OBJECTS_BY_TYPE: HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE_INPUT
  READ_A_BATCH_OF_CAMPAIGNS: HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS_INPUT
  READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES: HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES_INPUT
  READ_A_CAMPAIGN: HUBSPOT_READ_A_CAMPAIGN_INPUT
  READ_A_CRM_PROPERTY_BY_NAME: HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME_INPUT
  READ_A_PAGE_OF_DEALS: HUBSPOT_READ_A_PAGE_OF_DEALS_INPUT
  READ_A_PROPERTY: HUBSPOT_READ_A_PROPERTY_INPUT
  READ_A_PROPERTY_GROUP: HUBSPOT_READ_A_PROPERTY_GROUP_INPUT
  READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY: HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY_INPUT
  READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES: HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES_INPUT
  READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES: HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES_INPUT
  READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES: HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES_INPUT
  READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY: HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY_INPUT
  READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES: HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES_INPUT
  READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES: HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES_INPUT
  READ_BUDGET: HUBSPOT_READ_BUDGET_INPUT
  READ_CRM_CONTACT_BY_ID: HUBSPOT_READ_CRM_CONTACT_BY_ID_INPUT
  READ_CRM_OBJECT_BY_ID: HUBSPOT_READ_CRM_OBJECT_BY_ID_INPUT
  READ_FEEDBACK_SUBMISSION_BY_ID: HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID_INPUT
  READ_PRODUCT_BY_ID: HUBSPOT_READ_PRODUCT_BY_ID_INPUT
  READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE: HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE_INPUT
  RECYCLE_CONTACT_BY_ID: HUBSPOT_RECYCLE_CONTACT_BY_ID_INPUT
  REMOVE_ASSET_ASSOCIATION: HUBSPOT_REMOVE_ASSET_ASSOCIATION_INPUT
  REMOVE_ASSOCIATION_FROM_SCHEMA: HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA_INPUT
  REMOVE_DEAL_OBJECT_BY_ID: HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID_INPUT
  REMOVE_TOKEN_FROM_EVENT_TEMPLATE: HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE_INPUT
  RENDER_EVENT_DETAIL_TEMPLATE: HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE_INPUT
  RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML: HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML_INPUT
  REPLACE_ALL_PROPERTIES_OF_PIPELINE: HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE_INPUT
  REPLACE_PIPELINE_STAGE_PROPERTIES: HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES_INPUT
  RESET_DRAFT: HUBSPOT_RESET_DRAFT_INPUT
  RESTORE_A_REVISION_OF_A_MARKETING_EMAIL: HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_INPUT
  RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE: HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE_INPUT
  RETRIEVE_ALL_OBJECT_SCHEMAS: HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS_INPUT
  RETRIEVE_ALL_PIPELINES: HUBSPOT_RETRIEVE_ALL_PIPELINES_INPUT
  RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE: HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE_INPUT
  RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES: HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES_INPUT
  RETRIEVE_CALLING_SETTINGS_FOR_APP: HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP_INPUT
  RETRIEVE_COMPANY_OBJECT_BY_ID: HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID_INPUT
  RETRIEVE_DEAL_BY_ID: HUBSPOT_RETRIEVE_DEAL_BY_ID_INPUT
  RETRIEVE_EXISTING_OBJECT_SCHEMA: HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA_INPUT
  RETRIEVE_LINE_ITEMS_LIST: HUBSPOT_RETRIEVE_LINE_ITEMS_LIST_INPUT
  RETRIEVE_LINE_ITEM_BY_ID: HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID_INPUT
  RETRIEVE_OWNERS: HUBSPOT_RETRIEVE_OWNERS_INPUT
  RETRIEVE_OWNER_BY_ID_OR_USER_ID: HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID_INPUT
  RETRIEVE_PAGE_OF_COMPANIES: HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES_INPUT
  RETRIEVE_PAGE_OF_CRM_OWNERS: HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS_INPUT
  RETRIEVE_PIPELINE_STAGES: HUBSPOT_RETRIEVE_PIPELINE_STAGES_INPUT
  RETRIEVE_PIPELINE_STAGE_BY_ID: HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID_INPUT
  RETRIEVE_TICKET_BY_ID: HUBSPOT_RETRIEVE_TICKET_BY_ID_INPUT
  RETRIEVE_TIMELINE_EVENT_BY_IDS: HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS_INPUT
  RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID: HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID_INPUT
  RETURN_PIPELINE_BY_ID: HUBSPOT_RETURN_PIPELINE_BY_ID_INPUT
  SEARCH_CAMPAIGNS: HUBSPOT_SEARCH_CAMPAIGNS_INPUT
  SEARCH_COMPANY_OBJECTS: HUBSPOT_SEARCH_COMPANY_OBJECTS_INPUT
  SEARCH_CONTACTS_BY_CRITERIA: HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA_INPUT
  SEARCH_CRM_EMAIL_OBJECTS: HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS_INPUT
  SEARCH_CRM_OBJECTS_BY_CRITERIA: HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA_INPUT
  SEARCH_DEALS_BY_CRITERIA: HUBSPOT_SEARCH_DEALS_BY_CRITERIA_INPUT
  SEARCH_EMAILS: HUBSPOT_SEARCH_EMAILS_INPUT
  SEARCH_FEEDBACK_SUBMISSIONS: HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS_INPUT
  SEARCH_LINE_ITEMS_BY_CRITERIA: HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA_INPUT
  SEARCH_PRODUCTS: HUBSPOT_SEARCH_PRODUCTS_INPUT
  SEARCH_PRODUCTS_BY_CRITERIA: HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA_INPUT
  SEARCH_QUOTES_BY_CRITERIA: HUBSPOT_SEARCH_QUOTES_BY_CRITERIA_INPUT
  SEARCH_TICKETS: HUBSPOT_SEARCH_TICKETS_INPUT
  SEARCH_TICKETS_BY_CRITERIA: HUBSPOT_SEARCH_TICKETS_BY_CRITERIA_INPUT
  SECURE_PRODUCT_SEARCH_BY_CRITERIA: HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA_INPUT
  SET_CALL_RECORDING_SETTINGS: HUBSPOT_SET_CALL_RECORDING_SETTINGS_INPUT
  UPDATE: HUBSPOT_UPDATE_INPUT
  UPDATE_A_BATCH_OF_CAMPAIGNS: HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS_INPUT
  UPDATE_A_BATCH_OF_CONTACTS: HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS_INPUT
  UPDATE_A_BATCH_OF_EMAILS: HUBSPOT_UPDATE_A_BATCH_OF_EMAILS_INPUT
  UPDATE_A_BATCH_OF_LINE_ITEMS: HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS_INPUT
  UPDATE_A_MARKETING_EMAIL: HUBSPOT_UPDATE_A_MARKETING_EMAIL_INPUT
  UPDATE_BATCH_FEEDBACK_SUBMISSIONS: HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS_INPUT
  UPDATE_BATCH_OF_COMPANIES: HUBSPOT_UPDATE_BATCH_OF_COMPANIES_INPUT
  UPDATE_BATCH_OF_CRMOBJECTS_TICKETS: HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS_INPUT
  UPDATE_BATCH_OF_DEALS: HUBSPOT_UPDATE_BATCH_OF_DEALS_INPUT
  UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES: HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES_INPUT
  UPDATE_BATCH_OF_PRODUCTS: HUBSPOT_UPDATE_BATCH_OF_PRODUCTS_INPUT
  UPDATE_CALLING_APP_RECORDING_SETTINGS: HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS_INPUT
  UPDATE_CAMPAIGN: HUBSPOT_UPDATE_CAMPAIGN_INPUT
  UPDATE_EMAILS: HUBSPOT_UPDATE_EMAILS_INPUT
  UPDATE_EXISTING_EVENT_TEMPLATE: HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE_INPUT
  UPDATE_EXISTING_OBJECT_SCHEMA: HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA_INPUT
  UPDATE_FEEDBACK_SUBMISSION_BY_ID: HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID_INPUT
  UPDATE_LINE_ITEM_OBJECT_PARTIALLY: HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY_INPUT
  UPDATE_PIPELINE_STAGE_BY_IDS: HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS_INPUT
  UPDATE_PRODUCT: HUBSPOT_UPDATE_PRODUCT_INPUT
  UPDATE_PRODUCTS: HUBSPOT_UPDATE_PRODUCTS_INPUT
  UPDATE_SPECIFIC_CRM_PROPERTY: HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY_INPUT
  UPDATE_TICKET: HUBSPOT_UPDATE_TICKET_INPUT
  UPDATE_TICKETS: HUBSPOT_UPDATE_TICKETS_INPUT
  UPDATE_TOKEN_ON_EVENT_TEMPLATE: HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE_INPUT
  UPDATE_VIDEO_CONFERENCE_APP_SETTINGS: HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HUBSPOT".
 */
export type HUBSPOT_TOOL_OUTPUTS = {
  ADD_ASSET_ASSOCIATION: HUBSPOT_ADD_ASSET_ASSOCIATION_OUTPUT
  ADD_TOKEN_TO_EVENT_TEMPLATE: HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE_OUTPUT
  ARCHIVE: HUBSPOT_ARCHIVE_OUTPUT
  ARCHIVE_A_BATCH_OF_EMAILS_BY_ID: HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID_OUTPUT
  ARCHIVE_A_BATCH_OF_QUOTES_BY_ID: HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_COMPANIES_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_CONTACTS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_DEALS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_OBJECTS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID_OUTPUT
  ARCHIVE_BATCH_OF_PROPERTIES: HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES_OUTPUT
  ARCHIVE_BATCH_OF_TICKETS_BY_ID: HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID_OUTPUT
  ARCHIVE_BATCH_PRODUCTS_BY_ID: HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID_OUTPUT
  ARCHIVE_COMPANY: HUBSPOT_ARCHIVE_COMPANY_OUTPUT
  ARCHIVE_CONTACT_BY_ID: HUBSPOT_ARCHIVE_CONTACT_BY_ID_OUTPUT
  ARCHIVE_CRM_OBJECT_BY_ID: HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID_OUTPUT
  ARCHIVE_EMAILS: HUBSPOT_ARCHIVE_EMAILS_OUTPUT
  ARCHIVE_FEEDBACK_SUBMISSION: HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION_OUTPUT
  ARCHIVE_LINE_ITEM_BY_ID: HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID_OUTPUT
  ARCHIVE_PRODUCT: HUBSPOT_ARCHIVE_PRODUCT_OUTPUT
  ARCHIVE_PRODUCTS: HUBSPOT_ARCHIVE_PRODUCTS_OUTPUT
  ARCHIVE_PRODUCT_BY_PRODUCT_ID: HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID_OUTPUT
  ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME: HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME_OUTPUT
  ARCHIVE_PROPERTY_GROUP: HUBSPOT_ARCHIVE_PROPERTY_GROUP_OUTPUT
  ARCHIVE_QUOTE_OBJECT_BY_ID: HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID_OUTPUT
  ARCHIVE_TICKET: HUBSPOT_ARCHIVE_TICKET_OUTPUT
  ARCHIVE_TICKETS: HUBSPOT_ARCHIVE_TICKETS_OUTPUT
  ARCHIVE_TICKET_BY_ID: HUBSPOT_ARCHIVE_TICKET_BY_ID_OUTPUT
  AUDIT_PIPELINE_CHANGES_BY_ID: HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID_OUTPUT
  BATCH_READ_COMPANIES_BY_PROPERTIES: HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES_OUTPUT
  BATCH_READ_EMAILS_ACTION: HUBSPOT_BATCH_READ_EMAILS_ACTION_OUTPUT
  BATCH_UPDATE_QUOTES: HUBSPOT_BATCH_UPDATE_QUOTES_OUTPUT
  CAMPAIGN_SEARCH: HUBSPOT_CAMPAIGN_SEARCH_OUTPUT
  CANCEL_ACTIVE_IMPORT: HUBSPOT_CANCEL_ACTIVE_IMPORT_OUTPUT
  CLONE_MARKETING_EMAIL: HUBSPOT_CLONE_MARKETING_EMAIL_OUTPUT
  CONFIGURE_CALLING_EXTENSION_SETTINGS: HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS_OUTPUT
  CREATE: HUBSPOT_CREATE_OUTPUT
  CREATE_AB_TEST_VARIATION: HUBSPOT_CREATE_AB_TEST_VARIATION_OUTPUT
  CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP: HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP_OUTPUT
  CREATE_ASSOCIATION_FOR_OBJECT_TYPE: HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE_OUTPUT
  CREATE_A_BATCH_OF_CAMPAIGNS: HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS_OUTPUT
  CREATE_A_BATCH_OF_COMPANIES: HUBSPOT_CREATE_A_BATCH_OF_COMPANIES_OUTPUT
  CREATE_A_BATCH_OF_CONTACTS: HUBSPOT_CREATE_A_BATCH_OF_CONTACTS_OUTPUT
  CREATE_A_BATCH_OF_EMAILS: HUBSPOT_CREATE_A_BATCH_OF_EMAILS_OUTPUT
  CREATE_A_CAMPAIGN: HUBSPOT_CREATE_A_CAMPAIGN_OUTPUT
  CREATE_A_NEW_MARKETING_EMAIL: HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL_OUTPUT
  CREATE_BATCH_OF_CONTACTS: HUBSPOT_CREATE_BATCH_OF_CONTACTS_OUTPUT
  CREATE_BATCH_OF_DEALS: HUBSPOT_CREATE_BATCH_OF_DEALS_OUTPUT
  CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS: HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS_OUTPUT
  CREATE_BATCH_OF_LINE_ITEMS: HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS_OUTPUT
  CREATE_BATCH_OF_OBJECTS: HUBSPOT_CREATE_BATCH_OF_OBJECTS_OUTPUT
  CREATE_BATCH_OF_PROPERTIES: HUBSPOT_CREATE_BATCH_OF_PROPERTIES_OUTPUT
  CREATE_BATCH_OF_QUOTES: HUBSPOT_CREATE_BATCH_OF_QUOTES_OUTPUT
  CREATE_BATCH_OF_TICKET: HUBSPOT_CREATE_BATCH_OF_TICKET_OUTPUT
  CREATE_CAMPAIGN: HUBSPOT_CREATE_CAMPAIGN_OUTPUT
  CREATE_CAMPAIGNS: HUBSPOT_CREATE_CAMPAIGNS_OUTPUT
  CREATE_COMPANY: HUBSPOT_CREATE_COMPANY_OUTPUT
  CREATE_COMPANY_OBJECT: HUBSPOT_CREATE_COMPANY_OBJECT_OUTPUT
  CREATE_CONTACT: HUBSPOT_CREATE_CONTACT_OUTPUT
  CREATE_CONTACT_OBJECT_WITH_PROPERTIES: HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES_OUTPUT
  CREATE_CRM_OBJECT_WITH_PROPERTIES: HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES_OUTPUT
  CREATE_DEAL: HUBSPOT_CREATE_DEAL_OUTPUT
  CREATE_EMAIL: HUBSPOT_CREATE_EMAIL_OUTPUT
  CREATE_EMAILS: HUBSPOT_CREATE_EMAILS_OUTPUT
  CREATE_EVENT_TEMPLATE_FOR_APP: HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP_OUTPUT
  CREATE_FEEDBACK_SUBMISSION: HUBSPOT_CREATE_FEEDBACK_SUBMISSION_OUTPUT
  CREATE_LINE_ITEM: HUBSPOT_CREATE_LINE_ITEM_OUTPUT
  CREATE_LINE_ITEMS: HUBSPOT_CREATE_LINE_ITEMS_OUTPUT
  CREATE_LINE_ITEM_OBJECT: HUBSPOT_CREATE_LINE_ITEM_OBJECT_OUTPUT
  CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH: HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH_OUTPUT
  CREATE_NEW_DEAL_OBJECT: HUBSPOT_CREATE_NEW_DEAL_OBJECT_OUTPUT
  CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES: HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES_OUTPUT
  CREATE_OR_UPDATE_DRAFT_VERSION: HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION_OUTPUT
  CREATE_PIPELINE_FOR_OBJECT_TYPE: HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE_OUTPUT
  CREATE_PIPELINE_STAGE: HUBSPOT_CREATE_PIPELINE_STAGE_OUTPUT
  CREATE_PRODUCT: HUBSPOT_CREATE_PRODUCT_OUTPUT
  CREATE_PRODUCTS: HUBSPOT_CREATE_PRODUCTS_OUTPUT
  CREATE_PRODUCT_BATCH: HUBSPOT_CREATE_PRODUCT_BATCH_OUTPUT
  CREATE_PRODUCT_OBJECT: HUBSPOT_CREATE_PRODUCT_OBJECT_OUTPUT
  CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE: HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE_OUTPUT
  CREATE_QUOTE_OBJECT: HUBSPOT_CREATE_QUOTE_OBJECT_OUTPUT
  CREATE_TICKET: HUBSPOT_CREATE_TICKET_OUTPUT
  CREATE_TICKETS: HUBSPOT_CREATE_TICKETS_OUTPUT
  CREATE_TICKET_OBJECT: HUBSPOT_CREATE_TICKET_OBJECT_OUTPUT
  CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE: HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE_OUTPUT
  CREATE_WORKFLOW: HUBSPOT_CREATE_WORKFLOW_OUTPUT
  CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL: HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL_OUTPUT
  DELETE_A_BATCH_OF_CAMPAIGNS: HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS_OUTPUT
  DELETE_A_MARKETING_EMAIL: HUBSPOT_DELETE_A_MARKETING_EMAIL_OUTPUT
  DELETE_CALLING_EXTENSION_SETTINGS: HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS_OUTPUT
  DELETE_CAMPAIGN: HUBSPOT_DELETE_CAMPAIGN_OUTPUT
  DELETE_CONTACT_FOR_GDPR_COMPLIANCE: HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_OUTPUT
  DELETE_PIPELINE_BY_ID: HUBSPOT_DELETE_PIPELINE_BY_ID_OUTPUT
  DELETE_PIPELINE_STAGE_BY_ID: HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID_OUTPUT
  DELETE_SCHEMA_BY_OBJECT_TYPE: HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE_OUTPUT
  DELETE_TIMELINE_EVENT_TEMPLATE: HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE_OUTPUT
  DELETE_VIDEO_CONFERENCING_APP_SETTINGS: HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS_OUTPUT
  DELETE_WORKFLOW: HUBSPOT_DELETE_WORKFLOW_OUTPUT
  FETCH_CONTACT_DETAILS_BY_ID: HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID_OUTPUT
  FETCH_CONTACT_IDS: HUBSPOT_FETCH_CONTACT_IDS_OUTPUT
  FETCH_IMPORT_ERROR_DETAILS: HUBSPOT_FETCH_IMPORT_ERROR_DETAILS_OUTPUT
  FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY: HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY_OUTPUT
  FETCH_RECORDING_SETTINGS_BY_APP_ID: HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID_OUTPUT
  FETCH_REVENUE: HUBSPOT_FETCH_REVENUE_OUTPUT
  GDPR_DELETE: HUBSPOT_GDPR_DELETE_OUTPUT
  GET_ACTIVE_IMPORTS_LIST: HUBSPOT_GET_ACTIVE_IMPORTS_LIST_OUTPUT
  GET_AGGREGATED_STATISTICS: HUBSPOT_GET_AGGREGATED_STATISTICS_OUTPUT
  GET_AGGREGATED_STATISTIC_INTERVALS: HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS_OUTPUT
  GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT: HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT_OUTPUT
  GET_ALL_WORKFLOWS: HUBSPOT_GET_ALL_WORKFLOWS_OUTPUT
  GET_A_PAGE_OF_OWNERS: HUBSPOT_GET_A_PAGE_OF_OWNERS_OUTPUT
  GET_A_REVISION_OF_A_MARKETING_EMAIL: HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL_OUTPUT
  GET_CAMPAIGN: HUBSPOT_GET_CAMPAIGN_OUTPUT
  GET_CAMPAIGNS: HUBSPOT_GET_CAMPAIGNS_OUTPUT
  GET_CAMPAIGN_METRICS: HUBSPOT_GET_CAMPAIGN_METRICS_OUTPUT
  GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL: HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL_OUTPUT
  GET_EMAILS: HUBSPOT_GET_EMAILS_OUTPUT
  GET_IMPORT_RECORD_INFORMATION: HUBSPOT_GET_IMPORT_RECORD_INFORMATION_OUTPUT
  GET_MARKETING_EMAILS: HUBSPOT_GET_MARKETING_EMAILS_OUTPUT
  GET_PIPELINE_STAGE_AUDIT: HUBSPOT_GET_PIPELINE_STAGE_AUDIT_OUTPUT
  GET_PRODUCT: HUBSPOT_GET_PRODUCT_OUTPUT
  GET_PRODUCTS: HUBSPOT_GET_PRODUCTS_OUTPUT
  GET_QUOTE_BY_ID: HUBSPOT_GET_QUOTE_BY_ID_OUTPUT
  GET_REVISIONS_OF_A_MARKETING_EMAIL: HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL_OUTPUT
  GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP: HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP_OUTPUT
  GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL: HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL_OUTPUT
  GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL: HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL_OUTPUT
  GET_TICKET: HUBSPOT_GET_TICKET_OUTPUT
  GET_TICKETS: HUBSPOT_GET_TICKETS_OUTPUT
  GET_WORKFLOW_BY_ID: HUBSPOT_GET_WORKFLOW_BY_ID_OUTPUT
  GET_WORKFLOW_EMAIL_CAMPAIGNS: HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS_OUTPUT
  HUBSPOT_ARCHIVE_COMPANIES: HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES_OUTPUT
  HUBSPOT_ARCHIVE_CONTACT: HUBSPOT_HUBSPOT_ARCHIVE_CONTACT_OUTPUT
  HUBSPOT_ARCHIVE_CONTACTS: HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS_OUTPUT
  HUBSPOT_ARCHIVE_DEALS: HUBSPOT_HUBSPOT_ARCHIVE_DEALS_OUTPUT
  HUBSPOT_CREATE_COMPANIES: HUBSPOT_HUBSPOT_CREATE_COMPANIES_OUTPUT
  HUBSPOT_CREATE_CONTACTS: HUBSPOT_HUBSPOT_CREATE_CONTACTS_OUTPUT
  HUBSPOT_CREATE_DEALS: HUBSPOT_HUBSPOT_CREATE_DEALS_OUTPUT
  HUBSPOT_GET_COMPANY: HUBSPOT_HUBSPOT_GET_COMPANY_OUTPUT
  HUBSPOT_GET_CONTACT_IDS: HUBSPOT_HUBSPOT_GET_CONTACT_IDS_OUTPUT
  HUBSPOT_GET_DEAL: HUBSPOT_HUBSPOT_GET_DEAL_OUTPUT
  HUBSPOT_GET_DEALS: HUBSPOT_HUBSPOT_GET_DEALS_OUTPUT
  HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING: HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING_OUTPUT
  HUBSPOT_LIST_COMPANIES: HUBSPOT_HUBSPOT_LIST_COMPANIES_OUTPUT
  HUBSPOT_LIST_CONTACTS: HUBSPOT_HUBSPOT_LIST_CONTACTS_OUTPUT
  HUBSPOT_LIST_DEALS: HUBSPOT_HUBSPOT_LIST_DEALS_OUTPUT
  HUBSPOT_MERGE_CONTACTS: HUBSPOT_HUBSPOT_MERGE_CONTACTS_OUTPUT
  HUBSPOT_MERGE_DEALS: HUBSPOT_HUBSPOT_MERGE_DEALS_OUTPUT
  HUBSPOT_READ_CONTACT: HUBSPOT_HUBSPOT_READ_CONTACT_OUTPUT
  HUBSPOT_READ_CONTACTS: HUBSPOT_HUBSPOT_READ_CONTACTS_OUTPUT
  HUBSPOT_REMOVE_DEAL: HUBSPOT_HUBSPOT_REMOVE_DEAL_OUTPUT
  HUBSPOT_SEARCH_COMPANIES: HUBSPOT_HUBSPOT_SEARCH_COMPANIES_OUTPUT
  HUBSPOT_SEARCH_DEALS: HUBSPOT_HUBSPOT_SEARCH_DEALS_OUTPUT
  HUBSPOT_UPDATE_COMPANIES: HUBSPOT_HUBSPOT_UPDATE_COMPANIES_OUTPUT
  HUBSPOT_UPDATE_COMPANY: HUBSPOT_HUBSPOT_UPDATE_COMPANY_OUTPUT
  HUBSPOT_UPDATE_CONTACT: HUBSPOT_HUBSPOT_UPDATE_CONTACT_OUTPUT
  HUBSPOT_UPDATE_CONTACTS: HUBSPOT_HUBSPOT_UPDATE_CONTACTS_OUTPUT
  HUBSPOT_UPDATE_DEAL: HUBSPOT_HUBSPOT_UPDATE_DEAL_OUTPUT
  HUBSPOT_UPDATE_DEALS: HUBSPOT_HUBSPOT_UPDATE_DEALS_OUTPUT
  INITIATE_DATA_IMPORT_PROCESS: HUBSPOT_INITIATE_DATA_IMPORT_PROCESS_OUTPUT
  INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT: HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT_OUTPUT
  LIST: HUBSPOT_LIST_OUTPUT
  LIST_ALL_EVENT_TEMPLATES_FOR_APP: HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP_OUTPUT
  LIST_ASSETS: HUBSPOT_LIST_ASSETS_OUTPUT
  LIST_ASSOCIATION_TYPES: HUBSPOT_LIST_ASSOCIATION_TYPES_OUTPUT
  LIST_CONTACTS_PAGE: HUBSPOT_LIST_CONTACTS_PAGE_OUTPUT
  LIST_FEEDBACK_SUBMISSIONS_PAGE: HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE_OUTPUT
  LIST_PAGE_OF_TICKETS: HUBSPOT_LIST_PAGE_OF_TICKETS_OUTPUT
  LIST_QUOTES_PAGE: HUBSPOT_LIST_QUOTES_PAGE_OUTPUT
  LIST_TICKETS: HUBSPOT_LIST_TICKETS_OUTPUT
  MERGE_EMAILS: HUBSPOT_MERGE_EMAILS_OUTPUT
  MERGE_PRODUCTS: HUBSPOT_MERGE_PRODUCTS_OUTPUT
  MERGE_TICKETS: HUBSPOT_MERGE_TICKETS_OUTPUT
  MERGE_TWO_COMPANIES_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE_OUTPUT
  MERGE_TWO_CONTACTS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE_OUTPUT
  MERGE_TWO_DEALS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE_OUTPUT
  MERGE_TWO_EMAILS_WITH_SAME_TYPE: HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE_OUTPUT
  MERGE_TWO_FEEDBACK_SUBMISSIONS: HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS_OUTPUT
  MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE_OUTPUT
  MERGE_TWO_OBJECTS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE_OUTPUT
  MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE: HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE_OUTPUT
  MERGE_TWO_QUOTES_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE_OUTPUT
  MERGE_TWO_TICKETS_OF_SAME_TYPE: HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE_OUTPUT
  MODIFY_CALLING_EXTENSION_SETTINGS: HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS_OUTPUT
  PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID: HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID_OUTPUT
  PARTIALLY_UPDATE_CRM_OBJECT_BY_ID: HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID_OUTPUT
  PARTIALLY_UPDATE_DEAL_BY_ID: HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID_OUTPUT
  PARTIALLY_UPDATE_PIPELINE_BY_ID: HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID_OUTPUT
  PARTIALLY_UPDATE_PROPERTY_GROUP: HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP_OUTPUT
  PARTIALLY_UPDATE_TICKET_BY_ID: HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID_OUTPUT
  PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID: HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID_OUTPUT
  PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID: HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID_OUTPUT
  PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE_OUTPUT
  PERMANENTLY_DELETE_CONTACT_FOR_GDPR: HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_OUTPUT
  PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE_OUTPUT
  PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE_OUTPUT
  PERMANENTLY_DELETE_CONTACT_VIA_GDPR: HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR_OUTPUT
  PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE: HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE_OUTPUT
  PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT: HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT_OUTPUT
  PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR: HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR_OUTPUT
  PUBLISH_MARKETING_EMAIL: HUBSPOT_PUBLISH_MARKETING_EMAIL_OUTPUT
  PURGE_SCHEMA_BY_OBJECT_TYPE: HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE_OUTPUT
  READ: HUBSPOT_READ_OUTPUT
  READ_ALL_PROPERTIES: HUBSPOT_READ_ALL_PROPERTIES_OUTPUT
  READ_ALL_PROPERTIES_FOR_OBJECT_TYPE: HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE_OUTPUT
  READ_ALL_PROPERTY_GROUPS: HUBSPOT_READ_ALL_PROPERTY_GROUPS_OUTPUT
  READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID: HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID_OUTPUT
  READ_APAGE_OF_OBJECTS_BY_TYPE: HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE_OUTPUT
  READ_A_BATCH_OF_CAMPAIGNS: HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS_OUTPUT
  READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES: HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES_OUTPUT
  READ_A_CAMPAIGN: HUBSPOT_READ_A_CAMPAIGN_OUTPUT
  READ_A_CRM_PROPERTY_BY_NAME: HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME_OUTPUT
  READ_A_PAGE_OF_DEALS: HUBSPOT_READ_A_PAGE_OF_DEALS_OUTPUT
  READ_A_PROPERTY: HUBSPOT_READ_A_PROPERTY_OUTPUT
  READ_A_PROPERTY_GROUP: HUBSPOT_READ_A_PROPERTY_GROUP_OUTPUT
  READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY: HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY_OUTPUT
  READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES: HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES_OUTPUT
  READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES: HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES_OUTPUT
  READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES: HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES_OUTPUT
  READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY: HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY_OUTPUT
  READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES: HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES_OUTPUT
  READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES: HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES_OUTPUT
  READ_BUDGET: HUBSPOT_READ_BUDGET_OUTPUT
  READ_CRM_CONTACT_BY_ID: HUBSPOT_READ_CRM_CONTACT_BY_ID_OUTPUT
  READ_CRM_OBJECT_BY_ID: HUBSPOT_READ_CRM_OBJECT_BY_ID_OUTPUT
  READ_FEEDBACK_SUBMISSION_BY_ID: HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID_OUTPUT
  READ_PRODUCT_BY_ID: HUBSPOT_READ_PRODUCT_BY_ID_OUTPUT
  READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE: HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE_OUTPUT
  RECYCLE_CONTACT_BY_ID: HUBSPOT_RECYCLE_CONTACT_BY_ID_OUTPUT
  REMOVE_ASSET_ASSOCIATION: HUBSPOT_REMOVE_ASSET_ASSOCIATION_OUTPUT
  REMOVE_ASSOCIATION_FROM_SCHEMA: HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA_OUTPUT
  REMOVE_DEAL_OBJECT_BY_ID: HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID_OUTPUT
  REMOVE_TOKEN_FROM_EVENT_TEMPLATE: HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE_OUTPUT
  RENDER_EVENT_DETAIL_TEMPLATE: HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE_OUTPUT
  RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML: HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML_OUTPUT
  REPLACE_ALL_PROPERTIES_OF_PIPELINE: HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE_OUTPUT
  REPLACE_PIPELINE_STAGE_PROPERTIES: HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES_OUTPUT
  RESET_DRAFT: HUBSPOT_RESET_DRAFT_OUTPUT
  RESTORE_A_REVISION_OF_A_MARKETING_EMAIL: HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_OUTPUT
  RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE: HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE_OUTPUT
  RETRIEVE_ALL_OBJECT_SCHEMAS: HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS_OUTPUT
  RETRIEVE_ALL_PIPELINES: HUBSPOT_RETRIEVE_ALL_PIPELINES_OUTPUT
  RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE: HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE_OUTPUT
  RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES: HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES_OUTPUT
  RETRIEVE_CALLING_SETTINGS_FOR_APP: HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP_OUTPUT
  RETRIEVE_COMPANY_OBJECT_BY_ID: HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID_OUTPUT
  RETRIEVE_DEAL_BY_ID: HUBSPOT_RETRIEVE_DEAL_BY_ID_OUTPUT
  RETRIEVE_EXISTING_OBJECT_SCHEMA: HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA_OUTPUT
  RETRIEVE_LINE_ITEMS_LIST: HUBSPOT_RETRIEVE_LINE_ITEMS_LIST_OUTPUT
  RETRIEVE_LINE_ITEM_BY_ID: HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID_OUTPUT
  RETRIEVE_OWNERS: HUBSPOT_RETRIEVE_OWNERS_OUTPUT
  RETRIEVE_OWNER_BY_ID_OR_USER_ID: HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID_OUTPUT
  RETRIEVE_PAGE_OF_COMPANIES: HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES_OUTPUT
  RETRIEVE_PAGE_OF_CRM_OWNERS: HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS_OUTPUT
  RETRIEVE_PIPELINE_STAGES: HUBSPOT_RETRIEVE_PIPELINE_STAGES_OUTPUT
  RETRIEVE_PIPELINE_STAGE_BY_ID: HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID_OUTPUT
  RETRIEVE_TICKET_BY_ID: HUBSPOT_RETRIEVE_TICKET_BY_ID_OUTPUT
  RETRIEVE_TIMELINE_EVENT_BY_IDS: HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS_OUTPUT
  RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID: HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID_OUTPUT
  RETURN_PIPELINE_BY_ID: HUBSPOT_RETURN_PIPELINE_BY_ID_OUTPUT
  SEARCH_CAMPAIGNS: HUBSPOT_SEARCH_CAMPAIGNS_OUTPUT
  SEARCH_COMPANY_OBJECTS: HUBSPOT_SEARCH_COMPANY_OBJECTS_OUTPUT
  SEARCH_CONTACTS_BY_CRITERIA: HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA_OUTPUT
  SEARCH_CRM_EMAIL_OBJECTS: HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS_OUTPUT
  SEARCH_CRM_OBJECTS_BY_CRITERIA: HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA_OUTPUT
  SEARCH_DEALS_BY_CRITERIA: HUBSPOT_SEARCH_DEALS_BY_CRITERIA_OUTPUT
  SEARCH_EMAILS: HUBSPOT_SEARCH_EMAILS_OUTPUT
  SEARCH_FEEDBACK_SUBMISSIONS: HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS_OUTPUT
  SEARCH_LINE_ITEMS_BY_CRITERIA: HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA_OUTPUT
  SEARCH_PRODUCTS: HUBSPOT_SEARCH_PRODUCTS_OUTPUT
  SEARCH_PRODUCTS_BY_CRITERIA: HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA_OUTPUT
  SEARCH_QUOTES_BY_CRITERIA: HUBSPOT_SEARCH_QUOTES_BY_CRITERIA_OUTPUT
  SEARCH_TICKETS: HUBSPOT_SEARCH_TICKETS_OUTPUT
  SEARCH_TICKETS_BY_CRITERIA: HUBSPOT_SEARCH_TICKETS_BY_CRITERIA_OUTPUT
  SECURE_PRODUCT_SEARCH_BY_CRITERIA: HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA_OUTPUT
  SET_CALL_RECORDING_SETTINGS: HUBSPOT_SET_CALL_RECORDING_SETTINGS_OUTPUT
  UPDATE: HUBSPOT_UPDATE_OUTPUT
  UPDATE_A_BATCH_OF_CAMPAIGNS: HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS_OUTPUT
  UPDATE_A_BATCH_OF_CONTACTS: HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS_OUTPUT
  UPDATE_A_BATCH_OF_EMAILS: HUBSPOT_UPDATE_A_BATCH_OF_EMAILS_OUTPUT
  UPDATE_A_BATCH_OF_LINE_ITEMS: HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS_OUTPUT
  UPDATE_A_MARKETING_EMAIL: HUBSPOT_UPDATE_A_MARKETING_EMAIL_OUTPUT
  UPDATE_BATCH_FEEDBACK_SUBMISSIONS: HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS_OUTPUT
  UPDATE_BATCH_OF_COMPANIES: HUBSPOT_UPDATE_BATCH_OF_COMPANIES_OUTPUT
  UPDATE_BATCH_OF_CRMOBJECTS_TICKETS: HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS_OUTPUT
  UPDATE_BATCH_OF_DEALS: HUBSPOT_UPDATE_BATCH_OF_DEALS_OUTPUT
  UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES: HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES_OUTPUT
  UPDATE_BATCH_OF_PRODUCTS: HUBSPOT_UPDATE_BATCH_OF_PRODUCTS_OUTPUT
  UPDATE_CALLING_APP_RECORDING_SETTINGS: HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS_OUTPUT
  UPDATE_CAMPAIGN: HUBSPOT_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_EMAILS: HUBSPOT_UPDATE_EMAILS_OUTPUT
  UPDATE_EXISTING_EVENT_TEMPLATE: HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE_OUTPUT
  UPDATE_EXISTING_OBJECT_SCHEMA: HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA_OUTPUT
  UPDATE_FEEDBACK_SUBMISSION_BY_ID: HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID_OUTPUT
  UPDATE_LINE_ITEM_OBJECT_PARTIALLY: HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY_OUTPUT
  UPDATE_PIPELINE_STAGE_BY_IDS: HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS_OUTPUT
  UPDATE_PRODUCT: HUBSPOT_UPDATE_PRODUCT_OUTPUT
  UPDATE_PRODUCTS: HUBSPOT_UPDATE_PRODUCTS_OUTPUT
  UPDATE_SPECIFIC_CRM_PROPERTY: HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY_OUTPUT
  UPDATE_TICKET: HUBSPOT_UPDATE_TICKET_OUTPUT
  UPDATE_TICKETS: HUBSPOT_UPDATE_TICKETS_OUTPUT
  UPDATE_TOKEN_ON_EVENT_TEMPLATE: HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE_OUTPUT
  UPDATE_VIDEO_CONFERENCE_APP_SETTINGS: HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of HUBSPOT's CONTACT_CREATED_TRIGGER trigger payload.
 */
type HUBSPOT_CONTACT_CREATED_TRIGGER_PAYLOAD = {
  /**
   * Object Id
   * @description The ID of the object.
   */
  objectId?: string;
  /**
   * Subscription Type
   * @description The type of the event subscription.
   */
  subscriptionType?: string;
  /**
   * Subscription Id
   * @description The ID of the subscription.
   */
  subscription_id?: string;
};

/**
 * Type of HUBSPOT's DEAL_STAGE_UPDATED_TRIGGER trigger payload.
 */
type HUBSPOT_DEAL_STAGE_UPDATED_TRIGGER_PAYLOAD = {
  /**
   * Object Id
   * @description The ID of the object.
   */
  objectId?: string;
  /**
   * Subscription Type
   * @description The type of the event subscription.
   */
  subscriptionType?: string;
  /**
   * Subscription Id
   * @description The ID of the subscription.
   */
  subscription_id?: string;
};

/**
 * Map of Composio's HUBSPOT toolkit.
 */
export const HUBSPOT = {
  slug: "hubspot",
  tools: {
    /**
     * Associates an existing asset ('form', 'object list', or 'external web url') with a specified hubspot marketing campaign.
     */
    ADD_ASSET_ASSOCIATION: "HUBSPOT_ADD_ASSET_ASSOCIATION",
    /**
     * Adds a new custom data token to an existing event template for a specified hubspot application, optionally populating a crm object property if objectpropertyname is provided.
     */
    ADD_TOKEN_TO_EVENT_TEMPLATE: "HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE",
    /**
     * Archives the hubspot email specified by `emailid` by moving it to the recycling bin, making it inaccessible unless restored.
     */
    ARCHIVE: "HUBSPOT_ARCHIVE",
    /**
     * Archives multiple hubspot crm emails by id; ids must exist as archiving is irreversible.
     */
    ARCHIVE_A_BATCH_OF_EMAILS_BY_ID: "HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID",
    /**
     * Archives a batch of existing, non-archived quotes by their ids; this action is irreversible and useful for managing outdated or irrelevant quotes.
     */
    ARCHIVE_A_BATCH_OF_QUOTES_BY_ID: "HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID",
    /**
     * Archives a batch of companies by their unique ids; targeted companies must exist, not be previously archived, and this api operation is irreversible.
     */
    ARCHIVE_BATCH_OF_COMPANIES_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID",
    /**
     * Archives a batch of existing contacts by their hubspot crm ids, rendering them inactive; this action is irreversible via the api and requires manual restoration or a separate unarchive endpoint.
     */
    ARCHIVE_BATCH_OF_CONTACTS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID",
    /**
     * Archives a batch of existing deals by their unique hubspot ids, removing them from active views and reports (soft delete); archived deals may be restorable.
     */
    ARCHIVE_BATCH_OF_DEALS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID",
    /**
     * Asynchronously archives a batch of hubspot feedback submissions using their unique ids, which must correspond to valid and existing submissions; the operation is queued, and submissions are moved from active views without being deleted.
     */
    ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID",
    /**
     * Archives a batch of existing line items by their unique ids in hubspot crm; this operation is irreversible via the api.
     */
    ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID",
    /**
     * Archives a batch of existing, non-archived crm objects of a specified `objecttype` by their ids, effectively hiding them from active use.
     */
    ARCHIVE_BATCH_OF_OBJECTS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID",
    /**
     * Archives a batch of properties by their internal names for a specified hubspot crm object type; this operation is idempotent and safe to retry.
     */
    ARCHIVE_BATCH_OF_PROPERTIES: "HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES",
    /**
     * Archives a batch of existing, unarchived hubspot crm tickets by their unique ids.
     */
    ARCHIVE_BATCH_OF_TICKETS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID",
    /**
     * Archives a batch of existing, unarchived hubspot products by their ids; this action is irreversible via the api.
     */
    ARCHIVE_BATCH_PRODUCTS_BY_ID: "HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID",
    /**
     * Archives an existing company in hubspot crm by its `companyid`, moving it to a recycling bin from which it can be restored, rather than permanently deleting it.
     */
    ARCHIVE_COMPANY: "HUBSPOT_ARCHIVE_COMPANY",
    /**
     * Archives a contact in hubspot crm by its id, moving it to the recycling bin; this is generally irreversible via api and removes the contact from active use.
     */
    ARCHIVE_CONTACT_BY_ID: "HUBSPOT_ARCHIVE_CONTACT_BY_ID",
    /**
     * Archives a specific hubspot crm object by its type and id, moving it to the recycling bin; this action is irreversible via the api but objects can often be restored via the hubspot ui.
     */
    ARCHIVE_CRM_OBJECT_BY_ID: "HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID",
    /**
     * Archives multiple hubspot emails by their ids.
     */
    ARCHIVE_EMAILS: "HUBSPOT_ARCHIVE_EMAILS",
    /**
     * Archives an existing, non-archived feedback submission in hubspot crm by its id, moving it to the recycling bin (not permanently deleting it).
     */
    ARCHIVE_FEEDBACK_SUBMISSION: "HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION",
    /**
     * Archives a specific hubspot line item by its id, moving it to a recoverable state.
     */
    ARCHIVE_LINE_ITEM_BY_ID: "HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID",
    /**
     * Archives a hubspot product by its id.
     */
    ARCHIVE_PRODUCT: "HUBSPOT_ARCHIVE_PRODUCT",
    /**
     * Archives multiple hubspot products by their ids.
     */
    ARCHIVE_PRODUCTS: "HUBSPOT_ARCHIVE_PRODUCTS",
    /**
     * Archives an existing product in hubspot crm by its `productid`, moving it to an archived state (irreversible via api) to remove it from active use while retaining its data.
     */
    ARCHIVE_PRODUCT_BY_PRODUCT_ID: "HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID",
    /**
     * Archives a specified crm property by its object type and name, moving it to the recycling bin; note that some default hubspot properties cannot be archived.
     */
    ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME: "HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME",
    /**
     * Archives a hubspot property group, making it inactive and hidden (not permanently deleted, allowing potential restoration) with immediate effect on its crm visibility and usability.
     */
    ARCHIVE_PROPERTY_GROUP: "HUBSPOT_ARCHIVE_PROPERTY_GROUP",
    /**
     * Archives a hubspot quote object by id to the recycling bin; this is api-irreversible and may need manual restoration.
     */
    ARCHIVE_QUOTE_OBJECT_BY_ID: "HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID",
    /**
     * Archives a hubspot ticket by its id.
     */
    ARCHIVE_TICKET: "HUBSPOT_ARCHIVE_TICKET",
    /**
     * Archives multiple hubspot tickets by their ids.
     */
    ARCHIVE_TICKETS: "HUBSPOT_ARCHIVE_TICKETS",
    /**
     * Archives an existing hubspot ticket by its id, moving it to the recycling bin; this is a permanent operation not undoable via the api.
     */
    ARCHIVE_TICKET_BY_ID: "HUBSPOT_ARCHIVE_TICKET_BY_ID",
    /**
     * Retrieves a reverse chronological audit log of all changes for a specific, existing hubspot crm pipeline, which is identified by its `pipelineid` and a valid `objecttype` that supports pipelines (e.g., 'deals', 'tickets').
     */
    AUDIT_PIPELINE_CHANGES_BY_ID: "HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID",
    /**
     * Batch-retrieves hubspot company records by their ids, allowing custom id properties, specific properties to fetch, and historical data.
     */
    BATCH_READ_COMPANIES_BY_PROPERTIES: "HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES",
    /**
     * Retrieves a batch of hubspot email objects by their internal ids or values of a specified unique property, allowing targeted property selection, including historical data.
     */
    BATCH_READ_EMAILS_ACTION: "HUBSPOT_BATCH_READ_EMAILS_ACTION",
    /**
     * Updates multiple existing hubspot quotes in a batch; each quote is identified by its object id or a custom unique property (via `idproperty`), and only writable properties are modified.
     */
    BATCH_UPDATE_QUOTES: "HUBSPOT_BATCH_UPDATE_QUOTES",
    /**
     * Searches for and retrieves a paginated list of hubspot marketing campaigns.
     */
    CAMPAIGN_SEARCH: "HUBSPOT_CAMPAIGN_SEARCH",
    /**
     * Cancels an active hubspot data import job using its `importid`; this action is irreversible, and any data already processed will remain.
     */
    CANCEL_ACTIVE_IMPORT: "HUBSPOT_CANCEL_ACTIVE_IMPORT",
    /**
     * Duplicates an existing hubspot marketing email, identified by its `id`, into a new draft; an optional `clonename` can be assigned to this new email copy.
     */
    CLONE_MARKETING_EMAIL: "HUBSPOT_CLONE_MARKETING_EMAIL",
    /**
     * Configures or updates settings for a hubspot app's calling extension, including its name, ui url, iframe dimensions, `isready` status, and `supportscustomobjects` flag, for the specified `appid`.
     */
    CONFIGURE_CALLING_EXTENSION_SETTINGS: "HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS",
    /**
     * Creates a new email engagement record in hubspot, requiring portal-specific `properties` (e.g., `hs timestamp` as a utc millisecond timestamp), and that association `to id`s and `associationtypeid`s are valid and existing.
     */
    CREATE: "HUBSPOT_CREATE",
    /**
     * Creates a new a/b test variation for an existing hubspot email, using its `contentid`; this action only creates the variation, it does not start the a/b test or send emails.
     */
    CREATE_AB_TEST_VARIATION: "HUBSPOT_CREATE_AB_TEST_VARIATION",
    /**
     * Creates a new, empty property group for a specified crm object type in hubspot, requiring a unique group name for that object type; properties must be added separately.
     */
    CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP: "HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP",
    /**
     * Creates the *definition* (schema) of a new association in hubspot, specifying how two crm object types relate (not an actual link between records); any provided `name` must be unique for the `fromobjecttypeid` and `toobjecttypeid` pair.
     */
    CREATE_ASSOCIATION_FOR_OBJECT_TYPE: "HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE",
    /**
     * Creates up to 50 marketing campaigns in a single batch operation.
     */
    CREATE_A_BATCH_OF_CAMPAIGNS: "HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS",
    /**
     * Creates multiple company records in hubspot crm in a single batch operation, processing up to 100 companies per request.
     */
    CREATE_A_BATCH_OF_COMPANIES: "HUBSPOT_CREATE_A_BATCH_OF_COMPANIES",
    /**
     * Deprecated: use the `create batch of contacts` action instead. creates multiple hubspot contact records.
     */
    CREATE_A_BATCH_OF_CONTACTS: "HUBSPOT_CREATE_A_BATCH_OF_CONTACTS",
    /**
     * Creates multiple email objects for record-keeping (does not send emails) within hubspot crm in a single batch, allowing properties and associations to other crm objects to be set for each email.
     */
    CREATE_A_BATCH_OF_EMAILS: "HUBSPOT_CREATE_A_BATCH_OF_EMAILS",
    /**
     * Creates a new marketing campaign in hubspot with the specified properties, returning the created campaign data including its `campaignguid`.
     */
    CREATE_A_CAMPAIGN: "HUBSPOT_CREATE_A_CAMPAIGN",
    /**
     * Creates a new marketing email in hubspot, allowing comprehensive configuration of content, recipients, sender details, a/b testing, scheduling, web version, and other settings; the internal `name` for the email is required.
     */
    CREATE_A_NEW_MARKETING_EMAIL: "HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL",
    /**
     * Creates up to 100 new contact records in hubspot crm, optionally associating them with existing crm objects; ensure associated object ids are valid.
     */
    CREATE_BATCH_OF_CONTACTS: "HUBSPOT_CREATE_BATCH_OF_CONTACTS",
    /**
     * Creates multiple deals in hubspot crm; ensure any associated object ids, deal stages, and pipeline ids specified are valid and exist within the hubspot account.
     */
    CREATE_BATCH_OF_DEALS: "HUBSPOT_CREATE_BATCH_OF_DEALS",
    /**
     * Creates a batch of feedback submissions in hubspot, ideal for bulk imports; all property names, `associationtypeid`s, and association `to id`s must reference existing entities in hubspot.
     */
    CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS: "HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS",
    /**
     * Creates multiple hubspot line items in a batch, each with specified properties and associations to other existing crm objects.
     */
    CREATE_BATCH_OF_LINE_ITEMS: "HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS",
    /**
     * Creates multiple crm objects of a specified `objecttype` (e.g., contacts, companies, deals) in a single batch operation, where each object can have its own set of properties and associations.
     */
    CREATE_BATCH_OF_OBJECTS: "HUBSPOT_CREATE_BATCH_OF_OBJECTS",
    /**
     * Efficiently creates multiple crm properties in a single batch for a specified hubspot object type (e.g., 'contacts', 'companies', custom object id), ideal for schema setup or updates.
     */
    CREATE_BATCH_OF_PROPERTIES: "HUBSPOT_CREATE_BATCH_OF_PROPERTIES",
    /**
     * Creates multiple hubspot crm quotes in a batch, ideal for bulk operations; provide meaningful quote details in `inputs` as property requirements can vary, and inspect response for individual quote statuses as partial success is possible.
     */
    CREATE_BATCH_OF_QUOTES: "HUBSPOT_CREATE_BATCH_OF_QUOTES",
    /**
     * Creates multiple hubspot tickets in a batch, each with its own properties and associations; `inputs` list must not be empty, each item needs `properties`, and associations/custom properties must be validly defined using internal names for custom fields and iso 8601 for dates.
     */
    CREATE_BATCH_OF_TICKET: "HUBSPOT_CREATE_BATCH_OF_TICKET",
    /**
     * Creates a new hubspot campaign.
     */
    CREATE_CAMPAIGN: "HUBSPOT_CREATE_CAMPAIGN",
    /**
     * Creates multiple hubspot campaigns in a single batch operation.
     */
    CREATE_CAMPAIGNS: "HUBSPOT_CREATE_CAMPAIGNS",
    /**
     * Creates a new hubspot company.
     */
    CREATE_COMPANY: "HUBSPOT_CREATE_COMPANY",
    /**
     * Creates a new company object in hubspot crm with specified properties and associations, returning the new company object.
     */
    CREATE_COMPANY_OBJECT: "HUBSPOT_CREATE_COMPANY_OBJECT",
    /**
     * Creates a new hubspot contact.
     */
    CREATE_CONTACT: "HUBSPOT_CREATE_CONTACT",
    /**
     * Creates a new hubspot contact with specified properties and optional associations; requires at least one identifiable property (e.g., email) and valid `to  id` for any associations.
     */
    CREATE_CONTACT_OBJECT_WITH_PROPERTIES: "HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES",
    /**
     * Creates a new hubspot crm object (e.g., contact, company, custom object) with specified `properties` (using valid internal names) and `associations` (to existing objects via valid type ids).
     */
    CREATE_CRM_OBJECT_WITH_PROPERTIES: "HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES",
    /**
     * Creates a new hubspot deal.
     */
    CREATE_DEAL: "HUBSPOT_CREATE_DEAL",
    /**
     * Creates a new hubspot email.
     */
    CREATE_EMAIL: "HUBSPOT_CREATE_EMAIL",
    /**
     * Creates multiple hubspot emails in a single batch operation.
     */
    CREATE_EMAILS: "HUBSPOT_CREATE_EMAILS",
    /**
     * Creates a new event template for a hubspot app, defining structure, custom properties (tokens), and appearance (markdown with handlebars) of custom timeline events for crm objects; this template must exist before logging corresponding events.
     */
    CREATE_EVENT_TEMPLATE_FOR_APP: "HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP",
    /**
     * Creates a new hubspot feedback submission to record customer feedback (e.g., survey responses, support interactions), optionally associating it with crm objects.
     */
    CREATE_FEEDBACK_SUBMISSION: "HUBSPOT_CREATE_FEEDBACK_SUBMISSION",
    /**
     * Creates a new hubspot line item.
     */
    CREATE_LINE_ITEM: "HUBSPOT_CREATE_LINE_ITEM",
    /**
     * Creates multiple hubspot line items in a single batch operation.
     */
    CREATE_LINE_ITEMS: "HUBSPOT_CREATE_LINE_ITEMS",
    /**
     * Creates a new hubspot line item, where `properties` must contain all keys required by the specific hubspot instance, `associations` items must link to existing crm objects via `to id`, and an empty `associations` list is permissible if the api supports unassociated line items.
     */
    CREATE_LINE_ITEM_OBJECT: "HUBSPOT_CREATE_LINE_ITEM_OBJECT",
    /**
     * Creates multiple immutable timeline events in a batch, ideal for bulk data imports or real-time synchronizations, using a valid event template; may update crm properties if the template is so configured.
     */
    CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH: "HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH",
    /**
     * Creates a new deal in hubspot crm with specified properties and associations; ensure `pipeline`, `dealstage`, and any `associations.to id` are valid existing ids, and providing `dealname` is highly recommended.
     */
    CREATE_NEW_DEAL_OBJECT: "HUBSPOT_CREATE_NEW_DEAL_OBJECT",
    /**
     * Creates a new custom object schema in hubspot crm with unique naming for schema and properties, defined display/required/searchable properties within the 'properties' list, provided immutable labels, and correctly configured 'enumeration' type properties (options/referencedobjecttype).
     */
    CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES: "HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES",
    /**
     * Creates or updates the draft version of a marketing email identified by `emailid`; if no draft exists, a new one is created from the current live version to prepare changes or a/b tests before publishing.
     */
    CREATE_OR_UPDATE_DRAFT_VERSION: "HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION",
    /**
     * Creates a new hubspot pipeline for a specified crm `objecttype` (e.g., 'deals', 'tickets'), requiring the pipeline `label` be unique for that `objecttype` and each stage `label` be unique within the pipeline.
     */
    CREATE_PIPELINE_FOR_OBJECT_TYPE: "HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE",
    /**
     * Creates a new stage in a specified hubspot crm pipeline for a given object type, such as 'deals' or 'tickets'.
     */
    CREATE_PIPELINE_STAGE: "HUBSPOT_CREATE_PIPELINE_STAGE",
    /**
     * Creates a new hubspot product.
     */
    CREATE_PRODUCT: "HUBSPOT_CREATE_PRODUCT",
    /**
     * Creates multiple hubspot products in a single batch operation.
     */
    CREATE_PRODUCTS: "HUBSPOT_CREATE_PRODUCTS",
    /**
     * Creates multiple products in hubspot crm in a batch, allowing unique properties and associations per product; ensure `associationcategory` and `associationtypeid` are valid, and `to  id` refers to an existing crm object id when specifying associations.
     */
    CREATE_PRODUCT_BATCH: "HUBSPOT_CREATE_PRODUCT_BATCH",
    /**
     * Creates a new product in hubspot with specified properties and optional associations; ensure `hs sku` is unique if provided, custom properties are pre-defined in hubspot, and any association `to id` and `associationtypeid` are valid.
     */
    CREATE_PRODUCT_OBJECT: "HUBSPOT_CREATE_PRODUCT_OBJECT",
    /**
     * Creates a new custom property for a specified hubspot crm object type; ensure `groupname` refers to an existing property group for the `objecttype`.
     */
    CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE: "HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE",
    /**
     * Creates a new quote object in hubspot crm with specified properties and associations.
     */
    CREATE_QUOTE_OBJECT: "HUBSPOT_CREATE_QUOTE_OBJECT",
    /**
     * Creates a new hubspot ticket.
     */
    CREATE_TICKET: "HUBSPOT_CREATE_TICKET",
    /**
     * Creates multiple hubspot tickets in a batch, each with its own properties and associations; `inputs` list must not be empty, each item needs `properties`, and associations/custom properties must be validly defined using internal names for custom fields and iso 8601 for dates.
     */
    CREATE_TICKETS: "HUBSPOT_CREATE_TICKETS",
    /**
     * Creates a new ticket in hubspot with specified properties and associations; ensure custom property names, associated object ids (`to`), pipeline ids (`hs pipeline`), and stage ids (`hs pipeline stage`) are valid in your hubspot instance.
     */
    CREATE_TICKET_OBJECT: "HUBSPOT_CREATE_TICKET_OBJECT",
    /**
     * Creates an immutable custom timeline event on a crm object's record using a specified, existing event template (identified by `eventtemplateid`), optionally updating crm object properties if defined in the template; requires `email`, `utk`, or `objectid` for association.
     */
    CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE: "HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE",
    /**
     * Creates a new hubspot workflow to automate processes; ensure `enrollmentcriteria` and `actions` use properties relevant to the specified `objecttypeid`.
     */
    CREATE_WORKFLOW: "HUBSPOT_CREATE_WORKFLOW",
    /**
     * Deprecated: use 'list contacts page' to retrieve a paginated list of hubspot contacts.
     */
    CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL: "HUBSPOT_CUSTOMIZABLE_CONTACTS_PAGE_RETRIEVAL",
    /**
     * Archives a batch of up to 50 marketing campaigns, hiding them from active views rather than permanently deleting them.
     */
    DELETE_A_BATCH_OF_CAMPAIGNS: "HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS",
    /**
     * Deletes an existing marketing email, either permanently (default) or by archiving if `archived` is `true`.
     */
    DELETE_A_MARKETING_EMAIL: "HUBSPOT_DELETE_A_MARKETING_EMAIL",
    /**
     * Permanently deletes the settings for a calling extension app, specified by its `appid`, rendering it unusable for all connected hubspot accounts; this operation is irreversible.
     */
    DELETE_CALLING_EXTENSION_SETTINGS: "HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS",
    /**
     * Permanently deletes a marketing campaign from hubspot using its `campaignguid`; returns a 204 no content status even if the campaign does not exist.
     */
    DELETE_CAMPAIGN: "HUBSPOT_DELETE_CAMPAIGN",
    /**
     * Irreversibly deletes a hubspot contact for gdpr compliance (identified via `objectid` and `idproperty`); an email `objectid` for a non-existent contact may be blocklisted.
     */
    DELETE_CONTACT_FOR_GDPR_COMPLIANCE: "HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE",
    /**
     * Permanently deletes a hubspot pipeline and all its stages by `pipelineid` and `objecttype`; this is irreversible, so use validation flags to avoid errors if the pipeline is not empty.
     */
    DELETE_PIPELINE_BY_ID: "HUBSPOT_DELETE_PIPELINE_BY_ID",
    /**
     * Permanently deletes a specific pipeline stage for an `objecttype` (e.g., 'deals', 'tickets') that supports pipelines; this operation is irreversible, so ensure no active crm records are associated with the stage to prevent data issues.
     */
    DELETE_PIPELINE_STAGE_BY_ID: "HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID",
    /**
     * Permanently deletes a hubspot custom object schema, specified by its `objecttype`, after all associated crm records have been deleted.
     */
    DELETE_SCHEMA_BY_OBJECT_TYPE: "HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE",
    /**
     * Permanently and irreversibly deletes a specific timeline event template, identified by its `eventtemplateid`, from the application `appid`.
     */
    DELETE_TIMELINE_EVENT_TEMPLATE: "HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE",
    /**
     * Irreversibly deletes all settings for a video conferencing application identified by its `appid` in hubspot, removing its configuration and preventing it from functioning until reconfigured; existing meetings and historical data are unaffected.
     */
    DELETE_VIDEO_CONFERENCING_APP_SETTINGS: "HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS",
    /**
     * Permanently deletes a hubspot workflow by its id; deleted workflows cannot be restored via the api and the id must exist.
     */
    DELETE_WORKFLOW: "HUBSPOT_DELETE_WORKFLOW",
    /**
     * Deprecated: use `read crm contact by id` instead. retrieves a hubspot crm contact by its unique internal hubspot id, allowing selection of properties, historical values, associated objects, and filtering for archived contacts.
     */
    FETCH_CONTACT_DETAILS_BY_ID: "HUBSPOT_FETCH_CONTACT_DETAILS_BY_ID",
    /**
     * Fetches hubspot contact ids for a specified `campaignguid` (must be a valid uuid of an existing campaign) and `contacttype`, supporting date filtering and pagination.
     */
    FETCH_CONTACT_IDS: "HUBSPOT_FETCH_CONTACT_IDS",
    /**
     * Fetches a paginated list of read-only error details for a specific hubspot crm import, requiring a valid `importid` for a processed import.
     */
    FETCH_IMPORT_ERROR_DETAILS: "HUBSPOT_FETCH_IMPORT_ERROR_DETAILS",
    /**
     * Deprecated: use the 'retrieve line item by id' action instead.
     */
    FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY: "HUBSPOT_FETCH_OBJECT_DETAILS_BY_ID_OR_PROPERTY",
    /**
     * Fetches call recording settings for a specified, existing hubspot calling extension app.
     */
    FETCH_RECORDING_SETTINGS_BY_APP_ID: "HUBSPOT_FETCH_RECORDING_SETTINGS_BY_APP_ID",
    /**
     * Fetches a revenue attribution report for a specified, existing marketing campaign, optionally using a specific attribution model and date range; if both start and end dates are given, `enddate` must not be earlier than `startdate`.
     */
    FETCH_REVENUE: "HUBSPOT_FETCH_REVENUE",
    /**
     * Permanently deletes a contact and associated content for gdpr compliance; an email used for identification via `idproperty`='email' that is not found will be irreversibly blocklisted.
     */
    GDPR_DELETE: "HUBSPOT_GDPR_DELETE",
    /**
     * Retrieves a list of currently active import jobs in hubspot for monitoring ongoing data operations.
     */
    GET_ACTIVE_IMPORTS_LIST: "HUBSPOT_GET_ACTIVE_IMPORTS_LIST",
    /**
     * Retrieves aggregated statistics for marketing emails, optionally within an iso8601 formatted time range, by email ids, or specific email properties.
     */
    GET_AGGREGATED_STATISTICS: "HUBSPOT_GET_AGGREGATED_STATISTICS",
    /**
     * Retrieves aggregated statistics for marketing emails (e.g., send counts), grouped by specified time intervals within a defined time range.
     */
    GET_AGGREGATED_STATISTIC_INTERVALS: "HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS",
    /**
     * Fetches a list of marketing emails from a hubspot account, with options for filtering, sorting, pagination, and including performance statistics.
     */
    GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT: "HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUB_SPOT_ACCOUNT",
    /**
     * Retrieves a list of workflow summaries (id, name, type, status) from hubspot, using the 'limit' parameter for pagination.
     */
    GET_ALL_WORKFLOWS: "HUBSPOT_GET_ALL_WORKFLOWS",
    /**
     * Retrieves a paginated list of crm owners from hubspot, optionally filtering by email or archived status. <<deprecated: use 'retrieve page of crm owners' instead.>>
     */
    GET_A_PAGE_OF_OWNERS: "HUBSPOT_GET_A_PAGE_OF_OWNERS",
    /**
     * Retrieves a specific, previously saved revision of a marketing email using its unique email id and revision id.
     */
    GET_A_REVISION_OF_A_MARKETING_EMAIL: "HUBSPOT_GET_A_REVISION_OF_A_MARKETING_EMAIL",
    /**
     * Retrieves a hubspot campaign by its id.
     */
    GET_CAMPAIGN: "HUBSPOT_GET_CAMPAIGN",
    /**
     * Retrieves multiple hubspot campaigns.
     */
    GET_CAMPAIGNS: "HUBSPOT_GET_CAMPAIGNS",
    /**
     * Retrieves key attribution metrics for an existing marketing campaign, identified by its `campaignguid`, within an optional date range.
     */
    GET_CAMPAIGN_METRICS: "HUBSPOT_GET_CAMPAIGN_METRICS",
    /**
     * Retrieves the draft version of a marketing email by its `emailid`; if no draft exists, returns the published version.
     */
    GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL: "HUBSPOT_GET_DRAFT_VERSION_OF_A_MARKETING_EMAIL",
    /**
     * Retrieves multiple hubspot emails by their ids.
     */
    GET_EMAILS: "HUBSPOT_GET_EMAILS",
    /**
     * Retrieves a comprehensive summary of a specific hubspot crm import record by its `importid`, including status, progress, updates, results, and errors; useful for monitoring and troubleshooting data imports.
     */
    GET_IMPORT_RECORD_INFORMATION: "HUBSPOT_GET_IMPORT_RECORD_INFORMATION",
    /**
     * Fetches a list of marketing emails from hubspot, supporting filtering by creation/update timestamps, pagination, and sorting.
     */
    GET_MARKETING_EMAILS: "HUBSPOT_GET_MARKETING_EMAILS",
    /**
     * Retrieves a reverse chronological list of all mutations (changes) for a specific pipeline stage; the associated pipeline id is inferred from the api path and is not a direct input.
     */
    GET_PIPELINE_STAGE_AUDIT: "HUBSPOT_GET_PIPELINE_STAGE_AUDIT",
    /**
     * Retrieves a hubspot product by its id.
     */
    GET_PRODUCT: "HUBSPOT_GET_PRODUCT",
    /**
     * Retrieves multiple hubspot products by their ids.
     */
    GET_PRODUCTS: "HUBSPOT_GET_PRODUCTS",
    /**
     * Retrieves a specific hubspot quote by its unique identifier.
     */
    GET_QUOTE_BY_ID: "HUBSPOT_GET_QUOTE_BY_ID",
    /**
     * Retrieves a paginated list of all historical versions (including full state like content, settings, metadata) for a specified, existing marketing email; revision id -1 identifies the current version.
     */
    GET_REVISIONS_OF_A_MARKETING_EMAIL: "HUBSPOT_GET_REVISIONS_OF_A_MARKETING_EMAIL",
    /**
     * Retrieves detailed information about a specific event template for a given application in hubspot's crm timeline.
     */
    GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP: "HUBSPOT_GET_SPECIFIC_EVENT_TEMPLATE_FOR_APP",
    /**
     * Retrieves detailed information for a specific marketing email in hubspot using its unique email id, optionally including performance statistics and specific properties.
     */
    GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL: "HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL",
    /**
     * Retrieves the alternate variation of a specified a/b marketing email; the `emailid` must identify an email currently in an a/b test.
     */
    GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL: "HUBSPOT_GET_THE_VARIATION_OF_A_AN_AB_MARKETING_EMAIL",
    /**
     * Retrieves a hubspot ticket by its id.
     */
    GET_TICKET: "HUBSPOT_GET_TICKET",
    /**
     * Retrieves multiple hubspot tickets by their ids.
     */
    GET_TICKETS: "HUBSPOT_GET_TICKETS",
    /**
     * Retrieves comprehensive details for an existing hubspot workflow by its unique id; unsupported actions are designated 'unsupported action' in the response.
     */
    GET_WORKFLOW_BY_ID: "HUBSPOT_GET_WORKFLOW_BY_ID",
    /**
     * Retrieves email campaigns associated with a specific hubspot workflow id.
     */
    GET_WORKFLOW_EMAIL_CAMPAIGNS: "HUBSPOT_GET_WORKFLOW_EMAIL_CAMPAIGNS",
    /**
     * Archives multiple hubspot companies by their ids.
     */
    HUBSPOT_ARCHIVE_COMPANIES: "HUBSPOT_HUBSPOT_ARCHIVE_COMPANIES",
    /**
     * Archives a hubspot contact by its id.
     */
    HUBSPOT_ARCHIVE_CONTACT: "HUBSPOT_HUBSPOT_ARCHIVE_CONTACT",
    /**
     * Archives multiple hubspot contacts by their ids.
     */
    HUBSPOT_ARCHIVE_CONTACTS: "HUBSPOT_HUBSPOT_ARCHIVE_CONTACTS",
    /**
     * Archives multiple hubspot deals by their ids.
     */
    HUBSPOT_ARCHIVE_DEALS: "HUBSPOT_HUBSPOT_ARCHIVE_DEALS",
    /**
     * Creates multiple new hubspot companies in a single batch operation.
     */
    HUBSPOT_CREATE_COMPANIES: "HUBSPOT_HUBSPOT_CREATE_COMPANIES",
    /**
     * Creates multiple new hubspot contacts in a single batch operation.
     */
    HUBSPOT_CREATE_CONTACTS: "HUBSPOT_HUBSPOT_CREATE_CONTACTS",
    /**
     * Creates multiple deals in hubspot crm; ensure any associated object ids, deal stages, and pipeline ids specified are valid and exist within the hubspot account.
     */
    HUBSPOT_CREATE_DEALS: "HUBSPOT_HUBSPOT_CREATE_DEALS",
    /**
     * Retrieves a hubspot company by its id.
     */
    HUBSPOT_GET_COMPANY: "HUBSPOT_HUBSPOT_GET_COMPANY",
    /**
     * Gets hubspot contact ids for a specified campaign and contact interaction type.
     */
    HUBSPOT_GET_CONTACT_IDS: "HUBSPOT_HUBSPOT_GET_CONTACT_IDS",
    /**
     * Retrieves a hubspot deal by its id.
     */
    HUBSPOT_GET_DEAL: "HUBSPOT_HUBSPOT_GET_DEAL",
    /**
     * Retrieves multiple hubspot deals by their ids.
     */
    HUBSPOT_GET_DEALS: "HUBSPOT_HUBSPOT_GET_DEALS",
    /**
     * Retrieves a paginated list of products from hubspot crm, optionally including specific properties, their history, associated object ids, and filtering by archived status.
     */
    HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING: "HUBSPOT_HUBSPOT_HUBSPOT_LIST_PRODUCTS_WITH_PAGING",
    /**
     * Retrieves a paginated list of hubspot companies.
     */
    HUBSPOT_LIST_COMPANIES: "HUBSPOT_HUBSPOT_LIST_COMPANIES",
    /**
     * Retrieves a paginated list of hubspot contacts.
     */
    HUBSPOT_LIST_CONTACTS: "HUBSPOT_HUBSPOT_LIST_CONTACTS",
    /**
     * Retrieves a paginated list of hubspot deals.
     */
    HUBSPOT_LIST_DEALS: "HUBSPOT_HUBSPOT_LIST_DEALS",
    /**
     * Merges two hubspot contacts into one.
     */
    HUBSPOT_MERGE_CONTACTS: "HUBSPOT_HUBSPOT_MERGE_CONTACTS",
    /**
     * Merges two hubspot deals into one.
     */
    HUBSPOT_MERGE_DEALS: "HUBSPOT_HUBSPOT_MERGE_DEALS",
    /**
     * Retrieves a hubspot contact by its id.
     */
    HUBSPOT_READ_CONTACT: "HUBSPOT_HUBSPOT_READ_CONTACT",
    /**
     * Reads multiple hubspot contacts by their ids.
     */
    HUBSPOT_READ_CONTACTS: "HUBSPOT_HUBSPOT_READ_CONTACTS",
    /**
     * Removes a hubspot deal by its id.
     */
    HUBSPOT_REMOVE_DEAL: "HUBSPOT_HUBSPOT_REMOVE_DEAL",
    /**
     * Searches for hubspot companies using flexible criteria and filters.
     */
    HUBSPOT_SEARCH_COMPANIES: "HUBSPOT_HUBSPOT_SEARCH_COMPANIES",
    /**
     * Searches for hubspot deals using flexible criteria and filters.
     */
    HUBSPOT_SEARCH_DEALS: "HUBSPOT_HUBSPOT_SEARCH_DEALS",
    /**
     * Updates multiple hubspot companies in a single batch operation.
     */
    HUBSPOT_UPDATE_COMPANIES: "HUBSPOT_HUBSPOT_UPDATE_COMPANIES",
    /**
     * Updates properties for an existing hubspot company.
     */
    HUBSPOT_UPDATE_COMPANY: "HUBSPOT_HUBSPOT_UPDATE_COMPANY",
    /**
     * Updates properties for an existing hubspot contact.
     */
    HUBSPOT_UPDATE_CONTACT: "HUBSPOT_HUBSPOT_UPDATE_CONTACT",
    /**
     * Updates multiple hubspot contacts in a single batch operation.
     */
    HUBSPOT_UPDATE_CONTACTS: "HUBSPOT_HUBSPOT_UPDATE_CONTACTS",
    /**
     * Updates properties for an existing hubspot deal.
     */
    HUBSPOT_UPDATE_DEAL: "HUBSPOT_HUBSPOT_UPDATE_DEAL",
    /**
     * Updates multiple hubspot deals in a single batch operation.
     */
    HUBSPOT_UPDATE_DEALS: "HUBSPOT_HUBSPOT_UPDATE_DEALS",
    /**
     * Call this action to start an asynchronous data import into hubspot crm using uploaded files and a detailed `importrequest` json configuration, ensuring this json correctly maps file columns to hubspot properties and files align with these mappings.
     */
    INITIATE_DATA_IMPORT_PROCESS: "HUBSPOT_INITIATE_DATA_IMPORT_PROCESS",
    /**
     * Deprecated: creates a new hubspot crm company object with given properties and associations; use create company object instead.
     */
    INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT: "HUBSPOT_INSTANTIATE_AND_RETURN_NEW_COMPANY_OBJECT",
    /**
     * Retrieves a paginated list of hubspot emails, allowing selection of specific properties (with or without history), associated object ids, and filtering by archive status.
     */
    LIST: "HUBSPOT_LIST",
    /**
     * Retrieves all event templates associated with a valid `appid` for an existing application in hubspot's crm timeline.
     */
    LIST_ALL_EVENT_TEMPLATES_FOR_APP: "HUBSPOT_LIST_ALL_EVENT_TEMPLATES_FOR_APP",
    /**
     * Lists assets of a specific `assettype` for a given hubspot marketing `campaignguid`, optionally including performance metrics for a date range.
     */
    LIST_ASSETS: "HUBSPOT_LIST_ASSETS",
    /**
     * Lists all valid association types between two specified hubspot crm object types.
     */
    LIST_ASSOCIATION_TYPES: "HUBSPOT_LIST_ASSOCIATION_TYPES",
    /**
     * Retrieves a paginated list of hubspot contacts, optionally specifying properties, historical values, and associations; ensure provided property and association names are valid hubspot internal names.
     */
    LIST_CONTACTS_PAGE: "HUBSPOT_LIST_CONTACTS_PAGE",
    /**
     * Retrieves a paginated list of feedback submissions from hubspot, allowing specification of properties (including history), associated object ids, and filtering by archive status.
     */
    LIST_FEEDBACK_SUBMISSIONS_PAGE: "HUBSPOT_LIST_FEEDBACK_SUBMISSIONS_PAGE",
    /**
     * Retrieves a paginated list of tickets from hubspot crm, allowing specification of properties to return, properties with history, associated object types, and archival status; use the `after` token from a previous response to fetch subsequent pages.
     */
    LIST_PAGE_OF_TICKETS: "HUBSPOT_LIST_PAGE_OF_TICKETS",
    /**
     * Retrieves a paginated list of quotes, allowing selection of specific properties, property history, associated object ids, and filtering by archived status.
     */
    LIST_QUOTES_PAGE: "HUBSPOT_LIST_QUOTES_PAGE",
    /**
     * Retrieves a paginated list of hubspot tickets.
     */
    LIST_TICKETS: "HUBSPOT_LIST_TICKETS",
    /**
     * Merges two hubspot emails into one.
     */
    MERGE_EMAILS: "HUBSPOT_MERGE_EMAILS",
    /**
     * Merges two hubspot products into one.
     */
    MERGE_PRODUCTS: "HUBSPOT_MERGE_PRODUCTS",
    /**
     * Merges two hubspot tickets into one.
     */
    MERGE_TICKETS: "HUBSPOT_MERGE_TICKETS",
    /**
     * Merges two existing company records of the same type in hubspot crm, where `objectidtomerge` is absorbed into `primaryobjectid`; this operation is irreversible.
     */
    MERGE_TWO_COMPANIES_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_COMPANIES_OF_SAME_TYPE",
    /**
     * Merges a hubspot contact (`objectidtomerge`) into another contact (`primaryobjectid`), deleting the former and making `primaryobjectid` absorb its data; this irreversible action is used for deduplicating contacts of the same type.
     */
    MERGE_TWO_CONTACTS_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_CONTACTS_OF_SAME_TYPE",
    /**
     * Permanently merges two hubspot crm deals of the same type, typically to eliminate duplicates or consolidate related sales opportunities.
     */
    MERGE_TWO_DEALS_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_DEALS_OF_SAME_TYPE",
    /**
     * Merges two existing, same-type hubspot crm emails: `objectidtomerge` is absorbed into `primaryobjectid` and then deleted; use for de-duplication, this action is irreversible.
     */
    MERGE_TWO_EMAILS_WITH_SAME_TYPE: "HUBSPOT_MERGE_TWO_EMAILS_WITH_SAME_TYPE",
    /**
     * Merges two existing feedback submissions by id, primarily for consolidating duplicates or related feedback; this operation is irreversible, and `primaryobjectid` values take precedence in conflicts.
     */
    MERGE_TWO_FEEDBACK_SUBMISSIONS: "HUBSPOT_MERGE_TWO_FEEDBACK_SUBMISSIONS",
    /**
     * Merges two line items, `objectidtomerge` into `primaryobjectid`, which must be of the same type; `objectidtomerge` is absorbed and the operation is irreversible.
     */
    MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_LINE_ITEMS_OF_SAME_TYPE",
    /**
     * Merges two distinct hubspot crm objects of the same `objecttype`, consolidating data into `primaryobjectid` (which is preserved) and deleting `objectidtomerge`; this operation is permanent and irreversible.
     */
    MERGE_TWO_OBJECTS_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_OBJECTS_OF_SAME_TYPE",
    /**
     * To de-duplicate or combine product variants, merges two existing, same-type hubspot product records by consolidating `objectidtomerge` into `primaryobjectid`; `objectidtomerge` is archived/deleted, and the operation is irreversible.
     */
    MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE: "HUBSPOT_MERGE_TWO_PRODUCTS_OF_THE_SAME_TYPE",
    /**
     * Merges two distinct quotes of the same type by consolidating `objectidtomerge` into `primaryobjectid` (e.g., for combining information or updating terms); this operation is irreversible.
     */
    MERGE_TWO_QUOTES_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_QUOTES_OF_SAME_TYPE",
    /**
     * Merges two existing hubspot tickets of the same type, where `objectidtomerge` (which is then deactivated) is absorbed into `primaryobjectid`.
     */
    MERGE_TWO_TICKETS_OF_SAME_TYPE: "HUBSPOT_MERGE_TWO_TICKETS_OF_SAME_TYPE",
    /**
     * Updates settings (e.g., display name, ui url/dimensions, feature flags) for an existing calling extension app, identified by `appid`.
     */
    MODIFY_CALLING_EXTENSION_SETTINGS: "HUBSPOT_MODIFY_CALLING_EXTENSION_SETTINGS",
    /**
     * Partially updates specified properties for an existing hubspot contact, identified by its valid `contactid`.
     */
    PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID: "HUBSPOT_PARTIALLY_UPDATE_CONTACT_USING_CONTACT_ID",
    /**
     * Partially updates specified properties of a crm object (e.g., contact, company, deal) identified by its type and id, or optionally by a unique property value if `idproperty` is specified.
     */
    PARTIALLY_UPDATE_CRM_OBJECT_BY_ID: "HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID",
    /**
     * Partially updates specified properties of an existing hubspot crm deal, identified by its `dealid` or an optional custom unique `idproperty`.
     */
    PARTIALLY_UPDATE_DEAL_BY_ID: "HUBSPOT_PARTIALLY_UPDATE_DEAL_BY_ID",
    /**
     * Partially updates a crm pipeline's label, display order, or restores an archived pipeline by setting `archived` to `false`.
     */
    PARTIALLY_UPDATE_PIPELINE_BY_ID: "HUBSPOT_PARTIALLY_UPDATE_PIPELINE_BY_ID",
    /**
     * Partially updates a property group's `displayorder` or `label` for a specified crm `objecttype` in hubspot.
     */
    PARTIALLY_UPDATE_PROPERTY_GROUP: "HUBSPOT_PARTIALLY_UPDATE_PROPERTY_GROUP",
    /**
     * Modifies specified properties of an existing hubspot ticket, identified by `ticketid` or a custom `idproperty`; to clear a property, provide an empty string as its value.
     */
    PARTIALLY_UPDATE_TICKET_BY_ID: "HUBSPOT_PARTIALLY_UPDATE_TICKET_BY_ID",
    /**
     * Partially updates specified `properties` of an existing hubspot company, identified by its `companyid` (optionally using `idproperty` as the unique key), ensuring property names are valid hubspot internal names.
     */
    PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID: "HUBSPOT_PARTIAL_UPDATE_COMPANY_OBJECT_BY_ID",
    /**
     * Performs a partial update on an existing hubspot quote's specified properties, identifying the quote by `quoteid` (either its internal id or a custom unique property value if `idproperty` is provided).
     */
    PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID: "HUBSPOT_PARTIAL_UPDATE_QUOTE_BY_QUOTE_ID",
    /**
     * Permanently deletes a company (identified by objectid) and its associated data from hubspot for gdpr compliance; this action is irreversible and requires the company to exist.
     */
    PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE: "HUBSPOT_PERMANENTLY_DELETE_COMPANY_FOR_GDPR_COMPLIANCE",
    /**
     * Irreversibly deletes a hubspot contact for gdpr; if deleting by a non-existent email (using idproperty 'email'), the email is blocklisted instead.
     */
    PERMANENTLY_DELETE_CONTACT_FOR_GDPR: "HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR",
    /**
     * Irreversibly erases a hubspot contact and associated data per a gdpr request; if an email is given for a non-existent contact, it's blocklisted.
     */
    PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE: "HUBSPOT_PERMANENTLY_DELETE_CONTACT_FOR_GDPR_COMPLIANCE",
    /**
     * Permanently and irreversibly deletes a hubspot **quote** (not a contact, despite the action's internal naming) to comply with gdpr's 'right to be forgotten'.
     */
    PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE: "HUBSPOT_PERMANENTLY_DELETE_CONTACT_GDPR_COMPLIANCE",
    /**
     * Permanently deletes a hubspot contact and all its associated data for gdpr compliance, identifying the contact by its id or another unique property.
     */
    PERMANENTLY_DELETE_CONTACT_VIA_GDPR: "HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR",
    /**
     * Permanently deletes a hubspot deal for gdpr compliance, identified by its unique id or a specified property value; this action is irreversible and may blocklist the identifier if the deal isn't found when using `idproperty`.
     */
    PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE: "HUBSPOT_PERMANENTLY_DELETE_DEAL_FOR_GDPR_COMPLIANCE",
    /**
     * Permanently and irreversibly deletes an existing hubspot contact and associated content for gdpr compliance, optionally blocklisting the contact's email.
     */
    PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT: "HUBSPOT_PERMANENTLY_DELETE_GDPR_CONTACT_AND_CONTENT",
    /**
     * Permanently deletes a specified line item and its associated content for gdpr compliance; this action is irreversible and cannot be undone.
     */
    PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR: "HUBSPOT_PERMANENTLY_DELETE_LINE_ITEMS_FOR_GDPR",
    /**
     * Publishes or sends a specified hubspot marketing email that is valid and ready for sending; requires marketing hub enterprise or the transactional email add-on.
     */
    PUBLISH_MARKETING_EMAIL: "HUBSPOT_PUBLISH_MARKETING_EMAIL",
    /**
     * Permanently and irreversibly deletes the schema for an existing `objecttype` in hubspot crm; this deprecated endpoint should be used with extreme caution.
     */
    PURGE_SCHEMA_BY_OBJECT_TYPE: "HUBSPOT_PURGE_SCHEMA_BY_OBJECT_TYPE",
    /**
     * Call this to retrieve an existing hubspot email by its `emailid` or an alternative unique `idproperty`.
     */
    READ: "HUBSPOT_READ",
    /**
     * Deprecated: use `read all properties for object type` instead. retrieves property definitions for a specified hubspot crm object type.
     */
    READ_ALL_PROPERTIES: "HUBSPOT_READ_ALL_PROPERTIES",
    /**
     * Retrieves definitions and metadata (not actual values) for properties of a specified hubspot crm object type (e.g., 'contacts', 'companies', 'deals', or custom objects).
     */
    READ_ALL_PROPERTIES_FOR_OBJECT_TYPE: "HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE",
    /**
     * Retrieves all property groups for a specified hubspot crm object type. <<DEPRECATED use read_property_groups_for_object_type>>
     */
    READ_ALL_PROPERTY_GROUPS: "HUBSPOT_READ_ALL_PROPERTY_GROUPS",
    /**
     * **deprecated:** please use the `retrieve owner by id or user id` action instead. retrieves a specific hubspot crm owner by their id, with options to specify id type (owner or user) and to include archived records.
     */
    READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID: "HUBSPOT_READ_AN_OWNER_BY_GIVEN_ID_OR_USER_ID",
    /**
     * Retrieves a paginated list of objects for a specified and valid hubspot crm object type (e.g., 'contacts', 'companies', 'deals', or custom id).
     */
    READ_APAGE_OF_OBJECTS_BY_TYPE: "HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE",
    /**
     * Retrieves details for a batch of up to 50 marketing campaigns by their ids, optionally including specified properties and asset metrics for a given date range; response order is not guaranteed and duplicate ids are ignored.
     */
    READ_A_BATCH_OF_CAMPAIGNS: "HUBSPOT_READ_A_BATCH_OF_CAMPAIGNS",
    /**
     * Reads definitions (metadata, not values) for a batch of crm object properties for a specified `objecttype`, supporting partial success.
     */
    READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES: "HUBSPOT_READ_A_BATCH_OF_CRM_OBJECT_PROPERTIES",
    /**
     * Retrieves details for a marketing campaign by `campaignguid`, optionally including specified `properties` and asset metrics if both `startdate` and `enddate` are provided.
     */
    READ_A_CAMPAIGN: "HUBSPOT_READ_A_CAMPAIGN",
    /**
     * Reads a specific crm property definition for a given hubspot object type by its internal name.
     */
    READ_A_CRM_PROPERTY_BY_NAME: "HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME",
    /**
     * Retrieves a paginated list of hubspot crm deals; use the 'after' token from a previous response's 'paging.next.after' for subsequent pages.
     */
    READ_A_PAGE_OF_DEALS: "HUBSPOT_READ_A_PAGE_OF_DEALS",
    /**
     * Deprecated: use `read a crm property by name` to read a specific crm property definition for a given hubspot object type by its internal name.
     */
    READ_A_PROPERTY: "HUBSPOT_READ_A_PROPERTY",
    /**
     * Retrieves metadata for a specific property group of a given crm object type, detailing its structure and attributes, but not the actual property values of crm objects.
     */
    READ_A_PROPERTY_GROUP: "HUBSPOT_READ_A_PROPERTY_GROUP",
    /**
     * Retrieves up to 100 feedback submissions in a batch using their ids or a specified unique `idproperty`, optionally including specified properties and their history.
     */
    READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY: "HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY",
    /**
     * Reads a batch of hubspot contacts by their ids or a specified unique `idproperty`, optionally including property history and filtering by archived status; ensure `inputs` refer to existing contacts and `idproperty` (if used) is a unique identifier.
     */
    READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES: "HUBSPOT_READ_BATCH_OF_CONTACTS_BY_ID_OR_PROPERTIES",
    /**
     * Reads a batch of crm objects of a specified `objecttype` using their hubspot ids or unique property values from the `inputs` list, allowing retrieval of specific `properties`, their historical values (`propertieswithhistory`), and filtering by `archived` status.
     */
    READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES: "HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES",
    /**
     * Retrieves a batch of hubspot crm line items by their ids, or optionally by values of a custom unique property defined in `idproperty`.
     */
    READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES: "HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES",
    /**
     * Retrieves a batch of hubspot crm products by their ids or a specified unique `idproperty`, optionally filtering by archived status and including historical changes for specified properties.
     */
    READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY: "HUBSPOT_READ_BATCH_OF_PRODUCTS_BY_ID_OR_PROPERTY",
    /**
     * Efficiently retrieves a batch of hubspot crm quotes by their ids (or a specified unique property), optionally including archived quotes, specific properties, and property history.
     */
    READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES: "HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES",
    /**
     * Retrieves a batch of hubspot crm tickets using a list of their ids, or optionally via a custom unique property specified in `idproperty`, allowing for selection of specific properties, their history, and filtering by archival status.
     */
    READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES: "HUBSPOT_READ_BATCH_OF_TICKETS_BY_ID_OR_UNIQUE_VALUES",
    /**
     * Fetches detailed budget (total, spent, remaining) and spend information for a marketing campaign, including an 'order' field for sequencing budget/spend items (0 is oldest).
     */
    READ_BUDGET: "HUBSPOT_READ_BUDGET",
    /**
     * Retrieves a hubspot crm contact by its unique internal hubspot id, allowing selection of properties, historical values, associated objects, and filtering for archived contacts.
     */
    READ_CRM_CONTACT_BY_ID: "HUBSPOT_READ_CRM_CONTACT_BY_ID",
    /**
     * Retrieves a specific crm object (e.g., contact, company, deal, ticket) by its id or a unique property, optionally including specific properties, history, and associations.
     */
    READ_CRM_OBJECT_BY_ID: "HUBSPOT_READ_CRM_OBJECT_BY_ID",
    /**
     * Reads a hubspot feedback submission by its id, optionally using a custom unique 'idproperty', and allows specifying properties to return including history and associations.
     */
    READ_FEEDBACK_SUBMISSION_BY_ID: "HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID",
    /**
     * Retrieves a hubspot product by its id, allowing customization of returned properties, history, and associations; `idproperty` can specify an alternative unique identifier property which must be configured as unique in hubspot.
     */
    READ_PRODUCT_BY_ID: "HUBSPOT_READ_PRODUCT_BY_ID",
    /**
     * Retrieves all property groups in a single call for a specified hubspot crm object type (e.g., 'contacts', 'companies'), returning only the groups themselves, not the individual properties within them.
     */
    READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE: "HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE",
    /**
     * Deprecated: use the `archive contact by id` action to archive a hubspot crm contact by its id.
     */
    RECYCLE_CONTACT_BY_ID: "HUBSPOT_RECYCLE_CONTACT_BY_ID",
    /**
     * Disassociates an asset (form, object list, or external web url) from a hubspot campaign.
     */
    REMOVE_ASSET_ASSOCIATION: "HUBSPOT_REMOVE_ASSET_ASSOCIATION",
    /**
     * Permanently removes a specified association definition (type) from a hubspot object's schema, preventing future creations of this association type without affecting existing instances.
     */
    REMOVE_ASSOCIATION_FROM_SCHEMA: "HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA",
    /**
     * Archives a hubspot deal by its `dealid`, moving it to the recycling bin when it's no longer relevant, created in error, or needs removal from active view; archived deals won't appear in active lists or reports.
     */
    REMOVE_DEAL_OBJECT_BY_ID: "HUBSPOT_REMOVE_DEAL_OBJECT_BY_ID",
    /**
     * Removes a token from a hubspot event template, preventing its inclusion in new events created from that template.
     */
    REMOVE_TOKEN_FROM_EVENT_TEMPLATE: "HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE",
    /**
     * Renders detailed information for a specific hubspot crm timeline event using a predefined event template, ignoring `extradata` references in the template not present in event data.
     */
    RENDER_EVENT_DETAIL_TEMPLATE: "HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE",
    /**
     * Renders an event's header or detail template as html for a specified event on the hubspot crm timeline, using a given event template id and event id.
     */
    RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML: "HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML",
    /**
     * Overwrites an entire crm pipeline (specified by `objecttype` and `pipelineid`) and all its stages with a new definition, returning the updated pipeline.
     */
    REPLACE_ALL_PROPERTIES_OF_PIPELINE: "HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE",
    /**
     * Replaces all properties of a specified pipeline stage; the new `label` must be unique within the pipeline, and if `objecttype` is 'deals', the `metadata` must include a 'probability' key.
     */
    REPLACE_PIPELINE_STAGE_PROPERTIES: "HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES",
    /**
     * Resets a marketing email's draft to its currently published (live) version, discarding all unpublished changes; the email must have a live version to revert to.
     */
    RESET_DRAFT: "HUBSPOT_RESET_DRAFT",
    /**
     * Restores a specific, existing, non-active revision of a marketing email to become the new live version for that email.
     */
    RESTORE_A_REVISION_OF_A_MARKETING_EMAIL: "HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL",
    /**
     * Restores a specific revision of a marketing email to a draft state, overwriting any existing draft.
     */
    RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE: "HUBSPOT_RESTORE_A_REVISION_OF_A_MARKETING_EMAIL_TO_DRAFT_STATE",
    /**
     * Retrieves all object schema definitions (not data records) for a hubspot account, supporting retrieval of either active or archived schemas.
     */
    RETRIEVE_ALL_OBJECT_SCHEMAS: "HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS",
    /**
     * Deprecated: use `retrieve all pipelines for specified object type` instead. retrieves all pipelines in hubspot for a specified crm object type like deals or tickets.
     */
    RETRIEVE_ALL_PIPELINES: "HUBSPOT_RETRIEVE_ALL_PIPELINES",
    /**
     * Retrieves all pipelines in hubspot for a specified crm object type, such as deals or tickets.
     */
    RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE: "HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE",
    /**
     * Retrieves a batch of hubspot crm deals by their hubspot ids or values of a specified unique `idproperty`; `inputs` must contain at least one entry and `idproperty`, if used, must name a property that uniquely identifies deals.
     */
    RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES: "HUBSPOT_RETRIEVE_BATCH_OF_DEALS_BY_IDS_OR_PROPERTY_VALUES",
    /**
     * Retrieves the read-only calling extension settings for a specific hubspot app; the app must exist and have calling extensions configured.
     */
    RETRIEVE_CALLING_SETTINGS_FOR_APP: "HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP",
    /**
     * Retrieves a specific hubspot company by its id (or an alternative unique property value if `idproperty` is specified), optionally including specific properties, property history, associated object ids, or archived records.
     */
    RETRIEVE_COMPANY_OBJECT_BY_ID: "HUBSPOT_RETRIEVE_COMPANY_OBJECT_BY_ID",
    /**
     * Fetches a hubspot crm deal by its id, optionally including specific properties, their history, and associations; use `idproperty` for retrieval with a custom unique property.
     */
    RETRIEVE_DEAL_BY_ID: "HUBSPOT_RETRIEVE_DEAL_BY_ID",
    /**
     * Fetches the detailed schema definition for a specified, existing standard or custom hubspot crm object type; this action is read-only and does not create or modify schemas.
     */
    RETRIEVE_EXISTING_OBJECT_SCHEMA: "HUBSPOT_RETRIEVE_EXISTING_OBJECT_SCHEMA",
    /**
     * Fetches a paginated list of hubspot crm line items, allowing selection of specific properties (including history), associated object ids, and filtering by archive status; ensure property and association names are valid hubspot internal names.
     */
    RETRIEVE_LINE_ITEMS_LIST: "HUBSPOT_RETRIEVE_LINE_ITEMS_LIST",
    /**
     * Retrieves a hubspot crm line item by its id or a specified unique property (`idproperty`).
     */
    RETRIEVE_LINE_ITEM_BY_ID: "HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID",
    /**
     * Retrieves a list of all owners in the hubspot crm, including their id, first name, last name, email, and user id.
     */
    RETRIEVE_OWNERS: "HUBSPOT_RETRIEVE_OWNERS",
    /**
     * Retrieves a specific hubspot crm owner by their id, with options to specify id type (owner or user) and to include archived records.
     */
    RETRIEVE_OWNER_BY_ID_OR_USER_ID: "HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID",
    /**
     * Retrieves a paginated list of companies from hubspot, using an 'after' cursor from a previous response for subsequent pages.
     */
    RETRIEVE_PAGE_OF_COMPANIES: "HUBSPOT_RETRIEVE_PAGE_OF_COMPANIES",
    /**
     * Retrieves a paginated list of crm owners from hubspot, optionally filtering by email or archived status.
     */
    RETRIEVE_PAGE_OF_CRM_OWNERS: "HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS",
    /**
     * Fetches all stages for a specified hubspot crm object type and pipeline id.
     */
    RETRIEVE_PIPELINE_STAGES: "HUBSPOT_RETRIEVE_PIPELINE_STAGES",
    /**
     * Fetches detailed properties and metadata (e.g., label, display order, custom properties) for a specific stage within a hubspot crm pipeline, identified by its `objecttype`, `pipelineid`, and `stageid`.
     */
    RETRIEVE_PIPELINE_STAGE_BY_ID: "HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID",
    /**
     * Retrieves a hubspot ticket by its `ticketid` or by a unique `idproperty` (if `idproperty` is used, its values must be unique across all tickets), allowing customization of returned properties, property history, associations, and archived status.
     */
    RETRIEVE_TICKET_BY_ID: "HUBSPOT_RETRIEVE_TICKET_BY_ID",
    /**
     * Retrieves a specific hubspot crm timeline event by its `eventtemplateid` (for an existing template) and `eventid` (for an existing event), returning event details which may not include full associated crm object data.
     */
    RETRIEVE_TIMELINE_EVENT_BY_IDS: "HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS",
    /**
     * Retrieves video conference application settings, such as webhook urls and user/account management configurations, for a specified `appid`.
     */
    RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID: "HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID",
    /**
     * Retrieves a specific pipeline by its id and crm object type, detailing its stages and properties.
     */
    RETURN_PIPELINE_BY_ID: "HUBSPOT_RETURN_PIPELINE_BY_ID",
    /**
     * Searches for hubspot campaigns.
     */
    SEARCH_CAMPAIGNS: "HUBSPOT_SEARCH_CAMPAIGNS",
    /**
     * Searches hubspot company objects using a text query, complex filter groups (anded within, ored between), sorting, and specific property selection, including custom properties.
     */
    SEARCH_COMPANY_OBJECTS: "HUBSPOT_SEARCH_COMPANY_OBJECTS",
    /**
     * Searches for hubspot contacts using a text query, specific filter criteria (filters in a group are anded, groups are ored), sorting, and pagination to retrieve selected properties.
     */
    SEARCH_CONTACTS_BY_CRITERIA: "HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA",
    /**
     * Searches crm email objects using full-text queries, complex filtering (filters within a group are or'd, groups are and'd), sorting, pagination, and property selection; ensure `propertyname` in filters is valid and filterable for emails.
     */
    SEARCH_CRM_EMAIL_OBJECTS: "HUBSPOT_SEARCH_CRM_EMAIL_OBJECTS",
    /**
     * Searches hubspot crm objects (e.g., 'contacts', 'companies') by `objecttype` using complex criteria including filters, sorting, and pagination; property names used in filters, sorts, and returned properties must be valid for the specified `objecttype`.
     */
    SEARCH_CRM_OBJECTS_BY_CRITERIA: "HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA",
    /**
     * Searches hubspot deals using complex criteria (text queries, property filters, sorting, pagination) for targeted retrieval beyond simple id lookups; ensure filter operator/value combinations are valid for the target hubspot property.
     */
    SEARCH_DEALS_BY_CRITERIA: "HUBSPOT_SEARCH_DEALS_BY_CRITERIA",
    /**
     * Searches for hubspot emails using flexible criteria and filters.
     */
    SEARCH_EMAILS: "HUBSPOT_SEARCH_EMAILS",
    /**
     * Searches for feedback submissions in hubspot crm using text query, filter groups, sorting, and pagination, returning specified properties.
     */
    SEARCH_FEEDBACK_SUBMISSIONS: "HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS",
    /**
     * Searches hubspot line items using criteria including filters, sorting, and pagination; `after` must be a valid cursor from a previous response, and `sorts`/`properties` must refer to valid line item property names.
     */
    SEARCH_LINE_ITEMS_BY_CRITERIA: "HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA",
    /**
     * Searches for hubspot products using flexible criteria and filters.
     */
    SEARCH_PRODUCTS: "HUBSPOT_SEARCH_PRODUCTS",
    /**
     * Searches hubspot products using text queries, filters, and sorting by sortable properties, with options for pagination and specifying returned properties.
     */
    SEARCH_PRODUCTS_BY_CRITERIA: "HUBSPOT_SEARCH_PRODUCTS_BY_CRITERIA",
    /**
     * Searches hubspot crm quotes using a text query, complex filter criteria, sorting, and pagination.
     */
    SEARCH_QUOTES_BY_CRITERIA: "HUBSPOT_SEARCH_QUOTES_BY_CRITERIA",
    /**
     * Searches for hubspot tickets using flexible criteria and filters.
     */
    SEARCH_TICKETS: "HUBSPOT_SEARCH_TICKETS",
    /**
     * Retrieves hubspot tickets by applying filters on properties, a full-text query, sort preferences, and pagination, allowing selection of specific fields to be returned.
     */
    SEARCH_TICKETS_BY_CRITERIA: "HUBSPOT_SEARCH_TICKETS_BY_CRITERIA",
    /**
     * Deprecated: searches hubspot products by criteria; use `search products by criteria` instead.
     */
    SECURE_PRODUCT_SEARCH_BY_CRITERIA: "HUBSPOT_SECURE_PRODUCT_SEARCH_BY_CRITERIA",
    /**
     * Configures the url (`urltoretrieveauthedrecording`) that hubspot uses to retrieve call recordings for a specified third-party calling app (`appid`), which must be an existing calling extension app integrated with the hubspot account.
     */
    SET_CALL_RECORDING_SETTINGS: "HUBSPOT_SET_CALL_RECORDING_SETTINGS",
    /**
     * Partially updates properties of an existing hubspot email object, identified by `emailid` (as internal id or custom unique property value if `idproperty` is given); the object must exist.
     */
    UPDATE: "HUBSPOT_UPDATE",
    /**
     * Updates properties for up to 50 existing hubspot marketing campaigns in a single batch operation.
     */
    UPDATE_A_BATCH_OF_CAMPAIGNS: "HUBSPOT_UPDATE_A_BATCH_OF_CAMPAIGNS",
    /**
     * Updates specified properties for a batch of up to 100 hubspot contacts, identified by their vids; ensure property values use hubspot internal names and formats (e.g., for enums like 'lifecyclestage').
     */
    UPDATE_A_BATCH_OF_CONTACTS: "HUBSPOT_UPDATE_A_BATCH_OF_CONTACTS",
    /**
     * Updates multiple hubspot email engagement records in a batch, identifying each by its hubspot object `id` (or an alternative unique property via `idproperty`) and setting new string values for specified properties (which must be valid internal email property names).
     */
    UPDATE_A_BATCH_OF_EMAILS: "HUBSPOT_UPDATE_A_BATCH_OF_EMAILS",
    /**
     * Updates a batch of existing hubspot crm line items in a single operation, identifying each by its primary id or a unique `idproperty` (which must be a unique identifier property in hubspot), and modifies their specified properties.
     */
    UPDATE_A_BATCH_OF_LINE_ITEMS: "HUBSPOT_UPDATE_A_BATCH_OF_LINE_ITEMS",
    /**
     * Updates properties of an existing marketing email identified by its `emailid`; unspecified fields retain their current values.
     */
    UPDATE_A_MARKETING_EMAIL: "HUBSPOT_UPDATE_A_MARKETING_EMAIL",
    /**
     * Updates a batch of hubspot feedback submissions; property keys must be existing internal hubspot names and values must be correctly formatted strings.
     */
    UPDATE_BATCH_FEEDBACK_SUBMISSIONS: "HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS",
    /**
     * Updates specified properties for multiple existing hubspot companies in a batch, identifying each company by its hubspot id or by a unique property name in `idproperty` with its value in `id`.
     */
    UPDATE_BATCH_OF_COMPANIES: "HUBSPOT_UPDATE_BATCH_OF_COMPANIES",
    /**
     * Batch updates properties for multiple hubspot crm tickets using a list of inputs, where each input specifies the ticket `id` and the `properties` to modify.
     */
    UPDATE_BATCH_OF_CRMOBJECTS_TICKETS: "HUBSPOT_UPDATE_BATCH_OF_CRMOBJECTS_TICKETS",
    /**
     * Updates properties for multiple existing hubspot crm deals in a batch; ensure property names are the internal hubspot names.
     */
    UPDATE_BATCH_OF_DEALS: "HUBSPOT_UPDATE_BATCH_OF_DEALS",
    /**
     * Performs a batch update on a valid `objecttype` where properties are writeable and any `idproperty` used is designated unique; updates can be partial.
     */
    UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES: "HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES",
    /**
     * Updates multiple hubspot product records in a single batch; all properties to be updated must already exist in hubspot.
     */
    UPDATE_BATCH_OF_PRODUCTS: "HUBSPOT_UPDATE_BATCH_OF_PRODUCTS",
    /**
     * Updates the recording settings, such as the url for retrieving authenticated recordings, for a specific calling extension app identified by its `appid`.
     */
    UPDATE_CALLING_APP_RECORDING_SETTINGS: "HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS",
    /**
     * Partially updates specific, writable properties of an existing hubspot marketing campaign identified by `campaignguid`; an empty string value in `properties` clears a property.
     */
    UPDATE_CAMPAIGN: "HUBSPOT_UPDATE_CAMPAIGN",
    /**
     * Updates multiple hubspot emails in a single batch operation.
     */
    UPDATE_EMAILS: "HUBSPOT_UPDATE_EMAILS",
    /**
     * Updates an existing hubspot event template's name, display templates, and tokens; providing `tokens` replaces the entire existing list, and the `id` in the request body must match `eventtemplateid` in the path.
     */
    UPDATE_EXISTING_EVENT_TEMPLATE: "HUBSPOT_UPDATE_EXISTING_EVENT_TEMPLATE",
    /**
     * Updates an existing custom object schema's metadata in hubspot, such as its description, labels, display properties, required properties, searchable properties, and restorability, for a specified `objecttype` that must already exist.
     */
    UPDATE_EXISTING_OBJECT_SCHEMA: "HUBSPOT_UPDATE_EXISTING_OBJECT_SCHEMA",
    /**
     * Partially updates writable properties of an existing hubspot feedback submission, identified by its `feedbacksubmissionid` (which can be an internal object id, or a unique property value if `idproperty` is specified).
     */
    UPDATE_FEEDBACK_SUBMISSION_BY_ID: "HUBSPOT_UPDATE_FEEDBACK_SUBMISSION_BY_ID",
    /**
     * Partially updates specified properties of an existing hubspot line item, identified by `lineitemid` (as hubspot object id or value of `idproperty` if used); new values overwrite existing ones, and an empty string clears a property.
     */
    UPDATE_LINE_ITEM_OBJECT_PARTIALLY: "HUBSPOT_UPDATE_LINE_ITEM_OBJECT_PARTIALLY",
    /**
     * Partially updates a hubspot crm pipeline stage identified by `objecttype`, `pipelineid`, and `stageid`, requiring `metadata` in the request; unspecified fields are unchanged.
     */
    UPDATE_PIPELINE_STAGE_BY_IDS: "HUBSPOT_UPDATE_PIPELINE_STAGE_BY_IDS",
    /**
     * Updates properties for an existing hubspot product.
     */
    UPDATE_PRODUCT: "HUBSPOT_UPDATE_PRODUCT",
    /**
     * Updates multiple hubspot products in a single batch operation.
     */
    UPDATE_PRODUCTS: "HUBSPOT_UPDATE_PRODUCTS",
    /**
     * Updates attributes of an existing hubspot crm property, identified by its `objecttype` and `propertyname`; only provided fields are modified, and changing a property's `type` can cause data loss if incompatible with existing data.
     */
    UPDATE_SPECIFIC_CRM_PROPERTY: "HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY",
    /**
     * Updates properties for an existing hubspot ticket.
     */
    UPDATE_TICKET: "HUBSPOT_UPDATE_TICKET",
    /**
     * Updates multiple hubspot tickets in a single batch operation.
     */
    UPDATE_TICKETS: "HUBSPOT_UPDATE_TICKETS",
    /**
     * Updates the label or options of an existing token within a specified hubspot crm event template; token name and data type remain unchanged.
     */
    UPDATE_TOKEN_ON_EVENT_TEMPLATE: "HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE",
    /**
     * Updates interaction urls (for creating/updating/deleting meetings, fetching accounts, verifying users) for a video conference application specified by `appid`; the application must exist and all urls must be valid and publicly accessible.
     */
    UPDATE_VIDEO_CONFERENCE_APP_SETTINGS: "HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS",
  },
  triggerTypes: {
    /**
     * Contact Created Trigger
     */
    CONTACT_CREATED_TRIGGER: "HUBSPOT_CONTACT_CREATED_TRIGGER",
    /**
     * Deal Stage UpdatedTrigger
     */
    DEAL_STAGE_UPDATED_TRIGGER: "HUBSPOT_DEAL_STAGE_UPDATED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "HUBSPOT".
 */
export type HUBSPOT_TRIGGER_PAYLOADS = {
  CONTACT_CREATED_TRIGGER: HUBSPOT_CONTACT_CREATED_TRIGGER_PAYLOAD
  DEAL_STAGE_UPDATED_TRIGGER: HUBSPOT_DEAL_STAGE_UPDATED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "HUBSPOT".
 */
export type HUBSPOT_TRIGGER_EVENTS = {
  CONTACT_CREATED_TRIGGER: TriggerEvent<HUBSPOT_CONTACT_CREATED_TRIGGER_PAYLOAD>
  DEAL_STAGE_UPDATED_TRIGGER: TriggerEvent<HUBSPOT_DEAL_STAGE_UPDATED_TRIGGER_PAYLOAD>
}
