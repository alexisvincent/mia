// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KOMMO's KOMMO_CREATE_COMPANY tool input.
 */
type KOMMO_CREATE_COMPANY_INPUT = {
  /**
   * Created At
   * @description Company creation date (Unix Timestamp)
   * @default null
   */
  created_at: number | null;
  /**
   * Created By
   * @description ID of the user who created the company
   * @default null
   */
  created_by: number | null;
  /**
   * Custom Fields Values
   * @description An array of the current company custom fields' values
   * @default null
   */
  custom_fields_values: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Name
   * @description Company name
   */
  name?: string;
  /**
   * Request Id
   * @description This field will be returned unchanged in the response
   * @default null
   */
  request_id: string | null;
  /**
   * Responsible User Id
   * @description Company responsible user ID
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * Tags To Add
   * @description Array of tags to add. Provide either tag name or ID
   * @default null
   */
  tags_to_add: {
      /**
       * Id
       * @description Tag ID
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Tag name
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Updated At
   * @description Company update date (Unix Timestamp)
   * @default null
   */
  updated_at: number | null;
  /**
   * Updated By
   * @description ID of the user who last updated the company
   * @default null
   */
  updated_by: number | null;
};

/**
 * Type of KOMMO's KOMMO_CREATE_COMPANY tool output.
 */
type KOMMO_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo companies creation endpoint
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
 * Type of KOMMO's KOMMO_CREATE_CONTACT tool input.
 */
type KOMMO_CREATE_CONTACT_INPUT = {
  /**
   * Contacts
   * @description List of contacts to create
   */
  contacts?: {
      /**
       * Created At
       * @description Contact creation date (Unix Timestamp)
       * @default null
       */
      created_at: number | null;
      /**
       * Created By
       * @description ID of the user who created the contact
       * @default null
       */
      created_by: number | null;
      /**
       * Custom Fields Values
       * @description An array of the current contact custom fields' values
       * @default null
       */
      custom_fields_values: {
          [key: string]: unknown;
      }[] | null;
      /**
       * First Name
       * @description Contact first name
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Contact last name
       * @default null
       */
      last_name: string | null;
      /**
       * Name
       * @description Contact fullname
       * @default null
       */
      name: string | null;
      /**
       * Responsible User Id
       * @description Contact responsible user ID
       * @default null
       */
      responsible_user_id: number | null;
      /**
       * Updated At
       * @description Contact update date (Unix Timestamp)
       * @default null
       */
      updated_at: number | null;
      /**
       * Updated By
       * @description ID of the user who updated the contact last
       * @default null
       */
      updated_by: number | null;
  }[];
};

/**
 * Type of KOMMO's KOMMO_CREATE_CONTACT tool output.
 */
type KOMMO_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo contact creation endpoint
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
 * Type of KOMMO's KOMMO_CREATE_LEAD tool input.
 */
type KOMMO_CREATE_LEAD_INPUT = {
  /**
   * Closed At
   * @description Lead closure date (Unix Timestamp)
   * @default null
   */
  closed_at: number | null;
  /**
   * Created At
   * @description Lead creation date (Unix Timestamp)
   * @default null
   */
  created_at: number | null;
  /**
   * Created By
   * @description The ID of the user creating the lead. When passing 0, lead will be created by robot
   * @default null
   */
  created_by: number | null;
  /**
   * Custom Fields Values
   * @description An array of the current lead custom fields' values
   * @default null
   */
  custom_fields_values: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Loss Reason Id
   * @description Lead loss reason ID
   * @default null
   */
  loss_reason_id: number | null;
  /**
   * Name
   * @description Lead name
   */
  name?: string;
  /**
   * Pipeline Id
   * @description Pipeline ID the lead is added to
   * @default null
   */
  pipeline_id: number | null;
  /**
   * Price
   * @description Lead sale
   * @default null
   */
  price: number | null;
  /**
   * Responsible User Id
   * @description Lead responsible user ID
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * Status Id
   * @description Stage ID the lead is added to. The first stage of the main pipeline by default
   * @default null
   */
  status_id: number | null;
  /**
   * Tags To Add
   * @description Array of tags to add. Provide either tag name or ID
   * @default null
   */
  tags_to_add: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Tags To Delete
   * @description Array of tags to delete. Provide either tag name or ID
   * @default null
   */
  tags_to_delete: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Updated At
   * @description Lead update date (Unix Timestamp)
   * @default null
   */
  updated_at: number | null;
  /**
   * Updated By
   * @description The ID of the user updating the lead. When passing 0, lead will be updated by robot
   * @default null
   */
  updated_by: number | null;
};

/**
 * Type of KOMMO's KOMMO_CREATE_LEAD tool output.
 */
type KOMMO_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo lead creation endpoint
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
 * Type of KOMMO's KOMMO_CREATE_TASK tool input.
 */
type KOMMO_CREATE_TASK_INPUT = {
  /**
   * Complete Till
   * @description Task deadline date in Unix Timestamp format
   * @default null
   */
  complete_till: number | null;
  /**
   * Created At
   * @description Task creation date in Unix Timestamp format
   * @default null
   */
  created_at: number | null;
  /**
   * Created By
   * @description ID of the user who created the task
   * @default null
   */
  created_by: number | null;
  /**
   * Duration
   * @description Task duration in seconds
   * @default null
   */
  duration: number | null;
  /**
   * Entity Id
   * @description ID of the entity the task is linked to
   * @default null
   */
  entity_id: number | null;
  /**
   * Entity Type
   * @description Type of the entity the task is linked to
   * @default null
   */
  entity_type: string | null;
  /**
   * Responsible User Id
   * @description Task responsible user ID
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * Task Type Id
   * @description Task type
   * @default null
   */
  task_type_id: number | null;
  /**
   * Text
   * @description Task description
   */
  text?: string;
  /**
   * Updated At
   * @description Task edit date in Unix Timestamp format
   * @default null
   */
  updated_at: number | null;
  /**
   * Updated By
   * @description ID of the user who edited the task last
   * @default null
   */
  updated_by: number | null;
};

/**
 * Type of KOMMO's KOMMO_CREATE_TASK tool output.
 */
type KOMMO_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo task creation endpoint
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
 * Type of KOMMO's KOMMO_LIST_COMPANIES tool input.
 */
type KOMMO_LIST_COMPANIES_INPUT = {
  /**
   * Filter
   * @description Filter parameters for companies
   * @default null
   */
  filter: {
      [key: string]: unknown;
  } | null;
  /**
   * Limit
   * @description Number of entities to return (max 250)
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sorting options. Example: {'field': 'updated_at', 'direction': 'asc'}
   * @default null
   */
  order: {
      [key: string]: string;
  } | null;
  /**
   * Page
   * @description Page of response
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query (searches through custom fields values)
   * @default null
   */
  query: string | null;
  /**
   * With Params
   * @description Additional data to include in response (leads, contacts, catalog_elements)
   * @default []
   */
  with_params: string[] | null;
};

/**
 * Type of KOMMO's KOMMO_LIST_COMPANIES tool output.
 */
type KOMMO_LIST_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo companies endpoint
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
 * Type of KOMMO's KOMMO_LIST_CONTACTS tool input.
 */
type KOMMO_LIST_CONTACTS_INPUT = {
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_closest_task_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * Filter Created At
   * @description Filter by creation date (Unix timestamp)
   * @default null
   */
  filter_created_at: number | null;
  /**
   * Filter Created By
   * @description Filter by IDs of users who created the contacts
   * @default null
   */
  filter_created_by: number[] | null;
  /**
   * Filter Ids
   * @description Filter by contact IDs
   * @default null
   */
  filter_ids: number[] | null;
  /**
   * Filter Names
   * @description Filter by contact names
   * @default null
   */
  filter_names: string[] | null;
  /**
   * Filter Responsible User Ids
   * @description Filter by responsible user IDs
   * @default null
   */
  filter_responsible_user_ids: number[] | null;
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_updated_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * Filter Updated By
   * @description Filter by IDs of users who last updated the contacts
   * @default null
   */
  filter_updated_by: number[] | null;
  /**
   * Limit
   * @description Number of entities to return (max 250)
   * @default null
   */
  limit: number | null;
  /**
   * Order By Id
   * @description Sort by id (asc/desc)
   * @default null
   */
  order_by_id: string | null;
  /**
   * Order By Updated At
   * @description Sort by updated_at (asc/desc)
   * @default null
   */
  order_by_updated_at: string | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query (searches through custom fields values)
   * @default null
   */
  query: string | null;
  /**
   * With Params
   * @description Additional data to include in response (leads, catalog_elements)
   * @default null
   */
  with_params: string[] | null;
};

/**
 * Type of KOMMO's KOMMO_LIST_CONTACTS tool output.
 */
type KOMMO_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo contacts endpoint
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
 * Type of KOMMO's KOMMO_LIST_CUSTOM_FIELDS tool input.
 */
type KOMMO_LIST_CUSTOM_FIELDS_INPUT = {
  /**
   * Entity Type
   * @description The type of entity to fetch custom fields for
   */
  entity_type?: string;
};

/**
 * Type of KOMMO's KOMMO_LIST_CUSTOM_FIELDS tool output.
 */
type KOMMO_LIST_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo custom fields endpoint
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
 * Type of KOMMO's KOMMO_LIST_LEADS tool input.
 */
type KOMMO_LIST_LEADS_INPUT = {
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_closed_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_closest_task_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_created_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * Filter Created By
   * @description Filter by IDs of users who created the leads
   * @default null
   */
  filter_created_by: number[] | null;
  /**
   * Filter Ids
   * @description Filter by lead IDs
   * @default null
   */
  filter_ids: number[] | null;
  /**
   * Filter Names
   * @description Filter by lead names
   * @default null
   */
  filter_names: string[] | null;
  /**
   * Filter Pipeline Ids
   * @description Filter by pipeline IDs
   * @default null
   */
  filter_pipeline_ids: number[] | null;
  /**
   * Filter Price
   * @description Filter by lead price
   * @default null
   */
  filter_price: number | null;
  /**
   * Filter Responsible User Ids
   * @description Filter by responsible user IDs
   * @default null
   */
  filter_responsible_user_ids: number[] | null;
  /**
   * StatusFilter
   * @description Model for status filters in a specific pipeline.
   * @default null
   */
  filter_status: {
      /**
       * Pipeline Id
       * @description Pipeline ID to filter by
       */
      pipeline_id: number;
      /**
       * Status Id
       * @description Status ID within the pipeline to filter by
       */
      status_id: number;
  } | null;
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_updated_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * Filter Updated By
   * @description Filter by IDs of users who last updated the leads
   * @default null
   */
  filter_updated_by: number[] | null;
  /**
   * Limit
   * @description Number of entities to return (max 250)
   * @default null
   */
  limit: number | null;
  /**
   * Order By Created At
   * @description Sort by created_at (asc/desc)
   * @default null
   */
  order_by_created_at: string | null;
  /**
   * Order By Id
   * @description Sort by id (asc/desc)
   * @default null
   */
  order_by_id: string | null;
  /**
   * Order By Updated At
   * @description Sort by updated_at (asc/desc)
   * @default null
   */
  order_by_updated_at: string | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query (searches through filled fields of the entity)
   * @default null
   */
  query: string | null;
  /**
   * With Params
   * @description Additional data to include in response (contacts, only_deleted, loss_reason, is_price_modified_by_robot, catalog_elements, source_id)
   * @default null
   */
  with_params: string[] | null;
};

/**
 * Type of KOMMO's KOMMO_LIST_LEADS tool output.
 */
type KOMMO_LIST_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo leads endpoint
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
 * Type of KOMMO's KOMMO_LIST_LEADS_PIPELINES tool input.
 */
type KOMMO_LIST_LEADS_PIPELINES_INPUT = object;

/**
 * Type of KOMMO's KOMMO_LIST_LEADS_PIPELINES tool output.
 */
type KOMMO_LIST_LEADS_PIPELINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo leads pipelines endpoint
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
 * Type of KOMMO's KOMMO_LIST_PIPELINE_STAGES tool input.
 */
type KOMMO_LIST_PIPELINE_STAGES_INPUT = {
  /**
   * Pipeline Id
   * @description Pipeline ID
   */
  pipeline_id?: number;
  /**
   * With Description
   * @description Whether to include stage description in the response
   * @default null
   */
  with_description: boolean | null;
};

/**
 * Type of KOMMO's KOMMO_LIST_PIPELINE_STAGES tool output.
 */
type KOMMO_LIST_PIPELINE_STAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo pipeline stages endpoint
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
 * Type of KOMMO's KOMMO_LIST_TASKS tool input.
 */
type KOMMO_LIST_TASKS_INPUT = {
  /**
   * Filter Entity Ids
   * @description Filter by entity IDs the task is linked to
   * @default null
   */
  filter_entity_ids: number[] | null;
  /**
   * Filter Entity Type
   * @description Filter by entity type the task is linked to
   * @default null
   */
  filter_entity_type: string | null;
  /**
   * Filter Ids
   * @description Filter by task IDs
   * @default null
   */
  filter_ids: number[] | null;
  /**
   * Filter Is Completed
   * @description Filter by task status (1 - completed, 0 - open)
   * @default null
   */
  filter_is_completed: number | null;
  /**
   * Filter Responsible User Ids
   * @description Filter by task responsible user IDs
   * @default null
   */
  filter_responsible_user_ids: number[] | null;
  /**
   * Filter Task Types
   * @description Filter by task type IDs
   * @default null
   */
  filter_task_types: number[] | null;
  /**
   * DateRangeFilter
   * @description Model for date range filters in Unix timestamp format.
   * @default null
   */
  filter_updated_at: {
      /**
       * From
       * @description Start of the date range in Unix timestamp format
       * @default null
       */
      from: number | null;
      /**
       * To
       * @description End of the date range in Unix timestamp format
       * @default null
       */
      to: number | null;
  } | null;
  /**
   * Limit
   * @description Number of entities to return (max 250)
   * @default null
   */
  limit: number | null;
  /**
   * Order By Complete Till
   * @description Sort by complete_till (asc/desc)
   * @default null
   */
  order_by_complete_till: string | null;
  /**
   * Order By Created At
   * @description Sort by created_at (asc/desc)
   * @default null
   */
  order_by_created_at: string | null;
  /**
   * Order By Id
   * @description Sort by id (asc/desc)
   * @default null
   */
  order_by_id: string | null;
  /**
   * Page
   * @description Page number
   * @default null
   */
  page: number | null;
};

/**
 * Type of KOMMO's KOMMO_LIST_TASKS tool output.
 */
type KOMMO_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo tasks endpoint
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
 * Type of KOMMO's KOMMO_UPDATE_COMPANY tool input.
 */
type KOMMO_UPDATE_COMPANY_INPUT = {
  /**
   * Company Id
   * @description ID of the company to update
   */
  company_id?: number;
  /**
   * Created At
   * @description Company creation date (Unix Timestamp)
   * @default null
   */
  created_at: number | null;
  /**
   * Created By
   * @description ID of the user who created the company
   * @default null
   */
  created_by: number | null;
  /**
   * Custom Fields Values
   * @description An array of the current company custom fields' values
   * @default null
   */
  custom_fields_values: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Name
   * @description Company name
   * @default null
   */
  name: string | null;
  /**
   * Request Id
   * @description This field will be returned unchanged in the response
   * @default null
   */
  request_id: string | null;
  /**
   * Responsible User Id
   * @description Company responsible user ID
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * Tags To Add
   * @description Array of tags to add. Provide either tag name or ID
   * @default null
   */
  tags_to_add: {
      /**
       * Id
       * @description Tag ID
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Tag name
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Updated At
   * @description Company update date (Unix Timestamp)
   * @default null
   */
  updated_at: number | null;
  /**
   * Updated By
   * @description ID of the user who last updated the company
   * @default null
   */
  updated_by: number | null;
};

/**
 * Type of KOMMO's KOMMO_UPDATE_COMPANY tool output.
 */
type KOMMO_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo company update endpoint
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
 * Type of KOMMO's KOMMO_UPDATE_CONTACT tool input.
 */
type KOMMO_UPDATE_CONTACT_INPUT = {
  /**
   * Created At
   * @description Contact creation date (Unix Timestamp)
   * @default null
   */
  created_at: number | null;
  /**
   * Created By
   * @description ID of the user who created the contact
   * @default null
   */
  created_by: number | null;
  /**
   * Custom Fields Values
   * @description An array of the current contact custom fields' values
   * @default null
   */
  custom_fields_values: unknown[] | null;
  /**
   * First Name
   * @description Contact first name
   * @default null
   */
  first_name: string | null;
  /**
   * Id
   * @description Contact ID
   */
  id?: number;
  /**
   * Last Name
   * @description Contact last name
   * @default null
   */
  last_name: string | null;
  /**
   * Name
   * @description Contact full name
   * @default null
   */
  name: string | null;
  /**
   * Request Id
   * @description Field that will be returned unchanged in the response
   * @default null
   */
  request_id: string | null;
  /**
   * Responsible User Id
   * @description Contact responsible user ID
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * Updated At
   * @description Contact update date (Unix Timestamp)
   * @default null
   */
  updated_at: number | null;
  /**
   * Updated By
   * @description ID of the user who updated the contact last
   * @default null
   */
  updated_by: number | null;
};

/**
 * Type of KOMMO's KOMMO_UPDATE_CONTACT tool output.
 */
type KOMMO_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo contact update endpoint
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
 * Type of KOMMO's KOMMO_UPDATE_LEAD tool input.
 */
type KOMMO_UPDATE_LEAD_INPUT = {
  /**
   * Closed At
   * @description Lead closure date (Unix Timestamp)
   * @default null
   */
  closed_at: number | null;
  /**
   * Created At
   * @description Lead creation date (Unix Timestamp)
   * @default null
   */
  created_at: number | null;
  /**
   * Created By
   * @description The ID of the user creating the lead. When passing 0, lead will be created by robot
   * @default null
   */
  created_by: number | null;
  /**
   * Custom Fields Values
   * @description An array of the current lead custom fields' values
   * @default null
   */
  custom_fields_values: unknown[] | null;
  /**
   * Id
   * @description Lead ID
   */
  id?: number;
  /**
   * Loss Reason Id
   * @description Lead loss reason ID
   * @default null
   */
  loss_reason_id: number | null;
  /**
   * Name
   * @description Lead name
   * @default null
   */
  name: string | null;
  /**
   * Pipeline Id
   * @description Pipeline ID the lead is added to
   * @default null
   */
  pipeline_id: number | null;
  /**
   * Price
   * @description Lead sale
   * @default null
   */
  price: number | null;
  /**
   * Request Id
   * @description Field that will be returned unchanged in the response
   * @default null
   */
  request_id: string | null;
  /**
   * Responsible User Id
   * @description Lead responsible user ID
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * Status Id
   * @description Stage ID the lead is added to, the first stage of the main pipeline by default
   * @default null
   */
  status_id: number | null;
  /**
   * Tags To Add
   * @description Array of tags to add. Provide either tag name or ID
   * @default null
   */
  tags_to_add: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Tags To Delete
   * @description Array of tags to delete. Provide either tag name or ID
   * @default null
   */
  tags_to_delete: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Updated At
   * @description Lead update date (Unix Timestamp)
   * @default null
   */
  updated_at: number | null;
  /**
   * Updated By
   * @description The ID of the user updating the lead. When passing 0, lead will be updated by robot
   * @default null
   */
  updated_by: number | null;
};

/**
 * Type of KOMMO's KOMMO_UPDATE_LEAD tool output.
 */
type KOMMO_UPDATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo lead update endpoint
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
 * Type of KOMMO's KOMMO_UPDATE_TASK tool input.
 */
type KOMMO_UPDATE_TASK_INPUT = {
  /**
   * Complete Till
   * @description Task deadline date in Unix Timestamp format
   * @default null
   */
  complete_till: number | null;
  /**
   * Duration
   * @description Task duration in seconds
   * @default null
   */
  duration: number | null;
  /**
   * Entity Id
   * @description ID of the entity the task is linked to
   * @default null
   */
  entity_id: number | null;
  /**
   * Entity Type
   * @description Type of the entity the task is linked to
   * @default null
   */
  entity_type: string | null;
  /**
   * Id
   * @description Task ID
   */
  id?: number;
  /**
   * Is Completed
   * @description Defines whether the task is completed
   * @default null
   */
  is_completed: boolean | null;
  /**
   * Responsible User Id
   * @description Task responsible user ID. Current user ID by default
   * @default null
   */
  responsible_user_id: number | null;
  /**
   * TaskResult
   * @description Model for task result data.
   * @default null
   */
  result: {
      /**
       * Text
       * @description Task result text
       * @default null
       */
      text: string | null;
  } | null;
  /**
   * Task Type Id
   * @description Task type
   * @default null
   */
  task_type_id: number | null;
  /**
   * Text
   * @description Task description
   * @default null
   */
  text: string | null;
};

/**
 * Type of KOMMO's KOMMO_UPDATE_TASK tool output.
 */
type KOMMO_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON data from the Kommo task update endpoint
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
 * Type map of all available tool input types for toolkit "KOMMO".
 */
export type KOMMO_TOOL_INPUTS = {
  CREATE_COMPANY: KOMMO_CREATE_COMPANY_INPUT
  CREATE_CONTACT: KOMMO_CREATE_CONTACT_INPUT
  CREATE_LEAD: KOMMO_CREATE_LEAD_INPUT
  CREATE_TASK: KOMMO_CREATE_TASK_INPUT
  LIST_COMPANIES: KOMMO_LIST_COMPANIES_INPUT
  LIST_CONTACTS: KOMMO_LIST_CONTACTS_INPUT
  LIST_CUSTOM_FIELDS: KOMMO_LIST_CUSTOM_FIELDS_INPUT
  LIST_LEADS: KOMMO_LIST_LEADS_INPUT
  LIST_LEADS_PIPELINES: KOMMO_LIST_LEADS_PIPELINES_INPUT
  LIST_PIPELINE_STAGES: KOMMO_LIST_PIPELINE_STAGES_INPUT
  LIST_TASKS: KOMMO_LIST_TASKS_INPUT
  UPDATE_COMPANY: KOMMO_UPDATE_COMPANY_INPUT
  UPDATE_CONTACT: KOMMO_UPDATE_CONTACT_INPUT
  UPDATE_LEAD: KOMMO_UPDATE_LEAD_INPUT
  UPDATE_TASK: KOMMO_UPDATE_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KOMMO".
 */
export type KOMMO_TOOL_OUTPUTS = {
  CREATE_COMPANY: KOMMO_CREATE_COMPANY_OUTPUT
  CREATE_CONTACT: KOMMO_CREATE_CONTACT_OUTPUT
  CREATE_LEAD: KOMMO_CREATE_LEAD_OUTPUT
  CREATE_TASK: KOMMO_CREATE_TASK_OUTPUT
  LIST_COMPANIES: KOMMO_LIST_COMPANIES_OUTPUT
  LIST_CONTACTS: KOMMO_LIST_CONTACTS_OUTPUT
  LIST_CUSTOM_FIELDS: KOMMO_LIST_CUSTOM_FIELDS_OUTPUT
  LIST_LEADS: KOMMO_LIST_LEADS_OUTPUT
  LIST_LEADS_PIPELINES: KOMMO_LIST_LEADS_PIPELINES_OUTPUT
  LIST_PIPELINE_STAGES: KOMMO_LIST_PIPELINE_STAGES_OUTPUT
  LIST_TASKS: KOMMO_LIST_TASKS_OUTPUT
  UPDATE_COMPANY: KOMMO_UPDATE_COMPANY_OUTPUT
  UPDATE_CONTACT: KOMMO_UPDATE_CONTACT_OUTPUT
  UPDATE_LEAD: KOMMO_UPDATE_LEAD_OUTPUT
  UPDATE_TASK: KOMMO_UPDATE_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KOMMO toolkit.
 */
export const KOMMO = {
  slug: "kommo",
  tools: {
    /**
     * Action to add one or more companies into the kommo account.
     */
    CREATE_COMPANY: "KOMMO_CREATE_COMPANY",
    /**
     * Action to create one or more contacts in kommo crm.
     */
    CREATE_CONTACT: "KOMMO_CREATE_CONTACT",
    /**
     * Action to create one or more leads in kommo crm.
     */
    CREATE_LEAD: "KOMMO_CREATE_LEAD",
    /**
     * Action to create a task in kommo crm.
     */
    CREATE_TASK: "KOMMO_CREATE_TASK",
    /**
     * Action to list kommo companies with various filter options.
     */
    LIST_COMPANIES: "KOMMO_LIST_COMPANIES",
    /**
     * Action to list contacts in kommo crm.
     */
    LIST_CONTACTS: "KOMMO_LIST_CONTACTS",
    /**
     * Action to list custom fields in kommo crm.
     */
    LIST_CUSTOM_FIELDS: "KOMMO_LIST_CUSTOM_FIELDS",
    /**
     * Action to list leads in kommo crm.
     */
    LIST_LEADS: "KOMMO_LIST_LEADS",
    /**
     * Action to list lead pipelines in kommo crm.
     */
    LIST_LEADS_PIPELINES: "KOMMO_LIST_LEADS_PIPELINES",
    /**
     * Action to list stages of a pipeline in kommo crm.
     */
    LIST_PIPELINE_STAGES: "KOMMO_LIST_PIPELINE_STAGES",
    /**
     * Action to list tasks in kommo crm.
     */
    LIST_TASKS: "KOMMO_LIST_TASKS",
    /**
     * Action to update a single company in kommo crm.
     */
    UPDATE_COMPANY: "KOMMO_UPDATE_COMPANY",
    /**
     * Action to update contacts in kommo crm.
     */
    UPDATE_CONTACT: "KOMMO_UPDATE_CONTACT",
    /**
     * Action to update a lead in kommo crm.
     */
    UPDATE_LEAD: "KOMMO_UPDATE_LEAD",
    /**
     * Action to update a task in kommo crm.
     */
    UPDATE_TASK: "KOMMO_UPDATE_TASK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KOMMO".
 */
export type KOMMO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KOMMO".
 */
export type KOMMO_TRIGGER_EVENTS = {}
