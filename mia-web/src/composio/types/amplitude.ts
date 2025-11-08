// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AMPLITUDE's AMPLITUDE_CHECK_COHORT_STATUS tool input.
 */
type AMPLITUDE_CHECK_COHORT_STATUS_INPUT = {
  /**
   * Request Id
   * @description Request ID from cohort request
   */
  request_id?: string;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_CHECK_COHORT_STATUS tool output.
 */
type AMPLITUDE_CHECK_COHORT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Async Status
       * @description Job status (JOB INPROGRESS or JOB COMPLETED)
       */
      async_status: string;
      /**
       * Cohort Id
       * @description Cohort ID
       */
      cohort_id: string;
      /**
       * Request Id
       * @description Request ID
       */
      request_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_CREATE_EVENT_CATEGORY tool input.
 */
type AMPLITUDE_CREATE_EVENT_CATEGORY_INPUT = {
  /**
   * Category Name
   * @description Name of the category to create
   */
  category_name?: string;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_CREATE_EVENT_CATEGORY tool output.
 */
type AMPLITUDE_CREATE_EVENT_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type of AMPLITUDE's AMPLITUDE_CREATE_EVENT_TYPE tool input.
 */
type AMPLITUDE_CREATE_EVENT_TYPE_INPUT = {
  /**
   * Category
   * @description The event type's category
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description Details about the event type
   * @default null
   */
  description: string | null;
  /**
   * Event Type
   * @description The event name
   */
  event_type?: string;
  /**
   * Is Active
   * @description Activity of the event type
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Hidden From Dropdowns
   * @description Event type is hidden from dropdowns
   * @default null
   */
  is_hidden_from_dropdowns: boolean | null;
  /**
   * Is Hidden From Pathfinder
   * @description Event type is hidden from pathfinder
   * @default null
   */
  is_hidden_from_pathfinder: boolean | null;
  /**
   * Is Hidden From Persona Results
   * @description Event type is hidden from persona results
   * @default null
   */
  is_hidden_from_persona_results: boolean | null;
  /**
   * Is Hidden From Timeline
   * @description Event type is hidden from timeline
   * @default null
   */
  is_hidden_from_timeline: boolean | null;
  /**
   * Owner
   * @description Owner of the event type
   * @default null
   */
  owner: string | null;
  /**
   * Tags
   * @description List of tags, separated by a comma
   * @default null
   */
  tags: string | null;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_CREATE_EVENT_TYPE tool output.
 */
type AMPLITUDE_CREATE_EVENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type of AMPLITUDE's AMPLITUDE_DELETE_EVENT_CATEGORY tool input.
 */
type AMPLITUDE_DELETE_EVENT_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description ID of the category to delete
   */
  category_id?: number;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_DELETE_EVENT_CATEGORY tool output.
 */
type AMPLITUDE_DELETE_EVENT_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type of AMPLITUDE's AMPLITUDE_DELETE_EVENT_TYPE tool input.
 */
type AMPLITUDE_DELETE_EVENT_TYPE_INPUT = {
  /**
   * Event Type
   * @description The event name to delete
   */
  event_type?: string;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_DELETE_EVENT_TYPE tool output.
 */
type AMPLITUDE_DELETE_EVENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type of AMPLITUDE's AMPLITUDE_GET_COHORT tool input.
 */
type AMPLITUDE_GET_COHORT_INPUT = {
  /**
   * Cohort Id
   * @description Cohort ID to retrieve
   */
  cohort_id?: string;
  /**
   * Include Properties
   * @description Include user properties in response
   * @default false
   */
  include_properties: boolean;
  /**
   * Property Keys
   * @description User properties to include
   * @default null
   */
  property_keys: string[] | null;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_COHORT tool output.
 */
type AMPLITUDE_GET_COHORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cohort Id
       * @description Cohort ID
       */
      cohort_id: string;
      /**
       * Request Id
       * @description Request ID for polling status
       */
      request_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_EVENT_CATEGORIES tool input.
 */
type AMPLITUDE_GET_EVENT_CATEGORIES_INPUT = {
  /**
   * Category Name
   * @description Optional category name to get specific category
   * @default null
   */
  category_name: string | null;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_EVENT_CATEGORIES tool output.
 */
type AMPLITUDE_GET_EVENT_CATEGORIES_OUTPUT = {
  /**
   * EventCategory
   * @description Model for a single event category
   * @default null
   */
  data: {
      /**
       * Id
       * @description Category ID
       */
      id: number;
      /**
       * Name
       * @description Category name
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
   * Errors
   * @description List of errors if any
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Success
   * @description Whether the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_EVENT_TYPE tool input.
 */
type AMPLITUDE_GET_EVENT_TYPE_INPUT = {
  /**
   * Event Type
   * @description The event name to retrieve
   */
  event_type?: string;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_EVENT_TYPE tool output.
 */
type AMPLITUDE_GET_EVENT_TYPE_OUTPUT = {
  /**
   * EventType
   * @description Model for a single event type
   * @default null
   */
  data: {
      /**
       * EventTypeCategory
       * @description Model for an event type's category
       * @default null
       */
      category: {
          /**
           * Name
           * @description Category name
           */
          name: string;
      } | null;
      /**
       * Description
       * @description Event description
       * @default null
       */
      description: string | null;
      /**
       * Event Type
       * @description Event type name
       */
      event_type: string;
      /**
       * Is Active
       * @description Whether the event is active
       * @default false
       */
      is_active: boolean;
      /**
       * Is Hidden From Dropdowns
       * @description Whether hidden from dropdowns
       * @default false
       */
      is_hidden_from_dropdowns: boolean;
      /**
       * Is Hidden From Pathfinder
       * @description Whether hidden from pathfinder
       * @default false
       */
      is_hidden_from_pathfinder: boolean;
      /**
       * Is Hidden From Persona Results
       * @description Whether hidden from persona results
       * @default false
       */
      is_hidden_from_persona_results: boolean;
      /**
       * Is Hidden From Timeline
       * @description Whether hidden from timeline
       * @default false
       */
      is_hidden_from_timeline: boolean;
      /**
       * Owner
       * @description Event owner
       * @default null
       */
      owner: string | null;
      /**
       * Tags
       * @description Event tags
       */
      tags?: string[];
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of errors if any
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Success
   * @description Whether the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_EVENT_TYPES tool input.
 */
type AMPLITUDE_GET_EVENT_TYPES_INPUT = {
  /**
   * Show Deleted
   * @description Whether to include deleted events
   * @default false
   */
  show_deleted: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_GET_EVENT_TYPES tool output.
 */
type AMPLITUDE_GET_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description List of event types
   * @default null
   */
  data: {
      /**
       * EventTypeCategory
       * @description Model for an event type's category
       * @default null
       */
      category: {
          /**
           * Name
           * @description Category name
           */
          name: string;
      } | null;
      /**
       * Description
       * @description Event description
       * @default null
       */
      description: string | null;
      /**
       * Event Type
       * @description Event type name
       */
      event_type: string;
      /**
       * Is Active
       * @description Whether the event is active
       * @default false
       */
      is_active: boolean;
      /**
       * Is Hidden From Dropdowns
       * @description Whether hidden from dropdowns
       * @default false
       */
      is_hidden_from_dropdowns: boolean;
      /**
       * Is Hidden From Pathfinder
       * @description Whether hidden from pathfinder
       * @default false
       */
      is_hidden_from_pathfinder: boolean;
      /**
       * Is Hidden From Persona Results
       * @description Whether hidden from persona results
       * @default false
       */
      is_hidden_from_persona_results: boolean;
      /**
       * Is Hidden From Timeline
       * @description Whether hidden from timeline
       * @default false
       */
      is_hidden_from_timeline: boolean;
      /**
       * Owner
       * @description Event owner
       * @default null
       */
      owner: string | null;
      /**
       * Tags
       * @description Event tags
       */
      tags?: string[];
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of errors if any
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Success
   * @description Whether the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_IDENTIFY tool input.
 */
type AMPLITUDE_IDENTIFY_INPUT = {
  /**
   * Api Key
   * @description Your Amplitude API Key for your project
   */
  api_key?: string;
  /**
   * AmplitudeIdentification
   * @description Model for a single identification object
   */
  identification?: {
      /**
       * App Version
       * @description App version
       * @default null
       */
      app_version: string | null;
      /**
       * Carrier
       * @description Carrier
       * @default null
       */
      carrier: string | null;
      /**
       * City
       * @description User's city
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description User's country
       * @default null
       */
      country: string | null;
      /**
       * Device Brand
       * @description Device brand
       * @default null
       */
      device_brand: string | null;
      /**
       * Device Id
       * @description Device-specific identifier
       * @default null
       */
      device_id: string | null;
      /**
       * Device Manufacturer
       * @description Device manufacturer
       * @default null
       */
      device_manufacturer: string | null;
      /**
       * Device Model
       * @description Device model
       * @default null
       */
      device_model: string | null;
      /**
       * Dma
       * @description Designated Market Area
       * @default null
       */
      dma: string | null;
      /**
       * Groups
       * @description Groups for account-level reporting (Enterprise/Accounts add-on only)
       * @default null
       */
      groups: {
          [key: string]: unknown;
      } | null;
      /**
       * Language
       * @description User's language
       * @default null
       */
      language: string | null;
      /**
       * Os Name
       * @description Operating system or browser
       * @default null
       */
      os_name: string | null;
      /**
       * Os Version
       * @description OS or browser version
       * @default null
       */
      os_version: string | null;
      /**
       * Paying
       * @description Whether user is paying
       * @default null
       */
      paying: string | null;
      /**
       * Platform
       * @description Platform sending the data
       * @default null
       */
      platform: string | null;
      /**
       * Region
       * @description User's region
       * @default null
       */
      region: string | null;
      /**
       * Start Version
       * @description First app version user was on
       * @default null
       */
      start_version: string | null;
      /**
       * User Id
       * @description Unique user ID specified by you
       * @default null
       */
      user_id: string | null;
      /**
       * User Properties
       * @description Properties tied to the user, can be direct properties or operations
       * @default null
       */
      user_properties: {
          [key: string]: unknown;
      } | null;
  } | null;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_IDENTIFY tool output.
 */
type AMPLITUDE_IDENTIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Amplitude API
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
 * Type of AMPLITUDE's AMPLITUDE_LIST_COHORTS tool input.
 */
type AMPLITUDE_LIST_COHORTS_INPUT = {
  /**
   * Include Sync Info
   * @description Whether to include cohort sync metadata
   * @default false
   */
  include_sync_info: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_LIST_COHORTS tool output.
 */
type AMPLITUDE_LIST_COHORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cohorts
       * @description List of cohorts
       */
      cohorts: {
          /**
           * App Id
           * @description Application ID
           */
          appId: number;
          /**
           * Archived
           * @description Whether cohort is archived
           * @default false
           */
          archived: boolean;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          createdAt: number | null;
          /**
           * CohortDefinition
           * @description Model for cohort definition (simplified)
           * @default null
           */
          definition: {
              /**
               * And Clauses
               * @description Cohort AND clauses
               * @default null
               */
              andClauses: unknown[] | null;
              /**
               * Cohort Type
               * @description Type of cohort
               * @default null
               */
              cohortType: string | null;
              /**
               * Count Group
               * @description Count group information
               * @default null
               */
              countGroup: {
                  [key: string]: unknown;
              } | null;
              /**
               * Version
               * @description Definition version
               * @default null
               */
              version: number | null;
          } | null;
          /**
           * Description
           * @description Cohort description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Cohort ID
           */
          id: string;
          /**
           * Last Computed
           * @description Last computed timestamp
           * @default null
           */
          lastComputed: number | null;
          /**
           * Last Mod
           * @description Last modified timestamp
           * @default null
           */
          lastMod: number | null;
          /**
           * Name
           * @description Cohort name
           */
          name: string;
          /**
           * Owners
           * @description Cohort owners
           * @default null
           */
          owners: unknown[] | null;
          /**
           * Published
           * @description Whether cohort is discoverable
           * @default true
           */
          published: boolean;
          /**
           * Size
           * @description Cohort size
           * @default null
           */
          size: number | null;
          /**
           * Sync Metadata
           * @description Sync metadata
           * @default null
           */
          syncMetadata: unknown[] | null;
          /**
           * Type
           * @description Cohort type
           * @default null
           */
          type: string | null;
          /**
           * Viewers
           * @description Cohort viewers
           * @default null
           */
          viewers: unknown[] | null;
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
 * Type of AMPLITUDE's AMPLITUDE_RESTORE_EVENT_TYPE tool input.
 */
type AMPLITUDE_RESTORE_EVENT_TYPE_INPUT = {
  /**
   * Event Type
   * @description The event name to restore
   */
  event_type?: string;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_RESTORE_EVENT_TYPE tool output.
 */
type AMPLITUDE_RESTORE_EVENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type of AMPLITUDE's AMPLITUDE_SEND_EVENTS tool input.
 */
type AMPLITUDE_SEND_EVENTS_INPUT = {
  /**
   * Api Key
   * @description Your Amplitude API Key for your project
   */
  api_key?: string;
  /**
   * Events
   * @description Array of events to upload
   */
  events?: {
      /**
       * $Skip User Properties Sync
       * @description When true user properties aren't synced
       * @default null
       */
      $skip_user_properties_sync: boolean | null;
      /**
       * Adid
       * @description (Android) Google Play Services advertising ID
       * @default null
       */
      adid: string | null;
      /**
       * Android App Set Id
       * @description (Android) Identifier for vendor+
       * @default null
       */
      android_app_set_id: string | null;
      /**
       * Android Id
       * @description (Android) Android ID
       * @default null
       */
      android_id: string | null;
      /**
       * App Version
       * @description Current version of your application
       * @default null
       */
      app_version: string | null;
      /**
       * Carrier
       * @description Carrier being used
       * @default null
       */
      carrier: string | null;
      /**
       * City
       * @description Current city of the user
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Current country of the user
       * @default null
       */
      country: string | null;
      /**
       * Device Brand
       * @description Device brand
       * @default null
       */
      device_brand: string | null;
      /**
       * Device Id
       * @description Device-specific identifier. Required if user_id isn't used
       * @default null
       */
      device_id: string | null;
      /**
       * Device Manufacturer
       * @description Device manufacturer
       * @default null
       */
      device_manufacturer: string | null;
      /**
       * Device Model
       * @description Device model
       * @default null
       */
      device_model: string | null;
      /**
       * Dma
       * @description Current Designated Market Area of the user
       * @default null
       */
      dma: string | null;
      /**
       * Event Id
       * @description Incrementing counter to distinguish events
       * @default null
       */
      event_id: number | null;
      /**
       * Event Properties
       * @description Key-value pairs representing event data
       * @default null
       */
      event_properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Event Type
       * @description Unique identifier for your event
       */
      event_type: string;
      /**
       * Group Properties
       * @description Properties tied to groups when event_type is $groupidentify
       * @default null
       */
      group_properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Groups
       * @description Key-value pairs representing user groups (requires Accounts add-on)
       * @default null
       */
      groups: {
          [key: string]: unknown;
      } | null;
      /**
       * Idfa
       * @description (iOS) Identifier for Advertiser
       * @default null
       */
      idfa: string | null;
      /**
       * Idfv
       * @description (iOS) Identifier for Vendor
       * @default null
       */
      idfv: string | null;
      /**
       * Insert Id
       * @description Unique identifier for event deduplication
       * @default null
       */
      insert_id: string | null;
      /**
       * Ip
       * @description IP address of the user
       * @default null
       */
      ip: string | null;
      /**
       * Language
       * @description Language set by the user
       * @default null
       */
      language: string | null;
      /**
       * Location Lat
       * @description Current Latitude of the user
       * @default null
       */
      location_lat: number | null;
      /**
       * Location Lng
       * @description Current Longitude of the user
       * @default null
       */
      location_lng: number | null;
      /**
       * Os Name
       * @description Name of the mobile operating system or browser
       * @default null
       */
      os_name: string | null;
      /**
       * Os Version
       * @description Version of the mobile operating system or browser
       * @default null
       */
      os_version: string | null;
      /**
       * AmplitudePlan
       * @description Model for Amplitude tracking plan properties
       * @default null
       */
      plan: {
          /**
           * Branch
           * @description The tracking plan branch name
           * @default null
           */
          branch: string | null;
          /**
           * Source
           * @description The tracking plan source
           * @default null
           */
          source: string | null;
          /**
           * Version
           * @description The tracking plan version
           * @default null
           */
          version: string | null;
      } | null;
      /**
       * Platform
       * @description Platform of the device
       * @default null
       */
      platform: string | null;
      /**
       * Price
       * @description Price of the item purchased
       * @default null
       */
      price: number | null;
      /**
       * Product Id
       * @description Identifier for the item purchased
       * @default null
       */
      productId: string | null;
      /**
       * Quantity
       * @description Quantity of the item purchased
       * @default null
       */
      quantity: number | null;
      /**
       * Region
       * @description Current region of the user
       * @default null
       */
      region: string | null;
      /**
       * Revenue
       * @description Revenue = (price x quantity)
       * @default null
       */
      revenue: number | null;
      /**
       * Revenue Type
       * @description Type of revenue for the item purchased
       * @default null
       */
      revenueType: string | null;
      /**
       * Session Id
       * @description Start time of the session in milliseconds
       * @default null
       */
      session_id: number | null;
      /**
       * Time
       * @description Timestamp of the event in milliseconds since epoch
       * @default null
       */
      time: number | null;
      /**
       * User Id
       * @description ID for the user. Must have minimum length of 5 characters unless overridden
       * @default null
       */
      user_id: string | null;
      /**
       * User Properties
       * @description Key-value pairs representing user data
       * @default null
       */
      user_properties: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * AmplitudeOptions
   * @description Model for Amplitude API options
   * @default null
   */
  options: {
      /**
       * Min Id Length
       * @description Override default minimum length of 5 for user_id & device_id fields
       * @default null
       */
      min_id_length: number | null;
  } | null;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_SEND_EVENTS tool output.
 */
type AMPLITUDE_SEND_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from Amplitude API
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
 * Type of AMPLITUDE's AMPLITUDE_UPDATE_COHORT_MEMBERSHIP tool input.
 */
type AMPLITUDE_UPDATE_COHORT_MEMBERSHIP_INPUT = {
  /**
   * Cohort Id
   * @description Cohort ID to update
   */
  cohort_id?: string;
  /**
   * Count Group
   * @description Count group of the IDs
   * @default null
   */
  count_group: string | null;
  /**
   * Memberships
   * @description Membership operations to perform
   */
  memberships?: {
      /**
       * Id Type
       * @description ID type (BY_ID or BY_NAME)
       */
      id_type: string;
      /**
       * Ids
       * @description List of IDs to add or remove
       */
      ids: string[];
      /**
       * Operation
       * @description Operation (ADD or REMOVE)
       */
      operation: string;
  }[];
  /**
   * Skip Invalid Ids
   * @description Skip invalid IDs
   * @default true
   */
  skip_invalid_ids: boolean;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_UPDATE_COHORT_MEMBERSHIP tool output.
 */
type AMPLITUDE_UPDATE_COHORT_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cohort Id
       * @description Cohort ID
       */
      cohort_id: string;
      /**
       * Memberships Result
       * @description Results of membership operations
       */
      memberships_result: {
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
 * Type of AMPLITUDE's AMPLITUDE_UPDATE_EVENT_CATEGORY tool input.
 */
type AMPLITUDE_UPDATE_EVENT_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description ID of the category to update
   */
  category_id?: number;
  /**
   * Category Name
   * @description New name for the category
   */
  category_name?: string;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_UPDATE_EVENT_CATEGORY tool output.
 */
type AMPLITUDE_UPDATE_EVENT_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type of AMPLITUDE's AMPLITUDE_UPDATE_EVENT_TYPE tool input.
 */
type AMPLITUDE_UPDATE_EVENT_TYPE_INPUT = {
  /**
   * Category
   * @description Category name for the event type
   * @default null
   */
  category: string | null;
  /**
   * Description
   * @description Details about the event type
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description Display name of the event type
   * @default null
   */
  display_name: string | null;
  /**
   * Event Type
   * @description The event name to update
   */
  event_type?: string;
  /**
   * Is Active
   * @description Activity of the event type
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Hidden From Dropdowns
   * @description Event type is hidden from dropdowns
   * @default null
   */
  is_hidden_from_dropdowns: boolean | null;
  /**
   * Is Hidden From Pathfinder
   * @description Event type is hidden from pathfinder
   * @default null
   */
  is_hidden_from_pathfinder: boolean | null;
  /**
   * Is Hidden From Persona Results
   * @description Event type is hidden from persona results
   * @default null
   */
  is_hidden_from_persona_results: boolean | null;
  /**
   * Is Hidden From Timeline
   * @description Event type is hidden from timeline
   * @default null
   */
  is_hidden_from_timeline: boolean | null;
  /**
   * New Event Type
   * @description New name for the event type
   * @default null
   */
  new_event_type: string | null;
  /**
   * Owner
   * @description Owner of the event type
   * @default null
   */
  owner: string | null;
  /**
   * Tags
   * @description List of tags, separated by a comma
   * @default null
   */
  tags: string | null;
};

/**
 * Type of AMPLITUDE's AMPLITUDE_UPDATE_EVENT_TYPE tool output.
 */
type AMPLITUDE_UPDATE_EVENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Success
       * @description Whether the operation was successful
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
 * Type map of all available tool input types for toolkit "AMPLITUDE".
 */
export type AMPLITUDE_TOOL_INPUTS = {
  CHECK_COHORT_STATUS: AMPLITUDE_CHECK_COHORT_STATUS_INPUT
  CREATE_EVENT_CATEGORY: AMPLITUDE_CREATE_EVENT_CATEGORY_INPUT
  CREATE_EVENT_TYPE: AMPLITUDE_CREATE_EVENT_TYPE_INPUT
  DELETE_EVENT_CATEGORY: AMPLITUDE_DELETE_EVENT_CATEGORY_INPUT
  DELETE_EVENT_TYPE: AMPLITUDE_DELETE_EVENT_TYPE_INPUT
  GET_COHORT: AMPLITUDE_GET_COHORT_INPUT
  GET_EVENT_CATEGORIES: AMPLITUDE_GET_EVENT_CATEGORIES_INPUT
  GET_EVENT_TYPE: AMPLITUDE_GET_EVENT_TYPE_INPUT
  GET_EVENT_TYPES: AMPLITUDE_GET_EVENT_TYPES_INPUT
  IDENTIFY: AMPLITUDE_IDENTIFY_INPUT
  LIST_COHORTS: AMPLITUDE_LIST_COHORTS_INPUT
  RESTORE_EVENT_TYPE: AMPLITUDE_RESTORE_EVENT_TYPE_INPUT
  SEND_EVENTS: AMPLITUDE_SEND_EVENTS_INPUT
  UPDATE_COHORT_MEMBERSHIP: AMPLITUDE_UPDATE_COHORT_MEMBERSHIP_INPUT
  UPDATE_EVENT_CATEGORY: AMPLITUDE_UPDATE_EVENT_CATEGORY_INPUT
  UPDATE_EVENT_TYPE: AMPLITUDE_UPDATE_EVENT_TYPE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AMPLITUDE".
 */
export type AMPLITUDE_TOOL_OUTPUTS = {
  CHECK_COHORT_STATUS: AMPLITUDE_CHECK_COHORT_STATUS_OUTPUT
  CREATE_EVENT_CATEGORY: AMPLITUDE_CREATE_EVENT_CATEGORY_OUTPUT
  CREATE_EVENT_TYPE: AMPLITUDE_CREATE_EVENT_TYPE_OUTPUT
  DELETE_EVENT_CATEGORY: AMPLITUDE_DELETE_EVENT_CATEGORY_OUTPUT
  DELETE_EVENT_TYPE: AMPLITUDE_DELETE_EVENT_TYPE_OUTPUT
  GET_COHORT: AMPLITUDE_GET_COHORT_OUTPUT
  GET_EVENT_CATEGORIES: AMPLITUDE_GET_EVENT_CATEGORIES_OUTPUT
  GET_EVENT_TYPE: AMPLITUDE_GET_EVENT_TYPE_OUTPUT
  GET_EVENT_TYPES: AMPLITUDE_GET_EVENT_TYPES_OUTPUT
  IDENTIFY: AMPLITUDE_IDENTIFY_OUTPUT
  LIST_COHORTS: AMPLITUDE_LIST_COHORTS_OUTPUT
  RESTORE_EVENT_TYPE: AMPLITUDE_RESTORE_EVENT_TYPE_OUTPUT
  SEND_EVENTS: AMPLITUDE_SEND_EVENTS_OUTPUT
  UPDATE_COHORT_MEMBERSHIP: AMPLITUDE_UPDATE_COHORT_MEMBERSHIP_OUTPUT
  UPDATE_EVENT_CATEGORY: AMPLITUDE_UPDATE_EVENT_CATEGORY_OUTPUT
  UPDATE_EVENT_TYPE: AMPLITUDE_UPDATE_EVENT_TYPE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AMPLITUDE toolkit.
 */
export const AMPLITUDE = {
  slug: "amplitude",
  tools: {
    /**
     * Check the status of a cohort export request. this action allows you to: - poll the status of an in-progress cohort download request - determine if a cohort is ready for download
     */
    CHECK_COHORT_STATUS: "AMPLITUDE_CHECK_COHORT_STATUS",
    /**
     * Create a new event category in amplitude. this action allows you to: - create a new event category to organize event types - validate category name before creation key features: - creates event categories for organizing events - returns success/failure status
     */
    CREATE_EVENT_CATEGORY: "AMPLITUDE_CREATE_EVENT_CATEGORY",
    /**
     * Create a new event type in amplitude. this action allows you to: - define a new event type with various properties - associate the event with a category - add metadata like description, tags, and owner key features: - creates trackable events in your amplitude project - supports full event type configuration
     */
    CREATE_EVENT_TYPE: "AMPLITUDE_CREATE_EVENT_TYPE",
    /**
     * Delete an event category from amplitude. this action allows you to: - delete an existing event category - remove category organization from events key features: - permanently removes event categories - returns success/failure status
     */
    DELETE_EVENT_CATEGORY: "AMPLITUDE_DELETE_EVENT_CATEGORY",
    /**
     * Delete an event type from amplitude. this action allows you to: - remove an event type from your project - mark live events as deleted - remove planned events from the tracking plan key features: - different behavior based on event status (live, planned, etc.) - returns success/failure status
     */
    DELETE_EVENT_TYPE: "AMPLITUDE_DELETE_EVENT_TYPE",
    /**
     * Get a single cohort by id and initiate download. this action allows you to: - request a specific cohort from amplitude - optionally include user properties in the response - start the asynchronous download process key features: - supports filtering by specific user properties - returns a request id used for polling status and downloading - supports eu data residency
     */
    GET_COHORT: "AMPLITUDE_GET_COHORT",
    /**
     * Get event categories from amplitude. this action allows you to: - get all event categories in your project - get a specific category by name
     */
    GET_EVENT_CATEGORIES: "AMPLITUDE_GET_EVENT_CATEGORIES",
    /**
     * Get a specific event type from amplitude by name. this action allows you to: - retrieve detailed information about a single event type - get all properties and metadata for the event key features: - retrieves comprehensive event type details - returns metadata like category, description, and settings - supports lookup by exact event name
     */
    GET_EVENT_TYPE: "AMPLITUDE_GET_EVENT_TYPE",
    /**
     * Get all event types from amplitude. this action allows you to: - retrieve all event types in your project - optionally include deleted events
     */
    GET_EVENT_TYPES: "AMPLITUDE_GET_EVENT_TYPES",
    /**
     * Update user properties using amplitude's identify api. this action allows you to: - set or update the user id for a device id - update user properties without sending an event - perform operations on user properties (set, append, etc.) - update user attributes like device info and location
     */
    IDENTIFY: "AMPLITUDE_IDENTIFY",
    /**
     * List all discoverable cohorts for an amplitude project. this action allows you to: - get a list of all cohorts in your amplitude project - optionally include sync information for each cohort key features: - returns cohort details including id, name, size, and definition - optionally includes sync metadata for integration with other tools - supports eu data residency
     */
    LIST_COHORTS: "AMPLITUDE_LIST_COHORTS",
    /**
     * Restore a deleted event type in amplitude. this action allows you to: - restore a previously deleted event type - make the event available again in the ui and api key features: - undoes the deletion of an event type - returns success/failure status
     */
    RESTORE_EVENT_TYPE: "AMPLITUDE_RESTORE_EVENT_TYPE",
    /**
     * Send events to amplitude using the http v2 api. this action allows you to send events to amplitude for tracking user behavior and analytics. it supports all amplitude event fields, handles proper validation, and includes comprehensive error handling.
     */
    SEND_EVENTS: "AMPLITUDE_SEND_EVENTS",
    /**
     * Incrementally update cohort membership by adding or removing ids. this action allows you to: - add new ids to an existing cohort - remove ids from an existing cohort - perform multiple operations in a single request
     */
    UPDATE_COHORT_MEMBERSHIP: "AMPLITUDE_UPDATE_COHORT_MEMBERSHIP",
    /**
     * Update an existing event category in amplitude. this action allows you to: - update the name of an existing event category - validate the new category name key features: - updates category names - returns success/failure status
     */
    UPDATE_EVENT_CATEGORY: "AMPLITUDE_UPDATE_EVENT_CATEGORY",
    /**
     * Update an existing event type in amplitude. this action allows you to: - change event type properties - update event name, category, metadata, and settings - modify display name for ingested events key features: - updates event type configuration - supports partial updates (only specified fields are changed)
     */
    UPDATE_EVENT_TYPE: "AMPLITUDE_UPDATE_EVENT_TYPE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AMPLITUDE".
 */
export type AMPLITUDE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AMPLITUDE".
 */
export type AMPLITUDE_TRIGGER_EVENTS = {}
