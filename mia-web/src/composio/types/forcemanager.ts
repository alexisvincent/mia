// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_ACTIVITY tool input.
 */
type FORCEMANAGER_DELETE_ACTIVITY_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Activity identifier (positive integer)
   */
  id?: number;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_ACTIVITY tool output.
 */
type FORCEMANAGER_DELETE_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Status Message
       * @description Short status message returned by the API for DELETE operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_COMPANY tool input.
 */
type FORCEMANAGER_DELETE_COMPANY_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Company identifier (positive integer)
   */
  id?: number;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_COMPANY tool output.
 */
type FORCEMANAGER_DELETE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Response data from the API
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
  /**
   * Successfull
   * @description Indicates whether the deletion was successful
   */
  successfull?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_CONTACT tool input.
 */
type FORCEMANAGER_DELETE_CONTACT_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Contact identifier (positive integer)
   */
  id?: number;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_CONTACT tool output.
 */
type FORCEMANAGER_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Status Message
       * @description Short status message returned by the API for DELETE operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_SALES_ORDER tool input.
 */
type FORCEMANAGER_DELETE_SALES_ORDER_INPUT = {
  /**
   * Api Version
   * @description Optional ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Sales order identifier to delete
   */
  id?: number;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_SALES_ORDER tool output.
 */
type FORCEMANAGER_DELETE_SALES_ORDER_OUTPUT = {
  /**
   * Data
   * @description Arbitrary payload returned by the API or fallback message
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
  /**
   * Successfull
   * @description Indicates whether the deletion was considered successful
   * @default true
   */
  successfull: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_SALES_ORDER_LINE tool input.
 */
type FORCEMANAGER_DELETE_SALES_ORDER_LINE_INPUT = {
  /**
   * Api Version
   * @description Optional ForceManager API version to use (sent via X-FM-API-Version)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Sales order line identifier to delete
   */
  id?: number;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_SALES_ORDER_LINE tool output.
 */
type FORCEMANAGER_DELETE_SALES_ORDER_LINE_OUTPUT = {
  /**
   * Data
   * @description Arbitrary payload returned by the API or fallback message
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
  /**
   * Successfull
   * @description Indicates whether the deletion was considered successful
   * @default true
   */
  successfull: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_VALUE tool input.
 */
type FORCEMANAGER_DELETE_VALUE_INPUT = {
  /**
   * Api Version
   * @description Optional ForceManager API version to use (sent via X-FM-API-Version)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the master-data value to delete
   */
  id?: number;
  /**
   * Resource Name
   * @description Name of the Z_ master data table containing the value (e.g., Z_Test)
   */
  resourceName?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_VALUE tool output.
 */
type FORCEMANAGER_DELETE_VALUE_OUTPUT = {
  /**
   * Data
   * @description Arbitrary payload returned by the API or fallback message
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
  /**
   * Successfull
   * @description Indicates whether the deletion was considered successful
   * @default true
   */
  successfull: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_VIEW tool input.
 */
type FORCEMANAGER_DELETE_VIEW_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the view to delete. Accepts string or numeric IDs.
   */
  id?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_DELETE_VIEW tool output.
 */
type FORCEMANAGER_DELETE_VIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Status Message
       * @description Short status message returned by the API for DELETE operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_ACTIVITY tool input.
 */
type FORCEMANAGER_GET_ACTIVITY_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the activity to retrieve. String or numeric ID.
   */
  id?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_ACTIVITY tool output.
 */
type FORCEMANAGER_GET_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity
       * @description Activity object returned by the API, or empty dict if not found/non-JSON
       */
      entity: {
          [key: string]: unknown;
      };
      /**
       * Found
       * @description True if an activity was found and parsed, False otherwise
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
 * Type of FORCEMANAGER's FORCEMANAGER_GET_COMPANY tool input.
 */
type FORCEMANAGER_GET_COMPANY_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the company to retrieve. Positive integer or string ID
   */
  id?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_COMPANY tool output.
 */
type FORCEMANAGER_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity
       * @description Company object returned by the API, or empty dict if not found/non-JSON
       */
      entity: {
          [key: string]: unknown;
      };
      /**
       * Found
       * @description True if a company was found and parsed, False otherwise
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
 * Type of FORCEMANAGER's FORCEMANAGER_GET_INTERNAL_ID tool input.
 */
type FORCEMANAGER_GET_INTERNAL_ID_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent as X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * External Id
   * @description External identifier of the entity in your system. Some API examples use 'externalid' (lowercase); this action sends both for compatibility.
   */
  externalId?: string;
  /**
   * Page
   * @description Zero-based page index to request (sent as X-FM-Page header)
   * @default null
   */
  page: number | null;
  /**
   * Type
   * @description Entity type to search. Allowed values: Company, User, Offer, Product, Contact, Activity, Schedule
   */
  type?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_INTERNAL_ID tool output.
 */
type FORCEMANAGER_GET_INTERNAL_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity Count
       * @description Number of records in current page (from header or computed)
       */
      entity_count: number;
      /**
       * Items
       * @description List of objects with ForceManager internal Ids, e.g., [{"Id": "875"}]
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page
       * @description Next page index (from response header X-FM-Next-Page)
       */
      next_page: number;
      /**
       * Prev Page
       * @description Previous page index (from response header X-FM-Prev-Page)
       */
      prev_page: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_PRODUCT tool input.
 */
type FORCEMANAGER_GET_PRODUCT_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the product to retrieve (positive integer)
   */
  id?: number;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_PRODUCT tool output.
 */
type FORCEMANAGER_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity
       * @description Product object returned by the API, or empty dict if not found/non-JSON
       */
      entity: {
          [key: string]: unknown;
      };
      /**
       * Found
       * @description True if a product was found and parsed, False otherwise
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
 * Type of FORCEMANAGER's FORCEMANAGER_GET_SALES_ORDER_LINE tool input.
 */
type FORCEMANAGER_GET_SALES_ORDER_LINE_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the sales order line to retrieve. Positive integer or string ID
   */
  id?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_SALES_ORDER_LINE tool output.
 */
type FORCEMANAGER_GET_SALES_ORDER_LINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity
       * @description Sales order line object returned by the API, or empty dict if not found/non-JSON
       */
      entity: {
          [key: string]: unknown;
      };
      /**
       * Found
       * @description True if a sales order line was found and parsed, False otherwise
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
 * Type of FORCEMANAGER's FORCEMANAGER_GET_USER tool input.
 */
type FORCEMANAGER_GET_USER_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the user to retrieve. Positive integer or string ID
   */
  id?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_USER tool output.
 */
type FORCEMANAGER_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity
       * @description User object returned by the API, or empty dict if not found/non-JSON
       */
      entity: {
          [key: string]: unknown;
      };
      /**
       * Found
       * @description True if a user was found and parsed, False otherwise
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
 * Type of FORCEMANAGER's FORCEMANAGER_GET_VIEW tool input.
 */
type FORCEMANAGER_GET_VIEW_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent via X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Id
   * @description Identifier of the view to retrieve. Positive integer or string ID
   */
  id?: string;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_GET_VIEW tool output.
 */
type FORCEMANAGER_GET_VIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity Count
       * @description Number of entities returned (usually 0 or 1)
       */
      entity_count: number;
      /**
       * Items
       * @description List containing the requested view (0 or 1 item depending on existence)
       */
      items: {
          [key: string]: unknown;
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
 * Type of FORCEMANAGER's FORCEMANAGER_LIST_VIEWS tool input.
 */
type FORCEMANAGER_LIST_VIEWS_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sent as X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Entity
   * @description Important-field LIKE filter to match target entity name
   * @default null
   */
  entity: string | null;
  /**
   * Name
   * @description Important-field LIKE filter to match view name
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Zero-based page index to request (sent as X-FM-Page header)
   * @default null
   */
  page: number | null;
  /**
   * Q
   * @description Advanced search query (SQL-like) applied to views
   * @default null
   */
  q: string | null;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_LIST_VIEWS tool output.
 */
type FORCEMANAGER_LIST_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entity Count
       * @description Number of records in the current page (from response header X-FM-Entity-Count)
       */
      entity_count: number;
      /**
       * Items
       * @description List of view objects as returned by the API
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page
       * @description Next page index (from response header X-FM-Next-Page)
       */
      next_page: number;
      /**
       * Prev Page
       * @description Previous page index (from response header X-FM-Prev-Page)
       */
      prev_page: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_ACTIVITY tool input.
 */
type FORCEMANAGER_UPDATE_ACTIVITY_INPUT = {
  /**
   * Account Id
   * @description Linked account id
   * @default null
   */
  account_id: number | null;
  /**
   * Activity Date Time
   * @description UTC date and time of the activity in ISO 8601 format (YYYY-MM-DDThh:mm:ss)
   * @default null
   */
  activity_date_time: string | null;
  /**
   * Activity Type Id
   * @description Activity type id
   * @default null
   */
  activity_type_id: number | null;
  /**
   * Api Version
   * @description ForceManager API version to use (sent as X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Checkin Type
   * @description If is_checkin=True: Standard Checkin | Opportunity | FastCheckin
   * @default null
   */
  checkin_type: string | null;
  /**
   * Checkout Date Time
   * @description Checkout date-time for check-out activities (ISO 8601 UTC)
   * @default null
   */
  checkout_date_time: string | null;
  /**
   * Comment
   * @description Comments for the activity
   * @default null
   */
  comment: string | null;
  /**
   * Contact Id
   * @description Linked contact id
   * @default null
   */
  contact_id: number | null;
  /**
   * Ext Id
   * @description External id from third-party system
   * @default null
   */
  ext_id: string | null;
  /**
   * Geocode Accuracy
   * @description Geocode accuracy
   * @default null
   */
  geocode_accuracy: number | null;
  /**
   * Geocode Latitude
   * @description Latitude for check-ins
   * @default null
   */
  geocode_latitude: number | null;
  /**
   * Geocode Longitude
   * @description Longitude for check-ins
   * @default null
   */
  geocode_longitude: number | null;
  /**
   * Geocoded
   * @description Calculated if geocode exists (read-only, discourage sending)
   * @default null
   */
  geocoded: boolean | null;
  /**
   * Id
   * @description Activity identifier (positive integer)
   */
  id?: number;
  /**
   * Is Checkin
   * @description Whether this is a check-in (boolean, sent as 'True'/'False' per FM API)
   * @default null
   */
  is_checkin: boolean | null;
  /**
   * Opportunity Id
   * @description Linked opportunity id
   * @default null
   */
  opportunity_id: number | null;
  /**
   * Permission Level
   * @description Permission level (1–5)
   * @default null
   */
  permission_level: number | null;
  /**
   * Sales Rep Id
   * @description Sales rep ID (may be read-only)
   * @default null
   */
  sales_rep_id: number | null;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_ACTIVITY tool output.
 */
type FORCEMANAGER_UPDATE_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Message
       * @description Short status message returned by the API for PUT operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_COMPANY tool input.
 */
type FORCEMANAGER_UPDATE_COMPANY_INPUT = {
  /**
   * Account Status Id
   * @description Account status ID
   * @default null
   */
  account_status_id: string | null;
  /**
   * Account Type Id
   * @description Account type ID
   * @default null
   */
  account_type_id: string | null;
  /**
   * Address 1
   * @description Address line 1
   * @default null
   */
  address_1: string | null;
  /**
   * Address 2
   * @description Address line 2
   * @default null
   */
  address_2: string | null;
  /**
   * Api Version
   * @description ForceManager API version to use (sends X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Branch Id
   * @description Branch ID
   * @default null
   */
  branch_id: string | null;
  /**
   * City Name
   * @description City name
   * @default null
   */
  city_name: string | null;
  /**
   * Comment
   * @description Comment or notes
   * @default null
   */
  comment: string | null;
  /**
   * Country Id
   * @description Country ID
   * @default null
   */
  country_id: string | null;
  /**
   * Email
   * @description Email address
   * @default null
   */
  email: string | null;
  /**
   * Ext Id
   * @description External system ID
   * @default null
   */
  ext_id: string | null;
  /**
   * Extra Fields
   * @description Dictionary of extra custom fields (z_*) to merge into payload
   * @default null
   */
  extra_fields: {
      [key: string]: string;
  } | null;
  /**
   * Fax
   * @description Fax number
   * @default null
   */
  fax: string | null;
  /**
   * Geolocalisation Accuracy
   * @description Geolocation accuracy radius
   * @default null
   */
  geolocalisation_accuracy: string | null;
  /**
   * Id
   * @description Company identifier (positive integer)
   */
  id?: number;
  /**
   * Mobile Phone
   * @description Mobile phone
   * @default null
   */
  mobile_phone: string | null;
  /**
   * Name
   * @description Company name
   * @default null
   */
  name: string | null;
  /**
   * Permission Level
   * @description Permission level (1–5)
   * @default null
   */
  permission_level: number | null;
  /**
   * Phone
   * @description Phone number
   * @default null
   */
  phone: string | null;
  /**
   * Phone 2
   * @description Secondary phone number
   * @default null
   */
  phone_2: string | null;
  /**
   * Postcode
   * @description Postcode
   * @default null
   */
  postcode: string | null;
  /**
   * Product Rate Id
   * @description Default product rate ID
   * @default null
   */
  product_rate_id: string | null;
  /**
   * Province Name
   * @description Province name
   * @default null
   */
  province_name: string | null;
  /**
   * Sales Rep 2 Id
   * @description Additional sales rep ID
   * @default null
   */
  sales_rep_2_id: string | null;
  /**
   * Sales Rep 3 Id
   * @description Additional sales rep ID
   * @default null
   */
  sales_rep_3_id: string | null;
  /**
   * Sales Rep 4 Id
   * @description Additional sales rep ID
   * @default null
   */
  sales_rep_4_id: string | null;
  /**
   * Sales Rep 5 Id
   * @description Additional sales rep ID
   * @default null
   */
  sales_rep_5_id: string | null;
  /**
   * Sales Rep Id
   * @description Owner sales rep ID
   * @default null
   */
  sales_rep_id: string | null;
  /**
   * Segment Id
   * @description Segment ID
   * @default null
   */
  segment_id: string | null;
  /**
   * Vat Number
   * @description VAT number
   * @default null
   */
  vat_number: string | null;
  /**
   * Visible To All
   * @description If True, visible to all users (ForceManager expects string boolean)
   * @default null
   */
  visible_to_all: boolean | null;
  /**
   * Website
   * @description Website URL
   * @default null
   */
  website: string | null;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_COMPANY tool output.
 */
type FORCEMANAGER_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Message
       * @description Short status message returned by the API for PUT operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_PRODUCT tool input.
 */
type FORCEMANAGER_UPDATE_PRODUCT_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sends X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Category Id
   * @description Category ID
   * @default null
   */
  category_id: number | null;
  /**
   * Cost
   * @description Manufacturing cost
   * @default null
   */
  cost: number | null;
  /**
   * Description
   * @description Product description or comment
   * @default null
   */
  description: string | null;
  /**
   * Ext Id
   * @description External ID from third-party system
   * @default null
   */
  ext_id: string | null;
  /**
   * Extra Fields
   * @description Dictionary of extra custom fields (z_*) to merge into payload
   * @default null
   */
  extra_fields: {
      [key: string]: string;
  } | null;
  /**
   * Family Id
   * @description Family ID
   * @default null
   */
  family_id: number | null;
  /**
   * Id
   * @description Product identifier (positive integer)
   */
  id?: number;
  /**
   * Max Discount
   * @description Maximum discount percentage
   * @default null
   */
  max_discount: number | null;
  /**
   * Model
   * @description Product name
   * @default null
   */
  model: string | null;
  /**
   * Not Available
   * @description If True, product is not available (ForceManager expects string boolean)
   * @default null
   */
  not_available: boolean | null;
  /**
   * Permission Level
   * @description Permission level (1–5)
   * @default null
   */
  permission_level: number | null;
  /**
   * Price
   * @description Selling price
   * @default null
   */
  price: number | null;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_PRODUCT tool output.
 */
type FORCEMANAGER_UPDATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Message
       * @description Short status message returned by the API for PUT operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_SALES_ORDER tool input.
 */
type FORCEMANAGER_UPDATE_SALES_ORDER_INPUT = {
  /**
   * Account Id
   * @description Linked account ID
   * @default null
   */
  account_id: number | null;
  /**
   * Address
   * @description Address line for the order
   * @default null
   */
  address: string | null;
  /**
   * Amount
   * @description Order amount, must be non-negative
   * @default null
   */
  amount: number | null;
  /**
   * Api Version
   * @description ForceManager API version to use (sends X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Archived
   * @description Archive flag; True to archive
   * @default null
   */
  archived: boolean | null;
  /**
   * Branch Id
   * @description Branch ID
   * @default null
   */
  branch_id: number | null;
  /**
   * Closed Date
   * @description Actual closed date (YYYY-MM-DD)
   * @default null
   */
  closed_date: string | null;
  /**
   * Closing Date Expected
   * @description Expected closing date (YYYY-MM-DD)
   * @default null
   */
  closing_date_expected: string | null;
  /**
   * Comments
   * @description Sales order comments
   * @default null
   */
  comments: string | null;
  /**
   * Contact Id
   * @description Linked contact ID
   * @default null
   */
  contact_id: number | null;
  /**
   * Currency Id
   * @description Currency ID
   * @default null
   */
  currency_id: number | null;
  /**
   * Discount 1
   * @description First discount value
   * @default null
   */
  discount_1: number | null;
  /**
   * Discount 2
   * @description Second discount value
   * @default null
   */
  discount_2: number | null;
  /**
   * Discount 3
   * @description Third discount value
   * @default null
   */
  discount_3: number | null;
  /**
   * Discount 4
   * @description Fourth discount value
   * @default null
   */
  discount_4: number | null;
  /**
   * Ext Id
   * @description External identifier
   * @default null
   */
  ext_id: string | null;
  /**
   * Extra Fields
   * @description Dictionary of extra custom fields (z_*) to merge into payload
   * @default null
   */
  extra_fields: {
      [key: string]: string;
  } | null;
  /**
   * Id
   * @description Sales order identifier (positive integer)
   */
  id?: number;
  /**
   * Number
   * @description Order number
   * @default null
   */
  number: number | null;
  /**
   * Opportunity Id
   * @description Linked opportunity ID
   * @default null
   */
  opportunity_id: number | null;
  /**
   * Rate Id
   * @description Rate ID for the order
   * @default null
   */
  rate_id: number | null;
  /**
   * Sales Rep Id
   * @description Sales representative ID
   * @default null
   */
  sales_rep_id: number | null;
  /**
   * Status Id
   * @description Sales order status ID
   * @default null
   */
  status_id: number | null;
  /**
   * Topic
   * @description Sales order topic
   * @default null
   */
  topic: string | null;
  /**
   * Year
   * @description Order year
   * @default null
   */
  year: number | null;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_SALES_ORDER tool output.
 */
type FORCEMANAGER_UPDATE_SALES_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Message
       * @description Short status message returned by the API for PUT operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_SALES_ORDER_LINE tool input.
 */
type FORCEMANAGER_UPDATE_SALES_ORDER_LINE_INPUT = {
  /**
   * Api Version
   * @description ForceManager API version to use (sends X-FM-API-Version header)
   * @default null
   */
  api_version: number | null;
  /**
   * Discount 1
   * @description First discount, must be non-negative
   * @default null
   */
  discount_1: number | null;
  /**
   * Discount 2
   * @description Second discount, must be non-negative
   * @default null
   */
  discount_2: number | null;
  /**
   * Discount 3
   * @description Third discount, must be non-negative
   * @default null
   */
  discount_3: number | null;
  /**
   * Discount 4
   * @description Fourth discount, must be non-negative
   * @default null
   */
  discount_4: number | null;
  /**
   * Extra Fields
   * @description Additional custom fields (e.g., z_customField) to merge into the payload
   * @default null
   */
  extra_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Final Price
   * @description Final price after discounts, must be non-negative
   * @default null
   */
  final_price: number | null;
  /**
   * Id
   * @description Identifier of the sales order line to update
   */
  id?: number | null;
  /**
   * Price
   * @description Unit price before discounts, must be non-negative
   * @default null
   */
  price: number | null;
  /**
   * Product Id
   * @description Identifier of the product for this line
   * @default null
   */
  product_id: number | null;
  /**
   * Quantity
   * @description Quantity for this line, must be non-negative
   * @default null
   */
  quantity: number | null;
  /**
   * Salesorder Id
   * @description Identifier of the sales order owning the line
   * @default null
   */
  salesorder_id: number | null;
};

/**
 * Type of FORCEMANAGER's FORCEMANAGER_UPDATE_SALES_ORDER_LINE tool output.
 */
type FORCEMANAGER_UPDATE_SALES_ORDER_LINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Body
       * @description Raw JSON body if the API returned JSON
       * @default null
       */
      raw_body: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Message
       * @description Short status message returned by the API for PUT operations
       */
      status_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "FORCEMANAGER".
 */
export type FORCEMANAGER_TOOL_INPUTS = {
  DELETE_ACTIVITY: FORCEMANAGER_DELETE_ACTIVITY_INPUT
  DELETE_COMPANY: FORCEMANAGER_DELETE_COMPANY_INPUT
  DELETE_CONTACT: FORCEMANAGER_DELETE_CONTACT_INPUT
  DELETE_SALES_ORDER: FORCEMANAGER_DELETE_SALES_ORDER_INPUT
  DELETE_SALES_ORDER_LINE: FORCEMANAGER_DELETE_SALES_ORDER_LINE_INPUT
  DELETE_VALUE: FORCEMANAGER_DELETE_VALUE_INPUT
  DELETE_VIEW: FORCEMANAGER_DELETE_VIEW_INPUT
  GET_ACTIVITY: FORCEMANAGER_GET_ACTIVITY_INPUT
  GET_COMPANY: FORCEMANAGER_GET_COMPANY_INPUT
  GET_INTERNAL_ID: FORCEMANAGER_GET_INTERNAL_ID_INPUT
  GET_PRODUCT: FORCEMANAGER_GET_PRODUCT_INPUT
  GET_SALES_ORDER_LINE: FORCEMANAGER_GET_SALES_ORDER_LINE_INPUT
  GET_USER: FORCEMANAGER_GET_USER_INPUT
  GET_VIEW: FORCEMANAGER_GET_VIEW_INPUT
  LIST_VIEWS: FORCEMANAGER_LIST_VIEWS_INPUT
  UPDATE_ACTIVITY: FORCEMANAGER_UPDATE_ACTIVITY_INPUT
  UPDATE_COMPANY: FORCEMANAGER_UPDATE_COMPANY_INPUT
  UPDATE_PRODUCT: FORCEMANAGER_UPDATE_PRODUCT_INPUT
  UPDATE_SALES_ORDER: FORCEMANAGER_UPDATE_SALES_ORDER_INPUT
  UPDATE_SALES_ORDER_LINE: FORCEMANAGER_UPDATE_SALES_ORDER_LINE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FORCEMANAGER".
 */
export type FORCEMANAGER_TOOL_OUTPUTS = {
  DELETE_ACTIVITY: FORCEMANAGER_DELETE_ACTIVITY_OUTPUT
  DELETE_COMPANY: FORCEMANAGER_DELETE_COMPANY_OUTPUT
  DELETE_CONTACT: FORCEMANAGER_DELETE_CONTACT_OUTPUT
  DELETE_SALES_ORDER: FORCEMANAGER_DELETE_SALES_ORDER_OUTPUT
  DELETE_SALES_ORDER_LINE: FORCEMANAGER_DELETE_SALES_ORDER_LINE_OUTPUT
  DELETE_VALUE: FORCEMANAGER_DELETE_VALUE_OUTPUT
  DELETE_VIEW: FORCEMANAGER_DELETE_VIEW_OUTPUT
  GET_ACTIVITY: FORCEMANAGER_GET_ACTIVITY_OUTPUT
  GET_COMPANY: FORCEMANAGER_GET_COMPANY_OUTPUT
  GET_INTERNAL_ID: FORCEMANAGER_GET_INTERNAL_ID_OUTPUT
  GET_PRODUCT: FORCEMANAGER_GET_PRODUCT_OUTPUT
  GET_SALES_ORDER_LINE: FORCEMANAGER_GET_SALES_ORDER_LINE_OUTPUT
  GET_USER: FORCEMANAGER_GET_USER_OUTPUT
  GET_VIEW: FORCEMANAGER_GET_VIEW_OUTPUT
  LIST_VIEWS: FORCEMANAGER_LIST_VIEWS_OUTPUT
  UPDATE_ACTIVITY: FORCEMANAGER_UPDATE_ACTIVITY_OUTPUT
  UPDATE_COMPANY: FORCEMANAGER_UPDATE_COMPANY_OUTPUT
  UPDATE_PRODUCT: FORCEMANAGER_UPDATE_PRODUCT_OUTPUT
  UPDATE_SALES_ORDER: FORCEMANAGER_UPDATE_SALES_ORDER_OUTPUT
  UPDATE_SALES_ORDER_LINE: FORCEMANAGER_UPDATE_SALES_ORDER_LINE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FORCEMANAGER toolkit.
 */
export const FORCEMANAGER = {
  slug: "forcemanager",
  tools: {
    /**
     * Delete an existing activity by ID. Tries multiple base hosts and path variants to maximize compatibility across environments and gateways.
     */
    DELETE_ACTIVITY: "FORCEMANAGER_DELETE_ACTIVITY",
    /**
     * Tool to delete a company by its ForceManager ID. Use when you need to remove an existing company from the system.
     */
    DELETE_COMPANY: "FORCEMANAGER_DELETE_COMPANY",
    /**
     * Delete an existing contact by ID. Tries multiple base hosts and path variants to maximize compatibility across environments and gateways.
     */
    DELETE_CONTACT: "FORCEMANAGER_DELETE_CONTACT",
    /**
     * Delete a sales order by ID using ForceManager REST API. Tries multiple base hosts and path variants to maximize compatibility across environments. Accepts successful HTTP status codes (< 300) even when the response is non-JSON, capturing response text.
     */
    DELETE_SALES_ORDER: "FORCEMANAGER_DELETE_SALES_ORDER",
    /**
     * Delete a sales order line by ID using ForceManager REST API. Tries multiple base hosts and path variants to maximize compatibility across environments. Accepts successful HTTP status codes (< 300) even when the response is HTML instead of JSON, capturing the response text as a message.
     */
    DELETE_SALES_ORDER_LINE: "FORCEMANAGER_DELETE_SALES_ORDER_LINE",
    /**
     * Delete a master-data value (Z_ table) by ID using ForceManager REST API. Tries multiple base hosts and path variants to maximize compatibility across environments. Accepts successful HTTP status codes (< 300) even when the response is HTML instead of JSON, capturing the response text as a message. Also retries sending authentication headers as query parameters on HTTP 401 as some gateways expect them in query string.
     */
    DELETE_VALUE: "FORCEMANAGER_DELETE_VALUE",
    /**
     * Delete a saved view by ID. Tries multiple base hosts and path variants to maximize compatibility across environments and gateways.
     */
    DELETE_VIEW: "FORCEMANAGER_DELETE_VIEW",
    /**
     * Tool to get a single activity by ID. Use when you need to fetch a specific activity. Returns empty entity with found=False on non-JSON HTML or if not found.
     */
    GET_ACTIVITY: "FORCEMANAGER_GET_ACTIVITY",
    /**
     * Tool to get a single company by ID. Returns the object when JSON is available; otherwise returns an empty payload with found=False to gracefully handle non-JSON HTML responses from app.forcemanager.net.
     */
    GET_COMPANY: "FORCEMANAGER_GET_COMPANY",
    /**
     * Tool to retrieve ForceManager internal IDs mapping for a given externalId and entity type. This action calls the documented endpoint /api/internalid with required authentication headers and optional pagination/version headers. It tries multiple base hosts to avoid HTML app shell responses and gracefully handles non-JSON responses and error codes by returning empty results instead of failing the execution.
     */
    GET_INTERNAL_ID: "FORCEMANAGER_GET_INTERNAL_ID",
    /**
     * Tool to get a single product by ID. It tries multiple known ForceManager endpoints and gracefully handles cases where the response is non-JSON by returning an empty payload with found=False. Fallback: if all direct endpoints fail, it will try listing products and filter locally.
     */
    GET_PRODUCT: "FORCEMANAGER_GET_PRODUCT",
    /**
     * Tool to get a single sales order line by ID. Use when you need to fetch details of a specific sales order line.
     */
    GET_SALES_ORDER_LINE: "FORCEMANAGER_GET_SALES_ORDER_LINE",
    /**
     * Tool to get a single user by ID. Use when you need to retrieve user details by ID. Returns empty entity with found=False when user not found or non-JSON is returned.
     */
    GET_USER: "FORCEMANAGER_GET_USER",
    /**
     * Tool to get a single view by ID. Returns a list with zero or one view object.
     */
    GET_VIEW: "FORCEMANAGER_GET_VIEW",
    /**
     * Tool to list saved view filters. Use when you need to retrieve saved views for a specific entity (e.g., list views for entity 'account').
     */
    LIST_VIEWS: "FORCEMANAGER_LIST_VIEWS",
    /**
     * Tool to update an existing activity by ID. Use when you need to change fields such as comment, date/time, linked entities, or geocode.
     */
    UPDATE_ACTIVITY: "FORCEMANAGER_UPDATE_ACTIVITY",
    /**
     * Update Company
     */
    UPDATE_COMPANY: "FORCEMANAGER_UPDATE_COMPANY",
    /**
     * Tool to update a product by ID in ForceManager. Use when modifying product details.
     */
    UPDATE_PRODUCT: "FORCEMANAGER_UPDATE_PRODUCT",
    /**
     * Update Sales Order
     */
    UPDATE_SALES_ORDER: "FORCEMANAGER_UPDATE_SALES_ORDER",
    /**
     * Tool to update sales order line by ID. Use when modifying details of an existing sales order line. Retries with query auth on 401 for proxy-pro host.
     */
    UPDATE_SALES_ORDER_LINE: "FORCEMANAGER_UPDATE_SALES_ORDER_LINE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FORCEMANAGER".
 */
export type FORCEMANAGER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FORCEMANAGER".
 */
export type FORCEMANAGER_TRIGGER_EVENTS = {}
