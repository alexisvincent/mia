// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIMLA_COM's SIMLA_COM_CREATE_CUSTOMER tool input.
 */
type SIMLA_COM_CREATE_CUSTOMER_INPUT = {
  /**
   * Customer
   * @description The customer object to create
   */
  customer?: {
      /**
       * Address
       * @description Customer's address details
       * @default null
       */
      address: {
          /**
           * Block
           * @description Block or section
           * @default null
           */
          block: string | null;
          /**
           * Building
           * @description Building number
           * @default null
           */
          building: string | null;
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * Country Iso
           * @description Country ISO code (e.g., 'US')
           * @default null
           */
          countryIso: string | null;
          /**
           * Flat
           * @description Apartment or suite number
           * @default null
           */
          flat: string | null;
          /**
           * Floor
           * @description Floor number
           * @default null
           */
          floor: string | null;
          /**
           * House
           * @description House number
           * @default null
           */
          house: string | null;
          /**
           * Housing
           * @description Housing information
           * @default null
           */
          housing: string | null;
          /**
           * Index
           * @description Postal code
           * @default null
           */
          index: string | null;
          /**
           * Intercom Code
           * @description Intercom code
           * @default null
           */
          intercomCode: string | null;
          /**
           * Metro
           * @description Nearest metro station
           * @default null
           */
          metro: string | null;
          /**
           * Notes
           * @description Additional notes
           * @default null
           */
          notes: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Street
           * @description Street name
           * @default null
           */
          street: string | null;
      } | null;
      /**
       * Birthday
       * @description Customer's date of birth in 'Y-m-d' format
       * @default null
       */
      birthday: string | null;
      /**
       * Custom Fields
       * @description Custom fields associated with the customer
       * @default null
       */
      customFields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Customer's email address
       * @default null
       */
      email: string | null;
      /**
       * External Id
       * @description External identifier for the customer
       * @default null
       */
      externalId: string | null;
      /**
       * First Name
       * @description Customer's first name
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Customer's last name
       * @default null
       */
      lastName: string | null;
      /**
       * Phone
       * @description Customer's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Sex
       * @description Customer's gender; 'male' or 'female'
       * @default null
       * @enum {string|null}
       */
      sex: "male" | "female" | null;
  };
};

/**
 * Type of SIMLA_COM's SIMLA_COM_CREATE_CUSTOMER tool output.
 */
type SIMLA_COM_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * External Id
       * @description External identifier of the created customer, if provided
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description Unique identifier of the created customer
       */
      id: number;
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_CREATE_CUSTOM_FIELD tool input.
 */
type SIMLA_COM_CREATE_CUSTOM_FIELD_INPUT = {
  /**
   * Code
   * @description Symbolic code for the field (letters, numbers, underscores). Automatically generated if omitted.
   * @default null
   */
  code: string | null;
  /**
   * Display Area
   * @description UI area where the field is displayed. Defaults to 'Additional data' block if omitted.
   * @default null
   */
  display_area: string | null;
  /**
   * Display In Mobile App
   * @description How the field appears in the mobile app.
   * @default null
   * @enum {string|null}
   */
  display_in_mobile_app: "editable" | "not_editable" | "absent" | null;
  /**
   * Editable
   * @description Whether the field is editable after creation.
   * @default true
   */
  editable: boolean;
  /**
   * Entity
   * @description The entity to which the custom field will be added.
   * @enum {string}
   */
  entity?: "order" | "customer" | "corporate_customer" | "company";
  /**
   * In Filter
   * @description Whether the field is available in filtering UI.
   * @default false
   */
  in_filter: boolean;
  /**
   * In Group Actions
   * @description Whether the field can be used in bulk actions.
   * @default false
   */
  in_group_actions: boolean;
  /**
   * In List
   * @description Whether the field is shown in list views.
   * @default false
   */
  in_list: boolean;
  /**
   * Name
   * @description Display name of the custom field.
   */
  name?: string;
  /**
   * Required
   * @description Whether this field is mandatory.
   * @default false
   */
  required: boolean;
  /**
   * Type
   * @description Data type of the custom field.
   * @enum {string}
   */
  type?: "string" | "text" | "integer" | "number" | "bool" | "dictionary" | "date" | "email";
};

/**
 * Type of SIMLA_COM's SIMLA_COM_CREATE_CUSTOM_FIELD tool output.
 */
type SIMLA_COM_CREATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Symbolic code of the created custom field.
       */
      code: string;
      /**
       * Id
       * @description The ID of the created custom field.
       */
      id: number;
      /**
       * Success
       * @description Indicates whether the request was successful.
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
 * Type of SIMLA_COM's SIMLA_COM_CREATE_ORDER tool input.
 */
type SIMLA_COM_CREATE_ORDER_INPUT = {
  /**
   * Order
   * @description Order object with all creation parameters
   */
  order?: {
      /**
       * Custom Fields
       * @description Custom key-value fields for the order
       * @default null
       */
      customFields: {
          [key: string]: string;
      } | null;
      /**
       * Customer Comment
       * @description Comment left by the customer
       * @default null
       */
      customerComment: string | null;
      /**
       * Delivery
       * @description Delivery information for the order
       * @default null
       */
      delivery: {
          /**
           * Address
           * @description Delivery address details
           * @default null
           */
          address: {
              /**
               * Text
               * @description Full delivery address text
               * @default null
               */
              text: string | null;
          } | null;
      } | null;
      /**
       * Email
       * @description Customer email address
       * @default null
       */
      email: string | null;
      /**
       * External Id
       * @description External order ID from your system
       * @default null
       */
      externalId: string | null;
      /**
       * First Name
       * @description Customer first name
       * @default null
       */
      firstName: string | null;
      /**
       * Items
       * @description List of items to include in the order
       * @default null
       */
      items: {
          /**
           * Offer
           * @description Offer details for the item
           */
          offer: {
              /**
               * Id
               * @description Offer ID
               */
              id: number;
          };
          /**
           * Product Name
           * @description Product name
           * @default null
           */
          productName: string | null;
          /**
           * Quantity
           * @description Quantity of the product, must be greater than 0
           */
          quantity: number;
      }[] | null;
      /**
       * Last Name
       * @description Customer last name
       * @default null
       */
      lastName: string | null;
      /**
       * Order Method
       * @description Method by which the order was placed
       * @default null
       */
      orderMethod: string | null;
      /**
       * Order Type
       * @description Type of the order
       * @default null
       */
      orderType: string | null;
      /**
       * Patronymic
       * @description Customer patronymic (middle name)
       * @default null
       */
      patronymic: string | null;
      /**
       * Phone
       * @description Customer phone number
       * @default null
       */
      phone: string | null;
      /**
       * Status
       * @description Initial status of the order
       * @default null
       */
      status: string | null;
  };
  /**
   * Site
   * @description Site code (optional)
   * @default null
   */
  site: string | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_CREATE_ORDER tool output.
 */
type SIMLA_COM_CREATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any occurred
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code identifier
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Error message description
           * @default null
           */
          message: string | null;
      }[] | null;
      /**
       * External Id
       * @description External order ID echoed back if provided
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description Internal order ID if the creation succeeded
       * @default null
       */
      id: number | null;
      /**
       * Success
       * @description Indicates if the operation was successful
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
 * Type of SIMLA_COM's SIMLA_COM_CREATE_TASK tool input.
 */
type SIMLA_COM_CREATE_TASK_INPUT = {
  /**
   * Comment
   * @description Additional comment for the task
   * @default null
   */
  comment: string | null;
  /**
   * Customer
   * @description Customer reference for the task
   * @default null
   */
  customer: {
      /**
       * External Id
       * @description Customer external identifier
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description Customer ID
       * @default null
       */
      id: number | null;
  } | null;
  /**
   * Deadline
   * @description Task deadline in ISO 8601 datetime format
   * @default null
   */
  deadline: string | null;
  /**
   * Entity
   * @description Related entity reference for the task
   * @default null
   */
  entity: {
      /**
       * Id
       * @description Related entity ID
       * @default null
       */
      id: number | null;
      /**
       * Type
       * @description Related entity type, e.g., 'order'
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Task Type
   * @description Type/identifier of the task
   */
  taskType?: string;
  /**
   * Text
   * @description Task description text
   */
  text?: string;
  /**
   * User Ids
   * @description IDs of users assigned to the task
   */
  userIds?: number[];
};

/**
 * Type of SIMLA_COM's SIMLA_COM_CREATE_TASK tool output.
 */
type SIMLA_COM_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the newly created task
       */
      id: number;
      /**
       * Success
       * @description Indicates if creation was successful
       */
      success: boolean;
      /**
       * Task
       * @description Created task object
       */
      task: {
          /**
           * Comment
           * @description Additional comment
           * @default null
           */
          comment: string | null;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          createdAt: string | null;
          /**
           * CustomerResponse
           * @description Customer reference
           * @default null
           */
          customer: {
              /**
               * External Id
               * @description Customer external identifier
               * @default null
               */
              externalId: string | null;
              /**
               * Id
               * @description Customer ID
               * @default null
               */
              id: number | null;
          } | null;
          /**
           * Deadline
           * @description ISO 8601 deadline timestamp
           * @default null
           */
          deadline: string | null;
          /**
           * EntityResponse
           * @description Related entity reference
           * @default null
           */
          entity: {
              /**
               * Id
               * @description Related entity ID
               * @default null
               */
              id: number | null;
              /**
               * Type
               * @description Related entity type
               * @default null
               */
              type: string | null;
          } | null;
          /**
           * Id
           * @description ID of the created task
           */
          id: number;
          /**
           * Status
           * @description Current task status
           * @default null
           */
          status: string | null;
          /**
           * Task Type
           * @description Task type identifier
           */
          taskType: string;
          /**
           * Text
           * @description Task description text
           */
          text: string;
          /**
           * Updated At
           * @description Last updated timestamp
           * @default null
           */
          updatedAt: string | null;
          /**
           * User Ids
           * @description Assigned user IDs
           */
          userIds: number[];
      } & {
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
 * Type of SIMLA_COM's SIMLA_COM_EDIT_CUSTOMER tool input.
 */
type SIMLA_COM_EDIT_CUSTOMER_INPUT = {
  /**
   * Address
   * @description Customer's address details
   * @default null
   */
  address: {
      /**
       * Block
       * @description Block or section
       * @default null
       */
      block: string | null;
      /**
       * Building
       * @description Building number
       * @default null
       */
      building: string | null;
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Country Iso
       * @description Country ISO code (e.g., 'US')
       * @default null
       */
      countryIso: string | null;
      /**
       * Flat
       * @description Apartment or suite number
       * @default null
       */
      flat: string | null;
      /**
       * Floor
       * @description Floor number
       * @default null
       */
      floor: string | null;
      /**
       * House
       * @description House number
       * @default null
       */
      house: string | null;
      /**
       * Housing
       * @description Housing information
       * @default null
       */
      housing: string | null;
      /**
       * Index
       * @description Postal code
       * @default null
       */
      index: string | null;
      /**
       * Intercom Code
       * @description Intercom code
       * @default null
       */
      intercomCode: string | null;
      /**
       * Metro
       * @description Nearest metro station
       * @default null
       */
      metro: string | null;
      /**
       * Notes
       * @description Additional notes
       * @default null
       */
      notes: string | null;
      /**
       * Region
       * @description Region or state
       * @default null
       */
      region: string | null;
      /**
       * Street
       * @description Street name
       * @default null
       */
      street: string | null;
  } | null;
  /**
   * Birthday
   * @description Customer's date of birth in 'Y-m-d' format
   * @default null
   */
  birthday: string | null;
  /**
   * Custom Fields
   * @description Custom fields associated with the customer
   * @default null
   */
  customFields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * @description Customer's email address
   * @default null
   */
  email: string | null;
  /**
   * External Id
   * @description External identifier of the customer to edit
   */
  externalId?: string;
  /**
   * First Name
   * @description Customer's first name
   * @default null
   */
  firstName: string | null;
  /**
   * Last Name
   * @description Customer's last name
   * @default null
   */
  lastName: string | null;
  /**
   * Phone
   * @description Customer's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Sex
   * @description Customer's gender; 'male' or 'female'
   * @default null
   * @enum {string|null}
   */
  sex: "male" | "female" | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_EDIT_CUSTOMER tool output.
 */
type SIMLA_COM_EDIT_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * External Id
       * @description External ID of the updated customer, if provided
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description Internal ID of the updated customer
       */
      id: number;
      /**
       * Success
       * @description Indicates whether the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_EDIT_CUSTOM_FIELD tool input.
 */
type SIMLA_COM_EDIT_CUSTOM_FIELD_INPUT = {
  /**
   * Code
   * @description Unique code of the custom field to edit.
   */
  code?: string;
  /**
   * Default Value
   * @description New default value for the custom field.
   * @default null
   */
  defaultValue: string | null;
  /**
   * Description
   * @description Detailed description of the custom field.
   * @default null
   */
  description: string | null;
  /**
   * Entity
   * @description The entity type to which the custom field belongs.
   * @enum {string}
   */
  entity?: "order" | "customer" | "corporate_customer" | "company";
  /**
   * Is Active
   * @description Whether the custom field is active/enabled.
   * @default null
   */
  isActive: boolean | null;
  /**
   * Is Editable
   * @description Whether the custom field is editable by users.
   * @default null
   */
  isEditable: boolean | null;
  /**
   * Is Required
   * @description Whether the custom field is required.
   * @default null
   */
  isRequired: boolean | null;
  /**
   * Is Visible
   * @description Whether the custom field is visible in UI.
   * @default null
   */
  isVisible: boolean | null;
  /**
   * Name
   * @description New display name for the custom field.
   * @default null
   */
  name: string | null;
  /**
   * Settings
   * @description Additional settings specific to the field type.
   * @default null
   */
  settings: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Sort
   * @description Sort order index; must be non-negative.
   * @default null
   */
  sort: number | null;
  /**
   * Type
   * @description Data type of the custom field.
   * @default null
   * @enum {string|null}
   */
  type: "string" | "text" | "integer" | "number" | "bool" | "dictionary" | "date" | "email" | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_EDIT_CUSTOM_FIELD tool output.
 */
type SIMLA_COM_EDIT_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Field
       * @description The updated custom field object.
       */
      customField: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description True if the edit operation succeeded.
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
 * Type of SIMLA_COM's SIMLA_COM_EDIT_ORDER tool input.
 */
type SIMLA_COM_EDIT_ORDER_INPUT = {
  /**
   * External Id
   * @description External ID of the order to edit
   */
  externalId?: string;
  /**
   * Order
   * @description Order object with fields to update
   */
  order?: {
      /**
       * Custom Fields
       * @description Custom key-value fields for the order
       * @default null
       */
      customFields: {
          [key: string]: string;
      } | null;
      /**
       * Customer Comment
       * @description Comment left by the customer
       * @default null
       */
      customerComment: string | null;
      /**
       * Delivery
       * @description Delivery information for the order
       * @default null
       */
      delivery: {
          /**
           * Address
           * @description Delivery address details
           * @default null
           */
          address: {
              /**
               * Text
               * @description Full delivery address text
               * @default null
               */
              text: string | null;
          } | null;
      } | null;
      /**
       * Email
       * @description Customer email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Customer first name
       * @default null
       */
      firstName: string | null;
      /**
       * Items
       * @description List of items to include in the order
       * @default null
       */
      items: {
          /**
           * Offer
           * @description Offer details for the item
           */
          offer: {
              /**
               * Id
               * @description Offer ID
               */
              id: number;
          };
          /**
           * Product Name
           * @description Product name
           * @default null
           */
          productName: string | null;
          /**
           * Quantity
           * @description Quantity of the product, must be greater than 0
           * @default null
           */
          quantity: number | null;
      }[] | null;
      /**
       * Last Name
       * @description Customer last name
       * @default null
       */
      lastName: string | null;
      /**
       * Order Method
       * @description Method by which the order was placed
       * @default null
       */
      orderMethod: string | null;
      /**
       * Order Type
       * @description Type of the order
       * @default null
       */
      orderType: string | null;
      /**
       * Patronymic
       * @description Customer patronymic (middle name)
       * @default null
       */
      patronymic: string | null;
      /**
       * Phone
       * @description Customer phone number in international format
       * @default null
       */
      phone: string | null;
      /**
       * Status
       * @description Order status
       * @default null
       */
      status: string | null;
  };
  /**
   * Site
   * @description Code of the site where the order belongs
   * @default null
   */
  site: string | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_EDIT_ORDER tool output.
 */
type SIMLA_COM_EDIT_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Msg
       * @description Error message if the update failed
       * @default null
       */
      errorMsg: string | null;
      /**
       * Errors
       * @description List of validation errors if any
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code identifier
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Error message description
           * @default null
           */
          message: string | null;
      }[] | null;
      /**
       * OrderResult
       * @description Represents the updated order data in the response
       * @default null
       */
      order: {
          /**
           * Custom Fields
           * @description Custom key-value fields for the order
           * @default null
           */
          customFields: {
              [key: string]: string;
          } | null;
          /**
           * Customer Comment
           * @description Comment left by the customer
           * @default null
           */
          customerComment: string | null;
          /**
           * Delivery
           * @description Delivery information for the order
           * @default null
           */
          delivery: {
              /**
               * Address
               * @description Delivery address details
               * @default null
               */
              address: {
                  /**
                   * Text
                   * @description Full delivery address text
                   * @default null
                   */
                  text: string | null;
              } | null;
          } | null;
          /**
           * Email
           * @description Customer email address
           * @default null
           */
          email: string | null;
          /**
           * External Id
           * @description External order ID
           */
          externalId: string;
          /**
           * First Name
           * @description Customer first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Internal order ID
           */
          id: number;
          /**
           * Items
           * @description List of items to include in the order
           * @default null
           */
          items: {
              /**
               * Offer
               * @description Offer details for the item
               */
              offer: {
                  /**
                   * Id
                   * @description Offer ID
                   */
                  id: number;
              };
              /**
               * Product Name
               * @description Product name
               * @default null
               */
              productName: string | null;
              /**
               * Quantity
               * @description Quantity of the product, must be greater than 0
               * @default null
               */
              quantity: number | null;
          }[] | null;
          /**
           * Last Name
           * @description Customer last name
           * @default null
           */
          lastName: string | null;
          /**
           * Number
           * @description Order number
           * @default null
           */
          number: string | null;
          /**
           * Order Method
           * @description Method by which the order was placed
           * @default null
           */
          orderMethod: string | null;
          /**
           * Order Type
           * @description Type of the order
           * @default null
           */
          orderType: string | null;
          /**
           * Patronymic
           * @description Customer patronymic (middle name)
           * @default null
           */
          patronymic: string | null;
          /**
           * Phone
           * @description Customer phone number in international format
           * @default null
           */
          phone: string | null;
          /**
           * Status
           * @description Order status
           * @default null
           */
          status: string | null;
      } | null;
      /**
       * Success
       * @description Indicates whether the update was successful
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
 * Type of SIMLA_COM's SIMLA_COM_EDIT_TASK tool input.
 */
type SIMLA_COM_EDIT_TASK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the task to edit
   */
  id?: string;
  /**
   * Task
   * @description Object containing one or more fields to update
   */
  task?: {
      /**
       * Assigned To
       * @description Identifier of the user to whom the task is assigned
       * @default null
       */
      assignedTo: string | null;
      /**
       * Description
       * @description Detailed description of the task
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date for the task in YYYY-MM-DD format
       * @default null
       */
      dueDate: string | null;
      /**
       * Status
       * @description Current status of the task
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description New title of the task
       * @default null
       */
      title: string | null;
  };
};

/**
 * Type of SIMLA_COM's SIMLA_COM_EDIT_TASK tool output.
 */
type SIMLA_COM_EDIT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the update was successful
       */
      success: boolean;
      /**
       * Task
       * @description The updated task object
       */
      task: {
          /**
           * Assigned To
           * @description Identifier of the user assigned to the task
           */
          assignedTo: string;
          /**
           * Description
           * @description Detailed description of the task
           */
          description: string;
          /**
           * Due Date
           * @description Due date in YYYY-MM-DD format
           */
          dueDate: string;
          /**
           * Id
           * @description Unique identifier of the task
           */
          id: string;
          /**
           * Status
           * @description Current status of the task
           */
          status: string;
          /**
           * Title
           * @description Title of the task
           */
          title: string;
      } & {
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
 * Type of SIMLA_COM's SIMLA_COM_GET_CUSTOMER tool input.
 */
type SIMLA_COM_GET_CUSTOMER_INPUT = {
  /**
   * By
   * @description Type of identifier provided in externalId path parameter
   * @default externalId
   * @enum {string}
   */
  by: "id" | "externalId";
  /**
   * External Id
   * @description The identifier of the customer to retrieve
   */
  externalId?: string;
  /**
   * Site
   * @description Symbolic code of the store (if applicable)
   * @default null
   */
  site: string | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_CUSTOMER tool output.
 */
type SIMLA_COM_GET_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description The requested customer details
       */
      customer: {
          /**
           * Bad
           * @description Indicates if customer is marked as problematic
           */
          bad: boolean;
          /**
           * Contragent
           * @description Requisites information for the customer (if available)
           * @default null
           */
          contragent: {
              /**
               * Contragent Type
               * @description Type of contragent
               * @default null
               */
              contragentType: string | null;
              /**
               * Legal Name
               * @description Legal name of contragent
               * @default null
               */
              legalName: string | null;
          } | null;
          /**
           * Created At
           * @description Customer creation date in ISO8601 format
           */
          createdAt: string;
          /**
           * External Id
           * @description External customer ID
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Internal customer ID
           */
          id: number;
          /**
           * Is Contact
           * @description Indicates if customer is a contact person without orders
           */
          isContact: boolean;
          /**
           * Manager Id
           * @description ID of the manager assigned to the customer
           * @default null
           */
          managerId: number | null;
          /**
           * Site
           * @description Store code from which the customer originated
           * @default null
           */
          site: string | null;
          /**
           * Type
           * @description Customer type
           */
          type: string;
          /**
           * Vip
           * @description Indicates if customer is marked as VIP
           */
          vip: boolean;
      };
      /**
       * ErrorDetail
       * @description Error details returned when a request fails
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code
           */
          code: string;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_CUSTOMERS tool input.
 */
type SIMLA_COM_GET_CUSTOMERS_INPUT = {
  /**
   * Filter[Custom Field Key]
   * @description Filter customers by a custom field key
   * @default null
   */
  "filter[customFieldKey]": string | null;
  /**
   * Filter[Email]
   * @description Filter customers by email address
   * @default null
   */
  "filter[email]": string | null;
  /**
   * Filter[Ids][]
   * @description Filter customers by a list of IDs
   * @default null
   */
  "filter[ids][]": number[] | null;
  /**
   * Limit
   * @description Number of customers to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_CUSTOMERS tool output.
 */
type SIMLA_COM_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customer objects
       */
      customers: {
          /**
           * Address
           * @description Customer address details
           * @default null
           */
          address: {
              /**
               * Block
               * @description Block or section
               * @default null
               */
              block: string | null;
              /**
               * Building
               * @description Building number
               * @default null
               */
              building: string | null;
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country Iso
               * @description Country ISO code (e.g., 'US')
               * @default null
               */
              countryIso: string | null;
              /**
               * Flat
               * @description Apartment or suite number
               * @default null
               */
              flat: string | null;
              /**
               * Floor
               * @description Floor number
               * @default null
               */
              floor: string | null;
              /**
               * House
               * @description House number
               * @default null
               */
              house: string | null;
              /**
               * Housing
               * @description Housing information
               * @default null
               */
              housing: string | null;
              /**
               * Index
               * @description Postal code
               * @default null
               */
              index: string | null;
              /**
               * Intercom Code
               * @description Intercom code
               * @default null
               */
              intercomCode: string | null;
              /**
               * Metro
               * @description Nearest metro station
               * @default null
               */
              metro: string | null;
              /**
               * Notes
               * @description Additional address notes
               * @default null
               */
              notes: string | null;
              /**
               * Region
               * @description Region or state
               * @default null
               */
              region: string | null;
              /**
               * Street
               * @description Street name
               * @default null
               */
              street: string | null;
          } | null;
          /**
           * Created At
           * @description Customer creation datetime in ISO 8601 format
           */
          createdAt: string;
          /**
           * Custom Fields
           * @description Custom fields associated with the customer
           * @default null
           */
          customFields: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Customer's email address
           * @default null
           */
          email: string | null;
          /**
           * External Id
           * @description External customer ID, if set
           * @default null
           */
          externalId: string | null;
          /**
           * First Name
           * @description Customer's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique customer identifier
           */
          id: number;
          /**
           * Last Name
           * @description Customer's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Phones
           * @description List of customer's phone numbers
           * @default null
           */
          phones: {
              /**
               * Number
               * @description Phone number of the customer
               */
              number: string;
          }[] | null;
          /**
           * Updated At
           * @description Customer last updated datetime in ISO 8601 format
           */
          updatedAt: string;
      }[];
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number returned
           */
          currentPage: number;
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Total Count
           * @description Total number of customers available
           */
          totalCount: number;
      };
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_CUSTOM_FIELDS tool input.
 */
type SIMLA_COM_GET_CUSTOM_FIELDS_INPUT = {
  /**
   * Entity
   * @description Filter by entity type (e.g., customer, order)
   * @default null
   */
  entity: string | null;
  /**
   * Filter[Code]
   * @description Filter by custom field code
   * @default null
   */
  "filter[code]": string | null;
  /**
   * Filter[Type]
   * @description Filter by custom field type
   * @default null
   */
  "filter[type]": string | null;
  /**
   * Limit
   * @description Number of records per page (default: 20, max: 250)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to return (default: 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_CUSTOM_FIELDS tool output.
 */
type SIMLA_COM_GET_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description List of custom field objects
       */
      customFields: {
          /**
           * Active
           * @description Indicates if the custom field is active
           */
          active: boolean;
          /**
           * Code
           * @description Code of the custom field
           */
          code: string;
          /**
           * Entity
           * @description Entity type this custom field belongs to
           */
          entity: string;
          /**
           * Id
           * @description Unique identifier of the custom field
           */
          id: number;
          /**
           * Is Editable
           * @description Indicates if the custom field is editable
           */
          isEditable: boolean;
          /**
           * Name
           * @description Name of the custom field
           */
          name: string;
          /**
           * Required
           * @description Indicates if the custom field is required
           */
          required: boolean;
          /**
           * Settings
           * @description Additional settings specific to the custom field
           */
          settings: {
              [key: string]: unknown;
          };
          /**
           * Sort
           * @description Sort order of the custom field
           */
          sort: number;
          /**
           * Type
           * @description Type of the custom field
           */
          type: string;
      }[];
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number returned
           */
          currentPage: number;
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Total Count
           * @description Total number of custom fields available
           */
          totalCount: number;
          /**
           * Total Page Count
           * @description Total number of pages available
           */
          totalPageCount: number;
      };
      /**
       * Success
       * @description Indicates if the API call succeeded
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
 * Type of SIMLA_COM's SIMLA_COM_GET_ORDER tool input.
 */
type SIMLA_COM_GET_ORDER_INPUT = {
  /**
   * External Id
   * @description External identifier of the order to retrieve
   */
  external_id?: string;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_ORDER tool output.
 */
type SIMLA_COM_GET_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details returned when a request fails
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code identifier
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Error message description
           * @default null
           */
          message: string | null;
      } | null;
      /**
       * OrderDetail
       * @description Detailed information about the order
       * @default null
       */
      order: {
          /**
           * Created At
           * @description Order creation time in ISO8601 format
           */
          createdAt: string;
          /**
           * Custom Fields
           * @description Custom key-value fields for the order
           * @default null
           */
          customFields: {
              [key: string]: string;
          } | null;
          /**
           * Customer Comment
           * @description Comment left by the customer
           * @default null
           */
          customerComment: string | null;
          /**
           * DeliveryDetail
           * @description Delivery information for the order
           * @default null
           */
          delivery: {
              /**
               * AddressDetail
               * @description Delivery address details
               * @default null
               */
              address: {
                  /**
                   * Text
                   * @description Full delivery address text
                   * @default null
                   */
                  text: string | null;
              } | null;
          } | null;
          /**
           * Email
           * @description Customer email address
           * @default null
           */
          email: string | null;
          /**
           * External Id
           * @description External order identifier
           */
          externalId: string;
          /**
           * First Name
           * @description Customer first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Internal order ID
           */
          id: number;
          /**
           * Items
           * @description List of items included in the order
           * @default null
           */
          items: {
              /**
               * Offer
               * @description Offer details for the item
               */
              offer: {
                  /**
                   * Id
                   * @description Offer ID
                   */
                  id: number;
              };
              /**
               * Product Name
               * @description Name of the product
               * @default null
               */
              productName: string | null;
              /**
               * Quantity
               * @description Quantity of the product ordered
               */
              quantity: number;
          }[] | null;
          /**
           * Last Name
           * @description Customer last name
           * @default null
           */
          lastName: string | null;
          /**
           * Order Method
           * @description Method by which the order was placed
           * @default null
           */
          orderMethod: string | null;
          /**
           * Order Type
           * @description Type of the order
           * @default null
           */
          orderType: string | null;
          /**
           * Patronymic
           * @description Customer patronymic (middle name)
           * @default null
           */
          patronymic: string | null;
          /**
           * Phone
           * @description Customer phone number
           * @default null
           */
          phone: string | null;
          /**
           * Status
           * @description Current status of the order
           */
          status: string;
          /**
           * Updated At
           * @description Order last update time in ISO8601 format
           */
          updatedAt: string;
      } | null;
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_ORDERS tool input.
 */
type SIMLA_COM_GET_ORDERS_INPUT = {
  /**
   * Custom Fields
   * @description Filters for custom fields, as a dict where each key is the field name and value defines min/max
   * @default null
   */
  customFields: {
      [key: string]: {
          /**
           * Max
           * @description Maximum value for this custom field filter
           * @default null
           */
          max: number | null;
          /**
           * Min
           * @description Minimum value for this custom field filter
           * @default null
           */
          min: number | null;
      };
  } | null;
  /**
   * Limit
   * @description Number of orders per page (default: 20)
   * @default null
   */
  limit: number | null;
  /**
   * Numbers
   * @description List of order numbers to filter by
   * @default null
   */
  numbers: string[] | null;
  /**
   * Page
   * @description Page number for pagination (default: 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_ORDERS tool output.
 */
type SIMLA_COM_GET_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Orders
       * @description List of orders matching the query
       */
      orders: {
          /**
           * Created At
           * @description Order creation timestamp in ISO 8601 format
           */
          createdAt: string;
          /**
           * Customer
           * @description Customer information for the order
           */
          customer: {
              /**
               * Email
               * @description Email address of the customer
               * @default null
               */
              email: string | null;
              /**
               * External Id
               * @description External ID of the customer
               * @default null
               */
              externalId: string | null;
              /**
               * First Name
               * @description First name of the customer
               * @default null
               */
              firstName: string | null;
              /**
               * Id
               * @description Customer ID
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the customer
               * @default null
               */
              lastName: string | null;
              /**
               * Phones
               * @description List of phone numbers for the customer
               */
              phones: {
                  /**
                   * Number
                   * @description Phone number
                   */
                  number: string;
              }[];
          };
          /**
           * Delivery
           * @description Delivery information for the order
           */
          delivery: {
              /**
               * Address
               * @description Delivery address details
               */
              address: {
                  /**
                   * Building
                   * @description Building number
                   * @default null
                   */
                  building: string | null;
                  /**
                   * City
                   * @description City of the address
                   * @default null
                   */
                  city: string | null;
                  /**
                   * Flat
                   * @description Flat or office number
                   * @default null
                   */
                  flat: string | null;
                  /**
                   * Index
                   * @description Postal code
                   * @default null
                   */
                  index: string | null;
                  /**
                   * Street
                   * @description Street of the address
                   * @default null
                   */
                  street: string | null;
              };
              /**
               * Code
               * @description Delivery type code
               */
              code: string;
              /**
               * Cost
               * @description Cost of delivery
               */
              cost: number;
          };
          /**
           * External Id
           * @description External order ID
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Order ID
           */
          id: number;
          /**
           * Items
           * @description List of items in the order
           */
          items: {
              /**
               * Discount
               * @description Discount applied on the item
               */
              discount: number;
              /**
               * Id
               * @description Item ID
               */
              id: number;
              /**
               * Offer
               * @description Offer details for the item
               */
              offer: {
                  /**
                   * External Id
                   * @description External ID of the offer
                   * @default null
                   */
                  externalId: string | null;
                  /**
                   * Id
                   * @description Offer ID
                   */
                  id: number;
                  /**
                   * Name
                   * @description Name of the offer
                   */
                  name: string;
              };
              /**
               * Price
               * @description Price per unit
               */
              price: number;
              /**
               * Quantity
               * @description Quantity ordered
               */
              quantity: number;
              /**
               * Total
               * @description Total price for this item
               */
              total: number;
          }[];
          /**
           * Number
           * @description Order number
           */
          number: string;
          /**
           * Status
           * @description Order status
           */
          status: string;
      }[];
      /**
       * Pagination
       * @description Pagination details for the order list
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Total Count
           * @description Total number of orders available
           */
          totalCount: number;
          /**
           * Total Page Count
           * @description Total number of pages
           */
          totalPageCount: number;
      };
      /**
       * Success
       * @description Indicates if the API call was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_PRODUCTS tool input.
 */
type SIMLA_COM_GET_PRODUCTS_INPUT = {
  /**
   * Filter[Active]
   * @description Filter active products
   * @default null
   */
  "filter[active]": boolean | null;
  /**
   * Filter[Created At From]
   * @description ISO8601 datetime; only products created after this timestamp
   * @default null
   */
  "filter[createdAtFrom]": string | null;
  /**
   * Filter[Created At To]
   * @description ISO8601 datetime; only products created before this timestamp
   * @default null
   */
  "filter[createdAtTo]": string | null;
  /**
   * Filter[External Id]
   * @description Filter by external product ID
   * @default null
   */
  "filter[externalId]": string | null;
  /**
   * Filter[Max Price]
   * @description Filter products by maximum price
   * @default null
   */
  "filter[maxPrice]": number | null;
  /**
   * Filter[Min Price]
   * @description Filter products by minimum price
   * @default null
   */
  "filter[minPrice]": number | null;
  /**
   * Filter[Name]
   * @description Filter by product name
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Filter[Quantity]
   * @description Filter by available quantity
   * @default null
   */
  "filter[quantity]": number | null;
  /**
   * Filter[Updated At From]
   * @description ISO8601 datetime; only products updated after this timestamp
   * @default null
   */
  "filter[updatedAtFrom]": string | null;
  /**
   * Filter[Updated At To]
   * @description ISO8601 datetime; only products updated before this timestamp
   * @default null
   */
  "filter[updatedAtTo]": string | null;
  /**
   * Ids[]
   * @description Filter by a list of product IDs
   * @default null
   */
  "ids[]": number[] | null;
  /**
   * Limit
   * @description Number of products to return per page (max: 250)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (default: 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_PRODUCTS tool output.
 */
type SIMLA_COM_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Page
           * @description Current page number returned
           */
          page: number;
          /**
           * Total Count
           * @description Total number of products available
           */
          totalCount: number;
          /**
           * Total Page Count
           * @description Total number of pages available
           */
          totalPageCount: number;
      };
      /**
       * Products
       * @description List of product objects
       */
      products: {
          /**
           * Active
           * @description Indicates if the product is active
           */
          active: boolean;
          /**
           * Created At
           * @description Creation datetime in ISO8601 format
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the product
           */
          id: number;
          /**
           * Name
           * @description Product name
           */
          name: string;
          /**
           * Price
           * @description Product price
           */
          price: number;
          /**
           * Quantity
           * @description Available stock quantity
           */
          quantity: number;
          /**
           * Updated At
           * @description Last updated datetime in ISO8601 format
           */
          updatedAt: string;
          /**
           * Xml Id
           * @description External product ID
           * @default null
           */
          xmlId: string | null;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_SEGMENTS tool input.
 */
type SIMLA_COM_GET_SEGMENTS_INPUT = {
  /**
   * Filter[Active]
   * @description Filter segments by active status.
   * @default null
   */
  "filter[active]": boolean | null;
  /**
   * Filter[Created At From]
   * @description Filter segments created on or after this date (YYYY-MM-DD).
   * @default null
   */
  "filter[createdAtFrom]": string | null;
  /**
   * Filter[Created At To]
   * @description Filter segments created on or before this date (YYYY-MM-DD).
   * @default null
   */
  "filter[createdAtTo]": string | null;
  /**
   * Filter[Name]
   * @description Filter segments by name.
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Limit
   * @description Number of segments per page. Default is 20.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination. Default is 1.
   * @default null
   */
  page: number | null;
  /**
   * Site
   * @description Symbolic code of the store. Required if the API key has access to multiple stores.
   * @default null
   */
  site: string | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_SEGMENTS tool output.
 */
type SIMLA_COM_GET_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number returned
           */
          currentPage: number;
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Total Count
           * @description Total number of segments available
           */
          totalCount: number;
          /**
           * Total Page Count
           * @description Total number of pages available
           */
          totalPageCount: number;
      };
      /**
       * Segments
       * @description List of customer segments
       */
      segments: {
          /**
           * Active
           * @description Indicates if the segment is active
           */
          active: boolean;
          /**
           * Created At
           * @description Creation datetime of the segment (Y-m-d H:i:s)
           */
          createdAt: string;
          /**
           * Customers Count
           * @description Number of customers in the segment
           */
          customersCount: number;
          /**
           * Id
           * @description Unique identifier of the segment
           */
          id: number;
          /**
           * Name
           * @description Name of the segment
           */
          name: string;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_SITES tool input.
 */
type SIMLA_COM_GET_SITES_INPUT = {
  /**
   * Limit
   * @description Number of sites per page (default: 20)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (default: 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_SITES tool output.
 */
type SIMLA_COM_GET_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Total Count
           * @description Total number of items available
           */
          totalCount: number;
      };
      /**
       * Sites
       * @description List of sites returned
       */
      sites: {
          /**
           * Id
           * @description Unique identifier for the site
           */
          id: string;
          /**
           * Name
           * @description Name of the site
           */
          name: string;
          /**
           * Url
           * @description Base URL of the site
           */
          url: string;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of SIMLA_COM's SIMLA_COM_GET_TASK tool input.
 */
type SIMLA_COM_GET_TASK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the task to retrieve
   */
  id?: number;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_TASK tool output.
 */
type SIMLA_COM_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details returned when a request fails
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code identifier
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Error message description
           * @default null
           */
          message: string | null;
      } | null;
      /**
       * Success
       * @description Indicates if the request was successful
       */
      success: boolean;
      /**
       * TaskDetail
       * @description Detailed information about a task
       * @default null
       */
      task: {
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format
           */
          createdAt: string;
          /**
           * Deadline
           * @description Deadline timestamp in ISO8601 format
           * @default null
           */
          deadline: string | null;
          /**
           * Description
           * @description Task description, if provided
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
          /**
           * Responsible User
           * @description User responsible for the task
           */
          responsibleUser: {
              /**
               * Id
               * @description Responsible user ID
               */
              id: number;
              /**
               * Name
               * @description Responsible user name
               */
              name: string;
          };
          /**
           * Status
           * @description Current status of the task
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
           */
          updatedAt: string;
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
 * Type of SIMLA_COM's SIMLA_COM_GET_TASKS tool input.
 */
type SIMLA_COM_GET_TASKS_INPUT = {
  /**
   * Created At From
   * @description ISO 8601 datetime to include tasks created on or after this timestamp
   * @default null
   */
  createdAtFrom: string | null;
  /**
   * Created At To
   * @description ISO 8601 datetime to include tasks created on or before this timestamp
   * @default null
   */
  createdAtTo: string | null;
  /**
   * Expand
   * @description Related entities to expand in the response
   * @default null
   */
  expand: string[] | null;
  /**
   * Filter
   * @description Custom filter conditions as defined by the API (array of objects)
   * @default null
   */
  filter: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Ids
   * @description Filter by specific task IDs
   * @default null
   */
  ids: number[] | null;
  /**
   * Limit
   * @description Maximum number of tasks to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of tasks to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Order Ids
   * @description Filter by related order IDs
   * @default null
   */
  orderIds: number[] | null;
  /**
   * Responsible User Ids
   * @description Filter by IDs of users responsible for the task
   * @default null
   */
  responsibleUserIds: number[] | null;
  /**
   * Status
   * @description Filter tasks by status
   * @default null
   */
  status: string | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_TASKS tool output.
 */
type SIMLA_COM_GET_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Limit
           * @description Number of items requested
           */
          limit: number;
          /**
           * Offset
           * @description Number of items skipped
           */
          offset: number;
          /**
           * Total Count
           * @description Total number of tasks available
           */
          totalCount: number;
      };
      /**
       * Success
       * @description Indicates if the request was successful
       */
      success: boolean;
      /**
       * Tasks
       * @description List of task objects
       */
      tasks: {
          /**
           * Created At
           * @description Creation datetime in ISO8601 format
           */
          createdAt: string;
          /**
           * Deadline
           * @description Task deadline in ISO8601 format
           * @default null
           */
          deadline: string | null;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Order Id
           * @description Associated order ID
           */
          orderId: number;
          /**
           * Responsible User Id
           * @description ID of responsible user
           */
          responsibleUserId: number;
          /**
           * Status
           * @description Task status
           */
          status: string;
          /**
           * Text
           * @description Task description
           */
          text: string;
          /**
           * Updated At
           * @description Last update datetime in ISO8601 format
           */
          updatedAt: string;
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
 * Type of SIMLA_COM's SIMLA_COM_GET_USERS tool input.
 */
type SIMLA_COM_GET_USERS_INPUT = {
  /**
   * Filter[Created At From]
   * @description Filter users created after this timestamp (YYYY-MM-DD HH:MM:SS)
   * @default null
   */
  "filter[createdAtFrom]": string | null;
  /**
   * Filter[Created At To]
   * @description Filter users created before this timestamp (YYYY-MM-DD HH:MM:SS)
   * @default null
   */
  "filter[createdAtTo]": string | null;
  /**
   * Filter[Custom Field]
   * @description Filter by a custom field
   * @default null
   */
  "filter[customField]": string | null;
  /**
   * Filter[External Id]
   * @description Filter by external user ID
   * @default null
   */
  "filter[externalId]": string | null;
  /**
   * Limit
   * @description Number of users to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Sort By
   * @description Field name to sort by
   * @default null
   */
  sortBy: string | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
};

/**
 * Type of SIMLA_COM's SIMLA_COM_GET_USERS tool output.
 */
type SIMLA_COM_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number returned
           */
          currentPage: number;
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Total Count
           * @description Total number of users available
           */
          totalCount: number;
      };
      /**
       * Success
       * @description Indicates if the request was successful
       */
      success: boolean;
      /**
       * Users
       * @description List of user objects
       */
      users: {
          /**
           * Created At
           * @description Registration datetime (YYYY-MM-DD HH:MM:SS)
           * @default null
           */
          createdAt: string | null;
          /**
           * Email
           * @description User's email address
           * @default null
           */
          email: string | null;
          /**
           * External Id
           * @description External user ID
           * @default null
           */
          externalId: string | null;
          /**
           * First Name
           * @description User's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique user identifier
           */
          id: number;
          /**
           * Last Name
           * @description User's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Phone
           * @description User's phone number
           * @default null
           */
          phone: string | null;
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
 * Type map of all available tool input types for toolkit "SIMLA_COM".
 */
export type SIMLA_COM_TOOL_INPUTS = {
  CREATE_CUSTOMER: SIMLA_COM_CREATE_CUSTOMER_INPUT
  CREATE_CUSTOM_FIELD: SIMLA_COM_CREATE_CUSTOM_FIELD_INPUT
  CREATE_ORDER: SIMLA_COM_CREATE_ORDER_INPUT
  CREATE_TASK: SIMLA_COM_CREATE_TASK_INPUT
  EDIT_CUSTOMER: SIMLA_COM_EDIT_CUSTOMER_INPUT
  EDIT_CUSTOM_FIELD: SIMLA_COM_EDIT_CUSTOM_FIELD_INPUT
  EDIT_ORDER: SIMLA_COM_EDIT_ORDER_INPUT
  EDIT_TASK: SIMLA_COM_EDIT_TASK_INPUT
  GET_CUSTOMER: SIMLA_COM_GET_CUSTOMER_INPUT
  GET_CUSTOMERS: SIMLA_COM_GET_CUSTOMERS_INPUT
  GET_CUSTOM_FIELDS: SIMLA_COM_GET_CUSTOM_FIELDS_INPUT
  GET_ORDER: SIMLA_COM_GET_ORDER_INPUT
  GET_ORDERS: SIMLA_COM_GET_ORDERS_INPUT
  GET_PRODUCTS: SIMLA_COM_GET_PRODUCTS_INPUT
  GET_SEGMENTS: SIMLA_COM_GET_SEGMENTS_INPUT
  GET_SITES: SIMLA_COM_GET_SITES_INPUT
  GET_TASK: SIMLA_COM_GET_TASK_INPUT
  GET_TASKS: SIMLA_COM_GET_TASKS_INPUT
  GET_USERS: SIMLA_COM_GET_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIMLA_COM".
 */
export type SIMLA_COM_TOOL_OUTPUTS = {
  CREATE_CUSTOMER: SIMLA_COM_CREATE_CUSTOMER_OUTPUT
  CREATE_CUSTOM_FIELD: SIMLA_COM_CREATE_CUSTOM_FIELD_OUTPUT
  CREATE_ORDER: SIMLA_COM_CREATE_ORDER_OUTPUT
  CREATE_TASK: SIMLA_COM_CREATE_TASK_OUTPUT
  EDIT_CUSTOMER: SIMLA_COM_EDIT_CUSTOMER_OUTPUT
  EDIT_CUSTOM_FIELD: SIMLA_COM_EDIT_CUSTOM_FIELD_OUTPUT
  EDIT_ORDER: SIMLA_COM_EDIT_ORDER_OUTPUT
  EDIT_TASK: SIMLA_COM_EDIT_TASK_OUTPUT
  GET_CUSTOMER: SIMLA_COM_GET_CUSTOMER_OUTPUT
  GET_CUSTOMERS: SIMLA_COM_GET_CUSTOMERS_OUTPUT
  GET_CUSTOM_FIELDS: SIMLA_COM_GET_CUSTOM_FIELDS_OUTPUT
  GET_ORDER: SIMLA_COM_GET_ORDER_OUTPUT
  GET_ORDERS: SIMLA_COM_GET_ORDERS_OUTPUT
  GET_PRODUCTS: SIMLA_COM_GET_PRODUCTS_OUTPUT
  GET_SEGMENTS: SIMLA_COM_GET_SEGMENTS_OUTPUT
  GET_SITES: SIMLA_COM_GET_SITES_OUTPUT
  GET_TASK: SIMLA_COM_GET_TASK_OUTPUT
  GET_TASKS: SIMLA_COM_GET_TASKS_OUTPUT
  GET_USERS: SIMLA_COM_GET_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIMLA_COM toolkit.
 */
export const SIMLA_COM = {
  slug: "simla_com",
  tools: {
    /**
     * Tool to create a new customer. use after gathering all customer information.
     */
    CREATE_CUSTOMER: "SIMLA_COM_CREATE_CUSTOMER",
    /**
     * Tool to create a custom field for a specified entity in simla. use when you need to extend orders, customers, corporate customers, or companies with custom metadata fields.
     */
    CREATE_CUSTOM_FIELD: "SIMLA_COM_CREATE_CUSTOM_FIELD",
    /**
     * Tool to create a new order. use when you have all order details prepared and need to register it in simla via the api.
     */
    CREATE_ORDER: "SIMLA_COM_CREATE_ORDER",
    /**
     * Tool to create a new task. use after gathering task details and assignees.
     */
    CREATE_TASK: "SIMLA_COM_CREATE_TASK",
    /**
     * Tool to edit an existing customer. use when you need to update customer details by external id.
     */
    EDIT_CUSTOMER: "SIMLA_COM_EDIT_CUSTOMER",
    /**
     * Tool to edit an existing custom field by entity and code. use when you need to update custom field metadata before usage.
     */
    EDIT_CUSTOM_FIELD: "SIMLA_COM_EDIT_CUSTOM_FIELD",
    /**
     * Tool to edit an existing order by external id. use when you need to update order details by external id.
     */
    EDIT_ORDER: "SIMLA_COM_EDIT_ORDER",
    /**
     * Tool to edit an existing task. use after confirming task id and fields to update. updates only provided fields on the task.
     */
    EDIT_TASK: "SIMLA_COM_EDIT_TASK",
    /**
     * Tool to retrieve information about a specific customer. use when you need full customer data by external id before further operations.
     */
    GET_CUSTOMER: "SIMLA_COM_GET_CUSTOMER",
    /**
     * Tool to retrieve a list of customers. use after setting optional filters (ids, email, custom fields) to fetch paginated customer data.
     */
    GET_CUSTOMERS: "SIMLA_COM_GET_CUSTOMERS",
    /**
     * Tool to list custom fields. use when retrieving custom field definitions with optional filtering by entity or code.
     */
    GET_CUSTOM_FIELDS: "SIMLA_COM_GET_CUSTOM_FIELDS",
    /**
     * Tool to retrieve detailed information about a specific order. use when you need to fetch full order data by external id before further processing.
     */
    GET_ORDER: "SIMLA_COM_GET_ORDER",
    /**
     * Tool to retrieve a list of orders. use when you need to fetch orders with optional filters (order numbers, custom fields) and pagination.
     */
    GET_ORDERS: "SIMLA_COM_GET_ORDERS",
    /**
     * Tool to retrieve a list of products. use when you need to list products with optional filters.
     */
    GET_PRODUCTS: "SIMLA_COM_GET_PRODUCTS",
    /**
     * Tool to retrieve a list of customer segments. use when you need to list segments with optional filters after authentication.
     */
    GET_SEGMENTS: "SIMLA_COM_GET_SEGMENTS",
    /**
     * Tool to retrieve a list of sites. use when you need to discover all configured sites with optional pagination.
     */
    GET_SITES: "SIMLA_COM_GET_SITES",
    /**
     * Tool to retrieve detailed information about a specific task. use when you need full task details by task id before taking further actions.
     */
    GET_TASK: "SIMLA_COM_GET_TASK",
    /**
     * Tool to retrieve a list of tasks with optional filters. use when you need to fetch tasks after specifying filter criteria like ids, status, or date range.
     */
    GET_TASKS: "SIMLA_COM_GET_TASKS",
    /**
     * Tool to retrieve a list of users. use when you need to fetch users with optional pagination, filtering, and sorting.
     */
    GET_USERS: "SIMLA_COM_GET_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIMLA_COM".
 */
export type SIMLA_COM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIMLA_COM".
 */
export type SIMLA_COM_TRIGGER_EVENTS = {}
